**Macro Frozen --- Internal Questions / Actions for Ivan (Tech Lead)**

**owner: Gareth\
status: review\
last_reviewed: 2026-07-14 (Grace call reconciled)\
lark_url: <https://eg69120xnei.sg.larksuite.com/docx/HuYldO3gCoEHEpxURIml9WOHgNg>**

Not client-facing --- these need a tech/feasibility answer before we either build, or go back to Grace/David with a scoped-down ask.

**1. POD enforcement (NS-07) --- now a harder blocker**

**Escalated 2026-07-14:** This is no longer just an enforcement-scope question. In a direct call, Grace explicitly rejected the whole photo-upload-to-Maya design --- her current process (photo → WhatsApp group only, no system status) already works for her, and she sees the proposed upload step as added work, not reduced. Original question (is conditional/partial enforcement technically buildable --- POD required for some DOs but not others, vs all-or-nothing) is now secondary to the real one: **should we build any formal POD/mark-as-delivered feature at all**, given the person who\'d operate it doesn\'t want it? This is now a David decision (see client question #19), but flag to Ivan so the team doesn\'t keep building toward a design that may get killed.

**2. Delivery trip / stock tracking gap**

Currently Out-of-Scope, but flagged as a real gap (DO needs delivery proof even without full trip management). Confirm whether this needs its own ticket regardless of how the POD client question is answered.

**3. Pick-list upload testing (AS-01) --- status check**

Confirm Kevin\'s upload-back support (pick-list PDF → Maya → amend SO) is tested and working. Hard deadline **Thu 16 Jul** --- this is the top-priority \"happy flow,\" blocks Macro Frozen readiness if it slips.

**4. Item historical pricing --- RESOLVED, no action needed**

**Resolved 2026-07-14:** Grace confirmed directly that the real practice is much simpler than assumed --- checking only the single **latest invoice** per item (unit price, quantity, occasional discount), not a multi-transaction/date/cross-item view. This matches \[\[01 - MAIA Product/Product Specs/Item Historical Pricing/Item Historical Pricing & Discount\]\] exactly as built for Fixguru. No feasibility check needed --- closing this item.

**5. Quotation → SO price-lock feasibility (AS-07 / VOC-014)**

Proposed flow: create QTN → edit price → submit QTN → convert to SO. The client\'s actual pain (VOC-014) is a **price-lock** --- a SO shouldn\'t quietly go out cheaper than what was quoted. Is it feasible to carry the QTN price forward as a floor/flag on the converted SO? Need this answered before asking David whether he wants it enforced.

**6. Item-name fuzzy matching (VOC-002) --- confirm Base coverage**

Client uses informal/fuzzy item names in orders (e.g. \"pork belly slice skin on\" vs formal SKU name). We\'re assuming Base MAIA\'s existing fuzzy-matching/learning covers this adequately for Macro Frozen\'s catalog. Can you confirm this is live and sufficient, or does it need tuning/training data from Macro Frozen specifically?

**7. Cash-from-driver recording (VOC-009) --- build estimate**

Finance currently keeps a self-made Excel log of cash collected from drivers. SL-02 (AR reconciliation) only covers bank/slip matching today. Rough estimate needed on whether this fits cleanly into the existing AR module before we offer it to the client as an option (see client question #22).

**8. Damage / batch QC photo log (VOC-023) --- build estimate**

Warehouse wants to photo-log damaged/discoloured stock against a batch. Only a generic \"issue ticket\" was floated in the 4 Jun meeting --- never scoped. Rough estimate needed before offering this to the client (see client question #16).

**9. New from 2026-07-14 Grace call --- awareness only, no dev action yet**

Two new items surfaced that are product/process decisions for David, not dev feasibility questions --- flagging for awareness so the team isn\'t caught off guard:

**AR auto-match adoption skepticism (SL-02):** Grace pushed back on the AR auto-match flow as no real time-save over direct SQL entry. Worth planning for a real-usage check post-go-live rather than assuming the walkthrough convinced her.

**Backup coverage gap (NS-10):** No process exists today if the logistics or finance manager is absent. Not a Maya config question --- David needs to make an operational decision here.

**See Also**

\[\[Macrofood --- Scope Lock v1 (reconciled)\]\]

\[\[Macrofood --- VoC Extraction\]\]

\[\[Macrofood --- Client Clarification Questions (2026-07-13)\]\]

\|（注：部分内容可能由 AI 生成）
