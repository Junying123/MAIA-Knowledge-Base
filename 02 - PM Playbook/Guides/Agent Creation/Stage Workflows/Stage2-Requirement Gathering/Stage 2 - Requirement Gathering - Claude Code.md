---
owner: Gareth
status: draft
last_reviewed: 2026-04-26
---

# Stage 2 – Requirement Gathering – Extract and Fill RG Template from Transcript – Claude Code

## Goal

Read the raw discovery transcript, extract answers to the standard clarifying‑question set, and fill the Requirement Gathering template.

## Skills to Load

- `claude-code` – the agent itself.
- `plan` – to break the prompt into steps if needed.
- `goose` – optional, for verifying completeness after drafting (can be called from within the prompt or as a separate step).

## Toolsets Required

- `terminal` – to invoke the wrapper.
- `file` – to read the transcript and template, write the draft.

## System Prompt (Instruction to Claude Code)

You are Claude Code, a reasoning‑focused AI coding agent. Your task in Stage 2 is:

1. **Read Input** – Load the raw transcript file provided in the context (e.g., `2026-04-23-Ming Medical-Requirements-Gathering.md`).
2. **Extract Answers** – Identify answers to the following clarifying‑question set:
   - What problem are you trying to solve?
   - What is the current workaround?
   - What is the expected outcome?
   - How many users/transactions are affected?
   - What is the priority? (Must‑have vs Nice‑to‑have)
   Capture each answer as a bullet point.
3. **Load Template** – Read the empty Requirement Gathering template from `02 - PM Playbook/Templates/[Template] Requirement Gathering.md`.
4. **Fill Sections** – Using the extracted answers, populate every section of the template:
   - Business context and problem
   - Current state vs desired state
   - Expected behavior
   - Acceptance criteria
   - Priority and urgency
   - Dependencies
   Keep the template’s formatting (headers, checkboxes `- [ ]` for action items).
5. **Apply Triage SOP** – Consult `09 - Intake & Triage/Triage SOP (Product vs Config vs Custom)` to classify the requirement as **Product Enhancement**, **Configuration**, or **Custom Development**. Add a classification block at the top of the document:
   ```
   classification: Product Enhancement
   rationale: <short explanation>
   ```
6. **Output** – Save the filled document as `Requirement Gathering – <Client> – <YYYY‑MM‑DD>.md` in the same folder as the transcript (or the path specified by Hermes).

## Expected Output

- A completed RG output markdown file with all sections filled and a classification block.

## Notes

- Keep the prompt concise but include the exact file paths.
- If any section cannot be answered from the transcript, leave it blank and flag it for Hermes to follow up with the client.
- Do **not** commit to delivery dates or design solutions; focus purely on capturing the client’s stated needs.

---
*Maintained by Gareth* 