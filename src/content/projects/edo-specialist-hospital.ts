import type { CaseStudy } from "../types";

export const edoSpecialistHospital: CaseStudy = {
  slug: "edo-specialist-hospital",
  name: "Edo Specialist Hospital",
  tagline: "Clinical Accounting System",
  badge: "Full-Stack",
  role: "Software Developer, Gheli Technology Solution",
  dates: "Oct 2023 – Apr 2026",
  image: "/projects/accounting.png",
  imageAlt: "Edo Specialist Hospital clinical accounting system",
  liveLabel: "Client Project · Demo Available on Request",
  tech: ["PHP", "Laravel", "MySQL", "REST API", "React", "Next.js"],

  overview:
    "A custom double-entry accounting platform built for Edo Specialist Hospital, a 200-bed government hospital, to replace their commercial Sage accounting software with an in-house system that could talk directly to their existing e-clinic platform.",

  problem:
    "The hospital ran finance through Sage, disconnected from the e-clinic system that recorded clinical activity — procurement, inventory, and financial reporting all lived in separate places and had to be reconciled by hand. They needed one platform where a purchase, a received good, and a ledger entry were the same event, not three things someone had to keep in sync manually.",

  myRole: [
    "Backend architecture — double-entry ledger engine, procurement-to-finance pipeline",
    "Multi-stage approval workflow design across procurement, audit, accounting, and executive roles",
    "Financial reporting modules (trial balance, P&L, balance sheet)",
    "Integration with the hospital's existing e-clinic system",
    "Frontend dashboards (React/Next.js) for accounting, audit, and procurement teams",
  ],

  solution:
    "At the center is a double-entry ledger: every financial event — a purchase, an asset, an expense — posts as a balanced transaction. Procurement runs through a defined pipeline: a purchase request moves through vendor selection, audit review, and accounting validation before it's approved; once approved, it automatically generates a Goods Received Note, updates inventory, and posts the corresponding ledger entries. Manual journal entries are still possible for cases automation doesn't cover, but they go through the same approval gate before touching the general ledger. The whole system is integrated with the hospital's e-clinic platform so clinical and financial records move together.",

  architecture: [
    {
      title: "Double-entry ledger engine",
      detail: "Every transaction posts as a balanced debit/credit pair.",
    },
    {
      title: "Procurement → GRN → inventory → ledger pipeline",
      detail:
        "Approved purchases automatically generate Goods Received Notes, inventory records, and ledger postings.",
    },
    {
      title: "Dynamic role-based approval chains",
      detail:
        "Requests route through procurement officers, auditors, accountants, and executives, enforced by role rather than hardcoded per request type.",
    },
    {
      title: "Manual journal workflow",
      detail:
        "Free-form entries are supported but gated behind the same approval validation before they hit the general ledger.",
    },
    {
      title: "Automated fixed-asset depreciation",
      detail: "Scheduled recalculation feeding directly into reconciliation.",
    },
    {
      title: "Financial reporting layer",
      detail:
        "Trial balance, profit & loss, and balance sheet generated directly from the ledger, not maintained separately.",
    },
    {
      title: "E-clinic integration",
      detail: "Real-time sync between clinical operations and financial records.",
    },
    {
      title: "MySQL",
      detail: "Relational store for the ledger, procurement records, and approval state.",
    },
  ],

  diagram: [
    ["Purchase Request"],
    ["Vendor Selection", "Audit Review", "Accounting Validation"],
    ["Role-Based Approval Chain"],
    ["GRN + Inventory + Ledger Posting"],
    ["Financial Reports", "E-Clinic Sync"],
  ],

  challenges: [
    {
      title: "Keeping approvals dynamic, not hardcoded",
      detail:
        "Procurement requests needed to route through different roles depending on context — a small purchase versus an asset acquisition — so the approval chain had to be data-driven rather than a fixed sequence of steps.",
    },
    {
      title: "Making procurement and accounting the same event",
      detail:
        "Rather than procurement and finance as two systems kept in sync, an approved purchase directly generates its GRN, inventory record, and ledger posting in one flow — closing the reconciliation gap that existed with Sage.",
    },
    {
      title: "Real-time sync with an external clinical system",
      detail:
        "The e-clinic platform was already in production and not built to be replaced, so the accounting system had to integrate around it rather than assume a clean slate.",
    },
  ],

  decisions: [
    {
      title: "Why Laravel + MySQL",
      detail:
        "A relational, transactional data model is the right fit for a double-entry ledger, where every posting has to balance and referential integrity actually matters.",
    },
    {
      title: "Why gate manual journal entries behind approval",
      detail:
        "The system allows manual entries — real accounting always needs an escape hatch — but doesn't let them bypass the same validation automated postings go through.",
    },
    {
      title: "Why build in-house rather than extend Sage",
      detail:
        "Sage had no path to integrate directly with the hospital's e-clinic system. An in-house platform was the only way to unify clinical and financial data.",
    },
  ],

  results: [
    "Replaced commercial accounting software with a fully integrated in-house platform",
    "Unified financial and clinical reporting — procurement, inventory, and ledger data now live in one system instead of three",
    "Reduced manual reconciliation and depreciation work through automation",
    "Delivered role-based workflows for accounting, audit, procurement, inventory, and executive management teams",
  ],

  improvements: [
    "Automated reconciliation alerting instead of relying on periodic manual review",
    "More granular audit logging on ledger-affecting actions",
    "Broader automated test coverage on the approval-chain and posting logic, given how much financial correctness depends on it",
  ],
};
