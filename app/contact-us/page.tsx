import type { Metadata } from "next";
import Link from "next/link";
import ContactFaq from "@/components/contact-faq";
import EnquiryForm from "@/components/enquiry-form";
import FadeIn from "@/components/fade-in";
import HashLink from "@/components/hash-link";
import JsonLd from "@/components/json-ld";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_HREF,
  contactFaqs,
  contactNavLinks,
  gettingHereSections,
  mainBranch,
  openingHours,
  secondBranch,
} from "@/lib/contact";
import { faqPageJsonLd } from "@/lib/structured-data";
import { SITE_URL, WHATSAPP_URL } from "@/lib/site";

const contactPageUrl = `${SITE_URL}/contact-us/`;

export const metadata: Metadata = {
  title: "Contact Knockout Math | Enquire About Our Math Tuition in Singapore",
  description:
    "Get in touch with Knockout Math Bukit Timah. WhatsApp us, submit an enquiry, find directions to Beauty World Centre, or read our FAQ about programmes and enrolment.",
  alternates: {
    canonical: `${SITE_URL}/contact-us/`,
  },
};

const navButtonClassName =
  "font-heading rounded-full border-2 border-black bg-black px-5 py-2.5 text-xs font-bold uppercase tracking-[0.1em] text-white transition hover:border-orange-500 hover:bg-orange-500 md:text-sm";

export default function ContactUsPage() {
  return (
    <div>
      <JsonLd data={faqPageJsonLd(contactFaqs, contactPageUrl)} />
      <section className="border-b border-zinc-200 bg-gradient-to-b from-zinc-50 to-white">
        <div className="mx-auto w-full max-w-4xl px-4 py-8 text-center md:px-6 md:py-10">
          <p className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
            Get in touch
          </p>
          <h1 className="font-heading mt-2 text-3xl font-black uppercase tracking-tight text-black md:text-5xl">
            Contact Us
          </h1>
          <p className="font-body mx-auto mt-4 max-w-prose text-base leading-relaxed text-zinc-700 md:text-lg">
            Have a question about our programmes, enrolment, or how Knockout Math works?
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            {contactNavLinks.map((item) => (
              <HashLink key={item.href} href={item.href} className={navButtonClassName}>
                {item.label}
              </HashLink>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-[#f6f4ef]">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 md:grid-cols-2 md:gap-12 md:px-6">
          <FadeIn>
            <div id="whatsapp" className="scroll-mt-28 space-y-6">
              <p className="font-body max-w-prose text-base leading-relaxed text-zinc-700">
              The fastest way to reach us — ask about class slots, trials, or promotions.
            </p>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-heading inline-flex items-center gap-3 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-bold uppercase tracking-[0.1em] text-white transition hover:bg-[#20bd5a]"
            >
              <WhatsAppIcon />
              Chat on WhatsApp
            </a>

            <div className="card-lift space-y-4 rounded-2xl border border-zinc-200 bg-white p-6">
              <ContactRow label="Phone">
                <a href={CONTACT_PHONE_HREF} className="transition hover:text-orange-600">
                  {CONTACT_PHONE}
                </a>
              </ContactRow>
              <ContactRow label="Email">
                <a href={`mailto:${CONTACT_EMAIL}`} className="transition hover:text-orange-600">
                  {CONTACT_EMAIL}
                </a>
              </ContactRow>
              <ContactRow label="Hours">
                <OpeningHoursTable />
              </ContactRow>
              <ContactRow label="Main Branch">
                <p>{mainBranch.address}</p>
              </ContactRow>
              <ContactRow label="Second Branch">
                <p>{secondBranch.address}</p>
              </ContactRow>
            </div>
          </div>
          </FadeIn>

          <FadeIn delay={100}>
            <div id="enquiry" className="scroll-mt-28">
              <div className="card-lift rounded-2xl bg-[#3d4555] p-6 md:p-8 lg:p-10">
              <h2 className="font-heading text-2xl font-black uppercase tracking-tight text-white md:text-3xl">
                Enquiry Form
              </h2>
              <p className="font-body mt-3 text-sm leading-relaxed text-zinc-300 md:text-base">
                Tell us about your child&apos;s level and preferred class times. We&apos;ll get back
                to you shortly.
              </p>
              <div className="mt-6">
                <EnquiryForm />
              </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section id="directions" className="section-y scroll-mt-28 bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
          <FadeIn>
            <header className="max-w-2xl">
              <h2 className="font-heading text-2xl font-black uppercase tracking-tight text-black md:text-4xl">
                Getting Here
              </h2>
              <p className="font-body mt-4 max-w-prose text-base leading-relaxed text-zinc-700">
                We are located at {mainBranch.name} #03-38
              </p>
            </header>
          </FadeIn>

          <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-start">
            <div className="space-y-6">
              {gettingHereSections.map((section) => (
                <article key={section.title}>
                  <h3 className="font-heading text-sm font-bold uppercase tracking-[0.12em] text-orange-500">
                    {section.title}
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {section.items.map((item) => (
                      <li key={item} className="flex gap-3 text-sm leading-relaxed text-zinc-700 md:text-base">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-black" aria-hidden />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}

              <Link
                href={mainBranch.mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="font-heading inline-flex text-sm font-bold uppercase tracking-wide text-black underline-offset-4 transition hover:text-orange-600 hover:underline"
              >
                Open in Google Maps →
              </Link>
            </div>

            <div className="overflow-hidden rounded-2xl border border-zinc-200 shadow-sm">
              <iframe
                src={mainBranch.mapEmbedUrl}
                title="Map — Knockout Math at Beauty World Centre"
                className="h-80 w-full border-0 md:h-[28rem]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="section-y scroll-mt-28 bg-[#f6f4ef]">
        <div className="mx-auto w-full max-w-3xl px-4 md:px-6">
          <FadeIn>
            <header className="text-center">
              <h2 className="font-heading text-2xl font-black uppercase tracking-tight text-black md:text-4xl">
                Frequently Asked Questions
              </h2>
              <p className="font-body mx-auto mt-4 max-w-prose text-base leading-relaxed text-zinc-700">
                Everything you need to know before joining Knockout Math.
              </p>
            </header>
          </FadeIn>

          <FadeIn delay={100} className="mt-10">
            <ContactFaq />
          </FadeIn>

          <p className="font-body mt-8 text-center text-sm text-zinc-600">
            Still have questions?{" "}
            <Link href="/free-math-trial/" className="font-semibold text-orange-600 hover:underline">
              Book a free trial
            </Link>{" "}
            or{" "}
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="font-semibold text-orange-600 hover:underline">
              WhatsApp us
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  );
}

function ContactRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="font-heading text-xs font-bold uppercase tracking-[0.12em] text-zinc-500">
        {label}
      </p>
      <div className="font-body mt-1 text-sm leading-relaxed text-zinc-800">{children}</div>
    </div>
  );
}

function OpeningHoursTable() {
  return (
    <table className="border-separate border-spacing-y-1">
      <tbody>
        {openingHours.map((row) => (
          <tr key={row.day}>
            <th scope="row" className="w-24 pr-4 text-left font-normal text-zinc-700">
              {row.day}
            </th>
            <td className="whitespace-nowrap text-zinc-800 tabular-nums">{row.time}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function WhatsAppIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}
