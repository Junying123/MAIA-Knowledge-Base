---
owner: Gareth
status: approved
last_reviewed: 2026-02-21
---

# SO Biller Information Section — UI Testing

**Form:** `/sales/orders/new`

---

## Fields Overview

| Field | Type | Required | Behavior |
|-------|------|----------|---------|
| Company | Dropdown | Yes | 10 options; enables other fields |
| Contact Person | Combobox | Yes | Auto-populated on company select |
| Address | Combobox | Yes | Auto-populated on company select |
| Fulfillment Method | Dropdown | Yes | Manual select; 4 options (MAIA) |
| Tax Type | Dropdown | Yes | Manual select; 2 options |

**Note:** Identical structure to Quotations form. Key differences noted below.

---

## Company Field — 10 Options

> **Note:** Sales Order form has 10 companies vs 9 in Quotations (added Brightline Foods, FixGuru)

1. AstraNova Technologies Sdn Bhd
2. Brightline Foods Sdn. Bhd. *(new)*
3. BritTech Solutions Ltd
4. Farmshop
5. Farmshop (Demo)
6. FixGuru *(new)*
7. MAIA
8. NovaEdge2 Solutions Sdn Bhd
9. Test
10. Test Company

**Validation:** "Biller company is required"

---

## Fulfillment Method

Does **NOT** auto-populate — manual selection required.

**MAIA options (4):** Delivery, Delivery (COD), Delivery-COD, Pick Up

**Note:** Options vary by company (see Data Quality Issues below)

---

## Tax Type

Does **NOT** auto-populate — manual selection required.

**Options (2):** Tax on Items, Tax on Total

### Conditional UI on Tax Type Selection

**Tax on Total selected:**
- New "Tax*" field appears in Biller section
- 5 options: Malaysia GST 10%, Malaysia GST 5%, Malaysia GST 6%, No Tax, SST 6%

**Tax on Items selected:**
- "Tax*" field hidden
- 2 new columns appear in Items table: "Tax on Items" (dropdown) + "Tax Amount" (display)
- Each row must select from 5 tax options

---

## Validation Errors

| Field | Error Message |
|-------|---------------|
| Company | "Biller company is required" |
| Contact Person | "Biller contact person is required" |
| Address | "Biller address is required" |
| Fulfillment Method | "Fulfillment method is required" |
| Tax Type | "Tax type is required" |

---

## Data Quality Issues Found

| Company | Issue | Severity |
|---------|-------|----------|
| Farmshop | Duplicate address: "Moo MMooo, Farm afarm, Malaysia" appears twice | Medium |
| Farmshop | Missing "Delivery-COD" fulfillment method option | Medium |
| BritTech Solutions Ltd | No addresses available | High |
| BritTech Solutions Ltd | No fulfillment methods available | High |
| BritTech Solutions Ltd | No customers available | High |

**BritTech blocks form completion** — required fields have no options.

---

## See Also

- [[SO Customer Information Section]]
- [[Create Sales Order Exploration]]
- [[Biller Information Section]]
