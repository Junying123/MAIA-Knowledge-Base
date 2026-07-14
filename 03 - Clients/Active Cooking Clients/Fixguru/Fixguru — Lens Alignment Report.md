---
owner: Gareth
status: draft
last_reviewed: 2026-07-13
client: Fixguru
document_type: internal
version: v2
---

# Fixguru — Lens Alignment Report (v2)

Supersedes the v1 report (Scope Lock v1 vs VoC). Rerun against **Scope Lock v2** (24 June 2026, https://eg69120xnei.sg.larksuite.com/wiki/AdBgwaw2TiMhFOkChoVlJVKGgng), which is structurally far more mature — it already carries its own LOCKED / AIP / Needs-Scoping / Out-of-Scope / Supersession / Source-Conflict framework and cites the same 2026-06-24 Fireflies transcript used in the VoC Extraction.

Scope: **Check A** (Scope Lock ↔ VoC) run in full. Checks B, C, D remain MISSING — no UAT Checklist or End-user & Process Map exists for Fixguru yet.

## 1. Version Ledger

| Doc | Version | last_reviewed / date | Newest? | Stale vs spine? |
|---|---|---|---|---|
| Scope Lock v2 (Lark) | v2 | 24 June 2026 | Yes — this is now the spine | — |
| Scope Lock v1 (KB) | v1 | 2026-06-23 | No | Superseded by v2; still sitting in KB with no supersession note pointing to v2 |
| Fixguru — VoC Extraction | v1 | 2026-07-13 | Drawn from sources through 24 Jun 2026 | Same underlying evidence date as Scope Lock v2, built independently — good cross-check candidate |

**Flag (freshness):** the KB copy of Scope Lock v1 has no note that a v2 exists in Lark, and v2 currently only lives in Lark — no Markdown copy in the KB. Per the KB's single-source-of-truth rule, v2 should be pulled into Markdown as the canonical version, with v1 archived.

## 2. Alignment Scorecard

| Check | Pair | Result | # findings |
|---|---|---|---|
| A | Scope Lock v2 ↔ VoC | DRIFT | 6 |
| B | Scope Lock v2 ↔ UAT | MISSING (no UAT doc) | — |
| C | Scope Lock v2 ↔ Process Map | MISSING (no Process Map) | — |
| D | VoC ↔ Process Map | MISSING (no Process Map) | — |
| E | Cross-status (2-doc subset) | DRIFT | 1 |
| F | Gaps & Dependencies | GAP | 4 |
| G | Version & freshness | DRIFT | 2 |

## 3. Drift Table

| # | Item | Doc A (Scope Lock v2) says | Doc B (VoC) says | Check | Verdict | Recommended fix |
|---|---|---|---|---|---|---|
| 1 | Credit-block timing | NS-04 lists it as **fully open**: "block at SO creation, SO submission, DO creation, or invoice creation?" — presented as an unresolved 4-way choice | VoC-030 (context/learnings.md, same date, same whiteboard session): client had already clarified **"block at DN level, not order level"** as a specific direction, with reasoning given ("blocking early loses money collection opportunity") | A, E | VoC is more resolved — v2's NS-04 doesn't carry the whiteboard-session outcome that's sitting in the KB's own learnings.md, even though both cite the same 24 June source | Update NS-04 to reflect DN-level as the client's stated leaning, not a cold open question. Re-asking a question the client already answered risks reinforcing the exact "I speak many times the same" sentiment already on record — see Drift #2. |
| 2 | Branch/multi-branch handling | AIP-08 / NS-06 / NS-08 treat branch, shelf, and warehouse mapping as **fully unresolved**, needing a fresh technical-alignment session with the client | VoC-017 (downgraded, per 2026-06-10 standup fact-check, captured in the KB's Scope Alignment doc): **Fixguru does not actually use branches at all** — confirmed low-impact, and the shelf-tied-to-UoM decision is already drafted as default-out-of-scope with a client message ready to send | A, F, G | The Scope Alignment doc's decisions are more resolved than v2 reflects — and this isn't a coverage gap so much as a **missed source**: v2's Source Manifest doesn't list the Scope Alignment doc or the 2026-06-10 standup transcript at all | Feed the Scope Alignment doc into v2 directly — branch should likely move from AIP/NS to a locked "address-only, no separate branch contacts" item (already drafted), and shelf should move toward OOS-default rather than sitting as an open technical question. This will materially shrink NS-06/NS-08. |
| 3 | PDF / document template | **Not mentioned anywhere in v2** — no locked item, no AIP, no Needs-Scoping entry, no OOS entry | VoC-010, VOC-011 (BELIEVED, medium-priority): client explicitly prefers AutoCount's PDF layout and needs delivery charge to show as its own PDF line for invoicing accuracy | A, F, G | VoC is right that this is a live, evidenced need — and it's a **regression from Scope Lock v1**, which at least tracked PDF as Part 1.D (locked, PDF for all docs) and Open Item #3 (template preference, unresolved) | Re-add PDF as its own section in v2 — at minimum as a Needs-Scoping entry, ideally reusing v1's Open Item #3 framing so it isn't lost a second time. |
| 4 | Item display — brand | Not mentioned in v2 | VOC-009 (BELIEVED): client explicitly said "brand matters... right now we're not showing brand" | A, F | VoC surfaces a real, undisputed gap with no scope home in either Scope Lock version | Add as a Needs-Scoping or locked acceptance-criteria line under an item-display section (currently doesn't exist as a named topic in v2 either). |
| 5 | SST / tax visibility | Not mentioned in v2 | VOC-025 (CLAIMED — relayed, not direct quote): client does not want SST/tax shown on customer-facing documents even though it exists in the item master config | A, F | Weak-confidence VoC signal, but it appeared in a concrete configuration-fix context (2026-05-15 feedback sync) and has never been logged as in-scope, out-of-scope, or needs-scoping in either Scope Lock version | Log as a Needs-Scoping item at minimum — low effort to close, real risk if silently missed (customer-facing document error). |
| 6 | Dual-interface (chat + web) direction | AIP-02: client **already accepted the dual-interface concept in principle** on 24 June, framed as a considered design response to the one-glance problem | VoC Extraction has no dedicated VOC id for this — it's referenced only inside a Phase 5 inference, not extracted as its own evidenced signal despite being in the same 2026-06-24 source used for VOC-001–005 | A (reverse direction — VoC coverage gap) | Scope Lock v2 is ahead of the VoC extraction here | **Action on the VoC doc, not the Scope Lock**: add a dedicated VOC-032 row for the dual-interface acceptance-in-principle so it carries its own confidence tag and priority rank instead of living only inside an inference. |

## 4. Orphans

**In scope (v2), not evidenced in VoC:**
- L-06 (FOC quantity handling) — locked in v2, generically consistent with the corpus but has no standalone VOC id in the current extraction. Low risk; the underlying need is well understood from the 2026-05-15 UAT Action Items doc, just not formally tagged as a VOC row.

**VoC signal, no scope home in Scope Lock v2 (the gap register):**
- Brand-in-item-display (VOC-009) — *(Drift #4)*
- SST/tax hidden from customer docs (VOC-025) — *(Drift #5)*
- PDF / AutoCount-parity (VOC-010, VOC-011) — *(Drift #3, also a v1→v2 regression)*

**Resolved elsewhere but not reflected in v2 (the "already-answered" register — highest-value finding):**
- Credit block timing (should lean DN, not be asked as fully open) — *(Drift #1)*
- Branch usage (confirmed not used) and shelf handling (default-OOS drafted) — *(Drift #2)*

## 5. Fix List (ordered by blast radius)

1. **Feed the Scope Alignment doc and the 2026-06-24 learnings.md into Scope Lock v2.** Two of v2's "Needs-Scoping" questions (credit-block timing, branch/shelf) already have answers sitting elsewhere in the KB from the same date or earlier. Re-asking the client questions they've already answered is the single highest-risk item here — it directly feeds the exact "I speak many times the same... I don't know how to tell you" erosion already on record. This is a source-completeness problem in v2, not a client-decision gap. *(Drift #1, #2)*
2. **Re-add PDF/document-template as a tracked topic in v2.** It was present in v1 (locked capability + open item) and has real, repeated VoC evidence, but v2 dropped it entirely. Add at minimum as a Needs-Scoping entry (NS-10) using v1's Open Item #3 language as a starting point. *(Drift #3)*
3. **Log brand-in-display and SST/tax-visibility as Needs-Scoping entries (NS-11, NS-12).** Both are small, closeable items currently undocumented in every version of every artifact. *(Drift #4, #5)*
4. **Add VOC-032 (dual-interface acceptance-in-principle) to the VoC Extraction as its own row**, anchored to the same 24 June source as AIP-02, so future lens-align runs can check it directly rather than relying on an inference. *(Drift #6)*
5. **Pull Scope Lock v2 into the KB as Markdown**, mark v1 as `status: archived` with a pointer to v2, per the KB's single-source-of-truth rule — currently v2 only exists in Lark.
6. **Build the UAT Checklist and End-user & Process Map**, then re-run lens-align across all four docs — Checks B, C, D still cannot run.

## 6. Verdict — Updated 13 Jul 2026

**RESOLVED — all 6 drifts closed same day, by Gareth, applied directly to Scope Lock v2 (Lark).**

| # | Item | Resolution | Applied |
|---|---|---|---|
| 1 | Credit-block timing (NS-04) | Block at DN level — dev configured, needs testing | ✅ Scope Lock v2 updated |
| 2 | Branch handling (NS-06) | Parked — no branches, all contacts same level under customer | ✅ Scope Lock v2 updated |
| — | Shelf handling (NS-08) | Scoped per 2nd UAT Backward Plan M0: shelf no. in DN additional-note only | ✅ Scope Lock v2 updated |
| 3 | PDF AutoCount-parity | Implemented — needs client testing/involvement | ✅ Re-added to Scope Lock v2 as NS-10 |
| 4 | Brand-in-item-display | In scope — core requirement | ✅ Added to Scope Lock v2 as L-08 (LOCKED) |
| 5 | SST/tax visibility | Needs fix — confirmed open | ✅ Added to Scope Lock v2 as NS-11 |
| 6 | Dual-interface (AIP-02) | Resolved: chatbot returns URL → FE quick-glance page, not a separate web app | ✅ Scope Lock v2 updated, status moved to LOCKED |

Also added: VOC-032 (dual-interface acceptance) to the VoC Extraction, closing the reverse-direction gap where v2 was ahead of the VoC doc.

**Remaining open items (unchanged, not part of this resolution round):**
- Checks C, D still MISSING — no End-user & Process Map exists for Fixguru.
- Scope Lock v2 still only lives in Lark — not yet pulled into KB Markdown; v1 in KB has no supersession note pointing to v2.
- v2's remaining genuine open items (historical pricing exact fields, minimum-price threshold scope, price-book bypass, warehouse-mapping-proper) were fully closed in the 14 Jul follow-up round (see below) — none left except delivery-method-history doctype and warehouse-source-of-truth.

## 7. Update — 13 Jul 2026, Check B now runnable

Generated `[[UAT/Fixguru — UAT Checklist]]`, tested against the current Scope Lock v2 (post all resolutions above). Two items were promoted from AGREED-IN-PRINCIPLE to LOCKED because their acceptance criteria fully resolved this session:
- **AIP-01** (historical pricing) — all 4 sub-criteria resolved (source, count, fields, output format)
- **AIP-02** (chat + web) — resolved as FE URL link-out

**Check B result: ALIGNED.** L-01 through L-08, AIP-01, AIP-02 (10 locked items) all have ≥1 happy + ≥2 unhappy test cases, traced in the checklist's Section 4a. AIP-03/04/05/06/07/08 remain correctly un-tested (Excluded table, 4b) since they're not fully locked — smoke-tests only added for their individually-resolved sub-criteria (item+UOM threshold, price-book bypass, DN-level block, shelf-in-DN-note, multilingual, PDF parity).

**Verdict: ALIGNED on Checks A and B.**

## 8. Update — 13 Jul 2026, Checks C and D now runnable

Discovered Fixguru's actual Lark folder (a level above where earlier work was scoped) contains a **Client Narrative v2**, a **Forensic Account Dossier**, and a **completed Role Permission CSV** — none of which were listed in Scope Lock v2's own Source Manifest, none previously synced to the KB. Built `[[Fixguru — End-user & Process Map]]` from all four sources (Scope Lock v2, VoC, Forensic Dossier, Client Narrative v2) plus the permission CSV.

**Check C (Scope Lock ↔ Process Map): ALIGNED.** Every LOCKED feature (L-01 through L-08, AIP-01, AIP-02) has an owning role in the swimlane. No process step maps to a deferred/AIP-only feature — the driver/delivery step is explicitly flagged as not-yet-locked rather than mapped as live.

**Check D (VoC ↔ Process Map): DRIFT — 1 finding.** VoC's actor register treats the central "Guest" voice (source of most historical-pricing/credit VOC rows) as BELIEVED-attributed to Yvonne or "Gareth (Fixguru)". The Forensic Dossier's own actor table (B4) points more specifically to **Marcus Lim** as the likely speaker, cross-referenced against the Role Permission CSV (Marcus Lim = Admin). Neither is CONFIRMED. Recommend resolving at the sign-off session — see Process Map Section 6, item 5.

**New gaps surfaced (not drift, but real):** No named Sales Manager, no named Logistics Manager, no named driver anywhere across all four sources — three unstaffed approval/process points. No confirmed UAT signatory — the single highest-risk open item on the account per the Forensic Dossier.

## 9. Final Verdict (13 Jul 2026)

**ALIGNED on Checks A, B, C — DRIFT (1 minor) on D.** All four Lens 3 artifacts (Scope Lock v2, VoC Extraction, UAT Checklist, End-user & Process Map) now exist and cross-check cleanly against each other. Remaining work is not artifact alignment — it's closing real identity/process gaps (UAT signatory, 2 unnamed manager roles, driver) at a client sign-off session, and the low-priority Guest-attribution question. Safe to proceed toward Gate-2 once the sign-off agenda in the Process Map (Section 6) is worked through.

## Lark Links (14 Jul 2026)

| Doc | Lark URL |
|---|---|
| Scope Lock v2 | https://eg69120xnei.sg.larksuite.com/wiki/AdBgwaw2TiMhFOkChoVlJVKGgng |
| VoC Extraction | https://eg69120xnei.sg.larksuite.com/wiki/LKmswszY3iPzmbkjSOHlCkhZgue |
| UAT Checklist | https://eg69120xnei.sg.larksuite.com/wiki/LggewkrBbiEtyJkSLGHl081XgGe |
| UAT Field Guide (Infopack) — "14Jul26-Fixguru-MAIA UAT field guide" | https://eg69120xnei.sg.larksuite.com/wiki/Wp90wCNHtiLD2Hk2oCBlqNC5gPe |
| End-user & Process Map | KB-only, not yet pushed to Lark |

## See Also

- [[Scope Lock v1 — Fixguru]]
- [[Fixguru — VoC Extraction]]
- [[UAT/Fixguru — UAT Checklist]]
- [[UAT/Fixguru — UAT Field Guide (Infopack v1)]]
- [[Fixguru — End-user & Process Map]]
- [[Scope Alignment - Delivery Method & Out-of-Scope Items]]
- [[context/learnings]]
- [[Meetings/2026-06-24 Fixguru UAT Debrief]]
