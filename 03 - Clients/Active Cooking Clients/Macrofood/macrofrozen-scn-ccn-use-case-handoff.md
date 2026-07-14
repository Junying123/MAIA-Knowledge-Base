# Macrofrozen — SQL Sales Credit Note (SCN) and Customer Credit Note (CCN)

## Purpose

This document consolidates:

- **SQL Accounting documented behaviour** — what the platform supports.
- **Macrofrozen's Fireflies transcript** — how the client says it currently works in SQL.

When they differ, use the SQL documentation for platform capability and the
Macrofrozen transcript for the client's agreed/current operating practice.

## Terms

| Term | Meaning in this document |
| --- | --- |
| **SCN / Sales CN** | SQL Sales Credit Note, created in the Sales module. Required for a customer stock return. |
| **CCN / Customer CN** | SQL Customer Credit Note, held in Customer/AR and used to knock off customer documents. |
| **Knock off** | Apply a credit or payment against an outstanding customer document, fully or partially reducing its balance. |
| **Unapplied credit** | A CCN amount that has not yet been knocked off against an outstanding document. |

## Source-of-truth decision

Ask these two questions in sequence:

1. **Are goods physically returned?**
2. **Is there an outstanding invoice to apply the credit against?**

| Goods returned? | Original invoice status | SQL starting document | Result |
| --- | --- | --- | --- |
| Yes | Outstanding | **Sales CN** | Use the related CCN to knock off the outstanding invoice. |
| Yes | Already paid | **Sales CN** | Credit remains unapplied; apply to another invoice or refund the customer. |
| No | Outstanding | **Customer CN** | Create a direct CCN for a discount/adjustment, then knock it off. |
| No | Already paid | **Customer CN** | Create a direct CCN; apply it elsewhere, retain it as credit, or refund it. |

## SQL-supported process

### 1. Customer returns stock — create a Sales Credit Note first

SQL's documented flow is:

1. Go to `Sales → Credit Note → New`.
2. Select the customer.
3. Right-click the Credit Note title and choose **Transfer from Sales Invoice / Cash Sales**.
4. Select the source document and enter the returned items/quantities.
5. Save the Sales CN.
6. Go to `Customer → Customer Credit Note` and knock off the relevant document.

SQL explicitly says that a customer stock return should use a Sales Credit Note
first, then be knocked off in Customer Credit Note.

### 2. Customer receives a non-stock credit — create a Customer Credit Note directly

For a discount, rebate, price correction or other adjustment where no goods are
returned:

1. Go to `Customer → Customer Credit Note → New CN`.
2. Select the customer and appropriate GL account.
3. Enter the credit amount.
4. Knock off the relevant invoice(s).
5. Save.

### 3. Customer refund

If a Customer Credit Note remains unapplied and Macrofrozen is returning money
to the customer instead of keeping it as credit:

1. Go to `Customer → Customer Refund → New`.
2. Select the customer and payment method.
3. Enter the refund amount.
4. Knock off the unapplied Customer Credit Note.
5. Save.

## Macrofrozen current practice from the transcript

The client states that it normally uses **Sales CN** for customer returns.

### Standard return against an outstanding invoice

1. Finance opens the original Sales Invoice in SQL.
2. The invoice is transferred to Sales CN.
3. The returned goods and return value are recorded.
4. After saving, the credit is available in Customer Credit Note.
5. Finance knocks off the original invoice by the returned value.

Example given in the call:

- Original invoice: RM5,000
- Returned goods / credit: RM1,000
- Amount knocked off: RM1,000
- Remaining invoice balance: RM4,000

The credit reduces the invoice by the CCN value; it does not have to cancel the
whole invoice.

### Return against a fully paid invoice

The client described this sequence:

1. Create the Sales CN from the original invoice in the usual way.
2. If the original invoice is already fully paid, no further credit can be
   applied to that invoice.
3. Finance manually opens Customer Credit Note.
4. Finance applies the available credit to another outstanding invoice for the
   same customer.

SQL's documented alternative is to use **Customer Refund** if the credit is to
be paid back to the customer rather than carried forward.

### One credit across several invoices

Macrofrozen says that an available CCN can be allocated across multiple open
invoices where required.

Example from the discussion:

- Available CCN: RM1,000
- First open invoice: RM500
- Apply RM500 to the first invoice.
- Apply the remaining RM500 to a second eligible invoice.

The client regards this as situational and uncommon because returns are usually
small. Allocation must not be arbitrary: it must be against open documents for
the correct customer and cannot exceed the available credit.

### Payment and credit reallocation scenario

The client also described an accounting allocation option for a RM5,000 invoice
that has been paid and later receives a RM1,000 credit:

- Apply the RM1,000 CCN to the original invoice.
- Apply RM4,000 of the customer payment to that invoice.
- Apply the remaining RM1,000 payment to another eligible invoice.

Treat this as **Macrofrozen operating knowledge to validate in their live SQL
environment**, not as a documented SQL rule in the references below.

## Key implementation and UAT rules

1. Do not create a direct CCN for a physical stock return; create an SCN first.
2. Preserve the reference to the source Sales Invoice or Cash Sales document.
3. Support partial credit amounts; do not assume an invoice is fully cancelled.
4. Permit an unapplied CCN only for the same customer.
5. Do not allocate a credit above its remaining value.
6. Do not allocate against an already fully knocked-off document.
7. For a paid invoice, support both client choices:
   - carry the CCN forward to another open invoice; or
   - process a Customer Refund.
8. Keep SCN, CCN, source invoice, knock-off allocations and refund references
   traceable for audit.

## Validation notes

| Statement | Status | Source |
| --- | --- | --- |
| Stock return starts with Sales CN. | Confirmed. | SQL documentation and Macrofrozen transcript. |
| SCN is transferred from a Sales Invoice or Cash Sales. | Confirmed. | SQL documentation. |
| CCN is used for AR knock-off. | Confirmed. | SQL documentation and Macrofrozen transcript. |
| Discount/non-stock adjustment can start as direct CCN. | Confirmed. | SQL documentation. |
| Unapplied CCN can be refunded. | Confirmed. | SQL Customer Refund documentation. |
| Saving SCN automatically creates/opens a CCN. | Client-described; SQL docs show the subsequent Customer Credit Note step but do not explicitly describe the automation. | Macrofrozen transcript. |
| A CCN can be split across multiple invoices. | Client-described; validate in Macrofrozen's live SQL configuration. | Macrofrozen transcript. |
| Payment allocations may be rearranged after a return. | Client-described; validate in Macrofrozen's live SQL configuration. | Macrofrozen transcript. |

## Source references

- Macrofrozen transcript: [Macrofrozen Client Scope Lock Clarification](https://app.fireflies.ai/view/01KXDBDJWT29A4DR4P63MKDEQA)
- SQL Customer Guide: [Customer Credit Note](https://docs.sql.com.my/sqlacc/usage/customer/guide#customer-credit-note)
- SQL Singapore User Guide: [Sales Credit Note](https://docs.sql.com.my/sqlacc/singapore/user-guide#411-sales-credit-note)
- SQL Singapore User Guide: [Customer Credit Note](https://docs.sql.com.my/sqlacc/singapore/user-guide#54-customer-credit-note)
- SQL tutorial video: [How To Perform Credit Note & Refund Note](https://www.youtube.com/watch?v=XmrLgBL4hTc)

## Video scope note

The tutorial video explicitly covers these scenarios:

- Paid invoice with goods return.
- Outstanding invoice with and without goods return.
- Paid invoice without goods return.

The written SQL documentation is the authoritative procedural reference in this
handoff; the video is included as a scenario walkthrough.
