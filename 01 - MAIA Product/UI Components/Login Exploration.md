---
owner: Gareth
status: approved
last_reviewed: 2026-02-21
---

# OMS Login Page — Manual Exploration Log

**Target URL:** `https://maia-oms-dev.vercel.app/login`
**Environment:** MAIA OMS Dev

---

## UI Components

### Header/Controls
- **Theme Radiogroup:**
  - System theme (radio)
  - Light theme (radio)
  - Dark theme (radio)

### Login Form
- **Label:** Email
- **Textbox** (placeholder: `you@company.com`)
- **Label:** Password
- **Link:** Forgot your password? (href: `#forgot-password`)
- **Password textbox** (placeholder: `Enter your password`)
- **Button:** Show password
- **Button:** Sign in (initially disabled; enables when both fields filled)

### Footer/Links
- "By signing in, you agree to our Terms of Service and Privacy Policy"
- Link: Terms of Service (href: `#terms`)
- Link: Privacy Policy (href: `#privacy`)
- Link: Create one (href: `/signup`)

---

## URLs and Navigation

- Login page: `https://maia-oms-dev.vercel.app/login`
- Forgot password: `#forgot-password`
- Terms of Service: `#terms`
- Privacy Policy: `#privacy`
- Sign up: `/signup`

---

## Successful Login Test (Chrome Browser)

### Test Credentials
- Email: `admin@example.com`
- Password: `123456`

### Test Results
1. **Navigation:** Successfully loaded login page
2. **Form Filling:** Entered email and password — Sign in button became enabled after both fields filled
3. **Login Submission:** Clicked "Sign in" — Form fields became disabled (loading state), button showed loading indicator
4. **Authentication:** API call to `https://maia-om-backend.mindhive.asia/api/method/mindhive_erpnext_apis.mindhive_erpnext_apis.core.endpoints.v1.auth.login_encrypted` — Login successful
5. **Post-Login Navigation:** Redirected to `/sales` (Sales Management Dashboard)

### Key Findings
- ✅ Login credentials `admin@example.com` / `123456` are valid for dev environment
- ✅ Sign in button enables properly when both email and password fields are filled
- ✅ Login API endpoint uses encrypted authentication
- ✅ Successful login redirects to `/sales` dashboard
- ✅ No console errors during login process
- ✅ Form validation works correctly

### Dashboard After Login
- Sidebar navigation: Sales Management, Overview, Selling, Billing, Payments, Fulfillment, Customer Service
- User profile: "Administrator Administrator"
- Sales dashboard with Total Sales metrics
- Data table with sales reports (Sales Report Q1, Customer Analysis, Product Performance)

---

## Notes and Anomalies

- Sign in button remained disabled after entering credentials in one test session (browser extension environment issue)
- Screenshot capture failed in some environments; screenshots require Chrome browser
- "Create one" link shows `/signup` in metadata but navigation did not occur on click in some sessions

---

## See Also

- [[All Workspace Modules]]
- [[Sidebar Categories Quick Reference]]
- [[Sidebar Navigation URLs]]
