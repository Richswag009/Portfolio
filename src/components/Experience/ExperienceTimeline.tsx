import { experience } from "@/content";
import ExperienceItem from "./ExperienceItem";

const ExperienceTimeline = () => {
  return (
    <div className="max-w-2xl">
      {experience.map((role, index) => (
        <ExperienceItem key={role.company} role={role} delay={Math.min(index * 0.05, 0.2)} />
      ))}
    </div>
  );
};

export default ExperienceTimeline;
