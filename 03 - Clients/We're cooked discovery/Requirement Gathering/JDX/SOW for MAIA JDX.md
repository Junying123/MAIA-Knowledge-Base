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

**Current tools:** WhatsApp, SQL (accounting only), Excel

This SOW defines a phased implementation of MAIA that delivers:
- Structured pro forma invoice creation with customisation remarks that propagate automatically to the delivery order
- Payment receipt creation against confirmed customer payments
- Multi-address delivery scheduling and status tracking for corporate hamper orders


---

## Phased Delivery

### Phase 1 — Core MAIA (Seasonal Hamper B2B Flow)

Phase 1 delivers the operating foundation for JDX's seasonal hamper B2B channel: the revenue engine and highest-pain workflow. It covers pro forma invoice creation with a remarks text area for customisation instructions, payment matching, delivery order generation with full remarks propagation, and multi-address delivery tracking — replacing the current WhatsApp-thread-and-manual-SQL workflow.

---

### Internal Chatbots

#### Sales Agent Chatbot

**Platform:** WhatsApp

##### Pre-Order Checks
- Check available item quantities before confirming an order

##### Sales Order Creation
- Create sales order via natural language — specify customer name, items, and quantities directly in WhatsApp; no rigid keywords required
- Add customisation remarks (ribbon colour, greeting card wording, item substitution, delivery date, price tag on/off) in the same chat thread

##### Document Generation
- Generate and return the pro forma invoice PDF to the Sales User in WhatsApp after order creation — Sales User can then forward it directly to the customer

##### Invoicing & Payment
- Convert sales order to invoice via chat once payment is confirmed
- Attach customer payment slip and create receipt directly in WhatsApp
- Track payment status of open invoices via chat

##### Real-Time Order Monitoring
- Query sales order status at any time via chat
- Receive next-step reminders when an order is ready for logistics follow-up

#### Logistics Agent Chatbot

**Platform:** WhatsApp

##### Delivery Order (DO) Creation
- Create Delivery Orders directly via WhatsApp — specify the sales order reference, quantities, and delivery date in natural language; no rigid keywords required
- DO inherits all customisation remarks from the source sales order automatically — ribbon colour, greeting card wording, item substitution, price tag on/off — no retyping required

##### Blanket Order — Multi-Drop Splitting
- Split one sales order into multiple DOs via WhatsApp chat — specify quantities per drop in natural language; no login required
- Supports equal splits and uneven splits across any number of drops
- Each DO created independently with its own delivery date
- Remaining unfulfilled quantity stays on the SO after each split — coordinator can continue creating DOs against the same order across multiple runs
- MAIA confirms each DO created in chat

##### Real-Time Fulfillment Monitoring
- Ask MAIA for a live view of Delivery Notes by status — Draft, To Schedule, Scheduled, or Success — at any time via chat
- Receive next-step alerts when an invoice is ready for a Delivery Note to be created — no manual WhatsApp group monitoring required
- Coordinator marks a DN as delivered (→ Success), reschedules the delivery date, or marks as failed directly via chat — no login required

##### Notification Reminders
- **Delivery Delays** — triggered when a Delivery Note has not been scheduled after X days from invoice creation

---

### MAIA Web App — User Workspaces

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

---

#### Logistics Workspace

For operations staff managing delivery orders, multi-drop dispatch, and delivery tracking.

**Features:**
- **Delivery Order (DO) Creation** — DO created from the sales order once the finance staff has issued the invoice. All customisation remarks from the sales order (ribbon colour, greeting card wording, item substitution, delivery date, price tag on/off) propagate automatically through to the invoice and DO — no retyping required.
- **Multi-Drop Delivery (Blanket Order)** — one sales order can generate multiple DOs, each linked to the source SO. Coordinator creates individual DOs per drop from the same SO; remaining unfulfilled quantity stays on the SO for subsequent DOs.
- **Delivery Date Scheduling** — each DO has its own delivery date set independently.
- **Delivery Status Tracking** — each DN has its own status: Draft → To Schedule → Scheduled → Success (or Failed). Coordinator manually marks a DN as delivered (Success), reschedules the delivery date, or marks as failed. All DNs for an order are viewable in one place. No Delivery Trip or 3PL integration is in scope.
- **Output Documents:** Delivery Note (DO)

#### Document Generation Summary — Phase 1

| Category  | Documents                                                     |
| --------- | ------------------------------------------------------------- |
| Sales     | Pro Forma Invoice, Sales Order, Invoice, Credit Note, Receipt |
| Logistics | Delivery Note (DO)                                            |

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

#### Inventory Management

JDX explicitly prioritised solving the billing and delivery bottleneck before addressing inventory. Phase 1 does not include live stock management. Once the core order flow is stable, inventory management (SKU-level stock, movement tracking, safety stock alerts) can be layered onto Phase 2.

---

## Estimated Timelines

| Phase | Scope | Build & Integration | Expected Date | Go-Live & Hypercare |
|-------|-------|-------------------|---------------|-------------------|
| Phase 1 | Core MAIA — pro forma, payment matching, DO, multi-address delivery | [TBC] weeks | [TBC] | 1–2 weeks |
| Phase 2 | Kiosk reporting, inventory | [TBC] weeks | [TBC] | 1–2 weeks |

> Phase 2 timeline is contingent on client readiness after Phase 1 go-live.

---

r

---

## Commercial Structure

### One-off Development Cost

| Item | Price |
|------|-------|
| Phase 1 — Core MAIA (Pro Forma, Payment Matching, Delivery) | [TBC] |
| Phase 2 — Kiosk Reporting, Inventory | [TBC] |
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

## Out of Scope

The following are explicitly excluded from this engagement. These are items JDX may reasonably expect MAIA to cover — they are called out here to prevent scope disputes:

- **Giant/AEON B2B portal billing** — Monthly hypermarket commission deductions and display charges are billed through the grocer's own B2B portal. JDX confirmed this is low priority; it happens after peak season when staff have slack time.
- **Deep inventory management / live stock tracking** — JDX explicitly deferred this until the billing and delivery bottleneck is solved in Phase 1.
- **B2C online / Shopify / Facebook channel fulfilment** — E-commerce fulfilment was not prioritised for this engagement.
- **Tea retail POS for walk-in stores** — Walk-in retail at the 6 JDX stores is separate from the seasonal hamper business and is not in scope.
- **~3,000 tea SKU deep management** — JDX explicitly parked complex tea SKU treatment (year, factory, grade, batch codes) until the seasonal use case is proven. Phase 1 uses a simplified product catalogue.
- **Tiered discount configuration** — Tiered discount auto-application (e.g. 5%/10%/15% by order value) is not in scope. Coordinators apply discounts manually when required.
- **Delivery Trip management** — DN status is updated manually by the coordinator (mark as delivered, reschedule, mark as failed). Delivery Trip grouping, route planning, and driver assignment are not in scope.
- **3PL / courier integration** — No integration to third-party logistics providers or courier APIs. Delivery tracking is coordinator-driven within MAIA only.

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

5. **Timelines — Phase 1 build duration and go-live target**

   Why this matters: JDX is a seasonal business. Peak windows are CNY, Hari Raya, Mooncake. Go-live must land before the next peak or it loses its entire value proposition.
   What I need: Agreed Phase 1 build duration and target go-live date.

6. **Multi-Address Delivery — Recipient Address Model**
   Why this matters: Current MAIA requires delivery addresses to be pre-registered in the customer module. For JDX's corporate hamper orders, delivery recipients (10–50+ addresses per order) are one-time destinations that change every season — they are not customers. Pre-adding them to the customer module is impractical and creates noise in the system.
   What I need: Tech team to confirm whether MAIA can support ad-hoc delivery addresses entered per DN (not tied to the customer module), or a recipient list attached to the SO that auto-generates the DNs. This must be resolved before multi-address delivery is committed to Phase 1 scope.
