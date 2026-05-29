---
owner: Gareth
status: draft
last_reviewed: 2026-05-29
client: Holsen
---

# Delivery Note to Pick List — Batch Number Test Cases

**Purpose:** Verify that when a batch number is assigned on a Delivery Note (DN) line item, the same batch number is carried over correctly when the DN is converted to a Pick List (PL).

**Recommended tester:** **Noor Aili** (Logistics)

---

## Test Case 1 — Batch Number Carries Over from DN to Pick List

**Test Case ID:** HOL-LOG-DN-PL-001  
**Scenario Type:** Happy Path

### Prerequisites

- A submitted Sales Order exists and is ready for Delivery Note creation
- The selected item has at least 2 available batch numbers in stock
- Tester has permission to create/edit Delivery Notes and Pick Lists

### Test Steps

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | Open a submitted Sales Order and create a new **Delivery Note**. | Delivery Note opens in editable mode. |
| 2 | Add an item line for a batch-tracked product, for example **ACETIC ACID**. | The item line is added successfully. |
| 3 | In the DN line item, open the **Batch Number** dropdown and select a specific batch number, for example **DUMMY-ACA030-01**. | The selected batch number is shown on the DN line item. |
| 4 | Save or submit the Delivery Note. | Delivery Note is saved/submitted successfully and keeps the selected batch number. |
| 5 | From the same Delivery Note, click to create or convert to **Pick List**. | A new Pick List is created from the Delivery Note. |
| 6 | Open the Pick List item section and review the converted line item. | The same item appears in the Pick List. |
| 7 | Check the **Batch Number** field for that Pick List line item. | The batch number shown is the same one selected on the DN, for example **DUMMY-ACA030-01**. |
| 8 | If the Pick List can be submitted, submit it and reopen the record. | The Pick List remains saved correctly and the batch number still matches the DN. |

**Expected result:**
- The selected batch number from the DN line item is automatically carried over to the Pick List line item
- No manual re-selection is required in the Pick List
- The batch number remains unchanged after saving or submitting the Pick List

**Your result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Tested by:**  
**Date:**  
**Notes:**

---

## Test Case 2 — Correct Batch Is Carried When Multiple Batch Options Exist

**Test Case ID:** HOL-LOG-DN-PL-002  
**Scenario Type:** Selection Accuracy

### Prerequisites

- Same product has more than 1 batch available, for example **DUMMY-ACA030-01** and **300445**

### Test Steps

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | Create a Delivery Note for a batch-tracked product with multiple available batch numbers. | DN opens and item can be added. |
| 2 | Explicitly select the second batch option instead of the first one. | The chosen batch number is displayed on the DN line item. |
| 3 | Convert the DN to a Pick List. | Pick List is created successfully. |
| 4 | Review the Pick List line item batch number. | The Pick List shows the exact same batch selected on the DN, not a different default batch. |

**Expected result:**
- The system preserves the exact selected batch number from DN to Pick List
- The Pick List does not auto-swap to another available batch

**Your result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Tested by:**  
**Date:**  
**Notes:**

---

## Test Case 3 — Batch Number Is Visible for Picking Verification

**Test Case ID:** HOL-LOG-DN-PL-003  
**Scenario Type:** Usability Check

### Test Steps

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | Open a Pick List created from a DN with a batch number assigned. | Pick List opens successfully. |
| 2 | Review the item line details used by warehouse staff for picking. | The batch number is visible and readable on the Pick List line item. |
| 3 | Compare the Pick List batch number against the originating DN. | Both records show the same batch number for the same item. |

**Expected result:**
- Warehouse user can clearly see which batch to pick
- Batch number on Pick List matches the originating DN exactly

**Your result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Tested by:**  
**Date:**  
**Notes:**
