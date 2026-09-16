import type { APIRoute } from "astro";

export const GET: APIRoute = ({ redirect }) =>
  redirect("/sitemap-index.xml", 301);
