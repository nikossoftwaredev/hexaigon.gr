import Image from "next/image";
import { CreditCard } from "lucide-react";
import { getTranslations } from "next-intl/server";

import { TypographyH2 } from "@/components/ui/typography";

export const PaymentsBanner = async () => {
  const t = await getTranslations("Payments");

  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="glass p-8 sm:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12 border border-green-500/20">
          <div className="flex items-center gap-6 shrink-0">
            <div className="inline-flex p-4 rounded-2xl bg-green-500/10">
              <CreditCard className="h-10 w-10 text-green-400" />
            </div>
            <Image
              src="/mydata-logo.png"
              alt="myDATA AADE"
              width={80}
              height={80}
              className="h-16 w-auto object-contain"
            />
          </div>

          <div className="flex-1 text-center md:text-left">
            <TypographyH2 className="text-xl sm:text-2xl mb-3">
              {t("title")}
            </TypographyH2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-xl">
              {t("description")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
