---
owner:
  - Gareth
status: draft
last_reviewed: 2026-04-07
client: Ming Medical
meeting_date: 2026-04-02
---

# MAIA for Ming Medical

### From Founder-Led Drafting to Structured Clinical Proposal Operations

_Prepared by Mindhive for Ming Medical SDN BHD_  
_Investment: RM 35,000_

---

## Who Ming Medical Is

Founded in 1999, Ming Medical SDN BHD is a Selangor-based regenerative medicine company — and one of the few in Malaysia with its own in-house R&D and production capability. Recognised as a BioNexus company by the Malaysia Bioeconomy Development Corporation, Ming Medical specialises in Wharton's Jelly Mesenchymal Stem Cells (WJ-MSC), Natural Killer (NK) cells, exosomes, and telomere exosomes.

The company is led by Sean, its founder — a former Managing Director of Informix (later acquired by IBM), who spent the 1990s in database technology before pivoting to regenerative medicine. Sean is not new to AI. He understands what it can do, and he called on MAIA precisely because he knows the gap between current and possible is now closable.

Ming Medical's operating philosophy is direct: conventional medicine treats symptoms. Ming Medical repairs and rebuilds the underlying organ or tissue. Their patients are not first-time seekers. They are people who have already gone through mainstream treatment channels and found no resolution. As Sean put it: "If they have not failed, they will not come to us." Ming Medical is the last home.

Tagline: _"Giving HOPE where there is none."_

---

## Before MAIA: How Ming Medical Operates Today

Ming Medical's core clinical capability is exceptional — but its proposal workflow is a one-man system running at the edge of its capacity.

### The Founder as the Proposal Engine

When a case arrives, Sean receives the medical report, interprets it using his clinical knowledge, maps the findings to CPG (Clinical Practice Guidelines) logic, and manually drafts a proposal — without auto-pricing, without templates, without delegation. This takes roughly two hours per case. As case volume grows across direct patients and international partner-doctor channels, the process is not holding.

As Sean said directly: _"I cannot continue."_

The clinical reasoning is his. The CPG logic is his. The proposal format is his. Everything lives in one person's head.

### The "Last Resort" Patient Reality

Ming Medical's patients arrive carrying complexity that mainstream medicine has set aside. A 71-year-old woman treated over three years arrived with MDS blood cancer, lung fibrosis, and Alzheimer's — conditions requiring a careful balance between NK cells (which clear cancer but worsen lung inflammation) and stem cells (which repair lung tissue but can accelerate cancer). By 2025, her MDS was no longer detected. Incurable cancer — gone.

Every case like this requires a proposal that is simultaneously:
- **Patient-facing**: simple, no jargon, emotionally grounded — "Tell me what's my problem. Tell me the solution. Tell me what I need to pay."
- **Doctor-facing**: clinically precise — dosage, duration, preconditions, cell type, delivery mechanism.

These are two different outputs. Both must be correct. Both currently depend on Sean.

### The Mixed-Input Reality

Reports arrive in varied formats — PDFs, image-based scans, long text summaries, occasional voice recordings. They arrive in English and Arabic. Some are clean. Many are not. Some patients miss attachments and send follow-ups days later. There is no structured intake. Every case begins from zero.

### The Competitive Differentiator Sean Needs to Protect

What sets Ming Medical apart from other stem cell providers is not credentials — it is production depth. Competitors buy exosomes in small cosmetic doses (50 billion units). Ming Medical manufactures their own, at 200 billion units — enough to make clinical-grade treatment possible at scale. Sean and his family use the products themselves. This capability cannot be replicated easily, but it can be outpaced operationally if the proposal bottleneck is not resolved.

### The CPG Gap

The current CPG file is a simplified version. Sean is rebuilding it with the full variable set the system will need: age, gender, condition severity, dosage, duration, preconditions, and treatment interaction logic. Until the machine-ready CPG is ready, the system cannot draft. This remains the critical path item.

---

## After MAIA: What Changes

**A coordinator receives a new case** and uploads the medical report to a structured intake flow. MAIA parses the input — PDF, image, text — extracts the key clinical signals, and maps them to the CPG. A draft proposal is generated in Ming Medical's approved format: patient-facing language, no jargon, treatment rationale included.

**Sean or a doctor reviews the draft.** Pricing is not generated. Pricing is never generated. Final approval stays with Ming Medical. MAIA handles the repetitive structure. Sean handles the clinical judgment.

**A partner-doctor case follows the same flow.** Whether the case comes from a patient in Petaling Jaya or a partner doctor in the Middle East, the intake, mapping, and draft generation process is consistent. Response time shortens. Quality holds.

**A coordinator can update the proposal** when a patient submits additional reports later. The system re-reads the new input and revises the draft without starting from scratch.

**Management sees the workflow clearly** — draft created, reviewed, approved, sent — with a clean audit trail. The operation is no longer dependent on one person's memory and availability.

---

## Feature Deep Dive

### 1. Report-to-Proposal Copilot

The core capability. This is the thing Sean cannot continue doing alone.

**What it does:** Ingests medical report inputs (PDF, image, text, multilingual), extracts key clinical signals, maps to approved CPG logic (condition, dosage, duration, age/gender variables), and generates a proposal draft in the agreed format — both patient-facing and doctor-facing as required.

**What it won't do:** It does not auto-finalise treatment decisions. It does not replace Sean's clinical judgment. It drafts — Sean decides.

**Why it matters:** Each case currently takes ~2 hours of Sean's time. MAIA turns that into a draft-and-review cycle. As volume grows, the system scales. Sean doesn't.

### 2. Human-Controlled Review and Pricing Workflow

**What it does:** Supports a clear draft → review → approve flow. Pricing is always entered manually by Ming Medical or the treating doctor. No commercial value is auto-generated.

**What it won't do:** Auto-price. Auto-approve. Bypass any human decision point.

**Why it matters:** Clinical and commercial trust depend on keeping control where it belongs. This is not a cost-cutting feature. It is a quality and governance feature.

### 3. Guardrailed Knowledge Boundaries

Trust in the output depends entirely on the reliability of the source.

**What it does:** Restricts AI guidance to Ming Medical's CPG and a pre-approved list of trusted medical websites/links. No external medical sourcing outside the agreed boundary.

**What it won't do:** Pull from general web searches, unverified medical sources, or unapproved third-party content.

**Why it matters:** Ming Medical's patients are last-resort cases. An output grounded in the wrong source has real consequences. Guardrails are not optional.

### 4. Proposal-to-Order Operational Handoff

The workflow does not end at the document.

**What it does:** Once a proposal is approved and the patient confirms, MAIA supports a clean handoff into order creation — reducing manual re-entry and keeping the case traceable from intake to execution.

**What it won't do:** Automate fulfillment or downstream logistics without explicit scope expansion.

**Why it matters:** Closing the loop from proposal to order removes one more manual step and gives the operation a cleaner, auditable trail.

---

## Scope Summary

### Included in RM 35,000

- **Proposal copilot core flow** — report intake (PDF/image/text), CPG-aligned mapping, proposal draft generation in agreed template format.
- **Review and approval workflow baseline** — draft/review/approve structure with manual pricing control retained.
- **Knowledge guardrails baseline** — CPG + trusted approved links only; no open web sourcing.
- **Base proposal-to-order operational handoff** — confirmed proposal support into OMS order creation flow.
- **Multi-language baseline support** — English, Mandarin, Arabic (final implementation subject to approved examples and UAT).

### Designed For, Not Included (Phase 2)

- Advanced fulfillment tracking and broader post-order operations beyond Phase 1 boundaries.
- Expanded finance automation layers beyond baseline order handoff.
- Advanced analytics/reporting modules unless explicitly added to scope.

### Requires Clarification

- Final machine-ready CPG schema — columns, variables, logic rules, ownership of future updates.
- Approved trusted websites/links list and governance process.
- Final proposal template variants — patient-facing vs doctor-facing structure.
- Exact WhatsApp quotation trigger behaviour — auto vs manual send.
- Voice/text-to-speech requirements, timeline, and commercials.

### Not in Scope

- Automatic pricing decision-making without Ming Medical control.
- Clinical decision replacement by AI without doctor/founder oversight.
- Unrestricted external medical web sourcing.

---

## The Design Principle

Sean has spent 26 years building clinical knowledge that competitors cannot buy. That knowledge lives in the CPG, in his pattern recognition, and in his judgment on complex multi-condition cases. MAIA's role is not to replicate that knowledge — it is to operationalise it.

The proposal system MAIA builds gives Ming Medical the ability to handle more cases without Sean writing every one. It gives partner doctors consistent, reliable outputs across geographies. It gives coordinators a structured intake process instead of ad-hoc message threads.

As volume grows and as Ming Medical's international channels — particularly Middle East and partner-doctor networks — expand, the difference between a scalable operation and a founder-dependent one becomes the difference between growth and a ceiling.

_MAIA structures the workflow. Sean remains the clinical authority._

---

## See Also

- [[Requirement Gathering Output - Ming Medical - 2026-04]] — structured requirements and open questions
- [[Ming Medical - Customer Profile]] — company background and stakeholder contacts
- [[09 - Intake & Triage/Request Intake Inbox]] — feature intake log
- [[02 - PM Playbook/Templates/[Template] PRD]]
