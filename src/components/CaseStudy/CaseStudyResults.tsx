import Kicker from "../UI/Kicker";
import Reveal from "../UI/Reveal";

const isQuantified = (result: string) => /^\d/.test(result);

type Props = { results: string[]; index?: string };

const CaseStudyResults = ({ results, index = "08" }: Props) => {
  return (
    <Reveal className="border-t border-border py-14 md:py-16">
      <Kicker index={index}>Results</Kicker>
      <h2 className="mt-3 text-2xl font-semibold text-text md:text-3xl">Results</h2>

      <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {results.map((result) => (
          <li
            key={result}
            className="rounded-lg border border-border bg-surface p-5 text-sm leading-relaxed text-text"
          >
            {isQuantified(result) ? (
              <span className="mb-1 block font-mono text-2xl font-semibold text-accent">
                {result.match(/^[\d.]+%?\+?/)?.[0]}
              </span>
            ) : (
              <span className="mb-1 block h-1 w-6 rounded-full bg-accent" />
            )}
            {isQuantified(result)
              ? result.replace(/^[\d.]+%?\+?\s*/, "")
              : result}
          </li>
        ))}
      </ul>
    </Reveal>
  );
};

export default CaseStudyResults;
