---
owner: Gareth
status: approved
last_reviewed: 2026-03-09
---

# Team & Org

## Overview

This page documents the MAIA PM team structure, roles, and KB ownership assignments. Use this as the reference for who to contact on product areas, client accounts, and KB sections.

---

## Team Structure

| Name | Role | Focus Areas |
|------|------|-------------|
| Gareth | KB Lead / Senior PM | KB governance, product strategy, architecture decisions |
| [PM 2] | Junior PM | [Area — e.g. Sales workspace, client onboarding] |
| [PM 3] | Junior PM | [Area — e.g. Finance workspace, QA coordination] |
| [PM 4] | Junior PM | [Area — e.g. Logistics workspace, release notes] |

---

## KB Ownership

Each KB section has a designated owner responsible for keeping content current and reviewing contributions.

| KB Folder | Owner | Review Cadence |
|-----------|-------|----------------|
| `00 - Home` | Gareth | Monthly |
| `01 - MAIA Product` | Gareth | Monthly |
| `02 - PM Playbook` | Gareth | Quarterly |
| `03 - Clients` | Account PM | Per-client |
| `04 - QA & Known Issues` | [PM 3] | Bi-weekly |
| `05 - Releases & Updates` | [PM 2] | Per release |
| `06 - Glossary & Taxonomy` | Gareth | Quarterly |
| `07 - Decisions` | Gareth | As needed |
| `08 - Configuration & Integrations` | [PM 4] | Per change |
| `09 - Intake & Triage` | Rotating | Weekly |

---

## Product Area Ownership

| Product Area | PM Owner | Notes |
|--------------|----------|-------|
| Sales workspace | [PM 2] | Quotation, SO, customer management |
| Finance workspace | [PM 3] | Invoicing, AR, collections, credit notes |
| Logistics workspace | [PM 4] | Delivery orders, fulfilment |
| WhatsApp integration | Gareth | Core channel strategy |
| ERP integrations | Gareth | AutoCount, SQL Accounting |
| Permissions & audit | Gareth | Trust Layer (Spec #3) |

---

## Client Ownership

| Client | PM Owner | Status |
|--------|----------|--------|
| Holsen | [PM Name] | Onboarding |
| [Client 2] | [PM Name] | [Status] |

---

## Contribution Workflow

1. **Small edits** — Edit directly, notify KB Lead in Lark
2. **New pages** — Create as `status: draft`, ping KB Lead for review
3. **Major changes** (folder structure, template changes, decisions) — Create ADR, discuss before implementing

See [[02 - PM Playbook/Processes/Publish to Lark SOP]] for publishing to Lark.

---

## See Also

- [[00 - Home/README]]
- [[01 - MAIA Product/Overview/Product Identity]]
- [[07 - Decisions/Decision Log]]
- [[02 - PM Playbook/Templates]]
