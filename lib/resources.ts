export type SampleNote = {
  id: string;
  title: string;
  description?: string;
  /** Path under /public, e.g. /resources/sample-notes/sec3-algebra.pdf */
  fileUrl?: string;
};

export type SampleNoteCategory = {
  id: string;
  title: string;
  description: string;
  programmeHref: string;
  notes: SampleNote[];
};

export const resourcesIntro =
  "Explore curated teaching materials from Knockout Math — sample notes, topic summaries, and practice excerpts designed to show how our tutors build understanding step by step. Full class notes and worksheets are available to enrolled students.";

export const sampleNoteCategories: SampleNoteCategory[] = [
  {
    id: "lower-secondary",
    title: "Lower Secondary Math",
    description: "Foundation topics for Sec 1–2 G3 Math — algebra, geometry, and number patterns.",
    programmeHref: "/secondary-math-tuition/",
    notes: [
      {
        id: "prwc-secondary",
        title: "PRWC Sample Notes (Secondary)",
        description: "Sample class notes for Lower Secondary Math — see our structured approach to topics and worked examples.",
        fileUrl: "/resources/sample-notes/prwc-sample-notes-secondary.pdf",
      },
    ],
  },
  {
    id: "upper-secondary-e-math",
    title: "Upper Secondary E-Math",
    description: "O-Level E-Math samples covering core techniques, applications, and exam-style questions.",
    programmeHref: "/secondary-e-math-tuition-o-level/",
    notes: [],
  },
  {
    id: "upper-secondary-a-math",
    title: "Upper Secondary A-Math",
    description: "Additional Mathematics samples — functions, trigonometry, calculus, and more.",
    programmeHref: "/upper-secondary-a-math/",
    notes: [],
  },
  {
    id: "secondary-ip-math",
    title: "Secondary IP Math",
    description: "Integrated Programme samples aligned to advanced secondary sequencing.",
    programmeHref: "/secondary-ip-math-tuition/",
    notes: [],
  },
  {
    id: "jc-h2-math",
    title: "Junior College H2 Math",
    description: "H2 Math samples — vectors, complex numbers, statistics, and pure math topics.",
    programmeHref: "/junior-college-h2-math-tuition/",
    notes: [],
  },
];

/** True when at least one category has downloadable notes. */
export function hasSampleNotes() {
  return sampleNoteCategories.some((category) =>
    category.notes.some((note) => note.fileUrl),
  );
}
