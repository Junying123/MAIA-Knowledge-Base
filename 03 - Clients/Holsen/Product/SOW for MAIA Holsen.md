---
owner: Gareth
status: approved
last_reviewed: 2026-03-17
client: Holsen
---

# SOW — MAIA Product Specifications for Holsen

## Overview

This document highlights the modules and features that **Holsen** will receive as part of the MAIA implementation. Each module is designed with scalability, configurability, and high availability in mind to fit Holsen's business processes. The system is engineered to support Holsen's high transaction volume _(70–90 POs daily)_.

MAIA is delivered in phases to ensure clarity, predictable rollout, and controlled risk.

### Phase Definitions

| Phase | Name | Description |
|-------|------|-------------|
| **A1** | Core MAIA | Baseline Order → Delivery Note flow. Core chatbots, workspaces, document generation, and data sync. |
| **A3** | Enhancements | Within the core flow, but requires deeper tailoring or additional logic. |

---

## Phase A1 — Core MAIA (Baseline Order → Delivery Note Flow)

Phase A1 delivers the **foundation** of MAIA. It includes standard order creation without any custom business rules, approvals, or additional SOP logic. Phase A1 ensures Holsen receives a **fully working, end-to-end operating system** before any customisation.

**Phase A1 covers:**
- Core Internal Chatbots (Sales & Supply Chain)
- Core Workspaces (Sales, Supply Chain & Finance)
- Core Document Generation
- Core Data Sync Touchpoints
- Baseline process flow (Order → Delivery Note)

---

### 1. Internal Chatbots

#### 1.1 Sales Coordinator Assistant

The Sales Agent Assistant enables Holsen's Sales team to generate quotations, receive customer Purchase Orders (POs), and convert them into Sales Orders (SOs) directly through WhatsApp or by forwarding customer emails to MAIA.

**Platforms:** WhatsApp (MAIA Sales Agent Chatbot), Email (for forwarding customer POs)

---

**Sales Intent Capture & Intelligent Document Processing (IDP)**

Omni-Channel Input — Sales agents can forward customer requests in various unstructured formats:

| Format | Description |
|--------|-------------|
| Text messages | Forwarded directly from client chats |
| Images | Photos of handwritten notes or physical POs |
| PDFs | Formal Customer Purchase Orders |

> Extracted information may not always be fully accurate, especially for handwritten documents or low-quality images. Users will have the option to review and edit extracted fields before confirming the generated document.

Data Extraction — the system automatically identifies and extracts:
- Customer Name
- SKUs and Quantities (e.g., "10 drums of Copper Sulfate")
- Delivery Date (if mentioned)

> SKUs in the PO must be present in MAIA's inventory for extraction to work.

---

**Dynamic Pricing, Quotation & SO Generation**

- **Manual Price Entry:** Pricing varies (especially for commodity items) and is usually negotiated verbally or via "Boss Approval". MAIA does not enforce fixed pricing in this phase — the bot prompts the agent to confirm or input the selling price.
- **Minimum price safeguards** are enforced.
- When converting a Quotation to an SO, the pricing logic from the quotation is persistent and can be reviewed and reused.

---

**Stock Availability Display**

- MAIA checks inventory managed within the system and displays **Total Available Quantity** to the agent (e.g., "Stock Available: 50 Tons").
- C3 items are set up as separate SKUs — MAIA enforces stock and batch restrictions at this stage. Only compliant C3 stock is shown to eligible customers.

---

**Product Attribute Tagging (SKU Level)**

MAIA identifies the classification of every SKU on the order and displays specific instructions to the Logistics team:

| Tag | Definition | Action |
|-----|-----------|--------|
| **Trading** | Finished goods bought and sold without alteration | Signals warehouse: "Pick-and-Pack" ready from shelf |
| **Manufacturing** | Items requiring internal processing before delivery (e.g., repacking bulk solids) | Visual cue for Logistics to check with Production immediately |
| **Poison / Hazardous** | Controlled chemical items requiring government-mandated transport documentation | **CRITICAL ALERT:** "POISON FORM REQUIRED" — Admin/Logistics must prepare and print the physical Poison Form for the driver |
| **Commodity** | Items with highly variable, market-dependent pricing | Prompts Sales Agent to manually verify current market price before quoting |

---

**Customer Requirements Tagging**

MAIA looks up the Customer Profile and surfaces client-specific instructions on the order and Delivery Note:

- **COA (Certificate of Analysis) Requirement** — specifies the exact documentation format the customer demands:
  - Standard: Generic COA
  - Detailed: Full COA
- **Labeling & Brand Strictness** — displays substitution rules to prevent the warehouse from picking an incorrect brand:
  - `NO SUBSTITUTION`
  - `PREFERRED BRAND: [Brand Name]`
- **Documentation & Copies** — specifies administrative paperwork requirements (e.g., "Needs 2 Invoice Copies", "Include Delivery Note with price hidden")

---

**Sales Order Creation**

- SOs are created via WhatsApp messages or email (natural language — no rigid keywords required).

**Output Documents Generated:**

| Document | Included |
|----------|---------|
| Quotation | ✓ |
| Sales Order | ✓ |
| Proforma Invoice | ✓ |
| Invoice | ✓ |
| Credit Note / Debit Note | ✓ |

---

**Daily Digests — Sales**

The Sales chatbot sends a daily digest of unprocessed or incomplete orders and pending actions to Sales Agents:

- **Unclosed Sales Orders** — alerts Sales Representatives when orders remain in draft/pending status beyond the expected timeframe.
- Sales Representatives can declare the **Fulfillment Method** as either Delivery or Pickup.

---

#### 1.2 Sales Order Output (UBS CSV Export)

MAIA generates a structured Sales Order CSV for bulk upload into UBS according to the format required.

**CSV includes:**
- Customer name, address, and delivery type
- All SKUs and quantities from the Sales Order
- COA/label/brand requirements, delivery date, PO notes, and order remarks

> Once SQL/Autocount integration is available, MAIA can switch from CSV to full API/connector-based integration.

---

#### 1.3 Supply Chain Agent Assistant

The Supply Chain chatbot assists Logistics agents in managing order fulfillment for B2B clients.

**Platform:** WhatsApp

---

**Delivery Note (DO) Creation**

- DOs are created via WhatsApp messages (natural language — no rigid keywords required).

**Output Documents Generated:**

| Document | Included |
|----------|---------|
| Delivery Order (DO) | ✓ |
| Picking List | ✓ |

---

**Daily Digests — Logistics**

The Logistics chatbot automatically sends a daily summary of all orders requiring attention:

- **Delivery Delays** — triggered when a Delivery Note has not been generated for an invoice after X days.
- **Expiring Items** — alerts users when products are approaching their expiry date.

These items are highlighted (pinned) in the daily digest, accessible via both the chatbot and the workspace.

---

**Supply Chain Notification Reminders**

MAIA supports automated logistics reminders to strengthen SOP adherence and prevent delays:

| Alert | Trigger | Sent To |
|-------|---------|---------|
| **Out of Stock** | Product quantity reaches zero | Logistics Rep & Sales Rep |
| **Low Stock** | Quantity falls below configured minimum threshold | Logistics Rep & Sales Rep |

Alerts are pinned in the daily digest and accessible via the chatbot and workspace.

---

### 2. User Workspaces

All workspaces are Desktop Web — users log in and interact with the system via a browser.

---

#### 2.1 Sales Agent Workspace

A web-based workspace allowing Sales Agents to manage order status and customer information.

**Features:**

- **Sales Order Management** — create, modify, and track Sales Orders.
  - Notification: **Inactive Customers** — customer has not ordered in 60 days from last invoice date (sent to Sales Representative)
  - Notification: **Unclosed Sales Orders** — pending orders not yet closed by sales agents (sent to Sales Representative)
- **Order Lifecycle Overview** — manage and view order statuses: To Schedule → Scheduled → Out for Delivery → Delivered
- **Output Documents Management** — view and download created output documents (e.g., invoice, DO, receipt)
- **Customer Management** — view and manage customer details, including credit terms and limits recorded in MAIA

---

#### 2.2 Supply Chain Agent Workspace

**Features:**

- **Fulfillment Management** — create, modify, and track Delivery Notes (DOs)
- **Order Lifecycle Overview** — manage and view order statuses: Draft → To Schedule → Scheduled → Out for Delivery → Delivered
- **Output Documents** — view Pick List and Delivery Note (DO)
- **Inventory Management** — view and manage product details
- **Delivery Request Classification**

> Urgent orders involving 3rd-party transporters are arranged **outside** MAIA. MAIA provides all required supporting documents (DO, Pick List, and other required documents as needed).

---

#### 2.3 Duplicate Order Prevention

Prevents human error where a PO might be processed twice.

- MAIA performs a **real-time check** on every incoming order.
- **Logic:** If Customer Name + PO Number matches an existing active order → the system flags it as a **"Duplicate Order"** and blocks creation.

---

#### 2.4 Customer-Based Pricing

Ensures Sales Agents create orders with correct Retail or Dealer pricing based on the customer's category, without manual cross-checking or manager approvals.

**Configuration:**
- Admins/Sales Coordinators can set a **customer-specific price per product** in the Customer Profile.
- When a new product is created, users can optionally set pricing for specific customers or apply a **default price** for all customers.

**At Order Creation:**
1. Sales Agent selects the customer.
2. MAIA retrieves the exact pricing configuration for that customer.
3. MAIA auto-fills the correct price for each item — no manual cross-checking required.

---

#### 2.5 Role-Specific Approval

Once a Sales Order is created, it remains in **draft** status. Finance team members review accuracy before a Delivery Note (DO) can be created.

> Pricing and credit information are visible to approvers for reference, but no automated pricing or credit validations are executed in Phase A1.

**Approval Checks — approvers manually verify:**
- Customer requirements
- Order accuracy (checked against PO)
- Credit Limit and Credit Term

**Approval Actions:**

| Action | Outcome |
|--------|---------|
| **Approve** | SO marked "Submitted" — proceeds to DO creation |
| **Amend** | Sales Agent can amend the order and proceed |
| **Request Clarification** | Order paused until clarification is provided |

---

## Phase A3 — Enhancements (Within Core Flow)

Phase A3 introduces deeper tailoring and additional logic within the core order → delivery note flow. This phase covers compliance enforcement, batch handling, and document automation.

---

### 3. Compliance, Batch Handling & Document Automation

This phase introduces batch metadata intake, compliance enforcement, customer eligibility checks, and COA/C3 document generation. It ensures all deliveries comply with regulatory and customer-specific requirements.

---

#### 3.1 Advanced Batch Intake

When new stock arrives, the Warehouse team enters the following mandatory attributes into MAIA:

| Field | Description |
|-------|-------------|
| **Batch / Lot Number** | Unique identifier on the item |
| **Expiry Date** | Critical for FEFO (First Expired, First Out) logic |
| **K1 Form Number** | Mandatory for C3/imported goods — Customs Declaration number for the shipment |
| **COA Data** | Upload the Supplier COA PDF |
| **Tax & Restriction Status** | Free Stock / C1 Stock / C3 Stock (see below) |

**Stock Restriction Types:**

| Type | Rule |
|------|------|
| **Free Stock** | Can be sold to anyone |
| **C1 Stock** | Restricted to customers covered under a valid C1 certificate (determined by Customer Profile) |
| **C3 Stock** | Imported on behalf — restricted to the specific C3 customer only |

---

#### 3.2 Compliance & Eligibility Enforcement

MAIA surfaces all batch-related information before any order proceeds.

**C3 Allocation (Import on Behalf)**
- If a batch is tagged **"C3 — Customer A"**, it is hard-locked to that client.
- If a Sales Agent tries to order this SKU for **Customer B**, MAIA displays **"0 Stock Available"** — hiding the C3 stock to prevent illegal allocation.

**C1 Certificate Validation**
- When a Sales Agent adds a C1 product to an order, MAIA checks the Customer Profile for a valid C1 certificate and its expiry date, and surfaces this to the agent.

**K1 Traceability**
- The K1 number captured during batch intake is permanently linked to the stock.
- MAIA automatically retrieves and displays the **Ref K1 Number** on both the Delivery Order and Invoice.

---

#### 3.3 COA Handling

MAIA supports the storage, attachment, and presentation of compliance documents during order preparation.

- Supplier COA PDFs are uploaded during Batch Intake and stored per batch.
- **Customer Preference Logic:** when an order is placed, MAIA checks the Customer Profile for COA preference (Standard vs. Blinded).
- **Blinded COA:** if the customer requires a Blinded COA (supplier details hidden), MAIA provides masking/blinding instructions to allow the user to redact specific fields (e.g., Supplier Name) before generating the final PDF for the driver.

---

## See Also

- [[03 - Clients/Holsen/Holsen SOW Feature Checklist]]
- [[03 - Clients/Holsen/Holsen Feature Requests - 5 March Training]]
- [[03 - Clients/Holsen/Meetings/2026-03-16-ending-phase-agenda]]
- [[03 - Clients/Holsen]]
