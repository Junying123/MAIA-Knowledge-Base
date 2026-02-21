---
owner: Gareth
status: approved
last_reviewed: 2026-02-20
---

# Document Status Flows

This page documents all possible status transitions for each document type in MAIA.

## Quotation Status Flow

```
DRAFT → OPEN → ORDERED
          ↓
        LOST
```

### Status Definitions

| Status | Description | Can Edit? | Can Delete? |
|--------|-------------|-----------|-------------|
| **DRAFT** | Quotation being prepared | ✅ Yes | ✅ Yes |
| **OPEN** | Submitted and active | ❌ No | ❌ No |
| **ORDERED** | Converted to Sales Order | ❌ No | ❌ No |
| **LOST** | Customer declined | ❌ No | ❌ No |

### Status Transitions

- **DRAFT → OPEN:** Submit quotation
- **OPEN → ORDERED:** Convert to Sales Order
- **OPEN → LOST:** Mark as lost opportunity
- **ORDERED → OPEN:** Delete the Sales Order (reverts quotation)

---

## Sales Order Status Flow

```
DRAFT → TO BILL → CLOSED
          ↓         ↑
        HOLD → (Resume)
          ↓
      CANCELLED
```

### Status Definitions

| Status | Description | Can Edit? | Can Delete? |
|--------|-------------|-----------|-------------|
| **DRAFT** | Order being prepared | ✅ Yes (via "Edit") | ✅ Yes |
| **TO BILL** | Submitted, awaiting invoice | ✅ Yes (via "Amend") | ❌ No |
| **HOLD** | Temporarily paused | ❌ No | ❌ No |
| **CLOSED** | Completed and closed | ❌ No | ❌ No |
| **CANCELLED** | Order cancelled | ❌ No | ❌ No |

### Status Transitions

- **DRAFT → TO BILL:** Submit order
- **TO BILL → HOLD:** Put on hold
- **HOLD → TO BILL:** Resume order
- **TO BILL → CLOSED:** Close order (manually)
- **TO BILL → CANCELLED:** Cancel order

---

## Invoice Status Flow

```
DRAFT → UNPAID → PAID
          ↓
      CANCELLED
```

### Status Definitions

| Status | Description | Can Edit? | Can Delete? |
|--------|-------------|-----------|-------------|
| **DRAFT** | Invoice being prepared | ✅ Yes | ✅ Yes |
| **UNPAID** | Submitted, awaiting payment | ❌ No | ❌ No (must cancel) |
| **PAID** | Payment received | ❌ No | ❌ No |
| **CANCELLED** | Invoice cancelled | ❌ No | ❌ No |

### Status Transitions

- **DRAFT → UNPAID:** Submit invoice
- **UNPAID → PAID:** Record payment (via Receipt)
- **UNPAID → CANCELLED:** Cancel invoice (with reason)

---

## Credit Note Status Flow

```
DRAFT → OPEN → CLOSED
          ↓
      CANCELLED
```

### Status Definitions

| Status | Description | Can Edit? | Can Delete? |
|--------|-------------|-----------|-------------|
| **DRAFT** | Credit note being prepared | ✅ Yes | ✅ Yes |
| **OPEN** | Submitted, available for application | ❌ No | ❌ No |
| **CLOSED** | Fully applied or used | ❌ No | ❌ No |
| **CANCELLED** | Credit note cancelled | ❌ No | ❌ No |

### Status Transitions

- **DRAFT → OPEN:** Submit credit note
- **OPEN → CLOSED:** Fully applied to invoices or issued as refund
- **OPEN → CANCELLED:** Cancel credit note (with reason)

---

## Receipt Status Flow

```
DRAFT → SUBMITTED
```

### Status Definitions

| Status | Description | Can Edit? | Can Delete? |
|--------|-------------|-----------|-------------|
| **DRAFT** | Receipt being prepared | ✅ Yes | ✅ Yes |
| **SUBMITTED** | Payment recorded | ❌ No | ❌ No |

---

## Delivery Note Status Flow

```
DRAFT → SUBMITTED
```

### Status Definitions

| Status | Description | Can Edit? | Can Delete? |
|--------|-------------|-----------|-------------|
| **DRAFT** | Delivery note being prepared | ✅ Yes | ✅ Yes |
| **SUBMITTED** | Shipment confirmed | ❌ No | ❌ No |

---

## See Also

- [[Known Limitations]] — Status transition restrictions
- [[04 - QA & Known Issues/Workarounds Library]] — Workarounds for status issues
- [[01 - MAIA Product/Core Workflows/Quote-to-Cash Flow]] — Document flow
