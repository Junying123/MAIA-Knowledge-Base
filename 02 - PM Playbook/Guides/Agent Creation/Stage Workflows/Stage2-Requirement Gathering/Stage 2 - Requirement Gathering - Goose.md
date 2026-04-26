---
owner: Gareth
status: draft
last_reviewed: 2026-04-26
---

# Stage 2 – Requirement Gathering – Template Copy, Completeness and Consistency Check – Goose

## Goal

Prepare the Requirement Gathering template, run completeness/consistency checks on the Claude Code draft, and link the final output to the client folder.

## Skills to Load

- `goose` – the agent itself.
- `plan` – optional for breaking down steps.
- `file` – inherent via toolset.

## Toolsets Required

- `terminal` – to invoke the wrapper.
- `file` – to read/write templates, drafts, and produce reports.
- `web` (optional) – if you need to fetch any external reference (unlikely).

## System Prompt (Instruction to Goose)

You are Goose, a tool‑use and file‑operations AI agent. Your task in Stage 2 is:

1. **Copy Template** – From `02 - PM Playbook/Templates/[Template] Requirement Gathering.md`, create a copy in the client’s WIP folder named `Requirement Gathering – <Client> – <YYYY‑MM‑DD>.md`.
2. **Receive Draft** – Accept the filled RG draft produced by Claude Code (provided via context or as a file path).
3. **Completeness Check** – Verify that every header and checkbox present in the empty template exists in the draft. Output a list of any missing or empty sections (e.g., \"Missing: Acceptance criteria\").
4. **Consistency Check** (lightweight):
   - Ensure the `Priority` field uses one of the allowed values: `Must‑have`, `Nice‑to‑have`, `Low`.
   - Ensure each acceptance criterion starts with a verb and is testable (contains a measurable condition).
   - Flag any duplicate requirements or contradictory statements.
5. **Report** – Return a concise report to Hermes containing:
   - Completeness issues (if any).
   - Consistency warnings (if any).
   - Confirmation that the file is ready if no issues.
6. **Finalise** – If Hermes approves (after asking Claude Code to fix any issues), add a metadata footer to the document:
   ```
   # Agent metadata
   - Checked by: Goose
   - Completed: <timestamp>
   ```
7. **Link & Track** – Create a link from the RG output to the client folder (`03 - Clients/<Client>/Requirement Gathering/`). If the Q&A log (provided separately) contained gap language, create an entry in `04 - QA & Known Issues/Feature Gap Tracker`.

## Expected Outputs

- Completeness/consistency report (sent back to Hermes).
- Final RG output file with metadata footer.
- Link to client folder.
- Optional gap‑tracker entry.

## Notes

- Keep each Goose invocation to a single runtime; all steps above should be achievable in one prompt.
- You can use file‑read/write tools to load the template and draft.
- Do not modify the substantive content; only check and add metadata/links.

---
*Maintained by Gareth* 