import Kicker from "../UI/Kicker";
import Reveal from "../UI/Reveal";

const CaseStudyImprove = ({ improvements }: { improvements: string[] }) => {
  return (
    <Reveal className="border-t border-border py-14 md:py-16">
      <Kicker index="09">What I'd Improve</Kicker>
      <h2 className="mt-3 text-2xl font-semibold text-text md:text-3xl">
        What I&apos;d Improve
      </h2>
      <ul className="mt-8 max-w-prose space-y-3">
        {improvements.map((item) => (
          <li key={item} className="flex gap-3 text-base leading-relaxed text-muted">
            <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-faint" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </Reveal>
  );
};

export default CaseStudyImprove;
