---
owner: Gareth
status: draft
last_reviewed: 2026-05-19
---

# GST SAP Vendor × Mindhive — Meeting Notes

**Date:** 2026-05-19
**Participants:** Jermaine (Mindhive CTO), Jun (GST), Sharon, Ling, Hasma
**Purpose:** Align on MAIA ↔ SAP B1 integration architecture and requirements for GST

---

## Key Point A: Integration Architecture

**MAIA → Middleware → GST SAP B1 via JWT**

MAIA connects to GST's SAP B1 through a middleware layer hosted on GST's client intranet (either standalone PC or within the SAP B1 server). Authentication between MAIA and middleware uses JWT. Two route groups are planned depending on whether standard service layer is sufficient.

**Main Point 1 — Architecture layers**
- MAIA sends data to Middleware (JWT-authenticated)
- Middleware sits on client intranet — standalone PC or within SAP B1 server
- Middleware forwards to GST SAP B1

**Main Point 2 — Two route groups**
- Route 1: SAP B1 standard service layer (use first, lower complexity)
- Route 2: Custom endpoints using GST's JWT (for UDFs and custom fields)

**Main Point 3 — Open question**
- MAIA custom fields (`Custom field: ??`) still TBD — must be defined before dev starts
- GST tech team confirmed capable of building custom endpoints if needed
- Webhook from middleware also potentially possible

---

## Key Point B: Custom Fields & Endpoint Requirements

**GST's SAP custom fields must be mapped before integration can begin**

GST uses customized fields in SAP B1 that fall outside MAIA's standard data model. The current service layer cannot pass these fields — new endpoints must be exposed by GST's IT team, and MAIA must provide a field mapping document.

**Main Point 1 — Custom field mapping**
- MAIA team must collect full list of GST's SAP custom/UDF fields during requirements gathering
- Field mapping document required before any dev work starts
- Coordination between MAIA and GST teams to align data flows

**Main Point 2 — Service layer limitations**
- Standard SAP B1 service layer cannot support all custom fields
- GST IT must expose new/custom endpoints for those fields
- Two-way data sync required — both sides must match at all times

**Main Point 3 — Middleware UDF gap**
- Middleware has UDFs; may need custom endpoints to expose them
- Identified limitations will require updating GST custom UDFs to accommodate new elements
- Sync between SAP modifications and middleware must maintain data integrity

---

## Key Point C: Phased Integration Approach

**Start with standard service layer; expand to custom endpoints only where needed**

Jermaine recommended a phased approach: validate what the existing SAP B1 service layer supports first, identify UDF and custom field gaps, then build custom endpoints only where the standard layer falls short.

**Main Point 1 — Phase 1: Standard service layer**
- Use current SAP B1 service layer capabilities to handle webhooks and initial data sync
- Map all fields supportable by standard layer first
- Document limitations before proceeding to custom work

**Main Point 2 — Phase 2: Custom endpoints**
- Build custom endpoints for fields not supported by service layer
- GST JWT used for authentication on custom route
- Webhook triggers on SAP events to be configured in middleware

**Main Point 3 — Dev environment setup**
- Create dev/UAT server mirroring GST production database
- Mirror: customers, items, warehouse, tax types, discount types
- Validate integration in UAT before any production deployment

---

## Key Point D: Document Flow — SO → DO → Invoice

**Delivery Order and Invoice are linked, share numbering, and go out together**

GST's order fulfilment flow: Sales Order → picking list → Delivery Order (DO) + Invoice dispatched together. DO and Invoice carry the same document number. DO is printed as triple carbon copy.

**Main Point 1 — Document numbering**
- DO and Invoice share same document number
- Invoice template used; DO has different layout/title but follows invoice numbering
- Multiple DOs can be created under one Sales Order

**Main Point 2 — Carbon copy count**
- Current: 2 white copies + 1 carbon copy (3 total)
- Upcoming: 1 white copy + 1 carbon copy (2 total)
- DO and Invoice dispatched together with delivery
- Returning DO = carbon copy (confirmation of receipt)

**Main Point 3 — Picking list → dispatch flow**
- SO triggers picking list generation
- Warehouse staff key in packing weight on picking list
- DO only sent after weight confirmed
- Inventory deducted at DO dispatch (not at SO creation)

---

## Key Point E: Order Fulfilment & Inventory Management

**Warehouse packing data drives inventory deduction; SAP stock transformation handles raw-to-finished goods**

Inventory is deducted in real time based on actual packed weights recorded by warehouse staff. GST also has a custom SAP stock transformation feature that converts raw stock (e.g., whole fish) into finished goods (e.g., portioned by weight) — this must be mapped into the MAIA integration.

**Main Point 1 — Inventory deduction logic**
- Warehouse staff record weight during packing on picking list
- Inventory deducted only when DO is sent (actual shipped qty)
- Ensures inventory reflects real dispatched quantities, not ordered quantities

**Main Point 2 — Stock transformation (custom SAP feature)**
- Custom SAP feature: raw stock → finished good (1:1 transformation)
- Example: whole salmon → portioned salmon by weight
- Transformation triggered on customer order (SO creation)
- MAIA must reflect transformed item on SO/DO/Invoice
- Inventory must track both raw and finished good stock

**Main Point 3 — Customer ordering channels**
- Orders received via WhatsApp, email, verbal (hotel accounts)
- No formal PO at order placement for some customers
- PO still required for payment reconciliation — must be collected before or shortly after order

---

## Key Point F: Payment & Return Note Handling

**Multiple invoices per payment entry supported; return notes and refunds must link accurately**

GST's payment flows are complex — single payments can cover multiple invoices, partial knock-offs are supported, and return notes/refunds must be linked back to the correct invoice records.

**Main Point 1 — Payment entries**
- System supports payment entries across multiple invoices
- Partial knock-off (partial payment against invoice) confirmed supported
- Return notes must be carefully linked to correct invoices

**Main Point 2 — Refund handling**
- Refunds processed via payment entry after return note created
- Return notes and refunds integrated to maintain accurate financial and inventory records

---

## Key Point G: SAP UAT Environment & Testing

**Access to SAP UAT instance with production-mirrored data is the critical next step**

Integration testing cannot begin without a dedicated UAT environment. GST's IT team must provision SAP UAT instance access for MAIA. Testing scope covers stock receiving, item production, and manufacturing report generation.

**Main Point 1 — UAT environment requirements**
- MAIA team needs access to SAP UAT instance including data logs
- Data must mirror production: customers, items, warehouse, tax types, discount types
- GST IT team to provision access — flagged as dependency

**Main Point 2 — Testing scope**
- Stock receiving and item production flows
- Manufacturing report generation
- SAP signal-based triggers and MRP manufacturing process evaluation
- Minimum stock level monitoring (1000kg threshold referenced)

**Main Point 3 — Security constraints**
- GST enforces strict IT security protocols — complicates server access
- Permissions must be clarified with IT before environment can be fully explored
- High security necessary to protect production data

---

## Key Point H: Production Outage (Side Incident)

**Production server went down mid-meeting — AWS connectivity issue**

Not meeting-critical but flagged during session. Production outage occurred while meeting was in progress; AWS log access was blocked. Resolved separately.

**Main Point 1 — Incident summary**
- Production server went down during meeting
- AWS log access denied despite valid IAM account
- Impacted operational departments (production, shipping)

**Main Point 2 — Response**
- Stakeholders notified via direct communication channels
- SAP integration discussion continued in parallel
- Server investigation and resolution deferred until after meeting

---

## Next Steps

| # | Action | Owner | Dependency |
|---|--------|-------|------------|
| 1 | Define and document MAIA custom fields required for GST integration | MAIA team | Requirements gathering session |
| 2 | GST IT to provision SAP UAT instance access for MAIA | GST IT | IT security approval |
| 3 | MAIA set up dev server mirroring GST production data | MAIA dev | UAT access granted |
| 4 | Collect full list of GST SAP custom/UDF fields — **GST must prepare and send list; Gareth to follow up** | MAIA + GST | Requirements session |
| 5 | Map standard service layer coverage vs custom endpoint gaps | MAIA dev | Field list collected |
| 6 | Document stock transformation rules and item mappings | MAIA + GST | Requirements session |

---

## See Also

- [[GST SAP Vendor __ Mindhive meeting transcript v2]]
- [[03 - Clients/Active Cooking Clients]]
