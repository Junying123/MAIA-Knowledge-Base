---
owner: Gareth
status: draft
last_reviewed: 2026-05-26
client: Fixguru
feature: FOC Items
purpose: sortable_test_cases
---

# Fixguru — FOC Items Test Cases

## Notes

- This file is a clean sorting version for FOC-related UAT.
- MAIA direction: FOC should be handled as separate lines, not AutoCount child lines.
- Chatbot direction from action items: when unit price is zero, chatbot should confirm whether it is a free item and send the `is_free_item` flag to backend.

## Test Tracker

| ID | Area | Scenario | Channel | Priority | Status | Notes |
|----|------|----------|---------|----------|--------|-------|
| FOC-01 | Quotation | Single item with FOC | FE | High | Not Started | |
| FOC-02 | Quotation | Mixed items: with and without FOC | FE | High | Not Started | |
| FOC-03 | Quotation | All items have FOC | FE | High | Not Started | |
| FOC-04 | Quotation | Edit paid qty after adding FOC | FE | Medium | Not Started | |
| FOC-05 | Quotation | Remove FOC line only | FE | Medium | Not Started | |
| FOC-06 | Quotation | Single item with FOC | Chatbot | High | Not Started | |
| FOC-07 | Quotation | Multiple items, one item has FOC | Chatbot | High | Not Started | |
| FOC-08 | Quotation | Multiple items, multiple FOC items | Chatbot | High | Not Started | |
| FOC-09 | Quotation | All items have FOC | Chatbot | High | Not Started | |
| FOC-10 | Quotation | Ambiguous FOC wording | Chatbot | High | Not Started | |
| FOC-11 | Quotation | Discount on paid line with FOC | Chatbot | High | Not Started | |
| FOC-12 | Validation | FOC line must not count as paid qty | FE + Chatbot | High | Not Started | |
| FOC-13 | Validation | FOC line must be RM0 or flagged as free | FE + Chatbot | High | Not Started | |
| FOC-14 | Validation | Minimum price only checks paid line | FE + Chatbot | High | Not Started | |
| FOC-15 | Validation | Historical pricing must not treat FOC as normal price | FE + Chatbot | High | Not Started | |
| FOC-16 | Document Flow | QT to SO carry forward | FE | High | Not Started | |
| FOC-17 | Document Flow | SO to DO carry forward | FE | High | Not Started | |
| FOC-18 | Output | PDF shows paid line and FOC line clearly | FE | High | Not Started | |

## Detailed Test Cases

---

### FOC-01 — FE — Single item with FOC

**What to do**

```text
Create a quotation. Add Item A qty 100 with normal price. Add another line for Item A qty 10 as FOC.
```

**Expected**

- FE allows the same item to appear as paid line and FOC line.
- Paid line keeps normal unit price.
- FOC line is RM0 or clearly marked as free item.
- Grand total only includes the paid qty.

**Result:** ☐ Pass ☐ Fail ☐ Issue  
**Tested by:**  
**Date:**  
**Notes:**  

---

### FOC-02 — FE — Mixed items: with and without FOC

**What to do**

```text
Create a quotation. Add Item A qty 100 with 10 FOC. Add Item B qty 20 normal. Add Item C qty 50 with 5 FOC.
```

**Expected**

- Item A and Item C each have separate paid and FOC treatment.
- Item B remains a normal item without FOC.
- FOC must not spill over to Item B.
- Grand total only charges paid quantities.

**Result:** ☐ Pass ☐ Fail ☐ Issue  
**Tested by:**  
**Date:**  
**Notes:**  

---

### FOC-03 — FE — All items have FOC

**What to do**

```text
Create a quotation. Add Item A qty 100 with 10 FOC. Add Item B qty 50 with 5 FOC. Add Item C qty 30 with 3 FOC.
```

**Expected**

- All items save correctly.
- Each item keeps its own paid qty and FOC qty.
- System does not merge all FOC into one generic line.
- Grand total excludes all FOC value.

**Result:** ☐ Pass ☐ Fail ☐ Issue  
**Tested by:**  
**Date:**  
**Notes:**  

---

### FOC-04 — FE — Edit paid qty after adding FOC

**What to do**

```text
Create Item A qty 100 with 10 FOC. Then edit the paid qty from 100 to 120.
```

**Expected**

- Paid qty updates correctly.
- FOC qty does not auto-change unless that is intended by product logic.
- Totals recalculate based on paid qty only.

**Result:** ☐ Pass ☐ Fail ☐ Issue  
**Tested by:**  
**Date:**  
**Notes:**  

---

### FOC-05 — FE — Remove FOC line only

**What to do**

```text
Create Item A qty 100 with 10 FOC. Delete the FOC line only.
```

**Expected**

- Paid line remains.
- Grand total stays based on the paid qty.
- No orphan FOC flag remains on the paid line.

**Result:** ☐ Pass ☐ Fail ☐ Issue  
**Tested by:**  
**Date:**  
**Notes:**  

---

### FOC-06 — Chatbot — Single item with FOC

**What to do**

```text
Create a quotation for [Customer]. Add [Item] qty 100, and add 10 units as FOC.
```

**Expected**

- Chatbot understands paid qty vs FOC qty.
- It creates two separate lines.
- Normal paid item line: qty 100, normal price.
- FOC item line: qty 10, unit price RM0 / free item flag.
- It should not treat all 110 qty as paid.

**Result:** ☐ Pass ☐ Fail ☐ Issue  
**Tested by:**  
**Date:**  
**Notes:**  

---

### FOC-07 — Chatbot — Multiple items, one item has FOC

**What to do**

```text
Create a quotation for [Customer]. Add Item A qty 100 and 10 units as FOC. Add Item B qty 20.
```

**Expected**

- Chatbot creates separate paid and FOC lines for Item A.
- Item B remains a normal paid item.
- FOC is only applied to Item A.
- Total only charges the paid items.

**Result:** ☐ Pass ☐ Fail ☐ Issue  
**Tested by:**  
**Date:**  
**Notes:**  

---

### FOC-08 — Chatbot — Multiple items, multiple FOC items

**What to do**

```text
Create a quotation for [Customer]. Add Item A qty 100 and 10 units as FOC. Add Item B qty 50 and 5 units as FOC.
```

**Expected**

- Chatbot creates separate paid and FOC lines for each item.
- FOC qty is attached to the correct item.
- Paid qty and free qty are not mixed.
- Total excludes all FOC lines.

**Result:** ☐ Pass ☐ Fail ☐ Issue  
**Tested by:**  
**Date:**  
**Notes:**  

---

### FOC-09 — Chatbot — All items have FOC

**What to do**

```text
Create a quotation for [Customer]. Add Item A qty 100 and 10 units as FOC. Add Item B qty 50 and 5 units as FOC. Add Item C qty 30 and 3 units as FOC.
```

**Expected**

- All items are parsed correctly.
- Each item keeps its own FOC qty.
- Chatbot does not collapse all free qty into one line.
- Total excludes all FOC lines.

**Result:** ☐ Pass ☐ Fail ☐ Issue  
**Tested by:**  
**Date:**  
**Notes:**  

---

### FOC-10 — Chatbot — Ambiguous FOC wording

**What to do**

```text
Create a quotation for [Customer]. Add Item A 110 qty, 10 is free.
```

**Expected**

- Chatbot asks for clarification or interprets correctly.
- Good confirmation example: `Do you want 100 paid and 10 as FOC?`
- It must not assume all 110 qty are paid.

**Result:** ☐ Pass ☐ Fail ☐ Issue  
**Tested by:**  
**Date:**  
**Notes:**  

---

### FOC-11 — Chatbot — Discount on paid line with FOC

**What to do**

```text
Create a quotation for [Customer]. Add Item A qty 100 with 10 FOC, and give 5% discount.
```

**Expected**

- Discount only applies to the paid line.
- FOC line stays RM0.
- No double discounting happens on the FOC qty.

**Result:** ☐ Pass ☐ Fail ☐ Issue  
**Tested by:**  
**Date:**  
**Notes:**  

---

### FOC-12 — Validation — FOC line must not count as paid qty

**What to do**

```text
Create any quotation with paid qty and FOC qty for the same item.
```

**Expected**

- Document total uses paid qty only.
- Pricing logic uses paid qty only.
- FOC qty is not merged into sold qty.

**Result:** ☐ Pass ☐ Fail ☐ Issue  
**Tested by:**  
**Date:**  
**Notes:**  

---

### FOC-13 — Validation — FOC line must be RM0 or flagged as free

**What to do**

```text
Create a quotation with at least one FOC line, then inspect the line in FE and chatbot confirmation.
```

**Expected**

- FOC line is RM0 or has a clear free item indicator.
- FOC line is distinguishable from a normal paid line.
- Saved data preserves free item meaning.

**Result:** ☐ Pass ☐ Fail ☐ Issue  
**Tested by:**  
**Date:**  
**Notes:**  

---

### FOC-14 — Validation — Minimum price only checks paid line

**What to do**

```text
Create a quotation with one paid line and one FOC line for the same item. Then lower the paid unit price below minimum price.
```

**Expected**

- Minimum price validation triggers on the paid line.
- FOC line does not trigger minimum price validation by itself.
- System does not treat RM0 FOC as a pricing violation if it is correctly marked free.

**Result:** ☐ Pass ☐ Fail ☐ Issue  
**Tested by:**  
**Date:**  
**Notes:**  

---

### FOC-15 — Validation — Historical pricing must not treat FOC as normal price

**What to do**

```text
Create or inspect a case where a customer previously received an item with FOC. Then retrieve historical price for that customer-item pair.
```

**Expected**

- History should not misread the FOC line as the normal selling price.
- Normal paid price remains the historical reference.
- FOC, if shown, should be identifiable as a free line and not a standard price.

**Result:** ☐ Pass ☐ Fail ☐ Issue  
**Tested by:**  
**Date:**  
**Notes:**  

---

### FOC-16 — FE — QT to SO carry forward

**What to do**

```text
Create a quotation with FOC items and convert it to Sales Order.
```

**Expected**

- Paid and FOC lines carry forward correctly.
- FOC line remains free in the SO.
- Totals remain based on paid lines only.

**Result:** ☐ Pass ☐ Fail ☐ Issue  
**Tested by:**  
**Date:**  
**Notes:**  

---

### FOC-17 — FE — SO to DO carry forward

**What to do**

```text
Create a Sales Order with FOC items and convert it to Delivery Order.
```

**Expected**

- FOC lines appear in the Delivery Order.
- Warehouse can clearly see both paid qty and FOC qty.
- Delivery document preserves the line meaning correctly.

**Result:** ☐ Pass ☐ Fail ☐ Issue  
**Tested by:**  
**Date:**  
**Notes:**  

---

### FOC-18 — FE — PDF shows paid line and FOC line clearly

**What to do**

```text
Generate a PDF from a quotation or sales order that contains paid lines and FOC lines.
```

**Expected**

- PDF shows paid lines and FOC lines clearly.
- FOC lines are RM0 or clearly marked free.
- Grand total excludes FOC line value.
- Output is understandable to customer and internal ops team.

**Result:** ☐ Pass ☐ Fail ☐ Issue  
**Tested by:**  
**Date:**  
**Notes:**  

