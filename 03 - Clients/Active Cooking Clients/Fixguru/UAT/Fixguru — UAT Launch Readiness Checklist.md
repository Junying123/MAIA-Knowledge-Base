---
owner: Gareth
status: draft
last_reviewed: 2026-07-15
client: Fixguru
document_type: internal
version: v1
lark_url: https://eg69120xnei.sg.larksuite.com/wiki/Qa8iwOoaZiwcIRkq1pVloev9g6e
---

# MAIA — UAT Launch Readiness Checklist
### (Fixguru / IAM Worldwide Sdn Bhd)

> Generated via "UAT Infopack — Generator Prompt (v3.5)" (Lark: `WtVWwIaP9i49pQktx7Nl3SMagSh`), from three sources: **[[Fixguru — VoC Extraction]]**, **Scope Lock v2** (Lark `SNl2dbpa0o9K9ixHKAHlfwYNgOf`, 24 Jun 2026 + 13 Jul resolutions), **[[UAT/Fixguru — UAT Checklist]]**. Operator-facing — pairs with the tester-facing Field Guide and the Input Library Start Here file.

## 1. Launch verdict

**USABLE WITH GAPS.** All 10 LOCKED items (L-01–08, AIP-01, AIP-02) have full test coverage and a ready Field Guide. Three blocking gaps remain before distribution: no confirmed tester login/credential process, no reusable input-library folder exists yet, and the XP/bug tracker link is unconfirmed. None of these are product gaps — they're logistics.

## 2. Missing project variables

| Variable | Current value | Required action | Blocking? |
|---|---|---|---|
| Test window | Tue 14 Jul 2026, 10:30am–12:00pm (from prior run) | Confirm if this run reuses the same slot or needs a new date | YES |
| Environment & access | FE: https://maia-fe-fixguru.vercel.app/login · WhatsApp: 012-491 2154 | Confirm how testers receive login credentials for the FE | YES |
| Input library folder | None exists yet | Create shared folder, drop `00_START_HERE_INPUT_LIBRARY.md` in it | YES |
| Bug reporting channel | https://eg69120xnei.sg.larksuite.com/wiki/CsWLwSjOgiO98JkitQ8lGfpPgF2 | Confirmed, reuse | NO |
| XP tracker link | `[NEEDS INPUT]` | Decide: shared Lark sheet, or self-reported in bug channel | NO |
| UAT owner | Gareth | Confirmed | NO |
| Time budget per tester | 1h30m (from prior run) | Confirm if unchanged | NO |

## 3. Preparation action register

| Action ID | Preparation mode | Action / deliverable | Why testers need it | Used by mission(s) | Owner | Status | Blocking? |
|---|---|---|---|---|---|---|---|
| PA-01 | CONFIGURE IN UAT | Confirm each tester has an active FE + WhatsApp login for the sandbox | Cover/Logistics has one open `[NEEDS INPUT]` for credential delivery | All | Gareth | Open | YES |
| PA-02 | PREPARE FIXED REGRESSION FIXTURE | Confirm the 5 fixed pricing/delivery fixtures below are still present unmodified in the AutoCount sandbox | M-03, M-04, M-07, M-12, BF-01 depend on exact known data conditions | M-03, M-04, M-07, M-12, BF-01 | Gareth | Confirmed 14 Jul 2026 (`pricing_history.csv`) — recheck before this run | YES |
| PA-03 | PREPARE REUSABLE SAMPLE POOL | Draft 6–8 realistic WhatsApp order-message examples (mixed EN/BM/Mandarin register, shorthand) | Section 10's Chaos Cards and NS-09 mission (M-18) need real-register examples, not sanitised QA phrasing | M-01, M-18, Chaos Cards | Gareth | Open | NO |
| PA-04 | CONFIRM AVAILABLE IN TEST ACCOUNTS | Confirm every tester's UAT account can browse active customers/items in the FE (not just chat) | Missions default to tester-selected data; if browsing isn't possible, most missions block | All except fixed-fixture missions | Gareth/tech | Open | YES |
| PA-05 | SANITISE BEFORE USE | Confirm no real Fixguru customer contact numbers or emails are exposed to testers outside the internal team | VoC and Scope Lock reference real customer names (Sea Lark, Flybear, Bookxcess) — these are real AutoCount records, not synthetic | M-03, M-04, M-07 | Gareth | Open — internal testers only, but confirm before any wider distribution | NO |
| PA-06 | CLIENT MUST CONFIRM | NS-07 (delivery-method-history source doctype) still open | AIP-04 stays excluded from active testing until resolved | — (excluded) | Gareth/tech | Open | NO |
| PA-07 | ACCOUNT OWNER HANDOFF | Simulating an AutoCount sync failure (UP-03/L-01) requires an environment admin to trigger it | Testers cannot self-service this scenario | M-02 sabotage bonus | Gareth/tech | Open | NO |

## 4. UAT account and selectable-data readiness

| Data category | Tester selection criteria | How tester finds it | Mission(s) | Status | Owner | Blocking? |
|---|---|---|---|---|---|---|
| Active customers | Any customer visible in the sandbox with no restricted flag | FE customer search / WhatsApp customer lookup | M-01, M-02, M-06, M-08, M-09, M-10, M-11, M-14, M-17 | Assumed ready — not yet verified this round | Gareth | YES |
| Active items | Any item with a valid AutoCount item code | FE item search / WhatsApp item lookup | Same as above | Assumed ready | Gareth | YES |
| Item with brand set vs. no brand | One item with AutoCount brand field populated, one without | Item master lookup (may need tech to confirm which items qualify) | M-14 | Not yet identified | Gareth/tech | YES |
| Customer with 2+ open quotations | Any customer with 2 simultaneous draft/open quotations | Tester creates this themselves during the mission | M-08 | Tester-creatable — no prep needed | — | NO |
| Item with per-UOM price floor + price-book entry | Item G1 (or equivalent) with a "piece" UOM floor and a price-book customer below that floor | Confirmed via 24 Jun debrief worked example; verify still live in sandbox | M-15 | Needs recheck | Gareth/tech | YES |
| Customer near/at credit limit | A customer whose exposure only breaches the limit at DN stage, not SO stage | Needs a deliberately-configured test customer | M-16 | Needs prep | Gareth/tech | YES |
| Item with a configured shelf number | Any item with a shelf value in its master record | Item master lookup | M-17 | Assumed ready | Gareth | NO |

## 5. Reusable Input Library Matrix

| Input category | Proposed folder | Minimum reusable pool | Mission(s) | Tester chooses | Product team prepares | Status | Blocking? |
|---|---|---|---|---|---|---|---|
| Customer order messages (WhatsApp register samples) | `01_Customer_Order_Messages/` | 6–8 examples spanning EN/BM/Mandarin, shorthand, multi-item single-message format | M-01, M-06, M-18, Chaos Cards | Tester picks tone/register to imitate, writes their own version | 6–8 example messages | Not yet created | NO |
| Fixed pricing/delivery regression fixtures | `02_Fixed_Regression_Fixtures/` | 5 named fixture records (see §6) | M-03, M-04, M-07, M-12, BF-01 | Nothing — testers use exactly these named records | Confirm records exist unmodified in sandbox each run | Confirmed 14 Jul 2026, recheck before reuse | YES |

No other input categories are required — Fixguru's VoC, Scope Lock, and UAT checklist do not evidence PO photos, scanned documents, or other upload types for this phase; the workflow is WhatsApp-text-to-chatbot only.

## 6. Fixed Regression Fixture Register

| Fixture ID | Exact filename/record | Why fixed data is required | Mission(s) / Boss Fight(s) | Status | Owner | Blocking? |
|---|---|---|---|---|---|---|
| FX-01 | Customer `300-S0048` SEA LARK SOLUTION LIMITED + item `BW 1mx100m (SL Clear) 4.5kg` | Genuine 10-invoice price drift (41 → 49.8 → 47) — this is the exact "one-glance decision" scenario the account has failed sign-off on 4 times; must stay reproducible | M-03, BF-01 | Confirmed 14 Jul 2026 via `pricing_history.csv` | Gareth | YES |
| FX-02 | SEA LARK SOLUTION LIMITED + item `PM72` | Genuine zero-history pair (Sea Lark has 29 other items, never bought this one) — a fabricated zero-history case would not prove the real "not found = not found" behaviour | M-04 | Confirmed 14 Jul 2026 | Gareth | YES |
| FX-03 | FLYBEAR SDN BHD + item `AWB-350` or `A3B` | Genuine thin-history pair (exactly 1 real invoice each) | M-04 | Confirmed 14 Jul 2026 | Gareth | NO |
| FX-04 | BOOKXCESS SDN BHD + item `BW 0.5mx100m (SL Clear)` | Genuine discount-drift across 3 real invoices (5% / 5% / 10%) at standard RM27.70 — proves % vs. flat-currency capture is correct on real data, not a staged number | M-07 | Confirmed 14 Jul 2026 | Gareth | YES |
| FX-05 | Delivery-charge SKU codes `3PL DC` and `IAM DC` | Real AutoCount charge-master codes — confirms delivery-charge SKUs shown to testers are pulled from the real master list (Q9 resolution), not invented | M-12 | Confirmed 14 Jul 2026 | Gareth | NO |

## 7. Roles, accounts, and permissions

| Role | Persona | Required account/access | Permitted actions | Refused actions to test | Status | Owner |
|---|---|---|---|---|---|---|
| Sales agent | Xiao Ling | WhatsApp (internal roster) + FE login | Create/edit drafts, query historical pricing, confirm SO within floor, request delivery charge | Auto-submitting without confirm; approving own below-floor price | Ready | Gareth |
| Admin / escalation authority | Marcus Lim | Full system access (WhatsApp + FE + approval role) | Approve below-floor pricing, approve credit-blocked DN, full regression testing | — (has no refusal boundary in current scope) | Ready | Gareth |
| Finance user | Nisa | WhatsApp + FE, no submit rights on her own | Verify invoice accounting treatment, audit delivery-charge line coding | Submitting/creating SO or approving pricing/credit | Ready | Gareth |
| Logistics user | Asrul | WhatsApp, DN/picking access only | Generate/view DN, read shelf reference | Editing pricing, approving credit, editing SO | Ready | Gareth |
| Driver | Not in this pack's active personas | Delivery-status permissions only | View delivery status | Creating SO (tested as UP-05 in source UAT checklist, folded into M-02 sabotage territory — not a standalone persona this round) | Excluded — no dedicated mission | — |

## 8. Beyond Tester Reach handoffs

| Handoff ID | Acceptance criterion | Tester-verifiable half | Client/account-owner half | Owner | Evidence required |
|---|---|---|---|---|---|
| BTR-01 | L-01: sync failure must be visible, not silent (UP-03) | Tester can observe the error/notification once triggered | Triggering the actual sync failure requires an environment admin to simulate a network/sandbox outage | Gareth/tech | Screenshot of the simulated failure + tester's observed error message |
| BTR-02 | AIP-05/06/07/08 sub-criteria not yet fully locked (approver role/location, price-book storage mechanics, multi-warehouse display) | Tester can confirm the resolved sub-criteria only (ST-01–05 equivalents, now folded into M-15/M-16/M-17) | Full closure of these AIPs requires client + tech alignment, not testable this round | Gareth | N/A — excluded from active testing, listed in §4 (Section 4 of Field Guide) |
| BTR-03 | NS-07: delivery-method-history source doctype still open | None — AIP-04 excluded from active testing | Requires tech + Fixguru client alignment on invoice/SO/DO source | Gareth/tech | N/A |

## 9. Cleanup and collision control

- **UAT naming convention:** tag every record created during testing with `UAT-` in the remarks/reference field, so cleanup is easy.
- **Unique reference format:** `UAT-[tester initials]-[mission code]-[sequence]`, e.g. `UAT-XL-M06-01`.
- **Reservation approach:** none required — most missions use tester-selected data with no exclusivity lock; if two testers pick the same customer/item for the same mission, that's acceptable (real-world concurrency is itself worth observing).
- **May be created freely:** quotations, SOs, DOs, invoices against any active customer/item using the `UAT-` tag.
- **Must not be reused across runs:** none of the fixed fixtures (FX-01–05) should be modified, edited, or have their price/discount history changed.
- **Fixed fixtures that must remain unchanged:** FX-01 through FX-05 (§6) — never write additional invoices against these specific customer/item pairs during testing, or the reproducibility breaks for the next run.
- **Reset/cleanup owner:** Gareth, post-run.

## 10. Distribution checklist

- [ ] All blocking project variables (§2) are completed.
- [ ] Required accounts and roles (§7) are ready.
- [ ] Testers can find valid data matching mission criteria (§4).
- [ ] Fixed regression fixtures (§6) confirmed present and unmodified.
- [ ] `00_START_HERE_INPUT_LIBRARY.md` is in the shared folder.
- [ ] Bug tracker and XP tracker links are accessible (XP tracker still `[NEEDS INPUT]`).
- [ ] Reset and cleanup process is known (§9).
- [ ] Scope boundaries (Field Guide §4) are confirmed against this Scope Lock version.
- [ ] Field Guide heading hierarchy validated (no skipped levels).
- [ ] Lark-native Table of Contents inserted after import.
- [ ] Every Persona, Mission, and Boss Fight appears in the Lark document outline.
- [ ] Every `####` card heading converted to a Lark-native collapsible heading/toggle.
- [ ] Cards collapsed by default except the first tutorial mission (M-01).
- [ ] Desktop and mobile navigation checked.

## 11. Lark Publishing Map

| Content block | Markdown level | Required Lark block | Collapsible? | Default state |
|---|---|---|---|---|
| Document title | `#` | Title / Heading 1 | No | Expanded |
| Part | `##` | Heading 1 | Optional | Expanded |
| Numbered section | `###` | Heading 2 | Optional | Expanded |
| Persona Card | `####` | Heading 3 / collapsible heading | Yes | Collapsed |
| Mission Card | `####` | Heading 3 / collapsible heading | Yes | Collapsed |
| Boss Fight | `####` | Heading 3 / collapsible heading | Yes | Collapsed |
| Card subsection | `#####` | Heading 4 | Follows parent | Parent-controlled |

**Post-import checklist:**
- [ ] Import the .md file rather than pasting as plain text where possible.
- [ ] Confirm heading levels before editing content.
- [ ] Insert Lark's native Table of Contents.
- [ ] Apply native collapsibility to all card headings.
- [ ] Collapse all cards except the first tutorial mission.
- [ ] Confirm outline and TOC show the same order.
- [ ] Confirm each card contains only its own content.
- [ ] Test navigation on desktop and mobile.

## See Also

- [[Fixguru — VoC Extraction]]
- [[UAT/Fixguru — UAT Checklist]]
- [[UAT/Fixguru — UAT Field Guide (Infopack v1)]]
- [[UAT/00_START_HERE_INPUT_LIBRARY]]
- [[Fixguru — Lens Alignment Report]]
