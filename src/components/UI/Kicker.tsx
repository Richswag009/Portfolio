type Props = {
  index?: string;
  children: React.ReactNode;
  className?: string;
};

/** Small uppercase mono label used as a section eyebrow, e.g. "01 — Overview". */
const Kicker = ({ index, children, className = "" }: Props) => {
  return (
    <p
      className={`font-mono text-xs uppercase tracking-[0.2em] text-accent ${className}`}
    >
      {index ? `${index} — ` : ""}
      {children}
    </p>
  );
};

export default Kicker;
