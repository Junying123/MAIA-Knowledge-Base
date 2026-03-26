---
owner: Gareth
status: draft
last_reviewed: 2026-03-18
client: Holsen
---

# Feature Requests — Holsen <> MH MAIA Setup & Testing
Meeting Date: March 18, 2026
Attendees: Gareth, Chinzh (Holsen), Brendan (MindHive), Holsenlab

---

## 1. Customer-Specific Pricing Configuration

Description:
Different customers require different pricing. Fixed-price items must be tied to specific customers, while commodity items require volume-based pricing logic.

Details:
- Manual pricing configuration needed per item SKU
- Fixed price list to be provided per customer
- Commodity items: pricing is volatile, track by volume instead of sales value

---

## 2. Role-Based Dashboard Access (User Permissions)

Description:
Different users (sales team) should have different levels of customer visibility based on their designation.

Details:
- S1, S2 — full customer access (all customers visible)
- S3 — limited to a specific customer subset
- S4 — limited to a different customer subset
- Email address required per user for account binding
- Admin access for MindHive team to monitor system usage

---

## 3. Volume-Based Dashboard Metrics

Description:
Replace sales value metrics with volume-based metrics across the dashboard, particularly for commodity items where price fluctuates.

Requested Changes:
- Annual Sales → Annual Volume
- Item-Wise Annual Sales → Item-Wise Annual Volume
- Monthly volume breakdown by product (e.g. nickel, copper)
- Customer-based filtering on volume reports

---

## 4. Product Classification System (Two-Tier)

Description:
Products need to be classified across two dimensions for compliance and operational purposes.

Details:
- Tier 1: Poison / Non-Poison
- Tier 2: Product type (e.g. cleaner, cyanide, etc.)
- Customer usage classification:
  - For electroplating use
  - For trading use
- Remark field for special customer requests
- Switch From / To position support

---

## 5. PSO (Poison Sign-Off) Form Generation

Description:
MAIA must generate PSO forms for applicable poison-classified products as part of the sales order workflow.

Details:
- Auto-generate PSO form when a poison-classified item is ordered
- Support for pre-digital format
- Chop (stamp) and signature support required by Holsen
- PSO customer list to be provided with usage classification

---

## 6. Standard Packing Size per Item SKU

Description:
Each item SKU needs a standard size/packing unit configured in the system to ensure consistency across orders, inventory, and reporting.

Details:
- Standard size field required per SKU
- Must handle products with multiple UOM options (e.g. kg, litre, drum)
- SKU differentiation logic needed for multi-UOM products

---

## 7. Chatbot — Sales Order Generation

Description:
The MAIA chatbot should be capable of generating sales orders on behalf of the sales team.

Details:
- Must respect customer-specific pricing rules
- Must respect user access permissions (S1–S4)
- Must handle PSO item checks before order generation
- Needs testing across core scenarios before UAT

---

## Notes & Dependencies

| Item | Owner | Deadline |
|---|---|---|
| Fixed price list (all items + customers) | Holsen (Chinzh) | Friday, Mar 21 |
| Customer list with S1–S4 designations | Holsen (Chinzh) | Friday, Mar 21 |
| Email addresses for account binding | Gareth | Before UAT |
| PSO customer list with usage classification | Holsen | Before UAT |
| Updated inventory with standard packing sizes | Gareth | Before UAT |
| UAT format + price data ingestion | Brendan | Friday, Mar 21 |

UAT Start: Week of March 24, 2026
Target Go-Live: End of March 2026
Transition: Parallel running with UBS system during cutover period
