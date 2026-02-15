# SG Corp Uniforms - Website Redesign: UI/UX Design Document

> **Date:** 2026-02-15
> **Goal:** Brand & credibility-first redesign with lead capture optimization
> **Style:** Clean & Premium (Apple/CYC Uniforms inspired)
> **Status:** Design Phase

---

## Table of Contents

1. [Design Strategy & Goals](#1-design-strategy--goals)
2. [Competitive Insights Applied](#2-competitive-insights-applied)
3. [Information Architecture](#3-information-architecture)
4. [Design System](#4-design-system)
5. [Page-by-Page Specifications](#5-page-by-page-specifications)
6. [Component Library](#6-component-library)
7. [Interaction & Animation Specs](#7-interaction--animation-specs)
8. [Mobile Design Specs](#8-mobile-design-specs)
9. [SEO & Performance Requirements](#9-seo--performance-requirements)
10. [Implementation Notes](#10-implementation-notes)

---

## 1. Design Strategy & Goals

### Primary Goal
**Build brand credibility and trust** to compete with established Singapore uniform suppliers (CYC, MeowPrint, Uno Apparel) while maximizing lead capture.

### Design Principles

1. **Premium over flashy** -- Every element should convey quality. Generous whitespace, refined typography, restrained color use. If a competitor looks "template-y", we look bespoke.

2. **Trust through transparency** -- Show the process, show the people, show the production. Tirupur connection is a strength, not something to hide.

3. **Reduce friction to contact** -- Every scroll should have a path to enquiry. Multi-step quote form, persistent WhatsApp, contextual CTAs.

4. **Content-rich without clutter** -- Use progressive disclosure. Show enough to inform, reveal more on interaction.

5. **Photography-forward** -- Use every real photo available. Where photos are missing, use tasteful abstract textures or fabric close-ups rather than generic stock.

### Success Metrics
- Form submission rate > 3% of visitors (vs B2B average of 1.1%)
- WhatsApp click rate > 5% of visitors
- Average session duration > 2 minutes
- Bounce rate < 40%

---

## 2. Competitive Insights Applied

### What We're Borrowing from Competitors

| Feature | Inspired By | Our Implementation |
|---------|-------------|-------------------|
| Instant quote indication | MeowPrint | "From $X/pc" indicators on product cards (range, not exact) |
| Industry-vertical navigation | CYC Uniforms | Industry use-case sections on Products page |
| Multi-step quote form | CYC + best practices | 3-step form: Requirements > Details > Contact |
| Project gallery with real photos | MeowPrint (2000+ projects) | Portfolio with real photos + production shots |
| Order process visualization | Uno Apparel | Redesigned timeline on How It Works page |
| Client logo bar | Uno Apparel | "Trusted By" section (add as clients come in, start with industries served) |
| Live engagement | Custom Ink | WhatsApp floating + in-page contextual CTAs |
| About/Team page | CYC Uniforms | Singapore-Tirupur story with team photos |

### What We're Doing Better Than All Competitors

1. **Production transparency** -- Show Tirupur factory, process photos. No competitor does this. It's a trust differentiator.
2. **Modern design quality** -- Most SG competitors use dated WordPress/WooCommerce themes. Our Next.js site will feel like a different league.
3. **Smart pricing hints** -- Not full e-commerce pricing, but "Starting from" indicators to reduce friction. Competitors either show nothing or show full e-commerce prices.
4. **Story-driven About page** -- The Singapore + Tirupur story is unique and compelling. No competitor tells this story.
5. **Blog with real content** -- SEO advantage over competitors who have no content strategy.

---

## 3. Information Architecture

### Site Map

```
Home (/)
├── About (/about)                    [NEW]
├── Products (/products)              [REDESIGNED]
│   └── Use cases: Corporate, Sports, Industrial, F&B
├── Portfolio (/portfolio)            [REDESIGNED]
│   └── Project detail views
├── How It Works (/how-it-works)      [REDESIGNED]
├── Blog (/blog)                      [NEW]
│   └── /blog/[slug]
├── FAQ (/faq)                        [REDESIGNED]
├── Contact / Get a Quote (/contact)  [REDESIGNED - Multi-step]
└── API
    └── /api/contact (POST)
```

### Navigation Structure

**Primary Nav (Desktop):**
```
[Logo: SG Corp Uniforms]    Products    Portfolio    How It Works    About    Blog    [Get a Quote →]
```

- Logo links to home
- "Get a Quote" is a **solid button** (primary CTA, always visible)
- Other links are text-only
- FAQ accessible from footer and contextually on pages (not top nav -- too many items otherwise)

**Primary Nav (Mobile):**
```
[Logo]                    [Get a Quote]    [☰ Menu]
```

- Quote button persists on mobile (shortened to "Quote")
- Hamburger opens full-screen overlay menu

---

## 4. Design System

### 4.1 Color Palette

Moving away from the current blue-purple gradient to a more **refined, premium palette**.

#### Primary Colors
```
Navy (Primary):        #1B2A4A   -- Headers, primary text, nav background
                                    Dark, authoritative, premium feel

Warm Gold (Accent):    #C8A85C   -- Accent highlights, hover states, badges
                                    Subtle luxury signal, differentiates from sea of blue competitors

White:                 #FFFFFF   -- Backgrounds, cards
Off-White:             #F8F7F4   -- Section backgrounds (alternating)
                                    Warm undertone, more premium than pure gray
```

#### Secondary Colors
```
Slate (Body Text):     #4A5568   -- Paragraph text, descriptions
Light Slate:           #94A3B8   -- Captions, secondary text, borders

Success Green:         #16A34A   -- WhatsApp, success states
WhatsApp Green:        #25D366   -- WhatsApp button specifically

Soft Blue:             #E8EDF5   -- Subtle background accents, tag backgrounds
```

#### Gradient (Used Sparingly)
```
Hero Gradient:         linear-gradient(135deg, #1B2A4A 0%, #2D3F6B 100%)
                       Subtle, dark navy gradient -- not the current loud blue-purple
```

### 4.2 Typography

**Font Stack:**
```
Headings:   "Inter", system-ui, sans-serif
            Weight: 600 (semibold) for h1-h2, 500 (medium) for h3-h6
            Letter-spacing: -0.02em (tight, modern feel)

Body:       "Inter", system-ui, sans-serif
            Weight: 400 (regular)
            Line-height: 1.7 (generous for readability)

Accent:     "Inter", system-ui, sans-serif
            Weight: 500, uppercase, letter-spacing: 0.05em
            For labels, badges, section eyebrows
```

**Type Scale:**
```
Hero Title:          48px / 56px line-height (mobile: 32px / 40px)
Page Title (h1):     40px / 48px (mobile: 28px / 36px)
Section Title (h2):  32px / 40px (mobile: 24px / 32px)
Subsection (h3):     24px / 32px (mobile: 20px / 28px)
Card Title (h4):     20px / 28px (mobile: 18px / 24px)
Body:                16px / 28px (mobile: 16px / 26px)
Small:               14px / 22px
Caption:             12px / 18px
```

### 4.3 Spacing System

```
Base unit:   4px
Spacing:     4, 8, 12, 16, 24, 32, 48, 64, 96, 128
Section gap: 96px (desktop), 64px (mobile)
Card padding: 24px (desktop), 16px (mobile)
Container max-width: 1200px
Container padding: 24px each side
```

### 4.4 Border & Shadow

```
Border radius:
  Small (buttons, tags):     8px
  Medium (cards):            12px
  Large (hero images):       16px
  Full (avatars):            50%

Shadows:
  Card:       0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)
  Card hover: 0 10px 25px rgba(0,0,0,0.08), 0 4px 10px rgba(0,0,0,0.04)
  Nav:        0 1px 3px rgba(0,0,0,0.1)

Borders:
  Default:    1px solid #E2E8F0
  Subtle:     1px solid #F1F5F9
```

### 4.5 Iconography

**Lucide React** (already in project) -- line icons, 24px default, 1.5px stroke.

Key icons needed:
- `Phone`, `Mail`, `MapPin` -- Contact
- `MessageCircle` -- WhatsApp
- `CheckCircle` -- Features/benefits
- `ArrowRight` -- CTAs
- `ChevronDown` -- Accordion
- `Clock`, `Truck`, `Shield`, `Palette` -- Process/features
- `Star` -- Reviews/ratings
- `Upload`, `FileText` -- Form
- `Menu`, `X` -- Navigation
- `Quote` -- Testimonials
- `Factory`, `Scissors`, `Ruler` -- Production/custom

---

## 5. Page-by-Page Specifications

---

### 5.1 HOME PAGE (`/`)

The homepage is the primary conversion funnel entry. Every section should either build trust or guide toward contact.

#### Section 1: Hero
```
Layout: Full-width, navy gradient background
Height: 90vh (desktop), auto (mobile)

Left Column (60%):
  [Eyebrow]    CORPORATE UNIFORMS & SPORTSWEAR
  [H1]         Premium Custom Uniforms.
               Made in Tirupur.
               Delivered to Singapore.
  [Subtitle]   From corporate polos to sports jerseys -- we handle design,
               production, and delivery. Starting from 50 pieces.
  [CTA Row]
    [Primary Button: "Get a Free Quote" → /contact]
    [Secondary Button: "Chat on WhatsApp" → wa.me (outline, green icon)]

  [Trust Bar below CTAs]
    ✓ 50pc minimum  ·  ✓ 2-4 week delivery  ·  ✓ Free design mockup

Right Column (40%):
  [Hero Image]  High-quality photo of finished corporate uniforms
                OR a tasteful composition of fabric textures + finished product
                Rounded corners (16px), subtle shadow
```

#### Section 2: Social Proof Bar
```
Layout: Full-width, off-white background (#F8F7F4)
Height: ~80px

Content (centered, horizontal):
  "Trusted by companies across Singapore for corporate uniforms"
  [If client logos available: display 4-6 logos in grayscale, opacity 0.6]
  [If no logos yet: display industry icons instead]
    🏢 Tech    🏨 Hospitality    🏭 Manufacturing    🍽 F&B    🏫 Education
    with text: "Serving tech startups, hotels, manufacturers, restaurants, and schools"
```

#### Section 3: Product Showcase (3-4 cards)
```
Layout: Container width, off-white bg
Title: [Eyebrow] WHAT WE MAKE
       [H2] Uniforms for Every Team

Cards (grid: 2 cols desktop, 1 col mobile):
  Each card:
    [Image]       Real product photo (or high-quality fabric texture)
                  Aspect ratio 3:2, rounded corners, object-fit: cover
    [Category]    e.g., "CORPORATE POLO SHIRTS"
    [Description] 1-2 lines: "Classic polos with embroidered logos..."
    [Price hint]  "From ~$12/pc for 100+ pieces"
    [Link]        "View options →" (text link to /products)

  Categories shown:
    1. Corporate Polo Shirts
    2. Corporate T-Shirts
    3. Sports & Event T-Shirts
    4. Uniform Shirts & Workwear

[CTA below cards]: "See all products →" → /products
```

#### Section 4: Why Choose Us (Value Props)
```
Layout: Container, white background
Title: [Eyebrow] WHY SG CORP UNIFORMS
       [H2] The Tirupur Advantage, Singapore Service

Grid: 4 columns (desktop), 2 columns (tablet), 1 column (mobile)

Each value prop:
  [Icon]    (Lucide, 40px, navy color, inside soft-blue circle background)
  [Title]   Bold, 20px
  [Text]    2-3 lines, slate color

  1. Icon: DollarSign
     Title: "Competitive Pricing"
     Text:  "Direct from Tirupur, India's largest garment hub.
             Save 30-50% vs local Singapore suppliers."

  2. Icon: Palette
     Title: "Full Customization"
     Text:  "Logos, colors, fabrics, sizes -- all tailored to your brand.
             Free design mockup included."

  3. Icon: Truck
     Title: "Reliable 2-4 Week Delivery"
     Text:  "Production to doorstep in Singapore.
             Tracked shipping with customs handled."

  4. Icon: Shield
     Title: "Quality Guaranteed"
     Text:  "Strict QC before dispatch. Photo verification
             for every order. Fix or redo if not right."
```

#### Section 5: How It Works (Mini Version)
```
Layout: Container, off-white background
Title: [Eyebrow] SIMPLE PROCESS
       [H2] From Enquiry to Delivery in 4 Steps

Horizontal timeline (desktop) / Vertical (mobile):

  Step 1             Step 2            Step 3           Step 4
  [Icon: MessageCircle] [Icon: Pencil]    [Icon: Factory]  [Icon: Package]
  "Tell Us            "Review Your      "We Produce     "Delivered to
   What You Need"      Design Mockup"    in Tirupur"     Your Door"
   1-2 days            1-2 days          7-14 days       3-7 days

  Connected by a dotted line with arrow

[CTA]: "See the full process →" → /how-it-works
```

#### Section 6: Portfolio Preview
```
Layout: Container, white background
Title: [Eyebrow] OUR WORK
       [H2] Recent Projects

Grid: 3 columns (desktop), 1 column (mobile)
Show 3 latest portfolio items:
  Each:
    [Image]     Real photo, 1:1 aspect ratio, rounded corners
    [Overlay on hover]: Category + "View project →"

[CTA]: "See full portfolio →" → /portfolio
```

#### Section 7: Testimonial / Trust Section
```
Layout: Full-width, navy background with subtle pattern overlay
Title: [H2, white text] "What Our Clients Say"

[If testimonials available]:
  Carousel or grid of 2-3 testimonials:
    "Quote text here..."
    -- Name, Title, Company

[If no testimonials yet -- RECOMMENDED FOR NOW]:
  Replace with "Our Commitment" section:
    Three promise cards on navy background:

    Card 1: "Free Design Mockup"
      "We create a professional mockup before you commit to anything."

    Card 2: "No Hidden Costs"
      "Your quote includes production, printing, and shipping to Singapore."

    Card 3: "Quality or We Fix It"
      "Not satisfied? We'll redo the order at our cost."

  These act as risk-reversal trust signals (proven to increase conversions
  for new businesses without testimonials).
```

#### Section 8: CTA Banner
```
Layout: Full-width, warm gold (#C8A85C) background with navy text
Content:
  [H2] "Ready to outfit your team?"
  [Subtitle] "Get a free quote and design mockup. No commitment required."
  [Button Row]
    [Primary: "Get a Free Quote" → /contact (navy button, white text)]
    [Secondary: "WhatsApp Us" → wa.me (outline, navy)]
```

#### Section 9: Footer
```
Layout: Full-width, navy background (#1B2A4A)

Three columns:
  Col 1: SG Corp Uniforms
    Brief tagline: "Singapore-based. Tirupur-made. Quality guaranteed."
    © 2026 SG Corp Uniforms

  Col 2: Quick Links
    Products
    Portfolio
    How It Works
    About Us
    Blog
    FAQ
    Contact

  Col 3: Get in Touch
    📧 enquiry@sgcorpuniforms.com
    📱 +65 8017 6492
    💬 WhatsApp Us

Bottom bar:
  "Professional corporate uniforms & sports T-shirts for Singapore businesses"
  (SEO-optimized footer text)
```

---

### 5.2 ABOUT PAGE (`/about`) -- NEW

```
Purpose: Build trust through transparency. Tell the Singapore-Tirupur story.

Section 1: Hero
  [H1] "Our Story"
  [Subtitle] "Singapore service. Tirupur craftsmanship."
  Background: Subtle navy with fabric texture overlay

Section 2: The Story
  Two-column layout:
  Left: Text block
    "SG Corp Uniforms was founded with a simple idea: bring the quality
     and value of Tirupur's garment industry directly to Singapore businesses.

     Tirupur, in Tamil Nadu, India, is the country's largest knitwear
     hub -- producing garments for international brands worldwide.
     Our production partner has years of experience serving corporate
     clients across India.

     We bridge the gap: you get Singapore-based support, consultation,
     and delivery, with the pricing advantage and production expertise
     of Tirupur."

  Right: Photo
    [Production facility photo, or fabric/garment close-up]

Section 3: The Team
  Two cards side by side:

  Card 1: [Photo placeholder circle]
    Name
    "Singapore-based. Handles strategy, branding, and technology."

  Card 2: [Photo placeholder circle]
    Name
    "Singapore-based. Manages customer relationships and order coordination."

  [Below]: "Backed by an experienced production team in Tirupur, India."

Section 4: Our Values
  Grid of 3:
    1. "Quality First"
       "Every order goes through multi-point quality checks before shipping."
    2. "Transparent Pricing"
       "No hidden fees. Your quote covers everything from production to delivery."
    3. "Reliable Delivery"
       "We've built logistics partnerships to ensure on-time delivery, every time."

Section 5: CTA
  Same CTA banner as homepage Section 8
```

---

### 5.3 PRODUCTS PAGE (`/products`) -- REDESIGNED

```
Purpose: Showcase what's available. Organized by use case, not just category.

Section 1: Page Hero
  [H1] "Our Products"
  [Subtitle] "Corporate uniforms, sports tees, workwear, and accessories.
              All customizable to your brand."
  Background: off-white with subtle fabric texture

Section 2: Product Categories
  Grid: 2 columns (desktop), 1 (mobile)

  Each product card (larger, more detailed than homepage):
    [Image]         Real photo or high-quality placeholder, 16:9 ratio
    [Category]      "CORPORATE POLO SHIRTS" (eyebrow, gold accent)
    [H3]            "Classic Polos with Embroidered Logos"
    [Description]   3-4 lines describing the product
    [Details Grid]  2x2 mini grid:
                      Fabric: Cotton, poly-cotton blends
                      Branding: Embroidery or print
                      MOQ: 30-300 pieces
                      Starting: ~$12/pc
    [CTA]           "Enquire about this →" → /contact?type=polo

  Products (5 cards):
    1. Corporate Polo Shirts
    2. Corporate T-Shirts
    3. Sports & Event T-Shirts
    4. Uniform Shirts & Sets
    5. Aprons & Accessories

Section 3: Customization Options
  Title: [H2] "Make It Yours"

  Three columns:
    1. Fabrics & Materials
       [Icon: Scissors]
       Cotton, poly-cotton, dri-fit, performance blends
       "We'll recommend the best fabric for your use case."

    2. Printing & Branding
       [Icon: Palette]
       Embroidery, silkscreen, DTF digital printing
       "Logos, names, numbers, department labels."

    3. Design Support
       [Icon: PenTool]
       Free mockup, color matching, size guidance
       "Send us your logo and we'll create a mockup within 24 hours."

Section 4: CTA
  "Not sure which product is right? We'll help."
  [Get a Quote →]
```

---

### 5.4 PORTFOLIO PAGE (`/portfolio`) -- REDESIGNED

```
Purpose: Show real work. Build confidence through visual proof.

Section 1: Page Hero
  [H1] "Our Work"
  [Subtitle] "Browse recent projects. Have a specific style in mind?
              Send us a reference photo and we'll match it."

Section 2: Filter Bar (Optional, add when enough projects)
  Tabs: All | Corporate | Sports & Events | Workwear | F&B
  (Horizontal scrollable on mobile)

Section 3: Project Grid
  Masonry or uniform grid, 3 cols (desktop), 2 (tablet), 1 (mobile)

  Each project card:
    [Image]       Real photo, fills card, rounded corners
    [Overlay]     On hover: semi-transparent navy overlay
                  Category tag (e.g., "Corporate") in gold
                  Project title
    [Below image] Brief description: "100 dri-fit sports tees for
                  company sports day. Full-color sublimation print."

  [For projects without photos]:
    Use a styled card with:
    - Fabric texture background
    - Text description of the project
    - "Photos coming soon" subtle note

Section 4: Reference Photo CTA
  [Card with fabric texture background]
  [H3] "Have a Reference Photo?"
  [Text] "Send us a photo of a style you like via WhatsApp or our contact form.
          We'll recommend fabrics, printing methods, and give you a quote."
  [Two buttons]: "Upload via Contact Form" | "Send via WhatsApp"

Section 5: CTA Banner
  "Like what you see? Let's create something for your team."
  [Get a Quote →]
```

---

### 5.5 HOW IT WORKS PAGE (`/how-it-works`) -- REDESIGNED

```
Purpose: Remove uncertainty. Show exactly what happens after enquiry.

Section 1: Page Hero
  [H1] "How It Works"
  [Subtitle] "From your first enquiry to delivery at your door.
              Here's exactly what to expect."

Section 2: Timeline (8 Steps)
  Layout: Alternating left-right cards connected by vertical timeline line

  Each step card:
    [Step number]   Circle with number, gold background, navy text
    [Icon]          Lucide icon, 32px
    [Title]         Step name (h3)
    [Description]   2-3 sentences
    [Timeline]      "Typically: X days"
    [Details]       Expandable bullet points (click to expand)

  Steps:
    1. Enquiry Received (1 day)
       "Reach out via our form or WhatsApp. We respond within 24 hours."
       Details: Website form, WhatsApp, email

    2. Requirements Discussion (1-2 days)
       "We'll discuss garment type, fabric, colors, logo placement, and quantity."
       Details: What info we need from you

    3. Design Mockup (1-2 days)
       "We create a professional digital mockup showing your logo on the garment."
       Details: Free mockup, unlimited revisions at this stage

    4. Quote & Approval (1 day)
       "Transparent pricing with no hidden costs. Approve to proceed."
       Details: What's included in the quote, payment terms

    5. Production in Tirupur (7-14 days)
       "Your order is manufactured in our Tirupur facility."
       Details: Fabric sourcing, cutting, printing/embroidery, stitching

    6. Quality Check (1-2 days)
       "Multi-point QC with photo verification sent to you before shipping."
       Details: What we check, photo samples

    7. Shipping to Singapore (3-7 days)
       "Tracked shipping with customs and documentation handled by us."
       Details: Shipping partners, customs clearance

    8. Delivery & Follow-up
       "Delivered to your office. We follow up to ensure satisfaction."
       Details: Reorder process, feedback

Section 3: Timeline Summary
  Visual bar showing total timeline:
  |--1-3 days--|--7-14 days--|--3-7 days--|
   Design &      Production    Shipping
   Approval

  "Total: 2-4 weeks from approval to delivery"

Section 4: FAQ Mini (3 most relevant)
  Accordion with:
  - "Can you handle urgent orders?"
  - "What is the minimum order?"
  - "What happens if there's a quality issue?"

Section 5: CTA
  "Ready to get started?"
  [Get a Free Quote →]
```

---

### 5.6 CONTACT / GET A QUOTE PAGE (`/contact`) -- REDESIGNED

```
Purpose: Maximum conversion. Multi-step form reduces friction.

Section 1: Page Hero (Compact)
  [H1] "Get a Free Quote"
  [Subtitle] "Tell us what you need. We'll respond within 24 hours
              with a design mockup and pricing."

Section 2: Two-Column Layout

LEFT COLUMN (65%): Multi-Step Quote Form

  Progress Bar:
    Step 1 (●)────Step 2 (○)────Step 3 (○)
    Requirements    Details       Contact

  STEP 1: "What do you need?"
    Garment Type: [Visual selector -- clickable cards, not dropdown]
      🎽 Corporate Polo    👕 Corporate T-Shirt
      🏃 Sports/Event Tee  👔 Uniform Shirt/Set
      🍳 Apron/Accessory   📦 Other

    Quantity: [Clickable pills, not dropdown]
      [<50]  [50-100]  [100-300]  [300+]

    [Next →]

  STEP 2: "Tell us more"
    Preferred Fabric: [Optional dropdown: Cotton, Poly-cotton, Dri-fit, Not sure]
    Colors/Preferences: [Optional text]
    Deadline: [Optional text, placeholder: "e.g., March 2026"]
    Logo/Artwork: [File upload button, drag-and-drop area]
    Message: [Textarea, placeholder: "Any additional details..."]

    [← Back]  [Next →]

  STEP 3: "Your details"
    Company Name: [Required]
    Contact Name: [Required]
    Email: [Required]
    Phone/WhatsApp: [Optional but encouraged, with note "For faster response"]

    [← Back]  [Submit Enquiry →]

  SUCCESS STATE:
    [CheckCircle icon, green, animated]
    [H2] "Enquiry Received!"
    [Text] "We'll get back to you within 24 hours with a design mockup and quote."
    [Secondary actions]: "WhatsApp us for faster response" | "Browse our products"

RIGHT COLUMN (35%): Trust Sidebar

  Card 1: "What Happens Next?"
    1. We review your requirements (same day)
    2. We create a free design mockup (1-2 days)
    3. You receive pricing with no obligation

  Card 2: "Quick Facts"
    ✓ Minimum order: 50 pieces
    ✓ Free design mockup included
    ✓ No obligation quote
    ✓ 2-4 weeks delivery to Singapore
    ✓ Secure payment in SGD

  Card 3: "Prefer to Chat?"
    [WhatsApp button -- full width, green]
    "Chat with us directly on WhatsApp"
    📧 enquiry@sgcorpuniforms.com
    📱 +65 8017 6492
```

---

### 5.7 FAQ PAGE (`/faq`) -- REDESIGNED

```
Purpose: Answer objections. Reduce support enquiries. Build confidence.

Section 1: Page Hero
  [H1] "Frequently Asked Questions"
  [Subtitle] "Everything you need to know about ordering
              custom uniforms with us."

Section 2: FAQ Categories (Tabbed)
  Tabs: Ordering | Production | Pricing & Payment | Delivery

  [Ordering]
    - What is your minimum order quantity?
    - How do I get started?
    - Can I order different sizes in one batch?
    - Do you provide design support?

  [Production]
    - Where are the uniforms produced?
    - What printing methods do you offer?
    - Can you match specific Pantone colors?
    - Can you handle urgent orders?

  [Pricing & Payment]
    - How much do corporate uniforms cost?
    - What information do you need for a quote?
    - How do payment and invoicing work?
    - Are there any hidden costs?

  [Delivery]
    - How long does delivery take to Singapore?
    - Do you ship to other countries?
    - How is shipping and customs handled?
    - What happens if there's a quality issue?

  Each FAQ: Accordion with smooth expand animation

Section 3: CTA
  "Still have questions?"
  [Get in Touch →] | [WhatsApp Us →]
```

---

### 5.8 BLOG PAGE (`/blog`) -- NEW

```
Purpose: SEO content. Thought leadership. Long-term traffic.

Section 1: Page Hero
  [H1] "Insights & Guides"
  [Subtitle] "Tips on corporate uniforms, fabric selection,
              branding, and team apparel."

Section 2: Blog Grid
  Featured post (full-width card with image):
    [Large image] [Category tag] [Title] [Excerpt] [Read →]

  Remaining posts (grid: 3 cols desktop, 1 mobile):
    Each:
      [Image thumbnail, 16:9]
      [Category tag]
      [Title]
      [Date + reading time]
      [Excerpt, 2 lines]

Section 3: Blog Post Page (/blog/[slug])
  [Category tag]
  [H1 title]
  [Date · X min read]
  [Featured image, full-width]
  [Article content -- markdown rendered]
  [Author card at bottom]
  [Related posts: 3 cards]
  [CTA banner: "Need custom uniforms? Get a quote."]

Initial blog posts to create:
  1. "How to Choose the Right Fabric for Corporate Uniforms in Singapore's Climate"
  2. "Corporate Polo vs T-Shirt: Which Is Right for Your Team?"
  3. "The Complete Guide to Ordering Custom Sports T-Shirts for Company Events"
  4. "Why Tirupur is the World's T-Shirt Capital (And How It Benefits You)"
  5. "5 Things to Consider Before Ordering Bulk Uniforms for Your Singapore Business"
```

---

## 6. Component Library

### Buttons

```
Primary:    bg-navy text-white hover:bg-navy/90
            rounded-lg px-6 py-3 font-medium
            Subtle scale(1.02) on hover

Secondary:  bg-transparent border-navy text-navy hover:bg-navy hover:text-white
            rounded-lg px-6 py-3 font-medium

WhatsApp:   bg-[#25D366] text-white hover:bg-[#1ebe57]
            rounded-lg px-6 py-3 font-medium
            Include WhatsApp icon (MessageCircle or custom SVG)

Ghost:      bg-transparent text-navy hover:text-gold underline-offset-4
            For inline text CTAs ("View more →")

Gold CTA:   bg-gold text-navy hover:bg-gold/90
            Used sparingly for high-priority CTAs on navy backgrounds
```

### Cards

```
Product Card:
  bg-white rounded-xl border shadow-card hover:shadow-card-hover
  transition-all duration-300
  Image top (rounded-t-xl), content bottom (p-6)

Feature Card:
  bg-white rounded-xl p-8 text-center
  Icon in circle (bg-soft-blue) at top

Testimonial Card:
  bg-white rounded-xl p-8
  Large quote icon (gold), text, author info

Step Card:
  bg-white rounded-xl p-6
  Number badge (gold circle, top-left), icon, title, description

Blog Card:
  bg-white rounded-xl overflow-hidden
  Image top, content bottom
  Category tag (gold bg, sm text)
```

### Form Elements

```
Input:      bg-white border rounded-lg px-4 py-3
            Focus: ring-2 ring-gold/30 border-gold
            Error: border-red-500 text-red-500

Select:     Same as input + custom chevron

Textarea:   Same as input, min-height: 120px

File Upload: Dashed border, bg-off-white rounded-lg p-8 text-center
             Icon (Upload), "Drop files here or click to browse"
             Drag-over: border-gold bg-gold/5

Visual Selector (for multi-step form):
  Grid of clickable cards, each with icon + label
  Selected: border-gold bg-gold/5 ring-2 ring-gold
  Unselected: border bg-white hover:border-gold/50

Pill Selector (for quantity):
  Horizontal row of rounded-full buttons
  Selected: bg-navy text-white
  Unselected: bg-off-white text-slate hover:bg-soft-blue
```

### Navigation

```
Desktop Nav:
  bg-white border-b shadow-nav
  Container: flex justify-between items-center h-16
  Logo left, links center-right, CTA button right
  Sticky on scroll (appears after scrolling past hero)

Mobile Nav:
  bg-white h-16
  Logo left, [Quote btn] + [Hamburger] right
  Full-screen overlay on open: bg-white, links stacked, large touch targets (48px+)

WhatsApp Floating:
  Fixed bottom-right, z-50
  bg-[#25D366] rounded-full p-3 shadow-lg
  WhatsApp icon (white, 24px)
  Pulse animation on first load (draws attention)
  On hover: expand to show "WhatsApp Us" text
```

---

## 7. Interaction & Animation Specs

### Page Transitions
- Use Next.js layout transitions for smooth page changes
- Content fades in (opacity 0 → 1, translateY 10px → 0, duration 400ms)

### Scroll Animations (Intersection Observer)
- Sections fade in and slide up slightly as they enter viewport
- Stagger children by 100ms each
- Use `motion-safe` media query -- respect reduced-motion preferences
- Library: Framer Motion (lightweight, Next.js compatible)

### Hover Effects
- **Cards:** translateY(-4px) + shadow increase, 200ms ease
- **Buttons:** scale(1.02), 150ms ease
- **Links:** Color transition to gold, underline appears
- **Portfolio images:** Slight scale(1.05) with overlay fade-in

### Form Interactions
- Multi-step: Slide left/right between steps (200ms)
- Progress bar: Animated width fill (gold color)
- Validation: Shake animation on error, smooth red border transition
- Success: Checkmark draws in (SVG path animation)

### Loading States
- Skeleton screens for dynamic content (blog posts)
- Button loading: Text changes to "Submitting...", subtle spinner

### WhatsApp Button
- Initial: Subtle pulse animation (2 cycles, then stops)
- Hover: Expand from icon-only to icon + text, smooth width transition

---

## 8. Mobile Design Specs

### Breakpoints
```
Mobile:    < 640px   (default, design mobile-first)
Tablet:    640px - 1024px
Desktop:   > 1024px
```

### Mobile-Specific Adjustments

1. **Navigation:** Hamburger menu with full-screen overlay. "Quote" button always visible.

2. **Hero:** Single column. Image below text. Buttons stack vertically.

3. **Cards:** Single column. Full-width. Larger touch targets.

4. **Typography:** Scale down per type scale. H1 from 48px to 32px.

5. **Multi-step form:** Full-width. Visual selectors in 2-column grid. Steps slide horizontally.

6. **WhatsApp floating:** Bottom-right, icon only (no text). 56px touch target.

7. **Footer:** Single column, stacked sections.

8. **Images:** Serve responsive sizes via Next.js Image component. WebP format.

9. **Spacing:** Reduce section gaps from 96px to 64px. Card padding from 24px to 16px.

10. **Sticky CTA:** On long pages (Products, How It Works), show sticky bottom bar with "Get a Quote" button when user scrolls past hero.

---

## 9. SEO & Performance Requirements

### SEO

1. **Metadata per page:**
   - Unique title: "Corporate Polo Shirts Singapore | SG Corp Uniforms"
   - Meta description: 150-160 chars, keyword-rich
   - OpenGraph image for each page

2. **Structured data:**
   - LocalBusiness schema (name, address, phone, hours)
   - FAQ schema on FAQ page (rich snippets)
   - BlogPosting schema on blog posts
   - BreadcrumbList schema

3. **Technical:**
   - Canonical URLs
   - Sitemap.xml (auto-generated)
   - robots.txt
   - Alt text on all images

### Performance

1. **Target:** Lighthouse score > 90 on all metrics
2. **Images:** Next.js Image component with lazy loading, WebP, responsive srcset
3. **Fonts:** Use `next/font` for Inter -- no layout shift
4. **CSS:** Tailwind purges unused styles in production
5. **JavaScript:** Minimize client components. Use server components by default.
6. **Core Web Vitals:**
   - LCP < 2.5s
   - FID < 100ms
   - CLS < 0.1

---

## 10. Implementation Notes

### Tech Stack (No Changes)
- Next.js 14 (App Router)
- TypeScript (strict)
- Tailwind CSS (with custom theme config)
- Radix UI (Accordion, Dialog)
- Framer Motion (new -- for animations)
- React Hook Form + Zod (forms)
- Lucide React (icons)

### New Dependencies
```
framer-motion          -- Page/scroll animations
@next/font             -- Optimized font loading (built into Next.js)
next-mdx-remote        -- Blog post rendering (if using MDX)
gray-matter            -- Blog frontmatter parsing
```

### Tailwind Config Updates
```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        navy: '#1B2A4A',
        gold: '#C8A85C',
        'off-white': '#F8F7F4',
        'soft-blue': '#E8EDF5',
        slate: {
          DEFAULT: '#4A5568',
          light: '#94A3B8',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
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
    },
  },
}
```

### File Structure for New Pages
```
app/
├── about/page.tsx           [NEW]
├── blog/
│   ├── page.tsx             [NEW - Blog listing]
│   └── [slug]/page.tsx      [NEW - Blog post]
├── contact/page.tsx         [REWRITE - Multi-step form]
├── faq/page.tsx             [REWRITE - Tabbed categories]
├── how-it-works/page.tsx    [REWRITE - Timeline design]
├── portfolio/page.tsx       [REWRITE - Grid with filters]
├── products/page.tsx        [REWRITE - Use-case cards]
└── page.tsx                 [REWRITE - New homepage]

components/
├── layout/
│   ├── Header.tsx           [REWRITE]
│   ├── Footer.tsx           [NEW - extracted from layout]
│   ├── MobileMenu.tsx       [NEW]
│   └── WhatsAppFloating.tsx [REWRITE]
├── home/
│   ├── HeroSection.tsx      [REWRITE]
│   ├── SocialProofBar.tsx   [NEW]
│   ├── ProductShowcase.tsx  [NEW]
│   ├── ValueProps.tsx       [REWRITE]
│   ├── ProcessMini.tsx      [NEW]
│   ├── PortfolioPreview.tsx [NEW]
│   ├── TrustSection.tsx     [NEW]
│   └── CTABanner.tsx        [NEW]
├── forms/
│   ├── MultiStepQuoteForm.tsx [NEW]
│   ├── StepOne.tsx          [NEW]
│   ├── StepTwo.tsx          [NEW]
│   ├── StepThree.tsx        [NEW]
│   └── ProgressBar.tsx      [NEW]
├── ui/
│   ├── button.tsx           [UPDATE - new variants]
│   ├── card.tsx             [UPDATE]
│   ├── accordion.tsx        [KEEP]
│   ├── visual-selector.tsx  [NEW]
│   ├── pill-selector.tsx    [NEW]
│   ├── file-upload.tsx      [NEW]
│   └── section-header.tsx   [NEW - eyebrow + h2 pattern]
├── blog/
│   ├── BlogCard.tsx         [NEW]
│   ├── BlogList.tsx         [NEW]
│   └── BlogPost.tsx         [NEW]
└── shared/
    ├── FadeInSection.tsx    [NEW - scroll animation wrapper]
    └── StickyMobileCTA.tsx  [NEW]

content/
└── blog/                    [NEW - MDX or markdown blog posts]
    ├── choosing-fabric-singapore.mdx
    ├── polo-vs-tshirt.mdx
    └── ...
```

### Priority Order for Implementation
1. Design system setup (colors, fonts, Tailwind config)
2. Layout components (Header, Footer, WhatsApp)
3. Homepage (highest impact page)
4. Contact page with multi-step form (conversion-critical)
5. Products page
6. Portfolio page
7. How It Works page
8. About page
9. FAQ page
10. Blog infrastructure + initial posts

---

## Appendix: Competitor Research Sources

- [MeowPrint](https://meowprint.sg/) -- Singapore's leading custom print
- [CYC Uniforms](https://cycuniforms.com/) -- Premium corporate uniforms SG
- [Custom Ink](https://www.customink.com/) -- US gold standard for custom apparel UX
- [Uno Apparel](https://www.uno-apparel.com/) -- SG uniform supplier
- [MonsterPrints](https://monsterprints.com.sg/corporateuniforms/) -- SG corporate uniforms
- [TJG Print](https://tjg.sg/) -- SG t-shirt printing
- [B2B Website Design Best Practices 2025](https://www.trajectorywebdesign.com/blog/b2b-website-design-best-practices)
- [Multi-Step Forms: 300% More Conversions](https://ventureharbour.com/multi-step-lead-forms-get-300-conversions/)
- [B2B Conversion Rates by Industry 2026](https://firstpagesage.com/reports/b2b-conversion-rates-by-industry-fc/)
- [Trust Signals for New Businesses](https://www.webstacks.com/blog/trust-signals)
- [Best B2B Websites 2026](https://www.tilipmandigital.com/resource-center/articles/best-b2b-websites)
