---
owner: Gareth
status: draft
last_reviewed: 2026-06-26
client: Holsen
---

# Handover Brief - Holsen 2026 Stock Ingest (2026-06-26)

**For:** Joseph  
**From:** Gareth  
**Purpose:** Prepare and support ingestion of Holsen's `2026` stock dataset into MAIA  
**Source file:** `260625 Holsen Stock.xlsm`  
**Source sheet:** `2026`

---

## Objective

We need to ingest Holsen's stock and stock movement data from the `2026` sheet into MAIA in a way that preserves:

- correct item mapping
- correct batch assignment
- correct stock quantity per batch
- correct base UOM
- correct warehouse assignment
- correct stock movement traceability for inbound and outbound rows

This is not a simple raw upload. There are a few gaps between the client's sheet and what MAIA needs, so you must validate the data first before ingest.

---

## Core Business Rules

### 1. Holsen only uses one warehouse

- In MAIA, use only **one warehouse** for this dataset: `HQ`
- All Holsen stock for this import should sit in `HQ`
- All stock movement from this dataset must also be tracked against `HQ`

### 2. Batch is mandatory for relevant Holsen items

- We need batch-level stock tracking
- Each relevant item must be batch-enabled in MAIA item profile before ingest
- If the item is not flagged for batch, we cannot assign imported stock properly

### 3. Batch cannot be handled purely from frontend upload

- MAIA currently cannot upload / assign batch from the normal frontend import flow
- This part needs **backend support**
- Coordinate with BE before final ingest

### 4. Batch is the unit of stock ownership

- The `BATCH` value from the source sheet must be ingested into MAIA as the actual batch ID / batch number
- Each batch must carry its own quantity
- Do not merge multiple batches into a single pooled stock balance

### 5. Batch UOM must follow the item base UOM

- For every imported batch, the batch UOM in MAIA must use the **base UOM from the item profile**
- Do not invent separate batch UOM logic outside item master

### 6. Stock movement must remain traceable

- We must be able to track inbound and outbound stock movement by:
  - warehouse
  - item
  - batch ID
- If outbound row has customer, that customer should explain where stock moved out to

---

## How To Read The `2026` Sheet

For this task, only focus on these columns from the `2026` sheet:

| Column | Meaning |
|---|---|
| `DATE` | Movement date |
| `BATCH` | Batch number / batch ID |
| `PRODUCT` | Product name |
| `QTY IN` | Stock coming in |
| `QTY OUT` | Stock going out |
| `CUSTOMER` | Customer on outbound movement where available |

### Interpretation rules

- `QTY IN` means inbound stock / stock increase
- `QTY OUT` means outbound stock / stock decrease
- if a row has `QTY OUT` and a `CUSTOMER`, treat it as stock issued out to that customer
- warehouse for all rows in this dataset should resolve to `HQ`

### Focus for Joseph

When reading the `2026` sheet, the main goal is to understand:

- what item the row belongs to
- which batch the stock belongs to
- whether stock is coming in or going out
- whether outbound stock is linked to a customer
- what quantity should sit under that batch after ingest

Other columns in the sheet may still exist, but they are not the main focus for this stock ingest handover.

---

## Product Sheet Must Also Be Reviewed

Inside the same Excel file, there is also a `Product` sheet.

This `Product` sheet should be treated as the **latest item master data we have from Holsen**.

### What this means

- use the `Product` sheet as the main source to validate item master readiness
- if there are item issues in MAIA, this `Product` sheet is the source to refer back to
- if item master needs correction or refresh, this is the sheet to use for reingest / reimport planning

### What Joseph must check on the `Product` sheet

- whether each product needed by the `2026` sheet exists in the `Product` sheet
- whether product name matches between `2026`, `Product` sheet, and MAIA
- whether packing / unit / base item setup is consistent
- whether there is any drift / variance between:
  - `2026` transactional sheet
  - `Product` sheet item master
  - MAIA item master

### Important instruction

Do not only check drift between `2026` and MAIA.

Also check drift between:

- `2026` and `Product` sheet
- `Product` sheet and MAIA

If there is any mismatch in item master setup, treat the `Product` sheet as the latest source from Holsen and flag whether item master needs to be reingested or corrected in MAIA.

---

## What You Must Check Before Ingest

## 1. Drift / Variance Against MAIA Item Master

This is the first check.

You must compare every row in `2026` against:

- Holsen `Product` sheet
- MAIA item master

and flag any mismatch.

### Check for:

- product in `2026` does not exist in MAIA
- product in `2026` does not exist in the `Product` sheet
- product name drift between source and MAIA
- product name drift between `2026` and `Product` sheet
- packing drift between source and MAIA
- UOM drift between source and MAIA
- product exists in `Product` sheet but does not match MAIA item master cleanly
- item exists in MAIA but batch is not enabled

### Expected action:

- make a variance list of all unmatched / ambiguous products
- treat the `Product` sheet as latest Holsen item master reference
- if MAIA item master is wrong or outdated, flag it for correction / reingest
- do not ingest rows with unresolved item mapping

### Important note:

The client sheet may contain products that look similar but are not safe to auto-match if:

- product name differs materially
- packing differs
- unit differs

If in doubt, flag it instead of force-mapping it.

---

## 2. Warehouse Readiness In MAIA

Before ingest:

- confirm Holsen only uses warehouse `HQ` in MAIA for this stock dataset
- confirm imported stock will be assigned into `HQ`
- confirm stock movement ledger for this import also points to `HQ`

If multiple warehouses exist in MAIA, do **not** spread this dataset across them. For this import, all stock should sit in `HQ`.

---

## 3. Item Profile Readiness

For each relevant imported item:

- item must exist in MAIA
- item must have the correct base UOM
- item must be batch-enabled if stock is to be assigned by batch

### Must verify:

- base UOM in MAIA matches the dataset's intended UOM
- batch flag is enabled before batch ingest

If the batch flag is missing, stop and get this fixed first.

---

## 4. Batch Record Readiness

Each imported batch must at minimum carry:

- `batch no`
- linked product / item
- quantity

For source interpretation:

- if row has `QTY IN`, that contributes inbound quantity into the batch
- if row has `QTY OUT`, that contributes outbound quantity from the batch
- if outbound row has customer, retain that as movement context where possible

---

## 5. Batch Quantity Logic

The important requirement is not just to create batches. We must preserve the correct quantity per batch.

### What to do:

- ingest source `BATCH` value into MAIA as batch ID / batch number
- calculate / preserve quantity at batch level
- make sure each batch has its own current quantity after considering movement

### What not to do:

- do not flatten all quantities into item-level total only
- do not lose the relationship between item and batch
- do not merge different source batches into one batch record

---

## 6. Batch UOM Logic

Batch UOM must always follow item base UOM from MAIA item profile.

### Example:

- if item base UOM is `KG`, batch quantity must be tracked in `KG`
- if item base UOM is `PC`, batch quantity must be tracked in `PC`

Do not create custom batch-level UOM that differs from the item's configured base UOM unless explicitly approved by product / dev.

---

## 7. Stock Movement Logic

The import must support stock movement traceability, not just current balance.

### We need to be able to understand:

- what stock came in
- what stock went out
- which warehouse it belongs to
- which batch it belongs to
- which customer it went out to where customer exists

### Minimum movement dimensions:

- `warehouse = HQ`
- `item`
- `batch`
- `movement direction`
- `qty`
- `date`
- `customer` for outbound rows where available

---

## What Needs BE Support

You need to align with BE on these points before final ingest:

## 1. Batch ingest path

- batch cannot be uploaded properly through the standard frontend flow
- BE needs to confirm the ingestion mechanism for batch creation / assignment

## 2. Batch-level quantity persistence

- BE needs to confirm imported batch records can store the correct current quantity
- this quantity must remain tied to the specific batch, not just to the item

## 3. Stock movement traceability

- BE needs to confirm the movement model can preserve inbound / outbound movement against:
  - `HQ`
  - item
  - batch ID

## 4. Customer context on outbound movement

- if movement row has customer, confirm whether the import path can preserve that linkage or at least retain it in a traceable way

---

## Practical Work Sequence

Follow this order.

## Step 1. Review source sheet structure

- inspect `2026` sheet
- confirm column mapping
- identify blank / broken / ambiguous rows

## Step 2. Run drift / variance audit

- compare `PRODUCT` against MAIA item master
- compare `PACKING` and `UNIT`
- identify missing items and mapping conflicts

## Step 3. Confirm MAIA warehouse setup

- confirm only `HQ` is used for this ingest

## Step 4. Confirm item master readiness

- base UOM correct
- batch enabled where needed

## Step 5. Align with BE on batch ingestion

- confirm how batch numbers will be created / assigned
- confirm how batch quantities will be stored

## Step 6. Prepare ingest-ready dataset

- cleaned item mapping
- warehouse fixed to `HQ`
- batch IDs preserved from source
- quantity logic clearly separated for inbound and outbound rows

## Step 7. Validate post-ingest result

- sample-check item
- sample-check batch
- sample-check current batch quantity
- sample-check warehouse assignment
- sample-check stock movement traceability

---

## Done Criteria

This task is only considered done when all of the below are true:

- every imported product row is mapped to the correct MAIA item
- every relevant item is batch-enabled before batch ingest
- all Holsen stock for this dataset is assigned to warehouse `HQ`
- source `BATCH` values are preserved as batch IDs in MAIA
- each batch has its own correct quantity
- batch quantity uses the base UOM from MAIA item profile
- inbound and outbound stock movement can be traced by warehouse + item + batch
- outbound movement with customer can be understood against that customer where source provides it
- BE has confirmed or completed the required batch ingest support

---

## Risks To Watch Closely

### Item drift risk

- source product exists in Excel but not in MAIA
- source product maps to multiple possible MAIA items

### Batch readiness risk

- item exists but batch flag is missing
- batch created without proper item linkage

### UOM risk

- source unit differs from MAIA base UOM
- batch quantity stored in wrong UOM

### Warehouse risk

- stock accidentally assigned to wrong warehouse
- movement ledger not fixed to `HQ`

### Quantity risk

- batch exists but current quantity is wrong
- inbound / outbound rows are not reflected correctly in batch balance

### Traceability risk

- stock total imported without usable batch movement history
- outbound rows lose customer context

---

## Questions To Escalate Early

Raise these immediately if blocked:

- which products in `2026` do not have safe item mapping in MAIA?
- which items still do not have batch enabled?
- does BE have an approved path for batch creation + quantity ingest?
- how will current batch balance be calculated and stored?
- how will outbound customer context be preserved, if at all?

---

## Final Note

Do not treat this as just a stock upload.

For Holsen, the important part is that MAIA must end up with:

- one warehouse: `HQ`
- correct item mapping
- correct batch IDs from source
- correct quantity per batch
- correct base UOM handling
- usable stock movement traceability for inbound and outbound movement

If any of those are missing, the ingest is incomplete even if rows were technically uploaded.
