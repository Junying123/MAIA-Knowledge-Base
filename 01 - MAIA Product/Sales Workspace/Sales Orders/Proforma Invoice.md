---
owner: Gareth
status: approved
last_reviewed: 2026-04-03
lark_url:
---

# Proforma Invoice

## What It Is

A **Proforma Invoice** in MAIA is **not a separate document or record**. It is a **PDF export of the Sales Order**, formatted to look like an invoice so it can be sent to the customer before the final Invoice is raised.

No new record is created in the system when a Proforma Invoice is generated. It uses the Sales Order's reference number and line items.

---

## When to Use It

Used for customers on **cash-in-advance payment terms** — where the customer must make payment before the final Invoice is issued and goods are dispatched.

**Typical flow for cash-in-advance customers:**

```
Quotation → Sales Order (TO BILL) → Generate Proforma Invoice PDF
                                              ↓
                                   Send PDF to customer
                                              ↓
                                   Customer makes payment
                                              ↓
                                   Final Invoice raised → Receipt recorded
```

For customers on **credit terms** (standard), skip the Proforma Invoice step and go directly from Sales Order to Invoice.

---

## How to Generate a Proforma Invoice

1. Open a submitted Sales Order (status: **TO BILL**)
2. Click **Generate PDF** (top bar of the Sales Order page)
3. When prompted, select **Proforma Invoice** from the options
4. The PDF downloads immediately — this is your Proforma Invoice

> ⚠️ No record is created. The download is purely a PDF export of the Sales Order formatted as a proforma.

---

## Key Points

| Point | Detail |
|-------|--------|
| Document type | PDF export only — no system record |
| Source | Sales Order (TO BILL status) |
| Reference number | Same as the Sales Order reference |
| When used | Cash-in-advance customers; pre-payment confirmation |
| When NOT used | Credit term customers — go directly to Invoice |
| Can be redownloaded | Yes — re-open the SO and Generate PDF again at any time |

---

## Difference: Proforma Invoice vs Final Invoice

| | Proforma Invoice | Final Invoice |
|--|------------------|---------------|
| System record | No | Yes (separate document) |
| Reference number | SO reference | Own Invoice reference |
| Can receive payment | No | Yes — Receipt is linked to Invoice |
| Legally binding | No — for payment guidance only | Yes |
| Status after creation | SO stays TO BILL | Invoice status: UNPAID |

---

## See Also

- [[Sales Order Workflow Guide]] — Full SO lifecycle
- [[Quote-to-Cash Flow]] — End-to-end business flow
- [[Invoice Workflow Guide]] — Creating the final Invoice after payment
- [[Receipt & Payment Workflows]] — Recording payment once received
