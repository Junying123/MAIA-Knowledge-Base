---
owner: Gareth
status: draft
last_reviewed: 2026-04-15
lark_url:
---

# SOW — MAIA for JDX Tea (九鼎香)

**Effective Date:** [TBC]

**Between:** Mindhive Sdn Bhd ("Mindhive") — 7, Jln Penyajak U1/45A, Hicom-glenmarie Industrial Park, 40150 Shah Alam, Selangor

**And:** JDX Gift and Food Sdn. Bhd. ("JDX") — [TBC — full registered address, Kepong, KL]

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

**No SQL accounting integration is required for Phase 1.** SQL is JDX's post-operational accounting ledger and is not used for live order management or real-time decisions. MAIA handles the operational workflow independently; SQL sync can be added in Phase 2 if needed.

---

#### Sales Agent / Accounts Workspace

The primary workspace for accounts coordinators and sales staff creating and managing pro forma invoices and sales orders.

**Features:**
- **Pro Forma Invoice Creation** — create sales order in MAIA with a remarks text area to capture customisation instructions (ribbon colour, greeting card wording, item substitution, delivery date, price tag preference). MAIA generates a pro forma invoice PDF for the customer from the sales order record.
- **Tiered Discount Application** — discount rules configured per season by admin (5% under RM500 / 10% for RM500–RM1,500 / 15% above RM1,500); auto-applied at pro forma stage. Custom or bring-your-own-packaging orders flagged manually, voiding the standard tier. Admin updates tiers at season start; overrides logged with audit trail.
- **Pro Forma → Invoice Conversion** — one-click conversion once payment is confirmed. Invoice inherits all line items, pricing, discount, and customer details from the pro forma. Logged with timestamp and user.
- **Output Documents:** Pro Forma Invoice, Sales Order, Invoice, Credit Note, Receipt
- **Daily Digest** — unclosed pro formas, pending payment confirmation, outstanding invoices

---

#### Finance Workspace

For accounts assistants managing payment confirmation and invoice finalisation.

**Features:**
- **Payment Advice Recording and Matching** — coordinator attaches customer payment slip to the receipt module in MAIA against the open pro forma. System matches slip to order, marks payment confirmed, and triggers delivery order creation automatically.
- **Invoice Visibility** — view and manage all invoices, conversion status, and outstanding balances.
- **Receipt Management** — record and track incoming payments against orders.
- **Approval Tracking** — approve or hold orders pending payment confirmation before DO creation proceeds.

> Note: MAIA does not auto-verify bank transfer amounts against pro forma value. A coordinator reviews and confirms the amount before marking payment as confirmed. MAIA does not connect to banking systems. Customers continue to send payment slips via WhatsApp; the coordinator attaches the slip in MAIA manually.

---

#### Logistics / Operations Workspace

For operations staff managing delivery orders, multi-address dispatch, and proof of delivery.

**Features:**
- **Delivery Order (DO) Creation** — DO auto-generated on payment confirmation. All customisation remarks from the sales order (ribbon colour, greeting card wording, substitutions) propagate automatically to the DO — no retyping required.
- **Multi-Address Delivery Scheduling** — one corporate order split into individual delivery lines per address. Each drop generates a separate DO, linked to the source sales order. Coordinator assigns vehicle or 3PL courier per drop, sets delivery date, and logs 3PL tracking number.
- **Delivery Status Tracking** — each drop has its own status: pending, in transit, delivered, failed. Coordinator views all drops for an order in one place. Failed delivery flagged in MAIA with reason; rescheduling logged.
- **Photo Proof of Delivery (POD)** — driver captures photo POD via MAIA mobile; delivery status updated in real time.
- **Output Documents:** Delivery Note (DO), Picking List

> Note: MAIA does not automatically route drops across vehicles or optimise delivery sequences — that planning stays with the coordinator. MAIA does not book 3PL couriers; coordinator books externally and logs the tracking number in MAIA.

---

#### Management Workspace

For business owners and senior staff needing operational visibility during peak.

**Features:**
- **Order Pipeline View** — live view of pro formas issued, payments pending, deliveries in transit, deliveries completed.
- **Outstanding Payments Overview** — orders awaiting payment confirmation at any point in time.
- **Delivery Status Dashboard** — all active delivery drops, their statuses, and any exceptions.

---

#### Document Generation Summary — Phase 1

| Category | Documents |
|----------|-----------|
| Sales | Pro Forma Invoice, Sales Order, Invoice, Credit Note, Receipt |
| Logistics | Delivery Note (DO), Picking List |

All documents carry the full customisation remarks from the original sales order: ribbon colour, greeting card wording, item substitutions, delivery date, price tag preference.

---

#### Integration — Phase 1

No accounting system integration is required for Phase 1.

SQL is used by JDX as a post-operational accounting ledger. It is not used for live inventory, order management, or real-time decisions. MAIA handles the operational workflow (pro forma, payment, delivery) independently. If JDX later wants to auto-sync invoice or receipt records to SQL, that is a Phase 2 scoping conversation with the tech team.

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

- **Third-Party Dependencies:** Mindhive not liable for downtime or issues in WhatsApp, 3PL courier systems (J&T, Skynet, CityLink), or QSoft
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

1. **Header — Client registered address**
   Why this matters: Required in the parties block for legal validity.
   What I need: JDX's full registered address (not just Kepong).

2. **Header — Effective date**
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
