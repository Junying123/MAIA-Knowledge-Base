---
owner: Gareth
status: draft
last_reviewed: 2026-07-19
---

# Dalson Industrial Supplies — End-user & Process Map

Sources: Scope Lock v2 (2026-07-14) · VoC Extraction (2026-07-14) · UAT Checklist (2026-07-14) · Dalson Industrial Supplies Customer Narrative Document (vendor voice — context only) · **Dalson Sample Data Checklist (Lark, `MAIA User List` section, revision 62)** — first source with a real named roster + emails + WhatsApp numbers for this account.

`MISSING SOURCE: Forensic Dossier` — none exists for Dalson.

---

## 1. Actor & Role Register

| Actor (real name) | MAIA role | Authority | Contacted? | UAT signatory? | What they do in MAIA | Voice confidence |
|---|---|---|---|---|---|---|
| **Yap Li Min** (`dalsonmultisupply@gmail.com`, WhatsApp 6012-368-1558) — this is "Yap Li Min" from the VoC/Scope Lock transcripts; MAIA User List names her role as **"sales coordinator/owner"** (dual role, not owner-only) | Management / Sales (sole approver) | Sole SO/Invoice approval authority (Scope Lock SL-7, locked) | YES — attended the 2026-05-22 requirements session directly | **Likely, but not formally confirmed** — see Gap #1 | Reviews and approves draft SO/Invoice; sets business rules (credit note policy, receipt policy); field/mobile-based, uses MAIA remotely | CONFIRMED — identity now grounded in the MAIA User List, not just the transcript |
| **Asilah Amirah binti Khairuddin** (`dalsonsales.wei@gmail.com`, WhatsApp 6017-574-6626) | Sales / Admin | Uploads/processes orders; does **not** have SO/Invoice approval authority (explicitly tested as a must-block case, UAT UP-14) | YES — named in MAIA User List | **NEEDS CLIENT INPUT** — named now, sign-off role still unconfirmed | Forwards customer POs into MAIA; handles invoice/customer creation in AutoCount today (desk-based, in-office) | CONFIRMED identity (User List); role description still BELIEVED — Yap Li Min/Yap described the coordinator's day-to-day only in third person, this person has not spoken directly in any source yet |
| **Joseph** (Admin/Store Keeper — no email on file, WhatsApp 6017-224-8046) | Logistics | Packs confirmed orders; no formal pick-list role today | YES — named in MAIA User List | **NEEDS CLIENT INPUT** | Receives forwarded PO, packs order directly | CONFIRMED identity (User List); role description still BELIEVED — same third-person-only sourcing as above |
| Driver(s) | Logistics | Captures proof-of-delivery | **STILL NEEDS CLIENT INPUT** — the 3-person User List (Yap, Asilah, Joseph) has no separate driver entry | **NEEDS CLIENT INPUT** | Uploads POD photo via MAIA after delivery (Scope Lock SL-5, locked) | BELIEVED — driver-workspace requirement is confirmed (VOC-010), but it's now unclear whether Joseph doubles as driver, delivery is ad hoc/outsourced, or a driver simply wasn't listed. Confirm at sign-off — do not assume Joseph covers this. |
| Ms Tan (AutoCount Software Support) | Admin (external, not a MAIA end-user) | AutoCount system owner/dealer; technical point of contact for integration | YES — contact details on file (`easysoftprosolution@gmail.com`) | N/A — not a MAIA end-user | Manages Dalson's AutoCount instance; was the party who granted AutoCount access and coordinated the data migration (Scope Lock SL-6) | CONFIRMED — cross-referenced against `Dalson MAIA autocount integration.md` contact table |

**Checkpoint — headcount resolved.** The Customer Narrative's vendor-sourced "2 sales coordinators, plus warehouse and delivery involvement" is now corroborated close enough by the MAIA User List: 1 coordinator (Asilah) + 1 store keeper (Joseph) + Yap Li Min herself also carrying a coordinator role = effectively 2 coordinator-capable people, matching the vendor estimate. Driver headcount remains unconfirmed — this is the one identity gap the User List did not close.

**Access-control rule, newly confirmed:** MAIA identifies each user by the WhatsApp number they message from. Unregistered numbers are not recognised and get no response — this is by design, not a bug. Shared/office numbers must not be registered; each person needs their own. This directly firms up the Permission Matrix's access boundaries in Section 5.

---

## 2. Order-Intake Map

- **Channel today (as described by Yap Li Min):** calls, WhatsApp, some email — unstructured, staff manually interpret.
- **Channel for MAIA production (locked 2026-07-13** — Scope Lock SL-3): **Telegram**. Note this is a shift from what Yap Li Min was walked through during the original May 2026 setup session (dedicated WhatsApp Business number, new phone number solely for MAIA) — the switch has since been confirmed with the client directly (per PM, 2026-07-12), so no open risk remains, but it is worth remembering during training/onboarding materials that Yap Li Min's original mental model was WhatsApp-specific.
- **One number vs many:** MAIA operates on a single dedicated messaging account (originally scoped as a WhatsApp-only number "no one can use it at all... this number is only for Maya"), now realized on Telegram instead. Single-number model carries over.
- **Who forwards:** customer sends PO/order request → forwarded into MAIA by staff. Now that Asilah (sales coordinator) and Yap Li Min (owner, also coordinator-role) are both named and registered MAIA users, either can plausibly forward — sources still don't state a hard rule for which one does it day-to-day. Downgraded from a full identity gap to a workflow-detail gap.
- **Human review before submit:** MAIA prepares a draft; Yap Li Min reviews and approves before anything is pushed to AutoCount (Scope Lock SL-1 acceptance criteria: "no scenario where MAIA replaces AutoCount as ledger/invoicing source"; SL-7: sole approver).
- **Must-NOT:** an order draft must never be auto-pushed/finalized without Yap Li Min's explicit approval (tested directly in UAT UP-02, UP-15).

---

## 3. Document Flow

| Document | Generated by role | Trigger | AutoCount constraint |
|---|---|---|---|
| Quotation | MAIA (draft) → Yap Li Min reviews | Customer inquiry / early-stage order | Not pushed to AutoCount until confirmed |
| Invoice | MAIA (draft) → Yap Li Min approves | Confirmed order | Pushed to AutoCount as final ledger record; AutoCount remains system of record (SL-1) |
| Delivery Order (DO) | MAIA, tied to fulfillment | Delivery scheduled/completed | Stores POD attachment against the order trail (SL-5) |
| Credit Note | Yap Li Min / finance | Customer return, tied to a **specific invoice ID** | Invoice-level only — account-level credit notes explicitly rejected (SL-8, VOC-022) |
| Receipt | On customer request only, not automatic | Customer explicitly asks | **Resolved in Scope Lock v2** — SL-17, LOCKED. No longer a gap. |

**Resolved — SO stage.** Yap Li Min stated directly in the requirements transcript that **no formal Sales Order stage exists** in Dalson's current process ("I understand that you may have foreseen your quotation, your phone invoice. No sales order" — VOC-021, CONFIRMED). Scope Lock v2 (SL-13) reconciled this: Invoice + DO push to AutoCount, the SO/quotation-equivalent stays inside MAIA only, and new customers get a MAIA-generated proforma document for upfront payment — verbally agreed on the 2026-05-22 call, so SL-13 was locked at MED confidence pending written sign-off.

**That written sign-off now exists.** The Sample Data Checklist doc (Lark, section "Sample Transaction Documents") states: *"You are happy to use MAIA's template for Sales Orders and Proforma Invoices for new customers. Invoices will continue to be generated via AutoCount."* This is written, not verbal, confirmation of the same arrangement SL-13 describes. **Recommend bumping SL-13 to HIGH confidence in the next Scope Lock pass** — not done in this map, since Process Map doesn't own Scope Lock's confidence field, but flagging it here so it isn't missed.

**ERP-master boundary:** MAIA sits on top of AutoCount; AutoCount remains the accounting/invoicing core throughout (Scope Lock SL-1, HIGH confidence, locked).

---

## 4. Step-by-Step Process Map

1. Customer sends order request (PO / text / call) to Dalson.
2. Staff (Asilah, as sales coordinator, or Yap Li Min herself — both named/registered MAIA users; exact day-to-day split not stated in sources) forwards it into MAIA via Telegram.
3. MAIA extracts an order draft, matching item descriptions to internal SKUs (SL-4, core platform matching engine — locked).
4. MAIA references AutoCount for customer, pricing, and stock data (SL-6, access granted, data migrated).
5. Yap Li Min reviews the draft and approves — sole approval authority (SL-7).
6. Approved order is pushed to AutoCount; AutoCount remains system of record (SL-1).
7. Confirmed order is forwarded to Joseph (Admin/Store Keeper), who packs it directly — no formal pick-list step today (VOC-019/020).
8. Delivery is carried out; driver captures POD photo via MAIA, stored against the order/DO trail (SL-5) — directly resolves the "master DO" retrieval pain point Yap Li Min raised (VOC-012). **Who the driver actually is remains unconfirmed** — Joseph is named as store keeper, not driver; do not assume he covers this without asking.
9. Invoice is finalized in AutoCount.
10. If a return occurs, credit note is issued against the specific invoice ID, never at account level (SL-8).
11. Receipt is generated only if the customer specifically requests one (SL-17, locked).

### Per-role swimlane

| Role | What they do across the flow |
|---|---|
| **Yap Li Min** | Reviews and approves every draft SO/Invoice; sets and enforces business rules (credit note, receipt policy); the only person with final sign-off |
| **Asilah Amirah binti Khairuddin** (sales coordinator) | Forwards customer orders into MAIA; historically handles direct AutoCount data entry and invoice/customer creation (desk-based) |
| **Joseph** (Admin/Store Keeper) | Receives confirmed orders, packs and prepares for delivery |
| **Driver(s)** *(NEEDS CLIENT INPUT — identity; not covered by the 3-person User List)* | Completes delivery, captures POD photo via MAIA |
| **Ms Tan** (external, not a MAIA end-user) | Manages AutoCount system; granted integration access and coordinated data migration; ongoing technical point of contact |

---

## 5. Permission Matrix

| Role | Can create | Can approve | Can view (own vs all) | Cannot do |
|---|---|---|---|---|
| Yap Li Min | Draft orders, credit notes, receipts (on request) | SO / Invoice (sole approver, SL-7) | All | — |
| Asilah (Sales Coordinator) | Draft orders (forward PO into MAIA); **new customer/item records via chatbot (SL-11, LOCKED 2026-07-19 — confirmed with Ivan)** | **Cannot approve SO/Invoice** — explicitly tested as a must-block case (UAT UP-14) | **NEEDS CLIENT INPUT** — own vs all customer visibility not confirmed anywhere in the sources | Approve/finalize SO or Invoice |
| Joseph (Store Keeper) | — | — | **NEEDS CLIENT INPUT** | Approve orders; not confirmed whether he has any MAIA-facing access at all vs. receiving forwarded instructions only |
| Driver(s) | POD photo upload | — | Own delivery assignments only (assumed, **NEEDS CLIENT INPUT** to confirm) | Approve orders, access customer/pricing data |
| Ms Tan | N/A (not a MAIA user) | N/A | N/A | Not a MAIA end-user — AutoCount-side only |

**Registration rule (new):** MAIA recognises users only by the personal WhatsApp number they message from — shared/office numbers are explicitly disallowed. Yap Li Min, Asilah, and Joseph each have a personal number on file; whoever the driver turns out to be will need their own number registered too, not a shared logistics line.

**New customer/item creation via chatbot (Scope Lock SL-11):** LOCKED 2026-07-19, confirmed with Ivan — full chatbot-based creation, not a fallback. Assigned to Asilah (Sales Coordinator) above, matching the existing pattern for who forwards/creates orders. Include in training and config now that it's resolved.

---

## 6. Gaps & Sign-off Agenda

Each line below is one question to close at the workflow/UAT sign-off session. Three of the original seven are now closed by the MAIA User List and the written SO/proforma confirmation; four remain:

1. **UAT signatory** — is Yap Li Min the sole UAT signatory, or will Asilah/Joseph/driver also execute and sign off on their portions of the checklist? *(open)*
2. ~~Sales coordinator identity~~ — **CLOSED.** Asilah Amirah binti Khairuddin, confirmed via MAIA User List.
3. ~~Warehouse/packing staff identity~~ — **CLOSED.** Joseph (Admin/Store Keeper), confirmed via MAIA User List.
4. **Driver identity** — who will be using the driver-facing POD capture flow? The 3-person User List (Yap, Asilah, Joseph) has no driver entry — confirm whether Joseph doubles as driver, delivery is ad hoc/outsourced, or a fourth person needs registering. Needed before UAT execution and training (M9). *(open, narrowed)*
5. **Sales coordinator visibility scope** — does Asilah see only her own assigned customers/orders, or all of Dalson's orders? Not addressed anywhere in the current sources. *(open)*
6. ~~SO-stage confirmation~~ — **CLOSED.** Sample Data Checklist doc has written confirmation of the SO-stays-in-MAIA / proforma-for-new-customers arrangement — see Section 3. Recommend this trigger a Scope Lock v2 confidence bump on SL-13 (verbal MED → written HIGH), separately from this map.
7. ~~Receipt rule scope home~~ — **CLOSED.** SL-17 in Scope Lock v2.

---

## See Also
- [[Dalson — VoC Extraction]]
- [[Dalson — UAT Checklist]]
- [[Dalson — Lens Alignment Report]]
- Scope Lock v2 — Dalson Industrial Supplies (Lark)
- Dalson Sample Data Checklist (Lark) — source of the MAIA User List roster
