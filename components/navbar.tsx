"use client";

import { CalendarDays, Hexagon, Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useCallback, useEffect, useState } from "react";

import { LanguageSwitcher } from "@/components/examples/language-switcher";
import { Link } from "@/lib/i18n/navigation";
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
        "fixed top-0 z-50 w-full transition-all duration-500",
        scrolled
          ? "bg-background/70 backdrop-blur-2xl border-b border-white/5 shadow-lg shadow-black/10"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 cursor-pointer group"
        >
          <Hexagon className="h-5 w-5 text-blue-500 group-hover:rotate-90 transition-transform duration-500" />
          <span className="text-lg font-bold tracking-tight">
            hex<span className="text-blue-500">AI</span>gon
          </span>
        </Link>

        {/* Center nav links */}
        <div className="hidden lg:flex items-center gap-1 bg-white/5 rounded-full px-2 py-1.5 border border-white/5">
          {NAV_LINKS.map((key) => (
            <button
              key={key}
              onClick={() => scrollTo(SCROLL_IDS[key])}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer px-4 py-1.5 rounded-full hover:bg-white/5"
            >
              {t(key)}
            </button>
          ))}
        </div>

        {/* Right side */}
        <div className="hidden lg:flex items-center gap-2">
          <LanguageSwitcher />
          <button
            onClick={() => scrollTo("contact")}
            className="flex items-center gap-2 px-5 py-2 text-sm font-medium rounded-full border border-blue-500/40 text-blue-400 hover:bg-blue-500/10 hover:border-blue-400/70 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 cursor-pointer"
          >
            <CalendarDays className="h-4 w-4" />
            {t("getStarted")}
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2.5 rounded-full hover:bg-white/5 transition-colors cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-300 ease-out",
          mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="bg-background/95 backdrop-blur-2xl border-t border-white/5 p-6 space-y-1">
          {NAV_LINKS.map((key) => (
            <button
              key={key}
              onClick={() => scrollTo(SCROLL_IDS[key])}
              className="block w-full text-left text-sm text-muted-foreground hover:text-foreground hover:bg-white/5 rounded-lg px-4 py-3 transition-all cursor-pointer"
            >
              {t(key)}
            </button>
          ))}
          <div className="flex items-center gap-3 pt-4 mt-2 border-t border-white/5">
            <LanguageSwitcher />
            <button
              onClick={() => scrollTo("contact")}
              className="flex-1 flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-medium rounded-full border border-blue-500/40 text-blue-400 hover:bg-blue-500/10 transition-all cursor-pointer"
            >
              <CalendarDays className="h-4 w-4" />
              {t("getStarted")}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
