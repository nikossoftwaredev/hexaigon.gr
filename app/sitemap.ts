import type { MetadataRoute } from "next";

import { SUPPORTED_LOCALES } from "@/lib/i18n/routing";

const BASE_URL = "https://hexaigon.gr";

const ROUTES: {
  path: string;
  changeFrequency: "weekly" | "monthly";
  priority: number;
}[] = [
  { path: "", changeFrequency: "weekly", priority: 1.0 },
  { path: "/projects", changeFrequency: "monthly", priority: 0.8 },
];

const sitemap = (): MetadataRoute.Sitemap =>
  ROUTES.flatMap(({ path, changeFrequency, priority }) =>
    SUPPORTED_LOCALES.map((locale) => ({
      url: `${BASE_URL}/${locale}${path}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
    }))
  );

export default sitemap;
