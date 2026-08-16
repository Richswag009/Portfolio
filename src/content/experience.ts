import type { ExperienceRole } from "./types";

export const experience: ExperienceRole[] = [
  {
    company: "Revelo (Contract)",
    title: "AI Code Evaluation Contributor",
    dates: "Mar 2025 – Present",
    bullets: [
      "Evaluated production-style software repositories used for LLM training and benchmarking.",
      "Reviewed source code, test suites, and prompts to assess code quality, correctness, and architectural completeness.",
      "Executed and validated AI-generated solutions by reproducing model trajectories and identifying failure cases.",
      "Enhanced repositories through prompt-driven development, implementing missing functionality, fixing defects, and improving maintainability.",
      "Documented model pass/fail reasoning and annotated evaluation outcomes to improve AI training quality.",
    ],
    tech: ["TypeScript", "Python", "JavaScript", "Git"],
  },
  {
    company: "Spout Payment (Remote)",
    title: "Software Developer",
    dates: "Jan 2025 – Present",
    bullets: [
      "Redesigned UI labels and transaction flows on payment terminals, reducing transaction errors by 20%.",
      "Integrated banking APIs, improving transaction processing capabilities for 100+ merchants.",
      "Built a bulk merchant onboarding feature, cutting manual effort by 70% and onboarding time from 3 days to a few hours.",
      "Integrated and deployed payment processing solutions while maintaining PCI-DSS compliance standards.",
      "Collaborated with senior engineers to debug critical payment-processing issues, reducing operational downtime by 30%.",
    ],
    tech: ["Payment APIs", "PCI-DSS", "REST API"],
  },
  {
    company: "Outboundiq (Contract)",
    title: "Software Developer",
    dates: "Aug 2025 – Jan 2026",
    bullets: [
      "Engineered a real-time API monitoring and routing system in Laravel, reducing third-party downtime by 35%.",
      "Implemented role-based access control (RBAC) and audit-trail systems for projects and teams, strengthening platform security and compliance.",
      "Developed and published the laravel-outboundiq SDK, cutting external integration setup time by 60%.",
      "Integrated AI-driven API health analysis using Grok, automating provider-status interpretation with 90% accuracy.",
      "Collaborated with frontend engineers to design API endpoints and data models for the Next.js monitoring dashboard.",
    ],
    tech: ["Laravel", "PostgreSQL", "Grok AI", "Next.js", "REST API"],
  },
  {
    company: "Gheli Technology Solution Limited",
    title: "Software Developer",
    dates: "Oct 2023 – Apr 2026",
    bullets: [
      "Designed and built a custom double-entry accounting system for Edo Specialist Hospital, replacing commercial Sage software with a fully integrated in-house platform.",
      "Built a complete financial reporting suite: trial balance, profit & loss, balance sheet generation, automated posting, and manual journal workflows.",
      "Integrated the accounting platform with the hospital's e-clinic system for real-time sync between clinical and financial operations.",
      "Built REST API-driven cooperative management systems serving 2,000+ users, with React/Next.js dashboards for savings, loans, and admin workflows.",
      "Built and deployed CRM, HRMS, and cooperative-management interfaces used by 200+ businesses.",
      "Mentored 20+ junior developers in HTML, CSS, JavaScript, and React fundamentals.",
    ],
    tech: ["PHP", "Laravel", "MySQL", "React", "Next.js", "REST API"],
  },
  {
    company: "TDHUB, Afikpo (NYSC)",
    title: "Web Developer Intern",
    dates: "Nov 2021 – Aug 2022",
    bullets: [
      "Improved website performance by 22% through frontend optimization and cross-browser compatibility work.",
      "Optimized frontend components for responsive performance across desktop and mobile devices.",
      "Collaborated with department managers during implementation reviews and service-improvement initiatives.",
    ],
    tech: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "PHP", "MySQL"],
  },
];
