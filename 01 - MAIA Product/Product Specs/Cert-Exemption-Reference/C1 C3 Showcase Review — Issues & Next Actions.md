---
owner: Gareth
status: draft
last_reviewed: 2026-05-04
---

# C1/C3 Showcase Review — Issues & Next Actions

**Date:** 2026-04-30 (Showcase) / 2026-05-04 (Gap Analysis)
**Source:** [[Granola/Transcripts/2026-04-30/c1_c3 internal quick showcase-transcript]] + [[01 - MAIA Product/Product Specs/Cert-Exemption-Reference/Tax Exemption Features - BE Design & Implementation Evaluation May 4, 2026]]

---

## Current Issues (Blocking)

| # | Issue | Root Cause |
|---|---|---|
| 1 | **`extracted_data` split** — uploaded cert data never reaches `references`; FE shows empty reference tables after PDF upload | Extraction pipeline stores grouped data in `tabCertificate Data` only; never mapped to `tabCertificate Reference` |
| 2 | **C1 ID at order level causes SO submit error** | C1 cert ID is being passed at order level; should only appear at item level |
| 3 | **C3 SO submit fails — "check result for details" error** | C3 validation error on submit; root cause unconfirmed by BE |
| 4 | **HS code display shows SKU + HS code combined** | Should display HS code only in the certificate item reference form |
| 5 | **Chatbot cert retrieval partially broken** | Tool calling issue during showcase; needs further testing end-to-end |
| 6 | **Quantity enforcement for C3 not implemented** | Batch quantity enforcement deferred; no ETA |

---

## Product Next Actions

| Priority | Action | Owner |
|---|---|---|
| 1 | **Gate the next showcase** — only demo when `get_certificate` response is unified (references only, no `extracted_data`) | Gareth |
| 2 | **Follow up with Haiqal** — confirm gap document is written and shared in group (not fixes yet, just documented gaps) | Gareth |
| 3 | **Host 3-way alignment session** (BE + FE + chatbot) before re-integration — walk through Bruno docs together with mock flows | Gareth to schedule |
| 4 | **Update Bruno** — `S7_Get_Cert_Details.bru` must reflect new response (references only) before FE/chatbot integrate | Haiqal |
| 5 | **Document BE refactor decision** — one-liner for team: all cert data (manual or uploaded) lives in `tabCertificate Reference`; `extracted_data` is audit trail only and never shown in FE | Gareth to write, Haiqal to confirm |

---

## FE & Chatbot: What Must Change After BE Refactor

| Area | Current (broken) | Required |
|---|---|---|
| `get_certificate` response | Reads both `extracted_data` + `references` | Read `references` only — same shape for manual and uploaded certs |
| Manual vs uploaded cert | Different code paths | No difference — both return same `references` array |
| `ref_type` values | Inconsistent / free text | Use standardized enums exactly: `raw_materials`, `components`, `eligible_customer`, `import_or_transport_items.raw_materials`, etc. |
| `reference_key` values | Inconsistent | Use standardized keys: `tariff_code`, `commercial_description`, `effective_date`, `customer_name`, etc. |
| Mismatch warnings | Not displayed | Show `reference_warning` (owner mismatch) and `certificate_type_warning` on cert detail view |
| SO submit fallback logic | Checking both tables | Remove fallback — query `tabCertificate Reference` only once BE refactor ships |
| Cert ownership display | Inconsistent | C1 → `reference_doctype: "Customer"`; C3/A57 → `reference_doctype: "Company"` |
| CPO → SO cert carry-over | — | `tax_reference` carries over automatically; FE must not duplicate the link |
| Amend SO restrictions | No restriction today | Block `unit_price` and `tax_on_items_id` changes on cert-linked items; allow qty changes |
| Chatbot upload context | Missing owner context | Must pass `certificate_type` + `company` (+ `customer` for C1) on every upload |

---

## Scenario-Based Test Cases to Add

These scenarios expose the gaps from the showcase. Full TCs are in [[04 - QA & Known Issues/Test Cases/Certificate Tax Reference Test Cases]].

| Scenario | What It Tests |
|---|---|
| Upload C1 PDF → references populated → attach to SO → submit passes | Unified references path (manual = uploaded) |
| Upload C1 with customer mismatch → warning shown, cert still usable | `reference_warning` display |
| Upload with cert type mismatch → `certificate_type_warning` shown | `certificate_type_warning` display |
| C3 SO submit — customer not in `eligible_customer` ref → blocked | C3 customer eligibility validation |
| C1/C3 item with future `effective_date` → SO submit blocked | Effective date enforcement |
| Cert `valid_till` = yesterday → scheduler sets Expired → SO submit fails | Auto-expiry lifecycle |
| Amend SO with cert linked → price change blocked, qty change passes | Amend restrictions |

---

## Ready to Ship (Confirmed by BE Design)

| Feature | Status |
|---|---|
| Manual cert create (C1/C3/A57) → saves to `tabCertificate Reference` | Ready |
| `update_certificate` endpoint | Ready |
| `delete_certificate` endpoint | Ready |
| CPO → cert dynamic link (create / update / remove) | Ready |
| CPO → SO cert carry-over | Ready |
| SO create / update with `tax_reference` | Ready |
| SO cancel (no cert restriction) | Ready |
| `get_extracted_data` endpoint (audit/debug only) | Ready (stays as-is) |
| A57 SO submit validation (items, HS code, batch, attachment) | Ready per design |
| C1 SO submit validation (0% items only, owner = customer, effective_date) | Ready per design |

**Not ready:**
- `get_certificate` unified response (references only) — pending BE refactor
- C3 SO submit — validation error unresolved
- Chatbot cert upload + SO creation end-to-end
- Quantity/batch enforcement on C3
- FE + chatbot re-integration after BE refactor

---

## See Also

- [[01 - MAIA Product/Product Specs/Cert-Exemption-Reference/Tax Exemption Features - BE Design & Implementation Evaluation May 4, 2026]]
- [[01 - MAIA Product/Product Specs/Cert-Exemption-Reference/Certificate Tax Reference Spec]]
- [[04 - QA & Known Issues/Test Cases/Certificate Tax Reference Test Cases]]
- [[Granola/Transcripts/2026-04-30/c1_c3 internal quick showcase-transcript]]
