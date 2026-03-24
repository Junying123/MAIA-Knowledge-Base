---
name: fill-template
description: "Auto-fill a MAIA KB template with client context and today's date. Use when creating any new KB document from a template. Triggers on: /fill-template, fill template, create from template, new user story, new PRD, new QA scenario, new meeting notes, new requirement gathering."
user-invocable: true
---

# Template Auto-Filler

Copies a MAIA KB template, fills all placeholders with real values, and saves to the correct folder.

## Supported Template Types

| Type Keyword | Template File | Default Save Location |
|---|---|---|
| `user-story` | `[Template] User Story.md` | `02 - PM Playbook/` (or client folder if --client given) |
| `prd` | `[Template] PRD.md` | `02 - PM Playbook/` |
| `qa-scenario` | `[Template] QA Scenario.md` | `04 - QA & Known Issues/Test Cases/` |
| `meeting-notes` | `[Template] Meeting Notes.md` | `03 - Clients/[client]/Meetings/` |
| `requirement-gathering` | `[Template] Requirement Gathering.md` | `03 - Clients/[client]/` |
| `gap-analysis` | `[Template] Feature Gap Analysis.md` | `04 - QA & Known Issues/` |
| `triage` | `[Template] Triage Decision Record.md` | `09 - Intake & Triage/` |
| `client-onboarding` | `[Template] Client Onboarding.md` | `03 - Clients/[client]/` |

## Steps

1. **Parse the command** — extract template type and any flags:
   - `--client=[name]` → client name for folder routing and placeholder fill
   - `--feature=[name]` → feature name for document title
   - `--owner=[name]` → defaults to `Gareth` if not provided

2. **Read the template** using Read tool:
   - Path: `02 - PM Playbook/Templates/[Template] [type].md`

3. **Load client context** (if --client provided) using Read tool:
   - Path: `03 - Clients/[client]/Client Overview.md`
   - Use to fill any client-specific placeholders

4. **Fill all placeholders:**
   - `[Your Name]` / `[PM Name]` → owner value (default: Gareth)
   - `YYYY-MM-DD` → today's date
   - `[Client Name]` → --client value
   - `[Feature Name]` / `[Feature]` → --feature value
   - Set `status: draft` in YAML frontmatter
   - Set `last_reviewed:` to today's date

5. **Determine save path** from table above. If --client provided, route to client folder.

6. **Generate a filename:**
   - Meeting notes: `YYYY-MM-DD-[brief-topic].md`
   - User stories / PRDs: `[feature-name].md`
   - Triage records: `TRI-YYYY-MM-DD-[brief].md`
   - QA scenarios: `TC-[feature-name].md`

7. **Write the filled file** using Write tool to the correct path.

8. **Report back:** Show the file path created and list any placeholders still needing manual fill (e.g. fields the user must provide from context you don't have).

## Usage Examples

```
/fill-template meeting-notes --client="Holsen" --feature="UAT Review"
/fill-template user-story --client="Fixguru" --feature="Bulk Invoice Export"
/fill-template qa-scenario --feature="Credit Note Flow"
/fill-template triage --feature="Multiple Credit Notes Per Invoice"
/fill-template requirement-gathering --client="Holsen"
```

## Rules

- Never edit the original template file — always copy it
- Always set `status: draft` — never `approved` on first creation
- If the save folder doesn't exist, create it and note this in your response
- List remaining `[placeholder]` values that need manual fill at the end
