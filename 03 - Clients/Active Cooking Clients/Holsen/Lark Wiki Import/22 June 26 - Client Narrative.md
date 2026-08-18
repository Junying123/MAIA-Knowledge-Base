<title>22 June 26 - Client Narrative</title>

## Source Coverage

<sheet sheet-id="3sfD3i" token="D59PsACDUhuJBQtwHxulERfvgbg"></sheet>

## Discovery Gaps to Close

1. Confirm the public operating-volume figure: “170–200 invoices” versus “70–90 POs daily.”
2. Confirm whether A57 should appear as a live workflow, a supported-but-not-current workflow, or a future consideration.
3. Confirm whether the RM48,000 Phase A figure should remain in the client-facing narrative.
4. Confirm the status of the UBS-to-SQL Accounting migration before making any current claim about timing.
5. Confirm whether the term “compliance enforcement” is acceptable client-facing language, or whether Holsen prefers “compliance control and auditability.”
6. Confirm the exact UBS export format required for bulk invoice creation.
7. Confirm whether the Phase 1 utilisation ledger is expected at Sales Order level only, or whether any Delivery Note-level utilisation is now expected.

# MAIA for Holsen

### A compliance-grade operating layer for tax-exempt chemical sales, certificate control, and audit-ready order traceability

*Prepared by Mindhive for Holsen Interchem Sdn. Bhd.*  
*Investment: RM48,000*

## Who Holsen Is

Holsen is not a simple trading company with a simple order flow.

It operates in chemical supplies and manufacturing, where an order is not just a customer, an item, a quantity, and a price. An order can also carry tax-exemption status, certificate ownership, HS-code eligibility, quota entitlement, batch allocation, K1 references, COA documents, poison-form requirements, and customer-specific document rules.

That is the business reality MAIA has to respect.

Holsen currently uses UBS as its accounting system. UBS remains part of the accounting and e-invoicing workflow, but it is not directly integrated with MAIA for this implementation. MAIA’s role is different: it becomes the operational order and invoicing layer, generating invoices and exporting structured invoice data so Holsen can bulk-create invoices inside UBS.

That distinction matters.

MAIA is not being deployed to rip out UBS.

MAIA is being deployed because UBS does not solve the operational control problem around tax-exempt chemical sales.

The important work happens before accounting: receiving the PO, recognising the certificate, extracting the certificate data, checking the customer, checking the HS code, applying tax treatment only to eligible SKU lines, tracking quota utilisation, and preserving the audit trail.

That is the system.

Here is the problem.

## Before MAIA — How Holsen Operates Today

Holsen does not have a normal invoicing problem.

It has a compliance-control problem sitting inside its order workflow.

The dangerous mistake would be treating this as “customer has tax exemption, therefore apply zero tax.” That is too shallow. For Holsen, tax exemption depends on certificate type, certificate owner, customer relationship, item eligibility, HS code, quota, and whether the stock is allowed to be sold to that customer.

When those controls live across UBS, manual judgement, document folders, spreadsheets, and operational memory, the risk is not just inefficiency.

The risk is creating an order that looks administratively complete but is weak under audit.

### C1 is not a customer flag

C1 is offered to customers buying manufactured goods, but it is not a blanket “tax-free customer” label.

Holsen needs the latest C1 certificate, the customer’s item list, and the relevant tariff codes. The order can be treated as tax exempt only when the customer has an active C1 and the ordered manufactured goods match the certificate’s tariff-code coverage.

That creates a line-level problem.

The same customer may be eligible for one manufactured item and not another. A system that only checks the customer will get the answer wrong.

### C3 is customer + item + quantity

C3 is even more specific.

It is not “this item is C3.”

It is “this item is C3 for this customer, for this approved quantity.”

That means Holsen cannot safely treat C3 as a generic item tag. C3 requires a PO, a certificate after approval, a customer-specific reservation, and fulfilment checks against item, customer, and quota.

If the wrong customer consumes C3 stock, the system has not merely made a stock mistake.

It has broken the tax-exempt allocation logic.

### The certificate is the control point

For Holsen, the certificate is not a PDF attachment at the end of a transaction.

It is the source of the order’s tax logic.

A certificate can define the owner, the applicable customer or party, the issuing body, the certificate number, the effective period, the expiry period, the HS-code table, the eligible item descriptions, the quantity or quota entitlement, and any conditions that govern how exemption can be used.

The HS-code and item table is the critical part.

Tax treatment must happen at the individual sales-order line, not at the order header and not at the customer header.

### Mixed orders expose the weakness of manual tax handling

Customers do not necessarily separate their orders according to Holsen’s compliance logic.

A single PO may contain C1-covered items, C3-covered items, taxable items, and items that require user review. The customer may not know or care which exemption route applies.

That puts the burden on Holsen.

If Holsen’s team has to manually interpret every certificate and every SKU line, the workflow becomes slow, brittle, and dependent on specialist memory. If the system applies one tax setting across the whole order, the workflow becomes faster but wrong.

Neither answer is acceptable.

### Quota utilisation is not a reporting nicety

Some C1, C3, or A57-related documents require utilisation tracking.

That ledger matters because, during audit, Holsen or the relevant party may need to prove how much tax-exempt quantity was purchased, sold, or delivered under a specific certificate.

A normal report is not enough.

Holsen needs an audit-oriented utilisation record that can connect certificate, customer, SKU or HS code, sales order, and — once delivery-side logic is built — delivery note.

Without that, the audit trail has to be reconstructed after the fact.

### Batch and warehouse enforcement are the next layer, not a footnote

The latest dossier identifies a deeper delivery-side requirement: tax-exempt and non-tax-exempt goods may need to be physically separated, even where they are effectively the same product.

That has significant implications.

Future delivery-side logic may need batch-level exemption tagging, separate warehouse locations, delivery-note-based utilisation updates, enforcement that only eligible batches are delivered to eligible customers, and traceability from certificate to sales order to delivery note to batch to warehouse location.

That is not a minor extension.

It is a warehouse and compliance module in its own right, and it should not be casually bundled into the initial order-layer work.

### UBS is necessary, but not enough

UBS remains part of Holsen’s accounting path, but it has no available API integration path for this implementation.

That creates a clear boundary.

MAIA cannot be designed as though it can push everything directly into UBS and read everything back automatically. The practical requirement is for MAIA to generate invoices, export structured invoice data, and allow Holsen to bulk-create invoices inside UBS.

Re-ingesting UBS e-invoice metadata back into MAIA is deferred and may not be worth building if Holsen migrates from UBS to SQL Accounting before it becomes operationally necessary.

The wrong design would over-invest in UBS-specific plumbing.

The right design is to make MAIA the operational source of order truth, then export what UBS needs.

## After MAIA — What Changes

MAIA does not replace UBS.

MAIA replaces the unstructured control layer around UBS.

A customer PO enters MAIA with its supporting attachments. Those attachments may include C1, C3, or A57-related certificates. MAIA classifies the attachment type, extracts certificate metadata, stores the certificate, links it to the correct owner and customer relationship, and uses it to determine whether each sales-order line should be tax exempt, taxable, or flagged for review.

The user remains in the seat.

MAIA does not make the legal decision for Holsen. It structures the evidence, applies the configured eligibility checks, and prevents obvious operational mistakes from passing silently.

A sales user no longer sees only a customer and a product.

They see whether the customer is eligible, whether the certificate exists, whether the certificate belongs to the correct party, whether the certificate is valid for the relationship, whether the SKU maps to an eligible HS code or item description, whether quota tracking is required, and whether sufficient quota remains.

If the certificate and SKU eligibility are valid, MAIA can create the sales order with tax exemption on the eligible lines.

If only some lines are eligible, only those lines receive the exemption.

If the item is not covered, the system does not bury the issue. It keeps the item taxable or flags it for user review.

That is the core change.

Holsen stops treating tax exemption as a manual interpretation exercise and starts treating it as a structured operational control.

A finance user receives an order where the tax treatment is no longer detached from its evidence. The certificate, the customer, the HS-code logic, the sales-order line, and the utilisation position are connected before invoice data leaves MAIA.

MAIA then generates the invoice and exports the structured file needed for UBS bulk invoice creation.

The UBS e-invoicing workflow remains intact.

The operational logic becomes cleaner before UBS ever receives the invoice.

A compliance or operations user can later review utilisation by certificate, SKU or HS code, customer, sales order, and — when delivery-side logic is built — delivery note. The ledger is not just a dashboard. It is the record Holsen needs when it has to explain what tax-exempt quantity was consumed, by whom, against which certificate, and under what basis.

A warehouse or logistics user eventually benefits from the same structure downstream.

Today, full delivery-side enforcement is deferred. But the model is already pointing in the right direction: certificate to sales order, sales order to delivery note, delivery note to batch, batch to warehouse location.

That is the architecture Holsen needs.

Not just order processing.

Audit-ready order control.

## Feature Deep Dive

### PO upload with certificate attachment handling

**What it does**  
MAIA accepts customer POs with supporting attachments and classifies whether the attachment is C1, C3, or A57-related.

**What it won’t do**  
It will not assume every uploaded document is valid, current, or applicable to the order.

**Why it matters**  
For Holsen, the certificate is not back-office paperwork. It is the evidence that drives tax treatment.

### Certificate metadata extraction

**What it does**  
MAIA extracts and stores certificate metadata: certificate owner, customer or party, issuing body, certificate number, dates, validity period, HS-code table, item descriptions, eligibility, quota entitlement, and certificate-specific remarks where available.

**What it won’t do**  
It will not make poor-quality scans or ambiguous certificate tables magically certain. Users still need to review and correct extracted data where required.

**Why it matters**  
The HS-code and item table determines whether exemption applies at SKU-line level. Without extraction, the tax rule stays trapped inside a PDF.

### SKU-level tax-exemption enforcement

**What it does**  
MAIA validates whether each sales-order line is eligible for tax exemption based on customer eligibility, certificate ownership, HS-code or item mapping, validity, quota, and remaining entitlement.

**What it won’t do**  
It will not apply zero tax to an entire order just because the customer has one certificate.

**Why it matters**  
Mixed orders are normal. The system must handle partial exemption without corrupting the whole order.

### C1 customer and tariff-code control

**What it does**  
MAIA supports the C1 workflow by checking whether the customer has an active C1 certificate and whether the ordered manufactured goods match the relevant tariff-code coverage.

**What it won’t do**  
It will not treat C1 as a perpetual blanket exemption across every item.

**Why it matters**  
C1 reduces operational complexity only if the correct tariff-code coverage is present. Otherwise, it becomes a false shortcut.

### C3 customer + item + quota control

**What it does**  
MAIA supports C3 as a customer-specific, item-specific, quantity-specific exemption flow. It links PO, certificate, customer, item, and approved quota.

**What it won’t do**  
It will not allow “Item X is C3” as a generic rule detached from customer and quota.

**Why it matters**  
C3 stock must not be consumed by the wrong customer. The control must exist before fulfilment.

### Quota / utilisation ledger

**What it does**  
MAIA supports a ledger concept for tracking tax-exempt quantity utilisation by certificate, SKU or HS code, customer, sales order, and later delivery note.

**What it won’t do**  
It will not pretend a simple report is the same thing as an audit-grade utilisation record.

**Why it matters**  
During audit, Holsen needs to show what exemption was used, by whom, for which item, against which certificate, and how much entitlement remains.

### UBS invoice export

**What it does**  
MAIA generates invoices and exports invoice data into a structured file that Holsen can use to bulk-create invoices inside UBS.

**What it won’t do**  
It will not push invoices directly into UBS through an API in this implementation.

**Why it matters**  
This keeps the implementation aligned with UBS reality. MAIA becomes the operational source of truth; UBS remains the accounting and e-invoicing path.

### Deferred delivery-side and warehouse enforcement

**What it does**  
The architecture anticipates future delivery-side traceability: batch-level exemption tagging, warehouse segregation, delivery-note-based utilisation, and traceability from certificate to batch and warehouse location.

**What it won’t do**  
It will not deliver full warehouse segregation, batch/location-level audit enforcement, or DN-led quota updates unless separately scoped and built.

**Why it matters**  
This protects Holsen from under-scoping the hardest part. Delivery-side compliance is significant enough to be treated as its own module.

## Scope Summary

### Included in RM48,000

**Phase A1 — RM24,000**

Phase A1 establishes the core MAIA operating foundation: sales and logistics chatbots, WhatsApp and email order intake, user workspaces, role-specific approval, quotation, sales order, picking list, delivery order, invoice generation, customer-specific pricing, and the baseline order-to-delivery-note flow.

**Phase A3 — RM24,000**

Phase A3 introduces the compliance layer: batch intake, batch eligibility enforcement, C1 / C3 / LMW / poison rules, COA handling, C3 and K1 file handling, and the controls needed to support Holsen’s tax-exempt order workflow.

### Included / Active Expectation from Latest Dossier

MAIA invoice generation.

Invoice export file for UBS bulk invoice creation.

PO upload with certificate attachment handling.

C1 / C3 / A57 certificate classification.

Certificate metadata extraction.

Certificate storage and linkage to owner and customer.

SKU-level tax-exemption enforcement using HS-code and certificate data.

Tax-exempt sales-order creation where eligible.

Quota / utilisation ledger concept for tax-exempt transactions.

### Designed For, Not Included Yet

Direct SQL Accounting integration, once Holsen’s migration path and vendor capabilities are confirmed.

Delivery-note-based utilisation tracking.

Ledger updates based on actual shipped quantities.

Batch-level exemption tagging.

Separate stock locations for exempt and non-exempt goods.

Enforcement that only eligible batches are delivered to eligible customers.

Full certificate → sales order → delivery note → batch → warehouse-location audit traceability.

### Requires Clarification

Whether A57 is expected as a live workflow or a future-compatible certificate type.

Whether utilisation is required at Sales Order level only for Phase 1.

Whether UBS e-invoice metadata ever needs to be re-ingested into MAIA.

Whether Holsen’s SQL Accounting migration makes further UBS-specific work unnecessary.

Which compliance terms Holsen wants used in client-facing material.

Which operating-volume number should be used.

### Not in Scope

Direct UBS API integration.

Re-ingesting UBS e-invoice metadata back into MAIA.

Full delivery-side batch enforcement.

Warehouse segregation enforcement.

Delivery-note-based quota-ledger updates.

Batch/location-level audit module.

Automated legal determination of tax status.

Automatic order approval, automatic pricing approval, or automatic compliance sign-off.

## The Design Principle

Holsen does not need MAIA to behave like a generic sales bot.

Holsen needs MAIA to behave like a controlled operating layer for a regulated chemical workflow.

The order starts with a PO.

The PO brings certificates.

The certificates contain the tax logic.

The tax logic applies at SKU-line level.

The SKU-line treatment consumes entitlement.

The entitlement must remain auditable.

That is the system MAIA is being built around.

Not speed for its own sake.

Controlled speed.

MAIA structures the evidence, applies the configured checks, and preserves the trail. Holsen’s people remain the decision-makers.

*MAIA structures the workflow. Holsen remains accountable for the decision.*
