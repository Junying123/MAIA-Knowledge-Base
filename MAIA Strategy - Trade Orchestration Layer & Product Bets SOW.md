---
owner: Gareth
status: approved
last_reviewed: 2026-02-23
tags:
  - strategy
  - product
  - roadmap
  - high-priority
---

# MAIA Strategy — Trade Orchestration Layer & Product Bets SOW

## Key Highlights

> [!tip] TL;DR — What This Changes for MAIA
> The B2B SaaS market is compressing: **point solutions die, orchestration platforms win**. MAIA must stop acting like a workflow chatbot and start acting like the **operating layer for B2B trade** — owning context, coordinating tools, and pricing on outcomes.

> [!abstract] The 3 Strategic Laws That Drive This
> - **Context Law** — Models commoditize. Whoever owns the richest trade context wins.
> - **Compression Law** — Fewer tools win because integration overhead is the real cost.
> - **Outcome Pricing Law** — Seat pricing breaks when agents do the work. Charge per invoice, payment matched, dispute resolved.

> [!warning] What to Avoid
> - Generic "AI assistant" without deep workflow execution
> - Shallow features competitors can copy in days
> - Anything that doesn't increase **context density** or **workflow depth**

---

## 1. Strategic Positioning

**Stop positioning as:** "workflow automation / chatbot / document AI"

**Start positioning as:** The **WhatsApp-first operating layer for B2B trade** (order → fulfilment → invoice → collections) that connects ERP + people + customers.

MAIA should look less like a chatbot and more like a **controlled execution engine with memory + audit**.

---

## 2. Your Moat — Context, Not Features

MAIA's context is unusually strong if built right:

- **Trade Graph** — buyer–seller relationships, price lists, product aliases, MOQs, credit terms, delivery patterns, payment behaviour, disputes, approvals
- **Conversation stream** (WhatsApp) + **document stream** (PO/DO/invoice/remittance) + **ERP stream**

Make "Unified Trade Memory" a first-class product: every customer becomes smarter over time, and switching means losing **learned business behaviour** — not just exporting a CSV.

---

## 3. Vertical AI Scorecard — How MAIA Should Score

| Dimension | Target |
|---|---|
| **Workflow depth** | MAIA handles 60%+ of order-to-cash steps without humans (except approvals/exceptions) |
| **Learning loops** | Every correction trains "how this company does business" (SKU aliases, approval habits, payment matching rules) |
| **Integration density** | Deep, bidirectional ERP + accounting + inventory + e-invoice + logistics events |
| **Governance / compliance** | Audit trails, approval logs, immutable invoice history, permissioning |

> [!important] Put governance + auditability into the core early — it becomes a trust moat in finance workflows.

---

## 4. Orchestration Architecture (6 Primitives)

| Primitive | MAIA Implementation |
|---|---|
| **Task decomposition** | "Send invoice + remind them" → MAIA breaks into steps, checks data, drafts, routes approval |
| **Agent-to-agent/tool communication** | MAIA agents talk to ERP connectors, document extractor, credit checker, collections agent |
| **State + memory** | Persistent customer memory: last dispute, promised payment date, special pricing, delivery exceptions |
| **Governance + trust** | Role-based permissions, approvals, audit logs, reversible actions, "why MAIA did this" |
| **Workflow coordination + event handling** | Event-driven: DO delivered → trigger invoice → trigger WhatsApp to buyer → start collection timer |
| **Resource optimisation** | Cheap models for routine extraction; expensive reasoning only for exceptions/escalations |

---

## 5. Pricing — Move to Outcomes, Not Seats

Outcome units are natural for MAIA:

- Per **order processed**
- Per **invoice generated/sent**
- Per **payment matched**
- Per **successful collection / days reduced**
- Per **dispute resolved**

Keep RM20k setup where it works commercially, but shift recurring toward **usage/outcome** so MAIA benefits when automation succeeds (and customers feel lower risk).

---

## 6. The 5 Product Bets (Double Down)

Recommended sequencing — do these in order to avoid rework:

1. **Trust Layer** (Spec #3) — prevents "agent chaos" in finance flows
2. **Unified Trade Memory** (Spec #1) — gives the system real context
3. **ERP/Accounting Integrations** (Spec #4) — makes MAIA operationally real
4. **Order-to-Cash Engine** (Spec #2) — automation on top of trusted + contextual data
5. **Outcome Metering** (Spec #5) — monetise + prove ROI cleanly

---

## Shared Platform Foundations (Applies to All Bets)

- **Event Bus** — publish/subscribe for MAIA domain events (`order_created`, `invoice_sent`, `payment_matched`, `approval_granted`, etc.)
- **Identity & Org** — multi-tenant org model + users + roles
- **Observability** — structured logs, tracing, metrics, alerting
- **Idempotency** — every externally-triggered action (e.g. send invoice) must be idempotent

**Global Definition of Done:**
- [ ] Unit + integration tests
- [ ] Telemetry events emitted
- [ ] Audit log coverage for sensitive actions
- [ ] RBAC checks in place
- [ ] Rollback plan / feature flag for risky changes

---

## Spec #1 — Unified Trade Memory (UTM)

**Goal:** Make MAIA the **system of context** for B2B trade.

### Core Entities (Trade Graph)
- Company (tenant), Users
- Counterparty (buyer/supplier), Contacts
- Product / SKU (with aliases)
- Price terms (price lists, discounts)
- Credit terms (limits, aging rules)
- Order, Delivery, Invoice, Payment, Dispute
- Conversation Thread (WhatsApp + email), Attachments (docs)

### Ingestion Sources
- WhatsApp message events
- Uploaded/emailed documents (PO/DO/Invoice/Remittance)
- ERP connector (from Spec #4)

### APIs
- `POST /ingest/message`
- `POST /ingest/document`
- `POST /ingest/erp_sync_batch`
- `GET /context_bundle?counterparty_id=&order_id=`
- `GET /search` (structured + semantic)
- `POST /merge_entities` (admin-only, audited)

### Acceptance Criteria
- New invoice ingested → linked to correct counterparty (or flagged) + SKU aliases resolved with confidence score
- Context bundle returns in **<300ms p95**
- Every merge/edit is auditable (who, when, before/after snapshot)

### Sprints (2 weeks each)
| Sprint | Focus |
|---|---|
| S1 | Schema + CRUD + basic ingestion (raw + extracted) |
| S2 | Linking logic (counterparty + SKU alias), provenance model |
| S3 | Semantic index + context bundle endpoint |
| S4 | Admin dedupe/merge UI + performance hardening |

---

## Spec #2 — Event-Driven Order-to-Cash Engine (O2C)

**Goal:** Make MAIA the **coordination layer** that executes the trade loop reliably with exception handling.

### Workflow States
`Draft → Approved → Fulfilled → Invoiced → Collected`

### Event Triggers
`order_created`, `approval_granted`, `delivery_confirmed`, `invoice_sent`, `payment_received`

### APIs
- `POST /workflow/instances`
- `POST /workflow/events`
- `GET /workflow/instances/:id`
- `POST /workflow/actions/:id/retry`
- `POST /workflow/actions/:id/cancel`

### Acceptance Criteria
- `invoice_sent` published twice → MAIA sends it **once** (idempotency)
- ERP API failure → retries, logs failure, workflow pauses safely
- Every automated action has: input evidence references + output record IDs + audit entry

### Sprints
| Sprint | Focus |
|---|---|
| S1 | Event schema + workflow instance engine (states, transitions) |
| S2 | Core actions (invoice generate/send, reminders) + idempotency keys |
| S3 | Exception handling + inbox UI |
| S4 | Tenant rules + autonomy boundary enforcement |

---

## Spec #3 — Governance, Approvals, Permissions & Audit (Trust Layer)

**Goal:** MAIA can be trusted for finance-critical workflows — **auditability, access control, explainability**.

### RBAC Roles
`Owner`, `Admin`, `Ops`, `Sales`, `Finance`, `Approver`, `Viewer`

### Approval Engine
- Policy rules: by amount threshold, by counterparty risk, by credit limit breach
- Multi-step approvals (1–3 layers)
- Delegation / reroute + out-of-office

### Audit Trail
- Immutable append-only log: data changes, approvals, automated actions, external calls
- Before/after diff for edits
- Evidence links to source docs/messages

### APIs
- `GET /me/permissions`
- `POST /approvals/request`
- `POST /approvals/:id/approve` / `reject`
- `GET /audit?object_type=&object_id=`
- `GET /explain?action_id=`

### Acceptance Criteria
- No privileged action occurs without permission check
- Every approval includes: approver identity + timestamp + reason/comment + linked evidence
- Audit log is tamper-resistant (append-only + restricted access)

### Sprints
| Sprint | Focus |
|---|---|
| S1 | RBAC enforcement middleware + role UI |
| S2 | Approval flows + inbox |
| S3 | Audit log store + query UI |
| S4 | "Why MAIA did this" explain panel |

---

## Spec #4 — Deep ERP/Accounting Integrations (Connector Framework)

**Goal:** Integrations become switching cost + workflow depth. Build a **connector platform**, not one-off scripts.

### Connector SDK Interface
- Auth: API keys, OAuth where applicable
- Read/write primitives: customers, products, price lists, orders, deliveries, invoices, payments, credit notes
- Sync modes: polling, webhook subscription (if supported)

### Initial Connectors (Pick 1–2)
- AutoCount / SQL Accounting variants
- Generic Accounting API adapter (CSV import/export baseline)

### APIs
- `POST /connectors/:type/install`
- `POST /connectors/:id/sync`
- `GET /connectors/:id/status`
- `GET /reconciliation?object_type=invoice`

### Acceptance Criteria
- Tenant installs connector and completes first sync in **<60 minutes**
- MAIA generates invoice → writes to ERP → stores ERP record ID
- Failures don't corrupt state; retries are safe and idempotent

### Sprints
| Sprint | Focus |
|---|---|
| S1 | Connector interface + credential vault + status tracking |
| S2 | First connector (read sync for customers/products) |
| S3 | Write paths (invoice, payment) + idempotency |
| S4 | Mapping UI + reconciliation view |

---

## Spec #5 — Outcome Instrumentation & Metering (Pricing Readiness)

**Goal:** Make MAIA measurable and billable on **work done** — not seats.

### Outcome Event Taxonomy
Each event includes: `tenant_id`, `actor (human/AI)`, object IDs, timestamps, cost attribution tags

| Event | Meaning |
|---|---|
| `invoice_generated` | AI drafted invoice |
| `invoice_sent` | Sent to buyer |
| `invoice_paid` | Payment received |
| `payment_matched` | Matched to invoice |
| `reminder_sent` | Collections nudge sent |
| `dispute_opened` / `dispute_resolved` | Dispute lifecycle |

### ROI Dashboard Metrics
- Time saved estimates (configurable assumptions)
- DSO (days sales outstanding) trend proxy
- Automation rate: % steps MAIA initiated vs human initiated

### APIs
- `POST /outcomes/events`
- `GET /outcomes/usage?range=`
- `GET /outcomes/roi?range=`
- `GET /outcomes/billing_export?month=`

### Acceptance Criteria
- Every automated workflow action emits a corresponding outcome event
- Usage counters match audit trail counts (reconcilable)
- Dashboard loads in **<2s** for typical tenants

### Sprints
| Sprint | Focus |
|---|---|
| S1 | Define taxonomy + instrument core flows |
| S2 | Metering ledger + aggregation endpoints |
| S3 | Usage dashboard |
| S4 | ROI dashboard + billing export |

---

## 30/60/90 Execution Plan

### Next 30 Days
- [ ] Define MAIA's "Trade Graph" schema (customers, SKUs, price rules, credit terms, invoice/payment entities, disputes)
- [ ] Ship audit log + approval routing v1 across the core flow

### Next 60 Days
- [ ] Make the system event-driven end-to-end (order → DO → invoice → reminders)
- [ ] Add learning loop hooks ("MAIA learned: this buyer always asks for split invoices / this SKU alias maps to X")

### Next 90 Days
- [ ] Launch outcome pricing pilot: pick 1–2 measurable units (e.g. per invoice sent + per payment matched)
- [ ] Publish 3 lighthouse case studies framed as outcomes: "DSO down X days", "AR headcount saved", "order errors reduced"

---

## See Also

- [[01 - MAIA Product/Overview/Known Limitations]]
- [[07 - Decisions/Decision Log]]
- [[02 - PM Playbook/Templates]]
- [[06 - Glossary & Taxonomy/Glossary]]
