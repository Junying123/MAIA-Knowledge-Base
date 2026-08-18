---
owner: Gareth
status: draft
last_reviewed: 2026-07-29
lark_url: https://eg69120xnei.sg.larksuite.com/docx/LW5Idpv5FoPHzXx4fQolmwQugtc
---

# Macro Frozen — Scope Lock v3

**Date:** 29 Jul 2026 (supersedes v2, 27 Jul 2026)

**Build stage:** Post-2nd-UAT / pre-3rd-UAT (3rd UAT window: 11–14 Aug 2026; all P0+P1 fixes due 5 Aug)

**Scope stance:** Conservative. Anything without evidenced mutual agreement is **not locked**. ⚠️

**⚠️ Process gap carried into this version (DG-4):** The 2nd UAT (28 Jul) closing line was "much better progress" — **no green/yellow/red verdict was formally called**, no named signer recorded acceptance. Nothing below should be read as "UAT-accepted" on the strength of the 2nd UAT alone.

**v1 history (24 Jun–14 Jul 2026):** all Needs-Scoping items reconciled to terminal statuses across four rounds. Full v1 detail in `Macrofood — Scope Lock v1 (reconciled).md` (archived).

**v2 changes (2026-07-27):** AS-04/AS-04b reopened and superseded (salesperson self-service order entry); new AS-10 (SKU replacement); AS-01 extended (kg-per-box); SL-03/04 extended (3-tier price approval); SL-07 extended (explicit-request invoice/DN generation); NS-14/15/16 resolved; Prospect module hidden; stock-movement timing confirmed; Apple's role corrected; NS-07 mechanism note added. Full detail: `[[macrofrozen/27Jul26 - Macrofrozen Scope Lock Update Notes]]`.

**v3 changes (2026-07-29)**, reconciled against `28Jul26 - 2nd UAT Bug Fixes Checklist.md` (primary source), the 28 Jul onsite UAT transcript, the 29 Jul internal tech debrief transcript, and the client's own raw Lark feedback doc `28Jul26 - UAT 2 MAIA Training Feedback`:

- **All v2 LOCKED / AGREED-IN-PRINCIPLE / NEEDS-SCOPING / OUT-OF-SCOPE items carried forward unchanged** unless a section below explicitly says otherwise — see each item's own status line for "carried from v2, unchanged" vs "updated this round."
- **New SL-09 → SL-13** — notification-engine architecture and the three concrete notification flows load-bearing for the approval loop and the pick→DN→invoice handoff — **LOCKED** on direction, some mechanism still open.
- **New AS-11** — picked-quantity breakdown as list-of-(qty,uom)-tuples (MF-P1-01), the one genuinely load-bearing new-scope item this round — **AGREED IN PRINCIPLE**, blocked on tech-lead feasibility call.
- **New AS-12** — Delivery Driver role + mandatory POD (MF-P2-04 / MF-P1-21) — **AGREED IN PRINCIPLE**, expands user population beyond signed scope.
- **New AS-13** — AR module / bank-statement reconciliation, timeline moved up — **AGREED IN PRINCIPLE**, cross-client core-MAIA feature.
- **New NS-17 → NS-20** — contact-database entity, SCN/CCN connector correctness, Sunday-reports-vs-dashboard duplication, credit-block enforcement mode. **NS-20 is a hard blocker.**
- **Six new OUT-OF-SCOPE items** — packing-list Excel OCR, delivery trip/route management, customer memo/announcement blast, Facebook lead capture, WMS integration, fleet GPS/temperature telemetry.
- **Coverage note:** this round's evidence is UAT-session + internal-debrief only. Where the client's own words in the room constitute agreement (e.g. "yes, spam Grace"), cited and treated as client-agreed; other AGREED-IN-PRINCIPLE items reflect vendor-side categorization not yet confirmed back to the client in writing.

Full source analysis: `[[UAT/28Jul26 - 2nd UAT Bug Fixes Checklist]]`.

---

## 1. Source Manifest

| Source | Date range / date | Processed in full? | Notes |
|-|-|-|-|
| `Ordermaia x MacroFrozen.pdf` — proposal / SOW baseline | 13 May 2026 | Partial visual pass | Carried from v1/v2. |
| `[REQ] Macro Frozen Customer Narrative Document` | Sales handover | Yes, via project search | Carried from v1/v2. |
| `4 Jun 26 - Macro Frozen Meeting Notes` | 4 Jun 2026 | Yes | Carried from v1/v2. |
| `2026-06-04 [F2F] Macrofood Requirements Gathering-transcript v2.md` | 4 Jun 2026 | Targeted full-search review | Carried from v1/v2. |
| `_chat.txt` WhatsApp export | 15 May–18 Jun 2026 | Targeted review | Carried from v1/v2. |
| `Macrofood — Requirement Gathering Questionnaire` | 4 Jun prep | Yes as scoping checklist | Carried from v1/v2. |
| `2026-06-08 Macrofrozen MAIA setup-transcript.md` | 8 Jun 2026 | Targeted review | Carried from v1/v2. |
| Fireflies connector (title-scope search) | queried 23 Jun 2026 | Title-scope search | Carried from v1/v2 — `Macro Food F2F` (6 May) remains a coverage hole. |
| `Ivan x Gareth Macrofrozen scope lock discussion` (Fireflies) | 13 Jul 2026 | Yes, full transcript | Carried from v1/v2. |
| `Macrofrozen Client Scope Lock Clarification` (Fireflies, Grace) | 13 Jul 2026 | Yes, full transcript | Carried from v1/v2. |
| `Maya Training — Identified Gaps Report.md` | 16–17 Jul 2026 | Yes | Carried from v1/v2. |
| `20Jul26 - Macrofrozen Before vs After MAIA` (Lark) | 20 Jul 2026 | Yes, full doc | Carried from v1/v2. |
| `23Jul26 - Macro Frozen Enhancement` (Lark) | 23 Jul 2026 | Yes, full doc | Carried from v1/v2. |
| **`UAT/28Jul26 - 2nd UAT Bug Fixes Checklist.md`** | 28–29 Jul 2026 | **Yes, full — new this round** | Primary source for v3. Already-synthesized PM doc: P0–P4 priority buckets, 6 open decisions (DG-1→DG-6), role map, acceptance criteria per item. Citation key: `[BFC \| MF-Pn-nn]` / `[BFC \| DG-n]`. |
| **`Granola/Transcripts/2026-07-28/... 2nd UAT - Onsite-transcript.md`** | 28 Jul 2026 | **Yes, full — new this round** | Raw 2nd UAT session. Fidelity warning: mixed Cantonese/Mandarin/Malay/English, second half heavily garbled, speaker identity unresolved. Used for framing/pushback only. Citation key: `[G \| 2026-07-28]`. |
| **`Granola/Transcripts/2026-07-29/Macro Debrief-transcript.md`** | 29 Jul 2026 | **Yes, full — new this round** | Raw internal tech debrief — vendor categorization of P0–P4, notification/credit/price-block design, driver-role and contact-database scoping. Citation key: `[G \| 2026-07-29]`. |
| **Lark wiki `28Jul26 - UAT 2 MAIA Training Feedback`** (node `HK6pwSJeuiZbwEknnOOlyLr5gfc`) | 28 Jul 2026 | **Yes, full — new this round** | Client's own raw numbered feedback list. Corroborates BFC, no material conflicts. Citation key: `[LW \| HK6p...5gfc]`. |
| Fireflies `Macro-Frozen-Debrief` / `Meet-Macro-Debrief` | 29 Jul 2026 | **Not independently fetched this round** | Same 29 Jul meeting as the Granola debrief transcript (dual-recorded) — treated as duplicate, not re-pulled separately. Flag for a future rerun if Fireflies-specific detail is needed. |

**Coverage warning:** The 6 May Fireflies `Macro Food F2F` transcript remains an uncovered gap (carried from v1/v2). This round's new evidence (2nd UAT + debrief) has no independent written client confirmation beyond what was said in the room on 28 Jul — see the DG-4 process-gap note above.

---

## 2. Scope Lock Summary

| Status | Count | Items |
|-|-|-|
| **LOCKED** | 16 | SQL/customer-item master boundary (SL-01); AR customer-invoice reconciliation (SL-02); bulk price update + tiered price-approval (SL-03); credit-limit control (SL-04); role visibility (SL-05); one MAIA WhatsApp number (SL-06); core document generation (SL-07); customer→sales-agent assignment (SL-08); **notification-engine architecture (SL-09, new)**; **credit-block escalation loop (SL-10, new)**; **price-block escalation loop (SL-11, new)**; **pick→DN→invoice handoff notifications (SL-12, new)**; **default payment-term cascade (SL-13, new)**; salesperson self-service order entry (AS-04, reopened/superseded) |
| **LOCKED (SUPERSEDED)** | 1 | AS-04b (office-admin order entry) — superseded 2026-07-27, unchanged this round |
| **AGREED IN PRINCIPLE — NOT LOCKED** | 12 | AS-01 fresh-weight workflow; AS-02 product catalogue; AS-03 credit note support; AS-05 customer info/notes; AS-06 backend dashboard/reminders; AS-07 quotation-before-order; AS-08 customer PO upload; AS-09 cost/buying price tracking; AS-10 SKU replacement during picking; **AS-11 picked-quantity breakdown tuples (new, load-bearing)**; **AS-12 Delivery Driver role + POD (new)**; **AS-13 AR module/bank reconciliation acceleration (new)** |
| **BLOCKED — CLIENT CONFLICT** | 1 | NS-07 POD — client (Grace) explicitly rejects photo-upload-to-Maya design; unresolved, awaiting David |
| **NEEDS SCOPING** | 9 | NS-03 aging-alert mechanism; NS-05 credit-block approval mechanism; NS-09 stock-expiry sales-inclusion; NS-10 backup coverage; NS-11 warehouse Maya access model; NS-12 customer PO mechanism; NS-13 cost/buying price mechanism; **NS-17 contact-database entity (new)**; **NS-18 SCN/CCN connector correctness (new)**; **NS-19 Sunday-reports-vs-dashboard duplication (new)**; **NS-20 credit-block enforcement mode (new, hard blocker)** |
| **RESOLVED (prior rounds)** | 3 | NS-14 dashboard per-salesperson filter; NS-15 pick-list remarks carry-through; NS-16 duplicate-customer detection (Lead Merge) |
| **OUT OF SCOPE** | 14 | AP reconciliation; merchant/QR settlement; delivery trip management (general); full WMS/barcode/QR scanning; volume-based pricing; full B2C ordering app; automated WhatsApp blasting; supplier/purchase-invoice stock entry; **packing-list Excel OCR extraction (new)**; **delivery trip/route management, full form (new — distinct boundary from AS-12's basic driver role)**; **customer memo/announcement blast (new)**; **Facebook lead capture + auto-reply (new)**; **WMS integration (new — reiterates/sharpens the general WMS exclusion above)**; **fleet GPS/temperature telemetry (new)** |

*(NS-20 count corrected: 9 items above includes NS-20 itself — see table.)*

### Blocking open items

**⚠️ New hard blocker — NS-20 (credit-block enforcement mode):** SL-10's escalation loop cannot ship without this decision. Warn-only vs hard block, and the overdue-tolerance window, are unresolved — Macro's SQL knock-off lags real payment by roughly a week, so nearly every customer shows as overdue today. **Blocks MF-P0-01 rollout. Owner: Ivan ↔ David. Decide before go-live.**

**Still blocking (carried from v2):** NS-07 POD conflict — unresolved, awaiting David.

**Remaining open, non-blocking (carried from v2):** NS-03, NS-05, AS-07 price-lock enforcement (low priority), AS-03 CN-numbering risk, AS-05 master-data field writability, AS-06 dashboard/reminders access, NS-09, NS-10, NS-11, NS-12, NS-13.

**New non-blocking opens:** NS-17 (contact database — roadmap-level, cross-client demand check needed); NS-18 (SCN/CCN correctness — testing in progress, explicitly not part of round-3 acceptance); NS-19 (Sunday reports vs dashboard — pick one path before August planning).

---

## 3. Locked Scope

### SL-01 — MAIA sits on top of SQL; SQL remains customer/item master

**Status:** LOCKED — carried from v2, unchanged.

**User-facing flow:** Authorized staff use MAIA for order/document/payment workflow; MAIA references SQL customer and item data; confirmed records are pushed/synced to SQL where integration allows.

**Acceptance criteria:** Customer and item lookup uses SQL-derived data; MAIA does not replace SQL; confirmed SO/DO/Invoice/payment outputs push to SQL only where integration is technically available.

**Confidence:** HIGH.

---

### SL-02 — AR customer invoice reconciliation

**Status:** LOCKED — carried from v2, unchanged.

**User-facing flow:** Finance uploads/forwards bank statement/payment slip → MAIA extracts payer/date/amount/reference → MAIA suggests invoice/customer matches → finance confirms or manually selects → payment entry/knock-off is updated where SQL integration allows.

**Acceptance criteria:**
- Exact/clear matches are suggested automatically.
- Mismatches are not auto-posted.
- User can select customer/invoice manually.
- Payment status updates only after user confirmation.

**⚠️ Adoption risk (flagged 2026-07-14, Grace call):** Grace pushed back — she sees this as the same manual work routed through Maya instead of directly into SQL. Both need real-usage validation post-go-live.

**Confidence:** HIGH.

---

### SL-03 — Bulk price update and tiered pricing enforcement

**Status:** LOCKED — carried from v2, unchanged.

**User-facing flow:** David/admin uploads price update template → MAIA updates latest prices → sales order pricing uses MAIA price source → salesperson can view/adjust only within configured rules → out-of-band pricing routes to the correct approver tier.

**Acceptance criteria:**
- Template upload changes prices in MAIA.
- SO pricing uses latest MAIA price.
- Wholesale/retail/customer-specific prices are supported.
- Minimum price rule prevents below-floor pricing without an approval route.

**Price controller role (2026-07-14):** David is the price controller — adjusts prices via desktop app, not WhatsApp/chatbot.

**✅ Tiered price-approval ladder confirmed (2026-07-20):**
1. **Normal/approved price** → SO proceeds automatically.
2. **Below customer/default price, at/above minimum** → CJ approves.
3. **Below minimum price** → David approves.

**Confidence:** HIGH.

---

### SL-04 — Credit-limit / payment-term control

**Status:** LOCKED — carried from v2, unchanged. **See NS-20 for a related, still-open question about enforcement mode specifically for the notification-loop rollout (SL-10) — SL-04 itself (that a check exists and blocks) remains locked; NS-20 is about how hard that block should be.**

**User-facing flow:** Salesperson attempts to submit order → MAIA checks customer credit amount and payment terms from SQL → if either condition fails, order is blocked → David receives approval/override request → order proceeds only if David approves.

**Acceptance criteria:**
- Credit amount and term status are checked before submit.
- Either failure blocks order.
- David is notified as approver.
- Override is recorded.

**Role/permission mechanics (2026-07-14):** Sales Manager (CJ) sets the credit limit at customer creation, not Finance.

**✅ Apple's (Finance) role corrected (2026-07-20):** Apple's scope: sets customer credit limits, maintains finance-related customer settings, controls customer credit terms — narrower, Finance-specific, not blanket Admin parity with David.

**✅ Credit-control toggle naming fix (2026-07-23):** Standardize to "Credit limit enforced: Yes/No" and "Overdue block enabled: Yes/No."

**✅ Warehouse/Purchasing visibility (2026-07-23):** Hide Purchasing tab from Item Detail for warehouse users.

**✅ Credit-check gate points confirmed (2026-07-27):** Runs at SO and DN, not Invoice.

**Confidence:** HIGH (mechanics/definitions) / MED (final matrix, pending training).

---

### SL-05 — Salesperson customer visibility

**Status:** LOCKED — carried from v2, unchanged.

**User-facing flow:** Sales reps only see/manage their own customers.

**Acceptance criteria:** Sales rep A cannot access Sales rep B's customer list or pricing/outstanding data.

**Confidence:** HIGH.

---

### SL-06 — One MAIA WhatsApp number

**Status:** LOCKED — carried from v2, unchanged.

**User-facing flow:** Authorized staff use one MAIA WhatsApp number for order/workflow messages.

**Acceptance criteria:** Phase 1 configuration uses one MAIA assistant number; no multi-number routing.

**⚠️ Not yet tested on the actual channel (new this round):** All 2nd UAT ran on Telegram because the WhatsApp number is still pending verification — see DEP-4 below. This doesn't change SL-06's status, but it is a live go-live risk against it.

**Confidence:** HIGH (design) / MED (channel readiness, per DEP-4).

---

### SL-07 — SO/DO/Invoice generation where integration allows

**Status:** LOCKED — carried from v2, unchanged.

**User-facing flow:** User confirms order/final quantity → MAIA generates SO/DO/Invoice → user reviews/sends PDFs → records push to SQL where integration allows.

**Acceptance criteria:**
- SO/DO/Invoice can be generated from the confirmed order state.
- PDFs can be reviewed before sending.
- SQL document flow constraints are respected.

**✅ Explicit-request nuance confirmed (2026-07-20):** MAIA does not auto-generate Invoice/DN on amended-SO submit — Grace must separately request it.

**✅ Stock movement timing confirmed (2026-07-27):** Stock moves inbound/outbound only at Invoice/SCN issuance.

**Confidence:** MED — locked as a functional commitment; final format matching depends on samples and SQL integration.

---

### SL-08 — Customer → sales-agent assignment

**Status:** LOCKED — carried from v2, unchanged.

**Mechanism confirmed:** Every SQL customer record carries an Agent field/code. 3 active salesmen: CJ Tan, Ben, Queenie. CK (3rd-party driver) excluded from territory logic. Unassigned/legacy customers default to David.

**Acceptance criteria:** MAIA's customer-agent mapping mirrors this exactly.

**Confidence:** HIGH.

---

### SL-09 — Notification-engine architecture: role-based routing, whitelist-only *(new)*

**Status:** LOCKED

**Source:** `[BFC | MF-P0-03, MF-P1-12]`, `[G | 2026-07-29]`

**User-facing flow:** A defined set of system events (credit block, price block, draft-DN creation, SO submission, pick-list submission, daily pick-list digest, price-update reminder, low-stock/near-expiry, Sunday sales reports) dispatch a notification to the correct role recipient via the client's chat channel. All of MAIA's default out-of-the-box notifications are **disabled**; only the explicitly agreed events below fire.

**Acceptance criteria:**
- Built **role-based ("row to row") first**, not user-action-to-user-action — per Bryan's existing backend notification-seeder pattern.
- Over a full test day, only whitelisted events fire; no unrequested notification reaches any user.
- Product side supplies written per-event requirements to populate the seeder config before build — **no named owner yet** (see DEP-3).

**Confidence:** HIGH (direction) / LOW (delivery timeline, pending owner assignment).

---

### SL-10 — Credit-block escalation and approval loop *(new)*

**Status:** LOCKED (direction) — mechanism partially open, see NS-20

**Source:** `[BFC | MF-P0-01, MF-P0-03]`, `[G | 2026-07-29]`, `[LW | item 1-2]`

**User-facing flow:** Sales user submits an order that fails the credit check (SL-04) → chatbot names the approver and offers a one-tap "assign to credit controller" action, instead of dead-ending silently → David receives the escalation with order details → David acts (approve/reject, or submits on the sales user's behalf) → sales user is notified of the outcome.

**Acceptance criteria:**
- Bot names the approver and offers the assign action on every credit block, on both chatbot and front-end UI — CJ is mobile-only, no company laptop.
- Build the **update notification first**, defer submit notification.
- **David is the sole final approver on credit** — CJ cannot self-approve.
- Full chain verified end-to-end: Queenie → CJ → David, notification delivery confirmed in logs.

**⚠️ Not fully locked — see NS-20:** enforcement mode itself (warn vs hard block, tolerance window) is unresolved and blocks rollout. What's locked here is the escalation mechanism once a block fires, not whether/how hard a block fires.

**Confidence:** MED — mechanism locked, trigger condition (NS-20) open.

---

### SL-11 — Price-block escalation and approval loop *(new)*

**Status:** LOCKED

**Source:** `[BFC | MF-P0-02]`, `[G | 2026-07-29]`

**User-facing flow:** Sales user sets a price below minimum (or above maximum) on Quotation/SO/Invoice → price snaps back to minimum with a warning → also prompts to notify the price controller → price controller can override and save → salesperson is notified.

**Acceptance criteria:**
- Covers min and max price, all three price-sensitive doctypes.
- Chatbot and front-end UI identical behaviour.
- Approval routes to David — CJ cannot self-approve.
- Customer-specific pricing can additionally be locked entirely.
- Salesperson notified on override.

**Confidence:** HIGH.

---

### SL-12 — Pick→DN→invoice handoff notifications *(new)*

**Status:** LOCKED

**Source:** `[BFC | MF-P1-07, MF-P1-08, MF-P1-09]`, `[LW | item 12]`

**User-facing flow, three linked events:**
1. Draft DN created by Lai → push to Grace's chat with the DN PDF, plus activity-trail entry. Client instruction, verbatim: **"yes, spam Grace"** — every event, no digest.
2. Submitted SO → push Order PDF to Lai with activity-trail entry. Client instruction: **"yes, spam Lai."**
3. Pick list submitted/confirmed → notify Grace on demand.

**Acceptance criteria:** All three fire on every occurrence, no batching. Grace and Lai each provably closed as failure modes named in 2nd UAT (MF-P0-06; "Lai... misses orders").

**Confidence:** HIGH — client-instructed, not vendor-inferred.

---

### SL-13 — Default payment-term cascade on SO creation *(new)*

**Status:** LOCKED

**Source:** `[BFC | MF-P1-05]`, `[G | 2026-07-29]`

**User-facing flow:** On SO creation: customer default term → company default term → cash-in-advance → leave empty if none configured.

**Acceptance criteria:** Cascade order fixed as above; configurable per account without code change.

**Confidence:** HIGH.

---

### AS-04 — Salesperson self-service order entry (reopened, superseded 2026-07-27)

**Status:** LOCKED — carried from v2, unchanged.

**v1 answer (superseded):** Salespeople relay to office admin; admin enters orders.

**⚠️ Superseded 2026-07-27:** Salesperson forwards order directly to MAIA WhatsApp chat → MAIA drafts SO → salesperson reviews/corrects/submits themselves.

**Acceptance criteria (v2):**
- Salesperson can forward a customer order to MAIA WhatsApp chat.
- MAIA prepares a draft SO from the message.
- Salesperson reviews, corrects, submits themselves.
- Submission still routes through SL-03/SL-04.

**Blocking:** NO.

---

### AS-04b — Office-admin order relay (SUPERSEDED)

**Status:** LOCKED (SUPERSEDED) — carried from v2, unchanged. Kept for historical traceability only.

---

## 4. Agreed in Principle — Not Locked

### AS-01 — Fresh-weight adjustment workflow (extended 2026-07-27)

**Status:** AGREED IN PRINCIPLE — carried from v2, unchanged this round.

**Full flow:** create draft SO → submit/confirm → generate pick list PDF → warehouse pickers record actual quantity → warehouse manager uploads annotated pick list → MAIA amends SO with actual quantities → DN/DO/Invoice generated after.

**⚠️ Adoption risk (2026-07-13):** Macro Frozen may keep using their own pick list rather than the Maya PDF flow — live, not closed.

**⚠️ Backup coverage gap (2026-07-14):** No process for when Lai is absent — see NS-10.

**✅ Kilograms-per-box tracking (2026-07-27):** warehouse confirms in kg but separately captures original SO unit, ordered qty, box count, kg/box, actual total kg.

**✅ SO-entry convention for the two variance cases (2026-07-27):** (1) order entered in KG — small variance either side of ordered figure; (2) order entered in CARTON — Qty field uses placeholder `1kg`, Additional Notes carries carton count, real qty confirmed only after picking.

**Confidence:** MED.

---

### AS-02 — Product catalogue / product update image

**Status:** AGREED IN PRINCIPLE — carried from v2, unchanged. David makes the catalog himself via ChatGPT — needs a direct David conversation. Blocking: NO for core go-live; YES for catalogue build.

---

### AS-03 — Credit note support

**Status:** AGREED IN PRINCIPLE — carried from v2, unchanged. Doctype design finalized (SCN/CCN split); numbering risk flagged (CN gets own running number, not invoice-mirrored — VOC-021 wanted mirroring, unresolved). **🚫 Training confirmed not built (Gap #10).** See NS-18 this round for the connector-correctness follow-on now that a connector exists but is untested.

**Blocking:** NO for core SO/DO/Invoice; YES for CN, next-round priority.

---

### AS-05 — Customer information updates / notes / preferences

**Status:** AGREED IN PRINCIPLE — carried from v2, unchanged. Activity log locked; master-data field writability open. Gap #3 (remarks not carried to pick list/SO) resolved 2026-07-23 — see NS-15. Blocking: NO.

---

### AS-06 — Backend dashboard and daily reminders

**Status:** AGREED IN PRINCIPLE — carried from v2, unchanged. Per-salesperson dashboard filter RESOLVED 2026-07-23 (NS-14). Broader notification engine — **now substantially addressed by SL-09 this round**, see there. Blocking: NO.

---

### AS-07 — Quotation before order

**Status:** AGREED IN PRINCIPLE — carried from v2, unchanged. Formal quotations barely used in practice per Grace; price-lock enforcement demand unconfirmed with David. Blocking: NO.

---

### AS-08 — Customer PO upload & match

**Status:** AGREED IN PRINCIPLE — carried from v2, unchanged. 3 confirmed customers issue formal POs. Low-volume, narrow use case. Blocking: NO.

---

### AS-09 — Cost/buying price tracking & bulk update

**Status:** AGREED IN PRINCIPLE — carried from v2, unchanged. Separate from SL-03's selling-price scope. Supplier/cost/purchase-invoice data stays in SQL (confirmed 2026-07-23). Blocking: NO for core go-live.

---

### AS-10 — SKU replacement during picking (new 2026-07-27, not promoted this round)

**Status:** AGREED IN PRINCIPLE — carried from v2, unchanged. No new evidence this round.

**Now intended:** warehouse identifies unavailable SKU → selects replacement → recorded in MAIA → reflected in Pick List → flows into amended SO → final DN/Invoice use approved replacement.

**Open question:** approval routing (Sales, CJ, David, Grace, or customer?) — not yet defined.

**Blocking:** NO for core go-live; recommend resolving before AS-01/pick-list UAT.

---

### AS-11 — Picked-quantity breakdown: list-of-(qty, uom)-tuples on Pick List Item / DN Item *(new)*

**Status:** AGREED IN PRINCIPLE — NOT LOCKED. **The one load-bearing new-scope item this round.**

**Source:** `[BFC | MF-P1-01]`, `[G | 2026-07-29]`, `[LW]`

**Why this matters:** the proposal to delete the client's Excel packing list (DG-2) depends entirely on this shipping. Without it, the Excel stays as a supported customisation.

**Now proposed:** custom field storing (qty, uom) tuples at item level on Pick List Item / DN Item — no new doctype, no new child table. Propagates Pick List → DN; optional on Sales Invoice Item. Three-step build: (1) DB + API schema, (2) frontend, (3) mini breakdown table on both PDFs.

**Acceptance criteria:** picker enters e.g. "10 boxes × ~9.5 kg" against a 130 kg line; breakdown persists, propagates to DN, renders on both PDFs, totals reconcile.

**⚠️ Explicitly conditional:** *"If not technically viable, DG-2 flips and the Excel stays — say so early."* Tech-lead feasibility gate not yet cleared.

**Also unblocks:** MF-P1-04 (pcs as a third order-capture UOM) — resolved via this same breakdown mechanism.

**Blocking:** Blocks DG-2. Does not block core go-live.

**Confidence:** MED.

---

### AS-12 — Delivery Driver role ("Uncle") + mandatory proof of delivery *(new)*

**Status:** AGREED IN PRINCIPLE — NOT LOCKED

**Source:** `[BFC | MF-P2-04, MF-P1-21]`, `[G | 2026-07-29]`, `[LW | item 20]`

**Now intended:** new Delivery Driver role — view/update DN, cannot submit/cancel. POD mandatory at mark-as-delivered; further proof appendable after; **no driver-role user can delete POD**. No trip/route-planning module — client explicitly doesn't want it, only 1–2 self-managing drivers.

**Business reason:** today the driver posts photos to a WhatsApp group; Grace manually maintains the proof catalog and searches files on dispute. Disputes are real and costly (cold-chain goods left in sun, blamed on driver); client already pays for a separate GPS/temperature fleet service for the same evidence purpose.

**Acceptance criteria:** driver blocked from marking delivered without POD; additional POD appendable; none deletable by driver role; proof tied to correct DN.

**⚠️ Disambiguation from NS-07 (carried from v2):** NS-07 is the older, unresolved conflict where Grace rejected driver-uploads-to-MAIA, and v2's mechanism note proposed Accounts uploading instead. AS-12 is a **different, newer mechanism** — driver gets his own MAIA account. **Do not assume AS-12 resolves NS-07** — flag both to David together.

**⚠️ Scope-boundary note:** expands licensed user population beyond signed scope — check commercial impact before committing a date.

**Blocking:** No for core go-live. Depends on onboarding driver credentials first (collected, not yet provisioned).

**Confidence:** MED.

---

### AS-13 — AR module / bank-statement reconciliation, timeline moved up *(new)*

**Status:** AGREED IN PRINCIPLE — NOT LOCKED

**Source:** `[BFC | MF-P3-09]`, `[G | 2026-07-29]`

**Now intended:** client asked to accelerate from original P3/September placement. After payment entry created, reconcile against imported bank statement in a dedicated finance workspace (auto-matching by ID/string match via ERPNext native capability), then push to SQL. Simpler than a full bank-rec product; framed as **core MAIA finance-workspace functionality for multiple clients**, not Macro-specific — 2-3 other accounts have the same need.

**Acceptance criteria:** payment entries reconcile against imported bank statement with auto-matching; toggle-off via permission/kill-switch per client.

**Blocking:** No. Labelled P3 but "effectively required" per BFC — no committed date yet (action item: give Macro a date).

**Confidence:** MED.

---

## 5. Needs-Scoping Register

| ID | Item | What is unclear | Precise closing question | Decider | Blocking |
|-|-|-|-|-|-|
| NS-03 | Inventory aging / expiry alert | Feature built, trigger threshold/recipient/cadence undefined. | "What threshold/recipient/cadence for the aging alert?" | David | RESOLVED (feature) / OPEN (mechanism) |
| NS-05 | Credit-block approval | Feature exists, mechanics undocumented — **partially addressed by SL-10 this round**, but NS-20 (enforcement mode) is the still-open piece. | See NS-20. | David | RESOLVED (mechanism, via SL-10) / OPEN (enforcement mode, via NS-20) |
| NS-06 | Payment chasing escalation | — | — | David / Finance | RESOLVED 2026-07-14 |
| NS-07 | POD attachment without delivery module | Grace rejects photo-upload-to-Maya; SQL has no "mark delivered" status. v2 mechanism note: Accounts uploads, not driver. **Not resolved by AS-12 this round — see AS-12's disambiguation note.** | "Do you still want a formal POD feature in Maya, and which mechanism — Accounts-uploads (v2) or driver's-own-account (AS-12, this round)?" | David | **BLOCKED — client conflict, awaiting David** |
| NS-08 | Item historical pricing | — | — | David / Grace | RESOLVED |
| NS-09 | Stock-expiry alert — sales inclusion | Sales inclusion undecided. | "Should salespeople also receive the stock-expiry alert?" | David | NO |
| NS-10 | Backup coverage — Logistics/Finance Manager absence | No backup process exists. | "Who backs up pick-list verification/AR entries/approvals when Lai or Finance is absent?" | David | Real operational gap — resolve before go-live |
| NS-11 | Warehouse Maya access model | Individual logins vs shared device undecided. | "Individual Maya logins per picker, or one shared device?" | David / Warehouse Manager | Affects AS-01 |
| NS-12 | Customer PO upload & match mechanism | Format, OCR-vs-reference, match logic undefined. | "Confirm PO format, extraction method, match logic." | David | NO — low volume |
| NS-13 | Cost/buying price tracking mechanism | Template flow, authorization, downstream triggers undefined. | "Same bulk template as SL-03, or separate? Who's authorized?" | David | NO for go-live |
| **NS-17** | **Contact database as its own entity (MF-P2-03)** *(new)* | Whether this ships as Macro-specific scope or is a cross-account roadmap item; no build spec yet. Client's own example: "Muthu" — same first name, multiple companies. | "Is this a Macro Frozen commitment, or a roadmap candidate we check demand for across other accounts before sizing?" | Wan Sin + Ivan | NO — non-blocking, but expectation-setting needed |
| **NS-18** | **SCN/CCN credit-note connector correctness (MF-P1-17)** *(new)* | Connector completed 27 Jul, one day before 2nd UAT, explicitly disclosed as known risk, not accepted scope. SQLC treats CN differently (return-holder vs negative billing) plus a CCN variant; Grace flagged the stock-reducing case as rare but needed. | "Full test pass against SQLC including the stock-reducing case — does the connector hold, can Grace stop the SQL workaround?" | Gareth Ng (test) / TBC (fix) | NO for round-3 acceptance — explicitly excluded; YES eventually |
| **NS-19** | **Six Sunday 08:00 recurring reports vs September per-salesperson dashboard (DG-5)** *(new)* | Substantial overlap between the 6 scheduled push reports (MF-P3-01→06) and the committed September dashboard (MF-P3-08). Building both is duplicated work. | "Pick one path before August planning." | Wan Sin + Ivan | NO — non-blocking on 3rd UAT, blocks efficient August planning if left open |
| **NS-20** | **Credit-block enforcement mode (DG-1)** *(new)* | Macro's SQL payment knock-off lags real payment by ~1 week; nearly every customer currently shows overdue. A hard block on day one stops most orders and reads as MAIA broken. | "Warn-only vs hard block? Tolerance window? Block on order value + outstanding, or outstanding alone? Who can override — David only, or also Apple?" | Ivan ↔ David | **YES — blocks SL-10 rollout, resolve before go-live** |

**Related, not independently scoped (carried from v2):** related/family/linked-company price sharing (Gap #9) and combine-routing logic (Gap #12) — still no mechanism proposed.

---

## 6. Supersessions Log

| Risk | v1/v2 said | v3 says now | Changed by / when | Rationale | Client agreed? |
|-|-|-|-|-|-|
| HIGH | AS-04/AS-04b: outdoor sales query-only, admin enters orders. | Salesperson forwards order directly, MAIA drafts, salesperson submits. | `20Jul26` doc, 2026-07-27 | Confirmed current build design. | YES — carried from v2 |
| MED | AS-03: CN doctype design finalized, implied near-ready. | CN confirmed not built (v2); **v3 adds:** connector now exists (27 Jul) but is untested/not-accepted-scope (NS-18). | Training Gaps Report (v2) + BFC MF-P1-17 (v3) | Progression from "not built" to "built but unverified" — still not a locked feature. | Partially — Grace's rare-case concern is direct client voice |
| LOW | Apple/Applle described as Admin, same level as David. | Apple's role is Finance-specific. | `20Jul26` doc, 2026-07-27 | More precise role definition. | YES — carried from v2 |
| LOW | Prospect module implied part of CRM lifecycle. | Prospect module hidden; flat Lead→Customer. | `23Jul26` doc, 2026-07-27 | Simplifies adoption. | YES — carried from v2 |

*(No new SOW-level supersessions this round — SL-09 through SL-13, AS-11 through AS-13, and NS-17 through NS-20 are additive new-scope items or open questions, not reinterpretations of previously-locked scope.)*

*(Full v1 supersessions — Phase 1 pick-list flow, stock entry/GRN, inventory aging/expiry, Product Update Assistant status — carried forward unchanged; see v1 archive.)*

---

## 6b. Dependencies & Blockers

| ID | Dependency | Status | Impact | Owner |
|-|-|-|-|-|
| DEP-1 | SQL vendor integration access | Carried from v2 — OPEN | Go-live blocked until granted | Product coordinates · SQL vendor grants |
| DEP-2 | Client sign-off + named UAT signatory | Carried from v2 — OPEN, **sharpened by DG-4**: no verdict called at 2nd UAT, no signer named. | M8 UAT needs a named signatory and a called verdict | Onboarding PM + David |
| **DEP-3** | **Notification-service ownership** *(new)* | **OPEN — unassigned.** Blocks SL-10/SL-11/SL-12 estimation and build. | 9 notification items across P0–P3, 3 of them P0. | Ivan — assign immediately |
| **DEP-4** | **WhatsApp channel verification** *(new)* | **OPEN.** 2nd UAT ran entirely on Telegram; WhatsApp number still pending verification. | Go-live blocker (MF-P0-07); channel-parity smoke test needed once verified. | Ops / Tech — TBC |

---

## 7. Out-of-Scope / Explicit Exclusions

| Item | Reason / boundary | Source |
|-|-|-|
| AP reconciliation / supplier payment reconciliation | Future phase; AR is Phase 1 finance scope. | Carried from v2 |
| Merchant/QR settlement reconciliation | Explicitly confirmed out of scope. | Carried from v2 |
| Delivery trip management / driver app / route planning (general) | Post-Phase 1 add-on. | Carried from v2 |
| Full WMS / barcode / QR scanning | Future phase. | Carried from v2 |
| Volume-based pricing tiers | Not supported currently. | Carried from v2 |
| Full B2C customer ordering app | Explicit boundary unless separately approved. | Carried from v2 |
| Fully automated WhatsApp broadcast/blasting | Manual review/forwarding is the boundary. | Carried from v2 |
| Supplier / purchase-invoice stock entry | Supplier name stays SQL-side, confirmed 2026-07-23. | Carried from v2 |
| **Packing-list Excel optical/OCR extraction** *(new)* | Client asked for automated extraction from an attached Excel packing list — customisation on top of base module, raised as CR. | `[BFC \| MF-P4-01]`, `[G \| 2026-07-29]` |
| **Delivery trip / route management, full form** *(new — sharpens the general exclusion above)* | Distinct from AS-12's basic driver role, which IS in scope. Client explicitly doesn't want full trip/route planning — only 1-2 self-managing drivers. | `[BFC \| MF-P4-02]`, `[G \| 2026-07-29]` |
| **Customer internal memo / announcement blast** *(new)* | Vendor team called it "a pretty good idea" but confirmed not in current scope — raised as CR. | `[BFC \| MF-P4-03]`, `[G \| 2026-07-29]` |
| **Facebook marketing lead capture + auto-reply** *(new)* | Requested; team evaluates off-the-shelf solution before quoting any build. | `[BFC \| MF-P4-04]`, `[G \| 2026-07-29]` |
| **WMS integration** *(new — reiterates/sharpens the general WMS exclusion above with a concrete client context)* | Client standing up new warehouse, pricing ~RM1m WMS via a separate partner. Integration surface unknown until vendor chosen — keep warm. | `[BFC \| MF-P4-05]`, `[G \| 2026-07-29]` |
| **Fleet GPS / truck temperature telemetry** *(new)* | Client already subscribes to a separate fleet-monitoring service for dispute evidence. Strong pairing with AS-12's POD work but sequenced behind it — CR once POD lands. | `[BFC \| MF-P4-06]`, `[G \| 2026-07-29]` |

*(QR/barcode scanning + warehouse label printing, MF-P4-07, is folded into the WMS conversation above rather than tracked separately, per the BFC.)*

---

## 8. Client Confirmation Agenda

**Carried forward from v2, still open** (see v2/v1 for the full general agenda):
- SKU-replacement approval routing (AS-10).
- Related/linked-company price sharing (Gap #9) — no mechanism proposed.
- Multi-customer/multi-stall combine-routing (Gap #12) — no mechanism proposed.
- One-time stock reconciliation before go-live (Gap #6).

**New items this round:**
1. **Credit-block enforcement (NS-20/DG-1):** Warn-only or hard block on day one? What overdue-age tolerance? Who can override — David only, or Apple too?
2. **Contact database (NS-17):** Macro Frozen commitment for this build, or roadmap item pending cross-account demand check?
3. **Delivery-date cron cutoff (DG-3):** 1pm or 2pm cutoff — or genuinely two different rules?
4. **AR module timeline (AS-13):** Can Macro get a committed date now the simplified design is feasible?
5. **Driver POD mechanism (AS-12 vs NS-07):** Which design wins — driver's own MAIA account (AS-12, this round), or Accounts uploading on the driver's behalf (NS-07's v2 note)? Not yet reconciled.
6. **2nd UAT verdict (DG-4):** Formally record green/yellow/red with a named signer.

---

## 9. Bottom line

The core order-to-cash path (SL-01 through SL-08, SL-13, AS-04) is stable, evidenced, and carried forward from v2 with no changes this round. This round's new evidence is almost entirely about the operational layer around that path — the notification/escalation system that makes the approval loop and warehouse handoff actually function day-to-day (SL-09 through SL-12), plus one genuinely load-bearing piece of new scope (AS-11, the picked-quantity breakdown) that a client commitment (removing the Excel packing list) now depends on. None of the notification work can be estimated until ownership is assigned (DEP-3), and the credit-block escalation loop (SL-10) cannot go live until enforcement mode (NS-20/DG-1) is decided — these two are the round's real blockers. Six client requests were kept firmly out of scope as CR candidates rather than silently absorbed. Delivery is currently ahead of scope finalisation on the notification cluster specifically: buildable, but the requirements aren't yet written down in the structured form the notification seeder needs, and no one owns turning "spam Grace" into a shipped configuration.

## See Also
- `[[Macrofood — Scope Lock v2]]`
- `[[Macrofood — Scope Lock v1 (reconciled)]]` (archived)
- `[[UAT/28Jul26 - 2nd UAT Bug Fixes Checklist]]`
- `[[macrofrozen/27Jul26 - Macrofrozen Scope Lock Update Notes]]`
- `[[macrofrozen/Maya Training — Identified Gaps Report]]`
