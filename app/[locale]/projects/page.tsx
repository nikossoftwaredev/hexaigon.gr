import { getTranslations, setRequestLocale } from "next-intl/server";
import { TypographyH1 } from "@/components/ui/typography";
import { ProjectCard } from "@/components/project-card";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PROJECTS } from "@/lib/data/projects";
import { BasePageProps } from "@/types/page-props";

const ProjectsPage = async ({ params }: BasePageProps) => {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("Portfolio");

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <TypographyH1 className="text-center mb-16">
            {t("allProjectsTitle")}
          </TypographyH1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((project) => (
              <ProjectCard
                key={project.slug}
                project={project}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ProjectsPage;
