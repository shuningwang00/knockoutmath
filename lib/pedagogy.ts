export type PedagogyStep = {
  step: number;
  word: string;
  accentLetter: string;
  subtitle: string;
  body: string;
  align: "left" | "right";
};

export const pedagogySteps: PedagogyStep[] = [
  {
    step: 1,
    word: "KNOWLEDGE",
    accentLetter: "K",
    subtitle: "Precision-crafted learning materials",
    body: "Our group of experts have dissected past-year papers, school questions, and exam trends so you get exactly what matters. No endless drilling, no outdated stuff—just smart, targeted practice to help you ace your exams. You're welcome. 😉📚",
    align: "left",
  },
  {
    step: 2,
    word: "INTERPRET",
    accentLetter: "I",
    subtitle: "Strategic analytical skills",
    body: "Our lessons push students to think fast and tackle tough questions with confidence—just like they'll need to in the real exam. No fluff, no shortcuts—just solid skills, sharp thinking, and the ability to handle all challenges.",
    align: "right",
  },
  {
    step: 3,
    word: "COACH",
    accentLetter: "C",
    subtitle: "Dynamic, engaging tutors",
    body: "Old-school methods? We left those in the past. Our tutors bring fresh energy, the latest teaching hacks, and a deep understanding of today's syllabus. They keep lessons engaging, relevant, and—dare we say—fun.",
    align: "left",
  },
  {
    step: 4,
    word: "KNOCKOUT",
    accentLetter: "K",
    subtitle: "Tech-powered learning",
    body: "We teach students how to use AI tools like ChatGPT the right way—no, not to copy answers, but to ask better questions, clarify doubts, and supercharge their learning. Class time is for mastering concepts, and AI is their 24/7 study buddy. Work smarter, not harder!",
    align: "right",
  },
];
