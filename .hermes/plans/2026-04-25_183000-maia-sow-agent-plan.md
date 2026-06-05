# MAIA SOW Agent Plan

## Goal
Design and plan a specialized agent for MAIA that prepares Statements of Work (SOW) based on approved features, following MAIA's SOW writing standards and templates.

## Current Context / Assumptions
- User is Gareth, Junior PM at MAIA managing multiple clients (Holsen, JDX, Thermac, Ming Medical)
- MAIA Knowledge Base (`~/Documents/MAIA Knowledge Base/`) contains:
  - Approved feature proposals (from requirement gathering and fit assessment)
  - SOW templates in `02 - PM Playbook/Templates/`
  - Example SOW documents in client folders (e.g., `03 - Clients/Active Cooking Clients/Holsen/`, `03 - Clients/JY_Handle_Clients/Thermac/`)
  - Client information: profiles, commercial terms, pain points from RG
- PM E2E workflow Stage 5 (SOW) is the primary phase for this agent
- Existing coding agents: Hermes (orchestrator), Codex (implementation), Claude Code (reasoning), Cursor (UI)
- This agent will function as a specialized document generation agent focused on creating professional SOWs

## Proposed Approach
Create a **MAIA SOW Agent** that:
1. Takes approved feature proposals (with effort/value analysis) as input
2. Extracts client information from MAIA KB (company profile, agreed terms, timeline preferences)
3. Uses MAIA SOW templates to generate structured SOW documents
4. Covers all required SOW sections:
   - Scope (what's included and excluded)
   - Timeline and milestones
   - Deliverables
   - Commercial terms (pricing, payment schedule)
   - Assumptions and dependencies
   - Acceptance criteria
   - Change request process
5. Follows MAIA's SOW writing standards for consistency across clients
6. Optionally links to related MAIA CODEX feature specs for traceability

The agent would leverage:
- Local Hermes skills for document analysis, template filling, and writing
- MAIA KB as primary context source (client info, templates, examples)
- Approved feature proposals from the MAIA Feature Analyst Agent (or manual PM approval)
- MAIA's SOW templates in `02 - PM Playbook/Templates/`

## Step-by-Step Plan
1. **Define Agent Role and Instructions**
   - Write detailed system prompt/guidelines for the agent
   - Incorporate MAIA-specific SOW standards, template structure, and commercial terms guidelines
   - Define clear outputs: professional SOW document following MAIA format

2. **Identify Required Skills**
   - Audit local Hermes skills for relevant capabilities:
     - Template filling/SOW generation - skills for populating templates with data
     - Document reading/searching (MAIA KB) - to find client info, templates, examples
     - Data extraction - to pull details from feature proposals and client profiles
     - Structured writing - for generating formal SOW sections
     - Table/format generation - for timelines, milestones, pricing tables
   - Identify any gaps requiring new skill creation (e.g., SOW-specific template skill)

3. **Determine Runtime Preference**
   - For this agent: **Multica Cloud** preferred for:
     - Consistent environment for document generation
     - Easy access from multiple devices (PM, tech lead, client)
     - Integration with MAIA KB via skill imports
   - Consider local fallback if latency becomes issue for large KB searches

4. **Design Agent Capabilities**
   - **Input**: 
     - Approved feature proposal (with scope, effort, value, approach)
     - Client information (from MAIA KB: company profile, RG notes, agreed terms)
     - MAIA SOW template (from `02 - PM Playbook/Templates/`)
   - **Process**:
     a. Parse approved feature proposal to extract:
        - Feature scope (what will be built)
        - Build approach (configure/customize/build)
        - Effort estimate
        - Value proposition
        - Acceptance criteria (if defined)
     b. Extract client information from MAIA KB:
        - Company name, contact details, industry
        - Agreed commercial terms (if pre-discussed)
        - Timeline preferences, constraints
        - Existing integrations/systems to consider
     c. Load MAIA SOW template and identify sections to fill
     d. Generate each SOW section:
        - **Introduction**: Parties involved, date, reference to discussions
        - **Scope of Work**: 
          * Included: detailed feature list based on proposal
          * Excluded: explicitly call out what's not part of this SOW
          * Assumptions: dependencies, client responsibilities, third-party tools
        - **Timeline and Milestones**: 
          * Break down effort into phases (e.g., setup, development, testing, UAT)
          * Assign target dates based on effort and client availability
          * Define milestones with completion criteria
        - **Deliverables**: 
          * List of tangible outputs (feature docs, code, test reports, UAT forms, training)
          * Format and delivery method for each
        - **Commercial Terms**:
          * Total cost based on effort and agreed rates
          * Payment schedule (e.g., 30% upfront, 40% mid-project, 30% on UAT sign-off)
          * Invoicing details, late payment terms
        - **Acceptance Criteria**: 
          * How UAT will be conducted
          * Sign-off process
          * Bug fixing period post-launch
        - **Change Request Process**: 
          * How scope changes will be handled
          * Approval workflow, impact assessment
        - **Confidentiality, IP, Warranty**: Standard MAIA clauses
        - **Signatures**: Signature lines for both parties
     e. Ensure all outputs follow MAIA KB conventions where applicable (though SOW is typically external-facing)
   - **Outputs**:
     - Complete SOW document (markdown or formatted per MAIA template)
     - Optional: link to related MAIA CODEX feature spec for development team
     - Optional: save copy to MAIA KB under client's folder for tracking (e.g., `03 - Clients/[Client]/Product/SOW for MAIA [Client]`)

3. **Files Likely to Change**
   - Local: None (plan only; execution would create agent in Multica cloud)
   - Multica Cloud: New agent definition, potentially new skills if gaps identified

4. **Tests / Validation**
   - Test with real MAIA client data (e.g., use Holsen's approved features and client info to generate SOW)
   - Validate agent correctly:
     - Extracts all necessary information from feature proposal and client data
     - Follows MAIA SOW template structure precisely
     - Generates clear, professional scope inclusions/exclusions
     - Creates realistic timelines based on effort estimates
     - Formats commercial terms correctly (pricing, payment schedule)
     - Includes all standard MAIA SOW sections (assumptions, change process, etc.)
     - Output matches quality of human-PM-written SOWs (check against existing examples)
   - Check that generated SOWs can be used directly for client review/sign-off with minimal edits

5. **Risks, Tradeoffs, and Open Questions**
   - **Risk**: Agent might miss nuanced client-specific requirements or commercial terms
     *Mitigation*: Design agent to flag uncertain sections for PM review; include placeholders for PM to fill in client-specific details
   - **Tradeoff**: Specialized SOW agent vs. using general writing agent with SOW prompt
     *Benefit*: Consistent SOW quality, faster turnaround, ensures all MAIA-standard sections are included
     *Cost*: Another agent to manage, but saves significant PM time on document creation
   - **Open Question**: How much SOW generation should be automated vs. PM-reviewed?
     *Solution*: Automate structured sections (timeline, deliverables based on effort, standard clauses), leave complex commercial negotiations and scope definition to PM oversight
   - **Open Question**: Should this agent also handle generating SOW variations (e.g., phased SOWs, change request SOWs)?
     *Recommendation*: Start with baseline SOW generation; phased/change request SOWs can be handled by PM with agent assistance or as future enhancements

## Next Steps After Plan Approval
1. Finalize agent instructions based on this plan
2. Identify and gather required local Hermes skills for import to Multica
3. Create the agent in Multica using `multica agent create`
4. Test with sample MAIA approved feature proposals and client data
5. Document usage guidelines in MAIA KB for PM team
