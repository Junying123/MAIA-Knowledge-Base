# MAIA Feature Proposal & SOW Agent Plan

## Goal
Design and plan a specialized agent for MAIA that can:
1. Analyze requirement gathering outputs to propose features
2. Prepare Statements of Work (SOW) based on approved features
3. Analyze existing ERPNext/Frappe capabilities to determine build vs. configure/customize decisions
4. Conduct feature impact analysis (effort vs. value)
5. Identify customizations needed vs. leveraging native functionality

## Current Context / Assumptions
- User is Gareth, Junior PM at MAIA managing multiple clients (Holsen, JDX, Thermac, Ming Medical)
- MAIA is built on ERPNext/Frappe with clear build strategy: leverage ERPNext first, build custom only when necessary
- MAIA Knowledge Base (`~/Documents/MAIA Knowledge Base/`) contains:
  - Requirement gathering documents in `03 - Clients/` and `09 - Intake & Triage/`
  - ERPNext/Frappe technical reference in `01 - MAIA Product/Technical/ERPNext & Frappe/`
  - MAIA CODEX repo (`~/maia-codex/`) for formal feature specifications
  - SOW templates in `02 - PM Playbook/Templates/`
- PM E2E workflow shows Stage 3 (Fit Assessment + Solution Proposal) and Stage 5 (SOW) as key phases for this work
- Existing coding agents: Hermes (orchestrator), Codex (implementation), Claude Code (reasoning), Cursor (UI)
- This agent would function as a specialized reasoning agent similar to Claude Code but focused on PM/business analysis

## Proposed Approach
Create a **MAIA Feature Analyst & SOW Agent** that combines:
- Requirements analysis and feature proposal capabilities
- SOW writing expertise
- ERPNext/Frappe capability analysis
- Impact assessment (effort/value)
This agent would operate primarily in Stages 2-5 of the PM E2E workflow, supporting the PM in moving from requirement gathering to signed SOW.

The agent would leverage:
- Local Hermes skills for document analysis, searching, and writing
- MAIA KB as primary context source
- ERPNext/Frappe technical documentation for capability checks
- MAIA CODEX repo for existing feature specifications
- SOW templates for consistent document generation

## Step-by-Step Plan
1. **Define Agent Role and Instructions**
   - Write detailed system prompt/guidelines for the agent
   - Incorporate MAIA-specific workflows, ERPNext/Frappe rules, and SOW standards
   - Define clear outputs for each function (feature proposal, SOW, impact analysis)

2. **Identify Required Skills**
   - Audit local Hermes skills for relevant capabilities:
     - Document reading/searching (MAIA KB)
     - Template filling/SOW generation
     - Analysis and comparison tools
     - Effort/value calculation frameworks
   - Identify any gaps requiring new skill creation

3. **Determine Runtime Preference**
   - For this agent: **Multica Cloud** preferred for:
     - Consistent environment for document analysis
     - Easy access from multiple devices
     - Integration with MAIA KB via skill imports
   - Consider local fallback if latency becomes issue for large KB searches

4. **Design Agent Capabilities**
   - **Input**: Requirement gathering documents (meeting notes, RG output, pain points)
   - **Process**:
     a. Extract client requirements and pain points
     b. Check MAIA KB for existing similar features/client solutions
     c. Consult ERPNext/Frappe technical docs to see if native functionality exists
     d. If native exists: propose configuration/customization approach
     e. If native missing: scope custom Frappe app/build
     f. Analyze impact: effort (dev time, complexity) vs. value (client benefit, multi-client reuse)
     g. Draft feature proposal with build/buy/recommendation
     h. If approved, generate SOW using MAIA templates
   - **Outputs**:
     - Feature proposal document (with ERPNext/Frappe analysis)
     - Impact analysis (effort/value matrix)
     - SOW draft (if feature approved)
     - Recommendations for configuration vs. custom build

3. **Files Likely to Change**
   - Local: None (plan only; execution would create agent in Multica cloud)
   - Multica Cloud: New agent definition, potentially new skills if gaps identified

4. **Tests / Validation**
   - Test with real MAIA client data (e.g., Holsen or JDX RG documents)
   - Validate agent correctly identifies:
     - When to leverage ERPNext native modules (e.g., Work Order, Asset)
     - When custom builds are needed
     - Accurate effort/value assessment
     - SOW generation matching MAIA templates
   - Check outputs against human PM review for accuracy

5. **Risks, Tradeoffs, and Open Questions**
   - **Risk**: Agent might over-recommend custom builds without checking ERPNext thoroughly
     *Mitigation*: Strong guidelines to always check ERPNext/Frappe first per MAIA rule of thumb
   - **Tradeoff**: Specialized agent vs. general reasoning agent
     *Benefit*: Deeper MAIA/ERPNext expertise, consistent outputs
     *Cost*: Another agent to manage
   - **Open Question**: How much ERPNext/Frappe expertise should be baked in vs. retrieved from docs?
     *Solution*: Bake in core principles, retrieve specific module details from technical KB
   - **Open Question**: Should this agent also handle updating MAIA KB with feature proposals?
     *Recommendation*: Yes, as part of output - save proposals to appropriate KB location

## Next Steps After Plan Approval
1. Finalize agent instructions based on this plan
2. Identify and gather required local Hermes skills for import to Multica
3. Create the agent in Multica using `multica agent create`
4. Test with sample MAIA requirement gathering data
5. Document usage guidelines in MAIA KB for PM team
