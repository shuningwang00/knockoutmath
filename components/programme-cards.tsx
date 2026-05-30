import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/fade-in";
import { homeProgrammes } from "@/lib/programmes";

export default function ProgrammeCards() {
  return (
    <section id="programmes" className="scroll-mt-24 bg-[#f6f4ef] py-8 md:py-10">
      <div className="mx-auto w-full max-w-[1400px] px-4 md:px-6">
        <FadeIn>
          <header className="text-center">
            <h2 className="text-2xl font-black uppercase tracking-tight text-black md:text-4xl">
              Our Programmes
            </h2>
            <p className="font-heading mx-auto mt-3 max-w-3xl text-xs font-bold uppercase leading-relaxed tracking-[0.08em] text-orange-500 md:text-sm">
              Specialist math tutors in secondary O-Level math &amp; junior college H2 math
            </p>
          </header>
        </FadeIn>

        <div className="mt-5 flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:mt-6 xl:grid xl:grid-cols-5 xl:gap-5 xl:overflow-visible xl:pb-0">
            {homeProgrammes.map((programme) => (
              <article
                key={programme.href}
                className="card-lift flex w-[min(100%,280px)] shrink-0 snap-center flex-col overflow-hidden rounded-2xl border border-zinc-200/80 bg-[#efede8] shadow-sm xl:w-auto"
              >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={programme.image}
                  alt={programme.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1280px) 280px, 20vw"
                />
              </div>

              <div className="flex flex-1 flex-col px-4 pb-4 pt-3">
                <h3 className="text-center text-base font-bold leading-snug text-black">
                  {programme.title}
                </h3>
                <p className="mt-2 flex-1 text-center text-sm leading-relaxed text-zinc-800">
                  {programme.description}
                </p>
                <Link
                  href={programme.href}
                  className="programme-cta font-heading mt-4 block rounded-lg py-2.5 text-center text-xs font-bold uppercase tracking-[0.14em] text-white transition hover:opacity-90"
                >
                  Find Out More
                </Link>
              </div>
              </article>
            ))}
        </div>

        <FadeIn>
          <p className="mt-5 text-center md:mt-6">
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
