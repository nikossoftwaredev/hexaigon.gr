"use client";

import { useCallback, useState } from "react";
import { useTranslations } from "next-intl";
import { Send } from "lucide-react";
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
        <TypographyH2 className="text-center mb-4">{t("title")}</TypographyH2>
        <p className="text-center text-muted-foreground mb-12">
          {t("subtitle")}
        </p>

        <div className="glass p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                name="name"
                placeholder={t("name")}
                required
                disabled={pending}
              />
              <Input
                name="email"
                type="email"
                placeholder={t("email")}
                required
                disabled={pending}
              />
            </div>
            <Textarea
              name="message"
              placeholder={t("message")}
              required
              disabled={pending}
              className="min-h-32"
            />
            <Button type="submit" className="w-full gap-2" disabled={pending}>
              <Send className="h-4 w-4" />
              {t("submit")}
            </Button>
          </form>

          <p className="text-center text-sm text-muted-foreground mt-6">
            {t("emailFallback")}{" "}
            <a
              href="mailto:hello@hexaigon.gr"
              className="text-blue-400 hover:underline"
            >
              hello@hexaigon.gr
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
