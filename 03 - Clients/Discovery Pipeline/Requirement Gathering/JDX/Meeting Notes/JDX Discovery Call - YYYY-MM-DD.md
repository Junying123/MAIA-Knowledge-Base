---
owner: [Your Name]
status: draft
last_reviewed: 2026-03-26
meeting_date: YYYY-MM-DD
client: JDX
meeting_type: discovery
---

# Discovery Meeting Notes — JDX — [Date]

**Date:** YYYY-MM-DD
**Time:** HH:MM – HH:MM
**Location / Platform:** [Zoom / Google Meet / In-person]
**Attendees:**
- [PM Name] — MAIA PM
- [GTM Name] — MAIA GTM
- [Boss Name, Title] — JDX
- [Name, Title] — JDX

**Reference:** [[03 - Clients/Discovery Pipeline/Requirement Gathering/JDX/Discovery Call Questionnaire]]

---

> **Context before this call:** JDX runs 3 completely separate sales channels — consignment to large grocers (Giant/AEON ~50%), salesman direct spot-sales to bottle/packet shops (~20–30%), and B2C via website/pop-up (remaining %). None of these follow a standard PO → SO flow. Current systems: SQL ERP + unnamed third-party salesman app, disconnected. Forecasting is done by gut feel (boss's words), likely seasonal. GTM flagged this as a likely customisation case. Boss also owns a palm oil business (pure B2B, PO-based) that could be a cleaner MAIA fit.
>
> **How to use:** Fill each section live during the call. Use `>` blockquotes for direct quotes. Mark anything unresolved with `⚠️`. Flag items needing follow-up with `→ FU`.

---

## 1. Company & Business Overview

**Goal:** Re-confirm the business structure and channels before diving in.

### Business overview
- Core business (what they sell, who to):
- Number of SKUs / product range:
- Number of outlets / customers they serve:
- Team size (rough):

### Sales channel split — confirm numbers
- Consignment to Giant / AEON: ~50% — actual %:
- Salesman direct to bottle/packet shops: ~20–30% — actual %:
- B2C (website + pop-up): remaining % — actual %:
- Any other channels not mentioned:

### Who's in the room today
- Decision maker: Boss (Y/N confirmed):
- Who manages day-to-day ops:
- Who manages finance:
- Who manages warehouse/logistics:

⚠️ Follow-ups:
-

---

## 2. Channel 1 — Consignment (Giant Grocer / AEON)

**Goal:** Understand the full consignment cycle end-to-end. This is ~50% of revenue and the most complex channel — no PO, JDX controls placement.

### Outlets & products
- Which Giant / AEON outlets do they supply:
- How many outlets total:
- Which products go to consignment vs direct:
- Do different outlets carry different product mixes:

### Placement decision
- Who decides how much stock to place at each outlet:
- How is the quantity per product per outlet decided:
- Is there any data or system behind this, or purely by judgment:
- How often is placement reviewed:

### Sell-through tracking
- How do they know what Giant/AEON has sold:
  - Does Giant/AEON send a sell-through report: (frequency, format)
  - Or does JDX go in and check physically:
  - Or via system integration:
- Who on JDX's side monitors sell-through:

### Invoicing
- When is the invoice triggered — on placement, on sell-through report, or periodic:
- Who creates the invoice and in which system:
- Invoice format / doc flow:

### Replenishment
- What triggers a replenishment visit:
- Who physically restocks the shelf / outlet:
- How is the replenishment quantity decided (e.g. top up to 100, or based on sell-through):
- How often do they replenish each outlet:

### Pain points in this channel (let them speak)
-
-

⚠️ Follow-ups:
-

---

## 3. Channel 2 — Salesman Direct Sales (Bottle / Packet Shops)

**Goal:** Map the salesman app workflow end-to-end. No PO — salesperson visits, takes order on spot, invoices on spot, collects payment on spot.

### Salesman team
- How many salespeople:
- How are territories / routes divided:
- How often do they visit each shop:

### Order capture flow (step by step)
1. Salesperson arrives at bottle/packet shop:
2. How order is taken (verbal, picks from catalog on app):
3. How order is entered into the app:
4. Invoice created — on the spot in the app (Y/N):
5. Payment collected — on the spot (Y/N):
   - Cash only, or also transfer / QR:
6. Goods delivered — same visit, or next day:

### The salesman app
- App name / provider (confirm — GTM couldn't recall):
- What it does today:
  - Order capture:
  - Invoice generation:
  - Payment recording:
  - Stock / inventory visibility:
- What it does NOT do (known gaps):
- Does the app sync back to the SQL ERP (Y/N):
  - If no — how does sales data get into the main system:
- Is the app on the boss's radar to replace or keep:

### Delivery for this channel
- Does the salesperson carry stock on the van and deliver immediately:
- Or is it a separate delivery the next day:
- Who arranges the delivery if not same-visit:

### Pain points in this channel (let them speak)
-
-

⚠️ Follow-ups:
-

---

## 4. Channel 3 — B2C (Website / Pop-up Sales)

**Goal:** Understand how direct consumer sales work and whether they need to be in scope.

### Website sales
- Which platform (Shopify / WooCommerce / custom):
- Average orders per month:
- How are orders received — email notification, dashboard:
- Who fulfils website orders:
- Payment method (FPX / credit card / COD):

### Pop-up sales
- How often do they do pop-ups:
- How are sales recorded at pop-ups (app, POS, manual):
- Inventory brought to pop-up — how tracked:
- Payment at pop-up (cash / QR):

### Sync to main system
- Do website and pop-up sales go into the SQL ERP:
- Or handled separately:

### Is B2C in scope for MAIA
- Do they want MAIA to handle this channel too, or focus on B2B first:

⚠️ Follow-ups:
-

---

## 5. Inventory & Forecasting

**Goal:** This is the core pain point — get the real picture behind the "gut feel" forecasting and how stock is managed across all channels.

### Inventory overview
- Where is inventory currently tracked (SQL ERP, Excel, both):
- Is there a single inventory pool or separated by channel:
- Who is responsible for inventory management:
- How many SKUs total:

### Forecasting — dig deeper than "by feeling"
- Boss said forecasting is "by feeling" — is there any data / Excel behind it:
  - If yes: what does the file look like, who maintains it:
  - If no: how does the team actually decide numbers:
- Who makes the final call on how much to allocate per outlet per product:
- How far in advance do they plan (weekly / monthly / quarterly):

### Seasonal demand
- CNY was mentioned — what other seasonal peaks exist:
- How much does demand shift between peak and off-peak (rough %):
- How does allocation change during CNY vs normal months:
- Have they ever gotten it badly wrong — over or under stocked significantly:

### Replenishment across all channels
- How is restock triggered (gut feel again, or threshold, or schedule):
- Who manages the reorder from supplier:
- Lead time from supplier:

### Biggest forecasting / inventory pain point (let them speak)
-
-

⚠️ Follow-ups:
-

---

## 6. Finance & Payment

**Goal:** Understand how money flows across 3 very different channels — each likely has different payment terms.

### Payment by channel
| Channel | Payment timing | Method | Credit terms |
|---------|---------------|--------|--------------|
| Consignment (Giant/AEON) | | | |
| Salesman (bottle shops) | | | |
| B2C (website/pop-up) | | | |

### Credit customers (likely Giant / AEON)
- Are Giant / AEON on credit terms (Y/N):
  - If yes — how many days:
- How is credit limit managed for these accounts:
- Who monitors overdue accounts:
- What happens if payment is overdue:

### Cash customers (likely salesman channel)
- Salesman collects cash on spot — confirmed (Y/N):
- Is cash handed back to office, or deposited directly:
- How is this recorded in the system:

### Invoicing
- Who creates invoices for each channel:
  - Consignment invoices — when, who, in which system:
  - Salesman invoices — app or ERP:
  - B2C invoices — auto from platform or manual:
- Invoice numbering — same sequence across channels or separate:

### Payment collection & reconciliation
- How does customer notify payment (WhatsApp slip, email, auto):
- Who receives and records:
- Bank reconciliation — who does it, how often:
- Any AR aging report currently in use:

⚠️ Follow-ups:
-

---

## 7. Warehouse & Delivery

**Goal:** Understand how physical goods move for each channel — very different for consignment vs salesman vs B2C.

### Warehouse setup
- How many warehouse / storage locations:
- Is stock separated by channel or one shared pool:
- How is picking/packing done today:
- Who generates the DO:

### Delivery by channel
| Channel | Who delivers | How scheduled | Timeframe |
|---------|-------------|---------------|-----------|
| Consignment replenishment | | | |
| Salesman channel | | | |
| B2C (website orders) | | | |

### Third-party logistics
- Do they use DHL or any courier (Y/N):
  - If yes — for which channel:
- Own van / driver (Y/N):
  - If yes — how many vehicles:

### Proof of delivery
- Do customers sign a physical DO (Y/N):
- Any digital POD used (Y/N):
- For consignment — do Giant/AEON sign anything on replenishment:

### Failed delivery
- How often does delivery fail:
- What's the rescheduling process:
- Is the driver-photo-to-coordinator process currently in place or desired:

⚠️ Follow-ups:
-

---

## 8. Returns & Credit Notes

**Goal:** Understand how returns work across channels and how credit notes are issued.

### Return scenarios by channel
- Consignment returns — what happens to unsold stock after a period:
  - Does Giant/AEON return unsold product to JDX:
  - Or does JDX pull it back during replenishment:
- Salesman channel returns — does the salesperson handle returns on the spot:
- B2C returns — how does a consumer return:

### Return process
- How customer initiates return:
- Who on JDX side handles it:
- Return rate estimate per channel:

### Product assessment
- How is damaged vs non-damaged assessed:
- Non-damaged → exchanged — is this a new invoice or a swap:
- Damaged → inventory adjusted and disposed — who approves:
- F&B products: is product expiry / shelf life a factor in returns:

### Credit notes
- When is a credit note issued vs a direct exchange:
- Who creates the CN and in which system:
- Can CN offset a future invoice, or only cash refund:
- Two CN types seen in diagram (regular item / custom board) — does JDX have similar:

⚠️ Follow-ups:
-

---

## 9. Current Systems & Integrations

**Goal:** Map every tool in use and understand where data breaks down between them.

### Full system list

| System | Purpose | Used by | Integrated to anything? |
|--------|---------|---------|------------------------|
| SQL ERP (confirm name) | Main ERP / accounting | | |
| Third-party salesman app (name TBC) | Field sales, invoicing | Salespeople | |
| | | | |
| | | | |

### Data flow today
- When a salesman makes a sale — does it appear in the ERP automatically or manually entered later:
- When Giant/AEON sell-through report arrives — how does it get into the ERP:
- Is there a single customer master list across all channels, or separate:
- Where does the finance team go to see total AR:

### Known system pain points
-
-

### MAIA scope question
- Would they want MAIA to replace the salesman app, or integrate with it:
- Are they open to replacing the SQL ERP with MAIA, or just layer on top:
- Accounting — is Autocount / SQL Accounting the same system, or separate:

⚠️ Follow-ups:
-

---

## 10. Palm Oil Sister Business

**Goal:** Assess if this is a secondary MAIA opportunity — this one is a clean B2B PO-based fit.

- Company name:
- What they sell / to whom (Philippines B2B confirmed — expand):
- Current system:
- Order flow (PO from customer → SO → DO → Invoice confirmed?):
- Scale (volume, team size):
- Is boss open to MAIA for this business too (Y/N):
- Would this be a separate engagement or bundled with JDX:
- Timeline if interested:

⚠️ Follow-ups:
-

---

## 11. Samples to Collect

Ask at the end of the call. Mark what's received.

**Documents:**
- [ ] Sales Order (from any channel)
- [ ] Invoice — consignment sell-through invoice
- [ ] Invoice — salesman app invoice (screenshot or export)
- [ ] Delivery Order (DO)
- [ ] Credit Note sample
- [ ] Quotation (if used at all)

**Data / lists:**
- [ ] Customer list (anonymised is fine — just need fields/structure)
- [ ] Price list (per channel if different)
- [ ] Inventory / product list (SKU, name, category)
- [ ] Product catalog / product info sheet
- [ ] Sell-through report sample from Giant or AEON (if they receive one)
- [ ] Any forecasting file (Excel or otherwise)

**Pending — to follow up with:**
-

---

## Parking Lot

| # | Item | Raised By | Action |
|---|------|-----------|--------|
| 1 | | | |
| 2 | | | |
| 3 | | | |

---

## Key Takeaways

> PM's synthesis after the call — fill this in after, not during.

- **Channel 1 (Consignment):**
- **Channel 2 (Salesman):**
- **Channel 3 (B2C):**
- **Biggest pain point:**
- **Fit assessment (first read):**

---

## Action Items

| # | Action | Owner | Due |
|---|--------|-------|-----|
| 1 | | | |
| 2 | | | |
| 3 | | | |

---

## Next Steps

- [ ] Fill in full `[[03 - Clients/Discovery Pipeline/Requirement Gathering/JDX/Requirement Gathering]]`
- [ ] Complete Fit Assessment table
- [ ] Share with KB Lead for fit verdict decision
- [ ] Update pipeline tracker: `[[03 - Clients/Discovery Pipeline/README]]`
- [ ] Schedule follow-up / demo if proceeding: [Date TBC]

---

**See Also:**
- [[03 - Clients/Discovery Pipeline/Requirement Gathering/JDX/Discovery Call Questionnaire]]
- [[03 - Clients/Discovery Pipeline/GTM Briefs/JDX/JDX]] — GTM brief
- [[03 - Clients/Discovery Pipeline/GTM Briefs/JDX/JDX Transcript]] — pre-sales transcript
- [[02 - PM Playbook/Templates/[Template] Discovery Requirement Gathering]]
