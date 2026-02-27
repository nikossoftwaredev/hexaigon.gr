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
