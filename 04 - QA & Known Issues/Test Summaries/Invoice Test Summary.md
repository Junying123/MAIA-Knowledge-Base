---
owner: Gareth
status: approved
last_reviewed: 2026-02-21
---

# Invoice Test Cases Summary

## What We Tested (100+ Test Cases)

- Generate invoice from Sales Order or create directly (standalone)
- Auto-populate all data from SO (biller, customer, items, tax, payment terms)
- Item management (edit quantities, remove items, cannot add new items to SO invoice)
- Field validation (date, currency, biller info, customer info all required)
- Tax calculations (tax on items vs tax on total, auto-recalculate)
- Summary calculations (subtotal, charges, discount, grand total)
- Payment terms (split terms must total 100%, due dates auto-calculate)
- PDF generation and document download

---

## See Also

- [[Invoice Workflow Guide]]
- [[Credit Note Test Summary]]
- [[Receipt Test Summary]]
- [[Debit Note Test Summary]]
- [[Untested Areas Rationale]]
