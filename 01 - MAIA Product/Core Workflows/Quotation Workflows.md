---
owner: Gareth
status: draft
last_reviewed: 2026-02-20
---

# Quotation Workflows

Detailed workflows for managing quotations in MAIA.

## Visual Workflow Diagram

```mermaid
flowchart TD
    Start([Start: Create Quotation]) --> QuoteDraft[📄 QUOTATION<br/>Status: DRAFT]

    QuoteDraft --> DraftAction{Action?}

    DraftAction -->|Delete| QuoteDeleted[❌ Quotation Deleted]
    QuoteDeleted --> End1([End: Removed from System])

    DraftAction -->|Submit| QuoteOpen[📄 QUOTATION<br/>Status: OPEN]

    QuoteOpen --> OpenAction{Action?}

    OpenAction -->|Mark as Lost| QuoteLost[📄 QUOTATION<br/>Status: LOST]
    QuoteLost --> End2([End: Opportunity Lost])

    OpenAction -->|Convert to Sales Order| ConvertProcess[🔄 Create Sales Order<br/>from Quotation]

    ConvertProcess --> DataCarryOver[Transfer Data:<br/>• Biller & Customer Info<br/>• Items & Pricing<br/>• Payment Terms<br/>• Charges & Discounts]

    DataCarryOver --> SOCreated[📋 SALES ORDER<br/>Status: DRAFT<br/>Reference: QUOT-XXX]

    SOCreated --> QuoteStillOpen[📄 QUOTATION<br/>Status: OPEN<br/>⚠️ Status unchanged until SO submitted]

    SOCreated --> SODraftAction{SO Action?}

    SODraftAction -->|Edit SO| EditSO[Edit SO Details<br/>Status remains: DRAFT]
    EditSO --> SODraftAction

    SODraftAction -->|Submit SO| SOSubmit[Submit Sales Order]

    SOSubmit --> SOToBill[📋 SALES ORDER<br/>Status: TO BILL<br/>🔒 Locked - Cannot Edit]

    SOSubmit --> QuoteOrdered[📄 QUOTATION<br/>Status: ORDERED<br/>✅ Confirmed Order]

    SOToBill --> SONext([Continue to Invoice Flow...])
    QuoteOrdered --> End3([End: Quote Completed])

    %% Styling
    style Start fill:#e1f5e1
    style End1 fill:#ffcdd2
    style End2 fill:#ffcdd2
    style End3 fill:#c8e6c9
    style SONext fill:#e1f5e1

    style QuoteDraft fill:#fff9c4
    style QuoteOpen fill:#fff9c4
    style QuoteStillOpen fill:#fff9c4
    style QuoteLost fill:#ffcdd2
    style QuoteOrdered fill:#c8e6c9
    style QuoteDeleted fill:#ffcdd2

    style SOCreated fill:#fff9c4
    style EditSO fill:#fff9c4
    style SOToBill fill:#c8e6c9
    style ConvertProcess fill:#e1f0ff
    style DataCarryOver fill:#fff3e0
    style SOSubmit fill:#e1f0ff
```

## Creating a New Quotation

### Required Fields
- Quotation Date
- Biller (Company)
- Customer
- At least 1 item with quantity and price

### Optional Fields
- Valid Until Date
- Reference Number
- Payment Terms
- Notes/Remarks

### Sections to Complete
1. **Details** — Dates and reference
2. **Biller Information** — Company details
3. **Customer Information** — Customer selection
4. **Items** — Products/services
5. **Summary** — Totals (auto-calculated)
6. **Payment Terms** — Payment conditions

## Quotation Statuses

See [[01 - MAIA Product/Overview/Document Status Flows]] for detailed status transitions.

## Common Workflows

### Perfect Quotation Flow
1. Create quotation with all details
2. Save as DRAFT
3. Review totals and terms
4. Submit → OPEN
5. Convert to Sales Order → ORDERED

### Quotation with Revisions
1. Create DRAFT quotation
2. Customer requests changes
3. Edit quotation (still in DRAFT)
4. Adjust pricing/items
5. Submit → OPEN

### Lost Quotation
1. Customer declines quotation
2. Mark quotation as LOST
3. Quotation archived, cannot be edited

## See Also

- [[Quote-to-Cash Flow]] — Full E2E workflow
- [[01 - MAIA Product/Sales Workspace/Selling/Quotations]] — Module details
- [[Document Status Flows]] — Status rules
