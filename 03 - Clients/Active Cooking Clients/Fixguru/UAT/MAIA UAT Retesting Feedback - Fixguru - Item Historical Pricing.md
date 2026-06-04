---
owner: Gareth
status: draft
last_reviewed: 2026-06-04
client: Fixguru
uat_round: retest
feature: Item Historical Pricing (Chatbot)
---

# UAT Retesting Feedback — Fixguru — Item Historical Pricing (Chatbot)

**Date:** 2026-06-04
**Feature Under Test:** Item Historical Pricing — Chatbot (Discount % & Markup %)
**Tester:** Gareth
**Scope:** Chatbot historical pricing display, QTN amendment via chatbot, customer pricing enforcement

---

## Test Scenarios Covered

### 1. Discount Price Display

| Field | Value |
|---|---|
| Unit Price | RM 3.00 |
| Discount | RM 0.05 (4%) |

- [ ] Chatbot correctly surfaces discount % from historical pricing record
- [ ] Discount amount and percentage displayed accurately

### 2. Markup Price Display

| Field | Value |
|---|---|
| Unit Price | RM 3.00 |
| Markup | RM 0.05 (4%) |

- [ ] Chatbot correctly surfaces markup % from historical pricing record
- [ ] Markup amount and percentage displayed accurately

### 3. Volume Test — 10 Transactions

- Tested across 10 historical transactions
- **Gap identified:** Image/graph rendering enhancement needed — chatbot should render historical pricing trend visually, not just as text

---

## QTN Amendment via Chatbot

### Scenario: SO from QTN

- Tested creating SO from an existing QTN via chatbot

### Issue: Missing QTN Amendment API

- **Problem:** QTN amendment via chatbot is not supported — API for amending a submitted QTN does not exist (unlike SO which has amendment support)
- **Impact:** Users cannot amend a submitted quotation through the chatbot
- **Workaround:** None currently available via chatbot
- **Classification:** Upcoming dev feature — relates to QTN → SO workflow; flag to dev team as next feature request
- **Action:** Raise as feature gap; not a blocker for current UAT round

---

## Customer Pricing Enforcement — Chatbot

### Test Case

| Field | Value |
|---|---|
| Customer Code | CUST000478 |
| Customer | TPS Fashion |
| Item | FROZEN-001 |
| UOM | Nos |
| Customer Spec Price | RM 8.75 per Nos |
| Base Price | RM 10.50 per Nos |
| Discount | 30% |

### Issues Found

#### Issue 1 — Open-Ended Query Instead of Price Enforcement

- **Observed:** Chatbot asked "Want me to create QT or SO?" without first confirming or enforcing the customer-specific pricing (RM 8.75 / 30% discount)
- **Expected:** Chatbot should surface the customer pricing spec from the customer/item profile and confirm the enforced price before asking to proceed to document creation
- **Root Cause to Investigate:** Why is the chatbot presenting an open-ended query for customer pricing instead of pulling from the customer pricing or item profile record?
- **Severity:** High — customer pricing enforcement is a core compliance feature

#### Issue 2 — Last Record Behaviour

- **Observed:** Chatbot referenced or surfaced a "last record" which is incorrect / unexpected behaviour
- **Expected:** Should pull from the customer pricing spec, not the last transaction record
- **Action:** Investigate why "last record" logic is being triggered for customer pricing lookups — should be overridden by customer pricing profile when one exists

---

## Summary of Actions

| # | Action | Owner | Priority |
|---|---|---|---|
| 1 | Fix chatbot to enforce customer pricing from customer/item profile before document creation prompt | Dev | High |
| 2 | Investigate "last record" logic — should not override customer pricing spec | Dev | High |
| 3 | Add graph/image rendering for historical pricing trend in chatbot | Dev | Medium |
| 4 | Raise QTN amendment API as upcoming feature for dev roadmap | PM | Low |

---

## See Also

- [[UAT/MAIA UAT Form - Fixguru - 2026-05 (Full)]]
- [[UAT/MAIA UAT Form - Fixguru - Phase 2 - Draft]]
- [[01 - MAIA Product/Product Specs/Quotation Spec]]
- [[context/learnings]]
