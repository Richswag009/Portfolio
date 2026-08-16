import type { SkillGroup as SkillGroupType } from "@/content/types";
import Reveal from "../UI/Reveal";

const SkillGroup = ({ group, delay = 0 }: { group: SkillGroupType; delay?: number }) => {
  return (
    <Reveal delay={delay}>
      <p className="font-mono text-xs uppercase tracking-wider text-faint">
        {group.category}
      </p>
      <ul className="mt-3 flex flex-wrap gap-2">
        {group.items.map((item) => (
          <li
            key={item}
            className="rounded-full border border-border bg-surface px-3 py-1.5 text-sm text-text"
          >
            {item}
          </li>
        ))}
      </ul>
    </Reveal>
  );
};

export default SkillGroup;
