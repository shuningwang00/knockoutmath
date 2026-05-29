import type { ProgrammePageContent } from "@/lib/programme-pages/types";

export const lowerSecondaryProgramme: ProgrammePageContent = {
  slug: "/secondary-math-tuition/",
  metadata: {
    title: "Lower Secondary G3 Math Tuition | Secondary 1 & 2",
    description:
      "Build a strong foundation in Secondary 1 and 2 G3 Math at Knockout Math Bukit Timah. MOE-aligned curriculum, KICK Method, and expert tutors for problem-solving and confidence.",
  },
  hero: {
    eyebrow: "Programmes",
    title: "Lower Secondary G3 Math Tuition",
    subtitle: "Secondary 1 to 2",
    intro:
      "Our Lower Secondary (G3) programme builds a strong foundation in mathematics for students in Secondary 1 and 2. We develop critical thinking and problem-solving skills through engaging lessons and interactive activities — so every student grasps key concepts and is ready for upper secondary.",
    image: "/programmes/DSC08118.webp",
    imageAlt: "Student raising her hand in a Knockout Math classroom",
  },
  foundation: {
    titleLines: ["G3 Math:", "The Foundation", "of Problem-Solving"],
    intro:
      "Our Lower Secondary (G3) programme is designed to build a strong foundation in mathematics for students in Secondary 1 and 2. We focus on developing critical thinking and problem-solving skills through engaging lessons and interactive activities. Our experienced tutors ensure that each student grasps key concepts and is well-prepared for higher-level mathematics.",
    nav: [
      { label: "Programme Features", href: "#programme-features", icon: "star" },
      { label: "Secondary 1 Scheme of Work", href: "#secondary-1-scheme-of-work", icon: "bookmark" },
      { label: "Secondary 2 Scheme of Work", href: "#secondary-2-scheme-of-work", icon: "bookmark" },
      { label: "Fees", href: "#fees", icon: "star" },
      { label: "Enroll Now", href: "#enroll", icon: "star" },
    ],
  },
  highlights: {
    title: "What You Can Look Forward To",
    moeTitle: "Alignment with MOE",
    moeBody:
      "At Knockout Math Bukit Timah, our programmes are aligned with the MOE Mathematics Curriculum Framework. We focus on building a strong understanding of key concepts, strengthening skills like estimation, manipulation and data handling, and nurturing essential processes such as reasoning, representing, applying and modelling. Through technology tools, real-world contexts, and collaborative discussions, we develop students' metacognitive awareness and positive attitudes towards learning.",
    featuresTitle: "Features",
    features: [
      {
        title: "Interactive group debates",
        points: [
          "Answer their 'why not's' and develop reasoning and explanatory skills",
          "Appreciate different approaches in solving problems and develop trigger-spotting skills",
          "Find purpose and relatability in learning math",
          "Get a headstart in application-style questions common in higher-level math",
        ],
      },
      {
        title: "Hand-crafted notes & practice",
        points: [
          "Knockout Math notes and practice questions organised to train students using the KICK Method",
        ],
      },
      {
        title: "Tech-supported learning",
        points: [
          "Improve independent learning and digital literacy through guided use of learning tools",
        ],
      },
    ],
  },
  syllabi: [
    {
      level: "Secondary 1 G3 Math",
      intro:
        "The Secondary 1 Mathematics syllabus lays the foundation for all future math learning, covering essential MOE topics such as algebra, geometry, number patterns, and data handling. We help students transition smoothly from primary to secondary school math with engaging lessons, tech-supported learning, and guided problem-solving strategies.",
      terms: [
        {
          name: "Term 0",
          dates: "1 Dec – 21 Dec (3 weeks)",
          chapters: [],
        },
        {
          name: "Term 1",
          dates: "5 Jan – 12 Apr (18 weeks)",
          chapters: [
            "Chapter 1: Primes, HCF and LCM",
            "Chapter 2: Integers, Rational Numbers and Real Numbers",
            "Chapter 3: Approximation and Estimation",
            "WA1 Revision",
            "Chapter 4: Algebraic Expressions",
            "Chapter 5: Algebraic Equations and Simple Inequalities",
            "Chapter 6: Linear Functions and Graphs",
          ],
        },
        {
          name: "Term 2",
          dates: "13 Apr – 16 Aug (14 weeks)",
          chapters: [
            "WA2 Revision",
            "Chapter 7: Number Patterns",
            "Chapter 8: Ratio and Proportion",
            "Chapter 9: Percentage",
            "Chapter 10: Rate and Speed",
            "Chapter 11: Angles, Triangles and Polygons",
            "Chapter 12: Mensuration (Area and Perimeter)",
            "WA3 Revision",
          ],
        },
        {
          name: "Term 3",
          dates: "17 Aug – 22 Nov (14 weeks)",
          chapters: [
            "Chapter 13: Mensuration (Volume and Surface Area)",
            "Chapter 14: Data Handling and Analysis",
            "End of Year Revision",
          ],
        },
      ],
    },
    {
      level: "Secondary 2 G3 Math",
      intro:
        "The Secondary 2 Mathematics syllabus reinforces and deepens understanding of key strands from Secondary 1 — algebra, geometry, and statistics. Our programme helps students master MOE-aligned topics through targeted practice, conceptual clarity, and real-world applications for upper secondary and O-Level preparation.",
      terms: [
        {
          name: "Learn Ahead",
          dates: "Term 1 Dec – 21 Dec (3 weeks)",
          chapters: [
            "Chapter 1: Linear Graphs and Simultaneous Linear Equations",
            "Chapter 2: Linear Inequalities",
          ],
        },
        {
          name: "Term 1",
          dates: "5 Jan – 12 Apr (18 weeks)",
          chapters: [
            "Chapter 3: Expansion and Factorisation of Algebraic Expressions",
            "WA1 Revision",
            "Chapter 4: Expansion and Factorisation using Special Algebraic Identities",
            "Chapter 5: Quadratic Equations and Graphs",
            "Chapter 6: Algebraic Fractions and Formulae",
          ],
        },
        {
          name: "Term 2",
          dates: "13 Apr – 16 Aug (14 weeks)",
          chapters: [
            "WA2 Revision",
            "Chapter 7: Direct and Inverse Proportions",
            "Chapter 8: Congruence and Similarity",
            "Chapter 9: Pythagoras' Theorem",
            "Chapter 10: Trigonometric Ratios",
            "Chapter 11: Volume and Surface Area of Pyramids, Cones and Spheres",
            "WA3 Revision",
            "Chapter 12: Probability of Single Events",
          ],
        },
        {
          name: "Term 3",
          dates: "17 Aug – 22 Nov (14 weeks)",
          chapters: [
            "Chapter 13: Statistical Diagrams",
            "Chapter 14: Averages of Statistical Data",
            "End of Year Revision",
          ],
        },
      ],
    },
  ],
  fees: {
    amount: "$280",
    unit: "per 4 lessons",
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
    body: "At Knockout Math Bukit Timah, our classes have helped students improve with our unique KICK curriculum. Read our success stories and see why families choose us for math tuition in Bukit Timah.",
    href: "/testimonials/",
  },
  enroll: {
    body: "Classes are $280 per 4 lessons. Secure a spot in our Lower Secondary G3 classes or book a free trial at our Bukit Timah centre.",
  },
};
