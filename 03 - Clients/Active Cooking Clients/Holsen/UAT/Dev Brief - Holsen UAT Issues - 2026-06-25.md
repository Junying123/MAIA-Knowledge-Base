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

## Sources of Truth

Every issue below is attributed to a specific source. Transcripts were auto-generated and garbled — quote fragments are evidence anchors, not verbatim.

| Source | Date | Session | What it covers |
|--------|------|---------|----------------|
| **Granola A** | 2026-06-22 | Close UAT (Gareth + Mr. Tam, ~2 hrs live system testing) | B1, B2, B3, B4, B7 |
| **Granola B** | 2026-06-25 | Go Live prep (Gareth + Mr. Tam, ~1 hr data prep) | B6 |
| **Fireflies** | 2026-06-25 | Same meeting as Granola B (auto-summary + action items) | B6 (corroborates) |
| **KB UAT folder** | Pre-existing | `DN to Pick List - Batch Number Test Cases.md` | B5 |

---

## Issue Summary

| ID | Issue | Priority | Source | Confidence |
|----|-------|----------|--------|-----------|
| B1 | Delivery Note defaults to wrong warehouse → negative stock error | P1 Blocker | Granola A | High — observed live |
| B2 | No pre-submit stock check on DN — error fires post-submit | P1 Blocker | Granola A | High — observed live |
| B3 | Payment due date uses delivery date not invoice creation date | P1 Blocker | Granola A | High — Mr. Tam flagged directly |
| B4 | Tax: item-level "no tax" vs system 10% — override hierarchy unverified | P2 | Granola A | Medium — discussed but not confirmed broken |
| B5 | Batch number not carrying from DN to Pick List | P1 Blocker | KB test cases | Unknown — test cases exist, unrun |
| B6 | Minimum price not blocking SO when price is below floor | P1 Blocker | Granola B + Fireflies | Medium — implied by "strictly enforced… nothing" |
| B7 | PDF/document showing discount % — Holsen requires no discount shown | P1 Blocker | Granola A + B | High — explicit in both sessions |

---

## B1 — Delivery Note Defaults to Wrong Warehouse [P1 — HIGH CONFIDENCE]

**Source:** Granola A (2026-06-22 Close UAT)

**Evidence:**
> *"Negative stock quantity in Warehouse 0042 — this is the ABC component warehouse."*
> *"Would your phone to go warehouse or main warehouse?"*
> *"To go main warehouse. So all [stock is] reserve[d] there."*

**What happened:**
DN created from approved SO pre-selected **Warehouse 0042 (ABC Component)** instead of **Main Warehouse**. Zero trading stock in 0042 → negative stock error on submit. Mr. Tam manually switched to Main Warehouse → DN submitted successfully.

**Root cause:** DN not reading item's `default_warehouse` field, or that field is not set correctly.

**Fix:** DN creation reads `item.default_warehouse` and pre-populates accordingly. For Holsen, all trading items → Main Warehouse.

---

## B2 — No Pre-Submit Stock Check on DN [P1 — HIGH CONFIDENCE]

**Source:** Granola A (2026-06-22 Close UAT)

**Evidence:**
> *"Negative stock quantity in Warehouse 0042."* [fires after submit]
> *"Okay let's try something."* [user had to cancel and retry after error]

**What happened:**
System allowed DN submit with invalid warehouse/zero stock. Error only returned post-submit after write attempt. No client-side or pre-commit validation.

**Fix:** Pre-submit check on DN: for each line item, `available_qty_in_selected_warehouse >= requested_qty`. If check fails → block submit with clear message: *"Insufficient stock: [Item] — [X] kg available, [Y] kg required."*

**Note:** B1 causes B2 in practice (wrong warehouse default → zero stock). Fix both independently.

---

## B3 — Payment Due Date From Delivery Date, Not Invoice Creation Date [P1 — HIGH CONFIDENCE]

**Source:** Granola A (2026-06-22 Close UAT)

**Evidence:**
> *"Type of payment is not issue from another date right — instead of delivery date."* (Mr. Tam flagging)
> *"By write, system default [calculates] 30 days from delivery."* (observing current behaviour)
> *"Creation date. So commute default now as it was."* (correct behaviour)
> *"View and reference it cannot be after. Okay creation date okay."* (confirming)

**What happened:**
Invoice due date auto-calculates as `delivery_date + 30 days`. Holsen's terms = **Net 30 from invoice creation date**.

Example where this matters: SO with delivery date 1 Aug 2026, invoice created 22 Jun 2026 → system gives 1 Sep due date, correct is 22 Jul.

**Fix:** Due date = `invoice.creation_date + payment_terms_days`. Not `delivery_note.delivery_date + payment_terms_days`.

---

## B4 — Tax Override: Item "No Tax" vs System Default 10% [P2 — VERIFY]

**Source:** Granola A (2026-06-22 Close UAT)

**Evidence:**
> *"No tax override 10%"* / *"No text overact 10%"* (transcription variants)
> *"Override."* (Mr. Tam confirming expected behaviour)
> *"No need to show any discount. There's no no need to show discount."* (adjacent context)

**Context:** Holsen's system/customer default tax is 10%. Some items tagged "No Tax" at item master level. Discussion confirmed: item-level "No Tax" should override 10% → invoice shows 0%.

**Status:** One test case appeared to work during UAT. Not tested exhaustively. Three scenarios to verify:
1. Customer has explicit 10% setting + item is "No Tax"
2. System default 10% + item is "No Tax" (no customer-level tax)
3. Tax set at SO line-item level vs. inherited from item master

**Ask:** Confirm tax hierarchy is **Item > Customer > System**. If any scenario shows 10% where 0% expected, flag.

---

## B5 — Batch Number Not Carrying from DN to Pick List [P1 — UNVERIFIED]

**Source:** `UAT/DN to Pick List - Batch Number Test Cases.md` (pre-existing KB doc)

**Test cases:** HOL-LOG-DN-PL-001 and HOL-LOG-DN-PL-002 — steps written, results blank.

**Issue definition:** Batch number selected on DN line item must appear on the generated Pick List. Without it, warehouse staff can't identify which physical batch to pull — critical for chemical and hazardous goods.

**Ask:** Run HOL-LOG-DN-PL-001 and HOL-LOG-DN-PL-002. Record results. If batch field is missing from Pick List, trace the DN → Pick List generation flow and identify where it's dropped.

---

## B6 — Minimum Price Not Blocking SO Submission [P1 — MEDIUM CONFIDENCE]

**Source:** Granola B (2026-06-25 Go Live) + Fireflies summary (same session)

**Evidence from Granola B:**
> *"Standard price link but the have minimum price — stop order from going through."* (Mr. Tam: expected behaviour)
> *"So that trigger."* (minimum price should trigger a block)
> *"Minimum price formatting, but more vendor case your strictly enforced… nothing."* (Mr. Tam noting current state)

**Evidence from Fireflies action items:**
> *"Gareth: Confirm enforcement rules for minimum price and implement controls preventing orders below minimum price thresholds (45:07)"*

**How minimum price should work (from both sessions):**
- Each product has a configured minimum price (Gareth's config action)
- SO submit: if entered unit price < minimum price → block (or warn for manager approval)
- **Exception:** if a customer-specific price is set for that customer+item, it overrides the minimum price floor. Customer pricing CAN go below minimum by design.
- Mr. Tam's final characterisation: minimum price is a "guideline" — but the trigger/block should still fire for orders with no customer-specific price set

**Note for dev team:** Two things may be needed:
1. Gareth loads minimum prices per product in system (config — his action item)
2. System enforces block on SO submit when `entered_price < minimum_price` AND no customer-specific override exists for that customer+item (code)

Please confirm with Gareth whether enforcement logic exists (needs prices configured to activate) or needs to be built.

---

## B7 — PDF Documents Showing Discount % — Holsen Requires No Discount Display [P1 — HIGH CONFIDENCE]

**Source:** Granola A (2026-06-22) + Granola B (2026-06-25)

**Evidence from Granola A (2026-06-22):**
> *"We don't need to show any discount. That's there's no no need to show discount."* (Mr. Tam explicitly)

**Evidence from Granola B (2026-06-25):**
> *"Try generating a pdf… different discount."* (Gareth generating a test PDF)
> *"So it has a discount."* (discount visible on PDF)
> *"You show 49% of the… 49% offer."* (49% discount shown on document)
> *"oh, shit."* (Gareth reaction — unexpected)

**What happened:**
When Gareth generated a PDF during the go-live session, it showed a 49% discount on the document. Mr. Tam had already said in the 06-22 session that no discount should appear on any Holsen customer-facing document. The "49%" appears to be because the system is comparing the standard/list price to the customer-negotiated price and displaying the difference as a discount column/line.

**Expected:** No discount column, discount %, or discount amount on any PDF output (Quotation, SO, Invoice, Delivery Note) for Holsen.

**Actual:** PDF shows discount % (observed as 49% in go-live session).

**Fix:** Holsen PDF template — hide/remove discount field/column from all document outputs. If this is a template setting, toggle it off for Holsen's instance. If hardcoded, suppress for this tenant.

---

## Holsen Context (for reference)

| Item | Value |
|------|-------|
| Environment | https://maia-fe-holsen.vercel.app |
| Main trading warehouse | **Main Warehouse** — all trading items |
| Manufacturing/component warehouse | **Warehouse 0042 / ABC Component** — NOT for trading fulfillment |
| Payment terms | **Net 30 from invoice creation date** |
| Tax default | 10%; some items exempt (item-level "No Tax") |
| Document preference | **No discount shown** on any customer-facing PDF |
| Volume (target) | 70–90 POs/day |
| Product types | Trading + Manufacturing + Poison/Hazardous chemicals |

---

## Out of Scope (Not Dev Bugs)

| Item | Type | Tracked in |
|------|------|-----------|
| WhatsApp/Telegram notification when Pick List generated | Feature request | Go-Live Action Plan F1 |
| C3 compliance cert / K1 traceability | Phase A3 deferred | SOW |
| Customer-specific pricing data not loaded | Config gap | Go-Live Action Plan C2 |
| Batch numbers for existing stock not created | Holsen Lab action | Go-Live Action Plan C6 |
| Excel formula errors in Mr. Tam's migration files | Data prep (Holsen side) | Not MAIA system |

---

## See Also

- [[UAT/Holsen Go-Live Action Plan - 2026-06-25]] — full action plan, config gaps, gates
- [[UAT/DN to Pick List - Batch Number Test Cases]] — B5 test cases
- [[Holsen MAIA User Guide - Mr Tam Team]] — handover guide
- [[Product/SOW for MAIA Holsen]] — Phase A1/A3 scope
