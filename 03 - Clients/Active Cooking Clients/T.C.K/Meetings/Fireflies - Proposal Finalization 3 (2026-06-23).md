---
owner: Gareth
status: draft
last_reviewed: 2026-07-21
---

# Fireflies Transcript — Max Fresh Proposal Finalization (3)

Source: https://app.fireflies.ai/view/Max-Fresh-Proposal-Finalization::01KVCN76P7NVTVNHNDCW1PQBB9
Date: 2026-06-23
Participants: Jeremy Chan (Mindhive), Andrew Tay, Poh Yee Yew (T.C.K/Maxfresh logistics)

## Key points
- Agenda: logistics team testing feedback, phase 1 vs future scope recap, final go/no-go confirmation.
- SKU/product coding: existing AutoCount SKU codes carry over unchanged (e.g. brand-specific codes like "EMB1x10"); no relabeling.
- Brand/variant disambiguation: if a SKU has multiple brand variants, Maya will ask which brand; clients often adopt a structured WhatsApp message template (item/brand/quantity/customer) to speed up order processing — MAIA can help design this template.
- Processing time: real production processing ~1-2 min even for large POs (demo example: 5-page PO, 50 items, 2 POs processed in ~3 min on cheaper demo infra).
- Hardware: existing ask for pick-list assignment to specific pickers is deferred to requirements-gathering session (not yet configured); generic picking is default (any picker can pick).
- Picking workflow discussed in detail: picker marks "picking complete" via WhatsApp or backend; status flow includes in-progress/completed/canceled; only confirmed-complete records get pushed to AutoCount (canceled orders are never pushed, to avoid tampering with AutoCount data).
- Andrew wants ability to keep certain data (e.g. stock balances) in MAIA only, without pushing to AutoCount — confirmed possible, selective push/pull is flexible per data type (e.g. push invoices/DN/CN but not stock balances) as long as MAIA's own inventory is kept updated via manual stock entries.
- Approval flows for picking list sign-off: configurable, to be captured during onboarding requirements session (per client's exact approval hierarchy).
- Picking list vs delivery order: two separate documents, not to be renamed/merged — pick list workflow and DO workflow can each independently follow from the sales order.
- Stock deduction timing: sales order reserves stock (no deduction) since orders may still be canceled; actual deduction happens only at DO or invoice creation (client's choice which point).
- Time/date stamping requested: picking list should record timestamp when marked complete (configurable ask, not yet built) — NOT a physical signed copy, just a system timestamp.
- Document layout: invoice/DO/etc. previews will follow the client's existing AutoCount letterhead/layout format exactly — confirmed.
- Hosting: MAIA can be deployed on the same cloud environment T.C.K's AutoCount already runs on, avoiding extra third-party cost; alternative is Mindhive-hosted for an added fee. Andrew leaning toward using existing cloud, pending IT vendor confirmation.
- Third-party running costs disclosed (for clients without existing infra): ~RM800-900/month total for WABA (~RM20-30), ChatGPT API, and cloud infra combined — but since T.C.K already has infra, incremental cost should be lower.
- Push/pull to AutoCount confirmed fully flexible/selective by data type.
- Andrew to confirm internally with IT vendor before final signing; next touch-base scheduled for that Friday 3pm.
