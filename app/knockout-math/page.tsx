import EnquirySection from "@/components/enquiry-section";
import PageHero from "@/components/page-hero";
import SeoLandingSections from "@/components/seo-landing-sections";
import { knockoutMathPage } from "@/lib/seo-landing-pages";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: knockoutMathPage.metadata.title,
  description: knockoutMathPage.metadata.description,
  path: knockoutMathPage.slug,
});

export default function KnockoutMathPage() {
  return (
    <div>
      <PageHero title={knockoutMathPage.heroTitle} />
      <SeoLandingSections content={knockoutMathPage} />
      <EnquirySection />
    </div>
  );
}
