import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Desktop, Mobile } from "../Navigation";
import { Download } from "../Main/icons";
import { site } from "@/content";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenuToggle = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    const body = document.querySelector("body");
    isOpen ? body?.classList.add("no-scroll") : body?.classList.remove("no-scroll");
  }, [isOpen]);

  return (
    <header className="fixed left-0 top-0 z-50 h-16 w-full border-b border-border bg-bg/80 backdrop-blur-md">
      <nav className="mx-auto flex h-full w-full max-w-content items-center justify-between px-6 md:px-10">
        <Link
          href="/"
          className="font-mono text-lg font-semibold text-text"
          aria-label="Home"
        >
          riches<span className="text-accent">.</span>
        </Link>

        <div className="hidden md:flex items-center space-x-10">
          <Desktop />
          <a
            href={site.resumeHref}
            target="_blank"
            rel="noreferrer"
            className="flex h-10 items-center justify-center gap-3 rounded-md border border-border px-4 text-sm font-medium text-text duration-200 hover:border-accent hover:text-accent"
          >
            Resume
            <Download height="4" width="4" />
          </a>
        </div>

        <button
          className="relative z-50 h-8 w-8 md:hidden"
          onClick={handleMenuToggle}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          <Image
            src={isOpen ? "/icons/close.svg" : "/icons/hamburger.svg"}
            alt=""
            width={28}
            height={28}
            className="mx-auto"
          />
        </button>

        <AnimatePresence initial={false} mode="wait">
          {isOpen && <Mobile handleMenuToggle={handleMenuToggle} />}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
