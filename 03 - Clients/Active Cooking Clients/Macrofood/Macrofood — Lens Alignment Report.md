---
owner: Gareth
status: draft
last_reviewed: 2026-07-12
---

# Macro Frozen — Lens Alignment Report

> First `lens-align` pass, run after the Scope Lock reconcile (rev 34) + new
> End-user & Process Map. Scope Lock = spine; VoC = intent. Reports drift; does not edit.

---

## 1. Version Ledger

| Doc | Version | last_reviewed | Newest? | Stale vs spine? |
|---|---|---|---|---|
| Scope Lock v1 (reconciled) | v1-r · rev 34 | 2026-07-12 | ✅ spine | — |
| VoC Extraction | v-current | 2026-07-12 | ✅ | No |
| UAT Checklist | v2 (consolidated) | 2026-07-12 | ✅ | No |
| End-user & Process Map | v1 | 2026-07-12 | ✅ | No |
| *(source)* Customer Narrative | — | 2026-05-20 | — | Input only — not a lens; ok |

All four lenses same-day fresh. No version drift.

---

## 2. Alignment Scorecard

| Check | Pair | Result | Findings |
|---|---|---|---|
| A | Scope Lock ↔ VoC | **ALIGNED** (1 minor) | GAPs not in Scope Lock |
| B | Scope Lock ↔ UAT | **ALIGNED** (2 minor) | NS-03 excl-wording; NS-05 partial |
| C | Scope Lock ↔ End-user Map | ALIGNED | — |
| D | VoC ↔ End-user Map | ALIGNED | — |
| E | Cross-status consistency | **ALIGNED** | aging drift fixed ✅ |
| F | Gaps & dependencies | **DRIFT** | GAPs live in 3 docs, not Scope Lock |
| G | Version & freshness | ALIGNED | all fresh |

---

## 3. Drift Table

| # | Item | Doc A says | Doc B says | Check | Verdict | Recommended fix |
|---|---|---|---|---|---|---|
| 1 | **4 unscoped GAPs** (picking accountability, quotation, cash-from-driver, batch QC) | VoC + UAT-excluded + Map: logged as GAP-1→4 | Scope Lock: **absent** (only Dependencies §6b) | F | Scope Lock should register them | Add an "Unscoped Gaps — need David" line to Scope Lock §6b so all four docs carry them |
| 2 | **Inventory aging (NS-03)** | Scope Lock: **LOCKED**, Phase 1, building | UAT 4b: "Building, **not yet live** — test when ships" | B/E | Both correct; wording implies not-locked | Tighten UAT 4b reason to "**locked, not yet built** — add cases when it ships" |
| 3 | **Approvals (NS-05)** | Scope Lock: resolved → locked (generic approvals) | UAT traceability: **PARTIAL** — "generic non-credit approval not separately locked" | B | Coverage hole | Add one generic-approval happy-path test, OR scope NS-05 to credit-approval only and mark YES |
| 4 | **Quotation (GAP-2)** | Map: shown in Sales swimlane (tagged GAP-2) | Scope Lock/UAT: unscoped gap, not built | C | Acceptable (tagged) — watch | Keep the GAP-2 tag; don't let it read as a live feature until David decides |

No hard contradictions. The one real drift (F1) is a **logging gap**, not a conflict.

---

## 4. Orphans

- **In scope, not fully tested:** NS-05 approvals — traceability PARTIAL (finding #3).
- **Tested/mapped, not in scope:** none — UAT correctly excludes all AIP/OOS; Map flags parked steps.
- **VoC signal, no home:** the 4 GAPs (VOC-004/014/009/023) — logged in VoC + UAT-excluded, missing from Scope Lock (finding #1).
- **Actor coverage:** warehouse user, driver, finance-name — all consistently marked `NEEDS CLIENT INPUT` across VoC + Map. ✅

---

## 5. Fix List (ordered by blast radius)

1. **Scope Lock §6b** — add the 4 unscoped GAPs as an explicit register line (finding #1). *Highest — closes the only cross-doc logging gap.*
2. **UAT 4b** — reword NS-03 to "locked, not yet built" (finding #2). *Wording only.*
3. **UAT** — close NS-05 to YES: add a generic-approval happy case or narrow NS-05 to credit-only (finding #3).
4. *(No change)* — GAP-2 in Map is acceptable while tagged (finding #4); revisit when David decides.

**Client-gated (not drift, but block Gate-2):**
- DEP-1 SQL vendor access · DEP-2 client sign-off + named UAT signatory · real UAT data · the 4 GAP decisions.

---

## 6. Verdict

> **ALIGNED — 3 minor fixes before Gate-2.** The recent Scope Lock reconcile cleared the
> big status drift (inventory aging Phase-2↔Phase-1). Remaining findings are one logging
> gap (GAPs absent from Scope Lock) + two UAT wording/coverage tweaks. No contradictions
> between what's locked, what's tested, and who operates it. The blockers to Gate-2 are
> client-side (sign-off, signatory, SQL access, gap decisions), not internal misalignment.

---

## See Also
- [[Macrofood — Scope Lock v1 (reconciled)]] · [[Macrofood — VoC Extraction]]
- [[Macrofood — UAT Checklist]] · [[Macrofood — End-user & Process Map]]
