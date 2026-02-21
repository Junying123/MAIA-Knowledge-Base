---
owner: Gareth
status: approved
last_reviewed: 2026-02-21
---

# Credit Note Test Cases Summary

## What We Tested (80+ Test Cases)

- Credit note creation linked to invoice
- Item selection from invoice (full or partial)
- Quantity modification per item (quantities locked after creation)
- Charges deduction (delivery, handling, service, packaging, insurance)
- Discount addition (increases credit amount)
- Summary auto-calculation (subtotal - charges + discount = grand total)
- Payment terms (portions must total 100%, due dates)
- Currency must match invoice
- Invoice status updates when credit note applied
- Field validation (date, currency, biller, customer all required)
- At least one item required
- Auto-population from linked invoice (customer info, addresses, tax settings)

---

## See Also

- [[Credit Note Workflow Guide]]
- [[Invoice Test Summary]]
- [[Debit Note Test Summary]]
- [[Receipt Test Summary]]
- [[Untested Areas Rationale]]
