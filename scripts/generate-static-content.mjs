import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PRODUCTS_PATH = path.join(__dirname, '../src/data/products.jsx');
const SKILLS_PATH = path.join(__dirname, '../src/data/skills.jsx');
const EXPERIENCE_PATH = path.join(__dirname, '../src/data/experience.jsx');
const BLOGS_PATH = path.join(__dirname, '../src/data/blogs.jsx');
const INDEX_HTML_PATH = path.join(__dirname, '../index.html');

function extractData(filePath, regex, groupIndex = 2) {
    const content = fs.readFileSync(filePath, 'utf8');
    const results = [];
    let match;
    while ((match = regex.exec(content)) !== null) {
        results.push(match[groupIndex]);
    }
    return results;
}

function generateStaticContent() {
    // Products
    const productTitles = extractData(PRODUCTS_PATH, /title:\s*(['"])(.*?)\1/g, 2);
    const productIds = extractData(PRODUCTS_PATH, /id:\s*(['"])(.*?)\1/g, 2);
    const productDescriptions = extractData(PRODUCTS_PATH, /descriptionShort:\s*(['"])(.*?)\1/g, 2);

    // Skills
    const skillTitles = extractData(SKILLS_PATH, /title:\s*(['"])(.*?)\1/g, 2);

    // Experience
    const experienceNames = extractData(EXPERIENCE_PATH, /name:\s*(['"])(.*?)\1/g, 2);
    const experienceDescriptions = extractData(EXPERIENCE_PATH, /description:\s*\[\s*(['"`])(.*?)\1/g, 2);

    // Blogs
    const blogTitles = extractData(BLOGS_PATH, /title:\s*(['"])(.*?)\1/g, 2);
    const blogLinks = extractData(BLOGS_PATH, /link:\s*(['"])(.*?)\1/g, 2);
    const blogDescriptions = extractData(BLOGS_PATH, /description:\s*`([\s\S]*?)`/g, 1);

    let html = '\n<!-- STATIC_CONTENT_START -->\n';
    html += '<div>\n';

    html += '<h2>Services</h2>\n';
    html += '<ul>\n';
    productTitles.forEach((title, index) => {
        const id = productIds[index];
        const description = productDescriptions[index];
        html += `\t<li><a href="/products/${id}">${title}</a><p>${description}</p></li>\n`;
    });
    html += '</ul>\n';

    html += '<h3>Skills</h3>\n';
    html += '<ul>\n';
    skillTitles.forEach(title => html += `\t<li>${title}</li>\n`);
    html += '</ul>\n';

    html += '<h4>Experience</h4>\n';
    html += '<ul>\n';
    experienceNames.forEach((name, index) => {
        const description = experienceDescriptions[index];
        html += `\t<li>${name}<p>${description}</p></li>\n`;
    });
    html += '</ul>\n';

    html += '<h5>Blogs</h5>\n';
    html += '<ul>\n';
    blogTitles.forEach((title, index) => {
        const link = blogLinks[index];
        const description = blogDescriptions[index] ? blogDescriptions[index].trim() : '';
        html += `\t<li><a href="${link}">${title}</a><p>${description}</p></li>\n`;
    });
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
