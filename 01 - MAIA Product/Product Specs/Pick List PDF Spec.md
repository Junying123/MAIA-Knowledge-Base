---
owner: Gareth
status: draft
doctype: Pick List
last_reviewed: 2026-06-03
---

# Pick List PDF — Product Spec

---

## 1. Overview

| Attribute | Detail |
|---|---|
| What it is | Internal warehouse document that tells staff what to pick, where to pick it from, and how much to pick |
| Primary user | Warehouse / Logistics Team |
| Workspace | Logistics |
| Flow position | `Sales Order -> Pick List -> Delivery Note` |
| Purpose of this spec | Give Rahim a decision-complete brief to rework Pick List PDF correctly |
| Current evidence status | Spec-backed audit complete; one live Pick List PDF sample audited (`PL-2026-00087`) |

**Important:** Pick List is not a customer-facing commercial document. It is an operational warehouse document.

---

## 2. Capability List

- [x] Create Pick List from Sales Order
- [x] Create Pick List from Delivery Note
- [x] Submit Pick List
- [x] Cancel Pick List
- [x] Complete Pick List
- [x] Delete Pick List when non-submitted
- [x] Create Delivery Note from Pick List
- [x] Generate Pick List PDF through dedicated Pick List PDF path
- [x] Generate Pick List PDF through generic PDF endpoint
- [x] Track linked locations / warehouse picking data
- [x] Exact current live Pick List PDF layout verified against rendered sample `PL-2026-00087`
- [x] Exact current item-row field population spot-checked against rendered sample `PL-2026-00087`

---

## 3. Core Business Rules

- Pick List is internal-only.
- Pick List exists to support warehouse execution, not customer communication.
- Pick List must emphasize:
  - item identity
  - warehouse / location
  - quantity
  - UOM
  - batch / lot visibility
  - handling / traceability
  - source references
- Pick List must not prioritize:
  - pricing
  - tax
  - financial totals
- Payment Terms must not render on Pick List.
- When generic commercial PDF rules conflict with Pick List business logic, Pick List business logic wins.

---

## 4. Current Spec Conflict

There is a direct source-of-truth conflict in the current docs.

### Pick List-specific business rule

The Pick List business spec says:

- Pick List is internal-only
- Pick List does not show prices, taxes, or financial totals

### Shared document-generation rule

The shared document-generation spec currently:

- groups Pick List under the standard commercial layout
- gives that layout a commercial table structure
- keeps summary-style financial sections in the same render family

### Product decision for this rework

For Pick List, trust the Pick List business rule over the shared commercial structure.

That means:

- no `Rate`
- no `Tax`
- no `Total`
- no subtotal / discount / charges / tax total / rounding / grand total
- no amount in words
- no Payment Terms

---

## 5. Current Implementation Audit

This audit is based on current MAIA specs and implementation notes already available in the repo.

**Confirmed vs pending boundary:**

- Confirmed below means spec-backed contradiction, implementation-shape issue, or defect verified directly in the live sample `141523_Pick List_PL-2026-00087.pdf`.
- Any note not based on this live sample should still be treated as broader risk, not yet universal proof across all Pick Lists.

### Structure

**Confirmed issue**

- Pick List is currently grouped inside the standard commercial document layout.
- Against the latest DN PDF implementation, Pick List also uses the wrong non-item layout: Pick List renders a compact top strip plus two large boxes, while DN uses one clean 3-column information band.

**Why this is wrong**

- Pick List is a warehouse document, not a commercial/customer document.
- Reusing a commercial structure risks bringing the wrong page sections and priorities into Pick List.
- The DN implementation already gives the cleaner document pattern to follow: document details, warehouse information, and order/shipping information should sit in one aligned row.

**Rework direction**

- Give Pick List its own warehouse-first structure instead of inheriting the generic commercial layout unchanged.
- For this rework pass, align the non-item sections to the latest DN PDF layout and ignore item-table redesign until the item table work is ready.

### Data

**Confirmed issue**

- Pick List business logic says prices, taxes, and financial totals must not appear.
- The shared document-generation structure still carries commercial financial behavior in the Pick List render family.

**Why this is wrong**

- This creates a direct risk that current or future Pick List rendering shows financial information that does not belong.

**Rework direction**

- Remove or suppress all monetary item fields and all financial summary mappings for Pick List.

### Format

**Confirmed issue**

- Existing review notes indicate:
  - `Warehouse` should default-show for Pick List
  - `Handling` should default-show for `DN/PL`
  - `HS code` should remain optional and default-hide
- These defaults are not clearly locked into a Pick List-specific render contract.

**Why this is wrong**

- Operational metadata can become hidden, visually weak, or inconsistent if the broader generic rules dominate.

**Rework direction**

- Make Pick List defaults explicit:
  - warehouse/location visible by default
  - handling visible when present
  - HS code optional and visually secondary
  - empty labels hidden cleanly

### Layout

**Confirmed issue**

- The shared structure gives Pick List the same general block family as commercial documents, including `Info Block`, `Remarks`, `Terms & Conditions`, and `Summary`.
- Current Pick List puts Remarks, Picker Acknowledgement, and Exception Handling as stacked full-width blocks. Latest DN uses a 50/50 row for Remarks and Summary; Pick List should adapt that row as Remarks and Picker Acknowledgement.

**Why this is wrong**

- Even with Payment Terms hidden, the page can still feel like a commercial document instead of a picking document.
- Too much page weight can shift away from item rows and warehouse/location.
- Stacking Remarks and Picker Acknowledgement makes the page taller than needed and does not follow the latest DN document rhythm.

**Rework direction**

- Reduce or remove non-operational lower-page sections for Pick List.
- Make the item table visually dominant.
- Render Remarks on the left and Picker Acknowledgement on the right, each 50% width.
- Render Exception Handling as one full-width section below that 50/50 row.
- Remove Terms & Conditions entirely for Pick List.

### Hierarchy

**Confirmed issue**

- Pick List belongs to logistics flow, but shared document structure visually groups it with customer/commercial doctypes.

**Why this is wrong**

- A warehouse document should optimize for:
  - what to pick
  - where to pick
  - how much to pick
  - what source document it came from

**Rework direction**

- Promote item rows, operational references, warehouse/location, quantity, and UOM to top hierarchy.
- Demote or remove customer/commercial presentation patterns that do not help warehouse use.

### Confirmed live PDF defects from sample `PL-2026-00087`

The following issues are directly confirmed from `/Users/garethng/Downloads/141523_Pick List_PL-2026-00087.pdf`.

#### Structure

- `Terms & Conditions` still renders as a section heading even though Pick List should not behave like a commercial document and the section is empty.
- Warehouse and order information are split into large framed boxes with many empty subfields, creating a customer-form structure rather than a lean warehouse document structure.
- The document includes both a dedicated `WAREHOUSE` column and an extra `WAREHOUSE:` line inside the description cell, causing structural duplication inside the item row.
- Compared with the latest DN implementation, Pick List is missing the 3-column information band: `Document Details`, `Warehouse Information`, and `Order Information`.

#### Data

- `Sales Order:` in the Order Information box is blank, while the item row renders `SALES ORDER REFERENCE` as `None`. This is inconsistent and suggests weak reference population.
- Warehouse Information shows empty `Address`, `Contact/PIC`, `Phone`, and `Email` labels.
- Order Information shows empty `Customer Address`, `Customer Phone`, and `Customer Email` labels.
- `Picked Qty` appears blank at item-row level while the bottom summary row shows `0`, which is inconsistent presentation of picked quantity state.
- `Purpose: Delivery` is rendered multiple times across the page, creating duplicated low-value data.

#### Format

- The literal `Company Logo` placeholder is visible instead of a real logo or a cleaner empty-state treatment.
- Empty labels remain visible instead of hiding cleanly when values are absent.
- `None` is rendered as visible content for Sales Order reference, which should not be shown as a user-facing value.
- Description formatting over-emphasizes the duplicate warehouse line and under-uses the description cell for richer operational metadata such as batch / serial / handling.

#### Layout

- The two large information boxes take too much vertical space relative to the single item row, leaving the most important picking content with less visual area than supporting metadata.
- The remarks, picker acknowledgement, exception handling, and empty `Terms & Conditions` area together consume a large portion of the page even when the operational item content is minimal.
- The table uses a dedicated `WAREHOUSE` column but still wraps warehouse text in a way that consumes extra row height; the same information also appears in the description cell.
- The page balance still feels like a form template with empty fields rather than a compact picking document optimized for row scanning.
- Remarks and Picker Acknowledgement are not displayed as a 50/50 row, unlike the latest DN pattern.
- Exception Handling is full-width, which is directionally correct, but its spacing should be tightened after the Remarks/Acknowledgement row is fixed.

#### Hierarchy

- Customer and order metadata are given stronger framing than necessary for a warehouse picking workflow.
- The eye is pulled into large bordered sections and empty form fields before the item row details.
- The page still feels structurally closer to a business form than to a warehouse execution document.

#### What the sample gets right

- No financial item columns are shown.
- No financial summary block is shown.
- Payment Terms are not rendered.
- The document clearly identifies itself as `PICK LIST`.
- Warehouse is present in the row, even though it is duplicated and not optimally placed.

---

## 6. Rework Direction for Rahim

### Target state

Rahim should treat Pick List as a warehouse-first document with this minimum structure:

1. Title
2. 3-column information band
3. Item table as primary visual block
4. 50/50 row: Remarks left, Picker Acknowledgement right
5. Full-width Exception Handling
6. No Terms & Conditions
7. No financial sections

### Minimum row structure target

- No.
- Item Code
- Description
- Warehouse / Location
- Qty
- UOM

### Description cell target

- item name
- additional remarks
- batch / lot number when present or when the item is batch-tracked
- serial when present
- handling when present

### Top-section target

Follow the latest DN PDF implementation and render one 3-column band:

Column 1: Document Details

- Pick List ID
- Pick List date
- Sales Order / Quotation / PO references where relevant

Column 2: Warehouse Information

- Warehouse
- Warehouse address
- Contact / PIC
- Phone
- Email

Column 3: Order Information

- Purpose
- Sales Order reference
- Customer
- Customer address
- Customer phone
- Customer email

Visibility rule:

- Hide any empty field row cleanly. Do not show blank labels or `None`.

### Non-item section target

For this rework pass, ignore the item table because it is still being updated. Fix the surrounding document layout first:

- Remarks: left side, 50% width
- Picker Acknowledgement: right side, 50% width
- Exception Handling: full-width section below the 50/50 row
- Terms & Conditions: remove entirely
- Internal warehouse notice: keep, low visual weight

### Field visibility matrix

Use this as the working render contract unless a later product decision overrides it.

| Field / Section | Pick List rule | Notes |
|---|---|---|
| Title | Show | Must render as `PICK LIST` |
| Pick List ID | Show | Core operational reference |
| Pick List date | Show | Core operational reference |
| Sales Order reference | Show when available | Allowed reference for Pick List |
| Quotation reference | Show when available | Allowed reference for Pick List |
| PO Number | Show when available | Allowed reference for Pick List |
| Document Details block | Show | First column of the 3-column band |
| Warehouse Information block | Show | Second column of the 3-column band |
| Order Information block | Show | Third column of the 3-column band |
| Customer block | Fold into Order Information | Keep only operationally useful fields |
| Shipping block | Fold into Order Information | Keep only operationally useful fields |
| Item Code | Show | Primary row identifier |
| HS Code | Optional, default-hide | Secondary metadata only |
| Item Name | Show | Primary description content |
| Additional Remarks | Show when present | Keep in description cell |
| Batch No | Show when present | Hide label cleanly when absent |
| Serial No | Show when present | Hide label cleanly when absent |
| Handling | Show when present | Default-show behavior for PL |
| Warehouse / Location | Show by default | Operationally critical |
| Qty | Show | Operationally critical |
| UOM | Show | Operationally critical |
| Remarks | Show | Left side of 50/50 row below item table |
| Picker Acknowledgement | Show | Right side of 50/50 row beside Remarks |
| Exception Handling | Show | Full-width section below Remarks/Acknowledgement row |
| Terms & Conditions | Hide | Remove entirely for Pick List PDF |
| Rate | Hide | Must not render |
| Tax | Hide | Must not render |
| Total | Hide | Must not render |
| Financial Summary | Hide | Must not render |
| Payment Terms | Hide | Must not render |

### ASCII render reference

Use these ASCII blocks to compare current vs target PDF structure. The current-state block is based on the audited sample `PL-2026-00087`; the target-state block is the implementation direction Rahim should build toward.

#### Current sample structure: `PL-2026-00087`

```text
+--------------------------------------------------------------------------+
| Company Logo          Holsen Interchem Sdn Bhd                           |
|                       company address / phone / email                    |
|                                                                          |
|                                PICK LIST                                 |
+--------------------------------------------------------------------------+
| PICK LIST ID: PL-2026-00087 | PURPOSE: Delivery | PICK DATE: 29/05/2026  |
| CUSTOMER: DAYA SAINGAN SDN BHD                                           |
+------------------------------------+-------------------------------------+
| Warehouse Information              | Order Information                   |
| Warehouse: WH-00624                | Purpose: Delivery                   |
| Address:                           | Sales Order:                        |
| Contact/PIC:                       | Customer: DAYA SAINGAN SDN BHD      |
| Phone:                             | Customer Address:                   |
| Email:                             | Customer Phone:                     |
|                                    | Customer Email:                     |
+------------------------------------+-------------------------------------+
| ITEMS TO PICK                                                            |
+----+--------+-----------------------+-------------+-----+----------+-----+
| No | SKU    | Name                  | SO Ref      | Qty | Picked   | Whs |
+----+--------+-----------------------+-------------+-----+----------+-----+
| 1  | DMP500 | D-Mannitol - 500g     | None        | 5.0 |          | Main|
|    |        | WAREHOUSE: Main ...   |             |     |          | ... |
+----+--------+-----------------------+-------------+-----+----------+-----+
|                                 Total Items: 1 | Picked Qty Summary: 0    |
+--------------------------------------------------------------------------+
| Remarks                                                                  |
| No remarks                                                               |
+--------------------------------------------------------------------------+
| Picker Acknowledgement                                                   |
| Picked By: __________  Pick Time: __________  Signature: ______________  |
+--------------------------------------------------------------------------+
| Exception Handling                                                       |
| Note any short picks, damages, or issues below:                          |
+--------------------------------------------------------------------------+
| Terms & Conditions                                                       |
+--------------------------------------------------------------------------+
| FOR INTERNAL WAREHOUSE USE ONLY                                          |
+--------------------------------------------------------------------------+
```

Current-state defects visible in this ASCII shape:

- large empty information boxes appear before the item row
- warehouse appears both in the row column and again inside description
- `None` appears as a visible Sales Order reference
- empty contact/address labels render
- `Terms & Conditions` renders as an empty commercial-style section
- picker/exception blocks consume more vertical space than the picking row

#### Target warehouse-first structure

```text
+--------------------------------------------------------------------------+
| Company / logo                                    PICK LIST              |
| Pick List ID: PL-2026-00087      Pick Date: 29/05/2026                   |
| SO Ref: [hide if empty]          QT Ref: [hide if empty]  PO: [if any]   |
| Purpose: Delivery               Customer: DAYA SAINGAN SDN BHD           |
+--------------------------------------------------------------------------+
| ITEMS TO PICK                                                            |
+----+----------+-----------------------------+----------------+------+-----+
| No | Item     | Description                 | Warehouse      | Qty  | UOM |
+----+----------+-----------------------------+----------------+------+-----+
| 1  | DMP500   | D-Mannitol - 500g           | Main Warehouse | 5.00 | [ ] |
|    |          | Remarks: [show if present]  | Ready Stock    |      |     |
|    |          | Batch: [hide if empty]      |                |      |     |
|    |          | Serial: [hide if empty]     |                |      |     |
|    |          | Handling: [show if present] |                |      |     |
+----+----------+-----------------------------+----------------+------+-----+
| Total items: 1                                                           |
+--------------------------------------------------------------------------+
| Remarks: No remarks                                                      |
+--------------------------------------------------------------------------+
| Picker acknowledgement: Picked By ______ Pick Time ______ Signature _____ |
+--------------------------------------------------------------------------+
| Exception notes: ______________________________________________________  |
+--------------------------------------------------------------------------+
| FOR INTERNAL WAREHOUSE USE ONLY                                          |
+--------------------------------------------------------------------------+
```

Target-state rules shown in this ASCII shape:

- item rows dominate the page
- warehouse/location is a first-class column
- no financial columns or financial summary
- no Payment Terms section
- no empty labels
- no literal `None`
- customer/shipping context is compact and operational only

#### Expected correct Pick List PDF (DN-aligned non-item layout)

This is the preferred final shape Rahim should implement for the non-item sections. It follows the latest DN PDF implementation and the `DOCUMENT_GENERATION_SPECS.md` output style:

- full-width header with logo zone and company block
- centered doctype label
- one 3-column information band below the label
- full-width items table
- 50/50 row for Remarks and Picker Acknowledgement
- full-width Exception Handling section
- MAIA footer

Item-table redesign is intentionally out of scope for this immediate pass because the item table is still being updated separately.

```text
+----------------------------------------------------------------------------+
| HEADER                                                                     |
| +--------+  Holsen Interchem Sdn Bhd                                        |
| | LOGO   |  No.16, Jalan Anggerik Mokara 31/44, Kota Kemuning, Seksyen 31   |
| |        |  Shah Alam, Selangor, 40460                                      |
| |        |  Phone: +60351225751 | Email: holsen@holseninterchem.com         |
| +--------+                                                                 |
|                                                                            |
|                                [ PICK LIST ]                                |
+----------------------------------------------------------------------------+
| DOCUMENT DETAILS          | WAREHOUSE INFORMATION   | ORDER INFORMATION     |
| Pick List ID: PL-2026-00087| Warehouse: WH-00624     | Purpose: Delivery     |
| Pick Date: 29/05/2026      | Warehouse Address: *    | Sales Order: *        |
| SO Ref: [hide if empty]    | Contact / PIC: *        | Customer: DAYA...     |
| QT Ref: [hide if empty]    | Phone: *                | Customer Address: *   |
| PO No: [hide if empty]     | Email: *                | Customer Phone: *     |
|                            |                         | Customer Email: *     |
+----------------------------------------------------------------------------+
| ITEMS TO PICK                                                              |
| [Item table layout is still being updated separately. Keep current table    |
|  for now, but do not add financial columns or duplicate warehouse text.]    |
+--------------------------------------+-------------------------------------+
| REMARKS                              | PICKER ACKNOWLEDGEMENT              |
| No remarks                           | Picked By: ____________________     |
|                                      | Pick Time: ____________________     |
|                                      | Signature: ____________________     |
+--------------------------------------+-------------------------------------+
| EXCEPTION HANDLING                                                         |
| Note any short picks, damages, or issues below:                            |
| ________________________________________________________________________   |
+----------------------------------------------------------------------------+
| FOR INTERNAL WAREHOUSE USE ONLY                                            |
+----------------------------------------------------------------------------+
| Powered by MAIA - Generated on 29/05/2026 22:15:22 (GMT+8)    Page 1 of 1  |
+----------------------------------------------------------------------------+
```

Expected correct-version rules:

- follow the document-generation spec header, label, table, and footer style
- align the information band to the latest DN implementation: `Document Details`, `Warehouse Information`, `Order Information`
- hide empty Sales Order / Quotation / PO fields instead of showing blanks or `None`
- keep `ITEMS TO PICK` in place but ignore deeper item-table redesign for this pass
- render Remarks left and Picker Acknowledgement right in a 50/50 row
- render Exception Handling as one full-width section below the 50/50 row
- remove `Terms & Conditions`
- never render financial fields or financial summaries

### Regression checks for future samples

For future Pick List PDF samples, review these first because they are the highest-risk carryovers from the shared commercial structure:

1. `Rate`, `Tax`, or `Total` still visible in item rows
2. subtotal / grand total / tax summary still visible
3. warehouse/location buried inside description instead of being a first-class row field
4. customer or shipping blocks taking more visual weight than item rows
5. handling not showing even when operationally relevant
6. empty batch / serial / handling labels still rendering
7. repeated commas or broken one-line addresses
8. a bottom-of-page structure that still feels like invoice/order paperwork rather than warehouse picking

For sample `PL-2026-00087`, items 3, 4, and 8 are confirmed, and item 1/2 remain correctly absent in this sample.

---

## 7. Execution Plan for Rahim

### Step 1: Lock source-of-truth precedence

Use this order:

1. Pick List-specific business logic
2. Pick List lifecycle / logistics flow
3. Shared doc-generation rules only where they do not conflict

### Step 2: Remove commercial assumptions first

Strip these from the Pick List render path before polishing anything:

- `Rate`
- `Tax`
- `Total`
- subtotal / discount / charges / tax total / rounding / grand total
- amount in words
- Payment Terms

### Step 3: Rebuild around warehouse execution

The row must answer:

1. what item is this
2. where do I pick it from
3. how much do I pick
4. what special handling / traceability applies

### Step 4: Fix visual hierarchy

The eye should land in this order:

1. document title
2. operational references
3. item rows
4. warehouse/location
5. qty/uom
6. optional remarks
7. everything else

If customer/commercial blocks dominate the item rows, the layout is still wrong.

### Step 5: Apply default field behavior correctly

- warehouse/location: show by default
- batch / lot number: show when present or when the item is batch-tracked; never render an empty `Batch` label
- handling: show when present
- HS code: optional, default-hide, visually secondary
- empty labels: hide cleanly

### Step 6: Validate against the checklist, not just appearance

Rahim should not stop at “looks better.”

He must verify:

- no financial fields
- no financial summary
- Payment Terms hidden
- warehouse/location clear
- handling correct
- batch / lot number visible for batch-tracked picking
- references correct
- batch/serial behavior correct
- page reads like warehouse document

---

## 8. Do / Do Not Do

### Do

- treat Pick List as a logistics document
- optimize for warehouse scanning
- make item rows the main visual payload
- use existing `Pick List Item` and `Location` data shape
- preserve optional operational metadata only when it helps execution
- hide empty labels and broken placeholders

### Do Not Do

- do not clone Sales Order or Invoice structure and just rename the title
- do not keep financial rows “for consistency”
- do not let summary blocks survive just because the shared template has them
- do not over-expand customer-facing sections that distract from picking
- do not invent data if the field source is unclear; document the gap instead

---

## 9. User Stories

### US-01: Warehouse-first Pick List PDF

**As a** warehouse user, **I want** the Pick List PDF to show item, warehouse/location, quantity, and handling clearly **so that** I can pick the right goods quickly without scanning commercial noise.

### US-02: Non-commercial Pick List output

**As a** product reviewer, **I want** Pick List PDF to exclude financial columns and totals **so that** the document reflects its internal operational purpose.

### US-03: Clear implementation brief for Rahim

**As a** developer, **I want** one clear Pick List spec with rules, audit findings, and a rework sequence **so that** I do not need to infer business logic from scattered docs.

---

## 10. Acceptance Checklist

- [ ] Title renders as `PICK LIST`
- [ ] No item-row monetary columns render
- [ ] No financial summary block renders
- [ ] Payment Terms do not render
- [ ] Warehouse/location is clearly visible by default
- [ ] Item rows support item name, additional remarks, batch / lot number when present or batch-tracked, serial when present, and handling when present
- [ ] Batch / lot visibility does not depend on opening another document or checking the system UI
- [ ] Sales Order / Quotation / PO references render correctly when available
- [ ] Empty optional labels do not leave broken placeholders
- [ ] Address-like fields do not show duplicate commas or malformed spacing
- [ ] Operational information is visually stronger than customer/commercial information
- [ ] Optional metadata such as HS code remains visually secondary unless enabled
- [ ] The final document reads as a warehouse/logistics document rather than a commercial customer document

### Reviewer questions before handoff

Rahim should be able to answer these directly:

1. Did I remove all financial item columns from Pick List?
2. Did I remove the financial summary behavior from Pick List?
3. Is warehouse/location visible without the reviewer hunting for it?
4. Does the PDF still make sense if a warehouse user ignores the customer block entirely?
5. Is batch / lot number visible for batch-tracked items?
6. Do serial and handling appear only when useful?
7. Did I make Pick List look operational rather than commercial?
8. If a field was unavailable, did I document the gap instead of faking it?

---

## 11. Open Questions and Evidence Gap

### Open questions

- Which item-table fields should be finalized once the item table update is ready?
- How much customer/shipping detail is actually operationally necessary inside the Order Information column?

### Open evidence gap

One current Pick List PDF sample has now been audited, but broader verification is still limited to that sample.

Because of that, the following remain unverified until one real sample is attached:

- whether the same issues repeat consistently across other Pick List records / statuses / clients
- whether handling, batch, and serial fields behave correctly when present in live data
- whether warehouse/location layout behaves well on multi-row Pick Lists
- whether line wrapping and spacing remain usable on dense multi-item documents

**Next step to close this gap:**

Audit at least 2–3 additional Pick List PDFs with different data shapes:

- multi-item Pick List
- Pick List with batch / serial values
- Pick List with populated shipping/customer detail if available

---

## 12. Source Reference Map

| Topic | Source | Why it matters |
|---|---|---|
| Pick List is internal-only | `product_information/specifications/spec_v1_0_1/core_functional_modules/3-17-pick-list.md` | Establishes that Pick List is not customer-facing |
| Pick List must not show prices / taxes / totals | `product_information/specifications/spec_v1_0_1/core_functional_modules/3-17-pick-list.md` | Primary business rule that overrides commercial-template assumptions |
| Pick List belongs to `SO -> PL -> DN` logistics flow | `product_information/specifications/MAIA_ERPNext_BUSINESS_WORKFLOW/08_PICK_LIST_PL_LIFECYCLE.md` | Confirms operational role and hierarchy |
| Pick List has dedicated PDF generation path | `product_information/specifications/MAIA_ERPNext_BUSINESS_WORKFLOW/07_DOCUMENT_GENERATION_FLOW.md` | Confirms this is not just a side-effect of Sales Order rendering |
| Shared doc-gen spec currently groups Pick List under commercial layout | `product_information/specifications/MAIA_DOC_GENERATION/DOCUMENT_GENERATION_SPECS.md` | Explains the source-of-truth conflict |
| Shared doc-gen spec keeps summary / terms structures in Pick List family | `product_information/specifications/MAIA_DOC_GENERATION/DOCUMENT_GENERATION_SPECS.md` | Explains why commercial bias survives even if Payment Terms are hidden |
| Payment Terms must be omitted on Pick List | `product_information/specifications/MAIA_DOC_GENERATION/DOCUMENT_GENERATION_SPECS.md` | Confirms at least one explicit Pick List-specific visibility rule already exists |
| Pick List payload includes `Pick List Item` and `Location` | `product_information/specifications/MAIA_DOC_GENERATION/PDF-v1-ARCHITECTURE-superseeded.md` and `product_information/specifications/spec_v1_0_1/core_functional_modules/DOCUMENT_GENERATION_GENERATORS.md` | Shows implementation already has warehouse-oriented data shape available |
| Handling and Warehouse defaults for PL | `intake/WIP/30Mar26_ivan_doctype_interface_layout_spec/attachments/2432026 - PDF Review (1).txt` | Gives current implementation clues for expected operational defaults |
| HS code optional / default-hide | `intake/WIP/30Mar26_ivan_doctype_interface_layout_spec/attachments/2432026 - PDF Review (1).txt` | Helps keep secondary metadata from overpowering the row |

---

## 13. See Also

- [[Sales Order Spec]]
- [[Delivery Note Spec]]
- [[Return Note Spec]]
- [[Blanket Order Spec]]
