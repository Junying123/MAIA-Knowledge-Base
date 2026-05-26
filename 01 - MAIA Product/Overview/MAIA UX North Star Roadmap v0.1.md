Content is user-generated and unverified.
6
MAIA UX North Star Roadmap v0.1
Purpose: Map the gap between MAIA's current capabilities and the intended UX vision (the "AI Makes Work Easier" infographic), then design progressive milestones to close it.

Date: 14 May 2026

1. The Infographic — Decomposed
The infographic describes six UX capabilities that build on each other in a dependency chain. They are NOT six independent features — they form a maturity ladder where each step requires the previous ones to be functional.

1.1 Panel-by-Panel Breakdown
Panel	UX Promise	What It Actually Requires	User Experience
1. AI sends notifications	MAIA proactively pings the right person at the right time — no manual chasing	Event detection engine, role-based routing, channel delivery (WhatsApp), user state awareness	User receives timely, relevant pings without having to check anything manually
2. Daily digests summarize everything	One clear daily view of what's pending, urgent, and resolved — replaces hunting through emails/chats	Notification aggregation, Eisenhower prioritisation, digest composition engine, per-user state tracking	User opens one message and knows exactly what their day looks like
3. AI helps do the manual work	AI performs repetitive data tasks — extraction, matching, drafting, preparation	Document extraction (CPO/attachments), auto-matching (orders↔payments), draft generation, data preparation	User reviews and approves work AI already did, instead of doing it from scratch
4. Employee handles decisions	Human stays in the loop for judgment calls — approve, reject, or escalate	Approval workflows, decision routing, structured decision context (amount, supplier, flags), action buttons	User gets a pre-packaged decision with all context — taps Approve/Reject/Ask
5. Only exceptions need attention	Routine work is silent. Only classified exceptions surface — with severity	Exception taxonomy, severity classification, auto-resolution of routine cases, exception-only dashboard	User sees 3-4 items needing attention, not 50 routine updates
6. Call it a day	End-of-day closure — all routine done, only 2 exceptions left for tomorrow	Wind-down digest, task completion tracking, carry-forward logic, "all clear" signal	User leaves work confident nothing critical is hanging
1.2 The Dependency Chain
Panel 1 (Notifications) ──► Panel 2 (Digests) ──► Panel 5 (Exceptions only)
                                                          │
Panel 3 (AI does work)  ──► Panel 4 (Decisions) ─────────┘
                                                          │
                                                          ▼
                                                   Panel 6 (Closure)
Panels 1→2→5 are the information layer — getting the right signal to the right person at the right time, progressively compressed.

Panels 3→4 are the action layer — AI doing work and routing decisions to humans.

Panel 5 is where both layers converge: when AI does the routine work (3) and routes decisions (4), AND the notification layer is smart enough to filter (1→2), then the user only sees exceptions.

Panel 6 is the outcome of the whole system working together — the user can trust the system enough to leave.

2. Current State Assessment — Corrected (May 2026)
Assessed per panel against what's specced, what's built, and what's in testing. Corrections based on actual engineering status as of May 2026.

2.1 Panel 1: AI Sends Notifications
Dimension	Status	Evidence
Spec quality	✅ Strong	Notification Serving Protocol v3, notification catalogue (~130 notifications catalogued)
Built	🟡 Implemented, testing	Notification catalogue and serving protocol are implemented. Currently in completion testing — not yet 100% verified.
Production-grade	🟡 Pending testing	The implementation exists but hasn't been validated end-to-end. The gap is testing completion, not implementation.
User experience	🟡 Imminent	Once testing completes, users will experience event-driven notifications via the serving protocol. The UX promise of "AI pings the right person at the right time" is within reach — the question is whether the serving protocol's adaptive behaviour (activity states, phase-aware delivery, tiers) is implemented, or only the catalogue + basic routing.
Honest gap: The notification system is the furthest along of anything in the infographic stack. The remaining risk is in the quality of the serving behaviour — does it actually deliver the right notification at the right time with the right tier, or does it fire-and-forget? Testing will answer this. The second risk: even with notifications working, they're only as useful as the events they're triggered by, which depends on downstream document flow completeness.

2.2 Panel 2: Daily Digests
Dimension	Status	Evidence
Spec quality	✅ Strong	Pre-work and wind-down digest windows defined in the serving protocol. Grouping, Eisenhower sorting, suppression logic all specced.
Built	🟡 Depends on 2.1	If the serving protocol implementation includes the buffer lifecycle and digest composition (Summary tier), digests are a configuration question, not a build question. If the implementation is catalogue + basic routing only, the digest engine is unbuilt.
Production-grade	🟡 Depends on 2.1	—
User experience	🔴 Not yet delivered	No user has received a morning digest yet.
Honest gap: Digests are the first visible proof that the notification system works as designed. If the serving protocol is correctly implemented including the Summary tier and phase-aware flush triggers, digests are close. If only the individual notification routing is done, the digest composition and scheduling layer is separate work.

2.3 Panel 3: AI Helps Do the Manual Work
Dimension	Status	Evidence
Spec quality	🟡 Mixed	CPO extraction is well-specced. Attachment Intelligence has Phase 1/2 specs (with pending corrections). Customer preference RAG is scoped at 4-5 mandays. cRFQ is at v0.4.
Built	🟡 Partial with known defect	CPO extraction pipeline exists but has a critical false-positive problem: the matching algorithm always selects a candidate even when no good match exists. It lacks a confidence threshold cutoff. User feedback confirms that prefilling wrong candidates is worse than leaving fields empty.
Production-grade	🔴 No	CPO matching is actively harming trust. An empty field the user fills manually is neutral. A wrong prefill the user has to identify and correct is negative value.
User experience	🟡 Damaged by false positives	Users can upload a PO and get a draft SO, but the false-positive matching erodes confidence in the output. The fix is identified (add confidence threshold, leave low-confidence fields empty) but not shipped.
Honest gap: The CPO problem is well-diagnosed: the matching algorithm needs a quality cutoff threshold so it returns "no match found" rather than a bad match. This is not a hard engineering problem — it's a prioritisation problem. The fix is probably 2-3 days of work. But until it ships, every CPO upload teaches the user "MAIA gets things wrong." That's anti-adoption.

The infographic shows five AI work tasks. Only extraction is partially working, and it has a trust problem. The others (draft messages, payment matching, spreadsheet updates, journal entries) don't exist.

2.4 Panel 4: Employee Handles Decisions
Dimension	Status	Evidence
Spec quality	🟡 Evolving	tabWorkflow is the current direction. Temporal references in older context are outdated — MAIA does not use Temporal. Workflow design is being approached in two stages: 0.5 (design + seed + surface APIs for chatbot context) and 1.0 (enforce workflow_state in ERPNext).
Built — ToDo	🟡 Partial	ToDo system exists with 3 supported task types. A fuller catalogue is designed but blocked on tabWorkflow — because the triggers for ToDo creation should come from workflow exceptions and decision points, not from ad-hoc hooks.
Built — Workflow	🔴 Not yet (0.5 planned)	The 0.5 step is on the roadmap: design doctype-specific workflows in Frappe, seed them, surface APIs for chatbot to read workflow state and guide users through states — but NOT enforce them yet.
Production-grade	🔴 No	—
User experience	🔴 Gap	No structured decision routing. No Approve/Reject buttons. No decision cards.
Honest gap — and the key architectural tension: The 0.5→1.0 split on workflows is the right call, but it creates a chicken-and-egg problem for the infographic vision. Here's why:

The 0.5 step (design + seed + read-only APIs) gives the chatbot awareness of what state a document is in, so it can guide users. That's valuable — it means the chatbot can say "this SO is pending approval" instead of being blind.

But it does NOT give users the ability to act on those states through MAIA. The Approve/Reject/Ask experience from Panel 4 requires the 1.0 step — where workflow_state is enforced, which introduces schema changes across affected doctypes, which requires new API surfaces for every workflow action, which affects both frontend and chatbot. That's the "large blast radius" you identified.

The implication: Panel 4 of the infographic (employee handles decisions) requires Workflow 1.0, which is the most disruptive change in the entire roadmap. The milestone plan needs to account for this — either by accepting that Panel 4 comes later, or by finding a way to deliver a subset of the decision experience without full workflow enforcement.

2.5 Panel 5: Only Exceptions Need Attention
Dimension	Status	Evidence
Spec quality	🟡 Partially locked	Exception types tied to ToDo taxonomy. 3 types supported currently, more catalogued but intentionally waiting for tabWorkflow to provide proper triggers.
Built	🟡 Foundation only	3 ToDo types in production. Exception severity classification not implemented. Auto-resolution rules not implemented.
Production-grade	🔴 No	—
User experience	🔴 Gap	Users see everything, not just exceptions.
Honest gap: The deliberate decision to wait for tabWorkflow before expanding the ToDo catalogue is architecturally correct — you want ToDo creation triggers to come from workflow state transitions, not from scattered hooks. But it means Panel 5 is explicitly blocked on Panel 4 (workflow), which is itself split into 0.5 and 1.0. The exception-only experience is the furthest milestone out.

2.6 Panel 6: Call It a Day
Dimension	Status	Evidence
Spec quality	🟡 Implied	Wind-down digest defined in the serving protocol.
Built	🔴 No	—
Production-grade	🔴 No	—
User experience	🔴 Gap	No end-of-day closure mechanism.
Honest gap: Panel 6 is the outcome of the entire system working. It's not a feature to build — it's a state to achieve.

2.7 Summary Scorecard (Corrected)
Panel	Spec	Built	Testing/Quality	UX Delivered
1. Notifications	✅	✅ Implemented	🟡 Testing	🟡 Imminent
2. Digests	✅	🟡 Depends on protocol depth	🟡 Depends	🔴 Not yet
3. AI does work	🟡	🟡 CPO exists, trust problem	🔴 False positives	🟡 Negative in CPO
4. Decisions	🟡	🟡 ToDo 3/N, Workflow 0.5 planned	🔴 Not started	🔴 Gap
5. Exceptions only	🟡	🟡 3 ToDo types	🔴 Blocked on workflow	🔴 Gap
6. Closure	🟡	🔴	🔴	🔴
Bottom line — corrected: The picture is better than the v0.1 assessment suggested, but the nature of the gap has shifted. The notification system is implemented and in testing — that's a real foundation. But the action layer (Panels 3-4) has two compounding problems: CPO has a trust defect that's actively damaging adoption, and the workflow system faces a deliberate but painful 0.5/1.0 split where the UX-visible payoff (decisions via chatbot) only arrives at 1.0.

3. The Hard Truth Before Setting Milestones
Before defining milestones, four structural issues need to be named:

3.1 The notification system is your strongest asset — protect it. It's implemented and in testing. Completing testing and getting it into production is the single highest-leverage thing you can do right now. Don't let it sit in testing while you spec the next thing. Ship it.

3.2 The CPO false-positive problem is small to fix but large in impact. Adding a confidence threshold to the matching algorithm is probably 2-3 days of work. But every day it ships without the fix, users learn that MAIA prefills wrong data. Trust damage compounds. This should be treated as a hotfix, not a backlog item.

3.3 The workflow 0.5/1.0 split is architecturally correct but creates a long UX drought. Users won't experience Panel 4 (decisions) until Workflow 1.0, which requires schema changes across multiple doctypes and new API surfaces. The 0.5 step (design + seed + read-only APIs) is necessary groundwork but invisible to users. The risk: months of engineering work on workflow infrastructure before any user-facing payoff.

3.4 The ToDo→Workflow dependency is the right call but slows everything downstream. Waiting for tabWorkflow to provide proper ToDo triggers instead of ad-hoc hooks is the disciplined choice. It means the exception system (Panel 5) is explicitly sequenced behind workflow (Panel 4). There's no shortcut that doesn't create tech debt.

4. Progressive Milestones (Corrected)
Four milestones, recalibrated against where you actually are. The notification system being implemented and in testing shifts the starting line forward significantly. The workflow 0.5/1.0 split becomes the critical-path constraint.

Milestone 0: SHIP WHAT'S DONE — "Stop testing, start delivering"
Target panels: 1 (production), 3 (trust fix) UX test: A user at Thermac or SCC receives real notifications in production. CPO uploads no longer prefill wrong data.

This isn't a "milestone" in the traditional sense — it's the prerequisite for everything else. You have implemented code sitting in testing. Ship it.

What gets done:

Feature	Description	Status	Effort Estimate
Complete notification testing	Finish 100% verification of the notification catalogue and serving protocol. Fix any defects found.	In progress	Depends on test coverage remaining
Deploy notifications to production	Push the tested notification system to a live client (Thermac or SCC)	Blocked on testing	1-2 days ops
CPO confidence threshold	Add a quality cutoff to the matching algorithm. When no candidate exceeds threshold, leave the field empty with a "no match found" indicator. User fills manually.	Fix identified, not shipped	2-3 days BE
CPO threshold tuning	Test the threshold against the existing corpus of POs. Find the sweet spot where false positives drop but true matches aren't lost.	After threshold implementation	1-2 days BE/QA
What's explicitly NOT in Milestone 0:

New features of any kind
New specs
Workflow design work
Exit criteria:

 Notification system passes 100% of the test catalogue
 At least one client has live notifications in production for ≥1 week
 CPO matching returns "no match" for low-confidence candidates instead of wrong matches
 CPO users report reduced time spent correcting prefilled fields
Timeline: This should be measured in weeks, not months. If it's taking longer, the problem is capacity allocation, not complexity.

Milestone 1: SIGNAL + DIGEST — "MAIA gives me a clear picture of my day"
Target panels: 1 (full basic), 2 (full) UX test: A user starts their day by reading one MAIA digest that tells them exactly what needs attention. They don't open ERPNext first — MAIA tells them what to look at.

Why Signal and Digest are merged: With the notification system already implemented, the gap between "individual notifications fire" and "notifications are grouped into a digest" is smaller than v0.1 assumed. The buffer lifecycle, Eisenhower classification, and digest composition are incremental on top of an existing notification infrastructure — not built from scratch.

What gets built:

Feature	Description	Dependency	Effort Estimate
Eisenhower classification on notification records	Each notification gets a Q1-Q4 assignment based on doctype + event type. Config-driven rule table.	Notification system (M0)	3-4 days BE
Digest composer	Compose a WhatsApp-formatted digest from buffered notifications: grouped by doctype, sorted by Eisenhower quadrant, line-budget capped	Buffer lifecycle (if not in current impl, 3-4 days), Eisenhower	5-7 days BE + chatbot
Pre-work digest trigger	Scheduled delivery per user based on company operating hours. Fires once per morning. Suppresses if nothing new.	Digest composer, company operating hours config	2-3 days BE
Wind-down digest trigger	Fires in the final hour of operating hours. Shows open items + carry-forward.	Digest composer	1-2 days BE
Notification→ToDo co-generation	Critical events (credit breach, approval needed) create both a notification AND a ToDo in the same transaction. Uses existing 3 ToDo types.	Notification hooks, existing ToDo	2-3 days BE
Digest includes open ToDo count	Morning digest includes "You have X open tasks" with top-priority item named.	ToDo query, digest composer	1 day BE
What's explicitly NOT in Milestone 1:

New ToDo types (waiting for tabWorkflow)
Conversation state tracking (Hot/Medium/Cold)
WhatsApp session window awareness
Approval workflows
Any new AI automation
Exit criteria:

 Every user receives a morning digest at ~8:30 AM with prioritised, grouped updates
 Every user receives an end-of-day digest showing open items
 Morning digest includes both notification summaries and open ToDo count
 Users report that the morning digest replaces their habit of "checking ERPNext first thing"
 Digest suppression works — no empty digests are sent
Effort estimate: 15-22 days BE, 2-3 days chatbot. ~4-6 weeks calendar time with a 2-person team.

Milestone 2: WORKFLOW FOUNDATION — "MAIA knows what state every document is in"
Target panels: 4 (foundation), 5 (foundation) UX test: A user asks the chatbot "what's the status of SO-2026-00123?" and gets back the workflow state, who needs to act, and what the next possible actions are. The chatbot can guide the user through the correct process for each document state.

This is the Workflow 0.5 step. It's foundational infrastructure that doesn't change what users do yet but changes what MAIA knows.

What gets built:

Feature	Description	Dependency	Effort Estimate
Doctype-specific workflow design	Design the state machine for each doctype (SO, QT, SI, DN, etc.) in Frappe tabWorkflow format. States, transitions, allowed roles per transition.	Business rules per client	5-8 days product + BE
Workflow seeding	Script to seed tabWorkflow records into ERPNext. Idempotent — safe to re-run. Versioned.	Workflow design	2-3 days BE
Workflow state read APIs	API endpoints that return: current workflow_state, allowed transitions from current state, who can execute each transition. Chatbot uses these.	Seeded workflows	3-5 days BE
Chatbot workflow context	Chatbot topic pack for document status queries. When a user asks about a document, the chatbot calls workflow APIs and gives state-aware guidance.	Read APIs, chatbot topic packs	3-5 days chatbot
ToDo trigger mapping from workflow	Define which workflow state transitions should create ToDos. Document the mapping table: (doctype, from_state, to_state) → ToDo type + assignee rule. Do NOT implement yet — just design.	Workflow design, existing ToDo catalogue	2-3 days product
Exception event catalogue expansion	With workflow states designed, identify which transitions represent exceptions (e.g. SO moving to "On Hold" or "Rejected"). Map these to the ToDo catalogue. Design only.	Workflow design	1-2 days product
What's explicitly NOT in Milestone 2:

Enforcing workflow_state in ERPNext (that's 1.0)
Schema changes to affected doctypes
New API surfaces for workflow actions
Approve/Reject via chatbot
New ToDo types in production (designed only)
Exit criteria:

 Workflow state machines designed for SO, QT, SI, DN (at minimum)
 Workflows are seeded in staging environment
 Chatbot can answer "what's the status of [document]?" with state-aware context
 Chatbot can tell a user "this document is waiting for [role] to [action]"
 ToDo trigger mapping document is complete — every workflow transition that creates a ToDo is identified
 No schema changes to any doctype
Effort estimate: 16-26 days (product + BE + chatbot). ~5-7 weeks calendar time.

Why this matters: This milestone is invisible to users in terms of new capabilities, but it's the prerequisite for everything in Milestones 3 and 4. Without it, workflow enforcement (1.0) will be designed ad-hoc under time pressure, and the ToDo system will stay at 3 types forever.

Milestone 3: DECIDE — "I tap Approve on WhatsApp and move on"
Target panels: 3 (expanded), 4 (full), 5 (partial) UX test: An approval request arrives as a decision card on WhatsApp. The user sees supplier, amount, and relevant flags. They tap Approve. The SO moves to the next state in ERPNext without the user opening a browser.

This is Workflow 1.0 — the big one. It enforces workflow_state, which changes schemas and APIs. The blast radius is real but the groundwork from M2 means the state machines are designed and tested before enforcement begins.

What gets built:

Feature	Description	Dependency	Effort Estimate
Workflow enforcement in ERPNext	Enable tabWorkflow for target doctypes. workflow_state column appears. ERPNext native workflow engine governs transitions.	M2 workflow design + seeding	5-8 days BE
Workflow action API surfaces	APIs for each workflow transition: approve, reject, escalate, return-to-draft, etc. Each validates role permissions and transition legality.	Enforcement, M2 read APIs	5-8 days BE
Frontend workflow state integration	MAIA React frontend reads workflow_state and renders appropriate action buttons per document, per user role.	Action APIs, frontend	5-8 days FE
Chatbot workflow actions	Chatbot can execute workflow transitions on behalf of the user (with confirmation gate). "Approve SO-2026-00123" → chatbot calls action API → confirms.	Action APIs, chatbot	5-7 days chatbot
Decision card rendering	WhatsApp interactive message for approval requests: document reference, key context fields, Approve/Reject/Ask quick-reply buttons.	Chatbot workflow actions, WhatsApp interactive messages	3-5 days chatbot
ToDo creation from workflow transitions	Implement the trigger mapping designed in M2. Workflow state transitions create appropriate ToDos with the correct assignee.	M2 trigger mapping, ToDo system	3-5 days BE
Exception taxonomy v1	Codified list of exception types with severity. Workflow rejections, holds, and escalations are classified.	Workflow enforcement, ToDo	3-4 days BE
Auto-resolution rules	Define which ToDos auto-close on subsequent state transitions (e.g. "approval needed" ToDo closes when document reaches "Approved" state).	ToDo, workflow events	2-3 days BE
CPO: AI work expansion	With trust restored (M0 threshold fix), expand: attachment extraction improvements, draft follow-up messages for overdue items.	M0 CPO fix, chatbot	5-8 days BE + chatbot
What's explicitly NOT in Milestone 3:

Full notification serving protocol (phases, strand-breaks, rate limiting)
Exception-only dashboard
Customer preference RAG (can run in parallel but not blocking)
Closure digest
The blast radius plan: Workflow enforcement changes API contracts. This needs a coordinated rollout:

Enable workflow on ONE doctype first (SO is the most impactful). Validate frontend + chatbot + notifications all handle the new workflow_state correctly.
Then extend to QT, SI, DN in sequence — not all at once.
Each doctype gets a 1-week soak period before the next one enables.
Exit criteria:

 SO workflow is enforced in ERPNext with workflow_state column active
 Approval requests arrive as decision cards on WhatsApp with quick-reply buttons
 Tapping Approve on WhatsApp completes the approval in ERPNext
 ToDos are auto-created when documents reach states requiring human action
 ToDos auto-close when the triggering condition resolves
 At least 3 exception types are classified and routed with severity
 Routine events (DN dispatched on schedule) do NOT generate ToDos
Effort estimate: 35-55 days (BE + FE + chatbot). ~8-12 weeks calendar time. This is the longest milestone.

Milestone 4: FLOW — "MAIA runs the day, I handle what matters"
Target panels: 5 (full), 6 (full), all panels at designed depth UX test: A user ends their day by reading a MAIA message that says "All routine tasks done. 2 exceptions left for tomorrow. See you tomorrow." They close their laptop and go home.

What gets built:

Feature	Description	Dependency	Effort Estimate
Full notification serving protocol	Workday phases, strand-break detection, rate limiting, buffer overflow handling. Conversation state tracking (Hot/Medium/Cold/Sub-zero). WhatsApp session window awareness.	M3 workflow generating proper events	8-12 days BE
Lite/Summary/Detail tier rendering	Full template-based rendering per tier per the serving protocol spec.	Full protocol, WhatsApp templates	5-8 days BE + chatbot
Exception-only view	Chatbot or web UI showing ONLY open exceptions, classified by severity. Routine items hidden. "Show all" expansion.	Exception taxonomy (M3), ToDo system	5-7 days FE + BE
Task completion tracking	Track which ToDos were resolved today, which auto-resolved, which carry forward. Feed into wind-down digest.	ToDo lifecycle	3-4 days BE
Closure digest	End-of-day message: routine tasks completed count, exceptions resolved count, exceptions carrying forward, "all clear" or "2 items for tomorrow"	Task tracking, digest composer	2-3 days BE + chatbot
Lite decay strategy	Track per-user engagement rate with Lite messages. Reduce frequency for non-engaging users.	Engagement telemetry	3-4 days BE
Adoption monitoring	Daily MAIA transaction counts per user. Alert on adoption drop-off.	Telemetry, alerting	2-3 days BE
Exit criteria:

 During deep work hours, non-critical notifications are silent — buffered for next break
 Users receive ≤3 non-critical messages per 5-minute window
 End-of-day digest shows: X routine done, Y exceptions resolved, Z carrying forward
 At least one user reports "I can leave without worrying I missed something"
 Exception view shows ≤10 items per day per user (down from 30+ unfiltered updates)
Effort estimate: 30-42 days (BE + FE + chatbot). ~7-10 weeks calendar time.

4.5 A Day in the Life — At Each Milestone
These narratives follow three personas across each milestone stage. The personas are composites drawn from real Thermac and SCC roles.

Azman — Sales user at an industrial supplier (Thermac-like). Handles quotations, SOs, customer relationships. 7-8 service inquiries per month plus product orders. Works on WhatsApp constantly.
Mei Ling — Service coordinator (Thermac-like). Manages work order scheduling, technician assignments, job lifecycle. Her predecessor left and took all the institutional knowledge with her.
Thomas — Sales manager at a multi-entity trading company (SCC-like). Oversees 4 salespeople across 2 entities. Approves quotations, manages credit limits, reviews pipeline.
Each narrative shows the same Tuesday at each milestone — so you can feel what changes.

Before MAIA (Today)
Azman's Tuesday

Azman arrives at the office at 8:45 AM. He opens WhatsApp first — 47 unread messages across 12 groups. Three are customer POs sent as photos. One is Karen in purchasing asking if he quoted the correct price for a chiller service last week. Two are the storekeeper confirming parts are back in stock.

He opens ESoft to check inventory on a part a customer asked about yesterday. Then opens AutoCount to look up that customer's outstanding balance. He can't remember if the customer has an overdue invoice, so he calls finance. Finance says they'll check and call back. They don't call back until 2 PM.

A returning customer emails a PO for heat exchanger maintenance. Azman opens the PDF, opens a blank SO in the system, and starts retyping: customer name, address, contact person, 6 line items with part numbers, quantities, unit prices. He squints at the handwritten amendments on page 2. He guesses a quantity — probably 4, could be 9. He picks 4.

At 10:30 AM his manager walks over and asks about a quotation from last week — did the customer respond? Azman doesn't know. He opens his email, searches for the customer name, finds the sent quotation, but there's no reply. He'll follow up later. He forgets.

By 5:30 PM, Azman has processed 3 SOs (one with the wrong quantity — he'll discover this when the customer calls tomorrow), responded to 6 customer messages on WhatsApp, and failed to follow up on 2 quotations. He has no idea what's still pending. He leaves and hopes nothing falls through the cracks overnight.

Mei Ling's Tuesday

Mei Ling checks Monday.com for today's scheduled jobs. Two technicians are on-site. She texts both on WhatsApp to confirm they arrived. One replies with a thumbs-up. The other doesn't reply for 2 hours — turns out his phone died.

A client calls to reschedule their Thursday maintenance to next week. Mei Ling opens Monday.com, moves the card, then messages the assigned technician to let him know. She has no visibility into whether next week already has too many jobs stacked.

A completed job came in yesterday — the technician WhatsApped photos of the signed worksheet to the group chat. Mei Ling downloads the photos, opens a shared Google Drive folder, creates a new subfolder with the customer name and date, uploads the photos. She'll update the Excel tracker later. She forgets, and when the customer calls in 3 months asking what was done, nobody can find the record quickly.

Thomas's Tuesday

Thomas opens his email. There are 14 messages from overnight — mostly internal copies of quotations his team sent, invoices that went out, and two customer complaints about delivery timing. He has no way to see, at a glance, which quotations need his approval, which SOs have credit issues, or what his team's pipeline looks like without asking each salesperson individually.

At 11 AM he discovers a quotation his junior sent yesterday with pricing 30% below the last quote for that customer. The customer hasn't responded yet, but when they do, Thomas will have to explain the inconsistency. He calls the salesperson to ask what happened. The salesperson says he couldn't find the previous quotation quickly so he priced from memory.

Thomas spends his afternoon in an Excel spreadsheet, manually compiling a pipeline report for the weekly management meeting tomorrow. He asks each salesperson for updates via WhatsApp. Two respond immediately. One responds at 9 PM.

After Milestone 0: SHIP — "Things stopped being silent"
The notification system is live. CPO matching no longer prefills wrong data. Nothing else has changed yet — but the silence is broken.

Azman's Tuesday

Azman arrives at 8:45 AM. His WhatsApp still has 47 unread messages across 12 groups. But now there's one more thread — MAIA — with 3 messages from overnight:

📋 SO-2026-00089 confirmed — Mega Industries, RM 4,200
💰 Payment received — KL Parts, RM 6,100 (INV-2026-00055 cleared)
🚚 DN-2026-00034 dispatched — Seri Logistics, 8 items
These arrived individually, not grouped. They're basic — just "this happened." But Azman reads them in 10 seconds and knows: the Mega order went through, KL Parts paid, and the Seri delivery is on its way. Before MAIA, he would have found out about the payment at 2 PM when finance finally called back. He wouldn't have known about the dispatch until the logistics guy mentioned it at lunch.

At 10:15 AM, a customer emails a PO. Azman uploads it through the CPO module. The draft SO comes back with 4 of 6 line items matched. Two fields say "No match found — please select manually." Azman used to spend 3 minutes per PO correcting wrong matches. Now he spends 1 minute filling in the two empty fields. It's faster, and more importantly, he doesn't have to second-guess every prefilled field anymore. He trusts the ones that are filled because the bad ones are honestly blank.

At 11:48 AM his phone buzzes immediately:

🔴 Credit limit breach — action required
Review override for SO-2026-00330
Customer: Tan Brothers · Limit: RM 50,000 · Order: RM 67,800
Azman didn't discover this by accident 3 days later when finance flagged it. MAIA told him in real time. He walks over to Thomas's desk and asks for override approval.

What changed: The world stopped being silent. Events that used to surface through phone calls, WhatsApp threads, and coincidental conversations now arrive as structured notifications. Azman still does all the same work — but he finds out about things when they happen, not when someone remembers to tell him.

What hasn't changed: Notifications arrive individually, not grouped. There's no prioritisation. No digest. No "here's your day." Azman still has to mentally assemble the picture from scattered pings. And he still does all the manual work himself.

After Milestone 1: SIGNAL + DIGEST — "One message to start the day"
Notifications are now grouped into morning and evening digests. Critical events still fire immediately. ToDos co-generate for actionable items.

Azman's Tuesday

Azman is in his car at 7:55 AM. His phone buzzes once — one message from MAIA:

Good morning — 6 updates overnight. 2 need your attention.

📋 Sales Orders
  › SO-2026-00312 needs your review — Tan Brothers, RM 18,200 (amended by Wei)
  › SO-2026-00298 auto-confirmed from Shopee — MegaTrade, RM 2,100

💰 Payments
  › RM 4,500 received from KL Parts — 2 invoices cleared
  › RM 1,200 received from ACME Corp — partial against INV-2026-00187

🚚 Delivery Notes
  › DN-2026-00089 dispatched — Seri Logistics, 8 items

📌 You have 3 open tasks — top priority: follow up on QT-2026-00044 (ACME Corp, expiring tomorrow)

+1 lower-priority update. Ask to see all.
Azman reads it in 30 seconds while waiting at the traffic light. He knows exactly what to do first: review the Tan Brothers amendment, then call ACME about the expiring quotation. The Shopee order confirmed itself — nothing to do. KL Parts paid — good. Seri delivery is out — done.

He walks into the office with a clear plan. Before MAIA, he would have spent the first 30 minutes of his day hunting through WhatsApp, email, and ERPNext to assemble this picture manually. Now it's handed to him before he sits down.

At 5:15 PM, another message:

End-of-day wrap-up — 3 updates since lunch.

🚚 Delivery Notes
  › DN-2026-00092 marked failed — Mega Industries, customer not in

📋 Quotations
  › QT-2026-00044 — ACME Corp — you followed up today ✓

📌 Open tasks for tomorrow:
  › Reschedule Mega Industries delivery (failed today)
  › Review amended QT-2026-00051 from Ahmad
Azman leaves at 5:45 PM knowing exactly what's waiting for him tomorrow. He didn't have to compile this list himself. He didn't have to worry about whether he forgot something.

Mei Ling's Tuesday

Mei Ling's morning digest shows 2 work orders that were completed yesterday (technician submitted the completion reports) and 1 new work order created from an SO this morning. She also sees a ToDo: "WO-2026-00078 has been scheduled for 5 days without a technician assigned."

That ToDo was auto-generated because MAIA detected the gap. Before, Mei Ling would only have discovered this if the customer called to complain, or if she happened to scroll through Monday.com and spot it. Now MAIA tells her before it becomes a problem.

Thomas's Tuesday

Thomas's digest includes items across his 4 salespeople. He can see that 2 quotations need his approval, 1 SO has a credit limit issue, and there are 3 pending follow-ups across the team. He doesn't need to ask each salesperson for updates via WhatsApp anymore — the digest tells him what his team's morning looks like.

What changed: The mental model shifted. Users no longer assemble their daily picture from scattered signals. One message at 8 AM gives them the full picture. One message at 5 PM gives them closure. The system is starting to organise information, not just transmit it.

What hasn't changed: Every action is still manual. Azman still approves SOs by opening ERPNext. Thomas still reviews quotations on the web UI. Nobody can act from WhatsApp. The digest tells you what to do — but then you have to go somewhere else to do it.

After Milestone 2: WORKFLOW FOUNDATION — "MAIA understands the process"
Workflows are designed and seeded. The chatbot knows what state every document is in. No enforcement yet — MAIA reads the process but doesn't control it.

Azman's Tuesday

From the outside, Azman's day looks the same as M1. He still gets his morning digest. He still processes orders manually. But one thing is different: when he asks MAIA a question, the answers are smarter.

At 10:30 AM, his manager asks about the status of QT-2026-00051. Instead of opening ERPNext and clicking through, Azman messages MAIA:

Azman: what's the status of QT-2026-00051?
MAIA: QT-2026-00051 for Seri Logistics (RM 12,400) is currently in 
"Pending Review" state. It was submitted by Wei on Monday and needs 
your review before it can be sent to the customer. 

To move it forward, you'd need to review it in ERPNext and either 
approve it or return it to Wei with comments.
Before M2, the chatbot would have returned the docstatus (0 = Draft, 1 = Submitted, 2 = Cancelled) — a technical answer that means nothing to a sales user. Now it returns the workflow state — "Pending Review" — and tells Azman what the next step is and who needs to do it.

Mei Ling's Tuesday

Mei Ling messages MAIA: "show me all work orders waiting for technician assignment." MAIA can now answer this because it understands the WO workflow states. It returns a list of work orders in "Scheduled — Unassigned" state, with customer names and scheduled dates. Mei Ling assigns technicians directly in ERPNext.

Before M2, answering "which jobs need assignment?" required Mei Ling to filter Monday.com cards by column and status. Now the chatbot answers it in 5 seconds.

Thomas's Tuesday

Thomas asks MAIA: "which quotations are waiting for my approval?" MAIA returns a list of QTs in "Pending Manager Approval" state across both entities. Thomas can see the full list without opening ERPNext, filtering by company, and sorting by status.

He can't approve from WhatsApp yet — that requires M3. But he knows exactly which documents need him, and he can plan his review time accordingly.

What changed: MAIA became process-aware. It can answer "what state is this in?" and "what happens next?" for any document with a seeded workflow. The chatbot shifted from being a data lookup tool to being a process guide. Users start relying on MAIA not just for notifications but for navigating the document lifecycle.

What hasn't changed: All actions still happen in ERPNext. No approve/reject from WhatsApp. No decision cards. The chatbot tells you what to do and where to do it — but you still have to open the web UI to do it.

After Milestone 3: DECIDE — "Tap approve, move on"
Workflows are enforced. The chatbot can execute workflow transitions. Decision cards arrive on WhatsApp. ToDos are auto-generated from workflow exceptions.

Azman's Tuesday

Azman's morning digest now looks different. Not just in content — in what it asks of him:

Good morning — 4 updates overnight. 1 decision needed.

📋 Approvals
  › QT-2026-00063 needs your sign-off — Mega Industries, RM 9,400
    [Approve] [Reject] [View details]

💰 Payments
  › RM 7,200 received from Tan Brothers — 3 invoices cleared (auto-matched)

🚚 Delivery Notes
  › DN-2026-00101 dispatched — KL Parts, 14 items (auto-confirmed)

📌 1 exception: price mismatch on SO-2026-00345 (High priority)
  › Quoted RM 4.20/unit vs system price RM 5.80/unit — investigate
The payment was auto-matched to invoices — MAIA did the reconciliation, not finance. The DN dispatch was a routine event — it's marked as informational, not actionable. The quotation approval is a decision — it arrived with Approve/Reject buttons.

Azman taps "View details." MAIA shows the key fields: customer, line items, total, margin, any historical pricing context. He's satisfied — taps "Approve." The quotation moves to "Approved" in ERPNext. No browser opened. No login. Done.

The price mismatch on SO-2026-00345 is an exception — it didn't auto-resolve because the delta is too large. A ToDo was created automatically when the SO hit the "Validation Failed" workflow state. Azman investigates: turns out the customer has a negotiated rate that wasn't captured in the system. He updates the price, resubmits, and the ToDo auto-closes.

At 11:00 AM, a customer emails a PO. Azman uploads it. The CPO module extracts the data, the draft SO populates. But this time, MAIA also drafts a follow-up message for the customer:

MAIA: I've drafted an order acknowledgment for this customer:

"Dear Mr. Lim, we've received your PO-2026-0089 dated 24 May. 
Your sales order (SO-2026-00351) is confirmed for 6 items totalling 
RM 14,200. Expected delivery: 3-5 working days. Please let us know 
if any changes are needed."

Send via WhatsApp? [Send] [Edit first]
Azman reads it, changes one line, taps Send. What used to be a 5-minute task (open WhatsApp, write the message, copy the SO number, check the delivery estimate) took 15 seconds.

Mei Ling's Tuesday

A work order reaches "Completed — Pending Review" state. MAIA sends Mei Ling a decision card:

📋 Work Order review
WO-2026-00092 completed by technician Ahmad
Customer: Air Cool Industries · Equipment: Chiller Unit #3
Work performed: Annual maintenance + gasket replacement
Parts used: 2x gaskets (planned), 1x bearing (unplanned — deviation noted)
[Accept completion] [Return for clarification]
Mei Ling taps "Accept completion." The work order moves to "Closed" state, the customer's service history updates, and the next maintenance date calculates automatically. The bearing deviation creates a ToDo for the storekeeper to reconcile inventory.

Before M3, this review happened on paper worksheets passed between desks. The deviation would have been missed until the next stocktake.

Thomas's Tuesday

Thomas's morning digest includes a new section: the exception summary.

📌 2 exceptions across your team:

🔴 Price mismatch (High) — SO-2026-00345
   Azman's order · Quoted below system price · Investigating

🟡 Credit hold (Medium) — SO-2026-00339  
   Wei's order · Customer at 92% credit utilisation
   [Override] [Hold]
Thomas taps "Hold" on Wei's order. The SO moves to "On Hold" state. Wei gets a notification explaining why. Thomas doesn't need to call Wei — the system communicated the decision and the reason.

The rest of Thomas's day is quiet. He approves 2 more quotations from WhatsApp, each taking 20 seconds. The pipeline report for tomorrow's meeting? He asks MAIA: "show me this week's pipeline." The chatbot returns a grouped summary by salesperson, by stage. Thomas copies it. No more Excel compilation.

What changed: The action loop closed. Users can now act from MAIA, not just be informed by MAIA. Decisions arrive with context and buttons. Routine work (payment matching, dispatch confirmations) happens silently. Exceptions surface with classification and severity. The system is starting to work for the user, not just report to them.

What hasn't changed: The notification protocol isn't fully adaptive yet — no phase-aware delivery, no strand-break detection. Users get notifications at all hours during working time regardless of whether they're in a meeting or deep in a pricing review. The system doesn't yet understand when to talk to you — it just knows what to say.

After Milestone 4: FLOW — "MAIA runs the day"
Full notification protocol. Phase-aware delivery. Exception-only attention. Closure digest.

Azman's Tuesday

7:55 AM. Morning digest arrives — same as M3, but now specifically timed to Azman's pre-work phase. It includes a completeness signal:

Good morning — 3 updates overnight. 1 decision, no urgent exceptions.

📋 Approvals
  › QT-2026-00078 — Mega Industries, RM 6,800 [Approve] [Reject]

💰 Resolved overnight
  › 2 payments auto-matched, 1 DN auto-dispatched

📌 Open tasks: 2 (both Low priority)
  › Follow up on dormant QT-2026-00060 (no response 14 days)
  › Review stale CPO draft from Friday (not yet submitted)
Azman approves the quotation from his car. One tap.

9:15 AM — 10:30 AM. Azman is on back-to-back client calls. MAIA detects he's in Full Speed phase (no messages for 75 minutes). Three non-critical events fire during this time: a Shopee order auto-confirms, a payment arrives, and a DN is delivered. All three buffer silently. Azman's phone doesn't buzz once.

10:35 AM. Azman finishes his calls and messages MAIA about a customer query. His state transitions to Hot. The buffered events stay buffered — MAIA doesn't interrupt his active conversation. He finishes at 10:42 AM. State transitions to Medium.

10:44 AM. MAIA checks: Azman is Medium, phase is still Full Speed (execution), so a normal Summary would still buffer. But a strand break was detected at 10:35 when he came back after 75 minutes of silence. The strand-break Summary fires, compressed to Q1 items only:

Quick catch-up — nothing urgent since this morning.
+3 lower-priority updates. Ask when you're free.
Nothing is Q1 — so the body is empty. Three items wait in the buffer. Azman glances at the message — "nothing urgent" — and goes back to work.

12:15 PM. Break phase. Azman heads to lunch. Buffer flushes:

3 updates from this morning.

📋 Sales Orders
  › SO-2026-00360 auto-confirmed — Shopee, RM 1,800

💰 Payments
  › RM 3,400 received from ACME Corp — cleared INV-2026-00192

🚚 Delivery Notes
  › DN-2026-00108 delivered — Mega Industries, POD signed
Azman reads this over his nasi lemak. Nothing to act on. Good.

2:45 PM. Something goes wrong. A critical event fires: the customer on SO-2026-00345 is rejecting the delivery, claiming wrong items were shipped. This is a Detail-tier interrupt — it bypasses everything:

🔴 Delivery rejection — action required
DN-2026-00108 rejected by Mega Industries — customer claims wrong items
SO-2026-00345 · 3 line items disputed · Customer requesting callback
Azman sees it immediately. He calls the customer. They sort it out — 2 of 3 items were correct, 1 had the wrong variant. Azman initiates a partial return in MAIA, creates a replacement DN. The system tracks the exception from start to resolution.

5:10 PM. Wind-down phase. The closure digest arrives:

End of day — good work today.

✅ Routine completed: 4 orders processed, 3 payments matched, 2 DNs delivered
✅ Exceptions resolved: delivery rejection (Mega Industries) — partial return initiated
⏳ Carrying forward: 2 low-priority follow-ups from this morning

See you tomorrow 👋
Azman reads it. He knows the Mega situation is handled. The two follow-ups can wait until tomorrow — they're Low priority and MAIA will remind him in tomorrow's digest. He closes his laptop at 5:30 PM. Nothing is hanging.

Mei Ling's Tuesday

Mei Ling's morning digest is built specifically for the coordinator role — work orders grouped by status, technician capacity this week, overdue jobs highlighted. During the day, she only hears from MAIA when something breaks the expected pattern: a job wasn't started on the scheduled date, a technician marked unexpected parts used, a customer called to reschedule. Everything that went according to plan was silent.

At end of day:

End of day — 6 jobs progressed today.

✅ Completed: WO-078 (Air Cool), WO-081 (Seri Logistics)
✅ In progress: WO-083 (Mega) — technician on-site, estimated completion tomorrow
⏳ Exception: WO-079 (KL Parts) — not started, scheduled for today
   → ToDo carries forward for tomorrow

See you tomorrow 👋
Thomas's Tuesday

Thomas approved 3 quotations and 1 credit override from WhatsApp across the day — total time: under 2 minutes. He didn't compile a pipeline report — he asked MAIA and got one. He spotted one pricing anomaly through the exception system before the quotation went to the customer, not after.

His closure digest shows his team's performance for the day: 12 orders processed, 2 exceptions handled, 1 carrying forward. He forwards it to the GM. The weekly management meeting tomorrow will take 20 minutes instead of an hour because the data was already assembled.

At 8:30 PM, a new order comes in from the Lazada channel. Thomas's phone stays silent — MAIA respects outside hours. The order will appear in his morning digest, auto-confirmed and requiring no action.

What changed: MAIA became invisible when things are working and loud when they aren't. The notification protocol understands that Full Speed is not the time to talk, Break is. It knows that a Shopee auto-confirmation doesn't need a human ping during a client meeting. It knows that a delivery rejection needs an immediate interrupt regardless of phase.

Users don't spend their day managing MAIA. They spend their day doing the work that only humans can do — negotiating with customers, judging pricing, making relationship calls. Everything else was handled, summarised, or flagged before they needed to think about it.

The infographic's promise — "the boring work gets handled, the key decisions get made, and the team can go home earlier" — is the actual user experience.

5. Feature Derivation Summary
By System Layer
Layer	M0: Ship	M1: Signal+Digest	M2: Workflow Foundation	M3: Decide	M4: Flow
Notifications	Complete testing, deploy	Eisenhower, digest composer, scheduled triggers	—	—	Full protocol, tiers, rate limiting
Digest	—	Pre-work + wind-down	—	—	Closure digest, phase-aware
ToDo	—	Co-generation for critical events, count in digest	Trigger mapping design, exception catalogue design	Implement triggers from workflow, auto-resolution	Task completion tracking
Workflow	—	—	Design, seed, read APIs, chatbot context	Enforce, action APIs, FE+chatbot integration	—
AI work	CPO threshold fix	—	—	Attachment improvements, draft messages	—
Telemetry	—	—	—	—	Lite decay, adoption monitoring
Rough Effort Estimate (Corrected)
Milestone	Engineering Days	Calendar Weeks (2-person team)
M0: Ship What's Done	5-10	2-3 weeks
M1: Signal+Digest	18-28	4-6 weeks
M2: Workflow Foundation	16-26	5-7 weeks
M3: Decide	35-55	8-12 weeks
M4: Flow	30-42	7-10 weeks
Total	~105-160 days	~26-38 weeks
This is 6-9 months of focused engineering effort assuming a 2-person team. Shorter than v0.1 estimated because M0 captures work already done, and M1 builds on implemented notification infrastructure rather than starting from scratch.

6. Implementation Sequence Recommendation
The critical path is Workflow. M0→M1 can run quickly because the notification system is largely built. But M2 (workflow design) must start early because M3 (workflow enforcement) is the longest milestone and has the largest blast radius.

Recommended sequence with parallel tracks:

Jun 2026:     M0 — SHIP WHAT'S DONE
              Complete notification testing, deploy to production
              CPO threshold fix
              ──────────────────────────────────────────────────

Jul-Aug 2026: M1 — SIGNAL + DIGEST (primary track)
              Digests, Eisenhower, scheduled triggers
              
              M2 — WORKFLOW FOUNDATION (parallel product track)
              Workflow design can start in parallel since it's
              product/design work, not competing for the same
              engineers building digest features
              ──────────────────────────────────────────────────

Sep-Nov 2026: M3 — DECIDE
              Workflow enforcement (doctype by doctype)
              Action APIs, decision cards, ToDo expansion
              This is the big one — takes 8-12 weeks
              ──────────────────────────────────────────────────

Dec 2026 -    M4 — FLOW
Jan 2027:     Full serving protocol, exception view, closure digest
              ──────────────────────────────────────────────────
Key parallelisation: M2 is primarily product design + chatbot work (workflow state machine design, read API specs, chatbot topic packs). M1 is primarily backend engineering (digest composition, scheduling, buffer lifecycle). These compete for different people. Running them in parallel is feasible if you have at least one product person and one backend engineer working simultaneously.

7. Open Questions (Updated)
Notification protocol depth. What exactly is implemented and in testing — the full serving protocol (activity states, tiers, phases) or the notification catalogue + basic routing? This determines whether M1 is 4 weeks or 6 weeks.
Workflow 0.5 scope. How many doctypes get workflows designed in M2? Recommendation: SO and QT minimum, SI and DN if time allows. More doctypes = longer M2 but less risk in M3.
Workflow 1.0 rollout order. Which doctype gets workflow enforcement first in M3? SO is the most impactful but also the highest blast radius. QT might be safer to start with since it has fewer downstream dependencies.
WhatsApp template lead time. Decision cards (M3) and tier rendering (M4) require pre-approved WhatsApp templates. Meta's approval process can take days-weeks. Template design and submission should start during M2, not when M3 code is ready.
Engineering capacity. The 105-160 day estimate assumes 2 focused engineers. If the team is split across client implementations, hypercare, and new deals, add 50% to the timeline. What's the realistic allocation?
Per-client vs product-wide. Do all clients go through M0→M4, or do you pilot each milestone on one client first? Recommendation: Thermac pilots M0-M1 (they're in hypercare, closest to production usage), SCC pilots M2-M3 (they have more complex document flows).
8. What This Document Does NOT Cover
Per-client implementation plans (those are separate documents)
cRFQ module roadmap (separate workstream, can feed into M3/M4)
Integration-specific work (SAP, Epicor — client-dependent)
B2C chatbot roadmap (separate product surface)
Pricing / commercial model changes implied by automation value
Customer preference RAG (can run as a parallel workstream, not on critical path)
Attachment Intelligence Phase 1/2 (can run as a parallel workstream)
Changelog
Version	Date	Changes
v0.1	23 May 2026	Initial decomposition, gap assessment, milestone design
v0.2	23 May 2026	Corrected current state: notification system implemented (in testing), ToDo at 3 types with catalogue waiting for tabWorkflow, Workflow 0.5/1.0 split identified, CPO false-positive problem diagnosed. Added M0 (ship what's done). Merged M1+M2 into single milestone. Restructured M2 as Workflow Foundation (0.5 step). Adjusted effort estimates downward for M1 (builds on existing infrastructure). Added blast radius plan for M3 workflow enforcement.
Explain
