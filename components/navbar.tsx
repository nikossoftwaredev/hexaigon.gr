"use client";

import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useCallback, useEffect, useState } from "react";

import { LanguageSwitcher } from "@/components/examples/language-switcher";
import { Button } from "@/components/ui/button";
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

  const scrollTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
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
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-xl font-bold tracking-tight cursor-pointer"
        >
          hex<span className="text-blue-500">AI</span>gon
        </button>

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

        <div className="hidden md:flex items-center gap-3">
          <LanguageSwitcher />
          <Button size="sm" onClick={() => scrollTo("contact")}>
            {t("getStarted")}
          </Button>
        </div>

        <button
          className="md:hidden p-2 cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

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
            <Button
              size="sm"
              className="w-full"
              onClick={() => scrollTo("contact")}
            >
              {t("getStarted")}
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};
