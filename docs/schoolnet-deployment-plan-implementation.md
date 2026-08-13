# Schoolnet Deployment Plan & Implementation Guide

> **File:** `schoolnet-deployment-plan-implementation.md`
>
> **Purpose:** Deployment and hosting implementation brief for the Schoolnet website prototype.
>
> **Target usage:** Very low traffic initially, approximately **5 users or fewer**.
>
> **Primary goals:** Extremely low cost, simple deployment, professional security, fast global delivery, and an easy upgrade path when the application becomes production-grade.

---

# 1. Recommended Hosting Architecture

For the current Schoolnet prototype, use:

- **GitHub** — source code repository
- **Cloudflare Pages or Cloudflare Workers** — application hosting
- **Cloudflare CDN** — global delivery
- **Cloudflare SSL/TLS** — HTTPS
- **Cloudflare Access** — optional protection for the private prototype
- **Custom domain** — optional but recommended
- **Mock authentication inside the application** — Student / Teacher / Admin demo personas

At this stage, do **not** introduce:

- ECS
- EKS / Kubernetes
- EC2
- ALB / NLB
- RDS / Aurora
- Redis
- complex VPC networking

Those components are unnecessary for the expected usage and would add avoidable cost and operational overhead.

---

# 2. Target Architecture

```text
                         ┌───────────────────────────┐
                         │          GitHub           │
                         │                           │
                         │  Schoolnet Source Code    │
                         └─────────────┬─────────────┘
                                       │
                                       │ git push / PR merge
                                       ▼
                         ┌───────────────────────────┐
                         │        Cloudflare         │
                         │                           │
                         │   Pages / Workers CI/CD   │
                         └─────────────┬─────────────┘
                                       │
                                       ▼
                  ┌─────────────────────────────────────────┐
                  │        Cloudflare Global Network        │
                  │                                         │
                  │  CDN + TLS + DNS + Security + Caching   │
                  └───────────────────┬─────────────────────┘
                                      │
                         Optional     │
                       Cloudflare     │
                         Access       │
                                      ▼
                  ┌─────────────────────────────────────────┐
                  │       Schoolnet Web Application         │
                  │                                         │
                  │  Homepage                               │
                  │  Schools                                │
                  │  Students                               │
                  │  Teachers                               │
                  │  Solutions                              │
                  │  Impact                                 │
                  │  Demo Form                              │
                  │                                         │
                  │  Mock Portal                            │
                  │  ├── Student                            │
                  │  ├── Teacher                            │
                  │  └── School Admin                       │
                  └─────────────────────────────────────────┘
```

---

# 3. Pages vs Workers Decision

Use this decision rule.

## Option A — Cloudflare Pages

Use **Cloudflare Pages** if the application is primarily:

- static
- client-side rendered
- React SPA
- exported/static Next.js
- marketing pages
- mocked dashboards
- mocked authentication
- no server-side rendering requirements
- no API/backend requirements

This is the simplest deployment model.

### Recommended for the initial Schoolnet prototype

If all application behavior can run in the browser, use Pages.

---

## Option B — Cloudflare Workers + OpenNext

Use **Cloudflare Workers** if the implementation uses Next.js features such as:

- SSR
- route handlers
- server actions
- middleware
- dynamic rendering
- server-side authentication
- API endpoints
- future backend-adjacent functions

If Next.js is used with these capabilities, use the current supported **OpenNext/Cloudflare deployment approach** rather than attempting to force a full server-rendered application into a purely static Pages deployment.

---

# 4. Initial Recommendation

For the current phase:

## Preferred

```text
Next.js
TypeScript
Tailwind CSS
        │
        ▼
Cloudflare Workers / OpenNext
```

This gives the project more flexibility later while remaining extremely inexpensive for very small usage.

If the current Codex/Claude implementation is a pure static build, Cloudflare Pages is equally acceptable.

Do not redesign the application merely to satisfy one deployment mechanism.

---

# 5. Environment Strategy

Use three environments.

```text
Local
Preview
Production
```

---

## Local

Developer machine.

Example:

```bash
npm install
npm run dev
```

Expected URL:

```text
http://localhost:3000
```

---

## Preview

Automatically deploy pull requests or non-production branches.

Example URL:

```text
https://<branch-name>.<project>.pages.dev
```

or the equivalent Cloudflare Workers preview URL.

Use Preview for:

- UI reviews
- stakeholder reviews
- testing
- accessibility checks
- mobile validation
- content review

Protect Preview using Cloudflare Access if necessary.

---

## Production

Production branch:

```text
main
```

Recommended custom domain:

```text
schoolnet-demo.example.com
```

or:

```text
demo.schoolnetindia.com
```

if the organization controls DNS and approves the subdomain.

Do not modify the live Schoolnet production domain without explicit approval.

---

# 6. Git Branch Strategy

Keep the workflow simple.

```text
main
│
├── feature/homepage-redesign
├── feature/student-demo
├── feature/teacher-demo
├── feature/admin-dashboard
└── feature/cloudflare-deployment
```

Recommended workflow:

1. Create feature branch.
2. Implement changes.
3. Push to GitHub.
4. Cloudflare creates preview deployment.
5. Review preview.
6. Open pull request.
7. Run checks.
8. Merge into `main`.
9. Production deploy runs automatically.

---

# 7. Repository Structure

Recommended project structure:

```text
schoolnet/
├── AGENTS.md
├── README.md
├── package.json
├── next.config.*
├── tsconfig.json
├── public/
├── src/
├── docs/
│   ├── schoolnet-redesign-implementation-prompt.md
│   └── schoolnet-deployment-plan-implementation.md
└── ...
```

`AGENTS.md` should point coding agents to both implementation documents.

Example:

```md
# Schoolnet Project Instructions

Before implementation, read:

- docs/schoolnet-redesign-implementation-prompt.md
- docs/schoolnet-deployment-plan-implementation.md

Treat these as the UX/product and deployment sources of truth.

Preserve the existing technology stack where practical.
Do not invent Schoolnet facts.
Use placeholders where verified public information is unavailable.
Run validation before completing implementation.
```

---

# 8. Cloudflare Account Setup

Create or use an existing Cloudflare account.

Recommended setup:

```text
Cloudflare Account
   │
   ├── DNS
   ├── Pages / Workers
   ├── Access
   └── Analytics
```

Use a team-owned Cloudflare account rather than an individual's personal account for any long-lived deployment.

---

# 9. GitHub Integration

Connect Cloudflare to the GitHub repository.

Grant Cloudflare only the repository access it requires.

Preferred:

```text
Selected repositories only
```

rather than:

```text
All repositories
```

Configure:

```text
Production branch: main
```

Enable preview deployments for pull requests.

---

# 10. Build Configuration

The coding agent must inspect the repository and determine the correct commands.

Typical Next.js example:

```bash
npm ci
npm run build
```

Typical package manager alternatives:

```bash
pnpm install --frozen-lockfile
pnpm build
```

or:

```bash
yarn install --frozen-lockfile
yarn build
```

Do not switch package managers without a strong reason.

---

# 11. Cloudflare Pages Deployment

Use this if the project is static-compatible.

Typical build settings:

```text
Framework preset:
Next.js / React as appropriate

Production branch:
main

Build command:
npm run build

Output directory:
Depends on application configuration
```

For a static Next.js export, ensure the project is intentionally configured for static output.

Do not assume every Next.js application can be exported statically.

---

# 12. Cloudflare Workers Deployment

For a full Next.js deployment, configure the project for the current Cloudflare-compatible OpenNext flow.

The coding agent should:

1. Inspect the installed Next.js version.
2. Use the currently supported Cloudflare/OpenNext adapter.
3. Add the required Cloudflare configuration.
4. Add deployment scripts.
5. Test locally.
6. Deploy to a preview environment.
7. Validate SSR/routes.
8. Deploy production.

Possible scripts may resemble:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "preview": "<cloudflare preview command>",
    "deploy": "<cloudflare deploy command>"
  }
}
```

Do not blindly copy commands from old documentation.

Use the versions installed in the repository and the current Cloudflare documentation.

---

# 13. Custom Domain

For stakeholder review, a professional custom domain is recommended.

Examples:

```text
demo.schoolnetindia.com
```

or:

```text
preview.schoolnetindia.com
```

or another approved domain.

Preferred architecture:

```text
demo.schoolnetindia.com
       │
       ▼
Cloudflare DNS
       │
       ▼
Cloudflare Pages / Workers
```

Cloudflare should automatically manage HTTPS certificates after DNS is configured.

---

# 14. DNS

If the Schoolnet domain is already managed by Cloudflare:

Add the appropriate custom-domain configuration directly to the Pages/Workers application.

If DNS is managed elsewhere:

Coordinate with the domain administrator.

Typical approach:

```text
CNAME
demo.schoolnetindia.com
→ Cloudflare-provided hostname
```

Exact DNS configuration depends on the Cloudflare product and domain configuration.

Do not change existing production DNS records.

---

# 15. HTTPS / TLS

HTTPS must be mandatory.

Requirements:

- redirect HTTP to HTTPS
- modern TLS
- no mixed-content assets
- no insecure external images/scripts
- secure cookies when cookies are introduced

For the current static/mock prototype, Cloudflare-managed TLS is sufficient.

---

# 16. Protecting the Prototype

If the site should only be visible to approximately five reviewers, use:

## Cloudflare Access

Architecture:

```text
Internet
   │
   ▼
Cloudflare Access
   │
   ├── reviewer1@example.com
   ├── reviewer2@example.com
   ├── reviewer3@example.com
   └── ...
   │
   ▼
Schoolnet Prototype
```

Allow access by:

- specific email addresses
- approved email domain
- supported identity provider

For a five-user prototype, email-based one-time authentication can be sufficient.

---

# 17. Cloudflare Access Policy

Recommended policy:

```text
Application:
Schoolnet Prototype

Policy:
Allow

Include:
Specific approved email addresses

Default:
Deny
```

Avoid making the prototype public unless intended.

---

# 18. Important Authentication Distinction

There are **two layers** of authentication in the prototype.

## Layer 1 — Cloudflare Access

Purpose:

Protect the prototype itself from the public internet.

This is real perimeter access control.

---

## Layer 2 — Application Mock Authentication

Purpose:

Demonstrate Schoolnet personas.

Mock roles:

```text
Student
Teacher
School Admin
```

Example demo users:

```text
student@demo.schoolnet.in
teacher@demo.schoolnet.in
admin@demo.schoolnet.in
```

Password:

```text
Demo@123
```

This is **not real production authentication**.

Do not confuse application mock login with Cloudflare Access.

---

# 19. Demo Experience

Recommended flow for a reviewer:

```text
Cloudflare Access
       │
       ▼
Schoolnet Homepage
       │
       ▼
Schools
       │
       ▼
See Student Experience
       │
       ▼
Student Demo
       │
       ▼
Bring This to My School
       │
       ▼
Book a Demo
```

The site should also support:

```text
Login
├── Enter as Student
├── Enter as Teacher
└── Enter as School Admin
```

One-click persona entry is recommended for demo purposes.

---

# 20. Environment Variables

Create environment variables only when needed.

Example:

```text
NEXT_PUBLIC_APP_ENV=production
NEXT_PUBLIC_DEMO_MODE=true
```

Possible future variables:

```text
NEXT_PUBLIC_ANALYTICS_ID
API_BASE_URL
AUTH_SECRET
DATABASE_URL
EMAIL_API_KEY
```

Never commit real secrets to Git.

Use Cloudflare environment variables/secrets.

---

# 21. Secret Management

Do not store sensitive values in:

```text
.env committed to Git
source files
README
Markdown documents
client-side JavaScript
```

Use:

- Cloudflare secrets
- GitHub Actions secrets where necessary
- local `.env.local` for developer-only values

Ensure:

```text
.env*
```

is appropriately covered by `.gitignore`, while optionally preserving a safe example file such as:

```text
.env.example
```

---

# 22. Current Prototype Backend

No real backend is required initially.

Use mock/local data for:

- login
- student dashboard
- teacher dashboard
- admin dashboard
- demo request form
- testimonials
- metrics
- content cards

Architecture:

```text
Browser
   │
   ├── Static application data
   ├── Mock authentication state
   ├── localStorage/sessionStorage
   └── Demo form success state
```

This keeps infrastructure cost effectively at zero.

---

# 23. Demo Request Form

For the initial version:

```text
User submits form
      │
      ▼
Client-side validation
      │
      ▼
Mock success response
```

Display:

> Thanks! Your demo request has been captured for this prototype.

Do not imply the request was submitted to a real CRM unless an integration exists.

---

# 24. Optional Lightweight Form Backend

If actual form capture becomes necessary later, add the smallest possible serverless implementation.

Possible flow:

```text
Browser
   │
   ▼
Cloudflare Worker API
   │
   ├── validate payload
   ├── rate-limit
   └── store/send lead
```

Potential destinations later:

- email
- CRM
- lightweight database
- webhook
- queue

Do not introduce a database solely for the current mocked form.

---

# 25. Future Database Options

Only introduce persistent storage when real data becomes necessary.

Possible future choices:

## Cloudflare D1

Suitable for:

- small relational data
- demo leads
- simple profiles
- lightweight application state

---

## Supabase / managed Postgres

Suitable when the product starts needing:

- real application users
- richer relational data
- SQL
- role-based application data
- APIs

---

## AWS RDS / Aurora

Consider only when the application moves into a broader enterprise AWS architecture or production requirements justify it.

Do not start here for five users.

---

# 26. Future Authentication

When real users are introduced, replace the mock login.

Potential future approaches:

- Auth0
- Clerk
- Microsoft Entra ID
- Google Workspace identity
- AWS Cognito
- another approved enterprise identity provider

Selection should depend on:

- Schoolnet enterprise standards
- school identity requirements
- teacher/student SSO requirements
- government/customer integration requirements

Do not architect a full identity platform during the prototype phase.

---

# 27. Analytics

For the prototype, keep analytics lightweight.

Important events to eventually measure:

```text
homepage_view
schools_page_view
student_experience_view
student_demo_started
teacher_demo_started
admin_demo_started
book_demo_clicked
demo_form_started
demo_form_completed
solution_view
case_study_view
```

Most important conversion funnel:

```text
Homepage
   ↓
Schools
   ↓
Student Experience
   ↓
Student Demo
   ↓
Book Demo
```

Even if analytics are not connected yet, structure the UI so these events can be added later.

---

# 28. Logging

For the initial static prototype:

- browser console should remain clean
- no debug logging in production
- no sensitive information in logs

If Workers/API functions are added later:

Log:

- request ID
- route
- status
- execution time
- error category

Do not log:

- passwords
- authentication tokens
- sensitive student data

---

# 29. Security Baseline

Even for a prototype:

- enforce HTTPS
- use Cloudflare Access if private
- do not store secrets client-side
- do not commit secrets
- validate forms
- sanitize untrusted content
- use secure dependency versions
- remove unused packages
- avoid unsafe `dangerouslySetInnerHTML`
- use secure headers where practical

---

# 30. Security Headers

Where supported, configure headers such as:

```text
Content-Security-Policy
X-Content-Type-Options
Referrer-Policy
Permissions-Policy
```

Avoid overly aggressive CSP rules during the first implementation if they break legitimate application assets, but plan for a clean policy.

---

# 31. Caching

Cache public/static content aggressively.

Examples:

- logo
- icons
- static images
- fonts
- CSS
- JS bundles

Use versioned assets where supported.

Do not cache user-specific data when real authentication is introduced.

---

# 32. Images

Optimize all images before production deployment.

Requirements:

- responsive sizing
- modern formats where practical
- lazy-load below-fold imagery
- explicit width/height to reduce layout shift
- avoid multi-megabyte images

The homepage should remain fast even with classroom imagery.

---

# 33. Performance Targets

Aim for:

- fast initial load
- good Core Web Vitals
- minimal JavaScript
- no unnecessary animation libraries
- no huge video backgrounds
- no dependency-heavy carousel framework unless essential

The prototype should feel fast even on mobile.

---

# 34. Build Validation

Before deployment run:

```bash
npm run lint
npm run typecheck
npm run test
npm run build
```

Use the commands actually available in the repository.

If `typecheck` or `test` does not exist, do not invent a failing command; either add an appropriate script or document that it is not configured.

---

# 35. Deployment Validation

After each preview deployment verify:

## Navigation

- desktop navigation
- mega-menu
- mobile navigation
- all major CTA links

## Pages

- homepage
- schools
- students
- teachers
- solutions
- impact
- demo
- login
- student portal
- teacher portal
- admin portal

## Responsive

- 375px
- 768px
- 1024px
- 1440px

## Functional

- mock login
- one-click persona login
- logout
- demo form
- tabs
- accordions
- dashboard interactions

## Quality

- no console errors
- no broken images
- no broken links
- no horizontal scroll
- no accessibility-blocking issues

---

# 36. GitHub Actions

If Cloudflare's native Git integration handles deployment, keep GitHub Actions focused on quality checks.

Example:

```yaml
name: Validate

on:
  pull_request:
  push:
    branches:
      - main

jobs:
  validate:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - run: npm ci
      - run: npm run lint
      - run: npm run build
```

Adapt to the application's actual Node.js version and package manager.

Do not pin an arbitrary Node version if the repository already specifies one.

---

# 37. Preview Deployments

Every pull request should produce a shareable preview deployment.

This is especially valuable for:

- school stakeholder review
- marketing review
- UI approval
- mobile review
- content verification

Recommended workflow:

```text
Developer / Agent
      │
      ▼
Pull Request
      │
      ▼
Validation
      │
      ▼
Cloudflare Preview
      │
      ▼
Stakeholder Review
      │
      ▼
Merge
      │
      ▼
Production
```

---

# 38. Rollback Strategy

Production deployment must be easy to roll back.

Preferred approach:

1. Identify last known good deployment.
2. Roll back using Cloudflare deployment history where supported.
3. Alternatively revert the Git commit.
4. Push/redeploy.
5. Validate production.

Avoid manually patching production files.

---

# 39. Cost Strategy

The prototype should be designed so that:

```text
Hosting cost ≈ $0/month
```

excluding:

- custom domain registration
- optional paid third-party services
- future database/authentication products

At the expected usage level, Cloudflare's free offerings should be more than sufficient for a prototype.

Before moving into commercial production, re-check current Cloudflare pricing and free-tier limits.

---

# 40. Avoid Premature Infrastructure

Do not deploy the prototype using:

```text
Route 53
ALB
ECS Fargate
Aurora PostgreSQL
NAT Gateway
VPC endpoints
CloudWatch-heavy infrastructure
```

unless Schoolnet specifically requires AWS for governance reasons.

Those components are technically valid but economically unnecessary at this stage.

---

# 41. Future Production Evolution

When usage grows, evolve incrementally.

## Stage 1 — Current Prototype

```text
Cloudflare
├── Website
├── CDN
├── SSL
├── Access
└── Mock data
```

Expected users:

```text
<= 5
```

---

## Stage 2 — Pilot

Possible additions:

```text
Cloudflare Worker APIs
Real demo form
Basic analytics
Small database
Real authentication
```

Possible users:

```text
10–500
```

---

## Stage 3 — Production Platform

Possible architecture:

```text
CDN / WAF
      │
      ▼
Web Application
      │
      ▼
API Layer
      │
      ├── Authentication
      ├── Learning Services
      ├── School Admin APIs
      └── Analytics
             │
             ▼
          Database
```

At that point, evaluate:

- AWS
- Cloudflare
- hybrid architecture
- Schoolnet enterprise standards

Do not force the prototype architecture to solve future scale prematurely.

---

# 42. Optional AWS Migration Path

If Schoolnet later standardizes on AWS, the frontend can move without redesigning the user experience.

Possible future architecture:

```text
Route 53
   │
CloudFront
   │
S3 / Amplify / Next.js Hosting
   │
API Gateway / ALB
   │
Lambda / ECS Fargate
   │
Aurora PostgreSQL
```

This should be considered only after real requirements emerge.

---

# 43. Monitoring

For the current prototype, use basic Cloudflare visibility plus application checks.

Monitor:

- deployment status
- 4xx errors
- 5xx errors
- request volume
- performance
- DNS status

For five users, sophisticated observability is unnecessary.

---

# 44. Uptime / Availability

The prototype does not require a complex HA design.

Cloudflare already provides globally distributed delivery.

Avoid building redundant origin infrastructure solely for high availability at this stage.

---

# 45. Backup

No backup system is required for mock application data.

GitHub is the source of truth for:

- application code
- configuration
- static content

If real user-generated data is introduced later, define a backup and retention policy at that time.

---

# 46. Data Privacy

Do not store real student information in the prototype.

Use clearly fictional/demo data.

Example names and values should be synthetic.

Avoid:

- real student records
- real assessment data
- personal addresses
- student identifiers
- sensitive educational information

If real student data is ever introduced, a dedicated privacy/security review is required.

---

# 47. Deployment Checklist

Before initial deployment:

- [ ] Repository builds successfully
- [ ] Homepage implemented
- [ ] School journey implemented
- [ ] Student demo implemented
- [ ] Teacher demo implemented
- [ ] Admin demo implemented
- [ ] Mock login working
- [ ] Demo form working
- [ ] Responsive behavior validated
- [ ] No console errors
- [ ] No broken images
- [ ] No unsupported Schoolnet metrics
- [ ] Placeholder metrics clearly identified
- [ ] GitHub connected
- [ ] Cloudflare project created
- [ ] Preview deployment works
- [ ] Production deployment works
- [ ] HTTPS works
- [ ] Custom domain configured if required
- [ ] Cloudflare Access configured if private
- [ ] Approved reviewer emails tested

---

# 48. Agent Implementation Instructions

When Codex or Claude Code implements deployment:

1. Read this file fully.
2. Read `schoolnet-redesign-implementation-prompt.md`.
3. Inspect the repository.
4. Determine whether the application is static or requires Next.js server functionality.
5. Choose Pages or Workers accordingly.
6. Do not rewrite the application merely to fit the hosting provider.
7. Add deployment configuration.
8. Add validation scripts where appropriate.
9. Add documentation to `README.md`.
10. Deploy to a preview environment if credentials/integration are available.
11. Validate the deployed experience.
12. Do not expose secrets.
13. Do not fabricate environment values.
14. If credentials are unavailable, prepare the deployment configuration completely and document the exact final connection steps.

---

# 49. Recommended Codex Task

Use a task like:

> Read `AGENTS.md`, `docs/schoolnet-redesign-implementation-prompt.md`, and `docs/schoolnet-deployment-plan-implementation.md`. Inspect the existing repository and determine whether the app should deploy through Cloudflare Pages or Cloudflare Workers/OpenNext. Preserve the current stack. Implement the required Cloudflare deployment configuration, preview/production setup, environment handling, validation commands, and deployment documentation. Do not introduce AWS infrastructure, a database, or production authentication for the current <=5-user prototype unless the existing application actually requires them.

---

# 50. Recommended Final State

For the current phase, the preferred end state is:

```text
                    GitHub
                       │
                       │ merge to main
                       ▼
                  Cloudflare
          ┌────────────┴────────────┐
          │                         │
      Build/Deploy              Preview Builds
          │
          ▼
   Pages or Workers
          │
          ▼
     CDN + HTTPS
          │
          ▼
  Cloudflare Access
     (optional/private)
          │
          ▼
  Schoolnet Prototype
          │
          ├── Marketing Website
          ├── School Journey
          ├── Student Experience
          ├── Teacher Experience
          ├── Admin Experience
          ├── Mock Login
          └── Mock Demo Form
```

Expected infrastructure cost for the current very-low-usage prototype:

# **Approximately $0/month**

excluding domain registration and any future paid services.

---

# 51. Final Principle

Optimize the deployment for the requirements that exist **today**, not hypothetical enterprise scale.

For the current Schoolnet prototype:

> **Simple, secure, fast, inexpensive, and easy to demonstrate beats enterprise-heavy infrastructure.**

The architecture should remain easy to evolve later, but it should not carry production-scale cost or complexity before the product requires it.
