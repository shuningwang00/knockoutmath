import type { GooglePlaceRating } from "@/lib/google-reviews";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  type ContactFaq,
  contactFaqs,
  mainBranch,
} from "@/lib/contact";
import type { ProgrammePageContent } from "@/lib/programme-pages/types";
import type { PageTestimonial } from "@/lib/testimonials-page";
import { SITE_URL, FACEBOOK_URL, GOOGLE_MAPS_URL, INSTAGRAM_URL, YOUTUBE_URL } from "@/lib/site";

export const ORGANIZATION_ID = `${SITE_URL}/#organization`;

const LOGO_URL = `${SITE_URL}/logo-icon-dark.png`;

/** Site-wide LocalBusiness + EducationalOrganization — add once in root layout. */
export function organizationJsonLd(googleRating?: GooglePlaceRating | null) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "EducationalOrganization"],
        "@id": ORGANIZATION_ID,
        name: "Knockout Math",
        legalName: "Knockout Learning Centre",
        url: SITE_URL,
        logo: LOGO_URL,
        image: `${SITE_URL}/programmes/DSC08118.webp`,
        description:
          "Math tuition centre in Bukit Timah, Singapore — Secondary, IP, and JC programmes helmed by ex-MOE tutors using the KICK Method.",
        telephone: CONTACT_PHONE,
        email: CONTACT_EMAIL,
        ...(googleRating
          ? {
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: googleRating.rating.toFixed(1),
                reviewCount: String(googleRating.reviewCount),
                bestRating: "5",
                worstRating: "1",
              },
            }
          : {}),
        areaServed: {
          "@type": "Country",
          name: "Singapore",
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: "144 Upper Bukit Timah Road, #03-38, Beauty World Centre",
          addressLocality: "Singapore",
          postalCode: "588177",
          addressCountry: "SG",
        },
        location: [
          {
            "@type": "Place",
            name: mainBranch.name,
            address: {
              "@type": "PostalAddress",
              streetAddress: "144 Upper Bukit Timah Road, #03-38, Beauty World Centre",
              addressLocality: "Singapore",
              postalCode: "588177",
              addressCountry: "SG",
            },
          },
          {
            "@type": "Place",
            name: "Bukit Timah Shopping Centre",
            address: {
              "@type": "PostalAddress",
              streetAddress: "170 Upper Bukit Timah Road, #14-02, Bukit Timah Shopping Centre",
              addressLocality: "Singapore",
              postalCode: "588179",
              addressCountry: "SG",
            },
          },
        ],
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Thursday", "Friday"],
            opens: "15:00",
            closes: "20:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Saturday", "Sunday"],
            opens: "09:00",
            closes: "18:00",
          },
        ],
        sameAs: [FACEBOOK_URL, INSTAGRAM_URL, YOUTUBE_URL, GOOGLE_MAPS_URL],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "Knockout Math",
        publisher: { "@id": ORGANIZATION_ID },
      },
    ],
  };
}

function courseOfferJsonLd(
  fees: NonNullable<ProgrammePageContent["fees"]>,
  courseUrl: string,
) {
  const price = fees.amount.replace(/[^\d.]/g, "");

  return {
    "@type": "Offer",
    price,
    priceCurrency: "SGD",
    description: `${fees.amount} ${fees.unit}`,
    url: courseUrl,
    availability: "https://schema.org/InStock",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price,
      priceCurrency: "SGD",
      name: fees.unit,
      referenceQuantity: {
        "@type": "QuantitativeValue",
        value: "4",
        unitText: "lessons",
      },
    },
  };
}

/** Course schema for programme landing pages. */
export function courseJsonLd(programme: ProgrammePageContent) {
  const courseUrl = `${SITE_URL}${programme.slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "Course",
    "@id": `${courseUrl}#course`,
    name: programme.hero.title,
    description: programme.metadata.description,
    url: courseUrl,
    provider: { "@id": ORGANIZATION_ID },
    educationalLevel: programme.hero.subtitle,
    teaches: "Mathematics",
    inLanguage: "en",
    ...(programme.fees
      ? {
          offers: courseOfferJsonLd(programme.fees, courseUrl),
        }
      : {}),
  };
}

/** Review list for the testimonials page. */
export function testimonialsJsonLd(testimonials: PageTestimonial[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Knockout Math student testimonials",
    itemListElement: testimonials.map((testimonial, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Review",
        "@id": `${SITE_URL}/testimonials/#${testimonial.id}`,
        author: {
          "@type": "Person",
          name: testimonial.name,
        },
        reviewBody: testimonial.quote,
        itemReviewed: { "@id": ORGANIZATION_ID },
        ...(testimonial.outcome ? { name: testimonial.outcome } : {}),
      },
    })),
  };
}

/** FAQPage schema for contact / FAQ sections. */
export function faqPageJsonLd(faqs: ContactFaq[], pageUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

type PrincipalTutorSchemaInput = {
  name: string;
  role: string;
  image: string;
  description: string;
  credentials: string[];
  pageUrl: string;
};

/** Person schema for the principal tutor profile. */
export function principalTutorJsonLd(tutor: PrincipalTutorSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${tutor.pageUrl}#${tutor.name.toLowerCase().replace(/\s+/g, "-")}`,
    name: tutor.name,
    jobTitle: tutor.role,
    image: `${SITE_URL}${tutor.image}`,
    description: tutor.description,
    url: tutor.pageUrl,
    worksFor: { "@id": ORGANIZATION_ID },
    knowsAbout: [
      "Mathematics",
      "Secondary Mathematics",
      "O-Level Mathematics",
      "A-Level H2 Mathematics",
      "Integrated Programme Mathematics",
    ],
    hasCredential: tutor.credentials,
  };
}
