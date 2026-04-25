---
owner: Gareth
status: draft
last_reviewed: 2026-04-23
lark_url:
---

# MAIA for HG Group

### The Contractor Behind the Malls — Finally Running on a System

_Prepared by Mindhive for HG Services (M) Sdn Bhd_ _Investment: RM [XX,XXX — to be confirmed]_

---

## Who HG Is

Founded in 2015 and headquartered in Puchong, Selangor, HG Services (M) Sdn Bhd is Malaysia's specialist contractor support company for the retail construction lifecycle. They don't build malls — they handle the operationally complex work that happens every time a retail lot changes hands: installing hoarding, stripping out old fit-outs, supporting new tenant renovations, removing debris, and everything in between. Their founder puts it plainly: "We are not a contractor. We are the nurse behind the contractor. The contractor is the doctor — we are the ones who make sure everything around the doctor works."

HG operates 8 in-house service divisions — Hoarding, Printing & Visual, Scaffold, Reinstatement, Subcon Fit-Out, Signage, Lorry & Rorobin, and Temporary Storage. These aren't loosely affiliated trades — they are purpose-built to work in sequence, and the sequencing is HG's core competency. When a retail lot changes tenants, HG's hoarding team closes it off, their printing team wraps it in visuals, their reinstatement team guts it, their lorry team removes the debris, and their temporary storage facility holds the outgoing tenant's items. Each division feeds the next. No need to coordinate three separate contractors. One call to HG covers it. That's the model.

HG's scale is substantial. They run 10 to 40 jobs a day, peaking at up to 60 overnight jobs at maximum capacity — all executed by their own permanent in-house teams with no subcontracting and no outsourcing. They operate 15 lorries, all typically deployed simultaneously. Their internal structure has three operating teams: the Commercial team handles client relationships and job confirmation; the Fabrication team manufactures and prepares materials; and the Installer team executes on-site. They are panel contractors for Malaysia's most prominent retail assets — Pavilion KL, Suria KLCC, IOI Mall, Subang Parade, TRX, and ICC — meaning any tenant doing work at those malls is directed to HG. At those malls, engagement is not optional: HG is the designated contractor support. They hold CIDB Grade G7 certification, JKKP scaffold competency at Levels 1–3, and are the authorised Malaysian distributor of the Titan Hoarding System. In 2022 they received the Outstanding SME recognition at the Golden Bull Awards.

MAIA fits squarely into the commercial infrastructure layer of HG's operation: structuring the journey from enquiry to quote, quote to confirmed job, confirmed job to Work Order, Work Order to invoice, and invoice to payment. The Commercial team's quotation workflow and job management process are the primary out-of-the-box fit. The Job Work Order — tracking a multi-division job through its 7-step lifecycle — requires custom configuration to match HG's specific teams, service structure, and completion reporting format.

---

## Before MAIA: How HG Operates Today

HG's commercial strength is built on relationships, in-house capability, and a founder who personally understands every service in the portfolio well enough to quote and manage any job himself. That depth is an asset. It's also the reason everything routes through one person — and why, at 40 jobs a day across 900 active WhatsApp groups, the operation runs on memory, coordinator instinct, and threads that nobody can fully search.

### The Tech Stack: 11 Tools, Zero Integration

HG is not a technology-averse business. The founder is an IT graduate who built the company website himself, actively learns AI tools, and has already deployed Claude across daily operations. But what HG has built is a collection of point solutions — each doing one job in isolation — with no shared data layer connecting them. The result is a business that is simultaneously more AI-literate than most of its competitors and still running its core job management on WhatsApp.

| Tool | What It's Used For | The Gap |
|---|---|---|
| **WhatsApp** | Everything — enquiries, job groups, team coordination, document sharing, completion reports | 900+ groups with no view above them. No structure, no search, no record |
| **Wati** | Planned WhatsApp Business API channel to replace the founder's personal number as the single inbound point for all three enquiry sources: website form, Google Ads, and panel mall referrals. When live, all incoming messages hit a Wati number instead of Lee's phone. Lee's intent is also to CC all Wati messages into Odoo CRM so every inquiry creates a record automatically. Applied for on 23 April 2026 — not yet live. | Not deployed yet. Until live, all three inbound channels (website, Ads, panel) route directly to Lee's personal WhatsApp — meaning Lee is personally attached to every new enquiry that comes in, 9am to 6pm. The CRM CC intent (Wati → Odoo) has not been configured and Odoo itself is not in active use. |
| **Infotech** | Accounting system — the intended tool for both quotation creation and invoicing; generating invoice numbers, recording payments | In practice, quotations are still drafted in WhatsApp and only entered into Infotech after the fact. No link between the WhatsApp quote and the Infotech invoice |
| **Odoo** | CRM — purchased and set up, then stopped using | Team never adopted it. Client history, job history, and payment behaviour all remain in WhatsApp and memory |
| **Self-built WhatsApp chatbot (in development)** | Lee is personally building a chatbot to route incoming enquiries by service type to the correct team member. Targeted to go live imminently | Currently unfinished. All routing still goes through the founder manually. When live, it handles routing only — not record creation, not quoting |
| **Claude (AI)** | Completion report generation from site photos; measurement extraction attempts from sketch drawings; daily job summaries; Excel preparation; blog and LinkedIn posts | Used personally by the founder and select team members — not embedded in any structured workflow |
| **Google Drive** | Monthly report storage; completion report PDFs | Reports are stored but not indexed or linked to client or job records |
| **Google Sheets** | Monthly reporting; job tracking via linked Claude outputs | Parallel to Infotech, not connected to it. Data lives in sheets that require manual update |
| **Google Ads** | Lead generation alongside the company website | Enquiries from Ads feed into WhatsApp — no CRM capture |
| **Company website (self-built)** | Service listing, SEO, inbound lead gen | The founder built and maintains it himself. Leads from the site are not captured in any system |
| **LiDAR cameras (×2)** | On-site measurement — one Chinese model, one German model (RM30k+ each) | Accuracy not fully trusted vs. manual measurement. Used selectively, not as the primary measurement method |

Eleven tools. None of them talk to each other. Quotations are drafted mentally and sent via WhatsApp, then re-entered into Infotech manually. The invoice is created in Infotech from memory. The completion report is assembled from WhatsApp photos fed into Claude and saved to Google Drive. The CRM (Odoo) sits empty. Wati isn't live yet. The chatbot is still being built. Every handoff between tools is a manual step, and every manual step is a place where information can be lost, delayed, or wrong.

### The Quote That Lives Only in WhatsApp

Every HG quotation starts with the founder — because he's the one who knows the rates, the scope boundaries, and what each job actually involves. When an enquiry arrives via WhatsApp, the website contact form, or Google Ads — all currently linked to Lee's personal number, since Wati is not yet live — it routes to him first. A typical hoarding quote involves measuring the perimeter (panels A, B, C), calculating total length × height to get square metres, converting to square feet, then applying the preset rate — RM1 per square foot, or RM800 flat for smaller jobs, plus line items for door type, counterweight, skirting, and receipt channel. That formula exists in the founder's head and in informal records shared with the team — not in Infotech, not in Odoo, not anywhere searchable.

Once the quote is generated — typically a WhatsApp message or a PDF sent through the group — it leaves the building and lives in a chat. There is no system record. If the client comes back three weeks later to confirm, someone has to find the WhatsApp thread. If the job closes and the Infotech invoice needs to match the original scope, the quote has to be reconstructed from memory or tracked down across a thread that may have 300 other messages in it. At 10–40 jobs per day, the volume of quotes in circulation is enormous — and none of it is searchable, traceable, or auditable.

### 900 Groups, No Single View of What's Actually Running

HG operates one WhatsApp group per client engagement. Every inquiry, confirmation, job update, and completion report goes through the group. At the time of the RG session, HG had over 900 active groups — with approximately 200 of those requiring active follow-up at any given time. A senior coordinator monitors these groups daily, essentially acting as a traffic controller across a sprawl that no one can fully see.

The problem isn't that the groups don't work — they do, and the model has scaled HG to 40 jobs a day. The problem is that there is no view above the groups. When management wants to know how many jobs are active this week, the answer requires checking. When a client calls to ask about job status, the coordinator has to locate the correct group and trace the thread to piece together an answer. When a job is missed — and it does happen — the root cause is that a job existed only in a chat, and the chat got lost in the noise of 200 others requiring attention on the same day.

### The Founder Who Cannot Leave the Office

HG runs on Lee's knowledge. Every service in the portfolio — hoarding, scaffold, reinstatement, fit-out, lorry, storage — Lee has personally done before. He knows every rate, every scope boundary, every site-specific variable that changes a quote. That depth is real and it's earned. It's also the reason a quotation team of 4 to 5 people sits waiting 10 to 15 minutes for his input before any quote can go out.

On a typical day, Lee has 110+ unread messages and several phone calls to return — all of which represent live jobs or live revenue. He is simultaneously the person who qualifies enquiries, the person who signs off on every quote, the person who handles escalations with mall management, and the person who reviews completion reports before they go to clients. All three inbound enquiry channels — the website contact form, Google Ads, and referrals from panel mall contacts — are currently linked to Lee's personal phone number. Every new inquiry hits him directly, 9am to 6pm. He acknowledged this explicitly: "I'm a bit hesitant to provide full access to the team because it's like a gatekeeper — everything must go through me."

Wati is the tool Lee has chosen to break this. The plan: replace his personal number with a Wati WhatsApp Business number across all three channels, so inbound volume is no longer attached to him personally. He also intends to configure Wati to CC every incoming message into Odoo CRM, so that each enquiry creates a record automatically rather than disappearing into a personal chat. He applied for Wati on 23 April 2026. Until it goes live and the three channel numbers are updated, Lee remains the single point of contact for every new enquiry that enters the business.

This is not a people problem — it's a structure problem. The business has grown to 40 jobs a day because Lee built it that way. But the system that got HG to 40 jobs a day is the same system that is preventing them from going beyond it without Lee physically present. He said it plainly: "I still need to sit down in the office. I still need to find things." The goal — playing pickleball at 3pm while the business runs itself — requires the knowledge that currently lives in Lee's head to live somewhere else first. Wati detaches the phone number. MAIA provides the system that knowledge moves into.

### The Missed Job That Cost More Than a Day's Revenue

Three missed jobs in two months. Out of approximately 400–600 total jobs executed in that period, three were incomplete or delayed due to coordination failure. In any other industry, that would be a rounding error. In HG's world, it is not.

HG operates at malls that cannot have their shopfronts open without hoarding. A missed overnight hoarding install doesn't result in a delayed delivery — it results in a mall outlet that cannot close or cannot open, a tenant that misses their trading day, and mall management holding HG accountable. "This is a kindergarten mistake," the founder said. "One missed job. We are dying already." The most recent incident: 30 jobs assigned, 29 completed, 1 missed because a new team member received three simultaneous priority tasks, handled two, and forgot the third. The job was a real outlet. The outlet couldn't close. The reputational consequence was disproportionate to the operational error — because in the mall industry, reliability is everything.

The root cause isn't the team — it's the system. Priority jobs are tracked in WhatsApp groups, communicated verbally or via message, and held together by whoever is on that thread. When that person is juggling two other priorities at the same time, the third one drops.

### The Pricing Formula That Only Exists in One Person's Head

Every service HG offers has a preset pricing formula. Hoarding: perimeter (A+B+C lengths) × height = square metres → converted to square feet × rate. Scaffold: by structure height and week. Reinstatement: by linear metre or scope. Lorry: by trip. Temporary storage: by week, day, or month. LPG gas: by metre. Flushing: by floor trap. The formulas are real, documented on HG's website in summary form, and used consistently for every job.

But they live in the founder's knowledge and informal team records — not in a system. When a new coordinator needs to quote a job, they rely on the founder to verify the scope and rate. When a junior team member quotes independently, the risk of mispricing — under-quoting by one metre on a 25-foot shopfront facade — means a built hoarding that doesn't fit, client fury, and a redo at HG's cost. The formula is solid. The container holding it is fragile.

### The Growth Ceiling Nobody Can See

HG never says no to a client. The founder is explicit about this — the only reason a job doesn't proceed is non-payment. Every inquiry that comes in gets a quote. Every confirmed job gets executed. That policy is a commercial strength and, increasingly, an operational pressure point.

At 40 jobs a day — and up to 60 overnight — HG is running at or near the ceiling of what 15 lorries, three in-house teams, and a coordinator network managing 900 WhatsApp groups can hold together. The business is not in decline; it is growing. But growth at this point means more jobs, more groups, more quote requests, more document chases, more coordinators needed, more margin for the single mistake that closes a mall outlet. The Mindhive team named it directly in the session: "Your problem is fulfillment. Execution part. You are limited by capacity."

The strategic tension is this: HG's panel status at six major malls means demand is not the constraint — it is effectively guaranteed. The constraint is operational infrastructure. Without a system that makes every job visible, every team briefed, and every invoice sent the same day a job closes, headcount and WhatsApp groups become the only levers available. Both have ceilings. The ceiling is closer than the growth trajectory suggests.

### No Invoice, No Job — But Infotech Doesn't Know the Job Exists

HG has a hard rule: no invoice number, no valid job. Before any expenses are released, any materials are purchased, or any team is deployed, the invoice must be raised in Infotech and payment must come in first. "No invoice number. All right. Finance will just see the invoice and the payment. No payment — any expenses related to this job will not be finished." This discipline holds the operation together. But the invoice is created manually in Infotech by someone who has to reconstruct the job scope from whatever they can piece together — a WhatsApp confirmation message, a quote that may have been sent through the group chat, and any scope messages scattered across one or more threads.

Infotech and WhatsApp are completely disconnected. There is no link between the quote (which exists in a chat) and the invoice (which is typed into Infotech from scratch). There is no system record tying the accepted scope to the invoice line items — the invoice writer works from the chat, not a structured record. At 10–40 jobs a day, this reconstruction happens on every single job. The risk is not delayed cash recovery — HG collects payment in advance. The risk is invoices raised from incomplete or misremembered scope: a wrong quantity, a missing line item, a variation that happened on site that the finance person never heard about. In the mall industry, where clients are professional tenants with their own paper trails, a mismatched invoice doesn't just slow things down — it raises a question about whether HG can be trusted to bill what was agreed.

### The Completion Report: WhatsApp → Claude → Google Drive, Manually Every Time

HG's completion report — the final deliverable to the client after every job — is built by the founder or a senior assistant using a four-step manual process: collect photos from the WhatsApp group, feed them into Claude with a prompt, generate a PDF report, then save it to Google Drive. The monthly summary report is built from the individual daily reports, compiled via Claude and stored in Google Sheets linked to Google Drive. The process works — and HG uses it proudly — but it is entirely dependent on manual orchestration at every step.

For a simple single-division job, this takes 20–30 minutes. For a multi-division job where photos come from the Fabrication team, the Installer team, and the on-site supervisor across multiple WhatsApp groups and multiple days, the photo hunt alone can take an hour. There is no structured handoff: a photo taken by a foreign worker on-site arrives in WhatsApp with no caption, no job label, no timestamp context. It may be in the wrong group. When the completion report is being assembled in Claude, the person building it is working from a pile of unlabelled images and trusting their memory of which photos belong to which job. The PDF ends up in Google Drive with no direct link to the client record, the invoice, or the Sales Order — it's a file in a folder, not a record in a system.

---

## After MAIA: What Changes

**A commercial coordinator at HG** receives an enquiry through WhatsApp/Wati and logs it in MAIA. If it is a known panel or repeat client, the team moves straight into quotation. If it is a new inbound contact, it is captured first as a lead/prospect record. Either way, the coordinator can see customer history immediately — prior jobs, prior invoices, and outstanding balance context — before sending any price out.

**Quotation is no longer a relay game through Black.** The coordinator opens the Quotation module, enters lot details and measurements, and selects service items from HG's preset rate menu. MAIA calculates totals and generates the PDF. Once the client confirms, the quotation converts to Sales Order with one click, carrying all line items forward without re-entry.

**Job arrangement becomes a controlled 3-team handoff, not a chat relay.** From each confirmed Sales Order, MAIA creates one Job Work Order used by all three teams as the same source of truth. Commercial completes and confirms the execution brief, Fabrication confirms readiness or flags blockers, and Installer executes with evidence capture before completion. Each stage has an owner, required inputs, and a clear exit transition. Jobs that are not ready do not disappear in WhatsApp noise; they remain visibly stuck at a stage until resolved.

| Team Stage                              | Primary Responsibilities                                                                                                 | Required to Exit Stage                                            | Next Notification                                      |
| --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------- | ------------------------------------------------------ |
| **Commercial** (`Commercial Confirmed`) | Confirm lot/mall/scope, set schedule window and priority, attach core documents, assign Fabrication and Installer owners | Core brief fields complete and handoff confirmed                  | Fabrication Lead                                       |
| **Fabrication** (`Fabrication Ready`)   | Review scope and attachments, prepare required materials, log blockers if details are missing                            | Materials/prep readiness confirmed or blocker explicitly recorded | Installer Supervisor                                   |
| **Installer** (`On Site` → `Completed`) | Confirm crew/driver/asset deployment, execute on site, upload photos/sign-off evidence, log deviations                   | Execution evidence uploaded and completion data submitted         | Coordinator/Finance visibility for closure and billing |

**Execution visibility improves at the point where HG feels pain most.** Fabrication and installer leads can see exactly what is scheduled, what is in progress, and what is blocked. Asset deployment (e.g. scaffold units and lorries) is linked to work orders so operations can see what is out, what is due back, and where conflicts may occur.

**Invoice control matches Black's operating rule.** Invoice is generated from Sales Order data, not reconstructed from chat. The invoice number becomes a formal gate in the flow, and finance tracks payment state directly on the customer record. Management can open customer profiles and immediately see outstanding balances by aging bucket (current/30+/60+/90+) instead of manually chasing across threads.

**Completion reporting is improved but intentionally treated as an open validation item.** Work Orders centralize execution evidence and attachments, but the final completion-report format and mandatory evidence set remain under confirmation with Black before scope lock. This keeps implementation realistic while still moving reporting toward a structured, job-linked record.

**Management** opens MAIA and sees active jobs by stage, upcoming workload, and customer receivables in one place. The WhatsApp groups continue as communication channels, but no longer as the only operational memory of what was promised, what was done, and what is still unpaid.

---

## Feature Deep Dive

### 1. Quotation Management — The Formula in the System

For HG, every quote follows a formula that currently exists only in the founder's knowledge and informal records. MAIA locks that formula into a structured, repeatable quotation builder.

**What it does:** Creates line-itemised quotations linked to a client and job record. Supports HG's specific pricing logic — perimeter measurement inputs that auto-calculate square footage and apply preset rates for each service type (hoarding, scaffold, reinstatement, lorry, temporary storage, and all sub-line items). Each service type has its own rate card: square-footage pricing, per-unit pricing, per-trip pricing, per-week pricing. Quotations capture scope, service types, quantities, and pricing. Every quote is saved with a status — draft, sent, accepted, expired — and is searchable by client, mall, or service type. When a client confirms, the quotation converts to a Sales Order with one action. All line items carry forward. Variation requests are logged against the original. Full quote history per client is permanent and auditable.

**What it won't do:** Won't generate quotes without HG configuring the rate card for each service type during setup. Won't send quotes via WhatsApp natively — the PDF exports for sending through existing channels. Won't auto-detect scope changes from WhatsApp messages. Won't price jobs that require on-site assessment before quoting — those still need a site visit before the quotation builder is used.

**Why it matters:** Every quote HG sends today is a record that exists only in a chat. When the client confirms three weeks later, that quote has to be found. When issuing the invoice, the team often has to reconcile the Infotech quotation against WhatsApp scope updates to ensure billing matches the final agreed work. When a new coordinator needs to quote a scaffold job independently, they need the founder to verify the rate. MAIA makes every quote a permanent, searchable record that belongs to the business — and puts the pricing formula in a system anyone trained on it can use correctly.

### 2. Sales Order (Job Confirmation) — The Job That Has a Home

Once a client confirms, the job needs a record that any coordinator can find, open, and understand — not a group chat that requires knowing who was in it.

**What it does:** Creates a confirmed job record (Sales Order) from the accepted quotation. Captures client name, lot number, mall/building, service scope, divisions involved, timeline, and status. Tracks the job lifecycle with HG's payment-first gate: confirmed → invoice issued → payment received → in progress → completed. Supports multi-division jobs — scaffold, reinstatement, lorry, and temporary storage all linked to one parent record. Links to the Work Order when execution is released and to the invoice/payment record for finance control. Surfaces in the active job board until closed.

**What it won't do:** Won't automatically assign team leads or schedule divisions — coordination decisions stay with the Commercial team. Won't replace WhatsApp for real-time field communication. Won't track individual worker activity or time-on-site.

**Why it matters:** HG's biggest operational risk is the job with no single record. A confirmed job that exists only across a confirmation message, a group chat, and a coordinator's memory is a job that can be missed when that coordinator is juggling two other priorities. The Sales Order is the single source of truth — the record that proves the job exists, confirms what was agreed, and holds the chain from quote to invoice.

### 3. Job Work Order — The Brief That Every Team Works From

The most critical custom module for HG. Adapted from MAIA's Work Order framework, configured for HG's three-team structure (Commercial, Fabrication, Installer) and 7-step engagement flow.

**What it does:** Creates a structured Job Work Order from every confirmed Sales Order. Captures the full job brief: client name, lot number, mall, scope per division, assigned team leads (Commercial, Fabrication, Installer), scheduled dates, permit status, and a built-in intake checklist for the 8 required documents (lot number, mall name, job drawings, start date, work permit copy, mall contact, insurance cover note, payment slip). Each division has its own status within the Work Order — Commercial confirms scope; Fabrication marks materials ready; Installer marks site complete. Photo attachments are uploaded per stage, directly from mobile, against the correct job record. When all stages are marked complete and photos uploaded, the Work Order compiles the completion report PDF — pre-filled with job details, scope performed, and photos. Actual scope vs. original quoted scope is tracked for variation billing.

**What it won't do:** Won't advance stages automatically — a team lead must update their own status. Won't assign teams or schedule jobs automatically — the Commercial team coordinator retains that responsibility. Won't replace the WhatsApp groups for real-time site communication — it captures the record, not the conversation. Won't generate the hoarding measurement sketch — site measurement remains a human task.

**Why it matters:** Right now, a multi-division job at HG has no single document that all three teams work from. The Commercial team knows their bit. The Fabrication team knows their bit. The Installer team shows up to a site they've been briefed on verbally, or via a chat message that may have scrolled past. The Work Order is the full brief — structured, attached to the correct client and lot, updated as work progresses, and converted into the completion report when the job closes. The missed-job incidents happen because the job existed only in a message. The Work Order makes every job visible.

### 4. Invoicing — Bill the Day the Job Closes

HG's rule is correct: no invoice number, no valid job. The gap is that the invoice is currently written manually from memory, after the job, from a quote that may have been sent weeks ago in a chat.

**What it does:** Generates an invoice directly from the completed Sales Order. All line items — service types, quantities, amounts — carry forward from the original quotation. Invoice status tracks through draft → submitted → unpaid → paid. Supports partial payments and payment recording. Links receipts to the invoice when payment is confirmed. Flags invoices that are overdue by age.

**What it won't do:** Won't integrate directly with Infotech (HG's current accounting system) without a configured integration — Phase 1 MAIA invoicing may run in parallel with Infotech, with migration assessed in Phase 2. Won't chase clients for payment automatically — it surfaces the outstanding list, humans make the calls. Won't handle SST filing.

**Why it matters:** Today, HG's invoice is reconstructed after the fact from a quote in a chat and a job brief that may have had scope variations along the way. The result is invoices that go out late, and occasionally invoices that clients query because the amount doesn't match what they expected. MAIA makes invoicing a triggered step: job closes, invoice is ready to send. No reconstruction. No memory required. The gap between delivery and billing shrinks from days to same-day.

### 5. Receipt & Payment Tracking — Know What You're Owed

With 40 jobs a day, the total amount owed to HG at any given moment is significant — and currently invisible.

**What it does:** Records payments against outstanding invoices. Marks invoices as fully or partially paid. Maintains an aged receivables view — which clients owe what, for how long. Surfaces unpaid invoices by age: 30 days, 60 days, 90 days+. Links payment records to the original job for a full audit trail from quote to cash received.

**What it won't do:** Won't send automated payment reminders via WhatsApp or email without additional configuration. Won't process online payments or bank transfers. Won't reconcile against bank statements automatically.

**Why it matters:** HG operates with high fixed operational costs — permanent standby manpower, 15 lorries in daily rotation, materials and equipment on hand. A job that's delivered but unpaid is a job where HG has fronted the full cost without recovering it. Without a payment tracking view, the total size of that exposure is unknown. MAIA makes it visible from day one.

### 6. Customer Records — The Relationship That Belongs to HG

HG's client base — mall operators, retail chains, main contractors across 40+ malls — is a repeat-buyer network built over 11 years. That network has real commercial value. It currently lives across 900 WhatsApp groups and the founder's memory.

**What it does:** Maintains a client record for every company HG works with — contact details, billing information, full job history, quote history, active jobs, outstanding invoices, and payment behaviour. When a new enquiry comes in from an existing client, their full history is immediately visible: which malls they've worked at, what services they've used, their payment track record. Supports client tagging across two dimensions: payment behaviour (blacklisted, slow payer, preferred credit terms) and service profile (scaffold-only, hoarding-only, temporary storage-only, full-suite). Tags surface during quote creation so coordinators know — before a single message is sent — what kind of client they're dealing with, what services they typically engage, and whether payment is likely to be smooth or chased.

**What it won't do:** Won't auto-import historical data from WhatsApp or Infotech without a structured data migration. Won't flag relationship health scores or predict churn risk.

**Why it matters:** When the coordinator who manages 15 client relationships leaves HG, every piece of institutional knowledge about those clients walks out with her. Every past job, every quote, every payment record, every "this client always pays 45 days late" note — gone. MAIA means the business owns the relationship history, not any individual. And it means the first thing a coordinator sees when a new enquiry comes in from a known client is exactly what kind of client they're dealing with — before a single message is sent.

---

## Scope Summary

### Included in RM [XX,XXX — to be confirmed]

- **Quotation Management** — Structured quotation builder with HG-specific rate card per service type; square-footage auto-calculation; quote-to-job conversion; full quote history per client
- **Sales Order / Job Confirmation** — Confirmed job records with client, lot, mall, scope, and multi-division linkage; status tracking from confirmed to completed
- **Job Work Order** — Custom multi-division job brief with per-team status (Commercial, Fabrication, Installer); intake document checklist; mobile photo upload per stage; completion report PDF generation
- **Invoicing** — Invoice generation from completed Sales Orders; line items carried forward from original quote; status tracking from draft to paid
- **Receipt & Payment Tracking** — Payment recording against invoices; aged receivables view by client and by age
- **Customer Records** — Full client history with job, quote, payment records; client tagging for blacklist, slow pay, and preferred contact

### Designed For, Not Included (Phase 2)

- **Mall Unit Measurement Database** — The founder's vision of a database containing every unit measurement for every mall (currently ~8,000 units), queryable by lot number to auto-populate quotation dimensions. Phase 1 Work Order and Quotation architecture is designed to extend into this as a structured data layer.
- **AI Measurement Extraction** — Integration with Claude or similar to extract measurements from hoarding sketch drawings and populate the quotation builder automatically. Dependent on Phase 1 measurement data being structured.
- **Wati-to-MAIA Enquiry Intake** — When Wati goes live, incoming enquiries from website, Google Ads, and panel contacts will hit the Wati number first. Phase 2 connects Wati as the inbound pipe into MAIA: each new message creates a customer record and job intake automatically, replacing the current flow of enquiry → Lee's personal WhatsApp → manual entry. Lee's original intent to CC Wati into Odoo CRM is superseded by this. Deferred to Phase 2 pending Wati go-live and Phase 1 job record adoption.
- **Calendar & Gantt Scheduling View** — Shared calendar of active Work Orders by division and date; conflict visibility across lorry and team allocation; Phase 1 architecture is designed to extend into this
- **Dashboard & Reporting** — Revenue by service division, job volume by mall, team utilisation, outstanding receivables summary; deferred to Phase 2 once core job data is established
- **Infotech Integration** — Sync of invoice and payment records between MAIA and HG's existing Infotech accounting system; deferred to Phase 2, assessed after Phase 1 invoicing workflow is stable

### Requires Clarification

- **Rate card completeness** — The hoarding pricing formula was confirmed in detail (perimeter × height → sq ft × rate). The rates for Scaffold (by height and week), Reinstatement (by metre), Lorry (per trip), Temporary Storage (per week/day/month), LPG (per metre), and Flushing (per floor trap) were described but not fully specified. HG stated they can provide all descriptions, formulas, and rates for setup — a documentation session is needed before Quotation module configuration begins.
- **Infotech invoice workflow** — HG currently generates invoices in Infotech. Phase 1 MAIA invoicing may need to run in parallel initially. Need to confirm: does Phase 1 MAIA replace Infotech invoicing, or sit alongside it?
- **Completion report current format** — HG currently builds completion reports via Claude from site photos. A sample of the current PDF output is needed to ensure the Work Order completion report matches HG's format and client expectations.
- **Division assignment flow** — The Commercial team confirms jobs and coordinates handoff. Need to confirm: does one central coordinator assign all three teams (Commercial, Fabrication, Installer), or does the Fabrication and Installer head self-assign from the Work Order queue?
- **Mall panel document requirements** — Different malls have different permit and document requirements. Does HG maintain a mall-by-mall checklist of what's required, or is this held in the team's memory? This affects how the intake document checklist in the Work Order is configured per mall.

### Not in Scope

- Inventory or stock management (hoarding panel inventory, scaffold equipment tracking — Phase 2 if needed)
- Payroll, HR management, or worker scheduling
- LiDAR or physical measurement device integration
- Accounting, SST filing, or tax reporting
- Subcontractor management (HG is fully in-house)
- Logistics workspace delivery notes, pick lists, or stock entries
- ERP integration with Infotech or Odoo (Phase 1)

---

## The Design Principle

MAIA is built for B2B businesses where the work is executed by people — not automated — and the systems behind those people should surface what's needed, track what's happening, and generate what's required, without adding friction to a team already running at full speed. HG is that business: three in-house teams, 15 lorries, 40 jobs a day, and a founder who personally closes deals, reviews quotes, and approves completion reports because the knowledge required to do it well hasn't yet been transferred to a system. HG is also running 11 separate tools — WhatsApp, Wati (applied for, not yet live), Infotech, Odoo (unused), a self-built WhatsApp chatbot (in development), Claude, Google Drive, Google Sheets, Google Ads, a self-built website, and two LiDAR cameras — none of which share a data layer. Each tool does its job in isolation. Quotes live in WhatsApp. Invoices live in Infotech. Reports live in Google Drive. The CRM (Odoo) sits empty. The measurement cameras are trusted selectively. MAIA's job is to be the connective tissue: one system where the quote, the confirmed job, the Work Order, the invoice, and the completion report all live in the same record — so that the information that currently scatters across 10 tools can follow a single job from first message to final payment.

HG Services was founded with one hoarding install in 2015 and built to 40 jobs a day across 40+ malls through expertise, in-house investment, and a founder who genuinely understands every service in the portfolio. The Golden Bull Award, the Titan distributorship, the KLCC and TRX panel status, the 900 active client groups — these are real achievements built on a combination of technical depth and operational reliability. But 900 groups is also a number that makes the fragility of the current system legible. The operation is running well because the right people are paying the right amount of attention to the right threads at the right time. That's not a system. That's a very talented team doing very well without one. The ceiling is not far off.

What this build delivers is the commercial infrastructure layer HG needs to operate at their current scale — and grow beyond it — without it depending on the founder being available, a senior coordinator having memorised 200 active jobs, or a new team member having the same institutional knowledge as someone who's been in the business for six years. Structured quotes that belong to the business. Job records that any coordinator can open and understand. Work Orders that every team lead works from independently. Invoices that go out the day a job closes. Receivables that are visible without making a single call. The foundation for the measurement database, the AI intake routing, and the scheduling view that come next.

_MAIA structures the workflow. Humans remain the decision-makers._

---

## ⚠️ Gaps Still Open

The narrative has been updated from the 23 April RG transcript. The following items remain open before this document is ready to share externally:

1. **Investment figure — RM [XX,XXX] placeholder**
   Why this matters: Cited in the opening and Scope Summary. Document looks incomplete without it.
   What I need: Confirm proposed engagement fee before sharing.

2. **Rate card documentation session**
   Why this matters: Quotation module configuration requires complete rates for all service types. Hoarding formula confirmed. All others described but not fully specified.
   What I need: A dedicated session where HG provides all service type descriptions, calculation formulas, and preset rates. The founder confirmed he can prepare this.

3. **Completion report sample**
   Why this matters: Work Order completion report PDF must match HG's current output format. Without a sample, the Work Order is designed blind.
   What I need: A sample PDF from any completed job — even a photo of a printed one.

4. **Infotech parallel-run decision**
   Why this matters: If HG needs MAIA and Infotech to run in parallel during transition, that affects Phase 1 invoicing design and training plan.
   What I need: Ask — "Do you want to stop using Infotech for invoicing when MAIA goes live, or run both systems side by side initially?"

5. **Mall-specific permit and document requirements**
   Why this matters: The intake checklist in the Work Order should ideally surface the correct required documents based on which mall the job is at. If HG has a mall-by-mall reference, we can configure this. If not, a generic checklist is used and this becomes Phase 2.
   What I need: Ask — "Do you have a list of which documents each mall requires, or is that knowledge held by the team?"

6. **Wati go-live timeline and CRM linkage intent**
   Why this matters: Wati was applied for on 23 April 2026 and is not yet live. Lee's plan has two parts: (1) replace his personal number with the Wati number across all three enquiry channels — website, Google Ads, and panel contacts — so inbound volume detaches from him personally; (2) configure Wati to CC every incoming message into Odoo CRM automatically, so every enquiry creates a record. Neither is live yet. If Wati goes live during or after Phase 1, the MAIA enquiry intake design for Phase 2 changes significantly — Wati becomes the inbound pipe that feeds into MAIA rather than a standalone tool. If the Odoo CRM CC is still the intent, we also need to clarify whether MAIA replaces Odoo for that record-capture purpose.
   What I need: (a) "When do you expect Wati to go live, and when will you update the three channel numbers?" (b) "Your original plan was to CC Wati messages into Odoo CRM. Now that MAIA is in scope, would you want those messages to flow into MAIA's customer records instead?" (c) "Once Wati is live, do you still want to run your self-built chatbot alongside it, or does Wati replace the chatbot's routing function?"

7. **Self-built chatbot current state**
   Why this matters: Lee described the chatbot as near-ready ("I think by end of this year, this month will be like this already"). Once live, it routes inquiries by service type to the correct team member — but does not create records, generate quotes, or link to any system. If MAIA Phase 1 goes live around the same time, we need to confirm how the chatbot handoff into MAIA is intended to work.
   What I need: Ask — "When your chatbot routes an inquiry to a team member, what happens next? Does the team member currently log that somewhere, or does it stay in WhatsApp?"
