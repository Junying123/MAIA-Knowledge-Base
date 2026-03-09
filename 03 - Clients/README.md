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
    📁 Meetings/
      - YYYY-MM-DD-short-topic.md
      - YYYY-MM-DD-short-topic.md
```

### Meetings subfolder
All client meeting notes live in `Meetings/` using date-prefixed filenames: `YYYY-MM-DD-short-topic.md` (e.g. `2026-03-09-kickoff.md`).

Use [[02 - PM Playbook/Templates/[Template] Meeting Notes]] as the base for each file. Each meeting note should capture:
- Attendees and meeting type
- Agenda / key topics discussed
- Decisions made
- Action items (checkbox format with owner + due date)
- Strategic shifts — anything that changes how we work with this client

## Creating a New Client Folder

1. Create folder: `03 - Clients/[Client Name]/`
2. Use template: [[02 - PM Playbook/Templates/[Template] Client Onboarding]]
3. Use config overlay: [[02 - PM Playbook/Templates/[Template] Client Config Overlay]]
4. Add client to client list below

## Active Clients

| Client Name | Industry | PM Owner | Go-Live Date | Status |
|-------------|----------|----------|--------------|--------|
| Holsen | Industrial Chemicals / Surface Treatment | [PM Name] | TBD | Onboarding |
| [Client 2] | [Industry] | [PM Name] | YYYY-MM-DD | Onboarding |

## Client Taxonomy

Every MAIA client has their own **product taxonomy** — a YAML-defined classification of their catalog that drives:
- Frontend item filtering and browsing
- Chatbot product search, filtering, and ordering behaviour
- Analytics grouping and reporting

Each client folder should include a `[Client Name] Product Taxonomy.md` documenting their taxonomy hierarchy, attributes, and allowed values.

**Current taxonomy docs:**
- [[03 - Clients/Holsen/Holsen Product Taxonomy]]

## See Also

- [[02 - PM Playbook/Templates/[Template] Client Onboarding]]
- [[02 - PM Playbook/Templates/[Template] Client Config Overlay]]
- [[02 - PM Playbook/Processes/Client Onboarding Checklist]]
