---
owner: Gareth
status: draft
last_reviewed: 2026-06-25
client: Holsen
---

# Dev Brief — Holsen UAT Issues (2026-06-25)

**For:** Ivan, Brendan, Jermaine
**From:** Gareth
**Date:** 25 June 2026
**Environment:** https://maia-fe-holsen.vercel.app

---

## Holsen Operational Context (Read First)

Understanding the actual user flows is critical — some "bugs" are only bugs in the context of how Holsen's team will operate.

### User Flows

**Sales Staff + Warehouse Staff → Chatbot (WhatsApp)**
1. Customer sends PO → Sales staff uploads PO or sends message to MAIA chatbot
2. Chatbot extracts order → creates SO
3. After logistics assigns batch and DN is submitted, pick list is generated
4. **Chatbot must notify warehouse staff** and share the **pick list URL**
5. Warehouse staff clicks URL → reviews items → updates actual picked qty → marks pick list complete

**Logistics Manager → Frontend (Web App)**
1. Reviews SO created by chatbot → **submits SO**
2. Converts SO to Delivery Note (DN)
3. Assigns batch numbers to each line item
4. Submits DN → triggers pick list generation
5. Pick list PDF is optional (warehouse uses URL link, not PDF)

### Pricing Model (Important — affects B6)

| Field | Holsen setup |
|-------|-------------|
| Standard price | **RM0 by default** for ALL items (trading + manufacturing) — not used |
| Minimum price | Set **manually** by management per product — guideline floor |
| Customer pricing | **Not auto-populated** — sales staff enter price manually per SO as instructed by boss |
| Historical pricing | Reference only — staff look up previous order prices themselves |
| Who decides price | **Boss/management** — based on customer profile, payment terms, credit usage. Pricing negotiated verbally or via boss approval before SO is created. |

**Source:** Fireflies 2026-06-25: *"Payment terms. Credit usage. Determined by management. So minimum price as guideline."*

### Stock / Batch Model (Go-Live)

- Full stock ledger to be ingested at go-live: batch number, qty in, qty out, current balance
- Items can have **multiple batches per customer** (e.g., C3-restricted batches locked to specific customer)
- Batch assignment on DN → carries to pick list so warehouse knows exactly which batch to pull

---

## Sources of Truth

| Source | Date | Session | Issues |
|--------|------|---------|--------|
| **Granola A** | 2026-06-22 | Close UAT — live system testing (~2 hrs, Gareth + Mr. Tam) | B1, B2, B3, B4, B7 |
| **Granola B** | 2026-06-25 | Go Live prep (~1 hr, Gareth + Mr. Tam) | B6, B8 |
| **Fireflies** | 2026-06-25 | Same meeting as Granola B (AI summary + action items) | B6 (corroborates) |
| **KB UAT folder** | Pre-existing | `DN to Pick List - Batch Number Test Cases.md` | B5 |

Transcripts are auto-generated and garbled. Quote fragments below are evidence anchors, not verbatim.

---

## Issue Summary

| ID | Issue | Priority | Confidence |
|----|-------|----------|-----------|
| B1 | DN defaults to wrong warehouse → negative stock error on submit | P1 Blocker | High |
| B2 | No pre-submit stock check on DN — error fires post-submit | P1 Blocker | High |
| B3 | Payment due date uses delivery date not invoice creation date | P1 Blocker | High |
| B4 | Tax: item-level "no tax" vs system 10% — override unverified | P2 Verify | Medium |
| B5 | Batch number not carrying from DN to Pick List | P1 Blocker | Unknown — test cases unrun |
| B6 | Minimum price not hard-blocking SO submit when price below floor | P1 Blocker | Confirmed |
| B7 | PDF showing discount % — Holsen requires zero discount display | P1 Blocker | High |
| B8 | Chatbot not sending pick list URL to warehouse after pick list created | P1 Blocker | High |

---

## B1 — Delivery Note Defaults to Wrong Warehouse [P1 — HIGH]

**Source:** Granola A (2026-06-22 Close UAT)

**Evidence:**
> *"Negative stock quantity in Warehouse 0042 — this is the ABC component warehouse."*
> *"Would your phone to go warehouse or main warehouse?"*
> *"To go main warehouse. So all [stock is] reserve[d] there."*

**What happened:**
DN created from approved SO pre-selected **Warehouse 0042 (ABC Component)** instead of **Main Warehouse**. Zero trading stock in 0042 → negative stock error on submit. Mr. Tam manually switched to Main Warehouse → DN submitted successfully.

**Fix:** DN creation reads `item.default_warehouse` and pre-populates. For Holsen, all trading items → Main Warehouse.

---

## B2 — No Pre-Submit Stock Check on DN [P1 — HIGH]

**Source:** Granola A (2026-06-22 Close UAT)

**Evidence:**
> *"Negative stock quantity in Warehouse 0042."* [fires after submit, not before]
> *"Okay let's try something."* [user had to cancel, switch warehouse, retry]

**What happened:**
Submit went through with invalid warehouse/zero stock. Error only returned after failed write. No pre-submit validation.

**Fix:** Pre-submit check: for each DN line item, `available_qty_in_selected_warehouse >= requested_qty`. Block submit on failure. Message: *"Insufficient stock: [Item] — [X] kg available, [Y] kg required."*

Note: B1 causes B2 in practice. Fix both independently.

---

## B3 — Payment Due Date Uses Delivery Date Not Invoice Creation Date [P1 — HIGH]

**Source:** Granola A (2026-06-22 Close UAT)

**Evidence:**
> *"Type of payment is not issue from another date right — instead of delivery date."* (Mr. Tam flagging)
> *"By write, system default [calculates] 30 days from delivery."* (current behaviour)
> *"Creation date. So commute default now as it was."* (correct behaviour)
> *"View and reference it cannot be after. Okay creation date okay."* (Mr. Tam confirming)

**Fix:** Due date = `invoice.creation_date + payment_terms_days`. Not `delivery_note.delivery_date + payment_terms_days`.

---

## B4 — Tax Override: Item "No Tax" vs System Default 10% [P2 — VERIFY]

**Source:** Granola A (2026-06-22 Close UAT)

**Evidence:**
> *"No tax override 10%"* / *"No text overact 10%"*
> *"Override."* (confirming expected behaviour)

Some Holsen items are "No Tax" at item level. System/customer default is 10%. Item-level "No Tax" must override 10% → invoice line shows 0%.

**Ask:** Confirm tax hierarchy = **Item > Customer > System**. Test all three scenarios:
1. Customer has 10% setting + item is "No Tax"
2. System default 10% + item is "No Tax" (no customer-level setting)
3. Tax set at SO line-item level vs inherited from item master

---

## B5 — Batch Number Not Carrying from DN to Pick List [P1 — UNVERIFIED]

**Source:** `UAT/DN to Pick List - Batch Number Test Cases.md`

**Test cases:** HOL-LOG-DN-PL-001 and HOL-LOG-DN-PL-002 — steps written, results blank.

**Why critical:** Logistics staff assign batch on DN → warehouse staff receive pick list URL (via chatbot, see B8) → they need to see which batch to pull. If batch is missing from pick list, warehouse can't fulfill correctly — especially for chemical/hazardous items with multiple batches per customer.

**Ask:** Run HOL-LOG-DN-PL-001 and HOL-LOG-DN-PL-002. Record results. If batch missing, trace DN → pick list generation flow.

---

## B6 — Minimum Price Not Hard-Blocking SO Submission [P1 — CONFIRMED]

**Source:** Granola B (2026-06-25 Go Live) + Fireflies (same session)

**Evidence:**
> *"Standard price link but the have minimum price — stop order from going through."*
> *"Minimum price formatting, but more vendor case your strictly enforced… nothing."* (current: not enforcing)
> *"Gareth: Confirm enforcement rules for minimum price and implement controls preventing orders below minimum price thresholds (45:07)"* (Fireflies action item)

**Confirmed behaviour (Gareth):** **Hard block.** SO cannot be submitted if any line item price is below that item's configured minimum price. No override, no soft warning — submission is blocked.

**Who submits SO:** Logistics manager (via frontend). Boss decides pricing verbally before the order is keyed in. If logistics manager enters a price below minimum, system blocks them at submit — they must go back to boss to reconfirm before proceeding.

**What must happen:**
- On SO submit: for each line item, `entered_unit_price >= item.minimum_price`
- If any line fails → block submit, show: *"Price below minimum for [Item]: entered RM[X], minimum RM[Y]."*
- No override path at submission — logistics manager must correct price or escalate to boss

**Two parts:**
1. (Config) Gareth loads minimum prices per product — prerequisite, not dev work
2. (Code) Pre-submit check on SO: enforce `entered_price >= min_price` per line. If logic doesn't exist, build it.

**Ask:** Does this enforcement check exist in code already? If yes, it just needs min prices configured to activate. If no, build it.

---

## B7 — PDF Documents Showing Discount % [P1 — HIGH]

**Source:** Granola A (2026-06-22) + Granola B (2026-06-25)

**Evidence from Granola A (2026-06-22 Close UAT):**
> *"We don't need to show any discount. There's no no need to show discount."* (Mr. Tam — explicit requirement)

**Evidence from Granola B (2026-06-25 Go Live):**
> *"Try generating a pdf… different discount."* (Gareth generating test PDF)
> *"So it has a discount."*
> *"You show 49% of the… 49% offer."* (49% discount displayed on document)
> *"oh, shit."* (Gareth — unexpected)

**Context:** Standard price = RM0 for Holsen. If system calculates discount as `(standard_price - entered_price) / standard_price`, result would be undefined/100% when standard = 0. The 49% figure suggests standard price may have been set to a non-zero value during testing, causing a visible discount column to appear.

**Requirement:** **No discount column, discount %, or discount amount on any customer-facing PDF** for Holsen — Quotation, SO, Invoice, Delivery Note.

**Fix:** Suppress/hide discount field on all PDF templates for Holsen's tenant/instance. If template setting exists → toggle off. If hardcoded → suppress for this client.

---

## B8 — Chatbot Not Sending Pick List URL to Warehouse [P1 — HIGH]

**Source:** Granola A (2026-06-22 Close UAT)

**Evidence:**
> *"Before another pick list complete. So for checkup pick list. Third party app. As in. Generate down the pick list — relevant or just a WhatsApp to notify. Like employee based upon generator PDF."*
> *"WhatsApp / Telegram inform [them] that you [have a] pick list."*
> *"Notify to open the big list. You know expect. Number quantity… [notification] well didn't ha."* ("notification didn't happen")

**Expected flow (confirmed by Gareth):**
1. Logistics staff submits DN (frontend) → pick list generated
2. **Chatbot automatically sends pick list URL to warehouse staff** (WhatsApp/Telegram)
3. Warehouse staff clicks URL → sees items + batch numbers → updates actual picked qty → marks pick list complete
4. Pick list PDF is optional — the URL-based flow is the primary workflow

**What happened in UAT:**
Pick list was generated but chatbot **did not send notification** to warehouse staff. Warehouse staff had no way to know a pick list was ready without manually checking the web app.

**This is not a feature request — it is required for Holsen's go-live workflow.** Warehouse staff do not use the frontend; the chatbot URL is their only touchpoint.

**Fix:** After pick list is generated from DN submit → trigger chatbot message to configured warehouse WhatsApp/Telegram number with pick list URL. Confirm:
- Which number/group receives the notification (Gareth to confirm with Mr. Tam)
- Whether URL requires authentication or is shareable as a direct link
- Whether warehouse staff can update qty + mark complete from the URL without a login

---

## Go-Live Stock Ingestion (Context for Dev)

At go-live, Holsen's full stock ledger must be ingested into MAIA before any live orders:

| Data | Detail |
|------|--------|
| Batch numbers | Each physical batch has a unique batch number |
| Stock qty in | Received quantity per batch |
| Stock qty out | Shipped/consumed quantity per batch |
| Current balance | Derived from in − out |
| Batch-customer lock | Some batches are customer-specific (C3 restricted) — only visible/available to that customer |

**Multiple batches per item:** An item like Sodium Cyanide may have 3 active batches — one locked to Customer A, one to Customer B, one free stock. The DN batch assignment must respect this.

Gareth is coordinating data ingestion with Mr. Tam. Dev team should verify:
- Stock entry supports qty-in / qty-out history per batch (not just current balance)
- Batch-customer lock (C3 restriction) prevents wrong customer from seeing/ordering that batch

---

## Out of Scope for This Brief

| Item | Type | Note |
|------|------|------|
| C3 compliance certificate generation | Phase A3 deferred | SOW scope |
| COA document generation | Phase A3 deferred | SOW scope |
| AutoCount/UBS integration | Phase A1 CSV workaround in place | Full integration August 2026 |
| Excel formula errors in Mr. Tam's migration files | Data prep — Holsen side | Not MAIA system |
| Minimum price data entry (per product) | Config — Gareth action | Prerequisite for B6 to be testable |

---

## See Also

- [[UAT/Holsen Go-Live Action Plan - 2026-06-25]] — full gates + config gaps
- [[UAT/DN to Pick List - Batch Number Test Cases]] — B5 test cases
- [[Holsen MAIA User Guide - Mr Tam Team]] — handover guide
- [[Product/SOW for MAIA Holsen]] — Phase A1/A3 scope
