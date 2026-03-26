---
owner: Gareth
status: draft
last_reviewed: 2026-03-17
client: Holsen
---

# MAIA for Holsen — Working Specification

This document captures the detailed working specification for MAIA's implementation at Holsen, across all delivery phases. It supplements the SOW with operational logic, edge cases, and implementation notes.

---

## Phase A1 — Core MAIA

### 1. Internal Chatbot (B2B Sales)

#### 1.1 Sales Agent Assistant

The Sales Agent Assistant enables Holsen's Sales team to generate quotations, receive customer Purchase Orders (POs), and convert them into Sales Orders (SOs) directly through WhatsApp or by forwarding customer emails to MAIA.

**Platforms:** WhatsApp (MAIA Sales Agent Chatbot), Email (for forwarding customer POs)

---

**Sales Intent Capture & Intelligent Document Processing (IDP)**

Sales agents may forward any form of customer request to MAIA:
- WhatsApp messages
- Images / photos of handwritten notes
- PDFs (formal POs)
- Forwarded emails

MAIA reads the content and converts it into structured data by extracting:
- Customer name
- Items and SKUs
- Quantities
- Delivery date (if mentioned)
- PO number (if applicable)
- PO notes / special handling instructions

MAIA automatically determines whether the request represents a **quotation** or a **confirmed PO**:

**If a Quotation:**
- Applies customer-specific pricing from Holsen's Price List
- Prompts manual confirmation for commodity items
- Enforces minimum price safeguards
- Displays simple stock availability for reference only (no warnings, no reservation)
- Formats the quotation into a shareable document. Once the customer confirms and issues a PO, Sales forwards it to MAIA for order creation.

**If a Purchase Order:**
- Structures extracted PO information into the correct format
- Applies the same pricing logic used during quotation
- Performs a basic inventory validation using Holsen's stock file:
  - If stock is insufficient → MAIA shows a non-blocking warning
  - For manufacturing SKUs → adds reminder: *"Raw material validation must be checked manually."*

> Extracted information may not always be fully accurate, especially for handwritten documents or low-quality images. Users will have the option to review and edit extracted fields before confirming.

MAIA also captures future delivery dates when mentioned by the customer (e.g., delivery required 2–3 weeks later) so these flow correctly into scheduling within the Delivery Workspace.

---

**Customer & Product Matching**

MAIA automatically matches extracted PO information against Holsen's Customer data and Inventory data. Each SKU is tagged with its product classification:

| Tag | Description |
|-----|-------------|
| Trading | Finished goods, pick-and-pack ready |
| Manufacturing | Requires internal processing before delivery |
| Poison | Controlled chemical — requires special transport documentation |
| Commodity | Market-dependent pricing — requires manual price confirmation |
| COA Required | Must include Certificate of Analysis with delivery |

These tags give immediate clarity to downstream teams.

---

**Order Type Tagging**

Some orders require different handling. MAIA does not enforce special rules but **records the tag** when Sales indicates it:

| Tag | Notes |
|-----|-------|
| Normal Order | Standard processing |
| Blanket PO | Tag only — no balance tracking |
| C3 Order | Tag only — no compliance checks in A1 |
| LMW Order | Tag only |
| Manufacturing Order | Auto-tagged if the SKU is a manufacturing item |

These tags provide visibility to Logistics, helping them prepare downstream tasks.

---

**Customer Requirements Tagging**

MAIA automatically attaches customer-specific requirements from the Customer Master to the order. These appear clearly on the Delivery Order and Sales Order Sheet, ensuring Logistics never misses critical instructions:

- COA requirement (Yes / No)
- Type of COA (Standard / Detailed)
- Labeling requirements
- Preferred brand (if the customer only accepts certain brands)
- DO / Invoice copies required
- Delivery and packing instructions

---

**Basic Inventory Validation**

MAIA performs a simple stock check using Holsen's inventory data (SKU → Quantity):

- If quantity is available → proceed normally
- If quantity is insufficient → MAIA displays a warning, but Sales can still continue

For manufacturing SKUs, MAIA always displays:
> *"Raw material validation must be checked manually."*

If stock is short, MAIA also highlights partial delivery possibility. This reflects Holsen's current practice of confirming raw material availability offline.

---

**Pricing Application**

The pricing used during quotation is retained when converting the PO into a Sales Order. MAIA ensures:
- Customer-specific pricing is applied
- Commodity price confirmation is prompted
- Minimum allowed pricing is enforced

---

**Credit Limit Check**

- MAIA checks: Outstanding balance + New order value vs. Credit Limit
- MAIA checks: Overdue invoices vs. Credit Terms
- If a breach is detected → flagged and reviewed during the Approval step

---

**Sales Order Creation**

Once MAIA finishes extracting and validating the PO, it compiles the information into a Draft Sales Order. Sales can:
- Review all details
- Fix any item mismatches
- Confirm the Sales Order directly on WhatsApp

No system login is required — the entire process happens within the WhatsApp interface.

**Output documents generated:**

| Document | Included |
|----------|---------|
| Quotation | ✓ |
| Sales Order | ✓ |
| Proforma Invoice | ✓ |
| Invoice | ✓ |
| Credit Note | ✓ |
| Receipt | ✓ |

---

**Daily Digests — Sales**

The Sales chatbot sends a daily digest of unprocessed or incomplete orders and pending actions:

- **Unclosed Sales Orders** — alerts Sales Representatives when orders remain in draft/pending status beyond the expected timeframe.

---

#### 1.2 Sales Order Output (UBS CSV Export)

MAIA generates a structured Sales Order CSV for bulk upload into UBS according to the required format.

**CSV includes:**
- Customer name, address, and delivery type
- All SKUs and quantities from the Sales Order
- SKU-level tags (Manufacturing, Poison, Commodity, COA Required)
- Customer-level tags (C3, LMW) and Blanket PO tag (if indicated by Sales)
- COA/label/brand requirements, delivery date, and PO notes
- Replaces manual WhatsApp instructions and ensures consistent handoff to Logistics

> Once SQL/Autocount integration is available, MAIA can switch from CSV to full API/connector-based integration.

---

#### 1.3 Supply Chain Agent Assistant

The Supply Chain chatbot assists Logistics agents in managing order fulfillment for B2B clients.

**Platform:** WhatsApp

**Features:**
- **DO Creation** — Delivery Orders created via WhatsApp (natural language, no rigid keywords required)
- For outstation deliveries requiring transporter-issued DOs (e.g., Tiong Nam), Logistics staff can record the transporter DO number or upload the transporter DO file — ensuring all delivery documentation is centralised in MAIA.

**Output documents generated:**

| Document | Included |
|----------|---------|
| Delivery Order (DO) | ✓ |
| Picking List | ✓ |

---

### 2. User Workspaces

All workspaces are Desktop Web — users log in and interact via a browser.

---

#### 2.1 Sales Agent Workspace

A centralised interface for Sales to review and manage orders created via the MAIA WhatsApp chatbot. Does not replace WhatsApp-based order creation — it allows Sales to reference and retrieve information after the order is confirmed.

**Features:**

- **Sales Order Viewer** — view all SOs created through the chatbot, in both Draft and Confirmed states. Each order displays customer name, items, quantities, PO number, and delivery classification.
- **Document Access** — download all documents generated during order creation:
  - Quotation (if generated)
  - Internal Sales Order
  - Proforma Invoice (if prepayment required)
  - Delivery Instruction Sheet
- **Basic Search & Filter** — filter by customer, order number, or PO number.

---

#### 2.2 Approval Workspace

Once a Sales Order is confirmed, it enters the Approval Workflow in MAIA. This ensures operational feasibility and order accuracy before proceeding to Logistics.

**Approvers verify:**
- SKU-level stock availability
- Pricing accuracy
- Customer requirements (COA, label, brand, copy count)
- Order accuracy vs. PO (SKU mapping, quantities, notes)
- Order-type tags (Blanket PO, C3, LMW, Manufacturing)
- Credit Limit and Term checks

**Approval Actions:**

| Action | Outcome |
|--------|---------|
| **Approve** | Order proceeds to the Delivery Workspace |
| **Reject** | Order returned to Sales with comments |
| **Request Clarification** | Order paused until additional information is provided |

Only complete, accurate orders move downstream.

---

#### 2.3 Delivery Workspace

After approval, the order appears in the Delivery Workspace where Logistics staff prepare the delivery.

**Logistics functions:**
- Select delivery date
- Assign transporters for outstation shipments
- Add operational delivery notes (handling, timing, partial delivery instructions)
- Review customer-specific requirements (COA, label, brand, DO copies)
- Review order classification and PO notes

This module replaces informal WhatsApp coordination and ensures structured preparation before UBS processing.

---

## Phase A2 — Business Rule & SOP Configuration

Phase A2 builds on the foundation delivered in A1 by adapting MAIA to Holsen's **SOPs, approval flows, pricing rules, and operational guardrails**.

> These are not new modules — they are **configurations and enhancements** inside the core MAIA workflow.

---

### 1. Pricing Governance Enhancements

Holsen's pricing model includes fixed customer pricing, commodity-based pricing (requiring management confirmation), and minimum margin safeguards. Phase A2 introduces structured mechanisms to ensure price accuracy and prevent accidental under-pricing.

#### 1.1 Price Deviation Checks

MAIA validates each item's selling price against:
- Customer Price List
- Minimum permissible selling thresholds
- Historical invoice price (if provided)

If MAIA detects a price that is unusually low or outside configured thresholds, the line is automatically **flagged for review**.

#### 1.2 Commodity Price Confirmation

Certain chemical items have volatile, market-based pricing. For any SKU marked as *Commodity*:
- MAIA prompts Sales for manual price entry
- If the entered price violates configured rules → Sales Order is routed for approval
- Ensures commodity pricing is always intentionally confirmed

#### 1.3 Pricing Approval Queue

Orders that violate pricing rules are automatically routed to the **Price Approval Queue**:

| Action | Outcome |
|--------|---------|
| **Approve** | Sales Order continues to operational approval |
| **Reject** | Returned to Sales with comments |
| **Request Clarification** | Sales must provide justification or confirm with customer |

The order remains locked until approval is completed.

---

### 2. Credit Limit & Credit Term Validation

MAIA performs automated financial eligibility checks before an order proceeds to fulfilment, ensuring customers are served according to Holsen's credit policies.

MAIA verifies the following based on Holsen's Credit Master data:

| Check | Logic |
|-------|-------|
| **Credit Limit Breach** | Outstanding balance + new order value exceeds assigned credit limit |
| **Credit Term Breach** | Customer has overdue invoices beyond their allowed credit days |

Any order that violates credit limit or credit terms is routed to the **Finance Approval Queue**:

| Action | Outcome |
|--------|---------|
| **Approve** | Order continues to the Delivery Workspace |
| **Reject** | Order returned to Sales |
| **Request Clarification** | Sales must provide supporting information or payment proof |

This ensures all orders moving downstream comply with Holsen's financial controls and credit risk policies.

---

## Phase A3 — Enhancements

### 1. Compliance, Batch Handling & Document Automation

This phase introduces batch metadata intake, compliance enforcement, customer eligibility checks, and COA/C3 document handling. It ensures all deliveries comply with regulatory and customer-specific requirements before orders reach UBS.

> MAIA supports and surfaces compliance information — it does not generate official regulatory documents.

---

#### 1.1 Batch Intake Module

MAIA provides a Batch Intake screen for Logistics to enter batch information when new stock arrives, replacing the existing notebook/Excel-based tracking.

**Batch-level fields:**

| Field | Notes |
|-------|-------|
| Batch Number | Unique identifier |
| Quantity | Units received |
| Expiry Date | Drives FEFO logic |
| Manufacturing Date | |
| K1 Number | Mandatory for imported goods |
| Regulatory Classification | C3, C1, LMW, Poison |
| COA Laboratory Results | Appearance, content %, pH — based on Holsen's COA template |

---

#### 1.2 Batch Eligibility & Compliance Enforcement

MAIA validates batch eligibility before any order proceeds:

| Rule | Logic |
|------|-------|
| C3 Stock | Can only be allocated to C3 customer POs |
| C1 / LMW Stock | Restricted to matching customer categories |
| Expired / Near-expiry | Flagged or blocked depending on Holsen's configured rules |
| Poison SKUs | Surfaces necessary warnings for special handling |
| Blanket PO | Validates against Blanket PO rules to prevent over-delivery |

Only compliant batches are visible for Logistics to select.

---

#### 1.3 COA, C3 & Compliance Document Handling

**COA Handling**
- COAs are received from suppliers or Holsen's laboratory as pre-generated PDFs
- Logistics uploads the COA once during batch intake and links it to the batch
- When an order requires a COA, MAIA automatically attaches the correct COA file to the DO, along with information on fields that need to be altered
- If Holsen provides a COA template for "COA with details," MAIA can generate a formatted COA PDF using batch metadata and test results

**C3 Handling**
- C3 authorisation documents are provided externally (customer's import licence)
- MAIA does not generate C3 certificates
- During setup, Holsen uploads the customer's C3 entitlement file
- MAIA uses this data to enforce C3 eligibility rules
- When a C3 restricted product is ordered, MAIA attaches the customer's existing C3 permit (if provided) to the DO

**C1 / LMW Handling**
- C1 and LMW are customer categories stored in the Customer Master
- MAIA enforces eligibility during order preparation: C1/LMW items can only be supplied to customers with matching categories
- No document generation occurs for C1/LMW

**K1 Handling**
- K1 numbers are provided with import shipment documents
- Logistics enters the K1 number during batch intake
- MAIA stores and displays the K1 value, and includes it in the DO and COA packet where applicable

---

#### 1.4 Delivery Type Enforcement (Local vs. Outstation)

MAIA automatically identifies the delivery type based on:
- The customer's configured delivery type, or
- Their postcode (e.g., postcodes 41000–41xxx classified as local)

| Delivery Type | Handling |
|--------------|---------|
| **Local Delivery** | Typically same-day or next-day |
| **Outstation Delivery** | Arranged via transporters (e.g., Tiong Nam) |

This helps Logistics plan deliveries without additional clarification from Sales.

---

## Phase B — Customised Extensions

### 1. Manufacturing Feasibility

For manufacturing SKUs, MAIA performs a basic feasibility check to ensure the order can be produced before it is approved.

- Holsen provides a simple Bill of Materials (BOM) for each manufacturing item
- When a manufacturing item is included in an order, MAIA checks whether the required raw-material SKUs **appear available** in the batch intake data
- This is a **surface-level validation only** — MAIA does not perform actual stock deduction or production posting
- If raw materials appear insufficient, MAIA alerts Logistics to perform a manual check with Production before approving the order

This step prevents confirming a manufacturing order that Holsen cannot produce with the current raw-material position.

---

## See Also

- [[03 - Clients/Holsen/SOW for MAIA Holsen]]
- [[03 - Clients/Holsen/Holsen SOW Feature Checklist]]
- [[03 - Clients/Holsen/Holsen Feature Requests - 5 March Training]]
- [[03 - Clients/Holsen]]
