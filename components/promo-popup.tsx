"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const STORAGE_KEY = "kom-promo-dismissed-nov2026";

const programmes = [
  "Sec 2 AMP: Algebra Mastery Programme",
  "Sec 3 E Math: Quadratic Equations",
  "Sec 3 A Math: Equations & Inequalities",
  "Sec 4 E Math: Circles Masterclass",
  "Sec 4 A Math Trigonometry Masterclass",
  "JC H2 Math Vectors Masterclass",
];

export default function PromoPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!sessionStorage.getItem(STORAGE_KEY)) {
      const t = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(t);
    }
  }, []);

  function dismiss() {
    sessionStorage.setItem(STORAGE_KEY, "1");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm"
      onClick={(e) => { if (e.target === e.currentTarget) dismiss(); }}
    >
      <div className="relative w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl">
        <div className="bg-black px-6 pb-4 pt-6">
          <h2 className="font-heading font-black uppercase leading-tight tracking-tight text-white">
            <span className="block text-3xl">Nov 2026 Holiday Programmes</span>
            <span className="mt-1 inline-block rounded-full bg-orange-500 px-3 py-0.5 text-sm">Free to attend</span>
          </h2>
          <p className="font-body mt-3 text-sm leading-relaxed text-zinc-400">
            Find the level suitable for you:
          </p>
        </div>

        <ul className="divide-y divide-zinc-100 px-6">
          {programmes.map((name) => (
            <li key={name} className="flex items-center gap-3 py-3">
              <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
              <p className="font-body text-sm text-zinc-800">{name}</p>
            </li>
          ))}
        </ul>

        <div className="px-6 pb-6 pt-4">
          <Link
            href="/november-holiday-programmes/"
            onClick={dismiss}
            className="font-heading flex w-full items-center justify-center rounded-full bg-black px-6 py-3.5 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:bg-orange-500"
          >
            Find out more
          </Link>
        </div>

        <button
          onClick={dismiss}
          aria-label="Close"
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
}
