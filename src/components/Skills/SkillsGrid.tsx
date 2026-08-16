import { skills } from "@/content";
import SkillGroup from "./SkillGroup";

const SkillsGrid = () => {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
      {skills.map((group, index) => (
        <SkillGroup key={group.category} group={group} delay={(index % 2) * 0.06} />
      ))}
    </div>
  );
};

export default SkillsGrid;
