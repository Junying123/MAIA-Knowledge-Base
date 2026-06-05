---
owner: Gareth
status: approved
last_reviewed: 2026-05-12
---

# Scope of Work (SOW) Writing Guide

Use this guide as the reusable reference and prompt scaffold when drafting MAIA Scope of Work documents in the Lean Giap style. This format is best for Enterprise MAIA implementation SOWs where the scope is split into baseline product modules first, then customisation phases later.

## 1. Goal of the SOW

The SOW should clearly define:

1. The baseline MAIA modules included in the current engagement.
2. The customisations and extensions to be delivered in later phases.
3. The integrations, data sync assumptions, and dependencies.
4. The estimated delivery timeline, commercial structure, caveats, SLAs, and signature agreement.

This format is lighter than a deep process-by-process implementation SOW. It is designed for a modular Enterprise proposal where the client first receives a base MAIA system, then scoped customisations are designed, built, and released after baseline go-live.

## 2. Default SOW Structure

Use this structure for all MAIA SOWs. Canonical reference: `Active Cooking Clients/Thermac/Thermac_SOW.md`.

**Preamble:** Effective date line + parties table (not a numbered section)

1. Executive Summary (client narrative + 1.1 Enterprise Baseline Modules list)
2. Product Specifications (Phase One) — chatbots, workspaces, document lifecycle, integration
3. Customisation & Extensions (Phase Two Onwards) — custom modules per phase
4. Estimated Timelines — bold phase headers + tables
5. Commercial Structure — pricing model bullets + 5.1/5.2/5.3 subsections
6. Caveats & Exclusions — single bullet list, no subsections
7. Service Level Agreements (SLAs) — 7.1 Mindhive + 7.2 Client
8. Appendix — platform context (delivery model, interfaces, security, availability)
9. Acknowledgement & Agreement — signature tables

The SOW should be written as a client-facing commercial document. Keep the scope specific, but avoid turning it into a full technical specification.

## 3. Agreement Opening

Start with the document title, effective date, and party table.

```markdown
# [Updated] [Client Name] SOW

The Services Agreement is made effective as of [Date].

| BETWEEN | The Vendor | **Mindhive Sdn Bhd** ("Mindhive"), with its office located at [Mindhive Address]. |
|---|---|---|
| AND | The Client | **[Client Legal Name]** ("[Client Short Name]"), with its office located at [Client Address]. |
```

Use the `Vendor` and `Client` middle column if following the signed Lean Giap style exactly.

## 4. Executive Summary (Section 1)

Section 1 is a **client narrative** — not an "About MAIA" intro. Write it entirely from the client's perspective: who they are, how their business works today, what is broken, and what MAIA will fix.

Do NOT write generic MAIA boilerplate. Every sentence must be specific to this client.

Structure:

- Para 1: Who the client is — business description, what they sell, how they operate, volume/scale
- Para 2: Current workflow — what tools they use today, where the pain is, what breaks down
- Para 3 (optional): Secondary business motion that also needs MAIA
- Bullet list: "This SOW defines a phased implementation of MAIA that introduces:" — concrete deliverables tied to real pain points
- Bold line: The investment figure

### Enterprise Baseline Modules (1.1)

List the baseline module categories as bullet points. Items in 1.1 must correspond to the `## 2.x` subsections in Section 2.

Example:

```markdown
## 1.1 Enterprise Baseline Modules

The following sections outline the baseline modules included in the MAIA implementation for [Client]:

- Internal Chatbot (Sales and Order Intake)
- User Workspaces
- [Client] Document Lifecycle
- Integration and Data Sync with AutoCount
```

## 5. Product Specifications (Phase One)

Phase One should describe the baseline modules the client receives first.

Use this framing:

```markdown
# 2. Product Specifications (Phase One)

The following section highlights the modules that [Client Name] will receive and the features of each module. Each module is designed with scalability, configurability, and high availability in mind, ensuring it can fit into [Client Name]'s business process.
```

Common Phase One sections:

- Internal Chatbot
- Sales Agent Assistant
- User Workspaces
- Sales Agent Workspace
- Integration & Data Sync with ERP

## 6. Internal Chatbot Section

Use this pattern for chatbot modules.

```markdown
## 2.1 Internal Chatbot ([Use Case])

### 2.1.1 [Assistant Name]

The [assistant name] chatbot serves as an assistant to help [role/team] [business outcome].

- **Platform:**
  - [WhatsApp / Email / Microsite / Web]

- **Features:**
  - **[Feature Name]:** [What it does.]
  - **[Feature Name]:** [What it does.]
```

For Sales Agent Assistant-style modules, common feature categories include:

- Intelligent document processing (IDP)
- Pre-order creation checks
- Sales order creation
- Output document generation
- Daily digest
- Sales process SOP

### Output Document Generation

When listing generated documents, use a nested list.

Example:

```markdown
- **Output Document Generation:** To generate output documents. List of output documents supported:
  - Quotation
  - Sales Order
  - Invoice
  - Delivery Order
  - Picking List
  - Credit Note
  - Receipt
  - Payment Voucher
```

Only list documents that are in scope for that client. Do not include every MAIA document by default.

## 7. User Workspace Section

Use this section for desktop web and mobile-responsive interfaces.

```markdown
## 2.2 User Workspaces

Desktop Web and/or Mobile Responsive Web interfaces where users can login and interact with the system.

### 2.2.1 [Workspace Name]

- **Features:**
  - **[Feature Name]:** [What users can do.]
  - **[Feature Name]:** [What users can see or manage.]
```

Common workspace feature categories:

- Sales order management
- Order lifecycle overview
- Output document management
- Customer management
- Approval tracking
- Dashboard visibility
- User role access

## 8. Integration & Data Sync Section

For baseline integrations, describe the preferred method, fallback method, touchpoints, and dependencies.

Use this structure:

```markdown
### 2.2.2 Integration & Data Sync with [ERP / System]

To push and synchronise data with [System], the following connectivity is required. Final method is subject to confirmation with the client's [system] vendor / IT team.

- **Integration Method:**
  - Preferred: [API / REST / Service Connect / Standard endpoint]
  - Alternate: [Secure file-based import/export via CSV/XML/SFTP] if API access is restricted.

- **Core Touchpoints:**
  - Master Data (Read): [Customers, items, price lists, credit terms, inventory availability]
  - Transactions (Write): [Sales orders from MAIA to ERP]
  - Status / Documents (Read/Write as applicable): [Delivery order status, invoice status/number, receipts]
  - Additional modules, if required: [Returns, credit notes, certificates, reference fields]

- **Dependencies:**
  - [System] hosting type, domain URL, and vendor contact for API specs/access.
  - Sample exports to verify field mapping.
```

Always state that the final method is subject to confirmation. Do not guarantee API integration until the client or vendor confirms access.

## 9. Customisation & Extensions (Phase Two Onwards)

Use this section to distinguish baseline MAIA from later custom work.

Start with this idea:

- MAIA provides a baseline suite of standard features out of the box.
- Customisations and extensions are carefully scoped, estimated, and mutually agreed before execution.

Recommended structure:

```markdown
# 3. Customisation & Extensions (Phase Two Onwards)

MAIA provides a baseline suite of standard features out of the box. However, recognising that every business has unique workflows, the system supports a broad range of customisation and extension options. These are carefully scoped, estimated, and mutually agreed upon prior to execution.

## 3.1 Customisations (Phase Two)

### 3.1.1 [Custom Chatbot / Module]

- **Platform:** [WhatsApp + Microsite / Workspace]
- **Core Features:**
  - **[Feature Name]:** [What it does.]
```

Common Phase Two customisation examples:

- Finance chatbot
- Payment reconciliation
- Approval matrix module
- Certificate capture or validation
- Blanket order handling
- Finance workspace

Common Phase Three customisation examples:

- CRM chatbot
- Progressive KYC intake
- Document upload
- Credit control approval queue
- CRM workspace
- CRM dashboard and reporting
- Action logs and traceability
- Questionnaire maintenance

### Customisation Notes

Use notes to protect scope.

Examples:

- Customisations will be scoped in detail after Phase One delivery.
- Finance and compliance flows will be refined based on the client's final workflow.
- Bank reconciliation accuracy depends on matchable descriptions such as invoice/reference number, payer name, or narration.
- Items without matchable descriptions or with conflicting descriptors will require manual review.

## 10. Estimated Timelines - Three Phase Delivery

Use simple activity tables instead of a large phase-scope matrix.

### Phase 1 - Base MAIA System

Use this for baseline MAIA system delivery per Product Specifications.

```markdown
## 4. Estimated Timelines - Three Phase Delivery

**Phase 1: Base MAIA System (per Section 2: Product Specifications)**

Deliver and go-live with the baseline MAIA features outlined in Section 2.

| Item | Indicative Time Taken |
|---|---:|
| Onboarding & Setup | 1-2 weeks |
| Configuration & Customisation | 1-2 weeks |
| User Training & UAT | 1-2 weeks |
```

### Phase 2 - Customisation & Extensions

Use this for agreed customisations per Section 3.

```markdown
**Phase 2: Customisation & Extensions (per Section 3)**

After Phase 1 go-live, Mindhive will design, build, and release the agreed customisations listed in Section 3. Timelines are confirmed via change requests per item.

| Item | Indicative Time Taken |
|---|---:|
| Design & Detailed Scoping | 1-2 weeks |
| Build & Integration | 3-6 weeks |
| User Training & UAT | 1-2 weeks |
| Go-Live & Hypercare | 1-2 weeks |
```

### Phase 3 - Later Customisation Package

If the SOW lists Phase Three customisations, add a short timing block for the later package or mark it as `TBC` if it requires separate scoping.

```markdown
**Phase 3: Later Customisation Package (per Section 3.2)**

Phase 3 items will be confirmed after Phase 2 delivery or through a separate scope confirmation.

| Item | Indicative Time Taken |
|---|---:|
| Detailed Scoping | TBC |
| Build & Integration | TBC |
| User Training & UAT | TBC |
| Go-Live & Hypercare | TBC |
```

### Timeline Note

Always include a note:

```markdown
Notes: All durations are indicative and depend on scope complexity and client responsiveness. Approvals and clarifications are typically expected within 2-3 working days as outlined in Client Commitments.
```

## 11. Commercial Structure

Keep this section compact and commercial.

Start with:

- Pricing Model
- Customisation Fees
- Payment Terms
- Renewal & Escalation

Example:

```markdown
# 5. Commercial Structure

- **Pricing Model:** Subscription-based (monthly), with tiered pricing (Enterprise)
- **Customisation Fees:** Quoted separately on a time-and-materials or fixed-price basis
- **Payment Terms:** Net 30 days unless otherwise agreed
- **Renewal & Escalation:** Annual price review, inflationary adjustments, or additional usage-based charges
```

## 12. One-Off Development Cost

Use an item/price table instead of a large phase allocation table.

```markdown
## 5.1 One-Off Development Cost

| Item | Price |
|---|---:|
| **Core**<br>- Baseline Enterprise MAIA System<br>- Periodic System and Feature Updates<br>- Storage, Model Training, Ingestion | [Amount] |
| **Customisations**<br>- [Custom module 1]<br>- [Custom module 2]<br>- [Custom module 3] | [Amount / FREE / TBC] |
| **Grand Total** | **[Amount]** |
```

If a discount, subsidy, or free customisation condition exists, put it directly below the table.

Example:

```markdown
*Subject to [subsidy / approval]. If that does not happen, Mindhive will provide [customisation package] above the [base amount] base for free.*
```

## 13. Payment Terms

Use a simple milestone table.

```markdown
## 5.2 Payment Terms

| Milestone | Percentage | Price |
|---|---:|---:|
| Milestone 1 - Phase One Initiation | 50% | [Amount] |
| Milestone 2 - UAT Sign Off | 50% | [Amount] |
```

Only add more milestones if the client agreement requires them.

## 14. Caveats & Exclusions

Keep this section short and practical.

Common caveats:

- **Third-Party Dependencies:** Mindhive is not liable for downtime or issues on external platforms.
- **Connectivity:** Client is responsible for internet and device readiness.
- **Client-side Integrations:** Unsupported third-party integrations outside approved scope are excluded.
- **Data Accuracy:** Client is responsible for correctness of provided data.

Add client-specific exclusions only when required. Avoid turning this section into a long legal essay.

## 15. Service Level Agreements (SLAs)

Split SLAs into Mindhive commitments and client commitments.

### Mindhive Commitments

Common items:

- System availability, often 99.5% uptime excluding scheduled maintenance
- Support response times:
  - Critical (P1): within 2 hours
  - High (P2): within 8 hours
  - Normal (P3): within 2 business days
- Maintenance windows
- Data protection
- Lifetime upgrades and support for the duration of the subscription

### Client Commitments

Common items:

- User access and permissions
- Data provisioning
- Timely feedback
- Compliance
- Point of contact
- Payments

For feedback wording, use:

```markdown
The client commits to responding to vendor queries, requests, or approvals within 2-3 working days.
```

## 16. Appendix

The appendix should provide reusable MAIA platform context.

Recommended sub-sections:

- Delivery Model
- System Interfaces
- Core System Capabilities
- Security & Compliance
- Availability & Performance
- Customisation & Extensibility

Use appendix content for general platform assurances, not for hidden committed scope. Anything priced or promised must appear in Product Specifications or Customisation & Extensions.

## 17. Acknowledgement & Agreement

Close with acknowledgement text and signature blocks.

```markdown
# 9. Acknowledgement & Agreement

This document serves as a baseline specification and framework for MAIA's implementation and usage. By signing below, both parties agree to the commitments, responsibilities, and exclusions set out herein.

**For Mindhive:**

| Signature |
|---|
| Name: [Name]<br>Position: [Position]<br>Date: [Date] |

**For [Client Name]:**

| Signature |
|---|
| Name: [Name]<br>Position: [Position]<br>Date: [Date] |
```

## 18. Reusable SOW Drafting Template

```markdown
# [Updated] [Client Name] SOW

The Services Agreement is made effective as of [Date].

| BETWEEN | The Vendor | **Mindhive Sdn Bhd** ("Mindhive"), with its office located at [Mindhive Address]. |
|---|---|---|
| AND | The Client | **[Client Legal Name]** ("[Client Short Name]"), with its office located at [Client Address]. |

# 1. Executive Summary

[Para 1: Who the client is — business description, what they sell, how they operate, volume/scale.]

[Para 2: Current workflow — what tools they use today, where the pain is, what breaks down.]

[Para 3 (optional): Any secondary business motion that also needs MAIA.]

This SOW defines a phased implementation of MAIA that introduces:

- [specific deliverable 1 — name the feature and the outcome it fixes]
- [specific deliverable 2]
- [specific deliverable 3]

The current documented implementation investment is **RM [AMOUNT]**, subject to final commercial confirmation, payment terms, and dependency validation.

## 1.1 Enterprise Baseline Modules

The following sections outline the baseline modules included in the MAIA implementation for [Client]:

- Internal Chatbot (Sales and Order Intake)
- User Workspaces
- [Client] Document Lifecycle
- Integration and Data Sync with [ACCOUNTING SYSTEM]

# 2. Product Specifications (Phase One)

The following section highlights the modules that [Client Name] will be receiving and the features of each module. Each module is designed with scalability, configurability, and high availability in mind, ensuring it can fit into [Client Name]'s business process.

## 2.1 Internal Chatbot ([Use Case])

### 2.1.1 [Assistant Name]

The [assistant name] chatbot serves as an assistant to help [role/team] [business outcome].

- **Platform:**
  - [WhatsApp / Email / Microsite]

- **Features:**
  - **Intelligent Document Processing (IDP):** [Documents handled.]
  - **Pre-Order Creation Checking:** [Checks performed before order creation.]
  - **Sales Order Creation:** [How users create orders.]
  - **Output Document Generation:** To generate output documents. List of output documents supported:
    - [Document 1]
    - [Document 2]
  - **Daily Digests:** [Digest behaviour.]
  - **Sales Process SOP:** [Approval or SOP behaviour, if applicable.]

## 2.2 User Workspaces

Desktop Web and/or Mobile Responsive Web interfaces where users can login and interact with the system.

### 2.2.1 [Workspace Name]

- **Features:**
  - **[Feature Name]:** [Capability.]
  - **[Feature Name]:** [Capability.]
  - **[Feature Name]:** [Capability.]

### 2.2.2 Integration & Data Sync with [System]

To push and synchronise data with [System], the following connectivity is required. Final method is subject to confirmation with the client's [system] vendor / IT team.

- **Integration Method:**
  - Preferred: [Preferred method].
  - Alternate: [Fallback method] if [constraint].

- **Core Touchpoints:**
  - Master Data (Read): [Data list].
  - Transactions (Write): [Transaction list].
  - Status / Documents (Read/Write as applicable): [Status/doc list].
  - Additional modules, if required: [Later-phase modules].

- **Dependencies:**
  - [Dependency 1].
  - [Dependency 2].

# 3. Customisation & Extensions (Phase Two Onwards)

MAIA provides a baseline suite of standard features out of the box. However, recognising that every business has unique workflows, the system supports customisation and extension options. These are scoped, estimated, and mutually agreed upon prior to execution.

## 3.1 Customisations (Phase Two)

### 3.1.1 [Custom Module Name]

- **Platform:** [Platform]

- **Core Features:**
  - **[Feature Name]:** [Capability.]
  - **[Feature Name]:** [Capability.]
  - **[Feature Name]:** [Capability.]

Notes: These customisations will be scoped in detail after Phase One delivery and refined based on [Client Name]'s confirmed workflows.

## 3.2 Customisations (Phase Three)

### 3.2.1 [Future Custom Module Name]

- **Platform:** [Platform]

- **Core Features:**
  - **[Feature Name]:** [Capability.]
  - **[Feature Name]:** [Capability.]

# 4. Estimated Timelines - Three Phase Delivery

**Phase 1: Base MAIA System (per Section 2: Product Specifications)**

Deliver and go-live with the baseline MAIA features outlined in Section 2.

| Item | Indicative Time Taken |
|---|---:|
| Onboarding & Setup | 1-2 weeks |
| Configuration & Customisation | 1-2 weeks |
| User Training & UAT | 1-2 weeks |

**Phase 2: Customisation & Extensions (per Section 3)**

After Phase 1 go-live, Mindhive will design, build, and release the agreed customisations listed in Section 3. Timelines are confirmed via change requests per item.

| Item | Indicative Time Taken |
|---|---:|
| Design & Detailed Scoping | 1-2 weeks |
| Build & Integration | 3-6 weeks |
| User Training & UAT | 1-2 weeks |
| Go-Live & Hypercare | 1-2 weeks |

**Phase 3: Later Customisation Package (per Section 3.2)**

Phase 3 items will be confirmed after Phase 2 delivery or through a separate scope confirmation.

| Item | Indicative Time Taken |
|---|---:|
| Detailed Scoping | TBC |
| Build & Integration | TBC |
| User Training & UAT | TBC |
| Go-Live & Hypercare | TBC |

Notes: All durations are indicative and depend on scope complexity and client responsiveness. Approvals and clarifications are typically expected within 2-3 working days as outlined in Client Commitments.

# 5. Commercial Structure

- **Pricing Model:** Subscription-based (monthly), with tiered pricing (Enterprise)
- **Customisation Fees:** Quoted separately on a time-and-materials or fixed-price basis
- **Payment Terms:** Net 30 days unless otherwise agreed
- **Renewal & Escalation:** Annual price review, inflationary adjustments, or additional usage-based charges

## 5.1 One-Off Development Cost

| Item | Price |
|---|---:|
| **Core**<br>- Baseline Enterprise MAIA System<br>- Periodic System and Feature Updates<br>- Storage, Model Training, Ingestion | [Amount] |
| **Customisations**<br>- [Customisation 1]<br>- [Customisation 2]<br>- [Customisation 3] | [Amount / FREE / TBC] |
| **Grand Total** | **[Amount]** |

*[Commercial note, subsidy condition, discount condition, or package assumption.]*

## 5.2 Payment Terms

| Milestone | Percentage | Price |
|---|---:|---:|
| Milestone 1 - Phase One Initiation | 50% | [Amount] |
| Milestone 2 - UAT Sign Off | 50% | [Amount] |

# 6. Caveats & Exclusions

- **Third-Party Dependencies:** Mindhive is not liable for downtime or issues on external platforms.
- **Connectivity:** Client is responsible for internet and device readiness.
- **Client-side Integrations:** Unsupported third-party integrations outside approved scope are excluded.
- **Data Accuracy:** Client is responsible for correctness of provided data.

# 7. Service Level Agreements (SLAs)

## 7.1 Mindhive Commitments

**System Availability:** [Availability target] excluding scheduled maintenance.

**Support Response Times:**

- **Critical (P1):** Within 2 hours
- **High (P2):** Within 8 hours
- **Normal (P3):** Within 2 business days

**Maintenance Windows:** Pre-communicated, typically scheduled during weekends or off-peak hours.

**Data Protection:** Regular backups and defined disaster recovery commitments to safeguard client data.

**Lifetime Upgrades & Support:** Clients continue to receive ongoing product upgrades, security enhancements, and support for the lifetime of their subscription.

## 7.2 Client Commitments

**User Access & Permissions:** Client to designate system administrators and enforce internal user policies.

**Data Provisioning:** Provide accurate, complete, and timely data uploads to enable smooth onboarding and continued operations.

**Timely Feedback:** Provide approvals, clarifications, and input during customisation and implementation phases to avoid project delays.

**Compliance:** Adhere to licensing terms, security practices, and applicable regulations.

**Point of Contact:** Designate a primary point of contact for Mindhive communications. The client commits to responding to vendor queries, requests, or approvals within 2-3 working days.

**Payments:** Ensure timely settlement of subscription fees, invoices, and approved change request costs as per agreed commercial terms.

# 8. Appendix

## 8.1 Delivery Model

[Cloud-hosted platform, tiers, deployment regions.]

## 8.2 System Interfaces

[Web application, mobile-responsive access, specialised workspaces, integration interfaces.]

## 8.3 Core System Capabilities

[Unified business foundation, customisable workflows, scalable data models, extensibility.]

## 8.4 Security & Compliance

[Authentication, data isolation, encryption, compliance roadmap.]

## 8.5 Availability & Performance

[High availability, scalability, uptime commitment, performance monitoring.]

## 8.6 Customisation & Extensibility

[Workflow customisation, data flexibility, branding options, integration points.]

# 9. Acknowledgement & Agreement

This document serves as a baseline specification and framework for MAIA's implementation and usage. By signing below, both parties agree to the commitments, responsibilities, and exclusions set out herein.

**For Mindhive:**

| Signature |
|---|
| Name: [Name]<br>Position: [Position]<br>Date: [Date] |

**For [Client Name]:**

| Signature |
|---|
| Name: [Name]<br>Position: [Position]<br>Date: [Date] |
```

## 19. Reusable Prompt For Future SOW Writing

Use this prompt when generating a new SOW in the Lean Giap style.

```text
Create a professional client-facing MAIA Scope of Work in the Lean Giap signed SOW style.

Use this structure:
Preamble: Effective date line + parties table
1. Executive Summary (client narrative + 1.1 Enterprise Baseline Modules)
2. Product Specifications (Phase One)
3. Customisation & Extensions (Phase Two Onwards)
4. Estimated Timelines
5. Commercial Structure
6. Caveats & Exclusions
7. Service Level Agreements (SLAs)
8. Appendix
9. Acknowledgement & Agreement

Rules:
- Keep Phase One focused on baseline MAIA modules.
- Put later customisations under Phase Two or Phase Three.
- For each chatbot/module, include Platform and Features.
- For user workspaces, list workspace features clearly.
- For integrations, include preferred method, alternate method, core touchpoints, and dependencies.
- State that integration method is subject to confirmation with the client's vendor or IT team.
- Use simple timeline tables for baseline delivery and customisation delivery.
- Use a compact commercial structure with one-off development cost and payment terms.
- Include practical caveats, Mindhive commitments, and client commitments.
- Do not invent features, pricing, or dates. Mark unknowns as TBC.

Source material:
[Paste client notes, discovery findings, feature list, or commercial details here]
```

## 20. Internal QA Checklist

Use this checklist before sending the SOW for review.

- [ ] Agreement date is correct.
- [ ] Vendor and Client legal names are correct.
- [ ] Client address is correct.
- [ ] Section 1 Executive Summary describes the CLIENT — not generic MAIA boilerplate.
- [ ] Section 1.1 Enterprise Baseline Modules listed as bullets (not numbered list).
- [ ] Items in 1.1 match the `## 2.x` subsections in Section 2.
- [ ] Phase One contains only baseline product specifications.
- [ ] Phase Two/Three customisations are separated from baseline scope.
- [ ] Each chatbot/module has a platform and feature list.
- [ ] Output documents are listed only if they are in scope.
- [ ] ERP/integration section includes preferred method, alternate method, touchpoints, and dependencies.
- [ ] Integration method is marked subject to confirmation.
- [ ] Timeline tables match the phase structure.
- [ ] Commercial table total matches payment terms.
- [ ] Subsidy, free customisation, or discount notes are explicit.
- [ ] Caveats and exclusions are concise and relevant.
- [ ] Mindhive commitments are included.
- [ ] Client commitments include 2-3 working day response expectation where applicable.
- [ ] Appendix contains general platform context only.
- [ ] Signature blocks are present.

## 21. Red Flags To Fix

- Baseline and customisation scope are mixed together.
- Phase Two custom work is written as if already included in Phase One.
- Integration is promised without vendor/IT confirmation.
- Output documents are listed generically without checking client scope.
- Timeline says "three phase" but only two phases are described.
- Commercial totals do not match milestone payments.
- Customisations are marked free without stating the condition.
- Caveats are too broad or missing client responsibility.
- Appendix contains scope that is not mentioned earlier.

## 22. See Also

- [[brain/Gotchas]]
- [[02 - PM Playbook/Templates]]
- [[02 - PM Playbook/Processes]]
