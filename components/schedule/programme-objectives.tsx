import FadeIn from "@/components/fade-in";
import { programmeObjectives } from "@/lib/schedule";

export default function ProgrammeObjectives() {
  return (
    <section className="section-y border-t border-zinc-200 bg-white">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <FadeIn>
          <header className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-2xl font-black uppercase tracking-tight text-black md:text-4xl">
              What Each Programme Covers
            </h2>
            <p className="font-body mx-auto mt-4 max-w-prose text-base leading-relaxed text-zinc-700">
              Every class slot above is part of a structured pathway designed to build confidence,
              mastery, and exam readiness.
            </p>
          </header>
        </FadeIn>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {programmeObjectives.map((programme, index) => (
            <FadeIn key={programme.id} delay={index * 60}>
              <article className="card-lift h-full rounded-2xl border border-zinc-200 bg-[#f6f4ef] p-6 md:p-8">
              <h3 className="font-heading text-lg font-black uppercase leading-snug tracking-tight text-black md:text-xl">
                {programme.title}
              </h3>
              <div className="mt-4 h-1 w-16 bg-black" aria-hidden />
              <p className="font-heading mt-4 text-xs font-bold uppercase tracking-[0.14em] text-zinc-500">
                Objectives
              </p>
              <ul className="mt-3 space-y-3">
                {programme.objectives.map((objective) => (
                  <li key={objective} className="flex gap-3 text-sm leading-relaxed text-zinc-700">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" aria-hidden />
                    <span>{objective}</span>
                  </li>
                ))}
              </ul>
              {programme.fees ? (
                <>
                  <p className="font-heading mt-5 text-xs font-bold uppercase tracking-[0.14em] text-zinc-500">
                    Fees
                  </p>
                  <ul className="mt-2 space-y-1">
                    {programme.fees.map((fee) => (
                      <li key={fee} className="font-body text-sm text-zinc-700">
                        {fee}
                      </li>
                    ))}
                  </ul>
                </>
              ) : null}
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
