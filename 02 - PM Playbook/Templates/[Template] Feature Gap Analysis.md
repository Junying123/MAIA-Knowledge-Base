---
owner: [Your Name]
status: draft
last_reviewed: YYYY-MM-DD
client: [Client Name or "General"]
---

# Feature Gap Analysis — [Feature/Module Name]

**Analysis Date:** YYYY-MM-DD
**Analyzed By:** [Your Name]
**Client/Context:** [Client name or "Product-wide"]

## Gap Summary

**Feature:** [Feature or module being analyzed]
**Gap Type:** 🔴 Missing Requirement | 🟡 Missing Build | 🟢 Missing Capability

## Expected vs Actual

| Aspect | Expected Behavior | Actual Behavior | Gap Type |
|--------|-------------------|-----------------|----------|
| [Feature 1] | [What should happen] | [What actually happens] | Requirement/Build/Capability |
| [Feature 2] | [What should happen] | [What actually happens] | Requirement/Build/Capability |

## Gap Types Explained

- **Missing Requirement:** Feature was never specified in original requirements
- **Missing Build:** Feature was specified but not implemented yet
- **Missing Capability:** Feature exists but doesn't handle all use cases

## Detailed Gap Analysis

### Gap 1: [Gap Title]

**Description:**
[Describe the gap in detail]

**Expected Behavior:**
[What should happen]

**Actual Behavior:**
[What happens now]

**Impact:**
- **Severity:** 🔴 Critical | 🟡 High | 🟢 Medium | ⚪ Low
- **Affected Users:** [Number or role of users]
- **Frequency:** [How often is this encountered]

**Workaround:**
[If any workaround exists, describe it]

**Recommendation:**
- [ ] Add to product backlog
- [ ] Create user story: [[Link]]
- [ ] Document as known limitation: [[01 - MAIA Product/Overview/Known Limitations]]
- [ ] Add to triage: [[09 - Intake & Triage/Request Intake Inbox]]

### Gap 2: [Gap Title]

[Repeat structure above]

## Priority Ranking

| Gap | Priority | Owner | Status | Target Release |
|-----|----------|-------|--------|----------------|
| Gap 1 | Critical | [Name] | Not Started | v1.2 |
| Gap 2 | High | [Name] | In Progress | v1.3 |

## Next Steps

- [ ] Review with tech lead
- [ ] Create user stories for high-priority gaps
- [ ] Update [[04 - QA & Known Issues/Feature Gap Tracker]]
- [ ] Communicate to client (if client-specific)
- [ ] Add to [[05 - Releases & Updates/Upcoming Features]]

## Links

**Related Documents:**
- User Stories: [Link to stories]
- Test Scenarios: [Link to test cases]
- Client Requirements: [[03 - Clients/[Client Name]/Requirements Log]]

---

**See Also:**
- [[04 - QA & Known Issues/Feature Gap Tracker]]
- [[01 - MAIA Product/Overview/Known Limitations]]
- [[02 - PM Playbook/Templates/[Template] User Story]]
