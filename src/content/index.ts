import { outboundiq } from "./projects/outboundiq";
import { edoSpecialistHospital } from "./projects/edo-specialist-hospital";
import { quantCore } from "./projects/quant-core";
import { hookrelay } from "./projects/hookrelay";
import type { CaseStudy } from "./types";

export const caseStudies: CaseStudy[] = [
  outboundiq,
  edoSpecialistHospital,
  quantCore,
  hookrelay,
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((project) => project.slug === slug);
}

export { otherProjects } from "./projects/other-projects";
export { experience } from "./experience";
export { skills } from "./skills";
export { site } from "./site";
export * from "./types";
