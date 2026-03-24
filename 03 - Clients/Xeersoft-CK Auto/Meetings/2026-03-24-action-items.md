---
owner: Gareth
status: approved
last_reviewed: 2026-03-24
client: Xeersoft-CK Auto
---

# Action Items — Xeersoft × Mindhive Integration Kickoff (24 Mar 2026)

**Meeting:** Xeersoft × Mindhive Integration Kickoff
**Date:** 2026-03-24
**Attendees:** Ivan Chiang (Mindhive), Marson Ng (Xeersoft Tech), Missip (Xeersoft PM)
**Raw transcript:** [[03 - Clients/Xeersoft-CK Auto/Meetings/2026-03-24-xeersoft-mindhive-integration]]

**Target UAT start: 2026-05-01**

---

## Xeersoft Action Items

### By 1 April 2026

- [ ] **Provide raw payload/schema for all 4 master data entities**
	- Customer, Item/Product, Store/Warehouse, Inventory Balance
	- Send in Xeersoft's own format — Mindhive will handle all mapping to MAIA's API

- [ ] **Flag vanilla vs customised fields in the product schema**
	- In the **Item/Product master data schema document** that Xeersoft delivers to Mindhive (same document as above), add a column to mark which fields are standard (vanilla) vs CK Auto-specific (e.g., car model, car code, brand, product origin)


- [ ] **Provide User API documentation**
	- Mindhive needs this to sync CK Auto users from Xeersoft into MAIA
	- Each user maps to one WhatsApp number (one-to-one)

- [ ] **Clarify how to filter store/warehouse locations**
	- Identify which locations are finished-goods (sellable) vs raw/inbound/return stock
	- Only finished-goods locations should surface in MAIA at this stage

- [ ] **Set up sandbox environment with CK Auto's data loaded**
	- Provide Mindhive with sandbox access credentials
	- Must be a carbon copy of production so the UAT switchover does not break anything

### By Mid-April 2026

- [ ] **Collect 30–40 PO/order samples from CK Auto**
	- How CK Auto staff currently send orders — WhatsApp, plain language, handwritten notes
	- Mindhive needs these for internal QA and chatbot training before going product-ready

### Before UAT (by 2026-05-01)

- [ ] **Build webhooks/triggers for Customer and Item master data changes**
	- Customer and Item: create, update, delete → push to Mindhive
	- If Xeersoft's ERP supports configurable webhook modules, configure to call Mindhive's endpoint
	- If custom dev is needed, flag to Mindhive so they can prepare a generic listener endpoint

### Before 1 April 2026 (unblocks other items)

- [ ] **Confirm with CK Auto the chatbot rollout phases**
	- Phase 1 (confirmed): internal staff only
	- Phase 2 (TBC): client-facing — confirm timeline with CK Auto
	- Needed before Mindhive can finalise chatbot behaviour document

- [ ] **Confirm who prepares the UAT checklist and revert to Ivan**
	- Options: Xeersoft, Mindhive, or both independently then merge

- [ ] **Nominate one CK Auto representative to join the project working group**
	- Should understand day-to-day operations and order-taking flow
	- Does not need to work on the project — just monitor and represent the client

---

## Mindhive Action Items

### After Receiving Xeersoft Schema (~1 April)

- [ ] **Own all field mapping from Xeersoft's format → MAIA APIs**
	- Xeersoft sends raw payload; Mindhive maps to MAIA's data structure
	- Xeersoft does not need to learn or interface MAIA's APIs directly

### By Mid-April 2026

- [ ] **Spin up a dedicated CK Auto MAIA instance connected to Xeersoft sandbox**
	- Separate from the current demo instance, with live data from Xeersoft sandbox

- [ ] **Have dev-ready integration version running for pre-testing**
	- Xeersoft team and CK Auto rep can validate data accuracy before formal UAT

### Before UAT (by 2026-05-01)

- [ ] **Prepare Mindhive's standard UAT checklist for MAIA features**
	- Sync with Xeersoft to produce one unified checklist covering all 3 parties

- [ ] **Coordinate sandbox → production switchover with Xeersoft**
	- Validate nothing breaks after the switch before UAT begins

### Before 1 April 2026 (unblocks other items)

- [ ] **Send Xeersoft the client onboarding document**
	- Covers: company profile, WABA account setup requirements, chatbot config info needed
	- Xeersoft needs this to gather info from CK Auto before integration can progress

- [ ] **Send Xeersoft the chatbot behaviour document**
	- For CK Auto to fill in — how the chatbot should behave (client-facing)
	- Depends on Xeersoft first confirming the chatbot rollout phases with CK Auto

- [ ] **Set up a dedicated project working group**
	- Separate from the existing BD/partnership group
	- Members: Mindhive team, Xeersoft team, one CK Auto representative

---

## Key Decisions Made

| Topic | Decision |
|-------|----------|
| Integration ownership | Mindhive owns the full integration build. Xeersoft provides raw data format; Mindhive does all mapping. |
| Data sync direction | Master data flows Xeersoft → MAIA. Orders created in MAIA are **not** back-synced to Xeersoft. |
| Order operations | MAIA supports Create, Update, Cancel. Hard delete is blocked. |
| Inventory sync | Cron-based pull (~every 30 min). Single final stock balance per SKU — no reserve/safety stock needed for MVP. |
| Customer data model | All CK Auto customers use the **company** structure. Each customer has one price list (A/B/C/D). |
| Product bundles | Parent-child bundles, 2 levels only. Mindhive to ingest the assembly master. |
| Chatbot channel | WhatsApp only. Phase 1 = internal staff. Client-facing in a later phase. |
| Deployment | Hosted and deployed by Mindhive. No on-prem requirement. |

---

## Timeline Summary

| Date | Milestone | Owner |
|------|-----------|-------|
| ~2026-04-01 | Xeersoft delivers sandbox + all master data schemas | Xeersoft |
| ~2026-04-01 | Mindhive integration dev begins | Mindhive |
| ~2026-04-15 | Dev-ready CK Auto MAIA instance live for pre-testing | Mindhive |
| 2026-05-01 | UAT starts | Both |

---

## See Also

- [[03 - Clients/Xeersoft-CK Auto/Client Overview]]
- [[03 - Clients/Xeersoft-CK Auto/Integration/Xeersoft Integration Spec]]
- [[03 - Clients/Xeersoft-CK Auto/Meetings/2026-03-24-xeersoft-mindhive-integration]]
