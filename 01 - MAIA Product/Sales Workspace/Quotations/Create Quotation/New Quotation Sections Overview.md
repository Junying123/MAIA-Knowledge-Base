---
owner: Gareth
status: approved
last_reviewed: 2026-02-21
---

# New Quotation — Sections Overview

**Form:** `/sales/quotations/new`

---

## Form Sections

| # | Section | Key Fields |
|---|---------|-----------|
| 1 | Details | Date, Valid Until, Order Type, Currency, Incoterm |
| 2 | Biller Information | Company, Contact Person, Address, Fulfillment Method, Tax Type |
| 3 | Customer Information | Customer, Contact Person, Billing Address, Shipping Address |
| 4 | Items | SKU, Name, UoM, Qty, Unit Price, Notes, Amount |
| 5 | Summary | Subtotal, Charges, Discount, Grand Total |
| 6 | Payment Terms | Payment Term, Due Date, Portion %, Payment Amount |

---

## Section 1: Details

All fields have defaults — **no validation errors** triggered if left at default.

| Field | Type | Default | Options |
|-------|------|---------|---------|
| Date | Date picker | Today | MM/DD/YYYY |
| Valid Until | Date picker | Tomorrow | MM/DD/YYYY |
| Order Type | Dropdown | Sales | Sales, Maintenance, Shopping Cart |
| Currency | Dropdown | MYR (RM) | MYR only |
| Incoterm | Dropdown | — | 11 options (see below) |

### Incoterm Options (11)

CFR, CIF, CIP, CPT, DAP, DDP, DPU, EXW, FAS, FCA, FOB

---

## Validation Behavior

**Details section:** No required validation — all fields have defaults or are optional.

**Biller section** — required fields with errors:
- "Company is required"
- "Contact person is required"
- "Address is required"
- "Fulfillment method is required"
- "Tax type is required"

**Customer section** — required fields with errors:
- "Customer is required"
- "Customer contact person is required"
- "Customer billing address is required"
- "Shipping address is required"

---

## Field Dependencies (Full Chain)

```
Company selected (Biller) →
  ├── Contact Person (Biller) — auto-populated
  ├── Address (Biller) — auto-populated
  ├── Fulfillment Method — enabled
  ├── Tax Type — enabled
  └── Customer — enabled
        ├── Contact Person (Customer) — enabled
        ├── Billing Address — enabled
        └── Shipping Address — enabled
```

---

## See Also

- [[Biller Information Section]]
- [[Customer Information Section]]
- [[Items Section]]
- [[Summary Section]]
- [[Payment Term Section]]
- [[Create Quotation Exploration]]
