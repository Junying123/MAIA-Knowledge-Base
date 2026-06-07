
## Product Spec v0.7

---

## Part A — What This Is and Why It Exists

### The Problem with Today

Most businesses running on ERPNext have one number for a customer's credit health: their outstanding invoice balance. That number is wrong — not because it's calculated incorrectly, but because it's incomplete.

Here is what that number misses:

A salesperson creates a Sales Order for RM 40,000. The customer already has RM 28,000 in unpaid invoices against a RM 30,000 credit limit. ERPNext's native check fires at SO submission and blocks the order — good. But the salesperson had already spent 45 minutes on the phone with the customer confirming the order. The block is a surprise. Nobody knew the customer was that close to the limit before the conversation started.

Worse: the customer also has another RM 15,000 worth of goods that were delivered last week but haven't been invoiced yet. That value isn't in the outstanding invoice balance at all. The real exposure is RM 43,000 — already 43% over the limit — but the system showed RM 28,000 and nobody caught it.

And worse still: there's a draft quotation the sales team was about to convert to an order. Nobody saw that coming either.

This is a cash flow risk, a relationship risk, and an operational chaos problem that compounds silently until it explodes.

### What MAIA Does Differently

MAIA replaces the single outstanding-invoice number with a four-layer exposure model. Every layer represents a real financial commitment at a different stage of certainty:

- **What's overdue** — invoices past their due date. The highest urgency signal. These aren't just money owed; they're money owed that should already have been collected.
- **What's billed but not yet paid** — submitted invoices within terms, net of any payments already received but not yet matched.
- **What's been committed but not yet billed** — open Sales Orders where goods have shipped or work has started, but no invoice has been raised yet.
- **What's in the pipeline** — draft orders and active quotations. Not confirmed commitments, but impending ones.

Every user who touches a customer-facing document — a quotation, a sales order, an invoice — sees the relevant layer of this picture at the right moment. Finance sees everything. Sales sees what they need to avoid creating problems. The chatbot surfaces the right signal without the user having to ask.

---

## Part B — The Four-Layer Exposure Model

### Layer 0 — Overdue (past due date, unpaid)

> The most urgent signal. These invoices are past their payment terms. Every day they sit is a collection risk and a relationship signal.

```
Layer 0 = SUM(outstanding_amount on submitted SI
              WHERE due_date < today
              AND outstanding_amount > 0)
```

- A subset of Layer 1 — overdue invoices are always counted in Layer 1 as well
- Surfaced separately because the urgency is categorically different: these are not "not yet due," they are "missed"
- Overdue amount drives a separate status flag: payment_overdue = true on Customer
- Triggers its own notification chain independent of credit limit status (a customer can be within their credit limit but still have overdue invoices)
- Oldest overdue invoice age is surfaced alongside the amount: "RM 8,000 overdue — oldest invoice 47 days past due"

**Overdue ageing buckets (displayed on customer card and finance dashboard):**

|Bucket|Definition|
|---|---|
|Current|Due date >= today|
|1-30 days|Due date 1-30 days ago|
|31-60 days|Due date 31-60 days ago|
|61-90 days|Due date 61-90 days ago|
|>90 days|Due date >90 days ago|

---

### Layer 1 — Hard Exposure (billed, unpaid, within or past terms)

> What the customer formally owes right now. The number that enforces credit limits.

```
Layer 1 = max(0,
    SUM(SI.outstanding_amount   on submitted SI, outstanding_amount > 0)
  - SUM(PE.unallocated_amount   on submitted PE, payment_type = Receive)
  - SUM(CN.outstanding_amount   on submitted Credit Notes, outstanding > 0)
  + SUM(PV.unallocated_amount   on submitted Payment Vouchers, unallocated > 0)
)
```

- Use `SI.outstanding_amount` (not `grand_total`) — outstanding_amount already reflects allocated payments; this avoids double-counting reconciled entries
- Deducts unallocated Payment Entries (floating received cash not yet matched to an invoice)
- Deducts outstanding Credit Notes not yet applied to an invoice
- Adds unallocated Payment Vouchers (committed outgoing value not yet applied)
- **This is the number used for credit limit enforcement at SO submission**
- Layer 0 (overdue) is a subset of this number — it does not add to it

**Utilisation % = Layer 1 / Credit Limit x 100**

This is what the whiteboard confirms: 12k / 30k = 40%. The utilisation percentage is based on hard billed exposure only, not unbilled. Layers 2 and 3 are risk intelligence, not enforcement inputs (unless client configures otherwise — see Part E).

---

### Layer 2 — Soft Exposure (open SO, not yet billed)

> What will land as an invoice soon. Goods shipped, work in progress, or orders confirmed and in fulfilment.

```
Layer 2 = SUM(grand_total x (1 - per_billed / 100)
              on submitted SO
              WHERE status NOT IN ('Completed', 'Cancelled', 'Closed'))
```

- **Do not use `per_billed %` field** — compute directly from linked submitted SIs per SO to get exact unbilled amount; the percentage field may be stale or miscalculated
- Represents the unbilled portion of all open submitted Sales Orders
- Includes SOs where partial billing has occurred (some invoices raised, remainder unbilled)
- Excludes draft (docstatus=0) and cancelled SOs
- **Counts toward credit limit enforcement by default** — unbilled SO value is real committed exposure, not theoretical
- Whether Layer 2 blocks or routes to approval is governed by the per-customer `bypass_credit_limit_check` flag on the Customer Credit Limit child table (see Part B.1 — Credit Control Settings)
- A customer whose orders are consistently fulfilled before billing carries real exposure that Layer 1 alone understates

Whiteboard example: SO grand_total = 30k, one linked SI for 8k (submitted) → Layer 2 = 22k.

---

### Layer 3 — Indicative Exposure (draft orders + active quotations)

> What is about to be committed. Not confirmed, but impending.

```
Layer 3 = SUM(grand_total on draft SO, docstatus=0)
         + SUM(grand_total on submitted QT
               WHERE status NOT IN ('Lost', 'Cancelled', 'Ordered'))
```

- Draft SOs: saved but not yet submitted
- Active Quotations: live QTs that could convert to SO at any time
- Never used for hard credit block — advisory only, displayed to sales manager and finance
- Triggers a soft inline warning when a draft SO is saved

---

## Part B.1 — Per-Customer Credit Control Settings

ERPNext supports a **Credit Limit child table** on the Customer doctype (`Customer Credit Limit`), one row per company. MAIA extends this table with two additional control flags that govern enforcement behaviour per customer per company.

### Child Table: Customer Credit Limit (Extended)

ERPNext v15 already has `bypass_credit_limit_check` as a native field on this child table. Confirmed fieldname from source: `bypass_credit_limit_check`, label: "Bypass Credit Limit Check at Sales Order". When checked natively, ERPNext skips the SO-level check and defers to SI/DN instead.

**MAIA does not use the native check at all** — the native `check_credit_limit()` function is fully replaced by MAIA's `run_credit_check_on_so()` hook. The native `bypass_credit_limit_check` field is repurposed as MAIA's credit limit enforcement toggle rather than adding a duplicate custom field. One new custom field is added: `block_on_overdue`.

|Field|Type|Standard/Custom|MAIA Usage|
|---|---|---|---|
|company|Link → Company|Standard|Which company this row applies to|
|credit_limit|Currency|Standard|Hard credit ceiling for MAIA exposure check|
|bypass_credit_limit_check|Check|**Standard — repurposed**|When **unchecked** (default): MAIA enforces credit limit block on SO. When **checked**: credit limit is advisory only for this customer — warning shown but no block fired. Note: label inverted from native intent; consider relabelling to "Block on Credit Limit Breach" in the UI via Custom Translations if this causes confusion|
|block_on_overdue|Check|**Custom — new**|When checked (default): MAIA blocks SO if customer has any overdue invoices (Layer 0 > 0), regardless of limit utilisation|

### How the Flags Work Together

Both flags are independent. Either can trigger a block independently of the other.

```
at SO submission:

credit_breach = (Layer 1 + Layer 2 + new SO grand_total) > credit_limit
overdue_breach = Layer 0 > 0

block_triggered = (credit_breach AND NOT bypass_credit_limit_check)
               OR (overdue_breach AND block_on_overdue)

if block_triggered:
    → route to Credit Controller approval
    → fire credit block notification
    → stamp breach reason on SO
```

### Breach Reason Stamp

A new custom field `credit_breach_reason` on Sales Order records why the block fired. Possible values:

|Value|Condition|
|---|---|
|`credit_limit`|credit_breach only|
|`overdue`|overdue_breach only|
|`credit_limit_and_overdue`|both conditions true|
|`none`|no breach|

This field is surfaced on the SO form and in the Credit Controller notification so the reviewer knows exactly why the block fired.

### Resolved Business Rules (from FQ1–FQ3)

**FQ1 — Unallocated PE reduces Layer 1:** Yes. Confirmed. Unallocated payment entries reduce Layer 1 at check time. Formula locked.

**FQ2 — Layer 2 blocks:** Yes. Unbilled SO value counts toward credit limit enforcement. Controlled per customer via `bypass_credit_limit_check` (repurposed native field). Default: unchecked = blocking. A Credit Controller must explicitly check the bypass to make a customer advisory-only.

**FQ3 — Overdue blocks:** Yes. Any overdue invoice triggers a block on new SO submission. Controlled per customer via `block_on_overdue` flag. Default: checked (blocking) for all new customers.

Default state: `bypass_credit_limit_check` unchecked (MAIA enforces), `block_on_overdue` checked (MAIA blocks on overdue). A Credit Controller must explicitly change these to relax enforcement — deliberate opt-out, not accidental.

---

## Part C — Frontend Render Spec

### C.1 Where Credit Exposure Appears

Credit exposure surfaces in five locations:

1. **Customer Profile page** — full four-layer breakdown, always visible to Finance User
2. **Sales Order form** — compact credit bar in the sidebar when a customer is selected
3. **Quotation form** — same compact credit bar as SO
4. **Sales Invoice form** — compact bar, with overdue flag if relevant
5. **Finance Dashboard** — aggregate table of all customers by exposure status

---

### C.2 Customer Profile — Full Credit Panel

Authoritative view. Finance Users and Sales Managers see this on the Customer doctype page.

**Layout:**

```
+---------------------------------------------------------------------+
|  CREDIT STANDING                                          [LIVE]     |
+---------------------------------------------------------------------+
|                                                                      |
|  Credit Limit                                        RM 30,000       |
|                                                                      |
|  [========== green ==========>              ]  40%                  |
|  Layer 1 (Billed)  RM 12,000                                        |
|                                                                      |
|  [============================>+++++++++++++]  +60% unbilled        |
|  Layer 2 (Unbilled SO)  RM 18,000   (stacked, lighter fill)        |
|                                                                      |
|  Layer 3 (Draft + QT)   RM  5,000   (dotted extension past bar)    |
|                                                                      |
+---------------------------------------------------------------------+
|  [!] OVERDUE                                                         |
|  RM 4,500 past due  .  Oldest: INV-2026-00112  .  47 days overdue  |
|                                                                      |
|  1-30d     31-60d     61-90d     >90d                               |
|  RM 1,200  RM 3,300   RM 0       RM 0                               |
+---------------------------------------------------------------------+
|  Status:  [green] Within Limit    Utilisation: 40%                  |
|           [!] Overdue invoices present                               |
+---------------------------------------------------------------------+
```

**Stacked utilisation bar behaviour:**

The utilisation bar is a horizontal stacked bar with three segments:

- **Segment 1 (solid, colour-coded):** Layer 1 as % of credit limit
- **Segment 2 (lighter fill, same colour family):** Layer 2 as additional % — stacked right of Segment 1
- **Segment 3 (dotted outline only):** Layer 3 — stacked right of Segment 2, dotted to visually signal "not confirmed"

If Segment 1 + Segment 2 exceeds 100%, the bar fills completely and a red overflow indicator extends past the right edge with the overflow amount labelled.

**Colour states (Segment 1 drives the status colour):**

|Utilisation (Layer 1 / Limit)|Colour|Status Badge|
|---|---|---|
|< 70%|Green|Within Limit|
|70-89%|Amber|Near Limit|
|90-99%|Orange|Approaching Limit|
|>= 100%|Red|Over Limit|

Overdue status is independent of colour state. A customer can be green (within limit) but still show the overdue warning banner below the bar.

**Overdue section:**

- Only rendered if Layer 0 > 0
- Shows total overdue amount, oldest invoice name and age in days
- Ageing bucket breakdown rendered as a small horizontal breakdown row
- Clicking any bucket opens a filtered list of the relevant invoices

**Drill-down:** Every layer amount is clickable. Clicking opens a filtered list view of the underlying documents (SI for Layer 1, SO for Layer 2, QT/draft SO for Layer 3). Finance User can action directly from drill-down (raise invoice, send payment reminder, allocate PE).

---

### C.3 SO / QT / SI Form — Compact Credit Bar

A single-line inline component shown in the document sidebar immediately when a customer is selected. Occupies one row. Full detail is accessible via hover popover — the bar itself never expands.

---

**One-liner: default state (clean customer)**

```
● Within Limit   40%   RM 12k / RM 30k
```

- Colour-coded status dot + label
- Utilisation %
- Layer 1 / Credit Limit in compact RM notation
- All left-to-right, single line, no wrapping

**One-liner: overdue present (within limit)**

```
● Within Limit   40%   RM 12k / RM 30k   ⚠ RM 4.5k overdue
```

- Overdue indicator appended to the right of the limit figures
- ⚠ icon + overdue amount only — no age, no bucket — detail is in the popover
- Overdue text colour: amber (1–30d), orange (31–60d), red (>60d)

**One-liner: breach state (SO form only, appears as line items push projected exposure over limit)**

```
⛔ Credit approval required   113%   RM 34k / RM 30k   ⚠ RM 4.5k overdue
```

- Status dot replaced by ⛔ icon; label changes to "Credit approval required"; full line turns red
- Utilisation shows projected % (includes this order's value), not current
- Overdue indicator retained if present

**One-liner: no credit limit set**

```
○ No credit limit   —   ⚠ RM 4.5k overdue
```

- Grey dot, no utilisation %, no RM figures; overdue still shows if present

---

**Hover Popover**

Triggered on hover over the one-liner. Appears as a floating card anchored to the bar. Dismissed on mouse-out. Contains the full detail the one-liner intentionally omits.

Popover content — clean customer:

```
┌────────────────────────────────────────────┐
│  Credit Standing                           │
│                                            │
│  Credit Limit        RM 30,000             │
│  Billed & unpaid     RM 12,000   (40%)     │
│  Unbilled orders     RM 18,000             │
│  Total exposure      RM 30,000   (100%)    │
│                                            │
│  [=======>++++++++++]                      │
│   Layer 1  Layer 2                         │
└────────────────────────────────────────────┘
```

Popover content — overdue present:

```
┌────────────────────────────────────────────┐
│  Credit Standing                    ⚠      │
│                                            │
│  Credit Limit        RM 30,000             │
│  Billed & unpaid     RM 12,000   (40%)     │
│  Unbilled orders     RM 18,000             │
│  Total exposure      RM 30,000   (100%)    │
│                                            │
│  [=======>++++++++++]                      │
│                                            │
│  Overdue             RM  4,500             │
│  Oldest invoice      47 days past due      │
│  1–30d  RM 1,200  ·  31–60d  RM 3,300     │
└────────────────────────────────────────────┘
```

Popover content — SO form with projection (appears once SO has line items):

```
┌────────────────────────────────────────────┐
│  Credit Standing                           │
│                                            │
│  Credit Limit        RM 30,000             │
│  Billed & unpaid     RM 12,000   (40%)     │
│  Unbilled orders     RM 18,000             │
│  This order          RM  8,000             │
│  ─────────────────────────────             │
│  After submission    RM 38,000   (127%)  ⛔ │
│                                            │
│  [==============================▓]         │
│  RM 8,000 over limit                       │
│                                            │
│  Overdue             RM  4,500             │
│  Oldest invoice      47 days past due      │
│  Reason:  Credit limit + Overdue           │
└────────────────────────────────────────────┘
```

**Popover render rules:**

- Layer 3 (draft pipeline) not shown — too noisy for a transactional context
- Bar in the popover uses the same stacked visual: solid (Layer 1) + lighter fill (Layer 2); overflow nub if breached
- Ageing buckets in the popover show only non-zero buckets
- Popover is read-only — no actions; clicking through to the customer profile is the action path (link at popover bottom: "View full credit profile →")
- On touch/mobile: popover triggered by tap, dismissed by tap outside

---

**On SO form — always visible, not silent:**

Credit exposure is surfaced immediately when the customer is selected. The one-liner is always present from that point. No user action required to see it.

On customer selection (before any line items):

```
● Within Limit   40%   RM 12k / RM 30k   ⚠ RM 4.5k overdue
```

As line items are added and SO grand_total grows, the utilisation % in the one-liner updates in real time to show projected utilisation (current exposure + this order). If projected exposure crosses the breach threshold, the one-liner flips to breach state immediately — the user sees it while they are still building the order, not at submit time.

The user sees this before they save or submit. No surprises at the submit gate.

**On Save (draft) with breach projected:**

MAIA saves the SO draft normally (docstatus remains 0). The breach state on the form persists — the warning does not clear. No notification fires. Credit Controller is not involved until the SO is submitted.

**On Submit with breach:**

Server-side check confirms breach. SO submits (docstatus → 1) but remains in a held state — **no workflow state transition is implemented at this stage** (pending the Sales Order workflow build). The SO is submitted and the `credit_limit_breach` flag is stamped. The form shows a post-submit banner:

```
⚠ This order has been submitted and is awaiting credit approval.
  The credit controller has been notified and will review shortly.
  You will be notified of the outcome.
```

The SO is visible to the Credit Controller via their ToDo, which links directly to the SO document. They action it from there (approve or reject via the MAIA endpoint). There is no workflow state gate on fulfilment at this stage — that will be added when the SO workflow layer is built.

**Implication for fulfilment:** Until the workflow layer exists, a credit-breached SO can technically proceed to Pick List / DN if someone triggers it. This is an accepted gap for the current build phase. The notification and breach flag are the controls in place. A note should be added to the SO form for Credit Controller users indicating the order is awaiting review.

If no breach, SO submits normally with no additional messaging.

---

### C.4 Finance Dashboard — Exposure Table

Sortable table of customers ranked by exposure status. Available as a widget on the Finance User home dashboard and as a standalone report.

**Columns:**

|Column|Description|
|---|---|
|Customer|Name + credit status badge|
|Credit Limit|Configured limit|
|Layer 1 (Billed)|Hard exposure|
|Layer 0 (Overdue)|Overdue subset, highlighted red if >0|
|Oldest Overdue|Days since oldest unpaid due date|
|Layer 2 (Unbilled)|Soft exposure|
|Layer 3 (Pipeline)|Indicative exposure|
|Utilisation %|Layer 1 / limit, colour-coded bar|
|Total Exposure|Layer 1 + Layer 2|

**Default sort:** Overdue amount descending, then utilisation descending.

**Filters:** Credit status (Within / Near / Over), Overdue (Yes / No), Company (if multi-entity).

**Quick actions per row:**

- Send payment reminder — triggers notification to customer (if WABA connected)
- View customer — navigates to Customer profile with full credit panel
- View overdue invoices — filtered SI list

---

## Part D — Chatbot Surface Spec

The chatbot surfaces credit exposure at three document-creation points and on direct query. The posture is always: inform, then let the user decide. Not block. Not lecture.

---

### D.1 Context Injection

The chatbot loads the customer's credit exposure snapshot as part of the context frame whenever:

- A customer is set or confirmed on a document (QT, SO, SI)
- The user asks about a customer directly
- A document creation task is initiated via chat

The credit snapshot injected into context:

- Layer 0 (overdue amount + oldest age in days)
- Layer 1 (hard exposure + utilisation %)
- Layer 2 (unbilled SO)
- Credit limit
- credit_status field value
- payment_overdue flag

This snapshot is not narrated to the user unprompted unless a trigger condition below is met. It is available to the reasoning engine to inform tone and warnings.

---

### D.2 Quotation Creation

**Clean (within limit, no overdue):** No credit mention. Proceed normally.

**Overdue exists, within limit:**

After customer is confirmed, before line items:

```
Before we build the quotation — [Customer] has RM 4,500 in 
overdue invoices (oldest: 47 days). They're within their credit 
limit so this won't block the order, but you may want Finance 
to follow up on the outstanding balance.

Ready to add line items?
```

User can proceed. No gate. Chatbot logs credit_notice_surfaced = true on the QT.

**Near limit (70-99%) or over limit:**

```
Heads up — [Customer] is at 87% of their credit limit 
(RM 26,000 of RM 30,000 billed and outstanding).

The quotation can still be drafted. If it converts to an order, 
it will be routed for credit approval before confirmation.

Continue?  [Yes]  [Check their account first]
```

"Check their account first" surfaces the Layer 0-2 breakdown and links to the customer profile.

**Over limit (>= 100%):**

```
[!] [Customer] is currently over their credit limit — 
RM 38,000 outstanding against a RM 30,000 limit.

You can still draft the quotation, but any order from this 
quotation will require Finance approval before confirmation.

Overdue:         RM 4,500  (47 days past due)
Unbilled orders: RM 18,000

Continue drafting?  [Yes]  [No, hold for now]
```

---

### D.3 Sales Order Creation

**Clean:** Silent. No credit mention.

**Overdue exists:**

After SO is built and total is known, before user confirms submission:

```
Ready to submit SO-XXXX for RM 8,000.

One thing to note: [Customer] has RM 4,500 in overdue 
invoices. Submitting will bring total outstanding to 
RM 20,000 (67% of limit).

Submit now?  [Yes, submit]  [Save as draft]
```

**Would breach limit on submission:**

```
This order would bring [Customer] over their credit limit.

Current exposure:    RM 26,000
This order:         +RM  8,000
Total after:         RM 34,000  (113% of RM 30,000 limit)

Submitting will route this order for Finance approval. 
It won't be confirmed until approved.

Submit for approval?  [Yes]  [Save as draft]  [Cancel]
```

**Already over limit, new SO is below de minimis (default RM 500 or 2% of limit):**

```
[Customer] is over their credit limit. This order will be 
submitted for Finance approval as usual.

Submit?  [Yes]  [Cancel]
```

---

### D.4 Invoice Creation

**Overdue invoices exist:**

Before confirming the SI:

```
Creating INV-XXXX for RM 6,000 against SO-XXXX.

Note: [Customer] already has RM 4,500 in overdue invoices 
(oldest 47 days). You may want to send a payment reminder 
alongside this invoice.

Create invoice?  [Yes]  [Yes + send reminder]  [Cancel]
```

"Yes + send reminder" creates the SI and queues a payment reminder for the existing overdue invoices — not the new invoice, which is not yet due.

**This SI would push billed exposure over limit:**

```
This invoice will bring [Customer]'s billed outstanding to 
RM 32,000 — over their RM 30,000 credit limit.

The invoice can still be raised. Finance will be notified 
automatically.

Create invoice?  [Yes]  [Cancel]
```

Finance notification fires at SI submission regardless of the user's chat response — this is a Critical event per the notification protocol.

---

### D.5 Direct Credit Query

**Triggers:** "What's [Customer]'s credit standing?", "Are we okay to take another order from Tan Brothers?", "How much can we still bill to Shangri-La?"

**Chatbot response format:**

```
[Customer] — Credit Summary

Credit Limit:        RM 30,000
Billed Outstanding:  RM 12,000  (40% utilised)  [Within Limit]
Overdue:             RM  4,500  (oldest: 47 days past due)
Unbilled Orders:     RM 18,000
Pipeline (Drafts):   RM  5,000

Total committed exposure: RM 30,000  (100% of limit)
Remaining headroom:       RM 0 — at limit when unbilled is included

Overdue invoices:
  INV-2026-00112  RM 3,300  due 29 Mar 2026  (47 days)
  INV-2026-00098  RM 1,200  due 2 Apr 2026   (43 days)

Want to send a payment reminder, or see the full account?
```

Chatbot always ends a credit summary with an action offer — it does not just report.

If the user asks "can we take another order," chatbot calculates projected utilisation:

```
If you're thinking of a new order, what's the approximate value? 
I can tell you what that would do to their credit position.
```

---

## Part E — Configuration

### E.1 Instance-Level Settings (per client deployment)

|Parameter|Options|Default|Notes|
|---|---|---|---|
|credit_check_mode|route_to_approval / warn_only|route_to_approval|Hard block removed — routing is the standard path|
|tier3_soft_warning_enabled|true / false|true|Draft SO inline warning|
|utilisation_amber_threshold_pct|integer|70|Bar turns amber|
|utilisation_orange_threshold_pct|integer|90|Bar turns orange|
|overdue_chatbot_notice_enabled|true / false|true|Overdue notice during QT/SO|
|overdue_reminder_auto_offer|true / false|true|Chatbot offers payment reminder|
|deminimis_threshold_rm|currency|500|Below this, condensed breach copy in chatbot|
|credit_approval_sla_hours|integer|4|Hours before SLA escalation fires|

### E.2 Per-Customer Settings (on Customer Credit Limit child table)

Enforcement granularity lives at the customer level, not the instance level. See Part B.1 for full field spec.

|Flag|Default|Effect when checked|
|---|---|---|
|bypass_credit_limit_check (unchecked)|Unchecked by default|When unchecked: Layer 1 + Layer 2 + new SO > limit routes to Credit Controller|
|block_on_overdue|Checked|Any Layer 0 > 0 routes to Credit Controller|

**Resolved:** unallocated_pe_reduces_tier1 = **always true** (FQ1 confirmed). No per-client toggle needed.

---

## Part F — Business Rules

### F.1 Resolved

|#|Question|Resolution|
|---|---|---|
|FQ1|Does unallocated PE reduce Layer 1 at check time?|**Yes.** Always. No toggle.|
|FQ2|Should Layer 2 (unbilled SO) block?|**Yes.** Per-customer via `bypass_credit_limit_check` (native field, repurposed). Default: unchecked = enforcing.|
|FQ3|Should overdue invoices block new SOs?|**Yes.** Per-customer via block_on_overdue flag. Default: checked.|

### F.2 Still Open

|#|Question|Impact|
|---|---|---|
|FQ4|cRFQ-linked QTs in Layer 3 — in or out?|Layer 3 query scope|
|FQ5|Credit limit override approval chain — value-bounded approval authority?|Approval workflow spec (not yet designed)|
|FQ6|Credit check per-entity or aggregated across all entities?|Multi-entity instances only|
|FQ7|Overdue ageing threshold for automatic hold — e.g. auto-block only if >30 days, not day 1?|Adds age threshold to block_on_overdue logic|

---

## Part G — ERPNext Implementation Notes

### G.1 Native Credit Limit Override

ERPNext's built-in credit limit check fires on SO submit and only checks outstanding SI values. MAIA overrides this entirely. Set Customer.credit_limit = 0 to disable native check. MAIA's validate hook on Sales Order is authoritative and runs before docstatus transition completes.

### G.2 Custom Fields Required

**On Customer:**

|Field|Type|Purpose|
|---|---|---|
|credit_utilisation_pct|Percent|Layer 1 / limit, updated on each check|
|credit_status|Select: OK / Near Limit / Approaching Limit / Over Limit|Customer card display|
|payment_overdue|Check|True if any SI past due date|
|overdue_amount|Currency|SUM of Layer 0|
|oldest_overdue_days|Int|Days since oldest overdue SI due date|
|layer1_amount|Currency|Snapshot of last check|
|layer2_amount|Currency|Snapshot of last check|
|layer3_amount|Currency|Snapshot of last check|
|credit_last_checked|Datetime|Timestamp of last computation|

**On Sales Order:**

|Field|Type|Purpose|
|---|---|---|
|credit_limit_breach|Check|Flagged if exposure check fails|
|credit_check_tier1|Currency|Layer 1 at submission time|
|credit_check_tier2|Currency|Layer 2 at submission time|
|credit_check_tier3|Currency|Layer 3 at submission time|
|credit_notice_surfaced|Check|Whether chatbot surfaced a credit notice|

### G.3 Exposure Query Skeleton

python

```python
def get_credit_exposure(customer, company):

    # Layer 0: overdue invoices
    layer0 = frappe.db.sql("""
        SELECT SUM(outstanding_amount)
        FROM `tabSales Invoice`
        WHERE customer = %(customer)s
          AND company = %(company)s
          AND docstatus = 1
          AND outstanding_amount > 0
          AND due_date < CURDATE()
    """, {"customer": customer, "company": company})[0][0] or 0

    oldest_overdue_days = frappe.db.sql("""
        SELECT DATEDIFF(CURDATE(), MIN(due_date))
        FROM `tabSales Invoice`
        WHERE customer = %(customer)s
          AND company = %(company)s
          AND docstatus = 1
          AND outstanding_amount > 0
          AND due_date < CURDATE()
    """, {"customer": customer, "company": company})[0][0] or 0

    # Layer 1: all outstanding SI net of unallocated PE
    layer1_si = frappe.db.sql("""
        SELECT SUM(outstanding_amount)
        FROM `tabSales Invoice`
        WHERE customer = %(customer)s
          AND company = %(company)s
          AND docstatus = 1
          AND outstanding_amount > 0
    """, {"customer": customer, "company": company})[0][0] or 0

    layer1_pe = frappe.db.sql("""
        SELECT SUM(unallocated_amount)
        FROM `tabPayment Entry`
        WHERE party = %(customer)s
          AND company = %(company)s
          AND party_type = 'Customer'
          AND payment_type = 'Receive'
          AND docstatus = 1
          AND unallocated_amount > 0
    """, {"customer": customer, "company": company})[0][0] or 0

    # Outstanding credit notes not yet applied
    layer1_cn = frappe.db.sql("""
        SELECT SUM(outstanding_amount)
        FROM `tabSales Invoice`
        WHERE customer = %(customer)s
          AND company = %(company)s
          AND docstatus = 1
          AND is_return = 1
          AND outstanding_amount < 0
    """, {"customer": customer, "company": company})[0][0] or 0

    # Unallocated payment vouchers
    layer1_pv = frappe.db.sql("""
        SELECT SUM(unallocated_amount)
        FROM `tabPayment Entry`
        WHERE party = %(customer)s
          AND company = %(company)s
          AND party_type = 'Customer'
          AND payment_type = 'Pay'
          AND docstatus = 1
          AND unallocated_amount > 0
    """, {"customer": customer, "company": company})[0][0] or 0

    # layer1_cn is negative (credit notes reduce what customer owes), so subtract its absolute value
    layer1 = max(layer1_si - layer1_pe + layer1_cn + layer1_pv, 0)

    # Layer 2: unbilled SO value — computed directly from linked submitted SIs, not per_billed %
    layer2 = frappe.db.sql("""
        SELECT SUM(so.grand_total - IFNULL(billed.invoiced, 0))
        FROM `tabSales Order` so
        LEFT JOIN (
            SELECT soi.sales_order, SUM(si.grand_total) AS invoiced
            FROM `tabSales Invoice Item` soi
            JOIN `tabSales Invoice` si ON si.name = soi.parent
            WHERE si.docstatus = 1
            GROUP BY soi.sales_order
        ) billed ON billed.sales_order = so.name
        WHERE so.customer = %(customer)s
          AND so.company = %(company)s
          AND so.docstatus = 1
          AND so.status NOT IN ('Completed', 'Cancelled', 'Closed')
    """, {"customer": customer, "company": company})[0][0] or 0

    # Layer 3: draft SOs + active QTs
    layer3_so = frappe.db.sql("""
        SELECT SUM(grand_total)
        FROM `tabSales Order`
        WHERE customer = %(customer)s
          AND company = %(company)s
          AND docstatus = 0
    """, {"customer": customer, "company": company})[0][0] or 0

    layer3_qt = frappe.db.sql("""
        SELECT SUM(grand_total)
        FROM `tabQuotation`
        WHERE party_name = %(customer)s
          AND company = %(company)s
          AND docstatus = 1
          AND status NOT IN ('Lost', 'Cancelled', 'Ordered')
    """, {"customer": customer, "company": company})[0][0] or 0

    layer3 = layer3_so + layer3_qt

    credit_limit = frappe.db.get_value("Customer", customer, "credit_limit") or 0
    utilisation_pct = round((layer1 / credit_limit * 100), 1) if credit_limit > 0 else 0

    return {
        "layer0_overdue": layer0,
        "oldest_overdue_days": oldest_overdue_days,
        "layer1": layer1,
        "layer2": layer2,
        "layer3": layer3,
        "credit_limit": credit_limit,
        "utilisation_pct": utilisation_pct,
        "total_hard": layer1 + layer2,
        "total_with_draft": layer1 + layer2 + layer3,
        "payment_overdue": layer0 > 0,
    }
```

> Warning: skeleton only. Needs index review on due_date, customer, docstatus columns before production use. Run EXPLAIN on SI and SO queries at target data volume.

### G.4 Trigger Points for Re-computation

Customer credit snapshot fields are recomputed on:

- SI submission, cancellation, or amendment
- PE submission or cancellation
- SO submission or cancellation
- QT status change (Lost / Cancelled / Ordered)
- Scheduled background job every 4 hours (catches due_date crossovers — a customer's invoice crosses its due date at midnight without any document event firing; without this job, payment_overdue would not flip until the next document event)

---

## Part H — Notification Triggers

Integrates with notification serving protocol v3.

|Event|Priority|Recipients|Template|
|---|---|---|---|
|SO submission triggers credit breach (Layer 1+2 > limit)|Critical|Finance User + Sales Manager|Detail — fires regardless of window/phase|
|Customer crosses utilisation threshold (e.g. 80%)|Non-critical|Finance User|Summary/Lite per normal serving logic|
|Invoice becomes overdue (day 1)|Non-critical|Finance User|Summary/Lite|
|Invoice overdue >30 days|Non-critical|Finance User + Sales Manager|Lite with escalation flag|
|Invoice overdue >60 days|Critical|Finance User + Sales Manager|Detail|

---

## Part J — Acceptance Criteria

Each criterion maps to a specific layer, surface, or behaviour defined in this spec. All criteria must pass before the feature is considered shippable. Criteria are grouped by functional area.

---

### J.1 Exposure Computation

|#|Criterion|Pass Condition|
|---|---|---|
|AC-EXP-01|Layer 0 correctly identifies overdue invoices|SUM of SI.outstanding_amount where SI.due_date < today matches Layer 0 value on customer record|
|AC-EXP-02|Layer 0 oldest overdue age is correct|oldest_overdue_days = DATEDIFF(today, MIN(due_date)) across all overdue SI for the customer|
|AC-EXP-03|Layer 1 formula correct|Layer 1 = max(0, SUM(SI.outstanding_amount) - SUM(PE.unallocated_amount, payment_type=Receive) - SUM(CN.outstanding_amount, is_return=1) + SUM(PV.unallocated_amount, payment_type=Pay)); floor at 0|
|AC-EXP-04|Layer 1 does not double-count overdue invoices|A SI that is both overdue and unpaid appears in Layer 1 total once — Layer 0 is a subset display, not an additive value|
|AC-EXP-05|Layer 2 reflects unbilled SO value correctly|SUM(SO.grand_total - invoiced_amount_per_so) for all open submitted SOs matches Layer 2; invoiced_amount_per_so computed from linked submitted SI grand_totals, not per_billed % field|
|AC-EXP-06|Layer 2 excludes Completed, Cancelled, Closed SOs|Re-running exposure after SO is closed reduces Layer 2 by that SO's unbilled value|
|AC-EXP-07|Layer 3 includes draft SOs (docstatus=0)|Saving a draft SO for a customer increases that customer's Layer 3 by the SO grand_total|
|AC-EXP-08|Layer 3 includes active submitted QTs|A submitted QT not in Lost/Cancelled/Ordered status contributes its grand_total to Layer 3|
|AC-EXP-09|Layer 3 excludes won/lost/cancelled QTs|QT converted to SO (status=Ordered), or Lost/Cancelled, does not appear in Layer 3|
|AC-EXP-10|Utilisation % = Layer 1 / credit_limit x 100|Computed value matches formula; rounded to 1 decimal place|
|AC-EXP-11|Utilisation % is 0 when credit_limit = 0|No divide-by-zero; UI shows "No credit limit set"|
|AC-EXP-12|Unallocated PE floor at 0|If PE unallocated > SI outstanding, Layer 1 = 0, not negative|

---

### J.2 Exposure Recomputation Triggers

|#|Criterion|Pass Condition|
|---|---|---|
|AC-TRG-01|SI submission updates customer credit snapshot|Within 5 seconds of SI docstatus → 1, Customer.layer1_amount, credit_status, payment_overdue reflect the new SI|
|AC-TRG-02|SI cancellation updates customer credit snapshot|Within 5 seconds of SI cancellation, Layer 1 and Layer 0 reduce by the cancelled SI's outstanding_amount|
|AC-TRG-03|PE submission updates Layer 1|Within 5 seconds of PE docstatus → 1, Layer 1 reduces by PE.unallocated_amount|
|AC-TRG-04|SO submission updates Layer 2|Within 5 seconds of SO docstatus → 1, Layer 2 increases by SO unbilled value|
|AC-TRG-05|SO cancellation updates Layer 2|Within 5 seconds of SO cancellation, Layer 2 reduces accordingly|
|AC-TRG-06|QT status change updates Layer 3|When QT moves to Ordered/Lost/Cancelled, Layer 3 reduces by that QT's grand_total within 5 seconds|
|AC-TRG-07|Background job flips payment_overdue at due date crossover|At next scheduled job run after a SI's due_date passes, Customer.payment_overdue = true and Layer 0 reflects that SI|
|AC-TRG-08|Background job runs at minimum every 4 hours|Scheduled job execution logs show runs at <= 4h intervals; no missed runs during business hours|

---

### J.3 Credit Enforcement at SO Submission

|#|Criterion|Pass Condition|
|---|---|---|
|AC-ENF-01|SO submission triggers credit check|validate hook fires on every SO submission; credit check runs before docstatus transitions to 1|
|AC-ENF-02|credit_limit_breach = true when exposure exceeds limit|When Layer 1 + Layer 2 + new SO grand_total > Customer.credit_limit, SO.credit_limit_breach is set to 1|
|AC-ENF-03|Breach submits SO with breach flag set|When credit_limit_breach = 1 and credit_check_mode = route_to_approval, SO docstatus = 1 and credit_limit_breach = 1; no workflow_state transition at this build phase|
|AC-ENF-04|Breach hard-blocks when mode = block|When credit_check_mode = block, SO submission raises a validation error; docstatus remains 0|
|AC-ENF-05|Warn-only mode submits but flags|When credit_check_mode = warn_only, SO submits normally but credit_limit_breach = 1 is persisted and notification fires|
|AC-ENF-06|Credit snapshot fields are stamped on SO at check time|credit_check_tier1, credit_check_tier2, credit_check_tier3 on SO reflect the values computed at the moment of submission — not recalculated later|
|AC-ENF-07|QT-to-SO conversion also triggers credit check|Converting a won QT to SO runs the same credit check as direct SO submission|
|AC-ENF-08|Native ERPNext credit check is disabled|Customer.credit_limit = 0 (or native check suppressed); MAIA hook is the sole enforcement point; no double-block|

---

### J.4 Credit Controller Override

|#|Criterion|Pass Condition|
|---|---|---|
|AC-OVR-01|Only Credit Controller role can approve a blocked SO|Users without Credit Controller role do not see the Approve / Override button on a breached SO (credit_limit_breach=1)|
|AC-OVR-02|Credit Controller approve action clears breach flag|On approval, SO.credit_limit_breach = 0; SO remains docstatus=1; override log entry written; owner notified|
|AC-OVR-03|Credit Controller reject action returns SO to Draft|On rejection, SO.docstatus = 0; credit_rejection_reason is required and stored; owner notified with reason|
|AC-OVR-04|Override is logged|Every override action (approve or reject) writes a log entry: actor, role, timestamp, Layer 1/2/3 values at override time, SO value, action taken|
|AC-OVR-05|Sales User is notified on override outcome|When Credit Controller approves or rejects, the Sales User who created the SO receives a notification per the notification protocol|
|AC-OVR-06|Override does not recalculate exposure|The credit snapshot stamped at submission time (AC-ENF-06) is the reference for the override decision — live exposure is shown for context but does not re-trigger enforcement|

---

### J.5 Frontend — Customer Profile Panel

|#|Criterion|Pass Condition|
|---|---|---|
|AC-FE-01|Stacked bar renders all three segments|Layer 1 (solid), Layer 2 (lighter fill), Layer 3 (dotted) visible as distinct segments on the bar|
|AC-FE-02|Colour state follows utilisation thresholds|Bar segment 1 colour changes correctly at amber (default 70%), orange (90%), red (100%) thresholds|
|AC-FE-03|Overdue banner only renders when Layer 0 > 0|No overdue section shown when all invoices are current; banner appears immediately when any SI becomes overdue|
|AC-FE-04|Ageing buckets are accurate|Overdue amounts in each bucket match SI.outstanding_amount for invoices in the correct date range|
|AC-FE-05|Overflow indicator renders when Layer 1+2 > limit|Bar fills to 100% and an overflow label shows the excess amount in RM|
|AC-FE-06|Layer amounts are clickable drill-downs|Clicking Layer 1 value opens filtered SI list; Layer 2 opens filtered SO list; Layer 3 opens filtered QT/draft SO list|
|AC-FE-07|Panel data is live|Panel refreshes automatically when an underlying document event fires (SI submitted, PE allocated, etc.) without requiring page reload|

---

### J.6 Frontend — Compact Sidebar Bar (SO / QT / SI Forms)

|#|Criterion|Pass Condition|
|---|---|---|
|AC-FE-08|One-liner appears immediately on customer selection|Within 2 seconds of customer being set on the form, the single-line credit indicator renders with current status, utilisation %, and RM amounts|
|AC-FE-09|Overdue indicator appended to one-liner when payment_overdue = true|The ⚠ overdue amount token appears on the one-liner regardless of utilisation status; full overdue detail (age, buckets) is in the hover popover|
|AC-FE-10|Projected utilisation updates in real time on SO form|As SO grand_total changes, the "After submission" projected utilisation recalculates without page reload|
|AC-FE-11|Breach warning replaces status badge when projected > limit|When projected utilisation >= 100%, the status badge is replaced by the blocking/routing warning with correct button options|
|AC-FE-12|One-liner degrades gracefully when credit_limit = 0|"No credit limit" shown with grey dot; overdue indicator still renders if present; hover popover still available|

---

### J.7 Chatbot Surfaces

|#|Criterion|Pass Condition|
|---|---|---|
|AC-CB-01|Credit context is loaded when customer is set|Within one chatbot turn of a customer being confirmed on a task, the credit snapshot (Layer 0–3, utilisation, payment_overdue) is available in context|
|AC-CB-02|No credit mention for clean customers|When utilisation < amber threshold and payment_overdue = false, chatbot does not reference credit during QT/SO/SI creation|
|AC-CB-03|Overdue notice fires during QT creation when overdue exists|If payment_overdue = true, chatbot surfaces the overdue notice before requesting line items; user can proceed without restriction|
|AC-CB-04|Near-limit notice fires during QT creation|If utilisation >= 70%, chatbot surfaces the near-limit notice with the two action buttons|
|AC-CB-05|Over-limit warning fires during QT creation|If utilisation >= 100%, chatbot surfaces the over-limit warning with correct exposure breakdown|
|AC-CB-06|Overdue callout included in SO submission confirmation|If payment_overdue = true, the pre-submission confirmation message includes the overdue amount and age|
|AC-CB-07|Breach warning fires before SO submission|If projected Layer 1+2+new SO > credit_limit, chatbot surfaces the breach warning with Submit for Approval / Save as Draft options|
|AC-CB-08|De minimis condensed copy for small SOs on over-limit customers|When customer is already Over Limit and new SO < de minimis threshold, chatbot uses condensed copy (not full breach breakdown)|
|AC-CB-09|Payment reminder offered during SI creation when overdue exists|If payment_overdue = true at SI creation, chatbot offers "Yes + send reminder" option|
|AC-CB-10|Direct credit query returns correct four-layer summary|Chatbot response to a credit standing query includes Layer 0–3 values, utilisation %, overdue invoice list, and an action offer|
|AC-CB-11|credit_notice_surfaced logged on QT|When chatbot fires an overdue/near-limit/over-limit notice during QT creation, QT.credit_notice_surfaced = true is written to the doctype|

---

### J.8 Per-Customer Credit Control Flags

|#|Criterion|Pass Condition|
|---|---|---|
|AC-FLAG-01|bypass_credit_limit_check gates credit limit enforcement|When bypass_credit_limit_check = true on customer credit settings, an SO that exceeds the credit limit submits without routing to approval (advisory only)|
|AC-FLAG-02|block_on_overdue flag gates overdue enforcement|When block_on_overdue = false, an SO submitted for a customer with overdue invoices submits without routing to approval|
|AC-FLAG-03|Both flags true triggers block on either condition|An SO that triggers either credit breach or overdue breach routes to Credit Controller when respective flag is true|
|AC-FLAG-04|credit_breach_reason correctly stamped|SO.credit_breach_reason = "credit_limit" when only limit breached; "overdue" when only overdue; "credit_limit_and_overdue" when both; "none" when clean|
|AC-FLAG-05|Default for new customers is strictest enforcement|A newly created customer with no Credit Limit child table row returns bypass_credit_limit_check=False and block_on_overdue=True from get_customer_credit_settings|
|AC-FLAG-06|Settings are company-scoped|Customer with block_on_overdue=True for Company A and block_on_overdue=False for Company B blocks on overdue for Company A only|

---

### J.9 SO Form — Credit Visibility on Creation

|#|Criterion|Pass Condition|
|---|---|---|
|AC-FE-13|One-liner renders on customer selection, before any line items|Within 2 seconds of customer being set, one-liner shows status badge, utilisation %, RM figures, and overdue token if applicable — not deferred to save or submit|
|AC-FE-14|One-liner flips to breach state in real time during order building|As SO line items are added, projected utilisation updates in real time; when breach threshold is crossed, one-liner flips to ⛔ breach state before the user saves or submits|
|AC-FE-15|Draft save preserves breach state on one-liner|After saving a breached SO as draft, the form re-opens with the one-liner in breach state (⛔); it does not revert to clean state|
|AC-FE-17|Hover popover renders on mouseover|Hovering over the one-liner displays the popover with Layer 0/1/2 breakdown, bar visual, overdue detail (if applicable), and projection section (SO form only when grand_total > 0)|
|AC-FE-18|Hover popover dismisses on mouseout|Popover disappears when mouse leaves the one-liner or the popover itself|
|AC-FE-19|Popover projection section appears only on SO form with line items|On QT and SI forms, and on SO form before any line items, the projection section is absent from the popover|
|AC-FE-20|Popover is read-only|No interactive controls in the popover except the "View full credit profile" link|
|AC-FE-16|Post-submit confirmation replaces breach warning when approved|On submit of a breached SO, the form breach warning is replaced by the "submitted for credit approval" confirmation banner|

---

## Part K — Backend Action Spec

This section specifies every server-side action that implements the credit exposure feature. For each action: trigger, input, computation, side effects, and error handling.

---

### K.1 `get_credit_exposure(customer, company)` — Core Computation Function

**Type:** Utility function — called by hooks, API endpoints, and chatbot context loader.

**Trigger:** Called explicitly; not event-driven.

**Inputs:**

- `customer` (str) — Customer.name
- `company` (str) — Company.name

**Computation:** As per the query skeleton in Part G.3.

**Returns:** Dict with layer0_overdue, oldest_overdue_days, layer1, layer2, layer3, credit_limit, utilisation_pct, total_hard, total_with_draft, payment_overdue.

**Error handling:**

- If customer does not exist: raise ValueError, log, return None
- If credit_limit field is missing or null: treat as 0; no enforcement; log warning
- If any SQL query fails: log full traceback, return last known snapshot from Customer fields, raise alert to ops channel

**Performance contract:** Must complete in < 300ms at P95 for a customer with up to 500 open SIs, 200 open SOs, 100 QTs. Index requirements: `tabSales Invoice(customer, company, docstatus, due_date)`, `tabSales Order(customer, company, docstatus, status)`, `tabQuotation(party_name, company, docstatus, status)`, `tabPayment Entry(party, company, party_type, payment_type, docstatus)`.

---

### K.2 `update_customer_credit_snapshot(customer, company)` — Snapshot Writer

**Type:** Side-effect function — writes computed exposure back to Customer doctype fields.

**Trigger:** Called after any document event that changes exposure (see K.5–K.9). Also called by the scheduled job (K.10).

**Inputs:**

- `customer` (str)
- `company` (str)

**Actions:**

1. Call `get_credit_exposure(customer, company)`
2. Write results to Customer custom fields:
    - `layer1_amount`, `layer2_amount`, `layer3_amount`
    - `overdue_amount`, `oldest_overdue_days`
    - `payment_overdue` (bool)
    - `credit_utilisation_pct`
    - `credit_status` (derived from utilisation_pct against configured thresholds)
    - `credit_last_checked` (now())
3. `frappe.db.set_value` — bypass document-level hooks to avoid recursive trigger loops
4. Emit a `credit_snapshot_updated` realtime event on the customer channel so the frontend panel refreshes without a page reload

**credit_status derivation:**

python

```python
def derive_credit_status(utilisation_pct, thresholds):
    if utilisation_pct >= 100:
        return "Over Limit"
    elif utilisation_pct >= thresholds.get("orange", 90):
        return "Approaching Limit"
    elif utilisation_pct >= thresholds.get("amber", 70):
        return "Near Limit"
    else:
        return "OK"
```

**Error handling:** If write fails, log and raise. Do not silently swallow — a stale snapshot is worse than a visible error.

---

### K.3 `run_credit_check_on_so(so_doc)` — SO Credit Gate

**Type:** Validation hook — called from Sales Order `validate` event.

**Trigger:** `Sales Order.validate` — fires before docstatus transitions.

**Inputs:** `so_doc` — the full Sales Order document object.

**Preconditions:** Only runs when `so_doc.docstatus == 0` and the SO is being submitted (transition to 1). Skip if SO is being saved as draft (no docstatus change).

**Computation:**

python

```python
exposure = get_credit_exposure(so_doc.customer, so_doc.company)
credit_limit = exposure["credit_limit"]

# Stamp snapshot fields on SO at check time
so_doc.credit_check_tier1 = exposure["layer1"]
so_doc.credit_check_tier2 = exposure["layer2"]
so_doc.credit_check_tier3 = exposure["layer3"]

# Read per-customer enforcement flags from Credit Limit child table
customer_credit_settings = get_customer_credit_settings(so_doc.customer, so_doc.company)
# Returns: {"bypass_credit_limit_check": bool, "block_on_overdue": bool, "credit_limit": float}

# Evaluate breach conditions
projected = exposure["layer1"] + exposure["layer2"] + so_doc.grand_total
credit_breach = (
    credit_limit > 0
    and projected > credit_limit
    and not customer_credit_settings["bypass_credit_limit_check"]
)
overdue_breach = (
    exposure["layer0_overdue"] > 0
    and customer_credit_settings["block_on_overdue"]
)

block_triggered = credit_breach or overdue_breach

# Stamp breach reason
if credit_breach and overdue_breach:
    so_doc.credit_breach_reason = "credit_limit_and_overdue"
elif credit_breach:
    so_doc.credit_breach_reason = "credit_limit"
elif overdue_breach:
    so_doc.credit_breach_reason = "overdue"
else:
    so_doc.credit_breach_reason = "none"

if block_triggered:
    so_doc.credit_limit_breach = 1
    mode = get_credit_check_mode(so_doc.company)  # instance-level setting

    if mode == "route_to_approval":
        # No workflow state transition at this build phase — workflow layer not yet implemented
        # SO submits (docstatus = 1), credit_limit_breach = 1 is the control flag
        # Credit Controller is notified via ToDo linking to the SO document
        fire_credit_block_notification(so_doc, exposure)
    elif mode == "warn_only":
        # submits; notification fires; no approval gate
        fire_credit_block_notification(so_doc, exposure)
else:
    so_doc.credit_limit_breach = 0
    so_doc.credit_breach_reason = "none"
```

**Helper: `get_customer_credit_settings(customer, company)`**

Fetches the matching row from the Customer Credit Limit child table for the given company. Returns default values (bypass_credit_limit_check=False, block_on_overdue=True, credit_limit=0) if no row exists for that company.

**Post-action:** After SO save, call `update_customer_credit_snapshot(so_doc.customer, so_doc.company)` via `after_submit` hook — not inside validate (document is not yet committed at validate time).

---

### K.4 `fire_credit_block_notification(so_doc, exposure)` — Credit Controller Alert

**Type:** Notification action — called by K.3 on breach detection.

**Trigger:** Called explicitly from `run_credit_check_on_so` when credit_limit_breach = 1.

**Recipients:**

- All users with role `Credit Controller` scoped to `so_doc.company`
- The Sales Manager linked to the SO's sales team (if configured)

**Priority:** Critical — fires immediately per notification protocol v3, bypasses session window and workday phase gates.

**Channel:** WhatsApp (Detail template) + in-app notification + ToDo creation.

**WhatsApp Detail template content:**

```
[CREDIT BLOCK] SO requires approval
Customer:     {customer_name}
SO:           {so_name}  |  RM {so_grand_total}
Raised by:    {created_by_full_name}

Exposure at submission:
  Billed outstanding:  RM {layer1}
  Unbilled orders:     RM {layer2}
  Overdue:             RM {layer0}  ({oldest_overdue_days}d oldest)

Credit limit:          RM {credit_limit}
Projected total:       RM {projected}  ({utilisation_after}% utilised)

Action required: Review and approve or reject in MAIA.
```

**ToDo creation:**

- Type: `exception` (Q1 priority per notification protocol)
- Assigned to: all Credit Controller users for that company
- Reference doctype: Sales Order
- Reference name: so_doc.name
- Description: "Credit approval required — {customer_name}, RM {so_grand_total}"
- Due: today (same day)

**In-app notification:**

- Standard Frappe notification on the SO document
- Visible to Credit Controller and Sales Manager roles

**Error handling:** If notification dispatch fails, log the failure but do not block the SO state transition — the SO breach state (credit_limit_breach=1) must persist regardless of whether the notification was delivered.

---

### K.5 `on_sales_invoice_submit(doc, method)` — SI Submit Hook

**Trigger:** `Sales Invoice.on_submit`

**Actions:**

1. Call `update_customer_credit_snapshot(doc.customer, doc.company)`
2. Check if newly submitted SI tips overdue bucket (due_date < today at submission time — unusual but possible for backdated invoices): if so, fire overdue day-1 notification (non-critical)

---

### K.6 `on_sales_invoice_cancel(doc, method)` — SI Cancel Hook

**Trigger:** `Sales Invoice.on_cancel`

**Actions:**

1. Call `update_customer_credit_snapshot(doc.customer, doc.company)`
2. If cancellation clears all overdue invoices (layer0 = 0 after recompute), update `payment_overdue = false`

---

### K.7 `on_payment_entry_submit(doc, method)` — PE Submit Hook

**Trigger:** `Payment Entry.on_submit` where `payment_type = "Receive"` and `party_type = "Customer"`

**Actions:**

1. Call `update_customer_credit_snapshot(doc.party, doc.company)`
2. If unallocated_amount > 0 after submission, no additional action — the amount is already deducted from Layer 1 via the query
3. If full allocation reduces Layer 1 below credit_limit and any SO has credit_limit_breach=1 for this customer: surface a notification to Credit Controller ("Customer's outstanding has reduced — review pending SO approval")

---

### K.8 `on_sales_order_submit(doc, method)` — SO Submit Hook

**Trigger:** `Sales Order.after_submit`

**Actions:**

1. Call `update_customer_credit_snapshot(doc.customer, doc.company)`
2. This runs after the credit check in K.3 — snapshot now reflects the new SO's contribution to Layer 2

---

### K.9 `on_quotation_status_change(doc, method)` — QT Hook

**Trigger:** `Quotation.on_update` where status changes to Lost, Cancelled, or Ordered

**Actions:**

1. Call `update_customer_credit_snapshot(doc.party_name, doc.company)`
2. Layer 3 reduces by the QT's grand_total

---

### K.10 `scheduled_credit_snapshot_refresh()` — Background Job

**Trigger:** Scheduled every 4 hours via Frappe's scheduler (`cron`-style config in `hooks.py`)

**Purpose:** Catch overdue transitions that happen at due_date midnight crossover — no document event fires when a SI tips from current to overdue.

**Actions:**

1. Query all customers with at least one submitted, unpaid SI where `due_date < today` and `payment_overdue = false`
2. For each such customer, call `update_customer_credit_snapshot(customer, company)`
3. For any customer where `payment_overdue` flips from false to true in this run, fire overdue day-1 notification (non-critical, per notification protocol)
4. Log job run: start time, end time, customers processed, flips detected

**Performance contract:** Must complete full run in < 2 minutes for up to 10,000 active customers. If runtime exceeds 3 minutes, log a warning and alert ops.

---

### K.11 `approve_credit_blocked_so(so_name, approved_by)` — Credit Controller Override Action

**Type:** API endpoint — called from the SO form Approve button (Credit Controller role only).

**Access control:** `frappe.only_for("Credit Controller")` — raises PermissionError if caller lacks the role.

**Inputs:**

- `so_name` (str) — Sales Order name
- `approved_by` (str) — frappe.session.user (injected server-side, not trusted from client)

**Preconditions:**

- SO must exist
- SO.credit_limit_breach must equal 1 and SO.docstatus must equal 1
- SO.credit_limit_breach must equal 1

**Actions:**

1. Fetch SO document
2. Verify preconditions — raise ValidationError if not met
3. Clear `so_doc.credit_limit_breach = 0` to mark the breach as resolved by Credit Controller — No workflow_state transition at this build phase; the SO is already submitted (docstatus=1)
4. Write override log entry:
    - Doctype: `Credit Override Log` (custom doctype)
    - Fields: so_name, customer, approved_by, action="Approved", timestamp, layer1_at_override, layer2_at_override, layer3_at_override, so_grand_total, credit_limit
5. Save SO
6. Call `update_customer_credit_snapshot(so_doc.customer, so_doc.company)`
7. Notify `so_doc.owner`: "Your SO {so_name} for {customer} has been approved by the credit controller. It is now confirmed." (Non-critical, WhatsApp + in-app)
8. Notify Sales Manager (if configured): In-app only. "SO {so_name} approved by {approved_by}."
9. Return success response

**Error handling:** Wrap in try/except; on failure, roll back and return error — do not leave SO in a partial state.

---

### K.12 `reject_credit_blocked_so(so_name, rejected_by, reason)` — Credit Controller Reject Action

**Type:** API endpoint — called from the SO form Reject button (Credit Controller role only).

**Access control:** `frappe.only_for("Credit Controller")`

**Inputs:**

- `so_name` (str)
- `rejected_by` (str) — frappe.session.user
- `reason` (str) — required; minimum 10 characters; rejection reason

**Preconditions:** Same as K.11.

**Actions:**

1. Fetch SO document
2. Verify preconditions
3. Validate `reason` is non-empty and >= 10 characters — raise ValidationError if not
4. Cancel the SO back to draft: `so_doc.docstatus = 0` — No workflow_state "Credit Rejected" at this build phase; rejection returns SO to docstatus=0 for the owner to rework — A custom field `credit_rejection_reason` on SO stores the reason for the owner's reference
5. Write override log entry with action="Rejected" and reason field populated
6. Save SO
7. Notify `so_doc.owner`: "Your SO {so_name} for {customer} has been rejected. Reason: {reason}. Returned to draft." (Critical, WhatsApp + in-app, bypass window/phase)
8. Notify Sales Manager (if configured): In-app only. "SO {so_name} rejected by {rejected_by}. Reason: {reason}."
9. Return success response

---

### K.13 `Credit Override Log` — Custom Doctype Spec

New doctype required to support the audit trail for override actions (K.11, K.12).

|Field|Type|Required|Notes|
|---|---|---|---|
|name|Data|Auto|Standard Frappe naming|
|so_name|Link → Sales Order|Yes||
|customer|Link → Customer|Yes||
|company|Link → Company|Yes||
|action|Select: Approved / Rejected|Yes||
|reason|Text|Only if Rejected|Rejection reason|
|actioned_by|Link → User|Yes|Credit Controller who actioned|
|actioned_at|Datetime|Yes|Server timestamp|
|layer1_at_override|Currency|Yes|Snapshot at override time|
|layer2_at_override|Currency|Yes||
|layer3_at_override|Currency|Yes||
|so_grand_total|Currency|Yes||
|credit_limit|Currency|Yes||
|projected_exposure|Currency|Yes|Layer 1 + Layer 2 + SO grand_total|

Permissions: Read — Credit Controller, Finance User, Sales Manager. No role can edit or delete — this is an immutable audit log. Insert is system-only (via K.11/K.12 endpoints).

---

### K.14 `get_customer_credit_settings(customer, company)` — Customer Flag Reader

**Type:** Utility function — called by K.3.

**Inputs:**

- `customer` (str) — Customer.name
- `company` (str) — Company.name

**Actions:**

1. Query `Customer Credit Limit` child table where `parent = customer` and `company = company`
2. If row exists, return `{"credit_limit": row.credit_limit, "bypass_credit_limit_check": bool(row.bypass_credit_limit_check), "block_on_overdue": bool(row.block_on_overdue)}`
3. If no row for that company: return `{"credit_limit": 0, "bypass_credit_limit_check": False, "block_on_overdue": True}` (default to strictest — bypass=False means enforce, block_on_overdue=True means overdue blocks)

**Error handling:** If query fails, default to strictest (both flags True, credit_limit 0) and log warning. Never silently skip enforcement due to a settings read failure.

---

## Part L — Notification Spec: Credit Block on SO Submission

This section fully specifies the notification behaviour when an SO is credit-blocked, extending the general notification table in Part H.

### L.1 Event Definition

**Event name:** `so_credit_blocked`

**Event priority:** Critical (per notification protocol v3 §1.1 — business damage is imminent; a confirmed order is in limbo)

**Trigger:** `run_credit_check_on_so` detects breach and sets `credit_limit_breach = 1` in modes `route_to_approval` or `warn_only`. Does not fire in `block` mode (SO never submits; there is nothing to approve).

---

### L.2 Recipients

|Recipient|Condition|Channel|
|---|---|---|
|All users with role `Credit Controller` scoped to SO's company|Always|WhatsApp + In-app + ToDo|
|Sales Manager linked to the SO's sales team|If configured|In-app + ToDo only (observe, not act)|
|SO `owner` (the user who created/submitted the SO)|Always|In-app only — confirms submission received, pending approval|

**Order owner** is `so_doc.owner` (Frappe standard field). This is the Sales User who submitted the order. They receive an immediate in-app confirmation that their order is in the approval queue and they will be notified of the outcome. They do not receive WhatsApp at this point — that fires on the outcome (approve or reject).

Credit Controller is the **primary actor**. Everyone else is informed.

---

### L.3 WhatsApp Template — Credit Controller (Detail, Critical)

Fires immediately regardless of session window state and workday phase (Critical bypass per protocol v3 §1.2). No action buttons in the WhatsApp message — Credit Controller actions from the ToDo in MAIA, which links directly to the SO document.

**Template name:** `maia_so_credit_blocked_v1`

**Message body:**

```
[ACTION REQUIRED] Credit approval needed

Customer:      {customer_name}
Order:         {so_name}
Order value:   RM {so_grand_total}
Raised by:     {created_by_full_name}

Credit position at submission:
  Billed & unpaid:   RM {layer1}
  Unbilled orders:   RM {layer2}
  Overdue amount:    RM {layer0} ({oldest_overdue_days}d oldest)
  Credit limit:      RM {credit_limit}
  Projected total:   RM {projected}  ({utilisation_after}%)

Review in MAIA to approve or reject.
```

**No deep-link buttons.** WhatsApp message sends without action buttons. The Credit Controller must action from the MAIA UI. The ToDo (see L.5) links directly to the SO document — that is the primary action path.

---

### L.4 In-App Notification — Credit Controller

Standard Frappe notification, visible in the notification bell and on the SO document page.

**Subject:** `Credit approval required — {customer_name} | {so_name}`

**Body:**

```
{so_name} for {customer_name} (RM {so_grand_total}) has been 
submitted but is pending your credit approval.

Projected exposure: RM {projected} against RM {credit_limit} limit ({utilisation_after}%).
Overdue: RM {layer0}.

Approve or reject from the Sales Order.
```

---

### L.5 ToDo — Credit Controller

One ToDo created per blocked SO, assigned to all Credit Controller users for the company.

|Field|Value|
|---|---|
|Type|`exception`|
|Priority|Q1|
|Reference Doctype|Sales Order|
|Reference Name|{so_name}|
|Assigned To|All Credit Controller users (company-scoped)|
|Description|`Credit approval required — {customer_name}, RM {so_grand_total}`|
|Due Date|Today|
|Status|Open|

The ToDo's Reference Doctype + Reference Name fields link directly to the SO document. Clicking the ToDo from MAIA's notification panel navigates the Credit Controller to the SO form where they can approve or reject.

ToDo is auto-closed when K.11 (approve) or K.12 (reject) completes successfully.

---

### L.6 In-App Notification — Sales User (Submitter)

Fires at the same time as the Credit Controller notification. Purpose: confirm to the salesperson that their submission was received and is in the approval queue — not silently stuck or lost.

**Subject:** `Your order is pending credit approval — {so_name}`

**Body:**

```
{so_name} for {customer_name} (RM {so_grand_total}) has been 
submitted and is awaiting credit approval before it's confirmed.

You'll be notified when the credit controller reviews it.
```

No action required from the Sales User at this point.

---

### L.7 Outcome Notifications (Post-Override)

**On approval (K.11):**

To SO owner (`so_doc.owner`):

```
Your order {so_name} for {customer_name} has been approved 
by the credit controller and is now confirmed.

RM {so_grand_total} — proceed with fulfilment as normal.
```

Priority: Non-critical. Channel: WhatsApp + in-app per normal serving logic.

To Sales Manager (if configured): In-app notification only. "SO {so_name} for {customer_name} approved by {actioned_by}."

**On rejection (K.12):**

To SO owner (`so_doc.owner`):

```
[ACTION REQUIRED] Your order {so_name} for {customer_name} 
has been rejected by the credit controller.

Reason: {reason}

The order has been returned to draft. Review and resubmit, 
or contact the credit controller for guidance.
```

Priority: Critical (a submitted order became unconfirmed — the owner has work to do). WhatsApp + in-app, bypass window/phase.

To Sales Manager (if configured): In-app notification only. "SO {so_name} for {customer_name} rejected by {actioned_by}. Reason: {reason}."

---

### L.8 Escalation — No Action Within SLA

If the blocked SO (credit_limit_breach = 1, docstatus = 1) has not been actioned (credit_limit_breach not cleared, no Credit Override Log entry) within the configured SLA window (default: 4 business hours), MAIA fires an escalation notification.

**Recipients:** Sales Manager (not Credit Controller — the CC already has a ToDo; this escalates above them if they have not acted)

**Priority:** Non-critical (the CC may be busy; Sales Manager is made aware)

**Channel:** In-app + WhatsApp Lite (open window) or Detail (closed window — borderline, but a 4-hour unapproved order is operationally significant)

**Message:**

```
Credit approval overdue — {so_name} for {customer_name} 
(RM {so_grand_total}) has been pending credit approval 
for {hours_elapsed} hours.

The credit controller has not yet acted. Please follow up.
```

SLA window is configurable per client (`credit_approval_sla_hours`, default 4).

---

![[Pasted image 20260608002056.png]]
## Part M — Changelog

|Version|Change|
|---|---|
|v0.1|Original ERPNext-native credit limit spec (invoice-centric only)|
|v0.2|Reworked to three-tier model per whiteboard brief. Added Layer 2 (unbilled SO), Layer 3 (draft + QT pipeline). Per-client config, open business rules, ERPNext notes, dashboard spec.|
|v0.3|Added Layer 0 (overdue) with ageing buckets. Confirmed utilisation % = Layer 1 / limit only. Full FE render spec. Full chatbot surface spec. Notification trigger table.|
|v0.4|Added Part J (acceptance criteria, 40 criteria across 7 functional areas). Added Part K (backend action spec: 13 actions including hooks, scheduled job, override endpoints, Credit Override Log doctype). Added Part L (full notification spec for credit block event: Credit Controller WhatsApp/in-app/ToDo, Sales User confirmation, outcome notifications, 4-hour SLA escalation). Credit Controller established as the override role.|
|v0.5|Resolved FQ1 (PE reduces Layer 1 always), FQ2 (Layer 2 blocks by default), FQ3 (overdue blocks by default). Added Part B.1 — per-customer Credit Control Settings with block_credit_limit and block_on_overdue flags on Customer Credit Limit child table. Added credit_breach_reason field on SO. Updated K.3 enforcement logic to use per-customer flags and two-condition breach evaluation. Added K.14 (customer flag reader). Updated SO form spec — credit bar visible on customer selection, not deferred to submit. Replaced created_by with so_doc.owner throughout. Removed WhatsApp deeplink (not built); ToDo links to SO document as primary action path. Added outcome notifications to Sales Manager. Added J.8 (flag ACs) and J.9 (SO creation surface ACs). Removed global tier2_counts_toward_hard_limit and block mode configs — replaced by per-customer flags.|
|v0.8|L1 formula corrected: added Outstanding Credit Notes deduction and Unallocated Payment Vouchers addition. L2 formula changed from per_billed % to direct SI-join query per whiteboard + transcript review 2026-05-22. AC-EXP-03 and AC-EXP-05 updated accordingly. G.3 Python skeleton updated for both layers.|
|v0.7|Compact credit bar redesigned as a single one-liner. Detail (Layer breakdown, bar visual, overdue ageing, projection) moved to a hover popover. One-liner shows: status dot + label, utilisation %, RM figures, and an overdue token when relevant. Breach state flips the full one-liner red with ⛔. Popover shows full breakdown including projection row on SO form. Added ACs AC-FE-17 through AC-FE-20 for popover behaviour. Updated existing FE ACs to match one-liner model.|
|v0.6|Confirmed bypass_credit_limit_check as the native ERPNext field on Customer Credit Limit child table (fieldname confirmed from ERPNext v15 source). Removed custom block_credit_limit field — repurposed native bypass_credit_limit_check instead (inverted logic: unchecked = MAIA enforces). MAIA fully replaces native check_credit_limit(); native check disabled. Compact credit bar redesigned: two-row structure (status row + exposure bar row) with conditional overdue row and projection row on SO form. Removed all "Pending Credit Approval" workflow state references — SO workflow layer not yet built; breached SO submits with credit_limit_breach=1 flag only; Credit Controller actions via ToDo linking to SO document. K.11 approve clears flag instead of transitioning state; K.12 reject returns to docstatus=0. Noted fulfilment gap (no workflow gate until SO workflow layer ships).|

Explain