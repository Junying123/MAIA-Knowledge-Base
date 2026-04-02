---
owner: Gareth
status: draft
last_reviewed: 2026-03-24
client: Holsen
---

# Client Configuration Overlay — Holsen

**Client:** Holsen
**Industry:** Industrial Chemicals / Surface Treatment
**Go-Live Date:** 2026-03-31 (Core MAIA — A1)
**Account Owner:** Gareth

## Purpose

This document captures **Holsen-specific configurations and deviations** from standard MAIA setup.

All standard MAIA features are documented in [[01 - MAIA Product]]. This overlay documents **only the customizations**.

## Configuration Summary

| Configuration Area | Standard MAIA | Holsen Configuration |
|-------------------|---------------|----------------------|
| Pricing model | Fixed pricing | Customer-specific price list + Commodity manual confirmation + minimum price safeguards |
| Order input channel | Web workspace | WhatsApp chatbot (UAT: Telegram @maia_holsen_bot; Go-live: WhatsApp) |
| Approval flow | Standard | Sales → Finance Approval → Logistics (credit + pricing checks) |
| Inventory export | N/A | UBS CSV export (interim; direct integration planned post-A1) |
| SKU classification | Standard | Trading / Manufacturing / Poison / Commodity / COA Required tags |
| C3 compliance | N/A | Post-go-live (A3 phase) |

## Workspace Configuration

### Sales Workspace

**Enabled Modules:**
- [x] Quotations
- [x] Sales Orders
- [x] Invoices
- [x] Credit Notes
- [x] Proforma Invoices

**Custom Settings:**
- Sales Order creation primarily via WhatsApp chatbot (not web form)
- Duplicate PO detection: Customer Name + PO Number match → blocked
- Inactive customer notification: no orders in 60 days from last invoice date

### Finance / Approval Workspace

- Role-specific approval before DO creation
- Manual credit limit and credit term checks (A1); automated in A2
- Pricing deviation checks enforced in A2

### Logistics / Supply Chain Workspace

- Delivery Order and Picking List generation via WhatsApp chatbot
- Delivery type auto-classification: Local vs. Outstation based on postcode
- Outstation transporter DOs (e.g., Tiong Nam) recorded in MAIA for traceability

## Document Settings

### Sales Orders
- **Numbering Format:** [TBC with Holsen]
- **Approval Workflow:** Finance team approves before DO creation
- **Default Payment Terms:** [TBC]

### Invoices
- **Tax Configuration:** A57 tax exemption enforcement — post-go-live
- **eInvoice attachment:** Configured (completed 2026-03-17)

### Delivery Orders (DOs)
- Includes customer-specific requirements: COA type, label/brand, copy count
- C3 permit attachment — post-go-live (A3)

## SKU Classification Tags

| Tag | Description | Downstream Action |
|-----|-------------|-------------------|
| Trading | Finished goods, pick-and-pack | Standard Logistics handling |
| Manufacturing | Requires internal processing before delivery | Logistics alert to check with Production |
| Poison / Hazardous | Controlled chemical, government-mandated transport docs | "POISON FORM REQUIRED" alert |
| Commodity | Market-dependent pricing | Sales prompted to manually confirm price |
| COA Required | Certificate of Analysis must accompany delivery | COA auto-attached to DO |

## Customer Requirement Flags (Customer Master)

Per customer profile, MAIA surfaces:
- COA requirement (Yes / No) and type (Standard / Detailed / Blinded)
- Label requirements
- Preferred brand (NO SUBSTITUTION or specified brand)
- DO/Invoice copies required
- Delivery and packing instructions
- C3 eligibility (post-go-live)
- C1 certificate status and expiry (post-go-live)

## Integration Points

| System | Integration Type | Status |
|--------|-----------------|--------|
| UBS (accounting) | CSV export (manual bulk upload) | Active (A1) |
| WhatsApp (Meta) | Chatbot channel | Post-UAT (Meta account setup pending) |
| Telegram | Chatbot channel (UAT only) | Active (@maia_holsen_bot) |
| SQL / Autocount | Direct API/connector | Planned post-A1 |

**See:** [[08 - Configuration & Integrations/Integrations Index]]

## Permissions & Roles

**See:** [[03 - Clients/Holsen/Role Permission/MAIA_Role_Permission_Holsen_Completed]]

## Known Limitations for Holsen

- Cannot create multiple credit notes per invoice (standard MAIA limitation)
- UBS CSV export is manual (no direct API in A1)
- C1/C3 compliance not enforced until A3 phase (post go-live)
- A57 tax exemption not enforced at go-live

**See:** [[01 - MAIA Product/Overview/Known Limitations]]

## Change History

| Date | Change | Changed By |
|------|--------|------------|
| 2026-03-24 | Initial config overlay created | Gareth |

---

**See Also:**
- [[03 - Clients/Holsen/Client Overview]]
- [[03 - Clients/Holsen/Product/SOW for MAIA Holsen]]
- [[03 - Clients/Holsen/Product/Working Holsen]]
- [[08 - Configuration & Integrations/Configuration Index]]
