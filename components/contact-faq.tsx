import { contactFaqs } from "@/lib/contact";

export default function ContactFaq() {
  return (
    <div className="divide-y divide-zinc-200 rounded-2xl border border-zinc-200 bg-white">
      {contactFaqs.map((faq) => (
        <details key={faq.id} className="group px-5 py-1 md:px-6">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 font-heading text-sm font-bold uppercase tracking-wide text-black marker:content-none md:text-base [&::-webkit-details-marker]:hidden">
            <span>{faq.question}</span>
            <span className="shrink-0 text-orange-500 transition group-open:rotate-45">+</span>
          </summary>
          <p className="font-body pb-5 text-sm leading-relaxed text-zinc-700 md:text-base">
            {faq.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
