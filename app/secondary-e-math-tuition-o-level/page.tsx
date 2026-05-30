import type { Metadata } from "next";
import EnquirySection from "@/components/enquiry-section";
import ProgrammeFoundationNav from "@/components/programme-foundation-nav";
import {
  ProgrammeBottomCta,
  ProgrammeHero,
  ProgrammeHighlights,
  ProgrammeSyllabus,
} from "@/components/programme-page-sections";
import { upperSecondaryEMathProgramme } from "@/lib/programme-pages/upper-secondary-e-math";
import { programmePageMetadata } from "@/lib/seo";
import { breadcrumbJsonLd, courseJsonLd } from "@/lib/structured-data";
import JsonLd from "@/components/json-ld";

const programme = upperSecondaryEMathProgramme;

export const metadata: Metadata = programmePageMetadata(programme);

export default function UpperSecondaryEMathPage() {
  return (
    <div>
      <JsonLd data={courseJsonLd(programme)} />
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", href: "/" }, { name: programme.hero.title, href: programme.slug }])} />
      <ProgrammeHero hero={programme.hero} />
      <ProgrammeFoundationNav foundation={programme.foundation} />
      <ProgrammeHighlights highlights={programme.highlights} />
      <ProgrammeSyllabus syllabi={programme.syllabi} fees={programme.fees} />
      <ProgrammeBottomCta
        referral={programme.referral}
        successStories={programme.successStories}
        enroll={programme.enroll}
      />
      <EnquirySection />
    </div>
  );
}
