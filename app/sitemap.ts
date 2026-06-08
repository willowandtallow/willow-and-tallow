import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://willowandtallow.com",
      lastModified: new Date(),
    },
  ];
}