// For God so loved the world, that He gave His only begotten Son,
// that all who believe in Him should not perish but have everlasting life.
// — John 3:16

// Generate SQL files for Swahili 1 Samuel translation

import { writeFileSync, readFileSync, mkdirSync, existsSync } from 'fs';

const LANGUAGE_CODE = 'swa';
const BOOK_NAME = '1 Samuel';
const BOOK_ID = '09';  // 1 Samuel book ID
const SOURCE = 'opus-4.5-chirho';

// Read the glosses
const glossesChirho = JSON.parse(readFileSync('./glosses-swa-chirho.json', 'utf8'));

// Group glosses by chapter
const chapterGlossesChirho: Record<number, Record<string, string>> = {};

for (const [wordIdChirho, glossChirho] of Object.entries(glossesChirho)) {
  const chapterChirho = parseInt(wordIdChirho.substring(2, 5));
  if (!chapterGlossesChirho[chapterChirho]) {
    chapterGlossesChirho[chapterChirho] = {};
  }
  chapterGlossesChirho[chapterChirho][wordIdChirho] = glossChirho as string;
}

// Create output directory
const outputDirChirho = './sql-chirho';
if (!existsSync(outputDirChirho)) {
  mkdirSync(outputDirChirho, { recursive: true });
}

// SQL header
const sqlHeaderChirho = `-- For God so loved the world, that He gave His only begotten Son,
-- that all who believe in Him should not perish but have everlasting life.
-- — John 3:16

-- Swahili (Kiswahili) Translation for 1 Samuel
-- Language: swa
-- Source: ${SOURCE}
-- Generated: ${new Date().toISOString()}

`;

// Generate SQL for each chapter
for (const [chapterChirho, glossesMapChirho] of Object.entries(chapterGlossesChirho).sort((a, b) => parseInt(a[0]) - parseInt(b[0]))) {
  const chapterNumChirho = parseInt(chapterChirho);
  const sqlLinesChirho: string[] = [sqlHeaderChirho];

  sqlLinesChirho.push(`-- Chapter ${chapterNumChirho}`);
  sqlLinesChirho.push(`-- Word count: ${Object.keys(glossesMapChirho).length}`);
  sqlLinesChirho.push('');

  // Group by verse for readability
  const verseGlossesChirho: Record<number, { wordId: string; gloss: string }[]> = {};

  for (const [wordIdChirho, glossChirho] of Object.entries(glossesMapChirho)) {
    const verseNumChirho = parseInt(wordIdChirho.substring(5, 8));
    if (!verseGlossesChirho[verseNumChirho]) {
      verseGlossesChirho[verseNumChirho] = [];
    }
    verseGlossesChirho[verseNumChirho].push({ wordId: wordIdChirho, gloss: glossChirho });
  }

  // Generate INSERT statements
  for (const [verseChirho, wordsChirho] of Object.entries(verseGlossesChirho).sort((a, b) => parseInt(a[0]) - parseInt(b[0]))) {
    sqlLinesChirho.push(`-- Verse ${verseChirho}`);

    for (const { wordId, gloss } of wordsChirho) {
      // Escape single quotes in gloss
      const escapedGlossChirho = gloss.replace(/'/g, "''");

      // Skip untranslated words (those in brackets)
      if (gloss.startsWith('[') && gloss.endsWith(']')) {
        sqlLinesChirho.push(`-- UNTRANSLATED: ${wordId} = ${gloss}`);
        continue;
      }

      sqlLinesChirho.push(`INSERT INTO "MachineGloss" ("wordId", "languageId", "gloss", "source")`);
      sqlLinesChirho.push(`SELECT '${wordId}', l.id, '${escapedGlossChirho}', '${SOURCE}'`);
      sqlLinesChirho.push(`FROM "Language" l WHERE l.code = '${LANGUAGE_CODE}'`);
      sqlLinesChirho.push(`ON CONFLICT ("wordId", "languageId", "source") DO UPDATE SET gloss = EXCLUDED.gloss;`);
      sqlLinesChirho.push('');
    }
  }

  // Write chapter SQL file
  const fileNameChirho = `1sa-${chapterNumChirho.toString().padStart(2, '0')}-swa-chirho.sql`;
  writeFileSync(`${outputDirChirho}/${fileNameChirho}`, sqlLinesChirho.join('\n'));
  console.log(`Generated ${fileNameChirho} with ${Object.keys(glossesMapChirho).length} words`);
}

// Generate combined SQL file
console.log('\nGenerating combined SQL file...');
const combinedSqlChirho: string[] = [sqlHeaderChirho];
combinedSqlChirho.push('-- Combined file for all 31 chapters of 1 Samuel');
combinedSqlChirho.push(`-- Total words: ${Object.keys(glossesChirho).length}`);
combinedSqlChirho.push('');

let translatedCountChirho = 0;
let untranslatedCountChirho = 0;

for (const [wordIdChirho, glossChirho] of Object.entries(glossesChirho)) {
  const gloss = glossChirho as string;

  if (gloss.startsWith('[') && gloss.endsWith(']')) {
    untranslatedCountChirho++;
    continue;
  }

  translatedCountChirho++;
  const escapedGlossChirho = gloss.replace(/'/g, "''");

  combinedSqlChirho.push(`INSERT INTO "MachineGloss" ("wordId", "languageId", "gloss", "source")`);
  combinedSqlChirho.push(`SELECT '${wordIdChirho}', l.id, '${escapedGlossChirho}', '${SOURCE}'`);
  combinedSqlChirho.push(`FROM "Language" l WHERE l.code = '${LANGUAGE_CODE}'`);
  combinedSqlChirho.push(`ON CONFLICT ("wordId", "languageId", "source") DO UPDATE SET gloss = EXCLUDED.gloss;`);
  combinedSqlChirho.push('');
}

writeFileSync(`${outputDirChirho}/1sa-all-swa-chirho.sql`, combinedSqlChirho.join('\n'));

console.log(`\nSummary:`);
console.log(`  Total words: ${Object.keys(glossesChirho).length}`);
console.log(`  Translated: ${translatedCountChirho}`);
console.log(`  Untranslated: ${untranslatedCountChirho}`);
console.log(`  Coverage: ${((translatedCountChirho / Object.keys(glossesChirho).length) * 100).toFixed(1)}%`);
console.log(`\nSQL files written to ${outputDirChirho}/`);
