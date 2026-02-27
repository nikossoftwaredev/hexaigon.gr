import type { MetadataRoute } from "next";
import { SUPPORTED_LOCALES } from "@/lib/i18n/routing";

const BASE_URL = "https://hexaigon.gr";

const sitemap = (): MetadataRoute.Sitemap => {
  const routes = ["", "/projects"];

  return routes.flatMap((route) =>
    SUPPORTED_LOCALES.map((locale) => ({
      url: `${BASE_URL}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: route === "" ? ("weekly" as const) : ("monthly" as const),
      priority: route === "" ? 1.0 : 0.8,
    }))
  );
};

export default sitemap;
