---
owner: Gareth
status: draft
last_reviewed: 2026-04-15
lark_url:
---

# SOW — MAIA for JDX Tea (九鼎香)

**Effective Date:** [TBC]

**Between:** Mindhive Sdn Bhd ("Mindhive") — 7, Jln Penyajak U1/45A, Hicom-glenmarie Industrial Park, 40150 Shah Alam, Selangor

**And:** JDX Gift and Food Sdn. Bhd. ("JDX") — 203, Jalan 1, Taman Perusahaan Ehsan Jaya, Kepong, 52100 Kuala Lumpur, Malaysia

---

## Executive Summary

JDX Gift and Food Sdn. Bhd. (JDX Tea / 九鼎香) is a Kepong-based distributor of premium Chinese teas, specialty foods, and seasonal gift hampers — official Malaysian distributor of DaYi (大益). Corporate hamper B2B orders drive ~80% of peak-season revenue, processed today via WhatsApp groups, manual SQL pro formas, and Excel spreadsheets.

**Current tools:** WhatsApp, SQL (accounting only), Excel, QSoft (van sales tablet)

This SOW defines a phased implementation of MAIA that delivers:
- Structured pro forma invoice creation with customisation remarks that propagate automatically to the delivery order
- Payment advice matching that triggers DO creation on confirmation — no manual WhatsApp group monitoring
- Multi-address delivery scheduling and status tracking for corporate hamper orders
- Tiered discount configuration applied at pro forma stage


---

## Phased Delivery

### Phase 1 — Core MAIA (Seasonal Hamper B2B Flow)

Phase 1 delivers the operating foundation for JDX's seasonal hamper B2B channel: the revenue engine and highest-pain workflow. It covers pro forma invoice creation with a remarks text area for customisation instructions, payment matching, delivery order generation with full remarks propagation, multi-address delivery tracking, and tiered discount rules — replacing the current WhatsApp-thread-and-manual-SQL workflow.

---

#### Internal Chatbots

**Sales Agent Chatbot**

**Platform:** WhatsApp

**Sales Order Creation**
- Create sales order via natural language — specify customer name, items, and quantities directly in WhatsApp; no rigid keywords required
- Check available item quantities before or during order creation
- Add customisation remarks (ribbon colour, greeting card wording, item substitution, delivery date, price tag on/off) in the same chat thread
- Generate and send pro forma invoice PDF to the customer directly from WhatsApp after order creation

**Real-Time Order Monitoring**
- Query sales order status at any time via chat
- Receive next-step reminders when an order is ready for logistics follow-up

**Daily Digest — Sales**
- Unclosed sales orders
- Pending payment confirmation
- Outstanding invoices

**Logistics Agent Chatbot**

**Platform:** WhatsApp

**Delivery Order (DO) Creation**
- DOs are created via WhatsApp messages (natural language — no rigid keywords required)
- Linked to the source sales order; customisation remarks propagate automatically

**Delivery Status Updates**
- Mark DO as delivered, mark as failed, or reschedule delivery date via WhatsApp

**Daily Digest — Logistics**
- Pending scheduling
- Scheduled
- Out for delivery
- Completed

**Notification Reminders**
- **Delivery Delays** — triggered when a Delivery Note has not been scheduled after X days from invoice creation

---

#### MAIA Web App — User Workspaces

**Platform:** MAIA Web Application

---

#### Sales Workspace

The primary workspace for sales staff creating and managing pro forma invoices and sales orders.

**Features:**
- **Pro Forma Invoice Creation** — create sales order in MAIA with a remarks text area to capture customisation instructions (ribbon colour, greeting card wording, item substitution, delivery date, price tag on/off). MAIA generates a pro forma invoice PDF for the customer from the sales order record.
- **PDF Document Generation** — MAIA generates all sales documents as downloadable PDFs: Pro Forma Invoice, Invoice, Credit Note, Receipt.
- **Daily Digest** — unclosed Sales Order, pending payment confirmation, outstanding invoices

---

#### Finance Workspace

For finance staff managing payment confirmation and invoice finalisation.

**Features:**
- **Receipt Creation** — coordinator records the customer's payment against the open pro forma and issues an official receipt to the customer.
- **Pro Forma → Invoice Conversion** — one-click conversion from pro forma to invoice once payment is confirmed. Invoice inherits all line items, pricing, and customer details from the pro forma. 
- **Invoice Visibility** — view and manage all invoices, outstanding balances, and conversion status across all orders.
- **Approval Tracking** — approve or hold orders pending payment confirmation before DO creation proceeds. Logged with timestamp and user.

> Note: MAIA does not auto-verify bank transfer amounts against pro forma value. A coordinator reviews and confirms the payment amount manually. MAIA does not connect to banking systems. Customers continue to send payment slips via WhatsApp; the coordinator records the payment in MAIA.

---

#### Logistics Workspace

For operations staff managing delivery orders, multi-drop dispatch, and delivery tracking.

**Features:**
- **Delivery Order (DO) Creation** — DO created from the sales order once the finance staff has issued the invoice. All customisation remarks from the sales order (ribbon colour, greeting card wording, item substitution, delivery date, price tag on/off) propagate automatically through to the invoice and DO — no retyping required.
- **Multi-Drop Delivery (Blanket Order)** — one sales order can generate multiple DOs, each linked to the source SO. Coordinator creates individual DOs per drop from the same SO; remaining unfulfilled quantity stays on the SO for subsequent DOs.
- **Delivery Date Scheduling** — each DO has its own delivery date set independently.
- **Delivery Status Tracking** — each DO has its own status (e.g. To Schedule, Delivered, Failed). Coordinator can mark a DO as delivered, mark as failed, or reschedule the delivery date. All DOs for an order are viewable in one place.
- **Output Documents:** Delivery Note (DO), Picking List

> Note: MAIA does not automatically route drops across vehicles or optimise delivery sequences — that planning stays with the coordinator.

---

#### Document Generation Summary — Phase 1

| Category | Documents |
|----------|-----------|
| Sales | Pro Forma Invoice, Sales Order, Invoice, Credit Note, Receipt |
| Logistics | Delivery Note (DO), Picking List |

All documents carry the full customisation remarks from the original sales order: ribbon colour, greeting card wording, item substitutions, delivery date, price tag on/off.

---

### Phase 2 — Customisations & Extensions

Phase 2 extends the platform once the core seasonal hamper flow is stable. The following are confirmed priorities for Phase 2:

#### Consignment Kiosk Daily Stock Reporting

JDX deploys its own promoters to Giant and AEON seasonal kiosks. Today, promoters submit daily stock reports via WhatsApp group and request top-ups the same way.

- Outlet registered in MAIA with opening stock and assigned promoter
- Promoter submits digital daily stock report per outlet (opening, inflow, transfers, adjustments, returns, closing)
- Report auto-validated against previous day's closing balance
- Top-up request raised in MAIA; ops team reviews and approves or adjusts
- DO generated in MAIA for outlet top-up deliveries; stock movement tracked
- Phase 1 core framework (orders, DOs, delivery tracking) makes this extension straightforward

#### QSoft Van Sales — Integration or Replacement

JDX runs ~10–15 client visits per day via a QSoft tablet integrated to SQL. Two options to assess with the tech team and JDX before committing scope:

- **Option A — Keep QSoft, integrate to MAIA:** QSoft integrates via API to MAIA instead of SQL. All van sales flow into MAIA as the single source of truth.
- **Option B — Replace QSoft with MAIA:** Salesperson uses MAIA mobile/tablet to create invoice on the spot and print. Inventory updated in real time on bill creation; no sync lag.

**Open question:** The decision between Option A and Option B requires a feasibility assessment with the tech team and JDX's SQL/QSoft vendor before this can be scoped and priced.

#### Inventory Management

JDX explicitly prioritised solving the billing and delivery bottleneck before addressing inventory. Phase 1 does not include live stock management. Once the core order flow is stable, inventory management (SKU-level stock, movement tracking, safety stock alerts) can be layered onto Phase 2.

---

## Estimated Timelines

| Phase | Scope | Build & Integration | Expected Date | Go-Live & Hypercare |
|-------|-------|-------------------|---------------|-------------------|
| Phase 1 | Core MAIA — pro forma, payment matching, DO, multi-address delivery, discount config | [TBC] weeks | [TBC] | 1–2 weeks |
| Phase 2 | Kiosk reporting, QSoft integration/replacement, inventory | [TBC] weeks | [TBC] | 1–2 weeks |

> Phase 2 timeline is contingent on the QSoft feasibility assessment and client readiness after Phase 1 go-live.

---

## Integration

No accounting system integration is required for Phase 1.

SQL is used by JDX as a post-operational accounting ledger. It is not used for live inventory, order management, or real-time decisions. MAIA handles the operational workflow (pro forma, payment, delivery) independently. If JDX later wants to auto-sync invoice or receipt records to SQL, that is a Phase 2 scoping conversation with the tech team.

---

## Commercial Structure

### One-off Development Cost

| Item | Price |
|------|-------|
| Phase 1 — Core MAIA (Pro Forma, Payment Matching, Delivery, Discount Config) | [TBC] |
| Phase 2 — Kiosk Reporting, QSoft, Inventory | [TBC] |
| **Grand Total** | **[TBC]** |

### Payment Terms

| Milestone | Percentage | Price | Trigger |
|-----------|-----------|-------|---------|
| Milestone 1 — Project Confirmation | 50% | [TBC] | Upon project commencement |
| Milestone 2 — UAT Sign-Off | 50% | [TBC] | Upon UAT completion and client acceptance |

### Monthly Maintenance

| Item | Estimated |
|------|-----------|
| Platform maintenance | TBC |
| Infrastructure / hosting | TBC |
| OpenAI / AI costs | TBC |
| WhatsApp Business | TBC |
| **Estimated Monthly Total** | **TBC** |

---

## SLAs

### Mindhive Commitments

- **System Availability:** 99.5% uptime (excluding scheduled maintenance)
- **Critical (P1):** Within 2 hours
- **High (P2):** Within 8 hours
- **Normal (P3):** Within 2 business days
- **Maintenance Windows:** Pre-communicated, typically weekends or off-peak hours
- **Data Protection:** Regular backups and disaster recovery commitments
- **Lifetime Upgrades & Support**

### JDX Commitments

- Designate system administrators and enforce internal user policies
- Provide accurate product catalogue, customer list, and pricing data for onboarding
- Provide sample documents (pro forma, invoice, DO, credit note) for configuration and testing
- Provide approvals, clarifications, and input within **2–3 working days**
- Designate a primary point of contact (POC): Mr. Kong Kong
- Ensure timely payment settlement per agreed commercial terms

---

## Caveats & Exclusions

- **Third-Party Dependencies:** Mindhive not liable for downtime or issues in WhatsApp or QSoft
- **Connectivity:** JDX responsible for internet access and device readiness for all users
- **Data Accuracy:** Responsibility lies with JDX for correctness of product catalogue, customer data, and discount tier configurations
- **Client-Side Integrations:** QSoft and SQL integrations outside agreed Phase 1 scope require a formal change request and feasibility assessment
- **Payment Verification:** MAIA does not connect to banking systems; payment slip matching is a coordinator-confirmed action, not automated bank reconciliation
- **Customisation Feasibility:** MAIA does not validate whether customisation requests (e.g. specific ribbon colours) are operationally feasible; that judgment stays with JDX's ops team

---

## Out of Scope

The following are explicitly excluded from this engagement. These are items JDX may reasonably expect MAIA to cover — they are called out here to prevent scope disputes:

- **Giant/AEON B2B portal billing** — Monthly hypermarket commission deductions and display charges are billed through the grocer's own B2B portal. JDX confirmed this is low priority; it happens after peak season when staff have slack time.
- **SQL accounting system integration (Phase 1)** — SQL is a post-operational accounting ledger at JDX; not used for live order management. SQL sync capability can be added in Phase 2.
- **Deep inventory management / live stock tracking** — JDX explicitly deferred this until the billing and delivery bottleneck is solved in Phase 1.
- **B2C online / Shopify / Facebook channel fulfilment** — E-commerce fulfilment was not prioritised for this engagement.
- **Tea retail POS for walk-in stores** — Walk-in retail at the 6 JDX stores is separate from the seasonal hamper business and is not in scope.
- **QSoft van sales (Phase 1)** — Van sales assessment and integration/replacement is a Phase 2 decision pending tech feasibility review.
- **~3,000 tea SKU deep management** — JDX explicitly parked complex tea SKU treatment (year, factory, grade, batch codes) until the seasonal use case is proven. Phase 1 uses a simplified product catalogue.
- **Automated discount rules for negotiated / client-specific rates** — Custom rates require coordinator override; MAIA applies standard tiers only.

---

## Signed

**For Mindhive Sdn Bhd:**

____________________________
Signature

Name:
Position:
Date:

**For JDX Gift and Food Sdn. Bhd.:**

____________________________
Signature

Name:
Position:
Date:

---

## ⚠️ Gaps Still Open

This is an internal draft. The following must be resolved before this document is shared with JDX:

1. **Header — Effective date**
   Why this matters: Sets the commercial reference date for the engagement.
   What I need: Agreed start date or signing date.

3. **Commercial — Development fee (Phase 1 and Phase 2)**
   Why this matters: Without a price, this document cannot be sent to the client. All payment milestones are also blocked.
   What I need: Agreed RM amount for Phase 1; Phase 2 can remain TBC if not yet scoped.

4. **Commercial — Monthly maintenance costs**
   Why this matters: JDX needs to budget for ongoing costs, not just one-off development.
   What I need: Estimated monthly figures (platform, hosting, AI, WhatsApp) or confirm TBC is acceptable for now.

5. **Phase 2 — QSoft decision (integrate vs replace)**
   Why this matters: Affects Phase 2 scope, pricing, and SQL vendor engagement. Cannot be committed to scope until feasibility is confirmed.
   What I need: Tech team and JDX alignment on Option A (integrate) vs Option B (replace).

6. **Timelines — Phase 1 build duration and go-live target**
   Why this matters: JDX is a seasonal business. Peak windows are CNY, Hari Raya, Mooncake. Go-live must land before the next peak or it loses its entire value proposition.
   What I need: Agreed Phase 1 build duration and target go-live date.

7. **Tiered Discount Application — Tech Feasibility**
   Why this matters: Tiered discount auto-application (5%/10%/15% by order value, configurable per season) is not currently supported in MAIA. This is a core JDX requirement — if not buildable for Phase 1, coordinator applies discounts manually and the feature drops from scope.
   What I need: Tech team confirmation on feasibility and build effort before this is committed to Phase 1.

8. **Multi-Address Delivery — Recipient Address Model**
   Why this matters: Current MAIA requires delivery addresses to be pre-registered in the customer module. For JDX's corporate hamper orders, delivery recipients (10–50+ addresses per order) are one-time destinations that change every season — they are not customers. Pre-adding them to the customer module is impractical and creates noise in the system.
   What I need: Tech team to confirm whether MAIA can support ad-hoc delivery addresses entered per DN (not tied to the customer module), or a recipient list attached to the SO that auto-generates the DNs. This must be resolved before multi-address delivery is committed to Phase 1 scope.
