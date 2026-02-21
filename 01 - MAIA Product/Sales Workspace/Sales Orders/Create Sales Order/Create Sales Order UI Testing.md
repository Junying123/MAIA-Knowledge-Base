---
owner: Gareth
status: approved
last_reviewed: 2026-02-21
---

# Create Sales Order Form — UI Testing

**Form:** `/sales/orders/new`

---

## Details Section

| Field | Type | Required | Default | Notes |
|-------|------|----------|---------|-------|
| Date | Date picker | Yes | Today | DD/MM/YYYY |
| Delivery Date | Date picker | Yes | **None** | Unique to SO; must select manually |
| Order Type | Dropdown | Yes | Sales | Sales, Maintenance, Shopping Cart |
| Currency | Dropdown | Yes | MYR | MYR only |
| Incoterm | Dropdown | No | — | 11 options (CFR, CIF, CIP, CPT, DAP, DDP, DPU, EXW, FAS, FCA, FOB) |

**Validation error:** "Delivery date is required" — only Details field with no default

### Incoterm Full Names

| Code | Full Name |
|------|-----------|
| CFR | Cost and Freight |
| CIF | Cost, Insurance and Freight |
| CIP | Carriage and Insurance Paid to |
| CPT | Carriage Paid To |
| DAP | Delivered At Place |
| DDP | Delivered Duty Paid |
| DPU | Delivered At Place Unloaded |
| EXW | Ex Works |
| FAS | Free Alongside Ship |
| FCA | Free Carrier |
| FOB | Free On Board |

---

## Test Results — Details Section

| Field | Status | Notes |
|-------|--------|-------|
| Date (default today) | ✅ Working | Calendar with Today/Clear buttons |
| Delivery Date (required) | ✅ Working | Shows "Delivery date is required" error |
| Order Type (3 options) | ✅ Working | Triggers "Unsaved changes" indicator |
| Currency (MYR only) | ✅ Working | Only 1 option confirmed |
| Incoterm (11 options) | ✅ Working | Optional, can leave empty |

---

## Sections 2–8

All other sections (Biller, Customer, Items, Summary, Payment Terms) behave identically to the Quotations form, with the exception noted in Customer Information (PO Number field).

See dedicated section files for details.

---

## See Also

- [[Create Sales Order Exploration]]
- [[SO Biller Information Section]]
- [[SO Customer Information Section]]
- [[Create Quotation UI Testing]]
