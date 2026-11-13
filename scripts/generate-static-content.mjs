import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SKILLS_PATH = path.join(__dirname, '../src/data/skills.jsx');
const EXPERIENCE_PATH = path.join(__dirname, '../src/data/experience.jsx');
const BLOGS_PATH = path.join(__dirname, '../src/data/blogs.jsx');
const INDEX_HTML_PATH = path.join(__dirname, '../index.html');

function stripLineComments(content) {
    return content.replace(/^\s*\/\/.*$/gm, '');
}

function extractData(filePath, regex, groupIndex = 2) {
    const content = stripLineComments(fs.readFileSync(filePath, 'utf8'));
    const results = [];
    let match;
    while ((match = regex.exec(content)) !== null) {
        results.push(match[groupIndex]);
    }
    return results;
}

// Matches a string literal in single, double or backtick quotes (no escaped quotes).
const STRING_LITERAL = /(['"`])([\s\S]*?)\1/.source;

function extractField(block, field) {
    const match = block.match(new RegExp(`^\\s*${field}:\\s*${STRING_LITERAL}`, 'm'));
    return match ? match[2].replace(/\s+/g, ' ').trim() : '';
}

// Each blog entry is parsed on its own so a missing or differently quoted field
// can never shift titles, links and descriptions out of alignment.
function extractBlogs() {
    const content = stripLineComments(fs.readFileSync(BLOGS_PATH, 'utf8'));
    const blocks = content.split(/^\s*id:\s*\d+,\s*$/m).slice(1);

    return blocks.map(block => {
        const blog = {
            title: extractField(block, 'title'),
            link: extractField(block, 'link'),
            description: extractField(block, 'description'),
        };

        if (!blog.title || !blog.link) {
            throw new Error(`Could not parse blog entry: ${block.slice(0, 120)}`);
        }

        return blog;
    });
}

function generateStaticContent() {
    // Skills
    const skillTitles = extractData(SKILLS_PATH, /title:\s*(['"])(.*?)\1/g, 2);

    // Experience
    const experienceNames = extractData(EXPERIENCE_PATH, /name:\s*(['"])(.*?)\1/g, 2);
    const experienceLinks = extractData(EXPERIENCE_PATH, /link:\s*(['"])(.*?)\1/g, 2);
    // Descriptions are multiline template literals inside an array: description: [ `...` ]
    const experienceDescriptions = extractData(EXPERIENCE_PATH, /description:\s*\[\s*`([\s\S]*?)`/g, 1);

    // Blogs
    const blogs = extractBlogs();

    let html = '\n<!-- STATIC_CONTENT_START -->\n';
    html += '<div>\n';

    html += '<h5>Blogs</h5>\n';
    html += '<ul>\n';
    blogs.forEach(({ title, link, description }) => {
        html += `\t<li><a href="${link}">${title}</a><p>${description}</p></li>\n`;
    });
    html += '</ul>\n';

    html += '<h3>Skills</h3>\n';
    html += '<ul>\n';
    skillTitles.forEach(title => html += `\t<li>${title}</li>\n`);
    html += '</ul>\n';

    html += '<h4>Experience</h4>\n';
    html += '<ul>\n';
    experienceNames.forEach((name, index) => {
        const description = experienceDescriptions[index]
            ? experienceDescriptions[index].replace(/\s+/g, ' ').trim()
            : '';
        const link = experienceLinks[index];
        html += `\t<li><a href="${link}">${name}</a><p>${description}</p></li>\n`;
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
