**27 Jul 2026 --- Macrofrozen Scope Lock Update Notes**

**owner: Gareth\
status: draft\
last_reviewed: 2026-07-27\
lark_url:**

**Purpose**

Cross-checks 3 sources against the current Macrofood --- Scope Lock v1 (reconciled) and the old infopack Field Guide (https://eg69120xnei.sg.larksuite.com/wiki/XZKcww7c5iKVYWkh6G0lJksaggc), and lists exactly what needs to change.

**Sources used**

Maya Training --- Identified Gaps Report.md (local) --- 14 gaps from the 16/17 Jul training sessions.

20Jul26 - Macrofrozen Before vs After MAIA (Lark) --- full current-state vs MAIA-state workflow, confirmed roles/permissions.

23Jul26 - Macro Frozen Enhancement (Lark) --- concrete build spec answering several of the training gaps.

**1. Major finding --- order-entry ownership is now answered**

The old Field Guide/Signoff Checklist left \"who keys in the relayed WhatsApp order\" as an **open decision** (Section 6a), because Grace was wrongly assumed to be the order-enterer, then corrected to \"unknown.\"

**20Jul26 doc resolves this directly:** the **salesperson themselves** forwards the customer\'s order to the MAIA WhatsApp chat, MAIA drafts the SO, the salesperson reviews/corrects it, and **the salesperson submits it**. Office/admin order entry is not the model --- it\'s salesperson self-service via MAIA chat.

**This contradicts current Scope Lock AS-04/AS-04b:**

AS-04 (LOCKED, confirmed 2026-07-14): \"outdoor sales scope is **query-only**\... not order-entry capable.\"

AS-04b (LOCKED): \"sales rep → WhatsApp message to office admin → **admin** creates SO in MAIA.\"

Both are now superseded by the 20Jul26 doc. **Recommend:** reopen AS-04/AS-04b, update to reflect salesperson-submits-SO-directly, and note the supersession explicitly (don\'t silently overwrite --- this was a LOCKED item).

This also resolves the Role-Permission-sheet conflict flagged earlier in this pack\'s audit (Sales User had WRITE/CREATE on Sales Order per the permission sheet, which contradicted the \"query only\" framing) --- **the permission sheet was right, AS-04\'s query-only description was stale.**

**2. Training gaps --- now resolved by the Enhancement doc**

  --------------------------------------------------------------------------------- ---------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  Gap \#                                                                            Gap                                                        Resolution in 23Jul26 doc

  #2                                                                                Management can\'t filter dashboard by salesperson          **Resolved as a build item** --- \"Sales Dashboard Filter: for David and CJ, Dashboard should support filtering by Salesperson.\"

  #3                                                                                Customer remarks/notes not carried into pick list output   **Resolved as a build item** --- Pick List gets Customer Name + Additional Notes columns, remarks moved to top of page (was buried at bottom), warehouse grouping by Customer/SO/Warehouse.

  #5                                                                                Supplier/stock entry/cost not integrated                   **Confirmed still out of scope, explicitly** --- \"Stock entry - out of scope. Supplier name is a required field\" (SQL-side, not Maya).

  #14                                                                               Duplicate customer detection incomplete                    **Resolved as a build item --- \"Lead Merge\"**: detects existing customer during lead conversion, allows merge (CRM notes, contact, phone, email, address, company info), latest value wins on conflict.

  Lead/Prospect conversion (previously \"entirely new scope, not in Scope Lock\")   New capability                                             **Simplified, not built as originally discussed** --- Prospect module and Lead→Prospect step are being **hidden**; adopting a straight **Lead → Customer** flow instead. CRM notes carry forward from Lead to Customer on conversion.
  --------------------------------------------------------------------------------- ---------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

**3. New scope surfaced (not in current Scope Lock at all)**

**SKU replacement during picking** --- warehouse can substitute an out-of-stock SKU during pick/pack; system should retain original SKU, replacement SKU, who changed it, why, and approval status where required. Not previously scoped anywhere.

**Kilograms-per-box tracking** --- separate from total actual kg; warehouse needs box count + kg/box, not just total weight (ties to AS-01/fresh-weight, needs to extend that item\'s acceptance criteria).

**Tiered price-approval routing** --- confirms 3 tiers: normal price (auto), below customer/default price but above minimum (**CJ approves**), below minimum price (**David approves**). SL-03/SL-04 currently only describe a single credit-limit-style block; this pricing-approval ladder is more granular and isn\'t captured yet.

**Explicit \"Grace must ask MAIA to generate Invoice/DN\"** --- MAIA does NOT auto-generate Invoice/DO when the amended SO is submitted; Grace has to separately request generation. This is a meaningful nuance missing from SL-07\'s current acceptance criteria (currently implies generation happens once SO is confirmed).

**POD uploaded by Accounts, not the driver** --- 20Jul26 doc: \"Accounts uploads the Proof of Delivery to MAIA.\" This is new detail on top of the existing NS-07 BLOCKED conflict --- worth noting even though NS-07 itself is still blocked pending David\'s decision (Grace\'s rejection of the whole POD-into-Maya design hasn\'t changed).

**Credit control toggle naming fix** --- \"Bypass credit limit\" / \"Overdue block\" (confusing pos/neg mix) → standardize to \"Credit limit enforced: Yes/No\" and \"Overdue block enabled: Yes/No.\" Cosmetic but affects SL-04\'s UI description.

**Product Detail screen --- hide Purchasing tab from warehouse users.** New, minor permission-scoping item, ties to SL-04/role matrix (warehouse should not see cost/purchasing data --- this is now an explicit build item, not just a stated rule).

**4. What\'s now stale in the old infopack Field Guide**

The Field Guide (old, pre-27Jul) still reflects:

AS-04b\'s \"admin enters the order\" model --- **now wrong**, per §1 above.

No mention of SKU replacement, kg-per-box, or tiered CJ/David price approval --- all new mechanics from the 20Jul26 doc.

Grace\'s DO/Invoice creation described as following directly from weight confirmation --- missing the \"explicit ask\" step now confirmed.

Roles table doesn\'t yet reflect Apple/Applle\'s confirmed scope: **credit limits and credit terms specifically**, not general Admin parity with David (20Jul26 doc: \"Apple --- Finance\... Sets customer credit limits\... Controls customer credit terms\" --- narrower and more specific than the earlier \"same permission level as David\" assumption).

**5. Recommended Scope Lock actions**

Reopen **AS-04 / AS-04b** --- update to salesperson-submits-SO-directly model, note supersession with date/source.

Add **new AS item** for SKU replacement during picking.

Extend **AS-01** acceptance criteria with kg-per-box / box-count tracking.

Extend **SL-03/SL-04** with the 3-tier price-approval ladder (auto / CJ / David).

Extend **SL-07** acceptance criteria --- Invoice/DN generation is an explicit Grace-initiated action, not automatic.

Resolve/close training Gaps #2, #3, #14 in the Needs-Scoping Register --- mark **RESOLVED (build spec confirmed 2026-07-23)**, not still open.

Correct **Apple\'s role definition** --- Finance/credit-limit/credit-term scope specifically, not blanket Admin parity with David.

Add note that **Prospect module is being hidden** --- simplifies any prior Lead/Prospect scope assumption to a flat Lead→Customer flow.

Update NS-07 (POD) with the Accounts-uploads-not-driver detail --- does not resolve the blocker, just refines the mechanism description for whenever David decides.

**See Also**

\[\[Macrofood --- Scope Lock v1 (reconciled)\]\]

\[\[Maya Training --- Identified Gaps Report\]\]
