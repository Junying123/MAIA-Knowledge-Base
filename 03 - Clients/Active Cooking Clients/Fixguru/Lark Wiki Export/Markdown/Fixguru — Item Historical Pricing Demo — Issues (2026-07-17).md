**Fixguru --- Item Historical Pricing Demo --- Issues (2026-07-17)**

**Overview**

Demo/test session for the new Item Historical Pricing feature (Fixguru). Attendees: Gareth, Marcus (Fixguru), Yvonne, Jernnifer Transcript: [Fireflies](https://app.fireflies.ai/view/01KXQEQJ1NVWJCHWD7EXNP83VE).

**Issues Identified**

**System instability / OpenAI outage** --- Backend/AI model down during demo, blamed on OpenAI-side outage. Caused error responses (\"I apologize but I encounter an error\").

**Slow response time** --- Order creation took 1--2 minutes per action during test (normally fast), attributed to system recovery + backend load.

**Historical price not returned for existing customer** --- Customer with confirmed March 2026 past order returned \"no past customer price found.\" Backend record exists (confirmed for one customer case) but not surfaced --- sync gap between backend and UI.

**Customer name match too strict** --- Lookup requires exact customer name match; no fuzzy/partial matching.

**No price-history preview on draft SO** --- Draft sales orders don\'t show price history / PDF preview by default; PDF only generates after submission. Workaround: user can explicitly request a draft PDF, but it\'s not the default flow.

**Inconsistent output for identical prompts** --- Same prompt run by different testers (and reproduced by Jared) returned different results. Suspected session/cache/connection sync issue, unresolved during call.

**PDF template mismatch** --- Current SO PDF layout differs from Fixguru\'s legacy AutoCount template; fix in progress.

**Draft SO number/ID issue** --- Sales order ID/numbering in draft state flagged as incorrect; tied to backend fix.

**Shared admin login for testing** --- All testers using one shared admin account; no individual credentials yet, limiting audit/tracking.

**Test setup confusion** --- Testers on different WhatsApp numbers within same test chat; unclear if this affects session/output isolation.

**Link access friction** --- Initial confusion on whether pricing shows in WhatsApp vs. a separate link-based UI; login credentials only shared mid-call.

**Action Items**

**Gareth**

Coordinate with backend team to fix customer price history retrieval and sales order ID issues

Share individual user account + password per tester (replacing shared admin login)

Test chatbot stability internally before wider team testing

Update group once system issues are resolved and testing can continue

**Anthony / Marcus (Fixguru)**

Continue testing shared price-history link, report discrepancies in retrieval/output

Test draft PDF generation and pricing consistency once backend is stable

**Status**

Meeting paused pending backend stabilization; to reconvene after fixes.

![](../Fixguru — Item Historical Pricing Demo — Issues (2026-07-17)_assets/media/image1.png){width="4.447916666666667in" height="7.364583333333333in"}

![](../Fixguru — Item Historical Pricing Demo — Issues (2026-07-17)_assets/media/image2.png){width="4.947916666666667in" height="6.21875in"}

![](../Fixguru — Item Historical Pricing Demo — Issues (2026-07-17)_assets/media/image3.png){width="5.75in" height="4.052083333333333in"}

![](../Fixguru — Item Historical Pricing Demo — Issues (2026-07-17)_assets/media/image4.png){width="5.75in" height="2.8854166666666665in"}

![](../Fixguru — Item Historical Pricing Demo — Issues (2026-07-17)_assets/media/image5.png){width="5.5in" height="9.8125in"}

slow
