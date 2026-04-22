# E-Invoicing Flow — MAIA ERP

---

## 🧾 Step 1 — Decide *if* an invoice needs e-invoicing

When a Sales Invoice is created, the system checks **three things** to decide how to handle it:

1. **Is e-invoicing switched on?**
   A setting called `submit_einvoice` in the channel config controls this globally. If it's off → skip everything.

2. **How big is the invoice?**
   If the total exceeds **RM 10,000** → it must be submitted **individually** to LHDN (cannot be batched).

3. **What does the customer prefer?**
   Some customers are configured for individual submission; others prefer consolidated. If no preference is set → defaults to **consolidated**.

**Possible outcomes:**

| Mode | Meaning |
|---|---|
| `no_einvoice` | E-invoicing is off, or customer is excluded |
| `individual` | Submitted on its own directly to LHDN |
| `consolidated` | Batched together with other invoices |

---

## 📤 Step 2 — Send it to the accounting system

When the invoice is pushed to the connected accounting software (AutoCount, SQL Accounting, or Epicor), the system **attaches e-invoice flags** based on Step 1's decision:

```
SubmitEInvoice:       T / F
ConsolidatedEInvoice: T / F
```

The accounting software then handles the **actual submission to MyInvois** (LHDN's e-invoicing portal). MAIA doesn't talk to LHDN directly — it delegates to the accounting layer.

---

## 🔄 Step 3 — Poll for the result

After sending, the system **actively polls** to find out what LHDN decided. The status progresses through these stages:

```
QUEUED
  └── SUBMITTED
        ├── VALID       ✅  (accepted by LHDN)
        ├── INVALID     ❌  (rejected at validation)
        ├── CANCELLED       (voided after acceptance)
        ├── REJECTED        (disputed by buyer)
        └── TIMEOUT         (gave up after 12 attempts)
```

To avoid hammering the external system, checks use an **exponential backoff** strategy — the wait time grows between each attempt:

```
5 min → 15 min → 30 min → 1 hr → 2 hr → ...
```

This means early failures are caught quickly, while long-running submissions don't waste resources.

---

## ⏰ Step 4 — The scheduler keeps it running automatically

A background job called `run_einvoice_reconciliation` runs on a schedule and does the following:

1. **Finds** all invoices not yet in a final state (i.e. not `VALID`, `INVALID`, `CANCELLED`, etc.)
2. **Checks** whether they're due for another poll attempt (based on the backoff timer)
3. **Calls** each platform — AutoCount, SQL Accounting, Epicor — to fetch the latest status from LHDN
4. **Writes** the result back to the Sales Invoice record

No manual intervention needed — the reconciler handles the full lifecycle automatically.

---

## 🗂️ Where the data lives — Sales Invoice fields

Each Sales Invoice stores its e-invoice state directly on the record:

| Field | What it means |
|---|---|
| `einvoice_mode` | `individual`, `consolidated`, or `no_einvoice` |
| `einvoice_status` | Current status: `QUEUED`, `SUBMITTED`, `VALID`, etc. |
| `einvoice_id` | The UUID assigned by LHDN |
| `einvoice_url` | Link to view the invoice on the MyInvois portal |
| `einvoice_timestamp` | When LHDN validated or cancelled it |
| `einvoice_error_message` | What went wrong, if anything |

---

## Summary

```
Invoice created
  └── System decides mode (no_einvoice / individual / consolidated)
        └── Pushed to accounting software with e-invoice flags
              └── Accounting software submits to MyInvois (LHDN)
                    └── MAIA polls for status automatically
                          └── Invoice record updated until final state reached
```

> **Key insight:** MAIA doesn't submit to LHDN directly. It acts as the orchestrator — flagging intent, delegating submission, and reconciling status back into the ERP. The accounting software is the actual integration point with MyInvois.
