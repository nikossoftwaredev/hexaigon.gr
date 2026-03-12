"use client";

import { SessionProvider } from "next-auth/react";
import { AbstractIntlMessages, NextIntlClientProvider } from "next-intl";
import { ThemeProvider as NextThemesProvider } from "next-themes";

import { Toaster } from "@/components/ui/sonner";

interface ProvidersProps {
  children: React.ReactNode;
  messages: AbstractIntlMessages;
  locale: string;
}

export const Providers = ({ children, messages, locale }: ProvidersProps) => {
  return (
    <SessionProvider>
      <NextThemesProvider
        attribute="class"
        forcedTheme="dark"
        disableTransitionOnChange
      >
        <NextIntlClientProvider messages={messages} locale={locale}>
          {children}
          <Toaster />
        </NextIntlClientProvider>
      </NextThemesProvider>
    </SessionProvider>
  );
};
