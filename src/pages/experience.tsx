import type { NextPage } from "next";
import HeadSection from "@/components/Head/HeadSection";
import Section from "@/components/UI/Section";
import Kicker from "@/components/UI/Kicker";
import Reveal from "@/components/UI/Reveal";
import ExperienceTimeline from "@/components/Experience/ExperienceTimeline";
import { site } from "@/content";

const Experience: NextPage = () => {
  return (
    <>
      <HeadSection
        title={`Experience — ${site.name}`}
        page="Experience"
        description="Professional experience — Riches Metelewawon's engineering roles across fintech, healthcare, and API infrastructure."
        path="/experience"
      />
      <main className="w-full overflow-x-hidden">
        <Section className="pb-10 pt-32 md:pt-40">
          <Reveal>
            <Kicker>Experience</Kicker>
            <h1 className="mt-3 max-w-2xl text-4xl font-semibold text-text md:text-5xl">
              Where I&apos;ve worked
            </h1>
          </Reveal>
        </Section>
        <Section className="border-t border-border pt-14">
          <ExperienceTimeline />
        </Section>
      </main>
    </>
  );
};

export default Experience;
