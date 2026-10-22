import Link from "next/link";
import EnquirySection from "@/components/enquiry-section";
import FadeIn from "@/components/fade-in";
import SampleNotesSection from "@/components/resources/sample-notes-section";
import JsonLd from "@/components/json-ld";
import { resourcesIntro } from "@/lib/resources";
import { createPageMetadata } from "@/lib/seo";
import { breadcrumbJsonLd } from "@/lib/structured-data";

export const metadata = createPageMetadata({
  title: "Resources & Sample Notes | Math Tuition Materials",
  description:
    "Preview Knockout Math sample notes and teaching resources for Primary, Secondary, and JC programmes. See our structured approach to math tuition in Bukit Timah.",
  path: "/resources/",
});

const ctaClassName =
  "font-heading inline-flex rounded-full border-2 border-black bg-black px-8 py-3.5 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:border-orange-500 hover:bg-orange-500";

export default function ResourcesPage() {
  return (
    <div>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", href: "/" },
          { name: "Resources", href: "/resources/" },
        ])}
      />

      <section className="border-b border-zinc-200 bg-gradient-to-b from-zinc-50 to-white">
        <FadeIn className="mx-auto w-full max-w-6xl px-4 py-10 md:px-6 md:py-14">
          <p className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
            Programmes
          </p>
          <h1 className="font-heading mt-3 max-w-3xl text-3xl font-black uppercase tracking-tight text-black md:text-5xl">
            Resources
          </h1>
          <p className="font-body mt-5 max-w-3xl text-base leading-relaxed text-zinc-700 md:text-lg">
            {resourcesIntro}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="#sample-notes" className={ctaClassName}>
              Sample notes
            </Link>
            <Link
              href="/free-math-trial/"
              className="font-heading inline-flex rounded-full border-2 border-orange-500 bg-orange-500 px-8 py-3.5 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:bg-orange-600"
            >
              Book free trial
            </Link>
          </div>
        </FadeIn>
      </section>

      <section className="border-b border-zinc-200 bg-white py-6 md:py-8">
        <FadeIn className="mx-auto w-full max-w-6xl px-4 md:px-6">
          <div className="overflow-hidden rounded-2xl bg-black">
            <div className="grid md:grid-cols-[3fr_2fr]">
              <div className="p-8 md:p-12">
                <p className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
                  Free channel
                </p>
                <h2 className="font-heading mt-2 text-2xl font-black uppercase tracking-tight text-white md:text-3xl">
                  Join us on Telegram
                </h2>
                <p className="font-body mt-4 max-w-prose text-base leading-relaxed text-zinc-400">
                  Get free resources and updates delivered straight to your phone — no enrolment needed.
                </p>
                <Link
                  href="https://t.me/knockoutmath"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-heading mt-6 inline-flex rounded-full border-2 border-orange-500 bg-orange-500 px-8 py-3.5 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:bg-orange-600"
                >
                  Join the channel
                </Link>
              </div>
              <div className="flex flex-col justify-center gap-2.5 border-t border-zinc-800 bg-zinc-950 p-6 md:border-l md:border-t-0 md:p-8">
                <div className="mb-2 flex items-center gap-2">
                  <svg className="h-4 w-4 shrink-0 text-[#2AABEE]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                  <span className="font-heading text-xs font-bold uppercase tracking-[0.14em] text-zinc-400">@knockoutmath</span>
                </div>
                {["📝 Exam tips", "📚 Extra notes", "❓ Question of the day", "🔔 Topic updates", "📣 Announcements"].map((item, i) => (
                  <div key={item} className={`w-fit rounded-2xl px-4 py-2.5 ${i % 2 === 0 ? "rounded-tl-sm bg-zinc-800" : "ml-auto rounded-tr-sm bg-zinc-700"}`}>
                    <p className="font-body text-sm text-zinc-200">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      <SampleNotesSection />

      <section className="section-y border-t border-zinc-200 bg-[#f6f4ef]">
        <FadeIn className="mx-auto w-full max-w-3xl px-4 text-center md:px-6">
          <h2 className="font-heading text-2xl font-black uppercase tracking-tight text-black md:text-3xl">
            Want the full set of notes?
          </h2>
          <p className="font-body mx-auto mt-4 max-w-prose text-base leading-relaxed text-zinc-700">
            Enrolled students receive complete topic notes, worksheets, and revision packs
            aligned to the MOE syllabus. Book a free trial to experience a full lesson.
          </p>
          <Link href="/contact-us/" className={`${ctaClassName} mt-8`}>
            Enquire now
          </Link>
        </FadeIn>
      </section>

      <EnquirySection />
    </div>
  );
}
