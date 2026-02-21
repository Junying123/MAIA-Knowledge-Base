---
owner: Gareth
status: approved
last_reviewed: 2026-02-20
---

# Clients Folder — README

This folder contains **per-client documentation** for all MAIA accounts managed by the PM team.

## Purpose

Each client gets their own folder with:
- Client overview and context
- Requirements history
- Feature requests and gaps
- Meeting notes
- Onboarding status
- Client-specific configuration overlay

## Folder Structure

For each client, create:

```
📁 03 - Clients/
  📁 [Client Name]/
    - Client Overview.md
    - Requirements Log.md
    - Feature Requests & Gaps.md
    - Onboarding Status.md
    - Meeting Notes/
      - 2026-02-01 Kickoff.md
      - 2026-02-15 Weekly Sync.md
```

## Creating a New Client Folder

1. Create folder: `03 - Clients/[Client Name]/`
2. Use template: [[02 - PM Playbook/Templates/[Template] Client Onboarding]]
3. Use config overlay: [[02 - PM Playbook/Templates/[Template] Client Config Overlay]]
4. Add client to client list below

## Active Clients

| Client Name | Industry | PM Owner | Go-Live Date | Status |
|-------------|----------|----------|--------------|--------|
| [Client 1] | [Industry] | [PM Name] | YYYY-MM-DD | Active |
| [Client 2] | [Industry] | [PM Name] | YYYY-MM-DD | Onboarding |

## See Also

- [[02 - PM Playbook/Templates/[Template] Client Onboarding]]
- [[02 - PM Playbook/Templates/[Template] Client Config Overlay]]
- [[02 - PM Playbook/Processes/Client Onboarding Checklist]]
