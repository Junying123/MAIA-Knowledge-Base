---
granola_id: 2f97edfc-c01c-49d7-9d08-d579554d8ee3
title: Mindhive  Daily Standup - Transcript
type: transcript
created: 2026-05-13T01:44:08.059Z
updated: 2026-05-13T02:19:30.137Z
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
folders: 
  - Mindhive Daily Standup
---

# Transcript for: Mindhive  Daily Standup

### You (2026-05-13T01:45:01.854Z)

Yes. Good morning, guys. Stand up, guys. Okay. So I'll start first off just real quick. For Ultimax, we will be doing a UATIN with them. At ten. So after this, I'll go up with Brian to set up and get ready the call. Brian will be, like, on standby in the call. Yeah. For Ultimax, we will have a UAT session like right after this. Yeah. So after this, our goal we have a room, so I'll be there with Brian on standby there Yeah. Okay. Okay. So for Jose Mon, yesterday, we have the the meet... The meetup with TEG team lah. So basically, end to end flow is already complete. We And just a minor issue, like for example, you know, C three, right? I mean, you want to add the appointment letter. So so in SOI, we can add the appointment letter is attachment. Okay, I'm doing the attachment. Just beside the The problem is that there's no There's a validation for submit the SO with C3, right? You have blocked No no appointment letter. And then for c one c three five day. Yep. Yeah. The service all center here. Stupid. Yeah. Set there. Yes. Yes. SQR, right? They will do the setup by July. And their goal is that their SQL will go live by But then for now, the news, the data will only stay in my office. Yep. Okay. Because they currently use UPS. Right? They also want to migrate. UBS and to SQL. So before they go like, For migration. Yeah, and another issue is the admin Because once you I think we have a discussion. For the Advent Chase. Oh, is this the attachment Yeah. You want to amend the sir. Right? You already accept it. Then you want to But right now the chatbot plan is to just amend the important info, like, customer. The hater info. Yeah. Hater. Yeah. And then the abstraction, we don't do No, the distraction should still be do that similar to CPU, just go back to re extract the serum. That's the one too. To be honest, if you reaction it, it's not gonna make any difference then. Yeah. Because you're gonna say, here's the same same

### Guest (2026-05-13T01:50:52.940Z)

Meaning, the end shouldn't support the abstraction function.

### You (2026-05-13T01:50:57.584Z)

Sorry?

### Guest (2026-05-13T01:51:00.450Z)

So meaning, like, there is no need to support re abstraction for certificate. Right?

### You (2026-05-13T01:51:04.194Z)

No no problem because you are are running

### Guest (2026-05-13T01:51:05.310Z)

So

### You (2026-05-13T01:51:07.544Z)

the same pipeline, your result will will be very simple.

### Guest (2026-05-13T01:51:08.830Z)

So, basically, if they want to amend the just, like, amend a submitted certificate by then the best because I mean, like, not a extracting reextracting everything. If they want to do that, they actually need to cancel that certificate and

### You (2026-05-13T01:51:22.324Z)

Create new

### Guest (2026-05-13T01:51:24.700Z)

create create a new one. Right?

### You (2026-05-13T01:51:24.974Z)

Yeah. Yeah.

### Guest (2026-05-13T01:51:27.100Z)

Okay. Yeah. Okay.

### You (2026-05-13T01:51:27.434Z)

Yeah. For for now, let's just do do that. But effort to do the reaction is not higher. Right?

### Guest (2026-05-13T01:51:32.380Z)

Again?

### You (2026-05-13T01:51:35.314Z)

The effort to do re... Reextraction is not high. Correct? The one we can do in detail. Yep. Yep.

### Guest (2026-05-13T01:51:40.310Z)

Mhmm. Yeah. Uh-huh. Yeah. Yeah. Yeah. The page looks

### You (2026-05-13T01:51:45.414Z)

Can do The event that are case cases whereby

### Guest (2026-05-13T01:51:47.050Z)

or active.

### You (2026-05-13T01:51:49.714Z)

the extraction totally we should actually allow and we try. Yeah. And are you tracking all the search the search changes as well?

### Guest (2026-05-13T01:52:00.170Z)

What do you mean?

### You (2026-05-13T01:52:01.924Z)

So when a user goes into

### Guest (2026-05-13T01:52:04.960Z)

To change this?

### You (2026-05-13T01:52:06.894Z)

to change the cert dot type,

### Guest (2026-05-13T01:52:07.740Z)

Uh-huh.

### You (2026-05-13T01:52:09.044Z)

to update, do you check the the changes?

### Guest (2026-05-13T01:52:11.290Z)

Uh-huh. You mean, like, what was extracted and what was

### You (2026-05-13T01:52:18.384Z)

Yeah. Correct. Yeah. Similar

### Guest (2026-05-13T01:52:20.870Z)

right now. Give me right now, that's the gap I need to handle because right now, user override I don't have the historical step that you found

### You (2026-05-13T01:52:38.314Z)

This one, I think, is quite important.

### Guest (2026-05-13T01:52:42.410Z)

make sure that the audit

### You (2026-05-13T01:52:42.894Z)

Because

### Guest (2026-05-13T01:52:46.270Z)

train is capturing the data changes.

### You (2026-05-13T01:52:47.944Z)

Yeah.

### Guest (2026-05-13T01:52:49.110Z)

The audit trail. So, basically, okay, what I discussed with you yesterday is this I'm just gonna store the extracted data inside one, like, create one column to store the JSON of your extracted data. No. This one is two different thing. The JSON is for the what attracted me the way I give you, but the audit for the so it's also need to check one now. That's true.

### You (2026-05-13T01:53:18.934Z)

Yeah. Because

### Guest (2026-05-13T01:53:22.470Z)

I I understand about the oh, it's true. Anyway, if the date for modified by then if they allow but then if the Uh-huh. No. More like the, you know, like, sales order, every single change you I can't think of the the right hand side one. Right? The audit log. Activity logs. Uh-huh. Yeah. You just implement that activity logs to log the whatever they make the changes on the set look. Yeah. Then Oh, okay. Okay.

### You (2026-05-13T01:53:50.224Z)

Yep. Just from from there, then next time, we can build build

### Guest (2026-05-13T01:53:52.560Z)

This put

### You (2026-05-13T01:53:55.194Z)

memory if required for this particular customer. Yeah. But the third the first thing is that the tracking must happen first. Yeah. Yeah.

### Guest (2026-05-13T01:54:07.070Z)

Alright.

### You (2026-05-13T01:54:09.124Z)

I I think what I can do is you can refer to, like, all the I I think CPU also got on. So so you can check.

### Guest (2026-05-13T01:54:16.090Z)

Yeah. Yeah. Sure. Sure. Sure.

### You (2026-05-13T01:54:17.784Z)

Yeah. Yeah. And then there's one of UX enhancement to do that after we upload the in the final. So it's like we need to notify the user. It's abstraction is progressing. Processing. Okay. Complaint. That was the potential thing that we might add to follow how CPO would be giving. Okay. Yeah. K. Alright. I think that's all for oh, and I think is client request one. For want to ingest They they they provide the whole c one folder. How many? Around 10, 20 like that. After yeah. Yep. Okay. Yeah. That's all for Joseon saya. Okay. So we might have some blocker. Yours yeah, we will do the UAT breathing later. And we will test the calculator. This calculator we need to test. Yeah. Tomorrow. Eleven. Eleven. Eleven. So basically, weigh all, namiru, and yeah. We had three officer. We'll go there. Okay. Anything else? Yep. Aditi, how's the the pooling for the doctype, historical data?

### Guest (2026-05-13T01:56:39.140Z)

I need to do some changes. Just this just a simple one, like, to but I will keep updated later. Will that be you later?

### You (2026-05-13T01:56:47.654Z)

Since since we're on this topic, right, can you please provide me the latest plan for the tooling?

### Guest (2026-05-13T01:56:54.410Z)

Sorry. Can I

### You (2026-05-13T01:56:55.624Z)

No. You you since we are on this

### Guest (2026-05-13T01:56:58.620Z)

you? Uh-huh.

### You (2026-05-13T01:57:00.564Z)

topic please prove. With the updated plan for the two way syncmen.

### Guest (2026-05-13T01:57:05.350Z)

Oh,

### You (2026-05-13T01:57:07.184Z)

And and and the mine as well. Yeah. Thanks.

### Guest (2026-05-13T01:57:08.170Z)

Okay. Okay.

### You (2026-05-13T01:57:15.044Z)

Want to make the change, right?

### Guest (2026-05-13T01:57:20.460Z)

It's not a bit broken. Just like, you know, in the auto out account, they have a discount. Right? So right now, right now, I just pull the what is it? The unit price. I balloon pull the discount as well. I think I think it activated for me to choose to pull the discount earlier.

### You (2026-05-13T01:57:39.874Z)

So so the next plan, pull the discount. Right? Okay.

### Guest (2026-05-13T01:57:42.880Z)

Yeah.

### You (2026-05-13T01:57:43.334Z)

Right. Right. ¿Ok? Ya. That's all for this good one. Yeah. I'm thinking of postponing the UAT. What's the issue? Yes. Yeah. The outloading CPU button. Yeah, I'll let a few CPUs, not this few. I take 14 ohms. 14 CPOs. But for some reason, can't actually write it out.

### Guest (2026-05-13T01:58:17.560Z)

Oh, Brandon.

### You (2026-05-13T01:58:17.704Z)

The

### Guest (2026-05-13T01:58:21.440Z)

I already told Wayon this issue. Wayon, the s three file key you sent not a s three file key. It's the it's the my dot e n v gonna change again? Oh, shit. I don't know. Nothing? Is it the four zero four thing? No. No. It's not four zero four. It's you send to the right endpoint, but the s three file keys is not an s three file key. Got HTTPS in front one. Alright. Sorry? Then gap. Yeah. Only in is it? That's what's reporter. Oh, okay.

### You (2026-05-13T01:59:13.894Z)

check this. Like, the document I'm gonna be trying. But this this is a But have you investigated who who actually went and changed the EMV?

### Guest (2026-05-13T01:59:29.560Z)

Yeah. Nobody nobody tell me. Don't know. Yesterday, I was after. But a lot of this small small, like, different changes everywhere, then affect yeah. I mean, like, like, like, only thing it doesn't happen in other place until yesterday. It happened on that only. All this stuff And, yeah, I don't have a I don't have the twist here.

### You (2026-05-13T02:00:01.144Z)

Since the env is a git ignore file, right, how is This is on No. No. This is Okay.

### Guest (2026-05-13T02:00:06.550Z)

We may be. Yes. When someone, like, update the DMV, then they copy the whole thing over or something. And

### You (2026-05-13T02:00:11.264Z)

Then The check show is happening. Yeah. I think was since. Or if they are if you On the server. We are not detecting can you please help to check link app's Right? Is it updated to to to the latest version?

### Guest (2026-05-13T02:00:43.120Z)

Oh, okay. Okay. For the for everything, I I got asked Azeep to deploy already. Azeep, got deployed Yeah. Two days ago. Okay. Okay. Yeah. I'll I'll just check the whole thing last for the CPO.

### You (2026-05-13T02:00:58.084Z)

Yeah. The base. 12. If if talking about it, then there would let the light right now. Sorry. This one urgent. Of course, the the the we need to to to know that it's working by 12:00. Oh, yeah? Treat things up. For plain gap is the base Yeah. Yeah. For I tried on the AOL side. The latest changes haven't done yet. Right? I mean, like, the this on this morning are important. I think it really fixes admitting to their instance? And second thing is the on the latest instances, are we able to grab the app course audio because this one I checked grab Apical one, we we got pulled the latest one. Yeah. It's six.

### Guest (2026-05-13T02:02:40.740Z)

For which modular?

### You (2026-05-13T02:02:42.274Z)

Which one? The for the AI, you guys said? The AI. Yeah. ARDP and then also for the GRN. You're missing the GRN. The s o s I Yeah. Think main street for AIP for gap systems.

### Guest (2026-05-13T02:03:04.810Z)

Mhmm. I think they went where I went already set up a schedule.

### You (2026-05-13T02:03:08.114Z)

Yeah. Still on the scheduler. Yeah. There's no, like, new thing is is... Gonna start until like like May 5 only. Because we are pointing to their sandbox one. Oh, their sandbox I know. But but but but they're looking at distance. Right? Mhmm. So I see, like, I might Okay. We just stop them the that one are ingest, like, they are more older detail. So they get more 可 笑 しい んです just I just got a timeline for the old April till the Are you sync everything? I guess it's quite often. It would take. 트밀트밀트밀트밀트밀트밀트밀트밀트밀트밀트밀트밀트밀트밀트밀트밀트밀트밀 I think I can I can sing it to And there's there's p o n in this one? Okay. Thank you. You you I can just rerun. You already to come to the but the other only identify. The is that the one? What book is called by front? Okay. Yeah. After she pay only into v one. Mhmm. This reminds her again. Yeah. And thank her for for for Favor? Okay. You want the second, sir? So my... My concern, molecule, UAT. Later after later to the house, I was test. Alright. Next is There's a new client. New client now. So it's the Now send out to them. Yeah. System are you using? Not sure whether it's cloud or premise yet. But I think it's so cloud. Okay. Then first step is to get access. And get cooler at the results. Because we only the master file. Right? CT Autobots. I haven't finished the Procombo yet. Okay. Mean medical. Mean medical. My my need I need to go to ring my name on Friday. So they have the phone numbers ready. Yeah. Really I see what that is set up. Friday. The kickoff meeting. GST?

### Guest (2026-05-13T02:09:46.410Z)

On the bot for DIY ventures.

### You (2026-05-13T02:09:48.624Z)

Sorry. The airline went to

### Guest (2026-05-13T02:09:51.090Z)

Add add a new one to the bot for DIY Ventures.

### You (2026-05-13T02:09:57.794Z)

Oh, g... GST. Right? I just follow-up with that to, like, make sure they schedule the meeting with you when the for the ASAP. Yeah. SAP as well. Subscribe as well. Don't know. Check right there. Check right there. If you say you need help to reach out, just send us a You get to know their vendor. Okay. And then I also send the pre onboardings questionnaire to them. Questionnaire is basically get to know more details of their operation. Yep. So so sorry. Back to the vendors. There are two vendors, you know, one for to count one actually. Need the SAP. Okay. Alright. Yeah. And also next, I think next Tuesday, we have a meeting with them to set out the the meta at AWS. So the sec is Bansin on the call?

### Guest (2026-05-13T02:11:13.170Z)

Yes. I hear you.

### You (2026-05-13T02:11:16.604Z)

Yeah. Yeah. Yeah. So I just wanna

### Guest (2026-05-13T02:11:19.330Z)

Yep.

### You (2026-05-13T02:11:19.574Z)

sell that. The email one that you sent. Right? Were you able to text from the chatbot? Because when I text on the chatbot, you

### Guest (2026-05-13T02:11:23.660Z)

Uh-huh.

### You (2026-05-13T02:11:26.644Z)

also feel one.

### Guest (2026-05-13T02:11:29.600Z)

You mean the

### You (2026-05-13T02:11:29.674Z)

The

### Guest (2026-05-13T02:11:31.630Z)

the same

### You (2026-05-13T02:11:32.154Z)

Yeah. Yeah. Did it work on your side? Send a file.

### Guest (2026-05-13T02:11:44.710Z)

You mean you mean the same other file you the same other file when I test on setboard work in it.

### You (2026-05-13T02:11:49.884Z)

Yeah.

### Guest (2026-05-13T02:11:51.690Z)

It works before.

### You (2026-05-13T02:11:56.464Z)

Okay. Recently?

### Guest (2026-05-13T02:11:58.980Z)

Recently, I haven't checked on chatbot because for that other part, it only will be sent through email. Not chatbot. The b to b

### You (2026-05-13T02:12:10.664Z)

Taking me from there.

### Guest (2026-05-13T02:12:12.410Z)

well, is it?

### You (2026-05-13T02:12:13.444Z)

Yeah.

### Guest (2026-05-13T02:12:13.720Z)

Sorry? Yes. There are in PS on the Oh, so supposed to create CPU, is it?

### You (2026-05-13T02:12:22.394Z)

What took place? CPO. Yeah.

### Guest (2026-05-13T02:12:24.330Z)

Hello?

### You (2026-05-13T02:12:24.884Z)

CPO or sales order, sales order I think. The one I sent to you, the other

### Guest (2026-05-13T02:12:29.970Z)

What what file is that? It the b two two? It's a CS or the Excel file. Inside, got PO number one. It create a PO.

### You (2026-05-13T02:12:39.314Z)

No. It it

### Guest (2026-05-13T02:12:42.810Z)

What did it?

### You (2026-05-13T02:12:43.174Z)

on my side up. I I sent

### Guest (2026-05-13T02:12:47.510Z)

Say?

### You (2026-05-13T02:12:52.464Z)

Alright.

### Guest (2026-05-13T02:12:54.590Z)

Okay.

### You (2026-05-13T02:12:55.344Z)

Also checking from my side. Seems that it didn't create any rules in the processing job. But it should skip that one. Right? It's a

### Guest (2026-05-13T02:13:08.810Z)

No. No. Every file that entered the to into be in the processing files d b one.

### You (2026-05-13T02:13:15.204Z)

Oh, thank you.

### Guest (2026-05-13T02:13:16.600Z)

But issue crazy pure, see the structure is not a b two b It's not a b to b order.

### You (2026-05-13T02:13:25.844Z)

What is the correct structure one?

### Guest (2026-05-13T02:13:30.180Z)

Sorry?

### You (2026-05-13T02:13:30.984Z)

The file that

### Guest (2026-05-13T02:13:31.250Z)

What is that?

### You (2026-05-13T02:13:32.774Z)

you tested with.

### Guest (2026-05-13T02:13:35.220Z)

Oh, the one is Excel file with with the contact the item, and the PO number, PO dates. Crazy PO. Right? Because I don't see the SD column here. Yeah. They got the one SD one is for b to b only. Yep. Yeah. I think they do. Can test again. Because as I test this working one,

### You (2026-05-13T02:14:10.174Z)

Okay. This the of you is the the same cover

### Guest (2026-05-13T02:14:11.130Z)

Okay.

### You (2026-05-13T02:14:14.754Z)

for for for Greg.

### Guest (2026-05-13T02:14:16.790Z)

I have something to also get in paper. Okay. So right now, you asked me about are asking me to chat the the in history and in tempos 32 smashed. Did The one the one okay. I think the one right I need to try again with them. It seems like okay. The file we sent already in already sent out. Right? Yes. The details can you check the details of the other file is correct? Exactly the same as the s o. Right? And the file we sent is what is the PO number? You you mean, like, I need to download from right now to check the I I need to download from Can we share the all the file that we send to them? Ken. Right? Yeah. Because I got, like, for the the card and sign to them in the Yeah. But then, like, if you ask yeah. But the thing is right now that one thing that is not clear is, okay, when we push the font to the s SSTP, Okay. Then, like, it's going to go inside the folder. Right? Yes. And then and then it will shift to the history for the Okay. So right now, it will go to history folder. Is it like after they pull from MPUs or much I mean, what what is the trigger that make it go to the history fast? When it become pending in So is that when you send that, and then it will go to history, and then on Enforce front end, it will show the order is pending. So meaning they already pulled the file to the Enforce Yeah. They already pulled the file to the wanna Mhmm. So the point is I wanna check whether the order found that we submitted to them the order content is correct. Because if I say our order content is correct, then the issue is on the fourth site. But then the associate I mean, because they are key on asking young the file is not inside the in I put email that one. Yeah. That one doesn't matter because they just forgot about the sheeting. But the point now is that whether our order already sent directly, the orders are done. Alright. Okay.

### You (2026-05-13T02:16:41.734Z)

Yep.

### Guest (2026-05-13T02:16:41.990Z)

Alright. Alright. So you have me so, Fariba, you have me check whether the other file inside the other file, we sending the correct order details? If yes, then I think it's sent for site that they already received the file, but somehow it's not appearing on their finance. Okay. Yeah.

### You (2026-05-13T02:16:59.974Z)

Yeah. Frank, next time for for such things, if you want to verify can reach out to to directly If you are not clear about what, you can

### Guest (2026-05-13T02:17:11.910Z)

Because because the patient is still I don't like the clarification that I one thing asked me this about this morning.

### You (2026-05-13T02:17:19.544Z)

Okay. Okay. Sure. Okay. Okay. Cool. Anything else on table? Any buckers?

### Guest (2026-05-13T02:17:28.850Z)

No. But one thing is that changed The UAE date to next Tuesday. Because, yeah, team is not free this week this whole week. Okay. Ken,

### You (2026-05-13T02:17:41.544Z)

Wait. Just to update for Fabrice I've already enabled so that users can modify the custom SKU. But right now, there's just a minor problem with the back end where the customer SKU, the user modified is not persisting after saving. So The one is talking yesterday. Yeah. So this one is on both Mayank paper. It's nice for them to change their extracted SKU two, after they sign it. Right? This extracted SKU is gonna be one that is gonna, like, the external SKU with k. Anything Okay.

### Guest (2026-05-13T02:18:34.680Z)

No. That's all for myself.

### You (2026-05-13T02:18:51.214Z)

Thank you, guys. Bye bye.

