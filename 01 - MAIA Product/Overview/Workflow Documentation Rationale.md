---
owner: Gareth
status: approved
last_reviewed: 2026-02-21
---

# Why Create Workflow Documentation for Each Module

## Purpose

To understand and document what workflows MAIA can perform based on its features, ensuring comprehensive test coverage and clear business process understanding.

## Key Reasons

### 1. Understand MAIA's Business Flow & Feature Capabilities
- Map what workflows are possible within each module
- Identify all available actions and status transitions
- Document what MAIA can do vs. what it cannot do

### 2. Visualize Complete Workflow Paths
- **Mermaid diagram** (`[module]_workflow.mermaid`): Visual representation of all possible paths
  - Shows status transitions (DRAFT → TO BILL → HOLD, etc.)
  - Maps decision points and branching logic
  - Illustrates dependencies between actions
- **Markdown document** (`[module]_workflow.md`): Text-based version for accessibility
  - Readable without Mermaid rendering
  - Searchable and version-controllable
  - Easy to reference in discussions

### 3. Identify Document Types & Status Transitions
- Document all possible statuses (DRAFT, TO BILL, HOLD, CLOSED, CANCELLED, etc.)
- Map valid transitions between statuses
- Identify invalid transitions (e.g., cannot create Invoice from HOLD status)
- Understand state dependencies

### 4. Map Dependencies Between Modules
- Understand how modules connect (e.g., Quotation → Sales Order → Invoice)
- Identify data flow between modules
- Document what information carries forward (biller info, items, payment terms, etc.)
- Plan integration test scenarios

### 5. Support Test Planning & Coverage
- Identify all test scenarios needed for complete coverage
- Understand edge cases and error paths
- Plan test data requirements
- Design test cases that follow actual business workflows

### 6. Enable Stakeholder Communication
- Visual diagrams for discussions with Product/Sales teams
- Clear documentation for validation ("Is this workflow correct?")
- Reference material for onboarding new team members
- Evidence of business process understanding

### 7. Foundation for Test Automation
- Workflow diagrams guide test script structure
- Status transitions inform test assertions
- Action sequences define test steps
- Edge cases identified during mapping become test scenarios

## Format Rationale

### Why Both `.mermaid` and `.md` Files?

- **`.mermaid` file**:
  - Visual diagram that shows relationships and flow at a glance
  - Easy to update and maintain
  - Can be rendered in GitHub, documentation sites, and IDEs

- **`.md` file**:
  - Text-based version for accessibility (no rendering needed)
  - Searchable content for quick reference
  - Easy to copy/paste for documentation and reports
  - Works in any text editor or documentation system

## Expected Outcome

By creating workflow documentation for each module:
- ✅ Complete understanding of MAIA's capabilities per module
- ✅ Clear visualization of all possible user journeys
- ✅ Comprehensive test scenario identification
- ✅ Reduced ambiguity in test planning
- ✅ Better alignment with business requirements

---

## See Also

- [[Invoice Workflow Guide]]
- [[Credit Note Workflow Guide]]
- [[Debit Note Workflow Guide]]
- [[Receipt Workflow Guide]]
- [[Sales Order Workflow Guide]]
- [[Quotation to Sales Order Status Guide]]
- [[All Workspace Modules]]
