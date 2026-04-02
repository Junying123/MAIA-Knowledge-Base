---
owner: Gareth
status: draft
last_reviewed: 2026-04-02
client: Ming Medical
document_type: workflow
---

# Ming Medical — End-to-End Business Workflow

**Purpose:** Map Ming Medical's business workflow from customer first contact through to Sales Order creation — both current (As-Is) and future state with MAIA (To-Be). Post-SO fulfillment is out of scope.  
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

Two parallel tracks depending on whether the customer is a direct patient or a partner doctor. Both converge at the proposal generation step.

> **Source note:** Tracks below are based on the GTM Brief Transcript (2026-03-30) and GTM Proposal. Items marked `[UNCONFIRMED]` are inferred — to be verified at requirement gathering.

### Track A: Direct Patient

**Source:** *"People typically acquire the boss and they tell them that oh I just did my medical analysis here's my medical report I face this these issues can you help me solve. So what upon receiving this request what the boss needs to do is go home and then they has this file called CPG file..."*

```
[CUSTOMER — UHNW patient, international]
Contacts Sean directly [UNCONFIRMED: channel not stated in source]
Provides medical report + description of condition
(Format: PDF, image/photo of scan, or long text message — confirmed in transcript)
           ↓
[MING MEDICAL — Sean]
Receives the report
Manually opens CPG file → looks up: condition → treatment → dosage → duration → side effects
Manually fills Word/PDF proposal template (including price)
           ↓
[MING MEDICAL]
Internal review [UNCONFIRMED: review process not described in source]
           ↓
Sends proposal to patient [UNCONFIRMED: delivery channel not stated]
           ↓
[CUSTOMER]
Patient accepts [UNCONFIRMED: how acceptance is confirmed not stated]
           ↓
[MING MEDICAL]
Order created [UNCONFIRMED: how/by whom not stated]
```

> **Scope boundary:** This workflow ends at Sales Order creation. Post-SO fulfillment (stem cell sourcing, treatment scheduling, logistics) is out of scope for this document.

### Track B: Partner Doctor

**Source:** *"They also partner with doctors from overseas country like Oman Dubai Nigeria. So those partner doctors are also helping him sort of sell the stem cells up because they're using his stem cell to treat their own patients... after proposal done already they sent to the customers or whatever once the customers want it let's say their doctors are sent to their own customer the patient they want it then they let Ming Medical know okay this customer own already I need to create order."*

```
[PARTNER DOCTOR — overseas, e.g. Oman / Dubai / Nigeria]
Submits their patient's medical report to Sean / Ming Medical
(Same report formats: PDF, image, long text)
           ↓
[MING MEDICAL — Sean]
Same manual CPG lookup + proposal drafting as Track A
           ↓
[PARTNER DOCTOR]
Receives the proposal from Ming Medical
Takes it to their own patient
           ↓
[PATIENT — of the partner doctor]
Patient accepts with the partner doctor
           ↓
[PARTNER DOCTOR]
Notifies Ming Medical: "this customer confirmed, I need to create an order"
           ↓
[MING MEDICAL]
Creates order based on the confirmed proposal
← Workflow ends here
```

> **Key distinction (source-confirmed):** In Track B, Ming Medical never directly interacts with the end patient. The partner doctor is the one who presents the proposal to their patient and closes the sale. Ming Medical only hears back once the patient has already said yes.

### As-Is Step-by-Step (Combined)

| # | Step | Actor | Source Status | Pain Point |
|---|------|-------|--------------|------------|
| 1 | Customer / partner doctor makes contact with Sean | Patient or Partner Doctor | ✅ Confirmed | — |
| 2 | Medical report handed to Sean | Patient or Partner Doctor | ✅ Confirmed (PDF / image / long text) | Variable format; no standard |
| 3 | Sean reads and interprets report | Sean | ✅ Confirmed | Sean is the only person who does this — key bottleneck |
| 4 | Sean manually looks up CPG | Sean | ✅ Confirmed | Time-consuming; cannot be delegated easily |
| 5 | Sean drafts proposal manually | Sean | ✅ Confirmed (Word/PDF template) | Repetitive; price inserted by Sean |
| 6 | Internal review before sending | Sean / Mindy | ⚠️ Unconfirmed | Review process not described in source |
| 7 | Proposal sent to customer or partner doctor | Sean | ✅ Confirmed | Delivery channel not stated |
| 8 | Partner doctor presents proposal to their patient (Track B only) | Partner Doctor | ✅ Confirmed | Ming Medical has no visibility into this step |
| 9 | Customer / patient accepts | Patient (via doctor in Track B) | ✅ Confirmed | How acceptance is formally recorded — unconfirmed |
| 10 | Partner doctor notifies Ming Medical of acceptance (Track B) | Partner Doctor | ✅ Confirmed | — |
| 11 | Order created | Ming Medical | ✅ Confirmed (implied) | How/by whom — unconfirmed |

> **Scope boundary:** Workflow ends at Sales Order creation. Post-SO fulfillment is out of scope for this document.

**Key bottleneck (source-confirmed):** Steps 3–5 all depend on Sean. The proposal says *"the proposal step depends heavily on Ming Medical's time"* and *"it's also repetitive and time-consuming."*

---

## To-Be Workflow (With MAIA — Phase 1)

Same two customer tracks. MAIA absorbs the CPG matching and proposal drafting steps. The key difference by track is **who uploads the report** and **who receives the final output**.

> **Source note:** To-Be flow is based on the GTM Proposal and transcript description of MAIA's intended role. Items marked `[UNCONFIRMED]` are inferred — to be verified at requirement gathering.

### Track A: Direct Patient (With MAIA)

**Source:** *"Receiving medical reports from... the boss... the doctors and the boss will submit a medical report be it in the form of PDF image or like potentially even the longest text message... the chatbot's job is to understand all of these medical reports and then go to the CPG file there to map..."*

```
[CUSTOMER — UHNW patient]
Contacts Sean / Ming Medical [UNCONFIRMED: channel]
Provides medical report (PDF / image / long text)
           ↓
[MING MEDICAL — Sean]
Uploads the report into the MAIA chatbot
(Source: "the boss will submit a medical report" — Sean uploads, not the patient directly)
           ↓
[MAIA]
Reads and parses the report
Queries CPG knowledge base → maps condition to treatment plan, dosage, duration, side effects
Drafts full proposal in Ming Medical's template format
Price column left blank
           ↓
[MING MEDICAL / Doctor]
Reviews MAIA draft in workspace
Inserts price → approves
           ↓
[MING MEDICAL]
Sends approved proposal / quotation to patient [UNCONFIRMED: channel; WhatsApp mentioned in proposal]
           ↓
[CUSTOMER]
Patient accepts [UNCONFIRMED: how]
           ↓
[MING MEDICAL]
Sales Order created in MAIA OMS
← Workflow ends here
```

### Track B: Partner Doctor (With MAIA)

**Source:** *"Receiving medical reports from doctors... the doctors... will submit a medical report... after proposal done already they sent to the customers or whatever once the customers want it let's say their doctors are sent to their own customer the patient they want it then they let Ming Medical know okay this customer own already I need to create order."*

```
[PARTNER DOCTOR]
Submits patient's medical report to MAIA
(Source: "doctors will submit a medical report" — doctor uploads directly)
           ↓
[MAIA]
Same report parsing + CPG matching + proposal drafting as Track A
Price column left blank
           ↓
[MING MEDICAL / Doctor]
Reviews MAIA draft in workspace → inserts price → approves
           ↓
[PARTNER DOCTOR]
Receives approved proposal from Ming Medical
Takes it to their own patient
(Source: "their doctors are sent to their own customer the patient")
           ↓
[PATIENT — of the partner doctor]
Patient accepts with the doctor
           ↓
[PARTNER DOCTOR]
Notifies Ming Medical: patient confirmed, create order
(Source: "they let Ming Medical know okay this customer own already I need to create order")
           ↓
[MAIA OMS]
Sales Order created from confirmed proposal
← Workflow ends here
```

### To-Be Step-by-Step (Combined)

| # | Step | Actor | Source Status | MAIA Role |
|---|------|-------|--------------|-----------|
| 1 | Customer / doctor makes contact | Patient or Partner Doctor | ✅ Confirmed | — |
| 2 | Medical report uploaded to MAIA | **Sean (Track A)** / **Partner Doctor (Track B)** | ✅ Confirmed — *not* the patient directly | Accepts PDF, image, or long text |
| 3 | Report analysis | MAIA | ✅ Confirmed (proposal) | Extracts condition signals |
| 4 | CPG matching | MAIA | ✅ Confirmed | Maps to treatment plan, dosage, duration, side effects |
| 5 | Proposal drafted | MAIA | ✅ Confirmed | Fills template; price left blank |
| 6 | Review, pricing & approval | Ming Medical / Doctor | ✅ Confirmed | Human step — workspace provided by MAIA |
| 7 | Proposal delivered to customer or partner doctor | Ming Medical | ✅ Confirmed | WhatsApp quotation — confirmed in proposal |
| 8 | Partner doctor presents to their patient (Track B) | Partner Doctor | ✅ Confirmed | MAIA not involved |
| 9 | Patient acceptance | Patient (via doctor in Track B) | ✅ Confirmed | — |
| 10 | Partner doctor notifies Ming Medical (Track B) | Partner Doctor | ✅ Confirmed | — |
| 11 | Sales Order created | Ming Medical + MAIA OMS | ✅ Confirmed (implied) | OMS generates SO from proposal |

> **Scope boundary:** Workflow ends at Sales Order creation. Post-SO fulfillment is out of scope for this document.

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
| **MAIA OMS** | Creates Sales Orders post-acceptance |

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

> **Note:** Post-SO activities (fulfillment, logistics, shipping) are outside the scope of this workflow and Phase 1 documentation.

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
| Post-SO fulfillment tracking | — | Out of scope / TBD |
| Patient-facing portal | — | TBD |
| AP / AR / Finance modules | — | TBD |
| Advanced reporting / analytics | — | TBD |

---

## Open Questions (To Confirm at Requirement Gathering)

- [ ] Does the partner doctor have a separate login/workspace, or do they go through Ming Medical?
- [ ] What triggers the WhatsApp quotation — automatic after approval, or manual send?
- [ ] Does the patient-facing quotation look the same as the internal proposal, or is it a stripped-down version?
- [ ] After customer acceptance, who creates the SO — Ming Medical or does it auto-generate?

---

## See Also

- [[Ming Medical - GTM Proposal]]
- [[Ming Medical - GTM Brief Transcript]]
- [[03 - Clients/We're cooked man discovery/Requirement Gathering/Ming Medical/Gathering Requirement Prep - Ming Medical]]
- [[03 - Clients/We're cooked man discovery/Requirement Gathering/Ming Medical/Discovery Call Questionnaire]]
