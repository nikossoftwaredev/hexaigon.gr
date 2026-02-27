import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { HowWeWorkSection } from "@/components/how-we-work-section";
import { Navbar } from "@/components/navbar";
import { PortfolioSection } from "@/components/portfolio-section";
import { ServicesSection } from "@/components/services-section";
import { StatsSection } from "@/components/stats-section";
import { TechStackSection } from "@/components/tech-stack-section";
import { BasePageProps } from "@/types/page-props";

export const generateMetadata = async ({
  params,
}: BasePageProps): Promise<Metadata> => {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: t("title"),
      description: t("description"),
      images: [
        {
          url: "/seo-image.png",
          width: 3840,
          height: 2160,
          alt: t("title"),
          type: "image/png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: ["/seo-image.png"],
    },
  };
};

const Home = async ({ params }: BasePageProps) => {
  const { locale } = await params;
  setRequestLocale(locale);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "hexAIgon",
    url: "https://hexaigon.gr",
    logo: "https://hexaigon.gr/seo-image.png",
    description:
      "AI-powered web development, automation, and custom software solutions for businesses across Greece.",
    foundingDate: "2024",
    areaServed: {
      "@type": "Country",
      name: "Greece",
    },
    serviceType: [
      "Web Development",
      "AI Automation",
      "Custom Software Development",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: "hello@hexaigon.gr",
      contactType: "customer service",
      availableLanguage: ["English", "Greek"],
    },
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "OpenAI",
      "Anthropic",
      "Tailwind CSS",
      "Supabase",
      "Stripe",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <ServicesSection />
        <PortfolioSection />
        <HowWeWorkSection />
        <StatsSection />
        <TechStackSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default Home;
