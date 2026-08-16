import Link from "next/link";
import { caseStudies } from "@/content";
import FeaturedCaseStudyCard from "../Work/FeaturedCaseStudyCard";
import Kicker from "../UI/Kicker";
import Reveal from "../UI/Reveal";

const FeaturedWork = () => {
  return (
    <div>
      <Reveal className="flex items-end justify-between gap-4">
        <div>
          <Kicker>Selected Work</Kicker>
          <h2 className="mt-3 text-3xl font-semibold text-text md:text-4xl">
            Featured case studies
          </h2>
        </div>
        <Link
          href="/work"
          className="hidden shrink-0 items-center gap-2 text-sm font-medium text-muted duration-200 hover:text-accent sm:flex"
        >
          View all work <span aria-hidden>→</span>
        </Link>
      </Reveal>

      <div className="mt-12 flex flex-col gap-20 md:gap-28">
        {caseStudies.slice(0, 2).map((project, index) => (
          <FeaturedCaseStudyCard
            key={project.slug}
            project={project}
            reverse={index % 2 === 1}
          />
        ))}
      </div>

      <Link
        href="/work"
        className="mt-10 flex items-center gap-2 text-sm font-medium text-muted duration-200 hover:text-accent sm:hidden"
      >
        View all work <span aria-hidden>→</span>
      </Link>
    </div>
  );
};

export default FeaturedWork;
