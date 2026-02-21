---
owner: Gareth
status: approved
last_reviewed: 2026-02-21
---

# Create Quotation Form — Comprehensive UI Testing

**Form URL:** `/sales/quotations/new`

---

## Section 1: Details

| Field | Options / Notes |
|-------|----------------|
| Date | Date picker, default: current date (MM/DD/YYYY) |
| Valid Until | Date picker, default: tomorrow |
| Order Type | Dropdown: **Sales** (default), Maintenance, Shopping Cart |
| Currency | Dropdown: **MYR (RM)** only |
| Incoterm | 11 options: CFR, CIF, CIP, CPT, DAP, DDP, DPU, EXW, FAS, FCA, FOB |

---

## Section 2: Biller Information

### Company Dropdown (9 options)

1. AstraNova Technologies Sdn Bhd
2. BritTech Solutions Ltd
3. Farmshop
4. Farmshop (Demo)
5. MAIA
6. NovaEdge2 Solutions Sdn Bhd
7. Test
8. Test Company
9. WOW Sdn Bhd

### Auto-population on MAIA selection

- **Contact Person:** "MAIA maia@gmail.com +60123456789"
- **Address:** "C188, Block C, Kolej Kediaman Ke-13 Universiti Malaya, Jln Profesor Diraja Ungku Aziz, Petaling Jaya, Selangor, 46350, Malaysia"

### Other fields (enabled after company selection)

- Fulfillment Method — dropdown
- Tax Type — dropdown

---

## Section 3: Customer Information

All fields enabled after company selection. Address fields enabled after customer selection.

---

## Section 4: Items Table

**Columns:** No., SKU, Name, UoM, Quantity, Unit Price, Additional Notes, Amount

- SKU and Name open item selection dialogs
- Amount = Quantity × Unit Price (auto-calculated)
- "Add Item" button adds rows

---

## Section 7: Summary / Charges

**Charge chips (5 options):** Delivery, Handling, Service, Packaging, Insurance

- Clicking a chip converts it to an inline input with amount field
- Charges affect Grand Total immediately
- Clicking the remove icon returns the charge to chip row
- **Test result:** Delivery RM50 → Total Charges RM50 → Grand Total RM50 ✅

**Discount:** Editable RM field

**Grand Total = Subtotal + Charges − Discount**

---

## Section 8: Payment Terms

**Default:** CIA (Cash in Advance), 100%, due today

- Payment Amount = Grand Total × Portion % (auto-calculated)
- "Add Payment Term" adds rows
- Clear (×) button on each row
- Portion Total must equal 100.0%

---

## Field Dependencies

```
Company selected →
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

## Test Results Summary

| Component | Status |
|-----------|--------|
| Order Type dropdown (3 options) | ✅ Working |
| Currency dropdown (1 option) | ✅ Working |
| Incoterm dropdown (11 options) | ✅ Working |
| Company dropdown (9 options) | ✅ Working |
| Field dependencies | ✅ Working |
| Auto-population (MAIA company) | ✅ Working |
| Charges (add/remove/calculate) | ✅ Working |
| Payment terms table | ✅ Working |
| Calculated fields | ✅ Working |
| Create / Cancel buttons | ✅ Present |

---

## See Also

- [[Create Quotation Exploration]]
- [[Biller Information Section]]
- [[Customer Information Section]]
- [[Items Section]]
- [[Summary Section]]
- [[Payment Term Section]]
