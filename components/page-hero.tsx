import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
};

export default function PageHero({ eyebrow, title, subtitle }: PageHeroProps) {
  return (
    <section className="border-b border-zinc-200 bg-gradient-to-b from-zinc-50 to-white">
      <div className="mx-auto w-full max-w-4xl px-4 py-14 text-center md:px-6 md:py-20">
        {eyebrow ? (
          <p className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="font-heading mt-3 text-3xl font-black uppercase tracking-tight text-black md:text-5xl">
          {title}
        </h1>
        {subtitle ? (
          <p className="font-body mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-zinc-700 md:text-xl">
            {subtitle}
          </p>
        ) : null}
      </div>
    </section>
  );
}
