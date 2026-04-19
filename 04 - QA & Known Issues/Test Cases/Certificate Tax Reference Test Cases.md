---
owner: Gareth
status: draft
last_reviewed: 2026-04-19
---

# Certificate (Tax Reference) Test Cases

**Total Test Cases:** 45
**Feature:** Certificate / Tax Reference (C1, C3, A57)
**Design Ref:** [[01 - MAIA Product/Product Specs/Certificate Tax Reference Spec]]

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
| Real-World User Scenarios | TC-SCN-01 to 10 | 10 |

---

## Certificate Type Reference

| Type | Scope | What it does |
|------|-------|--------------|
| **C1** | Per item | Tax exemption is applied line by line. Only items listed in the certificate are exempted. Global tax on the order is cleared. |
| **C3** | Whole order | Tax exemption applies to the entire order. The order is tied to one specific certificate. Only items covered by the certificate can be on the order. |
| **A57** | Whole order | Same as C3 — order-level exemption. Used for trader-to-LMW sales. Not currently in active use. |

---

## Section 1: Certificate Create — C1

### TC-CERT-C1-01: Create C1 — Happy Path

| | |
|---|---|
| **Precondition** | Company is selected; the customer has at least one saved address and one saved contact |
| **Steps** | Go to Certificates tab → Click Create → Select Type: C1 → Fill in certificate title, tax registration number, status, customer address, customer contact → Click Submit |
| **Expected** | Certificate is saved and appears in the certificates list showing type C1; the detail view shows five item category sections (Raw Materials, Components, Packaging Materials, Manufacturing Aids, Cleanroom Equipment) |

---

### TC-CERT-C1-02: Create C1 — Missing Customer Address

| | |
|---|---|
| **Precondition** | Company and customer are selected |
| **Steps** | Start creating a C1 certificate → leave customer address empty → Click Submit |
| **Expected** | An error appears on the customer address field; the certificate is not saved |

---

### TC-CERT-C1-03: Create C1 — Missing Customer Contact

| | |
|---|---|
| **Precondition** | Company and customer are selected |
| **Steps** | Start creating a C1 certificate → leave customer contact empty → Click Submit |
| **Expected** | An error appears on the customer contact field; the certificate is not saved |

---

## Section 2: Certificate Create — C3

### TC-CERT-C3-01: Create C3 — Happy Path

| | |
|---|---|
| **Precondition** | An eligible customer, company address, customer contact, and customer address are all available |
| **Steps** | Click Create → Select Type: C3 → Fill in all required fields → Add items to the reference item tables → Click Submit |
| **Expected** | C3 certificate saved; detail view shows the eligible customer, company address, and five item category sections |

---

### TC-CERT-C3-02: Create C3 — Missing Eligible Customer

| | |
|---|---|
| **Precondition** | On the Create C3 form |
| **Steps** | Leave the eligible customer field empty → Click Submit |
| **Expected** | An error appears on the eligible customer field; the certificate is not saved |

---

## Section 3: Certificate Create — A57

### TC-CERT-A57-01: Create A57 — Happy Path

| | |
|---|---|
| **Precondition** | Company address and company contact are available |
| **Steps** | Click Create → Select Type: A57 → Fill in company address and company contact → Add goods items → Click Submit |
| **Expected** | A57 certificate saved; detail view shows a single "Goods" table (no five-category tables); no Customer Information section shown |

---

### TC-CERT-A57-02: Create A57 — Missing Company Contact

| | |
|---|---|
| **Precondition** | On the Create A57 form |
| **Steps** | Leave the company contact field empty → Click Submit |
| **Expected** | An error appears on the company contact field; the certificate is not saved |

---

## Section 4: Certificate Create — Guards

### TC-CERT-GRD-01: No Company Selected — Create Button

| | |
|---|---|
| **Precondition** | User is on the Certificates tab with no company selected |
| **Steps** | Click Create |
| **Expected** | A warning message appears: *"Select a company before creating a certificate."* The create form does not open |

---

### TC-CERT-GRD-02: Missing Certificate Title

| | |
|---|---|
| **Precondition** | On the Create certificate form (any type) |
| **Steps** | Leave the certificate title blank → Click Submit |
| **Expected** | An error appears on the certificate title field; the certificate is not saved |

---

### TC-CERT-GRD-03: Missing Tax Registration Number

| | |
|---|---|
| **Precondition** | On the Create certificate form (any type) |
| **Steps** | Leave the tax registration number blank → Click Submit |
| **Expected** | An error appears on the tax registration number field; the certificate is not saved |

---

## Section 5: Certificate Upload (PDF Extraction)

### TC-CERT-UPL-01: Upload C1 PDF — Happy Path

| | |
|---|---|
| **Precondition** | A valid C1 certificate PDF is available (e.g. real Malaysian customs C1 cert); company is selected |
| **Steps** | Click Upload → Select the C1 PDF file → Confirm type as C1 and verify the customer is pre-filled → Click Submit |
| **Expected** | System processes the file; a loading indicator is shown while extraction runs; once complete the certificate appears in the listing with details extracted from the PDF |

---

### TC-CERT-UPL-02: Upload C3 PDF — Happy Path

| | |
|---|---|
| **Precondition** | A valid C3 certificate PDF is available; company is selected |
| **Steps** | Click Upload → Select the C3 PDF file → Click Submit |
| **Expected** | System extracts the certificate data; the C3 certificate appears in the listing with the correct fields populated |

---

### TC-CERT-UPL-03: No Company Selected — Upload Button

| | |
|---|---|
| **Precondition** | No company is selected |
| **Steps** | Click Upload |
| **Expected** | A warning message appears: *"Select a company before uploading a certificate."* The upload form does not open |

---

### TC-CERT-UPL-04: Extraction Takes Too Long (> 5 minutes)

| | |
|---|---|
| **Precondition** | A PDF has been uploaded and is being processed |
| **Steps** | Wait for processing to exceed 5 minutes without completing |
| **Expected** | A message appears: *"Certificate processing is taking longer than expected. Refresh the list later."* |

---

### TC-CERT-UPL-05: Extraction Fails — Unreadable PDF

| | |
|---|---|
| **Precondition** | A corrupted or unreadable PDF is available |
| **Steps** | Upload the unreadable PDF → Submit |
| **Expected** | An error message is shown explaining why extraction failed |

---

## Section 6: Certificate Listing & Detail View

### TC-CERT-LIST-01: Status Filter

| | |
|---|---|
| **Precondition** | Certificates list has certs with different statuses |
| **Steps** | On the certificates list → filter by a specific status (e.g. Active) |
| **Expected** | Only certificates matching that status are shown; others are hidden |

---

### TC-CERT-LIST-02: View Certificate Details

| | |
|---|---|
| **Precondition** | At least one certificate exists in the list |
| **Steps** | Click on any certificate row |
| **Expected** | Certificate detail panel opens in read-only view; all fields are visible but not editable; no Save button shown |

---

### TC-CERT-LIST-03: Edit Certificate

| | |
|---|---|
| **Precondition** | At least one certificate exists in the list |
| **Steps** | Click the action menu (⋮) on a certificate row → Select Edit |
| **Expected** | Certificate detail panel opens in edit mode with all fields pre-filled and editable; Save button is visible |

---

### TC-CERT-LIST-04: Delete Certificate

| | |
|---|---|
| **Precondition** | At least one certificate exists in the list |
| **Steps** | Click the action menu (⋮) → Select Delete → Confirm when prompted |
| **Expected** | Certificate is removed from the list |

---

### TC-CERT-LIST-05: Attachment Preview

| | |
|---|---|
| **Precondition** | A certificate with an attached file is open in detail view |
| **Steps** | Click the eye icon (👁) next to the primary attachment |
| **Expected** | The attached PDF or image is shown in a preview panel on the right side of the screen; clicking the additional attachment icon switches the preview to that file |

---

## Section 7: Sales Order — C1

### TC-SO-C1-01: Select C1 Certificate — All Items Covered (Happy Path)

| | |
|---|---|
| **Precondition** | A Sales Order is open with 3 items; all 3 items are listed in the C1 certificate's item references |
| **Steps** | In the Tax Reference section → open the certificate dropdown → select the C1 certificate |
| **Expected** | Certificate details (title, tax registration number, dates, status) are automatically filled in; system checks each item against the certificate; all 3 items show tax exemption applied and the Tax on Items field becomes locked (cannot be changed); the global tax field on the order is cleared and disabled |

---

### TC-SO-C1-02: Select C1 Certificate — Some Items Not Covered

| | |
|---|---|
| **Precondition** | Sales Order has 3 items; Items 1 and 2 are in the C1 certificate references; Item 3 is not |
| **Steps** | Select the C1 certificate from the Tax Reference dropdown |
| **Expected** | Items 1 and 2 show tax exemption applied with Tax on Items locked; Item 3 remains editable and a message appears: *"This item is not eligible for tax exemption."*; global tax on the order is cleared |

---

### TC-SO-C1-03: Add a Non-Covered Item After C1 Selected

| | |
|---|---|
| **Precondition** | A C1 certificate is already selected on the Sales Order |
| **Steps** | Add a new line item whose product is not listed in the C1 certificate references |
| **Expected** | A message appears: *"This item is not eligible for tax exemption."*; the Tax on Items field for that line remains editable |

---

### TC-SO-C1-04: Add a Covered Item After C1 Selected

| | |
|---|---|
| **Precondition** | A C1 certificate is already selected on the Sales Order |
| **Steps** | Add a new line item whose product is listed in the C1 certificate references |
| **Expected** | Tax exemption is automatically applied to that line; the Tax on Items field is locked |

---

### TC-SO-C1-05: Save Sales Order with C1 Certificate

| | |
|---|---|
| **Precondition** | Sales Order has a C1 certificate selected; 2 items are covered, 1 is not |
| **Steps** | Click Save |
| **Expected** | Order is saved; the 2 covered items carry the tax exemption reference; the uncovered item has no exemption applied; the order has no global tax |

---

### TC-SO-C1-06: C1 Removes Global Tax from Order

| | |
|---|---|
| **Precondition** | Sales Order has a global tax already set (e.g. GST 6%) |
| **Steps** | Select a C1 certificate from the Tax Reference dropdown |
| **Expected** | The global tax field is cleared and disabled; the user cannot re-set a global tax while the C1 certificate is active |

---

### TC-SO-C1-07: Save Blocked When Item Has No Tax at All

| | |
|---|---|
| **Precondition** | C1 certificate is selected (global tax cleared); one line item has no tax template and no exemption applied (ineligible item with nothing set) |
| **Steps** | Click Save |
| **Expected** | Save is blocked; an error appears on that line: *"Tax on Items is required when no global tax is set"* |

---

## Section 8: Sales Order — C3

### TC-SO-C3-01: Select C3 Certificate — All Items Covered (Happy Path)

| | |
|---|---|
| **Precondition** | Sales Order has items; all items are listed in the C3 certificate references |
| **Steps** | Select the C3 certificate from the Tax Reference dropdown |
| **Expected** | Tax exemption is applied at the order level; the certificate details are shown; individual line items are not individually marked — the whole order is covered; global tax on the order is not affected |

---

### TC-SO-C3-02: Select C3 Certificate — Some Items Not Covered

| | |
|---|---|
| **Precondition** | Sales Order has 5 items; only 1 item is listed in the C3 certificate references |
| **Steps** | Select the C3 certificate from the Tax Reference dropdown |
| **Expected** | A confirmation prompt appears listing the 4 items not covered: *"The following items are not covered by this certificate and will be removed. Continue?"* → If confirmed: the 4 items are removed and the certificate is applied → If cancelled: the certificate selection is reverted and all 5 items remain |

---

### TC-SO-C3-03: Select C3 Certificate — No Items Added Yet

| | |
|---|---|
| **Precondition** | Sales Order has no line items yet |
| **Steps** | Select a C3 certificate |
| **Expected** | Certificate is applied without any prompt; user can then add items that are covered by the certificate |

---

### TC-SO-C3-04: Save Sales Order with C3 Certificate

| | |
|---|---|
| **Precondition** | Sales Order has a C3 certificate selected with covered items |
| **Steps** | Click Save |
| **Expected** | Order is saved with the C3 certificate linked at the order level; no per-item exemption references are stored individually |

---

## Section 9: Sales Order — A57

### TC-SO-A57-01: Select A57 Certificate — Order-Level Exemption

| | |
|---|---|
| **Precondition** | A57 certificate exists and is available in the dropdown |
| **Steps** | Select an A57 certificate from the Tax Reference dropdown on a Sales Order |
| **Expected** | Tax exemption is applied at the order level (same behaviour as C3); certificate details are auto-filled; global order tax is not affected |

---

## Section 10: Sales Order — Guards & Edge Cases

### TC-SO-GRD-01: Certificate Belongs to a Different Customer

| | |
|---|---|
| **Precondition** | The Sales Order is for Customer A; the certificate in the dropdown is linked to Customer B |
| **Steps** | Select that certificate |
| **Expected** | A warning appears: *"This certificate belongs to a different customer and cannot be used for this order."*; the certificate is not applied |

---

### TC-SO-GRD-02: Certificate With No Customer Link — Allowed

| | |
|---|---|
| **Precondition** | A certificate exists that is not linked to any specific customer |
| **Steps** | Select that certificate on any Sales Order |
| **Expected** | Selection proceeds normally; certificate is applied without a customer mismatch warning |

---

### TC-SO-GRD-03: Remove Certificate — All Exemptions Cleared

| | |
|---|---|
| **Precondition** | A C1 certificate is active on the Sales Order; 2 items have tax exemption locked |
| **Steps** | Open the Tax Reference dropdown → Select "No certificate" |
| **Expected** | All tax exemption locks are removed; Tax on Items becomes editable again on all lines; the attached certificate file is cleared; the global tax field is re-enabled |

---

### TC-SO-GRD-04: Certificate Validation Fails — Selection Reverted

| | |
|---|---|
| **Precondition** | A certificate is selected but the system cannot validate the items against it (e.g. server error) |
| **Steps** | Select a certificate → system returns a validation error |
| **Expected** | The certificate selection is reverted back to what it was before; an error message is shown; no tax exemptions are applied |

---

### TC-SO-GRD-05: Tax Reference Dropdown Disabled — No Company

| | |
|---|---|
| **Precondition** | Sales Order is open with no company (biller) selected |
| **Steps** | Look at the Tax Reference section |
| **Expected** | The certificate dropdown shows *"Select company first..."* and cannot be clicked |

---

### TC-SO-GRD-06: No Certificates Available for This Company

| | |
|---|---|
| **Precondition** | The selected company has no certificates set up |
| **Steps** | Open the Tax Reference certificate dropdown |
| **Expected** | Dropdown shows *"No certificates available"* |

---

### TC-SO-GRD-07: Reopen Existing Sales Order — Exemptions Restored

| | |
|---|---|
| **Precondition** | A Sales Order was previously saved with a C1 certificate active |
| **Steps** | Re-open the Sales Order in edit mode |
| **Expected** | The system re-checks item eligibility; Tax on Items locks are restored on the same items that were locked before; the certificate is shown as selected |

---

### TC-SO-GRD-08: Manually Uploaded Attachment Not Replaced by Certificate

| | |
|---|---|
| **Precondition** | User has manually uploaded a PDF to the Tax Reference attachment field before selecting a certificate |
| **Steps** | Select a certificate that has its own attached file |
| **Expected** | The user's manually uploaded file is kept; it is not replaced by the certificate's own attachment |

---

## Certificate Behaviour Summary

| | C1 | C3 | A57 |
|---|---|---|---|
| Exemption scope | Per eligible line item | Whole order | Whole order |
| Global order tax | Cleared and disabled | Unchanged | Unchanged |
| Per-item tax field | Locked for eligible items | Unchanged | Unchanged |
| Items not in cert | Warned; left editable | Prompted for removal | Prompted for removal |
| 5 item category tables | ✓ | ✓ | ✗ |
| Single goods list | ✗ | ✗ | ✓ |
| Requires eligible customer | ✗ | ✓ | ✗ |
| Requires company address | ✗ | ✓ | ✓ |

---

## See Also

- [[04 - QA & Known Issues/Test Scenarios Index]]
- [[01 - MAIA Product/Product Specs/Certificate Tax Reference Spec]]
- [[01 - MAIA Product/Technical/Tax Refactor/Tax Refactoring]]
- [[03 - Clients/Active Cooking Clients/Holsen/Product/Working Holsen]]
- Sample certs: `C1 Sample.pdf`, `C3 Certificate 2.pdf`, `C3 AppointmentLetter 1.pdf` (Downloads)
