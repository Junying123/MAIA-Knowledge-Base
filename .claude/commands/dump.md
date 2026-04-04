Capture freeform input and route it to the right place in the KB.

Usage: /dump [paste raw notes, meeting notes, decisions, client feedback, ideas, etc.]

Steps:
1. Read the full input
2. Classify each piece of information:
   - **Client context / meeting notes** → `03 - Clients/[Client Name]/`
   - **Product issue or bug** → `04 - QA & Known Issues/`
   - **Process or SOP** → `02 - PM Playbook/Processes/`
   - **Decision (team-wide)** → `07 - Decisions/` (suggest ADR if architectural)
   - **Release note or changelog** → `05 - Releases & Updates/`
   - **Glossary term** → `06 - Glossary & Taxonomy/Glossary.md`
   - **Gotcha or lesson learned** → `brain/Gotchas.md`
   - **Intake / new request** → `09 - Intake & Triage/`
3. For each item: show the proposed file path, section, and a formatted preview
4. Ask for confirmation before writing anything

Do NOT write to any file without explicit confirmation.
Do NOT write anything related to Ming Medical to a git-tracked location.
Show your routing intent first — the user approves, then you write.
