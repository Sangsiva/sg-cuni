# SG Corp Uniforms - Comprehensive Site & Architecture Analysis

> **Generated:** 2026-02-14
> **Website:** https://sgcorpuniforms.com/
> **Repository:** https://github.com/Sangsiva/sg-cuni.git

---

## Table of Contents

1. [Business Overview](#1-business-overview)
2. [Website Structure & Pages](#2-website-structure--pages)
3. [Product Catalog](#3-product-catalog)
4. [User Flows & How It Works](#4-user-flows--how-it-works)
5. [Design System & Branding](#5-design-system--branding)
6. [Technical Architecture](#6-technical-architecture)
7. [Frontend Architecture](#7-frontend-architecture)
8. [Backend Architecture](#8-backend-architecture)
9. [Third-Party Integrations](#9-third-party-integrations)
10. [Data Layer](#10-data-layer)
11. [Testing Strategy](#11-testing-strategy)
12. [Deployment & Infrastructure](#12-deployment--infrastructure)
13. [Security Considerations](#13-security-considerations)
14. [Current Gaps & Missing Features](#14-current-gaps--missing-features)
15. [Codebase File Reference](#15-codebase-file-reference)
16. [Business Plan Summary](#16-business-plan-summary)

---

## 1. Business Overview

### Company
**SG Corp Uniforms** is a Singapore-based supplier of corporate uniforms and custom sports T-shirts.

### Business Model
A **hybrid B2B model** with a unique Singapore-India supply chain:

| Role | Location | Responsibilities |
|------|----------|-----------------|
| **Founder (You)** | Singapore | Strategy, tech, branding, website |
| **Co-founder (Wife)** | Singapore | Customer communication, order coordination |
| **Manufacturing Partner (Relative)** | Tirupur, India | Production, QC, printing/embroidery, packing, dispatch |

### Value Proposition
> "Professional corporate uniforms and sportswear with the pricing power and variety of Tirupur, combined with local Singapore-based service and support."

### Four Core USPs
1. **Competitive Pricing** -- Leveraging India manufacturing for cost-effective solutions
2. **Wide Customization** -- Logos, colors, fabrics, and sizes tailored to needs
3. **Fast Delivery** -- 2-4 weeks from approval to Singapore delivery
4. **Quality Assurance** -- Experienced India-based production with strict quality checks

### Target Market
- **Primary:** Singapore-based companies (tech startups, SMEs, schools, sports clubs, event organisers)
- **Secondary:** India-based clients (via the same platform)

### Revenue Model
- **Quote-based** (NOT e-commerce) -- No prices displayed on site
- Minimum order: **50 pieces per design**
- Payment: **50% deposit to start, balance before shipping** (SGD, bank transfer or credit card)
- Margin added on top of: production cost + printing/embroidery + shipping + customs + FX buffer

### Contact
- **Email:** enquiry@sgcorpuniforms.com
- **WhatsApp:** +65 8017 6492

---

## 2. Website Structure & Pages

The site has **6 public pages** plus **1 API endpoint**:

| Page | URL Path | Purpose |
|------|----------|---------|
| **Home** | `/` | Landing page -- hero, value propositions, about section, CTAs |
| **Portfolio** | `/portfolio` | Showcase of uniform categories (placeholder images for now) |
| **How It Works** | `/how-it-works` | 8-step ordering process explanation |
| **Products** | `/products` | Detailed product catalog with specs and customization options |
| **Contact** | `/contact` | Quote request form + "Why Contact Us?" sidebar |
| **FAQ** | `/faq` | 6 frequently asked questions in accordion format |
| **API: Contact** | `/api/contact` | POST endpoint for form submission (email + Google Sheets) |

### Navigation
- Horizontal top navbar (fixed/sticky)
- Brand name "SG Corp Uniforms" on the left
- 6 navigation links on the right
- Mobile: hamburger menu with dropdown

### Persistent Elements (All Pages)
- Header with navigation
- Footer with copyright (2026 SG Corp Uniforms)
- **Floating WhatsApp button** (bottom-right, green, on ALL pages)

---

## 3. Product Catalog

### 5 Product Categories

#### 3.1 Corporate Polo Shirts
- **Use case:** Office and customer-facing staff (front-desk, sales, reception)
- **Fabric:** Cotton or poly-cotton blends
- **Branding:** Embroidery or print on chest and/or sleeve
- **Colors:** Match to company brand palette
- **Ideal quantity:** 30-300 pcs

#### 3.2 Corporate T-Shirts
- **Use case:** Casual office and team tees (casual Fridays, company swag)
- **Fabric:** Cotton / cotton-rich
- **Branding:** Front logo + back text or artwork
- **Fit:** Unisex and ladies' cut available
- **Ideal quantity:** 50-500 pcs

#### 3.3 Sports & Event T-Shirts
- **Use case:** Company runs, sports days, team shirts
- **Fabric:** Moisture-wicking dri-fit
- **Branding:** Full-colour prints front and back
- **Options:** Names, numbers, or team labels
- **Ideal quantity:** 100-1,000+ pcs

#### 3.4 Uniform Shirts & Sets
- **Use case:** Operations, warehouse, industrial
- **Fabric:** Durable, easy-care materials
- **Branding:** Name tags, department labels, logos
- **Options:** Long-sleeve or short-sleeve
- **Ideal quantity:** 20-200 pcs

#### 3.5 Aprons & Accessories
- **Use case:** F&B, retail, support teams
- **Types:** Waist, bib, and cross-back aprons
- **Branding:** Embroidery or print
- **Add-ons:** Caps, bucket hats, tote bags

### Customization Options
| Category | Details |
|----------|---------|
| **Fabrics** | Cotton, cotton-rich, poly-cotton blends, dri-fit/performance |
| **Printing** | Embroidery, silkscreen printing, DTF/digital printing |
| **Personalization** | Names, numbers, department/role labels, multiple colourways |

---

## 4. User Flows & How It Works

### 8-Step Order Process

```
Step 1: Enquiry Received
  ├── Website contact form
  ├── Social media enquiries
  └── Referrals from existing clients
        │
        v
Step 2: Requirements & Consultation
  ├── Garment type and use case
  ├── Fabric and colour preferences
  └── Logo files and branding guidelines
        │
        v
Step 3: Design & Mockup
  ├── High-quality garment mockup
  ├── Size chart and fit guidance
  └── Colour and logo placement review
        │
        v
Step 4: Quotation & Approval
  ├── Transparent, itemised pricing
  ├── Confirmed delivery timeline
  └── Written approval for design and costs
        │
        v
Step 5: Production in India (Tirupur)
  ├── Bulk production capacity
  ├── Consistent, vetted materials
  └── Skilled, experienced teams
        │
        v
Step 6: Quality Check
  ├── Colour and print verification
  ├── Logo clarity and positioning checks
  └── Quantity, size breakdown, and packing checks
        │
        v
Step 7: Shipping & Delivery
  ├── Shipped India → Singapore
  ├── Reliable logistics partners
  ├── Customs and documentation handled
  └── On-time delivery tracking
        │
        v
Step 8: Post-Delivery Support & Feedback
  ├── Feedback on fit, quality, service
  ├── Easy repeat ordering
  └── Ongoing support
```

### Timelines
- **Design & Confirmation:** 1-3 days
- **Production in India:** 7-14 days
- **Shipping to Singapore:** 3-7 days
- **Total:** **2-4 weeks** from final approval

### Contact Form Fields
| Field | Required | Type |
|-------|----------|------|
| Company Name | Yes | Text |
| Contact Name | Yes | Text |
| Email | Yes | Email (validated) |
| Phone | No | Text |
| Location | No | Text |
| Garment Type | Yes | Dropdown: Sports T-Shirts, Corporate T-Shirts, Corporate Uniforms, Others |
| Quantity Estimate | Yes | Dropdown: <50, 50-100, 100-300, 300+ |
| Deadline | No | Text (e.g., "Within 2 weeks") |
| Message | Yes | Textarea |

### FAQ Content (6 Items)

1. **What is your minimum order quantity?** -- 50 pieces per design
2. **How long does production and delivery take to Singapore?** -- 2-4 weeks total
3. **Can you handle urgent orders?** -- Case-by-case basis, premium may apply
4. **Do you provide design support or just printing?** -- Full design support including mockups, color matching, logo placement
5. **What information do you need to give a quote?** -- Garment type, quantity, sizes, fabric, artwork files, placement, special requirements, deadline
6. **How do payment and invoicing work?** -- SGD via bank transfer or credit card, 50% deposit, balance before shipping

---

## 5. Design System & Branding

### Color Palette

| Element | Color | CSS Value |
|---------|-------|-----------|
| Header/Navbar | Dark charcoal | `bg-gray-800` / `rgb(31, 41, 55)` |
| Hero gradient (left) | Blue | `from-blue-500` / `rgb(59, 130, 246)` |
| Hero gradient (right) | Purple | `to-purple-600` / `rgb(147, 51, 234)` |
| Primary CTA buttons | Blue | `bg-blue-600` / `rgb(37, 99, 235)` |
| WhatsApp CTA | Green | `#25D366` / `rgb(37, 211, 102)` |
| Footer | Light gray | `bg-gray-200` / `rgb(229, 231, 235)` |
| Body text | Black | `rgb(0, 0, 0)` |
| Cards | White | With subtle border/shadow |

### Typography
- **Font:** System UI sans-serif stack
  - `ui-sans-serif, system-ui, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji`
- No custom web fonts loaded

### Layout Patterns
- Clean, minimal, content-focused design
- Card-based layouts (3-column grid on desktop)
- Step-by-step vertical card layout for process pages
- Accordion for FAQ
- Two-column layout on Contact (form left, sidebar right)
- Mobile-first responsive with `md:` and `lg:` breakpoints

### CTAs Used
| CTA | Style | Destination |
|-----|-------|-------------|
| "Get a Quote" | Blue solid button | `/contact` |
| "Chat on WhatsApp" | Green outline button | `wa.me` with pre-filled message |
| "Start Your Order" | Blue solid button | `/contact` |
| "Submit Enquiry" | Form submit button | POST `/api/contact` |
| "WhatsApp Us" | Floating green button (persistent) | `wa.me` with pre-filled message |

### WhatsApp Pre-filled Messages
- Hero CTA: `"Hi SG Corp Uniforms, I saw your website and would like a quote for 50 pcs of corporate T-shirts."`
- Floating button: `"Hi SG Corp Uniforms, I saw your website and would like a quote."`

---

## 6. Technical Architecture

### Tech Stack Summary

| Layer | Technology |
|-------|-----------|
| **Framework** | Next.js 14.2.35 (App Router) |
| **Language** | TypeScript 5.x (strict mode) |
| **UI Library** | React 18.x |
| **Styling** | Tailwind CSS 3.x + PostCSS + Autoprefixer |
| **UI Components** | Custom components on Radix UI (Accordion) |
| **Icons** | Lucide React 0.344.0 |
| **Forms** | React Hook Form 7.48.2 + Zod 3.22.4 |
| **Email** | Resend 6.7.0 |
| **Data Storage** | Google Sheets API via googleapis 170.0.0 |
| **Testing** | Jest 29.7.0 + React Testing Library 14.1.2 + MSW 2.12.7 |
| **Hosting** | Vercel |
| **Domain** | sgcorpuniforms.com |

### Project Structure

```
sgCorpUni/
├── app/                          # Next.js App Router pages
│   ├── page.tsx                 # Home page
│   ├── layout.tsx               # Root layout (nav + footer + WhatsApp)
│   ├── globals.css              # Global Tailwind CSS
│   ├── contact/
│   │   ├── page.tsx             # Contact/quote form
│   │   └── __tests__/page.test.tsx
│   ├── products/page.tsx        # Products listing
│   ├── portfolio/page.tsx       # Portfolio/gallery
│   ├── faq/page.tsx             # FAQ accordion
│   ├── how-it-works/page.tsx    # Process explanation
│   └── api/contact/route.ts     # Form submission API
├── components/
│   ├── Navigation.tsx           # Header nav (desktop + mobile)
│   ├── HeroSection.tsx          # Hero banner
│   ├── ValuePropositionSection.tsx # "Why Choose Us"
│   ├── WhatsAppButton.tsx       # WhatsApp CTA
│   ├── WhatsAppFloating.tsx     # Floating WhatsApp button
│   ├── Section.tsx              # Layout wrapper
│   ├── ui/
│   │   ├── button.tsx           # Button variants
│   │   ├── card.tsx             # Card components
│   │   └── accordion.tsx        # Accordion (Radix-based)
│   └── __tests__/               # Component tests
├── lib/
│   ├── email.ts                 # Resend email integration
│   ├── sheets.ts                # Google Sheets integration
│   ├── utils.ts                 # Utilities (cn() class merger)
│   └── __tests__/               # Library tests
├── documents/                    # Documentation (6 markdown files)
├── ragasiyam/                   # Secrets (gitignored)
├── package.json                 # Dependencies & scripts
├── tsconfig.json                # TypeScript config
├── tailwind.config.js           # Tailwind config
├── postcss.config.js            # PostCSS config
├── jest.config.js               # Jest config
├── jest.setup.js                # Jest setup
├── .env.local                   # Environment variables (gitignored)
└── .env.example                 # Env var template
```

---

## 7. Frontend Architecture

### Rendering Strategy
- **Static Site Generation (SSG)** for most pages (home, products, portfolio, FAQ, how-it-works)
- **Client Components** for interactive elements (navigation toggle, form, WhatsApp buttons, accordion)

### Component Hierarchy

```
layout.tsx (Root Layout)
├── Navigation.tsx (Client)
│   ├── Desktop menu (hidden on mobile)
│   └── Mobile hamburger dropdown
├── {children} (Page Content)
│   ├── page.tsx (Home)
│   │   ├── HeroSection.tsx
│   │   │   ├── Button (Get a Quote → /contact)
│   │   │   └── WhatsAppButton.tsx (Client)
│   │   ├── ValuePropositionSection.tsx
│   │   │   └── Card (x4)
│   │   └── About Section (inline)
│   ├── contact/page.tsx (Client)
│   │   ├── React Hook Form + Zod
│   │   └── Sidebar (benefits + quick FAQ)
│   ├── products/page.tsx
│   │   ├── Product Cards (x5)
│   │   └── Customization Cards (x3)
│   ├── portfolio/page.tsx
│   │   └── Portfolio Cards (x3, placeholder images)
│   ├── how-it-works/page.tsx
│   │   └── Step Cards (x8)
│   └── faq/page.tsx
│       └── Accordion (Radix UI, x6 items)
├── Footer (inline in layout)
└── WhatsAppFloating.tsx (Client, fixed position)
```

### State Management
- **No global state** (no Redux, no Context API beyond what's needed)
- **Form state:** React Hook Form manages all form fields and validation
- **UI state:** Local `useState` for navigation toggle, form submission status

### Form Validation Schema (Zod)

```typescript
interface EnquiryFormData {
  companyName: string;      // required
  contactName: string;      // required
  email: string;            // required, email format
  phone?: string;           // optional
  location?: string;        // optional
  garmentType: "Sports T-Shirts" | "Corporate T-Shirts" | "Corporate Uniforms" | "Others";
  quantityEstimate: "<50" | "50-100" | "100-300" | "300+";
  deadline?: string;        // optional
  message: string;          // required
}
```

- Identical schema on both client-side (`app/contact/page.tsx`) and server-side (`app/api/contact/route.ts`)

### UI Component Library

| Component | File | Details |
|-----------|------|---------|
| **Button** | `components/ui/button.tsx` | Variants: default (blue), outline, ghost. Sizes: sm, default, lg |
| **Card** | `components/ui/card.tsx` | CardHeader, CardTitle, CardDescription, CardContent, CardFooter |
| **Accordion** | `components/ui/accordion.tsx` | Radix UI wrapper with chevron animation |

### Utility: `cn()` function
```typescript
// lib/utils.ts
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```
Merges Tailwind CSS classes without conflicts using `clsx` + `tailwind-merge`.

---

## 8. Backend Architecture

### API Endpoint

**`POST /api/contact`** (`app/api/contact/route.ts`)

```
Client Form Submission
        │
        v
   Zod Validation
        │
   ┌────┴────┐
   │  VALID  │  INVALID → 400 { success: false, errors: [...] }
   └────┬────┘
        │
        v
   Send Email (Resend) ─── CRITICAL (fails request if error)
        │
        v
   Append to Google Sheets ─── NON-CRITICAL (logs error, doesn't fail request)
        │
        v
   200 { success: true }
```

### Email Service (`lib/email.ts`)

```
sendEmail(data) → Resend API
  From: onboarding@resend.dev (TODO: use verified custom domain)
  To: sivaeee1992@gmail.com
  Subject: "New Uniform Enquiry - {Company Name}"
  Body: All form fields formatted as text
```

### Google Sheets Integration (`lib/sheets.ts`)

```
appendToSheet(data) → Google Sheets API v4
  Authentication: Service account (private key)
  Sheet: "Sheet1"
  Row format (11 columns):
    [Timestamp, Company, Contact, Email, Phone, Location,
     Garment Type, Quantity, Deadline, Message, Status("New")]
```

---

## 9. Third-Party Integrations

| Service | Purpose | Auth Method | Config |
|---------|---------|-------------|--------|
| **Resend** | Email notifications on enquiry | API Key (`RESEND_API_KEY`) | Sends to sivaeee1992@gmail.com |
| **Google Sheets API** | Enquiry data storage | Service account + private key (`GOOGLE_SERVICE_ACCOUNT_KEY`) | Sheet ID in env var |
| **WhatsApp** | Direct customer messaging | wa.me links (no SDK) | Phone: +65 8017 6492 |
| **Vercel** | Hosting & deployment | GitHub integration | Auto-deploy on push to main |
| **ImprovMX** | Email routing | DNS MX records | Routes enquiry@sgcorpuniforms.com |

---

## 10. Data Layer

### Storage: Google Sheets (No Traditional Database)

| Column | Field | Source |
|--------|-------|--------|
| A | Timestamp | Auto-generated (ISO format) |
| B | Company Name | Form |
| C | Contact Name | Form |
| D | Email | Form |
| E | Phone | Form (optional) |
| F | Location | Form (optional) |
| G | Garment Type | Form (dropdown) |
| H | Quantity Estimate | Form (dropdown) |
| I | Deadline | Form (optional) |
| J | Message | Form |
| K | Status | Default: "New" |

### Why Google Sheets?
- Free and accessible
- Simple for MVP
- Owner can view/manage leads directly
- No database setup needed

---

## 11. Testing Strategy

### Test Stack

| Tool | Purpose |
|------|---------|
| Jest 29.7.0 | Test runner |
| React Testing Library 14.1.2 | Component rendering/querying |
| @testing-library/user-event 14.5.1 | User interaction simulation |
| @testing-library/jest-dom 6.1.5 | DOM assertion matchers |
| ts-jest 29.1.1 | TypeScript support |
| MSW 2.12.7 | API mocking |

### Test Files

| Test | File | Covers |
|------|------|--------|
| HeroSection | `components/__tests__/HeroSection.test.tsx` | Title, subtitle, button rendering |
| WhatsAppButton | `components/__tests__/WhatsAppButton.test.tsx` | Link generation, phone number, labels, pre-filled messages |
| Contact Form | `app/contact/__tests__/page.test.tsx` | Form fill, submission, success/error handling |
| Email Service | `lib/__tests__/email.test.ts` | Resend SDK integration, error handling |
| Google Sheets | `lib/__tests__/sheets.test.ts` | Data appending, row format, error handling |

### Running Tests

```bash
npm test                    # Run all tests
npm test -- --watch         # Watch mode
npm test -- --coverage      # Coverage report
npx jest path/to/test.tsx   # Specific test
```

---

## 12. Deployment & Infrastructure

### Platform: Vercel

```
GitHub (main branch)
    │
    v (auto-trigger on push)
Vercel Build Pipeline
    ├── npm install
    ├── next build (SSG + SSR)
    └── Deploy to edge network
         │
         v
    sgcorpuniforms.com
```

### Environment Variables (Vercel)

| Variable | Purpose |
|----------|---------|
| `RESEND_API_KEY` | Resend email service |
| `GOOGLE_SERVICE_ACCOUNT_KEY` | Google Sheets auth (full JSON string) |
| `GOOGLE_SHEET_ID` | Target spreadsheet ID |

### Domain & DNS
- **Domain:** sgcorpuniforms.com
- **SSL:** Automatic via Vercel
- **Email:** ImprovMX for enquiry@sgcorpuniforms.com routing

### Local Development

```bash
node --version   # Verify Node 18+
npm install
npm run dev      # http://localhost:3000
```

---

## 13. Security Considerations

### Current Good Practices
- Environment variables for all secrets (not in code)
- Server-side Zod validation (can't be bypassed)
- TypeScript strict mode prevents common bugs
- HTTPS via Vercel
- Secrets folder (`ragasiyam/`) in `.gitignore`
- `.env*` files in `.gitignore`

### Areas for Improvement
| Gap | Risk | Recommendation |
|-----|------|----------------|
| No rate limiting on `/api/contact` | Spam/abuse | Add rate limiting middleware |
| No CAPTCHA | Bot submissions | Add reCAPTCHA or hCaptcha |
| No CORS configuration | Open API | Configure allowed origins |
| No input sanitization | XSS in emails | Sanitize message field |
| Resend sender domain | Deliverability | Set up verified custom domain |

---

## 14. Current Gaps & Missing Features

Based on thorough analysis, the following are **absent** from the current site:

| Feature | Status | Priority |
|---------|--------|----------|
| Shopping cart / e-commerce | Not implemented | Future |
| User accounts / login | Not implemented | Future |
| Product pricing on site | Not displayed | By design (quote-based) |
| Size guide page | Not implemented | Medium |
| Real product photos | Placeholder gradients | High |
| Blog / content section | Not implemented | Medium (SEO) |
| Testimonials / reviews | Not implemented | High |
| Social media links | Not present | Medium |
| Admin dashboard | Not implemented | High |
| Order tracking portal | Not implemented | Future |
| Multi-language support | Not implemented | Low |
| Search functionality | Not implemented | Low |
| CMS for content | Not implemented | Medium |
| Analytics | Not visible | Medium |

---

## 15. Codebase File Reference

### Key Files Quick Reference

| Purpose | File Path |
|---------|-----------|
| Home Page | `app/page.tsx` |
| Root Layout | `app/layout.tsx` |
| Contact Form | `app/contact/page.tsx` |
| API Handler | `app/api/contact/route.ts` |
| Products Page | `app/products/page.tsx` |
| Portfolio Page | `app/portfolio/page.tsx` |
| FAQ Page | `app/faq/page.tsx` |
| How It Works | `app/how-it-works/page.tsx` |
| Navigation | `components/Navigation.tsx` |
| Hero Section | `components/HeroSection.tsx` |
| Value Props | `components/ValuePropositionSection.tsx` |
| WhatsApp Button | `components/WhatsAppButton.tsx` |
| WhatsApp Floating | `components/WhatsAppFloating.tsx` |
| Email Service | `lib/email.ts` |
| Sheets Service | `lib/sheets.ts` |
| Class Merger | `lib/utils.ts` |
| Global Styles | `app/globals.css` |

### Dependencies (package.json v0.1.0)

**Runtime:**
- next 14.2.35, react 18.x, react-dom 18.x
- typescript 5.x
- tailwindcss 3.x, postcss, autoprefixer
- @radix-ui/react-accordion 1.1.2
- react-hook-form 7.48.2, @hookform/resolvers 3.3.2, zod 3.22.4
- resend 6.7.0, googleapis 170.0.0
- lucide-react 0.344.0, clsx, tailwind-merge
- dotenv 17.2.3

**Dev:**
- jest 29.7.0, ts-jest 29.1.1
- @testing-library/react 14.1.2, @testing-library/jest-dom 6.1.5, @testing-library/user-event 14.5.1
- msw 2.12.7
- eslint 8.x, eslint-config-next

### NPM Scripts

```json
{
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "test": "jest",
  "lint": "next lint"
}
```

---

## 16. Business Plan Summary

### Operations Flow (Singapore <-> Tirupur)

```
Customer (Singapore, pays SGD)
    │
    v
You / Wife (Singapore) ── Enquiry handling, design, quoting
    │
    v
Relative (Tirupur, India) ── Production, QC, packing
    │
    v
Shipping (India → Singapore) ── 3-7 days
    │
    v
Customer Delivery ── Courier or personal delivery
```

### Key Business Rules
- **MOQ:** 50 pieces per design
- **Lead time:** 2-4 weeks from final approval
- **Payment:** 50% deposit + balance before shipping
- **Currency:** SGD for Singapore clients
- **Quality:** Photo/video verification before dispatch (especially for first-time clients)
- **Issue policy:** Defined for colour variations vs major errors

### Competitive Advantages
- Tirupur manufacturing = lower cost than local Singapore suppliers
- Wide fabric and style variety
- Strong customization (logos, names, numbers, design flexibility)
- Singapore-based support = local trust + fast communication

### Risks / Constraints
- Longer logistics chain (India -> Singapore)
- Shipping and customs dependencies
- Potential delays outside direct control
- FX rate fluctuations (INR <-> SGD)

---

## Summary

**SG Corp Uniforms** is a well-structured MVP B2B lead-generation website built with **Next.js 14, TypeScript, and Tailwind CSS**. It effectively serves as a digital storefront for a Singapore-India uniform supply chain business.

**Strengths:**
- Clean, modular component architecture
- Strict TypeScript throughout
- Comprehensive documentation (6 docs)
- Good test coverage
- Professional, responsive design
- Effective WhatsApp integration for lead capture

**Next Steps for Growth:**
1. Add real product photography (portfolio is currently placeholders)
2. Build an admin dashboard for lead management
3. Add rate limiting and CAPTCHA for spam prevention
4. Set up custom email domain on Resend
5. Add testimonials/social proof
6. Implement analytics (Vercel Analytics or Google Analytics)
7. Consider migrating from Google Sheets to a proper database (PostgreSQL/Supabase) as volume grows
