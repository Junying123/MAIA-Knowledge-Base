---
owner: Gareth
status: draft
last_reviewed: 2026-06-22
---

# GST Fine Foods — All Meeting Transcripts

Consolidated raw Granola transcripts + meeting notes in chronological order. Source of truth for context during RG processing, SOW drafting, and SAP integration planning.

| # | Date | Meeting | Type |
|---|------|---------|------|
| 1 | 2026-04-27 | GTM Brief | Raw transcript (Gareth internal debrief) |
| 2 | 2026-05-03 | RG Prep Questionnaire | Structured notes |
| 3 | 2026-05-04 | Requirements Gathering (Online) | Raw transcript |
| 4 | 2026-05-04 | Ivan's RG Notes | Handwritten notes from Lark |
| 5 | 2026-05-19 | WABA Account Setup | Raw transcript |
| 6 | 2026-05-19 | SAP Vendor × Mindhive | Raw transcript (v1 full) |
| 7 | 2026-05-19 | SAP Vendor × Mindhive (v2) | Cleaned speaker-attributed version |

---


---

---
granola_id: 675afe4e-0185-45a8-b4dd-404738d6edbf
title: GST Fine Food  GTM brief - Transcript
type: transcript
created: 2026-04-27T10:06:06.512Z
updated: 2026-04-28T10:29:31.911Z
attendees: []
---

# Transcript for: GST Fine Food  GTM brief

### You (2026-04-27T10:06:08.769Z)

Okay. See you before then. See you before then. Okay. Frozen and frozen seafood lakh. Not just not just fish. They could be like tong or whatever. And then all this, would they have like market price, the overall No. Their prices don't jump so much because Based on KG. This is extended already. Right? Their pricing their pricing goes standard. First, they sell like those package, package frozen fish. Oh, packet one? Ah, packet one. So it's like a fixed price already one. Only certain cases where the prices will change, which is in the quotation part. So And this is like different customers. They have something called RFQ. RFQ means like hotels or somebody would just ask them like, I'll just send Excel file Insert the Excel file there will come will mention, okay, I want this, this, this, this item. So when GST receives this, their job is to go and match, okay, this item. Whatever is in my inventory, can I fulfill this? Okay? To this attitude? If they cannot fulfill, then they need to substitute. So when would they substitute is there'll be certain instances. Is the type of fish itself. Maybe like from Norwegian salmon and fucking don't know, some other country salmon, that's one one one instance. Another instance is maybe the cut. The cut filet tail, head, whatever lah. Cut. So there's there's there's quite a few dynamics when you look at one when when when it comes to this quotation. K? So one problem they have over here in this quotation is number one, definitely matching the product because if let's say there's a lot of quotations coming in, they need to match it. Manually by itself, need to think how to how to suggest the products and stuff. The cut, the weight, everything they need to take into account. Okay. So far? I think they also have their own farm right here. Yeah. Okay. So they they will also import the the form. From other people. Correct? Other other country. From their own farm, from outside, so they will have Okay. So Another thing that they they they always face in this product matching or rather order creation is that they always need to check internally what is the inventory quantity. Because yeah, because people don't update it in time. So every day what they do is they are I think, a finance or somebody for operations, where I support everything from the SAPB one the inventory. Put it into an excel sheet, that is live, and then the salespeople will just go there and see sometimes. If let's say they see already they want a double confirm, sometimes they call internally to say, hey, this one I'm order like 10 of it, you help me double confirm this one we got 10. Before they create the order. They compare it to That that So how they do it is, like, for example, this batch today they set like a fixed date, maybe like two weeks down the line considers Okay. Something like that. That I'm just using the time very loosely. That could be like a month or two or whatever. But Well, all all the all the loosey. Correct. Frozen, but we still have expiry Okay. So, yeah, on top of that, that's the order part of things. A lot of like product matching issues, checking quantity issues, and then also, yeah, basically, these two mostly. Seafood. So syndrome. Let's say, In RFQs, maybe yes. I've used that for customize for the Correct. Like, if I'm a hot I want to suddenly order Big Bang. Alright? I don't know. For some reason, for Hubei or whatever, yeah, I I issue RFQ from to GST. Then all this speech, can you help me can you help me fulfill? If cannot, then you suggest. Then we discuss. Okay. So another thing they also ask for is also on the payment and also approval side of things So when they receive payments, all this, it will need to flow to finance to do approval. On the payment slips. To make sure that they receive the payment before they can co close it the only They will yes. Do they use proforma No. No pro form a based on our discussion with them. So far, never heard any proforma from them. No. But it's essentially proforma. Yeah, based on the workflow. But but they actually generate pro form a Yeah, but the workflow is pro form a workflow. Mhmm. Okay. Any other question? Yeah. Features, the apply for we were building for them is number one, the quotation intact. Intake and preparation. So bear in mind that this one will be an Excel file. Our output shouldn't be an Excel file. What I told them was that we'll output it in the form of a text message to tell them that this match to this, this match to this, this match to this. So their job is to take this information and they go and fill up their Excel file. What GST quotation This is the RFQ part. So when they upload the Excel file, Maya's job is just to help them match and then show them the results. Not populating into the Excel file, written into them. You will work somewhere like Ming Medical. There will be a place where they can actually just check all the all the what then they fill up the price. If you they fill up the price or they will give a recommended price and then fill up everything. That they can change lakh. Export that quotation. Do you know how being medical or not? Yeah. You know? So their job is to fill up Okay? Let them do the filling up. We just do the matching only. Okay? So these two come hand in hand, the product matching and also this We need to be able to intake process, match, output for them. Okay. Standard order. This one don't need to say lo. So this one, SAP is what they are using, b one. So, yeah, this one we need to integrate to certain things. One thing we need to take note of is they talking about something called crystal reports. Let me generate any form of report, it needs to follow their report. What did crystal report? Report. They keep mentioning over and over and over and over Crystal report, like, using the same formula. What I'm assuming is the format they they call internally in SAP. Call in So the documents generator need to follow the SAP one. Okay? Ok? So next one is payment slip review and approval handling, like what we talk about just now. When you wanna close out orders using payment slip, you need to always flow through. Finance to a to make sure that they receive payments. Same goes with credit limit as well. We got blocking. Flow to finance over No worries. This only to you. The the latest proposal as well. Where's the crystal reports here? I put it inside. Why not? It's not mass used, must be similar to Sorry about format. The premium one. So they're using B one. Same goes with SEC and lyukh for easy use Next one is we need to help them to payment slip review and approval handling like what we talk about just now. Same goes with also the credit limit. Okay? Okay. Yeah. Lastly, this one is just to help them to yeah. This is the back end system. For for us to provide to them to see the visibility of the order updates and stuff like that. And then a backend system. On matching sales order to stop. Customer specific condition, matching logic, payment exception payment slip is only talked about, One more thing is aging and reminder. Logic. So remember just I mentioned, that they are assigned there Let's say today stock, x amount, days later considers expired or age. If let's say, detect that any batch or any lot of stock going to expire soon, we also need to sort of send a reminder to sales. K. One more thing they also brought up is this something called customer purchase request. Nope. K. So let me explain a little bit what this means. Right here. So they have certain customers, right, that will just like, let's say, some restaurants, they will just order order from them, and then it's a big amount. It's sort of like a blanket order, but then they don't have PO whatsoever. Okay? And then they don't actually key in this as a sales order. But they just keep track of it. Yeah. They separate. From the the track, like, let's say usage proper, they want What? The track the usage proper. Let's say 1,000, I released 10 already. I got nine nine hundred ninety left. Stock. The the purchasing there. Hey, this for the requested one. So 10,000, let's say 10,000 cottage. Right? Basically for which client? So we wanna track this, so that we then, after that, we mind back the the salesperson to say, hey, this one is still one or not? You still one or not? Still one or not? So, but every single time a new salesperson wants to to to to place an order based on the job stock. Let's say they've got 10,000 stock. This 10,000 already choke for this guy. So every time a new salesperson wants to create, a sales order on this stock, it will ask them ask him first. Or ask the boss first, whether one to will release him. Either one. So you just need to know from them what their flow is means whether ask the salesperson or ask the boss. Sorry? You can let's say the reserve. 10,000. Take or or actually order from 10,000. Right? You know. So so it can be a negative hold. So basically, basically when I jog 10,000, when I jog 10,000, it can basically, now let's say about 300. Okay? So then they will actually send a request to that means the purchasing will will check this. And then they make their purchases based on this. Right? It's a a interface lock, then they make the purchasers based on So once they make based on this already, then then it will why call that? It will muscle stop, man. Yeah. So maybe they make 12,000 you know. They they buy 12,000 units. So it comes in already. Then then basically, but but 10,000 on this 12,000 is choked for this guy idea. Sorry? As of now, all this is remind back their salesperson. On the It's just one way then. We some way that the maybe the boss or the purchasing guy can use, and then x out. This. Holes. It's a holder. Is a whole thing Yeah. He's Nothing my approval. So so we need to know what their approval is. From them. We need to invent it because there's a few ways One is approval from the salesperson, and I'm like in SCC, I think it's approval from the salesperson. From the other salesperson. But they might for them, it might be approval from So it is to do this so that they can configure it correctly. The thinking then basically let's say this hotel guy told me, hey, next month I need to order 10,000 units of corn. Prepare for me. But this is not a real sales It's just basically, but they know that this claim most likely will buy. But it's not 100% also. Right? But for them, it's like they enter the stock first. You know? They enter the stock first so that they can achieve for fulfillment. Because when they need it, they need it three days. They need like, sometimes the lead time for that stock like one month. And also they order it first. Prepare. For the eventuality. Of course, this one is a decision. That the purchasing department makes. Fulfill this. Our job is to give them the the component here. And we So so by the way, it's no issue one. It's just yeah. Just just converting. To the to a normal order. Yeah. Maybe. But but, basically, there's still a whole lot of 10,000. Units for that stock. Yeah. So that's why maybe they will enter 2,000 and still help for this guy. They'll enter another 2,000 and still help for this guy until the 10,000 is Yeah. Yeah. Correct. Is this a lot of people? Little bit like that. Actually, there are a few things that I'm missing from here. What other things? One is the particular fish, they might change immediately. So we will need to make sure that we can actually push from the ERP to our our our our system, almost life. A particular fish. Yeah. So basically, I'll give you an example. So basically, they might. Create order for how many fish head. Okay. That's it then. Fish head. Then they will need to it. In their system, they will change from fish to fish head, And then we then only with sakit Yeah. That means because from one fish, Different part. Yeah. So you need to you need to dig deep into this because I believe that this one can be solved by the ultimate bomb issue. Teacher. Okay. Yeah. Actually, this can be solved by the Alright. One phase is a problem. One fish about mother. Yeah. I spoke to Maybe. Yeah. So we need to understand this part more. How how do you miss this part? Because he actually in that second or third call, the whole team actually did sort of product multiple times. Record also never got that. Outlaw. Thank you. Then I'm questioning, like, what's your book? Flow for that lah? Basically, I'm not sure. Maybe you have to do it right after the call or something. Something in that line because if that's the that that one was a I I this is this they keep repeating that piece, and then it was something that they asked us if we can do Yeah. So, usually, you need to to to to dig deeper, like, into into what is the exact workflow for this Basically, in a sense that when a sales audience what scenario? One. Because she didn't go they didn't go so deep into But, basically, what they say is that, oh, sometimes, Then then what I respond to them was, was, oh, we can actually set the cron time as per your need. If it's small yeah. And this this was the the cost, but it's not here. And I remember him saying he would be truly I I don't know He did mention the RFQ at that time. Like, let's say, if they want, like, the tail cut, then they can suggest to give, another cut, like, the most large No. They You know why they they That means they're not the assist people. Can actually want the spot change the SKU or change the SKU from a fish to a fish head only? Because it depends on who they sell to. So it might be just someone that walk into their to their place, or or or message them. Know, like, hey, you know, you whatever it is. Because they told me they say, you did these changes reflect the immediate. So so it means that our country is to sync regularly. That we need to sell flour. I foresee So so maybe that's that's the one I mean, then when you determine how many minutes did they And then we need to make it clear that all these all Right? K. Lastly, something called stigma of a generation. Do you want to be able to, on a monthly basis, be able to generate account report called SOA, statement of account, to send to their customers on their outstanding payment. So We starting with P Teng Bunch first. And then yeah, they they haven't give me a sign of when they wanna start the KL and other branches. So we can start with the b ten one first. So later, I'll add you all into the group. They already added one of their PICs in the One, one Is it separate altogether? Yeah. I remember is set. I remember. I I am not a 100% sure. I mean, I I know that the account is separate. But I'm not a 100% sure that the bank and KL one two six are showing. If it's not, then we need to talk to everyone and see how to how to do it lah. Because it may not be a bad thing, so I'm actually if we can actually integrate and then go to I don't know if, but I don't know technically what's there. Yeah. No. Because they cross them. So they operate as their own separate port. Oh, and each company is the only one. That means Penang Wan will serve the northern area. And then the KL one is middle and southern. So far, they don't sign anything right now. See whether this week we cannot. If not possible, then next week, please schedule. Start with the recommended scheduling. Yeah. PIC's name is called You communicate Joey pong. Okay. No shops, sir. Oh,


---

# 2. 2026-05-03 — RG Prep Questionnaire (Meeting Notes)

<title>3May26 - Requirement Gathering Meeting </title>

# GST Fine Foods — Requirement Gathering Questionnaire

**Purpose:** Structured questions for the post-sign RG session so Phase 1 / Phase 2 scope, SAP integration, and UAT can be pinned down without rework.

---

## Org model and rollout

- Which branches go live in Phase 1 — KL only, or Penang / Langkawi included from day one?
- What is the SAP B1 structure across branches — separate databases, shared database with separate company codes, or one company?
- Does stock move between branches — can one branch sell stock owned by another?
- Two branches using the same inventory source?
- Confirm named PICs by role: sales coordination, finance, operations / inventory, IT / SAP vendor. How many users will use MAIA?
- Confirm actual monthly order volume per branch (proposal estimates: KL \~4k, Penang \~4k, Langkawi \~2k).
- Is anything currently listed as Phase 2 that GST expects to be included in Phase 1?

---

## RFQ / quotation intake

- Who are their customers mostly, hotels, restaurants, hypermarket?
- How do customers send RFQs — email, WhatsApp, walk-in, or a mix?
- How long does GST quote for the quotation? How many quotation day/week/month
- Do customers use a standard Excel template, their own format, or free-form? Can we get 3–5 anonymised sample files?
- How many line items are in a typical RFQ?
- When GST cannot fulfil a line exactly, what is the default, substitute, leave blank, or call the customer first?
- How GST matches their product with the customer's requested items?
- After MAIA returns match results, who fills in the price — always manual 
- Do GST have customer pricing for their order? Will MAIA pull from SAP price list?  Do u have min/max/std price? How does GST decide/quote the price?
- What is the target turnaround time for an RFQ response today vs what GST wants?

---

## Product matching rules and master data

### 2a. SAP item master structure

- How is a product identified in SAP — does one SKU represent one specific cut, or does one code cover a species with cut and weight as attributes?
- Which attributes are mandatory to uniquely identify a product — species, origin, cut, weight band, pack format, pack size, brand, fresh vs frozen?
- What is the primary unit of measure for selling — KG, packet, carton, piece count? If selling by KG but invoicing by carton, how does the invoice line show it?
- What is the UOM — e.g. 1 pack = 20kg, 1 carton = 10 packs?

### 2b. Customer naming vs internal naming

- Do customers use their own product names that differ from GST's SAP item names?
- Is there a cross-reference table mapping customer names to GST internal items — in SAP, in Excel, or only in people's heads?
- When a customer writes something ambiguous (e.g. just "salmon" with no cut or weight), what does the salesperson do today?

### 2c. Substitution rules

- Who is authorised to decide a substitution — any salesperson, or does a supervisor need to approve?
- Which substitution dimensions are acceptable without asking the customer — different origin, different cut, different weight band, different pack size, different brand?

### 2d. BOM and processing (whole fish → cut)

- When a customer orders "whole fish" but warehouse processes it into cuts, when does the SKU change happen in SAP — before SO is confirmed, during warehouse processing, or at DO stage?
- After processing, does one whole fish produce one SAP line or multiple lines (e.g. head + fillet + offcut as separate lines)?
- Who updates SAP when the cut or BOM changes — salesperson, warehouse, or finance?
- When a SKU changes mid-order, does the price change too?

### 2e. Item master maintenance

- How often are new items added or existing items changed — quarterly, monthly, weekly, or ad hoc?
- Who owns item master updates in SAP?
- When a new item is added, how quickly does the sales team know — immediately, or with a delay?

---

## Inventory visibility and source of truth

- What is the authoritative stock figure sales uses to make promises — SAP live, the daily Excel extract, or a verbal check with warehouse?
- Who prepares the daily inventory Excel extract, how often is it refreshed, and what fields does it include?
- When a large order lands between refreshes, what happens?
- When stock is shown to a salesperson, should it be gross qty or net of existing reservations and CPRN earmarks?
- Before confirming a large order, does a salesperson always call or message someone to double-check — or do they trust the system?
- At what level should MAIA show stock — per branch, per warehouse/bin, or company-wide?
- Is stock ever soft-reserved for a customer before an SO is created today, and if so how is it tracked?
- What defines "expiring soon" or "aged" for frozen product — fixed days before expiry, days without movement, or something else?

---

## Standard sales order creation

- Besides RFQ-driven orders, how else do orders come in — repeat phone call, WhatsApp text, walk-in, email?
- Before confirming an SO, which checks are hard blocks (order cannot proceed) vs warnings (flag but allow) — stock, credit limit, price list, MOQ, delivery date?
- Does Phase 1 need Delivery Order workflow, or is SO → Invoice sufficient for go-live?
- Are credit notes and returns in scope for Phase 1 document testing?

---

## Pricing, discounts, and customer conditions

- How many price lists exist in SAP — one standard, or customer-specific / tier-based lists?
- Who is allowed to give a discount, and is there an approval threshold?
- How are customer-specific prices maintained today — in SAP, in Excel, or verbally?
- Are there any special tax or rounding rules on invoices beyond the standard Crystal layout?

---

## Credit limits, payment slips, and finance approvals

- How is credit limit structured — per customer, per branch, or group-level combined exposure?
- When a customer exceeds their credit limit, what happens — automatic block, warning only, or finance approval required?
- Does warehouse ever ship while credit approval is still pending?
- What format do customers typically use to send payment proof — mobile banking screenshot, PDF, TT advice?
- What key does the team use to match a payment slip to an invoice — invoice number, amount, customer name?
- How are partial payments and multi-invoice combined transfers handled today?
- Is there a pro forma or deposit step in practice, even if not formally named?

---

## Documents and Crystal Reports

- Which documents must MAIA generate with Crystal Reports-matching layout — quotation, SO, proforma invoice, invoice, DO, credit note, receipt?
- How is document numbering structured — per branch, per entity, or centralised? Does it reset annually?
- Who manages and allocates new number series?
- Confirm GST will provide PDF samples of gold-standard Crystal outputs per document type before build begins.

---

## CPRN (Customer Purchase Request Notes) — Phase 2 or pulled forward

### 8a. Definition and type

- What does GST actually call this internally — commitment, reservation, blanket note, or no name?
- Is it a verbal-only commitment, a partially-paid reservation, or a formal agreement without delivery schedule?
- Is it tracked anywhere today — in a spreadsheet, SAP, WhatsApp thread, or only in people's heads?

### 8b. Consumption tracking

- Walk through a real example: customer commits to 10,000 units, sales releases 10 — what happens to the remaining 9,990 today?
- Who updates the remaining balance after each release?
- What unit is the commitment tracked in — KG, cartons, pieces?
- Can a single release be partial, or is each release a complete order?
- Normally, customer will need one orders with all items straight or a blanket order with partially shipment

### 8c. Conflict between salespeople

- When stock is earmarked for Customer A, can another salesperson see it as available or does it appear locked?
- When the conflict is caught today, how is it resolved?
- Who should be able to release a CPRN hold in MAIA — the owning salesperson, a manager, or purchasing?
- If the holding salesperson is unavailable, is there an escalation path?

### 8d. Hold expiry and reminders

- Should a CPRN hold expire automatically if there is no consumption after a set period, or is it permanent until manually released?
- Who receives the "still want this block?" reminder, and how often?
- Which channel should reminders go through — WhatsApp, workspace, or both?

### 8e. Purchasing and advance buying

- When a large commitment is made, does purchasing get notified to buy ahead — automatically or manually?
- Is there a buffer rule for how much to buy vs the committed qty?
- When purchased goods arrive, is the earmarked quantity ring-fenced in the warehouse or does it sit in general stock?

### 8f. Conversion to SO

- What triggers conversion from a commitment to a real Sales Order — customer giving a delivery date, sending a PO, or salesperson decision?
- Is conversion always full, or can it be partial (e.g. release 500 of 10,000)?
- Must the converted SO reference the original CPRN number for traceability?
- After conversion, who keys the SO into SAP — does MAIA push it, or does someone key it manually?

---

## Aging and clearance reminders — Phase 2

- What defines "aging" or "near-expiry" for frozen seafood — fixed days before expiry, days without movement, or category-specific rules?
- Who should receive aging and clearance alerts — the assigned salesperson, sales manager, all sales, or a combination?
- How should alerts be delivered — WhatsApp digest, workspace flag, or both?
- How often should alerts fire — daily, real-time on breach, or weekly?

---

## Excel exports for planning — Phase 2

- Which datasets need to be exportable — stock aging summary, open SO list, CPRN outstanding, customer AR buckets, stock snapshot?
- Is there a mandatory column layout or template GST already uses?
- Who will use these exports — sales, purchasing, management, finance?

---

## Statement of account (SOA) — Phase 2, subject to SAP feasibility

- How often should SOA be sent — monthly fixed cycle, on request, or both?
- Which customers receive SOA — all B2B, selected large accounts, or only those with outstanding balances?
- Must the format match the existing SAP Crystal SOA layout?
- Should multi-branch AR be consolidated into one SOA or shown per entity?

---

## WhatsApp and user setup

- Which user groups will use MAIA via WhatsApp — sales, finance, warehouse, management?
- Which user groups need workspace (web) access only?
- Language preference for prompts — English, Bahasa Malaysia, or mixed?
- How many named users are expected for Phase 1 — broken down by role?

---

## SAP integration and technical setup

- What SAP B1 version is running, and is it on-premise or cloud-hosted?
- What is the preferred integration method — Service Layer API, DI API, or file-based CSV/SFTP?
- Who is the SAP vendor contact for integration coordination?
- What is the acceptable sync latency per data type — items, stock, customers, price lists, SO push, invoice push?
- Is a SAP test / sandbox environment available before production integration begins?
- Are there IT security requirements — VPN, static IP whitelist, service account?

---

## UAT definition

- Agree UAT sample size per workflow: RFQ files, SO scenarios, payment slip cases, credit exception cases, CPRN scenarios, document types.
- Confirm pass thresholds from proposal: draft completeness, match acceptance rate, stock accuracy, approval routing, SAP sync accuracy, document generation, Crystal layout match.
- Who signs off Phase 1 UAT, and who signs off Phase 2 UAT?

---

## Artefacts to collect before kickoff

- ~~3–5 anonymised RFQ Excel sample files (simple, messy, and large)~~
- PDF samples of gold-standard Crystal outputs — one per document type
- Item master excerpt from SAP (anonymised if needed)
- Customer-specific naming / cross-reference sheet if it exists
- Org chart or RACI for approvals
- Current process map or SOP if available

---

---

# 3. 2026-05-04 — Requirements Gathering (Online) Transcript

---
granola_id: fd3bbb08-973b-437c-b9f5-39388a326e33
title: GST Fine Foods <> MH Requirements Gathering (Online) - Transcript
type: transcript
created: 2026-05-04T02:46:58.150Z
updated: 2026-05-18T11:12:26.759Z
attendees: 
  - brendan@mindhive.asia
  - ivan.cyh1996@gmail.com
  - chin@gstgroup.com.my
  - finance@gstgroup.com.my
  - Joey Ong
  - Soo Chin
  - teohly@gstgroup.com.my
  - timwong@gstgroup.com.my
  - johnson@mindhive.asia
---

# Transcript for: GST Fine Foods <> MH Requirements Gathering (Online)

### You (2026-05-04T02:49:20.665Z)

Hello.

### Guest (2026-05-04T02:49:41.894Z)

Okay. Hello? Hello? Doing? Fine. Hello? Okay. Okay. Right. Prima. Okay. Manager manager. Okay?

### You (2026-05-04T02:52:50.235Z)

Oh,

### Guest (2026-05-04T02:52:55.634Z)

Mister Fuze

### You (2026-05-04T02:53:04.325Z)

the

### Guest (2026-05-04T02:53:16.794Z)

là. Okay. Brandon Hello. Hello.

### You (2026-05-04T02:53:27.385Z)

I would I

### Guest (2026-05-04T02:53:40.894Z)

Okay. Okay. I'll Brendan. Okay. Okay. I'll

### You (2026-05-04T02:53:47.615Z)

Oh.

### Guest (2026-05-04T02:53:48.334Z)

Okay. Okay.

### You (2026-05-04T02:53:51.225Z)

So, like,

### Guest (2026-05-04T02:54:17.914Z)

Hey. So we'll put this question, but capital Ok. Y luego vamos intentar

### You (2026-05-04T02:54:52.445Z)

Bueno, bueno.

### Guest (2026-05-04T02:55:00.214Z)

Donc testing, testing. Okay.

### You (2026-05-04T02:55:42.145Z)

Okay. So I So

### Guest (2026-05-04T02:55:48.424Z)

Sure. Product and engineering. So yes, you're Brendan. Okay. Yeah. So it's commencing handler, requirements scheduling the k. Rang moment mine hive.

### You (2026-05-04T02:56:07.765Z)

The

### Guest (2026-05-04T02:56:11.654Z)

Detail understand So requirement gathering the session. 。 咁 咁

### You (2026-05-04T02:56:49.055Z)

So

### Guest (2026-05-04T02:56:49.804Z)

So...

### You (2026-05-04T02:56:55.775Z)

Okay. The

### Guest (2026-05-04T02:56:57.014Z)

So details understand GST fine foods, the business professor. So with so with Maya, we can understand, how we can apply directly to your business and when we help you set up and help you onboard onto Maya, it will be more natural and seamless because we already have a very in-depth of your business process. So that's the first objective. Second objective is that we can also identify some based on, you know, certain specifics in how you run your business or how you run your operations. We can see if on my side, there are certain things that we will need configure on our end to make sure that it can really fit and go seamlessly into the to to see find food processor. So this is the two main objective over here. And the third objective is

### You (2026-05-04T02:57:59.965Z)

And then

### Guest (2026-05-04T02:58:02.764Z)

to identify areas for enhancements and also customizations. Because when

### You (2026-05-04T02:58:10.095Z)

that

### Guest (2026-05-04T02:58:10.674Z)

built Maya from and and I think you guys also know that Maya is still a product in development in the first initial phase alpha launch now. I think you guys are considered our beta clients. Definitely, there will still be some gaps, when it generalizes to certain businesses.

### You (2026-05-04T02:58:26.135Z)

So

### Guest (2026-05-04T02:58:27.644Z)

We want to identify, what are stuff that are super customized one that is very important.

### You (2026-05-04T02:58:33.275Z)

He's fighting. 40

### Guest (2026-05-04T02:58:35.334Z)

For GST finance to to have. If not, it wouldn't work.

### You (2026-05-04T02:58:37.305Z)

if not, know,

### Guest (2026-05-04T02:58:39.314Z)

Wouldn't, like, you know, full you you wouldn't be able to fully adopt Maya. So that's those are points of customization. So these are the three core object. These are And for today also, I would just like to ask the GST team guys seen a demo of Maya already?

### You (2026-05-04T02:58:50.585Z)

have you

### Guest (2026-05-04T02:58:54.224Z)

Or have you seen the system anything

### You (2026-05-04T02:58:55.435Z)

see.

### Guest (2026-05-04T02:58:57.684Z)

that you guys have seen so far? From your previous conversation with Jeremy and also Johnson? Can't Okay.

### You (2026-05-04T02:59:10.265Z)

Iced

### Guest (2026-05-04T02:59:13.514Z)

See. Alright.

### You (2026-05-04T02:59:14.185Z)

Alright. Okay.

### Guest (2026-05-04T02:59:15.224Z)

Okay.

### You (2026-05-04T02:59:15.625Z)

I will do

### Guest (2026-05-04T02:59:18.304Z)

Into the requirements gathering session. So the first part of the main one is maybe mister or or miss can

### You (2026-05-04T02:59:24.965Z)

you know,

### Guest (2026-05-04T02:59:27.594Z)

or, actually, mister Ting who is the head of operations, could walk us through from start to end how the business run how many entities are there, what is the main business. Although we we do know really, but we wanna hear it directly from you. And what are the key pinpoints in terms of from your angle that is, you know, that you guys are struggling with at the moment. On a high level first as opening before we go into the more specific questions in the document we have prepared. Mhmm. Can you Okay. Well, we'll send send brief you the company back group division processing, trading partner. Okay? Trading 们 有 咁 ， 者 咁 嗰 的 喺 啲 ， combine own produce import the item purchase hotel, restaurant supermarket. Mainly business covers the domestic market. Malaysia 9999% Malaysia. Branch. So senior level you stop the, you sales the, finance the, financer the business processor software. Second question Second question Mhmm. How do customers send RFQ? RFQ is request. K. K.

### You (2026-05-04T03:02:19.755Z)

Yeah.

### Guest (2026-05-04T03:02:20.144Z)

We'll get we'll kinda get screens in that. Send the moments in from from high level up. Overall, for us to understand, GST find food, business nature and business ops Okay.

### You (2026-05-04T03:02:30.975Z)

Okay.

### Guest (2026-05-04T03:02:31.494Z)

Okay.

### You (2026-05-04T03:02:43.665Z)

So So

### Guest (2026-05-04T03:02:48.784Z)

E to group, c to group. Now I see. Okay. Okay.

### You (2026-05-04T03:03:12.515Z)

Hi.

### Guest (2026-05-04T03:03:25.804Z)

Company see. Okay. I see. Okay.

### You (2026-05-04T03:03:42.525Z)

See. Okay.

### Guest (2026-05-04T03:03:46.444Z)

Okay.

### You (2026-05-04T03:03:46.815Z)

See you.

### Guest (2026-05-04T03:03:53.634Z)

Okay. So so WhatsApp group email communication WhatsApp group. Okay. Sales team data entry along. Okay?

### You (2026-05-04T03:05:01.345Z)

All.

### Guest (2026-05-04T03:05:11.904Z)

The 但 啲 但 ， 。 但 係 有 有 。 。 但 不 到 게에 있지아 Okay. Questions function sales orders, mapping mislead the finance. Credit approval manual function. Notified So okay. Complete our phase one

### You (2026-05-04T03:07:23.025Z)

Absolutely. Okay.

### Guest (2026-05-04T03:07:29.154Z)

Okay.

### You (2026-05-04T03:08:02.945Z)

Okay. So

### Guest (2026-05-04T03:08:41.614Z)

수다게 쓰가 쓰가 있어요. Business solution

### You (2026-05-04T03:08:50.715Z)

Mhmm.

### Guest (2026-05-04T03:08:52.724Z)

the audit auditing process. 킸의는 거어다. Salesperson versus sales coordinator. Online online Is it another one moment?

### You (2026-05-04T03:10:01.595Z)

It?

### Guest (2026-05-04T03:10:09.734Z)

Okay. Order taking from b to b pinpoint out. From the

### You (2026-05-04T03:10:46.785Z)

That's it.

### Guest (2026-05-04T03:10:50.794Z)

follow-up. Customer message Okay. I see. Okay. Okay. Message

### You (2026-05-04T03:12:02.115Z)

Vega,

### Guest (2026-05-04T03:12:16.014Z)

안. 하서도 다를 세마라. 쓰기 KL daily order를 group 하서 나서말서말서말서말서말서말서말서말서말서말서말서말서말서 internal group.

### You (2026-05-04T03:12:35.755Z)

I see.

### Guest (2026-05-04T03:12:37.084Z)

I see. Okay. Alright. Let's notice a message here. It's only item quantity. What about the pricings? The pricing is one here. Not here. Now. In the system now. In the last price. Yes. Special. See.

### You (2026-05-04T03:12:57.155Z)

Yes. Can't even ask.

### Guest (2026-05-04T03:13:00.054Z)

Last present.

### You (2026-05-04T03:13:01.795Z)

Handle. Wow. You said Okay.

### Guest (2026-05-04T03:13:48.634Z)

You saw how Sir,

### You (2026-05-04T03:13:56.615Z)

That's it.

### Guest (2026-05-04T03:14:04.994Z)

email email Email. Please. Okay. Okay.

### You (2026-05-04T03:14:13.285Z)

So

### Guest (2026-05-04T03:14:14.034Z)

Ok. Oh. Okay. Okay. Collecting invoice double three shipping address Billing address Shipping address I see. Okay.

### You (2026-05-04T03:15:36.525Z)

Now,

### Guest (2026-05-04T03:15:37.314Z)

Okay.

### You (2026-05-04T03:15:38.575Z)

那 ホ

### Guest (2026-05-04T03:15:40.574Z)

Now Ting Johnson and Jeremy fish cutting the problem. Process capture So so let's say if import the whole seven. So one full salmon. SAP sensei the business process transform to the SKU finish good band. Transformation. Okay. Whole fish. Whole fish. Service portion, something like that. Trust personal fish,. 你 好 fish,. So remark as process to fill it. Second scenario, by directly fill it. Yeah. I see. So

### You (2026-05-04T03:17:57.855Z)

Yeah.

### Guest (2026-05-04T03:18:01.874Z)

So item code. Process it as it could stop transformer. Okay. Process system so inventory del del departamento. Ok. O

### You (2026-05-04T03:18:31.805Z)

Okay. That's it.

### Guest (2026-05-04T03:18:32.754Z)

let's say order. Plan for the cutting process SOP processing on speaking with Okay. So let let's say for for example, order let's see. 100 salmon tail. Some reason. So order processing flows 뭐무가 자들을 회에면 이하주수무나. 뭐무자 있으 하 보시리하 뭐 지분. Something. Okay. Shape. Example. Storage original So on demand on demand, calculator Excel, the calculator, Okay. Sales sales order, Chief filter. Logistic person

### You (2026-05-04T03:21:18.675Z)

One

### Guest (2026-05-04T03:21:26.704Z)

Store receiving.

### You (2026-05-04T03:21:28.755Z)

stop.

### Guest (2026-05-04T03:21:39.574Z)

Alright. Alright. Store store stock count as raw material as 300 fish. Salesperson 서 쓰상 많 사면요.

### You (2026-05-04T03:22:37.805Z)

Because because

### Guest (2026-05-04T03:23:16.514Z)

Okay. Five kilo. This one is four kilo. This one three kilo. 실수 때에 실수 okay. 히 order order confirmation reserve to the stock. Seeing the salesperson okay, oversell. System system the block.

### You (2026-05-04T03:25:15.515Z)

Okay.

### Guest (2026-05-04T03:25:18.904Z)

So whole so since I SAP So So the SAP configuration mismatch. Configure based on number of each rather than wait.

### You (2026-05-04T03:25:52.625Z)

Bye.

### Guest (2026-05-04T03:25:55.124Z)

Manufacturing the metric. Storage, the metric. So so with monument, we face this problem SAP business processing the setup. Not line misalignment. That's why I have this problem. On my side, we will set up accordingly to to mitigate this problem. The whole

### You (2026-05-04T03:26:24.915Z)

Yep.

### Guest (2026-05-04T03:26:24.944Z)

and Johnson order preplanned ahead of time order. Hotel the order triple order That's it. The whole source lead time fulfill lead time So preorder without a confirmed PO. Customer specific item.

### You (2026-05-04T03:27:24.875Z)

Happy. Okay.

### Guest (2026-05-04T03:27:28.444Z)

Okay. Modifications.

### You (2026-05-04T03:29:21.855Z)

How

### Guest (2026-05-04T03:29:29.264Z)

How do you gonna stop? Just stop. SKU Okay. So ordering before handling. Here. So the m o v e 如 果 m o e ， 지성지. Notification. So that 그런 아게 네만 생나지만 지이 뭐. Before 哋 哋 佢 So user story of ordering before PO ordering before official confirmation, the, use case applicable mails frequent. Hotel the h f, m two two months in advance, ordered order order volume. I see. For tracking nonconfirmed stop reservation Okay? I see. Okay. So based on confident, based on I see. Somewhere like this house. I see. I see. So so so create sales order, this whole customer customer customer customer 수서 하텨나수 다아터 가수무. 你 Mhmm. O k 你 你 。 。 你 。 이시 하 사를이 무제주요. 맞사가상마요. 맞시요 맞사자자스주 있스자. 보게, 아죠 수서 시 같아니다, 생스. Okay. Okay. S a b like tracing. 你 다 다에 회들에 했에 o p e n

### You (2026-05-04T03:34:02.935Z)

And then

### Guest (2026-05-04T03:34:48.844Z)

말 이금 들 가상마나. I see. Okay. So try order taking the workflow

### You (2026-05-04T03:34:57.205Z)

So

### Guest (2026-05-04T03:35:00.334Z)

pain point. Besides what we have already talked about. WhatsApp email Okay? Order by text. Writing handwriting and mandarin. Handwriting and mandarins. Mhmm. Voice. Mother, Okay. Voice message

### You (2026-05-04T03:36:45.695Z)

So then he So that

### Guest (2026-05-04T03:36:48.434Z)

sales order volume So I'll leave it there. So order volume. Sales order Okay. Sales agent, sales coordinator, headcount. Headcount and the IT as our booker. Salesperson. Salesperson. So So order option also will be to do b to c Ok. Okay. Okay. So I think I already taken anything else to ask on the of pricing? Pricing. Yeah. Pricing, man. Want to understand your how you guys price your because I noticed

### You (2026-05-04T03:38:37.855Z)

all you guys. Because I think

### Guest (2026-05-04T03:38:42.084Z)

the different tiers of customers, hotel, supermarkets, restaurants. Is there any special price given to each of your customers? For example, hotel hotel for you. Example, a certain discount or a certain item. Or supermarket. Supermarket usually, you order a big box of it. So

### You (2026-05-04T03:38:57.995Z)

Okay.

### Guest (2026-05-04T03:39:02.124Z)

we have a special price for certain certain we have the different price, but we're not calling special price have the different segment customer. We are giving the different pricing. But we didn't do any special price and stated our invoice one. We are direct giving the price.

### You (2026-05-04T03:39:25.445Z)

No.

### Guest (2026-05-04T03:39:26.704Z)

Normally, our quotation prices for every customer. If we not do anything Any special special price stated in the report. Only if any rejection or any or is he so just open this yet?

### You (2026-05-04T03:39:41.825Z)

I see.

### Guest (2026-05-04T03:39:42.384Z)

I see. So how many price tiers

### You (2026-05-04T03:39:44.025Z)

So how many?

### Guest (2026-05-04T03:39:47.354Z)

how many price? What? Price tiers. I mean, yeah, different tiers for different customers. Right?

### You (2026-05-04T03:39:49.615Z)

Yeah.

### Guest (2026-05-04T03:39:53.134Z)

So how many price tiers is there? Different price Ah, so that means the same like, retail price is the low section After that, you have wholesale price tier one, tier three, tier two. Four tiers. Four tiers. Tiers. Mhmm. So all of this is I see how in SAP. Or is it outside the system? Ausser No inside the SAP. No. If we send lock the price in the system, then they will follow basically, we are based on the salesperson. Oh, which issue? So so that means that different part of ISIS. So that means when the two is present, create order for a customer, the salesperson will decide which guys to give in it. No. No. Because, actually, we give give customer. Maybe it's the same item, but different customer we are giving the different price well. We put a customer's prices, can they agree with this price? Were killing all the price in the length of agreements based on the customers. When the invoicing key, the sales order, they will automatically detect pricing. Oh, from the Yeah. Yeah. Yeah. You get one, Minah? Yeah. K. But let's say what about customer that do not have this blanket agreement? Supposed to Because the invoicing the CS coordinator, they will remember the pricing. Suppose we need to create all the blanket agreement for every customer since they agree with the pricing. Understand every person. Except passives. I said taxes. Cash too. Yeah. I said taxes.

### You (2026-05-04T03:41:59.765Z)

So

### Guest (2026-05-04T03:42:00.044Z)

This is my I I I wonder if he's applying to KL also. So I need to check and still whether this apply to KL or But for we are practicing this using like that we want to control the prices.

### You (2026-05-04T03:42:15.925Z)

Okay.

### Guest (2026-05-04T03:42:26.974Z)

Understand. So Blackburn Ivan, just now your question is that you are asking us the deal of

### You (2026-05-04T03:42:32.515Z)

So yeah. Yep.

### Guest (2026-05-04T03:42:39.934Z)

our pricing. We don't we don't do all this deal We don't fix the deal on this segment. Segment item on hotel

### You (2026-05-04T03:43:02.715Z)

Así If I can

### Guest (2026-05-04T03:43:03.744Z)

I see. Spike. So so so formula for segment GP Okay. So case by case basis, the assessment

### You (2026-05-04T03:43:29.635Z)

Yeah.

### Guest (2026-05-04T03:43:32.014Z)

the market rate. Use case item to price. Weekly single case Sorry? Yeah. By weekly prices Okay. Yeah.

### You (2026-05-04T03:44:07.135Z)

Okay.

### Guest (2026-05-04T03:44:08.844Z)

It's by contract or weekly price daily price fluctuation. Okay. Item the cost increase increase customer Example example, the contract, our Sí. Ok. Va.

### You (2026-05-04T03:44:41.395Z)

Okay.

### Guest (2026-05-04T03:44:43.454Z)

Ok. Manage customer the credit limit credit exposure. Okay. For credit index, this is based on credit application forms. Which come And then for credit credit credit

### You (2026-05-04T03:45:21.985Z)

Okay.

### Guest (2026-05-04T03:45:22.484Z)

Okay. Okay? For thirty days, sixty days, days, sixty days, ninety days of travel to full days, three days,

### You (2026-05-04T03:45:31.765Z)

Okay.

### Guest (2026-05-04T03:45:32.514Z)

Okay. I see,

### You (2026-05-04T03:45:50.955Z)

I see. So

### Guest (2026-05-04T03:45:52.884Z)

take payments or make once whatever hit down has could it limit hit down, Okay. So because I

### You (2026-05-04T03:46:26.715Z)

Hi C.

### Guest (2026-05-04T03:46:27.134Z)

I see. Okay. So the credit limit enforcement, SAP

### You (2026-05-04T03:46:32.775Z)

Okay.

### Guest (2026-05-04T03:46:35.644Z)

Okay.

### You (2026-05-04T03:46:39.775Z)

I see.

### Guest (2026-05-04T03:46:40.214Z)

I see. Okay.

### You (2026-05-04T03:46:41.105Z)

So that

### Guest (2026-05-04T03:46:42.164Z)

So the credit standing. Also, the credit of people Then after that, invoice invoice

### You (2026-05-04T03:47:54.685Z)

Awesome. So, okay,

### Guest (2026-05-04T03:48:03.394Z)

Okay. Okay. Credit approval invoicing sales manager is the pay

### You (2026-05-04T03:48:12.825Z)

Okay.

### Guest (2026-05-04T03:48:38.854Z)

time. Yeah. So you would delay the order order taking process. Yeah. The order manager miss out on the group. Okay.

### You (2026-05-04T03:48:54.335Z)

So

### Guest (2026-05-04T03:48:54.894Z)

So SOA statement of account for 고에요. Report customer account SOA SAP Okay. Bye. So from finance, the endpoint

### You (2026-05-04T03:49:28.495Z)

So, So

### Guest (2026-05-04T03:49:31.834Z)

finance sales, pinpoint based on even the current

### You (2026-05-04T03:49:32.675Z)

That's it.

### Guest (2026-05-04T03:49:38.874Z)

business operation and credit limit, credit check, and credit approval.

### You (2026-05-04T03:50:07.115Z)

Okay.

### Guest (2026-05-04T03:50:08.064Z)

Okay.

### You (2026-05-04T03:50:09.485Z)

So

### Guest (2026-05-04T03:50:10.584Z)

So auto email will be to customer. The company, the procedure Every month before the

### You (2026-05-04T03:50:30.385Z)

Okay. So

### Guest (2026-05-04T03:50:33.064Z)

So customer that have credit limit only. Right?

### You (2026-05-04T03:50:36.865Z)

So

### Guest (2026-05-04T03:50:39.174Z)

Or is it for all customer? For all all customer accept taxes, All customer accept test shows. Okay. Okay. E invoicing the SOP individual consolidated based on customer preference. Declare invoice depending on customer the agreement. Customers submit invoice based on individuals, so I prefer only consolidated. Business case

### You (2026-05-04T03:51:27.225Z)

Okay. Sorry.

### Guest (2026-05-04T03:51:27.504Z)

Okay. So everything else individual?

### You (2026-05-04T03:51:33.185Z)

Miss you,

### Guest (2026-05-04T03:51:34.384Z)

Missed you. Branch credit limit SOP. So pricing. So

### You (2026-05-04T03:51:46.965Z)

price

### Guest (2026-05-04T03:51:48.194Z)

pricing, customer blanket agreement So SOP. Credit limit SAE. Yes. Yes. Ok. Okay. On the pass, right, for your inventory for your inventory, do we have chat by bad bad luck, your batch number? Batch number? Currently no. Currently no. Because of then we do try before the implement, I mean, ten years ago, for the practice is very slow. And then we keep other That time, we're not really matured because we also never try it. We also worry to try. First, on the of the let's say, credit notes now. So how do you usually receive your, like, credit your customer request for credit notes or returns and like that. So I wanna know how's the process for the training part. So Based on the invoice they send, which invoice from them? What do you send you with

### You (2026-05-04T03:52:49.675Z)

Yep.

### Guest (2026-05-04T03:52:51.334Z)

for the invoice ID Normally, we do that that one. Ok. You mean when return put

### You (2026-05-04T03:52:58.245Z)

You need the

### Guest (2026-05-04T03:53:01.034Z)

how how we when we go to Right? Yeah. Return good is the basically, now we so far talk about forward. Creating the sale billing, but a lot of the the the puts returns, it will be on the same day. Maybe few days later, but then we also we can no. We will ask back the customer. Wish wish which daily send the goods. Based on the daily send the goods. From the invoice. Of the invoice. We do invoice. Uh-huh. We we we are doing this way. Understand. Okay. And then this is not normal for invoice, right, who is the one that decide to join me? Is it the salesperson that issue the invoice or or come from finance team currently? Invoice, we when we do, got the picking list, got the wait, then we just doing the the old call it. Done by search for the call here. The the front front front part, we need to approve on it. Mean, like The s o credit credit limit or credit terms of all already Due. With high already due, then then we will pass then we they will approve or not approve this customer to to up the goods. That is depends on end. Front end. Then after front end, approve, it will proceed as a normal. Means, like, until the until the invoice So for the delivery note, when you set to schedule the order, it's done by the sales coordinator also. Yeah. The OMM is printed on the on on the same One way you click the screen, then it will do once again. Oh. Okay. So so when you print the so this one is in SAP. There is a page. When you press them, it's automatically because we have SOD or NYs. But that's the SO one number, the o one number, and the one one number. Right. But then many customer complain that they're very confused. My bot number and then got three more number. Okay. They sometime cannot do daily. Yeah. Of course, our remark is on bottom Actually, if we are refurbish the which invoice is refurbish the other number. When a customer feel like they don't like, like, they especially hot there also. At the end, we change. It means s o n d o did not give in to the customer. We give invoice. The invoice, the d o, this same number the the the old number is sent with invoice, the template. Changed on the I mean, we changed to the old title. It's a title. Title changed for me. So that it will be same. I mean, like, click one click, it will be all in one together. Oh, understand. Next, we will not create any confusion. To the customer. So your current business process is, like, after SO already, I will deliver first issue the picklist for internal topic, then after that, the all out to ship customer. After ship, the customer only invoice. Or at the point of shipping to the the invoice Okay. So after you invoice ready. Right? Invoice automatically submitted as invoice ready. So any credit note or debit note later on is also another another processor. Right? So there is some possibility there. One or two it. Okay. So right now, on finance side, in SAP, there is also a manual place to approve invoice and all this to go to LHDN. Right? Manual process or everything automated ready. I think majority is auto automatic. Yes. E invoice. Correct. Ah, yes.

### You (2026-05-04T03:57:00.175Z)

Yes.

### Guest (2026-05-04T03:57:06.594Z)

We post to the once we auto sync to the Oh, we auto sync to ATC already. So okay. K. Think overall. So far, quite good. So one more thing is

### You (2026-05-04T03:57:18.835Z)

Okay.

### Guest (2026-05-04T03:57:20.694Z)

we we want to, like, salesperson, they always request invoice. For your for their customer. Sometimes they thought SOA customer will say, Please send to me, then they will request that any possible that ask Maya, send back the invoice. Yeah. We can This is I mean, what you wanna I mean, they they can they no need anyone support. They can do this with any kind.

### You (2026-05-04T03:57:50.775Z)

Yeah.

### Guest (2026-05-04T03:57:51.394Z)

Yes. Yeah. Because we file we file sometimes our back end also left out. Sent up to the sales team. It always create this this kind of Miss talks. Out. Miss out. Out. But then actually, what what you want the the objective is we want the salesperson faster go to send settle to the customer what they want. We just settle to them efficiency. Be very efficient. More efficient, then you will get more Yes. You will get faster the payment. But then sometimes they request morning that you they're busy. This up. Then until two days later, only the the salesperson come to request again. If find if I'm the customer also check your payment So I I mean, anytime we can request them to to the customer. Understood. Without any of the end. Support. Okay. Yes. I think with Maya, that that will will, like, really enable the salespeople to rest really faster. They can see all the information about the customer at their best. You see this one also need to talk with the SAP person here. Correct. Because, main part is a lot of your business data right now sitting on SAP

### You (2026-05-04T03:58:59.765Z)

So

### Guest (2026-05-04T03:59:01.214Z)

So

### You (2026-05-04T03:59:01.695Z)

I had a

### Guest (2026-05-04T03:59:02.244Z)

Maya to be able to push data inside SAP and to pull data from SAP, we actually need to

### You (2026-05-04T03:59:02.625Z)

I

### Guest (2026-05-04T03:59:07.194Z)

sort out the integration part. Of for for SAP b one. And for SAP b one, I think based on our experience, we have a few ways of of of doing it. But this one, we will need to have a second meeting with the IT vendor to sort this out. Mhmm. Yeah. So

### You (2026-05-04T03:59:22.935Z)

So

### Guest (2026-05-04T03:59:24.794Z)

in terms of the SOA one, it is also one of the features in our

### You (2026-05-04T03:59:25.865Z)

is

### Guest (2026-05-04T03:59:29.764Z)

upcoming releases where each customer can self serve view their own SOA now. You can send share them, a link, and then they can see their own SOA already. It's similar like the the right now, think, have you currently have a practice where it's PDF type or SOA. Right? So when they see SOA, they They cannot see, like, like, cannot click the click the item. See well, I I got custom. I got supplier also doing this. That's why I also want to ask, is it the SOA already included the invoice? The invoice also can request the invoice, I mean, together or Yeah. Some someday so we are still working on the It's a link. Right? Yeah. It's something like a link. They go to a web and then they see the Way. And then from there is it safe? They need to any password? Yeah. It will be encrypted link, and it's only a certain validity one. That means it's not always open. So that means when they ask, I send you this link, tell it for a certain time to see what you want. Then next time, maybe you want again, then I Because I'm I'm thinking if let's say, they they just go to others see to get all everything already. Correct? Yeah. That's that's that's the part. We also need to figure out how to properly do it as well. Yeah. Yeah. Because yeah. Yeah.

### You (2026-05-04T04:00:47.685Z)

Okay.

### Guest (2026-05-04T04:00:47.984Z)

Okay.

### You (2026-05-04T04:00:48.235Z)

Sorry.

### Guest (2026-05-04T04:00:48.924Z)

So I think in terms of the general business process flow walk through, I think we covered quite quite a bit really. Anything comes Hey. Ivan Ivan, I could I or you wouldn't be You for salesman, sales are sales up to date, Monday, day versus budget. Designs standard dashboard. Mhmm. Is basic function. This is what create user users dashboard dashboard role specific. Salesperson let's say, logistic person or customized dashboard based on the metrics that are important to the business function. So Okay. Out of the box, the dashboard design. Specialize the dashboard of certain metrics that are important for for, let's say, GST, you are tracking a particular business metric because for for any business reason, then that one, we can spec out kind of understand how to create this dashboard for you.

### You (2026-05-04T04:02:17.335Z)

Yep.

### Guest (2026-05-04T04:02:17.914Z)

Okay. How to do so? Well, since then they ABC. ABC. ABC. Target. Okay. So for This is I have see the sales Up to date. Day. Day. Day. Push out custom dashboard. Permission configure. Mhmm. Mhmm. Salesperson salesperson. So outdoor salesperson manage account So 嗰 你 啲 cussumer 你 啲 Okay. Manager a b c combined Manager usually is can see everything

### You (2026-05-04T04:03:06.465Z)

I had

### Guest (2026-05-04T04:03:09.434Z)

internally. Yeah.

### You (2026-05-04T04:03:09.895Z)

I

### Guest (2026-05-04T04:03:11.914Z)

Okay. Okay. How?

### You (2026-05-04T04:03:16.345Z)

Okay.

### Guest (2026-05-04T04:03:17.134Z)

Okay.

### You (2026-05-04T04:03:18.565Z)

So

### Guest (2026-05-04T04:03:19.284Z)

So I think we can start going through that list of questions. But we ask specifics. You just share the screen, Can I please, Gareth, screen?

### You (2026-05-04T04:03:27.915Z)

Yeah.

### Guest (2026-05-04T04:03:29.764Z)

Yeah. Okay.

### You (2026-05-04T04:03:31.025Z)

Okay.

### Guest (2026-05-04T04:03:31.724Z)

Okay.

### You (2026-05-04T04:03:31.835Z)

Oh, I think it's absolutely

### Guest (2026-05-04T04:03:32.574Z)

So I think most of these questions are answered already.

### You (2026-05-04T04:03:35.215Z)

the idea.

### Guest (2026-05-04T04:03:36.884Z)

Excel quotation

### You (2026-05-04T04:03:38.905Z)

Condition?

### Guest (2026-05-04T04:03:40.074Z)

is sorry. PO Excel format. PDF. 예어이 있어도하. 예. Okay? No. No. The order volume so so it could be it

### You (2026-05-04T04:03:52.155Z)

Number

### Guest (2026-05-04T04:03:56.784Z)

could be only men Normally, it's 10 item or, like, 20 item or a 100 item. Okay. Customer pricing around time. Okay. A product identified in SAP. Hey, Ivan, questions to talk about quotation. SAP quotation function. 你 比 如 说 ， 他 们 说 说说 So item I think this one, the meeting, we can get some samples to understand further and see how to when can support on, like, how to do it in a way that it can be usable. For prospect or lead. Reach 了 解 ， attributes so is external facing item link. Your customer request Oh, I want information about this item shared I don't know if they can't like the public facing the item SKU information. So this Quotation quotation usually your your company header pricing pricing Right. You wanna show yeah. Just open one of the PDF. Of the Mhmm. The PDF. No. Yeah. The standard formatting

### You (2026-05-04T04:06:49.255Z)

Hace mil.

### Guest (2026-05-04T04:06:50.574Z)

SAP PDF generator

### You (2026-05-04T04:06:54.065Z)

Bien.

### Guest (2026-05-04T04:06:54.164Z)

override the SAP generator format override ticket format. Configure default to format. Format to follow format. So to the yes. We we can we can figure this out a bit later on. Mhmm. I think the feature that you are specifically asking for is say this item number one, you want to attach the image of the item. Right? Mhmm. Yeah. So so right now, you attach the image inside the description there. Is it? Or is it in a separate description So, even the PDF pricing update retail, seeing the supermarket it's case by case basis. Sales Go back to above the listing, quotation to the life cycle, graph open up loss.

### You (2026-05-04T04:08:35.905Z)

Awesome.

### Guest (2026-05-04T04:08:37.404Z)

Filter order volume So quotation double or

### You (2026-05-04T04:08:46.485Z)

Me

### Guest (2026-05-04T04:08:47.424Z)

triple that? Quotation volumes order So quotation, the volumes

### You (2026-05-04T04:09:01.775Z)

por

### Guest (2026-05-04T04:09:04.784Z)

every month. Quotation 이게 다시잖잖잖요. 이게 시으 official.

### You (2026-05-04T04:10:07.035Z)

So that's now?

### Guest (2026-05-04T04:10:07.144Z)

So as long as to WhatsApp, your salesperson this item was a prize. What are you? I see. She'll go through the price and the things and the whole time.

### You (2026-05-04T04:10:45.675Z)

Así.

### Guest (2026-05-04T04:10:48.854Z)

I see. Okay. Understand.

### You (2026-05-04T04:10:51.515Z)

Yeah. See.

### Guest (2026-05-04T04:10:54.804Z)

Okay. I think that's it. Let's go to the next question. So SKU one one card attribute mandatory I for the item database now, I think the more complex processing one is mostly the fish. Is there any other type of SKU that has complex processing like fish cut into many pieces? Anything else? Need processing one. Do you mean you want to do this? You you want me to this? Because of the different because this one has a special way to show you. And a special way to communicate in the system so Yep. Scalable my scalable thing we'll into for retail. Family bag vacuum pack with color practicing Yeah. We already want to confirm this item we can do grant. It means it's just, like, from raw material one to process to, let's say, repair either repair way to I I come in the wrong material is one kilo one. Then we want to repeat to five packet into 200 gram. We're also doing this this so so far with confirmation. It means, like, we want to sell in on this small So we need to the raw material in original packing, want to look and then we type to maybe our design plastic, and then we pack 200 gram per This is one one one of the when it went out the output in my it it will not be the same item code with the original. It must be $200 per Yeah. Value. Understand. Okay. Ready a water, and then they I mean, cook also. Is a market way. See. But we do need to see the market how they can do it. We we want to do, I mean, a conflict. K. If let's say they are 10%, then we also do 10%, then the price we we also can do I see. Because of the are nonblazing

### You (2026-05-04T04:14:40.915Z)

Yeah.

### Guest (2026-05-04T04:14:41.134Z)

We are nonblazing. They are 10%. Then they say, hey. Your your price is so high. We we want to know why so high is people where then then we find out this this this something like that. So this also so called is a processing. Understand. Ok. For, like, let's say, I think we did talk about the more comp

### You (2026-05-04T04:15:01.355Z)

Okay.

### Guest (2026-05-04T04:15:03.054Z)

one, like, the summon cutting. Right? Because the summon say, talk about the tails from there's big to small, but then you will actually not have let's say, one thirty and twenty fillet is discrete. Six fillet is not a great because different sizing.

### You (2026-05-04T04:15:18.485Z)

Eight eight. So it's

### Guest (2026-05-04T04:15:21.144Z)

So it's all different SKU or is same one SKU but

### You (2026-05-04T04:15:23.695Z)

So

### Guest (2026-05-04T04:15:25.304Z)

then do you capture the seven is, I don't know, $20, but this seven is seven. Right? We don't know we don't capture a lot of frustration. We we we not look so complicated. So small. Scale. Mean, we not do sashimi. Mhmm. So it won't happen, like, how many how many Okay. So far, we are not I don't need to this. Understood. Sometimes we go to Japanese restaurant, they call belly part or whatever normal part. But then we we not do so specific. Understood. We just, like, big pillar portion state. Stick. Uh-huh. Some So the size variants all don't really matter as well. Because you we are using like, we already mean, from from the original three, four, we we do fill it then. It will be four kilo filleting. I mean, they we we ask Then the is around this this way I see. Surrounding this week. Understand. So We we are known so far away Like, so far no personal complaint. We know it's not that it's like just now we were talking about the salmon. Right? The salmon right now because in SAP is stored as the UAM is up kilo one, then difficult to track one ish to kilo one. Right? Right number. But in terms of your pricing, it's based weight. Kilo. Is this a kilo or not based on fish? No. That's why I see the original this way. So it could be could to customer also. Let's say what my goal is, like, one would be 2.5, 2.6, 2.6 times 50.

### You (2026-05-04T04:17:15.135Z)

Because

### Guest (2026-05-04T04:17:16.674Z)

Because if, let's say, I am selling no say, I was the item from the kilo to notes Of course, I need to know the kilo kilo So it's not like It's also not falling. Not like not matching. It's on what we original come in also. Maybe the way we we want to we go into? Record this one? Sure. That's that's And so the SAP, capture in the key log, we capture the cost Yeah. Actually actually, the the reason in kilo is also because of the costing, the base is that think this one, the only way to overcome problem, right, is to either use the batch order to use the serial number only. That's the way to overcome the confusion between, you know, you earn backup later this stock, is like that. So that's the that will be the challenging part there. In terms of couple of finishing baseball. Can but the but the thing is the they do the conversion. It will be a static conversion. So that means one kilo fish usually is I'm sorry. One fish usually is two the difference is one fish not always two KG. Yeah. Yeah. That's that's why that's the Yeah. That's the part. Yeah. So that's why it's, like, serial number also the way that because if pricing based on kilo, then the way you use serial number is every fish has a particular serial number that capture the weight of the fish. So that would be the challenging part. But I think

### You (2026-05-04T04:18:49.165Z)

for

### Guest (2026-05-04T04:18:50.214Z)

the current application, you may not want to do until that level because too much work. Okay. Correct. K. Okay. Okay? Item by pricing costing the file selling price to submit function system

### You (2026-05-04T04:19:58.235Z)

K.

### Guest (2026-05-04T04:19:58.294Z)

see. Creating creating sales order tender before business start invite woman 但 ，

### You (2026-05-04T04:20:22.955Z)

I see.

### Guest (2026-05-04T04:20:24.004Z)

I see. Okay.

### You (2026-05-04T04:20:24.975Z)

Four tendon

### Guest (2026-05-04T04:20:26.344Z)

For customize the

### You (2026-05-04T04:20:28.475Z)

Oh,

### Guest (2026-05-04T04:20:30.284Z)

Oh, under customization. Okay. Then this one,

### You (2026-05-04T04:20:31.645Z)

thought

### Guest (2026-05-04T04:20:38.384Z)

sample document feature. Okay. Think for focus on the call call Okay. Customization follow-up the meeting. In detail, deep dive Okay. Okay.

### You (2026-05-04T04:20:56.285Z)

So Okay.

### Guest (2026-05-04T04:20:57.944Z)

I think over here, customer use this one, yes. To a, to b, correct. Two c. Substitution. Dimension, asking customer. Okay. So

### You (2026-05-04T04:21:13.445Z)

Okay.

### Guest (2026-05-04T04:21:13.484Z)

this I think also from Johnson and Jeremy. Many you can share SKU out of snow. And GSE is a common practice to have a subsidy product. Right? So wanna understand a bit more what these rules are and usually what kind of scenario will this thing happen. I I I don't know. Substitution rule. So let's say say that I don't give him a score. Or someone two two hundred then we change it, like, one fifty to 300 sometimes. One who who

### You (2026-05-04T04:21:50.205Z)

Theresa?

### Guest (2026-05-04T04:21:52.664Z)

raise someone, I also got confusing. This are we hear from? Johnson and Jeremy one where sometimes where? Number two c decide the substitution and how to like, how substitution happens. Sleeper lobster. Lobster hot selling substitution, the replace I see. Stop. You you you you you you you Friday late. Okay. I see. So the

### You (2026-05-04T04:22:55.835Z)

So we

### Guest (2026-05-04T04:22:57.304Z)

let me reiterate. So the substitution is similar

### You (2026-05-04T04:22:57.845Z)

you should

### Guest (2026-05-04T04:23:01.454Z)

item but different specification. Different size, different Understand. Customer communicate whether customer accept

### You (2026-05-04T04:23:17.005Z)

I see. Today.

### Guest (2026-05-04T04:23:22.744Z)

So the expectation here is surface suggestion. Okay. Brand new one hero with a brand a brand brand brand

### You (2026-05-04T04:23:36.725Z)

Bye. K.

### Guest (2026-05-04T04:23:38.534Z)

k. So to the processing so this one is processing and repackaging. There's also a repackaging part here. Item master. Often new items are added or changed. SKU out of no longer selling items lifecycle management I could say. Month, maybe I will register five or six new new items. Always have. Then all items, no more selling, we will disable also. They were not disabled. Normally, we not not disabled so fast. I see. Okay.

### You (2026-05-04T04:24:25.685Z)

So I

### Guest (2026-05-04T04:24:26.594Z)

So if you're going to have any other things,

### You (2026-05-04T04:24:26.695Z)

last

### Guest (2026-05-04T04:24:28.814Z)

what is the velocity? Five, six a month? Or more? Maybe different, we also think as a one SKU. One SKU. Correct. So quite frequently. K. Maybe more than More than 10. Okay.

### You (2026-05-04T04:24:53.535Z)

K. So the

### Guest (2026-05-04T04:24:55.084Z)

So that means in SAP, you have a main something like a bomb that you you will configure also. It's a cutting manufacturing item. We're not doing bomb. I know using bomb. Yeah. Using? For the store This transformation also is is so called customization. Why is so this why why is this so? Because we relate to make sure this item, we do this transformer must maintain the value or else that account will be very suffer because they don't know if, let's say, we not capture this item of value one, then it will be very for marketing for What do mean maintain the value? Okay. I say you say this speech someone is ten kilos. It's a 10 ringgit. So the value is 100 ringgit. Then we want to transform this to dealer.

### You (2026-05-04T04:25:44.595Z)

so we

### Guest (2026-05-04T04:25:45.494Z)

So we also need to measure this or or plus this salmon head must be maintaining this value correct amount. Because you cannot out of this value or else either your Yeah. Value. Your your account will ask where is this let's say you transform this, you you you decide yourself, want to put a Then this this is $1.01 10¢ 1 ringgit. Then the the balance value if let's say you're someone ten kilo can get six kilo, then $6.06 6 and

### You (2026-05-04T04:26:18.655Z)

six

### Guest (2026-05-04T04:26:22.044Z)

maybe trying to get the 60 gigahertz ring, then the is one gigahertz will not consider four kilo one, maybe one kilo only. Where is the balance value 60, we say,

### You (2026-05-04T04:26:34.385Z)

say?

### Guest (2026-05-04T04:26:35.704Z)

total value is one kilo salmon cake, one one rated some one rated value. So one we get is one. The is one we get only. Then the spiller is 60 So 61 only So the balance 39, where where is we we not we not doing this, like, no they they putting their their cost personally. Will they must they they must be confirm this value must be maintain this 100 value. This one, you guys customize SAP for this or this So they will not they were not able to add this input if, let's say, the amount not maintain the value. I see. The total value is hundred hundred mean, the input must be 100 ringgit. They're not considered every single line. But then if let's say you're wrong wrong item cost, but then they also capture the total value state as the output. Then there's manual wrongly manual mistake. But then it must be capture input and output same value. Else they're not able to create the document. That means the the human still will need to say that this input value is this much, but they don't control the output. Output is always the same. And is captured on the system from Sun. So the system will man will will is there the the distribution of the value is even or different? So just now like I mentioned, one. The fillet is, let's say, ringgit. The system will also accumulate How how do Well, new must new must. Like we say that, like, how we going to sell them. We set up a one because

### You (2026-05-04T04:28:18.355Z)

So

### Guest (2026-05-04T04:28:30.824Z)

if, let's say, one to one is very simple. But then if one to two how we're going to set up the cost. Correct? Yes. But then we must a fixed cost for certain items. Like, we fix at 3 Indian per kilo. Then we need to we need the kilo dance. The triggering gate then the balance value I mean, the total value minus the summon value will be the electing value. The summary hit. Right?

### You (2026-05-04T04:29:06.265Z)

I mean,

### Guest (2026-05-04T04:29:07.334Z)

Means the is three kilo, 3 ringgit, then it will be 9 ringgit. Understand.

### You (2026-05-04T04:29:11.655Z)

the

### Guest (2026-05-04T04:29:11.814Z)

The 100 minus 9 ringgit is 91.

### You (2026-05-04T04:29:16.225Z)

minus

### Guest (2026-05-04T04:29:16.974Z)

So 91 will be the ability of average, the total kilo.

### You (2026-05-04T04:29:17.175Z)

minus name

### Guest (2026-05-04T04:29:20.804Z)

Then the unit price. Think for this one, because it's a customized one, maybe an action point is to get a recording so that can understand in detail. Because I think this one is not the standard b one feature. So okay. Let me send that to the point. People k. So a lot for the land between refreshers. Stock is shown to still. Person. Before confirming large order of salesperson on this call. Rash will help stop soft reserve. I think the sound can answer already. Soon. All based on expiry data. So currently, all the inventory has a set expiry date. To to to know when to trigger the notification. We have also. We don't have. We have. Okay. Then how do we know if because there's some invention, like, let's say dispatch come in. Then

### You (2026-05-04T04:30:18.285Z)

let's say

### Guest (2026-05-04T04:30:19.234Z)

let's say it has a six six month shelf life Right? A lot of the kid cases is that you figure out, hey. This stop. Coming to expiry soon. Right now, there's no way to capture the There's no way to capture now. In SAP or Source. For incoming, we can be capturing that. I see. So okay. Hope Amaya can do, like, this feature for us like that. I think the way that Maya if I mean, for the new one, not for the now, Because they think this what they can do. But Because you you will depend on the batch as well. It will depend to have the batch to tie it, and this batch will be They are in to no one. Yeah. So what we can do is depends on the That's not possible they can capture from from this way. Manually. Yeah.

### You (2026-05-04T04:31:12.955Z)

If

### Guest (2026-05-04T04:31:13.894Z)

The data is inside SAP, we can also

### You (2026-05-04T04:31:14.095Z)

If guys

### Guest (2026-05-04T04:31:17.124Z)

storing and surface and notification. But then if SAP don't have the batch, quantity also, we also cannot surface the batch related signals. I think what we can surface is the stop movement. Based on that, we can we can track for sales the sales signals of the stock. K? Down at most.

### You (2026-05-04T04:31:36.135Z)

I see.

### Guest (2026-05-04T04:31:38.054Z)

Pricing discount So I think just now we also talk about the pricing. So everything is based on a blanket agreement inside SAP. Blanket agreement is also standard out of the box feature. It's not customization. Right? The blanket agreement. I just No. Step before one. Is there any other points of customization for SAP that you guys have done before? Besides the stop transformation?

### You (2026-05-04T04:31:59.595Z)

Okay.

### Guest (2026-05-04T04:32:01.414Z)

Okay. Okay. I'll get it here. In the credit block is based on our requirement, Trevor block. They already set set up in installments, and then another one is Only these two is the main part. K? Pricing discount, customer conditions, sleep.

### You (2026-05-04T04:32:20.365Z)

So the

### Guest (2026-05-04T04:32:21.814Z)

So the SOA generation and email

### You (2026-05-04T04:32:24.705Z)

I will.

### Guest (2026-05-04T04:32:24.754Z)

the email is manual. Right? You have to manually email the the SOA one by one. So there was a request for automated one. Right. Okay. And approval a credit approval form. Warehouse ships. No. I think that this is on the s o. In terms of payment, payment collection, so let's say customer made a payment already. How do they inform GST? They inform the salesperson. And then sales connect that to a payment entry. For you to group also, then payment Okay. You have another WhatsApp group for Oh, yes. As of the payment.

### You (2026-05-04T04:33:09.625Z)

Yep.

### Guest (2026-05-04T04:33:18.264Z)

See. So next time, the salesperson will just forward to Maya. Maya will be inside the system. So then if management want to see, they go to the system to chat. Who's live? And they all have happen. They're going For the different deals Because when they when they follow just for some forward, I ask which kind of pin this one. When when then you create if it's have to check the So let's say the the payment is not being flat. Same amount in the Right. No. The payment entry is a cross one. You can just switch invoice to knock off. Then you can distribute accordingly. 100 k in knock off.

### You (2026-05-04T04:33:59.505Z)

Pas ça.

### Guest (2026-05-04T04:34:04.144Z)

100 invoice, something like this, so then we handle the nation hub ops over there. Next time, instead of having a lot of this WhatsApp group to track, everything will be one item inside here already. No. Till ten day. Also will sometimes Yeah. Maybe. Sometimes but then if let's say automation Right? But then, of course, payment come in, they will definitely know the account will check daily. But then it can have this issue. So so the main one, I think, let's say, after you guys adopt Maya, right, the the main change is actually moving away from the WhatsApp group. So the salespeople, sales coordinator will forward to Maya. Maya will create those items here already, So then let's say we talk about payment now. Let's say this payment entry over here, it ties to let's say customer calls those coffee. For some reason, let's say, they buy fish. They can already allocate the payment reference here. So let's say the person need to check. Financed because sales cannot simply not off payment now.

### You (2026-05-04T04:35:02.135Z)

So

### Guest (2026-05-04T04:35:03.124Z)

So salesperson will just create then after they're done already, we open the right site.

### You (2026-05-04T04:35:07.035Z)

So that is

### Guest (2026-05-04T04:35:08.294Z)

So there is a working space over here. So firstly, you can see the DVD log radio. Who created this thing, when it was created, what was edited. Then you go to the attachment. So the the the payment proof will be somewhere here or in the here was

### You (2026-05-04T04:35:20.295Z)

こと。

### Guest (2026-05-04T04:35:22.784Z)

have or any other attachment related to this. For example, like, you got a payment advice. You have a screenshot for the bank or check. Any other sort of things. There's general attachment over here. And then in the comments,

### You (2026-05-04T04:35:33.505Z)

so this one

### Guest (2026-05-04T04:35:35.004Z)

So this one is a place for you to have conversation because sometimes finance need to clarify something or you're wrong data entry or whatever. They can use this base here to type the specific person to then on this particular document.

### You (2026-05-04T04:35:47.915Z)

Because right now,

### Guest (2026-05-04T04:35:50.274Z)

Right now, if you use a WhatsApp group,

### You (2026-05-04T04:35:50.845Z)

most

### Guest (2026-05-04T04:35:52.384Z)

most likely people reply here, reply here, then you need to jump here and then to check. Right? So that's the part that is causing a lot of confusion. So now everything will be a single ticket. You can work on the documents themselves. So so that will be the in a way, one change that we will see in the in the workflow. So they always need to check the comment or they drop off any notification. When there's comments or, like, notification, they tag them on. They will receive a notification and say, hey. You know, you attacked somebody, mentioned something on this document, then you can just go there and ask about it or take a link go to the website to see. About it. Yeah. Direct ring my other direct ring there. Or inside the inside the WhatsApp also, you we can we can talk about it. Yeah. K.

### You (2026-05-04T04:36:34.645Z)

So

### Guest (2026-05-04T04:36:35.744Z)

So let's go to the list of questions, credit limits, filings approval,

### You (2026-05-04T04:36:39.325Z)

Okay.

### Guest (2026-05-04T04:36:40.514Z)

Okay. Crystal report. Okay. So this one, I think we need some clarification here. Because, you know, mentioned that the documents have a requirement where we must follow a crystal report matching layout. We know what what what this is. It's the report. Somewhere Speaking list. Basically, speaking list. SO, DO invoice. We don't do SAP quotation. The not sure about but anything with our company, either you will all increase the report. Oh, it's a SAP, Chris. So it's a PDF format now. PDF format. Yes. Yeah. It's the PDF format. Speak English also.

### You (2026-05-04T04:37:40.865Z)

I see.

### Guest (2026-05-04T04:37:43.354Z)

I see. It's just to follow the format now. Okay. Understood.

### You (2026-05-04T04:37:43.575Z)

Just So I think one

### Guest (2026-05-04T04:37:47.894Z)

So I think one action point here is actually to have samples of these documents. And then this one also, we will see to identify further when we have the with the IT to see if we can reuse the the PDF generator that is inside the SAPP one already. Yeah. Who managers allocate me on the CVS? K. So CPR and customer purchase request node. Phase two, pull forward. Small purchase request no. This one, this this one, we already talked one. This one customer the sales, then sales put into this. CBRN to monitor the the movement You still conquers the record. It's Oh, you can configure one. Something like you can modify this thing and the format machine. Yeah. Okay. Crystal report, you cannot you you can't do ourselves. Normally, we're not doing ourselves. I have to help you with that. The another one are you UDF, user defined few. They are more simple one. The one we can do they want limited functional. Usually, our document we ask, SAP consultant to put in a crystal report. Understand. Okay. Then this one is the partial reservation one. This one is yeah. Mister yesterday, you were saying something about this. It's something we talked about before, which is the informal reservation I think on what miss you and team shared, the main part is to show the inventory reservation on confirm orders so that we don't oversell. Yeah. Yeah. Correct. That one but so that this one is actually a bit

### You (2026-05-04T04:39:45.075Z)

You said we

### Guest (2026-05-04T04:39:47.394Z)

this one, the informal reservation one means, like, in because in certain businesses, they reserve the stock. Beforehand in advance, even before the PO is confirmed. I think in GST skills, after hearing the the business process, actually, it's not that use case, but once the order confirm, they want to prevent overselling. That, you know, certain salespeople may sell stock that is reserved for let's say, salesperson is order that haven't fulfilled only. Yeah. Okay. Yeah.

### You (2026-05-04T04:40:18.865Z)

Then

### Guest (2026-05-04T04:40:21.144Z)

Conflict between sales people Yeah. This is exactly that.

### You (2026-05-04T04:40:22.875Z)

Yeah. It's okay. A it's deep

### Guest (2026-05-04T04:40:28.814Z)

Full and reminder. No stop consumption. So, actually, this one is something number eight b is something to do with

### You (2026-05-04T04:40:37.635Z)

I want it. Not

### Guest (2026-05-04T04:40:38.794Z)

the order not moving. So that means this order let's say 200 pieces of settlement. Placed one month ago, but then not fulfilled. So that means, let's say 50% fulfilled, and then it's not

### You (2026-05-04T04:40:51.565Z)

can we get

### Guest (2026-05-04T04:40:51.754Z)

being moved up. So in a way, that's a signal to show that certain action need to be taken or look into why this order not being fulfilled. So that we can prevent the dead stop scenario like we mentioned just now. Let's say customer does not want to consume the stock the inventory anymore.

### You (2026-05-04T04:41:07.485Z)

Okay.

### Guest (2026-05-04T04:41:09.934Z)

Okay. So who still wants this block? K. Purchasing an advance buying. Conversion to SO adjusting K. Iqing, What depends aging near expiry So this one over here, because we don't have batch

### You (2026-05-04T04:41:32.015Z)

So, yeah, But then

### Guest (2026-05-04T04:41:33.104Z)

So, yeah, since this one is a phase two thing, so then this needs to go hand in hand with batch serial number usage in SAP together also now. That will be a prerequisite for

### You (2026-05-04T04:41:42.925Z)

the nine.

### Guest (2026-05-04T04:41:44.134Z)

number nine Excel report. So this one is you guys want to I think this one is related to what

### You (2026-05-04T04:41:50.515Z)

Iced one.

### Guest (2026-05-04T04:41:54.534Z)

you said. Is it mister on the customized or reports? Is it under No. No. This one is this one is when we do when we do from overseas, we need to raise up what do you call that? Purchase purchase reputation form. Okay? So to complete this purchase form, order to order in the the boss need to know is the consumption of this. Like, this container this purchase, need how many months to clear this this this will link back to the sales. If the customer customer to really know the consumption movement or every month. Okay. Then the sourcing team only in insert the information into this this form. So that the the boss will no longer only can he there to sign The so it's to

### You (2026-05-04T04:42:54.215Z)

Is

### Guest (2026-05-04T04:42:55.614Z)

is demand signals to help purchasing decision. Yeah.

### You (2026-05-04T04:43:01.995Z)

Okay.

### Guest (2026-05-04T04:43:03.314Z)

Okay.

### You (2026-05-04T04:43:03.935Z)

So

### Guest (2026-05-04T04:43:05.074Z)

So

### You (2026-05-04T04:43:05.275Z)

to make

### Guest (2026-05-04T04:43:06.404Z)

to make the purchasing decision, you need to have a stock aging report OpenSOL. Then customer actually, CBRN is not valid here. CPRN. CPRN. This one, this one is an informal stock resolution. The one also capture demand signal. Then customer AR So that means outstanding invoice. Also require. Yeah. And then stop snapshot or aging. So, actually, all of these things Why need the stop summary?

### You (2026-05-04T04:43:49.145Z)

You you

### Guest (2026-05-04T04:43:50.494Z)

You you wanna do like Christina, is it? Really understand. This is more to I think this one is more to our purchase former. This one is referred to the the report. Monday one. This one is this this question is you raise up on

### You (2026-05-04T04:44:14.485Z)

this

### Guest (2026-05-04T04:44:19.084Z)

I put some on what is the main person you want to what what want to know? Because I also thought I I I not really understand what you want. Excel export for planning phase two. Which dataset need to export? I'm not sure that this one supposed to refer back to our Vas-y Yeah. Because it's not I think I'm referring back to the SOW. It's also just one line which is Excel export support for planning, operational review. So we want to clarify what this is because this one is a customization request. Functions, Excel, Excel,

### You (2026-05-04T04:45:53.435Z)

So you'll walk

### Guest (2026-05-04T04:46:08.704Z)

clarify

### You (2026-05-04T04:46:09.565Z)

Yeah. Okay. So

### Guest (2026-05-04T04:46:16.004Z)

Okay. So I think business need here is GST wants to export data. For review, future, and planning. But then

### You (2026-05-04T04:46:25.255Z)

Dashboard

### Guest (2026-05-04T04:46:28.004Z)

dashboard is not enough.

### You (2026-05-04T04:46:28.725Z)

So you need

### Guest (2026-05-04T04:46:29.904Z)

You need the raw data.

### You (2026-05-04T04:46:30.515Z)

So the so why is it

### Guest (2026-05-04T04:46:32.034Z)

Why is this customization? The point customization three export data

### You (2026-05-04T04:47:33.815Z)

Okay.

### Guest (2026-05-04T04:47:49.784Z)

interpretation. Another function. Another function. Because interpretation of So interpret So planning production, historical what the sales sales analytics Mhmm. Planning order. It's for production planning. Not production. Not orange. For for training also because not every item also could need production But then we got also training at the plugin and out. But then we want to make sure our our item is top bit top mean, enough stock Sometimes we are clear. Yeah. We when he say we 1,000 item,

### You (2026-05-04T04:48:57.795Z)

Yeah.

### Guest (2026-05-04T04:49:02.524Z)

but then how we going to focus on so, I mean, how to plan for the urgent I mean, for the those really need to keep You see, we we need to do the action very manual way. We need to I I I do the formula, and then we see always ask them, you go to see this one order first. And then you you plan. But then we need to many we mean to pull many data into into this purpose. So excel, only we can able to know this action Oh. You got what I mean? Because this asset is more value mark. Yeah. Yeah. We need to know this item need order or not But then we need to do and then we think only we can come to this stage. I think then the the action is maybe we need a sample of this so we can Yeah. Of this excel sheet so we can understand how you do the calculation. But then what I understand from this is

### You (2026-05-04T04:49:59.615Z)

Two.

### Guest (2026-05-04T04:49:59.834Z)

US don't use the safety stock. To trigger the stock ordering because sometimes it's not it's not Too many. Different thing when you Sometimes you also can't figure out which one for for which one also. Faster way. Oh, this one, not enough talk faster. I see. Okay. Pretty sure. Yeah. So so I think we have I think it's a planning Excel sheet on this. So something like that. Book calculator. You guys already figure out what data I need. Okay? Then on the units. Then number 10, single account. Yeah. This one also mentioned already. So it should be monthly before the third. And it auto sent to the customer registered email.

### You (2026-05-04T04:50:54.195Z)

Oh,

### Guest (2026-05-04T04:50:55.274Z)

All b to b accept the so question number two is all b to b accept cash customer. I think here, the preference is that I think the first version is the same

### You (2026-05-04T04:51:04.125Z)

I think the

### Guest (2026-05-04T04:51:09.794Z)

SOA as for the SAP crystal, but then there was also a request for, like, a web

### You (2026-05-04T04:51:10.515Z)

SOA

### Guest (2026-05-04T04:51:14.764Z)

sort of thing where they can click a link to see which invoices the

### You (2026-05-04T04:51:19.095Z)

And

### Guest (2026-05-04T04:51:19.254Z)

as well. And the main part here is also security of the link.

### You (2026-05-04T04:51:22.925Z)

And then, like,

### Guest (2026-05-04T04:51:24.144Z)

And then right now, users of Maya will be sales finance and also warehouse management currently. The different touch points that we have. User groups need that accessibly k. Majority of your employees speak English, Malay, or Chinese? Or it depends on the have because because we have all have a three we got money. We got Chinese, and also got Inclisir main main in Washington to communicate in English. Chinese and Chinese. Chinese and Chinese is

### You (2026-05-04T04:52:13.745Z)

cents,

### Guest (2026-05-04T04:52:20.204Z)

Okay. English. Okay. SAP, our item also in English better English.

### You (2026-05-04T04:52:25.605Z)

Yeah. I

### Guest (2026-05-04T04:52:28.754Z)

Yeah. In English. Okay.

### You (2026-05-04T04:52:29.845Z)

Four.

### Guest (2026-05-04T04:52:30.804Z)

For SAP b one, do you know the version number? Point zero? Point zero. The login screen Another question is, do you guys think that sorry? Do you guys know if this hosting is in the cloud or premise? On the cloud.

### You (2026-05-04T04:53:26.985Z)

And two.

### Guest (2026-05-04T04:53:28.534Z)

10. Yeah. 10. 10. One Ten point zero zero one. Zero dot one Not Ok. I think the rest of the questions, you'll talk with the SAP manager.

### You (2026-05-04T04:53:45.555Z)

Okay. Okay. This one?

### Guest (2026-05-04T04:53:48.924Z)

This one we When you all want to Actually, this week is okay now. We can directly reach out to them, or we can just create a group. For between a few of us to just have this conversation.

### You (2026-05-04T04:54:05.965Z)

Oh,

### Guest (2026-05-04T04:54:09.304Z)

Like, a WhatsApp group is again. But I think we set up think we

### You (2026-05-04T04:54:13.195Z)

Yeah.

### Guest (2026-05-04T04:54:14.514Z)

this week, one one meeting with them. Then Yeah. We can introduce to both results. Can yeah. Okay. Online online online meeting

### You (2026-05-04T04:54:27.945Z)

Hi.

### Guest (2026-05-04T04:54:29.104Z)

three party. Yeah. Within three parties k.

### You (2026-05-04T04:54:33.905Z)

The last.

### Guest (2026-05-04T04:54:33.924Z)

So then I think the last two is just the UAT.

### You (2026-05-04T04:54:35.575Z)

Last

### Guest (2026-05-04T04:54:38.084Z)

Over here,

### You (2026-05-04T04:54:39.725Z)

the...

### Guest (2026-05-04T04:54:39.734Z)

the UAT usually, we will have a physical session. It will be, like, a two, three hour session similar to today, but it's actually to the different features. And this one, once we complete the setup of the call for GST, then we will they will reach out to to schedule this session with the important people onboard. And I think for this particular phase, the goal is do for branch first. Right? Before because majority 90% is b to b sales over there. And then so for so for us to proceed to the next step is actually

### You (2026-05-04T04:55:12.275Z)

And And And

### Guest (2026-05-04T04:55:16.604Z)

after this, we will not just only send a meeting minutes of today's, meeting, but we will also have a questionnaire for GST team to fill up. The questionnaire includes sample documents. We will specify what kind of sample documents and that that we will need, and sometimes we may also require include screen recordings, like, you know, let's say, can you screenshot or screen record? How you process a SAP order so that we can you know, internally in can understand how you do these things in detail. And then what so

### You (2026-05-04T04:56:02.475Z)

so I do that

### Guest (2026-05-04T04:56:03.784Z)

so I think that's for section 14.

### You (2026-05-04T04:56:09.775Z)

No. That's it. Yeah. This this

### Guest (2026-05-04T04:56:15.884Z)

Yeah. This this question has all this Ok. La c

### You (2026-05-04T04:56:31.715Z)

because

### Guest (2026-05-04T04:56:33.254Z)

because the SAP integration here will take some I was I was at I presume that it will take some time because we need to talk with the IT vendor and then actually do the integration. But

### You (2026-05-04T04:56:44.175Z)

we can't

### Guest (2026-05-04T04:56:45.264Z)

we can also have a sample how to say it? A test environment set up already.

### You (2026-05-04T04:56:51.125Z)

what happened?

### Guest (2026-05-04T04:56:51.484Z)

So before that, you can actually export some data for us, and then we can start testing out use cases already. From your current SAP, you can export, let's say, two, 300 items, one, maybe 50 customers,

### You (2026-05-04T04:57:03.925Z)

15 cutter. And that

### Guest (2026-05-04T04:57:06.784Z)

and then the inventory one, then we can set up a demo instance before the integration so that you can also try to play with it and give us some feedback. What we can do. So that we let the integration blockers from from starting and trying out. Yeah. We want to how we we give the Yeah. Item list. Correct. The item list, we can export. Maybe a price list of these items because we don't need to export us everything. Just some. And then the pair, the information about it. So let's say this 200 item, this 200 item price is maybe 50 to 100 customers.

### You (2026-05-04T04:57:41.275Z)

And then

### Guest (2026-05-04T04:57:43.194Z)

And then what else? Users, customers, Well Customer is a customer. Yeah. Simple customer. Customer name and because we also want to try the credit limit and credit statement. So some customers with credit limit, some without. Yeah. And you can actually test Because what important on our side is we match your IDs. Using the item code. Customer code. Audio code that is similar to experience in my end. To reference this item masters. We have this customer list also in the customer names. And then the addresses. The city, the state, country code, everything. The company iPhone, so on that one. So all this information gaps. Then as we move towards the deployment, go live.

### You (2026-05-04T04:58:57.085Z)

So what

### Guest (2026-05-04T04:58:58.444Z)

So what else is that list? Of current process might be?

### You (2026-05-04T04:59:01.015Z)

I think it's a it's a

### Guest (2026-05-04T04:59:03.644Z)

I think it's on

### You (2026-05-04T04:59:04.385Z)

a

### Guest (2026-05-04T04:59:04.804Z)

based on the conversation today, we've already covered, and we will just generate those documents. From from the output of this meeting.

### You (2026-05-04T04:59:11.765Z)

I think

### Guest (2026-05-04T04:59:13.254Z)

I think on in terms of our on our end, the information that we needed, we have Anything else that we should talk about or cover in this meeting before close-up for the date? No. I'm fine. Okay. Mister Suu Kyi. We we are starting for for what you the the list, and then we do that testing. We will set up. Because right now, the main is the SAP one.

### You (2026-05-04T04:59:40.555Z)

So

### Guest (2026-05-04T04:59:43.594Z)

So what we usually do is we get some sample data. We spin up an first, and then we will set up an instance with that data so that the team in GST can start trying to use Maya ID so that we can have the initial but by the place Ah, so this can okay. Yeah. I think that's one part missing. So currently in the in SAP. Right? Is it have their own SAP, have their own SAP? What? I mean, the same system we can access each our interbranch. Oh, it's a under the same company. Or different company. One instance, actually, both Outlook can use Yeah. We we can set up in the video. In in in SAP, we are yes. In the same database on Yeah. SSM also same.

### You (2026-05-04T05:00:38.415Z)

I see.

### Guest (2026-05-04T05:00:39.294Z)

I see. Yeah. But you separate by customer quote. So then that means this let's say, Ivan can be customer of No. Okay. If, let's say, the one somehow want to buy from care one also can it's under the account. What you say? Normally, we we already it is a customer, it. Based on KL, then you are faster KL. Faster KL. Understood. Normally. So every customer is unique. There won't be duplicate customer account. No. Okay. And this one in in in to answer this question. Decision. Who which one need to do this customer? So then in this one in this case, in one instance, can both entity already because it's in it mimics how your SAP is adopting So sometimes yes. We can we can no. No. No. Design in this case work. Everything will be Yeah. In in SAP, right, when we generate news new new user, we need to tag. Whether this is tagged to KL or this is tagged to benign. So after after tagging, then you're only able to view the document in the branch. Yeah.

### You (2026-05-04T05:02:01.965Z)

Okay. I see.

### Guest (2026-05-04T05:02:03.514Z)

The data owner, Sheila. I see. Data ownership. Understand. So then this one we must see in SAP how they set because they may set up as two different entity inside one one database. To

### You (2026-05-04T05:02:18.985Z)

One

### Guest (2026-05-04T05:02:19.394Z)

then enable this sort of restriction

### You (2026-05-04T05:02:21.735Z)

That'll be you.

### Guest (2026-05-04T05:02:23.114Z)

Then maybe one action point is

### You (2026-05-04T05:02:25.385Z)

That

### Guest (2026-05-04T05:02:25.554Z)

is there a way for us to get a

### You (2026-05-04T05:02:26.515Z)

yes.

### Guest (2026-05-04T05:02:27.934Z)

guest account to view your SAP configuration? Like a guest account. So that means the account can only see you near. Into the current SAP to see how the it is set up. Don't have Don't have any yes. At home. Everyone is for is live live account. Live? Yeah. But the The IP account is UAT. Oh, yeah. For UAT here. Have a UAT oh, yeah. Probably, we can use that. Use the UAT But then also in in meet the ID to log in. Right? Yeah. You can just share those the UAT account credentials also. We log in. We can just see how it is configured, really. But your your SAP require VPN SSH tunneling? Yes.

### You (2026-05-04T05:03:11.985Z)

Yep.

### Guest (2026-05-04T05:03:14.114Z)

I think this one In in VPN. Yeah. I think this one you can share us a guide on how to

### You (2026-05-04T05:03:18.865Z)

Yeah. Said we can

### Guest (2026-05-04T05:03:21.224Z)

we can see how go to your SAP settings page to see how it is configured already. Then we can be quite clear on how this impact is because we need to mimic the same way that it is set up. How about you just say from here? New sign account to see this? I understand straight. Ken, I think we we we do it after this. Okay. From the link, any more questions for for you guys? Okay. I think we cover mostly all the audio Yeah. I think covered quite a bit already today. So then another question I wanna ask is to to Jesse use any meta meta business account. Meta Okay.

### You (2026-05-04T05:04:22.385Z)

one

### Guest (2026-05-04T05:04:22.504Z)

So, actually, one, like, action immediate action after this this call, it will be part of the that Gather will send over as well. Is that GST is like you will need to start acquiring a company phone number for Maya.

### You (2026-05-04T05:04:35.625Z)

And then

### Guest (2026-05-04T05:04:37.444Z)

And then you because we mainly will use WhatsApp So then GST, we also need to set up Waba sorry. Meta business account. Configure WhatsApp for business. So this one, we have a guide, really, for you, but this is just, some action points. The fourth one is also to create account. Because it because the way we deploy Maya, is we were deep okay. This I think we need to check the commercial. But normally,

### You (2026-05-04T05:05:05.545Z)

Wow.

### Guest (2026-05-04T05:05:08.444Z)

the hosting will be by GST one so that you ban the raw server cost. We don't mark up any server cost or So to do that, GST will need to have a AWS account. And it will be billing to the company credit card. Via AWS. So so we will deploy into your account. Give us access as a account manager, then you get through AWS. So this will be the few infrastructure related things And, of course, the API keys because we use open

### You (2026-05-04T05:05:40.915Z)

Sorry.

### Guest (2026-05-04T05:05:41.154Z)

sorry. OpenAI and

### You (2026-05-04T05:05:42.445Z)

Yeah. And

### Guest (2026-05-04T05:05:45.044Z)

Right now, mostly OpenAI, so you need to have OpenAI So we will have a guide on how to do these things and get a flow. Have a main PIC to help. Of it. But internally, there should be a project owner. So that means somebody that we most likely work very closely with move things forward. And I think it's someone a bit more on the junior side, I think, No. Because I think you guys are, like, heads of department. Right? So I'm not sure. Depends depends. So this one, guys need to to to assign somebody. Will work closely together with our own meeting. Yeah. Yo. Que yo Yo Yes. Oh, Joey. That's Okay. Yeah. Okay. So great. Joey, will be Yeah. Ok. Cool. Is everyone in the WhatsApp group waiting? The group that we have? Yes. Okay. So great.

### You (2026-05-04T05:06:57.555Z)

Okay.

### Guest (2026-05-04T05:06:57.984Z)

I think we're good. Okay. So the next one is set out a meeting with SAP. Alright?

### You (2026-05-04T05:07:04.515Z)

Yes.

### Guest (2026-05-04T05:07:04.774Z)

Yes. SAP vendor. Okay. And then also we need to provide a number to register the the meta

### You (2026-05-04T05:07:12.345Z)

Alright.

### Guest (2026-05-04T05:07:12.784Z)

business. Correct. Need to purchase a company number set up your meta business account, then configure what what's that for business. And then AWS account and AWS billing. And, also, lastly, the OpenAI API key. So these are the six things that are needed from, GST side. Okay. We don't worry. We have a guide and get off to help you the entire process. Probably, we'll work together with Joey for this new number. Service.

### You (2026-05-04T05:08:01.075Z)

Yeah.

### Guest (2026-05-04T05:08:06.804Z)

Hi. Und doch. Alina. Phone number. Uh-huh. Tout ça peut l'on appétit pour le mot si le Saturday request request Bye. 啲 ， outdoor sales mail access to even to SAP 果 又 就 啲 ， view stock moving, movement, credit control So more like, it just assumes the tools

### You (2026-05-04T05:11:42.495Z)

One moment. Este, Yeah. Okay.

### Guest (2026-05-04T05:12:24.884Z)

So I think today's meeting was quite and thank you everyone for your time. Who will get with the different action points of the follow-up. Actions from this meeting. Nice to meet everyone, and forward to the next one. Okay. Okay. Thank you. Thank you from Okay. Ivan

### You (2026-05-04T05:12:40.125Z)

Okay. So much.

### Guest (2026-05-04T05:12:53.114Z)

processing. Okay, Hal. Thank you. Thank you, everyone. K. Bye. Okay. Bye bye.


---

# 4. 2026-05-04 — Ivan's RG Notes

# 4May26 - Ivan's Notes

GST Fine foods, requirements gathering meeting

![](https://internal-api-drive-stream-sg.larksuite.com/space/api/box/stream/download/authcode/?code=MjgzM2IyZDY4NGJiMGEwNzMxMDY2Y2Q0OTU0YjE4MDhfMDMyZGRkNjFmOWE4M2IxYzgwMmI5MjM4YmNlMTMzMzZfSUQ6NzYzNjM4MjU3MzQwMDE4MjQ5OF8xNzgyMTA2MzIxOjE3ODIxMDk5MjFfVjM)

![](https://internal-api-drive-stream-sg.larksuite.com/space/api/box/stream/download/authcode/?code=OWNiNWVkNjg1ZWNjOGFiMzNiMDg4YjNiNjIzMDg4MTNfNmU2NzE0NTViOTYyZWI2NDA3ZTEzYmExYjUwODlmOGFfSUQ6NzYzNjM4MjU3MDU5MDA4MDczMV8xNzgyMTA2MzIxOjE3ODIxMDk5MjFfVjM)

![](https://internal-api-drive-stream-sg.larksuite.com/space/api/box/stream/download/authcode/?code=NTRiODlkNzI4M2RkNjZmYmRjN2EzMTNhM2UxZGJhZjhfM2VmNzgzNjVjNjg4MDQ4MjM1M2Q5MWM1NTIxY2ZhY2NfSUQ6NzYzNjM4MjU3MjQ3MzI0MTMxMF8xNzgyMTA2MzIxOjE3ODIxMDk5MjFfVjM)

![](https://internal-api-drive-stream-sg.larksuite.com/space/api/box/stream/download/authcode/?code=Nzc2MjFhZjFiNTNiMzFmYWRlYTE1Y2ZjMDBiNGEwNGZfZThmZGQ1MzcwODBjMDE0NmYzZWI0ZTlmMjFjZWIxNTFfSUQ6NzYzNjM4MjU3NDA1ODc4NjUyOF8xNzgyMTA2MzIxOjE3ODIxMDk5MjFfVjM)

![](https://internal-api-drive-stream-sg.larksuite.com/space/api/box/stream/download/authcode/?code=NjgxMzRiMjE5MTc0OWEyMjcxYzJiZmU1YTI5MTVkNTZfMGMwYmI1NDIyMjg4NDQ5NzAwZjZjNDJjZDA5N2ViMmNfSUQ6NzYzNjM4MjU3NDIxODE1MzY5Ml8xNzgyMTA2MzIxOjE3ODIxMDk5MjFfVjM)



Soo chin - Boss

 Tim operation manager

 Teoh Le Ying - CEO wife

 Miss lee - Penang finance

 Joey- sales



 Ivan’s notes.



 no activity stock item notification



 Item descritpion/name override in sales document.



 blanket order.



 how to capture customer preference at every interaction. Ie shangrila want butterfly cut, this customer want clean and gutted.



 key in actual picked qty to the system again, sales support will receive the manually annotated pick list with actual picked qty and data entry back into maia.



 SAP has a relationship map feature to see the document trail.



Sap has a branch configuration, each business document will have its own branch attribution, also for user.



 This is how they can restrict user visibility by branch.

<figure view-type="Preview"><source href="https://internal-api-drive-stream-sg.larksuite.com/space/api/box/stream/download/authcode/?code=ZjJmMDUzMzViODRmODFkYzkxNTAwNmZkZWM4ZjM3YzZfNTUwYTdhNDgwZjQ0MzYzNmRiOTllOTQ5ZDUzMWQxZWVfSUQ6NzYzNTkzMTQ3ODA5ODI2Nzg2OV8xNzgyMTA2MzIxOjE3ODIxMDk5MjFfVjM" mime="application/vnd.openxmlformats-officedocument.wordprocessingml.document" token="DOh9bguu5oBUmsx63wHlbkRmgee"/></figure>

---

# 5. 2026-05-19 — WABA Account Setup Transcript

---
granola_id: 6cf7ddd8-c1e4-4a75-897c-4348718b1a3d
title: GST - WABA Account Setup - Transcript
type: transcript
created: 2026-05-19T03:15:00.012Z
updated: 2026-05-19T03:59:08.172Z
attendees: []
---

# Transcript for: GST - WABA Account Setup

### Guest (2026-05-19T03:15:08.003Z)

WhatsApp company. Okay, no need the suggestion. You'll be emptying a hearty thinking WhatsApp.

### You (2026-05-19T03:15:33.094Z)

Internal use of the harmon registers for the manager Maya to be follow.

### Guest (2026-05-19T03:15:40.803Z)

Good. Sorry.

### You (2026-05-19T03:15:42.374Z)

Ed. They're going to check about.

### Guest (2026-05-19T03:15:48.003Z)

Internal useful for external use. No internal use with modeling basically.

### You (2026-05-19T03:16:10.214Z)

Even the curve WhatsApp parcel under metadata under Facebook.

### Guest (2026-05-19T03:16:17.043Z)

Since I. Okay, is that the mentality? Which is involved now? Facebook.

### You (2026-05-19T03:16:31.254Z)

And.

### Guest (2026-05-19T03:16:34.723Z)

Media. You're also more involved down with visual sensitive. So one of the health is huge.

### You (2026-05-19T03:16:46.534Z)

Product or tamasuipang. Like Maya toy hall choose how I said you don't have much for Maya. Demon group like okay assessment contact. Right. The. Whole which may facebook. A resistor under metal.

### Guest (2026-05-19T03:17:37.923Z)

Since I suggestions.

### You (2026-05-19T03:17:43.974Z)

Company your local meta account so it's just add nagar WhatsApp number under the meta the business account. Even the social media along here.

### Guest (2026-05-19T03:18:05.843Z)

Since I met Instagram. So that's all nothing. Your eco account AI detector scam. So straight away the page. So that's why over the concerns are not waste or yuko more to internal the experiences. So in meta account you separate out.

### You (2026-05-19T03:18:38.774Z)

Separate. Our.

### Guest (2026-05-19T03:18:40.803Z)

To so woman meta for social media, social media, using meta for what's up the internal function.

### You (2026-05-19T03:18:53.654Z)

New yike. Isn't. Under accounting tiger. Using the national account and also young business account.

### Guest (2026-05-19T03:19:13.923Z)

From not being used kai ego WhatsApp the for for to link.

### You (2026-05-19T03:19:19.254Z)

On introducing tiger.

### Guest (2026-05-19T03:19:24.483Z)

Water questions separate out social media. Account in which circle whatsapp the function more to for internal. Suma. So. Researching concern. So try even internal use one whole circle or wall support internal you see the common use. So more violation cost every time anemia realize some time in the chart. Taman you send out some autonom control. You accidentally you send out some more what's the downline? What goes down account ear at the same time you link to women on the social media concern okay.

### You (2026-05-19T03:20:28.934Z)

Account library.

### Guest (2026-05-19T03:20:34.163Z)

Then grantee the promise.

### You (2026-05-19T03:20:38.854Z)

Social media.

### Guest (2026-05-19T03:20:39.123Z)

Social media toy.

### You (2026-05-19T03:20:41.414Z)

Funkit.

### Guest (2026-05-19T03:20:50.003Z)

Proven. Proof eat in the hasn't done 20 jiang so it cause any problem for woman the direct link to woman or social media.

### You (2026-05-19T03:21:06.134Z)

Method general schema cows.

### Guest (2026-05-19T03:21:10.003Z)

Brand.

### You (2026-05-19T03:21:12.534Z)

So.

### Guest (2026-05-19T03:21:13.683Z)

Without any gay woman will appear as young. Page so if we build social media so you build your search and effort to the water concentration. Now straight. Forward. Okay. Gareth source screen.

### You (2026-05-19T03:22:33.254Z)

Okay.

### Guest (2026-05-19T03:22:34.323Z)

Okay kind of on screen.

### You (2026-05-19T03:22:36.054Z)

Are y. Ol. Ks facebook page. Business. Under Facebook has.

### Guest (2026-05-19T03:23:03.043Z)

Account mostly system eager agencies I chose.

### You (2026-05-19T03:23:05.894Z)

Oh agency. The Facebook. Is now. Share.

### Guest (2026-05-19T03:23:27.043Z)

Account login.

### You (2026-05-19T03:23:35.494Z)

Business. Wait.

### Guest (2026-05-19T03:24:08.483Z)

Business.

### You (2026-05-19T03:24:40.454Z)

Okay click how many. GST group. Okay. Facebook page right now. Your check comes. Setting I mean. 17. Watch remove Facebook page. Yeah image.

### Guest (2026-05-19T03:26:01.763Z)

Ecosystem.

### You (2026-05-19T03:26:07.654Z)

On. Imagine under profile GST.

### Guest (2026-05-19T03:26:18.963Z)

Okay.

### You (2026-05-19T03:26:24.614Z)

No.

### Guest (2026-05-19T03:26:27.283Z)

Or stop sharing what's up. Should be under. GST one of the mark. S of being up by right so you're under even page owner. Page owner. Admin look of page owner also.

### You (2026-05-19T03:27:14.614Z)

De 4.

### Guest (2026-05-19T03:27:15.603Z)

Who's not been the meta sweet typhoon direct to kandao remain function.

### You (2026-05-19T03:27:25.814Z)

Oh so it needs.

### Guest (2026-05-19T03:27:27.923Z)

You you want admin on so if you post a page owner.

### You (2026-05-19T03:27:35.014Z)

Admin guys here.

### Guest (2026-05-19T03:27:40.403Z)

Click.

### You (2026-05-19T03:27:47.894Z)

Is green now coming down your screen.

### Guest (2026-05-19T03:27:50.563Z)

Sorry yeah sorry.

### You (2026-05-19T03:28:01.494Z)

Oh.

### Guest (2026-05-19T03:28:07.203Z)

Wonder how children click like wonder.

### You (2026-05-19T03:28:10.294Z)

After that I said.

### Guest (2026-05-19T03:28:12.803Z)

You all.

### You (2026-05-19T03:28:14.214Z)

Internet assessments here let's say Facebook page. But you know what kind of portfolio.

### Guest (2026-05-19T03:28:21.043Z)

The home intersect. Ing.

### You (2026-05-19T03:28:22.454Z)

Business portfolio is male. Investor.

### Guest (2026-05-19T03:28:34.163Z)

Page owner. Has a page on a woman is assigned circle admin to run the end.

### You (2026-05-19T03:28:40.614Z)

No.

### Guest (2026-05-19T03:28:42.163Z)

From the accountant.

### You (2026-05-19T03:28:47.334Z)

On 3. They mail me.

### Guest (2026-05-19T03:28:58.163Z)

Who's a picture. Of things. The account will chop it up go back to tunnel.

### You (2026-05-19T03:29:17.094Z)

By running tighter penta type of show and no dong. To the.

### Guest (2026-05-19T03:29:26.163Z)

So it's the evil participation. Okay go down. Okay you can love on. Confirm the facebook your small proper money answer to the what's this friendly the reminder about Suran demonstrator.

### You (2026-05-19T03:29:54.374Z)

Can they oh come on confirm. If.

### Guest (2026-05-19T03:30:04.003Z)

Overnight overnight kick me out the page needs to say thank you bye bye Dr.

### You (2026-05-19T03:30:16.534Z)

Increase single attitude metabol.

### Guest (2026-05-19T03:30:42.723Z)

Just. You.

### You (2026-05-19T03:30:50.374Z)

Ism this method.

### Guest (2026-05-19T03:30:54.563Z)

Woman the picture outside of sharing of circle moments is a normal seafood brand IG page don't hustle detector chang so woman so your money laundering. It's always a woman size correct so bad animal come with exercise some message run eager campaign no more money touch and go the e-wallet. How we cause that touchdown variation the term and condition that you can learn.

### You (2026-05-19T03:31:36.374Z)

Clickbank.

### Guest (2026-05-19T03:31:37.843Z)

Cheese woman put home is a video.

### You (2026-05-19T03:31:44.454Z)

Oh this time here con your touch angle.

### Guest (2026-05-19T03:31:48.003Z)

Campaign.

### You (2026-05-19T03:31:56.854Z)

Cat.

### Guest (2026-05-19T03:31:57.443Z)

With stroke eager no hunter the follow what are the content how you choose. You catch the attention. You are choosing the meal so globally took a meta IG slash fake account activities since web up.

### You (2026-05-19T03:32:30.214Z)

On. News.

### Guest (2026-05-19T03:32:34.003Z)

Took a took a searching fast and easy fast. The IG the account Enthusiast slash lang pai lang by chain for how many took a new so that one of it. So during I took a new skinny design wait some more parad.

### You (2026-05-19T03:33:09.894Z)

Okay.

### Guest (2026-05-19T03:33:10.403Z)

O okay thank you.

### You (2026-05-19T03:33:13.014Z)

If you need it all right.

### Guest (2026-05-19T03:33:17.363Z)

So that to that sentence.

### You (2026-05-19T03:33:23.094Z)

Okay the account.

### Guest (2026-05-19T03:33:39.443Z)

For international.

### You (2026-05-19T03:33:47.974Z)

Ing of the account is under target. No. So the path like a meta book it also. Okay okay. When sap vendor join.

### Guest (2026-05-19T03:34:31.043Z)

In case of.

### You (2026-05-19T03:34:35.574Z)

On you may not see. Oh okay.

### Guest (2026-05-19T03:34:41.523Z)

Meetings.

### You (2026-05-19T03:34:51.574Z)

Set up so that a monthly assessment.

### Guest (2026-05-19T03:34:57.443Z)

No no no access for sap what's open.

### You (2026-05-19T03:35:04.374Z)

So moment identically to. The city back end the renovate join.

### Guest (2026-05-19T03:35:16.083Z)

Okay.

### You (2026-05-19T03:35:17.094Z)

Okay there are certain general. Okay okay thank you.

### Guest (2026-05-19T03:35:23.763Z)

Thank you.


---

# 6. 2026-05-19 — SAP Vendor × Mindhive Transcript (Full)

---
granola_id: 8306d124-e9ed-4a2a-8a44-a4b89efd1c93
title: GST SAP Vendor <> Mindhive meeting - Transcript
type: transcript
created: 2026-05-19T03:59:08.355Z
updated: 2026-05-19T08:46:27.493Z
attendees: 
  - azibiqbal01@gmail.com
  - jermaine@mindhive.asia
---

# Transcript for: GST SAP Vendor <> Mindhive meeting

### Guest (2026-05-19T04:00:13.310Z)

Hi Leeing. Hello. The same job this meeting is being recorded. I'm still high. Since I've done. Hi everyone. Myself and Gareth here. Okay so Sharon.

### You (2026-05-19T04:02:30.399Z)

So. Cheryl.

### Guest (2026-05-19T04:02:32.270Z)

Is. Hello.

### You (2026-05-19T04:02:35.359Z)

Hello.

### Guest (2026-05-19T04:02:38.430Z)

Yeah I'm here together.

### You (2026-05-19T04:02:41.679Z)

There.

### Guest (2026-05-19T04:02:42.750Z)

Show nearly. Right. Hello hello the technical. So woman can start.

### You (2026-05-19T04:03:16.959Z)

So. Okay, so.

### Guest (2026-05-19T04:03:37.950Z)

The elbow.

### You (2026-05-19T04:03:45.359Z)

Thank you for the mission to share. Per meter. Settings. This one. Okay, cut it down.

### Guest (2026-05-19T04:04:29.310Z)

I said okay kind of down what is green.

### You (2026-05-19T04:04:32.159Z)

Okay.

### Guest (2026-05-19T04:04:32.910Z)

Okay.

### You (2026-05-19T04:04:33.199Z)

How? Okay, so when I opened.

### Guest (2026-05-19T04:04:45.790Z)

So what shall when our moment on tang si gang woman because.

### You (2026-05-19T04:04:49.039Z)

Up, women, because.

### Guest (2026-05-19T04:04:57.550Z)

Okay so say intranet the network.

### You (2026-05-19T04:05:05.279Z)

Internet, see the network. So, in the SAP.

### Guest (2026-05-19T04:05:08.830Z)

So demanded sap.

### You (2026-05-19T04:05:17.359Z)

User store,

### Guest (2026-05-19T04:05:17.630Z)

User sap be won the client like connect so demand also why men.

### You (2026-05-19T04:05:19.119Z)

When SAP won the rule was the company, tell you why men do what? No matter where it's a young VPN. So, okay, for example, multiplied in the client, Azaniko middleware. So 15mm network.

### Guest (2026-05-19T04:05:32.190Z)

Oh okay middlewear jiang so within him and the network.

### You (2026-05-19T04:05:54.959Z)

Okay.

### Guest (2026-05-19T04:05:55.550Z)

Okay so who is it chancella.

### You (2026-05-19T04:05:57.439Z)

So.

### Guest (2026-05-19T04:05:58.350Z)

So moment go home then the home middleware juicer click an ac.

### You (2026-05-19T04:06:04.159Z)

Middleware chooses that you can SAP be one service layer code for that. So was the server.

### Guest (2026-05-19T04:06:06.670Z)

Id we want another service layer so when he meant the naked sap service layer.

### You (2026-05-19T04:06:13.359Z)

Of service layer.

### Guest (2026-05-19T04:06:18.670Z)

Service layer have an API. Is actually a woman so it's a two way. Soy warm it's a drupe you saw maya will make clear sales order moment of posting the show will maturely post sapb1.

### You (2026-05-19T04:06:30.799Z)

Or consulting that you know will be doing post-quart. Er as a PD-1. 0.

### Guest (2026-05-19T04:06:41.790Z)

In the adjacent simple as aps service layer you can double down yellow so integrate api in the great.

### You (2026-05-19T04:06:53.599Z)

Okay.

### Guest (2026-05-19T04:06:54.190Z)

Okay but that means restful to show that this evening the hang middleware also. API game and integration just based on the mandarin myama the whole order by what's in Western eager signal three eager URL adjacent the data in its own Json box I think.

### You (2026-05-19T04:07:37.759Z)

Yeah.

### Guest (2026-05-19T04:07:38.430Z)

Even moment Tom Chan feel so like sap customization out of the box mineral clay support.

### You (2026-05-19T04:07:42.079Z)

So many customizations. Posted out of the box. The method made the west to create support. Out. There.

### Guest (2026-05-19T04:07:52.190Z)

Your so Inha say on udf.

### You (2026-05-19T04:08:04.559Z)

I see.

### Guest (2026-05-19T04:08:05.230Z)

I see.

### You (2026-05-19T04:08:06.319Z)

Nothing.

### Guest (2026-05-19T04:08:10.830Z)

How documentation soil those user defined fields of custom fuse.

### You (2026-05-19T04:08:14.159Z)

So you just divide yourself.

### Guest (2026-05-19T04:08:26.830Z)

You call out Jason. Order how many your catalog number so just so that flows just a few in s ap and niker field your laser tank.

### You (2026-05-19T04:08:54.959Z)

Up. Okay.

### Guest (2026-05-19T04:09:08.030Z)

Okay Involvement root this is Gareth you need to collect like because when we go in for the requirements right we need to know what are the customized fields outside of maya that GST so that we can then provide a mapping to their team that because the service layer itself cannot support so they need to expose new endpoints that we can then integrate with that new endpoint to pass the custom field so that it will be captured as a be either endpoint the way I have an infinite by taiwana but in cinema API.

### You (2026-05-19T04:09:13.279Z)

Then the music direction will collect. Because when we go from. The time, we need to know what are. The customized fields outside of Maya that GFT. So that we can then provide. That because the service layer itself cannot support. So they need to post new endpoints. That we can integrate with a new appointment pass, the custom field so you can capture it. As it.

### Guest (2026-05-19T04:10:00.990Z)

Even women okay so first of all our woman sick and woman JWT so.

### You (2026-05-19T04:10:02.319Z)

S about to sell weight limit and requiremental quick terminal.

### Guest (2026-05-19T04:10:08.510Z)

Limit the requirement as a small momento critic time in the way sap so catalog Chusan custom filler can that also conserve your sat center the future is coming to you so in vertical would be very helpful to us who communicate provide momentum or woman may or that woman had a business processes she out middleware put on the endpoint customized.

### You (2026-05-19T04:10:10.799Z)

So. Be used on intelligence catalog carpentry life. For example, in this case, the. Way to go would be very helpful to us that we can provide more consumer meeting with other or mayor. We also have a business processor that Julie, then obviously at the shop home, two time middleware, customizer. Woman that authentication called the Puff Silk and Service.

### Guest (2026-05-19T04:11:01.310Z)

Woman the authentication woman called the path second service layer super yamm. A in the user ID password so did you log in log in I will success or you can get token call me token your elbow yesterday now there is water middleware watch you clay sources will connect your set the route it juicer to call GSB service layer at higher next is share customize the moment of dedication.

### You (2026-05-19T04:11:33.999Z)

Take a drill called GS parameter, SAP, layer and higher customize the volume. That you can even have, that means participants. And so how you get your.

### Guest (2026-05-19T04:12:06.990Z)

Endpoints. Here is a very hope the dong returns again.

### You (2026-05-19T04:12:21.439Z)

Okay.

### Guest (2026-05-19T04:12:22.910Z)

Okay so a woman and dog client won't tell also V shiva so tamasian male macro record that feature but actually root of web hook or is that time sensitive to dongxi root also GST the admin to immediately trigger web3 will choose but momentum development so.

### You (2026-05-19T04:12:23.119Z)

So many of Appleblack over the journey. But actually, Rupa, I had shown you how certain way should be sometimes as a different toxin. Ruk also just types of point two immediately. We'll multiply that one year. So we think so. To make sure that all types of data actually matches up.

### Guest (2026-05-19T04:12:56.990Z)

We want to make sure that both. The middle part. Is middleware.

### You (2026-05-19T04:13:21.439Z)

To the layout. So I want to answer those in Maya as you call momentum, your eager pulling the syncing up.

### Guest (2026-05-19T04:13:23.150Z)

The middle. So momentum might have the side like True pulling the nanka sinking so task like may move the D title where she refreshed the Choose it woman yeah make sure that rug sap your your modification.

### You (2026-05-19T04:13:35.519Z)

So task like mangovic should be factored to a certain more SAP. Your qualification.

### Guest (2026-05-19T04:14:01.790Z)

Server user not gonna escape you link society cannot open so 100 sap server choose a young girl thanks clients like connection be one all but then to your dependency middleware shutdown or sumachu where your butcher.

### You (2026-05-19T04:14:19.839Z)

Is the world management. Laptop. Or actually one of the entry or dependency middleware shutdown or two for your. But even in the course of the fund, CSS or S31 and core.

### Guest (2026-05-19T04:14:45.870Z)

Well in acid message you are out. Mean by neither middleware integration on its own middle way on top of the book actually I'm afraid I have a whole my day see when she sap.

### You (2026-05-19T04:15:10.319Z)

One.

### Guest (2026-05-19T04:15:31.630Z)

Is in quail or the whole maya the nuclear high mile so that signal hydroxide. The sapsi so you've got sap of how duplicate all the. Root also duplicate sap. Gs AP was all about the order number function eager sap custom field remain. Sorry how my honeymoon soy doesn't custom end point but turnover for endpoint the development API analysis for jw100 chip on human requirement it will just kind of choose order my osmosis sales order until the end was.

### You (2026-05-19T04:16:26.399Z)

Goes out the way Chia. O says.

### Guest (2026-05-19T04:16:56.030Z)

As a woman puts it out like a udf your someone UDF show standard doctor type investor in quiet.

### You (2026-05-19T04:16:57.119Z)

UDF was so much PS3. So standard document. Did we have to sign up in API.

### Guest (2026-05-19T04:17:10.030Z)

API and then logic in terms of rulers search approval that b1c support put out the osmot 9 well sometimes trigger without any approval type for dip language equation into the k standard approval no one is on curation maintain halua has good trigger no one is no API make sure just correct me if I'm wrong di layers.

### You (2026-05-19T04:17:12.879Z)

Security approval? B1C support also 9 bedroom watching me buy. It. It was customized 101 in a souvenir DI layer.

### Guest (2026-05-19T04:17:46.030Z)

On the island SA people allow me.

### You (2026-05-19T04:17:49.519Z)

I see. But the Iceland takes power in the cancer travel database free to krm.

### Guest (2026-05-19T04:17:50.190Z)

I see but but the I s travel database the field will carry out okay so that's how ultimately synthesized so so I mean what I will suggest as well development server or that claim mirror target production data.

### You (2026-05-19T04:17:56.239Z)

A. So that's how. Ultimately the so I mean what I would suggest this one is actually created development server or that clean mirror target production data. Awesome.

### Guest (2026-05-19T04:18:20.670Z)

Production database the database three eager uap.

### You (2026-05-19T04:18:22.239Z)

Duplicate database. So guys when you see.

### Guest (2026-05-19T04:18:34.270Z)

So guys when you see what you say oh. Production data on testing this example data or design order is an example so True how the.

### You (2026-05-19T04:19:01.199Z)

Women. Cluster data launcher to tell customers items are warehouse type discount type. Then the whole XO will be helpful.

### Guest (2026-05-19T04:19:08.670Z)

Master data law chooses your customers are items are Warehouse type discount type the Data then the whole so will be helpful.

### You (2026-05-19T04:19:25.439Z)

In a way this is woman same thing. So Chiwa I would suggest condensers for we go by the basis format setup base.

### Guest (2026-05-19T04:19:25.870Z)

In a way took a moment saying kickstart so I would suggest condenser or we go by the basis from a setup base sine woman taikan woman Xiao webhook or shell customized the endpoint that woman can bring it from there from a get-go I tend to get to that point.

### You (2026-05-19T04:19:35.039Z)

Sand woman, taikan woman Xiao Nai webhook or Chia customize the endpoint. That woman can bring it from there. From a get-go I need to get to that point. So when we try to make do with what we have on service layer first to see your limitation in which S3 of this will be updated into the kind of thing.

### Guest (2026-05-19T04:19:51.070Z)

Try to make do with what we have on service layer first to see to come okay surface hour or tipping your limitation in which GS to be updated you know that kind of thing. As all out the the nab you know the answer really orders so the so from s from invoice.

### You (2026-05-19T04:20:17.119Z)

Sorry woman. Kind of chooses from invoice. In many cases.

### Guest (2026-05-19T04:20:28.030Z)

Sorry then you could shop like an order that's a whole woman how your woman actually or quotation from s o h invoice second so from XO clearly create multiple DO then from the tyranny invoice today.

### You (2026-05-19T04:20:48.079Z)

You create multiple DO. Sorry.

### Guest (2026-05-19T04:20:59.310Z)

Sorry. You mentioned me organ.

### You (2026-05-19T04:21:09.279Z)

Niko.

### Guest (2026-05-19T04:21:09.630Z)

Sorry Nikkei. Will come out further.

### You (2026-05-19T04:21:20.559Z)

Then invoice.

### Guest (2026-05-19T04:21:21.790Z)

Invoice.

### You (2026-05-19T04:21:24.799Z)

Okay.

### Guest (2026-05-19T04:21:25.390Z)

Okay let me thank you take note of this one in your connexus she also credit 20 minutes.

### You (2026-05-19T04:21:25.999Z)

Let me buy you take note of this one. Okay.

### Guest (2026-05-19T04:21:38.670Z)

Yeah.

### You (2026-05-19T04:21:45.679Z)

Uh Seattle. Will be our soldier or then even see how sorry return note.

### Guest (2026-05-19T04:22:01.710Z)

Then the main.

### You (2026-05-19T04:22:07.519Z)

Sorry.

### Guest (2026-05-19T04:22:08.190Z)

Sorry written notes sorry I'm payment made already then is she also refund and so many right sorry sorry. But then common home breakdown. Check down for free down. Stack now checking now when I issue the supremacy. In with root even the oxygen in the warehouse stock check.

### You (2026-05-19T04:22:54.559Z)

About written note here. In the warehouse or you went to river.

### Guest (2026-05-19T04:23:14.110Z)

That means immerses see and itchy job.

### You (2026-05-19T04:23:17.279Z)

Clearly supporter. Then the MindHalf you saw.

### Guest (2026-05-19T04:23:17.950Z)

Clear the one woman support then demand the bu source.

### You (2026-05-19T04:23:27.999Z)

In the process to talk like a hazard proof on delivery in the system.

### Guest (2026-05-19T04:23:29.790Z)

Shown in many the process to talk like hazard proof of delivery in the cities and young. Copy the chalk sign. Or chop juice or naked DOS.

### You (2026-05-19T04:23:52.239Z)

Your payment.

### Guest (2026-05-19T04:23:53.390Z)

Payment payments finance 9.

### You (2026-05-19T04:23:54.959Z)

Finances create. Like a payment entry.

### Guest (2026-05-19T04:24:03.390Z)

Payment entry. Financial.

### You (2026-05-19T04:24:09.519Z)

So.

### Guest (2026-05-19T04:24:09.790Z)

Common manual our check bank not open. Okay for multiple order sorry multiple invoice.

### You (2026-05-19T04:24:22.479Z)

Pick a payment for multiple.

### Guest (2026-05-19T04:24:31.070Z)

Oh yeah yeah invoice nothing manga so based on the statement the total and then how to make payment so tighter payment of those.

### You (2026-05-19T04:24:55.519Z)

Then what's the knockout capture?

### Guest (2026-05-19T04:24:56.110Z)

29 knockoff partial. Yes correctly okay okay so even demand the delivery so one-on-one P straightforward make it try to straightforward everyone have high foods.

### You (2026-05-19T04:25:04.319Z)

Okay. So one point that you put down straight for straightforward. Or invested sometimes just straight away to stores.

### Guest (2026-05-19T04:25:28.430Z)

Or message just straight away to choose to draw a sales order.

### You (2026-05-19T04:25:31.199Z)

On. Them.

### Guest (2026-05-19T04:25:35.710Z)

Sales order site sap remain hassle sales order you do invoice because of sales order numbering the whole you make a numbering and then invoice is so you get the numbering three of the segment so any day they say okay well you want to see the number then say okay number. Confused so woman whosoever print involves a so the invoice number itchy principle layout CDO so that they also follow invoice number number in right so it's a invoice itch who. Like you write then do and invoice is the same number so for hotel.

### You (2026-05-19T04:26:26.639Z)

The voice is the same number. So when so for example. Okay.

### Guest (2026-05-19T04:26:39.150Z)

All the reason.

### You (2026-05-19T04:26:42.879Z)

Sorry.

### Guest (2026-05-19T04:26:43.550Z)

Sorry. What the is this your sales order in the document or document here in March the document now woman search of so the AR invoice is okay customer that wants not for money system may print that system in money since internal valve the whole woman woman principle like the woman circle SAP remains the document invoice document for MoHive print layout invoice the layout they all together same with the invoice number so I had had a layout title but then numbering invoice so as a follow AI once the document DI tongue male pricing them up so invoice the template but yeah yeah correct okay n delivered zhou invoke.

### You (2026-05-19T04:27:44.319Z)

Male pricing. Amount. So dementia so they mentioned Partner hidden images come up as the Ola. F. Okay. What. Kind of.

### Guest (2026-05-19T04:28:05.150Z)

Oh thanks all menstruate the invoice itchi green have printed the main setting so it has a deorgan invoice it's true line along so customer trip like has a trip line. Your okay woman woman okay customer reply the old tons invoice Choose customer the invoice so it orders over your language Chuk customer customers and the original copy so that their deal is True ply so it is carbon copy central coming to fly back even the naked buyer customer so DO the by law then system generated the sales invoice of Susan.

### You (2026-05-19T04:28:56.719Z)

Is. So it is coming from. A. When clients. DO the by lock system generated so inverse of user.

### Guest (2026-05-19T04:29:18.590Z)

When you trip like because incoming for mobile funds and two fly paper but anyway to buy the building customer it tells you. The momentum I copy the momentos when you go out DO and invoice will go out together then when it comes back the DO got actually the carbon copy.

### You (2026-05-19T04:29:37.999Z)

At least when you go out. D. O and inverse will go up together. Then when it comes back the DO could actually turn the carbon copy.

### Guest (2026-05-19T04:29:51.390Z)

Okay so okay hotel case hot will try to jiangsu need another process so when hotel can even think the show higher credit socin then create the sales invoice.

### You (2026-05-19T04:29:52.159Z)

So take PU fall out. Hotel will try to jump through the kind of process. So when hopped up and maintain a show element, so high search and create your create serving voice. Okay.

### Guest (2026-05-19T04:30:10.510Z)

Wait a moment create s away is it because even as ocean may have deducted stock committed stock only then ham and point from next sales order January picking list juices and good so I consolidate then moment back thing.

### You (2026-05-19T04:30:34.159Z)

So.

### Guest (2026-05-19T04:30:34.990Z)

So the dark stock. Choose a confirm or one thing packing up chooses job posting. Okay this they take down the weight.

### You (2026-05-19T04:30:54.079Z)

The picking list they take down a bit. From so they generate the people where they pack you in the way.

### Guest (2026-05-19T04:31:01.950Z)

From as well they generate picking list then the picking list the the warehouse people when they pack their key in the weight.

### You (2026-05-19T04:31:08.159Z)

Can only send.

### Guest (2026-05-19T04:31:08.990Z)

Then only send out the DO when the DO when it's a DOE then that will be the quantity that they actually deduct from the inventory yeah correct so okay so.

### You (2026-05-19T04:31:09.679Z)

Below when the quantity that they actually deduct from. Yeah. So okay same Direction.

### Guest (2026-05-19T04:31:30.990Z)

PO from say. Customer.

### You (2026-05-19T04:31:34.799Z)

Mail.

### Guest (2026-05-19T04:31:35.550Z)

Mail. Yo yo yo woman now this is proceed to as older so order intake your your land so far your ECF business have survey or customer email hiker POs and or Tawway WhatsApp makeup bills in the case mail money caser customer who can even yell some more straight away.

### You (2026-05-19T04:31:47.999Z)

To Power your ECF business or customer email hiker bills and or tell me what's up interviewers here. But in MetaCaser customer who can Yelp some more. Straight away just to create SO.

### Guest (2026-05-19T04:32:09.310Z)

Okay this woman puts a True customer hotel fighting so it's fulfilled ordering rate for the one let's say taco runs in south color when the but then the next day we still need to follow the PO because without the PO they will they will be have the payment issue so then my hotel woman follow up nagar pill and in normal unusual by P.

### You (2026-05-19T04:32:09.519Z)

P. EL MADEN. T. The next day we still need to roll out the PO because without the POV neutral. So then I suffer. So.

### Guest (2026-05-19T04:33:24.430Z)

So this is more of like in relationship that whole like sound like a psych may not.

### You (2026-05-19T04:33:28.799Z)

The shift in Parthian that the whole typho like to some type of POTU may not. Okay.

### Guest (2026-05-19T04:33:36.270Z)

Okay you send the case I think this one is quite normal versus.

### You (2026-05-19T04:33:39.439Z)

This one is quite normal versus.

### Guest (2026-05-19T04:33:49.550Z)

Two months.

### You (2026-05-19T04:33:53.119Z)

Mind. A. Then.

### Guest (2026-05-19T04:33:56.990Z)

Then after that what else I'm sure they also have a custom feature in SA gear transformation oh yeah imminent when the stock transformation one to one target value by quite a thing choke still still still still maintain by coin because that one if let's say because.

### You (2026-05-19T04:33:59.759Z)

You also have SAP. The stock transformation. Oh yeah one to one that you use and. Maybe still still still still that day simply by fire. Because that one if I see because I was.

### Guest (2026-05-19T04:34:32.430Z)

Customization so nothing can use customized detail you think about like my momento pencil finished group but we need to also have the full fish.

### You (2026-05-19T04:34:42.959Z)

Looking back like but we need to also have the full fish first.

### Guest (2026-05-19T04:34:56.670Z)

Of 40% sap the so good customer okay.

### You (2026-05-19T04:35:11.119Z)

That was.

### Guest (2026-05-19T04:35:14.510Z)

But what should be customer think they should cut the tahui or taman you which is so tam by weight the material without even a great weight so you can range them up.

### You (2026-05-19T04:35:17.919Z)

Particle 7. Tahu is just so common. By weight the maturity of doing something else but you know.

### Guest (2026-05-19T04:35:37.390Z)

Using but try to understand okay so when customer request to buy your products your ECSO tahui jiangsu finish good the mysterious well toss up pn or then root also yeah your cases are well who were warrior whole fish the moment cheated the process.

### You (2026-05-19T04:35:42.959Z)

Your product. Ion. Stabilize the kid. Or something. Yeah.

### Guest (2026-05-19T04:36:03.630Z)

You'll finish good. Or try to lead it take the question okay below example salmon highline associate system official so fish for monkey mine hormone process turns eager so the end product okay choose a whole fish watching whole fish or two whole juicer trading item of take a whole fish or charge the whole fish the weight my network process to fill it as per request service hello fastener okay choose your mindset now you know which is again now what you has customers to gain the minus. Fillet the continuing halfway your wastage training who are tell to like okay well test time will will turn down a weight of sick a whole fish kayak my turn as customer request will be titan of zero production which is colonized now okay it's a cost now delay choose a the total be the cost in their water let's say constant water fill waste their costing to swan free l.

### You (2026-05-19T04:37:30.879Z)

3. Up. Here.

### Guest (2026-05-19T04:38:32.030Z)

Partner tell me just as old.

### You (2026-05-19T04:38:32.079Z)

Tell me to go out for open fill.

### Guest (2026-05-19T04:38:39.550Z)

Customers consider internal warm city life domen city like absorb now immensity life so calcina also process chip fillet and sofish so it's sometimes the constitutional sense so actually the inventory team so eventually sales and coordinator.

### You (2026-05-19T04:38:39.679Z)

Ers. So.

### Guest (2026-05-19T04:39:24.190Z)

Comments my customer I see goodbye.

### You (2026-05-19T04:39:25.599Z)

I see.

### Guest (2026-05-19T04:39:29.630Z)

Two for sales person now look what process through lighter so how you say the partner not before her conform to the order so it's in outside internal remain gold more than the mind okay woman time will symptoms of sales.

### You (2026-05-19T04:39:39.519Z)

The. P.

### Guest (2026-05-19T04:39:53.710Z)

By the misu that means on the at the s own nematodes when he finished good like swana but in terms of okay.

### You (2026-05-19T04:39:55.119Z)

1.


---

# 7. 2026-05-19 — SAP Vendor × Mindhive Transcript (v2 — Speaker-Attributed)

Jermaine (mindhive): 04:16 
 Okay, So was.

Jermaine (mindhive): 04:41 
 So.  Nim.

Jermaine (mindhive): 05:31 
 Network.  Okay.

Jermaine (mindhive): 06:15 
 Posting the shah SAP.

Jermaine (mindhive): 06:37 
 Okay but that means.

Jermaine (mindhive): 06:59 
 Kingdom.  SAP customization.

Jermaine (mindhive): 08:51 
 Okay.  This barrier you need to collect like because when we go in for the requirements right we need to know what are the customized fields outside of Maya that GST will so that we can then provide a mapping to their team.

Jermaine (mindhive): 09:16 
 That because the service layer itself cannot.

Jermaine (mindhive): 09:18 
 Support so they need to expose new endpoints that we can then integrate with that new endpoint to pass the custom field so that it will be captured in SAP.

Jermaine (mindhive): 09:45 
 Okay so first of all.  Will be very helpful to us.  The middle.  Service.

Jun: 11:01 
 So.

Jermaine (mindhive): 11:25 
 Customize the woman Chuyong.

Jermaine (mindhive): 11:37 
 Great.

Jermaine (mindhive): 11:49 
 Custom endpoints oh.  Time sensitive to don't see GST the admin SAP immediately trigger web.  Developed two way s to choose we want to make sure that both sides of the data actually matches up.

Jermaine (mindhive): 12:53 
 System.

Jermaine (mindhive): 13:16 
 Pulling the KN sinking so task like may Woof and Zong Tamanda refresh the juice woman yeah make sure that your modification.  Shutdown.  Hdno integration.  So standard doctor.  Logic in terms of rule associate approval that B1 support put out.

Jermaine (mindhive): 17:22 
 Sorry, just correct me if I'm wrong.

Jermaine (mindhive): 17:33 
 I see.  So ultimately since so I mean what I would suggest is created development server or that can mirror production database.  Poharah production data on testing.  Customers are items are warehouse even the tax type discount type Nice set up the data then the whole so would be helpful.  Anyway kickstart so G I would suggest we go by the basis woman set up base S woman taan woman shell webhook or shell customize the endpoint that woman can bring it from there anyway from a get go I think to.

Jermaine (mindhive): 19:29 
 Get to that point.

Jermaine (mindhive): 19:33 
 So woman try to make do with what we have on service layer first to see to okay or chip on your limitation in which you have three hours UDF to be updated.

Jermaine (mindhive): 19:46 
 You know the kind of thing.

Jermaine (mindhive): 20:32 
 Create multiple do then from do type create invoice.  Sorry.  Sorry Nikki.

Jermaine (mindhive): 21:09 
 Okay.

Jun: 23:20 
 Just copy the chop sign.

Jermaine (mindhive): 23:23 
 Oh chop sign.  We also create.

Jermaine (mindhive): 23:46 
 Payment entry.

Jermaine (mindhive): 24:01 
 Okay.  Sorry Multiple invoice are even.

Jermaine (mindhive): 24:44 
 Knockoff partial yes, correctly okay.

Jun: 25:25 
 Because of sales ordering numbering and then invoice is with the numbering.

Jermaine (mindhive): 26:08 
 You write that do and invoice is the same number.  Sorry.

Jermaine (mindhive): 26:27 
 Sorry sorry.

Jun: 27:09 
 Together same with the invoice number so had a layout titles do.  But then had a numbering follow invoice.  AI wants the document.

Jermaine (mindhive): 27:32 
 So Niman choose invoice the template.  Yes.

Jun: 27:38 
 Yeah.  Correct.

Jermaine (mindhive): 27:40 
 Okay.  Oh.

Jun: 28:11 
 Okay.  Customer.  Omansana carbon copy.

Jermaine (mindhive): 28:39 
 So there's the ideo is triply.  So it's carbon.

Jermaine (mindhive): 28:51 
 Customers system generated the sales invoice.

Jermaine (mindhive): 29:22 
 When go out do and invoice will go out together.  Then when it comes back the do got actually the the carbon copy.

Jermaine (mindhive): 29:34 
 Okay so okay.  Hotel.  Processor.  So when hotel create then create do create sales invoice.

Jun: 30:31 
 So.

Jermaine (mindhive): 30:37 
 Okay.  They take down the weight the from.  So they generate picking list.  Then the picking list the warehouse people when they pack their key in the weight then only send out the do.  When the do when it's a doe then that will be the quantity that they actually deduct from the inventory.  Yeah correct.

Jermaine (mindhive): 31:04 
 So okay.

Jermaine (mindhive): 31:14 
 PO from say remember customer.

Jun: 31:49 
 No okay, But then the next year we still need to pull out the pocket because without the PO they will be at the payment issue.  But then my hotel.  In normal usual orders by po.

Jermaine (mindhive): 33:08 
 More of like.

Jermaine (mindhive): 33:12 
 Relationship.

Jermaine (mindhive): 33:19 
 Okay.  I think this one is quite normal.

Jermaine (mindhive): 33:40 
 Then after that what else are stock country?

Jermaine (mindhive): 33:43 
 They also have a custom feature in SAP.  The stock transformation.

Jermaine (mindhive): 33:49 
 Oh yeah.

Jermaine (mindhive): 33:49 
 Even the stock transformation one to one.

Jermaine (mindhive): 33:57 
 Yes.

Jermaine (mindhive): 33:57 
 Still still still maintains.

Jermaine (mindhive): 34:01 
 Because that one if.

Jermaine (mindhive): 34:02 
 Let's see.

Jermaine (mindhive): 34:03 
 Because.

Jermaine (mindhive): 34:29 
 Like my.  Finish good.

Jermaine (mindhive): 34:34 
 But we need to also have the food.

Jermaine (mindhive): 34:57 
 But.  Salmon.  Okay.  So when customer request to buy your products your ecso Tahoe finish good.  That means.

Jun: 35:54 
 Okay below example salmon.  Process.  And you feel it the soa.  Okay.  Towards your bow.  And coordinators.  The mind.  Okay.  Oman.

Jermaine (mindhive): 39:36 
 But that means Nimasu.

Jermaine (mindhive): 39:38 
 Nah, that means on the at the so nematosis where you finish good like.

Jermaine (mindhive): 39:45 
 Swana.  But in terms of okay.

So.

You. Foreign. You need to collect like because when we go in for the requirements right we need to know what are the customized fields outside of Maya that GST would need so that we can then provide a mapping to their team because the service layer itself cannot support so they need to expose new endpoints that we can then integrate with the new endpoint to pass the custom field so that it will be captured in SAP. Okay so first of all. 10 Middleware set so. In this case. So will be very helpful to us. Call the path. Service layer and hayo juice customize the woman. Okay. But actually. Time sensitive don't see. AAP Some point to immediately create trigger webpoint but.

To choose them we want to make sure that both sides of the data actually matches up. Pulling the knuckle sinking. Yeah make sure that SAP your modification. Middleware shutdown also want you. What. Dosa. Standard Dr. Logic in terms of rule associate approval that B1 support put out. Sorry, just correct me if I'm wrong.

I see.

But. So ultimately. So I mean what I would suggest is. Development server or dagger that mirror production data. Or duplicate database. Production data. Launches customers items are warehouse even the tax type discount type nice shampoo set up the data CN then the whole so will be helpful. Anyway kickstart. So actually what I would suggest.

We.

Go by the basis woman setup base scene Zihou woman Taikan woman Xiao Nai zi Xiao webhook or Xiao customize the endpoint Then women can bring it from there even from a get go I need to get to that point. So woman try to make do with what we have on service layer first to see to come. Okay or limitation in which gseclav UDF to be updated. You know, that kind of thing. Sorry. Then. Customer. Invoice so from so create multiple do. Then from do type create invoice mark. Okay, Sorry. Okay, you take note of this one. Sieno cn. Yo chew. Then Iman y CN Hui Sorry, return note. Sorry, payment made already.

Then she also refunds now.

University.

Asmr you also create payment entry. Payment for multiple. Sorry multiple invoice.

And then. Yes, correctly.

Okay, so.

Because of sales ordering numbering and then invoice.

You write them do and invoice is the same number. So for hotel de Hua. Okay, Sorry.

For the instance of. Together same with the invoice number. But then number is follow invoice document.

Invoice the template. But knuckle Haider as the.

White copy customer copy.

So their do is triple. So it is carbon copy when clients. Generated the sales invoice of Susan. Out do and invoice will go out together Then when it comes back the do got actually the carbon copy. Okay so okay hotel. Then create do create sales invoice.

Okay first of all create SOA.

So. Okay so the picking list they take down the weight the from so they generate picking list Then the picking list the warehouse people when they pack their key in the weight then only send out the do when it's a do already then that will be the quantity that they actually deduct from the inventory.

Oh.

Yeah. Correct. So okay buy.

PO from say remember customer.

ECM business survey or customer who email or tell you WhatsApp ecop but in the case customer.

Okay. K. But then the next day we still need to follow the pill because without the pill they will be the.

More of like relationship. Okay I think this one is quite normal. Then after that what else they also.

Have a custom feature in SAP the stock transformation.

Oh yeah. Even the stock transformations one to one. Yes still maintains because that one if let's see because. Finish good but we need to also have the full fish. By weight. Okay so when customer requests to buy your products.

Hello. To consider internal woman city like. Hey. True like this.

On the at the finish good like Swana but in terms of okay sorry I will start over here.

Okay Think they are meeting.

Is their call or yours you send to them out like this is bad. Yo bro. Yeah I saw what production down I'm in a meeting now. Why? Oh because okay so production right now is down I went to AWS to get the log but when I try to connect to the server it says that you cannot connect instance yeah but showcase later but you have a I.M. You have an I.M. Account, right? Have a what? You give me 10 more minutes I'm almost done here. Okay Goodbye. Passive. Who else are?

I think they are the lane Then there are seven is.

Which department owner.

There is I think it's a yeah the shooting their boss Their mineral is operational. Yeah Everyone in? Yeah, I think we can proceed high.

Pattern Pisces Sorry so yeah so Dennis stop entry but I think we can I think the one we don't do it in this call because the main purpose of this call is for NACA SAP so on Jun the site Niman is like share the dao knuckle UAT with Naka GST the datamark Sorry Good what's wrong with my water? Why? Got two water. Sir. How you feel? What's wrong?

Maybe you try to Quit. Quit and see.

But why is there still a German that.

Just now you request two times.

No, no. Still now still better.

Yeah.

Only one.

Sorry.

Use your. Yeah, okay. Sorry. Okay. So.

So.

So now the main thing that we are talking about Sapna. So I think the first next step request housing testing environment or UAT environment that woman can have access to your data log. Then at the same time. Fun.

Don't say. Example like sleeper lobster. Process to another end product. In stock receiving the circle take a.

Time.

Process the item production Happy milk processing the report.

Whole whole prawn.

Practice. Then. Like Excel to like choose a mint and moment. So efficiency.

Based on sales signal. That. Kicks out and go how. Okay, it's good.

See it was all when you hit you.

Process. In process.

Maybe.

As an option from SAP. Nepal mrp or.

Manufacturing process. But I'll check what that means. Next week fulfill one 1000kg of.

Minimum stock levels. Boy. Daily. Supply levels. Delivery. Information.

Just to update you once.

More efficient SAP testing.

Because right now they. I think they will provide their UAT account.

Okay.

Hello. Okay,.

But then for naka sapn access which need the it team SAP the uat instance of. Okay, thanks a lot ling. Thanks june. Thanks sharon. Hasma. Hosamayan.

Okay,.

Thank you. Thank you.

Bye.

Bye.

It's. It. The server.

Try to explore.

Yeah, yeah, I think so. But why the security search is so high on it. Can I give that sound you continue to. Explore. Server. I mean their showcase almost over. Anyway their Showcase is until 1:30. What the. I mean it tight in the middle like 1:1240.

I think we will have two types. Give me some minutes. Okay? Yeah. There's no. There's J got draw the tank. I forgot the screenshot. Oh, the white one. Yeah. No, no. It's a. You use a TL draw.

So the idea. Complete.