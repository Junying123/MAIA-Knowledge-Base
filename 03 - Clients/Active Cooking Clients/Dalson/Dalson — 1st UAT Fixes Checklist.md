---
owner: Gareth
status: draft
last_reviewed: 2026-08-07
client: Dalson
lark_url: https://eg69120xnei.sg.larksuite.com/wiki/TnTFwTKsDiZdoSkZw95lCMNtgp6
---

# Dalson — 1st UAT Fixes Checklist

> Source: onsite UAT session 5 Aug 2026 (Kate, Gareth, Pavithra, Ivan onsite; Yap Li Min, Asilah, Joseph client-side) — raw notes + session transcript. This is the reconciliation of what broke live against [[Dalson — UAT Checklist]], whose Pass/Fail columns are still blank. Feeds the 2nd UAT (17 Aug 2026).

---

## Bugs Found — Fix Before 2nd UAT

| # | Issue | Root cause | Status | Owner | Target |
|---|---|---|---|---|---|
| 1 | CPO details page broken on mobile — scrolling doesn't work (Asilah, Realmi/Android Chrome) | Desktop pinned-tabs layout: inner scroller has no bounded height, grows with content instead of scrolling. Chrome traps the gesture inside the dead container (`overscroll-behavior-y: contain`), so page reads frozen. SO/Quotation/Invoice already fixed (pinning disabled below mobile breakpoint) — CPO missed it | RCA done, fix identified, not confirmed shipped | Dev | Before 17 Aug |
| 2 | Same CPO page, iPhone Safari — can scroll/tap browser chrome, but can't interact with some in-page elements | Same broken markup as #1, different engine behavior — WebKit lets the scroll gesture bubble to the page so it partially masks the bug | Same fix as #1 should resolve | Dev | Before 17 Aug |
| 3 | Asilah — mobile login hits a permission error; same account on Gareth's PC works fine | Not diagnosed — device/session-context bug in permission checking, not a real access-rights issue | Open, no root cause yet | Dev | Before 17 Aug |
| 4 | CPO item/UOM matching — when only 1 SKU candidate matches, system still forces a manual click instead of auto-accepting | UX gap, not a correctness bug (multi-candidate case works fine) | Open | Dev | Before 17 Aug |
| 5 | New-item creation flow threw repeated "configuration problem" errors live (e.g. item not matched/found, tab defaults not applied) | Not diagnosed — surfaced multiple times during live item creation in session | Open | Dev | Before 17 Aug |
| 6 | Yap Li Min — general feedback that PO processing feels slow | No specific cause captured — could be page load, chatbot response time, or manual steps. Needs follow-up on what "slow" means in practice | Open, needs clarification from client | Gareth/incoming PM → client | Before 17 Aug |
| 7 | Instance was slow during the session | No fix confirmed — flagged for automated health checks before next session | Open | Dev/Ops | Before 17 Aug |

## Missing Guardrails — Not Bugs, But Flagged Gaps

| # | Gap | Detail | Owner | Target |
|---|---|---|---|---|
| 8 | No OpenAI API credit-balance preflight check | No warning surfaces to user when account runs out of credit | Dev | Before 17 Aug |
| 9 | No per-user configuration/permission preflight check | Nothing confirms each user is correctly set up before they start using the system | Dev | Before 17 Aug |

## Integration Blockers (from session, not UAT bugs)

| # | Item | Detail | Target |
|---|---|---|---|
| 10 | Production AutoCount not yet connected | Still running against a sandbox/demo snapshot (29 Jul). Go-live cutover to live AutoCount instance pending | Before go-live |
| 11 | Cash Sales Invoice integration | AutoCount's cash-sales-invoice implementation differs from other order types — needs separate build. Client's own target: 15 Aug 2026 | 15 Aug 2026 |
| 12 | WhatsApp Business (Meta/WABA) verification blocked | Business document upload issue — workaround discussed: submit an internal company letterhead doc showing the WhatsApp number. Going live on Telegram in the interim | Ongoing, workaround in progress |

---

## What Went Well (session postmortem)

- Client handling during the WABA blocker was correct — never gave an outright yes/no on the spot, always circled back after checking. Mitigation playbook used: call support, demo the fix live in the room, isolate whether an issue is permission/RBAC vs an actual system failure (avoids over-escalating).
- Session structure was communicated simply upfront.

---

## Next Session

**2nd UAT: 17 August 2026, 11:00.** Site team to confirm items 1–9 above are fixed/shipped before this date. Items 10–12 are separate integration-readiness gates, not UAT pass/fail criteria.

---

## See Also
- [[Dalson — UAT Checklist]] — formal 17-item scope checklist, Pass/Fail still needs reconciling against this
- [[Dalson — Consolidated Overview]]
- [[Dalson — PM Handover Brief]]
