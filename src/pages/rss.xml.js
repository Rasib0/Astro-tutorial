import rss, { pagesGlobToRssItems } from "@astrojs/rss";
import { getCollection } from "astro:content";
export async function get() {
  const posts = await getCollection("posts");

  return rss({
    title: "Rasib's Blog",
    description: "My silly blog where I can post anything because I can.",
    site: "https://www.rasib.me",
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/posts/${post.slug}`,
    })),
    customData: `<language>en-us</language>`,
  });
}
