import Image from "next/image";
import type { OtherProject } from "@/content/types";

type Props = {
  project: OtherProject;
};

const ProjectCard = ({ project }: Props) => {
  const href = project.liveLink || project.demoLink || project.link;

  return (
    <div className="group flex flex-col overflow-hidden rounded-lg border border-border bg-surface duration-200 hover:border-accent/40">
      <div className="relative aspect-video w-full overflow-hidden border-b border-border">
        <Image
          src={project.image}
          alt={project.name}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-base font-semibold text-text">{project.name}</h3>
          {project.badge && (
            <span className="whitespace-nowrap rounded-full border border-border px-2 py-0.5 font-mono text-[10px] text-muted">
              {project.badge}
            </span>
          )}
        </div>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
          {project.about}
        </p>
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {project.builtWith.map((tech) => (
            <li
              key={tech}
              className="rounded-full bg-surface2 px-2 py-0.5 font-mono text-[11px] text-muted"
            >
              {tech}
            </li>
          ))}
        </ul>
        <div className="mt-4 flex items-center gap-4 text-sm">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="text-muted duration-200 hover:text-accent"
            >
              Code
            </a>
          )}
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noreferrer"
              className="text-muted duration-200 hover:text-accent"
            >
              Live
            </a>
          )}
          {project.demoLink && (
            <a
              href={project.demoLink}
              target="_blank"
              rel="noreferrer"
              className="text-muted duration-200 hover:text-accent"
            >
              Demo
            </a>
          )}
          {project.liveLabel && !href && (
            <span className="text-faint">{project.liveLabel}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
