# SG Corp Uniforms Website Redesign - Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Rebuild the SG Corp Uniforms website with a premium navy+gold design system, 8 pages (2 new), multi-step quote form, scroll animations, and blog infrastructure.

**Architecture:** Next.js 14 App Router with server components by default, client components only for interactivity (nav toggle, forms, animations). Tailwind CSS with custom design tokens. Framer Motion for scroll animations. MDX for blog posts. Existing API route (`/api/contact`) preserved and extended for multi-step form data.

**Tech Stack:** Next.js 14, TypeScript, Tailwind CSS 3, Framer Motion, React Hook Form + Zod, Radix UI, Lucide React, next/font (Inter), next-mdx-remote + gray-matter (blog)

**Design Doc:** `docs/plans/2026-02-15-website-redesign-design.md`

---

## Task 1: Install Dependencies & Configure Design System

**Files:**
- Modify: `package.json`
- Modify: `tailwind.config.js`
- Modify: `app/globals.css`
- Modify: `app/layout.tsx`

**Step 1: Install new dependencies**

Run:
```bash
npm install framer-motion next-mdx-remote gray-matter
```

Expected: packages added to `package.json` dependencies

**Step 2: Update Tailwind config with design tokens**

Replace `tailwind.config.js` with:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{md,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1B2A4A',
          light: '#2D3F6B',
        },
        gold: {
          DEFAULT: '#C8A85C',
          light: '#D4BC7E',
        },
        'off-white': '#F8F7F4',
        'soft-blue': '#E8EDF5',
        slate: {
          DEFAULT: '#4A5568',
          light: '#94A3B8',
        },
        whatsapp: '#25D366',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)',
        'card-hover': '0 10px 25px rgba(0,0,0,0.08), 0 4px 10px rgba(0,0,0,0.04)',
        nav: '0 1px 3px rgba(0,0,0,0.1)',
      },
      borderRadius: {
        xl: '12px',
        '2xl': '16px',
      },
      maxWidth: {
        container: '1200px',
      },
    },
  },
  plugins: [],
}
```

**Step 3: Update globals.css with base styles**

Replace `app/globals.css` with:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
  }
  body {
    @apply text-slate antialiased;
  }
  h1, h2, h3, h4, h5, h6 {
    @apply text-navy tracking-tight;
  }
  h1, h2 {
    @apply font-semibold;
  }
  h3, h4, h5, h6 {
    @apply font-medium;
  }
}

@layer components {
  .section-gap {
    @apply py-24 lg:py-32;
  }
  .container-custom {
    @apply mx-auto max-w-container px-6;
  }
  .eyebrow {
    @apply text-xs font-medium uppercase tracking-widest text-gold;
  }
}
```

**Step 4: Update layout.tsx with Inter font and new structure**

Replace `app/layout.tsx` with:

```tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloating from "@/components/layout/WhatsAppFloating";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Corporate Uniforms & Sports T-Shirts Singapore | SG Corp Uniforms",
  description:
    "Premium custom uniforms made in Tirupur, delivered to Singapore. Corporate polos, sports tees, workwear. Free design mockup, 2-4 week delivery. Get a quote today.",
  openGraph: {
    title: "Corporate Uniforms & Sports T-Shirts Singapore | SG Corp Uniforms",
    description:
      "Premium custom uniforms made in Tirupur, delivered to Singapore. Free design mockup, 2-4 week delivery.",
    url: "https://sgcorpuniforms.com",
    siteName: "SG Corp Uniforms",
    locale: "en_SG",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="flex min-h-screen flex-col font-sans">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppFloating />
      </body>
    </html>
  );
}
```

**Step 5: Verify build works**

Run: `npm run build`
Expected: Build succeeds (will have missing import errors for Header/Footer -- that's ok, we create them next)

**Step 6: Commit**

```bash
git add tailwind.config.js app/globals.css app/layout.tsx package.json package-lock.json
git commit -m "feat: configure design system - navy/gold palette, Inter font, Tailwind tokens"
```

---

## Task 2: Build Layout Components (Header, Footer, WhatsAppFloating)

**Files:**
- Create: `components/layout/Header.tsx`
- Create: `components/layout/Footer.tsx`
- Create: `components/layout/MobileMenu.tsx`
- Create: `components/layout/WhatsAppFloating.tsx`

**Step 1: Create Header component**

Create `components/layout/Header.tsx`:

```tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import { Menu } from "lucide-react";

const navLinks = [
  { href: "/products", label: "Products" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b bg-white shadow-nav">
      <div className="container-custom flex h-16 items-center justify-between">
        <Link href="/" className="text-xl font-semibold text-navy">
          SG Corp Uniforms
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate transition-colors hover:text-navy"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-lg bg-navy px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-navy-light"
          >
            Get a Quote
          </Link>
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <Link
            href="/contact"
            className="rounded-lg bg-navy px-4 py-2 text-sm font-medium text-white"
          >
            Quote
          </Link>
          <button
            onClick={() => setMobileOpen(true)}
            className="p-2 text-navy"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        links={navLinks}
      />
    </header>
  );
}
```

**Step 2: Create MobileMenu component**

Create `components/layout/MobileMenu.tsx`:

```tsx
"use client";

import Link from "next/link";
import { X } from "lucide-react";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  links: { href: string; label: string }[];
}

export default function MobileMenu({ open, onClose, links }: MobileMenuProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-white">
      <div className="container-custom flex h-16 items-center justify-between">
        <span className="text-xl font-semibold text-navy">SG Corp Uniforms</span>
        <button onClick={onClose} className="p-2 text-navy" aria-label="Close menu">
          <X size={24} />
        </button>
      </div>
      <nav className="container-custom flex flex-col gap-1 pt-8">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClose}
            className="rounded-lg px-4 py-3 text-lg font-medium text-navy transition-colors hover:bg-off-white"
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/contact"
          onClick={onClose}
          className="mt-4 rounded-lg bg-navy px-4 py-3 text-center text-lg font-medium text-white"
        >
          Get a Free Quote
        </Link>
      </nav>
    </div>
  );
}
```

**Step 3: Create Footer component**

Create `components/layout/Footer.tsx`:

```tsx
import Link from "next/link";
import { Mail, Phone, MessageCircle } from "lucide-react";

const quickLinks = [
  { href: "/products", label: "Products" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/about", label: "About Us" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container-custom grid gap-12 py-16 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-semibold text-white">SG Corp Uniforms</h3>
          <p className="mt-3 text-sm leading-relaxed text-white/70">
            Singapore-based. Tirupur-made. Quality guaranteed.
          </p>
          <p className="mt-6 text-xs text-white/50">
            &copy; {new Date().getFullYear()} SG Corp Uniforms
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white/90">
            Quick Links
          </h4>
          <nav className="mt-4 flex flex-col gap-2">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/70 transition-colors hover:text-gold"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white/90">
            Get in Touch
          </h4>
          <div className="mt-4 flex flex-col gap-3">
            <a
              href="mailto:enquiry@sgcorpuniforms.com"
              className="flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-gold"
            >
              <Mail size={16} /> enquiry@sgcorpuniforms.com
            </a>
            <a
              href="tel:+6580176492"
              className="flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-gold"
            >
              <Phone size={16} /> +65 8017 6492
            </a>
            <a
              href="https://wa.me/6580176492?text=Hi%20SG%20Corp%20Uniforms%2C%20I%20saw%20your%20website%20and%20would%20like%20a%20quote."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-whatsapp"
            >
              <MessageCircle size={16} /> WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-4">
        <p className="container-custom text-center text-xs text-white/40">
          Professional corporate uniforms &amp; sports T-shirts for Singapore businesses
        </p>
      </div>
    </footer>
  );
}
```

**Step 4: Create WhatsAppFloating component**

Create `components/layout/WhatsAppFloating.tsx`:

```tsx
"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppFloating() {
  return (
    <a
      href="https://wa.me/6580176492?text=Hi%20SG%20Corp%20Uniforms%2C%20I%20saw%20your%20website%20and%20would%20like%20a%20quote."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50 flex items-center gap-2 rounded-full bg-whatsapp px-4 py-3 text-sm font-medium text-white shadow-lg transition-all hover:bg-[#1ebe57] hover:shadow-xl md:bottom-6 md:right-6"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={20} />
      <span className="hidden sm:inline">WhatsApp Us</span>
    </a>
  );
}
```

**Step 5: Verify build**

Run: `npm run build`
Expected: Build succeeds with new layout

**Step 6: Commit**

```bash
git add components/layout/ app/layout.tsx
git commit -m "feat: add layout components - Header, Footer, MobileMenu, WhatsAppFloating"
```

---

## Task 3: Build Shared UI Components

**Files:**
- Create: `components/ui/section-header.tsx`
- Create: `components/shared/FadeInSection.tsx`
- Create: `components/shared/CTABanner.tsx`
- Modify: `components/ui/button.tsx`

**Step 1: Create SectionHeader component**

Create `components/ui/section-header.tsx`:

```tsx
interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={align === "center" ? "text-center" : ""}>
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2
        className={`text-2xl font-semibold sm:text-3xl lg:text-4xl ${
          light ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-lg ${
            light ? "text-white/70" : "text-slate"
          } ${align === "center" ? "mx-auto max-w-2xl" : ""}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
```

**Step 2: Create FadeInSection wrapper**

Create `components/shared/FadeInSection.tsx`:

```tsx
"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function FadeInSection({
  children,
  className = "",
  delay = 0,
}: FadeInSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
```

**Step 3: Create CTABanner component**

Create `components/shared/CTABanner.tsx`:

```tsx
import Link from "next/link";

interface CTABannerProps {
  title: string;
  subtitle: string;
  variant?: "gold" | "navy";
}

export default function CTABanner({
  title,
  subtitle,
  variant = "gold",
}: CTABannerProps) {
  const bg = variant === "gold" ? "bg-gold" : "bg-navy";
  const text = variant === "gold" ? "text-navy" : "text-white";
  const btnBg =
    variant === "gold"
      ? "bg-navy text-white hover:bg-navy-light"
      : "bg-gold text-navy hover:bg-gold-light";
  const btnOutline =
    variant === "gold"
      ? "border-navy text-navy hover:bg-navy hover:text-white"
      : "border-white text-white hover:bg-white hover:text-navy";

  return (
    <section className={`${bg} py-16`}>
      <div className={`container-custom text-center ${text}`}>
        <h2 className={`text-2xl font-semibold sm:text-3xl ${text}`}>{title}</h2>
        <p className={`mt-3 text-lg ${variant === "gold" ? "text-navy/70" : "text-white/70"}`}>
          {subtitle}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            className={`rounded-lg px-8 py-3 font-medium transition-colors ${btnBg}`}
          >
            Get a Free Quote
          </Link>
          <a
            href="https://wa.me/6580176492?text=Hi%20SG%20Corp%20Uniforms%2C%20I%20saw%20your%20website%20and%20would%20like%20a%20quote."
            target="_blank"
            rel="noopener noreferrer"
            className={`rounded-lg border px-8 py-3 font-medium transition-colors ${btnOutline}`}
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
```

**Step 4: Update Button component with new variants**

Replace `components/ui/button.tsx` with:

```tsx
import { forwardRef, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "whatsapp" | "ghost" | "gold";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const base =
      "inline-flex items-center justify-center rounded-lg font-medium transition-all focus:outline-none focus:ring-2 focus:ring-gold/30 disabled:opacity-50";

    const variants = {
      primary: "bg-navy text-white hover:bg-navy-light hover:scale-[1.02]",
      secondary:
        "border border-navy text-navy hover:bg-navy hover:text-white",
      whatsapp: "bg-whatsapp text-white hover:bg-[#1ebe57]",
      ghost: "text-navy hover:text-gold underline-offset-4",
      gold: "bg-gold text-navy hover:bg-gold-light",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-sm",
      lg: "px-8 py-3.5 text-base",
    };

    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
export type { ButtonProps };
```

**Step 5: Commit**

```bash
git add components/ui/section-header.tsx components/ui/button.tsx components/shared/
git commit -m "feat: add shared UI components - SectionHeader, FadeInSection, CTABanner, Button variants"
```

---

## Task 4: Build Homepage

**Files:**
- Rewrite: `app/page.tsx`
- Create: `components/home/HeroSection.tsx`
- Create: `components/home/SocialProofBar.tsx`
- Create: `components/home/ProductShowcase.tsx`
- Create: `components/home/ValueProps.tsx`
- Create: `components/home/ProcessMini.tsx`
- Create: `components/home/PortfolioPreview.tsx`
- Create: `components/home/TrustSection.tsx`

This is a large task. Implement each component following the design doc Section 5.1 exactly. Use `FadeInSection` wrapper around each homepage section for scroll animations. Use `SectionHeader` for consistent eyebrow+title pattern. Use `CTABanner` for the bottom CTA.

**Key specs from design doc:**
- Hero: Navy gradient bg, two columns (text left 60%, image right 40%), trust bar below CTAs
- Social Proof: Off-white bg, industry icons (tech, hospitality, manufacturing, F&B, education)
- Product Showcase: 4 cards in 2-col grid, each with image, category eyebrow, description, price hint
- Value Props: 4 cards in 4-col grid, each with icon in soft-blue circle, title, text
- Process Mini: 4-step horizontal timeline with icons and day counts
- Portfolio Preview: 3-column grid of project images with hover overlay
- Trust Section: Navy bg, 3 commitment cards (Free Mockup, No Hidden Costs, Quality Guarantee)

Wire all CTAs to `/contact`. Wire WhatsApp links to `wa.me/6580176492`.

After implementing all components, assemble in `app/page.tsx`:

```tsx
import HeroSection from "@/components/home/HeroSection";
import SocialProofBar from "@/components/home/SocialProofBar";
import ProductShowcase from "@/components/home/ProductShowcase";
import ValueProps from "@/components/home/ValueProps";
import ProcessMini from "@/components/home/ProcessMini";
import PortfolioPreview from "@/components/home/PortfolioPreview";
import TrustSection from "@/components/home/TrustSection";
import CTABanner from "@/components/shared/CTABanner";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SocialProofBar />
      <ProductShowcase />
      <ValueProps />
      <ProcessMini />
      <PortfolioPreview />
      <TrustSection />
      <CTABanner
        title="Ready to outfit your team?"
        subtitle="Get a free quote and design mockup. No commitment required."
      />
    </>
  );
}
```

**Commit:** `feat: build homepage with all 8 sections`

---

## Task 5: Build Multi-Step Contact/Quote Form

**Files:**
- Rewrite: `app/contact/page.tsx`
- Create: `components/forms/MultiStepQuoteForm.tsx`
- Create: `components/forms/StepOne.tsx`
- Create: `components/forms/StepTwo.tsx`
- Create: `components/forms/StepThree.tsx`
- Create: `components/forms/ProgressBar.tsx`
- Create: `components/ui/visual-selector.tsx`
- Create: `components/ui/pill-selector.tsx`
- Modify: `app/api/contact/route.ts` (extend Zod schema for new fields)

**Key specs from design doc Section 5.6:**
- 3 steps: Requirements > Details > Contact
- Step 1: Visual card selector for garment type (6 options), pill selector for quantity (4 options)
- Step 2: Fabric dropdown, colors text, deadline text, file upload, message textarea
- Step 3: Company name, contact name, email, phone
- Right sidebar: trust cards ("What Happens Next?", "Quick Facts", "Prefer to Chat?")
- Progress bar: gold fill with step labels
- Slide animation between steps
- Success state: animated checkmark

Use React Hook Form with Zod. Form state persists across steps. Only validate current step's fields on "Next". Submit all data on step 3.

Update the Zod schema in `app/api/contact/route.ts` to accept new optional fields: `fabric`, `colors`, `fileUrl`. Keep the API backward compatible.

**Commit:** `feat: build multi-step quote form with visual selectors`

---

## Task 6: Build Products Page

**Files:**
- Rewrite: `app/products/page.tsx`

**Key specs from design doc Section 5.3:**
- Page hero: H1 "Our Products" with subtitle
- 5 product cards in 2-col grid: each with image area, gold eyebrow category, h3 title, description, 2x2 details grid (Fabric, Branding, MOQ, Starting price), "Enquire about this" link to `/contact?type=xxx`
- Customization section: 3 columns (Fabrics, Printing, Design Support) with icons
- CTA at bottom

Product data should be a `const` array in the page file. Each card links to `/contact?type=<category>` which the multi-step form can pre-select.

**Commit:** `feat: build products page with detailed cards and price hints`

---

## Task 7: Build Portfolio Page

**Files:**
- Rewrite: `app/portfolio/page.tsx`

**Key specs from design doc Section 5.4:**
- Page hero with subtitle
- Filter tabs: All | Corporate | Sports & Events | Workwear | F&B (client-side filtering)
- 3-col project grid with image, hover overlay (navy + category tag in gold + title)
- Projects without photos: styled card with fabric texture bg and text description
- Reference photo CTA card
- Bottom CTA banner

Portfolio data as `const` array. Use `useState` for active filter tab. Use CSS `object-cover` for images, graceful fallback for missing images.

**Commit:** `feat: build portfolio page with filter tabs and hover overlays`

---

## Task 8: Build How It Works Page

**Files:**
- Rewrite: `app/how-it-works/page.tsx`

**Key specs from design doc Section 5.5:**
- Page hero
- 8-step alternating timeline with vertical connecting line
- Each step: gold number circle, icon, title, description, "Typically: X days", expandable details
- Timeline summary bar (Design 1-3 days | Production 7-14 days | Shipping 3-7 days)
- Mini FAQ (3 items, accordion)
- CTA

Use CSS for the vertical timeline line (absolute positioned pseudo-element). Steps alternate left/right on desktop, stack on mobile. Use Radix Accordion for expandable details and mini FAQ.

**Commit:** `feat: build how-it-works page with alternating timeline`

---

## Task 9: Build About Page

**Files:**
- Create: `app/about/page.tsx`

**Key specs from design doc Section 5.2:**
- Hero: H1 "Our Story", subtitle, navy bg
- Story section: two columns (text left, image right)
- Team section: two cards side by side with photo placeholders (circles), names, roles
- Values section: 3-card grid (Quality First, Transparent Pricing, Reliable Delivery)
- CTA banner (reuse CTABanner component)

All copy from design doc. Use placeholder circles (bg-slate/20 with initials) for team photos until real photos are provided.

**Commit:** `feat: build about page with team story and values`

---

## Task 10: Build FAQ Page

**Files:**
- Rewrite: `app/faq/page.tsx`

**Key specs from design doc Section 5.7:**
- Page hero
- Tabbed categories: Ordering | Production | Pricing & Payment | Delivery
- Each tab shows relevant FAQ items in Radix Accordion
- 16 FAQ items total (4 per category) -- expand from current 6
- CTA at bottom

Use `useState` for active tab. Reuse existing Radix Accordion component. FAQ data as `const` array with `category` field for filtering.

**Commit:** `feat: build FAQ page with tabbed categories and 16 questions`

---

## Task 11: Build Blog Infrastructure

**Files:**
- Create: `content/blog/choosing-fabric-singapore.mdx`
- Create: `lib/blog.ts` (blog utility functions)
- Create: `app/blog/page.tsx`
- Create: `app/blog/[slug]/page.tsx`
- Create: `components/blog/BlogCard.tsx`

**Key specs from design doc Section 5.8:**

**Step 1: Create blog utility functions**

Create `lib/blog.ts`:
- `getAllPosts()`: reads `content/blog/*.mdx` files, parses frontmatter with `gray-matter`, returns sorted by date
- `getPostBySlug(slug)`: reads single post, returns frontmatter + content
- Each post has frontmatter: `title`, `excerpt`, `date`, `category`, `readingTime`, `featured` (boolean)

**Step 2: Create one sample blog post**

Create `content/blog/choosing-fabric-singapore.mdx` with full frontmatter and 400-500 word article about fabric selection for Singapore's climate.

**Step 3: Create BlogCard component**

Create `components/blog/BlogCard.tsx`: Image top, category tag (gold bg), title, date + reading time, excerpt.

**Step 4: Create blog listing page**

Create `app/blog/page.tsx`: Hero, featured post (full-width card), remaining posts in 3-col grid using BlogCard.

**Step 5: Create blog post page**

Create `app/blog/[slug]/page.tsx`: Category tag, H1, date, article content (rendered MDX), CTA banner at bottom. Use `next-mdx-remote` for MDX rendering. Generate static params from `getAllPosts()`.

**Commit:** `feat: build blog infrastructure with MDX support and initial post`

---

## Task 12: Clean Up Old Components & Final Polish

**Files:**
- Delete: `components/HeroSection.tsx` (replaced by `components/home/HeroSection.tsx`)
- Delete: `components/Navigation.tsx` (replaced by `components/layout/Header.tsx`)
- Delete: `components/Section.tsx` (replaced by `container-custom` utility class)
- Delete: `components/ValuePropositionSection.tsx` (replaced by `components/home/ValueProps.tsx`)
- Delete: `components/WhatsAppButton.tsx` (inlined where needed)
- Delete: `components/WhatsAppFloating.tsx` (replaced by `components/layout/WhatsAppFloating.tsx`)

**Step 1: Remove old components**

Delete the 6 files listed above.

**Step 2: Verify no broken imports**

Run: `npm run build`
Expected: Build succeeds with zero errors

**Step 3: Run linter**

Run: `npm run lint`
Expected: No errors (fix any that appear)

**Step 4: Commit**

```bash
git add -A
git commit -m "chore: remove old components replaced by redesign"
```

---

## Task 13: SEO & Metadata

**Files:**
- Modify: all page files (add per-page metadata exports)
- Create: `app/sitemap.ts` (Next.js sitemap generation)
- Create: `app/robots.ts` (Next.js robots.txt generation)

**Step 1: Add metadata to each page**

Each page should export a `metadata` object with unique title and description. Follow the pattern from design doc Section 9.

Example for products page:
```tsx
export const metadata: Metadata = {
  title: "Corporate Uniforms & Custom T-Shirts | SG Corp Uniforms",
  description: "Corporate polos, sports tees, workwear, and accessories. All customizable with your logo. Starting from 50 pieces. Free design mockup.",
};
```

**Step 2: Create sitemap.ts**

```tsx
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://sgcorpuniforms.com";
  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/products`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/portfolio`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/how-it-works`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/faq`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
  ];
}
```

**Step 3: Create robots.ts**

```tsx
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://sgcorpuniforms.com/sitemap.xml",
  };
}
```

**Step 4: Commit**

```bash
git add -A
git commit -m "feat: add per-page SEO metadata, sitemap, and robots.txt"
```

---

## Task 14: Final Build Verification

**Step 1: Full production build**

Run: `npm run build`
Expected: Build succeeds, all pages statically generated

**Step 2: Run dev server and manually verify all pages**

Run: `npm run dev`
Check each page loads: `/`, `/products`, `/portfolio`, `/how-it-works`, `/about`, `/blog`, `/faq`, `/contact`

**Step 3: Check mobile responsiveness**

Open Chrome DevTools, toggle device toolbar, verify each page at 375px width.

**Step 4: Test contact form submission**

Fill out multi-step form and submit. Verify email received and Google Sheet updated.

**Step 5: Final commit**

```bash
git add -A
git commit -m "chore: final build verification - all pages working"
```

---

## Summary

| Task | Description | Dependencies |
|------|-------------|-------------|
| 1 | Design system setup | None |
| 2 | Layout components (Header, Footer, WhatsApp) | Task 1 |
| 3 | Shared UI components | Task 1 |
| 4 | Homepage (8 sections) | Tasks 2, 3 |
| 5 | Contact page (multi-step form) | Tasks 2, 3 |
| 6 | Products page | Tasks 2, 3 |
| 7 | Portfolio page | Tasks 2, 3 |
| 8 | How It Works page | Tasks 2, 3 |
| 9 | About page | Tasks 2, 3 |
| 10 | FAQ page | Tasks 2, 3 |
| 11 | Blog infrastructure | Tasks 2, 3 |
| 12 | Clean up old components | Tasks 4-11 |
| 13 | SEO & metadata | Tasks 4-11 |
| 14 | Final verification | Tasks 12, 13 |

**Tasks 4-11 can be done in parallel** after Tasks 1-3 are complete. Tasks 12-14 are sequential cleanup and verification.
