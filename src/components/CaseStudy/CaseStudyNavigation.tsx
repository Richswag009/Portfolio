import Link from "next/link";
import type { CaseStudy } from "@/content/types";

type Props = {
  next?: CaseStudy;
};

const CaseStudyNavigation = ({ next }: Props) => {
  return (
    <div className="border-t border-border py-14 md:py-16">
      {next ? (
        <Link href={`/work/${next.slug}`} className="group block">
          <p className="font-mono text-xs uppercase tracking-wider text-faint">
            Next case study
          </p>
          <p className="mt-2 flex items-center gap-3 text-2xl font-semibold text-text duration-200 group-hover:text-accent md:text-3xl">
            {next.name}
            <span aria-hidden>→</span>
          </p>
        </Link>
      ) : (
        <Link
          href="/work"
          className="text-2xl font-semibold text-text duration-200 hover:text-accent md:text-3xl"
        >
          Back to all work →
        </Link>
      )}
    </div>
  );
};

export default CaseStudyNavigation;
