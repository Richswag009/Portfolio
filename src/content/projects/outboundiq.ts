import type { CaseStudy } from "../types";

export const outboundiq: CaseStudy = {
  slug: "outboundiq",
  name: "OutboundIQ",
  tagline: "API Intelligence Platform",
  badge: "Full-Stack",
  role: "Software Developer (Contract)",
  dates: "Aug 2025 – Jan 2026",
  image: "/projects/outboundiq.png",
  imageAlt: "OutboundIQ API monitoring dashboard",
  liveLink: "https://outboundiq.dev",
  tech: ["Laravel", "Next.js", "PostgreSQL", "Grok AI", "Redis", "REST API"],

  overview:
    "OutboundIQ is a real-time API monitoring and intelligence platform that catches third-party API failures before they reach end users. It correlates provider status pages with live transaction data, using AI to interpret what's actually happening with a provider instead of relying on the provider's own status page.",

  problem:
    "Teams that depend on third-party APIs usually find out something's broken from a support ticket, not a monitor — status pages lag reality, and a “degraded performance” banner doesn't say whether it's actually affecting your transactions right now. OutboundIQ needed to close that gap: watch real transaction data, cross-reference it against provider status, and flag genuine incidents early enough to act on.",

  myRole: [
    "Backend development of the monitoring and routing engine (Laravel)",
    "AI integration — provider health analysis using the Grok LLM",
    "RBAC and audit-trail system design across projects and teams",
    "SDK design and publishing (laravel-outboundiq)",
    "API design for the Next.js monitoring dashboard, in collaboration with frontend engineers",
  ],

  solution:
    "The core of OutboundIQ is a Laravel service that watches provider status pages and live transaction data side by side. When the two disagree — a provider claims to be healthy but transactions are failing, or vice versa — that's a signal worth surfacing. Grok reads and interprets provider status language, which varies a lot between providers, into a consistent health signal. Everything is exposed through a Next.js dashboard, and external teams can pull the same monitoring into their own stack via the laravel-outboundiq SDK.",

  architecture: [
    {
      title: "API monitoring & routing engine",
      detail:
        "A Laravel service that ingests provider status and live transaction data, then correlates the two to detect real incidents.",
    },
    {
      title: "AI health analysis",
      detail:
        "Grok normalizes inconsistent, free-text provider status pages into a structured, consistent health signal.",
    },
    {
      title: "RBAC + audit trail",
      detail:
        "Role-based access across projects and teams, with an audit log covering who changed what and when.",
    },
    {
      title: "laravel-outboundiq SDK",
      detail:
        "A published package so external developers integrate against a stable client instead of raw endpoints.",
    },
    {
      title: "Next.js monitoring dashboard",
      detail: "Consumes the API for real-time incident and provider-health views.",
    },
    {
      title: "PostgreSQL",
      detail: "Stores providers, incidents, roles, and audit history.",
    },
  ],

  diagram: [
    ["Provider Status Pages", "Live Transaction Data"],
    ["Correlation Engine (Laravel)"],
    ["Grok AI Health Analysis"],
    ["RBAC + Audit Trail", "PostgreSQL"],
    ["Next.js Dashboard", "laravel-outboundiq SDK"],
  ],

  challenges: [
    {
      title: "Telling a real incident from noise",
      detail:
        "Correlating provider status against live transaction data without drowning the signal in false positives — a provider can look degraded for reasons that never touch your traffic at all.",
    },
    {
      title: "Reading inconsistent provider status language",
      detail:
        "Every provider phrases incidents differently. Grok normalizes that free text into a consistent structured signal instead of maintaining a hand-written parser per provider.",
    },
    {
      title: "Designing a public SDK contract",
      detail:
        "Once laravel-outboundiq shipped, the API surface it depended on couldn't shift under external integrators — which pushed more upfront thought into the RBAC and audit-trail design so the contract stayed stable as project/team permissions were added.",
    },
  ],

  decisions: [
    {
      title: "Why Laravel for the monitoring engine",
      detail:
        "REST-first, with a strong ecosystem for the scheduled jobs and queues needed to continuously poll providers and correlate data.",
    },
    {
      title: "Why Grok over hand-written status parsers",
      detail:
        "Provider status pages don't share a format. An LLM generalizes across providers instead of needing a bespoke parser maintained per integration.",
    },
    {
      title: "Why extract a dedicated SDK",
      detail:
        "Rather than asking integrators to hit raw endpoints, laravel-outboundiq gives them a stable client — directly responsible for the cut in integration setup time.",
    },
  ],

  results: [
    "35% reduction in third-party downtime impact",
    "90% accuracy in AI-driven provider health interpretation",
    "60% reduction in integration setup time for external developers, via the published SDK",
  ],

  improvements: [
    "Deeper observability — structured metrics and alerting on the monitoring engine itself, not just the providers it watches",
    "Horizontal scaling of the monitoring/polling layer as provider and project count grows",
    "Broader automated test coverage around the AI health-interpretation path, given it's judgment-based rather than deterministic",
  ],
};
