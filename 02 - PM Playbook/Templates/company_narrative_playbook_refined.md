---
owner: Gareth
status: review
last_reviewed: 2026-04-14
---

# Company Narrative Playbook

This document explains how to create a strong company narrative for a client, especially for MAIA discovery, requirements gathering, SOW drafting, and internal team alignment.

It is designed to help turn scattered notes, proposals, websites, and meeting context into a narrative that helps the team understand:
- what the company does
- how the business operates
- where friction exists today
- how users currently feel
- where MAIA can create the most operational value
- what a normal day inside the company feels like across different moving parts
- what a normal day feels like for each employee group before and after MAIA
- the company’s current operating DNA: how people communicate, decide, follow up, and get work done

---

## 1. Purpose of a Company Narrative

A company narrative is not just a summary.

It should help the reader:
- understand the client’s business model and operating environment
- visualize what daily work feels like for their users
- see the hidden pain behind manual workflows
- understand why certain MAIA features matter
- align the team before moving into requirements, SOW, or product design

A good narrative should feel like:
- a day in the life of the company
- a realistic picture of how work currently gets done
- a view of the company’s operating personality and habits
- a bridge between business context and product solutioning

---

## 2. Inputs Required Before Writing

Gather these first.

### A. Basic company context
Need:
- company name
- industry
- what they sell or do
- major business divisions
- target customers
- how they position themselves publicly

Sources:
- company website
- brochures
- LinkedIn
- sales deck
- proposal intro

### B. Operational context
Need:
- business flow
- departments involved
- how work moves from one team to another
- major workflows relevant to MAIA
- approximate volume or scale

Examples:
- orders per day or month
- number of branches
- key customer types
- whether workflows are high value, high frequency, or coordination-heavy

### C. Pain points and challenges
Need:
- what is manual
- what depends on WhatsApp, calls, Excel, memory, or one key person
- recurring mistakes
- delays, follow-up gaps, or reporting pain
- where users feel frustrated, stressed, reactive, or blind

### D. Future-state MAIA context
Need:
- what MAIA is supposed to improve
- which modules are core vs optional
- who the main user groups are
- which outcomes matter most

Examples:
- faster order processing
- cleaner finance reconciliation
- better management visibility
- searchable field sales history

### E. Narrative enrichment inputs
Need:
- what a normal working day probably looks like
- how work is handed off between teams
- what kind of communication style dominates
- whether work depends on urgency, relationships, memory, or process discipline
- signals about the company’s current operating culture

Examples:
- “things move through WhatsApp and calls”
- “people solve issues by checking with the one experienced person”
- “follow-up depends on reminders rather than a structured system”
- “speed matters, but accuracy is fragile”
- “teams are hardworking but trapped in manual coordination”

---

## 3. Minimum Materials to Collect

Before writing, collect at least:

1. Initial meeting notes
2. Proposal or solution draft
3. Requirements gathering notes
4. Public website research
5. Any notes on user roles
6. Key pain points or feature ideas
7. Anything that clarifies scope exclusions

If available, also collect:
- sample SOPs
- org structure notes
- screenshots of current tools
- sample documents
- internal assumptions or open questions

---

## 4. Recommended Process

## Step 1: Understand the business first
Do not start by listing features.

First answer:
- What business are they in?
- How do they make money?
- What kind of customers do they serve?
- What kind of operational complexity do they have?
- Why is coordination hard in this company?

Output of this step:
A short business understanding summary.

---

## Step 2: Identify the main operational user groups
Split the company into real users.

Examples:
- indoor sales / sales admin
- finance executive
- outdoor sales rep
- service coordinator
- management / business head

For each group, identify:
- what they are trying to get done
- what tools they rely on
- what slows them down
- where they feel uncertainty or pressure

Output of this step:
A user-role map.

---

## Step 3: Identify the highest-friction workflows
Focus on flows MAIA actually touches.

Examples:
- order intake and sales order creation
- customer and pricing lookup
- SOA extraction and knock-off
- daily sales reporting
- field sales meeting logging
- follow-up visibility

Do not overload the narrative with every workflow.
Prioritize the flows that are:
- frequent
- costly
- messy
- emotionally frustrating
- important to leadership

Output of this step:
A shortlist of 3 to 6 important workflows.

---

## Step 4: Build “a day in the life of the company”
Before writing user-by-user stories, create a top-down company day narrative.

This section should narrate:
- how the day starts
- what work arrives first
- which teams get hit first
- what internal handoffs happen
- where information gets delayed, re-checked, or lost
- where urgency increases
- where teams depend on each other but do not share the same source of truth

This is not yet about feature mapping.
It is about showing how the moving parts behave together.

Useful structure:
- Morning: incoming work, customer requests, reporting, operational triage
- Midday: coordination, approvals, clarifications, status chasing
- Afternoon: backlog, follow-up, exceptions, finance/admin cleanup
- End of day: unresolved items, field updates, management visibility gaps

Important:
Write this like observing the company in motion.
Show friction between functions, not just pain inside one role.

Output of this step:
A company-level day-in-the-life narrative.

---

## Step 5: Define the current company DNA / operating persona
This section captures how the company currently handles work.

The goal is to describe:
- how people communicate
- how decisions are made
- how issues are escalated
- whether the company is process-driven or person-dependent
- whether the company relies more on speed, memory, relationships, or structure
- what “normal” operational behavior feels like

Examples of company DNA statements:
- Fast-moving but fragmented
- Relationship-driven and highly manual
- Operationally committed but dependent on WhatsApp and human memory
- Commercially responsive but administratively stretched
- High-touch customer handling, low system structure

This section should not insult the client.
It should explain their current operating reality in a neutral but clear way.

Useful prompts:
- When something is urgent, what usually happens?
- When information is missing, who gets pulled in?
- When mistakes happen, is the fix driven by system or by experienced staff?
- Is the business process consistent, or patched together through informal workarounds?

Output of this step:
A short “company DNA” profile.

---

## Step 6: Make grounded assumptions to paint the picture
Assumptions are allowed when they help complete the narrative, but they must be controlled.

You may infer likely realities from:
- the company’s industry
- customer type
- workflow type
- reported pain points
- volume and coordination complexity
- website positioning and business divisions

Good assumptions:
- If orders come from WhatsApp, email, images, and fax, the order intake process is likely fragmented and interruption-heavy.
- If finance receives SOAs and remittance details in multiple formats, reconciliation likely depends on manual review and confirmation.
- If outdoor sales rely on voice notes and informal updates, field visibility is likely inconsistent and dependent on user discipline.
- If the company serves multiple customer segments or divisions, internal coordination is likely more complex than a single straight-line process.

Bad assumptions:
- inventing systems they never mentioned
- inventing departments or job titles without basis
- inventing exact KPIs or team sizes
- making dramatic claims with no support
- treating assumptions as confirmed fact

Rule:
Use assumptions to fill in likely workflow texture, not to create fake facts.

Best practice:
Write them as grounded interpretation.
Examples:
- “This likely means…”
- “This suggests the team currently depends on…”
- “A reasonable operating assumption is…”
- “Given the business model, it is likely that…”

Output of this step:
A list of usable assumptions to support the narrative.

---

## Step 7: Write the “before” state by user group
Describe what daily work feels like today.

This is where the narrative becomes useful.

Include:
- how the day starts
- what interruptions happen
- what tools they juggle
- what information is missing
- what gets re-keyed
- what has to be manually checked
- what the emotional burden is

Important:
Do not make it sound generic.
Show the texture of the day.

Examples of useful emotional detail:
- reactive
- fragmented
- dependent on memory
- worried about mistakes
- constantly chasing
- mentally overloaded
- unclear what is current truth

Output of this step:
Realistic “before MAIA” user stories.

### Employee day-in-life narrative ingredients
For each employee group, write the story as if the reader is shadowing that person for one working day.

Include:
- the employee's first task of the day
- where requests come from
- which systems, chats, documents, or people they need to check
- what interrupts them
- what they have to remember manually
- what they are afraid of missing
- what they do when information is unclear
- what still feels unresolved at the end of the day

Useful structure:

```text
For [employee role], the day usually starts with...
Before MAIA, their work is shaped by...
The hardest part of the day is...
By the end of the day, they are still carrying...
```

Optional user story line:

```text
As a [role], I need [clear operational need], so that [business outcome or emotional relief].
```

Example:

```text
As a sales admin, I need customer order details, pricing, quotation history, and approval status in one reliable place, so that I can process orders without constantly checking WhatsApp, Excel, and other people’s memory.
```

---

## Step 8: Write the “after” state by user group
Describe what changes once MAIA is implemented.

Do not make it sound magical.
Keep it operational and believable.

Show:
- what MAIA reduces
- what MAIA structures
- what becomes easier to retrieve
- what users no longer need to remember manually
- how their confidence changes
- how management visibility improves

Important:
Do not write “everything is automated and easy.”
Write what specifically becomes lighter, faster, cleaner, or more controlled.

Output of this step:
Realistic “after MAIA” user stories.

### After-MAIA narrative ingredients
For each employee group, show what changes in the same working day once MAIA is in use.

Include:
- what information becomes easier to capture
- what becomes easier to search or retrieve
- what validation or structure reduces mistakes
- what follow-up becomes visible instead of memory-based
- what handoff becomes cleaner
- what the employee still needs to review manually
- how their confidence changes

Useful structure:

```text
With MAIA, the same employee starts the day with...
Instead of chasing..., they now...
The work still requires judgment, but...
By the end of the day, they have...
```

Optional user story line:

```text
As a [role], I need MAIA to [support the workflow], so that [specific improvement in speed, clarity, control, or confidence].
```

Example:

```text
As a finance executive, I need payment, invoice, and receipt information to be easier to match and review, so that reconciliation depends less on manual searching and more on a clear transaction trail.
```

---

## Step 9: Link the narrative back to product value
After the story, explain what the narrative implies for product design.

Examples:
- why WhatsApp-first matters
- why lookup and validation are core
- why audit trail matters
- why voice notes matter for adoption
- why management needs backend visibility, not just chat output
- why the product must match the company’s current DNA instead of assuming ideal SOP discipline

Output of this step:
A product implication summary.

---

## 5. Recommended Narrative Structure

Use this structure.

## Title
Example:
**Understanding SCC: How the business operates today and where MAIA can reduce friction**

## Section 1: Business context
Explain:
- what the company does
- the business divisions
- the type of customers
- the nature of the workflows

## Section 2: A day in the life of the company
Narrate:
- how work enters the business
- which teams touch it
- what typical handoffs look like
- where friction accumulates during the day
- how unresolved work spills across departments

## Section 3: Current company DNA
Explain:
- how the business currently handles work
- whether it is structured or reactive
- whether knowledge lives in systems or people
- what kind of operational personality the company has today

## Section 4: Why operations feel heavy today
Explain:
- manual channels
- fragmented communication
- re-keying
- follow-up burden
- coordination complexity

## Section 5: User narratives
For each main user group:
- Before MAIA day-in-life narrative
- Before MAIA user story line
- After MAIA day-in-life narrative
- After MAIA user story line
- Narrative takeaway: what changed in the workday

## Section 6: What this means for MAIA
Summarize:
- must-have feature implications
- design implications
- adoption implications
- management implications

---

## 6. Employee Day-in-Life User Story Library

Use these examples as patterns, not copy-paste text. Replace role names, workflow details, channels, and emotional texture with the client's actual context.

### A. Sales admin / indoor sales

#### Before MAIA

The sales admin's day often starts before the work is fully organised. Customer requests are already sitting across WhatsApp chats, emails, images, forwarded messages, and verbal follow-ups from salespeople. Some requests are complete, but many are missing item details, pricing confirmation, delivery timing, or approval context.

Before MAIA, the sales admin becomes the person who turns scattered information into something the business can act on. They check old quotations, ask colleagues for the latest customer arrangement, confirm whether pricing is still valid, and manually prepare the next document in the quote-to-cash flow. The pressure is not only speed. It is the fear of using the wrong customer detail, missing a special price, or creating a quotation or sales order that needs to be corrected later.

By the afternoon, the work becomes even more fragmented. New orders arrive while earlier orders are still waiting for clarification. The admin has to remember which customer has replied, which quotation is pending, which sales order is ready, and which issue needs someone else's decision. The day ends with a mental list of unfinished follow-ups that may not be visible to anyone else.

User story:

```text
As a sales admin, I need customer requests, quotation history, pricing context, and sales order status to be easier to capture and retrieve, so that I can process work accurately without depending on scattered chats and memory.
```

#### After MAIA

With MAIA, the same day starts with more structure around incoming sales work. Customer requests can be captured closer to where they arrive, and the sales admin has a clearer path for turning the request into the next operational document. Instead of rebuilding context from multiple conversations, they can check the relevant customer, quotation, sales order, invoice, or receipt trail inside the MAIA workflow.

The work still requires judgment. The admin still reviews details, confirms exceptions, and handles cases where information is incomplete. But the burden shifts from chasing everything manually to checking, validating, and moving work forward with a clearer source of truth.

By the end of the day, fewer follow-ups live only in the admin's head. The team can see more of what has been created, what is pending, and where the next action sits.

User story:

```text
As a sales admin, I need MAIA to structure the quotation-to-sales-order workflow, so that I can spend less time reconstructing context and more time moving confirmed customer requests forward.
```

Narrative takeaway:
MAIA does not remove the sales admin's responsibility. It reduces the hidden coordination load around that responsibility.

### B. Outdoor sales representative / account owner

#### Before MAIA

The outdoor salesperson's day starts in the field, not inside a system. They may be visiting customers, answering WhatsApp messages, checking stock or pricing informally, and passing updates back to the office between meetings. Much of their value comes from relationships and responsiveness, but that also means their work can be difficult for the rest of the company to see.

Before MAIA, customer context often lives in conversations, memory, voice notes, and quick updates sent while moving between appointments. A sales rep may know that a customer is interested, unhappy, waiting for a quotation, or likely to reorder soon, but that knowledge may not be captured in a structured way. If the office needs details, they may need to call or message the salesperson again.

The hardest part is continuity. Follow-ups depend on discipline and memory. If the day is busy, meeting notes may be delayed. If the salesperson is handling several customers at once, small but important details can be lost before they become part of the business record.

User story:

```text
As an outdoor sales representative, I need a simple way to capture customer updates and follow-up context from the field, so that important sales information does not disappear inside chats, calls, or memory.
```

#### After MAIA

With MAIA, the sales rep can keep working in a way that fits field behaviour while making more of the day visible to the business. Customer updates, follow-up notes, and relevant sales activity can become easier to capture and refer back to. The office no longer depends only on calling the rep to understand what happened with a customer.

The salesperson still owns the relationship and still needs to use judgment. MAIA does not replace commercial instinct. It gives the rep and the office a cleaner shared record, so the next quotation, sales order, or follow-up starts with better context.

By the end of the day, management and support teams have a clearer view of field activity without forcing every update to become a separate manual report.

User story:

```text
As an outdoor sales representative, I need MAIA to make customer updates and follow-ups easier to log from the field, so that my relationship work becomes visible and actionable without adding heavy admin.
```

Narrative takeaway:
MAIA should protect the salesperson's speed while making field knowledge easier for the company to use.

### C. Finance executive

#### Before MAIA

The finance executive's day usually starts with evidence: invoices, payment messages, bank records, receipts, customer statements, and requests from sales or management. The work is detail-heavy, and the cost of a mistake is high because small mismatches can create customer disputes, reporting gaps, or month-end cleanup.

Before MAIA, finance may need to match information across different places. A payment may be mentioned in WhatsApp, attached as an image, reflected in a bank record, and connected to an invoice number somewhere else. If the details are incomplete, finance has to ask sales, admin, or the customer for clarification.

The emotional burden is control. Finance needs to know what is paid, what is unpaid, what has supporting evidence, and what still needs action. When the transaction trail is scattered, the day becomes a sequence of checks and re-checks.

User story:

```text
As a finance executive, I need invoice, receipt, and payment context to be connected and easier to verify, so that reconciliation and follow-up are based on a clear record instead of scattered evidence.
```

#### After MAIA

With MAIA, finance has a cleaner way to review the flow from invoice to receipt. Payment-related information and document status become easier to trace, which reduces the time spent searching across messages and files before action can be taken.

Finance still reviews exceptions, confirms unusual cases, and applies judgment where documents or payments do not match cleanly. The improvement is that the normal cases become easier to process, and the abnormal cases are easier to identify.

By the end of the day, finance can report and follow up with more confidence because the transaction story is less dependent on manual reconstruction.

User story:

```text
As a finance executive, I need MAIA to support invoice and receipt visibility, so that I can identify pending, paid, and unclear items with less manual searching.
```

Narrative takeaway:
MAIA creates value for finance by improving traceability, not by pretending finance judgment is unnecessary.

### D. Logistics / fulfilment coordinator

#### Before MAIA

The logistics or fulfilment coordinator's day is shaped by timing. Sales wants to know whether an order can move. Customers want updates. Internal teams need to know what has been confirmed, what is pending, and what cannot proceed yet.

Before MAIA, the coordinator may receive instructions from sales, admin, or management in different formats. Some orders have complete details, while others need clarification on delivery date, quantity, address, product availability, or customer priority. If the order information changes, the update may not reach everyone at the same time.

The hardest part is not one single task. It is the constant risk that the latest instruction is not the same as the latest truth. This creates extra checking, repeated questions, and avoidable pressure when customers ask for updates.

User story:

```text
As a logistics coordinator, I need confirmed order and delivery-related information to be clearer before fulfilment work begins, so that I can coordinate next steps without relying on fragmented instructions.
```

#### After MAIA

With MAIA, the coordinator can work from a clearer sales order and fulfilment context. They can see more of what has been confirmed and where the order sits in the operating flow. When information is incomplete, the gap is easier to identify instead of being discovered only after coordination has started.

The work remains operationally hands-on. MAIA does not remove real-world constraints such as stock, delivery timing, or customer urgency. It reduces the friction caused by unclear handoffs and scattered order context.

By the end of the day, fewer updates need to be repeated manually across teams because more people can refer to the same operational record.

User story:

```text
As a logistics coordinator, I need MAIA to provide clearer sales order and fulfilment context, so that handoffs from sales to operations are less dependent on repeated clarification.
```

Narrative takeaway:
MAIA helps logistics by making the handoff cleaner before physical coordination begins.

### E. Management / business head

#### Before MAIA

Management starts the day needing visibility, but visibility often depends on asking people. Leaders want to know sales progress, pending quotations, invoice status, customer follow-ups, overdue work, and operational bottlenecks. The answers may exist, but they are spread across teams and personal updates.

Before MAIA, management may rely on end-of-day summaries, manual reports, WhatsApp updates, or verbal escalation. This creates a delay between what is happening and what leadership can see. When a customer issue escalates, managers may need to reconstruct the story by asking multiple people what happened.

The emotional burden is uncertainty. Management may trust the team, but still lack a live enough picture of whether work is moving, stuck, duplicated, or missed.

User story:

```text
As a business head, I need clearer visibility across sales, finance, and operational status, so that I can manage exceptions and priorities without depending only on manual updates.
```

#### After MAIA

With MAIA, management has a clearer view of the operating flow across quotations, sales orders, invoices, receipts, and follow-ups. Leaders can spend less time asking for basic status and more time acting on exceptions, risks, and priorities.

The system does not remove the need for team conversations. Instead, it gives those conversations a stronger starting point. When something is delayed or unclear, management can ask better questions because the core workflow context is easier to see.

By the end of the day, leadership has a more reliable sense of what moved, what is stuck, and where intervention may be needed.

User story:

```text
As a business head, I need MAIA to turn daily workflow activity into clearer operational visibility, so that I can manage the business by exception instead of chasing every update manually.
```

Narrative takeaway:
MAIA helps management move from people-dependent visibility to workflow-based visibility.

### F. Customer service / service coordinator

#### Before MAIA

The customer service or service coordinator's day starts with interruptions. Customers ask for updates, sales asks for help, finance needs clarification, and operations may need missing details before work can proceed. The coordinator is often the bridge between what the customer expects and what the internal team knows.

Before MAIA, the coordinator spends a lot of time locating the latest context. They may need to check who spoke to the customer, whether a quotation was sent, whether a sales order exists, whether an invoice has been issued, or whether a payment has been received. Each answer may require a different person or channel.

The hardest part is being expected to respond quickly without always having reliable context. This makes the role feel reactive and exposed, especially when customers are chasing answers.

User story:

```text
As a customer service coordinator, I need customer and document status to be easier to check, so that I can respond quickly without interrupting multiple internal teams.
```

#### After MAIA

With MAIA, customer service has a clearer way to find the status behind a customer question. The coordinator can check more of the customer workflow context before escalating, which makes responses faster and reduces unnecessary internal interruptions.

The role still requires empathy and judgment. Some issues still need human follow-up. But the coordinator can separate simple status questions from real exceptions more confidently.

By the end of the day, fewer customer questions remain stuck because the coordinator can find the next useful answer faster.

User story:

```text
As a customer service coordinator, I need MAIA to make customer workflow status easier to retrieve, so that I can give clearer answers and escalate only the issues that truly need intervention.
```

Narrative takeaway:
MAIA gives customer-facing staff more confidence by making internal status easier to access.

---

## 7. Writing Guidelines

### Do:
- write in narrative form
- make it read like a day in the life
- include operational detail
- include emotional texture
- anchor the story in real company context
- keep the language business-facing and clear
- show why the pain matters
- write employee-level before and after stories, not only company-level summaries
- include the company’s current operating DNA
- make reasonable assumptions when needed to complete the picture, but keep them grounded

### Do not:
- just list features
- make it sound like marketing fluff
- make up fake numbers without basis
- over-romanticize the user pain
- write generic “efficiency improvement” claims
- describe MAIA as magic
- confuse assumptions with confirmed facts

### Tone:
- grounded
- observational
- specific
- empathetic but not dramatic
- useful for internal product and PM teams

---

## 8. Prompting Template for Creating a Company Narrative

Use this prompt template.

```text
You are helping create a company narrative for internal product and project alignment.

Using the provided meeting notes, proposal, requirements context, and public website research, write a narrative that helps the team understand the client’s business, operating reality, pain points, company DNA, and where MAIA creates value.

Requirements:
- Write it in a narrative, day-in-the-life style
- Start with a “day in the life of the company” section showing how the moving parts operate across the business
- Include a section on the company’s current DNA / operating persona: how work is handled today, how people communicate, where decisions live, and what the operating style feels like
- Focus on the real users inside this ICP
- Show both “before MAIA” and “after MAIA”
- For each main employee group, write a day-in-the-life narrative before MAIA and after MAIA
- Include one user story line for each employee group in this format: “As a [role], I need [need], so that [outcome].”
- Go into detail on the daily workflow, friction, interruptions, and emotional burden
- Make it feel grounded in the company’s actual business model and public positioning
- Reasonable assumptions may be made based on the company’s basic business context to help paint a realistic picture, but do not invent unsupported facts
- Avoid generic wording and marketing language
- Exclude out-of-scope modules if specified
- End with a short section on what the narrative implies for MAIA design priorities

Structure:
1. Business context
2. A day in the life of the company
3. Current company DNA
4. Why operations feel heavy today
5. Before and after employee day-in-life narratives by user group
6. What this means for MAIA
```

---

## 9. Prompting Template for a Shorter Narrative

```text
Based on the meeting notes, proposal, and company website, write a concise but vivid company narrative for internal team understanding.

Include:
- what the company does
- a day in the life of the company across departments
- the company’s current operating DNA
- who the core user groups are
- the biggest operational pain today
- how work currently feels for these users
- how MAIA changes that day-to-day experience
- one short “As a [role], I need..., so that...” user story for each main user group

Reasonable assumptions can be made from the business context to complete the picture, but do not invent unsupported facts.

Write in a realistic narrative form, not bullet points.
```

---

## 10. Prompting Template for Extracting Inputs First

Use this before writing if the raw materials are messy.

```text
Using these files and notes, extract the inputs needed to write a company narrative.

Return:
1. Business context
2. Main divisions
3. Customer types
4. Main user groups
5. Key workflows
6. Current pain points
7. Emotional friction for each user group
8. Before MAIA day-in-life details for each employee group
9. After MAIA day-in-life changes expected for each employee group
10. Company DNA / current operating persona
11. A likely day-in-the-life operating flow across departments
12. Core MAIA value areas
13. Scope exclusions or lower-priority items
14. Grounded assumptions that can be used to paint the narrative
```

---

## 11. Quality Checklist

Before finalizing the narrative, check:

- Does it clearly explain what the company does?
- Does it reflect the actual business divisions?
- Does it show the real user groups?
- Does it include a company-level day-in-the-life view?
- Does it include employee-level day-in-life narratives for the main user groups?
- Does each employee narrative include both before MAIA and after MAIA?
- Does each main employee group have a clear user story line?
- Does it describe the current company DNA clearly?
- Does it explain how work currently happens?
- Does it show specific friction, not vague “inefficiency”?
- Does it include emotional reality without exaggeration?
- Are assumptions grounded and clearly controlled?
- Does the “after” state feel believable?
- Does it connect clearly to MAIA’s role?
- Does it exclude things that are out of scope?
- Would a product team understand what to build after reading it?

---

## 12. Example: SCC-Specific Interpretation

For SCC, the narrative should likely focus on:
- B2B sales and order handling
- finance reconciliation and daily reporting
- field sales updates and meeting capture
- management visibility across these workflows

It should reflect:
- manual intake through WhatsApp, email, fax, and images
- high-value coordination-heavy workflows
- multiple divisions, including foodservice equipment and animal health product
- the fact that repair / work order exists but is not the focus for this narrative if excluded

A likely SCC company DNA, based on current context, is:
- commercially responsive
- highly manual
- chat-and-follow-up driven
- dependent on people to bridge process gaps
- likely strong in relationship handling, weaker in structured visibility

This means the strongest SCC narrative would likely center on:
- indoor sales/admin
- finance
- outdoor sales
- management

For SCC-style narratives, the user-story section should not only say that these teams have manual work. It should show what one normal working day feels like for each of them:
- what indoor sales/admin receives, checks, prepares, and follows up
- what finance has to match, verify, and report
- what outdoor sales captures from customers and passes back internally
- what management can or cannot see without asking the team

---

## 13. Best Practice for Reuse

When creating narratives for future clients, do not start from SCC wording directly.

Instead:
1. extract the raw business and workflow context
2. identify the user groups
3. narrate the company-level day in motion
4. define the company’s operating DNA
5. identify the operational tension
6. write employee day-in-life narratives before MAIA
7. write employee day-in-life narratives after MAIA
8. add one “As a [role]...” user story line per main employee group
9. tie it back to MAIA priorities

The narrative should always feel client-specific.

---

## 14. Suggested Deliverables That Can Follow the Narrative

Once the company narrative is done, it can be used to support:
- requirements gathering questions
- scope framing
- feature prioritization
- SOW drafting
- PRD direction
- onboarding context for internal team members
- stakeholder alignment decks

---

## 15. One-Line Principle

A strong company narrative should make the team feel:
“Now I understand how this business actually runs, what a normal day inside it feels like, how the company currently handles work, why the current way is painful, and why these MAIA features matter.”

## See Also
- [[Requirement Gathering Process]]
- [[User Story Writing Guide]]
- [[PRD Writing Guide]]
- [[Product Overview]]
- [[Workspaces Overview]]
- [[Known Limitations]]
