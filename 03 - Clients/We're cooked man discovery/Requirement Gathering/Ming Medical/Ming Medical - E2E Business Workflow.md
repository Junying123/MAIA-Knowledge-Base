---
owner: Gareth
status: draft
last_reviewed: 2026-04-02
client: Ming Medical
document_type: workflow
---

# Ming Medical — End-to-End Business Workflow

**Purpose:** Map Ming Medical's full business workflow, from enquiry to order fulfillment — both current (As-Is) and future state with MAIA (To-Be).  
**Use this for:** Requirements gathering prep, UAT scoping, dev handover, stakeholder alignment.

---

## Business Overview

Ming Medical is a regenerative medicine clinic treating complex/incurable conditions (cancer, scoliosis, Alzheimer's, etc.) using stem cells. Clientele are ultra-high-net-worth individuals — royalty and wealthy patients from UAE, UK, Australia, and beyond. Contract values are typically RM 100,000+ (USD).

**Two channels of business:**
1. **Direct enquiries** — patients contact Ming Medical directly
2. **Partner doctors** — overseas doctors (Oman, Dubai, Nigeria, etc.) refer patients and place orders on behalf of patients

---

## Customer Profile

### Who Are Ming Medical's Customers?

Ming Medical has two distinct customer types that interact with them differently.

#### Type 1: Direct Patients (End Consumer)

| Attribute | Details |
|-----------|---------|
| Profile | Ultra-high-net-worth individuals |
| Examples | Royalty and wealthy individuals from UAE, Dubai, UK, London, Australia, and local Malaysia |
| Condition | Serious / complex illnesses not treatable by conventional medicine — cancer, scoliosis, spinal injuries, Alzheimer's, and similar |
| Contract value | RM 100,000+ (USD equivalent) per engagement |
| Language | English, Mandarin, Arabic (varies by region) |
| How they find Ming Medical | Personal referrals, word of mouth, partner doctor recommendation |

#### Type 2: Partner Doctors (B2B Channel)

| Attribute | Details |
|-----------|---------|
| Profile | Doctors from overseas countries who use Ming Medical's stem cells to treat their own patients |
| Examples | Doctors from Oman, Dubai, Nigeria |
| Role | Act as intermediary — they assess the patient, source the stem cell treatment from Ming Medical, and administer it themselves |
| Relationship | Ongoing commercial partners; place orders on behalf of their patients |
| Language | English, Arabic primarily |

> **Key distinction:** Partner doctors are both a customer and a distribution channel. They submit medical reports and place orders like a direct patient, but they have clinical authority and are doing so on behalf of a third-party patient.

---

## How Customers Approach Ming Medical

### Input Channels (Entry Points)

| Channel | Used By | What They Send |
|---------|---------|---------------|
| **WhatsApp** | Direct patients, partner doctors | Enquiry messages, medical reports (image, PDF, or long text), questions |
| **Email** | Direct patients, partner doctors | Formal enquiries, attached medical reports (PDF) |
| **Phone / Personal contact** | Direct patients, VIP / royal clients | Verbal enquiries; Sean follows up to collect medical report |

> **Primary channel today is WhatsApp.** Most communication — including medical report submission — happens over WhatsApp. Some reports come as a photo of a scan, others as a PDF attachment, others as a long text description typed directly in the chat.

### What Customers Provide at First Contact

| Input | Format | Notes |
|-------|--------|-------|
| Medical report | PDF, image (photo of scan/document), or text message | Core input — required to generate a proposal |
| Description of condition | Free text (WhatsApp or email) | Sometimes the only input; MAIA must parse unstructured text |
| Patient background | Verbal / written context | Age, history, previous treatments — may or may not be in the report |
| Language preference | Implied by message language | EN / 中文 / العربية |

---

## As-Is Workflow (Without MAIA)

Two parallel tracks depending on whether the customer is a direct patient or a partner doctor. Both converge at the proposal step.

### Track A: Direct Patient

```
[CUSTOMER]
Patient (UHNW, international) hears about Ming Medical via referral / word of mouth
           ↓
Contacts Sean directly via WhatsApp or email
Sends: medical report (PDF / photo of scan / long text message) + description of condition
           ↓
[MING MEDICAL — Sean]
Reads the medical report manually
Opens CPG file → manually looks up: condition → treatment → dosage → duration → side effects
Manually fills Word/PDF proposal template (all fields including price)
           ↓
Internal review (Sean / Mindy, ad-hoc — no formal version control)
           ↓
Sends proposal to patient via WhatsApp or email
           ↓
[CUSTOMER]
Patient reviews, may ask follow-up questions (back via WhatsApp)
Patient accepts
           ↓
[MING MEDICAL — Mindy]
Payment terms agreed manually (no system)
           ↓
[MING MEDICAL]
Order created manually
Stem cells sourced, treatment scheduled
```

### Track B: Partner Doctor

```
[PARTNER DOCTOR]
Doctor (Oman / Dubai / Nigeria) contacts Sean via WhatsApp or email
Submits their patient's medical report on the patient's behalf
           ↓
[MING MEDICAL — Sean]
Same manual CPG lookup and proposal drafting process as Track A
           ↓
Sends proposal back to the partner doctor (not directly to patient)
           ↓
[PARTNER DOCTOR]
Reviews proposal, confirms treatment plan and pricing with Ming Medical
Places order for the stem cells (to administer to their own patient)
           ↓
[MING MEDICAL]
Fulfillment — stem cells sourced, packed, and shipped to doctor's location
```

### As-Is Step-by-Step (Combined)

| # | Step | Actor | Channel / Tool | Pain Point |
|---|------|-------|---------------|------------|
| 1 | Customer makes first contact | Patient / Partner Doctor | WhatsApp, email, phone | No standard intake process |
| 2 | Medical report submitted | Patient / Partner Doctor | WhatsApp (PDF, image, or long text), email attachment | Variable format; no standard — MAIA must handle all formats |
| 3 | Report read and interpreted | Sean | Manual reading | Sean is the only person capable; creates bottleneck |
| 4 | CPG lookup | Sean | Opens CPG file manually | Time-consuming; error-prone if volume grows |
| 5 | Proposal drafted | Sean | Word / PDF template, filled manually | Repetitive; inconsistent quality across cases |
| 6 | Internal review | Sean / Mindy | Ad-hoc | No version history; no formal sign-off |
| 7 | Proposal sent to customer | Sean / Mindy | WhatsApp or email | Delayed when Sean is unavailable |
| 8 | Customer Q&A | Patient / Partner Doctor ↔ Sean | WhatsApp | Sean must personally answer all clinical questions |
| 9 | Customer accepts | Patient / Partner Doctor | WhatsApp confirmation | No formal record or audit trail |
| 10 | Payment agreed | Mindy | Manual (WhatsApp / verbal) | No system; fully manual |
| 11 | Order created | Ming Medical | Manual | No OMS; tracked informally |
| 12 | Fulfillment | Ming Medical | Manual | — |

**Key bottleneck:** Steps 3–7 all depend on Sean. No one else can reliably do the CPG lookup or draft the proposal. Volume cannot grow without him being blocked.

---

## To-Be Workflow (With MAIA — Phase 1)

Same two customer tracks — but MAIA absorbs the CPG matching, proposal drafting, and Q&A steps, freeing Sean to only review and approve.

### Track A: Direct Patient (With MAIA)

```
[CUSTOMER]
Patient contacts Ming Medical via WhatsApp or email
Sends: medical report (PDF / image / text) + condition description
           ↓
[MING MEDICAL]
Uploads the report into the MAIA chatbot (drag-and-drop / paste)
           ↓
[MAIA]
Reads and parses the report — extracts condition signals, symptoms, history
Queries the CPG knowledge base → maps condition to treatment plan, dosage, duration, side effects
Drafts the full proposal in Ming Medical's template format
Price column left blank
           ↓
[MING MEDICAL / Doctor]
Reviews MAIA draft in the doctor workspace
Edits if needed → inserts price → approves
           ↓
[MAIA + Ming Medical]
WhatsApp quotation generated from the approved proposal → sent to patient
           ↓
[CUSTOMER]
Patient reviews, may ask follow-up questions (answered by MAIA within CPG guardrails)
Patient accepts
           ↓
[MING MEDICAL]
Sales Order created in MAIA OMS from the approved proposal
           ↓
Fulfillment tracked in OMS (stem cells sourced, treatment scheduled)
```

### Track B: Partner Doctor (With MAIA)

```
[PARTNER DOCTOR]
Contacts Ming Medical via WhatsApp or email
Submits patient's medical report
           ↓
[MING MEDICAL / Partner Doctor — if given access]
Uploads report into MAIA chatbot
           ↓
[MAIA]
Same report parsing + CPG matching + proposal drafting as Track A
           ↓
[MING MEDICAL / Doctor]
Reviews, prices, approves in workspace
           ↓
Proposal shared with partner doctor for confirmation
           ↓
[PARTNER DOCTOR]
Confirms treatment plan → places order
           ↓
[MAIA OMS]
Sales Order created
           ↓
[MING MEDICAL]
Fulfillment — stem cells sourced and shipped to doctor's location
```

### To-Be Step-by-Step (Combined)

| # | Step | Actor | MAIA Role | Output |
|---|------|-------|-----------|--------|
| 1 | Customer makes first contact | Patient / Partner Doctor | — | Enquiry received via WhatsApp / email |
| 2 | Medical report submitted | Patient / Partner Doctor → Ming Medical | Accepts PDF, image, or unstructured text | Report ingested into MAIA |
| 3 | Report analysis | MAIA | Reads report, extracts condition signals and patient history | Structured medical summary |
| 4 | CPG matching | MAIA | Queries CPG → maps condition to treatment plan, dosage, duration, side effects | Condition-to-treatment mapping |
| 5 | Proposal drafted | MAIA | Fills Ming Medical's template with CPG output. **Price left blank.** | Draft proposal ready for review |
| 6 | Review, pricing & approval | Ming Medical / Doctor | Human review in doctor workspace; price inserted; final approval | Approved, priced proposal |
| 7 | Quotation delivered | MAIA + Ming Medical | WhatsApp quotation generated post-approval | Customer-facing quote sent |
| 8 | Customer Q&A | Patient / Partner Doctor ↔ MAIA | Answers clinical questions from CPG + approved sites only | Consistent, guardrailed answers |
| 9 | Customer acceptance | Patient / Partner Doctor | Acceptance logged in system | — |
| 10 | Sales Order created | Ming Medical + MAIA OMS | SO generated from approved proposal | Sales Order record |
| 11 | Fulfillment | Ming Medical | OMS tracks order status | Order fulfilled |

---

## Side Workflow: Doctor Q&A Mode

Doctors and Ming Medical staff can ask the MAIA chatbot clinical questions without submitting a full medical report.

| # | Step | Example |
|---|------|---------|
| 1 | Doctor asks a clinical question | "What is the recommended treatment plan for scoliosis?" |
| 2 | MAIA searches CPG + approved sites only | Retrieves relevant CPG entry |
| 3 | MAIA responds with answer + source citation | Cites CPG section; does not hallucinate or reference unapproved sites |
| 4 | Doctor uses answer to inform their own assessment | Human judgment remains final |

> **Guardrail:** MAIA can only answer from (1) the CPG knowledge base and (2) websites explicitly approved by Ming Medical. No other external sources. Any out-of-scope question must return "I can only answer based on Ming Medical's approved knowledge base."

---

## Actor Summary (Who Does What)

| Actor | Role in Workflow |
|-------|-----------------|
| **Patient** | Sends enquiry + medical report; receives proposal/quotation |
| **Partner Doctor** | Submits patient reports, reviews proposals, places orders on behalf of patients |
| **Ming Medical (Sean)** | Reviews MAIA-generated drafts; clinical oversight; approves proposals |
| **Ming Medical (Mindy)** | Finance oversight; signs off on commercials; controls payment |
| **MAIA Chatbot** | Reads reports, matches CPG, drafts proposals, answers Q&A |
| **MAIA OMS** | Creates and tracks sales orders post-acceptance |

---

## Key Data Objects

| Object | Description | Source |
|--------|-------------|--------|
| Medical Report | Patient health record submitted by patient or partner doctor | External (patient/doctor) |
| CPG | Clinical Practice Guideline — Ming Medical's treatment reference | Ming Medical (internal) |
| Proposal | 2-page treatment proposal with condition, plan, dosage, duration, side effects, price | Generated by MAIA + reviewed by Ming Medical |
| Quotation | Customer-facing version of the approved proposal | Sent via WhatsApp |
| Sales Order | Order record created after customer acceptance | Created in MAIA OMS |

---

## What MAIA Does vs What Humans Do

| Task | MAIA | Human |
|------|------|-------|
| Read and parse medical report | ✅ | — |
| Match condition to CPG | ✅ | — |
| Fill proposal template fields | ✅ | — |
| Insert price into proposal | — | ✅ Ming Medical / Doctor |
| Approve final proposal | — | ✅ Ming Medical / Doctor |
| Clinical judgment and final diagnosis | — | ✅ Always human |
| Send quotation via WhatsApp | ✅ (triggered after approval) | — |
| Create Sales Order | ✅ (from approved proposal) | ✅ Initiated by Ming Medical |
| Answer doctor Q&A (CPG-bound) | ✅ | — |
| Update or edit CPG content | — | ✅ Ming Medical |

---

## Phase Scope Summary

| Capability | Phase 1 | Phase 2+ |
|-----------|---------|----------|
| Doctor-facing chatbot (internal) | ✅ | — |
| Medical report upload (PDF/image/text) | ✅ | — |
| CPG knowledge ingestion | ✅ | — |
| Proposal draft generation | ✅ | — |
| Multi-language (EN / 中文 / العربية) | ✅ | — |
| Review / approval workflow + audit trail | ✅ | — |
| WhatsApp quotation delivery | ✅ | — |
| Base MAIA OMS (sales orders) | ✅ | — |
| Patient-facing portal | — | TBD |
| AP / AR / Finance modules | — | TBD |
| Advanced reporting / analytics | — | TBD |

---

## Open Questions (To Confirm at Requirement Gathering)

- [ ] Does the partner doctor have a separate login/workspace, or do they go through Ming Medical?
- [ ] What triggers the WhatsApp quotation — automatic after approval, or manual send?
- [ ] Does the patient-facing quotation look the same as the internal proposal, or is it a stripped-down version?
- [ ] After customer acceptance, who creates the SO — Ming Medical or does it auto-generate?
- [ ] Any fulfilment tracking needs (inventory, cold chain, shipping) in Phase 1?

---

## See Also

- [[Ming Medical - GTM Proposal]]
- [[Ming Medical - GTM Brief Transcript]]
- [[03 - Clients/We're cooked man discovery/Requirement Gathering/Ming Medical/Gathering Requirement Prep - Ming Medical]]
- [[03 - Clients/We're cooked man discovery/Requirement Gathering/Ming Medical/Discovery Call Questionnaire]]
