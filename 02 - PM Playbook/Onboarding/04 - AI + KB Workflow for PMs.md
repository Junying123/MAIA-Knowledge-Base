---
owner: Gareth
status: approved
last_reviewed: 2026-02-28
---

# AI + KB Workflow for PMs

## The Core Loop

Every AI-assisted PM task follows the same pattern:

```
Open KB → Find relevant template or context → Open Cursor → Reference file(s) → Get AI output → Paste into Obsidian
```

You are not replacing your thinking. You are removing the blank-page problem and the repetitive formatting work, so you can focus on the substance.

**The rule:** AI drafts, you review and edit. Never ship AI output without reading it.

---

## How to Give Cursor Context

When chatting in Cursor, use `@` to reference specific files from your vault:

- `@[Template] User Story` — loads the user story template
- `@Glossary` — loads the MAIA glossary
- `@[Client Name]` — loads context from a client folder
- `@Quote-to-Cash Flow` — loads the core workflow doc

You can reference multiple files in one prompt:

```
@[Template] User Story @Glossary

Write a user story for this feature: [describe feature]
```

Cursor will read both files and use them as context when generating output.

---

## Task Workflows

### Writing a User Story

**When to use:** You have a feature request or requirement from a client and need to turn it into a structured user story.

**Steps:**
1. Open `@[Template] User Story` and `@Glossary` in Cursor
2. Paste in the raw client requirement or your notes
3. Prompt: *"Using our user story template and MAIA glossary, write a user story for: [requirement]"*
4. Review output — check that MAIA-specific terms are used correctly
5. Create a new note in the appropriate folder in Obsidian
6. Paste and update frontmatter

**Example prompt:**
```
@[Template] User Story @Glossary

The client wants to be able to partially fulfil a sales order — shipping
some line items now and the rest later. Write a user story following our
template format.
```

---

### Writing a PRD

**When to use:** You have an approved feature concept and need a full product requirements document.

**Steps:**
1. Open `@[Template] PRD` and the relevant `@[Client Name]` context folder
2. Summarise the feature scope in your prompt
3. Prompt: *"Using our PRD template and the client context, draft a PRD for: [feature]"*
4. Review and fill in gaps the AI can't know (e.g. specific constraints, agreed scope)
5. Save to the appropriate client or product folder

**Example prompt:**
```
@[Template] PRD @Acme Corp

Draft a PRD for a bulk invoice export feature. The client needs to export
multiple invoices as a single PDF for their finance team. Use our PRD
template structure.
```

---

### Creating QA Test Scenarios

**When to use:** A feature is ready for QA and you need to write test scenarios.

**Steps:**
1. Open `@[Template] QA Scenario` and `@Known Limitations`
2. Describe the feature being tested
3. Prompt: *"Using our QA scenario template, write test scenarios for: [feature]. Also flag any known MAIA limitations that might affect testing."*
4. Review and add edge cases you know from experience
5. Save to `04 - QA & Known Issues/`

**Example prompt:**
```
@[Template] QA Scenario @Known Limitations

Write QA test scenarios for the credit note creation flow. Include happy
path and edge cases. Flag any known limitations around credit notes.
```

---

### Requirement Gathering Prep

**When to use:** You have a client session coming up and need to prepare.

**Steps:**
1. Open `@[Client Name]` context and `@Requirement Gathering Process`
2. Describe what the session is about
3. Prompt: *"Based on the client context and our requirement gathering process, prepare a question list and agenda for a session about: [topic]"*
4. Review and tailor to what you already know

**Example prompt:**
```
@Acme Corp @Requirement Gathering Process

Prepare a structured agenda and question list for a requirement gathering
session about their returns and refunds process. They are currently on
Phase 2 of implementation.
```

---

### Writing Meeting Notes

**When to use:** After any client or internal meeting, to produce structured notes.

**Steps:**
1. Open `@[Template] Meeting Notes`
2. Paste your raw notes or bullet points into the prompt
3. Prompt: *"Using our meeting notes template, structure these raw notes into a clean, formatted meeting record: [paste notes]"*
4. Review and add any action items you missed
5. Save to the relevant client folder or `02 - PM Playbook/`

**Example prompt:**
```
@[Template] Meeting Notes

Structure these raw notes from today's call with Acme Corp into our
meeting notes format:

- Discussed returns flow
- They want automated credit note on approval
- John (their PM) to send current process doc by Friday
- We flagged limitation: one credit note per invoice only
- Follow up: check if workaround is acceptable
```

---

### Summarising a Client Brief

**When to use:** You've received a long brief, RFP, or requirement document from a client and need to extract the key points.

**Steps:**
1. Paste the client document content into your Cursor chat
2. Prompt: *"Summarise this client brief. Extract: (1) key requirements, (2) business context, (3) any MAIA-specific considerations, (4) open questions."*
3. Review and save the summary to the client folder

**Example prompt:**
```
@Glossary

Summarise this client brief. Extract:
1. Key business requirements
2. Current process they are replacing
3. Any features that might not exist in MAIA (flag these)
4. Open questions that need follow-up

[paste client document here]
```

---

### Gap Analysis

**When to use:** A client wants a feature and you need to check whether MAIA supports it.

**Steps:**
1. Open `@Known Limitations` and `@[Template] Feature Gap Analysis`
2. Describe what the client wants
3. Prompt: *"Given our known MAIA limitations, analyse whether this client requirement is supported and what gaps exist: [requirement]"*
4. Review carefully — the AI may not know about very recent product changes
5. Save to `04 - QA & Known Issues/Feature Gap Tracker`

**Example prompt:**
```
@Known Limitations @[Template] Feature Gap Analysis

The client wants to: create multiple credit notes against a single invoice,
with different amounts and different reasons each time.

Analyse whether MAIA supports this, what the gaps are, and what workaround
options exist.
```

---

## How to Save AI Output Properly

When AI produces a good draft:

1. **Create a new file** in Obsidian (`Cmd+N`)
2. **Name it properly** — follow the naming convention for the folder (e.g. `[Client] Feature Name` for client docs)
3. **Add YAML frontmatter** at the top:
   ```yaml
   ---
   owner: [Your Name]
   status: draft
   last_reviewed: 2026-02-28
   ---
   ```
4. **Paste the AI content** below the frontmatter
5. **Review and edit** — AI output always needs a human pass
6. **Move to the correct folder** using Obsidian's file explorer

**Never:** Save raw AI output without reviewing. Never set `status: approved` on a first AI draft.

---

## Tips for Better AI Output

- **Be specific** — "Write a user story" gets worse output than "Write a user story for a B2B logistics manager who needs to partially fulfil a sales order"
- **Reference MAIA context** — Always `@Glossary` so the AI uses correct product terminology
- **Give examples** — Paste an existing good user story and ask for something similar
- **Iterate** — If the first output is 70% right, ask the AI to refine it: "Make the acceptance criteria more specific and add edge cases"
- **Ask for options** — "Give me 3 alternative approaches to…" before committing to a direction

---

## See Also

- [[05 - AI Prompt Library for PMs]] — Copy-paste prompts for every PM task
- [[02 - PM Playbook/Templates/[Template] User Story]] — User story template
- [[02 - PM Playbook/Templates/[Template] QA Scenario]] — QA scenario template
- [[02 - PM Playbook/Templates/[Template] Requirement Gathering]] — Req gathering template
- [[02 - PM Playbook/Templates/[Template] Meeting Notes]] — Meeting notes template
- [[03 - Setup Cursor AI]] — How to set up Cursor
- [[PM Onboarding Hub]] — Back to the full onboarding checklist
