import type { Metadata } from "next";
import Link from "next/link";
import EnquirySection from "@/components/enquiry-section";
import FadeIn from "@/components/fade-in";
import TestimonialCard from "@/components/testimonial-card";
import { pageTestimonials } from "@/lib/testimonials-page";
import { testimonialsJsonLd } from "@/lib/structured-data";
import { SITE_URL } from "@/lib/site";
import JsonLd from "@/components/json-ld";

export const metadata: Metadata = {
  title: "Student Reviews & Success Stories | Knockout Math Tuition Singapore",
  description:
    "Read what students and parents say about Knockout Math in Bukit Timah — real reviews from Secondary, IP, and JC math tuition with proven grade improvements.",
  alternates: {
    canonical: `${SITE_URL}/testimonials/`,
  },
};

const ctaClassName =
  "font-heading inline-flex rounded-full border-2 border-black bg-black px-8 py-3.5 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:border-orange-500 hover:bg-orange-500";

const ctaOrangeClassName =
  "font-heading inline-flex rounded-full border-2 border-orange-500 bg-orange-500 px-8 py-3.5 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:bg-orange-600";

export default function TestimonialsPage() {
  return (
    <div>
      <JsonLd data={testimonialsJsonLd(pageTestimonials)} />
      <section className="border-b border-zinc-200 bg-gradient-to-b from-zinc-50 to-white">
        <FadeIn className="mx-auto w-full max-w-4xl px-4 py-10 text-center md:px-6 md:py-12">
          <p className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
            Student voices
          </p>
          <h1 className="font-heading mt-2 text-3xl font-black uppercase tracking-tight text-black md:text-5xl">
            Testimonials
          </h1>
          <p className="font-body mx-auto mt-4 max-w-prose text-base leading-relaxed text-zinc-700 md:text-lg">
            Real stories from students and parents at our Bukit Timah centre — from first-time
            confidence boosts to O-Level and A-Level breakthroughs with the KICK Method.
          </p>
        </FadeIn>
      </section>

      <section className="border-b border-zinc-200 bg-[#f6f4ef] py-10 md:py-14">
        <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pageTestimonials.map((testimonial, index) => (
              <li key={testimonial.id}>
                <FadeIn delay={(index % 3) * 80}>
                  <TestimonialCard testimonial={testimonial} />
                </FadeIn>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-zinc-200 bg-white py-10 md:py-14">
        <FadeIn className="mx-auto w-full max-w-3xl px-4 text-center md:px-6">
          <h2 className="font-heading text-2xl font-black uppercase tracking-tight text-black md:text-3xl">
            Ready to write your own success story?
          </h2>
          <p className="font-body mx-auto mt-4 max-w-prose text-base leading-relaxed text-zinc-700">
            Book a free trial at our Bukit Timah classrooms or browse class times that fit your
            schedule.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/free-math-trial/" className={ctaOrangeClassName}>
              Free trial
            </Link>
            <Link href="/schedule/" className={ctaClassName}>
              View schedule
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
