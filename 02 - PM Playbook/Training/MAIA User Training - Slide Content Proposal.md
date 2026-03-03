---
owner: Gareth
status: draft
last_reviewed: 2026-03-03
---

# MAIA User Training — Slide Content Proposal

Full-day training slide content structured by module. Each topic lists **Key Points** (what appears on the slide) and **Support** (trainer elaboration / speaker notes). Trainer: Johnson Goh.

---

## Opening — Welcome & Warm-Up

**Key Points:**
- Welcome to CoreAI: MAIA User Training
- Trainer introduction: Johnson Goh
- Ice-breaker activity & participant introductions
- Agenda overview for the day

**Support:**
- Set expectations: hands-on, interactive, not just a lecture
- Confirm group has system access / demo credentials ready
- Quick poll: "Who has used an ERP system before?"

---

## Module 1 — Introduction to MAIA & B2B Context
*9:00 – 10:30 AM (1.5 hrs)*

### MAIA's Role in Sales–Ops–Finance Workflows

**Key Points:**
- MAIA connects 3 core business functions: Sales → Operations → Finance
- Replaces manual handoffs between WhatsApp, spreadsheets, and accounting tools
- Single system of record for the full order lifecycle
- Reduces data re-entry, delays, and cross-team miscommunication

**Support:**
- Before-state: order arrives on WhatsApp → manually typed into spreadsheet → emailed to finance → errors happen
- After-state: order captured → auto-routed to approval → invoice generated → payment logged — all in one place
- Key message: MAIA is the thread that connects your team's work

---

### Interface Basics & Architecture

**Key Points:**
- 3 workspaces: Sales, Finance, Logistics
- Dashboard is the command centre — shows pending tasks, KPIs, recent activity
- Left navigation: Orders, Clients, Items, Reports, Settings
- Role-based access: each user sees only what's relevant to their job

**Support:**
- Walk through each workspace briefly — where salespeople live vs. finance team
- Highlight the notification bell and pending approvals badge
- Mention: no data is lost — everything is logged and searchable

---

### Case Study — From WhatsApp Chaos to Automated Order-to-Cash

**Key Points:**
- The Problem: Orders on WhatsApp → manual copy-paste → missed items, wrong prices, delayed invoices
- The Turning Point: MAIA's OCR captures order details from WhatsApp images automatically
- The Result: Faster order processing, fewer errors, real-time payment visibility

**Support:**
- Relatable scenario: a distributor receiving 50+ WhatsApp orders daily
- Before: 1 admin spending 3 hours on data entry, 2 errors per day
- After: same orders processed in 30 minutes, zero re-keying errors
- Prompt discussion: "Does this sound familiar to your business?"

---

### Group Activity — Map Your Current Process & Identify Pain Points

**Key Points:**
- In pairs/small groups: draw your current order-to-cash flow on paper
- Mark where delays, errors, or manual steps occur
- Share with the group: what is your biggest pain point today?

**Support:**
- Simple template: boxes for Receive Order → Approve → Invoice → Collect Payment
- Common pain points: double-entry, approval delays, payment tracking
- This activity builds personal motivation to learn MAIA

---

### Quick Quiz & Reflection

**Key Points:**
- 5 quick questions on Module 1 content
- What does MAIA stand for? What are the 3 workspaces? What is OCR?
- Individual reflection: "What will MAIA change in MY daily work?"

**Support:**
- Keep quiz light and verbal — not formal, just to check comprehension
- Reflection written on a card (revisit at end of day)

---

## Module 2 — Day-to-Day User Tasks
*10:30 AM – 12:30 PM (2 hrs)*

### Logging In, Navigation & Dashboard Overview

**Key Points:**
- Log in with your company email and assigned password
- Dashboard home: pending approvals, recent orders, unpaid invoices
- Top navigation: search, notifications, profile settings
- Quick actions shortcut: New Order, New Client, New Item

**Support:**
- Demo: show login page, highlight "Forgot Password" flow
- Point out the pending approvals counter — most important number to check daily
- Tip: bookmark the MAIA URL and set it as browser homepage

---

### Capturing WhatsApp Orders & OCR Data Extraction

**Key Points:**
- Screenshot or forward the customer's WhatsApp order image to MAIA
- OCR engine reads item names, quantities, and prices automatically
- Review the extracted data before confirming — fix any OCR errors
- Order is saved as a draft pending approval

**Support:**
- Demo: upload a sample WhatsApp order screenshot
- Good vs. blurry images — OCR accuracy depends on image clarity
- Key tip: always review OCR output, especially item codes and quantities

---

### Approving Orders, Generating Quotations & Invoices

**Key Points:**
- Approver receives a notification when an order is submitted
- Review order details → Approve or Reject with comment
- On approval: generate Quotation PDF (send to client for confirmation)
- On client confirmation: convert Quotation → Invoice in one click

**Support:**
- Approval status flow: Draft → Pending → Approved / Rejected
- Rejected orders can be edited and resubmitted — not lost
- Demo: generate a sample quotation, show client-facing PDF format
- Invoice auto-numbers and timestamps for audit trail

---

### Logging Partial/Full Payments

**Key Points:**
- Open the invoice → click "Log Payment"
- Select payment method: bank transfer, cash, cheque, etc.
- Enter amount: partial or full, with reference number
- Invoice status updates: Unpaid → Partially Paid → Fully Paid

**Support:**
- Demo: show outstanding balance recalculation after partial payment
- Key tip: always enter the bank reference number for reconciliation
- Finance team can filter all unpaid invoices from the Reports section

---

### Hands-on Exercise — Simulate Full Order Cycle

**Key Points:**
- Step 1: Capture a sample WhatsApp order using the provided image
- Step 2: Review OCR output, fix any errors, submit for approval
- Step 3: Approve the order and generate a quotation
- Step 4: Convert to invoice and log a partial payment
- Expected outcome: Invoice shows "Partially Paid" status

**Support:**
- Provide exercise credentials and sample order image
- Trainer circulates — assist with any navigation issues
- Debrief: "What part felt unfamiliar? What was easier than expected?"

---

## Module 3 — Managing Data & Workflows
*1:30 – 3:00 PM (1.5 hrs)*

### Creating & Importing Clients and Items

**Key Points:**
- Add clients manually: company name, contact person, email, billing address
- Bulk import clients via CSV template (download from Settings)
- Add items: SKU, description, unit price, unit of measure
- Import item catalogue via CSV for large product lists

**Support:**
- Required fields for client: name, email, credit limit (optional)
- Required fields for item: SKU, name, price — others optional
- Demo: manual add + show CSV template format
- Tip: clean your data in Excel before importing — no special characters

---

### Setting Approval Rules, User Roles & Responsibilities

**Key Points:**
- Roles: Admin, Sales, Finance, Viewer — each has defined permissions
- Approval rules: set order value thresholds (e.g., orders > RM5,000 need manager approval)
- Assign roles to team members from the Admin panel
- Role matrix: who can create, edit, approve, delete?

**Support:**
- Sales can create orders but cannot approve their own
- Approval threshold example: junior sales → up to RM2,000; senior → up to RM10,000
- Key governance principle: no one should approve their own orders (segregation of duties)

---

### ERP Integration Basics & Sync Management

**Key Points:**
- MAIA syncs with your ERP: items, clients, orders, and payments
- Sync frequency: automatic (daily) or manual trigger
- Sync log shows last sync time, items synced, and any errors
- Field mapping: MAIA fields → ERP fields (configured during setup)

**Support:**
- Demo: show sync status panel, how to trigger a manual sync
- Common sync errors: duplicate SKUs, missing required fields in ERP
- Key tip: check the error log before calling IT — most issues are data format mismatches
- IT team handles initial setup; daily users just need to monitor

---

### Hands-on Exercise — Build Mini Catalogue & Process Order

**Key Points:**
- Task 1: Add 3 new items to the catalogue (use provided sample data)
- Task 2: Create one new client profile
- Task 3: Create and process a new order using the items and client you created
- Expected outcome: Order in "Approved" status with a generated invoice

**Support:**
- Sample data sheet provided (item names, prices, client details)
- Trainer evaluates: were items created correctly? Is the order processed end-to-end?
- Discussion: "What would you do differently in your real catalogue setup?"

---

## Module 4 — Reports, Troubleshooting & Best Practices
*3:30 – 5:00 PM (1.5 hrs)*

### Reading Dashboards & Exporting Reports

**Key Points:**
- Dashboard panels: Sales Summary, Pending Approvals, Outstanding Payments, Top Clients
- Filter reports by: date range, client, product, status, salesperson
- Export options: PDF (for sharing) or Excel (for further analysis)
- Schedule automated reports to be emailed to managers

**Support:**
- Demo: filter last 30 days → export as PDF → show client-ready format
- Key report for sales manager: "Orders by Salesperson" — tracks individual performance
- Key report for finance: "Aging Receivables" — shows who owes money and for how long

---

### Monitoring KPIs — Cycle Time, Payment Speed, Error Rate

**Key Points:**
- **Order Cycle Time:** time from order received to invoice issued (target: < 2 hours)
- **Payment Speed:** average days from invoice to full payment (target: within credit terms)
- **Error Rate:** % of orders requiring correction after OCR capture (target: < 5%)
- Use KPIs in weekly team check-ins to spot trends

**Support:**
- Show where each KPI appears on the dashboard
- Benchmark: industry average for order processing is 24–48 hrs; MAIA targets < 2 hrs
- Red flag: rising error rate = team needs retraining or image quality is poor

---

### Fixing OCR/Data Mismatches & Sync Errors

**Key Points:**
- OCR mismatch: item name read incorrectly → edit directly in the order draft before submitting
- Price mismatch: check item catalogue price vs. quoted price — update catalogue if needed
- Sync error: check error log → identify the field → correct in MAIA → re-sync
- Escalation path: Data issue → fix yourself | System error → contact IT

**Support:**
- Common OCR mismatches: "1" vs "l", zero vs letter O, product codes with dashes
- Do NOT submit an order with known errors — always fix first
- Sync error checklist: duplicate entry? Missing required field? Invalid format? Connectivity issue?

---

### Embedding MAIA into SOPs for Continuous Improvement

**Key Points:**
- Write a simple SOP for your most common MAIA tasks (e.g., "How to process a WhatsApp order")
- Include: who does it, steps, what to check, what to do if something goes wrong
- Review SOPs every quarter — update when MAIA is updated or processes change
- Share SOPs with new team members as onboarding guide

**Support:**
- SOP template: Purpose → Who → Steps → Error handling → Owner
- Example: "WhatsApp Order Capture SOP" — 6 steps, with screenshots
- Key principle: if you're explaining it verbally every time, write it down once

---

### Final Practical Test & Trainer Evaluation

**Key Points:**
- Complete a full order cycle from scratch: capture → approve → invoice → payment
- Trainer observes and evaluates: accuracy, speed, and confidence
- Test scenario uses a fresh set of data (not from earlier exercises)
- Pass criteria: order processed correctly end-to-end without assistance

**Support:**
- Time limit: 20 minutes for the full cycle
- Trainer uses a checklist: 10 checkpoints, pass = 8/10 or above
- Supportive environment — this is a learning validation, not a high-stakes exam

---

### Feedback & Certificate Presentation

**Key Points:**
- Complete the training feedback form (5 minutes)
- Certificate of Completion awarded to all who pass the practical test
- Next steps: apply MAIA to your real workflow starting tomorrow
- Support channels: [support email / helpdesk / WhatsApp group]

**Support:**
- Feedback form covers: content clarity, trainer delivery, platform usability, overall satisfaction
- Certificates signed by Johnson Goh and your company's designated MAIA admin
- Encourage participants to set a personal goal for using MAIA in Week 1

---

## See Also

- [[01 - MAIA Product/Overview/Known Limitations]]
- [[02 - PM Playbook/Templates]]
- [[06 - Glossary & Taxonomy/Glossary]]
- [[02 - PM Playbook/Processes/Publish to Lark SOP]]
