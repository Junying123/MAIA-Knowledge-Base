---
owner: Gareth
status: draft
last_reviewed: 2026-06-05
lark_url:
---

# [F2F] Macrofood Requirements Gathering — Meeting Summary

**Date:** 4 June 2026
**Type:** Face-to-Face
**Attendees:** David (Macrofood), CJ (Macrofood), Finance/Account rep (Macrofood), Jack, Gareth, Ivan (MAIA)

---

## Agreed Core Workflow (End-to-End)

1. **Customer places order** via WhatsApp to Macrofood
2. **Sales creates a draft Sales Order internally** (outside MAIA) and generates their own pick list
3. **Warehouse picks the goods** and confirms actual weight, quantity and price on the physical pick list
4. **Confirmed pick list uploaded to MAIA** — MAIA receives final confirmed figures only; creates SO → Delivery Order → Invoice
5. **Documents pushed to SQL**
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
- Image-based (not PDF) 
- Contains current prices + product photos
- Two customer groups: wholesale and retail
- Used for inactive customers and new prospects
- Follow-up needed: David to share current catalog samples before MAIA designs format

### Stock Entry / GRN Matching
- Pain point: supplier invoices one quantity (e.g. 1000kg) but actual goods received is different (e.g. 998kg) — GRN and supplier invoice don't match
- Current process: warehouse takes physical GRN → admin manually keys into SQL → converts to purchase invoice; bottleneck as only one warehouse person
- MAIA proposed approach: warehouse uploads GRN document (photo/PDF) → MAIA extracts and pre-populates fields → human verifies actual received quantity → creates purchase invoice
- AI handles item code mapping and UOM conversion mismatches between supplier and Macrofood system; learns from user overrides
- **Status: Purchasing module not yet in MAIA — flagged as future phase**

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

## Action Items

### MAIA
- [ ] Send onboarding and sample data checklist
- [ ] Follow-up call with SQL vendor to confirm SQL setup
- [ ] Deploy core system first; customizations separately
- [ ] Clarify pick list entry point question with David

### Macrofood
- [ ] New SIM card for MAIA WhatsApp number
- [ ] Meta / WhatsApp Business account
- [ ] OpenAI account + API key (share with MAIA)
- [ ] AWS account (company email) + grant MAIA access
- [ ] Share current product catalog samples
- [ ] Finalize the pick-list workflow
- [ ] Send doc samples : invoice/CN, DO, picklist

---

## Timeline

| Milestone | Target Date |
|---|---|
| Training session | ~14–15 Jun 2026 |
| Sales module go-live | End of June 2026 |

> Customizations (AR reconciliation, bulk price update, product catalog) to be deployed separately after core go-live.

---

## See Also

- [[Client Overview]]
- [[Onboarding Status]]
- [[Macro Frozen SQL Integration]]
- [[Ordermaia x Macrofood Proposal]]
