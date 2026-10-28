// Adds a model to the archive from a rulecad workspace: its picture (cad preview) and a page that opens it in the
// viewer (cad link), so its link is short.
//
//   node add.mjs <workspace> <project>/<object[:variant]> [--slug name] [--note "what it is"]
//
// Then commit and push: the link is https://jonibach.github.io/rulecad-archive/m/<slug>/
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { add, dirOf } from './lib.mjs';

const [ws, ref, ...rest] = process.argv.slice(2);
if (!ws || !ref) { console.error('usage: node add.mjs <workspace> <project>/<object[:variant]> [--slug name] [--note "…"]'); process.exit(1); }
const opt = (k) => { const i = rest.indexOf(`--${k}`); return i >= 0 ? rest[i + 1] : null; };
const cad = (...a) => execFileSync('npx', ['cad', ...a], { cwd: path.resolve(ws), encoding: 'utf8', maxBuffer: 1 << 28 });

const date = new Date().toISOString().slice(0, 10), slug = opt('slug') || `${date}-${ref.replace(/[/:]/g, '-')}`;
const line = cad('link', ref, '--md', '--long').split('\n').find((l) => l.includes('](https://'));
const [, title] = line.match(/\*\*(.+?)\*\*/) || [, ref], [, url] = line.match(/\]\((https:\/\/[^)]+)\)/);
const picture = cad('preview', ref).trim().split('\n').reverse().find((l) => /\.png$/.test(l.trim()))?.trim();
fs.mkdirSync(dirOf(slug), { recursive: true });
if (picture) fs.copyFileSync(path.resolve(ws, picture), path.join(dirOf(slug), 'preview.png'));
console.log(add({ slug, date, ref, title, note: opt('note') || '', source: path.basename(path.resolve(ws)), url }));
