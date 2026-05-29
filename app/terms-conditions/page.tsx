import EnquirySection from "@/components/enquiry-section";
import LegalProseSection from "@/components/legal-prose-section";
import PageHero from "@/components/page-hero";
import { termsConditionsPage } from "@/lib/legal-pages";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: termsConditionsPage.metadata.title,
  description: termsConditionsPage.metadata.description,
  path: termsConditionsPage.slug,
});

export default function TermsConditionsPage() {
  return (
    <div>
      <PageHero title={termsConditionsPage.title} />
      <LegalProseSection content={termsConditionsPage} />
      <EnquirySection />
    </div>
  );
}
