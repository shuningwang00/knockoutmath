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
import { SITE_URL } from "@/lib/site";

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
      <ProgrammeHero hero={programme.hero} />
      <ProgrammeFoundationNav foundation={programme.foundation} />
      <ProgrammeHighlights highlights={programme.highlights} />
      <ProgrammeSyllabus syllabi={programme.syllabi} fees={programme.fees} />
      <ProgrammeBottomCta referral={programme.referral} successStories={programme.successStories} />
      <EnquirySection />
    </div>
  );
}
