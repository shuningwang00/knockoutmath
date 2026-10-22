import Link from "next/link";
import AboutComparison from "@/components/about-comparison";
import EnquirySection from "@/components/enquiry-section";
import FadeIn from "@/components/fade-in";
import PageHero from "@/components/page-hero";
import PedagogySection from "@/components/pedagogy-section";
import { aboutMission } from "@/lib/about";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "About Knockout Math | Leading Math Tuition Centre in Bukit Timah, Singapore",
  description:
    "Meet Knockout Math — expert math tutors in Bukit Timah with 20+ years of MOE experience. Discover our mission, KICK Method, and why families choose us for Primary, Secondary, and JC math tuition.",
  path: "/about-us/",
});

const ctaClassName =
  "font-heading inline-flex rounded-full border-2 border-black bg-black px-8 py-3.5 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:border-orange-500 hover:bg-orange-500";

export default function AboutUsPage() {
  return (
    <div>
      <PageHero
        eyebrow="About us"
        title={
          <>
            Knockout Math,
            <br />
            Knockout Results
          </>
        }
        subtitle={aboutMission}
      />

      <AboutComparison />

      <PedagogySection />

      <section className="section-y bg-black text-center">
        <FadeIn className="mx-auto w-full max-w-3xl px-4 md:px-6">
          <h2 className="font-heading text-2xl font-black uppercase tracking-tight text-white md:text-3xl">
            Find Out More
          </h2>
          <p className="font-body mx-auto mt-4 max-w-prose text-base leading-relaxed text-zinc-300">
            Explore our programmes across Primary, Secondary, and JC — or book a free trial at our
            Bukit Timah classrooms.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/#programmes" className={ctaClassName}>
              Our Programmes
            </Link>
            <Link
              href="/free-math-trial/"
              className="font-heading inline-flex rounded-full border-2 border-orange-500 bg-orange-500 px-8 py-3.5 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:bg-orange-600"
            >
              Free Trial
            </Link>
          </div>
        </FadeIn>
      </section>

      <FadeIn>
        <EnquirySection />
      </FadeIn>
    </div>
  );
}
