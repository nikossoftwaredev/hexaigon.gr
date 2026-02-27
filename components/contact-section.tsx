"use client";

import { Mail, MessageSquare, Send, Sparkles, User } from "lucide-react";
import { useCallback, useState } from "react";
import { useTranslations } from "next-intl";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { TypographyH2 } from "@/components/ui/typography";
import { submitContactForm } from "@/server_actions/contact";

export const ContactSection = () => {
  const t = useTranslations("Contact");
  const [pending, setPending] = useState(false);

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setPending(true);

      const formData = new FormData(e.currentTarget);
      const result = await submitContactForm(formData);

      if (result.success) {
        toast.success(t("success"));
        e.currentTarget.reset();
      } else {
        toast.error(t("error"));
      }

      setPending(false);
    },
    [t]
  );

  return (
    <section id="contact" className="py-24 px-4">
      <div className="container mx-auto max-w-2xl">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Sparkles className="h-6 w-6 sm:h-5 sm:w-5 shrink-0 text-blue-500" />
          <TypographyH2>{t("title")}</TypographyH2>
        </div>
        <p className="text-center text-muted-foreground mb-12">
          {t("subtitle")}
        </p>

        <div className="glass p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-blue-500" />
                <Input
                  name="name"
                  placeholder={t("name")}
                  required
                  disabled={pending}
                  className="h-12 pl-12 text-base"
                />
              </div>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-blue-500" />
                <Input
                  name="email"
                  type="email"
                  placeholder={t("email")}
                  required
                  disabled={pending}
                  className="h-12 pl-12 text-base"
                />
              </div>
            </div>
            <div className="relative">
              <MessageSquare className="absolute left-4 top-4 h-5 w-5 text-blue-500" />
              <Textarea
                name="message"
                placeholder={t("message")}
                required
                disabled={pending}
                className="min-h-32 pl-12 pt-4 text-base"
              />
            </div>
            <Button type="submit" size="lg" className="w-full gap-2" disabled={pending}>
              <Send className="h-4 w-4" />
              {t("submit")}
            </Button>
          </form>

          <p className="text-center text-sm text-muted-foreground mt-6">
            {t("emailFallback")}{" "}
            <a
              href="mailto:hello@hexaigon.gr"
              className="inline-flex items-center gap-1 text-blue-400 hover:underline"
            >
              <Mail className="h-3 w-3" />
              hello@hexaigon.gr
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
