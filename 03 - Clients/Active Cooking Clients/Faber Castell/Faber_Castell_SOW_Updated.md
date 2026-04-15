---
owner: Gareth
status: approved
last_reviewed: 2026-04-15
lark_url: https://eg69120xnei.sg.larksuite.com/wiki/JXNNwh9Hgi2NMUktD7WlzjdDgR3
last_modified: 2026-02-10
---

# SOW for Faber Castell - Updated

**Effective Date:** 2nd February 2025

**Between:** Mindhive Sdn Bhd ("Mindhive") — 7, Jln Penyajak U1/45A, Hicom-glenmarie Industrial Park, 40150 Shah Alam, Selangor

**And:** A.W. Faber-Castell (M) Sdn. Bhd. ("Faber Castell") — 9, Jalan TP 2, Taman Perindustrian UEP, 47600 Subang Jaya, Selangor

---

## Executive Summary

Faber-Castell currently processes orders across multiple channels, with credit evaluation occurring after orders are created in SAP. This post-facto approach creates operational friction, delayed visibility, and unnecessary revenue blockage.

This SOW defines a phased implementation of MAIA that introduces:
- Upstream credit enforcement
- Structured order intake (starting with Customer Support)
- Real-time operational visibility
- Automated retry and alerting mechanisms

---

## Phased Delivery

### Phase 01 — Credit Control Foundation + Order Channels → MForce (6–10 weeks)

**Core Capabilities:**
- SAP Data Ingestion (Credit Limit, Credit Term/Aging, Customer Master, SKU Master, Customer-Specific Pricing)
- Commercial Rule Checks (Key Account pricing, Export Customer minimum order value)
- Credit Evaluation Engine (Credit Limit + Credit Term/Aging — strict dual enforcement)
- Hold States, Auto-Retry, and Finance Override
- PO Expiry Visibility
- Alerts & Notifications (WhatsApp/Email/MS Teams)
- Operational Workspace

**Order Intake Channels:**
1. Customer Support (CS) — WhatsApp Chatbot + Sales Agent Workspace
2. Sales Representatives — WhatsApp Chatbot or Sales Workspace
3. Direct Orders — structured email, file drop, internal export, or API feed

**Flow:** Order → MForce MOQ Processing → Credit Gate → SAP (SFTP Export)

**Key Rules:**
- Even if credit limit available, orders blocked if any overdue exceeds allowed credit period
- Finance can override Credit Limit holds but NOT Credit Term/Aging or PO Expired holds
- Auto-retry on daily basis + every new SAP credit upload cycle

### Phase 02 — B2B Orders → Credit Gate → MForce (5–9 weeks)

- B2B orders continue created/processed in SAP
- MAIA pulls B2B orders via shared folder for credit evaluation only
- MAIA does NOT export B2B orders back to SAP or MForce
- Only flags credit failures and notifies Sales/Finance

**Additional Phase 02:**
- CRM Workspace + Chatbot (KYC intake, Credit Control approval, customer onboarding)

---

## Commercial Structure

### One-off Development Cost

| Phase | Scope | Fee Allocation | Amount (RM) |
|-------|-------|---------------|-------------|
| Phase 01 | Credit Control + Order Channels | 75% | RM 135,000 |
| Phase 02 | B2B Orders Credit Gate | 25% | RM 45,000 |
| **Grand Total** | | **100%** | ~~RM 180,000~~ **RM 120,000** |

- AWS subsidization of RM 120,000 subject to approval
- Further rebate of RM 60,000 upon successful AWS subsidization claim

### Payment Terms

| Milestone | Percentage | Initial Price | Subsidized Price |
|-----------|-----------|--------------|-----------------|
| M0 – Contract Signing (Advance) | 50% | ~~RM 96,000~~ | **RM 60,000** |
| M1 – Phase 01 Completion & Acceptance | 50% | ~~RM 84,000~~ | **RM 60,000** |
| M2 – Phase 02 Completion & Acceptance | - | ~~RM 60,000~~ | AWS Subsidy Sign Off |
| **Grand Total** | **100%** | ~~RM 240,000~~ | **RM 120,000** |

### Monthly Maintenance: RM 2,500
- 3 man-day support: RM 1,500 (document accuracy, item mapping, reconciliation, MForce integration)
- Infrastructure management: RM 1,000

### Estimated 3rd Party Costs: ~RM 1,250/month
- AWS Hosting: RM 750–1,000
- WhatsApp Business: RM 39.60 (20 users)
- AI (OpenAI): RM 415 (4,000 orders/month assumption)
- Other AI Processing: RM 50

---

## SLAs

### Mindhive Commitments
- **System Availability:** 99.5% uptime
- **Critical (P1):** Within 2 hours
- **High (P2):** Within 8 hours
- **Normal (P3):** Within 2 business days
- **Lifetime Upgrades & Support**

### Faber Castell Commitments
- Respond within 3 business days
- Timely data uploads (Credit Limit, Credit Term/Aging, Customer Master, SKU Master)
- Designate primary POC

---

## Order Volume Assumptions (~4,080 orders/month)
- Sales Rep: 35% (1,400/month)
- Direct Order: 48% (1,920/month)
- Customer Service: 13% (520/month)
- B2B Orders: 6% (240/month)

---

## Signed
- **Mindhive:** Johnson Goh, CEO — 2nd February 2026
- **Faber Castell:** (pending signature)
