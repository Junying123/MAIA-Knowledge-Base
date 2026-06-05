# MAIA Feature Analyst Agent Plan

## Goal
Design and plan a specialized agent for MAIA that analyzes requirement gathering outputs to propose features, checks ERPNext/Frappe capabilities, and conducts feature impact analysis (effort vs. value).

## Current Context / Assumptions
- User is Gareth, Junior PM at MAIA managing multiple clients (Holsen, JDX, Thermac, Ming Medical)
- MAIA is built on ERPNext/Frappe with clear build strategy: leverage ERPNext first, build custom only when necessary
- MAIA Knowledge Base (`~/Documents/MAIA Knowledge Base/`) contains:
  - Requirement gathering documents in `03 - Clients/` and `09 - Intake & Triage/`
  - ERPNext/Frappe technical reference in `01 - MAIA Product/Technical/ERPNext & Frappe/`
  - MAIA CODEX repo (`~/maia-codex/`) for existing feature specifications
- PM E2E workflow Stage 3 (Fit Assessment + Solution Proposal) is the primary phase for this agent
- Existing coding agents: Hermes (orchestrator), Codex (implementation), Claude Code (reasoning), Cursor (UI)
- This agent will function as a specialized reasoning agent focused on PM/business analysis and feature scoping

## Proposed Approach
Create a **MAIA Feature Analyst Agent** that:
1. Takes requirement gathering documents (meeting notes, RG output, pain points) as input
2. Extracts client requirements and pain points
3. Checks MAIA KB for existing similar features/client solutions (to avoid duplication, leverage multi-client value)
4. Consults ERPNext/Frappe technical docs to see if native functionality exists (per MAIA rule of thumb)
5. If native exists: proposes configuration/customization approach
6. If native missing: scopes custom Frappe app/build
7. Analyzes impact: effort (dev time, complexity) vs. value (client benefit, multi-client reuse, strategic alignment)
8. Outputs a feature proposal document with clear recommendation (configure/customize/build) and impact assessment

The agent would leverage:
- Local Hermes skills for document analysis, searching, and writing
- MAIA KB as primary context source
- ERPNext/Frappe technical documentation for capability checks
- MAIA CODEX repo for existing feature specifications to avoid reinventing

## Step-by-Step Plan
1. **Define Agent Role and Instructions**
   - Write detailed system prompt/guidelines for the agent
   - Incorporate MAIA-specific workflows, ERPNext/Frappe rules, and feature scoping standards
   - Define clear outputs: feature proposal document with ERPNext/Frappe analysis and impact matrix

2. **Identify Required Skills**
   - Audit local Hermes skills for relevant capabilities:
     - Document reading/searching (MAIA KB) - e.g., skills for reading files, searching content
     - Analysis and comparison tools - skills for comparing features, analyzing text
     - Impact assessment frameworks - skills for effort estimation, value calculation
     - Template-based writing - for structured feature proposals
   - Identify any gaps requiring new skill creation (e.g., specific ERPNext/Frappe analysis skill)

3. **Determine Runtime Preference**
   - For this agent: **Multica Cloud** preferred for:
     - Consistent environment for document analysis
     - Easy access from multiple devices
     - Integration with MAIA KB via skill imports
   - Consider local fallback if latency becomes issue for large KB searches

4. **Design Agent Capabilities**
   - **Input**: Requirement gathering documents (meeting notes, RG output, client pain points)
   - **Process**:
     a. Parse input to extract: client profile, current workflows, pain points, desired outcomes
     b. Search MAIA KB for similar client solutions or existing features
     c. For each pain point/desired outcome, check ERPNext/Frappe technical docs:
        - Is there a native module/doctype that addresses this?
        - Can it be configured via standard settings?
        - Does it require light customization (client script, custom field)?
        - Does it require heavy customization (custom doctype, custom app)?
        - Is it not available at all (requiring custom build)?
     d. For each option, estimate effort (based on complexity tiers: config, light custom, heavy custom, custom build)
     e. Estimate value: client impact (pain relief, efficiency gain), multi-client reuse potential, strategic alignment
     f. Generate feature proposal with:
        - Summary of client needs
        - ERPNext/Frappe capability analysis (table: requirement -> native? -> approach)
        - Recommended approach (configure/customize/build)
        - Effort estimate (low/medium/high or person-days)
        - Value estimate (low/medium/high or % impact)
        - Multi-client reuse potential (yes/no, which other clients)
        - Risks and assumptions
   - **Outputs**:
     - Feature proposal document (markdown with YAML frontmatter per MAIA KB guidelines)
     - Optional: update to MAIA KB with feature proposal for tracking
     - Optional: link to existing MAIA CODEX feature if similar

3. **Files Likely to Change**
   - Local: None (plan only; execution would create agent in Multica cloud)
   - Multica Cloud: New agent definition, potentially new skills if gaps identified

4. **Tests / Validation**
   - Test with real MAIA client data (e.g., Holsen or JDX RG documents)
   - Validate agent correctly identifies:
     - When to leverage ERPNext native modules (e.g., Work Order, Asset, Sales Invoice)
     - When light customization is sufficient (e.g., custom fields, print formats)
     - When custom build is needed (e.g., wholly new workflow not in ERPNext)
     - Accurate effort/value assessment (cross-check with historical PM estimates)
     - Outputs follow MAIA KB conventions (YAML frontmatter, wikilinks to ERPNext docs)
   - Check outputs against human PM review for accuracy and completeness

5. **Risks, Tradeoffs, and Open Questions**
   - **Risk**: Agent might underestimate effort for custom builds or overestimate ERPNext capabilities
     *Mitigation*: Strong guidelines to always check ERPNext/Frappe first per MAIA rule of thumb; effort tiers based on known complexity
   - **Tradeoff**: Specialized agent vs. general reasoning agent with feature analysis prompt
     *Benefit*: Deeper MAIA/ERPNext expertise, consistent outputs, faster PM workflow
     *Cost*: Another agent to manage, but replaces manual PM analysis time
   - **Open Question**: How much ERPNext/Frappe expertise should be baked in vs. retrieved from docs?
     *Solution*: Bake in core principles (rule of thumb, effort tiers), retrieve specific module details from technical KB
   - **Open Question**: Should this agent also handle updating MAIA KB with feature proposals?
     *Recommendation*: Yes, as part of output - save proposals to `09 - Intake & Triage/Feature Proposals/` or similar for tracking

## Next Steps After Plan Approval
1. Finalize agent instructions based on this plan
2. Identify and gather required local Hermes skills for import to Multica
3. Create the agent in Multica using `multica agent create`
4. Test with sample MAIA requirement gathering data
5. Document usage guidelines in MAIA KB for PM team
