---
owner: Gareth
status: draft
last_reviewed: 2026-07-22
lark_url: https://eg69120xnei.sg.larksuite.com/wiki/L5E8wsDWHilVDkku64ZlmHxSgGd
---

# Dalson Industrial Supplies — UAT Checklist

Sources: Scope Lock v2 (rerun 2026-07-14, SL-11 promoted 2026-07-19) · VoC Extraction · Dalson Industrial Supplies Customer Narrative Document (used for realistic test data/roles only — vendor voice, not scope authority).

> **Regenerated 2026-07-19** per Lens Alignment Report v3 — this doc predated the entire Scope Lock v2 rerun. Fixes applied: SL-12 numbering collision resolved, SL-11/SL-13/SL-17 status + coverage added, SL-10 reworded, verdict recomputed.
> **Updated 2026-07-22** — SL-10 (Pricing logic) promoted to LOCKED per Scope Lock v2 (owner confirmed both open mechanics: price-history reference + standard-price fallback). Moved from excluded to tested.

---

## Step 1 — Scope Inventory

| Scope ID | Item name | Status | Client agreed? | Testable? |
|---|---|---|---|---|
| SL-1 | MAIA as operational layer on top of AutoCount | LOCKED | YES | **YES** |
| SL-2 | Core order intake via unstructured channels (WhatsApp/call/email) | LOCKED | YES | **YES** |
| SL-3 | Messaging channel = Telegram | LOCKED (Superseded, confirmed 2026-07-12) | YES | **YES** |
| SL-4 | SKU alias mapping / matching | LOCKED | YES | **YES** |
| SL-5 | POD capture (photo) | LOCKED | YES | **YES** |
| SL-6 | AutoCount integration (access + data migration) | LOCKED | YES | **YES** |
| SL-7 | Submission flow (no separate approval gate) | LOCKED (SUPERSEDED 2026-07-20 — approval gate removed, only 3 registered users: Yap Li Min, Asilah, Joseph) | YES | **YES** |
| SL-8 | Credit note handling (invoice-level) | LOCKED | YES | **YES** |
| SL-9 | Warehouse / stock update responsibility | LOCKED | YES | **YES** |
| SL-10 | Pricing logic (ad hoc, per-customer negotiated) | **LOCKED (2026-07-22)** — owner confirmed: chatbot surfaces item price history from customer's last few orders, staff manually decides/confirms referencing it; standard AutoCount price auto-applies as default when no customer history exists yet | YES | **YES** |
| SL-11 | Customer & item/SKU creation via chatbot | **LOCKED (2026-07-19)** — confirmed with Ivan (Vendor/Dev): chatbot can create both new customers and new SKUs directly in AutoCount, full capability not a fallback | YES | **YES** |
| — | Customer master e-invoice mandatory fields (sub-question under SL-11, not a standalone Scope Lock item — previously mislabeled "SL-12" in this doc) | NEEDS SCOPING — PARTIAL, needs re-verification specific to Dalson | UNKNOWN | NO |
| SL-12 | AutoCount integration: ongoing 2-way sync mechanism | AGREED IN PRINCIPLE — direction agreed (integrate not replace), API vs middleware vs DB access undefined | NO | NO |
| SL-13 | PO → SO → Invoice → DO workflow (SO stage reinterpreted) | **LOCKED (SUPERSEDED)** — confidence HIGH (upgraded 2026-07-19: written confirmation found in the Sample Data Checklist doc) | YES (written) | **YES** |
| SL-14 | Document generation (SO/Invoice/DO PDFs — layout/templates) | AGREED IN PRINCIPLE — NOT LOCKED | NO | NO |
| SL-15 | Supplier-side procurement automation | OUT OF SCOPE | N/A | NO |
| SL-16 | Full ERP replacement | OUT OF SCOPE | N/A | NO |
| SL-17 | Receipts | **LOCKED** | YES | **YES** |

**Testable this cycle: SL-1 through SL-11, SL-13, SL-17 (13 items).**

---

## Step 2 — Unhappy-Path Bank

| # | Trigger type | Real situation from the docs | Stresses |
|---|---|---|---|
| 1 | Invalid input | Customer PO uses their own item wording that doesn't match Dalson's internal SKU naming (Customer Narrative §4.3: "customer item descriptions may differ from internal SKU naming") | SL-4 |
| 2 | Ambiguity | Customer's item description matches more than one similar SKU (Narrative: "similar SKUs can create confusion") | SL-4 |
| 3 | Missing / incomplete data | Customer record incomplete/not found in AutoCount when preparing an invoice (Narrative §4.4: "if the customer is not properly found in AutoCount, staff still need to manually key in invoice details") | SL-1, SL-6 |
| 4 | Wrong actor / permission | Someone not on the 3-person registered list attempts to submit a Sales Order or Invoice | SL-7 |
| 5 | Conflict / duplicate | Same PO forwarded into MAIA twice (staff error, common with WhatsApp/Telegram forwarding) | SL-2 |
| 6 | Interruption / wrong state | AutoCount sync fails or times out mid-order-draft | SL-1, SL-6 |
| 7 | Downstream integrity | Owner needs to retrieve a past Delivery Order later from a live order reference (VOC-012: "master DO... maybe I cannot find it anymore") | SL-2, SL-5, SL-6 |
| 8 | Missing / incomplete data | Delivery is completed but no POD photo is uploaded | SL-5 |
| 9 | Wrong actor / permission | Message sent to the MAIA Telegram account from an unregistered/unknown number | SL-3 |
| 10 | Must-NOT | MAIA must NOT finalize/push an invoice to AutoCount without one of the 3 registered users (Yap Li Min, Asilah, Joseph) explicitly submitting it (SL-1 AC: "no scenario where MAIA replaces AutoCount as ledger/invoicing source") | SL-1, SL-7 |
| 11 | Must-NOT | MAIA must NOT issue a credit note at customer-account level — only at invoice level (VOC-022, Dalson's confirmed practice) | SL-8 |
| 12 | Boundary / limit | Credit note requested against an invoice ID that doesn't exist / already fully credited | SL-8 |
| 13 | Downstream integrity | Stock/inventory update from an order must reflect back correctly without manual re-entry (SL-9) | SL-9 |

---

## Step 3 — UAT Test Cases

### SL-1 — MAIA as operational layer on top of AutoCount

| Test ID | Scope ref | Path | Trigger type | Role/actor | Precondition | Steps | Test data | Expected result | Pass/Fail | Tester & date |
|---|---|---|---|---|---|---|---|---|---|---|
| HP-01 | SL-1 | Happy | — | Yap Li Min | MAIA connected to AutoCount, staging data loaded | 1. Ask MAIA to look up a known customer. 2. Confirm details match AutoCount. | Existing customer name from AutoCount export | Customer details shown in MAIA match AutoCount record exactly; no invented fields | | |
| UP-01 | SL-1 | Unhappy | Missing data | Asilah | Customer not yet in AutoCount | 1. Forward PO for an unlisted customer. 2. Observe MAIA's response. | PO from a customer not in AutoCount export | MAIA flags customer as not found and asks staff to key in / confirm — does NOT invent or auto-create a ledger entry | | |
| UP-02 | SL-1 | Unhappy | Must-NOT | Yap Li Min | Draft SO prepared in MAIA | 1. Prepare a draft SO via MAIA. 2. Attempt to treat the draft as final without explicit confirmation step. | Any draft order | MAIA does NOT push the order to AutoCount as a finalized ledger entry without an explicit human confirmation action | | |
| UP-03 | SL-1 | Unhappy | Interruption | Yap Li Min | Mid-draft order in progress | 1. Start an order draft. 2. Simulate/observe an AutoCount sync interruption. 3. Resume. | In-progress draft | MAIA surfaces the sync failure to the user rather than silently completing or losing the order | | |

### SL-2 — Core order intake via unstructured channels

| Test ID | Scope ref | Path | Trigger type | Role/actor | Precondition | Steps | Test data | Expected result | Pass/Fail | Tester & date |
|---|---|---|---|---|---|---|---|---|---|---|
| HP-02 | SL-2 | Happy | — | Asilah | MAIA channel live | 1. Forward a real customer PO image/text into MAIA. 2. Review the extracted draft. | Sample PO (per Narrative §7.1 doc-sample request) | MAIA produces an order draft with items/quantities matching the PO | | |
| UP-04 | SL-2 | Unhappy | Conflict/duplicate | Asilah | Same PO available twice | 1. Forward the same PO into MAIA twice. 2. Observe behavior. | Duplicate PO | MAIA warns of a likely duplicate order rather than silently creating two orders | | |
| UP-05 | SL-2 | Unhappy | Invalid input | Asilah | — | 1. Forward a garbled/partial PO (e.g. cropped image, incomplete text). 2. Observe MAIA's handling. | Deliberately incomplete PO | MAIA flags missing/unclear information and asks for clarification rather than guessing a full order | | |
| UP-06 | SL-2 | Unhappy | Downstream integrity | Yap Li Min | Order placed and delivered weeks prior | 1. Ask MAIA/backend workspace to retrieve the DO for a specific past order. 2. Confirm it's found. | A live order reference from a completed order | The correct DO is retrievable by order reference — addresses VOC-012 pain point directly | | |

### SL-3 — Messaging channel = Telegram

| Test ID | Scope ref | Path | Trigger type | Role/actor | Precondition | Steps | Test data | Expected result | Pass/Fail | Tester & date |
|---|---|---|---|---|---|---|---|---|---|---|
| HP-03 | SL-3 | Happy | — | Yap Li Min / staff | Dalson Telegram account set up | 1. Send a message from a registered staff Telegram account. 2. Confirm MAIA responds. | Registered account | MAIA responds correctly via Telegram | | |
| UP-07 | SL-3 | Unhappy | Wrong actor | Unregistered person | — | 1. Message MAIA's Telegram account from an unknown/unregistered number. 2. Observe response. | Any non-staff Telegram account | MAIA does not process the message as a valid staff order/action (rejects or ignores per access-control design) | | |
| UP-19 | SL-3 | Unhappy | Invalid input | Yap Li Min / staff | Dalson Telegram account set up | 1. Send a non-text message (e.g. a photo, sticker, or voice note with no text) to MAIA's Telegram account from a registered staff account. 2. Observe response. | Registered account, non-text message type | MAIA does not misinterpret the message as an order/action — either prompts for valid text input or rejects gracefully, no false order creation | | |

### SL-4 — SKU alias mapping / matching

| Test ID | Scope ref | Path | Trigger type | Role/actor | Precondition | Steps | Test data | Expected result | Pass/Fail | Tester & date |
|---|---|---|---|---|---|---|---|---|---|---|
| HP-04 | SL-4 | Happy | — | Asilah | Item master loaded | 1. Forward PO with an item description that closely matches one SKU. 2. Confirm MAIA's match. | e.g. "WD40 spray lube" → matches catalogued WD40 SKU | MAIA correctly matches to the right SKU | | |
| UP-08 | SL-4 | Unhappy | Invalid input | Asilah | — | 1. Forward PO using customer's own wording that differs from internal SKU naming. 2. Observe match/suggestion. | Customer-style description vs internal SKU name | MAIA either matches correctly or surfaces a closest-match suggestion for staff confirmation — does not silently pick a wrong SKU | | |
| UP-09 | SL-4 | Unhappy | Ambiguity | Asilah | Two+ similar SKUs exist | 1. Forward PO with a description matching multiple similar SKUs. 2. Observe MAIA's handling. | e.g. two similar valve sizes/models | MAIA flags ambiguity and asks staff to confirm the correct SKU rather than auto-selecting one | | |

### SL-5 — POD capture (photo)

| Test ID | Scope ref | Path | Trigger type | Role/actor | Precondition | Steps | Test data | Expected result | Pass/Fail | Tester & date |
|---|---|---|---|---|---|---|---|---|---|---|
| HP-05 | SL-5 | Happy | — | Driver | Delivery scheduled in MAIA | 1. Complete a delivery. 2. Upload a POD photo via MAIA. 3. Confirm it's attached to the order/DO. | Sample delivery + photo | Photo is stored and linked to the correct order/DO record | | |
| UP-10 | SL-5 | Unhappy | Missing data | Driver | Delivery scheduled | 1. Complete a delivery. 2. Do NOT upload a POD photo. 3. Check order status in backend. | — | Order/DO status reflects missing POD rather than silently marking delivery fully complete | | |
| UP-11 | SL-5 | Unhappy | Downstream integrity | Yap Li Min | POD uploaded previously | 1. Retrieve a past order. 2. Confirm the POD photo is still viewable from the order/DO trail. | Past completed delivery | POD photo remains retrievable and correctly linked, addressing VOC-011/012 | | |

### SL-6 — AutoCount integration (access + data migration)

| Test ID | Scope ref | Path | Trigger type | Role/actor | Precondition | Steps | Test data | Expected result | Pass/Fail | Tester & date |
|---|---|---|---|---|---|---|---|---|---|---|
| HP-06 | SL-6 | Happy | — | Yap Li Min | Migrated data live | 1. Confirm a sample of migrated customer/item records in MAIA match AutoCount. 2. Push a confirmed SO from MAIA. 3. Verify it appears correctly in AutoCount. | Sample record set | Data matches 1:1; pushed SO appears correctly in AutoCount | | |
| UP-12 | SL-6 | Unhappy | Interruption | Yap Li Min | — | 1. Simulate AutoCount unavailability. 2. Attempt to push a confirmed order. 3. Observe MAIA's response. | Any confirmed order | MAIA surfaces the failure clearly, does not silently drop or duplicate the record | | |
| UP-13 | SL-6 | Unhappy | Missing / incomplete data | Yap Li Min | — | 1. Identify a record in AutoCount not present in the migrated data. 2. Query it via MAIA. | Edge-case record | MAIA does not fabricate data for a record it cannot find; flags as not found | | |

### SL-7 — Submission flow (no separate approval gate)

> **Updated 2026-07-20:** SL-7 was superseded — client (Yap Li Min) confirmed only 3 people use MAIA for Dalson (herself, Asilah, Joseph), so the earlier sole-approver gate was dropped. Any of the 3 can submit a document directly; submission is final. Test cases below rewritten accordingly — UP-14 previously tested that Asilah's approval was refused; that behaviour is now wrong, so it's replaced with a no-silent-auto-submit check. UP-15 previously tested an unapproved draft; replaced with an unregistered-actor submission check (mirrors SL-3's access control, specific to the submit action).

| Test ID | Scope ref | Path | Trigger type | Role/actor | Precondition | Steps | Test data | Expected result | Pass/Fail | Tester & date |
|---|---|---|---|---|---|---|---|---|---|---|
| HP-07 | SL-7 | Happy | — | Asilah (or Yap Li Min, or Joseph) | Draft SO/Invoice ready | 1. Any of the 3 registered users submits the draft directly. 2. Confirm it proceeds to AutoCount without requiring a second person's sign-off. | Sample draft order | Order proceeds to AutoCount on the registered user's own submission — no second approval step exists or is required | | |
| UP-14 | SL-7 | Unhappy | Must-NOT | — | Draft SO/Invoice ready, not yet submitted | 1. Leave the draft unsubmitted. 2. Confirm MAIA itself never auto-pushes it to AutoCount without one of the 3 registered users explicitly taking the submit action. | Same sample draft | Draft remains pending until a registered user explicitly submits — MAIA never submits on its own | | |
| UP-15 | SL-7 | Unhappy | Wrong actor / permission | Unregistered person | Draft SO/Invoice ready | 1. An unregistered/non-staff account attempts to submit the draft. 2. Observe system response. | Same sample draft | System refuses — only the 3 registered users (Yap Li Min, Asilah, Joseph) can submit | | |

### SL-8 — Credit note handling (invoice-level)

| Test ID | Scope ref | Path | Trigger type | Role/actor | Precondition | Steps | Test data | Expected result | Pass/Fail | Tester & date |
|---|---|---|---|---|---|---|---|---|---|---|
| HP-08 | SL-8 | Happy | — | Yap Li Min / finance | Existing invoice with a returned item | 1. Issue a credit note referencing the specific invoice ID and item. 2. Confirm it's recorded correctly. | Sample invoice + return item | Credit note is tied to the correct invoice ID, not the customer account | | |
| UP-16 | SL-8 | Unhappy | Must-NOT | Yap Li Min / finance | — | 1. Attempt to issue a credit note at the customer-account level (no specific invoice reference). 2. Observe system response. | Customer account, no invoice ref | System does not allow account-level credit note — this contradicts Dalson's confirmed practice (VOC-022) | | |
| UP-17 | SL-8 | Unhappy | Boundary / limit | Yap Li Min / finance | — | 1. Attempt to issue a credit note against an invoice ID that doesn't exist or is already fully credited. 2. Observe response. | Invalid/exhausted invoice ID | System rejects with a clear error, does not create an orphaned or duplicate credit note | | |

### SL-9 — Warehouse / stock update responsibility

| Test ID | Scope ref | Path | Trigger type | Role/actor | Precondition | Steps | Test data | Expected result | Pass/Fail | Tester & date |
|---|---|---|---|---|---|---|---|---|---|---|
| HP-09 | SL-9 | Happy | — | Joseph | Order confirmed | 1. Confirm an order. 2. Confirm stock levels update to reflect the fulfilled order. | Sample stocked SKU | Stock quantity reflects the order without manual re-entry | | |
| UP-18 | SL-9 | Unhappy | Downstream integrity | Joseph | — | 1. Fulfill an order for an item marked as one that doesn't require stock-count tracking (per VOC-006: only a few items need real tracking). 2. Confirm system behaves correctly (doesn't force a stock update where none is expected). | Non-tracked SKU | System respects the item's tracking configuration; does not force an update where the client doesn't track stock | | |

### SL-11 — Customer & item/SKU creation via chatbot

| Test ID | Scope ref | Path | Trigger type | Role/actor | Precondition | Steps | Test data | Expected result | Pass/Fail | Tester & date |
|---|---|---|---|---|---|---|---|---|---|---|
| HP-10 | SL-11 | Happy | — | Asilah / staff | Chatbot access to MAIA | 1. Create a new customer via the chatbot for a first-time buyer. 2. Confirm it pushes correctly to AutoCount. 3. Repeat for a new SKU/item not yet in the item master. | New customer + new item details | Both new customer and new item are created and reflected correctly in AutoCount, no manual key-in required | | |
| UP-20 | SL-11 | Unhappy | Invalid input | Asilah / staff | — | 1. Attempt to create a new customer via chatbot with a mandatory field missing (e.g. no tax identity). 2. Observe response. | Incomplete customer details | MAIA flags the missing mandatory field and does not push an incomplete record to AutoCount | | |
| UP-21 | SL-11 | Unhappy | Conflict / duplicate | Asilah / staff | Customer or SKU already exists | 1. Attempt to create a customer/SKU that already exists in AutoCount. 2. Observe response. | Existing customer or SKU name | MAIA detects the duplicate, does not create a second record, prompts staff to use the existing one | | |

### SL-10 — Pricing logic (ad hoc, per-customer)

| Test ID | Scope ref | Path | Trigger type | Role/actor | Precondition | Steps | Test data | Expected result | Pass/Fail | Tester & date |
|---|---|---|---|---|---|---|---|---|---|---|
| HP-13 | SL-10 | Happy | — | Yap Li Min / staff | Customer has ordered this item at least once before | 1. Start a new order for a repeat customer + item they've bought before. 2. Open the pricing step in the chatbot. 3. Confirm the chatbot displays the price(s) charged on that customer's last few orders for this item. 4. Enter/confirm the price for this order referencing that history. | Repeat customer, item with prior order history | Chatbot surfaces the last few order prices for that customer+item combo; staff can reference it before confirming the line price | | |
| UP-26 | SL-10 | Unhappy | Missing precondition | Yap Li Min / staff | New customer, or first order of this item for this customer — no price history exists | 1. Start a new order for a customer/item combo with no prior order history. 2. Observe pricing step. | New customer or new item for existing customer | MAIA auto-applies the standard AutoCount item price as the default; staff can still override it — no blank/undefined price field | | |
| UP-27 | SL-10 | Unhappy | Must-NOT | — | Repeat customer with price history | 1. Confirm the chatbot does not silently auto-fill a single "last price" without staff confirmation. | Repeat customer order | Staff always sees and confirms the price line — history is a reference, not an auto-committed value | | |

### SL-13 — PO → SO → Invoice → DO workflow (SO stage reinterpreted)

| Test ID | Scope ref | Path | Trigger type | Role/actor | Precondition | Steps | Test data | Expected result | Pass/Fail | Tester & date |
|---|---|---|---|---|---|---|---|---|---|---|
| HP-11 | SL-13 | Happy | — | Yap Li Min | New customer requiring upfront payment | 1. Generate the MAIA-side proforma/SO-style document for a new customer. 2. Confirm the customer pays. 3. Confirm Invoice + DO push to AutoCount as normal, while the SO/quotation-equivalent document stays inside MAIA only. | New customer order | Proforma document generated correctly; only Invoice + DO reach AutoCount, no formal SO record created there | | |
| UP-22 | SL-13 | Unhappy | Must-NOT | — | Any order at SO/quotation stage | 1. Confirm the SO/quotation-equivalent document is never pushed to AutoCount as a formal Sales Order record. | Any order | AutoCount never receives a Sales Order record from MAIA — only Invoice and DO | | |
| UP-23 | SL-13 | Unhappy | Wrong state | — | SO/quotation document exists in MAIA, not yet an invoice | 1. Attempt to push the MAIA-side SO/quotation document directly to AutoCount without going through the Invoice step. 2. Observe response. | In-progress SO/quotation | System blocks or rejects — the only valid path to AutoCount is via Invoice, not directly from the SO/quotation stage | | |

### SL-17 — Receipts

| Test ID | Scope ref | Path | Trigger type | Role/actor | Precondition | Steps | Test data | Expected result | Pass/Fail | Tester & date |
|---|---|---|---|---|---|---|---|---|---|---|
| HP-12 | SL-17 | Happy | — | Yap Li Min / staff | Customer has paid, proof of payment attached | 1. Customer explicitly requests a receipt. 2. Staff generates it via one click in MAIA, tied to the related order/invoice. | Paid order with proof of payment attached | Receipt is generated correctly and linked to the correct order/invoice | | |
| UP-24 | SL-17 | Unhappy | Must-NOT | — | Proof of payment attached to an order/invoice | 1. Attach a proof of payment to an order or invoice. 2. Confirm no receipt is auto-generated. | Any paid order | No receipt is generated automatically — receipt generation only happens on explicit request | | |
| UP-25 | SL-17 | Unhappy | Missing precondition | Yap Li Min / staff | No proof of payment attached | 1. Attempt to generate a receipt for an order with no attached proof of payment. 2. Observe response. | Unpaid or unconfirmed order | System flags the missing precondition or requires explicit confirmation — does not silently generate a receipt with nothing to back it | | |

---

## Step 4 — Coverage & Traceability

### 4a. Traceability

| Scope ID | Locked item | Happy cases | Unhappy cases | Covered? |
|---|---|---|---|---|
| SL-1 | MAIA overlay on AutoCount | HP-01 | UP-01, UP-02, UP-03 | YES |
| SL-2 | Order intake via unstructured channels | HP-02 | UP-04, UP-05, UP-06 | YES |
| SL-3 | Telegram channel | HP-03 | UP-07, UP-19 | YES |
| SL-4 | SKU alias mapping | HP-04 | UP-08, UP-09 | YES |
| SL-5 | POD capture | HP-05 | UP-10, UP-11 | YES |
| SL-6 | AutoCount integration (access + migration) | HP-06 | UP-12, UP-13 | YES |
| SL-7 | Submission flow (no approval gate) | HP-07 | UP-14, UP-15 | YES |
| SL-8 | Credit note handling | HP-08 | UP-16, UP-17 | YES |
| SL-9 | Warehouse/stock update | HP-09 | UP-18 | YES |
| SL-10 | Pricing logic (ad hoc, per-customer) | HP-13 | UP-26, UP-27 | YES |
| SL-11 | Customer & item/SKU creation via chatbot | HP-10 | UP-20, UP-21 | YES |
| SL-13 | PO→SO→Invoice→DO workflow (SO reinterpreted) | HP-11 | UP-22, UP-23 | YES |
| SL-17 | Receipts | HP-12 | UP-24, UP-25 | YES |

### 4b. Excluded — not tested

| ID | Item | Reason not tested |
|---|---|---|
| — | Customer master e-invoice mandatory fields (sub-question under SL-11) | NS — PARTIAL, needs re-verification specific to Dalson before testable |
| SL-12 | AutoCount integration: ongoing 2-way sync mechanism | AIP — direction agreed (integrate not replace), API vs middleware vs DB access undefined |
| SL-14 | Document generation (SO/Invoice/DO PDFs) | Not locked — required outputs defined but layout/templates only partially available |
| SL-15 | Supplier-side procurement automation | OOS — explicitly excluded from Phase 1 |
| SL-16 | Full ERP replacement | OOS — MAIA is overlay only |

### 4c. Assumptions & gaps

- **Receipts (SL-17)** — RESOLVED. Locked in Scope Lock v2 and now has full test coverage (HP-12, UP-24, UP-25) above.
- **SO-stage (SL-13)** — RESOLVED to LOCKED (SUPERSEDED) at HIGH confidence (2026-07-19, written confirmation applied to Scope Lock v2). No longer a live risk.
- **Pricing logic (SL-10)** — RESOLVED to LOCKED (2026-07-22, owner-confirmed). Both open mechanics closed: chatbot surfaces last-few-order price history per customer+item (staff decides manually, not auto-suggested), and standard AutoCount price auto-applies as fallback when no history exists. Now has full test coverage (HP-13, UP-26, UP-27) above.
- **SL-11 unblock mechanism** — resolved via Ivan (Vendor/Dev) confirmation, not via the accountant/Ms Tan as earlier docs assumed. Worth noting so the AutoCount-dealer conversation isn't re-opened unnecessarily.
- **Coordinator / warehouse / driver roles** — VoC's own coverage gate flags these as BELIEVED, not CONFIRMED (owner described them secondhand, they never spoke in the source transcript). Several test cases above (UP-04, UP-05, HP-02, HP-05, HP-09, UP-18) assign these roles as testers on the assumption the process the owner described is accurate. NEEDS CLIENT INPUT to confirm actual named testers before UAT execution — tracked as a sign-off agenda item in the End-user & Process Map (§6, item #2).
- **End-user & Process Map now exists** (built 2026-07-13) — role/actor assignments above are current against it; named-tester confirmation for coordinator/warehouse/driver roles remains the one open item, carried in the Map's sign-off agenda rather than as a missing artifact.
- **Test data** — all "sample" data placeholders above need real Dalson data (customer records, SKUs, sample POs) per VOC-005/VOC-008 export request; none of it should be fabricated at execution time.

---

## Verdict

**13 of 17 scope items are testable this cycle** (up from 12 — SL-10 promoted to LOCKED 2026-07-22, owner confirmed pricing mechanic). The checklist above covers all 13 with ≥1 happy + ≥2 unhappy cases each. 4 items are correctly excluded (SL-12, SL-14 — AGREED IN PRINCIPLE with a real open mechanic; SL-15, SL-16 — OOS), plus one sub-question (e-invoice mandatory fields) that isn't a standalone Scope Lock item. No locked item is missing coverage as of this regeneration.

---

## See Also
- [[Dalson — VoC Extraction]]
- [[Dalson — Lens Alignment Report]]
- Scope Lock v2 — Dalson Industrial Supplies (Lark)
