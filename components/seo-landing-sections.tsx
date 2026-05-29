import Link from "next/link";
import FadeIn from "@/components/fade-in";
import type { SeoLandingPageContent } from "@/lib/seo-landing-pages";
import { programmeLinks } from "@/lib/site";

export default function SeoLandingSections({ content }: { content: SeoLandingPageContent }) {
  const programmeNavLinks = programmeLinks.filter((item) => item.href !== "/schedule/");

  return (
    <>
      <section className="section-y bg-white">
        <div className="mx-auto w-full max-w-3xl px-4 md:px-6">
          <FadeIn>
            <div className="space-y-12">
              {content.sections.map((section) => (
                <article key={section.heading}>
                  <h2 className="font-heading text-xl font-black uppercase tracking-tight text-black md:text-2xl">
                    {section.heading}
                  </h2>

                  {section.paragraphs?.map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 48)}
                      className="font-body mt-4 text-base leading-relaxed text-zinc-700 md:text-lg"
                    >
                      {paragraph}
                    </p>
                  ))}

                  {section.bullets ? (
                    <ul className="font-body mt-4 list-disc space-y-3 pl-5 text-base leading-relaxed text-zinc-700 md:text-lg">
                      {section.bullets.map((item) => (
                        <li key={item.slice(0, 48)}>{item}</li>
                      ))}
                    </ul>
                  ) : null}
                </article>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section-y border-t border-zinc-200 bg-[#f6f4ef]">
        <div className="mx-auto w-full max-w-3xl px-4 md:px-6">
          <FadeIn>
            <h2 className="font-heading text-center text-2xl font-black uppercase tracking-tight text-black md:text-3xl">
              Programmes
            </h2>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {programmeNavLinks.map((programme) => (
                <Link
                  key={programme.href}
                  href={programme.href}
                  className="rounded-xl border border-zinc-200 bg-white px-5 py-4 text-sm font-semibold text-black transition hover:border-orange-500 hover:text-orange-500"
                >
                  {programme.label}
                </Link>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                href="/schedule/"
                className="font-heading rounded-full border-2 border-black bg-black px-8 py-3.5 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:border-orange-500 hover:bg-orange-500"
              >
                View Schedule
              </Link>
              <Link
                href="/free-math-trial/"
                className="font-heading rounded-full border-2 border-black bg-white px-8 py-3.5 text-sm font-bold uppercase tracking-[0.12em] text-black transition hover:border-orange-500 hover:text-orange-500"
              >
                Book Free Trial
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
