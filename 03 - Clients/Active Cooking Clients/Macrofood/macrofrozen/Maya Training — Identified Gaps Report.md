---
owner: Gareth
status: draft
last_reviewed: 2026-07-20
---

# Maya Training — Identified Gaps Report

## Overview
Gaps identified from the Maya 訂單與倉儲出貨流程培訓會 order & warehouse workflow training sessions, sourced from:
- `[[Meetings/content_Maya 訂單與倉儲出貨流程培訓會_202607170008]]` (2026-07-17)
- `Granola/Transcripts/2026-07-16/Macrofood __ MAIA Training-transcript.md` (2026-07-16)

## Gaps

1. **Notification system not ready** — Maya cannot yet notify/remind users of pending actions.
2. **Management filtering incomplete** — cannot isolate one specific salesperson's data/performance; owner dashboard filter granularity insufficient.
3. **Customer remarks/preferences not fully shown in pick list / sales order output** — cutting method, weight range, delivery time, "China name", size are captured in customer profile but not carried into operational documents (pick list, SO).
4. **Accounting not fully covered** — Maya is order-focused; broader accounting scope needs separate follow-up (owner: Jeremy).
5. **Supplier / stock entry / cost / purchase invoice not fully integrated** — supplier name, cost, purchase invoice, supplier payment still handled in SQL, not Maya. Risk of mismatch if not entered consistently across both systems.
6. **Stock accuracy remains a practical risk** — no reconciliation guarantee; one-time stock check recommended before go-live.
7. **Sales order amendment ownership unresolved** — when actual picked quantity differs from order quantity (e.g. 12kg ordered vs 11.87kg actual), unclear whether sales side or warehouse side should amend the SO. Flagged as a pending action item.
8. **Credit visibility for management incomplete** — sales can see own customers' credit; broader management-wide credit view not yet finalized.
9. **Customer/related-company price linkage not finalized** — linked customers may need pricing to move together across accounts; not yet supported.
10. **Credit note / customer credit note not built** — explicitly flagged as next-round priority.
11. **Warehouse execution still paper/photo/checkpoint-based** — mobile direct-input for pickers not yet reliable; workers not yet adapted to system-based entry.
12. **Combine-routing logic for multi-customer/multi-stall scenarios unresolved** — e.g. one boss covering multiple stalls/outlets still needs correct order separation logic.
13. **Customer churn / inactivity alert not automatic** — concept discussed (notify if a customer hasn't ordered in a while) but not implemented.
14. **Duplicate customer detection incomplete** — scenarios include an old customer returning, two people from the same company, or different phone numbers for the same customer; system should block duplicate conversion but this is not fully proven/working.
15. **Pick-list route-selection method not finalized** — at pick list creation, whether to split by delivery route or by grouping 3 customers together was raised as still undecided ("這個我們還沒有finalizing").
16. **Customer preference data only lives in chat/Maya memory, not searchable in backend** — when asked "where can I find this", the answer was it's only in Maya's conversational memory, not surfaced in a searchable UI view. Root cause behind Gap #3.
17. **Payment reconciliation breaks on third-party payments** — concrete scenario: customer ABC company's invoice gets paid from a bank account that is not registered under "ABC company" — system can't auto-match, no clear resolved process for this beyond manual matching.
18. **Financial reports across related companies cannot be grouped** — explicitly stated current state: "都不能做成group" (cannot be grouped) "because it would be too chaotic" — direct confirmation that related-company financial linkage is not just unbuilt but was actively avoided due to complexity risk.

## Use Case Detail: Stock Entry & Packing List

**Stock entry flow discussed:**
- Stock entry created by item code + quantity, with batch tracking.
- Batch can come from supplier's own batch or SKU batch code; each item can carry its own batch, expiry date, shelf life.
- Serial number tracking possible for item-level items (e.g. "like iPhone serial number").
- Stock tracked in both pieces and kg (SQL-side); opening quantity, cost price, moving average cost also recorded at stock entry.
- Supplier packing list can eventually feed quantity/batch/stock entry creation, but not yet — supplier name and cost still on SQL side (see Gap #5).

**Packing list flow discussed:**
- Packing list = the picking-stage record showing actual quantity/weight picked per box/carton, line by line.
- Needed because carton weight varies per box (e.g. 25.8, 23.52, 21.3 kg) even when order is placed by carton/box count.
- Used downstream by sales/accounts to reconcile actual picked weight against the original sales order before invoicing (ties to Gap #7, 12kg vs 11.87kg example).
- Combined into one PDF/file per pick list once picking is complete — can be printed, emailed, or forwarded.

**Gap:**
- Stock entry does not yet fully cover supplier name, cost, and purchase invoice — still split across Maya and SQL.
- No confirmed one-time stock reconciliation done before go-live (see Gap #6).

## Use Case Detail: Item Image / Catalog

**Scenarios raised:**
- Item photo/image suggested as a faster way to identify an item or customer instead of typing full name/code.
- Barcode generated alongside packing at stock entry time.
- Photo/image can be shared to customer as a prescreen (link or download) alongside order documents.

**Gap:**
- No confirmed item catalog feature — image use was raised as an idea/proposal in discussion, not a demoed or built feature.
- No clarity on where item image would live (item master vs pick list vs customer-facing doc).

## Use Case Detail: Sales Management Dashboard

**Scenarios raised:**
- Dashboard shows total sales, MTD sales, and a graph-style overview per salesperson.
- Daily digest notification concept — surfacing what needs action (e.g. expiring items, pending payments).
- Aging list / overdue payment visibility tied into the dashboard.
- At-risk customer flagging based on credit/payment behavior.
- Sales-user level view is filterable to "own records only"; management wants a broader/full owner dashboard.

**Gap:**
- Management **cannot check each individual salesperson's performance** from the dashboard yet — no per-salesperson filter (same as Gap #2).
- Daily digest / notify-on-action concept discussed but not confirmed as built (ties to Gap #1).
- At-risk customer view and full owner dashboard authority not finalized.

## Use Case Detail: Lead / Prospect / Customer Conversion

**Flow discussed:**
- Lead/prospect can be created directly in chat, then converted to customer status as progress warrants (`lead → prospect → customer`).
- Business license can be attached at the point of conversion.
- A **prospect** is defined as a potential customer who has shown interest but is not yet confirmed.
- Customer profile fields discussed: contact, address, website, company registration data.
- Phone number is the key search/identification field — users can search customers via Telegram by name or phone number.
- A Facebook-connect path was also discussed as a lead-capture source (chat mentions "Facebook connection" for tracking where a lead originated).

**Gap / unresolved scenarios:**
- **Duplicate detection** — the team wants Maya to detect an existing customer and block duplicate conversion, covering:
  - an old customer returning after a gap,
  - two different people from the same company creating separate profiles,
  - the same customer using different phone numbers,
  - customer-ownership disputes (which salesperson "owns" a customer relationship).
- **Sales follow-up structure** — the team wants Maya to help track, per lead: who contacted them, what was quoted, what special requirements were mentioned, and whether the lead has progressed. This is a stated want, not yet a working feature.
- These items are not confirmed as built — raised as requirements during training, still open.

## Use Case Detail: Customer Preference Data

**Flow discussed:**
- Preference data is stored in the customer profile and intended to inform future order handling.
- Requested preference fields: cutting method, weight range, delivery time, route notes, recurring order behavior.
- Concrete examples raised in the session: "23 to 25 kg", "25 kg and above", "3 PM delivery", "do not be too fatty", and recurring weekly ordering habits.
- The system is expected to record recurring weekly ordering behavior and surface it as a reference for future orders.
- The team specifically asked that remarks, "China name" (customer-specific product/region naming), size, and similar operational details be carried through into pick list and sales order output — this is where warehouse staff actually need to see them.

**Gap:**
- This is **not yet fully working** — remarks and customer preference data are currently not fully carried into pick list output (same as Gap #3 above).
- Whether specific fields should be hidden or shown to different roles is still under evaluation.
- A future "customer hasn't ordered in a while" reminder use case was discussed as desirable but is not currently automatic (ties to Gap #13).

## Use Case Detail: Related / Family / Linked Company Scenarios

**Scenarios raised:**
- Same owner runs multiple stalls, multiple orders → team decided to keep them separate, not grouped.
- Same customer orders via different chat threads/locations → no link between them yet.
- Related companies → price changes should apply to both, not supported yet.
- Two people sharing one customer account, different prices → risk one sees the other's price.
- Friend-referral customers → relationship not captured in system.

**Gap:**
- No way to link related/family/sister companies for pricing, ordering, or reporting.
- Whether linked entities share one price profile or stay independent — still undecided.
- Extends Gap #9.

## See Also
- `[[macrofrozen-scn-ccn-use-case-handoff]]`
- `[[brain/Gotchas]]`
