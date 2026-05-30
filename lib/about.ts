export type ComparisonRow = {
  label: string;
  knockout: string[];
  traditional: string[];
};

export const aboutMission =
  "To revolutionize math learning with a modern, dynamic approach—making it fun, accessible, and empowering. We're here to help students land a punch on challenges and emerge victorious in the math ring.";

export const teamSections = [
  {
    title: "Tutors",
    body: "Our team brings together ex-MOE educators and specialist coaches from competitive exam backgrounds — the best of classroom pedagogy and results-focused strategy. Principal Tutor Peng Junyang personally mentors every tutor through our Teacher Training Programme (TTP), ensuring consistent standards in notes, resources, and delivery. Together, we create a learning environment where students build understanding, confidence, and exam-ready fluency.",
    cta: { label: "Learn more about our tutors", href: "/our-tutors/" },
  },
  {
    title: "Programme Designers",
    body: "Alongside our expert tutors, we have a team of programme designers—young, dynamic individuals passionate about rethinking traditional teaching methods. These creative professionals design interactive and engaging programmes that make math feel fresh, exciting, and relevant. They focus on turning each lesson into an experience, ensuring that students learn while enjoying the process.",
  },
] as const;

export const comparisonRows: ComparisonRow[] = [
  {
    label: "Curriculum coverage",
    knockout: [
      "Full MOE syllabus coverage",
      "Curated questions building from foundation to high level — guided in-class practice and take-home practice",
      "Structured revision plans based on trend analysis from past-year exam papers",
      "Interactive activities to develop understanding and explanation skills",
    ],
    traditional: [
      "Full MOE syllabus coverage",
      "Worksheet drills",
      "Ten-year series and past-year school exam papers",
    ],
  },
  {
    label: "Programme & teaching style",
    knockout: [
      "Focus on developing strong understanding and confidence in key concepts",
      "Real-world application across all topics to solidify understanding",
      "KICK Method — Knowledge, Interpret, Coach, Knockout",
    ],
    traditional: [
      "Focus on completion of syllabus and rote learning",
      "Topic-based real-world application based on exam questions",
    ],
  },
  {
    label: "Tutors",
    knockout: [
      "Passionate tutors specialising in math only — updated notes, resources, and pedagogy",
      "Ex-MOE educators and competitive-exam coaches, mentored by Principal Tutor Peng Junyang through TTP",
    ],
    traditional: [
      "Generic tutors teaching multiple subjects",
      "MOE-trained",
    ],
  },
  {
    label: "Teaching resources",
    knockout: [
      "Resources curated through deep analysis of latest exam questions and past-year trends",
      "Clear step-by-step explanations, diagrams, techniques, and common mistakes — updated yearly",
      "Topics and revision structured by difficulty so students know where they stand",
    ],
    traditional: [
      "Generic photocopies from assessment books or school worksheets",
      "Same worksheets recycled across classes regardless of student profile",
      "Questions often repetitive or mismatched in difficulty",
    ],
  },
];
