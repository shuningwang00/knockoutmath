"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Programme = {
  name: string;
  shortName: string;
  for: string;
  tag: string;
  gradient: string;
  poster: string;
  runs: string[];
};

const programmes: Programme[] = [
  {
    name: "Sec 2 AMP: Algebra Mastery Programme",
    shortName: "Sec 2\nAMP",
    for: "Sec 1 G3 going Sec 2 G3 in 2027",
    tag: "Back for 2nd time",
    gradient: "from-pink-400 via-fuchsia-500 to-purple-700",
    poster: "/holiday-nov-2026/sec2-amp-algebra.jpeg",
    runs: ["18 Nov, 4–6pm", "19 Nov, 4–6pm"],
  },
  {
    name: "Sec 3 E Math: Quadratic Equations",
    shortName: "Sec 3\nE Math",
    for: "Sec 2 going Sec 3 in 2027",
    tag: "Newly added",
    gradient: "from-emerald-400 via-teal-500 to-cyan-700",
    poster: "/holiday-nov-2026/sec3-emath-quadratic.jpeg",
    runs: ["Run 1: 10 Nov, 4–6pm", "Run 2: 11 Nov, 4–6pm"],
  },
  {
    name: "Sec 3 A Math: Equations & Inequalities",
    shortName: "Sec 3\nA Math",
    for: "Sec 2 going Sec 3 in 2027",
    tag: "Newly added",
    gradient: "from-green-700 via-emerald-900 to-slate-900",
    poster: "/holiday-nov-2026/sec3-amath-equations.jpeg",
    runs: ["Run 1: 10 Nov, 6–8pm", "Run 2: 11 Nov, 6–8pm"],
  },
  {
    name: "Sec 4 E Math: Circles Masterclass",
    shortName: "Sec 4\nE Math",
    for: "Sec 3 going Sec 4 in 2027",
    tag: "Newly added",
    gradient: "from-blue-500 via-indigo-600 to-purple-800",
    poster: "/holiday-nov-2026/sec4-emath-circles.jpeg",
    runs: ["23 Nov, 10am–1pm"],
  },
  {
    name: "Sec 4 A Math Trigonometry Masterclass",
    shortName: "Sec 4\nA Math",
    for: "Sec 3 going Sec 4 in 2027",
    tag: "Back for 2nd time",
    gradient: "from-indigo-500 via-violet-700 to-purple-900",
    poster: "/holiday-nov-2026/sec4-amath-trigonometry.jpeg",
    runs: ["24 Nov, 10am–1pm"],
  },
  {
    name: "JC H2 Math Vectors Masterclass",
    shortName: "JC\nH2 Math",
    for: "JC1 going JC2 in 2027",
    tag: "Back for 2nd time",
    gradient: "from-sky-400 via-blue-500 to-indigo-700",
    poster: "/holiday-nov-2026/jc-h2math-vectors.jpeg",
    runs: ["Run 1: 10 & 11 Nov, 10am–1pm", "Run 2: 14 Nov, 2:30–7pm (½h break)"],
  },
];

export default function HolidayProgrammesGrid() {
  const [selected, setSelected] = useState<Programme | null>(null);

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {programmes.map((prog) => (
          <button
            key={prog.name}
            onClick={() => setSelected(prog)}
            className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${prog.gradient} p-6 text-left shadow-lg transition hover:scale-[1.02] hover:shadow-xl`}
          >
            <span className="font-heading inline-block rounded-full bg-black/30 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-white/90">
              {prog.tag}
            </span>
            <p className="font-heading mt-4 whitespace-pre-line text-3xl font-black uppercase leading-none tracking-tight text-white">
              {prog.shortName}
            </p>
            <p className="font-heading mt-2 text-sm font-bold uppercase tracking-tight text-white/80">
              {prog.name.split(":")[1]?.trim() ?? prog.name}
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {prog.runs.map((r) => (
                <span key={r} className="font-heading rounded-full bg-black/25 px-2.5 py-1 text-xs font-bold text-white/90">
                  {r}
                </span>
              ))}
            </div>
            <p className="font-body mt-3 text-xs text-white/60">For {prog.for}</p>
            <div className="mt-3 flex items-center gap-1.5 text-white/90">
              <span className="font-heading text-xs font-bold uppercase tracking-[0.1em]">Find out more</span>
              <svg className="h-3 w-3 transition group-hover:translate-x-0.5" viewBox="0 0 12 12" fill="none">
                <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </button>
        ))}
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 px-4 py-8 backdrop-blur-sm"
          onClick={(e) => { if (e.target === e.currentTarget) setSelected(null); }}
        >
          <div className="relative flex w-full max-w-sm flex-col overflow-hidden rounded-2xl shadow-2xl">
            <button
              onClick={() => setSelected(null)}
              aria-label="Close"
              className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition hover:bg-black/60"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
              </svg>
            </button>
            <Image
              src={selected.poster}
              alt={selected.name}
              width={800}
              height={1000}
              className="w-full object-cover"
            />
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSfRQ4iMdue6U_XDxqGVWiVKzvWrCKQFu0NaK7n0kS8smtC9mA/viewform?usp=send_form"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setSelected(null)}
              className="font-heading flex w-full items-center justify-center bg-orange-500 px-6 py-4 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:bg-orange-600"
            >
              Register interest
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
