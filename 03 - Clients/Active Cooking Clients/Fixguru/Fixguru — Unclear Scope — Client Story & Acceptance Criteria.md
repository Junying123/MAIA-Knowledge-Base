---
owner: Gareth
status: draft
last_reviewed: 2026-07-24
client: Fixguru
document_type: internal
lark_url: https://eg69120xnei.sg.larksuite.com/wiki/YPCawYa6liARdSkdWxilIzQjgJf
---

# Fixguru — Unclear Scope: Client Story & Acceptance Criteria

**Date:** 24 Jul 2026
**Source:** Fixguru Scope Lock v2, 24 Jun 2026 (AGREED IN PRINCIPLE and Needs-Scoping Register sections); credit limit item additionally grounded in the 24 Jun 2026 UAT transcript (Fixguru-UAT-with-Gareth-and-Bryan)
**Purpose:** Every item below is currently blocked on a client decision, not a build decision. For each one this doc lays out the client story, why Fixguru needs it, the request that surfaced it, a suggested resolution, and the acceptance criteria to close with the client before dev picks it up.

---

## 1. Customer search by phone / WhatsApp number

**Scope Lock ref:** AIP-03 — AGREED IN PRINCIPLE, implementation not locked, Blocking: YES

**Client story:**

- Fixguru sales admin gets a WhatsApp message from a regular buyer
- Buyer gives no company name — just "need 500 pcs of the usual boxes, same as last time"
- Admin has only the phone number
- AutoCount lookup today is by company name or customer code, not phone number
- MAIA search by number returns nothing, so admin falls back to scrolling recent chats to recognise the number — the exact manual workaround MAIA is meant to remove

**Why they need this:**

- Fixguru's real order intake channel is WhatsApp; on WhatsApp the only reliable identifier is the phone number, not company name
- Pricing history, delivery method and credit check all depend on first resolving "whose order is this"
- Blocking dependency for items 2–4 below, not a standalone nice-to-have

**Request that brought this out.** Client raised it directly in the 24 Jun 2026 UAT session: sales staff said they often only have the WhatsApp/phone number, not the exact registered company name. [FF | 24 Jun 2026]

**Suggestion:**

- Search by phone / mobile / WhatsApp number as primary key, exact match only — no partial-number search, to avoid false positives
- On multiple matches, show a disambiguation list (customer name + customer code + last order date) and require staff to pick before proceeding — never auto-select

**Acceptance criteria to confirm with client:**

- [ ] Search fields confirmed: phone, mobile, WhatsApp number, and/or named contact-person number
- [ ] Duplicate-number handling defined: disambiguation list shown, never auto-picked
- [ ] Partial-number search: confirmed in scope or out of scope
- [ ] Search result display format confirmed before staff commits to a customer match

---

## 2. Historical delivery method recommendation

**Scope Lock ref:** AIP-04 + NS-07 — AGREED IN PRINCIPLE, implementation not locked, Blocking: NO

**Client story:**

- Customer's order ready to dispatch
- Same customer has used internal delivery, Lalamove, and self-pickup on different orders depending on urgency and cost
- Staff has to remember or dig through past invoices to guess which method this customer prefers this time
- Staff confirms with customer over WhatsApp before booking — an extra round trip a "last used" prompt would remove

**Why they need this:**

- Delivery method isn't fixed per customer — it varies order to order, so a static default is wrong as often as it's right
- Surfacing the last few actual choices lets staff make a fast, informed pick instead of re-asking every time

**Request that brought this out.** Client asked to see the last 3–5 historical delivery methods per customer because customers switch between courier, pickup and Lalamove depending on urgency; client said "last 5 would be good." Client described the pattern he wants surfaced but did not name a source doctype (Invoice / SO / DO) — that's an open implementation call, not a client-specified detail. [FF | 24 Jun 2026]

**Suggestion:**

- Show last 5 records, sourced from Delivery Order (DO) — DO is the authoritative record of what actually shipped, not what was quoted or ordered
- Present as a tappable recommendation chip staff must actively confirm, never auto-applied to the order
- Delivery method label must match the SKU/item line used for billing (per S-04), so the recommendation and the billed line agree

**Acceptance criteria to confirm with client:**

- [ ] Confirmed count: last 3 or last 5 records shown
- [ ] Confirmed source doctype: Invoice, Sales Order, or Delivery Order — pick one canonical source
- [ ] Confirmed behaviour: recommendation only, staff must actively pick
- [ ] Exact delivery method labels/SKUs confirmed, matching S-04's delivery-charge-as-SKU-line resolution

---

## 3. Credit limit / credit exposure approval (incl. payment-proof vs AR timing)

**Scope Lock ref:** AIP-05 + NS-05 (merged) — AGREED IN PRINCIPLE, Blocking: YES

**Client story:**

- Client, on blocking at order/SO stage: "Credit limit block on order — miss opportunity to collect money and invoice." Blocking that early kills the quotation/negotiation before it can even reach invoicing.
- Client's own fix: "Fix guru side: credit limit block on DN. If customer high outstanding, will block on DN. Based on DO value, will block." — the gate sits at DN submission, triggered by DO value, not order creation.
- Separately, team "approves manually after verifying bank transfer slip even if AR not yet knocked off" — two distinct approval paths exist: AR-negative/prepaid (approve on bank-in slip) vs credit-limit-exceeded (case-by-case, also bank-in slip), both routed to Ivan today.

**Why they need this:**

- Blocking at order/quotation stage kills deals before they can even be negotiated — client wants that stage left open
- DN is the last checkpoint before goods physically leave, so it's the right point to enforce credit control without losing the sale
- Approval is manual, not automatic, because AutoCount AR lags real payments — a hard rule reading only the stale ledger would wrongly block customers who already paid

**Request that brought this out.** Client feedback captured directly in the 24 Jun 2026 UAT session and written up in the Round 3 Tech Brief (Issue 6). [FF | 24 Jun 2026]

**Status:** Direction is already decided by the client, not open — dev action items exist to move the block trigger from SO to DN submit (Wei Yon) and split the two approval flows. What's still genuinely open: (1) formally locking this in writing/Scope Lock — currently only captured in the Tech Brief, not signed off; (2) which roles can bypass — blocked on Azib's AutoCount screenshot (open item C2).

**Suggestion:** lock this as DN-submit block, DO-value-triggered, per the client's own instruction — no need to re-litigate the decision, just formalise it in the Scope Lock doc and close out the bypass-roles question.

- [x] Block point confirmed: DN submit, not order/SO — per client instruction, needs formal write-up only
- [x] Trigger confirmed: DO value (not just outstanding-balance flag)
- [x] Approver named: Ivan, for both approval paths
- [ ] Which roles can bypass — pending Azib's AutoCount screenshot (C2)
- [ ] Approver context view built and confirmed: AR, pending SO/DN, credit limit, available balance

---

## 4. Minimum price / below-threshold approval

**Scope Lock ref:** AIP-06 — AGREED IN PRINCIPLE, implementation not locked, Blocking: YES

**Client story:**

- Sales staff finalising a quote offers a discount to close the deal
- Discount drops price below the item's floor — e.g. standard price 33 sen, floor 27 sen
- Check today lives in someone's head or a spreadsheet
- Nothing stops the quote going out under-priced until finance notices after the fact, by which point the customer already has the number

**Why they need this:**

- Margin protection at item level is the whole point of a minimum price
- An approval step that fires only after the fact protects nothing — it needs to catch the quote before it reaches the customer

**Request that brought this out.** Client clarified minimum price is item-level with a concrete example (33 sen standard, 27 sen floor) during the 24 Jun 2026 session. [FF | 24 Jun 2026]

**Suggestion:**

- Threshold per item + UOM, since box sizes/formats have different cost floors
- Existing price-book approved prices bypass this check entirely (see item 5) — already approved once, don't re-approve
- Quotation can be generated and held in a "PENDING APPROVAL" state visible internally, but not sent to the customer until cleared

**Acceptance criteria to confirm with client:**

- [ ] Threshold scope confirmed: global per item, or per item + UOM combination
- [ ] Bypass rule confirmed for existing price-book entries
- [ ] Quotation generation behaviour confirmed while approval pending
- [ ] Approver role and location in the flow confirmed

---

## 5. Price-book / customer-specific pricing bypass

**Scope Lock ref:** AIP-07 — AGREED IN PRINCIPLE, implementation not locked, Blocking: NO, Confidence: LOW

**Client story:**

- Long-standing customer already has a special negotiated price, agreed and approved months ago
- Every quote to that customer re-runs the minimum-price approval check (item 4) even though this exact price was already signed off
- Routine repeat order turns into a repeated approval chase for no reason

**Why they need this:**

- Repeated approval on already-approved pricing wastes the approver's time and slows routine orders
- Risk that staff learn to route around the check if it fires too often on legitimate cases

**Request that brought this out.** Client noted some customers already have approved special prices maintained in a price book / customer pricing structure and expect those not to trigger repeat approval. [FF | 24 Jun 2026]

**Suggestion:**

- Maintain approved customer prices in AutoCount's price book if the API exposes it; otherwise a scoped CSV import, owned by Fixguru finance
- A price-book price fully bypasses the minimum-price check — it was already approved once, don't check it again

**Acceptance criteria to confirm with client:**

- [ ] Confirmed where the approved customer price is maintained
- [ ] Confirmed whether this data is available via the AutoCount API, or needs manual import/upload
- [ ] Confirmed rule: full bypass vs widened threshold
- [ ] If upload/import required, confirmed who owns keeping the data current

---

## 6. Warehouse / shelf / branch stock mapping

**Scope Lock ref:** AIP-08 / NS-08 — partially resolved 13 Jul 2026 (shelf number now populates the DN additional-note field; Fixguru confirmed no branch hierarchy exists). Warehouse-level mapping itself remains open, Blocking: YES

**Client story:**

- Picker gets a delivery order and needs to know which warehouse — and which shelf — actually holds the stock
- Fixguru's stock sits across more than one physical location inside AutoCount
- Which AutoCount table or hierarchy represents "warehouse" hasn't been technically confirmed
- MAIA can't yet guarantee it's checking the right stock pool before letting a DO go out

**Why they need this:**

- SOW commitment: MAIA validates stock against AutoCount/WMS and prevents oversell
- That commitment is only as good as the mapping underneath it
- Shelf and branch are already settled — warehouse is the one piece still standing between "stock validation" as a locked objective and a working feature

**Request that brought this out.** First surfaced in UAT Gaps (stock/warehouse sync, shelf info needed for pick list/DO, stock balance not identifiable), clarified further in the 24 Jun 2026 session — AutoCount may model shelves/branches via a warehouse hierarchy or sub-warehouse configuration, but exact mapping needs technical confirmation. [FF | 24 Jun 2026]

**Suggestion:**

- Mindhive tech + Fixguru AutoCount admin to jointly identify the exact stock/warehouse table in a short technical session — this shouldn't need a client-side product decision, just a schema walkthrough
- Once mapped, MAIA hard-blocks DO creation when the mapped warehouse shows insufficient stock — soft warnings don't prevent oversell
- Multi-warehouse balances shown to picker as a simple per-location list, no need for a richer UI than that

**Acceptance criteria to confirm (technical, Mindhive tech + Fixguru AutoCount admin):**

- [ ] Exact AutoCount module/table used for warehouse identified
- [ ] Confirmed whether MAIA hard-blocks or only warns on insufficient mapped-warehouse stock
- [ ] Confirmed how multi-warehouse stock displays when an item exists in more than one location

---

## See Also
- [[03 - Clients/Active Cooking Clients/Fixguru/Scope Lock v2 — Fixguru]]
- [[03 - Clients/Active Cooking Clients/Fixguru/Fixguru — VoC Extraction]]
