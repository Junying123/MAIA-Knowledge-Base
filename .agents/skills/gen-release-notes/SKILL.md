---
name: gen-release-notes
description: "Generate formatted release notes from the MAIA Feature Changelog. Use when preparing a release, communicating updates to clients, or publishing version notes. Triggers on: /gen-release-notes, generate release notes, write release notes, what changed in version, prepare release."
user-invocable: true
---

# Release Notes Generator

Reads the MAIA Feature Changelog and produces formatted, audience-appropriate release notes for a given version or date range.

## Steps

1. **Parse the command** for scope:
   - `--version=[v1.2.0]` → filter by version tag
   - `--from=[YYYY-MM-DD]` → filter by date range start
   - `--to=[YYYY-MM-DD]` → filter by date range end (defaults to today)
   - `--audience=[internal|client]` → tone and detail level (defaults to `client`)

2. **Read the Feature Changelog** using Read tool:
   - Path: `05 - Releases & Updates/Feature Changelog.md`

3. **Read Upcoming Features** using Read tool:
   - Path: `05 - Releases & Updates/Upcoming Features.md`
   - Use to add a "Coming Soon" section if relevant

4. **Filter changelog entries** to the requested version or date range.

5. **Categorise each change:**
   - **New Features** — net-new capabilities
   - **Improvements** — enhancements to existing features
   - **Bug Fixes** — resolved issues from Known Bugs tracker
   - **Breaking Changes** — anything that changes existing behaviour (highlight prominently)

6. **Write audience-appropriate copy:**

   **Client audience (`--audience=client`):**
   - Plain language, no ERPNext/technical terms
   - Focus on business impact ("You can now..." / "Fixed an issue where...")
   - Reference affected workspaces (Sales, Finance, Logistics)
   - Omit internal/dev-only changes

   **Internal audience (`--audience=internal`):**
   - Include DocType names, technical detail, and dev context
   - Reference related ADRs or decisions
   - Include known issues and workarounds still pending

7. **Output format:**

   ```markdown
   # MAIA Release Notes — [Version or Date Range]

   ## What's New
   - [Feature]: [plain-language description]

   ## Improvements
   - [Area]: [what changed and why it's better]

   ## Bug Fixes
   - Fixed: [what was broken and what it affected]

   ## Known Issues
   - [issue] — Workaround: [brief workaround]

   ## Coming Soon
   - [upcoming features flagged in Upcoming Features.md]
   ```

8. **Apply KB standards:**
   - YAML frontmatter: `owner: Gareth`, `status: draft`, `last_reviewed: today`
   - Tag with `#release`

9. **Save to:** `05 - Releases & Updates/Release Notes.md` (append) or a new file `05 - Releases & Updates/[version]-release-notes.md`.

10. **Report:** Confirm what was included and flag any changelog entries that were ambiguous or need PM review before publishing.

## Usage

```
/gen-release-notes --version=v1.2.0 --audience=client
/gen-release-notes --from=2026-03-01 --to=2026-03-31 --audience=internal
/gen-release-notes --from=2026-01-01 --audience=client
```

## Rules

- Never include internal bugs or config issues in client-facing notes
- Always flag Breaking Changes prominently — do not bury them
- If the changelog is incomplete or entries are ambiguous, list them as "needs PM review" rather than guessing
