---
owner: Jeremy
status: draft
last_reviewed: 2026-05-29
client: Macrofood
---

# Client Sales Handover — TLDR Brief
## Macro Frozen / Macro Food

_Completed by Sales before Product team involvement. Source: sales discussion + requirement gathering session._

---

## 1. Client Identity

| Field | Details |
|---|---|
| Company Name | Macro Frozen / Macro Food |
| Industry | B2B food distribution — frozen food, meat distribution |
| Location | Malaysia |
| Company Size | SME (small team, ~1 admin handling all orders) |
| Main ERP / System | SQL Accounting |
| Website | [To confirm] |

---

## 2. Points of Contact

| Name | Role | Contact | Notes |
|---|---|---|---|
| CJ Tan | Operations | [To confirm] | Day-to-day contact; confirmed June 4 meeting |
| David Chong | SQL / Tech | [To confirm] | SQL vendor coordination; shared vendor contact |
| Krystle Wong | Internal coordinator | [To confirm] | Relays decisions to team |
| Applle | Team member | [To confirm] | — |
| Boss / Owner | Decision-maker | [To confirm] | Final approver on pricing, scope, and approvals |

_Flag: Sales has only met a partial team. Finance lead, warehouse lead, and driver team not yet identified. Map is incomplete._

---

## 3. Deal Status

| Field | Details |
|---|---|
| Stage | Signed |
| Proposal Signed | 2026-05-20 |
| Package / Commercial | RM40,000 package + RM2,500/month subscription + RM500–700/month hosting (client-borne) |
| Payment Received | 50% upfront paid |
| NDA Status | `[ ] Signed` &nbsp; `[ ] Pending` &nbsp; `[ ] Not Required` &nbsp; `[x] Unknown` — **[Jeremy to confirm]** |
| Next Step | June 4, 3pm, F2F onboarding session |

---

## 4. What We Know About Their Business

Macro Frozen is a B2B meat and frozen food distributor in Malaysia, serving ~700 orders/month across two customer segments: retail (hotels, restaurants) and wholesale. All orders arrive via a single shared WhatsApp number and are manually keyed into SQL Accounting by one admin person. Products are weight-based — pork, chicken, duck, beef, and lamb — and final invoice amounts can only be confirmed after warehouse weighing, which typically happens the morning after goods are collected. The team is small and primarily Chinese-speaking; field salespeople currently call the office to check customer balances and product info instead of having direct system access.

---

## 5. The Problem They're Trying to Solve

One admin person handles all 700 orders/month — every order arrives via WhatsApp and gets manually re-keyed into SQL. This is error-prone, slow, and a single point of failure. Payment slips from customers also arrive via WhatsApp but reconciliation against invoices is done manually, creating roughly a one-week cash flow delay. The fresh weight workflow means invoices cannot be issued at the point of order — a manual update step is required after warehouse prep. On top of this, sales leads shared in WhatsApp groups are never formally assigned or followed up, so opportunities fall through the cracks.

---

## 6. What They Think They're Buying

- WhatsApp AI agent that captures orders and pushes Sales Orders directly into SQL — stated as top priority
- AR assistant for payment slip matching and bank reconciliation
- Fresh weight adjustment workflow before final Delivery Order and invoice
- Product catalogue generator (weekly price image for WhatsApp blast to customers) — **deal-closer, treat as Phase 1 table stakes**
- Price Update Assistant for bulk price changes (prices fluctuate with import costs)
- Outdoor sales assistant for real-time customer queries in the field (outstanding balances, pricing)
- Delivery route planner and proof-of-delivery photo capture
- Sales lead assignment and follow-up tracker

_Note: Sales implied all of the above are in scope. Some (route planning, churn detection) are stretch items — Product to clarify boundaries at Meeting 1._

---

## 7. Known Customisation Flags

- **Fresh weight billing workflow** — final quantity and price only confirmed after warehouse prep; Delivery Order issued before final invoice (non-standard document sequence)
- **Customer-specific pricing** — no standard price list; each customer has individual rates
- **Product SKU structure** — Item + Country + Brand format (e.g. P0710R for Rewar Sale)
- **Custom product specs per customer** — thickness in mm, packing weight tracked per preference
- **Consignment stock** — large customers on consignment arrangements (not standard invoice-on-delivery)
- **Multi-language voice messages** — orders may arrive as WhatsApp voice messages in Mandarin, Cantonese, Hokkien, Malay, or mixed
- **Churn detection** — alert when a customer's order value or frequency drops unexpectedly

---

## 8. Existing Systems (Known)

| Function | Current Tool | Notes |
|---|---|---|
| ERP / Accounting | SQL Accounting | Main system; version and hosting [To confirm] |
| Order intake | WhatsApp (1 shared number) | Text, voice messages, images |
| Customer communication | WhatsApp | Same number as order intake |
| Internal team comms | WhatsApp | Same number used internally too |
| Inventory / stock | SQL Accounting | — |
| Pricing | SQL Accounting + Excel | Maintained in both |
| Product catalogue | Manual image via WhatsApp | Created manually, sent weekly |
| Reporting / dashboards | [To confirm] | Likely manual / SQL reports |

---

## 9. Integration Requirements (Known or Suspected)

SQL Accounting is the primary integration target — customers, items, pricing, stock levels, Sales Orders, Delivery Orders, invoices, payment records, and outstanding balances all need to sync. SQL vendor contact was shared by David Chong on 2026-05-24; Ivan Chiang initiated the vendor conversation. SQL version, hosting type (on-premise vs cloud), and vendor cooperation level are still unknown. No other system integrations discussed.

---

## 10. Red Flags / Sensitivities

- **Scope creep** — boss/owner likely to request features beyond agreed scope in meetings; have a "Phase 2 parking lot" response ready
- **Single admin dependency** — the entire order operation depends on one person; business is fragile but this is not MAIA's problem to solve
- **Warehouse team** — described as non-technical and slow to adopt new processes; GRN and stock flows must be extremely simple and guided
- **Language barrier** — most of the team communicates in Mandarin; some requirements and edge cases may not surface in English meetings; consider Mandarin-speaking support during onboarding
- **Fresh weight workflow complexity** — easy to over-engineer; nail the scope clearly at Meeting 1
- **Brand sensitivity** — **MUST present as AutorunBiz PLT at all times. Never mention Mindhive. Do not wear Mindhive-branded clothing to client site.**
- **SQL vendor unknown** — timeline and willingness to cooperate on API access not yet established

---

## 11. Open Questions Sales Could Not Answer

- SQL version number, hosting type (on-premise vs cloud), and vendor company name / contact
- Full team headcount: how many in Finance, Warehouse, Drivers?
- Standard credit terms by customer segment (payment days)
- Target go-live date — is there a hard deadline?
- Who will be the internal project owner (day-to-day contact during onboarding)?
- NDA — has one been signed?
- Are there other related business entities that should be in scope?
- Exact approval trigger scenarios (overdue balance threshold, special pricing criteria)

---

## 12. Handover Logistics

| Field | Details |
|---|---|
| Meeting 1 Date | June 4, 2026, 3pm |
| Format | F2F |
| Sales AM | Jeremy (Mindhive / AutorunBiz PLT) |
| Pre-work Sent to Client | Pre-onboarding questionnaire sent 2026-05-22 via Lark — awaiting completion |
| Anything to Prepare | Request sample docs: Sales Order, Delivery Order, Invoice, payment slip, WhatsApp order message |

---

_Completed by: Jeremy | Date: 2026-05-20
Version: v0.1 — draft, pending NDA confirmation and questionnaire return_

## See Also

- [[context/memory]]
- [[Onboarding/[Survey] MAIA Pre-Onboarding Requirements Questionnaire - Macrofood]]
- [[Customer Narrative - Macrofood]]
- [[Onboarding Status]]
