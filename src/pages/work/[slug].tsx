import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import HeadSection from "@/components/Head/HeadSection";
import Section from "@/components/UI/Section";
import CaseStudyHero from "@/components/CaseStudy/CaseStudyHero";
import CaseStudyOverview from "@/components/CaseStudy/CaseStudyOverview";
import CaseStudyProblem from "@/components/CaseStudy/CaseStudyProblem";
import CaseStudyMyRole from "@/components/CaseStudy/CaseStudyMyRole";
import CaseStudySolution from "@/components/CaseStudy/CaseStudySolution";
import CaseStudyWorkflow from "@/components/CaseStudy/CaseStudyWorkflow";
import CaseStudyArchitecture from "@/components/CaseStudy/CaseStudyArchitecture";
import CaseStudyList from "@/components/CaseStudy/CaseStudyList";
import CaseStudyDivided from "@/components/CaseStudy/CaseStudyDivided";
import CaseStudyProse from "@/components/CaseStudy/CaseStudyProse";
import CaseStudyResults from "@/components/CaseStudy/CaseStudyResults";
import CaseStudyImprove from "@/components/CaseStudy/CaseStudyImprove";
import CaseStudyGallery from "@/components/CaseStudy/CaseStudyGallery";
import CaseStudyNavigation from "@/components/CaseStudy/CaseStudyNavigation";
import { caseStudies } from "@/content";
import type { CaseStudy } from "@/content/types";

type Props = {
  project: CaseStudy;
  next?: CaseStudy;
};

const pad = (n: number) => String(n).padStart(2, "0");

const CaseStudyPage: NextPage<Props> = ({ project, next }) => {
  let n = 0;
  const idx = () => pad(++n);

  return (
    <>
      <HeadSection
        title={`${project.name} — ${project.tagline}`}
        page={project.name}
        description={project.overview}
        path={`/work/${project.slug}`}
        image={project.image ? `https://richesmetelewawon.dev${project.image}` : undefined}
      />
      <main className="w-full overflow-x-hidden">
        <Section className="pb-0 pt-32 md:pt-40" narrow>
          <CaseStudyHero project={project} />
        </Section>
        <Section className="py-0" narrow>
          <CaseStudyOverview overview={project.overview} index={idx()} />
          <CaseStudyProblem problem={project.problem} index={idx()} />
          <CaseStudyMyRole myRole={project.myRole} index={idx()} />
          <CaseStudySolution solution={project.solution} index={idx()} />
        </Section>

        {project.workflowSteps && (
          <Section className="py-0" narrow>
            <CaseStudyWorkflow
              index={idx()}
              title="How It Works"
              steps={project.workflowSteps}
            />
          </Section>
        )}

        <Section className="py-0">
          <CaseStudyArchitecture
            architecture={project.architecture}
            diagram={project.diagram}
            index={idx()}
          />
        </Section>

        <Section className="py-0" narrow>
          <CaseStudyDivided
            index={idx()}
            title="Key Decisions"
            items={project.decisions}
          />
        </Section>

        {project.technicalImplementation && (
          <Section className="py-0" narrow>
            <CaseStudyDivided
              index={idx()}
              title="Technical Implementation"
              items={project.technicalImplementation}
            />
          </Section>
        )}

        <Section className="py-0" narrow>
          <CaseStudyList
            index={idx()}
            title="Engineering Challenges"
            items={project.challenges}
          />
        </Section>

        {project.failureScenarios && (
          <Section className="py-0" narrow>
            <CaseStudyList
              index={idx()}
              title="Failure Scenarios"
              items={project.failureScenarios}
            />
          </Section>
        )}

        {project.securityReliability && (
          <Section className="py-0" narrow>
            <CaseStudyDivided
              index={idx()}
              title="Security & Reliability"
              items={project.securityReliability}
            />
          </Section>
        )}

        {project.testing && (
          <Section className="py-0" narrow>
            <CaseStudyProse index={idx()} title="Testing">
              <p>{project.testing}</p>
            </CaseStudyProse>
          </Section>
        )}

        {project.tradeoffs && (
          <Section className="py-0" narrow>
            <CaseStudyList index={idx()} title="Trade-offs" items={project.tradeoffs} />
          </Section>
        )}

        {project.results && (
          <Section className="py-0">
            <CaseStudyResults results={project.results} index={idx()} />
          </Section>
        )}

        {project.gallery && (
          <Section className="py-0">
            <CaseStudyGallery gallery={project.gallery} />
          </Section>
        )}

        {project.whatILearned && (
          <Section className="py-0" narrow>
            <CaseStudyProse index={idx()} title="What I Learned">
              <p>{project.whatILearned}</p>
            </CaseStudyProse>
          </Section>
        )}

        <Section className="py-0" narrow>
          <CaseStudyImprove improvements={project.improvements} index={idx()} />
        </Section>

        <Section className="pt-0">
          <CaseStudyNavigation next={next} />
        </Section>
      </main>
    </>
  );
};

export default CaseStudyPage;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: caseStudies.map((project) => ({ params: { slug: project.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = params?.slug as string;
  const index = caseStudies.findIndex((project) => project.slug === slug);
  if (index === -1) {
    return { notFound: true };
  }
  const project = caseStudies[index];
  const next = caseStudies[(index + 1) % caseStudies.length];

  return {
    props: {
      project,
      next: next.slug === project.slug ? undefined : next,
    },
  };
};
