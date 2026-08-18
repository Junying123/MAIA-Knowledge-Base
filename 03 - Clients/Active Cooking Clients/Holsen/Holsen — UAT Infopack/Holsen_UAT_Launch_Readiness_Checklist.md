---
owner: Gareth
status: draft
last_reviewed: 2026-08-04
client: Holsen
---

# Holsen — UAT Launch Readiness Checklist

**Built from:** Holsen — Scope Lock v2 (2026-08-03), Holsen — VoC Extraction (v1), Holsen_MAIA_UAT_Signoff_Checklist. No End-user & Process Map exists for Holsen — personas below are grounded directly in the Scope Lock's named-actor roster and the Signoff Checklist's role table instead.

---

## 1. Launch Verdict

**USABLE WITH GAPS.**

The 27-item Signoff Checklist is fully groundable against LOCKED Scope Lock items — every capability it tests has a corresponding `SL-N` acceptance criterion. Two items on the checklist (Pick List notification, DN batch carry-over) test mechanisms the Scope Lock itself still files under "Needs Scoping," and one (item 24, C1/C3 at DN/Invoice) is an explicit fresh retest with no prior pass/fail history — these are flagged, not blocking. The real gap is operational: no named UAT signatory, no confirmed fixed-price/fixed-order fixtures in the test environment, and the SQL-sync half of Invoice testing is not verifiable by any tester because vendor access isn't set up yet. Fix the five items in the Preparation Action Register marked "blocking" and this pack is ready to run.

---

## 2. Missing Project Variables

| Variable | Needed for | Status |
|-|-|-|
| Named UAT signatory (Section 6c, `SL-40`) | Field Guide cover, Section 7 sign-off flow | Proposed: Tam Ze Xin — **not formally confirmed** |
| UAT test-account credentials, one per role (Tam Ze Xin/Sales, Noor Aili Nafiah/Logistics, Intan Atikah/Procurement, Murugesu/Production, Wong Shui Fern/Finance, Ong Siow Chui/Admin) | Every Mission Card, all Persona Cards | Not confirmed supplied |
| Configured minimum-price item + its exact threshold value | M-03 (`SL-26`) | Not confirmed configured in UAT env |
| Existing SO at TO BILL status (fixed customer + PO number) | M-02 duplicate-check fixture (`SL-1` AC6) | Not confirmed present in UAT env |
| At least one customer with an on-file customer-specific price | M-03 (`SL-24` AC1/3) | Not confirmed |
| At least one customer holding a valid C1 certificate already | M-09 (`SL-3`, `SL-22`) | Not confirmed |
| Sample PO + appointment-letter file for a fresh C3 application | M-10 (`SL-22` AC3) | Not confirmed prepared |
| Product catalogue confirmed tagged Trading vs Manufacturing in the UAT environment | M-03 (`SL-24`) | Not confirmed |
| Whether push-to-SQL is reachable/visible at all in the UAT env | M-08 Beyond Tester Reach handoff (`SL-4`, `SL-12`) | Not confirmed — vendor access items per `SL-12` still pending |
| Warehouse notification channel — Telegram (`@maia_holsen_bot`) or WhatsApp | M-05 (`SL-32`) | Unresolved per `SL-39` |

---

## 3. Preparation Action Register

| Action ID | Mode | Deliverable | Why | Mission(s) | Owner | Status | Blocking? |
|-|-|-|-|-|-|-|-|
| PA-01 | OPERATOR MUST SUPPLY | UAT login for each of the 6 named roles | Every mission needs the tester logged in as the correct persona | All | Gareth/Mindhive | Open | Yes |
| PA-02 | CLIENT MUST CONFIRM | Named UAT signatory (Tam Ze Xin or other) | Closes `SL-40` paperwork gap; Field Guide cover needs a name | Field Guide cover | Gareth | Open | Yes |
| PA-03 | PREPARE FIXED REGRESSION FIXTURE | One SO at TO BILL status, known customer + PO number | Duplicate-check test needs an exact match to trigger the block | M-02 | Mindhive dev/QA | Open | Yes |
| PA-04 | CONFIGURE IN UAT | One item with a known, testable minimum price | Boundary test needs a price to submit exactly at/below | M-03 | Mindhive dev | Open | Yes |
| PA-05 | CONFIRM AVAILABLE IN TEST ACCOUNTS | ≥1 customer with existing customer-specific price; ≥1 without | Tests both branches of the RM0 Trading default | M-03 | Gareth/Holsen | Open | Yes |
| PA-06 | CONFIRM AVAILABLE IN TEST ACCOUNTS | ≥1 customer with valid C1 on file | M-09 needs an existing cert to apply, not just create one | M-09 | Gareth/Holsen | Open | No |
| PA-07 | PREPARE REUSABLE SAMPLE POOL | Synthetic PO + appointment-letter PDFs (2-3 variants) | C3 creation requires these attachments to save | M-10 | Gareth | Open | No |
| PA-08 | SANITISE BEFORE USE | Any real Holsen PO/invoice used as a sample must have pricing/customer identity scrubbed | Protects client commercial data if real documents are reused as samples | M-01, M-09, M-10, M-13 | Gareth | Open | No |
| PA-09 | ACCOUNT OWNER HANDOFF | Confirm whether SQL-side sync is visible/verifiable in UAT at all | Testers cannot verify a system they can't reach | M-08 | Gareth (client-side) | Open | No |
| PA-10 | CLIENT MUST CONFIRM | Warehouse notification channel (Telegram vs WhatsApp) | M-05's Pick List notification mission needs to know where to look for the alert | M-05 | Gareth/Holsen | Open | No |
| PA-11 | CONFIGURE IN UAT | ≥1 poison-flagged SKU available for the PSO side quest | SQ-01 needs a poison item to trigger PSO generation | SQ-01 | Mindhive dev | Open | No |

---

## 4. UAT Account / Selectable-Data Readiness

| Data type | Selection criteria | Confirmed in UAT env? |
|-|-|-|
| Customer POs (text/photo/PDF) | Any Holsen-format PO with customer, ≥1 SKU, quantity, delivery date | Not confirmed |
| Trading-tagged item | Item master tagged "Trading" per Product Taxonomy | Not confirmed |
| Manufacturing-tagged item | Item master tagged "Manufacturing" | Not confirmed |
| Customer with on-file specific price | Any customer whose price list has ≥1 SKU override | Not confirmed |
| Customer without on-file specific price | Any customer with no price-list entries | Not confirmed |
| Available stock batch at Pick List stage | Any batch with quantity > 0 for a picked item | Not confirmed |
| Third-party transporter routing | Any customer postcode classifiable Local (Menaka) or Outstation (GMax/Tiong Nam) | Not confirmed — auto-classification, no manual selection needed |
| Customer with valid C1 on file | Any customer with an uploaded/created C1 cert | Not confirmed — see PA-06 |

---

## 5. Reusable Input Library Matrix

| Folder | Why it exists | Used by | Min pool size | Tester picks freely | Product team prepares |
|-|-|-|-|-|-|
| `01_Customer_POs/` | PO intake needs real-shaped source documents in text/photo/PDF form | M-01, M-02 | 5 | Any valid PO shape | Sanitise if sourced from real Holsen documents (PA-08) |
| `02_C1_C3_Certificates/` | C1/C3 flows need sample certificate PDFs + PO/appointment-letter attachments | M-09, M-10 | 3 | Which customer/cert combo to use | The PO + appointment-letter synthetic pair (PA-07) |
| `03_COA_K1_Attachments/` | COA and K1 are tested as plain doctype-level attachments | M-13 | 2 | Any file, synthetic content | Nothing — any PDF/image works |
| `04_Fixed_Fixtures/` | Two boundary tests need an exact, reproducible starting state | M-02, M-03 | N/A — fixed | Nothing — must use the fixture | TO BILL order (PA-03), minimum-price item (PA-04) |

**Merge note:** COA and K1 share one folder — both are tested identically (plain attachment, doctype-level), so a single synthetic-PDF pool covers both.

---

## 6. Fixed Regression Fixture Register

| Fixture ID | What it is | Used by | Why fixed (not tester-selected) |
|-|-|-|-|
| FIX-01 | One SO at TO BILL status, fixed customer + PO number | M-02 | Duplicate-check requires an *exact* pre-existing match — tester-chosen data can't guarantee collision |
| FIX-02 | One item with a known, exact minimum price | M-03 | Boundary test (`entered_price < minimum_price`) needs a known threshold to test precisely at/below |

---

## 7. Roles, Accounts, Permissions

| Role (named actor) | Document rights per `SL-16` | Used in |
|-|-|-|
| Sales Manager (Tam Ze Xin, Ng Tze Chien) | Full CRUD+SUBMIT Quotation/PO only; read-only SO/Invoice/DN | M-01, M-02, M-12 |
| Logistics — Logistics (Noor Aili Nafiah) | Full CRUD+SUBMIT SO/DN/Pick List/Inventory | M-04, M-05, M-06, M-07, M-09, M-10, M-11, M-12, M-13 |
| Logistics — Procurement (Intan Atikah) | Read + submit-only SO/DN; full CRUD Incoming Goods | M-12 |
| Logistics — Production (Murugesu A/L Palanivello) | Read-only Pick List/Inventory; no document access | M-12 |
| Finance (Wong Shui Fern) | Full CRUD+SUBMIT Invoice/Receipt/SO/DN | M-08, M-11, M-12 |
| Admin / System Admin (Ong Siow Chui, Tam Ze Xin, Chin Zhao Heng) | Full access to everything | M-12, SQ-01 |

**Note:** Tam Ze Xin appears twice in the roster — as "Sales Manager" in the SOW Feature Checklist's permission matrix, and as "System Admin" in the UAT Signoff Checklist's role table. Treat his UAT account as System-Admin-tier unless told otherwise; flag the discrepancy to Gareth if his test account behaves as Sales-tier only.

---

## 8. Beyond Tester Reach Handoffs

| Item | Why testers can't verify it | Handoff to |
|-|-|-|
| Invoice → SQL sync actually completing (`SL-4`, `SL-12`) | Push-to-SQL is gated on vendor access items that are not yet confirmed set up; zero transaction data exists in SQL today | Gareth to confirm with Tam Ze Xin whether sync is even reachable in the UAT environment before testers attempt item 16's second half |
| Warehouse notification actually firing in production (`SL-32`) | Design is confirmed but live-firing status in production, and which channel (Telegram/WhatsApp), is unresolved per `SL-39` | Gareth/Holsen to confirm channel before the mission runs |
| Batch allocation lock across mixed-exemption customers (`SL-30`) | Confirmed unbuilt, explicitly deferred to Phase A3 | Not a tester task this round — do not test, do not log absence as a defect |
| Credit-limit approval routing to Mr. Chin (`SL-38`) | Feature exists but is not switched on | Gareth/Tam Ze Xin to decide when to enable before it becomes testable |
| Finance-approval-before-DN gate (`SL-36`) | Unresolved whether this gate exists anywhere in the current flow | Gareth to confirm with Tam Ze Xin |

---

## 9. Cleanup and Collision Control

- Any Sales Order, Pick List, DN, or Invoice created during UAT must use a clearly tagged test customer name or PO prefix (e.g. `UAT-` prefix) so client-facing reports aren't polluted.
- The TO BILL fixture order (FIX-01) must not be advanced past its fixture state by any other mission — if a tester accidentally converts it, flag immediately and ask Mindhive to recreate it before the next session.
- C1/C3 certificates created during testing should be tagged as test certificates if the environment supports a note/remark field, since certificates are perpetual (C1) and could otherwise persist into real customer records.
- Batches consumed during Pick List/DN missions should be tracked so stock figures can be reconciled after the session — this matters more than usual here because `SL-37` already has an open stock-ingest discrepancy.

---

## 10. Distribution Checklist

- [ ] All 6 named-role UAT accounts provisioned and credentials distributed
- [ ] FIX-01 and FIX-02 fixtures created and verified in the UAT environment
- [ ] Sample PO / C1-C3 / COA-K1 input pools populated per Section 5
- [ ] Named UAT signatory confirmed (PA-02)
- [ ] Warehouse notification channel confirmed (PA-10)
- [ ] Field Guide, this checklist, and the Input Library index shared with all testers
- [ ] Bug/XP tracker link shared and access-tested by at least one tester before launch

---

## 11. Lark Publishing Map

| Content block | Markdown level | Required Lark block | Collapsible? | Default state |
|-|-|-|-|-|
| Document title | `#` | Page title | No | — |
| Part headers (PART A / PART B) | `##` | Heading 2 | No | Expanded |
| Numbered sections (Section 0-12) | `###` | Heading 3 | Yes (native) | Expanded |
| Persona Cards | `####` | Heading 4 | Yes (native) | Collapsed after first |
| Mission Cards | `####` | Heading 4 | Yes (native) | Collapsed after the tutorial mission (M-01) |
| Boss Fight / Side Quest cards | `####` | Heading 4 | Yes (native) | Collapsed |
| Card subsections (Input recipe, Win conditions, etc.) | `#####` | Heading 5 | Collapses with parent | Collapsed with parent |
| Navigation Index | Plain text list | Paragraph | No | — |
| Tables | Markdown table | Native Lark table | No | — |

**Post-import QA checklist:**
- [ ] Import as `.md`, confirm no heading level was skipped or flattened
- [ ] Insert Lark-native TOC block at the top of the Field Guide
- [ ] Apply native collapsibility to every Persona/Mission/Boss Fight `####` heading
- [ ] Collapse all cards except Mission M-01 (the tutorial mission) by default
- [ ] Test navigation on both desktop and mobile Lark clients
