---
owner: Gareth
status: draft
last_reviewed: 2026-05-05 (BE alignment)
---

# Certificate (Tax Reference) Test Cases

**Total Test Cases:** 70
**Feature:** Certificate / Tax Reference (C1, C3, A57)
**Design Ref:** [[01 - MAIA Product/Product Specs/Certificate Tax Reference Spec]]

> **Merge note:** TC-SO-C1-05 merged into TC-SO-C1-02 (save step added); TC-SO-C3-04 merged into TC-SO-C3-01 (save step added). Both were redundant as their expected outcomes were already covered.

> **Update 2026-04-28:** TCs updated for DD-001 (reference data model redesign) and DD-002 (listing API changes). New TCs: TC-CERT-MAN-01, TC-CERT-UPL-03, TC-LIST-ADV-01, TC-LIST-ADV-02, TC-SO-A57-02.

> **Update 2026-05-04 (v1):** TCs updated for BE refactor — unified references for manual and uploaded certs; extracted_data removed from get_certificate response. TC-SO-A57-02 corrected (A57 is company-level, no customer eligibility filter). New TCs: TC-CERT-UPL-06, TC-CERT-UPL-07, TC-CERT-EXP-01, TC-SO-C1-EFF-01, TC-SO-AME-01, TC-SO-AME-02.

> **Update 2026-05-04 (Final Design — Tech Lead):** Major design change. Certificate is now a submittable doctype (Draft → Submitted → Amended → Cancelled). CPO has no HS validation by design — enforcement only at SO level. Frontend applies tax override immediately on cert selection; backend re-validates and enforces on save. New TCs: TC-CERT-LCY-01 to TC-CERT-LCY-04.

> **Update 2026-05-05 (v2.0 alignment):** TCs aligned to Design Update v2.0 (4 May 2026). TC-CERT-LIST-03 and TC-CERT-LIST-04 updated to enforce Draft-only restriction for edit and delete. TC-CERT-LCY-03 updated to include amended cert re-submit requirement before usable on new SOs. TC-SO-C3-01 cleaned up. TC-CERT-EXP-01 corrected (docstatus stays Submitted — expiry is business rule only).

> **Update 2026-05-05 (BE implementation alignment):** TCs aligned to BE implementation doc. Amendment flow corrected: Cancel required before Amend. TC-CERT-LCY-04 and TC-CERT-LIST-04 updated: cancel is not blocked by linked SOs in current BE implementation. TC-CERT-UPL-06 updated: extraction overrides reference_name to extracted value. New TC added: TC-SO-VAL-03 (order-level vs item-level cert mismatch).

---

## Test Case Index

| #   | ID              | Description                                                              |
| --- | --------------- | ------------------------------------------------------------------------ |
| 1   | TC-CERT-C1-01   | Create C1 — happy path                                                   |
| 2   | TC-CERT-C3-01   | Create C3 — happy path                                                   |
| 3   | TC-CERT-A57-01  | Create A57 — happy path                                                  |
| 4   | TC-CERT-GRD-01  | Create/Upload — no company selected                                      |
| 5   | TC-CERT-GRD-02  | Create — missing certificate title                                       |
| 6   | TC-CERT-GRD-03  | Create — missing tax registration number                                 |
| 7   | TC-CERT-C1-02   | Create C1 — missing customer address                                     |
| 8   | TC-CERT-C1-03   | Create C1 — missing customer contact                                     |
| 9   | TC-CERT-C3-02   | Create C3 — missing eligible customer                                    |
| 10  | TC-CERT-A57-02  | Create A57 — missing company contact                                     |
| 11  | TC-CERT-UPL-01  | Upload C1 PDF — happy path                                               |
| 12  | TC-CERT-UPL-02  | Upload C3 PDF — happy path                                               |
| 13  | TC-CERT-UPL-04  | Upload — extraction timeout                                              |
| 14  | TC-CERT-UPL-05  | Upload — extraction fails                                                |
| 15  | TC-CERT-LIST-01 | Listing — status filter                                                  |
| 16  | TC-CERT-LIST-02 | Listing — view certificate details                                       |
| 17  | TC-CERT-LIST-03 | Listing — edit certificate                                               |
| 18  | TC-CERT-LIST-04 | Listing — delete certificate                                             |
| 19  | TC-CERT-LIST-05 | Listing — attachment preview                                             |
| 20  | TC-SO-C1-01     | SO C1 — all items covered (happy path)                                   |
| 21  | TC-SO-C1-02     | SO C1 — partial coverage + save                                          |
| 22  | TC-SO-C1-03     | SO C1 — add non-covered item after cert selected                         |
| 23  | TC-SO-C1-04     | SO C1 — add covered item after cert selected                             |
| 24  | TC-SO-C1-06     | SO C1 — clears global tax                                                |
| 25  | TC-SO-C1-07     | SO C1 — save blocked, item has no tax                                    |
| 26  | TC-SO-C3-01     | SO C3 — all items covered + save (happy path)                            |
| 27  | TC-SO-C3-02     | SO C3 — ineligible items prompt removal                                  |
| 28  | TC-SO-C3-03     | SO C3 — no items on order yet                                            |
| 29  | TC-SO-A57-01    | SO A57 — order-level exemption                                           |
| 30  | TC-SO-GRD-05    | SO guard — dropdown disabled, no company                                 |
| 31  | TC-SO-GRD-06    | SO guard — no certificates available                                     |
| 32  | TC-SO-GRD-01    | SO guard — customer mismatch                                             |
| 33  | TC-SO-GRD-02    | SO guard — cert with no customer link                                    |
| 34  | TC-SO-GRD-03    | SO guard — remove certificate, locks cleared                             |
| 35  | TC-SO-GRD-04    | SO guard — validation fails, selection reverted                          |
| 36  | TC-SO-GRD-07    | SO guard — reopen order, locks restored                                  |
| 37  | TC-SO-GRD-08    | SO guard — manual attachment not overwritten                             |
| 38  | TC-SCN-01       | Scenario — new customer, C1 first order                                  |
| 39  | TC-SCN-02       | Scenario — expired C1 certificate                                        |
| 40  | TC-SCN-04       | Scenario — mixed C1 + non-exempt items                                   |
| 41  | TC-SCN-06       | Scenario — VIP pricing with C1 exemption                                 |
| 42  | TC-SCN-09       | Scenario — rush order, C1, insufficient stock                            |
| 43  | TC-SCN-03       | Scenario — C3, quota partially used                                      |
| 44  | TC-SCN-07       | Scenario — C3 batch allocation, two customers                            |
| 45  | TC-SCN-10       | Scenario — customer requests to combine C3 orders                        |
| 46  | TC-SCN-05       | Scenario — A57, full PO coverage, attempt to add extra item              |
| 47  | TC-SCN-08       | Scenario — COA requirement, warehouse has wrong format                   |
| 48  | TC-CERT-MAN-01  | Create certificate — free-text references, no item record match required |
| 49  | TC-CERT-UPL-03  | Upload — view detail of PDF-extracted certificate                        |
| 50  | TC-LIST-ADV-01  | Listing — filter by expiry date                                          |
| 51  | TC-LIST-ADV-02  | Listing — all certificates without customer filter (company-level view)  |
| 52  | TC-SO-A57-02    | SO A57 — available to all customers under same company                   |
| 53  | TC-CPO-C3-01    | CPO upload — link C3 cert at upload time                                 |
| 54  | TC-CPO-C1-01    | CPO upload — link C1 cert at upload time                                 |
| 55  | TC-CPO-UPD-01   | CPO update — add, change, and remove cert on existing CPO                |
| 56  | TC-CPO-SO-01    | CPO → SO conversion — cert carries over to Sales Order                   |
| 57  | TC-CPO-GRD-01   | CPO upload — non-Submitted cert blocked                                  |
| 58  | TC-SO-VAL-01    | SO submit — C3 fails without required attachments                        |
| 59  | TC-SO-VAL-02    | SO submit — fails when item HS code not in certificate                   |
| 70  | TC-SO-VAL-03    | SO submit — order-level and item-level cert mismatch blocked             |
| 60  | TC-CERT-UPL-06  | Upload — owner mismatch warning shown                                    |
| 61  | TC-CERT-UPL-07  | Upload — certificate type mismatch warning shown                         |
| 62  | TC-CERT-EXP-01  | Certificate auto-expiry — cert flagged past expiry date; status stays Submitted |
| 63  | TC-SO-C1-EFF-01 | SO C1/C3 submit — item effective date in future, blocked                 |
| 64  | TC-SO-AME-01    | Amend SO — price and tax changes blocked when certificate linked          |
| 65  | TC-SO-AME-02    | Amend SO — quantity change allowed when certificate linked                |
| 66  | TC-CERT-LCY-01  | Certificate lifecycle — Draft cert cannot be used on SO                  |
| 67  | TC-CERT-LCY-02  | Certificate lifecycle — Submit cert, becomes usable on SO                |
| 68  | TC-CERT-LCY-03  | Certificate lifecycle — Amend creates new version, old SOs unaffected    |
| 69  | TC-CERT-LCY-04  | Certificate lifecycle — Cancel always allowed; linked SOs fail at submit  |

---

## Certificate Type Reference

| Type | Scope | What it does |
|------|-------|--------------|
| **C1** | Per item | Exemption applied line by line. Only items listed in the certificate are exempted. Global tax on the order is cleared when C1 is active. |
| **C3** | Whole order | Exemption applies to the entire order. One C3 cert per order. Only items listed in the cert can be on the order. |
| **A57** | Whole order | Same as C3 — order-level exemption. Used for trader-to-LMW sales. Not currently in active use. |

## Data Model & Lifecycle Reference

| Concept | Detail |
|---|---|
| **Data storage** | All certificate fields (manual or PDF-extracted) are stored as key-value rows. The API returns these as a flat array — one row per field. No nested structure in the response. |
| **Relationships** | Certificate ↔ Customer and Certificate ↔ Company are tracked as internal dynamic links. These are not part of the certificate data rows. |
| **Certificate lifecycle** | Submittable doctype: **Draft → Submitted → Cancelled → Amended**. Amending requires Cancel first. Only Submitted certificates can be linked to Sales Orders. |
| **Validation timing** | Frontend applies tax override immediately on cert selection (UX feedback). Backend re-validates and enforces on SO save — backend is the authority. |
| **HS code matching** | Runtime only — matched via database lookup at SO save. No permanent cert-to-item linkage stored. |
| **CPO validation** | No HS code validation on CPO by design. CPO is raw intake. Enforcement only at SO level. |
| **Cancel restriction** | Cancel is always allowed regardless of linked SOs. Any future SO submit referencing a Cancelled cert will fail at that point. |

---

---

# Part 1: Certificate Management

---

## 1.1 Create Certificate

### 1.1.1 Happy Path — By Certificate Type

#### TC-CERT-C1-01: Create C1 — Happy Path

*Precondition: Company is selected. The customer has at least one saved address and one saved contact.*

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | Go to the Certificates tab. Click **Create**. | The Create Certificate form opens. |
| 2 | Select **Type: C1** from the certificate type field. | C1-specific fields appear: certificate title, tax registration number, customer address, and customer contact. |
| 3 | Fill in certificate title, tax registration number, status, customer address, and customer contact. | All fields accept input. No errors shown. |
| 4 | Click **Submit**. | Certificate saved and appears in the Certificates list with type C1. Detail view shows five item category sections: Raw Materials, Components, Packaging Materials, Manufacturing Aids, and Cleanroom Equipment. Each item row shows HS Code, Description, Classification, and Effective Date columns. |

---

#### TC-CERT-C3-01: Create C3 — Happy Path

*Precondition: An eligible customer, company address, customer contact, and customer address are all available.*

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | Go to the Certificates tab. Click **Create**. | The Create Certificate form opens. |
| 2 | Select **Type: C3** from the certificate type field. | C3-specific fields appear, including the eligible customer field, company address, and customer contact. |
| 3 | Fill in all required fields. | All fields accept input. No errors shown. |
| 4 | Add items to the reference tables. | Items appear in the appropriate category sections with HS Code, Description, Classification, and Effective Date fields. |
| 5 | Click **Submit**. | C3 certificate saved. Detail view shows the eligible customer, company address, and five item category sections. Each item row shows HS Code, Description, Classification, and Effective Date columns. |

---

#### TC-CERT-A57-01: Create A57 — Happy Path

*Precondition: Company address and company contact are available.*

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | Go to the Certificates tab. Click **Create**. | The Create Certificate form opens. |
| 2 | Select **Type: A57** from the certificate type field. | A57-specific fields appear. No five-category item tables shown. No Customer Information section shown. |
| 3 | Fill in the company address and company contact. | Fields accept input. No errors shown. |
| 4 | Add goods items to the goods table. | Items appear in the Goods table. |
| 5 | Click **Submit**. | A57 certificate saved. Detail view shows a single Goods table — no five-category item sections and no Customer Information section. |

---

#### TC-CERT-MAN-01: Create Certificate — Free-Text Data, No Item Catalogue Match Required

*Precondition: Company is selected. User has a physical certificate with HS codes and descriptions that do not correspond to any product in the MAIA item catalogue.*

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | Click **Create**. Select any certificate type. Fill in all required header fields. | Form accepts input. No errors on header fields. |
| 2 | In the item reference tables, enter HS code, description, and classification values that do not match any existing item in MAIA. | Fields accept free text. No lookup error or item validation triggered — HS code and description are free-text fields, not item catalogue lookups. |
| 3 | Click **Save** (saves as Draft). | Certificate saved in Draft status. Detail view shows exactly what was entered. No error about unrecognised HS codes or descriptions. Certificate stays in Draft until explicitly submitted. |

---

### 1.1.2 Required Field Validation

#### Shared — All Certificate Types

##### TC-CERT-GRD-01: No Company Selected — Create or Upload

*Precondition: User is on the Certificates tab with no company selected in the workspace.*

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | Click **Create** — or — click **Upload**. | Warning message appears: *"Select a company before creating or uploading a certificate."* The form does not open. |

---

##### TC-CERT-GRD-02: Missing Certificate Title

*Precondition: The Create Certificate form is open (any certificate type).*

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | Leave the certificate title field blank. Click **Submit**. | Error appears on the certificate title field. Certificate is not saved. |

---

##### TC-CERT-GRD-03: Missing Tax Registration Number

*Precondition: The Create Certificate form is open (any certificate type).*

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | Leave the tax registration number field blank. Click **Submit**. | Error appears on the tax registration number field. Certificate is not saved. |

---

#### C1-Specific Validation

##### TC-CERT-C1-02: Create C1 — Missing Customer Address

*Precondition: Company and customer are selected.*

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | Start creating a C1 certificate. Leave the customer address field empty. Click **Submit**. | Error appears on the customer address field. Certificate is not saved. |

---

##### TC-CERT-C1-03: Create C1 — Missing Customer Contact

*Precondition: Company and customer are selected.*

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | Start creating a C1 certificate. Leave the customer contact field empty. Click **Submit**. | Error appears on the customer contact field. Certificate is not saved. |

---

#### C3-Specific Validation

##### TC-CERT-C3-02: Create C3 — Missing Eligible Customer

*Precondition: The Create C3 form is open.*

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | Leave the eligible customer field empty. Click **Submit**. | Error appears on the eligible customer field. Certificate is not saved. |

---

#### A57-Specific Validation

##### TC-CERT-A57-02: Create A57 — Missing Company Contact

*Precondition: The Create A57 form is open.*

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | Leave the company contact field empty. Click **Submit**. | Error appears on the company contact field. Certificate is not saved. |

---

## 1.2 Upload Certificate (PDF Extraction)

### 1.2.1 Happy Path

#### TC-CERT-UPL-01: Upload C1 PDF — Happy Path

*Precondition: A valid C1 certificate PDF is available. Company is selected.*

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | Click **Upload**. Select the C1 PDF file. | File selected. Certificate type shown as C1. Customer field pre-filled if detected in the PDF. |
| 2 | Confirm the certificate type as C1 and verify the customer is correctly pre-filled. Click **Submit**. | Loading indicator appears while extraction runs. |
| 3 | Wait for extraction to complete. | Certificate appears in the list in **Draft** status. All extracted fields — header information, HS codes, descriptions, classifications, and effective dates — shown in the certificate detail view. Same layout as a manually created certificate. |
| 4 | Check for any owner mismatch warning. | If the name in the PDF does not match the customer entered on upload, a warning is shown on the detail view (e.g. *"Expected 'ABC', extracted 'XYZ'"*) and the certificate name is updated to the extracted value. |
| 5 | Check the certificate status. | Certificate is in **Draft** status. It must be submitted before it can be used on a Sales Order. |

---

#### TC-CERT-UPL-02: Upload C3 PDF — Happy Path

*Precondition: A valid C3 certificate PDF is available. Company is selected.*

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | Click **Upload**. Select the C3 PDF file. Click **Submit**. | Loading indicator appears while extraction runs. |
| 2 | Wait for extraction to complete. | C3 certificate appears in the list in **Draft** status. All extracted fields — header information, HS codes, eligible customer details, and classifications — shown in the detail view. Certificate must be submitted before it can be used on a Sales Order. |

---

#### TC-CERT-UPL-03: View Detail — PDF-Uploaded Certificate

*Precondition: At least one certificate was created via PDF upload (not manual creation).*

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | Click on the uploaded certificate row in the listing. | Certificate detail view opens. All fields — header information, HS codes, descriptions, eligible customer (if C3) — are shown. The layout is the same whether the certificate was manually created or uploaded via PDF. |
| 2 | Check the certificate status. | Status shows **Draft** until manually submitted. |
| 3 | Check for any mismatch warnings. | If a mismatch was detected during extraction (owner name or certificate type), a warning banner is visible on the detail view. |

---

### 1.2.2 Mismatch Warnings

#### TC-CERT-UPL-06: Upload — Owner Mismatch Warning Shown

*Precondition: A certificate PDF is available where the company or customer name in the PDF does not match what is provided on upload (e.g. upload with customer "ABC Trading" but PDF says "XYZ Corp").*

| Step | What to do                                                                                          | What you should see                                                                                                                                                                    |
| ---- | --------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1    | Upload the certificate PDF using the mismatched owner information. Wait for extraction to complete. | Certificate is created successfully — extraction is not rejected. The certificate name is updated to the value extracted from the PDF (the input name is overridden).                  |
| 2    | Open the certificate detail view.                                                                   | A warning is shown with both the expected and extracted names (e.g. *"Expected 'ABC Trading', extracted 'XYZ Corp'"*). All other certificate fields are populated from the extraction. |
| 3    | Note the required follow-up.                                                                        | If the extracted name is incorrect, use Update Certificate to manually correct the name.                                                                                               |

---

#### TC-CERT-UPL-07: Upload — Certificate Type Mismatch Warning Shown

*Precondition: A certificate PDF whose content is C3 is uploaded with the type set to A57.*

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | Upload the PDF. Select **Type: A57**. Wait for extraction to complete. | Certificate is created. Certificate type is saved as A57 (what was selected by the user). |
| 2 | Open the certificate detail view. | A warning is shown indicating the type extracted from the PDF does not match the type selected on upload (e.g. *"Expected 'A57', extracted 'C3'"*). Certificate is usable but flagged. |

---

### 1.2.3 Error Cases

#### TC-CERT-UPL-04: Extraction Takes Too Long (> 5 minutes)

*Precondition: A PDF has been uploaded and extraction is in progress.*

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | After uploading a PDF, wait for more than 5 minutes without the extraction completing. | Message appears: *"Certificate processing is taking longer than expected. Refresh the list later."* |

---

#### TC-CERT-UPL-05: Extraction Fails — Unreadable PDF

*Precondition: A corrupted or unreadable PDF is available.*

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | Upload the unreadable PDF. Click **Submit**. | Error message appears explaining why extraction failed. Certificate is not created. |

---

## 1.3 View, Edit & Delete

### 1.3.1 Listing & Filtering

#### TC-CERT-LIST-01: Status Filter

*Precondition: The Certificates list has certificates in different statuses.*

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | On the Certificates list, apply a filter for a specific status (e.g. Active). | Only certificates matching that status are shown. Certificates in other statuses are hidden. |

---

#### TC-LIST-ADV-01: Filter by Expiry Date

*Precondition: The Certificates list has certificates with a mix of future and past expiry dates, and at least one with no expiry date set.*

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | Apply a filter for expiry date on or after today's date. | Only certificates with an expiry date today or in the future are shown. Certificates with no expiry date set are included — no expiry date means the certificate does not expire. Certificates with a past expiry date are excluded. |

---

#### TC-LIST-ADV-02: View All Certificates Without Customer Filter (Company-Level)

*Precondition: Multiple certificates exist under a company, each linked to different customers.*

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | Open the Certificates tab on the Company Details page (not from a specific customer's page). | All certificates for that company are shown regardless of which customer they are linked to. Pagination, status filter, and search all work normally. |

---

#### TC-CERT-LIST-02: View Certificate Details

*Precondition: At least one certificate exists in the list.*

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | Click on any certificate row in the list. | Certificate detail panel opens in read-only view. All fields are visible but not editable. No Save button is shown. |

---

### 1.3.2 Edit, Delete & Attachments

#### TC-CERT-LIST-03: Edit Certificate (Draft Only)

*Precondition: At least one certificate in **Draft** status exists in the list.*

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | Click the action menu (⋮) on a **Draft** certificate. Select **Edit**. | Certificate detail panel opens in edit mode with all fields pre-filled and editable. A Save button is visible. |
| 2 | Try the same action on a **Submitted** certificate. | Edit option is not available in the action menu for Submitted certificates. The menu shows Cancel and Delete only. To make changes, the certificate must first be Cancelled, then Amended to create a new Draft version. |
| 3 | Try the same action on a **Cancelled** certificate. | Action menu shows **Amend**. Clicking Amend creates a new Draft certificate with a new ID, linked back to the cancelled version. |

---

#### TC-CERT-LIST-04: Delete Certificate (Draft Only)

*Precondition: At least one certificate in **Draft** status exists in the list.*

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | Click the action menu (⋮) on a **Draft** certificate. Select **Delete**. Confirm when prompted. | Certificate is removed from the list. |
| 2 | Try the same action on a **Submitted** or **Cancelled** certificate. | Delete option is not shown in the action menu for Submitted or Cancelled certificates. To invalidate a Submitted certificate, use the Cancel action instead. |

---

#### TC-CERT-LIST-05: Attachment Preview

*Precondition: A certificate with at least one attached file is open in detail view.*

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | Click the preview icon (👁) next to the primary attachment on the certificate detail view. | Attached PDF or image opens in the preview panel on the right side. |
| 2 | Click the icon for an additional attachment (if one exists). | Preview panel switches to show the second attachment. |

---

## 1.4 Certificate Lifecycle

#### TC-CERT-EXP-01: Certificate Auto-Expiry — Expired Past Expiry Date

*Precondition: A Submitted certificate has an expiry date set to yesterday's date.*

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | The daily scheduler runs (or advance the system date past the certificate's expiry date). | Certificate's business status reflects expired. The certificate remains visible in the list. Its Submitted status is unchanged — expiry is a business rule, not a cancellation. |
| 2 | Attempt to attach the expired certificate to a new Sales Order, or submit an SO that already has this certificate linked. | Action is blocked. Error shown about the certificate being expired or past its valid-until date. |

---

#### TC-CERT-LCY-01: Draft Certificate Cannot Be Used on a Sales Order

*Precondition: A certificate exists in Draft status — newly created or uploaded, not yet submitted.*

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | Open a Sales Order. Open the Tax Reference certificate dropdown. | Dropdown opens showing available certificates. |
| 2 | Look for the Draft certificate in the dropdown. | The Draft certificate does **not** appear. Only Submitted certificates are selectable. |
| 3 | Note the required action. | The certificate must be submitted first before it can be used on any Sales Order. |

---

#### TC-CERT-LCY-02: Submit Certificate — Becomes Usable on Sales Order

*Precondition: A certificate is in Draft status with all required fields filled in.*

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | Open the certificate. Click **Submit**. Confirm submission. | Certificate status changes to **Submitted**. |
| 2 | Open a Sales Order. Open the Tax Reference certificate dropdown. | The submitted certificate now appears in the dropdown and can be selected. |
| 3 | Note the edit restriction. | Certificate fields are now locked. To make changes, the certificate must be Cancelled first, then Amended to create a new Draft version. |

---

#### TC-CERT-LCY-03: Amend Submitted Certificate — Creates New Version, Existing Orders Unaffected

*Precondition: A Submitted certificate is linked to one or more existing Sales Orders.*

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | Open the Submitted certificate. Click **Cancel**. Confirm. | Certificate status changes to **Cancelled**. Existing Sales Orders that reference this certificate are not changed. |
| 2 | On the now-Cancelled certificate, click **Amend**. Make a change (e.g. update an HS code). Click **Save** (saves as Draft). | A new Draft certificate is created with a new certificate ID, linked back to the cancelled version. |
| 3 | While the amended certificate is still in Draft, open a Sales Order and check the Tax Reference dropdown. | The amended certificate does **not** appear — Draft certificates cannot be used on Sales Orders. |
| 4 | Go back to the amended certificate. Click **Submit**. Confirm. | Amended certificate status changes to Submitted. Fields are locked again. |
| 5 | Open a new Sales Order and check the Tax Reference dropdown. | The amended certificate now appears in the dropdown. Both the original (Cancelled) and amended (Submitted) versions are visible in the certificate list with their respective statuses. |

---

#### TC-CERT-LCY-04: Cancel Certificate — Behaviour When Linked to Active Sales Order

*Precondition: A Submitted certificate is linked to at least one Sales Order that is not cancelled.*

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | Open the certificate. Click **Cancel**. Confirm. | Cancellation succeeds. Certificate status changes to **Cancelled**. No error about linked Sales Orders — the system does not block cancellation based on linked orders. |
| 2 | Note the impact on linked orders. | Any Sales Order referencing this certificate will fail when it next tries to submit. Affected Sales Orders must be re-linked to a valid Submitted certificate before they can be submitted. |

---

---

# Part 2: Sales Order — Tax Reference

---

## 2.1 C1 — Item-Level Exemption

### 2.1.1 Certificate Selection & Item Eligibility

#### TC-SO-C1-01: Select C1 Certificate — All Items Covered (Happy Path)

*Precondition: A Sales Order is open with 3 items. All 3 are listed in the C1 certificate's item references.*

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | In the Tax Reference section on the Sales Order, open the certificate dropdown. Select the C1 certificate. | Certificate details are filled in automatically. |
| 2 | Check the tax status on each line item. | Tax exemption applied to all 3 items immediately. Tax on Items field is locked on each line. Global tax on the order is cleared. |
| 3 | Click **Save**. | Order saved. All 3 items carry the tax exemption. No global tax on the order. Order linked to the certificate. |

---

#### TC-SO-C1-02: Select C1 Certificate — Partial Coverage + Save

*Precondition: The Sales Order has 3 items. Items 1 and 2 are in the C1 certificate references. Item 3 is not.*

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | In the Tax Reference section, select the C1 certificate. | Certificate details are filled in. |
| 2 | Check the tax status on each item. | Items 1 and 2: tax exemption applied, Tax on Items field locked. Item 3: message appears *"This item is not eligible for tax exemption."* Tax on Items field for Item 3 remains editable. Global tax cleared. |
| 3 | Set a standard tax on Item 3 manually. | Tax on Items updated for Item 3. |
| 4 | Click **Save**. | Order saved. Items 1 and 2 carry the exemption. Item 3 carries standard tax. No global tax on the order. |

---

### 2.1.2 Adding Items After Certificate is Selected

#### TC-SO-C1-03: Add Non-Covered Item After C1 Selected

*Precondition: A C1 certificate is already selected on the Sales Order.*

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | Add a new line item whose product is not listed in the C1 certificate's item references. | Message appears: *"This item is not eligible for tax exemption."* Tax on Items field for that line remains editable. |

---

#### TC-SO-C1-04: Add Covered Item After C1 Selected

*Precondition: A C1 certificate is already selected on the Sales Order.*

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | Add a new line item whose product is listed in the C1 certificate's item references. | Tax exemption is automatically applied to that line. Tax on Items field is locked. |

---

### 2.1.3 Global Tax Behaviour

#### TC-SO-C1-06: C1 Clears Global Tax When Already Set

*Precondition: The Sales Order already has a global tax set (e.g. GST 6%).*

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | Select a C1 certificate from the Tax Reference dropdown. | Global tax field is cleared and disabled. The user cannot re-set global tax while the C1 certificate is active. |

---

#### TC-SO-C1-07: Save Blocked — Item Has No Tax at All

*Precondition: A C1 certificate is selected (global tax cleared). One line item has no tax template set and is not eligible for the C1 exemption — nothing is set on that line.*

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | Click **Save**. | Save blocked. Error shown on the line item with no tax: *"Tax on Items is required when no global tax is set."* |

---

## 2.2 C3 — Order-Level Exemption

### 2.2.1 Certificate Selection & Item Coverage

#### TC-SO-C3-01: Select C3 Certificate — All Items Covered + Save (Happy Path)

*Precondition: The Sales Order has items. All items are listed in the C3 certificate references.*

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | In the Tax Reference section, select the C3 certificate from the dropdown. | Certificate details are filled in. Tax exemption applied at the order level. |
| 2 | Check the order. | Order-level tax set to 0%. Individual line items are not individually marked — the entire order is covered. |
| 3 | Upload the required attachments (PO attachment and appointment letter). | Attachments appear in the certificate attachment section. |
| 4 | Click **Save**. | Order saved with the C3 certificate linked at the order level. |

---

#### TC-SO-C3-02: Select C3 Certificate — Ineligible Items Trigger Removal Prompt

*Precondition: The Sales Order has 5 items. Only 1 is listed in the C3 certificate references.*

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | Select the C3 certificate from the Tax Reference dropdown. | A confirmation prompt appears listing the 4 items not covered: *"The following items are not covered by this certificate and will be removed. Continue?"* |
| 2a | Click **Confirm**. | The 4 uncovered items are removed. Certificate is applied. 1 item remains with order-level exemption. |
| 2b | Click **Cancel** (instead of Confirm). | Certificate selection is reverted. All 5 original items remain on the order. No certificate applied. |

---

#### TC-SO-C3-03: Select C3 Certificate — No Items Added Yet

*Precondition: The Sales Order has no line items yet.*

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | Select a C3 certificate. | Certificate is applied without any prompt. |
| 2 | Add items covered by the C3 certificate. | Items added without triggering a removal prompt. |

---

## 2.3 A57 — Order-Level Exemption

#### TC-SO-A57-01: Select A57 Certificate — Order-Level Exemption

*Precondition: An A57 certificate exists and is available in the dropdown.*

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | Select an A57 certificate from the Tax Reference dropdown on a Sales Order. | Tax exemption applied at the order level (same behaviour as C3). Certificate details are filled in automatically. Global order tax is not affected. |

---

#### TC-SO-A57-02: A57 Certificate Available to All Customers Under the Same Company

*Precondition: An Active A57 certificate exists for the company. A Sales Order is open for any customer under that same company.*

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | Open the Sales Order. Open the Tax Reference certificate dropdown. | The A57 certificate appears in the dropdown. A57 is company-level — no customer filter is applied. All customers under the same company can use it. |
| 2 | Select the A57 certificate. | Order-level exemption applied. Order tax set to 0%. No per-item locks. Certificate attachment required on submit. |

---

## 2.4 Guards & Edge Cases

### 2.4.1 Dropdown State

#### TC-SO-GRD-05: Dropdown Disabled — No Company Selected

*Precondition: The Sales Order is open with no company (biller) selected.*

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | Look at the Tax Reference section. | Certificate dropdown shows *"Select company first..."* and cannot be clicked. |

---

#### TC-SO-GRD-06: No Certificates Available for This Company

*Precondition: The selected company has no certificates set up.*

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | Open the Tax Reference certificate dropdown. | Dropdown shows *"No certificates available."* |

---

### 2.4.2 Customer Validation

#### TC-SO-GRD-01: Certificate Belongs to a Different Customer

*Precondition: The Sales Order is for Customer A. A certificate in the dropdown is linked to Customer B.*

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | Select the certificate linked to Customer B. | Warning appears: *"This certificate belongs to a different customer and cannot be used for this order."* Certificate is not applied. |

---

#### TC-SO-GRD-02: Certificate With No Customer Link — Allowed

*Precondition: A certificate exists that is not linked to any specific customer.*

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | Select that certificate on any Sales Order. | Selection proceeds normally. Certificate is applied without a customer mismatch warning. |

---

### 2.4.3 Clearing & Rollback

#### TC-SO-GRD-03: Remove Certificate — All Exemptions Cleared

*Precondition: A C1 certificate is active on the Sales Order. 2 items have tax exemption locked.*

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | Open the Tax Reference dropdown. Select **No certificate** (or clear the selection). | All tax exemption locks are removed. Tax on Items becomes editable again on all line items. Attached certificate file is cleared. Global tax field is re-enabled. |

---

#### TC-SO-GRD-04: Certificate Validation Fails — Selection Reverted

*Precondition: A certificate is selected but the system cannot validate the items (e.g. a server error occurs).*

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | Select a certificate. System returns a validation error. | Certificate selection is reverted to what it was before. Error message is shown. No tax exemptions are applied. |

---

### 2.4.4 Attachment & Reopen Behaviour

#### TC-SO-GRD-07: Reopen Existing Sales Order — Exemptions Restored

*Precondition: A Sales Order was previously saved with a C1 certificate active.*

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | Re-open the Sales Order in edit mode. | System re-checks item eligibility. Tax on Items locks are restored on the same items that were locked before. Certificate is shown as selected. |

---

#### TC-SO-GRD-08: Manually Uploaded Attachment Not Replaced by Certificate

*Precondition: User has manually uploaded a PDF to the Tax Reference attachment field before selecting a certificate.*

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | Select a certificate that has its own attached file. | The user's manually uploaded file is kept. It is not replaced by the certificate's own attachment. |

---

---

# Part 2.5: CPO — Tax Reference

CPO can carry a tax reference certificate that is validated on upload and carried through to the Sales Order on conversion.

> **Design note:** No HS code validation on CPO — by design. CPO is raw intake only. All HS code matching and tax enforcement happens at Sales Order save, not at CPO stage.

---

## TC-CPO-C3-01: CPO Upload — Link C3 Certificate at Upload Time

*Precondition: A valid, Submitted C3 certificate exists in MAIA.*

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | Upload a CPO PDF via the chatbot or web app. In the tax reference field, select the C3 certificate. Click **Submit**. | CPO created with the C3 certificate linked. CPO detail view shows certificate type C3, tax registration number, and Active status. |

---

## TC-CPO-C1-01: CPO Upload — Link C1 Certificate at Upload Time

*Precondition: A valid, Submitted C1 certificate exists in MAIA.*

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | Upload a CPO PDF. In the tax reference field, select the C1 certificate. Click **Submit**. | CPO created with the C1 certificate linked. CPO detail view shows certificate type C1, tax registration number, and Active status. |

---

## TC-CPO-UPD-01: CPO Update — Add, Change, and Remove Certificate on Existing CPO

*Precondition: An existing CPO with no certificate linked. An Active C3 certificate and an Active C1 certificate exist.*

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | Open the CPO. In the Tax Reference field, select the **C3 certificate**. Click **Save**. | C3 certificate is linked and visible on the CPO. |
| 2 | Change the tax reference to the **C1 certificate**. Click **Save**. | C1 certificate replaces C3 with no error. |
| 3 | Clear the tax reference field. Click **Save**. | Tax reference removed. CPO shows no certificate linked. |

---

## TC-CPO-SO-01: CPO → SO Conversion — Certificate Carries Over

*Precondition: A CPO exists with a Submitted C3 certificate linked.*

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | Open the CPO. Click **Convert to Sales Order**. | Sales Order created. The Tax Reference section on the SO shows the same C3 certificate that was on the CPO. Certificate details (title, tax registration number, dates) are populated. |

---

## TC-CPO-GRD-01: CPO Upload — Non-Submitted Certificate Blocked

*Precondition: A certificate exists in MAIA in Draft status (not yet submitted).*

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | Upload a CPO. Attempt to link the Draft certificate in the tax reference field. | Error shown: the certificate must be in Submitted status to be linked to a CPO. Draft and Cancelled certificates are not accepted. CPO is not saved with that certificate. |

---

---

# Part 2.6: SO Submit Validations

Validation failures that block the Sales Order from saving. These run on submit only, not on draft.

---

## TC-SO-VAL-01: SO Submit — C3 Fails Without Required Attachments

*Precondition: A C3 certificate is selected on a Sales Order. The PO attachment and/or appointment letter have not been uploaded.*

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | Select a C3 certificate. Do not upload the PO attachment or appointment letter. Click **Save**. | Save blocked. Error indicates that the PO attachment and appointment letter are required for C3 orders. Order is not submitted until all required attachments are present. |

---

## TC-SO-VAL-02: SO Submit — Fails When Item HS Code Not in Certificate

*Precondition: A C1 or C3 certificate is selected on a Sales Order. At least one line item has no HS code set, or its HS code is not listed in the certificate's reference data.*

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | Select the certificate. Add a line item whose HS code does not appear in the certificate. Click **Save**. | Save blocked. Error indicates the item's HS code is not covered by the certificate. The item must be removed, a different certificate selected, or the item's HS code updated in the item catalogue. |

---

## TC-SO-VAL-03: SO Submit — Order-Level and Item-Level Certificate Mismatch Blocked

*Precondition: A Sales Order has a certificate set at the order level. One or more line items have a different certificate set at the item level.*

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | Create a Sales Order. Set a certificate at the order level. | Certificate applied at order level. |
| 2 | Manually override the tax reference on a line item to a different certificate. Click **Save**. | Save blocked. Error indicates the order-level and item-level tax reference must be the same certificate. All items must reference the same certificate as the order, or have no certificate for non-exempt items. |

---

## TC-SO-C1-EFF-01: SO C1/C3 Submit — Item Effective Date in Future, Blocked

*Precondition: A C1 or C3 certificate has an item entry where the effective date is set to next month. A Sales Order is created with that certificate and the item added.*

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | Select the C1 or C3 certificate. Add the item with the future effective date. Click **Submit**. | Submit blocked. Error states the item's effective date has not yet been reached. The order cannot be submitted until the effective date arrives, or a different item or certificate is used. Note: A57 does not check effective dates. |

---

---

# Part 2.7: Amend Sales Order

When a Sales Order has a tax reference certificate linked, amendment restrictions apply to protect the tax exemption.

---

## TC-SO-AME-01: Amend SO — Price and Tax Changes Blocked When Certificate Linked

*Precondition: A submitted Sales Order has a tax reference certificate linked on one or more items.*

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | Amend the Sales Order. Attempt to change the unit price or tax on a line item that has a certificate linked. Click **Save**. | Change blocked. Error indicates price and tax cannot be modified on items linked to a tax reference certificate. |
| 2 | Note what is still allowed. | Quantity changes on certificate-linked items are still permitted. |

---

## TC-SO-AME-02: Amend SO — Quantity Change Allowed When Certificate Linked

*Precondition: A submitted Sales Order has a tax reference certificate linked.*

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | Amend the Sales Order. Change the quantity on a certificate-linked line item. Click **Save**. | Quantity change accepted. System re-validates HS code coverage for the item. If the item's HS code is still in the certificate, amendment saves without error. |
| 2 | (Optional) Add a new item during the amendment that is not in the certificate. Click **Save**. | Re-validation flags the new item as not covered by the certificate. |

---

---

# Part 3: Real-World User Scenarios

End-to-end scenarios based on real client business situations. Each tests the full workflow across multiple features.

> ⚠️ Correction notes are included where the original scenario did not align with how MAIA works.

---

## 3.1 C1 Scenarios

### TC-SCN-01: New Customer with C1 Certificate — First Order

**Context:** ABC Trading Sdn Bhd is a new manufacturing customer who just received their C1 certificate covering HS code TC001 (salt and sugar products). Their sales agent receives a purchase order for 5,000kg salt (TC001) worth RM15,000 along with the newly issued C1 certificate dated January 2026. The customer expects a quotation within 2 hours and wants confirmation that the order will be tax-exempt before paying.

*Precondition: ABC Trading does not yet exist in MAIA. C1 certificate PDF is on hand. Salt (TC001) exists in the product catalogue.*

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | Create ABC Trading as a new customer. Add a customer address and customer contact. | Customer profile created with address and contact saved. |
| 2 | Go to the Certificates tab. Upload the C1 PDF. Confirm extraction. Submit the certificate. | Certificate extracted, appears in Draft, then changes to Submitted. TC001 items visible in the certificate reference list. |
| 3 | Create a new Sales Order for ABC Trading. Select the C1 certificate in the Tax Reference section. | Certificate details auto-filled. |
| 4 | Add 5,000kg salt (TC001). | Tax exemption applied and locked on the salt line. |
| 5 | Generate and send the quotation. | Quotation reflects RM15,000 with no tax. Certificate title, tax registration number, and dates visible on the order. |

---

### TC-SCN-02: Existing Customer with Expired C1 Certificate

**Context:** XYZ Foods Sdn Bhd has been ordering monthly for 2 years. Their C1 certificate expired on 31 December 2025. On 26 January 2026, the customer places an urgent order for 3,000kg sugar (TC001) worth RM9,000, expecting their usual tax exemption.

> ⚠️ **Correction:** The original scenario mentioned an "LMW Certificate." LMW (Licensed Manufacturing Warehouse) is a customer category in MAIA, not a certificate type. MAIA only supports C1, C3, and A57. This scenario is corrected to refer to an expired C1 certificate.

*Precondition: XYZ Foods exists in MAIA with a C1 certificate whose expiry date is 31/12/2025. Today's date is 26/01/2026.*

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | Open XYZ Foods. Go to the Certificates tab. | C1 certificate visible with expired status. |
| 2 | Attempt to select the expired C1 on a new Sales Order. | Status warning shown. Certificate cannot be used as it has expired. |
| 3 | Inform the customer their C1 has expired and a renewed certificate is required. | *(Communication step — no system action.)* |
| 4a | If customer provides renewed C1 PDF: upload it, submit it, then link to the order and apply exemption. | Renewed certificate extracted, submitted, and linked to the Sales Order. Tax exemption applied. |
| 4b | If no renewed certificate is available yet: proceed with the order at standard tax. | Order saved with standard tax. No exemption applied. |

---

### TC-SCN-04: Mixed Order — C1 Items and Non-Exempt Items on Same Order

**Context:** DEF Manufacturing orders: 2,000kg Salt (TC001) RM6,000 + 1,500kg Sugar (TC001) RM4,500 + 1,000kg Flour (TC003, no certificate) RM3,000.

> ⚠️ **Correction:** The original scenario described using both C1 and C3 on the same order. MAIA enforces one tax reference per Sales Order — you cannot mix C1 and C3 on a single order. Salt and Sugar (both TC001, in C1 refs) are exempt; Flour (TC003, not in C1 refs) carries standard tax on the same order.

*Precondition: DEF Manufacturing has a valid C1 certificate with TC001 (salt and sugar) in its references. Flour (TC003) is not in any certificate.*

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | Create a Sales Order for DEF Manufacturing. Select the C1 certificate. | Certificate applied. Global tax cleared. |
| 2 | Add 2,000kg Salt (TC001). | Tax exemption applied and locked on the Salt line. |
| 3 | Add 1,500kg Sugar (TC001). | Tax exemption applied and locked on the Sugar line. |
| 4 | Add 1,000kg Flour (TC003). | Message appears: *"This item is not eligible for tax exemption."* Tax on Items field for Flour is editable. |
| 5 | Set standard tax on Flour manually. Click **Save**. | Order saved. Salt and Sugar: exempt, locked. Flour: standard tax. Order summary shows RM10,500 exempt + RM3,000 taxable. |

---

### TC-SCN-06: VIP Customer — Special Pricing with C1 Tax Exemption

**Context:** Premium Foods has pre-approved dealer pricing at 15% off retail. Salt (TC001) retail is RM3.00/kg; dealer price is RM2.55/kg. They order 10,000kg (RM25,500) with a valid C1 certificate. The system flags the price as below the minimum threshold and routes to an approval queue.

*Precondition: Premium Foods has dealer pricing configured in MAIA. Minimum price threshold is set. C1 certificate is attached to the customer. Salt (TC001) is in the C1 references.*

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | Create a Sales Order for Premium Foods. Select the C1 certificate. | Certificate applied. |
| 2 | Add 10,000kg Salt at RM2.55/kg. | Tax exemption applied and locked. Price flag shown — price is below the minimum threshold. Order routed to the pricing approval queue. |
| 3 | Finance approver reviews and confirms this is pre-approved dealer pricing. Approver approves. | Order proceeds. |
| 4 | Review the completed order. | Total = RM25,500 with zero tax. Audit trail shows pricing approval and certificate reference. |

---

### TC-SCN-09: Rush Order with C1 — Insufficient Stock for Full Quantity

**Context:** A customer urgently requests 15,000kg Salt (TC001) for next-morning delivery with their valid C1 certificate. Only 10,000kg is available — 10,000kg is reserved for C3 customers.

*Precondition: Customer has a valid C1 certificate for Salt (TC001). Available stock is 10,000kg. 10,000kg is reserved for C3 orders.*

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | Check real-time stock. | Only 10,000kg available. Full quantity of 15,000kg cannot be delivered tomorrow. |
| 2 | Inform the customer the full 15,000kg cannot be fulfilled in one delivery. | *(Communication step.)* |
| 3a | Option A — Split: Create a Sales Order for 10,000kg with C1 (tomorrow delivery). Create a second Sales Order for 5,000kg with C1 (next week delivery). | Two separate Sales Orders, each with C1 selected and exemption applied. |
| 3b | Option B — Wait: Advise customer to wait for the full 15,000kg under one order next week. | Single Sales Order created when full stock is available. C1 exemption applied. |

---

## 3.2 C3 Scenarios

### TC-SCN-03: C3 Order — Quota Partially Used, Insufficient for New PO

**Context:** GreenTech Industries has a C3 certificate for Industrial Salt (Item X), approved quota 10,000kg. They have used 7,500kg across previous orders. New PO arrives for 5,000kg. Only 2,500kg quota remains.

> ⚠️ **Correction:** MAIA does not track C3 quota usage across orders. Quota management is handled externally via the SST portal. The agent must verify remaining quota externally before creating the order.

*Precondition: GreenTech has a valid C3 certificate in MAIA for Item X. Agent has confirmed externally (SST portal) that only 2,500kg quota remains.*

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | Review the C3 certificate in MAIA. Note the item references and certificate number. | Certificate details visible. |
| 2 | Inform the customer that only 2,500kg is available under the current C3. | *(Communication step.)* |
| 3a | Option A: Create a Sales Order for 2,500kg with the C3 certificate (order-level exemption). Create a second Sales Order for the remaining 2,500kg with no certificate (standard tax). | Two separate Sales Orders — first (2,500kg, C3, exempt), second (2,500kg, no cert, standard tax). |
| 3b | Option B: Do not create any order until the customer provides a new C3 certificate. | No order created until a new C3 is uploaded and submitted. |

---

### TC-SCN-07: C3 Batch Allocation — Two Customers, One Incoming Batch

**Context:** Customer A needs 3,000kg Premium Sugar (C3) and Customer B needs 2,000kg of the same item (C3). New Batch #B2026-050 (5,000kg total) arrives today.

*Precondition: Both customers have valid C3 certificates for Premium Sugar in MAIA. Batch #B2026-050 (5,000kg) entered in batch intake.*

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | Create a Sales Order for Customer A. Select Customer A's C3 certificate. Add 3,000kg. Link to Batch #B2026-050. Click **Save**. | Sales Order saved for Customer A with C3 certificate linked. |
| 2 | Create a separate Sales Order for Customer B. Select Customer B's C3 certificate. Add 2,000kg. Link to the remaining quantity of Batch #B2026-050. Click **Save**. | Sales Order saved for Customer B with C3 certificate linked. Each allocation labelled with the respective customer's C3 reference for audit. |
| 3 | Verify the batch-to-customer mapping in MAIA. | Each Sales Order shows the correct batch reference and certificate. Warehouse can verify which allocation belongs to each customer. |

---

### TC-SCN-10: Customer Requests to Combine Two C3 Orders from Same Batch

**Context:** Industrial Supplies Co. has an existing SO for 2,000kg (Batch #B2026-030, C3 linked, delivery tomorrow). They place a new order for 3,000kg from the same batch and ask to combine both into a single 5,000kg delivery.

*Precondition: Existing SO (2,000kg) linked to Batch #B2026-030 with C3 certificate. 3,000kg of same batch unallocated. C3 is single-use per order.*

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | Review the existing Sales Order and C3 certificate linkage. | Existing order and certificate details visible. |
| 2 | Explain to the customer that combining two orders under one C3 requires external SST documentation amendment — this cannot be done by changing the order in MAIA. | *(Communication step.)* |
| 3a | If customer accepts separate deliveries: create a new Sales Order for 3,000kg with its own C3 certificate, linked to the same batch. | Two separate Sales Orders — both can be delivered same day from the same batch but remain separate records in MAIA for audit. |
| 3b | If customer insists on combining: escalate to management. Do not merge orders in MAIA until management approves and updated documentation is uploaded. | No change made to the existing order until management approves. |

---

## 3.3 A57 Scenarios

### TC-SCN-05: A57 Certificate — Full PO Coverage and Attempt to Add Extra Item

**Context:** RST Resources sends PO #PO-2026-456 (5 items, RM50,000, 8,000kg total) with an approved A57 certificate covering all 5 items. The customer later calls to add a sixth item not in the A57 certificate.

> ⚠️ **Correction:** A57 still checks items against its goods references — items not in the list are flagged for removal. The order is only fully exempt if every item is in the A57 goods list.

*Precondition: RST Resources has a valid A57 certificate in MAIA with all 5 PO items in its goods references.*

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | Create a Sales Order for RST Resources (PO ref: PO-2026-456). Select the A57 certificate. | Certificate applied. |
| 2 | Add all 5 items. | No removal prompt — all items are in the A57 goods list. |
| 3 | Click **Save**. | All 5 items accepted. Order-level exemption applied. Order saved. |
| 4 | Attempt to add a 6th item not listed in the A57 goods references. | System warns that the 6th item is not covered by the A57 certificate. The new item requires a separate order at standard tax. |

---

## 3.4 Compliance & Operations

### TC-SCN-08: COA Requirement — Customer Needs Detailed Format, Warehouse Has Standard Only

**Context:** HealthCare Labs orders 5,000kg Item Z (RM20,000). Customer profile shows COA required: Detailed format. Order fulfils from Batch #B2026-075. Warehouse only has a standard masked COA on file.

*Precondition: HealthCare Labs customer profile has COA requirement set to Detailed. Batch #B2026-075 exists with only a standard COA attached.*

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | Create a Sales Order for HealthCare Labs. | COA requirement visible on the order: Detailed format required. |
| 2 | Check Batch #B2026-075 in MAIA. | Only a standard COA is attached — Detailed format is not available. |
| 3 | Flag to the warehouse that a detailed COA is required before delivery. | *(Communication step.)* |
| 4 | Warehouse uploads the detailed COA to Batch #B2026-075 in MAIA. | Batch record updated. Detailed COA now attached. |
| 5 | Confirm the detailed COA is attached. Proceed with delivery. | Delivery order generated with the detailed COA linked. Customer receives the correct documentation. |

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
