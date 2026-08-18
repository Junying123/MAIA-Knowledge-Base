---
owner: Gareth
status: draft
last_reviewed: 2026-07-29
lark_url: https://eg69120xnei.sg.larksuite.com/wiki/Yeucw54zeiPODhkpRozlZz2LgVy
---

# Dalson Industrial Supplies — Before vs After MAIA & E2E Flow

Format follows `[[Macrofood/macrofrozen/27Jul26 - Macrofrozen E2E Flow and Per-Role Breakdown]]`. Sourced from `[[Dalson — VoC Extraction]]`, `[[Dalson — End-user & Process Map]]`, `[[Dalson — UAT Infopack/Dalson_UAT_Field_Guide_Play_It_Like_A_User]]`, and Scope Lock v2 — Dalson Industrial Supplies (Lark).

## Before MAIA — Current (As-Is) Flow

```
┌───────────────────────────┐
│ Owner sends quotation     │
│ to customer                │
│ (only pre-order doc today)│
└─────────────┬─────────────┘
              ▼
┌───────────────────────────┐
│ Customer sends an order   │
│ PO / WhatsApp / Call      │
│ / Email                   │
└─────────────┬─────────────┘
              ▼
┌───────────────────────────┐
│ Asilah / Yap Li Min       │
│ interprets the order      │
└─────────────┬─────────────┘
              ▼
┌───────────────────────────┐
│ Manual AutoCount entry    │
│                           │
│ • Create customer/item    │
│ • Match SKU manually      │
│ • Price from memory       │
└─────────────┬─────────────┘
              ▼
┌───────────────────────────┐
│ PO forwarded to Joseph    │
│                           │
│ • No Sales Order          │
│ • No approval             │
│ • No pick list            │
└─────────────┬─────────────┘
              ▼
┌───────────────────────────┐
│ Joseph checks that the    │
│ goods have arrived        │
│                           │
│ Joseph then packs the     │
│ goods for delivery        │
└─────────────┬─────────────┘
              ▼
┌───────────────────────────┐
│ Delivery Order printed    │
│                           │
│ Goods handed to Lalamove  │
└─────────────┬─────────────┘
              ▼
┌───────────────────────────┐
│ Lalamove delivers the     │
│ goods to the customer     │
└─────────────┬─────────────┘
              ▼
┌───────────────────────────┐
│ POD returned through      │
│ WhatsApp                  │
│                           │
│ Difficult to retrieve     │
└─────────────┬─────────────┘
              ▼
┌───────────────────────────┐
│ Invoice created in        │
│ AutoCount                 │
└─────────────┬─────────────┘
              ▼
       ┌──────┴──────┐
       ▼             ▼
┌────────────┐ ┌────────────┐
│ Return     │ │ Customer   │
│            │ │ requests   │
│ Credit Note│ │ receipt    │
│ by Invoice │ │            │
└────────────┘ └────────────┘
```

- **Owner sends a quotation before the customer's PO comes in** — this is the only pre-order doc that exists today. No formal Sales Order stage exists.
- **Customer sends order** — PO, text, or call to Dalson.
- **Staff uploads the PO into AutoCount.**
  - Asilah (Sales Coordinator, desk-based) or Yap Li Min herself handles this — sources don't state a fixed split.
  - No pick-list step — the PO is uploaded, that's the only structuring that happens before packing.
- **PO is forwarded to Joseph (Store Keeper), who packs it directly.**
  - No intermediate pick-list or consolidation step — one PO in, one pack job out.
- **Delivery happens via Lalamove (external courier); proof of delivery is exchanged informally over WhatsApp.**
  - Owner does not manage or organise this today — it just lives in chat threads.
- **Delivery Order is printed.**
  - Retrieving a past DO later means manually searching a WhatsApp thread — described as genuinely hard to find again.
- **Invoice is created in AutoCount** — standard fields only, nothing unusual.
- **Credit note, if needed, is issued against the specific invoice ID** — never at the customer-account level. This is existing practice, not a before/after change.
- **Receipt is only generated if the customer explicitly asks** — not standard practice. Also unchanged by MAIA.
- **New customer or new item, when it comes up:** owner or coordinator manually keys it into AutoCount. Happens daily, not occasionally.
- **Pricing is negotiated ad hoc, per customer** — no fixed price list in AutoCount, just a single standard price per item; staff sets the real price case by case from memory.

##### Problems this creates

- **Operational memory lives in scattered WhatsApp threads and paper.** POs, DOs, and delivery proof aren't retrievable later without staff remembering where they put things.
- **New-customer and new-item onboarding is a daily manual bottleneck.** Every new customer or SKU means someone hand-keys it into AutoCount before anything else can move.
- **No sales-order stage means no draft/review checkpoint before an order becomes a real document** — whatever's uploaded goes straight to packing.
- **SKU/item-description matching is informal.** Customers describe items in their own words; matching to the right AutoCount SKU depends on staff judgement, no structured check exists.
- **Pricing lives in staff's memory, not the system.** Nothing shows what a customer paid last time, so pricing consistency depends entirely on whoever's handling the order remembering correctly.
- **Cost model was opaque before go-live discussions** — since resolved, but reflects how little visibility the owner had into system-driven costs prior to MAIA.

---

## After MAIA — E2E Flow: Order Intake → Invoice

```XML
STAFF: Yap Li Min / Asilah
   |
   | Creates QUOTATION in MAIA, sends to customer
   v
CUSTOMER
   |
   | Sends PO / order request (photo, text, or call)
   v
STAFF: Yap Li Min / Asilah
   |
   | Forwards order into MAIA via Telegram
   v
MAIA
   |
   | Drafts the order, matches item wording to internal SKU
   v
STAFF: CONFIRMS OR CORRECTS THE SKU MATCH
                       |
                       v
                 PRICING CHECK
   - Customer has price history → MAIA shows last few order
     prices for that item, staff decides/confirms
   - No history (new customer/item) → MAIA defaults to the
     standard AutoCount price, staff can override
                       |
                       v
              NEW CUSTOMER OR NEW ITEM?
                       |
              +--------+--------+
              |                 |
             Yes                No
              |                 |
   MAIA creates directly        |
   via chatbot                  |
   + issues Quotation/          |
   Proforma doc for new         |
   customer                     |
              |                 |
              +--------+--------+
                       |
                       v
              SUBMISSION — no separate approval gate
      Any of 3 registered users: Yap Li Min / Asilah / Joseph
                       |
                       v
          PUSHED TO AUTOCOUNT (system of record)
                       |
                       v
JOSEPH: PACKS ORDER DIRECTLY
   - No formal Pick List step (matches current practice)
   - No stock-count update required for most SKUs — only the
     small retail-facing slice is tracked
                       |
                       v
          DN & INVOICE CREATED IN AUTOCOUNT
                       |
                       v
     GOODS HANDED TO LALAMOVE (external courier) WITH DN
                       |
                       v
LALAMOVE: DELIVERS, HANDS POD BACK (not a MAIA user)
                       |
                       v
ASILAH (or Yap Li Min): UPLOADS POD, ATTACHES TO THE DN IN MAIA
                       |
              +--------+--------+
              |                          |
        Return occurs          Customer requests receipt
              |                          |
              v                          v
     CREDIT NOTE ISSUED           RECEIPT GENERATED
     (invoice-level only)         (on request only)
```

### 1. Order Intake

- Where relevant, Dalson sends a **quotation** to the customer first — the only pre-order document in their flow. Created in MAIA and **stays in MAIA only** (SL-13, MED confidence) — per written client confirmation (Sample Data Checklist doc) and a direct client quote (WhatsApp, 2026-05-26: *"if MAIA can do her own 'quotation' with her own SKU is ok de"*). **A 2026-07-31 edit to this doc had claimed the quotation is pushed to AutoCount, citing an unattributed "direct check" — that claim was rejected in the Scope Lock v2 reconciliation pass (Supersessions Log S8) for lacking a citation, and this doc has been corrected to match. Still needs a properly attributed live-system re-verification before this is treated as fully settled — see Scope Lock Client Confirmation Agenda.**
- Customer sends a PO — photo, text, or call — to Dalson.
- Staff (Asilah or Yap Li Min) forwards it into MAIA via Telegram.
- MAIA drafts the order and matches the item wording to Dalson's internal SKU.
- Staff confirms the SKU match, or corrects it if it looks off — nothing gets committed on a guess.
- MAIA checks pricing:
  - If the customer has ordered that item before, MAIA shows the last few order prices so staff can decide/confirm the price.
  - If there's no price history (new customer or first order on that item), MAIA defaults to the standard AutoCount price; staff can still override it.
- No formal Sales Order stage — the quotation/SO-equivalent stays in MAIA only; only Invoice and DO push to AutoCount.
- New customer or new item: MAIA creates it directly through the chatbot — no manual AutoCount entry needed. For a new customer, MAIA also issues a quotation/proforma document to collect payment upfront (also stays in MAIA only).

### 2. Submission — No Separate Approval Gate

- Any of the 3 registered users — Yap Li Min, Asilah, or Joseph — submits the draft directly.
- No second sign-off required; client confirmed this is safe for a 3-person team.
- Submitted order is pushed to AutoCount, which stays the system of record.

### 3. Fulfillment

- Joseph (Store Keeper) receives the submitted order and packs it directly.
- No formal pick-list step — matches how Dalson already works.
- No stock-count update required for most SKUs — Dalson trades heavily, stock turns straight back out; only the small retail-facing slice is actually tracked.

### 4. DN & Invoice Creation

- Once packing is done, the DN and Invoice are created in AutoCount, tied to the same order.

### 5. Delivery & Proof of Delivery

- Goods go out with the DN via Lalamove (external courier) — not a MAIA user.
- Lalamove delivers and hands the POD (photo/signed doc) back to staff afterward.
- Asilah (or Yap Li Min) uploads the POD and attaches it to the DN in MAIA.
- This closes the old "master DO" retrieval pain — DOs with their attached POD are searchable in MAIA instead of buried in a WhatsApp thread.

### 6. Credit Note (if applicable)

- If a return occurs, the credit note is issued against the specific invoice ID — never at the customer-account level.

### 7. Receipt (if requested)

- Receipt is generated only if the customer asks — never automatically.

---

## Per-Role: What Each User Does

### Yap Li Min — Owner / Sales Coordinator (dual role)

##### Responsibilities
- Submits draft SO/Invoice directly — no separate approval step.
- Sets business rules: credit note policy (invoice-level only), receipt policy (on-request only).
- Field/mobile-based; uses MAIA remotely.

##### Benefits
- No longer personally carries every document handoff in her head.
- Can review order history, credit terms, and pricing history without digging through AutoCount manually.

##### Risks
- **UAT signatory role still open** — unclear if she's the sole UAT signatory or if Asilah/Joseph sign off their own portions.

---

### Asilah Amirah binti Khairuddin — Sales Coordinator

##### Responsibilities
- Forwards customer POs into MAIA via Telegram.
- Submits SO/Invoice directly — previously blocked, now no gate exists.
- Creates new customer/item records via chatbot.
- **Receives POD from Lalamove after delivery, uploads it, and attaches it to the DN in MAIA** — Lalamove is not a MAIA user.

##### Permissions
- **Visibility scope still open** — whether she sees only her own assigned customers/orders or all of Dalson's orders is unconfirmed anywhere in sources.

##### Benefits
- New-customer/item creation no longer requires a separate manual AutoCount pass — directly closes a daily bottleneck.

##### Risks
- Role description in sources is still owner-reported (BELIEVED), not her own voice — worth confirming directly at UAT sign-off.

---

### Joseph — Store Keeper / Admin

##### Responsibilities
- Receives confirmed orders, packs directly.
- Same direct submission rights as Yap Li Min and Asilah — not his normal day-to-day, but available if it falls to him.

##### Benefits
- Order routing through MAIA instead of a forwarded WhatsApp message — same simple hand-off, less ambiguity about what to pack.

##### Risks
- No formal pick-list step is introduced by MAIA — the workflow simplicity is preserved, but so is the lack of a structured picking check.

---

### Lalamove — External Courier (not a MAIA user)

##### Responsibilities
- Delivers the goods.
- Hands the POD (photo/signed doc) back to staff after delivery.

##### Not a MAIA user
- Lalamove has no MAIA login or in-app role. POD capture and filing is staff's step (Asilah, or Yap Li Min) — see her role above.

---

### Ms Tan — AutoCount Software Support (external, not a MAIA end-user)

##### Responsibilities
- Manages Dalson's AutoCount instance; coordinated data migration and integration access.
- Technical point of contact for any AutoCount-side sync questions.

##### Not a MAIA user
- No MAIA login, view, or submission rights — AutoCount-side only.

---

## Open Gaps Carried Into This Doc

1. **UAT signatory** — sole (Yap Li Min) vs. multi-signatory (Asilah/Joseph each on their portion). *(open)*
2. **Asilah's visibility scope** — own customers only vs. all of Dalson's orders. *(open)*

---

## See Also
- [[Dalson — VoC Extraction]]
- [[Dalson — End-user & Process Map]]
- [[Dalson — UAT Checklist]]
- [[Dalson — Lens Alignment Report]]
- Scope Lock v2 — Dalson Industrial Supplies (Lark, doc token `VHQPdEnCbopM9pxRapJliGiXgrb`)
