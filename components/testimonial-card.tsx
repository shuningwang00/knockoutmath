"use client";

import { useId, useState } from "react";
import type { PageTestimonial } from "@/lib/testimonials-page";

const CLAMP_LENGTH = 320;

export default function TestimonialCard({ testimonial }: { testimonial: PageTestimonial }) {
  const [expanded, setExpanded] = useState(false);
  const contentId = useId();
  const isLong = testimonial.quote.length > CLAMP_LENGTH;
  const showClamp = isLong && !expanded;

  return (
    <article className="card-lift flex h-full flex-col rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm md:p-7">
      <p className="text-2xl font-bold leading-none text-orange-500" aria-hidden>
        &ldquo;
      </p>

      <blockquote
        id={contentId}
        className={`font-body -mt-1 flex-1 text-sm leading-relaxed text-zinc-800 md:text-base ${
          showClamp ? "line-clamp-[8]" : ""
        }`}
      >
        {testimonial.quote}
      </blockquote>

      {isLong ? (
        <button
          type="button"
          onClick={() => setExpanded((prev) => !prev)}
          aria-expanded={expanded}
          aria-controls={contentId}
          className="font-heading mt-3 self-start text-xs font-bold uppercase tracking-[0.12em] text-orange-600 transition hover:text-orange-700"
        >
          {expanded ? "Show less" : "Read full story"}
        </button>
      ) : null}

      <footer className="mt-5 border-t border-zinc-100 pt-5">
        <p className="font-heading text-base font-bold text-black">{testimonial.name}</p>
        <p className="font-body mt-1 text-sm text-zinc-600">
          {testimonial.school}
          {testimonial.year ? ` · ${testimonial.year}` : ""}
        </p>
        {testimonial.outcome ? (
          <p className="font-heading mt-2 text-xs font-bold uppercase tracking-[0.1em] text-orange-600">
            {testimonial.outcome}
          </p>
        ) : null}
      </footer>
    </article>
  );
}
