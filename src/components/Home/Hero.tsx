import Reveal from "../UI/Reveal";
import Button from "../UI/Button";
import Kicker from "../UI/Kicker";
import Github from "../Utils/icons/Github";
import LinkedIn from "../Utils/icons/LinkedIn";
import { site } from "@/content";

const Hero = () => {
  return (
    <div className="flex flex-col">
      <Reveal>
        <Kicker>{site.name}</Kicker>
      </Reveal>

      <Reveal delay={0.08}>
        <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-[1.15] tracking-tight text-text sm:text-5xl md:text-6xl">
          {site.role} building{" "}
          <span className="text-accent">backend systems</span>, APIs, and
          production-ready products.
        </h1>
      </Reveal>

      <Reveal delay={0.16}>
        <p className="mt-6 max-w-xl text-base text-muted md:text-lg">
          {site.summary}
        </p>
      </Reveal>

      <Reveal delay={0.24} className="mt-10 flex flex-wrap items-center gap-4">
        <Button href="/work" variant="primary">
          View Case Studies
        </Button>
        <Button href="/contact" variant="secondary">
          Contact Me
        </Button>
        <div className="flex items-center gap-5 pl-2">
          <a href={site.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github />
          </a>
          <a href={site.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <LinkedIn />
          </a>
        </div>
      </Reveal>
    </div>
  );
};

export default Hero;
