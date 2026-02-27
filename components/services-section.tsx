import { Bot, Code, Globe } from "lucide-react";
import { getTranslations } from "next-intl/server";

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
