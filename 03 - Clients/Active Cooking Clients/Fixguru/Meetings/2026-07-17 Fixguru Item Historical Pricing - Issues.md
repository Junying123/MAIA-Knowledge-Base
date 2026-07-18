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
**Additional context:** Dev team found the root cause a few minutes before the meeting — response timeout. Confirmed personally before the meeting: tested and waited 2 minutes with still no response.

## Issue 2: Slow response time
**What happened:** Order creation took 1–2 minutes per action during test (normally fast), attributed to system recovery + backend load.
**Additional context:** Followed up with dev team during the meeting — fixed and recovered. Client resumed testing after the fix; average response time now ~1 minute (down from 2 min, still slower than normal).

## Issue 3: Historical price not returned for existing customer
**What happened:** Customer with confirmed March 2026 past order returned "no past customer price found." Backend record exists (confirmed for one customer case) but not surfaced — sync gap between backend and UI.
**Additional context:** Root cause confirmed. Jennifer (Fixguru) created an SO and asked whether MAIA had this customer's past data. Checked directly in the SO records — historical data does exist for this customer, so it's a valid test case. Chatbot response showed "not found," which is actually **correct behavior**, not a bug: the chatbot's historical pricing only checks **invoice** history, not SO history. MAIA currently syncs SO history only — past **invoices** have not been synced yet. That's why the chatbot returned "not found" for this customer. See screenshot shared in chat (Jennifer SO chat, "LUXICON COFFEE SDN BHD" draft SO SO-2026-18519).

## Issue 4: Customer name match too strict
**What happened:** Lookup requires exact customer name match; no fuzzy/partial matching.
**Additional context:** Deprioritized for now — not raised during this meeting. Found separately before the meeting.

## Issue 5: Pricing-history link missing customer scope
**What happened:** Draft sales orders don't show price history / PDF preview by default; PDF only generates after submission. Workaround: user can explicitly request a draft PDF, but it's not the default flow.
**Additional context:** Tested the same query myself and compared output to the client's response (see screenshot). The chatbot's text response itself is correct — it returns the latest price for the item based on invoice history. However, the **link** the chatbot generates only encodes the **item**, not the **customer**. Because of that, when you open the pricing-history UI via that link, the page shows the item's historical pricing **across all customers**, unfiltered — even though the customer name ("LUXICON COFFEE") is populated at the top of the page. Root cause: link generation is missing the customer parameter. The chatbot's own reply format is correct; the generated link is the part that's broken.

## Issue 6: Inconsistent output for identical prompts
**What happened:** Same prompt run by different testers (and reproduced by Jared) returned different results. Suspected session/cache/connection sync issue, unresolved during call.
**Additional context:** Confirmed this is **not a bug** — the client's response was actually correct, because there genuinely is no past price for that item/customer from invoice history. Improvement to make: when no past price is found, the message should say so explicitly (e.g. "no past customer price found from older invoice") instead of an ambiguous "no past price" message that reads like an error.

## Issue 7: PDF template mismatch
**What happened:** Current SO PDF layout differs from Fixguru's legacy AutoCount template; fix in progress.
**Additional context:** [TO FILL]

## Issue 8: Draft SO number/ID issue
**What happened:** Sales order ID/numbering in draft state flagged as incorrect; tied to backend fix.
**Additional context:** [TO FILL]

## Issue 9: Shared admin login for testing
**What happened:** All testers using one shared admin account; no individual credentials yet, limiting audit/tracking.
**Additional context:** The historical pricing UI is standalone and requires login. When sharing access with the client, administrator credentials were provided for speed — but proper user-level (non-admin) access should have been provided instead.

## Issue 10: Test setup confusion
**What happened:** Testers on different WhatsApp numbers within same test chat; unclear if this affects session/output isolation.
**Additional context:** [TO FILL]

## Issue 11: Link access friction
**What happened:** Initial confusion on whether pricing shows in WhatsApp vs. a separate link-based UI; login credentials only shared mid-call.
**Additional context:** [TO FILL]

## Issue 12: Item tax note incorrect by default (new — found after meeting)
**What happened:** Item shows tax note "not tax-exempted" by default. Company tax settings should default to "no tax" since this client does not use tax at all.
**Additional context:** See screenshot (SO-2026-18522, F7 line — "Tax note: F7 not tax-exempted"). Client doesn't use tax; default tax field at company-settings level needs to be corrected to "no tax."

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
