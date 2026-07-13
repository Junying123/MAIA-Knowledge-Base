---
owner: Gareth
status: draft
last_reviewed: 2026-07-14
lark_url: https://eg69120xnei.sg.larksuite.com/wiki/F5yKw59yui16UbkQjGqlha8egif
---

# 24 June 26 - Macro Frozen — Scope Lock v1

Macro Frozen — Scope Lock v1

**Date:** 23 Jun 2026  

**Build stage:** In-build / pre-core go-live  

**Scope stance:** Conservative. Anything without evidenced mutual agreement is **not locked**. ⚠️

**Reconciled 2026-07-12:** all Needs-Scoping items resolved to terminal statuses (see below). ⚠️ **Client sign-off still pending** — this lock is internally reconciled but not yet client-signed; UAT signatory unconfirmed (see Dependencies).

**Re-checked 2026-07-13 (Ivan × Gareth scope lock discussion):** three items marked RESOLVED on 2026-07-12 (NS-03, NS-05, NS-06) turned out to be "feature exists" resolutions, not "mechanism documented" resolutions — Ivan flagged each as needing deeper detail before UAT. Reopened as **RESOLVED (feature) / OPEN (mechanism detail)**. NS-07's question sharpened. AS-01 mechanism detail expanded. New item NS-08 (item historical pricing) added. See per-item notes below.

**Updated 2026-07-14 (Gareth):** AS-01 fully traced end-to-end and now closes VOC-004 at warehouse-manager level; SL-03 gains a price-controller role (David, desktop); AS-03 CN doctype design finalized (SCN + CCN split) with a numbering risk flagged for Finance to confirm; AS-04 LOCKED (outdoor sales = query-only, confirmed via Grace); new AS-04b (sales-to-admin relay) and AS-07 (quotation-before-order, closes VOC-014) added; AS-05 partially locked (activity log); AS-06 guiding questions drafted; NS-07 POD mechanism finalized (DO-only, DN-linked-to-INV); NS-08 mechanism detailed with a Base-feature gap identified against the Fixguru Item Historical Pricing spec.



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
| `Ivan x Gareth Macrofrozen scope lock discussion` (Fireflies transcript) | 13 Jul 2026 | Yes, full transcript | Internal scope re-check between Ivan (lead) and Gareth's team (Speaker 3). Confirms/expands AR recon, AS-01 pick-list mechanism, pricing template, credit note doc type, POD attachment behaviour; surfaces that NS-03/NS-05/NS-06 "resolved" statuses lack mechanism detail; surfaces new item historical pricing requirement. |



**Coverage warning:** The 6 May Fireflies `Macro Food F2F` transcript is not clearly duplicated in the project files. It appears to contain early sales/discovery commitments around WhatsApp ordering, order processing, AR/payment handling, catalogue/product updates, pricing, customer management and commercial discussion. I treated it as a confidence reducer where later project files do not explicitly confirm the same commitment.



---



## 2. Scope Lock Summary



| Status | Count | Items |
|-|-|-|
| **LOCKED** | 9 | SQL/customer-item master boundary; AR customer-invoice reconciliation; bulk price update + price controller role; credit-limit control; role visibility; one MAIA WhatsApp number; core document generation for SO/DO/Invoice where integration allows; outdoor sales assistant (AS-04, query-only); sales-to-admin order relay (AS-04b) |
| **LOCKED (SUPERSEDED)** | 0 | None fully qualifies; supersessions exist but lack clean client sign-off evidence. |
| **AGREED IN PRINCIPLE — IMPLEMENTATION NOT LOCKED** | 5 | Fresh-weight workflow; product catalogue/image generation; credit note support (doctype design finalized, numbering risk flagged); customer information/notes (activity log confirmed, master-field writability open); backend dashboard/reminders |
| **AGREED IN PRINCIPLE — IMPLEMENTATION PROPOSED** | 1 | AS-07 quotation-before-order (new 2026-07-14) — flow proposed, price-lock enforcement sub-question open |
| **NEEDS SCOPING** | 1 | NS-08 item historical pricing (new 2026-07-13, mechanism detailed 2026-07-14, Base-feature gap identified). NS-03/NS-05/NS-06 reopened at mechanism-detail level (feature resolved, config/detail open) — see Needs-Scoping Register. |
| **OUT OF SCOPE** | 7 | AP reconciliation; merchant/QR settlement reconciliation; delivery trip management; full WMS/barcode/QR scanning; volume-based pricing; full B2C/customer ordering app; automated WhatsApp blasting |



### Blocking open items

✅ **All previously-blocking items resolved as of 2026-07-12:**

1. **Phase 1 order/pick-list trigger — RESOLVED (AS-01).** Draft SO first → Macro Frozen picks externally → confirmed pick list uploaded → MAIA creates SO/DO/Invoice.
2. **Stock entry / GRN photo — OUT OF SCOPE (parked).** Root cause is human picking/checking error, not a system feature.
3. **Inventory aging/expiry alert — LOCKED (Phase 1, being built).**
4. **Product catalogue — AGREED IN PRINCIPLE.** Acceptance criteria (template/fields/count/output) still to lock — blocks catalogue build only, not core go-live.

**Remaining open (non-blocking):** NS-03 aging-alert mechanism detail; NS-05 credit-block approval mechanism detail; NS-06 payment-escalation routing/timing; NS-07 POD all-vs-some enforcement question + tech ticket; NS-08 item historical pricing (blocks SL-03 pricing AC — see register, Base-feature gap on transaction-date/cross-item view); AS-07 price-lock enforcement on QTN→SO conversion; AS-03 CN-numbering risk (reference field vs Finance's "mirror the number" ask); AS-05 master-data field writability; AS-06 dashboard/reminders access — guiding questions drafted, not yet asked; the picking-accountability gap (VOC-004) is now addressed at manager-level via AS-01, per-worker attribution still open if David wants it; the 4 VoC gaps + SQL-access dependency (see Dependencies).

---



## 3. Locked Scope



### SL-01 — MAIA sits on top of SQL; SQL remains customer/item master



**Status:** LOCKED  

**User-facing flow:** Authorized staff use MAIA for order/document/payment workflow; MAIA references SQL customer and item data; confirmed records are pushed/synced to SQL where integration allows.  

**SOW origin:** Proposal positions MAIA as operational layer, not replacement for SQL, and says confirmed information syncs into SQL where applicable.  

**Current locked definition:** SQL is master for customer list and item list; pricing is managed/enforced inside MAIA. This is confirmed in 4 Jun meeting notes and WhatsApp recap.  

**Acceptance criteria:** Customer and item lookup uses SQL-derived data; MAIA does not replace SQL; confirmed SO/DO/Invoice/payment outputs push to SQL only where integration is technically available.  

**Confidence:** HIGH.



---



### SL-02 — AR customer invoice reconciliation



**Status:** LOCKED  

**User-facing flow:** Finance uploads/forwards bank statement/payment slip → MAIA extracts payer/date/amount/reference → MAIA suggests invoice/customer matches → finance confirms or manually selects → payment entry/knock-off is updated where SQL integration allows.  

**SOW origin:** Proposal includes payment slip and bank statement processing, payment discrepancy review, and payment matching scenarios.  

**Current locked definition:** Existing AR interface auto-matches easy cases; ambiguous cases are surfaced for human review; finance finalises knock-off. The raw transcript confirms human checking after auto-match and manual matching where auto-match fails.  

**Acceptance criteria:**  

- Exact/clear matches are suggested automatically.  
- Mismatches are not auto-posted.  
- User can select customer/invoice manually.  
- Payment status updates only after user confirmation.  

**Confidence:** HIGH.



---



### SL-03 — Bulk price update and pricing enforcement



**Status:** LOCKED  

**User-facing flow:** David/admin uploads price update template → MAIA updates latest prices → sales order pricing uses MAIA price source → salesperson can view/adjust only within configured rules → below-floor pricing is blocked or flagged.  

**SOW origin:** Proposal includes Price Update Assistant, customer grouping with markup, and approval flows for price/exception scenarios.  

**Current locked definition:** MAIA becomes pricing source of truth; upload is via Excel template; pricing supports global wholesale, global retail, customer-specific fixed price, and minimum price protection. The transcript confirms current prices are not maintained in a system and are currently shared via WhatsApp image/word-style updates.  

**Acceptance criteria:**  

- Template upload changes prices in MAIA.  
- SO pricing uses latest MAIA price.  
- Wholesale/retail/customer-specific prices are supported.  
- Minimum price rule prevents below-floor pricing.  

**Price controller role added 2026-07-14:** David is the **price controller** — the person authorized to adjust prices (not just upload the bulk template). He does this via the **desktop app**, not WhatsApp/chatbot. This is distinct from the template-upload flow above: template upload is bulk/scheduled price refresh; the price controller role is ad-hoc/manual adjustment authority sitting on top of it.

**Confidence:** HIGH.



---



### SL-04 — Credit-limit / payment-term control



**Status:** LOCKED  

**User-facing flow:** Salesperson attempts to submit order → MAIA checks customer credit amount and payment terms from SQL → if either condition fails, order is blocked → David receives approval/override request → order proceeds only if David approves.  

**SOW origin:** Proposal includes approval flows and outstanding/payment visibility.  

**Current locked definition:** David is credit controller; MAIA blocks orders when credit limit is exceeded; blocking applies on either amount limit or payment terms exceeded. Transcript confirms “either/or amount credit” for block logic.  

**Acceptance criteria:**  

- Credit amount and term status are checked before submit.  
- Either failure blocks order.  
- David is notified as approver.  
- Override is recorded.  

**Confidence:** HIGH.



---



### SL-05 — Salesperson customer visibility



**Status:** LOCKED  

**User-facing flow:** Sales reps log into/use MAIA and only see/manage their own customers; cross-visibility between sales reps is disabled unless later approved.  

**SOW origin:** Proposal includes outdoor sales support and customer access/query workflows.  

**Current locked definition:** Each sales rep sees own customers only; no cross-visibility between reps. Transcript confirms salespeople manage their own customers and cannot check other salespeople’s customers.  

**Acceptance criteria:** Sales rep A cannot access Sales rep B’s customer list or customer-specific pricing/outstanding data.  

**Confidence:** HIGH.



---



### SL-06 — One MAIA WhatsApp number



**Status:** LOCKED  

**User-facing flow:** Authorized staff forward/input orders and workflow messages into one MAIA WhatsApp number.  

**SOW origin:** Proposal positions MAIA around WhatsApp order intake.  

**Current locked definition:** Macro Frozen will use only one WhatsApp number; product team should not design for multiple numbers unless separately raised and approved.  

**Acceptance criteria:** Phase 1 configuration uses one MAIA assistant number; no multi-number inbox routing is built.  

**Confidence:** HIGH.



---



### SL-07 — SO/DO/Invoice generation where integration allows



**Status:** LOCKED  

**User-facing flow:** User confirms order/final quantity → MAIA generates SO/DO/Invoice documents → user reviews/sends PDFs → records push to SQL where integration allows.  

**SOW origin:** Proposal includes Sales Order, Delivery Order/Delivery Note, Invoice and document generation.  

**Current locked definition:** MAIA supports SO, DO/Delivery Note and Invoice generation; SQL format samples must be matched. Meeting notes record MAIA action to review invoice, CN, DO and pick-list samples and match PDF format.  

**Acceptance criteria:**  

- SO/DO/Invoice can be generated from the confirmed order state.  
- PDFs can be reviewed before sending.  
- SQL document flow constraints are respected.  
- Current Macro Frozen sample layouts are used where feasible.  

**Confidence:** MED — locked as a functional commitment, but final format matching depends on sample documents and SQL integration.



---



## 4. Agreed in Principle — Implementation Not Locked



### AS-01 — Fresh-weight adjustment workflow



**Status:** RESOLVED — CONFIRMED (2026-07-10)

**SOW said:** Fresh-weight adjustment is Base MAIA scope; actual weight is updated before final documents are generated.  

**Now intended:** MAIA must support actual weight/quantity before final SO/DO/Invoice, but the trigger point is unresolved because Phase 1 may use Macro Frozen’s external physical pick-list flow rather than MAIA’s internal pick-list module.  

**Precise question:** Does Phase 1 start with MAIA draft SO before picking, or does Macro Frozen pick externally first and upload confirmed pick list to MAIA to create SO/DO/Invoice?  

**Answer (2026-07-10, confirmed again):** Create draft SO first. Once Macro Frozen's external pick list confirms actual weight/quantity, the SO is then confirmed.

RESOLVED — confirmed 2026-07-10.

**Mechanism detail added 2026-07-13:** Full flow is: create draft SO → submit/confirm SO → generate pick list **as a Maya PDF** → send PDF to warehouse → picker works off the PDF as a physical checklist (marks actual picked qty against ordered qty) → picked PDF uploaded back to Maya → Maya amends the SO with actual quantities → only then DN/DO/Invoice generated. This replaces the client's current WhatsApp-message pick list. Kevin (dev) supports the upload-back function; must be tested and working by **Thu 16 Jul** (this is the "happy flow," top priority, cannot slip — blocks Macro Frozen readiness).

**⚠️ Adoption risk flagged 2026-07-13:** Grace indicated (per a call the night before) that Macro Frozen may keep using their own existing pick list first rather than adopting the Maya-generated PDF flow. Ivan's instruction was "we need to do this flow" — i.e. build and test it regardless — but this is a live adoption risk, not a closed item. **Action: run one real pick → confirm → upload cycle with the actual warehouse person before go-live** (this was already flagged as an open unknown in the VoC Extraction; today's comment confirms it's still unresolved, not hypothetical).

**Mechanism detail confirmed 2026-07-14:** Full end-to-end trace — WhatsApp order comes in (e.g. 10kg) → create SO → submit SO → convert SO to pick list → generate pick list PDF → **warehouse manager** receives the PDF and shares it with the foreign-worker pickers → pickers physically pick and record actual quantity picked against the PDF → warehouse manager uploads the annotated pick list PDF back to MAIA → pick list record is updated with actual quantities → once weight/quantity is confirmed from the uploaded pick list, the SO is amended to match.

**Closes VOC-004 (picking accountability) — process-level, not per-worker digital attribution:** This flow gives accountability at the **warehouse manager** level — the manager is the single point who receives the pick list, distributes it, collects it back, and uploads it, so any quantity discrepancy is visible before the SO is amended and traceable to the manager's batch. It does **not** provide per-individual-picker digital attribution (who exactly picked which line) — that still lives on the paper PDF the manager collects, not as structured system data. If the client's "punishment of the error" expectation requires knowing exactly which foreign worker picked a given short line (not just that the batch was short), that is **not covered** by this design and would need a separate structured/enforced pick-list feature (previously scoped out under NS-02). Recommend confirming with David whether manager-level accountability is sufficient.



---



### AS-02 — Product catalogue / product update image



**Status:** AGREED IN PRINCIPLE — IMPLEMENTATION NOT LOCKED  

**SOW said:** Product Update Assistant is optional unless confirmed in writing; it can generate a ready-to-forward product update message and does not include automated WhatsApp blasting.  

**Now intended:** The handover narrative says Product Update Assistant was committed during sales and should use a fixed/standardized image/catalogue template with user review before forwarding. Meeting notes confirm image-based catalogue, wholesale/retail variants, and final format TBD pending David’s samples.  

**Precise question:** What exact template, fields, image/page count, product assets, and output format should Phase 1 generate?  

**Blocking:** NO for core order go-live; YES for catalogue build.



---



### AS-03 — Credit note support



**Status:** AGREED IN PRINCIPLE — IMPLEMENTATION NOT LOCKED  

**SOW said:** Credit Note support is included where applicable.  

**Now intended:** Finance prefers CN number to reference original invoice; MAIA document IDs are automatic; option noted to create CN in SQL then pull back, but recommendation was to use MAIA running number and Finance must align internally.  

**Precise question:** Will Macro Frozen accept MAIA running CN numbers, or must CN be created in SQL first and pulled into MAIA?  

**Blocking:** NO for core SO/DO/Invoice; YES for CN.

**Mechanism resolved 2026-07-13:** In Maya, credit note is its own doc type — "Sales Credit Note" — distinct from a generic/customer credit note, referencing the original invoice number. It does two things: reverses billing AND returns stock (i.e. tracks the stock coming back, not just the financial reversal). Sync works both directions — CN can be created in SQL and synced to Maya, or created in Maya and synced to SQL. **Only the numbering question (precise question above) remains open** — the doc-type/stock-reversal mechanism is settled.

**Doctype design finalized 2026-07-14:** SQL's single SCN currently handles both billing reversal and stock return together. MAIA/ERPNext natively splits this into two mechanisms (CN for billing, RN for stock) — so Phase 1 introduces **two doc types** to bridge that gap:
- **SCN — Sales Credit Note (new doctype):** flexible, covers the combined SQL use case — can be used for **payment + stock refund together**, or for **stock return only** (no payment impact), matching however the original SQL transaction was structured.
- **CCN — Customer Credit Note:** payment/billing only, **no stock impact** — this is the "normal/customer credit note" already referenced in the 2026-07-13 discussion.

**Numbering decision (answers the precise question above) 2026-07-14:** MAIA will **not** copy/mirror the invoice number as the CN's own number. CN gets its own MAIA-generated running number; the original invoice number is stored as a **reference field** on the CN, not as the CN's number itself.

**⚠️ Risk to confirm with Finance:** VOC-021 recorded Finance's original ask as wanting the CN number to **mirror** the invoice number specifically "so we don't confuse our customer." A reference field achieves traceability but is not the same as a mirrored number — a customer glancing at the CN number alone won't see the invoice number. Recommend explicitly confirming with Finance (Grace) that a reference field satisfies their stated concern before treating this as closed.



---



### AS-04 — Outdoor sales assistant



**Status:** LOCKED — confirmed 2026-07-14  

**SOW said:** Outdoor sales assistant supports price queries, customer outstanding/payment status, customer-facing document generation where required, and customer information updates.  

**Now intended:** Narrative keeps outdoor sales assistant in Phase 1/Base MAIA scope. Questionnaire still lists unresolved details on what field sales need, whether they take orders, and whether MAIA should provide suggested action or only raw data.  

**Precise question:** For Phase 1, should outdoor sales be query-only, order-entry capable, or document-generation capable?  

**Answer (2026-07-14, per Grace):** Salespeople don't enter orders directly into any system while in the field — they relay the order to the office **admin via WhatsApp**, and the admin does the actual order entry. This means Phase 1 outdoor sales scope is **query-only**: price lookup, customer outstanding/payment status, customer info — **not** order-entry capable. Order creation stays with office admin using the standard SO flow.

**Blocking:** NO.



---



### AS-04b — Sales-to-admin order relay (new, derived from AS-04 answer)

**Status:** LOCKED — 2026-07-14

Confirms the real-world entry point for orders: sales rep → WhatsApp message to office admin → admin creates SO in MAIA. This is consistent with SL-06 (one MAIA WhatsApp number) and VOC-001 (order comes via WhatsApp). No separate field-sales order-entry UI is needed for Phase 1.



---



### AS-05 — Customer information updates / notes / preferences



**Status:** AGREED IN PRINCIPLE — IMPLEMENTATION NOT LOCKED  

**SOW said:** Customer information updates through MAIA may include contacts, phone numbers, addresses, billing addresses, remarks, preferences and discussion notes.  

**Now intended:** Transcript demonstrates customer notes/preferences can be stored, surfaced, and learned for future order accuracy.  

**Precise question:** Which customer fields are writable in Phase 1, and which require approval before syncing to SQL?  

**Partial answer confirmed 2026-07-14:** Sales users can record **notes, events, and tasks** under a customer's profile — an activity log to track their interactions/history with that customer. This part is locked in as a feature. **Still open:** which *master-data* fields (address, contact, phone, billing address etc.) are directly writable vs require approval before syncing to SQL — the original precise question above is unresolved for master-data fields specifically, only for the activity-log piece.

**Blocking:** NO.



---



### AS-06 — Backend dashboard and daily reminders



**Status:** AGREED IN PRINCIPLE — IMPLEMENTATION NOT LOCKED  

**SOW said:** Backend dashboard and daily reminders are included for visibility over orders, payment matching, exceptions, document trail and pending tasks.  

**Now intended:** Handover narrative lists backend dashboard and daily reminders in Phase 1, but acceptance criteria and exact widgets/reminders are not defined.  

**Precise question:** What dashboard statuses and daily reminders are required for Phase 1 go-live?  

**Guiding questions drafted 2026-07-14 (to structure the client conversation, not yet asked):**
1. Who should have access to the dashboard at all — David only, David + Finance, David + Finance + Sales, or all roles (incl. warehouse manager)?
2. Does access differ by role — e.g. should Sales only see their own customers' orders/outstanding on the dashboard, mirroring the SL-05 sales-isolation rule, or should the dashboard be a full cross-account view for whoever has access?
3. What should the dashboard actually show — order status pipeline, payment/AR exceptions, pending approvals (credit blocks), document trail, or a combination? Which of these is most important to see first?
4. For daily reminders: who receives them — same access list as the dashboard, or a narrower set (e.g. only David + Finance for payment reminders, only warehouse manager for pick-list reminders)?
5. What triggers a reminder — a fixed daily schedule (e.g. every morning), or event-based (e.g. immediately when an order is blocked or a payment goes overdue)?
6. Should reminders be delivered inside MAIA only, or also pushed to WhatsApp/Telegram given the team is WhatsApp-driven?

**Blocking:** NO.



---



### AS-07 — Quotation before order (new 2026-07-14, closes VOC-014)

**Status:** AGREED IN PRINCIPLE — IMPLEMENTATION PROPOSED, not yet walked through with client

**VoC said:** Big customers request a quotation first; client wants a price-lock so a lower PO price than what was quoted gets surfaced or blocked (VOC-014). Previously had no scope-lock home.

**Proposed flow (Gareth, 2026-07-14):** Create QTN (Quotation) for the big customer → edit/set price on the QTN → submit QTN → convert QTN to SO.

**⚠️ Open sub-question — not yet answered by this proposal:** VOC-014's actual pain was the **price-lock/enforcement**, not just the existence of a quotation document. Does converting a submitted QTN to SO carry the quoted price forward as a floor (i.e. block or flag a SO priced lower than the QTN), or can the SO be freely edited down after conversion with no check? This needs to be explicitly defined before AS-07 can move to LOCKED — otherwise the flow exists but the actual pain point (customer/salesperson underselling relative to the quote) isn't addressed.

**Blocking:** NO for core go-live; recommend resolving before catalog/pricing UAT since it touches SL-03.



---



## 5. Needs-Scoping Register



| ID | Item | What is unclear | Precise closing question | Decider | Blocking |
|-|-|-|-|-|-|
| NS-01 | Phase 1 order/pick-list trigger | SOW target, meeting notes and WhatsApp recap describe different order/pick timing. | “For Phase 1, should MAIA create a draft SO before picking, or should Macro Frozen pick externally first and upload the confirmed pick list so MAIA creates SO/DO/Invoice?” | David + MAIA delivery lead | YES |
| NS-02 | Stock entry / GRN photo | Narrative treats it as Phase 1/to-clarify; meeting reframes root cause as human checking error and says no direct Phase 1 feature. | “Is GRN photo/simple stock entry included in Phase 1, deferred, or separately priced?”  <br/>**Answer (2026-07-12):** Not for now — parked. | David + sales owner + delivery lead | RESOLVED — parked (not for now) |
| NS-03 | Inventory aging / expiry alert | Meeting notes say agreed; WhatsApp recap says not Phase 1 / to explore. | “Should near-expiry/slow-moving stock alert be delivered in Phase 1, or parked after core go-live?”  <br/>**Answer (2026-07-10):** Being built now — targeted for Phase 1.  <br/>**Reopened 2026-07-13:** feature is being built, but trigger threshold, alert recipient, and cadence were never defined — Ivan: "you need to have the details, how this works." | David | RESOLVED (feature) / **OPEN (mechanism — threshold, recipient, cadence)** |
| NS-04 | Pro forma invoice | Proposal includes proforma where required; meeting says dedicated proforma document needs confirmation. | “Do you require a document explicitly titled ‘Pro Forma Invoice’, or is MAIA Sales Order sufficient?”  <br/>**Answer (2026-07-10):** MAIA already has Pro Forma Invoice in the product now. | David / Finance | NO |
| NS-05 | Approval flows beyond credit | SOW includes broad approval flows; only credit-limit approval is defined. | “Besides credit limit/payment-term block, what exact approval triggers are required in Phase 1?”  <br/>**Answer (2026-07-12):** MAIA already has approval flows — we have this as well.  <br/>**Reopened 2026-07-13:** the actual ask is a **credit block** approval (not credit limit) — a credit controller role approves an order when the customer is credit-blocked. Ivan: "you need to answer deeper." Mechanics (who is the controller, approval UI, override record) not yet documented. | David | RESOLVED (feature) / **OPEN (mechanism — credit-block approval flow detail)** |
| NS-06 | Payment chasing escalation | Meeting parks overdue notifications/escalation but sequence is not locked. | “Who receives overdue alerts first: account, salesperson, David, or all three; and at what timing?”  <br/>**Answer (2026-07-10):** MAIA already has overdue alert now.  <br/>**Reopened 2026-07-13:** Ivan re-raised the identical routing question live in this meeting — "who receive overdue alert first" is still unanswered by the client. Alert feature exists; routing/sequence does not. | David / Finance | RESOLVED (feature) / **OPEN (routing/sequence — still needs David)** |
| NS-07 | POD attachment without delivery module | Delivery module is out of scope, but signed DO/photo attachment was discussed. | ~~“In Phase 1, should driver-sent signed DO photos be attached manually to orders, or is POD tracking fully deferred with delivery trip management?”~~ **Sharpened 2026-07-13 (Ivan):** Expected behavior settled — POD is a normal photo attachment, required upload **before** a DO can be marked "delivered" (upload-gates-status). Open question is narrower: **"Do ALL DOs require POD, or only some?"** If all → hard enforcement block is buildable. If only some → system can't cleanly enforce a block, needs a different design (e.g. optional/conditional field). Separately: check with tech whether the delivered-trip/stock tracking gap (currently Out-of-Scope) needs its own ticket regardless of the POD answer.  <br/>**Prior answer (2026-07-10):** Still planning — exploring ERPNext capability for this.  <br/>**Mechanism finalized 2026-07-14:** POD photo attaches to the **DO only** — it is not attached to the Invoice. Traceability from Invoice back to proof-of-delivery is achieved by **linking DN (Delivery Note) to the Invoice**, not by duplicating the photo onto the invoice record. The all-vs-some enforcement question remains open. | David + MAIA delivery lead / tech (Beyon) | NO — but **client question (all-vs-some) + internal tech ticket both still open** |
| NS-08 | Item historical pricing | **New 2026-07-13.** During a call the night before, Grace (finance admin) told the team Macro Frozen uses item historical pricing for customer pricing — i.e. past transaction prices inform current customer-specific pricing. Not previously captured anywhere in scope. | “Confirm exact mechanism: is historical pricing a reference lookup (last price charged to this customer for this SKU) surfaced during order entry, or does it drive automatic pricing suggestions? How many periods of history are needed?”  <br/>**Detail confirmed 2026-07-14:** When sales/admin create an SO for a regular customer, they need to check that customer's pricing history — specifically last SO/SI price offered, across items, with discount and transaction date, before finalizing the new order's price.  <br/>**Base feature reference:** MAIA already has a related Base feature — [[01 - MAIA Product/Product Specs/Item Historical Pricing/Item Historical Pricing & Discount]] (built for Fixguru, v0.5) — which surfaces last price + discount % inline in the unit-price dropdown at order entry.  <br/>**⚠️ Gap vs Macro Frozen's ask:** The existing Base feature shows only the **single latest price** per item (dropdown label "Last Price"/"Past Price"), not a transaction date, and only one item at a time — not a cross-item view. Macro Frozen's ask (transaction date shown, checked across multiple items) **exceeds current Base scope** — the spec explicitly lists "multiple past prices as separate rows" and "price history graph" as Out of Scope/Future. This needs either a scope-widening decision or managing Macro Frozen's expectation down to what Base already does. | David / Grace | **YES — blocks SL-03 pricing acceptance criteria until scoped; needs feasibility check on the transaction-date + cross-item gap** |



---



## 6. Supersessions Log



| Risk | SOW said | Now intended | Changed by / when | Rationale | Client agreed? |
|-|-|-|-|-|-|
| HIGH | WhatsApp order → MAIA draft SO → fresh weight adjustment → documents/SQL. | Phase 1 may keep pick list outside MAIA; WhatsApp recap says confirmed physical pick list uploaded to MAIA, then MAIA creates SO/DO/Invoice. | 4 Jun requirements discussion / recap | Macro Frozen’s current pick-list process is paper/route-based and MAIA pick-list flow is not ready for adoption. | PARTIAL / NOT CLEANLY EVIDENCED |
| HIGH | Stock entry / GRN photo/simple stock update appears in handover scope. | Meeting conclusion: stock-entry pain is human weighing/data-entry/checking error; no direct MAIA Phase 1 feature; WMS/barcode is future/out of scope. | 4 Jun requirements discussion | GRN extraction does not solve wrong picking/checking root cause. | NOT EVIDENCED |
| MED | Product Update Assistant optional unless confirmed in writing. | Handover says committed during sales; meeting treats image catalogue as a feature but final format TBD. | Sales handover + 4 Jun meeting | Client wants image catalogue because older customers will not open PDFs. | YES to direction; NO to detailed implementation |
| MED | Documents include proforma where required. | Dedicated proforma invoice is flagged for confirmation; SO may serve similar role but is not a proper invoice. | 4 Jun discussion | Some financiers require a document with the word “invoice.” | NOT EVIDENCED |



---



## 6b. Dependencies & Blockers

| ID | Dependency | Status | Impact | Owner |
|-|-|-|-|-|
| DEP-1 | **SQL vendor integration access** | OPEN — live blocker | Go-live blocked until granted; MAIA cannot pull live customers/SKUs for training/integration | Product coordinates · SQL vendor grants |
| DEP-2 | Client sign-off + named UAT signatory | OPEN | Gate-2 (M3) not fully passed until signed; M8 UAT needs a named signatory | Onboarding PM + David |

---

## 7. Out-of-Scope / Explicit Exclusions



| Item | Reason / boundary | Source |
|-|-|-|
| AP reconciliation / supplier payment reconciliation | Future phase; AR customer invoice reconciliation is the Phase 1 finance scope. | |
| Merchant/QR settlement reconciliation | Explicitly confirmed out of scope; MAIA handles customer invoice AR, not merchant settlement reconciliation. | |
| Delivery trip management / driver app / route planning | Post-Phase 1 add-on. | |
| Full WMS / barcode / QR scanning | Future phase; high cost and SOP adoption requirement. | |
| Volume-based pricing tiers | Not supported in current MAIA; flagged as gap/no enforcement for now. | |
| Full B2C customer ordering app / customer-facing ordering chatbot | Explicit boundary in narrative unless separately approved. | |
| Fully automated WhatsApp broadcast/blasting | Catalogue output may be generated, but manual review/forwarding is the boundary unless separately scoped and technically/policy supported. | |



---



## 8. Source-Conflict Register



| Conflict | Evidence A | Evidence B | Resolution |
|-|-|-|-|
| Phase 1 pick-list flow | Meeting notes: target workflow includes MAIA draft SO → pick → confirm weight, but pick-list flow inside MAIA is Phase 2 / may remain outside MAIA initially. | WhatsApp recap: Sales creates draft SO internally, runs own pick list, uploads confirmed pick list to MAIA, then MAIA creates SO/DO/Invoice. | ✅ Resolved 2026-07 (AS-01): draft SO first, external pick confirms weight. |
| Stock entry / GRN | Narrative: GRN photo/simple stock entry appears in Phase 1 list or needs pricing clarification. | Meeting notes: no direct MAIA feature for stock-entry pain; GRN extraction does not solve root cause. | ✅ Resolved 2026-07: GRN stock entry parked (out of scope); real need = picking accountability, **now addressed at warehouse-manager level via AS-01's pick-list-PDF flow (2026-07-14)** — per-worker digital attribution still open if David wants it beyond manager-level. |
| Inventory aging / expiry | Meeting notes: inventory aging/expiry alert agreed feature. | WhatsApp recap: stock/inventory alerts “to be explored — not in Phase 1 scope.” | ✅ Resolved 2026-07: aging alert LOCKED, Phase 1 (being built). |
| Product Update Assistant status | Proposal page says optional add-on unless confirmed in writing. | Handover narrative says it was committed during sales to close the deal. | Direction is in scope; implementation not locked without template/fields/output confirmation. |



---



## 9. Client Confirmation Agenda



Use this in the next client conversation. Each answer should close one lock risk.



1. **Phase 1 order flow:** “For Phase 1, should MAIA create a draft Sales Order before warehouse picking, or should your team complete the physical pick list first and upload the confirmed pick list so MAIA creates SO/DO/Invoice?”  
2. **Pick-list ownership:** “Will Macro Frozen continue using its own physical pick list for Phase 1, with MAIA only consuming the confirmed final quantity/weight?”  
3. **Fresh-weight confirmation:** “After actual weight/quantity is confirmed, should MAIA automatically generate DO/Invoice for review, or wait for an explicit ‘confirm and generate’ command?”  
4. **Stock entry / GRN:** “Is GRN photo/simple stock entry expected in Phase 1, deferred, or separately scoped?”  
5. **Inventory aging/expiry:** “Do you expect near-expiry or slow-moving stock alerts in Phase 1, or should this be after core go-live?”  
6. **Product catalogue:** “Please confirm the catalogue template, required fields, product image source, number of products per image/page, and whether output should be image-only, PDF, or both.”  
7. **Pro forma invoice:** “Do you need a dedicated document titled ‘Pro Forma Invoice’, or is a Sales Order enough for deposit/payment request use cases?”  
8. **Credit note numbering:** “Will Finance accept MAIA running CN numbers, or must CN be created in SQL using the original invoice reference?”  
9. **Approvals:** “Besides credit limit/payment-term block, what exact approval triggers are required in Phase 1?”  
10. **Outdoor sales:** “For Phase 1, should outdoor sales users only query price/outstanding/customer info, or should they also create orders and request documents?”  
11. **POD/signed DO:** “For Phase 1, should signed DO photos be attached to orders manually, or should proof-of-delivery tracking be deferred with the delivery trip module?”  
12. **Payment escalation:** “When a customer is overdue, should MAIA notify Finance first, Sales first, David first, or all three — and after how many days?”
13. **Item historical pricing:** “Grace mentioned you use item historical pricing for customer pricing — is this a lookup of the last price charged to that customer for that SKU during order entry, or should it drive automatic pricing suggestions? How many periods of history matter?”
14. **POD enforcement scope:** “Do ALL delivery orders require a proof-of-delivery photo before being marked delivered, or only some? If only some, what determines which ones?”
15. **Inventory aging alert detail:** “What should trigger a near-expiry/slow-moving alert (days-to-expiry threshold, stock-age threshold), and who should receive it?”
16. **Credit-block approval detail:** “When an order is blocked for exceeding credit limit, who exactly is the approver, and do you want an override reason recorded?”
17. **Picking accountability sufficiency:** “The pick-list PDF flow now gives accountability at the warehouse manager level — any quantity discrepancy is visible before the SO is amended. Is that enough, or do you need to know exactly which individual picker picked a short/wrong line?”
18. **Quotation price-lock:** “Once a Quotation is submitted for a big customer, should the Sales Order created from it be blocked or flagged if someone tries to price it lower than the quote — or is that not necessary?”
19. **CN numbering confirmation (Finance/Grace):** “The credit note will carry the original invoice number as a reference field, but will run its own separate number series rather than copying the invoice number. Does that meet your need to avoid confusing customers, or do you specifically need the CN number itself to match the invoice number?”
20. **Master-data field writability:** “Beyond notes/events/tasks logging, which customer master fields — address, phone, billing address, contact — should sales/admin be able to edit directly in MAIA, and which should require approval before syncing to SQL?”
21. **Dashboard & reminders access (see AS-06 guiding questions above):** who has dashboard access, does it differ by role, what should it show first, who gets daily reminders, what triggers them, and should they also push to WhatsApp/Telegram.
22. **Item historical pricing scope:** “You mentioned checking last SO/SI pricing across items with discount and transaction date when quoting regular customers — MAIA's current base feature shows only the single latest price per item, not a date or multi-item view. Is the latest-price-per-item view sufficient, or do you specifically need the transaction date and a side-by-side view across items?”
