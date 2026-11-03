// Puts a mechanism's sequence with its model in the archive: cad animate's player page (scrub through it, step from
// state to state, slow the shot, tap a force for its x and y), its data (JSON) and its animated SVG.
//
//   node play.mjs <workspace> <project>/<object[:variant]> --slug name
//
// The model must be in the archive already (node add.mjs). Then commit and push: the player is
// https://jonibach.github.io/rulecad-archive/m/<slug>/play.html
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { attachPlayer, BASE } from './lib.mjs';

const [ws, ref, ...rest] = process.argv.slice(2), i = rest.indexOf('--slug'), slug = i >= 0 ? rest[i + 1] : null;
if (!ws || !ref || !slug) { console.error('usage: node play.mjs <workspace> <project>/<object> --slug name'); process.exit(1); }
const out = execFileSync('npx', ['cad', 'animate', ref], { cwd: path.resolve(ws), encoding: 'utf8', maxBuffer: 1 << 28 }).trim().split('\n');
const find = (ext) => out.find((l) => l.trim().endsWith(ext))?.trim();
attachPlayer(slug, { [find('-player.html')]: 'play.html', [find('-sequence.json')]: 'sequence.json', [find('-sequence.svg')]: 'sequence.svg' });
console.log(`[Play it](${BASE}/m/${slug}/play.html)`);
