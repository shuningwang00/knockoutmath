"use client";

import HashLink from "@/components/hash-link";
import FadeIn from "@/components/fade-in";
import type { ProgrammePageContent } from "@/lib/programme-pages/types";

function NavIcon({ type }: { type: "star" | "bookmark" }) {
  if (type === "bookmark") {
    return (
      <svg className="h-4 w-4 shrink-0" viewBox="0 0 16 16" fill="currentColor" aria-hidden>
        <path d="M3 2.5A1.5 1.5 0 0 1 4.5 1h7A1.5 1.5 0 0 1 13 2.5V14l-5-3-5 3V2.5Z" />
      </svg>
    );
  }

  return (
    <svg className="h-4 w-4 shrink-0" viewBox="0 0 16 16" fill="currentColor" aria-hidden>
      <path d="M8 1.2 9.6 5.8l4.8.1-3.8 2.8 1.5 4.6L8 10.9l-3.9 2.4 1.5-4.6-3.8-2.8 4.8-.1L8 1.2Z" />
    </svg>
  );
}

export default function ProgrammeFoundationNav({
  foundation,
}: {
  foundation: ProgrammePageContent["foundation"];
}) {
  return (
    <section className="section-y scroll-mt-24 border-b border-zinc-200 bg-[#f6f4ef]">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 md:grid-cols-2 md:items-start md:gap-16 md:px-6 lg:gap-24">
        <FadeIn>
          <div>
            <h2 className="font-heading text-3xl font-black uppercase leading-[1.05] tracking-tight text-black md:text-5xl lg:text-6xl">
              {foundation.titleLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
            <div className="mt-6 h-1.5 w-28 bg-black" aria-hidden />
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <div>
            <p className="font-body max-w-prose whitespace-pre-line text-base leading-relaxed text-zinc-800 md:text-lg">
              {foundation.intro}
            </p>

          <nav className="mt-10" aria-label="Programme sections">
            <ul>
              {foundation.nav.map((item) => (
                <li key={item.href} className="border-b border-zinc-300/80">
                  <HashLink
                    href={item.href}
                    className="group flex items-center gap-3 py-4 transition hover:text-orange-600"
                  >
                    <NavIcon type={item.icon} />
                    <span className="font-heading text-sm font-bold uppercase tracking-[0.14em] text-black group-hover:text-orange-600 md:text-base">
                      {item.label}
                    </span>
                  </HashLink>
                </li>
              ))}
            </ul>
          </nav>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
