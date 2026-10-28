// The archive's pages: one entry per model (m/<slug>/: a page that opens it in the viewer, and its picture), and the
// README.md and index.html that list them all, newest first.
import fs from 'node:fs';
import path from 'node:path';

export const BASE = 'https://jonibach.github.io/rulecad-archive', VIEWER = 'https://jonibach.github.io/rulecad/';
const here = path.dirname(new URL(import.meta.url).pathname), file = path.join(here, 'entries.json');
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
export const entries = () => (fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, 'utf8')) : []);
export const dirOf = (slug) => path.join(here, 'm', slug);

/** Writes m/<slug>/index.html (its picture, if any, must already be at m/<slug>/preview.png) and lists the entry. */
export function add({ slug, date, ref, title, note = '', source, url }) {
  const dir = dirOf(slug), picture = fs.existsSync(path.join(dir, 'preview.png'));
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), `<!doctype html>
<meta charset="utf-8">
<title>${esc(title)}</title>
<meta property="og:title" content="${esc(title)}">
${picture ? `<meta property="og:image" content="${BASE}/m/${slug}/preview.png">\n` : ''}<body style="font-family:sans-serif;max-width:40em;margin:2em auto">
<h1>${esc(title)}</h1>
<p>Opening it in the rulecad viewer… <a id="go" href="${esc(url)}">Open it</a> if nothing happens.</p>
${picture ? '<img src="preview.png" alt="" style="max-width:100%">\n' : ''}<script>location.replace(document.getElementById('go').href)</script>
`);
  const entry = { slug, date, ref, title, note, source, picture };
  const all = [entry, ...entries().filter((e) => e.slug !== slug)].sort((a, b) => b.date.localeCompare(a.date));
  fs.writeFileSync(file, JSON.stringify(all, null, 2) + '\n');
  render(all);
  return `[${title}](${BASE}/m/${slug}/)`;
}

function render(all) {
  const rows = all.map((e) => `### ${e.title}\n\n${e.date} · \`${e.ref}\` in ${e.source}${e.note ? `: ${e.note}` : ''}\n\n[Open in 3D](${BASE}/m/${e.slug}/)${e.picture ? `\n\n[![${e.title}](m/${e.slug}/preview.png)](${BASE}/m/${e.slug}/)` : ''}\n`);
  fs.writeFileSync(path.join(here, 'README.md'), `# rulecad archive\n\nModels made with [rulecad](https://github.com/JoniBach/rulecad), newest first: a picture of each, and a link that opens it in the 3D viewer (turn it, download STL or 3MF). Everything here is public.\n\n- **Add one:** \`node add.mjs <workspace> <project>/<object>\`, then commit and push.\n- **Bring in links shared as Gists:** \`node import-gists.mjs\`.\n\n${rows.join('\n')}`);
  fs.writeFileSync(path.join(here, 'index.html'), `<!doctype html>\n<meta charset="utf-8">\n<title>rulecad archive</title>\n<body style="font-family:sans-serif;max-width:48em;margin:2em auto">\n<h1>rulecad archive</h1>\n<p>Models made with <a href="https://github.com/JoniBach/rulecad">rulecad</a>, newest first.</p>\n${all.map((e) => `<h2><a href="m/${e.slug}/">${esc(e.title)}</a></h2>\n<p>${e.date} · ${esc(e.ref)} in ${esc(e.source)}${e.note ? `: ${esc(e.note)}` : ''}</p>\n${e.picture ? `<a href="m/${e.slug}/"><img src="m/${e.slug}/preview.png" alt="" style="max-width:100%"></a>\n` : ''}`).join('\n')}`);
}
