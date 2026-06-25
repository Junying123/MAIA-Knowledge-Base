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

Two source sessions:
- **Close UAT** — 2026-06-22, Gareth + Mr. Tam (Holsen Lab), ~2 hrs live system testing
- **Go-Live Check-in** — 2026-06-25, Full Mindhive team + Mr. Tam, data prep and pricing alignment

> **Note on transcript quality:** Both sessions were auto-transcribed. Quotes below are lightly cleaned fragments used as evidence anchors — actual phrasing in the meeting may differ. Issues marked (CONFIRMED) were observed live and unambiguous. Issues marked (VERIFY) need a dev-side check to confirm behaviour.

---

## Summary

| ID | Issue | Priority | Source | Status |
|----|-------|----------|--------|--------|
| B1 | Delivery Note defaults to wrong warehouse → triggers negative stock error | P1 Blocker | Close UAT 06-22 | Open |
| B2 | No pre-submit stock check on DN — error fires after submit, not before | P1 Blocker | Close UAT 06-22 | Open |
| B3 | Payment due date calculates from delivery date, not invoice creation date | P1 Blocker | Close UAT 06-22 | Open |
| B4 | Tax override: item-level "no tax" vs system default 10% — hierarchy needs verification | P2 | Close UAT 06-22 | Verify |
| B5 | Batch number selected on DN not carrying through to Pick List | P1 Blocker | Existing test cases | Unrun |
| B6 | Minimum price not blocking SO submission when price is below floor | P1 Blocker | Go-Live 06-25 | Open |

---

## B1 — Delivery Note Defaults to Wrong Warehouse [P1 BLOCKER — CONFIRMED]

**Source:** Close UAT 2026-06-22

**Evidence from transcript:**
> *"Negative stock quantity in Warehouse 0042 — this is the ABC component warehouse."*
> *"Would your phone to go warehouse or main warehouse?"*
> *"To go main warehouse. So all [stock is] reserve[d] there."*

**What happened:**
Mr. Tam created a Delivery Note from an approved Sales Order. The DN pre-selected **Warehouse 0042 (ABC Component Warehouse)** — a manufacturing input warehouse — instead of **Main Warehouse** where all trading stock sits. When Mr. Tam hit Submit, the system threw a negative stock error because Warehouse 0042 has zero stock for trading items.

After switching to Main Warehouse manually, the DN submitted successfully.

**Root cause:** DN creation is reading the wrong warehouse as default — likely not pulling from the item's `default_warehouse` field, or that field is not set/is set incorrectly.

**Expected:** DN pre-populates warehouse from item's configured default warehouse (Main Warehouse for all Holsen trading items).

**Actual:** DN defaults to Warehouse 0042 (ABC Component) regardless of item config.

**Fix direction:** DN creation should read `item.default_warehouse` and pre-populate accordingly. Confirm what field is currently being used.

---

## B2 — No Pre-Submit Stock Validation on Delivery Note [P1 BLOCKER — CONFIRMED]

**Source:** Close UAT 2026-06-22

**Evidence from transcript:**
> *"Negative stock quantity in Warehouse 0042."* [fires after Submit button clicked]
> *"Okay let's try something."* [after error; had to change warehouse and retry]

**What happened:**
System allowed Mr. Tam to fill in the DN form and click Submit with an invalid warehouse and zero stock. The negative stock error only appeared post-submit. No warning or validation prevented the attempt.

**Expected:** Before DN submits, system checks each line item's requested quantity against available stock in the selected warehouse. If any line fails the check → block submit and show: *"Insufficient stock: [Item] — [X] kg available in [Warehouse], [Y] kg required."*

**Actual:** Submit proceeds, stock check fires server-side post-commit, error returned after failed write.

**Fix direction:** Add client-side or server-side pre-submit validation on DN: for each line item, `available_qty_in_warehouse >= requested_qty` before allowing submit.

**Note:** This bug is directly caused by B1 (wrong warehouse default), but both should be fixed independently — even with correct warehouse default, a user could manually select an understocked warehouse.

---

## B3 — Payment Due Date Calculates from Delivery Date, Not Invoice Creation Date [P1 BLOCKER — CONFIRMED]

**Source:** Close UAT 2026-06-22

**Evidence from transcript:**
> *"Type of payment is not issue from another date right — instead of delivery date."* (Mr. Tam flagging the issue)
> *"By write, system default integrates [due date as] July — 30 days from delivery."* (observing the bug)
> *"Creation date. So commute default now as it was."* (expected behaviour)
> *"View and reference it cannot be after. Okay creation date okay."* (confirming invoice creation date is correct)

**What happened:**
When creating an Invoice from a Delivery Note, the system auto-fills the payment due date as **delivery date + 30 days** (Net 30). Holsen's terms are **Net 30 from invoice creation date**, not delivery date.

This matters most when delivery date is in the future. Example:
- Invoice created: 22 June 2026
- Delivery date: 1 August 2026
- **Buggy due date:** 1 September 2026
- **Correct due date:** 22 July 2026

**Fix direction:** Payment due date calculation should use `invoice.creation_date + payment_terms_days`. Not `delivery_note.delivery_date + payment_terms_days`.

Confirm which field is currently used as the base date in the due date formula and update accordingly.

---

## B4 — Tax Override Hierarchy: Item "No Tax" vs System Default 10% [P2 — VERIFY]

**Source:** Close UAT 2026-06-22

**Evidence from transcript:**
> *"No tax overact 10%"* / *"No text override 10%"* (transcription variants of same statement)
> *"Override."* (Mr. Tam confirming expected behaviour)
> *"Negative 10 overwrite the no tax versus the no tax override 10%"*

**Context:**
Holsen has a system/customer default tax of 10%. Some specific items are tagged "No Tax" at the item master level. The discussion confirmed that item-level "No Tax" should override the 10% default — the invoice line should show 0% tax for those items regardless of customer or system tax settings.

**The question:** Does this override currently work correctly in all cases?

In the UAT session, one test appeared to work. But the following scenarios were not exhaustively tested:
1. Customer has explicit 10% tax setting AND item is "No Tax"
2. System default 10% AND item is "No Tax" (no customer-level tax set)
3. Tax set at SO line-item level vs. inherited from item master

**Ask:** Can dev confirm the tax override hierarchy is: **Item > Customer > System default**? And that "No Tax" at item level produces 0% on the invoice line in all three scenarios above? If any scenario is broken, flag — Mr. Tam's product list includes both taxable and exempt chemicals.

---

## B5 — Batch Number Not Carrying from Delivery Note to Pick List [P1 BLOCKER — UNRUN]

**Source:** Existing UAT test cases (pre-dating this session)

**Test cases:** [[UAT/DN to Pick List - Batch Number Test Cases]] — HOL-LOG-DN-PL-001 and HOL-LOG-DN-PL-002

These test cases exist and specify the exact reproduction steps. Results columns are blank — tests have not been executed.

**Issue definition:** When logistics selects a batch number on a DN line item, the generated Pick List should show the batch number so warehouse staff know exactly which physical batch to pull. If batch number is blank on the Pick List, warehouse staff have no way to identify the correct batch — critical for chemical/poison goods.

**Ask:** Run HOL-LOG-DN-PL-001 and HOL-LOG-DN-PL-002 and record results. If batch number is not appearing on the Pick List, trace where the batch field is dropped in the DN → Pick List generation flow.

---

## B6 — Minimum Price Not Blocking SO Submission [P1 BLOCKER — OPEN]

**Source:** Go-Live Check-in 2026-06-25 (Fireflies session with full Mindhive + Mr. Tam)

**Evidence from transcript:**
> *"Standard price but minimum price — stop [order] from going through."* (Mr. Tam describing expected behaviour)
> *"So the trigger."* (discussing that it should trigger a block)
> *"Price minimum price formatting. Strictly enforce — just nothing."* (Mr. Tam noting it's currently not enforcing)

**From Fireflies summary action items:**
> *"Gareth: Confirm enforcement rules for minimum price and implement controls preventing orders below minimum price thresholds (45:07)"*

**Context:**
Holsen uses minimum prices per product as a margin floor. When a Sales Agent creates an SO, if the entered unit price is below the configured minimum price for that item, the system should block submission (or flag for manager approval). Minimum prices are set at product level and vary per item.

**What Mr. Tam described:**
- Minimum price = hard floor, blocks order if price entered is below it
- Individual customer pricing CAN be set below minimum price for that specific customer (this is by design — customer-specific pricing overrides the floor for that customer)
- For orders where no customer-specific price exists, minimum price enforcement applies

**Current behaviour (reported):** System is NOT blocking orders below minimum price threshold.

**Note for dev team:** Gareth has a parallel action item to configure minimum prices per product in the system. Two things may be needed:
1. (Config) Gareth loads minimum price per product — needed first
2. (Code) System enforces the block on SO submit when entered price < minimum price AND no customer-specific price override exists

Please confirm with Gareth whether the enforcement logic exists in code already (just needs prices configured) or whether the enforcement block needs to be built.

---

## Holsen Setup Context (for reference)

| Item | Value |
|------|-------|
| Environment | https://maia-fe-holsen.vercel.app |
| Main trading warehouse | **Main Warehouse** (all trading items stored here) |
| Manufacturing warehouse | **Warehouse 0042 — ABC Component** (NOT for trading fulfillment) |
| Payment terms | **Net 30 from invoice creation date** |
| Tax default | 10% — some items exempt (item-level "No Tax") |
| Expected daily volume | 70–90 POs/day at full capacity |
| Product types | Trading + Manufacturing + Poison/Hazardous (e.g., Sodium Cyanide) |
| Go-live date | 25 June 2026 (today) |

---

## What's Out of Scope for This Brief

These were raised in UAT but are **not dev bugs** — tracked separately in [[UAT/Holsen Go-Live Action Plan - 2026-06-25]]:

| Item | Type | Status |
|------|------|--------|
| WhatsApp/Telegram notification when Pick List is generated | Feature request (F1) | Post go-live backlog |
| C3 compliance cert generation for poison goods | Phase A3 scope | Deferred per SOW |
| AutoCount / UBS integration | Phase A1 CSV workaround in place | Full integration August 2026 |
| Customer-specific pricing data not loaded | Config gap (C2) | Gareth action item |
| Batch numbers for existing stock not created | Config gap (C6) | Holsen Lab action item |

---

## See Also

- [[UAT/Holsen Go-Live Action Plan - 2026-06-25]] — full action plan with all config gaps + gates
- [[UAT/DN to Pick List - Batch Number Test Cases]] — test cases for B5
- [[Holsen MAIA User Guide - Mr Tam Team]] — handover guide for Holsen's team
- [[Product/SOW for MAIA Holsen]] — Phase A1/A3 scope boundary
