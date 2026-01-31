#!/usr/bin/env bun
// For God so loved the world, that He gave His only begotten Son,
// that all who believe in Him should not perish but have everlasting life.
// — John 3:16

/**
 * Generate Javanese Krama SQL files for Leviticus 1-14
 *
 * Usage: bun run generate-lev-jav-sql-chirho.ts
 */

import { javaneseKramaVocabChirho } from "./javanese-krama-vocab-chirho";

const LANGUAGE_CODE = "jav";
const BOOK_NAME = "Leviticus";

interface WordDataChirho {
  word_id: string;
  text: string;
  lemma_id: string;
  verse_number: number;
  grammar?: string;
}

// Extended vocabulary with Krama register translations
const extendedVocabChirho: Record<string, string> = {
  ...javaneseKramaVocabChirho,

  // Additional lemmas found in Leviticus 1-14
  "H5254": "nyobi", // נסה test/try
  "H5462": "nutup", // סגר shut/close
  "H6544": "nguculi", // פרע uncover/let loose
  "H8130": "sengit", // שנא hate
  "H7911": "kesupen", // שכח forget
  "H4390": "kebak", // מלא be full
  "H6605": "mbikak", // פתח open
  "H5674": "langkung", // עבר pass over
  "H6030": "mangsuli", // ענה answer
  "H1245": "madosi", // בקש seek
  "H5307": "dhawah", // נפל fall
  "H5375": "ngangkat", // נשא lift/carry
  "H7725": "wangsul", // שוב return
  "H8354": "ngunjuk", // שתה drink
  "H3212": "tindak", // ילך go/walk
  "H5927": "minggah", // עלה go up
  "H3381": "mandhap", // ירד go down
  "H5975": "ngadeg", // עמד stand
  "H3427": "lenggah", // ישב sit/dwell
  "H7901": "sare", // שכב lie down
  "H6965": "wungu", // קום arise
  "H1980": "mlampah", // הלך walk
  "H0157": "tresna", // אהב love
  "H3372": "ajrih", // ירא fear
  "H8055": "bingah", // שמח rejoice
  "H1058": "nangis", // בכה weep
  "H6663": "leresipun", // צדק be righteous
  "H3423": "ngerèhaken", // ירש inherit/possess
  "H5483": "kapal", // סוס horse
  "H2543": "kuldi", // חמור donkey
  "H1581": "unta", // גמל camel
  "H6260a": "wedhus–jawa", // עתוד he-goat
  "H3532": "cempe", // כבש lamb
  "H5697": "pedet", // עגל calf
  "H7794": "lembu", // שור ox
  "H0352": "wedhus–lanang", // איל ram
  "H5553": "parang", // סלע rock
  "H1516": "lebak", // גיא valley
  "H2022": "redi", // הר mountain
  "H3220": "segara", // ים sea
  "H5104": "lèpèn", // נהר river
  "H4057": "ara–ara–samun", // מדבר wilderness
  "H0776": "bumi", // ארץ land/earth
  "H8064": "langit", // שמים heaven/sky
  "H3556": "lintang", // כוכב star
  "H3394": "rembulan", // ירח moon
  "H8121": "srengéngé", // שמש sun
  "H5051": "cahya", // נגה brightness
  "H7307": "roh", // רוח spirit/wind
  "H5397": "napas", // נשמה breath
  "H3820": "manah", // לב heart
  "H5315a": "jiwa", // נפש soul
  "H1870": "margi", // דרך way/road
  "H6662": "leresipun", // צדיק righteous
  "H2617": "sih–rahmat", // חסד lovingkindness
  "H0571": "kayektosan", // אמת truth
  "H7965": "tentrem", // שלום peace
  "H3519": "kamulyan", // כבוד glory
  "H8034": "asma", // שם name
  "H1697": "pangandika", // דבר word/matter
  "H4639": "padamelan", // מעשה work/deed
  "H3581": "kakiyatan", // כח strength/power
  "H2451": "kawicaksanan", // חכמה wisdom
  "H0998": "kawruh", // בינה understanding
  "H1847": "pangertosan", // דעת knowledge

  // Additional Leviticus-specific terms
  "H2398b": "nebus–dosa", // sin offering related
  "H0816": "lepat", // אשם be guilty
  "H5545": "ngapunten", // סלח forgive
  "H3727": "tutup–prejanjian", // כפרת mercy seat
  "H5079": "kenajisan", // נדה impurity
  "H2100": "medal", // זוב discharge/flow
  "H5144": "nazir", // נזר dedicate/separate
  "H6524": "mekar", // פרח blossom/break out
  "H7495": "nyarasaken", // רפא heal
  "H5352": "tanpa–lepat", // נקה be innocent/clean
  "H4229": "mbusak", // מחה wipe/blot out
  "H5595": "nyirnakaken", // ספה sweep away
  "H0622": "ngempalaken", // אסף gather
  "H6680": "dhawuh", // צוה command
  "H3423a": "ngerèhaken", // possess/inherit
  "H7093": "wekasan", // קץ end
  "H7223": "wiwitan", // ראשון first
  "H0314": "wingking", // אחרון last
  "H8145": "kaping–kalih", // שני second
  "H7992": "kaping–tiga", // שלישי third
  "H7243": "kaping–sekawan", // רביעי fourth
  "H2549": "kaping–gangsal", // חמישי fifth
  "H8345": "kaping–enem", // ששי sixth
  "H7637": "kaping–pitu", // שביעי seventh
  "H8066": "kaping–wolu", // שמיני eighth

  // Body parts and medical terms (important for Lev 13-14)
  "H7146": "gundhul", // קרחת bald spot
  "H1372": "gundhul–ngarep", // גבח forehead baldness
  "H5424": "kurap", // נתק scall/itch
  "H934": "bintik–putih", // בהרת bright spot
  "H5597": "keropéng", // ספחת scab
  "H6731": "kembang", // ציץ flower/plate
  "H4569": "panggonan–nyabrang", // מעבר ford/crossing
  "H5061a": "lelara", // plague/disease
  "H6879": "kena–kusta", // צרע be leprous
  "H2224": "mlethèk", // זרח rise/shine
  "H3835": "putih", // לבן white
  "H0122": "abrit", // אדם red
  "H6669": "jené", // צהב yellowish
  "H7835": "ireng", // שחר black
  "H3347": "cethek", // shallow
  "H6013": "jero", // עמק deep
  "H4217": "wétan", // מזרח east
  "H4628": "kulon", // מערב west
  "H5045": "kidul", // נגב south
  "H6828a": "lor", // north

  // Clothing and textiles
  "H8162": "kain–wulu–campuran", // שעטנז mixed fabric
  "H0948": "kain", // בוץ fine linen
  "H4480b": "saking", // from
  "H5921b": "wonten–ing", // on/upon (variant)
  "H8478": "sangandhapipun", // תחת under/instead
  "H5980": "sandhingipun", // עמד beside
  "H2007a": "punika–sedaya", // these
  "H5869a": "mirsani", // eye/see
  "H5315b": "tiyang", // person
  "H6440a": "ngarsanipun", // before/face
  "H1004a": "kulawarga", // household
  "H4428a": "prabu", // king
  "H4480c": "langkung–saking", // more than
};

function getGlossChirho(word: WordDataChirho): string {
  const lemma = word.lemma_id;

  // Handle special cases
  if (lemma === "H????") {
    // Paragraph markers (ס/פ) - return empty
    return "";
  }

  // Look up in vocabulary
  const gloss = extendedVocabChirho[lemma];
  if (gloss) {
    // Handle particles with attached forms
    if (lemma === "H0853") {
      // Direct object marker - only include if needed
      return "–"; // en-dash for attachment
    }
    return gloss;
  }

  // Fallback: return transliterated Hebrew
  console.warn(`Unknown lemma: ${lemma} (${word.text})`);
  return `[${word.text}]`;
}

function generateSqlBlockChirho(word: WordDataChirho, gloss: string): string {
  const escapedGloss = gloss.replace(/'/g, "''");

  return `-- ${word.word_id}: ${word.text} (${word.lemma_id}) → "${gloss}"
WITH np AS (
  INSERT INTO phrase (language_id, created_at)
  SELECT (SELECT id FROM language WHERE code = '${LANGUAGE_CODE}'), NOW()
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '${word.word_id}' AND p.language_id = (SELECT id FROM language WHERE code = '${LANGUAGE_CODE}') AND p.deleted_at IS NULL
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '${word.word_id}' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, '${escapedGloss}', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '${word.word_id}' AND p.language_id = (SELECT id FROM language WHERE code = '${LANGUAGE_CODE}') AND p.deleted_at IS NULL
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
`;
}

async function generateChapterSqlChirho(chapter: number, words: WordDataChirho[]): Promise<string> {
  // Group words by verse
  const verseMap = new Map<number, WordDataChirho[]>();
  for (const word of words) {
    const verse = word.verse_number;
    if (!verseMap.has(verse)) {
      verseMap.set(verse, []);
    }
    verseMap.get(verse)!.push(word);
  }

  // Generate verse line for header
  const verseSummaries: string[] = [];
  for (const [verseNum, verseWords] of [...verseMap.entries()].sort((a, b) => a[0] - b[0])) {
    const glosses = verseWords.map((w) => getGlossChirho(w)).filter((g) => g && g !== "–");
    verseSummaries.push(`-- v${verseNum}: ${glosses.join(" ")}`);
  }

  let sql = `-- For God so loved the world, that He gave His only begotten Son,
-- that all who believe in Him should not perish but have everlasting life.
-- — John 3:16

-- ============================================================================
-- ${BOOK_NAME.toUpperCase()} CHAPTER ${chapter} - Javanese Krama (jav) Translation
-- ============================================================================

BEGIN;

`;

  for (const word of words) {
    const gloss = getGlossChirho(word);
    if (gloss && gloss !== "") {
      sql += generateSqlBlockChirho(word, gloss);
      sql += "\n";
    }
  }

  sql += "COMMIT;\n";

  return sql;
}

async function main() {
  const inputFile = "/tmp/lev-all-words.jsonl";
  const outputDir = "/Volumes/ENC_4TB_WDB_CHIRHO/dev-aleluya/friends-aleluya/andrewbeth-chirho/platform-chirho/translations-chirho/lev-jav-chirho";

  // Read all words
  const fileContent = await Bun.file(inputFile).text();
  const lines = fileContent.trim().split("\n");
  const allWords: WordDataChirho[] = lines.map((line) => JSON.parse(line));

  console.log(`Loaded ${allWords.length} words`);

  // Group by chapter
  const chapterMap = new Map<number, WordDataChirho[]>();
  for (const word of allWords) {
    // Extract chapter from word_id (e.g., "0300100101" -> chapter 1)
    const chapter = parseInt(word.word_id.substring(3, 5), 10);
    if (!chapterMap.has(chapter)) {
      chapterMap.set(chapter, []);
    }
    chapterMap.get(chapter)!.push(word);
  }

  // Generate SQL for each chapter
  for (const [chapter, words] of [...chapterMap.entries()].sort((a, b) => a[0] - b[0])) {
    console.log(`Generating chapter ${chapter} (${words.length} words)...`);
    const sql = await generateChapterSqlChirho(chapter, words);
    const filename = `c${chapter.toString().padStart(3, "0")}-chirho.sql`;
    await Bun.write(`${outputDir}/${filename}`, sql);
    console.log(`  -> ${filename}`);
  }

  // Generate combined all-chapters file
  console.log("Generating combined file...");
  let allSql = `-- For God so loved the world, that He gave His only begotten Son,
-- that all who believe in Him should not perish but have everlasting life.
-- — John 3:16

-- ============================================================================
-- ${BOOK_NAME.toUpperCase()} CHAPTERS 1-14 - Javanese Krama (jav) Translation
-- ============================================================================
-- Total words: ${allWords.length}
-- Generated: ${new Date().toISOString()}
-- ============================================================================

BEGIN;

`;

  for (const word of allWords) {
    const gloss = getGlossChirho(word);
    if (gloss && gloss !== "") {
      allSql += generateSqlBlockChirho(word, gloss);
      allSql += "\n";
    }
  }

  allSql += "COMMIT;\n";

  await Bun.write(`${outputDir}/all-chapters-chirho.sql`, allSql);
  console.log("  -> all-chapters-chirho.sql");

  console.log("Done!");
}

main().catch(console.error);
