---
owner: Gareth
status: draft
last_reviewed: 2026-07-27
lark_url: https://eg69120xnei.sg.larksuite.com/docx/MCvpdWnPuoEHgaxshSmlfuGMgVf
---

# MAIA — UAT Launch Readiness Checklist
### Macro Frozen (Macrofood) — Phase 1 Core

**Issued:** 2026-07-14 · **Corrected:** 2026-07-15 (Macrofrozen Training Plan) · **Regenerated:** 2026-07-27 (Scope Lock v2) · **Owner:** Gareth (PM) · Generated against Scope Lock v2 (2026-07-27), VoC Extraction (2026-07-27), UAT Checklist v4 (2026-07-27), Field Guide v2 (`MAIA_UAT_Field_Guide_Play_It_Like_A_User_v2.md`).

---

## 1. Launch verdict

**USABLE WITH GAPS.**

**Regenerated 2026-07-27 against Scope Lock v2:** the pack grew from 18 to **22 active missions** — new M-19 (SKU replacement, AS-10), M-20 (dashboard salesperson filter, NS-14 — resolved), M-21 (pick-list remarks carry-through, NS-15 — resolved), M-22 (duplicate-customer detection/Lead Merge, NS-16 — resolved). **M-14 was rewritten, not just extended** — AS-04 was reopened and superseded: salespeople now submit their own Sales Orders directly via the MAIA WhatsApp chat, replacing the old query-only/office-admin-relay design entirely. M-09 was extended with SL-07's explicit-request nuance (Grace must explicitly ask MAIA to generate Invoice/DN — it's not automatic). **M-11 (Credit Note)** stays WIP, now with a training-confirmed "not built" status, not just a known mismatch. **One genuine blocker remains unchanged: the SQL-outage Boss Fight (BF-01) still has no arranged simulation method.**

---

## 2. Missing project variables

| Variable | Current value | Required action | Blocking? |
|-|-|-|-|
| TEST_WINDOW | Tue 14 Jul 2026, 10:30am–12:00pm | Confirmed | No |
| ENVIRONMENT_AND_ACCESS | **Confirmed 2026-07-15.** Web app: `https://maia-fe-macrofrozen.vercel.app/`. Chatbot: `@maia_macrofoods_bot` — a dedicated Macrofrozen environment/bot, not shared dev/demo. | Confirm credential handout method for the web app | No — env/access confirmed, only credential handout still open |
| INPUT_LIBRARY_FOLDER | Not yet created | Create the shared folder and drop `00_START_HERE_INPUT_LIBRARY.md` inside it | Yes |
| CURRENT_INPUT_LIBRARY_CONTENTS | A 700+ row customer export and a 459-row item export exist as screenshots/data, not yet organised into the library | Organise into the folder structure in Output B | Yes |
| TEST_DATA_ACCESS_NOTES | Testers can browse real customers/items once seeded into the test environment | Confirm the customer + item exports are actually loaded into the UAT/demo account, not just known to the PM | Yes |
| SYSTEMS_TESTERS_CANNOT_ACCESS | Client's SQL/AutoCount system | `[NEEDS INPUT: confirm no tester needs direct SQL access for any mission]` | No |
| BUG_REPORTING_CHANNEL | `https://eg69120xnei.sg.larksuite.com/wiki/CsWLwSjOgiO98JkitQ8lGfpPgF2` | Confirmed | No |
| XP_TRACKER_LINK | **Confirmed 2026-07-15:** QA Testing Tracker | Confirm testers all have access to it | No — named, access still to confirm |
| UAT_OWNER | Gareth (PM) | `[NEEDS INPUT: who is the on-the-day point of contact if Gareth is unavailable]` | No |
| TIME_BUDGET_PER_TESTER | 90 minutes | Confirmed — see §3 for what this means for scope | No |
| ANYTHING_ELSE_TESTERS_MUST_KNOW | Not yet supplied | `[NEEDS INPUT]` | No |

---

## 3. Preparation action register

| Action ID | Preparation mode | Action / deliverable | Why testers need it | Used by mission(s) | Owner | Status | Blocking? |
|-|-|-|-|-|-|-|-|
| PA-01 | CONFIRM AVAILABLE IN TEST ACCOUNTS | Load the real customer export (700+ rows) and item export (459 rows) into the test/UAT environment | Missions rely on testers picking real, active customers and items rather than inventing fake ones | M-01, M-02, M-05, M-07, M-08, M-09, M-13 | Dev team | Open | **Yes** |
| PA-02 | CLIENT MUST CONFIRM | Which 3 customers issue formal POs (Scope Lock AS-08/NS-12) | M-18 cannot select correct-persona data without knowing which customer accounts these are | M-18 | Gareth → David | Open | **Yes for M-18 only** |
| PA-03 | PREPARE FIXED REGRESSION FIXTURE | **Resolved 2026-07-15:** "Macrofrozen Sample PO" now supplied as the fixed reference (FIX-01) | M-18's input recipe needs at least one authentic PO to establish what "clear" input looks like | M-18 | Gareth | **Done** | No longer blocking |
| PA-04 | OPERATOR MUST SUPPLY | Arrange a way to simulate SQL sync failure (kill the sync worker, point at a dead endpoint, or a dev-triggered flag) | BF-01 requires an actual failure state — it cannot be produced by a tester alone | BF-01 | Dev team | Open | **Yes for BF-01 only** |
| PA-05 | CONFIRMED | Sales Manager role = **CJ Tan** (confirmed via `Macrofood Sales User Setup.xlsx`, not a placeholder) | M-16 requires two coordinated testers; the role is now named, still needs a scheduling confirmation that CJ Tan is available during the window | M-16 | Gareth → CJ Tan | Name confirmed; availability still open | No longer blocking on the name — confirm availability only |
| PA-06 | CONFIRM AVAILABLE IN TEST ACCOUNTS | Confirm at least one customer has a configured customer-specific fixed price, and at least one has a configured credit limit | M-05, M-07 need testers to find these conditions rather than have them invented | M-05, M-07 | Dev team | Open | Yes |
| PA-07 | CONFIRM AVAILABLE IN TEST ACCOUNTS | Confirm at least one item has ≥1 prior invoice history for a real customer, and at least one item/customer pair has none | M-15's win conditions require both a "has history" and a "no history" case to exist | M-15 | Dev team | Open | Yes |
| PA-08 | CONFIRM AVAILABLE IN TEST ACCOUNTS | Confirm the SQL customer→agent export (CJ Tan / Ben / Queenie / CK / David-default) has been loaded so agent assignment is visible per customer | M-13 cannot be tested without a customer whose agent is verifiably CJ Tan (or another named rep), and one of CK's 3 excluded customers | M-13 | Grace's team → Dev team | Open | Yes |
| PA-09 | SANITISE BEFORE USE | Confirm all customer/item data used is either the client's real (already-shared) master data or clearly synthetic — no personal data beyond business contact info | Testers must not handle sensitive personal data unnecessarily | All | Gareth | Open | No |
| PA-10 | CONFIGURE IN UAT | Confirm a bank statement / payment slip upload path is testable in the chosen environment | Held for the next-sprint AR UAT round, not this one — M-04 excluded this round (see §1) | M-04 (next sprint) | Dev team | Deferred with M-04 | No — not needed this round |
| PA-11 | CONFIGURE IN UAT | Tax template set to **No Tax only** | Macro Frozen-specific data-seeding requirement, per 14 Jul Training Plan post-mortem | All order/document missions | Dev team | **Done — already configured** | No |
| PA-12 | PREPARE FIXED REGRESSION FIXTURE | Sample documents: invoice, CN, DO, pick-list PDFs, for format/PDF-render verification | M-09's win conditions require checking real document rendering, not just data correctness | M-09 | **Gareth — in progress, will add** | Open, owned | No longer unassigned — Gareth is sourcing these |
| PA-13 | CLIENT MUST CONFIRM | UAT signatory (likely David, not yet confirmed in writing) | Gate-2/M8 UAT sign-off needs a named signatory (Scope Lock DEP-2) | All (governance, not a specific mission) | Gareth → David | Open | No — not blocking this test round, but blocking overall go-live |

---

## 4. UAT account and selectable-data readiness

| Data category | Tester selection criteria | How tester finds it | Mission(s) | Status | Owner | Blocking? |
|-|-|-|-|-|-|-|
| Active customers | Any customer visible in the loaded export, active status | Search/browse in MAIA | M-01, M-02, M-05, M-07, M-08, M-09 | Pending PA-01 | Dev team | Yes |
| Active items/SKUs | Any item from the loaded export, marked "For Sale = Yes" | Search/browse item catalogue | M-01, M-02, M-05, M-06, M-15 | Pending PA-01 | Dev team | Yes |
| Customer-item fixed price | A customer with a configured customer-specific price on ≥1 item | Check the customer's pricing tab | M-05 | Pending PA-06 | Dev team | Yes |
| Customer credit limit | A customer with a configured credit limit low enough to breach with a normal-size order | Check the customer's credit tab | M-07 | Pending PA-06 | Dev team | Yes |
| Item historical price | An item/customer pair with ≥1 prior invoice, and a separate pair with none | Check invoice history | M-15 | Pending PA-07 | Dev team | Yes |
| Customer-agent assignment | A customer visibly assigned to CJ Tan, Ben, or Queenie, and one of CK's 3 excluded customers | Check the customer's agent field | M-13 | Pending PA-08 | Dev team/Grace | Yes |
| Submitted SO / DO in various states | An SO in Submitted status (not yet DO'd); a DO with a known qty | Create during the mission, or find an existing one | M-09 | Ready — testers create these live | Testers | No |
| Overdue invoice | An invoice past due, ideally under Ben or Queenie (CJ Tan's 2 reps) | Create during the mission by backdating or waiting | M-16 | Ready — testers create/simulate | Testers | No |

---

## 5. Reusable Input Library Matrix

| Input category | Proposed folder | Minimum reusable pool | Mission(s) | Tester chooses | Product team prepares | Status | Blocking? |
|-|-|-|-|-|-|-|-|
| Customer order messages (WhatsApp/Telegram-style text) | `01_Customer_Order_Messages/` | 5–8 sample phrasings covering clear, ambiguous-item-name, missing-quantity, and mixed-language variants | M-01, M-02 | Freely — any real customer + item; may write their own phrasing instead of using samples | 5–8 example phrasings, including at least one garbled item-name example and one no-quantity example | Ready | No |
| Price update templates | `02_Price_Update_Templates/` | 1 valid template (~10–30 SKUs) + 1 template with deliberate errors (missing column, invalid SKU, wrong UOM, negative price, duplicate SKU) | M-05, M-06 | Which real SKUs to include in a self-made template | The two template files above | Open | Yes for M-06 |
| Pick-list PDFs (annotated) | `03_Pick_List_Samples/` | 1 clean sample, 1 blurry/skewed sample | M-02 (sabotage variant only) | Real quantities | Two sample scans | Open (nice-to-have, not blocking) | No |
| Payment slips / bank statements | `04_Payment_Slips/` | 1 clean matching example, 1 payer-name-mismatch example | M-04 | Which real invoice to match against | Two sample files | Open | Yes |
| Customer Purchase Orders | `05_Customer_Purchase_Orders/` | 1 real PO from a confirmed PO-issuing customer | M-18 | N/A — this is the fixed reference | "Macrofrozen Sample PO" (FIX-01, supplied 2026-07-15) | **Done** | No |
| Special regression fixtures | `06_Special_Regression_Fixtures/` | NONE — BF-01's outage is an environment condition, not a file | BF-01 | N/A | Arrange the simulated outage (PA-04) | Open | **Yes** |

---

## 6. Fixed Regression Fixture Register

| Fixture ID | Exact filename | Why fixed data is required | Mission(s) / Boss Fight(s) | Status | Owner | Blocking? |
|-|-|-|-|-|-|-|
| FIX-01 | Macrofrozen Sample PO | M-18 needs at least one authentic PO to establish real format/fields before testers improvise variants | M-18 | **Supplied 2026-07-15** | Gareth | No longer blocking |

If PA-04's simulated SQL outage ends up needing a specific reproducible trigger (rather than a live dev action), register it here as FIX-02 once defined.

---

## 7. Roles, accounts, and permissions

| Role | Persona | Required account/access | Permitted actions | Refused actions to test | Status | Owner |
|-|-|-|-|-|-|-|
| Owner / MD / Credit Controller / Price Controller (Admin) | David | Desktop app access | Approve credit overrides; adjust prices ad-hoc | N/A (top of hierarchy) | Ready | Dev team |
| Finance (credit limits/terms) | Apple | Sets customer credit limits, controls credit terms, finance customer config — **corrected 2026-07-27**, not blanket Admin parity with David | Finance-scope only | N/A | Not separately tested this round — no persona card built for her | Gareth |
| Sales Manager | CJ Tan | Standard MAIA access with manager-level overdue-alert scope | View Ben's and Queenie's overdue accounts | View other reps' overdue accounts outside his team | Name confirmed; availability for the window still open | Gareth → CJ Tan |
| Sales rep | Ben, Queenie | Standard MAIA access, own-customer scope | Create/view own customers, create SOs, log activity notes | View another rep's customers; self-approve over-limit orders; issue a CN unsupervised | Ready | Dev team |
| Finance Manager (also keys in every order) | Grace | Standard MAIA access, AR + admin functions | Match payments; key in SOs relayed from sales | Issue CCN/SCN this round (feature WIP — see M-11) | Ready except CN (WIP) | Dev team |
| Logistics/Warehouse Manager | Lai | Pick-list upload access | Upload confirmed pick lists | N/A | Ready | Dev team |

---

## 8. Beyond Tester Reach handoffs

| Handoff ID | Acceptance criterion | Tester-verifiable half | Client/account-owner half | Owner | Evidence required |
|-|-|-|-|-|-|
| BTR-01 | SL-01: confirmed SO/DO/Invoice push to SQL where integration allows | Tester can confirm MAIA shows a "pending sync"/"synced" state and does not fabricate a synced status | Whether the record actually lands correctly inside the client's live SQL/AutoCount instance | Dev team + SQL vendor | Screenshot of MAIA-side status + a later confirmation from the SQL/dev side that the record appears correctly |
| BTR-02 | AS-01: pick-list-PDF flow works with a real warehouse manager and real foreign-worker pickers | Tester can confirm the upload/amend mechanism works with test data | Whether Lai and his pickers actually adopt this flow instead of reverting to their own paper process | David / Lai | A real pick→confirm→upload cycle observed post-go-live, not simulated in this UAT round |
| BTR-03 | SL-02: AR auto-match genuinely reduces Grace's workload | **Not applicable this round** — SL-02 ships next sprint, see §1/§3 | Whether Grace, using it for real, finds it faster than her current manual process | Grace | Deferred to next sprint's UAT |

---

## 9. Cleanup and collision control

- **UAT naming convention:** prefix every test-created record's reference/remarks field with `UAT-[testerinitials]-[date]`, e.g. `UAT-BQ-0715` (Ben/Queenie).
- **Unique reference format:** combine tester initials + a running number to avoid two testers picking the same "new" customer name or PO number.
- **May be created freely:** SOs, DOs, Invoices, CNs, activity-log notes, price adjustments on non-critical SKUs.
- **Must not be reused/altered:** the fixed PO fixture (FIX-01) and any price-update template files — copy before annotating.
- **Fixed fixtures must remain unchanged:** FIX-01 stays as delivered; testers work from copies.
- **Who resets data:** `[NEEDS INPUT: assign a post-run data reset owner]`.
- **Post-run cleanup owner:** `[NEEDS INPUT]`.

---

## 10. Distribution checklist

- [ ] All blocking project variables are completed (§2).
- [ ] Required accounts and roles are ready (§7) — Sales Manager (CJ Tan) name confirmed; confirm his availability for the window.
- [ ] Testers can find valid data matching mission criteria (§4) — pending PA-01/PA-06/PA-07/PA-08.
- [x] Reusable input pools meet the minimum sample count (§5) — PO sample (FIX-01) supplied 2026-07-15; payment-slip prep deferred with M-04 (next sprint, not needed this round).
- [x] Fixed regression fixtures are present (§6) — FIX-01 (Macrofrozen Sample PO) supplied 2026-07-15.
- [ ] M-04 (AR) and M-11 (CN) are excluded from this round's scored missions — confirmed correctly excluded, not silently tested.
- [ ] M-05/M-06 (bulk price update) results reviewed before tomorrow's client training — this is today's closure target.
- [ ] `00_START_HERE_INPUT_LIBRARY.md` is in the shared folder.
- [ ] Synthetic/real data use is approved (PA-09).
- [ ] Bug tracker and XP tracker are accessible — XP tracker link still needed.
- [ ] Reset and cleanup process is known — owner still needed.
- [ ] Scope boundaries are confirmed (Scope Lock v1, 2026-07-14).
- [ ] Field Guide heading hierarchy is valid.
- [ ] Lark-native Table of Contents has been inserted after import.
- [ ] Every Persona, Mission, and Boss Fight appears in the Lark document outline.
- [ ] Every `####` card heading has been converted to a Lark-native collapsible heading/toggle.
- [ ] Cards are collapsed by default except the first tutorial mission (M-01).
- [ ] Desktop and mobile navigation have been checked.

---

## 11. Lark Publishing Map

| Content block | Markdown level | Required Lark block | Collapsible? | Default state |
|-|-|-|-|-|
| Document title | `#` | Title / Heading 1 | No | Expanded |
| Part | `##` | Heading 1 | Optional | Expanded |
| Numbered section | `###` | Heading 2 | Optional | Expanded |
| Persona Card | `####` | Heading 3 / collapsible heading | Yes | Collapsed |
| Mission Card | `####` | Heading 3 / collapsible heading | Yes | Collapsed |
| Boss Fight | `####` | Heading 3 / collapsible heading | Yes | Collapsed |
| Card subsection | `#####` | Heading 4 | Follows parent | Parent-controlled |

**Post-import checklist:**
- [ ] Import the `.md` file rather than pasting it as plain text where possible.
- [ ] Confirm heading levels before editing content.
- [ ] Insert Lark's native Table of Contents.
- [ ] Apply native collapsibility to all card headings.
- [ ] Collapse all cards except M-01 (first tutorial mission).
- [ ] Confirm the outline and TOC show the same order.
- [ ] Confirm each card contains only its own content.
- [ ] Test navigation on desktop and mobile.

---

## See Also
- [[Macrofood — Scope Lock v1 (reconciled)]]
- [[Macrofood — VoC Extraction]]
- [[Macrofood — UAT Checklist]]
