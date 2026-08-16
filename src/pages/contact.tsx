import type { NextPage } from "next";
import HeadSection from "@/components/Head/HeadSection";
import Section from "@/components/UI/Section";
import ContactCTA from "@/components/Contact/ContactCTA";
import { site } from "@/content";

const Contact: NextPage = () => {
  return (
    <>
      <HeadSection
        title={`Contact — ${site.name}`}
        page="Contact"
        description="Get in touch with Riches Metelewawon for freelance projects, full-time roles, or collaboration."
        path="/contact"
      />
      <main className="flex min-h-[70vh] w-full items-center overflow-x-hidden">
        <Section>
          <ContactCTA />
        </Section>
      </main>
    </>
  );
};

export default Contact;
