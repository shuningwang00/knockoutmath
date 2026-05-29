import Image from "next/image";
import PedagogyArrow from "@/components/pedagogy-arrow";
import { pedagogySteps } from "@/lib/pedagogy";

function StepTitle({
  step,
  word,
  accentLetter,
}: {
  step: number;
  word: string;
  accentLetter: string;
}) {
  const rest = word.slice(accentLetter.length);

  return (
    <h3 className="font-black uppercase leading-none tracking-tight">
      <span className="text-xl text-zinc-400 md:text-2xl">Step {step}: </span>
      <span className="inline-flex flex-wrap items-baseline">
        <span className="inline-block border-b-[6px] border-orange-500 text-5xl text-orange-500 md:text-6xl lg:text-7xl">
          {accentLetter}
        </span>
        <span className="text-3xl text-zinc-500 md:text-4xl lg:text-5xl">{rest}</span>
      </span>
    </h3>
  );
}

export default function PedagogySection() {
  return (
    <section id="pedagogy" className="scroll-mt-24 bg-[#f6f4ef]">
      <div className="relative flex min-h-[280px] items-center justify-center overflow-hidden md:min-h-[340px]">
        <Image
          src="/pedagogy/kick-method-hero.webp"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority={false}
        />
        <div className="absolute inset-0 bg-white/80" aria-hidden />

        <div className="relative px-4 py-14 text-center">
          <p className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-black md:text-base">
            The
          </p>
          <p className="font-heading mt-1 text-5xl font-black uppercase leading-none text-orange-500 md:text-7xl">
            Kick
          </p>
          <div className="mx-auto mt-1 h-1.5 w-28 bg-orange-500 md:w-36" />
          <div className="mt-2 flex items-center justify-center gap-2">
            <p className="font-heading text-2xl font-black uppercase tracking-wide text-black md:text-3xl">
              Method
            </p>
            <svg
              className="mt-2 h-8 w-8 text-orange-500"
              viewBox="0 0 32 32"
              fill="none"
              aria-hidden
            >
              <path
                d="M6 22 L 18 10 L 26 18"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="border-y border-zinc-200/60 bg-[#f0ede6] py-10 md:py-12">
        <h2 className="text-center text-2xl font-black uppercase leading-tight tracking-tight text-black md:text-3xl">
          Our 4-Step In-House
          <br />
          Teaching Framework
        </h2>
      </div>

      <div className="mx-auto w-full max-w-5xl px-4 py-10 md:px-6 md:py-12">
        <div className="space-y-6 md:space-y-8">
          {pedagogySteps.map((item, index) => {
            const isLeft = item.align === "left";
            const showArrow = index < pedagogySteps.length - 1;

            return (
              <div
                key={item.step}
                className={`flex max-w-3xl items-center gap-2 sm:gap-4 ${
                  isLeft ? "mr-auto flex-row" : "ml-auto flex-row-reverse"
                }`}
              >
                <div className={`min-w-0 flex-1 ${isLeft ? "text-left" : "text-right"}`}>
                  <StepTitle
                    step={item.step}
                    word={item.word}
                    accentLetter={item.accentLetter}
                  />
                  <p className="font-heading mt-3 text-sm font-bold uppercase tracking-[0.06em] text-black md:text-base">
                    {item.subtitle.toUpperCase()}
                  </p>
                  <p className="mt-2 text-base leading-relaxed text-zinc-800">{item.body}</p>
                </div>

                {showArrow ? (
                  <div className="shrink-0 self-center">
                    <PedagogyArrow direction={isLeft ? "down-right" : "down-left"} />
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
