import type { MetadataRoute } from "next";

const robots = (): MetadataRoute.Robots => ({
  rules: [
    {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
  ],
  sitemap: "https://hexaigon.gr/sitemap.xml",
});

export default robots;
