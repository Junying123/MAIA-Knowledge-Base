---
owner: Gareth
status: draft
last_reviewed: 2026-07-14
lark_url: https://eg69120xnei.sg.larksuite.com/docx/HWQddZGpio5iROxedovlI9yNgCb
---

# Macro Frozen — UAT Checklist (Phase 1 Core)

> Lens 3 deliverable per the Product Onboarding SOP — authored at M3, run by the
> client at M8 (Core UAT). Tests **only** what the Scope Lock marks LOCKED.
> Sources: Customer Narrative, Scope Lock v1 (updated 2026-07-14), VoC Extraction (updated 2026-07-14), prior v2 checklist (2026-07-12).
> All four sources present — no missing-source warning.
> **v3 — reconciled against the 2026-07-14 Grace clarification call.** New: SL-08
> (customer-agent assignment), NS-06 fully resolved (payment-escalation routing),
> NS-08 fully resolved (item historical pricing), AS-04/AS-04b locked (outdoor
> sales query-only + WhatsApp relay), AS-05 partially locked (activity log only).
> **Removed/escalated:** NS-07 (POD) is now a hard client conflict, not just
> unbuilt — excluded from testing entirely pending David's decision, not just
> "planning."

---

## STEP 1 — Scope Inventory

| Scope ID | Item name | Status | Client agreed? | Testable? |
|---|---|---|---|---|
| SL-01 | MAIA on SQL — SQL is customer/item master | LOCKED | YES | **YES** |
| SL-02 | AR customer-invoice reconciliation | LOCKED (adoption-risk flagged) | YES | **YES** |
| SL-03 | Bulk price update + pricing enforcement + price-controller role (David, desktop) | LOCKED | YES | **YES** |
| SL-04 | Credit-limit / payment-term control | LOCKED | YES | **YES** |
| SL-05 | Salesperson customer visibility | LOCKED | YES | **YES** |
| SL-06 | One MAIA WhatsApp number | LOCKED | YES | **YES** |
| SL-07 | SO / DO / Invoice generation (+ CN doctype split: SCN/CCN, + Proforma) | LOCKED | YES | **YES** |
| SL-08 | Customer → sales-agent assignment (new 2026-07-14) | LOCKED | YES | **YES** |
| AS-01 | Fresh-weight / pick-list PDF workflow (warehouse manager mediated) | RESOLVED → locked | YES | **YES — top priority, deadline 16 Jul** |
| AS-04 | Outdoor sales assistant — query-only | LOCKED (confirmed via Grace, 2026-07-14) | YES | **YES** |
| AS-04b | Sales-to-admin WhatsApp order relay | LOCKED (2026-07-14) | YES | **YES** (tested as a Must-NOT boundary alongside AS-04) |
| AS-05 | Customer info — **activity log only** (notes/events/tasks) | Partially LOCKED (2026-07-14) | YES (activity log); NO (master fields) | **YES — activity log only**; master-field edits → 4b |
| NS-04 | Pro forma invoice | RESOLVED — in product | UNKNOWN (sign-off) | **YES** (exists; verify) |
| NS-05 | Approval flows (generic route) | RESOLVED (feature) / OPEN (credit-block mechanism detail) | UNKNOWN | **YES** (generic route only, per existing credit tests) |
| NS-06 | Payment chasing escalation | **RESOLVED 2026-07-14** — full routing confirmed (Finance, responsible salesperson, Sales Manager, David) | YES | **YES — newly testable** |
| NS-08 | Item historical pricing | **RESOLVED 2026-07-14** — matches existing Base feature exactly | YES | **YES — newly testable** |
| AS-02 | Product catalogue / image | AIP — AC open; catalog-creation mechanism confirmed David-only | NO | NO → 4b |
| AS-03 | Credit-note **numbering** rule | AIP — AC open (reference field vs mirrored number risk) | NO | NO (CN *generation*/doctype-split tested under SL-07; numbering rule → 4b) |
| AS-06 | Backend dashboard / reminders | AIP — guiding questions drafted, not yet asked | NO | NO → 4b |
| AS-07 | Quotation-before-order / price-lock | AIP — PROPOSED, not locked; real-world usage confirmed low | NO | NO → 4b |
| NS-02 | Stock entry / GRN photo | OOS — parked | NO | NO → 4b |
| NS-03 | Inventory aging / expiry alert | RESOLVED (feature) / OPEN (mechanism — threshold/recipient/cadence) | UNKNOWN | NO yet → 4b (test when mechanism defined) |
| NS-07 | POD attachment / mark-as-delivered | **🚫 BLOCKED — client conflict** (Grace explicitly rejects the design) | NO | **NO — excluded entirely, not just unbuilt** |
| NS-09 | Stock-expiry alert — sales inclusion (new) | NEEDS SCOPING | UNKNOWN | NO → 4b |
| NS-10 | Backup coverage — Logistics/Finance Manager absence (new) | NEEDS SCOPING | UNKNOWN | NO → 4b (operational gap, not a system feature) |
| NS-11 | Warehouse Maya access model (new) | NEEDS SCOPING | UNKNOWN | NO → 4b |
| OOS-* | AP recon · QR settlement · delivery trip · WMS · volume pricing · B2C · blasting | OUT OF SCOPE | — | NO → 4b |

**Testable set:** SL-01…SL-08, AS-01, AS-04, AS-04b, AS-05 (activity log only), NS-04, NS-05, NS-06, NS-08 (16 items — up from 10 in v2).

---

## STEP 2 — Unhappy-Path Bank

Cases U1–U28 carried over unchanged from v2 (see prior version history); new cases below reflect the 2026-07-14 call.

| # | Trigger type | Real situation from the docs | Stresses |
|---|---|---|---|
| U1–U28 | *(unchanged — see Traceability table; full text preserved from v2)* | | |
| U29 | Wrong actor/permission | CK is a third-party driver with 3 customers under his own agent code — Macrofrozen staff should NOT manage/view these as normal sales customers | SL-08 |
| U30 | Must-NOT | Salesperson in the field tries to create a Sales Order directly instead of relaying via WhatsApp to office admin | AS-04, AS-04b |
| U31 | Missing/incomplete | Item has no prior invoice history for a given customer — MAIA must not fabricate a "last price" | NS-08 |
| U32 | Wrong actor/permission | Sales Manager's overdue-alert view should show only his own two reports' (Aben, Quinny) overdue invoices, not all reps' | NS-06 |
| U33 | Wrong actor/permission | Sales rep B tries to view rep A's logged customer notes/activity log | AS-05, SL-05 |

**Must-NOT cases (highest value):** U5, U11, U13, U14, U15, U16, U21, U26, U29, U30.

---

## STEP 3 — UAT Checklist

*(HP-01 through UP-27 carried over unchanged from v2 — full table preserved below; new cases HP-12 through HP-16 and UP-28 through UP-33 added for the 2026-07-14 reconciliation.)*

| Test ID | Scope ref | Path | Trigger type | Role / actor | Precondition | Steps | Test data | Expected result | Pass/Fail | Tester & date |
|---|---|---|---|---|---|---|---|---|---|---|
| HP-01 | SL-06 | Happy | — | Sales/admin | MAIA number live; user authorised | 1. Forward a customer WhatsApp order into the one MAIA number. 2. Wait for MAIA reply. | Text order: "3 boxes pork belly, deliver Fri" | MAIA acknowledges and returns an extracted draft (customer, item, qty) in the same WhatsApp thread. |  |  |
| HP-02 | SL-01 / SL-07 | Happy | — | Sales/admin | Customer + item exist in SQL | 1. Forward order. 2. Review MAIA's extracted draft SO. 3. Confirm. | Customer: {real SQL customer}; item: {real SKU} | Draft SO shows SQL-sourced customer + item + price; on confirm a SO is created referencing SQL data. |  |  |
| HP-03 | AS-01 | Happy | — | Sales + warehouse manager | Draft SO created before picking | 1. Create + submit draft SO for 10 kg. 2. Convert SO to pick list, generate PDF. 3. Warehouse manager shares PDF with foreign-worker pickers. 4. Pickers record actual picked qty on the PDF. 5. Warehouse manager uploads the annotated PDF back to Maya. 6. SO is amended to actual quantity. 7. Generate DO + Invoice. | Ordered 10 kg → picked 9.5 kg | Pick list PDF is generated correctly; upon upload the SO is amended to **9.5 kg**; DO and Invoice both reflect 9.5 kg and the recalculated amount, not 10 kg. **Top priority — deadline Thu 16 Jul.** |  |  |
| HP-04 | SL-02 | Happy | — | Finance/account | Outstanding invoice + matching bank line exist | 1. Upload bank statement + payment slip. 2. Review MAIA's suggested match. 3. Confirm. | Payment RM {amt} = invoice {no.} | MAIA auto-suggests the correct invoice match; on confirm the invoice is knocked off. Nothing posts before confirm. *(Note: client adoption skepticism flagged — see 4c.)* |  |  |
| HP-05 | SL-03 | Happy | — | David / admin | Price template available | 1. Upload the MAIA price-update template with ~30 changed SKUs. 2. Create a SO for one changed item. | 30 SKUs, e.g. item X RM18→RM20/kg | MAIA updates prices; the new SO uses the **latest** price (RM20). |  |  |
| HP-05b | SL-03 | Happy | — | David (price controller) | Desktop app access | 1. Log into the desktop app as David. 2. Manually adjust a single item's price (ad-hoc, not via template). | Item Y: RM12 → RM13.50/kg | Price updates immediately; subsequent SOs for that item use RM13.50. |  |  |
| HP-06 | SL-03 | Happy | — | Sales rep | Customer has a customer-specific fixed price | 1. Create SO for that customer + item. | Customer A, item X, fixed RM16.50/kg | SO auto-applies RM16.50/kg without manual entry. |  |  |
| HP-07 | SL-04 | Happy | — | Sales rep | Customer within credit limit | 1. Create + submit SO under the limit. | Limit RM5,000; exposure RM2,000 | SO submits normally; no block. |  |  |
| HP-08 | SL-05 | Happy | — | Sales rep A | Rep A owns customer set A | 1. Log in as A. 2. List/search customers. | Rep A | Only A's own customers are visible. |  |  |
| HP-09 | SL-07 | Happy | — | Sales/admin | Confirmed SO exists | 1. Generate SO, DO, Invoice PDFs. 2. Review each. | Confirmed order | All three PDFs render with correct header, customer, line items, totals; reviewable before send. |  |  |
| HP-10 | NS-04 | Happy | — | Sales rep | Customer needs a document titled "invoice" for deposit | 1. Generate a Pro Forma Invoice from the SO. | Deposit 30% case | A document explicitly titled **Pro Forma Invoice** is produced with the order detail. |  |  |
| HP-11 | SL-07 | Happy | — | Finance/admin | Original invoice exists; correction reason agreed | 1. Open the invoice. 2. Choose Sales Credit Note (SCN). 3. Enter reason + adjustment (billing + stock return). 4. Submit. | Original invoice {no.}; reason: return | SCN is created referencing the original invoice; it auto-generates a linked Customer CN (CCN) that performs the knock-off; stock is tracked back in. PDF viewable. *(CN numbering rule = AS-03, not asserted here.)* |  |  |
| HP-11b | SL-07 | Happy | — | Finance/admin | Original invoice exists, no stock return (e.g. pricing correction only) | 1. Open the invoice. 2. Choose Customer Credit Note (CCN) directly. 3. Enter reason. 4. Submit. | Invoice {no.}; pricing correction, no goods returned | CCN is created — billing/knock-off only, **no stock movement recorded**, distinct from the SCN case above. |  |  |
| HP-12 | SL-08 | Happy | — | Sales/admin | Customer assigned to CJ Tan in SQL | 1. Look up the customer in MAIA. 2. Check assigned agent. | Customer under CJ Tan's agent code | MAIA shows CJ Tan as the responsible agent; customer appears in CJ Tan's own customer list (ties to SL-05). |  |  |
| HP-13 | AS-04 | Happy | — | Salesperson (field) | Customer + item exist | 1. From the field, query MAIA for a customer's outstanding balance and an item's current price. | Customer X outstanding RM1,200; item Y price | MAIA returns the requested price/outstanding/customer info — read-only, no order created. |  |  |
| HP-14 | NS-08 | Happy | — | Sales/admin | Customer has at least one prior invoice for the item | 1. Start creating a new SO for a regular customer. 2. Open the unit-price field for an item with prior history. | Item Z, customer has 1 prior invoice at RM20/kg | MAIA shows the last invoiced price (RM20) inline in the price dropdown, matching the existing Base "last price" feature. |  |  |
| HP-15 | NS-06 | Happy | — | Finance, salesperson, Sales Manager, David | Invoice overdue | 1. Let an invoice pass its due date unpaid. 2. Check each recipient's notifications. | Overdue invoice, responsible rep = Aben | Finance, Aben (the responsible salesperson), the Sales Manager, and David all receive the overdue alert. |  |  |
| HP-16 | AS-05 | Happy | — | Sales rep (own customer) | Customer profile exists | 1. Open own customer's profile. 2. Add a note/event/task logging a recent interaction. | "Called customer 14 Jul re: delivery delay" | Note is saved and visible on the customer's activity log for future reference. |  |  |
| UP-01 | SL-01 | Unhappy | Ambiguity | Sales/admin | Item wording differs from SQL | 1. Forward "pork belly slight". 2. Review MAIA extraction. | "pork belly slight" = pork belly slice skin-on | MAIA maps to the correct SQL SKU **or**, if it cannot, surfaces the line for manual selection — it does NOT silently pick a wrong item. |  |  |
| UP-02 | SL-01 | Unhappy | Missing/incomplete | Sales/admin | Chinese price-list name ≠ English SQL name | 1. Forward an order using the Chinese item name. | 中文品名 vs English SKU | MAIA matches via learned mapping, or asks the user to confirm the SKU — no phantom line. |  |  |
| UP-03 | AS-01 | Unhappy | Downstream integrity | Warehouse manager + sales | Draft SO at ordered weight | 1. Order 10 kg. 2. Pick-list PDF comes back annotated 8 kg picked. 3. Upload PDF. 4. Generate DO/Invoice. | 10 kg ordered → 8 kg picked | SO is amended to 8 kg on upload; DO + Invoice bill **8 kg**. Neither shows 10 kg. Amount recalculated. |  |  |
| UP-04 | SL-02 | Unhappy | Must-NOT | Finance/account | Payer name ≠ customer name | 1. Upload a payment slip where payer differs from the invoice customer. | Payer "XYZ Trading" vs invoice "Macro cust ABC" | MAIA does **NOT** auto-map. It flags the mismatch and asks the user to select the correct customer before any update. |  |  |
| UP-05 | SL-04 | Unhappy | Boundary/limit | Sales rep | Customer over limit / unpaid last invoice | 1. Create SO that pushes exposure over limit. 2. Try to submit. | Limit RM5,000; exposure RM6,200 | Order is **blocked**; MAIA notifies David as approver. SO cannot become DO without approval. |  |  |
| UP-06 | SL-04 | Unhappy | Wrong actor/permission | Sales rep | Over-limit order pending | 1. As the sales rep, attempt to approve/override the block yourself. | Rep ≠ David | Self-approval is refused; only David (credit controller) can approve; the override is recorded. |  |  |
| UP-07 | SL-03 | Unhappy | Boundary/limit | Sales rep | Item has a min-price floor | 1. Create SO and enter a price below the floor. | Floor RM16.50/kg → enter RM15.50 | MAIA blocks or flags below-floor pricing; the SO cannot proceed at RM15.50. |  |  |
| UP-08 | SL-07 | Unhappy | Conflict/duplicate | Sales/admin | SO already has a submitted invoice | 1. Try to create a second invoice from the same submitted SO. | Submitted SO {no.} | MAIA validates and **blocks** the duplicate on submit. |  |  |
| UP-09 | SL-07 | Unhappy | Downstream integrity | Sales/admin | DO qty = 8 kg | 1. Try to generate an invoice for 10 kg against an 8 kg DO. | DO 8 kg, invoice attempt 10 kg | Invoice qty cannot exceed DO qty; MAIA prevents it (respects SQL constraint). |  |  |
| UP-10 | SL-05 | Unhappy | Wrong actor/permission | Sales rep B | Customer belongs to rep A | 1. As B, search/open A's customer. | Rep B → A's customer | Access denied; no customer, pricing, or outstanding data of A's customer is shown to B. |  |  |
| UP-11 | SL-06 / SL-07 | Unhappy | Ambiguity | Sales/admin | Free-form / voice-note order | 1. Send a voice note or vague message. 2. Review. | Voice note, mixed Chinese/English | MAIA extracts a best-effort draft and **requires human review/confirm** before any SO is created — never auto-submits. |  |  |
| UP-12 | OOS | Unhappy | Must-NOT | David / admin | Catalogue generated | 1. Ask MAIA to blast the catalogue to all 300–400 customers. | "send to everyone" | MAIA does **NOT** auto-blast. It produces the catalogue for manual review/forward and states blasting is not supported. |  |  |
| UP-13 | SL-01 / AS-01 | Unhappy | Must-NOT | Sales/admin | Draft SO not yet confirmed | 1. Create a draft SO. 2. Check SQL before confirming. | Unconfirmed draft | Nothing is pushed to SQL until the SO is confirmed at final weight. |  |  |
| UP-14 | OOS | Unhappy | Must-NOT | Finance | QR-merchant settlement report | 1. Upload a QR-merchant daily settlement report for reconciliation. | Merchant settlement file | MAIA does not attempt merchant-settlement reconciliation; it stays outside scope (customer-invoice AR only). |  |  |
| UP-15 | SL-01 | Unhappy | Must-NOT | Sales/admin | — | 1. Try to edit a customer's master record (name/credit) in MAIA. | Master field edit | MAIA does not overwrite SQL as master; edits route to SQL / are not treated as source of truth. |  |  |
| UP-16 | SL-07 / SL-01 | Unhappy | Missing/incomplete | Sales/admin | Item master loaded | 1. Forward an order with customer + item but **no quantity**. 2. Try to continue. | "AGF wants pork belly skin-on, deliver PJ" (no qty) | MAIA asks for the missing quantity/UOM and keeps the draft incomplete until supplied — does not guess. |  |  |
| UP-17 | AS-01 | Unhappy | Invalid input | Warehouse manager | Draft SO for kg-based item | 1. Enter an invalid actual weight on the pick list. 2. Try to upload. | Actual weight: **-3 kg** / "ten box" | MAIA rejects the value, asks for a valid numeric weight/UOM; no amount recalculated from invalid input. |  |  |
| UP-18 | SL-02 | Unhappy | Boundary/limit | Finance/account | Customer has outstanding | 1. Upload a partial-payment slip. 2. Confirm match. 3. Check outstanding. | Outstanding RM5,000; payment **RM2,000** | MAIA allocates RM2,000 only after confirm and shows **remaining RM3,000** outstanding. |  |  |
| UP-19 | SL-01 / SL-07 | Unhappy | Interruption/wrong state | Admin/manager | SQL sync temporarily down | 1. Submit / refresh a record while SQL sync is down. 2. Check status. | Simulated SQL vendor / API outage (ref VOC-028) | MAIA shows **sync failure / pending retry** — it does NOT falsely show the record as successfully updated in SQL. |  |  |
| UP-20 | SL-03 | Unhappy | Missing/incomplete | Sales/admin | Customer has no group | 1. Create draft order for an ungrouped customer. 2. Try to price. | Customer with no wholesale/retail group | MAIA flags the missing group / price rule and requires assignment or an authorised price decision before proceeding. |  |  |
| UP-21 | SL-03 | Unhappy | Invalid input | David/admin | Price upload active | 1. Upload a bad price template. 2. Review validation. | Missing SKU column, invalid SKU, wrong UOM, negative price | MAIA rejects invalid rows/file with **row-level errors**; existing prices are **not overwritten** by invalid data. |  |  |
| UP-22 | SL-03 | Unhappy | Conflict/duplicate | David/admin | Price list exists | 1. Upload a template with the same SKU at two prices. 2. Try to confirm. | SKU X repeated @ RM16 and RM18 | MAIA flags the duplicate / conflicting rows and requires correction before the update is accepted. |  |  |
| UP-23 | SL-01 | Unhappy | Ambiguity | Sales/admin | Two records share a phone | 1. Search / update customer by phone. 2. Try to save. | Phone matches HQ + Branch B | MAIA lists both matches and asks the user to choose — it does NOT auto-update the wrong record. |  |  |
| UP-24 | SL-01 / SL-03 | Unhappy | Missing/incomplete | Sales rep | Item has no latest data | 1. Ask MAIA for price/stock of an item with no latest data. | Item with stale / missing price | MAIA states the data is unavailable / stale and **does NOT invent** a price or stock figure; it names what's missing. |  |  |
| UP-25 | SL-07 / SL-04 | Unhappy | Wrong actor/permission | Sales rep | Rep has no CN rights | 1. As a sales rep, try to issue a credit note. | Any submitted invoice | MAIA blocks or routes to finance/management approval; the sales rep cannot independently issue a CN. |  |  |
| UP-26 | SL-07 | Unhappy | Missing/incomplete | Finance/admin | Invoice exists | 1. Start a credit note. 2. Leave original invoice / reason blank. 3. Try to submit. | Missing reason / reference | MAIA refuses submission and asks for the original invoice + correction reason before the CN can proceed. |  |  |
| UP-27 | NS-04 | Unhappy | Missing/incomplete | Sales rep | Customer lacks billing detail | 1. Generate a Pro Forma Invoice for a customer with no billing detail. | Customer with no billing address | MAIA flags the missing billing detail; it does NOT generate a blank/invalid proforma. |  |  |
| UP-28 | SL-08 | Unhappy | Wrong actor/permission | Sales/admin | Customer is one of CK's 3 driver-managed customers | 1. Try to look up or assign one of CK's customers within normal sales workflows. | CK's 3 customers | These customers are excluded from normal MAIA sales-agent workflows — MAIA does not surface them as belonging to CJ Tan/Aben/Quinny/David's active sales pipeline. |  |  |
| UP-29 | AS-04 / AS-04b | Unhappy | Must-NOT | Salesperson (field) | In the field, no admin access | 1. Attempt to create a Sales Order directly from the outdoor sales query interface. | Field query session | MAIA does **NOT** allow order creation from the outdoor/query context — it only returns price/outstanding/customer info; order entry must go through office admin. |  |  |
| UP-30 | NS-08 | Unhappy | Missing/incomplete | Sales/admin | Item has no prior invoice for this customer | 1. Start SO for a new item/customer pairing with no history. 2. Check price dropdown. | New item, first-time customer | MAIA shows no historical price (or explicitly states "no prior price") — it does **NOT** fabricate or estimate one. |  |  |
| UP-31 | NS-06 | Unhappy | Wrong actor/permission | Sales Manager | Multiple reps have overdue invoices | 1. As Sales Manager, check overdue alerts. | Aben and Quinny both have overdue invoices; a third rep (hypothetically) is not his report | Sales Manager sees only Aben's and Quinny's overdue invoices — not overdue invoices belonging to reps outside his scope. |  |  |
| UP-32 | AS-05 / SL-05 | Unhappy | Wrong actor/permission | Sales rep B | Customer belongs to rep A | 1. As rep B, try to view rep A's customer's activity log/notes. | Rep A's customer notes | Access denied — same boundary as SL-05; rep B cannot see rep A's logged notes. |  |  |
| UP-33 | SL-07 | Unhappy | Downstream integrity | Finance/admin | SCN issued for stock-return-only case | 1. Issue an SCN for a return with **no** payment/billing impact (pure stock return). 2. Check invoice knock-off. | Stock-return-only SCN | Stock is reversed/tracked back in; the linked invoice is **not** knocked off, since this SCN use case has no billing component. |  |  |

---

## STEP 4 — Coverage & Traceability

### 4a. Traceability

| Scope ID | Locked item | Happy | Unhappy | Covered? |
|---|---|---|---|---|
| SL-01 | SQL master + item lookup | HP-02 | UP-01, UP-02, UP-13, UP-15, UP-16, UP-19, UP-23, UP-24 | YES |
| SL-02 | AR reconciliation | HP-04 | UP-04, UP-18 | YES |
| SL-03 | Pricing + enforcement + price-controller role | HP-05, HP-05b, HP-06 | UP-07, UP-20, UP-21, UP-22, UP-24 | YES |
| SL-04 | Credit control | HP-07 | UP-05, UP-06, UP-25 | YES |
| SL-05 | Sales visibility | HP-08 | UP-10, UP-32 | YES |
| SL-06 | One WhatsApp number | HP-01 | UP-11 | YES |
| SL-07 | SO/DO/Invoice + CN (SCN/CCN split) gen | HP-09, HP-11, HP-11b | UP-08, UP-09, UP-16, UP-19, UP-25, UP-26, UP-33 | YES |
| SL-08 | Customer → sales-agent assignment | HP-12 | UP-28 | YES |
| AS-01 | Fresh-weight / pick-list PDF flow | HP-03 | UP-03, UP-13, UP-17 | YES |
| AS-04 / AS-04b | Outdoor sales (query-only) + relay | HP-13 | UP-29 | YES |
| AS-05 | Customer activity log (notes/events/tasks only) | HP-16 | UP-32 | YES |
| NS-04 | Pro forma | HP-10 | UP-27 | YES |
| NS-05 | Approval (generic route) | (via HP-07/UP-05 credit route) | UP-06, UP-25 | PARTIAL — generic non-credit approval not separately locked |
| NS-06 | Payment-escalation routing | HP-15 | UP-31 | YES |
| NS-08 | Item historical pricing | HP-14 | UP-30 | YES |

### 4b. Excluded — not tested, and why (anti-laundering control — do not delete)

| ID | Item | Reason not tested |
|---|---|---|
| AS-02 | Product catalogue / image | AIP — acceptance criteria (template/fields/format) not locked; creation process confirmed as **David-only knowledge**, Grace has no visibility |
| AS-03 | Credit-note **numbering** rule | AIP — Finance to align MAIA running no. + invoice-reference-field vs their stated "mirror the number" want (risk flagged 2026-07-14); CN *generation*/doctype split IS tested under SL-07 |
| AS-05 (master fields) | Customer master-data field writability (address, phone, billing) | Still open — only the activity-log sub-feature is locked and tested |
| AS-06 | Backend dashboard / reminders | AIP — 6 guiding questions drafted 2026-07-14, not yet asked to client |
| AS-07 | Quotation-before-order / price-lock | AIP — PROPOSED, not locked; 2026-07-14 call revealed real quotation usage is low — whether David still wants this built at all is now the open question, not just the enforcement mechanism |
| NS-02 | Stock entry / GRN photo | Out of scope — parked ("not for now"); root cause is human process |
| NS-03 | Inventory aging / expiry alert | Feature being built but mechanism (threshold/recipient/cadence) undefined — add cases once mechanism is set |
| NS-07 | POD attachment / mark-as-delivered | **🚫 BLOCKED — direct client conflict (2026-07-14).** Grace explicitly rejects the photo-upload-to-Maya design; current WhatsApp-photo-only process works for her. This is not "not yet built" — it needs David's explicit decision on whether to build any version of this feature at all before any test case can be written |
| NS-09 | Stock-expiry alert — sales inclusion | Needs scoping — David to decide at/before 16 Jul training |
| NS-10 | Backup coverage — Logistics/Finance Manager absence | Real operational gap, not a system feature — not resolvable by a UAT test case |
| NS-11 | Warehouse Maya access model | Needs scoping — individual logins vs shared device, undecided |
| GAP-1 | Picking accountability / audit trail | **Partially addressed 2026-07-14** — AS-01's pick-list-PDF flow gives manager-level accountability (tested via HP-03/UP-03/UP-17); per-individual-picker digital attribution still has no home — confirm with David if needed beyond manager-level |
| GAP-2 | Quotation generation | Has a proposed home (AS-07) but not locked — see AS-07 above |
| GAP-3 | Cash-from-driver recording | No scope-lock home — SL-02 covers bank/slip only |
| GAP-4 | Damage / batch QC log | No scope-lock home — only "issue ticket" floated |
| OOS | AP recon · QR settlement · delivery trip · WMS · volume pricing · B2C app · WhatsApp blasting | Explicitly out of scope (UP-12/UP-14 assert the must-NOT boundary only) |

### 4c. Assumptions & gaps

- **Real test data needed (NEEDS CLIENT INPUT):** actual SQL customer + SKU codes, a real customer-specific fixed price, real credit-limit figure, a real payer-mismatch example, sample GRN, sample price template, real CJ Tan/Aben/Quinny customer examples (from Grace's promised SQL export), a real item with prior invoice history for NS-08 testing.
- **NS-04 / NS-05 sign-off gap:** both are "in the product now" but **not formally client-signed** in the Scope Lock. Tested provisionally; confirm sign-off or move to 4b.
- **NS-03 aging:** scoped as Phase-1 build but mechanism (threshold/recipient/cadence) still undefined as of 2026-07-14 — no test rows until resolved.
- **NS-06 / NS-08 newly testable:** both were excluded in v2 and are now included following the direct Grace clarification call (2026-07-14) — this is the main structural change from v2 to v3.
- **AS-01 / SL-02 adoption risk:** both features pass their design-level test cases, but Grace expressed real skepticism about whether either reduces her actual workload (pick-list adoption doubt; AR auto-match seen as "same work through Maya"). **Passing UAT does not confirm adoption** — recommend a real-usage check post-go-live for both, per the Scope Lock's own recommendation.
- **AS-01 warehouse access model open:** UAT execution for HP-03/UP-03/UP-17 assumes the warehouse manager operates the upload step personally; if foreign workers get individual or shared-device access instead (NS-11, still undecided), the actual UAT actor may differ — confirm before running.
- **NS-07 exclusion is not the same kind of gap as the others:** every other 4b item is either not-yet-locked or awaiting scoping. NS-07 is different — it was designed, then **explicitly rejected by the client who'd operate it**. Do not treat it as "coming soon"; it needs a go/no-go decision from David before any further work, including UAT planning.
- **Source agreement:** Customer Narrative treats GRN stock entry as in-scope (§5.4); Scope Lock parks it (NS-02). **Scope Lock wins** per source-of-truth rule — excluded.

---

## See Also
- [[Macrofood — VoC Extraction]]
- [[Customer Narrative - Macrofood]]
- [[Macrofood — Scope Lock v1 (reconciled)]]
- [[Macrofood — Client Clarification Questions (2026-07-13)]]
- [[Macrofood — Internal Questions for Ivan (2026-07-14)]]
- MAIA Product Onboarding SOP (Lens 3 → M8 UAT)
