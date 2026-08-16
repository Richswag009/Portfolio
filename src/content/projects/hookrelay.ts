import type { CaseStudy } from "../types";

export const hookrelay: CaseStudy = {
  slug: "hookrelay",
  name: "HookRelay",
  tagline: "Webhook Delivery Service",
  badge: "Backend",
  role: "Solo project",
  dates: "May – June 2026",
  githubLink: "https://github.com/Richswag009/hookrelay",
  liveLabel: "Runs locally via Docker Compose + Maven",
  tech: ["Java", "Spring Boot 3", "PostgreSQL", "Redis", "Docker"],
  codeSample: {
    label: "POST /api/events",
    code: `{
  "type": "payment.success",
  "payload": {
    "amount": 500000,
    "currency": "NGN",
    "reference": "TXN_001"
  }
}

→ 202 Accepted
{
  "id": "evt_...",
  "type": "payment.success",
  "status": "QUEUED"
}`,
  },

  overview:
    "HookRelay sits between an event source and a merchant's webhook endpoint. Instead of a system calling a merchant's URL directly and losing the event if that server happens to be down, HookRelay stores the event first, then delivers it asynchronously — retrying on failure until it either succeeds or exhausts a fixed retry schedule and lands in a dead letter queue for manual replay.",

  problem:
    "Webhooks are usually the least reliable part of an integration, because the thing receiving them is someone else's server — it goes down, times out, gets redeployed, whatever. If you call a merchant's endpoint directly and it's unavailable at that exact moment, the event is just gone unless retry logic was built for it. HookRelay exists to be that retry logic as a standalone service: producers call one reliable API, and HookRelay takes on the job of getting the event delivered even if the destination is flaky.",

  myRole: [
    "Solo project — designed and built the whole service: domain model, delivery worker, retry policy, HMAC signing, dead letter queue, and a companion mock-merchant test harness.",
  ],

  solution:
    "Event ingestion and delivery are deliberately decoupled. Submitting an event writes it to PostgreSQL, creates a delivery row for every endpoint subscribed to that event type, pushes each delivery's ID onto a Redis list, and returns 202 — all before any HTTP call to a merchant is made. A scheduled worker pops delivery IDs off that queue on a fixed interval, signs the payload with HMAC-SHA256, and posts it to the merchant's URL. A delivery that fails is scheduled for a later retry with a growing delay; one that fails six times moves to a dead letter queue instead of retrying forever.",

  workflowSteps: [
    "Event producer calls the events endpoint with an event type and JSON payload, authenticated via an API key and merchant ID.",
    "HookRelay saves the event, looks up active endpoints subscribed to that event type, and creates one delivery per endpoint.",
    "Each delivery's ID is pushed onto a Redis queue. The API returns 202 immediately — no waiting on the merchant.",
    "A scheduled worker pops a delivery ID off the queue every 10 seconds and signs + posts the payload to the merchant's endpoint.",
    "On a 2xx response the delivery is marked SUCCESSFUL and the attempt is logged. On failure it's marked FAILED with a scheduled retry time.",
    "A second scheduler runs every 30 seconds, finds failed deliveries whose retry time has passed, and pushes them back onto the queue.",
    "After 6 failed attempts, the delivery moves to a dead letter state instead of retrying again — from there it can be replayed or dismissed.",
  ],

  architecture: [
    {
      title: "REST API (Spring Boot)",
      detail:
        "Separate controllers for merchants, endpoints, events, deliveries, and the dead letter queue — thin controllers over an interface-plus-implementation service layer.",
    },
    {
      title: "API key authentication filter",
      detail:
        "A servlet filter checks an API key and merchant ID header on every request except registration and docs, resolving the merchant via a BCrypt-checked key hash before the request reaches a controller.",
    },
    {
      title: "PostgreSQL via Spring Data JPA",
      detail:
        "Merchant, Endpoint, Event, Delivery, and DeliveryAttempt entities. Hibernate manages the schema rather than hand-written migrations.",
    },
    {
      title: "Redis delivery queue",
      detail:
        "A single Redis list holding delivery IDs waiting to be processed — the actual delivery data stays in PostgreSQL; Redis only carries the work queue.",
    },
    {
      title: "Scheduled delivery worker",
      detail:
        "Polls the queue every 10 seconds and executes deliveries on a virtual-thread-per-task executor, plus a second scheduled task every 30 seconds that requeues failed deliveries whose retry time has passed.",
    },
    {
      title: "HMAC-SHA256 signing",
      detail:
        "Signs the timestamp and payload together with the endpoint's own secret before every delivery attempt, so the merchant can verify authenticity independent of transport security.",
    },
  ],

  diagram: [
    ["POST /api/events"],
    ["Save Event (Postgres)", "Create Delivery rows"],
    ["Push to Redis Queue"],
    ["Worker (every 10s)"],
    ["Sign (HMAC) + POST to Merchant"],
    ["Delivered", "Retry / Dead Letter"],
  ],

  technicalImplementation: [
    {
      title: "Domain entities",
      detail:
        "Merchant, Endpoint, Event, Delivery, DeliveryAttempt — JPA entities with UUID primary keys. Delivery tracks attemptCount and nextRetryAt directly on the row rather than in a separate scheduling table.",
    },
    {
      title: "Services",
      detail:
        "The event service creates events and fans them out to subscribed endpoints; the delivery service owns dead-letter listing, replay, and dismiss; the merchant service handles registration and BCrypt-based API key verification.",
    },
    {
      title: "Worker",
      detail:
        "A dedicated retry-policy class wraps each individual HTTP attempt with its own short-lived retry and backoff before the delivery-level retry schedule even comes into play.",
    },
    {
      title: "Signing",
      detail:
        "The HMAC signature generator is a small, dependency-free static method — deliberately minimal, since it's the piece a merchant's own code needs to reimplement to verify signatures.",
    },
    {
      title: "Mock merchant",
      detail:
        "A separate companion Spring Boot app with a configurable failure simulator — failure, timeout, and slow-response rates set via config — used to exercise the retry and dead-letter paths without depending on a real third party.",
    },
  ],

  challenges: [
    {
      title: "Not losing an event between “received” and “delivered”",
      detail:
        "The event and its per-endpoint delivery rows are written to PostgreSQL before anything is pushed to Redis or attempted over HTTP. If the process crashes right after accepting a request, the event still exists in the database — it just hasn't been picked up by the worker yet.",
    },
    {
      title: "Retrying the delivery without retrying forever",
      detail:
        "A merchant that's genuinely gone shouldn't queue up retries indefinitely. The scheduled retry delay grows from 30 seconds up to 5 hours across five attempts, and a sixth failure moves the delivery to the dead letter queue instead of scheduling another retry.",
    },
    {
      title: "Distinguishing “retry this” from “don't bother”",
      detail:
        "The retry policy only retries network-level failures, rate limits, and server errors. A bad-request or auth error means the request itself is wrong — retrying it would just fail the same way again, so those are left alone rather than burning through the retry budget.",
    },
  ],

  decisions: [
    {
      title: "Why store the event before attempting delivery",
      detail:
        "If delivery were attempted synchronously inside the request, a slow or dead merchant would make event ingestion itself unreliable. Persisting first means the producer's request only depends on PostgreSQL and Redis being up — not on the merchant.",
    },
    {
      title: "Why at-least-once instead of exactly-once delivery",
      detail:
        "Exactly-once delivery across an unreliable network is a much harder guarantee to make honestly. At-least-once — where a merchant might occasionally see the same event twice — is the safer failure mode for most business events, and merchants can dedupe on the delivery ID if they need to.",
    },
    {
      title: "Why Redis for the queue instead of just polling Postgres",
      detail:
        "A Redis list gives a cheap, fast hand-off between “event accepted” and “worker picks it up” without polling the events table on a tight loop. PostgreSQL stays the source of truth; Redis only carries disposable work-queue state.",
    },
    {
      title: "Why HMAC-SHA256 over just checking the API key again",
      detail:
        "The API key authenticates HookRelay to the merchant when an endpoint is registered, but it says nothing about whether a specific incoming request actually came from HookRelay. Signing the payload lets the merchant verify each individual delivery, and including the timestamp in the signed content lets them reject replayed requests.",
    },
  ],

  failureScenarios: [
    {
      title: "Merchant returns a 500",
      detail:
        "Counted as a failed attempt. The immediate-retry layer will retry it a couple of times within that single delivery attempt; if it keeps failing, the delivery is marked failed with a scheduled retry time.",
    },
    {
      title: "Merchant times out or is unreachable",
      detail:
        "Caught as a network-level exception, which the retry policy treats the same way as a server error — retried immediately a few times before falling back to the scheduled retry.",
    },
    {
      title: "Merchant is down for hours",
      detail:
        "The scheduled retry delay (30s → 5m → 30m → 2h → 5h) is built for exactly this — spacing retries out so a prolonged outage doesn't turn into a tight retry loop hammering a server that's already struggling.",
    },
    {
      title: "Merchant never recovers",
      detail:
        "After the sixth failed attempt the delivery moves to the dead letter queue and stops retrying automatically. It's visible through the dead letter endpoint rather than silently dropped.",
    },
    {
      title: "Merchant comes back after landing in the dead letter queue",
      detail:
        "Replaying a dead-lettered delivery resets its attempt count, clears the scheduled retry time, and pushes it back onto the Redis queue — it goes through the exact same delivery path as a brand-new event.",
    },
  ],

  securityReliability: [
    {
      title: "API key authentication",
      detail:
        "A filter checks the API key and merchant ID on every request except registration and docs, resolving the merchant and rejecting the request before it reaches a controller if the key doesn't match.",
    },
    {
      title: "Keys and secrets are hashed, not stored in plaintext",
      detail:
        "Merchant API keys and endpoint signing secrets are stored as BCrypt hashes — the plaintext value is only ever shown once, at creation time, in the response body.",
    },
    {
      title: "HMAC-SHA256 payload signing",
      detail:
        "Every delivery is signed with the endpoint's own secret, so a merchant can verify a webhook actually came from HookRelay rather than trusting the network alone.",
    },
    {
      title: "Store-before-deliver durability",
      detail:
        "Because the event is persisted before delivery is attempted, a crash or restart of the worker process doesn't lose in-flight events — they're still sitting in PostgreSQL waiting to be picked back up.",
    },
  ],

  testing:
    "There's no meaningful automated test suite here yet — the included test classes are the default Spring Boot context-loads stub, not tests against the retry logic, signing, or delivery worker. The mock-merchant service with its configurable failure and timeout rates was genuinely useful for manually exercising the retry and dead-letter paths during development, but it isn't wired into an automated suite — that's real, honest debt rather than something I'd want to imply is covered.",

  tradeoffs: [
    {
      title: "Hibernate schema auto-update instead of versioned migrations",
      detail:
        "Convenient for a solo project moving fast, but it means there's no reviewable migration history and no safe rollback path — the kind of thing that needs to change before this touches a real production database.",
    },
    {
      title: "One Redis client path bypasses the shared configured bean",
      detail:
        "The delivery worker and dead-letter replay path both correctly use the properly wired Redis client. The event service's own constructor instantiates a fresh, disconnected one instead — an inconsistency in how the Redis client is wired that I'd clean up before trusting that path fully.",
    },
    {
      title: "No dedicated integration tests around the retry / dead-letter path",
      detail:
        "The mock-merchant harness proves the mechanism works when driven manually, but without an automated test suite the retry schedule and dead-letter transition aren't regression-proof.",
    },
  ],

  whatILearned:
    "Building the delivery worker made the difference between “retry logic” and “a retry policy” really concrete for me — it's not enough to just retry on any exception, because retrying a bad request six times doesn't help anyone, and retrying a genuinely dead merchant every few seconds just adds load to a system that's already struggling. Separating the two retry layers — an immediate, short retry inside a single delivery attempt, and a slower, scheduled retry across attempts — came directly out of realizing those are actually two different problems on two different time scales. I also got a much better feel for why “at-least-once” is the honest thing to promise instead of “exactly-once”: anything stronger would have meant either a much more complex coordination scheme or quietly lying about the guarantee.",

  improvements: [
    "Write an actual test suite — unit tests for the retry policy and signature generation, and integration tests around the delivery worker's retry and dead-letter transitions.",
    "Fix the event service to use the shared, properly configured Redis client instead of constructing its own.",
    "Replace Hibernate's automatic schema updates with versioned migrations before this goes anywhere near a real database.",
    "Add structured logging and basic metrics around delivery success/failure rates — right now visibility into what the worker is doing comes from console output.",
    "Add per-endpoint rate limiting so one slow merchant can't monopolize worker time.",
  ],
};
