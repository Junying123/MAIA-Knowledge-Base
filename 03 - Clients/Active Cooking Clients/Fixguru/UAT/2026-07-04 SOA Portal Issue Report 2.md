# SOA Portal Issue Report - Fixguru

Date: 2026-07-04
Source surface: MAIA SOA customer portal
Client context: Fixguru / JPS FASHIONS (MALAYSIA) SDN BHD / KENT PRINTING SDN BHD / AKIE GROUP
Reference spec: MAIA External SOA Portal - Secure Shareable Statement of Account

## Summary

The current SOA feature is a useful balance viewer, but it is not yet a complete customer-ready Statement of Account. The latest tracker review covers portal, Customer Profile SOA tab, activity log, public-link security, mobile baseline, PDF download behavior, and generated SOA PDF.

There are 11 consolidated issues:

- 2 Critical must-fix issue records: expired-link enforcement and portal/PDF balance mismatch, including PDF internal reconciliation mismatch.
- 7 High must-fix or near-MVP issues: statement/as-of timestamp, ledger status/due-date context, reconciliation totals, mobile baseline, activity log audit quality, PDF download URL exposure, and PDF customer-facing layout/content.
- 2 Medium Phase 2/customer-experience issues: supplier contact details and payment/next-action guidance.

The highest-risk theme is financial trust: customer-facing values must reconcile across portal summary, aging, ledger rows, PDF summary, and PDF closing balance. The second highest-risk theme is link security: expired/revoked/invalid links must not expose password prompts, customer identity, token state, balances, or document rows.

## Dev Allocation Guidance

### Must fix for MVP

These affect security, correctness, customer trust, or whether the SOA can be relied on as a financial statement.

| Priority | Issue | Why it matters |
|---|---|---|
| P0 | Expired-link enforcement | Expired links must not show password entry or data. This is security-critical. |
| P1 | Statement date / as-of timestamp | Customer must know when the balance is valid. |
| P1 | Meaningful document status | Empty status column makes the ledger feel incomplete. At minimum show `Open`, `Overdue`, `Paid`, or `Partially Paid`. |
| P1 | Reconciliation totals | Customer/Finance must be able to verify how total outstanding was calculated. |
| P1 | Mobile usability baseline | The SOA is expected to be WhatsApp/mobile-first. The current mobile view must remain readable and actionable even before full card redesign. |
| P1 | Customer Profile SOA activity log audit quality | Activity history must be useful for Finance and must not expose raw token values. |
| P1 | Download SOA PDF action exposes signed URL | Button should download/open the PDF, not render a long pre-signed S3 URL inside the customer profile. |
| P1 | SOA PDF customer-facing layout/content cleanup | PDF must not show placeholder logo or internal account labels, and should include enough invoice context for collections. |
| P0 | Portal/PDF balance mismatch and PDF internal reconciliation mismatch | Customer-facing outstanding amount must not differ between portal, PDF summary, aging, and ledger closing balance. |

## Consolidated Issue Register

| # | Severity | Surface | Issue | Linked tracker cases | MVP call |
|---|---|---|---|---|---|
| 1 | Critical | Public SOA portal | Expired SOA link shows password gate instead of expired page | `FAIL-01`, `FAIL-02` | Must fix |
| 2 | High | Public SOA portal | Missing statement date / as-of timestamp | `DATA-01`, `PORTAL-01` | Must fix |
| 3 | High | Portal ledger | Empty/weak document status and missing due date / overdue context | `DOC-01`, `DOC-02`, `DOC-03` | Must fix status; add due-date context if available |
| 4 | High | Portal/PDF data | Portal lacks reconciliation totals | `SOA-PDF-05`, `SOA-PDF-06` | Must fix |
| 5 | High | Mobile portal | Mobile SOA view is not readable/actionable enough for WhatsApp-first use | `MOB-01`, `A11Y-01` | Must fix baseline |
| 6 | Medium | Portal/PDF customer info | Supplier/company contact details are missing | `BRAND-01`, `BRAND-02` | Can defer if sending channel has reply path |
| 7 | Medium | Portal collections UX | Payment instructions / next action are missing | `PAY-01`, `PAY-02` | Can defer if invoice/message already contains payment guidance |
| 8 | High | Customer Profile activity | SOA activity log lacks audit-ready detail and older rows expose token values | `ACT-01`, `ACT-02`, `ACT-03` | Must fix raw token exposure; polish can follow |
| 9 | High | Customer Profile PDF action | Download SOA PDF renders pre-signed S3 URL inside page | `SOA-PDF-01`, `SOA-PDF-02`, `PDF-DOC-02` | Must fix |
| 10 | High | Generated SOA PDF | PDF layout/content is not fully customer-ready | `SOA-PDF-01`, `SOA-PDF-03`, `SOA-PDF-05`, `BRAND-03` | Must fix placeholder/internal fields |
| 11 | Critical | Portal/PDF data | Portal total outstanding and PDF closing balance do not match | `SOA-PDF-05`, `SOA-PDF-06` | Must fix |

## Tracker Notes Added

Default notes have also been written into the HTML tracker for these test cases:

| Test case | Note summary |
|---|---|
| `FAIL-01` | Expired link currently shows normal password gate instead of a distinct expired-link page. |
| `FAIL-02` | Revoked/invalid links must be checked to ensure they reveal no customer, token, password-gate, balance, or document detail. |
| `ACT-01` | Visible SOA activity only shows generated/accessed rows; no revoke event is visible and rows are date-only. |
| `ACT-02` | Timeline does not fully answer last sent, viewed, and active-link-validity questions. |
| `ACT-03` | Append-only behavior cannot be proven from screenshot; needs edit/delete/API permission verification. |

### Can defer / Phase 2 polish

These improve the customer experience, but they are not blockers for a minimal usable SOA if the SOA link is sent through an existing sales/finance channel.

| Priority | Item | Deferral rationale |
|---|---|---|
| P2 | Supplier/company contact details | Can defer if customers can reply to the WhatsApp/email message that carried the SOA link. |
| P2 | Payment instructions / next action | Can defer if payment instructions already exist on invoice PDFs or in the sending message. |
| P2 | Document tab counts | Useful scan aid, not core. |
| P2 | More specific PDF button copy | `PDF` is acceptable for MVP if buttons work. |
| P2 | Full mobile card layout | Ideal mobile experience, but can be Phase 2 if the MVP table is still readable, scrollable, and has reachable PDF actions. |
| P2 | Activity log copy polish | After raw token exposure is fixed, wording and display polish can be handled after MVP. |

### Minimal acceptance standard

```text
1. Expired links are blocked correctly.
2. SOA shows statement/as-of date.
3. Ledger rows show useful status.
4. SOA shows opening/debit/credit/closing totals.
5. Mobile view is readable and all core actions are reachable.
6. Customer Profile activity log does not expose raw token values.
7. Download SOA PDF opens/downloads the PDF without displaying the signed storage URL.
8. SOA PDF does not show placeholder/internal fields and remains customer-ready.
9. Portal total outstanding, PDF closing balance, PDF aging, and PDF ledger totals all reconcile to the same amount.
```

---

## Issue 1: Expired SOA link shows password gate instead of expired-link page

Category: Security
Severity: Critical
Status: Open
Surface: Portal
MVP classification: Must fix
Linked Scenario: E1 - Expired, revoked and invalid links reveal no financial data
Linked Test Case: FAIL-01 - Expired link shows distinct friendly expiry page
Owner: Backend / Frontend

### Steps to reproduce

1. Open an SOA link where `exp` is already in the past.
2. Observe the first screen shown to the customer.

### Expected result

Expired links should show a branded expired-access page before password entry.

```text
+------------------------------------------------------+
| maia                                      ordermaia  |
|                                                      |
|             This statement link has expired          |
|                                                      |
|  For your security, this Statement of Account link   |
|  is no longer active.                                |
|                                                      |
|  Please contact Fixguru to request a new link.       |
|                                                      |
|  Supplier: Fixguru                                   |
|  Customer: JPS FASHIONS (MALAYSIA) SDN BHD          |
|                                                      |
|  [Contact supplier]                                  |
|                                                      |
|  Powered by MAIA                                     |
+------------------------------------------------------+
```

Security rule:

```text
Expired token -> Expired page only
Expired token -> Do not show password field
Expired token -> Do not show SOA balances or document rows
```

### Actual result

Expired link still shows the normal password gate:

```text
View your statement
Enter the one-time password from Fixguru to open your Statement of Account.
Unlock statement
```

### Notes / evidence

This is the first critical issue. It creates customer confusion and may allow password attempts against an expired token.

Spec reference: `FR-011`

---

## Issue 2: SOA view does not show statement date / as-of timestamp

Category: Functional
Severity: High
Status: Open
Surface: Portal
MVP classification: Must fix
Linked Scenario: B2 - Portal shows live balance summary above the fold
Linked Test Case: DATA-01 - Portal computes live balance at request time
Owner: Frontend / Backend

### Steps to reproduce

1. Unlock and open the SOA view.
2. Review the summary and ledger header.

### Expected result

The SOA should clearly show when the balance is valid, near the customer identity and before the financial summary.

```text
+--------------------------------------------------------------+
| JPS FASHIONS (MALAYSIA) SDN BHD                              |
| CUST-000478                                                  |
|                                                              |
| Statement as of : 04 Jul 2026, 2:30 PM                       |
| Last updated    : Live from MAIA                             |
| Link valid until: 04 Jul 2026, 4:30 PM                       |
| Issued by       : Fixguru                                    |
+--------------------------------------------------------------+
| Total Outstanding | Overdue          | Credit Available       |
| RM 106.00         | RM 106.00        | RM 0.00                |
+--------------------------------------------------------------+
```

### Actual result

The SOA shows total outstanding, overdue, credit available, and ledger rows, but no statement date or as-of timestamp.

### Notes / evidence

Without an as-of timestamp, customers cannot know whether the balance reflects the latest payment or invoice state.

---

## Issue 3: Ledger does not show meaningful status; due date / overdue context is missing

Category: Functional
Severity: High
Status: Open
Surface: Portal
MVP classification: Must fix for status; due date / days overdue if data is available
Linked Scenario: B3 - Portal lists only submitted documents across required sections
Linked Test Case: DOC-01 / DOC-02
Owner: Frontend / Backend

### Steps to reproduce

1. Open the SOA view.
2. Review the ledger table.

### Expected result

Each invoice row should include enough collection context. For MVP, the minimum required fix is a meaningful `Status` value. Due date and overdue days should be added now if the data is already available; otherwise they can be scheduled immediately after MVP.

```text
+------------+---------------+------------+----------+-------------+------------+------------+-------------+--------------+
| Date       | Document      | Due Date   | Overdue  | Status      | Debit (RM) | Credit(RM) | Balance(RM) | Action       |
+------------+---------------+------------+----------+-------------+------------+------------+-------------+--------------+
| 29 May 26  | INV-2026-00495| 29 Jun 26  | 5 days   | Overdue     | 29.00      | -          | 29.00       | Download PDF |
| 06 Jun 26  | INV-2026-00520| 06 Jul 26  | Not due  | Open        | 77.00      | -          | 106.00      | Download PDF |
+------------+---------------+------------+----------+-------------+------------+------------+-------------+--------------+
```

Mobile/card version:

```text
+--------------------------------------------------+
| INV-2026-00495                         Overdue   |
| Invoice date: 29 May 26    Due date: 29 Jun 26   |
| Days overdue: 5 days                            |
| Debit: RM 29.00        Balance: RM 29.00        |
| [Download PDF]                                   |
+--------------------------------------------------+
```

### Actual result

Ledger shows:

```text
Date
Document
Status
Debit
Credit
Balance
PDF
```

The `Status` column appears empty, and there is no due date or days overdue.

### Notes / evidence

For minimal SOA, an empty `Status` column is the real blocker. Due date and overdue days are strongly recommended for collections, but can depend on whether the backend already exposes due-date data.

---

## Issue 4: SOA view is missing reconciliation totals

Category: Data/PDF
Severity: High
Status: Open
Surface: Portal
MVP classification: Must fix
Linked Scenario: C3 - SOA PDF reconciles summary totals and running balance
Linked Test Case: SOA-PDF-05 / SOA-PDF-06
Owner: Frontend / Backend

### Steps to reproduce

1. Open the SOA view.
2. Compare the top summary with the ledger section.

### Expected result

SOA should show a reconciliation summary that explains how the final outstanding amount was reached.

```text
+--------------------------------------------------------------+
| Reconciliation Summary                                       |
+------------------------------+-------------------------------+
| Opening balance             | RM 0.00                       |
| Total debits                | RM 106.00                     |
| Total credits               | RM 0.00                       |
+------------------------------+-------------------------------+
| Closing balance             | RM 106.00                     |
+------------------------------+-------------------------------+
```

Calculation rule:

```text
Opening balance + Total debits - Total credits = Closing balance
RM 0.00 + RM 106.00 - RM 0.00 = RM 106.00
```

### Actual result

Top cards show:

```text
Total outstanding
Overdue
Credit available
```

Ledger rows show running balance, but there is no reconciliation summary.

### Notes / evidence

Customers and finance teams need to verify how the outstanding balance is calculated. This is important for trust and dispute prevention.

---

## Issue 5: Mobile SOA view is not readable/actionable enough for WhatsApp-first use

Category: UI/UX
Severity: High
Status: Open
Surface: Portal / Mobile
MVP classification: Must fix baseline mobile usability; full card redesign can defer
Linked Scenario: E3 - Portal is fast and mobile-first in WhatsApp webview
Linked Test Case: MOB-01 - 375px viewport has no horizontal scroll
Owner: Frontend

### Steps to reproduce

1. Open the SOA view on a mobile-width screen or WhatsApp webview.
2. Review the header, customer name, summary cards, ledger, and PDF actions.

### Expected result

The mobile view should preserve the same core SOA information and actions without making the customer hunt sideways for important content.

MVP mobile baseline:

```text
+--------------------------------------------------+
| maia                         [Download SOA PDF]   |
+--------------------------------------------------+
| JPS FASHIONS (MALAYSIA) SDN BHD                   |
| CUST-000478                                       |
| Statement as of: 04 Jul 2026, 2:30 PM             |
+--------------------------------------------------+
| Total outstanding        RM 106.00                |
| Overdue                  RM 106.00                |
| Credit available         RM 0.00                  |
+--------------------------------------------------+
| Ledger                                           |
| Search documents or refs.                         |
|                                                  |
| 29 May 26  INV-2026-00495     Overdue            |
| Debit RM 29.00     Balance RM 29.00              |
| [Download PDF]                                    |
|                                                  |
| 06 Jun 26  INV-2026-00520     Open               |
| Debit RM 77.00     Balance RM 106.00             |
| [Download PDF]                                    |
+--------------------------------------------------+
```

If the full mobile card layout cannot be delivered in MVP, the fallback table must still satisfy:

```text
No clipped customer name
Summary cards readable without sideways scrolling
Ledger horizontally scrollable only inside the ledger area
PDF actions reachable on mobile
Download SOA PDF visible and usable
```

### Actual result

The current mobile view is visually clipped in the header/customer area, and the ledger is still desktop-table-first. Key PDF actions can sit far to the right inside the table.

### Notes / evidence

The SOA spec is WhatsApp/mobile-first. A full mobile card redesign can be Phase 2, but MVP must still make the customer name, totals, ledger rows, and PDF actions readable and reachable on mobile.

---

## Issue 6: SOA view does not show supplier/company contact details

Category: UI/UX
Severity: Medium
Status: Open
Surface: Portal
MVP classification: Can defer / Phase 2
Linked Scenario: C4 - PDF carries MAIA branding and ordermaia.com attribution
Linked Test Case: BRAND-01 / BRAND-02
Owner: Frontend / Product

### Steps to reproduce

1. Open the SOA view.
2. Look for issuer contact details.

### Expected result

SOA should show supplier contact details in a compact issuer block.

```text
+--------------------------------------------------------------+
| Issued by Fixguru                                            |
| Finance contact : finance@fixguru.example                    |
| Phone           : +60 xx-xxx xxxx                            |
| Address         : <registered/company billing address>       |
+--------------------------------------------------------------+
```

### Actual result

The page shows MAIA branding and `ordermaia.com`, but does not show clear supplier finance/contact details.

### Notes / evidence

When a customer has questions or wants to pay, they need to know who to contact. This can be deferred if the SOA is always sent through a sales/finance WhatsApp or email thread where the customer can reply directly.

---

## Issue 7: SOA view does not provide payment instructions or next action

Category: UI/UX
Severity: Medium
Status: Open
Surface: Portal
MVP classification: Can defer / Phase 2
Linked Scenario: F1 - Phase 1 does not process payments
Linked Test Case: PAY-01 / PAY-02
Owner: Product / Frontend

### Steps to reproduce

1. Open the SOA view with outstanding balance.
2. Review available actions.

### Expected result

If online payment is not in Phase 1, the page should still tell the customer what to do next.

```text
+--------------------------------------------------------------+
| Next step                                                    |
|                                                              |
| Amount due: RM 106.00                                       |
| Please pay using the payment instructions stated on your     |
| invoice, or contact Fixguru Finance for payment assistance.  |
|                                                              |
| [Download SOA PDF]   [Contact Finance]                       |
+--------------------------------------------------------------+
```

### Actual result

The SOA shows amount owed and PDF downloads, but no payment instructions or contact action.

### Notes / evidence

The page is currently a balance viewer. To support collections, it needs a clear next step. This can be deferred if payment instructions already exist on invoice PDFs or in the message used to send the SOA link.

---

## Issue 8: Customer Profile SOA activity log exposes token values and lacks audit-ready detail

Category: Security / Functional
Severity: High
Status: Open
Surface: Customer Profile / SOA Activity
MVP classification: Must fix raw token exposure; audit detail polish can follow
Linked Scenario: D1 - Customer Profile shows SOA Activity timeline
Linked Test Case: ACT-01 / ACT-02 / ACT-03
Owner: Frontend / Backend

### Steps to reproduce

1. Open a customer profile with SOA sharing history.
2. Go to the `SOA` tab.
3. Review the `Share activity` panel and the right-side `Activity` timeline.

### Expected result

The activity log should be audit-safe and finance-readable.

```text
+--------------------------------------------------------------------------------+
| SOA Share Activity                                                             |
+------------------+----------------------+---------------------+----------------+
| Event            | Detail               | Timestamp           | Actor          |
+------------------+----------------------+---------------------+----------------+
| Link generated   | Invoice INV-2026-00735| 04 Jul 2026 12:00 PM| MAIA/Admin     |
| Portal accessed  | Customer viewed SOA   | 04 Jul 2026 12:01 PM| Shared link    |
| Link revoked     | All active links      | 04 Jul 2026 12:05 PM| Administrator  |
+------------------+----------------------+---------------------+----------------+
```

Audit rules:

```text
Do not display raw token values.
Use consistent event wording and capitalization.
Show full timestamp, not date-only, inside SOA Share Activity.
Show source document when generated from invoice, if available.
Show actor/source for generated, accessed, revoked, and failed-access events.
Show expiry/revocation state when relevant.
```

### Actual result

The Customer Profile SOA tab shows activity, but the log is not audit-ready:

```text
SOA Portal accessed by KENT PRINTING SDN BHD via shared link
SOA Portal link generated for KENT PRINTING SDN BHD by MAIA from invoice INV-2026-00735
SOA portal accessed · token=mjq35jl82e
SOA link generated · token=mjq35jl82e · from_invoice=INV-2026-00531
```

Observed issues:

```text
Older activity entries expose raw token values.
Event wording is inconsistent: "SOA Portal" vs "SOA portal".
SOA Share Activity panel shows date-only rows, while the right Activity timeline shows exact time.
Generated/accessed events do not clearly show expiry status, revoked status, or whether access succeeded after password verification.
"Revoke all" is present, but the visible log does not clearly show a revoke audit event in the shown history.
```

### Notes / evidence

Screenshot evidence: Customer Profile for `KENT PRINTING SDN BHD`, SOA tab, Activity panel dated `Jul 4, 2026`.

This should be fixed before UAT sign-off because Customer Profile activity is the internal audit trail Finance will rely on when customers ask who generated a link, when it was opened, and whether old links remain active.

Spec reference: `FR-025`, `FR-026`, `FR-027`, `NFR-005`

---

## Issue 9: Download SOA PDF button displays the pre-signed S3 URL inside the page

Category: Functional / Security / UI/UX
Severity: High
Status: Open
Surface: Customer Profile / SOA PDF
MVP classification: Must fix
Linked Scenario: C1 - Customer downloads a consolidated SOA PDF
Linked Test Case: SOA-PDF-01 / SOA-PDF-02
Owner: Frontend / Backend

### Steps to reproduce

1. Open Customer Profile for `JPS FASHIONS (MALAYSIA) SDN BHD`.
2. Go to the `SOA` tab.
3. Click `Download SOA PDF`.
4. Observe the SOA card area below the customer identity row.

### Expected result

Clicking `Download SOA PDF` should start a file download or open the PDF in a new browser tab/window.

```text
+--------------------------------------------------------------+
| Statement of Account                            [Download PDF]|
+--------------------------------------------------------------+
| Customer: JPS FASHIONS (MALAYSIA) SDN BHD                    |
| Account : CUST-000478                                        |
| Currency: MYR                                                |
+--------------------------------------------------------------+

Button behavior:
Download SOA PDF -> Browser downloads/opens SOA_*.pdf
Download SOA PDF -> No raw storage URL shown in the page UI
Download SOA PDF -> If failed, show friendly error message
```

Security / UX rule:

```text
Do not render pre-signed S3 URLs in the customer profile UI.
Do not expose AWS query parameters such as X-Amz-Credential and X-Amz-Signature to users.
Show only customer-friendly PDF filename or download status.
```

### Actual result

After clicking `Download SOA PDF`, the page displays a long pre-signed S3 URL inside the SOA card:

```text
https://s3.ap-southeast-5.amazonaws.com/maia-om-bucket/documents/...
X-Amz-Algorithm=AWS4-HMAC-SHA256
X-Amz-Credential=...
X-Amz-Expires=3600
X-Amz-Signature=...
```

The PDF does not visibly download/open from the screenshot state, and the raw signed storage URL is exposed as customer-profile content.

### Notes / evidence

Screenshot evidence: Customer Profile for `JPS FASHIONS (MALAYSIA) SDN BHD`, SOA tab, after clicking `Download SOA PDF`.

This is likely a response-handling bug where the generated PDF URL is being rendered as text instead of being used as the download/open target.

Spec reference: `FR-018`, `FR-022`, `FR-024`

---

## Issue 10: SOA PDF layout is usable but not fully customer-ready

Category: PDF / UI/UX / Data
Severity: High
Status: Open
Surface: SOA PDF
MVP classification: Must fix placeholder/internal fields; layout polish can follow
Linked Scenario: C1 / C2 / C3 / C4
Linked Test Case: SOA-PDF-01 / SOA-PDF-03 / SOA-PDF-05 / BRAND-03
Owner: Frontend / Backend / Product

### Steps to reproduce

1. Generate and open the consolidated SOA PDF.
2. Review the header, debtor block, aging section, ledger table, and footer copy.

### Expected result

The PDF should look like a customer-facing financial document, not a draft template.

```text
+--------------------------------------------------------------------------+
| [Company Logo]  Fixguru                                                  |
|                 Company address, phone, email, ROC/TIN                   |
+--------------------------------------------------------------------------+
|                         STATEMENT OF ACCOUNT                             |
+----------------------------------+---------------------------------------+
| Debtor                           | Closing Balance                       |
| Customer : KENT PRINTING SDN BHD | RM 21,610.00                          |
| A/C No   : CUST-000458           | Opening Balance : RM 0.00             |
| Address  : ...                   | Total Debits    : RM 21,610.00        |
| Statement Date   : 04-Jul-2026   | Total Credits   : RM 0.00             |
| Statement Period : 04-Jul-2025 - 04-Jul-2026                             |
+----------------------------------+---------------------------------------+
```

Ledger should include enough collection context where available:

```text
+------------+---------------+------------+----------+-------------+------------+------------+-------------+
| Date       | Reference     | Due Date   | Status   | Description | Debit      | Credit     | Balance     |
+------------+---------------+------------+----------+-------------+------------+------------+-------------+
| 08-Jun-26  | INV-2026-00531| 08-Jul-26  | Open     | Sales Invoice| 11,550.00 | -          | 11,550.00   |
+------------+---------------+------------+----------+-------------+------------+------------+-------------+
```

### Actual result

The PDF is structurally close to usable, but several customer-facing issues remain:

```text
Logo area shows literal text "Logo" instead of an image or clean fallback.
A/C No shows "Debtors - ANT", which looks like an internal accounting group, not a customer account number.
Ledger has no Due Date, Status, or overdue context.
Footer copy is generic and slightly awkward: "We shall be grateful if you will let us have payment..."
PDF footer does not show `Generated by MAIA` or `ordermaia.com` attribution.
Large whitespace and heavy borders make the PDF feel template-generated rather than polished.
PDF/portal does not clearly define the complete information package that should be sent to the customer together with the SOA link.
```

Positive points:

```text
Company name and contact details are present.
Statement date and statement period are present.
Debtor address is present.
Aging buckets are present.
Opening balance, total debits, total credits, and closing balance reconcile correctly.
Ledger excludes open orders and shows invoice references.
```

### Notes / evidence

Screenshot evidence: SOA PDF for `KENT PRINTING SDN BHD`, closing balance `RM 21,610.00`, statement date `04-Jul-2026`.

This is not as critical as expired-link enforcement, but it should be fixed before customer UAT sign-off because the PDF is the formal downloadable SOA artifact.

Spec reference: `FR-018`, `FR-019`, `FR-021`, `FR-022`, `FR-023`

---

## PDF Test Case Review

Sources reviewed: SOA PDF screenshot for `KENT PRINTING SDN BHD`, plus portal/PDF screenshots for `AKIE GROUP`.

| Test Case | Result from screenshot | Notes / Issue |
|---|---|---|
| SOA-PDF-01 - Download SOA PDF generates on demand | Partial pass | A consolidated PDF exists, but Customer Profile download behavior is still broken by Issue 9 because the signed S3 URL is rendered in the page. |
| SOA-PDF-02 - SOA PDF filename uses customer and date | Not verified | Screenshot does not show browser download filename. Need actual downloaded file name to confirm `SOA_{{CustomerName}}_{{YYYYMMDD}}.pdf`. |
| SOA-PDF-03 - PDF includes ledger transaction doctypes only | Partial pass | Visible ledger contains Sales Invoice rows only. Need a test customer with Credit Note, Debit Note, Payment Voucher, and Payment Receipt to fully verify included doctypes. |
| SOA-PDF-04 - Open Orders excluded from consolidated PDF | Partial pass | PDF does not show open orders in the visible ledger. Need same customer/source data with open orders to prove exclusion. |
| SOA-PDF-05 - Opening plus debits minus credits equals closing | Fail for AKIE GROUP | PDF ledger totals reconcile: `RM 0.00 + RM 12,506.00 - RM 1,930.00 = RM 10,576.00`. But PDF summary box shows `Total Debits RM 10,584.00`, `Total Credits RM 0.00`, and `Closing Balance RM 10,576.00`, so the summary box itself does not reconcile. |
| SOA-PDF-06 - PDF Closing Balance equals portal Total Outstanding | Fail for AKIE GROUP | Portal Total Outstanding is `MYR 10,584.00`, but PDF Closing Balance is `RM 10,576.00`. Difference: `RM 8.00`. |
| BRAND-03 - Generated by MAIA appears in PDF footer | Fail | PDF footer does not show MAIA attribution or `ordermaia.com`. Covered by Issue 10. |
| QR-01 - No active QR code required in Phase 1 PDFs | Pass | No QR code is present, which is acceptable for Phase 1. |
| PERF-02 - SOA PDF generation <= 5 seconds | Not verified | Screenshot cannot prove generation timing. Needs timed download test. |

Additional PDF issue already reported:

```text
Issue 10 covers the customer-facing PDF layout/content gaps:
- Logo placeholder
- Internal A/C No value
- Missing due date/status/overdue context
- Missing MAIA footer attribution
- Awkward footer copy
```

---

## Issue 11: Portal total outstanding and PDF closing balance do not match

Category: Data / PDF / Functional
Severity: Critical
Status: Open
Surface: Portal / SOA PDF
MVP classification: Must fix
Linked Scenario: C3 - SOA PDF reconciles summary totals and running balance
Linked Test Case: SOA-PDF-05 / SOA-PDF-06
Owner: Backend / PDF / Data

### Steps to reproduce

1. Open Customer Profile for `AKIE GROUP`.
2. Go to the `SOA` tab.
3. Compare portal `Total outstanding` with the generated SOA PDF.
4. In the PDF, compare the summary box, aging bucket, ledger totals row, and final running balance.

### Expected result

The same customer statement should use one consistent source of truth.

```text
Portal Total Outstanding
= PDF Closing Balance
= PDF final running balance
= PDF aging bucket total
= Opening balance + Total debits - Total credits
```

Expected arithmetic format:

```text
Opening balance: RM 0.00
Total debits   : RM 12,506.00
Total credits  : RM 1,930.00
Closing balance: RM 10,576.00

RM 0.00 + RM 12,506.00 - RM 1,930.00 = RM 10,576.00
```

Or, if the correct outstanding is `RM 10,584.00`, then the PDF ledger and payment/credit rows must explain the extra `RM 8.00`.

### Actual result

The portal and PDF disagree:

```text
Portal Total Outstanding : MYR 10,584.00
Portal Overdue           : MYR 10,584.00
Portal 1 Month aging     : MYR 10,584.00

PDF Closing Balance      : RM 10,576.00
PDF final running balance: RM 10,576.00
Difference               : RM 8.00
```

The PDF also has an internal summary mismatch:

```text
PDF summary box:
Opening Balance : RM 0.00
Total Debits    : RM 10,584.00
Total Credits   : RM 0.00
Closing Balance : RM 10,576.00

This does not reconcile:
RM 0.00 + RM 10,584.00 - RM 0.00 = RM 10,584.00, not RM 10,576.00
```

But the PDF ledger totals row does reconcile separately:

```text
PDF ledger totals:
Total Debits    : RM 12,506.00
Total Credits   : RM 1,930.00
Closing Balance : RM 10,576.00

RM 0.00 + RM 12,506.00 - RM 1,930.00 = RM 10,576.00
```

### Notes / evidence

Screenshot evidence:

```text
Portal screenshot: AKIE GROUP, CUST-000416, Total outstanding MYR 10,584.00.
PDF screenshot: AKIE GROUP, Closing Balance RM 10,576.00, ledger totals RM 12,506.00 debit and RM 1,930.00 credit.
```

This is a critical financial correctness issue. The customer cannot trust the SOA if the portal, PDF summary, aging, and ledger closing balance show different amounts.

Spec reference: `FR-013`, `FR-018`, `FR-023`

---

## Recommended Display Additions

Add this block near the customer name:

```text
+--------------------------------------------------------------+
| JPS FASHIONS (MALAYSIA) SDN BHD                              |
| Account          : CUST-000478                               |
| Statement as of  : 04 Jul 2026, 2:30 PM                      |
| Payment terms    : Net 30                                    |
| Link valid until : 04 Jul 2026, 4:30 PM                      |
| Issued by        : Fixguru                                   |
| Contact          : finance@example.com / phone               |
+--------------------------------------------------------------+
```

Add this reconciliation block near the ledger:

```text
+------------------------------+-------------------------------+
| Opening balance             | RM 0.00                       |
| Total debits                | RM 106.00                     |
| Total credits               | RM 0.00                       |
| Closing balance             | RM 106.00                     |
+------------------------------+-------------------------------+
```

Improve invoice rows:

```text
+------------+---------------+------------+----------+-------------+------------+------------+-------------+--------------+
| Date       | Document      | Due Date   | Overdue  | Status      | Debit (RM) | Credit(RM) | Balance(RM) | Action       |
+------------+---------------+------------+----------+-------------+------------+------------+-------------+--------------+
| 29 May 26  | INV-2026-00495| 29 Jun 26  | 5 days   | Overdue     | 29.00      | -          | 29.00       | Download PDF |
+------------+---------------+------------+----------+-------------+------------+------------+-------------+--------------+
```

Improve PDF customer-facing fields:

```text
+--------------------------------------------------------------+
| Replace "Logo" placeholder with real logo or remove block     |
| A/C No: CUST-000458, not "Debtors - ANT"                      |
| Ledger: add Due Date and Status if available                  |
| Footer: "Please report any discrepancy within 10 days."       |
+--------------------------------------------------------------+
```

Customer send package:

```text
+--------------------------------------------------------------+
| WhatsApp / email message                                      |
+--------------------------------------------------------------+
| Hi <Customer Name>,                                           |
| Please find your Statement of Account from <Supplier>.         |
|                                                              |
| Amount due       : RM 21,610.00                               |
| Statement date   : 04-Jul-2026                                |
| Statement period : 04-Jul-2025 - 04-Jul-2026                  |
| Link expires     : 04-Jul-2026, <time>                        |
| Password / OTP   : <one-time password>                        |
|                                                              |
| Open SOA: <secure link>                                       |
| For payment or dispute, contact <finance contact>.            |
+--------------------------------------------------------------+
```

Minimum information the customer should receive or see:

```text
Supplier/company name and finance contact
Customer legal name and customer account number
Statement date / as-of timestamp
Statement period
Total outstanding / closing balance
Overdue amount
Aging breakdown
Invoice references included in the balance
Due date / status / overdue days where available
Opening balance, total debits, total credits, closing balance
Link expiry time
Password / OTP delivery instruction
Payment instruction or who to contact for payment
Dispute instruction, e.g. report discrepancy within 10 days
PDF download action with customer-friendly filename
```

## Priority Order

1. Enforce expired-link state before password prompt or SOA data render.
2. Fix portal/PDF balance mismatch and PDF internal reconciliation mismatch.
3. Add statement date / as-of timestamp.
4. Populate meaningful document status. Add due date and days overdue if data is already available.
5. Add reconciliation totals.
6. Fix mobile baseline usability so customer name, totals, ledger rows, and PDF actions are readable/reachable.
7. Remove raw token values from Customer Profile SOA activity logs and show audit-safe event details.
8. Fix Download SOA PDF so it downloads/opens the PDF without rendering a signed S3 URL.
9. Fix SOA PDF placeholder/internal fields: logo placeholder, A/C No value, and customer-facing copy.
10. Defer full mobile card redesign if the MVP mobile table remains usable.
11. Defer supplier/company contact details unless the SOA is sent without a reply channel.
12. Defer payment instructions unless payment guidance is absent from both the invoice PDF and sending message.
