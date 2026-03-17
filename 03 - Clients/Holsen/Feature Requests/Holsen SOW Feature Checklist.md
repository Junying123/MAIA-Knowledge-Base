---
owner: Gareth
status: draft
last_reviewed: 2026-03-17
client: Holsen
---

# Holsen SOW — Feature Build Checklist

Use this checklist to track which SOW features have been built, tested, and validated in MAIA for Holsen. Update status as features are confirmed during UAT.

**Status key:**
- `[ ]` Not started / unknown
- `[x]` Built and confirmed
- `[~]` Partially built / in progress
- `[!]` Blocked / not building (post-go-live or out of scope)

---

## Phase A1 — Core MAIA

### 1. Sales Coordinator Assistant (Chatbot)

**Platform**
- [ ] WhatsApp chatbot (MAIA Sales Agent Chatbot)
- [ ] Email forwarding (customer POs forwarded to MAIA)

**Omni-Channel Input (IDP)**
- [x] Text messages — forwarded from client chats
- [x] Images — photos of handwritten notes or physical POs
- [x] PDFs — formal customer Purchase Orders

**Data Extraction**
- [x] Customer Name extraction
- [x] SKUs and Quantities extraction (e.g., "10 drums of Copper Sulfate")
- [ ] Delivery Date extraction (if mentioned)

**Dynamic Pricing, Quotation & SO Generation**
- [x] Manual price entry prompt (bot prompts agent to confirm/input price)
- [x] Minimum price safeguards enforced
- [x] Quotation-to-SO logic persistence (quotation logic carries over on conversion)

**Stock Availability Display**
- [x] Total Available Quantity shown to agent
- [ ] C3 stock hidden from non-C3 customers (shows "0 Stock Available")

**Product Attribute Tagging (SKU Level)**
- [ ] Trading — "Pick-and-Pack" signal to warehouse
- [ ] Manufacturing — "Check with Production" visual cue
- [ ] Poison / Hazardous Goods — **"POISON FORM REQUIRED"** critical alert
- [ ] Commodity — manual price verification prompt to sales agent

**Customer Requirements Tagging**
- [ ] COA requirement displayed on DO (Standard vs. Detailed)
- [ ] Brand strictness displayed ("NO SUBSTITUTION" / "PREFERRED BRAND: X")
- [ ] Documentation & Copies instructions displayed (e.g., "Needs 2 Invoice Copies")

**Sales Order Creation**
- [ ] SO creation via WhatsApp (natural language, no rigid keywords)
- [ ] SO creation via email forwarding

**Output Document Generation**
- [x] Quotation
- [x] Sales Order
- [x] Proforma Invoice
- [x] Invoice
- [x] Credit Note / Debit Note

**Daily Digests — Sales**
- [ ] Unclosed Sales Orders digest (sent to Sales Representative)
- [ ] Fulfillment Method declaration (delivery or pickup)

---

### 2. Sales Order Output (UBS CSV Export)

- [x] CSV generated with customer name, address, delivery type
- [x] CSV includes all SKUs and quantities
- [ ] CSV includes COA/label/brand requirements, delivery date, PO notes, order remarks

---

### 3. Supply Chain Agent Assistant (Chatbot)

**Platform**
- [ ] WhatsApp chatbot (Logistics)

**DO Creation**
- [ ] Delivery Order (DO) creation via WhatsApp (natural language)

**Output Document Generation**
- [x] Delivery Order (DO)
- [x] Picking List

**Daily Digests — Logistics**
- [x] Delivery Delays digest (DO not generated after X days from invoice)
- [ ] Expiring Items alert (products approaching expiry date)

**Supply Chain Notification Reminders**
- [x] Out of Stock alert (sent to Logistics Rep & Sales Rep)
- [x] Low Stock alert (below configured minimum threshold)

---

### 4. User Workspaces

**General**
- [x] Desktop Web login for all users

**Sales Agent Workspace**
- [x] Sales Order Management — create, modify, track SOs
- [ ] Inactive customer notification (no order in 60 days)
- [ ] Unclosed Sales Orders notification
- [ ] Order Lifecycle Overview (to schedule → scheduled → out for delivery → delivered)
- [ ] Output Documents Management — view and download (invoice, DO, receipt)
- [ ] Customer Management — view/manage customer details, credit terms/limits

**Supply Chain Agent Workspace**
- [ ] Fulfillment Management — create, modify, track DOs
- [ ] Order Lifecycle Overview (draft → to schedule → scheduled → out for delivery → delivered)
- [ ] Output Documents — view Pick List, DO
- [ ] Inventory Management — view and manage product details
- [ ] Delivery Request Classification (3rd party transport documented outside MAIA)

---

### 5. Duplicate Order Prevention

- [x] Real-time duplicate check on every incoming order
- [x] Logic: Customer Name + PO Number match → flagged as "Duplicate Order"
- [x] Duplicate order blocked from creation

---

### 6. Customer-Based Pricing

- [ ] Customer-specific price per product (configurable in Customer Profile)
- [ ] Default price applicable to all customers (set during product creation)
- [ ] Automatic price retrieval when SO is created (customer selected → price auto-filled)

---

### 7. Role-Specific Approval

- [ ] SO stays as draft after creation (Finance review required)
- [ ] Approver can view pricing and credit information
- [ ] Approval action: **Approve** → SO marked "Submitted", proceeds to DO creation
- [ ] Approval action: **Amend** → sales agent can amend and proceed
- [ ] Approval action: **Request Clarification** → order paused until resolved

---

## Phase A3 — Compliance & Batch Enhancements

### 8. Advanced Batch Intake

- [ ] Batch / Lot Number field (mandatory)
- [ ] Expiry Date field (mandatory, drives FEFO logic)
- [ ] K1 Form Number field (mandatory for C3 / imported goods)
- [ ] COA PDF upload (supplier COA attached to batch)
- [ ] Tax & Restriction Status tagging:
  - [ ] Free Stock (sellable to anyone)
  - [ ] C1 Stock (restricted to customers with valid C1 certificate)
  - [ ] C3 Stock (hard locked to specific C3 customer)

---

### 9. Compliance & Eligibility Enforcement

**C3 Allocation**
- [ ] C3 stock hard locked to designated customer
- [ ] Non-C3 customers shown "0 Stock Available" for C3 SKUs

**C1 Certificate Validation**
- [ ] C1 product check against Customer Profile for valid certificate
- [ ] Certificate expiry date surfaced to agent during order

**K1 Traceability**
- [ ] K1 number linked permanently to batch
- [ ] K1 number auto-populated on Delivery Order
- [ ] K1 number auto-populated on Invoice

---

### 10. COA Handling

- [ ] Supplier COA PDFs stored per batch (uploaded at batch intake)
- [ ] Customer Preference Logic applied (Standard vs. Blinded COA)
- [ ] Blinded COA — masking/blinding instructions provided before PDF generation

---

## Summary Tracker

| Area                   | Total Items | Built `[x]` | In Progress `[~]` | Blocked `[!]` | Not Started `[ ]` |
| ---------------------- | ----------- | ----------- | ----------------- | ------------- | ----------------- |
| Sales Chatbot          | 24          |             |                   |               |                   |
| UBS CSV Export         | 3           |             |                   |               |                   |
| Supply Chain Chatbot   | 7           |             |                   |               |                   |
| User Workspaces        | 14          |             |                   |               |                   |
| Duplicate Prevention   | 3           |             |                   |               |                   |
| Customer Pricing       | 3           |             |                   |               |                   |
| Role Approval          | 5           |             |                   |               |                   |
| Batch Intake           | 7           |             |                   |               |                   |
| Compliance Enforcement | 7           |             |                   |               |                   |
| COA Handling           | 3           |             |                   |               |                   |
| **TOTAL**              | **76**      |             |                   |               |                   |

---

**See Also:**
- [[03 - Clients/Holsen/SOW for MAIA Holsen]]
- [[03 - Clients/Holsen/Holsen Feature Requests - 5 March Training]]
- [[03 - Clients/Holsen/Meetings/2026-03-16-ending-phase-agenda]]
