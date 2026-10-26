import type { MetadataRoute } from "next";

const SITE_URL = "https://www.christophersfinejewelers.com";

// Only canonical, indexable pages belong here.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE_URL}/` },
    { url: `${SITE_URL}/collection` },
    { url: `${SITE_URL}/faq` },
  ];
}
