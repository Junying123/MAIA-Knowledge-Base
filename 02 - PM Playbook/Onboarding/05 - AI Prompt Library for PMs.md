---
owner: Gareth
status: approved
last_reviewed: 2026-02-28
---

# AI Prompt Library for PMs

Copy-paste prompts for every common PM task. Use these in Cursor with your KB files as context.

> [!tip] How to Add Context
> Before any prompt, use `@filename` to reference your KB files. The more context you give, the better the output.
> Example: `@[Template] User Story @Glossary @Acme Corp` before your prompt loads all three files into the AI's context window.

---

## User Stories

### Write a user story from a client description

**When to use:** You have a raw client requirement (verbal, email, or notes) and need a structured user story.

```prompt
@[Template] User Story @Glossary

Write a user story for the following client requirement. Follow our user
story template exactly. Use correct MAIA terminology from the glossary.

Client requirement:
[paste requirement here]

Additional context:
[any relevant client background]
```

**Expected output:** A complete user story with role, goal, business value, and acceptance criteria, formatted using the team template.

---

### Generate acceptance criteria for an existing user story

**When to use:** You have a user story but the acceptance criteria are thin or missing.

```prompt
@Glossary @Known Limitations

Here is an existing user story:
[paste user story]

Generate comprehensive acceptance criteria. Include:
- Happy path scenarios
- Edge cases
- Error states
- Any MAIA limitations that affect the acceptance criteria

Format as a numbered list under "Acceptance Criteria".
```

**Expected output:** Numbered acceptance criteria covering functional requirements, edge cases, and relevant product constraints.

---

## Product Requirements Documents (PRDs)

### Write a PRD from a feature request

**When to use:** A feature has been scoped and approved, and you need a full PRD for dev handover.

```prompt
@[Template] PRD @Glossary @[Client Name]

Write a PRD for the following feature using our PRD template. Include all
sections from the template. Use MAIA terminology from the glossary.

Feature request:
[describe feature]

Client context:
[any relevant client background already in the KB, or paste here]

Known constraints:
[any technical or product constraints you are aware of]
```

**Expected output:** A complete PRD with background, requirements, user stories, out of scope, open questions, and success metrics.

---

### Summarise a PRD into a one-pager for a client

**When to use:** You need to share a simplified version of a PRD with a non-technical client stakeholder.

```prompt
Simplify this PRD into a one-page executive summary for a non-technical
client. Focus on: what we are building, why it matters to their business,
and what they need to provide or approve.

Avoid technical jargon. Use plain English.

PRD:
[paste PRD]
```

**Expected output:** A short, plain-language summary of the feature from a business value perspective.

---

## QA & Testing

### Create QA test scenarios

**When to use:** A feature is ready for QA and you need structured test scenarios.

```prompt
@[Template] QA Scenario @Known Limitations

Write QA test scenarios for the following feature using our QA scenario
template. Include:
- Happy path (expected normal usage)
- Edge cases
- Error states and failure modes
- Any known MAIA limitations that testers should be aware of

Feature:
[describe feature]

Key user flows to test:
[list the main things users will do]
```

**Expected output:** Structured test scenarios covering positive, negative, and edge cases in the team's QA template format.

---

### Write a regression test checklist

**When to use:** After a feature change, you need to verify no existing functionality is broken.

```prompt
@Known Limitations @Quote-to-Cash Flow

A change was made to [describe what changed]. Write a regression test
checklist for the areas most likely to be affected. Focus on the core
Quote-to-Cash workflow and any modules that interact with [area].
```

**Expected output:** A checklist of regression tests prioritised by risk and impact.

---

## Requirement Gathering

### Summarise requirement gathering notes

**When to use:** After a client session, you have rough notes and need a clean structured summary.

```prompt
@[Template] Requirement Gathering

Structure and summarise these raw requirement gathering notes using our
template. Extract:
1. Confirmed requirements (what the client definitely needs)
2. Open questions (what still needs clarification)
3. Out of scope (what was explicitly excluded)
4. Action items (who does what by when)
5. Risks or concerns raised

Raw notes:
[paste your session notes]
```

**Expected output:** A clean, structured requirement document with clear sections and action items.

---

### Prepare a requirement gathering session agenda

**When to use:** Before a client session, you need to prepare structured questions and an agenda.

```prompt
@[Client Name] @Requirement Gathering Process

Prepare an agenda and question list for a requirement gathering session
about [topic] with this client. Include:
- Suggested agenda with time allocations
- Open-ended discovery questions
- Specific MAIA capability questions relevant to this topic
- Information we need to collect before we can scope a solution

Session length: [X] minutes
Topic: [what you are gathering requirements for]
```

**Expected output:** A session agenda and structured question bank ready to use in the client meeting.

---

## Dev Handover

### Draft a dev handover summary

**When to use:** A feature is signed off and you need to hand it to the dev team clearly.

```prompt
@Glossary

Write a dev handover summary for the following feature. Structure it as:
1. Feature summary (1-2 sentences)
2. User stories covered (list them)
3. Acceptance criteria (full list)
4. Out of scope (what this does NOT include)
5. Open questions for dev (anything that needs technical input)
6. Reference documents (list any linked specs or designs)

Feature details:
[paste user stories, PRD excerpt, or requirements]
```

**Expected output:** A clean dev handover document that gives engineering everything they need to start without follow-up questions.

---

## Analysis & Decision Support

### Compare two approaches (trade-off analysis)

**When to use:** You are deciding between two ways to solve a problem and need a structured comparison.

```prompt
@Known Limitations @Glossary

Compare these two approaches to [problem]. For each, analyse:
- What it involves (how it works in MAIA)
- Pros and cons
- Implementation complexity (rough estimate)
- Risk to existing functionality
- Recommended approach and rationale

Approach A:
[describe approach]

Approach B:
[describe approach]
```

**Expected output:** A structured comparison with a clear recommendation and rationale.

---

### Find gaps between a client request and MAIA capabilities

**When to use:** A client wants something and you need to know how much of it MAIA can do out of the box.

```prompt
@Known Limitations @Glossary

Analyse the following client request against known MAIA capabilities.
For each requirement, classify it as:
- ✅ Supported natively in MAIA
- ⚠️ Partially supported (with limitations or workarounds)
- ❌ Not supported (would require custom development)

For each ⚠️ and ❌, suggest the best available workaround or alternative.

Client request:
[paste client requirements]
```

**Expected output:** A gap analysis table with each requirement classified and workarounds suggested.

---

## Communication & Client-Facing Content

### Simplify technical jargon for a client

**When to use:** You need to explain a technical constraint or product behaviour to a non-technical client contact.

```prompt
Rewrite the following explanation so a non-technical business stakeholder
can understand it. Avoid technical jargon. Use plain language and, where
helpful, a simple analogy.

Original explanation:
[paste technical explanation]

Client context: [who they are, e.g. "CFO of a mid-size wholesale company"]
```

**Expected output:** A plain-language version that explains the same thing without technical terms.

---

### Draft a meeting agenda

**When to use:** You are organising a client or internal meeting and need a structured agenda.

```prompt
Draft a meeting agenda for the following meeting. Include time allocations,
owner for each item, and a clear objective for each agenda point.

Meeting type: [e.g. weekly status call, kick-off, retrospective]
Duration: [X] minutes
Attendees: [who is attending]
Key topics to cover:
[list topics]
```

**Expected output:** A formatted meeting agenda with timing, owners, and objectives.

---

### Summarise a KB page

**When to use:** You need a quick summary of a long KB page to share with someone or to brief yourself quickly.

```prompt
@[Page Name]

Give me a concise summary of this page. Cover:
1. What it is about (1-2 sentences)
2. The 3-5 most important points
3. Who should read this and when

Keep it under 200 words.
```

**Expected output:** A short, scannable summary of any KB page.

---

## See Also

- [[04 - AI + KB Workflow for PMs]] — Full workflow guide with step-by-step task patterns
- [[03 - Setup Cursor AI]] — How to set up Cursor and reference KB files
- [[02 - PM Playbook/Templates/[Template] User Story]] — User story template
- [[02 - PM Playbook/Templates/[Template] QA Scenario]] — QA scenario template
- [[02 - PM Playbook/Templates/[Template] Requirement Gathering]] — Req gathering template
- [[PM Onboarding Hub]] — Back to the full onboarding checklist
