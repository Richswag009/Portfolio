import CaseStudyProse from "./CaseStudyProse";

type Props = { overview: string; index?: string };

const CaseStudyOverview = ({ overview, index = "01" }: Props) => (
  <CaseStudyProse index={index} title="Overview">
    <p>{overview}</p>
  </CaseStudyProse>
);

export default CaseStudyOverview;
