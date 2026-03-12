# hexAIgon.gr MVP Website Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Replace the starter template homepage with a professional single-page scroll landing page for hexAIgon — an AI-powered web development & automation agency.

**Architecture:** Single-page scroll with 8 sections (Nav, Hero, Services, How We Work, Stats, Tech Stack, Contact, Footer). All text i18n-ized through next-intl. Dark glassmorphism visual style. Server components by default, client components only for interactive bits (typewriter, scroll counters, mobile menu, contact form).

**Tech Stack:** Next.js 16, React 19, Tailwind CSS 4, shadcn/ui, next-intl, Lucide icons, CSS animations (no heavy libraries).

---

## Task 1: Update CSS Theme for Dark Glassmorphism

**Files:**
- Modify: `app/[locale]/globals.css`

**Step 1: Update the dark theme variables and add glassmorphism utilities**

Replace the entire `globals.css` with a dark-first theme. Key changes:
- Force dark mode as default (the site IS dark, not toggled)
- Add glassmorphism utility classes
- Add gradient text utility
- Add animation keyframes for typewriter, fade-in, counter

```css
@import "tailwindcss";
@import "tw-animate-css";

@custom-variant dark (&:is(.dark *));

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-roboto);
  --color-sidebar-ring: var(--sidebar-ring);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar: var(--sidebar);
  --color-chart-5: var(--chart-5);
  --color-chart-4: var(--chart-4);
  --color-chart-3: var(--chart-3);
  --color-chart-2: var(--chart-2);
  --color-chart-1: var(--chart-1);
  --color-ring: var(--ring);
  --color-input: var(--input);
  --color-border: var(--border);
  --color-destructive: var(--destructive);
  --color-accent-foreground: var(--accent-foreground);
  --color-accent: var(--accent);
  --color-muted-foreground: var(--muted-foreground);
  --color-muted: var(--muted);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-secondary: var(--secondary);
  --color-primary-foreground: var(--primary-foreground);
  --color-primary: var(--primary);
  --color-popover-foreground: var(--popover-foreground);
  --color-popover: var(--popover);
  --color-card-foreground: var(--card-foreground);
  --color-card: var(--card);
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
  --radius-2xl: calc(var(--radius) + 8px);
  --radius-3xl: calc(var(--radius) + 12px);
  --radius-4xl: calc(var(--radius) + 16px);
}

:root {
  /* Keep light mode vars for potential future use, but default to dark */
  --radius: 0.625rem;
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.145 0 0);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.145 0 0);
  --primary: oklch(0.205 0 0);
  --primary-foreground: oklch(0.985 0 0);
  --secondary: oklch(0.97 0 0);
  --secondary-foreground: oklch(0.205 0 0);
  --muted: oklch(0.97 0 0);
  --muted-foreground: oklch(0.556 0 0);
  --accent: oklch(0.97 0 0);
  --accent-foreground: oklch(0.205 0 0);
  --destructive: oklch(0.577 0.245 27.325);
  --border: oklch(0.922 0 0);
  --input: oklch(0.922 0 0);
  --ring: oklch(0.708 0 0);
  --chart-1: oklch(0.646 0.222 41.116);
  --chart-2: oklch(0.6 0.118 184.704);
  --chart-3: oklch(0.398 0.07 227.392);
  --chart-4: oklch(0.828 0.189 84.429);
  --chart-5: oklch(0.769 0.188 70.08);
  --sidebar: oklch(0.985 0 0);
  --sidebar-foreground: oklch(0.145 0 0);
  --sidebar-primary: oklch(0.205 0 0);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.97 0 0);
  --sidebar-accent-foreground: oklch(0.205 0 0);
  --sidebar-border: oklch(0.922 0 0);
  --sidebar-ring: oklch(0.708 0 0);
}

.dark {
  --background: oklch(0.08 0 0);
  --foreground: oklch(0.985 0 0);
  --card: oklch(0.12 0 0);
  --card-foreground: oklch(0.985 0 0);
  --popover: oklch(0.12 0 0);
  --popover-foreground: oklch(0.985 0 0);
  --primary: oklch(0.7 0.15 250);
  --primary-foreground: oklch(0.985 0 0);
  --secondary: oklch(0.18 0 0);
  --secondary-foreground: oklch(0.985 0 0);
  --muted: oklch(0.18 0 0);
  --muted-foreground: oklch(0.6 0 0);
  --accent: oklch(0.18 0 0);
  --accent-foreground: oklch(0.985 0 0);
  --destructive: oklch(0.704 0.191 22.216);
  --border: oklch(1 0 0 / 10%);
  --input: oklch(1 0 0 / 15%);
  --ring: oklch(0.7 0.15 250);
  --chart-1: oklch(0.488 0.243 264.376);
  --chart-2: oklch(0.696 0.17 162.48);
  --chart-3: oklch(0.769 0.188 70.08);
  --chart-4: oklch(0.627 0.265 303.9);
  --chart-5: oklch(0.645 0.246 16.439);
  --sidebar: oklch(0.12 0 0);
  --sidebar-foreground: oklch(0.985 0 0);
  --sidebar-primary: oklch(0.488 0.243 264.376);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.18 0 0);
  --sidebar-accent-foreground: oklch(0.985 0 0);
  --sidebar-border: oklch(1 0 0 / 10%);
  --sidebar-ring: oklch(0.556 0 0);
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
  }
  html {
    scroll-behavior: smooth;
  }
}

/* Glass card utility */
@layer utilities {
  .glass {
    @apply bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl;
  }
  .glass-hover {
    @apply hover:bg-white/10 hover:border-white/20 transition-all duration-300;
  }
}

/* Typewriter cursor blink */
@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

/* Fade in from below */
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.6s ease-out forwards;
}

.animate-blink {
  animation: blink 1s step-end infinite;
}
```

**Step 2: Update the ThemeProvider default to dark**

In `components/providers.tsx`, change `defaultTheme` from `"system"` to `"dark"`:

```tsx
<NextThemesProvider
  attribute="class"
  defaultTheme="dark"
  enableSystem
  disableTransitionOnChange
>
```

**Step 3: Run type check and lint**

Run: `pnpm tsc --noEmit && pnpm lint`
Expected: PASS (CSS-only changes + one prop change)

**Step 4: Commit**

```bash
git add app/[locale]/globals.css components/providers.tsx
git commit -m "style: update theme to dark glassmorphism for hexAIgon landing page"
```

---

## Task 2: Create i18n Translation Files

**Files:**
- Modify: `messages/en.json`
- Modify: `messages/el.json`

**Step 1: Replace en.json with full website translations**

```json
{
  "Metadata": {
    "title": "hexAIgon - AI-Powered Web Development & Automation",
    "description": "Custom websites, AI automation, and software solutions for businesses across Greece."
  },
  "Nav": {
    "services": "Services",
    "howWeWork": "How We Work",
    "techStack": "Tech Stack",
    "contact": "Contact",
    "getStarted": "Get Started"
  },
  "Hero": {
    "line1": "We build",
    "rotating1": "websites that work.",
    "rotating2": "businesses that scale.",
    "rotating3": "software that thinks.",
    "subtitle": "AI-powered web development & automation for businesses across Greece.",
    "cta": "Get Started",
    "ctaSecondary": "See Our Work"
  },
  "Services": {
    "title": "What We Do",
    "webDev": {
      "title": "Web Development",
      "description": "Custom websites and web applications built with cutting-edge technology. Fast, responsive, and designed to convert."
    },
    "aiAutomation": {
      "title": "AI Automation",
      "description": "Automate repetitive workflows and integrate AI into your business processes. Save time, reduce errors, scale faster."
    },
    "customSoftware": {
      "title": "Custom Software",
      "description": "Tailored software solutions for your unique business needs. From internal tools to customer-facing platforms."
    }
  },
  "HowWeWork": {
    "title": "How We Work",
    "step1": {
      "title": "Discover",
      "description": "We learn your business, understand your goals, and identify opportunities for growth."
    },
    "step2": {
      "title": "Build",
      "description": "We design and develop your solution with modern tools and proven methodologies."
    },
    "step3": {
      "title": "Launch",
      "description": "We deploy, test, and hand over with ongoing support to ensure your success."
    }
  },
  "Stats": {
    "projects": "Projects Delivered",
    "clients": "Clients Served",
    "automations": "Automations Built",
    "hoursSaved": "Hours Saved"
  },
  "TechStack": {
    "title": "Powered By"
  },
  "Contact": {
    "title": "Ready to automate your business?",
    "subtitle": "Tell us about your project and we'll get back to you within 24 hours.",
    "name": "Your Name",
    "email": "Your Email",
    "message": "Tell us about your project...",
    "submit": "Send Message",
    "success": "Message sent! We'll be in touch soon.",
    "error": "Something went wrong. Please try again.",
    "emailFallback": "Or email us at"
  },
  "Footer": {
    "tagline": "AI-powered web development & automation",
    "services": "Services",
    "company": "Company",
    "webDev": "Web Development",
    "aiAutomation": "AI Automation",
    "customSoftware": "Custom Software",
    "about": "About",
    "contact": "Contact",
    "blog": "Blog",
    "comingSoon": "Coming Soon",
    "privacy": "Privacy Policy",
    "terms": "Terms of Service",
    "rights": "All rights reserved."
  }
}
```

**Step 2: Replace el.json with Greek translations**

```json
{
  "Metadata": {
    "title": "hexAIgon - Ανάπτυξη Ιστοσελίδων & Αυτοματισμοί με AI",
    "description": "Κατασκευή ιστοσελίδων, αυτοματισμοί AI και λύσεις λογισμικού για επιχειρήσεις σε όλη την Ελλάδα."
  },
  "Nav": {
    "services": "Υπηρεσίες",
    "howWeWork": "Πώς Δουλεύουμε",
    "techStack": "Τεχνολογίες",
    "contact": "Επικοινωνία",
    "getStarted": "Ξεκινήστε"
  },
  "Hero": {
    "line1": "Χτίζουμε",
    "rotating1": "ιστοσελίδες που δουλεύουν.",
    "rotating2": "επιχειρήσεις που κλιμακώνονται.",
    "rotating3": "λογισμικό που σκέφτεται.",
    "subtitle": "Ανάπτυξη ιστοσελίδων & αυτοματισμοί με τεχνητή νοημοσύνη για επιχειρήσεις σε όλη την Ελλάδα.",
    "cta": "Ξεκινήστε",
    "ctaSecondary": "Δείτε τη Δουλειά μας"
  },
  "Services": {
    "title": "Τι Κάνουμε",
    "webDev": {
      "title": "Κατασκευή Ιστοσελίδων",
      "description": "Κατασκευή ιστοσελίδων και εφαρμογών με σύγχρονες τεχνολογίες. Γρήγορες, responsive και σχεδιασμένες για μετατροπές."
    },
    "aiAutomation": {
      "title": "Αυτοματισμοί AI",
      "description": "Αυτοματοποιήστε επαναλαμβανόμενες εργασίες και ενσωματώστε AI στις επιχειρηματικές σας διαδικασίες. Εξοικονομήστε χρόνο και κλιμακωθείτε."
    },
    "customSoftware": {
      "title": "Ανάπτυξη Λογισμικού",
      "description": "Εξατομικευμένες λύσεις λογισμικού για τις μοναδικές ανάγκες της επιχείρησής σας. Από εσωτερικά εργαλεία έως πλατφόρμες πελατών."
    }
  },
  "HowWeWork": {
    "title": "Πώς Δουλεύουμε",
    "step1": {
      "title": "Ανακάλυψη",
      "description": "Μαθαίνουμε την επιχείρησή σας, κατανοούμε τους στόχους σας και εντοπίζουμε ευκαιρίες ανάπτυξης."
    },
    "step2": {
      "title": "Ανάπτυξη",
      "description": "Σχεδιάζουμε και αναπτύσσουμε τη λύση σας με σύγχρονα εργαλεία και δοκιμασμένες μεθοδολογίες."
    },
    "step3": {
      "title": "Εκκίνηση",
      "description": "Αναπτύσσουμε, δοκιμάζουμε και παραδίδουμε με συνεχή υποστήριξη για την επιτυχία σας."
    }
  },
  "Stats": {
    "projects": "Ολοκληρωμένα Έργα",
    "clients": "Πελάτες",
    "automations": "Αυτοματισμοί",
    "hoursSaved": "Ώρες Εξοικονόμησης"
  },
  "TechStack": {
    "title": "Χτισμένο Με"
  },
  "Contact": {
    "title": "Έτοιμοι να αυτοματοποιήσετε την επιχείρησή σας;",
    "subtitle": "Πείτε μας για το έργο σας και θα επικοινωνήσουμε εντός 24 ωρών.",
    "name": "Το Όνομά σας",
    "email": "Το Email σας",
    "message": "Πείτε μας για το έργο σας...",
    "submit": "Αποστολή Μηνύματος",
    "success": "Το μήνυμα στάλθηκε! Θα επικοινωνήσουμε σύντομα.",
    "error": "Κάτι πήγε στραβά. Δοκιμάστε ξανά.",
    "emailFallback": "Ή στείλτε μας email στο"
  },
  "Footer": {
    "tagline": "Ανάπτυξη ιστοσελίδων & αυτοματισμοί με AI",
    "services": "Υπηρεσίες",
    "company": "Εταιρεία",
    "webDev": "Κατασκευή Ιστοσελίδων",
    "aiAutomation": "Αυτοματισμοί AI",
    "customSoftware": "Ανάπτυξη Λογισμικού",
    "about": "Σχετικά",
    "contact": "Επικοινωνία",
    "blog": "Ιστολόγιο",
    "comingSoon": "Σύντομα",
    "privacy": "Πολιτική Απορρήτου",
    "terms": "Όροι Χρήσης",
    "rights": "Με επιφύλαξη παντός δικαιώματος."
  }
}
```

**Step 3: Update global.d.ts to match new translation keys**

The type definition in `global.d.ts` imports from `messages/en.json` so it should auto-update, but verify the file references are correct.

**Step 4: Run type check**

Run: `pnpm tsc --noEmit`
Expected: PASS

**Step 5: Commit**

```bash
git add messages/en.json messages/el.json
git commit -m "content: add full website translations for EN and EL"
```

---

## Task 3: Build the Navbar Component

**Files:**
- Create: `components/navbar.tsx` (client component — needs scroll detection + mobile menu)

**Step 1: Create the Navbar**

```tsx
"use client";

import { useState, useEffect, useCallback } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/examples/language-switcher";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/general/utils";

const NAV_LINKS = ["services", "howWeWork", "techStack", "contact"] as const;

const SCROLL_IDS: Record<string, string> = {
  services: "services",
  howWeWork: "how-we-work",
  techStack: "tech-stack",
  contact: "contact",
};

export const Navbar = () => {
  const t = useTranslations("Nav");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-xl font-bold tracking-tight cursor-pointer"
        >
          hex<span className="text-blue-500">AI</span>gon
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((key) => (
            <button
              key={key}
              onClick={() => scrollTo(SCROLL_IDS[key])}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              {t(key)}
            </button>
          ))}
        </div>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-3">
          <LanguageSwitcher />
          <Button size="sm" onClick={() => scrollTo("contact")}>
            {t("getStarted")}
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-white/10 p-4 space-y-4">
          {NAV_LINKS.map((key) => (
            <button
              key={key}
              onClick={() => scrollTo(SCROLL_IDS[key])}
              className="block w-full text-left text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              {t(key)}
            </button>
          ))}
          <div className="flex items-center gap-3 pt-2">
            <LanguageSwitcher />
            <Button size="sm" className="w-full" onClick={() => scrollTo("contact")}>
              {t("getStarted")}
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};
```

**Step 2: Run type check and lint**

Run: `pnpm tsc --noEmit && pnpm lint`
Expected: PASS

**Step 3: Commit**

```bash
git add components/navbar.tsx
git commit -m "feat: add sticky navbar with scroll detection and mobile drawer"
```

---

## Task 4: Build the Hero Section

**Files:**
- Create: `components/hero.tsx` (client component — typewriter animation)

**Step 1: Create the Hero component**

The hero has:
- Full viewport height
- Particle-like grid background (CSS-only, no canvas)
- Typewriter rotating text
- Two CTA buttons
- Gradient glow

```tsx
"use client";

import { useState, useEffect, useCallback } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";

const ROTATION_KEYS = ["rotating1", "rotating2", "rotating3"] as const;
const TYPING_SPEED = 80;
const DELETE_SPEED = 40;
const PAUSE_DURATION = 2000;

export const Hero = () => {
  const t = useTranslations("Hero");
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const currentPhrase = t(ROTATION_KEYS[currentIndex]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayText === currentPhrase) {
      // Pause before deleting
      timeout = setTimeout(() => setIsDeleting(true), PAUSE_DURATION);
    } else if (isDeleting && displayText === "") {
      // Move to next phrase
      setIsDeleting(false);
      setCurrentIndex((prev) => (prev + 1) % ROTATION_KEYS.length);
    } else if (isDeleting) {
      timeout = setTimeout(
        () => setDisplayText((prev) => prev.slice(0, -1)),
        DELETE_SPEED
      );
    } else {
      timeout = setTimeout(
        () => setDisplayText(currentPhrase.slice(0, displayText.length + 1)),
        TYPING_SPEED
      );
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentPhrase]);

  const scrollTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
          {t("line1")}{" "}
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
            {displayText}
          </span>
          <span className="animate-blink text-blue-400">|</span>
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          {t("subtitle")}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" onClick={() => scrollTo("contact")} className="gap-2">
            {t("cta")}
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => scrollTo("services")}
            className="gap-2"
          >
            {t("ctaSecondary")}
            <ChevronDown className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};
```

**Step 2: Run type check and lint**

Run: `pnpm tsc --noEmit && pnpm lint`
Expected: PASS

**Step 3: Commit**

```bash
git add components/hero.tsx
git commit -m "feat: add hero section with typewriter animation and gradient text"
```

---

## Task 5: Build the Services Section

**Files:**
- Create: `components/services-section.tsx` (server component — no interactivity needed)

**Step 1: Create the Services section**

```tsx
import { getTranslations } from "next-intl/server";
import { Globe, Bot, Code } from "lucide-react";
import { TypographyH2 } from "@/components/ui/typography";

const SERVICES = [
  { key: "webDev", icon: Globe, color: "blue" },
  { key: "aiAutomation", icon: Bot, color: "purple" },
  { key: "customSoftware", icon: Code, color: "green" },
] as const;

const COLOR_MAP: Record<string, { bg: string; border: string; text: string; glow: string }> = {
  blue: {
    bg: "bg-blue-500/10",
    border: "group-hover:border-blue-500/30",
    text: "text-blue-400",
    glow: "group-hover:shadow-blue-500/10",
  },
  purple: {
    bg: "bg-purple-500/10",
    border: "group-hover:border-purple-500/30",
    text: "text-purple-400",
    glow: "group-hover:shadow-purple-500/10",
  },
  green: {
    bg: "bg-green-500/10",
    border: "group-hover:border-green-500/30",
    text: "text-green-400",
    glow: "group-hover:shadow-green-500/10",
  },
};

export const ServicesSection = async () => {
  const t = await getTranslations("Services");

  return (
    <section id="services" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <TypographyH2 className="text-center mb-16">{t("title")}</TypographyH2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.map(({ key, icon: Icon, color }) => {
            const colors = COLOR_MAP[color];
            return (
              <div
                key={key}
                className={`group glass glass-hover p-8 ${colors.glow} hover:shadow-2xl`}
              >
                <div className={`inline-flex p-3 rounded-xl ${colors.bg} mb-6`}>
                  <Icon className={`h-6 w-6 ${colors.text}`} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{t(`${key}.title`)}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t(`${key}.description`)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
```

**Step 2: Run type check and lint**

Run: `pnpm tsc --noEmit && pnpm lint`
Expected: PASS

**Step 3: Commit**

```bash
git add components/services-section.tsx
git commit -m "feat: add services section with glass cards and color accents"
```

---

## Task 6: Build the How We Work Section

**Files:**
- Create: `components/how-we-work-section.tsx` (server component)

**Step 1: Create the section**

```tsx
import { getTranslations } from "next-intl/server";
import { Search, Hammer, Rocket } from "lucide-react";
import { TypographyH2 } from "@/components/ui/typography";

const STEPS = [
  { key: "step1", icon: Search, number: "01" },
  { key: "step2", icon: Hammer, number: "02" },
  { key: "step3", icon: Rocket, number: "03" },
] as const;

export const HowWeWorkSection = async () => {
  const t = await getTranslations("HowWeWork");

  return (
    <section id="how-we-work" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <TypographyH2 className="text-center mb-16">{t("title")}</TypographyH2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-16 left-[16.67%] right-[16.67%] h-px bg-gradient-to-r from-blue-500/50 via-purple-500/50 to-green-500/50" />

          {STEPS.map(({ key, icon: Icon, number }) => (
            <div key={key} className="relative text-center">
              {/* Number badge */}
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-white font-bold text-sm mb-6 relative z-10">
                {number}
              </div>

              <div className="glass p-6">
                <Icon className="h-8 w-8 text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">{t(`${key}.title`)}</h3>
                <p className="text-sm text-muted-foreground">
                  {t(`${key}.description`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
```

**Step 2: Run type check and lint**

Run: `pnpm tsc --noEmit && pnpm lint`
Expected: PASS

**Step 3: Commit**

```bash
git add components/how-we-work-section.tsx
git commit -m "feat: add how we work section with 3-step process"
```

---

## Task 7: Build the Stats Counter Section

**Files:**
- Create: `components/stats-section.tsx` (client component — needs Intersection Observer for animated counters)

**Step 1: Create the stats section**

```tsx
"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useTranslations } from "next-intl";

const STATS = [
  { key: "projects", value: 10, suffix: "+" },
  { key: "clients", value: 15, suffix: "+" },
  { key: "automations", value: 50, suffix: "+" },
  { key: "hoursSaved", value: 1000, suffix: "+" },
] as const;

const ANIMATION_DURATION = 2000;

const AnimatedCounter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const startTime = Date.now();
          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / ANIMATION_DURATION, 1);
            // Ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [hasAnimated, target]);

  return (
    <div ref={ref} className="text-4xl sm:text-5xl font-bold">
      {count}{suffix}
    </div>
  );
};

export const StatsSection = () => {
  const t = useTranslations("Stats");

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="glass p-8 sm:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {STATS.map(({ key, value, suffix }) => (
              <div key={key}>
                <AnimatedCounter target={value} suffix={suffix} />
                <p className="text-sm text-muted-foreground mt-2">{t(key)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
```

**Step 2: Run type check and lint**

Run: `pnpm tsc --noEmit && pnpm lint`
Expected: PASS

**Step 3: Commit**

```bash
git add components/stats-section.tsx
git commit -m "feat: add stats section with animated counters"
```

---

## Task 8: Build the Tech Stack Section

**Files:**
- Create: `components/tech-stack-section.tsx` (server component)

**Step 1: Create the tech stack logo wall**

Use text-based logos (no image files needed for MVP). Each tech name in a glass pill that colorizes on hover.

```tsx
import { getTranslations } from "next-intl/server";
import { TypographyH2 } from "@/components/ui/typography";

const TECH_STACK = [
  { name: "React", color: "hover:text-cyan-400 hover:border-cyan-400/30" },
  { name: "Next.js", color: "hover:text-white hover:border-white/30" },
  { name: "TypeScript", color: "hover:text-blue-400 hover:border-blue-400/30" },
  { name: "Python", color: "hover:text-yellow-400 hover:border-yellow-400/30" },
  { name: "OpenAI", color: "hover:text-green-400 hover:border-green-400/30" },
  { name: "Anthropic", color: "hover:text-orange-400 hover:border-orange-400/30" },
  { name: "Stripe", color: "hover:text-purple-400 hover:border-purple-400/30" },
  { name: "AWS", color: "hover:text-amber-400 hover:border-amber-400/30" },
  { name: "Supabase", color: "hover:text-emerald-400 hover:border-emerald-400/30" },
  { name: "Tailwind CSS", color: "hover:text-sky-400 hover:border-sky-400/30" },
] as const;

export const TechStackSection = async () => {
  const t = await getTranslations("TechStack");

  return (
    <section id="tech-stack" className="py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <TypographyH2 className="text-center mb-16">{t("title")}</TypographyH2>

        <div className="flex flex-wrap justify-center gap-4">
          {TECH_STACK.map(({ name, color }) => (
            <div
              key={name}
              className={`px-6 py-3 rounded-full border border-white/10 text-muted-foreground text-sm font-medium transition-all duration-300 ${color}`}
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
```

**Step 2: Run type check and lint**

Run: `pnpm tsc --noEmit && pnpm lint`
Expected: PASS

**Step 3: Commit**

```bash
git add components/tech-stack-section.tsx
git commit -m "feat: add tech stack section with hover-colorizing logos"
```

---

## Task 9: Build the Contact Form Section

**Files:**
- Create: `components/contact-section.tsx` (client component — form state)
- Create: `server_actions/contact.ts` (server action for form submission)

**Step 1: Create the server action**

For MVP, the server action just validates and logs. Email integration comes later.

```tsx
"use server";

export const submitContactForm = async (formData: FormData) => {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { success: false };
  }

  // TODO: Send email via Resend/SendGrid
  console.log("Contact form submission:", { name, email, message });

  return { success: true };
};
```

**Step 2: Create the Contact section component**

```tsx
"use client";

import { useState, useCallback } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { TypographyH2 } from "@/components/ui/typography";
import { Send } from "lucide-react";
import { submitContactForm } from "@/server_actions/contact";
import { toast } from "sonner";

export const ContactSection = () => {
  const t = useTranslations("Contact");
  const [pending, setPending] = useState(false);

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setPending(true);

      const formData = new FormData(e.currentTarget);
      const result = await submitContactForm(formData);

      if (result.success) {
        toast.success(t("success"));
        e.currentTarget.reset();
      } else {
        toast.error(t("error"));
      }

      setPending(false);
    },
    [t]
  );

  return (
    <section id="contact" className="py-24 px-4">
      <div className="container mx-auto max-w-2xl">
        <TypographyH2 className="text-center mb-4">{t("title")}</TypographyH2>
        <p className="text-center text-muted-foreground mb-12">{t("subtitle")}</p>

        <div className="glass p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                name="name"
                placeholder={t("name")}
                required
                disabled={pending}
              />
              <Input
                name="email"
                type="email"
                placeholder={t("email")}
                required
                disabled={pending}
              />
            </div>
            <Textarea
              name="message"
              placeholder={t("message")}
              required
              disabled={pending}
              className="min-h-32"
            />
            <Button type="submit" className="w-full gap-2" disabled={pending}>
              <Send className="h-4 w-4" />
              {t("submit")}
            </Button>
          </form>

          <p className="text-center text-sm text-muted-foreground mt-6">
            {t("emailFallback")}{" "}
            <a
              href="mailto:hello@hexaigon.gr"
              className="text-blue-400 hover:underline"
            >
              hello@hexaigon.gr
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
```

**Step 3: Run type check and lint**

Run: `pnpm tsc --noEmit && pnpm lint`
Expected: PASS

**Step 4: Commit**

```bash
git add components/contact-section.tsx server_actions/contact.ts
git commit -m "feat: add contact form section with server action"
```

---

## Task 10: Build the Footer

**Files:**
- Create: `components/footer.tsx` (server component)

**Step 1: Create the Footer**

```tsx
import { getTranslations } from "next-intl/server";
import { TypographySmallReg } from "@/components/ui/typography";
import { Linkedin, Github, Instagram } from "lucide-react";

const SOCIAL_LINKS = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Instagram, href: "#", label: "Instagram" },
] as const;

export const Footer = async () => {
  const t = await getTranslations("Footer");

  return (
    <footer className="border-t border-white/10 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <p className="text-xl font-bold mb-2">
              hex<span className="text-blue-500">AI</span>gon
            </p>
            <TypographySmallReg className="text-muted-foreground">
              {t("tagline")}
            </TypographySmallReg>

            {/* Socials */}
            <div className="flex gap-3 mt-4">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg border border-white/10 text-muted-foreground hover:text-foreground hover:border-white/20 transition-all"
                  aria-label={label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="font-semibold mb-4">{t("services")}</p>
            <div className="space-y-2">
              <a href="#services" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                {t("webDev")}
              </a>
              <a href="#services" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                {t("aiAutomation")}
              </a>
              <a href="#services" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                {t("customSoftware")}
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <p className="font-semibold mb-4">{t("company")}</p>
            <div className="space-y-2">
              <a href="#contact" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                {t("contact")}
              </a>
              <p className="text-sm text-muted-foreground">
                {t("blog")} <span className="text-xs text-muted-foreground/50">({t("comingSoon")})</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <TypographySmallReg className="text-muted-foreground">
            &copy; 2026 hexAIgon. {t("rights")}
          </TypographySmallReg>
          <div className="flex gap-4">
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              {t("privacy")}
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              {t("terms")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
```

**Step 2: Run type check and lint**

Run: `pnpm tsc --noEmit && pnpm lint`
Expected: PASS

**Step 3: Commit**

```bash
git add components/footer.tsx
git commit -m "feat: add footer with links, socials, and legal"
```

---

## Task 11: Wire Everything Together in page.tsx

**Files:**
- Modify: `app/[locale]/page.tsx` (replace entire content)
- Modify: `app/[locale]/layout.tsx` (update metadata)

**Step 1: Replace page.tsx with the landing page**

Replace the entire file with all sections composed together:

```tsx
import { setRequestLocale } from "next-intl/server";
import { BasePageProps } from "@/types/page-props";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { ServicesSection } from "@/components/services-section";
import { HowWeWorkSection } from "@/components/how-we-work-section";
import { StatsSection } from "@/components/stats-section";
import { TechStackSection } from "@/components/tech-stack-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

const Home = async ({ params }: BasePageProps) => {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ServicesSection />
        <HowWeWorkSection />
        <StatsSection />
        <TechStackSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default Home;
```

**Step 2: Update layout.tsx metadata**

Change the metadata in `app/[locale]/layout.tsx`:

```tsx
export const metadata: Metadata = {
  title: "hexAIgon - AI-Powered Web Development & Automation",
  description: "Custom websites, AI automation, and software solutions for businesses across Greece.",
};
```

**Step 3: Run dev server and verify**

Run: `pnpm dev`
Open: `http://localhost:3000`
Verify: All 8 sections render, typewriter works, counters animate on scroll, smooth scroll nav works, mobile menu opens, language switch works.

**Step 4: Run type check and lint**

Run: `pnpm tsc --noEmit && pnpm lint`
Expected: PASS

**Step 5: Commit**

```bash
git add app/[locale]/page.tsx app/[locale]/layout.tsx
git commit -m "feat: wire up all landing page sections, replace starter template"
```

---

## Task 12: Remove Unused Starter Template Files

**Files:**
- Delete: `components/examples/add-todo-form.tsx`
- Delete: `components/examples/todo-item.tsx`
- Delete: `components/examples/todo-list.tsx`
- Delete: `components/examples/login-button.tsx`
- Keep: `components/examples/ThemeSwitcher.tsx` (may reuse)
- Keep: `components/examples/language-switcher.tsx` (used by Navbar)

**Step 1: Remove unused example components**

```bash
rm components/examples/add-todo-form.tsx
rm components/examples/todo-item.tsx
rm components/examples/todo-list.tsx
rm components/examples/login-button.tsx
```

**Step 2: Verify no import errors**

Run: `pnpm tsc --noEmit && pnpm lint`
Expected: PASS (page.tsx no longer imports these)

**Step 3: Commit**

```bash
git add -A
git commit -m "chore: remove unused starter template components"
```

---

## Task 13: Final Visual Polish & Verification

**Step 1: Run the full build**

Run: `pnpm build`
Expected: PASS — static generation for all locale variants

**Step 2: Visual QA checklist**

Run `pnpm dev` and verify:
- [ ] Nav is transparent at top, blurs on scroll
- [ ] Typewriter cycles through all 3 phrases
- [ ] Service cards have colored glow on hover
- [ ] How We Work has connecting gradient line on desktop
- [ ] Stats counters animate when scrolling into view
- [ ] Tech stack pills colorize on hover
- [ ] Contact form submits and shows success toast
- [ ] Footer links scroll to correct sections
- [ ] Language switching works (EN ↔ GR)
- [ ] Mobile menu works at small viewport
- [ ] No layout shifts or jank

**Step 3: Fix any issues found during QA**

Address visual bugs, spacing, or responsive issues.

**Step 4: Final commit**

```bash
git add -A
git commit -m "polish: visual QA fixes and final adjustments"
```
