---
owner: Gareth
status: draft
doctype: Payment Voucher
last_reviewed: 2026-04-15
---

# Payment Voucher — Product Spec

> **Status:** Stub — `[TO FILL]` sections need Gareth's product knowledge

---

## 1. Overview

| Attribute | Detail |
|---|---|
| What it is | Document that processes a refund or credit payment back to the customer — created from an OPEN Credit Note |
| Primary user | Finance Team |
| Workspace | Sales (`/sales/vouchers`), Finance (`/finance/vouchers`) |
| URL | `/sales/vouchers` |
| Entry points | Create from Credit Note (OPEN status) only |
| Downstream creates | [TO FILL] |

---

## 2. Capability List

- [x] Create from Credit Note (OPEN)
- [x] Multiple vouchers per Credit Note (total ≤ CN amount)
- [x] Created in UNSAVED CHANGES status
- [ ] [TO FILL] — Status flow after UNSAVED CHANGES (Save → what status?)
- [ ] [TO FILL] — Payment methods for refund (bank transfer, cheque, cash?)
- [ ] [TO FILL] — Voucher numbering format
- [ ] [TO FILL] — PDF / voucher document
- [ ] [TO FILL] — Approval workflow for refunds
- [ ] [TO FILL] — Bank account / payment details fields

---

## 3. Feature Specs

### F-01: Create Payment Voucher from Credit Note
| Attribute | Detail |
|---|---|
| Description | Issue a refund to customer by creating a voucher from an OPEN Credit Note |
| Business Rule | Total voucher amounts cannot exceed CN amount; CN remains OPEN after voucher creation |
| Field Behaviour | Starts as UNSAVED CHANGES; must be saved to proceed |
| Edge Cases | Multiple vouchers allowed — partial refund in installments |
| Client Examples | [TO FILL] |

**Subfeatures:**
- Voucher created in UNSAVED CHANGES (not yet committed)
- CN remains OPEN after voucher creation
- `[TO FILL]` — Fields on voucher form (amount, payment method, date, reference)
- `[TO FILL]` — Status flow: UNSAVED CHANGES → ? → ? → final state
- `[TO FILL]` — What triggers CN to close/complete?

---

## 4. User Stories

### US-01: Process Customer Refund
**As a** finance team member, **I can** create a Payment Voucher from an OPEN Credit Note **so that** I can issue a formal refund to the customer.
**Priority:** High
**Dependencies:** Credit Note in OPEN status

---

## 5. Acceptance Criteria

### AC-01: [TO FILL]

---

## 6. Known Limitations

- [ ] [TO FILL]

---

## 7. See Also

- [[Vouchers]] (Payments folder)
- [[Credit Note Spec]]
- [[Credit Note Workflow Guide]]
