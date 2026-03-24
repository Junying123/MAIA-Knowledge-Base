---
owner: Gareth
status: approved
last_reviewed: 2026-03-24
client: Holsen
---

# Client Overview — Holsen

**Client:** Holsen
**Industry:** Industrial Chemicals / Surface Treatment
**PM Owner:** Gareth
**Onboarding Start:** 2026-02-10
**Target Go-Live:** 2026-03-31 (Core MAIA only)

## About Holsen

Holsen is a B2B chemical distribution and surface treatment company. They handle high transaction volumes (~70–90 customer POs daily) across trading, manufacturing, and controlled/regulated chemical products.

## Key Contacts

| Name | Role | Contact |
|------|------|---------|
| [Name] | Primary Contact | [email / phone] |
| [Name] | Technical Contact | [email / phone] |

## Business Context

**What they need MAIA for:**
End-to-end order management via WhatsApp chatbot — from PO intake and quotation through Sales Order creation, approval, and delivery coordination. Replacing manual WhatsApp-based workflows and Excel/notebook tracking.

**Key workflow:** Customer PO → WhatsApp → MAIA IDP → Sales Order → Approval → Delivery Order → UBS CSV export

**Current tools being replaced:**
- Manual WhatsApp order taking
- UBS accounting system (CSV import remains in A1; direct integration post-A1)
- Notebook/Excel batch and stock tracking

## MAIA Scope

**Workspaces in use:**
- [x] Sales (Sales Agent Workspace, Approval Workspace)
- [x] Finance (Credit limit/term checks)
- [x] Logistics (Delivery Workspace, Supply Chain chatbot)

**Chatbots:**
- Sales Agent Assistant (WhatsApp — post go-live; Telegram @maia_holsen_bot for UAT)
- Supply Chain Agent Assistant (WhatsApp)

**Delivery phases:**
| Phase | Scope | Status |
|-------|-------|--------|
| A1 | Core MAIA — Order to Delivery Note flow | Go-live 2026-03-31 |
| A2 | Business Rule & SOP configuration (pricing governance, credit validation) | Post go-live |
| A3 | Compliance, Batch Handling, COA/C3 documents | Post go-live (dev-complete 2026-03-30) |
| B | Manufacturing feasibility | TBD |

## Production Environment

- **Web App:** https://maia-fe-holsen.vercel.app/login
- **Chatbot (UAT):** Telegram @maia_holsen_bot
- **Chatbot (Go-Live):** WhatsApp (pending Meta account setup)

## Current Status

**Phase:** UAT / Pre-Go-Live
**Go-Live Date:** 2026-03-31 (Core MAIA only — C1/C3 compliance excluded)
**Notes:** UAT started 2026-03-18 covering core MAIA only. C1/C3 and A57 tax exemption enforcement are post-go-live scope.

## See Also

- [[03 - Clients/Holsen/Onboarding Status]]
- [[03 - Clients/Holsen/Config Overlay]]
- [[03 - Clients/Holsen/Product/SOW for MAIA Holsen]]
- [[03 - Clients/Holsen/Product/Working Holsen]]
- [[03 - Clients/Holsen/UAT/MAIA UAT Form - Holsen - 2026-03]]
- [[03 - Clients/Holsen/Feature Requests/Holsen SOW Feature Checklist]]
