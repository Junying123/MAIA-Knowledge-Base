---
owner: [PM Name]
status: draft
last_reviewed: 2026-03-24
client: Xeersoft-CK Auto
---

# Onboarding Status — Xeersoft-CK Auto

**Client:** CK Auto (via Xeersoft integration)
**PM Owner:** [Your Name]
**Onboarding Start:** [YYYY-MM-DD]
**Target Go-Live:** [YYYY-MM-DD]

## Milestone Tracker

| Date | Milestone | Status |
|------|-----------|--------|
| [Date] | Initial discovery with Xeersoft | ⏳ |
| [Date] | Integration API/data spec agreed | ⏳ |
| [Date] | Requirements gathering with CK Auto | ⏳ |
| [Date] | Integration build complete (Xeersoft ↔ MAIA) | ⏳ |
| [Date] | MAIA configuration for CK Auto complete | ⏳ |
| [Date] | UAT — CK Auto tests MAIA with live data | ⏳ |
| [Date] | Go-live | ⏳ |

## Phase 1 — Integration Design

- [ ] Align with Xeersoft on data scope (what MAIA pulls)
- [ ] Document integration spec: [[03 - Clients/Xeersoft-CK Auto/Integration/Xeersoft Integration Spec]]
- [ ] Confirm API / data format (REST, CSV, webhook, etc.)
- [ ] Confirm sync frequency and data ownership model
- [ ] Identify data transformation requirements

## Phase 2 — MAIA Configuration

- [ ] Configure workspaces for CK Auto
- [ ] Set up user accounts
- [ ] Map Xeersoft data fields → MAIA fields
- [ ] Configure role permissions: [[03 - Clients/Xeersoft-CK Auto/Role Permission]]
- [ ] Set up document numbering
- [ ] Test data pull from Xeersoft

## Phase 3 — Training & UAT

- [ ] Walk CK Auto through MAIA interface
- [ ] UAT with real data sourced from Xeersoft
- [ ] Bug fixes and adjustments
- [ ] Sign-off from CK Auto

## Phase 4 — Go-Live

- [ ] Go-live checklist complete
- [ ] Integration monitoring in place
- [ ] Weekly check-in with Xeersoft and CK Auto scheduled

## Open Issues / Risks

| # | Issue | Owner | Due | Status |
|---|-------|-------|-----|--------|
| 1 | [Risk: data sync latency, field mapping gaps, etc.] | [Name] | [Date] | Open |

## See Also

- [[03 - Clients/Xeersoft-CK Auto/Client Overview]]
- [[03 - Clients/Xeersoft-CK Auto/Integration/Xeersoft Integration Spec]]
- [[02 - PM Playbook/Processes/Client Onboarding Checklist]]
