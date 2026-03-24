---
name: stakeholder-update
description: "Draft a client-facing or internal stakeholder update based on recent KB activity for a client. Use when preparing status updates, progress emails, or check-in summaries. Triggers on: /stakeholder-update, write client update, status update for client, prepare progress email."
user-invocable: true
---

# Stakeholder Update Generator

Reads a client's KB folder and recent activity to draft a concise, professional stakeholder update.

## Steps

1. **Parse the command** for context:
   - `--client=[name]` → required
   - `--audience=[client|internal|management]` → who receives this (defaults to `client`)
   - `--period=[this-week|this-month|since-kickoff]` → time scope (defaults to `this-week`)
   - `--format=[email|slack|doc]` → output format (defaults to `email`)

2. **Read client context** using Read tool:
   - `03 - Clients/[client]/Client Overview.md` — company background, PM owner, go-live date
   - `03 - Clients/[client]/Onboarding Status.md` — current phase and progress

3. **Read recent meetings** using Glob + Read:
   - Pattern: `03 - Clients/[client]/Meetings/*.md`
   - Focus on meetings within the --period scope
   - Extract: decisions made, action items completed, open items

4. **Read feature requests and gaps** using Read tool:
   - `03 - Clients/[client]/Feature Requests/*.md`
   - Note any open requests and their current status

5. **Read UAT status** (if in UAT phase) using Glob + Read:
   - `03 - Clients/[client]/UAT/*.md`
   - Summarise pass/fail counts and outstanding issues

6. **Draft the update** tailored to the audience:

   **Client audience:**
   ```
   Subject: MAIA Update — [Client Name] — [Date]

   Hi [Client Contact],

   Here's a quick summary of where we are this week:

   ✅ Completed
   - [item 1]
   - [item 2]

   🔄 In Progress
   - [item 1] — Expected by [date]

   ⚠️ Needs Your Input
   - [item 1] — Action required by [date]

   📅 Next Steps
   - [next milestone or meeting]

   Let me know if you have any questions.
   [PM Name]
   ```

   **Internal/Management audience:**
   - Include onboarding health status (On Track / At Risk / Blocked)
   - Include open items by category (config, dev, client action)
   - Note any scope changes or risks
   - Reference relevant KB pages with wikilinks

7. **Flag risks** proactively:
   - Go-live within 2 weeks → add risk flag if open items > 5
   - Overdue action items → highlight with owner
   - Known limitations affecting client → note workaround status

8. **Save to:** `03 - Clients/[client]/` as `[YYYY-MM-DD]-stakeholder-update.md` if --format=doc, otherwise output inline for copy-paste.

## Usage

```
/stakeholder-update --client="Holsen" --audience=client --period=this-week
/stakeholder-update --client="Holsen" --audience=management --period=this-month --format=doc
/stakeholder-update --client="Fixguru" --audience=internal --period=since-kickoff
```

## Rules

- Never share internal bugs, dev debt, or team issues in client-facing updates
- Always confirm go-live date from Client Overview — don't use dates from memory
- If action items are overdue, flag them clearly — do not omit them
- Use client's own terminology from their Config Overlay where possible
