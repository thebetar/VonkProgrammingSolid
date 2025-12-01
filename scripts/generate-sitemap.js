const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://vonkprogramming.nl';
const SITEMAP_PATH = path.join(__dirname, '../public/sitemap.xml');

const STATIC_ROUTES = [
    '/',
    '/skills',
    '/experience',
    '/education',
    '/projects',
    '/contact',
    '/blogs'
];

function extractLinks(filePath, regex) {
    const content = fs.readFileSync(filePath, 'utf8');
    const links = [];
    let match;
    while ((match = regex.exec(content)) !== null) {
        links.push(match[1]);
    }
    return links;
}

function generateSitemap() {
    const today = new Date().toISOString().split('T')[0];

    // 1. Static Routes
    let urls = [...STATIC_ROUTES];

    // 2. Blog Routes
    const blogsPath = path.join(__dirname, '../src/data/blogs.jsx');
    const blogLinks = extractLinks(blogsPath, /link:\s*['"]([^'"]+)['"]/g);
    urls = [...urls, ...blogLinks];

    // 3. Product Routes & Contact Routes
    const productsPath = path.join(__dirname, '../src/data/products.jsx');
    const productLinks = extractLinks(productsPath, /productLink:\s*['"]([^'"]+)['"]/g);
    const contactLinks = extractLinks(productsPath, /contactLink:\s*['"]([^'"]+)['"]/g);

    urls = [...urls, ...productLinks, ...contactLinks];

    // Remove duplicates
    urls = [...new Set(urls)];

    const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `    <url>
        <loc>${BASE_URL}${url.startsWith('/') ? url : '/' + url}</loc>
        <lastmod>${today}</lastmod>
    </url>`).join('\n')}
</urlset>`;

    fs.writeFileSync(SITEMAP_PATH, sitemapContent);
    console.log(`Sitemap generated at ${SITEMAP_PATH} with ${urls.length} URLs.`);
}

generateSitemap();
