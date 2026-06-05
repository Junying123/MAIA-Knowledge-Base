---
owner: Gareth
status: draft
last_reviewed: 2026-05-07
lark_url:
---

# HG Group — E2E Flow & Pain Points (Tech Lead Brief)

**Purpose:** Pre-SOW briefing for tech lead scoping. Covers the full end-to-end business flow from enquiry to invoice close, with detailed pain points at every step grounded in the April 23, 2026 RG session transcripts and all module proposals.

**Source documents:**
- [[Granola/Transcripts/2026-04-23/HG Services Detailed Requirements Gathering-transcript]]
- [[Granola/Transcripts/2026-04-23/HG Services Requirement Gathering fireflies transcript - source 2]]
- [[HG Group — E2E Business Flow (from Excalidraw)]]
- [[HG Group - CRM & Enquiry Intake Proposal]]
- [[HG Group - Quotation Module Proposal]]
- [[HG Group - Job Work Order Module Proposal]]
- [[HG Group - Invoice Module Proposal]]
- [[HG Group - Completion Report Module Proposal (Open Questions)]]
- [[Customer Narrative - HG Group]]

---

## Who Is HG Group

HG Services (M) Sdn Bhd is a **mall contractor support company** — not a contractor, but the operational backbone behind contractors. They describe themselves as "the nurse behind the doctor."

They are **panel-listed** by major Malaysian malls (Pavilion, KLCC, IOI, TRX, Subang Parade, ICC, and more). When a tenant or contractor needs to do work inside a panelled mall, they are **mandatorily routed to HG** for specific services. HG doesn't chase sales — the mall system sends work to them.

**Core services:** Hoarding, Scaffold, Reinstatement, Printing & Signage, Lorry & Movers, Temporary Storage, Fit-Out Support, LPG/Sprinkler Dismantling (via 3rd party panel).

**Scale:** ~30–40 jobs per day, up to 60 overnight. 15 lorries typically all deployed. 900+ WhatsApp groups. ~1,000+ messages/day.

**Client mix:** ~80% contractors, ~10–15% tenants, ~5–10% building management.

**Current stack:** WhatsApp (personal line), Infotech (accounting), Claude (reports), Google Drive/Sheets, Odoo (CRM — purchased but abandoned), self-built WhatsApp chatbot (in development, routing only).

---

## Flow Overview

```
ENQUIRY INTAKE
     ↓
CRM / QUALIFICATION
     ↓
QUOTATION (site measurement → rate formula → PDF)
     ↓
JOB CONFIRMATION (client accepts)
     ↓
INVOICE RAISED ("No pay = No job")
     ↓
PAYMENT GATE (blocked until paid)
     ↓
JOB WORK ORDER — 3-TEAM HANDOFF
  Commercial → Fabrication → Installer
     ↓
COMPLETION (report + photo evidence)
     ↓
INVOICE & FINANCE CLOSE (aged receivables view)
```

---

## Step 1 — Enquiry Intake

### What happens today

Three inbound channels all converge on the **founder (Black)** personally:

| Channel                  | Volume   | Reality today                                                                                      |
| ------------------------ | -------- | -------------------------------------------------------------------------------------------------- |
| **Personal WhatsApp**    | Highest  | 900+ groups, ~1,000+ messages/day funnel to his personal line                                      |
| **Website / Google Ads** | Minority | Leads land on site → redirected to WhatsApp; no CRM capture                                        |
| **Panel mall referral**  | Majority | Mall management directs tenants to HG directly; by the time they call, the engagement is mandatory |

A **coordinator** (his sister-in-law, a "traffic controller") manages group follow-ups on his behalf — acknowledging, tagging specialists, chasing responses. She is almost never in the office and operates remotely. ~200 of the 900+ groups require active follow-up at any given time.

**Planned (not yet live):** Wati (WhatsApp Business API) to replace his personal number as the inbound line. A self-built chatbot to route by service type to the right team member — this is a **router only**, it does not create any records.

### Pain points

| # | Pain | Detail from transcript |
|---|---|---|
| P1 | **Founder single point of failure** | All inbound — regardless of channel — arrives at Lee's personal phone 9am–6pm. He describes having "110+ unread messages" at any given moment with phone calls stacked on top. Every lead, every price query, every new job requires his attention to move forward. |
| P2 | **No aggregate visibility** | There is no way to ask "how many active enquiries do we have today?" without manually scrolling through threads. No pipeline view, no count, no status. |
| P3 | **Leads disappear into chat** | Website leads and Google Ads inbound are redirected to WhatsApp. Once in chat, they become one more thread in 900+ groups. If the coordinator misses a follow-up, the enquiry is lost with no trace. |
| P4 | **Coordinator follow-up is memory-dependent** | The coordinator's job is to tag people, acknowledge, and chase. But "whether she remembers or not" is the operational reality — follow-ups live in her head, not in a system queue. |
| P5 | **Group creation overhead with no payoff** | Black creates 3–4 new client WhatsApp groups per day. Each requires a proper introduction or it "spoils the whole effort." This is operational overhead with no structured record created downstream. |
| P6 | **Wati and chatbot are partial fixes** | Wati will unify inbound but still funnels to humans. The chatbot routes but creates nothing. Neither closes the gap on CRM capture or lead tracking. |

---

## Step 2 — CRM / Qualification

### What happens today

When an enquiry comes in, the team checks if it's a known client or a new contact. There is no structured CRM. Customer history lives across:
- WhatsApp group chat history
- Infotech (accounting) fragments
- Coordinator memory

Odoo CRM was purchased and partially set up but **abandoned** — the team stopped using it and never migrated back.

Customer risk tags (slow payer, blacklisted, BL categories) exist as **shorthand in WhatsApp** — not structured fields. The coordinator knows who's flagged, but this is tribal knowledge.

Service profiles (who uses scaffold only, who uses full-menu, etc.) are also tribal — no master data tags.

### Pain points

| # | Pain | Detail from transcript |
|---|---|---|
| P7 | **No structured customer record** | Prior job history, payment behaviour, service preferences, and risk flags are spread across chat and memory. There is no single profile view for a returning client. |
| P8 | **Payment risk invisible at quote time** | A slow payer or blacklisted client can receive a new quote without the coordinator being automatically warned. The flag lives in someone's head or in a chat note. |
| P9 | **No lead-to-customer conversion process** | For new inbound (Ads/website), there's no tracked path from first contact to confirmed customer. The "lead" either becomes a group chat or it disappears. |
| P10 | **CRM history not surfaced at point of enquiry** | When a repeat client calls — "which mall, what service, last time we did X" — the coordinator must scroll through historical groups to reconstruct context. Nothing surfaces automatically. |
| P11 | **Abandoned Odoo** | The investment in Odoo CRM was wasted. The team didn't adopt it. Any new CRM must be embedded in the same flow the team already works in, not a separate system they need to context-switch to. |

### Design note for tech lead

HG's acquisition model is **panel-first, not prospecting-first**. The majority of their work (panel referrals + repeat clients) does not need a traditional sales funnel — it needs **client history surfacing at point of enquiry**. Only a minority of genuinely cold inbound (Google Ads, website) benefits from a full Lead stage. Consider a two-path model: known clients skip straight to Quotation; new contacts go through Lead → Qualify → Quotation.

---

## Step 3 — Quotation

### What happens today

```
Enquiry confirmed → needs a quote
     ↓
Measurement crew goes to site
     ↓
Produces hand sketches (plan + elevation views)
     ↓
Relays measurements via a separate internal WhatsApp group to Black
     ↓
Black pulls from that thread → types instructions to quoting group:
"Please prepare quotation, PVC hoarding, Panel A/B/C [dimensions], height [X]"
     ↓
Quoting pod (4–5 people) on standby produces PDF — 10–15 min turnaround
     ↓
PDF sent back to Black → he shares into client WhatsApp group
     ↓
Client confirms in chat
     ↓
Finance manually reconstructs invoice details in Infotech
```

**Rate logic (preset formulas):**

| Service | Formula | Rate |
|---|---|---|
| Hoarding | (Panel A + B + C) × Height = sqm → × 10.764 = sqft | RM1.00/sqft, min RM800 |
| Hoarding dismantling | Same sqft calc | RM1.00/sqft or RM800 min |
| Scaffold | Height band × weeks (e.g. below 5m per week) | Rate per tier — TBC |
| Door (swing/sliding) | Per unit | Rate TBC |
| Counterweight | Per metre along hoarding side | Rate TBC |
| Skirting / Visual wrap | Per sqft | Rate TBC |
| Lorry | Per trip / distance (outstation = different rate) | Rate TBC |
| Temp Storage | Per day / week / month | Rate TBC |
| Flushing | Per floor trap | Rate TBC |
| LPG dismantling | Per metre of piping | ~RM1,500/m — confirm |

"Chinese menu" model — clients order à la carte. Some services (sprinkler, M&E) are subcontracted to 3rd-party panel contractors and shown on the quote as informational line items only.

### Pain points

| # | Pain | Detail from transcript |
|---|---|---|
| P12 | **Black is the only rate authority** | All pricing knowledge lives in his head. His exact words: *"it's already prefixed, I just need the parameters"* — but no one else can produce a correct quote without him in the loop to relay and validate. |
| P13 | **10–15 min idle wait, every single quote** | The quoting pod of 4–5 people sits on standby for every quote until Black types his relay message. *"Wait for black right? But hoarding one is almost like waiting — everything, standby for you basically."* This is dead time, multiple times a day. |
| P14 | **No durable quote record** | The quote exists as a PDF in a WhatsApp thread. There is no record in any system tied to a job. Weeks later, if there is a dispute or a variation, the team has to scroll back through chat to reconstruct what was quoted. |
| P15 | **Invoice reconstruction from memory** | When the client confirms, someone manually rebuilds the invoice in Infotech from the chat thread. Quantity mismatches and omissions are a real risk, especially on multi-service jobs. |
| P16 | **Measurement relay is a bottleneck and a risk** | Measurements from site sketches are relayed verbally through WhatsApp to Black, then relayed again to the quoting pod. Each relay is a point of potential error. Additionally, mall CAD drawings diverge up to 1m from actual as-built — wrong measurements on hoarding mean the whole structure is wrong and must be rebuilt. |
| P17 | **AI measurement extraction failed in practice** | The team tried feeding hoarding sketches into Claude to auto-derive measurements. It was unreliable when plan vs elevation were ambiguous. They defaulted back to manual. |
| P18 | **Measurement database exists on spreadsheets, not in a system** | Black has collected per-unit measurements for multiple malls (TRX in progress, others accumulating). This data is in Google Sheets — not connected to the quotation flow. A quote for a known unit still requires manual lookup and relay. |

---

## Step 4 — Job Confirmation

### What happens today

Client accepts the quote inside the WhatsApp group. Verbal confirmation, or a message like "ok proceed." This is the only record that a job has been confirmed.

The "Sales Order" equivalent is informal — it exists as messages and the coordinator's memory. There is no single document that all teams share as the source of truth for what was agreed.

### Pain points

| # | Pain | Detail from transcript |
|---|---|---|
| P19 | **Confirmed job exists only as chat messages** | There is no structured Sales Order or job record created at the point of acceptance. The confirmation is a message. If the coordinator misses it or misreads it, the job doesn't enter execution planning — it just disappears. |
| P20 | **No audit trail for scope agreement** | If a client later disputes the scope or price, the evidence is a WhatsApp message — not a signed, numbered document with line items. This is a commercial risk especially with premium mall tenants. |
| P21 | **Fabrication and installer teams have no signal** | When a job is confirmed, there is no automatic downstream notification to the fabrication or installer team. The commercial team must manually inform them — via another WhatsApp message, into another group. |

---

## Step 5 — Invoice Raised ("No Pay = No Job")

### What happens today

After confirmation, finance raises an invoice in Infotech. The rule is absolute: **no invoice number = not a valid job**. No expenses related to a job are released until payment is received.

But the invoice is **manually reconstructed** from the chat thread — not generated from a confirmed Sales Order. Scope details must be remembered or re-read from the quote PDF.

### Pain points

| # | Pain | Detail from transcript |
|---|---|---|
| P22 | **Invoice reconstructed from chat, not from a Sales Order** | Finance types the invoice into Infotech based on memory and the chat thread. If there was a scope change discussed in passing, or a verbal add-on, it may or may not make it into the invoice. |
| P23 | **Rule is strong, system linkage is weak** | Black's "no invoice number, no job" rule is real and enforced. But the link between the quoted scope and the invoice amount is manual. The rule has no system-level enforcement — it works because the team follows it, not because the system prevents it from being broken. |
| P24 | **Payment gating depends on follow-up chasing** | Finance confirms payment before releasing spend, but execution teams still rely on signals, follow-up pressure, and coordinator intermediation — not a system status they can see. *"I already informed my finance, my finance is still checking."* |
| P25 | **No visibility on which confirmed jobs are still unpaid** | There is no way to quickly see "jobs confirmed, invoice issued, payment pending" as a list. Finance works through Infotech manually. Questions like "how much does this client owe?" require spreadsheet detective work. |

---

## Step 6 — Payment Gate

### What happens today

Job expenses are blocked until payment is received. When payment comes in, finance clears the gate and execution can proceed. When payment doesn't come, the team chases manually — phone calls, messages, follow-ups.

HG has had clients run away without paying. They treat CIA (Cash in Advance) as their default for most clients.

### Pain points

| # | Pain | Detail from transcript |
|---|---|---|
| P26 | **No system-level gate between payment and job release** | The gate exists as a rule and a habit. It does not exist as a system status that blocks work order creation or expense approvals until payment is confirmed. |
| P27 | **Chasing payment is manual and untracked** | When payment doesn't arrive, the coordinator chases. There's no chase log, no escalation timer, no overdue flag. It works by human memory. |
| P28 | **No client-level outstanding balance view** | "Which clients owe us money right now? How overdue?" — not answerable quickly today. Requires manual aggregation across Infotech entries. Management has no aged receivables view. |

---

## Step 7 — Job Work Order (3-Team Handoff)

### What happens today

Once payment is received, the job enters execution. There are three internal teams in sequence:

| Team | Role |
|---|---|
| **Commercial** | Confirm scope, schedule, permits, assign teams |
| **Fabrication** | Prepare materials (PVC panels, signage, hoarding sets), confirm readiness |
| **Installer** | Deploy crew + lorry, execute on-site (often overnight), upload photos, mark complete |

Eight service divisions run through this structure: Hoarding, Printing, Scaffold, Reinstatement, Fit-Out, Signage, Lorry, Storage.

Today's handoff is entirely via WhatsApp:
- Commercial sends a message in a group with the main guy + assistant
- Fabrication team picks instructions from that message
- Installer team is informed separately
- There is no system record of who was assigned what, when, or whether it was done

HG maintains a "main schedule" document with mall access rules, lead times, and permit requirements. This does not reliably propagate into execution packs — it lives in the head of the coordinator and occasionally on paper.

### Pain points

| # | Pain | Detail from transcript |
|---|---|---|
| P29 | **No live job view — everything requires checking** | *"How many KLCC jobs today? Maybe need to check. I hate to check."* There is no dashboard, no queue, no status board. Knowing what's active at any moment requires scrolling through chat. |
| P30 | **Missed overnight job = catastrophic consequence** | This is the most critical risk. HG's biggest jobs are overnight installations where a mall outlet must open or close the next morning. One missed job strands tenants, mall management, and contractors — and puts HG's panel status at immediate risk. *"One miss, we are dying already. The mall is not allowed to close."* |
| P31 | **Three missed jobs in two months** | The root cause is documented in the transcript: a junior coordinator gets three simultaneous "priority" tasks. Does the first. Forgets the second and third. This is not carelessness — it is a structural problem with no system queue, no handoff confirmation, and no visibility. |
| P32 | **WhatsApp relay is the only handoff mechanism** | When commercial passes a job to fabrication, the handoff is a message. If that message is not read, not acted on, or not forwarded to the right person, the job simply doesn't progress. *"Commercial team put it in pocket. Never put it into fabrication, never into lorry arrangement."* |
| P33 | **Priority collision with no resolution system** | Multiple urgent jobs arrive simultaneously. There is no priority queue, no triage system, no way to see which job is most at risk. The coordinator must hold everything in their head. When that fails, jobs drop. |
| P34 | **Lorry and crew assignment not tracked in any system** | *"Lorry 15, Driver A, bring along 4 men — I need to check, then come back."* Crew and vehicle deployment is managed by calling the coordinator, who checks manually and comes back with an answer. There is no real-time asset view. All 15 lorries can be out at the same time with no system record of where they are or when they return. |
| P35 | **Mall access rules not embedded in job execution** | Each mall has specific permit requirements, lead times, and access windows (often overnight). These rules exist in a master schedule but are not attached to individual jobs. A new coordinator or a rushed one can miss a permit submission or an access constraint. |
| P36 | **Fabrication readiness not confirmed before installer deploys** | There is no enforced guard that checks "are materials ready?" before installer crews are mobilised. If fabrication is delayed, the installer shows up with nothing to work with — but there is no system signal to stop the deployment or warn anyone. |
| P37 | **Scaffold rental duration not tracked** | Scaffold is rented by the week. HG deploys scaffold, it sits on site, and the rental clock runs. Without a system tracking deployment start date, return date, and expected return, rental overruns go unnoticed. |
| P38 | **Dismantling job not linked to install job** | When a hoarding is installed for a tenant opening, there is always a corresponding dismantling job weeks or months later. Today these are treated as completely separate engagements with no linkage. The cycle (open, renovate, dismantle, hand over, rent out again) is HG's business model — but the system doesn't track it. |
| P39 | **Completion evidence is scattered** | After a job, installers upload photos to WhatsApp — sometimes to the right group, sometimes to the wrong one, sometimes with captions, often without. When the coordinator assembles the completion report, they may spend 20–60 minutes hunting photos across groups. |

---

## Step 8 — Completion

### What happens today

```
Installer crew takes photos on-site (including foreign workers)
     ↓
Photos uploaded to WhatsApp groups (not always the right one)
     ↓
Coordinator / assistant collects and reorganises photos
     ↓
Black or assistant drafts the report (often with Claude support)
     ↓
PDF generated → stored in Google Drive
     ↓
Sent to client and/or mall management via WhatsApp
```

~30 completion reports per day are processed, rolled into monthly summaries stored in Google Drive. Previously used Odoo for completion reporting — migrated off to Claude-based workflows.

Report content: who executed, which lorry, timing narrative, photo evidence. Mall accountability expectations require transparency — the report is not just a courtesy, it is an operational record.

### Pain points

| # | Pain | Detail from transcript |
|---|---|---|
| P40 | **Photo collection is fragmented and manual** | Photos go into WhatsApp. There is no structured evidence capture. Photos arrive without captions, without timestamps linked to job scope, and often in the wrong group. The coordinator must manually hunt and curate. |
| P41 | **Report generation time is unpredictable** | A simple job takes 20–30 minutes. A multi-division job (e.g. hoarding + scaffold + lorry for the same client) can take up to 1 hour to gather all evidence and assemble the report. This happens ~30 times per day. |
| P42 | **Report quality is person-dependent** | The quality of the report depends on who prepares it that day. There is no template enforced at the evidence capture stage. |
| P43 | **No linkage between report and job record** | The completed PDF lives in Google Drive. It is not indexed to a customer record, a job record, or an invoice. Retrieval later requires searching Google Drive by filename convention or date. |
| P44 | **Monthly rollup is manual aggregation** | ~30 daily reports are dumped and summarised monthly by assistants using a fixed template in Google Sheets. This is entirely manual, repetitive work. |

---

## Step 9 — Invoice & Finance Close

### What happens today

After job completion, the invoice chain closes:

```
Invoice from Sales Order → Payment Recorded → Aged Receivables View
```

But in practice this is:
- Invoice was raised before the job (gate), so it should already exist
- Payment was hopefully recorded
- Aged receivables requires manual aggregation across Infotech entries
- There is no single management view

### Pain points

| # | Pain | Detail from transcript |
|---|---|---|
| P45 | **No end-to-end trace from quote to payment** | Quote lived in WhatsApp. Invoice was manually reconstructed. Payment is in Infotech. There is no single chain: Quotation → SO → Invoice → Receipt. Each step is a separate manual entry with no linkage. |
| P46 | **Aged receivables not visible to management** | Black and management cannot see "how much do our clients owe us right now, and how old is it?" without manual Infotech queries and spreadsheet work. There is no live outstanding balance view. |
| P47 | **Slow payers not flagged at next engagement** | When a slow-paying client calls for a new job, there is no automatic flag. The coordinator may or may not know their payment history. The risk flag lives in WhatsApp notes, not in the system. |
| P48 | **No partial payment rule defined** | For high-value jobs, Black acknowledges some clients push back on full CIA upfront. There is no defined threshold or partial release rule — it is handled ad hoc, creating inconsistency. |

---

## Current Stack Summary

| Tool | Used for | Problem |
|---|---|---|
| **WhatsApp (personal)** | Everything — enquiry, quoting, coordination, evidence, comms | Single point of failure, no records, no searchability at scale |
| **Wati** | Planned inbound unification | Not live yet; won't create records on its own |
| **Infotech** | Accounting, invoicing | Weak upstream linkage to quotes; invoice reconstructed manually |
| **Odoo** | CRM (purchased) | Abandoned — not adopted |
| **Self-built chatbot** | Routing only | In development; does not create records |
| **Claude** | Completion reports, summarisation | Manual orchestration per report; personal tool, not a workflow |
| **Google Drive / Sheets** | Report storage, measurement DBs, monthly reporting | Not linked to job records; manual sync |
| **LiDAR cameras (×2)** | Supplementary measurement | Trust is situational; team still prefers human verification |

---

## Modules Required (MAIA Scope)

| Module | Priority | Primary pain points addressed |
|---|---|---|
| **CRM / Enquiry Intake** | High | P1–P11 |
| **Quotation (with rate calculator)** | Critical | P12–P18 |
| **Sales Order** | High | P19–P21 |
| **Invoice** | Critical | P22–P25 |
| **Payment Gate** | Critical | P26–P28 |
| **Job Work Order (3-team state machine)** | Critical | P29–P39 |
| **Completion Report** | Medium | P40–P44 |
| **Aged Receivables / Finance View** | High | P45–P48 |

### Black's stated build priority sequence (from transcript)

1. **SKU + pricing formulas** — get the quotation calculator working; rates in the system, not in his head
2. **Inventory / purchasing digitisation** — everything bought for a job tracked and recorded
3. **Reporting automation** — completion reports, monthly summaries
4. **Richer AI assistance** — smarter quoting, chatbot with measurement database lookup

---

## Key Constraints for Scoping

1. **CIA is the default payment term** for almost all clients — the system must enforce "no payment, no job release" as a hard gate, not a soft reminder
2. **Overnight jobs are non-negotiable** — any notification or alert system must treat a scheduled job passing its window without a Completed status as a **Critical** event, not a routine flag
3. **WhatsApp remains the client communication channel** — MAIA manages internal operations; client-facing delivery (quote PDFs, completion report PDFs) must be shareable to WhatsApp groups easily
4. **Measurement database is a Phase 2 unlock** — Phase 1 must work without it; Phase 2 makes quotation near-instant for known mall units
5. **Odoo failure is a warning** — any solution that requires team members to context-switch to a separate system will not be adopted; MAIA must be the place the team already works

---

## Open Items to Confirm with Black (Pre-SOW)

| Item | Why it matters |
|---|---|
| Full rate card for all services | Required before Quotation module can be configured |
| Whether panel/repeat clients need a Lead stage or go straight to Quotation | Determines CRM scope and complexity |
| Partial payment threshold for high-value jobs | Determines Invoice gate logic |
| Mandatory evidence requirements per service type for completion reports | Determines JWO completion guard conditions |
| Mall-specific permit requirements and lead times | Determines JWO scheduling and compliance fields |
| Role naming (Commercial Lead, Fabrication Lead, Installer Supervisor) | Determines permission matrix and workflow transitions |
| 2–3 sample completion report PDFs | Required to design the report template |
| MAIA as Infotech replacement vs parallel run | Determines transition risk and data migration scope |

---

## See Also

- [[HG Group — E2E Business Flow (from Excalidraw)]]
- [[HG Group - CRM & Enquiry Intake Proposal]]
- [[HG Group - Quotation Module Proposal]]
- [[HG Group - Job Work Order Module Proposal]]
- [[HG Group - Invoice Module Proposal]]
- [[HG Group - Completion Report Module Proposal (Open Questions)]]
- [[Customer Narrative - HG Group]]
- [[HG Group - Customer Profile]]
