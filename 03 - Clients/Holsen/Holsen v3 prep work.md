## Group 1: Compliance & Tax Documentation (C1/C3)

**C3 Delivery Tracking with Date Filters**
- Admin views all C3 deliveries filtered by date range to audit activity before Jadual C2 prep.
- Admin selects a date filter in the C3 tracking view and system returns all matching transactions with PO ref, qty, and linked DO.

**Reminder to Log C3 Transactions**
- Logistics Manager (Noor Aili) triggers a system notification to Admin when a C3 DO is confirmed but no transaction has been recorded.
- System checks for a missing C3 record on DO confirmation and notifies Admin to log the entry before it's missed.

**Record C3 Transactions in MAIA**
- Admin records each C3 stock movement (incoming and outgoing qty) so Holsen has structured data for Jadual C2.
- On stock arrival, Admin creates an incoming record; on delivery, Admin logs outgoing qty against the confirmed DO.

**Unified Filter View for C1 and C3 Records**
- Admin reviews both C1 and C3 records in one compliance view when preparing Jadual C2.
- Admin applies a period filter and sees C1 lumpsum rows per customer alongside C3 individual transaction rows in the same view.

**Bi-Monthly Reminder to Export C1/C3 Document Bundle**
- MAIA reminds Admin every 2 months to manually export the C1/C3 document bundle for SST audit submission.
- System sends a reminder, Admin triggers the export, and MAIA compiles customer invoice + supplier invoice + DO into a single package.

**C1 Compliance Workflow — DO Sign-Off, UBS Invoice Reference & Lumpsum**
- Admin signs off a DO (with UBS invoice number attached) and at period end exports a C1 lumpsum per customer directly into Jadual C2.
- Logistics submits the DO, Admin signs it off with the UBS invoice number recorded, then at period close MAIA surfaces one aggregated C1 figure per customer ready for export.

---

## Group 2: COA (Certificate of Analysis)

**Customer-Level COA Configuration**
- Admin configures whether each customer receives 1 or 2 COAs per order so the correct number is generated automatically on delivery.
- Admin sets the COA count on the customer record; system generates the configured number when a delivery is processed.

**Different COA Fields per Customer**
- Admin toggles which fields are visible per customer on a shared base template so each customer gets a tailored COA output.
- Admin opens customer COA settings, toggles field visibility, and the generated COA only shows the configured fields for that customer.

**COA Linked to Lot Number / Batch**
- Logistics Manager links each COA to its lot number and batch so it's always retrievable against a specific delivery.
- On batch delivery confirmation, COA is auto-linked to the lot record and searchable by lot number.

---

## Group 3: Delivery Order (DO) Management

**Bundle Multiple DOs into One PDF**
- Finance Manager bundles multiple DOs into a single PDF attached to one invoice for consolidated customer documentation.
- Finance Manager selects associated DOs on the invoice, system merges them into one PDF and attaches it to the invoice record.

---

## Group 5: Inventory & Lot Management

**Full Picklist Workflow**
- Logistics Manager runs a full picklist workflow from SO through to invoice, ensuring every delivery is picked against a confirmed lot and qty.
- SO triggers a picklist, Logistics selects lot via dropdown and confirms qty, DO is generated from the confirmed pick, and invoice follows.

**Picklist UI: Lot Number Dropdown with Remark Field**
- Logistics Manager selects lot numbers from a dropdown and flags issues via a remark field during picking.
- Logistics opens the picklist, sees available lots with qty and expiry, selects the correct one, and adds a remark if there's a discrepancy.

**Sticker Label per Product, Tied to Batch and Date**
- MAIA generates customer-specific sticker labels per product tied to batch and date on delivery confirmation.
- Logistics confirms a batch delivery, system generates labels in the format configured for that customer showing product name, batch, and date.

---

## Group 9: Analytics & Dashboard

**Daily Digest: Growth-Oriented Business Metrics**
- Sales Manager views a daily digest of actionable growth metrics (high-value customers, revenue trends, item performance) to drive business decisions.
- Sales Manager opens MAIA, reviews the digest, and uses insights to prioritise follow-ups, upsells, or at-risk accounts for the day.

**Item-Level Sales Query**
- Sales Manager queries items by highest and lowest sales to identify top and underperforming products.
- Sales Manager opens the item analytics view, sorts by sales volume, and exports the results for review.

---

## Group 11: Reminders & Alerts

**C3 Transaction Logging Reminder**
- Admin receives a reminder when a C3 DO is confirmed but no transaction has been logged within X days, preventing missed Jadual C2 entries.
- After Logistics confirms a C3 DO, if X days pass with no record logged, system sends a reminder to Admin.

**Jadual C2 Export Reminder**
- Admin receives a periodic reminder aligned to the 2-month Jadual C2 submission cycle to trigger the C1/C3 document bundle export.
- As the reporting period nears its end, system notifies Admin to log in and manually trigger the export from MAIA.
