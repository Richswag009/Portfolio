import type { ExperienceRole } from "@/content/types";
import Reveal from "../UI/Reveal";

const ExperienceItem = ({ role, delay = 0 }: { role: ExperienceRole; delay?: number }) => {
  return (
    <Reveal
      delay={delay}
      className="relative border-l border-border pb-14 pl-8 last:pb-0"
    >
      <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent" />

      <p className="font-mono text-xs uppercase tracking-wider text-faint">
        {role.dates}
      </p>
      <h3 className="mt-2 text-xl font-semibold text-text">{role.title}</h3>
      <p className="mt-1 text-sm text-accent">{role.company}</p>

      <ul className="mt-4 space-y-2.5">
        {role.bullets.map((bullet) => (
          <li key={bullet} className="flex gap-3 text-sm leading-relaxed text-muted">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-faint" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>

      <ul className="mt-4 flex flex-wrap gap-2">
        {role.tech.map((tech) => (
          <li
            key={tech}
            className="rounded-full bg-surface px-2.5 py-1 font-mono text-[11px] text-muted"
          >
            {tech}
          </li>
        ))}
      </ul>
    </Reveal>
  );
};

export default ExperienceItem;
