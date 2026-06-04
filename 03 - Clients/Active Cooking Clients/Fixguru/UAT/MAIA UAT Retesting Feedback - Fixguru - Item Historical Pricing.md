---
owner: Gareth
status: draft
last_reviewed: 2026-06-04
client: Fixguru
uat_round: retest
feature: Item Historical Pricing (Chatbot + FE + BE)
---

# UAT Retesting Feedback — Fixguru — Item Historical Pricing

**Date:** 2026-06-04
**Feature Under Test:** Item Historical Pricing — Chatbot, FE & BE (Discount % & Markup %)
**Tester:** Gareth
**Scope:** Chatbot historical pricing display, QTN amendment (chatbot + FE + BE), customer pricing enforcement and query directions

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

## QTN Amendment — Full Stack Gap (Chatbot + FE + BE)

### Scenario: SO from QTN

- Tested creating SO from an existing QTN via chatbot

### Issue: Missing QTN Amendment — Affects All Layers

- **Problem:** QTN amendment is not supported at any layer — no API, no FE UI, no chatbot flow — unlike SO which has full amendment support across all surfaces
- **Impact:**
  - **Chatbot:** Users cannot amend a submitted quotation through the chatbot
  - **FE (Web App):** No amendment action available on a submitted QTN in the web interface
  - **BE (API):** No amendment endpoint exists for QTN (parity gap vs SO amendment API)
- **Workaround:** None — users must cancel and recreate the QTN
- **Classification:** Upcoming feature — spans BE API, FE action, and chatbot flow; flag to dev as a unified feature request, not three separate tickets
- **Action:** Raise as cross-layer feature gap; not a blocker for current UAT round but needed before go-live for sales workflow parity

---

## Customer Pricing Enforcement & Query Capabilities

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

## Customer Pricing Query Requirements

Currently the system supports querying a specific item's customer price for a known customer. Two additional query directions are needed:

### Query Direction 1 — All Items With Customer Pricing for a Given Customer

- **Use case:** "What special prices does TPS Fashion have?" → return all items where CUST000478 has a customer-specific price
- **Direction:** Customer → Items (one customer, many items)
- **Required in:** Chatbot, FE (customer profile view), BE (API endpoint: GET /customer-pricing?customer=CUST000478)

### Query Direction 2 — All Customers With Customer Pricing for a Given Item

- **Use case:** "Which customers have a special price for FROZEN-001?" → return all customers who have a customer-specific price set for that item
- **Direction:** Item → Customers (one item, many customers)
- **Required in:** Chatbot, FE (item profile view), BE (API endpoint: GET /customer-pricing?item=FROZEN-001)

### Query Matrix Summary

| Query | Input | Output | Status |
|---|---|---|---|
| Item price for a specific customer | Customer + Item | Price / discount | ✅ Exists |
| All items with pricing for a customer | Customer | List of items + prices | ❌ Missing |
| All customers with pricing for an item | Item | List of customers + prices | ❌ Missing |

Both missing query directions require BE API support + FE surface + chatbot intent handling.

---

## Summary of Actions

| # | Action | Owner | Priority |
|---|---|---|---|
| 1 | Fix chatbot to enforce customer pricing from customer/item profile before document creation prompt | Dev | High |
| 2 | Investigate "last record" logic — should not override customer pricing spec | Dev | High |
| 3 | Build BE API + FE + chatbot: query all items with customer pricing for a given customer | Dev | High |
| 4 | Build BE API + FE + chatbot: query all customers with customer pricing for a given item | Dev | High |
| 5 | Add graph/image rendering for historical pricing trend in chatbot | Dev | Medium |
| 6 | Raise QTN amendment (BE API + FE + chatbot) as unified cross-layer feature for dev roadmap | PM | Medium |

---

## See Also

- [[UAT/MAIA UAT Form - Fixguru - 2026-05 (Full)]]
- [[UAT/MAIA UAT Form - Fixguru - Phase 2 - Draft]]
- [[01 - MAIA Product/Product Specs/Quotation Spec]]
- [[context/learnings]]
