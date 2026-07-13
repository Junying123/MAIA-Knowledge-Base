---
owner: Gareth
status: draft
last_reviewed: 2026-07-13
client: Fixguru
document_type: internal
version: v1
---

# Fixguru — End-user & Process Map

Sources: Scope Lock v2 (Lark, https://eg69120xnei.sg.larksuite.com/wiki/AdBgwaw2TiMhFOkChoVlJVKGgng), [[Fixguru — VoC Extraction]], Forensic Account Dossier (Lark, "22 June 26 - Forensic Account Dossier"), Client Narrative v2 (Lark, "Fixguru - Client Narrative v2"), `Role Permission/MAIA_Role_Permission_Fixguru_Completed.csv`.

None of these four core sources were previously synced to the KB or listed in Scope Lock v2's own Source Manifest — pulled fresh from Fixguru's actual Lark folder for this map (see note in Section 6).

---

## 1. Actor & Role Register

| Actor (real name) | MAIA role | Authority | Contacted? | UAT signatory? | What they do in MAIA | Voice confidence (VoC) |
|---|---|---|---|---|---|---|
| **Xiao Ling** | Sales User | Operational | YES (named UAT tester) | UNKNOWN | Create/edit Quotation, Sales Order; read Customer, Invoice, Payment | Thin — named as tester, not directly quoted |
| **Hayati** | Sales User | Operational | YES (named UAT tester) | UNKNOWN | Same as above | Thin |
| **Zuha** | Sales User | Operational | YES (named UAT tester) | UNKNOWN | Same as above | Thin |
| **Syahira** | Sales User | Operational | UNKNOWN — not on the 2nd UAT tester list, only on the role roster | UNKNOWN | Same as above | None — name only, no quoted voice anywhere |
| NEEDS CLIENT INPUT | Sales Manager | Approval-level (per permission matrix, Sales Manager scoped separately from Sales User) | NO — role exists in permission matrix but no name assigned | UNKNOWN | Approval role not yet named | None |
| **Asrul** | Logistics User | Operational | UNKNOWN | UNKNOWN | Create/edit Inventory, Delivery Note, Issue, Stock Reservation Entry | None — no direct quote, name only from roster |
| **Fadzil** | Logistics User | Operational | UNKNOWN | UNKNOWN | Same as above | None |
| **Azizah** | Logistics User | Operational | UNKNOWN | UNKNOWN | Same as above | None |
| NEEDS CLIENT INPUT | Logistics Manager | Approval-level (per permission matrix) | NO | UNKNOWN | Approval role not yet named | None |
| **Abishaah** | Finance Manager | Approval / submit-level (Invoice, Payment, Credit Note, Accounting — full READ/WRITE/CREATE/SUBMIT) | YES (named 2nd UAT tester, as "Abishaah/Wendy") | UNKNOWN | Customer, Quotation, SO, Invoice, Payment, Credit Note, Accounting — full rights incl. submit | Thin — named as tester |
| **Wendy Wang** | Finance Manager | Same as Abishaah | YES (named 2nd UAT tester) | UNKNOWN | Same as above | Thin |
| **Nisa** | Finance User | Operational (no submit rights) | UNKNOWN | UNKNOWN | Customer, Quotation, SO, Invoice — read/write/create, not submit | None |
| **Marcus Lim** | Admin | Full admin (READ/WRITE/CREATE/SUBMIT across all doctypes per matrix, plus DELETE on Sales Taxes/Charges section) | YES — named UAT tester, quoted directly in 14 May transcript and 24 Jun debrief | Possibly — treated as a primary blocking voice ("Gareth (Fixguru)" in 24 Jun debrief attendee list may be a name mismatch; Marcus is the consistently-named actor across both dossier and debrief) | Full system administration | **Strongest voice in corpus** — most VoC rows (VOC-001 through VOC-024) trace to this actor or a closely-related unnamed "Guest" |
| **Steven Gan** | Admin | Full admin | UNKNOWN | UNKNOWN | Same as Marcus Lim | None |
| **Yvonne Choo** | Admin | Full admin | YES — named across multiple meetings, action items assigned to her (e.g. real WhatsApp order-intake samples) | UNKNOWN | Same as above | Moderate — named specifically for order-format questions, not directly quoted in transcripts reviewed |
| **Jennifer Gan** | Admin | Full admin | UNKNOWN | UNKNOWN | Same as above | None |
| Stephen | Unclear — mentioned as possible attendee, not on the role roster | UNKNOWN | Possibly (mentioned joining 7 Apr UAT brief) | UNKNOWN | UNKNOWN | INSUFFICIENT EVIDENCE (Forensic Dossier B4) |
| Gareth Ng | Mindhive PM (vendor-side, not a MAIA end user) | Delivery owner/coordinator | N/A (vendor) | No — vendor-side, cannot be the client signatory | Runs UAT test cases, triages gaps, coordinates dev | Vendor voice, not customer voice |
| Amirul, Bryan, Azib, WeiShen | Mindhive developers (vendor-side) | Implementation owners for specific fixes | N/A (vendor) | No | Build/fix chatbot, FE, calculator, integration items | Vendor voice, not customer voice |
| Johnson Goh, Jermaine | Mindhive executives (vendor-side) | Commercial/technical authority | N/A (vendor) | No | Commercial accountability, scope/product decisions | Vendor voice, not customer voice |

**UAT signatory — NEEDS CLIENT INPUT.** This is the #1 identity gap. The Forensic Dossier explicitly flags it (B11): "Who can sign UAT? 2nd UAT plan lists testers, not signatory... unresolved signing authority is a high-risk account control gap." The 2026-06-24 debrief action item C6 ("Confirm UAT sign-off authority — is Gareth the signatory?") also remains open. **Do not assume any of the named testers above has signing authority until confirmed.**

**Checkpoint:** the central blocking voice across most of the VoC corpus (historical pricing escalation, credit/approval detail, item code accuracy) is attributed with only BELIEVED confidence to a specific individual — likely Marcus Lim based on cross-referencing the Forensic Dossier's actor table against the transcript "Guest" label, but not CONFIRMED. This does not block the map (the operational content stands regardless of exact speaker), but it should be resolved at the sign-off session alongside the UAT signatory question.

---

## 2. Order-Intake Map

- **Channel:** WhatsApp only, internal chatbot (L-02, LOCKED). Fixguru does not use a customer-facing chatbot — customers message Fixguru's sales team externally (their own WhatsApp/phone), and **sales forwards the order details into the internal MAIA chatbot** (Client Narrative v2: "the agent forwards the customer request, files, images, or order details to the MAIA chatbot").
- **Format:** informal — customer sends item names/codes, quantities, sometimes images. No fixed structured format confirmed from the customer side. Real WhatsApp order-intake message samples were an open action item (2026-06-24 debrief, C1, owned by Yvonne) — **NEEDS CLIENT INPUT**, samples not yet in the corpus.
- **Customer identification:** phone/mobile-number-first — customers are often known only by WhatsApp number, not company name (AIP-03, VOC-002). Partial-number search still unconfirmed.
- **Language:** intake can arrive in English, Malay, or Mandarin; MAIA's response is English/Malay only per user preference (NS-09, "implemented — needs testing").
- **Human review before submit:** mandatory. Per L-04 (LOCKED), draft quotations/SOs stay editable until the sales user explicitly confirms — chatbot must not silently submit. This is the must-NOT rule: **a forwarded customer message must never auto-submit to AutoCount without a human confirm step.**
- **Concurrency:** sales agents handle 4–10 active customer orders simultaneously, one team processes ~30 invoices/day (Forensic Dossier B3, Client Narrative v2) — the intake flow must support context-switching between multiple in-flight drafts, not a single linear conversation.

---

## 3. Document Flow

| Document | Generated by role | Trigger | ERP/system-of-record boundary |
|---|---|---|---|
| Quotation / Pro-forma Invoice | Sales User / Sales Manager | Sales forwards customer request into chatbot | Drafted in MAIA, synced to AutoCount on submission (L-01) |
| Sales Order | Sales User / Sales Manager (Finance Manager/User and Admin also have create rights per permission matrix) | Quotation confirmed by customer | One proforma may have two or more DOs (L-03); SO submitted to AutoCount |
| Delivery Note / DO | Logistics User / Logistics Manager (Sales, Finance, Admin also have create rights) | SO confirmed, picking begins | Immediate stock movement on issuance (L-01 acceptance criteria); DN syncs to AutoCount |
| Invoice | Finance Manager / Finance User (submit rights: Finance Manager, Admin only) | Delivery outcome confirmed | Follows delivery date; syncs to AutoCount; traces back to originating SO/DO (L-03) |
| Payment / Receipt | Finance Manager / Finance User (submit: Finance Manager, Admin) | Customer payment recorded | Two-way sync with AutoCount |
| Credit Note | Finance Manager / Finance User | Linked to a submitted invoice | Syncs to AutoCount on submission |
| Stock Entry / Inventory movements | Logistics Manager / Logistics User (create+submit); others read-only | DN issuance, stock reservation | AutoCount remains the authoritative stock/accounting record (L-01, LOCKED) — **MAIA sits on top, AutoCount stays master.** |

**System-of-record boundary (L-01, LOCKED):** AutoCount is the authoritative database for customer, product, stock, and accounting records. MAIA must pull from and push to AutoCount, never become an independent conflicting master. No MAIA-generated document should create a duplicate/conflicting AutoCount record, and sync failure must be visible to internal users or management.

---

## 4. Step-by-Step Process Map

### The spine (order arrival → cash)

1. **Customer messages Fixguru externally** (their own WhatsApp) with an order request — item names/codes, quantities, sometimes images. *(Sales, external channel)*
2. **Sales agent forwards the request into the internal MAIA WhatsApp chatbot.** *(Sales, WhatsApp)*
3. **Sales agent queries historical pricing** for the customer + item via chatbot; chatbot returns a standalone FE URL (AIP-01/AIP-02, LOCKED 13 Jul 2026) showing all past invoice transactions — date, invoice no, qty, standard price, discount %, net price. *(Sales, WhatsApp → FE link-out)*
4. **Sales agent decides the price/discount** using that history, tells the chatbot which price to apply. If the price falls below the item+UOM minimum, the system routes to approval (AIP-06, item+UOM threshold resolved 13 Jul). If the customer has a locked price-book price, approval is bypassed unless the new price undercuts even that (Q13, resolved). *(Sales, WhatsApp; Management if approval triggers)*
5. **MAIA drafts the Quotation / Pro-forma Invoice**, editable until confirmed (L-04, LOCKED). Sales can keep amending — item, quantity, delivery method, charges — before submitting. *(Sales, WhatsApp/FE)*
6. **Sales confirms delivery method + charge explicitly** in the same instruction (e.g. "fulfillment method Lalamove, delivery charge RM10") — chatbot does not auto-add a charge line without an explicit amount (L-07, LOCKED). *(Sales, WhatsApp)*
7. **Sales confirms and submits** — Quotation becomes Sales Order, syncs to AutoCount with AutoCount's external document ID/running number, not MAIA's internal ID (L-01, L-08). *(Sales → AutoCount sync)*
8. **If credit exposure is at risk, block occurs at Delivery Note creation, not at SO creation** (NS-04, resolved 13 Jul — dev configured, pending client test). Approver (Management/Finance Manager) sees credit context before deciding. *(Management/Finance, FE or chatbot)*
9. **Logistics/Warehouse prepares picking** — Delivery Note generated, shelf number populates in the DN's additional-note field (NS-08, resolved), stock decrements. *(Logistics User/Manager)*
10. **Delivery executes** (internal delivery, Lalamove, or self-pickup); driver flow / proof-of-delivery per Client Narrative v2's "Delivery and Driver Module" — **not yet a locked Scope Lock item**, treat as AIP-level until confirmed.
11. **Invoice generated from the delivered SO/DO**, traceable back to origin. FOC quantities (if any) decrement stock but not revenue (L-06, LOCKED). *(Finance Manager/User)*
12. **Payment recorded**, credit exposure recalculated (unbilled SO + outstanding invoices, per VOC-029 — formula itself still not fully locked). *(Finance Manager/User)*
13. **Credit Note raised if needed**, linked to the submitted invoice. *(Finance Manager/User)*

### Per-role swimlane

| Role | What they do across the flow |
|---|---|
| **Sales** (Xiao Ling, Hayati, Zuha, Syahira + Sales Manager NEEDS CLIENT INPUT) | Steps 2–7: forward order, check historical pricing, decide price/discount, draft and confirm Quotation/SO, state delivery method+charge explicitly |
| **Logistics/Warehouse** (Asrul, Fadzil, Azizah + Logistics Manager NEEDS CLIENT INPUT) | Step 9: prepare Delivery Note, picking, shelf reference, stock movement |
| **Finance** (Abishaah, Wendy Wang, Nisa) | Steps 8, 11–13: credit approval context, Invoice, Payment, Credit Note — Finance Manager has submit rights, Finance User does not |
| **Management/Admin** (Marcus Lim, Steven Gan, Yvonne Choo, Jennifer Gan) | Step 4 and 8 approvals (below-floor price, credit exceeded); full system access across all doctypes per the permission matrix |
| **Driver** | Step 10 — proof-of-delivery upload via chatbot (Client Narrative v2); **no named individual confirmed anywhere in the corpus — NEEDS CLIENT INPUT** |

---

## 5. Permission Matrix

Pulled directly from `Role Permission/MAIA_Role_Permission_Fixguru_Completed.csv` (client-confirmed, not inferred):

| Role | Can create | Can approve/submit | Can view | Cannot do |
|---|---|---|---|---|
| **Sales Manager** | Quotation, Sales Order, Delivery Note, Issue, Stock Reservation Entry, Sales Taxes and Charges, Payment Term/Item Tax config | Issue, Stock Reservation Entry (submit); Sales Order/Quotation NOT submit-capable per matrix | Customer, Invoice, Payment, Credit Note (read-only) | Cannot submit Invoice or Payment directly; cannot create/submit Accounting entries |
| **Sales User** | Quotation, Sales Order, Delivery Note | — (no submit rights shown) | Customer, Invoice, Payment (read-only) | Cannot submit any document; cannot touch Inventory beyond read; cannot access Accounting |
| **Logistics Manager** | Inventory (Item/Batch/Serial/Warehouse/Stock Entry/Pick List), Delivery Note, Issue, Stock Reservation Entry | Inventory, Issue, Stock Reservation Entry (submit) | Customer (read) | Cannot touch Quotation, Sales Order, Invoice, Payment, Credit Note, Accounting at all |
| **Logistics User** | Inventory, Delivery Note, Issue, Stock Reservation Entry | — (no submit rights) | Customer (read) | Same exclusions as Logistics Manager, plus no submit |
| **Finance Manager** | Customer, Quotation, Sales Order, Invoice, Payment, Credit Note, Delivery Note, Issue, Stock Reservation Entry, Accounting (GL/Payment Entry/Sales Invoice), Sales Taxes and Charges, config | Full submit rights across Customer, Invoice, Payment, Delivery Note, Issue, Stock Reservation Entry, Accounting | Inventory (read only — not create) | Cannot create/submit Inventory movements directly (Logistics owns that) |
| **Finance User** | Customer, Quotation, Sales Order, Invoice, Payment, Credit Note, Delivery Note, Issue, Stock Reservation Entry, Accounting, Sales Taxes/config | Payment only (submit) | Inventory (read only) | No submit rights on Invoice, Credit Note, Delivery Note, Issue, Stock Reservation, Accounting, Sales Taxes |
| **Admin** | Everything | Everything, including SUBMIT on all doctypes; **DELETE rights on Accounting (GL Entry/Payment Entry/Sales Invoice)** — the only role with delete rights anywhere in the matrix | Everything | — (no restrictions found in matrix) |

**Flag — role isolation not explicitly tested.** The permission matrix is client-confirmed for what each role *can* do, but nothing in the corpus confirms whether MAIA *enforces* this at runtime (e.g. does a Sales User's chatbot session actually block an Invoice-submit attempt?). This is a live gap for the UAT Checklist to close — **NEEDS CLIENT INPUT / dev confirmation**, not assumed from the CSV alone.

---

## 6. Gaps & Sign-off Agenda

Ordered by blast radius — each line closes one identity or process gap before the workflow/UAT sign-off session:

1. **Who is the UAT signatory?** Unresolved since at least the 24 June debrief (action item C6). The 2nd UAT plan names testers, not a signatory. Payment Milestone 2 (RM24,000) depends on a valid sign-off — this is the highest-risk unresolved item in the entire account per the Forensic Dossier (B4, B11).
2. **Name the Sales Manager and Logistics Manager.** Both roles exist with defined permissions in the CSV matrix but have no assigned person. Approval-level actions (step 4, step 9's escalations) have no confirmed human owner.
3. **Name the driver(s).** The delivery/proof-of-delivery step (step 10) has zero named individuals anywhere in the four sources. If Lalamove/3PL handles all deliveries, confirm that explicitly — otherwise this is an unstaffed process step.
4. **Confirm real WhatsApp order-intake samples** (2026-06-24 debrief action item C1, owned by Yvonne, still outstanding) — needed to validate the Order-Intake Map (Section 2) against actual message formats, not assumption.
5. **Resolve the "Guest" attribution.** The richest single VoC source (2026-05-14 on-site transcript) attributes its content to an unnamed "Guest" — cross-referenced as BELIEVED to be Marcus Lim, but not confirmed. This affects how much weight to give that voice relative to other named actors.
6. **Confirm role-isolation enforcement.** The permission matrix defines what each role should be able to do; nothing confirms MAIA enforces it at runtime. Add as explicit UAT Checklist cases once confirmed as testable.
7. **Note for whoever builds on this map next:** the Customer Narrative v2, Forensic Account Dossier, and the completed Role Permission CSV all existed in Fixguru's Lark folder and answered questions this session had been treating as unresolved (e.g. real named actors) — but none of the three were listed in Scope Lock v2's own Source Manifest, and none had been pulled into the KB before today. Worth checking Fixguru's Lark folder directly rather than only the KB or a single Scope Lock doc's manifest when starting future work on this account.

---

## See Also

- [[Scope Lock v1 — Fixguru]]
- [[Fixguru — VoC Extraction]]
- [[Fixguru — Lens Alignment Report]]
- [[UAT/Fixguru — UAT Checklist]]
- [[Role Permission/MAIA_Role_Permission_Fixguru_Completed]]
