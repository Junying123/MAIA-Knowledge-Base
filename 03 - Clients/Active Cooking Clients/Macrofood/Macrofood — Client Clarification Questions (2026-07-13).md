---
owner: Gareth
status: review
last_reviewed: 2026-07-14
lark_url: https://eg69120xnei.sg.larksuite.com/docx/GFfodwcSXo9MHtxHBQplFr6ygUc
---

# Macro Frozen — Open Questions for Grace / David

**Updated 2026-07-14** — supersedes the 13 Jul version. Removed items resolved since (outdoor sales scope, CN doctype mechanism). Added new items surfaced from a deeper cross-check of the Scope Lock against the Voice-of-Customer record: picking accountability, quotation price-lock, cash-from-driver, damage/QC logging, and a sharper item-historical-pricing scope question.

Hi Grace / David — a few things we need to confirm before we finalize the build and get everything ready for testing on **Thursday, 16 July**. Answers here directly unblock the catalog, pricing, credit note, delivery, and reporting pieces.

## 1. Product catalog

1. How many templates do you want for your product catalog, and how many products/SKUs per image or page?
2. For each catalog image, which SKU does each product/price tie to?
3. Should the output be image-only, PDF, or both?

## 2. Pick list workflow

4. We understand from a recent call that you may want to keep using your own existing pick list rather than the new Maya-generated PDF flow (create → warehouse manager shares with pickers → pickers record actual qty → upload back to Maya). Can you confirm: will your team actually use the new Maya pick-list flow, or keep the current process outside the system?
5. After the pick list confirms actual weight/quantity, should MAIA automatically generate the DO/Invoice for your review, or wait for someone to explicitly say "confirm and generate"?
6. The new pick-list flow gives us visibility at the **warehouse manager** level — any quantity shortfall is caught before the order is finalized. Is that enough for your accountability needs, or do you need to know exactly **which individual picker** picked a short or wrong line (so it can be traced back to a specific person)?

## 3. Credit note

7. The credit note will carry the original invoice number as a reference field, but will run its own separate number series rather than copying the invoice number exactly. Does that meet your need to avoid confusing customers, or do you specifically need the CN number itself to match the invoice number?

## 4. Customer info (CRM)

8. Beyond logging notes/events/tasks against a customer (which is confirmed), which customer master fields — address, phone, billing address, contact — should sales/admin be able to edit directly in MAIA, and which should require approval before syncing back to SQL?

## 5. Dashboard & reminders

9. Who should have access to the dashboard — David only, David + Finance, David + Finance + Sales, or everyone including the warehouse manager?
10. Should dashboard access differ by role — e.g. should Sales only see their own customers' orders, the same way they can only see their own customers today?
11. What should the dashboard show first — order status, payment/AR exceptions, pending credit approvals, or something else?
12. Who should get daily reminders — the same people as the dashboard, or a narrower list (e.g. only Finance for payment reminders, only the warehouse manager for pick-list reminders)?
13. Should reminders trigger on a fixed daily schedule, or immediately when something happens (e.g. an order gets blocked, a payment goes overdue)?
14. Should reminders show up inside MAIA only, or also get pushed to WhatsApp/Telegram?

## 6. Inventory aging / expiry alert

15. What should trigger a near-expiry or slow-moving stock alert (e.g. days left before expiry, or days since last movement)?
16. Who should receive this alert?

## 7. Credit control

17. When an order is blocked for exceeding a customer's credit limit, who exactly should approve it? Should the system record a reason when someone overrides the block?

## 8. Payment chasing / overdue alerts

18. When a customer's payment is overdue, who should be notified first — Finance, the salesperson, David, or all three — and after how many days overdue?

## 9. Proof of delivery (POD)

19. Do ALL delivery orders require a photo as proof of delivery before being marked "delivered" — or only some? If only some, what decides which ones need it?

## 10. Item historical pricing

20. We understand you check last SO/Invoice pricing across items — including discount and transaction date — when quoting a regular customer. Our current system shows the **single latest price** per item at order entry, but not the date, and only one item at a time (not side-by-side across items). Is the latest-price-per-item view enough, or do you specifically need the transaction date and a multi-item comparison view?

## 11. Quotations for big customers

21. Once a Quotation is submitted for a big customer, should the Sales Order created from it be blocked or flagged if someone tries to price it lower than the quote — or is that not necessary?

## 12. Cash & stock record-keeping (new)

22. Do you want MAIA to also record cash collected by drivers (replacing your current Excel log), or should that stay a separate process outside MAIA?
23. Do you want warehouse staff to be able to photo-log damaged or discoloured stock against a batch inside MAIA (as a record for later reference), or should that stay outside the system for now?

---

Please get back to us by **Thursday, 16 July** so we can lock these in ahead of testing. Happy to jump on a quick call if easier — just let us know.
