---
owner: Jun Ying
status: draft
last_reviewed: 2026-04-16
client: Thermac
meeting_date: 2026-04-16
meeting_type: proposal_review
---

# Client Proposal Review Meeting Notes

## Overview
These notes summarize the main discussion points, client concerns, and internal follow-up items from the proposal walkthrough meeting.

The overall direction was positively aligned around a **two-phase deployment**, with:
- **Phase 1** focused on sales-related functions
- **Phase 2** focused on service and repair operations

However, several concerns raised by the client indicate that some important workflow, scope, and implementation details are still unresolved.

---

## High-Level Summary

### Proposed rollout approach
- **Phase 1**: Sales operations
  - Quotation creation
  - Sales order generation
  - Credit note handling
  - Integration with AutoCount
- **Phase 2**: Service operations
  - Work order / repair order management
  - Scheduling
  - Service history tracking
  - Parts usage and service follow-up flows

### Commercial summary
- **Implementation fee**: RM35,000
- **Annual subscription**: RM10,000 (reduced from RM12,000)

### Main positioning discussed
- Replace fragmented tools and reduce manual work
- Centralize workflows across departments
- Improve data visibility and process control
- Integrate with AutoCount to reduce duplicate entry and data inconsistency

---

## Main Client Concerns

## 1. Quotation module needs to be highly flexible
This is the biggest concern raised during the meeting.

The client does not want a rigid SKU-only quotation flow. They need a quotation workflow that can handle different pricing scenarios and flexible data entry.

### Concerns raised
- Quotation needs to support **flexible pricing structures**
- Need to account for:
  - freight
  - clearance
  - transportation fee
  - forex
  - margin calculation
- Want visibility of:
  - previous price
  - average price
  - minimum price
  - maximum price
  - standard price
- Want the quotation to support a **free-text style table with columns** so users can input anything when needed
- Want the ability to **mix existing SKU items into that same flexible quotation structure**

### Internal implication
This is not a normal quotation form.
This is closer to a **hybrid quotation workspace** combining:
- structured SKU items
- manual/free-text rows
- adhoc pricing logic
- historical pricing guidance

---

## 2. Custom SKU / adhoc item handling
The client needs the ability to include non-standard rows directly inside the item table.

### Examples mentioned
- Delivery fee
- Packaging fee
- Other adhoc charges

These are not just footer adjustments. They want these to appear as **line items in the item table**.

### Additional item concern
They also want to support **draft items that have not yet been confirmed**.

#### Expected behavior
- A temporary / draft item can be added during quotation stage
- Once the quotation is confirmed, the item should be added into the database

### Internal implication
This affects:
- item master governance
- approval flow
- downstream syncing
- reporting consistency
- pricing history integrity

---

## 3. Salesperson visibility and access control
Another important operational concern is access control.

### Requirement raised
- Salesperson should only be able to view **their own** quotations, sales orders, and related records

### Internal implication
This means document visibility should not be fully open by default.

### Questions this creates
- Do managers need visibility across the whole team?
- Does finance or operations need wider access?
- Are there scenarios where one salesperson needs visibility into another salesperson’s documents?

---

## 4. Item creation flexibility vs data integrity
The client wants users to be able to work flexibly even when the item does not yet exist in the master list.

### Concerns raised
- Need to add items not yet in the SKU list
- Need draft item handling before final confirmation
- Need these items to eventually become part of the official database

### Internal implication
This requires a defined rule for:
- who can create draft items
- who approves them
- when they become official
- what minimum data must exist before they are added permanently

---

## 5. Stock reservation logic still needs clarification
Stock reservation was discussed, but the actual business rules are still unclear.

### Concerns raised
- Reservation logic must prevent double booking
- Need configurable reservation timeframes
- Need stock visibility without prematurely deducting stock

### Internal implication
We still need clarity on:
- what triggers reservation
- how long reservation lasts
- who can release or override reservation
- whether reservation starts at quotation stage, approval stage, or sales order stage

---

## 6. AutoCount integration constraints may shape the workflow more than expected
The meeting notes suggest that some rigidity in the process may come from AutoCount integration requirements.

### Concerns raised
- Submitted documents cannot be edited
- Amendments require cancellation and regeneration
- Data integrity must be maintained across systems

### Internal implication
Need to confirm whether these are:
- actual AutoCount constraints
- ERPNext / MAIA limitations
- design decisions made for implementation simplicity

---

## 7. Service module scope is still broad and underdefined
Phase 2 includes service operations, but there is not yet enough detail on the actual business flow.

### Features mentioned
- work order management
- scheduling
- service history
- parts tracking
- notifications
- UAT and training

### Internal implication
The scope sounds directionally correct, but it still lacks business-process detail such as:
- technician assignment flow
- job status flow
- actual parts used vs planned parts
- service completion process
- linkage to billing or follow-up workflows

---

## 8. UX expectations are high
The client wants the system to be powerful but still easy to use.

### Concerns raised
- The workflow must be flexible
- The interface must not feel clunky or overly complicated
- Users need quick visibility and guardrails to reduce mistakes

### Internal implication
UX is not a secondary concern here.
If too much complexity is exposed directly, user adoption will suffer even if the system technically works.

---

## Key Internal Discussion Points

## A. Scope control
- What exactly is included in Phase 1 quotation scope?
- Are we solving only pricing reference and quoting convenience, or full quotation costing logic?
- Which requested behaviors are productizable features vs client-specific customization?

## B. Permission model
- Can MAIA / ERPNext cleanly support salesperson-only document visibility by owner?
- What access exceptions are needed for manager, finance, operations, and admin?

## C. Quotation architecture
- Can free-text rows and SKU rows coexist in one quotation cleanly?
- How should adhoc charges be modeled?
  - generic item
  - service item
  - raw text row
- What gets synced downstream to AutoCount?

## D. Draft item workflow
- Who creates draft items?
- Who approves them?
- At what point do they become permanent items in the system?
- What fields are mandatory before item master creation?

## E. Pricing logic
- Can previous sold price and average price be surfaced in quotation entry?
- What is the source of truth for those values?
- How should “average price” be calculated?
  - by item only?
  - by item + customer?
  - by date range?

## F. Reservation governance
- What triggers reservation?
- Can reservation expire or be extended?
- Who can release, override, or reallocate reserved stock?

## G. Integration dependency
- Which parts of the proposed workflow are actually constrained by AutoCount?
- Do we need a dedicated integration workshop before finalizing scope?

## H. Timeline and pricing realism
- Is the current timeline realistic given that quotation is the hardest and most custom module?
- Are we underestimating the engineering/design effort?
- What assumptions need to be made explicit before commitment?

## I. Phase 2 readiness
- Do we actually have enough detail yet to confidently propose service workflow features?
- What is the minimum viable Phase 2 scope we can commit to now?

---

## Recommended Internal Framing
The client is not simply asking for “a flexible quotation module.”

They are effectively asking for:
- restricted salesperson visibility
- hybrid quotation entry (SKU + free text + adhoc charges)
- draft item creation workflow
- calculator-driven pricing
- historical price guidance inside quotation
- stock reservation governance
- integration-safe document controls

This should be treated as a **workflow design problem**, not just a UI/form customization request.

---

## Suggested Next Steps
1. Internally align on what is truly in scope for Phase 1 quotation handling
2. Confirm whether salesperson-only visibility is feasible and how role access should behave
3. Decide the model for adhoc charges and draft items
4. Confirm the required depth of pricing calculator logic
5. Clarify stock reservation trigger and governance rules
6. Validate AutoCount-related workflow constraints with technical team / integration understanding
7. Reassess whether current timeline and pricing still match the real implementation effort
8. Identify what must be clarified with client before final scope is locked

---

## Internal Takeaway
The proposal discussion surfaced strong interest, but also exposed a major risk area: **the quotation workflow is still underdefined and may be larger than initially framed**.

The team should treat this as the core design and scoping issue before committing too aggressively on delivery, timeline, or commercial confidence.

## See Also

- [[16_Apr_2026_Thermac_client_narrative]]
- [[03-04-26_Customer Narrative - Thermac]]
- [[13 Apr 2026 Thermac SOW]]
- [[16 Apr 2026 Thermac SOW v2]]
