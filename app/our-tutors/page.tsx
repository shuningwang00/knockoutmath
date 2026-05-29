import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import EnquirySection from "@/components/enquiry-section";
import FadeIn from "@/components/fade-in";
import JsonLd from "@/components/json-ld";
import PageHero from "@/components/page-hero";
import TutorTimeline from "@/components/tutor-timeline";
import { principalTutorJsonLd } from "@/lib/structured-data";
import { SITE_URL } from "@/lib/site";
import {
  principalTutor,
  tutorCredentials,
  tutorTimeline,
  tutorWelcomeParagraphs,
} from "@/lib/tutors";

export const metadata: Metadata = {
  title: "Our Tutors | Expert Math Tutors in Bukit Timah | Knockout Math",
  description:
    "Meet the Knockout Math tutor team led by Principal Tutor Peng Junyang — 20+ years of MOE and tuition centre experience in Secondary, IP, and JC math.",
  alternates: {
    canonical: `${SITE_URL}/our-tutors/`,
  },
};

const ctaClassName =
  "font-heading inline-flex rounded-full border-2 border-black bg-black px-8 py-3.5 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:border-orange-500 hover:bg-orange-500";

const tutorsPageUrl = `${SITE_URL}/our-tutors/`;

export default function OurTutorsPage() {
  const latestBio =
    tutorTimeline[tutorTimeline.length - 1]?.body ??
    "Principal Tutor at Knockout Math with 20+ years of MOE and tuition centre experience.";

  return (
    <div>
      <JsonLd
        data={principalTutorJsonLd({
          name: principalTutor.name,
          role: principalTutor.role,
          image: principalTutor.image,
          description: latestBio,
          credentials: tutorCredentials.map(
            (credential) => `${credential.title}: ${credential.detail}`,
          ),
          pageUrl: tutorsPageUrl,
        })}
      />
      <PageHero eyebrow="Our team" title="Our Tutors" />

      <section className="section-y border-b border-zinc-200 bg-white">
        <FadeIn className="mx-auto w-full max-w-3xl px-4 md:px-6">
          <h2 className="font-heading text-2xl font-black uppercase tracking-tight text-black md:text-3xl">
            Director&apos;s Foreword
          </h2>

          <div className="mt-8 space-y-5">
            {tutorWelcomeParagraphs.map((paragraph) => (
              <p key={paragraph} className="font-body max-w-prose text-base leading-relaxed text-zinc-800 md:text-lg">
                {paragraph}
              </p>
            ))}
          </div>

          <p className="font-body mt-8 max-w-prose text-base leading-relaxed text-zinc-800 md:text-lg">
            Warm regards,
            <br />
            <span className="font-semibold text-black">{principalTutor.name}</span>
            <br />
            {principalTutor.role}
            <br />
            Knockout Math
          </p>
        </FadeIn>
      </section>

      <section className="section-y border-b border-zinc-200 bg-[#f6f4ef]">
        <FadeIn className="mx-auto w-full max-w-6xl px-4 md:px-6">
          <div className="grid gap-10 md:grid-cols-[minmax(0,320px)_1fr] md:items-start lg:gap-14">
            <div className="mx-auto w-full max-w-xs md:mx-0">
              <div className="card-lift overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
                <Image
                  src={principalTutor.image}
                  alt={principalTutor.imageAlt}
                  width={532}
                  height={826}
                  className="h-auto w-full object-cover"
                  priority
                />
              </div>
            </div>

            <div>
              <p className="font-heading text-sm font-bold uppercase tracking-[0.16em] text-orange-500">
                Principal tutor
              </p>
              <h2 className="font-heading mt-2 text-3xl font-black uppercase tracking-tight text-black md:text-4xl">
                {principalTutor.name}
              </h2>

              <div className="mt-6 rounded-xl bg-black px-5 py-5 md:px-6 md:py-6">
                <p className="font-heading text-xl font-black uppercase leading-tight tracking-tight text-orange-500 md:text-2xl">
                  Over 20+ Years
                </p>
                <p className="font-heading mt-2 text-xs font-bold uppercase tracking-[0.14em] text-white md:text-sm">
                  Teaching experience in MOE schools &amp; tuition centres
                </p>
              </div>

              <p className="font-body mt-6 max-w-prose text-base leading-relaxed text-zinc-800">
                {tutorTimeline[tutorTimeline.length - 1]?.body}
              </p>

              <div className="mt-8 space-y-6 border-t border-zinc-200 pt-8">
                {tutorCredentials.map((item) => (
                  <div key={item.title}>
                    <h3 className="font-heading text-base font-bold text-black md:text-lg">
                      {item.title}
                    </h3>
                    <p className="font-body mt-2 max-w-prose text-base leading-relaxed text-zinc-800">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="section-y border-y border-zinc-200 bg-[#f6f4ef]">
        <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
          <FadeIn>
            <header className="mx-auto max-w-3xl text-center">
              <h2 className="font-heading text-2xl font-black uppercase tracking-tight text-black md:text-4xl">
                Our Journey
              </h2>
              <p className="font-body mx-auto mt-4 max-w-prose text-base leading-relaxed text-zinc-700">
                From MOE classrooms to Knockout Math — milestones that shaped how we teach today.
              </p>
            </header>
          </FadeIn>
          <FadeIn delay={100} className="mt-12">
            <TutorTimeline entries={tutorTimeline} />
          </FadeIn>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 md:grid-cols-2 md:px-6">
          <FadeIn>
            <article className="card-lift h-full rounded-2xl border border-zinc-200 bg-[#f6f4ef] p-8">
              <h2 className="font-heading text-xl font-black uppercase tracking-tight text-black md:text-2xl">
                Enroll in our classes today
              </h2>
              <p className="font-body mt-4 max-w-prose text-base leading-relaxed text-zinc-700">
              Browse our schedule and secure a spot in a class that suits your child&apos;s level
              and availability. Feel free to drop us a call or message regarding the tutor,
              current topic being covered, and any ongoing promotions that we are offering.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href="/schedule/" className={ctaClassName}>
                View schedule
              </Link>
              <Link
                href="/free-math-trial/"
                className="font-heading inline-flex rounded-full border-2 border-orange-500 bg-orange-500 px-8 py-3.5 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:bg-orange-600"
              >
                Free trial
              </Link>
            </div>
          </article>
          </FadeIn>

          <FadeIn delay={100}>
            <article className="card-lift h-full rounded-2xl border border-zinc-200 bg-black p-8 text-white">
              <h2 className="font-heading text-xl font-black uppercase tracking-tight md:text-2xl">
                We&apos;re flexible
              </h2>
              <p className="font-body mt-4 max-w-prose text-base leading-relaxed text-zinc-300">
                Unable to make it for the listed classes? We hear you — life gets busy. Chat with us
                and we&apos;ll find a timing that works for you.
              </p>
              <Link
                href="https://wa.me/6584760600"
                className="font-heading mt-6 inline-flex rounded-full border-2 border-orange-500 bg-orange-500 px-8 py-3.5 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:bg-orange-600"
              >
                WhatsApp us
              </Link>
            </article>
          </FadeIn>
        </div>
      </section>

      <FadeIn>
        <EnquirySection />
      </FadeIn>
    </div>
  );
}
