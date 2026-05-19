---
owner: Gareth
status: draft
last_reviewed: 2026-05-19
---

# CR Scoping — Fixguru (IAM Worldwide Sdn Bhd)

Change requests raised by Fixguru that fall outside the signed SOW scope. Each CR is assessed against the baseline SOW and scoped for commercial discussion.

---

## SOW Baseline Reference

| Item | SOW Coverage |
|---|---|
| AutoCount integration | EOD sync (push/pull) — Invoices, Credit Notes, Receipts, Payment Vouchers, Customer Records, Product Master |
| Custom Box Quotation Module | RSC Sheet + Diecut Sheet (calculation logic provided by IAM) |
| Document generation | Quotation, SO, Invoice, Credit Note, Receipt, Delivery Note, Picking List, Delivery Checklist |
| One-off dev cost | RM 48,000 (covers chatbot, dashboard, approval flow, payment/credit check, Lalamove API, storage) |
| Monthly retainer | ~RM 1,200 (OpenAI + platform + server costs) |

---

## CR-01 — Two-Way AutoCount Sync (Historical Records)

**Request:** Sync documents created in AutoCount **before the MAIA cut-off date** into MAIA as historical records.

**SOW Position:** SOW covers ongoing EOD sync from go-live date onward. Pre-cutoff historical data migration is **not in scope**.

**Nature:** One-off data migration exercise. Not a recurring system feature.

**Scoping Approach:**
- Classify as historical record migration (data migration project), not a product feature CR
- Scope as one-off fixed-price engagement
- Retainer revision required if ongoing reconciliation or reverse-sync of historical records becomes a maintenance item
- Requires Fixguru to provide clean data export from AutoCount (agreed data format TBD)

**Commercial Flag:** Yes — one-off cost + potential retainer revision

**Next Steps:**
- [ ] Confirm which document types need backfilling (Invoices only? Credit Notes? Receipts?)
- [ ] Confirm cut-off date
- [ ] Fixguru to provide AutoCount data sample for scoping
- [ ] Gareth to follow up with Fixguru on data readiness

---

## CR-04 + CR-10 — Calculator Policy Customization & Unit Toggle

**Requests:**
- CR-04: Fixguru has updated transformation ratios. Custom calculator rules needed. Total: **5 new calculators** required; **2 existing calculators** outdated and need revision.
- CR-10: Calculator must support switching units between centimetres (cm) and inches.

**SOW Position:** SOW covers Custom Box Quotation Module with original IAM-provided logic. Updated ratios, additional calculators, and unit toggle are **new configuration scope** — not covered by baseline.

**Nature:** Single variation order (VO) on the Custom Box Quotation Module — covers logic revision, new calculator builds, and unit system toggle.

**Scoping Approach:**
- Treat as one VO with three work items:
  1. **Revision** of 2 outdated calculators (updated transformation ratio logic)
  2. **New build** of 5 calculators (new logic, new UI config)
  3. **Unit toggle** (cm ↔ inches) — assess if universal multiplier or per-formula adjustment
     - Universal multiplier: bundle at minimal incremental cost
     - Per-formula rewrites: scope as separate line item within this VO
- Fixguru must provide updated Excel models for all 7 calculators before dev begins
- Estimate by complexity per calculator

**Commercial Flag:** Yes — explicitly chargeable

**Next Steps:**
- [ ] Fixguru to provide updated Excel models for all 7 calculators (2 revised + 5 new)
- [ ] Confirm with dev: is unit toggle a single multiplier or per-formula change?
- [ ] Mindhive to assess complexity per calculator and produce VO quote

---

## CR-05 — Back-Calculate Stock Availability from Raw Material

**Request:** If Fixguru wants a custom composition calculator — back-calculate how many finished goods can be produced based on available raw material stock.

**Dependencies:**
- Requires syncing **BOM (Bill of Materials) / product bundle data** from AutoCount into MAIA
- If AutoCount does not have BOM configured: requires a consultation session to help Fixguru set it up first

**SOW Position:** Inventory management in SOW validates stock at SKU level only. BOM-based back-calculation is **not in scope**.

**Nature:** New module / calculator feature with an AutoCount data dependency.

**Scoping Approach:**
- Gate on Fixguru confirmation that they want this feature
- Pre-condition: Fixguru must confirm BOM exists in AutoCount (or agree to set it up)
- If BOM exists: scope sync mechanism + back-calc logic
- If BOM does not exist: scope a separate consultation engagement first, then the feature
- Estimate as a standalone VO

**Commercial Flag:** Yes — chargeable, only if Fixguru confirms they want to proceed

**Next Steps:**
- [ ] Gareth to confirm with Fixguru: do they want this feature? (gate before any scoping work)
- [ ] If yes: confirm BOM status in AutoCount
- [ ] Proceed to scoping only after both confirmed

---

## CR-12 — Volumetric (m³) Field on Delivery Note PDF

**Request:** Show volumetric weight (m³) field on the Delivery Note PDF.

**Reference:** AutoCount Report Design Center → "IAM Delivery Order" and "IAM Delivery Order (Branch)" templates.

**SOW Position:** SOW covers document generation including Delivery Note. Document customization is mentioned as configurable (layout, fields, branding). However, adding a **calculated volumetric field** (not just a display field) may require data input/formula logic.

**Nature:** PDF template enhancement + potentially a new data field on the Delivery Note record.

**Scoping Approach:**
- Clarify: is volumetric m³ a **stored field** (entered manually per order) or a **calculated field** (auto-computed from dimensions)?
  - If stored/manual: lower complexity — PDF template update only
  - If calculated: requires dimension fields on line items + formula logic
- Reference the AutoCount "IAM Delivery Order" template to understand the existing field structure
- Scope as a PDF customization VO

**Commercial Flag:** TBD — needs scoping; likely a smaller VO

**Next Steps:**
- [ ] Obtain AutoCount "IAM Delivery Order" template spec or screenshot from Fixguru
- [ ] Clarify: manual entry or calculated from dimensions?
- [ ] Scope PDF template update + any backend field additions

---

## Summary Table

| CR | Title | Chargeable? | Prerequisite | Status |
|---|---|---|---|---|
| CR-01 | Two-way AutoCount sync (historical) | Yes — one-off + retainer revision | Fixguru provides data export | Needs scoping |
| CR-04 + CR-10 | Calculator customization & unit toggle | Yes | Fixguru provides updated Excel models; dev unit toggle assessment | Needs VO quote |
| CR-05 | Back-calculate stock from raw material | Yes — if confirmed | Fixguru confirms intent + BOM status | Gated on confirmation |
| CR-12 | Volumetric m³ on Delivery Note PDF | TBD — needs scoping | AutoCount template + field clarification | Needs scoping |

---

## See Also

- [[SOW/Fixguru SOW]] — baseline scope reference
- [[Requirements Log]] — running requirements log
- [[Meetings/2026-05-15 Fixguru UAT Action Items]] — latest meeting context
