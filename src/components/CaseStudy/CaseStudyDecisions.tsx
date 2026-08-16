import type { CaseStudySection } from "@/content/types";
import Kicker from "../UI/Kicker";
import Reveal from "../UI/Reveal";

const CaseStudyDecisions = ({ decisions }: { decisions: CaseStudySection[] }) => {
  return (
    <Reveal className="border-t border-border py-14 md:py-16">
      <Kicker index="07">Key Decisions</Kicker>
      <h2 className="mt-3 text-2xl font-semibold text-text md:text-3xl">Key Decisions</h2>

      <div className="mt-8 divide-y divide-border rounded-lg border border-border">
        {decisions.map((item) => (
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

export default CaseStudyDecisions;
