import Link from "next/link";
import EnquirySection from "@/components/enquiry-section";
import FadeIn from "@/components/fade-in";
import GetToKnowSection from "@/components/get-to-know-section";
import HashLink from "@/components/hash-link";
import ProgrammeCards from "@/components/programme-cards";
import SuccessStories from "@/components/success-stories";
import StatsSection from "@/components/stats-section";
import YouTubeEmbed from "@/components/youtube-embed";
import Image from "next/image";

import JsonLd from "@/components/json-ld";
import { createPageMetadata } from "@/lib/seo";
import { videoObjectJsonLd } from "@/lib/structured-data";

export const revalidate = 3600;

export const metadata = createPageMetadata({
  title: "Best Math Tuition in Singapore for Secondary & JC Students",
  description:
    "Knockout Math — expert tuition in Bukit Timah for Primary, Secondary G3, E-Math, A-Math, and JC H2. Ex-MOE tutors, KICK Method, proven PSLE, O-Level and A-Level results. Book a free trial.",
  path: "/",
});

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
      <JsonLd
        data={videoObjectJsonLd({
          name: "From Stress to Success: Ace PSLE, O-Level & A-Level Math in Singapore | Knockout Math",
          description:
            "See how Knockout Math helps Primary, Secondary, and JC students conquer math exams using the KICK Method. Expert tuition at our Bukit Timah centre.",
          videoId: "UAFLsWdUmak",
          uploadDate: "2024-01-01",
        })}
      />
      <section className="relative overflow-hidden border-b border-zinc-200">
        <Image
          src="/programmes/DSC08407.webp"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#f6f4ef]/88" aria-hidden />
        <FadeIn className="relative z-10 mx-auto w-full max-w-4xl px-4 pb-6 pt-8 text-center md:px-6 md:pb-8 md:pt-12">
          <Link
            href="/november-holiday-programmes/"
            className="mb-8 inline-flex w-full max-w-xl flex-col items-center gap-1.5 rounded-2xl bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500 px-6 py-4 text-white shadow-lg transition hover:brightness-110 sm:flex-row sm:justify-between"
          >
            <p className="font-heading text-lg font-black uppercase tracking-tight text-center sm:text-left">
              Free Nov &apos;26 Holiday Programmes — Open for Registration
            </p>
            <span className="font-heading shrink-0 rounded-full bg-white/20 px-4 py-2 text-sm font-bold uppercase tracking-[0.1em] backdrop-blur-sm">
              Find out more →
            </span>
          </Link>
          <h1 className="font-heading mx-auto max-w-prose text-2xl font-black uppercase leading-snug tracking-tight text-black md:text-4xl md:leading-tight">
            Math tuition in Bukit Timah for Primary, Secondary & JC students
          </h1>
          <p className="font-body mx-auto mt-6 max-w-prose text-lg leading-relaxed text-zinc-700 md:text-xl">
            Knockout Math — 20+ years of MOE experience. We make numbers less scary and exams more
            manageable.
          </p>
          <p className="mx-auto mt-4 max-w-prose text-xl font-bold leading-snug text-orange-500 md:text-2xl md:leading-snug">
            Because math shouldn&apos;t feel like a horror movie.
          </p>

          <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            {heroNavButtons.map((item) => (
              <HashLink key={item.href} href={item.href} className={buttonClassName}>
                {item.label}
              </HashLink>
            ))}
          </div>
        </FadeIn>
      </section>

      <section className="bg-[#f6f4ef] pb-12 pt-6 md:pt-8">
        <FadeIn className="mx-auto w-full max-w-4xl px-4 md:px-6">
          <YouTubeEmbed
            videoId="UAFLsWdUmak"
            title="Knockout Math — tuition in Bukit Timah"
          />
        </FadeIn>
      </section>

      <StatsSection />

      <SuccessStories />

      <ProgrammeCards />

      <GetToKnowSection />

      <FadeIn>
        <EnquirySection />
      </FadeIn>
    </div>
  );
}
