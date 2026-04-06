---
owner:
  - Gareth
status: draft
last_reviewed: 2026-04-06
client: Ming Medical
meeting_date: 2026-04-02
---

# MAIA for Ming Medical

### From Founder-Led Drafting to Structured Clinical Proposal Operations

_Prepared by Mindhive for MING Medical Sdn Bhd_  
_Investment: RM 35,000_

---

## Who Ming Medical Is

Ming Medical is a regenerative medicine business serving high-value and often complex medical cases, including international patients and partner-doctor channels across multiple regions. The business handles sensitive, high-context treatment cases where decision quality and communication clarity are both critical.

Today, much of the proposal and recommendation workflow is concentrated in the founder's hands. This has helped maintain quality and consistency, but it also creates operational bottlenecks as enquiry volume grows and more stakeholders need timely, reliable proposal output.

The practical opportunity for MAIA is to structure this workflow without removing clinical judgment from Ming Medical's team. The immediate focus is not replacing doctors. The focus is turning a high-friction manual process into a repeatable system: report intake, CPG mapping, draft generation, review, and order handoff.

---

## Before MAIA: How Ming Medical Operates Today

Ming Medical's current workflow works because of deep expertise, but it is hard to scale because too much depends on one person's interpretation speed, memory, and manual writing effort.

### The Founder as the Proposal Engine

When a case arrives, the team receives mixed-format inputs from patients or partner doctors, then manually interprets those records and maps them to CPG treatment logic. This step is expert-led and high-value, but it is also repetitive and time-consuming.

The proposal drafting step can take substantial effort per case. As new cases increase, response speed and consistency become difficult to maintain without adding structured system support around this workflow.

### The Mixed-Input Reality

Medical inputs do not arrive in one clean format. The team deals with PDFs, image-based reports, long text descriptions, and multilingual context. Some cases require follow-up uploads because key details are spread across multiple messages and documents.

This creates friction in triage and proposal quality control. Even when the clinical reasoning is correct, the work needed to standardise inputs before writing output remains heavy.

### The Consistency and Governance Gap

Ming Medical needs outputs that are simple enough for patients while still clinically useful for doctors. At the same time, pricing control must remain strictly manual and under team control.

Without a structured review-and-approval workflow, it is harder to maintain consistency across contributors, keep a clean audit trail, and prevent scope drift when new ideas are raised mid-process.

---

## After MAIA: What Changes

**A coordinator receives a new case** and uploads the report into a structured intake flow. MAIA parses the report, maps key medical signals to approved CPG logic, and drafts the proposal in Ming Medical's approved format. The team no longer starts from a blank page for each case.

**A doctor reviews the draft** and keeps full human control over pricing and final approval. The system supports workflow structure and consistency, while final medical and commercial decisions remain with Ming Medical and its doctors.

**A partner-doctor case moves faster** because the same structured process applies across channels. Once confirmed, the proposal can flow into order creation with cleaner traceability. This reduces manual handoff friction and improves operational reliability.

**Management gets better visibility** through auditable proposal workflow events and clearer status transitions. The operation becomes less dependent on individual memory and more dependent on shared process discipline.

---

## Feature Deep Dive

### 1. Report-to-Proposal Copilot

This capability structures the core bottleneck in Ming Medical's workflow: turning mixed medical inputs into draft proposals aligned with CPG references.

**What it does:** Ingests report inputs, extracts key signals, maps to CPG references, and generates a proposal draft in the agreed template structure.

**What it won't do:** It does not replace clinical judgment, and it does not auto-finalise treatment decisions without human review.

**Why it matters:** It reduces founder-only drafting load, shortens response time, and improves consistency across cases.

### 2. Human-Controlled Review and Pricing Workflow

This feature keeps the right control with Ming Medical while still reducing repetitive drafting work.

**What it does:** Supports draft -> review -> approve flow and preserves manual pricing entry by Ming Medical/doctors.

**What it won't do:** It will not auto-generate final commercial pricing or bypass approval authority.

**Why it matters:** It protects quality and governance while enabling scale.

### 3. Guardrailed Knowledge Boundaries

For this use case, trust depends on strict source boundaries.

**What it does:** Restricts model guidance to Ming Medical's CPG and explicitly trusted medical websites/links approved by the client.

**What it won't do:** It will not use random external medical sources beyond approved boundaries.

**Why it matters:** It supports safer, more predictable outputs aligned with Ming Medical's clinical standards.

### 4. Proposal-to-Order Operational Handoff

The workflow should not end at document generation. It should continue into a usable order step.

**What it does:** Enables cleaner handoff from confirmed proposal to order creation flow.

**What it won't do:** It does not promise full advanced fulfillment automation in this initial phase unless explicitly added to scope.

**Why it matters:** It connects proposal operations to execution, reducing manual re-entry and process gaps.

---

## Scope Summary

### Included in RM 35,000

- **Proposal copilot core flow** - report intake, CPG-aligned mapping, proposal draft generation.
- **Review and approval workflow baseline** - clear draft/review/approve structure with manual pricing control.
- **Knowledge guardrails baseline** - CPG + trusted approved links only.
- **Base proposal-to-order operational handoff** - confirmed proposal support into OMS flow.
- **Multi-language baseline support** - English, Mandarin, Arabic (final exact implementation details subject to approved examples and UAT).

### Designed For, Not Included (Phase 2)

- **Advanced fulfillment tracking and broader post-order operations** beyond agreed Phase 1 boundaries.
- **Expanded finance automation layers** beyond baseline order handoff.
- **Advanced analytics/reporting modules** unless explicitly added to scope.

### Requires Clarification

- Final machine-ready CPG schema and ownership process.
- Final approved websites/links list and governance.
- Final proposal template variants (doctor-facing vs patient-facing).
- Exact trigger behavior for WhatsApp quotation sending.
- Voice/text-to-speech requirements, timeline, and commercials.

### Not in Scope

- Automatic pricing decision-making without Ming Medical control.
- Clinical decision replacement by AI without doctor/founder oversight.
- Unrestricted external medical web sourcing.

---

## The Design Principle

This project is designed around one practical principle: structure the workflow so experts can focus on judgment, not repetitive formatting work. Ming Medical's clinical expertise remains the core value driver. MAIA's role is to make that expertise more repeatable and operationally scalable.

As Ming Medical grows across direct and partner-doctor channels, process clarity becomes as important as medical knowledge quality. A structured intake-to-proposal-to-order flow helps reduce bottlenecks, improve consistency, and protect governance as volume increases.

The investment here buys operational structure: faster drafting, clearer approval control, safer source boundaries, and cleaner handoff into execution. It creates a stronger foundation for future phases without overpromising automation where human decision-making should remain central.

_MAIA structures the workflow. Humans remain the decision-makers._
