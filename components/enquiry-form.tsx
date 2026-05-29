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
        <select
          id="enquiry-level"
          name="schoolLevel"
          required
          defaultValue="JC 1"
          className={`${inputClassName} appearance-none`}
          disabled={status === "loading"}
        >
          {schoolLevels.map((level) => (
            <option key={level} value={level}>
              {level}
            </option>
          ))}
        </select>
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
