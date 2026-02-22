---
owner: Gareth
status: draft
last_reviewed: 2026-02-20
---

# Invoice Workflows

Detailed workflows for managing invoices in MAIA.

## Visual Workflow Diagram

```mermaid
flowchart TD
    Start([Start: Invoice]) --> CreateChoice{Invoice Creation Method?}

    CreateChoice -->|Create New Invoice| NewInvoice[Create New Invoice]
    CreateChoice -->|From Sales Order| SOConvert[Convert from Sales Order]

    NewInvoice --> InvoiceDraft[🧾 INVOICE<br/>Status: DRAFT]
    SOConvert --> InvoiceDraft

    InvoiceDraft --> DraftActions{Select Action}

    %% Draft Action 1: Delete
    DraftActions -->|1. Delete| DeleteConfirm{Confirm Delete?}
    DeleteConfirm -->|Cancel| DraftActions
    DeleteConfirm -->|Confirm| InvoiceDeleted1[❌ Invoice Deleted]
    InvoiceDeleted1 --> End1([End: Removed from System])

    %% Draft Action 2: Submit
    DraftActions -->|2. Submit| SubmitInvoice[Submit Invoice]
    SubmitInvoice --> InvoiceUnpaid[🧾 INVOICE<br/>Status: UNPAID]

    %% Draft Action 3: Print PDF
    DraftActions -->|3. Print PDF| PrintDraft[Generate PDF]
    PrintDraft --> DraftActions

    %% Unpaid Status Actions
    InvoiceUnpaid --> UnpaidActions{Select Action<br/>7 Options}

    %% Unpaid Action 1: Cancel Invoice
    UnpaidActions -->|1. Cancel Invoice| CancelConfirm{Confirm Cancel?}
    CancelConfirm -->|Go Back| UnpaidActions
    CancelConfirm -->|Confirm Cancel| InvoiceCancelled[🧾 INVOICE<br/>Status: CANCELLED]
    InvoiceCancelled --> End2([End: Invoice Cancelled])

    %% Unpaid Action 2: Delete
    UnpaidActions -->|2. Delete| DeleteUnpaidConfirm{Confirm Delete?}
    DeleteUnpaidConfirm -->|Cancel| UnpaidActions
    DeleteUnpaidConfirm -->|Confirm| InvoiceDeleted2[❌ Invoice Deleted]
    InvoiceDeleted2 --> End3([End: Removed from System])

    %% Unpaid Action 3: Create Receipt
    UnpaidActions -->|3. Create Receipt| CreateReceipt[🔄 Create Receipt from Invoice]
    CreateReceipt --> DataCarryOverReceipt[Transfer Invoice Data:<br/>• Customer Info<br/>• Payment Amount<br/>• Invoice Reference]
    DataCarryOverReceipt --> ReceiptDraft[💰 RECEIPT<br/>Status: DRAFT<br/>Reference: INV-XXX]
    ReceiptDraft --> ReceiptFlow([Continue to Receipt Flow])

    %% Unpaid Action 4: Create Debit Note
    UnpaidActions -->|4. Create Debit Note| CreateDebitNote[🔄 Create Debit Note from Invoice]
    CreateDebitNote --> DataCarryOverDN[Transfer Invoice Data:<br/>• Customer Info<br/>• Items & Pricing<br/>• Invoice Reference]
    DataCarryOverDN --> DebitNoteDraft[📈 DEBIT NOTE<br/>Status: DRAFT<br/>Reference: INV-XXX]
    DebitNoteDraft --> DebitNoteFlow([Continue to Debit Note Flow])

    %% Unpaid Action 5: Create Credit Note
    UnpaidActions -->|5. Create Credit Note| CreateCreditNote[🔄 Create Credit Note from Invoice]
    CreateCreditNote --> DataCarryOverCN[Transfer Invoice Data:<br/>• Customer Info<br/>• Items & Pricing<br/>• Invoice Reference]
    DataCarryOverCN --> CreditNoteDraft[📉 CREDIT NOTE<br/>Status: DRAFT<br/>Reference: INV-XXX]
    CreditNoteDraft --> CreditNoteFlow([Continue to Credit Note Flow])

    %% Unpaid Action 6: Create Delivery Note
    UnpaidActions -->|6. Create Delivery Note| CreateDN[🔄 Create Delivery Note from Invoice]
    CreateDN --> DataCarryOverDeliver[Transfer Invoice Data:<br/>• Customer Info<br/>• Items & Quantities<br/>• Delivery Address]
    DataCarryOverDeliver --> DNDraft[📦 DELIVERY NOTE<br/>Status: DRAFT<br/>Reference: INV-XXX]
    DNDraft --> DNFlow([Continue to Delivery Note Flow])

    %% Unpaid Action 7: Print PDF
    UnpaidActions -->|7. Print PDF| PrintUnpaid[Generate PDF]
    PrintUnpaid --> UnpaidActions

    %% Styling - Start/End Points
    style Start fill:#e1f5e1
    style End1 fill:#ffcdd2
    style End2 fill:#ffcdd2
    style End3 fill:#ffcdd2
    style ReceiptFlow fill:#e1f5e1
    style DebitNoteFlow fill:#e1f5e1
    style CreditNoteFlow fill:#e1f5e1
    style DNFlow fill:#e1f5e1

    %% Styling - Invoice Statuses
    style InvoiceDraft fill:#fff9c4
    style InvoiceUnpaid fill:#ffecb3
    style InvoiceCancelled fill:#ffcdd2
    style InvoiceDeleted1 fill:#ffcdd2
    style InvoiceDeleted2 fill:#ffcdd2

    %% Styling - Created Documents
    style ReceiptDraft fill:#e3f2fd
    style DebitNoteDraft fill:#f3e5f5
    style CreditNoteDraft fill:#fce4ec
    style DNDraft fill:#e8f5e9

    %% Styling - Processes
    style SOConvert fill:#e1f0ff
    style SubmitInvoice fill:#e1f0ff
    style CreateReceipt fill:#e1f0ff
    style CreateDebitNote fill:#e1f0ff
    style CreateCreditNote fill:#e1f0ff
    style CreateDN fill:#e1f0ff

    %% Styling - Data Transfer
    style DataCarryOverReceipt fill:#fff3e0
    style DataCarryOverDN fill:#fff3e0
    style DataCarryOverCN fill:#fff3e0
    style DataCarryOverDeliver fill:#fff3e0

    %% Styling - Print Actions
    style PrintDraft fill:#f5f5f5
    style PrintUnpaid fill:#f5f5f5
```

## Creating an Invoice

### From Sales Order (Recommended)
1. Open a TO BILL sales order
2. Click "Create Invoice"
3. System pre-fills all SO data
4. Optional: Create Delivery Note simultaneously
5. Submit → UNPAID

### Direct Invoice (No SO)
1. Navigate to Sales → Invoices → New
2. Fill in all required fields manually
3. Submit → UNPAID

### Partial Invoicing
- MAIA supports **multiple invoices from single SO**
- Invoice partial quantities across multiple invoices
- Each invoice tracks remaining unbilled quantities

**Example:**
- SO: 100 units
- Invoice 1: 30 units
- Invoice 2: 45 units
- Invoice 3: 25 units (completes SO)

## Invoice Statuses

See [[01 - MAIA Product/Overview/Document Status Flows]] for detailed status transitions.

## Key Operations

### Cancel Invoice
**When:** Invoice was issued in error or needs to be voided

**Process:**
1. Open UNPAID invoice
2. Click "Cancel"
3. Enter cancellation reason (required)
4. Status changes to CANCELLED
5. Customer balance is adjusted

**Note:** ⚠️ Cannot delete UNPAID invoices — must cancel instead

### Create Credit Note
**When:** Customer returns goods or requests refund

**See:** [[Credit Note Workflows]]

### Create Debit Note
**When:** Additional charges need to be added after invoicing

**See:** [[01 - MAIA Product/Sales Workspace/Billing/Debit Notes]]

## See Also

- [[Quote-to-Cash Flow]] — Full E2E workflow
- [[01 - MAIA Product/Sales Workspace/Billing/Invoices]] — Module details
- [[Document Status Flows]] — Status rules
- [[Receipt & Payment Workflows]] — Recording payments
