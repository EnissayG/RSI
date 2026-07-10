/**
 * Ajoute des champs texte modifiables pour l'ordre de préférence OBNL (1, 2, 3, 4)
 * dans le formulaire d'inscription PDF.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';

const __dirname = dirname(fileURLToPath(import.meta.url));
const pdfPath = join(__dirname, '../public/documents/formulaire-inscription.pdf');

const pdfBytes = readFileSync(pdfPath);
const pdfDoc = await PDFDocument.load(pdfBytes, { ignoreEncryption: true });
const form = pdfDoc.getForm();
const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
const pages = pdfDoc.getPages();

// Section « OBNL d'habitation souhaitée » — page 2 (index 1)
const page = pages[1] ?? pages[0];
const { height } = page.getSize();

// Champs à droite de chaque OBNL listé (coordonnées ajustées pour le layout du PDF)
const obnlFields = [
  { name: 'obnl_choix_rsi', label: 'RSI Propulsion', y: height - 430 },
  { name: 'obnl_choix_equitoit', label: 'EquiToit', y: height - 455 },
  { name: 'obnl_choix_bellechasse', label: 'Espace Bellechasse', y: height - 480 },
  { name: 'obnl_choix_pignon', label: 'Habitations Pignon sur Roues', y: height - 505 },
];

for (const { name, y } of obnlFields) {
  const existing = form.getFieldMaybe(name);
  if (existing) {
    form.removeField(existing);
  }

  const field = form.createTextField(name);
  field.setText('');
  field.updateAppearances(font);
  field.setMaxLength(3);
  field.addToPage(page, {
    x: 500,
    y,
    width: 36,
    height: 18,
    borderColor: rgb(0.25, 0.25, 0.25),
    backgroundColor: rgb(1, 1, 0.9),
    borderWidth: 1,
  });
}

// En-tête de colonne pour la préférence
page.drawText('Choix', {
  x: 500,
  y: height - 415,
  size: 8,
  font,
  color: rgb(0.3, 0.3, 0.3),
});

const output = await pdfDoc.save({ useObjectStreams: false });
writeFileSync(pdfPath, output);
console.log(`PDF mis à jour : ${obnlFields.length} champs OBNL ajoutés.`);

// Validation lecture
const verifyDoc = await PDFDocument.load(output);
const verifyForm = verifyDoc.getForm();
const names = obnlFields.map((f) => f.name);
for (const name of names) {
  const field = verifyForm.getField(name);
  if (!field) throw new Error(`Champ manquant après écriture : ${name}`);
}
console.log('Validation pdf-lib : tous les champs sont présents et lisibles.');
