export type ProgrammeTerm = {
  name: string;
  dates: string;
  chapters: string[];
};

export type ProgrammeSyllabus = {
  level: string;
  intro: string;
  terms: ProgrammeTerm[];
};

export type ProgrammeFeatureGroup = {
  title: string;
  points: string[];
};

export type ProgrammePageContent = {
  slug: string;
  metadata: {
    title: string;
    description: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    intro: string;
    image: string;
    imageAlt: string;
  };
  foundation: {
    titleLines: string[];
    intro: string;
    nav: {
      label: string;
      href: string;
      icon: "star" | "bookmark";
    }[];
  };
  highlights: {
    title: string;
    moeTitle: string;
    moeBody: string;
    featuresTitle: string;
    features: ProgrammeFeatureGroup[];
  };
  syllabi: ProgrammeSyllabus[];
  fees: {
    amount: string;
    unit: string;
    notes: string[];
  };
  referral: {
    title: string;
    body: string;
  };
  successStories: {
    title: string;
    body: string;
    href: string;
  };
};
