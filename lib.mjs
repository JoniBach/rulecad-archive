// The archive's pages: one entry per model (m/<slug>/: a page that opens it in the viewer, and its picture), and the
// README.md and index.html that list them all, newest first.
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

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
  if (picture) thumb(slug);
  const entry = { slug, date, ref, title, note, source, picture };
  const all = [entry, ...entries().filter((e) => e.slug !== slug)].sort((a, b) => b.date.localeCompare(a.date));
  fs.writeFileSync(file, JSON.stringify(all, null, 2) + '\n');
  render(all);
  return `[${title}](${BASE}/m/${slug}/)`;
}

function render(all) {
  const rows = all.map((e) => `### ${e.title}\n\n${e.date} · \`${e.ref}\` in ${e.source}${e.note ? `: ${e.note}` : ''}\n\n[Open in 3D](${BASE}/m/${e.slug}/)${e.picture ? `\n\n[![${e.title}](m/${e.slug}/preview.png)](${BASE}/m/${e.slug}/)` : ''}\n`);
  fs.writeFileSync(path.join(here, 'README.md'), `# rulecad archive\n\nModels made with [rulecad](https://github.com/JoniBach/rulecad), newest first: a picture of each, and a link that opens it in the 3D viewer (turn it, download STL or 3MF). Everything here is public.\n\n- **Add one:** \`node add.mjs <workspace> <project>/<object>\`, then commit and push.\n- **Bring in links shared as Gists:** \`node import-gists.mjs\`.\n\n${rows.join('\n')}`);
  fs.writeFileSync(path.join(here, 'index.html'), page(all));
}

// A small copy of a picture for the gallery (macOS sips; elsewhere the gallery shows the full picture)
export function thumb(slug) {
  const from = path.join(dirOf(slug), 'preview.png'), to = path.join(dirOf(slug), 'thumb.jpg');
  try { execFileSync('sips', ['-s', 'format', 'jpeg', '-s', 'formatOptions', '70', '-Z', '720', from, '--out', to], { stdio: 'ignore' }); } catch {}
}

// The gallery: a card per model, grouped by project, newest first in each
function page(all) {
  const groups = new Map();
  for (const e of all) { const g = e.ref.split('/')[0]; if (!groups.has(g)) groups.set(g, []); groups.get(g).push(e); }
  const card = (e) => {
    const img = fs.existsSync(path.join(dirOf(e.slug), 'thumb.jpg')) ? 'thumb.jpg' : 'preview.png';
    return `<article>
  <a href="m/${e.slug}/">${e.picture ? `<img src="m/${e.slug}/${img}" alt="" loading="lazy">` : '<div class="none">no picture</div>'}</a>
  <h3><a href="m/${e.slug}/">${esc(e.title)}</a></h3>
  <p>${e.date} · <code>${esc(e.ref)}</code>${e.note ? ` · ${esc(e.note)}` : ''}</p>
  <p class="links"><a href="m/${e.slug}/">Open in 3D</a>${e.picture ? ` · <a href="m/${e.slug}/preview.png">Picture</a>` : ''}</p>
</article>`;
  };
  return `<!doctype html>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>rulecad archive</title>
<style>
  body { font-family: system-ui, sans-serif; margin: 0; background: #111; color: #ddd; }
  header, section { max-width: 72rem; margin: 0 auto; padding: 1rem 1.25rem; }
  h1 { margin: 1rem 0 0.25rem; } h2 { border-bottom: 1px solid #333; padding-bottom: 0.4rem; }
  a { color: #8cf; } nav a { margin-right: 1rem; }
  .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr)); gap: 1rem; }
  article { background: #1b1b1b; border: 1px solid #2a2a2a; border-radius: 8px; overflow: hidden; }
  article img, .none { display: block; width: 100%; aspect-ratio: 3 / 2; object-fit: cover; background: #000; }
  .none { display: grid; place-items: center; color: #666; }
  article h3 { font-size: 1rem; margin: 0.6rem 0.75rem 0.2rem; } article h3 a { color: #eee; text-decoration: none; }
  article p { font-size: 0.8rem; margin: 0.2rem 0.75rem; color: #999; } .links { padding-bottom: 0.7rem; font-size: 0.9rem; }
  code { color: #bbb; }
</style>
<header>
  <h1>rulecad archive</h1>
  <p>${all.length} models made with <a href="https://github.com/JoniBach/rulecad">rulecad</a>. Open one in 3D to turn it and download STL or 3MF.</p>
  <nav>${[...groups.keys()].map((g) => `<a href="#${g}">${g}</a>`).join('')}</nav>
</header>
${[...groups].map(([g, list]) => `<section id="${g}">
<h2>${g}</h2>
<div class="grid">
${list.map(card).join('\n')}
</div>
</section>`).join('\n')}
`;
}
export const rebuild = () => render(entries());
