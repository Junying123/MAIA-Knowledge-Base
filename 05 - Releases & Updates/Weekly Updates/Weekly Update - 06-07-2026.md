---
owner: Gareth
status: draft
last_reviewed: 2026-07-06
type: weekly-update
lark_url: https://eg69120xnei.sg.larksuite.com/wiki/LQCpwFAMti8QnEktEBAlHs2vgvd
---

# Weekly PM Update · 06 Jul 2026

**Owner:** Gareth · **Reviewed in:** Monday Product Sync

---

## Executive Summary

| Theme | Accounts | Action needed from management |
|---|---|---|
| 🟢 On track | Dalson | — |
| 🔴 Infrastructure / access blocked | GST | SAP admin access missing (only HOD license) — payment receipt cannot sync; expedite access grant |
| ⚫ At risk / needs decision | Macrofood | CN/RN billing model gap (risk of negative stock) — confirm interim handling before go-live; tech fixing now |
| ⚫ At risk / needs decision | Fixguru | Same historical-pricing UX blocker since 7 Apr, 4 UAT rounds failed — Milestone-2 (RM24,000) unpaid; Showcase gate this Wed decides if slip continues |

---

## Account Updates

### Dalson · M2 AutoCount Integration (In Progress)

**Current Status:**
- WhatsApp Business verification passed (2nd attempt)
- AWS instance deploy in progress (Weiyon)
- Azib integrating AutoCount data
- SKU matching accuracy (12k items) not yet validated

**Next Action:**
- Test instance Wed this week
- Close internal testing by end of week
- Schedule UAT next week

**Internal:**
- Weiyon deploying AWS instance
- Azib integrating AutoCount data
- PM to close internal testing by Fri

**Blockers:**
- None — SKU accuracy a live concern, testing this week resolves it

**Key dates (per Dalson Phase 1 Backward Plan):**
- M3 Internal Test: Jul 8–10
- M4 UAT: Jul 14–17
- M5 Go-Live + Sign-off: Jul 18–20
- M6 Training: Jul 22–24
- Target: live + trained by Fri 24 Jul, hypercare through 1 Aug

---

### Macrofood · Testing / Pre-Training

**Current Status:**
- Client instance + Telegram chatbot deployed, testing in progress
- Company profile (users) set up
- CPO tested — customer extracted but not matching

**Next Action:**
- Training agenda + slides aligned w/ Ivan
- Customised features confirmed before session

**Internal:**
- Tech team fixing CN/RN billing gap — client's SQL does combined Credit Note (billing + stock return), MAIA/ERPNext splits into separate CN + RN, risk of negative stock if unresolved
- Also fixing customer match issue from CPO test

**Blockers:**
- CN/RN billing model mismatch — tech team actively fixing, affects stock balance, not yet resolved

**Customisation Timeline — 3 Features (dates TBC):**

| # | Feature | QA Date | Internal Showcase | UAT Date |
|---|---|---|---|---|
| A | Bulk Item Price Update | TBC | TBC | TBC |
| B | Slow-moving / Near-expiry Stock Alert | TBC | TBC | TBC |
| C | AR (Reconciliation) | TBC | TBC | TBC |

Sequence A > B > C. Target: all 3 through UAT and go-live-ready by end of July / early August.

---

### GST · Core Infra Setup

**Current Status:**
- Client core infra setup in progress
- MAIA demo recording being made for client's big boss, sending tomorrow

**Next Action:**
- Follow up w/ client whether their setup is done

**Internal:**
- Align w/ Azib on SAP integration — confirm no issues
- Currently only have HOD license access, not admin access

**Blockers:**
- Blanket order — customisation to implement
- SOA — tested, needs enhancement/fixing
- Branch doctype — customisation to implement
- SAP admin access missing (only HOD license) — payment receipt cannot sync

---

### Fixguru · UX Bug Fix Sprint / Pre-Showcase

**Current Status:**
- UX Bug Fix Sprint in progress — dev fixing chatbot UX formatter + FE historical pricing table
- Ready to test by Wed

**Next Action:**
- Run Internal QA golden scenario once fix ready
- Showcase to leadership (go/no-go gate) before scheduling 3rd UAT with client

**Internal:**
- Dev fixing chatbot UX + historical pricing table (min 5 rows, correct discount calc, language bug)
- Gareth to run Internal QA scenario after fix lands

**Blockers:**
- Historical pricing UX fix in progress, targeting Wed test

---

## See Also

- [[02 - PM Playbook/Templates/[Template] Weekly PM Update]]
- [[03 - Clients/Active Cooking Clients/Dalson/Dalson Phase 1 Timeline]]
- [[03 - Clients/Active Cooking Clients/Macrofood/Onboarding Status]]
