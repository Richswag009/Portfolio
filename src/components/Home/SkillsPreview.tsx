import Link from "next/link";
import { skills } from "@/content";
import Kicker from "../UI/Kicker";
import Reveal from "../UI/Reveal";

const SkillsPreview = () => {
  const flatSkills = skills.flatMap((group) => group.items);

  return (
    <Reveal>
      <Kicker>Toolkit</Kicker>
      <h2 className="mt-3 text-3xl font-semibold text-text md:text-4xl">
        What I build with
      </h2>
      <ul className="mt-8 flex flex-wrap gap-2.5">
        {flatSkills.map((skill) => (
          <li
            key={skill}
            className="rounded-full border border-border bg-surface px-3.5 py-1.5 font-mono text-xs text-muted"
          >
            {skill}
          </li>
        ))}
      </ul>
      <Link
        href="/about"
        className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-muted duration-200 hover:text-accent"
      >
        More about my background <span aria-hidden>→</span>
      </Link>
    </Reveal>
  );
};

export default SkillsPreview;
