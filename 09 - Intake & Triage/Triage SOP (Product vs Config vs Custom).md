---
owner: Gareth
status: approved
last_reviewed: 2026-02-20
---

# Triage SOP — Product vs Config vs Custom

Standard operating procedure for triaging new requests and classifying them correctly.

## Purpose

Every new request must be classified to determine the right path forward:
- **Product Enhancement** — Feature missing from MAIA core
- **Configuration** — Client-specific setting/workflow
- **Custom Development** — Non-standard functionality
- **Bug Fix** — Existing feature not working as designed

## Classification Framework

### Product Enhancement

**Definition:**
- Feature that ALL MAIA clients would benefit from
- Missing from core product
- Should be part of standard offering

**Examples:**
- "Add bulk operations for quotations"
- "Support multiple credit notes per invoice"
- "Add delivery note workflow"

**Next Steps:**
1. Create user story: [[02 - PM Playbook/Templates/[Template] User Story]]
2. Add to product backlog
3. Prioritize for roadmap
4. Document in [[04 - QA & Known Issues/Feature Gap Tracker]]

---

### Configuration

**Definition:**
- Client-specific setting or workflow customization
- Uses existing MAIA features in a specific way
- Does not require code changes

**Examples:**
- "Set default payment terms to Net 60 for this client"
- "Customize quotation numbering format"
- "Enable/disable specific modules for client"
- "Configure approval workflows"

**Next Steps:**
1. Document in [[08 - Configuration & Integrations/Configuration Index]]
2. Add to client config overlay: [[02 - PM Playbook/Templates/[Template] Client Config Overlay]]
3. Apply configuration in system
4. Test and validate

---

### Custom Development

**Definition:**
- Non-standard functionality unique to one client
- Requires custom code or significant changes
- Not applicable to broader MAIA user base

**Examples:**
- "Integrate with client's legacy ERP system"
- "Add custom calculation logic for this industry"
- "Build client-specific report format"

**Next Steps:**
1. Escalate to tech lead for feasibility assessment
2. Estimate effort and timeline
3. Discuss with client (may require additional cost)
4. Create ADR if architectural decision needed: [[07 - Decisions/Decision Log]]

---

### Bug Fix

**Definition:**
- Existing feature not working as designed
- Affects all or multiple clients
- Needs immediate attention

**Examples:**
- "Invoice status not updating to PAID after receipt"
- "Cannot delete draft quotation"
- "Credit note calculation incorrect"

**Next Steps:**
1. Create bug ticket
2. Add to [[04 - QA & Known Issues/Known Bugs & Limitations]]
3. Assign to dev team
4. Track resolution

---

## Decision Tree

```
New Request
    ↓
Does existing MAIA feature handle this?
    ├─ YES → Is it broken?
    │         ├─ YES → **Bug Fix**
    │         └─ NO → **Configuration**
    │
    └─ NO → Would all clients benefit?
              ├─ YES → **Product Enhancement**
              └─ NO → **Custom Development**
```

## Triage Process

### Step 1: Receive Request
- Request logged in [[Request Intake Inbox]]
- Assigned Request ID: `TRI-YYYY-MM-DD-XXX`

### Step 2: Analyze Request
- Review request details
- Check if feature exists in MAIA
- Determine scope (all clients vs. one client)

### Step 3: Classify
- Apply decision tree above
- Classify as: Product | Config | Custom | Bug

### Step 4: Document Decision
- Use template: [[02 - PM Playbook/Templates/[Template] Triage Decision Record]]
- Document classification and rationale
- Assign owner and next steps

### Step 5: Route to Next Step
- **Product** → Product backlog + User story
- **Config** → Configuration docs + Implementation
- **Custom** → Tech lead escalation
- **Bug** → Bug tracker + Dev team

## Common Pitfalls

❌ **Don't classify as Product when it's Config**
- Just because a client requests it doesn't make it a product feature
- Ask: "Would ALL clients want this, or just this one?"

❌ **Don't skip documentation**
- Always create Triage Decision Record
- Always update relevant indexes

❌ **Don't commit without feasibility check**
- Custom development requires tech lead review
- Don't promise delivery dates during triage

## See Also

- [[Request Intake Inbox]]
- [[Triage Decision Record Template]]
- [[02 - PM Playbook/Templates/[Template] User Story]]
- [[04 - QA & Known Issues/Feature Gap Tracker]]
- [[07 - Decisions/Decision Log]]
- [[08 - Configuration & Integrations/Configuration Index]]
