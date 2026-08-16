import CaseStudyProse from "./CaseStudyProse";

const CaseStudyProblem = ({ problem }: { problem: string }) => (
  <CaseStudyProse index="02" title="The Problem">
    <p>{problem}</p>
  </CaseStudyProse>
);

export default CaseStudyProblem;
