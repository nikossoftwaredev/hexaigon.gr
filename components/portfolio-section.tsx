import { getTranslations } from "next-intl/server";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TypographyH2 } from "@/components/ui/typography";
import { ProjectCard } from "@/components/project-card";
import { PROJECTS } from "@/lib/data/projects";
import { Link } from "@/lib/i18n/navigation";

const FEATURED_COUNT = 6;

export const PortfolioSection = async () => {
  const t = await getTranslations("Portfolio");
  const featured = PROJECTS.slice(0, FEATURED_COUNT);

  return (
    <section id="portfolio" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <TypographyH2 className="text-center mb-16">{t("title")}</TypographyH2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
            />
          ))}
        </div>

        {PROJECTS.length > FEATURED_COUNT && (
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild className="gap-2">
              <Link href="/projects">
                {t("viewAll")}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};
