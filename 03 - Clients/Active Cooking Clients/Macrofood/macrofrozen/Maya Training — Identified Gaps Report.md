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

## See Also
- `[[macrofrozen-scn-ccn-use-case-handoff]]`
- `[[brain/Gotchas]]`
