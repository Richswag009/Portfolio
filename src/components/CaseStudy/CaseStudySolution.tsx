import CaseStudyProse from "./CaseStudyProse";

const CaseStudySolution = ({ solution }: { solution: string }) => (
  <CaseStudyProse index="04" title="The Solution">
    <p>{solution}</p>
  </CaseStudyProse>
);

export default CaseStudySolution;
