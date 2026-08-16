import Image from "next/image";
import Reveal from "../UI/Reveal";

const AboutContent = () => {
  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_1.4fr] md:gap-16">
      <Reveal className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-lg border border-border bg-surface">
        <Image
          src="/images/me.jpg"
          alt="Riches Metelewawon"
          fill
          priority
          className="object-cover"
        />
      </Reveal>

      <Reveal delay={0.08} className="space-y-5 text-base leading-relaxed text-muted md:text-lg">
        <p>
          I&apos;m a graduate of Mechanical Engineering who taught himself to code
          and moved into full-stack development — now mostly focused on backend
          systems, APIs, and the business logic that makes them worth building.
        </p>
        <p>
          I like problems with real constraints: financial data that has to
          reconcile, approval workflows with real roles behind them,
          integrations that have to keep working when someone else&apos;s API
          doesn&apos;t. Most of what I build sits in Laravel, Node.js, React, and
          PostgreSQL.
        </p>
        <p>
          More recently that&apos;s also meant evaluating AI-generated code for
          LLM training — reading a lot of other people&apos;s TypeScript and
          Laravel, and getting a close look at where AI-assisted development
          actually holds up.
        </p>
        <p className="text-faint">Outside of engineering: chess and football.</p>
      </Reveal>
    </div>
  );
};

export default AboutContent;
