---
owner: Gareth
status: draft
last_reviewed: 2026-07-27
lark_url: https://eg69120xnei.sg.larksuite.com/docx/MUiBdupA6oiC9jxs6RyluUeNgAs
---

# Macro Frozen — Scope Lock v2

**Date:** 27 Jul 2026 (supersedes v1, 24 Jun–14 Jul 2026)

**Build stage:** In-build / pre-core go-live

**Scope stance:** Conservative. Anything without evidenced mutual agreement is **not locked**. ⚠️

**v1 history (24 Jun–14 Jul 2026):** all Needs-Scoping items reconciled to terminal statuses across four rounds — 2026-07-12 (initial reconciliation), 2026-07-13 (Ivan × Gareth internal re-check, reopened NS-03/NS-05/NS-06 to mechanism-detail level, added NS-08), 2026-07-14 ×3 (Gareth's AS-01/SL-03/AS-03/AS-04 updates; Grace clarification call resolving NS-08/NS-06, escalating NS-07 to conflict, adding SL-08/NS-09/NS-10/NS-11; AS-08/NS-12 customer-PO; AS-09/NS-13 cost-price tracking). Full v1 detail preserved in `Macrofood — Scope Lock v1 (reconciled).md` (archived).

**v2 changes (2026-07-27), cross-checked against `20Jul26 - Macrofrozen Before vs After MAIA` and `23Jul26 - Macro Frozen Enhancement` (both client-facing build docs), plus the Maya Training Gaps Report (16/17 Jul training sessions):**
- **AS-04 / AS-04b reopened and superseded** — salesperson submits their own SO directly via MAIA WhatsApp chat; the "query-only, admin enters" design is stale.
- **New AS-10** — SKU replacement during picking.
- **AS-01** acceptance criteria extended — kg-per-box / box-count tracking.
- **SL-03 / SL-04** extended — confirmed 3-tier price-approval ladder (auto → CJ → David).
- **SL-07** acceptance criteria extended — Invoice/DN generation is an explicit Grace-initiated request, not automatic.
- **NS-14, NS-15, NS-16** (new, from training gaps) — dashboard per-salesperson filter, pick-list remarks carry-through, duplicate-customer detection — all **RESOLVED (build spec confirmed 2026-07-23)**.
- **Prospect module hidden** — flat Lead → Customer flow, CRM notes carry forward on conversion.
- **Apple's role corrected** — Finance scope specifically (credit limits, credit terms), not blanket Admin parity with David.
- **NS-07 (POD)** mechanism note added (Accounts uploads, not driver) — blocker itself unresolved, still awaiting David.

Full source analysis: `[[macrofrozen/27Jul26 - Macrofrozen Scope Lock Update Notes]]`.

---

## 1. Source Manifest

| Source | Date range / date | Processed in full? | Notes |
|-|-|-|-|
| `Ordermaia x MacroFrozen.pdf` — proposal / SOW baseline | 13 May 2026 | Partial visual pass | PDF text was not machine-parsed; rendered pages show Phase 1 scope, workflows, recommended customisations, documents, exclusions. |
| `[REQ] Macro Frozen Customer Narrative Document` | Sales handover / post-sales | Yes, via project search | Contains latest product handover scope, RM40k commercial direction, in-scope/out-of-scope boundaries, risk notes. |
| `4 Jun 26 - Macro Frozen Meeting Notes` | 4 Jun 2026 | Yes | Meeting-minutes view of agreed workflow, decisions, actions, out-of-scope notes. |
| `2026-06-04 [F2F] Macrofood Requirements Gathering-transcript v2.md` | 4 Jun 2026 | Targeted full-search review | Raw transcript evidence for AR, pick list, pricing, credit limit, stock, roles, timeline. |
| `_chat.txt` WhatsApp export | 15 May–18 Jun 2026 | Targeted review | Confirms setup timeline, client artefacts, 4 Jun recap, agreed core workflow as posted to group. |
| `Macrofood — Requirement Gathering Questionnaire` | 4 Jun prep | Yes as scoping checklist, not agreement | Used only to identify open questions and required samples; it is not evidence of client agreement. |
| `2026-06-08 Macrofrozen MAIA setup-transcript.md` | 8 Jun 2026 | Targeted review | Mostly setup/API/AWS/data collection; weak for scope lock. |
| Fireflies connector | queried 23 Jun 2026 | Title-scope search | Queries run: `Macro`, `Macro Frozen`, `Macrofood`, `Macro Food`, `David`. Found `new client brief custom med, macro food` dated 19 May 2026 and `Macro Food F2F` dated 6 May 2026. `Macro Food F2F` appears to be a coverage hole: not clearly present as a project file. |
| `Ivan x Gareth Macrofrozen scope lock discussion` (Fireflies transcript) | 13 Jul 2026 | Yes, full transcript | Internal scope re-check between Ivan (lead) and Gareth's team. Confirms/expands AR recon, AS-01 pick-list mechanism, pricing template, credit note doc type, POD attachment behaviour; surfaces that NS-03/NS-05/NS-06 "resolved" statuses lack mechanism detail; surfaces item historical pricing requirement. |
| `Macrofrozen Client Scope Lock Clarification` (Fireflies transcript, direct call with Grace) | 13 Jul 2026 | Yes, full transcript | Direct client-voice source — Grace clarifying open items ahead of 16 Jul training. Resolves NS-08, NS-06 routing; confirms role/permission definitions, customer-agent SQL assignment, CN knock-off mechanics; surfaces NS-07 conflict, SL-02 adoption skepticism, new gaps. |
| `Maya Training — Identified Gaps Report.md` | 16–17 Jul 2026 (training sessions) | Yes | 14 gaps from the order & warehouse workflow training sessions — notification readiness, dashboard filtering, pick-list remarks carry-through, accounting/supplier integration, SO-amendment ownership, credit visibility, related-company pricing, CN not built, duplicate-customer detection, lead/prospect conversion. |
| `20Jul26 - Macrofrozen Before vs After MAIA` (Lark) | 20 Jul 2026 | Yes, full doc | Client-facing before/after workflow doc — confirms salesperson-submits-SO-directly model, tiered price approval, kg-per-box tracking, SKU replacement, explicit Grace-initiated Invoice/DN generation, full role/permission table per person. |
| `23Jul26 - Macro Frozen Enhancement` (Lark) | 23 Jul 2026 | Yes, full doc | Build spec directly answering several training gaps — Pick List grouping/columns/remarks placement, Product Detail screen purchasing-tab hide, Lead/Prospect simplification + Lead Merge (duplicate detection), credit-control toggle naming, sales-dashboard salesperson filter, stock-entry supplier-name out-of-scope confirmation. |

**Coverage warning:** The 6 May Fireflies `Macro Food F2F` transcript is not clearly duplicated in the project files. Treated as a confidence reducer where later project files do not explicitly confirm the same commitment.

---

## 2. Scope Lock Summary

| Status | Count | Items |
|-|-|-|
| **LOCKED** | 11 | SQL/customer-item master boundary; AR customer-invoice reconciliation (adoption-risk flagged); bulk price update + tiered price-approval (auto/CJ/David); credit-limit control; role visibility; one MAIA WhatsApp number; core document generation for SO/DO/Invoice where integration allows (explicit-request nuance added); salesperson self-service order entry (AS-04, reopened/superseded); customer→sales-agent assignment (SL-08); SKU replacement during picking (AS-10, new) |
| **LOCKED (SUPERSEDED)** | 1 | AS-04b (office-admin order entry) — superseded by salesperson-submits-directly model, 2026-07-27. Kept for historical traceability, not active design. |
| **AGREED IN PRINCIPLE — IMPLEMENTATION NOT LOCKED** | 5 | Fresh-weight workflow (now includes kg-per-box); product catalogue/image generation; credit note support (doctype design finalized, numbering risk flagged, **still not built** per training Gap #10); customer information/notes (activity log confirmed, master-field writability open); backend dashboard/reminders (salesperson-filter piece now resolved, rest still open) |
| **AGREED IN PRINCIPLE — IMPLEMENTATION PROPOSED** | 3 | AS-07 quotation-before-order; AS-08 customer PO upload & match; AS-09 cost/buying price tracking & bulk update |
| **BLOCKED — CLIENT CONFLICT** | 1 | NS-07 POD — client (Grace) explicitly rejects photo-upload-to-Maya design; mechanism note added (Accounts uploads, not driver) but blocker itself unresolved, awaiting David |
| **NEEDS SCOPING** | 5 | NS-09 stock-expiry alert sales-inclusion; NS-10 backup coverage; NS-11 warehouse Maya access model; NS-12 customer PO mechanism; NS-13 cost/buying price mechanism |
| **RESOLVED (this round)** | 3 | NS-14 dashboard per-salesperson filter; NS-15 pick-list remarks/notes carry-through; NS-16 duplicate-customer detection (Lead Merge) |
| **OUT OF SCOPE** | 8 | AP reconciliation; merchant/QR settlement reconciliation; delivery trip management; full WMS/barcode/QR scanning; volume-based pricing; full B2C/customer ordering app; automated WhatsApp blasting; supplier/purchase-invoice stock entry (confirmed 2026-07-23 — supplier name stays SQL-side) |

### Blocking open items

✅ **All previously-blocking items resolved as of 2026-07-12; re-verified 2026-07-27, no new hard blockers beyond NS-07.**

**⚠️ Still blocking:** NS-07 POD remains a hard conflict — Grace explicitly does not want photos uploaded to Maya. Needs David's decision.

**Remaining open (non-blocking):** NS-03 aging-alert mechanism detail; NS-05 credit-block approval mechanism detail; AS-07 price-lock enforcement (low priority — quotations barely used in practice); AS-03 CN-numbering risk; AS-05 master-data field writability; AS-06 dashboard/reminders access (beyond the now-resolved salesperson filter); NS-09 stock-expiry sales-inclusion; NS-10 backup coverage gap; NS-11 warehouse device model; NS-12/NS-13 mechanism detail for AS-08/AS-09.

---

## 3. Locked Scope

### SL-01 — MAIA sits on top of SQL; SQL remains customer/item master

**Status:** LOCKED

**User-facing flow:** Authorized staff use MAIA for order/document/payment workflow; MAIA references SQL customer and item data; confirmed records are pushed/synced to SQL where integration allows.

**Acceptance criteria:** Customer and item lookup uses SQL-derived data; MAIA does not replace SQL; confirmed SO/DO/Invoice/payment outputs push to SQL only where integration is technically available.

**Confidence:** HIGH.

---

### SL-02 — AR customer invoice reconciliation

**Status:** LOCKED

**User-facing flow:** Finance uploads/forwards bank statement/payment slip → MAIA extracts payer/date/amount/reference → MAIA suggests invoice/customer matches → finance confirms or manually selects → payment entry/knock-off is updated where SQL integration allows.

**Acceptance criteria:**
- Exact/clear matches are suggested automatically.
- Mismatches are not auto-posted.
- User can select customer/invoice manually.
- Payment status updates only after user confirmation.

**⚠️ Adoption risk (flagged 2026-07-14, Grace call):** Grace pushed back — she sees this as the same manual work routed through Maya instead of directly into SQL. Mirrors the AS-01 pick-list adoption risk — **both need real-usage validation post-go-live**.

**Confidence:** HIGH.

---

### SL-03 — Bulk price update and tiered pricing enforcement

**Status:** LOCKED

**User-facing flow:** David/admin uploads price update template → MAIA updates latest prices → sales order pricing uses MAIA price source → salesperson can view/adjust only within configured rules → out-of-band pricing routes to the correct approver tier.

**Acceptance criteria:**
- Template upload changes prices in MAIA.
- SO pricing uses latest MAIA price.
- Wholesale/retail/customer-specific prices are supported.
- Minimum price rule prevents below-floor pricing without an approval route.

**Price controller role (2026-07-14):** David is the price controller — adjusts prices via desktop app, not WhatsApp/chatbot. Distinct from the bulk-template flow: template upload is bulk/scheduled refresh; price-controller role is ad-hoc/manual adjustment authority on top.

**⚠️ Mechanism confirmed as David-only knowledge (2026-07-14):** Grace does not know the actual bulk-template mechanism — "only David knows/handles this." Needs a direct David conversation before the Excel-template acceptance criteria can be finalized.

**✅ Tiered price-approval ladder confirmed (2026-07-20, `20Jul26` doc):**
1. **Normal/approved price** (at or above customer-specific or default price) → Sales Order proceeds automatically, no approval needed.
2. **Below customer/default price, but at or above minimum price** → salesperson seeks **CJ's approval**; CJ approves by submitting the SO, or rejects.
3. **Below minimum price** → salesperson seeks **David's approval**; David approves by submitting the SO, or rejects.

This is new detail on top of the existing minimum-price-block rule — it defines exactly who approves each pricing tier, not just that below-floor pricing is blocked.

**Confidence:** HIGH.

---

### SL-04 — Credit-limit / payment-term control

**Status:** LOCKED

**User-facing flow:** Salesperson attempts to submit order → MAIA checks customer credit amount and payment terms from SQL → if either condition fails, order is blocked → David receives approval/override request → order proceeds only if David approves.

**Acceptance criteria:**
- Credit amount and term status are checked before submit.
- Either failure blocks order.
- David is notified as approver.
- Override is recorded.

**Role/permission mechanics (2026-07-14):** **Read** = view only, **Write** = editable, **Create** = can open new entries, **Submit** = requires manager approval. **Sales Manager (CJ) sets the credit limit at customer creation**, not Finance.

**⚠️ Still NOT LOCKED — full matrix pending training re-walk:** David gave a provisional pass on the overall access matrix; Grace flagged this as unconfirmed pending a full re-walk with all managers present.

**✅ Apple's (Finance) role corrected (2026-07-20, `20Jul26` doc):** Apple's scope is specifically: **sets customer credit limits, maintains finance-related customer settings, controls customer credit terms, ensures financial settings are accurate.** This is a **narrower, Finance-specific** scope — not blanket Admin parity with David as earlier assumed. Correct wherever the pack currently states "Apple/Applle — Admin, same permission level as David."

**✅ Credit-control toggle naming fix (2026-07-23, `23Jul26` doc):** Current customer-profile toggles mix positive/negative phrasing ("Bypass credit limit", "Overdue block") and are confusing. Standardize to: **Credit limit enforced: Yes/No** and **Overdue block enabled: Yes/No** — "Yes" consistently means the control is active. UI/copy change, not a logic change.

**✅ Warehouse/Purchasing visibility (2026-07-23, `23Jul26` doc):** Confirmed as a build item — hide the Purchasing tab from the Item Detail screen for warehouse users (they should not see cost/purchasing data). Reinforces the existing rule that warehouse staff shouldn't see cost/margin/financial data, now as a concrete UI change rather than just a stated principle.

**Confidence:** HIGH (mechanics/definitions) / MED (final matrix, pending training).

---

### SL-05 — Salesperson customer visibility

**Status:** LOCKED

**User-facing flow:** Sales reps log into/use MAIA and only see/manage their own customers; cross-visibility between sales reps is disabled unless later approved.

**Acceptance criteria:** Sales rep A cannot access Sales rep B's customer list or customer-specific pricing/outstanding data.

**Confidence:** HIGH.

---

### SL-06 — One MAIA WhatsApp number

**Status:** LOCKED

**User-facing flow:** Authorized staff forward/input orders and workflow messages into one MAIA WhatsApp number.

**Acceptance criteria:** Phase 1 configuration uses one MAIA assistant number; no multi-number inbox routing is built.

**Confidence:** HIGH.

---

### SL-07 — SO/DO/Invoice generation where integration allows

**Status:** LOCKED

**User-facing flow:** User confirms order/final quantity → MAIA generates SO/DO/Invoice documents → user reviews/sends PDFs → records push to SQL where integration allows.

**Acceptance criteria:**
- SO/DO/Invoice can be generated from the confirmed order state.
- PDFs can be reviewed before sending.
- SQL document flow constraints are respected.
- Current Macro Frozen sample layouts are used where feasible.

**✅ Explicit-request nuance confirmed (2026-07-20, `20Jul26` doc):** MAIA does **not** automatically generate the Invoice or Delivery Note when Grace submits the amended Sales Order. Grace must **separately and explicitly ask MAIA to generate** the Invoice and DN. This is a meaningful correction to the acceptance criteria above — "can be generated from the confirmed order state" means *on explicit request*, not automatically on SO submission. MAIA should clearly flag to Grace when an amended SO has been submitted but the Invoice/DN have not yet been requested, to avoid this becoming a silent delay.

**Confidence:** MED — locked as a functional commitment, but final format matching depends on sample documents and SQL integration.

---

### SL-08 — Customer → sales-agent assignment

**Status:** LOCKED

**Mechanism confirmed:** Every customer record in SQL's "Maintain Customer" screen carries an **Agent** field/code. 3 active salesmen: CJ Tan (Sales Manager), Ben, Queenie (reps). **CK** is a third-party driver, not staff — 3 customers under his own agent code for commission tracking only, excluded from MAIA's sales-territory logic. Unassigned/legacy customers **default to David**.

**Acceptance criteria:** MAIA's customer-agent mapping mirrors this SQL structure exactly — CJ/Ben/Queenie's customers route to them, CK's 3 customers excluded, everything else defaults to David.

**Confidence:** HIGH.

---

### AS-04 — Salesperson self-service order entry (reopened, superseded 2026-07-27)

**Status:** LOCKED — reopened and superseded 2026-07-27

**v1 answer (2026-07-14, per Grace — now superseded):** Salespeople don't enter orders directly; they relay to office admin via WhatsApp, admin does entry. Phase 1 outdoor sales scope was query-only.

**⚠️ Superseded 2026-07-27 (`20Jul26 - Macrofrozen Before vs After MAIA`):** The confirmed current design is different — the **salesperson forwards the customer's order directly to the MAIA WhatsApp chat**, MAIA interprets it and prepares a **draft Sales Order**, the salesperson **reviews and corrects** the interpretation (customer, product, SKU, quantity, unit, price, notes), and the **salesperson submits the Sales Order themselves** through MAIA. No office-admin order-entry step exists in this design.

This also resolves an internal audit finding from this pack's UAT prep: the Role Permission sheet already granted Sales User READ/WRITE/CREATE on Sales Order (contradicting the old "query only" framing) — **the permission sheet was correct, the v1 query-only description was stale.**

**Acceptance criteria (v2):**
- A salesperson can forward a customer order to the MAIA WhatsApp chat.
- MAIA prepares a draft SO from the message.
- The salesperson can review, correct, and submit the SO themselves.
- Submission still routes through SL-03's tiered price-approval ladder and SL-04's credit check where applicable.

**Blocking:** NO.

---

### AS-04b — Office-admin order relay (SUPERSEDED)

**Status:** LOCKED (SUPERSEDED) — 2026-07-14, superseded 2026-07-27

Originally confirmed the office-admin-enters-order model. **Superseded by AS-04's 2026-07-27 update** — salesperson submits directly, no separate admin order-entry step. Kept here for historical traceability only; do not build against this description.

---

### AS-10 — SKU replacement during picking (new, 2026-07-27)

**Status:** AGREED IN PRINCIPLE — IMPLEMENTATION NOT LOCKED

**Now intended (per `20Jul26` doc §4.6):** The warehouse may discover during picking/packing that the ordered SKU is unavailable and needs to substitute a replacement (e.g. Brand A French Fries → Brand B French Fries, out of stock). The proposed workflow: warehouse identifies unavailable SKU → selects replacement → replacement recorded in MAIA → reflected in the Pick List → confirmed replacement flows into the amended Sales Order → after Grace submits the amended SO, final DN/Invoice use the approved replacement SKU.

**System should retain:** original SKU, replacement SKU, user who made the change, reason for replacement, approval status where required.

**Open question:** whether SKU replacement requires approval, and from whom (Sales, CJ, David, Grace, or the customer) — not yet defined. Different SKU = potentially different price, different cost, different spec, customer dissatisfaction risk if unapproved.

**Blocking:** NO for core go-live; recommend resolving the approval-routing question before AS-01/pick-list UAT, since it directly affects that flow.

---

## 4. Agreed in Principle — Implementation Not Locked

### AS-01 — Fresh-weight adjustment workflow (extended 2026-07-27)

**Status:** RESOLVED — CONFIRMED (2026-07-10), mechanism extended 2026-07-14 and 2026-07-27

**Full flow (as of v1):** create draft SO → submit/confirm SO → generate pick list as a Maya PDF → warehouse manager receives PDF, shares with foreign-worker pickers → pickers physically pick and record actual quantity → warehouse manager uploads annotated pick list back to MAIA → MAIA amends SO with actual quantities → DN/DO/Invoice generated only after that.

**⚠️ Adoption risk (2026-07-13):** Macro Frozen may keep using their own existing pick list rather than adopting the Maya-generated PDF flow — live adoption risk, not closed.

**Closes VOC-004 (picking accountability) at warehouse-manager level, not per-worker.**

**⚠️ Backup coverage gap (2026-07-14):** No process exists for when the warehouse/logistics manager (Mr. Lai) is absent — see NS-10.

**✅ Kilograms-per-box tracking added 2026-07-27 (`20Jul26` doc §4.5):** The warehouse does not only need total actual weight — it also needs **kilograms per box**, since it packs and handles physical boxes, not just total weight. Sales Orders may be entered in box, pieces, carton, or kilogram; regardless of the original unit, the warehouse confirms in kilograms, but must separately capture: original SO unit, original ordered quantity, number of boxes, kilograms per box, and actual total kilograms. Example: SO = 2 cartons → warehouse confirms 4 boxes, 12 kg/box, 48 kg total. This extends AS-01's acceptance criteria — the Pick List and amended SO must carry box-count and kg-per-box, not just a single total-weight figure.

**Also ties to AS-10 (SKU replacement)** — the same pick-list-confirmation step is where SKU substitution is discovered and recorded.

---

### AS-02 — Product catalogue / product update image

**Status:** AGREED IN PRINCIPLE — IMPLEMENTATION NOT LOCKED

**⚠️ Confirmed David-only knowledge (2026-07-14):** David makes the catalog himself using ChatGPT — needs a direct David conversation.

**Blocking:** NO for core go-live; YES for catalogue build.

---

### AS-03 — Credit note support

**Status:** AGREED IN PRINCIPLE — IMPLEMENTATION NOT LOCKED

**Doctype design finalized (2026-07-14):** SCN (Sales Credit Note — flexible, billing + stock return) and CCN (Customer Credit Note — billing only) split, matching how Macrofrozen's SQL already works per Grace's independent confirmation.

**Numbering decision:** MAIA will not mirror the invoice number; CN gets its own running number with the invoice number as a reference field. **⚠️ Risk to confirm with Finance** — VOC-021 wanted the CN number to mirror the invoice number specifically.

**🚫 Training confirms this is still NOT BUILT (Maya Training Gaps Report, Gap #10):** "Credit note / customer credit note not built — explicitly flagged as next-round priority." **Correction to v1's status implication** — doctype *design* is finalized, but the feature itself has not been built as of the 16/17 Jul training. Do not treat "design finalized" as "implemented."

**Blocking:** NO for core SO/DO/Invoice; YES for CN — and now explicitly a **next-round priority per the client's own training feedback**, not just an internal backlog item.

---

### AS-05 — Customer information updates / notes / preferences

**Status:** AGREED IN PRINCIPLE — IMPLEMENTATION NOT LOCKED

**Partial answer confirmed (2026-07-14):** Sales users can record notes, events, and tasks under a customer's profile — activity log locked in. Still open: which master-data fields are directly writable vs require approval.

**⚠️ Gap confirmed by training (Maya Training Gaps Report, Gap #3):** Customer remarks/preferences (cutting method, weight range, delivery time, "China name", size) are captured in the customer profile but **not carried into pick list / SO output** as of the 16/17 Jul training. **Resolved as a build item 2026-07-23** — see NS-15.

**Blocking:** NO.

---

### AS-06 — Backend dashboard and daily reminders

**Status:** AGREED IN PRINCIPLE — IMPLEMENTATION NOT LOCKED

**Guiding questions drafted 2026-07-14** (who has access, does it differ by role, what should it show, who gets reminders, what triggers them, WhatsApp push or MAIA-only) — not yet asked as of v1.

**🚫 Training confirms notification engine not ready (Maya Training Gaps Report, Gap #1):** "Maya cannot yet notify/remind users of pending actions." Daily-digest/notify-on-action concept discussed but not confirmed as built.

**🚫 Training confirms per-salesperson filtering was missing (Gap #2):** Management could not isolate one specific salesperson's data/performance as of the 16/17 Jul training.

**✅ Per-salesperson dashboard filter RESOLVED 2026-07-23 (`23Jul26` doc):** "For David (owner) and CJ (Sales manager), Dashboard should support filtering by Salesperson." See NS-14.

**Still open:** the broader notification engine (Gap #1), daily digest, at-risk-customer flagging, full owner dashboard authority — none of these are confirmed built yet, only the salesperson-filter piece.

**Blocking:** NO.

---

### AS-07 — Quotation before order

**Status:** AGREED IN PRINCIPLE — IMPLEMENTATION PROPOSED, not yet walked through with client

**⚠️ Real-world usage context (2026-07-14):** Grace confirmed formal quotations are barely used in practice — orders go straight from WhatsApp price discussion to order. Whether David still wants price-lock enforcement built is an open question for David.

**Blocking:** NO for core go-live.

---

### AS-08 — Customer PO upload & match

**Status:** AGREED IN PRINCIPLE — IMPLEMENTATION NOT LOCKED

**Now intended:** 3 confirmed customers issue formal POs instead of WhatsApp orders. Flow: upload PO → MAIA matches customer/item → user reviews → submits as confirmed SO.

**Scope note:** Low-volume, narrow use case — supplements SL-06, does not replace it.

**Blocking:** NO.

---

### AS-09 — Cost/buying price tracking & bulk update

**Status:** AGREED IN PRINCIPLE — IMPLEMENTATION NOT LOCKED

**Now intended:** MAIA must track and bulk-update item cost/buying price, separate from SL-03's selling-price-only scope.

**⚠️ Confirmed still split from Maya (2026-07-23, `23Jul26` doc — "Stock entry - out of scope"):** Supplier name remains a required SQL-side field; supplier/cost/purchase-invoice data stays in SQL, not Maya, regardless of how AS-09's mechanism is eventually resolved. This is now an explicit, confirmed boundary, not just an assumption.

**Blocking:** NO for core go-live.

---

## 5. Needs-Scoping Register

| ID | Item | What is unclear | Precise closing question | Decider | Blocking |
|-|-|-|-|-|-|
| NS-03 | Inventory aging / expiry alert | Feature built, but trigger threshold, alert recipient, cadence undefined. | "What threshold/recipient/cadence for the aging alert?" | David | RESOLVED (feature) / OPEN (mechanism) |
| NS-05 | Credit-block approval | Feature exists but mechanics (controller, approval UI, override record) undocumented. | "Who is the credit-block controller, what's the approval UI, is an override reason recorded?" | David | RESOLVED (feature) / OPEN (mechanism) |
| NS-06 | Payment chasing escalation | — | — | David / Finance | **RESOLVED** — full routing confirmed 2026-07-14 |
| NS-07 | POD attachment without delivery module | Grace explicitly rejects photo-upload-to-Maya design; SQL has no "mark delivered" status today. **Mechanism note added 2026-07-27:** per `20Jul26` doc, the intended flow (if built) has **Accounts uploading the POD**, not the driver directly — driver returns the signed document to Accounts, who uploads to MAIA. This refines the mechanism description only; it does not resolve the underlying conflict. | "Do you still want a formal POD/mark-as-delivered feature in Maya, or drop it entirely?" | David | **BLOCKED — client conflict, awaiting David's decision** |
| NS-08 | Item historical pricing | — | — | David / Grace | **RESOLVED** — Base feature sufficient as-is |
| NS-09 | Stock-expiry alert — sales inclusion | Boss + Warehouse/Logistics Manager confirmed recipients; Sales inclusion undecided. | "Should salespeople also receive the stock-expiry alert?" | David | NO — non-blocking |
| NS-10 | Backup coverage — Logistics/Finance Manager absence | No backup process exists today. | "Who backs up pick-list verification / AR entries / approvals when Lai or Finance is absent?" | David | Real operational gap — resolve before go-live |
| NS-11 | Warehouse Maya access model | Individual logins vs shared device undecided. | "Individual Maya logins per picker, or one shared device?" | David / Warehouse Manager | Affects AS-01 pick-list-upload step |
| NS-12 | Customer PO upload & match mechanism | Format, OCR-vs-reference-only, match logic undefined. | "Confirm PO format, extraction method, and match logic." | David | NO — low volume |
| NS-13 | Cost/buying price tracking mechanism | Template flow, authorization, downstream triggers undefined. | "Same bulk template as SL-03, or separate? Who's authorized? Any downstream trigger?" | David | NO for go-live |
| **NS-14** | **Dashboard per-salesperson filter** (new, from Maya Training Gaps Report Gap #2) | Management could not isolate one salesperson's data/performance as of 16/17 Jul training. | — | David / CJ | **RESOLVED 2026-07-23** — build spec confirmed: "For David and CJ, Dashboard should support filtering by Salesperson." |
| **NS-15** | **Pick-list remarks/notes carry-through** (new, from Gap #3) | Customer remarks/preferences (cutting method, weight range, delivery time, "China name", size) captured in profile but not shown on pick list/SO. | — | — | **RESOLVED 2026-07-23** — build spec confirmed: Pick List gets Customer Name + Additional Notes columns, remarks moved from bottom to top of page, grouping by Customer/SO/Warehouse on the Web UI. |
| **NS-16** | **Duplicate-customer detection** (new, from Gap #14) | Old customer returning, two people from same company, different phone numbers for same customer, ownership disputes — system should block duplicate conversion but wasn't proven working. | — | — | **RESOLVED 2026-07-23** — build spec confirmed: "Lead Merge" — detects existing customer during lead conversion, allows merge (CRM notes, contact, phone, email, address, company info), latest value wins on conflict. |

**Related, not independently scoped:** related/family/linked-company price sharing (training Gap #9) and combine-routing logic for multi-customer/multi-stall scenarios (Gap #12) surfaced in training but have **no build spec yet** in either the `20Jul26` or `23Jul26` docs — still genuinely open, recommend adding as NS-17/NS-18 once a mechanism is proposed.

---

## 6. Supersessions Log

| Risk | v1 said | v2 says now | Changed by / when | Rationale | Client agreed? |
|-|-|-|-|-|-|
| HIGH | AS-04/AS-04b: outdoor sales is query-only; office admin enters orders via WhatsApp relay. | Salesperson forwards order to MAIA WhatsApp chat directly, MAIA drafts SO, salesperson reviews/submits themselves. | `20Jul26 - Macrofrozen Before vs After MAIA`, 2026-07-27 | Confirmed current build design directly contradicts the earlier "query-only" answer; also matches what the Role Permission sheet already granted. | YES — this is the client-facing build doc, treated as current design of record |
| MED | AS-03: CN doctype design finalized, implied near-ready. | CN is confirmed **not built**, explicitly flagged next-round priority by the client during training. | Maya Training Gaps Report, Gap #10, 2026-07-16/17 | Design ≠ implementation; training surfaced the gap directly from client feedback. | YES — direct client training feedback |
| LOW | Apple/Applle described as Admin, same permission level as David. | Apple's role is Finance-specific: credit limits, credit terms, finance-related customer settings. | `20Jul26` doc, 2026-07-27 | More precise role definition from the confirmed roles/permissions table. | YES |
| LOW | Prospect module implied as part of the CRM lifecycle (lead → prospect → customer). | Prospect module is being hidden; flat Lead → Customer flow adopted instead. | `23Jul26 - Macro Frozen Enhancement`, 2026-07-27 | Simplifies adoption — differentiating Lead vs Prospect was confusing operationally. | YES — confirmed build decision |

*(Full v1 supersessions — Phase 1 pick-list flow, stock entry/GRN, inventory aging/expiry, Product Update Assistant status — carried forward unchanged; see v1 archive for detail.)*

---

## 6b. Dependencies & Blockers

| ID | Dependency | Status | Impact | Owner |
|-|-|-|-|-|
| DEP-1 | SQL vendor integration access | OPEN — live blocker | Go-live blocked until granted | Product coordinates · SQL vendor grants |
| DEP-2 | Client sign-off + named UAT signatory | OPEN | M8 UAT needs a named signatory | Onboarding PM + David |

---

## 7. Out-of-Scope / Explicit Exclusions

| Item | Reason / boundary | Source |
|-|-|-|
| AP reconciliation / supplier payment reconciliation | Future phase; AR is the Phase 1 finance scope. | |
| Merchant/QR settlement reconciliation | Explicitly confirmed out of scope. | |
| Delivery trip management / driver app / route planning | Post-Phase 1 add-on. | |
| Full WMS / barcode / QR scanning | Future phase. | |
| Volume-based pricing tiers | Not supported currently. | |
| Full B2C customer ordering app | Explicit boundary unless separately approved. | |
| Fully automated WhatsApp broadcast/blasting | Manual review/forwarding is the boundary. | |
| **Supplier / purchase-invoice stock entry** | **Confirmed 2026-07-23** — supplier name is a required SQL-side field; stock entry's supplier/cost/purchase-invoice data stays in SQL, not Maya. | `23Jul26 - Macro Frozen Enhancement` |

---

## 8. Client Confirmation Agenda

*(Carried forward from v1 — see that file for the full 21-item general agenda + "For David Directly" 9-item section. Superseded/resolved items below.)*

**Resolved since v1, no longer need asking:**
- ~~Outdoor sales query-only vs order-entry~~ — answered by the confirmed salesperson-submits-directly design (AS-04 v2).
- ~~Dashboard per-salesperson filter~~ — resolved, build spec confirmed.
- ~~Pick-list remarks carry-through~~ — resolved, build spec confirmed.
- ~~Duplicate-customer detection~~ — resolved via Lead Merge spec.

**New items to add to the agenda:**
- SKU-replacement approval routing (AS-10) — who approves a mid-pick SKU substitution?
- Related/linked-company price sharing (training Gap #9) — still no mechanism proposed.
- Multi-customer/multi-stall combine-routing (training Gap #12) — still no mechanism proposed.
- One-time stock reconciliation before go-live (training Gap #6) — recommend as an explicit pre-go-live action item, not just an NS question.

## See Also
- `[[Macrofood — Scope Lock v1 (reconciled)]]` (archived)
- `[[macrofrozen/27Jul26 - Macrofrozen Scope Lock Update Notes]]`
- `[[macrofrozen/Maya Training — Identified Gaps Report]]`
