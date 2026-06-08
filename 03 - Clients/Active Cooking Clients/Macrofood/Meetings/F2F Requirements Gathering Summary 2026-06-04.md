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

### Phase 1 (Go-live end of June)
1. **Customer places order** via WhatsApp to Macrofood
2. **Sales creates draft SO internally** (own process, outside MAIA) and runs own pick list
3. **Warehouse picks goods**, confirms actual weight, quantity and price on physical pick list
4. **Confirmed pick list uploaded to MAIA** — MAIA receives final confirmed figures; creates SO → Delivery Order → Invoice
5. **Documents pushed to SQL**
6. **Customer receives goods** → driver collects signed DO
7. **Customer sends payment slip** → Finance does AR reconciliation in MAIA (bank statement + payment slip + invoice matching) → knock off in SQL

> **Key principle:** SQL stays master for customer list and item list. Pricing managed and enforced inside MAIA.

### Phase 2 (Order intake via MAIA — to be sorted)
WhatsApp order → MAIA creates draft SO → warehouse picks → updates actual weight in MAIA → submits SO → DO + Invoice generated

> Pick list workflow needs to be finalised before Phase 2 can proceed.

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

### Stock Entry / Inventory Management
- Pain point: human error in weighing and data entry — picker picks wrong weight, checker misses it, quantity recorded in SQL is wrong
- GRN extraction does not solve this (GRN is generated after manual keying; the error is in the keying itself)
- What was discussed: MAIA to send alerts when stock is near expiry or aging is high (slow-moving stock sitting too long)
- Example use case: stock imported in a container, only 4 tons sellable within 6 months — alert when approaching expiry or when stock has not moved for an extended period
- **Status: Inventory alert feature to be explored — not in Phase 1 scope**

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
