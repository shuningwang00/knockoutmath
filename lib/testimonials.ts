import { pageTestimonials, type PageTestimonial } from "@/lib/testimonials-page";

export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  detail: string;
};

const MARQUEE_QUOTE_MAX = 220;

function truncateQuote(quote: string, max = MARQUEE_QUOTE_MAX): string {
  if (quote.length <= max) return quote;
  const trimmed = quote.slice(0, max).replace(/\s+\S*$/, "");
  return `${trimmed}…`;
}

function formatDetail(testimonial: PageTestimonial): string {
  if (testimonial.outcome) return testimonial.outcome;
  return testimonial.year
    ? `${testimonial.school} · ${testimonial.year}`
    : testimonial.school;
}

export function toMarqueeTestimonial(testimonial: PageTestimonial): Testimonial {
  return {
    id: testimonial.id,
    quote: truncateQuote(testimonial.quote),
    name: testimonial.name,
    detail: formatDetail(testimonial),
  };
}

/** Homepage marquee — derived from real student & parent reviews. */
export const marqueeTestimonials: Testimonial[] = pageTestimonials.map(toMarqueeTestimonial);
