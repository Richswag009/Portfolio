import Image from "next/image";
import Link from "next/link";
import type { CaseStudy } from "@/content/types";
import Reveal from "../UI/Reveal";

type Props = {
  project: CaseStudy;
  reverse?: boolean;
};

const FeaturedCaseStudyCard = ({ project, reverse = false }: Props) => {
  return (
    <Reveal
      className={`grid items-center gap-8 md:grid-cols-2 md:gap-12 ${
        reverse ? "md:[&>*:first-child]:order-2" : ""
      }`}
    >
      <Link
        href={`/work/${project.slug}`}
        className="group relative block aspect-[4/3] overflow-hidden rounded-lg border border-border bg-surface"
      >
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover object-top duration-500 group-hover:scale-[1.03]"
        />
      </Link>

      <div>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
          {project.badge}
        </p>
        <h3 className="mt-3 text-2xl font-semibold text-text md:text-3xl">
          {project.name}
        </h3>
        <p className="mt-1 text-sm text-muted">{project.tagline}</p>
        <p className="mt-4 text-base leading-relaxed text-muted">
          {project.overview}
        </p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted"
            >
              {tech}
            </li>
          ))}
        </ul>

        <Link
          href={`/work/${project.slug}`}
          className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent duration-200 hover:gap-3"
        >
          View Case Study
          <span aria-hidden>→</span>
        </Link>
      </div>
    </Reveal>
  );
};

export default FeaturedCaseStudyCard;
