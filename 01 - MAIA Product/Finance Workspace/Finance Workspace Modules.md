---
owner: Gareth
status: approved
last_reviewed: 2026-02-21
---

# Finance Workspace Modules - Complete Documentation

**Last Updated:** December 2025
**Environment:** MAIA OMS Dev (`https://maia-oms-dev.vercel.app`)
**Workspace:** Finance Module

## Overview

The Finance workspace in MAIA OMS provides a comprehensive suite of modules designed to manage financial operations, invoicing, payment collection, accounts receivable, credit management, and financial reporting.

---

## Overview Section

### Dashboard
**URL:** `/finance`

The Finance Dashboard serves as the central command center for financial operations. It provides real-time visibility into key financial metrics, outstanding receivables, payment collection status, cash flow indicators, and critical alerts that require immediate attention.

**Status:** Coming soon

**Who it helps:** Finance Managers, CFOs, Finance Operations Leads

**Expected outcomes:**
- Quick financial overview of cash position, outstanding receivables, payment trends
- Better prioritization of overdue accounts and high-value transactions
- Real-time understanding of cash flow, collection rates, and financial health

**Business Impact:**
- Improves Cash Flow Management through early identification of collection issues
- Enables Data-Driven Decisions with financial metrics
- Reduces Financial Risk by identifying aging receivables and potential bad debt early

---

### My Tasks
**URL:** `/finance/tasks`

Provides a personalized work queue for each finance team member. Displays all assigned financial tasks such as processing payments, matching receipts to invoices, approving credit notes, following up on overdue accounts, or reconciling transactions.

**Status:** Coming soon

**Who it helps:** Accounts Receivable Clerks, Finance Officers, Credit Managers, Supervisors

**Business Impact:** Increases productivity, reduces errors from missed/duplicated work, enables performance tracking.

---

### Daily Digest
**URL:** `/finance/daily-digest`

Provides a comprehensive summary of everything that happened in finance operations over the past 24 hours. Consolidates key information including new invoices issued, payments received, credit notes processed, outstanding balances, and financial metrics.

**Status:** Coming soon

**Who it helps:** Finance Managers, Shift Supervisors, Finance Leads

**Business Impact:** Improves communication, enables better planning, reduces financial surprises.

---

## Accounting Section

### General Ledger
**URL:** `/finance/general-ledger`

The master accounting record that contains all financial transactions of the company. Organizes transactions by accounts (assets, liabilities, equity, revenue, expenses) and provides a complete record of all financial activities.

**Status:** Coming soon

**Who it helps:** Accountants, Finance Managers, CFOs, Auditors

**Business Impact:** Financial accuracy, audit compliance, regulatory compliance, internal controls.

---

### Creditors
**URL:** `/finance/creditors`

Manages accounts payable — tracks all supplier invoices (bills), amounts owed, payment due dates, and payment status. Ensures suppliers are paid on time.

**Status:** Coming soon

**Who it helps:** Accounts Payable Team, Finance Managers, Procurement Team, CFOs

**Business Impact:** Maintains supplier relationships, optimizes cash flow, prevents late payment penalties.

---

### Debtors
**URL:** `/finance/debtors`

Manages accounts receivable — tracks customer invoices, payment due dates, payment status, and outstanding balances. The receivables management center.

**Status:** Coming soon

**Who it helps:** Accounts Receivable Team, Finance Managers, Credit Managers, CFOs

**Business Impact:** Improves cash flow, reduces bad debt, maintains financial accuracy.

---

## Billings Section

### Sales Orders
**URL:** `/finance/orders`

Provides the finance team's view of customer sales orders. Includes reviewing orders for billing, tracking order status, monitoring orders awaiting invoicing, and ensuring orders are properly processed for financial purposes.

**Who it helps:** Finance Managers, Billing Clerks, Accounts Receivable Team, Finance Officers

**Business Impact:** Ensures accurate billing, improves cash flow, reduces billing errors.

---

### Invoices
**URL:** `/finance/invoices`

Finance workspace view of all customer invoices. Includes creating invoices from sales orders, managing invoice status, tracking payment status, handling invoice adjustments, and maintaining invoice records.

**Who it helps:** Finance Managers, Billing Clerks, Accounts Receivable Team, Customer Service

**Business Impact:** Ensures revenue recognition, improves cash flow, reduces billing errors, audit compliance.

---

### Credit Notes
**URL:** `/finance/credit-notes`

Handles issuing credits to customers when they are overcharged, receive damaged goods, return products, or when pricing adjustments are needed. Credits reduce the customer's outstanding balance.

**Who it helps:** Finance Managers, Accounts Receivable Team, Customer Service, Finance Officers

**Business Impact:** Improves customer satisfaction, maintains accurate accounts, reduces disputes, audit compliance.

---

### Debit Notes
**URL:** `/finance/debit-notes`

Handles issuing additional charges to customers when they are undercharged, additional services are provided, or when adjustments need to be made to increase a customer's balance.

**Who it helps:** Finance Managers, Billing Clerks, Accounts Receivable Team, Sales Team

**Business Impact:** Ensures complete revenue capture, maintains accurate accounts, reduces revenue loss.

---

## Payments Section

### Receipts
**URL:** `/finance/receipts`

Handles recording customer payments. When customers pay invoices, finance creates receipts to record the payment, match it to specific invoices, and update customer account balances.

**Who it helps:** Accounts Receivable Clerks, Finance Officers, Cashiers, Finance Managers

**Business Impact:** Improves cash flow, reduces payment errors, enables reconciliation, financial accuracy.

---

### Vouchers
**URL:** `/finance/vouchers`

Handles various financial vouchers including payment vouchers, journal vouchers, and adjustment vouchers used for internal accounting entries, payment authorizations, and financial adjustments.

**Who it helps:** Finance Managers, Accountants, Finance Officers, Auditors

**Business Impact:** Audit compliance, financial accuracy, internal controls, fraud prevention.

---

## Customer Service Section

### Customer Issues
**URL:** `/finance/customer-issues`

Tracks problems reported by customers related to financial operations: billing disputes, payment issues, invoice errors, credit note requests, or other finance-related customer complaints.

**Who it helps:** Customer Service Team, Finance Managers, Accounts Receivable Team, Billing Clerks

**Business Impact:** Improves customer satisfaction, reduces churn, drives process improvement.

---

### Issues
**URL:** `/finance/issues`

General issue tracker for finance operations. Tracks internal operational issues like payment processing problems, reconciliation discrepancies, system errors. Not customer-facing.

**Who it helps:** Finance Operations Team, IT Support, Finance Managers, Process Improvement Team

**Business Impact:** Reduces downtime, prevents recurring problems, improves operational stability.

---

## Others Section

### Import & Export
**URL:** `/finance/data-jobs`

Provides access to data jobs for bulk imports/exports relevant to finance operations including master data onboarding, bulk updates, and standardized exports for external analysis and integrations.

**Who it helps:** Finance Ops/Admins, Accountants, Integrations/IT

**Business Impact:** Efficiency, accuracy, integration readiness.

---

## Other Modules

### Customers
**URL:** `/finance/customers`

Finance team's view of customer information focused on financial aspects: credit limits, payment terms, outstanding balances, payment history, and credit status. The "customer financial profile."

**Who it helps:** Finance Managers, Credit Managers, Accounts Receivable Team, Finance Officers

**Business Impact:** Enables credit decisions, improves collection, risk management, financial planning.

---

## Summary

**Key Benefits:**
- **End-to-End Financial Visibility** - Complete view from invoicing to cash collection
- **Operational Efficiency** - Streamlined processes reduce costs and improve productivity
- **Accuracy & Compliance** - Proper tracking and documentation ensure accuracy and meet audit requirements
- **Cash Flow Management** - Tools and reports help optimize cash flow and collection
- **Risk Management** - Credit management and aging reports help identify and manage financial risk

**Target Users:**
- Finance managers and CFOs
- Accounts receivable clerks and officers
- Credit managers and analysts
- Billing clerks and finance officers
- Accountants and auditors

---

## See Also

- [[Finance User Persona]]
- [[All Workspace Modules]]
- [[Invoice Workflow Guide]]
- [[Credit Note Workflow Guide]]
- [[Receipt Workflow Guide]]
- [[Debit Note Workflow Guide]]
