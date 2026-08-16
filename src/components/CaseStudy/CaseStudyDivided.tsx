import type { CaseStudySection } from "@/content/types";
import Kicker from "../UI/Kicker";
import Reveal from "../UI/Reveal";

type Props = {
  index: string;
  title: string;
  items: CaseStudySection[];
};

/** Divided bordered box of title/detail pairs — used for decisions, security & reliability. */
const CaseStudyDivided = ({ index, title, items }: Props) => {
  return (
    <Reveal className="border-t border-border py-14 md:py-16">
      <Kicker index={index}>{title}</Kicker>
      <h2 className="mt-3 text-2xl font-semibold text-text md:text-3xl">{title}</h2>

      <div className="mt-8 divide-y divide-border rounded-lg border border-border">
        {items.map((item) => (
          <div key={item.title} className="p-5 md:p-6">
            <p className="font-mono text-sm text-accent">{item.title}</p>
            <p className="mt-2 max-w-prose text-base leading-relaxed text-muted">
              {item.detail}
            </p>
          </div>
        ))}
      </div>
    </Reveal>
  );
};

export default CaseStudyDivided;
