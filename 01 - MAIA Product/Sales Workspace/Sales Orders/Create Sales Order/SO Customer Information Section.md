---
owner: Gareth
status: approved
last_reviewed: 2026-02-21
---

# SO Customer Information Section — UI Testing

**Form:** `/sales/orders/new`

---

## Fields Overview

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| Customer | Dropdown | Yes | Enabled after Company selected |
| Contact Person | Combobox | Yes | Auto-populated on customer select |
| Billing Address | Combobox | Yes | Auto-populated on customer select |
| Shipping Address | Combobox | Yes | Auto-populated on customer select |
| PO Number | Textbox | No | **Unique to Sales Orders** |

---

## Dependency Chain

```
Company (Biller) selected →
  Customer — enabled
    ↓ Customer selected
    Contact Person — auto-populated
    Billing Address — auto-populated
    Shipping Address — auto-populated

PO Number — always enabled (no dependency)
```

---

## PO Number Field (Sales Order Exclusive)

Optional field unique to Sales Orders (not in Quotations).

**Conditional fields revealed when PO Number is filled:**

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| PO Date | Date picker | No | Select PO date |
| PO Attachment | File upload | * (visual) | 1 file, max 1 GB |

> **⚠️ Inconsistent Validation Bug:** PO Attachment is marked with `*` (appears required) but is **not enforced client-side or server-side** when the rest of the form is valid. PO Date similarly shows "PO date is required" only when other sections are also invalid.

**Behavior:**
- Filling PO Number → PO Date and PO Attachment appear
- Clearing PO Number → both fields disappear immediately (uploaded file also dropped)
- PO Attachment visual asterisk is misleading — not actually required

---

## Test Results

| Feature | Status |
|---------|--------|
| Customer dropdown | ✅ Working |
| Contact Person auto-population | ✅ Working |
| Billing Address auto-population | ✅ Working |
| Shipping Address auto-population | ✅ Working |
| PO Number field | ✅ Working |
| PO Date conditional reveal | ✅ Working |
| PO Attachment conditional reveal | ✅ Working |
| Clear PO Number → hides dependents | ✅ Working |
| PO Attachment validation | ⚠️ Inconsistent — not enforced |

---

## Known Issue

**PO Attachment asterisk (*) mismatch:** Field visually appears required but backend accepts submission without it. Recommend aligning client/server validation or removing the asterisk.

---

## See Also

- [[SO Biller Information Section]]
- [[Create Sales Order Exploration]]
- [[Customer Information Section]]
