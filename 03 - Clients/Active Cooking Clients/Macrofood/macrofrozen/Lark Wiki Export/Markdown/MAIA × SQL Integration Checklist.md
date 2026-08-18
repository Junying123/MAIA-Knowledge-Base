**MAIA × SQL Integration Checklist**

Dear Sir/Madam,

Hope you are doing well. I am reaching out on behalf of Macrofood, as we are currently working together on a project to implement [**MAIA**](https://www.ordermaia.com/) --- an AI-powered operational assistant that will sit on top of SQL to help their team handle sales orders, invoicing, and document management more efficiently.

As part of this project, we will be integrating MAIA into Macrofood\'s SQL environment. To proceed smoothly, we will need several items from your end. We have done our best to keep this list practical and specific --- many of the generic items that would not apply to a standard SQL setup have been removed.

We understand you are the system owner and the person who set up and maintains Macrofood\'s SQL. We would appreciate your support in working through the items below. If any item is unclear or does not apply, please just let us know and we will clarify.

Note

All documents can be uploaded to the google drive link below

https://drive.google.com/drive/folders/1enY9xDj0EjJGgD1XxQEldGYXzsWddyIu?usp=drive_link

**What we are building**

MAIA will connect to SQL to:

Read customer records (debtor maintenance) and item(SKU) master data

Push confirmed sales orders and invoices into SQL

Reference pricing and stock data during order creation

SQL remains the accounting and invoicing core throughout. MAIA does not replace it.

**What we need from you**

1\. **Your contact details as system owner**

So we can reach you directly when technical questions come up during integration and testing.

  ------------------------------------- -----------------
  Field                                 Your response

  Full name                             Mr Chua

  Role                                  

  Phone / WhatsApp                      +60 12-212 2126

  Email                                 

  Escalation contact (if different)     
  ------------------------------------- -----------------

2\. **SQL system information**

Please confirm or correct the details below, and provide anything missing.

  ----------------------------------- -------------------- --------------------------------------------------
  Item                                **Known / Status**   **Please provide**

  System name                         SQL                  Confirm

  Version / build number              Unknown              Please confirm exact version / build

  Hosting type                        Unknown              Confirm (on-premise / cloud) and access endpoint

  Installed modules                   Unknown              Please list all active modules

  API documentation                   Not yet received     Please share if available

  SDK or integration guide            Not yet received     Please share if available

  Import / export documentation       Not yet received     CSV/Excel/XML templates if available

  Known limitations or restrictions   Unknown              Please flag anything we should be aware of
  ----------------------------------- -------------------- --------------------------------------------------

3\. **Staging or test environment**

We prefer to test the integration in a staging or test environment before touching live data. This protects Macrofood\'s production records during development.

**Do you have a staging / test environment available for Macrofood\'s SQL?**

If yes --- please confirm the data was cloned from live, and the date of the last refresh.

If no --- please advise your recommended approach for safe integration testing.

  --------------------------------------------------------------
  *(Input details here)*

  --------------------------------------------------------------

4\. **Remote or server access**

Depending on how Macrofood\'s SQL is hosted, we may need remote access to set up and test the integration middleware. Please advise:

What remote access method is available? (e.g. RDP, SSH, AnyDesk, UltraViewer, web-based admin panel)

Are there any restrictions on who can be given access?

Is there an approval process or form to complete?

  ---------------------------------------------------------------------------------------------------------------------------------------------------------------------
  If the integration is fully API-based and no server-side deployment is needed, this section may not apply --- we will confirm once we review the API documentation.

  ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

  --------------------------------------------------------------
  *(Input details here)*

  --------------------------------------------------------------

5\. **Network, firewall, and IP whitelist requirements**

For MAIA\'s servers to communicate with SQL, we may need certain IP addresses or ports to be whitelisted.

Please advise:

Are there firewall rules or IP whitelist requirements we need to comply with?

  --------------------------------------------------------------
  *(Input details here)*

  --------------------------------------------------------------

What ports are open for external API access?

  --------------------------------------------------------------
  *(Input details here)*

  --------------------------------------------------------------

Is there a VPN requirement to access the SQL environment?

  --------------------------------------------------------------
  *(Input details here)*

  --------------------------------------------------------------

How long does access approval take, and who approves it?

  --------------------------------------------------------------
  *(Input details here)*

  --------------------------------------------------------------

6\. **Middleware hosting (if required)**

If any integration component needs to be installed on the server side (rather than hosted on MAIA\'s AWS infrastructure), please advise:

Server location (physical or cloud)

Operating system

Whether internet access is available from the server

Whether administrator rights can be granted to Mindhive

Any startup or restart procedures we need to follow

Any operational constraints (e.g. no restarts during business hours)

  -------------------------------------------------------------------------------------------
  We will confirm whether server-side deployment is needed once we review the API approach.

  -------------------------------------------------------------------------------------------

7\. **Login and access credentials for integration testing**

We will need a working account to validate data mappings and test transactions end-to-end. Please provide:

**SQL login** --- URL or client and a test user account with sufficient permissions to view records and create transactions

**API user credentials** --- API token or key, authentication method, environment details (sandbox vs production)

**Read-only database access** --- if direct DB access is available and relevant

**Test user account** --- ideally with the same permission level as Macrofood\'s sales coordinators

  --------------------------------------------------------------
  *(Input details here)*

  --------------------------------------------------------------

8\. **Access timing and constraints**

Please let us know if there are any restrictions on when Mindhive can access the system:

Allowed support hours (e.g. weekdays only, 9am--6pm)

Any blackout periods (e.g. month-end closing, audit periods)

Maintenance windows

Whether you or a member of your team needs to be present during testing sessions

  --------------------------------------------------------------
  *(Input details here)*

  --------------------------------------------------------------

9\. **SQL client access confirmation**

Before integration development begins, we would like to confirm that Mindhive can successfully:

Log in to SQL

View debtor (customer) records

View item / inventory records

View and create sales orders and invoices

Perform basic test transactions without affecting live data

Please share the web application URL or local client setup guide so we can confirm access.

10\. **Customisation documentation**

If any of the following have been added to Macrofood\'s SQL, please let us know:

User-defined fields (UDF) on any module

Custom tables or forms

Custom approval workflows

Custom report templates

Any scripts, plugins, or third-party integrations already connected

Even minor customisations can affect how data is structured and how MAIA reads or writes records.

  --------------------------------------------------------------

  --------------------------------------------------------------

  -------------------------------------------------------------------------------------------------------
  *Any customization that falls outside Base MAIA features is considered out of scope for this project*

  -------------------------------------------------------------------------------------------------------

**Summary checklist**

  ----------- -------------------------------------------------- --------------
  \#          Item                                               Status

  1           System owner contact details                       ☐

  2           SQL version, modules, API/SDK/import/export docs   ☐

  3           Staging / test environment confirmation            ☐

  4           Remote / server access method                      ☐

  5           Firewall, IP whitelist, port requirements          ☐

  6           Middleware hosting details (if applicable)         ☐

  7           Login credentials --- web/client, API, test user   ☐

  8           Access timing and constraints                      ☐

  9           Web URL / client access confirmed                  ☐

  10          Customisation documentation                        ☐
  ----------- -------------------------------------------------- --------------

All documents can be uploaded to the google drive link below:

https://drive.google.com/drive/folders/1enY9xDj0EjJGgD1XxQEldGYXzsWddyIu?usp=drive_link

\|（注：部分内容可能由 AI 生成）
