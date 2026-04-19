---
owner: Gareth
status: draft
doctype: Payment Voucher
last_reviewed: 2026-04-19
---

# Payment Voucher — Product Spec

---

## 1. Overview

| Attribute | Detail |
|---|---|
| What it is | Document that processes a payment to or from a party — created from a Credit Note (refund) or standalone; mirrors Receipt structure |
| Primary user | Finance Team |
| Workspace | Sales (`/sales/vouchers`), Finance (`/finance/vouchers`) |
| URL | `/sales/vouchers` |
| Entry points | 1. Create from Credit Note (OPEN status) 2. Create New (standalone — confirmed via "Create Voucher" button on list) |
| Downstream creates | None confirmed |

---

## 2. Capability List

- [x] Create from Credit Note (OPEN)
- [x] Create standalone (manual)
- [x] Multiple vouchers per Credit Note (total ≤ CN amount)
- [x] Payment Method field (required)
- [x] Transaction ID and Transaction Date fields
- [x] Paid Amount field (auto-filled from CN reference; disabled)
- [x] Payment References section (invoice/CN allocation)
- [x] Proof of Payment attachment
- [x] Remarks field (auto-generated if left blank)
- [x] Status flow: Draft → Submitted → Completed → Cancelled
- [x] List columns: Voucher ID, Party, Status, Amount, Created at, Updated at
- [ ] [TO FILL] — Available payment methods (bank transfer, cash, cheque, FPX?)
- [ ] [TO FILL] — What triggers Draft → Submitted transition
- [ ] [TO FILL] — What triggers Submitted → Completed
- [ ] [TO FILL] — What happens to CN when total vouchers = CN amount (CN auto-closes?)
- [ ] [TO FILL] — Approval workflow for refunds
- [ ] [TO FILL] — Voucher numbering format
- [ ] [TO FILL] — "Party" column — can vouchers be issued to non-customers (vendors)?

---

## 3. Feature Specs

---

### F-01: Create Payment Voucher

| Attribute | Detail |
|---|---|
| Description | Issue payment (refund or otherwise) by creating a Voucher — from Credit Note or standalone |
| Business Rule | Total vouchers from one CN cannot exceed CN Grand Total; CN remains OPEN after voucher creation |
| Field Behaviour | Paid Amount is disabled (auto-filled from CN or payment reference); Party = customer name |
| Edge Cases | Multiple vouchers per CN for installment refunds |
| Client Examples | [TO FILL] |

**Form fields (confirmed from UI):**
- Receipt Date (required)
- Customer Name (required — "Party" on list view)
- Due Date (optional)
- Payment Method (required) — `[TO FILL]` — dropdown options
- Transaction ID (optional free text)
- Transaction Date (optional)
- Paid Amount (disabled — auto-filled from reference; `[TO FILL]` — how it populates standalone?)
- **Payment References** section — links to CN / invoice
- Remarks (auto-generated if left blank — system generates based on reference)
- **Proof of Payment** section — file attachment

---

### F-02: Status Management

| Attribute | Detail |
|---|---|
| Description | Voucher moves Draft → Submitted → Completed; Cancelled as terminal |
| Business Rule | `[TO FILL]` — Completed = payment physically made/confirmed? |
| Field Behaviour | `[TO FILL]` — which fields lock at each status |
| Edge Cases | `[TO FILL]` — cancel from Submitted vs Completed |
| Client Examples | All clients |

**Status flow:**
```
Create (from CN / standalone) → DRAFT → [Submit] → SUBMITTED → [Confirm payment] → COMPLETED
                                  ↓                     ↓
                               Delete               CANCELLED (terminal)
```

**Subfeatures:**
- DRAFT: editable; `[TO FILL]` — actions
- SUBMITTED: payment instruction sent; `[TO FILL]` — can edit?
- COMPLETED: payment confirmed; `[TO FILL]` — triggers CN balance update?
- CANCELLED: terminal; `[TO FILL]` — reverses CN allocation?

---

### F-03: Multiple Vouchers per Credit Note

| Attribute | Detail |
|---|---|
| Description | Finance can split a refund into multiple vouchers (installments) from one CN |
| Business Rule | Total voucher amounts ≤ CN Grand Total; CN stays OPEN throughout |
| Field Behaviour | CN remains OPEN after each voucher; `[TO FILL]` — what closes CN? |
| Edge Cases | `[TO FILL]` — what happens if total exceeds CN amount? |
| Client Examples | [TO FILL] |

**Subfeatures:**
- Example: CN RM1,000 → Voucher 1 RM600 + Voucher 2 RM400 → total = RM1,000
- CN status stays OPEN after each voucher creation
- `[TO FILL]` — Does CN auto-close when all amount is vouchered out?

---

## 4. User Stories

### US-01: Process Customer Refund
**As a** finance team member, **I can** create a Payment Voucher from an OPEN Credit Note **so that** I can issue a formal refund to the customer and track the payment.
**Priority:** High
**Dependencies:** Credit Note in OPEN status

### US-02: Installment Refund
**As a** finance team member, **I can** create multiple Vouchers from one Credit Note **so that** I can process the refund in installments matching the agreed schedule.
**Priority:** Medium
**Dependencies:** Credit Note in OPEN status; Voucher 1 already created

---

## 5. Acceptance Criteria

### AC-01 (US-01: Voucher from CN)
- **Given** a Credit Note in OPEN status with Grand Total RM1,000
- **When** I create a Payment Voucher for RM1,000 and complete it
- **Then** the voucher moves to COMPLETED; the CN `[TO FILL — closes or stays OPEN?]`

### AC-02 (US-02: Multiple vouchers)
- **Given** a CN in OPEN status with Grand Total RM1,000
- **When** I create Voucher 1 for RM600 and Voucher 2 for RM400
- **Then** both vouchers are created; CN remains OPEN; total allocated = RM1,000

---

## 6. Known Limitations

- [ ] Voucher status transition triggers not confirmed — needs further testing
- [ ] What closes a Credit Note (when total vouchered = CN amount) is unknown
- [ ] `[TO FILL]` — Whether vouchers can exceed CN amount (system validation?)
- [ ] `[TO FILL]` — Other limitations

---

## 7. See Also

- [[Credit Note Spec]]
- [[Receipt Spec]]
- [[Invoice Spec]]
- [[Quote-to-Cash Flow]]
