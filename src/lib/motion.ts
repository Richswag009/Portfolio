import type { Variants } from "framer-motion";

/**
 * Shared scroll/mount reveal variants. Consumers should read distance/duration
 * through `useReveal()` so prefers-reduced-motion collapses them to an instant fade.
 */
export function fadeUp(delay = 0, distance = 20): Variants {
  return {
    hidden: { opacity: 0, y: distance },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay, ease: "easeOut" },
    },
  };
}

export function fadeIn(delay = 0): Variants {
  return {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.5, delay, ease: "easeOut" } },
  };
}

export const staggerChildren = (stagger = 0.08): Variants => ({
  hidden: {},
  show: {
    transition: { staggerChildren: stagger },
  },
});
