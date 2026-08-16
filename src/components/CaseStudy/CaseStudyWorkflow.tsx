import Kicker from "../UI/Kicker";
import Reveal from "../UI/Reveal";

type Props = {
  index: string;
  title: string;
  steps: string[];
};

/** Numbered step-by-step workflow — shows the request/event lifecycle in order. */
const CaseStudyWorkflow = ({ index, title, steps }: Props) => {
  return (
    <Reveal className="border-t border-border py-14 md:py-16">
      <Kicker index={index}>{title}</Kicker>
      <h2 className="mt-3 text-2xl font-semibold text-text md:text-3xl">{title}</h2>

      <ol className="mt-8 space-y-4">
        {steps.map((step, i) => (
          <li key={step} className="flex items-start gap-4">
            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-surface font-mono text-xs text-accent">
              {i + 1}
            </span>
            <span className="text-base leading-relaxed text-muted">{step}</span>
          </li>
        ))}
      </ol>
    </Reveal>
  );
};

export default CaseStudyWorkflow;
