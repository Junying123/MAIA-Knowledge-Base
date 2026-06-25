---
owner: Gareth
status: draft
last_reviewed: 2026-06-24
uat_round: 3
sources: "[[Meetings/2026-06-24 Fixguru UAT Debrief]] · [[context/learnings]] · Fireflies transcript 01KVVSWST9…"
---

# Fixguru Action Plan — 3rd UAT Backward Plan

Based on the **24 June 2026 UAT session** (Fireflies transcript + [[Meetings/2026-06-24 Fixguru UAT Debrief]] + [[context/learnings]]).

**Core conclusion:** Client still cannot proceed confidently because the first sales-order pricing step is unsolved. The blocker is not only data correctness — it is how MAIA presents historical price, discount %, net price, and next action in a way sales users can understand **in one glance.** This repeats 7 Apr, 14 May, and 16 Jun. Prompt-level patching has hit its ceiling; a first-class invoice-sourced module is required.

---

## Open Decisions (Resolve Before Next Demo Date)

- [ ] **Rendering mechanism** — chat single-message vs. image/label vs. dual web interface (70/30 co-work view)
- [ ] **Block level** — order vs. DN (client leans DN; must be confirmed and locked in writing)
- [ ] **UAT sign-off authority** — confirm Gareth is the signatory (no valid acceptance without this)
- [ ] **Dual interface scope** — Phase-1 inclusion or costed CR

---

## Client Blockers Needed (Ivan to Chase)

| # | Item | From | Why blocking |
|---|---|---|---|
| C1 | Real WhatsApp order-intake message samples (format reference for parser) | Yvonne | Defines the intake string MAIA must parse |
| C2 | AutoCount screenshot of two blocks (min price + credit limit) + which roles can bypass | Azib | Credit/approval logic can't be built without this |
| C3 | Minimum price floor per item (std + floor, e.g. G1 0.33 / 0.27) | Gareth | Approval threshold rule requires floors |
| C4 | Standard price list (global, fluctuating) — share in group | Gareth | Needed to compute discount % vs. current standard |
| C5 | Updated RSC/Diecut formulas + volume metrics (carryover from prior UAT) | Fixguru | Calculator accuracy still unresolved |
| C6 | Confirm UAT sign-off authority (is Gareth the signatory?) | Ivan ↔ Fixguru | No signed acceptance = Milestone-2 RM24k unpaid |

---

## Product Action Plan

| Priority | Product action | Why it matters | Output for tech |
|---|---|---|---|
| P0 | **Redesign pricing decision flow** | Users abandon when too much text / unclear pricing. First step must be fixed before next flow. | Final UX spec for "Historical Pricing Review before QTN/SO creation" |
| P0 | **Define exact historical pricing table fields** | Client wants quick comparison, not long chatbot text. Min 5 rows per item (3 is explicitly too few); date matters — signals price drift vs. current standard. | Table columns: Date, Item Code, Qty, Standard Unit Price, Discount %, Net Price, Source Invoice ID |
| P0 | **Clarify source of historical pricing** | Client confirmed: source must be actual invoices, not draft orders. | Rule: pull last 5 invoice transactions per customer + item |
| P0 | **Simplify chatbot copywriting** | Users "don't like reading"; single message, yes/no, no grand-total noise (total lives in PDF). | Rewrite chatbot prompts: "Review price → choose discount → generate QTN/SO". No enrichment beyond what's asked. "Not found = not found." |
| P0 | **Decide hybrid UX pattern** | Chat alone cannot show rich tables for 20–100 line items. 24 June discussion raised dual interface (70/30 co-work view) — must be an explicit decision, not improvisation. | Product decision: WhatsApp for input, web view or image/table card for pricing review. Do not let this delay step-1. |
| P1 | **Define delivery method recommendation UX** | Client wants last 5 confirmed delivery methods (courier / Lalamove / self-pickup) to recap with customer. | Add "Historical Delivery Method" section: last 5 with delivery method and charge item |
| P1 | **Define customer search behaviour** | Customers WhatsApp in with phone only, often no name/company; existing customers can look new. | Search priority: phone/mobile → landline → customer match → branch/contact → show confirmation |
| P1 | **Define approval UX — block at DN level, not order level** | Client explicit instruction: blocking the order too early loses the chance to collect money/invoice. Two blocks only: minimum price + credit limit. | Approval states: Draft allowed; DN submit blocked if below-floor price OR credit limit exceeded. Quotation still generated pending approval — no hard-stop mid-flow. |
| P1 | **Credit approval paths (two distinct flows)** | AR-negative means customer is prepaid — approve on bank-in slip. Credit-limit-exceeded is a separate path — approve case-by-case on bank-in slip. | Route to Ivan for approval in both cases; approver sees AR, pending SO/DN amount, credit limit, available balance. |
| P1 | **FOC rule** | Production overage is free: order 1000, produce 1050 → 50 units are FOC. | Bill billable qty; deduct billable + FOC from stock. FOC line appears on DO. |
| P1 | **Custom item handling** | Base item (e.g. G5) spawns `{Customer Name} G5` variants. | Item retrieval and matching must handle customer-named variants of base items |
| P1 | **Item-retrieval fallback** | On no exact item match, return the customer's historically ordered items to reduce dead-ends in the flow. | Fallback: show items previously invoiced to that customer |
| P1 | **Confirm scope vs CR** | Avoid another UAT mismatch. | Mark: must-fix in current scope vs future CR. Especially calculator versioning, extra calculators, raw material planning. |
| P2 | **Create retest script based on real Fixguru flow** | Previous test was feature-by-feature, not user-flow-based. | One golden script: WhatsApp order → historical price review → discount select → QTN PDF → delivery method → SO/DN approval check |

---

## Tech Action Plan

| Priority | Tech action | Lead | Acceptance criteria |
|---|---|---|---|
| P0 | **Historical pricing API/data fix** | Afiq / Wei Yon | For each ordered item: date, qty, std price, discount %, net price, invoice ID. Min 5 rows. Source = invoices only. |
| P0 | **Discount calculation fix** | Afiq | 3%, 5%, 10% discounts calculate correctly against standard unit price |
| P0 | **Item-level discount support** | Afiq | Same order: item A 3%, item B 10%, item C no discount |
| P0 | **Chatbot response formatter** | Afiq | User understands all item pricing in one glance; no scrolling through long text |
| P0 | **Order creation flow guardrail** | Afiq | Bot asks "Use which discount/net price?" before generating QTN/SO |
| P0 | **Language bug fix** | Afiq | Quick replies stay in English throughout an English conversation; no mid-flow switch to Malay |
| P0 | **Hybrid table/web view feasibility** | Jermaine / Amirul | Product + tech agree one implementation path; timeboxed spike, must not delay step-1 |
| P1 | **Customer search by phone/mobile + landline** | Wei Yon | User pastes phone number; MAIA finds correct customer and branches across both mobile and landline fields |
| P1 | **Branch/contact sync check** | Wei Yon | SO/DN uses selected branch contact, not HQ default |
| P1 | **Delivery method as SKU/item** | Wei Yon | Delivery charge appears as item line with correct item code/accounting treatment |
| P1 | **Historical delivery method retrieval** | Wei Yon | Bot/table shows last 5 confirmed delivery methods per customer |
| P1 | **Credit limit / AR exposure — block at DN level** | Wei Yon | DN submit blocked when below-floor price OR credit limit exceeded; order creation is not blocked. Shows AR, pending SO/DN, credit limit, available balance. |
| P1 | **AR-negative approval path** | Wei Yon | AR-negative (prepaid) customer → approve on bank-in slip receipt. Credit-limit-exceeded → separate case-by-case bank-in approval. Both route to Ivan. |
| P1 | **Minimum price approval block** | Wei Yon | Quotation draft allowed; DN/SO submit blocked until approval when price below floor |
| P1 | **Custom item variant support** | Wei Yon | Item lookup handles `{Customer Name} G5`-style naming; matched against base item and customer history |
| P1 | **WhatsApp latency investigation** | Wei Yon | Identify why WhatsApp response is slower than Telegram; remediation or escalation |
| P1 | **AutoCount external ID consistency** | Wei Yon | Submitted doc displays AutoCount ID, not only MAIA internal ID |
| P2 | **Warehouse / shelf configuration review** | Wei Yon | Picking list / DN shows shelf/warehouse info correctly |
| P2 | **Performance test on real usage** | Jermaine | Chatbot/web response remains usable under concurrent order scenarios (30 invoices/day) |

---

## Immediate Execution Plan

### Day 1 (Wed 25 Jun) — Alignment Lock

Product lead + tech lead + PM align on one critical outcome: **fix the pricing decision step first.** Do not spread effort across all remaining features until this is usable.

Product to deliver:
- Final pricing table mockup
- Final chatbot prompt wording
- Exact happy-path flow
- Scope classification: must-fix / defer / CR

Tech to confirm:
- Where historical invoice data comes from
- Whether discount %, net price, standard price are available reliably
- Whether WhatsApp can display the table cleanly, or whether web/image table is needed

### Day 2–3 (Thu 26 Jun – Fri 27 Jun) — Build P0 Fixes

Tech focuses only on:
1. Historical pricing API (invoices, min 5 rows)
2. Discount calculation
3. Item-level discount
4. Short chatbot response/table formatter
5. Language bug fix
6. Stop premature QTN/SO generation before price confirmation

Product supports with live examples and expected output.

### Day 4 (Mon 30 Jun) — Internal Retest

Run one full Fixguru scenario end-to-end:

> Customer sends WhatsApp order → MAIA identifies customer by phone → shows last 5 historical invoice prices per item → user chooses discount per item → MAIA generates QTN/SO → PDF → delivery method selected → approval check if needed.

**Pass criteria: user should not need to open AutoCount for the pricing decision.**

### Day 5 (Tue 1 Jul) — Client Retest

Show Fixguru only the corrected pricing flow first. Do not demo all features. Goal: prove the main blocker is fixed before moving to delivery, credit, PDF, and warehouse flows.

---

## Lead-Review Recommendation (P0 Recovery Scope)

1. Historical pricing + discount decision UX (invoice-sourced, min 5 rows, one glance)
2. Correct item-level discount calculation
3. One-glance chatbot/table output + language bug
4. Phone/customer search (mobile + landline)
5. Delivery method as item/SKU
6. Credit/minimum price approval visibility (block at DN, not order; two paths)

Everything else is secondary until Fixguru confirms the first sales pricing flow is finally usable.

---

## See Also

- [[Meetings/2026-06-24 Fixguru UAT Debrief]] — full session record, client sentiment, risk/pre-mortem
- [[context/learnings]] — running learnings log
- [[UAT/MAIA UAT Form - Fixguru - Item Historical Pricing]]
- [[UAT/Fixguru Retesting Feedback]]
- [[UAT/Fixguru 2nd UAT Backward Plan]]
