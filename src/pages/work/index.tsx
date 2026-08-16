import type { NextPage } from "next";
import HeadSection from "@/components/Head/HeadSection";
import Section from "@/components/UI/Section";
import Kicker from "@/components/UI/Kicker";
import Reveal from "@/components/UI/Reveal";
import FeaturedCaseStudyCard from "@/components/Work/FeaturedCaseStudyCard";
import ProjectList from "@/components/Work/ProjectList";
import { caseStudies, otherProjects, site } from "@/content";

const Work: NextPage = () => {
  return (
    <>
      <HeadSection
        title={`Work — ${site.name}`}
        page="Work"
        description="Case studies and projects by Riches Metelewawon — backend systems, APIs, and full-stack products in fintech and healthcare."
        path="/work"
      />
      <main className="w-full overflow-x-hidden">
        <Section className="pb-10 pt-32 md:pt-40">
          <Reveal>
            <Kicker>Work</Kicker>
            <h1 className="mt-3 max-w-2xl text-4xl font-semibold text-text md:text-5xl">
              Case studies and projects
            </h1>
            <p className="mt-4 max-w-xl text-base text-muted md:text-lg">
              A closer look at the systems I&apos;ve built — how they&apos;re
              architected, what was hard about them, and why they&apos;re built the
              way they are.
            </p>
          </Reveal>
        </Section>

        <Section className="border-t border-border pt-14">
          <div className="flex flex-col gap-20 md:gap-28">
            {caseStudies.map((project, index) => (
              <FeaturedCaseStudyCard
                key={project.slug}
                project={project}
                reverse={index % 2 === 1}
              />
            ))}
          </div>
        </Section>

        <Section className="border-t border-border">
          <Reveal>
            <Kicker>Other Projects</Kicker>
            <h2 className="mt-3 text-3xl font-semibold text-text md:text-4xl">
              Smaller builds
            </h2>
            <p className="mt-3 max-w-xl text-base text-muted">
              Frontend-focused projects, tooling, and earlier work.
            </p>
          </Reveal>
          <div className="mt-10">
            <ProjectList projects={otherProjects} />
          </div>
        </Section>
      </main>
    </>
  );
};

export default Work;
