---

# Compiled Channel & Infrastructure Setup Guide

This guide combines the setup instructions for WhatsApp Business API, LLM API keys, and AWS account preparation. It is intended for clients preparing the infrastructure needed for MAIA onboarding and go-live.

## Why This Matters

These setup steps can run in parallel with requirements gathering and scope confirmation. Starting early helps MAIA go live faster, because phone number readiness, Meta verification, billing setup, and credential access are common onboarding blockers.

Please start the WhatsApp phone number and Meta Business setup as soon as the deal is confirmed. LLM API keys and AWS setup usually begin after the SOW is signed or once Mindhive confirms they are needed for your deployment.

## Quick Reference

| Item | When to Start | Dependencies 
|---|---|---|
| WABA phone number | Immediately after deal signed | None |
| WABA account setup | Immediately after deal signed | Phone number ready |
| LLM API keys | After SOW signed or when requested | Payment method on provider account | 
| AWS account | After SOW signed, if client-hosted | Payment method and account verification | 

## Before You Start: Caution Notes

### Credential Sharing

Never share API keys, access tokens, AWS access keys, or account passwords via email, WhatsApp, or any unencrypted channel. Use the secure credential portal provided by Mindhive.

Copy secret keys and tokens immediately when they are generated. Many providers only show them once.

### WhatsApp Phone Number

Use a dedicated phone number for MAIA. The number:

- Must be able to receive SMS or voice calls for verification.
- Must not currently be registered on WhatsApp personal app or WhatsApp Business app.
- Should be registered under the company name.
- Should not be used by staff for normal WhatsApp messaging.
- Will be connected to MAIA's AI agent to receive and respond to incoming messages.

Once a number is registered with the WhatsApp Business API, it cannot be used with the regular WhatsApp app at the same time.

### Malaysia Phone Number KYC

For Malaysia company phone numbers, telco KYC registration may be required. If a new company number is needed, purchase and register it early because activation can take 1 to 2 weeks.

### Meta Account Risk

Meta may flag, restrict, or ban new Business Manager accounts during setup. To reduce risk:

- Use an existing Meta Business Manager account if the company already has one.
- Do not register a number that is active on WhatsApp.
- Follow the setup steps in order.
- Stop immediately if the account is restricted, banned, or placed under review.
- Contact Mindhive before retrying or creating a new account.

Repeated attempts after a restriction can make account recovery harder.

## 1. WhatsApp Business API Setup

MAIA communicates with customers and internal teams through WhatsApp. To connect the channel, the client needs a verified WhatsApp Business Account and API credentials.

Estimated time: 1 to 2 hours of setup work, plus 3 to 7 business days for Meta verification. Delays can be longer if phone number KYC or business verification issues occur.

### Step 1.1: Prepare the Phone Number

Choose a phone number that meets all requirements:

- New number, or existing number not currently registered on WhatsApp.
- Able to receive SMS or voice call OTP.
- Dedicated to MAIA.
- Registered under the company name where possible.

Options:

- Purchase a new prepaid or postpaid SIM and complete company KYC.
- Use a company landline number if it can receive Meta's verification voice call.
- Port an existing number only if it is not currently used on WhatsApp.

If migrating from WhatsApp Business app, delete the existing WhatsApp registration first and allow time before re-registering through Meta.

### Step 1.2: Create or Access Meta Business Account

1. Go to [business.facebook.com](https://business.facebook.com/).
2. Log in to the company's existing Meta Business account, or click **Create Account**.
3. Enter the business name, contact name, and business email.
4. Complete account setup.

Use the official company business details. These should match company registration documents such as SSM certificate, address proof, and billing details.

### Step 1.3: Create a Meta App

1. Go to [Meta for Developers](https://developers.facebook.com/).
2. Click **My Apps** > **Create App**.
3. Select **Other** as the use case, then click **Next**.
4. Select **Business** as the app type, then click **Next**.
5. Fill in the app details:
   - **App name:** for example, `[Company Name] WhatsApp Bot`
   - **App contact email:** company email address
   - **Business Account:** select the company's Meta Business account
6. Click **Create App**.

### Step 1.4: Add WhatsApp Product

1. In the app dashboard, scroll to **Add products to your app**.
2. Find **WhatsApp** and click **Set up**.
3. Open the WhatsApp Getting Started page.

### Step 1.5: Set Up WhatsApp Business Account

1. On the WhatsApp Getting Started page, find **Step 1: Select phone numbers**.
2. If there is no WhatsApp Business Account yet, click **Create a WhatsApp Business Account**.
3. Select the Meta Business account.
4. Enter the business details.
5. If there is already a WhatsApp Business Account, select it from the dropdown.

### Step 1.6: Add and Verify the Phone Number

1. Go to **WhatsApp** > **API Setup**.
2. Under **Step 1: Select phone numbers**, click **Add phone number**.
3. Enter the display name, phone number with country code, and verification method.
4. Choose SMS or voice call.
5. Enter the OTP received on the phone.
6. Confirm that the number is registered.

The display name must accurately represent the business and follow Meta's display name rules. Misleading, generic, promotional, or WhatsApp-branded names may be rejected.

### Step 1.7: Complete Meta Business Verification

1. Go to Meta Business Settings.
2. Complete Business Verification.
3. Prepare official documents such as business registration certificate, address proof, and any documents requested by Meta.
4. Make sure the business name and address match across all documents.

If Meta rejects verification, capture the rejection reason and contact Mindhive.

### Step 1.8: Collect API Credentials

After the phone number is added, collect:

| Credential | Where to Find It | Notes |
|---|---|---|
| Phone Number ID | **WhatsApp** > **API Setup** | Required for MAIA channel connection |
| WhatsApp Business Account ID | **WhatsApp** > **API Setup** | Required for account connection |
| Temporary access token | **Step 2: Send messages with the API** | For testing only, usually valid for 24 hours |
| Permanent system user token | Meta Business Settings > System Users | Required for production |

### Step 1.9: Generate Permanent Access Token

For production, create a permanent System User token:

1. Go to [Meta Business Settings](https://business.facebook.com/settings).
2. Navigate to **Users** > **System Users**.
3. Click **Add**.
4. Name the user, for example, `WhatsApp API Bot`.
5. Assign **Admin** role.
6. Click **Create System User**.
7. Select the new system user.
8. Click **Add Assets**.
9. Select **Apps**, choose the WhatsApp app, and grant **Full Control**.
10. Click **Generate New Token**.
11. Select the app.
12. Set token expiration to **Never**, if available and approved by the client.
13. Select these permissions:
    - `whatsapp_business_management`
    - `whatsapp_business_messaging`
14. Generate the token.
15. Copy and store the token securely.

Share the WhatsApp Business Account ID, Phone Number ID, and permanent token with Mindhive through the secure credential portal only.

## 2. LLM API Keys

MAIA may use AI language model providers for chatbot conversations, document extraction, and intelligent assistance. Mindhive will confirm which provider is required.

Estimated time: 15 to 30 minutes per provider.

### OpenAI

1. Go to [platform.openai.com](https://platform.openai.com).
2. Create an account or sign in.
3. Go to **Settings** > **Billing**.
4. Add a payment method.
5. Set a monthly usage limit. A starting range of USD 50 to 100 per month is usually suitable, then can be adjusted after usage is known.
6. Go to **API Keys**.
7. Click **Create new secret key**.
8. Name the key `MAIA Production`.
9. Copy the key immediately.
10. Share the key through the secure credential portal.

Optional support reference: use the OpenAI account setup video if provided by Mindhive.

### Anthropic / Claude

1. Go to [console.anthropic.com](https://console.anthropic.com).
2. Create an account or sign in.
3. Go to **Settings** > **Billing**.
4. Add a payment method.
5. Set a monthly spend limit. A starting range of USD 50 to 100 per month is usually suitable.
6. Go to **API Keys**.
7. Click **Create Key**.
8. Name the key `MAIA Production`.
9. Copy the key immediately.
10. Share the key through the secure credential portal.

### LLM API Key Notes

- Set billing or usage limits before production use.
- Use separate keys for staging and production, if both environments exist.
- Do not share keys through email, WhatsApp, screenshots, or documents.
- Rotate keys if they are exposed.
- Mindhive will advise which provider or providers are needed for the final MAIA configuration.

## 3. AWS Account Setup

AWS may be required when the client is hosting MAIA infrastructure or related website services under their own account.

Estimated time: 30 to 60 minutes.

### Step 3.1: Create AWS Account

1. Go to [aws.amazon.com](https://aws.amazon.com).
2. Click **Create an AWS Account**.
3. Use a shared company email address, not a personal email.
4. Verify the email address using the code sent by AWS.
5. Create a strong password.
6. Select the paid account plan if prompted.
7. Add a valid credit card or debit card.
8. Complete phone or identity verification if requested.

AWS generally uses pay-as-you-go pricing. A paid account is required for reliable hosting and production use.

### Step 3.2: Secure the Root Account

1. Sign in as the AWS root user.
2. Enable MFA on the root account.
3. Store root credentials securely.
4. Avoid using the root account for daily work after initial setup.

### Step 3.3: Configure Billing

1. Open the AWS Billing Dashboard.
2. Confirm the payment method is active.
3. Set up budget alerts.
4. Create an initial monthly alert. Mindhive may advise the amount based on deployment scope.

For basic hosting, estimated monthly cost may be around USD 150 to 200, depending on traffic, server resources, storage, SSL, domain setup, and actual usage. Final cost should be confirmed during scoping and reflected in the SOW.

### Step 3.4: Grant Mindhive Access

Preferred option: IAM Role.

Mindhive will provide a CloudFormation template or IAM policy. The client creates the role in AWS and shares the Role ARN with Mindhive. This gives scoped access without sharing long-term credentials.

Fallback option: IAM User.

If a role is not possible, create an IAM user with programmatic access using the permission policy provided by Mindhive. Share the Access Key ID and Secret Access Key through the secure credential portal.

Root account login should not be shared unless Mindhive explicitly requests temporary bootstrap access. If temporary root access is unavoidable, share it only through the secure credential portal and rotate the password or access approach after setup is complete.

## Troubleshooting

### WABA and Meta Issues

| Problem | What to Do |
|---|---|
| Business verification rejected | Check whether SSM certificate, address proof, or company name does not match. Send the rejection reason to Mindhive. |
| Account banned or restricted | Stop immediately. Do not create a new account. Contact Mindhive for recovery steps. |
| Account under review | Do not retry repeatedly. Wait for Meta status or contact Mindhive. |
| Number already registered on WhatsApp | Use a different number, or delete the existing WhatsApp registration and wait before re-registering. |
| KYC taking too long with telco | Follow up with the telco. If urgent, consider a landline that can receive verification calls. |
| Two-factor authentication issue | Contact Meta support or ask Mindhive to assist. |
| Display name rejected | Use official registered business name. Avoid generic, promotional, or WhatsApp-related terms. Review Meta naming guidelines. |
| Temporary token expired | Generate a new temporary token for testing, or create a permanent System User token for production. |
| Message delivery failed | Check 24-hour messaging window, token permissions, rate limits, and whether a message template is required. |

### Webhook, Chatwoot, or Middleware Issues

These checks apply if the deployment uses Chatwoot, middleware, or webhook-based WhatsApp routing.

| Problem | What to Check |
|---|---|
| Webhook verification failed | Confirm callback URL uses HTTPS, SSL certificate is valid, verify token matches exactly, firewall allows Meta requests, and URL format is correct. |
| Messages not appearing in Chatwoot | Confirm webhook subscription includes `messages`, webhook URL is correct, inbox is active, agents are assigned, and logs show no delivery errors. |
| Replies not reaching WhatsApp | Confirm token permissions, 24-hour customer service window, rate limits, and template requirements. |
| Meta webhook logs show failures | Go to **WhatsApp** > **Configuration** and review webhook delivery logs. |

### LLM API Key Issues

| Problem | What to Do |
|---|---|
| API key not shown again | Create a new key and store it securely at creation time. |
| Billing not active | Add or verify payment method before sharing key. |
| Unexpected cost | Lower monthly limit and notify Mindhive to review usage. |
| Key exposed | Revoke the key immediately and generate a replacement. |

### AWS Issues

| Problem | What to Do |
|---|---|
| Email verification not received | Check spam or junk folder, then retry from AWS sign-up page. |
| Payment method rejected | Try another card or contact the bank to approve AWS billing. |
| Billing alerts not configured | Set up AWS Budgets before production use. |
| Mindhive cannot access account | Confirm IAM role ARN or IAM user credentials were shared through the secure portal and permissions match the provided policy. |
| Cost is higher than expected | Review AWS Billing Dashboard and contact Mindhive to check resource usage. |

## Required Information to Share With Mindhive

| Area | Required Information | Channel |
|---|---|---|
| WhatsApp | Phone Number ID, WhatsApp Business Account ID, permanent System User token | Secure credential portal |
| Phone number | Confirmation that the MAIA number is ready and can receive OTP | Email is acceptable for confirmation only |
| OpenAI | Production API key, if applicable | Secure credential portal |
| Anthropic | Production API key, if applicable | Secure credential portal |
| AWS | IAM Role ARN, or IAM user access keys if role is not possible | Secure credential portal |

## Questions

Contact the Mindhive product team contact if any setup step is unclear, blocked, rejected, restricted, or delayed. It is better to escalate early than to let setup issues silently delay go-live.

## See Also

- [[Channel & Infrastructure Setup Guide]]
- [[V2 Channel & Infrastructure Setup Guide]]
