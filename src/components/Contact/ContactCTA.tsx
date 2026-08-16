import { site } from "@/content";
import Reveal from "../UI/Reveal";
import Github from "../Utils/icons/Github";
import LinkedIn from "../Utils/icons/LinkedIn";

type Props = {
  compact?: boolean;
};

const ContactCTA = ({ compact = false }: Props) => {
  return (
    <Reveal className="text-center">
      <h2
        className={`mx-auto max-w-2xl font-semibold text-text ${
          compact ? "text-3xl md:text-4xl" : "text-4xl md:text-5xl"
        }`}
      >
        Have a project worth building?
      </h2>
      <p className="mx-auto mt-4 max-w-lg text-base text-muted">
        Reach out directly, or find me on GitHub and LinkedIn.
      </p>

      <div className="mt-8 flex justify-center">
        <a
          href={`mailto:${site.email}`}
          className="inline-flex h-12 items-center justify-center rounded-md bg-accent px-8 text-sm font-medium text-bg duration-200 hover:bg-white"
        >
          {site.email}
        </a>
      </div>

      <div className="mt-6 flex items-center justify-center gap-6">
        <a
          href={site.github}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 text-sm text-muted duration-200 hover:text-accent"
        >
          <Github /> GitHub
        </a>
        <a
          href={site.linkedin}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 text-sm text-muted duration-200 hover:text-accent"
        >
          <LinkedIn /> LinkedIn
        </a>
      </div>
    </Reveal>
  );
};

export default ContactCTA;
