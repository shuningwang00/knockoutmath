import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/fade-in";
import type { ReactNode } from "react";

function CircleLinkIcon() {
  return (
    <svg className="h-4 w-4 shrink-0" viewBox="0 0 16 16" fill="none" aria-hidden>
      <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function SectionLink({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group mt-8 inline-flex flex-col gap-2 text-black transition hover:text-orange-600"
    >
      <span className="font-heading flex items-center gap-2.5 text-sm font-bold uppercase tracking-[0.14em]">
        {icon}
        {label}
      </span>
      <span className="block h-px w-full max-w-xs bg-black transition group-hover:bg-orange-600" />
    </Link>
  );
}

export default function GetToKnowSection() {
  return (
    <FadeIn>
      <section className="section-y bg-[#9333ea] p-3 md:p-5">
        <div className="grid md:grid-cols-2">
          <div className="relative min-h-[16rem] md:min-h-[32rem]">
            <Image
              src="/enquiry/reception-hero.webp"
              alt="Knockout Math classroom at Bukit Timah"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div className="bg-[#f6f4ef] px-6 py-10 md:px-10 md:py-12 lg:px-14">
            <h2 className="font-heading text-3xl font-black uppercase tracking-tight text-black md:text-4xl">
              Get To Know Us
            </h2>

            <p className="font-body mt-6 max-w-prose text-base leading-relaxed text-zinc-800 md:text-[1.05rem]">
              At Knockout Math, our team of top math tutors brings more than just expertise — we
              bring passion, energy, and a fresh perspective on math tuition here at our Bukit Timah
              classrooms. Whether it&apos;s Secondary Math tuition, IP math, or JC tuition,
              we&apos;re here to shape your child&apos;s success through proven strategies and
              personal guidance.
            </p>

            <p className="font-body mt-5 max-w-prose text-base leading-relaxed text-zinc-800 md:text-[1.05rem]">
              Discover why students and parents trust us for O-Level and A-Level math tuition with
              experienced Singapore math tutors who care.
            </p>

            <SectionLink href="/about-us/" label="About Us" icon={<CircleLinkIcon />} />

            <p className="font-body mt-8 max-w-prose text-base leading-relaxed text-zinc-800 md:text-[1.05rem]">
              Meet our principal tutor, explore our KICK Method pedagogy, and see how we help
              students from Secondary through JC build lasting confidence in math.
            </p>

            <SectionLink href="/our-tutors/" label="Our Tutors" icon={<CircleLinkIcon />} />
          </div>
        </div>
      </section>
    </FadeIn>
  );
}
