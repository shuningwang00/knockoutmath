import type { Metadata } from "next";
import EnquirySection from "@/components/enquiry-section";
import ProgrammeFoundationNav from "@/components/programme-foundation-nav";
import {
  ProgrammeBottomCta,
  ProgrammeHero,
  ProgrammeHighlights,
  ProgrammeSyllabus,
} from "@/components/programme-page-sections";
import { lowerSecondaryProgramme } from "@/lib/programme-pages/lower-secondary";
import { courseJsonLd } from "@/lib/structured-data";
import { SITE_URL } from "@/lib/site";
import JsonLd from "@/components/json-ld";

const programme = lowerSecondaryProgramme;

export const metadata: Metadata = {
  title: programme.metadata.title,
  description: programme.metadata.description,
  alternates: {
    canonical: `${SITE_URL}${programme.slug}`,
  },
};

export default function LowerSecondaryMathPage() {
  return (
    <div>
      <JsonLd data={courseJsonLd(programme)} />
      <ProgrammeHero hero={programme.hero} />
      <ProgrammeFoundationNav foundation={programme.foundation} />
      <ProgrammeHighlights highlights={programme.highlights} />
      <ProgrammeSyllabus syllabi={programme.syllabi} fees={programme.fees} />
      <ProgrammeBottomCta referral={programme.referral} successStories={programme.successStories} />
      <EnquirySection />
    </div>
  );
}
