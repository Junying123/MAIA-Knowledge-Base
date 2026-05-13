---
owner: Gareth
status: draft
last_reviewed: 2026-05-03
---

# GST Fine Foods — GTM Brief Context and Unclear Items

**Source:** Internal GTM walkthrough transcript — `Granola/Transcripts/2026-04-27/GST Fine Food  GTM brief-transcript.md`

This note captures **what the brief goes into in detail** (as stated in that session) and **what stays unclear, fuzzy, or contradictory** — focused on RFQ/quotation (**2a**), stock / Excel / verification (**2b**), payment & credit (**2c**), CPRN / commitments (**4**), and SAP / Crystal / sync / BOM (**5**).

---

## How these threads connect (one-page story)

GST’s day mixes **three different rhythms**. First, **hotels and similar buyers** fire over **Excel RFQs**; the team must turn vague lines into **exact internal products**, sometimes **swapping species, origin, or cut** when they cannot fulfil literally. That work sits on top of **stock reality**: SAP B1 is official, but people **don’t always post in time**, so sales often trust a **circulated inventory spreadsheet** and still **phone someone** to “double confirm” before they commit. Second, some accounts behave like **blanket deals without POs** — big **earmarks** on stock, **consumption over time**, **purchasing buying ahead**, and **fights over who can sell the same physical pool** until someone **releases** the hold. Third, everything that becomes a real sale must **respect finance**: **payment slips** and **credit limits** are meant to flow through **approval** before the business treats the case as properly closed — and any document that leaves the building is expected to **look like their SAP Crystal layouts**, even as **processing changes the underlying SKU** (e.g. **whole fish vs head-only**). MAIA, in GTM’s telling, is meant to **speed the interpretive work**, **surface stock and exceptions**, **structure the messy human coordination**, and **stay glued to SAP** as those realities change.

---

## 2a — RFQ / quotation / matching

### Clear story (as-is, from the brief)

1. A **B2B buyer** (e.g. hotel) sends an **Excel RFQ** — a list of **“I want this / this / this”** in their own wording.  
2. A **coordinator** at GST must **read every line** and decide **which internal item** (species, cut, pack, weight band, origin…) **best matches** what the customer meant.  
3. If GST **cannot supply exactly** what was asked for, they **substitute**: e.g. **different salmon origin**, or **different cut** (fillet vs tail vs head). That decision uses **experience** and **rules that live in people’s heads** more than in a tidy matrix.  
4. **Pricing** on routine **packed / frozen** lines is often **stable**; the **hard part** is **interpretation and fulfilment**, not the calculator.  
5. **Today** the output of all that thinking is **manual**: staff rebuild the customer’s intent inside **their own quotation workflow** (still often **Excel** on their side).  
6. **With MAIA (intent in the brief):** they **upload the customer Excel**; MAIA **reads and matches**, then returns **structured suggestions** (e.g. **message or workspace**: “line 3 → item X”) — **not** auto-writing the customer’s file. Staff **review**, **fill or adjust price**, **export** their official quotation — similar in spirit to a **Ming Medical–style** review screen.

### What the brief goes into (detail)

**Product & pricing context**

- They’re **frozen seafood** (and related); not only fish — e.g. **tong** and other items come up.
- **Pricing is mostly stable**: often **by KG**; many sales are **fixed-price packed** products (“packet” SKUs).
- **Price is not the main variable** in the simple case; **quotation / RFQ** is where pricing gets **less standard** and more **case-by-case**.

**What an RFQ is in their world**

- **RFQ** = customer (e.g. **hotel**) sends an **Excel** with lines: “I want this, this, this.”
- GST’s job: **match** each request to **what they can actually fulfil** from inventory / catalogue.
- If they **can’t** fulfil exactly, they **substitute**. The brief names **two big substitution dimensions**:
  - **Type / origin of fish** (example: **Norwegian salmon vs another origin**).
  - **Cut** — **fillet, tail, head**, etc.
- So one “line” in the customer file can imply **many internal attributes** (cut, weight, species…) that staff must reconcile.

**Pain as described**

- With **many RFQs**, **manual matching** doesn’t scale: staff must **think** how to map lines and suggest products.
- **Cut, weight, everything** must be taken into account — it’s not a simple SKU lookup.

**Supply / sourcing context (brief level)**

- They have **their own farm** and also **import**; product can come **own farm, other suppliers, other countries** — i.e. **mixed sourcing** behind the same customer-facing offer.

**What MAIA is supposed to do (as told in the brief)**

- **Input:** **Excel RFQ**.
- **Output:** **Not** “we write your Excel for you.” Output is things like **text / message**: “this line → matched to this internal item,” etc. Staff **take that and fill their own quotation Excel** (or workflow).
- There should be a **workspace** (brief compares to **Ming Medical**): somewhere to **see all matches**, then staff **fill price** (or get **recommended price** — discussed as a direction), **change things**, **export** their quotation.
- MAIA’s role in RFQ: **intake → process → match → show results**; **matching + RFQ prep** are **tied together** in the brief.

### What’s unclear / inconsistent in the brief

- **Substitution rules** are described **by example** (origin, cut), not as **decision rights** (who can substitute without calling the customer).
- **How many RFQ templates** exist, **peak volume**, **typical line complexity** — **not quantified**.
- **Recommended price** is mentioned in passing; **whether it’s in scope, phase, or SAP-dependent** — **not pinned**.
- Brief says customers **don’t really use pro forma** in discussion, then immediately says the **workflow is still “like pro forma”** and they **do generate pro forma** — **contradictory**; needs their definition of document vs process.

---

## 2b — Stock, Excel, expiry, “double confirm”

### Clear story (as-is, from the brief)

1. **SAP Business One** holds **official inventory**, but **posting lag** means sales **don’t fully trust** on-screen qty as **“what we can promise right now.”**  
2. On a **rhythm** (described as **daily** in spirit), **finance or operations** pulls numbers **out of SAP** and drops them into a **shared Excel** that sales treats as their **practical “live” view**.  
3. A **salesperson** preparing a quote or order **looks at that sheet**; if the deal matters or feels risky, they **call or message internally**: *“I’m about to sell 10 cartons — confirm we really have 10.”*  
4. **Frozen** product still carries **expiry / batch ageing**. The brief mentions **mental thresholds** (e.g. trouble when a lot is **~two weeks** from a risk point — **not a fixed rule** in the transcript) and a desire to **nudge sales** when stock is **ageing or nearing expiry** so they can **push clearance**.  
5. **With MAIA (intent in the brief):** stock answers and reminders should eventually **line up with whatever GST agrees is “truth”** — but the brief **does not yet say** whether that is **SAP live**, the **spreadsheet snapshot**, or **something hybrid**.

### What the brief goes into (detail)

**Why checking stock is hard today**

- **Inventory in SAP isn’t trusted as always up to date** (“people don’t update in time”).
- **Daily (or regular) pattern:** someone (**finance or ops** — wording is loose) pulls **inventory from SAP B1** into an **Excel** that is treated as **“live”** for sales to look at.
- Sales **sometimes** still **call internally**: e.g. “I want to order 10 — **double confirm** we have 10” **before** creating the order.
- So operational reality = **SAP + spreadsheet + phone verification**, not “open SAP and trust the number.”

**Expiry / ageing (brief level)**

- Product is **frozen** but still has **expiry**.
- They talk about **time horizons** loosely: e.g. a batch **“two weeks out”** might be considered in an **expiry / risk** sense — the speaker says they’re **not precise** (“could be month or two”) — so it’s **conceptual**, not a spec.
- They want **logic**: if stock is **aging** or a **lot is nearing expiry**, **remind sales** (push / notification angle).

**Pain summary in brief**

- Alongside matching, **quantity checking** is a **major** daily friction: **matching + stock checking** are the two big buckets called out for **order/quotation** work.

### What’s unclear in the brief

- **Who** owns the Excel extract, **exact refresh time**, **fields included** — **not specified**.
- **What “live” means** (real-time link vs daily dump) — **ambiguous**.
- **Expiry rules** (thresholds, by category, by customer) — **only illustrated**, not defined.
- **Whether “available” is net of reservations** — **not discussed** in 2b (ties to §4).

---

## 2c — Payment slip, credit limit, and “closing” the case

### Clear story (as-is, from the brief)

1. When a sale moves toward **closure tied to money in**, **payment proof** (e.g. **payment slip**) is not something sales **quietly files away** — **finance is expected to review** and **approve** that the money story is right **before** the business considers the case properly **closed** (language in the brief: **flow to finance** on **payment slips**).  
2. **Credit** works in parallel: if the customer is **over limit** or blocked, there is **escalation** — **finance / approval** — before the team should **treat the order as safe to proceed** or **complete**.  
3. The brief **argues with itself** on **pro forma**: on one hand **“no pro forma”** in customer discussion; on the other, the **workflow sounds pro forma–like** and they **do generate pro forma** documents — so the **real gate** (document vs behaviour) is **not clean** in the transcript.  
4. **With MAIA (intent in the brief):** **basic** payment-slip **capture + structured review** and **credit / blocking paths** are in play; **deeper “suspicious case” logic** is a **possible extension**, not assumed.

### What the brief goes into (detail)

- **Payment slips** routed to **finance approval** before **close-out** of the money side of a deal.  
- **Credit limit** breaches → **blocking** and **finance in the loop** (same family of exception handling).  
- Tension between **“no pro forma”** talk and **pro forma–like behaviour** / **pro forma generation**.

### What’s unclear in the brief

- **Exact definition** of **“closed”** vs **SAP document state** (invoice posted? payment cleared? DO released?).  
- **Who** must approve **which** exception, and **SLA**.  
- How **partial pay**, **wrong reference**, or **multi-invoice one slip** cases work — **not walked through**.

---

## 4 — “Customer purchase request” / commitments / reservations

### Clear story (as-is, from the brief)

1. A **restaurant / hotel-style** account says, in effect: *“I’ll need a **large quantity** over time”* — a **blanket-style commitment** — but **no PO** arrives and they may **not** want this keyed as a **normal SAP sales order** yet.  
2. GST still **tracks the commitment separately**: e.g. **10,000 units** “for this customer” while **only small releases** happen against it (**10 out**, **9,990 remaining** — **usage proper**).  
3. **Purchasing** sees that shape of demand and may **order ahead** (example: buy **12,000** physically to cover a **10,000** earmark), which creates **tension** between **what’s on the floor** and **what’s mentally spoken for**.  
4. That **earmark “chokes”** the stock for **other sellers**: if another **salesperson** tries to use the same pool, someone must **ask for release** — either the **account-owning rep** or **management** (the brief says **GST must choose** which pattern is real).  
5. **Today** follow-up is **human**: *“Still want this block or not?”*; **release** may be a **boss or purchasing** “**x out**” of the hold — **no system of record** described for that path.  
6. Eventually the business expects to **convert** the commitment into a **normal order**; the brief calls that **“just converting”** but **does not spell the trigger or accounting step**.

### What the brief goes into (detail)

**The business pattern**

- Some **restaurant / hotel-style** customers place **large** orders that behave like a **blanket** commitment.
- Often **no PO**.
- They **don’t** necessarily key this as a **normal sales order** in the system; they **track it separately** from “normal” usage/stock tracking.

**Consumption / “usage proper”**

- Example logic in speech: commitment might be **10,000**; they **release 10**; **9,990** left — they want to **track usage** against that commitment.
- **Purchasing** is in the story: e.g. **10,000 “for this customer”** informs what they **buy**; they might buy **12,000** physically, with **10,000 mentally “for”** that customer — brief describes **tension** between **physical stock** and **earmarked** qty.

**Conflict between salespeople**

- If **10,000** is **tied to Customer A** / a deal, and **another salesperson** wants to sell **that stock**, the process should **ask** someone: **the salesperson who “holds” it** or **the boss** — brief says **either model is possible** and **GST must clarify** which.

**Negative / “choke” framing**

- Reserving can mean **effective negative** availability for others: **“10,000 choked for this guy”** until released.
- Today, **reminding** is **manual** — “still want or not?” — **no system** for release; **boss or purchasing** might **“x out”** a hold (informal language).

**Purchasing behaviour**

- Commitments drive **advance buying** because **lead times** can be long (example: **one month**), while customer might only give **three days** notice when they actually pull stock — so they **buy ahead** and **pre-allocate** mentally.
- **Purchasing** uses this picture to decide **how much to buy**; when goods arrive, **earmark vs free stock** story continues.

**Conversion to normal order**

- Brief says converting commitment → **normal order** is **“no issue”** / **“just converting”** — i.e. they expect a path to standard SO, but **exact mechanics** are hand-wavy.

### What’s unclear / risky in the brief

- **Official name** in their ops (“CPRN” is GTM label; client language may differ).
- **Approval graph**: **sales vs boss vs purchasing** — **explicitly undecided**; “we need to invent / configure.”
- **Whether earmarks exist in SAP** or only in heads/spreadsheets — **not stated**.
- **Partial release, split customers, multi-line commitments** — **not detailed**.
- **How consumption ties to SO / DO / invoice** — **not specified**.

---

## 5 — SAP B1, Crystal Reports, SKU/BOM changes, sync

### Clear story (as-is, from the brief)

1. **SAP B1** is the **system of record** for items, stock movements, and **printed commercial forms**. GST is **sensitive to document face**: whatever MAIA helps generate should **match their existing Crystal / SAP layouts** — **same formulas, same “premium” look**, not a generic PDF.  
2. **Processing reality** breaks the idea of a **static line item**: e.g. the customer and sales agree on **“fish head”** after starting from **whole fish**; **warehouse or production** reflects that by **changing how the product is represented in SAP** (brief points toward **BOM / phased explosion** — **one fish, multiple sellable parts**).  
3. If MAIA still shows **the old SKU** while SAP already shows **the new cut**, **sales promises and documents diverge** — so the client **pushes for ERP → MAIA updates** that are **“almost live”** (exact interval **left open**).  
4. **RFQ matching** interacts with the same mess: suggesting an **alternate cut** is not always a **“nice AI hint”**; sometimes it is **the operational truth** after processing — the brief warns **assistive language** may miss that.  
5. **Org context:** **Penang** and **KL** (and **Langkawi** in wider KB context) may be **separate legal / SAP companies** with **regional roles**; **who integrates first** and **whether AR/bank views** can be unified is **still open** in the brief. **Joey Pong** is named as a **coordination PIC**.

### What the brief goes into (detail)

**SAP & documents**

- Core ERP: **SAP Business One**.
- **Crystal Reports** is repeated **many times**: any **report / document generation** should **match SAP’s formulas/layouts** — they treat this as **non-negotiable** quality bar.
- Brief jokes it’s **not mass-market Crystal** but **their internal SAP format** — **premium / formal** outputs.

**The “fish → fish head” / BOM-class problem**

- **Operational example:** discussion might be **“how many fish head”**; in SAP they may **change** from **whole fish** to **fish head** (or **one fish → different parts**).
- So **one commercial conversation** can **change** which **SKU / structure** is correct; it’s linked to **cutting / parts / phases** (brief mentions **BOM** as the likely SAP mechanism — “one fish, mother BOM, phases”).
- They say the client **asked if MAIA can reflect this** and cares that changes **show up quickly**.

**Sync / “almost live”**

- Brief states need to **push from ERP to MAIA** **“almost live”** / **regularly** so line items don’t drift.
- **Cron / interval** was **mentioned to client** as adjustable (“set cron as per need”) — but brief admits **that’s not written into proposal cost/scope** in a precise way.
- **RFQ side:** if customer wants **tail** but you suggest **another cut**, that’s linked to **assist vs human** decision — brief notes **assist** might not be the right metaphor if **SKU swaps** are **operational** not “suggestion.”

**Discovery gap called out in the brief itself**

- On **early calls**, **whole team** supposedly **sorted product multiple times** but **recording didn’t capture** the **fish / portion / BOM** workflow — flagged as a **miss**.
- Speaker says you need **deep follow-up right after calls** for this workflow; **exact steps when sales vs warehouse vs SAP** update — **still unknown**.

**Multi-branch / entity context (brief)**

- **Penang** vs **KL** (and **Langkawi** mentioned elsewhere in KB): **separate companies / accounts**, **regional coverage** (north vs central-south).
- **Bank / AR** separation vs **integration** possibility — speaker is **not 100% sure**; may need **everyone in room** to decide.
- Rollout: **Penang first** in this brief; **KL / others** timing **not signed**; **Joey Pong** as PIC; WhatsApp group **forming**.

### What’s unclear in the brief

- **Minutes vs hours** acceptable lag — **discussed but not decided**.
- **Which master data streams** must be near-real-time: **items only vs BOM vs stock vs price** — **bundled together** in speech, not split.
- **Who changes SKU in SAP** and **when relative to customer commitment** — **workflow not mapped**.
- **Crystal scope**: which **exact doc types** must match first — **assumed broad**, **not listed** in transcript.

---

## See Also

- [[GST Fine Foods Customer Narrative]]
- [[GST Fine Foods × MAIA Proposal v2 [SIGNED]]]
- [[GST Fine Foods — Requirement Gathering Questionnaire]]
- Supersedes the short summary file (if present): prefer this note for **transcript-level context + gaps**.
