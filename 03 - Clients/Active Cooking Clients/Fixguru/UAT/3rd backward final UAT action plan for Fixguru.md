---
owner: Gareth
status: draft
last_reviewed: 2026-06-29
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
| P1 | **Delivery address history** | Customer may want to reuse a previous delivery address; surfacing history removes manual lookup. | Show last 5 confirmed delivery addresses per customer from SO history; user selects or enters new |
| P1 | **Default to historical price on line item add** | When user adds an item, MAIA should pre-fill with last invoiced price (not standard price) to reduce back-and-forth. | On item add: fetch last invoiced price for that customer + item; pre-fill as default; user can override |
| P1 | **Cash / credit term confirmation** | After delivery address is set, payment term must be captured before SO is created. | Bot asks: "Cash or credit term?" after delivery address step; term applied to SO |
| P1 | **Confirm scope vs CR** | Avoid another UAT mismatch. | Mark: must-fix in current scope vs future CR. Especially calculator versioning, extra calculators, raw material planning. |
| P2 | **Role-aware information density** | Sales users want yes/no flow to get things done; managers/approvers need full context. | Define two response modes: sales (minimal, action-only) vs manager (full AR, pricing, credit, history) |
| P2 | **Lead/prospect creation when customer not found** | Sales users often only have phone or WhatsApp number — no name. If not found, must not dead-end. | If no customer match by phone: offer "Create as lead/prospect" requiring phone/WhatsApp only; do not block order intake |
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
| P1 | **Credit limit / AR exposure — block at DN level** | Wei Yon | DN submit blocked when DO value exceeds credit limit OR below-floor price; order creation is not blocked. Block is DO-value-triggered (not just outstanding balance flag). Shows AR, pending SO/DN, credit limit, available balance. |
| P1 | **AR-negative approval path** | Wei Yon | AR-negative (prepaid) customer → approve on bank-in slip receipt. Credit-limit-exceeded → separate case-by-case bank-in approval. Both route to Ivan. |
| P1 | **Minimum price approval block** | Wei Yon | Quotation draft allowed; DN/SO submit blocked until approval when price below floor |
| P1 | **Custom item variant support** | Wei Yon | Item lookup handles `{Customer Name} G5`-style naming; matched against base item and customer history |
| P1 | **WhatsApp latency investigation** | Wei Yon | Identify why WhatsApp response is slower than Telegram; remediation or escalation |
| P1 | **Delivery address history retrieval** | Wei Yon | Fetch last 5 confirmed delivery addresses per customer from SO history; surface in bot after delivery method step |
| P1 | **Line item price defaulting** | Afiq | When item added to order: fetch last invoiced price for that customer+item; pre-fill as default net price; user can override |
| P1 | **Payment term capture** | Wei Yon | After delivery address step, bot asks cash/credit term; term applied to SO before creation |
| P1 | **AutoCount external ID consistency** | Wei Yon | Submitted doc displays AutoCount ID, not only MAIA internal ID |
| P2 | **Warehouse / shelf configuration review** | Wei Yon | Picking list / DN shows shelf/warehouse info correctly |
| P2 | **Performance test on real usage** | Jermaine | Chatbot/web response remains usable under concurrent order scenarios (30 invoices/day) |

---

## Milestone Chain (Backward from 3rd UAT)

```
[DONE]        Fixguru 2nd UAT Debrief (24 Jun 2026)
      ↓
[IN PROGRESS] UX Bug Fix Sprint
      ↓
[UPCOMING]    Internal QA
      ↓
[UPCOMING]    Showcase (go/no-go gate)
      ↓
[LOCKED OUT]  3rd UAT with Fixguru  ← only scheduled after Showcase passes
```

---

### Milestone 1 — Fixguru 2nd UAT Debrief `DONE`

**Date:** 24 Jun 2026

Key conclusion: same blocker since Apr 7 — historical pricing UX is broken. Prompt patching exhausted. Four rounds of same feedback. See [[Meetings/2026-06-24 Fixguru UAT Debrief]] and [[context/learnings]].

---

### Milestone 2 — UX Bug Fix Sprint `IN PROGRESS`

**Target done by:** Wed 2 Jul

**Scope:** UX of chatbot response only. Not a full feature rebuild — fixing how WeyShen's chatbot surfaces the historical pricing output to the user.

**What is being fixed:**
1. Historical pricing formatter — structured table output (not inline text walls)
2. Discount calculation — price list rate as base, not item price
3. Item-level discount support — different % per item in same order
4. Order flow gate — no QTN/SO generated before user confirms price
5. Language bug — quick replies match session language throughout

**Definition of done for this milestone:**
- WeyShen confirms chatbot returns table format with all 6 columns per item
- Discount % computes correctly against price list rate
- No Malay quick replies in an English session
- Gareth has signed off on the chatbot prompt wording and happy-path flow spec

**Product deliverables to support tech:**
- [ ] Pricing table mockup (exact column layout, sort order, row count rule)
- [ ] Chatbot prompt rewrites (per-step wording, one action per turn)
- [ ] Happy-path flow spec (each step = one bot message + expected user response + transition)
- [ ] "Not found" rule: single line, no enrichment

---

### Milestone 3 — Internal QA `UPCOMING`

**Target date:** Fri 4 Jul

**Who:** Product (Gareth) + Tech (WeyShen / Afiq) run the scenario together.

**What happens:**
- Gareth runs full Fixguru golden scenario end-to-end on the fixed build
- Tech observes — any gap or bug logged immediately
- Not a formal sign-off — a joint discovery pass before Showcase

**Golden scenario:**
> Customer sends WhatsApp order → MAIA identifies customer by phone → shows last 5 historical invoice prices per item as clean table → user picks discount per item → MAIA generates QTN/SO → PDF preview shown.

**Pass gate to proceed to Showcase:**
- Gareth completes pricing decision without opening AutoCount
- No issue from AC-UX checklist (see below) — all five UX checks pass
- Any remaining bugs logged, triaged, and either fixed or explicitly deferred

---

### Milestone 4 — Showcase `UPCOMING`

**Target date:** Tue 8 Jul

**Who:** Product demos to high-level stakeholders (internal leadership + optionally Ivan).

**Purpose:** Align delivery — confirm the fixed historical pricing flow meets the definition of done before scheduling 3rd UAT with client. This is the go/no-go gate.

**What is demoed:** Historical pricing flow only. No delivery, credit, PDF template, or warehouse. One flow, proven clean.

**Definition of done — Showcase pass criteria:**
- High-level stakeholders confirm: "this is what we promised Fixguru"
- Flow matches the Scope Lock v1 capability: historical pricing lookup, discount selection, QTN/SO generation
- No open P0 items from Internal QA still outstanding

**If Showcase fails:** bug fix sprint continues. 3rd UAT is not scheduled until Showcase passes.

---

### Milestone 5 — 3rd UAT with Fixguru `LOCKED — schedule after Showcase passes`

**Not scheduled until Milestone 4 passes.**

**Scope for 3rd UAT:** Historical pricing flow first. If that passes, proceed to remaining ACs (AC-02 through AC-06). Do not present all features at once — sequence by dependency.

**Sign-off authority:** Gareth (pending C6 confirmation — see Open Decisions above).

---

## AC-UX — Chatbot Expected Output & Acceptance Criteria (Internal QA Gate)

> **Scope:** Historical pricing UX only. Pass = a blue-collar sales user can make the discount decision in one glance, without opening AutoCount. Fail = anything that makes them read, hunt, or wait.

> **Why this matters (client's exact words, 24 Jun 2026):**
> *"People who use MAIA are very simple minded. If head of departments need 5 minutes to digest, their team will take much longer. MAIA must be super direct."* — Ivan
> *"I speak many times the same… I don't know how to tell you."* — Gareth (Fixguru)
> *"AutoCount is the benchmark — MAIA must be faster and simpler at daily quoting."*

---

### Expected Chatbot Output — Step by Step

This is the exact interaction the chatbot must produce. Any deviation from this sequence or format is a fail.

**Step 1 — User sends order**

User input (WhatsApp):
```
011-XXXX XXXX — G3 100, G1 300, PM72 500
```

Bot response:
```
Customer: [Customer Name], [Branch]
Is this correct? Yes / No
```
- Phone-number-first lookup: search mobile AND landline fields
- Confirmation shown before proceeding — no silent auto-match

---

**Step 2 — Bot returns historical pricing per item (customer-specific)**

The table is always scoped to **this customer + this item**. It shows what price Fixguru actually invoiced this specific customer for this specific item in the past — not global pricing, not other customers.

For each item, bot sends ONE message:

```
[Customer Name] × G3 — Past Invoices

Date     | Std Price | Disc % | Net Price | Qty
---------|-----------|--------|-----------|-----
06/2026  | RM 0.10   | 3%     | RM 0.097  | 100
05/2026  | RM 0.10   | 10%    | RM 0.090  | 1000
03/2026  | RM 0.09   | 5%     | RM 0.0855 | 300
01/2026  | RM 0.10   | 0%     | RM 0.100  | 200
10/2025  | RM 0.05   | 5%     | RM 0.0475 | 500

Apply last discount (3%, RM 0.097)? [Yes] [Custom]
```

**How the quick reply works:**
Bot reads the most recent invoice row for this customer × item, extracts the discount % and net price, and offers to apply *that specific deal* again. User answers yes or enters a different figure. No abstract % buckets — the offer is always grounded in actual history with this customer.

**Non-negotiable format rules (from 24 Jun debrief):**

| Rule | Requirement | Source |
|---|---|---|
| Columns | Date, Std Price, Disc %, Net Price, Qty — exactly these five | Ivan 24 Jun |
| Row count | Min 5 rows per item — "3 is too few" | Ivan 24 Jun |
| Sort | Most recent first | Implied — date signals price drift |
| Source | Confirmed invoices only — never draft SOs | Ivan 24 Jun |
| Grand total | NOT shown in chatbot — total is PDF-only | Ivan 24 Jun |
| Format | Table, not paragraphs, not bullet points | Ivan 24 Jun |
| Per-item message | Each item = its own message block — never combine two items in one wall of text | UX principle |
| Quick replies | Discount options as tappable buttons: [3%] [5%] [10%] [Custom] | One-glance requirement |

---

**Step 3 — User picks discount per item**

User taps: `3%`

Bot response (single line, no enrichment):
```
G3: RM 0.097 × 100 = RM 9.70 ✓
```

Repeat Steps 2–3 for each item. After all items confirmed:

---

**Step 4 — Bot generates document**

```
Quotation created: QTN-XXXX
Customer: [Name]
Items: G3 × 100, G1 × 300, PM72 × 500
[View PDF]
```

No additional commentary. No summary of discounts. No totals in chatbot.

---

**Step 5 — "Not Found" response (if item has no invoice history)**

```
No pricing history for [item]. Use standard price RM X.XX?
Yes / No
```

One line. No explanation. No alternatives listed unprompted. *"Not found = not found."* — Ivan

---

### Acceptance Criteria Checklist (Internal QA, Fri 4 Jul)

| # | Check | Pass condition | Fail example |
|---|---|---|---|
| UX-01 | Output format | Table, not prose or bullets | Long paragraph per item |
| UX-02 | Columns present | Date, Std Price, Disc %, Net Price, Qty — all five | Missing Date or Net Price |
| UX-03 | Row count | Min 5 invoice-sourced rows | Only 2–3 rows shown |
| UX-04 | Source | Confirmed invoices only | Draft SO rows included |
| UX-05 | Grand total | Not shown in chatbot | Total embedded in message |
| UX-06 | Single message per item | All rows for one item in one message | Rows split across messages |
| UX-07 | Quick replies | Discount options as tappable buttons | User must type discount manually |
| UX-08 | One question per turn | Bot asks ONE thing after table | Bot asks discount + delivery in same message |
| UX-09 | No premature doc | QTN/SO only after user confirms price | QTN generated before discount chosen |
| UX-10 | Not found = one line | Single-line response, no enrichment | Multi-line explanation when item missing |
| UX-11 | Language | Zero Malay in English session, including quick replies | Quick reply labels switch to Malay |
| UX-12 | Speed feel | Gareth: "faster than opening AutoCount" | Feels slower or more effort than AutoCount |

**Verdict options per check:** Pass / Fail / Conditional *(note exact message that failed)*

**Overall gate:** All 12 must pass before proceeding to Showcase. Any Fail = fix and retest before Tue 8 Jul.

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
