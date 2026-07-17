---
owner: Gareth
status: review
last_reviewed: 2026-07-17
lark_url: https://eg69120xnei.sg.larksuite.com/docx/Yxwldzz9BoHWtxxgm5XlozHyg5c
---

# Fixguru — Item Historical Pricing Demo — Issues (2026-07-17)

## Overview
Demo/test session for the new Item Historical Pricing feature (Fixguru). Attendees: Jared (MAIA), Anthony, Marcus (Fixguru). Transcript: [Fireflies](https://app.fireflies.ai/view/01KXQEQJ1NVWJCHWD7EXNP83VE).

This doc lists every issue raised during the call. Each issue has space below it for added context (severity, root cause, follow-up, screenshots, etc.) before this goes to boss/lead.

---

## Issue 1: System instability / OpenAI outage
**What happened:** Backend/AI model down during demo, blamed on OpenAI-side outage. Caused error responses ("I apologize but I encounter an error").
**Additional context:** [TO FILL]

## Issue 2: Slow response time
**What happened:** Order creation took 1–2 minutes per action during test (normally fast), attributed to system recovery + backend load.
**Additional context:** [TO FILL]

## Issue 3: Historical price not returned for existing customer
**What happened:** Customer with confirmed March 2026 past order returned "no past customer price found." Backend record exists (confirmed for one customer case) but not surfaced — sync gap between backend and UI.
**Additional context:** [TO FILL]

## Issue 4: Customer name match too strict
**What happened:** Lookup requires exact customer name match; no fuzzy/partial matching.
**Additional context:** [TO FILL]

## Issue 5: No price-history preview on draft SO
**What happened:** Draft sales orders don't show price history / PDF preview by default; PDF only generates after submission. Workaround: user can explicitly request a draft PDF, but it's not the default flow.
**Additional context:** [TO FILL]

## Issue 6: Inconsistent output for identical prompts
**What happened:** Same prompt run by different testers (and reproduced by Jared) returned different results. Suspected session/cache/connection sync issue, unresolved during call.
**Additional context:** [TO FILL]

## Issue 7: PDF template mismatch
**What happened:** Current SO PDF layout differs from Fixguru's legacy AutoCount template; fix in progress.
**Additional context:** [TO FILL]

## Issue 8: Draft SO number/ID issue
**What happened:** Sales order ID/numbering in draft state flagged as incorrect; tied to backend fix.
**Additional context:** [TO FILL]

## Issue 9: Shared admin login for testing
**What happened:** All testers using one shared admin account; no individual credentials yet, limiting audit/tracking.
**Additional context:** [TO FILL]

## Issue 10: Test setup confusion
**What happened:** Testers on different WhatsApp numbers within same test chat; unclear if this affects session/output isolation.
**Additional context:** [TO FILL]

## Issue 11: Link access friction
**What happened:** Initial confusion on whether pricing shows in WhatsApp vs. a separate link-based UI; login credentials only shared mid-call.
**Additional context:** [TO FILL]

---

## Action Items

**Jared (MAIA)**
- Coordinate with backend team to fix customer price history retrieval and sales order ID issues
- Share individual user account + password per tester (replacing shared admin login)
- Test chatbot stability internally before wider team testing
- Update group once system issues are resolved and testing can continue

**Anthony / Marcus (Fixguru)**
- Continue testing shared price-history link, report discrepancies in retrieval/output
- Test draft PDF generation and pricing consistency once backend is stable

## Status
Meeting paused pending backend stabilization; to reconvene after fixes.

## See Also
- [[03 - Clients/Active Cooking Clients/Fixguru/UAT/MAIA UAT Form - Fixguru - Item Historical Pricing]]
- [[03 - Clients/Active Cooking Clients/Fixguru/Feature Requests & Gaps]]
