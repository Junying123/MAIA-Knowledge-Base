---
owner: Gareth
status: approved
last_reviewed: 2026-02-21
---

# Create Sales Order Form — Exploration

**Form URL:** `/sales/orders/new`
**Navigation:** Sales Orders page → "Create Sales Order" button

---

## Form Sections

| # | Section | Key Fields |
|---|---------|-----------|
| 1 | Details | Date, Delivery Date*, Order Type, Currency, Incoterm |
| 2 | Biller Information | Company, Contact Person, Address, Fulfillment Method, Tax Type |
| 3 | Customer Information | Customer, Contact Person, Billing Address, Shipping Address, PO Number |
| 4 | Items | SKU, Name, UoM, Qty, Unit Price, Notes, Amount |
| 5 | Remarks | Remarks (optional text) |
| 6 | Terms and Conditions | T&C (optional text) |
| 7 | Summary | Subtotal, Charges, Discount, Grand Total |
| 8 | Payment Terms | Payment Term, Due Date, Portion %, Payment Amount |

---

## Key Differences from Quotations Form

| Field | Quotation | Sales Order |
|-------|-----------|-------------|
| Date field 2 | Valid Until | **Delivery Date** (required, no default) |
| Customer extra field | — | **PO Number** (optional) |
| Breadcrumb | Sales → Quotations → NEW | Sales → Sales Orders → NEW |

---

## Field Dependencies

```
Company (Biller) →
  ├── Contact Person (Biller) — auto-populated
  ├── Address (Biller) — auto-populated
  ├── Fulfillment Method — enabled
  ├── Tax Type — enabled
  └── Customer — enabled
        ├── Contact Person (Customer) — auto-populated
        ├── Billing Address — auto-populated
        └── Shipping Address — auto-populated

PO Number (always enabled, optional) →
  ├── PO Date — revealed when PO Number filled
  └── PO Attachment — revealed when PO Number filled
```

---

## Default Values

| Field | Default |
|-------|---------|
| Date | Current date |
| Delivery Date | Empty (required!) |
| Order Type | Sales |
| Currency | MYR |
| Payment Term | CIA, 100%, due today |

---

## Validation Errors

**Delivery Date:** "Delivery date is required" — only field in Details with no default
**Company:** "Biller company is required"
**Contact Person:** "Biller contact person is required"
**Address:** "Biller address is required"
**Fulfillment Method:** "Fulfillment method is required"
**Tax Type:** "Tax type is required"

---

## Test Status

- ✅ Navigation to form
- ✅ Form loads with defaults
- ✅ Field dependencies enforced
- ✅ Date pickers functional
- ✅ Delivery Date validation ("Delivery date is required")
- ✅ Unsaved changes indicator

---

## See Also

- [[Create Sales Order UI Testing]]
- [[SO Biller Information Section]]
- [[SO Customer Information Section]]
- [[Create Quotation Exploration]]
