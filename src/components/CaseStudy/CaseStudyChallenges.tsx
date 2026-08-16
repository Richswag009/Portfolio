import type { CaseStudySection } from "@/content/types";
import Kicker from "../UI/Kicker";
import Reveal from "../UI/Reveal";

const CaseStudyChallenges = ({ challenges }: { challenges: CaseStudySection[] }) => {
  return (
    <Reveal className="border-t border-border py-14 md:py-16">
      <Kicker index="06">Engineering Challenges</Kicker>
      <h2 className="mt-3 text-2xl font-semibold text-text md:text-3xl">
        Engineering Challenges
      </h2>

      <div className="mt-8 space-y-8">
        {challenges.map((item) => (
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

export default CaseStudyChallenges;
