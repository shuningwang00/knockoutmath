import Image from "next/image";
import Link from "next/link";
import AboutComparison from "@/components/about-comparison";
import EnquirySection from "@/components/enquiry-section";
import FadeIn from "@/components/fade-in";
import PageHero from "@/components/page-hero";
import PedagogySection from "@/components/pedagogy-section";
import { aboutMission, teamSections } from "@/lib/about";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "About Knockout Math | Leading Math Tuition Centre in Bukit Timah, Singapore",
  description:
    "Meet Knockout Math — expert math tutors in Bukit Timah with 20+ years of MOE experience. Discover our mission, KICK Method, and why families choose us for Secondary, IP, and JC math tuition.",
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

      <section className="section-y border-y border-zinc-200 bg-[#f6f4ef]">
        <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
          <FadeIn>
            <h2 className="font-heading text-center text-2xl font-black uppercase tracking-tight text-black md:text-4xl">
              The Team
            </h2>
          </FadeIn>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {teamSections.map((section, index) => (
              <FadeIn key={section.title} delay={index * 100}>
                <article className="card-lift overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src={
                      index === 0
                        ? "/programmes/DSC08407.webp"
                        : "/programmes/DSC08232.webp"
                    }
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="font-heading text-xl font-black uppercase tracking-tight text-black md:text-2xl">
                    {section.title}
                  </h3>
                  <p className="font-body mt-4 max-w-prose text-base leading-relaxed text-zinc-800">
                    {section.body}
                  </p>
                  {"cta" in section && section.cta ? (
                    <Link href={section.cta.href} className={`${ctaClassName} mt-6`}>
                      {section.cta.label}
                    </Link>
                  ) : null}
                </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <AboutComparison />

      <PedagogySection />

      <section className="section-y bg-black text-center">
        <FadeIn className="mx-auto w-full max-w-3xl px-4 md:px-6">
          <h2 className="font-heading text-2xl font-black uppercase tracking-tight text-white md:text-3xl">
            Find Out More
          </h2>
          <p className="font-body mx-auto mt-4 max-w-prose text-base leading-relaxed text-zinc-300">
            Explore our programmes across Secondary, IP, and JC — or book a free trial at our
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
