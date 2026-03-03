---
owner: Gareth
status: draft
last_reviewed: 2026-03-03
---

# MAIA User Training — Slide Content Proposal

Full-day training slide content structured by module. Each topic lists **Key Points** (what appears on the slide) and **Support** (trainer elaboration / speaker notes). Trainer: Johnson Goh.

> [!NOTE] Vault Validation Status
> Content validated against MAIA product knowledge in the vault (2026-03-03).
> - ⚠️ From training brief — sourced from training PDF, not yet documented in vault

---

## Opening — Welcome & Warm-Up

**Key Points:**
- Welcome to CoreAI: MAIA User Training
- Trainer introduction: Johnson Goh
- Ice-breaker activity & participant introductions
- Agenda overview for the day

**Support:**
- Set expectations: hands-on, interactive, not just a lecture
- Confirm group has system access and demo credentials ready
- Demo environment: https://maia-oms-demo.vercel.app
- Quick poll: "Who has used an ERP or order management system before?"

---

## Module 1 — Introduction to MAIA & B2B Context
*9:00 – 10:30 AM (1.5 hrs)*

### MAIA's Role in Sales–Ops–Finance Workflows

**Key Points:**
- MAIA is an Order Management System (OMS) and ERP platform built for B2B companies
- Covers the full **Quote-to-Cash** cycle: Quotation → Sales Order → Invoice → Receipt
- Connects 3 core business teams: Sales, Finance, and Logistics — each in their own workspace
- Replaces manual handoffs between WhatsApp, spreadsheets, and accounting tools
- Single system of record — every document is linked and traceable end-to-end

**Support:**
- Target businesses: B2B manufacturers, distributors, wholesalers, service providers
- Before-state: order arrives on WhatsApp → manually typed into spreadsheet → emailed to finance → errors happen
- After-state: order captured → Quotation created → Sales Order confirmed → Invoice issued → payment recorded via Receipt — all in one place
- Key message: MAIA is the thread that connects Sales, Operations, and Finance
- Supporting documents: Credit Notes (returns/refunds), Debit Notes (additional charges), Delivery Notes (shipments), Payment Vouchers (refunds)

---

### Interface Basics & Architecture

**Key Points:**
- 3 workspaces: Sales (17 modules), Finance (16 modules), Logistics (23 modules) — each tailored to a specific team
- Role-based access: users see only what is relevant to their workspace
- Sales sidebar sections: Overview · Selling · Billing · Payments · Fulfillment · Customer Service
- Dashboard is the command centre — shows Total Sales metrics and recent activity

**Support:**
- Sidebar — **Overview**: Dashboard, My Tasks, Daily Digest
- Sidebar — **Selling**: Customers, Items, Quotations, Sales Orders
- Sidebar — **Billing**: Invoices, Credit Notes, Debit Notes
- Sidebar — **Payments**: Receipts, Vouchers
- Sidebar — **Fulfillment**: Delivery Notes, Return Notes
- Finance and Logistics workspaces have their own dashboards and module sections
- Key rule: once a document is submitted, it is locked — changes require amendment or cancellation

---

### Case Study — From WhatsApp Chaos to Automated Order-to-Cash

**Key Points:**
- The Problem: Orders on WhatsApp → manual copy-paste → missed items, wrong prices, delayed invoices
- The Turning Point: MAIA's OCR captures order details from WhatsApp images automatically ⚠️
- The Result: Full Quote-to-Cash cycle completed faster, fewer errors, real-time payment visibility

**Support:**
- Relatable scenario: a distributor receiving 50+ WhatsApp orders daily
- Before: 1 admin spending 3 hours on data entry, repeated re-keying errors
- After: order captured via OCR → Quotation → Sales Order → Invoice → Receipt — fully linked in MAIA ⚠️
- Prompt discussion: "Does this sound familiar to your business?"

---

### Group Activity — Map Your Current Process & Identify Pain Points

**Key Points:**
- In pairs/small groups: draw your current order-to-cash flow on paper
- Mark where delays, errors, or manual steps occur
- Share with the group: what is your biggest pain point today?

**Support:**
- Simple template: Receive Order → Create Quotation → Confirm Sales Order → Issue Invoice → Collect Payment
- Common pain points: double data entry, no visibility on outstanding payments, approval delays
- This activity builds personal motivation to learn MAIA

---

### Quick Quiz & Reflection

**Key Points:**
- 5 quick verbal questions on Module 1 content
- What is MAIA's core workflow sequence? What are the 3 workspaces? What does OCR do?
- Individual reflection: "What will MAIA change in MY daily work?"

**Support:**
- Keep light and verbal — check comprehension, not a formal test
- Reflection written on a card (revisit at end of day to measure learning)
- Expected answers: Quotation → Sales Order → Invoice → Receipt; Sales / Finance / Logistics

---

## Module 2 — Day-to-Day User Tasks
*10:30 AM – 12:30 PM (2 hrs)*

### Logging In, Navigation & Dashboard Overview

**Key Points:**
- Login: enter company email and assigned password → click Sign In
- Sidebar navigation groups: Overview / Selling / Billing / Payments / Fulfillment / Customer Service
- Dashboard shows: Total Sales metrics and Sales Reports
- Theme options available: System / Light / Dark

**Support:**
- Demo: show the login page — both fields must be filled before the Sign In button activates
- Highlight "Forgot Password" link on the login page
- Tip: bookmark the MAIA URL and set it as your browser homepage
- Sidebar — Selling section: Customers, Items, Quotations, Sales Orders
- Sidebar — Billing section: Invoices, Credit Notes, Debit Notes

---

### Capturing WhatsApp Orders & OCR Data Extraction

**Key Points:**
- WhatsApp orders arrive as images → upload or forward the image to MAIA ⚠️
- OCR engine reads item names, quantities, and prices automatically from the image ⚠️
- Review extracted data before confirming — fix any OCR read errors
- Corrected data becomes the input for creating a Quotation in MAIA

**Support:**
- OCR accuracy depends on image quality — clearer photos give better results ⚠️
- Key tip: always review OCR output, especially item codes and quantities
- Do NOT proceed with known OCR errors — fix first, then create the Quotation
- Common OCR mismatches: "1" vs "l", zero vs letter O, dashes in product codes

---

### Approving Orders, Generating Quotations & Invoices

**Key Points:**
- In MAIA, orders flow through 3 linked documents: Quotation → Sales Order → Invoice
- **Quotation:** Sales → Quotations → New → fill in Customer, Items, Payment Terms → Submit → status becomes `OPEN`
- **Sales Order:** From OPEN Quotation → "Convert to Sales Order" → review → Submit → Quotation becomes `ORDERED`; Sales Order becomes `TO BILL`
- **Invoice:** From TO BILL Sales Order → "Create Invoice" → review → Submit → Invoice becomes `UNPAID`

**Support:**
- Quotation sections to complete: Details (date), Biller Information, Customer Information, Items (at least 1 with quantity and price), Summary (auto-calculated), Payment Terms
- Converting Quotation to Sales Order automatically transfers all data — customer, items, pricing, payment terms
- Sales Order is locked once submitted (`TO BILL`) — use "Amend" to make changes, "Cancel" to void
- Creating Invoice from Sales Order pre-fills all SO data automatically
- MAIA supports multiple Invoices from one Sales Order (e.g., 100-unit SO → Invoice 30 units, then 45, then 25)

---

### Logging Partial/Full Payments

**Key Points:**
- Payments are recorded via the **Receipts** module: Sales → Receipts → New Receipt
- Select the Customer → select the Invoice(s) to pay against
- Enter: payment amount, payment method, payment date, reference number
- Payment methods: Cash, Bank Transfer, Cheque, Credit Card, Debit Card, Other
- Invoice updates to `PAID` when fully paid; remains `UNPAID` with outstanding balance for partial payments

**Support:**
- Partial payment: enter partial amount → Invoice stays `UNPAID` but shows outstanding balance
- Full payment: enter full amount → Invoice becomes `PAID`
- Multiple Receipts can be recorded against the same Invoice for staged payments
- Key tip: always enter the bank/transaction reference number for reconciliation
- Finance team can view all UNPAID Invoices from Billing section → Invoices

---

### Hands-on Exercise — Simulate Full Order Cycle

**Key Points:**
- Step 1: Create a new Quotation using provided sample customer and item data
- Step 2: Submit Quotation (`DRAFT → OPEN`) → generate Quotation PDF
- Step 3: Convert Quotation to Sales Order → Submit (Quotation: `ORDERED`; Sales Order: `TO BILL`)
- Step 4: Create Invoice from Sales Order → Submit (Invoice: `UNPAID`)
- Step 5: Record a partial payment via Receipts → verify Invoice remains `UNPAID` with outstanding balance
- Expected outcome: full document chain — Quotation (`ORDERED`) → Sales Order (`TO BILL`) → Invoice (`UNPAID`)

**Support:**
- Provide exercise credentials and sample data (customer name, 3 items with prices and quantities)
- Trainer circulates — assist with navigation, not with decision-making
- Debrief: "What part felt unfamiliar? What was easier than expected?"
- Ask participants: "Where does your real business fit into this flow?"

---

## Module 3 — Managing Data & Workflows
*1:30 – 3:00 PM (1.5 hrs)*

### Creating & Importing Clients and Items

**Key Points:**
- **Customers module** (Sales → Customers): add company name, contact person, email, credit limit, payment terms
- Bulk import Customers via CSV template
- **Items module** (Sales → Items): add SKU, product name, unit price, unit of measure, product category
- Bulk import Items via CSV for large catalogues

**Support:**
- Note: in MAIA, the module is called **Customers** (not "Clients") — found under Sales → Customers
- Customer key fields: company name, contact person, email, credit limit (optional), payment terms
- Item key fields: SKU, name, unit price, unit of measure, product category, stock information
- Items also appear in the Logistics workspace with stock and warehouse data
- Tip: clean your data in Excel before bulk importing — avoid special characters in SKU fields
- Customer records store full transaction history for account visibility

---

### Setting Approval Rules, User Roles & Responsibilities

**Key Points:**
- MAIA uses workspace-based access: Sales, Finance, Logistics — each team sees their relevant modules
- Each workspace has a dedicated dashboard and module set tailored to that team's function
- Management role has cross-workspace visibility for strategic oversight
- Best practice: assign each user to the workspace matching their job function ⚠️

**Support:**
- Sales workspace users: sales agents, account managers, customer service staff
- Finance workspace users: accountants, billing staff, accounts receivable team
- Logistics workspace users: warehouse managers, logistics coordinators, inventory controllers
- Management access: all 3 workspace dashboards plus consolidated KPI and performance reports
- Key governance principle: users should not create and approve their own transactions — maintain segregation of duties
- Specific role names and approval threshold settings are configured during MAIA implementation — confirm with IT/admin ⚠️

---

### ERP Integration Basics & Sync Management

**Key Points:**
- MAIA is built with integration-ready architecture
- Integration connects MAIA with your ERP system for items, customers, orders, and payments
- Sync log allows monitoring of integration status and errors ⚠️
- IT team configures the integration during initial setup — daily users monitor sync health ⚠️

**Support:**
- MAIA's integration-ready architecture is designed to connect with ERP systems
- Day-to-day: check sync log for any failed syncs before processing high-priority orders ⚠️
- Common sync issues: duplicate SKUs, missing required fields, data format mismatches ⚠️
- Key tip: if a sync fails, check the error log first — most issues are data format problems, not system failures
- Escalation path: data issue → fix in MAIA → re-sync | system issue → contact IT team ⚠️

---

### Hands-on Exercise — Build Mini Catalogue & Process Order

**Key Points:**
- Task 1: Add 3 new Items to the catalogue (use provided sample data)
- Task 2: Create one new Customer profile
- Task 3: Run the full order cycle with your new Customer and Items:
  - Create Quotation → Submit (`OPEN`) → Convert to Sales Order (`TO BILL`) → Create Invoice (`UNPAID`)
- Expected outcome: Invoice in `UNPAID` status, fully linked back to Quotation and Sales Order

**Support:**
- Sample data sheet provided (item names, prices, unit of measure, customer details)
- Trainer evaluates: were Items created with correct required fields? Is the full document chain complete?
- Discussion: "What would your real item catalogue look like? How many items does your business manage?"

---

## Module 4 — Reports, Troubleshooting & Best Practices
*3:30 – 5:00 PM (1.5 hrs)*

### Reading Dashboards & Exporting Reports

**Key Points:**
- **Sales Dashboard** (`/sales`): Total Sales metrics, pipeline health, revenue trends
- **Finance Dashboard** (`/finance`): Cash flow, receivables, payment collection status
- **Logistics Dashboard** (`/logistics`): Fulfillment rates, inventory levels, operational metrics
- **Daily Digest**: per-workspace daily summary of activities — Sales, Finance, Logistics
- Management view: cross-workspace consolidated dashboards for strategic oversight

**Support:**
- Sales key reports: pipeline value, conversion rates, revenue vs. targets, top customers
- Finance key reports: Accounts Receivable Aging (who owes, overdue by how long), payment collection rate, DSO
- Logistics key reports: fulfillment rates, on-time delivery rate, inventory accuracy
- Daily Digest URLs: `/sales/daily-digest`, `/finance/daily-digest`, `/logistics/daily-digest`
- Report export functionality — confirm availability in demo environment before training session ⚠️

---

### Monitoring KPIs — Cycle Time, Payment Speed, Error Rate

**Key Points:**
- **Order Cycle Time:** time from order received to Invoice issued — target: reduce vs. your manual baseline ⚠️
- **Payment Speed (DSO):** average days from Invoice issued to full payment received
- **Collection Rate:** % of Invoices paid within agreed credit terms
- **Error Rate:** % of orders requiring correction before processing ⚠️
- Track KPIs in weekly team check-ins to identify bottlenecks and improvement trends

**Support:**
- Management Features in MAIA monitor: DSO, Accounts Receivable Aging, Payment Collection Rate, Revenue Growth Rate
- Sales metrics: sales pipeline value, conversion rates, customer acquisition and retention
- Logistics metrics: order fulfillment rate, on-time delivery rate, inventory turnover, stock accuracy
- Red flags to watch: rising UNPAID invoice count, increasing cycle time, high order error frequency
- KPI benchmarks: establish your Week 1 baseline — measure improvement over 30/60/90 days ⚠️

---

### Fixing OCR/Data Mismatches & Sync Errors

**Key Points:**
- OCR mismatch: edit item details directly in the Quotation `DRAFT` before submitting
- Price mismatch: check Items catalogue (Sales → Items) → update item price if needed
- Document error after submission: use "Cancel" action with a reason — submitted documents cannot be deleted
- Sync error: check error log → identify the field → correct in MAIA → re-sync
- Escalation path: Data issue → fix yourself | System error → contact IT

**Support:**
- Rule: documents can only be deleted in `DRAFT` status — once submitted, cancel or amend instead
- Common OCR mismatches: "1" vs "l", zero vs letter O, dashes in product codes
- Do NOT submit an order with known errors — fix first, then proceed
- Sync error checklist: duplicate SKU? Missing required field? Invalid format? Connectivity issue?

---

### Embedding MAIA into SOPs for Continuous Improvement

**Key Points:**
- Write a simple SOP for your most common MAIA tasks (e.g., "How to process a WhatsApp order")
- Include: who does it, step-by-step actions in MAIA, what to check, what to do if something fails
- Review SOPs every quarter — update whenever MAIA is updated or your process changes
- Share SOPs with new team members as the onboarding reference

**Support:**
- SOP template structure: Purpose → Who → Steps (with MAIA actions) → Error handling → Owner
- Example SOP: "WhatsApp Order Capture" — OCR upload → review → create Quotation → submit ⚠️
- MAIA's audit trail supports SOP compliance — every action is logged with user and timestamp
- Key principle: if you're explaining a process verbally every time, write it down once

---

### Final Practical Test & Trainer Evaluation

**Key Points:**
- Complete a full order cycle from scratch: Quotation → Sales Order → Invoice → Receipt
- Trainer observes and evaluates: correct workflow steps, correct status transitions, confidence
- Test scenario uses fresh data not seen in earlier exercises
- Pass criteria: complete Quote-to-Cash cycle end-to-end without assistance

**Support:**
- Correct expected outcome: Quotation (`ORDERED`) → Sales Order (`TO BILL`) → Invoice (`PAID`) → Receipt (`SUBMITTED`)
- Trainer checklist: 10 checkpoints covering each document step and status transition
- Supportive environment — learning validation, not a high-stakes exam
- If stuck: trainer will guide direction but will not complete the task for the participant

---

### Feedback & Certificate Presentation

**Key Points:**
- Complete the training feedback form (5 minutes)
- Certificate of Completion awarded to all who pass the practical test
- Next steps: apply MAIA to your real workflow starting tomorrow
- Support channels: [support email / helpdesk / WhatsApp group]

**Support:**
- Feedback covers: content clarity, trainer delivery, platform usability, overall satisfaction
- Certificate signed by Johnson Goh and your company's designated MAIA admin
- Encourage participants to set one personal MAIA goal for Week 1
- Remind: demo environment remains available for practice → https://maia-oms-demo.vercel.app

---

## Validation Notes

### Corrections Made vs. Previous Draft

| Previous Version (Incorrect) | Corrected (Vault-aligned) |
|---|---|
| Status flow: `Draft → Pending → Approved / Rejected` | Quotation: `DRAFT → OPEN → ORDERED` · Sales Order: `DRAFT → TO BILL` · Invoice: `DRAFT → UNPAID → PAID` |
| "Convert Quotation → Invoice in one click" | Quotation → Sales Order → Invoice (two steps; cannot skip Sales Order) |
| `Unpaid → Partially Paid → Fully Paid` | Invoice stays `UNPAID` with partial payments; becomes `PAID` only when fully paid |
| "Open invoice → click Log Payment" | Sales → Receipts → New Receipt (payments recorded via Receipts module) |
| Navigation: "Orders, Clients, Items, Reports, Settings" | Sidebar sections: Overview / Selling / Billing / Payments / Fulfillment / Customer Service |
| Exercise Step 3: "Approve order and generate quotation" | Quotation → submit (`OPEN`) → convert to Sales Order → submit (`TO BILL`) → create Invoice |
| Exercise expected outcome: `"Approved"` status | Sales Order: `TO BILL` · Invoice: `UNPAID` |

### Not Yet in Vault — Pending Documentation ⚠️

- WhatsApp OCR order capture feature
- Specific ERP integration sync mechanics and supported ERP systems
- Specific user role names (MAIA KB confirms workspace-based access, not named role tiers)
- Approval threshold settings and rule-setting UI details
- Report export format and scheduling functionality

---

## See Also

- [[01 - MAIA Product/Overview/Product Overview]]
- [[01 - MAIA Product/Core Workflows/Quote-to-Cash Flow]]
- [[01 - MAIA Product/Overview/Document Status Flows]]
- [[01 - MAIA Product/Overview/Known Limitations]]
- [[01 - MAIA Product/UI Components/Sidebar/Sidebar Categories Quick Reference]]
- [[01 - MAIA Product/Management/Management Features]]
- [[06 - Glossary & Taxonomy/Glossary]]
