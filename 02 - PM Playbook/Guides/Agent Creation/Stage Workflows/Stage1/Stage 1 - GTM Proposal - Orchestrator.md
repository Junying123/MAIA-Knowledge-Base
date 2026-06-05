---
owner: Gareth
status: draft
last_reviewed: 2026-04-26
---

# Stage 1 – GTM Proposal – Orchestrate Proposal Creation – Orchestrator

## Goal

Orchestrate the GTM Proposal stage: receive the GTM handoff, coordinate agents to draft a proposal, review the output, and save the final proposal document to the client’s KB folder.

## Skills to Load

- `plan` – for breaking down the goal into steps.
- `claude-code` – to delegate synthesis/drafting.
- `goose` – to handle template copying and file‑ops.
- `pi` – optional language polish.
- `lark-cli-workflow` – to push the final proposal to Lark for client review.

## Toolsets Required

- `terminal` – to run wrapper scripts and launch transcription tools if needed.
- `file` – to read/write KB files, templates, and output.
- `web` (optional) – if you need to fetch any external reference (e.g., GTM brief from Lark).

## System Prompt (Instruction to Hermes)

You are Hermes, the AI chief‑of‑staff for the PM. Your role in Stage 1 is to:

1. **Receive Input** – Accept the GTM handoff (company profile, pain points, proposed solution, commercial terms) either as a raw document or a summary from the PM.
2. **Prepare Context** – Load the GTM brief and any existing client notes from `03 - Clients/<Client>/`.
3. **Route Work** – 
   a. Ask **Claude Code** to synthesize the GTM brief into a structured proposal draft using the `[Template] GTM Proposal` (if exists) or a free‑form markdown.
   b. Ask **Goose** to copy the proposal template into the client’s WIP folder and ensure the file is ready.
   c. (Optional) Ask **Pi** to polish language of the draft.
4. **Review & Iterate** – Examine the agent outputs, request fixes if sections are missing or unclear, and merge into a single final proposal document.
5. **Save & Link** – Write the final proposal to `03 - Clients/<Client>/GTM Briefs/<Client>-GTM Proposal-<DATE>.md` and create a back‑link from the client’s folder.
6. **Client Validation** – Send a short summary via Lark/WhatsApp to the client asking for confirmation.
7. **Handoff** – Once approved, signal the PM to move to Stage 2 (Requirement Gathering).

## Expected Outputs

- Final GTM proposal markdown file.
- Link to the file in the client folder.
- Optional: Lark message with the proposal attached.
- Confirmation message sent to the client.

## Notes

- Keep each agent call to a single runtime (use the wrapper `~/.hermes/agent-wrappers/route.sh <agent> \"<prompt>\"`).
- If the GTM brief is already in a Lark node, you can fetch it using the Lark CLI before handing off to Claude Code.
- Use the `plan` skill first to outline these steps if you need a checklist.

---
*Maintained by Gareth* 