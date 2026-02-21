---
owner: Gareth
status: approved
last_reviewed: 2026-02-21
---

# Receipt Workflow Guide

**Status Flow:** `DRAFT → IN PROGRESS → COMPLETED → CLOSED`
**Cancel available from:** DRAFT (delete), IN PROGRESS, COMPLETED → terminal CANCELLED

---

## High-Level Overview

```
Create (List / Invoice) → DRAFT ──Submit──> IN PROGRESS ──Complete──> COMPLETED ──Close──> CLOSED
                            ↓                   ↓               ↓
                         Delete              Cancel           Cancel
                            ↓                   ↓               ↓
                         Removed           CANCELLED        CANCELLED
```

**Key Points:**
- Created from Receipts list (standalone) or from eligible Invoice (UNPAID/PARTLY PAID/OVERDUE)
- Not available from CANCELLED invoices
- DRAFT is fully editable; later statuses progressively lock
- Proof of payment upload available in DRAFT
- Two-step cancel: Go Back / Confirm Cancel
- CANCELLED is terminal — retained for audit

---

## Status 1: DRAFT

**Available Actions:**

| Action | Result |
|--------|--------|
| Delete | Removed from system (permanent) |
| Submit/Save | → IN PROGRESS (starts payment posting) |
| Print PDF | Draft watermark; status unchanged |
| Edit all fields | Dates, payment method, customer, paid amount, remarks |
| Upload proof of payment | Attachment stored |

**Business Rules:**
- Fully editable
- Invoice reference retained when created from invoice
- Not visible in payment history until submitted
- Required fields: customer, payment method, receipt date, due date, paid amount > 0

---

## Status 2: IN PROGRESS

**Available Actions:**

| Action | Result |
|--------|--------|
| Generate PDF | Official PDF; status unchanged |
| Cancel Receipt | Two-step: Go Back / Confirm Cancel → CANCELLED |
| Mark/Save as Completed | → COMPLETED; payment posted |

**Business Rules:**
- Core payment fields may be restricted (verify in UI)
- Payment impact begins once moved to COMPLETED
- Cancellation reverses any pending impact
- Cannot delete — must cancel

---

## Status 3: COMPLETED

**Available Actions:**

| Action | Result |
|--------|--------|
| Generate PDF | Official PDF; status unchanged |
| Cancel Receipt (if policy allows) | Two-step confirmation → CANCELLED; reverses applied payment |

**Business Rules:**
- Locked for edits
- Payment applied to customer/invoice balance
- Further changes require cancellation or follow-up documents

---

## Status 4: CLOSED

**Available Actions:**

| Action | Result |
|--------|--------|
| Generate PDF | Read-only; status unchanged |

**Business Rules:**
- Fully locked/read-only
- Reconciled/archived state
- No cancellation or edits

---

## Status 5: CANCELLED (Terminal)

- No further actions
- Void but retained for audit
- Payment impact reversed
- No documents can be created from CANCELLED receipt

---

## Creation Methods

### Method 1: From Receipts List (Standalone)
Navigate to `/sales/receipts` → Create Receipt

**Required fields:**
- Receipt Date, Due Date
- Payment Method
- Customer
- Paid Amount (> 0)

**Optional fields:**
- Transaction ID / Transaction Date
- Payment References (allocate to invoices)
- Proof of Payment upload
- Remarks

**Use for:** Advance payments, deposits, payments without invoice reference, customer account credits

### Method 2: From Invoice
Invoice must be in **UNPAID / PARTLY PAID / OVERDUE**

Data carried: Customer & biller, invoice reference and amounts (for allocation)

**Use for:** Recording payment against specific invoice, partial payments (invoice remains PARTLY PAID), full payment, overdue collection

---

## Status Transition Table

| From | Action | To | Note |
|------|--------|----|------|
| N/A | Create (list/invoice) | DRAFT | New receipt |
| DRAFT | Delete | Removed | Permanent |
| DRAFT | Submit/Save | IN PROGRESS | Starts payment posting |
| DRAFT | Print PDF | DRAFT | Unchanged |
| IN PROGRESS | Generate PDF | IN PROGRESS | Unchanged |
| IN PROGRESS | Mark Completed | COMPLETED | Payment posted |
| IN PROGRESS | Cancel → Confirm | CANCELLED | Terminal |
| IN PROGRESS | Cancel → Go Back | IN PROGRESS | No change |
| COMPLETED | Generate PDF | COMPLETED | Unchanged |
| COMPLETED | Cancel → Confirm (if allowed) | CANCELLED | Reversal/void |
| CLOSED | Generate PDF | CLOSED | Read-only |

---

## Key Business Rules

### Draft
✅ Fully editable | ✅ Delete | ✅ Proof upload | ✅ Draft PDF
❌ No cancellation (delete instead)

### In Progress
✅ Generate PDF | ✅ Cancel (two-step) | ✅ Complete/post payment
⚠️ Limited edits; core fields may lock | ❌ Delete not allowed

### Completed
✅ Generate PDF | ⚠️ Cancel possible if policy allows (two-step)
❌ Edit | ❌ Delete

### Closed
✅ Generate PDF | ❌ Edit/Cancel/Delete

### Cancelled
❌ No actions | ✅ Retained for audit | ✅ Balances reversed/voided

---

## Business Scenarios

| Scenario | Description |
|----------|-------------|
| Full Payment | Customer pays complete invoice amount; invoice → PAID |
| Partial Payment | Customer pays portion; invoice remains PARTLY PAID; further receipts possible |
| Advance Payment | Customer pays before delivery; standalone receipt; becomes customer credit |
| Multiple Invoice Payment | One receipt allocated across multiple invoices |
| Overdue Payment | Payment against OVERDUE invoice, may include late fees |
| Cash on Delivery (COD) | Create receipt immediately after delivery; cash transaction documented |
| Payment Method Documentation | Attach bank statements, card receipts, check copies for reconciliation |

---

## Edge Cases

| Scenario | Handling |
|----------|----------|
| Customer overpays | Create receipt for invoice amount; overage → customer credit |
| Customer underpays | Receipt for partial amount; invoice remains PARTLY PAID |
| Payment after invoice cancelled | Create receipts from cancelled invoice is blocked; use standalone receipt |
| Duplicate payment | First receipt applies to invoice; second creates customer credit or triggers refund |
| Payment allocation dispute | Edit in DRAFT/IN PROGRESS to reallocate; if COMPLETED, cancel and recreate |

---

## Validation (before Submit)
- Customer selected
- Payment method selected
- Receipt Date and Due Date set
- Paid Amount > 0
- Allocations (if used) sum correctly

---

## Key Testing Scenarios

1. **Basic receipt (standalone):** Create from list → DRAFT → Submit → IN PROGRESS → Complete → COMPLETED → Generate PDF

2. **From Invoice (UNPAID):** Invoice → Create Receipt → enter amount → Submit → IN PROGRESS → verify invoice balance updates

3. **Partial payment:** Allocate partial amount → submit → Invoice remains PARTLY PAID → create 2nd receipt for remainder

4. **Cancel from IN PROGRESS:** Submit → IN PROGRESS → Cancel → Confirm → CANCELLED (no balance impact)

5. **Cancel from COMPLETED (if allowed):** Complete → Cancel → Confirm → CANCELLED → verify payment reversal

6. **Proof of payment upload:** Upload attachment in DRAFT → Submit → ensure file retained in IN PROGRESS/COMPLETED

7. **PDF watermark:** DRAFT PDF has watermark; COMPLETED PDF is official (no watermark)

8. **Validation:** Missing customer → error | Paid amount ≤ 0 → error | Missing payment method → error

9. **CLOSED is read-only:** Verify no actions available except Generate PDF

10. **Cancelled invoice:** Attempt Create Receipt from cancelled invoice → should be blocked/disabled

---

## Document Relationships

```
INVOICE (UNPAID / PARTLY PAID / OVERDUE)
    │
    └──> RECEIPT (DRAFT → IN PROGRESS → COMPLETED → CLOSED)
                    │
                    ├──> PDF / Proof of Payment
                    └──> Payment Allocation (Full/Partial)
```

**Receipt creation sources:**
- Invoice Detail Page (UNPAID/PARTLY PAID/OVERDUE)
- Receipts List Page (Standalone)
- Debit Note UNPAID Status (Payment Collection)

---

## Status Indicators

- **DRAFT:** 🟡 "Editable - Not Final"
- **IN PROGRESS:** 🟠 "Posting"
- **COMPLETED:** 🟢 "Payment Applied"
- **CLOSED:** 🔵 "Reconciled/Archived"
- **CANCELLED:** ⚫ "Voided"

---

## Best Practices

- Issue receipt immediately when payment is received
- Always link to invoice when payment is for a specific invoice
- Upload proof of payment at creation for auditability
- Use clear remarks for reconciliation (e.g., "Payment for Q1 invoice", "Advance for Order #12345")
- Double-check paid amount matches customer's payment before submitting
- Avoid cancelling completed receipts unless policy allows and reversal steps are clear

---

## FAQ

**Can I create a receipt from a cancelled invoice?** No. Blocked. Create standalone receipt and handle as credit.

**Can I edit a completed receipt?** No. Cancel (if allowed) and recreate.

**Does cancelling a receipt reverse the payment?** Yes. Cancellation voids the payment impact on customer balance and AR accounts.

**Can I record partial payments?** Yes. Allocate partial amount; invoice remains PARTLY PAID. Multiple receipts can be created for the same invoice.

**One receipt for multiple invoices?** Yes. Use payment references/allocations to split one receipt across multiple invoices.

---

## See Also

- [[Invoice Workflow Guide]]
- [[Debit Note Workflow Guide]]
- [[Receipt Test Cases Guide]]
- [[Sales Workspace Modules]]
