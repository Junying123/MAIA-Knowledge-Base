# MAIA — UAT Launch Readiness Checklist

## 1. Launch verdict

**USABLE WITH GAPS.** All 12 LOCKED scope items have full Mission coverage and the Field Guide is complete and Lark-ready. Test window, environment access, and the bug-reporting channel are now confirmed (Section 2). Remaining gaps: XP tracker link, a named UAT owner, and the time budget vs. the confirmed 60-minute window (see warning below) — plus one identity gap (the driver role is unconfirmed, so M-05 must be played by a stand-in). Nothing here blocks distributing the pack once these are closed.

> **Time-budget warning:** the confirmed test window is **60 minutes on 20 July**. This pack's own estimate (12 missions × ~10 min + 3 Boss Fights × ~14 min) runs closer to **~3 hours** for full completion. Recommend either scoping this session to the Speedrun set (M-07, M-08, M-11, M-12 — the P1-risk flows) or splitting the campaign across multiple sessions. Flag to the UAT owner before distribution.

## 2. Missing project variables

| Variable | Current value | Required action | Blocking? |
|---|---|---|---|
| TEST_WINDOW | **20 July, 60 minutes** | See time-budget warning above — confirm scope (Speedrun vs full campaign) | No longer missing — scope decision needed |
| ENVIRONMENT_AND_ACCESS | **https://maia-fe-dalson.vercel.app/** · Telegram: **@maia_dalson_bot** | — | No longer missing |
| INPUT_LIBRARY_FOLDER | **Sample Docs, Sample POs, WhatsApp Sample Order Msg** (Google Drive, linked in Lark) | — | No |
| CURRENT_INPUT_LIBRARY_CONTENTS | See `00_START_HERE_INPUT_LIBRARY.md` | — | No |
| TEST_DATA_ACCESS_NOTES | Covered per-mission in Field Guide | — | No |
| SYSTEMS_TESTERS_CANNOT_ACCESS | Set — Dalson's live AutoCount instance | — | No |
| BUG_REPORTING_CHANNEL | **QA Testing Tracker** (Lark doc) | — | No longer missing |
| XP_TRACKER_LINK | `[NEEDS INPUT]` | UAT owner to set (or skip scoring) | No — optional |
| UAT_OWNER | `[NEEDS INPUT]` | Assign a name | Yes |
| TIME_BUDGET_PER_TESTER | 60 min confirmed, but see time-budget warning above | UAT owner to confirm scope | Yes |
| ANYTHING_ELSE_TESTERS_MUST_KNOW | Not specified | Optional | No |

## 3. Preparation action register

| Action ID | Preparation mode | Action / deliverable | Why testers need it | Used by mission(s) | Owner | Status | Blocking? |
|---|---|---|---|---|---|---|---|
| A-01 | CONFIGURE IN UAT | Provision a UAT account with staging/migrated AutoCount data loaded | Every mission assumes real-looking customer/item data is browsable | M-01–M-12 | `[NEEDS INPUT]` | Not started | Yes |
| A-02 | CONFIGURE IN UAT | Provision 2 Telegram test accounts — 1 registered as staff, 1 not | M-03 needs both sides of the access-control test | M-03 | `[NEEDS INPUT]` | Not started | Yes |
| A-03 | ACCOUNT OWNER HANDOFF | Give the UAT owner (or a Dalson AutoCount dealer contact) a way to confirm the 4 Beyond Tester Reach criteria after the fact | Testers can't see live AutoCount; someone must close the loop | M-06, M-08, M-10, M-11, BF-03 | `[NEEDS INPUT]` / Ms Tan | Not started | Yes |
| A-04 | CLIENT MUST CONFIRM | Confirm the driver role identity (or explicitly accept "any staff member plays this persona for UAT") | M-05 currently runs on a stand-in persona by design — worth a final client nod before distribution | M-05 | `[NEEDS INPUT: UAT_OWNER]` | Not started | No — mission is playable either way |
| A-05 | SANITISE BEFORE USE | Confirm all customer/item data in the UAT environment is synthetic or properly sanitised | Content-integrity rule — no real customer data in a mass-testing exercise | All missions | `[NEEDS INPUT]` | Not started | Yes |
| A-06 | CONFIRM AVAILABLE IN TEST ACCOUNTS | Confirm testers can find: an active customer not in the migrated set (for M-01's not-found case), an item with 2+ similar SKUs (for M-04/BF-01), a non-tracked SKU (for M-09) | Several missions need a specific *kind* of record to exist, not a specific one | M-01, M-04, M-09, BF-01 | `[NEEDS INPUT]` | Not started | Yes |

No mission in this pack requires a bespoke, product-team-prepared artifact — see Section 5.

## 4. UAT account and selectable-data readiness

| Data category | Tester selection criteria | How tester finds it | Mission(s) | Status | Owner | Blocking? |
|---|---|---|---|---|---|---|
| Active customers | Any customer visible in the UAT account | Browse/search in MAIA or the backend workspace | M-01, M-02, M-04, M-06, M-10 | `[NEEDS INPUT]` | `[NEEDS INPUT]` | Yes |
| Active items/SKUs | Any item, plus at least 2 similar-SKU pairs | Browse item master | M-04, M-09, M-10, BF-01 | `[NEEDS INPUT]` | `[NEEDS INPUT]` | Yes |
| Existing invoice with a returned item | Any invoice tester can reference | Browse invoices in UAT account | M-08 | `[NEEDS INPUT]` | `[NEEDS INPUT]` | Yes |
| Paid order + proof of payment | Any order marked paid with proof attached | Browse orders | M-12 | `[NEEDS INPUT]` | `[NEEDS INPUT]` | Yes |
| Non-migrated / unknown customer | A deliberately absent record | UAT owner confirms one is genuinely absent | M-01, M-06 | `[NEEDS INPUT]` | `[NEEDS INPUT]` | Yes |
| Non-tracked SKU | An item flagged as not requiring stock-count tracking | UAT owner confirms configuration | M-09 | `[NEEDS INPUT]` | `[NEEDS INPUT]` | Yes |

## 5. Reusable Input Library Matrix

| Input category | Proposed folder | Minimum reusable pool | Mission(s) | Tester chooses | Product team prepares | Status | Blocking? |
|---|---|---|---|---|---|---|---|
| Purchase Order samples (photo/text) | `01_Purchase_Order_Samples/` | 3–5 varied clarity levels (clean, blurry/cropped, garbled) | M-02, BF-01, BF-02 | Customer, item, wording | 2–3 illustrative reference samples for tone | Not started | No |
| POD photos | `02_POD_Photos/` | 1–2 synthetic delivery photos | M-05 | Which order to attach to | Sample synthetic photo(s) | Not started | No |
| New-customer / new-item worksheets | `03_New_Customer_Item_Examples/` | 1–2 example field layouts | M-10 | Actual field values | Example of what "complete" looks like | Not started | No |

No dedicated folder is needed for missions that run entirely on tester-selected existing records (M-01, M-03, M-04, M-06, M-07, M-08, M-09, M-11, M-12) — those pull directly from the UAT account.

## 6. Fixed Regression Fixture Register

**NONE.** This project's evidence base (12 locked items, no recorded historical failures) doesn't currently justify a controlled fixture — every mission's reproducibility need is met by stating clear selection criteria instead. Revisit this if a specific regression is later confirmed and needs a stable, unchanging input.

## 7. Roles, accounts, and permissions

> **Update 2026-07-20:** SL-7's approval gate is superseded — client (Yap Li Min) confirmed only 3 people use MAIA for Dalson, and a separate sign-off step was dropped as unnecessary friction for a team this size. All 3 registered users (Yap Li Min, Asilah, Joseph) now submit directly.

| Role | Persona | Required account/access | Permitted actions | Refused actions to test | Status | Owner |
|---|---|---|---|---|---|---|
| Owner | Yap Li Min | Full UAT account access | Submit SO/Invoice directly, issue credit notes, generate receipts | — | `[NEEDS INPUT]` | `[NEEDS INPUT]` |
| Sales Coordinator | Asilah | UAT account, chatbot access | Draft and submit orders directly, create customers/items via chatbot | — | `[NEEDS INPUT]` | `[NEEDS INPUT]` |
| Store Keeper | Joseph | Not confirmed — see Field Guide Persona P-03 | Submit orders directly, in principle (SL-7); actual MAIA-facing access unconfirmed | — | Open gap, not blocking | `[NEEDS INPUT]` |
| Driver | Role TBC | Any staff account may stand in | Upload POD | Submitting orders, accessing customer/pricing data | Open gap, not blocking | `[NEEDS INPUT]` |
| Unregistered Telegram account | N/A | A Telegram account **not** on the staff list | None | Everything, including submission | `[NEEDS INPUT]` — needs provisioning (A-02) | `[NEEDS INPUT]` |

## 8. Beyond Tester Reach handoffs

| Handoff ID | Acceptance criterion | Tester-verifiable half | Client/account-owner half | Owner | Evidence required |
|---|---|---|---|---|---|
| H-01 | SL-6: migrated data matches AutoCount 1:1, pushed SO appears correctly | MAIA shows the migrated record and push confirmation | Confirming the live AutoCount record | `[NEEDS INPUT]` / Ms Tan | Screenshot from AutoCount side |
| H-02 | SL-11: new customer/item reflects correctly in AutoCount | MAIA confirms creation succeeded | Confirming AutoCount validation passed | `[NEEDS INPUT]` / Ms Tan | Screenshot from AutoCount side |
| H-03 | SL-8: credit note tied to the correct invoice in AutoCount | MAIA shows the linkage | Confirming AutoCount reflects the same linkage | `[NEEDS INPUT]` / Ms Tan | Screenshot from AutoCount side |
| H-04 | SL-13: only Invoice + DO reach AutoCount, SO never does | MAIA confirms what it pushed | Confirming AutoCount's Sales Order list stayed empty | `[NEEDS INPUT]` / Ms Tan | Screenshot / export from AutoCount side |

## 9. Cleanup and collision control

- **UAT naming convention:** `[NEEDS INPUT]` — recommend a simple prefix (e.g. `UAT-[tester initials]-[date]`) for any new customer/item/order testers create, so records are traceable and don't collide with each other.
- **Unique reference format:** as above — testers should not reuse the same PO/customer/item name as another tester in the same window.
- **Tester reservation approach:** none needed — the input philosophy here is tester-selected data, not a shared reserved pool.
- **What may be created freely:** new customers/items via M-10, new orders via M-02/M-11, POD photos via M-05.
- **What must not be reused:** a customer/item name another tester has already claimed for a uniqueness-dependent test (e.g. duplicate-detection missions).
- **Fixed fixtures to keep unchanged:** none — see Section 6.
- **Who resets data:** `[NEEDS INPUT]`
- **Post-run cleanup owner:** `[NEEDS INPUT]`

## 10. Distribution checklist

- [ ] All blocking project variables (Section 2) are completed.
- [ ] Required accounts and roles (A-01, A-02) are ready.
- [ ] Testers can find valid data matching mission criteria (Section 4, A-06).
- [ ] Reusable input pools meet the minimum sample count (Section 5).
- [ ] Fixed regression fixtures are present — N/A, none required.
- [ ] `00_START_HERE_INPUT_LIBRARY.md` is in the shared folder.
- [ ] Synthetic data is approved (A-05).
- [ ] Bug tracker and XP tracker are accessible.
- [ ] Reset and cleanup process is known.
- [ ] Scope boundaries are confirmed (Section 4 of the Field Guide).
- [ ] Field Guide heading hierarchy is valid — confirmed, see Section 11 QA notes below.
- [ ] Lark-native Table of Contents has been inserted after import.
- [ ] Every Persona, Mission, and Boss Fight appears in the Lark document outline.
- [ ] Every `####` card heading has been converted to a Lark-native collapsible heading/toggle.
- [ ] Cards are collapsed by default except the first tutorial mission (M-01).
- [ ] Desktop and mobile navigation have been checked.

## 11. Lark Publishing Map

| Content block | Markdown level | Required Lark block | Collapsible? | Default state |
|---|---|---|---|---|
| Document title | `#` | Title / Heading 1 | No | Expanded |
| Part | `##` | Heading 1 | Optional | Expanded |
| Numbered section | `###` | Heading 2 | Optional | Expanded |
| Persona Card | `####` | Heading 3 / collapsible heading | Yes | Collapsed |
| Mission Card | `####` | Heading 3 / collapsible heading | Yes | Collapsed (except M-01) |
| Boss Fight | `####` | Heading 3 / collapsible heading | Yes | Collapsed |
| Card subsection | `#####` | Heading 4 | Follows parent | Parent-controlled |

Post-import checklist:

- [ ] Import the `.md` file rather than pasting it as plain text where possible.
- [ ] Confirm heading levels before editing content.
- [ ] Insert Lark's native Table of Contents.
- [ ] Apply native collapsibility to all card headings.
- [ ] Collapse all cards except Mission M-01 (the tutorial mission).
- [ ] Confirm the outline and TOC show the same order.
- [ ] Confirm each card contains only its own content.
- [ ] Test navigation on desktop and mobile.
