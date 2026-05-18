---
owner: Gareth
status: draft
last_reviewed: 2026-05-18
source_transcript: "[[Granola/Transcripts/2026-05-15/Fixguru feedback sync-transcript]]"
---

# Fixguru UAT Action Items (2026-05-15 Feedback Sync)

## Historical Pricing

### What Fixguru wants
When creating a SO/quotation, surface for each line item:
- Last transaction net price for that **customer × item** combo
- Discount % applied in that last transaction
- Current list price (benchmark)

> **Note:** Fixguru does NOT use customer-specific pricing tiers. Historical pricing = last transaction data only.

### Expected Chatbot Display

When user adds item to SO via chatbot:

```
📦 *Item A* added for *Customer XYZ*

Price history (last transactions):
• SO-001 — Qty 20 @ RM 8.10 (10% off list RM 9.00)
• SO-002 — Qty 30 @ RM 9.90 (10% off list RM 11.00)

Current list price: RM 15.00

Which price to apply?
1. Last transaction — RM 9.90 (10%)
2. List price — RM 15.00
3. Enter custom price
```

### Action Items

- [ ] **Surface historical pricing in chatbot** — when user adds item to SO, show last transactions for that customer × item: SO ref, qty, unit price, discount % vs list price. LLM to service from existing data.
- [ ] **Surface historical pricing in UI (front end)** — price list pop-up shows last transactions + current list price. No customer-specific tier needed.
- [ ] **Implement derived discount % field** — discount % = `(standard_price - unit_price) / standard_price × 100`. Two-way input: type unit price → derive %, OR type % → compute unit price.
- [ ] **Add brand to item display string** — formatted string: `[item_code] [brand] [item_name]`. Brand currently not shown.
- [ ] **Minimum price guardrail** — if unit price goes below item minimum price, trigger alert/block. Tied to item price movement feature.
- [ ] **Confirm item-level discount in backend** — check with Amir if discount % stored at item level or price list level. Determines how to derive historical discount accurately.
- [ ] **Collect calculator policy samples from Fixguru** — they updated volumetric/dimensional calculator rules; gather sample data, document transformation ratios. Scope customisation cost if needed.

### Out of Scope (confirmed)
- Customer-specific pricing tiers — Fixguru does not use this
- FOC (free-of-charge) qty on line items — not in current scope; document and defer

---

## PDF Template

### Context
Fixguru's current workflow: SO draft → AutoCount PDF → send as pro-forma to customer → back-and-forth adjustments → confirm → proceed to next stage in MAIA. They **prefer AutoCount's PDF format** over MAIA's V3 PDF. Need to clarify scope.

### Action Items

- [ ] **Clarify PDF scope with Fixguru** — confirm if MAIA PDF V3 customisation is in scope, or if they will use AutoCount's PDF for all customer-facing documents
- [ ] **Fix item code on PDF** — currently shows MAIA internal ID; must show AutoCount's external item code
- [ ] **Delivery note PDF — multiple warehouse checks** — Fixguru's delivery note requires more than one warehouse check field; current PDF only shows one
- [ ] **Sync volumetric formula to PDF** — dimensional/volumetric calculation must appear on PDF output (SO and/or delivery note)
- [ ] **Define SO draft → pro-forma workflow** — document the handoff: MAIA SO draft syncs to AutoCount → AutoCount PDF used as pro-forma → customer confirms → adjustments looped back → advance stage in MAIA

### Out of Scope (to confirm)
- Full PDF template redesign to match AutoCount's layout — if confirmed out of scope, document and manage expectation with Fixguru

---

## AutoCount Sync

## Architecture Decisions (need alignment)

- [ ] **Confirm cutoff date approach with Fixguru** — agree on snapshot date (likely 2nd UAT date). Before that date: no sync. From that date forward: full two-way sync on all documents (SO, Invoice, etc.)
- [ ] **Scope standalone invoice sync** — documents created in AutoCount during migration period sync as standalone invoices into MAIA (no historical SO required as parent)
- [ ] **Define two-way sync config field** — hard-coded cutoff date param in sync config; anything before that date is untouched

## Fixguru-specific Deliverables

- [ ] **Request snapshot file from Fixguru** at cutoff date — needs: (1) customer credit limits, (2) open invoice exposure per customer (statement of accounts format). MAIA ingests this to seed credit data.
- [ ] **Scope daily stock reconciliation** — at configurable time (e.g. 7AM), MAIA pulls stock snapshot from AutoCount to stay in sync. Define policy per instance (some factories run 24/7).
- [ ] **Resolve external ID mapping** — when item created in MAIA pushes to AutoCount and AutoCount generates a different ID, MAIA must store + reference AutoCount's external ID (not internal MAIA ID)
- [ ] **Fix item code display in chatbot** — chatbot currently shows MAIA internal ID; switch to show external SKU/item code from AutoCount
- [ ] **Update retainer/SOW** — two-way sync scope deviates from original spec (expected full MAIA migration); retainer revision needed

## Out of Scope (confirmed)

- Historical data migration (5–7 years) — **chargeable separate service**, not included in current SOW
- Full backfill of 100k+ invoices — not viable; snapshot approach only

## Follow-up

- [ ] **Prepare comprehensive written doc** — full list of what MAIA will do / won't do / out of scope for AutoCount sync. Bring to next sync with Fixguru.
- [ ] **Sync with Amir** on item-level discount data availability — historical pricing feature depends on this being in the backend

## See Also

- [[Fixguru business workflow]]
- [[Feature Requests & Gaps]]
- [[SOW/Fixguru SOW]]
