import CaseStudyProse from "./CaseStudyProse";

type Props = { myRole: string[]; index?: string };

const CaseStudyMyRole = ({ myRole, index = "03" }: Props) => (
  <CaseStudyProse index={index} title="My Role">
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
