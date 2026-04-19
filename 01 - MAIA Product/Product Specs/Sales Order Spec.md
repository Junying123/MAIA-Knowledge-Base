---
owner: Gareth
status: draft
doctype: Sales Order
last_reviewed: 2026-04-15
---

# Sales Order — Product Spec

---

## 1. Overview

| Attribute | Detail |
|---|---|
| What it is | Central hub document in the Quote-to-Cash flow; a confirmed customer order that triggers billing and fulfillment |
| Primary user | Sales Agent |
| Workspace | Sales (`/sales/orders`), Finance (`/finance/orders`), Logistics (`/logistics/orders`) |
| URL | `/sales/orders` |
| Entry points | 1. Create New SO (manual) 2. Convert from Quotation (OPEN status) |
| Downstream creates | Invoice (DRAFT), Delivery Note (DRAFT) |

---

## 2. Capability List

- [x] Create SO manually (new)
- [x] Convert from Quotation with full data carryover
- [x] Submit SO (DRAFT → TO BILL)
- [x] Put SO on HOLD and Resume
- [x] Close and Reopen SO
- [x] Amend locked SO (edit mode without cancelling)
- [x] Cancel SO (two-step, terminal)
- [x] Delete SO (DRAFT only)
- [x] Convert to Invoice (data carryover)
- [x] Create Delivery Note from SO — supports Blanket Order pattern (see [[Blanket Order Spec]])
- [x] Generate PDF (Proforma Invoice)
- [x] Partial invoicing (multiple invoices from one SO)
- [x] Multi-line items with SKU, qty, unit price, UoM, notes
- [x] Multi-installment payment terms with portion % splitting
- [x] Biller information (company, contact, address, fulfillment, tax type)
- [x] Customer information (customer, contact, billing/shipping address)
- [x] Charges and discounts on summary
- [x] Incoterm selection (11 options)
- [x] Order type selection
- [x] Currency selection
- [x] List view with status tabs, sortable columns, search, Export CSV
- [x] Customer credit utilization visible on SO list and SO form
- [ ] [TO FILL] — Credit check on SO creation/submission
- [ ] [TO FILL] — Bulk actions on SO list view
- [ ] [TO FILL] — Customer outstanding balance check

---

## 3. Feature Specs

---

### F-01: Create Sales Order

| Attribute | Detail |
|---|---|
| Description | Sales agent creates a new SO either manually or by converting an accepted Quotation |
| Business Rule | Both methods land on DRAFT status; all fields editable until Submit |
| Field Behaviour | Biller fields required before customer fields unlock (dependency chain) |
| Edge Cases | Converting from Quotation carries all data; still editable in DRAFT before Submit |
| Client Examples | All active clients (Holsen, Fixguru) |

**Subfeatures:**
- Biller section: Company selection unlocks Contact Person (auto-populated), Address (auto-populated), Fulfillment Method, Tax Type
- Customer section: only enabled after Company selected
- Customer selection unlocks Contact Person, Billing Address, Shipping Address
- Full field dependency chain: `Company → Contact/Address/FulfillmentMethod/TaxType → Customer → CustomerContact/BillingAddress/ShippingAddress`
- Order Type options: Sales, Maintenance, Shopping Cart (default: Sales)
- Currency: MYR (RM) only currently
- Incoterm: 11 options (CFR, CIF, CIP, CPT, DAP, DDP, DPU, EXW, FAS, FCA, FOB)
- Date defaults to today; Valid Until defaults to tomorrow
- When converting from Quotation: all biller info, customer info, items, payment terms, charges, discounts carried forward with SO referencing Quotation number

---

### F-02: Items Section

| Attribute | Detail |
|---|---|
| Description | Add one or more line items (products/services) to the SO with quantities, prices, and notes |
| Business Rule | At least one item required; SKU must be selected; Row 1 cannot be deleted |
| Field Behaviour | SKU must be selected first — Name-first selection triggers validation error |
| Edge Cases | Quantity = 0 silently blocks submission (no error shown); unit price = 0 allowed but blocks submit |
| Client Examples | All clients |

**Subfeatures:**
- SKU dropdown is searchable; includes "Advance Search" option
- Selecting SKU auto-populates: Name, UoM (read-only), Quantity (set to 1), Unit Price
- Name and Unit Price remain editable after auto-population
- UoM is read-only (set by SKU master data)
- Amount = Quantity × Unit Price (real-time calculation on change)
- Additional Notes per line item — opens textarea modal
- "Add Item" button adds new rows (numbered sequentially)
- Row 1 is protected — checkbox disabled, cannot be deleted
- Other rows: check checkbox → inline × appears → click to remove
- Multiple items supported (no stated upper limit)
- `[TO FILL]` — Max items per SO

---

### F-03: Summary (Charges, Discounts, Totals)

| Attribute | Detail |
|---|---|
| Description | Auto-calculated summary showing subtotal, additional charges, discount, and grand total |
| Business Rule | Grand Total must be > 0 to submit |
| Field Behaviour | Subtotal is read-only; Charges and Discount are editable |
| Edge Cases | [TO FILL] |
| Client Examples | All clients |

**Subfeatures:**
- `Subtotal = Sum of all item Amounts`
- `Grand Total = Subtotal + Charges − Discount`
- Charges: [TO FILL — types of charges available]
- Discount: [TO FILL — discount logic, per-line vs header]
- Real-time cascade: item changes → Subtotal → Grand Total → Payment Amounts

---

### F-04: Payment Terms

| Attribute | Detail |
|---|---|
| Description | Define how and when the customer pays — single payment or multiple installments |
| Business Rule | All installment Portion % must sum exactly to 100%; at least one row required |
| Field Behaviour | Payment Term dropdown auto-fills Due Date and Description; Portion % is double-click to edit |
| Edge Cases | Adding a 2nd row immediately shows validation errors (term required, due date required, portions ≠ 100%) until filled |
| Client Examples | Holsen (Net 30), Fixguru (CIA) |

**Subfeatures:**
- Default: CIA (Cash in Advance) — 100%, due today
- Available terms: CIA, Net 7, Net 15, Net 30, Net 45, Net 60, Net 90, EOM
- Selecting a term auto-populates Due Date (today + N days) and Description text
- Due Date and Description remain editable after auto-population
- Portion % requires double-click to edit (spinbutton input)
- `Payment Amount = Grand Total × (Portion % / 100)` — real-time, cascades when Grand Total changes
- Multi-installment: "Add Payment Term" button adds rows; portions must sum to 100%
- Row deletion: check checkbox → Delete button appears → confirm
- Row 1 non-deletable but Portion % editable
- Portion total validation enforced on Submit

---

### F-05: Status Management

| Attribute | Detail |
|---|---|
| Description | SO moves through a defined status lifecycle from creation to completion or cancellation |
| Business Rule | DRAFT is editable; TO BILL is locked (Amend required for changes); CANCELLED is terminal |
| Field Behaviour | All actions available differ by status (see transitions below) |
| Edge Cases | Cannot Convert to Invoice from HOLD — must Resume to TO BILL first |
| Client Examples | All clients |

**Status flow:**
```
DRAFT → [Submit] → TO BILL → [Hold] → HOLD → [Resume] → TO BILL
                           → [Close] → CLOSED → [Reopen] → TO BILL
                           → [Amend] → UNSAVED CHANGE → [Save/Discard] → TO BILL
                           → [Cancel (two-step)] → CANCELLED (terminal)
DRAFT → [Delete] → Removed
```

**Subfeatures:**
- DRAFT: all fields editable; Delete (simple confirm); Submit (runs validation)
- TO BILL: locked; actions = Hold, Close, Amend, Cancel, Convert to Invoice, Create Delivery Note
- HOLD: paused; Resume → TO BILL; can Create Delivery Note from HOLD; cannot Convert to Invoice
- CLOSED: completed; Reopen → TO BILL
- UNSAVED CHANGE: Amend mode active; Save applies changes; Discard reverts; both → TO BILL
- CANCELLED: terminal, no further actions; retained for audit trail
- Submitting SO changes linked Quotation status to ORDERED
- Cancel is two-step: Cancel → Go Back (no change) OR Confirm Cancel → CANCELLED

---

### F-06: Convert to Invoice

| Attribute | Detail |
|---|---|
| Description | Creates an Invoice (DRAFT) pre-filled with SO data; SO remains in TO BILL |
| Business Rule | Only available from TO BILL status (not HOLD); SO status does not change |
| Field Behaviour | All SO data carried to Invoice DRAFT; still editable before Invoice is submitted |
| Edge Cases | Cannot invoice from HOLD — must Resume first |
| Client Examples | All clients |

**Subfeatures:**
- Data carried: Biller info, Customer info, all Items (SKU/qty/unit price), Payment Terms, Charges, Discounts, Tax settings, SO reference number
- Invoice created as DRAFT — can be edited before submitting
- SO stays TO BILL even after Invoice created (supports partial invoicing)
- Multiple invoices can be created from one SO (partial billing supported)
- `[TO FILL]` — whether SO status changes when all items fully invoiced

---

### F-07: Generate PDF / Proforma Invoice

| Attribute | Detail |
|---|---|
| Description | Export SO as a PDF — specifically as a Proforma Invoice for cash-in-advance customers |
| Business Rule | Proforma Invoice is NOT a separate doctype — it is a PDF export of the Sales Order |
| Field Behaviour | Available from TO BILL status; no new record created; SO status unchanged |
| Edge Cases | Only use Proforma Invoice for cash-in-advance customers; skip for credit-term customers |
| Client Examples | [TO FILL] |

**Subfeatures:**
- Navigate to SO (TO BILL) → Generate PDF → select "Proforma Invoice"
- PDF downloads immediately
- No new document created in system
- `[TO FILL]` — other PDF export options available

---

### F-09: Sales Order List View

| Attribute | Detail |
|---|---|
| Description | Main list of all Sales Orders with status tabs, sortable columns, and pipeline views |
| Business Rule | Tab labels reflect computed pipeline states — not all match internal status names |
| Field Behaviour | Column headers clickable for sort; search box filters by SO content |
| Edge Cases | "Delivery Overdue" and "Stale Orders" tabs are computed views based on dates/activity |
| Client Examples | All clients |

**Subfeatures:**
- Table columns: Order ID, Customer, Credit Utilization, Status, Progress, Total, Created at, Updated at, Actions
- Status tabs: All Orders, Draft, In Progress, Completed, Pending Delivery, Pending Billing, Pending Payment, Delivery Overdue, Stale Orders, Closed, Cancelled
- "Progress" column — tracks fulfillment/billing progress on SO; `[TO FILL]` — exact metric (e.g., % invoiced, % delivered?)
- "In Progress" tab likely = TO BILL + HOLD combined (computed view)
- "Pending Delivery" = SO with no DN created yet; "Pending Billing" = no Invoice yet; "Pending Payment" = Invoice exists but unpaid
- "Delivery Overdue" = expected delivery date passed with no completed DN
- "Stale Orders" = `[TO FILL]` — definition (inactive for N days?)
- Credit Utilization column — customer's used credit vs limit

---

### F-08: Create Delivery Note

| Attribute | Detail |
|---|---|
| Description | Creates a Delivery Note (DRAFT) from this SO for goods fulfillment. Supports the **Blanket Order** pattern — one SO → multiple DNs with different qty, date, and address per DN |
| Business Rule | Available from TO BILL and HOLD; SO status unchanged when DN created |
| Field Behaviour | DN created in DRAFT with SO data pre-filled; qty per line item editable |
| Edge Cases | Can create DN from HOLD (unlike Invoice which requires Resume first) |
| Client Examples | [TO FILL] |

**Subfeatures:**
- Data carried: Biller info, Customer info, Items & Quantities, Delivery Address, SO reference
- Multiple DNs per SO supported — partial qty per DN, remainder stays on SO
- Creating DN does NOT change SO status

> Full Blanket Order spec (multiple DNs, flexible qty splits, different dates/addresses, chatbot splitting): see [[Blanket Order Spec]]

---

## 4. User Stories

### US-01: Create SO from Quotation
**As a** sales agent, **I can** convert an accepted Quotation into a Sales Order **so that** all customer-confirmed data carries forward automatically without re-entry.
**Priority:** High
**Dependencies:** Quotation in OPEN status

### US-02: Partial Invoicing
**As a** sales agent, **I can** create multiple invoices from a single Sales Order **so that** I can bill the customer in installments matching delivery batches.
**Priority:** High
**Dependencies:** Invoice module

### US-03: Amend Submitted SO
**As a** sales agent, **I can** amend a submitted Sales Order without cancelling it **so that** I can correct errors while preserving the order history.
**Priority:** High
**Dependencies:** SO in TO BILL status

### US-04: Hold and Resume
**As a** sales agent, **I can** put an SO on HOLD and resume it later **so that** I can pause processing for orders awaiting confirmation or payment without losing the order.
**Priority:** Medium
**Dependencies:** SO in TO BILL status

### US-05: Proforma Invoice
**As a** sales agent, **I can** generate a Proforma Invoice PDF from the Sales Order **so that** cash-in-advance customers can make payment before the final invoice is raised.
**Priority:** Medium
**Dependencies:** SO in TO BILL; customer on CIA payment terms

### US-06: Create Delivery Note from HOLD
**As a** logistics agent, **I can** create a Delivery Note from an SO in HOLD status **so that** I can begin fulfillment even when billing is paused.
**Priority:** Medium
**Dependencies:** SO in HOLD status

---

## 5. Acceptance Criteria

### AC-01 (US-01: Convert from Quotation)
- **Given** a Quotation in OPEN status
- **When** I click "Convert to Sales Order"
- **Then** a Sales Order in DRAFT is created with all biller info, customer info, items, payment terms, charges, discounts, and Quotation reference pre-filled

### AC-02 (US-02: Partial Invoicing)
- **Given** a Sales Order in TO BILL status
- **When** I click "Convert to Invoice" and create Invoice 1 for partial items
- **Then** the SO remains in TO BILL and I can create Invoice 2 for remaining items

### AC-03 (US-03: Amend SO)
- **Given** a Sales Order in TO BILL
- **When** I click Amend, edit an item quantity, and click Save Changes
- **Then** the SO returns to TO BILL with the updated quantity and no new document is created

### AC-04 (US-04: HOLD → cannot invoice)
- **Given** a Sales Order in HOLD status
- **When** I view available actions
- **Then** "Convert to Invoice" is NOT available; only "Resume" and "Create Delivery Note" are shown

### AC-05 (US-05: Proforma Invoice PDF)
- **Given** a Sales Order in TO BILL status
- **When** I click Generate PDF → Proforma Invoice
- **Then** a PDF downloads immediately and the SO status remains TO BILL with no new record created

---

## 6. Known Limitations

- [ ] Cannot convert to Invoice from HOLD status — Workaround: Resume → TO BILL first — Status: 🟡 Medium
- [ ] No bulk operations on SO list (submit, cancel, etc. in batch) — Workaround: process individually — Status: 🟡 Medium
- [ ] Currency fixed to MYR only — Workaround: none — Status: [TO FILL]
- [ ] [TO FILL] — any other SO-specific limitations

---

## 7. See Also

- [[Sales Order Workflow Guide]]
- [[Create Sales Order Exploration]]
- [[Sales Order Main Page Exploration]]
- [[Quote-to-Cash Flow]]
- [[Quotation Spec]]
- [[Invoice Spec]]
- [[Proforma Invoice]]
