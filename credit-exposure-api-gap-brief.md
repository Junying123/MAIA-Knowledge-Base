# Credit Exposure API — Gap Brief (FE → BE)

**Endpoint:** `mindhive_erpnext_apis.mindhive_erpnext_apis.endpoints.v1.general.credit_limit.get_customer_credit_exposure`  
**Date:** 5 Jun 2026  
**Audience:** Backend PIC  

---

## Context

The frontend uses the Customer Credit Exposure API across **Quotation**, **Sales Order**, **Invoice**, and **Debit Note** detail pages for:

- Live credit standing display (credit bar, inline summary, popover breakdown)
- Pre-submit credit limit / overdue warning dialogs

Two gaps in the current API response are causing incorrect warnings and confusing UI for end users.

---

## Summary

| # | Gap | User impact | Status |
|---|-----|-------------|--------|
| 1 | Projection logic does not account for source DocType | Invoice / Debit Note pages show the wrong breach type; credit-limit block warning may not appear | Discussed with Ivan — needs BE implementation |
| 2 | Overdue total vs ageing buckets use different net/gross logic | Overdue header and ageing breakdown show conflicting amounts | Ivan suggested splitting unallocated payments into its own layer |

---

## Issue 1: Projection logic is DocType-agnostic

### Problem

The request payload only accepts:

```json
{
  "customer": "CUST-009551",
  "company": "Mackessen",
  "projection_amount": 32000
}
```

The backend always projects `projection_amount` into **Layer 2 (unbilled SO)** / **Layer 3 (pipeline)** commitment logic. That is correct for **Sales Order** and **Quotation**, but not for **Sales Invoice** or **Debit Note**, where the amount should affect **Layer 1 (billed exposure)** on submit.

### Example — Invoice Details page

**Request:**

```json
{
  "customer": "CUST-009551",
  "company": "Mackessen",
  "projection_amount": 32000
}
```

Customer credit limit: **RM 30,000**

**Relevant response fields:**

| Field | Current value | Issue |
|-------|---------------|-------|
| `projection.over_commitment` | `true` | Treated as pipeline/commitment |
| `projection.credit_limit_breach` | `false` | Should be `true` for Invoice |
| `projection.primary_breach` | `"Over-Commitment"` | Should reflect credit limit breach |
| `projection.projected_layer_1` | `0.0` | Should include the RM 32,000 invoice amount |
| `projection.projected_layer_2` | `32269.97` | Invoice amount incorrectly added here |

On Invoice submit, RM 32,000 would hit billed exposure and breach the RM 30,000 limit immediately — but the API reports no credit limit breach.

<details>
<summary>Full sample response</summary>

```json
{
  "content_type": "application/json",
  "message": {
    "status": "success",
    "message": "Customer credit exposure fetched successfully",
    "data": {
      "customer": "CUST-009551",
      "customer_name": "John Smith",
      "company": "Mackessen",
      "currency": "MYR",
      "computed_at": "2026-06-05 17:50:38.749930",
      "customer_credit_policy": {
        "credit_limit": 30000.0,
        "has_credit_limit": true,
        "bypass_credit_limit_check": false,
        "block_on_overdue": true
      },
      "layer_0_overdue": {
        "credit_term_breach": false,
        "will_block_on_overdue": false,
        "amount": 0.0,
        "invoice_count": 0,
        "oldest_invoice": null,
        "oldest_due_date": null,
        "oldest_overdue_days": null,
        "ageing_buckets": [
          { "label": "1-30 days", "key": "1_to_30", "amount": 0.0 },
          { "label": "31-60 days", "key": "31_to_60", "amount": 0.0 },
          { "label": "61-90 days", "key": "61_to_90", "amount": 0.0 },
          { "label": ">90 days", "key": "over_90", "amount": 0.0 }
        ]
      },
      "layer_1_billed_exposure": {
        "credit_limit_breach": false,
        "will_block_on_credit_limit": false,
        "amount": 0.0,
        "breakdown": {
          "sales_invoice_outstanding": 0.0,
          "payment_entry_unallocated": 0.0
        },
        "invoice_count": 0
      },
      "layer_2_unbilled_so": {
        "over_commitment": true,
        "amount": 269.97,
        "count": 2
      },
      "layer_3_pipeline": {
        "pipeline_warning": true,
        "amount": 269.97,
        "breakdown": {
          "draft_sales_orders": 179.98,
          "active_quotations": 89.99,
          "draft_so_count": 1,
          "active_quotation_count": 1
        }
      },
      "credit_summary": {
        "credit_status": "Within Limit",
        "primary_breach": "Over-Commitment",
        "outstanding": 0.0,
        "utilisation_pct": 0.0,
        "available_credit": 30000.0,
        "exceeded_by": 0.0
      },
      "projection": {
        "new_order_amount": 32000.0,
        "projected_layer_1": 0.0,
        "projected_layer_2": 32269.97,
        "projected_total_committed": 32269.97,
        "credit_term_breach": false,
        "credit_limit_breach": false,
        "over_commitment": true,
        "pipeline_warning": true,
        "primary_breach": "Over-Commitment",
        "credit_limit_utilisation_pct": 0.0,
        "commitment_pct": 107.57,
        "commitment_excess_amount": 2269.97
      }
    }
  }
}
```

</details>

### Frontend impact

The FE relies on `projection.credit_limit_breach` to decide whether to show the credit-limit block warning before submit:

```typescript
// should-show-credit-limit-warning.ts
data.projection?.credit_limit_breach === true
```

Because the API returns `credit_limit_breach: false` for Invoices, the warning dialog does not trigger even when submission would be blocked.

The FE currently has DocType-specific display workarounds (e.g. using `commitment_pct` for Invoice/Debit Note vs `credit_limit_utilisation_pct` for SO/Quotation), but **cannot reliably drive submit warnings** without correct BE projection flags.

### Expected behavior by DocType

| DocType | Projection should add to | Breach flags to evaluate |
|---------|--------------------------|--------------------------|
| Sales Order | Layer 2 / Layer 3 (commitment) | `over_commitment`, `pipeline_warning` |
| Quotation | Layer 3 (pipeline) | `pipeline_warning`, `over_commitment` |
| Sales Invoice | Layer 1 (billed exposure) | `credit_limit_breach` |
| Debit Note | Layer 1 (billed exposure) | `credit_limit_breach` |

### Proposed fix

Add a `doctype` field to the request payload:

```json
{
  "customer": "CUST-009551",
  "company": "Mackessen",
  "projection_amount": 32000,
  "doctype": "Sales Invoice"
}
```

Backend projection logic should branch on DocType so that:

1. Invoice / Debit Note amounts flow into `projected_layer_1` (not layer 2/3).
2. `projection.credit_limit_breach` and `projection.primary_breach` reflect the correct breach type for that DocType.
3. Commitment-related flags (`over_commitment`, `commitment_pct`) are only set when relevant (SO / Quotation).

> **Note:** This gap was previously discussed with Ivan.

---

## Issue 2: Overdue total vs ageing breakdown mismatch

### Problem

`layer_0_overdue.amount` (shown as **TOTAL OVERDUE** in the UI) does not match the sum of `ageing_buckets`. Users see one number in the header and a larger number in the breakdown, with no explanation in the response.

### Example

**Customer:** `CUST-000016` (Evergreen Supplies Sdn Bhd)

| Field | Value |
|-------|-------|
| `layer_0_overdue.amount` | **RM 1,173.17** |
| `ageing_buckets[">90 days"].amount` | **RM 3,146.09** |
| `layer_1_billed_exposure.breakdown.payment_entry_unallocated` | **RM 1,972.92** |

The difference is explained by unallocated payment entries being netted off the overdue total:

```
3,146.09 − 1,972.92 = 1,173.17 ✓
```

The same netting applies to Layer 1:

```
48,146.09 (SI outstanding) − 1,972.92 (unallocated) = 46,173.17 (layer_1 amount) ✓
```

This logic may be correct internally, but it is **not surfaced in the API response** in a way the FE can explain to users. The ageing buckets appear to represent gross overdue invoice amounts, while `layer_0_overdue.amount` is net of unallocated payments.

<details>
<summary>Sample response snippet</summary>

```json
{
  "layer_0_overdue": {
    "credit_term_breach": true,
    "will_block_on_overdue": true,
    "amount": 1173.17,
    "invoice_count": 5,
    "oldest_invoice": "ACC-SINV-2025-00461",
    "oldest_due_date": "2025-11-19",
    "oldest_overdue_days": 198,
    "ageing_buckets": [
      { "label": "1-30 days", "key": "1_to_30", "amount": 0.0 },
      { "label": "31-60 days", "key": "31_to_60", "amount": 0.0 },
      { "label": "61-90 days", "key": "61_to_90", "amount": 0.0 },
      { "label": ">90 days", "key": "over_90", "amount": 3146.09 }
    ]
  },
  "layer_1_billed_exposure": {
    "credit_limit_breach": true,
    "will_block_on_credit_limit": true,
    "amount": 46173.17,
    "breakdown": {
      "sales_invoice_outstanding": 48146.09,
      "payment_entry_unallocated": 1972.92
    },
    "invoice_count": 6
  }
}
```

</details>

### Frontend impact

The overdue section renders:

- **Header:** `layer_0_overdue.amount` → RM 1,173.17
- **Breakdown:** `ageing_buckets` → RM 3,146.09 in >90 days

Users perceive this as a bug because the numbers do not reconcile visually.

### Proposed fix (per Ivan's suggestion)

1. **Stop netting** `payment_entry_unallocated` from `layer_0_overdue.amount` and ageing buckets — show gross overdue invoice amounts consistently in Layer 0.
2. **Expose unallocated payments as their own layer** (e.g. `layer_X_unallocated_payments`) so total exposure remains accurate and the UI can show:
   - Gross overdue by ageing bucket
   - Unallocated payments as a separate credit/adjustment line
   - Net overdue total that reconciles with the breakdown

Alternatively, if netting is kept, ageing buckets should also be netted so header and breakdown always match — but the separate-layer approach is preferred for transparency.

---

## Frontend dependencies (for BE awareness)

Once fixed, FE will:

1. Pass `doctype` in all projection calls from Quotation, SO, Invoice, and Debit Note pages.
2. Remove DocType-specific workarounds for utilisation/breach display where BE flags become authoritative.
3. Update overdue UI to render the new unallocated-payments layer (if added).

---

## Acceptance criteria

### Issue 1 — DocType-aware projection

- [ ] Invoice with `projection_amount` exceeding available credit returns `projection.credit_limit_breach: true`
- [ ] SO / Quotation with the same amount returns `over_commitment: true` (not `credit_limit_breach`)
- [ ] `projected_layer_1` / `projected_layer_2` reflect the correct layer per DocType

### Issue 2 — Overdue reconciliation

- [ ] `layer_0_overdue.amount` equals sum of non-zero ageing buckets (or the relationship is explicit in the response)
- [ ] Unallocated payments are visible as a separate, labelled component (not silently netted from overdue display)
