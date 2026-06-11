---
owner: Gareth
status: draft
last_reviewed: 2026-06-11
client: Fixguru
source: Mindhive Daily Standup 2026-06-10
---

# Scope Alignment — Delivery Method & Out-of-Scope Items (Fixguru)

## Purpose

Captures scope decisions from the 2026-06-10 standup that must be **communicated to Fixguru (Yvonne)** before UAT (target: **next Tuesday**). Three items the team will *not* build the AutoCount-style way, plus the agreed handling for each.

Source: `[[Granola/Transcripts/2026-06-10/Mindhive Daily Standup transcript v2]]`

---

## 1. Delivery Method as Item (Lalamove)

### What Fixguru wants
Add the delivery method (e.g. **Lalamove**) as a **line item / SKU** in the order — not as a system charge. This mirrors how they do it in AutoCount.

### The conflict
MAIA has **three** places "Lalamove" could route to:

| Target | Where | Behaviour today |
|---|---|---|
| **Fulfillment method** | Finance area, top-left field | Bare word "Lalamove" → bot sets this. Default. |
| **Charge** | Charges section (seeded types: delivery charge, packing charge, etc.) | "delivery charge 10rm" → bot adds here. |
| **Item / SKU** | Order line items | Only when user says `Lalamove`, qty `1`, + price explicitly |

Tested 2026-06-09 (Bryan, Iman): bare "Lalamove" is treated as **fulfillment method**, not item. To get it in as a SKU the user must specify item name **+ quantity 1 + price**.

### Decision
- **Out of scope** to auto-route. Client will **manually add Lalamove as an item** with qty + price — same as their AutoCount practice (Frozen Meat).
- **Client education point (Gareth):** instruct Fixguru users to phrase it as *"add Lalamove item, qty 1, price RMxx"* so the bot books it as a line item, not a fulfillment method or charge.

### Open product test (Ivan — before locking scope)
Two things to verify on the demo bot first:
1. Test the natural query: `fulfillment = Lalamove, delivery charge 10rm` — does it mis-route?
2. Test **not seeding the charge-type table** for the Fixguru instance (per-instance config) — does removing the charges section kill the confusion so users can talk free-flow?
   - Note (Bryan): clearing charges may *not* help, because the bot routes the bare phrase to **fulfillment method**, not charge. Confirm which path actually fires.

**Principle:** don't force users into rigid prompting (unreliable). Shift control to our config side.

---

## 2. Shelf Information Tied to UoM

### What Fixguru does in AutoCount
Fixguru customised shelf location in AutoCount by binding it **under the item's UoM** — not against the item, and not as a warehouse location.

How it works (raised by Azeep, explained by Ivan):
- One SKU carries **many UoMs** (e.g. 1 piece, 22 pieces). The 22-piece UoM is the bigger pack — likely a box — so it physically sits on a different shelf.
- They added a **new user-defined field for "shelf" on the UoM** in AutoCount.
- When an item is added to a document, **whichever UoM is selected pulls its shelf, and the shelf auto-populates** into the DN (or whatever document).
- So the shelf travels with the UoM, not the item.

**Why it's a hack:** the correct way is to model shelves as **sub-warehouses** inside the warehouse. Fixguru did not do this — they encoded shelf as a UoM-level custom field instead. It works for them but is non-standard and only meaningful to their setup.

### Source of truth — verbatim (v2 standup, 2026-06-10)
- **L236 (Ivan):** "when we pull this shelf information from auto count, how it's configured, it's **tied to the UoM**. So basically in one SKU they will have a lot of random UoMs. Like... is pieces one but they will have another which is 22 pieces... When these 22 pieces is selected, the **shelf is tied to this thing**."
- **L239:** "different shelves because **it might be in the box**."
- **L254:** "the way that they are supposed to do it is **use these shelves as a sub warehouse** inside their warehouse, **which they did not do**."
- **L260:** "in the UoM they create a **new user defined field for shelf**... When this item is added... the shelf **auto populate** into the DN... So it's a **hack**."

### Decision — OUT OF SCOPE (default), pending final clarity
- This is a **non-standard AutoCount hack**, specific to Fixguru. Default stance: **not** supported in MAIA.
- Correct practice would be shelves as **sub-warehouses** inside the warehouse — which Fixguru did not set up.
- **Update 2026-06-11:** before hard-closing, Ivan wants Imol/Amir to **showcase how it's implemented** so we align. Two paths: (a) client OK to drop it, or (b) understand their use case and check if MAIA can support it cleanly. Gareth asked clarifying questions in the group — awaiting answers.
- **Communicate to Fixguru:** MAIA integration follows best-practice warehouse modelling; this custom UoM-shelf binding is non-standard. To be confirmed as out of scope pending their use-case answers.

---

## 3. HQ + Branch Contact

### Context
AutoCount has a **native branch** concept. Customer contacts in AutoCount can carry branch structure.

### Decision — we can do it, but not the AutoCount way
- We will **not** replicate AutoCount's branch-contact management.
- When syncing the contact from AutoCount, MAIA stores it as **just an address type** (i.e. branch captured as address detail, not as a managed branch-contact entity).
- **Fixguru-specific:** checked their data 2026-06-10 — **Fixguru does not use branches at all**. So low impact for this client.
- This is more relevant for **AutoCount integration broadly** (Azeep's side) than for Fixguru. Approach (the "line on how to get this done") is already agreed.
- **Communicate to Fixguru:** branch **details captured via address**; branch **contacts not managed separately** the AutoCount way.

---

## 4. Volumetric

- In progress, **not** out of scope. Frontend needs new fields; backend work pending. Tracked as a Fixguru open item (volumetric + PDF + credit limit).

---

## Fixguru Open Items (from same standup)

| Item | Status | ETA |
|---|---|---|
| PDF (custom template, populate Fixguru data) | Pending Rahim quotation-as-SO | Today (2026-06-10) |
| Volumetric (frontend fields + backend) | In progress | End of week |
| Credit limit | Open | End of week |
| AutoCount 2-way sync (test on sandbox AutoCount) | Buggy — Azeep gap list in repo | Target done today, test Fri |
| UAT date | Proposed | **Next Tuesday** (Yvonne to confirm) |

---

## Action Checklist (Gareth)

> **Today (2026-06-11):** out-of-scope items **must be communicated** before next-Tuesday UAT. Draft the message and **send to Ivan first for review** before it goes to Fixguru.

- [ ] Draft scope message, get Ivan sign-off before sending to client
- [ ] Message Yvonne: **Delivery method as item** — manual add, client-education phrasing
- [ ] Message Yvonne: **Shelf-on-UoM** hack out of scope + reason
- [ ] Message Yvonne: **Branch contact** out of scope; branch **details** captured under HQ
- [ ] Confirm UAT date (next Tuesday) — Yvonne skipped prior message
- [ ] Pivot Fixguru to test on **sandbox AutoCount**, not production AutoCount, during UAT
- [ ] Watch Azeep's 2-way sync video to learn how to test it

---

## See Also

- [[Feature Requests & Gaps]]
- [[Requirements Log]]
- [[Config Overlay]]
- [[UAT/MAIA UAT Form - Fixguru - 2026-04]]
