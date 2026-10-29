import Link from "next/link";
import EnquirySection from "@/components/enquiry-section";
import FadeIn from "@/components/fade-in";
import HolidayProgrammesGrid from "@/components/holiday-programmes-grid";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Math Holiday Programme | Intensive Masterclasses | Knockout Math",
  description:
    "Join Knockout Math's math holiday programme — intensive masterclasses for Secondary and JC students covering E-Math, A-Math, and H2 Math. Held at Beauty World Centre, Bukit Timah.",
  path: "/holiday-math-programme/",
});

export default function HolidayMathProgrammePage() {
  return (
    <div>
      <section className="border-b border-zinc-200 bg-black">
        <FadeIn className="mx-auto w-full max-w-6xl px-4 py-10 md:px-6 md:py-14">
          <p className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
            #KOM Holiday Programmes
          </p>
          <h1 className="font-heading mt-3 text-4xl font-black uppercase tracking-tight text-white md:text-6xl">
            November 2026
          </h1>
          <p className="font-body mt-4 max-w-xl text-base leading-relaxed text-zinc-400">
            6 intensive masterclasses across Secondary and JC levels. Click any programme to see topics, objectives, and dates.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm text-zinc-500">
            <span className="font-heading flex items-center gap-1.5 rounded-full border border-zinc-700 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.1em] text-zinc-400">
              Beauty World Centre, #03-38
            </span>
            <span className="font-heading flex items-center gap-1.5 rounded-full border border-zinc-700 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.1em] text-zinc-400">
              10–24 November 2026
            </span>
          </div>
        </FadeIn>
      </section>

      <section className="section-y bg-white">
        <FadeIn className="mx-auto w-full max-w-6xl px-4 md:px-6">
          <HolidayProgrammesGrid />
        </FadeIn>
      </section>

      <section className="border-t border-zinc-200 bg-[#f6f4ef] py-14">
        <FadeIn className="mx-auto w-full max-w-3xl px-4 text-center md:px-6">
          <h2 className="font-heading text-2xl font-black uppercase tracking-tight text-black md:text-3xl">
            Register Your Interest
          </h2>
          <p className="font-body mx-auto mt-4 max-w-prose text-base leading-relaxed text-zinc-700">
            Spaces are limited — fill in the form and we&apos;ll confirm your spot.
          </p>
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSfRQ4iMdue6U_XDxqGVWiVKzvWrCKQFu0NaK7n0kS8smtC9mA/viewform?usp=send_form"
            target="_blank"
            rel="noopener noreferrer"
            className="font-heading mt-8 inline-flex rounded-full bg-orange-500 px-8 py-3.5 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:bg-orange-600"
          >
            Register now
          </Link>
        </FadeIn>
      </section>

      <EnquirySection />
    </div>
  );
}
