---
owner: Gareth
status: draft
last_reviewed: 2026-04-25
lark_url:
---

# HG Group — CRM & Enquiry Intake Proposal

## Overview

Before any quotation is issued, HG needs a way to capture and track inbound enquiries from people who are not yet registered customers. This document proposes the CRM layer — Lead → Prospect → Customer — that sits upstream of the Quotation module.

This is also a confirmed MAIA platform gap that Ivan (Tech Lead) flagged at the 24 April 2026 daily standup and is actively being fixed.

---

## Does HG Need a CRM Layer?

**Short answer: Yes.**

> *"On the quotation side, right now we can only issue quotations to customers. But actually, a lot of the main reason why a lot of systems don't have quotation modules is because normally you will issue quotations to people who are not your customers. So in a way, you would issue quotations to leads and prospects — which is not yet a customer."*
> — Ivan, Daily Standup, 24 April 2026

> *"Customer is someone who is registered already. In B2B businesses, if I'm offering certain credit terms or certain payment terms or certain special pricing, I will need you to go through a registration process with me first. There's a business process where they will go to your SSM, pull your audit report — that's why not everybody can create a customer."*
> — Ivan, Daily Standup, 24 April 2026

Ivan confirmed he's already working on a back-end fix: **the Quotation doctype will be extended to support Leads and Prospects**, not just registered Customers. This directly applies to HG's enquiry-to-quote flow.

---

## HG's Enquiry Reality

HG's inquiries come in three channels today:
1. **Lee's personal WhatsApp** — direct from mall coordinators or repeat clients
2. **Wati (planned)** — WhatsApp Business API for inbound routing
3. **Self-built chatbot (planned)** — routes inquiry to the right team member

At point of first enquiry, the caller is often **not yet a registered customer** — they want a price first. Only after they accept the quote and confirm the order does the relationship formalise.

This is exactly the Lead → Prospect → Customer pipeline Ivan described.

---

## Proposed Enquiry-to-Customer Flow

```
Inbound enquiry (WhatsApp / Wati / call)
     ↓
Create Lead in MAIA
  - Name / company
  - Contact number
  - Enquiry type (Hoarding / Scaffold / Reinstatement / Lorry / Printing)
  - Site / Mall (optional at this stage)
  - Source (WhatsApp / referral / walk-in)
     ↓
Qualify → convert to Prospect
  - Confirm job scope
  - Confirm site details
  - Get measurements (or note: "to measure")
     ↓
Issue Quotation to Prospect (Ivan's upcoming fix)
  - Uses the Quotation form with calculator + menu
  - No need to register as Customer yet
     ↓
Client confirms quote
     ↓
Convert Prospect → Customer (registration step)
  - SSM number, business name, billing address
  - Payment terms assigned (default: CIA for HG)
  - Credit limit set (if applicable — most HG clients are CIA)
     ↓
Convert Quotation → Sales Order
     ↓
Invoice → Payment → Job Released
```

---

## Lead & Prospect Fields for HG

| Field | Type | Notes |
|---|---|---|
| Lead Name | Text | Contact person's name |
| Company / Client | Text | Free text at this stage |
| Phone | Phone | WhatsApp number — primary |
| Enquiry Type | Select | Hoarding / Scaffold / Reinstatement / Lorry / Printing / Other |
| Mall / Site | Text | Optional — fill when known |
| Source | Select | WhatsApp / Referral / Walk-in / Wati / Chatbot |
| Assigned To | Link | Coordinator handling this lead |
| Status | Select | New → Qualifying → Quoted → Won → Lost |
| Remarks | Long Text | Notes from the first call |
| Lost Reason | Select | Price / Timing / Competitor / Client unresponsive |

> **Why track Lost Reason?** Black mentioned that some jobs don't proceed because clients don't understand the pricing or scope. Tracking loss reasons gives HG data to improve their quotation process and identify where they're losing on price vs. other factors.

---

## Lead → Prospect → Customer: Conversion Rules

This mirrors Ivan's description of how MAIA will enforce the business process:

| Stage | What it means | Who can create |
|---|---|---|
| **Lead** | First contact — just a name and enquiry | Any coordinator |
| **Prospect** | Qualified — scope confirmed, quotation can be issued | Any coordinator |
| **Customer** | Registered — KYC done, credit terms set | Finance / Admin only |

> **Ivan's key rule:** When a coordinator tries to convert a Quotation to a Sales Order, MAIA checks whether the Prospect is a registered Customer. If not, it prompts: *"Convert to Customer first."* For HG, most clients are CIA — the Customer registration is a quick step (just SSM + billing address), but it still needs to happen before a Sales Order is created.

---

## Wati Integration (Phase 2)

HG plans to use Wati for WhatsApp Business. When connected:

```
Client messages HG WhatsApp number
     ↓
Wati chatbot routes to correct coordinator
     ↓
Coordinator opens MAIA → new Lead auto-created from Wati contact
     ↓
Lead pre-filled with: name, phone, first message
     ↓
Coordinator qualifies → creates Quotation
```

This completes the full loop: no inquiry is missed, every WhatsApp conversation has a MAIA record.

---

## ⚠️ Important Nuance: Does HG Actually Have "Leads"?

> This is a design consideration flagged during analysis — not yet validated with the client.

The Lead → Prospect → Customer pipeline above is borrowed from standard B2B CRM thinking. **HG's actual acquisition model is panel-first, not prospecting-first.** The standard funnel may not map cleanly to how most of their work actually arrives.

### HG's Three Enquiry Channels — Honest Assessment

| Channel | Volume | Lead/Prospect Stage Needed? | Reality |
|---|---|---|---|
| **Panel mall referral** (Pavilion, KLCC, TRX, IOI, Subang Parade, ICC) | Majority | No | Mall management *directs* tenants to HG. By the time they call, they're already using HG. No selection happening — engagement is mandatory. Goes straight to Enquiry → Quotation. |
| **Repeat clients** (retail chains, main contractors) | Significant | No | Existing customers calling again. No lead qualification needed — goes straight to "what service, which mall, when?" → Quotation. |
| **Google Ads / website / referrals** | Minority | Yes | The only genuinely cold inbound channel. Someone found HG and may be comparing options. Short cycle — HG's pricing and turnaround tend to convert fast. This is the only true "lead" scenario. |

### What This Means for CRM Design

- The concept of **nurturing a lead over multiple touchpoints** doesn't apply to HG's panel business. There is no sales cycle for a tenant who has been sent to HG by Pavilion mall management.
- For **repeat clients and panel referrals**, the CRM value is not lead tracking — it's **client history, job history, and payment behaviour** surfacing at the start of each new enquiry.
- For **new inbound (Ads/website)**, a lightweight lead capture makes sense — but even here the cycle is short (quote within 2 hours per HG's own website promise).

### Recommended Adjustment

Rather than a full Lead → Prospect → Customer pipeline for all enquiries, consider a **two-path model**:

```
Inbound enquiry
     ↓
Is this a new contact or a known client?
     ├── Known (panel referral / repeat) → skip to Enquiry → Quotation
     │   CRM value: surfaces full history immediately
     └── New (website / Ads / cold referral) → create Lead → qualify → Quotation
         CRM value: tracks conversion from first contact
```

This keeps the process lightweight for the 80%+ of HG's volume that is panel/repeat, while capturing new business properly through a lead stage.

> **Action:** Validate with Black — "For jobs that come through panel malls like Pavilion or TRX, do you ever need to qualify those clients before quoting, or do you go straight to the quote?" This will confirm whether the full Lead stage is needed or if panel referrals bypass it entirely.

---

## Platform Gap Status

| Item | Status |
|---|---|
| Issue Quotation to Lead / Prospect | 🔴 Gap — Ivan fixing back end (identified 23 Apr 2026) |
| Lead doctype | 🟡 Exists in MAIA — needs HG-specific field config |
| Prospect doctype | 🟡 Exists in MAIA — needs HG-specific field config |
| Prospect → Customer conversion | 🟡 Exists — needs permission enforcement for HG |
| Wati → Lead auto-create | 🔴 Phase 2 — requires Wati webhook integration |

---

## See Also

- [[HG Group - Quotation Module Proposal]]
- [[Customer Narrative - HG Group]]
- [[HG Group - Customer Profile]]
