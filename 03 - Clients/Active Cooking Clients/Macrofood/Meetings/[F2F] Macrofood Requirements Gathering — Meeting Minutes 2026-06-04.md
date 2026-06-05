---
owner: Gareth
status: draft
last_reviewed: 2026-06-04
lark_url:
---

# [F2F] Macrofood Requirements Gathering — Meeting Minutes

**Date:** 4 June 2026
**Type:** Face-to-Face
**Facilitator:** Jack (MAIA)
**Attendees:**
- David (Macrofood — Director / Credit Controller)
- CJ (Macrofood — Sales)
- Finance/Account rep (Macrofood)
- Jack, Gareth, Ivan (MAIA)

---

## Discussion Summary

### 1. End-to-End Order Workflow

Current state: customers place orders via WhatsApp → salesperson manually interprets and creates order in SQL → warehouse picks goods and updates actual weight → invoice generated → customer sends payment slip → finance reconciles against bank statement.

MAIA proposed approach was walkthrough live. Agreed flow: sales team creates their own pick list outside MAIA first, then uploads the confirmed pick list to MAIA with final weights and quantities. MAIA then creates SO → Delivery Order → Invoice and pushes all documents to SQL.


### 2. AR Reconciliation

MAIA demoed the existing AR interface. System auto-matches bank statement entries to outstanding invoices; ambiguous matches are surfaced for human review. Finance team finalises the knock-off. External consultant does the final bank reconciliation outside MAIA.

Macrofood clarified payment methods: some customers pay via bank transfer, some via cash (collected by driver), some via QR merchant scan. Merchant/QR settlement reconciliation was discussed — confirmed out of scope for MAIA; only customer invoice AR is in scope. Cash payments from drivers are currently tracked by Finance via Excel; same AR knock-off flow will apply inside MAIA.

### 3. Bulk Price Update

Currently no system manages pricing — David updates prices via WhatsApp image/word messages generated manually (via ChatGPT). Prices change roughly monthly or more frequently when market shifts; typically 30 SKUs change per update.

MAIA will become the pricing source of truth. Prices uploaded via Excel template. System enforces pricing per customer: global wholesale / global retail / customer-specific fixed price. Minimum price protection prevents below-floor pricing. Salesperson can view and, if permitted, adjust; enforcement level configurable.

Volume-based pricing (discount tiers by quantity) discussed — not supported in current MAIA; flagged as gap.

### 4. Product Catalog

David currently generates image-based catalog (not PDF) using ChatGPT — product photos + prices. Two catalog variants: wholesale and retail. Used for inactive customers and new prospects. Customer preference: images over PDF because older customers won't open PDF files.

MAIA to design catalog generation feature. Follow-up needed: David to share current catalog samples before format is finalised.

### 5. Stock Entry / GRN Matching

Pain point: supplier delivers slightly different quantity than invoiced (e.g. 1000 kg ordered, 998 kg received). Admin currently manually keys GRN into SQL then converts to purchase invoice. Only one warehouse person — bottleneck.

MAIA proposed: warehouse uploads GRN document (photo/PDF) → MAIA extracts and pre-populates fields → human verifies actual quantity → creates purchase invoice. AI handles item code and UOM mapping mismatches; learns from user overrides.

**Decision: Purchasing module not in Phase 1.** Flagged for later phase.

### 6. Credit Limit Control

MAIA blocks order when customer hits credit limit. David receives notification and approves override as credit controller. Credit limit and payment terms data pulled from SQL. Discussion confirmed that blocking applies on either amount limit or payment terms — either/or.

Payment model: most customers operate on "one invoice" basis — must pay previous invoice before placing next order. Standard terms 30 / 60 days, but in practice varies (2 weeks to 45 days). Macrofood controls exposure by setting a customer credit limit based on order pattern (e.g. ~5,000/week).

### 6a. Pro Forma Invoice

David asked whether MAIA can issue a pro forma invoice (some customers' financiers require a document with the word "invoice" before paying; David collects ~30% deposit against it). MAIA sales order serves a similar role but is not a proper invoice. Flagged — to confirm whether a dedicated pro forma document is needed.

### 7. Delivery & Pick List Management

Pick list is currently paper-based; orders are grouped by delivery route/driver. David consolidates orders by location and communicates via WhatsApp group. MAIA pick list module demoed — newer version in progress.

Agreed: Macrofood will continue creating pick list outside MAIA. Delivery trip management module (driver app, proof of delivery upload) noted as a post-Phase 1 add-on.

### 8. Credit Notes

Discussed credit note numbering — Finance rep prefers CN number to reference the original invoice number. MAIA generates document IDs automatically (cannot override). Option noted: create CN in SQL then MAIA pulls back. Recommended: use MAIA running number to simplify; Finance to align internally.

### 9. User Roles & Access

- 3 sales reps (manage own customers — no cross-visibility)
- David (director / credit controller)
- Finance/Account person (AR reconciliation)
- 1 warehouse person (5 warehouses — 3 nearby, 2 further)
- External consultant (final bank recon, outside MAIA)

Stock count done once a year only — root cause of inaccurate stock figures in SQL (variances ~10–20 units, not large enough to block orders).

### 10. Onboarding Requirements

Four items needed from Macrofood before MAIA can be deployed:
1. New SIM card (for MAIA WhatsApp number)
2. Meta / WhatsApp Business account
3. OpenAI account + API key
4. AWS account (company email) + grant MAIA access

### 11. Future / Parking Lot

- Inventory aging / expiry notifications — David wants alerts for slow-moving or near-expiry stock; not in Phase 1
- Batch tracking — not currently practiced; possible future if Macrofood adopts
- Damage stock reporting — MAIA issue ticket feature can serve as workaround
- Warehouse barcode / QR scanning (WMS) — high cost (RM1M+ enterprise scale), separate future discussion
- AP reconciliation (supplier payments) — later phase
- Payment chasing escalation: Account alerts → Sales chases → David escalates; MAIA overdue notifications to be set up accordingly

---

## Decisions Made

1. **Confirmed workflow:** Internal team creates pick list outside MAIA → once confirmed (final weight/qty/price) → upload to MAIA → MAIA creates SO → DO → Invoice → pushes to SQL. (No draft-in-MAIA-first step — order enters MAIA only after pick list confirmed.)
2. **SQL = master** for customer list and item list; pricing managed and enforced inside MAIA.
3. **Core system deployed first;** customizations (AR reconciliation, bulk price update, product catalog) deployed separately after go-live.
4. **David is credit controller** — sole approver for order overrides when credit limit is exceeded.
5. **Credit limit block triggers on either** credit amount limit OR payment terms exceeded (either/or, not both required).
6. **Product catalog** = image-based, not PDF; two groups: wholesale and retail; final format TBD pending sample from David.
7. **AR main user** = Account/Finance person; external consultant does final bank recon outside MAIA.
8. **Merchant/QR settlement reconciliation is out of scope** — MAIA only handles customer invoice AR.
9. **Purchasing module (AP, GRN matching) not in Phase 1** — flagged for future phase.
10. **Each sales rep sees own customers only** — no cross-visibility between reps.
11. **Volume-based pricing not supported** in current MAIA — flagged as a gap; no enforcement for now.
12. **Pricing migrates to MAIA** as source of truth — currently lives outside any system.
13. **Delivery trip management** = post-Phase 1 module.
14. **Warehouse barcode/WMS** = future phase due to high cost and SOP adoption requirements.

---

## Action Items

### MAIA
- [ ] Send onboarding checklist to Macrofood (SIM, Meta, OpenAI, AWS steps) — **Gareth**
- [ ] Schedule meeting with SQL vendor to get integration credentials
- [ ] Deploy core system first; customizations separately on confirmed timeline
- [ ] Send calendar invite for next session (~14 Jun 2026) — **Ivan**
- [ ] Review Macrofood doc samples (invoice, CN, DO, pick list) and match PDF format

### Macrofood
- [ ] Obtain new SIM card for MAIA WhatsApp number
- [ ] Set up Meta / WhatsApp Business account
- [ ] Open OpenAI account + generate API key (share with MAIA)
- [ ] Open AWS account using company email + grant MAIA access
- [ ] Share current product catalog samples with MAIA team
- [ ] Send doc samples: invoice, credit note, DO, pick list

---

## Next Steps

| Item | Owner | Target |
|---|---|---|
| Onboarding checklist sent | Gareth | ASAP |
| SQL vendor meeting | MAIA | ASAP |
| Calendar invite for next session | Ivan | This week |
| Macrofood delivers 4 onboarding prerequisites | David | Before training |
| Training session | MAIA + Macrofood | ~14–15 Jun 2026 |
| Sales module go-live | MAIA | End Jun 2026 |
| Customizations (AR, bulk price, catalog) | MAIA | Post-go-live |

---

## See Also

- [[Client Overview]]
- [[Onboarding Status]]
- [[Ordermaia x Macrofood Proposal]]
- [[Meetings/F2F Requirements Gathering Summary 2026-06-04]]
- [[Macro Frozen SQL Integration]]
