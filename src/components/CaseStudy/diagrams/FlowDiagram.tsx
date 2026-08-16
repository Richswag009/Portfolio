type Props = {
  stages: string[][];
};

/** Simple box-and-arrow data-flow diagram built from real described architecture. */
const FlowDiagram = ({ stages }: Props) => {
  return (
    <div
      className="flex flex-col items-stretch gap-0 rounded-lg border border-border bg-surface p-6 md:flex-row md:items-center md:gap-0"
      role="img"
      aria-label={`Data flow: ${stages.map((s) => s.join(" / ")).join(" → ")}`}
    >
      {stages.map((stage, index) => (
        <div key={index} className="flex flex-1 flex-col items-center md:flex-row">
          <div className="flex w-full flex-col items-center gap-2">
            {stage.map((node) => (
              <div
                key={node}
                className="w-full rounded-md border border-border bg-surface2 px-3 py-2.5 text-center font-mono text-xs leading-snug text-text"
              >
                {node}
              </div>
            ))}
          </div>
          {index < stages.length - 1 && (
            <div
              className="flex shrink-0 items-center justify-center text-accent"
              aria-hidden
            >
              <span className="my-3 block text-lg md:mx-3 md:my-0 md:rotate-0">
                <span className="md:hidden">↓</span>
                <span className="hidden md:inline">→</span>
              </span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FlowDiagram;
