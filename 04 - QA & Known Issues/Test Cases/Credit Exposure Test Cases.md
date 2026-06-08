---
owner: Gareth
status: draft
last_reviewed: 2026-06-08
lark_url:
---

# Credit Exposure Test Cases

**Total Test Cases:** 46 (FE: 27 · Chatbot: 19)
**Feature:** Credit Exposure — Customer Profile Panel, Compact One-liner Bar, Hover Popover, Chatbot Messages
**Spec Ref:** [[01 - MAIA Product/Product Specs/MAIA Credit Exposure]]

> **Scope:** FE display correctness and chatbot messaging across all 12 canonical customer credit states. Backend computation and SO enforcement logic are covered in Part J of the spec.

---

## 12 Canonical States (Test Data Reference)

| State | Scenario Name | L0 | L1 | L2 | L3 | Limit | Expected Status Badge |
|---|---|---|---|---|---|---|---|
| 1 | Brand new customer, no transactions | 0 | 0 | 0 | 0 | 300k | Within Limit |
| 2 | Regular customer, healthy account | 0 | 150k | 60k | 40k | 500k | Within Limit |
| 3 | Customer with some overdue but still within limit | 80k | 200k | 60k | 40k | 500k | Within Limit + ⚠ |
| 4 | Busy season — customer approaching limit | 0 | 390k | 30k | 20k | 500k | Near Limit (amber) |
| 5 | Customer has fully used up their credit line | 0 | 500k | 0 | 0 | 500k | Over Limit (red) |
| 6 | Customer has exceeded their credit limit | 120k | 560k | 0 | 0 | 500k | Over Limit (red) |
| 7 | Sales rep adding large order that would push customer over limit | 0 | 300k | 0 | 0 | 500k | Breach on SO |
| 8 | Customer stopped buying but still has unpaid invoices | 95k | 95k | 0 | 0 | 400k | Within Limit + ⚠ |
| 9 | Customer has only draft quotations, nothing confirmed | 0 | 0 | 0 | 180k | 500k | Within Limit |
| 10 | Customer has confirmed orders not yet invoiced | 0 | 0 | 210k | 0 | 500k | Within Limit |
| 11 | High-volume customer with all types of exposure | 100k | 350k | 80k | 120k | 500k | Near Limit + ⚠ |
| 12 | Long-standing trusted client with no credit limit set | 0 | 140k | 60k | 40k | — | No credit limit |

**Threshold rule (spec default):** Within Limit < 70% · Near Limit 70–89% · Approaching Limit 90–99% · Over Limit ≥ 100%

### Per-Customer Enforcement Flags (Credit Limit child table)

| Field | Default | Behaviour when default | Behaviour when changed |
|---|---|---|---|
| `bypass_credit_limit_check` | **Unchecked** (MAIA enforces) | Credit limit breach routes SO to Credit Controller | Checked = credit limit advisory only — warning shown, no block or approval routing |
| `block_on_overdue` | **Checked** (MAIA blocks) | Any overdue invoice (L0 > 0) routes SO to Credit Controller | Unchecked = overdue shown as ⚠ informational token only, no routing |

**Combined enforcement logic:** `block_triggered = (credit_breach AND NOT bypass_credit_limit_check) OR (overdue_breach AND block_on_overdue)`

Both flags are independent — either can trigger a block on its own. All existing TCs in Parts 1 and 2 assume default flag state (bypass unchecked, block_on_overdue checked) unless stated otherwise. Part 3 tests non-default flag combinations.

---

## Test Case Index

| # | ID | State | Area | Priority |
|---|---|---|---|---|
| 1 | TC-CE-FE-01 | 1 | FE One-liner | High |
| 2 | TC-CE-FE-02 | 2 | FE One-liner | High |
| 3 | TC-CE-FE-03 | 3 | FE One-liner | High |
| 4 | TC-CE-FE-04 | 4 | FE One-liner | **Critical** |
| 5 | TC-CE-FE-05 | 5 | FE One-liner | High |
| 6 | TC-CE-FE-06 | 6 | FE One-liner | High |
| 7 | TC-CE-FE-07 | 7 | FE One-liner | **Critical** |
| 8 | TC-CE-FE-08 | 7 | FE One-liner | **Critical** |
| 9 | TC-CE-FE-09 | 7 | FE One-liner | High |
| 10 | TC-CE-FE-10 | 7 | FE One-liner | High |
| 11 | TC-CE-FE-11 | 8 | FE One-liner | High |
| 12 | TC-CE-FE-12 | 9 | FE One-liner | Medium |
| 13 | TC-CE-FE-13 | 10 | FE One-liner | High |
| 14 | TC-CE-FE-14 | 12 | FE One-liner | High |
| 15 | TC-CE-FE-15 | 3 | FE Popover | High |
| 16 | TC-CE-FE-16 | 7 | FE Popover | **Critical** |
| 17 | TC-CE-FE-17 | 2 | FE Popover | High |
| 18 | TC-CE-FE-18 | 2 | FE Popover | High |
| 19 | TC-CE-FE-19 | 6 | FE Profile | High |
| 20 | TC-CE-FE-20 | 11 | FE Profile | High |
| 21 | TC-CE-FE-21 | 5 | FE Profile | Medium |
| 22 | TC-CE-FE-22 | 4 | FE Colour | **Critical** |
| 23 | TC-CE-CB-01 | 1 | Chatbot | **Critical** |
| 24 | TC-CE-CB-02 | 2 | Chatbot | **Critical** |
| 25 | TC-CE-CB-03 | 3 | Chatbot | **Critical** |
| 26 | TC-CE-CB-04 | 4 | Chatbot | **Critical** |
| 27 | TC-CE-CB-05 | 4 | Chatbot | **Critical** |
| 28 | TC-CE-CB-06 | 6 | Chatbot | High |
| 29 | TC-CE-CB-07 | 7 | Chatbot | **Critical** |
| 30 | TC-CE-CB-08 | 7 | Chatbot | **Critical** |
| 31 | TC-CE-CB-09 | 9 | Chatbot | High |
| 32 | TC-CE-CB-10 | 6 | Chatbot | High |
| 33 | TC-CE-CB-11 | 3 | Chatbot | High |
| 34 | TC-CE-CB-12 | Any | Chatbot | High |
| 35 | TC-CE-CB-13 | 12 | Chatbot | Medium |
| 36 | TC-CE-CB-14 | 5 | Chatbot | High |
| 37 | TC-CE-CB-15 | 8 | Chatbot | High |
| 38 | TC-CE-FE-23 | 6 | FE One-liner · bypass flag | **Critical** |
| 39 | TC-CE-FE-24 | 7 | FE One-liner · bypass flag | **Critical** |
| 40 | TC-CE-FE-25 | 3 | FE One-liner · overdue flag | **Critical** |
| 41 | TC-CE-FE-26 | 3 | FE One-liner · overdue flag | High |
| 42 | TC-CE-FE-27 | 6+3 | FE One-liner · both flags | High |
| 43 | TC-CE-CB-16 | 6 | Chatbot · bypass flag | **Critical** |
| 44 | TC-CE-CB-17 | 7 | Chatbot · bypass flag | **Critical** |
| 45 | TC-CE-CB-18 | 3 | Chatbot · overdue flag | **Critical** |
| 46 | TC-CE-CB-19 | 6+3 | Chatbot · both flags | High |

---

## Part 1 — FE Test Cases

### TC-CE-FE-01 · State 1 · High
**Brand new customer opens their first SO — credit bar should show clean slate**

> **Scenario:** A new customer was just onboarded last week. No invoices, no orders, no quotations on record. Sales rep selects this customer on the SO form. The credit bar should reflect zero usage against their assigned limit.

- **Setup:** Customer with zero invoices, orders, QTs. Limit = RM 300k.
- **Location:** SO form sidebar (customer selected)
- **Expected:** `● Within Limit  0%  RM0 / RM300k`
- **Pass:** No overdue token. Utilisation shows 0%.

---

### TC-CE-FE-02 · State 2 · High
**Active customer paying on time — utilisation shows billed outstanding only**

> **Scenario:** A regular mid-sized customer who pays invoices reliably. They currently have RM 150k in billed outstanding (current invoices) and RM 60k in orders not yet invoiced. Sales rep opens a new SO to check their credit standing. Only billed outstanding (L1) should count toward utilisation — unbilled orders do not.

- **Setup:** L1 = RM 150k, L2 = RM 60k, limit = RM 500k
- **Location:** SO form sidebar
- **Expected:** `● Within Limit  30%  RM150k / RM500k`
- **Pass:** Utilisation = 30% (L1/limit). L2 does NOT reduce available or inflate utilisation %.
- **Fail:** Utilisation shows 42% (treating L1+L2 as numerator).

---

### TC-CE-FE-03 · State 3 · High
**Customer with overdue invoices — warning token appears but account is not blocked**

> **Scenario:** A customer has some invoices past due (oldest 35 days ago) but their overall credit usage is still healthy. Sales rep is creating a new order — they should see the overdue flag so Finance can follow up, but the order should not be blocked.

- **Setup:** L0 = RM 80k (oldest 35 days), L1 = RM 200k, limit = RM 500k
- **Location:** SO form sidebar
- **Expected:** `● Within Limit  40%  RM200k / RM500k  ⚠ RM80k overdue`
- **Pass:** Overdue text is orange (31–60d age). Status badge stays Within Limit.
- **Fail:** No ⚠ token. Or status badge changes to Near Limit due to overdue.

---

### TC-CE-FE-04 · State 4 · **Critical**
**Customer hitting 70% usage — amber warning should trigger at this exact threshold**

> **Scenario:** End of a strong sales quarter — a distributor customer has been buying heavily and has now reached exactly 70% of their credit limit. The one-liner should flip to amber at this point, not wait until 80%. This is critical because sales managers use this to decide whether to offer further credit.

- **Setup:** L1 = RM 350k (exactly 70%), limit = RM 500k, L0 = 0
- **Location:** Customer profile + SO form sidebar
- **Expected:** Status badge = `● Near Limit` (amber). Bar segment 1 turns amber.
- **Pass:** Amber at exactly 70%.
- **Fail:** Badge still shows Within Limit at 70%. Near Limit only fires at 80% or above.

---

### TC-CE-FE-05 · State 5 · High
**Customer has fully drawn their entire credit line — available should show RM 0, not negative**

> **Scenario:** A high-volume wholesale customer has invoiced exactly up to their credit ceiling this month. They have no headroom left. The available credit should display as RM 0 — not blank, not a negative value.

- **Setup:** L1 = RM 500k = limit exactly
- **Location:** Customer profile
- **Expected:** Over Limit (red). Available = `RM 0`. Bar 100% filled solid red.
- **Pass:** Zero displays as `RM 0`, not `–RM 0`.

---

### TC-CE-FE-06 · State 6 · High
**Customer has exceeded their credit limit — negative available displayed correctly**

> **Scenario:** A customer has been given additional orders approved by Finance on a case-by-case basis, pushing them RM 60k over their limit. The credit bar should clearly show the overage amount with a negative available figure and an overflow indicator.

- **Setup:** L1 = RM 560k, limit = RM 500k
- **Location:** Customer profile
- **Expected:** Available = `–RM 60k`. Overflow nub extends past bar right edge with label "RM 60k over limit".
- **Pass:** Negative formatted as `–RM 60k`.

---

### TC-CE-FE-07 · State 7 · **Critical**
**Large order would breach limit — breach check must include existing unconfirmed orders (L2)**

> **Scenario:** Sales rep is building an order for a customer who has RM 150k in billed invoices and RM 60k in confirmed but unbilled orders. They're adding a new line worth RM 295k. Even though billed + new order looks fine (RM 445k < RM 500k limit), the existing unconfirmed orders push the total to RM 505k — a breach. The system must account for all outstanding commitments, not just billed invoices.

- **Setup:** L1 = RM 150k, L2 = RM 60k, limit = RM 500k
- **Location:** SO form, add line item
- **Steps:** Add SO line item RM 295k
- **Expected:** Breach fires (150+60+295 = 505 > 500). One-liner flips to `⛔ Credit approval required  101%`.
- **Fail:** No breach shown because L1+newSO = 445 < 500. L2 missing from formula.

---

### TC-CE-FE-08 · State 7 · **Critical**
**Credit bar updates in real time as line items are added — no save required**

> **Scenario:** Sales rep is adding items to a large order. As they add each item, the credit bar should update live. The moment the running total pushes the customer over their limit, the one-liner must instantly flip to a breach warning — without the rep needing to save or submit the form first.

- **Setup:** L1 = RM 300k, limit = RM 500k, no existing L2
- **Location:** SO form
- **Steps:** Add line items progressively until grand_total crosses RM 200k
- **Expected:** One-liner flips from `● Within Limit` to `⛔ Credit approval required` immediately as grand_total exceeds RM 200k — no save or submit needed.
- **Pass:** Flip is instant, no page action required.

---

### TC-CE-FE-09 · State 7 · High
**Removing an item that caused a breach should revert the warning**

> **Scenario:** Sales rep accidentally added an expensive item that triggered a credit breach. They remove that item. The credit bar should revert back to a clean state immediately — the breach warning should not persist after the item is gone.

- **Setup:** SO in `⛔` breach state
- **Steps:** Remove the line item causing breach
- **Expected:** One-liner reverts to `● Within Limit` in real time.

---

### TC-CE-FE-10 · State 7 · High
**Breached SO saved as draft — breach state should persist on reopen**

> **Scenario:** Sales rep hits a credit breach, decides to save the SO as a draft and revisit later. When they (or a manager) reopens the draft, the breach warning should still be visible — it should not silently reset to a clean state.

- **Setup:** Breached SO saved as draft
- **Steps:** Close and reopen SO
- **Expected:** One-liner opens in `⛔` state. Does not reset to clean on reopen.

---

### TC-CE-FE-11 · State 8 · High
**Dormant customer with only overdue invoices — still Within Limit but overdue token shows**

> **Scenario:** A customer hasn't placed any new orders in months, but still has unpaid invoices from previous orders. There's no current billed activity — just the overdue balance. The credit utilisation is below the amber threshold, so the status badge should be Within Limit, but the overdue flag must still appear.

- **Setup:** L0 = RM 95k (all overdue, no current billed), limit = RM 400k
- **Location:** SO form sidebar
- **Expected:** `● Within Limit  24%  RM95k / RM400k  ⚠ RM95k overdue`
- **Pass:** Within Limit (24% < 70%). Overdue token still present.

---

### TC-CE-FE-12 · State 9 · Medium
**Customer with only draft quotations — pipeline value should not affect credit utilisation**

> **Scenario:** A customer has several draft quotations in progress but nothing confirmed yet. Quotations are not credit commitments — they should appear in the Pipeline column for visibility, but they must not reduce the available credit or inflate the utilisation percentage.

- **Setup:** L3 = RM 180k (QTs only), L1 = 0, L2 = 0, limit = RM 500k
- **Location:** Customer profile
- **Expected:** Utilisation 0%. Pipeline column = RM 180k. Available = full RM 500k.
- **Pass:** L3 does NOT reduce available credit.

---

### TC-CE-FE-13 · State 10 · High
**Customer with confirmed but unbilled orders — available credit reflects billed outstanding only**

> **Scenario:** A customer placed a large order last week — it's confirmed and in fulfilment, but no invoice has been raised yet. This unbilled order (L2) should appear in the bar for visibility, but it does not reduce the customer's available credit in the one-liner. Note: it still factors into breach checks when a new SO is submitted.

- **Setup:** L2 = RM 210k, L1 = 0, limit = RM 500k
- **Location:** Customer profile
- **Expected:** Unbilled SO column = RM 210k (42% of limit). Available = RM 500k (L1 = 0, so full limit shown).
- **Note:** Available = limit − L1, not limit − L1 − L2. Testers should be aware L2 still triggers breach at SO submit — see TC-CE-FE-07.

---

### TC-CE-FE-14 · State 12 · High
**Trusted client with no credit limit — bar shows grey dot, overdue still flagged**

> **Scenario:** A long-standing enterprise client operates without a formal credit limit — Finance agreed to this arrangement. Sales reps should be able to submit any SO freely without a credit block, but the system should still flag any overdue invoices so Finance can follow up.

- **Setup:** credit_limit = 0, L0 = RM 40k
- **Location:** SO form sidebar
- **Expected:** `○ No credit limit  —  ⚠ RM40k overdue`
- **Pass:** Grey dot. No % shown. No RM limit figures. Overdue token renders regardless. SO submits without credit block.

---

### TC-CE-FE-15 · State 3 · High
**Hover popover shows overdue invoice breakdown by age bucket**

> **Scenario:** Finance manager hovers over the credit bar for a customer with overdue invoices. They need to see how the overdue is split across age buckets (e.g., what's 1–30 days vs 31–60 days) to prioritise collections. The popover should show only buckets with balances — empty buckets are not shown.

- **Setup:** L0 = RM 80k (RM 30k at 25d, RM 50k at 45d)
- **Location:** Hover popover
- **Expected:** Overdue = RM 80k. Oldest = 45 days. Buckets: `1–30d  RM 30k · 31–60d  RM 50k`. Zero buckets not shown.

---

### TC-CE-FE-16 · State 7 · **Critical**
**Hover popover on SO with line items shows projected exposure after submission**

> **Scenario:** Sales rep building a large order hovers over the credit bar to get more detail. They need to see not just current exposure, but what happens if they submit this order — total projected outstanding, percentage of limit used, and whether the order will be blocked. This projection row only appears once there's an order value to project.

- **Setup:** SO form, L1 = RM 300k, limit = RM 500k, line item RM 220k present
- **Location:** Hover popover on SO form
- **Expected:** Popover shows: Credit Limit · Billed · Unbilled · "This order: RM 220k" · "After submission: RM 520k (104%) ⛔" · "RM 20k over limit"
- **Pass:** Projection row only appears when SO grand_total > 0.

---

### TC-CE-FE-17 · State 2 · High
**Hover popover on a Quotation — no projection row, even with line items present**

> **Scenario:** Sales rep is building a quotation with several items and hovers over the credit bar. Quotations do not commit credit, so there should be no "After submission" projection row — just a clean view of the customer's current exposure.

- **Setup:** QT form, customer with L1 = RM 300k, line items present
- **Location:** Hover popover on QT form
- **Expected:** Popover shows Credit Limit, Billed, Unbilled, Total exposure. No "This order" / "After submission" row.

---

### TC-CE-FE-18 · State 2 · High
**Hover popover on an SO before any line items are added — no projection row yet**

> **Scenario:** Sales rep just selected a customer on an SO form but hasn't added any items yet. The credit popover should show current account status only. The projection row should not appear until there's an order value to calculate from.

- **Setup:** SO form, customer selected, no line items yet
- **Location:** Hover popover
- **Expected:** No projection section. Current exposure only.

---

### TC-CE-FE-19 · State 6 · High
**Over-limit customer's profile bar shows overflow nub past the bar edge**

> **Scenario:** Finance manager reviews the customer profile for a customer already over their limit. The stacked bar should be fully filled, with an additional overflow nub visually extending past the bar's right edge — labelled with the exact overage amount.

- **Setup:** L1+L2 = RM 560k > limit RM 500k
- **Location:** Customer profile stacked bar
- **Expected:** Bar fills 100%. Red overflow nub past right edge labelled "RM 60k over limit".

---

### TC-CE-FE-20 · State 11 · High
**High-activity customer with all four exposure types — all bar segments render correctly**

> **Scenario:** Finance manager reviews the profile of a high-volume customer who has overdue invoices, current billed outstanding, confirmed but unbilled orders, and draft quotations all at the same time. The bar should display all four distinct visual segments, and the data columns below should match each bucket.

- **Setup:** L0 = RM 100k, L1 = RM 350k, L2 = RM 80k, L3 = RM 120k, limit = RM 500k
- **Location:** Customer profile
- **Expected:** Bar: red segment (overdue subset), amber solid (billed OK), lighter fill (unbilled SO), dotted outline (pipeline). All four data columns correct.

---

### TC-CE-FE-21 · State 5 · Medium
**Customer profile status row reflects Over Limit when fully drawn**

> **Scenario:** Finance manager is reviewing a customer who has fully exhausted their credit line. The status summary row at the bottom of the profile panel should clearly say "Over Limit" with 100% utilisation.

- **Setup:** L1 = RM 500k = limit
- **Location:** Customer profile status row (bottom of panel)
- **Expected:** `[red] Over Limit   Utilisation: 100%`

---

### TC-CE-FE-22 · State 4 · **Critical**
**Colour band switches at the correct thresholds — verify each boundary precisely**

> **Scenario:** Sales ops lead is reviewing the credit bar across different customers to confirm the colour coding is consistent and accurate. Each colour band (green → amber → orange → red) must switch at the exact configured threshold, not before or after. This test steps through six boundary values to catch any off-by-one implementation errors.

- **Steps + Expected:**

| L1 | Limit | Utilisation | Expected Colour | Expected Badge |
|---|---|---|---|---|
| RM 345k | RM 500k | 69% | Green | Within Limit |
| RM 350k | RM 500k | 70% | Amber | Near Limit |
| RM 449k | RM 500k | 89.8% | Amber | Near Limit |
| RM 450k | RM 500k | 90% | Orange | Approaching Limit |
| RM 499k | RM 500k | 99.8% | Orange | Approaching Limit |
| RM 500k | RM 500k | 100% | Red | Over Limit |

---

## Part 2 — Chatbot Test Cases

### TC-CE-CB-01 · State 1 · **Critical**
**Clean new customer — chatbot should not mention credit at all during QT creation**

> **Scenario:** Sales rep is creating a quotation for a brand new customer with no transaction history and zero credit usage. The chatbot should silently proceed to line items — no credit notices, no warnings, no prompts about credit standing. Any credit-related text at this stage would confuse the rep and erode trust in the system.

- **Setup:** State 1 customer. Creating QT via chatbot.
- **Expected:** Chatbot proceeds to line items with no credit mention at any point.
- **Fail:** Any credit-related text appears when customer is clean.

---

### TC-CE-CB-02 · State 2 · **Critical**
**Healthy customer creating an SO — chatbot proceeds without any credit interruption**

> **Scenario:** A regular customer at 30% credit utilisation, no overdue invoices. Sales rep creates a new SO via chatbot. The chatbot should confirm the order and move forward — no credit warning, no near-limit message. False positives here would train reps to ignore warnings.

- **Setup:** State 2 (30% utilisation, no overdue). Creating SO via chatbot.
- **Expected:** Chatbot confirms SO and proceeds. No credit warning at any step.
- **Fail:** Near-limit or overdue notice fires falsely.

---

### TC-CE-CB-03 · State 3 · **Critical**
**Customer with overdue invoices — chatbot flags it before QT but does not block the order**

> **Scenario:** A customer has RM 80k in overdue invoices but is still within their credit limit. Sales rep creates a new quotation via chatbot. The chatbot should surface the overdue balance proactively — Finance needs to know — but should NOT block the quotation. The rep can acknowledge and continue.

- **Setup:** State 3 (L0 = RM 80k, within limit). Creating QT.
- **Expected:** Before line items: *"Before we build the quotation — [Customer] has RM 80k in overdue invoices (oldest: X days). They're within their credit limit so this won't block the order, but you may want Finance to follow up. Ready to add line items?"*
- **Pass:** User can say Yes and proceed without restriction. `credit_notice_surfaced = true` stamped on QT.

---

### TC-CE-CB-04 · State 4 · **Critical**
**Customer nearing credit limit — chatbot warns before drafting QT, explains approval flow**

> **Scenario:** A distributor customer has been buying heavily this quarter and is now at 78% of their credit limit. Sales rep tries to create a new quotation. The chatbot should give a heads-up that any resulting order will go through credit approval — but the quotation itself can still be drafted now. This sets expectations early before the rep invests time in building the order.

- **Setup:** L1 = RM 390k (78%), limit = RM 500k, L0 = 0. Creating QT.
- **Expected:** *"Heads up — [Customer] is at 78% of their credit limit (RM 390k of RM 500k billed and outstanding). The quotation can still be drafted. If it converts to an order, it will be routed for credit approval before confirmation. Continue? [Yes] [Check their account first]"*

---

### TC-CE-CB-05 · State 4 · **Critical**
**Near-limit chatbot warning fires at 70%, not 80% — threshold must match spec**

> **Scenario:** Same near-limit scenario as above, but tested at exactly 70% (the configured threshold). This verifies the chatbot is using the correct threshold from spec, not a hardcoded 80% that a developer may have assumed. Critical because getting this wrong means customers sail past the warning zone silently.

- **Setup:** L1 = RM 350k (exactly 70%), limit = RM 500k, L0 = 0. Creating QT.
- **Expected:** Near-limit notice fires.
- **Fail:** Notice does not fire until 80%. Chatbot is using wrong threshold.
- **Spec ref:** `utilisation_amber_threshold_pct` default = 70 (Part E)

---

### TC-CE-CB-06 · State 6 · High
**Customer already over their limit — chatbot warns but still allows quotation to be drafted**

> **Scenario:** A customer has outstanding invoices exceeding their credit ceiling, plus overdue balances. Sales rep wants to draft a new quotation. The chatbot should clearly state the over-limit situation and the overdue amount, while still allowing the quotation — enforcement happens at SO submission, not at quotation stage.

- **Setup:** L1 = RM 560k, limit = RM 500k, L0 = RM 120k. Creating QT.
- **Expected:** *"[!] [Customer] is currently over their credit limit — RM 560k outstanding against a RM 500k limit. Overdue: RM 120k. You can still draft the quotation, but any order will require Finance approval. Continue drafting? [Yes] [No, hold for now]"*

---

### TC-CE-CB-07 · State 7 · **Critical**
**New SO would push customer over limit — chatbot shows full breakdown before submit**

> **Scenario:** Sales rep has built an SO worth RM 220k for a customer with RM 300k already outstanding. Submitting would push the customer to 104% of their limit. Before the rep submits, the chatbot must show exactly what will happen: current exposure, the addition from this order, projected total, and that Finance approval is required. The rep needs full context to decide.

- **Setup:** L1 = RM 300k, no L2, new SO = RM 220k, limit = RM 500k.
- **Expected:** *"This order would bring [Customer] over their credit limit. Current exposure: RM 300k. This order: +RM 220k. Total after: RM 520k (104% of RM 500k limit). Submitting will route this order for Finance approval. It won't be confirmed until approved. Submit for approval? [Yes] [Save as draft] [Cancel]"*

---

### TC-CE-CB-08 · State 7 variant · **Critical**
**Breach calculation includes existing unconfirmed orders (L2) — not just billed outstanding**

> **Scenario:** A customer has RM 200k in billed invoices AND RM 200k in confirmed but unbilled orders. Sales rep adds a new SO worth RM 150k. If the system only checks billed + new order, it shows RM 350k (fine). But including the unbilled orders, the real total is RM 550k — a breach. The chatbot must catch this. Missing L2 is a critical calculation gap.

- **Setup:** L1 = RM 200k, L2 = RM 200k, new SO = RM 150k, limit = RM 500k.
- **Expected:** Breach fires (200+200+150 = 550 > 500). Chatbot breach warning shows projected total = RM 550k (110%).
- **Fail:** No breach warning shown. Chatbot only checked L1+newSO = 350 < 500. L2 missing from formula.

---

### TC-CE-CB-09 · State 9 · High
**Draft quotations (pipeline) should NOT trigger a breach — they are not credit commitments**

> **Scenario:** A customer has RM 400k worth of draft quotations being worked on, but nothing confirmed yet. Sales rep submits a new SO worth RM 100k. With RM 200k billed outstanding + RM 100k new order, the total is RM 300k — well within the RM 500k limit. The chatbot should not include pipeline quotations in the breach check and should allow the SO through without a warning.

- **Setup:** L1 = RM 200k, L3 = RM 400k (QTs only, no submitted SO), new SO = RM 100k, limit = RM 500k.
- **Expected:** No breach (200+0+100 = 300 < 500). Chatbot proceeds to submit without warning.
- **Fail:** Chatbot fires breach warning because it incorrectly added L3 (200+400+100 = 700).

---

### TC-CE-CB-10 · State 6 · High
**Small order on already over-limit customer — chatbot uses short copy, not full breakdown**

> **Scenario:** A customer is already over their limit. Sales rep places a tiny order (RM 400 worth of spare parts). Since the customer is already flagged for Finance review, the chatbot doesn't need to repeat the full over-limit breakdown for this trivial amount — a condensed single-line notice is enough. De minimis threshold = RM 500.

- **Setup:** State 6 (already over limit). New SO = RM 400 (below de minimis default RM 500).
- **Expected:** Short copy only: *"[Customer] is over their credit limit. This order will be submitted for Finance approval as usual. Submit? [Yes] [Cancel]"*
- **Fail:** Full breakdown shown (Current exposure / This order / Total after) for de minimis amount.

---

### TC-CE-CB-11 · State 3 · High
**Customer with overdue invoices submitting an SO — chatbot includes overdue callout in pre-submit confirmation**

> **Scenario:** Sales rep has built an SO for a customer who has both current billed outstanding and overdue invoices. When the rep is about to submit, the chatbot should remind them of the overdue balance and show what the total outstanding will look like after this SO is added — so they can make an informed decision to submit or save as draft.

- **Setup:** State 3 (L0 = RM 80k, within limit). SO built, ready to submit.
- **Expected:** Pre-submit message includes overdue amount and total outstanding after submission: *"One thing to note: [Customer] has RM 80k in overdue invoices. Submitting will bring total outstanding to RM[X] (Y% of limit). Submit now? [Yes, submit] [Save as draft]"*

---

### TC-CE-CB-12 · Any · High
**User directly asks about a customer's credit standing — chatbot returns full 4-layer summary with action offer**

> **Scenario:** Finance manager or sales lead asks the chatbot about a customer's credit status mid-conversation. They want the full picture: all four exposure layers (billed, unbilled, overdue detail, pipeline), the overall utilisation, and a next action they can take immediately. The chatbot should not just report — it should end with an actionable offer.

- **Setup:** State 11 customer. User message: *"What's [Customer]'s credit standing?"*
- **Expected response includes:**
  - Credit Limit
  - Billed Outstanding (% utilised + status)
  - Overdue (total + oldest age + invoice list)
  - Unbilled Orders
  - Pipeline (Drafts)
  - Total committed exposure
  - Action offer at end (e.g. *"Want to send a payment reminder, or see the full account?"*)
- **Pass:** All four layers present. Ends with action offer — does not just report.

---

### TC-CE-CB-13 · State 12 · Medium
**Customer with no credit limit — chatbot is advisory only, no enforcement language**

> **Scenario:** A long-standing enterprise client has no credit limit configured. Sales rep submits an SO via chatbot. The SO should go through without any block or credit approval routing. If the rep asks about credit, the chatbot shows the account amounts as context but does not use enforcement language (no "approval required", no "over limit" framing).

- **Setup:** credit_limit = 0. Creating SO via chatbot.
- **Expected:** SO submits without credit block. If user queries credit: *"No credit limit configured for this customer."* Shows layer amounts as context only, no enforcement language.

---

### TC-CE-CB-14 · State 5 · High
**Customer fully at their credit ceiling — any new SO, regardless of size, routes to approval**

> **Scenario:** A customer's outstanding balance equals their credit limit exactly — every cent of their credit line is used. Sales rep tries to place any new order, even a small one. Because the existing exposure is already at 100%, any addition causes a breach. The chatbot must warn and route to Finance approval, confirming once submitted.

- **Setup:** L1 = RM 500k = limit exactly. Creating SO for any value.
- **Expected:** Breach fires immediately (500+0+any > 500). Chatbot breach warning shown. On submit: *"This order has been submitted and is awaiting credit approval."*

---

### TC-CE-CB-15 · State 8 · High
**Customer with only overdue invoices — chatbot flags overdue and routes new SO to approval**

> **Scenario:** A customer hasn't placed new orders recently, but has RM 95k in unpaid invoices all past due. Sales rep creates a new SO. With `block_on_overdue = true`, any new order for this customer should be routed to credit approval regardless of the credit utilisation level. The chatbot should surface the overdue situation and confirm the approval routing once submitted.

- **Setup:** L0 = RM 95k (all overdue), L1_current = 0, limit = RM 400k.
- **Expected:** Chatbot surfaces overdue callout before submit. On submit with `block_on_overdue = true`: SO routes to credit approval. Chatbot confirms: *"This order has been submitted and is awaiting credit approval. The credit controller has been notified."*

---

## Part 3 — Enforcement Flag Test Cases

> All TCs in this section explicitly set one or both flags to a **non-default** state. The flag state under test is called out at the top of each TC. Verify flag state in the Customer Credit Limit child table before running.

---

### TC-CE-FE-23 · State 6 · **Critical**
**Bypass Credit Limit ON — over-limit customer: bar still shows red but no ⛔ block state**

> **Scenario:** Finance has decided that a key account customer (already over their credit limit) should not be blocked — their orders are pre-approved by management. The Credit Controller checked `bypass_credit_limit_check` on this customer. The credit bar should still honestly display the over-limit status in red (visibility preserved), but the ⛔ "Credit approval required" badge must NOT appear — the SO should submit freely.

- **Flag state:** `bypass_credit_limit_check = True` (checked). `block_on_overdue = True` (default).
- **Setup:** L1 = RM 560k, limit = RM 500k, L0 = 0
- **Location:** SO form one-liner
- **Steps:** Select customer on SO form. Add any line item.
- **Expected:** One-liner shows `● Over Limit  112%  RM560k / RM500k`. No ⛔ symbol. Submit button available without credit hold.
- **Pass:** Over Limit colour and badge render. ⛔ block state does NOT fire. SO submits to docstatus=1 without approval routing.
- **Fail:** ⛔ appears and SO is held for approval despite bypass being enabled. OR bar shows no red / wrong colour.

---

### TC-CE-FE-24 · State 7 · **Critical**
**Bypass Credit Limit ON — adding items that would breach: one-liner stays informational, never flips to ⛔**

> **Scenario:** Same bypass-enabled customer. Sales rep is building a large SO. As they add items, the running total crosses the credit limit. The one-liner should update the colour and percentage live (as normal), but it must never flip to the ⛔ "Credit approval required" state — that state is credit-limit enforcement, which is bypassed for this customer.

- **Flag state:** `bypass_credit_limit_check = True`. `block_on_overdue = True` (default, but L0 = 0 so irrelevant).
- **Setup:** L1 = RM 300k, limit = RM 500k, no L2, L0 = 0
- **Location:** SO form one-liner
- **Steps:** Add line items progressively until grand_total exceeds RM 200k (would breach at 300+200 = 500)
- **Expected:** One-liner colour transitions green → amber → red as utilisation climbs. At breach point shows `● Over Limit  100%+`. No ⛔ badge at any point.
- **Pass:** Colour updates correctly. ⛔ never appears. SO remains submittable throughout.
- **Fail:** ⛔ flips on when total exceeds limit. Bypass flag is being ignored.

---

### TC-CE-FE-25 · State 3 · **Critical**
**Overdue Block ON (default) + within-limit customer with overdue — one-liner shows block indicator alongside ⚠**

> **Scenario:** A customer has RM 80k in overdue invoices and is still within their credit limit. With `block_on_overdue = True` (the default), even though the credit limit is fine, this customer's new SO will be routed to Credit Controller because of the overdue balance. The one-liner must communicate this — the ⚠ overdue token alone is not enough; the tester should verify an additional block/routing indicator is shown so the rep knows submission will trigger approval flow.

- **Flag state:** `block_on_overdue = True` (default). `bypass_credit_limit_check = False` (default).
- **Setup:** L0 = RM 80k, L1 = RM 200k, limit = RM 500k
- **Location:** SO form one-liner
- **Expected:** One-liner shows `● Within Limit  40%  RM200k / RM500k  ⚠ RM80k overdue`. On SO submit: routed to Credit Controller. Form shows post-submit banner indicating awaiting credit approval.
- **Pass:** SO submits to docstatus=1 with `credit_limit_breach = 1` and `credit_breach_reason = "overdue"`. Approval routing fires.
- **Fail:** SO submits cleanly as if no issue. Overdue block not enforced.

---

### TC-CE-FE-26 · State 3 · High
**Overdue Block OFF — overdue token is advisory only, SO submits without routing**

> **Scenario:** Credit Controller has explicitly unchecked `block_on_overdue` for a customer who has some late invoices — perhaps the account team has a payment arrangement in place. The ⚠ overdue token should still appear (Finance still needs visibility), but the SO must submit without any credit approval routing triggered by the overdue balance.

- **Flag state:** `block_on_overdue = False` (unchecked). `bypass_credit_limit_check = False` (default, enforce).
- **Setup:** L0 = RM 80k, L1 = RM 200k, limit = RM 500k
- **Location:** SO form one-liner
- **Expected:** One-liner shows `● Within Limit  40%  RM200k / RM500k  ⚠ RM80k overdue`. SO submits cleanly — no approval routing, no breach flag stamped for overdue reason.
- **Pass:** SO submits to docstatus=1. `credit_limit_breach = 0`. No Credit Controller notification for overdue.
- **Fail:** SO still routes to approval. `block_on_overdue = False` is being ignored.

---

### TC-CE-FE-27 · State 6+3 · High
**Bypass Credit Limit ON + Overdue Block ON — overdue block still fires independently**

> **Scenario:** A customer has bypass_credit_limit_check enabled (credit limit advisory only), but block_on_overdue is still checked. The customer is both over their credit limit AND has overdue invoices. Credit limit enforcement is bypassed — but the overdue block is independent and must still fire. The SO should be routed to Credit Controller due to the overdue, not the limit breach. The `credit_breach_reason` stamp should reflect this.

- **Flag state:** `bypass_credit_limit_check = True`. `block_on_overdue = True`.
- **Setup:** L0 = RM 120k, L1 = RM 560k, limit = RM 500k
- **Location:** SO form
- **Steps:** Select customer, add any line item, submit
- **Expected:** One-liner shows Over Limit (red) but no ⛔ from credit limit. On submit: routed to Credit Controller. `credit_limit_breach = 1`, `credit_breach_reason = "overdue"` (not "credit_limit" or "credit_limit_and_overdue" — bypass means limit did not trigger).
- **Pass:** Routing fires. Breach reason is `"overdue"` only.
- **Fail:** SO submits cleanly (overdue block ignored). OR breach reason includes "credit_limit" despite bypass being on.

---

### TC-CE-CB-16 · State 6 · **Critical**
**Bypass Credit Limit ON — chatbot warns about over-limit exposure but submits without approval routing**

> **Scenario:** Sales rep creates an SO via chatbot for a customer with bypass enabled who is over their credit limit. The chatbot should be transparent — it should tell the rep the customer is over their limit (so the rep is informed) — but it must NOT trigger the approval routing flow. The order should confirm directly. Silently skipping the mention would hide important account information from the rep.

- **Flag state:** `bypass_credit_limit_check = True`. `block_on_overdue = False`.
- **Setup:** L1 = RM 560k, limit = RM 500k, L0 = 0. Creating SO via chatbot.
- **Expected:** Chatbot surfaces credit status: *"Note: [Customer] is currently over their credit limit (RM 560k of RM 500k). Their account is set to advisory mode — this order won't require credit approval. Continuing. [Add line items / Cancel]"* On submit: SO confirms directly. No Credit Controller notification.
- **Pass:** Over-limit exposure mentioned. No approval routing. SO confirms.
- **Fail:** Chatbot fires full breach warning + approval routing despite bypass. OR chatbot shows no mention of over-limit exposure at all.

---

### TC-CE-CB-17 · State 7 · **Critical**
**Bypass Credit Limit ON — breach threshold crossed mid-SO: chatbot does not route to approval**

> **Scenario:** Sales rep builds an SO via chatbot that would breach the credit limit. Normally this triggers approval routing (TC-CE-CB-07). With bypass enabled, the chatbot should inform the rep about the projected over-limit exposure but must submit the order directly — no "Submit for approval?" prompt, no Credit Controller notification for the limit breach.

- **Flag state:** `bypass_credit_limit_check = True`. `block_on_overdue = False`.
- **Setup:** L1 = RM 300k, no L2, new SO = RM 220k, limit = RM 500k, L0 = 0.
- **Expected:** Chatbot notes exposure: *"This order will bring [Customer]'s total to RM 520k (104% of RM 500k limit). Their account is set to advisory mode — submitting now. [Confirm / Cancel]"* On confirm: SO submits without approval routing.
- **Pass:** Advisory note shown. Confirm goes straight to submit. No approval flow triggered.
- **Fail:** Full breach warning fires with "Submit for approval?" prompt. Bypass is ignored.

---

### TC-CE-CB-18 · State 3 · **Critical**
**Overdue Block ON (default) — within-limit customer with overdue: chatbot routes SO to approval**

> **Scenario:** A customer is comfortably within their credit limit (40% utilisation) but has RM 80k in overdue invoices. `block_on_overdue` is checked (default). Sales rep creates a new SO via chatbot. Even though the credit limit is fine, the overdue block must fire — the chatbot should surface the overdue balance and route the order to credit approval before confirming.

- **Flag state:** `block_on_overdue = True` (default). `bypass_credit_limit_check = False` (default).
- **Setup:** L0 = RM 80k, L1 = RM 200k, limit = RM 500k. Creating SO via chatbot.
- **Expected:** Before or at submit, chatbot surfaces: *"[Customer] has RM 80k in overdue invoices. Submitting this order will route it for Finance approval. Submit for approval? [Yes] [Save as draft]"* On yes: SO submits with `credit_limit_breach = 1`, `credit_breach_reason = "overdue"`. Credit Controller notified.
- **Pass:** Approval routing fires for overdue reason. Not for credit limit (utilisation is 40%, no limit breach). `credit_breach_reason = "overdue"`.
- **Fail:** Chatbot submits SO cleanly (overdue block not enforced). OR routes for wrong reason.

---

### TC-CE-CB-19 · State 6+3 · High
**Bypass Credit Limit ON + Overdue Block ON — chatbot routes for overdue only, not credit limit**

> **Scenario:** A customer has bypass enabled (credit limit advisory) but overdue block is still active. They are both over their limit and have overdue invoices. The chatbot must route the SO to Credit Controller — but for the overdue reason, not the credit limit breach. The language used in the chatbot message should reflect the correct reason so the Credit Controller knows what they're approving.

- **Flag state:** `bypass_credit_limit_check = True`. `block_on_overdue = True`.
- **Setup:** L0 = RM 120k, L1 = RM 560k, limit = RM 500k. New SO = RM 100k.
- **Expected:** Chatbot message references overdue block as the routing trigger: *"[Customer] has RM 120k in overdue invoices. Submitting will route this order for Finance approval. Note: their credit limit is set to advisory mode. Submit for approval? [Yes] [Save as draft]"* On yes: `credit_breach_reason = "overdue"`.
- **Pass:** Routing fires. `credit_breach_reason = "overdue"` (not "credit_limit_and_overdue"). Chatbot message cites overdue, not limit breach.
- **Fail:** `credit_breach_reason = "credit_limit_and_overdue"` (bypass not respected in reason stamping). OR no routing at all.

---

## See Also

- [[01 - MAIA Product/Product Specs/MAIA Credit Exposure]] — full spec (Part D chatbot, Part J ACs, Part J.8 flag ACs, Part K backend)
