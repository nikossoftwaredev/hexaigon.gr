import {
  BadgeEuro,
  BarChart3,
  Bot,
  Compass,
  Link,
  LifeBuoy,
  Palette,
  PenTool,
  Puzzle,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  Smartphone,
  Target,
  TrendingUp,
  Zap,
} from "lucide-react";
import { getTranslations } from "next-intl/server";

import { TypographyH2 } from "@/components/ui/typography";

const FEATURES = [
  { key: "seo", icon: Search, color: "blue" },
  { key: "aeo", icon: Bot, color: "purple" },
  { key: "speed", icon: Zap, color: "amber" },
  { key: "mobile", icon: Smartphone, color: "cyan" },
  { key: "scalable", icon: Puzzle, color: "green" },
  { key: "cms", icon: SlidersHorizontal, color: "emerald" },
  { key: "ads", icon: Target, color: "red" },
  { key: "design", icon: Palette, color: "pink" },
  { key: "ux", icon: Compass, color: "orange" },
  { key: "growth", icon: TrendingUp, color: "lime" },
  { key: "security", icon: ShieldCheck, color: "blue" },
  { key: "support", icon: LifeBuoy, color: "red" },
  { key: "integrations", icon: Link, color: "purple" },
  { key: "analytics", icon: BarChart3, color: "cyan" },
  { key: "copywriting", icon: PenTool, color: "amber" },
  { key: "pricing", icon: BadgeEuro, color: "emerald" },
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
  red: {
    bg: "bg-red-500/10",
    text: "text-red-400",
    glow: "group-hover:shadow-red-500/10",
  },
  pink: {
    bg: "bg-pink-500/10",
    text: "text-pink-400",
    glow: "group-hover:shadow-pink-500/10",
  },
  orange: {
    bg: "bg-orange-500/10",
    text: "text-orange-400",
    glow: "group-hover:shadow-orange-500/10",
  },
  lime: {
    bg: "bg-lime-500/10",
    text: "text-lime-400",
    glow: "group-hover:shadow-lime-500/10",
  },
};

export const WhyUsSection = async () => {
  const t = await getTranslations("WhyUs");

  return (
    <section id="why-us" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <TypographyH2 className="text-center mb-16">{t("title")}</TypographyH2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {FEATURES.map(({ key, icon: Icon, color }) => {
            const colors = COLOR_MAP[color];
            return (
              <div
                key={key}
                className={`group glass glass-hover p-6 ${colors.glow} hover:shadow-2xl`}
              >
                <div className={`inline-flex p-2.5 rounded-xl ${colors.bg} mb-4`}>
                  <Icon className={`h-5 w-5 ${colors.text}`} />
                </div>
                <h3 className="text-sm font-semibold mb-2">
                  {t(`${key}.title`)}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
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
