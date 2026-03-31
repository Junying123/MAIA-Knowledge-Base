---
owner: [Your Name]
status: draft
last_reviewed: YYYY-MM-DD
client: [Client Name]
meeting_date: YYYY-MM-DD
transcript_ref: "[[path/to/Meeting Transcript - YYYY-MM-DD]]"
---

# Requirement Gathering Output — [Client Name] — [Date]

| Field | Details |
|-------|---------|
| **Client** | [Client Name] |
| **Meeting date** | YYYY-MM-DD |
| **Attendees** | [PM Name] (MAIA), [GTM Name] (MAIA), [Client Name, Role] |
| **Purpose** | [e.g. Initial requirement gathering / Follow-up discovery call] |
| **Raw transcript** | [[path/to/Meeting Transcript - YYYY-MM-DD]] |

---

## Captured Requirements

> Pull from the transcript. Use bullet points — what the client confirmed, not what was asked.

### Sales Workflow

- [e.g. They issue quotations before every sales order]
- [e.g. Orders come in via WhatsApp and email — CS team converts to SO]
- [e.g. No multi-currency needed — all MYR]

### Finance Workflow

- [e.g. Mix of credit and cash customers — roughly 60/40]
- [e.g. Credit terms: 30 days for most, 60 days for key accounts]
- [e.g. Payment via bank transfer — slip sent via WhatsApp]

### Logistics / Warehouse Workflow

- [e.g. Own delivery for Klang Valley, third-party courier for outstation]
- [e.g. Physical DO signed by customer as proof of delivery]
- [e.g. Single warehouse — no multi-location needed for now]

### Integration Requirements

- [e.g. Currently using SQL ERP — data migration required]
- [e.g. No accounting integration needed — Finance handles manually]
- [e.g. Salesman app currently used — assess if replace or integrate]

### Special Workflows

> Add/remove sections as needed (consignment, salesman direct sales, retail POS, etc.)

- [e.g. Consignment to Giant / AEON — sell-through model, reconciled monthly]
- [e.g. Field salesman handles bottle shops — currently uses separate app]

---

## Gaps & Open Questions

| # | Question | Raised by | Status |
|---|----------|-----------|--------|
| 1 | [e.g. How does the salesman app currently sync — or does it not?] | [PM / Client] | open |
| 2 | [e.g. Who approves credit limit increases?] | [PM] | open |
| 3 | [e.g. Is the palm oil business in scope for this phase?] | [PM] | open |

---

## Demo Readiness

> Scenarios the client specifically wants to see. Each becomes a demo flow to prepare.

- [ ] [e.g. Create a quotation → convert to SO → generate DO → invoice]
- [ ] [e.g. Show credit limit enforcement when customer exceeds limit]
- [ ] [e.g. Consignment reconciliation flow for Giant]
- [ ] [e.g. Salesman placing order on behalf of a bottle shop]

---

## Next Action Checklist

- [ ] Convert requirements → feature requests (log in [[09 - Intake & Triage/Request Intake Inbox]])
- [ ] Brief tech team on requirements and expected flows
- [ ] Brief tech team on feasibility — flag any constraints or blockers
- [ ] Prepare product demo (based on Demo Readiness scenarios above)
- [ ] Prepare proposal (high-level scope, for client / boss alignment)
- [ ] Draft SOW (detailed scope, flows, constraints, exclusions)
- [ ] SOW → PRD + internal specs (for implementation and UAT test cases)
- [ ] Align SOW with client (sign-off that scope = how the project is closed and tested)

---

## Artefact Tracker

| Artefact | Owner | Status | Due |
|----------|-------|--------|-----|
| Feature request log | | not started | |
| Tech brief — requirements | | not started | |
| Tech brief — feasibility | | not started | |
| Demo script / scenarios | | not started | |
| Proposal deck | | not started | |
| SOW document | | not started | |
| PRD | | not started | |

---

## See Also

- [[path/to/Meeting Transcript - YYYY-MM-DD]] — raw Fireflies transcript for this session
- [[09 - Intake & Triage/Request Intake Inbox]] — log feature requests here
- [[02 - PM Playbook/Templates/[Template] PRD]] — next step after SOW
- [[02 - PM Playbook/Templates/[Template] Discovery Requirement Gathering]] — discovery questionnaire (pre-call)
