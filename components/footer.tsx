import { Github, Instagram, Linkedin } from "lucide-react";
import { getTranslations } from "next-intl/server";

import { TypographySmallReg } from "@/components/ui/typography";

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
