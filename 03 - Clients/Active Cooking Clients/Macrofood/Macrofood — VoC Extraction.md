---
owner: Gareth
status: draft
last_reviewed: 2026-07-14 (Grace call reconciled)
artifact_url: https://claude.ai/code/artifact/2028ed59-4119-4e22-9f11-357068bb85c2
lark_url: https://eg69120xnei.sg.larksuite.com/wiki/Pm4OwqdgFi8EQ2kx5BClxtnVgWb
---

# Macrofood (Macro Frozen) × MAIA — Voice of Customer Extraction

> **Team-handoff site (visual overview):** https://claude.ai/code/artifact/2028ed59-4119-4e22-9f11-357068bb85c2
> **Lark mirror:** https://eg69120xnei.sg.larksuite.com/wiki/Pm4OwqdgFi8EQ2kx5BClxtnVgWb

> Grounded, confidence-scored VoC. Truth source = the 4 June 2026 F2F Requirements
> Gathering transcript. This is the check against wishful selling: what David and
> the Macro Frozen team actually said, separated from what vendor documents claim.

---

## Phase 0 — Source Inventory & Coverage Gate

| Source | Type | Voice class | Use in this extraction |
|---|---|---|---|
| `[F2F] Macrofood Requirements Gathering-transcript v2` (4 Jun 2026) | Meeting transcript, garbled ASR, unlabelled speakers | **Primary — TRUTH SOURCE** | Main basis for every CONFIRMED customer claim |
| Macrofrozen WhatsApp group export (22 May – 22 Jun) | Chat export, fragmentary | **Primary** | Setup behaviour, catalogue follow-up, SQL blocker, pricing cadence confirmation |
| `[F2F] … Meeting Minutes 2026-06-04` / `F2F Requirements Gathering Summary` | Vendor-authored minutes | Secondary / vendor-derived | Corroborate decisions, capture clean wording where ASR is garbled |
| Prior "MAIA × Macro Frozen — VoC Extraction" (Lark doc `Pm4Owq…`) | Vendor-authored prior analysis | **Not customer voice — CLAIMED** | Cross-check only; never a source of fact |
| Pre-Onboarding Requirements Questionnaire | Vendor-authored guide | Not customer voice | Actor identity + open-question context only |
| Proposal / Customer Narrative | Vendor-authored | Not customer voice | Scope boundary + risk comparison only |
| `Ivan x Gareth Macrofrozen scope lock discussion` (13 Jul 2026) | Internal scope re-check transcript, vendor-side only (Ivan + Speaker 3) | **Internal — not customer voice**, but relays one second-hand client statement (Grace, item historical pricing → VOC-030) | Confirms mechanism detail on AS-01/AS-03/NS-07; surfaces VOC-030; source for warehouse-adoption partial answer below |
| `Macrofrozen Client Scope Lock Clarification` (13 Jul 2026, call with Grace) | Direct client call, vendor + Grace | **Primary — direct client voice** (Grace, finance/ops admin) | Resolves VOC-030 to CONFIRMED (was second-hand); adds VOC-031 (role/permission reality), VOC-032 (customer-agent SQL assignment), VOC-033 (AR auto-match adoption skepticism), VOC-034 (backup-coverage gap), VOC-035 (customer PO issuance — 3 customers, new 2026-07-14); updates VOC-024 with a direct conflict (client rejects POD photo-upload-to-Maya); narrows VOC-014's evidence (formal quotations barely used in practice) |

**Coverage verdict: proceed-with-caveats.**

- **Well represented:** David (owner / MD / de-facto credit controller) — dominates the transcript. Finance/account voice (Speaker 5) present on cash, CN numbering, QR settlement.
- **Thin:** warehouse/picker voice (spoken *about* by David, never *by* a warehouse user), sales reps CJ/others (named, barely heard), the account/consultant who does bank recon (described, absent).
- **Absent:** Macro Frozen's own end customers, the driver, the SQL vendor.

**What the corpus licenses:** confident conclusions on the order-to-cash workflow, pricing pain, AR/reconciliation, credit control, catalogue intent, and the picking-accountability problem. **What it does not license:** treating warehouse-adoption, POD accuracy, or end-customer document preferences as confirmed — those rest on David's second-hand account.

---

## Phase 1 — Actor & Role Register

| Raw label | Re-attributed identity | Role | Confidence | Basis |
|---|---|---|---|---|
| Speaker 2 | **David Chong** | Customer-side owner / MD / de-facto credit controller & coordinator | **CONFIRMED** | Speaker 4 says "answering **Mr. David's** question" (transcript L110) directly after Speaker 2's warehouse/GRN questions; Speaker 2 self-identifies as the sole coordinator — "who is coordinating everything? **Me**" (L260) |
| Speaker 5 | Finance / account rep | Customer-side finance/admin (AR, cash, CN) | **BELIEVED** | Raises CN numbering practice (L827), QR-merchant settlement (L788), and Excel cash-from-driver record (L1703); framed by David as the AR user |
| Speaker 1 / Speaker 3 / Speaker 4 | MAIA / Mindhive team | Vendor-side (facilitate, demo, scope) | **CONFIRMED** | They run the workflow recap, demo CPO/SO/pick-list, and ask discovery questions — vendor behaviour throughout |
| ~David Chong | David Chong | Owner / sponsor | **CONFIRMED** | Creates setup group, shares SQL contact + AWS/OpenAI credentials in chat |
| ~CJ Tan | CJ | Customer-side sales | **BELIEVED** | Named as sales; David confirms sales reps silo their own customers (L1661); minutes list CJ as Sales |
| ~Krystle Wong | Krystle | Customer-side ops/admin coordinator | **BELIEVED** | Coordinates scheduling + training logistics on Macro's behalf; non-saved-contact (`~`) in the export |
| ~Applle | Applle | Customer-side admin/setup | **BELIEVED** | Runs the AWS OTP / setup handshake in chat |
| ~Sean Looi | Sean | Customer-side ops/IT admin | **BELIEVED** | Asks for setup tutorials; `~` non-saved contact |

**Checkpoint:** No central customer actor is unresolved enough to block extraction. David = Speaker 2 is solid. The one caveat that matters: **the warehouse/picker — the actor at the centre of the biggest pain — is never heard directly.** Everything about picking accuracy is David's account of his staff.

---

## Phase 2 — Grounded Evidence Extraction

| ID | Category | Customer voice / tight paraphrase | Source | Confidence |
|---|---|---|---|---|
| VOC-001 | Current O2C workflow | Order comes via WhatsApp → sales manually interprets → warehouse cuts/weighs → **final weight differs from order** → docs generated → payment reconciled back to SQL | Transcript L2 (recap, David confirms) | **CONFIRMED** |
| VOC-002 | Order interpretation | Customer uses informal names; example: PO says "pork belly slight" but "we understand the customer actually need a pork belly slice skin on" | Transcript L167 | **CONFIRMED** |
| VOC-003 | Manual picking & routing | Pick lists grouped by delivery route/driver (KL, PJ, own station); orders sent into WhatsApp groups; **picking done on physical paper** | Transcript L281, L293 | **CONFIRMED** |
| VOC-004 | Picking accuracy & accountability | Core pain: "order 10 kilo, people pick 8 kilo, then checker checks, top is 10 kilo — 2 also wrong." Wants to prove **who picked, who checked**, and apply "punishment of the error" | Transcript L659, L665 | **CONFIRMED** |
| VOC-005 | Prefers own pick list | "I want to maintain my current picking list… I do sales order myself first, send warehouse, get all the quantity, then send back to MAIA" — wants to keep his paper flow, upload confirmed weights | Transcript L683, L701 | **CONFIRMED** |
| VOC-006 | GRN weight mismatch | "Supplier sent 1000 kilo, but after we count all the box are 998" — received qty differs from supplier docs | Transcript L104 | **CONFIRMED** |
| VOC-007 | Payer-name mismatch | Payment reference/payer name often doesn't match the customer or the invoice — "commonly called ABC but come to make the payment is not match" | Transcript L14 (David), L5 (vendor frames) | **BELIEVED** |
| VOC-008 | Payment methods & QR settlement | Customers pay by transfer, cash, and QR merchant scan; merchant compounds the day's QR into one bank line — reconciliation headache | Transcript L797 | **CONFIRMED** |
| VOC-009 | Cash-from-driver record | Finance records cash collected from drivers in a **self-made Excel** — who paid, which invoice | Transcript L1703 | **CONFIRMED** |
| VOC-010 | Pricing not in any system | "We **not update any system**… I just send this price list" via WhatsApp word/image generated through ChatGPT | Transcript L911, L917, L923 | **CONFIRMED** |
| VOC-011 | Pricing cadence | "Most time it's monthly but sometime update based on market situation" | WhatsApp L280; Transcript L905 | **CONFIRMED** |
| VOC-012 | Customer segments | Two categories: **wholesale** and **retail** (retail = restaurants/hotels); difference between them is quantity, not treatment | Transcript L941, L1576 | **CONFIRMED** |
| VOC-013 | Customer-specific price + floor enforcement | Wants fixed/customer-specific prices and min-price so "salesperson… cannot sell different than that price"; **volume-based pricing left unresolved** | Transcript L959, L986; vendor flags volume gap L1565 | **CONFIRMED** (volume-based = open) |
| VOC-014 | Quotation before order | Big customers "request a quotation first"; needs price-lock so a lower PO price than quoted is surfaced/blocked | Transcript L962, L977 | **CONFIRMED** (original ask) — ⚠️ **narrowed 2026-07-14**: Grace confirmed formal quotations are barely used in practice; salespeople mostly WhatsApp price directly and skip QTN even for new items/customers. The stated ask and the revealed daily behavior diverge — see VOC-033-adjacent note in Scope Lock AS-07. |
| VOC-015 | Product catalogue (image) | Wants image/picture catalogue (not long PDF list) for select in-stock SKUs — "old people… scared to click PDF"; sent to existing + new customers to signal "we are active" | Transcript L1007, L1013, L1061 | **CONFIRMED** |
| VOC-016 | Credit control — "one invoice" | "Most our customer they are one invoice — next order they have to pay the last invoice"; credit limit set from order pattern (e.g. 5,000/week) | Transcript L1586, L1616 | **CONFIRMED** |
| VOC-017 | One-time credit-limit override | Wants authorised person to raise/approve credit limit for a single order when a good customer's volume spikes | Transcript L851, L857 | **CONFIRMED** |
| VOC-018 | Pro forma invoice | Needs a document with the word "invoice" so a customer's financier accepts it; collects ~30% deposit against it | Transcript L1628, L1634 | **CONFIRMED** |
| VOC-019 | Sales territory isolation | Sales reps manage their own customers; "other sales people [cannot] check the other sales people customer — No" | Transcript L1658, L1661 | **CONFIRMED** |
| VOC-020 | Payment-chasing escalation | Chase order: account/finance alerts → sales chases → boss escalates last | Transcript L1679 | **BELIEVED** |
| VOC-021 | Credit-note numbering | Finance wants CN number to mirror the invoice number "because we don't want to confuse our customer" | Transcript L827 | **CONFIRMED** |
| VOC-022 | Inventory aging / expiry alert | Wants a report/notification for near-expiry & slow-moving stock — "import a container 78 tons, within 6 months only can sell 4 tons"; wants to trigger offers | Transcript L1430, L1442 | **CONFIRMED** |
| VOC-023 | Damage / batch QC log | Wants warehouse to photo-log damaged/discoloured stock against a batch ("come in yellow, plastic") for a data trail; batch not currently practised but willing | Transcript L1472, L1478 | **BELIEVED** |
| VOC-024 | POD via driver photo | Driver already sends signed DO photo to the group; asks if driver can send straight to MAIA and tag the invoice/DN | Transcript L473, L497 | **CONFIRMED** (original ask, discussed in principle) — 🚫 **CONFLICT surfaced 2026-07-14**: In the direct Grace call, when this was proposed concretely, Grace explicitly rejected it — "I appoint Maya to reduce my work, not add to it." Current process (photo → WhatsApp group only, no system status) is what she actually wants preserved. The earlier "in principle" interest and the concrete rejection are a direct contradiction — treat the earlier signal as superseded by this one, since it came from an actual operator being asked to do the work, not a general discussion. |
| VOC-025 | Stock count inaccurate in SQL | Stock check only **once a year**; SQL stock count off by ~10–20 — root cause is human process, not a system gap | Transcript L1331, L1337 | **CONFIRMED** |
| VOC-026 | WhatsApp blast wish (blocked) | Wants to blast new prices to 300–400 old-account customers; can't segment WhatsApp Business — vendor warns blasting bans the number | Transcript L1079, L1118 | **CONFIRMED** (wish); constraint is vendor-stated |
| VOC-027 | SQL stays master; must not break | Docs must conform to SQL's flow — invoice qty can't exceed DO qty, no duplicate invoice, running IDs can't be overridden | Transcript L377, L836 | **CONFIRMED** |
| VOC-028 | Go-live dependency = SQL access | Go-live (target end-June) blocked on SQL vendor granting integration access | WhatsApp L356 | **CONFIRMED** |
| VOC-029 | Team AI-generation ambition | Asks if marketing/admin team can use MAIA to generate catalogue & memo images | WhatsApp L384; vendor scopes to fixed catalogue only L390 | **CONFIRMED** (ask); scope-limited by vendor |
| VOC-030 | Item historical pricing | Grace confirmed directly: checks only the single **latest invoice** per item (not multiple past transactions) — unit price, quantity (kg/piece), occasionally discount (rare, started for some customers last month) | `Macrofrozen Client Scope Lock Clarification` transcript, 13 Jul 2026 — Grace, direct | **CONFIRMED** — upgraded from BELIEVED (was second-hand); mechanism now fully clarified and matches existing Base MAIA feature exactly |
| VOC-031 | Role/permission model reality | Read = view, Write = edit, Create = new entry, Submit = needs manager approval. Sales users create/edit own customer details freely; new customer code + credit limit need Sales Manager approval. Credit limit should be set by Sales Manager, not Finance — Grace flagged current Finance config may be wrong | `Macrofrozen Client Scope Lock Clarification` transcript, 13 Jul 2026 — Grace, direct | **CONFIRMED** (definitions + principle); full matrix still **NOT LOCKED**, pending 16 Jul training |
| VOC-032 | Customer → sales-agent assignment | Every SQL customer record has an Agent field. 3 active salesmen: CJ Tan (Sales Manager), Ben, Queenie (reps — spelling corrected 2026-07-15, was Aben/Quinny). CK (3rd-party driver) has 3 customers under his own agent code, excluded from normal sales ops. Unassigned/legacy customers default to David | `Macrofrozen Client Scope Lock Clarification` transcript, 13 Jul 2026 — Grace, direct | **CONFIRMED** |
| VOC-033 | AR auto-match adoption skepticism | When walked through the proposed Maya AR auto-match flow (upload slip → auto-match → knock off in SQL), Grace pushed back: sees it as the same manual work just routed through Maya, not a real time-save, since she'd still upload each slip and still manually pick which invoice(s) to knock off for multi-invoice payments | `Macrofrozen Client Scope Lock Clarification` transcript, 13 Jul 2026 — Grace, direct | **CONFIRMED** — direct operator skepticism, not a hypothetical concern |
| VOC-034 | Backup coverage gap | No process exists if the warehouse/logistics manager (Mr. Lai) is absent — foreign workers' reported picked quantities are taken at face value, zero verification. No defined backup for Finance Manager duties either (only Grace's own admin role has an informal backup — the boss's wife) | `Macrofrozen Client Scope Lock Clarification` transcript, 13 Jul 2026 — Grace, direct | **CONFIRMED** — real operational gap, not a system config question |
| VOC-035 | Customer PO issuance (new, 2026-07-14) | A small subset of customers — **3 confirmed** — issue a formal Purchase Order document instead of ordering informally via WhatsApp. Flow described: upload/receive the PO, match it against customer + item records, submit as a confirmed order (CPO) | `Macrofrozen Client Scope Lock Clarification` transcript, 13 Jul 2026 — Grace, direct | **CONFIRMED** — low-volume use case, mechanism (PO format, extraction vs reference-only, match logic) not yet detailed |
| VOC-036 | Cost/buying price tracking (new, 2026-07-14) | Item cost/buying price fluctuates independently of selling price. Client needs MAIA to track and bulk-update this — a separate need from the existing selling-price template (SL-03) | Relayed by Gareth (PM) during scope reconciliation, 2026-07-14 — not yet in a recorded client transcript | **CONFIRMED as a requirement** — source is PM relay, not a direct client quote; mechanism entirely undefined |

---

## Phase 3 — Salience & Priority Signals

| Rank | Priority | Stated importance | Revealed importance | Confidence |
|---|---|---|---|---|
| 1 | **O2C that works around actual weight + SQL discipline** | David repeatedly probes SO→DO→Invoice, duplicate-invoice risk, whether MAIA follows SQL | This is the confirmed core flow: **draft SO → pick externally → confirm weight → upload → MAIA makes SO/DO/Invoice → push SQL** (VOC-001/005/027) | **HIGH** |
| 2 | **Picking accuracy & human accountability** | David explicitly frames the problem as human error and wants proof of who picked/checked | Returns to it repeatedly (VOC-004); wants to keep his own paper pick list (VOC-005). Not automation — **operational control** | **HIGH** |
| 3 | **Enforceable pricing (fixed/floor/customer-specific)** | Says pricing lives in no system; sends via ChatGPT image | Follow-ups chase GPT link + Excel + 3-months catalogue (WhatsApp); wants floor so sales can't undersell (VOC-010/013) | **HIGH** |
| 4 | **AR / payment matching with human confirmation** | Asks about payer mismatch, transfer/cash/QR, finance role | Finance uses Excel for driver cash (VOC-009); account is the AR user; QR settlement parked as manual (VOC-008) | **HIGH** |
| 5 | **Credit control & "one invoice" cash discipline** | Describes one-invoice rule + pattern-based limits | Chase spans finance→sales→boss (VOC-020) — cash collection is an operating rhythm | **MED-HIGH** |
| 6 | **Catalogue as a sales operating tool** | Wants image catalogue, not PDF; team AI ambition | Still live in post-meeting follow-up (WhatsApp); scope-risky if left open-ended (VOC-015/029) | **MED-HIGH** |
| 7 | **Inventory aging / expiry alert** | Asks for near-expiry/slow-mover notification | Concrete pain (4 of 78 tons in 6 months); **confirmed Phase 1 — being built** (Scope Lock NS-03) (VOC-022) | **MED** |

---

## Phase 4 — Intermediate Synthesis (Theme Clusters)

Bridge between raw evidence (Phase 2) and priority ranking (Phase 3): the 29 VOC
signals collapse into **five themes**. Each theme carries an internal tension —
the thing that makes it hard to build, not just describe.

| Theme | Anchors | What it is | Internal tension (what makes it hard) |
|---|---|---|---|
| **T1 — Order is provisional until weight confirmed** | VOC-001, 005, 006, 013, 027 | Everything downstream (DO, invoice, price, SQL push) waits on the real picked weight | MAIA's native flow wants to own the pick list; David insists on his own paper flow + upload confirmed weights. Product bends to him, not reverse |
| **T2 — Accountability, not automation, is the warehouse ask** | VOC-004, 006, 023, 025 | "10 kg ordered, 8 picked, checker still says 10" — wants proof of who picked/checked | David reaches for a system feature (GRN photo, WMS, batch QC) for a problem he himself calls human process. Must produce an audit trail or it misses the point |
| **T3 — Pricing is a control plane the business has none of** | VOC-010, 011, 013, 014, 019 | Price lives in ChatGPT images + WhatsApp, not SQL, because "SQL has no enforcement" | The hook that makes David adopt discipline is *enforcement* (floor + customer-specific + quotation lock) — but volume-based pricing can't be enforced, stays manual |
| **T4 — AR is trust + cash discipline under multi-mode payment noise** | VOC-007, 008, 009, 016, 020, 021 | Transfer + cash + QR-merchant + "one invoice" rule + finance→sales→boss chasing | MAIA auto-matches easy cases, holds human for hard ones — but QR-merchant settlement stays outside. Boundary must be explicit or finance expects magic |
| **T5 — Presence anxiety drives the catalogue/blast cluster** | VOC-015, 018, 026, 029 | "Competitor sends price every 2–3 hours; we need to show we're active" | Biggest scope-creep risk: open-ended image gen + WhatsApp blasting (bans the number). Anxiety is real; deliverable must be fixed-format, blast expectation killed early |

**Read across the themes:** T1–T4 are the operational spine (Phase-1 core); T5 is
the commercial itch that will pull scope sideways if unmanaged. The single thread
through all five: **David is the bottleneck, and every theme is really about
removing him as the mandatory coordinator** — which is why adoption by warehouse,
sales, and finance (all thin/absent voices) is the real risk, not feature coverage.

---

## Phase 5 — Empathic Interpretation Layer

**INFERENCE [HIGH, anchors: VOC-001, VOC-003, VOC-005]** — David is not buying "AI order entry." He is buying a way to stop his WhatsApp → paper → SQL operation from depending on *him* personally coordinating everyone. His own words: he is the sole coordinator ("Me"), and MAIA's pitch that lands is "remove yourself being in this bottleneck." The system must reduce ambiguity **without forcing the warehouse into a flow they won't follow** — which is exactly why he insists on keeping his own paper pick list.

**INFERENCE [HIGH, anchors: VOC-004, VOC-006, VOC-025]** — The warehouse ask is misframed if read as "stock entry / GRN OCR." The real need is **operational proof** — who picked, who checked, what weight was actually confirmed — so error becomes attributable and punishable. David himself concludes the stock-count problem "is not a system problem"; it's a human-process problem. A GRN photo feature would miss the emotional and business need entirely.

**INFERENCE [HIGH, anchors: VOC-010, VOC-011, VOC-013]** — Pricing is a **control-plane** problem, not a speed problem. David's pain is not "update prices faster"; it's preventing sales/admin from selling at stale or wrong prices after the market moves. The reason he doesn't maintain price in SQL is that SQL has "no enforcement" — the moment MAIA can *enforce* a floor, he says it becomes "a reason for me to do it inside."

**INFERENCE [MED-HIGH, anchors: VOC-007, VOC-008, VOC-009, VOC-020]** — AR is about **trust and cash discipline**, not just reconciliation speed. The fear is the customer who claims "already fully paid" while SQL still shows outstanding (transcript L5). Multi-mode payments (transfer/cash/QR) plus sales chasing with incomplete information is the daily friction.

**INFERENCE [MED, anchors: VOC-015, VOC-021]** — Macro Frozen is acutely sensitive to **how their customers consume documents**. Image catalogue over PDF ("old people scared to click PDF"), CN number mirroring invoice number "so we don't confuse our customer" — both point to the same latent need: outputs must match how their customers actually recognise information, or the customer distrusts them.

**INFERENCE [MED-HIGH, anchors: VOC-026, VOC-015, VOC-029]** — The catalogue/blast cluster is really about **presence** — "we need to tell them we are also active… competitor sends every two or three hours." This is a commercial anxiety, not a feature request. It is also the biggest scope-creep risk in the account (open-ended image generation, WhatsApp blasting that bans the number).

---

## Phase 6 — What They Expect MAIA to Do

1. **Respect SQL constraints absolutely** — no duplicate invoice, invoice qty ≤ DO qty, running IDs not overridable; everything reflects into SQL (VOC-027). *Testable.*
2. **Support a two-stage order flow** — draft SO first, actual weight/qty confirmed via David's own pick list before DO/Invoice generate (VOC-001/005). *Testable; this is the locked Phase-1 flow.*
3. **Make pricing enforceable** — wholesale/retail/customer-specific/fixed + min-price floor, with quotation generation; volume-based pricing explicitly **not** enforced yet (VOC-013/014). *Scope risk: volume-based must stay flagged as manual-check.*
4. **Assist AR, keep the human** — auto-match the easy ones, human finalises the hard ones; QR-merchant settlement stays outside MAIA (VOC-007/008). *Testable.*
5. **Credit control with one-time override** — block on limit/term, notify David to approve a single order (VOC-016/017). *Testable.*
6. **Fixed-format catalogue generation** — reflect live MAIA/SQL price, *not* open-ended ChatGPT-style freestyle; memo/admin freestyle image gen is **out of scope** (VOC-015/029). *Scope risk — hold the line on fixed format.*
7. **Preserve sales territory isolation** — reps see only their own customers (VOC-019). *Testable.*
8. **Inventory aging alert** — near-expiry / slow-mover notification (VOC-022). *Confirmed Phase 1 — being built (Scope Lock NS-03).*

---

## Stated vs Revealed Importance

| Item | Stated | Revealed | Read |
|---|---|---|---|
| AR reconciliation | One of the 4 named customisations | Multi-mode payments, Excel driver-cash, account+consultant split | **Real P1** |
| Warehouse "stock entry" | Framed as GRN/stock-count feature | David's own examples are picking/checking error + accountability; he concludes "not a system problem" | **Misframed — it's accountability, not GRN OCR** |
| Product catalogue | Explicitly requested + chased after meeting | Became concrete follow-up (GPT link, Excel, 3-mo images) | **Commercially salient; scope-risky — fix format** |
| Pricing enforcement | "We not update any system" | The *enforcement* (floor) is the hook that would make him adopt SQL-side discipline | **Real P1 — the control plane** |
| Inventory aging | Asked for in meeting | Concrete pain; now confirmed in-scope | **Phase 1 — being built (SL NS-03)** |
| Delivery trip management / POD accuracy | Discussed (driver photo → tag invoice) | Vendor parks it; POD photo accuracy is unreliable | **Do-not-let-it-leak-into-go-live** |
| WhatsApp price blasting | Wants to blast 300–400 customers | Technically bans the number; unsupported | **Cannot deliver — manage expectation now** |

---

## What We Do NOT Know

| Unknown | Why it matters | How to resolve |
|---|---|---|
| Whether the warehouse user will actually use MAIA (or David keeps coordinating) — **partially answered 2026-07-13:** internal team confirmed only the warehouse *manager* will touch Maya directly; foreign worker pickers stay on paper/manual instruction. Ivan also flagged that Grace indicated the client may keep using their own pick list rather than the Maya-generated PDF flow — adoption is not yet demonstrated. **Reinforced 2026-07-14:** Grace's parallel skepticism on the AR auto-match flow (VOC-033) suggests this isn't isolated to the pick-list — there's a broader pattern of frontline staff not yet seeing the value of routing existing manual work through Maya. | The real failure mode is adoption, not features — and the warehouse voice is entirely second-hand | Observe one real pick→confirm→upload cycle with the actual warehouse manager before go-live — still not done as of 14 Jul. Same applies to AR: watch Grace actually use the auto-match flow post-go-live rather than assuming the walkthrough convinced her. |
| Format of the confirmed pick-list upload (Excel vs scanned PDF vs photo) | OCR/extraction fails on blurry or handwritten paper; David leans toward "upload the Excel" | Collect 10 real pick lists and test extraction before promising accuracy |
| Real payer-mismatch patterns (aliases, partial payments, references) | AR auto-match quality depends on real data, not the ideal case | Collect 20 real payments: bank rows + payment slips + invoice mappings |
| Whether "pro forma invoice" must be a distinct titled document | David's customer's financier may reject a Sales Order that lacks the word "invoice" | Get 2–3 real cases where a financier/customer required the exact wording |
| Catalogue: how many variants, which SKUs per picture, which photo per SKU | David wants images; scope explodes if open-ended | Lock a fixed template, allowed fields, SKU count per catalogue, review/send process (WhatsApp follow-up already started). **Confirmed 2026-07-14: this is David-only knowledge** — Grace has no visibility into his ChatGPT-based catalog process, needs a direct David conversation. |
| SQL integration access + timing | Training/go-live depends on live customer/SKU data | Close SQL vendor credential/API access this week (already the flagged blocker) |
| ~~Item historical pricing mechanism~~ — **RESOLVED 2026-07-14.** Grace confirmed single-latest-invoice-per-item, matches existing Base feature exactly. | — | No further action needed. |
| **NEW — POD workflow conflict.** Grace explicitly rejects photo-upload-to-Maya; current SQL/process has no "mark delivered" status at all. | Directly contradicts the NS-07 design (photo gates delivered status) — building this without resolving the conflict risks a feature nobody uses | Needs David's explicit decision: build a lighter-weight version, or drop the "mark as delivered" feature entirely and leave delivery confirmation as WhatsApp-photo-only, no system status |
| **NEW — Backup coverage for Logistics/Finance Manager absence.** No process exists today. | Real operational gap that will surface during UAT/training regardless of what Maya builds | David needs to decide a backup assignment; not resolvable by product design alone |
| **NEW — Warehouse Maya access model.** Individual logins vs one shared device. | Affects how AS-01's pick-list-upload step is actually operated day to day | Confirm with David/warehouse manager at 16 Jul training before finalizing AS-01's UAT scenarios |

---

## Bottom Line

> **"Help us keep our WhatsApp-driven frozen-food operation accurate, current, and controlled — especially where weight, price, payment, and human checking all change after the customer first places the order — without making me the person who has to coordinate every step."**

The product mistake that would sink this account: treating it as a generic WhatsApp order-automation deployment. The real risk is **workflow translation** — if MAIA doesn't fit the paper pick-list / final-weight / SQL-document discipline, and if the warehouse and sales reps don't actually adopt it, David keeps coordinating everything by hand and the deployment feels cosmetic instead of operational. The second risk is **scope creep via the catalogue/blast ambition** — hold the fixed-format line.

---

## Close the Loop — Next Actions

- **To backlog (CONFIRMED, Phase 1):** two-stage O2C with external pick-list upload (VOC-001/005), SQL-conformant doc flow (VOC-027), pricing floor + customer-specific + quotation (VOC-013/014), AR auto-match+human (VOC-007/008), credit control + one-time override (VOC-016/017), sales isolation (VOC-019), pro forma invoice (VOC-018).
- **To verify first (gated):** pick-list upload format, payer-mismatch data, catalogue variant scope, warehouse adoption — see "What We Do NOT Know."
- **To report back to David:** confirm what IS in Phase 1 vs parked (aging alert, delivery/POD, WhatsApp blasting = not supported), and why blasting can't be done (number ban). Set the catalogue as fixed-format, not freestyle.
- **Refresh trigger:** re-run this VoC after go-live once the warehouse user has run real cycles — the warehouse voice is the biggest gap and only real usage closes it.

---

## Scope Lock Alignment

Cross-reference of every VoC theme/signal against **Macro Frozen — Scope Lock v1**
(as of 2026-07-12). Confirms the two documents agree, and flags the signals that
have **no scope-lock home yet** — those need David before they can be committed.

| VoC signal(s) | Scope Lock item | Scope Lock status | Aligned? |
|---|---|---|---|
| VOC-001, 005, 027 (two-stage O2C, SQL master) | SL-01, SL-07, AS-01, NS-01 | LOCKED / RESOLVED — full mechanism traced 2026-07-14 (SO → pick-list PDF → warehouse manager → foreign workers → upload back → amend SO) | ✅ |
| VOC-007, 008, 009 (AR, payer mismatch, cash) | SL-02 | LOCKED (AR) | ⚠️ *cash-from-driver (VOC-009) still not in SL-02 AC; VOC-033 adds adoption skepticism from Grace on the auto-match flow itself* |
| VOC-010, 011, 013 (pricing, floor, cust-specific) | SL-03 | LOCKED, price-controller role (David, desktop) added 2026-07-14 | ✅ |
| VOC-014 (quotation before order) | AS-07 (new 2026-07-14) | AGREED IN PRINCIPLE — PROPOSED: QTN → edit price → submit → convert to SO | ⚠️ *flow proposed, but price-lock enforcement on conversion still unanswered; Grace's 14 Jul call also revealed real usage is much lower than assumed — whether David still wants this built at all is now the live question, not just the enforcement detail* |
| VOC-016, 017 (credit control + override) | SL-04 | LOCKED | ✅ — *see NS-05 mechanism gap below* |
| VOC-019 (sales territory isolation) | SL-05 | LOCKED | ✅ |
| VOC-004, 025 (picking accountability) | AS-01 (updated 2026-07-14) | Addressed at **warehouse-manager level** via pick-list PDF flow — discrepancy visible before SO amendment | ⚠️ *manager-level accountability now covered; per-worker digital attribution still not covered — confirm with David if that's needed* |
| VOC-023 (damage / batch QC photo log) | — | only "issue ticket" mentioned, not scoped | ❌ *no home — still a gap* |
| VOC-028 (SQL vendor access dependency) | DEP-1 (Section 6b) | OPEN — live blocker, tracked | ✅ *correction: Scope Lock DOES have a Dependencies section (6b) covering this — prior note in this doc claiming it was uncaptured was stale* |
| VOC-003 (route-based pick grouping) | AS-01 flow | assumed within pick-list process | ⚠️ *not explicit — confirm* |
| AS-04 (outdoor sales assistant) | AS-04, AS-04b (new) | **LOCKED 2026-07-14** — query-only; sales relay orders to office admin via WhatsApp, admin enters SO | ✅ *resolved via Grace's clarification* |
| VOC-015, 029 (catalogue, fixed-format) | AS-02 | Agreed in principle — AC not locked | ✅ (build unlocked) |
| VOC-018 (pro forma invoice) | NS-04 | RESOLVED — in MAIA now | ✅ |
| VOC-021 (CN numbering) | AS-03 | Doctype design finalized 2026-07-14 (SCN + CCN split); numbering decided as MAIA running number + invoice reference field (not mirrored) | ⚠️ *design decided, but may not satisfy Finance's stated "mirror the number" want — flagged as a risk to confirm* |
| VOC-020 (payment escalation) | NS-06 | RESOLVED (feature) / **OPEN (routing/sequence)** — reopened 2026-07-13, same question re-raised live in that meeting | ✅ (alert) / ⚠️ (sequence — still needs David) |
| VOC-022 (inventory aging alert) | NS-03 | RESOLVED (feature) / **OPEN (mechanism: threshold, recipient, cadence)** — reopened 2026-07-13 | ⚠️ (feature ✅, config detail ❌) |
| VOC-030 (item historical pricing) | NS-08 | **RESOLVED 2026-07-14** — Grace confirmed real practice is single-latest-invoice-per-item, matching the existing Base MAIA feature exactly. No extension needed. | ✅ *fully resolved, Base feature sufficient* |
| VOC-024 (POD driver photo) | NS-07 | Mechanism finalized 2026-07-14, but **CONFLICT surfaced same day** — Grace explicitly rejects the photo-upload-to-Maya design | ❌ *not aligned — client rejects the proposed mechanism; BLOCKED pending David's decision* |
| VOC-031 (role/permission reality) | SL-04, AS-05 | Definitions + principle clarified 2026-07-14; full matrix still NOT LOCKED | ⚠️ *clarified but unconfirmed — pending 16 Jul training* |
| VOC-032 (customer-agent SQL assignment) | SL-08 (new 2026-07-14) | LOCKED | ✅ |
| VOC-033 (AR auto-match skepticism) | SL-02 | Adoption-risk flag added 2026-07-14 | ⚠️ *design unchanged, but real-usage validation now explicitly flagged as needed* |
| VOC-034 (backup coverage gap) | NS-10 (new 2026-07-14) | Needs scoping — real operational gap, not a system config question | ⚠️ *no resolution yet, David to decide* |
| VOC-035 (customer PO issuance) | AS-08 / NS-12 (new 2026-07-14) | Agreed in principle — low-volume (3 customers), mechanism not yet detailed | ⚠️ *has a scope-lock home; PO format/extraction/match-logic questions still open for David* |
| VOC-036 (cost/buying price tracking) | AS-09 / NS-13 (new 2026-07-14) | Agreed in principle — confirmed requirement, mechanism not yet detailed | ⚠️ *has a scope-lock home; distinct from SL-03 (selling price only) — do not assume overlap* |
| VOC-008 (QR merchant settlement) | Out of scope | excluded | ✅ |
| VOC-026 (WhatsApp blasting) | Out of scope | excluded — bans the number | ✅ |
| VOC-013 (volume-based pricing) | Out of scope | not supported — manual check | ✅ |
| VOC-012 (wholesale/retail segments) | SL-03 | LOCKED (price lists) | ✅ |
| VOC-002 (item-name fuzzy mapping + learning) | — | assumed Base MAIA (RACK + learn) | ⚠️ *not explicitly scoped — confirm Base* |

### Two signals resolved 2026-07-14
1. ~~**Picking accountability / audit trail (VOC-004)**~~ — **now addressed** via AS-01's traced pick-list-PDF flow: warehouse manager receives, distributes, collects, and uploads the pick list, so discrepancies are visible before SO amendment. This is **manager-level** accountability, not per-individual-picker attribution — confirm with David whether that's sufficient (VoC's "punishment of the error" framing implied per-person, which this doesn't fully deliver).
2. ~~**Quotation generation (VOC-014)**~~ — **now has a proposed home**, AS-07: QTN → edit price → submit → convert to SO. Still open: whether the quoted price is enforced/locked on conversion — the proposal covers the *document*, not yet the *price-lock* that was the actual pain.

### Two signals still with no scope-lock home (need David)
1. **Cash-from-driver recording (VOC-009)** — finance's Excel cash log; MAIA can absorb it, but SL-02 covers bank/slip matching only.
2. **Damage / batch QC log (VOC-023)** — warehouse photo-logs damaged/discoloured stock against a batch. Only a generic "issue ticket" was floated in the meeting; not scoped.

### Three "resolved" items reopened at mechanism-detail level (2026-07-13)
Feature existence ≠ mechanism documented. Ivan flagged all three live in the 13 Jul scope re-check:
- **NS-03 inventory aging alert** — being built, but trigger threshold / recipient / cadence never defined.
- **NS-05 approval flows beyond credit** — the real ask is a credit-*block* approval by a credit controller role; approver identity + override-recording behaviour not documented.
- **NS-06 payment chasing escalation** — alert feature exists, but "who receives first" (VOC-020) is still the exact open question Ivan re-asked live.

### 2026-07-14 updates — AS-04 locked, AS-05 partially locked, one new numbering risk
- **AS-04 (outdoor sales assistant) → LOCKED.** Grace clarified salespeople relay orders to office admin via WhatsApp rather than entering orders themselves — Phase 1 stays query-only. New AS-04b captures this relay pattern explicitly.
- **AS-05 (customer info) → partially locked.** Sales can log notes/events/tasks against a customer profile (activity log) — that part is confirmed. Master-data field writability (address, phone, etc.) is still open.
- **AS-03 numbering risk.** CN numbering was decided internally (MAIA running number + invoice-reference field, not a mirrored number) — but VOC-021's original ask was for the number to *mirror* the invoice "so we don't confuse the customer." A reference field ≠ a mirrored number. Flagged for Finance/Grace to explicitly confirm this still meets their need, not assumed closed.

### Correction — SQL vendor dependency IS captured
- **SQL vendor access (VOC-028)** — go-live is blocked until the SQL vendor grants integration access. **Correction 2026-07-14:** an earlier version of this doc claimed the Scope Lock had no dependency/blocker section — that's wrong. Scope Lock Section 6b (Dependencies & Blockers) has DEP-1 covering exactly this, status OPEN. No action needed beyond keeping DEP-1 current.

### Confirm — assumed Base MAIA, not explicitly scoped
- **VOC-002** item-name fuzzy mapping + learning · **VOC-003** route-based pick grouping.
- ~~AS-04 outdoor sales assistant~~ — resolved 2026-07-14, LOCKED (see above).

### 2026-07-14 Grace clarification call — summary of what changed
- **Resolved:** VOC-030/NS-08 (item historical pricing — Base feature sufficient, no gap); VOC-020/NS-06 (payment-escalation routing fully confirmed).
- **New conflict, not just a gap:** VOC-024/NS-07 (POD) — client actively rejects the proposed upload-to-Maya mechanism. This is qualitatively different from the other "needs scoping" items — it's a rejection of a specific design, not an absence of information.
- **New adoption-risk signal:** VOC-033 (AR auto-match skepticism) — echoes the existing AS-01 pick-list adoption risk. Two independent signals now point at the same underlying risk: Grace doesn't yet see how routing her existing manual work through Maya saves her time.
- **New signals with scope-lock homes already:** VOC-031 (role/permission reality → SL-04/AS-05), VOC-032 (customer-agent assignment → new SL-08).
- **New signal with no home yet:** VOC-034 (backup coverage gap → new NS-10) — a real operational gap, not a Maya feature question.
- **New signal, low volume, has a home:** VOC-035 (customer PO issuance → new AS-08/NS-12) — only 3 customers issue formal POs; use case is narrow, supplements the WhatsApp-first intake channel for those accounts only. Mechanism (PO format, OCR-vs-reference, match logic) still needs David.
- **New signal, real scope gap, has a home:** VOC-036 (cost/buying price tracking → new AS-09/NS-13) — SL-03's price-update flow was scoped around selling price only; cost/buying price is a separate SQL field with its own fluctuation. This is not covered by testing SL-03/M-05 — needs its own mechanism confirmed with David before it can be built or tested.
- **Narrowed evidence:** VOC-014 (quotation before order) — stated ask (wants price-lock) vs revealed behavior (formal quotations barely used) now diverge; AS-07's real necessity is an open question for David, not just its enforcement detail.

**Everything else is aligned.** Out-of-scope boundaries match exactly (AP, QR settlement, WMS, volume pricing, B2C, blasting).

---

## Appendix — Changes from the Prior VoC

This version supersedes the earlier "Voice of customer - Macrofrozen" draft. What
changed and why it matters:

| Dimension | Before (prior draft) | Now (this version) | Why it matters |
|---|---|---|---|
| **Truth source** | Ran against a mixed "project corpus"; anchors were vague ("F2F transcript opening") | 4 Jun F2F transcript as declared truth source; **every claim cites a line number** | Claims are now verifiable, not paraphrased-from-memory |
| **Evidence count** | ~20 VOC ids | **29 VOC ids** | Caught 9+ real signals the draft missed |
| **New signals captured** | — | Quotation-before-order (VOC-014), one-time credit override (VOC-017), CN numbering (VOC-021), aging/expiry alert (VOC-022), damage/batch QC (VOC-023), driver POD photo (VOC-024), once-a-year stock count (VOC-025), WhatsApp-blast-blocked (VOC-026), SQL-master constraint (VOC-027), go-live SQL dependency (VOC-028), team AI ambition (VOC-029) | These are scope-shaping — several are Phase-1 blockers or hard constraints |
| **Coverage verdict** | "proceed" | **"proceed-with-caveats"** — names warehouse/picker as second-hand | Honest about the biggest evidence gap |
| **Tables** | Embedded Lark sheets (not line-anchored, not diff-able) | Inline tables with line citations | Reviewable and auditable in-doc |
| **Phase 4** | Absent | **Intermediate synthesis** — 5 theme clusters with tensions | Bridges evidence → priority; names what makes each hard to build |
| **Misframing flags** | Warehouse-as-GRN noted | Same, plus **WhatsApp blast = cannot deliver** and **volume pricing = manual only** | Prevents over-promising |
| **Close-the-loop** | Absent | **Next Actions** (backlog / verify / report-back / refresh-trigger) | VoC now points at a decision + client loop-close, per skill framework |

**Net:** the before-draft was a solid provisional read; this version is
line-grounded, adds the constraint/blocker signals a scope decision needs, and
closes the loop instead of stopping at analysis.

---

## See Also
- [[Customer Narrative - Macrofood]]
- [[F2F Requirements Gathering Summary 2026-06-04]]
- [[Macrofood Phase 1 Timeline]]
- [[Macrofood MAIA SQL integration]]
