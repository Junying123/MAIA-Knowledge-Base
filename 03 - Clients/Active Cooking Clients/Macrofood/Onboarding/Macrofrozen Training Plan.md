---
owner: Gareth
status: draft
last_reviewed: 2026-07-14
---

# Macrofrozen Training Plan

## Note on naming
"Macrofrozen" and "Macrofood" refer to the same client — confirmed via matching SQL vendor contact (Mr. Chua, +60 12 212 2126) appearing in both this file's linked SQL doc and the Lark "Macrofood Phase 1 — Backward Timeline to Go-Live" doc. Filed under Macrofood in this vault; treat as one account.

## Status: Training format changed — informal, no slides

Per 14 Jul Post Mortem discussion: skip the 116-slide deck. Client works fast, wants output not polish. Run as a casual, live, handhold-style session — introduction straight into live demo, then let them try it themselves.

Training was originally set for 2026-07-07, rescheduled since — not ready per checklist below at the time. Re-approach: informal live-demo format, not the slide deck.

## Confirmed Attendees (source: Macrofood Sales User Setup.xlsx)
- David — Admin / MD / credit controller
- CJ Tan — Sales Manager
- Ben — Sales User (rep)
- Queenie — Sales User (rep)
- Grace — Finance Manager (and the person who actually keys in every order — sales reps WhatsApp orders to her, she doesn't self-serve in MAIA)
- Lai — Logistics Manager (warehouse: pick-list handoff + weight confirm)
- Applle — Admin
- Krystle + Sean also attending (referred this client)

## Training Goal

Macrofrozen staff can run their sales workflow end-to-end (order intake → SO → external pick list → weight confirm → DN → Invoice → push to SQL) unassisted on their own instance after training. Minimum viable competency for go-live, not full feature mastery. Invoice/CN reconciliation, AR reconciliation, credit control deferred beyond disclosure below — not full training scope.

## How to Conduct the Training

**Format:** Introduction → straight into live demo → let them try it themselves → collect feedback for a follow-up UAT.

1. Skip intros/theory. Go straight to: "Here is how we are going to create an order" — live demo on MAIA using their actual business workflow, not generic examples.
2. Demo the confirmed E2E flow, live, in this order:
   - Forward a real customer WhatsApp order into the one MAIA number → show extracted draft (customer/item/qty)
   - Also show the CPO path: a PO-issuing customer sends a PO document → MAIA matches customer/item lines → confirm → submit as CPO → same downstream flow from here
   - Sales reviews + confirms draft → credit check runs live (block if over limit, David approves override)
   - External pick list (PDF-based): SO → pick list PDF generated → shared with warehouse pickers → annotated with actual picked qty → uploaded back to MAIA
   - SO auto-amends to actual picked weight → DO + Invoice regenerate at the confirmed weight — verify this works before demoing live, flagged top priority
   - Finance side: payment slip + bank statement upload → MAIA suggests invoice match → confirm → knock-off
   - David's side: bulk price template upload, credit override, dashboard
3. Let them drive. After the demo, hand over and let them try 1-2 of their own real orders live.
4. Expect Q&A-heavy, not presentation-heavy — they want to know how to use it, not sit through a pitch.
5. Confirm setup for all ~6 users before anything else — more important than covering every feature.

## 5 Action Items During Training

1. **AWS form** — bring the AWS form (from JobService), get it signed by the client during the session.
2. **Credit Note — be transparent about the known SQL mismatch.** Tell them plainly: everything else should work, except credit notes. For now, continue doing CN the way they currently do in SQL; once the backend fix ships, it reverses back into MAIA. Don't overpromise this is fixed.
3. **Bulk price update — show it, but don't claim it's 100% ready.** Just completed early this week, still testing on the back end. Demo it live, state that clearly, ask David for initial feedback/impressions (he currently manages pricing via Excel) rather than presenting as finished.
4. **Product catalogue customisation — bring prepared questions.** Product team hasn't answered the open catalogue-format questions yet. Extract answers directly from the client in person (Excel format, fields, etc.) rather than relying on async follow-up.
5. **Prepare a conditional/partial-acceptance walkthrough.** Pre-decide how to handle features that work vs. don't as you go, rather than expecting a clean pass/fail. Pre-plan known edge cases (e.g., customer retrieval) so you're not improvising live.

**Timeline transparency:** if asked about customisation delivery, tell them end of this month to mid-August, AR reconciliation likely longer (phased rollout). Be upfront that capacity is affected by a broader multi-client rollout, but customisations are still coming.

## E2E Sales Order Workflow (confirmed — 4 Jun meeting notes + End-user & Process Map)

```
WhatsApp order  ──┐
                   ├──> SO ──> external pick list (PDF, annotated by warehouse) ──> confirm weight ──> DN ──> Invoice ──> push to SQL
CPO (PO document) ─┘
```

CPO = plain PO document intake for a subset of customers who issue formal purchase orders, not the certificate/tax-reference CPO feature built for C1/C3 clients — no cert linkage, no tax reference validation needed. Same downstream flow either way. Pick list stays external/outside MAIA for Phase 1, for both intake channels.

## Roles & Permission Matrix (source: Macrofood Sales User Setup.xlsx)

| Role | Who | Can create | Can approve | Can view | Cannot do |
|---|---|---|---|---|---|
| Sales User | Ben, Queenie | SO, quotation, customer order | — | Own customers only | See other reps' data, approve over-limit, edit master |
| Sales Manager | CJ Tan | Same as Sales User + team oversight | Team-level approvals only | Own team's reps' data (not company-wide) | Approve outside own team |
| Finance Manager | Grace | CN, payment entry, knock-off, SO (keys in orders sales reps WhatsApp to her) | Payment match (self-confirm) | AR/outstanding | Override credit limit, auto-post unclear payer |
| Logistics Manager | Lai | Pick-list upload / weight confirm | — | Own tasks | Edit customer master, pricing, credit terms |
| Admin | David, Applle | All | Credit-limit override, pricing floor | All | — |

## Scope Lock Reference (source: Lark "Macro Frozen — Scope Lock v1", 23 Jun 2026)

**Train only on LOCKED items:**
- SL-01 MAIA sits on top of SQL (SQL is customer/item master)
- SL-02 AR customer invoice reconciliation (deferred from Phase 1 — verify before including)
- SL-03 Bulk price update & pricing enforcement (untested, disclose as WIP — see Action Item 3)
- SL-04 Credit-limit / payment-term control
- SL-05 Salesperson customer visibility (own customers only)
- SL-06 One MAIA WhatsApp number
- SL-07 SO/DO/Invoice generation where integration allows

**Disclose as known issue, don't hide:** Credit Note — SQL/MAIA version mismatch, client continues in SQL until fixed (Action Item 2).

**Do NOT build training content around:**
- Any out-of-scope item: AP reconciliation, merchant/QR settlement, delivery trip management, WMS/barcode scanning, volume pricing, B2C ordering app, WhatsApp blasting
- Certificate/tax-reference CPO features (C1/C3-style) — not applicable to Macrofrozen; their CPO is plain PO document intake only
- Driver POD (parked), quotation flow (unresolved gap), live/real-time stock check (only annual stock count exists, non-blocking)

## Internal QA Readiness Before Session (14 Jul Post Mortem findings)

- [ ] Confirm tax template set to **No Tax only** (Macro Frozen-specific data seeding requirement)
- [ ] Verify fresh-weight adjustment flow actually works — flagged top priority, deadline Thu 16 Jul
- [ ] Confirm demo/facilitator uses correct role mapping (Sales/Finance/Warehouse/Management per matrix above), not generic labels
- [ ] Verify historical item pricing shows correctly in front end/chatbot (last-invoiced-price feature)
- [ ] Have fallback/remediation steps ready for likely blockers — don't improvise live in front of client
- [ ] Catalogue real sample documents (orders, POs, pick-list PDFs) in advance — don't source live during session
- [ ] Confirm UAT signatory (likely David, not yet confirmed in writing)
- [x] Confirm names/roles: Ben, Queenie (Sales Users), CJ Tan (Sales Manager), Grace (Finance Manager), Lai (Logistics Manager), Applle, David (Admin) — per Macrofood Sales User Setup.xlsx
- [ ] Driver — not named/contacted, no MAIA role defined yet
- [ ] Bring AWS form (JobService) for signature during session

## Known Blockers

| Feature/Module | Status | Blocking training? |
|---|---|---|
| Fresh-weight adjustment flow | Top priority, deadline Thu 16 Jul, not yet confirmed working | Y if not resolved by session |
| Credit Note (SQL mismatch) | Known issue, in progress — disclose to client, SQL workaround for now | N — disclosed workaround |
| Bulk price update | Just completed, untested — show with caveat | N — disclosed as WIP |
| Product catalogue format | Open questions, not yet answered by product team | N — capture live in session |
| Doc samples (invoice/CN/DO/pick list) | Requested 4 Jun, receipt unconfirmed | Y — blocks PDF-render verification |
| User/role permission setup | Names/roles confirmed (xlsx); login/access still to verify | Y until access verified |
| Certificate/tax-reference CPO features | Confirmed not applicable to Macrofrozen | N/A |
| Live stock check | Not agreed for Phase 1 | N/A — don't test |

## Next Actions

1. Bring AWS form from JobService before session
2. Confirm tax template (No Tax only) and fresh-weight flow internally before demo
3. Prepare catalogue-format questions to ask David live
4. Prepare partial-acceptance walkthrough plan + fallback answers for likely blockers
5. Confirm names/access for all ~6 users (2 finance, 1 warehouse still unconfirmed)
6. Run informal, no-slides, live demo per structure above
7. Collect feedback → schedule second UAT focused on custom features (AR recon, bulk price, catalogue)

## Draft Client Message (WhatsApp)

No vendor/1st-delay mention — full ownership, keep it simple.

> Hi [Name], morning!
>
> Sorry for the delay on the training session again — we know we already pushed it back once before, and we don't want to keep doing that to you.
>
> Quick update on what's happening:
>
> We found some issues while testing the system internally. Before we bring your team in for training, we want to fix these first. If we go ahead with training now and your team hits errors while learning, it'll be a bad experience and waste everyone's time. We rather get it right first.
>
> **What's next:**
> 1. We fix the issues we found
> 2. We test it again internally to make sure it's stable
> 3. Then we do the training with your team
> 4. After that, you can go live and start using it
>
> **Updated timeline:**
> - Fix + internal testing: [DATE]
> - Training session: [DATE]
> - Go live: [DATE]
>
> We know this is later than end of June like we planned, and we're sorry about that. But once we train your team, we want it to be smooth and not have to redo it again due to system issues.
>
> Will update you once testing is done. Thanks for bearing with us!

## See Also

- [[Macro Frozen SQL Integration]]
- [[01 - MAIA Product/Client Training/MAIA User Training - Slide Content Proposal]]
- [[02 - PM Playbook/Templates/[Template] Pre-Training Readiness Checklist]]
- [[04 - QA & Known Issues/Test Scenarios Index]]
- Lark: Scope Lock v1, End-user & Process Map (Lens 3), UAT Checklist (Phase 1 Core), Product D1 QA Post Mortem
