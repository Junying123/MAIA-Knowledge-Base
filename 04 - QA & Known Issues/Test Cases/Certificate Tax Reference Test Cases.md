---
owner: Gareth
status: draft
last_reviewed: 2026-04-19
---

# Certificate (Tax Reference) Test Cases

**Total Test Cases:** 43
**Feature:** Certificate / Tax Reference (C1, C3, A57)
**Design Ref:** [[01 - MAIA Product/Product Specs/Certificate Tax Reference Spec]]

> **Merge note:** TC-SO-C1-05 merged into TC-SO-C1-02 (save step added); TC-SO-C3-04 merged into TC-SO-C3-01 (save step added). Both were redundant as their expected outcomes were already covered.

---

## Test Case Index

| # | ID | Description |
|---|---|---|
| 1 | TC-CERT-C1-01 | Create C1 — happy path |
| 2 | TC-CERT-C3-01 | Create C3 — happy path |
| 3 | TC-CERT-A57-01 | Create A57 — happy path |
| 4 | TC-CERT-GRD-01 | Create/Upload — no company selected |
| 5 | TC-CERT-GRD-02 | Create — missing certificate title |
| 6 | TC-CERT-GRD-03 | Create — missing tax registration number |
| 7 | TC-CERT-C1-02 | Create C1 — missing customer address |
| 8 | TC-CERT-C1-03 | Create C1 — missing customer contact |
| 9 | TC-CERT-C3-02 | Create C3 — missing eligible customer |
| 10 | TC-CERT-A57-02 | Create A57 — missing company contact |
| 11 | TC-CERT-UPL-01 | Upload C1 PDF — happy path |
| 12 | TC-CERT-UPL-02 | Upload C3 PDF — happy path |
| 13 | TC-CERT-UPL-04 | Upload — extraction timeout |
| 14 | TC-CERT-UPL-05 | Upload — extraction fails |
| 15 | TC-CERT-LIST-01 | Listing — status filter |
| 16 | TC-CERT-LIST-02 | Listing — view certificate details |
| 17 | TC-CERT-LIST-03 | Listing — edit certificate |
| 18 | TC-CERT-LIST-04 | Listing — delete certificate |
| 19 | TC-CERT-LIST-05 | Listing — attachment preview |
| 20 | TC-SO-C1-01 | SO C1 — all items covered (happy path) |
| 21 | TC-SO-C1-02 | SO C1 — partial coverage + save |
| 22 | TC-SO-C1-03 | SO C1 — add non-covered item after cert selected |
| 23 | TC-SO-C1-04 | SO C1 — add covered item after cert selected |
| 24 | TC-SO-C1-06 | SO C1 — clears global tax |
| 25 | TC-SO-C1-07 | SO C1 — save blocked, item has no tax |
| 26 | TC-SO-C3-01 | SO C3 — all items covered + save (happy path) |
| 27 | TC-SO-C3-02 | SO C3 — ineligible items prompt removal |
| 28 | TC-SO-C3-03 | SO C3 — no items on order yet |
| 29 | TC-SO-A57-01 | SO A57 — order-level exemption |
| 30 | TC-SO-GRD-05 | SO guard — dropdown disabled, no company |
| 31 | TC-SO-GRD-06 | SO guard — no certificates available |
| 32 | TC-SO-GRD-01 | SO guard — customer mismatch |
| 33 | TC-SO-GRD-02 | SO guard — cert with no customer link |
| 34 | TC-SO-GRD-03 | SO guard — remove certificate, locks cleared |
| 35 | TC-SO-GRD-04 | SO guard — validation fails, selection reverted |
| 36 | TC-SO-GRD-07 | SO guard — reopen order, locks restored |
| 37 | TC-SO-GRD-08 | SO guard — manual attachment not overwritten |
| 38 | TC-SCN-01 | Scenario — new customer, C1 first order |
| 39 | TC-SCN-02 | Scenario — expired C1 certificate |
| 40 | TC-SCN-04 | Scenario — mixed C1 + non-exempt items |
| 41 | TC-SCN-06 | Scenario — VIP pricing with C1 exemption |
| 42 | TC-SCN-09 | Scenario — rush order, C1, insufficient stock |
| 43 | TC-SCN-03 | Scenario — C3, quota partially used |
| 44 | TC-SCN-07 | Scenario — C3 batch allocation, two customers |
| 45 | TC-SCN-10 | Scenario — customer requests to combine C3 orders |
| 46 | TC-SCN-05 | Scenario — A57, full PO coverage, attempt to add extra item |
| 47 | TC-SCN-08 | Scenario — COA requirement, warehouse has wrong format |

---

## Certificate Type Reference

| Type | Scope | What it does |
|------|-------|--------------|
| **C1** | Per item | Exemption applied line by line. Only items listed in the certificate are exempted. Global tax on the order is cleared when C1 is active. |
| **C3** | Whole order | Exemption applies to the entire order. One C3 cert per order. Only items listed in the cert can be on the order. |
| **A57** | Whole order | Same as C3 — order-level exemption. Used for trader-to-LMW sales. Not currently in active use. |

---

---

# Part 1: Certificate Management

---

## 1.1 Create Certificate

### 1.1.1 Happy Path — By Certificate Type

#### TC-CERT-C1-01: Create C1 — Happy Path

| | |
|---|---|
| **Precondition** | Company is selected; the customer has at least one saved address and one saved contact |
| **Steps** | Go to Certificates tab → Click Create → Select Type: C1 → Fill in certificate title, tax registration number, status, customer address, customer contact → Click Submit |
| **Expected** | Certificate saved and appears in the list with type C1; detail view shows five item category sections: Raw Materials, Components, Packaging Materials, Manufacturing Aids, Cleanroom Equipment |

---

#### TC-CERT-C3-01: Create C3 — Happy Path

| | |
|---|---|
| **Precondition** | An eligible customer, company address, customer contact, and customer address are all available |
| **Steps** | Click Create → Select Type: C3 → Fill in all required fields → Add items to the reference tables → Click Submit |
| **Expected** | C3 certificate saved; detail view shows the eligible customer, company address, and five item category sections |

---

#### TC-CERT-A57-01: Create A57 — Happy Path

| | |
|---|---|
| **Precondition** | Company address and company contact are available |
| **Steps** | Click Create → Select Type: A57 → Fill in company address and company contact → Add goods items → Click Submit |
| **Expected** | A57 certificate saved; detail view shows a single "Goods" table (no five-category tables); no Customer Information section shown |

---

### 1.1.2 Required Field Validation

#### Shared — All Certificate Types

##### TC-CERT-GRD-01: No Company Selected — Create or Upload

| | |
|---|---|
| **Precondition** | User is on the Certificates tab with no company selected |
| **Steps** | Click Create **or** click Upload |
| **Expected** | Warning message: *"Select a company before creating/uploading a certificate."* Form does not open |

---

##### TC-CERT-GRD-02: Missing Certificate Title

| | |
|---|---|
| **Precondition** | On the Create form (any certificate type) |
| **Steps** | Leave the certificate title blank → Click Submit |
| **Expected** | Error appears on the certificate title field; certificate is not saved |

---

##### TC-CERT-GRD-03: Missing Tax Registration Number

| | |
|---|---|
| **Precondition** | On the Create form (any certificate type) |
| **Steps** | Leave the tax registration number blank → Click Submit |
| **Expected** | Error appears on the tax registration number field; certificate is not saved |

---

#### C1-Specific Validation

##### TC-CERT-C1-02: Create C1 — Missing Customer Address

| | |
|---|---|
| **Precondition** | Company and customer are selected |
| **Steps** | Start creating a C1 certificate → leave customer address empty → Click Submit |
| **Expected** | Error appears on the customer address field; certificate is not saved |

---

##### TC-CERT-C1-03: Create C1 — Missing Customer Contact

| | |
|---|---|
| **Precondition** | Company and customer are selected |
| **Steps** | Start creating a C1 certificate → leave customer contact empty → Click Submit |
| **Expected** | Error appears on the customer contact field; certificate is not saved |

---

#### C3-Specific Validation

##### TC-CERT-C3-02: Create C3 — Missing Eligible Customer

| | |
|---|---|
| **Precondition** | On the Create C3 form |
| **Steps** | Leave the eligible customer field empty → Click Submit |
| **Expected** | Error appears on the eligible customer field; certificate is not saved |

---

#### A57-Specific Validation

##### TC-CERT-A57-02: Create A57 — Missing Company Contact

| | |
|---|---|
| **Precondition** | On the Create A57 form |
| **Steps** | Leave the company contact field empty → Click Submit |
| **Expected** | Error appears on the company contact field; certificate is not saved |

---

## 1.2 Upload Certificate (PDF Extraction)

### 1.2.1 Happy Path

#### TC-CERT-UPL-01: Upload C1 PDF — Happy Path

| | |
|---|---|
| **Precondition** | A valid C1 certificate PDF is available; company is selected |
| **Steps** | Click Upload → Select the C1 PDF file → Confirm type as C1 and verify customer is pre-filled → Click Submit |
| **Expected** | System processes the file; loading indicator shown while extraction runs; once complete the certificate appears in the listing with details extracted from the PDF |

---

#### TC-CERT-UPL-02: Upload C3 PDF — Happy Path

| | |
|---|---|
| **Precondition** | A valid C3 certificate PDF is available; company is selected |
| **Steps** | Click Upload → Select the C3 PDF file → Click Submit |
| **Expected** | System extracts the certificate data; C3 certificate appears in the listing with correct fields populated |

---

### 1.2.2 Error Cases

#### TC-CERT-UPL-04: Extraction Takes Too Long (> 5 minutes)

| | |
|---|---|
| **Precondition** | A PDF has been uploaded and is being processed |
| **Steps** | Wait for processing to exceed 5 minutes without completing |
| **Expected** | Message appears: *"Certificate processing is taking longer than expected. Refresh the list later."* |

---

#### TC-CERT-UPL-05: Extraction Fails — Unreadable PDF

| | |
|---|---|
| **Precondition** | A corrupted or unreadable PDF is available |
| **Steps** | Upload the unreadable PDF → Submit |
| **Expected** | Error message shown explaining why extraction failed |

---

## 1.3 View, Edit & Delete

### 1.3.1 Listing & Filtering

#### TC-CERT-LIST-01: Status Filter

| | |
|---|---|
| **Precondition** | Certificates list has certs with different statuses |
| **Steps** | On the certificates list → filter by a specific status (e.g. Active) |
| **Expected** | Only certificates matching that status are shown; others are hidden |

---

#### TC-CERT-LIST-02: View Certificate Details

| | |
|---|---|
| **Precondition** | At least one certificate exists in the list |
| **Steps** | Click on any certificate row |
| **Expected** | Certificate detail panel opens in read-only view; all fields visible but not editable; no Save button shown |

---

### 1.3.2 Edit, Delete & Attachments

#### TC-CERT-LIST-03: Edit Certificate

| | |
|---|---|
| **Precondition** | At least one certificate exists in the list |
| **Steps** | Click the action menu (⋮) on a certificate row → Select Edit |
| **Expected** | Certificate detail panel opens in edit mode with all fields pre-filled and editable; Save button is visible |

---

#### TC-CERT-LIST-04: Delete Certificate

| | |
|---|---|
| **Precondition** | At least one certificate exists in the list |
| **Steps** | Click the action menu (⋮) → Select Delete → Confirm when prompted |
| **Expected** | Certificate is removed from the list |

---

#### TC-CERT-LIST-05: Attachment Preview

| | |
|---|---|
| **Precondition** | A certificate with an attached file is open in detail view |
| **Steps** | Click the eye icon (👁) next to the primary attachment |
| **Expected** | Attached PDF or image shown in preview panel on the right; clicking the additional attachment icon switches the preview to that file |

---

---

# Part 2: Sales Order — Tax Reference

---

## 2.1 C1 — Item-Level Exemption

### 2.1.1 Certificate Selection & Item Eligibility

#### TC-SO-C1-01: Select C1 Certificate — All Items Covered (Happy Path)

| | |
|---|---|
| **Precondition** | A Sales Order is open with 3 items; all 3 are listed in the C1 certificate's item references |
| **Steps** | In the Tax Reference section → open the certificate dropdown → select the C1 certificate |
| **Expected** | Certificate details (title, tax registration number, dates, status) auto-filled; system checks each item against the certificate; all 3 items show tax exemption applied and Tax on Items field locked; global tax field on the order cleared and disabled |

---

#### TC-SO-C1-02: Select C1 Certificate — Partial Coverage + Save

| | |
|---|---|
| **Precondition** | Sales Order has 3 items; Items 1 and 2 are in the C1 certificate references; Item 3 is not |
| **Steps** | Select the C1 certificate from the Tax Reference dropdown → set standard tax on Item 3 manually → Click Save |
| **Expected** | Items 1 and 2: tax exemption applied, Tax on Items locked; Item 3: message appears *"This item is not eligible for tax exemption"*, Tax on Items stays editable; global tax cleared; on Save: order saved with Items 1 and 2 carrying the exemption reference, Item 3 carrying standard tax, no global tax on the order |

---

### 2.1.2 Adding Items After Certificate is Selected

#### TC-SO-C1-03: Add Non-Covered Item After C1 Selected

| | |
|---|---|
| **Precondition** | A C1 certificate is already selected on the Sales Order |
| **Steps** | Add a new line item whose product is not listed in the C1 certificate references |
| **Expected** | Message appears: *"This item is not eligible for tax exemption."*; Tax on Items field for that line remains editable |

---

#### TC-SO-C1-04: Add Covered Item After C1 Selected

| | |
|---|---|
| **Precondition** | A C1 certificate is already selected on the Sales Order |
| **Steps** | Add a new line item whose product is listed in the C1 certificate references |
| **Expected** | Tax exemption automatically applied to that line; Tax on Items field is locked |

---

### 2.1.3 Global Tax Behaviour

#### TC-SO-C1-06: C1 Clears Global Tax When Already Set

| | |
|---|---|
| **Precondition** | Sales Order already has a global tax set (e.g. GST 6%) |
| **Steps** | Select a C1 certificate from the Tax Reference dropdown |
| **Expected** | Global tax field is cleared and disabled; user cannot re-set global tax while C1 certificate is active |

---

#### TC-SO-C1-07: Save Blocked — Item Has No Tax at All

| | |
|---|---|
| **Precondition** | C1 certificate selected (global tax cleared); one line item has no tax template and is not eligible for exemption — nothing is set on that line |
| **Steps** | Click Save |
| **Expected** | Save blocked; error on that line: *"Tax on Items is required when no global tax is set"* |

---

## 2.2 C3 — Order-Level Exemption

### 2.2.1 Certificate Selection & Item Coverage

#### TC-SO-C3-01: Select C3 Certificate — All Items Covered + Save (Happy Path)

| | |
|---|---|
| **Precondition** | Sales Order has items; all items are listed in the C3 certificate references |
| **Steps** | Select the C3 certificate from the Tax Reference dropdown → Click Save |
| **Expected** | Tax exemption applied at the order level; certificate details shown; individual line items are not individually marked — the whole order is covered; global tax on the order unchanged; on Save: order saved with C3 certificate linked at the order level, no per-item exemption references stored individually |

---

#### TC-SO-C3-02: Select C3 Certificate — Ineligible Items Trigger Removal Prompt

| | |
|---|---|
| **Precondition** | Sales Order has 5 items; only 1 is listed in the C3 certificate references |
| **Steps** | Select the C3 certificate from the Tax Reference dropdown |
| **Expected** | Confirmation prompt lists the 4 items not covered: *"The following items are not covered by this certificate and will be removed. Continue?"* → Confirm: 4 items removed, certificate applied → Cancel: certificate selection reverted, all 5 items remain |

---

#### TC-SO-C3-03: Select C3 Certificate — No Items Added Yet

| | |
|---|---|
| **Precondition** | Sales Order has no line items yet |
| **Steps** | Select a C3 certificate |
| **Expected** | Certificate applied without any prompt; user can then add items that are covered by the certificate |

---

## 2.3 A57 — Order-Level Exemption

#### TC-SO-A57-01: Select A57 Certificate — Order-Level Exemption

| | |
|---|---|
| **Precondition** | A57 certificate exists and is available in the dropdown |
| **Steps** | Select an A57 certificate from the Tax Reference dropdown on a Sales Order |
| **Expected** | Tax exemption applied at the order level (same behaviour as C3); certificate details auto-filled; global order tax not affected |

---

## 2.4 Guards & Edge Cases

### 2.4.1 Dropdown State

#### TC-SO-GRD-05: Dropdown Disabled — No Company Selected

| | |
|---|---|
| **Precondition** | Sales Order is open with no company (biller) selected |
| **Steps** | Look at the Tax Reference section |
| **Expected** | Certificate dropdown shows *"Select company first..."* and cannot be clicked |

---

#### TC-SO-GRD-06: No Certificates Available for This Company

| | |
|---|---|
| **Precondition** | The selected company has no certificates set up |
| **Steps** | Open the Tax Reference certificate dropdown |
| **Expected** | Dropdown shows *"No certificates available"* |

---

### 2.4.2 Customer Validation

#### TC-SO-GRD-01: Certificate Belongs to a Different Customer

| | |
|---|---|
| **Precondition** | The Sales Order is for Customer A; a certificate in the dropdown is linked to Customer B |
| **Steps** | Select that certificate |
| **Expected** | Warning appears: *"This certificate belongs to a different customer and cannot be used for this order."*; certificate is not applied |

---

#### TC-SO-GRD-02: Certificate With No Customer Link — Allowed

| | |
|---|---|
| **Precondition** | A certificate exists that is not linked to any specific customer |
| **Steps** | Select that certificate on any Sales Order |
| **Expected** | Selection proceeds normally; certificate applied without a customer mismatch warning |

---

### 2.4.3 Clearing & Rollback

#### TC-SO-GRD-03: Remove Certificate — All Exemptions Cleared

| | |
|---|---|
| **Precondition** | A C1 certificate is active on the Sales Order; 2 items have tax exemption locked |
| **Steps** | Open the Tax Reference dropdown → Select "No certificate" |
| **Expected** | All tax exemption locks removed; Tax on Items becomes editable again on all lines; attached certificate file cleared; global tax field re-enabled |

---

#### TC-SO-GRD-04: Certificate Validation Fails — Selection Reverted

| | |
|---|---|
| **Precondition** | A certificate is selected but the system cannot validate the items (e.g. server error) |
| **Steps** | Select a certificate → system returns a validation error |
| **Expected** | Certificate selection reverted to what it was before; error message shown; no tax exemptions applied |

---

### 2.4.4 Attachment & Reopen Behaviour

#### TC-SO-GRD-07: Reopen Existing Sales Order — Exemptions Restored

| | |
|---|---|
| **Precondition** | A Sales Order was previously saved with a C1 certificate active |
| **Steps** | Re-open the Sales Order in edit mode |
| **Expected** | System re-checks item eligibility; Tax on Items locks restored on the same items that were locked before; certificate shown as selected |

---

#### TC-SO-GRD-08: Manually Uploaded Attachment Not Replaced by Certificate

| | |
|---|---|
| **Precondition** | User has manually uploaded a PDF to the Tax Reference attachment field before selecting a certificate |
| **Steps** | Select a certificate that has its own attached file |
| **Expected** | User's manually uploaded file kept; not replaced by the certificate's own attachment |

---

---

# Part 3: Real-World User Scenarios

End-to-end scenarios based on real client business situations. Each tests the full workflow across multiple features.

> ⚠️ Correction notes are included where the original scenario did not align with how MAIA works.

---

## 3.1 C1 Scenarios

### TC-SCN-01: New Customer with C1 Certificate — First Order

**Context:** ABC Trading Sdn Bhd is a new manufacturing customer who just received their C1 certificate covering HS code TC001 (salt and sugar products). Their sales agent receives a purchase order for 5,000kg salt (TC001) worth RM15,000 along with the newly issued C1 certificate dated January 2026. The customer expects a quotation within 2 hours and wants confirmation that the order will be tax-exempt before paying.

| | |
|---|---|
| **Precondition** | ABC Trading does not yet exist in MAIA; C1 certificate PDF is on hand; salt (TC001) exists in the product catalogue |
| **Steps** | 1. Create ABC Trading as a new customer with address and contact → 2. Go to Certificates tab → Upload the C1 PDF and confirm extraction → 3. Verify TC001 items appear in the certificate reference list → 4. Create a new Sales Order for ABC Trading → 5. Select the C1 certificate in the Tax Reference section → 6. Add 5,000kg salt (TC001) → 7. Confirm tax exemption applied and locked → 8. Generate and send quotation |
| **Expected** | Customer profile created with C1 attached; salt line shows tax exemption locked; quotation reflects RM15,000 with no tax; certificate title, tax registration number, and dates visible on the order |

---

### TC-SCN-02: Existing Customer with Expired C1 Certificate

**Context:** XYZ Foods Sdn Bhd has been ordering monthly for 2 years. Their C1 certificate expired on 31 December 2025. On 26 January 2026, the customer places an urgent order for 3,000kg sugar (TC001) worth RM9,000, expecting their usual tax exemption. The sales agent notices the certificate status shows expired.

> ⚠️ **Correction:** The original scenario mentioned an "LMW Certificate." LMW (Licensed Manufacturing Warehouse) is a **customer category** in MAIA, not a certificate type. MAIA only supports C1, C3, and A57. This scenario is corrected to refer to an **expired C1 certificate**.

| | |
|---|---|
| **Precondition** | XYZ Foods exists in MAIA with a C1 certificate whose valid-till date is 31/12/2025; today's date is 26/01/2026 |
| **Steps** | 1. Open XYZ Foods → Certificates tab → confirm C1 status shows expired → 2. Attempt to select the expired C1 on the new Sales Order → note the status warning → 3. Inform customer their C1 has expired and a renewed certificate is required → 4a. If customer provides renewed C1 PDF: upload it, re-link to the order, apply exemption → 4b. If no renewed cert yet: proceed with order at standard tax |
| **Expected** | Expired certificate visible in listing with expired status; system shows status warning when selected; if renewed cert uploaded, exemption applied; if no renewal, order saves with standard tax |

---

### TC-SCN-04: Mixed Order — C1 Items and Non-Exempt Items on Same Order

**Context:** DEF Manufacturing orders: 2,000kg Salt (TC001, covered by C1) RM6,000 + 1,500kg Sugar (TC001, covered by C1) RM4,500 + 1,000kg Flour (TC003, no certificate) RM3,000. They want to know which items are tax-exempt and what the final total will be.

> ⚠️ **Correction:** The original scenario described using **both C1 and C3 on the same order**. MAIA enforces **one tax reference per Sales Order** — you cannot mix C1 and C3 on a single order. The correct approach: use C1 for the whole order. Salt and Sugar (both TC001, in C1 refs) are exempt and locked. Flour (TC003, not in C1 refs) carries standard tax on the same order. If Sugar specifically requires C3, it must go on a **separate Sales Order**.

| | |
|---|---|
| **Precondition** | DEF Manufacturing has a valid C1 certificate with TC001 (salt and sugar) in its references; flour (TC003) is not in any certificate |
| **Steps** | 1. Create Sales Order for DEF Manufacturing → 2. Select C1 certificate → 3. Add 2,000kg Salt (TC001) — confirm locked → 4. Add 1,500kg Sugar (TC001) — confirm locked → 5. Add 1,000kg Flour (TC003) — confirm warning "not eligible", Tax on Items editable → 6. Set standard tax on Flour manually → 7. Save → 8. Review order summary |
| **Expected** | Salt and Sugar: exempt, locked; Flour: no exemption, standard tax editable; order summary shows RM10,500 exempt + RM3,000 taxable; customer can see clearly which items are exempt |

---

### TC-SCN-06: VIP Customer — Special Pricing with C1 Tax Exemption

**Context:** Premium Foods has pre-approved dealer pricing at 15% off retail. Salt (TC001) retail is RM3.00/kg; dealer price is RM2.55/kg. They order 10,000kg (RM25,500) with a valid C1 certificate. The system flags the price as below minimum threshold and routes to a pricing approval queue.

| | |
|---|---|
| **Precondition** | Premium Foods has dealer pricing configured in MAIA; minimum price threshold is set; C1 certificate is attached to the customer; salt (TC001) is in the C1 references |
| **Steps** | 1. Create Sales Order for Premium Foods → 2. Select C1 certificate → 3. Add 10,000kg Salt at RM2.55/kg → 4. System applies exemption (locked) and flags price below threshold → 5. Order routed to pricing approval queue → 6. Finance approver reviews and confirms this is pre-approved dealer pricing → 7. Approver approves → 8. Order proceeds |
| **Expected** | Exemption applied and locked; price flag shown; order in approval queue; approver sees dealer pricing justification; after approval, total = RM25,500 with zero tax; full audit trail shows pricing approval and certificate reference |

---

### TC-SCN-09: Rush Order with C1 — Insufficient Stock for Full Quantity

**Context:** A customer urgently requests 15,000kg Salt (TC001) for next-morning delivery with their valid C1 certificate. Total stock is 20,000kg but 10,000kg is reserved for C3 customers, leaving only 10,000kg available. The remaining 5,000kg arrives next week.

| | |
|---|---|
| **Precondition** | Customer has valid C1 certificate for Salt (TC001); available stock is 10,000kg; 10,000kg reserved for C3 orders |
| **Steps** | 1. Check real-time stock — confirm only 10,000kg available → 2. Inform customer full 15,000kg cannot be delivered tomorrow → 3. Option A (split): Create SO for 10,000kg with C1 → schedule for tomorrow; create second SO for 5,000kg with C1 → schedule for next week → 4. Option B (wait): Advise customer to wait for full 15,000kg next week under one order |
| **Expected** | Option A: Two separate SOs, each with C1 selected and exemption applied; first (10,000kg) next-day; second (5,000kg) next week; Option B: Single order for 15,000kg once stock arrives, C1 exemption applied |

---

## 3.2 C3 Scenarios

### TC-SCN-03: C3 Order — Quota Partially Used, Insufficient for New PO

**Context:** GreenTech Industries has a C3 certificate for Industrial Salt (Item X), approved quota 10,000kg. They have used 7,500kg across previous orders. New PO arrives for 5,000kg worth RM25,000. Only 2,500kg of quota remains.

> ⚠️ **Correction:** MAIA does **not track C3 quota usage** across orders. Quota management is handled externally via the SST portal. MAIA links one C3 cert to one order — the agent must verify remaining quota externally before creating the order.

| | |
|---|---|
| **Precondition** | GreenTech has a valid C3 certificate in MAIA for Item X; agent has confirmed externally (SST portal) that only 2,500kg quota remains |
| **Steps** | 1. Review C3 certificate in MAIA — note item references and certificate number → 2. Inform customer only 2,500kg is available under the current C3 → 3. Option A: Create SO for 2,500kg under C3 (cert selected, order-level exemption); create second SO for remaining 2,500kg with no cert (standard tax) → 4. Option B: Do not create order until customer receives a new C3 certificate |
| **Expected** | Option A: Two separate SOs — first (2,500kg, C3 selected, exempt), second (2,500kg, no cert, standard tax); Option B: No order until new C3 uploaded and available |

---

### TC-SCN-07: C3 Batch Allocation — Two Customers, One Incoming Batch

**Context:** Customer A has C3 certificate for Premium Sugar (3,000kg needed) and Customer B has C3 certificate for the same item (2,000kg needed). New Batch #B2026-050 (5,000kg total) arrives today. Warehouse prefers one batch per customer for C3 audit compliance.

| | |
|---|---|
| **Precondition** | Both customers have valid C3 certificates for Premium Sugar in MAIA; Batch #B2026-050 (5,000kg) entered in batch intake with C3 classification |
| **Steps** | 1. Create SO for Customer A → select Customer A's C3 cert → add 3,000kg → link to Batch #B2026-050 → Save → 2. Create separate SO for Customer B → select Customer B's C3 cert → add 2,000kg → warehouse flags same batch used for two C3 orders → 3. Coordinate: allocate first 3,000kg of batch to Customer A; Customer B's 2,000kg from remainder of same batch with clear labelling |
| **Expected** | Two separate SOs — one per customer, each with their own C3 certificate; if batch is split across two C3 orders, each allocation labelled with customer's C3 ref for audit; warehouse can verify batch-to-customer mapping in MAIA |

---

### TC-SCN-10: Customer Requests to Combine Two C3 Orders from Same Batch

**Context:** Industrial Supplies Co. has an existing SO for 2,000kg (Batch #B2026-030, C3 cert linked, delivery tomorrow). Today they place a new urgent order for 3,000kg of the same item from the same batch. They ask to combine both into a single 5,000kg delivery to save on logistics.

| | |
|---|---|
| **Precondition** | Existing SO (2,000kg) linked to Batch #B2026-030 with C3 certificate; 3,000kg of same batch unallocated; C3 is single-use per order |
| **Steps** | 1. Review existing SO and C3 certificate linkage → 2. Explain to customer that C3 is issued per order — combining two orders under one C3 requires external SST documentation amendment → 3. If customer accepts separate deliveries: create new SO for 3,000kg with its own C3 cert, link to same batch, schedule alongside existing SO → 4. If customer insists on combining: escalate to management; do not combine in MAIA until management approves and updated documentation is uploaded |
| **Expected** | Existing order unchanged; new SO created separately with its own C3 cert; both can be delivered same day from same batch if logistics permits, but remain separate records in MAIA for audit compliance |

---

## 3.3 A57 Scenarios

### TC-SCN-05: A57 Certificate — Full PO Coverage and Attempt to Add Extra Item

**Context:** RST Resources sends PO #PO-2026-456 (5 items, RM50,000, 8,000kg total) with an approved A57 certificate whose goods list covers all 5 items. The customer later calls to add a sixth item not listed in the A57 certificate.

> ⚠️ **Correction:** The original scenario stated A57 "covers ALL items regardless of exemption status." A57 still checks items against its goods references — items not in the list are flagged for removal. The order is only fully exempt if every item is in the A57 goods list.

| | |
|---|---|
| **Precondition** | RST Resources has a valid A57 certificate in MAIA with all 5 PO items in its goods references |
| **Steps** | 1. Create SO for RST Resources (PO ref: PO-2026-456) → 2. Select A57 certificate → 3. Add all 5 items — confirm no removal prompt (all in cert) → 4. Save → 5. Customer calls to add a 6th item not in A57 refs → 6. Attempt to add 6th item |
| **Expected** | Steps 1–4: All 5 items accepted, order-level exemption applied, order saved; Step 6: System warns that the 6th item is not covered by the A57 certificate; agent informs customer the A57 covers only the items declared in the original certificate — the new item requires a separate order at standard tax |

---

## 3.4 Compliance & Operations

### TC-SCN-08: COA Requirement — Customer Needs Detailed Format, Warehouse Has Standard Only

**Context:** HealthCare Labs orders 5,000kg Item Z (RM20,000). Customer profile shows COA required: Detailed format (purity % + heavy metals analysis). Order fulfils from Batch #B2026-075. Warehouse only has a standard masked COA on file. Customer threatens to reject delivery if COA doesn't meet their specification.

| | |
|---|---|
| **Precondition** | HealthCare Labs customer profile has COA requirement set to Detailed; Batch #B2026-075 exists in batch intake with only a standard COA attached |
| **Steps** | 1. Create SO for HealthCare Labs → system surfaces COA requirement: Detailed format → 2. Check Batch #B2026-075 — only standard COA attached → 3. Flag to warehouse that detailed COA is required before delivery → 4. Warehouse obtains detailed COA from supplier/lab and uploads it to Batch #B2026-075 in MAIA → 5. Confirm detailed COA is now attached → 6. Proceed with delivery |
| **Expected** | Customer COA requirement visible on SO and delivery screen; warehouse clearly informed of required format; after uploading, batch record shows correct attachment; delivery order generated with detailed COA linked; customer receives correct documentation |

---

## Behaviour Summary by Certificate Type

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
| One cert per Sales Order | ✓ | ✓ | ✓ |
| Quota tracked in MAIA | ✗ (no quota) | ✗ (external, SST portal) | ✗ |

---

## See Also

- [[04 - QA & Known Issues/Test Scenarios Index]]
- [[01 - MAIA Product/Product Specs/Certificate Tax Reference Spec]]
- [[01 - MAIA Product/Technical/Tax Refactor/Tax Refactoring]]
- [[03 - Clients/Active Cooking Clients/Holsen/Product/Working Holsen]]
- Sample certs: `C1 Sample.pdf`, `C3 Certificate 2.pdf`, `C3 AppointmentLetter 1.pdf` (Downloads)
