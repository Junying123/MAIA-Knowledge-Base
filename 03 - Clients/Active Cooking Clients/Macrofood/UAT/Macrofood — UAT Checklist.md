---
owner: Gareth
status: draft
last_reviewed: 2026-07-12
---

# Macro Frozen — UAT Checklist (Phase 1 Core)

> Lens 3 deliverable per the Product Onboarding SOP — authored at M3, run by the
> client at M8 (Core UAT). Tests **only** what the Scope Lock marks LOCKED.
> Sources: Customer Narrative, Scope Lock v1, VoC Extraction, VoC actor register.
> All four sources present — no missing-source warning.

---

## STEP 1 — Scope Inventory

| Scope ID | Item name | Status | Client agreed? | Testable? |
|---|---|---|---|---|
| SL-01 | MAIA on SQL — SQL is customer/item master | LOCKED | YES | **YES** |
| SL-02 | AR customer-invoice reconciliation | LOCKED | YES | **YES** |
| SL-03 | Bulk price update + pricing enforcement | LOCKED | YES | **YES** |
| SL-04 | Credit-limit / payment-term control | LOCKED | YES | **YES** |
| SL-05 | Salesperson customer visibility | LOCKED | YES | **YES** |
| SL-06 | One MAIA WhatsApp number | LOCKED | YES | **YES** |
| SL-07 | SO / DO / Invoice generation (+ CN, Proforma doctypes) | LOCKED | YES | **YES** |
| AS-01 | Fresh-weight adjustment workflow | RESOLVED → locked | YES (confirmed 12 Jul) | **YES** |
| NS-04 | Pro forma invoice | RESOLVED — in product | UNKNOWN (sign-off) | **YES** (exists; verify) |
| NS-05 | Approval flows (generic) | RESOLVED — in product | UNKNOWN | **YES** (generic route) |
| AS-02 | Product catalogue / image | AIP — AC open | NO | NO → 4b |
| AS-03 | Credit note numbering rule | AIP — AC open | NO | NO (CN *generation* tested under SL-07; numbering rule → 4b) |
| AS-04 | Outdoor sales assistant | AIP — thin VoC | NO | NO → 4b |
| AS-05 | Customer info / notes | AIP — AC open | NO | NO → 4b |
| AS-06 | Backend dashboard / reminders | AIP — AC open | NO | NO → 4b |
| NS-02 | Stock entry / GRN photo | OOS — parked | NO | NO → 4b |
| NS-03 | Inventory aging / expiry alert | Building — not yet live | UNKNOWN | NO yet → 4b (test when built) |
| NS-06 | Payment chasing escalation | PARTIAL — routing open | NO | NO → 4b |
| NS-07 | POD attachment | PLANNING — ERPNext | NO | NO → 4b |
| OOS-* | AP recon · QR settlement · delivery trip · WMS · volume pricing · B2C · blasting | OUT OF SCOPE | — | NO → 4b |

**Testable set:** SL-01 … SL-07, AS-01, NS-04, NS-05 (10 items).

---

## STEP 2 — Unhappy-Path Bank

| # | Trigger type | Real situation from the docs | Stresses |
|---|---|---|---|
| U1 | Ambiguity | Customer writes "pork belly slight" but means pork belly **slice, skin-on**; informal customer names ≠ SQL item name | SL-01, SL-07 |
| U2 | Missing/incomplete | Item name is in **Chinese** in price list but **English** in SQL — no direct match | SL-01, SL-03 |
| U3 | Downstream integrity | Order 10 kg, warehouse picks **8 kg** — DO + Invoice must bill 8 kg, not 10 | AS-01, SL-07 |
| U4 | Missing/incomplete | Supplier GRN says 1000 kg, boxes total **998 kg** (received ≠ doc) | AS-01 (weight discipline) |
| U5 | Must-NOT | Payment slip payer name ≠ customer name ("ABC" pays, invoice is for a different entity) | SL-02 |
| U6 | Boundary/limit | Customer exposure exceeds weekly credit limit (e.g. RM5,000); "one invoice" rule — unpaid last invoice | SL-04 |
| U7 | Boundary/limit | Salesperson tries to sell below the customer-specific fixed floor (e.g. RM16.50/kg → enters RM15.50) | SL-03 |
| U8 | Conflict/duplicate | Try to create a **second invoice** on an already-submitted SO | SL-07 |
| U9 | Downstream integrity | Try to invoice a **larger quantity than the DO** (SQL constraint: invoice qty ≤ DO qty) | SL-01, SL-07 |
| U10 | Wrong actor/permission | Sales rep B tries to view / order for sales rep A's customer | SL-05 |
| U11 | Wrong actor/permission | Sales rep tries to self-approve an over-limit order (should route to David) | SL-04 |
| U12 | Ambiguity | WhatsApp **voice note** order / free-form message the bot can't fully resolve | SL-06, SL-07 |
| U13 | Must-NOT | User asks MAIA to **blast** the catalogue to 300–400 customers | OOS (blasting) |
| U14 | Must-NOT | Draft/unconfirmed SO — must **not** push to SQL until confirmed | SL-01, AS-01 |
| U15 | Must-NOT | QR-merchant settlement report uploaded for reconciliation | OOS (QR settlement) |
| U16 | Must-NOT | MAIA must not **overwrite SQL** as master (customer/item edits) | SL-01 |
| U17 | Missing/incomplete | Proforma requested but customer record has no billing detail | NS-04, SL-07 |

**Must-NOT cases (highest value):** U5, U11, U13, U14, U15, U16.

---

## STEP 3 — UAT Checklist

| Test ID | Scope ref | Path | Trigger type | Role / actor | Precondition | Steps | Test data | Expected result | Pass/Fail | Tester & date |
|---|---|---|---|---|---|---|---|---|---|---|
| HP-01 | SL-06 | Happy | — | Sales/admin | MAIA number live; user authorised | 1. Forward a customer WhatsApp order into the one MAIA number. 2. Wait for MAIA reply. | Text order: "3 boxes pork belly, deliver Fri" | MAIA acknowledges and returns an extracted draft (customer, item, qty) in the same WhatsApp thread. |  |  |
| HP-02 | SL-01 / SL-07 | Happy | — | Sales/admin | Customer + item exist in SQL | 1. Forward order. 2. Review MAIA's extracted draft SO. 3. Confirm. | Customer: {real SQL customer}; item: {real SKU} | Draft SO shows SQL-sourced customer + item + price; on confirm a SO is created referencing SQL data. |  |  |
| HP-03 | AS-01 | Happy | — | Sales + warehouse | Draft SO created before picking | 1. Create draft SO for 10 kg. 2. Warehouse confirms actual picked weight. 3. Confirm SO. 4. Generate DO + Invoice. | Ordered 10 kg → picked 9.5 kg | DO and Invoice both show **9.5 kg** and the recalculated amount, not 10 kg. |  |  |
| HP-04 | SL-02 | Happy | — | Finance/account | Outstanding invoice + matching bank line exist | 1. Upload bank statement + payment slip. 2. Review MAIA's suggested match. 3. Confirm. | Payment RM {amt} = invoice {no.} | MAIA auto-suggests the correct invoice match; on confirm the invoice is knocked off. Nothing posts before confirm. |  |  |
| HP-05 | SL-03 | Happy | — | David / admin | Price template available | 1. Upload the MAIA price-update template with ~30 changed SKUs. 2. Create a SO for one changed item. | 30 SKUs, e.g. item X RM18→RM20/kg | MAIA updates prices; the new SO uses the **latest** price (RM20). |  |  |
| HP-06 | SL-03 | Happy | — | Sales rep | Customer has a customer-specific fixed price | 1. Create SO for that customer + item. | Customer A, item X, fixed RM16.50/kg | SO auto-applies RM16.50/kg without manual entry. |  |  |
| HP-07 | SL-04 | Happy | — | Sales rep | Customer within credit limit | 1. Create + submit SO under the limit. | Limit RM5,000; exposure RM2,000 | SO submits normally; no block. |  |  |
| HP-08 | SL-05 | Happy | — | Sales rep A | Rep A owns customer set A | 1. Log in as A. 2. List/search customers. | Rep A | Only A's own customers are visible. |  |  |
| HP-09 | SL-07 | Happy | — | Sales/admin | Confirmed SO exists | 1. Generate SO, DO, Invoice PDFs. 2. Review each. | Confirmed order | All three PDFs render with correct header, customer, line items, totals; reviewable before send. |  |  |
| HP-10 | NS-04 | Happy | — | Sales rep | Customer needs a document titled "invoice" for deposit | 1. Generate a Pro Forma Invoice from the SO. | Deposit 30% case | A document explicitly titled **Pro Forma Invoice** is produced with the order detail. |  |  |
| UP-01 | SL-01 | Unhappy | Ambiguity | Sales/admin | Item wording differs from SQL | 1. Forward "pork belly slight". 2. Review MAIA extraction. | "pork belly slight" = pork belly slice skin-on | MAIA maps to the correct SQL SKU **or**, if it cannot, surfaces the line for manual selection — it does NOT silently pick a wrong item. |  |  |
| UP-02 | SL-01 | Unhappy | Missing/incomplete | Sales/admin | Chinese price-list name ≠ English SQL name | 1. Forward an order using the Chinese item name. | 中文品名 vs English SKU | MAIA matches via learned mapping, or asks the user to confirm the SKU — no phantom line. |  |  |
| UP-03 | AS-01 | Unhappy | Downstream integrity | Warehouse + sales | Draft SO at ordered weight | 1. Order 10 kg. 2. Confirm picked 8 kg. 3. Generate DO/Invoice. | 10 kg ordered → 8 kg picked | DO + Invoice bill **8 kg**. Neither shows 10 kg. Amount recalculated. |  |  |
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

---

## STEP 4 — Coverage & Traceability

### 4a. Traceability

| Scope ID | Locked item | Happy | Unhappy | Covered? |
|---|---|---|---|---|
| SL-01 | SQL master + item lookup | HP-02 | UP-01, UP-02, UP-13, UP-15 | YES |
| SL-02 | AR reconciliation | HP-04 | UP-04 | YES |
| SL-03 | Pricing + enforcement | HP-05, HP-06 | UP-07 | YES |
| SL-04 | Credit control | HP-07 | UP-05, UP-06 | YES |
| SL-05 | Sales visibility | HP-08 | UP-10 | YES |
| SL-06 | One WhatsApp number | HP-01 | UP-11 | YES |
| SL-07 | SO/DO/Invoice gen | HP-09 | UP-08, UP-09 | YES |
| AS-01 | Fresh-weight | HP-03 | UP-03, UP-13 | YES |
| NS-04 | Pro forma | HP-10 | UP-17* | PARTIAL — add a missing-billing-detail case |
| NS-05 | Approval (generic) | (via HP-07/UP-05 credit route) | UP-06 | PARTIAL — generic non-credit approval not separately locked |

*U17 not yet written as a row — add `UP-16` (proforma with missing billing detail → MAIA flags, doesn't generate a blank doc) to close NS-04 coverage.

### 4b. Excluded — not tested, and why (anti-laundering control — do not delete)

| ID | Item | Reason not tested |
|---|---|---|
| AS-02 | Product catalogue / image | AIP — acceptance criteria (template/fields/format) not locked |
| AS-03 | Credit-note **numbering** rule | AIP — Finance to align MAIA running no. vs SQL-first (CN *generation* is tested under SL-07) |
| AS-04 | Outdoor sales assistant | AIP — thin VoC backing; query/order/doc scope undecided |
| AS-05 | Customer info / notes | AIP — writable fields + approval not locked |
| AS-06 | Backend dashboard / reminders | AIP — widgets/reminders undefined |
| NS-02 | Stock entry / GRN photo | Out of scope — parked ("not for now"); root cause is human process |
| NS-03 | Inventory aging / expiry alert | Building, not yet live — add cases when the feature ships |
| NS-06 | Payment chasing escalation | Routing/timing still open — not locked |
| NS-07 | POD attachment | Planning — exploring ERPNext; not built |
| GAP-1 | Picking accountability / audit trail | No scope-lock home — needs David |
| GAP-2 | Quotation generation | No scope-lock home (though narrative §21 mentions it) — needs David |
| GAP-3 | Cash-from-driver recording | No scope-lock home — SL-02 covers bank/slip only |
| GAP-4 | Damage / batch QC log | No scope-lock home — only "issue ticket" floated |
| OOS | AP recon · QR settlement · delivery trip · WMS · volume pricing · B2C app · WhatsApp blasting | Explicitly out of scope (UP-12/UP-14 assert the must-NOT boundary only) |

### 4c. Assumptions & gaps

- **Real test data needed (NEEDS CLIENT INPUT):** actual SQL customer + SKU codes, a real customer-specific fixed price, real credit-limit figure, a real payer-mismatch example, sample GRN, sample price template. The example values above (10 kg, RM16.50, RM5,000, 998 kg) are illustrative from the narrative/VoC — replace with real values before running.
- **NS-04 / NS-05 sign-off gap:** both are "in the product now" but **not formally client-signed** in the Scope Lock. Tested provisionally; confirm sign-off or move to 4b.
- **NS-03 aging:** scoped as Phase-1 build but not yet live — no test rows until it ships.
- **SL-07 doctypes:** Credit Note generation is testable (locked doctype), but the CN *numbering* rule (AS-03) is not — kept out per rules.
- **Add UP-16** (proforma missing billing detail) to close NS-04 traceability to YES.
- **Source agreement:** Customer Narrative treats GRN stock entry as in-scope (§5.4); Scope Lock parks it (NS-02). **Scope Lock wins** per source-of-truth rule — excluded.

---

## See Also
- [[Macrofood — VoC Extraction]]
- [[Customer Narrative - Macrofood]]
- Scope Lock v1 (Lark) · MAIA Product Onboarding SOP (Lens 3 → M8 UAT)
