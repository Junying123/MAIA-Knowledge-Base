---
owner: Gareth
status: draft
last_reviewed: 2026-07-13
client: Fixguru
document_type: internal
version: v1
---

# Fixguru — Lens Alignment Report

Scope: **Check A only** (Scope Lock ↔ VoC). UAT Checklist and End-user & Process Map do not exist yet for Fixguru — Checks B, C, D are MISSING and not run. Checks E, F, G run partially, restricted to the two available docs.

## 1. Version Ledger

| Doc | Version | last_reviewed | Newest? | Stale vs spine? |
|---|---|---|---|---|
| Scope Lock v1 — Fixguru | v1 | 2026-06-23 | No | — (this is the spine) |
| Fixguru — VoC Extraction | v1 | 2026-07-13 | Yes | Newer — draws on a 2026-06-24 clarification (credit block level) that postdates Scope Lock by 1 day. Scope Lock has not been reconciled against it. |
| UAT Checklist | MISSING | — | — | — |
| End-user & Process Map | MISSING | — | — | — |

## 2. Alignment Scorecard

| Check | Pair | Result | # findings |
|---|---|---|---|
| A | Scope Lock ↔ VoC | DRIFT | 3 |
| B | Scope Lock ↔ UAT | MISSING (no UAT doc) | — |
| C | Scope Lock ↔ Process Map | MISSING (no Process Map) | — |
| D | VoC ↔ Process Map | MISSING (no Process Map) | — |
| E | Cross-status (2-doc subset) | DRIFT | 1 |
| F | Gaps & Dependencies | GAP | 3 |
| G | Version & freshness | DRIFT | 1 |

## 3. Drift Table

| # | Item | Doc A says | Doc B says | Check | Verdict | Recommended fix |
|---|---|---|---|---|---|---|
| 1 | Credit-limit block point | Scope Lock Part 1.F: "Customer approaching credit limit **at time of Sales Order creation**" triggers management approval | VoC-030 / learnings.md (clarified 2026-06-24, one day after Scope Lock's last_reviewed): "**Block at DN level, not order level** — blocking early loses money collection opportunity" | A, E, G | VoC is right (newer, explicit clarification session; Scope Lock simply predates it) | Update Scope Lock Part 1.F and Part 1.E to say blocking happens at DN creation, not SO creation. This is a real behavioural spec change, not cosmetic. |
| 2 | Historical pricing — acceptance bar detail | Scope Lock Part 1.A lists "Check historical pricing" and "Apply last transaction price or discount" as plain chatbot capabilities, no further spec | VoC-001–005 (CONFIRMED, direct quote) demands a specific bar: invoice-sourced (not order-sourced), min 5 rows per item, one-glance single message, phone-number-first retrieval — locked as the formal step-1 acceptance bar in the 2026-06-24 debrief | A | VoC is right — this is the client's actual, escalated, evidenced requirement; Scope Lock's description is too generic to be testable | Rewrite Scope Lock's historical-pricing row to embed the locked acceptance bar (invoice-sourced, ≥5 rows, one-glance) verbatim, or link out to the 2026-06-24 debrief as the authoritative spec. This is the single highest-priority fix — it's the item that has failed sign-off 4 times. |
| 3 | Customer lookup | Scope Lock Part 1.A: "Search by customer name **or** phone number" — treats both as equal | VoC-002/Priority-3 (2026-06-24 debrief): phone-number-first retrieval, because customers WhatsApp in "often with no name/company" | A | Client decision needed — not a contradiction, but Scope Lock understates the operational reality VoC surfaces | Clarify in Scope Lock whether phone-first is the primary retrieval path (with name as fallback) rather than two co-equal options, to match how the client actually receives orders. |

## 4. Orphans

**In scope, not evidenced (over-scope risk):**
- None found — every Scope Lock Part 1 locked item traces to at least indirect VoC evidence or an explicit Scope Lock open item.

**VoC signal, no scope home (the gap register):**
- **Brand in item display** (VOC-009) — no mention anywhere in Scope Lock. Client explicitly said "brand matters... right now we're not showing brand."
- **Delivery Note stock-check block + picking-list weight/volume fields** (VOC-013, VOC-015, VOC-016) — Scope Lock's Part 1.G (Stock Alerts) covers low/out-of-stock *notifications* but not a hard block on DN generation when stock is insufficient, and doesn't mention weight/volume as required DN fields. Volumetric is flagged as an open item (#7) but weight and the stock-check block are not flagged anywhere.
- **SST/tax hidden from customer-facing documents** (VOC-025) — not mentioned in Scope Lock's Part 1 (PDF handoff) or Part 2 (out of scope). Currently undocumented either way.

**Notably resolved, not a drift:**
- Multi-branch (VOC-017) — Scope Lock Part 2 correctly places this out of scope, and this matches the later 2026-06-10 fact-check (Fixguru confirmed they don't actually use branches). No action needed; flagging here only so it isn't mistaken for a missed gap.
- PDF AutoCount-parity (VOC-010/011) and Mandarin intake (VOC-028) — both are VoC signals without a firm scope commitment, but Scope Lock correctly carries them as **open items** (#3 and #6) rather than silently dropping them. This is the correct pattern — no fix needed.

## 5. Fix List (ordered by blast radius)

1. **Scope Lock v1, Part 1.E/F — credit block point.** Change "at time of Sales Order creation" to "at Delivery Note creation" for the credit-limit block. This is a behavioural contradiction with the client's own explicit clarification and is the highest-blast-radius fix — it affects both what gets tested and what gets built. *(Drift #1)*
2. **Scope Lock v1, Part 1.A — historical pricing row.** Replace the generic description with the locked step-1 acceptance bar (invoice-sourced, ≥5 rows/item, one-glance single message, phone-first retrieval) or link directly to the 2026-06-24 debrief as the spec of record. This is the item that has blocked sign-off for 4 UAT rounds and holds up Milestone-2 (RM24,000) — until Scope Lock states the real bar, "done" stays subjective. *(Drift #2)*
3. **Scope Lock v1 — add three items to Part 2 or Part 3 (Open Items).** Log brand-in-item-display, DN stock-check block + weight/volume fields, and SST/tax-hidden-from-customer as either locked, out-of-scope, or open items — currently they exist only in the VoC corpus with no scope disposition at all. Undocumented gaps are the ones most likely to resurface as a surprise UAT failure. *(Orphans)*
4. **Scope Lock v1, Part 1.A — customer lookup.** Clarify phone-first vs. name-first retrieval priority to match actual order-intake pattern. Lower blast radius — likely doesn't change behaviour much, but affects UAT test design. *(Drift #3)*
5. **Build the UAT Checklist and End-user & Process Map**, then re-run this lens-align across all four docs. Checks B, C, D cannot run until these exist, and Gate-2 requires all four aligned, not just Scope Lock/VoC.

## 6. Verdict

**DRIFT — 4 fixes before Gate-2** (3 drift items + orphan-gap logging), plus two entire lenses (UAT Checklist, Process Map) still missing and required before a full four-way alignment can be claimed. Do not treat Scope Lock v1 as sign-off-ready until fix #1 and #2 are resolved — #2 in particular is the exact item that has already cost 4 failed UAT rounds.

## See Also

- [[Scope Lock v1 — Fixguru]]
- [[Fixguru — VoC Extraction]]
- [[Meetings/2026-06-24 Fixguru UAT Debrief]]
- [[context/learnings]]
