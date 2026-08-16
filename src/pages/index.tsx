import HeadSection from "@/components/Head/HeadSection";
import Section from "@/components/UI/Section";
import Hero from "@/components/Home/Hero";
import FeaturedWork from "@/components/Home/FeaturedWork";
import SkillsPreview from "@/components/Home/SkillsPreview";
import ContactCTA from "@/components/Contact/ContactCTA";
import { site } from "@/content";

export default function Home() {
  return (
    <>
      <HeadSection
        title={`${site.name} — Software Engineer`}
        page="Home"
        description={`${site.role} building backend systems, APIs, and production-ready products. ${site.summary}`}
        path="/"
      />
      <main className="w-full overflow-x-hidden">
        <Section className="pb-16 pt-40 md:pb-20 md:pt-48">
          <Hero />
        </Section>

        <Section className="border-t border-border">
          <FeaturedWork />
        </Section>

        <Section className="border-t border-border" narrow>
          <SkillsPreview />
        </Section>

        <Section className="border-t border-border">
          <ContactCTA />
        </Section>
      </main>
    </>
  );
}
