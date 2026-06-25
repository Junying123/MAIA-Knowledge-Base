---
owner: Gareth
status: draft
last_reviewed: 2026-06-25
uat_round: 3
purpose: Debrief prep (26 Jun 2026) — acceptance criteria and expected user outcomes for P0 fixes
---

# Fixguru Round 3 — UAT Acceptance Criteria & Expected User Outcomes

For review at **26 Jun 2026 debrief**. Covers only P0 fixes from the [[UAT/3rd backward final UAT action plan for Fixguru]].

Each scenario is written from the **sales user's perspective** (Yvonne / Azib / frontline staff). Pass = user can complete the scenario without opening AutoCount or asking someone for the price.

---

## AC-01 — Historical Pricing Lookup

**Scenario:** Sales user receives a WhatsApp order from a returning customer for 3 items.

| Step | What user does | Expected outcome |
|---|---|---|
| 1 | Pastes customer order into WhatsApp bot | Bot identifies customer by phone number and confirms customer name + branch |
| 2 | Bot retrieves pricing history | For each item, bot shows a table: Date, Qty, Std Unit Price, Discount %, Net Price, Source Invoice ID. Minimum 5 rows per item. |
| 3 | User reads the table | User can see price trend at a glance — no need to scroll through long paragraphs |
| 4 | User selects discount per item | Bot asks: "Use 3% / 5% / 10% discount or enter custom net price?" — one question per item or batched |
| 5 | User confirms | Bot generates QTN/SO with selected prices and shows PDF preview |

**Pass criteria:**
- [ ] Min 5 invoice-sourced rows per item (not draft orders)
- [ ] Table visible in single message — no long text wall
- [ ] Bot does NOT auto-generate QTN/SO before user confirms price
- [ ] Date column present (user can judge if price is stale)

**Fail examples (from prior UAT):**
- Only 2–3 rows shown
- Pricing pulled from draft SOs instead of invoices
- Bot generates QTN before user picks discount

---

## AC-02 — Discount Calculation Accuracy

**Scenario:** User selects 5% discount for item G1 (std price RM 0.33).

| Step | What user does | Expected outcome |
|---|---|---|
| 1 | Selects 5% discount | Bot confirms: Net price = RM 0.3135 (0.33 × 0.95) |
| 2 | User checks figure | Matches what user would manually compute |

**Pass criteria:**
- [ ] 3% / 5% / 10% all compute correctly against current standard unit price
- [ ] Different items in same order can have different discount %
- [ ] Net price shown rounds to 4 decimal places (or client-agreed standard)

---

## AC-03 — Customer Identification by Phone

**Scenario:** Customer WhatsApps in with no company name — only a phone number.

| Step | What user does | Expected outcome |
|---|---|---|
| 1 | Customer message arrives (phone number visible) | Bot searches mobile AND landline fields |
| 2 | Match found | Bot returns: "Is this [Customer Name], [Branch]? Yes / No" |
| 3 | User confirms | Order proceeds under correct customer account |
| 4 | No match | Bot says "Customer not found" — does not silently create a new account |

**Pass criteria:**
- [ ] Phone search covers both mobile and landline fields
- [ ] Confirmation shown before proceeding (not silent auto-match)
- [ ] Branch/contact used on SO/DN is the matched branch, not HQ default

---

## AC-04 — Language Consistency

**Scenario:** Sales user conducts entire order conversation in English.

| Step | What user does | Expected outcome |
|---|---|---|
| 1 | User starts conversation in English | Bot responds in English |
| 2 | User taps quick reply buttons | Quick reply options remain in English |
| 3 | User completes order | No Malay text appears at any point |

**Pass criteria:**
- [ ] Zero mid-flow language switch to Malay in an English conversation
- [ ] Quick reply labels in English throughout

---

## AC-05 — Approval Block at DN Level (Not Order Level)

**Scenario:** Item priced below minimum floor. User is mid-order.

| Step | What user does | Expected outcome |
|---|---|---|
| 1 | User selects price below floor for one item | Bot flags: "Item X is below minimum price (RM 0.27). Approval needed to proceed to DN." |
| 2 | Quotation is still generated | QTN PDF can be shared with customer while waiting for approval |
| 3 | User submits DN | DN submission blocked — approval request sent to Ivan |
| 4 | Ivan approves | DN proceeds |

**Pass criteria:**
- [ ] Order creation NOT blocked — only DN/SO submission blocked
- [ ] QTN still generated and shareable pending approval
- [ ] Approver (Ivan) sees: AR, pending SO/DN value, credit limit, available balance
- [ ] Two separate flows: AR-negative (prepaid, approve on bank-in) vs credit-limit-exceeded (case-by-case)

---

## AC-06 — Delivery Method as Item Line

**Scenario:** User selects "Lalamove" as delivery method for this order.

| Step | What user does | Expected outcome |
|---|---|---|
| 1 | Bot asks delivery method after QTN confirmed | Bot shows last 5 delivery methods used for this customer (e.g. Courier, Lalamove, Self-pickup) |
| 2 | User picks Lalamove | Delivery charge appears as a line item on the SO/DN with correct item code |
| 3 | User reviews SO | Delivery item visible with proper accounting treatment |

**Pass criteria:**
- [ ] Historical delivery methods shown (last 5, with method + charge)
- [ ] Delivery charge is an item line, not a free-text field
- [ ] Correct item code maps to correct accounting treatment

---

## Overall Pass Gate for Round 3

All of the following must pass before Fixguru sign-off:

| Gate | Owner | Status |
|---|---|---|
| AC-01 Historical pricing (min 5 rows, invoice source) | Afiq / Wei Yon | - |
| AC-02 Discount calculation correct | Afiq | - |
| AC-03 Customer search by phone (mobile + landline) | Wei Yon | - |
| AC-04 No language switch mid-conversation | Afiq | - |
| AC-05 Approval block at DN, not order | Wei Yon | - |
| AC-06 Delivery method as item line | Wei Yon | - |

**Sign-off authority:** Gareth (pending confirmation — see Open Decision C6 in backward plan)

---

## See Also

- [[UAT/3rd backward final UAT action plan for Fixguru]] — full product + tech plan
- [[Meetings/2026-06-24 Fixguru UAT Debrief]] — session record
- [[context/learnings]] — running learnings log
