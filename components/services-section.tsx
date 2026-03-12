import { AppWindow, Bot, Code, Globe, Megaphone, Search } from "lucide-react";
import { getTranslations } from "next-intl/server";

import { TypographyH2 } from "@/components/ui/typography";

const SERVICES = [
  { key: "websites", icon: Globe, color: "blue" },
  { key: "webApps", icon: AppWindow, color: "purple" },
  { key: "automations", icon: Bot, color: "green" },
  { key: "ads", icon: Megaphone, color: "amber" },
  { key: "seoAeo", icon: Search, color: "cyan" },
  { key: "customSoftware", icon: Code, color: "emerald" },
] as const;

const COLOR_MAP: Record<string, { bg: string; text: string; glow: string }> = {
  blue: {
    bg: "bg-blue-500/10",
    text: "text-blue-400",
    glow: "group-hover:shadow-blue-500/10",
  },
  purple: {
    bg: "bg-purple-500/10",
    text: "text-purple-400",
    glow: "group-hover:shadow-purple-500/10",
  },
  green: {
    bg: "bg-green-500/10",
    text: "text-green-400",
    glow: "group-hover:shadow-green-500/10",
  },
  amber: {
    bg: "bg-amber-500/10",
    text: "text-amber-400",
    glow: "group-hover:shadow-amber-500/10",
  },
  cyan: {
    bg: "bg-cyan-500/10",
    text: "text-cyan-400",
    glow: "group-hover:shadow-cyan-500/10",
  },
  emerald: {
    bg: "bg-emerald-500/10",
    text: "text-emerald-400",
    glow: "group-hover:shadow-emerald-500/10",
  },
};

export const ServicesSection = async () => {
  const t = await getTranslations("Services");

  return (
    <section id="services" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <TypographyH2 className="text-center mb-16">{t("title")}</TypographyH2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
