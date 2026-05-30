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
    "Preview Knockout Math sample notes and teaching resources for Secondary, IP, and JC programmes. See our structured approach to math tuition in Bukit Timah.",
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
        <FadeIn className="mx-auto w-full max-w-6xl px-4 py-16 md:px-6 md:py-20">
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
