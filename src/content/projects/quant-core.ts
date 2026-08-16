import type { CaseStudy } from "../types";

export const quantCore: CaseStudy = {
  slug: "quant-core",
  name: "Quant Core",
  tagline: "Batch Disbursement API",
  badge: "Backend",
  role: "Solo project",
  dates: "June 2026",
  githubLink: "https://github.com/Richswag009/quant-core",
  liveLabel: "Technical assessment project · runs locally via Docker",
  tech: ["Laravel 12", "PHP 8.2", "Laravel Sanctum", "SQLite", "Docker"],
  codeSample: {
    label: "POST /api/v1/batches",
    code: `{
  "source": "json",
  "items": [
    {
      "beneficiary_name": "Amaka Johnbull",
      "account_number": "0123456789",
      "bank_code": "044",
      "amount": 50000.00,
      "narration": "Loan disbursement March 2026",
      "external_reference": "REF_20260301_001"
    }
  ]
}`,
  },

  overview:
    "Quant Core is a tenant-aware API for institutional batch loan disbursements. Instead of posting payouts one at a time, an operations team uploads a batch of payout instructions — as JSON or a CSV file — has them validated, routes the batch through an approval step, and then posts it. Posting happens off the request thread: the API queues the work and a background worker processes each payout individually, so one bad line item in a 500-row batch doesn't take the other 499 down with it.",

  problem:
    "Institutional payouts don't happen one at a time — an operations team might need to disburse to hundreds of beneficiaries in one go. Doing that safely means more than looping over rows and calling a bank API: every item needs validating before anything is sent, a human needs to sign off before money moves, the system needs to know which specific items succeeded or failed afterward, and it needs to retry the failed ones without touching the ones that already posted. Quant Core was built to model that whole lifecycle, not just the happy path of “upload a file, get a response.”",

  myRole: [
    "Solo project — designed and built the entire system: domain modeling, multi-tenant architecture, validation, approval workflow, async job processing, idempotency, and audit logging.",
    "Built for a backend developer technical assessment, working from a written brief rather than a live employer codebase.",
  ],

  solution:
    "The API is a fairly conventional Laravel REST API on the surface — routes, form requests, resources — but the batch lifecycle is where the real work is. A batch moves through explicit states (draft, validated, pending approval, approved, posting, posted / partially posted, rejected, failed), and each transition is guarded: you can't submit an unvalidated batch, an operator can't approve their own submission, and a batch can't be posted twice. Posting itself is handed off to a queued job so the HTTP request returns immediately instead of blocking on however long it takes to “pay” every item in the batch.",

  workflowSteps: [
    "Operator uploads payout instructions as a JSON array or a CSV file — the API creates a batch and inserts one row per beneficiary in a single DB transaction.",
    "Operator validates the batch — each item is checked (10-digit account number, 3-digit bank code, positive amount, unique reference within the batch) and marked valid or invalid.",
    "Operator submits the batch for approval, moving it from validated to pending_approval.",
    "An approver or admin approves or rejects the batch. Rejecting is terminal and requires a reason.",
    "An admin posts the approved batch. The API records an idempotency key and dispatches a queued job, then returns immediately.",
    "The queue worker processes each item individually, marking each one posted or failed and updating the batch to posted or partially_posted.",
    "If any items failed, an admin can retry — only VALID/FAILED items are reprocessed. Items already POSTED are never touched again.",
  ],

  architecture: [
    {
      title: "Laravel 12 REST API",
      detail:
        "Thin controllers delegate to service classes (BatchService, BatchValidationService, BatchParserService) — controllers handle HTTP concerns, services own the business rules.",
    },
    {
      title: "Sanctum token auth",
      detail:
        "Stateless API token authentication. Login issues a token; every other route requires it.",
    },
    {
      title: "TenantScope global scope",
      detail:
        "Applied to every tenant-owned model (Batch, BatchItem, AuditTrail, IdempotencyKey) so queries are automatically filtered to the authenticated user's tenant.",
    },
    {
      title: "PostBatchJob (queued)",
      detail:
        "Dispatched after an approved batch is posted. Processes items individually and records a per-item outcome for each.",
    },
    {
      title: "IdempotencyKey table",
      detail:
        "One row per (tenant, post_batch_{batch_id}) pair, written inside the same transaction that flips the batch to POSTING — guards against double-dispatch.",
    },
    {
      title: "AuditTrail table",
      detail:
        "Every state change — created, validated, submitted, approved, rejected, posted, retried, job_failed — is written with the acting user, tenant, and metadata.",
    },
  ],

  diagram: [
    ["Upload (CSV / JSON)"],
    ["Create Batch (DRAFT)"],
    ["Validate Items"],
    ["Submit → Approve / Reject"],
    ["Post → Queue (PostBatchJob)"],
    ["Per-Item Posting", "Audit Trail"],
  ],

  technicalImplementation: [
    {
      title: "Models & scopes",
      detail:
        "Batch, BatchItem, Tenant, User, AuditTrail, IdempotencyKey. A shared TenantScope global scope is booted on every tenant-owned model rather than repeating a tenant_id filter in every query.",
    },
    {
      title: "Actions",
      detail:
        "CreateBatch and CreateLogin are single-purpose invokable classes — batch creation wraps the insert of all line items in one DB transaction so a batch is never left half-created.",
    },
    {
      title: "Services",
      detail:
        "BatchService orchestrates status transitions and role checks; BatchValidationService owns the per-item validation rules; BatchParserService turns an uploaded CSV into the same array shape the JSON path already expects, so the rest of the pipeline doesn't care which source a batch came from.",
    },
    {
      title: "Jobs",
      detail:
        "PostBatchJob is the only queued job — 3 tries, 60s timeout, [10, 30, 60]s backoff — with a failed() hook that flips the batch to FAILED and writes an audit entry when all retries are exhausted.",
    },
    {
      title: "Database",
      detail:
        "SQLite for this assessment, with composite indexes on (tenant_id, status) and (batch_id, status), and a unique constraint on external_reference.",
    },
  ],

  challenges: [
    {
      title: "Keeping a partially-failed batch queryable and re-processable",
      detail:
        "A batch of 500 items where 480 post and 20 fail isn't a simple pass/fail outcome. Status lives at both the batch level (partially_posted) and the item level (posted/failed), so the batch can be filtered down to just its failed items and know exactly what to retry.",
    },
    {
      title: "Not blocking the request on however long posting takes",
      detail:
        "If posting 500 items took even half a second each, a synchronous post endpoint would hang for minutes. Posting is queued instead — the endpoint returns 202 immediately and the actual work happens in PostBatchJob.",
    },
    {
      title: "CSV and JSON needing to behave identically downstream",
      detail:
        "BatchParserService converts a CSV into the same associative array shape as the JSON payload before batch creation ever sees it, so validation, posting, and retries don't need to know which format a batch originally came in.",
    },
  ],

  decisions: [
    {
      title: "Why SQLite instead of PostgreSQL",
      detail:
        "Chosen per the assessment brief to keep the Docker setup dependency-free. In a real deployment this would be PostgreSQL with connection pooling — SQLite's single-writer model doesn't hold up under concurrent queue workers at scale.",
    },
    {
      title: "Why a database queue instead of Redis",
      detail:
        "Laravel's database queue driver needed no extra infrastructure beyond the one SQLite file the rest of the app already uses. It's the right trade for a small assessment project; a production system moving real money would want Redis or SQS.",
    },
    {
      title: "Why an idempotency key instead of just checking batch status",
      detail:
        "Checking that a batch isn't already APPROVED isn't enough on its own — two near-simultaneous requests could both pass that check before either updates the row. Writing the idempotency key inside the same transaction that flips the status closes that window.",
    },
    {
      title: "Why separate validation from creation",
      detail:
        "Operators can upload a batch, see exactly which rows are wrong, and re-validate after fixing the source data — without re-uploading the whole file. Re-validation also skips items already marked valid, so a partial fix doesn't reset items that were already correct.",
    },
  ],

  failureScenarios: [
    {
      title: "An item fails validation",
      detail:
        "It's marked INVALID with a validation_error string explaining why (e.g. “account_number must be exactly 10 digits”). The batch stays in DRAFT — it can't be submitted until every item is valid.",
    },
    {
      title: "An approver rejects the batch",
      detail:
        "REJECTED is a terminal state with a required rejection reason. A rejected batch can be deleted, but it can't be resubmitted — a new batch has to be created.",
    },
    {
      title: "An individual payout fails during posting",
      detail:
        "The posting step simulates realistic failure and timeout conditions at a configurable rate. A failed item is marked FAILED with the error message recorded; the batch moves to PARTIALLY_POSTED rather than failing the whole batch.",
    },
    {
      title: "The posting job itself crashes or exhausts its retries",
      detail:
        "PostBatchJob's failed() hook fires after 3 tries, sets the batch to FAILED, and writes a job_failed audit entry — so a total posting failure is distinguishable from a partial one.",
    },
    {
      title: "Someone calls post on the same batch twice",
      detail:
        "The second call finds the idempotency key already exists for that tenant and is rejected before a second job is ever dispatched.",
    },
    {
      title: "Retrying a batch that already has posted items",
      detail:
        "The retry path only re-dispatches PostBatchJob against items still in VALID or FAILED status — items already POSTED are excluded from the query entirely, so a retry can't accidentally re-pay someone.",
    },
  ],

  securityReliability: [
    {
      title: "Tenant isolation",
      detail:
        "TenantScope is a global Eloquent scope, not something each controller has to remember to apply — every query against a scoped model is automatically filtered to the authenticated user's tenant. There's no code path where forgetting a where() clause leaks another tenant's batches.",
    },
    {
      title: "Role-based authorization",
      detail:
        "Operator / approver / admin is enforced in the service layer, not just hidden in the frontend — an operator's token literally cannot approve or post a batch, regardless of what the client sends.",
    },
    {
      title: "Consistent error handling",
      detail:
        "A single response builder maps exceptions to JSON responses and status codes. In production it returns a generic message instead of the raw exception, so internal errors aren't leaked to API consumers.",
    },
    {
      title: "Operator visibility scoping",
      detail:
        "Operators only see batches they created; approvers and admins see everything in their tenant. This is enforced as a query scope, not a client-side filter.",
    },
  ],

  testing:
    "Both included test files are the default Laravel scaffolding, not tests written against the batch lifecycle. That's an honest gap — the state machine, the idempotency guard, and the tenant scope are exactly the kind of logic that should have feature tests around it, and they don't yet. It's the first thing listed under what I'd improve, not something I want to imply is covered.",

  tradeoffs: [
    {
      title: "Roles as a string enum, not a permissions table",
      detail:
        "operator/approver/admin is stored as a plain enum column. It's fast to reason about and enough for three fixed roles, but it doesn't scale to per-tenant custom roles or fine-grained permissions without a rewrite.",
    },
    {
      title: "A retry endpoint whose controller wiring is incomplete",
      detail:
        "The retry logic lives in BatchService — filtering to VALID/FAILED items and re-dispatching the job — but the corresponding API route points at a controller method that isn't wired up yet. The service-layer logic is real; the HTTP wiring for that specific route isn't finished.",
    },
    {
      title: "A simulated posting service instead of a real disbursement provider",
      detail:
        "There's no Paystack/Flutterwave/NIBSS integration — posting is a configurable random failure/timeout simulator. That's intentional for an assessment scope, but it means the posting step has no real settlement behavior behind it yet.",
    },
  ],

  whatILearned:
    "The interesting part of this project wasn't the CRUD — it was realizing how much of a “simple” batch API is actually state-machine design. Almost every bug I caught myself about to write came from treating a batch's status as decoration instead of as the thing that gates every action. Once I started asking what status a batch has to be in for a given action to be legal, and what should happen to that status afterward, the idempotency key and the retry-filtering logic followed pretty naturally from that same question. I also came away with a much more concrete feel for why posting inside the request is the wrong instinct the moment you're dealing with more than a handful of items — queuing isn't just about not blocking the client, it's about being able to fail one item without failing all of them.",

  improvements: [
    "Write feature tests around the batch state machine, idempotency, and tenant isolation — the single biggest gap in the project right now.",
    "Wire up the missing retry controller method so the documented retry endpoint actually works end to end.",
    "Replace the simulated posting service with a real disbursement provider (Paystack, Flutterwave, or NIBSS).",
    "Move from SQLite to PostgreSQL with a Redis-backed queue for anything beyond assessment scope.",
    "Add a proper permissions table if roles need to grow beyond the fixed operator/approver/admin set.",
  ],
};
