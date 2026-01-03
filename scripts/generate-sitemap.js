import fs from "fs";
import path from "path";

const DOMAIN = "https://abhidrainlinecleaning.com";
const WP_SITE = "abhidrainlinecleaning.wordpress.com";
const OUTPUT_PATH = path.resolve("public", "sitemap.xml");

async function generateSitemap() {
  console.log("🔄 Generating sitemap...");

  // 🔹 Fetch WordPress posts
  const res = await fetch(
    `https://public-api.wordpress.com/rest/v1.1/sites/${WP_SITE}/posts?number=100`
  );
  const data = await res.json();
  const posts = data.posts || [];

  // 🔹 Static pages
  const staticPages = [
    "/",
    "/about",
    "/services",
    "/blogs",
    "/contact",
  ];

  let urls = [];

  // Add static pages
  staticPages.forEach((page) => {
    urls.push(`
    <url>
      <loc>${DOMAIN}${page}</loc>
      <changefreq>monthly</changefreq>
      <priority>0.8</priority>
    </url>`);
  });

  // Add blog posts
  posts.forEach((post) => {
    urls.push(`
    <url>
      <loc>${DOMAIN}/blogs/${post.slug}</loc>
      <lastmod>${post.modified.split("T")[0]}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.7</priority>
    </url>`);
  });

  // Final sitemap XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>`;

  fs.writeFileSync(OUTPUT_PATH, sitemap.trim());
  console.log("✅ sitemap.xml generated successfully!");
}

generateSitemap();