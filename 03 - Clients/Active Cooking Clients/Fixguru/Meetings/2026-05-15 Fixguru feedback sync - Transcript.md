---
granola_id: 44c63d17-b98b-49a1-b331-d58d0798df0e
title: Fixguru feedback sync - Transcript
type: transcript
created: 2026-05-15T08:19:10.255Z
updated: 2026-05-15T10:37:54.551Z
attendees: 
  - jermaine@mindhive.asia
  - ghostsketon@gmail.com
  - afiqaqill261203@gmail.com
  - ivan.cyh1996@gmail.com
  - azibiqbal01@gmail.com
  - bryantewyh@gmail.com
---

# Transcript for: Fixguru feedback sync

### You (2026-05-15T08:19:54.761Z)

Okay. So I'm gonna do Ok. So let's share their overall feedback from FixGuru. Fixed Guru is they totally cannot proceed at night. I will show you some example of a test. So this is how how they evolved problem. They say find find the price history for this customer. But it seems like the he thought the this customer name is actually item So I think for my side, I see not testing more on their physical, their their insulin. It was for physical, right? I normally test on dev. Death internally. Way Is problem for that? I mean No. So as I a problem, the Okay. Run by, Banner. Just for the let's start with the historical pricing. Basically, historical pricing, what they actually request is the surface out the their item level discount. The net price from the last trunk set from my last transaction. Mhmm. Yeah. And then calculate okay From the calculator, that more study is actually what based on their workflow. It's just like some UI, UX enhancement that Amir will need to fix. And Yeah. K. About the calculator. So you remove the SSC why they're doing that way? No. It's e one. So it feels like I think just now yesterday it's other journey for he actually test with Hanmiu wa Because for for fixing ride, they they don't use the text at all. I know. I need need to check with them. So They don't want to let their customer know this item will charge the tax. Because I want you all to make sure that you all understand that this is this is a configuration problem. Like, because quick school unit price and item master already put stats. Mhmm. So the Okay? We we understand the business. So we'll learn to do that, you know, because then it's like Okay. Like like, we need to feel after after like that. Okay. Restriction on length must always be larger and the wings. Because it has to do with the the way of RAC and What about you? Larger? I think they need the length to bring for the linear meter, is it? If that's the longer one should be always the length instead of a brief Longer than No. But why? But why? The raw material on this calculation all this management have to print, and they have to print the box, right? If let's say the width is longer than the length I don't think they can print the box, is it? The eveal. Surface. Because the shipboard of this this length is weak, right? Then when we wanted the use a calculator to to lang, also have Sí. She put cost price in the last might need to go with the switch between and It's a unique conversion. Just right now, I think the... They use meter, right? For this. They're incorporated. Okay. So Yeah. So I think this one maybe was This is our most likely is gonna be issue. The square is like go of the mobile Yeah. When you try to pass from the from their quotation, I don't able to complete the bank. On the on how how is done right now is that on the on the certain IDs from the notation document which includes the like, because each item item Okay. So let's say when you want to back, do that item ID as a lookup and a lookup. But I think yeah, it can show you. Choose the one one two one two three Yep. So initially was in addition to there's something that I wanna share with you guys. This is a bit So heavy units also configurable. So for this one, for the minimum effort then the And I have a syncing of contact or HQ contact and branches. Yeah, because they also try to the chatbot to, like, assign the branch to different for in the end, Yours, for example, some of our customer, they might have a different branch. Without any tool rebuilding friction everything that we can and store as much as we can. And stuff that also anyway. But you see that when you see the Okay? So protocol that we are supposed to have the design decision for. Right? So not only we have to talk about the way, but this is the scope of work and also productive how they discuss sure with them, but they seems to be expecting that if every sales order draft on our side already seen to their site, then we can already use the template from AutoCalm already. Because right now, if this draft on our site, draft, they approve it in that side. It doesn't mean they can approve it in our side is So if we push in graph order, think the argument that they change problem. I probably say is because they want to send the like, the the the PDF format that AutoCAD always generate nicely for them. Their client. Then on their graph, yeah, on graph, Because I think the outside, there's the level of water to take the look then. Because this one is something similar to pro form a invoice. Right? So they will like, send it up to, like, confirm confirm, then keep on going back and forth. Adjust the sales order before really Okay. Then we'll need to go to next stage, the review order. For this one for this use case? Dos So we have pushed the SO draft in draft data one to auto count. No. What question do ask the customer to do? What you That that is one of the issue, I mean, yeah, Because I put that one of the thing is I got that they actually show me their and the how they adjust the all the zone all the fields that they wanna show in the PDF and the so that is on our PDF, V3 or, yeah, the because I when I saw the EFB generator that the attempted, then they want to keep they want to inspect and think they kinda they kinda don't want the PDF that we provide. But this one is still in the scope, right? No. Just just get the That that means that our son also need to sync at formula to calculate the Volumetric. Yeah. The volumetric problem. For all those sides are because then what I got last time they did to so their driver can Yeah. Just put as a chicken breast. Yeah. BIOS checkbox right now, they show the item code is show the Maia one, called the state of their auto account, from their auto Actually, when we pull from... Because in these kind of cases, they can't

### Guest (2026-05-15T09:01:06.871Z)

This one is regarding the IDs. Right?

### You (2026-05-15T09:01:09.991Z)

Yeah. Yeah. Yeah. Yes.

### Guest (2026-05-15T09:01:11.801Z)

Yeah. Favorite one is also like this, the one I mentioned. I think flavor how is it handling its back end goal and replace yeah. Replace the our internal ID with the external ID.

### You (2026-05-15T09:02:13.041Z)

Right? So over here, the users can create create do is Actually, in this case, there is no harm for us to use the item code another problem called item code, and you can customize what I So there will be a case where in in in as it is in the on our side, let's say we call them g seven or so we should actually start we should actually block them from creating items item code validation. So right? Customer company branch for their kids, right? They will treat delivery method as an item. Your itemising. Delivery method? Yes. As an the charges are charges as an SKU. The reason why he doing this is say like, when they want to submit e invoice, right? Need to claim they won't earn this profit, these charges. Fixed Transport? Transport. Seventeen. Yeah. On the XL, the transport is fixed. Based on what Yvonne test is like using these three La la move patterns. So the chatbot will treat it as a delivery method instead of the item. But if they ask one, they want it they want a GPO, like, either, Yeah. Which is a problem. So it's yeah. This I think they wanna find 3PL Yeah. On our side, we one my end instance can only call one channel account. Alright? And then sense? It's also the muclide The foundry one has muculus and then on discuss further in the palm shot one. We're finding the let's move this down. Okay. Thoraco context for variable is in the formula, then how to slot it into all the HTML why I think it's kind it can be kind of something that we can learn from how they structured and show out that thing So next time, if the class will adjust their PDF also, what is the they show us the delivery note for their sac, they are they actually got not only a main warehouse check one one. I think check one and front end, the way that we display Because I think they haven't pulled the... I see you haven't pulled the... For all. Ok, ah, ya. Ja. Acho que o outstanding should be base order. Invoice. It should be be based can still keep creating with watches. Yeah. When I talked to them, the way that they do it is they will see from invoice on their autocolor, they see from their outstanding invoice and also the payment term they will go the client first one before they even let them create a new sales order. So, actually, the sales order I mean, this because this write down this formula is our side Yeah. Yeah. Because Because if here we just deal with SO amount, when you invoice it is double. Right? So let's say SO, 38. Right? So then to be the decay minus 12. Basically, this is the unbilled amount. Plus 12, and because it's gonna be right? Yeah. Oh, that that's why that's why they can block it there because mentioned. They want to see the unreal one. Alright? Yeah. Because this outstanding value will be reduced when payments are located Yep. So then the only thing that is, you know, is unrelated payment Then it's just okay. So the main user story is that log map systems cannot cannot show credit limit, but the thing they can actually show this. They want to let them judge because they chip in mark. Yeah. This should factor the invoice that is not outstanding and also the submitted one subject to the I think this will be the final spectrum. One to create and also chatbot need to service this out for them to uplift the client Yep. For invoices, end of midst of processing it. That means the closed key cases, approved cases we put them to be. Okay? It's a actually those wouldn't affect this one already. Those that's gonna affect is those that you've got asked every one. Yeah. Actually, we should go over the ball documents except drop. That is it's a problem. To all this. Break shit. No one is doing that in the background. It's like you update the game, You for s o, s I, c y n, move this out. Right? But because we have connection to their So if we have this thing out of the box, mean, it. Just try to do it. And this will be really second point there. Because I for the GSE and SEC scales, they want their own data in because it's important to like, for us to have accurate credit limit. So So let say we we got yeah. I mean, it's a pretty regular I mean, I I mean, I just do is to look at it. Like, we can be do minimal work and then, like, manage the client and say that, oh, because work and then step alternate dependent on us to make sure we do that. Accurately in my shoulder break. You need to make sure is correctly on our next I think you need to start with me in this So,

### Guest (2026-05-15T09:40:29.051Z)

Hi, Winah. Sorry. I just just a quick quick one. But I I think for time, Should I do the two the waiting for the historical data person. We no. Now the usual is that we won't be able to quote. I can tell tell you this migration exercise, right, my past experience, did a few round really, is gonna cost a lot. So, like, historical, like, those especially for those businesses, right, that has, like, five, seven years kind of historical data, it's one is that the the cost of doing the work is not actually counted for. We should only do it for clients with with with the budget to do data migration. There was one So then our our our our system should still do the snapshot way for all these 20 key clients. Right? Not it's not even a business, bro.

### You (2026-05-15T09:41:30.841Z)

Okay. No. No. No. Wondering if, like, say, we do these two basic out of box art, then is there a way that with minimal effort that we can just pull their data in really good.

### Guest (2026-05-15T09:41:47.201Z)

It's not just the effort part. It's even the server resource part, though. And and and and then, yes, I I I understand you are gunning for, like, the perfect like, it's like a perfect scenario. That, April, you yeah. I can move to our our system. You want to do everything our system can. But in reality, it's not like because we cannot guarantee the data integrity of their system as well. Then if, let's say, we want to audit the data, that is a a different exercise again.

### You (2026-05-15T09:42:17.181Z)

Yeah. So,

### Guest (2026-05-15T09:42:22.791Z)

I I yeah.

### You (2026-05-15T09:42:24.781Z)

for these guys, we stick but I mean, the two weeks,

### Guest (2026-05-15T09:42:24.961Z)

Sorry.

### You (2026-05-15T09:42:28.191Z)

two way part, we still need to need to kind of figure out

### Guest (2026-05-15T09:42:32.101Z)

Yes. No. That one, but it's for different reason. That one is so that we get comfort give comfort to the customer to say that even if Maya fails, they can fall back to how they work. They can just continue from that. And then when Maya resumes, then they can still continue. And there's no data integrity issue. That's all. Yeah.

### You (2026-05-15T09:42:59.461Z)

We will still need to sync backward a certain time frame. Right?

### Guest (2026-05-15T09:43:03.721Z)

No. Ken. Ken. I understand. Because there are cases whereby, like, past orders that are still open that they want to do in our system, that one arguably, we can scope in or scope out first one. Yep. Yep.

### You (2026-05-15T09:43:31.631Z)

On that's it on. Like, we spin up the instance and we pull that for the first time, We want to always think who reconciliating 100 k, if we as well. We don't always seem to do full two wasting of the entire 100 key invoice or not. Because if if that's the case,

### Guest (2026-05-15T09:43:50.891Z)

Yes. Correct.

### You (2026-05-15T09:43:51.651Z)

then our two way policy is not designed properly. Because we only need to sync on updates, man. Right? So then on the system side also, there's gonna be those more

### Guest (2026-05-15T09:44:00.621Z)

Yeah.

### You (2026-05-15T09:44:05.421Z)

like, point behind the two way sync is that whether it's thirty days backwards or 100 k or whatever, shouldn't be an issue to to pull back into our system. Because the two way thing one basically on updates on either side of the system is always overwaiting the two the the entire thing. Sure, the first time it will be costing that first school of their 100 k invoices ongoing forward, I don't think we'll have an issue.

### Guest (2026-05-15T09:44:49.801Z)

One, yes. But that but then yeah. That that that that is not the the the the the data sizing issue also.

### You (2026-05-15T09:44:57.611Z)

¿Qué tasa es de inicio?

### Guest (2026-05-15T09:45:00.001Z)

The size, the the store reach, and the performance of the retrieval It's it's a different ball game already. Even big systems like last time we did with Oracle PeopleSoft, right, when when we did for KDU, we had to do a cut off. We didn't have the choice. A snapshot, then we had a period that we run parallel also.

### You (2026-05-15T09:45:21.581Z)

Okay. But I the the more expensive I mean, usually, the data is always in a five to seven year range. Right? So eventually, if we I mean, basically, we are just kicking the ball down the roadway. There will be a point where there's gonna be a client that with five, seven years, size of data on my end. So then

### Guest (2026-05-15T09:45:46.071Z)

Ya.

### You (2026-05-15T09:45:47.821Z)

we still gotta deal with that. So then that's why we start going into

### Guest (2026-05-15T09:45:56.151Z)

Yes. Agree. Yep. Yeah. But that but that one is chargeable, so we can use that to build up the the use case. But even for this one, we should put it as under as a separate chargeable service because

### You (2026-05-15T09:46:25.331Z)

Okay, so this is how we can deal with this

### Guest (2026-05-15T09:46:25.521Z)

it is different. It is really a different, ballgame.

### You (2026-05-15T09:46:30.301Z)

we have two options one is we do a snack job which is we pick a date. Okay. So let's say we call it a UAT soon. Right? So like second UAT, So on that second UAT date, they will need to give us a file of the client credit exposure and open orders

### Guest (2026-05-15T09:46:52.641Z)

Alright. Yep.

### You (2026-05-15T09:46:58.821Z)

Yeah. This one this one from them, can we use the statement of accounting? Because No. No. I'm not can just grab the statement of account for all those then we already Transform. Yeah. We already we can already export out like, this client, last three months or something, how much they owe us and the the credit data is is able to build out that credit data for what I understand from the statement of account. So usually, the finance Mhmm. The payable to use to deposit. One is every customer to their credit limit, and the current exposure. That means, this customer credit limit how much?

### Guest (2026-05-15T09:47:42.591Z)

Yep.

### You (2026-05-15T09:47:45.031Z)

Curry all the open

### Guest (2026-05-15T09:47:53.451Z)

Yeah.

### You (2026-05-15T09:48:03.471Z)

to to ingest that kind of file to then create the invoice basically reflect their invoice basically, exposure into into my app.

### Guest (2026-05-15T09:48:16.821Z)

Yeah. But but, bro, this sound will only work, right, when

### You (2026-05-15T09:48:17.341Z)

What

### Guest (2026-05-15T09:48:21.251Z)

that means on the cutoff date, forward, all payments will need to go through us. That means this one will include floating payment for a customer, then only you will still stay tally.

### You (2026-05-15T09:48:31.581Z)

Yeah. I mean, yeah, we have. Yeah.

### Guest (2026-05-15T09:48:58.851Z)

Sorry?

### You (2026-05-15T09:49:00.721Z)

In particular case, But if we do not have the two way sync, doesn't work. So that's why the two way sync, So every every day, we also want to get the snapshot from them, which is

### Guest (2026-05-15T09:49:25.801Z)

Yeah. Yeah. Correct. Correct. Yeah.

### You (2026-05-15T09:49:36.061Z)

if we can by default support slowly sucking in their old sheet. Right? I know it's not gonna be 100% accurate, but

### Guest (2026-05-15T09:49:51.721Z)

No. No. No. No. So so, bro. No. No. That that is another way. So the way is when we migrate during the cutoff period, for the as of at that date, documents, the historical one are taken in as a snapshot. So the one is one So for moving on, right, like, let's say they created an invoice in in their system, it's tied to So when we sync to our site, we can create it as a standalone invoice. You understand? You don't need the you don't need the historical data. So then we know that, okay, this one's the a standalone is because it was a sales order that was opened during the migration period. Period, and then they created an invoice. We sync it over as a standalone. It is still a two way but just that it's a two way sync with a configuration that we do not migrate historical data. No. So so now we are trying to solve that. Is is that because, okay, now for fixed group's case, syncing old day historical data is last the the the the least preferred choice because we cannot charge a sure and whatnot. But

### You (2026-05-15T09:51:18.161Z)

The point I'm saying is that we want to propose to charge a truck.

### Guest (2026-05-15T09:51:20.501Z)

so

### You (2026-05-15T09:51:22.741Z)

So

### Guest (2026-05-15T09:51:22.871Z)

that that is one route.

### You (2026-05-15T09:51:26.151Z)

also, when I when I go to the the outcome of this, right,

### Guest (2026-05-15T09:51:27.541Z)

Right? That that

### You (2026-05-15T09:51:29.891Z)

is two. One is three method. Three method is we just get get them to provide those files, and then we do a why we are deliberating about this is that this is basically how what we so everyone here is also about about processor. So option a is that they provide a stand trial of the customer sending. Once they provide that, we will But this is the snapshot of today at this point today. So then in my arm, we will show the credit and whatever if they create any invoices outside of Maya, those who are not But shouldn't when after we do this first step sorting, we should already start the syncing I mean, the sales folder or invoice that is created should also sync, then the the credit data will keep on up and down already. Date, I think the requirement will be we are starting to do two ways of this document also already or sales invoice. All the documents. All the documents. Yeah. To be too wasting rate. Yeah. Okay. This one is definitely deviating from our current our our previous spec mark. Because we expect them to move to Maya fully, which I don't think that is something That is, yeah, they will still fall back if something work, will fall back once. They still fall back to the system. So then because we are not pulling all their so that means on our two way sink, we need the hot coated cut off bean, which is that date that we consolidate all the historical invoice and do less than So inside the two way sync, the configuration will be the cut off sync name. Okay. That is today forward. So anything before this, we will not touch. Yep. We So for all the documents, So so that date forward, everything is doing sync. You will keep on syncing already, no? I tell what's And this will not be an issue. But then what we can say is that So with this approach, what Maya cannot do is when the sales user or whoever whichever user uses Maya to talk to to query or reference documents before this date, those data will not be in Austin. Before the snapshot day. Correct? So this one is after walking. So this will be the

### Guest (2026-05-15T09:54:23.871Z)

Yep. Yep.

### You (2026-05-15T09:54:25.411Z)

requirements that you're talking now. Basically, okay, I got a clear. Okay. So

### Guest (2026-05-15T09:54:26.191Z)

Yep. And and it's not just just just the I even the retainer would need to revise also.

### You (2026-05-15T09:54:52.711Z)

After we do it, do

### Guest (2026-05-15T09:54:53.151Z)

Oh, yeah. Sure. Oh, yeah. It's also on their side. So the one is the

### You (2026-05-15T09:54:58.331Z)

So it's not that's why I was saying that, hey. If you do this out of the box, for any I mean, yeah, we will do the work, but, like, if we do this once for autocom, all of our autocom, this thing can be switched on and off. Just for us to coding that kind of thing. Yep. So then it's just a

### Guest (2026-05-15T09:55:18.231Z)

Yeah.

### You (2026-05-15T09:55:19.281Z)

it's a super... Like, it's like a big upsell. For zero work. But yes, the first time we incur our work. But I think even even if we wanna do the data migration stuff, I wouldn't expect them to want the previous five, seven years data. They might only, like, want the maybe one I don't know. Two years. Yeah. One or two years or maybe this year start with their data. Because even the upside, they keep on also adding new sheet in their auto account adding some new feature where the phone document even support one. Okay. So Yeah. There are some some clients. This one depends on industry. Mhmm. So why I say depends on industry is because let's say for GS yeah, for CYCC, sometimes you climb a this one applying with that's why most of time seven years.

### Guest (2026-05-15T09:56:30.191Z)

No. That is you do a taxation compliant

### You (2026-05-15T09:56:31.641Z)

Yeah.

### Guest (2026-05-15T09:57:04.601Z)

Because, I mean, if if, let's say, they are so adamant that they can't, like, they need the credit limit or not. This, I think, is a a prerequisite. Yeah.

### You (2026-05-15T09:57:29.581Z)

Ultimax. No ERD. Right? Ultimax. Okay. So anything else? The lower one is the The So since we are they are for farm shop and historical stock ledger. We do a stock reconciliation to reset all the so because the source of fuel for stock is their system, so that in the two way policy for stock measure, every start day, there needs to be a stock refund between the two systems. So it so that means, like, let's say, the stop operation am every day. That means at 7AM of the day, Maya Some of our clients may operate any powers, some factories operate in So I think soft recon policy because sometimes there are different policies and this one is across all different So we need to scope this out. So that's why we're meeting Not sync before cup of tea. The snapshot It's more on the chatbot side. They're expecting Malay and Chinese reply also, that one we got consult update. Right now it's not very doable.

### Guest (2026-05-15T10:02:16.291Z)

Think that we could can be solved with the user context that is upcoming. Right? User contact. Good to hear. Yeah. The user context that Amiro is planning out. Yeah. The about the ticket. We add that to the user context? Yeah. The preference. User preference. Yeah. So user preference is it it should not be in the user context, and the user context is for different purpose Oh, okay. Was planning to do on the just the chatbot one, but if be added there, then oh, okay. Okay. Yeah. Yeah. I was planning to store in Chain instead instead of our DB. Yeah. No. No. No. No. No. Sorry in the DB on on the user preference, bro. Don't don't don't rely on chatbot. Hey, what? Chatbot no. Chatbot, if, like, if, like, say, got got got problem, you go and delete that contact when you create a then you create in the default language again.

### You (2026-05-15T10:03:51.291Z)

La

### Guest (2026-05-15T10:03:51.401Z)

Then you got two places to maintain overall. Okay. But, right, even the user nevermind, we just go instead instead. Right now, we are not building any more tables that because we are more reliant on PRP. Is that good? We just stone this this

### You (2026-05-15T10:04:25.731Z)

Ok.

### Guest (2026-05-15T10:04:30.071Z)

Well, we can resolve the ticket then for that one. But

### You (2026-05-15T10:04:30.571Z)

Okay. A bit hot?

### Guest (2026-05-15T10:04:34.291Z)

but but but for Chinese, right, it should be our scope, you know, bro. Ah, yeah. Right. She's very won't I I think we should not do the Chinese one. The one is too much of a to be honest.

### You (2026-05-15T10:04:50.451Z)

I mean, this one is just good to have for now. I think no need to prioritize so much this one.

### Guest (2026-05-15T10:05:05.511Z)

Is being is having this kind of issue previously, I think. No. But but is a bit different app. Even if you use, like, a bit of a formal or formal medicine, it doesn't matter, but it's the the terminology But it is one of the reasons why I don't want to add another language is because it will and she'll it will actually open another can of worms. Because let's say they key in in in, like, what I call that, like, Cantonese or some some terms in that that that that does not understand. Right? That's when

### You (2026-05-15T10:05:47.631Z)

Okay. Just wanna let's do it like this.

### Guest (2026-05-15T10:05:48.461Z)

it will put stress on your side. Ah,

### You (2026-05-15T10:05:52.331Z)

English and Malay out of the box, Mandarin, we can receive the but it won't reply to Mandarin.

### Guest (2026-05-15T10:05:58.921Z)

Yeah.

### You (2026-05-15T10:05:59.881Z)

It can receive the Mandarin message, but it will not reply Mandarin. So response wise, it's only English and relay. The Mandarin run is, you know, the Jabodin got capacity to

### Guest (2026-05-15T10:06:15.531Z)

E se se if out of the box, we wanna support in plumbing Mandarin. Right? Would it have any issues like when searching for anti pizza? Like Yeah. Like, items or customer or searching. When the alarm is trying to translate and pass to our tools to call the API and search it,

### You (2026-05-15T10:06:36.831Z)

this one definitely is a risk.

### Guest (2026-05-15T10:06:38.281Z)

Yeah.

### You (2026-05-15T10:06:40.061Z)

But it's unknown for now. So this one, we just say we realize, we we heavily rely on the model's capability to do it, but it's not a we just say we can do it, but we just have a copy of that and this the accuracy of this thing is simply relying on on the motor Yeah. For must be accurate even we only received the CNSN, right? Like what said, the all the different kind of dialect or something, the LMM also doesn't I may not understand that it can try to Yeah. It it has that knowledge, but, yes, sometimes it can be wrong. But I think

### Guest (2026-05-15T10:07:34.721Z)

I think I want no issue No. No. No. No. If if if we want to do less accept it. At the first. If, let's say, it takes because we have to preempt them now. The main language is English. Okay? The official language. But the thing is that if it's, like, Mandarin or Malay that we don't understand that that that that is out of The RM capability. The the one is not under that means we should not be, like, it's it's not to say about. You I mean, so the most in

### You (2026-05-15T10:08:06.851Z)

Yeah. Yeah. Thank you. Yeah.

### Guest (2026-05-15T10:08:10.111Z)

yeah. The most important thing is that we need to be able to support ambiguity. That means if the classifier does not

### You (2026-05-15T10:08:16.961Z)

Yeah.

### Guest (2026-05-15T10:08:18.131Z)

able to classify, we should ask.

### You (2026-05-15T10:08:19.621Z)

Jack also, the main line is, like, if you can

### Guest (2026-05-15T10:08:20.091Z)

Then it solves more problem already. Yeah.

### You (2026-05-15T10:08:24.261Z)

meet the of the ultimate x order, think this language where that's confused, don't understand and all that, wouldn't be so much of an issue. Hello?

### Guest (2026-05-15T10:08:39.091Z)

Yeah. But this one, right, I think we should achieve just if

### You (2026-05-15T10:08:43.131Z)

Oh, no.

### Guest (2026-05-15T10:08:44.061Z)

if possible, it should not be a for for No.

### You (2026-05-15T10:08:48.491Z)

Oh,

### Guest (2026-05-15T10:08:49.561Z)

Closing the guys' because he's not in the scope as well.

### You (2026-05-15T10:08:50.951Z)

that I I mean, it's not written in a school, but it's a default expectation of the client So English will lay Chinese intake, whereas English Malay response, yes, because we have major Chinese response, can try, but for now, we will just say it's not supported at the moment and untested currently. It does not respond in Mandarin. Yeah. You know what I mean? So so so you can take intake in many languages. But you always respond in English only. Okay? So that the preference of English or Malay, can be the user preference Okay.

### Guest (2026-05-15T10:09:59.701Z)

Okay. So in a nutshell, right, achieve replying and managing is not a problem. Because in this kind of use case is it won't be as strict as because use case for Maya, the challenge is always the only the part, actually. So just need to make sure that we build a good ambiguity detector. The the one will be very important.

### You (2026-05-15T10:10:25.331Z)

Yeah. So the spec on the ultimate x one, the the chain command and all that, if we can do that, I think it will go across languages.

### Guest (2026-05-15T10:10:34.021Z)

Yeah.

### You (2026-05-15T10:10:37.181Z)

Brian, and I think so. Less follow-up on Monday as well, that's Okay. Let's quickly run through chapel seven, much left. Right? I mean, test more on this part. Okay. Then the showing their product code and item code, check with the Okay. Then description because sometimes when they using Chatbot to create all those models, they say we want to see the code SKU up. They they understand SKU more than the name. It says actually on the chatbot side, the ERPNext punya primary key of item not so relevant to service, then the item one two three and all this used always service the item code, customer code, and customer name. Because I will always I Yeah. So then there will be some cases where this customer has a different external ID. So let's say, in our case, there's no idea for an example where they create this item in my app. They call this thing g seven. But when this G7 push to order account, who knows the ideal auto generating gives some other thing call, let's say G eight. Then we also like I say to refer reference by the external ID. So that's the that's the that's the main part about what I want.

### Guest (2026-05-15T10:12:21.871Z)

Aló, aló, aló. Oh, yeah. Yeah. No now normally we show the the item one. We show the actual SKU one.

### You (2026-05-15T10:12:30.391Z)

I skinny you.

### Guest (2026-05-15T10:12:33.101Z)

The external one,

### You (2026-05-15T10:12:36.281Z)

This one, Macham, is just on the last time, I think when they are testing

### Guest (2026-05-15T10:12:36.951Z)

got them. We normally show that.

### You (2026-05-15T10:12:40.051Z)

some sales order, not showing is it? Yep, yep.

### Guest (2026-05-15T10:12:42.931Z)

That one is just a

### You (2026-05-15T10:12:44.461Z)

Yep,

### Guest (2026-05-15T10:12:46.701Z)

prompt change, you need. We got at a specific prompt to the instance.

### You (2026-05-15T10:12:48.921Z)

okay.

### Guest (2026-05-15T10:12:51.341Z)

Yeah. Because last time got feedback where don't show the idea. Yeah. Yeah. Yeah.

### You (2026-05-15T10:13:00.631Z)

Then why why are we creating a specific prompt for client

### Guest (2026-05-15T10:13:08.451Z)

No. No. Because last time, I remember I recall for Maya. Was a feedback. That we shouldn't show the ID of the item. No. No. SKU also should show feedback was the user is layman. Show the SKU. Or the item code. No. These are not client to client. This one is base Maya, the requirement we got feedback.

### You (2026-05-15T10:13:50.741Z)

the most important If you don't show SKU, it brings more happily ready when it brings Yeah. But the the... This kind of maybe a They are I think I think you guys already resolved it. Right?

### Guest (2026-05-15T10:14:06.151Z)

Yeah. But so meaning the preference now is show the SQL. Normally, always show SQL up. Right? Wow. Okay. Okay. Okay. Steady. Steady. Está bien, bien.

### You (2026-05-15T10:14:20.871Z)

Brand needs to be part of that also. Because sometimes, like, like I say, I show this thing called box. But the brand matters. Right now we're not showing brand. So the formatted string should be code followed by brand, followed by name of, one, two option, code brand name, or code beam brand? Brands Detail it can be a theme or something of that. Right, it can be Apple, right? I say phone. Right? Let's just take XMD. This car called XMD. That has the car in XMD. So the brand is not there at MG. Educational or like super professional level

### Guest (2026-05-15T10:16:02.061Z)

We have a chatbot who can read Mandarin. I think right now, the chatbot team, all of them banana.

### You (2026-05-15T10:16:11.641Z)

it will follow professional management. I try it like I did the same for Historical pricing expectation in interface. Oh, yeah. This is, like, to show show up. More, but we also need to think of how they want to show up for the this one is really surprising. It's recently the stuff that we do for them, right? Right. They want to know like Discount. Okay. For example, wanna create a sales order for customer a, item a, Last time I already give them 3% discount. Right? There, I really take them. Percent back here. Current standard price, how many 33% from physical window pricing and also the net price after this They want a last discount last discount for the idol for the customer. Is it scope or is that not? That's one of our lady API? Yeah. So it's more on chatbot side to So basically place a business serviceable manner. Yeah. Yeah. This one is It's more in the design, how you display, you know. Yeah.

### Guest (2026-05-15T10:17:48.611Z)

Dharava, can we sing, maybe when you're free, we sing about the item one? Because I don't have item level discount on that one should be just from level one. Yeah. Because we already show in the two, but the alarm just don't wanna service. So that one should just be in the prompt, but the one we we mentioned just now, can we just quick later?

### You (2026-05-15T10:18:13.471Z)

Yeah. Okay. This one, I need to check the tea house

### Guest (2026-05-15T10:18:15.251Z)

Yeah.

### You (2026-05-15T10:18:17.871Z)

even we implement in the back end discount because they seems to be I mean, they the because Sasai will scratch the discount percentage on item level right everything not doing on item level one But it seems to be more and more client must submit this discount out on this stuff. Sorry now. Okay. So in order to do item analysis now, we just need to use existing column called price listing. That's all. This thing is already there here. Okay? So previously, what we are doing is the user sent item a. Okay? Say that this thing is 20. Pieces. So that now in our front end or Japan, you can compare prices, right? So what we do now is that let's say you can set the price 98. So what they are passing to the API is that take this one here again. Pass here. This is unknown existent Okay. So it just passed 9 to the unit price. Okay? So this is something to change. With this new column in ready, what's gonna happen is that the prices will repeat. Let's say 9, note this down, I pass both sides. Okay. Okay. So this one, discount is $0.01. No. So discount this discount percent is a derived polymer. Yep. Right? Because how to complain this? This nine minus nine over nine times 100%. Yep. Right? So let's say how do affect the discount? So let's say it gives 20% discount to this client. Okay. To this item. To this item for this. So in the front end, because this discount problem is derived. So on the front end, there's two ways to do it. To percent discount. One is they can compute, use plain, compute, type 7.2, Type 7.2. This one don't change. Okay. This one always be nice. Always be nice. Based on what price is the choose up. Right? Gonna be always gonna be 9 if they choose max or choose mean or choose whatever fix the price is there. You should be on the center price, right? So then over here when they pick the price is benchmark against the standard price what was the discount. And so unless it customer specific pricing inspire again, so then they got a 40 something percent discount. Right? So when I put 7.2 here on the front end event, when this 7.2, they all focus, it will continue 20%. Some some somehow So another way is that because this one here is a female so man they click it No, I say, okay, do 20, do one twenty, do one twenty.

### Guest (2026-05-15T10:22:18.351Z)

But but but but, bro, wait on. We wanna If, let's say, they update the unit price, then the historical one, how?

### You (2026-05-15T10:22:27.131Z)

Because you want to use the step up

### Guest (2026-05-15T10:22:28.231Z)

Then you won't know that the historical one was 20% already.

### You (2026-05-15T10:22:31.771Z)

percent on next sales order. Okay. So that one is different. Yeah. Okay. So so let's say now... Okay, so now your case is scenario, so let's say this s o one. Right? Mhmm. So over here, when I see that this one, k. So let's say this case, this SKU market now you're saying market price change as simulate fixture case. Now market price of this freaking thing is already 11 ringgit. So then in somehow they update their item standard prices these things become elevated. So in item historical pricing, when they see back the previous order, they will see this one. Okay, item A, ISO 20 at eight point one ten percent nine. They will be still see this 10% line. Right? So then over here, when they take this thing, normally, we can't elevate any side. So then k, I'll type 10% off. Then what happened? Here we come. 9.9. Alright. Yep. The yeah. The point is I have to shoot that has two parts to this discount. Another one is in the customer x item, customer item table. So here it says, this customer, customer customer a lang s k u a this UO app is customer specific pricing is aggregate. For example. So then I can ask you the UI customer specific discount is 10%. If you do example lah here, k? So in this case, because over here when they add item b, what happens is, let's say item B market price is 15 lah. Right? So over here when they come 15 ringgit, they see anything. Because there's no previous order for 15 ringgit, right? But when they click this price list, what they will see? They will see the customers' Customer specific price because in this case, from this customer, item table for SKUP is 10%. So in 10%, because over here, there needs to be an a p the API that's computing this customer price will say that the price is 13.5 at 10%. For customer specific price. This is the first thing they see on the list. And after that, you will see the enterprise the max price, the max price, all that other prices the water. Okay? So this part is the second part. To show that for this customer, I logged in and they must get 10% discount. So then when user click the sync pop, click, then the sync become 13.5, 10%. So everything here is that, just that point five. There is some same experience. Why I use the front end to illustrate this is because this is the user actions already. He's just on the conversation side. The logic needs to be similar. Because this is visual, easy to see. Cannot write chat. Because I said absolute right? So let's say 50 ringgit, I'll give you five the decimal plate. Four one. I'm asking that the all these things. Percentage always to less complexes. Is the machine standard? Okay. 같아시에서도 index smug basis. And I think one more thing I think I forgot the lab box is there. They want something that they can set some I know this one is previously discussed as well as your what? Below the minimum price on that item. Okay. This one now, go one Okay. So this now, if you go below go the minimum go through the Oh, there's a feature called item price movement. By the way, it's something new They they say that in in the sales document normally, if they somehow if this unit price profit guardrails doesn't meet just meet the requirement, So the cafe later one, they have they updated their calculator policy and and record. This will be your change request, right? That is not a main change request. So, gather the samples from them and then we will put them So And then we'll start with the and Two two two the the one that we have right now is the to date with the apps. Up to date? Yeah. They also let me say, updated all five So This is Bob. We're not doing manufacturing. Right? But this one is, it's just a composition can calculate stock. Ask them, do they want to cancel on this one? Do they want to customize this feature? Ask them if they want to customize this feature. Or document all the transformations. That means the ratio plus is the raw material that is needed. And we will pull that step. In order to customize these things specifically for you, there will be a charge. FOC. So, in Amtukanda, they have seat called, it is a before seat.

### Guest (2026-05-15T10:32:36.531Z)

No. But but but that's one issue if the item has main price one, then there will be an issue. Okay.

### You (2026-05-15T10:32:55.141Z)

Because right, they can do like, okay 100 is the is the quantity that they sell, another one is 10 FOC, 10 quantity that they sell. So actual point after this is we need a comprehensive meeting summary of action points. Then especially all the ones need to give me a full list we are going to do is what we are gonna do, what we are not gonna do, out of scope. Is basically what feedback you have asked now. So prepare the dog and then we dish on this Okay. So

