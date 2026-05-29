import Link from "next/link";
import { studentTestimonials, type Testimonial } from "@/lib/testimonials";

function TestimonialBanner({ item }: { item: Testimonial }) {
  return (
    <article className="mx-3 flex w-[min(100%,340px)] shrink-0 flex-col rounded-2xl border border-zinc-200 bg-white px-6 py-5 shadow-sm md:w-[380px]">
      <p className="text-lg font-bold leading-snug text-orange-500">&ldquo;</p>
      <p className="-mt-2 flex-1 text-sm leading-relaxed text-zinc-800 md:text-base">
        {item.quote}
      </p>
      <div className="mt-4 border-t border-zinc-100 pt-4">
        <p className="font-bold text-black">{item.name}</p>
        <p className="mt-0.5 text-xs font-semibold uppercase tracking-wide text-zinc-500">
          {item.detail}
        </p>
      </div>
    </article>
  );
}

function TestimonialMarqueeRow({
  items,
  reverse = false,
  slow = false,
}: {
  items: Testimonial[];
  reverse?: boolean;
  slow?: boolean;
}) {
  const trackClass = [
    "testimonials-marquee-track flex w-max",
    reverse ? "testimonials-marquee-reverse" : "",
    slow ? "testimonials-marquee-slow" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="overflow-hidden py-2">
      <div className={trackClass}>
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
  const midpoint = Math.ceil(studentTestimonials.length / 2);
  const rowOne = studentTestimonials.slice(0, midpoint);
  const rowTwo = studentTestimonials.slice(midpoint);

  return (
    <section
      id="our-story"
      className="scroll-mt-24 border-y border-zinc-200 bg-[#f6f4ef] py-12 md:py-16"
    >
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <header className="text-center">
          <h2 className="text-3xl font-black uppercase tracking-tight text-black md:text-4xl">
            Students&apos; Success Stories
          </h2>
          <p className="font-heading mx-auto mt-4 max-w-3xl text-sm font-bold uppercase leading-relaxed tracking-[0.06em] text-orange-500 md:text-base">
            100% Proven Success Rate and Improvement Rate
          </p>
        </header>
      </div>

      <div className="mt-10 space-y-4">
        <TestimonialMarqueeRow items={rowOne} />
        <TestimonialMarqueeRow items={rowTwo} reverse slow />
      </div>

      <p className="mt-8 text-center">
        <Link
          href="/testimonials/"
          className="text-sm font-bold uppercase tracking-[0.1em] text-orange-600 hover:text-orange-700"
        >
          Read more testimonials →
        </Link>
      </p>
    </section>
  );
}
