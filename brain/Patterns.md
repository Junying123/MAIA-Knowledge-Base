---
owner: Gareth
status: approved
last_reviewed: 2026-04-04
---

# Patterns

> Recurring approaches and conventions that work well in this KB and with MAIA clients.

## Daily Update Pattern

**Format:** Client-first, phone-screen short
**Channel:** WhatsApp
**Source:** Apple Notes → `/daily-update` → WhatsApp

```
*[Client Name]*
• [Update 1]
• [Update 2]

*[Next Client]*
• [Update 1]
```

Always include customer group assignments. Never omit a client without reason.
Most active/urgent client goes first.

## Client Onboarding Pattern

1. Create folder: `03 - Clients/[Client Name]/`
2. Copy `[Template] Client Context.md`
3. Link to relevant product modules in the file
4. Add to `03 - Clients/README.md` index

## Requirements Gathering Pattern

Use `req-gathering-output` skill → produces structured Customer Narrative output → file under `03 - Clients/[Client]/`.

## KB Page Structure Pattern

1. YAML frontmatter (owner, status, last_reviewed)
2. H1 title
3. Overview paragraph
4. H2 content sections
5. See Also (wikilinks to related pages)

## Wikilink Pattern

- Always `[[Page Name]]` not relative file paths
- Link generously — graph value comes from connections
- Link to: modules, clients, processes, glossary terms
- Every new page should be linked from at least one existing page

## Template Usage Pattern

1. Navigate to `02 - PM Playbook/Templates/`
2. **Copy** the file (never edit the original)
3. Rename with actual content title
4. Fill all `[placeholder]` values
5. Update frontmatter (owner, date, status: draft)

## ADR Pattern

- File: `ADR-NNN-short-title.md` in `07 - Decisions/`
- Trigger: Any architectural or process decision affecting the whole team
- After creating: Update `[[07 - Decisions/Decision Log]]`

## Publishing to Lark Pattern

1. Finalise and approve content in Markdown
2. Follow `[[02 - PM Playbook/Processes/Publish to Lark SOP]]`
3. Add `lark_url` to frontmatter after publishing
4. Never edit in Lark — always edit Markdown source

## See Also
- [[brain/Gotchas]]
- [[02 - PM Playbook/Templates]]
- [[06 - Glossary & Taxonomy/Tag Dictionary]]
