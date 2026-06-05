---
owner: Haiqal
status: review
last_reviewed: 2026-04-16
---

# Certificate (Tax Reference) — Design Documentation

**Version:** 1.1 · **Date:** April 2026 · **Author:** Haiqal · Engineering  
**Timestamp:** 2026-04-16 (SGT)

**References Used:**
- `apps/maia/src/domains/customer/customer-details/` — certificate CRUD, schemas, upload flow
- `apps/maia/src/domains/sales-order/sales-order-details/` — tax reference integration, validation
- `docs/plans/2026-03-27-sales-order-tax-reference-integration.md`
- `docs/plans/2026-04-08-sales-order-c1-tax-reference-validation-refinement.md`
- `docs/plans/2026-04-02-customer-certificate-details-dialog.md`
- `docs/plans/2026-04-02-customer-certificates-diceui-table.md`

---

## Table of Contents

- [1. Overview](#1-overview)
- [2. Certificate Type Applicability Matrix](#2-certificate-type-applicability-matrix)
  - [2.1 Type Definitions](#21-type-definitions)
  - [2.2 Feature Applicability by Type](#22-feature-applicability-by-type)
  - [2.3 Sales Order Payload Routing by Type](#23-sales-order-payload-routing-by-type)
- [3. Certificate Creation and Upload](#3-certificate-creation-and-upload)
  - [3.1 Entry Points](#31-entry-points)
  - [3.2 Manual Upload Flow (PDF Extraction)](#32-manual-upload-flow-pdf-extraction)
  - [3.3 Structured Create Flow (Manual Form)](#33-structured-create-flow-manual-form)
    - [3.3.1 Common Fields](#331-common-fields)
    - [3.3.2 Type-Specific Fields](#332-type-specific-fields)
    - [3.3.3 Attachments](#333-attachments)
- [4. Certificate Details Dialog (View and Edit)](#4-certificate-details-dialog-view-and-edit)
  - [4.1 Visual Layout Reference](#41-visual-layout-reference)
  - [4.2 Opening Modes](#42-opening-modes)
  - [4.3 Tab Structure](#43-tab-structure)
  - [4.4 Details Tab — View Mode](#44-details-tab--view-mode)
    - [4.4.1 Certificate Section](#441-certificate-section)
    - [4.4.2 Validity and Issuance Section](#442-validity-and-issuance-section)
    - [4.4.3 Notes Section](#443-notes-section)
    - [4.4.4 Customer Information Section](#444-customer-information-section)
    - [4.4.5 Company Information Section](#445-company-information-section)
    - [4.4.6 Reference Items Tables](#446-reference-items-tables)
    - [4.4.7 Attachments Section](#447-attachments-section)
  - [4.5 Details Tab — Edit Mode](#45-details-tab--edit-mode)
  - [4.6 Warning Diagnostics](#46-warning-diagnostics)
- [5. Certificates Table (Listing)](#5-certificates-table-listing)
  - [5.1 Column Structure](#51-column-structure)
  - [5.2 Row Actions](#52-row-actions)
- [6. Sales Order — Tax Reference Integration](#6-sales-order--tax-reference-integration)
  - [6.1 Tax Reference Section (Order Level)](#61-tax-reference-section-order-level)
    - [6.1.1 Field Spec](#611-field-spec)
    - [6.1.2 Dropdown Behaviour](#612-dropdown-behaviour)
  - [6.2 Certificate Selection Flow](#62-certificate-selection-flow)
  - [6.3 Attachment Hydration](#63-attachment-hydration)
  - [6.4 C1 vs C3/A57 Routing Rules](#64-c1-vs-c3a57-routing-rules)
  - [6.5 Line-Level Tax Reference (Items Table)](#65-line-level-tax-reference-items-table)
  - [6.6 Payload Shape on Save](#66-payload-shape-on-save)
- [7. Validations](#7-validations)
  - [7.1 Certificate Form Validations (Create/Edit)](#71-certificate-form-validations-createedit)
  - [7.2 Sales Order Tax Validations](#72-sales-order-tax-validations)
    - [7.2.1 Form-Level Zod Validation](#721-form-level-zod-validation)
    - [7.2.2 Backend Tax Exemption Validation](#722-backend-tax-exemption-validation)
    - [7.2.3 Tax on Items Locking (C1)](#723-tax-on-items-locking-c1)
    - [7.2.4 Customer Mismatch Guard](#724-customer-mismatch-guard)
    - [7.2.5 Validation Failure Rollback](#725-validation-failure-rollback)
- [8. API Endpoint Reference](#8-api-endpoint-reference)
- [9. Global Rules](#9-global-rules)
- [10. Architecture — Key File Map](#10-architecture--key-file-map)
- [11. Flow Diagrams](#11-flow-diagrams)
  - [11.1 Certificate Creation (Structured)](#111-certificate-creation-structured)
  - [11.2 Certificate Upload (PDF)](#112-certificate-upload-pdf)
  - [11.3 Sales Order Certificate Selection](#113-sales-order-certificate-selection)
- [12. Discussion and Feedback](#12-discussion-and-feedback)
- [13. Open Questions](#13-open-questions)
- [14. Out of Scope](#14-out-of-scope)

---

## 1. Overview

This document specifies the design, data flows, and rendering rules for the **certificate (tax reference / tax exemption)** feature in the MAIA frontend. Certificates represent tax exemption documents (e.g. Malaysian customs/tax authority certificates) that exempt specific customers, items, or order lines from standard tax.

Covered areas:
- **Certificate management:** Creating, uploading (PDF extraction), viewing, and editing certificates within Customer Details and Company Details pages.
- **Sales Order integration:** Selecting certificates, routing tax references by type, validating item eligibility, and building the outgoing payload.

The system supports three certificate types — **C1**, **C3**, and **A57** — each with different scoping rules. Type determines where `tax_reference` is sent on the Sales Order payload (see Section 2).

> ℹ️ Certificates are managed as a **tab** on Customer Details (`/customers/:id`) and Company Details (`/company/:id`). There is no standalone `/certificates` route.

---

## 2. Certificate Type Applicability Matrix

### 2.1 Type Definitions

| Type ID | Short Code | Scope | Description |
|---------|-----------|-------|-------------|
| `CTY-2026-00001` | **C1** | Item-level | Exemption applies per line item. Each item on a Sales Order can reference a C1 certificate individually. |
| `CTY-2026-00002` | **C3** | Order-level | Exemption applies at the order level. Requires an **eligible customer** plus company/customer address and contact. |
| `CTY-2026-00003` | **A57** | Order-level | Exemption applies at the order level. Requires **company address and contact**. Items are "goods" references. |

### 2.2 Feature Applicability by Type

| Feature / Behaviour | C1 | C3 | A57 |
|---------------------|:--:|:--:|:---:|
| Customer address (required on create) | ✓ | ✓ | ✗ |
| Customer contact (required on create) | ✓ | ✓ | ✗ |
| Eligible customer field | ✗ | ✓ | ✗ |
| Company address (required on create) | ✗ | ✓ | ✓ |
| Company contact (required on create) | ✗ | ✗ | ✓ |
| Five item category tables (Raw Mat., Components, etc.) | ✓ | ✓ | ✗ |
| Single goods item list | ✗ | ✗ | ✓ |
| Order-level `tax_reference` on SO | ✗ | ✓ | ✓ |
| Line-level `items[].tax_reference` on SO | ✓ | ✗ | ✗ |
| Clears order-level `defaultTaxId` on SO | ✓ | ✗ | ✗ |
| Tax on Items locking (validated lines) | ✓ | ✗ | ✗ |
| Appears in biller Tax Reference dropdown | ✓ | ✓ | ✓ |
| Appears in line Tax on Items dropdown | ✓ | ✗ | ✗ |

> ⛔ **C1 cannot be sent as `tax_reference` on the Sales Order root.** The backend returns HTTP 422: *"Order-level tax reference must be A57 or C3 type. Got: C1"*.

> ⚠️ **C3 and A57 force all `items[].tax_reference` to `null`** on save — exemption is order-level only, even if line items exist on the certificate's references.

### 2.3 Sales Order Payload Routing by Type

| Certificate Type | Root `tax_reference` | `items[].tax_reference` | Order `defaultTaxId` |
|-----------------|---------------------|------------------------|---------------------|
| **C1** | `null` (rejected by BE) | Certificate ID per eligible line | **Cleared + disabled** |
| **C3** | Certificate ID | `null` (forced) | Unchanged |
| **A57** | Certificate ID | `null` (forced) | Unchanged |
| **None** | `null` | `null` | Unchanged |

---

## 3. Certificate Creation and Upload

### 3.1 Entry Points

The Certificates tab header provides two action buttons:

| Button | Action | Precondition |
|--------|--------|-------------|
| **Upload** | Opens `CertificateManualUploadDialog` — PDF-based upload with async extraction | Company must be selected |
| **Create** | Opens `CreateCertificateDialog` — structured form for manual entry | Company must be selected |

> ⚠️ Both buttons show a toast error if no company is selected: *"Select a company before uploading/creating a certificate."*

### 3.2 Manual Upload Flow (PDF Extraction)

**Dialog:** `CertificateManualUploadDialog`

**User inputs:**
1. PDF file (drag-and-drop or file picker)
2. Certificate type (optional)
3. Customer (pre-filled from current context)

**Execution flow:**

```
User picks PDF
    ↓
Upload file to S3 (presigned URL)
    path: certificates/manual_uploads/<file>
    ↓
POST certificate.upload_certificate_async
    payload: { company, customer_id, certificate_type_id,
               certificate_attachment: { file_s3_file_key } }
    ↓
Receive job_id
    ↓
Poll async_job.get_job_details every 2.5s (max 5 min)
    ↓
├─ Job "Finished" + failed_count = 0 → success toast + invalidate listing
├─ Job "Finished" + failed_count > 0 → throw error (warnings/log_details)
├─ Job "Processing"                  → continue polling
└─ Other status / timeout            → throw error
```

| Parameter | Value |
|-----------|-------|
| S3 path prefix | `certificates/manual_uploads` |
| Polling interval | 2,500 ms |
| Max polling duration | 5 min (300,000 ms) |
| Timeout message | *"Certificate processing is taking longer than expected. Refresh the list later."* |

### 3.3 Structured Create Flow (Manual Form)

**Dialog:** `CreateCertificateDialog`

#### 3.3.1 Common Fields

| Field | Source / Validation | Required |
|-------|-------------------|----------|
| Certificate type | Dropdown from `get_listing_data` (`certificate_type_listing`) | ✓ |
| Certificate title | Free text, min 1 char | ✓ |
| Tax registration number | Free text, min 1 char | ✓ |
| Status | Dropdown from `get_certificate_status_listing` | ✓ |
| Issue date | Date picker | ✗ |
| Valid till | Date picker | ✗ |
| Issuer | Free text | ✗ |
| Remarks | Textarea | ✗ |

#### 3.3.2 Type-Specific Fields

**C1 (Item-level):**

| Field | Required | Notes |
|-------|----------|-------|
| Customer address | ✓ | Popover select from customer addresses |
| Customer contact | ✓ | Popover select from customer contacts |
| Item tables (×5) | ✗ | Raw Materials, Components, Packaging Materials, Manufacturing Aids, Cleanroom Equipment |

**C3 (Order-level):**

| Field | Required | Notes |
|-------|----------|-------|
| Eligible customer | ✓ | Selected from customer listing |
| Company address | ✓ | Popover select |
| Customer contact | ✓ | Contacts for the eligible customer |
| Customer address | ✓ | Addresses for the eligible customer |
| Item tables (×5) | ✗ | Same five categories as C1 |

**A57 (Order-level):**

| Field | Required | Notes |
|-------|----------|-------|
| Company address | ✓ | Popover select from company addresses |
| Company contact | ✓ | Popover select from company contacts |
| Goods items | ✗ | Single flat item list (not categorised) |

> ℹ️ Each item row across all types contains: `item_code`, `item_name`, `hs_code` (optional).

#### 3.3.3 Attachments

| Slot | Max Files | Accepted Types |
|------|-----------|---------------|
| Primary certificate attachment | 1 | JPEG, JPG, PNG, PDF |
| Additional attachment | 1 | JPEG, JPG, PNG, PDF |

**API call on submit:** `POST certificate.create_certificate`

---

## 4. Certificate Details Dialog (View and Edit)

**Component:** `CertificateDetailsDialog`

### 4.1 Visual Layout Reference

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ DIALOG HEADER                                                               │
│ ┌─────────────────────────────────────────────────────────────────────────┐ │
│ │ <certificate_id>                                         [Spinner*]    │ │
│ └─────────────────────────────────────────────────────────────────────────┘ │
├───────────────────────────────────────────┬─────────────────────────────────┤
│ LEFT COLUMN (60%, scrollable)             │ RIGHT COLUMN (40%, preview)*    │
│                                           │                                 │
│ ┌─── Tab Bar ───────────────────────┐     │ ┌─────────────────────────────┐ │
│ │ [Details] [References] [Documents]│     │ │                             │ │
│ └───────────────────────────────────┘     │ │    DOCUMENT PREVIEW         │ │
│                                           │ │    (iframe)                 │ │
│ ┌─── Details Tab Content ───────────┐     │ │                             │ │
│ │                                   │     │ │    Primary or Additional    │ │
│ │ ── CERTIFICATE ──────────────     │     │ │    attachment rendered      │ │
│ │ Certificate title     [full row]  │     │ │    as PDF/image             │ │
│ │ Certificate type | Tax reg no     │     │ │                             │ │
│ │                                   │     │ └─────────────────────────────┘ │
│ │ ── VALIDITY AND ISSUANCE ─────    │     │                                 │
│ │ Issue date     | Valid till       │     │                                 │
│ │ Issuer         | Status           │     │                                 │
│ │                                   │     │                                 │
│ │ ── NOTES ────────────────────     │     │                                 │
│ │ Remarks        [textarea]         │     │                                 │
│ │                                   │     │                                 │
│ │ ── CUSTOMER INFO* ───────────     │     │                                 │
│ │ (C3: Eligible customer,           │     │                                 │
│ │  Company addr, Cust contact/addr) │     │                                 │
│ │ (non-C3: Cust contact, Cust addr) │     │                                 │
│ │                                   │     │                                 │
│ │ ── COMPANY INFO* ────────────     │     │                                 │
│ │ Company address | Company contact │     │                                 │
│ │                                   │     │                                 │
│ │ ── REFERENCE ITEMS* ─────────     │     │                                 │
│ │ [Tabular data per ref_type]       │     │                                 │
│ │                                   │     │                                 │
│ │ ── ATTACHMENTS ──────────────     │     │                                 │
│ │ Primary [file] [👁]               │     │                                 │
│ │ Additional [file] [👁]            │     │                                 │
│ └───────────────────────────────────┘     │                                 │
├───────────────────────────────────────────┴─────────────────────────────────┤
│ DIALOG FOOTER                                                               │
│                                              [Save changes*] [Close]        │
└─────────────────────────────────────────────────────────────────────────────┘
```

> `*` = conditional element. Spinner shows during background refetch. Right preview column only renders when a previewable attachment exists. Save button only in `"edit"` mode. Customer/Company/Reference sections are conditional by type and data.

### 4.2 Opening Modes

| Trigger | Mode | Behaviour |
|---------|------|-----------|
| Row click on certificates table | `"view"` | Read-only details; all inputs disabled |
| Kebab menu → Edit | `"edit"` | Editable form via `CertificateDetailsFullEditForm`; Save button active |

### 4.3 Tab Structure

| Tab | Status | Content |
|-----|--------|---------|
| **Details** | Implemented | Certificate metadata, references, attachments |
| **References** | Placeholder | *"Will be implemented in the future"* |
| **Documents** | Placeholder | *"Will be implemented in the future"* |

### 4.4 Details Tab — View Mode

#### 4.4.1 Certificate Section

| Field | Source | Format |
|-------|--------|--------|
| Certificate title | `data.certificate_title` | Full-row input, read-only |
| Certificate type | `data.certificate_type` + `data.certificate_category` | Formatted as `"type — category"` |
| Tax registration number | `data.tax_registration_no` | Read-only input |

#### 4.4.2 Validity and Issuance Section

| Field | Source | Format |
|-------|--------|--------|
| Issue date | `data.issue_date` | `DD/MM/YYYY` |
| Valid till | `data.valid_till` | `DD/MM/YYYY` |
| Issuer | `data.issuer` | Read-only input |
| Status | `data.status` | Read-only input |

#### 4.4.3 Notes Section

| Field | Source | Format |
|-------|--------|--------|
| Remarks | `data.remarks` | Read-only textarea, min-height 72px, resizable |

#### 4.4.4 Customer Information Section

Rendered conditionally based on reference data availability.

**C3 certificates:**

| Field | Source | Warning Diagnostics |
|-------|--------|-------------------|
| Eligible customer | `eligible_customer` references → resolved via customer listing | Root ref warnings + row warnings |
| Company address | `company_address` references → joined labels | Row warnings |
| Customer contact | `customer_contact` references → resolved via contacts | Row warnings |
| Customer address | `customer_address` references → joined labels | Row warnings |

**Non-C3 certificates (C1, A57):**

| Field | Source | Warning Diagnostics |
|-------|--------|-------------------|
| Customer contact | `customer_contact` references → resolved via contacts | Root ref warnings (if customer-origin) + row warnings |
| Customer address | `customer_address` references → joined labels | Row warnings |

> ℹ️ Section is hidden entirely when no customer contact or address references exist.

#### 4.4.5 Company Information Section

Rendered for **non-C3 types only**, when company contact or address references exist.

| Field | Source | Warning Diagnostics |
|-------|--------|-------------------|
| Company address | `company_address` references → joined labels | Root ref warnings (if A57) + row warnings |
| Company contact | `company_contact` references → resolved via company contacts | Row warnings |

#### 4.4.6 Reference Items Tables

| Certificate Type | Table Structure | Filter |
|-----------------|----------------|--------|
| **C1** | Multiple tables grouped by `ref_type` (raw_materials, components, etc.) | All `reference_doctype` |
| **C3** | Multiple tables grouped by `ref_type` (same as C1) | All `reference_doctype` |
| **A57** | Single "Goods" table | `reference_doctype === "Item"` only |

**Per-row fields:**

| Column | Source | Notes |
|--------|--------|-------|
| Item Code | `reference_name` | Fallback: `"—"` |
| Item Name | `reference_label` (stripped of HS suffix) | Fallback: raw label or `"—"` |
| HS Code | Extracted from `reference_label` via regex | `*` Hidden if empty |

> ℹ️ Rows may display warning indicators (⚠️ icon with tooltip) when the backend flags data issues on individual references.

#### 4.4.7 Attachments Section

| Slot | Display | Preview |
|------|---------|---------|
| Certificate attachment | File list with click-to-open-in-new-tab | Eye (👁) button toggles right preview pane to this file |
| Additional attachment | File list with click-to-open-in-new-tab | Eye (👁) button toggles right preview pane to this file |

> ℹ️ Default preview target: primary attachment (if available), otherwise additional attachment.

### 4.5 Details Tab — Edit Mode

In edit mode, the Details tab renders `CertificateDetailsFullEditForm` — a full editable form that mirrors the create form structure but pre-populated with existing data from `get_certificate`.

| Action | API | Post-action |
|--------|-----|-------------|
| Save | `POST certificate.update_certificate` | Close dialog, invalidate queries |

### 4.6 Warning Diagnostics

**Component:** `CertificateFieldDiagnosticsWarning`

| Warning Source | Display Location | Behaviour |
|---------------|-----------------|-----------|
| Root-level reference warnings | Label end of relevant field (e.g. Customer Contact, Eligible Customer) | ⚠️ icon with tooltip listing diagnostic messages |
| Per-reference-row warnings | Label end of the field that aggregates those rows | Merged into a single ⚠️ icon per field |

---

## 5. Certificates Table (Listing)

**Components:** `CustomerCertificatesTable` / `CompanyCertificatesTable`

### 5.1 Column Structure

| Column | Field | Filterable | Notes |
|--------|-------|:----------:|-------|
| Certificate ID | `certificate_id` | ✗ | Primary identifier |
| Certificate type | `certificate_type` | ✗ | Short code (C1/C3/A57) |
| Tax registration number | `tax_registration_no` | ✗ | |
| Issue date | `issue_date` | ✗ | |
| Status | `status` | ✓ (multi-select) | Options from `get_certificate_status_listing` |
| Actions | — | ✗ | Kebab menu: Edit, Delete |
| Timestamps | `created`, `modified` | ✗ | |

**Data source:** `POST certificate.get_tax_reference_listing` with default sort by `modified` descending.

### 5.2 Row Actions

| Trigger | Behaviour |
|---------|-----------|
| Click row | Open `CertificateDetailsDialog` in `"view"` mode |
| Kebab → Edit | Open `CertificateDetailsDialog` in `"edit"` mode |
| Kebab → Delete | Confirmation prompt → `POST certificate.delete_certificate` → invalidate listing |

---

## 6. Sales Order — Tax Reference Integration

### 6.1 Tax Reference Section (Order Level)

**Component:** `TaxReferenceSection` in `sales-order-details`

#### 6.1.1 Field Spec

| Field | Type | Editable | Source | Notes |
|-------|------|:--------:|--------|-------|
| Certificate | Searchable dropdown | ✓ | `get_tax_reference_listing` (deduped by `certificate_id`) | |
| Title | Text input | ✗ | `get_certificate` → `certificate_title` | Auto-filled on selection |
| Tax registration | Text input | ✗ | `get_certificate` → `tax_registration_no` | Auto-filled on selection |
| Issue date | Date picker | ✗ | `get_certificate` → `issue_date` | Auto-filled on selection |
| Valid till | Date picker | ✗ | `get_certificate` → `valid_till` | Auto-filled on selection |
| Status | Text input | ✗ | `get_certificate` → `status` | Auto-filled on selection |
| Attachment | File upload/display | ✓ | Hydrated from certificate OR user upload | See §6.3 |
| Additional attachment | File upload/display | ✓ | Hydrated from certificate OR user upload | See §6.3 |

#### 6.1.2 Dropdown Behaviour

| State | Placeholder Text |
|-------|-----------------|
| No biller company selected | *"Select company first..."* |
| Loading certificates | *"Loading..."* |
| No certificates available | *"No certificates available"* |
| Ready | *"Select certificate..."* |

**Options structure:**
- First option: `"No certificate"` (clears selection)
- Remaining: Certificate IDs with details line `certificate_type • status`
- Searchable with text filter

> ⚠️ Certificate dropdown is **disabled** when: form is read-only, certificates are loading, no biller company is selected, or tax exemption validation is in progress.

### 6.2 Certificate Selection Flow

```
User opens certificate dropdown
    ↓
Options loaded from get_tax_reference_listing (deduped)
    ↓
User selects a certificate
    ↓
[Guard] Customer mismatch check (see §7.2.4)
    → FAIL: toast warning, selection rejected
    ↓ PASS
Set billerTaxCertificateId + billerTaxCertificateType on form
    ↓
Hydrate read-only fields from get_certificate (see §6.3)
    ↓
Snapshot current form state (certificate + attachments + items)
    ↓
POST validate_tax_exemption_items (see §7.2.2)
    ↓
├─ SUCCESS → Apply tax exemption locks (see §7.2.3)
│          → Mark all items addedAfterLastTaxValidation = false
│          → Re-trigger line tax validations
│
└─ FAILURE → Revert certificate, type, and attachments to snapshot
           → Toast error with validation message
           → Re-trigger line tax validations
```

**Clearing a certificate:** Selecting "No certificate" clears `billerTaxCertificateId`, `billerTaxCertificateType`, both attachment fields, all tax exemption locks, and all `addedAfterLastTaxValidation` flags.

### 6.3 Attachment Hydration

When a certificate is selected, attachments are auto-populated from `get_certificate`:

| Certificate Data | Form Field | Condition |
|-----------------|------------|-----------|
| `certificate_attachment` | `taxReferenceCertificate` | Only if user has **not** uploaded a local file |
| `additional_attachments[0]` | `taxReferenceCertificateAdditional` | Only if user has **not** uploaded a local file |

> ℹ️ **Local upload priority:** A file is considered "local" when it has no `s3Key` and no `downloadUrl`. Local uploads are never overwritten by hydration — this preserves user-uploaded files over server-fetched ones.

**Accepted attachment types:** JPEG, JPG, PNG, PDF.

### 6.4 C1 vs C3/A57 Routing Rules

**C3 and A57 (Order-Level):**

| Aspect | Behaviour |
|--------|-----------|
| Order `tax_reference` | Set to the selected certificate ID |
| Line `items[].tax_reference` | Forced to `null` |
| Order tax (`defaultTaxId`) | Unchanged |
| Tax on Items per line | Unchanged (can use standard tax templates) |

**C1 (Item-Level):**

| Aspect | Behaviour |
|--------|-----------|
| Order `tax_reference` | Must be `null` |
| Line `items[].tax_reference` | Set per line to the certificate ID where applicable |
| Order tax (`defaultTaxId`) | **Cleared and disabled** |
| Tax on Items per line | **Required** — each line must have either a tax template OR a tax reference |

> ⛔ **C1 order-level tax clearing:** When C1 is selected, `defaultTaxId` and `defaultTaxIdDisplay` are cleared and errors suppressed. The backend rejects `tax_on_total` combined with C1.

### 6.5 Line-Level Tax Reference (Items Table)

The **Tax on Items** column popover combines two grouped sections:

| Section | Data Source | Trigger |
|---------|-----------|---------|
| Item tax templates | `useItemTaxTemplates` | Pre-loaded |
| **TAX REFERENCE** | `get_tax_reference_listing` (filtered by company + item_code + customer_id) | Lazy-loaded on cell open |

**Selection is mutually exclusive per line:**

| User Picks | Sets | Clears |
|-----------|------|--------|
| Tax template | `tax_on_items_id` | `taxReference`, `lineTaxCertificateType`, `lineTaxCertificateRate` |
| Tax reference (certificate) | `taxReference`, `lineTaxCertificateType`, `lineTaxCertificateRate` | `tax_on_items_id` |

### 6.6 Payload Shape on Save

```json
{
  "tax_reference": "<cert_id or null>",
  "tax_reference_certificate": {
    "id": "...", "file_url": "...",
    "file_bytes_str": null, "file_s3_file_key": null, "file_name": "..."
  },
  "tax_reference_certificate_additional": { "..." },
  "items": [
    {
      "sku": "ITEM-001",
      "tax_on_items_id": null,
      "tax_reference": "<cert_id or null>"
    }
  ]
}
```

**Routing rules (applied in `sales-order-form-api-builders.ts`):**

| Certificate Type | Root `tax_reference` | `items[].tax_reference` |
|-----------------|---------------------|------------------------|
| C3 / A57 | Certificate ID | `null` (forced) |
| C1 | `null` | Certificate ID per eligible line |
| None | `null` | `null` |

---

## 7. Validations

### 7.1 Certificate Form Validations (Create/Edit)

**Schema:** `createCertificateFormSchema` (Zod)

**Base validations (all types):**

| Field | Rule |
|-------|------|
| `certificate_type` | Required (min 1 char) |
| `certificate_title` | Required (min 1 char) |
| `tax_registration_no` | Required (min 1 char) |
| `status` | Required (min 1 char) |

**Type-specific validations (`superRefine`):**

| Type | Required Fields |
|------|----------------|
| C1 | `c1_customer_address`, `c1_customer_contact` |
| C3 | `c2_eligible_customer`, `c2_company_address`, `c2_customer_contact`, `c2_customer_address` |
| A57 | `a57_company_address`, `a57_company_contact` |

### 7.2 Sales Order Tax Validations

#### 7.2.1 Form-Level Zod Validation

**Rule:** When `defaultTaxId` (order-level tax) is empty — which happens automatically when C1 clears it — every line item must have **either** `tax_on_items_id` (tax template) **or** `taxReference` (certificate).

| Condition | Result |
|-----------|--------|
| `defaultTaxId` is set | No per-line tax requirement |
| `defaultTaxId` is empty + line has template or cert | ✓ Valid |
| `defaultTaxId` is empty + line has neither | ✗ Error: *"Tax on Items is required when no global tax is set"* |

#### 7.2.2 Backend Tax Exemption Validation

**API:** `POST sales_order.validate_tax_exemption_items`

**When it runs:**
- On certificate selection/change in the Tax Reference section
- On loading an existing editable Sales Order with a certificate (silent hydration via `SalesOrderTaxExemptionHydrate`)

**Payload by type:**

For **C3/A57** (order-level):
```json
{
  "tax_reference": "<cert_id>",
  "tax_on_total_id": "<optional>",
  "items": [{ "sku": "ITEM-001", "tax_on_items_id": null }]
}
```

For **C1** (item-level):
```json
{
  "tax_reference": "<cert_id>",
  "items": [{ "sku": "ITEM-001", "tax_on_items_id": "<template_id or null>" }]
}
```

**Response:** `data[]` with per-item `sku`, `status` (`valid` / `skipped`), and `message`.

#### 7.2.3 Tax on Items Locking (C1)

After a successful `validate_tax_exemption_items` call:

| Population | Lock Rule |
|------------|----------|
| Lines present at validation time with `status === "valid"` | SKU added to `lockedTaxSkuSet` → Tax on Items **disabled** |
| Lines present at validation time with `status === "skipped"` | Tax on Items stays **editable** |
| Lines added **after** validation (new rows) | Lock if SKU is in `get_certificate` → `references` (Item doctype). If not: toast *"This item is not eligible for tax exemption."* |

**Lock lifecycle:**

| Trigger | Behaviour |
|---------|-----------|
| Certificate changes | Clear all locks → re-validate → rebuild `lockedTaxSkuSet` |
| Certificate cleared | Clear all locks → re-enable all Tax on Items |
| SKU/item changed on a row | Clear lock for that specific row only |

#### 7.2.4 Customer Mismatch Guard

| Condition | Result |
|-----------|--------|
| `certificate.customer_id === order.customerId` | Selection proceeds |
| `certificate.customer_id ≠ order.customerId` | Toast warning: *"Certificate belongs to another customer. Certificate {id} is linked to customer {cert_customer}, but this order is for customer {order_customer}."* — **selection rejected** |
| Either ID is empty/null | Guard passes (no mismatch) |

#### 7.2.5 Validation Failure Rollback

If `validate_tax_exemption_items` throws after certificate selection:

1. Revert `billerTaxCertificateId` to previous value
2. Revert `billerTaxCertificateType` to previous value
3. Revert `taxReferenceCertificate` to previous value
4. Revert `taxReferenceCertificateAdditional` to previous value
5. Re-trigger line-level tax validations
6. Show toast error with the failure message

---

## 8. API Endpoint Reference

| Endpoint | Method | Purpose | Used By |
|----------|:------:|---------|---------|
| `certificate.get_tax_reference_listing` | POST | List certificates (with filters, pagination, sort) | Certificates table, SO tax reference dropdown, SO line Tax on Items |
| `certificate.get_certificate` | POST | Get single certificate with full details + references + attachments | Details dialog, SO attachment hydration |
| `certificate.create_certificate` | POST | Create a new certificate | Create dialog |
| `certificate.update_certificate` | POST | Update existing certificate | Edit dialog |
| `certificate.delete_certificate` | POST | Delete a certificate | Table row action |
| `certificate.get_certificate_status_listing` | POST | Get available status dropdown options | Table filters, create/edit forms |
| `certificate.upload_certificate_async` | POST | Trigger async PDF extraction | Upload dialog |
| `async_job.get_job_details` | POST | Poll async job status | Upload flow polling |
| `listings.get_listing_data` | POST | Get certificate type options (`certificate_type_listing`) | Create/edit forms |
| `sales_order.validate_tax_exemption_items` | POST | Validate items against certificate for tax exemption eligibility | SO certificate selection, SO load hydration |

---

## 9. Global Rules

| Rule | Specification |
|------|--------------|
| Date format | `DD/MM/YYYY` |
| Null / empty fields (view mode) | Show empty input — field label always visible, value blank |
| Null / empty fields (view mode — sections) | **Hide section entirely** when no relevant data exists (e.g. no customer refs → no Customer Information block) |
| Conditional visibility marker | `*` in layout diagrams = conditional element; hidden when data absent |
| Certificate type branching | Use **short code** (`C1`, `C3`, `A57`) for runtime checks; `certificate_type_id` for stable identity |
| Certificate ID format | System-generated, e.g. `CERT-2026-00046` |
| Certificate type ID format | System-generated, e.g. `CTY-2026-00001` |
| File upload accepted types | JPEG, JPG, PNG, PDF |
| Toast patterns | Error (red), Warning (amber), Success (green), Loading/persistent (neutral) |
| Query invalidation | Certificate listing queries are invalidated after create, update, delete, and upload operations |
| Dialog close on success | Create, upload, and edit dialogs close automatically on successful save/submission |

---

## 10. Architecture — Key File Map

All paths are relative to `apps/maia/src/domains/`.

| Area | Path | Role |
|------|------|------|
| API layer | `customer/customer-details/api/customer-details.api.ts` | All certificate CRUD endpoints + types |
| Delete types | `customer/customer-details/api/customer-details.types.ts` | `DeleteCertificateRequest/Response` |
| React Query hooks | `customer/customer-details/queries/customer-details.queries.ts` | `useCustomerCertificates`, `useCertificateDetails`, `useCreateCertificateMutation`, `useUpdateCertificateMutation` |
| Create form schema | `customer/customer-details/schemas/create-certificate-form.schema.ts` | Zod schema, type constants, type guards |
| Upload flow | `customer/customer-details/utils/certificate-upload-flow.ts` | S3 upload → async job → polling |
| Create request builder | `customer/customer-details/utils/build-create-certificate-request.ts` | Form values → API payload |
| Update request builder | `customer/customer-details/utils/build-update-certificate-request.ts` | Form values → update payload |
| Edit form mapper | `customer/customer-details/utils/map-certificate-details-to-create-form.ts` | API data → form values (edit) |
| Attachment mapper | `customer/customer-details/utils/map-upload-to-certificate-attachment.ts` | Upload files → attachment payload |
| Attachment builder | `customer/customer-details/utils/build-certificate-upload-files-from-details.ts` | API data → UploadFile[] (view) |
| Warning mapper | `customer/customer-details/utils/certificate-api-warning-to-diagnostics.ts` | API warnings → diagnostic items |
| Certificates tab | `customer/customer-details/components/tabs/customer-certificates-tab.tsx` | Tab shell (Upload, Create, Details dialogs) |
| Certificates table | `customer/customer-details/components/customer-certificates-table.tsx` | TanStack table with pagination/filters |
| Details dialog | `customer/customer-details/components/certificate-details-dialog.tsx` | View/edit modal |
| Edit form | `customer/customer-details/components/certificate-details-full-edit-form.tsx` | Full edit form |
| Dialog utilities | `customer/customer-details/components/certificate-details-dialog.utils.ts` | Formatting, grouping, section helpers |
| SO tax reference section | `sales-order/sales-order-details/components/tax-reference-section.tsx` | Order-level certificate picker + attachments |
| SO items section | `sales-order/sales-order-details/components/items-section.tsx` | Line-level tax reference in Tax on Items |
| SO biller section | `sales-order/sales-order-details/components/biller-section.tsx` | C1 order-tax clearing logic |
| SO API mapping | `sales-order/sales-order-details/utils/tax-reference-api-mapping.ts` | C1 vs C3/A57 routing helpers |
| SO validation payload | `sales-order/sales-order-details/utils/validate-tax-exemption-items-payload.ts` | Builds validation request |
| SO lock context | `sales-order/sales-order-details/context/sales-order-tax-exemption-lock-context.tsx` | Tax exemption lock state management |
| SO hydration | `sales-order/sales-order-details/components/sales-order-tax-exemption-hydrate.tsx` | Re-runs validation on load (editable SOs) |
| SO form types | `sales-order/sales-order-details/api/sales-order-form.types.ts` | `TaxReferenceCertificatePayload`, validation types |
| SO form schema | `sales-order/sales-order-details/schemas/sales-order-form.schema.ts` | `taxReference`, `billerTaxCertificateId`, etc. |
| Shared transformer | `../../shared/utils/data-transformers.ts` | `transformTaxReferenceCertificate` |
| Shared row actions | `../../shared/components/table-actions/certificate-row-actions-cell.tsx` | Kebab menu for certificate table rows |

---

## 11. Flow Diagrams

### 11.1 Certificate Creation (Structured)

```
Customer Details Page → Certificates Tab
    ↓
Click "Create" button
    ↓
[Guard] Company selected?
    ├─ NO  → Toast error → Stop
    └─ YES ↓
CreateCertificateDialog opens
    ↓
User fills form (type, title, tax reg no, status, references, attachments)
    ↓
Zod validation (type-specific required fields)
    ├─ FAIL → Show field errors → Stop
    └─ PASS ↓
buildCreateCertificateRequest() → maps form to API payload
    ↓
POST certificate.create_certificate
    ├─ ERROR → Toast error → Stop
    └─ OK    → Invalidate listing → Close dialog → Toast success
```

### 11.2 Certificate Upload (PDF)

```
Customer Details Page → Certificates Tab
    ↓
Click "Upload" button
    ↓
[Guard] Company selected?
    ├─ NO  → Toast error → Stop
    └─ YES ↓
CertificateManualUploadDialog opens
    ↓
User selects PDF + optional type/customer
    ↓
Upload file to S3 (presigned URL)
    ↓
POST certificate.upload_certificate_async
    ├─ ERROR → Toast error → Stop
    └─ OK    → Receive job_id ↓
Poll async_job.get_job_details (every 2.5s, max 5 min)
    ├─ "Finished" + failed_count = 0  → Invalidate listing → Toast success → Close dialog
    ├─ "Finished" + failed_count > 0  → Toast error (backend warnings)
    ├─ "Processing"                   → Continue polling
    └─ Timeout / unexpected status    → Toast error
```

### 11.3 Sales Order Certificate Selection

```
Sales Order Form → Tax Reference Section
    ↓
User opens certificate dropdown
    ↓
Options loaded from get_tax_reference_listing (deduped)
    ↓
User selects certificate
    ↓
[Guard] Customer mismatch? (§7.2.4)
    ├─ YES → Toast warning → Reject selection → Stop
    └─ NO  ↓
Set billerTaxCertificateId + billerTaxCertificateType
    ↓
Hydrate read-only fields from get_certificate (§6.3)
    ↓
Snapshot pre-select state (for rollback)
    ↓
POST validate_tax_exemption_items (§7.2.2)
    ├─ SUCCESS → Apply locks (§7.2.3)
    │          → addedAfterLastTaxValidation = false (all items)
    └─ FAILURE → Revert to snapshot (§7.2.5)
               → Toast error
    ↓
[If C1]    → Clear order-level defaultTaxId (disable field)
[If C3/A57]→ Order-level tax unaffected
    ↓
On Save:
    [C1]    → tax_reference root = null;     items[].tax_reference = cert_id per line
    [C3/A57]→ tax_reference root = cert_id;  items[].tax_reference = null
```

---

## 12. Discussion and Feedback

### 12.1 Certificate Upload Flow

#### F-1: Add progress toast when PDF upload begins polling

| | |
|---|---|
| **Current** | After confirm, the dialog shows no feedback until the async job finishes or fails. |
| **Proposed** | Show a **persistent/loading toast** as soon as `upload_certificate_async` returns a `job_id` (e.g. *"Processing certificate... This may take a moment."*). Replace with success or error toast once polling completes. |
| **Impact** | Frontend only |
| **Priority** | Medium |

### 12.2 Certificates Table (Listing)

#### F-2: Increase visible row density / reduce whitespace

| | |
|---|---|
| **Current** | The table shows limited rows per page, leaving significant whitespace on larger screens. |
| **Proposed** | Increase `DEFAULT_CERTIFICATES_PAGE_SIZE` / `DEFAULT_COMPANY_CERTIFICATES_PAGE_SIZE` and/or reduce row height / cell padding. |
| **Impact** | Frontend only |
| **Priority** | Low |

### 12.3 Certificate Details and Creation — Item Tables

#### F-3: Include additional columns in reference item tables

| | |
|---|---|
| **Current** | Reference item tables show limited columns: Item Code, Item Name, HS Code. |
| **Proposed** | Add columns for richer context (e.g. item description, UOM, item group/category). |
| **Impact** | **Backend** (enrich `references` array in `get_certificate` response) + **Frontend** (column defs, form fields) |
| **Priority** | Medium |

> ⚠️ Requires backend to include additional fields in the `references` array of the `get_certificate` response and in the create/update payloads.

### 12.4 Certificate Details Dialog — Tabs

#### F-4: Implement References tab with owner links

| | |
|---|---|
| **Current** | The References tab is a placeholder. |
| **Proposed** | Show clickable links to the owning **Customer** (`/customers/:id`) and **Company** (`/company/:id`), and eventually any Sales Orders or documents that reference this certificate. |
| **Impact** | Frontend (new tab content). May require backend endpoint for document references. |
| **Priority** | Medium |

#### F-5: Remove the Documents tab

| | |
|---|---|
| **Current** | The Documents tab is a placeholder with no planned content. |
| **Proposed** | Remove entirely. Attachments are already surfaced in the Details tab — a separate Documents tab is redundant. |
| **Impact** | Frontend only |
| **Priority** | Low |

### 12.5 Sales Order — Tax Exemption Validation

#### F-6: Replace API validation with local certificate reference check

| | |
|---|---|
| **Current** | Certificate selection triggers `validate_tax_exemption_items` (backend API). The Tax on Items locking logic was later loosened and is not fully enforced. |
| **Proposed** | Remove the API call from the interactive selection flow. Instead, check eligibility **locally** using the certificate's `references` (already loaded via `useCertificateDetails`). |
| **Impact** | Frontend refactor (`sales-order-tax-exemption-lock-context.tsx`, `tax-reference-section.tsx`, `items-section.tsx`). Keep `validate_tax_exemption_items` as a backend guard on save. |
| **Priority** | **High** |

#### F-7: Display per-item tax reference in the items table

| | |
|---|---|
| **Current** | Line-level tax reference is only visible through the Tax on Items column value. No dedicated display shows which certificate covers a row. |
| **Proposed** | Surface the certificate ID for each item row in or near the **Additional Notes** field as a **clickable link** that opens `CertificateDetailsDialog` in view mode. |
| **Impact** | Frontend only |
| **Priority** | Medium |

### 12.6 Sales Order — C3/A57 Item Eligibility Enforcement

#### F-8: Auto-remove ineligible items when C3/A57 certificate is selected

| | |
|---|---|
| **Current** | When a C3 or A57 certificate is selected, all items remain regardless of whether they are covered by the certificate. |
| **Proposed** | On C3/A57 selection: build eligible SKU set from cert references → identify ineligible items → show confirmation dialog → Confirm removes them / Cancel reverts selection. |
| **Impact** | Frontend (new confirmation dialog, item filtering logic). |
| **Priority** | **High** |

### 12.7 Feedback Summary

| ID | Category | Area | Requires Backend | Priority |
|:--:|----------|------|:----------------:|:--------:|
| F-1 | UX | Upload flow | ✗ | Medium |
| F-2 | UX | Certificates table | ✗ | Low |
| F-3 | Data | Item reference tables | **✓** | Medium |
| F-4 | Feature | Details dialog — References tab | Possibly | Medium |
| F-5 | Cleanup | Details dialog — Documents tab | ✗ | Low |
| F-6 | Refactor | SO — Tax validation | ✗ | **High** |
| F-7 | UX | SO — Items table | ✗ | Medium |
| F-8 | Feature | SO — C3/A57 item enforcement | ✗ | **High** |

---

## 13. Open Questions

- [ ] **F-3:** Which additional columns should be included in the reference item tables? Needs backend team input on what data is available in the `references` array in `get_certificate`.
- [ ] **F-6:** Should `validate_tax_exemption_items` be kept as a server-side guard on save, or removed entirely? Recommendation: keep it as backend validation on submit, remove from interactive selection flow.
- [ ] **F-8:** Should ineligible items be **removed** or **flagged with a warning** (letting the user decide per-item)? The removal approach is proposed above, but a softer warning-only approach may be preferred by product.

---

## 14. Out of Scope

- Backend API implementation details (this document covers frontend only)
- Company "compliance" certificates (separate model from ERP tax-reference certificates)
- Non-sales-order usage (e.g. quotations, invoices) — certificates are currently first-class only in the Sales Order domain

---

## See Also

- [[04 - QA & Known Issues/Test Cases/Certificate Tax Reference Test Cases]]
- [[01 - MAIA Product/Technical/Tax Refactor/Tax Refactoring]]
- [[03 - Clients/Active Cooking Clients/Holsen/Product/Working Holsen]]

---

*Last updated: April 2026 — Haiqal · Engineering*
