---
owner: Gareth
status: approved
last_reviewed: 2026-02-20
---

# MAIA Glossary

Canonical definitions for all MAIA product terms. Use this glossary to maintain consistent terminology across the KB and in client communication.

## Document Types

**Quotation**
- Formal price quote sent to customer
- Statuses: DRAFT, OPEN, ORDERED, LOST
- Aliases: Quote, QTN

**Sales Order (SO)**
- Confirmed customer order
- Statuses: DRAFT, TO BILL, HOLD, CLOSED, CANCELLED
- Aliases: Order, SO

**Invoice**
- Bill sent to customer for goods/services
- Statuses: DRAFT, UNPAID, PAID, CANCELLED
- Aliases: Bill, INV, SINV

**Credit Note (CN)**
- Document issuing credit to customer
- Used for: Returns, refunds, adjustments
- Statuses: DRAFT, OPEN, CLOSED, CANCELLED
- Aliases: CN, Credit Memo

**Debit Note (DN)**
- Document for additional charges to customer
- Used for: Post-invoice charges, corrections
- Aliases: DN, Debit Memo

**Receipt**
- Record of customer payment
- Statuses: DRAFT, SUBMITTED
- Aliases: Payment Receipt, RCV

**Delivery Note**
- Document tracking shipment/delivery
- Statuses: DRAFT, SUBMITTED
- Aliases: DN (context: delivery), Delivery Order

**Return Note**
- Document tracking customer returns
- Aliases: RN, Return Order

**Payment Voucher**
- Document for processing refunds
- Aliases: Voucher, Refund Voucher

---

## Statuses

**DRAFT**
- Document being prepared
- Can be edited and deleted
- Not submitted

**OPEN**
- Document submitted and active
- (Quotation, Credit Note)

**TO BILL**
- Sales Order awaiting invoice
- Active billing status

**HOLD**
- Sales Order temporarily paused
- Can be resumed to TO BILL

**UNPAID**
- Invoice submitted but not paid
- Awaiting payment

**PAID**
- Invoice fully paid
- Terminal status

**ORDERED**
- Quotation converted to Sales Order
- Terminal status for quotation

**LOST**
- Quotation declined by customer
- Terminal status

**CLOSED**
- Sales Order completed and closed
- Terminal status

**CANCELLED**
- Document cancelled with reason
- Terminal status

**SUBMITTED**
- Receipt or Delivery Note recorded
- Terminal status

---

## Workflows

**Quote-to-Cash**
- Complete business flow: Quotation → Sales Order → Invoice → Receipt
- Primary workflow in MAIA
- Aliases: Q2C, Order-to-Cash, O2C

**E2E (End-to-End)**
- Full workflow from start to finish
- Example: E2E PM ownership = requirement gathering through deployment

**Amend**
- Modify a submitted Sales Order
- Creates new version, preserves history

**Hold and Resume**
- Temporarily pause (HOLD) and restart (Resume) a Sales Order

---

## System Terms

**Workspace**
- Top-level module grouping in MAIA
- Three workspaces: Sales, Finance, Logistics

**Module**
- Functional area within a workspace
- Example: Quotations module, Invoices module

**Biller**
- Company/legal entity issuing documents
- Configured in system settings

**Item**
- Product or service sold
- Product master data

**Customer**
- B2B client purchasing goods/services
- Customer master data

**Payment Terms**
- Conditions for payment (e.g., Net 30, Net 60)

---

## PM Terms

**Requirement Gathering**
- Process of capturing client needs
- See: [[02 - PM Playbook/Processes/Requirement Gathering Process]]

**User Story**
- Feature specification for dev team
- Format: As a [role], I want [action], so that [benefit]

**Acceptance Criteria**
- Conditions that must be met for feature to be complete
- Format: Given-When-Then

**Gap**
- Missing functionality or limitation
- Types: Missing Requirement, Missing Build, Missing Capability

**Triage**
- Process of classifying new requests
- Categories: Product, Configuration, Custom

**ADR (Architecture Decision Record)**
- Document capturing important decisions
- See: [[07 - Decisions/Decision Log]]

---

## Abbreviations

| Abbreviation | Full Term | Context |
|--------------|-----------|---------|
| MAIA | [Product Name] | Order Management System |
| OMS | Order Management System | Product category |
| ERP | Enterprise Resource Planning | Product category |
| PM | Product Manager | Role |
| QA | Quality Assurance | Testing |
| UAT | User Acceptance Testing | Testing phase |
| KB | Knowledge Base | This documentation |
| SO | Sales Order | Document type |
| CN | Credit Note | Document type |
| DN | Debit Note OR Delivery Note | Document type (context-dependent) |
| RN | Return Note | Document type |
| Q2C | Quote-to-Cash | Workflow |
| E2E | End-to-End | Workflow scope |
| ADR | Architecture Decision Record | Decision documentation |

---

## See Also

- [[Tag Dictionary]] — Approved Obsidian tags
- [[01 - MAIA Product/Overview/Document Status Flows]] — Status definitions
- [[01 - MAIA Product/Overview/Workspaces Overview]] — Module organization
