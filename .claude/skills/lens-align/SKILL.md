---
name: lens-align
description: >
  Cross-checks a MAIA client's four product artifacts — Scope Lock (Lens 1), VoC
  Extraction (Lens 2), UAT Checklist and End-user & Process Map (Lens 3) — and
  verifies they all agree. Detects drift after any regen or version bump (v2/v3/v4):
  locked scope with no UAT case, UAT testing un-locked items, VoC signals with no
  scope home, status/phase mismatches across docs, actors/roles that don't line up,
  and stale versions. Produces an alignment scorecard + a drift table + an ordered
  fix list. Run it whenever any of the four docs is updated/regenerated, before a
  sign-off session, or before M3 Gate-2. Use when the user asks to "align the lenses",
  "check the docs agree", "cross-check VoC/scope/UAT", "audit alignment", "did the
  update break anything", "re-verify the lenses", or "lens-align [client]". Trigger on
  phrases like "align all the docs", "check alignment", "cross-check the lenses",
  "lens align", "verify the four docs match".
---

# Lens Align — Cross-Artifact Consistency Auditor

Verifies a client's **four product artifacts** are mutually consistent, so a v2/v3/v4
regen of any one doesn't silently break the others. The four:

1. **Scope Lock** (Lens 1) — the commitment spine · *source of truth for what is buildable/testable*
2. **VoC Extraction** (Lens 2) — the north star for intent
3. **UAT Checklist** (Lens 3a)
4. **End-user & Process Map** (Lens 3b)

Output is an **alignment report** — scorecard + drift table + fix list. It does not
rewrite the docs; it tells you exactly what to reconcile.

Save to: `03 - Clients/Active Cooking Clients/[Client]/[Client] — Lens Alignment Report.md`.

## Governing rule — Scope Lock is the spine; VoC is the intent
- **Scope Lock decides what is buildable/testable.** UAT and the Process Map must only cover LOCKED items.
- **VoC is the intent north star.** Every high-priority VoC signal must have a scope home OR be a flagged gap.
- When two docs **conflict, flag it — never silently pick.** Report both sides + a recommended resolution.

## Gather the four
Locate each in the client folder + Lark. Record each doc's **version + `last_reviewed`**
up front — version drift is itself a finding. If a doc is missing, write
`MISSING: <doc>` and run the checks you can.

---

## The alignment checks (run all, report each)

### Check A — Scope Lock ↔ VoC
- Every **LOCKED** item traces to ≥1 VoC signal (evidence backing).
- Every **high-priority VoC signal** (Phase-3 rank 1–4) has a scope home OR appears as a flagged GAP.
- Out-of-scope boundaries match the VoC (e.g. blasting, QR settlement, volume pricing).
- **Flag:** locked item with no VoC evidence (over-scope) · VoC priority with no home (gap not logged).

### Check B — Scope Lock ↔ UAT Checklist
- Every **LOCKED** item has ≥1 happy + ≥2 unhappy cases (traceability = YES).
- Every UAT case maps to a **LOCKED** item — no case tests an AIP/NS/OOS item.
- The UAT **Excluded (4b)** table matches the Scope Lock's non-locked items exactly.
- **Flag:** locked item with no test · test for an un-locked item · excluded-table mismatch.

### Check C — Scope Lock ↔ End-user & Process Map
- Every **LOCKED** feature has a role that operates it (in the swimlane + permission matrix).
- Every process step / permission row maps to a locked item — no live process for a deferred/AIP feature.
- Permission matrix respects Scope Lock role rules (e.g. sales isolation, credit-controller approval).
- **Flag:** locked feature with no owning role · process step for a parked feature · permission contradicts scope.

### Check D — VoC ↔ End-user & Process Map
- VoC **actors** = Process Map actors (names + roles line up).
- VoC **coverage gaps** (thin/absent voices) are marked `NEEDS CLIENT INPUT` in the map.
- **Flag:** actor in one, missing in the other · a thin-voice role shown as fully confirmed.

### Check E — Cross-status consistency (the highest-value check)
For every item that appears in ≥2 docs, its **status / phase / disposition must agree**.
Build a status-consistency table for the movers (e.g. inventory aging, pro forma, GRN/stock
entry, catalogue, POD, approvals). Same item saying "Phase 2" in one doc and "Phase 1" in
another = drift.
- **Flag:** any status/phase/in-out mismatch across docs.

### Check F — Gaps & Dependencies consistency
- The flagged GAPs (unscoped VoC needs) appear consistently across Scope Lock, VoC, and UAT-excluded.
- Dependencies/blockers (e.g. SQL access) are tracked and not contradicted.
- **Flag:** a gap logged in one doc but silently tested/committed in another.

### Check G — Version & freshness
- Compare `last_reviewed` + version of all four. The **newest** doc's changes may not have
  propagated to the others.
- **Flag:** a doc older than the Scope Lock's last reconcile · a regen that wasn't cross-checked.

---

## Output structure

### 1. Version Ledger
Table: `Doc | Version | last_reviewed | Newest? | Stale vs spine?`.

### 2. Alignment Scorecard
Table: `Check (A–G) | Pair | Result (ALIGNED / DRIFT / GAP) | # findings`.

### 3. Drift Table (the core output)
Table: `# | Item | Doc A says | Doc B says | Check | Verdict | Recommended fix`.
One row per inconsistency. Verdict names which doc is right per the governing rule
(Scope Lock spine / VoC intent), or "client decision needed."

### 4. Orphans
- **In scope, not tested/mapped** — locked items missing from UAT or Process Map.
- **Tested/mapped, not in scope** — UAT/Process content with no locked home.
- **VoC signal, no home** — the gap register.

### 5. Fix List (ordered)
Numbered, each: which doc to edit, what change, why. Ordered by blast radius
(status mismatches first, then coverage holes, then freshness).

### 6. Verdict
One line: **ALIGNED** (safe to sign / proceed) or **DRIFT — N fixes before Gate-2**.

---

## Method
1. **Version ledger first** — know which doc is newest before comparing content.
2. **Spine out** — start from the Scope Lock's locked items; radiate to VoC (evidence), UAT (tests), Map (roles).
3. **Status table for movers** — Check E catches the most damage after a regen; do it thoroughly.
4. **Flag, don't fix** — this skill reports; edits are a separate, deliberate step.
5. **Re-run after any regen** — this is a standing check, not one-time; run it every time a lens is bumped to vN.

## See Also
- [[voc-extraction]] · [[uat-checklist]] · [[end-user-process-map]] — the artifacts it audits
- MAIA Product Onboarding SOP (3 lenses, M3 Gate-2)
