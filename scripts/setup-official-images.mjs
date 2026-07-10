/**
 * Copie les photos officielles (par NOM) et restaure les binaires corrompus depuis git.
 */
import { readFileSync, writeFileSync, mkdirSync, copyFileSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execSync } from 'node:child_process';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const assetsDir = join(process.env.USERPROFILE ?? '', '.cursor', 'projects', 'c-Users-yassi-Desktop-RSI', 'assets');
const rsiImports = join(root, 'src', 'imports', 'rsi');
const stockDir = join(root, 'public', 'images', 'stock');

mkdirSync(rsiImports, { recursive: true });
mkdirSync(stockDir, { recursive: true });

function findAsset(namePart) {
  const files = readdirSync(assetsDir);
  const match = files.find((f) => f.toLowerCase().includes(namePart.toLowerCase()));
  if (!match) throw new Error(`Photo introuvable dans assets : ${namePart}`);
  return join(assetsDir, match);
}

const officialPhotos = [
  { key: 'photo1-logement-abordable', dest: 'photo1-logement-abordable.png' },
  { key: 'photo2-vrai-chez-soi', dest: 'photo2-vrai-chez-soi.png' },
  { key: 'photo3-vie-de-quartier', dest: 'photo3-vie-de-quartier.png' },
  { key: 'photo4-salle-commune', dest: 'photo4-salle-commune.png' },
  { key: 'equipe-mathieu', dest: 'equipe-mathieu.png' },
  { key: 'equipe-megane', dest: 'equipe-megane.png' },
  { key: 'equipe-kyrvens', dest: 'equipe-kyrvens.png' },
];

for (const { key, dest } of officialPhotos) {
  const src = findAsset(key);
  const out = join(rsiImports, dest);
  copyFileSync(src, out);
  const magic = readFileSync(out).slice(0, 2).toString('hex');
  console.log(`OK ${dest} <- ${key} (magic ${magic})`);
}

// Ancienne image du slide 2 carrousel (git HEAD hero-2.jpg) → slide 3
const legacyHero = execSync('git show HEAD:public/images/stock/hero-2.jpg', {
  cwd: root,
  encoding: 'buffer',
  maxBuffer: 10 * 1024 * 1024,
});
writeFileSync(join(stockDir, 'hero-slide3-legacy.jpg'), legacyHero);
console.log(`OK hero-slide3-legacy.jpg (${legacyHero.length} bytes, magic ${legacyHero.slice(0, 2).toString('hex')})`);

// Image stock repas (section Services, pas photo officielle)
const repasBuf = execSync('git show HEAD:public/images/stock/repas.jpg', {
  cwd: root,
  encoding: 'buffer',
  maxBuffer: 10 * 1024 * 1024,
});
writeFileSync(join(stockDir, 'repas.jpg'), repasBuf);
console.log(`OK repas.jpg restauré (${repasBuf.length} bytes)`);
