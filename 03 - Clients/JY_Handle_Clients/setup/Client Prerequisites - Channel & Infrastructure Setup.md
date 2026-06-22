# Client Prerequisites - Channel & Infrastructure Setup

This document lists everything a client should prepare before the MAIA channel and infrastructure setup meeting. It is meant to prevent setup delays caused by missing phone numbers, missing Meta admin access, incomplete business verification documents, missing payment cards, or unavailable credential owners.

Use this document before walking the client through:

- WhatsApp Business Platform / WhatsApp Business API setup
- Meta Business Account / Business Portfolio setup
- Meta Business verification
- Meta app and WhatsApp Business Account setup
- LLM API key setup, if required
- AWS setup, if client-hosted
- Secure credential handover to Mindhive

## 1. Recommended Attendees

Ask the client to have these people available during the setup meeting:

| Person | Why They Are Needed |
|---|---|
| Business owner / director / authorized approver | May be needed for Meta verification, company document confirmation, billing approval, and account ownership decisions. |
| Person with access to company email inbox | Needed for OTPs, email verification, Meta/AWS/OpenAI/Anthropic account creation, and recovery emails. |
| Meta Business admin | Needed if the company already has a Meta Business Account / Business Portfolio. |
| Person holding the MAIA phone number/SIM/landline | Needed to receive WhatsApp OTP by SMS or voice call. |
| Finance/admin person | Needed to provide company credit card or debit card and confirm billing limits. |
| IT/admin person, if client-hosted | Needed for AWS, domain/DNS, firewall, IAM access, and security setup. |

## 2. High-Level Preparation Checklist

The client should prepare the following before the meeting:

| Area | Required Before Meeting | Notes |
|---|---|---|
| Company email | Shared company email address | Prefer a shared mailbox such as `it@`, `admin@`, `finance@`, or `maia@company.com`; avoid personal staff email if possible. |
| Company payment card | Valid company credit card or debit card | Needed for AWS and LLM API accounts. Bank approval may be needed for international online transactions. |
| MAIA phone number | New or dedicated phone number | Must not be actively registered on WhatsApp personal app or WhatsApp Business app. Must receive SMS or voice OTP. |
| Company documents | Business registration and address proof | Needed for Meta Business verification and sometimes AWS/account checks. |
| Meta access | Existing Meta Business admin login, if available | If none exists, create a new Meta Business Account / Business Portfolio during setup. |
| LLM accounts | OpenAI / Anthropic account access, if required | Mindhive will confirm which provider is needed. |
| AWS account | AWS account access, if client-hosted | Only needed if the client is hosting MAIA infrastructure or related services. |
| Secure sharing method | Mindhive secure credential portal | Do not share API keys, passwords, or tokens by WhatsApp, email, screenshots, or meeting chat. |

## 3. Dedicated MAIA Phone Number

### What The Client Must Prepare

Prepare one phone number dedicated to MAIA.

The number can be:

- A new prepaid or postpaid mobile number
- A company landline that can receive Meta's voice call OTP
- An existing company number, only if it is not currently registered on WhatsApp

### Phone Number Requirements

The number must:

- Be dedicated for MAIA customer messaging
- Be able to receive SMS or voice call OTP
- Include the correct country code during setup
- Ideally be registered under the company name
- Not be used by staff for normal WhatsApp conversations
- Not be actively registered on WhatsApp personal app or WhatsApp Business app

### If The Number Is Currently Used On WhatsApp

If the number is currently registered on WhatsApp personal app or WhatsApp Business app, it must be deleted from the app before it can be connected to WhatsApp Business Platform.

Client should understand the impact before doing this:

- The number cannot be used in the regular WhatsApp app and WhatsApp Business Platform at the same time.
- Existing app-based chat operations may be interrupted.
- The client should export or back up important WhatsApp chat history before deleting the account, if needed.

### Malaysia Telco / KYC Notes

For Malaysian company numbers, telco KYC may be required. If a new company number is needed, buy and register it early. Activation can take 1 to 2 weeks depending on telco process, company documentation, and approval flow.

### Phone Number Information To Prepare

| Information | Example / Notes |
|---|---|
| Phone number with country code | `+60...` |
| Type | Mobile prepaid, mobile postpaid, or landline |
| Can receive SMS? | Yes / No |
| Can receive voice call? | Yes / No |
| Currently registered on WhatsApp? | Yes / No |
| Registered company/person name | Prefer company name |
| Person holding the phone/SIM during meeting | Name and phone |

## 4. Meta Business Account / Business Portfolio

Meta may refer to this as a Meta Business Account, Business Manager, or Business Portfolio depending on the UI.

### What Needs To Be Created If The Client Does Not Have One

If the client does not already have a Meta Business Account / Business Portfolio, create one during setup.

Prepare:

- Company Facebook login owner or admin
- Official business name
- Business email address
- Business phone number
- Business website, if available
- Registered business address
- Business category/industry
- Business registration documents
- Proof of address documents

### What To Check If The Client Already Has One

If the client already has a Meta Business Account / Business Portfolio, verify before the setup meeting:

- The client can log in to `business.facebook.com`
- The attendee has admin access
- The business name matches official registration documents
- Business address is current and matches proof documents
- Business email is accessible
- Business phone number is reachable
- The account is not restricted, disabled, or under review
- Two-factor authentication can be completed by the admin user

### Meta Account Risk Warning

If the account is restricted, disabled, banned, or under review:

- Stop setup immediately.
- Do not repeatedly retry verification.
- Do not create another Meta Business Account without discussing with Mindhive.
- Capture the visible rejection or restriction reason.
- Escalate to Mindhive.

Repeated attempts can make account recovery harder.

## 5. Business Documents Needed For Meta

Meta may request documents during Business verification. The exact document request can vary by country, business type, and account risk profile. The safest preparation is to have documents that prove:

- Legal business name
- Registered business address
- Business phone number
- Business website/domain ownership, if requested
- Authorized representative or business owner identity, if requested

### Core Documents To Prepare

| Document | Purpose | Notes |
|---|---|---|
| Company registration certificate | Proves legal company existence and legal name | For Malaysia, this is commonly SSM documentation or company incorporation document. |
| Business profile / company extract | Supports legal name, registration number, directors, and registered address | Useful when the registration certificate alone does not show enough information. |
| Address proof | Proves business address | Utility bill, bank statement, telco bill, tenancy agreement, or official document showing company name and address. |
| Company bank statement | Can support legal entity and address | Sensitive financial details may be redacted if document still satisfies verification requirements. |
| Tax registration document, if available | Additional business identity support | Optional but useful if requested. |
| Business license, if applicable | Supports regulated business activity | Useful for industries that require licenses. |
| Website/domain proof, if available | Supports business legitimacy | Website should show company name, product/service, and ideally contact details. |

### Document Quality Requirements

Prepare documents that are:

- Clear and readable
- Not cropped
- Not expired
- Not password-protected
- In a common format such as PDF, JPG, or PNG
- Showing the same legal business name used in Meta
- Showing the same business address entered in Meta, where applicable

### Common Causes Of Meta Verification Rejection

| Issue | How To Avoid It |
|---|---|
| Business name mismatch | Enter the legal company name exactly as shown on company documents. |
| Address mismatch | Use the same address across Meta, documents, billing, website, and telco records where possible. |
| Poor document scan | Upload a clear PDF or high-resolution image. |
| Unsupported document | Prepare multiple official documents in case Meta rejects one. |
| Display name too generic | Use an official brand/company name, not a generic phrase like "Sales Team" or "WhatsApp Bot". |
| Account restriction | Stop and escalate instead of retrying repeatedly. |

## 6. WhatsApp Business Platform Setup Prerequisites

MAIA uses WhatsApp Business Platform / WhatsApp Business API, not the normal WhatsApp app.

### What Needs To Be Created If Not Existing

During setup, the client may need to create:

- Meta Business Account / Business Portfolio
- Meta Developer app
- WhatsApp product inside the Meta app
- WhatsApp Business Account (WABA)
- WhatsApp phone number registration
- System User
- Permanent System User access token

### Information Needed During WhatsApp Setup

| Field | What To Prepare |
|---|---|
| App name | Usually `[Company Name] WhatsApp Bot` or `[Brand Name] MAIA`. |
| App contact email | Company email address. |
| Business Account | Client's Meta Business Account / Business Portfolio. |
| WhatsApp display name | Official company or brand name shown to WhatsApp users. |
| Timezone | Client business timezone. |
| Business category | Industry/category closest to the client's business. |
| Business description | 1-2 sentence description of the company. |
| Phone number | Dedicated MAIA number with country code. |
| Verification method | SMS or voice call, depending on what the number can receive. |

### WhatsApp Display Name Preparation

Prepare a display name before the meeting. It should:

- Represent the real company, brand, product, or service
- Be recognizable to customers
- Avoid misleading or overly generic wording
- Avoid using "WhatsApp" unless it is part of an approved official brand context
- Avoid promotional claims or unnecessary descriptions

Recommended format:

- `[Company Brand]`
- `[Company Name]`
- `[Company Name] Customer Service`

Avoid:

- `MAIA Bot`
- `Sales Team`
- `WhatsApp Support`
- `Best Cheap Supplier`
- Any name unrelated to the registered company or brand

## 7. Meta Credentials And IDs To Collect

After WhatsApp setup, these values must be collected and shared with Mindhive through the secure credential portal.

| Credential / ID | Where It Is Found | Notes |
|---|---|---|
| Phone Number ID | Meta Developers > My Apps > selected app > WhatsApp > API Setup | Required for MAIA WhatsApp channel connection. |
| WhatsApp Business Account ID | Meta Developers > My Apps > selected app > WhatsApp > API Setup | Required for MAIA WhatsApp account connection. |
| Temporary access token | Meta Developers > WhatsApp > API Setup | Testing only; usually short-lived. |
| Permanent System User token | Meta Business Settings > Users > System Users | Required for production setup. |

### Meta Token Permissions Required

The permanent token should include:

- `whatsapp_business_management`
- `whatsapp_business_messaging`

Do not share the token through email, WhatsApp, screenshots, documents, or meeting chat.

## 8. OpenAI API Account Prerequisites, If Required

Mindhive will confirm whether OpenAI is required for the client's deployment.

### What Needs To Be Prepared

- Company email address
- Payment card
- Billing owner approval
- Monthly budget/usage limit
- Secure credential portal access

### What Needs To Be Created If Not Existing

- OpenAI Platform account
- Organization/project, if required
- Billing profile/payment method
- Production API key

### Recommended Settings

| Item | Recommendation |
|---|---|
| API key name | `MAIA Production` |
| Monthly starting budget | USD 50-100, unless Mindhive advises otherwise |
| Environment split | Separate staging and production keys if both environments exist |
| Sharing method | Secure credential portal only |

OpenAI secret keys are only fully shown when created. If the key is lost, create a new key and update the system.

## 9. Anthropic / Claude API Account Prerequisites, If Required

Mindhive will confirm whether Anthropic / Claude is required for the client's deployment.

### What Needs To Be Prepared

- Company email address
- Payment card
- Billing owner approval
- Monthly spend limit
- Secure credential portal access

### What Needs To Be Created If Not Existing

- Claude Console account
- Billing setup
- Production API key

### Recommended Settings

| Item | Recommendation |
|---|---|
| API key name | `MAIA Production` |
| Monthly starting budget | USD 50-100, unless Mindhive advises otherwise |
| Environment split | Separate staging and production keys if both environments exist |
| Sharing method | Secure credential portal only |

## 10. AWS Account Prerequisites, If Client-Hosted

AWS is only needed if the client is hosting MAIA infrastructure or related services in their own AWS account.

### What Needs To Be Prepared

- Shared company email address
- Strong password management method
- Company credit card or debit card
- Company billing address
- Phone number for account verification
- Authenticator app or security key for MFA
- Finance/admin approval for pay-as-you-go billing
- Monthly budget alert amount
- IT/admin person available, if possible

### What Needs To Be Created If Not Existing

- AWS account
- Root account MFA
- Billing budget alert
- IAM Role for Mindhive access, preferred
- IAM User access keys only if role-based access is not possible

### AWS Security Requirements

| Requirement | Notes |
|---|---|
| Use shared company email | Avoid tying AWS root ownership to a single employee's personal email. |
| Enable MFA on root account | Use authenticator app, passkey, or security key. |
| Do not use root for daily work | Root should only be used for account-level tasks. |
| Configure budget alerts | Prevent surprise cloud costs. |
| Prefer IAM Role for Mindhive | More secure than sharing long-term IAM user keys. |
| Never share root password casually | If temporary bootstrap access is unavoidable, share only through secure portal and rotate afterward. |

### AWS Cost Planning

For basic hosting, initial estimate may be around USD 150-200/month depending on deployment scope, traffic, storage, SSL/domain setup, and usage. Final cost should be confirmed during scoping and reflected in the SOW.

## 11. Domain / DNS Prerequisites, If Applicable

Domain/DNS access may be needed if MAIA or related services are hosted on a client-owned domain.

Prepare:

- Domain registrar login
- DNS provider login, such as Cloudflare, GoDaddy, Namecheap, Exabytes, or internal IT portal
- Person authorized to add DNS records
- Preferred subdomain, for example `maia.company.com`
- SSL/security approval, if handled by client IT

Common DNS records that may be requested:

- `CNAME`
- `A`
- `TXT`
- Verification records for hosting, email, or domain ownership

## 12. Webhook / Middleware Prerequisites, If Applicable

This applies if the deployment uses Chatwoot, custom middleware, or webhook-based WhatsApp routing.

Prepare:

- HTTPS callback URL, if client-hosted
- Firewall/network admin contact
- SSL certificate readiness
- Ability to allow Meta webhook traffic
- Client IT contact for troubleshooting

Mindhive will usually provide exact webhook URL and verify token values during implementation.

## 13. Credential Sharing Rules

Never share the following through email, WhatsApp, screenshots, shared docs, or meeting chat:

- Meta access tokens
- OpenAI API keys
- Anthropic API keys
- AWS root password
- AWS access key ID / secret access key
- Database passwords
- Webhook secrets
- Any long-lived production credential

Use the Mindhive secure credential portal.

If a credential is accidentally exposed:

1. Revoke or rotate it immediately.
2. Generate a replacement.
3. Inform Mindhive.
4. Confirm the exposed credential is no longer active.

## 14. Pre-Meeting Client Homework

Send this checklist to the client before the setup meeting.

### Required For All WhatsApp Setups

- [ ] Confirm dedicated MAIA phone number is ready.
- [ ] Confirm the number can receive SMS or voice call OTP.
- [ ] Confirm the number is not currently registered on WhatsApp.
- [ ] Prepare company email inbox access.
- [ ] Prepare official company name, address, phone, and website.
- [ ] Prepare business registration document.
- [ ] Prepare address proof document.
- [ ] Confirm who has Meta Business admin access.
- [ ] Confirm whether a Meta Business Account / Business Portfolio already exists.
- [ ] Prepare WhatsApp display name.
- [ ] Prepare business category and short business description.
- [ ] Confirm secure credential portal access.

### Required If Meta Business Account Does Not Exist

- [ ] Decide which company Facebook login/admin will create it.
- [ ] Prepare company email.
- [ ] Prepare legal business name.
- [ ] Prepare business address.
- [ ] Prepare business phone number.
- [ ] Prepare company website or public business page, if available.
- [ ] Prepare business documents for later verification.

### Required If LLM API Keys Are Needed

- [ ] Prepare company payment card.
- [ ] Confirm monthly budget limit.
- [ ] Create or access OpenAI Platform account, if needed.
- [ ] Create or access Claude Console account, if needed.
- [ ] Prepare secure credential portal access for API key handover.

### Required If AWS Is Needed

- [ ] Prepare shared company email.
- [ ] Prepare company payment card.
- [ ] Prepare phone number for AWS verification.
- [ ] Install authenticator app or prepare security key.
- [ ] Decide monthly budget alert threshold.
- [ ] Confirm IT/admin person can join the setup.
- [ ] Prepare domain/DNS access, if client domain will be used.

## 15. Meeting Success Criteria

By the end of the setup meeting, ideally:

- MAIA phone number is confirmed ready.
- Meta Business Account / Business Portfolio exists and is accessible.
- Meta app is created.
- WhatsApp product is added to the app.
- WhatsApp Business Account is created or selected.
- Phone number is added and OTP-verified.
- Business verification is submitted or confirmed approved.
- Phone Number ID is captured.
- WhatsApp Business Account ID is captured.
- Permanent System User token is generated and securely shared.
- LLM API keys are created and securely shared, if required.
- AWS account, MFA, budget, and Mindhive IAM access are completed, if required.

## 16. Common Blockers To Watch For

| Blocker | Impact | Recommended Action |
|---|---|---|
| Phone number still registered on WhatsApp app | Cannot register number on WhatsApp Business Platform | Delete existing WhatsApp registration only after client confirms migration readiness. |
| Client cannot receive OTP | Cannot verify phone number | Use SMS/voice alternative or switch to a reachable number. |
| No Meta admin in meeting | Cannot create app/WABA/token | Reschedule or ask admin to join. |
| Meta account restricted | Setup may fail or worsen restriction | Stop immediately and escalate. |
| Business documents do not match Meta details | Business verification may be rejected | Align legal name/address before submitting. |
| No company payment card | Cannot activate AWS or LLM billing | Ask finance/admin to join or complete billing later. |
| API key copied incorrectly or lost | Integration cannot proceed | Generate a new key and share securely. |
| AWS MFA not available | Account remains insecure | Prepare authenticator app/security key before meeting. |
| Domain/DNS owner unavailable | Hosting/domain setup delayed | Invite IT/domain owner or separate DNS session. |

## 17. Information To Share With Mindhive

| Area | Required Information | Sharing Method |
|---|---|---|
| Phone number | Confirmation that MAIA number is ready and can receive OTP | Email or project channel is acceptable for confirmation only. |
| WhatsApp | Phone Number ID | Secure credential portal preferred. |
| WhatsApp | WhatsApp Business Account ID | Secure credential portal preferred. |
| WhatsApp | Permanent System User token | Secure credential portal only. |
| OpenAI | Production API key, if applicable | Secure credential portal only. |
| Anthropic | Production API key, if applicable | Secure credential portal only. |
| AWS | IAM Role ARN, preferred | Secure credential portal or approved project channel, depending on sensitivity. |
| AWS | IAM access key ID and secret access key, fallback only | Secure credential portal only. |

## 18. References

- Local guide: `03 - Clients/JY_Handle_Clients/setup/Compiled Channel & Infrastructure Setup Guide.md`
- Meta Developers: Add a phone number to WhatsApp Cloud API: https://developers.facebook.com/docs/whatsapp/cloud-api/get-started/add-a-phone-number
- OpenAI Help: API keys are managed from the API key page and full secret keys are only shown at creation: https://help.openai.com/en/articles/4936850-where-do-i-find-my-openai-api-key
- Anthropic Help: Claude Console is used for API keys, users, billing, and Workbench: https://support.claude.com/en/articles/8114521-how-can-i-access-the-claude-api
- AWS IAM: AWS root user security and root-account best practices: https://docs.aws.amazon.com/IAM/latest/UserGuide/id_root-user.html
- AWS IAM: Assign virtual MFA device: https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_mfa_enable_virtual.html
- AWS Cost Management: Create budgets: https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-create.html
