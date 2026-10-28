// Adds a model to the archive: its picture, and a page that opens it in the rulecad viewer, so its link is short.
//
//   node add.mjs <workspace> <project>/<object[:variant]> [--slug name] [--note "what it is"]
//
// <workspace> is a rulecad workspace (a folder with cad.config.json). Runs `cad preview` and `cad link --long` there,
// then writes m/<slug>/ (index.html, preview.png), adds the entry to entries.json, and rewrites README.md and
// index.html. Commit and push to publish: the short link is https://jonibach.github.io/rulecad-archive/m/<slug>/
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const [ws, ref, ...rest] = process.argv.slice(2);
if (!ws || !ref) { console.error('usage: node add.mjs <workspace> <project>/<object[:variant]> [--slug name] [--note "…"]'); process.exit(1); }
const opt = (k) => { const i = rest.indexOf(`--${k}`); return i >= 0 ? rest[i + 1] : null; };
const BASE = 'https://jonibach.github.io/rulecad-archive', here = path.dirname(new URL(import.meta.url).pathname);
const cad = (...a) => execFileSync('npx', ['cad', ...a], { cwd: path.resolve(ws), encoding: 'utf8', maxBuffer: 1 << 28 });

const date = new Date().toISOString().slice(0, 10);
const slug = opt('slug') || `${date}-${ref.replace(/[/:]/g, '-')}`;
const linkLine = cad('link', ref, '--md', '--long').split('\n').find((l) => l.includes('](https://'));
const [, title] = linkLine.match(/\*\*(.+?)\*\*/) || [, ref];
const [, url] = linkLine.match(/\]\((https:\/\/[^)]+)\)/);
const picture = cad('preview', ref).trim().split('\n').reverse().find((l) => /\.png$/.test(l.trim()))?.trim();

const dir = path.join(here, 'm', slug);
fs.mkdirSync(dir, { recursive: true });
if (picture) fs.copyFileSync(path.resolve(ws, picture), path.join(dir, 'preview.png'));
const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
fs.writeFileSync(path.join(dir, 'index.html'), `<!doctype html>
<meta charset="utf-8">
<title>${esc(title)}</title>
<meta property="og:title" content="${esc(title)}">
${picture ? `<meta property="og:image" content="${BASE}/m/${slug}/preview.png">\n` : ''}<body style="font-family:sans-serif;max-width:40em;margin:2em auto">
<h1>${esc(title)}</h1>
<p>Opening it in the rulecad viewer… <a id="go" href="${esc(url)}">Open it</a> if nothing happens.</p>
${picture ? '<img src="preview.png" alt="" style="max-width:100%">\n' : ''}<script>location.replace(document.getElementById('go').href)</script>
`);

const file = path.join(here, 'entries.json'), entries = fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, 'utf8')) : [];
const entry = { slug, date, ref, title, note: opt('note') || '', source: path.basename(path.resolve(ws)), picture: !!picture };
fs.writeFileSync(file, JSON.stringify([entry, ...entries.filter((e) => e.slug !== slug)], null, 2) + '\n');
render(JSON.parse(fs.readFileSync(file, 'utf8')));
console.log(`[${title}](${BASE}/m/${slug}/)`);

// README.md (for GitHub) and index.html (for the site): every model, newest first
function render(all) {
  const rows = all.map((e) => `### ${e.title}\n\n${e.date} · \`${e.ref}\` in ${e.source}${e.note ? `: ${e.note}` : ''}\n\n[Open in 3D](${BASE}/m/${e.slug}/)${e.picture ? `\n\n[![${e.title}](m/${e.slug}/preview.png)](${BASE}/m/${e.slug}/)` : ''}\n`);
  fs.writeFileSync(path.join(here, 'README.md'), `# rulecad archive\n\nModels made with [rulecad](https://github.com/JoniBach/rulecad), newest first: a picture of each, and a link that opens it in the 3D viewer (turn it, download STL or 3MF). Everything here is public.\n\nTo add one: \`node add.mjs <workspace> <project>/<object>\`, then commit and push.\n\n${rows.join('\n')}`);
  fs.writeFileSync(path.join(here, 'index.html'), `<!doctype html>\n<meta charset="utf-8">\n<title>rulecad archive</title>\n<body style="font-family:sans-serif;max-width:48em;margin:2em auto">\n<h1>rulecad archive</h1>\n<p>Models made with <a href="https://github.com/JoniBach/rulecad">rulecad</a>, newest first.</p>\n${all.map((e) => `<h2><a href="m/${e.slug}/">${esc(e.title)}</a></h2>\n<p>${e.date} · ${esc(e.ref)} in ${esc(e.source)}${e.note ? `: ${esc(e.note)}` : ''}</p>\n${e.picture ? `<a href="m/${e.slug}/"><img src="m/${e.slug}/preview.png" alt="" style="max-width:100%"></a>\n` : ''}`).join('\n')}`);
}
