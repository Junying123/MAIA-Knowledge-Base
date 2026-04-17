---
granola_id: a0a68382-5e09-4d98-9dfb-375068a53146
title: Mindhive  Daily Standup - Transcript
type: transcript
created: 2026-04-17T01:43:18.751Z
updated: 2026-04-17T02:36:11.970Z
attendees: 
  - afiqaqill261203@gmail.com
  - ghostsketon@gmail.com
  - jermaine@mindhive.asia
  - johnson@mindhive.asia
  - Mindhive Calendar
  - brendan@mindhive.asia
  - ivan@mindhive.asia
  - leecheaulin@gmail.com
  - abdulhaiqal119@gmail.com
  - anis1901@gmail.com
  - azibiqbal01@gmail.com
  - bushramualla0@gmail.com
  - wansin.mh@gmail.com
  - lim.junyan@gmail.com
---

# Transcript for: Mindhive  Daily Standup

### You (2026-04-17T01:45:48.577Z)

Let's start with. Whole surface pendulum might be dead. So Busha later I will brief you the BS of the area in the BSO PDF.

### Guest (2026-04-17T01:46:07.297Z)

Okay. Okay. Sure.

### You (2026-04-17T01:46:10.977Z)

So for the C1C3 I think long time ago I already prepared a scenario. But I want to make sure all the scenario can be used as a test cases to test the C1C3. Any updates for the C1C3 and also the tagging.

### Guest (2026-04-17T01:46:37.297Z)

Hacking is currently on hold because I'm currently prioritizing. The feedback and discussion from yesterday. C1C3 showcase.

### You (2026-04-17T01:46:50.257Z)

And also I just complete the CPO testing so most of the issue is shipping address is not mapping. Address not mapping properly the customer and then some kind of vendor contact person. Delivery day is wrong. But it's return empty field empty or failure not there means inside I check the data gone. Do we need to run through a news I miss all the issue every deal. Okay just file to the. What you call this do we have the CPO to the group. Not just share it to actually just have a session it's called a quick one together we are. Yeah so for next one schedule to continue the council then fix. A new how's the historical pricing?

### Guest (2026-04-17T01:48:31.937Z)

Sometime. Today. This is one of the office.

### You (2026-04-17T01:48:37.377Z)

Okay. Can we have a brief for the. To finalize the calculator still. Yeah. And then as if product invoice can you share your your update? Because I think you face some issue right.

### Guest (2026-04-17T01:49:06.977Z)

Can you repeat again?

### You (2026-04-17T01:49:08.977Z)

I think just now you share some issue. From the fixed guru side one. Right.

### Guest (2026-04-17T01:49:15.697Z)

Oh, yeah, yeah. Because. I log into the physical RDP and then, like, someone trying to log in. But then the API is down. So I just need to ask them to let me in for maybe just 10 minutes. Or.

### You (2026-04-17T01:49:34.097Z)

Into access during lunchtime or after work hours only because you are in the production one way so that should limit.

### Guest (2026-04-17T01:49:38.657Z)

Yeah.

### You (2026-04-17T01:49:41.457Z)

That but this one actually we should communicate to them.

### Guest (2026-04-17T01:49:45.937Z)

Okay. I just asked them in a group.

### You (2026-04-17T01:49:48.977Z)

My question is right when we do this integration do we need a specific seed so that outside you know push it at any point of time. If that's like the session limit right will this be affected you understand what.

### Guest (2026-04-17T01:50:08.657Z)

So let's see what you mean by latency.

### You (2026-04-17T01:50:10.577Z)

No no no it's a seat it's a it's a limit because like they are current instance there's only 20 let's say 20 seats but then when we basically Maya push when we connect to that instance. Is our presence consider another seed. Get what I mean why they have a restriction on you can only access during lunch hour or during after working hours it's because there's a limited session limit for their instance.

### Guest (2026-04-17T01:50:45.137Z)

That's why. Because if they are, this one is like a Windows instance one. So it's like one people log in and another people need to go out already. Yeah.

### You (2026-04-17T01:50:55.137Z)

So this is how we need to test it and need to communicate if we need one seat.

### Guest (2026-04-17T01:50:56.017Z)

It's not. Yeah. All another extra account to, like, can log into them.

### You (2026-04-17T01:51:02.017Z)

Yeah correct because we will be you know using it during working hours but right.

### Guest (2026-04-17T01:51:04.737Z)

All right.

### You (2026-04-17T01:51:08.337Z)

So just let's just check this.

### Guest (2026-04-17T01:51:12.177Z)

Okay. Then they use their own account and you use your own one.

### You (2026-04-17T01:51:24.177Z)

Automatic point. Okay. Okay continue. Hello. Calculator. No ID testing we are currently.

### Guest (2026-04-17T01:52:05.617Z)

Sorry.

### You (2026-04-17T01:52:08.737Z)

What.

### Guest (2026-04-17T01:52:10.497Z)

I cannot hear where you're stopping.

### You (2026-04-17T01:52:14.577Z)

I mean the the output we have from Maya with the current calculator they use is quite different slightly different the yeah I think this one discussed with Jermaine. Yeah so why not we having when I use having the discussion with Jermaine. Later? You said the time. Okay. Here. Next. So for ultimax I've already pass it back to them to test but there's for the dnpdf that one I think it's still not deployed to their instance yet. Yeah I think the one that Busha was having issue to deploy to death to death because she said it's reflected on her end but when she deployed to death it's not there when I tried on my side.

### Guest (2026-04-17T01:53:17.057Z)

But the one I solved already and deploy to, I think yesterday also helped me deploy to all instance already. You guys will try still cannot.

### You (2026-04-17T01:53:25.457Z)

I think I'll check again later and let you know what's changing.

### Guest (2026-04-17T01:53:29.217Z)

Okay. Okay.

### You (2026-04-17T01:53:33.777Z)

I already created the brief in the codex for the warehouse to fetch item based on the item group one I think I'll push and have you to just have a look at it a house based on item group warehouse because right now the stock recall fetching is like for the whole warehouse the requester is like they want to sort by the item groups. Sorted by the item groups. Yeah like this like you fetch all screw items all plate items so it's like that. False screw items all items. Industry basically.

### Guest (2026-04-17T01:54:18.897Z)

This one isn't it, like, metal, like how they store the stock instead of, like, when we export the stock entry or anything, we help them sort according that one. That if they want all the screws in one, one Warehouse or one section, then they just put all the stuff in that section. Then when they export. The stock entry, that is that already. Not many.

### You (2026-04-17T01:54:45.937Z)

What do you mean by put all in one section?

### Guest (2026-04-17T01:54:49.137Z)

I mean, right now.

### You (2026-04-17T01:54:49.857Z)

Now. When they use the stock record right. It's just an add-on feature to pull by the location but if they are doing it in a bit of a different way which is by item group which is not a native. Like it's not natural to fetch like that. When you do stock count because item group can be across many locations. So you see it doesn't conform to normal warehouse stop car practice so what if it's like stopped by warehouse and then inside this warehouse for these item groups? By this warehouse for all items inside this warehouse you sort for all the school items that's found in this warehouse. It's not it doesn't show for multiple warehouses it shows for this warehouse all of the school items. There. All of the school items. Because right now we are not trying to solve their stock reconciliation problem you know we are focusing on solving their sales problem so this particular feature is very minimal value as of now. So how we need to deal with that is we say sure we understand now your procedures perhaps the existing out of the box stock economy may not be tailored but that's not really the core focus of Maya which is actually the solve for the sales selling site so this stock recon part of it is very. Like it's for you to do your part to update the stock in the system so if you have some way that you manually already do it if you can transform it into our CSV format and give it to us because this is not a feature that's in scope or explicitly written in I sort of like put this up so that's how we evaluate and we gauge whether to do this thing so we'll try to push back on this thing and communicate it in that way let's see so we need to give them a workaround so right now let's say we understand their case which is they're doing by sock group so end of the day after they do their stock account what is the document that they have that what we can do is we have looked at that document and tell them hey so this is how you transform it or how this is how you take this thing and chuck it into buyer or what changes you can make to this document so that the system can upload my app. So that's I don't know if you know to build a feature that is just purely for that. To them. Okay. One more thing is that I think when we implemented the two templates for them and self A1 we didn't add like the draft automatic so it should be added there right if the document is still in draft it should have like the graph not official watermark. Okay do you have these things right now make sure it's a list and then. Track and assign them give proper briefs to who needs to work on it and get an SLA on when that will be delivered because sometimes certain tickets take some time right so for example you have a few list of things right and you know who needs to deliver those things to you make sure you have those conversations for example let's say the draft water bank one you need to talk to us right then get a confirmation to follow up on it so this kind of individual micro stuff right all put it into that project last time that we have so we don't lose sight of it because now we have a lot of these small small stuff that sometimes side off so that's why what I mean by use that as a workspace is to track all these tiny stuff also. Okay so in those your brief Chuck it inside there so because when you click it open that's a description right of if you just throw it there put a link or anything assign the owners assign the deadlines from that so if you make that your workspace really every Friday and Monday okay Friday usually we need to do a timeline for me tell what we'll do is so that's why I want to make sure my stuff is all there so this is the stuff that we do before Monday so Monday is like you know you don't need to spend like two three hours getting grilled on the timeline in the product six. Yeah yeah okay. Okay so anything else no matter okay. CC determine how did those go the next one we need a discussion with you later because they requested for like their quotation they need to be more flexible. Yeah I'll let you know later. And the SCC1 need to create like the feature. Request right. As SCC1. Did we send them all the requirements form many. All the tech specs all these AWS account billing everything? Then after that ask them to buy WhatsApp number set up all these things that a lot of ding dong asked them to do now. Secondly is they ask us to code for a five-year data migration. What to do then so collecting the documents is one another thing is we need to ask them to provide the estimate data volume of you know how many customers they write how many items how many orders how many invoice so basically this one you just tell them we need these numbers right so we need samples of all these documents. Like you know the touch points the users customers contacts. Orders invoices could. Delivery notes all these things the list ask them to estimate roughly for your five years how much data is there? And then secondly we need samples of all this also in terms of the data export so we can see the data shape. So this is a separate one special add-on code for five year data migration into. My. Elta. Customization on their site not much right just work order and all that. So IT vendor meeting. Got a stock allocation one it vendor meeting. So why 21 week. So make like essentially all these things make sure you communicate today and then make sure all these things are in the timeline also. Okay so right now what on my side we are working on is actually we are doing. Next week onwards we will start practicing a new onboarding SOP which is three days. In three days the customer instance set up and you can be ready. So like all these things that I just mentioned to you right those things even before we go to requirements Gathering meeting is done right here. Now you see it's one week later after that meeting only we are starting to do too long. Right so these things move up front so especially on the others as well. In that account so yeah next week is something we will have a training session on. This. Got everything down. So the SEC got the Mac got who else. GDX. And GDX next week next Tuesday then. What is this M gas steel demo the one I set up just got some dummy guitar same exactly like the thing I give you follow yeah. Give Jermaine the details yes so feedback to the client. Any other client job. Yesterday we say we are tested a bit because let's say there was high card it front batting this all this so three things first thing first is the credit card reasons where you push it production second one is we have an issue where they can't cancel the order they want to really fix it up because it's a time one cancel order but it's tied to CPU the second can cancel so that will fix really second one is the third one sorry that one is the Java attachment so previously they mentioned that there's no way for them to track when they reveal a success video they want to see the proof of the video so there's no way currently in MVP don't have a place to buy to see so we implemented high transferment what is the view image in the delivery notes itself. That's already done with this so we push tested approach okay not just a side note for the cancel order on right so we are tested right we found an issue where let's say order is created and invoice is submitted already but the DN is still in draft so even though we cancel right the DN still remains in drum. Okay yeah so this one might be an issue why because in this perspective of logistics right they say that salesperson is already canceled again. They can there will be chances when let's say the salesperson forgot to tell the inform the logistic person that this already cancelled here and they will pack everything and then you send off so there's a risk of that so yeah so this one here it's okay with my I will communicate to them really saying that this will issue. That how we're doing right now is we have scheduled releases for palm shop every time but they're trying make sure to try this is really important on my end to cross check this thing okay this cancellation one because it's something that. We ending in terms of our development what is this right now current testing we don't really test those cancellation flows right so I think yeah I think that will be some blind spots over there. No because there are a few another account we use this wall function and so on so it's pack it but I need to have an obsession with them and not them I didn't plan out first before I even tell them when they can release some okay so that's for B2B W to C site there. Because right right now all what you can do right now you just test the B2C chatbot but let's see I think I need time to test so if you have any like anyone for free free time you just help me as a UCH also any more feedback from them seems very quiet yeah so because right now they're not testing but I can encourage them to test again because now we are waiting on the code side to finish up the website and then we'll finish up the payment methods part so that you can release it to the user. So I think what especially in like this UAT phase right in that group maybe just have like a daily check-in kind of thing just maybe a simple presentation or whatever so that you know maybe they did test or what or they forgot to test it like oh. You know MindHive doing something let's just stop testing which is not. A thing that we want so you want to keep them warm especially on the UAD phase regardless also provide UAD right just make sure they give a feedback on something. Because if those groups are quiet. Right shit will break on later confirm. That means they are not testing when they are supposed to test. I mean I thought maybe when you brief the UAT okay they say next day they test this one full late it doesn't after they go back they come back or business as usual they need some kind of reminder to continue the testing one. Especially it's extended period of time. So this one right actually the UAT checklist I think that time you got built a very big one right can you send that to me? The full UAT checklist for maya you have right that document. Okay so with this right next time the way we are going to do UAD is also going to change really in this 3D onboarding. Basically we'll just do an on-site half dating with them UAD everything in that one session it's close. All the stuff. So this extended UAD you see it's clearly not working people have a short attention span. So we will have a more intensive kind of UAD proper session. And then close it faster because like even all those speed climb they visit feedback until really correct so what I'm going to do with that UAT checklist is yeah so it's actually that's going to be a bit of change on how we deal with clients in this working on it something next week that you all will know and also start doing and it will make your life easier. Learning all this thing down here and there every morning yeah okay. So yes I uploaded 30 PE CPO attraction is actually is working well but the only downside is right it's not. It maps correctly but it's not like automatically. Filling up everything this this case happens like multiple times is like what we discussed your contact also failure shipping fail because there are gaps there in the mapping logic that's that's one thing but notice out of the D only like two to three actually maps to the wrong one it maps to tooling itself. Yeah the actual. This one and plastic I think that needs to be a fallback so if let's say the no if the buyer extracts the vendor swap the fields oh I need to or because I already know dolo link is the company so if you detect that then you do a swap in this case only happened two out of 30 times two to three out of the way it got small. About seven percent okay now. About this one if yeah we know the context we can help them solve yeah so this one is. Smartness but so far right now I check AD right there's no like other than the tooling one there's no mapping the wrong customers okay nice everything is mapped accordingly I like with Gareth product one as well is a shipping address all these things right it's stuff that I mean like based on our discussion is yeah but expected this one the shipping address do you check inside their database got something to map. Okay if data if data problem one fact it first because there needs to be a way to auto create also like after everything if you map you realize that fun got no data auto create. Automatically on the back end side so that's part of mapping also so I think what we need. Probably today I think you are asking yourself to help on this right yeah so let's do a run through on the mapping logic for the rest as well. You can do it first yeah with him then after I think 11 something we have a review yeah. Oh you're gonna seem to send it in draw out the flow then honey we review if you want to work on other things yeah. So this will be the solution your Amazon just just to cross check to see what's the mapping logic what's the current way that we are doing mapping because we want to do an assessment first yeah okay. Today for the base Maya I want to ask Eric to touch today because everything seems fine I'll just inform him like this one here we are perfect this part here but so far he has attested the other parts so I can push what every core already and then this one here can upload air tract customers everything should be microbial based my. PO issued it remove the time. Stamp 9 a.m. No need. I think these are affected don't have one. Yeah. Just quickly yeah this one just an object instead of update time just very quick inform them yeah on your bank and payload also make sure it's a date not a date time. Okay sometimes you return date time so you could be done. Small thing but just ignore also. Okay. Yeah so these are just not testing the new Angela okay and then. I want to get some updates for the arap side the air can I start the testing today already?

### Guest (2026-04-17T02:12:59.057Z)

I need a bit of time today. For you to test. If I can pass to you.

### You (2026-04-17T02:13:04.737Z)

Sorry I can give. Every time.

### Guest (2026-04-17T02:13:12.897Z)

Oh, sorry. I need a bit of time. For you to test.

### You (2026-04-17T02:13:16.257Z)

If. You. See what's the blocker for it.

### Guest (2026-04-17T02:13:23.377Z)

But I have, like, a few other stuff on my head also. So. Yeah, I'm trying to get it done by today.

### You (2026-04-17T02:13:33.297Z)

S like talking about details page.

### Guest (2026-04-17T02:13:33.617Z)

So. Yeah, only to take this.

### You (2026-04-17T02:13:37.217Z)

The dealer.

### Guest (2026-04-17T02:13:39.057Z)

And also the AP UI. Also.

### You (2026-04-17T02:13:42.337Z)

Do you want to match the OSID.

### Guest (2026-04-17T02:13:46.417Z)

Mentioned as well.

### You (2026-04-17T02:13:47.697Z)

Okay okay. Then it's okay then today I'll just just direct know that our schedule a meeting with them I mean we bury on the next Tuesday to breathe if the game can fit that time. Hello. I think yeah so API right now is we are still currently on track so actually the goal is by next Tuesday we hand over to Eric to test so we still have Abi alone time. For the AR by AP side. Are we going to do international case device for it let's do it today quick one. Just to make sure we need front end to map so that it can show oil there's nothing.

### Guest (2026-04-17T02:14:41.057Z)

Can we do next Monday? Okay.

### You (2026-04-17T02:14:46.817Z)

Let's do it that. Need to do later.

### Guest (2026-04-17T02:14:55.617Z)

Here. Sorry.

### You (2026-04-17T02:14:57.697Z)

Yeah.

### Guest (2026-04-17T02:15:05.297Z)

So you better get it. Sorry.

### You (2026-04-17T02:15:07.217Z)

Showcase on Monday for this.

### Guest (2026-04-17T02:15:09.057Z)

Okay.

### You (2026-04-17T02:15:12.737Z)

Okay so that's all for the gap so Mackerson they're still on the testing period that's it adjusted in internet off with no feedback but again what you said this now I'll send reminder also being my nickel I already drafted out the kind of the draft proposal. Yeah but it's not how you guys see it down in the groove and see Partner group. And also let's just have a quick time to run through today. Because I hope Jermaine's place okay okay. One thing we think we missed out is therefore the timelines for the timeline forming medical I think that one we can send later on just let me submit anything. End of me and of me. Get food. Estimate timeline Target go live date is on end of May because of the required customization which is for the quotation one. But what we need to check with them is. That can they use com I am without. It? Curly right now yeah let's just call my own it's we have without the quotation step first no no because quotation requires development right but cover and that's not everything else is out of box for them. So why not start familiarizing with the usage rather than like. That same time get some small feedbacks like where your thing urgency is spread I'm not way too sure. I didn't I don't know not really too sure if they advertise maya that well because for based on my discussion with him right he only we only focus on the IFQ part of me in the like very minimal stuff was mentioned I think you should check with Jermaine on this one. Because he's either he also presented his own slide right he's talking about this RFQ part specifically the one to digital correct but then post quotation or the invoice all that I'm sure they will need also. But just Chuckmaine for sir yeah so these are a few things. Probably end of May kind of thing but like if the best they can use can do it early on to step. Yeah AR so remember the issue abroad yesterday when you can't export the thing I already have the gender so who can I send it to. Work on this supposed to ask them if we just do. The best dumb is enough. Just no they want they want us to fix that export part because they want to export the data out they can't do it right now. Because even though I also did ask that they say they want it to be fixed as well that one because you got to hand over to them right they want to make sure it's not broken. Issue I think the salary died that's what I think it happened before so that is because of export in export we didn't do any what do you call this so you need to batch the query you send yeah first sorry which one did you help me to send out a message push but sh me will be back next week so if the Linda comes to your back throw her to the ground. Once that's updated. Nothing else. The favor.

### Guest (2026-04-17T02:19:19.937Z)

Okay. I stop first. So for favor. Okay. Yesterday. I work on the credit control. So what spending for me is just testing for credit check notification. And one more thing to confirm is that I mentioned to you about the log details here. Bisa URL.

### You (2026-04-17T02:19:48.177Z)

Is. Much more okay yeah sorry sorry what is it.

### Guest (2026-04-17T02:19:59.217Z)

The URL.

### You (2026-04-17T02:20:00.337Z)

Oh yeah this is sure we cannot put the precinct URL in the in the like after they ingest we want to show them the lock result of all the credit data which row go in so what I'm suggesting to he her is use to present URL to download then True dump into the log folder. It's just a function to yeah I mean but yeah later I'll just go through with you it should be it should be just use the pre-signed URL to download the your logs then put it into a lock folder then your all your.

### Guest (2026-04-17T02:20:34.417Z)

So we're gonna. We're gonna need a permission to.

### You (2026-04-17T02:20:38.177Z)

Yeah.

### Guest (2026-04-17T02:20:38.177Z)

Write a file inside the folder.

### You (2026-04-17T02:20:40.817Z)

Yeah yeah that one you just request from Afiq.

### Guest (2026-04-17T02:20:45.617Z)

Okay.

### You (2026-04-17T02:20:46.497Z)

Then you just let you dumba that then you I think you can work already no need to sign URL.

### Guest (2026-04-17T02:20:52.657Z)

I got tested before, but I think you kind of, like, receive any provision request.

### You (2026-04-17T02:20:58.977Z)

Mission request. Means.

### Guest (2026-04-17T02:21:01.377Z)

You let the chat. I mean, I. I got sent, like, permission to access.

### You (2026-04-17T02:21:06.977Z)

Expired time you need to crown to refresh the design.

### Guest (2026-04-17T02:21:12.097Z)

If there is, like, request, approval request.

### You (2026-04-17T02:21:15.457Z)

That row point to that folder. Okay.

### Guest (2026-04-17T02:21:19.537Z)

Okay, that's it for it. Yeah. Present URL. And then today, I'm gonna work on the sfdp testing. And also one thing I need the user, because yesterday you said that they want us to use. R a very special user ID. Can special enforce your.

### You (2026-04-17T02:21:44.817Z)

It's just.

### Guest (2026-04-17T02:21:49.857Z)

Okay, I'll send you again. Okay. And then one more thing is, like, I need to add one more thing. To my task list, which is the CPO. Registration. I spoke. Right?

### You (2026-04-17T02:22:12.657Z)

Why your site also need those CPO.

### Guest (2026-04-17T02:22:16.577Z)

Yes. Neither the CTO. For. Because they go into extract everything from email. Files.

### You (2026-04-17T02:22:30.657Z)

Then in those.

### Guest (2026-04-17T02:22:32.737Z)

Yeah. The CPO and then trader.

### You (2026-04-17T02:22:40.657Z)

O from. The shoe it's appeal. With CSV I think.

### Guest (2026-04-17T02:22:54.337Z)

Okay, so because right now, the thing is the logic we won't follow. What already implement because there are something that we don't need to do make changes like item, because some, for example, if the CP, if the PO is inside the Excel file. They won't. They won't have an item. They will be just like one. One row is one order.

### You (2026-04-17T02:23:23.217Z)

It's not just itself there's a format for Excel that's for B2B orders so they will only have the total order they don't have the item and the quantity at the cost so what they want us to do is based on a total create dummy SKU dummy quantity and populate. And this is just the whole transaction is one lump sum yeah but if the no for B2B1 right because it's a fixed format so it goes through CPO for that you just create order straight away yeah use the CSV that they provide create SO custom is a custom function for that one you ingest that don't go through CPO don't need to to cut the CPO function. So. So what you do is the the Excel that they buggy right each row is a PO then you just straight away use that data create the SO that they wanted so the dummy SKU whatever you use that in the application logic under the endpoint.

### Guest (2026-04-17T02:24:22.337Z)

So. So meaning, like, I need to. To read the CS file to get the PO details.

### You (2026-04-17T02:24:30.737Z)

So basically.

### Guest (2026-04-17T02:24:30.737Z)

To create my SO. Okay.

### You (2026-04-17T02:24:32.817Z)

So you have M point something like create so from B2B format paper something like that. Yeah.

### Guest (2026-04-17T02:24:39.857Z)

All right. But the. The remaining still need to use CPU. Okay.

### You (2026-04-17T02:24:47.937Z)

Like PDFs and all that just use AP Ola.

### Guest (2026-04-17T02:24:50.817Z)

All right. Okay. That's all for me.

### You (2026-04-17T02:24:58.337Z)

Any blockers.

### Guest (2026-04-17T02:24:59.457Z)

One thing. I think Data. Right. Is that.

### You (2026-04-17T02:25:03.377Z)

Yeah.

### Guest (2026-04-17T02:25:04.097Z)

I want to check. Right? For the document classification to be validated against their input table structure. Because. Because when they send the file, right, it's not gonna be like PO, PDF or kind of things. So I just want to confirm on the document classification. If we set the threshold at 90. Would it? Affect anything? If let's say their input is not the POPDF kind of thing. Because they will be sending excel, Mh. Sorry.

### You (2026-04-17T02:25:34.337Z)

What. Or if Excel then it's okay but if other kind of documents then it's gonna fill that. Because in discussion it needs to be fixed right.

### Guest (2026-04-17T02:25:45.457Z)

Okay. All right. Yep. Yeah. Then we can set 90.

### You (2026-04-17T02:25:54.817Z)

So the one that you mentioned previously the PDF I'm not going to use they're just going to upload excel.

### Guest (2026-04-17T02:26:01.937Z)

For email is gonna be Excel only. Excel or BDF, but the PDF. Is Auto's report. Basically all the other files that we shared earlier.

### You (2026-04-17T02:26:17.297Z)

It's the same format is it no no it's the normal.

### Guest (2026-04-17T02:26:22.657Z)

Is POS. They export the report from their POS system. One. Sales repo kind of thing. Yep.

### You (2026-04-17T02:26:47.217Z)

During the populating the dummy data is done already and then I'll just move it to the what they say a direct rate as well instead of great CPO if it's that format of the Excel and then also the disclaimer.

### Guest (2026-04-17T02:27:02.257Z)

Okay. Disclaimer for both sales at CS. Right.

### You (2026-04-17T02:27:06.097Z)

Wait no disclaimer is just for sales user. Right. Now.

### Guest (2026-04-17T02:27:12.097Z)

And also the saying that the B2B order is Damila.

### You (2026-04-17T02:27:15.857Z)

Oh yeah yeah. Yeah I put a remark.

### Guest (2026-04-17T02:27:17.457Z)

Yeah. Okay. Yep. Okay. Thank you.

### You (2026-04-17T02:27:22.977Z)

Okay nice.

### Guest (2026-04-17T02:27:24.657Z)

So far.

### You (2026-04-17T02:27:25.937Z)

Any timeline change for favor or still same.

### Guest (2026-04-17T02:27:28.657Z)

Yes, there is a change. We will be doing product QA next Monday. And then next Thursday. Testing from testing for emphasize would be next Tuesday and Thursday. Then I have communicated with the favor client. That our UAT will move to next, next Monday. Because of the delay. Of emphasis for like one whole week.

### You (2026-04-17T02:27:56.577Z)

Okay all right nice.

### Guest (2026-04-17T02:27:58.657Z)

Okay. Thank you.

### You (2026-04-17T02:28:01.057Z)

Anything else guys. Next week on both question. For this. Oh you have I saw your name. Okay yeah that's it thanks guys thank you.

### Guest (2026-04-17T02:28:39.297Z)

Thank you. Thank you.

