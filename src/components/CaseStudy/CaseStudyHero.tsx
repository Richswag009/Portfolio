import Image from "next/image";
import Link from "next/link";
import type { CaseStudy } from "@/content/types";
import Reveal from "../UI/Reveal";
import Kicker from "../UI/Kicker";

const CaseStudyHero = ({ project }: { project: CaseStudy }) => {
  return (
    <div>
      <Reveal>
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-sm text-muted duration-200 hover:text-accent"
        >
          <span aria-hidden>←</span> Back to Work
        </Link>
      </Reveal>

      <Reveal delay={0.06} className="mt-8">
        <Kicker>{project.badge}</Kicker>
        <h1 className="mt-3 text-4xl font-semibold text-text md:text-6xl">
          {project.name}
        </h1>
        <p className="mt-3 text-lg text-muted md:text-xl">{project.tagline}</p>
      </Reveal>

      <Reveal
        delay={0.12}
        className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4 border-y border-border py-6"
      >
        <div>
          <p className="font-mono text-xs uppercase tracking-wider text-faint">Role</p>
          <p className="mt-1 text-sm text-text">{project.role}</p>
        </div>
        <div>
          <p className="font-mono text-xs uppercase tracking-wider text-faint">Timeline</p>
          <p className="mt-1 text-sm text-text">{project.dates}</p>
        </div>
        <div className="flex-1" />
        <div className="flex flex-wrap items-center gap-3">
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-9 items-center rounded-md bg-accent px-4 text-sm font-medium text-bg duration-200 hover:bg-white"
            >
              Visit Live Site
            </a>
          )}
          {project.demoLink && (
            <a
              href={project.demoLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-9 items-center rounded-md border border-border px-4 text-sm font-medium text-text duration-200 hover:border-accent hover:text-accent"
            >
              Watch Demo
            </a>
          )}
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-9 items-center rounded-md border border-border px-4 text-sm font-medium text-text duration-200 hover:border-accent hover:text-accent"
            >
              View Code
            </a>
          )}
          {project.liveLabel && !project.liveLink && (
            <span className="font-mono text-xs text-faint">{project.liveLabel}</span>
          )}
        </div>
      </Reveal>

      <Reveal delay={0.18} className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted"
          >
            {tech}
          </span>
        ))}
      </Reveal>

      <Reveal
        delay={0.24}
        className="relative mt-10 aspect-[16/9] w-full overflow-hidden rounded-lg border border-border bg-surface"
      >
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-top"
        />
      </Reveal>
    </div>
  );
};

export default CaseStudyHero;
