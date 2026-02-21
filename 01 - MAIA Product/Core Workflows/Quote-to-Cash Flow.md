---
owner: Gareth
status: approved
last_reviewed: 2026-02-20
lark_url:
---

# Quote-to-Cash Flow

The **Quote-to-Cash** workflow is the primary business flow in MAIA for B2B sales operations.

## Overview

```
1. Quotation  →  2. Sales Order  →  3. Invoice  →  4. Receipt
   (DRAFT→OPEN)     (DRAFT→TO BILL)    (DRAFT→UNPAID→PAID)
```

Supporting documents:
- **Credit Notes** — Returns, refunds, adjustments
- **Debit Notes** — Additional charges
- **Delivery Notes** — Shipment tracking
- **Payment Vouchers** — Refund processing

## Step-by-Step Workflow

### Step 1: Create Quotation

**Purpose:** Provide a formal price quote to the customer

**Process:**
1. Navigate to Sales → Quotations → New Quotation
2. Fill in required sections:
   - **Biller Information** — Select company/biller
   - **Customer Information** — Select customer
   - **Details** — Quotation date, valid until date, reference
   - **Items** — Add products/services with quantities and prices
   - **Summary** — Review totals (auto-calculated)
   - **Payment Terms** — Define payment conditions
3. Save as DRAFT
4. Review and Submit → Status changes to **OPEN**

**Status:** DRAFT → OPEN

**See:** [[Quotation Workflows]] for detailed quotation processes

---

### Step 2: Convert to Sales Order

**Purpose:** Customer accepts quotation, create a confirmed order

**Process:**
1. Open the OPEN quotation
2. Click "Convert to Sales Order"
3. System creates new Sales Order with all quotation data
4. Review Sales Order details
5. Submit → Status changes to **TO BILL**
6. Original quotation status changes to **ORDERED**

**Status:** Quotation becomes ORDERED, Sales Order becomes TO BILL

**See:** [[Sales Order Workflows]] for SO management

---

### Step 3: Create Invoice

**Purpose:** Bill the customer for delivered goods/services

**Process:**
1. Navigate to Sales Orders
2. Open the TO BILL sales order
3. Click "Create Invoice"
4. System creates new Invoice linked to SO
5. Review invoice details (delivery note can be created here)
6. Submit → Status changes to **UNPAID**
7. Sales Order status may change based on billing completion

**Status:** Invoice becomes UNPAID, SO status updates

**See:** [[Invoice Workflows]] for invoicing details

---

### Step 4: Record Payment (Receipt)

**Purpose:** Record customer payment against invoice

**Process:**
1. Navigate to Sales → Receipts → New Receipt
2. Select customer
3. Select invoice(s) to pay
4. Enter payment details:
   - Payment amount
   - Payment method (Cash, Bank Transfer, Cheque, etc.)
   - Payment date
   - Reference number
5. Submit → Receipt recorded
6. Invoice status changes to **PAID** (if fully paid)

**Status:** Invoice becomes PAID

**See:** [[Receipt & Payment Workflows]] for payment processing

---

## Alternative Paths

### Skip Quotation → Direct Sales Order
Some businesses allow direct Sales Order creation without quotation.

**Path:** Sales Order → Invoice → Receipt

### Skip Sales Order → Direct Invoice
For simple transactions or service billing.

**Path:** Invoice → Receipt

### Returns → Credit Note
Customer returns goods or requests refund.

**Path:** Invoice → Credit Note

**See:** [[Credit Note Workflows]]

---

## Document Relationships

```
Quotation (SAL-QTN-2025-00001)
    ↓
Sales Order (SAL-ORD-2025-00001)
    ↓
Invoice (ACC-SINV-2025-00001)
    ↓
Receipt (ACC-RCV-2025-00001)
```

Each document references its parent document for traceability.

---

## Common Scenarios

### Scenario 1: Perfect Flow (5 items)
1. Create Quotation with 5 items
2. Submit quotation (OPEN)
3. Convert to Sales Order (TO BILL)
4. Create Invoice (UNPAID)
5. Record Payment (PAID)

**Expected Time:** ~2-5 minutes

### Scenario 2: Partial Invoicing
1. Sales Order with 100 units
2. Create Invoice 1 for 30 units
3. Create Invoice 2 for 45 units
4. Create Invoice 3 for 25 units
5. Each invoice paid separately

**Note:** MAIA supports multiple invoices from single SO

### Scenario 3: Hold and Resume
1. Sales Order in TO BILL
2. Put on HOLD (temporary pause)
3. Resume to TO BILL when ready
4. Continue to Invoice

---

## Known Limitations

- ⚠️ Cannot create invoice directly from HOLD status (must resume first)
- ⚠️ Cannot create multiple credit notes from same invoice
- ✅ Can create multiple invoices from same sales order

**See:** [[01 - MAIA Product/Overview/Known Limitations]]

---

## See Also

- [[Quotation Workflows]] — Detailed quotation processes
- [[Sales Order Workflows]] — SO management and statuses
- [[Invoice Workflows]] — Invoicing and billing
- [[Credit Note Workflows]] — Returns and credits
- [[Receipt & Payment Workflows]] — Payment recording
- [[Document Status Flows]] — All status transitions
- [[04 - QA & Known Issues/Test Scenarios Index]] — Test scenarios for this flow
