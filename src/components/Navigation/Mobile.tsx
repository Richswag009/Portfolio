import { motion } from "framer-motion";
import { menuVariant, navItem } from "../../variants/menuVariant";
import { Download } from "../Main/icons";
import { site } from "@/content";
import LinkWrapper from "./LinkWrapper";
import { navLinks } from "./Desktop";

type Props = {
  handleMenuToggle: () => void;
};

const Mobile = ({ handleMenuToggle }: Props) => {
  return (
    <motion.div
      className="md:hidden fixed inset-0 top-16 z-50 flex h-[calc(100vh-4rem)] flex-col bg-bg"
      initial={{ opacity: 0 }}
      variants={menuVariant}
      animate={"show"}
      exit={"exit"}
    >
      <motion.div
        className="flex flex-1 flex-col items-center justify-center space-y-8"
        initial={{ opacity: 0 }}
        animate={navItem.show}
        exit={navItem.exit}
      >
        {navLinks.map((item) => (
          <LinkWrapper
            key={item.href}
            name={item.name}
            href={item.href}
            onClick={handleMenuToggle}
            className="text-2xl"
          />
        ))}

        <a
          href={site.resumeHref}
          target="_blank"
          rel="noreferrer"
          className="mt-6 flex h-11 items-center justify-center gap-3 rounded-md bg-surface px-6 text-sm font-medium text-text"
        >
          Resume
          <Download height="4" width="4" />
        </a>
      </motion.div>
    </motion.div>
  );
};

export default Mobile;
