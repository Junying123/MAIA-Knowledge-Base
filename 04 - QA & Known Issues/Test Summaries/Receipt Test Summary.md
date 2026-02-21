---
owner: Gareth
status: approved
last_reviewed: 2026-02-21
---

# Receipt Test Cases Summary

## What We Tested (31 Test Cases)

- Payment allocation (full, partial, advance, multiple invoices)
- Overpayment and underpayment handling
- Manual allocation and FIFO auto-allocation
- Allocation validation (cannot exceed paid amount)
- Multiple receipts with different payment methods
- Status flow: DRAFT → IN PROGRESS → COMPLETED
- Invoice status updates: UNPAID → PARTLY PAID → PAID
- Edge cases: duplicate prevention, cancelled invoices, decimal precision

---

## See Also

- [[Receipt Workflow Guide]]
- [[Invoice Test Summary]]
- [[Credit Note Test Summary]]
- [[Debit Note Test Summary]]
- [[Untested Areas Rationale]]
