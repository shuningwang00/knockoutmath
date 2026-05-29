"use client";

import { useState } from "react";

const schoolLevels = [
  "Primary",
  "Secondary 1",
  "Secondary 2",
  "Secondary 3",
  "Secondary 4",
  "JC 1",
  "JC 2",
  "Other",
] as const;

const inputClassName =
  "w-full rounded-md border-0 bg-[#f3efe8] px-4 py-3 text-sm text-zinc-900 outline-none ring-orange-500 focus:ring-2";

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

export default function EnquiryForm() {
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
      schoolLevel: String(formData.get("schoolLevel") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    try {
      const response = await fetch("/api/enquiry/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await response.json()) as { error?: string; success?: boolean };

      if (!response.ok) {
        setStatus("error");
        setErrorMessage(data.error ?? "Could not send your message.");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage("Could not send your message. Please try again.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="enquiry-name" className="mb-2 block text-sm text-white">
            Name
          </label>
          <input
            id="enquiry-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={inputClassName}
            disabled={status === "loading"}
          />
        </div>
        <div>
          <label htmlFor="enquiry-contact" className="mb-2 block text-sm text-white">
            Contact No.
          </label>
          <input
            id="enquiry-contact"
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
        <label htmlFor="enquiry-level" className="mb-2 block text-sm text-white">
          School Level
        </label>
        <div className="relative">
          <select
            id="enquiry-level"
            name="schoolLevel"
            required
            defaultValue="JC 1"
            className={`${inputClassName} cursor-pointer appearance-none pr-10`}
            disabled={status === "loading"}
          >
            {schoolLevels.map((level) => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </select>
          <ChevronDownIcon className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-500" />
        </div>
      </div>

      <div>
        <label htmlFor="enquiry-message" className="mb-2 block text-sm text-white">
          Message
        </label>
        <textarea
          id="enquiry-message"
          name="message"
          required
          rows={5}
          placeholder="E.g. Any available classes on Thursday? Any holiday programmes? Do you have sample class notes?"
          className={`${inputClassName} resize-y`}
          disabled={status === "loading"}
        />
      </div>

      {status === "success" ? (
        <p className="text-sm font-semibold text-orange-400">
          Thank you! We&apos;ve received your enquiry and will get back to you soon.
        </p>
      ) : null}

      {status === "error" ? (
        <p className="text-sm font-semibold text-red-400">{errorMessage}</p>
      ) : null}

      <button
        type="submit"
        disabled={status === "loading"}
        className="font-heading w-full rounded-lg bg-orange-500 py-4 text-base font-bold text-white transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "loading" ? "Sending…" : "Send"}
      </button>
    </form>
  );
}
