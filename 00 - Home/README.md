---
owner: Gareth
status: approved
last_reviewed: 2026-02-20
---

# MAIA Knowledge Base — README

Welcome to the **MAIA Product Knowledge Base**, the single source of truth for all Product Managers working on MAIA (ERP/OMS for B2B companies).

## What This KB Is

This knowledge base exists to:
- **Eliminate silos** — Share product knowledge, client context, and PM processes across the team
- **Stop duplication** — Templates and workflows prevent recreating the same work
- **Centralize truth** — Product features, known bugs, workarounds, and decisions all live here
- **Speed up onboarding** — New PMs or clients can ramp up using existing documentation

## Single Source of Truth Rule

**Canonical edits happen in this KB.** External systems (like Lark) are published mirrors, not the source of truth.

- All product documentation, workflows, and templates are **authored and maintained here** in Markdown
- After approval, select content may be **published to Lark** for broader consumption
- When content is published, add a `lark_url` in the YAML frontmatter to track the published version
- **Never edit directly in Lark** — always update the Markdown source and republish

## How to Contribute

### Small Changes
For typo fixes, clarifications, or minor updates:
1. Edit the Markdown file directly
2. Notify the KB Lead (Gareth) for review
3. Once approved, update `last_reviewed` date in frontmatter

### New Content or Major Changes
For new pages, templates, or structural changes:
1. Create a draft file with `status: draft` in frontmatter
2. Tag the KB Lead for review
3. Once approved, change status to `status: approved`
4. If publishable, add to [[Publish Queue]]

### Review Process
- **All truth pages** (01 - Product, 04 - QA, 07 - Decisions) require KB Lead approval
- **Templates and processes** (02 - PM Playbook) require 1 reviewer
- **Client-specific docs** (03 - Clients) can be updated by account owner directly

## Page Metadata Standard

All KB pages should include YAML frontmatter at the top:

```yaml
---
owner: [Name]
status: draft | review | approved
last_reviewed: YYYY-MM-DD
lark_url: [optional - URL if published to Lark]
---
```

## KB Structure

```
📁 00 - Home               → Start here, governance, quick reference
📁 01 - MAIA Product       → Product features, modules, workflows
📁 02 - PM Playbook        → Processes, templates, SOPs
📁 03 - Clients            → Per-client context and history
📁 04 - QA & Known Issues  → Test scenarios, bugs, workarounds
📁 05 - Releases & Updates → Release notes, upcoming features
📁 06 - Glossary & Taxonomy → Definitions, approved tags
📁 07 - Decisions          → ADRs and decision log
📁 08 - Configuration & Integrations → System config, integrations
📁 09 - Intake & Triage    → New request workflow
```

## Quick Start

- **New PM?** Start with [[Quick Reference]]
- **Need a template?** Browse [[02 - PM Playbook/Templates]]
- **Looking for a workflow?** Check [[01 - MAIA Product/Core Workflows]]
- **Client question?** Search [[03 - Clients]]
- **Found a bug?** Add to [[04 - QA & Known Issues/Known Bugs & Limitations]]

## See Also

- [[Quick Reference]] — Most-used links and cheat sheet
- [[Changelog]] — Recent updates to the KB
- [[Publish Queue]] — Content ready for Lark publication
- [[06 - Glossary & Taxonomy/Glossary]] — Product terminology
- [[07 - Decisions/Decision Log]] — Key decisions and ADRs
