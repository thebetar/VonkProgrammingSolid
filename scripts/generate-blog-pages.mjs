// Writes a copy of the built index.html for every blog post, with that post's
// title, description, canonical URL and preview image in the <head>.
//
// Link preview crawlers (LinkedIn, Slack, X, WhatsApp) do not run JavaScript, so
// without this every shared blog link shows the homepage title and description.
// .htaccess serves dist/blog-pages/<slug>.html for /blogs/<slug>; the app itself
// is unchanged and replaces these tags at runtime like it does on every page.
//
// Usage: node scripts/generate-blog-pages.mjs [distDir]   (runs after `vite build`)
import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://vonkprogramming.nl';
const SITE_NAME = 'VonkProgramming';
const DEFAULT_IMAGE = '/assets/images/logo.webp';
const BLOGS_PATH = path.join(__dirname, '../src/data/blogs.jsx');
const DIST_PATH = path.resolve(process.argv[2] || path.join(__dirname, '../dist'));
const OUT_DIR = path.join(DIST_PATH, 'blog-pages');

// Matches a string literal in single, double or backtick quotes (no escaped quotes).
const STRING_LITERAL = /(['"`])([\s\S]*?)\1/.source;

function extractField(block, field) {
    const match = block.match(new RegExp(`^\\s*${field}:\\s*${STRING_LITERAL}`, 'm'));
    return match ? match[2].replace(/\s+/g, ' ').trim() : '';
}

// Same parsing approach as generate-static-content.mjs: one block per blog entry,
// cut off before `content:` so text inside a post can never be mistaken for a field.
function extractBlogs() {
    const content = fs.readFileSync(BLOGS_PATH, 'utf8').replace(/^\s*\/\/.*$/gm, '');
    const blocks = content.split(/^\s*id:\s*\d+,\s*$/m).slice(1);

    return blocks.map(block => {
        const meta = block.split(/^\s*content:/m)[0];
        const blog = {
            title: extractField(meta, 'title'),
            link: extractField(meta, 'link'),
            description: extractField(meta, 'description'),
            image: extractField(meta, 'image'),
        };

        if (!blog.title || !/^\/blogs\/[a-z0-9-]+$/.test(blog.link)) {
            throw new Error(`Could not parse blog entry: ${block.slice(0, 120)}`);
        }

        return blog;
    });
}

// Mirrors truncate() in src/components/general/SEO.jsx so crawlers and the app agree.
function truncate(text, max = 158) {
    const clean = text.replace(/<[^>]*>?/gm, '').replace(/\s+/g, ' ').trim();
    if (clean.length <= max) return clean;
    return clean.slice(0, max - 1).replace(/\s+\S*$/, '') + '…';
}

function escapeHtml(text) {
    return text.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function replaceOnce(html, regex, replacement, label) {
    const matches = html.match(new RegExp(regex.source, 'g')) || [];
    if (matches.length !== 1) {
        throw new Error(`Expected exactly one ${label} tag in index.html, found ${matches.length}`);
    }
    return html.replace(regex, replacement);
}

function metaContent(html, key, value) {
    const regex = new RegExp(`(<meta\\s+data-default\\s+(?:name|property)="${key}"\\s+content=")[^"]*(")`);
    return replaceOnce(html, regex, `$1${escapeHtml(value)}$2`, key);
}

function buildPage(template, blog) {
    const title = `${SITE_NAME} - ${blog.title}`;
    const description = truncate(blog.description);
    const url = BASE_URL + blog.link;
    const image = BASE_URL + (blog.image || DEFAULT_IMAGE);

    let html = template;
    html = replaceOnce(html, /<title data-default>[^<]*<\/title>/, `<title data-default>${escapeHtml(title)}</title>`, 'title');
    html = replaceOnce(html, /(<link\s+data-default\s+rel="canonical"\s+href=")[^"]*(")/, `$1${url}$2`, 'canonical');
    html = metaContent(html, 'description', description);
    html = metaContent(html, 'og:type', 'article');
    html = metaContent(html, 'og:url', url);
    html = metaContent(html, 'og:title', title);
    html = metaContent(html, 'og:description', description);
    html = metaContent(html, 'og:image', image);
    html = metaContent(html, 'twitter:url', url);
    html = metaContent(html, 'twitter:title', title);
    html = metaContent(html, 'twitter:description', description);
    html = metaContent(html, 'twitter:image', image);
    return html;
}

function writeCompressed(filePath, html) {
    const buffer = Buffer.from(html);
    fs.writeFileSync(filePath, buffer);
    fs.writeFileSync(`${filePath}.gz`, zlib.gzipSync(buffer, { level: 9 }));
    fs.writeFileSync(
        `${filePath}.br`,
        zlib.brotliCompressSync(buffer, { params: { [zlib.constants.BROTLI_PARAM_QUALITY]: 11 } }),
    );
}

function generateBlogPages() {
    const template = fs.readFileSync(path.join(DIST_PATH, 'index.html'), 'utf8');
    const blogs = extractBlogs();

    fs.rmSync(OUT_DIR, { recursive: true, force: true });
    fs.mkdirSync(OUT_DIR, { recursive: true });

    blogs.forEach(blog => {
        const slug = blog.link.replace('/blogs/', '');
        writeCompressed(path.join(OUT_DIR, `${slug}.html`), buildPage(template, blog));
    });

    console.log(`Generated ${blogs.length} blog pages in ${path.relative(process.cwd(), OUT_DIR) || OUT_DIR}`);
}

generateBlogPages();
