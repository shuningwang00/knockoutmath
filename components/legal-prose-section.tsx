import FadeIn from "@/components/fade-in";
import type { LegalPageContent } from "@/lib/legal-pages";

export default function LegalProseSection({ content }: { content: LegalPageContent }) {
  return (
    <section className="section-y bg-white">
      <div className="mx-auto w-full max-w-3xl px-4 md:px-6">
        <FadeIn>
          {content.effectiveDate ? (
            <p className="font-body text-sm font-semibold text-zinc-500">
              Effective Date: {content.effectiveDate}
            </p>
          ) : null}

          {content.intro ? (
            <p className="font-body mt-6 text-base leading-relaxed text-zinc-700 md:text-lg">
              {content.intro}
            </p>
          ) : null}

          <div className="mt-10 space-y-10">
            {content.sections.map((section) => (
              <article key={section.heading}>
                <h2 className="font-heading text-xl font-black uppercase tracking-tight text-black md:text-2xl">
                  {section.heading}
                </h2>

                {section.paragraphs?.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 48)}
                    className="font-body mt-4 text-base leading-relaxed text-zinc-700"
                  >
                    {paragraph}
                  </p>
                ))}

                {section.bullets ? (
                  <ul className="font-body mt-4 list-disc space-y-2 pl-5 text-base leading-relaxed text-zinc-700">
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
  );
}
