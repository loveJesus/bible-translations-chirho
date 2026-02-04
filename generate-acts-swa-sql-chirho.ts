// For God so loved the world, that He gave His only begotten Son,
// that all who believe in Him should not perish but have everlasting life.
// — John 3:16

import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { join } from 'path';

const LANG_CODE_CHIRHO = 'swa';
const OUTPUT_DIR_CHIRHO = '/Volumes/ENC_4TB_WDB_CHIRHO/dev-aleluya/friends-aleluya/andrewbeth-chirho/platform-chirho/translations-chirho/acts-swa-chirho';
const SOURCE_CHIRHO = 'claude-opus-4.5-swa-chirho';

interface WordDataChirho {
  [wordId: string]: string; // wordId -> Greek text
}

interface GlossDataChirho {
  [wordId: string]: string; // wordId -> Swahili gloss
}

function generateSqlForWordChirho(wordIdChirho: string, glossChirho: string): string {
  return `-- ${wordIdChirho}: → "${glossChirho}" [${SOURCE_CHIRHO}]
WITH np AS (
  INSERT INTO phrase (language_id, created_at)
  SELECT (SELECT id FROM language WHERE code = '${LANG_CODE_CHIRHO}'), NOW()
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '${wordIdChirho}' AND p.language_id = (SELECT id FROM language WHERE code = '${LANG_CODE_CHIRHO}') AND p.deleted_at IS NULL
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '${wordIdChirho}' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, '${glossChirho.replace(/'/g, "''")}', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '${wordIdChirho}' AND p.language_id = (SELECT id FROM language WHERE code = '${LANG_CODE_CHIRHO}') AND p.deleted_at IS NULL
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
`;
}

function parseWordIdChirho(wordIdChirho: string): { chapterChirho: number; verseChirho: number } {
  // Word ID format: BBCCCVVVWW (book=44 for Acts, chapter, verse, word position)
  const chapterChirho = parseInt(wordIdChirho.substring(2, 5), 10);
  const verseChirho = parseInt(wordIdChirho.substring(5, 8), 10);
  return { chapterChirho, verseChirho };
}

function generateSqlFilesChirho(glossesChirho: GlossDataChirho): void {
  // Group by chapter and verse
  const versesChirho: Map<string, { wordIds: string[]; glosses: string[] }> = new Map();

  for (const [wordIdChirho, glossChirho] of Object.entries(glossesChirho)) {
    const { chapterChirho, verseChirho } = parseWordIdChirho(wordIdChirho);
    const keyChirho = `c${chapterChirho.toString().padStart(3, '0')}-v${verseChirho.toString().padStart(3, '0')}`;

    if (!versesChirho.has(keyChirho)) {
      versesChirho.set(keyChirho, { wordIds: [], glosses: [] });
    }
    versesChirho.get(keyChirho)!.wordIds.push(wordIdChirho);
    versesChirho.get(keyChirho)!.glosses.push(glossChirho);
  }

  // Generate SQL files for each verse
  let allSqlChirho = '';
  const headerChirho = `-- For God so loved the world, that He gave His only begotten Son,
-- that all who believe in Him should not perish but have everlasting life.
-- — John 3:16

`;

  for (const [keyChirho, dataChirho] of Array.from(versesChirho.entries()).sort()) {
    const verseGlossesChirho = dataChirho.glosses.join(' ');
    let sqlChirho = headerChirho;
    sqlChirho += `-- ACTS ${keyChirho} - SWA\n`;
    sqlChirho += `-- ${verseGlossesChirho}\n\n`;
    sqlChirho += 'BEGIN;\n';

    // Sort word IDs to maintain order
    const sortedPairsChirho = dataChirho.wordIds
      .map((id, i) => ({ id, gloss: dataChirho.glosses[i] }))
      .sort((a, b) => a.id.localeCompare(b.id));

    for (const pairChirho of sortedPairsChirho) {
      sqlChirho += generateSqlForWordChirho(pairChirho.id, pairChirho.gloss);
    }

    sqlChirho += 'COMMIT;\n';

    const filePathChirho = join(OUTPUT_DIR_CHIRHO, `${keyChirho}-chirho.sql`);
    writeFileSync(filePathChirho, sqlChirho);
    console.log(`Generated: ${filePathChirho}`);

    allSqlChirho += sqlChirho + '\n';
  }

  // Update the combined file
  const existingAllSqlPathChirho = join(OUTPUT_DIR_CHIRHO, 'all-verses-chirho.sql');
  if (existsSync(existingAllSqlPathChirho)) {
    const existingContentChirho = readFileSync(existingAllSqlPathChirho, 'utf-8');
    allSqlChirho = existingContentChirho + '\n' + allSqlChirho;
  }
  writeFileSync(existingAllSqlPathChirho, allSqlChirho);
  console.log(`Updated: ${existingAllSqlPathChirho}`);
}

// Read glosses from command line argument (JSON file path)
const argsChirho = process.argv.slice(2);
if (argsChirho.length === 0) {
  console.error('Usage: bun run generate-acts-swa-sql-chirho.ts <glosses-json-file>');
  process.exit(1);
}

const glossesFileChirho = argsChirho[0];
const glossesJsonChirho = readFileSync(glossesFileChirho, 'utf-8');
const glossesChirho: GlossDataChirho = JSON.parse(glossesJsonChirho);

console.log(`Processing ${Object.keys(glossesChirho).length} glosses...`);
generateSqlFilesChirho(glossesChirho);
console.log('Done!');
