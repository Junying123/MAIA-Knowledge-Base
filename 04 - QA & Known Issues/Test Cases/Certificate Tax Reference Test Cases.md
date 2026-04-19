---
owner: Gareth
status: draft
last_reviewed: 2026-04-19
---

# Certificate (Tax Reference) Test Cases

**Total Test Cases:** 35
**Feature:** Certificate / Tax Reference (C1, C3, A57)
**Design Ref:** `2026-04-16-certificate-tax-reference-design-documentation.md` (Haiqal, Engineering)

---

## Test Case Categories

| Category | IDs | Count |
|----------|-----|-------|
| Certificate Create — C1 | TC-CERT-C1-01 to 03 | 3 |
| Certificate Create — C3 | TC-CERT-C3-01 to 02 | 2 |
| Certificate Create — A57 | TC-CERT-A57-01 to 02 | 2 |
| Certificate Create — Guards | TC-CERT-GRD-01 to 03 | 3 |
| Certificate Upload (PDF) | TC-CERT-UPL-01 to 05 | 5 |
| Certificate Listing & Detail | TC-CERT-LIST-01 to 05 | 5 |
| Sales Order — C1 | TC-SO-C1-01 to 07 | 7 |
| Sales Order — C3 | TC-SO-C3-01 to 04 | 4 |
| Sales Order — A57 | TC-SO-A57-01 | 1 |
| Sales Order — Guards & Edge Cases | TC-SO-GRD-01 to 08 | 8 |

---

## Certificate Type Reference

| Type | Scope | Key Behaviour |
|------|-------|---------------|
| **C1** | Item-level | `items[].tax_reference` set per eligible line; order `defaultTaxId` cleared + disabled |
| **C3** | Order-level | `tax_reference` = cert ID at root; all `items[].tax_reference` forced null |
| **A57** | Order-level | Same routing as C3; trader→LMW; not currently in active use |

> ⛔ C1 sent as order-level `tax_reference` → backend returns HTTP 422

---

## Section 1: Certificate Create — C1

### TC-CERT-C1-01: Create C1 — Happy Path

| | |
|---|---|
| **Precondition** | Company selected; customer has at least one address and one contact |
| **Steps** | Certificates tab → Create → Type = C1 → Fill: title, tax reg no, status, customer address, customer contact → Submit |
| **Expected** | Certificate created; appears in listing with type C1; details show 5-category item tables (Raw Materials, Components, Packaging Materials, Manufacturing Aids, Cleanroom Equipment) |

---

### TC-CERT-C1-02: Create C1 — Missing Customer Address

| | |
|---|---|
| **Precondition** | Company and customer selected |
| **Steps** | Create C1 → skip customer address → Submit |
| **Expected** | Form validation error on `c1_customer_address`; cert not submitted |

---

### TC-CERT-C1-03: Create C1 — Missing Customer Contact

| | |
|---|---|
| **Precondition** | Company and customer selected |
| **Steps** | Create C1 → skip customer contact → Submit |
| **Expected** | Form validation error on `c1_customer_contact`; cert not submitted |

---

## Section 2: Certificate Create — C3

### TC-CERT-C3-01: Create C3 — Happy Path

| | |
|---|---|
| **Precondition** | Eligible customer, company address, customer contact, and customer address all available |
| **Steps** | Create → Type = C3 → Fill all required fields → Add items to reference tables → Submit |
| **Expected** | C3 cert created; details show eligible customer, company address, and 5-category item tables |

---

### TC-CERT-C3-02: Create C3 — Missing Eligible Customer

| | |
|---|---|
| **Steps** | Create C3 → skip eligible customer → Submit |
| **Expected** | Form error on `c2_eligible_customer`; not submitted |

---

## Section 3: Certificate Create — A57

### TC-CERT-A57-01: Create A57 — Happy Path

| | |
|---|---|
| **Precondition** | Company address and company contact available |
| **Steps** | Create → Type = A57 → Fill company address + company contact → Add goods items → Submit |
| **Expected** | A57 cert created; detail view shows single "Goods" table (not 5-category tables); no Customer Information section |

---

### TC-CERT-A57-02: Create A57 — Missing Company Contact

| | |
|---|---|
| **Steps** | Create A57 → skip company contact → Submit |
| **Expected** | Form error on `a57_company_contact`; not submitted |

---

## Section 4: Certificate Create — Guards

### TC-CERT-GRD-01: No Company Selected — Create Button

| | |
|---|---|
| **Steps** | Navigate to Certificates tab with no company selected → Click Create |
| **Expected** | Toast error: *"Select a company before creating a certificate."* Dialog does not open |

---

### TC-CERT-GRD-02: Missing Certificate Title

| | |
|---|---|
| **Steps** | Create any cert type → leave title blank → Submit |
| **Expected** | Form error on `certificate_title` |

---

### TC-CERT-GRD-03: Missing Tax Registration Number

| | |
|---|---|
| **Steps** | Create any cert type → leave tax registration number blank → Submit |
| **Expected** | Form error on `tax_registration_no` |

---

## Section 5: Certificate Upload (PDF Extraction)

### TC-CERT-UPL-01: Upload C1 PDF — Happy Path

| | |
|---|---|
| **Precondition** | Valid C1 PDF available (e.g. real Malaysian customs C1 cert) |
| **Steps** | Upload → Select PDF → Set type = C1, confirm customer pre-fill → Submit |
| **Expected** | Polling starts; loading feedback shown; cert appears in listing on job completion (`failed_count = 0`) |

---

### TC-CERT-UPL-02: Upload C3 PDF — Happy Path

| | |
|---|---|
| **Precondition** | Valid C3 cert PDF available (Holsen-style import cert) |
| **Steps** | Upload → Select C3 PDF → Submit |
| **Expected** | Async extraction completes; C3 cert listed with extracted fields |

---

### TC-CERT-UPL-03: No Company Selected — Upload Button

| | |
|---|---|
| **Steps** | Click Upload with no company selected |
| **Expected** | Toast error: *"Select a company before uploading a certificate."* |

---

### TC-CERT-UPL-04: Extraction Timeout (> 5 min)

| | |
|---|---|
| **Steps** | Upload a PDF; simulate or wait for processing to exceed 5-minute polling limit |
| **Expected** | Toast: *"Certificate processing is taking longer than expected. Refresh the list later."* |

---

### TC-CERT-UPL-05: Extraction Failure (failed_count > 0)

| | |
|---|---|
| **Steps** | Upload a malformed or unreadable PDF |
| **Expected** | Error toast with backend warning/log details from failed job |

---

## Section 6: Certificate Listing & Detail View

### TC-CERT-LIST-01: Status Filter

| | |
|---|---|
| **Steps** | In certificates table → filter by a specific status (e.g. Active) |
| **Expected** | Only certs with that status shown; other statuses hidden |

---

### TC-CERT-LIST-02: Row Click Opens View Mode

| | |
|---|---|
| **Steps** | Click any cert row |
| **Expected** | `CertificateDetailsDialog` opens in read-only mode; all inputs disabled; no Save button |

---

### TC-CERT-LIST-03: Kebab → Edit Opens Edit Mode

| | |
|---|---|
| **Steps** | Kebab menu → Edit |
| **Expected** | Dialog opens with editable form pre-populated; Save button visible |

---

### TC-CERT-LIST-04: Kebab → Delete With Confirmation

| | |
|---|---|
| **Steps** | Kebab → Delete → Confirm prompt |
| **Expected** | Cert removed from listing; listing query invalidated |

---

### TC-CERT-LIST-05: Attachment Preview Toggle

| | |
|---|---|
| **Steps** | Open cert details → Click eye (👁) icon on primary attachment |
| **Expected** | Right preview pane renders the PDF/image; toggling additional attachment switches preview |

---

## Section 7: Sales Order — C1

### TC-SO-C1-01: C1 Selection — All Items Eligible (Happy Path)

| | |
|---|---|
| **Precondition** | SO has 3 items; all SKUs present in C1 cert references |
| **Steps** | Tax Reference dropdown → select C1 cert |
| **Expected** | Read-only fields auto-filled (title, tax reg no, dates, status); `validate_tax_exemption_items` returns all `status: valid`; Tax on Items disabled for all 3 lines; order-level global tax cleared and disabled |

---

### TC-SO-C1-02: C1 Selection — Partial Eligibility

| | |
|---|---|
| **Precondition** | SO has 3 items; Items 1+2 in C1 refs; Item 3 not |
| **Steps** | Select C1 cert |
| **Expected** | Items 1+2: Tax on Items locked; Item 3: Tax on Items editable + toast *"This item is not eligible for tax exemption."*; `defaultTaxId` cleared |

---

### TC-SO-C1-03: Add Ineligible Item After C1 Selected

| | |
|---|---|
| **Precondition** | C1 cert selected and validated |
| **Steps** | Add new line item whose SKU is NOT in cert references |
| **Expected** | Toast *"This item is not eligible for tax exemption."*; Tax on Items remains editable for that row |

---

### TC-SO-C1-04: Add Eligible Item After C1 Selected

| | |
|---|---|
| **Precondition** | C1 cert selected and validated |
| **Steps** | Add new line item whose SKU IS in cert references |
| **Expected** | Tax on Items automatically locked (disabled) for that row |

---

### TC-SO-C1-05: C1 Payload on Save

| | |
|---|---|
| **Precondition** | SO with C1 cert selected; 2 eligible items, 1 ineligible |
| **Steps** | Save SO |
| **Expected Payload** | `tax_reference` = `null` (root); eligible `items[].tax_reference` = cert ID; ineligible `items[].tax_reference` = `null` |

---

### TC-SO-C1-06: C1 Clears Order-Level Tax

| | |
|---|---|
| **Precondition** | SO has global tax set (e.g. GST 6%) |
| **Steps** | Select C1 cert |
| **Expected** | Order-level tax field cleared and disabled; cannot re-select global tax while C1 is active |

---

### TC-SO-C1-07: Per-Line Tax Required When No Global Tax

| | |
|---|---|
| **Precondition** | C1 selected (global tax cleared); one item has neither tax template nor cert (skipped validation) |
| **Steps** | Attempt to save SO |
| **Expected** | Zod error: *"Tax on Items is required when no global tax is set"* on that line; save blocked |

---

## Section 8: Sales Order — C3

### TC-SO-C3-01: C3 Selection — All Items Eligible (Happy Path)

| | |
|---|---|
| **Precondition** | SO has items; all SKUs in C3 cert references |
| **Steps** | Select C3 cert |
| **Expected** | Order-level `tax_reference` = cert ID; all `items[].tax_reference` forced null; global order tax unchanged; Tax on Items per line remains editable |

---

### TC-SO-C3-02: C3 Selection — Ineligible Items Trigger Removal Prompt

| | |
|---|---|
| **Precondition** | SO has 5 items; only 1 SKU in C3 cert references |
| **Steps** | Select C3 cert |
| **Expected** | Confirmation dialog: *"The following items are not covered by certificate {cert_id} and will be removed: {4 items}. Continue?"* → Confirm: 4 items removed, cert applied → Cancel: cert reverted, all 5 items remain |

---

### TC-SO-C3-03: C3 Selection — Empty Items List

| | |
|---|---|
| **Precondition** | SO has no items yet |
| **Steps** | Select C3 cert |
| **Expected** | Cert applied silently; no confirmation dialog |

---

### TC-SO-C3-04: C3 Payload on Save

| | |
|---|---|
| **Steps** | Complete SO with C3 cert → Save |
| **Expected Payload** | `tax_reference` = cert ID (root); all `items[].tax_reference` = `null` |

---

## Section 9: Sales Order — A57

### TC-SO-A57-01: A57 — Order-Level Routing Same as C3

| | |
|---|---|
| **Steps** | Select A57 cert on SO |
| **Expected** | `tax_reference` set at order level = cert ID; all `items[].tax_reference` forced null; global tax unchanged |

---

## Section 10: Sales Order — Guards & Edge Cases

### TC-SO-GRD-01: Customer Mismatch Guard

| | |
|---|---|
| **Precondition** | SO is for Customer A; a cert in dropdown is linked to Customer B |
| **Steps** | Select that cert |
| **Expected** | Toast: *"Certificate belongs to another customer. Certificate {id} is linked to customer {B}, but this order is for customer {A}."* — selection rejected; cert not applied |

---

### TC-SO-GRD-02: Cert with Null Customer ID — Guard Passes

| | |
|---|---|
| **Precondition** | Cert has no `customer_id` set |
| **Steps** | Select cert on any SO |
| **Expected** | Guard passes; selection proceeds normally |

---

### TC-SO-GRD-03: Clear Certificate — All Locks Released

| | |
|---|---|
| **Precondition** | C1 cert active; Tax on Items locked on 2 lines |
| **Steps** | Tax Reference dropdown → Select "No certificate" |
| **Expected** | All Tax on Items locks cleared (re-enabled); `billerTaxCertificateId` cleared; attachments cleared; order-level tax field re-enabled |

---

### TC-SO-GRD-04: Validation API Failure — Rollback

| | |
|---|---|
| **Precondition** | `validate_tax_exemption_items` returns an error |
| **Steps** | Select a cert → backend returns validation error |
| **Expected** | Cert ID, type, and attachments reverted to pre-selection snapshot; toast shows error message; no locks applied |

---

### TC-SO-GRD-05: Dropdown Disabled Without Biller Company

| | |
|---|---|
| **Steps** | Open SO without a company selected → inspect Tax Reference section |
| **Expected** | Dropdown shows *"Select company first..."* and is disabled |

---

### TC-SO-GRD-06: No Certificates Available

| | |
|---|---|
| **Precondition** | Selected company has no certs |
| **Expected** | Dropdown shows *"No certificates available"* |

---

### TC-SO-GRD-07: Load Existing SO — Locks Restored (Hydration)

| | |
|---|---|
| **Precondition** | SO previously saved with C1 cert active |
| **Steps** | Re-open SO in edit mode |
| **Expected** | `SalesOrderTaxExemptionHydrate` silently re-runs validation; Tax on Items locks restored correctly for eligible items |

---

### TC-SO-GRD-08: Local Uploaded Attachment Not Overwritten

| | |
|---|---|
| **Precondition** | User uploads a local PDF to attachment field BEFORE selecting a cert |
| **Steps** | Select a cert that has its own `certificate_attachment` |
| **Expected** | User's local file preserved; cert's server attachment does NOT overwrite it |

---

## Cert Type Routing Summary

| | C1 | C3 | A57 |
|---|:---:|:---:|:---:|
| Root `tax_reference` | `null` | cert ID | cert ID |
| `items[].tax_reference` | cert ID per eligible | `null` (forced) | `null` (forced) |
| `defaultTaxId` cleared | ✓ | ✗ | ✗ |
| Tax on Items locking | ✓ eligible SKUs | ✗ | ✗ |
| 5-category item tables | ✓ | ✓ | ✗ |
| Single goods table | ✗ | ✗ | ✓ |
| Eligible customer field | ✗ | ✓ | ✗ |
| Company address required | ✗ | ✓ | ✓ |

---

## See Also

- [[04 - QA & Known Issues/Test Scenarios Index]]
- [[01 - MAIA Product/Technical/Tax Refactor/Tax Refactoring]]
- [[03 - Clients/Active Cooking Clients/Holsen/Product/Working Holsen]]
- Design doc: `2026-04-16-certificate-tax-reference-design-documentation.md` (Downloads)
- Sample certs: `C1 Sample.pdf`, `C3 Certificate 2.pdf`, `C3 AppointmentLetter 1.pdf` (Downloads)
