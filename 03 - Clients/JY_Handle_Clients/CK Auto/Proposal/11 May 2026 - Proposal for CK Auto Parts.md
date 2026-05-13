**Proposal for CK auto parts Prepared by Mindhive | May 2026**

***

*Phase 1 — Internal B2B · Phase 2 — B2B Customer Direct · Future — B2C & Walk-in iPad*

***

## 1. Executive Summary

CK Auto Parts is a specialist B2B automotive parts distributor serving workshops, repair centres, and trade accounts across Malaysia. Their customers — foremen, mechanics, and workshop owners — run high-frequency, time-sensitive operations. They don't browse catalogues. They WhatsApp. They expect a fast answer on availability, a correct price, and the paperwork out the door before their next customer walks in.

Today, CK Auto Parts handles all of this through manual effort: individual WhatsApp threads, spreadsheets, phone calls to the warehouse, and the accumulated knowledge of individual salespeople. The business works because the people in it are good at what they do. But as volume grows, the gap between what the team can manually handle and what the customer base demands is widening.

MAIA closes that gap by acting as a WhatsApp-first operational layer that sits between CK Auto Parts' customers and their inventory and order management backend. It helps the sales team move faster, serve more customers simultaneously, and eliminate the manual steps that create errors and delays — without replacing the human judgement that drives relationships.

> **The goal is simple: to** help CK Auto Parts process parts enquiries faster, generate orders accurately, check stock reliably, and deliver the right paperwork to the right person — using a workflow the sales team will actually adopt.

For CK Auto Parts, the most immediate impact areas are:

* Parts enquiry and stock availability checking via WhatsApp, in real time

* AI-assisted Sales Order generation linked to the vehicle compatibility knowledge base

* Accurate parts recommendation filtered by customer vehicle model — eliminating wrong-part orders

* Xeersoft integration for inventory deduction, invoice generation, and delivery note issuance

* A structured approval gate to protect order accuracy during early-stage rollout

***

## 2. CK Auto Parts' Current Operational Challenges

CK Auto Parts runs multiple workflows that are high-frequency, coordination-heavy, and depend on information flowing correctly between sales staff, warehouse, and the customer — all through WhatsApp.

### A) Parts Enquiries and Orders Are Still Fully Manual

When a workshop foreman messages in asking about availability for a brake pad or a transmission seal, the salesperson checks mentally, calls the warehouse, or scrolls through a price list. If the part is available, they quote verbally. If the customer confirms, the salesperson manually creates an order in a separate system and sends the document back. There is no shared visibility, no automatic stock hold, and no link between the WhatsApp confirmation and the warehouse picking list.

### B) Wrong-Part Orders Are a Persistent Cost

Parts compatibility knowledge lives entirely with individual salespeople. A customer ordering a part for the wrong engine variant, or describing their car by a colloquial name the salesperson misinterprets, results in a return, a replacement, and a damaged relationship. There is no structured database mapping parts to compatible vehicle models, and no system-level check before an order is confirmed.

The same vehicle can be referred to by a dozen different names depending on the year, engine size, and regional slang. Without a master taxonomy resolving all of those aliases to a single standard code, every product search is an exercise in interpretation — and every misinterpretation is a potential mis-order.

### C) Inventory Visibility Is Fragmented Across Locations

CK Auto Parts operates stock across multiple outlet locations. Answering the question "do we have this in stock, and where?" requires manual checking, phone calls to the warehouse, and guesswork about transfer timelines. Parts are often available somewhere — the problem is that availability is invisible to both the salesperson and the customer in real time.

### D) Customer Pricing Consistency Is Hard to Maintain

Different wholesale accounts have different pricing tiers. Returning customers expect the price they were quoted last time. Without a searchable pricing history, salespeople quote from memory or spend time digging through old documents to find the precedent. The time cost of that archaeology multiplies across every returning customer and every re-quote cycle.

### E) Opening to Direct B2B Customer Ordering Creates New Risk

As CK Auto Parts moves toward allowing selected wholesale customers to order directly — without a salesperson in the loop — the risk of wrong-part orders, incorrect quantities, and unvalidated prices increases. Without a structured oversight mechanism, the efficiency gain from self-service is offset by the operational cost of fixing the mistakes it introduces.

***

## 3. What CK Auto Parts Will Get After Implementing MAIA

### A) An Internal Sales Assistant That Runs on WhatsApp

In Phase 1, MAIA operates as a tool for CK Auto Parts' sales staff. The salesman takes the customer enquiry — by phone, in person, or through WhatsApp — and uses MAIA to do the work behind it. They search the customer by name, the full profile auto-populates, and they query parts by name, SKU, or plain-language description. MAIA surfaces only the parts compatible with the customer's registered vehicle, shows live stock availability, and generates a draft Sales Order for the salesman to review before submission.

Once confirmed, the Sales Order pushes to Xeersoft automatically. Xeersoft deducts inventory, generates the invoice for the customer, and issues the delivery note to the internal team. Both documents are delivered via WhatsApp. The entire cycle — from enquiry to confirmed order to paperwork — closes without any manual re-entry.

> **Business outcome:** faster order turnaround, fewer wrong-part mistakes, and less dependency on manual admin — using a workflow the sales team already knows.

### B) A Vehicle-Aware Parts Knowledge Base

MAIA's parts recommendation engine is backed by a structured knowledge base built and maintained by CK Auto Parts' team. Every SKU is mapped to the vehicle models it fits — filtered by generation, engine capacity, transmission type, and year range. Every vehicle model has a master taxonomy that resolves all colloquial names and aliases to a single standard code.

When a salesman searches for an "exhaust pipe suitable for Myvi 1.5av", MAIA resolves the vehicle, queries the compatibility matrix, and returns only parts confirmed to fit that specific variant. When a customer describes a symptom — "leaking oil", "squeaking when braking" — MAIA maps the symptom to likely parts and asks a targeted follow-up question to narrow the recommendation.

> **Business outcome:** wrong-part orders drop because compatibility is checked by the system before the customer commits. New salespeople become immediately useful because the product knowledge lives in MAIA, not in senior staff.

### C) A Direct B2B Customer Ordering Channel via WhatsApp

In Phase 2, selected B2B wholesale customers are given direct access to the same ordering flow through WhatsApp. The AI chatbot — running through Chatwoot — handles the conversation from start to finish. It recognises the customer, retrieves their vehicle profile, checks stock, generates a quotation for review, and converts it to a Sales Order upon confirmation. No salesperson involvement required for standard transactions.

This is not uncontrolled automation. Every order is evaluated against a configurable approval threshold. Standard orders below the threshold flow through automatically. Orders above it are held and a structured notification goes to the designated approver via Chatwoot — one tap to confirm, one tap to reject. The threshold is a configurable setting, not a fixed rule, and can be adjusted as confidence in the system grows.

> **Business outcome:** CK Auto Parts can serve more orders simultaneously without proportionally growing headcount. The salesman's time shifts from order-taking — which MAIA handles — to exceptions, negotiation, and relationship management.

### D) Management Visibility Across Orders and Inventory

With MAIA in place, the question "what is happening right now" has a real-time answer. Active orders, pending approvals, fulfilled shipments, stock levels across locations, customer order histories — all visible from a dashboard without asking anyone to compile a report. The data that currently exists only in WhatsApp threads and individual memories becomes structured, queryable, and actionable.

***

## 4. How MAIA Works

### Scenario A — Salesman Handles a B2B Enquiry (Phase 1)

1. Customer contacts the salesman via WhatsApp, phone, or walk-in.

2. Salesman opens MAIA (via WhatsApp or web dashboard).

3. Salesman searches the customer by name — full profile auto-populates: billing address, shipping address, contact person, email, contact number, and registered vehicles.

4. Salesman searches for the required part by name, SKU, or symptom description (e.g. "brake pad for Myvi 1.3 auto"). MAIA queries the knowledge base and returns only compatible parts with live stock, price, and product photo.

5. Salesman presents options to the customer. Customer confirms what they want.

6. MAIA performs a second stock check at order confirmation. If stock has moved since the first check, salesman is alerted before proceeding.

7. MAIA generates a draft Sales Order — salesman reviews items, quantities, pricing, and delivery details before submitting.

8. Order below RM 1,000: auto-confirmed and pushed to Xeersoft immediately. Order above RM 1,000: notification sent to designated approver via Chatwoot for one-tap confirmation.

9. Xeersoft deducts inventory, generates invoice for customer and delivery note for internal team. Both documents delivered via WhatsApp.

*Outcome: faster processing, fewer wrong-part mistakes, consistent paperwork every time.*

***

### Scenario B — B2B Customer Orders Directly via WhatsApp (Phase 2)

1. Customer sends a WhatsApp message to CK Auto Parts' number.

2. Chatwoot receives the message. System checks whether the contact number is registered.

3. Unknown contact: auto-reply with a clickable link directing them to the main CS number. Conversation ends.

4. Registered contact: AI chatbot greets the customer by name.

5. Returning customer with a registered vehicle: chatbot skips re-registration and asks what they are looking for. New customer: guided registration flow collects vehicle details (plate number, model, engine capacity, transmission, year).

6. Chatbot asks for the required part — guided, maximum 2–3 questions. MAIA queries the knowledge base and returns compatible parts with availability and pricing.

7. Customer confirms order. MAIA runs second stock check. Quotation generated and sent to customer on WhatsApp for review.

8. Customer confirms quotation. Order below threshold: auto-converted to Sales Order and pushed to Xeersoft. Order above threshold: escalated to live agent for approval.

9. Sales Order document returned to customer via WhatsApp. Delivery note sent to internal team.

*Outcome: customers can place orders without calling a salesperson. Volume scales without proportional admin headcount growth.*

***

### Scenario C — Live Agent Escalation

1. AI cannot resolve the customer's request — stock unavailable across all outlets, price negotiation needed, order exceeds threshold, or customer explicitly requests a human.

2. Chatbot sends a holding message to the customer: "Let me connect you with our team."

3. Chatwoot notifies the assigned CS staff via push notification on the Chatwoot app.

4. CS staff opens the app, takes over the conversation — same WhatsApp number, no disruption to the customer.

5. Staff resolves the issue and clicks Resolve in Chatwoot. Case is closed. Future messages from that contact return to AI handling.

*Outcome: complex cases handled by humans without the customer noticing the transition. AI and human operate as a seamless pair.*

***

## 5. Delivery Scope

### Phase 1 — Internal Sales Assistant + Core Infrastructure

Phase 1 builds the operational backbone. Sales staff use MAIA internally to handle customer enquiries, check stock, generate orders, and issue documents. The customer does not interact with the AI directly in this phase.

**Includes:**

1. Internal-facing Sales Assistant via WhatsApp (and optional web dashboard)

2. Customer profile lookup by name — full profile auto-population including billing/shipping address, contact person, email, and contact number

3. Vehicle profile registry — plate number linked to vehicle model, engine capacity, transmission, and year; multi-vehicle support per customer

4. Vehicle taxonomy engine — alias-to-standard-code resolution; admin-managed without code deployment

5. RAG-powered Parts Knowledge Base — Parts Master, Vehicle-Parts Compatibility Matrix, and Symptom-to-Part Mapping

6. Parts search by name, SKU, or symptom description — results filtered to customer's compatible vehicle

7. Two-stage live stock check against Xeersoft (enquiry + order confirmation)

8. Multi-outlet inventory query — automatic fallback to secondary locations with estimated delivery time

9. Draft Sales Order generation with salesman review before submission

10. Approval threshold logic (RM 1,000 default) with Chatwoot notification — one-tap confirm or reject

11. Auto-cancellation of unactioned orders with configurable timeout and inventory release

12. Partial order fulfilment support — in-stock items proceed; out-of-stock tracked separately

13. Xeersoft integration — Sales Order push, inventory deduction, invoice and delivery note generation

14. Invoice delivered to customer via WhatsApp; delivery note to internal team

15. User roles and permissions — salesman, approver, admin

16. Training and go-live support

***

### Phase 2 — B2B Customer Direct Ordering via WhatsApp

Phase 2 opens the same ordering flow to selected B2B wholesale customers directly — no salesperson as intermediary. Phase 2 begins only after Phase 1 has been operated, tested, and stabilised.

**Includes:**

1. Customer-facing AI chatbot via WhatsApp (Chatwoot integration)

2. Contact identification and unknown-contact redirect — clickable deeplink to CS number, no raw number exposed

3. Returning customer recognition — skip registration, retrieve vehicle profile, proceed directly to enquiry

4. New customer guided onboarding — collect vehicle details as part of natural conversation flow

5. Guided conversation in Malay (primary), Mandarin, and English — language auto-detection with mid-conversation switching

6. Quotation generation and WhatsApp delivery — customer reviews before order is confirmed

7. Configurable approval threshold for direct B2B customer orders (to be set at Phase 2 launch)

8. Live agent escalation via Chatwoot — push notification to CS staff, seamless handoff, Resolve button to close case

9. Order auto-cancellation with customer notification

***

### Future State — Not in Current Scope

B2C public retail access is explicitly deferred. CK Auto Parts' management does not want pricing and product availability visible to the general public or to competitors at this stage. The in-store iPad use case — walk-in customers self-serving at a physical location — is architecturally supported by Phase 1's vehicle registry and knowledge base, but the interface and deployment for that touchpoint is not part of the current build.

### Explicitly Out of Scope

Payment processing and point-of-sale functionality. Customer-facing e-commerce. Integration with any system other than Xeersoft and Chatwoot. Automated collections or finance workflow. AI-generated product descriptions or catalogue enrichment. Any feature that requires MAIA to make autonomous decisions without a human confirmation step in the order lifecycle.

***

## 6. Customisation Areas

The base MAIA platform provides the document lifecycle — sales orders, invoices, delivery notes — and the integration architecture. The following capabilities require custom development specific to CK Auto Parts' business.

***

## 7. Setting Up (After Proposal Confirmation)

### Step 1 — Kickoff Workshop (Requirements Confirmation)

* Confirm Phase 1 SOP flows: customer lookup, parts search, draft order, approval, and document delivery

* Finalise Xeersoft API endpoints and confirm placement feature is live and populated

* Define user roles and access boundaries for all staff who will use MAIA

* Confirm approval threshold, auto-cancel timeout, and multi-outlet delivery time estimates

### Step 2 — Data Onboarding

* Export existing customer master data from Xeersoft — migrate into MAIA customer profiles

* Build initial vehicle taxonomy: standard codes, generation ranges, alias table

* Populate Parts Master: SKU data, descriptions, use cases, product photos

* Build Vehicle-Parts Compatibility Matrix: map each part to compatible vehicle codes

* Sync item master and pricing rules from Xeersoft into MAIA

### Step 3 — System Configuration + Integration

* Connect MAIA to Xeersoft via API — configure SO push, inventory deduction, invoice and DO retrieval

* Set up Chatwoot: WhatsApp number connection, CS staff accounts, escalation routing

* Configure approval threshold, auto-cancel timer, and notification recipients

* Set up role-based access for each user's role

### Step 4 — Testing (UAT)

* Test parts search: compatibility filtering, symptom-based queries, unknown part escalation

* Test full order flow: stock check → draft SO → approval → Xeersoft sync → document delivery

* Test edge cases: mixed orders, out-of-stock scenarios, threshold-held orders, auto-cancellation

* Test Chatwoot: live agent escalation, Resolve button, unknown contact redirect

### Step 5 — Training + Go-Live + Hypercare

* Train salespeople on Phase 1 internal flow — WhatsApp commands, customer lookup, parts search, order creation

* Train approvers on Chatwoot app — notification review, confirm and reject actions

* Train admin team on knowledge base maintenance — adding parts, aliases, and compatibility entries

* Go-live support period: account manager available for issues, edge cases, and SOP compliance

***

## 8. What We Provide vs What You Need

***

## 9. Timeline

> Delivery dates are indicative and may change depending on external factors such as availability of Xeersoft API documentation, completeness of parts and vehicle compatibility data, timely client feedback, and other dependencies outside MAIA's control. Any adjustments will be communicated accordingly.

***

## 10. Commercials

### A) One-Time Implementation Fee

***

### B) Payment Terms

***

### C) Monthly Subscription

*Subscription excludes cloud hosting and AI inference costs. GPT usage is estimated at under RM 1,000 per month at standard transaction volumes.*

***

## 11. Acknowledgement & Agreement

This document serves as a baseline specification and commercial framework for MAIA's implementation and usage at CK Auto Parts. By signing below, both parties agree to the commitments, responsibilities, and exclusions set out herein.

**For Mindhive:**

Signature: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Name: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Position: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Date: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

***

**For CK Auto Parts:**

Signature: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Name: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Position: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Date: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

***

*MAIA structures the workflow. Humans remain the decision-makers.*

*Prepared by Mindhive · May 2026*
