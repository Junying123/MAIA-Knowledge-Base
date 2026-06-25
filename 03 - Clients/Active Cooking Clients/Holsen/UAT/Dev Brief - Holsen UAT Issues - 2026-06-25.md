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

Issues surfaced during Close UAT (2026-06-22) and Go-Live check-in (2026-06-25) with Mr. Tam (Holsen Lab). Five issues confirmed — three are P1 blockers preventing go-live.

---

## B1 — Delivery Note Defaults to Wrong Warehouse [P1 BLOCKER]

**What happened:**
During UAT, creating a Delivery Note from a submitted Sales Order automatically pre-selected **Warehouse 0042 (ABC Component Warehouse)** as the source warehouse. The item's actual stock was in **Main Warehouse**. Submitting the DN with Warehouse 0042 selected resulted in a negative stock error (see B2).

**Expected behaviour:**
DN should pre-populate the warehouse from the item's **default warehouse setting** in the system (configured as Main Warehouse for all trading items). User should not need to manually correct the warehouse field on every DN.

**Actual behaviour:**
System defaults to Warehouse 0042 regardless of item's default warehouse setting.

**Reproduction:**
1. Create and submit a Sales Order for any trading item (e.g., Sodium Cyanide)
2. Click "Create Delivery Note"
3. Check pre-selected warehouse — it shows Warehouse 0042 (ABC Component)
4. Main Warehouse not selected

**Impact:** Every DN requires manual warehouse correction — high error risk in live operations.

**Fix:** DN creation should read item's `default_warehouse` field and pre-populate accordingly.

---

## B2 — DN Submits with Insufficient Stock in Selected Warehouse [P1 BLOCKER]

**What happened:**
With Warehouse 0042 incorrectly selected (see B1) and zero/negative stock in that warehouse, the system still allowed the user to click Submit on the Delivery Note. The error message "Negative stock quantity in Warehouse 0042" only appeared after submission attempt — no pre-submit validation.

**Expected behaviour:**
Before submitting DN, system should:
1. Check available stock for each line item in the selected warehouse
2. If any line item has insufficient stock → block submit and show clear error: "Insufficient stock: [Item] has [X] kg available in [Warehouse], [Y] kg required"

**Actual behaviour:**
No pre-submit stock check. Error fires post-submit, causing failed submission and requiring user to cancel and retry.

**Reproduction:**
1. Create a DN for 500 kg of any item
2. Select a warehouse that has 0 stock for that item
3. Click Submit — system processes and then fails with negative stock error

**Impact:** Confusing UX; high likelihood of logistics team frustration in live use.

**Fix:** Add pre-submit stock validation on DN — block if any line item exceeds available quantity in selected warehouse.

---

## B3 — Payment Due Date Calculates from Delivery Date, Not Invoice Creation Date [P1 BLOCKER]

**What happened:**
When generating an Invoice from a Delivery Note, the system auto-calculates the payment due date as **delivery date + 30 days** (Net 30 terms). Holsen's payment terms require **Net 30 from invoice creation date**, not delivery date.

**Example:**
- Delivery date: 22 June 2026
- Invoice created: 22 June 2026
- System calculated due date: 22 July 2026 (from delivery date ✓ coincidental)

**But when tested with SO for future delivery (1 Aug 2026):**
- Invoice created: 22 June 2026
- Delivery date: 1 Aug 2026
- System calculated due date: 1 Sep 2026 ✗ (should be 22 July 2026)

**Expected behaviour:**
Due date = Invoice creation date + payment terms days.

**Actual behaviour:**
Due date = Delivery date + payment terms days.

**Reproduction:**
1. Create a Sales Order with a future delivery date (e.g., 1 Aug 2026)
2. Submit → create DN → create Invoice
3. Check Invoice due date — it reflects delivery date + 30 days, not invoice creation date + 30 days

**Impact:** Incorrect payment due dates on all invoices where delivery date ≠ invoice creation date. Finance/AR impact.

**Fix:** Payment due date calculation should use `invoice.creation_date + payment_terms_days`, not `delivery_date + payment_terms_days`.

---

## B4 — Tax Override Hierarchy Needs Verification [P2]

**What happened:**
During UAT, some items in Holsen's product list are tagged as "No Tax" at the item level. The system default / customer-level tax is 10%. There was a question about whether the item-level "No Tax" setting correctly overrides the 10% in all scenarios (e.g., when tax is set at customer level vs system level).

**Test verified in session:**
Mr. Tam confirmed the override appeared to work correctly in one test case (no-tax item showed 0% on invoice even with 10% as system default). However, this was only verified for one flow — not tested exhaustively across:
- Customer with explicit 10% tax setting + item with no-tax
- System default 10% + item with no-tax
- Tax set on SO line item vs inherited from item master

**Expected behaviour:**
Item-level "No Tax" = 0% tax regardless of customer or system default. Override hierarchy: Item > Customer > System.

**Action needed:**
Please confirm this is the implemented hierarchy and verify with a test covering all three scenarios above. If override logic differs, advise.

**Impact:** If override fails silently, Holsen may charge tax on exempt items (compliance risk).

---

## B5 — Batch Number Not Carrying Over from DN to Pick List [P1 BLOCKER]

**What happened:**
When a batch number is selected on a Delivery Note line item, the Pick List generated from that DN does not always carry the batch number through. Logistics team cannot see which batch to pick.

**Existing test cases:**
See [[UAT/DN to Pick List - Batch Number Test Cases]] — HOL-LOG-DN-PL-001 and HOL-LOG-DN-PL-002. These were written but not yet executed with results recorded.

**Expected behaviour:**
Pick List should show batch number per line item matching what was selected on the DN.

**Actual behaviour:**
Batch number field blank or not shown on Pick List.

**Reproduction:**
Run HOL-LOG-DN-PL-001 and HOL-LOG-DN-PL-002 per the test case doc.

**Impact:** Logistics team cannot identify correct batch to pick — critical for batch-tracked items (poison goods, chemicals).

**Fix:** Ensure batch number field on DN line item is included in the data used to generate Pick List PDF and workspace view.

---

## Summary Table

| ID | Issue | Priority | Blocking Go-Live? |
|----|-------|----------|------------------|
| B1 | DN defaults to wrong warehouse | P1 | Yes |
| B2 | No pre-submit stock validation on DN | P1 | Yes |
| B3 | Payment due date uses delivery date not invoice date | P1 | Yes |
| B4 | Tax override hierarchy — needs verification | P2 | No (verify only) |
| B5 | Batch number not carrying from DN to Pick List | P1 | Yes |

---

## Context on Holsen Setup

- Holsen trades chemicals — items include hazardous/poison goods (e.g., Sodium Cyanide)
- Core warehouse: **Main Warehouse** (all trading items stored here)
- Warehouse 0042 = ABC Component Warehouse — used for manufacturing components, NOT for trading goods
- Payment terms: **Net 30 from invoice creation date**
- Volume: 70–90 POs daily at full capacity
- Tax: most items are taxable at 10%; some are exempt (no-tax) at item level

---

## See Also

- [[UAT/Holsen Go-Live Action Plan - 2026-06-25]] — full action plan including config gaps and go-live gates
- [[UAT/DN to Pick List - Batch Number Test Cases]] — existing test cases for B5
- [[Product/SOW for MAIA Holsen]] — Phase A1/A3 scope
