---
source: Fireflies
transcript_url: https://app.fireflies.ai/view/01KXCN6PAFJ2VZTNYN6KNBN3T3
date: 2026-07-13
title: Ivan x Gareth Macrofrozen scope lock discussion
speakers: Speaker 1, Speaker 2, Speaker 3
duration_min: 31.89
---

# Ivan x Gareth Macrofrozen scope lock discussion — Raw Transcript

Speaker 1: Understood.
Speaker 2: Which is not a— So how should we—  So like a live one like this one?
Speaker 2: Yeah, desktop.
Speaker 1: Wait, I didn't try this one.
Speaker 1: So good one.
Speaker 1: I'll try desktop app.
Speaker 1: Wait, mine's so different.
Speaker 3: Correct, this one.
Speaker 1: This one from where? You download from where?
Speaker 3: Yeah, yeah, the new page here.
Speaker 1: Home?
Speaker 1: I try desktop app.
Speaker 1: Yeah, that one.
Speaker 3: I don't know, we're doing this someday.
Speaker 1: Guys, record. Okay, so now we're looking through the scope log. So my own SQL that was good SQL stayed the master data, then no problem.
Speaker 1: So here, in AR, recon.
Speaker 1: Because no noise, so you want to bring the mic a bit closer.
Speaker 3: So that it records our—  Okay, so we got the AR invoice.
Speaker 1: So when we do AR invoice recon in—  And in Gem.
Speaker 1: No, not like Gem. It will be different from like Gem. When we do it in Maya, because they are using Maya to do receipt ready.
Speaker 1: So all they need to do is upload the bank statement only.
Speaker 1: Bank statement, payment statement. Maya will extract. So then the—  Which?
Speaker 1: The receipt and all this. They go through and basically—  They will create a receipt in Maya.
Speaker 1: Yeah, and they'll create the receipt in Maya, or they create the receipt in SQL also. Maya sync back ready.
Speaker 1: So all they need to do is reconciliation here for auto recon.
Speaker 3: The matching.
Speaker 1: There will be a bit of some auto recon function. But okay.
Speaker 1: Actually in that part there is a bit similar than with the other one ready.
Speaker 1: So there's clear matches suggested automatically, correct.
Speaker 3: Mismatch level auto posted, correct.
Speaker 1: User can select customer invoice manually, correct.
Speaker 1: Status updates only after confirmation, correct.
Speaker 3: But the user can also, like, auto allocate.
Speaker 1: Auto allocate.
Speaker 3: It's not auto allocate. Manually allocate the payments to the invoices properly.
Speaker 3: Or it's like our in our receipt we can reference which invoice you need to knock off.
Speaker 1: Yeah, correct, exactly.
Speaker 2: Yeah, yeah.
Speaker 1: Now the new app looks nice really.
Speaker 3: Wow.
Speaker 2: Sorry, just—  Sound effects.
Speaker 1: Oh, sound. That's why firefly. Pattern.
Speaker 2: So how should we—  See, last time firefly didn't have these meeting notes, now got ready.
Speaker 1: So, yeah, actually I wanted this feature on.
Speaker 2: So— W  Who knows the desktop app really?
Speaker 2: Oh, this is so much better.
Speaker 1: Okay. Then next, bug price update plus enforcement.
Speaker 1: Okay, so template upload changes Maya price. Okay, so here, the user will have a bug price update template.
Speaker 3: That the user will download and fill up, and then upload that same filled up template back to Maya only, Maya will update the price.
Speaker 1: Okay, then SO uses latest Maya price.
Speaker 2: So what are the documents required for that?
Speaker 1: David or admin uploaded upload price template to Maya updates prices.
Speaker 3: SO pricing use Maya uses Maya source.
Speaker 1: Correct.
Speaker 3: Salesperson adjust only within rules below floor block.
Speaker 1: Okay. For this to be the  For this to be the do the chatbot support this.
Speaker 3: Let's say they—  Yeah, the chatbot will allow us to upload the template, and then they will ingest. So credit limit sales for person submit, okay, okay.
Speaker 1: Salesperson visibility, rep see and manage their own customer cross visibility.
Speaker 1: But when the user upload this, right?
Speaker 3: Yeah.
Speaker 1: The chatbot need to, like, know what—  Document is it, right?
Speaker 1: Yeah, yeah.
Speaker 3: Is it the if the chatbot not so sure, then the user can specify?
Speaker 1: I think it might. This one is include the document intent in this one.
Speaker 3: Yeah, correct.
Speaker 1: Correct, correct.
Speaker 2: Okay, so that was your document scan.
Speaker 2: Okay.
Speaker 1: Okay, one okay,  few updates also.
Speaker 3: Last night I called with their admin call grace.
Speaker 1: They actually mentioned that they use the item historical pricing for their customer pricing.
Speaker 3: Yeah.
Speaker 1: Okay, then we should add the custom item historical pricing thing here as well.
Speaker 1: Okay, so a fresh rate adjustment.
Speaker 1: Okay, so this one, yeah, correct. So this one we also agreed in principle where they create draft SO, pick ready, then once we have the actual weight quantity.
Speaker 3: So they— Then they use o  Then they use our pick weight, right?
Speaker 3: Yeah. So what they will what's missing from this AS01 here is that they will need to amend the order.
Speaker 1: Wait, so create draft as a no, create and submit SO first.
Speaker 3: Oh, submit.
Speaker 1: Confirm ready. After that, after that you pick list.
Speaker 3: Pick first ready. Once you pick, you know the actual quantity.
Speaker 1: So after you pick, then you amend back the SO.
Speaker 3: And then only then you DN DO, then only invoice.
Speaker 1: But you clear the flow.
Speaker 3: Okay, but do they need to, like, upload the pick list to Maya?
Speaker 1: Yeah, they generate the pick list from Maya, then they upload back the pick list to update the pick list.
Speaker 3: So now their pick list is WhatsApp.
Speaker 1: Right, the pick list, David do as WhatsApp message. So now what they do, their new workflow with this AS01 is create draft order, submit the order, create pick list, then submit the pick list, and then send the pick list to the warehouse.
Speaker 3: Warehouse person.
Speaker 1: Right.
Speaker 3: And then after that warehouse person pick ready, they will write the actual quantity that they pick.
Speaker 1: Correct.
Speaker 3: And then this this new pick list with the new pick quantity will upload to Maya.
Speaker 1: Upload. They  They upload back to Maya.
Speaker 1: They will generate the PDF code.
Speaker 3: Ah, generate generate the PDF, but then because the pick picker is a human, so they will take this PDF and go to warehouse pick.
Speaker 1: You can imagine like a checklist like that. I need to pick A20, then I pick or 20 don't have I only pick 19.
Speaker 3: I need to pick 17. Oh, this one don't have I only got 15.
Speaker 1: Something like you can imagine it's like a working document, right?
Speaker 3: They will pick pick pick pick pick, and then after that they come back, then upload back to Maya.
Speaker 1: Because Maya is a system to manage this pick list.
Speaker 2: So—  So from there, and then the user need to update back the order.
Speaker 1: And now can Kevin actually support the upload back?
Speaker 3: Yeah.
Speaker 1: Yeah, can?
Speaker 3: But they also need to test. They need to test, make sure it's good.
Speaker 1: So this is what make sure you have to be in our test cases.
Speaker 3: Test cases of this flow.
Speaker 1: Okay, so in the in the doc for this one, this story must work.
Speaker 3: Okay, right.
Speaker 1: If it don't work, then we say, hey, this hopefully work. We have to make sure it works by 16 Thursday. Ver  Very near ready.
Speaker 1: But last night we got your grace.
Speaker 3: They will use their own pick list first.
Speaker 1: Never mind.
Speaker 3: Never mind.
Speaker 1: But we need to do this flow because we can't ready.
Speaker 3: Oh, yeah.
Speaker 1: We can do ready, so we must make it work.
Speaker 3: Okay.
Speaker 1: So this one you cannot let go. The most important one.
Speaker 3: Yeah.
Speaker 1: The happy flow. This is their happy flow. Happy flow.
Speaker 3: So you must, like, really make sure this one this one working for macro.
Speaker 1: Okay.
Speaker 3: So this one is at top of the list on highest priority.
Speaker 1: Okay, so this one log in by and also expecting this one ready. So it's not agree in principle, but this one is lock scope.
Speaker 3: Oh, right.
Speaker 1: Product catalog. Okay. So over here,  So over here,  what we are going to do is that we are going to allow them to give us the number of templates.
Speaker 3: That they want for their their yeah, their catalog.
Speaker 1: So what we will do is that we need to get the price.
Speaker 3: Basically, actually this product catalog is the scoping.
Speaker 1: Yeah, this this you see this one not here, right? This one requires scoping one.
Speaker 3: So last night I called call them to provide.
Speaker 1: Yeah, but if you don't have, never mind.
Speaker 3: Oh.
Speaker 1: So then this one will still stay in need scoping.
Speaker 3: Not here.
Speaker 1: They are still need scoping.
Speaker 3: We need to get how many number of templates.
Speaker 1: Each of those template is dependent on which SKU.
Speaker 3: Right, because this one one photo got like 20 products here.
Speaker 1: Oh, we need to know each product is what SKU.
Speaker 3: Each product.
Speaker 1: Because because yeah, no, the the product the price in the image tied to what SKU.
Speaker 3: Oh, yeah.
Speaker 1: So that one we don't know. So that's why you need to get need to scope.
Speaker 3: And this is the exact thing that under the need scoping, these are the few questions that we have.
Speaker 1: For this one. So AS02 is under need scoping.
Speaker 3: But last time they just provide their one.
Speaker 1: Their sample image.
Speaker 3: Which is generate from a chat GPT.
Speaker 1: I know, I know.
Speaker 3: But for us, we are doing it differently, right?
Speaker 1: Yeah.
Speaker 3: So this is why this thing is important. You if you don't really know 100%, you need to clarify.
Speaker 1: Okay.
Speaker 3: Because now I think you did some override, but now for call go live correct.
Speaker 1: Your answer is correct.
Speaker 3: But then for yes, for catalog build, but then it still needs scoping.
Speaker 1: Okay, so then you got your credit note.
Speaker 3: Maya accept?
Speaker 1: Okay, we cannot really mirror the invoice number.
Speaker 3: Reference.
Speaker 1: Yeah, correct. So  we need to put a reference reference number to whatever invoice.
Speaker 3: Maya will create a credit note.
Speaker 1: In in SQL as well.
Speaker 3: Yeah.
Speaker 1: So they create in the the credit note in SQL, it will still come back to Maya.
Speaker 3: So both way also can work.
Speaker 1: So I cannot clear about the SCN. It will be a type in Maya.
Speaker 3: Yeah, it will be a doc type. It's just called a credit note. Sales credit note.
Speaker 1: Because in SQL they have two type of credit note.
Speaker 3: Ah, yeah. Sales and.
Speaker 1: Sales credit note and normal credit note.
Speaker 3: Customer credit note.
Speaker 1: Ah, that one we just put this in the normal credit note.
Speaker 3: Sales credit note means I credit back the sales.
Speaker 1: So that means when I do I sell something, there's a return.
Speaker 3: Yeah.
Speaker 1: That's the use case of the sales credit note. So normally when I sell something, I ship you somethings as well.
Speaker 3: Yeah.
Speaker 1: Correct.
Speaker 3: So then the the stock also come back.
Speaker 1: So we will track the stock also.
Speaker 3: Yeah, so it does two things. Reverse of billing.
Speaker 1: Right.
Speaker 3: And then stock.
Speaker 1: Okay.
Speaker 3: So then we have customer info or notes. This one?
Speaker 1: The the CRM.
Speaker 3: Yeah, you see here like which customer fields are writable in phase one and which require approval before syncing.
Speaker 1: You you haven't answered yet.
Speaker 3: Right.
Speaker 1: So it's not fully closed.
Speaker 3: So this is something that we're supposed to ask one. You see all these are questions.
Speaker 1: Oh, yeah.
Speaker 3: All these need to ask one.
Speaker 1: It's not to say it's closed.
Speaker 3: Okay.
Speaker 1: Only one only resolved. All these still open.
Speaker 3: Okay, so need scoping.
Speaker 1: Draft SO external pick list confirm with. Okay.
Speaker 1: So this one part stock entry DRM photo.
Speaker 3: Okay, so I don't know what's the details. This one missing the details.
Speaker 1: Not so fancy one.
Speaker 3: Inventory.
Speaker 1: Aging expiry.
Speaker 3: This one also you cannot just resolve like that. Being built now. But you need to have the details. How this work.
Speaker 1: Oh, this one important to know how it works.
Speaker 3: Yeah.
Speaker 1: It's not just wire the status, you know.
Speaker 3: That's what clarity mean. You need to know what this thing is doing.
Speaker 1: So proforma invoice.
Speaker 3: Okay.
Speaker 1: Approval full pre-owned credit.
Speaker 3: Huh?
Speaker 1: See?
Speaker 3: The wording not approval flow beyond credit means what?
Speaker 1: It's a credit limit.
Speaker 3: No, it's a credit block.
Speaker 1: Approval.
Speaker 3: So that means here we have the credit controller role.
Speaker 1: That's this person and then proceed.
Speaker 3: Yeah.
Speaker 1: To approve the order if if the customer is credit blocked.
Speaker 3: So you need to have those details there, you know.
Speaker 1: You need to answer like that.
Speaker 3: So you need to answer deeper.
Speaker 1: So payment chasing escalation.
Speaker 3: Who receive overdue alerts first?
Speaker 1: Yeah, so you see partial. So you need to ask go and ask the client this question. Who receive overdue alert first?
Speaker 3: This question here this one right.
Speaker 1: Mhm.
Speaker 3: To ask client one.
Speaker 1: Or you call Grace or whoever. Hey, you you start hey, I see based on our scope record. Few question ask you. I got 10 question. You see from here got 10 question to ask me.
Speaker 3: Mhm.
Speaker 1: So if you call Grace, you can call David, say hey, this one how.
Speaker 3: Okay.
Speaker 1: This one so sign.
Speaker 1: Photo whatever spot tracking spot tracking.
Speaker 3: Proof of delivery tracking.
Speaker 1: Okay, this one currently delivery trip and delivery stock in in micro food is out of scope.
Speaker 3: Yeah.
Speaker 1: So this NS07 proof of delivery attachment is out of scope. No, but cannot because in the DO they need the delivery proof.
Speaker 3: Yeah.
Speaker 1: So here this one is also a gap.
Speaker 3: Currently on our side. Which we need to check with tech whether this proof of delivery is required when marking as delivered.
Speaker 1: 10% I really call help me check.
Speaker 3: Okay, so then yeah, you have to gain clarity on this. You can discuss immediately what you're going to do. Make sure the ticket is created.
Speaker 1: Okay.
Speaker 3: Now you are clear how to do this thing.
Speaker 1: Are you clear on how to do any more question that you want to? Cl  Clarify on.
Speaker 1: Okay. Specifics I expect you to go and settle it.
Speaker 3: But like in terms of how to do this, you clear?
Speaker 1: For this the expected behavior is how is it?
Speaker 3: You will attach the POD in the end or?
Speaker 1: In the end.
Speaker 3: Correct. In the end.
Speaker 1: This is a normal attachment.
Speaker 3: Yeah, this is a normal attachment. Correct.
Speaker 1: So when the person say that this one is delivered mark as delivered, we can put a photo.
Speaker 3: You need to upload a photo first. Then only you can mark as delivered.
Speaker 1: And another question I have to bring up to brought up to Beyon is like do we need the validation like if if we don't have a bit the proof of delivery we will we cannot mark as complete.
Speaker 3: Yeah, that's the enforcement.
Speaker 1: Can we can do that. But the question is the client want that or not.
Speaker 3: So so you have to check with client. Hey, that time you say this proof of delivery are all the DO must have proof of delivery one. Is it or only some?
Speaker 1: You are just ask that is if all then you know is you know have to enforce really. But you say only some or some got some don't have. Then system cannot enforce on. Then you send you figure out.
Speaker 3: Okay.
Speaker 1: You know what I mean?
Speaker 3: So you see this is how you do this part here.
Speaker 1: Okay.
Speaker 3: So during this week like your A account make sure these are all true.
Speaker 1: Okay. So this is one example already. Okay. So this one you regenerate again. Actually you don't need to use clock one.
Speaker 3: Use GPT for this. Very good. It's also good enough video.
Speaker 1: Because your clock you you somewhere you do HTML you burn your usage very fast.
Speaker 3: Then you know hot then you say cannot do.
Speaker 1: So just use on the background file.
Speaker 3: No need to be so fancy fancy one because this one on the markdown file you can read with him.
Speaker 1: Main one is the content. R  Right. Because this one not used like we don't want to show.
Speaker 1: That's it. Right.
Speaker 3: So this one if you can you go and use the use the share project or in your own one also okay. R  Right.
Speaker 3: But the main one is the content inside here is more important.
Speaker 1: From here you got your 10 question really.
Speaker 3: You can go you can call Grace.
Speaker 1: You can call David straight away. Ask 10 question for you because I know Thursday I want to make sure this one sort out. Can I take 15 minute?
Speaker 3: Okay. Then you can ask very specific question but you can ask generate a script read only.
Speaker 1: Read and then type. Read and then type.
Speaker 3: Or read you go room open speaker or the fly record.
Speaker 1: You see how to do right?
Speaker 3: Yeah.
Speaker 1: Uh so how that's how you're going to do your A.
Speaker 3: A account.
Speaker 1: Clearer.
Speaker 3: Okay. Okay.
Speaker 1: Okay. So now we go the BOC. Let me see your BOC one.
Speaker 3: Yeah.
Speaker 1: Voice of customer. Let's go.
Speaker 3: Okay. Voice of customer. Okay. No, you got read. You got read through this one.
Speaker 1: Ready.
Speaker 3: All this is actually reference to based on the last time our meeting with them.
Speaker 1: Okay. Okay. So then you know who is David and all that.
Speaker 3: Yeah.
Speaker 1: Okay.
Speaker 3: Okay. So here this one you can read also yes very detail but because if you read this then you really understand what they want.
Speaker 1: Yeah. Right.
Speaker 3: They want the order to cash flow order come from WhatsApp right now current current process.
Speaker 1: Yeah. Order come from WhatsApp sell  Order come from WhatsApp sell manual interpret warehouse cut with final with differ.
Speaker 1: So you see this one wording different from like just now.
Speaker 3: So when you read these two document this one is client what they how they currently do one. So everything about the client.
Speaker 1: And just now that one is about the solution we talking about.
Speaker 3: Then you see you understand these two you know all the project ready.
Speaker 1: Yes.
Speaker 3: Coplo is a solution about.
Speaker 1: Uh but how the solution will solve solve for you. What we going to do for you.
Speaker 3: Oh.
Speaker 1: Okay.
Speaker 3: But actually your first step you read here first. You then you understand their pain is what. Then you can see your scope block thing whether numb or not.
Speaker 1: Or you can even just put that two thing into your into your thing.
Speaker 3: And then you figure out.
Speaker 1: Right.
Speaker 3: So big accuracy here. Core pain.
Speaker 1: Oh big who check.
Speaker 3: See they prefer.
Speaker 3: Their current pick list. I do sales order myself send.
Speaker 1: This one is if I say we cannot support the time the pick list upgrade thing we say actually we do later for you.
Speaker 3: So you can do this flow first.
Speaker 1: When now since we can do it then we will do the the new flow the one that they can do sales order first.
Speaker 3: Right.
Speaker 1: So then supplier sell 1,000 kg.
Speaker 3: 998 receive quantity differ.
Speaker 1: Okay. This one is GRN. GRN is this one is a purchasing purchasing then we don't count. Purchasing is still outside of the system.
Speaker 3: Okay. So payer name mismatch.
Speaker 1: I don't know what this is about. Okay. Okay.
Speaker 3: Okay. Fine.
Speaker 1: So this one you can read one by one like you really understand. See sometimes tell the question it's really answer here with you.
Speaker 3: So before you ask David the question you check back here.
Speaker 1: Or you can take this thing after you generate your question take this voice of customer upload to your scope block thing see any of the question results from here.
Speaker 3: Yeah. I actually did it.
Speaker 1: Oh, you did that really?
Speaker 3: Yeah. Oh,  Oh, great. Then you settle really.
Speaker 3: It's like.
Speaker 1: This to the document will align.
Speaker 3: Ah.
Speaker 1: So they do stock check only once a year.
Speaker 3: No. No. I put it.
Speaker 1: No. But is whatever that they do whatever that the user tested up.
Speaker 3: But this one is a wish. You see it's a wish list.
Speaker 1: These two two thing.
Speaker 1: Catalog and memo image. Yeah. This one.
Speaker 3: So it's ask.
Speaker 1: You export the WhatsApp group right this one.
Speaker 3: Oh yeah.
Speaker 1: Right. Order to cash works around actual weight picking.
Speaker 3: Okay.
Speaker 1: Bridge between raw evidence team clusters.
Speaker 3: Okay. What they expect Maya to do.
Speaker 1: Like you want your one like very super detail like where's the narrative.
Speaker 3: Customer narrative.
Speaker 1: Yeah.
Speaker 3: Bottom line.
Speaker 1: Okay. What we do. Okay. Here.
Speaker 3: So we need to have SQL constraint two stage order workflow make price at possible assist AR keep human control one time override.
Speaker 1: Fix format catalog preserve sales territory isolation.
Speaker 3: So inventory aging alert. Yeah.
Speaker 1: We can do this a thing then tune really.
Speaker 3: Okay. So all this a bit more deeper. So what we don't know.
Speaker 1: Yeah.
Speaker 3: See this question good good question to ask.
Speaker 1: By the warehouse user actually use Maya or David is the main person.
Speaker 3: Oh, this one. I I really align with him. He's I think they were only their.
Speaker 3: Warehouse manager will use it.
Speaker 1: Yes.
Speaker 3: I said the warehouse manager right other is their their foreign worker.
Speaker 1: Foreign worker. Yeah. Sure they don't know how to use one.
Speaker 3: Okay.
Speaker 1: So format of the.
Speaker 3: Real payer mismatch.
Speaker 1: So help us keep WhatsApp driven person full operation accurate current control especially where weight price memory on change of the customer first step.
Speaker 3: The mistake product will make treating as generic WhatsApp order automation. The  The real risk is workflow translation.
Speaker 3: Maya doesn't fit to people big list final weight SQL document display and warehouse sales rep don't actually adopt it.
Speaker 1: Everything by hand deployment fails.
Speaker 3: You find doing this helpful.
Speaker 1: Okay. Yeah. So you need to go through these two documents and then resolve the thing first.
Speaker 3: Okay. So now you you really see action point really.
Speaker 1: Okay. Straight weight as David.
Speaker 3: For this one what we have.
Speaker 1: Need to settle. Okay. Then from after this too long one then only you generate your UAT check.
Speaker 3: Yeah. You generate that thing early is on no point. Later need to keep regenerate if these two document haven't complete.
Speaker 1: Okay. Okay. So now we done macro food ready.
Speaker 3: Okay. So another thing about this firefly meeting right.
Speaker 1: Here.
Speaker 3: Make a habit to rename.
Speaker 1: So you can put like macro food discussion with Ivan.
Speaker 3: On scope block then later very easy for you to yeah to create to retrieve.
Speaker 1: And then so you see because you are on a shared plan. So I also can access this thing.
Speaker 1: Oh. So it's easy. That's why we go on the firefly. That's why I add you all to the firefly. You just need to know how to figure out making of course got issue you let me know then we have to solve the right. Yeah. So you can access some of my client meeting whatever then all that you can pull here because you use your own granola because we're not on the company granola plan.
Speaker 3: Then you cannot access all that.
Speaker 1: Okay.
Speaker 3: Any other question?
Speaker 1: So after I done all this thing clarify all these questions and then generate UAT and what UAT checklist then you quickly read through read through okay then you say ready after that I only will prepare a prompt and then you generate so you have one thing for the whole team print out the info pack.
Speaker 3: Ah. Need to come up with an info pack PDF.
Speaker 1: Okay. That one is based on prompt.
Speaker 3: So after info pack people we need your schedule like hidden like internal QA.
Speaker 1: No that one I will do I will I'll tell that to the team ready every day 10:30 to 1:00 p.m. all of us will do QA.
Speaker 3: Yeah. It's two together.
Speaker 1: All do together.
Speaker 3: The entire company.
Speaker 1: So that's why the info pack so important.
Speaker 3: Because you can have three people do the info pack.
Speaker 1: So you do not become tester anymore. Teach them how to test because now you need to be expert.
Speaker 3: Let's say we start with macro food first.
Speaker 1: They ask you testing you can test.
Speaker 3: UG right.
Speaker 1: So that's why today you must prepare tomorrow let's say three people testing for macro food.
Speaker 3: How to make sure everything works.
Speaker 1: So you must be able to say okay guys okay so you all three are working together with me on this macro food right okay so macro food story like that you must be able to share short 15 minute based.
Speaker 1: On all these document.
Speaker 3: No no you don't ask them to read the document no need document you can share.
Speaker 1: Macro food is like this so you say okay guys so macro food they sell this frozen food okay how they work is like this they got three people.
Speaker 3: CJ.
Speaker 1: You got David.
Speaker 3: And then you have Grace.
Speaker 1: These are sales.
Speaker 3: And David is boss doing all things.
Speaker 1: These are three salespeople. Then you have the two admin or two Indian ladies admin don't know what's their name.
Speaker 3: But they are the finance admins. Finance  Finance accounting admin.
Speaker 3: Then you have that one Malay guy which is the warehouse guy.
Speaker 1: Warehouse guy. He is the bigger and younger.
Speaker 3: So he's a warehouse manager like warehouse manager. Under him got a lot of foreign workers who do the picking processing and whatever right.
Speaker 1: The team like this only.
Speaker 3: So how they order work.
Speaker 1: Then you can share.
Speaker 3: My shared story because like let's say you want to understand this client.
Speaker 1: You must be able to share a story like that.
Speaker 3: So important for this guy is this a thing okay a thing warehouse.
Speaker 1: Then you see so when they test this thing they will make sure it's the part.
Speaker 3: So they will use the info pack to test right.
Speaker 1: Info pack will have all the like you need to have certain mission right that we need to craft accordingly.
Speaker 3: So then only useful right.
Speaker 1: Like a scenario for them.
Speaker 3: Yeah  any more questions?
Speaker 1: You can do for the rest also. Got problem ask me.
Speaker 3: Yes.
Speaker 1: So when I ask you what question you have right I want to see that list of questions that you ask the client.
Speaker 3: Because sometimes I can answer really.
Speaker 1: I'm willing to ask client.
Speaker 3: Ask client slow and you call them.
Speaker 1: So I want you to give me that list of questions.
Speaker 3: Because I expect confirmed questions.
Speaker 1: You cannot say everything also answer really.
Speaker 3: Just say it's based on this two document.
Speaker 1: Then just tell them that thing you know like got the question all these.
Speaker 1: Question you need to ask me this question.
Speaker 3: Okay. So you need to make this fast. Okay.
Speaker 1: Okay. So now don't waste time really because 1:00 p.m. 11:00 2 hours left. So all your other A1 A you know the A account is which one right okay so you have a short list so faster go and do all those.
Speaker 1: Run in parallel use GPT everything all parallel and which one you want.
Speaker 1: Only one yeah.
Speaker 3: GN is what?
Speaker 1: GN is me.
Speaker 3: Oh GN is you know that Dawson.
Speaker 1: Macro for A school.
Speaker 3: A school also you can do.
Speaker 1: Ah faster do this one faster. Ye  Yeah you doesn't mean macro food A you only do one you know all the rest also need to do.
Speaker 1: Yeah.
Speaker 3: Okay so then if you can you just faster quickly if having generate generate eh what the fuck based on today one now you just faster quickly get this transcript and then you do the macro food one ready then after you faster review the rest especially like fix or the higher on the list one highest GN is Dawson check Dawson first and then you do the same exercise question you ask me if ask me I cannot answer ask client so I and based on these two document come and question correct yeah must finalize this two document first then we are tuned ready because if you can do this all by 1:00 p.m. I think we all track your side and just have to check to the inside okay so.
Speaker 3: Any question okay good okay  a lot more clarity yeah better thanks.
Speaker 1: Okay
