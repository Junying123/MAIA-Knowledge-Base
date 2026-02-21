---
owner: Gareth
status: approved
last_reviewed: 2026-02-21
---

# Sales Order Workflow Guide

**Status Flow:** `DRAFT → TO BILL (Locked)`
**From TO BILL:** Hold, Close, Amend, Cancel, Convert to Invoice, Create Delivery Note

---

## High-Level Overview

```
Create New SO / Continue from Converted Quotation
    │
    └──> DRAFT ──Submit──> TO BILL (Locked)
           ↓                    │
        Delete              ┌───┴────────────────────────────────────────┐
           ↓                │                                            │
       Removed           Hold → HOLD                              Close → CLOSED
                             │                                            │
                          Resume                                       Reopen
                             │                                            │
                          TO BILL ◄──────────────────────────────────────┘
                             │
                    ┌────────┼────────────────┐
                    │        │                │
                 Amend    Cancel      Convert to Invoice
                    │        │                │
               UNSAVED    CANCELLED      Invoice (DRAFT)
               CHANGE       (End)
                    │
              Save/Discard
                    │
                 TO BILL
```

---

## Status 1: DRAFT

**Available Actions:**

| Action | Result |
|--------|--------|
| Delete | Sales Order removed from system → End |
| Submit | → TO BILL (locked) |

**Business Rules:**
- All sections editable
- Must pass validation before Submit

---

## Status 2: TO BILL (Locked)

**Available Actions:**

| Action | Result |
|--------|--------|
| Hold | Confirm dialog → HOLD (paused) |
| Close | Confirm dialog → CLOSED (completed) |
| Amend | Edit mode enabled → UNSAVED CHANGE |
| Cancel | Two-step: Go Back / Confirm Cancel → CANCELLED (terminal) |
| Convert to Invoice | Creates Invoice (DRAFT) with SO data |
| Create Delivery Note | Creates Delivery Note (DRAFT) with SO data |

---

## Status 3: HOLD (Paused)

**Available Actions:**

| Action | Result |
|--------|--------|
| Resume | Returns to TO BILL |
| Create Delivery Note | Creates Delivery Note (DRAFT) |

> ⚠️ **Critical:** Creating an Invoice directly from HOLD is **not allowed**.
> To invoice: **Resume → TO BILL** first, then use **Convert to Invoice**.

---

## Status 4: CLOSED (Completed)

**Available Actions:**

| Action | Result |
|--------|--------|
| Reopen | Returns to TO BILL |

---

## Status 5: UNSAVED CHANGE (Amend Mode)

Triggered by clicking **Amend** from TO BILL.

**Available Actions:**

| Action | Result |
|--------|--------|
| Save Changes | Returns to TO BILL (with updated data) |
| Discard Changes | Returns to TO BILL (no changes applied) |

---

## Status 6: CANCELLED (Terminal)

- No further actions
- End state: Order Void
- Retained for audit trail

---

## Entry Points

| Method | Description |
|--------|-------------|
| Create New Sales Order | Manual entry of all SO details |
| Continue SO from Converted Quotation | Quotation converted to SO; data carries forward |

Both land on **DRAFT** status.

---

## Status Transition Table

| From | Action | To | Note |
|------|--------|----|------|
| N/A | Create New | DRAFT | Manual entry |
| N/A | From Quotation | DRAFT | Data carryover |
| DRAFT | Delete | Removed | Permanent |
| DRAFT | Submit | TO BILL | Locked |
| TO BILL | Hold → Confirm | HOLD | Paused |
| TO BILL | Close → Confirm | CLOSED | Completed |
| TO BILL | Amend | UNSAVED CHANGE | Edit mode |
| TO BILL | Cancel → Go Back | TO BILL | No change |
| TO BILL | Cancel → Confirm | CANCELLED | Terminal |
| TO BILL | Convert to Invoice | TO BILL | Creates Invoice (DRAFT) |
| TO BILL | Create Delivery Note | TO BILL | Creates Delivery Note (DRAFT) |
| HOLD | Resume | TO BILL | Unpaused |
| HOLD | Create Delivery Note | HOLD | Creates Delivery Note (DRAFT) |
| CLOSED | Reopen | TO BILL | Reopened |
| UNSAVED CHANGE | Save Changes | TO BILL | Updates saved |
| UNSAVED CHANGE | Discard Changes | TO BILL | No changes |

---

## Downstream Document Creation from TO BILL

| Action | Creates | Initial Status | Data Carried |
|--------|---------|----------------|--------------|
| Convert to Invoice | Invoice | DRAFT | Biller & Customer info, Items & Pricing, Payment Terms, SO reference |
| Create Delivery Note | Delivery Note | DRAFT | Biller & Customer info, Items & Quantities, Delivery Address, SO reference |

---

## Key Rules

### HOLD Status
- Resume to return to TO BILL
- **Cannot convert to Invoice from HOLD** — must Resume first
- Can create Delivery Note from HOLD

### Amend Flow
- Amend activates edit mode on locked TO BILL order
- Changes pending → UNSAVED CHANGE status
- Must Save or Discard to return to TO BILL
- No permanent edit possible from TO BILL without using Amend

### Cancel Process (Two-Step)
- From TO BILL: Cancel → Go Back (no change) / Confirm Cancel → CANCELLED
- CANCELLED is terminal — no reopen available

### Close / Reopen
- CLOSED = completed/finalized (not cancelled)
- Can Reopen from CLOSED → returns to TO BILL
- Useful for orders that were closed prematurely

---

## Sales Order as Hub Document

The Sales Order is the central document in the Quote-to-Cash flow:

```
Quotation (ORDERED)
    │
    └──> Sales Order (DRAFT → TO BILL)
              │
              ├──> Invoice (DRAFT) ──> Invoice (UNPAID)
              │                             │
              │                             ├──> Receipt
              │                             ├──> Debit Note
              │                             └──> Credit Note
              │
              └──> Delivery Note (DRAFT)
```

---

## Key Testing Scenarios

**Basic flow:**
Create SO → DRAFT → Submit → TO BILL → Convert to Invoice → Invoice DRAFT

**From Quotation:**
Quotation in ORDERED → Convert to SO → SO DRAFT → verify all data carried (items, customer, payment terms) → Submit → TO BILL

**Hold and Resume:**
SO TO BILL → Hold → Confirm → HOLD → verify "Convert to Invoice" not available → Resume → TO BILL → Convert to Invoice

**Close and Reopen:**
SO TO BILL → Close → Confirm → CLOSED → Reopen → TO BILL (reopened)

**Amend flow:**
SO TO BILL → Amend → edit items/prices → UNSAVED CHANGE → Save Changes → TO BILL (updated) | Discard Changes → TO BILL (unchanged)

**Cancel:**
SO TO BILL → Cancel → Go Back (no change) → Cancel again → Confirm Cancel → CANCELLED (terminal)

**Create Delivery Note from HOLD:**
SO TO BILL → Hold → HOLD → Create Delivery Note → Delivery Note DRAFT (with SO reference)

---

## Data Carried Forward: Convert to Invoice

| Field | Carried |
|-------|---------|
| Biller Information | ✅ |
| Customer Information | ✅ |
| Items & Pricing (SKU/qty/unit price) | ✅ |
| Payment Terms | ✅ |
| Charges (delivery, handling, etc.) | ✅ |
| Discounts | ✅ |
| Tax settings | ✅ |
| SO Reference number | ✅ |

---

## Status Indicators

- **DRAFT:** 🟡 Editable
- **TO BILL:** 🔵 Locked (awaiting invoice or delivery)
- **HOLD:** 🟠 Paused
- **CLOSED:** 🟢 Completed
- **CANCELLED:** ⚫ Voided (terminal)

---

## FAQ

**Can I invoice from HOLD?** No. Resume to TO BILL first, then Convert to Invoice.

**Can I undo a Cancel?** No. CANCELLED is terminal.

**Can I undo a Close?** Yes. Use Reopen from CLOSED to return to TO BILL.

**What's the difference between Close and Cancel?**
- Close = completed/fulfilled (can reopen); Cancel = voided (terminal)

**Can I create a Delivery Note from HOLD?** Yes.

**Does Convert to Invoice change the SO status?** No. SO remains TO BILL; Invoice is created as DRAFT.

---

## See Also

- [[Create Sales Order Exploration]]
- [[Sales Order Main Page Exploration]]
- [[Invoice Workflow Guide]]
- [[Sales Workspace Modules]]
