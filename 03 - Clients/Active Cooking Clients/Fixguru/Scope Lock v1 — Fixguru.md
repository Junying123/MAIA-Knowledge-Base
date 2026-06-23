---
owner: Gareth
status: draft
last_reviewed: 2026-06-23
client: Fixguru
document_type: client-facing
version: v1
lark_url: https://eg69120xnei.sg.larksuite.com/wiki/YT3mwO5XKiKdlZkK5r9lvQwzgkh
---

# MAIA × Fixguru — Scope Lock v1

**Prepared by:** Mindhive (MAIA)
**Prepared for:** IAM Worldwide Sdn Bhd (Fixguru)
**Date:** 23 June 2026
**Stage:** UAT

---

## What This Document Is

This document confirms, in plain language, exactly what MAIA has built for Fixguru and what your team will be testing in UAT.

It is organised into three parts:
1. **What is included** — features and workflows confirmed for this UAT
2. **What is not included** — features explicitly outside scope
3. **Open items** — things we need your confirmation on before or during UAT

Anything not listed here as "included" should not be expected during UAT. If something you expected to test is missing, raise it before UAT begins — not during.

---

## Part 1 — What Is Included in UAT

### A. WhatsApp Chatbot (Internal Sales Tool)

Your sales team will use a WhatsApp chatbot to manage the order-to-invoice process internally. This is for your **team's internal use only** — it is not a customer-facing chatbot.

**What your team can do via chatbot:**

| Capability | What this means for your team |
|---|---|
| Create a Quotation | Tell the chatbot the customer name and items to quote. It drafts the document in MAIA. |
| Create a Sales Order | Confirm the quote becomes a Sales Order via chatbot. |
| Look up a customer | Search by customer name or phone number. |
| Check historical pricing | Ask the chatbot what price and discount you last used for a customer + item combination. |
| Apply last transaction price or discount | Chatbot can apply the last invoice price or discount % to the current document line. |
| Minimum price guardrail | If you try to price below the item's minimum, the chatbot will warn you before proceeding. |
| Add FOC (free-of-charge) items | Specify sold quantity and FOC quantity separately. The chatbot records both as separate lines. |
| Add delivery charge as a line item | Add a delivery charge (e.g. Lalamove) as an item line on the order — see note below. |
| Check a customer's credit standing | Ask the chatbot for a customer's credit limit, outstanding balance, and available credit. |
| Create a Delivery Order | Instruct the chatbot to create a Delivery Order from an existing Sales Order. |
| Mark delivery as completed | Update the delivery status once goods are handed over. |
| Create an Invoice | Generate the invoice from the delivered Sales Order. |
| Record a payment | Record customer payment against a submitted invoice. |
| Create a Credit Note | Raise a credit note linked to a submitted invoice. |
| Set chatbot language preference | Set whether the chatbot replies in English or Bahasa Malaysia. |

> **Note on delivery charge:** Your team needs to state the delivery method and charge amount in the same instruction, for example: *"Create order for [Customer], items [X, Y], fulfillment method is Lalamove, delivery charge is RM10."* The charge amount must be stated explicitly — the chatbot will not add it automatically. We will walk through this during training.

---

### B. Custom Box Quotation Calculator

The calculator is embedded inside the Quotation and Sales Order in the MAIA web app.

| Calculator | Status |
|---|---|
| RSC Box Calculator | ✅ Included |
| Die Cut Box Calculator | ✅ Included |
| Pizza Box, Layer Pad, 5 Panel, others | ❌ Not included in this scope — see Part 2 |

**How it works:**
1. Open a Quotation or Sales Order in MAIA
2. Launch the calculator from inside the document
3. Enter your box dimensions, board quality, quantity, and printing/transport settings
4. The calculator produces the price
5. The calculated item and price populate directly into the document line

---

### C. AutoCount Integration (Two-Way Sync)

MAIA syncs with your AutoCount accounting system. AutoCount remains the master system for your customer records, item catalogue, and financial data.

**What syncs between MAIA and AutoCount:**

| Document / Data | Direction | When |
|---|---|---|
| Customer records | AutoCount → MAIA | On sync schedule |
| Item catalogue (SKU, UOM, price) | AutoCount → MAIA | On sync schedule |
| Quotation | MAIA → AutoCount | On submission |
| Sales Order / Proforma | MAIA → AutoCount | On submission |
| Delivery Note | MAIA → AutoCount | On issuance (immediate stock movement) |
| Sales Invoice | MAIA → AutoCount | On submission |
| Credit Note | MAIA → AutoCount | On submission |
| Payment Receipt | MAIA ↔ AutoCount | On submission |

> **Important:** Item codes shown to your team in MAIA and the chatbot will use your AutoCount external SKU codes — not MAIA internal IDs.

---

### D. Document PDF Handoff

MAIA generates PDFs for all key business documents. Your team can download or send these to customers.

| Document | PDF Available |
|---|---|
| Quotation (QTN) | ✅ |
| Sales Order / Proforma Invoice | ✅ |
| Delivery Note (DN) | ✅ |
| Sales Invoice | ✅ |
| Credit Note | ✅ |
| Payment Receipt | ✅ |

---

### E. Credit Limit Management

MAIA enforces credit limits using data from AutoCount.

| Scenario | What happens |
|---|---|
| Customer approaches 80% of credit limit | Sales agent receives an alert notification |
| Customer exceeds credit limit | Sales Order creation is blocked or flagged for management approval |
| Customer has outstanding payments nearing credit term end | Sales agent receives a reminder 10 days before the credit term expires |
| Customer has overpaid | Sales agent is notified |

---

### F. Approval Workflows

MAIA requires management approval for specific scenarios:

| Scenario | Who approves |
|---|---|
| Selling price below item minimum | Management |
| Customer approaching credit limit at time of Sales Order creation | Management |
| Delivery Note items differ from the original Sales Order | Sales / Management |
| Cash payment order — payment must be confirmed before Delivery Note is issued | Sales / Management |
| Outstanding payment from customer exceeds their credit term | Management |

---

### G. Stock Alerts and Notifications

| Notification | Trigger | Who receives it |
|---|---|---|
| Out of stock | Item quantity reaches 0 | Configurable (Sales, Logistics, Management) |
| Low stock | Item reaches minimum quantity threshold | Configurable |
| Item restocked | New stock recorded | Configurable |
| Delivery status updates | Packing → Packed → Scheduled → Loading → Out for Delivery → Delivered | Assigned owner |
| Sales Order not converted to Delivery Note within 7 days | No DN created after 7 days | Assigned Sales Agent (user-specific) |
| Customer inactivity | No invoice in 30, 60, or 90 days (from last invoice date) | Assigned Sales Agent (user-specific) |
| Outstanding payment approaching credit term end | 10 days before end of credit term | Assigned Sales Agent |
| Invoice copy reminder | Final invoice generated | Assigned Sales Agent |

---

### H. Role-Based Access

Five roles are configured for Fixguru:

| Role | Access |
|---|---|
| Sales | Quotation, Sales Order creation and management |
| Warehousing | Delivery Note, Delivery Order, stock operations |
| Finance Manager | Invoice, Credit Note, Payment Receipt, approvals |
| Finance Assistant | Assigned finance records (limited submit rights) |
| Admin | Full access across sales, delivery, and finance workflows for UAT |

---

## Part 2 — What Is Not Included (Out of Scope)

The following items are **not** part of this build and will not be tested in UAT:

| Item | Reason |
|---|---|
| Customer-facing chatbot | The chatbot is for your internal team only. Customer-facing chat is outside scope. |
| Automated returns and refunds processing | Manual process; MAIA does not automate this flow. |
| Promo codes and seasonal campaign logic | Not scoped. |
| WhatsApp reply-context targeting | Not supported. |
| Additional calculators (Pizza Box, Layer Pad, 5 Panel, and others) | Only RSC and Die Cut are included in this scope. Additional calculators are a Change Request. |
| Shelf location tied to UoM (AutoCount custom field) | This is a non-standard AutoCount configuration. MAIA uses standard warehouse modelling. Shelf can appear as a note on the Delivery Note (see open items). |
| Branch contacts managed as separate entities | When we sync customers from AutoCount, branch details are stored as an **address** under the main customer record — not as separate branch-contact entities. |
| Raw material to finished goods conversion planning (BOM) | This is a Change Request. See [[CR Scoping/CR Scoping — Fixguru]]. |
| Historical AutoCount document migration (pre-go-live records) | This is a separate one-off migration — not part of UAT. See [[CR Scoping/CR Scoping — Fixguru]]. |
| Updated RSC / Die Cut calculator formulas (new versions) | Updating the calculator formulas after the original build is a Change Request. |

---

## Part 3 — Open Items (Your Confirmation Needed)

These items need your answer before or during UAT. Where you see **"Confirm:"**, this is the exact question we need answered.

| # | Topic | Confirm with your team |
|---|---|---|
| 1 | **Migration cut-off date** | What date do you want to use as the cut-off for historical records? From that date onward, all documents sync two-way between MAIA and AutoCount. Documents before that date will not be fully available in MAIA, except for agreed snapshot data (credit limit, outstanding balance, overdue amount). |
| 2 | **Historical pricing** | When the chatbot shows pricing history, should it show: the last invoice price, average price, quotation history, or all three? Should it always show standard list price, discount %, and net price together? |
| 3 | **PDF templates** | Do you need the Fixguru/AutoCount-style PDF template before you submit a document, or only after submission? |
| 4 | **Delivery charge as a line item** | Please confirm the exact names of delivery SKUs your team uses (e.g. "3PL Lalamove"). Should the chatbot always add these as item lines rather than just selecting a delivery method? |
| 5 | **Branch and delivery address** | When one customer has multiple branches or delivery contacts, should MAIA ask your team to choose the branch before creating a Quotation or Sales Order? |
| 6 | **Language support** | For go-live, should the chatbot reply in English, Bahasa Malaysia, and Mandarin, or only English and BM? (Your team can message in Chinese — the question is whether you need Chinese replies too.) |
| 7 | **Volume (m³) fields** | Volumetric calculation is a Change Request. Do you want to confirm this CR before UAT, or defer it to after go-live? |
| 8 | **Shelf number on Delivery Note** | Should the item shelf number appear only in the Delivery Note additional notes field, or also on the picking list or other documents? |
| 9 | **Additional calculators** | Confirming: RSC and Die Cut are the only go-live calculators. Pizza Box, Layer Pad, and 5 Panel are Change Requests. Is this agreed? |

---

## What to Expect During UAT

UAT is structured as follows:

| Phase | Who | What happens |
|---|---|---|
| Gareth run-through | Gareth (MAIA PM) | Gareth runs all test cases first in the sandbox, records results, and confirms sandbox data is ready |
| Dev fix / clarification | MAIA team | Any issues found during Gareth's run-through are fixed or clarified |
| Fixguru retest | Your team (Yvonne / Marcus) | Your team retests the same cases using Gareth's notes as a guide |
| Sign-off | Gareth + Fixguru | Confirm pass items, open issues, deferred items, and who owns what next |

**Test environment:** UAT happens in the setup sandbox only. Do not test against your production AutoCount.

**Test results:** For each test case, your team records Pass / Fail / Issue / Deferred. If something fails, note the exact chatbot message, document reference, customer, item, and what you expected instead.

---

## See Also

- [[SOW/Fixguru SOW]] — Original signed scope of work
- [[CR Scoping/CR Scoping — Fixguru]] — Change requests outside SOW scope
- [[UAT/MAIA UAT Form - Fixguru - 2026-05 (Full)]] — Detailed UAT test cases
- [[Scope Alignment - Delivery Method & Out-of-Scope Items]] — Scope decisions from 2026-06-10
