---
granola_id: 514f1629-3596-4830-8446-d64584a9422a
title: C1/C3 gap analysis - Transcript
type: transcript
created: 2026-05-04T09:33:09.954Z
updated: 2026-05-04T10:29:38.492Z
attendees: []
---

# Transcript for: C1/C3 gap analysis

### You (2026-05-04T09:34:32.807Z)

Oh, Padilla. Yeah. Hello.

### Guest (2026-05-04T09:34:52.385Z)

Who's still in office or everybody is on the go? I think Everyone is driving, is it? No. Me, Garrett. And are still in office. I see it. We are working from John, how are you? Alright. Alright. Back over. K. Who else is joining? Ok. Okay. I think it's when you all had it last Thursday. Right? You give me, like, a quick summary what happens and a bit more in detail last? Also actually about to try. Echo. So so so, yeah, let's let's start with it. Let's do a quick one now. Yep. Gariff or yeah. Gariff, you wanna brief? Ivan what happened last week and then what are the gaps

### You (2026-05-04T09:36:07.927Z)

Meaning, the cat is

### Guest (2026-05-04T09:36:11.955Z)

Gary, if you all might not open.

### You (2026-05-04T09:36:12.657Z)

Okay.

### Guest (2026-05-04T09:36:15.785Z)

Yep.

### You (2026-05-04T09:36:16.457Z)

Based on the last showcase showcase we have, right, mainly the gap is the I think the extraction extracted data is actually is not least in the listing of each tax certificate.

### Guest (2026-05-04T09:36:35.875Z)

Karen, sorry to interrupt. Do you mind, like, if I explain the

### You (2026-05-04T09:36:40.967Z)

Yeah.

### Guest (2026-05-04T09:36:42.665Z)

Alright. Okay. So on my side on the end side for the the rest files for the get certificate certificate details. I okay. In the response, I have to erase one for certificate reference, and one is another one is the extracted data arrays. So I separate these two. Okay. So for so for actual certificate, create the certificate reference. So, yeah, I can create the records inside the certificate data. So only as checked the data are details. So there is, like, some miscommunication in where I never I'm okay. Front end? They will only use the certificate reference. They use the extracted data from your arrays. Okay. So case, the data for upload get certificate details because no fallback to the extracted data if the data is not available in the certificate reference. Okay. So it's just a missing key in the API Yeah. In the my response Okay. I mean, so okay. So this is the the misalignment of how should I structure my response and also what front end and also chatbot expected. K. So k. What the plan on the end side, what I have right now is just to also create the certificate reference for those extracted data. But then I won't create everything. I just choose some some to create. Some basic example, the the the hash spot. What else? I'm sorry. So the address. Yeah. The address. Your what mapping Is it it mapping? That means you need to tie to a mapping in this, ticket reference. Yes. Yes. Yes. I need to do mapping. So it's like You need to do mapping. Because the I think what's what we are missing previous stages the certificate reference should be the one that is the user can update and also the upload PDF will also store the data inserting reference. And then that one will be the one that is used in the text reference logic, right, in your SO, in your Right? I think, like, if this for every inside the certificate refers it, actually, this is something I miss It's actually easier for the query to update the database to match during the validation. Yeah. Or else I to Deborah and use callback. So that means certificate reference is to have the link to the link to the company, link to the SO and all that. No. No. Right now, deep it just raw data. I won't do any validation during for at certificate stage. Where I I can query based on the reference key lab, basically, reference key, reference key. So so this is key reference is a key value pair. It's not tied to a No. No. No. It's not. Oh, I also, that means now you're just storing the JSON create the certificate reference key. Yeah. I create. I create. No. I create. I I create You you always use that. Know what the dotted notation, the part. Items Okay. That that is by and then the value is the value Okay. So that means, Karan, the gap on your side is that after you extract, get the extracted data JSON populate the certificate. I populate. I populate the certificate first. So the things that I did was I, return as another array called as tracked data. I I think you saw the JSON Ah. Ah. Ah. So Actually, because if you if yeah. What what you say is contactless. So, actually, if you already store everything as a certificate reference, you don't need to store the JSON JSON also because can just reconstruct based on the certificate reference. Yeah. So, actually, everything should be solved from the everything should be saw in the certificate reference file, and then yeah. Actually, actually, you need the Everything can go into the certificate reference, and then that makes sense. I mean, like, I mean, like, much have this data just to solve all the extraction Yeah. I I think I understand it. Just for audit. Yeah. Just for audit trails, like, slide. It's supposed to work that way. Okay. I think we should understand really. But then what's the biggest base of what I heard from? Jamain or whatever over the weekend, seems like it's quite a big misalignment for some reason, but this one doesn't sound big. It's quite small. Right? I don't know how everyone else this issue now. I think it's just a delay on the

### You (2026-05-04T09:43:09.167Z)

Vis, comma,

### Guest (2026-05-04T09:43:11.545Z)

delay on the yeah. Let's comment that delay on the deliveries because this issue like, surface out until they want to. Implement and also showcase So I think that's why Jamin mentioned it in that way. See. Okay. So it's not such a big issue. So that means everything else like, the enforcement of the SO based on HS code, this one, that one, that one, all tested Okay. Working, man. Yeah. Just only this one only. Yeah. This one is just more on the implementation when the chatbot and the front end use the endpoint it will be a bit clunky now because previously, got the extracted data and also got the certificate reference where the chatbot and front end, not really. Can use it. I see. I see. Then, yeah, that's what we we saw. I mean, last last Friday, discussed, and then I think already create this plan for it. Which it will be something like if there's a PDF that is extracted from either way one, Fariba still gonna save it extracted data. But she she will only take the stuff that she want to map which is used in the s o and c p o one, put it in the certificate reference now. Am I right on this, Maria? Yes. Correct. Correct. Yeah. So she just do one more step every time if there's a update I mean, from a PDF one, it will store in extracted data and then also put it in the certificate reference. So Then if a manual created certificate, they would it wouldn't be have it wouldn't have a certificate data anymore. Okay. So for major manual create certificate in order to, like, match up on the value Mhmm. I kind of, like, for the reference fee. Yeah. Yeah. Yeah. The the the should be the same as the one that you used for For extraction. E d f. Yeah. The the yeah. Correct. I I did the but then depends on front end whether you wanna use that as a drop down or yeah. It depends on your design. Okay. Wait. Why since talking about the sales order one right now. Right? Because for my validation on front end side, how we determine whether the item is eligible or not is that we're using the HS code. So is it possible for you to read since, you know, when you create the SEO, you already begin all the info regarding the item. Right? For each individual item, is it possible for you to include the each of the In the the get SOD to response Yeah. Like in the get create and I mean, like, in the create you mean, like, in the response kind, not in the input. Right? Yeah. Yeah. In the in the response. Yeah. Yeah. Yeah. No issue. No issue. Okay. This one, you can totally doubt. But one thing I think from the comment for Haikawan, one of the issue is Haikong did mention the extractor data need to purposely remove it. You can still return it. Is there a comment I think I I I play I include independent error, sir. Then I'm going to remove it. I mean, your your you can you can no need to remove the return if that if that particular cert got cert data one you can still return it as a JSON just to show just like the CPO, we got the extracted data show it the the piece Alright. For for now, I gonna right. I mean I mean, yeah, the previous you mean the previous That speak that I have another risk time. What if one is references and another one is So I just use the same format. No issue for end. Yeah. I mean, is it okay. Sorry. Can you can you repeat that again? For the extracted data, I just in the response, I just use the same format. Of what we have right now. Okay. Good. Okay. Yeah. Okay. But just to clarify on this one so we don't misalign. When you say that you retain the extracted response one, right, the extracted data, Mhmm. We're not touching that at all. Right? Like, front end chat bot, we're not touching that section of that area Alright. We're creating or updating the certificate. No. We are not. Yeah. It's just a toon joke, like, the c p o one people. Yeah. Okay. You can use it, and then I think chatbot don't don't even need use it. Because chatbot then yeah. Go ahead. Yeah. Hi, Carl. You plan to show the extracted data just like the CPU. Right?

### You (2026-05-04T09:48:14.787Z)

Yeah.

### Guest (2026-05-04T09:48:15.905Z)

Yeah. But in that case, I think Firehaw might have to change the structure of the because from last time, so it's like it's, it's not a JSON It's an array Yeah. Yeah. It's different. Dot notation. Yeah. Oh, so the Ariana, do you think is it? You can reconstruct it back to, like, the JSON that that way send fast to you. Oh, Something other. Yeah. Because I sharing because for the CPO one, my extracted data, I actually save in. Like, your the way you save, you save it as, like, key value. Right? I actually just saved the JSON Whatever the the way pass back to me, then I I match it to my certificate reference So you don't need to do the all the passing things to kind? Ah, so I don't even need to have a table just to sort the set data. I just saw the JSON. Yeah. But your way of doing is more cleaner. I mean, you got more the enough I mean, the data types and more. Yeah. Okay. But by the chance, see are you able to reconstruct back the JSON from the SIP data if there's there's some Okay. Yeah. I think this one, we should align now because one of the bounty tickets is like the attachment intelligence one. Right? So this is gonna actually dictate that. Because For? On the CPO side. Right? Yeah. Because eventually, this will need to be So so since we know what's ahead, so it's a good, you know, time to have this discussion. So for I Like, CPO side, we as a JSON because for the CPU side, we know that the values in the JSON will already be mapped to objects on the CPU layer. So you have the wrong expected data, and then from the raw data, you will map it to the to basically, based on certain mapping logic, you map to the CPO columns already. Yeah. But then I think for for the certificate reference part, because there isn't, like, a dog type to map. So on the certificate side, the initial idea to use the you all can still hear me? Yeah. Yeah. Yeah. Can Can Thank you. Yeah. And and Yeah. So on the on the side, the ID initial idea to use the use the certificate. Right? We store it as a then any update or writes, to because when they extract, they may change certain thing or something Basically, some edits to the to the to the extracted data need to update the entire JSON b payload, and that's not like, the most efficient because then on the front end or interface side, if the user say let's say, the extract item number 20 from index. This table, this item, this thing change. Then on chatbot, side or the front interface side, they will need to update that value maintain the entire AJSON payload in memory. Oh, no. No. No. Because I think there's something we misunderstood is because right now, the extracted data I mean, got another whole table just to store the set data, which is Right. What yeah. What so the middleware passback like whatever PDF extracted passback. Right? Correct. Correct. That one actually can be just a JSON b because we store that, and then we help them map to whatever is in whatever they need to use in cert reference So if they insert reference, there's no nothing. Update them. Cannot I mean, right now, Pariha's gonna add that mapping already. Sir, reference sir, reference is purely key value pair, Anima. Uh-huh. There there is no tie to the to the objects or doc yeah. No. That's correct. Correct. So it's purely just a flattened JSON Mhmm. So instead of JSON with the nested audit trees or whatever, you flatten everything into key value pass, and then the key is a dot notation of the part of the hierarchy of where that object sits in the JSON Correct? Yeah. So I think previously that the decision for this was basically, you can do updates on to that certificate. So for example, in this one thing that based on the dotted part notation, you can just update and it updates just one row and a small payload. But if, let's say, we saw the entire thing as a JSON b, every write is update onto this big JSON b data payload in the database. You know what I mean? Yeah. Because on CPO side, you do not have a doc type to map. So you don't work on the mapping layer. You so, basically, any changes to the extracted data Because the extracted data in CPO, the user really touch it. They don't really correct the extracted data because there is no use case for that. But in the certificates, because it's not like extract out, you just flash what you extracted because everything is string mark. So then the user can also update if the extraction is wrong. Because in CPO, if you extract wrong, it doesn't matter because they would need to the wrong corrections when on the mapping step, not on the extraction step. Now for the CPOs, on the certificate side, there is no mapping step. On the extraction step, they will make those changes already. Because if the string is wrong or something is wrong, can directly edit the data itself. But Yeah. Yeah. But but for for two two three tables. One is certificate. One is data, and one is reference. Where both of them is, like, like, for example, if there's a PDF coming in. Right? It's gonna store in certain data, everything first, for example, you got your HS code, you got your customer, you got your company, all those stores as string key value string in certain data. Then only she map it into cert reference. To the stuff that she need to use in. SO and CPO. Oh, so just another thing you're talking about is the data. The one, the platter one, it's called the data. So so yeah. So it's experts. If they want to if the client want to took out all the extracted data or like, if the company or the HS code affected wrongly. Right? They should only change in the third reference. Right? No. Because Because search reference in this case is a tie to a doc type. Or doc name. Right? So one Oh, sorry. The file are that one. So what is in the third reference is the customer or, like, the So it's tied to entities. So what so so then what was talking about this data button? Right? So, like, it's not said one item has a HS code. Right? So so in in this certificate, what we are extracting is not really SKUs, but actually line items that have a HS code. Right? So let's say in the second table, row number five, the HS code wrongly. Right? So then the user must be able to go and update to the correct one. So which is modifying directly the set data. But they already modify in the set reference as the as because all third moments because there's no tie. The after that, we extract the HS codes. Right? The row the each row, there is no linking. There's no automatic mapping here. On the certificate. The thing that will appear in the certificate reference table is because, what will be what will appear, confirm this company. Confirm this customer. Yep. Okay. The items were not They need to auto they need to manually to the item. No. No. There there will never be a linkage to item. Certificate will never link to item because this enforcement will only apply when the sales order submitted. Because Oh, yeah. Yeah. Correct. Correct. Alright. So you cannot fill in the items. Based on HS code. Because what if the HS code change? Of the item? So then you need to link again. Cannot man. So you cannot maintain a link the certificate to items. So you see, for the c one, c three, a 57 case, we will never be able to maintain that link. So the only thing that you can directly link is after you extract the search, you can figure out who the customer is can figure out which company this thing belong to. That's all. So then, last year, I go and create a sales order. Right? Uh-huh. So after I create a sales order, there will be a new entry in the reference that is tied to this sales order also. Because the sales order submitted already, then it will be part of the certificate reference table. Like, this certificate was referenced in this sales order. But the items are never referenced. Because the items is not a one to one time. It's based on the SKU code. So at the point where the sales order is submitted, the sales order on submit validation will query the item database or the items inside this sales order Which one has the matching case score down they will enforce? Like that, I think, is totally different with Correct. It's a different it's a it's a completely different handling of of Yeah. Of this of this particular document. Mhmm. Yeah. Let me think. Yeah. That is so if so then I think you like that? Like, this is not like what we discussed last Friday. Right? Yeah. You follow, right, what we are talking about? The thing is okay. Right now, is like why why I might say it's like whatever changes whatever update is going to go to the To the data. To data. In this case, there is no for me to to also create the certificate reference. Also, the reference got used also. For what? The the one that just mentioned? So so I create dessert. The first I create dessert. I create 10 s o. Then the certificate reference table is that is for that? Yeah. Yeah. Yeah. Yeah. Yeah. Okay. So the issue right now okay. Right now, I'm not sure how the validation is done to front end and also check for okay. So let's take during the validation, for for example, we want to check whether Fuck the front end chatbot first. You need to solidify the back end understanding first. Ah, yes. Back end solid. You don't need to care about the interface. Right? So the the back end convention is okay. Yeah. Okay. So the I'm gonna do is like, let's say, just for his Right? Okay. The I don't need to, like, create the hasher's code, the certificate reference. Bye. Right now, it's going to store the the certificate data I need to query the certificate data to check whether the the the hashes good applicable for this certificate ID. No. What? Why why would you need to do that? When do you need to do that? On submit? Yes. On submit. To validate whether this h has put this item applicable or not, for this certificate. Correct. Yeah. Okay. Yeah. On submit, valid you're on submit validation. Yes. Okay. Okay. There is how I handle my validation initially. Okay? But then, like, this issue comes I mean, like, not, like, little there is because last time, the there is some question regarding how chatbot in front end Need to do a validation. Right? Yes. Yes. Yes. Okay. So these are quite straightforward. Okay? So on the okay. So let's talk about it in the business. Right? So when both front end and chatbot is on the order details, let's say you're working on the order. Right? Okay. So at this point of time, in memory, what do you have? You have the order payload, which contains the order config and the order items. Right? And then each item has their own attributes. Right? Correct. Right? Brian? Brian, chatbot, guys? Yep. Yes. Okay. So this is in in memory. Okay?

### You (2026-05-04T10:01:26.487Z)

Yeah.

### Guest (2026-05-04T10:01:30.085Z)

So then let's say a sales order with no certificate start yet. You just have this thing on its own. Right? So then your certificate memory is empty. Right? Nothing inside there because there's no certificate. I so nothing happens. K? Alright. Alright? So then let's say when this sales order get a certificate tied to it, so that means the user pick last c one c three or whatever. Right? So now you have two bytes of memory. One is one is the certificate payload. Okay. So then the certificate payload will be different according to the certificate type. Alright. Alright. Right? Okay. So now this is where the front end on the interface side you will need to implement a similar validation or enforcement just like how back end is doing. Okay? Let me tell you what back end is gonna do first. Okay? There's two points where back end is gonna do something. So on safe, we're talking about on saver. So on safe, if there is a certificate type, right, the the back end will override the text of the items that are qualified for the search. Okay? So what that means is, let's say, order a item a, item b. Okay? Certificate a, try to order a, certificate a only apply to item a. Right? Kevin, can you allow my fireflies to come in? This one is like, we already talked don't know how many time It's like, I'm in the car now. I can remember. No. This is for everyone My my friend already, like, It's good Good. So so so you all need to align on the on the simulation. So you see now what I'm giving you is a simulation of the data. Right? As long as all three of you can agree on this simulation, make sure it applies according to that simulation. We will not get it wrong one. Right? So I think when a is is probably you all talk about ideas. But there's no, like, test driven scenario about it. So now what I'm saying, like, this scenario, right, a test driven thing here. So so so I'm laying out the test cases already. So as long as we are aligned on these three things. Right? Basically, it becomes a spike for for for for the delivery. Right? So order a, item a, item b, certificate a, item a. Certificate a, item a. Correct? When I save this thing, right, so so let's talk about scenario where the circuit does not exist yet Right? So it just order a item b item b. Item a, item b, 6%, 6%. Tax. Okay? When I save this thing, because there's no cert, nothing happens. Right? When you query the item details again, 6%. Item b is 6%. Okay? No Drawer. Order drawer. K. Now I linked a. Set a apply to item a. Item a tax rate 0%. So at this point of time, I see. Okay? I see. There's a payload of a, item a, item b, 6%, 6%. So at a, item a, 0%. Okay? When I save this thing, this payload, the back end validation will enforce that when I query the data back again, of order a, I will get order a, item a 0%, item b 6%. Or they still draft. Yep. Correct. Correct. Okay. So one is back end enforcement. Okay? Because on safe, the back end will override that data from item a 6% become item a 0%. Okay? So this is the final gate callback. We talked we're just saying. But on the interface side, we don't want the case where the user put item a 6%, item b percent. With a, and then they say then when they get data back, say, hey. How come my data changed? Yeah. I mean, because the back end at the back end So when you refresh the page, you will see that suddenly the item a 6% become item a 0%. Right? Don't want a scenario where you save ready after you save your data change. So on the interface side, it looks like k. What the fuck? Right? Not accurate. Right? The whole point on the front end and the chatbot to do this validation also is to proactively enforce this thing. So that when the user is working on the thing before saving, that that item a 0% is already enforced. Correct. Okay. So in memory, you got your order a, item a, item b. Certificate a, load. Right? Yeah. So then what you will need to get from the back end team is is the c one validation behavior c three validation behavior, and a 57 validation behavior, and mimic that in the interface. So that means So they don't need so they need to query I mean, like, call an endpoint Okay. No need I want no need to call no need to call an endpoint because at the point when you call safe, right, your back end suda enforced. Okay? So then this is the this is the interface level logic. Right? Or the chatbot two layer logic. Where let's say, yeah, let's say, this is the scenario when when the interface need to do it. K. So order a, item a, item b. Okay? 6%. 6%. Yeah? This point, no certificate yet. Right? But at the point when the user pick the certificate, that means at the time they click, this order must link to Right? So at that point of time, the front end will get the set a payload inside memory mark. Right? Or Jabbosi also get mark. So when this set a gets loaded into the front end interface memory, haven't clicked save yet. The front end itself should already based on the HS code, tie. Okay. Item a, item a, apply. Already override that data and show a visual cue to the user that say that okay. Hey. You know? This item was you know, after linking this this item was valid for tax exemption. So I've, you know, corrected it to 0% for you. Correct. Correct. Because that's exactly what front end is doing right now. Exactly. That's all. And it's done. I think I can right now is the issue is on the third three bit already. Yeah. I'm creating the 35 right now? Yeah. Right now, the main issue that we're having right now is that the the data or the memory for the HSR, the the thing we require for validation is separate the into two sections. What what is separated into two sections? Okay. So in like, currently, we're based on our showcase SaaS

### You (2026-05-04T10:08:33.947Z)

So in So

### Guest (2026-05-04T10:08:38.355Z)

was that when you create manually, the data of the certificate is under the certificate reference. But if you upload the certificate, it's under the extracted extracted data section. Okay. So this on the back end API side, need to fix that. So make sure both entry points are consistent. Yeah. But I think you don't need to do the set reference mapping already, which is when they wanna create, update the certain certain data. Right? No no one references that mean, got what I mean? I thought for how do but Standardized the response. No. I mean, if if they create manual set. Right? Uh-huh. Everything is gonna store into cert data. If that Oh, also set data, not set reference. Yeah. So everything they create manually for a set, it should go into set data. Upload PDF when middleware come back with sub extracted data, should also go into certain data. That's all. Okay. The certain reference, I think you should let them share that. From what Ivan said, it's just whenever it the cert is you other cert references are. Right? No. No. I mean, you can you can show it first, whether we want them to be able to relink it and all that is a question for Okay. Super question right now. Or whatever. Okay. So, basically, the refer references right now are kind get the data from the from the extracted data. Create create certificate. API guide you need to pass the customer. Right? Correct. So this Yeah. Right? Yes. So then then this one is different based on satellite mark. Is c one, then you got this, c three, then maybe a bit different. If it's a or whatever, gonna look a bit different now. Right? So that one is dictated by your And just in time, enum. Correct. K? So then the second entry point of things going into your set table is on the business documents. Right? Because right now, these three three subtypes that we are dealing with will be tied to sales order. And Yes. What I say is create. Mhmm. I create my first sales order and submit. So this the cut back end on the on submit to new validation. Right? Mhmm. As long as the validation pass, will also create a certain reference to this s o. Ah. We link the SO with the to the search? User to the reference. Then okay. I didn't use the dynamic link. So we Ok. Create the link on the So I think level. Yeah. SOI yeah. Yeah. I think you should do that from the SOI level. Correct? Uh-uh. Okay. Dynamite link table? If you are already using the dynamic link table, then then this table become redundant. Okay. Okay. Alright. So, basically, right now, I just need to query the certificate data to return the response. And then front end chatbot create on the part where whenever they are in the certificate page, they wanna make some adjustment is touch the data Yes. Yep. So there's no more touching the certificate reference size. Keep on the certificate reference will still return to show something. What what they're sending to. Okay. Just to like, right now, I thought the validation, like, like, my job not like validation. Supposedly, we create a certificate and then let's say we try to create another one. It's going to we we strike as a PK. And then we try to extract the same certificate again from I was thinking when Chase supposedly, they update their existing certificate. That is not yet being implemented. It's gonna create a new one, is it? Right now, it's gonna create a new one. Not going to update the existing one. Okay. So this one La imagen intermediary step last. I'm gonna replace or what. Direct replace, I think, a bit dangerous. Yeah. So there needs to be, like, a staging area for certificates as well. What does it mean by state summary? That means you need to manage the lifecycle of this thing. So that means it needs to be a submittable doc type. Yeah. Actually, certificate need to be a submittable doc type. Because why is this extracted this certificate? Right? Then I already start using it in my business document. So it is not a submittable doc type. On on the fly go and then he fucks up. Whatever my You get what I mean? Yes. Yeah. Yeah. Yeah. I think as long as you turn the job type, into a submutable doctype, then then on and then we just want to see. Actually, the enabled amendment. Yeah. Yeah. The one that is in the one that can be the one of listing the that is this is SO and CPO will be the one that is submitted only. Then you any, like, on the fly draft also is used in SO then mismatch or something. Yeah. But those So every time they are to create new like, But they'll create new draft? But listen to the alright. Alright. Okay. Okay. Yeah. Yeah. I think I found you guys. Right? This one is your own doc type. Your own Ah, yes. Yes. I believe I believe. The submittable Yeah. Yeah. Anyway, just need to have some APIs for the also, your update become the safer, then you just need to have a submit, the man and cancel API then. Yeah. So the cancel one, right, you can only cancel if there's no link to a any business document. The other linkage then you cannot cancel. Then the the another option is Correct. Okay. But then later we need I will like okay. I don't know whether we want to discuss now Like, but condition Oh, just allow them to amend because when they when when when we amend this thing, Mhmm. What we call this the main point is to have a audit trail for this thing yet. This thing. Yeah. Yeah. Even though they even though it's already, like, linked to transaction the I will I should be allow them to still do their Amazon Alright. We don't wanna have too many built in logic when you know, we we don't know what whether it's needed yet. Yeah. Okay. Alright. Alright. Uh-huh. Okay. Okay. Fred and and Chip, what you guys like Michelle I'll probably have to, like, look at the structure for me to fully understand what what would change. Yeah. Yeah. Basically, like, I bring your Bruno to my child. Usually, dang too loud and maybe there are some document Yeah. I mean, the sample response and request. Yeah. Yep. Yeah. Wait. So the response of the get certificate details will be different with the one online Right? So there will be certificate data and references. Right? So data is the one with the HS code. No. There won't be there be any references anymore. No. No. But the reference still gonna show. Right? It's just a to this Yeah. Yeah. Okay. I just mentioned Yeah. Just the shorting for front end and chatbot if they wanna see this previously is reference to what documents or what customer, like, on the reference It's up. On different. We we are not going to use certificate reference table at all at all time because I already, like, link the document create any link to the certificate to item customer accept for their I didn't get it. So, okay, Sven. But you should still return a key of the references but it's just querying from the dynamic link table. Kapi, you mean, like, I need to link the customer customer when you get the get the certain details, the payload should include the references of this cert to whatever other doc types. From the dynamic link table. That's all. Customer, but I can create link you got it. Ah, yeah. What you said, right now, it's mean, just document JI create a link. For customer. Customer company? Customer and company. I don't The parent. But then let's say some document, some certificate customer Some certificate customer c one c 3. Sorry. C 3? No. That's it. That's it. It's a set. Halal son to that. Yes. Yes. On on the main parent table, have customer. It should just be company. It should Okay. Reference to Ah, the the table also. Have the I do like because it's already there now, and it's before I touch this for the 100 company column. Yeah. It's how it used to company. Yeah. But the customer column is not. Oh, so just for customer obviously, I can't company needs to be there, but the customer actually shouldn't be on the parent table. Should just be part of the timing. Yeah. Some some yeah. Some difficult just to show it. AI Yeah. Just like my child, this is child is Ok, so endpoint response will look like the one online. Is it? Right. Este No. Juan, María, yo I think, clean up the final output payload then everyone can just Okay. Okay. Alright. Wait. Before earning, just to clarify, this is our our top our topic for me. But for CPO, right, we already talked about icon validation on SO just now. But are we enforcing the validation on CPO? Some Yeah. Some is CPO. Some is CPO to SO. We just create routing.

### You (2026-05-04T10:22:21.117Z)

Yeah.

### Guest (2026-05-04T10:22:24.935Z)

Yeah. It will create draft. But I was just because, like, right now on front end,

### You (2026-05-04T10:22:24.957Z)

Yeah. Yeah. Yeah.

### Guest (2026-05-04T10:22:29.545Z)

we only implement the item validation on the s o on s o because Correct. Correct. Only on s o level. Okay. So CPO, there's no item validation. Right? Yeah. There's no Alright. Alright. Thanks. Anything else? Nope. Will the Garrett understand everything or not? Yeah. Product side, Jared, you also might need to and let's try to understand the flow of

### You (2026-05-04T10:23:04.147Z)

Yeah. Yeah.

### Guest (2026-05-04T10:23:05.715Z)

how we link the stuff up. Yeah. And, like, I mean, like, it would be even a help for us. Like, you can your list of test cases too.

### You (2026-05-04T10:23:22.577Z)

Because on I think based on your update. Right?

### Guest (2026-05-04T10:23:27.465Z)

Go win. Win.

### You (2026-05-04T10:23:30.127Z)

Yeah. I'll come up with the latest one.

### Guest (2026-05-04T10:23:36.785Z)

Okay. So right now, I thought it's like the commitment date for this for this factoring

### You (2026-05-04T10:23:56.137Z)

About I set it Thursday? Make sure everything is, like, can ready.

### Guest (2026-05-04T10:24:05.055Z)

ok, ok. But then when are you going to start testing?

### You (2026-05-04T10:24:09.307Z)

I think そして バ イデ ン。

### Guest (2026-05-04T10:24:12.225Z)

I mean, when do you expect, like, the endpoint to be integrated and then when are you going to start do the testing, I just need to be clear on the timeline.

### You (2026-05-04T10:24:26.067Z)

refactoring I mean, like, I got how many days you need to have? Backhand side?

### Guest (2026-05-04T10:24:34.165Z)

For me,

### You (2026-05-04T10:24:34.397Z)

Or maybe finance

### Guest (2026-05-04T10:24:38.735Z)

okay. For me, tomorrow, I wouldn't work on the certificate.

### You (2026-05-04T10:24:40.417Z)

Okay.

### Guest (2026-05-04T10:24:41.755Z)

But tomorrow is you eighty for So while waiting for their feedback, I can work on this text exemption. So I'm expecting, like, front a and chatbot can review my API. On the next day and integrate it. I mean, like, if any issue with my any bug or anything, like, we're gonna communicate on the next day. On the day after tomorrow. Okay. So tomorrow you brief us and then yeah. And So, like, everything the integration, as better. I mean, like, by the day after tomorrow, you guys already clear the on how my works, my API response input. The schema, and all. Yeah. I think we just want to know when will you pass to the client for UAT, like, So, like, the hard deadline.

### You (2026-05-04T10:25:39.567Z)

Since we have done a second section we have

### Guest (2026-05-04T10:25:42.985Z)

Mhmm.

### You (2026-05-04T10:25:43.947Z)

now. Right? I think

### Guest (2026-05-04T10:25:47.585Z)

One more thing to add. One more thing to add. Okay. So let's see. Okay. In the case where front end and Jack will also miss out the I mean,

### You (2026-05-04T10:26:04.867Z)

Yeah. Yeah. I know.

### Guest (2026-05-04T10:26:05.935Z)

It's not like later.

### You (2026-05-04T10:26:08.647Z)

Yeah. I know. Because when I test it, I also pay some bug. Right?

### Guest (2026-05-04T10:26:10.275Z)

Yeah.

### You (2026-05-04T10:26:14.617Z)

No better back end of running.

### Guest (2026-05-04T10:26:16.515Z)

Yes.

### You (2026-05-04T10:26:16.637Z)

Yeah.

### Guest (2026-05-04T10:26:20.605Z)

So I think maybe realistically, like, tomorrow, Fighting has to plan out the API and then communicate with front end and back end. Then maybe, Garrett, your site tomorrow, you can start already with the possibly the scenario test case for what is gonna what you wanna test and what's gonna the client use case, how they're gonna use the cert, how they're gonna attach the cert, all those You prepare that first, So when when the day after tomorrow, front end and chatbot is working on the implementation integration, then you can pass I mean, you can have that scenario testing to already. She can already come up with check and see if the back end code or that he she implemented Is it all can cater all the flows that you you come up with

### You (2026-05-04T10:27:11.767Z)

Yeah. Whether we can meet the

### Guest (2026-05-04T10:27:12.995Z)

Yeah.

### You (2026-05-04T10:27:14.547Z)

user scenario.

### Guest (2026-05-04T10:27:17.185Z)

Yeah. So, I mean, if if we wanna make it make this thing work

### You (2026-05-04T10:27:17.567Z)

Yeah.

### Guest (2026-05-04T10:27:21.945Z)

then I think tomorrow, also need to, like, provide the test scenario that

### You (2026-05-04T10:27:25.317Z)

Yeah.

### Guest (2026-05-04T10:27:26.125Z)

to already like, I mean, by end of the day or something. Then after that, I think you still your client, this one, they don't have a heart deadline, is it, or what?

### You (2026-05-04T10:27:40.697Z)

This week is updated.

### Guest (2026-05-04T10:27:45.435Z)

Ya.

### You (2026-05-04T10:27:45.607Z)

So yeah, Tuesday.

### Guest (2026-05-04T10:27:47.355Z)

They're they're on station, is it? But I think but I think we we try to make this

### You (2026-05-04T10:27:49.637Z)

No.

### Guest (2026-05-04T10:27:53.895Z)

this thing finished by end of this week. Like, I think by Friday, it should be

### You (2026-05-04T10:27:55.347Z)

Yeah.

### Guest (2026-05-04T10:27:58.555Z)

this one should be reasonable.

### You (2026-05-04T10:27:58.837Z)

Yeah. By day, I can test it.

### Guest (2026-05-04T10:28:00.725Z)

Yeah. So, I mean, no. Before Friday, you should also test it already. Yeah.

### You (2026-05-04T10:28:05.427Z)

Yeah. Yeah. Right.

### Guest (2026-05-04T10:28:08.095Z)

Mhmm.

### You (2026-05-04T10:28:09.507Z)

You mean, by day, we are ready to

### Guest (2026-05-04T10:28:10.535Z)

Yeah. Friday is already all

### You (2026-05-04T10:28:11.857Z)

client to take.

### Guest (2026-05-04T10:28:15.205Z)

we can set a Friday showcase. Maybe Yeah.

### You (2026-05-04T10:28:18.077Z)

Oh, yeah.

### Guest (2026-05-04T10:28:18.225Z)

No. No. Friday only you test off. Yeah. Before IT, you still already have the testing and then feedback to finance back end chatbot. I think I think that we can learn from last showcase is that we have to make sure that product is able to test everything by Thursday so that during showcase itself, we don't encounter any bugs like last time. Yep. You you try to locate your timeline. Know all of you guys also got different project and some I think need to commit time that this thing needs to be done by Friday, and then we need to allocate the time for this task Okay?

### You (2026-05-04T10:28:40.117Z)

Yeah, yeah.

### Guest (2026-05-04T10:29:01.935Z)

Anything else? I think that's everything good. Okay, guys. Bye bye. Thank you. You, guys. Thank you. Bye bye.

### You (2026-05-04T10:29:12.467Z)

Bye bye.

