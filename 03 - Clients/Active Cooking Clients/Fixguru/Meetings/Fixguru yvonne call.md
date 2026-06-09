---
owner: Gareth
status: draft
last_reviewed: 2026-06-09
---

# Fixguru — Yvonne Call Notes

**Participants:** Yvonne (Fixguru), Gareth, Brandon (mentioned)
**Language:** Mandarin/English mixed
**Context:** UAT feedback + requirements clarification

---

## Credit Limit Request

Yvonne's core ask: **block Sales Order creation if customer has not paid / has overdue invoices.**

Fixguru's current internal flow:
> Proforma Invoice → Customer pays → Release stock (delivery)

They do not ship without collecting payment first. They explicitly asked Brandon about this ("Can we knock off at sales order?") before the project started.

### Two distinct needs (don't conflate)

| Need | Description | Covered? |
|---|---|---|
| Block SO if overdue | No new SO if invoices unpaid | Yes — `block_on_overdue` |
| Block SO if over limit | No new SO if L1+L2+newSO > limit | Yes — breach check at submit |
| Prepayment gate on delivery | Hold DO until receipt posted | No — separate mechanism needed |

### Gap: Approval override (FQ5)
No approval chain built yet. If SO is blocked by credit check, sales has no way to request override with audit trail. FQ5 in credit exposure spec is open — raise priority for Fixguru.

---

## UAT Quality Feedback

Yvonne frustrated — previous UAT session wasted 1+ hour, normal flow wasn't working.

Her standard:
> "Fix the flow → internal SIT → THEN come to me. Don't call me to test broken things."

Business dev person should do SIT before Yvonne's UAT sessions. She will not do exploratory testing.

---

## Other Requirements from This Call

### Itemised Discounts
Order-level discount = wrong. Fixguru discounts line by line.
> "Everything have to go by itemiser. You don't discount a whole order 10%."

### Historical Pricing
When staff on leave, covering staff has no transaction history. Need: last transaction price per customer per item to surface automatically when creating quotation/SO.

### Customer Search by Phone Number
AI should find customer by phone number — reduces friction, that's the point of AI.

### Box Dimension Calculator (Scoped in SOW)
Fixguru has Excel-based calculators for box dimensions/packaging. Multiple versions, all Excel. Scoped as 2 calculators in SOW. Jennifer developed them.
- Action: Fixguru to send latest Excel files → MAIA to build in-app calculator
- Currently missing from system; was scoped but not delivered

### AutoCount Integration
> "Auto car doesn't integrate properly" — raised as blocker. Fix required before UAT resumes.

---

## Action Items

- [ ] Fix itemised discount (order-level discount = wrong behaviour)
- [ ] Build historical last-transaction price per customer/item on QT/SO creation
- [ ] Fix AutoCount integration issue
- [ ] Get latest Excel calculators from Fixguru (Jennifer to send)
- [ ] Raise FQ5 (approval chain for credit override) — Fixguru use case is strong
- [ ] Clarify delivery hold mechanism — does MAIA need to block DO until receipt posted?
- [ ] Internal SIT checklist before next Yvonne UAT session

---

## See Also

- [[01 - MAIA Product/Product Specs/MAIA Credit Exposure]] — credit exposure spec, FQ5 open gap
- [[03 - Clients/Active Cooking Clients/Fixguru/Meetings/2026-05-20 Data Migration — Standup Notes]]
- [[03 - Clients/Active Cooking Clients/Fixguru/SOW/Fixguru SOW]]

---

## Raw Transcript

<details>
<summary>Full SRT transcript (Mandarin/English)</summary>

```
00:00:00,000 --> 00:00:28,000
啊 是哦 OK 明白OK

00:00:32,000 --> 00:00:59,000
这个就是他的 limitation, 所以我们才做完全部都有credit oh ok ok这个我们有问过BrandonCan we knock off at sales order?这个很不不common

00:00:59,000 --> 00:01:29,000
我们有遇到这样的问题那我们先collect钱才出货collect钱你明白吗collect钱就是你给performer invoice他给你collect money first before i want to send the stock outok明白你明白吗所以我们有问过这个question的when你们before start做这个system

00:01:29,000 --> 00:01:54,000
是是是明白明白OK

00:01:54,000 --> 00:02:19,000
我很怕讲真的因为我们这种东西很久而下了嘛讲要lunch要lunchlunchlunchlunchlunchlunch到来就我每一次都觉得你们你们不要来找我们先你们去find out哈我们已经align了的东西才来找我不要叫我做testing因为我很吃我时间你看那天就吃了一个钟头多which nothingok 来我你们会比较

00:02:19,000 --> 00:02:43,000
比较好啦 我也觉得testing也是比较好啦 我的问题就是你没有test好你就来找我先 因为我的criteria就是make sure他works and you 才找我 是的是 明白 那我们先看how do we improve 我们当天就是完全做的东西 连那个normal的flow都不对 这是明白明白

00:02:43,000 --> 00:03:00,000
其实有些时候啊我就这样觉得啦我觉得你们可能你们内部你们要测试你们我不知道那天你有没有测试才来找我们啊是是是有有测试啦只是不够就是miss了一些东西啦对因为你要当真也是

00:03:00,000 --> 00:03:29,000
买给我的人我知道你们SIT的话你们要叫那个business development的人test如果我在卖你东西我卖这个价钱可是customer一定会讲这个我要跟你讨价还价我一discount不可能整个单discount完的不可能的事情来着你自己也知道你去买鱼你不会跟他讲我全部你跟我扣他完的扣一个10%哪里可能你不整价扣一个10块扣20块那个10块是在哪里

00:03:30,000 --> 00:03:57,000
嗯明白明白所以靠上面好像也不对啊所以我建议你们要知道的是Everything have to go by itemizerwhich only make sense啊I don't want to do testingbut the first thing is you have to fix the flow first啊yeah got it got it嗯 the flow is like

00:03:57,000 --> 00:04:24,000
I think because of thethe auto carme doesn't integrate properlyyeah the auto car

00:04:24,000 --> 00:04:54,000
因为我相信您的时间很珍贵我们的时间也很珍贵因为现在我们总是有这些关于能力的问题所以当我们很缺乏能力的时候我们不会有时间帮助您在这方面如果我有时间的话我不会担心但是问题是因为我们的工作人员也在拒绝所以我们已经拒绝了很多工作人员当我们拒绝了一些工作人员之后

00:04:55,000 --> 00:05:25,000
哦,OK哦,中秋啊,OK,OK,so we...yeah,yeah

00:05:26,000 --> 00:05:56,000
ok i understandsoyeah yeah

00:05:58,000 --> 00:06:27,000
当你自己一个是一个salesperson那个人在跟你讨价反正你就会feel到我们的dilemma在哪里啊嗯明白明白有有然后因为好像我跟你讲when a staff is on leave or maybe their emceethen another staff cover we don't know their historicalso why all the pricing historical have pop up because of that

00:06:27,000 --> 00:06:50,000
哦哦OK是是是

00:06:50,000 --> 00:07:18,000
然后我们就要看他们买的东西当整个页面显示了什么是他们买的东西最后我们就能知道他们买的东西的价格然后他们买的东西的价格然后因为我之前也说过Brandon有时候我们不知道客户名字客户名字然后他们就出现

00:07:18,000 --> 00:07:44,000
I mean search the customer using their phone numberohoh

00:07:49,000 --> 00:08:14,000
嗯嗯嗯嗯

00:08:14,000 --> 00:08:43,000
然后AI就是AI,不然我们要再搜索,那已经不是AI了。嗯,AI我们应该减少我们的负担啊。所以因为你们...我现在不太确定,那天我认为Jan对你们解释了,

00:08:43,000 --> 00:09:07,000
因为我需要我需要他们的最新版本的计算机还有其他那种我可以送给你哦可以我可以送给你那种然后我可以送给你呃但是如何发展如何发展是由珍妮佛做的珍妮佛是那个女孩的那天她向一个你的同事解释对吧是的是的是的是的

00:09:07,000 --> 00:09:36,000
我们也需要那个calculator他可以直接帮我们算出来会比较快因为算这个part我们也take up我们很多时间的是明白明白嗯就如果你们Navmaya可以直接算出来based我们的information that we input的话that will be very useful嗯

00:09:36,000 --> 00:10:04,000
因为上次我们做那个rsc跟dicard了是因为他是旧的version了我们bid了所以我们要up to date啦make sure对对对我不知道他maybe他他们有改过改过一两次因为steven可能觉得这个东西不一样了说他他又在improvise我们always improvise我们的东西说可能我们东西是三个月前跟现在是不一样的东西了是是明白明白

00:10:07,000 --> 00:10:37,000
我们一直可能两三个月我们就会换一下所以说呃 for 你的 site 哦就是说 make sure 哦他 always sing the latest one 哦哦 sing the latest one可是可是通常 usually 他们呃我们会好像可能过几个月他有出最 latest version我会叫他 update 了的那个因为可是你们 calculator 现在是在 excel 那边用哦一个 google

00:10:37,000 --> 00:11:07,000
那是在Excel,Excel so far我看定其他没有什么去做什么东西啦,之前他们有做一点amendment啦,反正之后就没有了,I think because of virus in place我们又换一点点东西上去啦。哦,不用紧要,你可以叫,过后你可以send过来哦,就那个calculator。嗯,还有,还有,因为你们还有其他的calculator是吗?我们有很多种哦,以前只有,I think只有两种。

00:11:07,000 --> 00:11:29,000
那些calculator你也教他们一次过send完全部最latest

00:11:33,000 --> 00:11:56,000
你whatsapp全部放在一个compile这样一个folder咯看能不能放在这个folder上给你啦啊可以可以全部都是全部都是excel的咯你们的calculator全部是excel的ok所以很多formula在里面会比较容易啊因为它很compactokokso一定是excel的ok

00:11:57,000 --> 00:12:25,000
因为这个calculator我们会scope吧因为之前我们塞SOW我们include两个calculator对对对,可能那个时候呢,gen跟Marcus上也会upgrade到因为gen develop了后,可能他忘记要给你们这个工具是是他做过一下,可能就觉得太多工具了,就忘记要给你们这个哦,ok,不用紧

00:12:25,000 --> 00:12:55,000
这样你们你先过来过后你先过来过后我们会go through咯过后我们再给你知道咯好吗可以可以okso啊今天到就到这边咯好ok可以没问题ok啊谢谢你啊还有什么东西要check吗嗯什么啊对啊还有什么东西要check吗没有啊我有问题再call你ok吗如果可以可以如果我不再call的时候我就可能evening

00:12:55,000 --> 00:13:03,000
啊可以没有问题没有问题好 thank youok thank you everyone bye bye
```

</details>
