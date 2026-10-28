// Brings in the models shared as secret Gists (cad link with "shorten": "gist"): the latest of each, its picture drawn
// from the Gist's own model, so it shows the model as it was shared.
//
//   node import-gists.mjs [--rulecad <path to the rulecad repo>]
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { add, dirOf, entries, VIEWER } from './lib.mjs';

const i = process.argv.indexOf('--rulecad'), RULECAD = path.resolve(i > 0 ? process.argv[i + 1] : '../rulecad');
const { decode, partsOf, triangles } = await import(path.join(RULECAD, 'packages/model-link/model-link.mjs'));
const { preview } = await import(path.join(RULECAD, 'packages/cad/lib/preview.mjs'));
const gh = (...a) => execFileSync('gh', a, { encoding: 'utf8', maxBuffer: 1 << 28 });

// The latest Gist of each model: its description is "model: <project>/<object>[@version][ (…)]"
const gists = JSON.parse(gh('api', 'gists?per_page=100', '--paginate', '--jq', '[.[] | {id, description, created_at}]').replace(/\]\s*\[/g, ','));
const latest = new Map();
for (const g of gists) {
  const m = (g.description || '').match(/^(?:mirror-cad )?model: ([\w-]+\/[\w:-]+)/);
  if (m && !(latest.get(m[1])?.created_at > g.created_at)) latest.set(m[1], { ...g, ref: m[1] });
}
const have = new Set(entries().map((e) => e.ref));
const source = (ref) => (/^(lever|bench)\//.test(ref) ? 'rulecad examples' : 'mirror-cad');
for (const g of [...latest.values()].filter((g) => !have.has(g.ref))) {
  const f = JSON.parse(gh('api', `gists/${g.id}`, '--jq', '.files["model.txt"]'));
  const token = (f.truncated ? await (await fetch(f.raw_url)).text() : f.content).trim();
  const model = await decode(token), slug = g.ref.replace(/[/:]/g, '-'), title = model.title || g.ref, date = g.created_at.slice(0, 10);
  fs.mkdirSync(dirOf(slug), { recursive: true });
  const parts = partsOf(model).map((p) => ({ name: p[0], role: p[1], label: p[2], triangles: triangles(model, p) }));
  try { await preview(parts, { title, meta: `${date} · shared from ${source(g.ref)}`, out: path.join(dirOf(slug), 'preview.png') }); } catch (e) { console.error(`${g.ref}: no picture (${e.message})`); }
  console.log(add({ slug, date, ref: g.ref, title, note: 'as shared', source: source(g.ref), url: `${VIEWER}#m=${token}` }));
}
