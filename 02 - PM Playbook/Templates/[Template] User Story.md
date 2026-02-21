---
owner: [Your Name]
status: draft
last_reviewed: YYYY-MM-DD
epic: [Epic name if applicable]
priority: [Critical|High|Medium|Low]
---

# User Story — [Story Title]

## Story

**As a** [user role],
**I want to** [action/capability],
**So that** [business benefit/value].

## Context

[Why is this needed? What problem does it solve?]

**Related Requirements:**
- Link to requirement doc: [[Link]]
- Client: [Client name if client-driven]

## Acceptance Criteria

### Scenario 1: [Happy Path]

```gherkin
Given [precondition/context]
When [action/trigger]
Then [expected result]
```

### Scenario 2: [Alternative Path]

```gherkin
Given [precondition]
When [action]
Then [expected result]
```

### Scenario 3: [Error Handling]

```gherkin
Given [precondition]
When [invalid action]
Then [error message/validation]
```

## Technical Notes

**Modules Affected:**
- [Quotations / Sales Orders / Invoices / etc.]

**Database Changes:**
- [ ] New tables/fields
- [ ] Schema changes

**UI Changes:**
- [ ] New screens
- [ ] Modified screens
- [ ] New components

**Business Rules:**
- [Any specific logic or validations]

## Dependencies

**Depends on:**
- [Other stories or features]

**Blocks:**
- [Stories waiting on this]

## Definition of Done

- [ ] Code implemented and reviewed
- [ ] Unit tests written and passing
- [ ] QA scenarios tested (link to [[02 - PM Playbook/Templates/[Template] QA Scenario]])
- [ ] Documentation updated in KB
- [ ] Client acceptance (if client-driven)

## Priority & Sizing

**Priority:** 🔴 Critical | 🟡 High | 🟢 Medium | ⚪ Low
**Effort Estimate:** [S/M/L or story points]
**Target Release:** [Version or sprint]

---

**See Also:**
- [[02 - PM Playbook/Processes/User Story Writing Guide]]
- [[02 - PM Playbook/Processes/Dev Handover Guide]]
- [[02 - PM Playbook/Templates/[Template] QA Scenario]]
