import type { Metadata } from "next";
import EnquirySection from "@/components/enquiry-section";
import GetToKnowSection from "@/components/get-to-know-section";
import HashLink from "@/components/hash-link";
import ProgrammeCards from "@/components/programme-cards";
import SuccessStories from "@/components/success-stories";
import YouTubeEmbed from "@/components/youtube-embed";

export const metadata: Metadata = {
  title: "Best Math Tuition in Singapore for Secondary & JC Students | Knockout Math",
  description:
    "Achieve top results and unlock high-level career opportunities with the best Math tuition in Singapore. We have expert tutors, proven strategies, exam techniques, and 20+ years of experience to help students succeed.",
  alternates: {
    canonical: "https://www.knockoutmath.sg/",
  },
};

const heroNavButtons = [
  { label: "Our Story", href: "/#our-story" },
  { label: "Our Programmes", href: "/#programmes" },
  { label: "Our Pedagogy", href: "/about-us/#pedagogy" },
] as const;

const buttonClassName =
  "font-heading rounded-full border-2 border-black bg-black px-8 py-3.5 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:border-orange-500 hover:bg-orange-500";

export default function HomePage() {
  return (
    <div>
      <section className="bg-gradient-to-b from-zinc-50 to-white">
        <div className="mx-auto w-full max-w-4xl px-4 py-16 text-center md:px-6 md:py-24">
          <p className="text-2xl font-bold leading-snug text-zinc-800 md:text-3xl md:leading-snug">
            Top-tier math tuition in Bukit Timah, backed by 20+ years of MOE experience. We make
            numbers less scary and exams more manageable.
          </p>
          <p className="font-body mt-6 text-xl font-black text-orange-500 md:text-2xl">
            Because math shouldn&apos;t feel like a horror movie.
          </p>

          <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            {heroNavButtons.map((item) => (
              <HashLink key={item.href} href={item.href} className={buttonClassName}>
                {item.label}
              </HashLink>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white to-zinc-50 pb-12 pt-2">
        <div className="mx-auto w-full max-w-4xl px-4 md:px-6">
          <YouTubeEmbed
            videoId="7_idzBKfRdo"
            title="Knockout Math — tuition in Bukit Timah"
          />
        </div>
      </section>

      <SuccessStories />

      <ProgrammeCards />

      <GetToKnowSection />

      <EnquirySection />
    </div>
  );
}
