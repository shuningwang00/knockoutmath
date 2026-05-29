export type ContactFaq = {
  id: string;
  question: string;
  answer: string;
};

export type GettingHereSection = {
  title: string;
  items: string[];
};

export const CONTACT_EMAIL = "contact@knockoutmath.sg";
export const CONTACT_PHONE = "+65 8476 0600";
export const CONTACT_PHONE_HREF = "tel:+6584760600";

export const mainBranch = {
  label: "Main Branch",
  name: "Beauty World Centre",
  address: "144 Upper Bukit Timah Road, #03-38, Beauty World Centre, Singapore 588177",
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=144+Upper+Bukit+Timah+Road+%2303-38+Beauty+World+Centre+Singapore+588177",
  mapEmbedUrl:
    "https://maps.google.com/maps?q=144+Upper+Bukit+Timah+Road+%2303-38+Beauty+World+Centre+Singapore+588177&z=16&output=embed",
};

export const secondBranch = {
  label: "Second Branch",
  address: "170 Upper Bukit Timah Road, #14-02, Bukit Timah Shopping Centre, Singapore 588179",
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=170+Upper+Bukit+Timah+Road+%2314-02+Bukit+Timah+Shopping+Centre+Singapore+588179",
};

export const openingHours = [
  { day: "Mon – Fri", time: "3:00 – 8:00pm" },
  { day: "Weekends", time: "9:00 – 6:00pm" },
  { day: "Wed", time: "Closed" },
] as const;

export const contactNavLinks = [
  { label: "WhatsApp", href: "#whatsapp" },
  { label: "Enquiry Form", href: "#enquiry" },
  { label: "Getting Here", href: "#directions" },
  { label: "FAQ", href: "#faq" },
] as const;

export const gettingHereSections: GettingHereSection[] = [
  {
    title: "By MRT",
    items: ["Beauty World MRT, Exit A towards Beauty World Centre"],
  },
  {
    title: "By Bus",
    items: [
      "2 min walk from Beauty World Stn Exit A (42099)",
      "3 min walk from Beauty World Stn Exit B (42019)",
      "2 min walk from Opp Beauty World Ctr (42109)",
      "4 min walk from Goh & Goh Bldg (42259)",
    ],
  },
  {
    title: "By Car",
    items: ["H22 Taxi Stand", "Parking at Beauty World Centre"],
  },
];

export const contactFaqs: ContactFaq[] = [
  {
    id: "levels",
    question: "What age groups or levels do you cater to?",
    answer:
      "We offer math programmes from Primary through Junior College, tailored to suit each level's curriculum and learning needs.",
  },
  {
    id: "different",
    question: "What makes Knockout Math different from other tuition centres?",
    answer:
      "We focus on deep understanding, not rote learning. Our unique KICK Method combines conceptual clarity, interactive lessons, and engaging problem-solving to help students gain true confidence in math.",
  },
  {
    id: "syllabus",
    question: "Are your programmes aligned with the school syllabus?",
    answer:
      "Yes. Our lessons are designed to follow and reinforce the MOE syllabus, with added depth to challenge and stretch each learner from our vast experience in teaching.",
  },
  {
    id: "trial",
    question: "Do you offer trial classes?",
    answer:
      "Absolutely. We believe in the right fit — trial classes are available so your child can experience our teaching approach before committing.",
  },
  {
    id: "class-size",
    question: "What is your class size?",
    answer:
      "Our classes range from 4 to 15 students based on demand. They may be larger than traditional tuition centres, but that's by design. With our structured curriculum and the KICK Method, every student remains actively engaged and supported — no one gets left behind.",
  },
  {
    id: "enrol",
    question: "How do I enrol in Knockout Math?",
    answer:
      "You can fill out our enquiry form, message us directly, or contact us to schedule a class. We'll guide you through the process.",
  },
  {
    id: "online",
    question: "Do you offer online classes?",
    answer:
      "No, we don't. We believe that real learning happens through real connection. In-person engagement between tutor and student is a core part of what makes our method effective.",
  },
  {
    id: "teachers",
    question: "What qualifications do your teachers have?",
    answer:
      "Our tutors are personally selected and trained through Knockout Math's Teacher Training Programme (TTP) to power their teaching ability and to strengthen the adoption of our unique KICK method. Not all our tutors are MOE-trained — and that's intentional. We select passionate individuals with strong math foundations and a natural ability to connect with students. They are then trained and mentored by experienced educators, including MOE-trained teachers, to ensure every lesson meets Knockout standards and the relevant curriculums.",
  },
];
