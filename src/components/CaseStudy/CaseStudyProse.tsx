import Kicker from "../UI/Kicker";
import Reveal from "../UI/Reveal";

type Props = {
  index: string;
  title: string;
  children: React.ReactNode;
};

/** Shared numbered-section shell used by the simpler prose case-study sections. */
const CaseStudyProse = ({ index, title, children }: Props) => {
  return (
    <Reveal className="border-t border-border py-14 md:py-16">
      <Kicker index={index}>{title}</Kicker>
      <h2 className="mt-3 text-2xl font-semibold text-text md:text-3xl">{title}</h2>
      <div className="mt-6 max-w-prose text-base leading-relaxed text-muted md:text-lg">
        {children}
      </div>
    </Reveal>
  );
};

export default CaseStudyProse;
