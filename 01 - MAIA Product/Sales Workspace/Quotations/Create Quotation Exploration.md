---
owner: Gareth
status: approved
last_reviewed: 2026-02-21
---

# Create Quotation Form — Exploration Log

**Form URL:** `/sales/quotations/new`
**Navigation:** Quotations list → "Create Quotation" button

---

## Form Sections Overview

The Create Quotation form has 8 sections:

1. Details Section
2. Biller Information Section
3. Customer Information Section
4. Items Section
5. Remarks Section
6. Terms and Conditions Section
7. Summary Section
8. Payment Terms Section

---

## Section 1: Details

| Field | Type | Required | Default |
|-------|------|----------|---------|
| Date | Date picker | Yes | Current date |
| Valid Until | Date picker | Yes | Tomorrow |
| Order Type | Dropdown | Yes | "Sales" |
| Currency | Dropdown | Yes | "MYR" |
| Incoterm | Dropdown | No | Empty |

---

## Section 2: Biller Information

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| Company | Dropdown | Yes | Must be selected first |
| Contact Person | Combobox | Yes | Enabled after company selected |
| Address | Combobox | Yes | Enabled after company selected |
| Fulfillment Method | Textbox | Yes | Enabled after company selected |
| Tax Type | Textbox | Yes | Enabled after company selected |

---

## Section 3: Customer Information

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| Customer | Textbox | Yes | Enabled after company selected |
| Contact Person | Combobox | Yes | Enabled after customer selected |
| Billing Address | Combobox | Yes | Enabled after customer selected |
| Shipping Address | Combobox | Yes | Enabled after customer selected |

---

## Section 4: Items

**Columns:** No., SKU, Name, UoM, Quantity, Unit Price, Additional Notes, Amount

- Starts with one empty row (Qty: 0, Price: RM 0.00)
- "Add Item" button available to add more rows
- SKU/Name/UoM fields open selection dialogs

---

## Section 5 & 6: Remarks / Terms and Conditions

Both are optional multiline text fields.

---

## Section 7: Summary

| Field | Notes |
|-------|-------|
| Subtotal | Auto-calculated from items |
| Charges | Options: Delivery, Handling, Service, Packaging, Insurance |
| Discount | Editable RM field |
| Grand Total | Subtotal + Charges − Discount |

---

## Section 8: Payment Terms

**Default:** CIA (Cash in Advance) at 100% portion, due current date

**Columns:** No., Payment Term, Due Date, Description, Portion (%), Payment Amount

- "Add Payment Term" button to add rows
- Each row has a clear (×) button

---

## Field Dependencies

```
Company (Biller) selected →
  ├── Contact Person (Biller) enabled
  ├── Address (Biller) enabled
  ├── Fulfillment Method enabled
  ├── Tax Type enabled
  └── Customer (Customer Info) enabled
        ├── Contact Person (Customer) enabled
        ├── Billing Address enabled
        └── Shipping Address enabled
```

---

## Default Values

- Date: Current date
- Valid Until: Tomorrow
- Order Type: "Sales"
- Currency: "MYR"
- Payment Term: CIA (Cash in Advance), 100%, due today

---

## Key Findings

- All disabled fields show `"Select company first..."` as placeholder until dependency is met
- Item Amount = Quantity × Unit Price (auto-calculated)
- Payment Amount = Grand Total × Portion % (auto-calculated)
- Form uses tabbed interface ("Details" tab visible)
- Breadcrumb shows: Sales → Quotations → NEW

---

## See Also

- [[Sidebar Navigation URLs]]
- [[Create Quotation UI Testing]]
- [[Biller Information Section]]
- [[Customer Information Section]]
- [[Sales Order Workflow Guide]]
