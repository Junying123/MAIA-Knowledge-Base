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
	- Customer
	- Item / Product
	- Store / Warehouse
	- Inventory Balance
	- Send in Xeersoft's own format — Mindhive will handle all mapping to MAIA's API

- [ ] **In the product schema, flag which fields are vanilla vs customised**
	- CK Auto-specific fields: car model, car code, brand, product origin
	- Add a column to distinguish standard fields from client customisations
	- This allows Mindhive to build a vanilla-level integration first and handle custom fields separately

- [ ] **Provide User API documentation**
	- Mindhive needs this to sync CK Auto users from Xeersoft into MAIA
	- Each user maps to one WhatsApp number (one-to-one)

- [ ] **Clarify how to filter store/warehouse locations**
	- Identify which locations are finished-goods (sellable stock) vs raw/inbound/return stock
	- Only finished-goods locations should surface on MAIA's side at this stage

- [ ] **Set up a sandbox environment with CK Auto's data**
	- Load CK Auto's actual data into the sandbox
	- Provide Mindhive with sandbox access credentials
	- Sandbox must be a **carbon copy of production** — so the UAT switchover to production does not break anything

---

### As Soon As Possible

- [ ] **Confirm with CK Auto the chatbot rollout phases**
	- Phase 1 (confirmed): internal CK Auto staff only
	- Phase 2 (TBC): client-facing chatbot
	- Confirm timeline for each phase with the client

- [ ] **Confirm who owns the UAT checklist preparation**
	- Options: Xeersoft prepares, Mindhive prepares, or both independently then merge
	- Revert to Ivan Chiang with the decision

- [ ] **Nominate one CK Auto representative to join the project working group**
	- This person should understand day-to-day operations and order-taking flow
	- They will represent the client during pre-UAT testing and internal alignment

---

### Before Mid-April 2026

- [ ] **Collect 30–40 PO/order samples from CK Auto**
	- How their staff currently send orders — WhatsApp messages, plain language, handwritten notes, voice
	- Examples: "Proton X70, brake pad, 2 sets" — conversational phrasing
	- Mindhive needs these samples for internal QA and chatbot training before going product-ready

---

### Before UAT (by 2026-05-01)

- [ ] **Build webhooks/triggers for master data changes**
	- Customer: create, update, delete → push to Mindhive
	- Item/Product: create, update, delete → push to Mindhive
	- If Xeersoft's system supports configurable webhook modules, configure to call Mindhive's endpoint
	- If custom development is required, flag to Mindhive so they can prepare a generic listener endpoint

---

## Mindhive Action Items

### After Receiving Xeersoft Schema (~1 April)

- [ ] **Own all field mapping from Xeersoft's format → MAIA APIs**
	- Xeersoft sends raw payload; Mindhive maps to MAIA's data structure
	- Xeersoft does not need to learn or interface MAIA's APIs directly

---

### Soon (This Week)

- [ ] **Send Xeersoft the client onboarding document**
	- Company profile information required
	- WABA (WhatsApp Business Account) setup requirements
	- Other chatbot configuration inputs needed from the client

- [ ] **Send Xeersoft the chatbot behaviour document**
	- For CK Auto to fill in
	- Covers how the chatbot should respond, tone, supported flows, escalation rules

- [ ] **Set up a dedicated project working group**
	- Separate from the existing Xeersoft × Mindhive BD/partnership group
	- Members: Mindhive team, Xeersoft team, one CK Auto representative
	- Purpose: day-to-day transactional coordination on this project

---

### By Mid-April 2026

- [ ] **Spin up a dedicated CK Auto MAIA instance**
	- Connected to Xeersoft's sandbox environment
	- Populated with live data pulled from Xeersoft sandbox
	- Mindhive integration dev starts ~1 April (dev back from leave)

- [ ] **Have dev-ready integration version running**
	- Xeersoft team and CK Auto rep can pre-test and validate data accuracy
	- Confirm data is syncing correctly before formal UAT begins

---

### Before UAT (by 2026-05-01)

- [ ] **Prepare Mindhive's standard UAT checklist for MAIA features**
	- Sync with Xeersoft to produce one unified checklist covering all 3 parties
	- Mindhive, Xeersoft, and CK Auto each sign off on the final checklist

- [ ] **Coordinate sandbox → production switchover with Xeersoft**
	- Switch the CK Auto MAIA instance from Xeersoft sandbox to Xeersoft production data
	- Validate nothing breaks after the switch before UAT begins

---

## Key Decisions Made

| Topic | Decision |
|-------|----------|
| Integration ownership | Mindhive owns the full integration build. Xeersoft provides raw data format; Mindhive does all mapping. |
| Data sync direction | Master data (Customer, Item, Store) flows Xeersoft → MAIA. Orders created in MAIA are **not** back-synced to Xeersoft. |
| Order operations | MAIA supports Create, Update, Cancel. Hard delete is blocked. |
| Inventory sync method | Cron-based pull (~every 30 min). Single final stock balance per SKU — no reserve/safety stock breakdown needed for MVP. |
| Customer data model | All CK Auto customers use the **company** data structure. Each customer is assigned one price list (A / B / C / D). |
| Product bundles | CK Auto uses parent-child bundles (2 levels only, no deeper nesting). Mindhive to ingest the assembly master. |
| Chatbot channel | WhatsApp only. Phase 1 = internal CK Auto staff. Client-facing in a later phase. |
| Deployment | Hosted and deployed by Mindhive. No on-prem or private cloud requirement. |

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
