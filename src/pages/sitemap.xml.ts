import type { APIRoute } from "astro";

const routes = [
  "",
  "profile",
  "projects",
  "experience",
  "education",
  "skills",
  "tech-stack",
  "contact",
  "resume",
  "github",
  "career-timeline",
  "certifications",
  "changelog",
  "articles",
  "blog",
  "now",
  "availability",
  "help",
  "socials",
];

export const GET: APIRoute = ({ site }) => {
  const baseUrl = site
    ? site.href.replace(/\/$/u, "")
    : "https://selahattin.dev";
  const now = new Date();
  const [today] = now.toISOString().split("T", 1);

  const urlEntries = routes
    .map((route) => {
      const path = route.length > 0 ? `${route}/` : "";
      const priority = route.length === 0 ? "1.0" : "0.8";
      return `  <url>
    <loc>${baseUrl}/${path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
};
