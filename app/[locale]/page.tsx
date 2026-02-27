import { setRequestLocale } from "next-intl/server";

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

const Home = async ({ params }: BasePageProps) => {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
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
