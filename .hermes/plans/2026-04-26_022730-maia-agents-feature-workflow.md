# MAIA Agents in Feature Workflow Plan

> **For Hermes:** Use subagent-driven-development skill to implement this plan task-by-task.

**Goal:** Detail how to use existing coding agents (Codex, Claude Code, Cursor) in each stage of the MAIA feature workflow to maximize PM productivity.

**Architecture:** Map agent capabilities to specific workflow stages, defining clear handoffs and responsibilities between PM (orchestrator) and coding agents.

**Tech Stack:** Hermes (orchestrator), Codex (implementation), Claude Code (architecture/review), Cursor (UI/local dev), MAIA CODEX (feature spec repo), MAIA KB (PM workspace), Lark (dev briefing).

---

## Current Agent Usage in MAIA Workflow

Based on PM E2E Workflow.md and AGENTS.md:

- **Hermes (AI Orchestrator)**: Leads coding agents, drafts docs, tracks progress
- **Codex**: Implementation - codes features, bug fixes, scripts
- **Claude Code**: Architecture + review - technical review, API design, code quality
- **Cursor**: UI + local dev - frontend work, UI tweaks, local testing

Agents primarily operate on MAIA CODEX (feature spec repo) while PM works in MAIA KB.

---

## Detailed Agent Usage by Workflow Stage

### Stage 1-5: Pre-Feature Spec (GTM → SOW)
**Agent Role:** Minimal direct involvement
- **PM Responsibility**: GTM proposal, requirement gathering, fit assessment, demo, SOW
- **Agent Support**: 
  - Hermes can help draft meeting notes summaries, SOW templates, discovery questionnaires
  - Codex/Claude Code/Cursor not typically used until feature spec is approved

### Stage 6: Feature Spec (MAIA CODEX)
**Agent Role:** Active participation in spec creation
- **PM Responsibility**: Write prd.md, design.md, tasks.md, user stories
- **Agent Support**:
  - **Hermes**: Orchestrate spec creation, suggest improvements, ensure consistency with KB conventions
  - **Claude Code**: Review technical feasibility, suggest architecture improvements, validate design decisions
  - **Codex**: Generate boilerplate spec sections, create task breakdown templates
  - **Cursor**: Create UI mockups/wireframes for design.md if needed
- **Handoff**: Spec pushed to GitHub when complete

### Stage 7: Brief Dev (via LARK)
**Agent Role:** Preparation and execution support
- **PM Responsibility**: Convert MAIA CODEX spec → readable Lark doc
- **Agent Support**:
  - **Hermes**: Automate Lark doc creation from CODEX specs, ensure all key info is included
  - **Claude Code**: Review Lark doc for technical accuracy, suggest clarifications
  - **Codex**: Generate code snippets/examples to include in Lark doc for dev clarity
- **Dev Team Action**: Use their AI coding agents on MAIA CODEX for implementation

### Stage 8: PM Manual Test
**Agent Role:** Test automation and bug reproduction
- **PM Responsibility**: Test features based on client business scenarios
- **Agent Support**:
  - **Hermes**: Generate test scenarios from user stories, track test results
  - **Claude Code**: Review test approach, suggest edge cases to consider
  - **Codex**: Create automated test scripts for repetitive test cases
  - **Cursor**: Create quick UI test scripts for frontend validation
- **Bug Handling**: When bug found, agents can help reproduce/isolate issues

### Stage 9: UAT with Client
**Agent Role:** UAT preparation and issue tracking
- **PM Responsibility**: Run UAT with client, test case by test case
- **Agent Support**:
  - **Hermes**: Format UAT results, track issues, suggest next steps
  - **Claude Code**: Review UAT findings for patterns, suggest root causes
  - **Codex**: Generate quick fixes for minor UAT issues (if approved)
  - **Cursor**: Create UI tweaks based on UAT feedback
- **Completion**: Client sign off → LAUNCH

---

## Step-by-Step Implementation Plan

### Phase 1: Assessment & Setup
1. **Audit current agent usage** 
   - Document how each PM currently uses agents in their workflow
   - Identify gaps and opportunities for better agent integration
   - Files: Create assessment doc in MAIA KB

2. **Define agent protocols per stage**
   - Create detailed guidelines for when/how to invoke each agent
   - Specify input/output formats for agent handoffs
   - Files: Create `02 - PM Playbook/Tools/Agent Usage Guidelines.md`

3. **Set up shared context**
   - Ensure agents have access to relevant MAIA KB context when needed
   - Configure agent prompts to include MAIA conventions (frontmatter, wikilinks)
   - Files: Update agent configuration in ~/.hermes/agent-wrappers/

### Phase 2: Pilot Implementation
4. **Pilot with one active client (e.g., Holsen UAT)**
   - Apply enhanced agent usage to Stage 8-9 (Testing/UAT)
   - Measure time savings and quality improvements
   - Files: Update client-specific docs with agent-assisted processes

5. **Expand to feature spec creation**
   - Use agents for Stage 6 (Feature Spec) on next new feature
   - Track spec completeness and dev team feedback
   - Files: Create template agent-assisted spec files

### Phase 3: Optimization & Standardization
6. **Refine based on pilot results**
   - Adjust agent invocation triggers and protocols
   - Address any issues with agent outputs not matching MAIA standards
   - Files: Update guidelines and templates

7. **Create agent workflow templates**
   - Build reusable templates for common agent-assisted tasks
   - Example: "Codex-assisted bug fix", "Claude Code-assisted tech review"
   - Files: Add to `02 - PM Playbook/Templates/`

8. **Train PM team**
   - Conduct sessions on effective agent orchestration
   - Share best practices and lessons learned
   - Files: Create training materials in MAIA KB

---

## Files Likely to Change

**In MAIA KB (`~/Documents/MAIA Knowledge Base/`):**
- Create: `02 - PM Playbook/Tools/Agent Usage Guidelines.md`
- Create: `02 - PM Playbook/Tools/Agent Workflow Templates.md` 
- Update: `02 - PM Playbook/Processes/PM E2E Workflow.md` (add agent details)
- Create: Training materials in `02 - PM Playbook/Guides/`
- Update: Client-specific docs as agents are piloted

**In MAIA CODEX (`~/maia-codex/`):**
- Potentially: Update templates (`intake/`, `features/`) to include agent assistance notes
- Create: Agent-assisted development guidelines in `README.md` or `CONTRIBUTING.md`

**Local Hermes Configuration:**
- Update: `~/.hermes/agent-wrappers/route.sh` (if needed for specialized agent routing)
- Create: Specialized agent configurations in `~/.hermes/skills/` if extending capabilities

---

## Tests / Validation

- **Usage Tracking**: Monitor agent invocation frequency and success rates per stage
- **Time Savings**: Compare PM time spent on tasks with/without agent assistance
- **Quality Metrics**: Track defect rates, spec completeness, dev team satisfaction
- **Adoption Rate**: Measure percentage of PM team using enhanced agent workflows
- **Feedback Loop**: Regular retrospectives with PM team on agent effectiveness

## Risks, Tradeoffs, and Open Questions

- **Risk**: Over-reliance on agents leading to skill atrophy
  *Mitigation*: Maintain PM decision-making authority, use agents as assistants not replacements
  
- **Risk**: Agent outputs not matching MAIA conventions (frontmatter, wikilinks)
  *Mitigation*: Include MAIA KB guidelines in agent prompts, implement output validation
  
- **Risk**: Context overload - agents missing important project nuances
  *Mitigation*: Provide targeted context retrieval, keep prompts focused
  
- **Tradeoff**: Time spent setting up agent assistance vs. immediate manual execution
  *Preference*: Invest in setup for repetitive tasks; manual for one-offs
  
- **Open Question**: How to measure agent ROI beyond time savings?
  *Solution*: Track quality improvements, faster feedback loops, PM satisfaction
  
- **Open Question**: Should we create specialized agent personas for different MAIA workspaces (Sales, Finance, Logistics)?
  *Recommendation*: Start with general PM workflow, specialize if workspace-specific patterns emerge

---

## Next Steps After Plan Approval

1. Execute Phase 1: Assessment & Setup (tasks 1-3)
2. Create initial agent usage guidelines document
3. Pilot with Holsen UAT phase (Stage 8-9)
4. Review results and expand to feature spec creation
5. Standardize and train team

**Plan complete and saved. Ready to execute using subagent-driven-development — I'll dispatch a fresh subagent per task with two-stage review (spec compliance then code quality). Shall I proceed?**