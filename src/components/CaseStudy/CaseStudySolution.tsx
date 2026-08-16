import CaseStudyProse from "./CaseStudyProse";

type Props = { solution: string; index?: string };

const CaseStudySolution = ({ solution, index = "04" }: Props) => (
  <CaseStudyProse index={index} title="The Solution">
    <p>{solution}</p>
  </CaseStudyProse>
);

export default CaseStudySolution;
