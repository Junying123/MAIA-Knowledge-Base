---
owner: Gareth
status: draft
last_reviewed: 2026-04-24
lark_url:
---

# HG Group — Quotation Module Proposal

## Overview

This document proposes the Quotation module design for HG Services (M) Sdn Bhd, built directly from what Lee (Black) described in the 23 April 2026 RG session. The design has one goal: **eliminate the 10–15 minute wait where the entire quotation team sits idle waiting for Black to relay measurements and rate confirmation.**

> *"Wait for black right? But hoarding one is almost like waiting — everything, standby for you basically."*
> — RG Transcript, 23 April 2026

The formula is already preset. The rates are already known. The only missing piece is a system that holds them so anyone on the team can produce a correct quote without Black in the loop.

---

## Pre-Quotation: Enquiry Intake & CRM

> The CRM layer — Lead → Prospect → Customer — is documented separately.
> See [[HG Group - CRM & Enquiry Intake Proposal]].

The Quotation module picks up **after** a Lead has been qualified as a Prospect and the job scope is confirmed. Ivan (Tech Lead) confirmed on 24 April 2026 that the Quotation doctype is being extended to support issuing quotes to Leads and Prospects, not just registered Customers — this is a prerequisite for HG's flow.

---

## The Problem: Today's Quotation Flow

```
Inquiry → Lee's personal WhatsApp
     ↓
Lee pulls measurements from site team (separate WhatsApp group)
     ↓
Lee types in quoting group: "Please prepare quotation, PVC,
                              Panel A/B/C, height X"
     ↓
Quotation team (4–5 pax) builds quote from that message
     ↓
10–15 min wait → quote sent back to Lee
     ↓
Lee creates new WhatsApp group with client
     ↓
Quote sent as PDF into the group
     ↓
Client confirms → invoice manually reconstructed in Infotech
```

**Three root problems Lee named directly:**
1. Everything bottlenecks through him — he is the measurement relay, the rate authority, and the quote approver
2. No system record — quote lives in a chat, Infotech entry reconstructed from memory
3. Formula is in his head — *"it's already prefixed, I just need the parameters"* — but no one else can use it without him

---

## Proposed Quotation Flow (After MAIA)

```
Coordinator opens MAIA → New Quotation
     ↓
Fill Job Header (customer, lot, mall)
     ↓
Enter measurements in calculator → sqft auto-fills
     ↓
Select service items from menu → amounts auto-calculate
     ↓
Submit → PDF generated instantly
     ↓
Share PDF → send to client WhatsApp group
     ↓
Client confirms → "Convert to Sales Order" one click
     ↓
Invoice generated from SO → invoice number created
     ↓
Payment received → job released
```

10–15 minute wait collapses to under 5 minutes. Black's relay step disappears. The formula lives in the system, not in his head.

---

## Proposed Quotation Form Design

### Section 1 — Job Header

*"One client, one WhatsApp group" → becomes one Quotation record*

| Field | Type | Behaviour |
|---|---|---|
| Quotation No. | Auto | `HG-QTN-2026-NNNN` |
| Date | Date | Defaults to today |
| Valid Until | Date | Defaults to +7 days |
| Customer | Link | From Customer master — surfaces payment tag: Normal / Slow Payer / Blacklisted |
| Contact Person | Link | Auto-filled from Customer |
| Site / Lot No. | Text | Free type — e.g. *"B1-23, Pavilion KL"* |
| Mall | Link | From Mall master — pulls permit requirements |
| Site Address | Text | Auto-filled if Mall Unit database exists (Phase 2) |
| Prepared By | Link | Coordinator who built the quote |
| Remarks | Long Text | Notes Lee types in the group today — e.g. *"PVC board, overnight install"* |

---

### Section 2 — Hoarding Measurement Calculator

*"I just need the parameters — A, B, C, height — then the rate is auto-generated."*

This is the single most important feature. Today Black manually relays measurements. The calculator removes that step entirely. Sits above the line items as a collapsible section for hoarding jobs.

```
┌─────────────────────────────────────────────────────┐
│  HOARDING MEASUREMENT CALCULATOR                    │
│                                                     │
│  Panel A (left side)      [ ___ ] metres            │
│  Panel B (front facade)   [ ___ ] metres            │
│  Panel C (right side)     [ ___ ] metres            │
│  Height                   [ ___ ] metres            │
│                                                     │
│  Total perimeter: A+B+C = [auto] m                  │
│  Square metres:   [auto] m²                         │
│  Square feet:     [auto] sq ft  ← auto-fills Qty   │
│                                 in HRD-SQFT line    │
│                                                     │
│  [Clear]  [Apply to Quotation]                      │
└─────────────────────────────────────────────────────┘
```

**Formula (from Black's exact words):**
```
(Panel A + Panel B + Panel C) × Height = Square Metres
Square Metres × 10.764 = Square Feet
Square Feet × RM 1.00 = Hoarding Amount

Minimum charge: RM 800 flat
Rule: whichever is higher — calculated amount OR RM 800
```

**Phase 2 upgrade:** If the Mall Unit database has TRX Lot B1-23 already stored, A/B/C/height auto-populate from the database. No measurement relay needed at all.

---

### Section 3 — Service Line Items

*"It's a menu man. You just order whatever you want."*

Each service is a separate line item. Coordinator picks from the menu, enters the measurement, the amount calculates itself. All rates are preset in the Item master — no one needs to ask Black what the rate is.

#### Hoarding Line Items

| Item Code | Description | UoM | Rate | Notes |
|---|---|---|---|---|
| `HRD-SQFT` | Hoarding — PVC Board | sq ft | RM 1.00 | Qty auto-filled from calculator |
| `HRD-SQFT-MDF` | Hoarding — MDF Board | sq ft | RM [X] | Select material variant |
| `HRD-DOOR-SS` | Door — Single Swing | unit | RM [X] | |
| `HRD-DOOR-DS` | Door — Double Swing | unit | RM [X] | |
| `HRD-DOOR-SLD` | Door — Sliding | unit | RM [X] | |
| `HRD-CWT` | Counterweight | metre | RM [X] | Based on hoarding side length |
| `HRD-SKT` | Skirting | sq ft | RM [X] | |
| `HRD-VIS` | Visual / Tarpaulin Wrap | sq ft | RM [X] | |
| `HRD-DSM` | Dismantling | sq ft | RM 1.00 | Same rate as install |

> **Minimum charge warning:** System shows a warning if Hoarding subtotal < RM 800. Coordinator adjusts manually to RM 800 if triggered. Phase 1.5: auto-enforce the minimum.

#### Scaffold Line Items

| Item Code | Description | UoM | Rate | Notes |
|---|---|---|---|---|
| `SCF-5M-WK` | Scaffold — below 5m | week | RM [X] | Per structure per week |
| `SCF-10M-WK` | Scaffold — 5–10m | week | RM [X] | Per structure per week |
| `SCF-10P-WK` | Scaffold — above 10m | week | RM [X] | Per structure per week |
| `SCF-GT` | Scaffold with Green Tag (JKKP) | job | RM [X] | Package — includes JKKP endorsement |

#### Reinstatement Line Items

| Item Code | Description | UoM | Rate | Notes |
|---|---|---|---|---|
| `RST-LM` | Reinstatement | linear metre | RM [X] | |
| `RST-INS` | Insurance (reinstatement package) | job | RM [X] | Flat rate — included in package |
| `RST-3P-SPK` | Sprinkler — by panel contractor | job | By others | Third-party — informational only |
| `RST-3P-LPG` | LPG disconnection — by panel contractor | job | By others | Third-party — informational only |

#### Lorry & Rorobin Line Items

| Item Code | Description | UoM | Rate | Notes |
|---|---|---|---|---|
| `LRY-3T` | Lorry — 3-tonne | trip | RM [X] | KL/Selangor |
| `LRY-5T` | Lorry — 5-tonne | trip | RM [X] | KL/Selangor |
| `LRY-OUT` | Lorry — outstation | trip | RM [X] | Different rate — confirm with Black |
| `RRB-SM` | Rorobin bin — small (6'×12'×2') | unit | RM [X] | Heavy debris |
| `RRB-MD` | Rorobin bin — medium (6'×12'×4') | unit | RM [X] | |
| `RRB-LG` | Rorobin bin — large (6'×12'×5') | unit | RM [X] | Light debris |

#### Temporary Storage Line Items

| Item Code | Description | UoM | Rate | Notes |
|---|---|---|---|---|
| `STG-WK` | Temporary Storage | week | RM [X] | |
| `STG-DAY` | Temporary Storage | day | RM [X] | |
| `STG-MTH` | Temporary Storage | month | RM [X] | |

#### Reinstatement Add-Ons

| Item Code | Description | UoM | Rate | Notes |
|---|---|---|---|---|
| `LPG-M` | LPG gas dismantling | metre | RM [X] | Approx RM 1,500 for 1m — confirm |
| `FLS-FT` | Floor trap flushing | floor trap | RM [X] | Per trap |

#### Printing & Visual Line Items

| Item Code | Description | UoM | Rate | Notes |
|---|---|---|---|---|
| `PRT-ECO` | Printing — eco-solvent (indoor) | sq ft | RM [X] | |
| `PRT-UV` | Printing — UV-cured (outdoor) | sq ft | RM [X] | Scratch-resistant |
| `PRT-TARP` | Printing — tarpaulin canvas | sq ft | RM [X] | |
| `PRT-GLASS` | Glass / window sticker | sq ft | RM [X] | |
| `PRT-FROST` | Frosted sticker | sq ft | RM [X] | |

#### Fit-Out Support Line Items

| Item Code | Description | UoM | Rate | Notes |
|---|---|---|---|---|
| `FIT-PTG` | Painting | sq ft | RM [X] | |
| `FIT-TIL` | Tiling | sq ft | RM [X] | |
| `FIT-PTN` | Partition wall | linear metre | RM [X] | |
| `FIT-SCR` | Cement screeding | sq ft | RM [X] | |
| `FIT-WPF` | Waterproofing | sq ft | RM [X] | |

> **Third-party items (sprinkler, M&E):** Listed in quotation as informational line items so the client sees full scope. Marked *"By Others / Third Party Panel"* with RM 0.00 or estimated amount in Remarks. This matches what Black said: *"we need to let them know — either it's a full quotation under the reinstatement, or hey sprinkler — they will do because there is a third party panel contractor."*

---

### Section 4 — Summary & Payment

*"No invoice number, no valid job. Payment must come in first."*

| Field | Value |
|---|---|
| Subtotal | Auto-calculated from all line items |
| Minimum charge check | Warning if hoarding subtotal < RM 800 |
| Additional charges | Manual — express surcharge, weekend rate, etc. |
| Grand Total | Auto |
| Payment Terms | Defaults to CIA (Cash in Advance) — matches HG's hard rule |
| Due Date | Defaults to today — payment before job starts |

---

### Section 5 — Quote Actions

*"Once it's sent out, within 10–15 minutes I get it back. Then I create a group chat."*

Today that sequence is: type in chat → coordinator builds in Infotech → PDF back → Lee shares to new group.

With MAIA the sequence becomes:

```
Coordinator opens MAIA → New Quotation
     ↓
Fill Job Header (customer, lot, mall)
     ↓
Enter measurements in calculator → sqft auto-fills
     ↓
Select service items from menu → amounts auto-calculate
     ↓
Submit → PDF generated instantly
     ↓
Share PDF link or download → send to client WhatsApp group
     ↓
Client confirms → "Convert to Sales Order" one click
     ↓
Invoice generated from SO → invoice number created
     ↓
Payment received → job released
```

**10–15 minute wait collapses to under 5 minutes. Black's relay step disappears entirely. The formula is in the system, not in his head.**

#### Action Buttons on the Quotation

| Action | When | What Happens |
|---|---|---|
| **Submit** | Quote is ready | Locks the doc, generates PDF, sets status to *Submitted* |
| **Share PDF** | After submit | Downloads PDF or copies shareable link — coordinator pastes into client WhatsApp group |
| **Convert to Sales Order** | Client verbally confirms | One-click conversion — all line items and amounts carry over, no re-entry |
| **Create Invoice** | From the Sales Order | Invoice generated automatically — invoice number issued |
| **Mark Payment Received** | Payment confirmed | Job released — triggers Job Work Order / scheduling |
| **Cancel** | Client doesn't proceed | Cancels with a reason note — original quote archived |
| **Amend** | Client requests changes | Creates amended version — original version preserved for audit trail |

#### Status Flow

```
Draft → Submitted → [Sent to Client] → Converted to SO → [SO] → Invoice → Paid → Job Released
                  ↘ Cancelled (client didn't proceed)
                  ↘ Amended (client requested changes)
```

> **Key rule — no invoice number, no job:**
> MAIA enforces the conversion sequence. A job cannot enter scheduling without an invoice number. An invoice number only exists once the SO is converted. CIA payment terms mean the receipt must be confirmed before any expenses are approved. This mirrors exactly what Black described: *"I want to tighten the process — no invoice number means it's not a valid job."*

---

## What the Client PDF Looks Like

The quote goes to the client's WhatsApp group as a branded PDF. Based on HG's current practice:

```
HG Services (M) Sdn Bhd
CIDB Grade G7 | Titan Hoarding System Authorised Distributor

Quotation No:  HG-QTN-2026-0284
Date:          24 April 2026
Valid Until:   1 May 2026

Client:        ABC Retail Sdn Bhd
Contact:       Mr Tan Wei Ming
Site:          Lot B1-23, Pavilion KL
Prepared by:   Sarah (Commercial Team)

─────────────────────────────────────────────────────────
No.  Description                       Qty      Rate    Amount
─────────────────────────────────────────────────────────
1.   Hoarding — PVC Board           1,250 sqft  RM1.00  RM1,250.00
2.   Door — Double Swing                2 units  RM[X]   RM[X]
3.   Counterweight                    8.4 m     RM[X]   RM[X]
4.   Visual / Tarpaulin Wrap        1,250 sqft  RM[X]   RM[X]
5.   Dismantling                    1,250 sqft  RM1.00  RM1,250.00
─────────────────────────────────────────────────────────
                                   Subtotal:           RM[total]
                                   Grand Total:        RM[total]

Payment Terms:  Cash in Advance
Due Date:       Upon confirmation

Note: Full payment required before job commencement.
      Invoice number must be issued before any expenses are released.

Third-party works (not included above — by panel contractors):
- Sprinkler dismantling: [Contractor Name] — est. RM[X]
- LPG disconnection: M&E panel — est. RM[X]
─────────────────────────────────────────────────────────
```

---

## Rate Card — What Still Needs Black's Input

> *"I can prepare all those descriptions, calculation, formula — this actually shouldn't be an issue."*
> — Lee, RG Transcript

Black confirmed he can provide the full rate card. The following items need a dedicated documentation session before the Quotation module can be configured:

| Service | Status from Transcript | Action |
|---|---|---|
| Hoarding rate per sqft | ✅ Confirmed — RM1/sqft, min RM800 | Ready to configure |
| Hoarding minimum flat rate | ✅ Confirmed — RM800 | Ready to configure |
| Hoarding dismantling rate | ✅ Confirmed — RM1/sqft or RM800 min | Ready to configure |
| Door rates (SS / DS / sliding) | ❌ Not stated | Ask Black |
| Counterweight rate per metre | ❌ Not stated | Ask Black |
| Skirting rate per sqft | ❌ Not stated | Ask Black |
| Visual / tarpaulin rate per sqft | ❌ Not stated | Ask Black |
| Scaffold rates by height tier, per week | ❌ Partially — "below 5m, one week" mentioned | Ask Black for full tier table |
| Reinstatement rate per linear metre | ❌ Not stated | Ask Black |
| Lorry rates (3T, 5T, outstation) | ❌ Not stated | Ask Black |
| Rorobin bin rates | ❌ Not stated | Ask Black |
| Temporary storage (week/day/month) | ❌ Not stated | Ask Black |
| LPG per metre | ⚠️ Mentioned ~RM1,500 for 1m — not confirmed | Verify with Black |
| Floor trap flushing per trap | ❌ Not stated | Ask Black |
| Printing rates (eco-solvent / UV / tarpaulin) | ❌ Not stated | Ask Black |
| Fit-out rates (painting, tiling, partition) | ❌ Not stated | Ask Black — lower priority |

**Recommended next step:** One 60-minute documentation session with Black where he goes service by service and confirms: description, calculation formula, rate per UoM, any minimums or special conditions. He said he can generate a step-by-step process doc using Claude — offer to co-run this with him.

---

## Phase 2 Upgrade — Mall Unit Measurement Database

> *"I can create a Google Sheets which is every measurement, every pricing from the unit number... right now even to tabulate one mall is talking about 300 plus units. I have for TRX right now."*
> — Lee, RG Transcript

Once Phase 1 is stable, the Mall Unit database becomes the next quotation upgrade:

**Custom Doctype: Mall Unit**

| Field | Type |
|---|---|
| Mall | Link (Mall master) |
| Unit / Lot No. | Text — e.g. *"B1-23"* |
| Floor | Text |
| Zone | Text |
| Panel A — left (metres) | Decimal |
| Panel B — front (metres) | Decimal |
| Panel C — right (metres) | Decimal |
| Height (metres) | Decimal |
| Total sq ft | Auto-calculated |
| Last verified date | Date |
| Verified by | Link (Employee) |
| Notes | Text |

**How it connects to the Quotation:**
1. Coordinator selects Mall + Lot No. in the Job Header
2. System looks up Mall Unit table — finds matching record
3. A/B/C/Height auto-populate in the Measurement Calculator
4. Sqft auto-calculates → auto-fills hoarding line item Qty
5. Rate applies → Amount calculated
6. Entire hoarding quote done in under 2 minutes with zero measurement relay

HG already has TRX measurements being collected. That becomes the seed data for this database. Every job HG does adds a verified measurement to the table.

---

## See Also

- [[HG Group - CRM & Enquiry Intake Proposal]]
- [[Customer Narrative - HG Group]]
- [[HG Group - Customer Profile]]
- [[HG Group - RG Questionnaire]]
