---
owner: Gareth
status: review
last_reviewed: 2026-07-02
---

# T.C.K Sdn Bhd x MAIA — Project Scope and Meeting Links

Prepared for implementation handover | 1 July 2026

## 1. Package Contents

| File | Purpose |
| --- | --- |
| 01_Signed Proposal - T.C.K Sdn Bhd x MAIA Proposal.pdf | Signed proposal and commercial agreement. |
| 02_Project Scope and Meeting Links - T.C.K Sdn Bhd x MAIA.docx | Implementation scope summary, project boundaries, and meeting recording links. |

## 2. Project Overview

**Client:** T.C.K Sdn Bhd
**Product:** MAIA
**Signed proposal date:** 26 June 2026
**Project intent:** Implement MAIA as an internal B2B order processing and control layer that sits on top of AutoCount. AutoCount remains the source of truth, while MAIA helps users process WhatsApp-driven orders more cleanly, prepare draft sales orders, apply agreed pricing and approval rules, support document handling, and improve operational visibility.

## 3. Business Context

- Orders are currently received mainly through WhatsApp groups.
- Orders are manually forwarded internally and keyed into AutoCount before documents are generated.
- Warehouse picking is coordinated separately, commonly through manually compiled Excel or Word-style lists.
- Approximate volume discussed: around 50 orders per day and roughly 1,000 orders per month.
- The operational risk is mainly manual checking, repeated key-in, inconsistent pricing handling, and fragmented visibility across WhatsApp, AutoCount, and internal follow-ups.

## 4. Phase 1 Scope

| Area | Included Scope |
| --- | --- |
| Order intake | Internal order intake forwarding from customer WhatsApp messages to MAIA. |
| Draft sales order preparation | MAIA prepares draft sales orders for human review and confirmation before submission. |
| AutoCount-linked submission | Confirmed order outputs are submitted into AutoCount within the agreed integration scope. |
| Document handling | Sales order, invoice, delivery order support, and pick list support are included. |
| Backend visibility | Order status, document trail, activity trail, and agreed operational tracking are available in the backend workspace. |
| Warehouse handoff | Basic pick-list support and basic fulfillment status visibility through MAIA-assisted workflow. |

## 5. Confirmed Customizations and Setup Items

| Type | Item | Description | Commercial Treatment |
| --- | --- | --- | --- |
| Customization | Customer grouping with markup | Allows customers to be grouped into pricing groups and applies agreed markup by group during order creation. | RM8,000 total customization value, waived / FOC. Payable amount: RM0. |
| Customization | Weekly base price upload / update | Allows users to update weekly item base prices using a MAIA-provided upload template. MAIA uses the latest uploaded base prices during order preparation. | RM8,000 total customization value, waived / FOC. Payable amount: RM0. |
| Setup | Min/max selling price guardrails | Configures minimum and maximum selling price limits so MAIA can check pricing against agreed limits. | Included as setup. |
| Setup | High-value order approval flow | Configures an order value threshold so orders above the threshold are routed for approval before final submission into AutoCount. | Included as setup. |

## 6. Commercial Summary

| Item | Commercial |
| --- | --- |
| One-time Phase 1 implementation fee | RM20,000 |
| Customization value | RM8,000, waived / FOC |
| Total one-time payable | RM20,000 |
| Monthly subscription | RM2,500/month |
| Monthly order volume tier | Up to 2,500 orders/month |
| Payment terms | 50% upfront upon project commencement; 50% upon completion of UAT. |

## 7. Third-Party Costs Not Included in Monthly Subscription

- Cloud hosting and cloud infrastructure charges
- ChatGPT / OpenAI API key or usage fees
- WhatsApp Business API charges
- WhatsApp number registration or subscription fees
- WhatsApp vendor / BSP charges
- AutoCount vendor charges
- Other third-party platform fees unless explicitly stated in writing

## 8. Standard Implementation Timeline

| Stage | Timeline | Scope |
| --- | --- | --- |
| Kickoff and workflow confirmation | Week 1 | Confirm order flow, user roles, AutoCount access, pricing rules, approval rules, document formats, and implementation PICs. |
| Configuration and integration setup | Week 2 to Week 3 | Set up MAIA workflows, AutoCount integration, customer/item references, document handling, backend workspace, pricing setup, and approval rules. |
| Customization setup | Week 3 to Week 4 | Configure customer grouping with markup and weekly base price upload/update template. |
| User acceptance testing | Week 5 | Test agreed workflows, document outputs, AutoCount submission, pricing logic, approval flow, and backend visibility. |
| Training and go-live support | Week 6 | Train agreed users, support go-live, monitor initial usage, and resolve issues within agreed scope. |

**Timeline note:** The 6-week target depends on AutoCount access, vendor coordination, turnaround time for data/rule clarification, and timely UAT feedback.

## 9. Client Inputs Required

- Relevant system access or vendor coordination
- Customer, item, and pricing references
- Customer grouping rules and markup rules by customer group
- Weekly base price structure or existing price format
- Min/max selling price references
- Order value approval threshold and approver names or roles
- Sample documents and existing flow references
- Internal PICs for review, testing, and sign-off

## 10. Scope Boundaries and Exclusions

- Full ERP replacement is not included. AutoCount remains the source of truth.
- Full warehouse management system is not included.
- Deeper warehouse execution logic beyond basic pick-list support is not included unless separately scoped.
- Customer-facing ordering chatbot and full customer-facing B2B self-service ordering rollout are not included unless separately scoped.
- Complex multi-level approval matrices beyond the agreed high-value order approval flow are not included unless separately scoped.
- Custom dashboards or reports beyond agreed backend visibility are not included unless separately scoped.
- Additional customizations not listed in the signed proposal are separately scoped and quoted.

## 11. Meeting Recording Links

| Meeting | Fireflies Link | Purpose / Notes |
| --- | --- | --- |
| Intro Meeting | https://app.fireflies.ai/view/Mindhive-x-Maxfresh-Sdn-Bhd-Introductory-Meeting::01KN3YQ7NEE125K00JR90D95Z0 | Initial discovery and business context. |
| Proposal Walkthrough | https://app.fireflies.ai/view/Mindhive-x-Maxfresh-Proposal-Walkthrough::01KPYXM8ZFHN3PV2V4QEC3E8QF | Proposal walkthrough and scope discussion. |
| Proposal Finalization 1 | https://app.fireflies.ai/view/Max-Fresh-Proposal-Finalization::01KTN0HVZTN5HM9KNNKG17SWW6 | First proposal finalization discussion. |
| Proposal Finalization 2 | https://app.fireflies.ai/view/Maxfresh-proposal-finalization::01KV7QTQCJFR723ESD495Y70CS | Second proposal finalization discussion. |
| Proposal Finalization 3 | https://app.fireflies.ai/view/Max-Fresh-Proposal-Finalization::01KVCN76P7NVTVNHNDCW1PQBB9 | Third proposal finalization discussion. |
| Proposal Finalization 4 | https://app.fireflies.ai/view/Maxfresh-Finalization::01KVSBTRFBPVEBSJEF4KGPZ6KN | Final finalization discussion before signing. |

## 12. Handover Note

**Important:** The signed proposal remains the source of truth for commercial terms, scope boundaries, assumptions, and exclusions. This scope document is a practical implementation handover summary and should be read together with the signed proposal included in this ZIP package.

## See Also

- [[03 - Clients/Active Cooking Clients/T.C.K/Onboarding/Detailed Onboarding Handover - T.C.K Sdn Bhd x MAIA]]
- [[03 - Clients/Active Cooking Clients/T.C.K/Onboarding/01_Signed Proposal - T.C.K Sdn Bhd x MAIA Proposal]]
