---
owner: Gareth
status: draft
last_reviewed: 2026-04-07
lark_url:
---

# MAIA for Ming Medical

### From One Person's Knowledge to a Scalable Proposal Engine

_Prepared by Mindhive for Ming Medical SDN BHD_

---

## Who Ming Medical Is

Founded in 1999, Ming Medical SDN BHD is a Selangor-based regenerative medicine company specialising in cell-based therapies — Wharton's Jelly Mesenchymal Stem Cells (WJ-MSC), Natural Killer (NK) cells, exosomes, and telomere exosomes. Recognised as a BioNexus company by the Malaysia Bioeconomy Development Corporation, Ming Medical positions itself as the last resort for patients where conventional medicine has run out of answers. Their tagline is not marketing copy — it is an operating philosophy: _"Giving HOPE where there is none."_

Ming Medical operates across three interconnected arms. The first is **R&D and Production**: unlike competitors who purchase exosomes in small cosmetic doses (50 billion units), Ming Medical manufactures its own cells in-house at clinical-grade volumes — up to 200 billion exosome units per batch. This production depth is the core differentiator that makes their treatment protocols possible. The second arm is **Clinical Proposal Operations**: when a case arrives, the team reads the medical report and blood test results, maps them to the company's Clinical Practice Guidelines (CPG), and produces a treatment proposal — a multi-section document covering the patient's conditions, the proposed cell therapies and delivery methods, and a month-by-month treatment schedule (typically Month 0, Month 3, Month 6, each a 3-day stay in Malaysia). Cases span two service categories: **clinical treatment** (spinal cord injury, cancer, autoimmune disease, organ failure) and **wellness** (anti-aging, longevity, aesthetic, prophylactic NK cell programmes) — which the CPG treats as a distinct service line. This is where the bottleneck lives. The third arm is the **Partner Doctor Channel**: Ming Medical supplies its cells to partner doctors at a fixed wholesale price — the product (cells) is what is sold, not the treatment outcome. Partner doctors buy the cells, apply their own markup, and charge their own patients. Ming Medical does not know or control what partners charge patients. Sean described this plainly: *"They buy from us at a fixed price. They do a level markup and they sell. I don't need to know what they sell."* For direct patients — those who engage Ming Medical without a partner doctor intermediary — Ming Medical quotes directly, typically in USD for international cases, with payment via bank transfer or credit card prior to treatment.

The company is led by Sean, its founder — a former Managing Director of Informix (later acquired by IBM) who spent the 1990s in enterprise database technology before pivoting to regenerative medicine. Sean's team is lean (under 50 people), and his patient base is primarily local Malaysian (80–90% of case volume), with a growing minority of high-value international cases from the Middle East and the UK. The company exports to international markets but its core clinical operations remain centred in Petaling Jaya, Selangor.

MAIA's role at Ming Medical is specific: the proposal copilot and its associated review, pricing, and handoff workflow require custom build — particularly the CPG-to-proposal mapping engine and the multilingual report parsing capability. The downstream order creation flow, once a proposal is confirmed, connects to standard MAIA OMS modules. The entire engagement is designed around making the Clinical Proposal Operations arm — currently a one-person operation — repeatable, auditable, and scalable.

---

## Before MAIA: How Ming Medical Operates Today

Ming Medical's clinical capability is exceptional. But the operational infrastructure behind it runs almost entirely on one person's knowledge, memory, and manual effort. That is not a weakness — it is how the business was built. But as Sean put it directly: _"I cannot continue."_

### Everything Arrives on WhatsApp

Ming Medical's intake process has no formal structure. Cases arrive via WhatsApp — a patient or partner doctor sends a message, attaches a PDF, shares an image of a scan, or pastes a description of the condition. Sometimes a voice recording is included, though Sean prefers hard copy in a fixed format. A typical case includes two distinct document types: a **narrative medical report** (describing the condition, history, and prior treatment) and a **blood test report** (carrying standardised markers like creatinine, eGFR, serum albumin, and uric acid). These often arrive separately — the medical report first, the blood test days later, or vice versa. Sometimes a patient forgets an attachment entirely and sends it in a follow-up message. There is no structured intake form, no case ID, no triage logic. The case exists when Sean sees it.

This means that every case begins with a manual reading exercise. Sean opens the message, assesses what is there, identifies what is missing, and decides whether to proceed or follow up. If the report is an image, he reads it visually. If it is in Arabic, he interprets it. If it is a blood panel in a non-standard layout, he extracts the relevant markers by hand. Nothing is parsed. Nothing is organised. Everything depends on him being available, attentive, and correct.

The cost of this is invisible until it compounds. A missed follow-up, a misread report, a case held in WhatsApp while Sean handles another — none of these failures are visible to anyone else on the team. The intake is a black box.

### Two Hours Per Proposal, Starting From a Blank Page

Once the medical report is read and the case is understood, Sean drafts the proposal manually. He maps the patient's conditions to CPG logic, selects the appropriate cell therapies and delivery methods, determines dosage and duration based on age and severity, and writes the output in a format that a patient can read without medical training. A typical case takes around two hours. Complex multi-condition cases take longer.

Every proposal starts from a blank page. There is no template that auto-populates from the report. There is no system that recalls what Sean did for a similar case. There is no draft that a coordinator can start and Sean can finish. The entire cognitive load — from report reading to CPG mapping to proposal writing — sits with one person, every time.

What makes this particularly frustrating is that the format itself is not the problem. Sean already has a consistent structure — patient overview, conditions mapped to treatments, month-by-month protocol, payment terms. He described version three of a recent proposal and noted: *"the format is still the same."* The structure exists. It works. It just only exists in Sean's head, rewritten from scratch every time. MAIA's job is not to invent a new format — it is to capture the one Sean already uses and make it available to the whole operation.

As enquiry volume grows through partner-doctor channels and the international pipeline, this model cannot hold. The ceiling is Sean's availability. When he is in a meeting, cases wait. When he is travelling, cases wait. When volume doubles, the output does not — because there is only one person who knows how to produce it.

### One Patient, Two Completely Different Documents

Ming Medical's proposals must speak to two very different audiences — often for the same case. A proposal going to a patient must be written in plain language: no medical jargon, no technical abbreviations, no terms that require a clinical background to interpret. The patient needs to understand what is wrong with them, what treatment is being proposed, what the outcome timeline looks like, and what they will pay. If they cannot understand it, the proposal fails.

A proposal going to a doctor requires clinical precision: facet joint references, CPG staging, dosage variables by cell type, interaction logic between simultaneous conditions. The doctor does not want simplified language — they want the clinical rationale they need to advise their patient and complete the order.

The output itself is not a single page — it is a structured multi-section document: a patient overview table, a conditions-to-therapy mapping table, a month-by-month treatment schedule (typically three visits over six months, each a 3-day stay in Malaysia), recovery timeline notes, and payment terms (international patients pay in USD via bank transfer with SWIFT details; payment is due at least one week before treatment). Every section must be accurate, clinically grounded, and formatted consistently. Currently, Sean writes all of this himself, from scratch, calibrating language for each audience. There is no template split. There is no system flag that says "patient-facing" or "doctor-facing." It is a manual judgment call on every case, executed by one person.

### Every Doctor Sets Their Own Price — Into Nothing

Once a proposal is drafted and reviewed, the pricing step has no home. Partner doctors each operate with their own pricing structure: they buy cells from Ming Medical at a fixed wholesale price and apply their own markup before presenting to patients. Each clinic, each doctor, each geography has a different retail price for the same treatment. Ming Medical does not set, see, or track what partners charge their patients.

The problem is that the proposal has nowhere to hold this. There is no pricing column that a doctor can fill in. There is no row structure that maps the treatment items to a price field. When a proposal is sent to a partner doctor, the pricing step is a manual conversation — or it simply gets added by hand somewhere in the document before it reaches the patient. There is no audit trail. There is no standard format. There is no record of what was quoted to whom.

### The CPG Lives in Sean's Head

Ming Medical has a CPG file — a reference document that maps conditions to recommended treatments. But it is not machine-ready. The current version is a simplified guide, written for human readers. It does not carry the variable structure that an AI system needs to make inferences: age ranges, dosage tiers by severity, duration logic, precondition flags, contraindications, condition interaction rules.

The real CPG — the logic that Sean applies when he reads a case and maps it to treatment — is not in any document. It is in his head. It has been built over 26 years of cases. It includes nuances that are not written down anywhere: that cerebral palsy treatment is only viable between ages two and five (age limits the CPG); that kidney repair requires specific creatinine and eGFR readings to determine exosome dosage tier; that elderly patients require 2–4× more sessions and 2–4× longer recovery time than younger patients, regardless of condition; that some conditions — Parkinson's, ALS, Stroke, Autism — fall outside the CPG entirely because Ming Medical has no clinical experience treating them, and these cases must be handled differently. Until this logic is externalised into a structured, machine-readable CPG with the full variable set, the system cannot operate independently of Sean.

---

## After MAIA: What Changes

**A coordinator** opens the MAIA intake flow and uploads the medical report received on WhatsApp — whether it is a PDF, a scanned image, or a text-based summary. MAIA parses the document, extracts the key clinical signals, identifies the relevant conditions and patient variables, and maps them to the CPG. A proposal draft is generated in Ming Medical's approved format. The coordinator no longer needs to hold cases in a WhatsApp thread and wait for Sean to be available. The queue moves.

**Sean** opens the draft and reviews it. The clinical structure is already there — conditions identified, treatments mapped, dosage and duration logic applied. He reads for accuracy, makes adjustments where his clinical judgment overrides the system's inference, and approves. Every adjustment he makes is tracked — the system records what was changed, by whom, and when, so there is a full audit trail from generated draft to final approved proposal. He does not start from a blank page. He does not spend two hours building what the system has already built in minutes. He focuses on the judgment calls — the 20% that genuinely requires his expertise — and leaves the repetitive formatting work to the system. For straightforward cases, his stated goal is to eventually step out of the loop entirely: the draft goes out, the doctor reviews pricing, and the proposal reaches the patient without Sean ever needing to be in the room.

**A partner doctor** receives the proposal with a structured pricing column and row already in place. They open it, enter their clinic's pricing for each treatment item, and the proposal is ready to present to the patient. There is no manual formatting, no pricing conversation via WhatsApp, no guesswork about where to put the numbers. Every partner doctor fills in the same structure — and Ming Medical has a consistent, auditable record of what was proposed, even if not what was charged.

**Management** can see the proposal workflow clearly for the first time — which cases are drafted, which are under review, which have been approved and sent, and which are pending patient confirmation. There is no more invisible pipeline. Status is trackable. Volume is visible. The operation is no longer dependent on Sean's memory of where each case stands.

---

## Feature Deep Dive

### 1. Report-to-Proposal Copilot

This is the core of the engagement — the capability that directly addresses the two-hour manual drafting bottleneck. It is a custom build, not a standard MAIA module, because Ming Medical's CPG logic and multilingual report parsing requirements are specific to their operation.

**What it does:** Ingests two types of medical input. The first is **narrative medical reports** — PDFs, scanned images, unstructured text in English or Arabic — from which the system extracts patient demographics, diagnosed conditions, current medications, treatment history, and clinical findings. The second is **blood test reports**, which follow a standardised fixed format and carry specific markers that directly drive dosage decisions: CRP and ESR for inflammation and autoimmune conditions (e.g. Hashimoto's, rheumatoid arthritis), creatinine and eGFR for kidney cases, C-Peptide for Type 1 diabetes monitoring, HbA1c for Type 2 diabetes response, and serum albumin and uric acid for renal failure. Sean noted that blood tests are standardised — "the standard blood test is fixed" — making them more reliably parseable than narrative reports. The system extracts the relevant markers, maps them to CPG thresholds and dosage tiers, and generates a full proposal output: patient overview, conditions-to-therapy mapping table, month-by-month treatment schedule, recovery timeline notes, and payment structure — in Ming Medical's approved format. Patient-facing language and doctor-facing language are produced as separate outputs where required.

**What it won't do:** It will not make final clinical decisions. It will not auto-finalise a treatment plan without human review. It will not operate without a structured, machine-ready CPG — the CPG must be prepared and handed over by Ming Medical before the system can produce reliable output. It will not generate treatment recommendations for conditions flagged as "No experience" in the CPG (currently includes Parkinson's disease, ALS, Stroke, Autism, Down Syndrome, and others) — these cases require Sean's direct judgment and cannot be handled by the copilot alone. It will not process voice recordings in the baseline scope.

**Why it matters:** Sean currently spends roughly two hours per case on work that is fundamentally repetitive — reading a report, mapping it to logic he already knows, writing a document he has written hundreds of times before in the same format. MAIA is not inventing a new structure — it is formalising the one Sean already uses. The format already exists. The CPG logic already exists. What is missing is a system that holds them together and produces the output without Sean having to reconstruct it manually every time. MAIA collapses that into a draft-and-review cycle. The draft does the heavy lifting. Sean does the judgment. As case volume grows through partner channels and the international pipeline, the system scales. Sean does not.

### 2. Structured Pricing Column for Partner Doctors

Ming Medical's partner channel requires a specific capability: proposals must be generated with an empty, structured pricing section that each partner doctor can fill in independently, according to their own clinic's pricing structure.

**What it does:** Generates proposals with a pre-built pricing column and row structure — treatment items listed, quantities and dosage visible, price fields empty and ready for manual entry. Each partner doctor fills in their own pricing before the proposal is presented to the patient. The filled pricing is recorded and auditable within the MAIA workflow. Ming Medical does not see or control what partners charge — but the format is consistent across all partner proposals.

**What it won't do:** It will not auto-populate prices. It will not apply a markup formula. It will not recommend or validate pricing in any way. Pricing authority remains entirely with the individual doctor or clinic.

**Why it matters:** Currently there is no standard pricing structure in Ming Medical's proposals. Partner doctors add pricing by hand, in their own format, after the proposal is sent. This creates inconsistency, leaves no audit trail, and means the handoff to the patient is ad hoc. A structured pricing column gives the partner channel a consistent, professional format — and gives Ming Medical a complete record of every proposal sent, even if the final patient price is set by the doctor.

### 3. Guardrailed Knowledge Boundaries

For a system handling last-resort medical cases, what the AI does not draw from is as important as what it does.

**What it does:** Restricts all AI inference and content generation to Ming Medical's CPG and a pre-approved list of trusted medical websites and links, reviewed and maintained by Ming Medical. No external medical sourcing is used beyond this approved boundary. Knowledge boundary changes require a Ming Medical sign-off process.

**What it won't do:** It will not draw from general web search results, unapproved medical reference sites, or any external source not on the approved list. It will not update its knowledge base autonomously — all CPG updates and approved source changes go through Ming Medical's governance process.

**Why it matters:** Ming Medical's patients have already failed with conventional medicine. An output grounded in the wrong source — a general medical site, an outdated reference, an unapproved treatment protocol — carries real clinical and reputational risk. The guardrail is not a technical constraint. It is a trust condition.

### 4. Proposal-to-Order Operational Handoff

The workflow does not end when the proposal is approved and sent. For cases where the patient confirms and treatment is to proceed, the proposal must translate into an operational order.

**What it does:** Once a proposal is approved within the MAIA review workflow and patient confirmation is received, MAIA supports a clean handoff into order creation in the standard OMS flow — treatment items, quantities, and patient reference carried across without manual re-entry. The order record is traceable back to the originating proposal.

**What it won't do:** It will not automate fulfillment logistics or downstream production scheduling in Phase 1. It will not auto-trigger order creation without a confirmed human approval step. Advanced fulfillment tracking remains out of scope unless explicitly added.

**Why it matters:** Currently, the transition from "proposal approved" to "order created" is a manual step — Sean or a coordinator re-enters the treatment details into whatever tracking system is in use. MAIA closes that gap, reducing re-entry errors and giving the operation a traceable chain from intake to order.

---

## Scope Summary

### Included

- **Report-to-proposal copilot core flow** — report intake (PDF/image/text, EN/AR), CPG-aligned mapping, proposal draft generation in approved template format, patient-facing and doctor-facing output variants.
- **Structured pricing column for partner doctors** — empty pricing row/column structure in all proposals; manual entry by doctors; auditable record within MAIA workflow.
- **Review and approval workflow baseline** — draft → review → approve structure with manual pricing control retained at doctor level.
- **Knowledge guardrails baseline** — CPG + approved trusted links only; no open web sourcing.
- **Base proposal-to-order operational handoff** — confirmed proposal support into OMS order creation flow.
- **Multi-language baseline support** — English, Mandarin, Arabic (final implementation subject to approved examples and UAT).

### Deferred — Not Committed

- **Text-to-voice and voice-to-text** — Sean explicitly requested the ability for the system to read proposals aloud (text-to-voice) and accept voice input from doctors who cannot type easily. Raised in the meeting; Brendan confirmed it is technically feasible but deferred: commercials and timeline to be discussed separately with the relevant team before committing to scope.

### Requires Clarification

- **Machine-ready CPG schema** — final column structure, variable set, and logic rules; ownership of future CPG updates and governance process.
- **Approved trusted websites list** — explicit list of external sources MAIA may reference; who owns additions and removals.
- **Proposal template variants** — final structure for patient-facing vs doctor-facing outputs; who signs off the template before build.
- **WhatsApp intake trigger behaviour** — whether intake is initiated by a coordinator uploading to MAIA, or whether WhatsApp messages are ingested directly; final flow to be confirmed.
- **Approval authority per stage** — who approves at draft stage, who signs off before sending to patient, whether partner doctors have a separate approval step.

### Not in Scope

- Automatic pricing decision-making or markup calculation without doctor input.
- Clinical decision replacement by AI without Sean or doctor oversight.
- Unrestricted external medical web sourcing.
- Voice recording processing in Phase 1 baseline.
- Production scheduling or cell inventory management.

---

## The Design Principle

MAIA's role at Ming Medical is not to replace clinical judgment — it is to stop clinical judgment from being wasted on formatting work. Parsing a report, mapping conditions to CPG logic, structuring a proposal, generating an empty pricing column for a partner doctor — these are repeatable, structured tasks. They consume Sean's time not because they require his expertise, but because there is no system to do them instead. MAIA handles the grunt work. Sean handles the calls that genuinely require 26 years of experience.

Ming Medical was built on a premise that the rest of the medical industry dismissed: that bodies can be repaired, not just managed. Sean has spent 26 years proving that — case by case, condition by condition, from spinal cord injuries to incurable cancers. The business has grown to the edge of what one person can operate. The partner doctor channel is expanding. International cases are arriving. The clinical capability is ready to scale. The operational infrastructure is not — yet.

The RM 35,000 investment buys the first layer of that infrastructure: a proposal engine that turns Sean's CPG knowledge into a repeatable system, a pricing structure that works for every partner doctor regardless of their markup, a review workflow that keeps humans in control of every clinical and commercial decision, and an order handoff that connects the proposal to execution without re-entry. It is not everything. It is the right first layer — the one that removes the ceiling and makes everything else possible.

_MAIA structures the workflow. Humans remain the decision-makers._

---

## See Also

- [[Requirement Gathering Output - Ming Medical - 2026-04]] — structured requirements and open questions
- [[Ming Medical - Customer Profile]] — company background and stakeholder contacts
- [[09 - Intake & Triage/Request Intake Inbox]] — feature intake log
- [[02 - PM Playbook/Templates/[Template] PRD]]
