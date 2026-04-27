---
owner: Gareth
status: approved
last_reviewed: 2026-04-22
source: https://docs.erpnext.com/docs/user/manual/en/work-order
erpnext_version: v16
---

# ERPNext Work Order — Reference

## What It Is

A **Work Order** is an ERPNext manufacturing document that instructs the shop floor to produce a specific quantity of an item. It is the central doctype for production planning — it pulls raw material requirements from a Bill of Materials (BOM), coordinates material transfers to the factory floor, tracks operations via Job Cards, and updates stock when the finished item is produced.

> Path in ERPNext: `Home > Manufacturing > Production > Work Order`

---

## Prerequisites (What Must Exist First)

| Prerequisite | Purpose |
|---|---|
| **Bill of Materials (BOM)** | Defines raw materials and operations needed to produce the item |
| **Operation** | Named step in the production process (e.g. "Cutting", "Assembly") |
| **Workstation** | Physical or virtual location where an operation is performed |
| **Item master** | The finished item to be manufactured |
| **Warehouses** | Source (raw materials), WIP, Target (finished goods), and optionally Scrap |

---

## Status Flow

```
Draft → Open (Not Started) → In Process → Completed
                    ↓
                 Stopped  ←→  Re-Opened
```

| Status | When It Applies |
|---|---|
| **Draft** | Work Order saved but not submitted |
| **Not Started** | Submitted; Job Cards created but production not yet begun |
| **In Process** | At least one Job Card has been started |
| **Completed** | Finished goods Stock Entry created; all quantities accounted for |
| **Stopped** | Manually stopped via "Stop" button; WIP materials must be returned first |

> A Stopped Work Order can be **re-opened**. This is the only way to resume after stopping.

---

## Key Fields

### Header

| Field | Notes |
|---|---|
| Item to Manufacture | Finished good; auto-fetches default BOM |
| BOM | Can be overridden; drives required items and operations |
| Qty to Manufacture | Drives raw material calculation |
| Planned Start Date | Default = now; used for capacity scheduling |
| Expected Delivery Date | Calculated from operations and workstation availability |
| Sales Order | Optional link — Work Order can be created directly from a Sales Order |
| Project | Optional link for engineer-to-order tracking |
| Use Multi-Level BOM | Default ON; explodes sub-assemblies to their raw materials |
| Allow Alternative Item | Allows substituting raw materials if primary is unavailable |
| Skip Material Transfer to WIP | Bypasses the WIP warehouse step; Stock Entry goes direct to manufacture |
| Backflush Raw Materials from WIP | Auto-creates Manufacture Stock Entry; assumes materials consumed from Source Warehouse |

### Warehouses

| Warehouse | Purpose |
|---|---|
| Source Warehouse | Where raw materials are stored |
| Work-in-Progress (WIP) Warehouse | Where materials sit during active production |
| Target Warehouse | Where finished goods are stored after manufacturing |
| Scrap Warehouse | For any scrap output from the BOM |

> Warehouses are **mandatory on submission** but optional on save.

### Required Items Table

| Field | Notes |
|---|---|
| Required Quantity | Auto-calculated from BOM × qty to manufacture |
| Transferred Quantity | Items moved to WIP warehouse |
| Consumed Quantity | Items consumed to produce finished goods |
| Available Qty at Source Warehouse | Shown after save |
| Available Qty at WIP Warehouse | Shown after save |

### Operations Table (if BOM has operations)

| Field | Notes |
|---|---|
| Operation | Fetched from BOM |
| Workstation | Fetched from BOM |
| Status | Pending → Work In Progress → Completed (updated by Job Cards) |
| Planned Operating Cost | Hourly Rate × Operation Time × Qty |
| Actual Operating Cost | Pulled from completed Job Cards |
| Completed Qty | Items processed through this operation |

### Operation Cost Summary

| Field | Notes |
|---|---|
| Planned Operating Cost | From BOM |
| Actual Operating Cost | From Job Cards |
| Additional Operating Cost | Manual entry for miscellaneous costs |
| Total Operating Cost | Actual + Additional |

---

## Related Doctypes

```
Production Plan
    └── Work Order
            ├── Job Card (per operation, auto-created on submit)
            │       ├── Time Logs
            │       ├── Material Request (from Job Card)
            │       └── Quality Inspection (v13+)
            └── Stock Entry
                    ├── Material Transfer (to WIP)
                    └── Manufacture (finished goods)
```

### Job Card

Auto-created as **Draft** when the Work Order is submitted (one per operation).

| Action | What Happens |
|---|---|
| Start Job | Records From Time; updates WO operation status to In Process |
| Complete Job | Records Completed Qty and To Time; updates WO operation status to Completed |
| Submit | Finalises the Job Card; triggers WO progress update |

**Job Card also supports:**
- Employee assignment and time logging
- Scrap items tracking (defective/broken materials)
- Material Request raised directly from the Job Card
- Quality Inspection for in-process (semi-finished) goods (v13+)
- Multiple employees on one operation (create additional Job Cards)

### Stock Entry Types Generated

| Type | When Created |
|---|---|
| Material Transfer for Manufacture | Moving raw materials from Source → WIP Warehouse |
| Manufacture | Consuming WIP materials and producing finished goods (Target Warehouse) |

---

## v16 Enhancements (Relevant to MAIA)

| Feature | What Changed |
|---|---|
| **Stock Reservation on Work Order** | Raw materials reserved on submission; finished goods held for linked Sales Order after manufacturing. Can be unreserved manually. |
| **Phantom BOM support** | Sub-assemblies marked as Phantom now auto-explode to raw materials in Work Orders and Production Plans — no unnecessary intermediate production steps |
| **Master Production Schedule (MPS) + MRP views** | Consolidated demand planner: calculates production and purchase needs from Sales Orders and stock levels |
| **Transfer Extra Raw Materials to WIP (%)** | Manufacturing Settings now allow a buffer % transfer over required qty |
| **Job Card: record raw materials consumed + semi-finished produced** | More granular tracking at the operation level |
| **Landed Cost Voucher linked to Work Order** | Freight, handling, duties can now be attached to WO for accurate costing |
| **Work Order from Sales Order — Item Name shown** | Item name visible next to item code in selection dialog |
| **Company-specific manufacturing warehouses** | No longer a single global setting |

---

## Capacity Planning

When a Work Order is submitted:
1. ERPNext checks Planned Start Date + workstation availability
2. Schedules operations **serially** (one after another) around existing workstation slots
3. Auto-creates **Time Log drafts** for each operation
4. Time Logs can be modified before submission

---

## How to Stop a Work Order

1. Ensure all WIP materials have been **returned to Source Warehouse** (via Stock Entry)
2. Click **Stop** — status changes to `Stopped`
3. To resume: click **Re-Open** — status returns to `In Process` or `Not Started`

---

## MAIA Build Notes

| Question | Answer |
|---|---|
| Can MAIA use ERPNext Work Order natively? | Yes — the core manufacture-from-BOM flow is fully available |
| What needs customisation? | WhatsApp-triggered Work Order creation, status push notifications, and any MAIA-specific workflow hooks |
| What to build from scratch? | Any mobile/WhatsApp interface for shop floor workers to update Job Cards |
| Key integration point | Work Order ↔ Sales Order link (already native in ERPNext) |
| Stock reservation | Native in v16 — leverage as-is |
| MRP / Production Plan | Native in v16 — evaluate before building custom demand planning |

---

## See Also

- [[01 - MAIA Product/Technical/ERPNext & Frappe/README]]
- [[01 - MAIA Product/Technical/ERPNext & Frappe/ERPNext Modules Used]]
- [[01 - MAIA Product/Overview/Product Identity]]
- [[brain/Key Decisions]]
- [ERPNext Work Order Docs](https://docs.erpnext.com/docs/user/manual/en/work-order)
- [ERPNext Job Card Docs](https://docs.erpnext.com/docs/user/manual/en/job-card)
