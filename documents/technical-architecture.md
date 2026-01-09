# Technical Architecture Document

## Overview
This document outlines the technical architecture for the corporate uniform and sports T-shirt website, based on the business plan in `initialPlan.md`. The site serves as an MVP for lead generation, targeting B2B corporate clients in Singapore. It combines Singapore-based service with Tirupur manufacturing power.

## Objectives
- **Lead Generation**: Capture enquiries via forms, send notifications, and store data for follow-up.
- **User Experience**: Mobile-first, fast-loading, and conversion-focused per B2B best practices.
- **Scalability**: Start simple, expand to full e-commerce or dynamic features later.
- **Maintainability**: Clean, typed code with modern tools.

## Tech Stack

### Front-End
- **Framework**: Next.js (v14+, App Router) for static site generation (SSG) and server-side rendering (SSR) where needed.
- **Language**: TypeScript for type safety and error prevention.
- **Styling**: TailwindCSS for utility-first, responsive CSS.
- **UI Components**: shadcn/ui (built on Radix UI) for accessible, modern components (buttons, forms, etc.).
- **Forms**: React Hook Form with Zod for validation (client-side and server-side).
- **Images**: Next.js Image component for optimization.

### Back-End (Minimal for Forms)
- **API Routes**: Next.js API routes (/api/contact) for handling form submissions.
- **Email Service**: Resend or SendGrid for sending enquiry notifications.
- **Data Storage**: Supabase (PostgreSQL), Airtable, or Google Sheets for storing leads.
- **Alternative**: Third-party form providers like Formspree for no-code handling.

### Deployment & Hosting
- **Platform**: Vercel for seamless Next.js integration, auto-scaling, and serverless functions.
- **Domain**: Custom domain (e.g., sgcorpuni.com) via Vercel.

### Version Control & Collaboration
- **Git**: Hosted on GitHub for code management.
- **CI/CD**: Vercel auto-deploys on pushes to main branch.

### Development Tools
- **Package Manager**: npm or yarn.
- **Linting**: ESLint with Next.js config.
- **Testing**: Jest or React Testing Library for unit tests (optional for MVP).

## Architecture Diagram

```mermaid
graph TD
    A[User Browser] --> B[Vercel Hosting]
    B --> C[Next.js Application]
    C --> D[Static Pages (SSG)]
    D --> E[Home, Portfolio, How It Works, Products, Contact, FAQ]
    C --> F[Client Components]
    F --> G[shadcn/ui (Buttons, Forms), React Hook Form]
    C --> H[Styling & Assets]
    H --> I[TailwindCSS, Next.js Image]
    C --> J[API Routes (Serverless)]
    J --> K[Form Submission Handler]
    K --> L[Validate with Zod]
    L --> M[Send Email via Resend/SendGrid]
    L --> N[Store in Supabase/Airtable/Google Sheets]
    B --> O[Third-Party Integrations (Alternative)]
    O --> P[Formspree/Getform for Email & Storage]
```

### Key Flows
1. **Static Page Load**: User accesses pages via SSG for fast performance.
2. **Form Submission**: Client validates, sends to API route. Server validates, sends email, stores data.
3. **Third-Party Alternative**: Form posts directly to provider, bypassing custom API.

## Reasons for Tech Stack Selection

### Front-End Choices
- **Next.js**: Balances static generation for SEO/speed with dynamic capabilities. App Router simplifies routing and API handling. Ideal for B2B sites needing lead capture without full e-commerce.
- **TypeScript**: Reduces bugs in form logic and API validations, crucial for reliable lead processing.
- **TailwindCSS**: Enables rapid prototyping of responsive designs. Mobile-first aligns with B2B buyers accessing via phones.
- **shadcn/ui**: Provides polished, accessible components out-of-the-box, following modern UX trends for trust and conversions.
- **React Hook Form + Zod**: Handles complex form validation efficiently, ensuring high-quality leads.

### Back-End Choices
- **API Routes**: Lightweight serverless functions on Vercel. Keeps everything integrated, easy to customize (e.g., add CRM integration later).
- **Email/Data Services**: Essential for lead generation—immediate notifications and storage prevent lost enquiries. Third-party options reduce initial complexity.
- **No Full Backend**: Aligns with MVP focus; avoids over-engineering for a lead-gen site.

### Deployment & Tools
- **Vercel**: Optimized for Next.js, handles static + serverless effortlessly. Free tier supports MVPs.
- **GitHub**: Standard for collaboration; enables pull requests for code reviews.
- **ESLint**: Maintains code quality from the start.

This stack ensures a professional, fast site that builds trust, captures leads, and scales affordably.

## Implementation Notes

### Project Setup
1. Run `npx create-next-app@latest sg-corp-uni --typescript --tailwind --eslint --app`.
2. Install dependencies: `npm install @radix-ui/react-dialog react-hook-form @hookform/resolvers zod`.
3. Add shadcn/ui: `npx shadcn-ui@latest init` and install components (e.g., button, form).
4. For forms: Add Resend SDK (`npm install resend`) and Supabase client if chosen.
5. Structure:
   - `app/`: Pages (page.tsx for Home, etc.)
   - `components/`: Reusable UI (Header, Footer, EnquiryForm)
   - `lib/`: Utilities (Zod schemas, email functions)
   - `public/`: Images/assets.

### Key Files
- `app/page.tsx`: Home page with hero and sections.
- `app/contact/page.tsx`: Contact page with form.
- `app/api/contact/route.ts`: API handler for form submissions.
- `components/EnquiryForm.tsx`: Form component with validation.

### Security & Best Practices
- Use environment variables for API keys (e.g., RESEND_API_KEY).
- Implement rate limiting on API routes to prevent spam.
- Ensure GDPR compliance for data storage (e.g., Supabase policies).
- Monitor via Vercel Analytics for user behavior.

### Future Expansions
- Add authentication for account-based personalization.
- Integrate CRM (e.g., HubSpot) via APIs.
- Expand to full e-commerce with Stripe for payments.
- Use AI for predictive suggestions (e.g., product recommendations).

This document serves as a foundation for development and updates. Refer back for consistency.

**Last Updated**: Jan 8, 2026  
**Version**: 1.0
