import { SiteConfig } from "@/config/site";
import { blogs } from "@/data/blogs";


export default async function sitemap() {
  const baseUrl = SiteConfig.url;

  /**
   * 1. Static routes
   */
  const staticRoutes = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/area-we-serve`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    }
  ];

  /**
   * 2. Service pages
   */
  const serviceRoutes = SiteConfig.services.map((service) => ({
    url: `${baseUrl}${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  /**
   * 3. Area pages
   */
  const areaRoutes = SiteConfig.serviceAreas.map((area) => ({
    url: `${baseUrl}${area.href}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  /**
   * 4. Blog posts
   */
  const blogRoutes = blogs.map((post) => ({
    url: `${baseUrl}/dubai/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  /**
   * 5. Return all combined routes
   */
  return [...staticRoutes, ...serviceRoutes, ...areaRoutes, ...blogRoutes];
}
