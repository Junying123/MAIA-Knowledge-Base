---
granola_id: a0a68382-5e09-4d98-9dfb-375068a53146
title: Mindhive  Daily Standup - Transcript
type: transcript
created: 2026-04-17T01:43:18.751Z
updated: 2026-04-17T01:45:46.489Z
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

Now. When they use the stock record right. It's just an add-on feature to pull by the location but if they are doing it in a bit of a different way which is by item group which is not a native. Like it's not natural to fetch like that. When you do stock count because item group can be across many locations. So you see it doesn't conform to normal warehouse stop car practice so what if it's like stopped by warehouse and then inside this warehouse for these item groups? By this warehouse for all items inside this warehouse you sort for all the school items that's found in this warehouse. It's not it doesn't show for multiple warehouses it shows for this warehouse all of the school items. There. All of the school items. Because right now we are not trying to solve their stock reconciliation problem you know we are focusing on solving their sales problem so this particular feature is very minimal value as of now. So how we need to deal with that is we say sure we understand now your procedures perhaps the existing out of the box stock economy may not be tailored but that's not really the core focus of Maya which is actually the solve for the sales selling site so this stock recon part of it is very. Like it's for you to do your part to update the stock in the system so if you have some way that you manually already do it if you can transform it into our CSV format and give it to us because this is not a feature that's in scope or explicitly written in I sort of like put this up so that's how we evaluate and we gauge whether to do this thing so we'll try to push back on this thing and communicate it in that way let's see so we need to give them a workaround so right now let's say we understand their case which is they're doing by sock group so end of the day after they do their stock account what is the document that they have that what we can do is we have looked at that document and tell them hey so this is how you transform it or how this is how you take this thing and chuck it into buyer or what changes you can make to this document so that the system can upload my app. So that's I don't know if you know to build a feature that is just purely for that. To them. Okay.

