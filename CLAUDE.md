# CLAUDE.md — MAIA Knowledge Base

This file contains rules and conventions for AI assistants (like Claude Code) working in this knowledge base.

## KB Overview

**Purpose:** Single source of truth for MAIA Product Management team
**Tool:** Obsidian (Markdown-based knowledge base)
**Primary Users:** 4 junior PMs managing B2B ERP/OMS product
**Governance:** KB Lead (Gareth) + team contributions

## Folder Structure & Naming

```
📁 brain/                  → Session context (North Star, Memories, Patterns, Gotchas, Key Decisions)
📁 00 - Home               → Governance, quick reference
📁 01 - MAIA Product       → Product features, modules, workflows, client-facing training (`Client Training/`)
📁 02 - PM Playbook        → Processes, templates, SOPs, onboarding, internal sessions (`Internal Sessions/`)
📁 03 - Clients            → Per-client context
📁 04 - QA & Known Issues  → Testing, bugs, workarounds
📁 05 - Releases & Updates → Release notes, changelog
📁 06 - Glossary & Taxonomy → Definitions, tags
📁 07 - Decisions          → ADRs, decision log
📁 08 - Configuration & Integrations → System config
📁 09 - Intake & Triage    → Request workflow
```

**Naming Conventions:**
- Folders: `NN - Descriptive Name` (numbers for ordering)
- Templates: `[Template] Name.md`
- ADRs: `ADR-NNN-short-title.md`
- Client folders: `03 - Clients/[Client Name]/`

## File Standards

### YAML Frontmatter (Required)

Every KB page must have:

```yaml
---
owner: [Name]
status: draft | review | approved | archived
last_reviewed: YYYY-MM-DD
lark_url: [optional - if published to Lark]
---
```

### Markdown Style

- Use ATX headers (`#` syntax, not underlines)
- Use wikilinks for internal references: `[[Page Name]]`
- Use tables for structured data
- Use checkboxes for action items: `- [ ] Task`
- Use code blocks with language tags: ` ```yaml `

### Section Order

Standard page structure:
1. YAML frontmatter
2. Page title (H1)
3. Overview/purpose
4. Main content (H2 sections)
5. "See Also" section at bottom with wikilinks

## Single Source of Truth Rule

**CRITICAL:** This Markdown KB is the canonical source. Lark is a published mirror.

- All edits happen in Markdown
- Lark is read-only for consumers
- After publishing to Lark, add `lark_url` to frontmatter
- Never edit directly in Lark

**Publishing workflow:** See `[[02 - PM Playbook/Processes/Publish to Lark SOP]]`

## Writing Style

### SOPs and Processes
- Use active voice
- Start with purpose/context
- Include step-by-step instructions
- Add examples where helpful
- Link to related templates

### Templates
- Use placeholder text in `[brackets]`
- Include YAML frontmatter examples
- Add "See Also" section
- Keep concise but comprehensive

### Product Documentation
- Focus on "what" and "why", not just "how"
- Include status flows and workflows
- Document known limitations
- Link to related modules/workflows

## Tagging Strategy

See `[[06 - Glossary & Taxonomy/Tag Dictionary]]` for approved tags.

**Key tags:**
- Status: `#draft`, `#review`, `#approved`, `#archived`
- Type: `#workflow`, `#template`, `#module`, `#guide`, `#decision`
- Priority: `#critical`, `#high-priority`, `#medium-priority`, `#low-priority`

**Don't:**
- Over-tag (5 tags max per page)
- Create new tags without checking dictionary
- Use client-specific tags (use folders instead)

## Content Organization

### When to Create New File
- New workflow or process
- New template
- New module documentation
- Per-client content

### When to Update Existing File
- Clarifications or corrections
- Status changes
- Adding examples
- Updating "See Also" links

### When to Archive
- Outdated workflows
- Deprecated features
- Old decisions (superseded ADRs)

**Archive process:**
1. Change `status: archived` in frontmatter
2. Add deprecation note at top
3. Link to replacement content
4. Move to `archive/` subfolder if needed

## Working with Templates

Templates live in: `02 - PM Playbook/Templates/`

**Using a template:**
1. Copy entire template file
2. Rename with actual content title
3. Fill in all `[placeholder]` values
4. Update frontmatter (owner, date, status)
5. Save in appropriate folder

**Don't** edit template files directly — always copy first.

## Product-Specific Context

### MAIA Product
- ERP/OMS for B2B companies
- 3 workspaces: Sales, Finance, Logistics
- 56 modules total
- Core workflow: Quote-to-Cash (Quotation → Sales Order → Invoice → Receipt)

### Known Limitations
See `[[01 - MAIA Product/Overview/Known Limitations]]`

**Critical issues:**
- Cannot create multiple credit notes per invoice
- Cannot invoice directly from HOLD status
- Bulk operations not available

### Test Environment
- **Dev:** https://maia-oms-dev.vercel.app (for dev team testing)
- **Demo:** https://maia-oms-demo.vercel.app (for client demos, PM testing)

## Maintenance

### Regular Reviews
- KB Lead reviews all `#review` content weekly
- Update `last_reviewed` dates when reviewing
- Archive outdated content
- Keep Quick Reference current

### Contribution Workflow
1. Small changes: Edit directly, notify KB Lead
2. New content: Create as `status: draft`, request review
3. Major changes: Create ADR if architectural decision

### Quality Standards
- No broken wikilinks
- All templates have examples
- All processes have "See Also" links
- All product pages have accurate status

## Session Workflow

### Starting a Session
Run `/standup` to load context: reads `brain/North Star.md`, `brain/Memories.md`, recent git changes, and active client status. Outputs today's priorities and open items.

### During a Session
- Use `/dump [notes]` to capture freeform input and route it to the right KB folder
- Use `/client-sync` to pull a live snapshot of all active client statuses
- Use `/daily-update [notes]` to format the WhatsApp daily update

### Ending a Session
Run `/wrap-up` to review changes, check frontmatter, flag orphans, update `brain/Memories.md` Recent Context, and commit.

## Brain Folder

The `brain/` folder is the session context layer — read by Claude at the start of every session.

| File | Purpose |
|---|---|
| `brain/North Star.md` | Team goals, current focus, anti-goals, shifts log |
| `brain/Memories.md` | Index of all persistent context and active client summaries |
| `brain/Key Decisions.md` | Architectural and workflow decisions (quick reference) |
| `brain/Patterns.md` | Recurring PM and KB patterns that work well |
| `brain/Gotchas.md` | Known MAIA product issues, KB traps, git warnings |

**Always read `brain/Gotchas.md` before touching client folders or git operations.**

## Slash Commands

Available via `.claude/commands/`:

| Command | Usage |
|---|---|
| `/standup` | Morning context load — priorities, clients, open items |
| `/wrap-up` | Session close — review, clean, update brain/, commit |
| `/daily-update [notes]` | Format WhatsApp daily client update |
| `/dump [notes]` | Capture freeform input and route to correct KB folder |
| `/client-sync` | Snapshot of all active client statuses and deadlines |

## AI Assistant Guidelines

When working in this KB:

1. **Start with brain/** — Read `North Star.md` and `Memories.md` at session start
2. **Preserve structure** — Don't reorganize folders without approval
3. **Use templates** — Always copy templates, don't invent new formats
4. **Maintain frontmatter** — All pages need YAML metadata
5. **Use wikilinks** — `[[Page Name]]` not relative paths
6. **Update indexes** — When creating ADRs, update Decision Log
7. **Check glossary** — Use canonical terms from Glossary
8. **Don't invent MAIA features** — Document what exists, not what could be
9. **Link liberally** — Add "See Also" sections to connect related content
10. **End with wrap-up** — Update `brain/Memories.md` and commit at session end

## External References

Key external docs:
- Test automation: `/Users/garethng/maiav2-test/`
- User stories: `/Users/garethng/maiav2-test/USER_STORIES_CSV_ANALYSIS_SUMMARY.md`
- Product docs: `/Users/garethng/maiav2-test/docs/`

## Questions?

- KB structure: See `[[00 - Home/README]]`
- Terminology: See `[[06 - Glossary & Taxonomy/Glossary]]`
- Publishing: See `[[02 - PM Playbook/Processes/Publish to Lark SOP]]`
- Templates: Browse `[[02 - PM Playbook/Templates]]`

---

**Last Updated:** 2026-04-04
**Maintained By:** Gareth (KB Lead)
