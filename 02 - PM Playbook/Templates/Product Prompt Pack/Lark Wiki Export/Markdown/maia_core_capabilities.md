**maia_core_capabilities**

**MAIA Core Product Capabilities Matrix**

This document provides comprehensive answers regarding the core capabilities of the MAIA platform, based on the hybrid architecture of ERPNext (Frappe framework) and the MAIA AI/Chatbot middleware.

**1. Account / Company**

**Company profile:** Configured via the Company module. It captures Company Name, Abbreviation, Default Currency, Chart of Accounts, Tax IDs, Default Bank Accounts, and Registered Addresses.

**Multiple legal entities:** Yes, a single MAIA account (tenant) natively supports multiple distinct Companies/Legal Entities.

**Branches / outlets:** Yes, branches and outlets can be configured as distinct Cost Centers, Warehouses, or even separate Companies depending on accounting needs. They control revenue/expense tracking, inventory segregation, and localized reporting.

**Default entity / outlet:** Yes, defaults can be assigned system-wide (Global Defaults) or at the User level via User Permissions (e.g., defaulting a specific user to \"Outlet A\").

**Currency:** Yes, multi-currency is fully supported. Each company has a base currency, and customers can have specific billing currencies. Exchange rates are maintained centrally.

**Tax configuration:** Tax templates, item tax rates, and tax rules (inclusive/exclusive) are fully configurable per account and per company.

**Timezone / locale:** Yes, timezone, date formats, and number formats can be configured globally and overridden at the individual User level.

**Account-level business settings:** Standard configurations include Fiscal Years, Chart of Accounts structure, System Settings (security policies, backups), Payment Gateways, and Email Domains.

**2. Users**

**User creation:** Provisioned via the User module. Requires an email, name, and assignment of Role Profiles.

**User activation / deactivation:** Yes, Administrators can instantly activate/deactivate users by toggling the \"Enabled\" flag via the UI without any code changes.

**Multiple roles per user:** Yes, a single user can hold multiple roles simultaneously. Their permissions will be the union of all assigned roles.

**User-specific settings:** Yes, two users with the identical \"Sales User\" role can behave differently. User Permissions allow restricting a user\'s data visibility (e.g., restricting User A to Territory X, and User B to Territory Y).

**User-to-customer assignment:** Yes, customers can be restricted to specific users via Sales Person assignments or User Permissions.

**User-to-warehouse assignment:** Yes, users can be restricted to view and transact out of specific Warehouses only.

**User-to-outlet / entity assignment:** Yes, users can be restricted to specific Companies or Cost Centers.

**Authentication / login:** Local password (with complexity policies), Two-Factor Authentication (2FA), LDAP, and OAuth/SSO (Google, Microsoft) are all supported and configurable per client.

**3. Roles & Permissions**

**Standard roles:** Core roles include System Manager, Sales Manager, Sales User, Accounts Manager, Accounts User, Stock Manager, Stock User, Purchase Manager, etc.

**Custom roles:** Yes, Product/Administrators can dynamically create new Roles and Role Profiles from the UI without development.

**View, Create, Edit, Delete, Submit permissions:** Yes, all of these actions are granularly configurable per Role via the Role Permissions Manager.

**Approve permissions:** Yes, approval permissions are managed by the Workflow engine, where specific roles are required to transition a document from \"Pending Approval\" to \"Approved\".

**Override permissions:** Yes, specific override actions (like bypassing a credit limit) can be granted to specific managerial roles via workflow configurations.

**Download / export permissions:** Yes, Print, Email, and Export (to Excel/CSV) permissions are distinctly configurable per role.

**Record ownership access:** Yes, the \"If Owner\" permission rule restricts users so they can only view and edit records that they themselves created.

**Permission granularity:** Highly granular. Permissions apply account-wide, but can be restricted by Role, by User, by Entity, and down to the specific field level (e.g., hiding the \"Cost\" field from Sales Users).

**Permission enforcement:** Enforced heavily in both the Frontend (UI elements are hidden) and the Backend API (REST endpoints reject unauthorized requests).

**4. Customers**

**Customer visibility:** Yes, easily restricted via User Permissions or Territory assignments.

**Assigned customers only:** Yes, a Sales User can be configured to only see the Customers explicitly assigned to them.

**Customer ownership:** Yes, MAIA utilizes the Sales Person and Sales Team structures to assign ownership.

**Customer creation/editing:** Configurable via Role Permissions. Typically restricted to Sales Managers or Admin.

**Customer deletion/deactivation:** Customers can be deactivated (\"Disabled\" flag). Hard deletion is only permitted if the customer has no linked transactions.

**Customer search:** Searchable fields are configurable (e.g., searching by phone number, ID, or name).

**Customer matching:** The chatbot middleware utilizes semantic/fuzzy matching against Phone, Name, Email, and External IDs to map incoming messages to existing records. Confidence thresholds determine if it auto-matches.

**Duplicate handling:** Core provides deduplication warnings upon creation. Administrators have access to a \"Merge\" tool to combine duplicate customer records.

**Required customer fields:** Yes, mandatory fields can be customized per client via the Customize Form tool.

**External customer ID:** Captured via custom fields or the Integration tables to map MAIA records 1:1 with external ERPs. It dictates sync behavior.

**Payment terms:** Yes, Payment Terms Templates are configurable, stored against the customer, and automatically applied to their orders/invoices.

**Customer groups / segments:** Yes, the Customer Group module supports hierarchical categorization which can dynamically trigger specific Pricing Rules or Credit Limits.

**5. Items / Products**

**Item visibility/creation/editing:** Fully configurable via Role Permissions.

**Active / inactive items:** The \"Disabled\" flag hides items from searches and prevents their use in new transactions, whilst preserving historical data.

**Item search:** Search fields are configurable (e.g., Name, Code, Barcode, Description).

**Item matching:** Chatbot/OCR employs semantic and alias matching to map messy customer inputs (or PO line items) to structured MAIA Item Codes.

**Item aliases / synonyms:** Yes, standard Barcode/Alias tables can store account-specific synonyms to improve matching accuracy.

**Customer-specific item codes:** Yes, the Item Customer Detail table allows you to map a specific Customer\'s internal part number to your MAIA Item Code.

**UOM & Alternative UOM:** Highly configurable. Items have a Default UOM, Sales UOM, and Purchasing UOM. Multiple alternative UOMs (e.g., Box, Pallet, Unit) are natively supported.

**UOM conversion:** UOM Conversion factors are configured directly on the Item master record and can differ per client/item.

**Item categories / groups:** Yes, Item Groups are hierarchical and control default behaviors like accounting ledgers, tax rules, and pricing logic.

**6. Pricing**

**Base / standard price:** Originates from the Item Price record linked to the default Standard Selling Price List.

**Customer-specific pricing:** Yes, configurable via Pricing Rules or by assigning a specific Price List directly to a Customer record.

**Price lists:** Multiple price lists (e.g., Retail, Wholesale, Tier A) are natively supported. Selected automatically based on Customer defaults or campaign rules.

**Price selection priority:** Managed by the Pricing Rule engine. If multiple rules apply, the system respects a configured \"Priority\" integer, or can be set to always pick the lowest price.

**Price / Cost visibility:** Yes, field-level permissions can hide Selling Price or Valuation Rate (Cost) fields from selected roles.

**Price editing:** Yes, permission to manually edit the Rate field on an order can be disabled for specific roles.

**Manual price override:** Can be disabled, or configured to trigger a Workflow approval if the manual price breaches a threshold.

**Minimum selling price / Max discount:** Yes, minimum margin checks and Maximum Discount % thresholds are configurable on the item or via Pricing Rules.

**Discount permissions:** Yes, discount authority (e.g., Sales User can give 5%, Manager can give 15%) is handled via Pricing Rules and Workflows.

**Quantity / tier pricing:** Yes, standard behavior. Pricing Rules support Min Qty and Max Qty brackets for volume discounts.

**Zero / missing price:** Configurable. The system can be set to Block the transaction, Warn the user, or Allow zero-value items.

**Price exception approval:** Yes, if a price violates rules, the order is saved as a \"Draft\" and enters a Workflow requiring Manager approval.

**7. Credit Control**

**Credit limit source:** Defined on the Customer record or inherited from the Customer Group.

**Credit exposure source:** Dynamically calculated based on outstanding (unpaid) Sales Invoices, plus (optionally) unbilled Sales Orders.

**Draft/Submitted order treatment:** Draft orders do *not* contribute to exposure. Submitted/Unfulfilled orders *can* contribute (this is a configurable toggle).

**Over-limit behaviour:** Configurable. Can be set to a \"Hard Stop\" (Block), or \"Warn\" (which can then route the order to an Approval Workflow).

**Warning vs hard block:** Fully configurable per client.

**Credit override:** Yes, roles with \"Credit Controller\" permissions can override blocks, or approve the pending workflow.

**Credit exception customers:** Yes, credit control can be bypassed for specific customers by checking the \"Bypass Credit Limit Check\" flag.

**Overdue balance behaviour:** Yes, separate from the overall limit, the system can block new orders if the customer has *any* invoices overdue beyond a specified parameter.

**8. Approvals & Overrides**

**Approval triggers:** Orders, price exceptions, discount thresholds, and credit limit breaches can all trigger an approval requirement.

**Approval thresholds:** Yes, conditional logic (e.g., Discount \> 20% or Amount \> \$10,000) within the Workflow engine allows thresholds to vary by client.

**Approver roles:** Configurable in the Workflow engine (e.g., routing to \"Finance Manager\" vs \"Sales Director\").

**Multi-level approval:** Yes, core MAIA supports unlimited sequential or parallel approval levels.

**Rejection & Resubmission:** Rejected documents revert to a \"Draft\" or \"Rejected\" state. They can be amended, fixing the issue, and resubmitted for approval without starting from scratch.

**9. Sales Orders**

**SO creation permission:** Configurable via Role Permissions.

**Draft creation:** Yes, documents are created in \"Draft\" state first. Chatbot interactions can be configured to auto-submit if confidence/rules are met.

**Confirmation before creation:** Yes, chatbot flows typically require explicit confirmation before finalizing a draft into a Submitted SO.

**Mandatory fields & Defaults:** Highly configurable per client via the Customize Form tool and Global Defaults.

**Order numbering:** Driven by configurable Naming Series templates (e.g., SO-.YYYY.-.####).

**Order status flow:** Controlled by standard lifecycle (Draft -\> Submitted -\> Completed/Billed), which can be augmented by Custom Workflows.

**Editing after submission:** By default, submitted orders cannot be modified. They must be Cancelled and Amended (maintaining a strict audit trail).

**Cancellation & Deletion:** Configurable by role. Cancellation retains the record; Deletion removes it (usually restricted to System Admin on drafts only).

**Order ownership & Visibility:** Tied to the user who created it and the assigned Sales Person. Visibility can be heavily restricted.

**Duplicate detection:** The system prevents duplicate Customer PO Numbers on Sales Orders.

**Stock, Price & Credit validation:** Validation triggers upon hitting \"Save\" (creates Draft) and \"Submit\" (commits transaction). Stock can be configured to allow negative balances or hard block.

**10. Quotation & Documents**

**Quotation support:** Yes, fully supported core workflow. Can be converted directly to Sales Orders. Expiry dates are standard and configurable.

**Supported document types:** Quotation, Sales Order, Delivery Note, Sales Invoice, Payment Entry, Credit Note, Return Note.

**PDF Template & Branding:** Document layouts (HTML/Jinja Print Formats) and Letter Heads (Logos, footers) are fully configurable per client via the UI without development.

**Fields displayed:** Columns and fields shown on printouts can be customized via the Print Format Builder.

**ERP-format reproduction:** Matching a legacy ERP format identically is possible via configuration (writing custom HTML/CSS Print Formats), requiring technical configuration but no core code changes.

**11. Warehouse / Inventory**

**Multiple warehouses:** Yes, standard support for nested warehouse trees per account.

**Warehouse visibility/assignment:** Restricted via User Permissions.

**Default warehouse:** Can be configured globally, per user, or per item.

**Stock source:** Driven by the immutable Stock Ledger Entry table.

**Querying stock:** Users can view stock by specific warehouse via the Stock Balance reports.

**Available vs physical stock:** MAIA tracks both \"Actual Qty\" (physical) and \"Projected Qty\" (actual - reserved for orders + expected). Sales validations check Projected Qty.

**Negative stock:** System-wide configuration to either \"Allow Negative Stock\" or block transactions when insufficient.

**12. Chatbot & AI**

**Inputs:** WhatsApp text is standard. Processing Images, PDF POs, and Voice-notes is handled natively via the MAIA middleware pipeline (OCR/Whisper integrations).

**Supported languages:** LLM-driven intent parsing supports multiple languages seamlessly (English, Malay, Mandarin).

**Configurable behaviours:** Greetings, active intents, response tone, verbosity, and confirmation thresholds are heavily configurable per tenant in the middleware layer.

**Clarification & Fallback:** If the AI confidence falls below a set threshold, it will ask the user clarifying questions. If it continually fails, it routes the conversation to a human agent inbox.

**AI Matching (Customers/Items):** Uses fuzzy semantic matching. Account-specific aliases can be injected to improve accuracy. Ambiguous matches prompt the user to select from a list.

**13. Integration & Source of Truth**

**Supported ERPs:** Existing adapters for AutoCount, SQL Accounting, Xero, etc.

**Deployment model:** Cloud instances use API integrations. On-premise legacy ERPs connect via secure tunnel/connectors.

**Sync behaviour:** Frequency, direction (bidirectional vs one-way), and external ID mapping are entirely configurable based on the integration adapter setup.

**Failure & Retry:** Background queue workers (Celery) handle automatic retries for temporary network failures. Persistent failures generate an Error Log and notify administrators.

**Source of Truth:** Highly flexible. Implementations define whether MAIA or the ERP owns Master Data (Customers/Items). Typically, MAIA owns Sales Orders, while the ERP owns Invoicing and Payments.

**Conflict resolution:** Generally relies on a timestamp-based \"latest wins\" approach or an explicit \"ERP is master\" policy.

**14. Data Import & Multi-Entity**

**Data Import:** The standard Data Import tool supports CSV/Excel for bulk loading Customers, Items, Pricing, etc. It dynamically includes any custom fields added for the client. Re-import updates existing records based on ID.

**Multi-Entity:** A single tenant can host multiple Companies. Data separation is strict. Master data (Items, Customers) can be shared, while transactional data (Pricing, Warehouses, Orders, Ledgers) remains isolated per entity.

**15. Exceptions, Audit & Reporting**

**Exceptions:** If prices are missing, stock is low, or credit is breached, MAIA can be configured to either hard block the user, or generate a Draft and initiate an Approval Workflow.

**Audit / History:** Every record has an activity log. The Version module captures granular field-level before/after changes. History retention is configurable.

**Reporting:** MAIA includes standard Dashboards and a Report Builder for custom tabular/chart reports. Access to reports is heavily governed by Role Permissions. Client-specific KPIs can be configured without development.

**16. Tenant / Technical Configuration**

**Feature flags / Tenant config:** Feature toggles are managed via Domain Settings or the site_config.json tenant configuration file.

**Database / Env:** Site-level behaviour is in the DB (Global Defaults). Infrastructure configs (API keys, ports) live in environment variables.

**Deployment required:** Minor UI changes (Print Formats, Workflows, Custom Fields) happen live. Major structural schema changes, Python business logic updates, or new middleware adapters require a deployment/restart.
