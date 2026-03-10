import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://nicky-pillai.vercel.app";

  return [
    { url: baseUrl, lastModified: new Date(), priority: 1 },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/case-studies/smart-drive-testing-system`,
      lastModified: new Date(),
      priority: 0.7,
    },
  ];
}
