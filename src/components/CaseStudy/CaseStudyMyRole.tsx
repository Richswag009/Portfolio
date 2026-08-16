import CaseStudyProse from "./CaseStudyProse";

const CaseStudyMyRole = ({ myRole }: { myRole: string[] }) => (
  <CaseStudyProse index="03" title="My Role">
    <ul className="space-y-3">
      {myRole.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </CaseStudyProse>
);

export default CaseStudyMyRole;
