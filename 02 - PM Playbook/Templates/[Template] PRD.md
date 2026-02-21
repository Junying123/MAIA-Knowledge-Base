---
owner: [Your Name]
status: draft
last_reviewed: YYYY-MM-DD
version: 0.1
feature: [Feature Name]
workspace: [Sales | Finance | Logistics | Cross-Workspace]
priority: [Critical | High | Medium | Low]
---

# PRD — [Feature Name]

**Version:** 0.1 | **Status:** Draft | **Owner:** [Name]
**Workspace:** [Sales / Finance / Logistics / Cross-Workspace]
**Last Updated:** YYYY-MM-DD

---

## 1. Problem Statement

**What problem are we solving?**
[Clear 2–3 sentence description of the problem. Focus on user or business pain, not the solution.]

**Who experiences this problem?**
[Name the affected personas — e.g., Sales Agent, Finance User.]

**What is the cost of not solving it?**
[Impact on users, business operations, or client satisfaction if left unaddressed.]

**Why now?**
[Urgency, trigger event, client request, or strategic reason this is being prioritised.]

---

## 2. Goals & Success Metrics

**Primary Goal:**
[One sentence — what this PRD aims to achieve.]

**Success Metrics:**

| Metric | Baseline | Target | How Measured |
|--------|----------|--------|--------------|
| [KPI 1] | [Current state] | [Goal] | [Method / tool] |
| [KPI 2] | [Current state] | [Goal] | [Method / tool] |

> ⚠️ Write success metrics BEFORE writing requirements — they anchor all feature decisions.

---

## 3. User Personas

**Primary Users:**

| Persona | Workspace | Primary Goal | Key Pain Point |
|---------|-----------|--------------|----------------|
| [Sales Agent] | Sales | [e.g., process orders quickly] | [e.g., too many steps to invoice] |
| [Finance User] | Finance | [e.g., accurate payment recording] | [e.g., manual reconciliation] |

> Full persona docs: [[Sales Agent Persona]] · [[Finance User Persona]] · [[Logistics User Persona]] · [[Management User Persona]]

---

## 4. Scope

### In Scope
- [Feature or behavior included in this release]
- [Another included item]

### Out of Scope
- [Explicitly excluded — prevents scope creep]
- [Another exclusion]

### Future Consideration
- [Items deliberately deferred to a later release]

---

## 5. Functional Requirements

### 5.1 [Feature Area / Module Name]

| # | Requirement | Priority |
|---|-------------|----------|
| FR-01 | The system must [action or behavior] | Critical |
| FR-02 | The system must [action or behavior] | High |
| FR-03 | The system should [action or behavior] | Medium |

### 5.2 Status Flow (if applicable)

```
[INITIAL STATUS] ──[Action]──> [NEXT STATUS] ──[Action]──> [FINAL STATUS]
                                    ↓
                              [Action] → [TERMINAL STATUS]
```

**Status Transition Table:**

| From | Action | To | Notes / Business Rule |
|------|--------|----|-----------------------|
| [Status A] | [Action] | [Status B] | [Rule that applies] |
| [Status B] | [Action] | [Status C] | [Rule that applies] |
| [Status B] | [Action] | [Status D] | Terminal — no further actions |

### 5.3 Business Rules

- [Rule 1 — e.g., Cannot perform X from Y status]
- [Rule 2 — e.g., Field Z is required before submit]
- [Rule 3 — e.g., Two-step confirmation required for destructive actions]

### 5.4 Validation Rules

| Field | Rule | Error Message Shown to User |
|-------|------|-----------------------------|
| [Field name] | Required | "[Field] is required" |
| [Field name] | Must be > 0 | "[Field] must be greater than zero" |
| [Field name] | [Custom rule] | "[Custom message]" |

---

## 6. Non-Functional Requirements

| Category | Requirement |
|----------|-------------|
| Performance | [e.g., Pages load within 2 seconds] |
| Security | [e.g., Role-based access — Sales Agent cannot access Finance module] |
| Accessibility | [e.g., WCAG 2.1 AA compliant] |
| Data Retention | [e.g., Cancelled records retained for audit trail; 7-year retention] |
| Audit Trail | [e.g., All status changes logged with timestamp and user] |

---

## 7. User Flows

### Flow 1: [Primary / Happy Path]

```
[Entry Point]
      ↓
[Step 1 — user action]
      ↓
[Step 2 — system response]
      ↓
[Decision point?] ──Yes──> [Path A → Outcome]
                  └─ No──> [Path B → Outcome]
      ↓
[End State]
```

### Flow 2: [Error / Edge Case Path]

```
[Entry Point]
      ↓
[Action attempted without meeting precondition]
      ↓
[Validation error shown]
      ↓
[User corrects and retries]
      ↓
[Success state]
```

---

## 8. UI / UX Notes

**New screens required:**
- [ ] [Screen name] — [Purpose and key actions]

**Modified screens:**
- [ ] [Screen name] — [What changes and why]

**Key UI behaviours:**
- [e.g., Submit button disabled until all required fields are filled]
- [e.g., Two-step confirmation modal for Cancel actions]
- [e.g., Status badge colour: 🟡 Draft / 🔵 Active / ⚫ Cancelled]

**Reference designs:** [Link to Figma / mockup / screenshot]

---

## 9. Dependencies & Integrations

**Depends on:**
- [Other features, stories, or infrastructure that must exist first]

**Impacts (downstream):**
- [Modules or workflows this feature affects]

**External integrations:**
- [APIs, third-party services, or other systems involved]

---

## 10. Risks & Open Questions

### Risks

| Risk | Likelihood | Impact | Mitigation Plan |
|------|------------|--------|-----------------|
| [Risk description] | High / Med / Low | High / Med / Low | [Mitigation action] |

### Open Questions

- [ ] [Question 1] — Owner: [Name] — Due: [Date]
- [ ] [Question 2] — Owner: [Name] — Due: [Date]

---

## 11. Stakeholder Sign-off

| Role | Name | Status | Date |
|------|------|--------|------|
| Product Manager | [Name] | ⬜ Pending | |
| Engineering Lead | [Name] | ⬜ Pending | |
| Design | [Name] | ⬜ Pending | |
| QA Lead | [Name] | ⬜ Pending | |
| Business / Client | [Name] | ⬜ Pending | |

---

## 12. Appendix

### Related Documents

- [[Relevant Workflow Guide]]
- [[Relevant Module Doc]]
- [[02 - PM Playbook/Processes/Requirement Gathering Process]]

### Glossary

> For MAIA-specific terms see [[06 - Glossary & Taxonomy/Glossary]]

### Revision History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 0.1 | YYYY-MM-DD | [Name] | Initial draft |
| 0.2 | YYYY-MM-DD | [Name] | [Changes made] |

---

## See Also

- [[02 - PM Playbook/Processes/PRD Writing Guide]]
- [[02 - PM Playbook/Processes/User Story Writing Guide]]
- [[02 - PM Playbook/Templates/[Template] User Story]]
- [[02 - PM Playbook/Processes/Dev Handover Guide]]
- [[02 - PM Playbook/Processes/Requirement Gathering Process]]
