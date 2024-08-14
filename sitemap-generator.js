const fs = require('fs');
const util = require('util');
const writeFile = util.promisify(fs.writeFile);

const baseUrl = 'https://kirkseubert.vercel.app'; // Replace with your actual domain

const routes = [
  '/',
  '/services/residential',
  '/services/commercial-hvac',
  '/services/commercial-plumbing',
  '/services/fire-sprinklers',
  '/services/gas-lines',
  '/contact'
];

async function generateSitemap() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes.map(route => `
  <url>
    <loc>${baseUrl}${route}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  `).join('')}
</urlset>`;

  try {
    await writeFile('./public/sitemap.xml', sitemap);
    console.log('Sitemap generated successfully!');
  } catch (err) {
    console.error('Error generating sitemap:', err);
  }
}

generateSitemap();