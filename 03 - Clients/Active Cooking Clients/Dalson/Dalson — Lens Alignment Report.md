---
owner: Gareth
status: draft
last_reviewed: 2026-07-13
---

# Dalson Industrial Supplies — Lens Alignment Report (v2)

Re-run following: Scope Lock reconciliation (2026-07-12/13), UAT Checklist build (2026-07-12), End-user & Process Map build (2026-07-13). Previous report (2026-07-12) found Lens 3 entirely missing — that structural gap is now closed.

## 1. Version Ledger

| Doc | Version | last_reviewed | Newest? | Stale vs spine? |
|---|---|---|---|---|
| Scope Lock v1 | v1 (heavily reconciled) | 23 Jun 2026 → reconciled 2026-07-12/13 | No | Second-newest — finalized before UAT/Map were built, so both are current against it |
| VoC Extraction | v1 + 2026-07-12 inline update | 12 Jul 2026 | No | **Mildly stale** — doesn't carry the "Xiao Bai" name now used in Scope Lock/UAT/Map (see Drift #1) |
| UAT Checklist | v1 | 12 Jul 2026 | No | Built after Scope Lock's SL-4–SL-9 resolutions — current against spine, but its own 4c note ("Process Map doesn't exist") is now stale (see Drift #2) |
| End-user & Process Map | v1 | 13 Jul 2026 | **Yes** | — |

No freshness problem in the risky direction (Scope Lock outrunning UAT/Map) — both Lens-3 docs were built *after* the spine was finalized. The lag is smaller and one-directional: VoC hasn't caught up on one name.

---

## 2. Alignment Scorecard

| Check | Pair | Result | # findings |
|---|---|---|---|
| A | Scope Lock ↔ VoC | ALIGNED (soft note) | 1 |
| B | Scope Lock ↔ UAT Checklist | DRIFT (minor) | 1 |
| C | Scope Lock ↔ Process Map | ALIGNED | 0 |
| D | VoC ↔ Process Map | ALIGNED | 0 |
| E | Cross-status consistency | DRIFT (minor) | 2 |
| F | Gaps & Dependencies | ALIGNED (consistent, unresolved) | 1 |
| G | Version & freshness | DRIFT (minor) | 1 |

Sharp improvement from the last report: Checks B, C, D can now run at all (previously GAP). No contradictions found — every finding this cycle is a staleness or coverage gap, not two docs disagreeing.

---

## 3. Drift Table

| # | Item | Doc A says | Doc B says | Check | Verdict | Recommended fix |
|---|---|---|---|---|---|---|
| 1 | Owner's real name | Scope Lock, UAT Checklist, Process Map all use **"Xiao Bai"** by name (confirmed 2026-07-12/13) | VoC Extraction's Actor & Role Register still only says **"Dalson Owner/Principal"** — never updated with the real name | E, G | **VoC is stale** — the name surfaced after the VoC doc was last touched | Update VoC's Phase 1 Actor & Role Register to add "Xiao Bai" alongside the generic label |
| 2 | Process Map existence | Process Map now exists (built 2026-07-13, `HSQJd5QSsoTUW6xVyuRlfAgdgfe`) | UAT Checklist's own §4c still reads "End-user & Process Map does not exist for Dalson" | G | **UAT Checklist text is stale** | Update UAT §4c to note the Map now exists and resolve/soften the "biggest carried risk" framing accordingly |
| 3 | SL-3 (Telegram channel) unhappy-path coverage | Scope Lock: LOCKED | UAT Checklist: only 1 unhappy case (UP-07), self-flagged as "acceptable — Telegram's smaller surface area" | B | **Technically under the ≥2 minimum** — real but low-severity | Add one more unhappy case for SL-3, e.g. non-text message type sent to the bot, or a message sent while MAIA/Telegram integration is down |

No hard contradictions this cycle — all three rows are staleness/coverage gaps, not disagreement.

---

## 4. Orphans

**In scope, not tested/mapped:** none — SL-1 through SL-9 all have UAT coverage and a Process Map home.

**Tested/mapped, not in scope:** none — no UAT case or process step exceeds Scope Lock's locked set.

**VoC signal, no home:** **Receipts (VOC-023/024 — generate only on customer request)**. This is the single standing orphan, and it's a repeat finding from the last report. It has now been independently flagged in three places — VoC itself, UAT Checklist §4c, and Process Map §6 sign-off agenda item #7 — and all three agree it's unresolved. Being flagged three times consistently is not the same as being fixed: it still has zero home in Scope Lock. **This is the top fix-list item.**

---

## 5. Fix List (ordered by blast radius)

1. **[Scope Lock]** Add "Receipts — generated only on customer request, never automatic" as a new locked line item. It's a low-ambiguity, already-confirmed business rule (VOC-023/024) that's been flagged independently three times without ever landing in the spine — cheapest, highest-value fix available.
2. **[VoC Extraction]** Add "Xiao Bai" to the Phase 1 Actor & Role Register alongside "Dalson Owner/Principal" — closes a naming gap now visible in three other docs.
3. **[UAT Checklist]** Update §4c to reflect that the End-user & Process Map now exists — the current text is stale and overstates an already-closed risk.
4. **[UAT Checklist]** Add a second unhappy-path case for SL-3 (Telegram channel) to meet the ≥2 minimum.
5. **[Scope Lock, optional]** Consider giving VOC-012 (DO/document-trail retrievability) an explicit locked line item — it's already functionally tested (UP-06, UP-11) and mapped, but has no discrete name in Scope Lock, which slightly weakens future-regen traceability.

---

## Answers to specific questions asked

**(1) Did building UAT + Process Map resolve the prior structural gap, or introduce new drift between the two Lens-3 docs?** Resolved, cleanly. Checks B, C, D — previously blocked entirely — now run and pass with only one minor finding each (SL-3 coverage, a stale self-reference). No contradiction was introduced between UAT and the Process Map themselves.

**(2) Does the receipts gap count as fixed by being flagged three times?** No. Consistency across docs about an unresolved item is not resolution — it's documentation of an unresolved item. It still has zero home in Scope Lock. Treated here as the top fix-list priority precisely because it's cheap to close and has already been correctly identified three separate times.

**(3) Any freshness mismatch now that Scope Lock was heavily edited today but UAT/Map came after?** No mismatch in the risky direction — UAT and the Process Map were both built *after* the Scope Lock edits they depend on, so they're current against the spine. The one lag found runs the other way: VoC hasn't picked up the "Xiao Bai" name that surfaced during the Scope Lock edits (Drift #1).

**(4) Is "Sales Coordinator" as UAT tester role vs. "NEEDS CLIENT INPUT" in the Process Map a contradiction?** No — this is the correct, intentional pattern, not an oversight. UAT assigns test steps to the functional role (someone forwards POs — that role exists regardless of who fills it) while the Process Map is explicit that the *identity* behind that role is unconfirmed and lists it as sign-off agenda item #2. Both docs agree on the same underlying fact; neither overstates confirmation.

---

## 6. Verdict

**DRIFT — 5 fixes before Gate-2**, but a materially lighter set than the last cycle: no contradictions, no structural gaps, no over-scoped or under-tested locked items. All five fixes are either a single missing Scope Lock line item (receipts) or doc-freshness housekeeping (name propagation, stale cross-reference, one extra test case). Safe to treat as **near-ready** — closing fix #1 (receipts → Scope Lock) is the only item with real weight; the rest are cleanup.

---

## See Also
- [[Dalson — VoC Extraction]]
- [[Dalson — UAT Checklist]]
- [[Dalson — End-user & Process Map]]
- Scope Lock v1 — Dalson Industrial Supplies (Lark)
