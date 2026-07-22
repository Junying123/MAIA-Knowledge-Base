---
owner: Gareth
status: draft
last_reviewed: 2026-07-22
lark_url: https://eg69120xnei.sg.larksuite.com/wiki/I86uwtbJ9iE7gwk5ZfvltCPTgph
---

# Dalson Industrial Supplies — Lens Alignment Report (v3)

Re-run following: Scope Lock v2 rerun (2026-07-14) + SL-11 promotion (2026-07-19), Process Map roster update (2026-07-19). Previous report (v2, 2026-07-13) predates all of this — the spine has moved twice since the last check and the other three docs have not fully caught up.

> **Superseded 2026-07-22:** SL-10 (Pricing logic) promoted from AGREED IN PRINCIPLE to LOCKED (owner confirmed mechanic). UAT Checklist and UAT Infopack have both been updated to match (SL-10 now tested, HP-13/UP-26/UP-27, Mission M-13). The SL-10 row in the Cross-Status Table below (§3) reflects the pre-2026-07-22 state — treat it as historical, not current. A full v4 rerun would clear it properly; this note is the interim fix.

## 1. Version Ledger

| Doc | Version | Last touched | Newest? | Stale vs spine? |
|---|---|---|---|---|
| Scope Lock | v2 (10 LOCKED / 2 LOCKED-SUPERSEDED / 3 AIP / 0 NEEDS-SCOPING / 2 OOS, 17 SL-ids) | 2026-07-19 (SL-11 promoted to LOCKED) | **Yes** | — |
| End-user & Process Map | v2 (unversioned in frontmatter, `last_reviewed: 2026-07-19`) | 2026-07-19 | Second-newest | **Mildly stale** — 2 leftover references still call SL-11 "blocking/unscoped" (Drift #1) |
| VoC Extraction | v1 + inline updates (2026-07-12, 2026-07-14) | 2026-07-14 | Third | **Stale** — predates the SL-11 promotion entirely and never picked up Asilah/Joseph's names (Drift #2, #3, #6) |
| UAT Checklist | v1 | 2026-07-12 | Oldest | **Materially stale** — predates the whole Scope Lock v2 rerun. Still running v1's SL-10 through SL-16 mental model, which now collides with v2's actual numbering (Drift #4–#9) |

Freshness runs in the risky direction this cycle: the spine has moved twice (07-14 rerun, 07-19 promotion) and UAT hasn't moved at all since 07-12. This is the opposite of the last report, where UAT/Map were built *after* the spine.

---

## 2. Alignment Scorecard

| Check | Pair | Result | # findings |
|---|---|---|---|
| A | Scope Lock ↔ VoC | DRIFT (moderate — stale language, not fact contradiction) | 2 |
| B | Scope Lock ↔ UAT Checklist | **DRIFT (significant)** | 6 |
| C | Scope Lock ↔ Process Map | DRIFT (minor) | 1 |
| D | VoC ↔ Process Map | DRIFT (minor) | 1 |
| E | Cross-status consistency | see status table below | 5 movers tracked |
| F | Gaps & Dependencies | DRIFT (informational) | 1 |
| G | Version & freshness | DRIFT | UAT is 2 spine-revisions behind |

UAT Checklist carries almost all of the real damage this cycle — it's the only doc that predates the Scope Lock v2 rerun entirely, not just the SL-11 promotion.

---

## 3. Cross-Status Table (Check E) — the 5 movers

| SL-ID | Item | Scope Lock v2 says | VoC says | UAT says | Process Map says |
|---|---|---|---|---|---|
| SL-10 | Pricing logic | AGREED IN PRINCIPLE — NOT LOCKED (direction agreed, mechanic open) | Not tracked by SL-ID | **NEEDS SCOPING (Blocking)** — stale, one status behind | Not referenced |
| SL-11 | Customer & item/SKU creation via chatbot | **LOCKED** (2026-07-19, confirmed with Ivan) | Untested / "gated," "NEW Real P1 — untested" | **"Blocking item, unresolved"** — two statuses behind, zero test coverage | **"still blocking/unscoped"** in Permission Matrix (2 occurrences) — one status behind |
| SL-12 | AutoCount integration: ongoing 2-way sync mechanism | AGREED IN PRINCIPLE — NOT LOCKED | Not tracked by SL-ID | **Different item entirely** — UAT's "SL-12" = "Customer master requirements (e-invoice)," a real id collision, not a status drift | Not referenced |
| SL-13 | PO→SO→Invoice→DO workflow (SO stage reinterpreted) | **LOCKED (SUPERSEDED)**, confidence MED, written-confirmation candidate found | VOC-021 is the source evidence but Phase 6/Stated-vs-Revealed still frame it as an open "scope-risk / misframing" contradiction | **AGREED IN PRINCIPLE — NOT LOCKED**, "do not test" — stale, resolved in spine | **Correctly resolved** — flags the written-confirmation candidate, closest of the three to the spine |
| SL-17 | Receipts | **LOCKED** | VOC-023/024 CONFIRMED, listed "to backlog now" (correct in spirit, doesn't cite SL-17 by id) | **Absent from Step 1 table entirely**; 4b still says "no Scope Lock home" — directly false now | **Correctly resolved** — cites SL-17 by id |

Process Map is the most current of the three on this table; UAT is the least.

---

## 4. Orphans

**In scope, not tested/mapped:** **SL-11 and SL-17** — both LOCKED in Scope Lock v2, both have zero UAT happy/unhappy cases. This is new since the last report (previous cycle's orphan was the opposite problem — Receipts had no scope home at all; now it has one but no test).

**Tested/mapped, not in scope:** none — no UAT case or process step exceeds Scope Lock's locked set.

**VoC signal, no home:** **none.** The standing orphan from the last two reports (Receipts, VOC-023/024) is now closed by SL-17. Good news — don't let the SL-17 coverage gap above obscure that the underlying scope gap is actually fixed.

---

## 5. Drift Table

| # | Item | Doc A says | Doc B says | Check | Verdict | Recommended fix |
|---|---|---|---|---|---|---|
| 1 | SL-11 permission note | Scope Lock: LOCKED | Process Map Permission Matrix (2 places): "still blocking/unscoped — do not assign this permission yet" | C | **Process Map stale** | Update both notes; assign SL-11's capability to a role (likely Asilah, matching the existing coordinator pattern) now that it's built |
| 2 | SL-11 status | Scope Lock: LOCKED | VoC: "NEW Real P1 — untested," Close-the-Loop: "needs QA pass... before sign-off" | A | **VoC stale** | Update to reflect LOCKED status; keep the QA-pass recommendation as a separate go-live checklist item, not a scope-status blocker |
| 3 | SL-13 / SO-stage | Scope Lock: LOCKED (SUPERSEDED), written-confirmation candidate found | VoC Phase 6 + Stated-vs-Revealed: still flags as open "scope-risk / misframing" contradicting Scope Lock | A | **VoC stale** | Update to note SL-13 resolution; VoC's own VOC-021 is the evidence that grounded the resolution, worth cross-referencing |
| 4 | SL-12 numbering | Scope Lock SL-12 = "AutoCount integration: ongoing 2-way sync mechanism" | UAT SL-12 = "Customer master requirements (e-invoice)" | B | **UAT id collision — real conflict, not staleness** | Rename UAT's item (it's actually the Needs-Scoping sheet's row 3, "related to SL-11," not a standalone SL-id) or drop the SL-12 label from it; add a correct SL-12 row matching the spine |
| 5 | SL-11 status + coverage | Scope Lock: LOCKED | UAT: "Blocking item, unresolved," excluded in 4b, zero test cases | B | **UAT stale — highest-blast-radius finding** | Move SL-11 into Step 1 as LOCKED, write ≥1 happy + ≥2 unhappy cases, remove from 4b |
| 6 | SL-17 absent | Scope Lock: LOCKED | UAT: not in Step 1 table at all; 4b still says "no Scope Lock item, no Scope Lock home" | B | **UAT stale — directly false statement now** | Add SL-17 to Step 1, write test cases, delete the stale 4b line |
| 7 | SL-13 status + coverage | Scope Lock: LOCKED (SUPERSEDED), MED confidence | UAT: "AGREED IN PRINCIPLE — NOT LOCKED," "do not test," 4b still cites the VOC-021 contradiction as unresolved | B | **UAT stale** | Flip status, add test coverage, note MED confidence pending written sign-off (mirror Process Map's language) |
| 8 | SL-10 status | Scope Lock: AGREED IN PRINCIPLE — NOT LOCKED (direction agreed) | UAT: "NEEDS SCOPING (Blocking)," described as "genuinely unresolved" | B | **UAT stale** | Reword — direction is agreed, only the auto-suggest-vs-manual mechanic is open; still correctly excluded from testing, just wrong reason given |
| 9 | Testable-item count | Scope Lock: 17 SL-ids, 12 testable (10 LOCKED + 2 LOCKED-SUPERSEDED) | UAT Verdict: "9 of 16 scope items are testable" | B, G | **UAT stale** | Recompute against the real v2 counts once #5–#8 are applied |
| 10 | Sales coordinator / warehouse identity | Process Map: Asilah Amirah binti Khairuddin, Joseph (named, 2026-07-19) | VoC Actor Register: "Internal Sales Coordinator(s) (unnamed)," "Warehouse/Packing Staff (unnamed)" | D | **VoC stale** | Add both names to the Actor & Role Register, sourced from the MAIA User List via Process Map |
| 11 | SL-11 unblock mechanism | Scope Lock: resolved via Ivan (Vendor/Dev) confirmation | VoC + UAT: describe the dependency as gated on the accountant / Ms Tan / AutoCount validation constraint | F | **Informational, not a contradiction** | Worth a note so nobody re-opens the accountant conversation thinking it's still needed — the unblock came from internal dev confirmation, not the AutoCount dealer |

No hard factual contradictions this cycle — everything is a doc lagging the spine, except #4 (the SL-12 numbering collision), which is a structural authoring error independent of freshness.

---

## 6. Fix List (ordered by blast radius)

1. **[UAT Checklist]** Resolve the SL-12 numbering collision — rename/reassign the "Customer master requirements (e-invoice)" row (it isn't Scope Lock's SL-12); add a correct SL-12 row for the AutoCount 2-way sync item.
2. **[UAT Checklist]** Add SL-11 to Step 1 as LOCKED; write ≥1 happy + ≥2 unhappy test cases; remove from 4b.
3. **[UAT Checklist]** Add SL-17 (Receipts) to Step 1; write test cases; delete the stale "no Scope Lock home" line in 4b.
4. **[UAT Checklist]** Flip SL-13 to LOCKED (SUPERSEDED), MED confidence; add test coverage; update 4b.
5. **[UAT Checklist]** Reword SL-10's status/reason to AGREED IN PRINCIPLE (still excluded from testing, different reason).
6. **[UAT Checklist]** Recompute and update the Verdict's testable-item count once 2–5 land.
7. **[Process Map]** Fix the 2 stale SL-11 "still blocking" notes in the Permission Matrix; assign the capability to a role.
8. **[VoC Extraction]** Add Asilah Amirah binti Khairuddin and Joseph by name to the Actor & Role Register.
9. **[VoC Extraction]** Update SL-11 language (Phase 6, Stated-vs-Revealed, Close-the-Loop) from "untested/blocking" to reflect LOCKED status; keep the QA-pass recommendation as a separate go-live item.
10. **[VoC Extraction]** Update SL-13/SO-stage language from "open contradiction" to "resolved."
11. **[VoC Extraction]** Note the SL-11 unblock came via Ivan/internal dev, not the accountant/Ms Tan — low-priority correction so the dependency chain doesn't get re-litigated.

Items 1–6 (UAT) carry the most weight — it's the only doc that hasn't been touched since before the entire Scope Lock v2 rerun, and #1 is a structural error, not just staleness.

---

## 7. Verdict

**DRIFT — 11 fixes before Gate-2**, concentrated almost entirely in UAT Checklist (6 of 11), which is two full spine-revisions behind. No hard contradictions and no orphaned VoC signals (the standing Receipts gap from the last two reports is now closed by SL-17) — but UAT currently has **zero test coverage for two LOCKED items** (SL-11, SL-17) and **one real numbering collision** (SL-12), which is a heavier finding than typical staleness: it means SL-11 and SL-17 could ship without ever being tested if UAT isn't regenerated before the next UAT execution pass.

---

---

## 8. Re-verification (2026-07-19, same day)

All 11 fixes from §6 applied, plus 2 items surfaced in a spot-check after the fix pass:
- Name inconsistency ("Xiao Bai" vs "Yap Li Min") — resolved across all 4 docs (Scope Lock, VoC, UAT, Process Map now all say Yap Li Min; VoC keeps one explanatory nickname note for transcript traceability). UAT test-case actors also renamed to Asilah/Joseph where identity was already known.
- SL-13 confidence bump (MED → HIGH) — applied everywhere; written confirmation (Sample Data Checklist doc) is now reflected in Scope Lock's SL-13 block, Supersessions Log S3, Client Confirmation Agenda (item closed and removed), and Bottom Line, with matching updates in VoC and UAT.
- Bonus: Scope Lock's Client Confirmation Agenda cited the wrong Needs-Scoping Register row for e-invoice fields (row 8, which had since become "Approval flow" after other rows resolved) — corrected to row 3.

Re-checked all four docs post-fix: dashboard counts (10 LOCKED / 2 LOCKED-SUPERSEDED / 3 AIP / 0 NEEDS-SCOPING / 2 OOS) match UAT's "12 testable" claim exactly (10+2=12). No leftover status mismatches, no orphans, no stale names outside of VoC's intentional one-line nickname footnote.

**Verdict: ALIGNED.** Safe to proceed to Gate-2 sign-off prep. Remaining open items (SL-10 pricing mechanic, SL-12 sync method, SL-14 templates, e-invoice fields, driver identity, coordinator visibility scope, UAT signatory) are genuine unresolved business questions, not doc drift — tracked consistently as open across all four docs.

---

## See Also
- [[Dalson — VoC Extraction]]
- [[Dalson — UAT Checklist]]
- [[Dalson — End-user & Process Map]]
- Scope Lock v2 — Dalson Industrial Supplies (Lark)
