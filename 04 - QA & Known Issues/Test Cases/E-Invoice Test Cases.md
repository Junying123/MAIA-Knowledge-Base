---
owner: Gareth
status: draft
last_reviewed: 2026-05-04
---

# E-Invoice Test Cases

**Total Test Cases:** 7
**Feature:** E-Invoice — MAIA to AutoCount Push
**Flow Ref:** [[03 - Clients/Active Cooking Clients/Fixguru/einvoice-flow.md]]

> **Scope:** MAIA decides the e-invoice mode and pushes the invoice to AutoCount with the correct flags. Test cases end when MAIA completes the push. What AutoCount does with those flags (submission to MyInvois/LHDN) is out of scope.

---

## Test Case Index

| #   | ID              | Description                                                                       |
| --- | --------------- | --------------------------------------------------------------------------------- |
| 1   | TC-EI-MODE-01   | Individual mode — invoice > RM 10,000 with e-invoicing enabled                    |
| 2   | TC-EI-MODE-02   | Consolidated mode — invoice < RM 10,000, customer prefers consolidated             |
| 3   | TC-EI-MODE-03   | No e-invoice — e-invoicing disabled globally                                      |
| 4   | TC-EI-PUSH-01   | AutoCount push — individual flags attached correctly                              |
| 5   | TC-EI-PUSH-02   | AutoCount push — consolidated flags attached correctly                            |
| 6   | TC-EI-PUSH-03   | AutoCount push — no e-invoice flags when mode is no_einvoice                      |
| 7   | TC-EI-CUST-01   | Customer preference forces individual mode regardless of invoice amount            |

---

## E-Invoice Mode Reference

| Condition | Mode | SubmitEInvoice | ConsolidatedEInvoice |
|---|---|---|---|
| `submit_einvoice` = off | `no_einvoice` | not attached | not attached |
| Amount > RM 10,000 + e-invoicing on | `individual` | T | F |
| Amount ≤ RM 10,000 + customer prefers consolidated | `consolidated` | T | T |
| Customer configured for individual (any amount) | `individual` | T | F |

---

---

# Part 1: Mode Decision

---

## 1.1 Happy Path — Mode Assigned on Invoice Submit

### TC-EI-MODE-01: Individual Mode — Invoice > RM 10,000

| | |
|---|---|
| **Precondition** | E-invoicing is enabled (`submit_einvoice = T` in channel config); a customer exists with no individual/consolidated preference set; a submitted Sales Order exists with total > RM 10,000 |
| **Steps** | Generate an Invoice from the Sales Order → verify the invoice total exceeds RM 10,000 → Submit the Invoice |
| **Expected** | Invoice is submitted; `einvoice_mode` is set to `individual` on the invoice record; `einvoice_status` shows `QUEUED` — confirming MAIA has pushed the invoice to AutoCount; MAIA's responsibility ends here |

---

### TC-EI-MODE-02: Consolidated Mode — Invoice ≤ RM 10,000, Customer Prefers Consolidated

| | |
|---|---|
| **Precondition** | E-invoicing is enabled; the customer is configured for consolidated e-invoice; invoice total is below RM 10,000 |
| **Steps** | Generate an Invoice from the Sales Order → verify the invoice total is below RM 10,000 → Submit the Invoice |
| **Expected** | Invoice is submitted; `einvoice_mode` is set to `consolidated`; `einvoice_status` shows `QUEUED` — MAIA has pushed to AutoCount with consolidated flag; MAIA's responsibility ends here |

---

### TC-EI-MODE-03: No E-Invoice — E-Invoicing Disabled Globally

| | |
|---|---|
| **Precondition** | E-invoicing is turned off (`submit_einvoice = F` in channel config) |
| **Steps** | Generate and Submit an Invoice of any amount |
| **Expected** | Invoice submits successfully; `einvoice_mode` is set to `no_einvoice`; no `einvoice_status` set; no e-invoice flags sent to AutoCount — invoice is pushed as a regular invoice with no e-invoice payload |

---

---

# Part 2: AutoCount Push Verification

---

## 2.1 Push Flags

### TC-EI-PUSH-01: Individual Flags Attached Correctly

| | |
|---|---|
| **Precondition** | E-invoicing is enabled; invoice mode resolves to `individual` (amount > RM 10,000) |
| **Steps** | Submit the Invoice → check the payload sent to AutoCount (via logs or API inspector) |
| **Expected** | AutoCount receives the invoice with `SubmitEInvoice: T` and `ConsolidatedEInvoice: F`; `einvoice_status` on the invoice record updates to `QUEUED` |

---

### TC-EI-PUSH-02: Consolidated Flags Attached Correctly

| | |
|---|---|
| **Precondition** | E-invoicing is enabled; invoice mode resolves to `consolidated` (amount ≤ RM 10,000, customer prefers consolidated) |
| **Steps** | Submit the Invoice → check the payload sent to AutoCount |
| **Expected** | AutoCount receives the invoice with `SubmitEInvoice: T` and `ConsolidatedEInvoice: T`; `einvoice_status` updates to `QUEUED` |

---

### TC-EI-PUSH-03: No Flags When Mode is no_einvoice

| | |
|---|---|
| **Precondition** | E-invoicing is disabled (`submit_einvoice = F`) |
| **Steps** | Submit the Invoice → check the payload sent to AutoCount |
| **Expected** | AutoCount receives the invoice without `SubmitEInvoice` or `ConsolidatedEInvoice` flags; invoice is treated as a standard accounting entry in AutoCount; `einvoice_mode` on the invoice record shows `no_einvoice` |

---

---

# Part 3: Customer Preference

---

### TC-EI-CUST-01: Customer Preference Forces Individual Mode

| | |
|---|---|
| **Precondition** | E-invoicing is enabled; the customer is explicitly configured for **individual** e-invoice submission; invoice total is below RM 10,000 (which would normally result in consolidated) |
| **Steps** | Generate and Submit an Invoice with total < RM 10,000 for the customer configured for individual |
| **Expected** | Despite the amount being below the RM 10,000 threshold, `einvoice_mode` resolves to `individual` — customer preference takes priority over the amount rule; `SubmitEInvoice: T`, `ConsolidatedEInvoice: F` sent to AutoCount; `einvoice_status` shows `QUEUED` |

---

---

## See Also

- [[04 - QA & Known Issues/Test Cases/Certificate Tax Reference Test Cases]]
- [[03 - Clients/Active Cooking Clients/Fixguru/einvoice-flow.md]]
- [[03 - Clients/Active Cooking Clients/Fixguru/UAT/MAIA UAT Form - Fixguru - Phase 2 - Draft]]
- [[01 - MAIA Product/Product Specs/Invoice Spec]]
