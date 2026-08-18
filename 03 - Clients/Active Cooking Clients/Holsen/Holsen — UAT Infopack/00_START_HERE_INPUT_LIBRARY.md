---
owner: Gareth
status: draft
last_reviewed: 2026-08-04
client: Holsen
---

# Start Here — Holsen UAT Input Library

This is the shared pool of test data for the Holsen UAT campaign. You will not get one file per mission — most missions ask you to pick your own data against stated criteria, the same way a real Holsen salesperson or logistics officer would. Only two missions need an exact, pre-built fixture, because they test a precise boundary that random data can't reliably hit.

**Rule of thumb:** if a mission's Input Recipe says "choose or prepare," go pick something from the relevant folder below (or make one up that satisfies the criteria). If it says "Fixed reference," use exactly that file — don't substitute.

---

## Folder Index

### `01_Customer_POs/`
**Why it exists:** Order intake and duplicate-check testing both need PO-shaped source documents — text, photo, or PDF.
**Used by:** M-01 (PO Intake to Draft SO), M-02 (The Duplicate Trap)
**Minimum pool size:** 5 distinct POs, covering at least one text message, one photo, one PDF.
**Tester picks freely:** which PO to upload, in which format.
**Product team prepares:** nothing extra — any Holsen-shaped PO works. If a real Holsen PO is reused as a sample, it must be sanitised first (customer identity and pricing scrubbed).

### `02_C1_C3_Certificates/`
**Why it exists:** C1 and C3 testing needs sample certificate PDFs and, for C3, a PO + appointment-letter pair to attach.
**Used by:** M-09 (C1: The Standing Exemption), M-10 (C3: The One-Time Import Custody)
**Minimum pool size:** 3 — at least one C1 sample, one C3 PO+appointment-letter pair, one item list with mixed HS-code coverage for the mixed-order test.
**Tester picks freely:** which customer to apply a certificate to, which items to include on the order.
**Product team prepares:** the synthetic PO + appointment-letter pair (real Holsen appointment letters should not be reused directly).

### `03_COA_K1_Attachments/`
**Why it exists:** COA and K1 are both tested identically in this round — as plain file attachments at the doctype level, not structured fields.
**Used by:** M-13 (Paper Trail: COA and K1 Attachments)
**Minimum pool size:** 2 — any file works, content doesn't need to look like a real COA/K1.
**Tester picks freely:** any PDF or image.
**Product team prepares:** nothing — synthetic placeholder files are sufficient.

### `04_Fixed_Fixtures/`
**Why it exists:** Two missions test an exact boundary condition that tester-chosen data can't reliably reproduce.
**Used by:** M-02 (duplicate PO check), M-03 (minimum-price hard block)
**Minimum pool size:** N/A — fixed, do not substitute.
**Tester picks freely:** nothing — use the fixture exactly as provided.
**Product team prepares:** FIX-01 (one SO already at TO BILL status, known customer + PO number) and FIX-02 (one item with a known, exact minimum price).

---

## Input Category Guide

| Category | Where | Notes |
|-|-|-|
| Customer POs | `01_Customer_POs/` | Text, photo, or PDF — pick the format the mission calls for |
| Certificates & attachments | `02_C1_C3_Certificates/`, `03_COA_K1_Attachments/` | Synthetic content only |
| Fixed fixtures | `04_Fixed_Fixtures/` | Never rename, edit, or overwrite — if consumed by mistake, ask Mindhive to recreate before continuing |
| Master data (customers, items, batches) | Not a file — visible directly in your UAT account | Selection criteria are stated in each Mission Card, not exported here |

## Fixed Fixtures Table

| Fixture ID | What it is | Used by |
|-|-|-|
| FIX-01 | SO at TO BILL status, fixed customer + PO number | M-02 |
| FIX-02 | Item with a known, exact minimum price | M-03 |

## Folder Rules

- Don't rename or overwrite anything in `04_Fixed_Fixtures/` — other testers depend on it staying exactly as configured.
- Use synthetic data only. If you must reuse a real Holsen document as a shape reference, strip customer identity and pricing before uploading it as a sample.
- Keep your own evidence (screenshots, recordings) out of this library — log those in the bug/XP tracker instead, per the Field Guide's Field Manual section.
