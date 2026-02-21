---
owner: Gareth
status: approved
last_reviewed: 2026-02-21
---

# Sales Order Workflow

This document mirrors the sales order workflow diagram in Markdown form for easy reading.

## 1. Entry Points

- **Start: Sales Order**
- **Creation methods:**
  - `Create New Sales Order`
  - `Continue SO from Converted Quotation`
- Both creation methods land on **Sales Order — Status: DRAFT**

## 2. Draft Stage

Available actions:
- **Delete** → Sales Order Deleted → End: Removed from System
- **Submit** → Sales Order — Status: TO BILL (Locked)

## 3. To Bill Stage (Locked)

Users see a locked Sales Order with six possible actions.

### 3.1 Hold

1. Choose **Hold**
2. **Confirm Hold?**
   - Cancel → return to To Bill
   - Confirm → **Sales Order — Status: HOLD (Paused)**
3. In **Hold**, actions include:
   - **Resume** → returns to **To Bill**
   - **Create Delivery Note from SO** → Delivery Note — Draft (Ref: SO-XXX) → continues via Delivery Note flow

> **Note:** Creating an Invoice directly from a HOLD Sales Order is **not allowed**.
> To invoice, first **Resume** the order back to **TO BILL** and then use **Convert to Invoice**.

### 3.2 Close

1. Choose **Close**
2. **Confirm Close?**
   - Cancel → return to To Bill
   - Confirm → **Sales Order — Status: CLOSED (Completed)**
3. From **Closed**, a **Reopen** action moves the order back to **To Bill**

### 3.3 Amend

1. Choose **Amend** → Sales Order — Status: TO BILL (Edit Mode Enabled)
2. Edit items, quantities, prices, etc. → Sales Order — Status: UNSAVED CHANGE (Changes Pending)
3. Unsaved change actions:
   - **Save Changes** → returns to **To Bill**
   - **Discard Changes** → returns to **To Bill**

### 3.4 Cancel

1. Choose **Cancel**
2. **Confirm Cancel?**
   - Go Back → return to To Bill
   - Confirm Cancel → **Sales Order — Status: CANCELLED (Order Void)** → End: Order Cancelled

### 3.5 Convert to Invoice

1. Choose **Convert to Invoice**
2. Data carried forward:
   - Biller & Customer Info
   - Items & Pricing
   - Payment Terms
   - Reference to originating Sales Order
3. Result: **Invoice — Draft (Ref: SO-XXX)** → continues via Invoice flow

### 3.6 Create Delivery Note

1. Choose **Create Delivery Note**
2. Data carried forward:
   - Biller & Customer Info
   - Items & Quantities
   - Delivery Address
   - Reference to originating Sales Order
3. Result: **Delivery Note — Draft (Ref: SO-XXX)** → continues via Delivery Note flow

## 4. Status Summary

| Status | Description | Available Actions |
|--------|-------------|-------------------|
| **DRAFT** | Editable, not yet confirmed | Delete, Submit |
| **TO BILL** | Locked, ready for billing | Hold, Close, Amend, Cancel, Convert to Invoice, Create Delivery Note |
| **HOLD** | Temporarily paused | Resume, Create Delivery Note |
| **CLOSED** | Completed | Reopen |
| **CANCELLED** | Void | None (terminal) |

## 5. Known Limitations

- Cannot create Invoice directly from HOLD status — must Resume to TO BILL first
- Cannot edit SO in TO BILL status without using Amend

## 6. Downstream Flows

- **Invoice Flow** → continues via [[Invoice Workflow Guide]]
- **Delivery Note Flow** → separate workflow for logistics

---

## See Also

- [[Quotation to Sales Order Status Guide]]
- [[Quotation to SO Key Corrections]]
- [[Invoice Workflow Guide]]
- [[Sales Workspace Modules]]
