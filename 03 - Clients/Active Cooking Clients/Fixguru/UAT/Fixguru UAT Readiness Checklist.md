---
owner: Gareth
status: draft
last_reviewed: 2026-06-06
client: Fixguru
source_lark: "https://eg69120xnei.sg.larksuite.com/wiki/AJHowrVB8ivWkMkmbuMldIvwgQh"
---

# Fixguru — UAT Readiness Checklist

Live status tracker for Phase 2 UAT gate. Last synced from Lark 2026-06-06.

---

## Ready for UAT

- [x] Pick the shipping method
- [ ] Search customer with phone number

---

## Testing (In Progress)

| Feature | Status | Notes |
|---|---|---|
| FOC items (chatbot + FE) | ✅ Fixed (dev instance) | Fixguru instance had bug — confirm fixed before UAT |
| Item historical pricing | 🔄 Needs retest | Markup price display — for general (not Fixguru-specific) |
| Item level discount | 🔄 Minor fix required | FE auto-compute when unit price > std price — fix done, verify |
| Customer pricing enforcement (chatbot) | 🔄 Fixing | See [[UAT/Fixguru Retesting Feedback]] §3–4 |
| UOM conversion | 🔄 Fixing | Normal single-item UOM works; multiple items with different UOM — still fixing. Holsen also affected. |
| Item shelf — DN only | 🔄 In progress | Populate shelf no. in additional note on delivery note |
| External SKU item code | ✅ Done | — |

---

## Pending Blockers — Fixing, Need to Test

- [ ] External doc ID
- [ ] HQ + branch contact sync
- [ ] 2-warehouse support
- [ ] Auto-populate shipping method SKU as line item
- [ ] Credit limit exposure (chatbot + FE)
- [ ] Volume fields in item profile (pending FE + chatbot)

---

## Dev In Progress (Not Yet Ready for UAT)

| Item | Owner | Notes |
|---|---|---|
| RSC & Diecut Calculator update | Amirul | Follow up needed |
| Draft PDF — external ID | — | — |
| Volumetric data sync + PDF display | — | — |
| Language preference (chatbot) | — | — |
| 2-way AutoCount sync | — | — |

---

## See Also

- [[UAT/MAIA UAT Form - Fixguru - Phase 2 - Draft]]
- [[UAT/Fixguru Retesting Feedback]]
- [[Meetings/2026-05-15 Fixguru UAT Action Items]]
