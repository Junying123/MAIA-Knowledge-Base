---
owner: Gareth
status: draft
last_reviewed: 2026-02-20
---

# Receipt & Payment Workflows

Detailed workflows for recording customer payments in MAIA.

## Receipt Lifecycle

```
Create → DRAFT → Submit → SUBMITTED (Payment Recorded)
```

## Recording a Payment

### Process
1. Navigate to Sales → Receipts → New Receipt
2. Select customer
3. Select invoice(s) to pay
4. Enter payment details:
   - **Amount** — Payment amount
   - **Payment Method** — Cash, Bank Transfer, Cheque, Credit Card, etc.
   - **Payment Date** — When payment was received
   - **Reference Number** — Transaction ID, cheque number, etc.
5. Submit → Payment recorded
6. Invoice status updates to PAID (if fully paid) or partially paid

## Payment Methods

- Cash
- Bank Transfer
- Cheque
- Credit Card
- Debit Card
- Other

## Payment Scenarios

### Full Payment
- Customer pays entire invoice amount
- Invoice status → PAID

### Partial Payment
- Customer pays portion of invoice
- Invoice remains UNPAID but shows partial payment
- Can create multiple receipts for same invoice

### Overpayment
- Customer pays more than invoice amount
- Excess becomes credit balance for future invoices

## See Also

- [[Quote-to-Cash Flow]] — Full E2E workflow
- [[Invoice Workflows]] — Invoice management
- [[01 - MAIA Product/Sales Workspace/Payments/Receipts]] — Module details
- [[Document Status Flows]] — Status rules
