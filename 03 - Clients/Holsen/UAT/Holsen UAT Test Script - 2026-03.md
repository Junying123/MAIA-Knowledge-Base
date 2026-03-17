---
owner: Gareth
status: draft
last_reviewed: 2026-03-17
client: Holsen
uat_round: 1
---

# Holsen UAT Test Script — March 2026

## Purpose

This UAT script gives the Holsen team a structured walkthrough of all **built** MAIA features ready for testing. Each scenario maps to a confirmed `[x]` item in the [[Feature Requests/Holsen SOW Feature Checklist]].

Holsen testers should execute each scenario in order, record pass/fail status, and sign off at the end to confirm go-live readiness.

**UAT Round:** 1
**UAT Date:** [To be confirmed]
**Web App:** https://maia-fe-holsen.vercel.app/login (Holsen production instance)
**Chatbot (UAT):** Telegram — @maia_holsen_bot
**Chatbot (Go-Live):** WhatsApp — pending Meta/WhatsApp account setup by MAIA team

## Test Users

| Role | Name | Login |
|------|------|-------|
| Sales Manager | Ng Tze Chien | [Username] |
| Sales Manager | Tam Ze Xin | [Username] |
| Logistics Manager (Logistics) | Noor Aili Nafiah | [Username] |
| Logistics Manager (Procurement) | Intan Atikah | [Username] |
| Logistics Manager (Production) | Murugesu A/L Palanivello | [Username] |
| Finance Manager | Wong Shui Fern (Miss Wong) | [Username] |
| Admin | Ong Siow Chui | [Username] |
| Admin | Tam Ze Xin | [Username] |
| System Admin | Chin Zhao Heng | [Username] |

## Instructions for Holsen Team

1. **Web app:** Use https://maia-fe-holsen.vercel.app/login for all workspace and document scenarios.
2. **Chatbot scenarios (UAT-01 to 07):** Use Telegram — @maia_holsen_bot. WhatsApp will replace Telegram after the Meta/WhatsApp account is set up; functionality is identical.
3. Work through scenarios in order within each group — later scenarios depend on data from earlier ones.
4. For each step, record whether the result **matches** the expected outcome.
5. Mark each scenario in the Results Tracker as **Pass**, **Fail**, or **Blocked**.
6. For failures or blocked scenarios, add notes describing what actually happened.
7. If you are unsure whether a result is correct, mark it **Blocked** and flag to Gareth.

---

## Pre-Conditions

Before starting, confirm the following master data is loaded in the Holsen production instance:

- [ ] Customer records loaded (at minimum: 2–3 test customers with name and address)
- [ ] Product/SKU catalogue loaded (at minimum: 5 SKUs with descriptions)
- [ ] Pricing configured for test products
- [ ] Minimum price thresholds set per product
- [ ] Stock quantities entered for test products (at least one item at low-stock threshold, one at zero)
- [ ] All test user accounts created and able to log in
- [ ] Low-stock alert threshold configured
- [ ] Delivery delay digest threshold configured (number of days)
- [ ] At least 1 SKU in the catalogue is flagged as poison (from the 18 pre-seeded poison SKUs)
- [ ] At least 1 test customer has a full address and phone number loaded (required for PSO FROM block)
- [ ] Admin user account available with poison-flag edit permissions

---

## Test Scenarios

---

### Group 1 — Sales Coordinator: IDP Input & Document Generation

**Tester Role:** Sales Coordinator / Sales Agent
**Checklist Sections:** §1 Omni-Channel Input, §1 Data Extraction, §1 Dynamic Pricing, §1 Stock Availability, §1 Output Documents

---

#### UAT-01 — Text Message Input

**Feature:** Text messages accepted as IDP input
**Checklist Ref:** §1 Omni-Channel Input — `[x]` Text messages

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Open Telegram and start a chat with @maia_holsen_bot | Chatbot responds and is ready to receive input |
| 2 | Type a plain-text order message, e.g.: `"Customer: ABC Trading. Order: 10 drums of Copper Sulfate, 5 bags of Sodium Hydroxide."` | Chatbot accepts the message |
| 3 | Submit the message | System processes the text and extracts order details |
| 4 | Review extracted data displayed by the chatbot | Customer name, SKUs, and quantities are correctly identified |

**Expected Outcome:** Order details extracted from free-text input without errors.

---

#### UAT-02 — Image Input (Handwritten Note / Physical PO)

**Feature:** Image of handwritten note or physical PO accepted as IDP input
**Checklist Ref:** §1 Omni-Channel Input — `[x]` Images

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Prepare a photo of a handwritten order note or physical PO | Image file ready (JPG or PNG) |
| 2 | Send the image to @maia_holsen_bot on Telegram | Upload accepted, image processed |
| 3 | Wait for extraction to complete | Chatbot displays extracted data |
| 4 | Review extracted Customer Name, SKUs, and Quantities | Data matches the handwritten source |

**Expected Outcome:** Chatbot correctly reads handwritten or printed content from image and extracts order fields.

---

#### UAT-03 — PDF Purchase Order Input

**Feature:** PDF formal customer PO accepted as IDP input
**Checklist Ref:** §1 Omni-Channel Input — `[x]` PDFs

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Prepare a sample customer PDF PO | PDF file ready |
| 2 | Send the PDF to @maia_holsen_bot on Telegram | Upload accepted, PDF processed |
| 3 | Wait for extraction to complete | Chatbot displays extracted data |
| 4 | Review extracted Customer Name, SKUs, and Quantities | Data matches the PDF content |

**Expected Outcome:** Chatbot correctly parses PDF PO and extracts order fields.

---

#### UAT-04 — Customer Name Extraction

**Feature:** Customer Name extracted from input
**Checklist Ref:** §1 Data Extraction — `[x]` Customer Name extraction

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Submit an order input (text, image, or PDF) containing a recognisable customer name | Input submitted |
| 2 | Review the extracted data | Customer Name field is populated with the correct name |
| 3 | Confirm the name matches a customer in the system | System links to or suggests the matching customer record |

**Expected Outcome:** Customer Name is correctly extracted and matched.

---

#### UAT-05 — SKU and Quantity Extraction

**Feature:** SKUs and Quantities extracted from input
**Checklist Ref:** §1 Data Extraction — `[x]` SKUs and Quantities extraction

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Submit an order input containing multiple SKUs and quantities (e.g., "10 drums Copper Sulfate, 5 bags Sodium Hydroxide") | Input submitted |
| 2 | Review the extracted data | All SKUs and quantities are correctly identified and listed |
| 3 | Confirm no items are missing or duplicated | Item count matches source document |

**Expected Outcome:** All SKUs and quantities extracted correctly from the input.

---

#### UAT-06 — Manual Price Entry and Minimum Price Enforcement

**Feature:** Bot prompts for price; minimum price safeguards enforced
**Checklist Ref:** §1 Dynamic Pricing — `[x]` Manual price entry, `[x]` Minimum price safeguards

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | After order extraction (from UAT-01 to 05), proceed to pricing step | Chatbot prompts agent to confirm or input price for each item |
| 2 | Enter a price **above** the minimum for one item | Price accepted, no warning shown |
| 3 | Enter a price **below** the minimum for another item | System shows an alert or blocks the entry, indicating minimum price violation |
| 4 | Correct the price to meet or exceed the minimum | Entry accepted |

**Expected Outcome:** Chatbot enforces minimum price thresholds; below-minimum entries are rejected or flagged.

---

#### UAT-07 — Total Available Quantity Display

**Feature:** Total Available Quantity shown to agent
**Checklist Ref:** §1 Stock Availability — `[x]` Total Available Quantity shown

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | During order creation, select a SKU | System displays the Total Available Quantity for that SKU |
| 2 | Confirm the displayed quantity reflects current stock | Quantity shown matches the expected stock level |

**Expected Outcome:** Stock availability is surfaced to the agent during order entry.

---

#### UAT-08 — Quotation-to-SO Conversion (Pricing Logic Persistence)

**Feature:** Quotation logic carries over when converting to Sales Order
**Checklist Ref:** §1 Dynamic Pricing — `[x]` Quotation-to-SO logic persistence

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Complete an order entry and generate a Quotation | Quotation created with agreed prices |
| 2 | Convert the Quotation to a Sales Order | Conversion completes without errors |
| 3 | Open the Sales Order and review pricing | All prices from the Quotation are preserved on the SO — no changes |

**Expected Outcome:** Pricing set on the Quotation carries through unchanged to the Sales Order.

---

#### UAT-09 — Quotation Document Generation

**Feature:** Quotation document generated
**Checklist Ref:** §1 Output Documents — `[x]` Quotation

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | After completing order entry and pricing, trigger Quotation generation | Quotation document is generated |
| 2 | Open the Quotation | Document displays customer name, SKUs, quantities, prices, and date |
| 3 | Confirm the document is downloadable or printable | Download/print function available |

**Expected Outcome:** Quotation document generated with correct content.

---

#### UAT-10 — Sales Order Document Generation

**Feature:** Sales Order document generated
**Checklist Ref:** §1 Output Documents — `[x]` Sales Order

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Convert a Quotation to a Sales Order (from UAT-08) | SO created |
| 2 | Open the Sales Order document | Document displays all order details |
| 3 | Confirm SO number is assigned | Unique SO reference number shown |

**Expected Outcome:** Sales Order document generated with correct details and reference number.

---

#### UAT-11 — Proforma Invoice Generation

**Feature:** Proforma Invoice generated
**Checklist Ref:** §1 Output Documents — `[x]` Proforma Invoice

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | From an active Sales Order, trigger Proforma Invoice generation | Proforma Invoice generated |
| 2 | Open the Proforma Invoice | Document shows customer, items, quantities, prices, and proforma reference |
| 3 | Confirm document is separate from the final Invoice | Proforma and Invoice are distinct documents |

**Expected Outcome:** Proforma Invoice generated correctly as a separate document from the Invoice.

---

#### UAT-12 — Invoice Generation

**Feature:** Invoice generated
**Checklist Ref:** §1 Output Documents — `[x]` Invoice

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Proceed from a confirmed Sales Order to Invoice generation | Invoice generated |
| 2 | Open the Invoice | Document shows all billing details: customer, items, prices, tax (if applicable), total |
| 3 | Confirm Invoice number is assigned | Unique Invoice reference number shown |

**Expected Outcome:** Invoice generated with complete billing information.

---

#### UAT-13 — Credit Note / Debit Note Generation

**Feature:** Credit Note / Debit Note generated
**Checklist Ref:** §1 Output Documents — `[x]` Credit Note / Debit Note

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | From an existing Invoice, initiate a Credit Note | Credit Note creation option is available |
| 2 | Complete the Credit Note details (reason, amount) | Credit Note generated |
| 3 | Open the Credit Note | Document references the original Invoice and shows the credited amount |
| 4 | Initiate a Debit Note from an existing Invoice | Debit Note generation available |
| 5 | Confirm Debit Note generated correctly | Debit Note references original Invoice |

**Expected Outcome:** Credit Note and Debit Note both generated and linked to the originating Invoice.

---

### Group 2 — Sales Order Management

**Tester Role:** Sales Coordinator / Sales Agent
**Checklist Sections:** §5 Duplicate Order Prevention, §1 Dynamic Pricing, §4 Sales Agent Workspace

---

#### UAT-14 — Duplicate Order Prevention

**Feature:** Real-time duplicate check; blocked if Customer Name + PO Number match
**Checklist Ref:** §5 Duplicate Order Prevention — `[x]` all three items

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Create and submit a Sales Order for Customer A with PO Number "PO-001" | Order created successfully |
| 2 | Attempt to create a **second** order for the same Customer A with the same PO Number "PO-001" | System flags the order as a duplicate |
| 3 | Confirm the duplicate order is **blocked** from creation | Order is not created; error or warning message displayed |
| 4 | Create a new order for Customer A with a **different** PO Number "PO-002" | Order created successfully — no duplicate alert |

**Expected Outcome:** Same Customer Name + PO Number combination is blocked. Different PO Number for same customer is allowed.

---

#### UAT-15 — Sales Order Management (Create, Modify, Track)

**Feature:** Sales Order Management workspace — create, modify, track SOs
**Checklist Ref:** §4 Sales Agent Workspace — `[x]` Sales Order Management

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Log in as Sales Agent | Dashboard or SO management view visible |
| 2 | Create a new Sales Order from the workspace (not via chatbot) | SO creation form available; SO created |
| 3 | Open an existing SO and modify a quantity | Modification saved; SO updated |
| 4 | View the status/tracking of the SO | SO status is visible (e.g., draft, submitted, etc.) |

**Expected Outcome:** Sales Agents can create, modify, and track SOs directly from their workspace.

---

#### UAT-16 — UBS CSV Export

**Feature:** CSV export with customer name, address, delivery type, SKUs, quantities
**Checklist Ref:** §2 Sales Order Output — `[x]` CSV generated with customer name, address, delivery type; `[x]` CSV includes all SKUs and quantities

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Navigate to a completed Sales Order | SO record open |
| 2 | Trigger CSV export | CSV file downloaded |
| 3 | Open the CSV | File contains: customer name, customer address, delivery type |
| 4 | Verify line items in CSV | All SKUs and quantities from the SO are present |

**Expected Outcome:** CSV export contains all required UBS fields for the Sales Order.

---

### Group 3 — Supply Chain / Logistics

**Tester Role:** Logistics (Noor Aili)
**Checklist Sections:** §3 Supply Chain Agent Assistant

---

#### UAT-17 — Delivery Order Generation

**Feature:** Delivery Order generated from Invoice
**Checklist Ref:** §3 Output Documents — `[x]` Delivery Order

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Open a confirmed Invoice | Invoice record visible |
| 2 | Trigger Delivery Order generation | DO created |
| 3 | Open the Delivery Order | Document shows customer delivery address, item list, quantities, and DO reference number |

**Expected Outcome:** Delivery Order generated with correct delivery and item details.

---

#### UAT-18 — Picking List Generation

**Feature:** Picking List generated
**Checklist Ref:** §3 Output Documents — `[x]` Picking List

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | From a Delivery Order (from UAT-17), trigger Picking List generation | Picking List created |
| 2 | Open the Picking List | Document shows warehouse items to pick with SKUs, quantities, and storage references |

**Expected Outcome:** Picking List generated from DO with correct warehouse picking details.

---

#### UAT-19 — Out-of-Stock Alert

**Feature:** Out-of-Stock alert sent to Logistics Rep and Sales Rep
**Checklist Ref:** §3 Supply Chain Notifications — `[x]` Out of Stock alert

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Confirm a test product has zero stock in the system | Stock level = 0 confirmed |
| 2 | Attempt to add that zero-stock item to an order or trigger a stock check | System generates an Out-of-Stock alert |
| 3 | Confirm the alert is visible to Logistics Rep | Alert appears in Logistics notification area |
| 4 | Confirm the alert is visible to Sales Rep | Alert appears in Sales notification area |

**Expected Outcome:** Out-of-Stock alert triggered and visible to both Logistics and Sales roles.

---

#### UAT-20 — Low-Stock Alert

**Feature:** Low-Stock alert triggered when stock falls below configured minimum threshold
**Checklist Ref:** §3 Supply Chain Notifications — `[x]` Low Stock alert

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Confirm a test product is at or below the configured low-stock threshold | Stock at threshold confirmed |
| 2 | Check notification area or trigger a stock check | Low-Stock alert visible |
| 3 | Confirm the alert identifies the correct product and remaining quantity | Alert shows product name and current stock level |

**Expected Outcome:** Low-Stock alert fires when stock is at or below the configured minimum threshold.

---

#### UAT-21 — Delivery Delay Digest

**Feature:** Delivery Delay digest — DO not generated after X days from invoice
**Checklist Ref:** §3 Daily Digests — `[x]` Delivery Delays digest

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Identify a test Invoice where no DO has been generated, and sufficient days have passed (per configured threshold) | Test Invoice identified |
| 2 | Trigger or wait for the digest to run | Delivery Delay digest generated |
| 3 | Review digest content | Digest lists the Invoice(s) where DO was not generated within the threshold period |

**Expected Outcome:** Delivery Delay digest correctly surfaces invoices where DOs are overdue.

> **Note:** If the threshold period cannot be simulated in the demo environment, confirm with Gareth whether this scenario can be tested via a backdated test record or is to be deferred.

---

### Group 4 — User Workspace Access

**Tester Role:** All roles
**Checklist Sections:** §4 User Workspaces — General

---

#### UAT-22 — Desktop Web Login (All Roles)

**Feature:** Desktop Web login for all users
**Checklist Ref:** §4 User Workspaces — `[x]` Desktop Web login for all users

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Open https://maia-fe-holsen.vercel.app/login in a desktop browser (Chrome recommended) | Login page loads |
| 2 | Log in as **Sales Agent** | Login successful; Sales Agent dashboard visible |
| 3 | Log out; log in as **Finance (Miss Wong)** | Login successful; Finance view visible |
| 4 | Log out; log in as **Logistics (Noor Aili)** | Login successful; Logistics view visible |
| 5 | Log out; log in as **Admin** | Login successful; Admin view visible |

**Expected Outcome:** All four roles can log in successfully via desktop web. Each role sees their appropriate workspace.

---

### Group 5 — Role Permission Testing

**Tester Role:** All roles (one scenario per role)
**Checklist Ref:** §7 Role-Specific Approval — Document permission matrix
**Goal:** Confirm each user can access what they're permitted to and is blocked from what they're not.

> Test positive access (can do) AND negative access (blocked) for each role. Log any discrepancy in the Notes column of the Results Tracker.

---

#### UAT-23 — Sales Manager Permissions (Ng Tze Chien / Tam Ze Xin)

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Log in as Sales Manager | Login successful |
| 2 | Open Quotation — create a new one, edit, and submit | Full access — CREATE, WRITE, SUBMIT all work |
| 3 | Open Purchase Order — create a new one, edit, and submit | Full access — CREATE, WRITE, SUBMIT all work |
| 4 | Open Sales Order — attempt to create a new SO | Read-only — CREATE not available |
| 5 | Open Invoice — attempt to submit/finalise | Read-only — SUBMIT not available |
| 6 | Open Delivery Order — attempt to create | Read-only — CREATE not available |
| 7 | Open Pick List | No access — Pick List not visible or accessible |
| 8 | Open Incoming (Goods Received) | No access — not visible or accessible |

**Expected Outcome:** Sales Manager has full control over Quotation and PO. Read-only on SO, Invoice, DO. No access to Pick List and Incoming.

---

#### UAT-24 — Logistics Manager (Logistics) Permissions (Noor Aili)

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Log in as Logistics Manager (Logistics) — Noor Aili | Login successful |
| 2 | Open Sales Order + Proforma Invoice — create, edit, and submit | Full access — CREATE, WRITE, SUBMIT all work |
| 3 | Open Delivery Order — create, edit, and submit | Full access — CREATE, WRITE, SUBMIT all work |
| 4 | Open Pick List — create and manage | Full access — CREATE, WRITE, SUBMIT all work |
| 5 | Open Invoice — attempt to submit/finalise | Write access only — SUBMIT not available |
| 6 | Open Quotation — attempt to create | Read-only — CREATE not available |
| 7 | Open Payment / Receipt — attempt to create | Read-only — CREATE not available |
| 8 | View Inventory items | Read-only — can view but not edit |

**Expected Outcome:** Noor Aili has full operational control over SO+PI, DO, Pick List, and Inventory write. Cannot submit Invoice or create Quotations.

---

#### UAT-25 — Logistics Manager (Procurement) Permissions (Intan Atikah)

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Log in as Logistics Manager (Procurement) — Intan Atikah | Login successful |
| 2 | Open SO + Proforma Invoice — attempt to submit | SUBMIT available — can approve SO+PI |
| 3 | Open Delivery Order — attempt to submit | SUBMIT available — can approve DO |
| 4 | Open Incoming (Goods Received) — create and edit | Full write access — CREATE, WRITE all work |
| 5 | Open Pick List — attempt to access | No access — Pick List not visible |
| 6 | Open Invoice — attempt to submit | Read-only — SUBMIT not available |
| 7 | Open Quotation — attempt to create | Read-only — CREATE not available |

**Expected Outcome:** Intan Atikah can submit SO+PI and DO, and has full control over Incoming stock. Cannot access Pick List or submit Invoice.

---

#### UAT-26 — Logistics Manager (Production) Permissions (Murugesu)

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Log in as Logistics Manager (Production) — Murugesu | Login successful |
| 2 | Open Pick List — view entries | Read-only — can view Pick List |
| 3 | Open Inventory items — view stock | Read-only — can view |
| 4 | Open SO + Proforma Invoice — attempt to create or submit | No access — not available |
| 5 | Open Delivery Order — attempt to create | No access — not available |
| 6 | Open Quotation, Invoice, PO — attempt to access | No access — not visible or accessible |

**Expected Outcome:** Murugesu can only view Pick List and Inventory. All document creation and submission is blocked.

---

#### UAT-27 — Finance Manager Permissions (Wong Shui Fern)

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Log in as Finance Manager — Wong Shui Fern | Login successful |
| 2 | Open Invoice — create, edit, and submit/finalise | Full access — CREATE, WRITE, SUBMIT all work |
| 3 | Open Payment / Receipt — create and submit | Full access — CREATE, WRITE, SUBMIT all work |
| 4 | Open SO + Proforma Invoice — create and submit | Full access — CREATE, WRITE, SUBMIT all work |
| 5 | Open Delivery Order — create and submit | Full access — CREATE, WRITE, SUBMIT all work |
| 6 | Open Pick List — attempt to access | No access — not visible |
| 7 | Open Incoming (Goods Received) — attempt to create | Read-only — CREATE not available |
| 8 | Confirm attachment access: can view customer PO | PO attachment viewable; COA not accessible |

**Expected Outcome:** Finance Manager has full control over Invoice, Receipt, SO+PI, and DO. Cannot access Pick List or create Incoming records.

---

#### UAT-28 — Admin Permissions (Ong Siow Chui / Tam Ze Xin)

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Log in as Admin — Ong Siow Chui | Login successful |
| 2 | Open Quotation — create, edit, submit | Full access |
| 3 | Open SO + Proforma Invoice — create, edit, submit | Full access |
| 4 | Open Invoice — create, edit, submit | Full access |
| 5 | Open Delivery Order — create, edit, submit | Full access |
| 6 | Open Pick List — create and manage | Full access |
| 7 | Open Incoming (Goods Received) — create and edit | Full write access |
| 8 | Open Payment / Receipt — submit | SUBMIT available |
| 9 | Confirm attachment access: can view PO and COA | Both PO and COA attachments accessible |

**Expected Outcome:** Admin has full or near-full access across all documents. Only Inventory is read-only for Admin.

---

#### UAT-29 — SO Approval Workflow (Draft → Submit)

**Feature:** SO draft → submit flow; approval actions
**Checklist Ref:** §7 Role-Specific Approval — Workflow behaviour

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Log in as Sales Manager and create a new Sales Order | SO created in draft status |
| 2 | Log out; log in as Logistics Manager (Logistics) — Noor Aili | Logged in as Noor Aili |
| 3 | Open the draft SO | SO visible with SUBMIT option |
| 4 | Submit the SO | SO status changes to Submitted / Approved |
| 5 | Confirm DO creation is now unblocked | DO can now be created from the submitted SO |
| 6 | Create a second SO; log in as Finance Manager (Miss Wong) | Logged in as Miss Wong |
| 7 | Submit the SO as Finance Manager | SO status changes to Submitted / Approved |

**Expected Outcome:** SO created by Sales Manager can be submitted by Logistics Manager (Logistics) or Finance Manager. Submission unlocks DO creation.

---

### Group 6 — PSO (Poison Signed Order)

**Tester Role:** Admin (steps 1–3), Logistics — Noor Aili (steps 4–14)
**Checklist Sections:** PSO — Poison Signed Order
**Compliance context:** PSO is mandated by Poison License B / FARMASI/KKM. Missing or incorrect PSO = audit failure.

---

#### UAT-30 — PSO End-to-End

**Feature:** Poison flag setup, PSO auto-generation, layout validation, access and document management
**Checklist Ref:** PSO — all sections

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Log in as **Admin**. Open a non-poison SKU in the SKU master and toggle poison flag to **Poison = Yes**. Save. | Flag saved. Audit trail records who changed it, when, and before/after value. |
| 2 | Attempt to change the poison flag while logged in as **Sales Manager**. | Poison flag field is read-only or not accessible — change blocked. |
| 3 | Log back in as **Logistics (Noor Aili)**. Create a DN with **only non-poison SKUs** and generate the PDF. | PDF contains DN pages only — no PSO appended. |
| 4 | Create a second DN with **at least 1 poison-flagged SKU** and generate the PDF. | Combined PDF: DN pages first, PSO pages appended after — one A4 print pack. |
| 5 | Create a third DN with a **mix of poison and non-poison lines** (e.g., 2 poison + 3 non-poison) and generate the PDF. | PSO appended. PSO line item table contains **only the poison lines** — non-poison lines absent from PSO. DN still shows all lines. |
| 6 | Open the PSO from step 5. Check: FROM block (customer name, address, phone), TO block (Holsen Interchem Sdn Bhd), PSO/DO Number, Delivery Date. | All header fields populated correctly from MAIA master data. |
| 7 | Check PSO line item table (No., Description, Qty Ordered, Packing/UOM), Signature & Chop block, blank Remark field, return-copy instruction note, and MAIA footer. | All layout elements present and correctly formatted per PSO Sample.xlsx. |
| 8 | Download the PSO PDF from the DN record. Reprint it. | Download succeeds. Reprinted PSO matches original. |
| 9 | Upload a test file as **"Signed PSO Copy"** attachment on the DN. | Upload accepted. "Signed PSO Copy" attachment type available. Attachment visible and linked to correct DN. |
| 10 | Log in as **Finance Manager (Miss Wong)**. Open the same DN and view the PSO. | PSO accessible to Finance Manager. |

**Expected Outcome:** Admin-only poison flag with audit trail. PSO auto-generated only when poison lines are present. PSO scoped to poison lines only on mixed DNs. Layout matches Holsen PSO template. PSO downloadable, reprintable, and accessible to Logistics, Admin, and Finance.

---

## Results Tracker

| Scenario ID | Feature | Checklist Ref | Tester | Status | Notes |
|-------------|---------|---------------|--------|--------|-------|
| UAT-01 | Text Message IDP Input | §1 Omni-Channel — Text | | ☐ Pass ☐ Fail ☐ Blocked | |
| UAT-02 | Image IDP Input | §1 Omni-Channel — Images | | ☐ Pass ☐ Fail ☐ Blocked | |
| UAT-03 | PDF IDP Input | §1 Omni-Channel — PDFs | | ☐ Pass ☐ Fail ☐ Blocked | |
| UAT-04 | Customer Name Extraction | §1 Data Extraction — Customer Name | | ☐ Pass ☐ Fail ☐ Blocked | |
| UAT-05 | SKU and Quantity Extraction | §1 Data Extraction — SKUs/Qty | | ☐ Pass ☐ Fail ☐ Blocked | |
| UAT-06 | Manual Price Entry + Min Price | §1 Dynamic Pricing | | ☐ Pass ☐ Fail ☐ Blocked | |
| UAT-07 | Total Available Quantity Display | §1 Stock Availability | | ☐ Pass ☐ Fail ☐ Blocked | |
| UAT-08 | Quotation-to-SO Conversion | §1 Dynamic Pricing — Logic Persistence | | ☐ Pass ☐ Fail ☐ Blocked | |
| UAT-09 | Quotation Document Generation | §1 Output Documents — Quotation | | ☐ Pass ☐ Fail ☐ Blocked | |
| UAT-10 | Sales Order Document Generation | §1 Output Documents — SO | | ☐ Pass ☐ Fail ☐ Blocked | |
| UAT-11 | Proforma Invoice Generation | §1 Output Documents — Proforma | | ☐ Pass ☐ Fail ☐ Blocked | |
| UAT-12 | Invoice Generation | §1 Output Documents — Invoice | | ☐ Pass ☐ Fail ☐ Blocked | |
| UAT-13 | Credit Note / Debit Note Generation | §1 Output Documents — Credit/Debit Note | | ☐ Pass ☐ Fail ☐ Blocked | |
| UAT-14 | Duplicate Order Prevention | §5 Duplicate Prevention | | ☐ Pass ☐ Fail ☐ Blocked | |
| UAT-15 | SO Management (Create/Modify/Track) | §4 Sales Agent Workspace | | ☐ Pass ☐ Fail ☐ Blocked | |
| UAT-16 | UBS CSV Export | §2 Sales Order Output | | ☐ Pass ☐ Fail ☐ Blocked | |
| UAT-17 | Delivery Order Generation | §3 Output Documents — DO | | ☐ Pass ☐ Fail ☐ Blocked | |
| UAT-18 | Picking List Generation | §3 Output Documents — Picking List | | ☐ Pass ☐ Fail ☐ Blocked | |
| UAT-19 | Out-of-Stock Alert | §3 Supply Chain Notifications | | ☐ Pass ☐ Fail ☐ Blocked | |
| UAT-20 | Low-Stock Alert | §3 Supply Chain Notifications | | ☐ Pass ☐ Fail ☐ Blocked | |
| UAT-21 | Delivery Delay Digest | §3 Daily Digests | | ☐ Pass ☐ Fail ☐ Blocked | |
| UAT-22 | Desktop Web Login — All Roles | §4 User Workspaces — General | | ☐ Pass ☐ Fail ☐ Blocked | |
| UAT-23 | Sales Manager Permissions | §7 Role Permissions | Ng Tze Chien / Tam Ze Xin | ☐ Pass ☐ Fail ☐ Blocked | |
| UAT-24 | Logistics Manager (Logistics) Permissions | §7 Role Permissions | Noor Aili | ☐ Pass ☐ Fail ☐ Blocked | |
| UAT-25 | Logistics Manager (Procurement) Permissions | §7 Role Permissions | Intan Atikah | ☐ Pass ☐ Fail ☐ Blocked | |
| UAT-26 | Logistics Manager (Production) Permissions | §7 Role Permissions | Murugesu | ☐ Pass ☐ Fail ☐ Blocked | |
| UAT-27 | Finance Manager Permissions | §7 Role Permissions | Wong Shui Fern | ☐ Pass ☐ Fail ☐ Blocked | |
| UAT-28 | Admin Permissions | §7 Role Permissions | Ong Siow Chui | ☐ Pass ☐ Fail ☐ Blocked | |
| UAT-29 | SO Approval Workflow (Draft → Submit) | §7 Role Permissions — Workflow | Noor Aili / Miss Wong | ☐ Pass ☐ Fail ☐ Blocked | |
| UAT-30 | PSO End-to-End (flag, generation, layout, access) | PSO — all sections | Admin / Noor Aili / Miss Wong | ☐ Pass ☐ Fail ☐ Blocked | |

**Summary:**

| Total Scenarios | Pass | Fail | Blocked |
|----------------|------|------|---------|
| 30 | | | |

---

## UAT Sign-Off

By signing below, the Holsen team confirms that the scenarios marked **Pass** have been tested in the MAIA production instance (https://maia-fe-holsen.vercel.app) and the results are accepted.

| Name | Role | Signature | Date |
|------|------|-----------|------|
| | | | |
| | | | |

**Overall UAT Outcome:** ☐ Approved for Go-Live ☐ Conditional (see Notes) ☐ Not Approved

**Conditions / Outstanding Items (if any):**

[List any conditions attached to sign-off, or leave blank if fully approved]

---

## See Also

- [[Feature Requests/Holsen SOW Feature Checklist]] — source of all `[x]` built features tested in this script
- [[Meetings/2026-03-16-ending-phase-agenda]] — UAT sign-off is a go-live readiness gate (Agenda Item 5)
- [[Product/SOW for MAIA Holsen]] — SOW scope reference
