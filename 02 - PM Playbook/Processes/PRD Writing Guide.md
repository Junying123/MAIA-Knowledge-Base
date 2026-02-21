---
owner: Gareth
status: approved
last_reviewed: 2026-02-21
---

# PRD Writing Guide

A guide for MAIA PMs on how to construct a Product Requirements Document (PRD), how it relates to other artifacts (SOW, User Stories), and how to convert requirements into user stories.

---

## What is a PRD?

A PRD (Product Requirements Document) is the canonical definition of **what to build and why**. It is the bridge between business intent and engineering execution.

| Artifact | Purpose | Audience | Written By |
|----------|---------|----------|------------|
| SOW | Business agreement (scope, cost, timeline) | Client + legal | Account Manager / PM |
| PRD | Product definition (what + why + constraints) | Engineering, Design, QA | Product Manager |
| User Stories | Implementation units (who needs what) | Engineering | Product Manager |

> These are not interchangeable. Each serves a different layer of the process.

---

## How They Relate

```
Client negotiation
      ↓
    SOW  ←── "we will build X by Y date for Z cost"
      ↓
    PRD  ←── "here's exactly what X means and how it works"
      ↓
User Stories / Tickets
      ↓
    Build
```

- **SOW commits** you to delivering something
- **PRD defines** what that something is
- **User Stories** break the PRD into sprint-ready units

A SOW without a PRD leads to scope disputes. A PRD without user stories leaves engineering without clear implementation guidance.

---

## PRD vs SOW — Key Differences

| Element | SOW | PRD |
|---------|-----|-----|
| Problem statement (why) | ❌ | ✅ |
| Success metrics / KPIs | ❌ | ✅ |
| User personas | ❌ | ✅ |
| Scope / out of scope | ✅ | ✅ |
| Functional requirements | Rarely | ✅ |
| Business rules | ❌ | ✅ |
| Payment terms | ✅ | ❌ |
| Roles & responsibilities | ✅ | ❌ |
| Legally binding | ✅ | ❌ |
| Engineering handoff | ❌ | ✅ |

---

## PRD vs User Stories — Key Differences

| Element | PRD | User Stories |
|---------|-----|--------------|
| Problem statement (why) | ✅ | ❌ |
| Success metrics / KPIs | ✅ | ❌ |
| User personas | ✅ | Referenced, not defined |
| Scope / out of scope | ✅ | ❌ |
| Functional requirements | ✅ | ✅ (as acceptance criteria) |
| Non-functional requirements | ✅ | Rarely |
| Stakeholder alignment | ✅ | ❌ |
| Sprint-ready granularity | ❌ | ✅ |
| Engineering handoff | ❌ | ✅ |

> Converting requirements to user stories is **one step** in the process — not a replacement for the PRD.

---

## PRD Structure

### The 12 Sections

| # | Section | Purpose |
|---|---------|---------|
| 1 | **Problem Statement** | Defines why this exists |
| 2 | **Goals & Success Metrics** | Defines what success looks like — write before requirements |
| 3 | **User Personas** | Identifies who is affected |
| 4 | **Scope** | Draws boundaries — in, out, deferred |
| 5 | **Functional Requirements** | What the system must do |
| 6 | **Non-Functional Requirements** | Performance, security, accessibility, data |
| 7 | **User Flows** | How users move through the feature |
| 8 | **UI/UX Notes** | New screens, modified screens, key behaviours |
| 9 | **Dependencies & Integrations** | What this depends on; what it affects |
| 10 | **Risks & Open Questions** | Known risks and unresolved decisions |
| 11 | **Stakeholder Sign-off** | Approval tracking |
| 12 | **Appendix** | References, glossary, revision history |

---

## PRD Construction Steps

```
1. Start with the problem — not the solution
         ↓
2. Define success metrics (what does "done" look like?)
         ↓
3. Identify affected personas
         ↓
4. Map user flows and workflows
         ↓
5. Write functional requirements (derived from flows)
         ↓
6. Add non-functional requirements
         ↓
7. Define scope boundaries explicitly
         ↓
8. Review with engineering (feasibility check)
         ↓
9. Review with stakeholders (alignment check)
         ↓
10. Approve and baseline the document
```

> **Critical rule:** Write success metrics in Step 2 before writing any requirements. Requirements written without clear success criteria tend to grow uncontrollably.

---

## Applied to MAIA

The MAIA KB already contains significant PRD-equivalent content:

| KB Content | PRD Section It Maps To |
|------------|------------------------|
| `*Workflow Guide.md` files | Functional Requirements + User Flows |
| `Create */` section breakdowns | UI/UX Notes + Field-level requirements |
| `*User Persona.md` files | User Personas |
| `Product Overview.md` | Product Scope / Background |
| `Known Limitations.md` | Out of Scope / Constraints |
| `Quote-to-Cash Flow.md` | User Flows |

**What's still missing for a complete PRD:**
- Problem statements (the *why* behind features)
- Success metrics / KPIs
- Prioritisation (MoSCoW, P0/P1)
- Non-functional requirements
- Stakeholder sign-off records

---

## Converting Requirements to User Stories

### User Story Format

```
As a [persona],
I want [action / capability],
So that [benefit / outcome].
```

### Acceptance Criteria Format (Given / When / Then)

```
Given [context / precondition],
When [action is taken],
Then [expected outcome].
```

---

### The 7-Step Conversion Process

**Step 1 — Identify the persona**
Who is performing this action? Map to a named persona from the KB.

**Step 2 — Extract the action**
What does the user need to do? Strip technical language — focus on user intent.

**Step 3 — Define the benefit**
Why do they need it? What outcome does it enable? This is the "so that" — never skip it.

**Step 4 — Write acceptance criteria**
What must be true for this story to be "done"?
Cover: happy path, edge cases, error states, validation messages.

**Step 5 — Check story independence**
Can this be built and delivered on its own?
If not — it's an epic. Break it into smaller stories.

**Step 6 — Size check**
Can it be completed in one sprint?
If not — split it further.

**Step 7 — Add edge cases**
As additional Given/When/Then scenarios or as separate stories.

---

### Practical Example (MAIA)

**Source requirement** (from [[Sales Order Workflow Guide]]):
> Cannot convert to Invoice from HOLD status — must Resume first.

**User story:**

```
As a Sales Agent,
I want to be prevented from creating an invoice while a Sales Order is on hold,
So that I follow the correct billing workflow and avoid invoicing paused orders.
```

**Acceptance criteria:**

```gherkin
Given a Sales Order is in HOLD status
When I view the available action buttons
Then "Convert to Invoice" should not be visible or is disabled

Given a Sales Order is in HOLD status
When I click Resume
Then the SO returns to TO BILL status
And "Convert to Invoice" becomes available

Given a Sales Order is in HOLD status
When I attempt to access the Convert to Invoice flow directly
Then the system blocks the action and shows an error message
```

---

## INVEST Checklist

Every user story should pass the INVEST test before going to engineering:

| Letter | Criteria | Question to ask |
|--------|----------|-----------------|
| **I** | Independent | Can this be built without another story? |
| **N** | Negotiable | Is the solution flexible, not prescribed? |
| **V** | Valuable | Does it deliver value to a user or business? |
| **E** | Estimable | Can engineering size it? |
| **S** | Small | Fits in one sprint? |
| **T** | Testable | Can QA write test cases for it? |

If any answer is No — refine or split the story before handing to engineering.

---

## Full Process Flow

```
PRD Requirement
      ↓
Identify persona + action + benefit
      ↓
Write user story (As a / I want / So that)
      ↓
Write acceptance criteria (Given / When / Then)
      ↓
INVEST check
      ↓
Pass → Ready for sprint planning
Fail → Split or refine → repeat
```

---

## Common Mistakes to Avoid

| Mistake | Fix |
|---------|-----|
| Writing requirements before defining success metrics | Always do metrics first |
| Treating SOW scope as functional requirements | SOW is a contract, not a spec — translate it into a PRD |
| Skipping the "so that" in user stories | The benefit justifies the story — don't skip it |
| User stories too large for one sprint | Split into smaller stories under an epic |
| No acceptance criteria | Every story needs testable criteria before dev starts |
| Missing non-functional requirements | Explicitly document performance, security, and data rules |
| PRD without scope exclusions | Always list what is OUT of scope to prevent scope creep |

---

## See Also

- [[02 - PM Playbook/Templates/[Template] PRD]]
- [[02 - PM Playbook/Templates/[Template] User Story]]
- [[02 - PM Playbook/Processes/User Story Writing Guide]]
- [[02 - PM Playbook/Processes/Requirement Gathering Process]]
- [[02 - PM Playbook/Processes/Dev Handover Guide]]
- [[01 - MAIA Product/Sales Workspace/Sales Agent Persona]]
- [[06 - Glossary & Taxonomy/Glossary]]
