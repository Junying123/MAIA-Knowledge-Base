---
owner: Gareth
status: draft
doctype: Quotation
last_reviewed: 2026-04-15
---

# Quotation — Product Spec

---

## 1. Overview

| Attribute | Detail |
|---|---|
| What it is | Entry-point document in the Quote-to-Cash flow; a formal price offer sent to a customer before order confirmation |
| Primary user | Sales Agent |
| Workspace | Sales (`/sales/quotations`) |
| URL | `/sales/quotations` |
| Entry points | Create New (manual only) |
| Downstream creates | Sales Order (DRAFT) via "Convert to Sales Order" |

---

## 2. Capability List

- [x] Create Quotation manually (new)
- [x] Submit Quotation (DRAFT → OPEN)
- [x] Convert to Sales Order (OPEN → creates SO in DRAFT)
- [x] Mark as Lost (OPEN → LOST, terminal)
- [x] Delete Quotation (DRAFT only)
- [x] Multi-line items with SKU, qty, unit price, UoM, notes
- [x] Multi-installment payment terms with portion % splitting
- [x] Biller information (company, contact, address, fulfillment method, tax type)
- [x] Customer information (customer, contact, billing/shipping address)
- [x] Summary (charges, discounts, grand total)
- [x] Incoterm selection (11 options)
- [x] Order type selection (Sales, Maintenance, Shopping Cart)
- [x] Valid Until date
- [x] Currency selection (MYR only currently)
- [x] Remarks field (free text)
- [x] Terms and Conditions field (free text)
- [x] List view with status tabs, sortable columns, search, Export CSV
- [ ] [TO FILL] — PDF export from Quotation
- [ ] [TO FILL] — Quotation numbering format (SAL-QTN-YYYY-NNNNN)
- [ ] [TO FILL] — Duplicate / Clone Quotation
- [ ] [TO FILL] — Email Quotation to customer from MAIA

---

## 3. Feature Specs

---

### F-01: Create Quotation

| Attribute | Detail |
|---|---|
| Description | Sales agent fills in biller info, customer info, items, payment terms to create a formal price quote |
| Business Rule | Details section has no required validation (all defaults); Biller and Customer sections are fully required |
| Field Behaviour | Biller section unlocks Customer section; all fields in DRAFT freely editable |
| Edge Cases | Details section defaults mean user can skip it; Biller section must be completed first |
| Client Examples | All clients |

**Subfeatures:**
- **Details section** (no validation errors — all fields have defaults):
  - Date: defaults to today (MM/DD/YYYY)
  - Valid Until: defaults to 30 days from today (not tomorrow — spec corrected 2026-04-19)
  - Order Type: Sales / Maintenance / Shopping Cart (default: Sales)
  - Currency: MYR (RM) only
  - Incoterm: 11 options — CFR, CIF, CIP, CPT, DAP, DDP, DPU, EXW, FAS, FCA, FOB
- **Biller section** (all required — validation errors if missing):
  - Company (required) → triggers: Contact Person auto-populated, Address auto-populated, Fulfillment Method enabled, Tax Type enabled
  - "Company is required" / "Contact person is required" / "Address is required" / "Fulfillment method is required" / "Tax type is required"
- **Customer section** (unlocks only after Company selected; all required):
  - Customer → Contact Person, Billing Address, Shipping Address
  - "Customer is required" / "Customer contact person is required" / "Customer billing address is required" / "Shipping address is required"
- Full dependency chain: `Company → ContactPerson/Address/FulfillmentMethod/TaxType → Customer → CustomerContact/BillingAddress/ShippingAddress`

---

### F-02: Items Section

| Attribute | Detail |
|---|---|
| Description | Add one or more products/services to the quotation |
| Business Rule | At least one item; SKU must be selected first; Row 1 cannot be deleted |
| Field Behaviour | Name field without SKU = validation error (SKU must be selected first) |
| Edge Cases | Quantity = 0 silently blocks submission; unit price = 0 also blocks |
| Client Examples | All clients |

**Subfeatures:**
- SKU dropdown: searchable; 18+ SKUs available; includes "Advance Search" button
- Selecting SKU auto-populates: Name, UoM (read-only), Quantity = 1, Unit Price
- Selecting Name without SKU first → validation error; does NOT populate other fields
- UoM is read-only (from SKU master data)
- Unit Price editable after auto-population
- Amount = Quantity × Unit Price (real-time on change)
- Additional Notes per line item (optional) — button opens textarea modal
- "Add Item" button adds new rows (numbered sequentially)
- Row 1 protected: checkbox disabled, cannot be deleted
- Other rows: check checkbox → "Delete" button appears → click to remove (also inline × on SKU/Name)
- `[TO FILL]` — Max items per Quotation
- `[TO FILL]` — Item-level discounts (separate from header discount?)

---

### F-03: Summary Section

| Attribute | Detail |
|---|---|
| Description | Auto-calculated totals with editable charges and discounts |
| Business Rule | Grand Total must be > 0 to submit |
| Field Behaviour | Subtotal is read-only; Charges and Discount are editable |
| Edge Cases | [TO FILL] |
| Client Examples | All clients |

**Subfeatures:**
- `Subtotal = Sum of all item Amounts`
- `Grand Total = Subtotal + Charges − Discount`
- Real-time cascade: item change → Subtotal → Grand Total → Payment Amounts
- Charges: 5 fixed types — Delivery, Handling, Service, Packaging, Insurance (each independently addable)
- Discount: fixed RM amount only (not percentage); single header-level discount field

---

### F-04: Payment Terms

| Attribute | Detail |
|---|---|
| Description | Define payment conditions — single payment or multiple installments |
| Business Rule | All Portion % must sum exactly to 100%; at least one row required |
| Field Behaviour | Term selection auto-populates Due Date and Description; Portion % requires double-click to edit |
| Edge Cases | Adding 2nd row immediately shows validation errors until Portion % sums to 100% |
| Client Examples | Holsen (Net 30), Fixguru (CIA) |

**Subfeatures:**
- Default: CIA (Cash in Advance) — 100%, due today, description: "Payment must be made before goods/services provided"
- 8 available terms: CIA, Net 7, Net 15, Net 30, Net 45, Net 60, Net 90, EOM
- Term selection auto-fills: Due Date (today + N days), Description text
- Due Date and Description remain editable after auto-population
- Portion % edit: double-click spinbutton input
- `Payment Amount = Grand Total × (Portion % / 100)` (real-time cascade)
- Multi-installment: "Add Payment Term" button; all portions must sum to 100%
- Row 1 non-deletable; Portion % editable
- Row deletion: check checkbox → Delete button appears → click
- Portion total validation on Submit

---

### F-05: Status Management

| Attribute | Detail |
|---|---|
| Description | Quotation progresses from DRAFT to OPEN, then either ORDERED (via SO) or LOST |
| Business Rule | LOST is terminal (cannot reopen); ORDERED only set when converted SO is submitted |
| Field Behaviour | DRAFT editable; OPEN locked |
| Edge Cases | Mark as Lost uses native browser dialog (window.confirm) — not a component modal |
| Client Examples | All clients |

**Status flow:**
```
Create New → DRAFT → [Submit] → OPEN → [Convert to SO + Submit SO] → ORDERED (fully)
                        ↓              → [Partial SO conversion] → PARTIALLY ORDERED
                     Delete            → [Mark as Lost] → LOST (terminal)
                        ↓              → [Valid Until date passes] → EXPIRED (auto)
                     Removed
```

**Subfeatures:**
- DRAFT: all fields editable; Delete (simple confirm); Submit (validation run)
- OPEN: locked; Convert to SO; Mark as Lost; `[TO FILL]` — Amend flow from OPEN?
- PARTIALLY ORDERED: some but not all line items converted to SO; quotation stays active
- ORDERED: all items converted; Quotation won/closed
- LOST: terminal; no further actions; retained
- EXPIRED: system auto-sets when Valid Until date passes — confirmed via "Expired" and "Expiring Soon" list tabs
- "Warm Leads" and "Follow-up Overdue" are list view filters, not Quotation statuses
- "Mark as Lost" uses native `window.confirm()` browser dialog — cannot be automated in Playwright

---

### F-06: Convert to Sales Order

| Attribute | Detail |
|---|---|
| Description | When customer accepts the quote, convert OPEN Quotation to a Sales Order with all data carried forward |
| Business Rule | Quotation must be OPEN; creates SO in DRAFT; Quotation becomes ORDERED when SO is submitted |
| Field Behaviour | All Quotation data pre-filled in SO DRAFT; still editable before SO Submit |
| Edge Cases | Quotation status only changes to ORDERED when the SO is submitted, not when converted |
| Client Examples | All clients |

**Subfeatures:**
- Data carried: Biller info, Customer info, all Items (SKU/qty/price/UoM/notes), Payment Terms (all installments), Charges, Discounts, Tax settings
- Quotation reference number stored on SO
- SO created in DRAFT — can be reviewed/edited before submitting
- Submitting SO → Quotation status → ORDERED
- `[TO FILL]` — Can multiple SOs be created from one Quotation?

---

### F-07: Quotation List View

| Attribute | Detail |
|---|---|
| Description | Main page listing all quotations with search, status tabs, sortable columns, and Export CSV |
| Business Rule | All status tabs are pre-filtered views; "All Quotations" shows full list |
| Field Behaviour | Column headers are clickable sort buttons; search box filters by quotation content |
| Edge Cases | Expired/Expiring Soon tabs confirm system auto-expires based on Valid Until date |
| Client Examples | All clients |

**Subfeatures:**
- Table columns: Quotation ID, Customer, Credit Utilization, Status, Valid Till, Value, Created at, Updated at, Actions
- Status tabs: All Quotations, Draft, Open, Partially Ordered, Ordered, Lost, Cancelled, Warm Leads, Follow-up Overdue, Expiring Soon, Expired
- All column headers sortable (click to sort)
- Search box: "Search quotations..."
- Export CSV button available
- Rows per page selector (default 25)
- Pagination controls
- "Expiring Soon" and "Expired" tabs confirm system auto-tracks Valid Until date — quotations do expire automatically
- "Partially Ordered" status — exists when Quotation has been partially converted to SO (not fully ordered)
- "Warm Leads" and "Follow-up Overdue" tabs — CRM-style pipeline views (criteria `[TO FILL]`)
- Credit Utilization column — shows customer's credit usage against limit

---

## 4. User Stories

### US-01: Create Quotation
**As a** sales agent, **I can** create a Quotation with items, payment terms, and customer details **so that** I can send a formal price offer to a prospect or customer.
**Priority:** High
**Dependencies:** Customer and Items master data set up

### US-02: Convert to Sales Order
**As a** sales agent, **I can** convert an accepted Quotation to a Sales Order **so that** all quote data carries forward without manual re-entry.
**Priority:** High
**Dependencies:** Quotation in OPEN status

### US-03: Multi-Installment Payment Terms
**As a** sales agent, **I can** split the Quotation payment into multiple installments with different due dates **so that** the payment schedule matches the agreed customer terms.
**Priority:** High
**Dependencies:** Grand Total > 0

### US-04: Mark as Lost
**As a** sales agent, **I can** mark a Quotation as Lost **so that** the pipeline is kept accurate and lost opportunities are tracked.
**Priority:** Medium
**Dependencies:** Quotation in OPEN status

---

## 5. Acceptance Criteria

### AC-01 (US-01: Create Quotation — field dependency)
- **Given** I am creating a new Quotation
- **When** I select a Company in the Biller section
- **Then** Contact Person and Address auto-populate, and the Customer section becomes enabled

### AC-02 (US-01: SKU must be selected first)
- **Given** I am adding items to a Quotation
- **When** I try to select a Name without first selecting a SKU
- **Then** a validation error appears and no other fields are auto-populated

### AC-03 (US-02: Convert to SO — data carryover)
- **Given** a Quotation in OPEN status with 3 items and 2 payment term installments
- **When** I click "Convert to Sales Order"
- **Then** an SO in DRAFT is created with all 3 items, both installments, biller info, customer info, and Quotation reference pre-filled

### AC-04 (US-03: Payment term portion validation)
- **Given** I have 2 payment term rows with Portion % set to 60% and 30%
- **When** I try to Submit the Quotation
- **Then** submission is blocked with a validation error that portions must sum to 100%

### AC-05 (US-04: Mark as Lost)
- **Given** a Quotation in OPEN status
- **When** I click "Mark as Lost" and confirm the browser dialog
- **Then** Quotation status changes to LOST with no further actions available

---

## 6. Known Limitations

- [ ] "Mark as Lost" uses native `window.confirm()` browser dialog — cannot be automated with Playwright — Workaround: manual testing — Status: 🟡 Medium
- [ ] Currency fixed to MYR only — Workaround: none — Status: [TO FILL]
- [ ] Name field cannot be used to search items (SKU must be selected first) — Workaround: always search by SKU — Status: 🟡 Medium UX issue
- [ ] [TO FILL] — Quotation expiry/auto-expiry behaviour
- [ ] [TO FILL] — No clone/duplicate Quotation feature

---

## 7. See Also

- [[Create Quotation Exploration]]
- [[New Quotation Sections Overview]]
- [[Quotation Table Column Filters]]
- [[Quotation Table UI Components]]
- [[Quotation Workflows]]
- [[Sales Order Spec]]
- [[Quote-to-Cash Flow]]
