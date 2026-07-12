---
owner: Gareth
status: draft
last_reviewed: 2026-07-12
---

# Dalson Industrial Supplies — Lens Alignment Report

## 1. Version Ledger

| Doc | Version | last_reviewed | Newest? | Stale vs spine? |
|---|---|---|---|---|
| Scope Lock v1 | v1 | 23 Jun 2026 | No | **Stale** — predates both the VoC extraction and the 2026-07-12 item-creation requirement |
| VoC Extraction | v1 (+ inline 2026-07-12 update) | 12 Jul 2026 | **Yes** | — |
| UAT Checklist | — | — | — | **MISSING** |
| End-user & Process Map | — | — | — | **MISSING** |

The VoC doc is 19 days newer than the Scope Lock and carries two resolved risks (channel, cost) plus one new confirmed requirement (VOC-030, item/SKU creation via chatbot) that Scope Lock has never seen.

---

## 2. Alignment Scorecard

| Check | Pair | Result | # findings |
|---|---|---|---|
| A | Scope Lock ↔ VoC | **DRIFT** | 4 |
| B | Scope Lock ↔ UAT Checklist | **GAP** (UAT missing — no check possible) | 1 (doc absent) |
| C | Scope Lock ↔ Process Map | **GAP** (Map missing — no check possible) | 1 (doc absent) |
| D | VoC ↔ Process Map | **GAP** (Map missing — no check possible) | 1 (doc absent) |
| E | Cross-status consistency | **DRIFT** | 3 |
| F | Gaps & Dependencies | **DRIFT** | 2 |
| G | Version & freshness | **DRIFT** | 1 |

---

## 3. Drift Table

| # | Item | Doc A says | Doc B says | Check | Verdict | Recommended fix |
|---|---|---|---|---|---|---|
| 1 | New-customer creation into AutoCount | Scope Lock lists "Customer approval flow" as a **blocking item** (Source Manifest section) but gives no detail beyond the label | VoC (VOC-015/016/017) gives the full shape: daily frequency, owner pressed for a direct answer, fallback tolerance (minimal invoice-first flow) exists | A | **VoC is right, Scope Lock under-specified** | Scope Lock should absorb VOC-015/016/017 detail into its blocking-item description so the daily-frequency severity isn't lost in a one-line label |
| 2 | **Item/SKU creation via chatbot** | **Not present anywhere in Scope Lock v1** — neither Locked, Agreed-in-principle, Needs-Scoping Register, nor Blocking items | VoC VOC-030 (added 2026-07-12): client confirms this is a **needed feature**, sibling to customer creation, explicitly flagged untested | A, F | **VoC is right — this is a real GAP in Scope Lock**, not a resolved-elsewhere item | Add "Item/SKU creation via chatbot" to Scope Lock's Needs Scoping Register (or Blocking items, given it shares the AutoCount-validation dependency of customer creation) before next Scope Lock revision |
| 3 | Messaging channel (WhatsApp vs Telegram) | Scope Lock v1 flags this as "Locked (Superseded)" — Telegram intended for go-live, client agreement explicitly marked **"NOT EVIDENCED"**, risk = HIGH | VoC (Stated vs Revealed table): **RESOLVED 2026-07-12** — PM confirms Telegram use has since been confirmed with client | E, G | **VoC is newer and authoritative** — Scope Lock's risk flag is now stale | Scope Lock needs a v2 revision closing S1 (Supersessions Log) with client-confirmed evidence; until then Scope Lock still shows this as an open HIGH risk that no longer reflects reality |
| 4 | Cost / pricing transparency | Scope Lock does not carry a cost-transparency item at all (its Client Confirmation Agenda has no question on this) | VoC (VOC-025/026): raised as a real trust incident, now **RESOLVED 2026-07-12** per PM confirmation | A, E | Non-conflicting but **orphaned** — VoC tracked and closed a risk Scope Lock never logged | No action required to reconcile (both now agree the item is closed), but note for future Scope Lock revisions: cost items surfaced in discovery should get a Scope Lock line even if resolved quickly, so the audit trail isn't VoC-only |

---

## 4. Orphans

**In scope (VoC), not tested/mapped:**
- Item/SKU creation via chatbot (VOC-030) — no UAT case can exist because UAT doesn't exist yet; also has no Scope Lock home (see Drift #2)
- New-customer creation fallback (VOC-015/016/017) — same: no UAT to verify the daily-frequency blocker is actually resolved
- DO / document retrieval (VOC-012) — concrete, testable acceptance bar defined in VoC, nothing in UAT to test it because UAT doesn't exist
- Driver-facing POD capture (VOC-010) — same

**Tested/mapped, not in scope:**
- N/A — no UAT/Map exists to check.

**VoC signal, no home:**
- **VOC-030 (item/SKU creation via chatbot)** — confirmed by client, not present in Scope Lock's Locked, Agreed-in-principle, or Needs-Scoping Register. This is the single highest-priority gap in this audit: a client-confirmed requirement with zero scope documentation.
- SO-stage existence (VOC-021, "no sales order" per owner) — Scope Lock and the vendor's own Customer Narrative both assume a PO→SO→Invoice→DO flow; VoC flags this as unresolved misframing. Scope Lock's Needs Scoping Register does list "PO → SO → Invoice → DO workflow automation" as agreed-in-principle-not-locked, so there is a partial home, but the underlying contradiction (does an SO stage exist today at all) is not called out anywhere in Scope Lock.

---

## 5. Fix List (ordered by blast radius)

1. **[Scope Lock]** Add "Item/SKU creation via chatbot" as a new line item (Needs Scoping Register or Blocking, per the AutoCount-validation dependency) — this is a client-confirmed requirement currently invisible to the build/test spine. *(Drift #2 — highest priority, status-mismatch-equivalent since it's a confirmed requirement with zero scope trace.)*
2. **[Scope Lock]** Close S1 (Messaging channel supersession) — mark Telegram as client-confirmed, drop the HIGH risk flag, since VoC already shows this resolved 2026-07-12. *(Drift #3 — stale risk flag actively misleading if read today.)*
3. **[Scope Lock]** Expand the "Customer approval flow" blocking-item description to carry the daily-frequency severity and fallback-tolerance detail already captured in VoC. *(Drift #1 — under-specification, not a contradiction, but worth tightening before it's used to scope a fix.)*
4. **[New doc]** Build the **UAT Checklist** — Checks B, F cannot run until this exists, and two client-confirmed daily-frequency features (customer + item creation) currently have no test plan.
5. **[New doc]** Build the **End-user & Process Map** — Checks C, D cannot run until this exists; VoC's own coverage gate already flags that coordinator/warehouse/driver voices are unheard, which is exactly what this doc is meant to formalize as `NEEDS CLIENT INPUT`.

---

## 6. Verdict

**DRIFT — 5 fixes before Gate-2.** Scope Lock is 19 days stale against the VoC and is missing a client-confirmed requirement (item/SKU creation) entirely. Both Lens-3 artifacts (UAT Checklist, End-user & Process Map) don't exist yet, so three of the seven alignment checks (B, C, D) can't run at all — that's a structural gap, not just content drift, and should be treated as the bigger blocker to sign-off.

---

## See Also
- [[Dalson — VoC Extraction]]
- Scope Lock v1 — Dalson Industrial Supplies (Lark)
- [[Dalson Phase 1 Timeline]]
