import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PRODUCTS_PATH = path.join(__dirname, '../src/data/products.jsx');
const INFO_PATH = path.join(__dirname, '../src/data/info.jsx');
const BLOGS_PATH = path.join(__dirname, '../src/data/blogs.jsx');
const INDEX_HTML_PATH = path.join(__dirname, '../index.html');

function extractData(filePath, regex) {
    const content = fs.readFileSync(filePath, 'utf8');
    const results = [];
    let match;
    while ((match = regex.exec(content)) !== null) {
        results.push(match[2]); // match[2] is the content inside quotes
    }
    return results;
}

function generateStaticContent() {
    // Products
    const productTitles = extractData(PRODUCTS_PATH, /title:\s*(['"])(.*?)\1/g);
    const skillTitles = extractData(INFO_PATH, /title:\s*(['"])(.*?)\1/g);
    const allNames = extractctData(INFO_PATH, /name:\s*(['"])(.*?)\1/g);
    const experienceNames = allNames.filter(name => name !== 'Lars Vonk');

    // Blogs
    const blogTitles = extractData(BLOGS_PATH, /title:\s*(['"])(.*?)\1/g);

    let html = '\n<!-- STATIC_CONTENT_START -->\n';
    html += '<div style="display: none;">\n';

    html += '<h2>Services</h2>\n';
    html += '<ul>\n';
    productTitles.forEach(title => html += `\t<li>${title}</li>\n`);
    html += '</ul>\n';

    html += '<h3>Skills</h3>\n';
    html += '<ul>\n';
    skillTitles.forEach(title => html += `\t<li>${title}</li>\n`);
    html += '</ul>\n';

    html += '<h4>Experience</h4>\n';
    html += '<ul>\n';
    experienceNames.forEach(name => html += `\t<li>${name}</li>\n`);
    html += '</ul>\n';

    html += '<h5>Logs</h5>\n';
    html += '<ul>\n';
    blogTitles.forEach(title => html += `\t<li>${title}</li>\n`);
    html += '</ul>\n';

    html += '</div>\n';
    html += '<!-- STATIC_CONTENT_END -->\n';

    let indexHtml = fs.readFileSync(INDEX_HTML_PATH, 'utf8');

    const startMarker = '<!-- STATIC_CONTENT_START -->';
    const endMarker = '<!-- STATIC_CONTENT_END -->';
    const regex = new RegExp(`${startMarker}[\\s\\S]*?${endMarker}`);

    if (regex.test(indexHtml)) {
        indexHtml = indexHtml.replace(regex, html.trim());
    } else {
        if (indexHtml.includes('</section>')) {
            indexHtml = indexHtml.replace('</section>', '</section>' + html);
        } else if (indexHtml.includes('</div>')) {
            const appDivRegex = /(<div id="app">[\s\S]*?)(<\/div>)/;
            if (appDivRegex.test(indexHtml)) {
                indexHtml = indexHtml.replace(appDivRegex, `$1${html}$2`);
            } else {
                indexHtml = indexHtml.replace('</body>', html + '</body>');
            }
        }
    }

    fs.writeFileSync(INDEX_HTML_PATH, indexHtml, 'utf8');
}

generateStaticContent();
