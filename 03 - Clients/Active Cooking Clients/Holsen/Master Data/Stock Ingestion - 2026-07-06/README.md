---
owner: Gareth
status: review
last_reviewed: 2026-07-06
---

# Holsen Stock & Batch Ingestion Issue — 2026-07-06

## Overview
While loading Holsen's stock and batch data (source: `260625 Holsen Stock.xlsm`) into MAIA, the tech team's ingestion checks flagged several groups of records that could not be loaded automatically. Full technical detail is in `Raw Tech Team Analysis (internal).xlsx` (4 sheets: Summary, Item, Batch, Stock).

## What's blocked
1. **4 product names unreadable/ambiguous** in the source file (broken `#REF!` formula, 1 ambiguous SKU match, 2 products not in the Product list) — 16 Excel rows affected.
2. **3 products on hold for pricing** — inconsistent or missing unit price across 2026 records (Sodium Cyanide Briquettes Draslovka, Sodium Cyanide 98% Tablet, Zinlite 2000B) — 166 rows.
3. **25 batches blocked** — 24 tied to the pricing hold above, plus 1 genuine duplicate batch number (`17427`).
4. **144 stock movement rows failed** — 143 have outbound quantity exceeding recorded inbound stock for the batch (likely missing goods-in records); 1 has a fractional quantity (17.75) on a whole-number-only item.
5. **1 assumption made during ingestion needs confirmation** — treated unit `PC` as `Nos` for batches `10802-4-04` and `7401028`.

## Client handoff
`Holsen Stock Ingestion - Action Required (2026-07-06).xlsx` is the client-facing version — same findings translated into plain language with a "Read Me First" tab and fill-in-the-blank columns for Holsen to supply corrections/confirmations. Sent to Holsen for response.

## Status
Awaiting Holsen's response. Once received, tech team will re-run the load for the affected records.

## See Also
- [[Client Overview]]
- [[Onboarding Status]]
