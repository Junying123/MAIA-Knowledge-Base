---
owner: Gareth
status: draft
last_reviewed: 2026-04-21
---

# HG Group — Requirement Gathering Questionnaire

**Client:** HG Services (M) Sdn Bhd
**Purpose:** Pre-session discovery questionnaire to guide the requirement gathering meeting
**Prepared by:** Mindhive PM team

> This questionnaire is structured around HG's 8 service divisions and the open gaps identified from the customer profile. Use this as a guide — not a script. Prioritise the sections that the client wants to talk about most. Aim to confirm pain, not sell solution.

---

## Section 1 — Business Scale & Team Structure

*Goal: Get the real numbers. Website figures ("20+ jobs/day", "100+ malls") need confirming. Understand who owns what operationally.*

1. How many jobs does HG typically run per day / per week right now? Is that spread evenly across all 8 divisions or are certain services (e.g. hoarding, reinstatement) the dominant volume drivers?
2. How many people are currently on the team — office/coordination staff vs field/on-site teams? Has headcount grown significantly in the last 1–2 years?
3. Who is responsible for coordinating a job from the moment an enquiry comes in to the moment the completion report is sent? Is that one person, or does responsibility hand over across a chain?
4. Are the 8 service divisions managed by separate team leads, or does one central coordinator oversee all divisions?
5. Do certain divisions (e.g. Lorry, Scaffold) operate relatively independently, or are they almost always bundled with other services on the same job?

---

## Section 2 — Enquiry & Job Intake

*Goal: Understand how new jobs enter the system today. This is likely the first pain point — confirm whether WhatsApp is the primary channel and how jobs are captured.*

6. How do new job enquiries typically come in — WhatsApp, phone call, website form, email? Which channel dominates?
7. When an enquiry comes in, what information does HG capture at intake? Is there a standard form or checklist, or does it vary by coordinator?
8. How is the site visit organised after an enquiry? Who books it, who attends, and what happens to the site visit notes afterwards?
9. What does "quote within 2 hours" look like in practice? Who prepares the quote, what tool is used (Excel, Word, WhatsApp message), and how is it sent?
10. Once a client confirms a job, what triggers the job starting? Is there a formal confirmation step, or does work begin based on a WhatsApp reply?

---

## Section 3 — Quotation & Pricing

*Goal: Clarify how pricing works — rate card vs ad hoc. This directly affects how MAIA's quotation feature needs to be configured. This is a flagged open gap from the customer narrative.*

11. How does HG currently price jobs? Is there a standard rate card for common services (e.g. per linear foot of hoarding, per sqft of tiling), or is every job priced ad hoc based on scope?
12. Who has authority to set or override pricing? Is there a pricing approval step for large or complex jobs?
13. How are multi-division jobs quoted — as a single combined quote, or as separate quotes per division (e.g. one quote for hoarding, another for lorry)?
14. What happens when the scope changes after a client has confirmed — how are variations handled and communicated?
15. Can you walk us through a recent quote you sent — what did it look like, what fields did it include, and where does the copy live now?

---

## Section 4 — Job Coordination & Multi-Division Jobs

*Goal: Understand the coordination pain at the centre of HG's operations. A reinstatement job may touch scaffold, hoarding, printing, lorry, and storage — how is this managed today?*

16. For a typical reinstatement job that involves multiple divisions, how is the handoff between divisions managed? (e.g. when does the reinstatement team know the scaffold is ready?)
17. Is there a single job record or reference number that links all the connected divisions on a multi-division job? Or does each division track their involvement separately?
18. How do team leads on site communicate progress back to the office? WhatsApp group, phone call, something else?
19. When something goes wrong on site (wrong materials, scaffold not ready, permit not approved), how is that escalated and resolved? How long does it typically take to correct?
20. How does the client get updates on their job status? Do they call HG, or does HG proactively update them?

---

## Section 5 — Completion Reports

*Goal: Understand the current completion report process — format, effort, volume. This is a flagged open gap (format not yet confirmed). Completion report automation is a proposed MAIA differentiator.*

21. Can you walk us through how a completion report is currently produced? Who does it, what tool, and how long does it take per report?
22. Is there an existing PDF template you use for completion reports, or does the format vary by job or coordinator?
23. What information does a typical completion report include — photos, scope performed, division sign-offs, dates? Any specific fields that clients always ask for?
24. How are site photos currently captured and stored? Do field teams send them via WhatsApp, and how are they then compiled?
25. How often do clients request a report reprint or historical report from a previous job? How easy is that to retrieve today?

---

## Section 6 — Permit & Compliance Management

*Goal: Understand how HG manages the permit and documentation trail across 20+ active jobs. This is a high-frequency, high-risk admin area.*

26. What permits and documents are typically required before a job can start on site? (e.g. work permit, insurance cover note, PE-endorsed drawings, Green Tag)
27. Who manages permit applications — is it centralised in the office or handled separately by each division/team lead?
28. How do you currently track which permits are pending, approved, or expired across all active jobs? Is there a tracker (spreadsheet, shared folder, etc.) or does it live in people's heads?
29. Different malls have different compliance requirements — how does HG track what each mall needs? Is that documented anywhere or is it experience-based knowledge held by individuals?
30. Has HG ever had a job delayed or failed site access due to a missing permit or document? How was that managed?

---

## Section 7 — Client & Relationship Management

*Goal: Understand how HG manages their client base. Mall management, retail chains, and main contractors are likely repeat buyers — is that relationship being actively managed?*

31. Who are HG's most important client types right now — mall management companies, retail chains, or main contractors? Which segment drives the most revenue?
32. For repeat clients (e.g. a mall management company that gives HG regular work), is there a single contact person at HG who owns that relationship? What happens if that person leaves?
33. When a returning client calls in a new job, does HG have a way to quickly pull up their history — past jobs, services used, outstanding quotes? Or is that looked up manually?
34. Have you ever lost a client or a repeat job because something fell through the cracks — a missed follow-up, a lost quote, a delayed report? What happened?
35. Do clients ever raise disputes about what was in the original scope vs what was delivered? How are those handled today?

---

## Section 8 — Invoicing & Payments

*Goal: Understand the invoicing workflow. This is flagged as Phase 2 in the customer narrative but needs confirming — if HG's invoicing is already broken, it may need to be Phase 1.*

36. How does HG currently invoice clients — is there accounting software in use (SQL, QuickBooks, Xero, Excel), or is invoicing done manually?
37. What is the typical payment term for HG's clients (30 days, 60 days, COD)? Is payment tracking a significant admin burden?
38. Are there clients who consistently pay late? How is that managed and followed up on?
39. How long does it typically take from job completion to invoice being sent? Is there a delay — and if so, why?
40. Are there cases where multiple jobs for the same client are batched into a single invoice, or is it always one invoice per job?

---

## Section 9 — Field Team & Technology Readiness

*Goal: Understand device readiness and current tool usage. Affects Phase 2 mobile planning and whether a WhatsApp-based MAIA interface is viable.*

41. What devices do field team leads and coordinators use day-to-day — smartphones, laptops, both? Are devices company-issued or personal?
42. Is the team generally comfortable using apps for work, or is WhatsApp the primary tool for most people?
43. Are there any tools HG currently uses for job tracking or operations (e.g. Google Sheets, Trello, Monday.com, any ERP) — even informally?
44. Is internet connectivity reliable at the sites where HG works, or are there locations where field teams are frequently offline?

---

## Section 10 — Open Gaps from Customer Narrative (Must Confirm)

*These are the specific gaps flagged during the pre-session narrative prep. Confirm these before leaving the meeting.*

45. **Scale confirmation** — The website mentions 20+ hoarding installations per day and 100+ malls. Are these current figures? What is HG's actual daily/weekly job volume today across all divisions?
46. **Pain validation** — We've identified 5 likely pain areas: WhatsApp job board chaos, no single job view across divisions, quotes living nowhere, manual completion reports, and permit tracking. Which of these feels most urgent to HG? Are there pains we've missed entirely?
47. **Investment alignment** — Has HG seen a proposal from Mindhive? Is there an investment figure on the table, or is this session still pre-proposal?
48. **Phase 2 priorities** — We've assumed that invoicing, mobile field app, and dashboard/reporting are Phase 2. Does HG agree with this sequencing, or is one of these actually urgent enough to be in Phase 1?
49. **Decision-maker confirmation** — Who at HG will be the decision-maker for signing off on a MAIA implementation? Is that person in the room today?

---

## Section 11 — Demo Readiness (Sample Requests)

*At the end of the session, brief HG on what to prepare before the product demo. Tailor this list based on what came up in the meeting.*

> "To show MAIA using your actual data — not generic examples — we'd love for you to send us a few things before the demo. Nothing confidential; just working examples of how you operate today."

- [ ] **A recent quote (PDF or screenshot)** — any job type; we'll use this to pre-configure a quotation template in your format
- [ ] **A completion report example** — your current PDF format so we can map the fields into the MAIA report template
- [ ] **A multi-division job example** — walk us through a recent job that involved 3+ divisions so we can demonstrate end-to-end job coordination
- [ ] **A client list (anonymised or partial)** — top 5–10 client companies with job type; we'll pre-load these into MAIA's client records for the demo
- [ ] **Your permit checklist or compliance requirements list** — even a rough one; we'll build the document tracker around your actual permit types

---

## See Also

- [[HG Group - Customer Profile]] — business background and open gaps
- [[Customer Narrative - HG Group]] — pre-built proposal narrative (awaiting RG confirmation)
- [[02 - PM Playbook/Templates/[Template] Requirement Gathering Output]] — for structuring notes after this session
- [[09 - Intake & Triage/Request Intake Inbox]] — log feature requests after the session
