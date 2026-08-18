---
owner: Gareth
status: draft
last_reviewed: 2026-08-06
client: Fixguru
document_type: internal
lark_url: https://eg69120xnei.sg.larksuite.com/wiki/UnpowNX7ciexYykyxhilc6hngSd
---

# CR Scoping — Fixguru (IAM Worldwide Sdn Bhd)

Change requests raised by Fixguru that fall **outside the signed SOW scope**. Each CR is assessed against the baseline SOW and scoped for commercial discussion — none of these are committed/locked build items, they are candidate next-phase scope.

*Note: image embeds below are hosted on Lark's internal API and may require Lark auth to view — see the [source doc](https://eg69120xnei.sg.larksuite.com/wiki/UnpowNX7ciexYykyxhilc6hngSd) for the full visual reference.*

---

## 1. Two-Way AutoCount Sync (Historical Records)

Pre-cutoff AutoCount documents to be brought into MAIA as historical records. SOW covers EOD sync from go-live onward only. This is a **one-off migration executed at production launch — does not block UAT.**

### 1.1 Historical Document Migration
- **Platform:** AutoCount integration layer + MAIA data store
- **Features:**
  - **Historical Document Import:** Ingest all pre-cutoff AutoCount documents into MAIA as read-only historical records. Document types to be confirmed with Fixguru (Invoices, Credit Notes, Receipts).
  - **Cut-Off Date Mapping:** Records imported with their original AutoCount dates and document numbers to preserve chronological order and document reference integrity.
  - **One-Off Migration Run:** Migration executed once at production go-live. After migration, all new documents flow through the standard EOD sync covered in the SOW.
  - **Post-Migration Sanitization:** Mindhive performs a sanitization check after import — row counts and duplicate verification — to confirm data integrity before handover to Fixguru.

---

## 2. Calculator Policy Customisation & Unit Toggle

[All 7 custom calculators (Lark Drive folder)](https://eg69120xnei.sg.larksuite.com/drive/folder/OY2qfRXc0llEwidX2ymlUpaPgmJ)

Updated transformation ratios and unit toggle (cm ↔ inches) required on the Custom Box Quotation Module. SOW covered original IAM-provided logic only (RSC + Diecut, per Scope Lock v2 L-05) — updated ratios, new builds, and unit toggling are new scope.

### 2.1 Calculator Revision
- **Platform:** MAIA Web Workspace — Custom Box Quotation Module
- **Features:** Revise 2 outdated calculators with Fixguru's updated transformation ratio logic per the updated Excel models provided by Fixguru.

### 2.2 New Calculator Build
- **Platform:** MAIA Web Workspace — Custom Box Quotation Module
- **Features:** Build 5 new calculators with new logic and UI configuration per Fixguru's updated Excel models. (This is the Pizza/Layer Pad/5-panel expansion flagged as OOS-02 in Scope Lock v2 — CR is the formal path to bring these in scope.)

### 2.3 Unit Toggle (cm ↔ inches)
- **Platform:** MAIA Web Workspace — Custom Box Quotation Module
- **Features:** Add a toggle to the calculator interface allowing users to switch input units between centimetres and inches across all calculators.

---

## 3. Raw-to-Finished Conversion — BOM, Stock Visibility, Yield Variance

Raw materials (e.g. sheetboard) are converted into finished custom box units via Stock Assembly. Both stock types must be tracked independently. Sales team uses remaining raw material stock to calculate producible quantity and decide order commitment. Actual yield may differ from BOM output (e.g. 3900 vs 4000 expected) — shortfall must be visible to decide whether to adjust the Delivery Order, give FOC units, or re-order. **SOW covers document and stock item sync only; BOM data, yield tracking, and dual-stock visibility are new scope.**

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

### AutoCount module reference (context for scoping, not MAIA build items)

**Stock Item Maintenance (SIM)** — the item master in AutoCount. All finished goods, semi-finished goods, and raw materials are created and maintained here; controls item codes, UOM, costing method, and basic stock attributes used everywhere else. Item BOM Maintenance and Stock Assembly can only reference items defined in SIM — it's the shared master keeping item identity consistent across all BOM and assembly documents. Typical actions: create/edit finished goods (e.g. NOVUS box), create/edit components/semi-finished items (e.g. LP NOVUS, inner packs, materials), set UOM/item group/default location/costing method/active status.

**Item BOM** — the master definition of how a finished good is produced: what components are needed, in what quantity per finished unit, at what cost. Fixguru maintains one BOM per finished box size (e.g. AUTO ONE CAR (450), NOVUS (1315), B1, B2) as a straightforward **1:1 conversion** — each finished carton requires one LP (inner pack/semi-finished item) as its only component, no overhead or assembly cost configured. This makes their production essentially a repackaging step converting a semi-finished LP item into a finished carton. BOM also drives costing: Finished Good Cost = Component UTD Cost × BOM Qty; since overhead/assembly cost = 0, finished carton cost equals LP cost directly. When LP costs change, "Update BOM Item Cost" recalculates and pushes updated cost across all finished goods at once, flowing into every subsequent Stock Assembly.

**Stock Assembly (SA)** — records actual production runs against BOM/Assembly Order quantities. AutoCount computes a **Variance Qty** column (actual Qty − Order Qty) when real consumption differs from the BOM-implied quantity, e.g. BOM says 2,227.000 units of component LP ST COMMERCE 384 for finished good ST COMMERCE 384, actual consumption is 2,000.000 → Variance Qty = −227.000. SubTotal/Total Cost calculate off actual Qty (2,000.000 × item cost), not the planned quantity — cost reflects real usage. Typical workflow: BOM/Assembly Order fills Order Qty → on production completion, user edits Qty to actual consumption → AutoCount computes Variance Qty and cost off actual Qty → user posts the Stock Assembly, updating stock/cost and keeping variance visible for review.

---

## 4. Volumetric (m³) Field on Delivery Note PDF

Volumetric (m³) field required on the Delivery Note — to answer "how much load can fit into the lorry?" Item weight and volume stored as master data per SKU in AutoCount. MAIA syncs these fields and surfaces volumetric calculations on the Delivery Note and its PDF output. (Relates to VOC-013 in the VoC Extraction — client raised weight/volume capture as a delivery-note need; this CR is the formal path to build it.)

### 4.1 AutoCount Weight and Volume Sync Extension
- **Platform:** AutoCount integration layer (extending the existing item master sync)
- **Features:** Extend the AutoCount item master sync to include weight, volume, volume UOM, and volume per unit fields stored per SKU in Stock Item.

### 4.2 Delivery Note Volumetric Update
- **Document:** Delivery Note (document and PDF output)
- **Features:**
  - **Volumetric Line Column:** Display `qty × item volume` per Delivery Note line item, mirroring the AutoCount "IAM Delivery Order" formula field logic.
  - **Volumetric Total:** Aggregate line-level volumetric values into a total on the Delivery Note.
  - **PDF Output:** Volumetric fields, including volume and volume UOM, are surfaced on the Delivery Note PDF. Output is rendered via IAM's AutoCount PDF template.

---

## Summary

| # | CR | Scope driver | Blocks UAT? |
|---|---|---|---|
| 1 | Two-Way AutoCount Sync (historical migration) | Pre-cutoff data continuity | No — one-off migration at go-live, post-UAT |
| 2 | Calculator Policy Customisation & Unit Toggle | 5 new calculators + 2 revised + cm/inch toggle, beyond SOW's RSC+Diecut-only scope (L-05, OOS-02) | No |
| 3 | Raw-to-Finished Conversion (BOM, stock visibility, yield variance) | New BOM/dual-stock/yield-variance capability, beyond SOW's document+stock-item sync only | No |
| 4 | Volumetric (m³) field on DN PDF | Lorry-load planning, beyond SOW baseline (relates to VOC-013) | No |

*(Detailed status-counts sheet embedded in the Lark source, not synced to Markdown — see source doc for the live table.)*

## See Also
- [[Scope Lock v2 — Fixguru]]
- [[Fixguru — VoC Extraction]]
- [[Fixguru — PM Handover Brief]]
