---
owner: Gareth
status: draft
last_reviewed: 2026-06-04
client: Fixguru
uat_round: retest
feature: Item Historical Pricing (Chatbot)
---

# UAT Retesting Feedback — Fixguru — Item Historical Pricing (Chatbot)

**Date:** 2026-06-04 | **Tester:** Gareth

---

## 1. Historical Pricing Display

### Discount
```
Unit Price: RM 3.00
Discount: RM 0.05 (4%)
```
- [ ] Discount % surfaced correctly
- [ ] Amount and % accurate

### Markup
```
Unit Price: RM 3.00
Markup: RM 0.05 (4%)
```
- [ ] Markup % surfaced correctly
- [ ] Amount and % accurate

### Volume Test — 10 Transactions
- [ ] Tested across 10 historical records
- **Gap:** Chatbot should render pricing trend as graph/image, not text only

---

## 2. QTN Amendment

**Scope:** Chatbot + FE + BE
**Fields:** Item (add/remove/change), Unit Price

**Issue — No QTN Amendment API**
- QTN amendment API does not exist (SO has it, QTN does not)
- Impact: cannot amend submitted QTN via any channel
- Action: raise as upcoming feature; not a UAT blocker

---

## 3. Customer Pricing Enforcement (Chatbot)

### Query Scenarios Required

| # | Query | Example |
|---|---|---|
| 1 | Specific item price for customer | "Price for FROZEN-001 for JPS Fashions?" |
| 2 | All items with customer pricing for a customer | "What items have customer pricing for JPS Fashions?" |
| 3 | All customer-item pricing records | "Which items have customer-specific pricing?" |

### Test Data

| Field | Value |
|---|---|
| Customer | JPS FASHIONS (CUST-000478) |
| Item | FROZEN-001 (Nos) |
| Customer Price | RM 8.75 (30% discount) |
| Std Price | RM 12.50 |

### Expected Chatbot Output
```
Customer: JPS FASHIONS (MALAYSIA) SDN BHD
Item: FROZEN-001 (Nos)
Price: RM 8.75 (30% discount from std price)
Want me to create a QTN or SO?
```

### Issues

**Issue 1 — Inconsistent retrieval, retry required**
- First fetch for ORGANIC-YOGURT-500G returned 0 results; correct price (RM 2.37) only returned after retry
- Root cause: BE endpoint only supports specific item + customer lookup; broader call returns validation error
- Action: fix first-call reliability for specific item pricing

**Issue 2 — Last transaction record appears in customer pricing response**
- FROZEN-001 response included "Last recorded transaction: QT-2026-01397" — not expected
- Root cause: chatbot mixing customer pricing lookup with historical pricing lookup
- Action: decouple; suppress last transaction from customer pricing output

**Issue 3 — Open-ended query instead of proactive lookup**
- "Can u check JPS Fashions customer pricing" → chatbot asked clarifying questions instead of returning what exists
- Root cause: no BE endpoint for listing all customer-priced items per customer; chatbot falls back to asking user
- Action: build BE endpoint (links to Issue 4); update chatbot to query proactively

**Issue 4 — Full catalogue scan not supported (BE gap)**
- Scenarios 2 & 3 consistently return validation error and 0 results
- Root cause: BE endpoints for Scenarios 2 & 3 not built
- Action: raise as feature request — build BE endpoints for (a) all items with customer pricing per customer, (b) all customer-item pricing records

**Issue 5 — Cannot create customer pricing via chatbot**
- Chatbot: "I can't set a permanent customer-specific price directly — the system tool to set customer price isn't available to me."
- Action: expose customer pricing creation tool to chatbot or define FE/BE enforcement flow

---

## 4. FE Issues — Customer Price Enforcement

**FE Issue 1 — Lock violation shown on submit, not at field level**
- Lock icon shown on unit price with tooltip "Unit price is locked", but field still editable
- Error only on submit: *"Locked customer price violation(s): FROZEN-001 locked rate RM 8.75, got RM 12.50"* (QT-2026-01463)
- **Decision needed:** Block at field (read-only when locked) vs block at submit (current)?
  - Option A — block at field: cleaner, no ambiguity
  - Option B — block at submit (current): user wastes time before hitting error
- **Recommendation:** Block at field — lock icon already signals intent
- Action: decide and implement consistently across QTN and SO

---

## Summary of Actions

| # | Action | Owner | Priority |
|---|---|---|---|
| 1 | Fix first-call reliability for specific item customer pricing | Dev | High |
| 2 | Decouple customer pricing from historical pricing — suppress last transaction | Dev | Medium |
| 3 | Build BE endpoint: all customer-priced items per customer; update chatbot | Dev | Medium |
| 4 | Build BE endpoints for Scenarios 2 & 3 (catalogue scan) | Dev | Medium |
| 5 | Expose customer pricing creation tool to chatbot | Dev | High |
| 6 | Add graph/image rendering for historical pricing trend | Dev | Medium |
| 7 | Raise QTN amendment (Chatbot + FE + BE) as upcoming feature | PM | Low |
| 8 | Decide and implement price lock enforcement point (field vs submit) | Dev + PM | Medium |

---

## See Also

- [[UAT/MAIA UAT Form - Fixguru - 2026-05 (Full)]]
- [[UAT/MAIA UAT Form - Fixguru - Phase 2 - Draft]]
- [[01 - MAIA Product/Product Specs/Quotation Spec]]
- [[context/learnings]]
