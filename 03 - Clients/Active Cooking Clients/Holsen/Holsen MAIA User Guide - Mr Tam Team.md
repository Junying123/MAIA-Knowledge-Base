---
owner: Gareth
status: draft
last_reviewed: 2026-06-25
client: Holsen
lark_url:
---

# MAIA User Guide — Holsen Team

**Prepared for:** Mr. Tam and Holsen operations team
**Prepared by:** MAIA / Mindhive
**Date:** June 2026
**System URL:** https://maia-fe-holsen.vercel.app

---

## What is MAIA?

MAIA is your order-to-cash system. It connects your WhatsApp chatbot, sales team, logistics team, and finance team into one workflow — from the moment a customer sends a Purchase Order to the moment you collect payment.

---

## How MAIA Works — The Big Picture

```
Customer PO (WhatsApp / Email / PDF)
        ↓
  Sales Order (SO) — created by Sales team
        ↓
  Finance Approval — Finance reviews and approves
        ↓
  Delivery Note (DN) — Logistics team creates
        ↓
  Pick List — Warehouse picks items by batch
        ↓
  Invoice — Finance generates and sends to customer
        ↓
  Receipt — Payment received and recorded
```

---

## Section 1: Receiving a Customer Order (Sales Team)

### Step 1 — Customer sends PO via WhatsApp

Your customer sends their Purchase Order to the **MAIA Sales Chatbot** on WhatsApp.

They can send:
- A text message ("I need 500 kg Copper Sulfate")
- A photo of their PO
- A PDF file

MAIA reads the PO and extracts: customer name, items, quantities, delivery date.

> **Important:** The customer must already be set up in MAIA and the items ordered must match MAIA's product list. If items are missing, contact your MAIA admin.

---

### Step 2 — Review and Create Sales Order

After the customer sends their PO, the Sales team receives a notification on WhatsApp.

1. Log in to MAIA: https://maia-fe-holsen.vercel.app
2. Go to **Sales Workspace → Sales Orders**
3. Review the extracted order details — check customer name, items, quantities, pricing
4. Correct any extraction errors (especially for handwritten or unclear POs)
5. Confirm the **selling price** — pricing is negotiated and must be entered by the Sales Agent
6. Click **Submit**

> **Minimum Price:** MAIA will warn you if you enter a price below the minimum price for an item. Check with management before overriding.

> **Duplicate Check:** If a PO number already exists for the same customer, MAIA will flag it as a duplicate and block creation. Verify before proceeding.

---

### Step 3 — Wait for Finance Approval

Once submitted, the Sales Order enters **Finance review**.

The Finance team will:
- Check customer requirements and order accuracy against the PO
- Verify credit limit and payment terms

The order can be:
- **Approved** — proceeds to Delivery Note
- **Amended** — Sales Agent makes corrections and resubmits
- **Clarification Requested** — order paused until issue is resolved

---

## Section 2: Creating a Delivery Note (Logistics Team)

After Finance approves the Sales Order, Logistics creates a Delivery Note.

### Step 1 — Open the Sales Order

1. Log in to MAIA
2. Go to **Logistics Workspace → Sales Orders**
3. Find the approved order
4. Click **Create Delivery Note**

### Step 2 — Select Warehouse

> **Important:** Always check the warehouse field. Select **Main Warehouse** for all standard trading items.

If the system pre-selects a different warehouse, change it to **Main Warehouse** before proceeding.

### Step 3 — Select Batch Numbers

For each item on the Delivery Note, select the **batch number** to fulfil from:

1. Click the batch number field on each line item
2. Select the correct batch from the list (check expiry date — use oldest batch first)
3. Confirm the quantity matches what you are picking

> **Poison / Hazardous items:** MAIA will display a "POISON FORM REQUIRED" alert. The physical Poison Form must be printed and handed to the driver before departure.

### Step 4 — Set Delivery Date

Enter the expected delivery date for this Delivery Note.

### Step 5 — Submit

Click **Submit**. MAIA will generate:
- **Delivery Note (DO)** — driver carries this
- **Pick List** — warehouse team uses this to pick items by batch

> If MAIA shows an error about insufficient stock, check that you selected the correct warehouse and that the batch has enough quantity. Do not submit a Delivery Note if stock is insufficient.

---

### Partial Delivery

If you cannot fulfil the full quantity in one delivery:

1. Create a Delivery Note for the quantity you can deliver now
2. Submit it normally
3. When you are ready to fulfil the remainder, go back to the same Sales Order and create another Delivery Note for the remaining quantity

The Sales Order will show overall fulfilment progress (e.g., 50% fulfilled).

---

## Section 3: Pick List (Warehouse Team)

After the Delivery Note is submitted, a **Pick List** is generated.

The Pick List shows:
- Item name and description
- Quantity to pick
- Batch number to pick from
- Warehouse location

Warehouse team picks the items by batch number and prepares the goods for delivery.

Once picking is complete, mark the Pick List as **Complete** in MAIA.

---

## Section 4: Invoice (Finance Team)

After the Delivery Note is submitted, Finance generates the Invoice.

1. Go to **Finance Workspace → Sales Orders** or open the Delivery Note
2. Click **Create Invoice**
3. Review: items, quantities, pricing, tax, payment due date
4. Payment due date = **Invoice creation date + 30 days** (Net 30 terms)
5. Click **Submit**

Send the Invoice to the customer via email or WhatsApp.

> **Tax:** Some items are tax-exempt (0%). Most items are taxed at 10%. If you see an unexpected tax amount, check the item's tax setting with your MAIA admin before sending.

---

## Section 5: Recording Payment (Finance Team)

When the customer pays:

1. Go to the Invoice in MAIA
2. Click **Create Receipt**
3. Enter payment amount and payment date
4. Submit

The Sales Order lifecycle is now complete.

---

## Section 6: Batch Number Management (Warehouse / Admin)

Batch numbers are critical for chemical and hazardous items. Every physical batch of stock must be recorded in MAIA.

### Creating a New Batch (when stock arrives)

1. Go to **Logistics Workspace → Stock Entry**
2. Create a new Stock Entry
3. Select the item
4. Enter:
   - Batch number (from supplier label)
   - Quantity received
   - Warehouse (select **Main Warehouse**)
   - Expiry date (critical — MAIA uses this for FEFO picking)
5. Submit

The batch will now appear as available stock and can be selected when creating Delivery Notes.

### Checking Stock Levels

1. Go to **Logistics Workspace → Inventory**
2. Search for an item
3. View available quantity by warehouse and by batch

---

## Section 7: Chatbot Quick Reference

Your MAIA WhatsApp chatbot is connected to **@maia_holsen_bot** on Telegram (and the MAIA Sales number on WhatsApp).

| Action | How to do it |
|--------|-------------|
| Receive customer PO | Customer sends PO to Sales chatbot; Sales Agent reviews in MAIA web |
| Check stock | Ask the chatbot: "How much [item name] do we have?" |
| Create Delivery Note | Go to web app → Logistics Workspace |
| Check order status | Go to web app → Sales Workspace → Sales Orders |

---

## Section 8: Common Issues and What to Do

| Problem | What to check | Who to contact |
|---------|---------------|---------------|
| Wrong price on Sales Order | Check if customer-specific pricing is set up in MAIA | MAIA Admin (Gareth) |
| Delivery Note won't submit | Check: correct warehouse selected? Enough stock in that warehouse? | MAIA support |
| Batch number not showing | Check if stock entry was created for that batch | Warehouse admin / MAIA support |
| Item not found in system | Item may not be set up in MAIA | MAIA Admin (Gareth) |
| Wrong tax amount on Invoice | Check item's tax classification in MAIA | MAIA Admin (Gareth) |
| Customer not found | Customer may not be set up in MAIA | MAIA Admin (Gareth) |
| Payment due date looks wrong | Should be invoice creation date + 30 days; report if different | MAIA support |

---

## Section 9: Who to Contact

| Issue type | Contact |
|-----------|---------|
| System bugs, something broken | Gareth — garethng@lunrai.com |
| User access / login issues | Gareth — garethng@lunrai.com |
| New item or customer setup needed | Gareth — garethng@lunrai.com |
| Training or walkthrough | Gareth — garethng@lunrai.com |

---

## What's Coming in the Next Phase

The following features are being built and will be available after Phase 1:

- **Pick List notifications** — WhatsApp/Telegram alert sent automatically to the logistics team when a new Pick List is ready (currently: logistics team checks the web app)
- **C3 compliance certificate** — system-generated C3 documents for controlled substances (currently: manual preparation)
- **AutoCount integration** — direct data sync with AutoCount accounting system (currently: CSV export and manual upload)

---

## See Also (Internal)

- [[Product/SOW for MAIA Holsen]] — full scope of MAIA features for Holsen
- [[UAT/Holsen Go-Live Action Plan - 2026-06-25]] — internal go-live status
