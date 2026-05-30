import Link from "next/link";
import FadeIn from "@/components/fade-in";
import { marqueeTestimonials, type Testimonial } from "@/lib/testimonials";

/** Desktop ~22s/card; mobile ~36s/card (set via CSS media query). */
const SECONDS_PER_CARD_DESKTOP = 22;
const SECONDS_PER_CARD_MOBILE = 36;

function TestimonialBanner({ item }: { item: Testimonial }) {
  return (
    <article className="mx-3 flex w-[min(100%,340px)] shrink-0 flex-col rounded-2xl border border-violet-200/80 bg-white px-5 py-4 shadow-sm shadow-violet-100/60 md:w-[380px]">
      <p className="text-lg font-bold leading-snug text-violet-600">&ldquo;</p>
      <p className="-mt-2 line-clamp-5 flex-1 text-sm leading-relaxed text-zinc-800 md:text-base">
        {item.quote}
      </p>
      <div className="mt-3 border-t border-violet-100 pt-3">
        <p className="font-bold text-black">{item.name}</p>
        <p className="mt-0.5 text-xs font-semibold uppercase tracking-wide text-violet-700/70">
          {item.detail}
        </p>
      </div>
    </article>
  );
}

function TestimonialMarqueeRow({ items }: { items: Testimonial[] }) {
  const durationDesktop = items.length * SECONDS_PER_CARD_DESKTOP;
  const durationMobile = items.length * SECONDS_PER_CARD_MOBILE;

  return (
    <div className="testimonials-marquee-viewport py-1">
      <div
        className="testimonials-marquee-track flex w-max"
        style={
          {
            "--marquee-duration": `${durationDesktop}s`,
            "--marquee-duration-mobile": `${durationMobile}s`,
          } as React.CSSProperties
        }
      >
        <div className="flex shrink-0">
          {items.map((item) => (
            <TestimonialBanner key={`a-${item.id}`} item={item} />
          ))}
        </div>
        <div className="flex shrink-0" aria-hidden>
          {items.map((item) => (
            <TestimonialBanner key={`b-${item.id}`} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function SuccessStories() {
  return (
    <section
      id="our-story"
      className="scroll-mt-24 border-y border-violet-200 bg-gradient-to-b from-violet-100 via-[#ede9fe] to-violet-50 py-8 md:py-10"
    >
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <FadeIn>
          <header className="text-center">
            <p className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-violet-600 md:text-sm">
              Real results
            </p>
            <h2 className="mt-2 text-2xl font-black uppercase tracking-tight text-black md:text-4xl">
              Students&apos; Success Stories
            </h2>
            <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-[#9333ea]" aria-hidden />
            <p className="font-heading mx-auto mt-3 max-w-3xl text-xs font-bold uppercase leading-relaxed tracking-[0.06em] text-violet-700 md:text-sm">
              100% Proven Success Rate and Improvement Rate
            </p>
          </header>
        </FadeIn>
      </div>

      <div className="mt-5 overflow-hidden md:mt-6">
        <TestimonialMarqueeRow items={marqueeTestimonials} />
      </div>

      <FadeIn>
        <p className="mt-4 text-center md:mt-5">
          <Link
            href="/testimonials/"
            className="text-sm font-bold uppercase tracking-[0.1em] text-violet-700 transition hover:text-[#9333ea]"
          >
            Read more testimonials →
          </Link>
        </p>
      </FadeIn>
    </section>
  );
}
