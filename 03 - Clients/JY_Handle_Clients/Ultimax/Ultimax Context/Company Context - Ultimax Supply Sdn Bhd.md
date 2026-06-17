---
owner: Gareth
status: draft
last_reviewed: 2026-05-13
lark_url:
---

# Company Context - Ultimax Supply Sdn Bhd

Ultimax Supply Sdn Bhd is a Malaysia-registered company based in Pulau Pinang. Public registry listings describe the business as a wholesaler of pharmaceutical and medical goods, while external company profile pages and MAIA internal persona notes position Ultimax as a medical and surgical supplies provider serving hospitals in the northern Malaysia region.

## Company Snapshot

| Field | Detail | Source |
|---|---|---|
| Legal name | Ultimax Supply Sdn Bhd | CTOS / Experian |
| Registration number | 1312509-T / 201901003183 | CTOS / Experian |
| Incorporation date | 2019-01-25 | CTOS / Experian |
| State | Pulau Pinang | CTOS / Experian |
| Business nature | Wholesale of pharmaceutical and medical goods | CTOS / Experian |
| Operating description | Medical healthcare company providing medical-related services to major hospitals in Penang, Kedah, and Perlis | Maukerja / Ricebowl company profiles |
| MAIA working context | Medical and surgical supplies; hospital-facing sales, quotation, booking, delivery, collection, and invoicing workflows | Internal MAIA persona and Ultimax workflow notes |

## Business Context

Ultimax appears to operate in the medical supplies distribution space, with a focus on hospital customers. The current MAIA working assumption is that its day-to-day commercial flow involves sales users handling hospital RFQs, preparing quotations, confirming surgical set or medical instrument availability, coordinating delivery before operations, arranging post-operation collection or returns, and moving confirmed orders into invoicing.

The business is operationally time-sensitive because hospital procedures and operation dates create hard delivery deadlines. A wrong operation date, delayed delivery, or unavailable surgical set can directly affect customer trust. For MAIA, this makes mobile quoting, stock visibility, delivery coordination, and clear document status tracking especially important.

## Regional And Customer Context

External company profiles describe Ultimax as serving major hospitals in Penang, Kedah, and Perlis. Internal MAIA persona notes frame the primary customers as hospital operating room managers, surgeons, and procurement officers.

| Customer group | Likely needs |
|---|---|
| Hospital procurement | Quotations, approvals, pricing clarity, invoice follow-up |
| Operating room managers | Procedure-date coordination, delivery timing, set readiness |
| Surgeons | Preferred instruments, surgical set suitability, urgent availability |
| Ultimax sales users | Fast mobile quote creation, hospital follow-up, customer relationship notes |
| Warehouse or logistics users | Prepare booked sets, delivery confirmation, post-operation collection and return handling |

## Current Workflow Signals

Internal Ultimax notes describe the target document flow as:

1. Quotation: create and submit using the parent selling bundle only.
2. Sales Order: create from the quotation using the parent selling bundle only.
3. Delivery Note: create from the sales order, add non-selling bundles, submit, then mark as delivered.
4. Return Note: create from the delivery note, explode only bundles that contain used items, update unused quantities, then submit.
5. Sales Invoice: create and submit from the sales order using the parent selling bundle only.

This suggests Ultimax may require bundle-aware workflows where the commercial document shows a parent selling bundle, while operational delivery and return steps need more granular bundle or item handling.

## MAIA Fit Hypothesis

Ultimax is likely a strong fit for MAIA's order-to-cash and WhatsApp-first workflow because its sales and logistics work appears to be mobile, urgent, and communication-heavy.

| MAIA area | Why it matters for Ultimax |
|---|---|
| Sales workspace | Fast RFQ response, quotation creation, conversion to sales order |
| Logistics workspace | Delivery note creation, delivery status, collection and return handling |
| Finance workspace | Invoice generation from confirmed sales orders |
| WhatsApp assistant | Sales users can quote, check status, and coordinate while travelling |
| Bundle handling | Medical or surgical sets may need parent-level selling and item-level operational tracking |

## Known Gaps To Confirm

- [ ] Confirm whether Ultimax is an active implementation client, discovery client, or internal demo/reference context.
- [ ] Confirm primary MAIA modules in scope: Sales, Logistics, Finance, Management.
- [ ] Confirm whether hospital orders are based on surgical set rental, sale of consumables, sale of instruments, or a mix.
- [ ] Confirm how parent selling bundles, non-selling bundles, used items, and unused item returns should map to MAIA documents.
- [ ] Confirm current source system or accounting system, if any.
- [ ] Confirm key contacts, PM owner, implementation owner, and target timeline.
- [ ] Confirm whether WhatsApp is a required channel for hospital quotation and delivery communication.

## Source Notes

- [CTOS public company page](https://businessreport.ctoscredit.com.my/oneoffreport_api/single-report/malaysia-company/1312509T/ULTIMAX-SUPPLY-SDN-BHD-): legal name, registration number, incorporation date, state, and business nature.
- [Experian public listing](https://buy.experian.com.my/index.php/search/Malaysia-Company/1312509/ULTIMAX-SUPPLY--SDN.-BHD.): matching registration and incorporation details, with deeper company profile data behind a paid report.
- [Maukerja public company profile](https://www.maukerja.my/en/company/ultimax-supply-sdn-bhd) and [Ricebowl public company profile](https://www.ricebowl.my/company/ultimax-supply-sdn-bhd): operating description, including hospital coverage in Penang, Kedah, and Perlis.
- Internal MAIA note: [[Sales Agent Persona]].
- Internal Ultimax note: [[Workflow]].

## See Also

- [[MAIA Chatbot — Compound Multistep Query Examples]]
- [[Workflow]]
- [[Sales Agent Persona]]
