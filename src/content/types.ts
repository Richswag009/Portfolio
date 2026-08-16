export type CaseStudySection = {
  title: string;
  detail: string;
};

export type CaseStudy = {
  slug: string;
  name: string;
  tagline: string;
  badge: string;
  role: string;
  dates: string;
  image: string;
  imageAlt: string;
  liveLink?: string;
  liveLabel?: string;
  demoLink?: string;
  githubLink?: string;
  tech: string[];
  overview: string;
  problem: string;
  myRole: string[];
  solution: string;
  architecture: CaseStudySection[];
  diagram: string[][];
  challenges: CaseStudySection[];
  decisions: CaseStudySection[];
  results: string[];
  improvements: string[];
  gallery?: { src: string; alt: string }[];
};

export type OtherProject = {
  name: string;
  image: string;
  about: string;
  builtWith: string[];
  link?: string;
  liveLink?: string;
  liveLabel?: string;
  demoLink?: string;
  badge?: string;
};

export type ExperienceRole = {
  company: string;
  title: string;
  dates: string;
  bullets: string[];
  tech: string[];
};

export type SkillGroup = {
  category: string;
  items: string[];
};
