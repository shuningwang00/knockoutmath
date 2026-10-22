"use client";

import { useEffect, useRef, useState } from "react";

const RADIUS = 66;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const stats = [
  {
    value: 82,
    label: "Distinction Rate",
    description: "Students scoring A/A* or Distinction",
  },
  {
    value: 98,
    label: "Pass Rate",
    description: "Students achieving a passing grade",
  },
  {
    value: 100,
    label: "Grade Improvement",
    description: "Students improved by at least one grade",
  },
];

function useCountUp(target: number, duration: number, active: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) { setCount(0); return; }

    let startTime: number | null = null;
    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [active, target, duration]);
  return count;
}

function StatCard({
  stat,
  inView,
  index,
}: {
  stat: (typeof stats)[0];
  inView: boolean;
  index: number;
}) {
  const count = useCountUp(stat.value, 1500, inView);
  const offset = inView ? CIRCUMFERENCE * (1 - stat.value / 100) : CIRCUMFERENCE;

  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <div className="relative">
        <svg width="168" height="168" viewBox="0 0 168 168" className="-rotate-90">
          <circle cx="84" cy="84" r={RADIUS} fill="none" stroke="#e4e4e7" strokeWidth="8" />
          <circle
            cx="84"
            cy="84"
            r={RADIUS}
            fill="none"
            stroke="#f97316"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={offset}
            style={{
              transition: inView
                ? `stroke-dashoffset 1.5s cubic-bezier(0.4, 0, 0.2, 1) ${index * 150}ms`
                : "none",
            }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-heading text-4xl font-black text-black">
            {count}
            <span className="text-orange-500">%</span>
          </span>
        </div>
      </div>
      <div>
        <p className="font-heading text-sm font-bold uppercase tracking-[0.12em] text-black">
          {stat.label}
        </p>
        <p className="font-body mt-1 max-w-[140px] text-xs leading-relaxed text-zinc-500">
          {stat.description}
        </p>
      </div>
    </div>
  );
}

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { setInView(entry.isIntersecting); },
      { threshold: 0.3 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-[#f6f4ef] py-14 md:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <div className="mb-12 text-center">
          <p className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
            Our results
          </p>
          <h2 className="font-heading mt-2 text-2xl font-black uppercase tracking-tight text-black md:text-3xl">
            The numbers speak
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 md:gap-6">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} inView={inView} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
