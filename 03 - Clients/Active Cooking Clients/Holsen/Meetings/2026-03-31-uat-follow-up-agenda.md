---
owner: Gareth
status: draft
last_reviewed: 2026-03-31
meeting_date: 2026-03-31
client: Holsen
---

# Meeting Agenda — Holsen <> MH MAIA UAT Follow Up — 2026-03-31

**Date:** 2026-03-31  
**Time:** 14:00 – 15:00 (1 hour)  
**Organiser:** Gareth (MindHive)  
**Attendees:** Brendan Ou Yong (MindHive); Holsen — Ong Siow Chui (holsenlab@gmail.com) *(invite Chinzh / wider Holsen team if needed for UAT status)*  
**Meeting Type:** Client — UAT follow-up & go-live alignment  

## Purpose

Close the loop on **Phase 1 UAT**: confirm testing progress, surface blockers, align on sign-off and dates, and agree owners for open items before Meta setup, bug-fix window, and Phase 1 sign-off.

**Background:**

- **2026-03-18** — UAT kickoff and setup/testing session ([[Meeting -  Holsen - MH MAIA Setup and testing Mar 18]])
- **[[MAIA UAT Form - Holsen - 2026-03]]** — canonical test script and results / sign-off section
- **[[Holsen Phase 1 Timeline]]** — milestone **UAT Follow Up** on 2026-03-31; UAT testing window currently through **2026-04-03**; Phase 1 sign-off **2026-04-08**

**Scope note:** This round covers **core MAIA only**. C1/C3 compliance and A57 tax exemption are **post–Phase 1 sign-off** (same boundary as the UAT pack).

---

## Phase 1 timeline (reference)

| # | Milestone | End / target | Owner | Status (as of agenda date) |
|---|-----------|----------------|-------|----------------------------|
| 1 | UAT Brief | 2026-03-18 | Gareth | Completed |
| 2 | UAT Testing | 2026-04-03 | Gareth / Holsen | In progress |
| 3 | **UAT Follow Up** | **2026-03-31** | Gareth | This meeting |
| 4 | Meta Account Setup | 2026-04-03 | Gareth | Not started |
| 5 | Product Ready | 2026-04-07 | Gareth | Not started |
| 6 | Poison Signing Order Form (Phase 2) | 2026-03-31 | Gareth | In progress |
| 7 | Customer Group for Sales User | 2026-04-02 | Gareth | Not started |
| 8 | UAT Bug Fixes | 2026-04-04 | Dev / Gareth | Not started |
| 9 | Phase 1 Sign Off | 2026-04-08 | Holsen / Gareth | Not started |

> **Date alignment:** The UAT document header still references an earlier **sign-off / go-live** narrative; the **[[Holsen Phase 1 Timeline]]** is the working plan for this phase. Confirm in-meeting which dates Holsen is operating against so expectations match.

---

## Agenda (60 minutes)

1. **UAT progress & blockers** (20–25 min) — coverage by test group; Pass / Fail / Issue summary; show-stoppers for daily use  
2. **Written results & sign-off path** (10 min) — who completes [[MAIA UAT Form - Holsen - 2026-03]]; deadline; **Approved / Conditional / Not approved**  
3. **Open defects & MAIA response** (10 min) — list Fail/Issue with owner and target inside UAT bug-fix window  
4. **Outstanding Holsen deliverables** (10 min) — customer ↔ salesperson mapping, pricing/master data gaps, PSO customer usage list if still open  
5. **Meta / WhatsApp & next touchpoint** (5 min) — verification, credentials handover, comms channel for bugs  

---

## Discussion

### 1. UAT progress & blockers (20–25 min)

**Goal:** Honest snapshot of what is done vs. not started; what prevents completion.

**Discussion points:**

- Tests completed vs. outstanding (chatbot, web app, logistics, roles, PSO Test 23, etc.)
- Environment access (Telegram UAT bot, web app) — any user still blocked?
- Known product/data issues (e.g. overlapping SKUs / UOM, pricing) — impact on tests

**Decisions:**

- [ ] UAT completion criteria agreed (e.g. all P0 tests passed or documented exceptions accepted)

**Action items:**

- [ ] Holsen: update UAT form with Pass/Fail/Issue per test — Owner: — Due:  
- [ ] MH: summarise blockers for dev triage — Owner: — Due:  

---

### 2. Written results & sign-off path (10 min)

**Goal:** Move from informal feedback to a single record: [[MAIA UAT Form - Holsen - 2026-03]] (Results Summary + Sign-Off).

**Discussion points:**

- Who signs (roles / names)
- **Conditional** sign-off: list explicit conditions before go-live or before Phase 1 sign-off

**Decisions:**

- [ ] Sign-off outcome: Approved / Conditional / Not approved  
- [ ] If conditional: conditions documented in UAT form  

**Action items:**

- [ ] Return completed sign-off section — Owner: — Due:  

---

### 3. Open defects & MAIA response (10 min)

**Goal:** Every Fail/Issue has an owner, priority, and target date within the UAT bug-fix window ([[Holsen Phase 1 Timeline]]: through **2026-04-04**).

**Discussion points:**

- P0 vs. P1; workaround vs. must-fix before sign-off

**Action items:**

- [ ] MH: ticket list / ETA for fixes — Owner: — Due:  
- [ ] Holsen: confirm retest owners — Owner: — Due:  

---

### 4. Outstanding Holsen deliverables (10 min)

**Goal:** Unblock configuration and role-based access aligned to [[Holsen Feature Requests - 18 March Setup & Testing]] and timeline item **Customer Group for Sales User**.

**Discussion points:**

- Customer ↔ salesperson list (emails / customer IDs) for sales visibility rules  
- Fixed / customer-specific pricing data still missing, if any  
- PSO-related inputs: customer list with usage (e.g. electroplating vs. trading) if not fully provided  
- Master data: stock, poison flags, addresses needed for specific tests  

**Action items:**

- [ ] Holsen: send / confirm outstanding lists — Owner: — Due:  
- [ ] MH: confirm ingest / config schedule — Owner: — Due:  

---

### 5. Meta / WhatsApp & next touchpoint (5 min)

**Goal:** Clear handoff for Meta account setup (**2026-04-03** per Phase 1 timeline) and ongoing bug reporting.

**Discussion points:**

- Verification steps, who holds admin access, credentials to MH  
- WhatsApp cutover vs. Telegram during UAT (per UAT pack notes)

**Action items:**

- [ ] Credential / verification checklist — Owner: — Due:  
- [ ] Next meeting or async checkpoint before Product Ready (**2026-04-07**) — Owner: — Due:  

---

## Parking lot (defer if time runs out)

- Dashboard volume vs. value metrics (feature request — confirm status with dev, do not deep-design in this session)  
- SQL / Autocount integration — post–Phase 1 per [[03 - Clients/Active Cooking Clients/Holsen/Onboarding Status]]  

---

## See Also

- [[Holsen Phase 1 Timeline]]
- [[MAIA UAT Form - Holsen - 2026-03]]
- [[Meeting -  Holsen - MH MAIA Setup and testing Mar 18]]
- [[2026-03-16-ending-phase-agenda]]
- [[03 - Clients/Active Cooking Clients/Holsen/Onboarding Status]]
- [[Holsen Feature Requests - 18 March Setup & Testing]]
