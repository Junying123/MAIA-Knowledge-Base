**3Aug26 - Dalson UAT Gaps**

Dalson prefers MAIA templates over Autocount generated ones.

Is there a setting that allows the MAIA template to supercede the Autocount PDF?

Proof of delivery attachment by external ID failed

\@Gareth Ngadd failed screenshot here

  ------------------------------------------------------------------------------------------------------ -------------------------------------------------------------------------------------------------------
   ![](3Aug26 - Dalson UAT Gaps_assets/media/image1.png){width="2.6875in" height="5.010416666666667in"}   ![](3Aug26 - Dalson UAT Gaps_assets/media/image2.png){width="2.71875in" height="5.010416666666667in"}

  ------------------------------------------------------------------------------------------------------ -------------------------------------------------------------------------------------------------------

+---------------------------------------------------------------------------------------------------------+:-------------------------------------------------------------------------------------------+
| Need to hide Credit Notes                                                                               | ![](3Aug26 - Dalson UAT Gaps_assets/media/image4.png){width="3.59375in" height="1.8125in"} |
|                                                                                                         |                                                                                            |
| Since Autocount using Sales Credit Notes and Customer Credit NOtes                                      |                                                                                            |
|                                                                                                         |                                                                                            |
| > ![](3Aug26 - Dalson UAT Gaps_assets/media/image3.png){width="1.8125in" height="1.2604166666666667in"} |                                                                                            |
+---------------------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------+

Hide Prospects for ALL Clients

Proof of delivery must be one single action

Marking a delivery note as delivered must be a single API call that attaches both the proof of delivery and mark as delivered, not two steps as tested.

Questionnaire not filled up. \@Gareth Ng@Wan Sin

CPO with Quotation attachment use case, need to Auto link to Quotation

Most documents come with the original document, so SO created first in the system then PO comes later, so there needs to be a CPO autolink to SO

PO that has more Items than the QT or SO

CPO Matching confidence tool tip message needs better copywriting, too long simplify it.

> ![](3Aug26 - Dalson UAT Gaps_assets/media/image5.png){width="5.75in" height="3.9375in"}

CPO Extraction Item Level remarks/note not extracted!

+:-----------------------------------------------------------------------------------------------------------------:+:-------------------------------------+
| ![](3Aug26 - Dalson UAT Gaps_assets/media/image6.png){width="2.7083333333333335in" height="1.8541666666666667in"} | **\[PO-CP1134267_v1_20260714.pdf\]** |
|                                                                                                                   |                                      |
| ![](3Aug26 - Dalson UAT Gaps_assets/media/image7.png){width="2.7083333333333335in" height="1.84375in"}            |                                      |
+-------------------------------------------------------------------------------------------------------------------+--------------------------------------+

what is the special instruction for?

![](3Aug26 - Dalson UAT Gaps_assets/media/image8.png){width="4.927083333333333in" height="9.166666666666666in"}

+----------------------------------------------------------------------------------------------------------+:-------------------------------------------------------------------------------------------------------------------+
| Item Search                                                                                              | Original top candidates after CPO Mapping                                                                          |
|                                                                                                          |                                                                                                                    |
| Stanley 10-143-S \> 10-143-S                                                                             | ![](3Aug26 - Dalson UAT Gaps_assets/media/image10.png){width="2.7083333333333335in" height="1.8645833333333333in"} |
|                                                                                                          |                                                                                                                    |
| > ![](3Aug26 - Dalson UAT Gaps_assets/media/image9.png){width="2.7083333333333335in" height="1.78125in"} |                                                                                                                    |
+----------------------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------+

Item synced from Dalson No UOM able to select at CPO after item mapping?

> ![](3Aug26 - Dalson UAT Gaps_assets/media/image11.png){width="5.75in" height="1.7291666666666667in"}
>
> ![](3Aug26 - Dalson UAT Gaps_assets/media/image12.png){width="5.75in" height="3.96875in"}

Front End Validation Bypass

Delete 1 item, all fields validation wrong and mess up

Need to recompute on line item add/remove

> ![](3Aug26 - Dalson UAT Gaps_assets/media/image13.png){width="5.75in" height="4.020833333333333in"}

![](3Aug26 - Dalson UAT Gaps_assets/media/image14.png){width="5.75in" height="3.9791666666666665in"}

1\. **Qtn PDF missing discount column**

> Dalson used the discount; make sure pdf reflects the discount from FE
>
> ![](3Aug26 - Dalson UAT Gaps_assets/media/image15.png){width="5.75in" height="6.833333333333333in"}

2\. **The customer is not the top candidate, but it reflects on all customers**

![](3Aug26 - Dalson UAT Gaps_assets/media/image16.png){width="5.75in" height="3.9270833333333335in"}

But this PO can match the customer as the top candidate

![](3Aug26 - Dalson UAT Gaps_assets/media/image17.png){width="5.75in" height="3.96875in"}

3\. **Can our cpo extract the qtn no from po and then link with the created QTN?**

Because most of the dalson\'s customers po, will have a QTN number reference.

After Dalson creates the qtn, they will issue the qtn to the customer; then the customer will send the PO to dalson, dalson will attach the QTN to the CPO

![](3Aug26 - Dalson UAT Gaps_assets/media/image18.png){width="5.75in" height="3.96875in"}

Customer fails to match due to this customer not existing in the db and it is considered as cash sales customer when checking it from the qtn

![](3Aug26 - Dalson UAT Gaps_assets/media/image19.png){width="5.75in" height="2.8854166666666665in"}

4\. **Can CPO item match with item description?**

Should the client rename this item for the sake of consistency?

Because the current issue is the CPO item name fail to match the item as checking the qtn, the exact item name from cpo is the item description from the item

![](3Aug26 - Dalson UAT Gaps_assets/media/image20.png){width="5.75in" height="1.8645833333333333in"}

![](3Aug26 - Dalson UAT Gaps_assets/media/image21.png){width="5.75in" height="4.020833333333333in"}

![](3Aug26 - Dalson UAT Gaps_assets/media/image22.png){width="5.75in" height="3.21875in"}

5\. **Fail to search customer secondary contact where primary contact is empty (email as well)**

![](3Aug26 - Dalson UAT Gaps_assets/media/image23.png){width="5.75in" height="2.875in"}

6\. **Qtn is expired, but its invoice and delivery note were created.**

Is the qtn status incorrect? Should it be expired or ordered, because there are invoices and delivery notes for the qtn.

![](3Aug26 - Dalson UAT Gaps_assets/media/image24.png){width="5.75in" height="3.375in"}

![](3Aug26 - Dalson UAT Gaps_assets/media/image25.png){width="5.75in" height="3.375in"}

![](3Aug26 - Dalson UAT Gaps_assets/media/image26.png){width="5.75in" height="3.375in"}

**#382 --- Item historical pricing URL inconsistent --- standalone UI vs draft SO details page**

Chatbot returns different URL types for item historical pricing depending on context, sometimes the standalone item historical pricing UI page, sometimes the draft SO details page.

Expected: when user looks up item historical pricing ONLY, return standalone UI page (its final step leads to create order/QTN/invoice). When a draft SO/QTN/invoice already exists and user wants to update price with historical pricing, return the doctype details page instead.

**\[该类型的内容暂不支持下载\]**

**\[该类型的内容暂不支持下载\]**

**#381 --- Chatbot returns historical pricing URL even when item has no historical pricing data**

Querying historical pricing for an item/customer combo with no records still returns a URL. Expected: chatbot should not return a URL if there is no historical pricing record for that query.

**\[该类型的内容暂不支持下载\]**

**\[该类型的内容暂不支持下载\]**

**#380 --- Chatbot returns one historical pricing URL per item instead of one combined URL**

When looking up historical pricing for multiple items (e.g. 10 items), chatbot returns 10 separate URLs. Expected: always return a single URL that filters based on the items queried.

**\[该类型的内容暂不支持下载\]**

**#378 --- Chatbot converts CPO to SO but frontend does not reflect the conversion**

When chatbot converts a CPO to a new draft SO, the CPO in the frontend is not converted to SO. Expected: frontend should convert the CPO to SO in sync with the chatbot action.

**\[该类型的内容暂不支持下载\]**

**#376 --- Proforma invoice PDF file naming is incorrect**

Proforma invoice PDF file name does not say \"proforma invoice\". Expected: PDF file name should reflect proforma invoice.

**\[该类型的内容暂不支持下载\]**

**#375 --- Proforma invoice and sales order PDF native template layouts are inconsistent**

Proforma invoice and sales order PDF native template formatting/layout differ. Expected: both templates should use a consistent layout.

**\[该类型的内容暂不支持下载\]**

**#372 --- Lead email not populated in frontend lead details page**

Email of lead is not populated in the FE lead details page. Expected: lead email should populate in the lead details page.

**\[该类型的内容暂不支持下载\]**
