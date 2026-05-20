---
owner: Gareth
status: draft
last_reviewed: 2026-05-20
---

# CR Scoping — Fixguru (IAM Worldwide Sdn Bhd)

Change requests raised by Fixguru that fall outside the signed SOW scope. Each CR is assessed against the baseline SOW and scoped for commercial discussion.

---

## 1. Two-Way AutoCount Sync (Historical Records)

Pre-cutoff AutoCount documents to be brought into MAIA as historical records. SOW covers EOD sync from go-live onward only. This is a one-off migration executed at production launch — does not block UAT.

### 1.1 Historical Document Migration

- **Platform:** AutoCount integration layer + MAIA data store
- **Features:**
    - **Historical Document Import:** Ingest all pre-cutoff AutoCount documents into MAIA as read-only historical records. Document types to be confirmed with Fixguru (Invoices, Credit Notes, Receipts).
    - **Cut-Off Date Mapping:** Records imported with their original AutoCount dates and document numbers to preserve chronological order and document reference integrity.
    - **One-Off Migration Run:** Migration executed once at production go-live. After migration, all new documents flow through the standard EOD sync covered in the SOW.
    - **Post-Migration Sanitization:** Mindhive performs a sanitization check after import — row counts and duplicate verification — to confirm data integrity before handover to Fixguru.

---

## 2. Calculator Policy Customisation & Unit Toggle

Updated transformation ratios and unit toggle (cm ↔ inches) required on the Custom Box Quotation Module. SOW covered original IAM-provided logic only — updated ratios, new builds, and unit toggling are new scope.

### 2.1 Calculator Revision

- **Platform:** MAIA Web Workspace — Custom Box Quotation Module
- **Features:**
    - **Existing Calculator Update:** Revise 2 outdated calculators with Fixguru's updated transformation ratio logic per the updated Excel models provided by Fixguru.

### 2.2 New Calculator Build

- **Platform:** MAIA Web Workspace — Custom Box Quotation Module
- **Features:**
    - **New Calculator Build:** Build 5 new calculators with new logic and UI configuration per Fixguru's updated Excel models.

### 2.3 Unit Toggle (cm ↔ inches)

- **Platform:** MAIA Web Workspace — Custom Box Quotation Module
- **Features:**
    - **Unit System Toggle:** Add a toggle to the calculator interface allowing users to switch input units between centimetres and inches across all calculators.

---

## 3. Raw-to-Finished Conversion with Stock Visibility and Yield Variance

Raw materials (e.g. sheetboard) are converted into finished custom box units via Stock Assembly. Both stock types must be tracked independently. Sales team uses remaining raw material stock to calculate producible quantity and decide order commitment. Actual yield may differ from BOM output (e.g. 3900 vs 4000 expected) — shortfall must be visible to decide whether to adjust the Delivery Order, give FOC units, or re-order. SOW covers document and stock item sync only; BOM data, yield tracking, and dual-stock visibility are new scope.

### 3.1 AutoCount BOM and Stock Data Sync Extension

- **Platform:** AutoCount integration layer (extending the existing sync)
- **Features:**
    - **Finished Good Item Sync:** Pull the list of finished good items with an active BOM record from AutoCount.
    - **BOM Transformation Ratio Sync:** Pull the BOM composition for each finished good — raw material components and the quantity of raw material required per unit of finished good produced.
    - **Raw Material Stock Level Sync:** Pull the current on-hand stock quantity per raw material item from AutoCount, synced on the existing daily schedule.
    - **Finished Good Stock Level Sync:** Pull the current on-hand stock quantity per finished good item from AutoCount, synced on the existing daily schedule.

### 3.2 Stock Visibility and Conversion Planner

- **Platform:** Logistics Workspace — Stock Conversion Module
- **Features:**
    - **Dual Stock View:** MAIA displays current on-hand stock for both the raw material and the corresponding finished good side by side, so the team can assess total fulfillable quantity at a glance.
    - **Multi-Box Raw Material Visibility:** A single raw material purchase may be size-matched and allocated across multiple finished good box types. MAIA surfaces which finished goods each raw material stock can support, allowing the team to plan allocation across box types before committing to orders.
    - **Producible Quantity Calculation:** From the remaining raw material stock and the BOM transformation ratio, MAIA calculates how many additional finished good units can be produced, supporting order commitment decisions.
    - **Conversion Entry:** Operator records the raw material quantity consumed and the actual finished good quantity produced for a production run.
    - **Expected Output Calculation:** MAIA calculates the BOM-implied expected output from the consumed raw material quantity and the transformation ratio.
    - **Yield Variance Display:** MAIA surfaces the variance between expected and actual output — unit loss is shown explicitly against the BOM-implied result, enabling the team to decide whether to adjust the Delivery Order quantity to actual, give FOC units, or initiate a re-order based on the size of the shortfall.
    - **Last Sync Timestamp:** MAIA displays the last data sync timestamp so users understand the data freshness.

---

## 4. Volumetric (m³) Field on Delivery Note PDF

Volumetric (m³) field required on the Delivery Note. Item weight and volume stored as master data per SKU in AutoCount. MAIA syncs these fields and surfaces volumetric calculations on the Delivery Note and its PDF output.

### 4.1 AutoCount Weight and Volume Sync Extension

- **Platform:** AutoCount integration layer (extending the existing item master sync)
- **Features:**
    - **Weight and Volume Field Sync:** Extend the AutoCount item master sync to include weight, volume, volume UOM, and volume per unit fields stored per SKU in Stock Item.

### 4.2 Delivery Note Volumetric Update

- **Document:** Delivery Note (document and PDF output)
- **Features:**
    - **Volumetric Line Column:** Display `qty × item volume` per Delivery Note line item, mirroring the AutoCount "IAM Delivery Order" formula field logic.
    - **Volumetric Total:** Aggregate line-level volumetric values into a total on the Delivery Note.
    - **PDF Output:** Volumetric fields, including volume and volume UOM, are surfaced on the Delivery Note PDF. Output is rendered via IAM's AutoCount PDF template.

---

## Summary Table

| # | Title | Chargeable? | Status |
|---|---|---|---|
| 1 | Two-way AutoCount sync (historical) | Yes — one-off + retainer revision | Needs scoping |
| 2 | Calculator customisation & unit toggle | Yes | Needs VO quote |
| 3 | Back-calculate stock from raw material | Yes — if confirmed | Gated on go-ahead |
| 4 | Volumetric m³ on Delivery Note PDF | TBD — needs scoping | Needs VO quote |

---

## See Also

- [[SOW/Fixguru SOW]] — baseline scope reference
- [[Requirements Log]] — running requirements log
- [[Meetings/2026-05-15 Fixguru UAT Action Items]] — latest meeting context
