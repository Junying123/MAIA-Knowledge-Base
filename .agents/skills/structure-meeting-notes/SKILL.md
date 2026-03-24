---
name: structure-meeting-notes
description: "Turn raw bullet-point meeting notes into a structured KB meeting notes page with correct frontmatter and wikilinks. Use when: after any client or internal meeting, structuring raw notes, creating meeting records. Triggers on: /structure-meeting-notes, structure these notes, format meeting notes, clean up my notes."
user-invocable: true
---

# Meeting Notes Structurer

Converts raw, unstructured meeting notes into a clean, KB-compliant meeting notes page saved to the correct client folder.

## Steps

1. **Identify the client and meeting context** from the user's input:
   - Client name (to route to correct folder)
   - Meeting date (defaults to today if not specified)
   - Meeting topic/type (kickoff, UAT, feature review, etc.)

2. **Read the meeting notes template** using Read tool:
   - Path: `02 - PM Playbook/Templates/[Template] Meeting Notes.md`

3. **Read client context** using Read tool (if client identified):
   - Path: `03 - Clients/[client]/Client Overview.md`
   - Use to correctly identify attendees' roles, current onboarding stage, and any known context

4. **Read recent meeting history** using Glob + Read (last 2 meetings):
   - Pattern: `03 - Clients/[client]/Meetings/*.md`
   - Skim for open action items carried forward

5. **Structure the raw notes into sections:**

   ```
   ## Meeting Details
   - Date, attendees, meeting type

   ## Context
   - Current onboarding stage, what was happening before this meeting

   ## Discussion Summary
   - Key points covered (grouped by topic, not verbatim)

   ## Decisions Made
   - Concrete decisions with owner noted

   ## Action Items
   - [ ] Action — Owner: [Name] — Due: YYYY-MM-DD

   ## Open Questions
   - Questions raised that need follow-up

   ## Next Steps
   - What happens after this meeting
   ```

6. **Apply KB standards:**
   - YAML frontmatter: `owner`, `status: draft`, `last_reviewed: today`
   - Use wikilinks `[[Page Name]]` for any KB page references
   - Use MAIA terminology from `[[06 - Glossary & Taxonomy/Glossary]]`
   - Tag with `#client` and relevant workspace tag (`#sales`, `#logistics`, etc.)

7. **Determine filename:** `YYYY-MM-DD-[brief-topic-slug].md`

8. **Save to:** `03 - Clients/[client]/Meetings/YYYY-MM-DD-[topic].md` using Write tool.

9. **Report:** Show saved path. Flag any action items that look like they need immediate attention.

## Usage

```
/structure-meeting-notes
[paste your raw notes below]

---
Holsen call 24 March
- Gareth, Ivan, Sarah from Holsen
- UAT mostly done, 3 issues outstanding
- Credit note issue still blocking — Gareth to escalate to dev
- Go-live confirmed for 31 March
- Sarah asked about bulk operations — told her not available, logged as feature request
- Next call: 30 March pre-go-live check
```

## Rules

- Never change the meaning of what was said — structure only, don't interpret
- Mark action items as `- [ ]` checkboxes with owner and due date
- If client name is not clear from the notes, ask before proceeding
- Set `status: draft` — Gareth reviews before approving
