---
granola_id: 9a1d6a67-3049-4d3e-8137-771ff76e667d
title: Mindhive  Daily Standup - Transcript
type: transcript
created: 2026-04-14T01:46:18.968Z
updated: 2026-04-14T01:46:29.453Z
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

### You (2026-04-14T01:46:40.238Z)

Hello. Guys. Good morning, everyone. Let's start with farm shop. First. Yeah. Yeah. Hello. From form shop today, I have going to have a meeting with them just to plan out the rollout for B2C. Though. So later, later on, maybe I didn't online. So online meeting for B2B, we have, as today we have one issue. And then I think there's already been fixed really. I'm not sure where on your side that the canceling one, the sales order cancel one, is it the fixed? Already?

### Guest (2026-04-14T01:48:00.318Z)

Yeah, I didn't deploy to the production yet. I. Just. Yesterday I deployed. That's it.

### You (2026-04-14T01:48:08.958Z)

What was the issue for that? One?

### Guest (2026-04-14T01:48:11.678Z)

Because we're linking to CPO, the one that we discussed in the.

### You (2026-04-14T01:48:15.918Z)

Oh, okay. You can't cancel because of the active CPO there.

### Guest (2026-04-14T01:48:20.478Z)

Yeah. So what I do is just when. When canceling the sales order, I'm gonna ignore CPO. Because I wouldn't do anything to the CPO. So it's just. Just cancel the.

### You (2026-04-14T01:48:36.958Z)

Additionally, I also updated the. Because yesterday Wans mentioned that the front end is not showcasing the API. Error message. So I've also updated. The area tools to include all the API messages for when canceling a sales order. Instead of showing generic message like yesterday. Okay.

### Guest (2026-04-14T01:48:56.158Z)

So they can know much more details. Like they need to cancel invoices or anything. Yeah.

### You (2026-04-14T01:49:03.678Z)

And also basically I tested the query note partner. I think you push to push alongside to with the sales order fixes. To production. You want me to push the production? Or was it like you said push to production? So you can push together two things. Also additionally regarding the feedback, right? Putting the four things. In it was not one of the four things. It was the attachment inside delivery note one. They deliver. You know how delivery proof of delivery. You want to put it in delivery note. Right? Yeah, I tested it just now. Apparently when. Front end is uploading the proof of delivery in the driver driver page. Apparently backend is retaining an error. I already discussed with this with Brian just now. Where when you upload your thing, apparently they attachment is not actually being saved in backend. Oh, so I'm just working my way on regarding. That. Okay. Is.

### Guest (2026-04-14T01:50:07.198Z)

We will. We will solve that then deploy everything to production. After this one.

### You (2026-04-14T01:50:07.598Z)

There. Still a lot of things to do for that? We just then I can put it in the delivery.

### Guest (2026-04-14T01:50:18.558Z)

Leave a check and see.

### You (2026-04-14T01:50:22.798Z)

Note. After you guys assess this, let me know how long it has done. Okay. I think that's all for sure. This inner push that push the two things, the sales order on and the credit one can do production. For B to see. Have you started migrating everything? I mean, updating everything for the production.

### Guest (2026-04-14T01:50:51.918Z)

Not yet. The ones that's the latest is just the island. If I go push it to product.

### You (2026-04-14T01:51:00.878Z)

Okay. I come in today.

### Guest (2026-04-14T01:51:04.878Z)

Now.

### You (2026-04-14T01:51:05.278Z)

Okay.

### Guest (2026-04-14T01:51:07.038Z)

Today, I'll try to look into if I have time to do the live video for function. 1.

### You (2026-04-14T01:51:14.158Z)

But you, you can, you can really start pushing, updating the production on A.

### Guest (2026-04-14T01:51:20.318Z)

Okay.

### You (2026-04-14T01:51:21.838Z)

Thanks. Okay. Okay. Next. Next. Thing. I so for link for the AP error side house. What's the current update for the progress?

### Guest (2026-04-14T01:51:41.598Z)

For the AR1 yesterday, I already. The scenario one and two are shared in the group is already there. Then, yeah, it's just waiting for front end to do the mapping. I think Lim is already working on it. Then I will. The. The scenario one and two is just regarding the SO and SI ID. Only. But the. The one with, like, monthly for the customer one, that one I didn't work on it yet. I will connect today. And then for the AP, I will also start. Start the APF points. For the endpoints to ingest AP, upload AP. And then all the tables for AP. Yeah.

### You (2026-04-14T01:52:35.838Z)

I just realized Jermaine was going to. Call. So our, our initial timeline, we're going to, like, complete the. The AR part. Today. Am I able to start testing the AR part tomorrow already? I'll see you guys still need more time.

### Guest (2026-04-14T01:52:55.358Z)

I think probably the finance side implementation might need to take some time to fully. Implement. Maybe that one you can gauge that time from.

### You (2026-04-14T01:53:06.878Z)

Okay.

### Guest (2026-04-14T01:53:07.598Z)

Yeah. Are you there?

### You (2026-04-14T01:53:10.318Z)

Yes. Yes.

### Guest (2026-04-14T01:53:11.358Z)

Yeah. Do you want to update on your site?

### You (2026-04-14T01:53:15.598Z)

For. For the endpoints to be fully connected, I think probably today we will reach to a point where tomorrow will finalize. So today I'll be connecting while at them. And then I think there will be some issues tomorrow that we might. So tomorrow is like you guys to finalize now. Yeah. On it, I think on Thursday or New Year start testing. Yeah. Okay.

### Guest (2026-04-14T01:53:40.238Z)

So, yeah, so for this one, letter, you read the brief that we on sent in the group.

### You (2026-04-14T01:53:47.838Z)

I didn't read it yet. But I see. I saw.

### Guest (2026-04-14T01:53:49.838Z)

Yeah. Yeah. So let me just go through that. And then if you have any clear question, you can clarify with me and where on. It true as well. And if any gaps that we need from back end, then we just have, like, a short signal, just a message. In a group. Yeah, I think, right, we can also have a set a meeting also just to review things and how things going. To see what's the gap to reach our goal.

### You (2026-04-14T01:54:22.478Z)

Okay. Okay. Yeah. Is any, if any, like, blockages, let me know. Anything you guys need me to clarify with client, just let me know.

### Guest (2026-04-14T01:54:34.718Z)

Yeah.

### You (2026-04-14T01:54:39.118Z)

Okay, so for my question, just to update you guys. So, like I said, they will just start. They're going to start testing. From this week. I mean, this from yesterday until end of the month. So that this, during this period, my cousin gonna test the, the base Maya. And there are any issues that we just need to fix it up. So we just be on standby on here. Okay. For SK of heart. Is there any updates for you? Guys?

### Guest (2026-04-14T01:55:10.718Z)

Okay. For SQL. You see the Jain already fits for payment entry medicine performance of Chile. An. I can Implement it in the ERP by Y. Is14. A.

### You (2026-04-14T01:55:26.878Z)

What's left for, for this SQL?

### Guest (2026-04-14T01:55:31.358Z)

I think. Do we need invoice? R? Yeah. We need. All the Integrations. We need to have. What do you call this? The e-invoice pullback. Okay. Yeah. And it's on your integration code. Everything is in the MindHive VRP next. Right? Yeah. Integration folder. Okay. So I think after this, I'll just write a spec for the integration. Just. I'll be. I'll base it on your code and then also later you just cross check, make sure that it's according to the spec that I will write and do you. Yeah, things. From the. Customer reference for invoice. So I can use that for. For SSD data for customer. Just because. Oh, you've got then. Yeah. Got that newsletter. If not default to. Individuals, if. If those. I think last time we got discussed, right, if the preference does not exist based on the data. And based on the invoice amount. Yeah. All the condition. Yeah. Okay.

### You (2026-04-14T01:56:57.518Z)

Next. Okay. For position side yesterday. I, me and I got really right through the C1, C3 testing. So we, we found a lot of issue and Improvement we can make. So I can already sort the date. Yeah. So I. Today I will continue to. Test based on the scenario we had prepared long time ago. And then tomorrow we. Since we have a meeting with hostan. Right. So I mainly collect the. Feedback based on what they are testing. Yeah. And then. Row base. Yeah. And then the row base is also already fixing it. Up. So I need to test it. So. Tagging one currently in the works. Not done yet. Okay. So priority is for the COIC1. C3. Yeah. And also the more I would brief client. Yeah. Yeah. That's all from. That's all for. And then for fixed group one. Aziba, can you. What's the issue for the access fixed group in your auto count.

### Guest (2026-04-14T01:58:24.398Z)

So I need to set up a deployment, which is I. I need a mini credential. But the one that they provide is.

### You (2026-04-14T01:58:36.558Z)

The client don't understand what's your problem. Right?

### Guest (2026-04-14T01:58:43.518Z)

I got to ask Jamila how we can handle this. But I think, yeah, I think it's their side that we need the password for admin. The one that they provide is not in one. This one last time is not the final one, is it? It's the vendor. Is it? Lem? A? The first you. This one. I'm not sure. I think. I think. Oh, okay. Okay. This is the RDP one that Data. Right? I mean, the RDP might be. If. If the client side not sure, then need to ask the attack team or their vendor. To set up them that thing for them. Yeah. Okay.

### You (2026-04-14T01:59:40.558Z)

So back to fixed Google calculator. I will.

### Guest (2026-04-14T01:59:47.118Z)

Yeah. So Gareth, later after syno, can we have a meeting? I want to show you the UI update.

### You (2026-04-14T01:59:48.718Z)

Yeah. Yeah. The calculator.

### Guest (2026-04-14T01:59:57.918Z)

Yeah.

### You (2026-04-14T02:00:04.718Z)

Fixed with. I already fixed with Akara. So I need to retest also. Yeah. I think that's all from. Fiscal rule. Anything else. Any car here? Oh, favor. How about favor?

### Guest (2026-04-14T02:00:31.358Z)

Yes. Hello. Can you hear me? Okay, farah. How's the ingestion for accredited? The. Intention. I have a bit of question that I need to consult with Yong, but then I'm going to do it outside of this panel. Everything else. I got no issue. Yeah, but I wait. Yeah. Okay. So I have a question for the. For us to update the outstanding.

