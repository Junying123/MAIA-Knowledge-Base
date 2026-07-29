---
owner: Gareth
status: draft
last_reviewed: 2026-07-29
---

# Dalson Industrial Supplies — Before vs After MAIA & E2E Flow

Format follows `[[Macrofood/macrofrozen/27Jul26 - Macrofrozen E2E Flow and Per-Role Breakdown]]`. Sourced from `[[Dalson — VoC Extraction]]` (VOC-019/020/021/022/023/024, VOC-011/012), `[[Dalson — End-user & Process Map]]` §2–5, and Scope Lock v2 — Dalson Industrial Supplies (Lark, doc token `VHQPdEnCbopM9pxRapJliGiXgrb`).

## Before MAIA — Current (As-Is) Flow

- **Customer sends order** — PO, text, or call to Dalson. No formal Sales Order stage exists today (VOC-021).
- **Staff uploads the PO into AutoCount.**
  - Asilah (Sales Coordinator, desk-based) or Yap Li Min herself handles this — sources don't state a fixed split (VOC-018, VOC-019).
  - No pick-list step — the PO is uploaded, that's the only structuring that happens before packing.
- **PO is forwarded to Joseph (Store Keeper), who packs it directly.**
  - No intermediate pick-list or consolidation step — one PO in, one pack job out (VOC-020).
- **Delivery happens; proof of delivery is exchanged informally over WhatsApp.**
  - Owner does not manage or organise this today — it just lives in chat threads (VOC-011).
- **Delivery Order is printed.**
  - Retrieving a past DO later means manually searching a WhatsApp thread — described as genuinely hard to find again (VOC-012).
- **Invoice is created in AutoCount** — standard fields only, nothing unusual (VOC-014).
- **Credit note, if needed, is issued against the specific invoice ID** — never at the customer-account level (VOC-022). This is existing practice, not a before/after change.
- **Receipt is only generated if the customer explicitly asks** — not standard practice (VOC-023, VOC-024). Also unchanged by MAIA.
- **New customer or new item, when it comes up:** owner or coordinator manually keys it into AutoCount. Happens daily, not occasionally (VOC-015, VOC-016).

##### Problems this creates

- **Operational memory lives in scattered WhatsApp threads and paper.** POs, DOs, and delivery proof aren't retrievable later without staff remembering where they put things (VOC-011, VOC-012, VOC-019, VOC-020).
- **New-customer and new-item onboarding is a daily manual bottleneck.** Every new customer or SKU means someone hand-keys it into AutoCount before anything else can move (VOC-015, VOC-016, VOC-030).
- **No sales-order stage means no draft/review checkpoint before an order becomes a real document** — whatever's uploaded goes straight to packing.
- **SKU/item-description matching is informal.** Customers describe items in their own words; matching to the right AutoCount SKU depends on staff judgement, no structured check exists (Phase 3 rank 1, VoC).
- **Cost model was opaque before go-live discussions** — since resolved, but reflects how little visibility the owner had into system-driven costs prior to MAIA (VOC-025–027, resolved 2026-07-12).

---

## After MAIA — E2E Flow: Order Intake → Invoice

### 1. Order Intake

Customer sends a PO/order request to Dalson.

**Staff (Asilah or Yap Li Min):** forwards it into MAIA via **Telegram** (SL-3, locked — channel confirmed with client, superseding the original WhatsApp-based setup walkthrough).

**MAIA:** extracts a draft order, matching item descriptions to internal SKUs (SL-4, core matching engine, locked) and referencing AutoCount for customer, pricing, and stock data (SL-6, access granted, data migrated).

- **No Sales Order stage** — per SL-13 (LOCKED, HIGH confidence, superseded 2026-07-19), the draft stays inside MAIA as an SO/quotation-equivalent; only Invoice and DO push to AutoCount. New customers get a **MAIA-generated proforma document** for upfront payment.
- **New customer/item creation:** if the customer or item doesn't exist yet, MAIA creates it directly through the chatbot flow (SL-11, LOCKED 2026-07-19, confirmed with Ivan) — no manual AutoCount key-in required, closing the daily bottleneck from VOC-015/016/030.

### 2. Submission — No Separate Approval Gate

Any of the 3 registered users — **Yap Li Min, Asilah, or Joseph** — submits the draft directly (SL-7, superseded 2026-07-20: client confirmed a separate approval step isn't needed given only 3 people use MAIA for Dalson).

Submitted order is pushed to AutoCount, which **remains the system of record** (SL-1, locked).

### 3. Fulfillment

**Joseph (Store Keeper):** receives the confirmed order and packs it directly — still no formal pick-list step, matching today's practice (VOC-019/020), just routed through MAIA instead of a forwarded WhatsApp message.

### 4. Delivery & Proof of Delivery

Delivery is carried out. **Driver** (identity **NEEDS CLIENT INPUT** — see Gap below) captures a **POD photo via MAIA**, stored against the order/DO trail (SL-5, locked).

- This directly closes VOC-012's "master DO" retrieval pain — DOs are searchable in MAIA instead of buried in a WhatsApp thread.

### 5. Invoice

Invoice is finalized in AutoCount, tied to the same order/DO trail.

### 6. Credit Note (if applicable)

If a return occurs, credit note is issued against the **specific invoice ID** — never at account level (SL-8, locked, matches existing practice per VOC-022).

### 7. Receipt (if requested)

Receipt is generated **only on customer request**, not automatically (SL-17, locked, matches existing practice per VOC-023/024).

---

## Per-Role: What Each User Does

### Yap Li Min — Owner / Sales Coordinator (dual role)

##### Responsibilities
- Submits draft SO/Invoice directly — no separate approval step (SL-7).
- Sets business rules: credit note policy (invoice-level only), receipt policy (on-request only).
- Field/mobile-based; uses MAIA remotely.

##### Benefits
- No longer personally carries every document handoff in her head.
- Can review order history, credit terms, and pricing history without digging through AutoCount manually.

##### Risks
- **UAT signatory role still open** — unclear if she's the sole UAT signatory or if Asilah/Joseph/driver sign off their own portions.

---

### Asilah Amirah binti Khairuddin — Sales Coordinator

##### Responsibilities
- Forwards customer POs into MAIA via Telegram.
- Submits SO/Invoice directly (SL-7, superseded — previously blocked, now no gate exists).
- Creates new customer/item records via chatbot (SL-11, locked).

##### Permissions
- **Visibility scope still open** — whether she sees only her own assigned customers/orders or all of Dalson's orders is unconfirmed anywhere in sources (Gap #5, End-user & Process Map).

##### Benefits
- New-customer/item creation no longer requires a separate manual AutoCount pass — directly closes VOC-015/016/017/030.

##### Risks
- Role description in sources is still owner-reported (BELIEVED), not her own voice — worth confirming directly at UAT sign-off.

---

### Joseph — Store Keeper / Admin

##### Responsibilities
- Receives confirmed orders, packs directly.
- Same direct submission rights as Yap Li Min and Asilah (SL-7) — not his normal day-to-day, but available if it falls to him.

##### Benefits
- Order routing through MAIA instead of a forwarded WhatsApp message — same simple hand-off, less ambiguity about what to pack.

##### Risks
- No formal pick-list step is introduced by MAIA — the workflow simplicity is preserved, but so is the lack of a structured picking check.

---

### Driver(s) — *identity NEEDS CLIENT INPUT*

##### Responsibilities
- Completes delivery, captures POD photo via MAIA (SL-5).

##### Open gap
- The 3-person MAIA User List (Yap Li Min, Asilah, Joseph) has **no separate driver entry**. Whether Joseph doubles as driver, delivery is ad hoc/outsourced, or a fourth person needs registering is unconfirmed — must be resolved before UAT execution and training (Gap #4, End-user & Process Map).
- MAIA identifies users only by the personal WhatsApp/Telegram number they message from — a driver, once identified, needs their own registered number, not a shared logistics line.

---

### Ms Tan — AutoCount Software Support (external, not a MAIA end-user)

##### Responsibilities
- Manages Dalson's AutoCount instance; coordinated data migration and integration access (SL-6).
- Technical point of contact for any AutoCount-side sync questions.

##### Not a MAIA user
- No MAIA login, view, or submission rights — AutoCount-side only.

---

## Open Gaps Carried Into This Doc

1. **UAT signatory** — sole (Yap Li Min) vs. multi-signatory (Asilah/Joseph/driver each on their portion). *(open)*
2. **Driver identity** — not covered by the 3-person User List. *(open)*
3. **Asilah's visibility scope** — own customers only vs. all of Dalson's orders. *(open)*

---

## See Also
- [[Dalson — VoC Extraction]]
- [[Dalson — End-user & Process Map]]
- [[Dalson — UAT Checklist]]
- [[Dalson — Lens Alignment Report]]
- Scope Lock v2 — Dalson Industrial Supplies (Lark, doc token `VHQPdEnCbopM9pxRapJliGiXgrb`)
