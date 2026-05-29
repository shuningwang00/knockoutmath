import EnquirySection from "@/components/enquiry-section";
import PageHero from "@/components/page-hero";
import SeoLandingSections from "@/components/seo-landing-sections";
import { leadingMathTuitionCentrePage } from "@/lib/seo-landing-pages";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: leadingMathTuitionCentrePage.metadata.title,
  description: leadingMathTuitionCentrePage.metadata.description,
  path: leadingMathTuitionCentrePage.slug,
});

export default function LeadingMathTuitionCentrePage() {
  return (
    <div>
      <PageHero title={leadingMathTuitionCentrePage.heroTitle} />
      <SeoLandingSections content={leadingMathTuitionCentrePage} />
      <EnquirySection />
    </div>
  );
}
