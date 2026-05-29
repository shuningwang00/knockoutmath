export type SeoLandingSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type SeoLandingPageContent = {
  slug: string;
  metadata: {
    title: string;
    description: string;
  };
  heroTitle: string;
  heroSubtitle?: string;
  sections: SeoLandingSection[];
};

const leadingMathCentreSections: SeoLandingSection[] = [
  {
    heading: "Knockout Math: Leading Math Tuition Centre in Bukit Timah for O Level, IP, and JC Students",
    paragraphs: [
      "In Singapore's growing education system, mathematics is an important subject that builds students' analytical, logical, and problem-solving skills. By mastering these techniques and skills, students have doors opened to acquire many career opportunities related to engineering, finance, and data science fields. To excel in maths in a professional way, a specialist math tuition centre is essential, which helps every student at each level of their learning journey to build a strong foundation with the subject and teaches the right strategies in scoring high in examinations.",
    ],
  },
  {
    heading: "Expert Math Tutors' Role in Singapore for Every Learning Level",
    bullets: [
      "In preparation for the PSLE exams, our subject experts prioritise structured approaches to tackle complex questions. We offer classes for Upper Primary students with emphasis on study techniques and exam strategies to beat the PSLE.",
      "Our best tutors in our Bukit Timah centre guide at every stage of learning for Secondary school students by offering both E Math Tuition and A Math Tuition, to ensure they understand the entire concept clearly without any confusion.",
      "For students who are interested in the Integrated Programme, our IP Math Tutors teach them with in-depth explanations by personalised support to make sure they follow the education curriculum.",
      "For Junior College level, our JC Math Tutors, H2 Math Tutors, and A Level Tutors assist students to grasp the advanced concepts for higher education success that many of them find difficult to learn by themselves.",
    ],
  },
  {
    heading: "Excellence in the PSLE",
    paragraphs: [
      "Our Primary Math tuition centre in Bukit Timah is designed to help young learners strengthen their foundation and develop essential problem-solving skills for school exams and beyond.",
    ],
    bullets: [
      "Our Upper Primary POWER Programme (P4–P6) provides a structured pathway that takes students from building strong foundations in P4, to sharpening problem-solving and higher-order thinking in P5, and finally to excelling under exam conditions in P6. With a clear progression at every stage, the programme equips students with the confidence, skills, and strategies needed to achieve excellence in school tests and the PSLE.",
      "Our lessons are aligned with the school term to help students keep up with the rigour of Primary Math, while including challenging word problems and exam-style questions, so they become familiar with the PSLE format. What makes us different is that the series of notes and practice is curated by our specialist tutors, to help students progressively build a strong understanding and gear up for tougher questions and topics.",
      "Our personalised and structured teaching approach helps students build confidence, sharpen their thinking skills, and master mathematical concepts step by step.",
    ],
  },
  {
    heading: "Comprehensive Secondary Math Tuition Programmes that Help Students",
    paragraphs: [
      "Our Secondary math tuition centre in Bukit Timah is designed to help and provide guidance for the students who are sincerely preparing for the O Levels and school tests.",
    ],
    bullets: [
      "Our O Level Math Tuition guides the students at each level by offering lessons that cover Lower Secondary G3 Math Tuition, Upper Secondary G3 A Math Tuition, and G3 E Math Tuition, to prepare them thoroughly.",
      "During our lessons, we conduct practice sessions regularly during term schedule to have students keep up with the rigour of Secondary math papers, O Level math papers, and Sec 4 math papers, which all help students get familiar with the exam atmosphere.",
      "Our personalised and structured teaching approach helps students build their confidence and master the concepts of the subject.",
    ],
  },
  {
    heading: "IP Math Tuition – Staying Ahead in a Demanding Curriculum",
    paragraphs: [
      "The Integrated Programme is ahead compared to the traditional approach, which is more advanced. At Knockout Math, our IP Math Tuition teaches students professionally to master the concepts while strongly supporting the school academics, too. With the help of our specialized tutors' guidance, they get advantages in many things, such as developing their confidence and skills in problem-solving, practical applications, and logical thinking.",
    ],
  },
  {
    heading: "JC and A Level Math Tuition for Academic Excellence",
    paragraphs: [
      "At the Junior College level of studies, mathematics becomes more difficult to digest with the heavy curriculum and requires deep understanding skills. With the help of our A Level Tutors and JC H2 Math Tuition, students develop skills that are crucial for mastering the advanced topics.",
    ],
    bullets: [
      "Our experienced and good track record H2 Math Tutors prepare students by simplifying the complex topics into a manageable and understandable way.",
      "Every Junior College Math Tutor in our centre helps students clearly understand the theoretical concepts, how to apply the formulas in real exams, and in the real-world context for relatability to future career paths.",
      "A Level Math Tuition prepares students with full confidence to face the competitive exams in Singapore to achieve success.",
    ],
  },
  {
    heading: "Focused Learning with Intensive Holiday Programmes",
    paragraphs: [
      "Our intensive holiday programmes and holiday crash courses are specially designed for the students who need to maximize their skills even during their school breaks and want to return to school very well prepared to face all the challenges. This programme helps students:",
    ],
    bullets: [
      "Revise thoroughly to strengthen key selected topics.",
      "Strengthen skillsets by highly targeting to improve their weak areas.",
      "Gain extra knowledge with the practice of structured worksheets and solving previous question papers, curated specifically for each holiday workshop by our tutors.",
    ],
  },
];

export const knockoutMathPage: SeoLandingPageContent = {
  slug: "/knockout-math/",
  metadata: {
    title: "Knockout Math | Leading Math Tuition Centre in Bukit Timah",
    description:
      "Knockout Math is a leading math tuition centre in Bukit Timah for O Level, IP, and JC students. Expert tutors for E-Math, A-Math, IP Math, and H2 Math.",
  },
  heroTitle: "Knockout Math: Leading Math Tuition Centre",
  sections: leadingMathCentreSections,
};

export const leadingMathTuitionCentrePage: SeoLandingPageContent = {
  slug: "/knockout-math-leading-math-tuition-centre/",
  metadata: {
    title: "Knockout Math: Leading Math Tuition Centre in Bukit Timah",
    description:
      "Leading math tuition centre in Bukit Timah for O Level, IP, and JC students. Structured programmes from Primary through JC with expert tutors.",
  },
  heroTitle: "Knockout Math: Leading Math Tuition Centre",
  sections: leadingMathCentreSections,
};

export const masterMathPage: SeoLandingPageContent = {
  slug: "/master-math-with-singapores-top-tutors/",
  metadata: {
    title: "Master Math with Singapore's Top Tutors | Knockout Math Bukit Timah",
    description:
      "Master Secondary O Level, IP, and JC H2 Math with Singapore's top tutors at Knockout Math Bukit Timah. E-Math, A-Math, IP, and A Level programmes.",
  },
  heroTitle: "Master Math with Singapore's Top Tutors",
  heroSubtitle:
    "Master Math with Singapore's Top Tutors in Bukit Timah for Secondary, IP, and JC Students",
  sections: [
    {
      heading: "Master Math with Singapore's Top Tutors in Bukit Timah for Secondary, IP, and JC Students",
      paragraphs: [
        "Mathematics is an important subject in Singapore's education landscape that helps students to improve analytical and critical thinking skills, and pursue careers like problem solving and advanced thinking. Whether you are a student who needs to master the Secondary O Level Maths, improve in IP Math, or learn advanced concepts in JC H2 Math, the right tuition guidance takes you to the achievement peak. At our Math Tuition Centre in Bukit Timah, we assure to offer students a strong foundation in the subject and to excel in exams.",
      ],
    },
    {
      heading: "Comprehensive Math Tuition Programmes for Every Level",
      bullets: [
        "Secondary Math Tuition: We cover both E Math Tuition and A Math Tuition. Our expert tutors help students to get detailed knowledge of the lessons by understanding all the concepts effectively. This also makes them masters in mathematical applications and scores top ranks in GCE O Level Math exams and common school tests.",
        "IP Math Tuition: Our experienced and professional IP Math Tutors offer students special guidance with comprehensive support in the Integrated Programme, ensuring they are always at the forefront of the updated concepts. This extends to the different school topical sequences.",
        "JC Math Tuition: To prepare students for JC H2 Math, we have our A Level Math Tuition, where our dedicated JC Math Tutors and A Level Tutors prepare every student to get excellent knowledge of advanced and higher-level mathematics.",
      ],
    },
    {
      heading: "Intensive Holiday Programmes for Maximum Progress",
      paragraphs: [
        "Our specialised holiday crash courses and Intensive Holiday Programmes are perfect for students who want to get ahead, achieve big and are ready to study hard even during their school break time. This helps them to catch up the concepts clearly, revise the topics fully, and initiate their detailed learning about the subject. It also triggers clear learning plus understanding the lessons in a structured way.",
      ],
    },
    {
      heading: "Practice Makes Perfect – Math Papers and Resources",
      paragraphs: [
        "Regular practice helps students get thorough in the concepts and feel confident for the exams. We curate our own specialised resources:",
      ],
      bullets: [
        "Secondary Math Practice Papers help in offering them exam management knowledge with concept understanding.",
        "O Level Math Practice Papers give an idea of how the questions are asked and improve their application skills.",
        "JC H2 Math Promo and A Level Math Papers boosts their confidence to face the exams despite the heavy JC content.",
      ],
    },
    {
      heading: "Experienced Math Tutors for Personalised Learning",
      paragraphs: [
        "Behind every student's high-level success, there will be a tutor's strong support to guide and assist them in the right way. Our special team of Top Math Tutors in Singapore is certified in teaching the subject with years of experience. It is not about finishing the syllabus early or doing the most practices. Our tutors aim to provide the best service in teaching the students in an active and exciting way to help them master the syllabus and achieve great results.",
        "Our Math Tutors in Bukit Timah will help develop students to be well-skilled. Junior College Math Tutors teach advanced topics, and H2 Math Tutors give them a clear understanding. Our tutor approaches in a way that takes students to academic success.",
      ],
    },
    {
      heading: "Why Choose Our Math Tuition Centre in Bukit Timah",
      paragraphs: [
        "We are the leading Math Tuition Centre in Bukit Timah, who have a strong reputation among many students and their parents as well.",
      ],
      bullets: [
        "We offer the best teaching solution, such as effective exam strategies, and improve all the important skills that are needed to excel in subject knowledge.",
        "We have a skilled and fun teaching team of Top Math Tutors with us, who are all very well-experienced with proven expertise.",
        "We follow a tailored teaching method by analysing each individual's learning capabilities on understanding, and offer supportive teaching.",
        "We provide a comfortable learning environment for students so that they can be independent, friendly, share their ideas, ask questions, and practice effectively.",
      ],
    },
  ],
};
