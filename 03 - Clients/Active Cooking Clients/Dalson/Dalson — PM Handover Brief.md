---
owner: Gareth
status: approved
last_reviewed: 2026-08-07 (updated same day — 5 Aug UAT status added)
client: Dalson
lark_url: https://eg69120xnei.sg.larksuite.com/wiki/EXb0wPT33iwrqckCqOzls0Mngyg
---

# Dalson — PM Handover Brief

*(Published to Lark as "Dalson — PM Handover Brief")*

> Handover from Gareth to the incoming PM.
> **Read in this order:** Quick Start → Status at a Glance → Deep Dives → Reading Order → Action Checklist.
> Nothing in this doc should be treated as confirmed until you've verified it yourself with the client or dev team — several items below are flagged precisely because they were never closed out.

---

## Quick Start

| | |
|---|---|
| **Client** | Dalson Industrial Supplies — small B2B industrial hardware trader (Malaysia), ~50–100 orders/month. MAIA is an operational layer on top of **AutoCount** (system of record), not a replacement. |
| **Folder** | `03 - Clients/Active Cooking Clients/Dalson/` |
| **Phase** | **UAT executed onsite 5 Aug 2026** (Kate, Gareth, Pavithra, Ivan) — see below, this was previously flagged as unconfirmed and is now resolved. Scope Lock v2 rerun through 2026-07-31. Phase 1 Timeline (last touched 2026-07-07) is badly stale and still shows M4 UAT as "to schedule" — do not trust it. |

**Two things to fix before anything else:**

1. **UAT ran onsite 5 Aug 2026 — but the formal checklist's Pass/Fail columns are still blank.** Real testing happened (raw notes + a live bug found and RCA'd, see below), but results were never written back into [[Dalson — UAT Checklist]]. Someone needs to reconcile the 5 Aug raw notes against the 17 scope-item checklist and fill in Pass/Fail per item — right now the structured record and what actually happened have diverged.
2. **Named UAT testers unconfirmed.** The 3 registered MAIA users are named with contact details (Yap Li Min, Asilah, Joseph — see below), but which of them formally signs off UAT — sole signatory (Yap Li Min) vs each signing their own portion — is still open. See [[Dalson — End-user & Process Map]] §6 sign-off agenda.

**Cash Sales Invoice gap — flag this early, it's the one build blocker:** confirmed 2026-07-31, Dalson does handle walk-in/cash sales with no PO and no formal customer record, and **MAIA has no cash-invoice type today** — no front-end payment UI, chatbot can't handle it, backend schema missing, PDF/reporting doesn't surface it. Not sized. Needs-Scoping Register row 12.

### Dalson Folder to Check

- **Start here:** [[Dalson — Consolidated Overview]] — everything a tester/incoming PM needs in one doc: who Dalson is, what's locked, before/after story, full UAT test case set (built specifically to onboard someone with zero prior context)
- **Scope Lock v2** — Lark-only, not mirrored to Markdown (doc token `VHQPdEnCbopM9pxRapJliGiXgrb`) — this is the actual spine, Consolidated Overview summarizes it
- **UAT Checklist:** [[Dalson — UAT Checklist]] — 17 scope items, 13 testable this cycle, full happy/unhappy test cases per item — test cases written, **onsite UAT ran 5 Aug 2026, but Pass/Fail columns here still not reconciled against it**
- **UAT Raw Notes (Lark, 5 Aug 2026):** onsite session notes, node `W8ArwTCImixJG7k82srlk2Bxgtf` — the actual UAT execution record, see Deep Dive §5 below
- **Before/After + E2E flow:** [[Dalson — Before vs After MAIA and E2E Flow]] — hand-corrected 2026-07-31 to match the SL-13 reconciliation, currently aligned with the spine
- **Actor/role map with real contacts:** [[Dalson — End-user & Process Map]] — has actual names, emails, and WhatsApp numbers (rare for this KB — most other client folders still have empty contact tables)
- **Lens alignment:** [[Dalson — Lens Alignment Report]] (v4, 2026-07-31) — cleanest rerun of any account so far: 4 small label-lag fixes, no hard contradictions
- **Timeline:** [[Dalson Phase 1 Timeline]] — ⚠️ **stale, last touched 2026-07-07**, predates the entire Scope Lock v2 rerun cycle and the UAT Checklist's existence. Don't use its milestone dates or "to schedule" statuses as current.
- **AutoCount integration detail:** [[Dalson MAIA autocount integration]]
- **Full wiki mirror (docx, not yet converted to Markdown):** `Lark Wiki Export/` — includes CPO Testing Report, UAT Raw Notes, Scope Lock v2 source docx, and other supporting docs not yet pulled into canonical Markdown form

---

## Status at a Glance

### ✅ Locked & Testable (13 of 17 scope items — Scope Lock v2)

| ID | Item | Note |
|---|---|---|
| SL-1 | MAIA as layer on AutoCount | AutoCount = ledger, never replaced |
| SL-2 | Order intake, unstructured channels | Telegram (superseded from WhatsApp) |
| SL-3 | Messaging channel = Telegram | Superseded from original WhatsApp plan — Meta/WhatsApp business verification on hold |
| SL-4 | SKU alias matching | Staff confirms match, no auto-commit |
| SL-5 | POD capture | Lalamove hands POD to staff; staff (Asilah/Yap Li Min) attaches to DN — **not** a driver-uploads-directly model |
| SL-6 | AutoCount access + migration | Access + historical data done |
| SL-7 | No separate approval gate | Any of 3 users submits directly (superseded 2026-07-20) |
| SL-8 | Credit note = invoice-level only | Never account-level |
| SL-9 | No stock-count tracking for B2B | Only small retail slice tracked |
| SL-10 | Pricing logic | Chatbot shows price history, staff confirms; standard price if no history — resolved 2026-07-22 |
| SL-11 | Customer/item creation via chatbot | No manual AutoCount entry needed |
| SL-13 | SO stage reinterpreted (quotation stays MAIA-only) | **Confidence downgraded HIGH → MED on 2026-07-31** — pending a properly attributed re-verification of Dalson's live AutoCount instance. Test steps already reflect the correct behavior, only the confidence label needs updating in VoC/UAT (see Lens Alignment Report) |
| SL-17 | Receipts | On request only, never automatic |

### 🆕 Locked but not yet testable

| ID | Item | Why not testable |
|---|---|---|
| SL-14 | Document templates (MAIA's own PDF, all 5 doc types: SO/SI/DO/CN/QTN) | **LOCKED 2026-07-31** — but no UAT test cases written yet. Needs adding to the checklist before this cycle closes. |

### ⏸️ Design-locked but inactive / excluded this cycle

| ID | Item | Status |
|---|---|---|
| SL-12 | AutoCount 2-way sync | LOCKED (design confirmed direct DB access) but **not turned on yet** in Dalson's live environment — do not test |
| SL-15 | Supplier-side procurement automation | OOS — explicitly excluded from Phase 1 |
| SL-16 | Full ERP replacement | OOS — MAIA is overlay only |
| — | Customer master e-invoice mandatory fields | NEEDS SCOPING — partial, needs Dalson-specific re-verification |

### ❌ Blocking / Open

| Item | Detail |
|---|---|
| **Cash Sales Invoice support** | **Confirmed blocking gap, 2026-07-31.** Walk-in/cash sales exist in Dalson's real workflow; MAIA has no cash-invoice type. Not sized. Needs-Scoping Register row 12. |
| SL-13 re-verification | MED confidence pending a named, attributed check of Dalson's live AutoCount instance (or direct client re-confirmation) |
| UAT signatory | Sole (Yap Li Min) vs multi-signatory (Asilah/Joseph sign their own portions) — unresolved |
| Asilah's visibility scope | Own customers only, or all of Dalson's — unconfirmed |
| Driver headcount for POD | Unclear whether Joseph doubles as driver, delivery is fully outsourced to Lalamove, or a driver role was simply never listed — the 3-person MAIA User List has no separate driver entry |

---

## Deep Dives

### 1. Who's actually using MAIA — the good news on this account

Unlike Holsen and Macrofood, **Dalson has a fully named, contactable user roster** — not a gap to chase. Three registered MAIA users, each identified by the WhatsApp number they message from (unregistered numbers get no response — by design, not a bug):

| Name | Contact | Role | MAIA scope |
|---|---|---|---|
| **Yap Li Min** | dalsonmultisupply@gmail.com · WhatsApp 6012-368-1558 | Owner, dual role as Sales Coordinator | Submits draft SO/Invoice directly; sets business rules (credit note policy, receipt policy) |
| **Asilah Amirah binti Khairuddin** | dalsonsales.wei@gmail.com · WhatsApp 6017-574-6626 | Sales Coordinator | Forwards customer POs into MAIA; submits orders directly |
| **Joseph** | (no email on file) · WhatsApp 6017-224-8046 | Store Keeper | Receives forwarded PO, packs order directly; can also submit orders |

All three have equal, direct submission rights — no approval gate exists (SL-7, superseded 2026-07-20 to remove the earlier approval-step design). **Lalamove** is the external courier — not a MAIA user, doesn't touch the system directly.

**Still open:** driver/POD role confirmation (does Joseph double as driver, or is delivery fully outsourced?) and which of the 3 users is the formal UAT signatory. Both tracked in [[Dalson — End-user & Process Map]] §6.

---

### 2. The Cash Sales Invoice gap

This surfaced late (2026-07-31) from an internal Mindhive dev standup, then was separately confirmed with the client — it doesn't trace back to the original VoC corpus, which is why the Lens Alignment Report flagged it as an "orphan" (a scope gap with no VoC-ID).

**The real-world problem:** Dalson does handle walk-in/cash sales — no PO, no formal customer record — but MAIA's entire order model assumes a customer record and a document trail starting from PO intake. There's no front-end payment UI, no chatbot flow, no backend schema, and no PDF/reporting surface for this case.

**Bottom line:** this is a genuine build gap, not a scoping disagreement — everyone agrees it needs solving, nobody has sized it yet. Get it in front of backend before UAT execution, since it changes what "13 of 17 testable" actually covers if cash sales turn out to be a meaningful share of volume.

---

### 3. SL-13 — why the confidence label matters here

SL-13 (the SO/quotation stage staying inside MAIA only, never pushed to AutoCount as a formal Sales Order) is functionally settled — Scope Lock, VoC, UAT, and the Process Map all agree on the *behavior*. What changed on 2026-07-31 was the **confidence rating**, downgraded from HIGH to MED after an uncited quotation-push claim got rejected during reconciliation and reverted back to "quotation stays MAIA-only."

The UAT test steps (HP-11, UP-22, UP-23) already correctly test the MAIA-only behavior — they don't need rewriting. What's stale is just the confidence *label* in two places: VoC Extraction (Phase 6 item 2, Stated-vs-Revealed table) and the UAT Checklist's SL-13 section header, both still say HIGH.

**Bottom line:** low-risk documentation debt, not a live risk to the build. Fix the labels (see Lens Alignment Report's Fix List), and separately get a named, attributed re-verification against Dalson's live AutoCount instance to close the confidence gap for real.

---

### 4. SL-14 — the one locked item with a real coverage gap

Document templates (MAIA's own PDF template covering all 5 doc types — SO/SI/DO/CN/QTN) got LOCKED on 2026-07-31, but **no UAT test cases exist for it yet**. This is different from the SL-12/SL-15/SL-16 exclusions above, which are excluded by design or scope — SL-14 is excluded only because nobody's written the test cases. Close this before calling the UAT cycle complete; it's the one gap that's purely a to-do, not an open decision.

---

### 5. UAT actually ran — 5 Aug 2026 onsite, here's what came out of it

**Added 2026-08-07, source: Dalson UAT Raw Notes (Lark), onsite team Kate, Gareth, Pavithra, Ivan.** This closes the "has UAT run?" question raised earlier in this brief — yes, it ran onsite. What's still open is reconciling these raw notes against the 17-item [[Dalson — UAT Checklist]]'s Pass/Fail columns, which remain blank.

**Live bugs/friction found:**
- **Instance was slow** — flagged for automated health checks before the next session, no fix confirmed yet.
- **CPO UOM auto-match UX** — when only one SKU candidate matches, the system still forces a manual click to confirm instead of auto-accepting the single obvious match. Flagged as bad UX, not a correctness bug.
- **Asilah — mobile login permission block.** Logging in from her phone hit a permission error; logging into the same account from Gareth's PC worked fine. Points at a device/session-context bug in permission checking, not a real access-rights problem.
- **Yap Li Min — general feedback that PO processing feels slow.** No specific root cause captured yet; needs follow-up on what "slow" means in practice (page load, chatbot response time, or manual steps).
- **Asilah — phone UI lag (Android/Realmi, Chrome):** page interactive but **scrolling didn't work** — could tap elements, couldn't scroll the page.
- **Asilah — switched to iPhone (Safari):** could scroll and tap the browser chrome, but **could not interact with some in-page elements.**
- **Missing preflight checks, called out as a gap, not yet built:** (1) OpenAI API key credit-balance check — no warning surfaces to the user when the account runs out of credit; (2) per-user configuration/permissions preflight check to confirm each user is set up correctly before they start using the system.

**Root cause found and fixed (partially) — the mobile scrolling bug:**
The CPO details page used a desktop-style pinned-tabs layout (tabs/panels pinned, only the form area scrolls) — fine on desktop, broken on mobile because the inner scrollable container has no bounded height and just grows with content instead of scrolling. **Sales Order, Quotation, and Invoice pages already had this fixed** (pinning disabled below the mobile breakpoint) — **CPO was the one page that missed the fix.**

Symptom split by browser engine, worth knowing for future mobile bugs on this account: worked on iPhone Safari, broken on Android Chrome. Same broken markup, different engine behavior — WebKit (Safari) still lets the scroll gesture bubble up to the page when the inner scroller has nothing to scroll, so it accidentally looked fine. Chrome honors `overscroll-behavior-y: contain` strictly and traps the gesture inside the dead inner container, so the page reads as frozen on Android specifically.

**Onsite postmortem (WWW — what went well):**
- Client handling was appropriate — especially around the WhatsApp Business API (WABA) verification issue: never say an outright yes/no to the client on the spot, always circle back. Mitigation playbook used: call support for a workaround, demo the fix live, isolate whether an issue is a permission/RBAC problem vs an actual system failure (avoids over-escalating), do damage control in the room rather than after.
- Session structure was communicated simply upfront.

**Postmortem EBI (even-better-if) and key takeaways sections are empty in the raw notes** — worth chasing with Kate/Pavithra/Ivan if a written retro didn't happen separately.

**Bottom line:** UAT did happen, found real (mostly mobile-specific) bugs, and one root cause got fully diagnosed and partially fixed same-day (CPO mobile scroll, SO/Quotation/Invoice already immune). Nothing here is a scope or design problem — it's implementation bugs plus two missing preflight/guardrail checks. **The next PM's job is to (1) close the loop on Realmi/Android permission-block and PO-slowness feedback, which have no root cause yet, and (2) get this reconciled into the formal UAT Checklist's Pass/Fail columns**, since right now the structured record doesn't reflect that testing happened at all.

---

## Reading Order

*(In-folder docs only — read top to bottom, then verify against the live system and client.)*

| # | Doc | Why it matters |
|---|---|---|
| 1 | [[Dalson — Consolidated Overview]] | Start here — built specifically to onboard a tester/PM with zero prior context; everything else is source detail |
| 2 | Scope Lock v2 (Lark, `VHQPdEnCbopM9pxRapJliGiXgrb`) | The actual spine — Consolidated Overview summarizes it but doesn't replace reading it |
| 3 | [[Dalson — UAT Checklist]] | 17 items, 13 testable, full test cases — execution happened 5 Aug (see Deep Dive §5) but Pass/Fail here is still blank, unreconciled |
| — | Dalson UAT Raw Notes (Lark, `W8ArwTCImixJG7k82srlk2Bxgtf`) | The actual 5 Aug onsite execution record — bugs found, postmortem, CPO mobile-scroll RCA |
| 4 | [[Dalson — Lens Alignment Report]] | v4, cleanest rerun of any account — 4 small fixes, no hard contradictions |
| 5 | [[Dalson — End-user & Process Map]] | Real named users with contact details — rare for this KB, use it |
| 6 | [[Dalson — Before vs After MAIA and E2E Flow]] | Hand-corrected 2026-07-31, currently aligned with spine |
| 7 | [[Dalson — VoC Extraction]] | ⚠️ Stale on SL-13 confidence label (still says HIGH) |
| 8 | [[Dalson Industrial Supplies Customer Narrative Document]] | Vendor voice / sales handover context — not a scope authority |
| 9 | [[Dalson MAIA autocount integration]] | AutoCount vendor contact (Ms Tan), access details |
| 10 | [[Dalson Phase 1 Timeline]] | ⚠️ Stale (7 Jul) — do not use its milestone dates or statuses as current |
| 11 | `Lark Wiki Export/` (docx originals) | Secondary — CPO Testing Report, UAT Raw Notes, not yet converted to Markdown |

---

## Action Checklist for Incoming PM

**This week:**

- [ ] Reconcile the 5 Aug 2026 onsite UAT raw notes into [[Dalson — UAT Checklist]]'s Pass/Fail columns — testing happened, the formal record doesn't reflect it yet — Needed by: ASAP
- [ ] Close the loop on two 5 Aug findings with no root cause yet: Asilah's mobile-login permission block (worked on PC, failed on her phone), and Yap Li Min's "PO processing feels slow" feedback — Needed by: ASAP
- [ ] Confirm fix status on the CPO mobile-scroll bug (RCA done 5 Aug: desktop tab-pinning not disabled below mobile breakpoint, unlike SO/Quotation/Invoice) — Needed by: ASAP
- [ ] Ship or confirm the two missing preflight checks flagged 5 Aug: OpenAI API credit-balance warning, and per-user config/permission preflight — Needed by: before next UAT/training session
- [ ] Get the Cash Sales Invoice gap in front of backend for sizing — confirmed blocking, unsized as of 2026-07-31 — Needed by: ASAP, affects real order volume
- [ ] Confirm the UAT signatory model — sole (Yap Li Min) or multi-signatory — Needed by: before formal UAT sign-off
- [ ] Confirm driver/POD headcount — does Joseph double as driver, or is it fully Lalamove? — Needed by: before SL-5 test closure

**Before closing this UAT cycle:**

- [ ] Write UAT test cases for SL-14 (document templates) — locked 2026-07-31, zero coverage today — Needed by: before calling the cycle complete
- [ ] Get a named, attributed re-verification of SL-13 against Dalson's live AutoCount instance — currently MED confidence pending this — Needed by: before upgrading confidence back to HIGH
- [ ] Confirm Asilah's customer-visibility scope (own customers only, or all of Dalson's) — Needed by: before finalizing permission matrix

**Documentation debt:**

- [ ] Apply the 4 fixes from [[Dalson — Lens Alignment Report]] — SL-13 confidence label in UAT + VoC, cash-sales gap footnote in UAT 4b and Process Map — Needed by: low urgency, all single-line edits
- [ ] Rebuild or heavily update [[Dalson Phase 1 Timeline]] — stale since 7 Jul, doesn't reflect the Scope Lock v2 rerun cycle or the UAT Checklist's existence — Needed by: before using it for status reporting
- [ ] Convert relevant `Lark Wiki Export/` docx files (CPO Testing Report, UAT Raw Notes) to canonical Markdown if they contain information not already captured elsewhere — Needed by: low urgency

---

## See Also

- [[Dalson — Consolidated Overview]]
- [[Dalson — UAT Checklist]]
- [[Dalson — Lens Alignment Report]]
- [[Dalson — End-user & Process Map]]
- [[Dalson — Before vs After MAIA and E2E Flow]]
- [[Dalson — VoC Extraction]]
- [[Dalson Industrial Supplies Customer Narrative Document]]
- [[Dalson MAIA autocount integration]]
- [[Dalson Phase 1 Timeline]]
