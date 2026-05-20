---
owner: Gareth
status: draft
last_reviewed: 2026-05-20
---

# CR Scoping — Fixguru (IAM Worldwide Sdn Bhd)

Change requests raised by Fixguru that fall outside the signed SOW scope. Each CR is assessed against the baseline SOW and scoped for commercial discussion.

---

## 1. Two-Way AutoCount Sync (Historical Records)

Fixguru wants documents created in AutoCount before the MAIA go-live date brought into MAIA as historical records. The signed SOW covers ongoing EOD sync from go-live date onward only. Pre-cutoff data is not in baseline scope, making this a one-off data migration engagement separate from the standard AutoCount integration. Migration will be executed when MAIA goes into production — it does not block UAT but must be planned and confirmed before go-live so it can be scheduled immediately after production launch.

### 1.1 Historical Document Migration

- **Platform:** AutoCount integration layer + MAIA data store
- **Features:**
    - **Historical Document Import:** Ingest all pre-cutoff AutoCount documents into MAIA as read-only historical records. Document types to be confirmed with Fixguru (Invoices, Credit Notes, Receipts).
    - **Cut-Off Date Mapping:** Records imported with their original AutoCount dates and document numbers to preserve chronological order and document reference integrity.
    - **One-Off Migration Run:** Migration executed once at production go-live. After migration, all new documents flow through the standard EOD sync covered in the SOW.
    - **Post-Migration Sanitization:** Mindhive performs a sanitization check after import — row counts and duplicate verification — to confirm data integrity before handover to Fixguru.

---

## 2. Calculator Policy Customisation & Unit Toggle

Fixguru has updated their box transformation ratios and requires corresponding updates to the Custom Box Quotation Module calculators built under the signed SOW. Calculators must also support switching between centimetres (cm) and inches. The SOW covered the original IAM-provided logic only; updated ratios, new calculator builds, and unit system toggling are new configuration scope.

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

## 3. Back-Calculate Stock Availability from Raw Material

Fixguru manages production in AutoCount using a three-layer BOM flow: Stock Maintenance (item master for raw materials and finished goods), Item BOM Maintenance (recipe defining RM components and quantities per finished good unit), and Stock Assembly (production transaction that consumes RM and adds FG stock). BOM is confirmed as configured and in active use. The signed SOW covers AutoCount EOD sync at document and SKU level only; BOM data and production back-calculation are not covered.

### 3.1 AutoCount BOM Data Sync Extension

- **Platform:** AutoCount integration layer (extending the existing EOD sync)
- **Features:**
    - **Finished Good Item Sync:** Pull the list of finished good items that have an active BOM record in AutoCount Item BOM Maintenance.
    - **BOM Component Line Sync:** Pull BOM component lines for each active finished good — raw material item codes and the quantity of each RM required per unit of finished good.
    - **Raw Material Stock Level Sync:** Pull current on-hand stock quantities per RM item from AutoCount Stock Item Maintenance, synced on the existing EOD schedule.

### 3.2 Production Quantity Back-Calculator

- **Platform:** MAIA Web Workspace — Logistics or Management workspace
- **Features:**
    - **Finished Good Selection:** User selects a finished good from the list of items with an active BOM in AutoCount.
    - **BOM Component Display:** MAIA displays the BOM composition — each raw material component and its required quantity per finished good unit.
    - **Current Stock Display:** Alongside each BOM component, MAIA shows the on-hand RM stock quantity as of the last AutoCount sync.
    - **Back-Calculation:** MAIA calculates the maximum producible quantity using the formula: `min( floor( RM_on_hand ÷ RM_qty_per_unit ) )` across all BOM components.
    - **Bottleneck Identification:** MAIA highlights the limiting raw material — the component that produces the lowest producible quantity result.
    - **Last Sync Timestamp:** MAIA displays when AutoCount data was last synced so users understand data freshness.

---

## 4. Volumetric (m³) Field on Delivery Note PDF

Fixguru wants the volumetric weight (m³) field to appear on the Delivery Note PDF. Fixguru stores item weight and volume as master data per SKU in AutoCount under the stock item record. The existing AutoCount DN template ("IAM Delivery Order" in the Report Design Center) uses formula fields to calculate `qty × item volume` per line and sum the result at the footer. MAIA will replicate this same logic in pdf template

### 4.1 AutoCount Weight and Volume Sync Extension

- **Platform:** AutoCount integration layer (extending the existing item master sync)
- **Features:**
    - **Weight and Volume Field Sync:** Extend the AutoCount item master sync to include the weight and volume fields stored per SKU in Stock Item.

### 4.2 Delivery Note PDF Update

- **Platform:** MAIA Web Workspace — Delivery Note PDF template
- **Features:**
    - **Volumetric Line Column:** Display `qty × item volume` per Delivery Note line item, mirroring the AutoCount "IAM Delivery Order" formula field logic.
    - **Volumetric Footer Total:** Aggregate line-level volumetric values into a footer total on the Delivery Note PDF, matching the AutoCount template layout.
    - **PDF Template Update:** Update the MAIA Delivery Note PDF template to include the volumetric column and footer across both "IAM Delivery Order" and "IAM Delivery Order (Branch)" template variants.

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
