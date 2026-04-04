# AGENTS.md — MAIA Knowledge Base

Instructions for AI coding agents (Codex, Copilot, etc.) working in this knowledge base. For Claude Code, see `CLAUDE.md`. For company context, see `COMPANY.md`.

---

## Project Overview

**What this is:** Obsidian-based Markdown knowledge base for the MAIA Product Management team.
**What you do here:** Create, edit, and organise Markdown notes. No code to run, no tests to execute.
**Source of truth:** This Markdown repo. Lark is a read-only published mirror — never edit there.

---

## Folder Map

```
brain/                         # Session context — read first
  North Star.md                # Team goals and current focus
  Memories.md                  # Active client index and recent context
  Key Decisions.md             # Architectural/workflow decisions
  Patterns.md                  # Recurring PM and KB patterns
  Gotchas.md                   # Known traps — read before touching client folders or git

00 - Home/                     # Governance, quick reference
  Mindhive/                    # Company identity, strategy, values
01 - MAIA Product/             # Product docs, organised by workspace
  Overview/                    # Product identity, strategy, known limitations
  Core Workflows/              # Quote-to-Cash, status guides
  Sales Workspace/             # Quotations, SOs, Invoices, Receipts, Credit/Debit Notes
  Finance Workspace/
  Logistics Workspace/
  Management/
  Client Training/
  Technical/
  UI Components/
02 - PM Playbook/              # PM processes and resources
  Templates/                   # [Template] *.md — COPY, never edit originals
  Processes/                   # SOPs: onboarding, PRD, QA, publishing, dev handover
  Onboarding/                  # 5-step PM onboarding sequence
  Guides/                      # AI, automation, diagram, Lark CLI guides
  Daily Updates/               # Running log of daily PM updates
  Internal Sessions/           # Session notes and transcripts
03 - Clients/                  # Client context — two-tier structure
  Active Cooking Clients/      # Active clients: Holsen, Fixguru, Xeersoft-CK Auto
  We're cooked discovery/      # Discovery: Ming Medical, JDX, Thermac
04 - QA & Known Issues/        # Bugs, test cases, workarounds
05 - Releases & Updates/       # Release notes, changelog, upcoming features
06 - Glossary & Taxonomy/      # Glossary.md, Tag Dictionary.md
07 - Decisions/                # ADR-NNN-short-title.md, Decision Log
08 - Configuration & Integrations/
09 - Intake & Triage/          # Request intake and triage SOP
```

---

## Content Conventions

### Every file must have YAML frontmatter

```yaml
---
owner: [Name]
status: draft | review | approved | archived
last_reviewed: YYYY-MM-DD
lark_url: [optional]
---
```

### Markdown rules
- ATX headers only (`#`, not underlines)
- Internal links: `[[Page Name]]` wikilinks, not relative paths
- Tables for structured data
- Checkboxes for action items: `- [ ] Task`
- Code blocks with language tag: ` ```yaml `

### Page structure
1. YAML frontmatter
2. H1 title
3. Overview paragraph
4. H2 content sections
5. See Also section with wikilinks

---

## File Placement Rules

| Content type | Where it goes |
|---|---|
| New active client | `03 - Clients/Active Cooking Clients/[Client Name]/` |
| New discovery client | `03 - Clients/We're cooked discovery/[Client Name]/` |
| New template | `02 - PM Playbook/Templates/[Template] Name.md` |
| New process/SOP | `02 - PM Playbook/Processes/` |
| New ADR | `07 - Decisions/ADR-NNN-short-title.md` — also update `Decision Log.md` |
| Bug or workaround | `04 - QA & Known Issues/` |
| Release note | `05 - Releases & Updates/` |
| Glossary term | `06 - Glossary & Taxonomy/Glossary.md` |

---

## Security & Confidentiality

- **Ming Medical content: NEVER commit or push to GitHub.** Files live in `We're cooked discovery/` and must stay local.
- **No client-specific tags** — use folders to separate client content, not tags.
- **Lark is read-only** — never suggest or make edits in Lark directly.

---

## Git Rules

- Always use `git mv` to move files — never drag in Finder (preserves history)
- Commit messages: short imperative summary, e.g. `add Holsen UAT form 2026-04`
- Remote: `github.com/Junying123/MAIA-Knowledge-Base`
- **Do not commit Ming Medical content**

---

## Tagging

Max 5 tags per page. Check `06 - Glossary & Taxonomy/Tag Dictionary.md` before creating new tags.

Key approved tags: `#draft` `#review` `#approved` `#archived` `#workflow` `#template` `#module` `#guide` `#decision` `#critical`

---

## Product Context

- **MAIA:** WhatsApp-first AI order-to-cash platform for B2B companies in SEA (manufacturing, wholesale, distribution)
- **Workspaces:** Sales, Finance, Logistics (+ Management)
- **Core flow:** Quotation → Sales Order → Invoice → Receipt
- **Known limits:** No multiple credit notes per invoice · No invoice from HOLD status · No bulk operations

### Active clients
| Client | Path | Status |
|---|---|---|
| Holsen | `Active Cooking Clients/Holsen/` | Phase 1 go-live |
| Fixguru | `Active Cooking Clients/Fixguru/` | UAT (no CPO step) |
| Xeersoft-CK Auto | `Active Cooking Clients/Xeersoft-CK Auto/` | Integration planning |
| Ming Medical | `We're cooked discovery/.../Ming Medical/` | Discovery — DO NOT PUSH |
| JDX | `We're cooked discovery/.../JDX/` | Discovery |
| Thermac | `We're cooked discovery/.../Thermac/` | Discovery |

---

## Do Not

- Reorganise folder structure without Gareth's approval
- Edit `[Template] *.md` files directly — always copy first
- Invent MAIA features — document only what exists
- Create new tags without checking Tag Dictionary
- Commit or push anything from `We're cooked discovery/Ming Medical/`

---

**Last Updated:** 2026-04-05
**Maintained By:** Gareth (KB Lead)
