---
owner: Gareth
status: approved
last_reviewed: 2026-02-20
---

# Request Intake Inbox

Centralized inbox for all new feature requests, bugs, and enhancements.

## Purpose

All new requests enter through this inbox before being triaged and classified.

## Active Requests

| Request ID | Date | Requester | Client | Type | Summary | Status | Owner |
|------------|------|-----------|--------|------|---------|--------|-------|
| TRI-2026-02-20-001 | 2026-02-20 | [Name] | [Client] | Feature | [Brief summary] | New | - |
| TRI-2026-02-20-002 | 2026-02-20 | [Name] | Internal | Bug | [Brief summary] | Triaged | Gareth |

## Request Statuses

- **New** — Just submitted, not yet reviewed
- **Triaged** — Classified and assigned
- **In Progress** — Being worked on
- **Completed** — Delivered
- **Deferred** — Postponed to later
- **Rejected** — Will not be implemented

## Submitting a New Request

1. Add row to table above with new Request ID
2. Use format: `TRI-YYYY-MM-DD-XXX`
3. Include requester, client (if applicable), and brief summary
4. Set status to "New"
5. Notify KB Lead (Gareth) for triage

## Triage Process

See [[Triage SOP (Product vs Config vs Custom)]] for classification process.

After triage:
1. Create [[02 - PM Playbook/Templates/[Template] Triage Decision Record]]
2. Update request status to "Triaged"
3. Assign owner
4. Move to appropriate next step:
   - **Product Enhancement** → Create user story, add to backlog
   - **Configuration** → Document in [[08 - Configuration & Integrations]]
   - **Custom Development** → Escalate to tech lead
   - **Bug Fix** → Add to [[04 - QA & Known Issues/Known Bugs & Limitations]]

## See Also

- [[Triage SOP (Product vs Config vs Custom)]]
- [[Triage Decision Record Template]]
- [[02 - PM Playbook/Templates/[Template] User Story]]
- [[04 - QA & Known Issues/Feature Gap Tracker]]
