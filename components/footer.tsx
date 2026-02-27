import {
  Bot,
  Code,
  Github,
  Globe,
  Hexagon,
  Instagram,
  Linkedin,
  Mail,
  Newspaper,
} from "lucide-react";
import { getTranslations } from "next-intl/server";

import { SocialIcon } from "@/components/social-icon";
import { TypographySmallReg } from "@/components/ui/typography";

export const Footer = async () => {
  const t = await getTranslations("Footer");

  return (
    <footer className="border-t border-white/10 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-2">
              <Hexagon className="h-5 w-5 text-blue-500" />
              <p className="text-xl font-bold">
                hex<span className="text-blue-500">AI</span>gon
              </p>
            </div>
            <TypographySmallReg className="text-muted-foreground">
              {t("tagline")}
            </TypographySmallReg>

            <div className="flex gap-3 mt-4">
              <SocialIcon
                url="#"
                icon={<Linkedin className="h-4 w-4" />}
                color="linkedin"
                isMobile
              />
              <SocialIcon
                url="#"
                icon={<Github className="h-4 w-4" />}
                color="tiktok"
                isMobile
              />
              <SocialIcon
                url="#"
                icon={<Instagram className="h-4 w-4" />}
                color="instagram"
                isMobile
              />
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="font-semibold mb-4">{t("services")}</p>
            <div className="space-y-3">
              <a
                href="#services"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Globe className="h-3.5 w-3.5" />
                {t("webDev")}
              </a>
              <a
                href="#services"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Bot className="h-3.5 w-3.5" />
                {t("aiAutomation")}
              </a>
              <a
                href="#services"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Code className="h-3.5 w-3.5" />
                {t("customSoftware")}
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <p className="font-semibold mb-4">{t("company")}</p>
            <div className="space-y-3">
              <a
                href="#contact"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-3.5 w-3.5" />
                {t("contact")}
              </a>
              <p className="flex items-center gap-2 text-sm text-muted-foreground">
                <Newspaper className="h-3.5 w-3.5" />
                {t("blog")}{" "}
                <span className="text-xs text-muted-foreground/50">
                  ({t("comingSoon")})
                </span>
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
            <a
              href="#"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              {t("privacy")}
            </a>
            <a
              href="#"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              {t("terms")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
