import type { CaseStudySection } from "@/content/types";
import Kicker from "../UI/Kicker";
import Reveal from "../UI/Reveal";

type Props = {
  index: string;
  title: string;
  items: CaseStudySection[];
};

/** Left-accent list of title/detail pairs — used for challenges, failure scenarios, trade-offs. */
const CaseStudyList = ({ index, title, items }: Props) => {
  return (
    <Reveal className="border-t border-border py-14 md:py-16">
      <Kicker index={index}>{title}</Kicker>
      <h2 className="mt-3 text-2xl font-semibold text-text md:text-3xl">{title}</h2>

      <div className="mt-8 space-y-8">
        {items.map((item) => (
          <div key={item.title} className="border-l-2 border-accent/40 pl-5">
            <p className="text-lg font-medium text-text">{item.title}</p>
            <p className="mt-2 max-w-prose text-base leading-relaxed text-muted">
              {item.detail}
            </p>
          </div>
        ))}
      </div>
    </Reveal>
  );
};

export default CaseStudyList;
