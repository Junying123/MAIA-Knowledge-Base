---
owner: Gareth
status: draft
last_reviewed: 2026-06-05
lark_url:
---

# [F2F] Macrofood Requirements Gathering — Meeting Summary

**Date:** 4 June 2026
**Type:** Face-to-Face
**Attendees:** David (Macrofood), CJ (Macrofood), Finance/Account rep (Macrofood), Jack, Gareth, Jeremy (MAIA)

---

## Agreed Core Workflow (End-to-End)

1. **Customer places order** via WhatsApp to Macrofood
2. **Sales creates the order internally** and runs Macrofood's own pick list
3. **Warehouse picks the goods** and confirms actual weight, quantity and price
4. **Confirmed pick list uploaded to MAIA** — MAIA receives final, confirmed figures only
5. **MAIA generates documents** — Sales Order → Delivery Order → Invoice (at confirmed weight) → pushes into SQL
6. **Customer receives goods** → driver collects signed DO
7. **Customer sends payment slip** → Finance does AR reconciliation in MAIA (bank statement + payment slip + invoice matching) → knock off in SQL

> **Key principle:** SQL stays master for customer list and item list. Pricing managed and enforced inside MAIA.

> **Open question:** Confirm with David — does the order enter MAIA first as a draft (then warehouse picks and confirms weight), or is the pick list fully done before uploading to MAIA? Both were discussed; needs one final confirmation.

---

## Key Features Discussed

### AR Reconciliation
- MAIA auto-matches bank statement to payment slips and outstanding invoices
- Finance team reviews and confirms matches; human finalises knock-off
- Handles partial payments and partial invoice allocation
- Main AR user: Account/Finance person
- Consultant does final bank recon outside MAIA

### Bulk Price Update
- Upload Excel to update prices in MAIA
- System enforces pricing per customer (wholesale / retail / customer-specific)
- Minimum price protection — prevents wrong pricing
- ~30 SKUs typically change at one time
- Price currently not managed in SQL — will migrate to MAIA

### Product Catalog
- Image-based (not PDF) — customers scared to open PDF
- Contains current prices + product photos
- Two customer groups: wholesale and retail
- Used for inactive customers and new prospects
- Follow-up needed: David to share current catalog samples before MAIA designs format

### Credit Limit Control
- MAIA blocks order when customer hits credit limit
- David receives notification and approves override (credit controller role)
- Credit limit data pulled from SQL

---

## Items NOT in Phase 1 Scope

- AP (supplier payment) reconciliation — later phase
- Delivery trip management — later phase
- Warehouse barcode / QR scanning (WMS) — high cost, separate future discussion
- Batch tracking — possible future phase
- Inventory aging alerts — future feature

---

## Users on MAIA (Confirmed)

| Role | Count |
|---|---|
| Sales | 3 |
| David (owner/coordinator) | 1 |
| Finance / Account | 1 |
| Warehouse | 1 |
| **Total** | **~6** |

- Each salesperson sees only their own customers
- David has credit controller access

---

## Onboarding Prerequisites (Macrofood to prepare)

- [ ] New SIM card for MAIA WhatsApp number
- [ ] Meta / WhatsApp Business account
- [ ] OpenAI account + API key (share with MAIA)
- [ ] AWS account (company email) + grant MAIA access
- [ ] Share current product catalog samples
- [ ] Provide SQL vendor contact for integration setup

---

## Action Items

### MAIA
- [ ] Contact Macrofood's SQL vendor to set up integration
- [ ] Send onboarding checklist with step-by-step guide
- [ ] Schedule follow-up call (~14 June) to confirm SQL setup and system readiness
- [ ] Deploy core system first; customizations separately
- [ ] Clarify pick list entry point question with David

### Macrofood
- [ ] Complete 4 onboarding prerequisites (SIM, Meta, OpenAI, AWS)
- [ ] Share product catalog samples
- [ ] Provide SQL vendor contact

---

## Target Go-Live

**End of June 2026** — Sales module first

---

## See Also

- [[Client Overview]]
- [[Onboarding Status]]
- [[Macro Frozen SQL Integration]]
- [[Ordermaia x Macrofood Proposal]]
