import EnquirySection from "@/components/enquiry-section";
import LegalProseSection from "@/components/legal-prose-section";
import PageHero from "@/components/page-hero";
import { privacyPolicyPage } from "@/lib/legal-pages";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: privacyPolicyPage.metadata.title,
  description: privacyPolicyPage.metadata.description,
  path: privacyPolicyPage.slug,
});

export default function PrivacyPolicyPage() {
  return (
    <div>
      <PageHero title={privacyPolicyPage.title} />
      <LegalProseSection content={privacyPolicyPage} />
      <EnquirySection />
    </div>
  );
}
