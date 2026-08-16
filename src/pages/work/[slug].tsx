import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import HeadSection from "@/components/Head/HeadSection";
import Section from "@/components/UI/Section";
import CaseStudyHero from "@/components/CaseStudy/CaseStudyHero";
import CaseStudyOverview from "@/components/CaseStudy/CaseStudyOverview";
import CaseStudyProblem from "@/components/CaseStudy/CaseStudyProblem";
import CaseStudyMyRole from "@/components/CaseStudy/CaseStudyMyRole";
import CaseStudySolution from "@/components/CaseStudy/CaseStudySolution";
import CaseStudyArchitecture from "@/components/CaseStudy/CaseStudyArchitecture";
import CaseStudyChallenges from "@/components/CaseStudy/CaseStudyChallenges";
import CaseStudyDecisions from "@/components/CaseStudy/CaseStudyDecisions";
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

const CaseStudyPage: NextPage<Props> = ({ project, next }) => {
  return (
    <>
      <HeadSection
        title={`${project.name} — ${project.tagline}`}
        page={project.name}
        description={project.overview}
        path={`/work/${project.slug}`}
        image={`https://richesmetelewawon.dev${project.image}`}
      />
      <main className="w-full overflow-x-hidden">
        <Section className="pb-0 pt-32 md:pt-40" narrow>
          <CaseStudyHero project={project} />
        </Section>
        <Section className="py-0" narrow>
          <CaseStudyOverview overview={project.overview} />
          <CaseStudyProblem problem={project.problem} />
          <CaseStudyMyRole myRole={project.myRole} />
          <CaseStudySolution solution={project.solution} />
        </Section>
        <Section className="py-0">
          <CaseStudyArchitecture
            architecture={project.architecture}
            diagram={project.diagram}
          />
        </Section>
        <Section className="py-0" narrow>
          <CaseStudyChallenges challenges={project.challenges} />
          <CaseStudyDecisions decisions={project.decisions} />
        </Section>
        <Section className="py-0">
          <CaseStudyResults results={project.results} />
          {project.gallery && <CaseStudyGallery gallery={project.gallery} />}
        </Section>
        <Section className="py-0" narrow>
          <CaseStudyImprove improvements={project.improvements} />
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
