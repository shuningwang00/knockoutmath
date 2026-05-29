export type LegalSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type LegalPageContent = {
  slug: string;
  title: string;
  metadata: {
    title: string;
    description: string;
  };
  intro?: string;
  effectiveDate?: string;
  sections: LegalSection[];
};

export const privacyPolicyPage: LegalPageContent = {
  slug: "/privacy-policy/",
  title: "Privacy Policy",
  metadata: {
    title: "Privacy Policy",
    description:
      "How Knockout Math collects, uses, and protects your personal data under Singapore's PDPA. Contact us to access or update your information.",
  },
  effectiveDate: "14 April 2025",
  intro:
    'Knockout Math ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal data when you visit our website or submit your information through our forms.',
  sections: [
    {
      heading: "What We Collect",
      paragraphs: ["We may collect the following information:"],
      bullets: [
        "Full name",
        "Contact number",
        "Email address",
        "Child's academic level and subjects",
        "Other information submitted via contact or sign-up forms",
      ],
    },
    {
      heading: "Why We Collect It",
      paragraphs: ["We use your information to:"],
      bullets: [
        "Respond to enquiries and provide trial class bookings",
        "Send updates, offers, or promotions (only if you opt-in)",
        "Improve our website and advertising performance",
        "Ensure a smooth user experience",
      ],
    },
    {
      heading: "How We Protect Your Data",
      paragraphs: [
        "We store all personal data securely and take reasonable precautions to prevent unauthorised access, disclosure, or misuse.",
      ],
    },
    {
      heading: "Third-Party Sharing",
      paragraphs: [
        "We do not sell or rent your personal data. However, we may use trusted third-party services (like Google Ads, Meta Ads) that collect anonymised usage data to help us run and optimise our marketing campaigns.",
      ],
    },
    {
      heading: "Your Rights",
      paragraphs: ["Under Singapore's PDPA, you have the right to:"],
      bullets: [
        "Access your data",
        "Correct any errors",
        "Request withdrawal of consent or deletion of data",
      ],
    },
    {
      heading: "Cookies",
      paragraphs: [
        "Our website may use cookies to personalise content, track ads, and analyse traffic. You can disable cookies in your browser settings at any time.",
      ],
    },
    {
      heading: "Changes to This Policy",
      paragraphs: [
        "We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.",
      ],
    },
    {
      heading: "Contact Us",
      paragraphs: [
        "If you have questions about this policy or how we handle your data, please contact us via our contact page or email contact@knockoutmath.sg.",
      ],
    },
  ],
};

export const termsConditionsPage: LegalPageContent = {
  slug: "/terms-conditions/",
  title: "Terms & Conditions",
  metadata: {
    title: "Terms & Conditions",
    description:
      "Knockout Math terms for trial classes, enrolment, attendance, improvement guarantee, and website use. Governed by the laws of Singapore.",
  },
  intro:
    "Welcome to Knockout Math. By accessing our website, enrolling in our programmes, or using any of our services, you agree to be bound by the following Terms and Conditions. Please read these carefully before proceeding. If you do not agree with any part of these terms, please do not use our services.",
  sections: [
    {
      heading: "Trial Classes",
      paragraphs: [
        "Knockout Math offers each student one complimentary trial class per subject, which must be scheduled in advance and is subject to availability. Trial bookings are made through our official website or communication channels. We reserve the right to decline or reschedule trial classes in cases of no-shows or if the trial has been previously utilized. Trial classes serve to introduce students to our teaching methodology and are not guaranteed to result in enrolment.",
      ],
    },
    {
      heading: "Enrolment and Payment",
      paragraphs: [
        "Enrolment in any Knockout Math programme is confirmed only upon full payment of the fees as detailed during registration. Payment methods include bank transfer, PayNow, or other methods as specified onsite or on our website. All fees paid are non-refundable unless explicitly stated otherwise. Knockout Math reserves the right to revise fees or change payment terms at any time, provided that such changes will be communicated to enrolled students in advance. Failure to complete payment may result in forfeiture of your place in the programme.",
      ],
    },
    {
      heading: "Class Attendance and Make-Up Policy",
      paragraphs: [
        "Students are expected to attend all scheduled classes punctually and regularly to maximise learning outcomes. In the event of absence, students must notify Knockout Math at least 24 hours in advance to qualify for a make-up class. Without proper notice, make-up lessons will not be granted. Excessive absences or repeated failure to attend may lead to termination of enrolment, and no refunds will be issued under such circumstances. Knockout Math strives to accommodate students' needs but cannot guarantee make-up sessions beyond reasonable limits.",
      ],
    },
    {
      heading: "Improvement Guarantee",
      paragraphs: [
        "Our improvement guarantee applies to students who fully participate in lessons, complete all assigned work, and attend classes consistently. Improvement will be assessed by comparing students' school examination results or mock test scores over a period of three months. Should measurable progress not be demonstrated, Knockout Math commits to providing additional free revision support until tangible improvement is achieved. This guarantee is subject to conditions and does not cover factors beyond the tutor's control such as student effort, external tutoring, or school changes.",
      ],
    },
    {
      heading: "Intellectual Property",
      paragraphs: [
        "All content, teaching materials, course notes, and resources provided by Knockout Math are the intellectual property of Knockout Math. These materials are provided solely for the personal use of enrolled students and must not be copied, shared, distributed, or used for commercial purposes without express written permission from Knockout Math. Any unauthorized use may result in legal action.",
      ],
    },
    {
      heading: "Website Use",
      paragraphs: [
        "By using our website, you agree not to engage in any behaviour that may harm, disrupt, or interfere with the site or its users. We make no warranties regarding the accuracy or availability of the website and disclaim liability for any damages arising from its use. Users agree not to attempt unauthorized access or misuse of site content.",
      ],
    },
    {
      heading: "Privacy and Data Protection",
      paragraphs: [
        "Your personal information will be collected and processed in accordance with our Privacy Policy. By submitting your details or enrolling in our programmes, you consent to the collection, use, and storage of your data as described therein.",
      ],
    },
    {
      heading: "Limitation of Liability",
      paragraphs: [
        "Knockout Math shall not be held liable for any indirect, incidental, or consequential damages resulting from the use of our services. Academic results are influenced by various factors, including student effort and external circumstances; therefore, we cannot guarantee specific outcomes beyond what is outlined in our improvement guarantee.",
      ],
    },
    {
      heading: "Termination",
      paragraphs: [
        "Knockout Math reserves the right to terminate enrolment or refuse service to any student who breaches these Terms or engages in misconduct. Termination may be immediate and without refund at our sole discretion.",
      ],
    },
    {
      heading: "Changes to Terms",
      paragraphs: [
        "These Terms and Conditions may be amended from time to time without prior notice. Continued use of Knockout Math's services after any changes constitutes acceptance of the revised terms. Significant updates will be communicated to enrolled students via email or website notices.",
      ],
    },
    {
      heading: "Governing Law",
      paragraphs: [
        "These Terms and Conditions shall be governed by and construed in accordance with the laws of the Republic of Singapore. Any disputes arising from the use of our services shall be subject to the exclusive jurisdiction of the Singapore courts.",
      ],
    },
    {
      heading: "Contact Information",
      paragraphs: [
        "If you have any questions or concerns regarding these Terms and Conditions, please contact us at contact@knockoutmath.sg or +65 8476 0600.",
      ],
    },
  ],
};
