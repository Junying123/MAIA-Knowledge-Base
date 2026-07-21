---
owner: Gareth
status: draft
last_reviewed: 2026-07-21
---

# Fireflies Transcript — Maxfresh Proposal Finalization (2)

Source: https://app.fireflies.ai/view/Maxfresh-proposal-finalization::01KV7QTQCJFR723ESD495Y70CS
Date: 2026-06-17
Participants: Jeremy Chan (Mindhive), Andrew Tay (T.C.K/Maxfresh)

## Key points
- Purpose: confirm sales team demo feedback, gather logistics team's requirements, agree what's left before final decision call.
- Andrew tested demo himself: created SO, invoice, WhatsApp order. Feedback — too many manual inputs required vs AutoCount (payment terms, customer info); Jeremy confirms these will be preloaded/preconfigured for the real setup, not required in generic demo.
- Confirmed: most clients create sales orders via WhatsApp conversation, not backend; Maya auto-fills payment terms etc.
- Running numbers: MAIA generates invoices/SOs/credit notes through AutoCount itself, so existing AutoCount running-number sequence is preserved — confirmed critical requirement (10 years of numbering history).
- Onboarding/data migration: no bulk historical data migration by default (extra charge); AutoCount already holds past data, so MAIA starts fresh from a cutoff and correctly continues the running number.
- Confirmed forward-only model: MAIA reporting/analysis only covers data from go-live cutoff (e.g. July) onward; past data stays in AutoCount.
- Confirmed phased rollout preference: start with Sales module only; Finance continues doing GL/ledger work directly in AutoCount.
- Inventory: two-way sync confirmed — stock entries done directly in AutoCount also reflect back into MAIA.
- Approval flows (e.g. picking list sign-off) are configurable, to be defined during post-signing onboarding/requirements session — not decided yet.
- New customizations flagged: customer grouping + markup (free), and catalog/quotation generation listing available stock+prices (free) — both promised free-of-charge, not yet in the generic demo.
- Interface feedback: web-based backend is awkward on phone, better on iPad/laptop; Jeremy clarifies backend web access is mainly for sales coordinators/desk staff — salespeople should primarily interact via WhatsApp to Maya, not the web backend.
- Long-term roadmap discussed (not Phase 1 scope): eventual customer-facing (B2C) Maya instance alongside the internal one; third-party integration into MAIA is technically possible later, not now (dev phase).
- Data speed: real-world sales order processing ~1 min in production (demo intentionally slower/cheaper infra).
- Next step at time of call: Andrew awaiting logistics team feedback, tentative next call set for following Tuesday.
