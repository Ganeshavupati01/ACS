export default async function handler(req, res) {
  try {
    const response = await fetch('https://blog-ssr-phi.vercel.app/blogs');
    const html = await response.text();
    res.status(200).send(html);
  } catch (error) {
    res.status(500).send('Error fetching blogs');
  }
}