---
owner: Gareth
status: draft
last_reviewed: 2026-08-03
client: Holsen
---

# HOLSEN INTERCHEM SDN. BHD.
# MAIA — UAT Acceptance & Sign-Off Checklist

**Purpose.** This checklist records User Acceptance Testing sign-off for the MAIA implementation at Holsen Interchem Sdn. Bhd., against the signed SOW effective 10 December 2025 and Holsen's current, client-confirmed operating model (corrected 2026-08-03). Section 4 is completed by circling Pass or Fail for each item during the in-person UAT session. The signed and annotated copy serves as the acceptance record. Where the SOW and Holsen's current operating model differ, the current operating model prevails for acceptance; this checklist does not expand the signed commercial scope. This round tests items marked **LOCKED** or **LOCKED (SUPERSEDED)** in the Holsen Scope Lock v2 only — items still AGREED IN PRINCIPLE or NEEDS SCOPING are out of this round's acceptance scope (Section 3).

---

## 1. Parties & Agreement Reference

| | |
|-|-|
| SOW effective date | 10 December 2025 |
| Service provider | AutorunBiz PLT (Mindhive delivery team) |
| Client | Holsen Interchem Sdn. Bhd. (Reg. 0181344H / 198901004037) |
| Client address | No.16, Jalan Anggerik Mokara 31/44, Kota Kemuning, Seksyen 31, 40460 Shah Alam, Selangor Darul Ehsan, Malaysia |
| System | MAIA — order-to-cash chatbot and workspace covering Sales, Logistics, and Finance, sitting alongside Holsen's UBS accounting system during transition to SQL Accounting on-prem |
| UAT sign-off date | [TO FILL] |

---

## 2. MAIA Scope for Holsen

Holsen is a B2B industrial chemical distribution and surface treatment company running high transaction volumes (~70–90 customer POs daily) across trading, manufacturing, and controlled/regulated chemical products. The table below states how MAIA supports that model and is the basis for the checklist that follows.

| Area | How MAIA supports Holsen |
|-|-|
| Operations focus | Order intake, Sales Order creation, batch-linked picking, Delivery Note, Invoice, and C1/C3 tax-compliance enforcement. UBS/SQL remains the accounting system of record; MAIA feeds it, not the reverse. |
| Conversational input | Salesman uploads the customer PO into MAIA via chatbot — WhatsApp at go-live, Telegram (`@maia_holsen_bot`) for UAT — as text, photo, or PDF. |
| Order flow | Salesman uploads PO → MAIA drafts the Sales Order → Salesman reviews/confirms price → **Logistics checks and submits the SO** (not Sales, not Finance) → Logistics assigns batch on the SO (indicative) → converts SO to Pick List → **binding batch selection happens on the Pick List** → Warehouse picks and uploads quantity → Logistics creates the Delivery Note → Finance creates the Invoice. |
| Pricing & tax defaults | Trading items default to price RM0 (manual entry, unless a customer-specific price exists) and 0% SST; Manufacturing items default to 10% SST — separate from C1/C3 certificate exemptions. |
| C1/C3 compliance | Certificates (C1 perpetual manufacturer exemption, C3 per-order import-on-behalf exemption) are created/uploaded, linked to the customer, applied to the SO, checked against tariff (HS) code, and block submission if an item isn't covered. |
| Delivery | Holsen has no delivery fleet — all deliveries go via third-party transporters (Menaka local; GMax, Tiong Nam Logistics outstation). |
| Roles | Sales (Tam Ze Xin, Ng Tze Chien), Logistics (Noor Aili Nafiah — Logistics; Intan Atikah — Procurement; Murugesu A/L Palanivello — Production), Finance (Wong Shui Fern), Admin (Ong Siow Chui), System Admin (Tam Ze Xin, Chin Zhao Heng — full access). |
| Confirmation before posting | Any document that commits stock, price, or credit exposure requires explicit user submission — no silent auto-posting. |

---

## 3. Scope Boundaries

In scope: the capabilities listed in Section 2 and demonstrated in the Section 4 checklist, per Holsen Scope Lock v2 items marked **LOCKED** or **LOCKED (SUPERSEDED)**.
Out of scope (this UAT round): the items below.

| Out of scope this round | Treatment |
|-|-|
| Batch allocation lock across mixed-C3-exemption customers | **Confirmed unbuilt, deferred to next phase (A3)** — client-flagged as the most critical open item in that phase, but not part of this round's acceptance. Do not test; do not log its absence as a bug. (Scope Lock `SL-30`) |
| Salesperson performance dashboard (volume-based) | Direction agreed, build detail (unit, period, visibility) not yet defined — observe only if encountered, not a pass/fail item this round. (`SL-41`) |
| Role-based dashboard widgets | Underlying permission matrix is locked (`SL-16`), but per-role dashboard widget content is not — do not test as pass/fail. (`SL-11`) |
| SQL migration / API integration | Migration to SQL Accounting on-prem starts ~August 2026; sync mechanics not yet built or testable. (`SL-12`) |
| Credit-limit approval workflow | Built but not yet switched on — needs Tam Ze Xin's sign-off before enabling. Not tested this round. (`SL-38`) |
| Finance-approval-before-DN gate | Config Overlay describes this step; the current confirmed flow has Logistics submitting the SO directly. Whether a Finance/credit check happens elsewhere is unresolved — do not test as if the gate exists. (`SL-36`) |
| Low/out-of-stock alerts | Non-blocking, to be tested separately — not part of this round's pass/fail scope. (`SL-13`) |
| COA / K1 masking or structured fields | Interim decision: both handled as plain attachments at doctype level for now — do not test for structured masking logic, which isn't built. (`SL-8`, `SL-9`) |

---

## 4. Functional Acceptance Checklist

**How to complete.** During the in-person UAT session, circle Pass or Fail in the Result column for each item. Items marked Fail are recorded as open/deferred items in the Section 7 declaration.

| # | Capability | What is demonstrated | Result |
|-|-|-|-|
| **A. Access & Input** | | | |
| 1 | Registered-user access | MAIA chatbot access is restricted to registered/authorised Holsen users. | Pass / Fail |
| 2 | PO upload & extraction | Salesman uploads a customer PO (text, photo, or PDF); MAIA correctly extracts customer, items, quantities, and delivery date. | Pass / Fail |
| **B. Sales Order Creation** | | | |
| 3 | Draft SO from PO | MAIA drafts a Sales Order from the uploaded PO; Salesman can review and correct extraction errors. | Pass / Fail |
| 4 | Duplicate PO check | Uploading a PO with the same customer + PO number as an existing order is blocked as a duplicate. | Pass / Fail |
| 5 | Minimum price check | Entering a price below the item's configured minimum triggers a warning/block at submission. | Pass / Fail |
| 6 | Trading item default price | A Trading-tagged item defaults to RM0 and requires manual price entry, unless a customer-specific price is already on file, in which case that price is used automatically. | Pass / Fail |
| 7 | Tax defaults by SKU tag | Trading items default to 0% SST; Manufacturing items default to 10% SST. | Pass / Fail |
| **C. Logistics — SO Check, Batch, Pick List** | | | |
| 8 | Logistics checks & submits SO | The submitted-for-fulfilment gate is Logistics reviewing and submitting the SO — not Sales, not Finance. | Pass / Fail |
| 9 | Batch entry at SO stage (indicative) | A batch number can be entered on the SO itself, but does not lock or commit stock at this stage. | Pass / Fail |
| 10 | SO → Pick List conversion | Logistics converts the submitted, batch-noted SO into a Pick List. | Pass / Fail |
| 11 | Batch selection at Pick List (binding) | The batch number selected on the Pick List is the one that actually deducts stock. | Pass / Fail |
| 12 | Pick List link notification | Warehouse staff are notified and receive a direct link to the Pick List to update picked quantity. | Pass / Fail |
| 13 | Warehouse picks & uploads quantity | Warehouse records picked quantity against the Pick List; Pick List is marked Complete once done. | Pass / Fail |
| **D. Delivery & Invoice** | | | |
| 14 | Delivery Note creation | Logistics creates the DN once the Pick List is complete; the batch number carries forward (via the Additional Notes field). | Pass / Fail |
| 15 | Third-party delivery | Delivery is dispatched via a third-party transporter (Menaka for local, GMax/Tiong Nam Logistics for outstation) — no own-fleet option is presented. | Pass / Fail |
| 16 | Invoice creation & SQL sync | Finance creates the Invoice in MAIA from the DN; the invoice syncs to SQL as the downstream accounting record. | Pass / Fail |
| 17 | Payment due date | Payment due date defaults to invoice creation date + 30 days (Net 30), not the delivery date. | Pass / Fail |
| 18 | No discount display on customer PDFs | Customer-facing DN/Invoice PDFs do not display a discount line. | Pass / Fail |
| **E. C1/C3 Tax Compliance** | | | |
| 19 | C1 certificate create + PDF upload | A C1 certificate can be created manually or by PDF upload, and links correctly to the customer. | Pass / Fail |
| 20 | Apply C1 to Sales Order | C1 certificate applies to an SO correctly for both full and partial (overlap) item coverage. | Pass / Fail |
| 21 | C3 certificate create + apply | A C3 certificate is created with PO/appointment-letter reference and applies to the relevant SO. | Pass / Fail |
| 22 | Submit-block on uncovered item | An SO line item not covered by the certificate's tariff (HS) code blocks submission until resolved. | Pass / Fail |
| 23 | Mixed C1/C3 order handling | When an order mixes certificate-covered and non-covered items, MAIA prompts to confirm/remove the ineligible items rather than silently blocking the whole order. | Pass / Fail |
| 24 | **C1/C3 at DN/Invoice stage — RETEST** | The same submit-block/confirmation-prompt pattern confirmed at SO level (items 19–23) also holds once the order reaches Delivery Note and Invoice stage. **This specific item was never successfully tested before — retest fresh this session**, now that batch mechanics (items 9–14) are clarified and no longer the blocker. | Pass / Fail |
| **F. Roles & Permissions** | | | |
| 25 | Role-based access matches confirmed matrix | Sales — read-only on SO, full rights on Quotation/PO. Logistics (Logistics) — full CRUD+submit on SO/DN/Pick List/Inventory. Logistics (Procurement) — read + submit-only on SO/DN. Finance — full CRUD+submit on Invoice/Payment/SO/DN. Admin/System Admin — full access. | Pass / Fail |
| **G. Documents & Attachments** | | | |
| 26 | COA attachment | Certificate of Analysis is attached at the doctype level (as a file), correctly linked to the relevant batch/order. | Pass / Fail |
| 27 | K1 attachment | K1 customs documentation is attached at the doctype level (as a file), correctly linked to the relevant C3 order. | Pass / Fail |

---

## 5. Acceptance Criteria

Each criterion below is accepted when demonstrated successfully during the UAT session. These criteria carry forward the LOCKED items of the Holsen Scope Lock v2.

| Acceptance criterion | Result |
|-|-|
| Orders are captured correctly from PO upload through to a reviewable draft Sales Order, with duplicate and minimum-price checks enforced | Pass / Fail |
| Batch handling operates correctly across its two touchpoints — indicative entry at SO, binding selection at Pick List — and carries forward to DN/Invoice via Additional Notes | Pass / Fail |
| Standard document flow (SO → Pick List → DN → Invoice) operates correctly, with the correct roles (Logistics for SO/DN, Finance for Invoice) owning each step | Pass / Fail |
| C1/C3 certificate enforcement works correctly at the Sales Order stage, and is successfully retested at the Delivery Note/Invoice stage this session | Pass / Fail |
| Pricing and tax defaults (Trading RM0/0%, Manufacturing 10% SST) apply correctly by SKU classification | Pass / Fail |
| Role-based permissions match the confirmed Customer Onboarding Checklist matrix | Pass / Fail |

---

## 6. Open Decisions — Not Scored This Round

**To confirm with Holsen, tracked separately from pass/fail acceptance:**

**6a. Batch allocation across mixed-exemption customers (`SL-30`).** Holsen has flagged the inability to reserve/lock a portion of a split batch to one C3-exempt customer as more critical than any other open item. Confirmed deferred to the next phase (A3) — not scored in this UAT round, but should be the top scoping priority once A3 planning begins.

**6b. Finance-approval-before-DN gate (`SL-36`).** Is a Finance/credit-limit check expected to happen anywhere before the Delivery Note is created, given Logistics now submits the SO directly? To confirm with Tam Ze Xin.

**6c. UAT signatory (`SL-40`).** No named UAT signatory has been formally confirmed for Holsen anywhere in the project record. Section 8 below proposes Tam Ze Xin (primary contact, Sales/Admin-Operations) — confirm this is correct, or name the actual authorised signatory.

Decision (to confirm in this session): 6b — [ ] Finance gate exists, describe where: __________ [ ] No gate, confirmed as-is • 6c — [ ] Tam Ze Xin confirmed as signatory [ ] Different signatory: __________

---

## 7. Acceptance Declaration

**Client acceptance statement.** By signing this checklist, Holsen Interchem Sdn. Bhd. confirms that the MAIA implementation has been demonstrated and reviewed, for the items covered in this UAT session, against the scope in Section 2 and the criteria in Sections 4 and 5.

**Pass / Fail annotation.** Items marked Pass are accepted as meeting the relevant expectation. Items marked Fail, or not yet demonstrated this round, are carried forward as open/deferred items unless both parties agree in writing to exclude them.

**Commercial note.** Holsen's remaining payment balance at Phase 1 closure (30%, not the standard 50%) is tied specifically to A3 (batch/compliance) shipping — this checklist's Section 4 items are the Phase 1/Core-MAIA acceptance record, not the A3 commercial trigger. Item 24 (C1/C3 DN/Invoice retest) and Section 6a (batch allocation) bear directly on the A3 commercial discussion.

**Evidence.** This checklist intentionally excludes internal test notes, screenshots and chat logs. The signed and annotated copy serves as the acceptance record for this round.

**Sign-off selection:**
- [ ] Accepted — all items in Section 4 marked Pass.
- [ ] Accepted with carry-forward — items demonstrated this round annotated above; remaining/failed items to be retested at a follow-up session.
- [ ] Not accepted — retest required before this round can be considered complete.

---

## 8. Authorised Signatures

| For Holsen Interchem Sdn. Bhd. | |
|-|-|
| Signature | |
| Name | Tam Ze Xin *(proposed — signatory not formally confirmed, see Section 6c)* |
| Position | Sales / Admin & Operations |
| Date | |

| For AutorunBiz PLT | |
|-|-|
| Signature | |
| Name | [TO FILL] |
| Position | [TO FILL] |
| Date | |
