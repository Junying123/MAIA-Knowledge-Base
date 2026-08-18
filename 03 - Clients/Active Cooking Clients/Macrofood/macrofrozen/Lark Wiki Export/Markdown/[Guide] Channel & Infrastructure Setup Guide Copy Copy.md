**\[Guide\] Channel & Infrastructure Setup Guide Copy Copy**

**Self-Service Instructions for WhatsApp, LLM API Keys, and AWS**

**Client Name:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

**Date Sent:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

**Why this matters**

These setup steps run in parallel with your main onboarding. Starting them early means MAIA can go live faster --- delays here are the most common reason onboarding takes longer than expected.

**Please start on these as soon as you receive this guide.** You do not need to wait for the requirements meeting or scope of work.

**1. WhatsApp Business API (WABA) Setup**

MAIA communicates with your customers and your internal team through WhatsApp. To connect, you need a verified WhatsApp Business API account.

**Estimated time:** 1--2 hours of setup work + 3--7 business days for Meta verification. Can take longer if phone number KYC or Meta verification issues arise (see Important Warnings below).

**Important Warnings --- Read Before Starting**

**Phone number KYC (Malaysia):** Company phone numbers in Malaysia require KYC registration with your telco provider. If you don\'t already have a suitable company number, getting one registered and activated can take 1--2 weeks. **Start this immediately if you need a new number.**

**Meta account banning risk:** Meta sometimes flags or bans new Business Manager accounts during setup --- even when you\'ve done nothing wrong. This is a known industry-wide issue. To reduce the risk:

Do NOT create a new Meta Business Manager account if you already have one --- use your existing one

Do NOT attempt to register a phone number that is currently active on any WhatsApp app

Follow the setup video steps exactly --- skipping steps or doing them out of order increases ban risk

If you get banned or restricted, **stop immediately and contact Mindhive** before trying again. Repeated attempts after a ban make recovery harder

**If you\'d prefer Mindhive to handle WABA setup on your behalf, let us know.** We can manage the entire process for you, including Meta Business Manager setup and verification. This is often faster and avoids common pitfalls.

**Step 1 --- Get a Dedicated Phone Number**

You need a phone number that is:

**New or not currently registered on WhatsApp** (personal or business)

**Able to receive SMS or voice calls** (for verification)

**Dedicated to MAIA** --- it cannot be used for regular WhatsApp simultaneously

**Registered under your company name** (KYC-compliant)

**Options:**

Purchase a new prepaid SIM and complete KYC registration under your company

Use a company landline number (Meta can verify via voice call)

Port an existing number (only if it\'s not currently on WhatsApp)

**Important:** Once this number is registered with the WhatsApp Business API, it cannot be used with the regular WhatsApp app. This is a permanent change.

**If you need a new number:** Start the purchase and KYC process now. Do not wait for any other onboarding step. This is typically the longest wait in the entire setup.

**Step 2 --- Set Up Your WhatsApp Business Account**

Watch the Mindhive WABA setup video: **\[Video link to be inserted\]**

The video walks you through:

Creating or using your existing Meta Business Manager account

Creating a WhatsApp Business Account inside Business Manager

Adding your phone number

Verifying your business with Meta

Completing the Business Verification process

**If you encounter any errors, restrictions, or \"account under review\" messages during this process, stop and contact Mindhive immediately.** Do not create a new account or retry --- let us help troubleshoot first.

**Step 3 --- Share Access with Mindhive**

Once your WABA is set up and verified, share the following with us:

WhatsApp Business Account ID

Phone Number ID

A system user access token (the video shows how to create this)

**Share credentials via the secure portal link we\'ll provide --- never via email or WhatsApp.**

**If You Get Stuck**

This is common --- Meta\'s interface changes frequently and their verification process is unpredictable. Contact your Mindhive product team contact and we will assist. In some cases, we may need to do this on-site with you.

**Common blockers and what to do:**

  --------------------------------------- ------------------------------------------------------------------------------------------------------------------------------
  Problem                                 What to Do

  Business verification rejected          Usually a documents issue --- SSM cert, address proof, or company name mismatch. Contact Mindhive with the rejection reason.

  Account banned or restricted            Stop immediately. Do NOT create a new account. Contact Mindhive --- we have recovery procedures.

  Number already registered on WhatsApp   You need a different number, or delete the existing registration first (7-day wait period).

  KYC taking too long with telco          Follow up with your telco provider. If urgent, consider using a landline number instead.

  Two-factor authentication issues        Contact Meta support directly, or let Mindhive handle it.
  --------------------------------------- ------------------------------------------------------------------------------------------------------------------------------

**Bottom line:** If WABA setup is proving difficult, tell us early. We\'d rather help you through it than have it silently block your go-live date for weeks.

**2. LLM API Keys**

MAIA uses AI language models for chatbot conversations, document extraction, and intelligent assistance. You need API keys from the relevant providers.

**Estimated time:** 15--30 minutes per provider

**OpenAI (if applicable)**

Go to [platform.openai.com](https://platform.openai.com)

Create an account or sign in

Go to **Settings → Billing** and add a payment method

Set a monthly usage limit (we recommend starting at USD 50--100/month --- you can adjust later)

Go to **API Keys** → **Create new secret key**

Name the key something like \"MAIA Production\"

Copy the key immediately --- it won\'t be shown again

Share the key via our secure credential portal

**Anthropic / Claude (if applicable)**

Go to [console.anthropic.com](https://console.anthropic.com)

Create an account or sign in

Go to **Settings → Billing** and add a payment method

Set a monthly spend limit (we recommend starting at USD 50--100/month)

Go to **API Keys** → **Create Key**

Name the key \"MAIA Production\"

Copy the key immediately

Share the key via our secure credential portal

**Important Notes**

**Set billing limits.** This protects you from unexpected charges. Start conservative and increase based on actual usage.

**Do not share API keys via email, WhatsApp, or any unencrypted channel.**

**One key per deployment.** If you have staging and production environments, create separate keys for each.

We will advise you on which LLM provider(s) are needed based on your MAIA configuration.

**3. AWS Account Setup (Case-by-Case Only)**

**For most clients, you can skip this section entirely.** Mindhive deploys MAIA on our own infrastructure --- you don\'t need an AWS account.

This section only applies if your specific arrangement requires MAIA to be deployed on your own AWS account (this will have been discussed and agreed during scoping).

**Estimated time:** 30--60 minutes

**If You Need to Set Up an AWS Account**

Go to [aws.amazon.com](https://aws.amazon.com) → **Create an AWS Account**

Provide an email address (use a shared team email, not a personal one)

Set up your root account with a strong password

Enable MFA (multi-factor authentication) on the root account

**Configure Billing**

Go to **Billing Dashboard** → **Payment Methods**

Add a credit card or set up invoiced billing

Set up **Billing Alerts** in CloudWatch to monitor spend

We recommend setting an initial budget alert at USD 500/month

**Grant Mindhive Access**

Mindhive manages the deployment on your behalf --- we need access to your account to do this. Two options:

**Option A --- IAM Role (Recommended):**

We will provide you with a CloudFormation template or IAM policy document. You create the role in your account and share the Role ARN with us. This gives us scoped access without sharing long-term credentials.

**Option B --- IAM User:**

Create an IAM user with programmatic access (Access Key + Secret Key). We will provide the required permission policy. Share credentials via the secure portal.

Estimated monthly AWS cost will be discussed during scoping and included in your SOW.

**Quick Reference --- What to Do When**

  -------------------- --------------------------------------- ------------------------------------ -------------------------------------------------
  Item                 When to Start                           Dependencies                         Share With Mindhive Via

  WABA phone number    Immediately after deal signed           None                                 Email (just confirm you have the number)

  WABA account setup   Immediately after deal signed           Phone number ready                   Secure credential portal

  LLM API keys         After SOW signed                        Payment method on provider account   Secure credential portal

  AWS account          After SOW signed (client-hosted only)   None                                 Secure credential portal (IAM role/credentials)
  -------------------- --------------------------------------- ------------------------------------ -------------------------------------------------

**Questions?**

Contact your Mindhive product team contact. We\'re happy to walk you through any of these steps --- they\'re more straightforward than they look.

*MAIA by Mindhive --- Channel & Infrastructure Setup Guide v1.0*
