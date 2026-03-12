import { Hammer, Rocket, Search } from "lucide-react";
import { getTranslations } from "next-intl/server";

import { TypographyH2 } from "@/components/ui/typography";
import { cn } from "@/lib/general/utils";

const STEPS = [
  { key: "step1", icon: Search, number: "01", color: "text-blue-400" },
  { key: "step2", icon: Hammer, number: "02", color: "text-purple-400" },
  { key: "step3", icon: Rocket, number: "03", color: "text-green-400" },
] as const;

export const HowWeWorkSection = async () => {
  const t = await getTranslations("HowWeWork");

  return (
    <section id="how-we-work" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <TypographyH2 className="text-center mb-16">{t("title")}</TypographyH2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-6 left-[16.67%] right-[16.67%] h-px bg-linear-to-r from-blue-500/50 via-purple-500/50 to-green-500/50" />

          {STEPS.map(({ key, icon: Icon, number, color }) => (
            <div key={key} className="relative text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-white font-bold text-sm mb-6 relative z-10">
                {number}
              </div>

              <div className="glass p-6">
                <Icon className={cn("h-8 w-8 mx-auto mb-4", color)} />
                <h3 className="text-lg font-semibold mb-2">
                  {t(`${key}.title`)}
                </h3>
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
