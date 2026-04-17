---
owner: Gareth
status: approved
last_reviewed: 2026-04-15
template_type: SOW
reference_clients: Fixguru, Holsen
---

# MAIA — Statement of Work (SOW) / Baseline Product Specification

> **How to use this template:**
> Copy this file. Replace all `[PLACEHOLDERS]` with client-specific values. Delete sections that don't apply. Add custom modules in Section 5. Never edit this template directly.

---

The Services Agreement is made effective as of `[DATE]`

|   |   |   |
|---|---|---|
|**BETWEEN**|The Vendor|**Mindhive Sdn Bhd** ("Mindhive"), with its office located at 7, Jln Penyajak U1/45A, Hicom-glenmarie Industrial Park, 40150 Shah Alam, Selangor.|
|**AND**|The Client|**[CLIENT LEGAL NAME]** ("[CLIENT SHORT NAME]"), with its office located at [CLIENT ADDRESS].|

---

## 1. Introduction

### About MAIA

MAIA is a next-generation business platform that unifies sales, fulfillment, communications, logistics, and finance into a single ecosystem.

It is designed as a **modular, cloud-based solution** where each module can function independently yet integrates seamlessly into the wider MAIA environment. This ensures flexibility for smaller businesses while delivering enterprise-level scalability and control.

Our vision is to help organizations manage their entire sales and operational lifecycle from a single, intelligent system — increasing efficiency, improving customer engagement, and enabling growth.

### Purpose of Document

To establish the baseline specifications, service level commitments, and commercial framework for the deployment and ongoing use of MAIA between the Vendor and the Client.

### Mutual Commitment

This document sets out the expectations and obligations of both parties to ensure a successful business engagement.

---

## 2. Product Specifications

MAIA is delivered as a **modular, cloud-based business platform** designed for enterprises and SMEs. Each module can function independently while also integrating seamlessly into the wider MAIA ecosystem.

### 2.1 Delivery Model

**Cloud-Hosted Platform:** MAIA is delivered securely from the cloud, ensuring continuous availability and ease of access without the need for local installations.

**Client Tier:** `[Freemium / Pro / Enterprise]`

**Flexible Tiers:**
- **Freemium:** Entry-level access with shared hosting and essential features.
- **Pro:** Dedicated environment per company with advanced features.
- **Enterprise:** Fully isolated environment with dedicated infrastructure, compliance support, and custom options.

### 2.2 System Interfaces

**Web Application:**
- Accessible via all modern browsers.
- Role-based views for managers, finance teams, operations, and administrators.
- Real-time updates for transactions, approvals, and customer interactions.

**Mobile-Responsive Access:**
- Optimized for smartphones and tablets.
- Designed for sales teams, delivery agents, and field users.

**Specialized Workspaces:**
- **Sales Workspace:** Quotations, orders, and customer interactions.
- **Operations & Delivery Workspace:** Delivery status and proof-of-delivery capture.
- **Managerial Dashboards:** Visibility into performance, revenue, and outstanding actions.

### 2.3 Security & Compliance

- **Authentication:** Role-based access with standard authentication.
- **Data Isolation:** Company-level isolation; Enterprise clients get fully isolated database instances.
- **Encryption:** TLS 1.2/1.3 in transit, AES-256 at rest.

### 2.4 Availability & Performance

- **Uptime Commitment:** 99.9% uptime SLA for Pro and Enterprise clients.
- **High Availability:** Built-in redundancy and automated failover.
- **Scalability:** Infrastructure expands automatically to handle peak loads.

---

## 3. Delivery Phases

> **Choose the appropriate framing:** Use Option A for a linear rollout (like Fixguru), or Option B for a phased delivery (like Holsen). Delete the unused option.

### Option A — Linear Rollout

All modules are delivered together in a single implementation. See Section 4 for the full module list.

### Option B — Phased Delivery

MAIA is delivered in phases to ensure clarity, predictable rollout, and controlled risk.

| Phase | Name | Description |
|-------|------|-------------|
| **A1** | Core MAIA | Baseline order → delivery note flow. Core chatbots, workspaces, document generation, and data sync. |
| **A3** | Enhancements | Within the core flow, but requires deeper tailoring or additional logic. |
| **[PHASE]** | [NAME] | [DESCRIPTION] |

---

## 4. Module Specifications

### 4.1 Business Process Flow

MAIA supports a unified business process flow designed to streamline multi-channel sales, order management, and fulfillment operations.

**Standard Document Flow:**

`Quotation → Sales Order (SO) → Proforma Invoice → Delivery Note (DN/DO) → Invoice → Credit Note (if needed) → Receipt`

> Adjust the flow above to match the client's actual agreed process. For example, Fixguru omits the CPO step.

**Order-Centric Record Grouping:** The Sales Order is the central record. All related documents are linked to the SO.

**Documents under 1 Sales Order:**

| Document Type | Included |
|---|---|
| Quotation | ✓ / ✗ |
| Sales Order | ✓ |
| Proforma Invoice | ✓ / ✗ |
| Delivery Note (DO) | ✓ / ✗ |
| Picking List | ✓ / ✗ |
| Invoice | ✓ / ✗ |
| Credit Note | ✓ / ✗ |
| Debit Note | ✓ / ✗ |
| Receipt | ✓ / ✗ |
| Payment Voucher | ✓ / ✗ |

---

### 4.2 Internal Chatbot Assistants

#### 4.2.1 Sales Agent Assistant

The Sales Agent Assistant enables the client's Sales team to generate quotations, receive customer POs, and convert them into Sales Orders via WhatsApp or email.

**Platforms:** `[WhatsApp / Email / Other]`

**Features:**
- Omni-channel input (text, images, PDFs)
- Data extraction: Customer Name, SKUs, Quantities, Delivery Date
- Dynamic pricing, quotation & SO generation
- Stock availability display
- Sales Order creation (natural language — no rigid keywords required)
- Daily digest: unclosed Sales Orders, pending actions

**Output Documents:**
- Quotation, Sales Order, Invoice, Credit Note, Receipt *(adjust per client)*

---

#### 4.2.2 Logistics / Supply Chain Agent Assistant

The Logistics Assistant helps operations teams manage order fulfillment.

**Platform:** `[WhatsApp]`

**Features:**
- Delivery Note (DO) creation via natural language
- Daily digest: delivery delays, expiring items
- Stock alert notifications (Out of Stock, Low Stock)

**Output Documents:**
- Delivery Order (DO), Picking List

---

### 4.3 User Workspaces

All workspaces are Desktop Web — users log in via browser.

#### 4.3.1 Sales Agent Workspace

| Feature | Description |
|---|---|
| Sales Order Management | Create, modify, and track SOs across full lifecycle |
| Order Lifecycle Overview | View order statuses end-to-end |
| Output Documents Management | View and download invoices, DOs, receipts |
| Customer Management | Credit terms, limits, and customer details |

#### 4.3.2 Supply Chain / Logistics Workspace

| Feature | Description |
|---|---|
| Fulfillment Management | Create, modify, and track Delivery Notes |
| Order Lifecycle Overview | Draft → Scheduled → Out for Delivery → Delivered |
| Output Documents | Pick List and Delivery Note (DO) |
| Inventory Management | View and manage product details |

#### 4.3.3 Management Dashboard

| Feature | Description |
|---|---|
| KPI Overview | Pipeline conversion, outstanding invoices, fulfillment SLAs |
| Approval Actions | Approve/reject escalations |
| Finance Visibility | Outstanding payments, credit term tracking |

---

### 4.4 Document Generation & Exports

All documents are automatically generated based on user actions within the ERP or chatbot interface.

**Document Customization:**
- Layout: Configurable headers, footers, tables, sections
- Document naming conventions (prefixes, outlet codes, timestamps)
- Visual identity: custom colors, fonts, company logos
- Mandatory company information: Registered Name, Address, SSM No., TIN, Contact

---

### 4.5 System Administration & Integrations

| System | Direction | Frequency | Data Objects | Notes |
|---|---|---|---|---|
| MAIA ⇆ `[Accounting System]` | Push/Pull | `[EOD / Real-time]` | Quotes, Customers, Products, Invoices, Credit Notes, Receipts, Payment Vouchers | Master data lives in `[Accounting System]` |
| Chatbot → MAIA | Push | Real-time | Sales Orders, DO, Delivery Trip, Invoice status, Quotation | Full order creation via bot |
| `[Other Integration]` | `[Direction]` | `[Frequency]` | `[Data Objects]` | `[Notes]` |

---

### 4.6 User & Role Management

| Role | Access |
|---|---|
| Management | Full system visibility, reporting dashboards, administrative controls |
| Sales Agent | Customer records, order creation, invoices, payment handling |
| Logistics | Delivery orders, trips, warehouse operations |
| Driver | Delivery trip management, proof-of-delivery uploads |

---

## 5. Customizations & Extensions

> List all client-specific custom features here. Each item should have a clear name and brief description. These are the features that differentiate this SOW from a generic baseline.

### 5.1 Custom Modules

| # | Feature | Description |
|---|---|---|
| 1 | `[Feature Name]` | `[Brief description of what it does and why]` |
| 2 | `[Feature Name]` | `[Brief description]` |

### 5.2 Approval Workflows

Approval triggers configured for `[CLIENT NAME]`:

| Trigger | Rule |
|---|---|
| `[e.g., Selling price below minimum]` | `[Approval required from Manager]` |
| `[e.g., Customer near credit limit]` | `[Management approval required before SO]` |
| `[e.g., DO differs from SO]` | `[DO approval required]` |

### 5.3 Custom Notifications

| Notification | Trigger | Sent To |
|---|---|---|
| `[e.g., Low stock]` | `[When item at minimum threshold]` | `[Logistics Rep, Sales Rep]` |
| `[e.g., Inactive customer]` | `[No orders in 60 days]` | `[Sales Representative]` |
| `[e.g., Outstanding payment]` | `[Near credit term deadline]` | `[Sales Agent]` |

### 5.4 API & System Integrations

- `[e.g., AutoCount — EOD sync for invoices, receipts, credit notes]`
- `[e.g., Lalamove API — logistics dispatch integration]`
- `[Other integration]`

---

## 6. Service Level Agreements (SLAs)

### 6.1 Mindhive Commitments

**System Availability:** 99.5% uptime (excluding scheduled maintenance).

**Support Response Times:**

| Priority | Response Time |
|---|---|
| **Critical (P1)** | Within 2 hours |
| **High (P2)** | Within 8 hours |
| **Normal (P3)** | Within 2 business days |

**Maintenance Windows:** Pre-communicated, typically scheduled during weekends or off-peak hours.

**Data Protection:** Regular backups and defined disaster recovery commitments.

**Lifetime Upgrades & Support:** Clients will continue to receive ongoing product upgrades, security enhancements, and support for the lifetime of their subscription.

### 6.2 Client Commitments

- **User Access & Permissions:** Client to designate system administrators and enforce internal user policies.
- **Data Provisioning:** Provide accurate, complete, and timely data uploads.
- **Timely Feedback:** Provide approvals and clarifications during customization and implementation phases.
- **Compliance:** Adhere to licensing terms, security practices, and applicable regulations.
- **Point of Contact:** Designate a primary POC. Commit to responding to vendor queries within **2–3 working days**.
- **Payments:** Ensure timely settlement of subscription fees and any approved change request costs.

---

## 7. Estimated Timeline (Indicative)

| Phase | Duration |
|---|---|
| Onboarding & Setup | 2–4 weeks |
| Configuration & Customisation | 4–8 weeks *(depending on scope)* |
| User Training & UAT | 2 weeks |
| Go-Live & Hypercare | 1–2 weeks |

> These are indicative durations. Actual timelines depend on client responsiveness, scope, and complexity.

---

## 8. Commercial Structure

### 8.1 One-Off Development Cost

| Item | Price |
|---|---|
| `[e.g., MAIA Internal Chatbot]` | |
| `[Custom Module 1]` | |
| `[Custom Module 2]` | |
| Periodic System and Feature Updates | |
| Storage, Model Training, Ingestion | |
| **Total** | **RM [AMOUNT]** |

### 8.2 Monthly Maintenance

| Item | Estimated |
|---|---|
| OpenAI / LLM Costs | ~ RM `[AMOUNT]` *(depending on usage)* |
| Platform Costs | ~ RM `[AMOUNT]` |
| Server Costs | RM `[AMOUNT]` |

### 8.3 Payment Milestones

| Milestone | Percentage | Price |
|---|---|---|
| Milestone 1 — Project Confirmation | 50% | RM `[AMOUNT]` |
| Milestone 2 — UAT Completion | 50% | RM `[AMOUNT]` |

> Adjust milestones and percentages as negotiated.

---

## 9. Caveats & Exclusions

- **Third-Party Dependencies:** Mindhive not liable for downtime or issues in external platforms (Shopee, Lazada, payment gateways, etc.).
- **Connectivity:** Client is responsible for internet connectivity and device readiness.
- **Client-Side Integrations:** Any unsupported third-party integrations outside the approved scope require a separate change request.
- **Data Accuracy:** Responsibility lies with the Client for correctness of all provided data.

---

## 10. Out of Scope

- Hardware procurement or on-premise infrastructure
- Business process re-engineering outside agreed workflows
- Training beyond the agreed initial program
- Ongoing management of third-party accounts unless explicitly contracted
- `[Any client-specific exclusions]`

---

## 11. Acknowledgement & Agreement

This document serves as a baseline specification and framework for MAIA's implementation and usage. By signing below, both parties agree to the commitments, responsibilities, and exclusions set out herein.

**For Mindhive Sdn Bhd:**

|   |
|---|
|____________________________ |
|Signature|
|Name:|
|Position:|
|Date:|

**For [CLIENT LEGAL NAME]:**

|   |
|---|
|____________________________ |
|Signature|
|Name:|
|Position:|
|Date:|

---

## See Also

- [[02 - PM Playbook/Templates/[Template] PRD]]
- [[02 - PM Playbook/Processes/Dev Handover SOP]]
- [[03 - Clients/Active Cooking Clients/Fixguru/SOW/Fixguru SOW]]
- [[03 - Clients/Active Cooking Clients/Holsen/Product/SOW for MAIA Holsen]]
