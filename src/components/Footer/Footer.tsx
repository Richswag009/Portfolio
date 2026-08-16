import Link from "next/link";
import { site } from "@/content";
import { navLinks } from "../Navigation/Desktop";
import Github from "../Utils/icons/Github";
import LinkedIn from "../Utils/icons/LinkedIn";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-content flex-col gap-8 px-6 py-12 md:flex-row md:items-start md:justify-between md:px-10">
        <div>
          <Link href="/" className="font-mono text-lg font-semibold text-text">
            riches<span className="text-accent">.</span>
          </Link>
          <p className="mt-3 max-w-xs text-sm text-muted">{site.tagline}</p>
        </div>

        <nav className="flex flex-wrap gap-x-8 gap-y-3" aria-label="Footer">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted duration-200 hover:text-text"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-3">
          <a
            href={`mailto:${site.email}`}
            className="text-sm text-muted duration-200 hover:text-accent"
          >
            {site.email}
          </a>
          <div className="flex items-center gap-4">
            <a href={site.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github />
            </a>
            <a href={site.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <LinkedIn />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-border px-6 py-6 text-center text-xs text-faint md:px-10">
        © {year} {site.name}. Built with Next.js and Tailwind CSS.
      </div>
    </footer>
  );
};

export default Footer;
