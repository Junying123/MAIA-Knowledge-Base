---
owner: Gareth
status: draft
last_reviewed: 2026-04-17
lark_url:
---

# SOW — MAIA for Ming Medical SDN BHD

**Effective Date:** [TBC]

**Between:** Mindhive Sdn Bhd ("Mindhive") — 7, Jln Penyajak U1/45A, Hicom-glenmarie Industrial Park, 40150 Shah Alam, Selangor

**And:** Ming Medical SDN BHD ("Ming Medical") — [Client Address, Petaling Jaya, Selangor]

---

## Executive Summary

Ming Medical SDN BHD is a BioNexus-recognised cell-based therapy manufacturer based in Petaling Jaya, Selangor, producing Wharton's Jelly Mesenchymal Stem Cells (WJ-MSC), Natural Killer (NK) cells, exosomes, and telomere exosomes at clinical scale. Cases today arrive via WhatsApp with no formal intake — each treatment proposal is researched, mapped to Clinical Practice Guidelines (CPG), and written from scratch by one person, taking two hours per case.

**Current tools:** WhatsApp (case intake), manual drafting (Word/PDF), no structured intake or proposal system

This SOW defines a four-phase implementation of a custom MAIA AI Proposal Engine that delivers:
- Automated patient case intake and multi-format medical document parsing (PDF, image, EN/AR)
- AI-driven condition extraction and primary/secondary classification grounded in Ming Medical's CPG
- CPG-aligned treatment matching with demographic-adjusted dosage logic
- Structured proposal generation in Ming Medical's approved format, with partner doctor pricing column and MAIA OMS order handoff

---

## Phased Delivery

This engagement delivers a custom AI Proposal Engine built in four sequential phases. Each phase adds one logic layer to the system. Phases are designed to be independently testable — Phase 1 output can be validated before Phase 2 begins.

---

### Phase 1 — Problem Framing

Phase 1 is the intake and extraction layer. The system accepts patient cases in unstructured form, parses all medical documents, and produces a structured, validated one-pager of the patient's current medical state — grounded in what was submitted, not inferred.

**Patient Case Intake**

- Case opened via MAIA (coordinator-initiated upload or WhatsApp-triggered intake)
- Case record holds: patient name, nationality/country, referral source (optional), direct patient or partner doctor channel, intended output language (English first; Mandarin and Arabic on request)
- Chronological document history per patient — each new submission appended to the case, not overwritten
- Returning patients: existing history surfaced automatically; new documents layered onto prior record

**Multi-Format Medical Document Parsing**

- Supported inputs: PDF, scanned image, unstructured text (English and Arabic)
- Narrative medical report extraction: patient demographics, diagnosed conditions, medications, prior treatments, clinical findings, symptom history
- Blood test report extraction: standardised biomarkers mapped to dosage-relevant thresholds per CPG
- Complex graph or non-standard table extraction: flagged for coordinator review where AI confidence is below threshold
- Video files: out of scope

**Condition Classification**

- Primary condition identified per case (the presenting, most severe condition)
- Secondary conditions listed and linked to primary
- Each condition tagged with: onset, severity indicators, prior treatment history, relevant biomarker readings
- Conditions with no CPG coverage flagged immediately and routed to Sean — system does not proceed with matching for these

**Context Relevance Filtering**

- Historical documents filtered to what is relevant to the current case request
- Example: prior orthopaedic x-ray surfaces for ACL case; prior unrelated aesthetic procedure excluded from current clinical summary
- Filtering logic defined per condition group — coordinator can override

**Phase 1 Output: Structured Patient Summary**

A one-pager per case containing:
- Patient profile (demographics, country, channel)
- Primary and secondary conditions with severity and history
- Relevant biomarker readings extracted from blood test
- Prior treatments and their outcomes
- What is present and what is still missing (follow-up checklist)

This output is reviewable by a coordinator before Phase 2 proceeds. For cases where Phase 2 is not yet built, this one-pager can be handed to Sean directly to accelerate manual proposal drafting.

---

### Phase 2 — Boundary Definition

Phase 2 defines the solution space. Before treatment matching begins, the system maps the patient's profile against Ming Medical's CPG, medical regulations, and clinical constraints to determine what can and cannot be offered. This is the guardrail layer.

**CPG Knowledge Boundary**

- All AI inference and content generation bounded to Ming Medical's CPG and a Mindhive-approved list of trusted medical references
- No open web sourcing; no unapproved external medical references
- CPG updates go through Ming Medical sign-off before taking effect in the system
- Approved trusted source list managed by Ming Medical; additions and removals require Ming Medical governance

**Medical Exclusion Criteria**

- System applies hard exclusion rules per CPG before producing any treatment candidate
- Standard exclusion rules applied per CPG before producing any treatment candidate (e.g. patient health indicators below defined thresholds, age below minimum treatment eligibility)
- Exclusion rules are structured, explicit, and auditable — not inferred by AI
- Cases that fail exclusion criteria are flagged for Sean review with reason stated

**Non-Curable / No-Experience Boundaries**

- Conditions marked "No experience" in Ming Medical's CPG are surfaced as flags, not matched
- System routes flagged conditions to Sean with a clear notation — does not attempt to generate treatment recommendations beyond CPG coverage
- Sean's direct judgment is required for all no-experience conditions

**MAIA Platform Capabilities and Limitations**

- System capabilities bounded to what MAIA's AI Proposal Engine can reliably produce within Phase 1–4 scope
- Platform limitations surfaced explicitly at boundary check: unsupported document types, conditions outside CPG, languages pending UAT, and input formats requiring coordinator intervention
- Any capability outside agreed scope requires a formal change request before build

**Compliance Requirements Mapping**

- APM regulations and applicable Malaysian medical compliance requirements mapped as system constraints
- International patient regulatory considerations flagged per origin country where CPG specifies

**Budget as a Design Constraint**

- Patient-declared or partner-declared budget captured at case intake (optional)
- Budget constraint surfaced during boundary check — system notes where proposed treatments may exceed declared budget
- Budget does not auto-exclude options; it informs the reviewer

**Phase 2 Output: Feasibility Assessment**

Per case, before matching:
- What can be offered (conditions with CPG coverage, exclusions cleared)
- What cannot be offered (exclusion criteria failed, no-experience flags)
- What requires Sean review (edge cases, flagged conditions, ambiguous biomarker readings)

---

### Phase 3 — Treatment Matching Logic

Phase 3 is the CPG-to-treatment matching engine. Given Phase 2's cleared condition set, the system retrieves therapy options, applies demographic and clinical variables, handles multi-condition stacking, and assembles the candidate treatment plan.

**CPG-Based Matching**

- Conditions matched to therapy families in the CPG
- Each match returns: treatment type, delivery method, dosage range, duration, sequencing, frequency, session count
- Alternatives surfaced where CPG provides them (interchangeable treatments flagged per condition)
- Notes and lifestyle changes included per CPG recommendation

**Demographic-Adjusted Dosage**

- Age: elderly patients (defined per CPG) flagged for 2–4× session count and 2–4× longer recovery; paediatric minimum ages enforced per condition
- Gender: dosage variants applied per CPG where gender-specific protocols exist
- Ethnicity: applied where CPG specifies ethnic-based treatment differences
- Severity: dosage tier selected based on biomarker readings from Phase 1 blood test extraction

**Multi-Condition Stacking Rules**

- When a patient presents multiple conditions, system detects condition group and determines interaction rules from CPG
- CPG-defined stacking: where two conditions share a treatment, consolidation logic applied (one product for both vs. separate protocols)
- Conflicts flagged where one condition's treatment is contraindicated for another
- Output is a prioritised treatment plan — primary condition drives the primary protocol; secondary conditions additive

**International Patient Pricing Signal**

- Country of origin captured at intake; international cases (Middle East, UK, other) flagged
- International patients: CPG matching considers longer-course and stacked protocols where clinically appropriate
- Pricing signal (international margin) applied as a reviewer flag — not auto-applied to proposal

**Upsell / Wellness Add-Ons**

- Where CPG identifies byproduct benefits (e.g., anti-aging or longevity effect from a clinical treatment), these are surfaced as optional add-ons
- Add-ons are not auto-included in the proposal; reviewer decides whether to include
- All add-ons must be CPG-grounded — no system-generated upsell outside approved knowledge

**Phase 3 Output: Candidate Treatment Plan**

Per case:
- Matched therapy options per condition with dosage, duration, sequencing, frequency
- Alternatives where applicable
- Multi-condition stacking resolution
- Recovery timeline and efficacy horizon per treatment
- Side effects and relevant lifestyle changes
- Optional add-ons (wellness, anti-aging) flagged separately

---

### Phase 4 — Proposal Generation

Phase 4 produces the final client-facing proposal document from the Phase 3 treatment plan. The proposal follows Ming Medical's approved format, includes a reviewer approval step, outputs patient-facing and doctor-facing variants, and hands off to MAIA OMS for order creation on confirmation.

**Proposal Document Generation**

Generated in Ming Medical's approved structure:

| Section | Content |
|---|---|
| Patient Overview | Demographics, country, channel, case reference |
| Medical Background | Conditions, history, prior treatments (from Phase 1 summary) |
| Proposed Treatments | Conditions-to-therapy mapping table (from Phase 3) |
| Treatment Plan | Month-by-month schedule (Month 0, Month 3, Month 6 — 3-day Malaysia stay per visit) |
| Recovery & Efficacy | Recovery timeline, session frequency, efficacy horizon |
| Pricing Structure | Line-item table with treatment, quantity, dosage, price fields |
| Payment Terms | USD for international patients, bank transfer/credit card, payment due ≥1 week before treatment |
| CPG References | Sources cited per treatment recommendation |

**Patient-Facing vs Doctor-Facing Variants**

- Patient-facing: plain language, no medical abbreviations, no jargon; explains what is proposed and what the patient should expect
- Doctor-facing: clinical precision — CPG staging, dosage variables by cell type, condition interaction logic, treatment rationale
- Variant selection at generation step; coordinator specifies recipient type

**Structured Pricing Column for Partner Doctors**

- All proposals include a pre-built pricing column: treatment items listed, quantities and dosage visible, price fields blank and ready for manual entry
- Partner doctor fills in their clinic's pricing before presenting to patient
- Filled pricing recorded within MAIA workflow — auditable record of every proposal sent
- Ming Medical does not auto-populate or control partner pricing

**Review and Approval Workflow**

- Draft generated → coordinator review → Sean review and adjustment → approval → send
- All Sean adjustments tracked: what changed, by whom, when — full audit trail from generated draft to final approved proposal
- For straightforward cases, Sean's goal is to step out of the review loop entirely — draft reviewed by coordinator only before sending
- Proposal versions maintained — revision history preserved per case

**Evidence-Based Justification**

- Every treatment recommendation in the proposal references the CPG section it is derived from
- Justification trail: patient condition → CPG match → treatment selected → rationale stated
- Reviewers can cross-reference CPG source before approving

**Doctor Q&A Mode**

- Ming Medical staff and partner doctors can query the CPG directly via conversational interface
- Natural language queries answered against the CPG and approved trusted sources (e.g. recommended protocol for a condition, treatment duration, side effects)
- All answers bounded to CPG and approved trusted sources; source section referenced in every response
- Conditions with no CPG experience flagged and routed to Sean — Q&A does not answer for no-experience conditions

**Proposal-to-Order Operational Handoff**

- On patient confirmation, approved proposal triggers order creation in MAIA OMS
- Treatment items, quantities, patient reference, and case ID carry across without re-entry
- Order traceable back to originating proposal and patient case
- Advanced fulfillment tracking and production scheduling: out of scope for this engagement

**Multi-Language Support**

- Proposal generation in English (primary), Mandarin, and Arabic
- Final implementation subject to approved translation examples and UAT sign-off

---

## Estimated Timelines

| Phase | Scope | Build & Integration | Expected Date | Notes |
|---|---|---|---|---|
| Phase 1 | Problem Framing — intake, parsing, condition classification | [TBC] weeks | [TBC] | CPG schema handover required before build |
| Phase 2 | Boundary Definition — CPG guardrails, exclusion logic | [TBC] weeks | [TBC] | Depends on machine-ready CPG from Ming Medical |
| Phase 3 | Treatment Matching — CPG matching, dosage, stacking | [TBC] weeks | [TBC] | |
| Phase 4 | Proposal Generation — output, review workflow, OMS handoff | [TBC] weeks | [TBC] | Proposal template sign-off required before build |
| **Total** | Full AI Proposal Engine | **2–3 months** | [TBC] | |

---

## Commercial Structure

### One-Off Development Cost

| Item | Price |
|---|---|
| Phase 1 — Problem Framing | RM [TBC] |
| Phase 2 — Boundary Definition | RM [TBC] |
| Phase 3 — Treatment Matching Logic | RM [TBC] |
| Phase 4 — Proposal Generation | RM [TBC] |
| **Grand Total** | **RM [TBC]** |

### Payment Terms

| Milestone | Percentage | Price | Trigger |
|---|---|---|---|
| Milestone 1 — Project Commencement | 50% | RM [TBC] | Agreement signed and CPG schema handed over |
| Milestone 2 — UAT Completion & Sign-Off | 50% | RM [TBC] | Full system UAT passed and approved by Ming Medical |

### Monthly Maintenance

| Item | Estimated |
|---|---|
| Platform maintenance | RM [TBC] |
| Infrastructure / hosting | RM [TBC] |
| AI / LLM usage costs | RM [TBC] |
| **Estimated Monthly Total** | **RM [TBC]** |

---

## SLAs

### Mindhive Commitments

- **System Availability:** 99.5% uptime (excluding scheduled maintenance)
- **Critical (P1):** Response within 2 hours
- **High (P2):** Response within 8 hours
- **Normal (P3):** Response within 2 business days
- **Maintenance Windows:** Pre-communicated; typically weekends or off-peak hours
- **Data Protection:** Regular backups and disaster recovery
- **Lifetime Upgrades & Support**

### Ming Medical Commitments

- Designate a primary point of contact (POC) for the engagement
- Provide a machine-ready CPG schema (with all required variables: conditions, dosage tiers, age ranges, contraindications, alternatives, lifestyle changes) before Phase 1 build commences
- Provide the approved list of trusted medical reference sources before Phase 2 build commences
- Provide the approved proposal template (patient-facing and doctor-facing variants) before Phase 4 build commences
- Provide approved translation samples for Mandarin and Arabic before multi-language UAT
- Provide approvals, clarifications, and input within 2–3 working days
- Designate system administrators and enforce internal user policies
- Ensure timely payment settlement per agreed commercial terms

---

## Caveats & Exclusions

- **CPG Dependency:** The system cannot produce reliable output until Ming Medical provides a complete, machine-readable CPG with all required variables (age ranges, dosage tiers, contraindications, condition interaction rules, no-experience flags). CPG preparation is Ming Medical's responsibility and is the primary dependency for Phase 2 and Phase 3.
- **No Clinical Decision Replacement:** MAIA does not diagnose, does not make final clinical decisions, and does not auto-finalise treatment plans without human review. Sean or an approved clinician must review every proposal before it is sent to a patient or partner doctor.
- **Third-Party Dependencies:** Mindhive not liable for downtime or issues in WhatsApp Business API, external hosting infrastructure, or any platform outside Mindhive's direct control.
- **Connectivity:** Ming Medical responsible for internet access and device readiness for all users.
- **Data Accuracy:** Responsibility for correctness and completeness of all submitted medical documents, CPG content, and patient data lies with Ming Medical.
- **Knowledge Boundary Governance:** Any addition or removal of approved trusted medical sources requires Ming Medical sign-off before taking effect in the system.
- **Complex Graph Extraction:** AI extraction accuracy for non-standard medical report layouts (unusual tables, trend-only graphs without numeric values) is not guaranteed. These are flagged for coordinator review.

---

## Out of Scope

- Automatic pricing decision-making or markup calculation without doctor input
- Clinical diagnosis or treatment finalisation by AI without Sean or clinician review
- Unrestricted external medical web sourcing
- Video file processing
- Text-to-voice output (deferred — commercials and timeline to be discussed separately)
- Production scheduling, cell inventory management, or batch fulfillment logistics
- Hardware procurement or on-premise infrastructure
- Business process re-engineering outside agreed proposal workflow
- Training beyond initial onboarding program

---

## Signatures

**For Mindhive Sdn Bhd:**

____________________________
Signature

Name:
Position:
Date:

**For Ming Medical SDN BHD:**

____________________________
Signature

Name:
Position:
Date:

---

## ⚠️ Gaps Still Open

The SOW draft is complete but the following need your input before this document is ready to send:

1. **Header — Effective Date**
   Why this matters: Required in the parties block and for commercial reference.
   What I need: Confirm the effective date.

2. **Header — Client Address**
   Why this matters: Required in the parties block.
   What I need: Ming Medical's full registered address (street, postcode, city).

3. **Commercial — Development Cost per Phase**
   Why this matters: Core commercial commitment. Cannot send to client without agreed figures.
   What I need: Agreed RM amount per phase, or total with split TBD internally.

4. **Commercial — Monthly Maintenance**
   Why this matters: Client needs to budget for ongoing costs.
   What I need: Estimated monthly figures, or confirm TBC pending infra sizing.

5. **Timelines — Build Duration per Phase**
   Why this matters: Client will ask for a delivery timeline.
   What I need: Estimated weeks per phase, or confirm 2–3 months total is the commitment.
