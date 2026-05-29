import type { ProgrammePageContent } from "@/lib/programme-pages/types";

const g3Footnote =
  "The G3 Math syllabus was introduced in 2024 and currently applies only to Sec 1 students. Our Sec 3 and 4 classes still follow the previous Express/NA/NT streams. As G3 rolls out to upper levels in future years, we'll adapt our programmes to stay fully aligned.";

export const upperSecondaryAMathProgramme: ProgrammePageContent = {
  slug: "/upper-secondary-a-math/",
  metadata: {
    title: "O-Level A-Math Tuition Bukit Timah | Secondary 3 & 4",
    description:
      "Master O-Level Additional Mathematics with expert Secondary 3 & 4 A-Math tuition at Knockout Math Bukit Timah. MOE-aligned syllabus, KICK Method, and calculus-focused exam preparation.",
  },
  hero: {
    eyebrow: "Programmes",
    title: "Secondary O-Level A-Math Tuition",
    subtitle: "Secondary 3 to 4",
    intro:
      "Our Upper Secondary A-Math programme deepens students' understanding of advanced algebra, calculus, geometry, and trigonometry — building the analytical skills needed for O-Levels and a strong foundation for Junior College.",
    image: "/programmes/DSC08427.webp",
    imageAlt: "Students learning math at desks in class",
  },
  foundation: {
    titleLines: ["A-Math:", "The Foundation", "of Problem-Solving"],
    intro:
      "Our Upper Secondary Additional Mathematics (A-Math) programme is tailored for students in Secondary 3 and 4, who wish to deepen their understanding of advanced topics. Secondary A-Math is an optional subject offered alongside E-Math that teaches students mathematical concepts crucial for further education. Doing well in A-Math provides a strong foundation for future concepts taught in Junior College. It focuses on algebraic concepts and logical reasoning, specifically emphasising algebra and calculus, geometry, and trigonometry. This programme aims at equipping our students with the skills needed for complex problem-solving and analytical thinking.",
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
      "Our Additional Math (A-Math) programme is fully aligned with the MOE syllabus, equipping students with essential skills in algebra, geometry, trigonometry, and elementary calculus. We focus on building strong mathematical foundations while exposing students to real-world applications such as optimisation, motion, and financial modelling. Through guided problem-solving and mathematical modelling tasks, students develop the reasoning and analytical skills needed for success in Secondary A-Math and beyond.",
    featuresTitle: "Features",
    features: [
      {
        title: "Real-world math scenarios",
        points: [
          "To understand how topics like calculus, logarithms and trigonometry connect to real-world problems, helping students see the value of advanced math beyond the classroom",
        ],
      },
      {
        title: "Error analysis & pattern spotting",
        points: [
          "Foster critical thinking to identify and correct errors in complex problems, ensuring precision in multi-step solutions and enhancing mathematical rigour",
        ],
      },
      {
        title: "Advanced problem-solving strategies",
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
        points: [
          "Simulation and visualisation activities to improve independent learning and digital literacy for self-directed learning",
        ],
      },
    ],
  },
  syllabi: [
    {
      level: "Secondary 3 Express A-Math",
      intro: `${g3Footnote}\n\nOur programme follows the Secondary 3 A-Math MOE syllabus closely, with a step-by-step approach that builds conceptual clarity and problem-solving confidence. Through targeted practice and real-world application in our Secondary A-Math tuition, we help students transition smoothly into abstract mathematical thinking.`,
      terms: [
        {
          name: "Learn Ahead",
          dates: "1 Dec – 21 Dec (3 weeks)",
          chapters: ["Chapter 1: Quadratic Functions"],
        },
        {
          name: "Term 1",
          dates: "5 Jan – 12 Apr (18 weeks)",
          chapters: [
            "Chapter 2: Equations and Inequalities",
            "Chapter 3: Surds",
            "Chapter 4: Polynomials, Cubic Equations and Partial Fractions",
            "WA1 Revision",
            "Chapter 5: Binomial Theorem and its Applications",
          ],
        },
        {
          name: "Term 2",
          dates: "13 Apr – 16 Aug (14 weeks)",
          chapters: [
            "Chapter 6: Exponential and Logarithmic Functions",
            "WA2 Revision",
            "Chapter 7: Coordinate Geometry",
            "Chapter 8: Linear Law",
            "Chapter 9: Trigonometric Functions and Graphs",
            "WA3 Revision",
          ],
        },
        {
          name: "Term 3",
          dates: "17 Aug – 22 Nov (14 weeks)",
          chapters: [
            "Chapter 10: Trigonometric Equations and Identities",
            "End of Year Revision",
          ],
        },
      ],
    },
    {
      level: "Secondary 4 Express A-Math",
      intro: `${g3Footnote}\n\nIn Secondary 4 A-Math, students apply their mathematical foundation to calculus and its wide-ranging applications. Our lessons are designed to strengthen analytical skills and provide ample exposure to exam-style questions. With consistent guidance and structured revision through our Sec 4 A-Math tuition classes, students are empowered to approach the O-Levels with assurance and precision.`,
      terms: [
        {
          name: "Learn Ahead",
          dates: "1 Dec – 21 Dec (3 weeks)",
          chapters: ["Chapter 1: Techniques of Differentiation"],
        },
        {
          name: "Term 1",
          dates: "5 Jan – 12 Apr (18 weeks)",
          chapters: [
            "Chapter 2: Applications of Differentiation (Increasing decreasing functions)",
            "Chapter 3: Applications of Differentiation (Equations of tangents and normals)",
            "Chapter 4: Applications of Differentiation (Rate of change)",
            "Chapter 5: Applications of Differentiation (Stationary points)",
            "Chapter 6: Applications of Differentiation (Maxima minima)",
          ],
        },
        {
          name: "Term 2",
          dates: "13 Apr – 16 Aug (14 weeks)",
          chapters: [
            "Chapter 7: Techniques of Integration",
            "Chapter 8: Applications of Integration (Area under curve)",
            "Chapter 9: Kinematics",
            "Chapter 10: Proofs in Plane Geometry",
          ],
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
      "Upper secondary A-Math is billed in 4-lesson blocks — materials included, with pro-rated options if you join mid-term. Take both E-Math and A-Math for a bundle rate.",
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
    body: "Know someone who could use a math confidence boost? Refer a friend to Knockout Math — when they sign up for our Secondary A-Math tuition classes, you get $200 cash, and they get the support they need to improve and thrive. Everybody wins. No referral limit, so keep the good vibes (and rewards) coming!",
  },
  successStories: {
    title: "Hear From Our Students",
    body: "At Knockout Math Bukit Timah, our Secondary A-Math Tuition classes have helped students achieve strong O-Level results with our unique KICK curriculum. Read our student success stories and see why Knockout Math is the top choice for Secondary O-Level E-Math and A-Math Tuition in Bukit Timah.",
    href: "/testimonials/",
  },
  enroll: {
    body: "A-Math classes are $340 per 4 lessons, or $620 when you take both E-Math and A-Math. Secure a spot in our Secondary 3 & 4 O-Level classes or book a free trial at our Bukit Timah centre.",
  },
};
