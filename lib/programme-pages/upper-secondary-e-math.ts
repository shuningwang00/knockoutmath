import type { ProgrammePageContent } from "@/lib/programme-pages/types";

const g3Footnote =
  "The G3 Math syllabus was introduced in 2024 and currently applies only to Sec 1 students. Our Sec 3 and 4 classes still follow the previous Express/NA/NT streams. As G3 rolls out to upper levels in future years, we'll adapt our programmes to stay fully aligned.";

export const upperSecondaryEMathProgramme: ProgrammePageContent = {
  slug: "/secondary-e-math-tuition-o-level/",
  metadata: {
    title: "O-Level E-Math Tuition Bukit Timah | Secondary 3 & 4",
    description:
      "Excel in O-Level Elementary Mathematics with expert Secondary 3 & 4 E-Math tuition at Knockout Math Bukit Timah. MOE-aligned syllabus, KICK Method, and exam-focused preparation.",
  },
  hero: {
    eyebrow: "Programmes",
    title: "Secondary O-Level E-Math Tuition",
    subtitle: "Secondary 3 to 4",
    intro:
      "Our Upper Secondary E-Math programme equips Secondary 3 and 4 students with the tools and techniques to excel in O-Level exams — building confidence across numbers and algebra, geometry and measurement, and statistics and probability.",
    image: "/programmes/DSC08232.webp",
    imageAlt: "Students collaborating on math with whiteboards and sticky notes",
  },
  foundation: {
    titleLines: ["E-Math:", "The Foundation", "of Problem-Solving"],
    intro:
      "Our Upper Secondary Elementary Mathematics (E-Math) programme caters to students in Secondary 3 and 4, providing them with the tools and techniques needed to excel in their O-Level exams. E-Math is a compulsory subject for all students sitting for O-Levels, and aims to give students a fundamental understanding of the core mathematical disciplines of numbers and algebra, geometry and measurement, and statistics and probability. These foundational topics emphasise the everyday application of mathematics. Here at Knockout, we are focused on our students' understanding of E-Math topics, ensuring that they are confident in tackling various types of questions.",
    nav: [
      { label: "Programme Features", href: "#programme-features", icon: "star" },
      { label: "Secondary 3 Scheme of Work", href: "#secondary-3-scheme-of-work", icon: "bookmark" },
      { label: "Secondary 4 Scheme of Work", href: "#secondary-4-scheme-of-work", icon: "bookmark" },
      { label: "Fees", href: "#fees", icon: "star" },
      { label: "Enroll Now", href: "#enroll", icon: "star" },
    ],
  },
  highlights: {
    title: "What You Can Look Forward To",
    moeTitle: "Alignment with MOE",
    moeBody:
      "At Knockout Math, our programmes are aligned with the E-Math MOE Mathematics Curriculum Framework. We focus on building a strong understanding of key concepts, strengthening skills like estimation, manipulation and data handling, and nurturing essential processes such as reasoning, representing, applying and modelling. Through the use of technology tools, real-world contexts, and collaborative discussions, we develop students' metacognitive awareness and positive attitudes towards learning.",
    featuresTitle: "Secondary E-Math Class Features",
    features: [
      {
        title: "Real-world math scenarios",
        points: ["To understand how topics learnt connect to everyday life"],
      },
      {
        title: "Error analysis & pattern spotting",
        points: ["Developing strong analytical habits and avoid common mistakes"],
      },
      {
        title: "Structured problem solving techniques",
        points: [
          "To confidently break down questions and answer them comprehensively and efficiently",
        ],
      },
      {
        title: "Curated learning materials",
        points: [
          "Knockout Math's hand-crafted notes and practice questions organised to train students in math using the KICK method",
        ],
      },
      {
        title: "Tech-tools",
        points: ["To improve independent learning and digital literacy for self-directed learning"],
      },
    ],
  },
  syllabi: [
    {
      level: "Secondary 3 Express E-Math",
      intro: `${g3Footnote}\n\nIn Secondary 3 E-Math, students deepen their understanding of algebraic manipulation, geometry, mensuration, statistics, and graphs. Our Secondary E-Math tuition programme follows the MOE teaching sequence closely, ensuring students build the skills and knowledge required for the O-Level examinations with clarity and confidence.`,
      terms: [
        {
          name: "Learn Ahead",
          dates: "1 Dec – 21 Dec (3 weeks)",
          chapters: ["Chapter 1: Quadratic and Fractional Equations"],
        },
        {
          name: "Term 1",
          dates: "5 Jan – 12 Apr (18 weeks)",
          chapters: [
            "Chapter 2: Indices and Standard form",
            "WA1 Revision",
            "Chapter 3: Coordinate Geometry",
            "Chapter 4: Graphs of Functions and Graphical Solution",
            "WA2 Revision",
          ],
        },
        {
          name: "Term 2",
          dates: "13 Apr – 16 Aug (14 weeks)",
          chapters: [
            "Chapter 5: Further Trigonometry",
            "Chapter 6: Applications of Trigonometry",
            "Chapter 7: Arc length, Area of Sector and Radian Measure",
            "WA3 Revision",
            "Chapter 8: Congruence and Similarity Tests",
            "Chapter 9: Area and Volume of Similar Figures and Solids",
          ],
        },
        {
          name: "Term 3",
          dates: "17 Aug – 22 Nov (14 weeks)",
          chapters: ["Chapter 10: Geometrical Properties of Circles", "End of Year Revision"],
        },
      ],
    },
    {
      level: "Secondary 4 Express E-Math",
      intro: `${g3Footnote}\n\nIn Secondary 4 E-Math, students consolidate their mathematical foundation while tackling new concepts such as data analysis, probability, and matrices. Our tuition programme is designed to align with the Secondary E-Math MOE syllabus, ensuring students are fully equipped to handle the rigour of the O-Level examinations. Lessons are structured to sharpen analytical thinking and problem-solving skills, with a strong emphasis on exam readiness through targeted revision and exposure to past year papers.`,
      terms: [
        {
          name: "Learn Ahead",
          dates: "1 Dec – 21 Dec (3 weeks)",
          chapters: ["Chapter 1: Set Language and Notation"],
        },
        {
          name: "Term 1",
          dates: "5 Jan – 12 Apr (18 weeks)",
          chapters: [
            "Chapter 2: Data Analysis",
            "Chapter 3: Probability",
            "Chapter 4: Matrices",
            "Chapter 5: Vectors",
          ],
        },
        {
          name: "Term 2",
          dates: "13 Apr – 16 Aug (14 weeks)",
          chapters: ["Problems in Real-world Contexts Questions Consolidated Revision"],
        },
        {
          name: "Term 3",
          dates: "17 Aug – 25 Oct (10 weeks)",
          chapters: ["Timed Practice Papers"],
        },
      ],
    },
  ],
  fees: {
    amount: "$340",
    unit: "per 4 lessons",
    intro:
      "Upper secondary E-Math is billed in 4-lesson blocks — materials included, with pro-rated options if you join mid-term. Take both E-Math and A-Math for a bundle rate.",
    bundle: {
      amount: "$620",
      label: "E-Math + A-Math bundle (both subjects)",
    },
    notes: [
      "Pro-rated for mid-term enrolments",
      "Registration fee: $40 (one-time)",
      "Material fees included",
    ],
  },
  referral: {
    title: "Referral Programme",
    body: "Know someone who could use a math confidence boost? Refer a friend to Knockout Math — when they sign up for our Secondary E-Math tuition classes, you get $200 cash, and they get the support they need to improve and thrive. Everybody wins. No referral limit, so keep the good vibes (and rewards) coming!",
  },
  successStories: {
    title: "Hear From Our Students",
    body: "At Knockout Math Bukit Timah, our Secondary E-Math Tuition classes have boosted the grades of over 50+ students with our unique KICK curriculum that ensures students have a holistic learning experience. Read our student success stories and see why Knockout Math is the top choice for Secondary O-Level E-Math and A-Math Tuition in Bukit Timah.",
    href: "/testimonials/",
  },
  enroll: {
    body: "E-Math classes are $340 per 4 lessons, or $620 when you take both E-Math and A-Math. Secure a spot in our Secondary 3 & 4 O-Level classes or book a free trial at our Bukit Timah centre.",
  },
};
