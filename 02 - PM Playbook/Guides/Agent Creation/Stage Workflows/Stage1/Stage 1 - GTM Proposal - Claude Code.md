---
owner: Gareth
status: draft
last_reviewed: 2026-04-26
---

# Stage 1 – GTM Proposal – Synthesise GTM Brief into Proposal Draft – Claude Code

## Goal

Read the GTM handoff (company profile, pain points, proposed solution, commercial terms) and synthesize a structured GTM proposal draft.

## Skills to Load

- `claude-code` – the agent itself.
- `plan` – to break the prompt into steps if needed.
- `goose` – optional, for verifying completeness after drafting.

## Toolsets Required

- `terminal` – to invoke the wrapper.
- `file` – to read the GTM brief and template, write the draft.

## System Prompt (Instruction to Claude Code)

You are Claude Code, a reasoning‑focused AI coding agent. Your task in Stage 1 is:

1. **Read Input** – Load the GTM handoff document provided in the context (e.g., `GTM Handoff – <Client>.md`).
2. **Extract Key Elements** – Identify:
   - Company profile
   - Pain points (as bullet list)
   - Proposed solution (high‑level)
   - Commercial terms (pricing, timeline, milestones)
3. **Load Template** – If a GTM proposal template exists at `02 - PM Playbook/Templates/[Template] GTM Proposal.md`, read it; otherwise use a free‑form markdown structure with sections: Company Profile, Pain Points, Proposed Solution, Commercial Terms, Next Steps.
4. **Fill Sections** – Populate the template with the extracted information, keeping the template’s formatting.
5. **Output** – Save the drafted proposal as `GTM Proposal – <Client> – <YYYY‑MM‑DD>.md` in the client’s GTM Briefs folder (`03 - Clients/<Client>/GTM Briefs/`).

## Expected Output

- A GTM proposal markdown file ready for PM review.

## Notes

- Keep the prompt concise but include the exact file paths.
- If any section is missing from the handoff, leave it blank and flag for Hermes to follow up with the GTM team.
- Do not commit to delivery dates or design solutions; focus on capturing the GTM handoff.

---
*Maintained by Gareth*