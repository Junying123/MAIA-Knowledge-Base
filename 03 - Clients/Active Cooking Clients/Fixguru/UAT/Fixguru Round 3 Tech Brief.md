---
owner: Gareth
status: draft
last_reviewed: 2026-06-26
uat_round: 3
sources: "Granola — MAIA <> Fixguru UAT (Onsite) 24 Jun 2026 · Ivan's raw notes (Lark) · Fixguru UAT prep & brief 16 Jun 2026"
---

# Fixguru Round 3 — Tech Brief

**Session:** MAIA <> Fixguru UAT (Onsite), 24 June 2026
**Attendees (Mindhive):** Ivan, Gareth, Jermaine, Azib, Brendan, Bryan, Johnson
**Attendees (Fixguru):** Ivan Cyh (Marcus), Yvonne (not on recording but referenced), Azib
**Source of truth:** Granola session notes + Ivan's raw notes (Lark wiki) + UAT prep brief (16 Jun)

Each issue below covers: client feedback verbatim/paraphrased → product gaps → tech gaps → actions.

---

## Issue 1 — Historical Pricing Display

**Feedback (Fixguru UAT, 24 Jun)**
> "Sales team needs historical pricing per customer per item before proceeding with any order. Current chatbot only shows one transaction line — incomplete and misleading. Need at least 5 historical transactions per item with date. Clean table — one glance. Grand total not needed at this stage. Same feedback given across multiple sessions."

Yvonne's walkthrough: user specifies G3-100, G1-300, PM72-500 → if any historical pricing, surface based on invoiced amount → chatbot returns table for each item → ask user which price to proceed with.

**Gaps — Product team**
- No table format spec ever written (columns, row count, sort order)
- No rule documented for min row requirement (client said 3 is too few — never written down)
- No clarity that grand total must be suppressed (still appears in some mocks)
- No spec distinguishing invoice-source vs draft-SO-source — assumed same
- Date column never included in any spec but client explicitly requires it (signals price drift)

**Gaps — Tech team**
- API returning only 1 transaction line per item instead of 5+
- No date field in current response
- Source mixing: pulling from draft SOs as well as invoices (wrong source)
- Discount % not calculated correctly against standard unit price
- Table format not implemented — still returning inline text wall

**Action — Product**
- [ ] Write table spec: columns = Date | Item Code | Qty | Std Unit Price | Discount % | Net Price | Invoice ID
- [ ] Define min 5 rows hard rule (3 is explicitly too few; client-stated)
- [ ] Define sort: most recent first
- [ ] Confirm: source = confirmed invoices only, never draft SOs
- [ ] Remove grand total from chatbot response — total visible in PDF only

**Action — Tech**
- [ ] Rebuild historical pricing API: return date, qty, std price, discount %, net price, invoice ID per row (Afiq / Wei Yon)
- [ ] Filter source to confirmed invoices only — exclude draft SOs
- [ ] Return min 5 rows; if fewer than 5 invoices exist, return all available + note count
- [ ] Output as structured table (not inline text); format for display in chat or web panel

---

## Issue 2 — Chatbot Verbosity and Response UX

**Feedback (Fixguru UAT, 24 Jun)**
> "Responses are too long, too many numbers, hard to scan in one glance. Sales staff will revert to AutoCount if Maya is slower or more confusing. Key principle: Maya adapts to the user, not the other way around. Short forms and natural language must be accepted."
> "People who use MAIA are very simple minded. If a head of department needs 5 minutes to digest, their team will take much longer. MAIA must be super direct." — Ivan's raw notes

**Gaps — Product team**
- No response length spec or "max message" rule
- No rule for single-action-per-message
- No definition of which response can use enrichment vs. which must be stripped bare
- "Not found = not found" principle never formalised — bot still over-explains missing data

**Gaps — Tech team**
- Bot still returning multi-paragraph responses for single queries
- Quick reply options cluttered with extra context
- No token/character limit enforced on chatbot output
- Over-enrichment on "item not found" path — should return 1 line only

**Action — Product**
- [ ] Define chatbot response spec: max 3 lines per message, one action/question per turn
- [ ] Write rule: if not found, return exactly "No record found for [item]. Proceed with standard price?" — nothing else
- [ ] Define which messages get table format vs. plain text

**Action — Tech**
- [ ] Rewrite chatbot prompts to enforce single-step flow (Afiq)
- [ ] Remove all enrichment beyond what was requested
- [ ] Enforce output constraint: chatbot must not return more than X characters before forcing a new turn

---

## Issue 3 — Order Creation Flow Sequence

**Feedback (Fixguru UAT, 24 Jun)**
> "Confirm to proceed with quotation, yes, that's all. User wants a super simple flow. One step at a time — no multi-question prompts."
> Ideal flow: (1) identify customer by phone → (2) retrieve historical pricing table → (3) "Proceed with these prices?" yes/no → (4) generate QTN/SO → (5) ask for delivery method

**Gaps — Product team**
- No happy-path flow spec written step-by-step with exact bot messages
- No rule that SO/QTN must not generate before user confirms price
- No defined fallback if customer confirms partial items only

**Gaps — Tech team**
- Bot generating QTN/SO before user confirms price selection
- Bot asking multiple questions in same message
- No state machine enforcing sequential steps

**Action — Product**
- [ ] Write step-by-step happy-path spec: each step = one bot message + one user response + transition condition
- [ ] Define exact wording for each prompt (pricing confirmation, delivery prompt, etc.)
- [ ] Define fallback: if user skips a step, what bot does

**Action — Tech**
- [ ] Add flow guardrail: QTN/SO generation gated on explicit user price confirmation (Afiq)
- [ ] Implement strict sequential step model — each step blocks next until resolved
- [ ] Add state tracking per conversation so user can resume mid-flow

---

## Issue 4 — Customer Lookup by Phone Number

**Feedback (Fixguru UAT, 24 Jun)**
> "Leads and prospects — always know either phone number or WhatsApp, but sometimes don't even know their name. Mobile field in AutoCount is a unique identifier for most customers."

**Gaps — Product team**
- No customer search priority spec (phone → landline → name)
- No spec for what happens when phone number returns multiple matches
- No lead/prospect creation flow if customer not found
- No confirmation step spec before order is created under matched customer

**Gaps — Tech team**
- Search only using name or one phone field; not covering both mobile and landline
- No confirmation shown to user before proceeding — silent auto-match risk
- Branch/contact not synced: SO/DN defaults to HQ contact instead of matched branch

**Action — Product**
- [ ] Define search priority: phone/mobile → landline → name; confirmation shown before proceeding
- [ ] Define lead/prospect creation: if no match, offer "Create as lead?" requiring phone only
- [ ] Define confirmation prompt: "Is this [Customer Name], [Branch]? Yes / No"

**Action — Tech**
- [ ] Search both `phone` and `mobile` columns in AutoCount (Wei Yon)
- [ ] Show confirmation before proceeding — no silent auto-match
- [ ] Sync branch/contact to SO/DN from matched customer, not HQ default

---

## Issue 5 — Discount Calculation Accuracy

**Feedback (UAT prep, 16 Jun + UAT session, 24 Jun)**
> "Price list rate and SSC found to be different during testing — discount must use price list rate (standard selling price), not the item price. Unique price discount vs. total line item discount are separate values; both must be shown correctly."

Client during session: discount % varies by customer and quantity — not standardised globally. Some customers have pre-agreed fixed prices below standard.

**Gaps — Product team**
- No documented rule for which price is the base for discount % calculation (price list vs SSC vs item price)
- Pre-approved customer-item price mappings concept never specced
- No rule for whether pre-approved prices bypass the minimum price approval trigger

**Gaps — Tech team**
- Discount calculation using item price instead of price list rate (price list vs SSC bug, flagged 16 Jun — unresolved)
- Only showing unit discount, not total line discount
- No support for customer-item pre-approved price bypass

**Action — Product**
- [ ] Define rule: discount % = (price list rate − net price) / price list rate
- [ ] Define pre-approved customer-item pricing concept: customer + item + agreed net price → no approval triggered
- [ ] Write spec for showing both unit discount and total line discount on order

**Action — Tech**
- [ ] Fix discount base: use price list rate not item price (Amirul / Afiq)
- [ ] Show unit discount AND total line item discount in response
- [ ] Implement pre-approved customer-item price bypass in approval check logic

---

## Issue 6 — Approval Blocks: Credit Limit and Minimum Price

**Feedback (Fixguru UAT, 24 Jun)**
> "Credit limit block on order — miss opportunity to collect money and invoice. Fix guru side: credit limit block on DN. If customer has high outstanding etc., will block on DN. Based on DO value, will block."
> "Sales order minimum discount by item: minimum price needs approval. Which roles can bypass? Check with Azib screenshot on AutoCount."
> "Team approves manually after verifying bank transfer slip even if AR not yet knocked off."

**Gaps — Product team**
- Block level never locked in writing (order vs DN — client leans DN but no formal confirmation)
- Which roles can bypass min price / credit limit block: unknown — waiting on Azib's AutoCount screenshot
- Two distinct approval paths not defined: AR-negative (prepaid) vs credit-limit-exceeded are separate flows
- Pre-approved customer-item prices still triggering minimum price approval block incorrectly

**Gaps — Tech team**
- Block currently triggers at SO level, not DN/DO level
- Approval flow not split: AR-negative and credit-limit-exceeded treated as one flow
- No visibility shown to approver (Ivan): AR, pending SO/DN amount, credit limit, available balance
- Pre-approved prices not bypassing minimum price check

**Action — Product**
- [ ] Lock block level in writing: block at DN submit, not SO creation (pending client formal confirmation)
- [ ] Chase Azib for AutoCount screenshot of both blocks + bypass roles (Ivan to action)
- [ ] Write two distinct approval flows: (A) AR-negative → approve on bank-in slip; (B) credit-limit-exceeded → case-by-case bank-in approval
- [ ] Define approver view: must show AR, pending SO/DN value, credit limit, available balance

**Action — Tech**
- [ ] Move credit block trigger from SO to DN submit (Wei Yon)
- [ ] Separate approval routing: AR-negative path vs credit-limit path → both route to Ivan
- [ ] Build approver context panel: show AR, pending SO/DN, credit limit, available balance
- [ ] Implement pre-approved customer-item price bypass in minimum price check

---

## Issue 7 — Language Bug (Malay Mid-Conversation)

**Feedback (Ivan's raw notes, 24 Jun)**
> "Chatbot quick replies use Malay suddenly when majority of the chat is in English. To check."

**Gaps — Product team**
- No language consistency rule documented in any spec
- No definition of how bot determines user language (first message? WhatsApp locale?)

**Gaps — Tech team**
- Quick reply label generation not respecting conversation language
- Language detection not implemented or not propagated to quick reply builder

**Action — Product**
- [ ] Define rule: quick reply labels must match detected conversation language throughout session
- [ ] Define language detection trigger: first user message language = session language

**Action — Tech**
- [ ] Fix quick reply generation: pass session language to reply builder; no fallback to Malay (Afiq)
- [ ] Test: send English order → verify all quick replies in English end-to-end

---

## Issue 8 — WhatsApp Latency vs Telegram

**Feedback (Ivan's raw notes, 24 Jun)**
> "Observation from chatbot in WhatsApp: the latency is a bit longer vs Telegram."

**Gaps — Product team**
- No latency SLA defined; no acceptable response time spec documented

**Gaps — Tech team**
- Root cause of WhatsApp-vs-Telegram latency gap unknown
- No profiling done on API call chain for WhatsApp path

**Action — Product**
- [ ] Define latency SLA: acceptable response time target (e.g. <5 seconds from user send to bot reply)

**Action — Tech**
- [ ] Profile WhatsApp API call chain vs Telegram — identify bottleneck (Wei Yon)
- [ ] If WhatsApp API webhook is the constraint, investigate batching or async response pattern
- [ ] Report findings to product before next UAT

---

## Issue 9 — AutoCount External ID Not Returned on Submit

**Feedback (UAT prep, 16 Jun)**
> "External ID from AutoCount must be returned and stored on SO/invoice after push. Currently returning internal ID in some cases. On submit: push to AutoCount first, then return external ID in response."

**Gaps — Product team**
- No spec for which ID to surface to user after submit (internal MAIA ID vs AutoCount external ID)

**Gaps — Tech team**
- Submit flow returning MAIA internal ID in some cases instead of AutoCount external document ID
- External ID not consistently mapped back after AutoCount push

**Action — Product**
- [ ] Spec: after SO/invoice submit, display AutoCount external document ID to user (not MAIA internal ID)

**Action — Tech**
- [ ] Fix push flow: push to AutoCount → receive external ID → return external ID in bot response (Bryan)
- [ ] Ensure external ID stored on MAIA SO/invoice record for traceability

---

## Issue 10 — Custom Item Naming and Item Retrieval Fallback

**Feedback (Ivan's raw notes, 24 Jun)**
> "Fixguru has G5 as a base item, but they create customised G5: {Customer Name} G5. Item retrieval — if not match, also return historical items that the customer ordered."

**Gaps — Product team**
- No spec for custom item naming convention or how to resolve `{Customer Name} G5` back to base item G5
- No defined fallback behaviour when item not found in catalogue

**Gaps — Tech team**
- Item search not handling customer-variant naming pattern
- Dead-end returned when item not found — no fallback to customer order history

**Action — Product**
- [ ] Define item retrieval priority: exact match → strip prefix and match base item → customer historical items
- [ ] Define fallback message: "No exact match for [item]. Closest match: [base item]. Historically ordered items: [list]"

**Action — Tech**
- [ ] Implement 3-tier item lookup: exact → prefix-stripped base item → customer invoice history (Wei Yon / Afiq)
- [ ] Return historical items ordered by that customer when no match found — never return a dead-end

---

## Issue 11 — FOC Items and Partial Fulfillment

**Feedback (Fixguru UAT, 24 Jun)**
> "FOC items: customer ordered 1000, production 1050 → 50 are free. Partial fulfillment: if stock short, issue DO for available stock, backorder remainder. Maya should support adjusting SO quantity and issuing DO directly."

**Gaps — Product team**
- FOC flow never specced: how FOC quantity appears on DO; whether it reduces stock; billing logic
- Partial fulfillment flow not defined: no spec for mid-SO quantity adjustment or partial DO

**Gaps — Tech team**
- FOC items creating duplicate lines instead of consolidated FOC line (flagged in UAT prep 16 Jun)
- Partial DO not supported — system requires full quantity or nothing
- No mechanism for user to adjust SO quantity mid-flow and issue DO for available portion

**Action — Product**
- [ ] Write FOC spec: FOC qty = production overage; bill billable qty; deduct billable + FOC from stock; FOC line on DO at RM 0
- [ ] Write partial fulfillment spec: user can say "change G3 from 1000 to 990, issue DO today" → system adjusts SO, issues partial DO, backlogs remainder

**Action — Tech**
- [ ] Consolidate FOC lines: deduplicate into single FOC line per item (Bryan)
- [ ] Support partial DO against SO: allow DO quantity < SO quantity; track backorder remainder (Wei Yon)
- [ ] Implement natural-language SO quantity adjustment in bot flow

---

## Issue 12 — Warehouse / Shelf Configuration

**Feedback (Fixguru UAT, 24 Jun)**
> "Current AutoCount setup ties shelf to item UOM, not to sub-warehouse structure. Industry standard: shelf as sub-warehouse within rack within HQ warehouse. Need to investigate correct AutoCount module."

**Gaps — Product team**
- Warehouse structure never properly mapped from Fixguru's AutoCount setup
- Assumption made that AutoCount handles shelf as sub-warehouse — not validated

**Gaps — Tech team**
- Wrong module being used for shelf-level tracking (tied to item UOM instead of sub-warehouse)
- Picking list and DN not showing correct shelf/warehouse info

**Action — Product**
- [ ] Align with Fixguru on intended warehouse structure (HQ → rack → shelf hierarchy)
- [ ] Validate with AutoCount vendor if sub-warehouse module supports this structure

**Action — Tech**
- [ ] Investigate correct AutoCount module for sub-warehouse/shelf configuration (Azib / Wei Yon)
- [ ] Reconfigure shelf as sub-warehouse; update picking list and DN to reflect correct location

---

## Issue 13 — Dual Interface / Hybrid UX (Open Decision)

**Feedback (Fixguru UAT, 24 Jun)**
> "MAIA's perhaps a dual interface — chat + front. Perhaps the chat is on the right side bar. The key point: sales people have to do manual data entry, but to complete the order they rely on rich information best surfaced in the front end. The chat interface has its limitations."
> "Marcus's feedback: chatbot intuitive, user-guided flow. Dual interface concept positively received."

**Gaps — Product team**
- No explicit decision made on chat-only vs dual interface vs image/table card approach
- Dual interface scoped as open discussion — not costed or assigned to a phase
- Without this decision, pricing table display spec cannot be finalised

**Gaps — Tech team**
- No feasibility spike on hybrid chat + web panel
- No design spec to build towards; risk of building table in wrong medium

**Action — Product**
- [ ] Make explicit decision by Day 1 (25 Jun): chat-only / dual interface / image card — must be locked before table spec is finalised
- [ ] If dual interface: define scope — Phase 1 or costed CR?

**Action — Tech**
- [ ] Feasibility spike: can web panel be embedded alongside WhatsApp chat? Timeboxed 1 day (Jermaine / Amirul)
- [ ] Spike must not delay P0 fixes — run in parallel if possible

---

## Source Notes

| Source | Date | Used for |
|---|---|---|
| Granola — MAIA <> Fixguru UAT (Onsite) | 24 Jun 2026 | Issues 1–7, 10–13 |
| Ivan's raw notes (Lark wiki) | 24 Jun 2026 | Issues 1, 2, 7, 8, 10 |
| Granola — Fixguru UAT prep & brief | 16 Jun 2026 | Issues 5, 9, 11 |

## See Also

- [[UAT/3rd backward final UAT action plan for Fixguru]] — prioritised action plan with owners and dates
- [[UAT/Fixguru Round 3 UAT Acceptance Criteria]] — user-perspective pass/fail criteria
- [[Meetings/2026-06-24 Fixguru UAT Debrief]] — Ivan's raw session notes
