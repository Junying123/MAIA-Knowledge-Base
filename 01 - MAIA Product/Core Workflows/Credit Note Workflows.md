---
owner: Gareth
status: draft
last_reviewed: 2026-02-20
---

# Credit Note Workflows

Detailed workflows for managing credit notes in MAIA.

## Visual Workflow Diagram

```mermaid
flowchart TD
    Start([Start: Credit Note]) --> CreateChoice{Credit Note Creation Method?}

    CreateChoice -->|Create New Credit Note| NewCN[Create New Credit Note]
    CreateChoice -->|From Invoice| InvoiceConvert[Convert from Invoice]

    NewCN --> CNDraft[📉 CREDIT NOTE<br/>Status: DRAFT]
    InvoiceConvert --> CNDraft

    CNDraft --> DraftActions{Select Action}

    %% Draft Action 1: Delete
    DraftActions -->|1. Delete| DeleteConfirm{Confirm Delete?}
    DeleteConfirm -->|Cancel| DraftActions
    DeleteConfirm -->|Confirm| CNDeleted[❌ Credit Note Deleted]
    CNDeleted --> End1([End: Removed from System])

    %% Draft Action 2: Submit
    DraftActions -->|2. Submit| SubmitCN[Submit Credit Note]
    SubmitCN --> CNOpen[📉 CREDIT NOTE<br/>Status: OPEN]

    %% Draft Action 3: Print PDF
    DraftActions -->|3. Print PDF| PrintDraft[Generate PDF]
    PrintDraft --> DraftActions

    %% Open Status Actions
    CNOpen --> OpenActions{Select Action<br/>3 Options}

    %% Open Action 1: Generate PDF
    OpenActions -->|1. Generate PDF| PrintOpen[Generate PDF]
    PrintOpen --> OpenActions

    %% Open Action 2: Cancel Credit Note
    OpenActions -->|2. Cancel Credit Note| CancelConfirm{Confirm Cancel?}
    CancelConfirm -->|Go Back| OpenActions
    CancelConfirm -->|Confirm Cancel| CNCancelled[📉 CREDIT NOTE<br/>Status: CANCELLED]
    CNCancelled --> End2([End: Credit Note Cancelled])

    %% Open Action 3: Create Voucher
    OpenActions -->|3. Create Voucher| CreateVoucher[🔄 Create Payment Voucher<br/>from Credit Note]
    CreateVoucher --> DataCarryOverVoucher[Transfer Credit Note Data:<br/>• Customer Info<br/>• Credit Amount<br/>• CN Reference]
    DataCarryOverVoucher --> VoucherUnsaved[💸 PAYMENT VOUCHER<br/>Status: UNSAVED CHANGES<br/>Reference: CN-XXX]
    VoucherUnsaved --> VoucherFlow([Continue to Payment Voucher Flow])

    %% Styling - Start/End Points
    style Start fill:#e1f5e1
    style End1 fill:#ffcdd2
    style End2 fill:#ffcdd2
    style VoucherFlow fill:#e1f5e1

    %% Styling - Credit Note Statuses
    style CNDraft fill:#fff9c4
    style CNOpen fill:#c8e6c9
    style CNCancelled fill:#ffcdd2
    style CNDeleted fill:#ffcdd2

    %% Styling - Created Documents
    style VoucherUnsaved fill:#e3f2fd

    %% Styling - Processes
    style InvoiceConvert fill:#e1f0ff
    style SubmitCN fill:#e1f0ff
    style CreateVoucher fill:#e1f0ff

    %% Styling - Data Transfer
    style DataCarryOverVoucher fill:#fff3e0

    %% Styling - Print Actions
    style PrintDraft fill:#f5f5f5
    style PrintOpen fill:#f5f5f5
```

## Creating a Credit Note

### From Invoice (Most Common)
1. Open an UNPAID or PAID invoice
2. Click "Create Credit Note"
3. System pre-fills invoice data
4. Select items and quantities to credit
5. Submit → OPEN

### Standalone Credit Note
**When:** Goodwill credit or promotional credit (no invoice reference)

1. Navigate to Sales → Credit Notes → New
2. Fill in customer and credit details
3. Submit → OPEN

## Credit Note Types

### Full Credit
- Credit the entire invoice amount
- Effectively voids the invoice

### Partial Credit
- Credit specific items or quantities
- Invoice remains valid for remaining amount

## Credit Note Application

**OPEN credit notes can be:**
1. **Applied to invoices** — Reduce customer balance
2. **Issued as refund** — Generate payment voucher

## Known Limitations

⚠️ **CRITICAL:** Cannot create multiple credit notes from same invoice

**Impact:**
- If customer returns items in multiple batches, only first batch can be credited
- All returns must be consolidated into single credit note

**Workaround:**
- Wait until all returns are complete before issuing credit note

**See:** [[01 - MAIA Product/Overview/Known Limitations]]

## See Also

- [[Quote-to-Cash Flow]] — Full E2E workflow
- [[Invoice Workflows]] — Invoice management
- [[01 - MAIA Product/Sales Workspace/Billing/Credit Notes]] — Module details
- [[Document Status Flows]] — Status rules
