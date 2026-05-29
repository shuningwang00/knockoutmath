import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/fade-in";
import { homeProgrammes } from "@/lib/programmes";

export default function ProgrammeCards() {
  return (
    <section id="programmes" className="section-y scroll-mt-24 bg-[#f6f4ef]">
      <div className="mx-auto w-full max-w-[1400px] px-4 md:px-6">
        <FadeIn>
          <header className="text-center">
            <h2 className="text-3xl font-black uppercase tracking-tight text-black md:text-4xl">
              Our Programmes
            </h2>
            <p className="font-heading mx-auto mt-4 max-w-3xl text-sm font-bold uppercase leading-relaxed tracking-[0.08em] text-orange-500 md:text-base">
              Specialist math tutors in secondary O-Level math &amp; junior college H2 math
            </p>
          </header>
        </FadeIn>

        <div className="mt-10 flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden xl:grid xl:grid-cols-5 xl:overflow-visible xl:pb-0">
          {homeProgrammes.map((programme, index) => (
            <FadeIn key={programme.href} delay={index * 80} className="shrink-0 xl:shrink">
              <article className="card-lift flex w-[min(100%,280px)] snap-center flex-col overflow-hidden rounded-2xl border border-zinc-200/80 bg-[#efede8] shadow-sm xl:w-auto">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={programme.image}
                  alt={programme.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1280px) 280px, 20vw"
                />
              </div>

              <div className="flex flex-1 flex-col px-4 pb-5 pt-4">
                <h3 className="text-center text-base font-bold leading-snug text-black">
                  {programme.title}
                </h3>
                <p className="mt-3 flex-1 text-center text-sm leading-relaxed text-zinc-800">
                  {programme.description}
                </p>
                <Link
                  href={programme.href}
                  className="programme-cta font-heading mt-5 block rounded-lg py-3 text-center text-xs font-bold uppercase tracking-[0.14em] text-white transition hover:opacity-90"
                >
                  Find Out More
                </Link>
              </div>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <p className="mt-10 text-center">
          <Link
            href="/schedule/"
            className="text-sm font-bold uppercase tracking-[0.1em] text-orange-600 hover:text-orange-700"
          >
            View class schedule →
          </Link>
        </p>
        </FadeIn>
      </div>
    </section>
  );
}
