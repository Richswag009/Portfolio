import type { NextPage } from "next";
import HeadSection from "@/components/Head/HeadSection";
import Section from "@/components/UI/Section";
import Kicker from "@/components/UI/Kicker";
import Reveal from "@/components/UI/Reveal";
import AboutContent from "@/components/About/AboutContent";
import SkillsGrid from "@/components/Skills/SkillsGrid";
import { site } from "@/content";

const About: NextPage = () => {
  return (
    <>
      <HeadSection
        title={`About — ${site.name}`}
        page="About"
        description="About Riches Metelewawon — a full-stack engineer focused on backend systems, APIs, and production-ready products."
        path="/about"
      />
      <main className="w-full overflow-x-hidden">
        <Section className="pb-10 pt-32 md:pt-40">
          <Reveal>
            <Kicker>About</Kicker>
            <h1 className="mt-3 max-w-2xl text-4xl font-semibold text-text md:text-5xl">
              A bit about how I work
            </h1>
          </Reveal>
        </Section>

        <Section className="border-t border-border pt-14">
          <AboutContent />
        </Section>

        <Section className="border-t border-border">
          <Reveal>
            <Kicker>Toolkit</Kicker>
            <h2 className="mt-3 text-3xl font-semibold text-text md:text-4xl">
              Technologies I use
            </h2>
          </Reveal>
          <div className="mt-10">
            <SkillsGrid />
          </div>
        </Section>
      </main>
    </>
  );
};

export default About;
