import Image from "next/image";
import Link from "next/link";
import type { ProgrammePageContent } from "@/lib/programme-pages/types";

const ctaPrimary =
  "font-heading inline-flex rounded-full border-2 border-black bg-black px-8 py-3.5 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:border-orange-500 hover:bg-orange-500";

const ctaOrange =
  "font-heading inline-flex rounded-full border-2 border-orange-500 bg-orange-500 px-8 py-3.5 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:bg-orange-600";

export function ProgrammeHero({ hero }: { hero: ProgrammePageContent["hero"] }) {
  return (
    <section className="border-b border-zinc-200 bg-gradient-to-b from-zinc-50 to-white">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-14 md:grid-cols-2 md:items-center md:px-6 md:py-20">
        <div>
          <p className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
            {hero.eyebrow}
          </p>
          <h1 className="font-heading mt-3 text-3xl font-black uppercase leading-tight tracking-tight text-black md:text-5xl">
            {hero.title}
          </h1>
          <p className="font-heading mt-3 text-lg font-bold uppercase tracking-[0.1em] text-zinc-600 md:text-xl">
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

        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-zinc-200 shadow-sm">
          <Image
            src={hero.image}
            alt={hero.imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
    </section>
  );
}

function syllabusSectionId(level: string) {
  if (level.includes("Secondary 1")) return "secondary-1-scheme-of-work";
  if (level.includes("Secondary 2")) return "secondary-2-scheme-of-work";
  return level.toLowerCase().replace(/\s+/g, "-");
}

export function ProgrammeHighlights({
  highlights,
}: {
  highlights: ProgrammePageContent["highlights"];
}) {
  return (
    <section id="programme-features" className="scroll-mt-24 bg-white py-14 md:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <h2 className="font-heading text-center text-2xl font-black uppercase tracking-tight text-black md:text-4xl">
          {highlights.title}
        </h2>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <article className="rounded-2xl border border-zinc-200 bg-[#f6f4ef] p-6 md:p-8">
            <h3 className="font-heading text-lg font-bold uppercase tracking-[0.1em] text-black">
              {highlights.moeTitle}
            </h3>
            <p className="font-body mt-4 text-base leading-relaxed text-zinc-800">
              {highlights.moeBody}
            </p>
          </article>

          <article className="rounded-2xl border border-zinc-200 bg-white p-6 md:p-8">
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
        </div>
      </div>
    </section>
  );
}

export function ProgrammeSyllabus({ syllabi }: { syllabi: ProgrammePageContent["syllabi"] }) {
  return (
    <section className="border-y border-zinc-200 bg-[#f6f4ef] py-14 md:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <h2 className="font-heading text-center text-2xl font-black uppercase tracking-tight text-black md:text-4xl">
          Scheme of Work
        </h2>

        <div className="mt-10 space-y-12">
          {syllabi.map((syllabus) => (
            <div key={syllabus.level} id={syllabusSectionId(syllabus.level)} className="scroll-mt-24">
              <h3 className="font-heading text-xl font-black uppercase tracking-tight text-black md:text-2xl">
                {syllabus.level}
              </h3>
              <p className="font-body mt-4 max-w-4xl text-base leading-relaxed text-zinc-800">
                {syllabus.intro}
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {syllabus.terms.map((term) => (
                  <article
                    key={`${syllabus.level}-${term.name}`}
                    className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm"
                  >
                    <div className="border-b border-zinc-200 bg-black px-5 py-4">
                      <p className="font-heading text-sm font-bold uppercase tracking-[0.12em] text-orange-500">
                        {term.name}
                      </p>
                      <p className="font-body mt-1 text-sm text-zinc-300">{term.dates}</p>
                    </div>

                    {term.chapters.length > 0 ? (
                      <ul className="space-y-2 px-5 py-4">
                        {term.chapters.map((chapter) => (
                          <li
                            key={chapter}
                            className="font-body text-sm leading-relaxed text-zinc-700 md:text-base"
                          >
                            {chapter}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="font-body px-5 py-4 text-sm italic text-zinc-500">
                        Learn-ahead and revision block — see Term 1 for full chapter coverage.
                      </p>
                    )}
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProgrammeBottomCta({
  referral,
  successStories,
}: {
  referral: ProgrammePageContent["referral"];
  successStories: ProgrammePageContent["successStories"];
}) {
  return (
    <>
      <section className="bg-white py-14 md:py-16">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 md:grid-cols-2 md:px-6">
          <article className="rounded-2xl border border-orange-500 bg-orange-50/40 p-8">
            <h2 className="font-heading text-xl font-black uppercase tracking-tight text-black md:text-2xl">
              {referral.title}
            </h2>
            <p className="font-body mt-4 text-base leading-relaxed text-zinc-800">{referral.body}</p>
          </article>

          <article className="rounded-2xl border border-zinc-200 bg-[#f6f4ef] p-8">
            <h2 className="font-heading text-xl font-black uppercase tracking-tight text-black md:text-2xl">
              {successStories.title}
            </h2>
            <p className="font-body mt-4 text-base leading-relaxed text-zinc-800">
              {successStories.body}
            </p>
            <Link href={successStories.href} className={`${ctaPrimary} mt-6`}>
              Read testimonials
            </Link>
          </article>
        </div>
      </section>

      <section id="enroll" className="scroll-mt-24 bg-black py-12 text-center md:py-14">
        <div className="mx-auto w-full max-w-3xl px-4 md:px-6">
          <h2 className="font-heading text-2xl font-black uppercase tracking-tight text-white md:text-3xl">
            Ready to enroll?
          </h2>
          <p className="font-body mt-4 text-base leading-relaxed text-zinc-300">
            Secure a spot in our Lower Secondary G3 classes or book a free trial at our Bukit
            Timah centre.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/schedule/" className={ctaOrange}>
              View schedule
            </Link>
            <Link href="/free-math-trial/" className={ctaPrimary}>
              Free trial
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
