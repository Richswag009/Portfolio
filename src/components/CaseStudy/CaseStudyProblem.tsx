import CaseStudyProse from "./CaseStudyProse";

type Props = { problem: string; index?: string };

const CaseStudyProblem = ({ problem, index = "02" }: Props) => (
  <CaseStudyProse index={index} title="The Problem">
    <p>{problem}</p>
  </CaseStudyProse>
);

export default CaseStudyProblem;
