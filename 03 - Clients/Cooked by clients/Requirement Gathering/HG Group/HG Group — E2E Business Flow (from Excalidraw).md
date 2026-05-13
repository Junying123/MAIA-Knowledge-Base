---
owner: Gareth
status: draft
last_reviewed: 2026-05-02
lark_url:
---
	``
# HG Group — End-to-End Business Flow (ASCII + Step Detail)

This page expands **`[[Excalidraw/HG Group E2E Business Flow.excalidraw]]`** into a top-down ASCII workflow and step-by-step detail (pain points, current tooling, and KB references). Source artefacts: Excalidraw diagram; RG transcripts **`[[Granola/Transcripts/2026-04-23/HG Services Detailed Requirements Gathering-transcript]]`** and **`[[Granola/Transcripts/2026-04-23/HG Services Requirement Gathering fireflies transcript - source 2]]`**; plus **`[[Customer Narrative - HG Group]]`**, **`[[HG Group - CRM & Enquiry Intake Proposal]]`**, **`[[HG Group - Quotation Module Proposal]]`**, **`[[HG Group - Job Work Order Module Proposal]]`**, **`[[HG Group - Invoice Module Proposal]]`**.

---

## ASCII overview (mirrors diagram)

```
HG GROUP — END-TO-END BUSINESS FLOW
═══════════════════════════════════════════════════════════════════════════════════

┌─────────────────────────────────────────────────────────────────────────────────┐
│ ENQUIRY INTAKE                                                                  │
│                                                                                 │
│    ┌──────────────┐    ┌──────────────────────┐    ┌─────────────────────┐     │
│    │  WhatsApp    │    │ Website / Google Ads │    │ Panel Mall Referral │     │
│    └──────┬───────┘    └──────────┬───────────┘    └──────────┬──────────┘     │
│           └────────────────────────┼───────────────────────────┘               │
│                                    ▼                                             │
│                     ┌──────────────────────────────┐                             │
│                     │ Lee (Founder) / Wati        │                             │
│                     └──────────────────────────────┘                             │
└─────────────────────────────────────────────────────────────────────────────────┘
                                      │
                                      ▼
┌─────────────────────────────────────────────────────────────────────────────────┐
│ CRM / QUALIFICATION                                                             │
│                     ┌──────────────────────────────┐                             │
│                     │ Customer Record              │                             │
│                     │ (New / Existing)             │                             │
│                     └──────────────────────────────┘                             │
└─────────────────────────────────────────────────────────────────────────────────┘
                                      │
                                      ▼
┌─────────────────────────────────────────────────────────────────────────────────┐
│ QUOTATION                                                                       │
│                                                                                 │
│   ┌──────────────────────────────┐         ┌─────────────────────────────────┐ │
│   │ Site Visit / Measurement     │ ─ ─ ─ ─►│ Rate logic (diagram sidebar):   │ │
│   └──────────────┬───────────────┘         │ Perimeter × H → sqft; preset rate │ │
│                  │                         │ per service                      │ │
│                  ▼                         └─────────────────────────────────┘ │
│   ┌──────────────────────────────┐                                               │
│   │ Quote PDF sent via WhatsApp  │                                               │
│   └──────────────────────────────┘                                               │
└─────────────────────────────────────────────────────────────────────────────────┘
                                      │
                                      ▼
┌─────────────────────────────────────────────────────────────────────────────────┐
│ JOB CONFIRMATION                                                                │
│                                                                                 │
│   ┌──────────────────────────────┐                                               │
│   │ Client Accepts → Sales Order   │                                               │
│   └──────────────┬───────────────┘                                               │
│                  ▼                                                               │
│   ┌──────────────────────────────┐                                               │
│   │ Invoice Raised               │                                               │
│   │ (No pay = No job)            │                                               │
│   └──────────────┬───────────────┘                                               │
│                  ▼                                                               │
│               ╔════════════╗                                                     │
│               ║ Payment    ║                                                     │
│               ║ Received?  ║                                                     │
│               ╚═════╤══════╝                                                     │
│           ┌─────────┴─────────┐                                                 │
│         NO│                     │YES ─ Job Released                               │
│           ▼                     ▼                                                 │
│   ┌──────────────┐              │                                                 │
│   │ Chase Payment│──────────────┘ (loop implied until paid)                     │
│   └──────────────┘                                                               │
└─────────────────────────────────────────────────────────────────────────────────┘
                                      │
                                      ▼ (Job Released)
┌─────────────────────────────────────────────────────────────────────────────────┐
│ JOB WORK ORDER — 3-TEAM HANDOFF                                                 │
│ Divisions (diagram banner): Hoarding │ Printing │ Scaffold │ Reinstatement │    │
│            Fit-Out │ Signage │ Lorry │ Storage                                   │
│                                                                                 │
│  ┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐             │
│  │ COMMERCIAL      │ ──► │ FABRICATION     │ ──► │ INSTALLER       │             │
│  │                 │     │                 │     │                 │             │
│  │ • Confirm lot/  │     │ • Review brief  │     │ • Deploy crew / │             │
│  │   scope         │     │ • Prepare       │     │   lorry         │             │
│  │ • Set schedule  │     │   materials     │     │ • Execute       │             │
│  │ • Attach docs   │     │ • Flag blockers │     │   on-site       │             │
│  │ • Assign teams  │     │ • Confirm       │     │ • Upload photos │             │
│  │                 │     │   readiness     │     │ • Mark complete │             │
│  └─────────────────┘     └─────────────────┘     └─────────────────┘             │
└─────────────────────────────────────────────────────────────────────────────────┘
                                      │
                                      ▼
┌─────────────────────────────────────────────────────────────────────────────────┐
│ COMPLETION                                                                      │
│   ┌──────────────────────────────┐                                               │
│   │ Completion Report PDF        │                                               │
│   └──────────────┬───────────────┘                                               │
│                  ▼                                                               │
│   ┌──────────────────────────────┐                                               │
│   │ Sent to Client / Mall        │                                               │
│   │ Management                   │                                               │
│   └──────────────────────────────┘                                               │
└─────────────────────────────────────────────────────────────────────────────────┘
                                      │
                                      ▼
┌─────────────────────────────────────────────────────────────────────────────────┐
│ INVOICE & PAYMENT (diagram closing lane — finance continuity / ageing view)    │
│                                                                                 │
│   ┌──────────────────────────────┐                                               │
│   │ Invoice from Sales Order     │                                               │
│   └──────────────┬───────────────┘                                               │
│                  ▼                                                               │
│   ┌──────────────────────────────┐                                               │
│   │ Payment Recorded             │                                               │
│   └──────────────┬───────────────┘                                               │
│                  ▼                                                               │
│   ┌──────────────────────────────┐                                               │
│   │ Aged Receivables View       │                                               │
│   └──────────────────────────────┘                                               │
└─────────────────────────────────────────────────────────────────────────────────┘
```

**Diagram fidelity note:** The Excalidraw positions **`Invoice Raised (No pay = No job)`** and **`Payment Received?`** *before* the Job Work Order — consistent with HG’s stated rule that invoice/payment gate execution spend. The bottom **`Invoice & Payment`** lane echoes **`Invoice from Sales Order → Payment Recorded → Aged Receivables`** as an end-state finance lens on the same commercial chain (not a second unrelated invoicing moment).

---

## 1. Enquiry intake

### 1.0 Volume and operating context (RG 2026-04-23)

From the live discussion (Granola + Fireflies): enquiry volume **spikes heavily** (speaker cites busy days with **large inbound volumes** and operational throughput on the order of **~30–40 jobs/day**, with **~10/day** on quieter patterns and **up to ~60 overnight** at peak). **15 lorries** are typically **all deployed**; one team may run **3–4 jobs** in a cycle. HG is exploring / standing up a **call centre** posture partly because **sales/enquiry volume can exceed comfortable manual handling**.

### 1.1 Channels (parallel entry points)

| Sub-step | What happens | Current tooling | Pain / friction |
|----------|----------------|-----------------|-----------------|
| **WhatsApp** | Direct enquiries from malls, tenants, repeat clients | Founder’s personal WhatsApp as primary nerve centre; **900+** active groups (**~200** need active follow-up); **~1000+ messages/day** cited in session | No aggregate view; threads replace searchable records; sheer message volume |
| **Website / Google Ads** | Inbound leads from site SEO and paid campaigns | Company website (founder-built); Ads leads funnel to WhatsApp | No CRM capture; leads disappear into chat |
| **Panel Mall Referral** | Tenant/work routed via mall panel-contractor rules | Relationship + WhatsApp | Same fragmentation as other channels |

**Consolidation point (diagram):** All paths converge on **`Lee (Founder) / Wati`**.

- **Wati (planned):** WhatsApp Business API number intended to replace Lee’s personal number for unified inbound handling and future CRM CC (`Customer Narrative`). In the **23 Apr 2026** session, founder noted **recent signup / in-progress setup** (timing per transcript).
- **Until Wati is live:** Website, Ads, and panel referrals still hit Lee’s phone **9am–6pm**, perpetuating single-person bottleneck (`Customer Narrative`).
- **Calls:** Enquiries also arrive by **phone**; norm is still to **mirror commitments into WhatsApp** after verbal discussion (see §1.3).

### 1.2 Group model and coordinator (“traffic controller”)

RG transcript detail **not drawn on Excalidraw** but central to intake:

| Element | What HG does today | Pain / friction |
|--------|---------------------|-----------------|
| **One client → one WhatsApp group** | Founder prefers **new client group** once quote path starts; group gets **standard company/services introduction** | Weak groups (“no one active”) **waste the setup effort** — founder treats group quality as part of sales hygiene |
| **~12 team members in groups** | Multi-discipline visibility per engagement | More noise and routing complexity |
| **Dedicated coordinator** | “Traffic controller” role: **thank-you / acknowledgement**, chase internal follow-ups (**“please follow up”**), monitors **900+** threads | Follow-ups depend on **human memory** and coordinator bandwidth; founder heavily reliant on this role |
| **Tag-to-specialist** | Once service type known (e.g. scaffold), coordinator **@mentions** the right closer in-thread so they **take over the deal** | Depends on people noticing tags in noisy groups |
| **New groups per day** | Founder cites creating **~3–4 new groups/day** on typical days | Compounds search-and-follow-up load |

### 1.3 Communication rules (commercial discipline)

RG transcript: HG **discourages relying on verbal-only or private side channels** for commitments — **after phone calls, updates must land in the WhatsApp group** so there is a trace. This is **practice/policy**, not system-enforced today.

### 1.4 Founder bottleneck signals

From RG: founder cites **110+ unread messages**, constant **callbacks**, and intent to graduate from **“must sit in office to find things”** to delegated ops (**Wati**, chatbot routing, system records). **Gatekeeper mindset:** hesitation to give **full team access** because pricing/coordination authority historically concentrated with founder.

---

## 2. CRM / qualification

### 2.1 Customer record (new vs existing)

| Sub-step | What happens | Current tooling | Pain / friction |
|----------|----------------|-----------------|-----------------|
| **New contact** | Capture identity, company, channel, service interest | Mostly chat + memory; Odoo CRM purchased but **not adopted** | No institutional history when coordinator leaves |
| **Existing customer** | Recognise repeat mall / tenant / contractor | Spread across groups and Infotech fragments | Prior quotes, payment behaviour, and job history not visible in one profile |

**RG / product note:** Many first enquiries are **not yet registered customers**; MAIA path discussed is **Lead → Prospect → Customer** before Sales Order (`HG Group - CRM & Enquiry Intake Proposal`, Ivan standup context cited there).

### 2.2 Client mix (RG transcript)

Approximate split described in session: **majority contractors (~80%)**, **~10–15% tenants**, **~5–10% building management** (percentages as spoken; useful for segmentation defaults).

### 2.3 Informal customer tagging today

RG: payment-behaviour and risk labels (**slow payer**, **blacklist**, **BL-style categories**, etc.) live as **short-form notes in WhatsApp** rather than structured CRM fields — hard to surface consistently at quote time across coordinators.

### 2.4 Service profile segmentation (RG)

Customers may be **scaffold-only**, **storage-only**, **hoarding-only**, or **full-menu / multi-service** — affects quoting effort and coordination depth; today this pattern recognition is **tribal knowledge + chat**, not master-data tags.

---

## 3. Quotation

### 3.1 Site visit / measurement

| Sub-step | What happens | Current tooling | Pain / friction |
|----------|----------------|-----------------|-----------------|
| **On-site measurement** | Perimeter panels (e.g. A/B/C), height, special conditions | WhatsApp coordination; **measurement crew / separate internal channel** produces **hand sketches** pulled into quoting thread; LiDAR cameras (×2) used selectively — accuracy vs manual still debated (`Customer Narrative`) | Measurements often relayed **through Lee** to quoting team → **10–15 min idle wait** (`HG Group - Quotation Module Proposal`) |
| **Physical survey when risk high** | Complex dismantling / height / chandelier / “photos lie on scale” jobs | **Multi-specialist site visits** (e.g. scaffold + hoarding + sales + **draftsman**) — RG cites **multi-hour** client meetings for tricky scopes | Expertise concentrated in **senior closers**; **succession / delegation** called out as open risk |

**RG — drawing vs reality risk:** Mall CAD / landlord drawings can diverge **~1 m** from as-built; quoting from drawings alone can **mis-size hoarding** → costly rework and tenant disputes — reinforces **human verification** despite gadgets.

**RG — AI/sketch limits:** Team tested feeding **hoarding sketches** into **Claude** to auto-derive measurements; unreliable when **plan vs elevation** conflict or annotations ambiguous — founder trains crew on **colour / line semantics**; defaults to **manual** takeoff when unclear.

**Data initiative (RG):** Build-out of **per-unit measurement databases per mall** (order-of-magnitude **hundreds of units per mall** cited; **TRX** named) so known units quote faster — ties to **chatbot lookup** ambition.

### 3.2 Rate formula (diagram annotation)

- **Stated logic:** **Perimeter × Height → area → sqft** (diagram wording); **preset rate per service**.
- **Hoarding examples (RG + narrative):** **RM1/sqft OR minimum lump (~RM800)** style framing as spoken; plus **receipt channel**, **swing vs sliding door**, **counterweight** (often **per metre along hoarding side**), **visual/wrapping per metre**, **skirting per sqft**, **dismantling per sqft vs package**.
- **Menu / composite SKUs (RG):** “Chinese menu” packaging — **prelim**, **insurance**, **scaffold + green tag**, **reinstatement**, **lorry/movers**, **third-party panel scopes** (e.g. **sprinkler** — sometimes other **M&E / PS beam specialists** while HG stays the broad **project-style** generalist).
- **Other presets (RG):** **Flushing by floor-trap count**; **LPG piping per metre**; **scaffold rental by height band + weeks** (example band: **below 5 m**); **lorry by trips / distance (outstation)**; **rorobin rental**; **temporary storage by day/week/month**.
- **Harder SKUs:** **Reinstatement** described as hard unless **tightly segmented** into repeatable modules.
- **Critical gap:** Pricing logic lives in **founder knowledge**, **website summaries**, and team habit — not uniformly systemised in Infotech/Odoo (`Customer Narrative`).

### 3.3 Internal quoting choreography (RG — not on Excalidraw)

| Sub-step | What happens | Pain / friction |
|----------|----------------|-----------------|
| **Founder signals quoting group** | Instructions like **“please prepare quotation — PVC hoarding”** + numbered hints (door/counterweight/skirting...) | Founder remains implicit rate authority |
| **Quotation pod responds** | **4–5 people** can produce PDF (**~10–15 min** turnaround cited) | **Standby-for-Black** idle time |
| **Client-facing group** | After outward quote, founder spins **dedicated client group** with **standard intro** | Ops overhead |

**Routing:** Self-built **WhatsApp chatbot** = **router only** (service type → correct human); **does not** create CRM/quote records.

### 3.4 Quote PDF via WhatsApp

| Sub-step | What happens | Current tooling | Pain / friction |
|----------|----------------|-----------------|-----------------|
| **Produce quote** | Coordinator builds from relayed parameters | WhatsApp instructions; PDF into client group | **No durable quote record** tied to job — recovery weeks later requires scrolling threads (`Customer Narrative`) |
| **Send** | Client receives PDF in WhatsApp group | WhatsApp | Weak audit trail vs mall tenants’ own paperwork |

### 3.5 Infotech direction (RG — desired tightening)

Founder wants **quotations typed into Infotech** with lighter **AI-assisted keying**, potential **Odoo/Wati CC linkage**, so **confirm → invoice** chains without pure WhatsApp reconstruction. **Today** remains **WhatsApp-first quoting** + inconsistent structured capture — treat Infotech here as **directional**, not fully realised.

---

## 4. Job confirmation

### 4.1 Client accepts → Sales Order

| Sub-step | What happens | Current tooling | Pain / friction |
|----------|----------------|-----------------|-----------------|
| **Confirmation** | Client agrees scope/price in thread | WhatsApp message | Confirmed job can exist only as **messages + memory** — contributes to **missed-job** risk (`Customer Narrative`, `HG Group - Job Work Order Module Proposal`) |
| **Sales Order analogue today** | Informal “job exists” state | Not a single document all teams share | Fabrication/Installer briefs picked from chat (`HG Group - Job Work Order Module Proposal`) |

### 4.2 Invoice raised — “No pay = No job”

| Sub-step | What happens | Current tooling | Pain / friction |
|----------|----------------|-----------------|-----------------|
| **Invoice creation** | Finance raises invoice before releasing spend | **Infotech** (accounting) | Quote was in WhatsApp → **invoice reconstructed manually** — quantity / variation mismatch risk (`Customer Narrative`, `HG Group - Invoice Module Proposal`) |
| **Rule** | Without invoice number / payment, job not valid for expenses | Policy + manual enforcement | Strong rule, **weak system link** to quoted scope (`HG Group - Invoice Module Proposal`) |

### 4.3 Payment gate

| Branch | What happens | Current tooling | Pain / friction |
|--------|----------------|-----------------|-----------------|
| **No** | **Chase Payment** (diagram) | Manual follow-up | Execution teams depend on **signals and chasing**, not system-wide visibility (`HG Group - Invoice Module Proposal`) |
| **Yes** | **Job Released** → enters Job Work Order stage | Finance clearance | Correct discipline; needs linkage from SO/invoice to WO (`Customer Narrative`, proposals) |

**RG — finance psychology:** Even with strict gating, ops describes **tension** between teams needing to spend vs finance verification — founder acknowledges **eventual payment on many jobs** but wants discipline so work is **not voluntary/free**. **Runaway / closure risk** on bad debts mentioned as **real but exceptional**.

---

## 5. Job Work Order — three-team handoff

**Operating context:** HG runs **Commercial**, **Fabrication**, and **Installer** teams; **eight service divisions** appear on the diagram (Hoarding, Printing, Scaffold, Reinstatement, Fit-Out, Signage, Lorry, Storage).

### 5.1 Commercial

| Sub-step (diagram) | Intent | Current reality | Pain / friction |
|--------------------|--------|-----------------|-----------------|
| Confirm lot/scope | Lock what / where / which mall unit | Messages + coordinator knowledge | No live board — “how many KLCC jobs today?” needs manual checking (`JWO Proposal`) |
| Set schedule | Overnight windows, mall constraints | Chat + verbal | Priority collisions (multiple “priority” tasks) → **dropped jobs** (`Customer Narrative`) |
| Attach documents | Permits, mall contacts, insurance | Files scattered in WhatsApp | Hard to ensure complete kit before execution |
| Assign teams | Crew, lorry, leads | Ad hoc — “lorry 15, driver A, four men” requires separate lookup (`JWO Proposal`) |

**RG — documented schedules vs execution:** HG maintains a **“main schedule”** with mall rules (e.g. **final approvals / lead times / access**) but those commitments **do not reliably propagate** into fabrication/installer execution packs — contributor to **pocket / dropped handoffs**.

**RG — role breadth:** Coordinators are **not quotation-only** — must align **mall**, **lorry booking**, **material readiness**, multi-party timing — **multi-step “workstream per job”** mostly held in heads/chat.

**RG — client sophistication:** Flagship tenants add **approvals, colour/RGB proofing, tighter brand QA** — same commercial rate may carry **higher delivery stress** (“Gucci stress” anecdote in transcript).

### 5.2 Fabrication

| Sub-step (diagram) | Intent | Current reality | Pain / friction |
|--------------------|--------|-----------------|-----------------|
| Review brief | Understand scope + attachments | Partial visibility | Commercial → Fabrication handoff sometimes **never formalised** (“put in pocket”) (`JWO Proposal`) |
| Prepare materials | Ready signage, hoarding components, etc. | Workshop execution | Blockers not visible upstream |
| Flag blockers | Missing dimensions / permits | Informal | Risk of silent delays |
| Confirm readiness | Green-light installers | Chat-based | No enforced guard before deploy |

### 5.3 Installer

| Sub-step (diagram) | Intent | Current reality | Pain / friction |
|--------------------|--------|-----------------|-----------------|
| Deploy crew/lorry | Mobilise people + vehicles | **15 lorries**, heavy concurrent usage (`Customer Narrative`) | Asset deployment / return **not systematically tracked** (`JWO Proposal`) |
| Execute on-site | Overnight / tenant-critical work | Field WhatsApp | Mall stakes: one miss → outlet cannot open/close (`Customer Narrative`) |
| Upload photos | Evidence | WhatsApp images | Photos often **uncaptioned / wrong group** → completion report hunt (`Customer Narrative`) |
| Mark complete | Signal closure | Informal | Evidence scattered across threads |

**Missed-job pattern (RG + KB):** Founder cites **three miss incidents across ~two months** against a baseline **~10–20 jobs/day** in that period — often framed as “acceptable human error” statistically but **unacceptable commercially** because **one overnight hoarding miss can strand a mall tenant** (`Customer Narrative`, RG). Root story told in RG: **three simultaneous “priority” tasks**, junior completes **first**, **drops remaining** — aligns with **priority overload without a system queue**.

---

## 6. Completion

### 6.1 Completion Report PDF

| Sub-step | What happens | Current tooling | Pain / friction |
|----------|----------------|-----------------|-----------------|
| **Assemble report** | Narrative + photos + scope summary | **Claude** + manual prompting (`Customer Narrative`); RG notes **earlier Odoo-era** completion reporting **migrated off Odoo** to Claude workflows | **20–30 min** simple job; **up to ~1 hr** hunting photos across groups for multi-division jobs |
| **Generate PDF** | Client-facing deliverable | Claude → PDF | Manual orchestration each time |

**RG — transparency fields:** Reports aim to show **who executed**, **which lorry/asset**, **timing narrative** — aligns with mall accountability expectations.

**Monthly pipeline (RG):** ~**30 daily** completion artefacts rolled into **monthly** summaries → **Google Drive** archive path described in session.

### 6.2 Sent to Client / Mall Management

| Sub-step | What happens | Current tooling | Pain / friction |
|----------|----------------|-----------------|-----------------|
| **Distribution** | Formal handover to tenant + mall | WhatsApp / email + **Google Drive** storage | File not indexed to customer/job record (`Customer Narrative`) |
| **Monthly rollups** | Aggregated reporting | **Google Sheets** + Claude outputs | Parallel to Infotech; manual sync |

---

## 7. Invoice & payment (closing lane on diagram)

| Sub-step (diagram) | What it represents | Current tooling | Pain / friction |
|--------------------|--------------------|-----------------|-----------------|
| **Invoice from Sales Order** | Structured billing lineage | Infotech (intended); SO analogue weak today | Re-entry / reconstruction instead of SO-driven invoice (`Invoice Proposal`) |
| **Payment Recorded** | Cash vs scope alignment | Infotech + manual checks | Exceptions hard to see cross-job |
| **Aged Receivables View** | Outstanding buckets | Not visible holistically in chat-centric ops | Management cannot see exposure without spreadsheet detective work (`Customer Narrative`) |

**HG nuance:** Narrative stresses **CIA / pay-before-execute** for many jobs — the diagram’s **aged receivables** still matters for slow payers, partial settlements, and portfolio-level visibility.

---

## Current stack snapshot (cross-cutting)

Consolidated from **`Customer Narrative - HG Group`** and **RG transcripts** — tools appear at multiple steps:

| Tool | Role in E2E flow |
|------|------------------|
| **WhatsApp** | Enquiry, quoting, coordination, evidence, client comms |
| **Wati** | Planned unified inbound (replacing founder personal line) |
| **Infotech** | Accounting; target system for **quote → SO → invoice** tightening (RG) — weak/discontinuous upstream link to WhatsApp quotes today |
| **Odoo** | CRM largely abandoned; **historical completion-report path** mentioned before Claude pivot (RG) |
| **Self-built chatbot** | In development — **routing only** (service-type → correct human) |
| **Claude / AI** | Completion reports, summarisation, blogging/claims prep; **company-subsidised adoption** across office called out in RG |
| **Google Drive / Sheets** | Report storage, **mall-unit measurement databases**, monthly reporting bridges |
| **Website / Google Ads** | Lead gen → WhatsApp |
| **LiDAR hardware** | Supplementary measurement (**China vs German vendor** experiment — trust still situational) |

### HG’s stated build sequence (RG — implementation prioritisation hint)

Speaker orders priorities roughly as: **(1) SKU + formulas / ordering**, **(2) inventory/purchasing digitisation**, **(3) reporting automation**, **(4) richer AI assistance** — framed as an incremental **crawl → walk → run** sequence vs boiling the ocean.

---

## Coverage note — what the transcripts added vs first draft

The items below were **called out explicitly in the 2026-04-23 transcripts** and were **thin or absent** in the first version of this page: **message/day scale (~1000+)**, **call-centre intention**, **group hygiene rules**, **traffic-controller coordinator**, **post-call must-write-to-group discipline**, **chatbot-as-router-only**, **internal quoting pod + separate measurement sketch loop**, **three missed-job incidents / multi-priority failure mode**, **main schedule vs installation disconnect**, **mall-unit measurement DB initiative**, **sketch-to-AI measurement limits**, **drawing-vs-as-built mismatch risk**, **multi-specialist site visits + succession worry**, **third-party/M&E menu dependencies**, **expanded SKU pricing examples**, **client mix split**, **informal blacklist/slow-payer tags in chat**, **finance/expense psychology**, **Infotech+AI/Odoo linking aspiration**, **Odoo→Claude migration for completion reporting**, **team-wide Claude subsidy**, and **explicit phased automation roadmap**.

---

## See also

- [[Granola/Transcripts/2026-04-23/HG Services Detailed Requirements Gathering-transcript]]
- [[Granola/Transcripts/2026-04-23/HG Services Requirement Gathering fireflies transcript - source 2]]
- [[Customer Narrative - HG Group]]
- [[HG Group - CRM & Enquiry Intake Proposal]]
- [[HG Group - Quotation Module Proposal]]
- [[HG Group - Job Work Order Module Proposal]]
- [[HG Group - Invoice Module Proposal]]
- [[HG Group - Completion Report Module Proposal (Open Questions)]]
