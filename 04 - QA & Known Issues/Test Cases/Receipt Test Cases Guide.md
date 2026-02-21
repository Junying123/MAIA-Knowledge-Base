---
owner: Gareth
status: approved
last_reviewed: 2026-02-21
---

# Receipt Test Cases Guide

**Total Test Cases:** 30
**CSV File:** `receipt_test_cases.csv`

---

## Test Case Categories

| Category | IDs | Count |
|----------|-----|-------|
| Basic Payment | TC-RCPT-001 to 003 | 3 |
| Multiple Invoice Allocations | TC-RCPT-004 to 006 | 3 |
| Payment Amount Variations | TC-RCPT-007 to 009 | 3 |
| Allocation Methods | TC-RCPT-010 to 012 | 3 |
| Edge Cases | TC-RCPT-013 to 018 | 6 |
| Special Scenarios | TC-RCPT-019 to 023 | 5 |
| Advanced Scenarios | TC-RCPT-024 to 030 | 7 |

---

## Allocation Methods

| Method | Description | Test Cases |
|--------|-------------|-----------|
| Full allocation — single invoice | Entire paid amount to one invoice | TC-RCPT-001 |
| Partial allocation | Portion of paid amount to invoice | TC-RCPT-002 |
| Advance payment | No allocation (create first, allocate later) | TC-RCPT-003 |
| Equal distribution | Split equally across multiple invoices | TC-RCPT-004, 010 |
| Proportional distribution | Split by invoice amount ratio | TC-RCPT-011 |
| Manual allocation | User enters allocation amounts | TC-RCPT-005, 012 |
| FIFO auto-allocation | Oldest invoices allocated first | TC-RCPT-026 |
| Distribute button | Click to auto-allocate evenly | TC-RCPT-010, 011 |

---

## Edge Cases Covered

| Case | Expected Behavior | Test Cases |
|------|-------------------|-----------|
| Overpayment | Invoice PAID; overpayment becomes credit | TC-RCPT-007, 014 |
| Underpayment | Invoice PARTLY PAID; balance remains | TC-RCPT-008, 013 |
| Invalid over-allocation | Validation error; cannot submit | TC-RCPT-017, 030 |
| Under-allocation | Unallocated remainder allowed | TC-RCPT-018 |
| Zero allocation | Advance payment; allocate later | TC-RCPT-015 |
| Duplicate payment | Warning or prevention | TC-RCPT-022 |
| Cancelled invoice | Blocked creation | TC-RCPT-023 |
| Multi-currency | FX conversion; gain/loss recorded | TC-RCPT-025 |
| Large amounts | System handles correctly | TC-RCPT-028 |
| Decimal precision | Rounding maintained | TC-RCPT-029 |

---

## Expected Status Flows

### Receipt Status

| Status | Available Actions | Editable |
|--------|------------------|---------|
| DRAFT | Delete, Edit, Submit, Print PDF (draft) | All fields |
| IN PROGRESS | Generate PDF, Cancel, Complete | Limited |
| COMPLETED | Generate PDF, Cancel (if allowed) | None |
| CLOSED | Generate PDF | None |
| CANCELLED | None | None |

### Invoice Status After Receipt

| Payment Scenario | Before | After |
|-----------------|--------|-------|
| Full payment | UNPAID | PAID |
| Partial payment | UNPAID | PARTLY PAID |
| Complete partial | PARTLY PAID | PAID |
| Overpayment | UNPAID | PAID (with credit) |

---

## Validation Rules

1. Sum of all allocations ≤ Paid amount
2. Each allocation ≤ Invoice amount (unless overpayment)
3. All allocations ≥ 0
4. Decimal precision maintained (2 decimal places)
5. Currency must match (or be converted)

---

## Priority Matrix

**High:** TC-RCPT-001, 002, 004, 010, 017, 022, 023

**Medium:** TC-RCPT-003, 005, 007, 008, 012, 021

**Low:** TC-RCPT-013, 025, 026, 028, 029

---

## Test Result Format

```
Test Case: TC-RCPT-001 - Full Payment Single Invoice
Status: ✅ PASS / ❌ FAIL
Actual Results:
- Allocation total: 1000.00 ✅
- Unallocated: 0.00 ✅
- Receipt status: DRAFT → IN PROGRESS → COMPLETED ✅
- Invoice status: UNPAID → PAID ✅
Notes: [observations]
```

---

## See Also

- [[Receipt Test Summary]]
- [[Invoice Test Summary]]
- [[Debit Note TC-DN-001 Testing Guide]]
