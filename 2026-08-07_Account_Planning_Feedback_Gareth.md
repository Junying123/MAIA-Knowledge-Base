# Account Planning Feedback — Gareth Ng
**Session:** Client Account Planning, Friday 7 August 2026 (38 min, chaired by Wan Sin)
**Accounts covered by you in session:** Dalson, Macro Frozen, GST Fine Foods, Holsen, Fixguru

> **Note on framing:** you resigned effective 6 August. This document is written as feedback, but its practical value is as a handover checklist — the gaps below are the specific things that will be lost if they aren't written down before you leave.

---

## Scorecard

| Dimension | Rating | One-line summary |
|---|---|---|
| Reporting current state | 4 / 5 | Deepest account knowledge in the room |
| Plan forward (next 1–2 weeks) | 2 / 5 | Diagnosis without a plan attached |
| Date orientation | 2 / 5 | One date — but it was the only concrete date any AM gave |
| Ownership clarity (internal + external) | 1 / 5 | Almost every action was "we need to" with no name |

---

## What worked

**You had the richest account context of anyone in the session.** On Holsen you laid out the whole picture unprompted: the client has just onboarded SQL, their previous system was UBS, they've engaged their own vendor to migrate the data, they're on-prem so we need credentials and remote server access, WABA was blocked because of the network they were accessing it from, so they're on Telegram in the interim, and batch allocation was deferred because different customers carry different batches. That is five distinct dependencies held in your head accurately.

**You connected accounts to each other.** You identified that GST's operational process mirrors Macro Frozen's — pick list, then confirm actual weight after picking. That kind of cross-account pattern recognition is exactly what makes a build reusable rather than bespoke, and it's the hardest thing for a new AM to acquire.

**You gave the only concrete date in the meeting.** Dalson second UAT, 17 August. Across roughly twenty accounts and five account managers, that was the only firm internal date anyone stated.

**You escalated the GST scope problem unprompted.** At the end of the session, when there was no obligation to raise it, you flagged that GST's scope isn't actually clear after a single kickoff and needs a scope refresh session. That is the correct instinct and it was the most useful thing said in the last five minutes.

---

## What didn't

**Two open admissions of non-follow-up, on two of the most critical accounts.** On Macro Frozen: you hadn't followed up with tech on bug progress, so no list of outstanding bugs exists — for an account with a go-live window of 11–14 August. On GST: the sample data was requested "a long time ago," never chased, and the client also ignored the OpenAI and AWS setup guidelines you sent, which was also never chased. In both cases the gap was known to you and had been sitting untouched.

**Diagnosis kept substituting for a plan.** You correctly identified that GST's scope needs a refresh session — but proposed no owner, no date, no attendee list. You correctly identified that Macro Frozen's OpenAI tokens keep running out and suggested auto top-up — but nobody was assigned to set it up. Naming a problem accurately is the first half of the job.

**Ownership language was consistently unassigned.** "We need to." "Need to remind them." "The tech team will solve all their issues." Who, and by when? On Holsen you said "make sure you follow up with them to have a WhatsApp group with their vendor" — an instruction handed to Wan Sin with no name, no date, and no statement of what the group is for.

**Your knowledge is undocumented.** Everything in the "what worked" section above exists in your head and in a 38-minute recording. None of it is in a handover artifact. That is the actual risk here.

---

## What matters most before you leave

The five accounts you covered are all in build or UAT. Whoever inherits them will not have the context you demonstrated in this session. Before your last day, each of these should exist in writing:

| Account | What must be written down |
|---|---|
| Macro Frozen | Complete outstanding bug list from tech, with owner and ETA per item. Nothing exists today. OpenAI auto top-up: who sets it up, and on what tier. |
| GST | Full scope-refresh brief: what was agreed at kickoff, what's ambiguous, the SOA link/password security requirement, and the pick-list / confirm-weight-after-pick parallel to Macro Frozen. Sample data request re-issued with a client ETA. |
| Holsen | Migration dependency chain: UBS→SQL, client's vendor contact, on-prem credential + remote server requirements, WABA network block and the Telegram interim, batch allocation deferral rationale and whether it's committed as a later CR. |
| Dalson | The 17 August UAT prep list: quotation PDF, item historical pricing, chatbot item creation, and the WABA business-document upload workaround. |
| Fixguru | The proof-of-delivery blocker that stopped the flow, and the consolidated issue list you briefed to tech after the showcase — with current status per item. |

---

## The transferable lesson

You are strong at understanding a client's operation and weak at converting that understanding into tracked commitments. The knowledge is the rarer skill. But knowledge that isn't written down with an owner and a date doesn't survive contact with a delivery schedule — and in this case it doesn't survive your departure either. Wherever you go next, the habit worth building is: every observation you make in a status meeting gets a name and a date attached before you stop speaking.
