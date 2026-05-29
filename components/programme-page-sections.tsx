import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/fade-in";
import type { ProgrammePageContent, ProgrammeTerm } from "@/lib/programme-pages/types";

const ctaPrimary =
  "font-heading inline-flex rounded-full border-2 border-black bg-black px-8 py-3.5 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:border-orange-500 hover:bg-orange-500";

const ctaOrange =
  "font-heading inline-flex rounded-full border-2 border-orange-500 bg-orange-500 px-8 py-3.5 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:bg-orange-600";

function programmeHeroImage(cardImage: string) {
  return cardImage.replace("/programmes/", "/programmes/heroes/");
}

export function ProgrammeHero({ hero }: { hero: ProgrammePageContent["hero"] }) {
  return (
    <section className="relative min-h-[22rem] overflow-hidden border-b border-zinc-200 md:min-h-[26rem]">
      <Image
        src={programmeHeroImage(hero.image)}
        alt={hero.imageAlt}
        fill
        className="object-cover object-center"
        sizes="100vw"
        quality={90}
        priority
      />
      <div className="absolute inset-0 bg-black/55" aria-hidden />

      <div className="relative mx-auto flex w-full max-w-6xl items-center px-4 py-14 md:px-6 md:py-20">
        <div className="max-w-2xl">
          <p className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-orange-400">
            {hero.eyebrow}
          </p>
          <h1 className="font-heading mt-3 text-3xl font-black uppercase leading-tight tracking-tight text-white md:text-5xl">
            {hero.title}
          </h1>
          <p className="font-heading mt-3 text-lg font-bold uppercase tracking-[0.1em] text-white/85 md:text-xl">
            {hero.subtitle}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/free-math-trial/" className={ctaOrange}>
              Free trial
            </Link>
            <Link href="/schedule/" className={ctaPrimary}>
              Class schedule
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function syllabusSectionId(level: string) {
  if (level.includes("Secondary 1")) return "secondary-1-scheme-of-work";
  if (level.includes("Secondary 2")) return "secondary-2-scheme-of-work";
  if (level.includes("Secondary 3")) return "secondary-3-scheme-of-work";
  if (level.includes("Secondary 4")) return "secondary-4-scheme-of-work";
  if (level.includes("JC 1")) return "jc-1-scheme-of-work";
  if (level.includes("JC 2")) return "jc-2-scheme-of-work";
  return level.toLowerCase().replace(/\s+/g, "-");
}

const TERM_HEADER_COLORS = [
  "bg-[#f4c98a]",
  "bg-[#b8d4f0]",
  "bg-[#b8dfc4]",
  "bg-[#f0b8c8]",
] as const;

function SyllabusChapterLine({ chapter }: { chapter: string }) {
  const match = chapter.match(/^(Chapter \d+:)(.*)$/);

  if (match) {
    return (
      <>
        <span className="font-bold">{match[1]}</span>
        {match[2]}
      </>
    );
  }

  return <>{chapter}</>;
}

function SyllabusTermTable({ terms }: { terms: ProgrammeTerm[] }) {
  return (
    <div className="w-full overflow-hidden border border-black">
      {terms.map((term, index) => (
        <div key={`${term.name}-${term.dates}`} className="border-b border-black last:border-b-0">
          <div
            className={`${TERM_HEADER_COLORS[index % TERM_HEADER_COLORS.length]} border-b border-black px-2.5 py-2 text-center`}
          >
            <p className="font-heading text-sm font-bold text-black">{term.name}</p>
            <p className="font-body text-xs text-black/80">{term.dates}</p>
          </div>

          <div className="min-h-[1.25rem] bg-[#f6f4ef] px-2.5 py-2">
            {term.chapters.length > 0 ? (
              <ul className="space-y-0.5">
                {term.chapters.map((chapter) => (
                  <li key={chapter} className="font-body text-xs leading-snug text-black md:text-sm">
                    <SyllabusChapterLine chapter={chapter} />
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
}

export function ProgrammeHighlights({
  highlights,
}: {
  highlights: ProgrammePageContent["highlights"];
}) {
  return (
    <section id="programme-features" className="section-y scroll-mt-24 bg-white">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <FadeIn>
          <h2 className="font-heading text-center text-2xl font-black uppercase tracking-tight text-black md:text-4xl">
            {highlights.title}
          </h2>
        </FadeIn>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <FadeIn delay={80}>
            <article className="card-lift h-full rounded-2xl border border-zinc-200 bg-[#f6f4ef] p-6 md:p-8">
              <h3 className="font-heading text-lg font-bold uppercase tracking-[0.1em] text-black">
                {highlights.moeTitle}
              </h3>
              <p className="font-body mt-4 max-w-prose text-base leading-relaxed text-zinc-800">
                {highlights.moeBody}
              </p>
            </article>
          </FadeIn>

          <FadeIn delay={160}>
            <article className="card-lift h-full rounded-2xl border border-zinc-200 bg-white p-6 md:p-8">
            <h3 className="font-heading text-lg font-bold uppercase tracking-[0.1em] text-black">
              {highlights.featuresTitle}
            </h3>
            <ul className="mt-5 space-y-6">
              {highlights.features.map((feature) => (
                <li key={feature.title}>
                  <p className="font-heading text-sm font-bold uppercase tracking-[0.08em] text-orange-600">
                    {feature.title}
                  </p>
                  <ul className="mt-2 space-y-2">
                    {feature.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-2 text-sm leading-relaxed text-zinc-700 md:text-base"
                      >
                        <span
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500"
                          aria-hidden
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </article>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

export function ProgrammeSyllabus({
  syllabi,
  fees,
}: {
  syllabi?: ProgrammePageContent["syllabi"];
  fees?: ProgrammePageContent["fees"];
}) {
  if (!syllabi?.length && !fees) return null;

  return (
    <section className="section-y border-y border-zinc-200 bg-[#f6f4ef]">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <FadeIn>
          <h2 className="font-heading text-center text-2xl font-black uppercase tracking-tight text-black md:text-4xl">
            Scheme of Work
          </h2>
        </FadeIn>

        <div className="mt-10 space-y-14">
          {syllabi?.map((syllabus, index) => (
            <FadeIn key={syllabus.level} delay={index * 80}>
            <div
              id={syllabusSectionId(syllabus.level)}
              className="scroll-mt-24 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] lg:items-start lg:gap-10"
            >
              <div>
                <h3 className="font-heading text-xl font-black uppercase tracking-tight text-black md:text-2xl">
                  {syllabus.level}
                </h3>
                <p className="font-body mt-3 max-w-prose whitespace-pre-line text-sm leading-relaxed text-zinc-800 md:text-base">
                  {syllabus.intro}
                </p>
              </div>

              <SyllabusTermTable terms={syllabus.terms} />
            </div>
            </FadeIn>
          ))}

          {fees ? (
            <FadeIn delay={(syllabi?.length ?? 0) * 80}>
            <div
              id="fees"
              className="scroll-mt-24 grid gap-6 border-t border-zinc-300/80 pt-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] lg:items-start lg:gap-10"
            >
              <div>
                <h3 className="font-heading text-xl font-black uppercase tracking-tight text-black md:text-2xl">
                  Fees
                </h3>
                <p className="font-body mt-3 max-w-prose text-sm leading-relaxed text-zinc-800 md:text-base">
                  {fees.intro ??
                    "Straightforward pricing for our Secondary 1 and 2 G3 classes — materials included, with pro-rated options if you join mid-term."}
                </p>
              </div>

              <div className="w-full border border-black bg-white">
                <div className="border-b border-black bg-[#f4c98a] px-4 py-3 text-center">
                  <p className="font-heading text-2xl font-black text-black md:text-3xl">
                    {fees.amount}
                  </p>
                  <p className="font-heading mt-0.5 text-xs font-bold uppercase tracking-[0.12em] text-black/80">
                    {fees.unit}
                  </p>
                </div>
                {fees.bundle ? (
                  <div className="border-b border-black bg-[#b8d4f0] px-4 py-3 text-center">
                    <p className="font-heading text-xl font-black text-black md:text-2xl">
                      {fees.bundle.amount}
                    </p>
                    <p className="font-heading mt-0.5 text-xs font-bold uppercase tracking-[0.12em] text-black/80">
                      {fees.bundle.label}
                    </p>
                  </div>
                ) : null}
                <ul className="space-y-2 bg-[#f6f4ef] px-4 py-4">
                  {fees.notes.map((note) => (
                    <li
                      key={note}
                      className="flex gap-2 font-body text-xs leading-snug text-black md:text-sm"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-orange-500" aria-hidden />
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            </FadeIn>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export function ProgrammeBottomCta({
  referral,
  successStories,
  enroll,
}: {
  referral: ProgrammePageContent["referral"];
  successStories: ProgrammePageContent["successStories"];
  enroll: ProgrammePageContent["enroll"];
}) {
  return (
    <>
      <section className="section-y bg-white">
        <div className="mx-auto w-full max-w-6xl space-y-8 px-4 md:px-6">
          <FadeIn>
            <ReferralCallout referral={referral} />
          </FadeIn>

          <FadeIn delay={100}>
            <article className="card-lift rounded-2xl border border-zinc-200 bg-[#f6f4ef] p-8 md:p-10">
              <h2 className="font-heading text-xl font-black uppercase tracking-tight text-black md:text-2xl">
                {successStories.title}
              </h2>
              <p className="font-body mt-4 max-w-prose text-base leading-relaxed text-zinc-800">
                {successStories.body}
              </p>
            <Link href={successStories.href} className={`${ctaPrimary} mt-6`}>
              Read testimonials
            </Link>
          </article>
          </FadeIn>
        </div>
      </section>

      <section id="enroll" className="scroll-mt-24 bg-black py-12 text-center md:py-14">
        <FadeIn className="mx-auto w-full max-w-3xl px-4 md:px-6">
          <h2 className="font-heading text-2xl font-black uppercase tracking-tight text-white md:text-3xl">
            Ready to enroll?
          </h2>
          <p className="font-body mx-auto mt-4 max-w-prose text-base leading-relaxed text-zinc-300">
            {enroll.body}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/schedule/" className={ctaOrange}>
              View schedule
            </Link>
            <Link href="/free-math-trial/" className={ctaPrimary}>
              Free trial
            </Link>
          </div>
        </FadeIn>
      </section>
    </>
  );
}

function ReferralCallout({ referral }: { referral: ProgrammePageContent["referral"] }) {
  const bodyParts = referral.body.split("$200 cash");

  return (
    <article className="relative overflow-hidden rounded-2xl border border-orange-200 bg-[#f6f4ef] p-8 md:p-10">
      <div
        className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-full bg-orange-400/15"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-4 right-8 text-3xl text-orange-400/40"
        aria-hidden
      >
        ✦
      </div>

      <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-8">
        <GiftBoxIcon className="h-20 w-20 shrink-0 sm:h-24 sm:w-24" />
        <h2 className="font-heading text-3xl font-black uppercase leading-[0.95] tracking-tight text-orange-500 md:text-4xl lg:text-5xl">
          Referral
          <br />
          Programme
        </h2>
      </div>

      <p className="font-body relative mt-6 max-w-4xl text-base leading-relaxed text-zinc-700 md:text-lg">
        {bodyParts.length === 2 ? (
          <>
            {bodyParts[0]}
            <span className="font-bold text-orange-600">$200 cash</span>
            {bodyParts[1]}
          </>
        ) : (
          referral.body
        )}
      </p>
    </article>
  );
}

function GiftBoxIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 96 96" fill="none" aria-hidden>
      <rect x="14" y="44" width="68" height="44" rx="3" stroke="#111" strokeWidth="3.5" fill="#fff" />
      <path d="M14 44h68" stroke="#111" strokeWidth="3.5" />
      <rect x="14" y="28" width="68" height="16" rx="2" stroke="#111" strokeWidth="3.5" fill="#ef4444" />
      <path d="M14 36h68" stroke="#fff" strokeWidth="2.5" opacity="0.85" />
      <path d="M48 28v60" stroke="#111" strokeWidth="3.5" />
      <path
        d="M48 28c-10-10-22-8-22 0s12 8 22 0 22-8 22 0-12 8-22 0Z"
        stroke="#111"
        strokeWidth="3.5"
        fill="#111"
        strokeLinejoin="round"
      />
    </svg>
  );
}
