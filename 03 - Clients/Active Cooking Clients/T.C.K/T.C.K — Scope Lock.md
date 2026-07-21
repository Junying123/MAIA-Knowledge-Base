---
owner: Gareth
status: draft
last_reviewed: 2026-07-21
---

# T.C.K Sdn Bhd (Maxfresh) — Scope Lock v1

**Build stage:** Pre-build (pre-kickoff). Signed 2026-06-26; kickoff not yet held.

## 1. Source Manifest

| Key | Source | Date | Processed |
| --- | --- | --- | --- |
| `[P]` | 01_Signed Proposal - T.C.K Sdn Bhd x MAIA Proposal | 2026-06-26 (signed) | Full |
| `[PS]` | 02_Project Scope and Meeting Links - T.C.K Sdn Bhd x MAIA | 2026-07-01 | Full |
| `[DH]` | Detailed Onboarding Handover - T.C.K Sdn Bhd x MAIA | 2026-07-01 | Full |
| `[Q]` | 03_Pre-Onboarding Questionnaire (PM-prefilled, pending client confirmation) | 2026-07-02 | Full |
| `[FF-Intro]` | Fireflies — Introductory Meeting | 2026-04-20 | Full (long transcript, machine-recovered after tool truncation — high confidence on content, exact timecodes not preserved) |
| `[FF-PW]` | Fireflies — Proposal Walkthrough | 2026-04-27 | Full |
| `[FF-PF1]` | Fireflies — Proposal Finalization 1 | 2026-06-10 | Full |
| `[FF-PF2]` | Fireflies — Proposal Finalization 2 | 2026-06-17 | Full |
| `[FF-PF3]` | Fireflies — Proposal Finalization 3 | 2026-06-23 | Full |
| `[FF-PF4]` | Fireflies — Proposal Finalization 4 (Signing) | 2026-06-26 | Full |
| `[G]` | Granola — Maxfresh Briefing transcript (internal Jeremy→Gareth/Wansin handover Q&A) | 2026-07-02 | Full, but source audio/STT quality is poor (garbled "You"/"Guest" labels, broken sentences) — treat literal wording with caution, meaning cross-checked against `[P]`/`[DH]` where possible |

No WhatsApp/chat exports, Forensic Account Dossier, or kickoff notes exist yet for this account — this is genuinely pre-kickoff.

## 2. Scope Lock Summary (Dashboard)

| Status | Count |
| --- | --- |
| LOCKED | 13 |
| LOCKED (SUPERSEDED) | 0 |
| AGREED IN PRINCIPLE — NOT LOCKED | 6 |
| NEEDS SCOPING | 8 |
| OUT OF SCOPE | 6 |

**Blocking items (cannot configure past these):**
- SL-7 (cutoff date not fixed — blocks inventory load and go-live sequencing)
- SL-8 (stock deduction event — invoice vs DO — not chosen)
- SL-10 (customer group markup: group-level vs customer-level pricing — mechanism genuinely undecided, flagged by Mindhive's own sales lead as unresolved)
- SL-15 (order value approval threshold + approver names — no figures yet)
- SL-16 (min/max selling price reference values — no figures yet)

**Top items to confirm with client, in priority order:**
1. Cutoff date for MAIA go-live (SL-7)
2. Stock deduction event: invoice or DO (SL-8)
3. Customer group markup mechanism — pure group-level vs needs customer-level override (SL-10)
4. Order value approval threshold + named approver(s) (SL-15)
5. Min/max selling price guardrail figures (SL-16)
6. Hosting environment confirmation from client's IT/AutoCount vendor (SL-17)
7. Picker assignment: basic (any picker) vs named-picker assignment (SL-12)
8. Weekly price list format for customers: confirm text-broadcast requirement is in scope and who owns sending it (SL-6)

## 3. Locked Scope (Build-Ready)

**SL-1 — WhatsApp order intake (internal forwarding)**
Status: LOCKED
Source: `[P]` §4.2, §6.1 Scenario A; `[DH]` §7.1; `[Q]` 9.3
Flow: Customer sends order via existing WhatsApp group → internal staff forwards the message into MAIA via WhatsApp → MAIA extracts customer, item, quantity, and order details → MAIA references preloaded customer/item/stock/pricing data → if fields are missing, MAIA asks follow-up questions or flags for human review → MAIA prepares a draft sales order → staff reviews and confirms → MAIA submits into AutoCount.
Acceptance criteria: A forwarded WhatsApp order produces a correctly-populated draft SO for known customers/items; missing-field cases are flagged, not silently guessed.
Confidence: HIGH

**SL-2 — Draft SO review/confirmation before submission**
Status: LOCKED
Source: `[P]` §4.2–4.3, §6.1; `[DH]` §7.1
Flow: MAIA never submits to AutoCount without an explicit human confirmation step.
Acceptance criteria: No SO reaches AutoCount without a logged confirmation action by a staff user.
Confidence: HIGH

**SL-3 — AutoCount as system of record; MAIA as operating layer, not replacement**
Status: LOCKED
Source: `[P]` Exec Summary, §3.1; `[DH]` §2, §10.1; `[FF-PF1]`; `[FF-PF2]`
Flow: AutoCount remains source of truth for accounting, GL, and official document numbering. MAIA sits in front of it for order intake/prep/tracking.
Acceptance criteria: Finance continues operating in AutoCount unchanged in Phase 1; no GL/accounting functions built in MAIA.
Confidence: HIGH

**SL-4 — AutoCount running-number continuity**
Status: LOCKED
Source: `[FF-PF2]` ("running numbers ... will definitely follow your current auto count running numbers"); `[DH]` §7.3, §10.4
Flow: Documents (SO, invoice, CN) generated via MAIA are actually created inside AutoCount; MAIA does not run a parallel numbering sequence.
Acceptance criteria: Every document MAIA "creates" has an AutoCount-issued running number, continuous with T.C.K's existing 10-year sequence.
Confidence: HIGH

**SL-5 — Documents included: SO, Invoice, DO, Pick list**
Status: LOCKED
Source: `[P]` §4.4; `[PS]` §4; `[DH]` §8.3
Acceptance criteria: All four document types can be generated from a confirmed order, formatted to match existing AutoCount layout (see SL-11).
Confidence: HIGH

**SL-6 — Customer grouping with markup (customization, FOC)**
Status: LOCKED (mechanism partially undefined — see SL-10 for the open sub-question)
Source: `[P]` §5.1, §9.1; `[PS]` §5; `[DH]` §9; `[Q]` 4.3, 4.8–4.9
Flow: Customers are grouped into pricing categories (e.g. "Hotels"); each group carries a markup applied on top of the weekly base price during order creation.
Acceptance criteria: A customer in a defined group receives base price + that group's markup automatically during draft SO creation.
Confidence: MED — the *group-vs-customer* pricing-level question (SL-10) sits underneath this and isn't resolved yet.

**SL-7 (item) — Weekly base price upload/update (customization, FOC)**
Status: LOCKED
Source: `[P]` §5.1; `[PS]` §5; `[DH]` §7.2, §9; `[Q]` 4.11
Flow: T.C.K uploads weekly item base prices via a MAIA-provided template; MAIA uses the latest uploaded prices for all subsequent order pricing.
Acceptance criteria: Uploading a new weekly price file updates the base price used in the very next order draft; previous week's prices are not silently reused.
Confidence: HIGH

**SL-8 — Min/max selling price guardrails (setup item)**
Status: LOCKED (thresholds themselves NOT locked — see SL-16)
Source: `[P]` §5.2; `[PS]` §5; `[DH]` §9
Flow: MAIA checks a computed selling price against configured min/max limits and flags orders that fall outside them.
Acceptance criteria: An order priced below/above the configured guardrail is flagged before submission, not silently allowed.
Confidence: MED (mechanism locked, values needed — SL-16)

**SL-9 — High-value order approval flow (setup item)**
Status: LOCKED (threshold + approver NOT locked — see SL-15)
Source: `[P]` §5.2, §6.4; `[PS]` §5; `[DH]` §9, §12.2
Flow: Orders above a configured order-value threshold are routed for approval before final AutoCount submission.
Acceptance criteria: An order exceeding the (TBD) threshold is held in a pending-approval state and cannot reach AutoCount until approved.
Confidence: MED (mechanism locked, values needed — SL-15)

**SL-10 — Pick list generation and fulfillment status support**
Status: LOCKED
Source: `[P]` §4.2, §6.3 Scenario C; `[DH]` §7.5; `[FF-PF3]`
Flow: A confirmed SO generates a pick list; warehouse/logistics staff execute picking and update MAIA (via WhatsApp or backend) when picking is in-progress/complete; status is reflected in the backend workspace. Only confirmed-complete records are pushed to AutoCount — canceled orders are never pushed.
Acceptance criteria: Pick list reflects the confirmed SO's line items; status transitions (pending/in-progress/complete/canceled) are visible in backend; canceled orders never create AutoCount records.
Confidence: HIGH

**SL-11 — Document format matches existing AutoCount layout**
Status: LOCKED
Source: `[FF-PF3]` ("invoice preview will follow exactly the same as how your auto count format is"); `[DH]` §8.3
Acceptance criteria: Generated invoice/DO/pick list visually match T.C.K's current AutoCount letterhead/layout, confirmed by client sign-off during UAT.
Confidence: HIGH

**SL-12 — Forward-only data model (no historical migration by default)**
Status: LOCKED
Source: `[FF-PF2]`; `[DH]` §10.2; `[Q]` 11.4 (checkbox: Forward-only confirmed)
Flow: Historical transaction data stays in AutoCount. MAIA begins operational tracking from an agreed cutoff date (date itself not yet fixed — see SL-13 in Needs-Scoping).
Acceptance criteria: MAIA reporting/analytics only covers transactions from the agreed cutoff forward; no bulk historical import occurs without a separately-scoped change order.
Confidence: HIGH

**SL-13 — Selective/flexible push-pull between MAIA and AutoCount**
Status: LOCKED
Source: `[FF-PF3]` (client can choose not to push stock balances but does push invoices/DN/CN); `[DH]` §10.4
Flow: Data sync direction is configurable per data type — client can elect to keep certain data (e.g. stock balances) MAIA-only while pushing transactional documents (invoice, DN, CN) to AutoCount.
Acceptance criteria: Sync behavior per data type matches what's configured during onboarding technical session; no unintended pushes of unconfirmed/canceled data.
Confidence: MED — general mechanism confirmed, exact per-field push/pull map still to be defined during the technical onboarding session (this is expected follow-up work, not an open risk).

## 4. Agreed in Principle — Not Locked

**SL-14 — Hosting on client's own cloud (same environment as AutoCount)**
Status: AGREED IN PRINCIPLE — NOT LOCKED
Source: `[FF-PF3]`; `[FF-PF4]`; `[DH]` §10.3
What's undefined: Client's IT/AutoCount vendor has not yet formally confirmed compatibility/setup in writing (only verbally, via Jeremy relaying a vendor call in `[FF-PF4]`). Exact hosting spec, access method, and responsibility split (who provisions what) not documented.
Decision needed from: T.C.K IT contact + AutoCount vendor, validated by Mindhive technical lead.

**SL-15 — Order value approval threshold + approver identity**
Status: AGREED IN PRINCIPLE — NOT LOCKED
Source: `[P]` §5.2; `[DH]` §14.3; `[Q]` 5.6, 7.3 (both explicitly marked "exact thresholds to be configured")
What's undefined: The actual RM threshold and named approver(s). Andrew Tay is confirmed as ultimate decision-maker (`[Q]` 12.3) but day-to-day approver for this specific flow is not named.
Decision needed from: Andrew Tay / Cheryl, during kickoff workflow session.

**SL-16 — Min/max selling price guardrail values**
Status: AGREED IN PRINCIPLE — NOT LOCKED
Source: `[P]` §5.2; `[Q]` (no section directly answers; §4.8 confirms pricing varies but no min/max figures given)
What's undefined: The actual min/max price reference values or logic (per-SKU? per-group? flat margin floor?).
Decision needed from: Andrew Tay / pricing owner (Wei Wei, per `[Q]` 4.12).

**SL-17 — Cutoff date for go-live / inventory load**
Status: AGREED IN PRINCIPLE — NOT LOCKED
Source: `[FF-PF2]` ("1st of July" floated as an example, not fixed); `[DH]` §7.4, §14.3
What's undefined: A firm calendar date has never been agreed — only used as an illustrative example during a finalization call. Given the account is now past July, this needs to be re-set at kickoff.
Decision needed from: T.C.K + Mindhive onboarding team, at kickoff.

**SL-18 — Stock deduction event (invoice vs delivery order)**
Status: AGREED IN PRINCIPLE — NOT LOCKED
Source: `[DH]` §7.4, §14.3 ("Whether stock is deducted at invoice or delivery order" listed as an open workflow decision); `[FF-PF3]` (confirms SO reserves without deducting; deduction happens at one of these two points, client's choice)
What's undefined: Which of the two points T.C.K actually wants.
Decision needed from: T.C.K sales/logistics leads, at kickoff.

**SL-19 — Weekly text-format price/catalog broadcast to customers**
Status: AGREED IN PRINCIPLE — NOT LOCKED
Source: `[G]` (Jeremy: client wants a weekly text-format items+price list generated so the "boss can forward to whatever groups"; confirmed "within phase one" by Jeremy, but exact build/timing left to onboarding team's discretion)
What's undefined: This was sold informally in a sales call, not written into the signed proposal's explicit feature list — it rides on top of the already-scoped weekly base price upload but as an *outbound* customer-facing text digest, not just an internal price update. Needs to be explicitly reconciled against `[P]` before committing a build date.
Decision needed from: Mindhive PM team (Gareth/Ivan) to decide scope/timing, per Jeremy's handover; client expectation should be re-confirmed at kickoff since this wasn't in the signed document.
Confidence flag: this is a vendor-side (sales) commitment made informally and not written into the SOW — see Supersessions Log.

## 5. Needs-Scoping Register

| SL-N | What's unclear | Question to resolve | Who decides | Blocking? | Sources |
| --- | --- | --- | --- | --- | --- |
| SL-20 | Customer-group markup: is pricing purely group-level, or does it need a customer-level override/lookup? | Mindhive's own sales lead (Jeremy) flagged this as unresolved live on the internal handover call — AutoCount doesn't structurally support group-level-only pricing today. Does T.C.K need "what's the price for Hilton specifically" answered directly, or is group-level sufficient? | Andrew Tay / Wei Wei (pricing owner), with Mindhive product input | YES — blocks customer-grouping customization build | `[G]` |
| SL-21 | Picker assignment: basic (any picker can pick) vs named-picker assignment | `[FF-PF1]`/`[FF-PF3]` treat named-picker assignment as a deferred future ask; `[G]` (Jeremy, garbled) suggests it "should be assigning" already — contradicts the "future ask" framing elsewhere. Conflict needs resolving, not just picking a side. | T.C.K logistics lead + Mindhive PM | NO (Phase 1 can ship with basic assignment) | `[FF-PF1]`, `[FF-PF3]`, `[G]` — **see Source-Conflict Register** |
| SL-22 | Picking-list timestamp on completion | `[FF-PF3]` — Andrew requested a timestamp when picking is marked complete; Jeremy said configurable, not yet built. | Exact field/format needed and whether it's Phase 1 setup or a customization. | T.C.K logistics + Mindhive product | NO | `[FF-PF3]`, `[DH]` §7.5 |
| SL-23 | Photo-upload proof of delivery / pick-list completion | `[DH]` §7.6 — photo upload discussed as supporting evidence for order closure, digital e-signature explicitly NOT confirmed as Phase 1. | Is photo-upload itself in Phase 1, or only a "nice to have" not yet built? | Mindhive product + Andrew | NO | `[DH]` §7.6, §13.2 |
| SL-24 | Invoice generation trigger: does MAIA generate invoices itself, or only pull/display what's created in AutoCount? | `[G]` (Jeremy, to internal team): "Maya will not generate by itself... they can ask Maya to pull from the AutoCount to generate the invoice" — this reads as a narrower commitment than `[P]` §4.4/§6.2 implies ("MAIA generates the agreed document output, such as invoice"). Needs reconciling — see Supersessions Log. | Mindhive product/dev team to confirm actual build behavior against signed proposal wording | Gareth/PM team, confirm with Jeremy | YES — affects document-handling build design | `[G]`, `[P]` §4.4, §6.2 — **see Source-Conflict Register** |
| SL-25 | AutoCount vendor identity, version, API/DB access availability | `[DH]` §10.4 lists this as an open integration question; no vendor contact captured yet. | Who is the AutoCount vendor? Is API/DB access available, and under what constraints? | T.C.K IT contact | YES — blocks all AutoCount integration work | `[DH]` §10.4, §14.1 |
| SL-26 | E-invoicing / LHDN compliance status | `[Q]` 7.7 — questionnaire pre-fill notes Andrew flagged 72-hour e-invoice sync as important during intro call, but current LHDN compliance status (manual vs automated) is unconfirmed. | Is T.C.K's e-invoicing already compliant/automated, and does MAIA need to accommodate a sync-delay window? | T.C.K finance team | NO (excluded from Phase 1 per `[P]` §10.2, but affects timing assumptions) | `[Q]` 7.7, `[P]` §10.2 |
| SL-27 | Internal day-to-day project owner (PIC) | `[Q]` 12.2 — Cheryl floated as likely candidate but not confirmed; `[DH]` §14.1 lists this as unconfirmed. | Who is T.C.K's actual onboarding PIC? | Andrew Tay | YES — blocks kickoff session planning | `[Q]` 12.2, `[DH]` §14.1 |

## 6. Supersessions Log

**SOW said** → MAIA "generates the agreed document output, such as invoice or delivery-related document" as part of Scenario B `[P §6.2]`, and Phase 1 document list includes Invoice `[P §4.4]` → **now described internally** as: MAIA does not generate invoices itself; client asks Maya to pull the invoice from AutoCount (already-created there) via a link/QR code `[G]` → **changed by**: Jeremy (Mindhive sales), relayed during internal PM handover call, not a client-facing renegotiation → **rationale**: not stated; appears to reflect how invoice-document generation is actually implemented across Mindhive's client base (an existing pattern, referenced against another client "Fixguru") rather than a T.C.K-specific change → **client agreed? NOT EVIDENCED** — this distinction was never surfaced to Andrew Tay in any call transcript reviewed. **Risk: if built as "MAIA merely links to an AutoCount-generated invoice" rather than "MAIA generates the invoice," this may read as a scope reduction from the client's perspective at UAT.** Flag for internal product/dev clarification before committing to either build pattern, and confirm actual behavior with client during kickoff so expectations match what ships.

**SOW/informal-sales said** → weekly text-format catalog/price broadcast to customers is "within Phase 1" per Jeremy `[G]`, but this line item does not appear anywhere in the signed proposal `[P]` (which only commits to the *internal* weekly base-price-upload template, not a customer-facing broadcast) → **now positioned** as an informal sales-call commitment, timing/build left to the onboarding PM's discretion → **changed by**: Jeremy, informally, during and after the sales cycle → **rationale**: presented as a natural extension of the base-price-upload feature the client already understands → **client agreed? Andrew Tay was told this by Jeremy directly per the discussion in `[G]`, but no written confirmation/proposal addendum exists.** Since Jeremy is the vendor party who made the promise, and Andrew is the counterparty who reportedly heard it, treat this as CLIENT AWARE but NOT WRITTEN — surface it at kickoff so it converts into an explicit written scope line (SL-19) rather than remaining an oral promise.

## 7. Out-of-Scope / Explicit Exclusions

| SL-N | Item | Reason | Source |
| --- | --- | --- | --- |
| SL-28 | Full ERP replacement | AutoCount remains system of record by design | `[P]` §10.2, `[PS]` §10 |
| SL-29 | Full warehouse management system / deeper warehouse execution logic (route planning, driver app, advanced picker assignment beyond basic) | Explicitly excluded unless separately scoped | `[P]` §5.3, §10.2; `[DH]` §13.1–13.2 |
| SL-30 | Customer-facing ordering chatbot / full B2B self-service ordering rollout | Explicitly excluded; discussed only as long-term roadmap | `[P]` §5.3, §10.2; `[FF-PW]` |
| SL-31 | Complex multi-level approval matrices beyond the single agreed high-value threshold | Explicitly excluded | `[P]` §5.3, §10.2 |
| SL-32 | Custom dashboards/reports beyond agreed standard backend visibility | Explicitly excluded | `[P]` §5.3, §10.2 |
| SL-33 | Historical data migration into MAIA | Not included unless separately scoped; forward-only is the agreed default (see SL-12) | `[DH]` §10.2, §13.2 |

## 8. Source-Conflict Register

**Conflict 1 — Picker assignment (basic vs named)**
- `[FF-PF1]` and `[FF-PF3]`: named-picker assignment is explicitly framed as a future/deferred ask, not yet built, to be captured during requirements-gathering.
- `[G]`: Jeremy states (garbled but readable) "the basic click list... assigning orders to specific [picker]... should be assigning if I'm not mistaken" — implying it may already be a Phase 1 commitment.
- **Resolution: UNRESOLVED.** Given `[G]` is a low-fidelity internal transcript and Jeremy's own phrasing ("if I'm not mistaken") signals uncertainty, and both proposal-facing docs consistently describe this as basic/generic assignment for Phase 1, treat basic assignment as the working default (SL-10) but confirm explicitly with Jeremy/client before kickoff — do not build named-assignment logic without written confirmation.

**Conflict 2 — Invoice generation: MAIA-generated vs AutoCount-pulled**
- `[P]` §4.4, §6.2: describes MAIA "generating" invoice/delivery-related documents as part of Phase 1 document handling.
- `[G]`: Jeremy tells the internal team MAIA does not generate invoices itself; it pulls/links to what AutoCount already created.
- **Resolution: UNRESOLVED — see Supersessions Log entry above.** This is the single highest-priority internal clarification needed before UAT test-case design, since it changes what "document handling" concretely means for this client.

## 9. Client Confirmation Agenda

Send-ready list for the kickoff session:

1. What is the go-live cutoff date for MAIA (from which date forward will orders/stock be tracked in MAIA)? (SL-17)
2. At which point should stock be deducted — invoice creation or delivery-order creation? (SL-18)
3. For customer-group pricing: is a group-level markup enough, or do specific customers (e.g. individual hotel accounts) need their own price answer distinct from the group? (SL-10, SL-20)
4. What order-value threshold should trigger approval, and who is the approver? (SL-15)
5. What are the actual min/max selling-price limits (or the logic to derive them)? (SL-16)
6. Who is T.C.K's day-to-day onboarding PIC — is it Cheryl, or someone else? (SL-27)
7. Who is the AutoCount vendor contact, and can they confirm API/database access availability? (SL-25)
8. Confirm hosting: will MAIA run on T.C.K's existing AutoCount cloud environment, and who at IT will validate this in writing? (SL-14)
9. Should pick-list picker assignment be basic (any picker) or assigned to a named individual, for Phase 1? (SL-21)
10. Is a timestamp on pick-list completion required for Phase 1, or can it wait? (SL-22)
11. Confirm: does T.C.K expect MAIA to generate invoices directly, or is pulling/linking to an AutoCount-generated invoice acceptable? (SL-24)
12. Confirm the weekly customer-facing text price/catalog broadcast as an explicit, written Phase 1 line item (it was discussed verbally but isn't in the signed proposal). (SL-19)

## 10. Bottom Line

The core Phase 1 workflow — WhatsApp order intake, draft SO prep, AutoCount-linked submission with preserved running numbers, document generation (SO/invoice/DO/pick list) matching AutoCount's layout, pick-list/fulfillment tracking, and the two paid-but-waived customizations (customer grouping with markup, weekly base price upload) — is solidly locked and safe to start configuring. What's genuinely open are the numeric/operational parameters that were always going to wait for kickoff (thresholds, cutoff date, deduction event, hosting sign-off) — normal and expected at this stage, not a red flag.

The two items that need attention *before* kickoff rather than during it are the picker-assignment framing conflict (Conflict 1) and, more importantly, the invoice-generation mechanism conflict (Conflict 2) — because Jeremy's internal framing to the PM team reads narrower than what the signed proposal implies to the client. Reconcile that internally first; walking into kickoff with two different mental models of "how invoicing works" between sales and delivery is the single highest-risk gap in this account right now. Delivery is not ahead of scope finalisation — scope finalisation for the numeric parameters is exactly on schedule for a pre-kickoff account — but the invoice-mechanism ambiguity should be closed internally within Mindhive before it reaches the client.

## See Also

- [[03 - Clients/Active Cooking Clients/T.C.K/Onboarding/01_Signed Proposal - T.C.K Sdn Bhd x MAIA Proposal]]
- [[03 - Clients/Active Cooking Clients/T.C.K/Onboarding/Detailed Onboarding Handover - T.C.K Sdn Bhd x MAIA]]
- [[03 - Clients/Active Cooking Clients/T.C.K/Onboarding/02_Project Scope and Meeting Links - T.C.K Sdn Bhd x MAIA]]
- [[03 - Clients/Active Cooking Clients/T.C.K/Onboarding/03_Pre-Onboarding Questionnaire - T.C.K Sdn Bhd x MAIA]]
- [[03 - Clients/Active Cooking Clients/T.C.K/T.C.K — VoC Extraction]]
