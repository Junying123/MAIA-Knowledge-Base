---
owner: Gareth
status: approved
last_reviewed: 2026-02-21
---

# Debit Note Documentation - Creation Summary

## Overview

This document summarizes the comprehensive Debit Note workflow documentation that was created based on the Credit Note pattern and codebase analysis.

---

## Status Flow

**DRAFT → OPEN → CANCELLED**

### DRAFT Status
- **Delete** → permanent removal
- **Submit** → moves to OPEN
- **Print PDF** → with watermark

### OPEN Status
- **Generate PDF** → official document
- **Cancel Debit Note** → two-step confirmation
- **Create Receipt** → for payment collection

### CANCELLED Status
- Terminal status (no actions available)

---

## Creation Methods

- **Create New Debit Note** (standalone)
- **From Invoice** (linked to existing invoice) — data carryover includes customer info, addresses, tax settings

---

## Key Differences: Debit Note vs Credit Note

| Aspect | Credit Note | Debit Note |
|--------|-------------|------------|
| **Purpose** | Refund/credit | Additional charge |
| **AR Impact** | Decrease | Increase |
| **Customer Balance** | Decrease | Increase |
| **Document Created** | Payment Voucher | Receipt |
| **Customer Reaction** | 😊 Positive | 😐 Requires explanation |

---

## Integration Points

- **Invoice → Debit Note → Receipt** is the main chain
- Debit Note increases accounts receivable (opposite of Credit Note)
- Receipt is created from Debit Note to record payment collection

---

## Key Assumptions (Pending Browser Verification)

Based on Credit Note pattern and codebase analysis:
1. Status Flow — Same as Credit Note (DRAFT → OPEN → CANCELLED)
2. Two-Step Cancellation — Uses "Go Back" / "Confirm Cancel" pattern
3. PDF Generation — "Print PDF" (DRAFT), "Generate PDF" (OPEN)
4. Document Creation — Creates Receipt (not Payment Voucher)
5. Data Carryover — Similar to Credit Note from Invoice
6. Validation Rules — Similar requirements as Credit Note
7. Financial Impact — Increases AR (opposite of Credit Note)

**Note:** These assumptions should be verified during browser exploration once valid credentials are available.

---

## Methodology

- **Primary Template:** Credit Note workflow
- **Approach:** Adapted Credit Note pattern with inverse financial logic
- **Codebase:** Found 99 references to debit notes in codebase

---

## See Also

- [[Debit Note Workflow Guide]]
- [[Credit Note Workflow Guide]]
- [[Invoice Workflow Guide]]
- [[Debit Note Test Summary]]
- [[Receipt Workflow Guide]]
