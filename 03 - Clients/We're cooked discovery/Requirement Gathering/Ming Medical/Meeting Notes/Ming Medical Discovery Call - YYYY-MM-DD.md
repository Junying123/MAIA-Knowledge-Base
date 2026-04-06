---
owner: Gareth
status: draft
last_reviewed: 2026-04-06
meeting_date: YYYY-MM-DD
client: Ming Medical
meeting_type: discovery
---

# Discovery Meeting Notes - Ming Medical - [Date]

**Date:** YYYY-MM-DD  
**Time:** HH:MM – HH:MM  
**Location / Platform:** [Zoom / Google Meet / In-person]  
**Attendees:**
- Brendan Ou Yong - MAIA PM
- Sean - Ming Medical (primary workflow owner)
- Mindy - Ming Medical (finance and scope control)
- [Other attendees] - TBC

**Reference:** [[03 - Clients/We're cooked discovery/Requirement Gathering/Ming Medical/Discovery Call Questionnaire]]

---

> **Update context (post requirement gathering):**  
> This note has been updated after requirement gathering using:
> - [[Ming Medical Meeting Transcript - YYYY-MM-DD]]
> - [[Ming Medical - GTM Brief Transcript]]
> - [[Ming Medical - GTM Proposal]]
>
> Items marked `⚠️` remain open and need formal confirmation.

---

## 1. Stakeholders & Decisions

**Goal:** Confirm who decides template, pricing entry, and scope control.

- Sean remains the core clinical workflow owner and current "proposal engine" for complex cases.
- Mindy is the commercial gatekeeper; scope and finance changes must be reviewed before commitment.
- MAIA team confirmed no on-the-spot commitment for new requests raised during discussions; log first, evaluate internally, then respond.
- Price entry remains human-controlled by Ming Medical / doctors (no auto-pricing in baseline).

⚠️ Follow-ups:
- Confirm final approver chain for proposal drafts (Sean only vs Sean + doctor vs Sean + Mindy).
- Confirm named users and access roles for doctor workspace.

---

## 2. As-Is Workflow (Enquiry → Proposal → Order)

**Goal:** Map real steps, tools, and timings.

- Enquiries arrive mostly through WhatsApp (also email/other direct contact), from direct patients and partner doctors.
- Inputs are mixed format: PDF, image/photo, long text; occasional voice recordings are received but not preferred for accuracy.
- Sean manually reads reports, maps to CPG, writes patient-friendly proposal text, and prepares treatment recommendation structure.
- Drafting effort is significant (roughly hours per proposal in many cases), creating a founder bottleneck.
- In partner-doctor track, doctor closes with patient first, then informs Ming Medical to create order.
- Phase-1 boundary remains up to proposal/quotation flow and order creation handoff, not deep post-order fulfillment.

⚠️ Follow-ups:
- Confirm exact acceptance trigger to convert approved proposal into Sales Order.
- Confirm whether quotation send is manual or event-triggered after approval.

---

## 3. CPG & Knowledge Boundaries

**Goal:** Structure, updates, approved websites, guardrails.

- CPG is confirmed as the primary knowledge source for recommendation mapping (condition -> plan -> dosage -> duration -> side effects).
- Current CPG is not yet final machine-ready structure; additional variables (for example age, duration, preconditions) are expected in upcoming version.
- Knowledge guardrail requirement is explicit: answers must stay within CPG and Ming Medical-approved medical sources.
- Unapproved external sources must not be used for medical recommendations.

⚠️ Follow-ups:
- Receive and validate latest machine-ready CPG file.
- Receive approved websites list and ownership process for updates.

---

## 4. Outputs: Proposal, Quote (e.g. WhatsApp), OMS

**Goal:** Template sections, languages, RTL, invoice linkage.

- Output intent is a simple, clear proposal format suitable for patient understanding, while preserving clinically useful recommendations for doctors.
- Baseline language requirement: English, Mandarin, Arabic.
- Draft -> review -> approve workflow is required, with visibility of changes/audit trail.
- Pricing remains manual by Ming Medical/doctors.
- Voice/text-to-speech was requested by client as an enhancement for usability and launch adoption, but is not baseline-committed in current scope.

⚠️ Follow-ups:
- Confirm final proposal template variants (doctor-facing vs patient-facing).
- Confirm exact WhatsApp quotation behavior and OMS field linkage requirements.
- Confirm timeline/commercial approach if voice or text-to-speech is added.

---

## 5. Security, Hosting & UAT

**Goal:** Infrastructure, identity, sample packs for UAT.

- GTM baseline indicates deployment/hosting in Ming Medical infrastructure context.
- UAT readiness depends on client-provided artifacts, especially real anonymized report samples and expected output pairs.
- Scope discipline is important due to evolving asks during workshops; all additions should be logged as controlled changes.

⚠️ Follow-ups:
- Confirm data retention/privacy handling for report files and proposal history.
- Confirm access model for partner doctors in UAT and live usage.
- Confirm sample pack completeness before committing demo/UAT dates.

---

## Action Items

| # | Action | Owner | Due |
|---|--------|-------|-----|
| 1 | Share latest CPG master file (machine-target version) | Ming Medical | TBC |
| 2 | Share blank proposal template (latest version) | Ming Medical | TBC |
| 3 | Share approved external medical websites list | Ming Medical | TBC |
| 4 | Share 3-5 anonymized medical reports + matched expected proposal outputs | Ming Medical | TBC |
| 5 | Confirm proposal approval chain and user roles | Ming Medical + MAIA | TBC |
| 6 | Confirm quotation-to-order trigger logic in OMS | MAIA + Ming Medical | TBC |
| 7 | Log voice/text-to-speech as scoped enhancement with separate commercial/timeline discussion | MAIA + Ming Medical | TBC |

---

## See Also

- [[03 - Clients/We're cooked discovery/Requirement Gathering/Ming Medical/Discovery Call Questionnaire]]
- [[Ming Medical - GTM Proposal]]
- [[Ming Medical - GTM Brief Transcript]]
- [[Ming Medical Meeting Transcript - YYYY-MM-DD]]
- [[Requirement Gathering Output - Ming Medical - 2026-04]]
