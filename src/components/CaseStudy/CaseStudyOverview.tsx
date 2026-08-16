import CaseStudyProse from "./CaseStudyProse";

const CaseStudyOverview = ({ overview }: { overview: string }) => (
  <CaseStudyProse index="01" title="Overview">
    <p>{overview}</p>
  </CaseStudyProse>
);

export default CaseStudyOverview;
