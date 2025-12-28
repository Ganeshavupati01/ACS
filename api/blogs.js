export default async function handler(req, res) {
  try {
    const { url } = req.query || {};
    const fetchUrl = url || 'https://blog-ssr-phi.vercel.app/blogs';
    const response = await fetch(fetchUrl);
    let html = await response.text();

    // Rewrite relative URLs to absolute for assets
    const baseUrl = 'https://blog-ssr-phi.vercel.app';
    html = html.replace(/href="\/_next\//g, `href="${baseUrl}/_next/`);
    html = html.replace(/src="\/_next\//g, `src="${baseUrl}/_next/`);
    html = html.replace(/href="\/__next\//g, `href="${baseUrl}/__next/`);
    html = html.replace(/src="\/__next\//g, `src="${baseUrl}/__next/`);
    // Add more if needed for images, etc.
    html = html.replace(/src="\/images\//g, `src="${baseUrl}/images/`);

    // Remove preload links to avoid unused preload warnings
    html = html.replace(/<link rel="preload"[^>]*>/g, '');
  } catch (error) {
    res.status(500).send('Error fetching blogs');
  }
}