# ERPNext DocTypes Reference for MAIA Extension

## What is a DocType?
In Frappe/ERPNext, a **DocType** defines the structure of a document (like a database table + metadata). It includes fields, permissions, naming rules, and client/server scripts. Examples: `Sales Order`, `Item`, `Journal Entry`. All data lives in DocType instances (called "Documents").

## Top DocTypes for MAIA Extension

### Foundation/Core (Always Relevant)
| DocType | Why Critical for MAIA |
|---------|------------------------|
| **`Item`** | Central to Sales, Stock, Manufacturing. MAIA extends for industry-specific attributes (e.g., fabric specs, ingredient details). |
| **`Customer` / `Supplier`** | Master data for Buying/Selling. MAIA adds custom fields (e.g., customer tier, supplier certification). |
| **`Company`** | Multi-tenant foundation. MAIA features need company-aware logic (taxes, accounts, warehouses). |
| **`User` / `Role`** | Permission system. MAIA creates custom roles (e.g., "MAIA QC Inspector") or field-level permissions. |

### Transactional Core (Where Business Logic Lives)
| DocType | Why Critical for MAIA |
|---------|------------------------|
| **`Sales Order`** | MAIA adds validation (e.g., "check material availability"), custom fields (e.g., "season"), or auto-generates from MAIA modules. |
| **`Purchase Order`** | MAIA adds PO approval workflows, custom costing fields, or supplier scorecard integration. |
| **`Stock Entry`** | **Most customized DocType**. MAIA creates custom types (e.g., "Fabric Issue to Cutting") with specific fields and automatic GL impacts. |
| **`Journal Entry`** | Core accounting. MAIA auto-creates JEs for events (e.g., "on production completion") or adds custom accounts. |
| **`Payment Entry`** | MAIA extends for industry-specific payment terms (e.g., milestone-based) or bank integrations. |

### Module-Specific Masters (Extension Points)
| DocType | Why Critical for MAIA |
|---------|------------------------|
| **`Bill of Materials` (BOM)** | Critical for manufacturing MAIA. Extend with phantom BOMs, operation-specific scrap, alternate items. |
| **`Work Order`** | Where shop floor instructions live. MAIA adds custom operations, quality checkpoints, material rules. |
| **`Warehouse`** | MAIA adds zones (e.g., "bonded", "quarantine"), put-away rules, or cycle count schedules. |
| **`Cost Center`** | MAIA uses for profitability tracking (e.g., per production line, per client project). |
| **`Project`** | If MAIA does project-based work, extend with custom phases, budget types, billing milestones. |

### Automation & Integration (Where MAIA Logic Hooks In)
| DocType | Why Critical for MAIA |
|---------|------------------------|
| **`Workflow`** | MAIA defines custom workflows (e.g., "Fabric Approval → Cutting → QC → Shipping") with states, actions, alerts. |
| **`Notification`** | MAIA creates custom alerts (e.g., "notify planner when stock < safety stock for A-items"). |
| **`Webhook`** | For integrating MAIA with external systems (e.g., POS, e-commerce, IoT sensors). |
| **`API Endpoint`** | If MAIA exposes services (e.g., for mobile apps or 3PL integration). |

### Reporting & Analytics (MAIA Value-Add)
| DocType | Why Critical for MAIA |
|---------|------------------------|
| **`Report`** | MAIA builds custom reports (e.g., "Fabric Yield Variance", "On-Time Delivery by Supplier"). |
| **`Dashboard`** | MAIA-specific dashboards for executives (e.g., "Production Efficiency", "Working Capital"). |
| **`Print Format`** | MAIA needs custom formats for industry documents (e.g., cutting tickets, lab certificates). |

## How to Use This for MAIA Feature Development

### When Reviewing a MAIA PRD (prd.md):
1. **Identify touchpoints**: For each requirement, ask:
   - Which master data does this affect? (Item, Customer, etc.)
   - Which transactions does it create/modify? (SO, PO, Stock Entry, etc.)
   - What automation is needed? (Workflow, Notification, Server Script)
   - What reporting is required? (Custom Report, Dashboard)

2. **Example**: If MAIA PRD states:
   > "Track fabric shrinkage during cutting to adjust BOM consumption automatically"
   
   Focus on:
   - **DocTypes to extend**: `Item` (add shrinkage %), `Bill of Materials` (link shrinkage to consumption), `Stock Entry` (auto-adjust issue qty on cutting)
   - **Automation needed**: Server Script on `Stock Entry` submit (validate operation = "Cutting", calculate adjustment)
   - **Report**: "Fabric Shrinkage Variance Report" (Item-wise actual vs. standard shrinkage)

### Where to Find DocType Docs in ERPNext:
1. Go to `https://docs.frappe.io/erpnext/`
2. Open the relevant module menu (Stock, Manufacturing, etc.)
3. Look for:
   - **"Masters"** → Core Item, Warehouse, BOM, etc.
   - **"Transactions"** → Sales Order, Purchase Invoice, Stock Entry, etc.
   - **"Reports"** → Standard reports to extend
   - **"Automation"** → Workflows, Notifications, Server Scripts

## ⚠️ Critical Customization Rules for MAIA:
- **Never modify core DocType files** – use:
  - **Custom Fields** (for adding data)
  - **Server Scripts** (for validation/automation)
  - **Custom App** (for major new functionality)
- **Always test upgrades** – run `bench update` in a sandbox with your MAIA customizations
- **Prefix MAIA fields** – use `maia_` (e.g., `maia_fabric_shrinkage`) to avoid conflicts
- **Document in PRD**: Each feature's `design.md` should list:
  - Extended DocTypes
  - Added/Modified fields
  - Server/Client scripts used
  - Workflows/notifications created

## MAIA KB Integration:
- Store this reference in: `02 - PM Playbook/Processes/`
- Link from client-specific implementation notes in `03 - Clients/Active Cooking Clients/`
- Update when new MAIA features introduce DocType extensions