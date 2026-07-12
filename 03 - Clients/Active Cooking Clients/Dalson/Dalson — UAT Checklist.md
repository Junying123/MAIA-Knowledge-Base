---
owner: Gareth
status: draft
last_reviewed: 2026-07-12
---

# Dalson Industrial Supplies — UAT Checklist

Sources: Scope Lock v1 (current state, reconciled 2026-07-12) · VoC Extraction (2026-07-12) · Dalson Industrial Supplies Customer Narrative Document (used for realistic test data/roles only — vendor voice, not scope authority).

---

## Step 1 — Scope Inventory

| Scope ID | Item name | Status | Client agreed? | Testable? |
|---|---|---|---|---|
| SL-1 | MAIA as operational layer on top of AutoCount | LOCKED | YES | **YES** |
| SL-2 | Core order intake via unstructured channels (WhatsApp/call/email) | LOCKED | YES | **YES** |
| SL-3 | Messaging channel = Telegram | LOCKED (Supersession, was "Superseded", now confirmed 2026-07-12) | YES | **YES** |
| SL-4 | SKU alias mapping / matching | RESOLVED → LOCKED (2026-07-12: core MAIA platform engine) | YES | **YES** |
| SL-5 | POD capture (photo) | RESOLVED → LOCKED (2026-07-12: core MAIA feature) | YES | **YES** |
| SL-6 | AutoCount integration (read/write access + data migration) | RESOLVED → LOCKED (2026-07-12: access granted, data migrated) | YES | **YES** |
| SL-7 | Customer approval flow (SO/Invoice authority — single approver) | RESOLVED → LOCKED (2026-07-12: Xiao Bai sole approver) | YES | **YES** |
| SL-8 | Credit note handling (invoice-level) | RESOLVED → LOCKED (2026-07-12: platform supports it) | YES | **YES** |
| SL-9 | Warehouse / stock update responsibility | RESOLVED → LOCKED (2026-07-12: platform supports it) | YES | **YES** |
| SL-10 | Pricing logic (ad hoc vs structured per customer) | NEEDS SCOPING (Blocking) | UNKNOWN | NO |
| SL-11 | Customer & item/SKU creation via chatbot | Blocking item, unresolved | UNKNOWN | NO |
| SL-12 | Customer master requirements (e-invoice mandatory fields) | NEEDS SCOPING — PARTIAL, re-verify | UNKNOWN | NO |
| SL-13 | PO → SO → Invoice → DO workflow automation (approval/edit/override rules) | AGREED IN PRINCIPLE — NOT LOCKED | NO | NO |
| SL-14 | Document generation (SO/Invoice/DO PDFs — layout/templates) | AGREED IN PRINCIPLE — NOT LOCKED | NO | NO |
| SL-15 | Supplier-side procurement automation | OUT OF SCOPE | N/A | NO |
| SL-16 | Full ERP replacement | OUT OF SCOPE | N/A | NO |

**Testable this cycle: SL-1 through SL-9 (9 items).**

---

## Step 2 — Unhappy-Path Bank

| # | Trigger type | Real situation from the docs | Stresses |
|---|---|---|---|
| 1 | Invalid input | Customer PO uses their own item wording that doesn't match Dalson's internal SKU naming (Customer Narrative §4.3: "customer item descriptions may differ from internal SKU naming") | SL-4 |
| 2 | Ambiguity | Customer's item description matches more than one similar SKU (Narrative: "similar SKUs can create confusion") | SL-4 |
| 3 | Missing / incomplete data | Customer record incomplete/not found in AutoCount when preparing an invoice (Narrative §4.4: "if the customer is not properly found in AutoCount, staff still need to manually key in invoice details") | SL-1, SL-6 |
| 4 | Wrong actor / permission | Someone other than Xiao Bai (e.g. a sales coordinator) attempts to approve a Sales Order or Invoice | SL-7 |
| 5 | Conflict / duplicate | Same PO forwarded into MAIA twice (staff error, common with WhatsApp/Telegram forwarding) | SL-2 |
| 6 | Interruption / wrong state | AutoCount sync fails or times out mid-order-draft | SL-1, SL-6 |
| 7 | Downstream integrity | Owner needs to retrieve a past Delivery Order later from a live order reference (VOC-012: "master DO... maybe I cannot find it anymore") | SL-2, SL-5, SL-6 |
| 8 | Missing / incomplete data | Delivery is completed but no POD photo is uploaded | SL-5 |
| 9 | Wrong actor / permission | Message sent to the MAIA Telegram account from an unregistered/unknown number | SL-3 |
| 10 | Must-NOT | MAIA must NOT finalize/push an invoice to AutoCount without human (Xiao Bai) review and confirmation (SL-1 AC: "no scenario where MAIA replaces AutoCount as ledger/invoicing source") | SL-1, SL-7 |
| 11 | Must-NOT | MAIA must NOT issue a credit note at customer-account level — only at invoice level (VOC-022, Dalson's confirmed practice) | SL-8 |
| 12 | Boundary / limit | Credit note requested against an invoice ID that doesn't exist / already fully credited | SL-8 |
| 13 | Downstream integrity | Stock/inventory update from an order must reflect back correctly without manual re-entry (SL-9) | SL-9 |

---

## Step 3 — UAT Test Cases

### SL-1 — MAIA as operational layer on top of AutoCount

| Test ID | Scope ref | Path | Trigger type | Role/actor | Precondition | Steps | Test data | Expected result | Pass/Fail | Tester & date |
|---|---|---|---|---|---|---|---|---|---|---|
| HP-01 | SL-1 | Happy | — | Xiao Bai | MAIA connected to AutoCount, staging data loaded | 1. Ask MAIA to look up a known customer. 2. Confirm details match AutoCount. | Existing customer name from AutoCount export | Customer details shown in MAIA match AutoCount record exactly; no invented fields | | |
| UP-01 | SL-1 | Unhappy | Missing data | Sales coordinator | Customer not yet in AutoCount | 1. Forward PO for an unlisted customer. 2. Observe MAIA's response. | PO from a customer not in AutoCount export | MAIA flags customer as not found and asks staff to key in / confirm — does NOT invent or auto-create a ledger entry | | |
| UP-02 | SL-1 | Unhappy | Must-NOT | Xiao Bai | Draft SO prepared in MAIA | 1. Prepare a draft SO via MAIA. 2. Attempt to treat the draft as final without explicit confirmation step. | Any draft order | MAIA does NOT push the order to AutoCount as a finalized ledger entry without an explicit human confirmation action | | |
| UP-03 | SL-1 | Unhappy | Interruption | Xiao Bai | Mid-draft order in progress | 1. Start an order draft. 2. Simulate/observe an AutoCount sync interruption. 3. Resume. | In-progress draft | MAIA surfaces the sync failure to the user rather than silently completing or losing the order | | |

### SL-2 — Core order intake via unstructured channels

| Test ID | Scope ref | Path | Trigger type | Role/actor | Precondition | Steps | Test data | Expected result | Pass/Fail | Tester & date |
|---|---|---|---|---|---|---|---|---|---|---|
| HP-02 | SL-2 | Happy | — | Sales coordinator | MAIA channel live | 1. Forward a real customer PO image/text into MAIA. 2. Review the extracted draft. | Sample PO (per Narrative §7.1 doc-sample request) | MAIA produces an order draft with items/quantities matching the PO | | |
| UP-04 | SL-2 | Unhappy | Conflict/duplicate | Sales coordinator | Same PO available twice | 1. Forward the same PO into MAIA twice. 2. Observe behavior. | Duplicate PO | MAIA warns of a likely duplicate order rather than silently creating two orders | | |
| UP-05 | SL-2 | Unhappy | Invalid input | Sales coordinator | — | 1. Forward a garbled/partial PO (e.g. cropped image, incomplete text). 2. Observe MAIA's handling. | Deliberately incomplete PO | MAIA flags missing/unclear information and asks for clarification rather than guessing a full order | | |
| UP-06 | SL-2 | Unhappy | Downstream integrity | Xiao Bai | Order placed and delivered weeks prior | 1. Ask MAIA/backend workspace to retrieve the DO for a specific past order. 2. Confirm it's found. | A live order reference from a completed order | The correct DO is retrievable by order reference — addresses VOC-012 pain point directly | | |

### SL-3 — Messaging channel = Telegram

| Test ID | Scope ref | Path | Trigger type | Role/actor | Precondition | Steps | Test data | Expected result | Pass/Fail | Tester & date |
|---|---|---|---|---|---|---|---|---|---|---|
| HP-03 | SL-3 | Happy | — | Xiao Bai / staff | Dalson Telegram account set up | 1. Send a message from a registered staff Telegram account. 2. Confirm MAIA responds. | Registered account | MAIA responds correctly via Telegram | | |
| UP-07 | SL-3 | Unhappy | Wrong actor | Unregistered person | — | 1. Message MAIA's Telegram account from an unknown/unregistered number. 2. Observe response. | Any non-staff Telegram account | MAIA does not process the message as a valid staff order/action (rejects or ignores per access-control design) | | |

### SL-4 — SKU alias mapping / matching

| Test ID | Scope ref | Path | Trigger type | Role/actor | Precondition | Steps | Test data | Expected result | Pass/Fail | Tester & date |
|---|---|---|---|---|---|---|---|---|---|---|
| HP-04 | SL-4 | Happy | — | Sales coordinator | Item master loaded | 1. Forward PO with an item description that closely matches one SKU. 2. Confirm MAIA's match. | e.g. "WD40 spray lube" → matches catalogued WD40 SKU | MAIA correctly matches to the right SKU | | |
| UP-08 | SL-4 | Unhappy | Invalid input | Sales coordinator | — | 1. Forward PO using customer's own wording that differs from internal SKU naming. 2. Observe match/suggestion. | Customer-style description vs internal SKU name | MAIA either matches correctly or surfaces a closest-match suggestion for staff confirmation — does not silently pick a wrong SKU | | |
| UP-09 | SL-4 | Unhappy | Ambiguity | Sales coordinator | Two+ similar SKUs exist | 1. Forward PO with a description matching multiple similar SKUs. 2. Observe MAIA's handling. | e.g. two similar valve sizes/models | MAIA flags ambiguity and asks staff to confirm the correct SKU rather than auto-selecting one | | |

### SL-5 — POD capture (photo)

| Test ID | Scope ref | Path | Trigger type | Role/actor | Precondition | Steps | Test data | Expected result | Pass/Fail | Tester & date |
|---|---|---|---|---|---|---|---|---|---|---|
| HP-05 | SL-5 | Happy | — | Driver | Delivery scheduled in MAIA | 1. Complete a delivery. 2. Upload a POD photo via MAIA. 3. Confirm it's attached to the order/DO. | Sample delivery + photo | Photo is stored and linked to the correct order/DO record | | |
| UP-10 | SL-5 | Unhappy | Missing data | Driver | Delivery scheduled | 1. Complete a delivery. 2. Do NOT upload a POD photo. 3. Check order status in backend. | — | Order/DO status reflects missing POD rather than silently marking delivery fully complete | | |
| UP-11 | SL-5 | Unhappy | Downstream integrity | Xiao Bai | POD uploaded previously | 1. Retrieve a past order. 2. Confirm the POD photo is still viewable from the order/DO trail. | Past completed delivery | POD photo remains retrievable and correctly linked, addressing VOC-011/012 | | |

### SL-6 — AutoCount integration (access + data migration)

| Test ID | Scope ref | Path | Trigger type | Role/actor | Precondition | Steps | Test data | Expected result | Pass/Fail | Tester & date |
|---|---|---|---|---|---|---|---|---|---|---|
| HP-06 | SL-6 | Happy | — | Xiao Bai | Migrated data live | 1. Confirm a sample of migrated customer/item records in MAIA match AutoCount. 2. Push a confirmed SO from MAIA. 3. Verify it appears correctly in AutoCount. | Sample record set | Data matches 1:1; pushed SO appears correctly in AutoCount | | |
| UP-12 | SL-6 | Unhappy | Interruption | Xiao Bai | — | 1. Simulate AutoCount unavailability. 2. Attempt to push a confirmed order. 3. Observe MAIA's response. | Any confirmed order | MAIA surfaces the failure clearly, does not silently drop or duplicate the record | | |
| UP-13 | SL-6 | Unhappy | Missing / incomplete data | Xiao Bai | — | 1. Identify a record in AutoCount not present in the migrated data. 2. Query it via MAIA. | Edge-case record | MAIA does not fabricate data for a record it cannot find; flags as not found | | |

### SL-7 — Customer approval flow (single approver: Xiao Bai)

| Test ID | Scope ref | Path | Trigger type | Role/actor | Precondition | Steps | Test data | Expected result | Pass/Fail | Tester & date |
|---|---|---|---|---|---|---|---|---|---|---|
| HP-07 | SL-7 | Happy | — | Xiao Bai | Draft SO/Invoice ready | 1. Xiao Bai reviews draft. 2. Xiao Bai approves. 3. Confirm it proceeds to AutoCount. | Sample draft order | Order proceeds only after Xiao Bai's approval | | |
| UP-14 | SL-7 | Unhappy | Wrong actor / permission | Sales coordinator | Draft SO/Invoice ready | 1. Sales coordinator (not Xiao Bai) attempts to approve. 2. Observe system response. | Same sample draft | System blocks or does not treat coordinator's action as valid approval | | |
| UP-15 | SL-7 | Unhappy | Must-NOT | — | Draft SO/Invoice ready, unapproved | 1. Leave draft unapproved. 2. Confirm it is not auto-pushed to AutoCount after a timeout/delay. | Same sample draft | Draft remains pending; is not auto-approved or auto-submitted | | |

### SL-8 — Credit note handling (invoice-level)

| Test ID | Scope ref | Path | Trigger type | Role/actor | Precondition | Steps | Test data | Expected result | Pass/Fail | Tester & date |
|---|---|---|---|---|---|---|---|---|---|---|
| HP-08 | SL-8 | Happy | — | Xiao Bai / finance | Existing invoice with a returned item | 1. Issue a credit note referencing the specific invoice ID and item. 2. Confirm it's recorded correctly. | Sample invoice + return item | Credit note is tied to the correct invoice ID, not the customer account | | |
| UP-16 | SL-8 | Unhappy | Must-NOT | Xiao Bai / finance | — | 1. Attempt to issue a credit note at the customer-account level (no specific invoice reference). 2. Observe system response. | Customer account, no invoice ref | System does not allow account-level credit note — this contradicts Dalson's confirmed practice (VOC-022) | | |
| UP-17 | SL-8 | Unhappy | Boundary / limit | Xiao Bai / finance | — | 1. Attempt to issue a credit note against an invoice ID that doesn't exist or is already fully credited. 2. Observe response. | Invalid/exhausted invoice ID | System rejects with a clear error, does not create an orphaned or duplicate credit note | | |

### SL-9 — Warehouse / stock update responsibility

| Test ID | Scope ref | Path | Trigger type | Role/actor | Precondition | Steps | Test data | Expected result | Pass/Fail | Tester & date |
|---|---|---|---|---|---|---|---|---|---|---|
| HP-09 | SL-9 | Happy | — | Warehouse staff | Order confirmed | 1. Confirm an order. 2. Confirm stock levels update to reflect the fulfilled order. | Sample stocked SKU | Stock quantity reflects the order without manual re-entry | | |
| UP-18 | SL-9 | Unhappy | Downstream integrity | Warehouse staff | — | 1. Fulfill an order for an item marked as one that doesn't require stock-count tracking (per VOC-006: only a few items need real tracking). 2. Confirm system behaves correctly (doesn't force a stock update where none is expected). | Non-tracked SKU | System respects the item's tracking configuration; does not force an update where the client doesn't track stock | | |

---

## Step 4 — Coverage & Traceability

### 4a. Traceability

| Scope ID | Locked item | Happy cases | Unhappy cases | Covered? |
|---|---|---|---|---|
| SL-1 | MAIA overlay on AutoCount | HP-01 | UP-01, UP-02, UP-03 | YES |
| SL-2 | Order intake via unstructured channels | HP-02 | UP-04, UP-05, UP-06 | YES |
| SL-3 | Telegram channel | HP-03 | UP-07 | YES |
| SL-4 | SKU alias mapping | HP-04 | UP-08, UP-09 | YES |
| SL-5 | POD capture | HP-05 | UP-10, UP-11 | YES |
| SL-6 | AutoCount integration (access + migration) | HP-06 | UP-12, UP-13 | YES |
| SL-7 | Approval flow (Xiao Bai) | HP-07 | UP-14, UP-15 | YES |
| SL-8 | Credit note handling | HP-08 | UP-16, UP-17 | YES |
| SL-9 | Warehouse/stock update | HP-09 | UP-18 | YES |

### 4b. Excluded — not tested

| ID | Item | Reason not tested |
|---|---|---|
| SL-10 | Pricing logic (ad hoc vs structured) | NS — genuinely unresolved; no evidence in VoC or transcript; needs direct client question before it can be scoped, let alone tested |
| SL-11 | Customer & item/SKU creation via chatbot | Blocking — client-confirmed need (VOC-015/016/017/030) but validation constraints and fallback flow not yet defined; do not test until scoped |
| SL-12 | Customer master requirements (e-invoice) | NS — PARTIAL, needs re-verification specific to Dalson before testable |
| SL-13 | PO→SO→Invoice→DO workflow automation | Not locked — approval/edit/override rules undefined. **Also flag:** VoC (VOC-021) records the owner saying "no sales order" exists in their current process, directly contradicting this assumed flow — do not test an SO stage until this is confirmed with the client |
| SL-14 | Document generation (SO/Invoice/DO PDFs) | Not locked — required outputs defined but layout/templates only partially available |
| SL-15 | Supplier-side procurement automation | OOS — explicitly excluded from Phase 1 |
| SL-16 | Full ERP replacement | OOS — MAIA is overlay only |
| — | Receipts (generate only on customer request, per VOC-023/024) | VoC signal with **no Scope Lock home** — Scope Lock doesn't mention receipts at all. Not tested this cycle; flagged as a gap below, not silently assumed |

### 4c. Assumptions & gaps

- **Receipts (VOC-023/024)** — client-confirmed business rule (generate on request only, not automatic) has no corresponding Scope Lock item. NEEDS CLIENT/SCOPE INPUT: should this be added to Scope Lock as a locked item before next UAT cycle, given it's a clear, low-ambiguity rule?
- **SO-stage contradiction (SL-13)** — see 4b. This needs direct client confirmation before the PO→SO→Invoice→DO flow can be locked or tested as designed.
- **Pricing logic (SL-10)** — NEEDS CLIENT INPUT. No source in this corpus answers ad hoc vs structured/per-customer pricing. Recommend adding as a standing question on the Client Confirmation Agenda (already present in Scope Lock).
- **Coordinator / warehouse / driver roles** — VoC's own coverage gate flags these as BELIEVED, not CONFIRMED (owner described them secondhand, they never spoke in the source transcript). Several test cases above (UP-04, UP-05, HP-02, HP-05, HP-09, UP-18) assign these roles as testers on the assumption the process the owner described is accurate. NEEDS CLIENT INPUT to confirm actual named testers before UAT execution — this is also flagged in the End-user & Process Map, which does not yet exist for Dalson.
- **End-user & Process Map does not exist for Dalson** — role/actor assignments above are provisional; a formal process map should confirm named UAT testers per role before this checklist is executed live.
- **Test data** — all "sample" data placeholders above need real Dalson data (customer records, SKUs, sample POs) per VOC-005/VOC-008 export request; none of it should be fabricated at execution time.

---

## Verdict

**9 of 16 scope items are testable this cycle.** The checklist above covers all 9 with ≥1 happy + ≥2 unhappy cases each (SL-3 has 1 unhappy — Telegram's smaller surface area, acceptable). 7 items are correctly excluded, most notably the two live blockers (pricing logic, customer/item creation via chatbot) which must not be tested until scoped. Biggest structural risk carried into this checklist: no End-user & Process Map exists yet, so role assignments for non-owner testers are provisional.

---

## See Also
- [[Dalson — VoC Extraction]]
- [[Dalson — Lens Alignment Report]]
- Scope Lock v1 — Dalson Industrial Supplies (Lark)
