---
owner: Gareth
status: draft
last_reviewed: 2026-02-20
---

# Sales Order Workflows

Detailed workflows for managing sales orders in MAIA.

## Visual Workflow Diagram

```mermaid
flowchart TD
    Start([Start: Sales Order]) --> CreateChoice{SO Creation Method?}

    CreateChoice -->|Create New SO| NewSO[Create New Sales Order]
    CreateChoice -->|From Quotation| QuoteConvert[Continue SO from<br/>Converted Quotation]

    NewSO --> SODraft[📋 SALES ORDER<br/>Status: DRAFT]
    QuoteConvert --> SODraft

    SODraft --> DraftAction{Action?}

    DraftAction -->|Delete| SODeleted[❌ Sales Order Deleted]
    SODeleted --> End1([End: Removed from System])

    DraftAction -->|Submit| SOToBill[📋 SALES ORDER<br/>Status: TO BILL<br/>🔒 Locked]

    SOToBill --> ToBillActions{Select Action?<br/>6 Options Available}

    %% Action 1: Hold
    ToBillActions -->|1. Hold| HoldConfirm{Confirm Hold?}
    HoldConfirm -->|Cancel| ToBillActions
    HoldConfirm -->|Confirm| SOHold[📋 SALES ORDER<br/>Status: HOLD<br/>⏸️ Paused]

    SOHold --> HoldActions{Action?}
    HoldActions -->|Resume| SOToBill
    HoldActions -->|Create Delivery Note| CreateDNFromHold[🔄 Create Delivery Note<br/>from SO]

    CreateDNFromHold --> DNDraftFromHold[📦 DELIVERY NOTE<br/>Status: DRAFT<br/>Reference: SO-XXX]

    DNDraftFromHold --> DNFlow1([Continue to DN Flow...])

    %% Action 2: Close
    ToBillActions -->|2. Close| CloseConfirm{Confirm Close?}
    CloseConfirm -->|Cancel| ToBillActions
    CloseConfirm -->|Confirm| SOClosed[📋 SALES ORDER<br/>Status: CLOSED<br/>✅ Completed]

    SOClosed --> ClosedAction{Action?}
    ClosedAction -->|Reopen| SOToBill

    %% Action 3: Amend
    ToBillActions -->|3. Amend| SOAmendMode[📋 SALES ORDER<br/>Status: TO BILL<br/>✏️ Edit Mode Enabled]

    SOAmendMode --> MakeChanges[Edit SO Details<br/>Items/Quantities/Prices/etc.]
    MakeChanges --> SOUnsaved[📋 SALES ORDER<br/>Status: UNSAVED CHANGE<br/>⚠️ Changes Pending]

    SOUnsaved --> UnsavedAction{Action?}
    UnsavedAction -->|Amend Changes| SaveAmend[💾 Save Changes]
    UnsavedAction -->|Cancel Amend| DiscardAmend[🚫 Discard Changes]

    SaveAmend --> SOToBill
    DiscardAmend --> SOToBill

    %% Action 4: Cancel
    ToBillActions -->|4. Cancel| CancelConfirm{Confirm Cancel?}
    CancelConfirm -->|Go Back| ToBillActions
    CancelConfirm -->|Confirm Cancel| SOCancelled[📋 SALES ORDER<br/>Status: CANCELLED<br/>❌ Order Void]

    SOCancelled --> End2([End: Order Cancelled])

    %% Action 5: Convert to Invoice
    ToBillActions -->|5. Convert to Invoice| ConvertInvoice[🔄 Create Invoice<br/>from SO]

    ConvertInvoice --> DataCarryOverInv[Transfer Data:<br/>• Biller & Customer Info<br/>• Items & Pricing<br/>• Payment Terms<br/>• Reference to SO]

    DataCarryOverInv --> InvoiceDraft[🧾 INVOICE<br/>Status: DRAFT<br/>Reference: SO-XXX]

    InvoiceDraft --> InvoiceFlow2([Continue to Invoice Flow...])

    %% Action 6: Create Delivery Note
    ToBillActions -->|6. Create Delivery Note| CreateDN[🔄 Create Delivery Note<br/>from SO]

    CreateDN --> DataCarryOverDN[Transfer Data:<br/>• Biller & Customer Info<br/>• Items & Quantities<br/>• Delivery Address<br/>• Reference to SO]

    DataCarryOverDN --> DNDraft[📦 DELIVERY NOTE<br/>Status: DRAFT<br/>Reference: SO-XXX]

    DNDraft --> DNFlow2([Continue to DN Flow...])

    %% Styling
    style Start fill:#e1f5e1
    style End1 fill:#ffcdd2
    style End2 fill:#ffcdd2
    style InvoiceFlow2 fill:#e1f5e1
    style DNFlow1 fill:#e1f5e1
    style DNFlow2 fill:#e1f5e1

    style SODraft fill:#fff9c4
    style SOToBill fill:#c8e6c9
    style SODeleted fill:#ffcdd2

    style SOHold fill:#fff3e0
    style SOClosed fill:#e8eaf6
    style SOAmendMode fill:#fff9c4
    style SOUnsaved fill:#ffecb3
    style SOCancelled fill:#ffcdd2

    style InvoiceDraft fill:#e3f2fd
    style DNDraft fill:#f3e5f5
    style DNDraftFromHold fill:#f3e5f5

    style ConvertInvoice fill:#e1f0ff
    style CreateDN fill:#e1f0ff
    style CreateDNFromHold fill:#e1f0ff
    style DataCarryOverInv fill:#fff3e0
    style DataCarryOverDN fill:#fff3e0
    style SaveAmend fill:#c8e6c9
    style DiscardAmend fill:#ffcdd2
```

## Creating a Sales Order

### From Quotation (Recommended)
1. Open an OPEN quotation
2. Click "Convert to Sales Order"
3. System pre-fills all quotation data
4. Review and adjust if needed
5. Submit → TO BILL

### Direct Sales Order
1. Navigate to Sales → Sales Orders → New
2. Fill in all required fields manually
3. Submit → TO BILL

## Sales Order Statuses

See [[01 - MAIA Product/Overview/Document Status Flows]] for detailed status transitions.

## Key Operations

### Amend Sales Order
**When:** SO is in TO BILL and needs changes

**Process:**
1. Open the TO BILL sales order
2. Click "Amend"
3. Status changes to UNSAVED
4. Make changes (items, quantities, prices)
5. Submit → Returns to TO BILL

**Note:** Amendments create a new version, original remains in history

### Hold and Resume
**When:** Temporarily pause an order

**Process:**
1. Open TO BILL sales order
2. Click "Hold"
3. Status changes to HOLD
4. To resume: Click "Resume"
5. Status returns to TO BILL

**Limitation:** ⚠️ Cannot create invoice directly from HOLD — must resume first

### Close Sales Order
**When:** Order is complete (fully invoiced and delivered)

**Process:**
1. Open TO BILL sales order
2. Click "Close"
3. Status changes to CLOSED
4. Order is archived, cannot be modified

### Cancel Sales Order
**When:** Customer cancels order or order cannot be fulfilled

**Process:**
1. Open TO BILL sales order
2. Click "Cancel"
3. Enter cancellation reason (required)
4. Status changes to CANCELLED
5. If quotation exists, quotation reverts to OPEN

## See Also

- [[Quote-to-Cash Flow]] — Full E2E workflow
- [[01 - MAIA Product/Sales Workspace/Selling/Sales Orders]] — Module details
- [[Document Status Flows]] — Status rules
- [[01 - MAIA Product/Overview/Known Limitations]] — Known issues
