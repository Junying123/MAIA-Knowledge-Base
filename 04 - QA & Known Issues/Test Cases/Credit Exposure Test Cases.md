---
owner: Gareth
status: draft
last_reviewed: 2026-06-08
lark_url:
---

# Credit Exposure Test Cases

**Total Test Cases:** 37 (FE: 22 · Chatbot: 15)
**Feature:** Credit Exposure — Customer Profile Panel, Compact One-liner Bar, Hover Popover, Chatbot Messages
**Spec Ref:** [[01 - MAIA Product/Product Specs/MAIA Credit Exposure]]

> **Scope:** FE display correctness and chatbot messaging across all 12 canonical customer credit states. Backend computation and SO enforcement logic are covered in Part J of the spec.

---

## 12 Canonical States (Test Data Reference)

| State | Name | L0 | L1 | L2 | L3 | Limit | Expected Status Badge |
|---|---|---|---|---|---|---|---|
| 1 | Zero exposure | 0 | 0 | 0 | 0 | 300k | Within Limit |
| 2 | Healthy, no overdue | 0 | 150k | 60k | 40k | 500k | Within Limit |
| 3 | Overdue present, headroom exists | 80k | 200k | 60k | 40k | 500k | Within Limit + ⚠ |
| 4 | Near limit (≥ 70%), no overdue | 0 | 390k | 30k | 20k | 500k | Near Limit (amber) |
| 5 | At limit exactly | 0 | 500k | 0 | 0 | 500k | Over Limit (red) |
| 6 | Over limit | 120k | 560k | 0 | 0 | 500k | Over Limit (red) |
| 7 | New SO would breach | 0 | 300k | 0 | 0 | 500k | Breach on SO |
| 8 | Overdue only, nothing current | 95k | 95k | 0 | 0 | 400k | Within Limit + ⚠ |
| 9 | Pipeline only | 0 | 0 | 0 | 180k | 500k | Within Limit |
| 10 | Unbilled SO only | 0 | 0 | 210k | 0 | 500k | Within Limit |
| 11 | All buckets populated | 100k | 350k | 80k | 120k | 500k | Near Limit + ⚠ |
| 12 | No credit limit | 0 | 140k | 60k | 40k | — | No credit limit |

**Threshold rule (spec default):** Within Limit < 70% · Near Limit 70–89% · Approaching Limit 90–99% · Over Limit ≥ 100%

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

---

## Part 1 — FE Test Cases

### TC-CE-FE-01 · State 1 · High
**Zero Exposure: Available = Full Limit**

- **Setup:** Customer with zero invoices, orders, QTs. Limit = RM 300k.
- **Location:** SO form sidebar (customer selected)
- **Expected:** `● Within Limit  0%  RM0 / RM300k`
- **Pass:** No overdue token. Utilisation shows 0%.

---

### TC-CE-FE-02 · State 2 · High
**Healthy: Utilisation = L1 / Limit Only**

- **Setup:** L1 = RM 150k, L2 = RM 60k, limit = RM 500k
- **Location:** SO form sidebar
- **Expected:** `● Within Limit  30%  RM150k / RM500k`
- **Pass:** Utilisation = 30% (L1/limit). L2 does NOT reduce available or inflate utilisation %.
- **Fail:** Utilisation shows 42% (treating L1+L2 as numerator).

---

### TC-CE-FE-03 · State 3 · High
**Overdue Token Appended to One-liner**

- **Setup:** L0 = RM 80k (oldest 35 days), L1 = RM 200k, limit = RM 500k
- **Location:** SO form sidebar
- **Expected:** `● Within Limit  40%  RM200k / RM500k  ⚠ RM80k overdue`
- **Pass:** Overdue text is orange (31–60d age). Status badge stays Within Limit.
- **Fail:** No ⚠ token. Or status badge changes to Near Limit due to overdue.

---

### TC-CE-FE-04 · State 4 · **Critical**
**Near Limit Fires at 70%, Not 80%**

- **Setup:** L1 = RM 350k (exactly 70%), limit = RM 500k, L0 = 0
- **Location:** Customer profile + SO form sidebar
- **Expected:** Status badge = `● Near Limit` (amber). Bar segment 1 turns amber.
- **Pass:** Amber at exactly 70%.
- **Fail:** Badge still shows Within Limit at 70%. Near Limit only fires at 80% or above.

---

### TC-CE-FE-05 · State 5 · High
**At Limit: Available = RM 0 (Not Negative)**

- **Setup:** L1 = RM 500k = limit exactly
- **Location:** Customer profile
- **Expected:** Over Limit (red). Available = `RM 0`. Bar 100% filled solid red.
- **Pass:** Zero displays as `RM 0`, not `–RM 0`.

---

### TC-CE-FE-06 · State 6 · High
**Over Limit: Negative Available**

- **Setup:** L1 = RM 560k, limit = RM 500k
- **Location:** Customer profile
- **Expected:** Available = `–RM 60k`. Overflow nub extends past bar right edge with label "RM 60k over limit".
- **Pass:** Negative formatted as `–RM 60k`.

---

### TC-CE-FE-07 · State 7 · **Critical**
**Breach Uses L1 + L2 + newSO (Not L1 + newSO)**

- **Setup:** L1 = RM 150k, L2 = RM 60k, limit = RM 500k
- **Location:** SO form, add line item
- **Steps:** Add SO line item RM 295k
- **Expected:** Breach fires (150+60+295 = 505 > 500). One-liner flips to `⛔ Credit approval required  101%`.
- **Fail:** No breach shown because L1+newSO = 445 < 500. L2 missing from formula.

---

### TC-CE-FE-08 · State 7 · **Critical**
**Breach Flip Happens in Real Time**

- **Setup:** L1 = RM 300k, limit = RM 500k, no existing L2
- **Location:** SO form
- **Steps:** Add line items progressively until grand_total crosses RM 200k
- **Expected:** One-liner flips from `● Within Limit` to `⛔ Credit approval required` immediately as grand_total exceeds RM 200k — no save or submit needed.
- **Pass:** Flip is instant, no page action required.

---

### TC-CE-FE-09 · State 7 · High
**Removing Line Item Reverts Breach State**

- **Setup:** SO in `⛔` breach state
- **Steps:** Remove the line item causing breach
- **Expected:** One-liner reverts to `● Within Limit` in real time.

---

### TC-CE-FE-10 · State 7 · High
**Draft Save Preserves Breach State**

- **Setup:** Breached SO saved as draft
- **Steps:** Close and reopen SO
- **Expected:** One-liner opens in `⛔` state. Does not reset to clean on reopen.

---

### TC-CE-FE-11 · State 8 · High
**Overdue Only: Within Limit + Overdue Token**

- **Setup:** L0 = RM 95k (all overdue, no current billed), limit = RM 400k
- **Location:** SO form sidebar
- **Expected:** `● Within Limit  24%  RM95k / RM400k  ⚠ RM95k overdue`
- **Pass:** Within Limit (24% < 70%). Overdue token still present.

---

### TC-CE-FE-12 · State 9 · Medium
**Pipeline Only: 0% Utilisation, Full Available**

- **Setup:** L3 = RM 180k (QTs only), L1 = 0, L2 = 0, limit = RM 500k
- **Location:** Customer profile
- **Expected:** Utilisation 0%. Pipeline column = RM 180k. Available = full RM 500k.
- **Pass:** L3 does NOT reduce available credit.

---

### TC-CE-FE-13 · State 10 · High
**Unbilled SO Only: L2 Shown But Available = Full Limit**

- **Setup:** L2 = RM 210k, L1 = 0, limit = RM 500k
- **Location:** Customer profile
- **Expected:** Unbilled SO column = RM 210k (42% of limit). Available = RM 500k (L1 = 0, so full limit shown).
- **Note:** Available = limit − L1, not limit − L1 − L2. Testers should be aware L2 still triggers breach at SO submit — see TC-CE-FE-07.

---

### TC-CE-FE-14 · State 12 · High
**No Credit Limit: Grey Dot, Overdue Token Still Shows**

- **Setup:** credit_limit = 0, L0 = RM 40k
- **Location:** SO form sidebar
- **Expected:** `○ No credit limit  —  ⚠ RM40k overdue`
- **Pass:** Grey dot. No % shown. No RM limit figures. Overdue token renders regardless. SO submits without credit block.

---

### TC-CE-FE-15 · State 3 · High
**Hover Popover: Overdue Bucket Breakdown**

- **Setup:** L0 = RM 80k (RM 30k at 25d, RM 50k at 45d)
- **Location:** Hover popover
- **Expected:** Overdue = RM 80k. Oldest = 45 days. Buckets: `1–30d  RM 30k · 31–60d  RM 50k`. Zero buckets not shown.

---

### TC-CE-FE-16 · State 7 · **Critical**
**Hover Popover: Projection Row on SO with Items**

- **Setup:** SO form, L1 = RM 300k, limit = RM 500k, line item RM 220k present
- **Location:** Hover popover on SO form
- **Expected:** Popover shows: Credit Limit · Billed · Unbilled · "This order: RM 220k" · "After submission: RM 520k (104%) ⛔" · "RM 20k over limit"
- **Pass:** Projection row only appears when SO grand_total > 0.

---

### TC-CE-FE-17 · State 2 · High
**Hover Popover: No Projection Row on QT Form**

- **Setup:** QT form, customer with L1 = RM 300k, line items present
- **Location:** Hover popover on QT form
- **Expected:** Popover shows Credit Limit, Billed, Unbilled, Total exposure. No "This order" / "After submission" row.

---

### TC-CE-FE-18 · State 2 · High
**Hover Popover: No Projection Row on SO Before Items**

- **Setup:** SO form, customer selected, no line items yet
- **Location:** Hover popover
- **Expected:** No projection section. Current exposure only.

---

### TC-CE-FE-19 · State 6 · High
**Customer Profile: Overflow Indicator**

- **Setup:** L1+L2 = RM 560k > limit RM 500k
- **Location:** Customer profile stacked bar
- **Expected:** Bar fills 100%. Red overflow nub past right edge labelled "RM 60k over limit".

---

### TC-CE-FE-20 · State 11 · High
**Customer Profile: All Four Segments Render**

- **Setup:** L0 = RM 100k, L1 = RM 350k, L2 = RM 80k, L3 = RM 120k, limit = RM 500k
- **Location:** Customer profile
- **Expected:** Bar: red segment (overdue subset), amber solid (billed OK), lighter fill (unbilled SO), dotted outline (pipeline). All four data columns correct.

---

### TC-CE-FE-21 · State 5 · Medium
**Customer Profile: Status Summary Row**

- **Setup:** L1 = RM 500k = limit
- **Location:** Customer profile status row (bottom of panel)
- **Expected:** `[red] Over Limit   Utilisation: 100%`

---

### TC-CE-FE-22 · State 4 · **Critical**
**Colour Band Boundaries**

- **Setup:** Test at four boundary values
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
**Silent on Zero Exposure Customer (QT)**

- **Setup:** State 1 customer. Creating QT via chatbot.
- **Expected:** Chatbot proceeds to line items with no credit mention at any point.
- **Fail:** Any credit-related text appears when customer is clean.

---

### TC-CE-CB-02 · State 2 · **Critical**
**Silent on Healthy Customer (SO)**

- **Setup:** State 2 (30% utilisation, no overdue). Creating SO via chatbot.
- **Expected:** Chatbot confirms SO and proceeds. No credit warning at any step.
- **Fail:** Near-limit or overdue notice fires falsely.

---

### TC-CE-CB-03 · State 3 · **Critical**
**Overdue Notice in QT Flow — No Block**

- **Setup:** State 3 (L0 = RM 80k, within limit). Creating QT.
- **Expected:** Before line items: *"Before we build the quotation — [Customer] has RM 80k in overdue invoices (oldest: X days). They're within their credit limit so this won't block the order, but you may want Finance to follow up. Ready to add line items?"*
- **Pass:** User can say Yes and proceed without restriction. `credit_notice_surfaced = true` stamped on QT.

---

### TC-CE-CB-04 · State 4 · **Critical**
**Near-Limit Notice at 78% (QT Flow)**

- **Setup:** L1 = RM 390k (78%), limit = RM 500k, L0 = 0. Creating QT.
- **Expected:** *"Heads up — [Customer] is at 78% of their credit limit (RM 390k of RM 500k billed and outstanding). The quotation can still be drafted. If it converts to an order, it will be routed for credit approval before confirmation. Continue? [Yes] [Check their account first]"*

---

### TC-CE-CB-05 · State 4 · **Critical**
**Near-Limit Threshold is 70%, Not 80%**

- **Setup:** L1 = RM 350k (exactly 70%), limit = RM 500k, L0 = 0. Creating QT.
- **Expected:** Near-limit notice fires.
- **Fail:** Notice does not fire until 80%. Chatbot is using wrong threshold.
- **Spec ref:** `utilisation_amber_threshold_pct` default = 70 (Part E)

---

### TC-CE-CB-06 · State 6 · High
**Over-Limit Warning in QT Flow**

- **Setup:** L1 = RM 560k, limit = RM 500k, L0 = RM 120k. Creating QT.
- **Expected:** *"[!] [Customer] is currently over their credit limit — RM 560k outstanding against a RM 500k limit. Overdue: RM 120k. You can still draft the quotation, but any order will require Finance approval. Continue drafting? [Yes] [No, hold for now]"*

---

### TC-CE-CB-07 · State 7 · **Critical**
**Breach Warning Before SO Submit**

- **Setup:** L1 = RM 300k, no L2, new SO = RM 220k, limit = RM 500k.
- **Expected:** *"This order would bring [Customer] over their credit limit. Current exposure: RM 300k. This order: +RM 220k. Total after: RM 520k (104% of RM 500k limit). Submitting will route this order for Finance approval. It won't be confirmed until approved. Submit for approval? [Yes] [Save as draft] [Cancel]"*

---

### TC-CE-CB-08 · State 7 variant · **Critical**
**Breach Check Includes L2 in Projected Total**

- **Setup:** L1 = RM 200k, L2 = RM 200k, new SO = RM 150k, limit = RM 500k.
- **Expected:** Breach fires (200+200+150 = 550 > 500). Chatbot breach warning shows projected total = RM 550k (110%).
- **Fail:** No breach warning shown. Chatbot only checked L1+newSO = 350 < 500. L2 missing from formula.

---

### TC-CE-CB-09 · State 9 · High
**L3 Pipeline NOT Included in Breach Check**

- **Setup:** L1 = RM 200k, L3 = RM 400k (QTs only, no submitted SO), new SO = RM 100k, limit = RM 500k.
- **Expected:** No breach (200+0+100 = 300 < 500). Chatbot proceeds to submit without warning.
- **Fail:** Chatbot fires breach warning because it incorrectly added L3 (200+400+100 = 700).

---

### TC-CE-CB-10 · State 6 · High
**De Minimis: Condensed Copy for Small SO on Over-Limit Customer**

- **Setup:** State 6 (already over limit). New SO = RM 400 (below de minimis default RM 500).
- **Expected:** Short copy only: *"[Customer] is over their credit limit. This order will be submitted for Finance approval as usual. Submit? [Yes] [Cancel]"*
- **Fail:** Full breakdown shown (Current exposure / This order / Total after) for de minimis amount.

---

### TC-CE-CB-11 · State 3 · High
**Overdue Callout in SO Pre-Submit Confirmation**

- **Setup:** State 3 (L0 = RM 80k, within limit). SO built, ready to submit.
- **Expected:** Pre-submit message includes overdue amount and total outstanding after submission: *"One thing to note: [Customer] has RM 80k in overdue invoices. Submitting will bring total outstanding to RM[X] (Y% of limit). Submit now? [Yes, submit] [Save as draft]"*

---

### TC-CE-CB-12 · Any · High
**Direct Credit Query Returns Full 4-Layer Summary**

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
**No Credit Limit: Advisory-Only Chatbot Copy**

- **Setup:** credit_limit = 0. Creating SO via chatbot.
- **Expected:** SO submits without credit block. If user queries credit: *"No credit limit configured for this customer."* Shows layer amounts as context only, no enforcement language.

---

### TC-CE-CB-14 · State 5 · High
**At-Limit: Any New SO Routed to Approval**

- **Setup:** L1 = RM 500k = limit exactly. Creating SO for any value.
- **Expected:** Breach fires immediately (500+0+any > 500). Chatbot breach warning shown. On submit: *"This order has been submitted and is awaiting credit approval."*

---

### TC-CE-CB-15 · State 8 · High
**Overdue-Only Customer: Overdue Block on New SO**

- **Setup:** L0 = RM 95k (all overdue), L1_current = 0, limit = RM 400k.
- **Expected:** Chatbot surfaces overdue callout before submit. On submit with `block_on_overdue = true`: SO routes to credit approval. Chatbot confirms: *"This order has been submitted and is awaiting credit approval. The credit controller has been notified."*

---

## See Also

- [[01 - MAIA Product/Product Specs/MAIA Credit Exposure]] — full spec (Part D chatbot, Part J ACs, Part K backend)
