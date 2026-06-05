# MAIA Multica Agents Plan

## Goal
Design and plan the setup of AI agents in Multica for MAIA product work, specifying agent roles, instructions, and preferred runtime.

## Current Context / Assumptions
- User is Gareth, a Junior PM at MAIA, using the MAIA Knowledge Base (`~/Documents/MAIA Knowledge Base/`).
- Multica CLI is installed and authenticated (version 0.2.6) with cloud workspace configured.
- Local Hermes agent skills are available in `~/.hermes/skills/`.
- MAIA workflow involves: PM documentation, user stories, technical feasibility, code implementation, test automation, and dev handover.
- Existing agent tools: Hermes (orchestrator), Codex (implementation), Claude Code (reasoning), Cursor (interactive), Pi/OpenCode (lightweight).
- No skills currently imported in Multica user workspace (from previous audit).

## Proposed Approach
Create three specialized agents in Multica corresponding to core MAIA PM workflow stages:
1. **MAIA Orchestrator** (Hermes-like): Central coordination, judgment, and PM documentation.
2. **MAIA Reasoner** (Claude Code-like): Technical analysis, feasibility, PR reviews, user story drafting.
3. **MAIA Coder** (Codex-like): Implementation, code generation, test automation, batch fixes.

Each agent will be equipped with relevant local Hermes skills via Multica skill import. Runtime preference: Multica cloud (managed execution) for accessibility and consistency, with fallback to local execution if needed via Multica's hybrid capabilities.

## Step-by-Step Plan
1. **Audit Local Hermes Skills**  
   - List all skills in `~/.hermes/skills/` to determine which to import for each agent.
   - Categorize skills by function (PM documentation, coding, reasoning, etc.).

2. **Design Agent Instructions**  
   - Write system prompts/guidelines for each agent based on MAIA-specific workflows and KB conventions.
   - Incorporate MAIA KB guidelines from `CLAUDE.md` and `AGENTS.md` (YAML frontmatter, wikilinks, folder numbering).

3. **Import Skills to Multica**  
   - Use `multica-skill-sync` skill to bulk import local Hermes skills to Multica workspace.
   - Handle linked files (references, templates, scripts) for each skill.

4. **Create Agents in Multica**  
   - For each agent, run `multica agent create` with:
     - Name and description
     - Agent instructions (system prompt)
     - List of skill IDs to attach
     - Runtime configuration (prefer cloud, allow local fallback)

5. **Validate Agent Setup**  
   - Test each agent with a simple MAIA-relevant task (e.g., draft a user story snippet for Holsen client).
   - Verify agents follow MAIA KB conventions (frontmatter, wikilinks).

6. **Document Agent Usage**  
   - Create a guide in MAIA KB (`02 - PM Playbook/Tools/Multica Agents.md`) on how to invoke each agent for specific PM tasks.

## Files Likely to Change
- Local: None (plan only; execution would affect Multica cloud workspace and potentially `~/.hermes/` if syncing back).
- Multica Cloud: New skills, new agents, skill-agent linkages.

## Tests / Validation
- **Skill Import**: Confirm skill count matches local (approx 115 skills) after bulk import.
- **Agent Creation**: Verify three agents exist with correct skill attachments.
- **Task Test**: 
  - Orchestrator: Summarize a meeting note from MAIA KB into action items.
  - Reasoner: Analyze a PRD snippet for technical feasibility (e.g., partial invoicing).
  - Coder: Generate a simple code snippet (e.g., Python function for MAIA quote validation).
- **Convention Check**: Ensure agent outputs include YAML frontmatter and wikilinks where appropriate.

## Risks, Tradeoffs, and Open Questions
- **Risk**: Multica cloud API latency or downtime affecting agent responsiveness.  
  *Mitigation*: Configure agents to allow local runtime fallback (requires Multica hybrid setup).
- **Tradeoff**: Cloud vs. Local runtime.  
  Cloud: Easier setup, consistent environment, no local resource use.  
  Local: Lower latency, offline access, but requires managing dependencies on each machine.
  *Preference*: Start with cloud for simplicity; evaluate local fallback if latency becomes issue.
- **Open Question**: How to handle MAIA-specific context (client data, test environments) in agent prompts?  
  *Solution*: Include KB search instructions in agent guidelines; use MAIA KB as shared context.
- **Open Question**: Should we create a fourth agent for interactive UI work (Cursor-like)?  
  *Recommendation*: Not initially; UI tasks can be handled by Coder agent with appropriate skills. Re-evaluate if frontend work dominates.

## Next Steps After Plan Approval
1. Execute skill import using `multica-skill-sync` (generate script via `execute_code`, run via `terminal`).
2. Create agent instructions documents in MAIA KB for reference.
3. Use `multica agent create` commands to instantiate the three agents.
4. Run validation tests and document outcomes.
