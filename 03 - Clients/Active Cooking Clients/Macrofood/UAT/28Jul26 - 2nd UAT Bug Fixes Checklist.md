---
owner: Gareth
status: draft
last_reviewed: 2026-07-29
lark_url: https://eg69120xnei.sg.larksuite.com/wiki/J1ZGwSUzviFGoRkr8bJlHIxogVe
---

# Macrofrozen — 2nd UAT Bug Fixes Checklist (28 Jul 2026)

## Timeline

| Milestone | Date |
|---|---|
| **All P0 + P1 fixes complete** | **Wed 5 Aug 2026** |
| Internal regression + channel smoke test | Thu 6 – Fri 8 Aug |
| **3rd UAT with client** | **Tue 11 – Fri 14 Aug 2026** |

Everything below marked P0 or P1 must be **done and internally verified before 5 Aug**. P2 and below do not block the 3rd UAT.

## Sources

- 2nd UAT onsite session, 28 Jul (Fireflies + Ivan's raw notes → `29Jul26_MacroFrozen_UAT2_Summary_and_Action_Plan_28Jul26.docx`)
- Internal tech debrief, 29 Jul — [Macro Frozen Debrief](https://app.fireflies.ai/view/Macro-Frozen-Debrief::01KYNVMYQ0PZ4QDWFMHPD92PM7) and [Meet – Macro Debrief](https://app.fireflies.ai/view/Meet-Macro-Debrief::01KYNWCTKE5GX42CXH69DF87FB)
- `Granola/Transcripts/2026-07-29/Macro Debrief-transcript.md`
- Gareth's 2nd UAT session notes (PM-side observations)

**Data caveat (not a defect):** SQL sync paused — orders/invoices/payments to 3 Jul, customers/items to 15 Jul. Backfilled at go-live.

---

## CRITICAL PATH — must clear before 3rd UAT

The single biggest theme: **the approval loop does not close.** A blocked order today has no escalation prompt, no notification, and no way for the approver to know it exists. Orders silently die. Fix P0-01 → P0-03 as one unit and verify end-to-end (Queenie → CJ → David) before anything else.

Second theme: **the pick list → DN handoff is broken.** Customer info doesn't carry over, and Grace can't see or submit the document she's the gate for. That kills the core order-to-invoice path (P0-06, P0-07).

The notification engine underpins 9 items here and **still has no named owner** — the pipeline itself isn't firing. Close that ownership gap first; nothing else in the notification cluster can be estimated until then.

---

## P0 — Go-live blockers (due 5 Aug)

- [ ] **MF-P0-01 · Chatbot doesn't prompt escalation on credit block** — Order blocks correctly but the bot dead-ends; sales user isn't told to route to the credit controller. Bot must name the approver and offer one-tap "assign to credit controller". Two notification types: **update notification (build this first)** and submit notification (defer — orders almost always get changed before submit anyway). If the credit controller submits on the sales user's behalf, the sales user must be notified. → *Chatbot/middleware — Jermaine*
- [ ] **MF-P0-02 · Chatbot doesn't prompt escalation on price block** — Sales user sets price below minimum → warning fires and price snaps back to minimum, but no prompt to notify the price controller. Price controller can bypass minimum-price validation and save; salesperson must then be notified. Needed on **both chatbot and front-end UI** — behaviour must match (CJ has no company laptop, works entirely mobile). Applies to **max price too**, and across all three price-sensitive doctypes: Quotation, Sales Order, Invoice. Customer-specific pricing can also be enforced/locked. → *Chatbot/middleware + Frontend — Jermaine*
- [ ] **MF-P0-03 · Approval/credit-controller notification not firing; notification pipeline broken** — Blocked orders don't notify the approver at all. Client asked twice in session "but no any notification?" Backend notification seeder exists (Bryan) — do **role-based ("row to row") first**, not user-action-to-user-action. Product side must supply clear requirements to populate the seeder config. → *Notification service — **UNOWNED, assign immediately***
- [ ] **MF-P0-04 · Pick List PDF: Chinese characters not printing** — Item descriptions with Chinese chars don't render. Fix font embedding/glyph coverage; also cover special ASCII ranges (fractions in particular) since company SKUs use them. Regression-test against the real Macro item master, not synthetic data. → *Reports/PDF — Amirul Iman*
- [ ] **MF-P0-05 · Customer info not propagating from pick list → DN** *(new, from Gareth's session notes)* — DN created from pick list is missing customer details. Breaks the core document chain. → *Backend*
- [ ] **MF-P0-06 · Grace's Finance Manager account can't see pick list in document trail, can't submit DN** *(new, from Gareth's session notes)* — Grace is the DN gate; she can't see the upstream pick list or submit the DN. Permissions/role config issue. Order-to-invoice cannot run without this. → *Backend/permissions*
- [ ] **MF-P0-07 · Go-live channel is not the tested channel** — All UAT ran on Telegram; WhatsApp still pending verification. MAIA is sold WhatsApp-first and Macro has never tested the channel they'll actually use. Complete verification + channel-parity smoke test (order capture, PDF delivery, notification receipt). → *Ops/Tech — TBC*

## P1 — Day-one usability (due 5 Aug)

- [ ] **MF-P1-01 · Picked-quantity breakdown on Pick List Item + DN Item** — *Load-bearing: the whole "delete the Excel packing list" proposal depends on this.* Add a custom field storing a **list of (qty, uom) tuples** at item level — no new doctype, no new child table. Propagates Pick List → DN; optional on Sales Invoice Item. Ship in three steps: (1) store in DB + expose in API schema, (2) surface on frontend, (3) render as a mini breakdown table per line in both PDFs. Client's real example: a 130 kg line = 10 boxes × ~9.5 kg each — they know the breakdown at pick time and need to show it to the customer for traceability when picked ≠ delivered. → *Tech lead assess → build*
- [ ] **MF-P1-02 · Pick list PDF doesn't print picked quantity** — Currently only the submitted PDF prints; once picked, the system's pick quantity isn't rendered. → *Reports/PDF*
- [ ] **MF-P1-03 · Pick list printed PDF missing company header block** — Company name, address subheading and phone number all drop on printout. **Client is buying a dedicated computer + printer for Lai/Lim to print these daily** — must physically print and eyeball the output, not just check on screen. → *Reports/PDF — Amirul Iman*
- [ ] **MF-P1-04 · Pieces (pcs) as a third UOM** — Queenie hit this live: ordering "3 pcs" forces a kg/carton choice and won't proceed. Not a uniform conversion (pork belly isn't fixed kg/carton), so pcs can't simply be derived. MVP: accept pcs at order capture, resolve actual weight at pick via the MF-P1-01 breakdown — same mechanism solves both. → *Product: Wan Sin + account owner*
- [ ] **MF-P1-05 · Default payment term not auto-set on SO create** — Needs 3-level cascade: customer default → company default → cash-in-advance → leave empty if none configured. Parametric, not hardcoded; this recurs across accounts. → *Backend/config*
- [ ] **MF-P1-06 · Pick list order selection missing delivery date** — Lai/Lim picks with no visibility of delivery date, but some orders are picked on the delivery day and some earlier, so date is his primary sort key. Add the column to pick list order selection and order listing; default sort ascending, nearest first. Note: some customers don't require a delivery date — handle case by case. → *Frontend — Amirul Iman*
- [ ] **MF-P1-07 · Draft DN created by Lai → push notification to Grace** — Grace has no signal a draft is waiting. Push into her chat with the DN PDF + write to activity trail. Client instruction was explicit: **"yes, spam Grace"** — every event, no digest. → *Notification service*
- [ ] **MF-P1-08 · Submitted SO → notify Lai with Order PDF** — Today Lai works off a WhatsApp group and misses orders. On submit, push the Order PDF + activity trail entry so there's no "I missed it". **"Yes, spam Lai."** → *Notification service*
- [ ] **MF-P1-09 · Pick list submitted/confirmed → notify Grace** — Completes the Lai → Grace handoff chain. → *Notification service*
- [ ] **MF-P1-10 · Daily digest notification for Lai/Lim to start the pick list** *(from Gareth's session notes)* — Daily prompt to begin picking. → *Notification service*
- [ ] **MF-P1-11 · Price update reminder notification** *(from Gareth's session notes)* — → *Notification service*
- [ ] **MF-P1-12 · Disable default noisy notifications** — Turn off the out-of-the-box set; whitelist only the events in P1-07 through P1-11 and P2-05. Note the tension: they want *fewer* defaults but *high-frequency* pushes to Grace and Lai. It's "only the ones we asked for", not "less". → *Config — Wan Sin*
- [ ] **MF-P1-13 · Mobile responsive — bottom banner blocks payment term input** — Bottom banner covers the payment-term field and the page won't scroll, so a customer with no default payment term can't have one added at all. Reproduced live; screenshots in source docx Appendix B. → *Frontend — Amirul Iman*
- [ ] **MF-P1-14 · Mobile breakpoint thresholds on square-format devices** — Named devices, not generic responsive work: **David uses a Samsung Z Fold** (renders the desktop page on mobile), **Krystle uses an iPhone 17 Pro Max** (defaults mobile, but rotating and returning locks it into desktop). These two are the approvers — if the approval UI is broken on their handsets, the approval loop is broken regardless of P0-01/02/03. → *Frontend — Amirul Iman*
- [ ] **MF-P1-15 · CPO page cannot scroll on mobile** *(new, from Gareth's session notes)* — → *Frontend*
- [ ] **MF-P1-16 · Delivery Note UI not mobile-responsive** *(from Gareth's session notes)* — → *Frontend*
- [ ] **MF-P1-17 · SCN/CCN credit note connector untested** — Completed 27 Jul, one day before UAT; disclosed to client as known risk, **not accepted scope**. SQLC treats credit notes differently (return-holder vs negative billing) and Grace specifically flagged credit notes that reduce stock — a case they rarely do. Interim guidance already given to Grace: keep using SQL until stable. Full test pass required; log defects into the sprint bug list. → *Gareth Ng (test) / TBC (fix)*
- [ ] **MF-P1-18 · Stale chatbot context after order edited in MR UI** — Real usage pattern: chat surfaces a link, user jumps to the MR UI to edit/submit, returns to chat, bot is still holding pre-edit data and keeps talking from it. Users read this as the bot being broken. Only recoverable today if the user explicitly says "re-fetch my order" — nobody will. **Solution identified:** ERPNext backend already emits socket events; chatbot middleware subscribes, identifies the user, finds their latest active chat session and re-injects fresh context ("your order has been updated"). Webhook is the fallback. Not urgent but important — first tester hit it, so everyone will. → *Chatbot/middleware — Jermaine*
- [ ] **MF-P1-19 · Provision new admin account (admin@macrogroup)** *(from Gareth's session notes)* — New admin email confirmed in session; needs provisioning and testing in MAIA. Apple and David confirmed as admins with full access. → *Ops/config*
- [ ] **MF-P1-20 · Confirm unapplied payment knocks off latest outstanding balance** *(from Gareth's session notes)* — Configuration check. → *Backend/config*
- [ ] **MF-P1-21 · Driver ("Uncle") user provisioning + POD attached to DN** — Needs his email and name to create the account. Depends on the driver role in MF-P2-04. → *Ops/config*

## P2 — Scheduled build, August (does not block 3rd UAT)

- [ ] **MF-P2-01 · Column prioritisation per view** — Four buckets, ordered left to right: **operational → action → analytic → auditability**. Action buttons don't need to sit rightmost; consider a sticky/frozen right column on wide screens. Even on a MacBook Pro in split view the price editor and listing pages are too wide. Parametric across accounts — do once, not per client. → *UX — Wan Sin*
- [ ] **MF-P2-02 · Customer search by billing and shipping address** — Search the customer's *default* billing/shipping address only (not every address). Expose area, state, postcode, country. Drives push-sales workflows ("find all my PJ customers") and Lai's grouping-by-area. → *Backend/search*
- [ ] **MF-P2-03 · Contact database as its own entity** — Alongside Lead / Prospect / Customer, add a Contacts listing searchable across companies. Salespeople remember the person, not the company — especially where brand name ≠ registered company name. Chatbot should disambiguate: "you have three Muthu — which company?" Portfolio-wide, not Macro-specific; check demand across the other accounts before sizing. → *Roadmap — Wan Sin + Ivan*
- [ ] **MF-P2-04 · Delivery Driver role + proof of delivery** — New role: view DN, update DN, **cannot submit, cannot cancel**. POD **mandatory** on mark-as-delivered; can append more POD afterwards; **cannot delete** POD (audit trail). No trip/route planning module needed — only one or two drivers and they self-manage the schedule. Business case is concrete: today Uncle posts photos into a WhatsApp group and Grace maintains the catalogue manually, then has to dig through files to settle a dispute. Note this expands the user population beyond signed scope — check commercial impact. → *Wan Sin (scope) / TBC (build)*
- [ ] **MF-P2-05 · Low stock / near expiry notification routing** — Goes to **everybody, all roles**; priority recipients David, sales team, Lai. Feature shipped last week and was explicitly declared **not perfect and not part of acceptance** — keep it out of the acceptance set. → *Notification service*
- [ ] **MF-P2-06 · Extended glyph coverage audit across all client-facing PDFs** — Beyond the Chinese-character fix in P0-04. → *Reports/PDF — Amirul Iman*

## P3 — September wave (mostly config, not build)

- [ ] **MF-P3-01 to 06 · Sunday 08:00 recurring reports** — MTD sales summary, year-to-date sales summary, per-salesperson MTD, MTD new leads by salesperson, MTD new customers by salesperson, lead-to-customer conversion rate. Recipients CJ + David (per-salesperson reports go to each rep). **Labelled P3 but effectively required** — these are configured notifications, not builds. Product designs the report spec, then hands to Wai Yon for the cron. Sunday 8am is deliberate: they work six days a week, David is up at 6am and out entertaining customers till 10pm, so Sunday is his only reading window. Business driver is real — David wants to see that one rep did 200k across 10 customers while another did 50k across 20, and decide hiring and account allocation from it.
- [ ] **MF-P3-07 · Customer churn notifications** — Per-salesperson (own customers) and full view for David + CJ, every Sunday. **Needs a churn definition agreed with David first** — none was given.
- [ ] **MF-P3-08 · Sales dashboard by salesperson** — Dated commitment already on record with the client: **first week of September**, multi-client release. Explicitly good-to-have, deprioritised behind core system.
- [ ] **MF-P3-09 · AR module / bank statement reconciliation — timeline moved up** — Client asked to accelerate. Scope: after payment entry is created, reconcile against bank statement in a dedicated finance workspace, then push to SQL. Simpler than the full version. ERPNext backend already supports auto-matching (by ID, by string match) — the hard part is field extraction and mapping. Needs a feature kill-switch / permission to hide it. **Two or three other clients need this too** — build as core MAIA finance workspace, not a Macro one-off.
- [ ] **MF-P3-10 · Customer complaint ticketing via chatbot** — Reuses the existing Issues feature: sales says "this customer complained, here's the issue", chatbot logs a complaint ticket so there's a trail. Client has high complaint volume and wants this.
- [ ] **MF-P3-11 · Official receipt / payment recording** — Already WIP on our side; confirm status and give Macro a date.

## P4 — Out of scope / change request

- [ ] **MF-P4-01 · Packing list Excel optical extraction** — CR. Automated extraction from an attached Excel is a customisation on top of the base module.
- [ ] **MF-P4-02 · Delivery trip / route management with POD upload per DN** — CR. (Distinct from the basic driver role in P2-04, which *is* in scope.)
- [ ] **MF-P4-03 · Customer internal memo / announcement blast** — CR. Good idea, not in current scope.
- [ ] **MF-P4-04 · Facebook marketing lead capture + auto-reply** — CR; evaluate an off-the-shelf tool first.
- [ ] **MF-P4-05 · WMS integration** — Out of scope. Client is standing up a new warehouse and pricing a WMS at ~RM1m via Krystle's partner. Keep warm; ask which WMS so we're not designing blind.
- [ ] **MF-P4-06 · Fleet GPS / truck temperature telemetry** — Out of scope. Client already subscribes to a fleet service logging timestamp, GPS and in-truck temperature, used to defend disputes (goods left in the sun by the customer's own worker, then blamed on our driver). Strong pairing with POD — scope only after P2-04 lands.
- [ ] **MF-P4-07 · QR / barcode scanning + label/sticker printing in warehouse** — Out of scope, separate quotation. Bundle into the WMS conversation.

---

## Open decisions — block builds above

| ID | Decision | Blocks | Owner |
|---|---|---|---|
| DG-1 | **Credit block mode.** Macro's payment knock-off in SQLC lags reality — customers pay ~weekly, knock-off is entered late, so nearly every customer shows overdue. Hard blocking on day one blocks most orders and the client concludes MAIA is broken. Decide: warn-only vs hard block, tolerance window, block on order value + outstanding vs outstanding alone, and who overrides (David, or Apple — who has credit control but no price control). | P0-01 rollout | Ivan ↔ David |
| DG-2 | **Keep or remove the Excel packing list.** Removal is conditional on MF-P1-01 shipping — client needs the breakdown to show customers and for picked-vs-delivered traceability. | MF-P1-01 | Ivan ↔ David/Lai/Grace |
| DG-3 | **Delivery-date cron cutoff.** Raw notes record both a 1pm and a 2pm cutoff for what reads as the same condition, plus a same-day DN-missing alert. Do not let a developer guess. | Cron build | Ivan ↔ David |
| DG-4 | **UAT verdict for round 2 was never called.** Success bar was green/yellow/red; session closed on "much better progress" — encouragement, not acceptance. No recorded verdict means no acceptance event. | Sign-off | Ivan (call) + Wan Sin (co-sign) |
| DG-5 | **Sunday push-reports vs September dashboard.** Substantial overlap between MF-P3-01→06 and MF-P3-08. Building both is waste. | P3-01→06 | Wan Sin + Ivan |
| DG-6 | **Written answer to David on supplier / GRN.** He opened the session with it: no supplier info means GRN can't flow to SQLC. Our position — purchasing stays BAU in SQLC, module hidden in MAIA (which also conceals cost price). Answered verbally in three languages at minute one; needs to exist in writing or it returns. | — | Ivan |

## Notes

- **Assign the notification owner first.** Nine items across P0–P3 are notification work, three of them P0, and the pipeline isn't firing at all. Nothing in that cluster can be estimated until someone owns it.
- **P0-01/02/03 ship as one unit.** Three faces of the same failure. Verify the full chain: Queenie → CJ → David.
- **MF-P1-01 is the only load-bearing new-scope item.** Everything else in P2 and below can slip without breaking a commitment already made.
- Role map: David (owner, price + credit controller, final approver) · CJ (sales manager, own accounts, price approval routes to David) · Queenie & Benz (sales, own records only) · Lai/Lim (warehouse manager, creates pick list + draft DN, cannot submit DN) · Grace (finance manager, verifies + submits DN, creates invoice) · Apple (credit controller, no price control) · Uncle (driver, POD only).

## See Also

- `[[Maya Training — Identified Gaps Report]]` (1st UAT round, 16–17 Jul)
- `[[16Jul26 Macrofrozen 1st UAT Checklist]]`
- `[[Macrofood — UAT Checklist]]`
- `[[brain/Gotchas]]`
