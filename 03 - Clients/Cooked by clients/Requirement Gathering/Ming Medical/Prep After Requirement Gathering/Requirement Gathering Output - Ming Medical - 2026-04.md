---
owner:
  - Gareth
status: draft
last_reviewed: 2026-04-06
client: Ming Medical
meeting_date: YYYY-MM-DD
transcript_ref: "[[Ming Medical Meeting Transcript - YYYY-MM-DD]]"
pain_points_sources:
  - "[[Ming Medical Meeting Transcript - YYYY-MM-DD]]"
  - "[[Ming Medical - GTM Brief Transcript]]"
  - "[[Ming Medical - GTM Proposal]]"
---

# Requirement Gathering Output - Ming Medical - 2026-04

| Field | Details |
|-------|---------|
| **Client** | MING Medical Sdn Bhd |
| **Meeting date** | YYYY-MM-DD (from transcript filename placeholder) |
| **Attendees** | Brendan Ou Yong (MAIA); client participant(s) present in transcript include Sean; full attendee list TBC from finalized meeting notes |
| **Purpose** | Requirement gathering for proposal copilot flow (medical report -> CPG mapping -> proposal draft -> review -> order creation) |
| **Raw transcript** | [[Ming Medical Meeting Transcript - YYYY-MM-DD]] |

---

## Pain points - from meeting transcripts

Synthesised from **verbatim / near-verbatim** discussion in:
- **RG** - [[Ming Medical Meeting Transcript - YYYY-MM-DD]]
- **GTM** - [[Ming Medical - GTM Brief Transcript]], [[Ming Medical - GTM Proposal]]

### Founder bottleneck and scalability
- Sean is currently the "proposal engine" and manually interprets reports, maps CPG logic, and drafts proposals.
- Proposal drafting is repetitive and high-effort ("normally... two hours", sometimes longer).
- Process quality depends on Sean's clinical memory and judgment, which is hard to delegate.

### Input quality and format variability
- Reports arrive in mixed formats (PDF, image, long text; occasional voice recording).
- Report completeness is inconsistent, and follow-up information may arrive later in separate messages/files.
- Inputs are multilingual (mostly English, with Arabic cases and non-standard wording).

### CPG and treatment logic complexity
- Current CPG is not yet in the final machine-ready structure.
- Treatment recommendations depend on multiple variables (condition, age, severity, dosage, duration, preconditions).
- Client expects strict mapping to CPG and does not want unapproved external medical sources used.

### Proposal consistency and customer communication
- Proposal needs to remain simple and understandable for patients, while still clinically useful for doctors.
- Pricing remains manual and controlled by doctors/Ming Medical (must not auto-populate).
- There is concern about consistency across doctors and channels as volume increases.

### Workflow governance and scope risk
- Scope-control risk is high due to evolving requests; GTM flagged finance-side strictness and change sensitivity.
- Team must capture additional asks without committing during live sessions, then route through internal review.

---

## E2E Workflow - Proposal Generation (Main Priority)

> This is the main priority because it is the core bottleneck and the main value promised in Phase 1.

| Step | Today (Current) | With MAIA |
|------|----------------|-----------|
| Inbound enquiry | Patient / partner doctor sends details via WhatsApp or other channels | Same channels remain, but report intake is structured into MAIA workflow |
| Medical report intake | Sean manually receives and reads mixed-format files | Ming Medical / doctor uploads report (PDF/image/text) to MAIA |
| Clinical mapping | Sean manually maps report to CPG knowledge | MAIA parses report and maps to CPG logic (condition, dosage, duration, side effects) |
| Draft creation | Sean manually writes proposal document | MAIA generates draft in approved template format |
| Pricing | Manual by Sean/doctors | Still manual by Ming Medical/doctors (no auto-pricing) |
| Approval | Informal/manual review | Draft -> review -> approve workflow with audit visibility |
| Output to customer | Proposal shared manually | Approved output sent in agreed channel (including WhatsApp quotation flow) |
| Order creation | Follow-up manual step after acceptance | Sales order created from confirmed proposal in base OMS flow |

## E2E Workflow - Partner Doctor Track

> This track is critical because Ming Medical serves both direct patients and overseas partner doctors.

| Step | Today (Current) | With MAIA |
|------|----------------|-----------|
| Partner doctor submits case | Doctor sends patient report to Ming Medical | Doctor/Ming Medical submits report to MAIA intake flow |
| Proposal generation | Sean manually creates proposal | MAIA generates draft using CPG rules |
| Commercial completion | Doctor/Ming Medical inserts price manually | Same manual pricing control remains |
| Patient confirmation | Partner doctor closes with their patient | Same commercial relationship remains |
| Order trigger | Partner doctor notifies Ming Medical | Confirmed proposal becomes order trigger in OMS |

---

## Captured Requirements

### Sales Workflow
- Generate proposal draft from report + CPG mapping.
- Keep proposal language patient-friendly for client-facing outputs.
- Support update/revision when additional documents are uploaded.
- Preserve manual control over final commercial values.

### Finance Workflow
- Pricing column remains manual input by Ming Medical/doctors.
- Audit visibility for generated/edited proposal outputs.
- Maintain traceability from approved proposal to order.

### Logistics / Fulfillment Workflow
- Phase 1 focus is up to sales order creation; deep fulfillment details remain later-scope unless explicitly expanded.
- Partner doctor pathway must remain supported for downstream ordering.

### Integration Requirements
- WhatsApp-aligned workflow for intake/output communications.
- Knowledge source guardrails: CPG + trusted approved websites only.
- Hosted in Ming Medical infrastructure context (per GTM proposal baseline).

### Special Workflows
- Doctor Q&A mode bounded to approved knowledge.
- Multi-language support baseline: English, Mandarin, Arabic.
- Potential voice/text-to-speech ask captured as separate scoped enhancement (not committed in baseline).

---

## Gaps & Open Questions

| # | Question | Raised by | Status |
|---|----------|-----------|--------|
| 1 | Final machine-ready CPG schema (columns, variables, logic rules) | Ming Medical + MAIA | open |
| 2 | Exact approved medical websites list and ownership of future updates | Ming Medical | open |
| 3 | Final proposal template structure and output variants (doctor vs patient view) | Ming Medical + MAIA | open |
| 4 | Who owns approval at each stage (Sean vs partner doctor vs finance) | Ming Medical | open |
| 5 | Exact WhatsApp quotation trigger behavior (auto vs manual) | MAIA + Ming Medical | open |
| 6 | Order-creation responsibility after acceptance (manual trigger vs auto flow) | MAIA + Ming Medical | open |
| 7 | Voice/text-to-speech requirement timing and commercial scope | Ming Medical + MAIA | open |
| 8 | Full security/privacy handling for report data and retention policy | Ming Medical + MAIA | open |

---

## Client preparation - samples & documents (briefed)

MAIA has briefed Ming Medical to prepare the following **samples** to run a credible demo and UAT cycle.

### Core knowledge and templates
- [ ] **Latest CPG master file** - current machine-target source with variables and rule logic.
- [ ] **Blank proposal template** - final structure MAIA should draft into.
- [ ] **Trusted medical websites/links list** - explicit approved external sources MAIA may reference.

### Training and validation samples
- [ ] **3-5 anonymised medical reports** - representative real-world input cases (mixed complexity).
- [ ] **Matched final proposal outputs for each sample** - expected "answer key" outputs for quality calibration.
- [ ] **(Optional) redacted SO/invoice sample** - if OMS field alignment is required from day one.

---

## Demo Readiness - product demo

### Client samples -> what we show in demo

| Product demo scenario | Client sample / data to have first | If missing |
|----------------------|-----------------------------------|------------|
| Report intake and CPG mapping | 3-5 anonymised medical reports + latest CPG | Use synthetic medical samples and clearly label as illustrative |
| Proposal generation in client format | Blank template + matched expected outputs | Use draft generic template and flag structure still pending |
| Guardrailed doctor Q&A | Approved websites list + CPG | Demo CPG-only mode and mark external source list as pending |
| Proposal to order handoff | Optional SO/invoice sample | Use baseline OMS fields and log mapping gaps |

### Scenarios to rehearse / build in demo environment (MAIA)
- [ ] Mixed-format intake (PDF + image + long text)
- [ ] Proposal draft generation with manual pricing insertion
- [ ] Revision flow after additional report upload
- [ ] Partner doctor flow (doctor receives and confirms)
- [ ] Multilingual output check (EN/中文/العربية baseline)

### Demo day checklist (quick)
- [ ] Confirm which client samples have arrived and mark the checklist
- [ ] State clearly which demo parts are real client data vs illustrative
- [ ] Capture all unresolved questions into **Gaps & Open Questions**

---

## Next Action Checklist

- [ ] Send consolidated client document request message in WhatsApp group
- [ ] Convert requirements -> feature requests (log in [[09 - Intake & Triage/Request Intake Inbox]])
- [ ] Brief tech team on required flows and expected outputs
- [ ] Brief tech team on feasibility constraints and scope boundaries
- [ ] Prepare demo script using real samples where available
- [ ] Prepare updated proposal scope notes for client alignment
- [ ] Draft SOW with explicit inclusions/exclusions and acceptance logic
- [ ] Prepare PRD and UAT test cases from SOW baseline
- [ ] Align sign-off flow: proposal -> SOW -> build -> UAT -> go-live

---

## Artefact Tracker

| Artefact | Owner | Status | Due |
|----------|-------|--------|-----|
| Latest CPG master file | Ming Medical | pending client | TBC |
| Blank proposal template | Ming Medical | pending client | TBC |
| Approved trusted websites list | Ming Medical | pending client | TBC |
| 3-5 anonymised report samples | Ming Medical | pending client | TBC |
| Matched expected proposal outputs | Ming Medical | pending client | TBC |
| Optional redacted SO/invoice sample | Ming Medical | optional | TBC |
| Feature request log | MAIA PM | not started | TBC |
| Tech brief - requirements | MAIA PM | not started | TBC |
| Tech brief - feasibility | MAIA product + tech | not started | TBC |
| Demo script and scenarios | MAIA PM | not started | TBC |
| SOW document | MAIA PM | not started | TBC |
| PRD draft | MAIA PM | not started | TBC |

**Draft client message (WhatsApp):**  
Hi Sean and team, thanks again for the session. Can you share these when convenient: latest CPG file, blank proposal template, 3-5 anonymised medical reports, matched final proposal outputs for those same samples, and the list of trusted medical websites/links MAIA is allowed to refer to. Optional: one redacted SO/invoice sample if you want OMS field matching. Thank you.

---

## See Also

- [[Ming Medical Meeting Transcript - YYYY-MM-DD]] - raw transcript
- [[Ming Medical Discovery Call - YYYY-MM-DD]] - structured notes
- [[Customer Narrative - Ming Medical]] - client-facing narrative
- [[09 - Intake & Triage/Request Intake Inbox]] - feature intake
- [[02 - PM Playbook/Templates/[Template] PRD]]
- [[02 - PM Playbook/Templates/[Template] Discovery Requirement Gathering]]
