1. # System Owner & Technical Contacts
    

Please provide:

- Primary system/integration owner:
    
- Technical contact: Mr. Chua
    
- Phone: +60 12 212 2126
    
- Email:
    
- Role/responsibility:
    
- Escalation contact:
    

This will help us coordinate technical discussions and expedite issue resolution when required.

---

2. # System Information & Integration Documentation
    

Please provide:

- System name:
    
- Current version/build:
    
- Installed components/modules:
    
    - API Windows Service
        
    - API Tray / Configure API tool
        
    - companion plugin package
        
    
- API documentation
    
    - API documentation is available. We can provide:
        
        - Developer Guide
            
        - OpenAPI specification
            
        - Postman collection and environment file
            
    
- SDK documentation (if available)
    

There is no separate SDK at the moment. Integration is through REST API endpoints using the API documentation/Postman/OpenAPI artifacts.

- Import/Export documentation
    

For import/export, our integration method is primarily REST JSON API. We do not currently use SFTP/file-drop integration unless it is separately scoped. Configuration export/import exists for support/backup purposes, but that is not the normal MAIA integration data exchange method.

- Integration guides
    

Integration guidance/training can be provided together with the API setup and staging trial.

- Known limitations or restrictions
    

- Access depends on the configured SQL account book, API credentials, and licensed/enabled modules.
    
- ⁠Write endpoints create real SQL transactions, so staging/testing should be done on a cloned/restored test database first.
    
- Report endpoints currently provide JSON data, not native SQL report/PDF rendering.
    
- Public/client-side apps should not store API keys or AutoCount/SQL credentials directly.
    
- Production go-live should be subject to final UAT, access/security approval, and customer environment confirmation.
    

---

3. # Staging / Development Environment
    

To avoid testing directly on live production data, kindly provide:

- Staging/Test environment access (if available)
    
- Confirmation that production data has been cloned or backed up into the testing environment
    
- Latest data refresh date
    

If a staging environment is unavailable, please let us know the recommended approach for testing.

We can provide a 1-month staging/trial setup for MAIA testing, either on-premise or against a cloned/restored backup database from Macrofrozen's SQL environment.

  

Production data can be backed up from Macrofrozen's SQL server PC and restored into a testing environment for staging validation.

  

For “latest data refresh date”, our understanding is that this means the date/time when the staging/test database was last refreshed from production. We can confirm this once the backup/restore is performed.

---

4. # Remote Access / Server Access
    

If integration middleware or services need to be deployed within the client's environment, please provide:

- Bastion access
    
- RDP access
    
- SSH access
    
- AnyDesk / UltraViewer details
    
- Any other remote access method
    

Remote access to Macrofrozen's SQL server/network must be requested and approved by Macrofrozen's directly. [Vendor] can assist technically once access is approved.

---

5. # VPN, Firewall & Network Requirements
    

Please provide:

- VPN requirements
    
- VPN profile/configuration
    
- Firewall requirements
    
- IP whitelist requirements
    
- Required ports
    
- Access approval process
    
- Access validity period
    

At this stage, there is no fixed VPN profile/configuration from [Vendor] to provide unless Macrofrozen requires one.

  

Firewall / port requirements:

•⁠ ⁠The SQL API service uses port 8016 by default.

•⁠ ⁠Final access method depends on the agreed deployment route, for example local network, VPN, or approved secure tunnel/public endpoint.

•⁠ ⁠Any inbound firewall rule, IP whitelist, or VPN requirement should be confirmed with Macrofrozen's IT/network owner.

  

IP whitelist requirements:

•⁠ ⁠None fixed from vendor side at the moment.

•⁠ ⁠If MAIA will connect from a fixed server/IP, please provide the source IP(s) so macrofrozen/vendor can review whitelisting.

  

Access approval process:

•⁠ ⁠Remote/server/network access approval should go through Macrofrozen.

•⁠ ⁠API access credentials will be issued separately for the staging environment.

  

Access validity period:

•⁠ ⁠Proposed staging/API trial access period: 1 month, unless extended by agreement.

---

6. # Middleware Hosting Information (If Required)
    

If middleware deployment is required, kindly provide:

- Server/PC location
    
- Operating system
    
- Internet access availability
    
- Administrator rights availability
    
- Service account details
    
- Startup/restart procedures
    
- Any operational constraints
    

If “middleware” refers to the API bridge between MAIA and SQL, then yes, SQL API acts as the middleware layer.

It is normally hosted on the customer’s SQL/server environment as a Windows Service, with a tray/configuration tool for setup and diagnostics.

The public/local API URL will be provided after the service is installed and configured for the selected environment.

---

7. # System Login & Access Credentials
    

Please provide the necessary access required for integration and testing:

- Web application login
    
- Desktop/local client login
    
- API user credentials
    
- Read-only database access (if applicable)
    
- Test user account with appropriate permissions
    

There is no separate web application login for MAIA at this point.

  

Desktop/local client login or AutoCount service login credentials are internal runtime credentials and should not be shared directly with third-party integrators.

  

For MAIA integration, the relevant credentials are API-level credentials, such as:

•⁠ ⁠API base URL

•⁠ ⁠AppId / company key

•⁠ ⁠API key / authorization token

  

These should be generated specifically for staging/testing and shared through a secure channel.

  

Read-only database access is not normally required if MAIA integrates through the API. If direct database access is requested, we would need to understand the reason and get Macrofrozen's approval, because direct database access has higher security and support risk.

  

Test user account / permission:

For API testing, we can provide an API test credential with appropriate access during the 1-month staging period. We should not disclose the internal AutoCount service login unless there is a separately approved support reason.

---

8. # Access Timing Constraints
    

Please advise if there are any restrictions regarding:

- Allowed support hours
    
- Access windows
    
- Maintenance windows
    
- Blackout periods
    
- Requirement for client IT/vendor presence during testing
    

operating hours:

Monday - Friday: 9:00 AM - 6:00 PM

Saturday: 9:00 AM - 12:00 PM

  

Access window:

The API service can remain active unless the service, server, network, or agreed access route is down.

  

Maintenance window:

No fixed recurring maintenance window at the moment. Any planned maintenance, restart, update, or database refresh should be scheduled in advance with Macrofrozen and the integration team.

  

Blackout periods:

No fixed blackout period known from [Vendor] side. Actual restrictions may depend on Macrofrozen's business operation hours, server/network availability, and any planned maintenance.

  

Client IT/vendor presence during testing:

Not required by default, unless Macrofrozen's environment access or network policy requires their IT/vendor to be present.

---

9. # Application Access
    

Please provide:

- Web application URL (if applicable)
    
- Local client installation package/setup guide (if applicable)
    

We would like to confirm that our team can:

- Login successfully
    
- View records
    
- Create transactions
    
- Perform integration testing
    

Web/API URL:

To be provided after the API service is installed and configured for the target staging/production environment.

  

Local client installation/setup guide:

We have a production installation guide and setup package documentation. We can provide the appropriate external-facing setup guide if Macrofrozen approves sharing it for this project.

  

During the 1-month staging trial, your team should be able to log in using the provided API credentials, view records, create supported transactions, and perform integration testing against the staging database.

---

10. # Customization Documentation (If Applicable)
    

Please provide details of any customizations made to the system, including:

- User-defined fields (UDF)
    
- Custom tables
    
- Custom modules
    
- Custom forms
    
- Workflow customizations
    
- Reports
    
- Scripts
    
- Plugins
    
- Third-party integrations
    

This helps ensure we account for any non-standard implementation.

Yes, we understand why this section is requested. UDFs, custom tables, custom modules, custom workflows, reports, scripts, plugins, or third-party integrations may affect MAIA if MAIA needs to read/write those fields, create transactions that depend on them, or follow a customer-specific approval/business flow.

  

For security and scope control, we suggest handling this in an integration-relevant way instead of providing a full unrestricted inventory of Macrofrozen's production environment.

  

Please share the exact MAIA flows/endpoints you intend to integrate first, for example customer sync, item sync, sales order creation, invoice creation, payment update, approval status, etc. From there, we can identify which UDFs, custom fields, plugins, or workflow rules are relevant to those flows and provide the required mapping/validation details with Macrofrozen's approval.

  

We will not share unrelated production database details, credentials, scripts, or internal customizations unless they are required for the agreed integration scope and approved by Macrofrozen.

---