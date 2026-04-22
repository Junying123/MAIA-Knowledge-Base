---
owner: Gareth
status: draft
last_reviewed: 2026-04-21
---

# HG Group — Requirement Gathering Questionnaire

**Client:** HG Services (M) Sdn Bhd
**Purpose:** Pre-session discovery questionnaire to guide the requirement gathering meeting
**Prepared by:** Mindhive PM team

> HG's 7-step engagement flow and 8-document intake checklist are confirmed from their website — these aren't hypotheses. The questions below are built to validate the *pain behind the process*, not re-confirm the process itself. Use this as a guide, not a script. Walk through one real job end-to-end before asking anything on this list.

---

## Reference: HG's Confirmed 7-Step Engagement Flow

Every job across all 8 divisions (Hoarding, Printing, Scaffold, Reinstatement, Subcon Fit-Out, Signage, Lorry & Rorobin, Temporary Storage) runs through:

| Step | What Happens |
|---|---|
| 1 | Enquiry received (WhatsApp / call / web form) |
| 2 | Site visit / measurement |
| 3 | Quotation sent |
| 4 | Client confirmation |
| 5 | Permit application to mall (if required) |
| 6 | Job execution on-site |
| 7 | Completion report delivered within 48 hours |

Before Step 3 can proceed, HG requires up to **8 items from the client**: lot number, mall name, job drawings, start date, work permit copy, mall contact person, insurance cover note, and payment slip.

---

## Section 1 — Business Scale & Team Structure

*Confirm the real numbers. Website figures ("20+ jobs/day", "100+ malls") need validating before they go into the proposal.*

1. How many jobs does HG typically run per day right now — across all 8 divisions combined? Is there a division that dominates volume (e.g. hoarding is the majority)?
2. How many staff are on the team today — office/coordination vs field? Has headcount grown significantly in the last 1–2 years to keep up with volume?
3. Who owns a job from enquiry to completion report? Is there one coordinator who runs the whole 7 steps, or does responsibility hand off between people?
4. Are the 8 divisions managed by separate team leads with separate coordination flows, or does one central coordinator manage all of them?
5. On a multi-division job (e.g. reinstatement + scaffold + lorry + storage), who is responsible for making sure all divisions are in sync?

---

## Section 2 — The 7-Step Flow in Practice

*The flow is confirmed. These questions are about where it breaks down. Walk through a real job — pick the most complex one they handled last week.*

6. Can you walk us through a recent multi-division job from Step 1 to Step 7? What actually happened at each stage — who did what, what tool was used, where did things get stuck?
7. At what step does a job most commonly get delayed or fall apart? What usually causes it?
8. When you're running 20+ jobs simultaneously, how do you know which stage each job is at right now? Is there a tracker, or does someone carry that in their head?
9. Has a job ever been mobilised on the wrong day, or a team turned up to a site that wasn't ready? What caused it and how was it resolved?
10. How does a client find out where their job stands mid-process — do they call HG, or does HG proactively update them?

---

## Section 3 — The 8-Document Intake Checklist

*This is a flagged open gap from the customer narrative. The checklist is confirmed; how it's collected today is unknown and directly affects how the Work Order intake flow is designed.*

11. When a new job comes in, how do you collect the 8 required items from the client — lot number, mall name, job drawings, start date, work permit copy, mall contact, insurance cover note, payment slip? WhatsApp back-and-forth, email, a form?
12. Do clients typically send all 8 items at once, or do they trickle in over multiple days?
13. When something is missing — say the insurance cover note hasn't arrived — how do you track that? Is there a checklist per job, or does someone just remember to follow up?
14. How many jobs at any given time are stuck waiting on a missing document from the client? Is that a significant drag on your ability to schedule and permit jobs?
15. Has HG ever had a job delayed at Step 5 (permit application) because a required document came in too late? How often does that happen?

---

## Section 4 — Quotation & Pricing

*A flagged open gap: rate card vs ad hoc pricing directly changes how the Quotation module is configured.*

16. When you quote a reinstatement job or a hoarding install, are you working from a standard price list (e.g. per linear foot, per sqft), or is every job priced from scratch based on site specifics?
17. Who prepares the quote — is it one person, or can multiple coordinators generate quotes?
18. What tool is used to prepare a quote today — Excel template, Word document, WhatsApp message with a number, something else?
19. Once a quote is sent, where does the copy live? If a client calls back three weeks later to adjust scope, how do you find the original quote?
20. How are scope changes and variations handled after a client has confirmed? Is there a variation process, or is it adjusted informally?
21. For multi-division jobs — does HG send a single combined quote, or separate quotes per division?

---

## Section 5 — Permit Application (Step 5)

*A flagged open gap: Step 5 is a 3-party flow — HG acts as the client's agent with the mall. Whether MAIA needs to track this or just document it changes the Work Order design.*

22. When HG applies for a work permit on behalf of a client, what does that process look like from start to finish? Who submits, to whom, and what documents are involved?
23. How do you track whether a permit is pending, approved, or rejected across 20+ active jobs? Is there a tracker (spreadsheet, folder, mental map)?
24. Different malls have different permit requirements — how does HG know what each mall needs? Is that written down somewhere or is it experience held by specific people?
25. Has a job ever failed site access on the day of install because a permit wasn't approved in time? What happened?
26. Is there a case where HG manages the permit entirely, vs where the client supplies the permit? How does that split work?

---

## Section 6 — Job Work Order & Multi-Division Coordination

*The Work Order module is now Phase 1 scope. These questions shape exactly how it needs to be built.*

27. For a job involving scaffold + reinstatement + lorry + storage, how does each division know when it's their turn? What triggers the handoff between divisions?
28. Is there any kind of job brief or Work Order document that HG currently sends to team leads before a job starts? Even an informal one — a WhatsApp message, a printed sheet, anything?
29. Does each division sign off separately when their stage is complete, or is there one sign-off at the end of the entire job?
30. When the field team completes their work, how do they communicate that back to the office? WhatsApp message? A call? Do they attach photos?
31. Can you show us an example of a job brief or Work Order format you currently use — even a photo of a printed sheet counts?

---

## Section 7 — Completion Report (Step 7)

*A flagged open gap: the current format is unknown and directly shapes the Work Order module's report generation design.*

32. Can you walk us through how a completion report is currently produced? Who does it, what tool, and roughly how long does it take per job?
33. Is there an existing PDF template for the completion report, or does the format vary by coordinator?
34. What information does a typical completion report include — photos, scope performed, division sign-offs, dates, lot details? Are there specific fields a mall or client always requires?
35. How are site photos currently captured and stored? Do field teams send them via WhatsApp, and if so, how are they then compiled into the report?
36. At 20+ jobs a day, if 5–10 reach completion on a given day — how many reports are you generating, and is that a bottleneck?
37. Has a client ever asked for a completion report reprint from a job that completed months ago? How easy was it to retrieve the original?

---

## Section 8 — Invoicing & Payment Tracking

*A flagged open gap: invoicing is now in Phase 1 scope. Need to understand current setup and whether there's an existing accounting software integration requirement.*

38. What software does HG use today for invoicing — SQL Accounting, QuickBooks, Xero, Excel, or fully manual?
39. How long does it typically take from job completion (Step 7) to invoice being sent to the client? Is there a delay — and if so, why?
40. When a job spans multiple divisions, does HG send one invoice for the full job or separate invoices per division?
41. What are the typical payment terms for HG's clients — 30 days, 60 days, COD?
42. Right now, if you wanted to know which clients have outstanding invoices older than 60 days — how would you find that information? Is there a view for this anywhere?
43. Do clients ever dispute invoices — claiming the charge doesn't match what was agreed? How is that resolved, and how often does it happen?

---

## Section 9 — Customer & Relationship Management

*Understand how repeat clients are managed and what happens when a coordinator who owns those relationships leaves.*

44. Who are HG's most important client types right now — mall management companies, retail chains, or main contractors? Which drives the most volume and revenue?
45. For a repeat client that gives HG regular work at multiple malls, is there one person at HG who owns that relationship? What happens if that person leaves?
46. When a returning client calls in a new job, how quickly can you pull up their history — past jobs, services used, payment behaviour? Or does that have to be looked up manually?
47. Has HG ever lost a repeat client or a follow-on job because something fell through the cracks — a missed follow-up, a quote never sent, a completion report that was late? What happened?

---

## Section 10 — Material & Equipment Tracking Appetite

*A flagged open gap: HG manages significant physical assets — hoarding panels, scaffold systems, lorry fleet. If they want visibility on these, the Logistics workspace becomes relevant and scope expands.*

48. Do you track your hoarding panel inventory, scaffold system availability, or lorry fleet anywhere today? Even a spreadsheet or a whiteboard?
49. Is there a pain point around not knowing what equipment is deployed on which site — e.g. trying to schedule a new hoarding install but not knowing if your panels are still out at another mall?
50. Is equipment and inventory tracking something HG would want in the system from day one, or is getting the commercial workflow (quote → job → invoice) sorted first the priority?

---

## Section 11 — Technology & Field Team Readiness

*Affects Phase 2 mobile planning and whether a WhatsApp-integrated MAIA intake flow is viable.*

51. What devices do coordinators and field team leads use day-to-day — smartphones, laptops, both? Are they company-issued?
52. Is the team generally comfortable using apps, or is WhatsApp the primary tool for most people — including team leads in the field?
53. Does HG currently use any tools for job tracking or operations beyond WhatsApp — Google Sheets, Trello, any ERP, even informal spreadsheets?
54. At sites like KLIA or large mall complexes, is internet connectivity reliable for field teams? Or are there locations where teams are frequently offline?

---

## Section 12 — Must-Confirm Before Leaving (Open Gaps from Customer Narrative)

*Non-negotiable checkboxes. Don't close the session without getting answers to all of these.*

- [ ] **Scale confirmation** — Confirm actual daily job volume today, across all 8 divisions. Is "20+ per day" current? Are hoarding jobs the dominant count?
- [ ] **Pain validation** — Walk through the 6 assumed pain areas (quote trail, no single job record, 8-document chase, invoice gap, receivables blindspot, compliance tracking by memory). Ask: *"Which of these resonates most? What are we missing?"*
- [ ] **8-document intake method** — How are the 8 required items collected from clients today? WhatsApp? Email? A form? What happens when a document comes in 3 days late?
- [ ] **Permit tracking today** — How does HG track permit status across 20+ active jobs? Any existing system or tracker?
- [ ] **Work Order / job brief format** — Does a current job brief format exist? Request a sample (even a photo). Does each division sign off separately or one sign-off at the end?
- [ ] **Completion report format** — Request a sample PDF. What fields are currently in it?
- [ ] **Pricing structure** — Rate card per service type, or ad hoc every time?
- [ ] **Accounting/invoicing software** — SQL, QuickBooks, Excel, or fully manual? Integration requirement or clean slate?
- [ ] **Equipment tracking appetite** — Do they want hoarding/scaffold/lorry tracking in scope, or is commercial workflow the priority?
- [ ] **Decision-maker in the room** — Who at HG has sign-off authority for a MAIA implementation? Are they in today's session?

---

## Section 13 — Demo Sample Requests

*Brief HG at the end of the session on what to prepare before the product demo. Tailor based on what came up.*

> "To demo MAIA using your actual data — not generic examples — we'd love a few things before the demo day. Nothing confidential; just working samples of how you operate today."

- [ ] **A recent quote (PDF or screenshot)** — any service type; we'll use this to configure a quotation template in your format
- [ ] **A completion report example** — your current PDF so we can map the fields into the MAIA Work Order report template
- [ ] **A multi-division job example** — walk us through a recent job that touched 3+ divisions so we can build the Work Order demo scenario
- [ ] **Your 8-item intake checklist** — even a WhatsApp message thread showing how you collect the documents counts; we'll build the intake flow around the real items
- [ ] **A client list (anonymised or partial)** — top 5–10 client companies; we'll pre-load these into MAIA's customer records for the demo
- [ ] **Any existing job brief or Work Order format** — physical printout, Word doc, or WhatsApp message format you currently use with team leads

---

## See Also

- [[HG Group - Customer Profile]] — business background, service divisions, confirmed 7-step flow
- [[Customer Narrative - HG Group]] — pre-built proposal narrative with all open gaps listed
- [[02 - PM Playbook/Templates/[Template] Requirement Gathering Output]] — for structuring notes after this session
- [[09 - Intake & Triage/Request Intake Inbox]] — log feature requests after the session
