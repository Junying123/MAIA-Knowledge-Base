# Account Planning Feedback — Gareth Ng

**Session:** Client Account Planning, Friday 7 August 2026, 10:30 MYT (37 min) **Chair:** Wan Sin **Assessed against:** Mindhive Delivery Standard v1.0 **Prior assessment:** None found. This is baseline.

---

## Accounts covered

| Account | Bucket | State | Blocker | Tag |
| :---- | :---- | :---- | :---- | :---- |
| Dalson | 2 — 2nd UAT 17 Aug | AWS/env set up, credentials passed, scope lock done. Fixes needed: CPO, item historical pricing, item creation via chatbot | Client cannot upload business doc for WABA — workaround proposed (NRIC \+ MyHub phone number) | **verified** |
| Macro Frozen | 2 — UAT imminent | Notifications built, your testing pending | Outstanding bug list unknown — "I also didn't follow up with the tech team" | **unknown**, no date, no action set |
| GST Fine Foods | 3 — Build | WABA just completed | (a) OpenAI/AWS not set up — guidelines sent, client didn't act, not chased; (b) sample data requested "long, long time ago", never followed up; (c) **scope not clear — only one kickoff held** | **unknown** on all three |
| Holsen | 3 — Build/integration | Client migrating legacy US system → SQL via own vendor; we have not connected | SQL credentials \+ remote server access not obtained (client on-prem). WABA blocked (network), interim Telegram. Batch allocation deferred as customisation | **verified** |
| FixGuru | 2 — Build/test | Workflow tested Thursday | Reported "already no problem" — then corrected within a minute: flow blocked on proof-of-delivery, needs re-test | **unverified → contradicted** |
| SCC | 3 — Build | (partial input) OpenAI/AWS set up | WABA not set up | **unverified** |

**6 accounts.**

Also raised: the "next batch" of clients need to be called and pushed to engage their own vendors — you flagged this unprompted.

---

## Scorecard

| Dimension | Score | Justification |
| :---- | :---- | :---- |
| State & verification | **3** | Holsen and Dalson were the two best-articulated accounts in the session — you knew the mechanism, not just the status ("their previous third party software in the US, so they called their vendor to migrate all the data to SQL... we need to get the credential, their remote server, they on-prem"). Against that: Macro Frozen unverified by your own admission, and FixGuru reported "already no problem, lah" then reversed inside sixty seconds. |
| Forward plan & dates | **3** | 17 August for Dalson's second UAT was the only firm date brought by any PM to a Bucket 2 account. GST's three open items and Macro Frozen's bug list all closed undated. |
| Ownership clarity | **3** | Holsen: named the client's vendor and told the chair to get a WhatsApp group formed with them. Dalson: named the specific fixes. Against that, "the tech team will solve all their issue, lah" on FixGuru names nobody and commits nobody. |
| Client movement | **2** | Dalson moved — second UAT booked. GST did not move, and by your own account has not moved for some time: guidelines sent and ignored, sample data requested and never chased. Two client-side dependencies sitting idle on an account in build. |
| Artifact & governance | **2** | Dalson scope lock "done, lah. I think done" — hedged on a hard gate. Holsen required the chair to instruct you to generate the latest scope lock and DOC. GST is in build with scope explicitly not locked. VoC dossier, client narrative and before/after MAIA workflow not mentioned on any account. |

**Total: 13/25**

## Floor check: **FAIL**

**Onboarding steps not completed or chased.** GST Fine Foods, two separate instances in one account:

- "Last time I already sent them the guidelines, but they actually don't do it, lah" — OpenAI/AWS setup, no chase.  
- "Their sample data haven't — they haven't provided us." Chair: "Have you requested?" — "I think long, long time ago, lah... I didn't follow up with them."

Both are client-side onboarding steps that stalled and were not pursued. The account is in build. That is the floor.

Note what is *not* being counted against you: the admission itself. "I didn't follow up with them" is declared ignorance, which the standard explicitly permits and prefers. The failure is that the account sat still, not that you said so.

---

## What worked

**Holsen is the best account report in the session.** You explained a three-party dependency — client, their legacy US vendor, and us — clearly enough that the chair could interrogate it and land a decision. When he pushed ("What do you mean by blocker is on SQL?" ... "So client will ask their current vendor to migrate to SQL, right?" ... "This is to be fixed, is it, or what?"), you had an answer at every level. That exchange ended with batch allocation correctly classified as a customisation, in the room, with the chair. That is exactly the routing the standard prescribes: classify internally, confirm with the Delivery Lead, then communicate. You did not go to the client unilaterally.

**Dalson.** Scope lock done, environment up, credentials passed, second UAT dated 17 August, and a named list of what has to be fixed before it — CPO, item historical pricing, chatbot item creation. This is what a Bucket 2 account should sound like.

**You raised the GST scope risk yourself, at the end, unprompted.** "We actually only have the one required kickoff meeting with them. So basically, all their scope is not clear yet... we need a session to refresh all their scope." Nobody asked. That is a real risk on an account in build, and surfacing it is the behaviour the standard wants. It got "Okay" from the chair and the meeting ended — that is his failure, not yours, and it is recorded on his sheet.

**Product-level thinking on the OpenAI token problem.** You proposed auto top-up and a guided setup section rather than just reporting that a client ran out of tokens again. That is the right instinct.

---

## What didn't work

**FixGuru: you reported clean and then contradicted yourself within the minute.** "All their WABA, all their thing is already no problem, lah" — then, unprompted, "yesterday we got blocked. Their flow kena blocked because of the proof of delivery one. So we need to re-test." Both statements were true of different things, but the first one was the one that went on the record and the chair accepted it. If the flow needs re-testing, the account does not pass the go-live-tomorrow test, and that is the sentence that should have led.

**GST has three open blockers and none of them acquired a date.** Scope unclear, OpenAI/AWS not set up, sample data not provided. All three were named in the session. All three left the session in exactly the state they entered it. The account is in build.

**Macro Frozen is heading into UAT and you don't know its bug list.** "This one not yet. Because I also didn't follow up with the tech team." The chair's response — "we better have a list of those that still haven't completed one" — is an action with no owner and no date. You should have supplied both before he had to reach for it: "I'll get the list from tech today and send it to the group by 5."

**Hedged gates.** "Scope lock — done, lah. I think done." A hard gate is either current or it isn't. "I think" on a control gate is the same class of answer as "I don't think so" on a blocker.

---

## How to run next Friday differently

Your account knowledge is not the problem — Holsen proves you can hold a complex account transferably. The gap is that open items leave the room undated. Bring this per account:

ACCOUNT: \[name\]          BUCKET: \[1-4\]

STATE: \[one line\]

VERIFIED: \[what I checked, how, when\]   — or UNVERIFIED/UNKNOWN \+ date to resolve

GO-LIVE-TOMORROW TEST: pass / fail because \[specific reason\]

OPEN ITEMS — every line dated, no exceptions:

  1\. \[item\] — \[me / named client contact\] — by \[date\]

  2\. ...

CLIENT-SIDE CHASES: \[what they owe us\] — asked on \[date\] — chased on \[dates\] — escalating \[when\]

ARTIFACT GATES: scope lock \[Y/N \+ date\] · VoC \[Y/N\] · narrative \[Y/N\] · before/after MAIA \[Y/N\]

For GST specifically, walk in Friday with the scope-refresh session already booked and a date on both client-side items. Do not bring them back in the same state twice.

---

## One change this week

**Chase GST Fine Foods on both stalled items — sample data and OpenAI/AWS setup — and get a client-committed date for each, or escalate to the GTM originator if they don't respond.** One account, two chases, this week.  
