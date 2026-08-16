import { motion, useReducedMotion, type Variants } from "framer-motion";
import { fadeUp } from "@/lib/motion";

type Props = {
  children: React.ReactNode;
  delay?: number;
  distance?: number;
  className?: string;
  as?: "div" | "li";
  once?: boolean;
};

/** Scroll-reveal wrapper that collapses to an instant fade under prefers-reduced-motion. */
const Reveal = ({
  children,
  delay = 0,
  distance = 20,
  className,
  as = "div",
  once = true,
}: Props) => {
  const shouldReduceMotion = useReducedMotion();
  const variants: Variants = shouldReduceMotion
    ? { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.2 } } }
    : fadeUp(delay, distance);

  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: "-80px" }}
      variants={variants}
    >
      {children}
    </MotionTag>
  );
};

export default Reveal;
