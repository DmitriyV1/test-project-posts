import { MetadataRoute } from "next";
import { getPosts } from "./_lib/data-servise";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPosts();

  const post = posts.map((elem: any) => ({
    url: `https://current_url/posts/${elem.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [
    {
      url: "https://current_url",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    ...post,
  ];
}
