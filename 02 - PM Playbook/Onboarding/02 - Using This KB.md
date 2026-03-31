---
owner: Gareth
status: approved
last_reviewed: 2026-03-31
---

# Using This KB

## What This KB Is (and Is Not)

This is not a personal notes app. It is the team's **single source of truth** for everything MAIA: product features, client context, PM processes, templates, known bugs, key decisions.

The goal is that no knowledge should live only in one person's head. When you learn something new — a client quirk, a product limitation, a better way to run a req gathering session — it belongs here, not in your private notes.

## Why It Exists

| Problem | KB Solution |
|---------|------------|
| "I already explained this to the last PM, and the one before that" | Client context lives in `03 - Clients/[Client Name]/` |
| "Which PRD format are we using this quarter?" | One canonical template in `02 - PM Playbook/Templates/` |
| "Why did we decide not to use X approach?" | ADRs in `07 - Decisions/` |
| "What's the current status of the invoice module?" | Module docs in `01 - MAIA Product/` |
| "New PM starts Monday — what do we do?" | This onboarding guide + KB = 2-day ramp-up |

## What Will Actually Improve

- No more inconsistent PRDs or QA docs across PMs
- New PM ramps up using the KB instead of interrogating the team
- Client context survives when a PM rotates off an account
- Product decisions are documented with rationale, not just outcomes

## Your Responsibility

**You are not just a reader — you are a contributor.** Every time you update a page, the whole team gets smarter. The KB is only as good as the team that maintains it.

If you notice something wrong, fix it. If you learn something new, write it in. If a template is outdated, flag it to Gareth.

---

## Folder Structure

```
📁 00 - Home               → Start here. Governance, quick reference, this onboarding.
📁 01 - MAIA Product       → Product features, modules, workflows, known limitations, client-facing training (`Client Training/`).
📁 02 - PM Playbook        → PM processes, templates, SOPs, onboarding guides, internal sessions (`Internal Sessions/`).
📁 03 - Clients            → One subfolder per client. Context, history, requirements.
📁 04 - QA & Known Issues  → Test scenarios, known bugs, workarounds.
📁 05 - Releases & Updates → Release notes, upcoming features, changelog.
📁 06 - Glossary & Taxonomy → Canonical definitions and approved tags.
📁 07 - Decisions          → ADRs (Architecture Decision Records) and decision log.
📁 08 - Configuration & Integrations → System config, integration specs.
📁 09 - Intake & Triage    → New request workflow and inbox.
```

**Rule of thumb:** When you're not sure where something belongs, ask: *who needs to find this?* Client-specific → `03 - Clients`. Product behaviour → `01 - MAIA Product`. Process or template → `02 - PM Playbook`. **Client-facing** training slides and facilitator notes → `01 - MAIA Product/Client Training/`. **Internal** PM/engineering briefings and transcripts → `02 - PM Playbook/Internal Sessions/`.

---

## How to Find Information

### Option 1 — Search (fastest)
Press `Cmd+Shift+F` and type any keyword. Obsidian searches across every file in the vault instantly.

### Option 2 — Quick Reference
Open [[Quick Reference]] — it's a curated index of the most commonly used pages.

### Option 3 — Browse the folder structure
Use the left sidebar. Expand folders to browse by category.

### Option 4 — Follow a wikilink
Many pages have "See Also" sections with links to related pages. Click them to navigate.

---

## How to Use a Template

Templates live in `02 - PM Playbook/Templates/`. **Never edit a template directly** — always copy it first.

1. Open the template file (e.g. `[[02 - PM Playbook/Templates/[Template] User Story]]`)
2. Select all (`Cmd+A`), copy (`Cmd+C`)
3. Create a new file in the appropriate folder (`Cmd+N`)
4. Paste the template content
5. Rename the file (right-click the tab or file in sidebar)
6. Fill in all `[placeholder]` values
7. Update the YAML frontmatter: set your name as `owner`, set `status: draft`, set today's date as `last_reviewed`
8. Save (`Cmd+S`)

---

## What Is YAML Frontmatter?

Every KB page starts with a block like this at the very top:

```yaml
---
owner: Gareth
status: draft
last_reviewed: 2026-02-28
---
```

This is metadata that appears in Obsidian's Properties panel (top of each note). It helps the team know:
- **owner** — Who is responsible for keeping this page accurate
- **status** — `draft` (in progress) → `review` (needs sign-off) → `approved` (live, trusted)
- **last_reviewed** — When the content was last verified as current

When you create a new page, always add this block. When you update a page, update `last_reviewed`.

---

## What Are Wikilinks?

A wikilink looks like this: `[[Page Name]]`

Click it in Obsidian and it takes you straight to that page. If the page doesn't exist yet, it shows as an unresolved link (red in graph view) — that's a signal that something needs to be created.

You can also link to a specific heading: `[[Page Name#Section Title]]`

Or give it custom display text: `[[Page Name|What You Want It to Say]]`

**Always use wikilinks for internal references** — don't use relative file paths. Wikilinks survive file renames automatically.

---

## How to Contribute

### Small changes (typos, corrections, clarifications)
Edit directly. Notify Gareth via message so he can review.

### New content (new page, new template, new process doc)
1. Create the file in the appropriate folder
2. Set `status: draft` in frontmatter
3. Notify Gareth to review (`status: review` when ready for review)
4. Once approved, Gareth updates status to `approved`

### Major structural changes
Raise with Gareth first. Structural changes (renaming folders, moving files) need coordination to avoid broken links.

> [!warning] Lark is Read-Only
> Content is published from this Markdown KB to Lark. **Never edit content directly in Lark.** Changes made in Lark will be overwritten the next time someone publishes from Markdown. Always edit here first.

---

## See Also

- [[02 - PM Playbook/Processes/Publish to Lark SOP]] — How to publish content to Lark
- [[06 - Glossary & Taxonomy/Tag Dictionary]] — Approved tags
- [[06 - Glossary & Taxonomy/Glossary]] — Canonical product terminology
- [[Quick Reference]] — Curated index of most-used pages
- [[PM Onboarding Hub]] — Back to the full onboarding checklist
