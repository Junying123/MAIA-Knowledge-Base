# Scope of Work (SOW) Writing Guide

Use it as a reusable reference and prompt guide when drafting future SOWs for MAIA or similar software implementation projects.

---

## 1. Goal of the SOW

The SOW should do four things clearly:

1. Define **what is being delivered**.
2. Define **what is not included**.
3. Define **commercial and timeline expectations**.
4. Define **responsibilities, dependencies, and commitments** from both vendor and client.

A good SOW is not just a sales document. It is a scoping, delivery, and expectation-alignment document.

---

## 2. Core Writing Principles

When writing an SOW, follow these principles:

- Be **specific enough to align expectations**, but not so low-level that it becomes a technical specification document.
- Separate **core scope**, **configuration/enhancement scope**, and **custom scope**.
- Clearly label **optional items**, **future items**, and **subject-to-confirmation items**.
- State **dependencies** whenever delivery relies on client data, third-party vendors, system access, or technical validation.
- Use language that protects scope boundaries, such as:
  - “subject to confirmation”
  - “if required later”
  - “to be mutually agreed”
  - “outside current scope”
  - “to be handled under change request / variation order”

---

## 3. Information Required Before Drafting the SOW

Before writing, collect the following:

### A. Client Background

- Client legal / business name
- Client address
- Industry / business model
- Main operating departments involved
- Key stakeholders / point of contact

### B. Project Context

- Product / system name
- What problem the implementation is solving
- Whether the project is new implementation, enhancement, or replacement
- Target users / teams
- Main business flow being supported

### C. Scope Inputs

- Modules requested
- Features requested
- What is core vs optional vs custom
- Existing systems involved
- Required integrations
- Required documents to generate
- Approval flows / SOPs / business rules
- Any automation or chatbot requirements

### D. Delivery Constraints

- Timeline expectation
- Budget expectation
- Phasing approach
- External dependencies
- UAT expectations
- Go-live expectations

### E. Commercial Inputs

- One-off development pricing
- Subscription or recurring fees
- Payment terms
- Payment milestones
- Hypercare or support terms

### F. Legal / Operational Safeguards

- SLA commitments
- Caveats and exclusions
- Client commitments
- Change request handling approach

---

## 4. Recommended SOW Creation Workflow

### Step 1 - Understand the business flow first

Do not write scope before understanding the client workflow.

Identify:

- Current end-to-end process
- Pain points in the current process
- Where MAIA fits into the process
- Which parts follow standard MAIA flow
- Which parts require tailoring
- Which parts are highly custom and should be isolated into a later phase

### Step 2 - Group features into phases

Use phased scoping to avoid mixing standard scope with custom work.

A useful model based on the sample:

- **Phase A1** - Baseline / Core MAIA
- **Phase A2** - Business rule and SOP configuration inside core flow
- **Phase A3** - Deeper enhancements still within core flow
- **Phase B** - Highly customised extensions outside standard flow

### Step 3 - Write the scope by module / workspace / function

For each scoped area, define:

- What it is
- Who it is for
- Platform / interface
- What is included
- What documents or actions it supports
- Key limits / assumptions

### Step 4 - Document integration assumptions

State:

- What data flows are required
- What system is involved
- Preferred and alternate integration method
- Required sample data / API / vendor contact
- What remains subject to validation

### Step 5 - Add timeline and commercial structure

The SOW should show:

- Scope by phase
- Estimated duration by phase
- Expected target date by phase
- Go-live / hypercare period
- Price by phase
- Payment milestones and triggers

### Step 6 - Add caveats, SLAs, and client commitments

This protects delivery by making responsibilities explicit.

### Step 7 - Review for scope leakage

Before finalizing, check whether any item:

- sounds too vague
- sounds like a promise without dependency wording
- introduces custom work without flagging it as custom
- implies technical certainty where validation is still needed
- overlaps multiple phases unclearly

---

## 5. Standard SOW Structure to Follow

Use this outline when writing future SOWs.

### 1. Introduction
Include:

- About the product / platform
- Purpose of document
- Mutual commitment statement

### 2. Product Specifications / Scope Summary
Include:

- High-level scope overview
- Delivery philosophy
- Phase definitions
- What each phase means

### 3. Phase A1 - Core / Baseline Scope
Usually contains:

- Core chatbot(s)
- Core workspace(s)
- Core document generation
- Core integration touchpoints
- Baseline operational flow

For each module, include:

- Module title
- Intended user
- Platform
- Included capabilities
- Outputs / documents supported
- Constraints / notes

### 4. Phase A2 - Business Rule & SOP Configuration
Usually contains:

- Approval logic
n- price validation rules
- credit / finance controls
- reminder rules
- exception handling rules
- optional role-based assistants

### 5. Phase A3 - Enhancements Within Core Flow
Usually contains:

- advanced operational support
- supporting modules that extend the standard flow
- deeper workflow logic still tied to the main business process

### 6. Phase B - Customised Extensions
Usually contains:

- bespoke modules
- non-standard workflows
- future modules needing separate validation
- estimated concept scope and pricing range

### 7. Estimated Timelines
Include a table with:

- Phase
- Scope summary
- Build & integration duration
- Expected date
- Go-live / hypercare

Add a note that timelines depend on client responsiveness, access, and external dependencies.

### 8. Commercial Structure
Include:

- pricing model
- one-off development cost
- subscription / recurring fees if relevant
- customization pricing treatment
- payment terms
- annual review / escalation notes if applicable

### 8.1 / 8.2 Breakdown Sections
Useful sub-sections:

- one-off development cost by phase
- payment milestones
- trigger for payment release

### 9. Caveats & Exclusions
Common items:

- third-party dependency limitations
- client-side infrastructure responsibility
- unsupported integrations outside scope
- data accuracy ownership

### 10. Service Level Agreements (SLAs)
Split into:

- vendor commitments
- client commitments

### 11. Appendix
Can include:

- delivery model
- system interfaces
- deployment setup
- security and compliance
- availability and performance
- customisation approach

### 12. Acknowledgement & Agreement
Include signature blocks for both parties.

---

## 6. What Each Section Needs to Contain

### Introduction
Purpose:

- Position the product
- Explain why this document exists
- Set the tone for shared accountability

### Product Specifications
Purpose:

- Explain how the solution is packaged
- Show how scope is split into phases
- Make the scoping model easy to understand

### Module / Feature Sections
Each one should answer:

- Who uses this?
- What does it do?
- On what platform?
- What exactly is included?
- What outputs are supported?
- What important note or limit should be stated?

### Integration Section
Must cover:

- systems involved
- direction of data flow
- preferred method
- fallback method
- dependencies
- items still pending client/vendor confirmation

### Timeline Section
Must avoid false certainty.
Use estimated dates and add dependency wording.

### Commercial Section
Should be easy to scan and tied to phases.
Pricing should align to the phase structure used earlier.

### Caveats / SLAs / Commitments
This is where delivery risk is controlled.
These sections should not be skipped.

---

## 7. Scope Classification Rules

When drafting, classify every requested item into one of these buckets:

### A. Core Baseline
Use when the item:

- already fits MAIA’s standard flow
- does not require unique client logic
- can be delivered as standard product behavior

### B. Configuration / SOP Layer
Use when the item:

- is still inside core MAIA flow
- requires approval rules, reminders, price checks, routing rules, or validations
- changes behavior based on client policy but not product architecture

### C. Enhancement Within Core Flow
Use when the item:

- still follows the same business flow
- needs deeper tailoring or supporting logic
- adds more advanced but related operational functionality

### D. Highly Custom / Phase B
Use when the item:

- introduces a new module or distinct workflow
- does not naturally fit standard MAIA flow
- depends on separate discovery and technical validation
- should be separately estimated

---

## 8. Writing Rules for Feature Descriptions

When describing a feature, use this format:

### Feature Name

**Purpose**  
Describe the business outcome.

**User / Role**  
Who uses it.

**Platform**  
WhatsApp, web workspace, mobile, email, etc.

**Included in Scope**  
List what the feature can do.

**Supported Outputs / Documents**  
Quotation, Sales Order, Invoice, DO, Pick List, Receipt, etc.

**Important Notes / Limitations**  
Any accuracy warning, dependency, exception, or out-of-scope boundary.

---

## 9. Common Requirement Types to Extract from a Source Document

When reading a source document for SOW creation, extract the following:

### Business Context
- industry
- current workflow
- key departments
- pain points

### Users / Roles
- sales
- supply chain / logistics
- finance
- management
- warehouse
- external parties if relevant

### Platforms / Interfaces
- WhatsApp
- desktop web workspace
- mobile-responsive view
- external integrations

### Documents
- quotation
- sales order
- invoice
- proforma invoice
- receipt
- delivery note / delivery order
- pick list
- credit note
- certificate / support documents

### Data / Integration
- master data sync
- transaction writeback
- status sync
- accounting / ERP integration
- required sample exports
- access / hosting dependencies

### Rules / Controls
- price checks
- approvals
- credit limit checks
- credit term checks
- overdue or pending reminders
- stock alerts
- expiry alerts

### Commercial / Delivery
- phase durations
- expected dates
- hypercare
- milestone billing
- estimated ranges for custom work

### Safeguards
- caveats
- exclusions
- SLA response times
- client obligations

---

## 10. Questions to Ask Before Finalizing an SOW

Use this checklist to identify gaps.

### Scope Clarity
- What is definitely in scope?
- What is definitely out of scope?
- Which items are optional?
- Which items are future-ready but not included now?

### Process Clarity
- What is the exact start and end point of the business flow being supported?
- Are there exception cases that need approval or manual handling?
- Are there different flows for different departments, entities, or order types?

### Integration Clarity
- What systems must MAIA read from?
- What systems must MAIA write to?
- Is API access available?
- Is file-based exchange needed instead?
- Who is the technical contact for the third-party system?

### Data Clarity
- What sample data is required for mapping and validation?
- Who provides it?
- In what format?
- When will it be provided?

### Operational Clarity
- Who approves what?
- What statuses matter operationally?
- What reminders need to be automated?
- What documents need to be generated?

### Timeline Clarity
- What dependencies could delay delivery?
- How quickly will the client respond to clarifications?
- Is UAT included in the timeline?

### Commercial Clarity
- How is the scope priced?
- What triggers milestone payments?
- Are customisations quoted now or later?

---

## 11. Red Flags to Catch During Drafting

Fix these before using the SOW.

- Scope is described too generally, with no deliverable clarity.
- Standard features and custom features are mixed together.
- Optional items are written like committed scope.
- Dates are stated too confidently without dependency notes.
- Integration is described as guaranteed without technical validation.
- No exclusions are written.
- No client commitments are written.
- Pricing structure does not match the phase structure.
- A feature is mentioned in summary but never defined in detail later.
- Different sections use inconsistent terms for the same thing.

---

## 12. Reusable SOW Drafting Template

```markdown
# [Client Name] [Product / Project] Scope of Work

## 1. Introduction
### About [Product Name]
[Brief description of the platform and what it does]

### Purpose of Document
[What this SOW establishes]

### Mutual Commitment
[Shared expectation statement]

## 2. Product Specifications
[High-level overview of the solution and phasing approach]

### Phase Definitions
- Phase A1 - [Core baseline]
- Phase A2 - [Business rule / SOP configuration]
- Phase A3 - [Enhancements within core flow]
- Phase B - [Highly customised extensions]

## 3. Phase A1 - Core Scope
### 3.1 [Module / Workspace / Assistant Name]
**Platform:** [Platform]

**Included in Scope:**
- [Capability 1]
- [Capability 2]
- [Capability 3]

**Supported Outputs / Documents:**
- [Document 1]
- [Document 2]

**Notes / Limitations:**
- [Important note]

## 4. Phase A2 - Business Rule & SOP Configuration
### 4.1 [Enhancement Name]
[Description]

## 5. Phase A3 - Enhancements Within Core Flow
### 5.1 [Enhancement Name]
[Description]

## 6. Phase B - Customised Extensions
### 6.1 [Custom Module Name]
**Goal**
[Goal]

**Problem Statement**
[Problem being solved]

**Proposed Approach**
1. [Approach point]
2. [Approach point]
3. [Approach point]

## 7. Estimated Timelines
| Phase | Scope | Build & Integration | Expected Date | Go-Live & Hypercare |
|---|---|---:|---|---|
| Phase A1 | [Summary] | [Duration] | [Date] | [Duration] |
| Phase A2 | [Summary] | [Duration] | [Date] | [Duration] |
| Phase A3 | [Summary] | [Duration] | [Date] | [Duration] |
| Phase B | [Summary] | [TBC] | [TBC] | [TBC] |

## 8. Commercial Structure
[Pricing model summary]

### 8.1 One-off Development Cost
| Item | Price |
|---|---:|
| [Phase / module] | [Amount] |

### 8.2 Payment Terms
| Milestone | Percentage | Amount | Payment Trigger |
|---|---:|---:|---|
| [Milestone] | [Percent] | [Amount] | [Trigger] |

## 9. Caveats & Exclusions
- [Caveat 1]
- [Caveat 2]

## 10. Service Level Agreements (SLAs)
### 10.1 Vendor Commitments
- [Commitment]

### 10.2 Client Commitments
- [Commitment]

## 11. Appendix
### 11.1 Delivery Model
[Details]

### 11.2 System Interfaces
[Details]

### 11.3 Security / Compliance / Performance
[Details]

## 12. Acknowledgement & Agreement
[Signature blocks]
```

---

## 13. Reusable Prompt for Future SOW Writing

Use this prompt when you want ChatGPT to generate a future SOW from notes, meeting transcripts, discovery docs, or feature lists.

```text
You are to create a professional Scope of Work (SOW) document for a software implementation project.

Use the provided source material to draft the SOW.

Requirements:
1. Structure the SOW into clear phases:
   - Phase A1: Core / baseline scope
   - Phase A2: Business rule and SOP configuration within core flow
   - Phase A3: Enhancements within core flow
   - Phase B: Highly customised extensions / future scope
2. Separate standard scope from optional or highly custom items.
3. For each module or feature, explain:
   - who it is for
   - what it does
   - what platform it is on
   - what is included
   - what outputs/documents it supports
   - any assumptions, limitations, or dependencies
4. Include sections for:
   - Introduction
   - Product Specifications
   - Phase-based scope details
   - Integration and data sync
   - Estimated timelines
   - Commercial structure
   - Payment terms
   - Caveats & exclusions
   - SLA / commitments
   - Appendix
   - Acknowledgement
5. Use professional, client-facing language.
6. Avoid making technical guarantees where validation is still required.
7. Explicitly state dependencies, assumptions, and items subject to confirmation.
8. Where information is missing, surface assumptions or mark items as TBC instead of inventing certainty.

Source material:
[Paste meeting notes / requirements / discovery findings / feature list here]
```

---

## 14. Stronger Prompt Variant for Higher Accuracy

Use this version when you want the model to behave more carefully.

```text
Act as a senior solutions consultant and implementation scoping writer.

Your task is to create a structured, client-facing Scope of Work (SOW) based strictly on the provided material.

Instructions:
- Do not mix standard scope with custom scope.
- Put business-rule changes and SOP logic in a separate section from baseline platform features.
- Put bespoke modules or unclear items into a separate custom / Phase B section.
- If an integration method is not fully confirmed, state the preferred method, alternate method, and dependency instead of assuming certainty.
- If pricing or timelines are incomplete, mark them as indicative / TBC.
- Use wording that protects scope boundaries.
- Write clearly enough for both internal delivery teams and the client to align on expectations.
- Include clear section numbering.
- Keep the document polished, readable, and commercial-ready.

Output the SOW in markdown.

Source material:
[Insert source notes here]
```

---

## 15. Internal QA Checklist Before Using the SOW

Use this before finalizing:

- [ ] Client name and legal details are correct.
- [ ] Product name and purpose are correct.
- [ ] Scope is grouped into sensible phases.
- [ ] Core, enhancement, and custom items are clearly separated.
- [ ] Every major feature states what is included.
- [ ] Integration dependencies are clearly stated.
- [ ] Timeline wording includes dependency safeguards.
- [ ] Pricing aligns with the phases.
- [ ] Payment triggers are clear.
- [ ] Caveats and exclusions are included.
- [ ] Vendor commitments and client commitments are included.
- [ ] Optional items are clearly labeled.
- [ ] No feature sounds promised if it is still subject to validation.
- [ ] Signature / agreement section is present.

---

## 16. How to Use This Guide Going Forward

When generating a future SOW:

1. Read the source material and extract modules, features, rules, integrations, timelines, and pricing.
2. Classify each item into Phase A1, A2, A3, or B.
3. Write the SOW using the standard structure in this guide.
4. Mark unknowns as assumptions, TBC, optional, or subject to confirmation.
5. Review the final draft for scope leakage, vague promises, and missing exclusions.

This guide should be treated as the baseline prompt scaffold for future MAIA SOW writing.
