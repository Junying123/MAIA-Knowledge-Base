---
owner: Gareth
status: approved
last_reviewed: 2026-02-21
---

# Quotation to Sales Order - Corrected Status Flow

## High-Level Overview

```
QUOTATION: DRAFT → OPEN → ORDERED
                ↓         ↑
           Convert      Submit
                ↓         ↑
SALES ORDER:  DRAFT → TO BILL
```

**Key Correction:**
- Quotation remains OPEN when SO is created
- Quotation only changes to ORDERED when SO is submitted
- SO submission is the trigger for quotation status change

---

## QUOTATION Status Flow

### Status 1: DRAFT
**When:** Quotation is first created
**Available Actions:**
- ✅ **Delete** → Quotation is removed from system
- ✅ **Submit** → Quotation moves to OPEN status

**Business Rules:**
- Quotation can be edited freely in DRAFT
- Validation must pass before Submit
- Delete permanently removes the quotation

---

### Status 2: OPEN
**When:** Quotation has been submitted
**Available Actions:**
- ✅ **Mark as Lost** → Quotation status changes to LOST
- ✅ **Convert to Sales Order** → Creates new SO in DRAFT status (Quotation STAYS OPEN)

**Business Rules:**
- Quotation is sent to customer for review
- Cannot edit quotation in OPEN status
- **IMPORTANT:** Quotation remains OPEN even after SO is created
- Quotation only changes to ORDERED when SO is submitted

**Common Scenario:**
1. Quotation in OPEN → Convert to SO
2. SO created in DRAFT (Quotation still OPEN)
3. Edit SO as needed (Quotation still OPEN)
4. Submit SO (Quotation changes to ORDERED)

---

### Status 3: ORDERED
**When:** Linked Sales Order has been submitted
**Available Actions:**
- ❌ **None** - This is a terminal status

**Business Rules:**
- Quotation is now confirmed as an actual order
- Cannot be edited or converted again
- SO reference displayed
- Cannot be marked as Lost (order already placed)

**Trigger:** Automatically changes from OPEN to ORDERED when linked SO is submitted

---

### Status 4: LOST
**When:** Customer declines or doesn't proceed with quotation
**Available Actions:**
- ❌ **None** - This is a terminal status

**Business Rules:**
- End of quotation lifecycle
- Quotation remains in system for record keeping
- Cannot be converted to SO after marked as LOST
- Used for loss analysis and reporting

---

## SALES ORDER Status Flow

### Status 1: DRAFT
**When:** SO is first created from Quotation
**Available Actions:**
- ✅ **Edit** → Modify SO details (items, quantities, prices, payment terms)
- ✅ **Submit** → Locks SO and changes status to TO BILL

**Business Rules:**
- SO can be edited freely in DRAFT
- Original Quotation remains OPEN during this time
- Can modify data carried over from Quotation
- Validation must pass before Submit

**Key Point:**
- While SO is in DRAFT, the original Quotation is still OPEN
- This allows flexibility to adjust SO before confirming

---

### Status 2: TO BILL
**When:** SO has been submitted
**Available Actions:**
- ❌ **Cannot edit SO** - Locked and read-only
- ✅ **Create Invoice** - Next step in workflow

**Business Rules:**
- SO is locked and cannot be edited
- All fields are read-only
- Quotation automatically changes to ORDERED
- Ready to create Invoice for billing

**Trigger Effect:** Submitting SO triggers Quotation status change: OPEN → ORDERED

---

## Status Transition Summary

### Quotation Statuses
| From Status | Action | To Status | Note |
|-------------|--------|-----------|------|
| **DRAFT** | Delete | *(Removed)* | Permanently deleted |
| **DRAFT** | Submit | **OPEN** | Sent for review |
| **OPEN** | Mark as Lost | **LOST** | Terminal status |
| **OPEN** | Convert to SO | **OPEN** | ⚠️ Stays OPEN! |
| **OPEN** | (SO Submitted) | **ORDERED** | Auto-triggered |

### Sales Order Statuses
| From Status | Action | To Status | Effect on Quotation |
|-------------|--------|-----------|---------------------|
| N/A | Convert from Quote | **DRAFT** | Quote stays OPEN |
| **DRAFT** | Edit | **DRAFT** | Quote stays OPEN |
| **DRAFT** | Submit | **TO BILL** | Quote → ORDERED |

---

## Key Testing Scenarios

### Scenario 1: Basic Quote to SO Flow
```
1. Create Quotation → DRAFT
2. Submit → OPEN
3. Convert to SO → SO in DRAFT, Quote still OPEN
4. Submit SO → SO becomes TO BILL, Quote becomes ORDERED
```

### Scenario 2: Edit SO Before Submitting
```
1. Create Quotation → DRAFT
2. Submit → OPEN
3. Convert to SO → SO in DRAFT, Quote still OPEN
4. Edit SO items/quantities (Quote still OPEN)
5. Edit SO payment terms (Quote still OPEN)
6. Submit SO → SO becomes TO BILL, Quote becomes ORDERED
```

### Scenario 3: Verify Quote Stays OPEN During SO Draft
```
1. Create Quotation → OPEN
2. Convert to SO → SO in DRAFT
3. Check Quote status → Should be OPEN (not ORDERED yet)
4. Edit SO → Quote status should still be OPEN
5. Submit SO → Quote status changes to ORDERED
```

---

## Updated Business Rules

### OPEN Quotation Rules (CORRECTED)
- ❌ Cannot edit quotation
- ❌ Cannot delete quotation
- ✅ Can mark as Lost (if no SO created)
- ✅ Can convert to Sales Order
- ⚠️ **Remains OPEN after SO is created**
- ⚠️ **Only changes to ORDERED when SO is submitted**
- ❌ Cannot mark as Lost after SO is created

### ORDERED Quotation Rules
- ❌ Cannot edit, delete, or convert to SO again
- ❌ Cannot mark as Lost
- ✅ Remains in system linked to SO
- ✅ Shows SO reference

### DRAFT Sales Order Rules
- ✅ Can edit all fields freely
- ✅ Can modify items, quantities, prices, payment terms
- ⚠️ **Original Quotation stays OPEN while editing**
- ❌ Cannot delete SO (must cancel or void)

### TO BILL Sales Order Rules
- ❌ Cannot edit any fields (all read-only)
- ✅ Can create Invoice
- ✅ Shows reference to Quotation
- ⚠️ **Submitting triggers Quotation → ORDERED**

---

## Error Scenarios

| Error Situation | Expected System Behavior |
|----------------|-------------------------|
| Try to edit SO in TO BILL status | Show error: "Cannot edit submitted sales order" |
| Try to mark Quote as Lost after SO created | "Mark as Lost" option disabled/hidden |
| Submit SO with validation errors | Show validation errors, prevent submission |
| Try to convert ORDERED quote again | Error: "Quote already converted to SO" |
| Check Quote status while SO in DRAFT | Should show OPEN (not ORDERED) |

---

## Quotation Status Badges
- **DRAFT:** 🟡 Yellow - "Editable"
- **OPEN:** 🟢 Green - "Awaiting Decision"
- **ORDERED:** 🔵 Blue - "Order Confirmed"
- **LOST:** 🔴 Red - "Opportunity Lost"

### Sales Order Status Badges
- **DRAFT:** 🟡 Yellow - "Editable"
- **TO BILL:** 🟢 Green - "Ready for Billing"

---

## See Also

- [[Quotation to SO Key Corrections]]
- [[Sales Order Workflow Guide]]
- [[Invoice Workflow Guide]]
- [[Sales Workspace Modules]]
