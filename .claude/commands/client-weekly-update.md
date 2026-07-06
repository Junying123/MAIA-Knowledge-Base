Generate a client-facing WhatsApp project update from the client's backward plan or raw notes.

Usage: /client-weekly-update [client name] [phase: weekly | golive | post-golive]

Steps:
1. Read the client's backward plan / timeline file to get current milestone status
2. Identify the correct phase (see below) and apply the matching template
3. Remove items client has already delivered — do not list completed actions
4. No internal team names, no jargon, no apology tone

---

## Phase Detection Guide

| Phase | When to use |
|---|---|
| `weekly` | Build is in progress, go-live is more than 3 days away |
| `golive` | Go-live is within 1–3 days, closing items outstanding |
| `post-golive` | Client is live, monitoring / hypercare / next phase scoping |

---

## Template 1 — Weekly Project Update (in-build phase)

Use when: project is mid-build, go-live is more than 3 days away.
First send of week: include intro line. Subsequent sends: omit intro.

```
Hi [Client] team! 👋 Starting today, we'll send a weekly project update every Monday.

---

*✅ Completed*
• [Done items]

*🔧 Currently in Development*
• [Active build items]

*🔴 Current Blockers*
• [What is blocking progress — omit section if no blockers]

*🛡️ Mitigation*
• [What we're doing if blocker isn't cleared — omit if no blockers]

*📅 Target Dates*
• [Milestone: date]
• [Milestone: date]

*⚙️ Mindhive Actions*
• [What our team is doing]

*📋 [Client Name] Actions*
• [What client needs to do — omit section if nothing outstanding]

---

Please confirm the target dates above work on your end. Let us know if anything needs adjusting! 🙌
```

---

## Template 2 — Go-Live Confirmation (closing phase)

Use when: go-live is within 1–3 days, final items outstanding from client.
Do NOT use the weekly intro here — this is a direct action message.

```
Hi [Client] team! 👋

Quick update ahead of go-live this week:

*📋 Need from you by [date]*
• [Outstanding item from client]
• [Outstanding item from client]

*📅 Confirmed dates*
• [Data / prep milestone]: [date]
• *Go-Live: [date]*
• [Next milestone e.g. training]: [date]

We're ready on our end — just need [specific thing] from your side to complete the setup. Let us know if anything has changed! 🙌
```

---

## Template 3 — Post Go-Live / Hypercare Update

Use when: client is live, first weeks of production use, or scoping next phase.

```
Hi [Client] team! 👋

Weekly update — Week [N] post go-live.

*✅ Live Status*
• [Client] is live on MAIA as of [date]
• [Any notable live activity or milestone]

*🔧 In Progress*
• [Open punch list items / hypercare fixes]
• [Next phase scoping if applicable]

*📅 Coming Up*
• Refresher training: [date or TBC]
• [Next phase / feature]: [date or TBC]

*📋 [Client Name] Actions*
• [Any outstanding items — omit section if none]

---

Let us know if you're hitting any issues — we're on standby. 🙌
```

---

## Template 4 — Tracker-to-Update Conversion (generic weekly digest)

Use when: converting raw internal project tracker items directly into a WhatsApp-ready client update, not tied to a specific go-live phase.

You are a startup B2B Product Manager at an AI software company. Convert raw internal project tracker updates into a professional weekly client update.

Audience: business stakeholders (Product Owners, Managers, Directors, Business Owners).

Purpose:
- Keep clients informed of progress
- Build confidence that the project is moving forward
- Set expectations for the coming week
- Highlight important upcoming milestones
- Clearly communicate anything needed from the client

Suitable for sending directly into a WhatsApp group.

### Writing Principles
1. Write for business users, not technical users.
2. Avoid technical jargon wherever possible.
   Example: instead of "Completed API integration," say "Completed the system integration required for the upcoming testing phase."
   Instead of "Prompt optimisation," say "Improved the quality and reliability of AI responses."
3. NEVER expose internal implementation details. Only communicate business value.
4. Do NOT translate tracker items one-by-one. Read ALL completed tasks, understand what they collectively achieved, then summarise into meaningful business outcomes.
   Example: internal tasks "Created user accounts / Configured permissions / Imported customer data" → "Completed the initial system setup and user onboarding preparation."
5. Group related work together — combine small bullets into two or three stronger progress updates instead of eight small ones.
6. Tone: professional, friendly, confident, transparent. Never overpromise. Never exaggerate progress. If something is delayed, acknowledge it professionally.
7. Keep it concise — client should finish reading within one minute.

### Task
Generate TWO outputs.

**OUTPUT A — PM Review Notes (Internal, not sent to client)**

Review the input and flag issues, e.g.:
- ⚠ No upcoming milestone found.
- ⚠ Client action is missing.
- ⚠ Focus this week appears unrealistic.
- ⚠ Tracker items are too technical.
- ⚠ Upcoming UAT has no client preparation tasks.
- ⚠ Go Live is approaching but no training is planned.
- ⚠ There are no completed items this week.

If everything looks good: "No issues identified."

**OUTPUT B — Client Weekly Update (WhatsApp message only)**

Format exactly like this:

```
Hi team, here's this week's progress update: 👋

*✅ Progress last week*

1. ...
2. ...

*🔧 Focus this week*

1. ...
2. ...

*📅 Upcoming milestones*

- Date — Event
- Date — Event

*📋 Action required from your team*

1. ...
2. ...

We will continue to keep everyone updated on the project progress. Thank you! 🙌
```

### Rules
- If there are no Action Required items, remove that section entirely.
- If there are no Upcoming Milestones, remove that section entirely.
- Rewrite technical work into business language.
- Summarise multiple completed tasks contributing to one outcome together.
- Never invent progress that was not provided.
- Never mention risks unless they materially affect the client.
- A task still in progress belongs under Focus This Week, not Completed.

### Formatting Rules
- WhatsApp markdown only.
- Single asterisks (`*`) for bold text.
- Bullet points (`-`) for Upcoming Milestones.
- Numbered lists for Progress Last Week, Focus This Week, Action Required From Your Team.
- One empty line between sections.
- No tables.
- No markdown headings (`#`, `##`, `###`).
- Output must be ready to copy-paste directly into WhatsApp without editing.

### Input shape
```
Project Name:

Completed Last Week
<All completed tasks from the project tracker>

Focus This Week
<All this week's tasks from the project tracker>

Upcoming Milestones
<Date> - UAT
<Date> - Training
<Date> - Go Live

Action Required From Client
<All client action items>
```

---

## Rules (all templates)
- No internal team names (no dev names, no PM names)
- No internal terms (no M1/M2, no sprint/ticket language)
- No apology tone — confident and forward-looking
- Client actions = only genuinely outstanding items; never list things already delivered
- Omit any section that has no content (no empty bullets)
- Closing line always invites client to confirm dates or raise questions
