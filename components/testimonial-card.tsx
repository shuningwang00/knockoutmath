import type { PageTestimonial } from "@/lib/testimonials-page";

export default function TestimonialCard({ testimonial }: { testimonial: PageTestimonial }) {
  const isTextPhoto = testimonial.photo_kind && testimonial.photo_kind !== "face";

  if (isTextPhoto) {
    return (
      <article className="card-lift flex h-full flex-col rounded-2xl border border-zinc-200 bg-white shadow-sm overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={testimonial.photo_url}
          alt={`Testimonial from ${testimonial.name}`}
          className="w-full flex-1 object-cover object-top"
        />
        <footer className="p-5 border-t border-zinc-100">
          <p className="font-heading text-base font-bold text-black">{testimonial.name}</p>
          <p className="font-body mt-1 text-sm text-zinc-600">
            {testimonial.school}
            {testimonial.year ? ` · ${testimonial.year}` : ""}
          </p>
        </footer>
      </article>
    );
  }

  return (
    <article className="card-lift flex flex-col rounded-2xl border border-zinc-200 bg-white shadow-sm overflow-hidden">
      {testimonial.photo_url && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={testimonial.photo_url}
          alt={`Testimonial from ${testimonial.name}`}
          className="w-full aspect-square object-cover object-center"
        />
      )}
      <div className="flex flex-col p-6 md:p-7">
        <p className="text-2xl font-bold leading-none text-orange-500" aria-hidden>
          &ldquo;
        </p>
        <blockquote className="font-body -mt-1 text-sm leading-relaxed text-zinc-800 md:text-base">
          {testimonial.quote}
        </blockquote>
        <footer className="mt-5 border-t border-zinc-100 pt-5">
          <p className="font-heading text-base font-bold text-black">{testimonial.name}</p>
          <p className="font-body mt-1 text-sm text-zinc-600">
            {testimonial.school}
            {testimonial.year ? ` · ${testimonial.year}` : ""}
          </p>
        </footer>
      </div>
    </article>
  );
}
