"use client";

import Link from "next/link";
import { useEffect } from "react";
import type { ClassSlot } from "@/lib/schedule";
import { DAY_LABELS, SCHEDULE_LOCATION } from "@/lib/schedule";

type ClassSlotDetailProps = {
  slot: ClassSlot | null;
  onClose: () => void;
};

const ctaPrimary =
  "font-heading inline-flex rounded-full border-2 border-black bg-black px-6 py-3 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:border-orange-500 hover:bg-orange-500";

const ctaOrange =
  "font-heading inline-flex rounded-full border-2 border-orange-500 bg-orange-500 px-6 py-3 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:bg-orange-600";

export default function ClassSlotDetail({ slot, onClose }: ClassSlotDetailProps) {
  useEffect(() => {
    if (!slot) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [slot, onClose]);

  if (!slot) return null;

  const isFull = slot.status === "full";

  return (
    <div className="fixed inset-0 z-[60] flex items-end justify-center p-4 sm:items-center" role="presentation">
      <button
        type="button"
        className="absolute inset-0 bg-black/50"
        aria-label="Close class details"
        onClick={onClose}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="class-slot-title"
        className="relative z-10 w-full max-w-md rounded-2xl border border-zinc-200 bg-white p-6 shadow-xl"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-1 text-zinc-400 transition hover:bg-zinc-100 hover:text-black"
          aria-label="Close"
        >
          <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
            <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
          </svg>
        </button>

        <div className="pr-8">
          <p className="font-heading text-xs font-bold uppercase tracking-[0.14em] text-orange-500">
            {DAY_LABELS[slot.day]} · {slot.timeLabel}
          </p>
          <h3 id="class-slot-title" className="font-heading mt-2 text-2xl font-black uppercase tracking-tight text-black">
            {slot.label}
          </h3>

          <div className="mt-3 flex flex-wrap items-center gap-2">
            <span
              className={`font-heading rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide ${
                isFull ? "bg-zinc-200 text-zinc-600" : "bg-orange-100 text-orange-700"
              }`}
            >
              {isFull ? "Waitlist only" : "Open for enrolment"}
            </span>
          </div>

          <p className="font-body mt-4 text-sm leading-relaxed text-zinc-700">{slot.description}</p>

          <p className="font-body mt-4 flex items-start gap-2 text-sm text-zinc-600">
            <svg className="mt-0.5 h-4 w-4 shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
              <path
                fillRule="evenodd"
                d="m9.69 18.933.003.001C9.89 19.02 10 19 10 19s.11.02.261-.023c.165-.023.303-.09.403-.183.1-.092.17-.207.22-.344l1.454-4.066 4.066-1.454c.137-.05.252-.12.344-.22.092-.1.16-.238.183-.403.023-.165.023-.261-.023-.261s-.02-.11-.183-.403l-4.066-1.454-1.454-4.066c-.05-.137-.12-.252-.22-.344-.1-.092-.238-.16-.403-.183-.165-.023-.261-.023-.261-.023s-.11.02-.261.023c-.165.023-.303.09-.403.183-.1.092-.17.207-.22.344l-1.454 4.066-4.066 1.454c-.137.05-.252.12-.344.22-.092.1-.16.238-.183.403-.023.165-.023.261.023.261.023s.11-.02.261-.023c.165-.023.303-.09.403-.183.1-.092.17-.207.22-.344l1.454 4.066 4.066 1.454c.137.05.252.12.344.22.092.1.238.16.403.183.165.023.261.023.261.023s.11-.02.261-.023Z"
                clipRule="evenodd"
              />
            </svg>
            <span>
              {SCHEDULE_LOCATION.name}
              <br />
              <span className="text-zinc-500">{SCHEDULE_LOCATION.address}</span>
            </span>
          </p>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link href="/free-math-trial/" className={`${ctaOrange} justify-center`}>
            Free trial
          </Link>
          <Link href="#enquire" onClick={onClose} className={`${ctaPrimary} justify-center`}>
            {isFull ? "Join waitlist" : "Enquire now"}
          </Link>
        </div>

        <Link
          href={slot.programmeHref}
          className="font-heading mt-4 inline-block text-sm font-bold uppercase tracking-wide text-zinc-600 underline-offset-4 transition hover:text-orange-600 hover:underline"
        >
          View programme details →
        </Link>
      </div>
    </div>
  );
}
