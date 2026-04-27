import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://vonkprogramming.nl';
const SITEMAP_PATH = path.join(__dirname, '../public/sitemap.xml');
const BLOGS_PATH = path.join(__dirname, '../src/data/blogs.jsx');
const PRODUCTS_PATH = path.join(__dirname, '../src/data/products.jsx');

const TODAY = new Date().toISOString().split('T')[0];

const STATIC_ROUTES = [
    { loc: '/', priority: '1.0', changefreq: 'weekly' },
    { loc: '/blogs', priority: '0.9', changefreq: 'weekly' },
    { loc: '/projects', priority: '0.7', changefreq: 'monthly' },
    { loc: '/skills', priority: '0.7', changefreq: 'yearly' },
    { loc: '/experience', priority: '0.7', changefreq: 'yearly' },
    { loc: '/resume', priority: '0.7', changefreq: 'yearly' },
    { loc: '/education', priority: '0.5', changefreq: 'yearly' },
    { loc: '/contact', priority: '0.6', changefreq: 'yearly' },
];

function readFile(filePath) {
    return fs.readFileSync(filePath, 'utf8');
}

function extractBlogs() {
    const content = readFile(BLOGS_PATH);
    // Match each blog object's date and link, plus optional dateModified.
    const blogs = [];
    const blockRegex = /\{[\s\S]*?date:\s*['"`]([0-9]{4}-[0-9]{2}-[0-9]{2})['"`][\s\S]*?link:\s*['"`]([^'"`]+)['"`](?:[\s\S]*?dateModified:\s*['"`]([0-9]{4}-[0-9]{2}-[0-9]{2})['"`])?/g;
    let m;
    while ((m = blockRegex.exec(content)) !== null) {
        blogs.push({
            link: m[2],
            date: m[1],
            dateModified: m[3] || m[1],
        });
    }
    return blogs;
}

function extractProductLinks() {
    const content = readFile(PRODUCTS_PATH);
    const links = [];
    const regex = /productLink:\s*['"]([^'"]+)['"]/g;
    let m;
    while ((m = regex.exec(content)) !== null) {
        links.push(m[1]);
    }
    return links;
}

function buildUrl({ loc, lastmod, changefreq, priority }) {
    const safe = loc.startsWith('/') ? loc : '/' + loc;
    return `    <url>
        <loc>${BASE_URL}${safe}</loc>
        <lastmod>${lastmod}</lastmod>
        <changefreq>${changefreq}</changefreq>
        <priority>${priority}</priority>
    </url>`;
}

function generateSitemap() {
    const entries = [];

    for (const route of STATIC_ROUTES) {
        entries.push(buildUrl({ ...route, lastmod: TODAY }));
    }

    for (const blog of extractBlogs()) {
        entries.push(buildUrl({
            loc: blog.link,
            lastmod: blog.dateModified,
            changefreq: 'monthly',
            priority: '0.8',
        }));
    }

    for (const link of extractProductLinks()) {
        entries.push(buildUrl({
            loc: link,
            lastmod: TODAY,
            changefreq: 'monthly',
            priority: '0.9',
        }));
    }

    // Deduplicate by <loc>
    const seen = new Set();
    const unique = entries.filter(e => {
        const loc = e.match(/<loc>([^<]+)<\/loc>/)[1];
        if (seen.has(loc)) return false;
        seen.add(loc);
        return true;
    });

    const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${unique.join('\n')}
</urlset>
`;

    fs.writeFileSync(SITEMAP_PATH, sitemapContent);
}

generateSitemap();
