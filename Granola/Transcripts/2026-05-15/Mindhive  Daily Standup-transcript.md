---
granola_id: 01417e56-6f80-43e7-97ad-6143c9dedd1f
title: Mindhive  Daily Standup - Transcript
type: transcript
created: 2026-05-15T01:44:58.075Z
updated: 2026-05-15T02:24:55.757Z
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

### You (2026-05-15T01:46:44.970Z)

Okay. Okay. For fixed coupon yesterday, I think later we we will have a section to discuss all the feedback. Have you scheduled Yeah. I think after this After this, we after this three, three again, after three.

### Guest (2026-05-15T01:47:17.849Z)

What's the what's the summary of the feedback?

### You (2026-05-15T01:47:19.270Z)

Summary of the feedback. So basically, cannot the UAT is because Yvonne test, he just use a chip. WhatsApp to test a chatbot. So for example, he got a test on his cervical pricing and then the issue, the most of the issue we found is auto accounts provider misleading day ka? Because o... Odor kans is not fully synced yet. Yeah, byoung karaoke ni just sing the s o SO and quotation there. Document Yeah. I'm sending the Always say

### Guest (2026-05-15T01:48:19.709Z)

¿Quiere solo es la la main reason la idea? Because of fucking only quotation in

### You (2026-05-15T01:48:31.530Z)

incomplete. Right? Yeah. The syncing Yeah. Was the issue with the Because, for example, like, the they won't test the stock. Stock checker. Because the chapel doesn't retrieve the stock balance And then

### Guest (2026-05-15T01:48:51.489Z)

Okay. That's all not receiving the stock balance. The you know, like, something that was yeah. It's the integration.

### You (2026-05-15T01:49:01.660Z)

Come again, Ivan. Sorry.

### Guest (2026-05-15T01:49:06.099Z)

Why why are we not retrieving the stock balance from autopowner?

### You (2026-05-15T01:49:09.970Z)

I mean, that's something I want to ask also like what's agreed upon last time we do until this for for fix guru is it gonna do until end to end. To the order. Because right now, even the they are expecting the moment open sales offer gonna it up to file. Then on they in the in the whole process, they want to see yeah. I think that they do everything on the website and then submit. Go to the like, it will keep on syncing even the tough one. They wanna update a date. It's gonna go into autocount. Other? Why all this means the the surface of now? Okay. Okay. Let's go to Holston's first. For Jose... Wei Shen, are you there?

### Guest (2026-05-15T01:50:38.999Z)

Yeah. What's up?

### You (2026-05-15T01:50:40.860Z)

For the I think the whole sentence, the extract the cert extraction issue

### Guest (2026-05-15T01:50:47.599Z)

Oh, yeah. I just fixed it. Wrong wrong AWS region. I forgot that.

### You (2026-05-15T01:50:47.770Z)

happened. Yeah.

### Guest (2026-05-15T01:50:52.519Z)

Know the client was in another region.

### You (2026-05-15T01:50:52.830Z)

So so, lista tú tú with a mainly your testers. You want t three and then, yeah, they will join. Were joined. Currently in but I think we will use a definition in the to let client test. Okay. You wanna use Stefan? Okay. How's how's what I just changed.

### Guest (2026-05-15T01:51:53.689Z)

What? Sorry?

### You (2026-05-15T01:51:54.770Z)

Push it to client staging for for for the fix that you have done. Because

### Guest (2026-05-15T01:52:00.399Z)

No. No. It's, instance env fix. Yeah. I don't use my lambda already because my lambda is in another region, Malaysia.

### You (2026-05-15T01:52:10.350Z)

Need to change to one. One. Then there you just update it. That's test a few more also. It's Yeah. I will test. Mini will test on your Internet. So make sure it's the latest one. I feel like all this UAE might make it you guys need to touch more, I mean, more need to test more before even go through I think for the past week, the UAT for Ultimate for FitGuru, all this seems to be all kinda readiness bro. Yeah, not very bust like I think because of that's not enough and then the flows all semagama jam, Brick here. Brick here, there. And even sometimes in the chatbot there, I worry it's like, the whole test flow, I mean for example fix guru one, maybe we test in ultimate fix guru, we test in front end or the flow can work. But chatbot, we didn't test enough. Then suddenly when we go there, ultimate and fix guru, they don't even want to use the front end one. It's not like form shop, form shop to validate. They want to use front end. Yeah. This stuff, we might need to take note and then need to angle our UAT on that way Yeah. Yeah. We like to make sure we tailor the Yeah. I so their I mean, we cannot, like, straight away push for unity just because of like pressure or because the timeline need to close already, we need to come up with your UAT then go there without even test on our side first lah. Then what's the point of UAT? Yeah. Our better data can set the book a room for Same. Four, four. Time. Okay. Two, three. Okay. Thanks. Optimize. For the Ultimax side, I already compiled the list of issues. I pass it to Afek. Right now, one issue is that a few things I don't see is that the chain command is not executing properly. Yeah. I tested it just now also. It's like, I tried giving a chain command and it's like, hallucinating and it's like the boy is like lying lah, it's like telling me it completed but when I checked, on the front end or I ask it for like the PDF, all those is not reflecting the changes. Yeah. And also another thing is like cross document, when I try to ask it to like it's also part of the chain command. I ask it to submit and create the document. It's not linking the doc. It creating it as like a alone. Yeah. I think we should. I I think now that the strategy is uptake upgrade the models

### Guest (2026-05-15T01:55:53.759Z)

Anno, Eligia

### You (2026-05-15T01:55:53.820Z)

So the the the the current best track is to actually upgrade a model, test, see the data, see how much it has actually improved, know, with it from from from there. Then if we need to revisit, we revisit the street thing side? Adela. One is eval for Adelaide Parkinson's research tool, Julissa. Because that one is the most bad one. The is quite low. Because Then the two search, our retrieval is okay one actually. The one is quite high. You used his compact. Yeah. His compact test case to do it the update our changes or whatever, it will run that game. Right now, I talk in yet. Block any deployments. But later on, after we pick small on the core stuff, then I will block it lah. Mhmm. The so that's do the other one is oh, yeah. Context. Context, we have history messages. Right? We put on user final and then the we stay between four standard. So I cut off to the user still stays, but the two messages are removed for the previous time. So the model doesn't have no the unnecessary for Mhmm. Bye. See that then how about the chain the chain one swing, Oman, Iron, suspecting is It's quite inconsistent when the temperature is point two. Because last time I tested around five, six pieces, I said, I'll check the version probably just to avoid like maybe optimist image version issue. Then if that still persists, then need to check on the column. Either the model or something else. First is, I think your eval needs more more samples. Yeah. Okay. Do do you appritize that first? Then after that, straight you check the version, and and that's straight straight up the or the actinal eval again. Then you will have to do actually compact. Because the tool search will need to be consistent here. Tool search, the our tool is we say that we need to get back to to the client? To the I think I'll let them know. Yeah. Just let them know we are still doing some fine tuning. And more testing before we share with them. Okay. So check if it improves a lot, then I pass it to Junior. Okay. As mentioned yesterday, for farm shop, today I will be having a meeting for the deer line. This is discussing the commercial side you know. Yesterday they engaged with me, asked me to plan out the rollout strategy for b to c chatbot. So I did when he dropped out, I did like the offer this also. So how the phase out will be is five phases. First one is trusted customers. Second one is 10 subscription customers. The third the third one is more the third phase is I think, 50 plus customers. After that, more than, like, the broad range of customers that you slowly introduce with dealer. Like introduce as in Like, Yeah. Changing like, with the last phase is basically changing their their they have some in their website, they have some widgets there to direct to the chatbot. They'll only do the last phase only. Introduce all to their customers. K? The the logging thing you guys can test again, the patient's went our side. Create when their site create a user straightway, we're gonna push outside. It's not gonna go go through the WP front already. When it feels when our how how This is a form shop. So actually scheduled a meeting with the the leads around 11:00. I'm not sure if you guys got other meetings or not. 11:00. You guys got meetings around the time, but Yeah. The doc upload and some conversational stuff. The one you Okay. So next the next step for for Ning Gap. Right? So next Tuesday is a demo with the operations manager. All the thing I brief you today, what are your changes with this is all kind of like a small changes first, that we could try to do it as fast as possible so I can test, then Tuesday, can do a demo with them. Okay? So the demo is it serves as like a second UAE team with them, but it starts with the finance manager finance manager and operations manager, ok? Okay. Then for the training, it's gonna be scheduled June 4. I already confirmed the time, 1PM to 5PM So training you seek your time. So in in the meeting right now, it just we just set up the UAT part first, Once everything confirm with it, then we can move. So we push everything to production. So right now we just focus on UAT first. And and and the Yeah. Okay. Yeah. Mhmm. Okay. That's holding up. Michaelson, so I I yesterday I yesterday the YT got cancelled lah, I think. Just so you guys know. Yesterday UAT got cancelled. So right now I'm trying to schedule a next UAT session with them. I'll try to talk it try to talk to Angel She says she tried to find time. And tried to book it. Because right now they are quite busy. So I'm trying to do, I'm trying to try try to dig in. Walk in the the session? One's one of the checkbox one. Because right now she's just waiting on the miss Irene to get back to her when she's coming back to What else? What else? That's the one I guess in. So before we to a meeting, think we need to press something first. Right? The The CPG, the I'll send out the invite sir. Okay. What else? The proposal already already done with you lah? The DIY ventures, I freeze the goal, I'll just send them the questionnaire ID. I take a look yesterday, they only populated, I think like, 60% of it. So I think for this one, think we can ask I'll chase them for a bit. Complete everything. If the things I don't understand, I can schedule a meeting and then run through with them. Okay. Okay. I think driver should be quite fast. Right? So they're gonna use until the driver there, lah? Yes. Okay. Think that's all from my side, though. Yeah. That's all from my side. Anything else? Favorite, anything? Hello. For s c c, s a p house What's your plan on that one? Now now the blocker clear clear already. Can you focus it and we target Wednesday? Zeb.

### Guest (2026-05-15T02:06:41.179Z)

hold on sorry sorry sorry but for the sweet sweet and Yeah. I think I can I can

### You (2026-05-15T02:06:53.100Z)

Okay.

### Guest (2026-05-15T02:06:53.509Z)

I can three dish is in a formula?

### You (2026-05-15T02:06:56.120Z)

The the the topic is completed by Daniel Kensington. Because for SEC will be pushing base first.

### Guest (2026-05-15T02:07:04.929Z)

Okay.

### You (2026-05-15T02:07:06.940Z)

Yeah. Yeah. And then for GST, the pre onboarding question, so we we had the of all their business contacts. I will the next plan for it is to schedule to ensure quality to business. And then I will propose a Yeah. Okay. Because that one is also in in contingent of their s I SAP. It's a b one. Get get the access first. Yeah. Okay. But you know the... You receive a company, right? You check with the client first. Is it okay with the job? With the with the job on behalf. Okay. About favour.

### Guest (2026-05-15T02:08:06.049Z)

Yes. For people right now, we have a issue with is when we send order to SAP, they didn't receive the PO number, and then we tried changing the field hidden name. They directly cannot receive the order at all.

### You (2026-05-15T02:08:20.830Z)

Ya, ok. So so so previously, right, remember when you told me that they all sent over, that means you tried all all the alternatives that I provided the day right, Yeah. Okay. So so so in that previously, you said that

### Guest (2026-05-15T02:08:32.559Z)

Yeah.

### You (2026-05-15T02:08:35.820Z)

one of the tablet actually managed to push your sales that is the

### Guest (2026-05-15T02:08:39.289Z)

Yeah.

### You (2026-05-15T02:08:39.460Z)

Air Force template one. Right? What is the delta with the template that we all have?

### Guest (2026-05-15T02:08:41.579Z)

Yeah. What what what what what does that need?

### You (2026-05-15T02:08:49.440Z)

No. Because previously, you said using the enforce template to submit to

### Guest (2026-05-15T02:08:53.469Z)

Uh-huh. Uh-huh.

### You (2026-05-15T02:08:55.200Z)

in.

### Guest (2026-05-15T02:08:57.329Z)

Yeah.

### You (2026-05-15T02:08:57.500Z)

So what is the delta of that template versus our current template?

### Guest (2026-05-15T02:09:03.099Z)

Is here?

### You (2026-05-15T02:09:06.480Z)

Yes.

### Guest (2026-05-15T02:09:08.349Z)

Yeah. Last time you if we use the enforce template, right,

### You (2026-05-15T02:09:13.450Z)

You mean before I change the template?

### Guest (2026-05-15T02:09:17.259Z)

The one with the sales rep number one.

### You (2026-05-15T02:09:17.330Z)

Uh-huh.

### Guest (2026-05-15T02:09:19.599Z)

Yeah. Because that one will require sales rep number, but SAP actually don't require a sales rep number. And they are filled is a bit different. Yeah. So, we need to use the one with SAP one, but I don't know why

### You (2026-05-15T02:09:34.400Z)

Thank you.

### Guest (2026-05-15T02:09:35.229Z)

it's not working.

### You (2026-05-15T02:09:40.080Z)

PO reference. They they can get the

### Guest (2026-05-15T02:09:40.399Z)

Yeah.

### You (2026-05-15T02:09:43.170Z)

PO number from the previous template. It cannot,

### Guest (2026-05-15T02:09:44.829Z)

Yeah. Ken Ken.

### You (2026-05-15T02:09:46.840Z)

Okay.

### Guest (2026-05-15T02:09:48.359Z)

Ken. Yeah.

### You (2026-05-15T02:09:51.800Z)

Just a bit of that of that now. Just to reach out to their SAP, most likely is going to be the global one. So there'll be one as long, then there'll be some problems The the client actually tries not to actually catch out that side.

### Guest (2026-05-15T02:10:03.879Z)

Yeah.

### You (2026-05-15T02:10:05.980Z)

So what I want him to do is, yesterday I gave her a few alternate few She tried very all tambourle still. So, but then she did say that the previous tablet that was actually from Air Force works for PO, Try that one first. Okay. Okay. One

### Guest (2026-05-15T02:10:23.879Z)

Sorry? What I was saying?

### You (2026-05-15T02:10:25.460Z)

Why are we using a different template when pushing to SAP? What happened here?

### Guest (2026-05-15T02:10:31.319Z)

Because okay. So, basically, the one that m four sent to us and the one that we put to SAP is the same template. And we should use that.

### You (2026-05-15T02:10:42.300Z)

Yes.

### Guest (2026-05-15T02:10:43.869Z)

But last time we wrongly use the enforce the we we used the template that we pushed to enforce.

### You (2026-05-15T02:10:48.960Z)

Okay.

### Guest (2026-05-15T02:10:51.479Z)

That's why we are we are doing back right now, which is

### You (2026-05-15T02:10:55.910Z)

But is then with more?

### Guest (2026-05-15T02:10:55.939Z)

using the SAP one. But

### You (2026-05-15T02:10:58.070Z)

Producing water.

### Guest (2026-05-15T02:10:58.209Z)

sorry?

### You (2026-05-15T02:10:59.030Z)

For the previously you mentioned that the PO reference was captured, right, in SAP? Yeah. Yeah. That's why it's them with, you know, that's that's why I'm asking her.

### Guest (2026-05-15T02:11:04.499Z)

Yes. Yes.

### You (2026-05-15T02:11:07.640Z)

To try to change that field name.

### Guest (2026-05-15T02:11:09.619Z)

Let me ah,

### You (2026-05-15T02:11:09.720Z)

With the try. Does it Does it

### Guest (2026-05-15T02:11:13.869Z)

me change the field name. Right? They directly cannot see the order in SAP. So I am getting enforced help to check whether is it like the outbound folder issue or what is the issue? Because the client, they don't have the access to the outbound folder.

### You (2026-05-15T02:11:29.320Z)

Yeah. No. I think as long as we

### Guest (2026-05-15T02:11:30.909Z)

Only enforce will have.

### You (2026-05-15T02:11:34.190Z)

because this thing this thing came from Amphoresight. So first thing, especially with all these PDFs, because sometimes there are certain artifacts in the PDF one. The header or whatever that are I mean, in your viewer, cannot see one, but when you open that thing out, because the CSV when you open the CSV, there may be there is some delta there that might use the agent to just do a comparison. Yeah.

### Guest (2026-05-15T02:11:59.329Z)

Yeah.

### You (2026-05-15T02:12:00.140Z)

See if can spot those things. Yeah. Because if this one does not work, we have no choice but to achieve if we jump to to SAP. That the b API can be customized and the PO that they see on the UI must be a user driven and defined field. No. But it it won't be okay because I like, for when they push to SAP, they also use a certain format where the build where life orders PO number all is working. So

### Guest (2026-05-15T02:12:27.749Z)

Yeah.

### You (2026-05-15T02:12:28.470Z)

we we meet in the same format Should work. Then it should work. Yeah. So the question is why

### Guest (2026-05-15T02:12:30.229Z)

Yeah.

### You (2026-05-15T02:12:32.800Z)

working only. No. But there is also another concern that we need to check. That is the SAP number the PO reference that we post in, is that a validation that the PO needs to be in as it refers to? That means if there is a check, for existing PO, maybe because when we test the initial one, the PO was already there. So the reference So they want to check. I think then probably one one take away from this is to try a random PO number that really does not, like, exist. And if it goes in and it works, and that that's the reason That we know that it they do not match. We already tried the number. Yeah. Man. Few few action points. First thing, just compare the first original file that work. Versus the one currently. Is there any formatting differences in the header or something like that? Basically some artifacts there that maybe cause it to fail. Second one is Yeah. Also, if you get from enforce, one of the sample order package that passed the And then you go that is gonna be done. So let's compare it to those two those two actions are you gonna

### Guest (2026-05-15T02:14:16.199Z)

One more thing. I say, the email one, can I test already?

### You (2026-05-15T02:14:25.180Z)

comisión entonces. Then the item

### Guest (2026-05-15T02:14:26.709Z)

Okay. Alright.

### You (2026-05-15T02:14:29.680Z)

matching, you you show one that one software.

### Guest (2026-05-15T02:14:30.669Z)

Nope. Not yet.

### You (2026-05-15T02:14:31.660Z)

So bring up

### Guest (2026-05-15T02:14:36.249Z)

Yesterday yesterday I sent already. Yep.

### You (2026-05-15T02:14:42.770Z)

The one you managed to check. I don't wanna check. Yeah. I So I I suspect it's the it might be the testing when we submit the memory when Yeah. I I also suspect it's the we So you just create a easy way for the product in actually service the the one out. So if there's this the issue, the first thing that we check is that one. Since the one is one of the first rule to actually match and then we will attach it in the loop.

### Guest (2026-05-15T02:15:25.999Z)

Yep. And, did you disable the chatbot notification already? Or any blocker?

### You (2026-05-15T02:15:34.430Z)

As I mentioned the group, I still need to figure out why that happened because on my side, I didn't like send the webhook to this I bought. I mean yeah, I just sent email notification. You sent email notification to the music itself. To the user's exam. Right? To the email. Oh, yeah. To the user. But I'm not sure right now why does it like go to the chatbot.

### Guest (2026-05-15T02:16:01.289Z)

This one, I think my site probably got pulled some notification then. Ah, meaning in the DB, in the ERP DB, got the notification. That's why when we pull

### You (2026-05-15T02:16:12.540Z)

I think why do you need to filter out the email

### Guest (2026-05-15T02:16:14.929Z)

we

### You (2026-05-15T02:16:17.150Z)

notifications? Yeah. Also, here, Sure.

### Guest (2026-05-15T02:16:30.609Z)

don't know. This one, I just removed the polling in here. Because my Diane will send my outside. Don't need to pull.

### You (2026-05-15T02:16:38.580Z)

Because if it's a email type, it wouldn't call it wouldn't push it to the chatbot, the notification. So your middleware will not receive it. So if you have a polling to get notification listing, you need to choose the app

### Guest (2026-05-15T02:16:55.959Z)

Wait. Sorry. Is that what what is the issue here? If I'm not mistaken, the issue is

### You (2026-05-15T02:17:00.150Z)

Oh, no, no, me sale en

### Guest (2026-05-15T02:17:00.219Z)

stable don't have quotation. Right? But then they are receiving the

### You (2026-05-15T02:17:03.470Z)

it's it's about the email notification pipeline.

### Guest (2026-05-15T02:17:05.509Z)

I see. I see.

### You (2026-05-15T02:17:06.120Z)

So if I can, if it's a system notification, it was sent to the chatbot, but if it's a email notification, it will only send to the email channel only. Direct, basically backend direct send the email out and it

### Guest (2026-05-15T02:17:18.899Z)

I see. I see.

### You (2026-05-15T02:17:21.020Z)

So this one is already working already on. What we suspect is the issue is that have a cadence to pull the

### Guest (2026-05-15T02:17:29.249Z)

Yep.

### You (2026-05-15T02:17:30.530Z)

notification listing. Right? So the notification listing Consists of everything. Consists of everything. The system and the email notifications to this user.

### Guest (2026-05-15T02:17:38.739Z)

Yep.

### You (2026-05-15T02:17:40.140Z)

In that, pulling, you need to exclude the email notifications.

### Guest (2026-05-15T02:17:41.919Z)

Yeah. Yeah. Yeah. Yeah. I just saw it's down as well. Yep. Yep. Let me check.

### You (2026-05-15T02:17:48.030Z)

Yeah. Just that. Just check just check that. Yeah. End bridge. That one or using something else? Right. Box. Out of the box, but we just need to need configure Yeah.

### Guest (2026-05-15T02:18:38.759Z)

One more thing. The assign onholder on hold order to credit controller. That one, you already done?

### You (2026-05-15T02:18:44.950Z)

No. Not yet.

### Guest (2026-05-15T02:18:46.509Z)

Okay. Also, by today lunch, is it or what?

### You (2026-05-15T02:18:49.880Z)

Yeah. I can do, like it's a quick way. I can do it. Okay?

### Guest (2026-05-15T02:18:54.359Z)

Okay. Alright. Yeah. That's all for my

### You (2026-05-15T02:18:56.090Z)

Mhmm. Are we having enough test case and test coverage for Tuesday? Paul?

### Guest (2026-05-15T02:19:09.479Z)

¿Sabi?

### You (2026-05-15T02:19:10.330Z)

For paper on the item search bracket and then the latest chatbot fix for the two the two two execution one, he needs to check with me. So but that one once he checked, it actually affects all the clients. Okay. Yeah. Yeah. Yeah. The item search the item search and also the confirm query, Yeah.

### Guest (2026-05-15T02:19:34.659Z)

Okay.

### You (2026-05-15T02:19:36.670Z)

I'll just sign on on the DIY ventures. Do you already check with them if they are okay with the delivery, strictly stop one to be slightly later. Just ask that. Top top top we have this up. Yeah. Because say we are making an improvement from the previous version to the current one. So we can deploy everything up to delivery node first. But delivery treatment, delivery stop, and driver app will come a bit later. End, and then we just have a smaller session for the for the till end. Yeah. Yeah. So let's start do the three days one with these guys. So once the questioner has filled, all this setup, the time starts. To schedule stage. Right? So so we need the prep work to be ready for K. Okay. So I think on the accounts, that's about the account. So in terms of today, later 11:00, we also have the Right? For those bigger ones, which is the tickets. But today I also That's too. Now he's doing lunchtime. So today I will also have someone new stuff coming, like, to be to be assigned. So I will do that in the session. So there'll be some new interesting stuff. You can see our list there is already there. But I clearly have a bigger list in in my in the top. So that's not that's not work. But I guess those are actually pre req for the the the Yep. Oh. Just one. The flow hosting to the integration for us is that I I I I believe the one Okay. K. If if the if the bleed is clearly, I think really make much of a difference. So because, you know, they this is still part of high priority. Is to have that meeting to talk about the important things that still need to be done. So just move in a bit after lunch. K. Okay. So prepare tech guys, prepare your updates and also prepare to receive new stuff. Yeah. So, as a body, we'll talk about it later. Anything else before we end? Any blockers, anything you need to raise on? Yeah. It's fine. Just fixing the bus. So, like, Bye-bye. Okay. Okay. Thank you, guys.

