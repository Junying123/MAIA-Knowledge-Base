<title>5May26 - Implementation Plan x Final Narrative</title>

# GST Fine Foods — MAIA Implementation Plan

## Phased Scope, Narrative & Gameplan

*Working draft v0.5 — 5 May 2026*

---

# Part A — The Narrative

## Who GST Fine Foods Is

GST Fine Foods is part of the GST Group, a Malaysian seafood operation spanning farming, hatchery, processing, trading, and distribution. The business runs out of Penang, KL (Rawang), and Langkawi, supplying frozen, chilled, and live seafood to hotels, restaurants, supermarkets, and food service operators across peninsular Malaysia. The product range includes barramundi, tiger prawns, whole fish, fillets and portions, salmon and trout, squid, shellfish, and extends into poultry, meat, and other frozen products. Majority of volume is frozen seafood. The operation holds Best Aquaculture Practices certification for its barramundi value chain and maintains retail presence on Shopee and Lazada.

The operational backbone is SAP Business One version 10.00.919, used across Penang and KL under a single SSM/company with branch-level data ownership controlling which users see which documents. SAP handles item and customer masters, pricing through Blanket Agreements, credit limits and terms, stock management, document generation via Crystal Reports, and the full invoice-to-payment cycle.

That is not the problem. The problem is everything that happens around SAP.

---

## Before MAIA — How GST Operates Today

GST Fine Foods does not have a software problem. It has a coordination problem.

The company runs on WhatsApp. Not as a casual supplement — as the operational nervous system. There is an incoming order group, a pick list group, a delivery group, an invoicing group, a credit note group. Every operational function has its own WhatsApp channel, and every department head and operations manager sits in most of them simultaneously.

For Tim, the operations manager, this means being submerged in a constant stream of order confirmations, picking instructions, delivery status updates, invoice queries, credit note requests, payment proof screenshots, and exception escalations — all flowing through the same WhatsApp interface, all mixed together, all requiring him to mentally sort what is urgent from what is noise, what needs his action from what he's been tagged on for visibility, what he's already dealt with from what's been buried under fifty newer messages.

This is not a minor inconvenience. This is a structural fragility. When the volume is low, the WhatsApp groups work. The team can read every message, remember context, and act in time. When the volume rises — and GST's order volume runs around 4,000 orders per month per branch — messages get missed, approvals get delayed, payment proofs sit unseen, and the team compensates by calling each other, re-forwarding messages, and asking "did you see my message in the group?"

The cost is invisible until you measure it.

### The quotation treadmill

A customer sends a quotation request — usually an Excel file, sometimes a PDF, occasionally a voice message. The sales coordinator opens the file, reads the line items, and starts the translation work. The customer's wording says "Norwegian salmon fillet 200g x 5 tray." GST's internal item master might list it as "SALMON ATL FILLET IQF 200G" or something different entirely. The coordinator needs to know which item the customer means, check whether stock is available, verify the customer's agreed pricing, and confirm whether the customer's credit is clear.

Every one of those steps requires a different system, a different person, or a different WhatsApp group.

The coordinator who has been with the company for years does this in her head — she knows the item names, she knows which customers get which prices, she knows who to call when credit is tight. A new coordinator takes three times as long and makes more mistakes. The knowledge is locked in people, not in a system.

### The pricing trap

GST does not use simple price lists. They use SAP Blanket Agreements — long-term contracts with specific customers for specific items at negotiated prices, valid within a time frame. Penang uses this consistently. Whether KL follows the same practice is still unconfirmed.

When a Blanket Agreement exists, SAP auto-detects the customer-specific pricing when a sales order or invoice is created inside SAP. The problem is that quotation work often happens outside SAP — in Excel, in WhatsApp, in the coordinator's memory — before anything reaches SAP. By the time the order enters SAP, the pricing may have been communicated to the customer based on memory or an outdated spreadsheet, not on the live Blanket Agreement.

### The credit approval bottleneck

SAP blocks customers who exceed their credit limit or are overdue. That block is real and enforced. But the approval to release the block does not happen in SAP either. The salesperson fills out a manual credit application override form — a paper or PDF form with the customer details, the order amount, the reason for the override. That form gets submitted to the manager. The manager reviews it, signs it, and then goes into SAP to click the approval release button.

Today, this paper form and approval handoff happens via WhatsApp. The salesperson photographs the form, sends it into the approval group. The manager may be in a meeting. The message gets buried. Approval can take two to three hours. Meanwhile, the order waits, the customer waits, and the salesperson sends follow-up messages asking "boss, can release?"

There is no digital record of the form. There is no structured routing. There is no audit trail of who approved what, when, or why. And when management later asks why a customer who should have been blocked was allowed to proceed, nobody can reconstruct the decision cleanly.

### The payment proof shuffle

Customers pay and send proof via WhatsApp to their salesperson. The salesperson screenshots the proof and forwards it into the payment group. Finance scrolls through the group, finds the proof, cross-references the amount against outstanding invoices, and reconciles manually. If the group is busy that day, the proof gets buried. Finance may not see it until the next day. The customer calls the salesperson asking why their payment hasn't been acknowledged. The salesperson calls finance. The loop continues.

### The pick list and transformation chain

This is where GST's operation gets uniquely complex.

A pick list is generated — usually pulling items from multiple sales orders at once, because the warehouse picks by item and location, not per-order. The warehouse itself is split into two teams: one handles frozen produce, the other handles ready-packed stock. The pick list is printed twice — one copy for each team — and each team picks their respective items.

But for the frozen team, the process does not end at picking. After the raw material is picked, the items often need to go through stock transformation — repackaging, cutting, portioning — according to the customer's specific requirements. A whole salmon becomes fillets. A 1 KG pack becomes five 200g portions. The factory floor worker performs the transformation, notes down the details on paper — input material, output products, quantities, any glazing applied — and snaps a photo of the completed pick list and the handwritten transformation record. That photo goes to the inventory executive via WhatsApp. The inventory executive then manually keys the transformation data into SAP.

This chain — pick list printed → floor worker picks → floor worker transforms → floor worker photographs paper → inventory exec receives photo in WhatsApp → inventory exec keys data into SAP — is the daily reality. It works, but every handoff is a place where information can be lost, delayed, or entered incorrectly.

### The stock visibility lag

And here is the problem that sits underneath the transformation chain — the one that causes real errors in sales.

The frozen team starts picking at 8am. Transformation — cutting, repackaging, portioning — runs through the morning. The floor worker finishes a batch at 10am and photographs the paper record. The inventory exec may not see the WhatsApp message until 10:30. She keys the transformation into SAP by 11am. SAP stock levels update at 11:05am.

During that three-hour window, the stock levels that SAP shows — and that anyone checking stock relies on — are wrong. The raw material has been consumed but SAP still shows it as available. The finished goods exist on the factory floor but SAP does not know about them yet.

If a salesperson checks stock at 9am and promises a customer 50 KG of salmon fillet, she is making that promise based on pre-transformation numbers. The fillet may not yet exist in the system. Or the raw material she thinks is available has already been picked and is sitting on the cutting table. She does not know this because the transformation has not been recorded yet.

This is not a theoretical risk. It is a daily source of errors — overselling stock that has already been consumed, or failing to sell finished goods that physically exist but have not yet appeared in the system. The lag between physical reality and system reality is the gap where mistakes live.

Today, GST compensates by having salespeople call the warehouse to double-check. That works when the warehouse has time to answer. It does not work during peak hours.

### The invoice retrieval loop

SAP is accessed via VPN and is only available in the office. Salespeople on the road cannot access SAP directly. When a customer asks for an invoice copy — "I don't have this invoice, please send again" — the salesperson has to message the sales coordinator or backend team and wait for them to pull the invoice from SAP, generate the PDF, and send it back. If the coordinator is busy handling other orders, the request sits. The customer gets frustrated. Collection slows down.

This is not a technology problem. It is a problem of the salesperson being cut off from the information they need to serve the customer promptly because the system of record sits behind a VPN they cannot reach from the field.

### What management sees

Management sees what WhatsApp shows them — a stream of messages they can scroll through if they have the time. There is no consolidated view of how many orders are pending, how many are stuck, which customers are over credit, which stock is not moving, or which salespeople are hitting targets. Tim can piece this together manually by pulling data from SAP and cross-referencing with WhatsApp, but that takes time he does not have on a busy operations day.

---

## After MAIA — What Changes

MAIA does not replace SAP Business One. SAP remains the accounting backbone, the stock transformation engine, the batch processing system, and the document-of-record generator. MAIA does not touch what SAP does well.

MAIA replaces the WhatsApp groups.

Not by being another chat app. By being the structured coordination layer that takes the operational work currently scattered across multiple WhatsApp groups — orders, pick lists, deliveries, invoicing, credit notes, payment proofs, approvals — and moves it into a system where every document has a trail, every task has an owner, every exception has a routing path, and every person sees only what they need to act on.

Joey, GST's internal project owner, forwards a customer's Excel quotation into MAIA. Instead of opening the file and manually translating every line item, she sees a structured draft. MAIA has read the file, identified the line items, and matched them against GST's internal item master. Where the customer's wording is ambiguous — "salmon portion 200g" could be Atlantic or Norwegian, skin-on or skinless — MAIA surfaces the likely matches and lets Joey confirm. She reviews, adjusts the two items that need correction, and the quotation draft is ready in minutes instead of the thirty to forty-five minutes it took before.

When she creates the sales order, MAIA pulls the customer's Blanket Agreement pricing from SAP. If the customer has an agreed price for that item, it auto-applies. If there is no agreement, standard pricing applies. If there is no price at all, MAIA prompts Joey to enter one. She does not need to remember the price or look it up separately.

MAIA shows her the customer's credit standing before she confirms the order. If the customer is over limit, MAIA flags it. The credit controller receives a notification and a ToDo with the order details and credit context. The credit controller reviews, and either submits the order in MAIA or communicates their decision through comments or channels outside MAIA before the SAP-side approval happens. The decision is recorded — who reviewed, when, what the credit position was.

When a payment proof arrives, the salesperson forwards it into MAIA. MAIA creates a draft payment entry with the attachment. Finance sees it in their workspace, reviews, allocates to invoices, and confirms. The proof does not get lost in a WhatsApp group.

When the salesperson on the road needs an invoice for a customer, they search for it in MAIA. MAIA has the invoice record synced from SAP. The salesperson retrieves it and forwards it to the customer — no VPN needed, no dependency on the coordinator being available.

MAIA also starts capturing what GST's team currently keeps in their heads: customer preferences. When Joey enters an order for Shangri-La and types "butterfly cut" in the remarks, or when a quotation remark says "customer prefers skinless fillet, no glaze," MAIA captures these semantically. Over time, the next time someone creates an order for Shangri-La, MAIA can surface: "Past orders for this customer typically specify butterfly cut, skinless." The knowledge stops being locked in one person's memory and becomes a system resource.

On the stock visibility problem — the three-hour lag between physical transformation and SAP stock update that causes daily errors — MAIA does not eliminate it in Phase 1, but it makes the problem visible and manageable instead of invisible and dangerous. Every stock query in MAIA shows a "last synced" timestamp so the salesperson knows exactly how fresh the data is. During morning hours when transformation is typically running, MAIA surfaces a warning: "Frozen item stock levels may not reflect today's processing. Committed order quantities are accurate; absolute stock levels may be lagged." And critically, MAIA shows committed stock — what is already spoken for by confirmed orders — separately from total stock. Even when the absolute stock number is lagged, the salesperson can see that 60 KG of salmon fillet is already committed to other orders. That committed number is accurate because it comes from MAIA's own order data, not from SAP's transformation-delayed inventory.

In Phase 2, the lag itself shrinks. When the floor worker's transformation capture moves from paper-and-WhatsApp to a mobile form in MAIA, the inventory exec receives the record immediately in a structured queue instead of whenever they happen to check WhatsApp. The time between "transformation completed on the floor" and "inventory exec keys it into SAP" compresses from hours to minutes. The stock visibility window that creates errors gets smaller — not eliminated, because the SAP entry itself still takes human time, but materially reduced.

Tim no longer needs to sit in every WhatsApp group. His MAIA workspace shows him what needs his attention — pending credit reviews, stale orders, delivery issues — without the noise.

For Soo Chin, MAIA provides what WhatsApp groups never could: a structured view of business health. What is stuck, what is overdue, what is at risk, and what needs a decision.

---

## What MAIA Honestly Cannot Do

**MAIA cannot solve the salmon weight problem.** Salmon is priced in KG. Each fish weighs differently. SAP stores stock in KG because a static NOS-to-KG conversion is inaccurate. ERPNext has the same limitation. MAIA works with KG as the base UOM. If GST wants fish-count visibility alongside weight, that can be captured as an informational field on transaction lines, but it will not be system-enforced or used for stock calculations.

**MAIA does not replace SAP's stock transformation workflow.** GST's repackaging, cutting, and portioning process — where input value must equal output value — stays in SAP. The factory floor still records transformations on paper, the inventory exec still keys it into SAP. MAIA reads the resulting inventory positions after transformation. What MAIA can do in a future phase is capture the floor worker's photo and transformation notes digitally instead of via WhatsApp — but the SAP data entry stays in SAP.

**MAIA does not eliminate the stock visibility lag in Phase 1.** The three-hour gap between physical transformation on the factory floor and SAP stock update is a human process problem, not a software problem. As long as the transformation record travels via paper → photo → WhatsApp → manual SAP entry, the lag exists. MAIA makes the lag visible (timestamps, warnings) and reduces its impact (committed stock visibility is accurate even when absolute stock is lagged). Phase 2 compresses the lag by digitising the floor-to-exec handoff. But full elimination would require either real-time SAP entry at the factory floor (operational change GST must drive) or moving the transformation engine itself into MAIA (Phase 3, 20-30 mandays).

**MAIA's intelligence is not magic.** Product matching, quotation drafting, exception surfacing — these work because the system has been loaded with GST's item master, pricing data, customer information, and business rules. The quality of MAIA's output is directly proportional to the quality of the data GST provides.

---

# Part B — Structural Gaps & New Doctype Requirements

## Gap 1 — The Salmon Problem (Variable-Weight Item Handling)

Salmon is priced in KG. Each fish weighs differently. SAP stores stock in KG. GST does not use batch or serial number tracking. ERPNext cannot do non-static UOM conversion. Cannot reverse-calculate from finished goods BOM back to raw material.

**Phase 1:** KG is the base UOM. Informational NOS field available on transaction lines. Not system-enforced.

---

## Gap 2 — Stock Transformation / Value-Preserving Processing

GST's transformation is closer to repackaging/cutting than manufacturing. Input value = output value (unlike standard BOM where value can vary). SAP has been customised to enforce value-preserving reconciliation. The floor worker records transformation on paper, photographs it, sends via WhatsApp to inventory exec who keys into SAP.

**Phase 1:** Transformation stays in SAP. MAIA reads post-transformation inventory. Floor-to-SAP handoff (photo → manual entry) unchanged in Phase 1.

**Phase 2 opportunity:** MAIA captures transformation record digitally (mobile form for floor worker replacing paper + photo), routes to inventory exec's workspace for SAP entry. Does not replace SAP — structures the handoff.

**Phase 3 opportunity:** Full transformation engine in MAIA if SAP becomes bottleneck. 20-30 mandays.

---

## Gap 3 — SAP B1 Integration Gate

SAP B1 10.00.919. VPN access. Service Layer exposes `BlanketAgreementsService`. Whether GST's instance has Service Layer deployed is unconfirmed.

---

## Gap 4 — Blanket Order Doctype (New MAIA Extension)

ERPNext has no native Blanket Agreement equivalent. Custom doctype required.

- Customer link, agreement method, validity period, status lifecycle
- Line items: item code, agreed price, planned/fulfilled qty, UOM
- Auto-pricing hook on QT/SO creation
- SAP → MAIA sync (READ only)
- **Effort:** 5-8 mandays. Phase 1 — without it, pricing is broken.

---

## Gap 5 — Branch / Outlet Doctype (New MAIA Extension)

SAP B1 has Branch/Outlet that controls document attribution, user visibility, and has inventory and accounting implications. ERPNext has Company-level scoping but not within-company branch attribution.

**What Branch means at GST:**

- Each branch has its own address
- Each branch has its own inventory (warehouse allocation)
- Each branch has sales and accounting implications (reporting by branch)
- Every business document is scoped to a branch
- Users are attributed to a branch
- Customers are global (not branch-specific — a customer can order from either branch)

**What MAIA must build:**

- Custom "Branch" doctype: name, code, address, linked warehouse(s), default cost centre
- Branch field (Link) on all transactional doctypes: QT, SO, SI, DN, CN, Pick List, Payment Entry
- Branch field on User profile
- Frappe UserPermission: User → Branch → scoped document visibility
- Default Branch auto-set on document creation from user's branch
- Cross-branch access for management
- Branch-level reporting capability (revenue, outstanding, orders by branch)

**Customer handling:** Customers are global — not attributed to a branch. A customer can place orders through either Penang or KL. The branch scoping applies to documents and users, not to customer master records. This matches GST's current SAP setup where customers are unique across the company and are not duplicated per branch.

**Implication for document flow:** When a salesperson in Penang creates a SO for a customer, the SO is attributed to Penang branch (auto-set from the user's branch). If the same customer later orders through KL, that SO is attributed to KL. Branch-level reporting shows revenue per branch regardless of customer. Customer-level reporting shows total activity across branches.

**Accounting dimension consideration:** Branch could be configured as an Accounting Dimension in ERPNext, enabling branch-level P&L and balance sheet reporting without separate companies. This is architecturally cleaner than treating Branch as purely an access control tag.

**Effort:** 3-5 mandays. Phase 1 — foundational.

---

## Gap 6 — Consolidated Pick List with Warehouse Team Split

GST's pick list is consolidated across multiple SOs. The warehouse is split into two teams: frozen produce and ready-packed stock. The pick list is printed twice — one per team.

**ERPNext native support:**

- Consolidated pick list (items from multiple SOs): ✅ supported via "Get Items" button
- Actual picked quantity update before submission: ✅ supported (picked_qty field)
- Pick list → DN creation: ✅ supported, but split-back to per-SO/per-customer DN needs testing

**What MAIA needs to add:**

- **Pick list print/view by warehouse team:** filter/group pick list items by warehouse or item group (frozen vs ready-packed) so each team sees only their items. This is a view/print filter, not a data model change.
- **Split-back to per-customer DN from consolidated pick list:** needs testing. If ERPNext doesn't handle this natively, custom handler required (2-3 mandays).

**The transformation step between pick and DN:**

This is a critical workflow detail that the meeting minutes captured but didn't emphasise enough. For frozen items, the flow is:

```Plain Text
Pick List generated (consolidated across SOs)
        │
        ▼
Pick list printed — TWO COPIES
  ├─ Copy 1 → Frozen produce team (picks raw materials)
  └─ Copy 2 → Ready-packed team (picks finished goods)
        │
        ▼
Frozen team picks raw materials
        │
        ▼
STOCK TRANSFORMATION HAPPENS HERE
  (repackaging, cutting, portioning per customer requirements)
  (floor worker records on paper: input mat → output products)
  (floor worker photographs paper, sends to inventory exec via WhatsApp)
        │
        ▼
Inventory exec receives photo, keys transformation into SAP
  (SAP creates transformation document, enforces value reconciliation)
  (SAP stock levels update: raw material down, finished goods up)
        │
        ▼
Actual picked quantities updated on pick list
  (may differ from ordered — variable weight, transformation yield)
        │
        ▼
Pick list submitted → DN created with actual quantities
```

**Phase 1 position on this chain:**

MAIA handles: pick list creation, team-split view/print, actual qty update, pick list → DN flow. SAP handles: stock transformation data entry and value reconciliation. The floor-to-SAP handoff (paper → photo → WhatsApp → manual entry) is unchanged in Phase 1.

The risk: there is a timing dependency. The DN cannot be created until the transformation is complete and SAP stock levels reflect the new finished goods. MAIA needs to know when SAP's stock has been updated post-transformation before allowing DN creation. This is a sync timing question to address during SAP integration design.

---

## Gap 7 — Customer Preference Semantic Capture

GST's customer preferences are currently captured informally — in people's heads, in SO item remarks, in QT remarks, in conversation. "Shangri-La wants butterfly cut." "This customer prefers skinless." "No glaze for hotel customers."

MAIA already has a designed Customer Intelligence / Preference Profile framework (15-section model in project knowledge). For GST Phase 1, we implement a practical subset:

**Phase 1 approach:**

- Remarks fields on QT, SO, SI, DN line items and document level are the capture point
- When a user enters customer-specific processing instructions or preferences in remarks, MAIA stores them
- These remarks are embedded (vectorised) per customer
- On subsequent QT/SO creation for the same customer, MAIA's chatbot retrieves relevant historical remarks via RAG and surfaces them: "Past orders for Shangri-La typically include: butterfly cut, skinless fillet, no glaze"
- The user can accept, modify, or ignore the suggestion
- Preferences auto-populate into the new document's remarks if accepted

**What this is NOT in Phase 1:**

- Not the full 15-section Customer Intelligence Profile
- Not structured fields (dropdown for cut type, checkbox for glaze preference)
- Not operationalised processing instructions on pick list (that requires structured fields flowing through the document chain — Phase 2)

**Phase 1 value:** Semantic capture and retrieval. The knowledge stops being locked in one coordinator's head. Any team member creating an order for Shangri-La gets the contextual hint. This is a wow feature — it makes MAIA feel intelligent without requiring heavy custom build.

**Phase 2:** Structured preference fields on customer master that auto-populate into QT/SO/Pick List/DN as actionable processing instructions (not just remarks text).

---

## Gap 8 — Historical Data Migration

One-time sync from SAP to MAIA.

<sheet sheet-id="9EkLSb" token="HlRbsS4zVh4zzjtqcN9lRxT5gFd"></sheet>

**Historical order data is important** because it seeds the customer preference RAG. Without historical remarks/preferences, the semantic capture system starts cold. If GST can export 6-12 months of SO/QT data with remarks, MAIA can pre-populate the preference embeddings.

**Effort:** 3-5 mandays (contingent on SAP export format).

---

# Part C — UX Journey: How the User Experiences Key Touchpoints

## Credit Limit — The UX at Each Phase

### Phase 1 UX

**Today:**

Joey creates a sales order. SAP blocks it — customer over credit limit. Joey fills out a paper credit application override form (customer details, order amount, override reason). She photographs it, sends it to the WhatsApp approval group. Tim sees it eventually. Tim signs it. Tim goes into SAP and clicks the release button. Two to three hours may pass. No digital record of the form or decision.

**After MAIA Phase 1:**

Joey creates a sales order in MAIA. Before submission, MAIA checks credit standing (synced from SAP) and shows:

```Plain Text
┌──────────────────────────────────────────────────────────────┐
│  ⚠ Credit Limit Alert                                        │
│                                                               │
│  Customer:     Shangri-La Hotel Penang                        │
│  Credit Limit: RM 50,000                                      │
│  Outstanding:  RM 47,200                                      │
│  This Order:   RM 8,300                                       │
│  Over Limit:   RM 5,500                                       │
│                                                               │
│  Overdue:      RM 12,000 (> 30 days)                         │
│                                                               │
│  This order has been flagged for credit review.               │
│  The credit controller has been notified.                     │
│                                                               │
│  [Save as Pending Review]    [Cancel Order]                   │
└──────────────────────────────────────────────────────────────┘
```

The credit controller receives a notification and ToDo in their MAIA workspace:

```Plain Text
┌──────────────────────────────────────────────────────────────┐
│  📋 Credit Review Required                                    │
│                                                               │
│  SO-2026-04821 — Shangri-La Hotel Penang                     │
│  Created by: Joey                                             │
│  Order value: RM 8,300                                        │
│  Over limit by: RM 5,500                                      │
│  Overdue amount: RM 12,000                                    │
│                                                               │
│  Customer payment history:                                    │
│  - Average days to pay: 38 days                               │
│  - Last payment: RM 15,000 on 28 Apr 2026                    │
│  - Last 3 months: 2 late payments                            │
│                                                               │
│  [Submit Order]  [Add Comment]  [Reject]                     │
└──────────────────────────────────────────────────────────────┘
```

**What happens next depends on the credit controller's decision process:**

- If they are satisfied, they tap "Submit Order" in MAIA → SO is created in MAIA → pushed to SAP. The credit controller or their delegate still releases the credit block in SAP manually.
- If they need more information, they use comments in MAIA or communicate outside MAIA.
- If they reject, the order is marked as rejected with a reason. Joey is notified.

**What MAIA records:** Who reviewed, when, what the credit position was, what action was taken. This is the audit trail that WhatsApp cannot provide.

**What MAIA does NOT do in Phase 1:**

- Does not digitise the paper credit application override form (that is a customisation)
- Does not automatically release the SAP credit block (that requires SAP API confirmation)
- Does not enforce approval hierarchy or amount-based routing

### Phase 2 UX Enhancement (Customisation)

- **Digital credit approval override form:** The paper form is replaced by a structured form in MAIA. The salesperson fills in the override reason, supporting context (e.g. "customer has confirmed payment will be made by Friday"). The form is routed to the credit controller with one-tap approve/reject. The signed digital form becomes part of the audit record.
- **SAP auto-release (Option A):** If SAP API supports it, MAIA pushes the approval decision to SAP and releases the block automatically.
- **Amount-based routing:** Orders over RM X routed to senior management, under RM X to branch credit controller.
- **Escalation:** If credit controller doesn't respond within configured time, escalate.

---

## Stock Transformation — The UX at Each Phase

### Phase 1 UX

**Today:**

Floor worker picks frozen raw material. Repackages/cuts per customer spec. Writes input/output on paper. Photographs paper. Sends photo to inventory exec via WhatsApp. Inventory exec keys transformation into SAP. SAP enforces value reconciliation. Stock levels update.

**After MAIA Phase 1:**

Nothing changes for the factory floor or the inventory exec. The transformation handoff (paper → photo → WhatsApp → SAP entry) remains exactly as it is.

What changes is what the salesperson sees — and critically, what the salesperson *knows she doesn't know*. Before MAIA, the salesperson had to ask someone to check SAP for stock levels and had no way of knowing whether those numbers reflected today's processing or yesterday's. After MAIA:

```Plain Text
┌──────────────────────────────────────────────────────────────┐
│  Stock Available — Salmon Products (Penang WH)               │
│                                                               │
│  SALMON ATL FILLET IQF 200G     │  142 KG  │  Avail: 82 KG  │
│  SALMON HEAD WHOLE FROZEN       │   38 KG  │  Avail: 38 KG  │
│  SALMON TAIL PORTION FROZEN     │   22 KG  │  Avail: 22 KG  │
│  SALMON WHOLE NORWEGIAN 4-5KG   │   85 KG  │  Avail: 45 KG  │
│                                                               │
│  "Avail" = total stock minus committed to confirmed SOs       │
│  Last synced from SAP: 10 minutes ago                         │
│                                                               │
│  ⚠ Morning processing may be in progress.                    │
│  Frozen item stock levels may not reflect today's             │
│  transformation. Committed quantities are accurate.           │
│  Verify with warehouse before confirming large frozen orders. │
└──────────────────────────────────────────────────────────────┘
```

**Phase 1 stock lag mitigation:**

The lag between physical transformation and SAP stock update currently causes daily errors — salespeople overselling consumed raw material or missing available finished goods. MAIA does not eliminate the lag in Phase 1, but changes the situation from "invisible and dangerous" to "visible and manageable":

1. **Timestamp on every stock query** — the salesperson sees exactly when the data was last synced from SAP. "Last synced: 10 minutes ago" is information she did not have before.
2. **Processing window warning** — during configurable morning hours (when transformation typically runs), MAIA surfaces a contextual warning on frozen item stock queries. The salesperson knows to verify before making large commitments.
3. **Committed stock is always accurate** — even when absolute stock numbers are lagged, the committed quantity (sum of confirmed SO line items in MAIA) is real-time because it comes from MAIA's own data, not from SAP. The salesperson can trust "Avail: 82 KG" more than "Total: 142 KG" because the committed deduction is based on confirmed orders, not on SAP's transformation-delayed inventory.
4. **Sync frequency optimised** — polling interval set to 5-10 minutes (rather than 15-30) to reduce the SAP→MAIA portion of the lag. The larger lag is the human chain (floor → photo → WhatsApp → exec → SAP), which MAIA cannot compress in Phase 1.

**Phase 1 value:** Salespeople see stock without VPN. They see committed vs available. They know when the data is fresh. They get contextual warnings during processing hours. The error rate drops not because the lag disappears, but because the salesperson is no longer blind to it.

### Phase 2 UX Enhancement — Compressing the Lag

- **Digital transformation capture:** Floor worker uses a mobile form in MAIA instead of paper. Input material → output products → quantities → photo of finished items. The form submits immediately to the inventory exec's MAIA workspace — a structured queue, not a WhatsApp message that competes with fifty other conversations. The exec sees it instantly, processes it in order, keys into SAP.
- **Time savings:** The WhatsApp handoff delay (floor worker photographs → inventory exec notices message → opens it → interprets handwriting) compresses to near-zero. The inventory exec receives a clean structured record instead of deciphering a photograph of handwritten notes. The lag between "transformation done" and "SAP updated" shrinks from potentially hours to the time it takes the exec to process the queue — likely 15-30 minutes.
- **Transformation visibility:** MAIA surfaces SAP transformation documents (read-only) for management review — what went in, what came out, value reconciliation. Management can spot yield anomalies or costing issues without logging into SAP.

### Phase 3 UX Enhancement — Eliminating the Lag (If Justified)

- Full transformation engine in MAIA with value-preserving reconciliation. The floor worker enters the transformation directly into MAIA. MAIA enforces input=output value. Stock levels update in MAIA immediately. The lag disappears because the transformation record no longer needs to travel through SAP at all — MAIA pushes the confirmed transformation to SAP as a completed record.
- Only justified if SAP's transformation workflow becomes the bottleneck. 20-30 mandays.
- The honest question GST must answer before Phase 3: is the lag painful enough to justify moving the transformation engine out of SAP? Or is Phase 2's compression sufficient?

---

## Pick List — The UX at Each Phase

### Phase 1 UX

**Today:**

Pick list generated from SAP. Printed twice. One copy to frozen team, one to ready-packed team. Both teams pick their items. Frozen team does transformation (see above). Paper annotated with actual quantities. Paper returned to sales support. Sales support re-enters actual quantities into SAP.

**After MAIA Phase 1:**

```Plain Text
STEP 1: Pick list creation in MAIA
─────────────────────────────────
Warehouse manager creates consolidated pick list
pulling from multiple pending SOs via "Get Items"
                │
                ▼
STEP 2: Team-split view
─────────────────────────────────
Pick list items auto-grouped by warehouse section:

┌─ FROZEN PRODUCE PICK LIST ─────────────────────────────┐
│  SO-4821  Shangri-La    SALMON WHOLE 4-5KG   │  20 KG  │
│  SO-4823  Grand Hyatt   PRAWN TIGER WHOLE    │  15 KG  │
│  SO-4825  Hilton PG     SALMON FILLET 200G   │  30 KG  │
│                                               │         │
│  → Printed/displayed for frozen team                    │
└─────────────────────────────────────────────────────────┘

┌─ READY-PACKED STOCK PICK LIST ─────────────────────────┐
│  SO-4821  Shangri-La    SQUID RING IQF 500G  │  10 PKT │
│  SO-4822  Marriott      FISH CAKE FROZEN 1KG │   5 PKT │
│  SO-4825  Hilton PG     CHICKEN WING FRZ 1KG │  20 PKT │
│                                               │         │
│  → Printed/displayed for ready-packed team              │
└─────────────────────────────────────────────────────────┘
                │
                ▼
STEP 3: Stock transformation (frozen items only)
─────────────────────────────────
Stays in SAP. Paper → photo → WhatsApp → SAP entry.
No change in Phase 1.
                │
                ▼
STEP 4: Actual quantity update
─────────────────────────────────
After picking (and transformation for frozen items),
warehouse user updates actual picked quantities
directly in MAIA — mobile or web.

No paper annotation. No sales support re-entry.
                │
                ▼
STEP 5: Pick list submission → DN creation
─────────────────────────────────
Pick list submitted with actual quantities.
DN created per customer from consolidated pick list.
Actual quantities flow through — no second data entry.
```

**Key Phase 1 wins:**

- Paper annotation → re-entry cycle eliminated
- Each warehouse team sees only their items
- Actual quantities captured at source
- Sales support freed from data re-entry

---

## Customer Preferences — The UX at Each Phase

### Phase 1 UX

**Today:**

Joey knows Shangri-La wants butterfly cut because she's been handling their orders for three years. If Joey is sick, the replacement coordinator doesn't know this and either calls Shangri-La to ask (slow) or sends the default cut (wrong).

**After MAIA Phase 1:**

Joey creates a SO for Shangri-La. She types in the item remarks: "butterfly cut, skinless, no glaze." MAIA captures this.

Next month, a different coordinator creates a SO for Shangri-La. MAIA's chatbot surfaces:

```Plain Text
┌──────────────────────────────────────────────────────────────┐
│  💡 Customer preferences for Shangri-La Hotel Penang          │
│                                                               │
│  Based on previous orders:                                    │
│  • Salmon fillet: butterfly cut, skinless, no glaze           │
│  • Prawns: cleaned and deveined, tail-on                     │
│  • Packaging: individual vacuum pack per portion              │
│                                                               │
│  [Apply to this order]    [Ignore]                            │
└──────────────────────────────────────────────────────────────┘
```

If the coordinator taps "Apply," MAIA populates the remarks fields on the relevant SO line items.

**How it works technically:**

- Remarks on QT/SO/SI/DN (both document-level and line-item-level) are the capture points
- Remarks text is embedded (vectorised) per customer
- On new document creation, MAIA retrieves relevant historical remarks via RAG
- Surfaced as chatbot suggestion, not auto-applied
- Historical order data migration seeds the initial embeddings

### Phase 2 Enhancement

- Structured preference fields on customer master (dropdown for cut type, toggle for glaze, etc.)
- Auto-populate into QT/SO/Pick List/DN as structured processing instructions
- Warehouse team sees structured instructions, not just free-text remarks

---

# Part D — Phase 1 Scope

## Objective

Core MAIA + features that hit acceptance metrics + wow factor for adoption. No customisations. Everything else Phase 2 after adoption is proven.

## Deployment

Penang + KL enabled simultaneously. Same SAP instance, same MAIA instance, branch-scoped.

## What's In

**New MAIA extensions (must-build):**

<sheet sheet-id="PJEpCK" token="HlRbsS4zVh4zzjtqcN9lRxT5gFd"></sheet>

**Core MAIA document flow:**

```Plain Text
cRFQ → Quotation → Sales Order → Pick List → Delivery Note → Sales Invoice → Payment Entry
```

**SAP B1 integration (READ):**

- Customer master, item master, inventory, pricing, credit data, active Blanket Agreements
- Sync: webhook preferred, cron poll 15-30 min fallback

**SAP B1 integration (WRITE):**

- SO, SI, DN, CN, Payment Entry push from MAIA → SAP

**Branch-level access control:**

- Branch doctype with address, warehouse links, cost centre
- Branch field on all transactional doctypes
- UserPermission scoping, cross-branch for management
- Customers are global (visible to all branches)
- Branch-level reporting foundation

**Quotation intake from Excel/PDF (cRFQ):**

- File → structured draft with product matching
- 0→80% automation ceiling
- Hits acceptance metrics 1-4

**Customer-specific pricing (Blanket Agreement):**

- Auto-applied on QT/SO creation
- Hits metric 7

**Credit standing visibility + notification/ToDo:**

- Credit data synced from SAP
- Pre-submission credit check with context display
- Credit controller receives notification + ToDo for blocked orders
- Credit controller can submit, comment, or reject
- Audit trail recorded
- SAP credit block release remains manual (SAP-side)
- Hits metric 9

**Actual picked quantity capture (consolidated pick list):**

- Consolidated across SOs, team-split view
- Warehouse updates actual quantities directly in MAIA
- Eliminates paper → re-entry cycle
- Hits metric 11

**Payment proof workflow:**

- Proof → draft payment entry → finance review
- Hits metric 12

**Invoice retrieval by salesperson:**

- Search and retrieve from MAIA, no VPN needed
- Forward to customer directly
- Hits metric 13

**Customer preference semantic capture:**

- Remarks on QT/SO/SI/DN as capture points
- RAG-based retrieval on new document creation
- Historical data seeds initial embeddings
- Wow feature for adoption

**Substitution advisory (basic):**

- Out-of-stock → suggest same-category items with available stock
- Advisory only

**Item description override:**

- Customer-facing description override on transaction line items

**Confirmed order reservation visibility:**

- Available minus committed, stale order alerts

**Notification & ToDo (base):**

- Credit block → credit controller
- Stale SO alerts
- Payment proof → finance
- Pick list ready → warehouse
- Comment tags

**Document generation (PDF):**

- QT, SO, DN/DO, Invoice, Pick List, CN
- Layout matched to Crystal Report samples
- Hits metric 14

**Historical data migration (one-time sync):**

- Customer master, item master, blanket agreements, price lists
- Open SOs, outstanding balances
- Historical order data (for preference mining)
- Hits metric 15

## What's Out (Phase 2+ After Adoption)

<sheet sheet-id="mPNb88" token="HlRbsS4zVh4zzjtqcN9lRxT5gFd"></sheet>

---

# Part E — Phase 2 Scope (After Adoption)

**Gate:** Phase 1 live for minimum 30 days with demonstrated adoption.

**Customisation bundle (RM 7,500 after Phase 2 UAT pass):**

- Customer-specific quotation matching logic (deep)
- Aging / clearance reminders
- Excel export for planning
- CPRN tracking
- SOA generation (subject to SAP feasibility)

**Additional Phase 2 items (scope + commercial to confirm):**

- Digital credit approval override form
- SAP credit auto-release
- Digital transformation capture (mobile form for floor worker)
- Structured customer preferences on master
- Role-specific dashboards
- Stock movement / inactive item notifications
- RAG-based substitution with graph injection
- Proactive chatbot substitution on triggers
- Item master enrichment
- Batch tracking (if SAP discipline established)
- Langkawi branch deployment (RM 10,000 one-time + RM 1,000/month)

---

# Part F — Phase 3 (Vertical Depth)

- Stock transformation visibility from SAP (read-only)
- Stock transformation engine in MAIA (if justified — 20-30 md)
- Catch-weight handling
- Advanced substitution with customer preference awareness
- Management dashboards: margin analysis, purchasing automation

---

# Part G — Pre-Phase 1 Gates

<sheet sheet-id="OAoHtt" token="HlRbsS4zVh4zzjtqcN9lRxT5gFd"></sheet>

**Infrastructure (parallel):**

- Company phone number, Meta Business Account, WABA, AWS, OpenAI API key
- Internal project owner: Joey (done)

---

# Part H — Commercial Structure

Per signed proposal v2 (Goh Soo Chin, 24/4/26). Do first, get paid on delivery metrics.

<sheet sheet-id="D2C5Xg" token="HlRbsS4zVh4zzjtqcN9lRxT5gFd"></sheet>

Monthly (after Phase 1 UAT + production): KL + Penang = RM 4,500/month. Langkawi add-on: RM 10,000 one-time + RM 1,000/month.

---

# Part I — Acceptance Framework (Phase 1)

<sheet sheet-id="u9AhTI" token="HlRbsS4zVh4zzjtqcN9lRxT5gFd"></sheet>

---

# Part J — Open Questions

1. SAP B1 Service Layer — deployed and network-accessible from AWS?
2. Blanket Agreement API — fields exposed?
3. KL Blanket Agreement practice — same as Penang?
4. Branch data ownership — SAP implementation detail?
5. Document numbering — DO/Invoice same-number scheme?
6. Credit approval authority — single or tiered? Paper form fields?
7. SAP VPN from AWS — network routing?
8. Glazing percentage — item attribute or separate SKU?
9. Historical data export format and volume?
10. Consolidated pick list → per-customer DN split — native?
11. Warehouse section → item group mapping — how does GST determine which items go to frozen vs ready-packed team?
12. Transformation timing — how long between pick and SAP stock update? Affects DN creation timing.
13. Historical order data availability — can GST export 6-12 months of SO/QT with remarks?

---

# Part K — Risk Register

<sheet sheet-id="x6C7J5" token="HlRbsS4zVh4zzjtqcN9lRxT5gFd"></sheet>

---

## Changelog

<sheet sheet-id="Bbm6lJ" token="HlRbsS4zVh4zzjtqcN9lRxT5gFd"></sheet>
