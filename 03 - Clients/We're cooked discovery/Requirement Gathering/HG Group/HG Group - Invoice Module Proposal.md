---
owner: Gareth
status: draft
last_reviewed: 2026-04-25
lark_url:
---

# HG Group — Invoice Module Proposal

## Overview

This document proposes the Invoice module design for HG Services (M) Sdn Bhd, grounded in Black's operating rule from the RG session: **invoice and payment are the release gate for execution spend.**

> *"No invoice number is not a valid job."*  
> *"Finance will just see the invoice and the payment. No payment... any expenses related to this job will not be released."*  
> — Black, RG Transcript, 23 Apr 2026

The design objective is to eliminate invoice reconstruction from chat and enforce a clear Quote → Sales Order → Invoice → Payment control chain.

---

## The Problem: Today's Invoicing Story

Today's operational pattern:

```
Quote shared in WhatsApp group
     ↓
Client confirms in chat
     ↓
Team reconstructs invoice details into Infotech
     ↓
Finance checks invoice + payment manually
     ↓
Spend release depends on follow-up pressure
```

### Core pain points from Black's story

1. **Invoice validity gate exists, but system linkage is weak**  
   The rule is strict ("no invoice number, no job"), but quote/scope proof often lives in chat.

2. **Manual reconstruction risk**  
   Scope details can be fragmented across WhatsApp threads, creating mismatch risk.

3. **Payment gating depends on chasing**  
   Finance control exists, but execution teams still rely on manual follow-up signals.

4. **Slow visibility for exceptions**  
   Questions like "which jobs are confirmed but still unpaid?" require checking multiple places.

---

## Proposed Invoice Flow (After MAIA)

```
Quotation accepted
     ↓
Convert to Sales Order (source of truth for scope and amounts)
     ↓
Create Invoice from Sales Order (no re-entry)
     ↓
Invoice number generated
     ↓
Payment received and recorded
     ↓
Job release gate opened (WO execution spend allowed)
```

This enforces Black's rule as a system behavior, not only a team habit.

---

## Proposed Invoice Form Design

### Section 1 — Invoice Header

| Field | Type | Behaviour |
|---|---|---|
| Invoice No. | Auto | `HG-INV-2026-NNNN` |
| Posting Date | Date | Defaults to today |
| Due Date | Date | Defaults per payment term |
| Customer | Link | Auto from Sales Order |
| Contact Person | Link | Auto from customer |
| Sales Order | Link | Mandatory source link |
| Work Order (optional) | Link | If WO already exists |
| Currency | Select | Default MYR |
| Payment Terms | Select | Default CIA (Cash in Advance) |
| Remarks | Long Text | Internal commercial notes |

---

### Section 2 — Line Items (From Sales Order)

| Field | Type | Behaviour |
|---|---|---|
| Item | Link | Carried from Sales Order |
| Description | Text | Carried from Sales Order |
| Qty | Number | Carried from Sales Order |
| Rate | Currency | Carried from Sales Order |
| Amount | Currency | Auto-calculated |
| Tax | Auto/manual | Per configured rules |
| Grand Total | Auto | Final bill value |

**Control principle:** no manual retyping from chat. Invoice lines must flow from approved Sales Order.

---

### Section 3 — Payment & Control Fields

| Field | Type | Behaviour |
|---|---|---|
| Payment Status | Select | Unpaid / Partially Paid / Paid |
| Amount Received | Currency | Updated via Receipt |
| Balance | Currency | Auto |
| Payment Proof | Attachment | Bank slip or reference |
| Spend Release Status | Select | Blocked / Released |
| Finance Approval Note | Text | Optional internal comment |

`Spend Release Status` remains `Blocked` until payment rule is satisfied.

---

## Invoice Actions

| Action | When | What Happens |
|---|---|---|
| **Create Invoice from SO** | SO confirmed | Pulls all lines and customer details |
| **Submit Invoice** | Invoice validated | Locks amount structure, generates official number |
| **Record Receipt** | Payment in | Updates paid amount and balance |
| **Mark Paid** | Full payment confirmed | Sets payment status to Paid |
| **Release Job Spend** | Payment gate passed | Unlocks job-related expenses/work execution gate |
| **Cancel / Amend** | Controlled exception | Preserves audit trace |

---

## Status Flow and Gating Logic

```
Draft Invoice
   ↓
Submitted (Invoice No. issued)
   ↓
Unpaid / Partially Paid
   ↓
Paid
   ↓
Spend Released
```

### Business rules aligned to Black

1. **No invoice number = no valid job release**
2. **No payment = no job expense release**
3. **Invoice must trace back to Sales Order scope**

---

## What This Solves

| Current Risk | Proposed Resolution |
|---|---|
| Quote/invoice mismatch from chat reconstruction | Invoice generated from Sales Order source lines |
| Ambiguous release condition | Explicit `Spend Release Status` tied to payment state |
| Manual back-and-forth to know unpaid jobs | Clear invoice and payment status view |
| Weak auditability | End-to-end trace: Quotation → SO → Invoice → Receipt |

---

## Open Items to Confirm with Black and Finance

| Item | Why it matters | Needed decision |
|---|---|---|
| CIA as default for all customers? | Affects due date and release logic | Confirm exceptions |
| Partial payment rule | Needed for high-value jobs | Define threshold for release |
| Infotech coexistence plan | Transition risk if both systems run | MAIA primary vs parallel run |
| Credit term customer categories | Black mentioned categories/blacklist | Define per-customer term mapping |
| Required payment proof type | Operational consistency | Slip/ref no./bank API proof |

---

## See Also

- [[HG Group - Quotation Module Proposal]]
- [[HG Group - Job Work Order Module Proposal]]
- [[HG Group - CRM & Enquiry Intake Proposal]]
- [[Customer Narrative - HG Group]]
