---
name: req-gathering-output
description: >
  Processes a requirement gathering meeting transcript into TWO output documents for the MAIA Knowledge Base: (1) the internal Requirement Gathering Output — structured PM doc with pain points, E2E workflow, captured requirements, gaps, demo readiness, and next action checklist; and (2) the Customer Narrative — a client-facing proposal story document that tells the before/after MAIA story in prose with feature deep-dives and scope summary. Use this skill whenever the PM has just finished a discovery or requirement gathering session with a client. Trigger on phrases like "process the transcript", "post req gathering", "requirement gathering output", "customer narrative", "turn this transcript into", "just had discovery meeting", "discovery output", "write up after meeting".
---

# Requirement Gathering Output Skill

After a requirement gathering session with a client, this skill reads the meeting transcript (and any supporting docs) and produces **two output files**:

1. **Requirement Gathering Output** — internal PM document (structured, operational)
2. **Customer Narrative** — client-facing proposal story document (prose, persuasive)

---

## What you need from the user

Before starting, confirm you have:

1. **Client name** — as it should appear in the KB (e.g. "JDX Tea (九鼎香)", "Ming Medical", "Thermac Engineering")
2. **Transcript file path** — the verbatim transcript file (Fireflies export or equivalent)
3. **Supporting docs** (optional but valuable if available):
   - GTM proposal
   - GTM brief transcript
   - Discovery call questionnaire / pre-meeting prep notes
4. **Meeting date** — YYYY-MM-DD
5. **Attendees** — names and roles from both sides
6. **Investment amount** — the RM figure from the proposal, for the Customer Narrative header (if not known, leave as `RM [TBC]`)

If the user doesn't provide these upfront, ask for the transcript path and client name at minimum — you can infer the rest from the transcript.

---

## Where to save the outputs

Both files go in the same client folder:

```
03 - Clients/[Active or Discovery subfolder]/Requirement Gathering/[Client Name]/Prep After Requirement Gathering/
  ├── Requirement Gathering Output - [Client Short Name] - YYYY-MM.md
  └── Customer Narrative - [Client Short Name].md
```

Check the existing folder structure for the client first — don't guess. If a `Prep After Requirement Gathering/` folder exists, save there. If not, ask the user.

---

## Output 1: Requirement Gathering Output

### How to synthesise

Read the transcript carefully. Extract signal from a long, sometimes meandering conversation and structure it for a PM who needs to brief a tech team, prepare a demo, and write a proposal.

- **Pain points** — verbatim or near-verbatim. These are the client's words, not MAIA's interpretation. Group thematically. Quote the speaker where the phrasing is sharp.
- **E2E Workflow** — map every major business flow as-is vs with MAIA. One table per flow. Be concrete — name the tools, the WhatsApp groups, the manual steps, the people.
- **Captured Requirements** — factual, grouped by area (Sales, Finance, Logistics, Integration, Special Workflows). These become the input to feature requests.
- **Gaps & Open Questions** — anything unresolved, ambiguous, or needing follow-up with client or tech team.
- **Client preparation** — every sample or document the client needs to send before a credible demo. Specific to their industry and workflow, not generic.
- **Demo Readiness** — map each client sample to the MAIA demo scenario it enables. Note the fallback if missing.
- **Next Action Checklist** — always include the standard PM actions (feature request log, tech brief, demo prep, proposal, SOW).
- **Artefact Tracker** — one row per deliverable with owner, status, due.
- **Client message** — draft a short WhatsApp/email to request samples. Friendly, short, no urgency pressure.

### Template

```markdown
---
owner: [PM Name if known, else leave blank]
status: draft
last_reviewed: [today's date YYYY-MM-DD]
client: [Client Name]
meeting_date: YYYY-MM-DD
transcript_ref: "[[Transcript File Name]]"
pain_points_sources:
  - "[[Transcript File Name]]"
  - "[[GTM doc if used]]"
---

# Requirement Gathering Output — [Client Name] — YYYY-MM

| Field | Details |
|-------|---------|
| **Client** | [Full legal / trading name] |
| **Meeting date** | YYYY-MM-DD |
| **Attendees** | [Name (MAIA), Name (MAIA), Name (Client)] |
| **Purpose** | [e.g. Initial requirement gathering — business workflow discovery] |
| **Raw transcript** | [[Transcript File Name]] |

---

## Pain points — from meeting transcripts

Synthesised from **verbatim / near-verbatim** discussion in:
- **RG** — [transcript reference]
- **GTM** — [GTM doc reference, if used]

These are **their** problems as stated — not MAIA's interpretation — grouped for proposal, demo, and scope.

### [Thematic group 1]
- [pain point]

### [Thematic group 2]
- ...

---

## E2E Workflow — [Primary Flow Name] (Main Priority)

> [One sentence on why this is the main priority flow.]

| Step | Today (Current) | With MAIA |
|------|----------------|-----------|
| [Step] | [Current state] | [MAIA state] |

[Repeat for each major flow identified.]

---

## Captured Requirements

### Sales Workflow
-

### Finance Workflow
-

### Logistics / Warehouse Workflow
-

### Integration Requirements
-

### Special Workflows
-

---

## Gaps & Open Questions

| # | Question | Raised by | Status |
|---|----------|-----------|--------|
| 1 | | | open |

---

## Client preparation — samples & documents (briefed)

MAIA has briefed [Client] to prepare the following **samples**. These are inputs for a credible product demo. Check off when received.

**Demo rule of thumb:** If a sample is still missing, demo that flow using clearly labelled synthetic data — and note the gap in the demo recap.

### Commercial documents
- [ ] **[Document type]** — [what it shows / why needed]

### Customer data
- [ ] **[Data type]** — [what it shows / why needed]

---

## Demo Readiness — product demo

### Client samples → what we show in demo

| Product demo scenario | Client sample / data to have first | If missing |
|----------------------|-----------------------------------|------------|
| [Scenario] | [Sample needed] | [Fallback] |

### Scenarios to rehearse / build in demo environment (MAIA)
- [ ] [Scenario 1]

### Demo day checklist (quick)
- [ ] Confirm which samples arrived; update checkboxes in **Client preparation**
- [ ] Open with "today we're using your samples / anonymised examples — here's what's real vs illustrative"
- [ ] Capture gaps and questions live → **Gaps & Open Questions**

---

## Next Action Checklist

- [ ] Convert requirements → feature requests (log in [[09 - Intake & Triage/Request Intake Inbox]])
- [ ] Brief tech team on requirements and expected flows
- [ ] Brief tech team on feasibility — flag constraints
- [ ] Prepare product demo (see **Demo Readiness** above)
- [ ] Prepare proposal (high-level scope, for client alignment)
- [ ] Draft SOW (detailed scope, flows, constraints, exclusions)
- [ ] SOW → PRD + internal specs (for implementation and UAT test cases)
- [ ] Align SOW with client (sign-off that scope = how the project is closed and tested)

---

## Artefact Tracker

| Artefact | Owner | Status | Due |
|----------|-------|--------|-----|
| Samples & documents from client (see **Client preparation** above) | [Client contact] | pending client | |
| Feature request log | | not started | |
| Tech brief — requirements | | not started | |
| Tech brief — feasibility | | not started | |
| Demo script / scenarios | | not started | |
| Proposal deck | | not started | |
| SOW document | | not started | |
| PRD | | not started | |

  [Draft WhatsApp/email message to client requesting samples — friendly, short, list what you need, no urgency pressure]

---

## See Also

- [[Transcript File Name]] — raw transcript
- [[Discovery Call / meeting notes file]] — structured notes from this session
- [[Customer Narrative - [Client Short Name]]] — client-facing proposal narrative (paired doc)
- [[09 - Intake & Triage/Request Intake Inbox]] — log feature requests here
- [[02 - PM Playbook/Templates/[Template] PRD]] — next step after SOW
- [[02 - PM Playbook/Templates/[Template] Requirement Gathering Output]] — template this file was based on
```

### Quality checks
- Every pain point is grounded in the transcript — not inferred without basis
- E2E workflow tables name the actual tools, WhatsApp groups, and manual steps — not vague placeholders
- Gaps table captures the real unresolved questions from the meeting
- Client preparation items are specific to this client's industry and workflow
- YAML frontmatter filled in; wikilinks use `[[double bracket]]` format
- Customer Narrative cross-linked in See Also

---

## Output 2: Customer Narrative

### What this document is

The Customer Narrative is a **client-facing proposal story** — a polished, well-written document that tells the before/after MAIA story for this specific client. It is not a bullet-point requirements list. It reads like a business case written by someone who deeply understands the client's operations.

The gold standard reference is `Customer Narrative - Thermac.md` in the Thermac RG folder. Study its tone and structure.

### Writing principles

**Prose first.** Paragraphs, not bullets (except in Scope Summary). Write in clear, direct business English. Named sections ("The Scheduling Black Box") are preferred over generic headings. Every sentence earns its place.

**Specific and concrete.** Name real systems (Monday.com, WhatsApp, SQL, QSoft, Excel). Name real client contacts and roles. Reference real numbers from the transcript (order volumes, team size, contract values). Don't be vague where you can be specific.

**Before MAIA = empathy.** The pain sections should make the reader feel the problem — the chaos, the manual effort, the risk, the dependence on individual memory. Give each pain its own named section with a tight, evocative heading.

**After MAIA = story.** Use day-in-the-life scenarios written in third person ("A coordinator opens MAIA in the morning and sees..."). Bold role names. Show what concretely changes for each pain. This section should feel exciting to the client.

**Feature Deep Dive = honesty.** Each feature needs three things: what it does, what it won't do (set expectations), and why it matters (connect to the specific business pain). Don't oversell. Honest constraints build trust.

**Scope Summary = clarity.** This is the contract-like section. Be exhaustive about what's in, what's out, what's deferred to Phase 2, and what still needs clarification. The client should feel safe that nothing is hidden.

**Closing = philosophy.** End with a short design principle paragraph that connects the client's growth story to the gap MAIA fills. Close with the italic tagline: `_MAIA structures the workflow. Humans remain the decision-makers._`

### Template

```markdown
# MAIA for [Client Name]

### [Short evocative tagline — the transformation in ~5 words, e.g. "Bringing Structure to Service Operations"]

_Prepared by Mindhive for [Client Full Legal Name]_ _Investment: RM XX,XXX_

---

## Who [Client Short Name] Is

[2–4 paragraphs covering:
- Company background: founded when, where headquartered, what they do
- Their business arms (product side vs service side, or equivalent)
- Scale and key customer references (named if known from transcript)
- Why the service/operational side is where MAIA matters most
- One paragraph on which parts run on standard MAIA modules vs where custom capability is needed]

---

## Before MAIA: How [Client] Operates Today

[1–2 sentence intro on the overall state of operations — not a list, a framing sentence.]

### [Named pain point 1 — evocative title, e.g. "The Scheduling Black Box"]

[2–3 paragraphs: tell the story of this pain. What happens day to day? What does the coordinator/salesperson/manager experience? What's the consequence of the current approach — the risk, the cost, the dependence on memory or manual effort?]

### [Named pain point 2 — e.g. "The Quoting Time Sink"]

[Same structure. Each section is its own contained story.]

### [Continue for all major pain areas identified in the transcript]

---

## After MAIA: What Changes

[Day-in-the-life narrative. One paragraph per key scenario. Start each with a role name in bold or context sentence. Write in third person. Make it concrete — show what they actually see, click, or receive in MAIA. End each scenario by connecting back to the pain it resolves.]

---

## Feature Deep Dive

### 1. [Feature Name] — [Optional: short tagline]

[2–3 sentences introducing what this feature is and why it matters for this client specifically.]

**What it does:** [Concrete, specific. Name the fields, the views, the outputs. If it generates a PDF — say what's in it. If it surfaces data — say what data and where.]

**What it won't do:** [Honest boundaries. What the system won't automate, won't enforce, won't do without human input. This is important for trust.]

**Why it matters:** [Connect directly to the pain point it solves. Reference the client's situation specifically — their WhatsApp group, their Monday.com calendars, their Excel-based pricing, etc.]

### 2. [Next feature]

[Same structure. Number each feature. Cover every major feature in scope, in order of business importance.]

---

## Scope Summary

### Included in RM XX,XXX

- **[Feature]** — [one-line description of what's built]
- **[Feature]** — ...

### Designed For, Not Included (Phase 2)

- **[Feature]** — [why it's deferred; note if Phase 1 architecture is designed to extend into it]

### Requires Clarification

- **[Item]** — [the specific open question that needs answering before scope is final]

### Not in Scope

- [Item]
- [Item]

---

## The Design Principle

[2–3 paragraphs:
- Paragraph 1: MAIA's philosophy — it structures the environment, not replaces the team. Humans stay in the driver's seat.
- Paragraph 2: The client's growth story — where they started, how far they've come, what the gap is between operational ambition and operational infrastructure.
- Paragraph 3: What the investment buys — the specific things this build delivers, framed as the foundation for what comes next.]

---

_MAIA structures the workflow. Humans remain the decision-makers._
```

### Quality checks
- No section is left vague or generic — every claim is specific to this client
- "Before MAIA" section headings are evocative, not generic ("The Scheduling Black Box" not "Scheduling Issues")
- "After MAIA" reads as scenarios, not a feature list
- Feature Deep Dive includes all three parts: what it does, what it won't do, why it matters
- Scope Summary is complete and honest — nothing hidden, nothing oversold
- Investment amount matches the GTM proposal if available
- Closing tagline is present
- No YAML frontmatter needed (this is a client-facing doc, not a KB internal page)
- Saved as `Customer Narrative - [Client Short Name].md` in the same `Prep After Requirement Gathering/` folder
