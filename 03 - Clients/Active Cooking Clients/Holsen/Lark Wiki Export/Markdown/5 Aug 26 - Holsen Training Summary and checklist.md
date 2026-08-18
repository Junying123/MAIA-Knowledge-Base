**5 Aug 26 - Holsen Training Summary and checklist**

**Holsen Account --- Session Summary (5 Aug 2026 Refresher Training)**

Sources: Fireflies transcript (Holsen Training, full 123min), Granola refresher summary, Lark live session notes.

**Context**

Attendees: Mindhive (Ivan --- product/eng, Gareth), Holsen (sales rep, logistics rep, got MAIA access now, Ms. Wong --- new, no Maya access yet)

**Wansin taking over as account manager** --- current contact leaving end of week

Scale: 70--90 orders/day via WhatsApp / email / PDF

Holsen recently migrated off UBS onto SQL; still manually keying orders

**Key Decision**

Stabilize Holsen\'s SQL operations first → finalize MAIA↔SQL integration → then full team onboarding. Go-live is sequenced, not parallel.

**Bugs Found Live in Session**

**CPO 2026-142 --- attachment missing** on upload

**Duplicate CPO bug** --- ZH CPO 144/145: uploaded ONE PO, system created TWO CPOs

**LLM hallucination** --- misclassified as \"Holsen chemicals,\" wrong intent captured in chat session

**Batch not created** --- flagged mid-demo, unresolved at session end

**Gaps / Open Items**

**Batch & lot number handling → SQL integration = known blindspot.** Biggest risk flagged by Ivan. Deferred --- scoping needs real SQL data shape first before building.

Holsen **not using SQL purchasing module** (PO→GRN) --- still manual Excel. Ivan recommends adopting it: auto-generates batch codes, avoids double stock entry, avoids inventory drift. Holsen reluctant (imports mostly no-PO, contract-based deliveries).

**Poison form auto-attach** --- currently generated via MySPDF; once SQL live, needs custom SQL document generator. Vendor may charge for this customization.

**Role/user default flush needed** --- when client has custom roles, system should not keep default roles.

**User assignment** by role/name/email/phone --- needs cleanup.

**Batch search by item** --- not found/visible by batch + warehouse (requested feature).

**WhatsApp Business API blocked** --- IP/login-attempt errors unresolved; going live on **Telegram** as interim channel.

C1/C3/A57 tax exemption logic walked through, confirmed working conceptually --- but batch-level enforcement (auto-lock quantity to certificate) is future scope, not built. Currently hybrid: certificate reference stored, batch-quantity movement not enforced.

Stock aging/expiry view exists (days-to-expiry), notification pushed to Telegram --- logistics only sees it now, expandable to other roles.

Two-way sync SQL↔MaAa confirmed as new standard (past clients only had one-way).

**Pending Blockers Before Go-Live**

Server access + VPN setup for SQL integration (Mindhive needs Holsen server access)

SQL vendor cost/feasibility check for poison-form auto-attach customization

Holsen to confirm timeline once SQL ops stabilized --- triggers next joint session

Integrations group chat to be set up (Wansin action item)

**Next Steps**

Wansin: create integration group chat, loop in ledger/accounting side, follow up with Mr.Tam

Holsen: confirm server/VPN access details to Mindhive

Holsen: screenshot WhatsApp Business error state for diagnosis

Holsen: report back once SQL ops stabilized to schedule next Maya rollout conversation

**Addendum --- Additional Points from Source Review**

**Architecture / Decision Points**

**SQL hosted locally by Holsen** (on-premise server) --- Maya keeps a mirrored copy of the data on **AWS cloud**

**SQL confirmed as system of record for inventory** --- Maya pulls inventory state from SQL, not the reverse

**Data retrieval risk flagged** --- if Holsen reinstalls/reformats their local SQL server, unclear whether previously-pushed data can be retrieved back. Ivan: \"not designed to do that but I think we can make it work somehow.\" Unresolved.

Holsen currently running **half-half** --- old system (UBS) and SQL in parallel. Full historical/accounting data won\'t transfer into SQL until financial year-end close.

Holsen separately backs up their own data to **Google Drive**; SQL itself backs up daily.

**Process / Feature Detail (from Lark session notes)**

**Production needs to be notified when a pick list is created** --- flagged as missing, not built

**Pick list**: updating picked qty should also update batch info if unset (Set = creator requires that specific batch; Null = open/any batch)

**Incoming by lot** --- sometimes a single incoming lot needs to be split into multiple batches

**Batch Mfg Date format must be DD/MM/YY**

Goods receiving may have **varied shelf life** across shipments/batches

**Open Questions --- Unresolved**

Whether **mixed document sourcing** is feasible (some documents generated from SQL, some from Maya) --- Ivan unsure, needs integration-team check

**Batch code naming convention** to auto-identify C3 vs non-C3 stock --- raised as next scoping item, not yet decided
