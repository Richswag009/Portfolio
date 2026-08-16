import type { OtherProject } from "@/content/types";
import ProjectCard from "./ProjectCard";
import Reveal from "../UI/Reveal";

type Props = {
  projects: OtherProject[];
};

const ProjectList = ({ projects }: Props) => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <Reveal key={project.name} delay={(index % 3) * 0.06}>
          <ProjectCard project={project} />
        </Reveal>
      ))}
    </div>
  );
};

export default ProjectList;
