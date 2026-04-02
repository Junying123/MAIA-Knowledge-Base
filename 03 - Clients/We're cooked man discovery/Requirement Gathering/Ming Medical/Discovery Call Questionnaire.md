---
owner: [PM Name]
status: draft
last_reviewed: 2026-04-02
client: Ming Medical
prospect_stage: discovery
---

# Ming Medical — Discovery Call Questionnaire

> **Read first:**
> - [[Ming Medical - GTM Proposal]] — client-facing scope, phases, and commercials
> - [[Ming Medical - GTM Brief Transcript]] — internal GTM handover (includes Ming Medical workflow, stakeholders, and guardrails)

**Call date:** TBC  
**PM:** [Name]  
**Attendees:** [Names]

Use this checklist during the call. Check off each item as it is answered. Leave blanks for follow-up.

---

## 1. Stakeholders, Decision-Making & Change Control

*GTM flagged Sean as primary day-to-day and Mindy as finance / scope-sensitive. We need clarity on who approves product behaviour, spend, and scope changes.*

- [ ] Who attends discovery from Ming Medical — roles and names? (Confirm Sean, Mindy, others.)
- [ ] Who signs off on **proposal template** wording and clinical framing?
- [ ] Who signs off on **pricing rules** (who may enter price, dual approval, thresholds)?
- [ ] For **change requests** during the project, what is the agreed process? (Single PM on client side vs committee.)
- [ ] Who owns **CPG updates** after go-live — medical lead, ops, external clinician?

---

## 2. Business Context & Customer Journey

*Proposal describes ultra–high-value contracts and international / partner-doctor channels. Validate volumes, locales, and how proposals convert to revenue.*

- [ ] Describe the **typical buyer journey** from first enquiry to signed agreement — all parties (patient, partner doctor, Ming Medical).
- [ ] Rough split: **direct vs partner-doctor**-originated enquiries (% or qualitative).
- [ ] Key geographies / languages for **end patients** (e.g. UAE, UK, Australia, local) — anything missing from EN / 中文 / العربية?
- [ ] Typical **contract size** range and what drives variance (treatment length, product mix, concierge services).
- [ ] After the patient accepts a proposal, what are the **exact next steps** today (deposit, scheduling, legal, travel, etc.)?

---

## 3. Current Proposal Workflow (As-Is)

*Proposal and transcript: bottleneck is manual proposal building from medical reports + CPG. Map the real steps, systems, and handoffs.*

- [ ] Walk through **one real example** from enquiry → medical report received → CPG lookup → draft proposal → internal review → sent to customer.
- [ ] How long does each step take **today** (hours/days)? Where are the delays?
- [ ] Who performs **CPG matching** today — always the same person(s), or delegated to doctors?
- [ ] How are **edge cases** handled when the report does not fit the CPG cleanly?
- [ ] What **tools** are used now (WhatsApp, email, Word, PDF, spreadsheets, other)? Any system of record?

---

## 4. CPG as Single Source of Truth

*Both documents stress CPG-driven answers only. We need structure, ownership, and update cadence.*

- [ ] What is the **current CPG format** (Excel, Word, PDF, database)? Can we obtain the **latest master**?
- [ ] List **columns / sections** in the CPG today (disease, treatment, dosage, duration, side effects, contraindications, etc.).
- [ ] How often does the CPG **change**? Who authors changes and how are versions tracked?
- [ ] Are there **disease or treatment entries** that need multiple rows, bundles, or conditional logic (if/then)?
- [ ] Any need for **new attributes** (e.g. units, staging, lab thresholds) called out in the transcript — confirm required fields for MAIA to store.

---

## 5. Medical Report Intake

*Inputs may include PDF, images, or long unstructured text. Clarify volume, quality, and privacy.*

- [ ] What **file types** and **languages** do reports arrive in?
- [ ] Typical **length and structure** of a report (1 page vs many, scans vs native PDF).
- [ ] Monthly **volume** of reports / proposal requests (rough order of magnitude).
- [ ] **PII / PHI** handling: anonymisation expectations, retention, who may access uploads, and **hosting boundary** (client infrastructure — confirm IT contact and environment).
- [ ] Do partner doctors submit reports **on behalf of patients** with different consent considerations?

---

## 6. Proposal Output & Template

*Proposal: ~2-page format; all fields filled except **price**, which Ming Medical/doctors insert; possible WhatsApp quotation after approval.*

- [ ] Provide **current proposal template(s)** (blank + one redacted real example if allowed).
- [ ] List every **mandatory section** and the **order** they must appear.
- [ ] **Tone and compliance** language: disclaimers, “not medical advice” boundaries, regulatory text — who provides final legal/clinical wording?
- [ ] Confirm: **price is never auto-calculated** by MAIA — document any exception or fee schedules still “human-only.”
- [ ] After approval, how is the customer-facing **quote** delivered today — **WhatsApp** only or also email/PDF/portal? Desired future flow step-by-step.

---

## 7. Chatbot Q&A, Guardrails & Approved Sources

*Answers must be limited to CPG + client-approved websites.*

- [ ] List **all approved websites** (URLs) and who certifies them.
- [ ] Should the bot **cite** CPG section / URL when answering?
- [ ] What must the bot **refuse** to answer (e.g. diagnosis for new conditions, dosing outside CPG, comparative claims)?
- [ ] How should **“I don’t know”** or **escalate to human** behave in-product?
- [ ] Any **off-label** or experimental treatments in scope or explicitly out of scope?

---

## 8. Roles: Ming Medical vs Partner Doctors

*End users include Ming Medical staff and partner doctors; workflow is draft → review → approve.*

- [ ] Full list of **user roles** (e.g. admin, clinician, partner doctor, read-only).
- [ ] Which roles may **upload reports**, **generate drafts**, **edit**, **approve**, **send** to customer?
- [ ] Do partner doctors need **separate tenancy**, branding, or audit views?
- [ ] **Training** expectations: languages, time zones, self-serve docs.

---

## 9. Multi-Language (English / 中文 / العربية)

- [ ] For each language: used for **UI**, **proposal output**, **chat**, or all three?
- [ ] **RTL** requirements for Arabic (layout, PDF, WhatsApp).
- [ ] Who **reviews** machine-assisted translations for clinical accuracy?
- [ ] Sample **side-by-side** outputs needed for UAT (one case in all three languages)?

---

## 10. Workspace, Audit Trail & Versioning

*Proposal promises visibility of changes to proposals/invoices generated via the chatbot.*

- [ ] What events must be **logged** (upload, generate, edit, approve, send, price entered)?
- [ ] **Versioning**: keep every draft or only major milestones?
- [ ] **Invoice** linkage: when an invoice exists, what fields must sync from proposal/SO?
- [ ] Export / reporting needs for **compliance or management** (periodic summary, per doctor, per treatment).

---

## 11. Order Management (Base MAIA) — Post-Proposal

*After customer acceptance, orders are created from the confirmed proposal; low SO volume but high value.*

- [ ] Confirm **order creation** trigger (button from approved proposal, manual SO, integration).
- [ ] Rough **orders per month** and line-item structure (stem cell SKUs, bundles, services).
- [ ] **Fulfillment** steps: inventory, batch/lot, cold chain, cross-border shipping — what must MAIA track vs external systems?
- [ ] **Invoicing** rhythm (per order, milestones, deposits) and **multi-currency** needs.
- [ ] Any **purchasing / supplier** flows in scope for Phase 1 or explicitly later?

---

## 12. Integrations, Hosting & Security

*Proposal states hosting on Ming Medical infrastructure.*

- [ ] **Hosting target** (cloud provider, on-prem, VPC) and **deployment constraints** (VPN, SSO, MFA).
- [ ] **Identity**: AD / Okta / Google Workspace / other?
- [ ] Required **encryption**, **backup**, and **DR** expectations.
- [ ] Integrations in scope: **WhatsApp Business API**, email, document storage, existing EMR — list all.

---

## 13. UAT, Success Criteria & Phase Boundaries

*Align UAT with Phase 1 scope and payment milestones.*

- [ ] Define **UAT exit criteria** (e.g. X anonymised cases per language, approval workflow end-to-end).
- [ ] **Sample set**: confirm provision of **anonymised medical reports** and **expected proposal outputs** for test packs.
- [ ] What is explicitly **out of scope** for Phase 1 (defer to Phase 2+)?
- [ ] Support and **hypercare** expectations after go-live (hours, channel, SLAs).

---

## 14. Samples to Request

Before or at the end of the call, ask for:

- [ ] Latest **CPG** master file (or access path).
- [ ] **Proposal template(s)** — blank and one completed **redacted** example.
- [ ] **3–5 anonymised medical reports** representing common and edge cases.
- [ ] List of **approved knowledge websites** and any access restrictions.
- [ ] Example of **customer-facing message** (e.g. current WhatsApp quote) if available.
- [ ] Any current **SO / invoice** samples (redacted) if OMS must mirror fields.
- [ ] **Org chart** or RACI for clinical vs commercial vs finance.

---

## Open Items After This Call

> Fill this in post-call with anything unresolved.

| # | Open Question | Owner | Target Date |
|---|---------------|-------|-------------|
| 1 | | | |
| 2 | | | |

---

## See Also

- [[Ming Medical - GTM Proposal]]
- [[Ming Medical - GTM Brief Transcript]]
- [[02 - PM Playbook/Templates/[Template] Discovery Requirement Gathering]] — fill after the call
- [[03 - Clients/We're cooked man discovery/Requirement Gathering/README]]
