---
owner: Gareth
status: approved
last_reviewed: 2026-04-01
---

# Team & Org

## Overview

This page documents the MAIA/Mindhive team structure, roles, and KB ownership assignments. Use this as the reference for who to contact on product areas, client accounts, and KB sections.

---

## Org Structure

```
CEO
 │
 ├── CTO
 │       │
 │       ├── Tech Lead ──→ Leads product + tech teams
 │       │
 │       └── Tech Team
 │               │
 │               ├── Chatbot Team (4 people)
 │               │       └── Led by Chatbot Lead
 │               │
 │               ├── Frontend Team (2 people + 1 intern joining)
 │               │       └── Led by Frontend Lead
 │               │
 │               └── Backend Team (6 people: 5 full-time + 2 intern)
 │                       └── Led by Backend Lead
 │
 ├── Product Team
 │       │
 │       ├── Senior PM (also GTM Lead)
 │       │       └── Mainly GTM, not day-to-day PM work
 │       │
 │       └── Junior PMs (4 people, including Gareth)
 │               └── Each manages multiple clients in parallel at different stages
 │
 └── Sales/GTM Team
         ├── CEO as lead
         ├── 3 Sales people
         └── 1 Marketing person
```

---

## Team Details

### Leadership

| Name | Role | Responsibilities |
|------|------|------------------|
| CEO | CEO | Final decisions on major deals, SOW sign-off |
| CTO | CTO | Technical decisions, architecture, feasibility |
| Tech Lead | Tech Lead | Leads product + tech teams, reviews specs, unblocks devs |

### Tech Team

| Team | Lead | Headcount | Notes |
|------|------|-----------|-------|
| Chatbot | Chatbot Lead | 4 people | AI chatbot development |
| Frontend | Frontend Lead | 2 people + 1 intern | Web app frontend |
| Backend | Backend Lead | 6 people (5 FT + 2 intern) | Backend systems |

### Product Team

| Name | Role | Focus |
|------|------|-------|
| Senior PM | GTM Lead | Pre-sales, proposals, client acquisition. Not day-to-day PM work |
| Junior PM 1 | Junior PM | Own client account(s) — multiple clients at different stages |
| Junior PM 2 | Junior PM | Own client account(s) — multiple clients at different stages |
| Junior PM 3 | Junior PM | Own client account(s) — multiple clients at different stages |
| **Gareth (you)** | Junior PM | Own client account(s) — multiple clients at different stages |

### Sales/GTM Team

| Name | Role |
|------|------|
| CEO | Sales/GTM Lead |
| Sales 1 | Sales |
| Sales 2 | Sales |
| Sales 3 | Sales |
| Marketing 1 | Marketing |

---

## KB Ownership

Each KB section has a designated owner responsible for keeping content current and reviewing contributions.

| KB Folder | Owner | Review Cadence |
|-----------|-------|----------------|
| `00 - Home` | Gareth | Monthly |
| `01 - MAIA Product` | Gareth | Monthly |
| `02 - PM Playbook` | Gareth | Quarterly |
| `03 - Clients` | Account PM | Per-client |
| `04 - QA & Known Issues` | Gareth | Bi-weekly |
| `05 - Releases & Updates` | Gareth | Per release |
| `06 - Glossary & Taxonomy` | Gareth | Quarterly |
| `07 - Decisions` | Gareth | As needed |
| `08 - Configuration & Integrations` | Gareth | Per change |
| `09 - Intake & Triage` | Rotating | Weekly |

---

## Product Area Ownership

| Product Area | PM Owner | Notes |
|--------------|----------|-------|
| Sales workspace | Account PM | Quotation, SO, customer management |
| Finance workspace | Account PM | Invoicing, AR, collections, credit notes |
| Logistics workspace | Account PM | Delivery orders, fulfilment |
| Chatbot | Account PM | Sales Agent chatbot, Supply Chain chatbot |
| WhatsApp integration | Account PM | Core channel strategy |
| ERP integrations | Tech Lead | AutoCount, SQL Accounting |
| Permissions & audit | Tech Lead | Trust Layer |

---

## Client Ownership (Current)

| Client | PM Owner | Stage | Status |
|--------|----------|-------|--------|
| Holsen | Gareth | UAT | Active — go-live 2026-03-31 |
| JDX Tea (九鼎香) | Gareth | Fit Assessment | Post-RG, pending verdict |
| Thermac | Gareth | RG Complete | Awaiting client documents |
| Ming Medical | Gareth | Pre-RG | GTM done, RG prep ready |
| Xeersoft-CK Auto | TBD | Discovery | Not yet started |
| Fixguru | TBD | Discovery | Not yet started |

---

## Contribution Workflow

1. **Small edits** — Edit directly, notify KB Lead in Lark
2. **New pages** — Create as `status: draft`, ping KB Lead for review
3. **Major changes** (folder structure, template changes, decisions) — Create ADR, discuss before implementing

See [[02 - PM Playbook/Processes/Publish to Lark SOP]] for publishing to Lark.

---

## AI Orchestration (Hermes)

Gareth uses **Hermes (AI Agent)** as the orchestrator to lead coding agents and maximize PM productivity.

| Agent | Role |
|-------|------|
| Hermes | Orchestrator + PM co-pilot |
| Codex | Implementation, code features |
| Claude Code | Architecture, technical review |
| Cursor | UI, local dev |

See [[02 - PM Playbook/Processes/PM E2E Workflow]] for how this fits into the PM workflow.

---

## See Also

- [[00 - Home/README]]
- [[01 - MAIA Product/Overview/Product Identity]]
- [[07 - Decisions/Decision Log]]
- [[02 - PM Playbook/Templates]]
- [[02 - PM Playbook/Processes/PM E2E Workflow]]
