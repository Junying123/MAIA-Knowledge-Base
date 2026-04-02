---
owner: Gareth
status: draft
last_reviewed: 2026-04-02
client: Ming Medical
document_type: requirement_gathering_prep
---

# Gathering Requirement Prep — Ming Medical

**Purpose:** Preparation notes before the requirements gathering session with Ming Medical.  
**Read before session:** [[Ming Medical - GTM Proposal]] · [[Ming Medical - GTM Brief Transcript]]

---

## Stakeholders

| Name | Role | Notes |
|------|------|-------|
| Sean | Owner / MD | 70 years old, ex-IBM MD, relaxed and knowledgeable — main decision maker |
| Mindy | Owner's wife / Finance controller | Controls finances. More demanding — **do not make promises on the spot**. Log everything, say "let me check with the team first" |

> **Warning:** If Mindy raises new requirements during the session, do not commit. Acknowledge, record it, and loop back. This avoids scope creep and keeps delivery clean.

---

## What to Confirm in the Session

### 1. CPG File
- [ ] Request the latest CPG file from Sean/Mindy
- [ ] Confirm the format (PDF? Word? Excel? Google Sheet?)
- [ ] Understand the CPG structure: does it have columns for condition, treatment, dosage, duration, side effects?
- [ ] Ask if there are fields they want to add or improve (e.g. new columns, updated conditions)
- [ ] Confirm: **is the CPG the single source of truth, or are there supplementary internal docs?**

### 2. Approved External Knowledge Sources
- [ ] What are the approved websites MAIA is allowed to reference (besides the CPG)?
- [ ] Who controls the list of approved sources — Sean, Mindy, or a doctor?
- [ ] How do they want to update the approved source list in future?

### 3. Proposal Template
- [ ] Request the current proposal template (Word / PDF / Google Docs)
- [ ] Walk through each section of the template:
  - What is auto-filled by MAIA (from CPG)?
  - What is manually filled by the doctor/Ming Medical?
  - **Price column: confirmed as manual input only — do not auto-populate**
- [ ] Confirm output format: PDF download? WhatsApp send? Both?
- [ ] Confirm tone/language: formal medical language or plain language?

### 4. Medical Report Inputs
- [ ] What formats do medical reports come in? (PDF, image, text message, WhatsApp message?)
- [ ] Who uploads the report — Ming Medical directly, or partner doctors?
- [ ] Are reports always in English or do they come in other languages?
- [ ] Request 2–3 **anonymised sample medical reports** for UAT testing

### 5. Doctor Workspace & Workflow
- [ ] Who are the internal users? (Sean, Mindy, and how many partner doctors?)
- [ ] Do partner doctors need their own logins, or do they go through Ming Medical?
- [ ] What is the approval flow? Draft → Review → Approve — who approves?
- [ ] Does the final approved proposal go directly to the patient, or back through the partner doctor?

### 6. Order Management System (OMS)
- [ ] Confirm: after a proposal is accepted, how does a sales order get created?
- [ ] Who creates the order — Ming Medical or the partner doctor?
- [ ] Roughly how many orders per month? (Estimated < 100/month from transcript)
- [ ] Any specific OMS fields or workflow steps they need beyond the base MAIA OMS?

### 7. Multi-language
- [ ] Confirm the three languages needed: English, Mandarin, Arabic
- [ ] Do they need the full chatbot UI in all three, or just the proposal output?
- [ ] Is there a preferred language per doctor/region? (e.g. Arabic for UAE/Oman partners)

---

## Artifacts to Collect

| Artifact | Format | From | Status |
|----------|--------|------|--------|
| CPG file (latest version) | PDF / Word / Excel | Sean | ☐ To collect |
| Proposal template | Word / PDF | Sean / Mindy | ☐ To collect |
| Approved external websites list | Any | Sean / Mindy | ☐ To collect |
| Anonymised sample medical reports (2–3) | PDF / Image / Text | Sean / Mindy | ☐ To collect |

---

## Key Risks & Watch Points

| Risk | Mitigation |
|------|-----------|
| Mindy adds out-of-scope requirements | Log it, say "I'll check with the team", do NOT commit on the spot |
| CPG file is outdated or incomplete | Ask for latest version + confirm if it needs restructuring before ingestion |
| Proposal template changes post-kickoff | Freeze template format before dev starts; changes = change request |
| Partner doctor access complexity | Clarify early — multiple logins and roles add scope |
| Guardrails — MAIA must not pull from unapproved sites | Confirm approved source list before build; put this in writing |

---

## Session Agenda (Suggested)

1. Introductions + session purpose (5 min)
2. Walk through CPG file together (15 min)
3. Walk through proposal template together (15 min)
4. Clarify doctor workspace + approval workflow (10 min)
5. OMS basics (10 min)
6. Multi-language scope (5 min)
7. Collect/confirm artifacts (5 min)
8. Wrap up + next steps (5 min)

---

## After the Session

- [ ] Move collected artifacts to the Ming Medical folder
- [ ] Complete [[Prep After Requirement Gathering]]
- [ ] Log any out-of-scope requests in [[09 - Intake & Triage/Request Intake Inbox]]
- [ ] Update proposal if scope changes (loop in Jeremy first)

---

## See Also

- [[Ming Medical - GTM Proposal]]
- [[Ming Medical - GTM Brief Transcript]]
- [[03 - Clients/We're cooked man discovery/Requirement Gathering/Ming Medical/Discovery Call Questionnaire]]
- [[03 - Clients/We're cooked man discovery/Requirement Gathering/Ming Medical/Prep After Requirement Gathering]]
