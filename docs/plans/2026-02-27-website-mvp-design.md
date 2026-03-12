# hexAIgon.gr MVP Website Design

**Date:** 2026-02-27
**Status:** Approved
**Scope:** MVP Landing Page (single-page scroll)

## Decisions

- **Architecture:** Single-page scroll with sticky nav and smooth scroll anchors
- **Visual Tone:** Dark + glassmorphism (dark backgrounds, glass cards, gradient accents)
- **Hero Style:** Animated typewriter text + subtle particle/grid background
- **Primary CTA:** Contact form (inline, bottom of page)
- **Brand Tone:** Confident. Clean. Smart.

## Color Palette

- Background: `#0a0a0a` (near-black)
- Glass cards: `white/10-15%` opacity with `backdrop-blur`
- Accent — Web Dev: Blue (`#3b82f6`)
- Accent — AI Automation: Purple (`#8b5cf6`)
- Accent — Custom Software: Green (`#22c55e`)
- Gradient highlights for emphasis
- Text: White primary, muted gray secondary

## Sections (Top to Bottom)

### 1. Sticky Navigation

- Transparent at top, blurs to dark glass on scroll
- Left: "hexAIgon" text logo
- Center: Nav links — Services, How We Work, Tech Stack, Contact (smooth scroll anchors)
- Right: Language toggle (EN/GR), "Get Started" primary button
- Mobile: Hamburger menu with slide-out drawer

### 2. Hero (Full Viewport)

- Full-height dark section with subtle particle/grid animation
- Headline with typewriter rotation: "We build websites that work." / "businesses that scale." / "software that thinks."
- Subheadline: "AI-powered web development & automation for businesses across Greece."
- Two CTAs: "Get Started" (primary, scrolls to contact), "See Our Work" (secondary, scrolls to services)
- Subtle gradient glow behind text

### 3. Services (3-Column Grid)

- Section title: "What We Do"
- Three glass cards with hover glow:
  - **Web Development** (Globe icon, blue accent): Custom websites and web apps built with modern tech
  - **AI Automation** (Bot icon, purple accent): Automate workflows, integrate AI into your business
  - **Custom Software** (Code icon, green accent): Tailored solutions for your unique business needs
- Glassmorphism cards (backdrop-blur + semi-transparent bg)
- Subtle glow on hover matching accent color

### 4. How We Work (3-Step Process)

- Section title: "How We Work"
- Three numbered steps with connecting lines:
  1. **Discover** — We learn your business and goals
  2. **Build** — We design & develop your solution
  3. **Launch** — We deploy, test & hand over support
- Glass cards for each step with gradient number badges

### 5. Stats (Counter Strip)

- Animated counters that count up on scroll into view
- Gradient/glass background strip
- Four stats:
  - 10+ Projects Delivered
  - 15+ Clients Served
  - 50+ Automations Built
  - 1000+ Hours Saved
- Placeholder values, updatable later

### 6. Tech Stack / Partners (Logo Wall)

- Section title: "Powered By"
- Grid of technology logos: React, Next.js, Python, OpenAI, Anthropic, Stripe, AWS, Supabase
- Grayscale logos that colorize on hover
- Responsive grid layout

### 7. Contact / CTA

- Section title: "Ready to automate your business?"
- Glass card with contact form: Name, Email, Message
- Submit button with primary accent
- Success toast on submit (Sonner)
- Fallback: "Or email us: hello@hexaigon.gr"
- MVP: Server action (no email service needed yet)

### 8. Footer

- Dark footer with organized columns:
  - Brand: hexAIgon logo + tagline
  - Services: Web Dev, AI Automation, Custom Software (scroll links)
  - Company: About, Contact, Blog (coming soon)
- Social links using existing SocialIcon component
- Legal: Privacy Policy, Terms of Service
- Language toggle (EN/GR)
- Copyright: "2026 hexAIgon. All rights reserved."

## i18n

- All text content goes through `messages/en.json` and `messages/el.json`
- Translation keys organized by section (Nav, Hero, Services, HowWeWork, Stats, TechStack, Contact, Footer)
- Uses existing next-intl setup

## Technical Notes

- Reuse existing: Button, Card, Input, Textarea, Typography components
- New components needed: Navbar, Hero, ServiceCard, ProcessStep, StatsCounter, TechGrid, ContactForm, Footer
- Particle animation: CSS-only or lightweight canvas (no heavy lib)
- Typewriter effect: CSS animation or small utility
- Scroll-triggered counters: Intersection Observer
- Smooth scroll: CSS `scroll-behavior: smooth` + anchor links
- All new components in `components/` (not `components/ui/`)

## Competitor Reference

- **AppWave.gr:** Dark glassmorphism, partner logos, stats counters, "Book a Call" CTA
- **Differentiation:** More focused (3 services vs 6), typewriter hero, tech-forward branding
