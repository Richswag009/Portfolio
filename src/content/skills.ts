import type { SkillGroup } from "./types";

export const skills: SkillGroup[] = [
  {
    category: "Languages",
    items: ["JavaScript", "TypeScript", "PHP", "Java", "Python"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    category: "Backend",
    items: ["Laravel", "Spring Boot", "Node.js", "Express", "REST API Design"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    category: "Infrastructure & Tools",
    items: ["Git", "GitHub", "Docker", "Linux", "Redis", "Vercel", "Figma"],
  },
  {
    category: "AI / LLM",
    items: [
      "Prompt Engineering",
      "LLM Evaluation",
      "AI-Assisted Development",
      "AI API Integration",
    ],
  },
];
