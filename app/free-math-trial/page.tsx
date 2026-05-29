import type { Metadata } from "next";
import Link from "next/link";
import FreeTrialForm from "@/components/free-trial-form";
import { freeTrialBenefits } from "@/lib/free-trial";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Free Math Trial Class | Knockout Math Bukit Timah",
  description:
    "Claim your free math trial at Knockout Math Bukit Timah. Experience a full interactive lesson, curated materials, and personalised feedback from our expert tutors.",
  alternates: {
    canonical: `${SITE_URL}/free-math-trial/`,
  },
};

export default function FreeMathTrialPage() {
  return (
    <div>
      <section className="border-b border-zinc-200 bg-gradient-to-b from-zinc-50 to-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-6 md:px-6 md:py-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-orange-500 md:text-sm">
                No commitment
              </p>
              <h1 className="font-heading mt-1 text-2xl font-black uppercase leading-tight tracking-tight text-black md:text-4xl">
                Claim Your Free Trial!
              </h1>
              <p className="font-heading mt-1 text-base font-bold uppercase tracking-wide text-orange-500 md:text-lg">
                Before we run out of spots!
              </p>
            </div>
            <Link
              href="/schedule/"
              className="font-heading shrink-0 text-xs font-bold uppercase tracking-wide text-zinc-600 underline-offset-4 transition hover:text-orange-600 hover:underline md:text-sm"
            >
              View class schedule →
            </Link>
          </div>

          <p className="font-body mt-3 max-w-2xl text-sm leading-relaxed text-zinc-700 md:hidden">
            Fill in the form and we&apos;ll arrange your trial.
          </p>

          <div className="mt-4 grid items-start gap-6 lg:mt-6 lg:grid-cols-2 lg:gap-10 xl:gap-14">
            <div className="order-2 lg:order-1">
              <p className="font-body mb-4 hidden max-w-xl text-sm leading-relaxed text-zinc-700 md:block">
                Not sure if Knockout Math is the right fit? Experience our classes first-hand and
                find out how we can enhance your educational journey.
              </p>
              <h2 className="font-heading text-lg font-black uppercase tracking-tight text-black md:text-xl">
                What You&apos;ll Get
              </h2>
              <div className="mt-4 space-y-4">
                {freeTrialBenefits.map((benefit, index) => (
                  <article
                    key={benefit.title}
                    className="rounded-xl border border-zinc-200 bg-[#f6f4ef] p-4 md:p-5"
                  >
                    <div className="flex gap-4">
                      <p className="font-heading text-2xl font-black leading-none text-orange-500 md:text-3xl">
                        {index + 1}
                      </p>
                      <div>
                        <h3 className="font-heading text-sm font-black uppercase leading-snug tracking-tight text-black md:text-base">
                          {benefit.title.replace(/^\d+\s/, "")}
                        </h3>
                        <p className="font-body mt-2 text-sm leading-relaxed text-zinc-700">
                          {benefit.body}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2 lg:sticky lg:top-24">
              <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm md:p-6">
                <h2 className="font-heading text-xl font-black uppercase tracking-tight text-black md:text-2xl">
                  Let&apos;s Get Started
                </h2>
                <p className="font-body mt-2 text-sm text-zinc-600">
                  We&apos;ll reach out to confirm your trial slot.
                </p>
                <div className="mt-5">
                  <FreeTrialForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-200 bg-black py-10 text-center md:py-12">
        <div className="mx-auto w-full max-w-3xl px-4 md:px-6">
          <blockquote className="font-body text-base leading-relaxed text-zinc-300 md:text-lg">
            &ldquo;The free trial convinced us immediately. Within a term, my son&apos;s math
            results went from borderline pass to B3.&rdquo;
          </blockquote>
          <p className="font-heading mt-3 text-xs font-bold uppercase tracking-[0.12em] text-orange-500 md:text-sm">
            Mr Lim · Parent, Sec 3
          </p>
        </div>
      </section>
    </div>
  );
}
