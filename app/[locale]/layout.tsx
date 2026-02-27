import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { setRequestLocale, getMessages } from "next-intl/server";
import { Roboto } from "next/font/google";
import { routing } from "@/lib/i18n/routing";
import { Providers } from "@/components/providers";
import { BaseLayoutProps } from "@/types/page-props";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const SITE_URL = "https://hexaigon.gr";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "hexAIgon — AI-Powered Web Development & Automation | Greece",
    template: "%s | hexAIgon",
  },
  description:
    "We build custom websites, AI automation workflows, and software solutions that help businesses across Greece grow faster. Next.js, React, OpenAI, Anthropic.",
  keywords: [
    "web development Greece",
    "AI automation",
    "custom software",
    "Next.js development",
    "React developer Greece",
    "κατασκευή ιστοσελίδων",
    "αυτοματισμοί AI",
    "web developer Ελλάδα",
    "hexAIgon",
  ],
  authors: [{ name: "hexAIgon", url: SITE_URL }],
  creator: "hexAIgon",
  publisher: "hexAIgon",
  formatDetection: { telephone: false },
  openGraph: {
    type: "website",
    locale: "en_GR",
    alternateLocale: "el_GR",
    url: SITE_URL,
    siteName: "hexAIgon",
    title: "hexAIgon — AI-Powered Web Development & Automation",
    description:
      "Custom websites, AI automation, and software solutions for businesses across Greece.",
    images: [
      {
        url: "/seo-image.png",
        width: 1200,
        height: 630,
        alt: "hexAIgon — AI-Powered Web Development & Automation",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "hexAIgon — AI-Powered Web Development & Automation",
    description:
      "Custom websites, AI automation, and software solutions for businesses across Greece.",
    images: ["/seo-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      en: `${SITE_URL}/en`,
      el: `${SITE_URL}/el`,
    },
  },
};

export const generateStaticParams = () => {
  return routing.locales.map((locale) => ({ locale }));
};

const LocaleLayout = async ({ children, params }: BaseLayoutProps) => {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) notFound();

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${roboto.variable} font-sans antialiased`}>
        <Providers messages={messages} locale={locale}>
          {children}
        </Providers>
      </body>
    </html>
  );
};

export default LocaleLayout;
