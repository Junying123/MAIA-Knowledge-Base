---
owner: Gareth
status: draft
last_reviewed: 2026-05-10
client: GST Fine Foods
meeting_date: 2026-05-04
transcript_ref: "[[GST Fine Foods __ MH Requirements Gathering (Online) v2-transcript 2]]"
pain_points_sources:
  - "[[GST Fine Foods __ MH Requirements Gathering (Online) v2-transcript 2]]"
  - "[[GST Fine Foods — GTM Brief Context and Unclear Items]]"
---

# Requirement Gathering Output — GST Fine Foods — 2026-05

| Field | Details |
|-------|---------|
| **Client** | GST Fine Foods (trading division of GST Group) |
| **Meeting date** | 2026-05-04 |
| **Attendees** | Ivan, Brandon, Gareth (Mindhive) · Soo Chin/Tim Wong (CEO/HOD), Joey Ong (Sales), Miss Lee (Finance), Tim (IT), Jude (IT) |
| **Purpose** | Post-sign requirement gathering — business workflow discovery, Phase 1 scope confirmation, SAP integration groundwork |
| **Raw transcript** | [[GST Fine Foods __ MH Requirements Gathering (Online) v2-transcript 2]] |

---

## Pain Points — From Meeting Transcript

### Order Management Chaos
- Multiple WhatsApp groups per customer (each customer has their own group) with no central tracking — orders slip through, especially when volume is high
- Sales coordinators manually key orders from WhatsApp/email into SAP — misses happen when 10 orders come in and 8 get keyed, 2 are lost
- Customers write item names in different ways — one item has 10 different descriptions across customers; no standardised matching
- Some customers send orders via handwritten notes (Penang branch), email, phone call, voice message — no single intake channel

### Stock Availability and Overselling
- No real-time stock reservation when an order is committed — one salesperson commits stock, another salesperson sells the same stock, the first salesperson's customer can't be fulfilled
- Stock is managed in raw form (e.g., whole fish) but sold in processed form (e.g., fillet) — conversion is manual arithmetic, not system-driven
- SAP captures stock by weight (kg) but whole fish comes in by piece, causing misalignment — "SAP setup doesn't match business process" (Ivan's words)
- When stock doesn't move, there's no automated alert — item can sit for 3 months before anyone notices, by then the opportunity to push to a customer is gone

### Sales-Finance-Ops Communication Breakdown
- Credit approval process is fully manual: salesperson fills a form, sends via WhatsApp to manager to sign PDF, manager signs and sends back, finance manually approves in SAP
- Outdoor salespeople have no SAP access — they call or WhatsApp the office to request invoice PDFs; invoices are sometimes sent to wrong person; delays of 1-2 days common
- SOA (Statement of Account) is manually generated per customer and emailed — time-consuming, no self-service for customers
- When a customer pays, the notification goes via WhatsApp to the salesperson who then notifies finance — fragmented trail

### Product Complexity
- GST does fish cutting and repackaging: whole salmon → fillet + head + tail (different SKUs, different prices)
- Conversion factor calculation (e.g., 30kg whole fish → 20kg fillet yield) is done by mental arithmetic or experience — no system capture
- Repackaging also occurs: 1kg raw into 200g retail packs (different SKU)
- ~10 new SKUs added per month
- Some seafood (e.g., lobster, squid) is sold by piece but priced by kg — inconsistency in SAP UOM

---

## E2E Workflow — B2B Sales Order Flow (Main Priority: Penang Branch)

> Penang branch is Phase 1 target — ~3,000+ orders/month, 4 sales + 5 sales coordinators, primarily B2B (hotel, restaurant, supermarket).

| Step | Today (Current) | With MAIA |
|------|----------------|-----------|
| Customer sends PO | WhatsApp (to customer-specific group), email, handwritten note, voice message | WhatsApp → MAIA auto-captures and parses |
| Item matching | Sales coordinator manually matches customer item description to SAP item code | MAIA AI matches + human reviews before confirm |
| Stock check | Sales coordinator calls/WhatsApp to stores/logistics to check if raw stock can cover processed order | MAIA shows available stock + conversion estimate |
| Price lookup | SAP Blanket Agreement per customer auto-fills price; edge cases manual | MAIA pulls from SAP price list via integration |
| SO creation | Sales coordinator keys into SAP manually | MAIA creates SO; syncs to SAP |
| Credit check | Salesperson fills credit approval form → WhatsApp to manager → PDF sign → back to finance | MAIA: credit limit check on SO creation, approval workflow in-platform |
| Delivery | Logistics team prepares based on SAP SO | Unchanged in Phase 1 (logistics module Phase 2) |
| Invoice request | Outdoor salesperson WhatsApps office → office generates from SAP → sends PDF back | Salesperson generates invoice PDF direct from MAIA on mobile |
| Payment notification | Customer tells salesperson → salesperson WhatsApps finance | Salesperson creates payment receipt in MAIA; finance reviews in platform |
| SOA | Finance manually runs SAP Crystal Report → emails to customer | MAIA auto-emails SOA monthly; customer self-service link (Phase 2) |

---

## Captured Requirements

### Sales Workflow
- AI-assisted PO parsing from WhatsApp (customer sends freeform order text → MAIA maps to SKU + price)
- Stock availability check at time of SO creation (based on raw material, with conversion estimate)
- Stock reservation on SO confirm to prevent overselling between salespeople
- Price pulling from SAP Blanket Agreement per customer (customer-specific pricing, not tiered)
- Quotation flow: ~10-20 quotations per salesperson per month; approval before sending to customer required
- Product photos on item card (used selectively for new SKU introductions to retail/supermarket customers)
- Substitute item suggestion when stock is unavailable (salesperson to confirm with customer before applying)
- Outdoor salesperson mobile access: SO viewing, invoice PDF self-generation, stock check

### Finance Workflow
- Credit block enforcement at SO creation stage (auto-block if overlimit, requires manager approval to proceed)
- Credit approval workflow: in-platform form → manager approval → unblock
- Payment receipt capture in MAIA (salesperson creates, finance reviews)
- Auto-email SOA to all customers monthly (from SAP Crystal Report data; Phase 2: in-platform SOA with secure customer link)
- Individual invoice per delivery (not consolidated), unless customer requests consolidated

### Logistics / Warehouse Workflow
- Stock transformation recording: raw input → processed output (e.g., whole salmon → fillet + head, with yield percentage)
- Conversion factor must lock cost correctly: total raw cost ÷ output quantity = processed item cost
- Repackaging: raw bulk → retail portion packs (new SKU)
- Slow-moving stock alert: if item has no movement for X days (configurable), notify relevant salesperson/manager — **Phase 2, requires SAP Batch data**
- Expiry date / batch tracking — **Phase 2, prerequisite for aging feature**

### Integration Requirements
- SAP B1 v10.191 (on-premise, Penang + KL on same database, separate company codes P30/K30)
- SAP B1 IT vendor: need to involve them to scope integration approach (API, DB connector, or middleware)
- Data to pull from SAP: item master, customer master (with credit limit and terms), Blanket Agreements (price lists), AR balances
- Data to push to SAP: Sales Orders, Payment receipts
- SAP Crystal Reports PDF format: GST wants MAIA to match their existing SO/DO/Invoice format (they replaced SO/DO numbering on invoice to reduce customer confusion)
- Confirm: Penang and KL use same SAP database with separate company codes (not two separate SAP instances)

### Special Workflows
- Fish cutting: whole fish in → fillet + head + tail out; each output is a separate SKU with locked cost; total input cost = sum of output costs
- Repackaging: 1kg bulk → 200g retail (new SKU, yield-based cost split)
- Substitute item handling: when item OOS, suggest nearest substitute (same species, different size); salesperson communicates to customer before confirming
- Pre-order without confirmed PO: occasional use case — not frequent enough to be Phase 1 priority; no tracking mechanism needed now
- Planning order data pull: GST team pulls historical sales + production data to plan purchasing; need Excel export of relevant data — **clarify exact data fields with ops team** (this was flagged as unclear in the SOW)

---

## Gaps & Open Questions

| # | Question | Raised by | Status |
|---|----------|-----------|--------|
| 1 | Which SAP IT vendor is GST using? Need contact to schedule integration scoping call this week | Ivan | open |
| 2 | Exact data fields needed for "planning order" Excel export (SOW item was unclear — possibly misinterpreted) | Soo Chin / Ops team | open — needs follow-up |
| 3 | Does GST want MAIA to match their existing SAP Crystal Reports PDF layout for SO/Invoice? | Ivan | open — need sample documents |
| 4 | What is the yield conversion factor for each key SKU? (e.g., 30kg whole salmon → 20kg fillet — is this a fixed % or variable?) | Ops/Inventory team | open |
| 5 | Confirm: Penang P30 and KL K30 — separate customer masters (no shared customers across branches)? | Ivan confirmed verbally but needs formal confirmation | open |
| 6 | Does KL follow same workflow as Penang? Or does KL have different SOP for order intake? | Not covered in this session | open — KL-specific session needed |
| 7 | SAP UAT environment access — can Mindhive get SSH tunnel access to review current SAP configuration? | Ivan | open — GST IT to set up |
| 8 | Is Batch/Serial Number tracking currently active in SAP? (prerequisite for Phase 2 expiry/aging feature) | Ivan | open |
| 9 | Tender/quotation PDF design — GST mentioned wanting a specific design; needs a follow-up deep dive session | Soo Chin | open — separate session |
| 10 | MetaBusiness phone number — confirm GST will purchase a new company SIM (not personal number) for WhatsApp Business | Ivan clarified verbally | open — GST to action |

---

## Client Preparation — Samples & Documents (Briefed)

MAIA has briefed GST Fine Foods to prepare the following samples. Check off when received.

### Documents
- [ ] **3–5 anonymised customer PO files** (Excel preferred) — to understand item description formats, line item count, and how customers order
- [ ] **Sample SAP SO / Delivery Order / Invoice PDF** — to understand current document format; MAIA may need to replicate layout
- [ ] **Blanket Agreement screenshot or export** — to understand how customer-specific pricing is set up in SAP
- [ ] **Credit approval form** (current WhatsApp form) — to replicate in MAIA approval workflow

### Data Exports from SAP
- [ ] **~200 product items** — item code, description, unit of measure, sale price, category
- [ ] **~50 customers** — name, address, credit terms (30/60/90 day), credit limit, branch (P30 or K30)
- [ ] **Price lists / Blanket Agreements** — customer pricing data

### Process Documentation
- [ ] **Screen recording of SAP order entry process** — how a sales coordinator keys in an order today, end to end
- [ ] **SSH tunnel access to SAP UAT environment** — so Mindhive can review SAP configuration (company codes, UOM setup, item master structure)

---

## Demo Readiness — Product Demo

### Client Samples → What We Show in Demo

| Product demo scenario | Client sample / data to have first | If missing |
|----------------------|-----------------------------------|------------|
| WhatsApp PO parsing + AI item matching | 3–5 sample customer PO Excel files | Demo with synthetic fish product names |
| Stock availability check (raw → processed) | Product list with yield conversion factors | Demo with fixed assumed yield % |
| Customer-specific pricing auto-fill | Blanket Agreement data or price list export | Demo with dummy tiered pricing |
| Credit block + approval workflow | Credit approval form + sample customer with overlimit | Demo with synthetic customer |
| Invoice PDF self-service (mobile) | Sample SAP Invoice PDF (for format reference) | Demo with MAIA default format |
| SOA auto-email | Customer list with emails | Demo with 2–3 synthetic customers |

### Scenarios to Rehearse / Build in Demo Environment
- [ ] WhatsApp order intake → AI parsing → SO creation
- [ ] Stock check with raw-to-processed conversion
- [ ] Credit limit block → approval → release
- [ ] Outdoor salesperson mobile: view SO, generate invoice PDF
- [ ] Payment receipt creation by salesperson
- [ ] SOA monthly auto-email trigger

---

## Next Action Checklist

> Full tracker: `[[7May26 - GST X MAIA Gaps - Sheet1.csv]]` — 109 items across Pre-Phase 1 Gates, Integration, Build, PDF, Data Migration, UAT.
> Below = critical path only, sourced from CSV statuses as of 7 May 2026.

---

### 🔴 Blocking — In Progress (unblock before build starts)

| Item | Owner | Notes |
|------|-------|-------|
| **Schedule 3-party meeting: GST + MH + SAP vendor** | MH / GST | Confirm SAP B1 Service Layer + BA API access. Nothing else sized until done. |
| **Establish SAP VPN from AWS** | GST + SAP Vendor | Prerequisite for all integration build |
| **Obtain UAT SAP B1 account** for MH engineers | GST | Read/write access needed for dev |
| **Confirm historical order data availability** (6–12 months SO/QT) | GST | Needed for preference mining data load |

---

### 🟡 Not Started — GST Must Deliver

| Item | Notes |
|------|-------|
| Confirm SAP B1 Service Layer deployed + network-accessible from AWS | Ask SAP vendor; if not deployed, assess fallback (Excel sync) |
| **Export sample data**: customer master, item master, price lists, open SOs | MH to provide exact field template |
| **Provide all 6 Crystal Report PDF samples**: QT, SO, DN/DO, Invoice, Pick List, CN | Both Penang + KL branches |
| Confirm migration scope sign-off (3 parties) — customer, item, BAs, open SOs, balances, historical | Gate before build starts |
| **Register company phone SIM** for WABA — dedicated number, NOT personal | Start now — Meta KYC takes time |
| **Create AWS account** with company billing | — |
| **OpenAI API key** | MH / GST to provision |

---

### 🟡 Not Started — Mindhive Build (gates must close first)

| Category | Action | Est. |
|----------|--------|------|
| Infra | Provision AWS environment; set up Meta Business + WABA | — |
| SAP Read | Service Layer connector + sync: customer, item, inventory, price lists, BAs, credit standing | 6 tasks |
| SAP Write | Push SO, Invoice, DN, CN, Payment Entry → SAP | 6 tasks |
| Build | **Blanket Order doctype** (BA abstraction layer above SO; scoping blast radius) | ~10 md |
| Build | **Branch/Outlet doctype** (P30/K30 separation across all transactional docs) | ~5 md |
| Build | Actual picked qty capture on pick list → flows to DN | — |
| Build | DN creation from Pick List spanning multiple SOs | ~2 md |
| Build | Mark Pick List as Completed (UI for actual picked qty) | ~1 md |
| Build | Auto-pricing hook: pull Blanket Agreement price on QT/SO creation | ~2 md |
| Build | **Customer preference semantic capture** on remarks (RAG, weight by recency+frequency) | ~3 md |
| PDF | All 6 document PDFs matched to Crystal Report layout (QT, SO, DN, Invoice, Pick List split, CN) | 6 tasks |
| Data | Full migration: customer, item, BAs, open SOs, balances, historical orders | 6 tasks |
| Notif | Stale SO alerts · Pick list ready → warehouse team notification | 2 tasks |
| UAT | 20-scenario UAT sample set · Phase 1 UAT vs 15 acceptance metrics | — |

---

### ✅ Already Done (confirmed in CSV as of 7 May 2026)

- **Discovery**: Blanket Agreement API fields · KL same BA practice · SAP stock transformation (Ivan recorded + shop floor visit) · DO/Invoice same-number scheme · Credit approval authority · Glazing % = separate SKU · Warehouse section → item group mapping
- **Build**: Consolidated pick list with team split · Pick list → per-customer DN split · Credit standing display on pre-submission · Payment proof → draft payment entry · Invoice retrieval by salesperson (mobile)
- **Notifications**: Credit block → credit controller · Payment proof → finance ToDo · Comment tagging
- **Scope decision**: cRFQ / AI quotation module → **Out of Scope Phase 1**

---

## Artefact Tracker

| Artefact | Owner | Status | Due |
|----------|-------|--------|-----|
| Sample customer PO files (3–5 Excel) | GST (Joey / Sales) | pending client | — |
| SAP data export: items + customers | GST (IT — Tim/Jude) | pending client | — |
| SSH tunnel to SAP UAT | GST (IT — Tim/Jude) | pending client | — |
| Company phone SIM for WhatsApp | GST (Joey) | pending client | — |
| AWS account | GST (Joey) | pending client | — |
| OpenAI API key | GST (Joey) | pending client | — |
| SAP vendor contact + scoping call | MH — Ivan | not started | this week |
| Data export template (what to send) | MH — Gareth/Ivan | not started | — |
| Infrastructure onboarding guide | MH — Gareth | not started | — |
| Fish cutting / stock transform tech brief | MH — Gareth | not started | — |
| Feature request log (intake triage) | MH — Gareth | not started | — |
| Demo environment setup | MH — Tech | not started | after data received |
| Tender/quotation design follow-up session | MH + GST | not scheduled | — |
| Planning order requirement clarification | MH — Ivan + Soo Chin | not started | — |

---

**Draft WhatsApp message to GST (Joey) requesting samples:**

> Hi Joey, thanks for your time today! To get the demo environment set up with your actual data, could you help prepare the following:
> 1. 3–5 sample customer PO files (Excel) — anonymised is fine
> 2. Data export from SAP: ~200 product items + ~50 customers (I'll send you the exact fields needed)
> 3. A short screen recording of how you currently key in an order in SAP
>
> Also, on the infrastructure side, we'll need GST to:
> - Purchase a new company phone number (for WhatsApp Business)
> - Create an AWS account
> - Get an OpenAI API key
>
> We'll send step-by-step guides for each. No rush — just let us know a good timeline on your end.

---

## See Also

- [[GST Fine Foods __ MH Requirements Gathering (Online) v2-transcript 2]] — raw transcript (2026-05-04)
- [[GST Fine Foods — GTM Brief Context and Unclear Items]] — pre-meeting open items
- [[GST Fine Foods — Requirement Gathering Questionnaire]] — structured questions from this session
- [[GST Fine Foods Customer Narrative]] — client-facing proposal narrative
- [[SOW for MAIA GST Fine Foods]] — signed scope reference
- [[09 - Intake & Triage/Request Intake Inbox]] — log feature requests here
