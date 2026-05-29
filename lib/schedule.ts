export type DayOfWeek = "mon" | "tue" | "wed" | "thu" | "fri" | "sat" | "sun";

export type ScheduleLevel = "p5" | "p6" | "sec1" | "sec2" | "sec3" | "sec4" | "jc1" | "jc2";

export type ScheduleSubject = "psle-math" | "g3-math" | "e-math" | "a-math" | "h2-math";

export type ClassStatus = "open" | "full";

export type ClassSlot = {
  id: string;
  label: string;
  shortLabel: string;
  level: ScheduleLevel;
  subject: ScheduleSubject;
  day: DayOfWeek;
  startMinutes: number;
  endMinutes: number;
  timeLabel: string;
  status: ClassStatus;
  programmeHref: string;
  description: string;
};

export type TimeBand = {
  id: string;
  label: string;
  startMinutes: number;
  endMinutes: number;
};

export type ProgrammeObjective = {
  id: string;
  title: string;
  objectives: string[];
  fees?: string[];
};

export type LevelFilter = "all" | ScheduleLevel;

export const SCHEDULE_LOCATION = {
  name: "Beauty World Centre",
  address: "144 Upper Bukit Timah Road, #03-38, Beauty World Centre, Singapore 588177",
  mapsHref: "https://maps.google.com/?q=Knockout+Math+Beauty+World+Centre",
};

export const DAY_ORDER: DayOfWeek[] = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

export const DAY_LABELS: Record<DayOfWeek, string> = {
  mon: "Mon",
  tue: "Tue",
  wed: "Wed",
  thu: "Thu",
  fri: "Fri",
  sat: "Sat",
  sun: "Sun",
};

export const LEVEL_FILTERS: { value: LevelFilter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "p5", label: "P5" },
  { value: "p6", label: "P6" },
  { value: "sec1", label: "Sec 1" },
  { value: "sec2", label: "Sec 2" },
  { value: "sec3", label: "Sec 3" },
  { value: "sec4", label: "Sec 4" },
  { value: "jc1", label: "JC 1" },
  { value: "jc2", label: "JC 2" },
];

export const TIME_BANDS: TimeBand[] = [
  { id: "morning-1", label: "9:00 – 10:45am", startMinutes: 540, endMinutes: 645 },
  { id: "morning-2", label: "10:45 – 12:30pm", startMinutes: 645, endMinutes: 750 },
  { id: "afternoon-1", label: "12:30 – 2:15pm", startMinutes: 750, endMinutes: 855 },
  { id: "afternoon-2", label: "2:15 – 4:00pm", startMinutes: 855, endMinutes: 960 },
  { id: "late-afternoon", label: "4:00 – 5:45pm", startMinutes: 960, endMinutes: 1065 },
  { id: "evening-1", label: "4:30 – 6:15pm", startMinutes: 990, endMinutes: 1095 },
  { id: "evening-2", label: "6:15 – 8:00pm", startMinutes: 1095, endMinutes: 1200 },
];

export const classSlots: ClassSlot[] = [
  {
    id: "sec1-mon-evening",
    label: "Sec 1 G3 Math",
    shortLabel: "S1 G3",
    level: "sec1",
    subject: "g3-math",
    day: "mon",
    startMinutes: 990,
    endMinutes: 1095,
    timeLabel: "4:30 – 6:15pm",
    status: "open",
    programmeHref: "/secondary-math-tuition/",
    description: "Build strong foundations in algebra, geometry, and number patterns for upper secondary success.",
  },
  {
    id: "sec1-sat-late-morning",
    label: "Sec 1 G3 Math",
    shortLabel: "S1 G3",
    level: "sec1",
    subject: "g3-math",
    day: "sat",
    startMinutes: 645,
    endMinutes: 750,
    timeLabel: "10:45 – 12:30pm",
    status: "open",
    programmeHref: "/secondary-math-tuition/",
    description: "Build strong foundations in algebra, geometry, and number patterns for upper secondary success.",
  },
  {
    id: "sec1-sun-morning",
    label: "Sec 1 G3 Math",
    shortLabel: "S1 G3",
    level: "sec1",
    subject: "g3-math",
    day: "sun",
    startMinutes: 540,
    endMinutes: 645,
    timeLabel: "9:00 – 10:45am",
    status: "open",
    programmeHref: "/secondary-math-tuition/",
    description: "Build strong foundations in algebra, geometry, and number patterns for upper secondary success.",
  },
  {
    id: "sec2-mon-late-evening",
    label: "Sec 2 G3 Math",
    shortLabel: "S2 G3",
    level: "sec2",
    subject: "g3-math",
    day: "mon",
    startMinutes: 1095,
    endMinutes: 1200,
    timeLabel: "6:15 – 8:00pm",
    status: "open",
    programmeHref: "/secondary-math-tuition/",
    description: "Deepen algebraic and geometric understanding with interactive lessons and problem-solving practice.",
  },
  {
    id: "sec2-tue-late-evening",
    label: "Sec 2 G3 Math",
    shortLabel: "S2 G3",
    level: "sec2",
    subject: "g3-math",
    day: "tue",
    startMinutes: 1095,
    endMinutes: 1200,
    timeLabel: "6:15 – 8:00pm",
    status: "full",
    programmeHref: "/secondary-math-tuition/",
    description: "Deepen algebraic and geometric understanding with interactive lessons and problem-solving practice.",
  },
  {
    id: "sec2-sat-morning",
    label: "Sec 2 G3 Math",
    shortLabel: "S2 G3",
    level: "sec2",
    subject: "g3-math",
    day: "sat",
    startMinutes: 540,
    endMinutes: 645,
    timeLabel: "9:00 – 10:45am",
    status: "open",
    programmeHref: "/secondary-math-tuition/",
    description: "Deepen algebraic and geometric understanding with interactive lessons and problem-solving practice.",
  },
  {
    id: "sec2-sun-late-morning",
    label: "Sec 2 G3 Math",
    shortLabel: "S2 G3",
    level: "sec2",
    subject: "g3-math",
    day: "sun",
    startMinutes: 645,
    endMinutes: 750,
    timeLabel: "10:45 – 12:30pm",
    status: "open",
    programmeHref: "/secondary-math-tuition/",
    description: "Deepen algebraic and geometric understanding with interactive lessons and problem-solving practice.",
  },
  {
    id: "sec3-emath-sat-late-morning",
    label: "Sec 3 E-Math",
    shortLabel: "S3 E",
    level: "sec3",
    subject: "e-math",
    day: "sat",
    startMinutes: 645,
    endMinutes: 750,
    timeLabel: "10:45 – 12:30pm",
    status: "open",
    programmeHref: "/secondary-e-math-tuition-o-level/",
    description: "Topical mastery and PRWC-focused practice to sharpen accuracy and build exam confidence.",
  },
  {
    id: "sec3-emath-sun-afternoon",
    label: "Sec 3 E-Math",
    shortLabel: "S3 E",
    level: "sec3",
    subject: "e-math",
    day: "sun",
    startMinutes: 750,
    endMinutes: 855,
    timeLabel: "12:30 – 2:15pm",
    status: "open",
    programmeHref: "/secondary-e-math-tuition-o-level/",
    description: "Topical mastery and PRWC-focused practice to sharpen accuracy and build exam confidence.",
  },
  {
    id: "sec3-amath-wed-evening",
    label: "Sec 3 A-Math",
    shortLabel: "S3 A",
    level: "sec3",
    subject: "a-math",
    day: "wed",
    startMinutes: 990,
    endMinutes: 1095,
    timeLabel: "4:30 – 6:15pm",
    status: "full",
    programmeHref: "/upper-secondary-a-math/",
    description: "Develop analytical techniques for higher-order questions and application-style problems.",
  },
  {
    id: "sec3-amath-thu-evening",
    label: "Sec 3 A-Math",
    shortLabel: "S3 A",
    level: "sec3",
    subject: "a-math",
    day: "thu",
    startMinutes: 990,
    endMinutes: 1095,
    timeLabel: "4:30 – 6:15pm",
    status: "open",
    programmeHref: "/upper-secondary-a-math/",
    description: "Develop analytical techniques for higher-order questions and application-style problems.",
  },
  {
    id: "sec3-amath-sat-morning",
    label: "Sec 3 A-Math",
    shortLabel: "S3 A",
    level: "sec3",
    subject: "a-math",
    day: "sat",
    startMinutes: 540,
    endMinutes: 645,
    timeLabel: "9:00 – 10:45am",
    status: "open",
    programmeHref: "/upper-secondary-a-math/",
    description: "Develop analytical techniques for higher-order questions and application-style problems.",
  },
  {
    id: "sec3-amath-sun-late-afternoon",
    label: "Sec 3 A-Math",
    shortLabel: "S3 A",
    level: "sec3",
    subject: "a-math",
    day: "sun",
    startMinutes: 855,
    endMinutes: 960,
    timeLabel: "2:15 – 4:00pm",
    status: "open",
    programmeHref: "/upper-secondary-a-math/",
    description: "Develop analytical techniques for higher-order questions and application-style problems.",
  },
  {
    id: "sec4-emath-wed-late-evening",
    label: "Sec 4 E-Math",
    shortLabel: "S4 E",
    level: "sec4",
    subject: "e-math",
    day: "wed",
    startMinutes: 1095,
    endMinutes: 1200,
    timeLabel: "6:15 – 8:00pm",
    status: "full",
    programmeHref: "/secondary-e-math-tuition-o-level/",
    description: "Exam-focused revision, mock papers, and timed practice for O-Level readiness.",
  },
  {
    id: "sec4-emath-sun-afternoon",
    label: "Sec 4 E-Math",
    shortLabel: "S4 E",
    level: "sec4",
    subject: "e-math",
    day: "sun",
    startMinutes: 750,
    endMinutes: 855,
    timeLabel: "12:30 – 2:15pm",
    status: "open",
    programmeHref: "/secondary-e-math-tuition-o-level/",
    description: "Exam-focused revision, mock papers, and timed practice for O-Level readiness.",
  },
  {
    id: "sec4-amath-tue-evening",
    label: "Sec 4 A-Math",
    shortLabel: "S4 A",
    level: "sec4",
    subject: "a-math",
    day: "tue",
    startMinutes: 990,
    endMinutes: 1095,
    timeLabel: "4:30 – 6:15pm",
    status: "open",
    programmeHref: "/upper-secondary-a-math/",
    description: "Advanced techniques and PRWC mastery to maximise performance under exam conditions.",
  },
  {
    id: "sec4-amath-sat-afternoon",
    label: "Sec 4 A-Math",
    shortLabel: "S4 A",
    level: "sec4",
    subject: "a-math",
    day: "sat",
    startMinutes: 750,
    endMinutes: 855,
    timeLabel: "12:30 – 2:15pm",
    status: "open",
    programmeHref: "/upper-secondary-a-math/",
    description: "Advanced techniques and PRWC mastery to maximise performance under exam conditions.",
  },
  {
    id: "sec4-amath-sun-late-afternoon",
    label: "Sec 4 A-Math",
    shortLabel: "S4 A",
    level: "sec4",
    subject: "a-math",
    day: "sun",
    startMinutes: 855,
    endMinutes: 960,
    timeLabel: "2:15 – 4:00pm",
    status: "open",
    programmeHref: "/upper-secondary-a-math/",
    description: "Advanced techniques and PRWC mastery to maximise performance under exam conditions.",
  },
  {
    id: "jc1-mon-evening",
    label: "JC 1 H2 Math",
    shortLabel: "JC 1",
    level: "jc1",
    subject: "h2-math",
    day: "mon",
    startMinutes: 990,
    endMinutes: 1095,
    timeLabel: "4:30 – 6:15pm",
    status: "full",
    programmeHref: "/junior-college-h2-math-tuition/",
    description: "Build deep conceptual understanding to confidently handle the rigour of H2 Math.",
  },
  {
    id: "jc1-tue-late-evening",
    label: "JC 1 H2 Math",
    shortLabel: "JC 1",
    level: "jc1",
    subject: "h2-math",
    day: "tue",
    startMinutes: 1095,
    endMinutes: 1200,
    timeLabel: "6:15 – 8:00pm",
    status: "open",
    programmeHref: "/junior-college-h2-math-tuition/",
    description: "Build deep conceptual understanding to confidently handle the rigour of H2 Math.",
  },
  {
    id: "jc1-sat-afternoon",
    label: "JC 1 H2 Math",
    shortLabel: "JC 1",
    level: "jc1",
    subject: "h2-math",
    day: "sat",
    startMinutes: 750,
    endMinutes: 855,
    timeLabel: "12:30 – 2:15pm",
    status: "open",
    programmeHref: "/junior-college-h2-math-tuition/",
    description: "Build deep conceptual understanding to confidently handle the rigour of H2 Math.",
  },
  {
    id: "jc2-mon-late-evening",
    label: "JC 2 H2 Math",
    shortLabel: "JC 2",
    level: "jc2",
    subject: "h2-math",
    day: "mon",
    startMinutes: 1095,
    endMinutes: 1200,
    timeLabel: "6:15 – 8:00pm",
    status: "full",
    programmeHref: "/junior-college-h2-math-tuition/",
    description: "Master proven A-Level strategies and tackle complex, cross-topic H2 Math problems with precision.",
  },
  {
    id: "jc2-thu-late-evening",
    label: "JC 2 H2 Math",
    shortLabel: "JC 2",
    level: "jc2",
    subject: "h2-math",
    day: "thu",
    startMinutes: 1095,
    endMinutes: 1200,
    timeLabel: "6:15 – 8:00pm",
    status: "open",
    programmeHref: "/junior-college-h2-math-tuition/",
    description: "Master proven A-Level strategies and tackle complex, cross-topic H2 Math problems with precision.",
  },
  {
    id: "jc2-sat-late-afternoon",
    label: "JC 2 H2 Math",
    shortLabel: "JC 2",
    level: "jc2",
    subject: "h2-math",
    day: "sat",
    startMinutes: 855,
    endMinutes: 960,
    timeLabel: "2:15 – 4:00pm",
    status: "full",
    programmeHref: "/junior-college-h2-math-tuition/",
    description: "Master proven A-Level strategies and tackle complex, cross-topic H2 Math problems with precision.",
  },
  {
    id: "p5-fri-late-evening",
    label: "P5 Math",
    shortLabel: "P5",
    level: "p5",
    subject: "psle-math",
    day: "fri",
    startMinutes: 1095,
    endMinutes: 1200,
    timeLabel: "6:15 – 8:00pm",
    status: "full",
    programmeHref: "/contact-us/",
    description: "Heuristics-first PSLE prep with structured approaches to unfamiliar questions and timed exam practice.",
  },
  {
    id: "p5-sat-late-afternoon",
    label: "P5 Math",
    shortLabel: "P5",
    level: "p5",
    subject: "psle-math",
    day: "sat",
    startMinutes: 960,
    endMinutes: 1065,
    timeLabel: "4:00 – 5:45pm",
    status: "open",
    programmeHref: "/contact-us/",
    description: "Heuristics-first PSLE prep with structured approaches to unfamiliar questions and timed exam practice.",
  },
  {
    id: "p5-sun-morning",
    label: "P5 Math",
    shortLabel: "P5",
    level: "p5",
    subject: "psle-math",
    day: "sun",
    startMinutes: 540,
    endMinutes: 645,
    timeLabel: "9:00 – 10:45am",
    status: "open",
    programmeHref: "/contact-us/",
    description: "Heuristics-first PSLE prep with structured approaches to unfamiliar questions and timed exam practice.",
  },
  {
    id: "p6-fri-evening",
    label: "P6 Math",
    shortLabel: "P6",
    level: "p6",
    subject: "psle-math",
    day: "fri",
    startMinutes: 990,
    endMinutes: 1095,
    timeLabel: "4:30 – 6:15pm",
    status: "full",
    programmeHref: "/contact-us/",
    description: "Skill-focused PSLE preparation designed to build confidence and independent problem-solving under exam conditions.",
  },
  {
    id: "p6-sat-late-afternoon",
    label: "P6 Math",
    shortLabel: "P6",
    level: "p6",
    subject: "psle-math",
    day: "sat",
    startMinutes: 855,
    endMinutes: 960,
    timeLabel: "2:15 – 4:00pm",
    status: "open",
    programmeHref: "/contact-us/",
    description: "Skill-focused PSLE preparation designed to build confidence and independent problem-solving under exam conditions.",
  },
  {
    id: "p6-sun-late-morning",
    label: "P6 Math",
    shortLabel: "P6",
    level: "p6",
    subject: "psle-math",
    day: "sun",
    startMinutes: 645,
    endMinutes: 750,
    timeLabel: "10:45 – 12:30pm",
    status: "open",
    programmeHref: "/contact-us/",
    description: "Skill-focused PSLE preparation designed to build confidence and independent problem-solving under exam conditions.",
  },
];

export const programmeObjectives: ProgrammeObjective[] = [
  {
    id: "lower-secondary",
    title: "Sec 1 & 2 G3 Math Mastery Programme",
    objectives: [
      "Strong Foundations: Build core concepts essential for upper secondary success with clear step-by-step understanding.",
      "Critical Thinking: Develop problem-solving skills alongside content learning.",
      "Interactive Lessons: Engaging teaching style to build confidence and clarity. Students learn from each other's varied perspectives.",
    ],
  },
  {
    id: "sec3-prep",
    title: "Sec 3 G3 E & A Math O Level Prep Programme",
    objectives: [
      "Topical Mastery: Targeted practice to sharpen accuracy and build speed and proficiency.",
      "Analytical Thinking: Develop techniques to break down higher-order questions.",
      "PRWC Focus: Build confidence in tackling Problems in Real-World Context and bridge content mastery to application-heavy problem solving.",
    ],
  },
  {
    id: "sec4-prep",
    title: "Sec 4 G3 E & A Math O Level Prep Programme",
    objectives: [
      "Exam-Focused Curriculum: Intensive revision and full mock paper training. Refine accuracy under timed O-Level conditions.",
      "Advanced Techniques: Master answering strategies for high-weightage questions.",
      "PRWC Mastery: Confidently handle real-world context problems with structured approaches.",
      "Exam Readiness: Proven strategies to maximise performance and avoid common pitfalls.",
    ],
  },
  {
    id: "jc-h2",
    title: "JC 1 & 2 H2 Math A Level Prep Programme",
    objectives: [
      "Strong Foundation: Build deep conceptual understanding to confidently handle the rigour of H2 Math.",
      "Smart Learning: Connect concepts to real-world contexts for clearer, more intuitive understanding.",
      "Flexible Thinking: Develop the ability to tackle complex, cross-topic problems with precision.",
      "Exam Ready: Master proven strategies to maximise performance in A-Level exams.",
    ],
    fees: [
      "$400 for 4 classes (pro-rated)",
      "Registration fee: $40",
      "Material fees included",
    ],
  },
  {
    id: "primary-psle",
    title: "P5 & P6 Math PSLE Prep Programme",
    objectives: [
      "Heuristics First: Focus on problem-solving skills beyond what schools already cover in content.",
      "Critical Thinking: Develop strong reasoning and structured approaches to unfamiliar questions.",
      "Confidence Building: Skill-focused lessons designed to help students tackle questions independently.",
      "Exam Ready: Proven study methods and strategies to perform under timed exam conditions.",
    ],
    fees: [
      "$280 for 4 classes (pro-rated)",
      "Registration fee: $40",
      "Material fees included",
    ],
  },
];

export function filterSlots(slots: ClassSlot[], level: LevelFilter, weekendsOnly: boolean) {
  return slots.filter((slot) => {
    if (level !== "all" && slot.level !== level) return false;
    if (weekendsOnly && slot.day !== "sat" && slot.day !== "sun") return false;
    return true;
  });
}

export function countOpenSlots(slots: ClassSlot[]) {
  return slots.filter((slot) => slot.status === "open").length;
}

export function slotsForCell(slots: ClassSlot[], day: DayOfWeek, band: TimeBand) {
  return slots.filter(
    (slot) =>
      slot.day === day &&
      slot.startMinutes === band.startMinutes &&
      slot.endMinutes === band.endMinutes,
  );
}

export function slotsByDay(slots: ClassSlot[]) {
  const grouped = new Map<DayOfWeek, ClassSlot[]>();

  for (const day of DAY_ORDER) {
    grouped.set(day, []);
  }

  for (const slot of slots) {
    grouped.get(slot.day)?.push(slot);
  }

  for (const day of DAY_ORDER) {
    grouped.get(day)?.sort((a, b) => a.startMinutes - b.startMinutes);
  }

  return grouped;
}
