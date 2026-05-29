import EnquirySection from "@/components/enquiry-section";
import PageHero from "@/components/page-hero";
import SeoLandingSections from "@/components/seo-landing-sections";
import { masterMathPage } from "@/lib/seo-landing-pages";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: masterMathPage.metadata.title,
  description: masterMathPage.metadata.description,
  path: masterMathPage.slug,
});

export default function MasterMathPage() {
  return (
    <div>
      <PageHero
        title={masterMathPage.heroTitle}
        subtitle={masterMathPage.heroSubtitle}
      />
      <SeoLandingSections content={masterMathPage} />
      <EnquirySection />
    </div>
  );
}
