**Macrofrozen - MAIA Setup Guide**

**Meta account Set up (Whatsapp Business account set up)**

This guide walks you through setting up a WhatsApp Business channel using Meta\'s WhatsApp Cloud API.

**Table of Contents**

Prerequisites

Meta Business Platform Setup

Troubleshooting

Important Notes & Best Practices

**Prerequisites**

Before starting, ensure you have:

![](Macrofrozen - MAIA Setup Guide_assets/media/image1.png)

**点击图片可查看完整电子表格**

**Phone Number Requirements**

Must be able to receive SMS or voice calls for verification

Cannot be currently registered with WhatsApp (personal or WhatsApp Business app)

If migrating from WhatsApp Business app, you must delete it first

Recommended: Use a dedicated business line

**Meta Business Platform Setup**

**Step 1.1: Create or Access Meta Business Account**

Go to [business.facebook.com](https://business.facebook.com/)

Click **Create Account** (or log in if you have one)

Enter your business details:

Business name

Your name

Business email

Complete the account setup

**Step 1.2: Create a Meta App**

Go to [Meta for Developers](https://developers.facebook.com/)

Click **My Apps** → **Create App**

Select **Other** for use case, then click **Next**

Select **Business** as the app type, then click **Next**

Fill in app details:

**App name**: Your app name (e.g., \"MyCompany WhatsApp Bot\")

**App contact email**: Your email

**Business Account**: Select your Meta Business Account

Click **Create App**

**Step 1.3: Add WhatsApp Product to Your App**

In your app dashboard, scroll to **Add products to your app**

Find **WhatsApp** and click **Set up**

You\'ll be redirected to WhatsApp Getting Started page

**Step 1.4: Set Up WhatsApp Business Account**

On the WhatsApp Getting Started page, you\'ll see **Step 1: Select phone numbers**

If you don\'t have a WhatsApp Business Account:

Click **Create a WhatsApp Business Account**

Select your Meta Business Account

Enter business details

If you have one, select it from the dropdown

**Step 1.5: Add and Verify Your Phone Number**

In the WhatsApp dashboard, go to **Step 1: Select phone numbers**

Click **Add phone number**

Fill in the details:

**Display name**: Your business name (must follow [Meta\'s guidelines](https://www.facebook.com/business/help/338047025165344))

**Phone number**: Enter your phone number with country code

**Verification method**: Choose SMS or Voice call

Click **Next** and enter the OTP received on your phone

Your phone number is now registered

  ---------------------------------------------------------------------------------------------------------------------------------------------
  **Note**: The display name must accurately represent your business and follow Meta\'s naming guidelines. Misleading names will be rejected.

  ---------------------------------------------------------------------------------------------------------------------------------------------

**Step 1.6: Get Your API Credentials**

After adding your phone number, collect these credentials:

**Phone Number ID**

Go to **WhatsApp** → **API Setup** in the left sidebar

Under **Step 1: Select phone numbers**, find **Phone number ID**

Copy this value

Paste here

  --------------------------------------------------------------
  Plain Text

  --------------------------------------------------------------

**WhatsApp Business Account ID**

Go to **WhatsApp** → **API Setup**

Find **WhatsApp Business Account ID** in the same section

Copy this value

Paste here

  --------------------------------------------------------------
  Plain Text

  --------------------------------------------------------------

**Temporary Access Token (for testing)**

On the API Setup page, find **Step 2: Send messages with the API**

Click **Generate** under **Temporary access token**

Copy the token (valid for 24 hours)

**Step 1.7: Generate Permanent Access Token**

For production, create a permanent System User token:

Go to [Meta Business Settings](https://business.facebook.com/settings)

Navigate to **Users** → **System Users**

Click **Add** to create a new system user:

**Name**: e.g., \"WhatsApp API Bot\"

**Role**: Admin

Click **Create System User**

Click on the system user you created

Click **Add Assets**:

Select **Apps**

Find your app and add it

Grant **Full Control**

Click **Generate New Token**:

Select your app

Set token expiration to **Never**

Select these permissions:

whatsapp_business_management

whatsapp_business_messaging

Click **Generate Token**

**Copy and save this token securely** - you won\'t see it again!

**Troubleshooting**

**Common Issues and Solutions**

**Webhook Verification Failed**

**Symptoms**: Meta shows \"Callback URL could not be verified\"

**Solutions**:

Verify your Chatwoot instance is accessible via HTTPS

Check SSL certificate is valid and not self-signed

Ensure the verify token matches exactly

Check firewall/security rules allow Meta\'s IPs

Verify the callback URL format is correct

**Messages Not Appearing in Chatwoot**

**Symptoms**: WhatsApp messages sent but not showing in Chatwoot

**Solutions**:

Check webhook subscription includes messages field

Verify webhook URL is correct in Meta settings

Check Chatwoot logs for errors:

  --------------------------------------------------------------
  Bash\
  docker logs chatwoot-web -f

  --------------------------------------------------------------

Verify the inbox is active and has agents assigned

**\"Number is not registered\" Error**

**Symptoms**: Cannot add phone number to Meta

**Solutions**:

Ensure the number isn\'t already on WhatsApp (personal or business)

If migrating, delete WhatsApp Business app first

Wait 24 hours after deleting before re-registering

Try different verification method (SMS vs Voice)

**Token Expired**

**Symptoms**: API calls return authentication errors

**Solutions**:

Regenerate temporary token (for testing)

Create System User permanent token (for production)

Update token in Chatwoot inbox settings

**Message Delivery Failed**

**Symptoms**: Replies from Chatwoot not reaching WhatsApp

**Solutions**:

Check you\'re within 24-hour messaging window

Verify API token has correct permissions

Check rate limits haven\'t been exceeded

For conversations older than 24h, use approved message templates

**Display Name Rejected**

**Symptoms**: Meta rejects your display name

**Solutions**:

Use your official registered business name

Avoid generic names like \"Customer Support\"

Don\'t include promotional content

Don\'t use WhatsApp-related terms

Review [Meta\'s naming guidelines](https://www.facebook.com/business/help/338047025165344)

**Checking Logs**

**Chatwoot Logs**

  --------------------------------------------------------------
  Bash\
  \# Self-hosted Docker\
  docker logs chatwoot-web -f\
  docker logs chatwoot-worker -f

  --------------------------------------------------------------

**Middleware Logs**

  --------------------------------------------------------------
  Bash\
  \# Check webhook processing\
  docker logs maia-api -f \| grep -i chatwoot

  --------------------------------------------------------------

**Meta Webhook Logs**

Go to **WhatsApp** → **Configuration**

View webhook delivery logs

**Important Notes & Best Practices**

**24-Hour Messaging Window**

WhatsApp enforces a 24-hour customer service window:

**Window Opens**: When customer sends a message

**Window Closes**: 24 hours after customer\'s last message

**During Window**: You can send any message

**After Window**: You can ONLY send approved template messages

**Best Practices**:

Respond promptly to keep the window open

Save template messages for follow-ups

Track conversation timing

**Message Templates**

Required for:

Initiating conversations (customer hasn\'t messaged you)

Messaging after 24-hour window closes

Notifications and alerts

**Template Categories**:

UTILITY: Order updates, account alerts, receipts

AUTHENTICATION: OTP, verification codes

MARKETING: Promotions, offers (requires opt-in)

**Rate Limits**

WhatsApp Cloud API limits:

![](Macrofrozen - MAIA Setup Guide_assets/media/image2.png)

**点击图片可查看完整电子表格**

**Quality Rating**

Meta monitors:

User blocks and reports

Template message quality

Response times

Keep quality high by:

Only messaging opted-in users

Responding within 24 hours

Not sending spam or promotional content without consent

**Phone Number Considerations**

**Portability**: You can migrate numbers between providers

**Multiple Numbers**: Each number requires separate verification

**Display Name**: Can be different from business name but must represent your business

**Country Codes**: Always include country code (+1, +44, etc.)

**Security Best Practices**

**Token Security**:

Never commit tokens to version control

Use environment variables

Rotate tokens periodically

**Webhook Security**:

Always use HTTPS

Validate webhook signatures if available

Rate limit webhook endpoints

**Access Control**:

Limit who has access to Meta Business Suite

Use appropriate system user permissions

Audit access regularly

**Quick Reference**

**Key URLs**

![](Macrofrozen - MAIA Setup Guide_assets/media/image3.png)

**点击图片可查看完整电子表格**

**Required Credentials Summary**

![](Macrofrozen - MAIA Setup Guide_assets/media/image4.png)

**点击图片可查看完整电子表格**

**Related Documentation**

[Meta WhatsApp Cloud API Docs](https://developers.facebook.com/docs/whatsapp/cloud-api)

[Chatwoot WhatsApp Docs](https://www.chatwoot.com/docs/product/channels/whatsapp/whatsapp-cloud)

**How to setup steps for Open AI account**

**Step by Step on how to open an Open AI account**

https://www.youtube.com/watch?v=SzPE_AE0eEo

https://platform.openai.com/login

Please share with us your API key

  ----------------------------------------------------------------------------------------------------------------------------------------------------------------------
  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

  ----------------------------------------------------------------------------------------------------------------------------------------------------------------------

**Pricing estimation for OpenAI**

Price reference table

https://platform.openai.com/docs/pricing?latest-pricing=standard#text-tokens

+:-------------------------------------------------------------+
| Note                                                         |
|                                                              |
| LLM Costing:                                                 |
|                                                              |
| USD 0.10 per proposal generated, 200 cases = USD 20.00       |
|                                                              |
| Chatbot Costing:                                             |
|                                                              |
| USD 0.10 per conversation, 200 cases = USD 20.00             |
+--------------------------------------------------------------+

**AWS account setup**

**\[WhatsApp Video 2026-04-07 at 16.34.09 (1).mp4\]**

⁠**Purpose: To Host the MAIA Website**

Please follow the steps below to create your AWS account for website hosting.

**Step-by-Step AWS Account Setup**

**Step 1: Create Your AWS Account**

Go to the AWS sign-up page and create a new account using your email address.

**Important:**\
Please make sure you have access to this email, as AWS will send a verification email during the registration process.

**Step 2: Verify Your Email**

Check your inbox and complete the email verification from AWS.

**Step 3: Create Your Password**

Prepare and set a secure password for your AWS account.

Please make sure to save this password for future login access.

**Step 4: Select Account Plan**

Choose the **Paid Plan** during account setup.

✅ Please select: **Paid Plan**

This is required for hosting the MAIA website and ensuring uninterrupted service.

AWS generally uses a **pay-as-you-go pricing model**, meaning you only pay for the services used.

**Step 5: Add Payment Method**

Prepare a valid **Credit Card / Debit Card** and add it as the payment method for AWS billing.

This is required even if your initial usage is low.

**Step 6: Share Login Credentials**

Once the account setup is completed, please share the following with us:

AWS account email address

AWS account password

(These are the same details created in **Step 1** and **Step 3**)

This allows our team to proceed with the website hosting setup for MAIA.

**Estimated AWS Hosting Cost**

The monthly AWS cost depends on the website traffic and hosting structure.

For a basic business website hosting setup, the estimated monthly cost is usually:

**Estimated Cost Range:**

**USD \$150-200/month**

This may include:

Website hosting

Storage

Domain connection

SSL / security setup

Basic server resources

For very small static websites, costs can sometimes be much lower depending on usage. AWS pricing is based on actual consumption.

**AWS Credentials**

  --------------------------------------------------------------
  Plain Text\
  Amazon cloud\
  Id: admin@macrogroup.biz\
  Pw: 13@Cro768768

  --------------------------------------------------------------

**Phone Number**

Please input MAIA\'s Phone number below

  --------------------------------------------------------------------
  Need to get this from DAVID, the number is prepared from their end

  --------------------------------------------------------------------

Note

MAIA\'s Phone number should not be used by anyone

MAIA\'s Phone number will only receive messages, not Calls

Maia\'s Phone number will be connected to an AI agent to respond to incoming messages

**Macrofrozen sql credential**

curl -H \'Authorization: AWS4-HMAC-SHA256 Credential=85bfaeb123301d01946411f127d21fea.sql.my/MAIA/20260629/ap-southeast-5/sqlaccount/aws4_request,SignedHeaders=host;x-amz-date,Signature=6978201f241287456c64a5063b662191b0f9d60eb54a02bf8eeb4760c37eb131\' -H \'X-Amz-Date: 20260629T031103Z\' \"https://api.sql.my/healthcheck\"

Code: MAIA

Username:maia-admin

Access key

[85bfaeb123301d01946411f127d21fea.sql.my/MAIA](http://85bfaeb123301d01946411f127d21fea.sql.my/MAIA)

Secret key

212183eeec4e64ec061177398a82abc36df188ec42008d3a5d60257a241d33b5
