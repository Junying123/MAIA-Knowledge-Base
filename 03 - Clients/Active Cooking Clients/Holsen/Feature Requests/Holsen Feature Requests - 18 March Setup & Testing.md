---
owner: Gareth
status: draft
last_reviewed: 2026-03-27
client: Holsen
---

# Feature Requests — Holsen <> MH MAIA Setup & Testing
Meeting Date: March 18, 2026
Attendees: Gareth, Chinzh (Holsen), Brendan (MindHive), Holsenlab

---

## 1. Customer-Specific Pricing Configuration

Description:
Different customers require different pricing. Fixed-price items must be tied to specific customers, while commodity items require volume-based pricing logic.

Details:
- Manual pricing configuration needed per item SKU
- Fixed price list to be provided per customer
- Commodity items: pricing is volatile, track by volume instead of sales value

### User Stories & Acceptance Criteria

---

#### 1. Configure Fixed Price per Customer per SKU

> **Role:** Admin *(configures pricing; sales users cannot override)*

**User Story**
1. As an Admin, I want to configure a fixed unit price per item SKU for each customer, so every sales order generated for that customer automatically uses the correct pre-agreed pricing without manual override.
   1. Scenario: Setting up a fixed price list for a customer
      1. Admin opens the customer record in MAIA
      2. Navigates to the pricing configuration section
      3. Enters or uploads the fixed price for each applicable SKU
      4. System saves the price and applies it to all future orders for that customer

**Acceptance Criteria**
1. Admin can configure a fixed unit price per SKU per customer
2. Fixed price list can be uploaded in bulk (e.g. via Excel/CSV import)
3. When a sales order is created for a customer, the system automatically applies that customer's configured price for applicable SKUs
4. Price configuration is restricted to Admin role — sales users cannot override pricing
5. Fixed price list format and data to be provided by Holsen (Chinzh) by Friday, Mar 21

**Dependencies**
- Depends on: Fixed price list data from Holsen (Chinzh) — due Mar 21
- Blocks: Feature 7 (Chatbot SO generation requires pricing to be configured first)

**Definition of Done**
- [ ] Fixed price field configurable per SKU per customer
- [ ] Bulk upload via Excel/CSV tested and working
- [ ] Pricing auto-applied on SO creation for configured customers
- [ ] Admin-only access enforced; sales users cannot edit pricing
- [ ] UAT signed off by Holsen

**Priority & Sizing**
**Priority:** 🟡 High
**Effort Estimate:** M
**Target Release:** Go-live Mar 31, 2026

---

#### 2. Volume Tracking for Commodity Items

> **Role:** Admin *(configures commodity flag per SKU)*

**User Story**
1. As an Admin, I want to flag commodity items to be tracked by volume instead of sales value, so pricing volatility does not distort operational reporting for these products.
   1. Scenario: Reviewing commodity item metrics
      1. Admin marks a SKU as a commodity item in the product settings
      2. Dashboard displays volume (qty) figures for that SKU instead of sales value
      3. Sales value remains accessible but is secondary for commodity items

**Acceptance Criteria**
1. Each SKU has a configurable "commodity item" flag (toggle)
2. Commodity-flagged items are tracked and reported by volume (qty) across all relevant dashboard views
3. Non-commodity items continue to display sales value by default
4. Commodity classification feeds into volume-based dashboard metrics (see Feature 3)

**Dependencies**
- Depends on: Product/SKU list from Holsen to identify which items are commodity
- Blocks: Feature 3 (volume dashboard metrics depend on this flag)

**Definition of Done**
- [ ] Commodity flag field exists on each SKU, toggleable by Admin
- [ ] Dashboard switches to volume display for commodity-flagged SKUs
- [ ] Non-commodity SKUs unaffected and still show sales value
- [ ] UAT signed off by Holsen

**Priority & Sizing**
**Priority:** 🟢 Medium
**Effort Estimate:** S
**Target Release:** Go-live Mar 31, 2026

---

## 2. Role-Based Dashboard Access (User Permissions)

Description:
Different users (sales team) should have different levels of customer visibility based on their designation.

Details:
- S1, S2 — full customer access (all customers visible)
- S3 — limited to a specific customer subset
- S4 — limited to a different customer subset
- Email address required per user for account binding
- Admin access for MindHive team to monitor system usage

### User Stories & Acceptance Criteria

---

#### 1. Assign Permission Levels to Sales Users

> **Role:** Admin *(creates and manages user accounts)*

**User Story**
1. As an Admin, I want to assign a permission level (S1–S4) to each sales user account, so each user can only see the customers they are authorised to manage.
   1. Scenario: Configuring a new S3 sales user
      1. Admin creates or edits a sales user account in MAIA
      2. Sets the role to S3 and binds the user's email address to the account
      3. System restricts that user's customer view to the S3-assigned customer subset only

**Acceptance Criteria**
1. Four permission levels are supported: S1 and S2 (full access), S3 and S4 (customer subset only)
2. Each user account is bound to an email address
3. Admin can assign and update a user's permission level at any time
4. Customer-to-designation mapping (S3, S4 customer lists) to be provided by Holsen (Chinzh) by Friday, Mar 21
5. Email addresses for account binding to be confirmed by Gareth before UAT

**Dependencies**
- Depends on: Customer list with S1–S4 designations from Holsen (Chinzh) — due Mar 21
- Depends on: Email addresses for all sales users from Gareth — before UAT
- Blocks: Story 2 (customer visibility cannot be tested until accounts are configured)
- Blocks: Feature 7 (chatbot permission enforcement depends on this)

**Definition of Done**
- [ ] All four permission levels (S1–S4) implemented and assignable
- [ ] User account bound to email address on creation
- [ ] Admin can update permission level at any time
- [ ] MindHive admin accounts have full monitoring access
- [ ] UAT signed off by Holsen

**Priority & Sizing**
**Priority:** 🔴 Critical
**Effort Estimate:** M
**Target Release:** Go-live Mar 31, 2026

---

#### 2. Customer Visibility Based on Designation

> **Roles:**
> - **S1 / S2 Sales user** *(full customer portfolio access)*
> - **S3 / S4 Sales user** *(restricted to designated customer subset)*

**User Story**
1. As a Sales user with an S1 or S2 designation, I want to view all customers on my dashboard, so I can manage the full client portfolio without restriction.
   1. Scenario: S1/S2 user opens the customer list
      1. User logs in with S1 or S2 credentials
      2. System displays all customers with no filtering applied

2. As a Sales user with an S3 or S4 designation, I want to view only my assigned customer subset on the dashboard, so I focus on my designated accounts and cannot access customers outside my scope.
   1. Scenario: S3 user opens the customer list
      1. User logs in with S3 credentials
      2. System displays only the S3-designated customer subset
      3. All other customers are hidden and inaccessible

**Acceptance Criteria**
1. S1 and S2 users see all customers across all dashboard views with no restrictions
2. S3 and S4 users see only their designated customer subset — all other customers are hidden
3. Access restrictions apply consistently across all modules: quotation, sales order, invoice, reporting
4. MindHive admin accounts have full system monitoring access without a sales designation

**Dependencies**
- Depends on: Story 1 (permission levels must be assigned before visibility can be tested)
- Depends on: Customer-to-designation mapping from Holsen

**Definition of Done**
- [ ] S1/S2 users see all customers with no filtering
- [ ] S3/S4 users see only their designated customer subset
- [ ] Restrictions enforced across quotation, SO, invoice, and reporting modules
- [ ] UAT signed off by Holsen with correct customer subsets confirmed

**Priority & Sizing**
**Priority:** 🔴 Critical
**Effort Estimate:** M
**Target Release:** Go-live Mar 31, 2026

---

## 3. Volume-Based Dashboard Metrics

Description:
Replace sales value metrics with volume-based metrics across the dashboard, particularly for commodity items where price fluctuates.

Requested Changes:
- Annual Sales → Annual Volume
- Item-Wise Annual Sales → Item-Wise Annual Volume
- Monthly volume breakdown by product (e.g. nickel, copper)
- Customer-based filtering on volume reports

### User Stories & Acceptance Criteria

---

#### 1. Replace Sales Value with Volume Metrics on Dashboard

> **Role:** Sales Manager / Admin *(views dashboard metrics)*

**User Story**
1. As a Sales Manager, I want the dashboard to display annual volume instead of annual sales value, so I can accurately track commodity item performance regardless of price fluctuations.
   1. Scenario: Reviewing annual performance for commodity items
      1. Sales Manager opens the dashboard
      2. Navigates to the annual metrics view
      3. System displays volume (qty) figures in place of sales value for commodity items

**Acceptance Criteria**
1. "Annual Sales" metric on the dashboard is replaced with "Annual Volume" (qty-based)
2. "Item-Wise Annual Sales" is replaced with "Item-Wise Annual Volume"
3. Volume metrics apply to commodity-classified items; non-commodity items may retain sales value display
4. Volume classification is driven by the commodity flag on the SKU (see Feature 1)

**Dependencies**
- Depends on: Feature 1 Story 2 (commodity flag must exist on SKUs before volume metrics can be driven correctly)

**Definition of Done**
- [ ] "Annual Sales" relabelled to "Annual Volume" on dashboard
- [ ] "Item-Wise Annual Sales" relabelled to "Item-Wise Annual Volume"
- [ ] Volume figures display correctly for commodity-flagged SKUs
- [ ] Non-commodity SKUs unaffected
- [ ] UAT signed off by Holsen

**Priority & Sizing**
**Priority:** 🟢 Medium
**Effort Estimate:** S
**Target Release:** Go-live Mar 31, 2026

---

#### 2. Monthly Volume Breakdown with Customer Filter

> **Role:** Sales Manager / Admin *(reviews monthly volume reports)*

**User Story**
1. As a Sales Manager, I want a monthly volume breakdown by product category and the ability to filter by customer, so I can drill into specific account or product performance at any time.
   1. Scenario: Reviewing monthly nickel volume for a specific customer
      1. Sales Manager opens the volume breakdown report
      2. Selects product category (e.g. nickel) and applies customer filter
      3. System displays monthly volume figures for that product filtered to the selected customer

**Acceptance Criteria**
1. Monthly volume breakdown is available per product category (e.g. nickel, copper)
2. All volume views support customer-based filtering
3. Filters include: date range (monthly / custom), product category, customer
4. Results are exportable to CSV or PDF

**Dependencies**
- Depends on: Story 1 (volume metrics must be in place first)
- Depends on: Feature 1 Story 2 (commodity classification drives which items appear in volume views)

**Definition of Done**
- [ ] Monthly breakdown available per product category
- [ ] Customer filter working on all volume views
- [ ] Date range and product category filters working
- [ ] Export to CSV or PDF functional
- [ ] UAT signed off by Holsen

**Priority & Sizing**
**Priority:** 🟢 Medium
**Effort Estimate:** S
**Target Release:** Go-live Mar 31, 2026

---

## 4. Product Classification System (Two-Tier)

Description:
Products need to be classified across two dimensions for compliance and operational purposes.

Details:
- Tier 1: Poison / Non-Poison
- Tier 2: Product type (e.g. cleaner, cyanide, etc.)
- Customer usage classification:
  - For electroplating use
  - For trading use
- Remark field for special customer requests
- Switch From / To position support

### User Stories & Acceptance Criteria

---

#### 1. Configure Two-Tier Product Classification per SKU

> **Role:** Admin *(configures product classification on each SKU)*

**User Story**
1. As an Admin, I want to classify each product SKU with a Tier 1 (Poison/Non-Poison) and Tier 2 (product type) attribute, so the system can automatically trigger the correct compliance workflows and documentation for each order.
   1. Scenario: Classifying a new product SKU
      1. Admin opens the product/SKU record in MAIA
      2. Sets Tier 1: Poison or Non-Poison
      3. Sets Tier 2: product type (e.g. cleaner, cyanide)
      4. System stores the classification and applies it to all orders containing that SKU

**Acceptance Criteria**
1. Each SKU has a Tier 1 classification field: Poison or Non-Poison
2. Each SKU has a Tier 2 classification field for product type (e.g. cleaner, cyanide) — full type list to be confirmed with Holsen
3. Classification is set and editable by Admin only
4. Classification is applied consistently across all order types (quotation, sales order, invoice)
5. Poison classification triggers PSO form generation (see Feature 5)

**Dependencies**
- Depends on: Full product type list (Tier 2 values) to be confirmed by Holsen before UAT
- Blocks: Feature 5 (PSO form generation depends on Tier 1 poison classification)
- Blocks: Feature 7 Story 3 (chatbot PSO check depends on this classification)

**Definition of Done**
- [ ] Tier 1 (Poison/Non-Poison) field exists and configurable on each SKU
- [ ] Tier 2 (product type) field exists with confirmed type list from Holsen
- [ ] Classification restricted to Admin role
- [ ] Classification applied on quotation, SO, and invoice
- [ ] Poison flag correctly triggers PSO form (verified with Feature 5)
- [ ] UAT signed off by Holsen

**Priority & Sizing**
**Priority:** 🟡 High
**Effort Estimate:** M
**Target Release:** Go-live Mar 31, 2026

---

#### 2. Customer Usage Classification and Remark Field

> **Role:** Admin *(configures customer-level usage classification per product)*
> **Role:** Sales user *(adds order-level remarks)*

**User Story**
1. As an Admin, I want to record each customer's usage classification per product (electroplating or trading), so Holsen meets its poison compliance obligations for every transaction.
   1. Scenario: Recording usage classification for a customer
      1. Admin opens the customer-product configuration in MAIA
      2. Sets the usage classification for a poison-classified SKU: "For electroplating use" or "For trading use"
      3. System records the classification and includes it on generated PSO forms

2. As a Sales user, I want to add a remark to an order for special customer requests, so non-standard instructions are captured and visible to logistics.

**Acceptance Criteria**
1. Customer usage classification per product is configurable: "For electroplating use" or "For trading use"
2. Usage classification is displayed on the PSO form and order record
3. A free-text remark field is available on the sales order for special customer requests
4. Switch From / To position support is included for position-based product transitions
5. PSO customer list with usage classifications to be provided by Holsen before UAT

**Dependencies**
- Depends on: PSO customer list with usage classifications from Holsen — before UAT
- Depends on: Story 1 (Tier 1 poison classification must exist before usage classification is meaningful)
- Blocks: Feature 5 Story 2 (PSO form must display the usage classification set here)

**Definition of Done**
- [ ] Usage classification field configurable per customer per product (electroplating / trading)
- [ ] Usage classification appears on generated PSO form
- [ ] Free-text remark field available on sales order
- [ ] Switch From / To position field supported
- [ ] UAT signed off by Holsen

**Priority & Sizing**
**Priority:** 🟡 High
**Effort Estimate:** S
**Target Release:** Go-live Mar 31, 2026

---

## 5. PSO (Poison Sign-Off) Form Generation

Description:
MAIA must generate PSO forms for applicable poison-classified products as part of the sales order workflow.

Details:
- Auto-generate PSO form when a poison-classified item is ordered
- Support for pre-digital format
- Chop (stamp) and signature support required by Holsen
- PSO customer list to be provided with usage classification

### User Stories & Acceptance Criteria

---

#### 1. Auto-Generate PSO Form on Poison Item Order

> **Role:** Sales user *(creates the sales order)*

**User Story**
1. As a Sales user, I want MAIA to automatically generate a PSO form when a poison-classified item is included in a sales order, so I don't miss the compliance requirement for restricted substances.
   1. Scenario: Sales order containing a poison-classified SKU
      1. Sales user creates a sales order with one or more poison-classified items
      2. System detects the poison classification on the SKU(s)
      3. System auto-generates a PSO form and attaches it to the order
      4. PSO form is available for printing, including chop and signature fields

**Acceptance Criteria**
1. System auto-generates a PSO form whenever a poison-classified item is added to a sales order
2. PSO form is linked to the sales order and retrievable from the order record
3. PSO form generation is triggered automatically — no manual action required from the sales user
4. If no poison-classified items are in the order, no PSO form is generated

**Dependencies**
- Depends on: Feature 4 Story 1 (Tier 1 poison classification must be set on SKUs)
- Blocks: Feature 7 Story 3 (chatbot PSO check relies on this auto-generation being in place)

**Definition of Done**
- [ ] PSO form auto-generated when any poison-classified SKU is added to a SO
- [ ] PSO form linked to the SO and retrievable from the order record
- [ ] No PSO form generated when no poison items are present
- [ ] No manual trigger required from sales user
- [ ] UAT signed off by Holsen

**Priority & Sizing**
**Priority:** 🔴 Critical
**Effort Estimate:** M
**Target Release:** Go-live Mar 31, 2026

---

#### 2. PSO Form Format — Pre-Digital with Stamp and Signature

> **Role:** Admin / Logistics *(reviews and signs off PSO form before dispatch)*

**User Story**
1. As an Admin, I want the PSO form to follow Holsen's pre-digital format and include fields for chop (stamp) and signature, so the printed form meets Holsen's physical compliance requirements.
   1. Scenario: Printing a PSO form for a poison order
      1. Admin opens the PSO form attached to a sales order
      2. Reviews the form details: customer name, item/SKU, quantity, usage classification, date
      3. Prints the form with designated chop and signature areas

**Acceptance Criteria**
1. PSO form layout matches Holsen's pre-digital format — template to be confirmed from PSO customer list provided by Holsen
2. Form includes: customer name, item/SKU, quantity, usage classification (electroplating / trading), order date
3. Printed PSO form includes designated areas for chop (stamp) and authorised signature
4. PSO customer list with usage classifications to be provided by Holsen before UAT

**Dependencies**
- Depends on: PSO form template from Holsen — before UAT
- Depends on: Feature 4 Story 2 (usage classification must be set to populate the form correctly)

**Definition of Done**
- [ ] PSO form layout matches Holsen's provided pre-digital template
- [ ] All required fields present: customer name, SKU, qty, usage classification, date
- [ ] Chop and signature areas included on printed output
- [ ] UAT signed off by Holsen with physical print verified

**Priority & Sizing**
**Priority:** 🔴 Critical
**Effort Estimate:** S
**Target Release:** Go-live Mar 31, 2026

---

## 6. Standard Packing Size per Item SKU

Description:
Each item SKU needs a standard size/packing unit configured in the system to ensure consistency across orders, inventory, and reporting.

Details:
- Standard size field required per SKU
- Must handle products with multiple UOM options (e.g. kg, litre, drum)
- SKU differentiation logic needed for multi-UOM products

### User Stories & Acceptance Criteria

---

#### 1. Configure Standard Packing Size per SKU

> **Role:** Admin *(configures standard packing size on the product/SKU record)*

**User Story**
1. As an Admin, I want to configure a standard packing size for each item SKU, so the system and chatbot default to the correct unit when generating a sales order.
   1. Scenario: Sales order generated for a product with a configured packing size
      1. Admin has set the standard packing size for a SKU (e.g. 25 kg drum)
      2. Sales user creates a sales order for that product
      3. System defaults to the standard packing size (e.g. 25 kg) unless the user specifies a different UOM

**Acceptance Criteria**
1. Each SKU has a "standard packing size" field configurable by Admin
2. Standard packing size field supports multiple UOM types (kg, litre, drum)
3. When generating a sales order or quotation, the system defaults to the SKU's configured standard packing size
4. Updated inventory with standard packing sizes to be confirmed by Gareth before UAT

**Dependencies**
- Depends on: Updated inventory with standard packing sizes from Gareth — before UAT
- Blocks: Feature 7 Story 1 (chatbot defaults to packing size configured here)

**Definition of Done**
- [ ] Standard packing size field exists per SKU, configurable by Admin
- [ ] Supports kg, litre, drum UOM types
- [ ] System defaults to configured packing size on SO/quotation creation
- [ ] UAT signed off by Holsen

**Priority & Sizing**
**Priority:** 🟡 High
**Effort Estimate:** S
**Target Release:** Go-live Mar 31, 2026

---

#### 2. SKU Differentiation for Multi-UOM Products

> **Role:** Admin *(creates and maintains distinct SKUs per pack size)*

**User Story**
1. As an Admin, I want products sold in multiple pack sizes to have separate, distinct SKUs, so the system can differentiate between e.g. 25 kg and 200 kg packs of the same product without ambiguity.
   1. Scenario: A product available in both 25 kg and 200 kg pack sizes
      1. Admin creates two separate SKUs: Product-25kg and Product-200kg
      2. Each SKU has its own standard packing size configured
      3. When a sales order or chatbot query references that product, the correct SKU is identified based on the requested quantity or pack size

**Acceptance Criteria**
1. Products sold in multiple pack sizes have separate SKUs per pack size (e.g. Product-25kg, Product-200kg)
2. Each SKU is independently named and distinguishable in search and order entry
3. Chatbot respects the configured standard packing size when generating draft orders (see Feature 7)
4. Overlap resolution logic (e.g. when a customer orders a qty that maps to either pack size) is handled by chatbot defaulting to standard packing size — final verification sits with the sales user before order submission

**Dependencies**
- Depends on: Inventory data with distinct SKUs per pack size from Gareth — before UAT
- Depends on: Story 1 (standard packing size field must exist first)
- Blocks: Feature 7 Story 1 (chatbot SKU resolution depends on distinct SKUs being set up)

**Definition of Done**
- [ ] Separate SKUs created per pack size for all applicable products
- [ ] Each SKU independently searchable and selectable in order entry
- [ ] Chatbot defaults to correct SKU based on standard packing size
- [ ] Sales user review step in place before order submission
- [ ] UAT signed off by Holsen

**Priority & Sizing**
**Priority:** 🟡 High
**Effort Estimate:** M
**Target Release:** Go-live Mar 31, 2026

---

## 7. Chatbot — Sales Order Generation

Description:
The MAIA chatbot should be capable of generating sales orders on behalf of the sales team.

Details:
- Must respect customer-specific pricing rules
- Must respect user access permissions (S1–S4)
- Must handle PSO item checks before order generation
- Needs testing across core scenarios before UAT

### User Stories & Acceptance Criteria

---

#### 1. Generate Sales Order via Chatbot

> **Role:** Sales user S1–S4 *(uses chatbot to draft and submit orders)*

**User Story**
1. As a Sales user, I want to generate a sales order through the MAIA chatbot using a natural language prompt, so I can create orders faster without manually navigating the system.
   1. Scenario: Sales user prompts chatbot for an order
      1. Sales user opens the MAIA chatbot
      2. Describes the order: customer name, items, and quantity
      3. Chatbot identifies the customer, applies their configured fixed pricing, checks standard packing size, and flags any PSO requirements
      4. Chatbot generates a draft sales order for the sales user to review before confirming submission

**Acceptance Criteria**
1. Chatbot can generate a draft sales order from a natural language prompt
2. Chatbot applies the customer's configured fixed pricing to the order automatically
3. Chatbot defaults to the configured standard packing size per SKU
4. Generated order is presented as a draft for the sales user to review and confirm before submission — chatbot does not auto-submit
5. Core scenarios must be tested and validated before UAT begins (week of March 24, 2026)

**Dependencies**
- Depends on: Feature 1 Story 1 (customer pricing must be configured)
- Depends on: Feature 6 Stories 1 & 2 (standard packing size and distinct SKUs must be set up)
- Depends on: Feature 2 Story 1 (user permission levels must be assigned)

**Definition of Done**
- [ ] Chatbot generates a draft SO from a natural language prompt
- [ ] Customer pricing auto-applied on draft
- [ ] Standard packing size defaulted correctly per SKU
- [ ] Draft presented for review before submission — no auto-submit
- [ ] Core scenarios tested and validated before UAT week (March 24, 2026)
- [ ] UAT signed off by Holsen

**Priority & Sizing**
**Priority:** 🟡 High
**Effort Estimate:** L
**Target Release:** Go-live Mar 31, 2026

---

#### 2. Chatbot Respects User Access Permissions

> **Role:** Sales user S3 / S4 *(restricted scope)*

**User Story**
1. As a Sales user with an S3 or S4 designation, I want the chatbot to enforce my access permissions, so I cannot create orders for customers outside my designated scope.
   1. Scenario: S3 user attempts to create an order for an out-of-scope customer
      1. S3 user prompts the chatbot to create an order for a customer not in their designated subset
      2. Chatbot rejects the request and informs the user they do not have access to that customer

**Acceptance Criteria**
1. Chatbot enforces user access permissions (S1–S4) — S3/S4 users cannot create orders for out-of-scope customers
2. Chatbot returns a clear message if the requested customer is outside the user's permitted scope

**Dependencies**
- Depends on: Feature 2 Stories 1 & 2 (permission levels and customer visibility must be in place)

**Definition of Done**
- [ ] Chatbot blocks S3/S4 users from creating orders for out-of-scope customers
- [ ] Clear error message returned when access is denied
- [ ] S1/S2 users unaffected — full customer access via chatbot
- [ ] UAT signed off by Holsen

**Priority & Sizing**
**Priority:** 🔴 Critical
**Effort Estimate:** S
**Target Release:** Go-live Mar 31, 2026

---

#### 3. Chatbot PSO Check Before Order Generation

> **Role:** Sales user *(creates order via chatbot)*

**User Story**
1. As a Sales user, I want the chatbot to alert me if a PSO form is required for any item in my order, so I don't accidentally submit a non-compliant order containing poison-classified products.
   1. Scenario: Chatbot generates an order containing a poison-classified SKU
      1. Sales user prompts chatbot to create an order that includes a poison-classified item
      2. Chatbot detects the poison classification
      3. Chatbot flags the PSO requirement in the draft order review
      4. PSO form is auto-generated and linked to the order before submission

**Acceptance Criteria**
1. Chatbot checks poison classification for all items in a requested order before generating the draft
2. If a poison-classified item is included, chatbot flags the PSO requirement in the draft review step
3. PSO form is auto-generated and linked to the order (consistent with Feature 5 behaviour)
4. Chatbot does not block the order — it surfaces the PSO requirement for the sales user to acknowledge before confirming

**Dependencies**
- Depends on: Feature 4 Story 1 (poison classification must be set on SKUs)
- Depends on: Feature 5 Story 1 (PSO auto-generation must be in place)

**Definition of Done**
- [ ] Chatbot checks poison classification for all items before generating draft
- [ ] PSO requirement flagged clearly in draft review when applicable
- [ ] PSO form auto-generated and linked to order
- [ ] User acknowledgement step present before submission
- [ ] UAT signed off by Holsen

**Priority & Sizing**
**Priority:** 🔴 Critical
**Effort Estimate:** S
**Target Release:** Go-live Mar 31, 2026

---

## Notes & Dependencies

| Item | Owner | Deadline |
|---|---|---|
| Fixed price list (all items + customers) | Holsen (Chinzh) | Friday, Mar 21 |
| Customer list with S1–S4 designations | Holsen (Chinzh) | Friday, Mar 21 |
| Email addresses for account binding | Gareth | Before UAT |
| PSO customer list with usage classification | Holsen | Before UAT |
| Updated inventory with standard packing sizes | Gareth | Before UAT |
| UAT format + price data ingestion | Brendan | Friday, Mar 21 |

UAT Start: Week of March 24, 2026
Target Go-Live: End of March 2026
Transition: Parallel running with UBS system during cutover period
