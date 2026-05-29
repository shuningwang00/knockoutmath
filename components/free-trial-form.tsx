"use client";

import { useState } from "react";
import { freeTrialLevels } from "@/lib/free-trial";

const inputClassName =
  "w-full rounded-md border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 outline-none ring-orange-500 focus:border-orange-500 focus:ring-2";

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden
    >
      <path
        fillRule="evenodd"
        d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function FreeTrialForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? ""),
      contact: String(formData.get("contact") ?? ""),
      level: String(formData.get("level") ?? ""),
      school: String(formData.get("school") ?? ""),
    };

    try {
      const response = await fetch("/api/free-trial/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await response.json()) as { error?: string; success?: boolean };

      if (!response.ok) {
        setStatus("error");
        setErrorMessage(data.error ?? "Could not send your request.");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage("Could not send your request. Please try again.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="trial-name" className="font-heading mb-2 block text-xs font-bold uppercase tracking-wide text-zinc-700">
            Name
          </label>
          <input
            id="trial-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={inputClassName}
            disabled={status === "loading"}
          />
        </div>
        <div>
          <label htmlFor="trial-contact" className="font-heading mb-2 block text-xs font-bold uppercase tracking-wide text-zinc-700">
            Phone
          </label>
          <input
            id="trial-contact"
            name="contact"
            type="tel"
            required
            autoComplete="tel"
            className={inputClassName}
            disabled={status === "loading"}
          />
        </div>
      </div>

      <div>
        <label htmlFor="trial-level" className="font-heading mb-2 block text-xs font-bold uppercase tracking-wide text-zinc-700">
          Level
        </label>
        <div className="relative">
          <select
            id="trial-level"
            name="level"
            required
            defaultValue="Secondary E-Math"
            className={`${inputClassName} cursor-pointer appearance-none pr-10`}
            disabled={status === "loading"}
          >
            {freeTrialLevels.map((level) => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </select>
          <ChevronDownIcon className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-500" />
        </div>
      </div>

      <div>
        <label htmlFor="trial-school" className="font-heading mb-2 block text-xs font-bold uppercase tracking-wide text-zinc-700">
          School
        </label>
        <input
          id="trial-school"
          name="school"
          type="text"
          required
          autoComplete="organization"
          className={inputClassName}
          disabled={status === "loading"}
        />
      </div>

      {status === "success" ? (
        <p className="text-sm font-semibold text-orange-600">
          Thank you! We&apos;ve received your free trial request and will be in touch soon.
        </p>
      ) : null}

      {status === "error" ? (
        <p className="text-sm font-semibold text-red-600">{errorMessage}</p>
      ) : null}

      <button
        type="submit"
        disabled={status === "loading"}
        className="font-heading w-full rounded-full bg-orange-500 py-4 text-base font-bold uppercase tracking-[0.12em] text-white transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "loading" ? "Sending…" : "Give me that trial!"}
      </button>
    </form>
  );
}
