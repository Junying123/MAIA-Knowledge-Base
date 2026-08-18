**Fixguru Product Readiness Checklist**

**1. Product Team**

**Goal:** preparation for UAT Briefing tmr

**Requirements & Scope**

Verify user acceptance testing (UAT) is completed in staging

**UAT**

Get Participants phone numbers for Chatbot usage

UAT Deck

User Manual

UAT Form

Bug Reporting form

UAT Participants ERP accounts

E2E Testing on staging before UAT briefing

ERP

Chatbot

Product to do\'s

Get API Documents from Vendor

Schedule Inventory listing with tech team

Outcome:

**2. ERP (Frappe)**

**Goal:** Ensure ERP instance is stable, data-safe, and migration-ready

**Pre-Migration**

Backup database & files (bench backup)

Ensure Frappe & app versions match between staging & production

Export relevant DocTypes if schema changes are involved

Disable scheduled jobs during migration (if necessary)

**Migration**

Apply migrations (bench migrate) in staging first, verify no errors

Test reports, workflows, and custom scripts after migration

Validate role permissions after update

**Post-Migration**

Re-enable scheduled jobs

Run bench clear-cache and bench clear-website-cache

Monitor for error logs in frappe.log and worker.error.log

Add email account and include gmail app password

Add OAuth2 client and update enc with client id and secret

Run Database Seeder Company (Account, Chart of Account, Bank, Bank Account)

Run Database Seeder Roles (Custom DocPerm)

Run Database Seeder Mode of Payment

Run Database Seeder Payment Term for the environment

Run Database Seeder Sales Taxes and Charges Templates (Sales Taxes and Charges) for the environment

Run Database Seeder fulfillment methods in the Shipping Rule

Run Database Seeder Notifications (Notifications recipients)

Run Database Seeder Item Group, Customer Group

**3. Chatbot Setup (Flowise AI, Chatwoot, Twilio, Telegram)**

**Goal:** Ensure conversation flow, integrations, and accounts are configured correctly

**Pre-Migration Setups**

PostgreSQL Database

AWS S3 (for Chatwoot)

Ensure Twilio phone numbers are purchased

Telegram Bot created via BotFather

**Setup**

OpenAI API Key

Flowise API Key

Variables (FastAPI URL, email, phone, name)

Export & Import AgentFlows (Flowise)

Inbox Setup (WhatsApp, Telegram, Twilio) -- Chatwoot

Configure Twilio Webhook to point to Chatwoot Inbox

Configure Telegram bot in Chatwoot Inbox

Bot Configuration (point to Middleware\'s Webhook) -- Chatwoot

**Middleware Configurations**

Setup Google API credentials

Get Google JSON credentials

Setup Bot Configurations JSON and point to correct Flowise Chatflows using Flowise API Keys

Setup Pinecone API for RAG vector database

**Testing**

Test chatbot flows end-to-end in staging with real use cases

Execute the RAG test scripts

**Notes**

\@Wei Yon: Need written version of AgentFlows (Flowise)

WhatsApp (Twilio) is used for **Staging** and **Production**

Telegram is used for **Development**

**4. Middleware (FastAPI)**

**Goal:** Ensure API services, background jobs, and integrations work smoothly

**Pre-Migration**

Backup .env files & environment-specific configs

Backup database (if FastAPI service uses its own DB)

Verify dependencies are updated & tested in staging

Document new API endpoints for frontend/backend teams

**Migration**

Deploy code to staging and run integration tests

Apply DB migrations (Alembic) in staging, verify data consistency

Deploy to production with zero-downtime strategy if possible

**Post-Migration**

Verify API health endpoints respond successfully

Test all integrations (ERP, chatbot, payment gateways, etc.)

Monitor logs for exceptions and performance issues

**5. Frontend (React Vite, Vercel)**

**Goal:** Ensure user interface changes are properly deployed and functional

**Pre-Migration**

Backup existing deployment in Vercel (if rollback needed)

Test build process pnpm build in staging

Verify all environment variables are correctly set in Vercel dashboard

  -----------------------------------------------------------
  Plain Text\
  VITE_APP_API_URL= staging-link\
  VITE_APP_MIDDLEWARE_API_URL= staging-link\
  VITE_APP_LIVE_AGENT_URL= staging-link

  -----------------------------------------------------------

**Migration**

Deploy to staging & run browser testing

Confirm API endpoints point to the correct environment

**Post-Migration**

Test user authentication

Confirm App API endpoints point to the correct environment

Confirm Middleware API endpoints point to the correct environment

Try uploading through Receipt module

Able to see the result of the upload

Confirm Live Agent URL points to the correct environment

**6. Infra (DB, EC2, Networking)**

**Goal:** Ensure servers, databases, and networking are stable for go-live

**Database**

Backup all databases (mysqldump / pg_dump)

Verify DB migration scripts in staging first

Test rollback plan before production migration

Chatwoot: Create db (farmshop_chatwoot_staging)

Frappe : Create db

Create db locally

Update the user to % when db created

  -------------------------------------------------------------------------------------------
  SQL\
  RENAME USER \'farmshop_staging_db\'@\'180.74.217.145\' TO \'farmshop_staging_db\'@\'%\';\
  FLUSH PRIVILEGES;

  -------------------------------------------------------------------------------------------

**Servers**

Ensure EC2 instance has correct security groups & firewall rules

EC2 Instance provision for (Middleware, Chatwoot, Flowise) \[Managed by Terrraform Script\]

Chatwoot : setup docker

  --------------------------------------------------------------
  Bash\
  \# first time setup db for chatwoot\
  docker compose run \--rm rails bundle exec rails db:prepare\
  docker compose run \--rm rails bundle exec rails db:seed\
  docker compose up -d

  --------------------------------------------------------------

Flowise : setup docker

Middleware :

Add git branch

bot_configs.json setup

**Domain**

Domain records provision for (Middleware, Chatwoot, Flowise) \[Managed by Terrraform Script\]

**File Management**

Setup S3 Bucket

**Networking**

Verify domain & SSL certificates are valid and not expiring soon

Test Nginx/Load Balancer configurations in staging

Ensure failover and backup systems are operational

**Post-Migration**

Monitor metrics (CPU, RAM, DB queries) for 24--48 hours after release

Check for error spikes in application logs

From Client:

company profile (comapny narrative, certifications, policies, SLA, licenses)

customer database

Item database (all skus structure, product catalogue)

user database

Company workflow document (if existing, else Mindhive need to map out their process)

External Integrations (architecture, credentials, documentation, access, vendor contact)

Whatsapp account (minimum 1 number, setup and configured WABA)

PIC for the project (person who has authority to get shit done in client side)

VPC access : *if deployed in their cloud envi*

From Mindhive:

Company workflow document + how they will use maia (updated from 5.)

Item Category-Subcategory Breakdown / Item Taxonomy Excel (provided by Mindhive, populated by mindhive/client, signed off by both)

External Integration Proposal (proposed by mindhive, reviewed & signed off by client)

Guide to Set up WABA for company number

Implementation Timeline

PIC for the client (MH rep who will facilitate their journey)

Product usage manual

Cadence for client (weekly/bi-weekly)

Training plan for client
