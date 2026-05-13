---
owner: Gareth
status: review
last_reviewed: 2026-05-04
---

# Certificate Tax Reference — Design Update v2.0

**Version:** 2.0 · **Date:** May 2026 · **Author:** Gareth (PM) — based on tech lead alignment session 2026-05-04
**Supersedes:** Sections 3, 4, 6, 7, 8 of [[Certificate Tax Reference Spec]] (v1.1, April 2026)

> This document records the final architecture decisions made with the tech lead following the internal showcase gaps (2026-04-30). It supersedes the data model and lifecycle sections of v1.1. All other sections of v1.1 remain valid unless explicitly overridden here.

---

## 1. Summary of Changes

| Area | v1.1 (Old) | v2.0 (Final) |
|---|---|---|
| Data storage | Split: `extracted_data` (upload) vs `certificate_reference` (manual) | **Single:** `certificate_data` for everything |
| `certificate_reference` role | Used as data store for item references | **Deprecated** — linkage/relationships only (dynamic links) |
| Certificate doctype | Not submittable; free-form status field | **Submittable:** Draft → Submitted → Amended → Cancelled |
| Validation timing | FE calls `validate_tax_exemption_items` on cert selection; backend enforces on submit | FE applies immediately on selection (preemptive UX); **BE re-validates and enforces on every SO save — BE is authority** |
| HS code matching | Matched via `certificate_reference` rows | Matched at runtime against `certificate_data` — no permanent cert↔item linkage |
| CPO validation | Undefined | **No HS validation on CPO** — enforcement at SO level only |
| API response | Returns `extracted_data` + `references` (data rows) | Returns `certificate_data` (full data) + `references` (dynamic links only) |

---

## 2. New Data Model

### 2.1 Single Source of Truth — `certificate_data`

All certificate fields — regardless of how the cert was created — are stored in `certificate_data`.

**What goes in `certificate_data`:**
- Header fields: certificate title, type, tax registration number, issue date, valid till, issuer, status
- Company/customer info: address, contact name, contact IC, designation
- Item references: HS codes, commercial descriptions, customs classification, effective dates, approved quantity/value
- Eligible customer info (C3 only): customer name, address

**Entry points — both write to the same place:**

| Entry Point | Flow |
|---|---|
| Manual creation | User fills form → data saved to `certificate_data` directly |
| PDF upload | File → middleware extraction → extracted JSON → parsed and stored to `certificate_data` |

No separate `extracted_data` storage path. No split.

### 2.2 `certificate_reference` — Deprecated as Data Store

`certificate_reference` is **no longer used to store business data**. It is replaced by dynamic links for relationship tracking only.

| Old use | New approach |
|---|---|
| Store item HS codes, descriptions, classifications | `certificate_data` |
| Store eligible customer info | `certificate_data` |
| Store company/customer address and contact | `certificate_data` |
| Link Certificate ↔ Sales Order | Dynamic link table |
| Link Certificate ↔ Company | Dynamic link table |

> **Do not store any business logic data in `certificate_reference`.** It exists only to track which documents are linked to a certificate.

### 2.3 API Response Shape

```json
GET /certificate/{id}

{
  "certificate_id": "CERT-2026-00002",
  "type": "C1",
  "company": "...",
  "status": "Submitted",

  "certificate_data": {
    "certificate_title": "...",
    "tax_registration_no": "...",
    "issue_date": "2025-07-01",
    "valid_till": "2026-01-01",
    "company_address": "...",
    "contact_name": "...",
    "items": [
      {
        "ref_type": "raw_materials",
        "tariff_code": "2806100000",
        "commercial_description": "HYDROCHLORIC ACID",
        "customs_classification": "...",
        "effective_date": "2025-07-01"
      }
    ]
  },

  "references": [
    { "doctype": "Sales Order", "docname": "SO-2026-00145" },
    { "doctype": "Company",     "docname": "Holsen Interchem Sdn. Bhd." }
  ]
}
```

**Key rules:**
- `certificate_data` is the complete data blob — FE and chatbot read everything from here
- `references` are derived dynamic links only — not data rows, not editable
- No `extracted_data` key in the response

---

## 3. Certificate Lifecycle (Submittable Doctype)

### 3.1 States

| Status | Meaning |
|---|---|
| **Draft** | Cert created or uploaded; fields editable; cannot be attached to SO or CPO |
| **Submitted** | Cert locked for standard editing; usable on SO and CPO; changes require Amendment |
| **Amended** | A new version of a previously Submitted cert; Submitted status; prior SOs retain link to old version |
| **Cancelled** | Cert invalidated; blocked if linked to active SO |

### 3.2 Lifecycle Rules

**Draft:**
- Created on: manual form save OR PDF upload completion
- Fields in `certificate_data` are fully editable
- Cannot appear in SO or CPO certificate dropdown
- No HS code validation runs

**Submitted:**
- Agent explicitly submits the Draft cert
- `certificate_data` fields become locked — no free-form edits
- Cert appears in SO and CPO dropdowns
- All validation (SO save, HS matching) runs against Submitted cert only

**Amended:**
- Triggered when an agent amends a Submitted cert (e.g. to update HS codes)
- A new document version is created (new cert ID)
- Original cert retained as historical record — existing SOs keep the original link
- Amended cert goes through Draft → Submit cycle again before it is usable

**Cancelled:**
- Only allowed if no active SO or CPO is linked
- System blocks cancellation if dependencies exist
- Cancellation does not cascade to linked SOs

### 3.3 Expiry (valid_till)

Expiry is a **business rule**, separate from doctype status (docstatus).

- A Submitted cert past its `valid_till` date is considered expired for business purposes
- Docstatus stays Submitted — it is not cancelled
- Attempting to attach an expired cert to a new SO is blocked at validation
- Daily scheduler flags certs past `valid_till`; cert remains visible in listing

---

## 4. Validation Model

### 4.1 Separation of Concerns

| Layer | When | What it does |
|---|---|---|
| **Frontend** | On cert selection (immediate) | Loads SO items + cert `certificate_data`; matches HS codes; applies tax override in UI (0% for eligible, locked); gives instant feedback before save |
| **Backend** | On every SO save | Re-validates the same HS code matching from `certificate_data`; enforces correct tax values; **backend result overrides anything the FE applied** |

> **Backend is the single authority.** Frontend mirrors to give responsive UX — it does not decide the final tax outcome.

### 4.2 Frontend — Immediate Tax Override on Cert Selection

When a cert is selected on the SO form:

```
User selects certificate
    ↓
FE loads: SO items (HS codes) + certificate_data (HS codes list)
    ↓
FE matches item HS codes against certificate_data at runtime
    ↓
FE applies immediately (before save):
    Eligible items  → tax overridden to 0%; Tax on Items locked
    Ineligible items → warning shown; Tax on Items stays editable
    C1: order-level defaultTaxId cleared + disabled
    C3/A57: order-level tax unchanged
    ↓
User clicks Save → payload sent to backend
```

**Goal:** Prevent "user saves → backend changes data → UI looks broken" experience.

### 4.3 Backend — Enforcement on SO Save

On every SO save where a cert is attached:

```
Receive SO payload
    ↓
Fetch certificate_data for attached cert
    ↓
Match each item's HS code against certificate_data HS code list
    ↓
Override tax:
    HS code found in cert → 0% (eligible)
    HS code not found    → standard tax (not eligible)
    ↓
Save SO with enforced tax values
    ↓
Return result — FE updates to reflect backend state
```

**Errors surfaced to user:**
- Item HS code not found in certificate
- Item HS code `effective_date` in the future (C1/C3 only)
- Certificate not in Submitted status
- Certificate past `valid_till`
- C3: customer not in eligible customer list
- Required attachments missing

### 4.4 HS Code Matching — No Permanent Cert↔Item Linkage

- Certificates store HS codes in `certificate_data` (not linked to item master records)
- SO items carry HS codes from the item master
- Match happens **at runtime on save** — compare SO item HS code against cert HS code list
- No pre-linking between certificate and items
- This is intentional: certs are issued documents — they reference HS codes, not system items

---

## 5. CPO — No HS Validation (By Design)

**CPO is raw intake only. No HS code validation runs on CPO.**

| Stage | Validation |
|---|---|
| CPO create/update | Cert must exist and be Submitted — no HS code check |
| CPO → SO conversion | Cert carries over to SO automatically |
| SO save | Full HS code validation runs here |

**Rationale:** CPO reflects what the customer sent in. The enforcement layer is the Sales Order, not the CPO.

---

## 6. Impact on Frontend (What Must Change from v1.1)

| Section in v1.1                 | Change Required                                                                                                                                                         |
| ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| §3.2 Upload flow                | After extraction completes, cert appears in listing as **Draft** — no auto-submit; agent must explicitly submit before use                                              |
| §4.4 Details dialog             | Read all data from `certificate_data` only; `extracted_data` key no longer exists in response; `references` array shows dynamic links (SO/Company), not data rows       |
| §4.5 Edit mode                  | Edit only allowed on Draft certs; Submitted certs require Amendment flow first                                                                                          |
| §5.1 Certificates table         | Add doctype status column (Draft / Submitted / Amended / Cancelled) alongside business status                                                                           |
| §5.2 Row actions                | Add **Submit**, **Amend**, **Cancel** actions to kebab menu (context-dependent)                                                                                         |
| §6.1 SO dropdown                | Only show **Submitted** certs in the certificate dropdown — Draft certs must not appear                                                                                 |
| §6.2 Certificate selection flow | FE applies tax override immediately from `certificate_data` — remove dependency on `validate_tax_exemption_items` API call during selection; keep BE validation on save |
| §7.2.3 Tax on Items locking     | Lock logic now reads HS codes from `certificate_data.items[].tariff_code`, not from `references` rows                                                                   |
| §8 API reference                | `get_certificate` response shape updated — see Section 2.3 of this document                                                                                             |

---

## 7. Impact on Chatbot (What Must Change)

| Area | Change Required |
|---|---|
| Upload flow | After upload completes, cert is in Draft; chatbot must prompt agent to Submit cert before it can be used on SO |
| Cert retrieval | Read all cert data from `certificate_data` key — do not look for `extracted_data` or `references` data rows |
| SO creation with cert | Only pass Submitted certs as `tax_reference`; validate cert is Submitted before sending SO payload |
| Tool calling | No fallback logic between `extracted_data` and `references` needed — single `certificate_data` path |

---

## 8. What Is Removed / Deprecated

| Item | Status | Replacement |
|---|---|---|
| `extracted_data` in `get_certificate` response | **Removed** | All data in `certificate_data` |
| `certificate_reference` as data rows | **Deprecated** | `certificate_data` |
| `certificate_reference` for SO validation fallback | **Removed** | Runtime match against `certificate_data` |
| `get_tax_reference_listing` dual JOIN logic | **Simplified** | Single query on `certificate_data` |
| `validate_tax_exemption_items` on cert selection | **Removed from FE interactive flow** | FE local match; BE validates on save |
| Free-form status field on cert | **Replaced** | Doctype lifecycle (Draft / Submitted / Amended / Cancelled) |

---

## 9. Open Items

- [ ] **FE:** Confirm UI design for Submit / Amend / Cancel actions on cert detail dialog
- [ ] **FE:** Confirm how Amendment flow is triggered — button on cert detail? separate dialog?
- [ ] **BE:** Confirm `certificate_data` schema — flat JSON vs nested object; field names for HS codes, effective_date, etc.
- [ ] **BE:** Confirm how `valid_till` expiry is surfaced — flag in `certificate_data`? computed field in response?
- [ ] **BE:** Confirm error codes/messages for each SO save validation failure (FE needs these to display correct user messages)
- [ ] **Chatbot:** Design the Submit cert flow — how does agent submit a Draft cert via chat?
- [ ] **Product:** Confirm whether Amendment creates a new cert ID or a version on the same ID

---

## See Also

- [[01 - MAIA Product/Product Specs/Cert-Exemption-Reference/Certificate Tax Reference Spec]] — v1.1 (frontend spec, still valid for UI layout, component structure, and non-superseded sections)
- [[01 - MAIA Product/Product Specs/Cert-Exemption-Reference/Tax Exemption Features - BE Design & Implementation Evaluation May 4, 2026]] — BE gap analysis (pre-final design; reference for context)
- [[01 - MAIA Product/Product Specs/Cert-Exemption-Reference/C1 C3 Showcase Review — Issues & Next Actions]] — showcase findings and next actions
- [[04 - QA & Known Issues/Test Cases/Certificate Tax Reference Test Cases]] — updated test cases reflecting this design
