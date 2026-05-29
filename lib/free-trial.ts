export type FreeTrialBenefit = {
  title: string;
  body: string;
};

export const freeTrialBenefits: FreeTrialBenefit[] = [
  {
    title: "1 Full Interactive Lesson",
    body: "Join our ongoing class for a complete, real experience of how we teach. Solve problems in real time, ask questions, and engage in discussions to enhance your learning.",
  },
  {
    title: "2 Lesson Materials",
    body: "Knockout Math takes pride in our curated lesson notes and practices. Having spent years in deep analysis of examination trends, our resources are well targeted for comprehensive and efficient learning.",
  },
  {
    title: "3 Actionable Insights",
    body: "After the trial, our math tutor will provide personalized feedback and clear tips on how you can perform well. Whether it's a problem-solving technique or tackling tricky questions, we will give you the tools to succeed.",
  },
];

export const freeTrialLevels = [
  "Primary (P5/P6)",
  "Lower Secondary (Sec 1–2)",
  "Secondary E-Math",
  "Secondary A-Math",
  "Secondary IP",
  "JC H1/H2 Math",
  "Others",
] as const;

export type FreeTrialLevel = (typeof freeTrialLevels)[number];
