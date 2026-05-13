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

Ming Medical SDN BHD was founded in 1999 in Selangor. The company manufactures cell-based therapies: Wharton's Jelly Mesenchymal Stem Cells (WJ-MSC), Natural Killer (NK) cells, exosomes, and telomere exosomes. Malaysia's Bioeconomy Development Corporation recognizes it as a BioNexus company. The tagline is not marketing: _"Giving HOPE where there is none."_ This describes how they operate.

The business splits into three arms. **R&D and Production**: Most competitors buy exosomes in small cosmetic doses (50 billion units). Ming Medical manufactures in-house at clinical scale, up to 200 billion units per batch. This manufacturing depth is the differentiator. **Clinical Proposal Operations**: When a case arrives, the team reads the medical report and blood test results, maps them to the Clinical Practice Guidelines (CPG), and produces a treatment proposal. The proposal covers the patient's conditions, proposed cell therapies, delivery methods, and a month-by-month schedule (typically three visits: Month 0, Month 3, Month 6, each a 3-day stay in Malaysia). Cases split into two service lines: clinical treatment (spinal cord injury, cancer, autoimmune disease, organ failure) and wellness (anti-aging, longevity, aesthetic, prophylactic NK cell). This arm is where the bottleneck lives. **Partner Doctor Channel**: Ming Medical sells cells to partner doctors at fixed wholesale price. Partners buy, apply their own markup, charge their own patients. Ming Medical does not see or control what partners charge. Sean put it plainly: _"They buy from us at a fixed price. They do a level markup and they sell. I don't need to know what they sell."_ Direct patients engage Ming Medical directly. Quotes go out in USD for international cases, payment via bank transfer or credit card before treatment.

Sean founded the company. He was formerly Managing Director of Informix (acquired by IBM) and spent the 1990s in enterprise database technology before moving into regenerative medicine. His team is lean, under 50 people. The patient base skews local Malaysian (80–90% of case volume), with growing high-value cases from the Middle East and UK. Operations center in Petaling Jaya, Selangor.

MAIA builds a custom proposal copilot with associated review, pricing, and order handoff workflow. The build focuses on the CPG-to-proposal mapping engine and multilingual report parsing. Once a proposal is confirmed, the order creation flow connects to standard MAIA OMS modules. The entire engagement makes the Clinical Proposal Operations arm (currently one person) repeatable, auditable, and scalable.

---

## Before MAIA: How Ming Medical Operates Today

Ming Medical has exceptional clinical capability. The operational infrastructure runs on one person's knowledge, memory, and manual effort. That is not a weakness. It is how the business started. But Sean's assessment is direct: _"I cannot continue."_

### Everything Arrives on WhatsApp

Cases land via WhatsApp with no formal intake process. A patient or partner doctor sends a message, attaches a PDF, shares a scan image, or pastes a condition description. Sometimes it includes a voice recording; Sean prefers hard copy in fixed format. A typical case brings two documents: a **narrative medical report** (condition, history, prior treatment) and a **blood test report** (biomarkers that drive dosage — creatinine, eGFR, serum albumin, uric acid). These arrive separately. The medical report comes first. The blood test arrives days later. Or they come in reverse order. Sometimes a patient forgets an attachment and sends it later. No structured intake form. No case ID. No triage logic. The case exists when Sean reads it.

Every case begins with manual reading. Sean opens the message. He assesses what is there, identifies what is missing, decides whether to proceed or ask for follow-up. If the report is an image, he reads it visually. If it is in Arabic, he interprets it. If the blood panel is in a non-standard layout, he extracts markers by hand. Nothing is parsed. Nothing is organized. Everything depends on him: being available, paying attention, reading it correctly.

The cost stays invisible until it builds. A missed follow-up. A misread report. A case stuck in WhatsApp while Sean handles something else. None of these failures show anyone else. The intake is a black box.

### Two Hours Per Proposal, Starting From a Blank Page

After reading the report and understanding the case, Sean drafts the proposal manually. He maps the patient's conditions to CPG logic, selects cell therapies and delivery methods, determines dosage and duration by age and severity, and writes it in language a patient can understand. A typical case takes two hours. Complex multi-condition cases take longer.

Every proposal starts blank. No template auto-populates from the report. No system recalls what Sean did for a similar case. No draft a coordinator can start and Sean can finish. All cognitive load (report reading, CPG mapping, proposal writing) sits with one person, every time.

The format itself is not the problem. Sean already has a consistent structure: patient overview, conditions mapped to treatments, month-by-month protocol, payment terms. He described version three of a recent proposal: *"the format is still the same."* The structure exists. It works. It lives only in Sean's head, rewritten from scratch each time. MAIA does not invent a new format. It captures the one Sean already uses and makes it available to the whole operation.

As volume grows through partner channels and international cases, this model breaks. The ceiling is Sean's availability. Cases wait when he is in a meeting. Cases wait when he is travelling. If volume doubles, output does not. Only one person knows how to produce it.

### The Work Cannot Be Delegated: Staff Don't Understand Clinical Implications

The obvious response to a bottleneck: hire more people or delegate. Sean tried this. He asked staff to draft proposals from the medical report and CPG logic. They delivered drafts. The proposals were wrong. His team cut and pasted without understanding clinical implications. Treatment recommendations lost context. Dosage logic was incomplete. Clinical reasoning disappeared.

Sean's reaction was immediate. He was upset. The reason is simple: this is not data entry. A proposal is not fields pasted from a report. It requires clinical judgment at every step: knowing which blood markers drive which conditions, recognizing when age shifts the dosage tier, catching when two concurrent conditions interact and alter treatment, understanding why a patient needs education about what angiogenesis means in recovery. This is invisible to someone following a template.

Sean took the work back. He cannot hire his way out because the bottleneck is not labor. It is knowledge. More staff who don't understand clinical implications just adds a quality control layer on top of proposal writing. The ceiling is not Sean's time. It is Sean's expertise as the only reliable source of proposal accuracy.

### One Patient, Two Completely Different Documents

Proposals must serve two different audiences, often the same case. A proposal to a patient uses plain language: no medical jargon, no abbreviations, no terms requiring clinical background. The patient needs to know what is wrong, what treatment is proposed, what the timeline looks like, what they pay. If they cannot understand it, it fails.

A proposal to a doctor requires clinical precision: facet joint references, CPG staging, dosage variables by cell type, condition interaction logic. Doctors want the clinical rationale they need to advise patients and complete the order. They do not want simplified language.

The output is a structured multi-section document: patient overview table, conditions-to-therapy mapping table, month-by-month treatment schedule (three visits over six months, each a 3-day stay in Malaysia), recovery timeline notes, payment terms (international patients pay USD via bank transfer with SWIFT details; payment due at least one week before treatment). Every section must be accurate, clinically grounded, formatted consistently. Sean writes all of this from scratch, calibrating language for each audience. No template split. No system flag for "patient-facing" or "doctor-facing." Manual judgment call on every case, one person.

### Every Doctor Sets Their Own Price: Into Nothing

After a proposal is drafted and reviewed, pricing has nowhere to go. Partner doctors buy cells at fixed wholesale price and apply their own markup before presenting to patients. Each clinic sets different retail prices for the same treatment. Ming Medical does not set, see, or track what partners charge.

The proposal has no place for this. No pricing column for doctors to fill in. No row structure that maps treatment items to price fields. When a proposal goes to a partner doctor, pricing becomes a manual conversation or gets added by hand somewhere in the document before reaching the patient. No audit trail. No standard format. No record of what was quoted to whom.

### The CPG Lives in Sean's Head

Ming Medical has a CPG file that maps conditions to treatments. It is not machine-ready. The version they have is a simplified guide for human readers. It lacks the variable structure an AI system needs: age ranges, dosage tiers by severity, duration logic, precondition flags, contraindications, condition interaction rules.

The real CPG is not in any document. It is in Sean's head. Built over 26 years of cases. It includes rules not written down anywhere: cerebral palsy treatment only works ages two to five; kidney repair requires specific creatinine and eGFR readings to determine exosome dosage; elderly patients need 2–4× more sessions and 2–4× longer recovery than younger patients, regardless of condition; some conditions (Parkinson's, ALS, Stroke, Autism) have no CPG coverage because Ming Medical has no clinical experience, and these cases need different handling. Until this logic is externalized into a structured, machine-readable CPG with all variables, the system cannot work without Sean.

---

## After MAIA: What Changes

**A coordinator** opens the MAIA intake flow and uploads the medical report from WhatsApp (PDF, scanned image, or text summary). MAIA parses the document, extracts clinical signals, identifies conditions and patient variables, maps them to the CPG. A proposal draft is generated in Ming Medical's approved format. The coordinator no longer holds cases in a WhatsApp thread waiting for Sean. The queue moves.

**Sean** opens the draft and reviews it. Conditions are identified, treatments mapped, dosage and duration logic applied. He reads for accuracy, adjusts where his clinical judgment overrides the system, approves. Every adjustment is tracked: the system records what changed, by whom, when. Full audit trail from generated draft to final proposal. He does not start blank. He does not spend two hours building what the system built in minutes. He focuses on judgment calls (the 20% requiring his expertise) and leaves repetitive formatting to the system. For straightforward cases, his goal is to step out entirely: draft goes out, doctor reviews pricing, proposal reaches patient without Sean in the room.

**A partner doctor** receives the proposal with a structured pricing column and row ready. They enter their clinic's pricing for each treatment item. The proposal is ready to present. No manual formatting. No pricing conversation via WhatsApp. No guessing where to put numbers. Every partner fills the same structure. Ming Medical has a consistent, auditable record of every proposal, even if not what was charged.

**Management** sees the proposal workflow clearly: which cases are drafted, which are under review, which are approved and sent, which are pending patient confirmation. The pipeline is visible. Status is trackable. Volume is clear. The operation does not depend on Sean's memory of where each case stands.

---

## Feature Deep Dive

### 1. Report-to-Proposal Copilot

The core of the engagement. It addresses the two-hour manual drafting bottleneck directly. Custom build because Ming Medical's CPG logic and multilingual report parsing are specific to their operation, not a standard MAIA module.

**What it does:** Takes two types of medical input. **Narrative medical reports** (PDFs, scanned images, unstructured text in English or Arabic) from which the system extracts patient demographics, diagnosed conditions, medications, treatment history, and clinical findings. **Blood test reports** come in a standardised format and carry biomarkers that drive dosage decisions. Sean said it clearly: "the standard blood test is fixed" which makes them more reliably parseable than narrative reports. The system extracts biomarkers, maps them to CPG thresholds and dosage tiers by patient age and condition severity, and produces the full proposal in Ming Medical's approved format: patient overview, conditions-to-therapy mapping table, month-by-month treatment schedule, recovery timeline notes, payment structure. Patient-facing and doctor-facing outputs are separate where needed.

**What it won't do:** Makes no final clinical decisions. Does not auto-finalise treatment plans without human review. Requires a structured, machine-ready CPG. Ming Medical must prepare and hand over the CPG before the system produces reliable output. Does not generate treatment recommendations for conditions flagged "No experience" in the CPG (Parkinson's disease, ALS, Stroke, Autism, Down Syndrome). These require Sean's direct judgment.

**Why it matters:** Sean currently spends two hours per case on repetitive work: reading a report, mapping it to logic he already knows, writing a document he has written hundreds of times in the same format. MAIA doesn't invent a new structure. It formalises the one Sean already uses. The format exists. The CPG logic exists. What's missing is a system that holds them together and produces output without Sean having to reconstruct it manually every time. MAIA collapses this into draft-and-review. The draft does the heavy work. Sean does the judgment. As volume grows, the system scales. Sean doesn't.

### 2. Structured Pricing Column for Partner Doctors

The partner channel needs a specific capability: proposals must have an empty, structured pricing section that each partner doctor fills in independently, according to their clinic's pricing.

**What it does:** Generates proposals with a pre-built pricing column and row structure: treatment items listed, quantities and dosage visible, price fields empty and ready for manual entry. Each partner doctor fills in their own pricing before presenting to the patient. Filled pricing is recorded and auditable within the MAIA workflow. Ming Medical does not see or control what partners charge, but the format is consistent across all partner proposals.

**What it won't do:** It does not auto-populate prices. It does not apply a markup formula. It does not recommend or validate pricing. Pricing authority stays entirely with the individual doctor or clinic.

**Why it matters:** Ming Medical's proposals currently have no standard pricing structure. Partner doctors add pricing by hand, in their own format, after the proposal is sent. This creates inconsistency, leaves no audit trail, makes the handoff to the patient ad hoc. A structured pricing column gives the partner channel a consistent, professional format and gives Ming Medical a complete record of every proposal sent, even if the final patient price is set by the doctor.

### 3. Guardrailed Knowledge Boundaries

For a system handling last-resort medical cases, what the AI does not draw from is as important as what it does.

**What it does:** Restricts all AI inference and content generation to Ming Medical's CPG and a pre-approved list of trusted medical websites and links, reviewed and maintained by Ming Medical. No external medical sourcing beyond this approved boundary. Knowledge boundary changes require Ming Medical sign-off.

**What it won't do:** It does not draw from general web search results, unapproved medical reference sites, or any external source not on the approved list. It does not update its knowledge base autonomously. All CPG updates and approved source changes go through Ming Medical's governance.

**Why it matters:** Ming Medical's patients have already failed with conventional medicine. Output grounded in the wrong source (a general medical site, an outdated reference, an unapproved treatment protocol) carries real clinical and reputational risk. The guardrail is not a technical constraint. It is a trust condition.

### 4. Doctor Q&A Mode

Doctors need a fast way to query Ming Medical's CPG without drafting a full case. A partner doctor may need to confirm the recommended protocol for a condition, check treatment duration, or understand side effects before advising a patient. This is distinct from proposal generation: conversational, on-demand, bounded to approved knowledge.

**What it does:** Ming Medical staff and partner doctors ask natural language questions directly against the CPG and approved knowledge sources. Example: "What is the recommended treatment plan for Type 2 diabetes in a patient over 65?" or "What are the side effects and duration for NK cell therapy at early-stage cancer?" The system retrieves answers grounded strictly in the CPG and approved trusted links. Responses reference the relevant CPG section so doctors can verify the source.

**What it won't do:** It does not answer questions about conditions marked "No experience" in the CPG. These are flagged and routed to Sean. It does not draw from any source outside the approved knowledge boundary. It does not replace clinical judgment. It surfaces what the CPG says, not what the doctor should decide.

**Why it matters:** Sean currently fields repetitive clinical queries from partner doctors and patients: the same questions about the same protocols, answered from memory every time. A bounded Q&A mode offloads routine queries without clinical risk, because every answer is traceable to Ming Medical's own approved knowledge. Doctors get faster answers. Sean gets time back.

### 5. Proposal-to-Order Operational Handoff

The workflow does not end when the proposal is approved and sent. For cases where the patient confirms and treatment is to proceed, the proposal must translate into an operational order.

**What it does:** Once a proposal is approved within the MAIA review workflow and patient confirmation is received, MAIA supports a clean handoff into order creation in the standard OMS flow. Treatment items, quantities, and patient reference carry across without manual re-entry. The order record is traceable back to the originating proposal.

**What it won't do:** It does not automate fulfillment logistics or downstream production scheduling in Phase 1. It does not auto-trigger order creation without confirmed human approval. Advanced fulfillment tracking remains out of scope unless explicitly added.

**Why it matters:** Currently the transition from "proposal approved" to "order created" is a manual step. Sean or a coordinator re-enters treatment details into whatever tracking system is in use. MAIA closes that gap, reduces re-entry errors, and gives the operation a traceable chain from intake to order.

---

## Scope Summary

### Included

- **Report-to-proposal copilot core flow**: report intake (PDF/image/text, EN/AR), CPG-aligned mapping, proposal draft generation in approved template format, patient-facing and doctor-facing output variants.
- **Structured pricing column for partner doctors**: empty pricing row/column structure in all proposals; manual entry by doctors; auditable record within MAIA workflow.
- **Review and approval workflow baseline**: draft → review → approve structure with manual pricing control retained at doctor level.
- **Doctor Q&A mode**: conversational CPG and approved-source querying for doctors; bounded strictly to approved knowledge; conditions with no CPG experience flagged and routed to Sean.
- **Knowledge guardrails baseline**: CPG + approved trusted links only; no open web sourcing.
- **Base proposal-to-order operational handoff**: confirmed proposal support into OMS order creation flow.
- **Multi-language baseline support**: English, Mandarin, Arabic (final implementation subject to approved examples and UAT).

### Deferred: Not Committed

- **Text-to-voice (output)** - Sean explicitly requested that the system read proposals aloud so that elderly doctors who cannot type or read small text can interact without a screen. Voice-to-text input is already supported by the MAIA chatbot. Text-to-voice output is deferred: commercials and timeline to be discussed separately with the relevant team before committing to scope.

### Requires Clarification

- **Machine-ready CPG schema**: final column structure, variable set, and logic rules; ownership of future CPG updates and governance process.
- **Approved trusted websites list**: explicit list of external sources MAIA may reference; who owns additions and removals.
- **Proposal template variants**: final structure for patient-facing vs doctor-facing outputs; who signs off the template before build.
- **WhatsApp intake trigger behaviour**: whether intake is initiated by a coordinator uploading to MAIA, or whether WhatsApp messages are ingested directly; final flow to be confirmed.
- **Approval authority per stage**: who approves at draft stage, who signs off before sending to patient, whether partner doctors have a separate approval step.

### Not in Scope

- Automatic pricing decision-making or markup calculation without doctor input.
- Clinical decision replacement by AI without Sean or doctor oversight.
- Unrestricted external medical web sourcing.
- Production scheduling or cell inventory management.

---

## The Design Principle

MAIA doesn't replace clinical judgment. It stops clinical judgment from being wasted on formatting work. Parsing reports. Mapping conditions to CPG logic. Structuring proposals. Generating pricing columns for partner doctors. These are repeatable, structured tasks. They eat Sean's time not because they require his expertise, but because there is no system to do them. MAIA handles the grunt work. Sean handles what genuinely requires 26 years of experience.

Ming Medical was built on something the rest of the medical industry dismissed: bodies can be repaired, not just managed. Sean has spent 26 years proving that: case by case, condition by condition, from spinal cord injuries to incurable cancers. The business has grown to the limit of what one person can operate. The partner doctor channel is expanding. International cases are arriving. The clinical capability is ready to scale. The operational infrastructure is not.

This engagement delivers the first layer of that infrastructure. A proposal engine that turns Sean's CPG knowledge into a repeatable system. A pricing structure that works for every partner doctor regardless of their markup. A review workflow that keeps humans in control of every clinical and commercial decision. An order handoff that connects the proposal to execution without re-entry. It's not everything. It's the right first layer: the one that removes the ceiling.

_MAIA structures the workflow. Humans remain the decision-makers._

---

## See Also

- [[Requirement Gathering Output - Ming Medical - 2026-04]] – structured requirements and open questions
- [[Ming Medical - Customer Profile]] – company background and stakeholder contacts
- [[Ming Medical Meeting Transcript - YYYY-MM-DD]] – raw meeting transcript
- [[Ming Medical - GTM Brief Transcript]] – GTM brief transcript
- [[Ming Medical - GTM Proposal]] – GTM proposal document
