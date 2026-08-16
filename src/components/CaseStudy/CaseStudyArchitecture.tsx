import type { CaseStudySection } from "@/content/types";
import Kicker from "../UI/Kicker";
import Reveal from "../UI/Reveal";
import FlowDiagram from "./diagrams/FlowDiagram";

type Props = {
  architecture: CaseStudySection[];
  diagram: string[][];
};

const CaseStudyArchitecture = ({ architecture, diagram }: Props) => {
  return (
    <Reveal className="border-t border-border py-14 md:py-16">
      <Kicker index="05">Technical Architecture</Kicker>
      <h2 className="mt-3 text-2xl font-semibold text-text md:text-3xl">
        Technical Architecture
      </h2>

      <div className="mt-8 overflow-x-auto">
        <div className="min-w-[640px]">
          <FlowDiagram stages={diagram} />
        </div>
      </div>

      <dl className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {architecture.map((item) => (
          <div key={item.title} className="rounded-lg border border-border bg-surface p-5">
            <dt className="font-mono text-sm font-medium text-accent">{item.title}</dt>
            <dd className="mt-2 text-sm leading-relaxed text-muted">{item.detail}</dd>
          </div>
        ))}
      </dl>
    </Reveal>
  );
};

export default CaseStudyArchitecture;
