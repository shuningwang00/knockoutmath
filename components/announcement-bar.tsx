"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const STORAGE_KEY = "kom-announcement-dismissed-nov2026";

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!sessionStorage.getItem(STORAGE_KEY)) {
      setVisible(true);
    }
  }, []);

  function dismiss() {
    sessionStorage.setItem(STORAGE_KEY, "1");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="relative z-50 bg-orange-500 px-4 py-2.5 text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
        <p className="font-heading text-xs font-bold uppercase tracking-[0.12em] sm:text-sm">
          <span className="mr-2 hidden sm:inline">🎯</span>
          November Holiday Programmes 2026 — 6 masterclasses from 10–24 Nov
        </p>
        <div className="flex shrink-0 items-center gap-3">
          <Link
            href="https://wa.me/6584760600"
            target="_blank"
            rel="noopener noreferrer"
            className="font-heading rounded-full border border-white/40 bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.1em] transition hover:bg-white/25"
          >
            Register interest
          </Link>
          <button
            onClick={dismiss}
            aria-label="Dismiss announcement"
            className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full opacity-80 transition hover:opacity-100"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
