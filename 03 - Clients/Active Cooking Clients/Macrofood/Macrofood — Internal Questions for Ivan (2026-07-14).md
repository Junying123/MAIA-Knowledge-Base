---
owner: Gareth
status: review
last_reviewed: 2026-07-14
lark_url: https://eg69120xnei.sg.larksuite.com/docx/HuYldO3gCoEHEpxURIml9WOHgNg
---

# Macro Frozen — Internal Questions / Actions for Ivan (Tech Lead)

Not client-facing — these need a tech/feasibility answer before we either build, or go back to Grace/David with a scoped-down ask.

## 1. POD enforcement (NS-07)

Is a **conditional/partial enforcement rule** technically buildable — i.e. POD required for some DOs but not others — or does the system only support an all-or-nothing block? This determines how we frame the client question ("all vs some DOs require POD").

## 2. Delivery trip / stock tracking gap

Currently Out-of-Scope, but flagged as a real gap (DO needs delivery proof even without full trip management). Confirm whether this needs its own ticket regardless of how the POD client question is answered.

## 3. Pick-list upload testing (AS-01) — status check

Confirm Kevin's upload-back support (pick-list PDF → Maya → amend SO) is tested and working. Hard deadline **Thu 16 Jul** — this is the top-priority "happy flow," blocks Macro Frozen readiness if it slips.

## 4. Item historical pricing — feasibility (NS-08)

Macro Frozen wants to check last SO/SI price **across items**, with **discount and transaction date shown**, when quoting a regular customer. Our existing Base feature ([[01 - MAIA Product/Product Specs/Item Historical Pricing/Item Historical Pricing & Discount]], built for Fixguru) only shows the single latest price per item, no date, one item at a time — the spec explicitly lists "multiple past prices" and "price history graph" as Out of Scope/Future. Before we ask the client to accept the narrower Base behavior, need your read: is extending it to show transaction date + a cross-item view a small lift or a real scope item? This decides whether we scope-widen or manage expectations down.

## 5. Quotation → SO price-lock feasibility (AS-07 / VOC-014)

Proposed flow: create QTN → edit price → submit QTN → convert to SO. The client's actual pain (VOC-014) is a **price-lock** — a SO shouldn't quietly go out cheaper than what was quoted. Is it feasible to carry the QTN price forward as a floor/flag on the converted SO? Need this answered before asking David whether he wants it enforced.

## 6. Item-name fuzzy matching (VOC-002) — confirm Base coverage

Client uses informal/fuzzy item names in orders (e.g. "pork belly slice skin on" vs formal SKU name). We're assuming Base MAIA's existing fuzzy-matching/learning covers this adequately for Macro Frozen's catalog. Can you confirm this is live and sufficient, or does it need tuning/training data from Macro Frozen specifically?

## 7. Cash-from-driver recording (VOC-009) — build estimate

Finance currently keeps a self-made Excel log of cash collected from drivers. SL-02 (AR reconciliation) only covers bank/slip matching today. Rough estimate needed on whether this fits cleanly into the existing AR module before we offer it to the client as an option (see client question #22).

## 8. Damage / batch QC photo log (VOC-023) — build estimate

Warehouse wants to photo-log damaged/discoloured stock against a batch. Only a generic "issue ticket" was floated in the 4 Jun meeting — never scoped. Rough estimate needed before offering this to the client (see client question #23).

---

## See Also
- [[Macrofood — Scope Lock v1 (reconciled)]]
- [[Macrofood — VoC Extraction]]
- [[Macrofood — Client Clarification Questions (2026-07-13)]]
