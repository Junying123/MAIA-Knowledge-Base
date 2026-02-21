---
owner: Gareth
status: draft
last_reviewed: 2026-02-20
---

# Requirement Gathering Process

Process for gathering client requirements and converting them into actionable specs.

## When to Use

- New client onboarding
- Feature requests from existing clients
- Product enhancement discussions
- Gap analysis sessions

## Process Steps

### 1. Prepare for Meeting
- Review client's MAIA setup in [[03 - Clients]]
- Review previous requirements from client
- Prepare questions based on known gaps
- Have template ready: [[02 - PM Playbook/Templates/[Template] Requirement Gathering]]

### 2. Conduct Discovery Session
- **Listen first** — Let client explain their needs
- **Ask clarifying questions:**
  - What problem are you trying to solve?
  - What is the current workaround?
  - What is the expected outcome?
  - How many users/transactions are affected?
  - What is the priority? (Must-have vs Nice-to-have)

### 3. Document Requirements
- Use the [[02 - PM Playbook/Templates/[Template] Requirement Gathering]] template
- Capture:
  - Business context and problem
  - Current state vs desired state
  - Expected behavior
  - Acceptance criteria
  - Priority and urgency
  - Dependencies

### 4. Classify Requirement
Use [[09 - Intake & Triage/Triage SOP (Product vs Config vs Custom)]] to determine:
- **Product Enhancement** — Feature missing from MAIA
- **Configuration** — Client-specific setting/config
- **Custom Development** — Non-standard functionality

### 5. Next Steps
- **Product Enhancement** → Create User Story, add to roadmap
- **Configuration** → Document in [[08 - Configuration & Integrations]]
- **Custom Development** → Escalate to tech lead for feasibility

## Best Practices

- ✅ Always confirm understanding with client
- ✅ Document requirements same day while fresh
- ✅ Link requirements to client folder in [[03 - Clients]]
- ✅ Add to [[04 - QA & Known Issues/Feature Gap Tracker]] if gap identified
- ❌ Don't commit to delivery dates during discovery
- ❌ Don't design solutions during requirements — focus on problems

## See Also

- [[02 - PM Playbook/Templates/[Template] Requirement Gathering]]
- [[User Story Writing Guide]]
- [[09 - Intake & Triage/Triage SOP (Product vs Config vs Custom)]]
