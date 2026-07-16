---
owner: Gareth
status: draft
last_reviewed: 2026-07-16
lark_url:
---

# Macrofrozen — 1st UAT Working Checklist (16 Jul 2026)

## A. Access & Input
- [ ] Registered-user access to MAIA chatbot
- [ ] Conversational WhatsApp-style order intake

## B. Master Data Management
- [ ] Customer record retrieve/create/amend
- [ ] Customer notes / activity log
- [ ] Item & pricing lookup

## C. Order Capture
- [ ] WhatsApp order → draft Sales Order
- [ ] Customer PO upload & match
- [ ] Sales rep field access (customer/order create)

## D. Standard Document Flow
- [ ] Sales Order creation/submission
- [ ] Pick List generation
- [ ] Actual-weight amendment
- [ ] Delivery Order creation
- [ ] Sales Invoice creation

## E. Inventory & Stock
- [ ] Stock entry / stock visibility
- [ ] Pick List CRUD

## F. Pricing & Credit Control
- [ ] Price-controller enforcement (David only)
- [ ] Bulk price update
- [ ] Credit-limit gate

## G. Sales Territory & Notifications
- [ ] Customer → sales-agent assignment
- [ ] Sales visibility isolation
- [ ] Payment escalation alerts

---

## Not covered this round
- [ ] ~~Proof-of-Delivery photo upload~~ — rejected by client
- [ ] ~~AR auto-reconciliation~~ — ships next sprint
- [ ] ~~Credit Note (SCN/CCN) flow~~ — known SQL mismatch
- [ ] ~~Quotation price-lock~~ — not yet confirmed
- [ ] ~~Product catalogue / dashboard / customer-notes persistence~~ — not locked
- [ ] ~~Warehouse foreign-worker MAIA access~~ — by design, never used

## See Also
- [[16Jul26 Macrofrozen MAIA UAT Signoff Checklist]]
- [[MAIA_UAT_Field_Guide_Play_It_Like_A_User]]
