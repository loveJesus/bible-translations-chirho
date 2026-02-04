// For God so loved the world, that He gave His only begotten Son,
// that all who believe in Him should not perish but have everlasting life.
// — John 3:16

/**
 * Generate Swahili (Kiswahili) SQL translations for Numbers 1-18
 * Uses the Swahili translation skill conventions:
 * - YHWH → Yahwe/BWANA
 * - Elohim → Mungu
 * - Adonai → Bwana
 * - Particles joined with n-dash (–)
 */

import { readFileSync, writeFileSync, existsSync } from "fs";

// Swahili Hebrew Lemma Lexicon
const swahiliLexiconChirho: Record<string, string> = {
  // Divine Names
  H3068: "Yahwe", // YHWH
  H0430: "Mungu", // Elohim
  H0136: "Bwana", // Adonai
  H0410: "Mungu", // El (God)
  H7706: "Mwenyezi", // Shaddai (Almighty)

  // Common Verbs
  H1696: "na–akasema", // speak (wayyiqtol)
  H0559: "kusema", // say
  H5375: "hesabuni", // lift up/count
  H6485: "hesabuni", // count/number
  H3318: "kutoka–kwao", // go out
  H5927: "kupanda", // go up
  H3381: "kushuka", // go down
  H7725: "kurudi", // return
  H3212: "kwenda", // go
  H0935: "kuja", // come
  H5414: "kutoa", // give
  H3947: "kuchukua", // take
  H7200: "kuona", // see
  H8085: "kusikia", // hear
  H1961: "ikawa", // be/become (hayah)
  H6213: "kufanya", // do/make
  H5647: "kutumika", // serve/work
  H7121: "kuita", // call
  H4191: "kufa", // die
  H2421: "kuishi", // live
  H3045: "kujua", // know
  H5674: "kupita", // pass over

  // Common Nouns
  H7218: "kichwa", // head
  H1121: "wana", // son/children
  H0001: "baba", // father
  H0517: "mama", // mother
  H0376: "mtu", // man
  H0802: "mke", // woman/wife
  H1004: "nyumba", // house
  H0776: "nchi", // land/earth
  H8064: "mbingu", // heavens
  H3117: "siku", // day
  H3915: "usiku", // night
  H4325: "maji", // water
  H3027: "mkono", // hand
  H5869: "jicho", // eye
  H6440: "uso", // face
  H3820: "moyo", // heart
  H5315: "nafsi", // soul
  H1697: "neno", // word/matter
  H5971: "watu", // people
  H4428: "mfalme", // king
  H3548: "kuhani", // priest
  H5030: "nabii", // prophet
  H4057: "jangwa", // wilderness/desert
  H0168: "hema", // tent
  H4150: "kukutana", // meeting/appointed time
  H2320: "mwezi", // month
  H8141: "mwaka", // year
  H4940: "koo", // family/clan
  H4294: "kabila", // tribe/staff
  H5712: "kusanyiko", // congregation
  H4557: "hesabu", // number
  H8034: "jina", // name
  H2145: "mwanaume", // male
  H1538: "fuvu", // skull (head count)
  H6635: "jeshi", // army/host
  H4264: "kambi", // camp
  H1714: "bendera", // banner/standard
  H3881: "Mlawi", // Levite

  // Numbers
  H0259: "moja", // one
  H8147: "mbili", // two
  H7969: "tatu", // three
  H0702: "nne", // four
  H2568: "tano", // five
  H8337: "sita", // six
  H7651: "saba", // seven
  H8083: "nane", // eight
  H8672: "tisa", // nine
  H6235: "kumi", // ten
  H6240: "kumi", // -teen (compound)
  H6242: "ishirini", // twenty
  H7970: "thelathini", // thirty
  H0705: "arobaini", // forty
  H2572: "hamsini", // fifty
  H8346: "sitini", // sixty
  H7657: "sabini", // seventy
  H8084: "themanini", // eighty
  H8673: "tisini", // ninety
  H3967: "mia", // hundred
  H0505: "elfu", // thousand
  H7239: "elfu–kumi", // ten thousand (myriad)
  H8145: "pili", // second

  // Prepositions & Particles
  H0413: "kwa", // to/unto
  H5921: "juu–ya", // upon
  H0854: "na", // with (direct object marker)
  H0853: "", // direct object marker (untranslated)
  H0996: "kati–ya", // between
  H5973: "pamoja–na", // with
  H6440: "mbele–ya", // before (face of)
  H0310: "nyuma–ya", // after/behind
  H8432: "kati–ya", // midst
  H5439: "kuzunguka", // around
  H3605: "wote", // all/every
  H4480: "kutoka", // from

  // Adjectives
  H2889: "safi", // clean/pure
  H2931: "najisi", // unclean
  H6944: "takatifu", // holy
  H2896: "nzuri", // good
  H7451: "mbaya", // bad/evil
  H1419: "mkubwa", // great
  H6996: "mdogo", // small
  H7227: "wengi", // many

  // Proper Names (Hebrew → Swahili)
  H4872: "Musa", // Moses
  H0175: "Haruni", // Aaron
  H3478: "Israeli", // Israel
  H4714: "Misri", // Egypt
  H5514: "Sinai", // Sinai
  H7205: "Reubeni", // Reuben
  H8095: "Simeoni", // Simeon
  H3063: "Yuda", // Judah
  H3485: "Isakari", // Issachar
  H2074: "Zabuloni", // Zebulun
  H0669: "Efraimu", // Ephraim
  H4519: "Manase", // Manasseh
  H1144: "Benyamini", // Benjamin
  H1835: "Dani", // Dan
  H0836: "Asheri", // Asher
  H1410: "Gadi", // Gad
  H5321: "Naftali", // Naphtali
  H3130: "Yosefu", // Joseph
  H3878: "Lawi", // Levi

  // Tribal Leaders (Numbers 1)
  H0468: "Elisuri", // Elizur
  H7707: "Shedeuri", // Shedeur
  H8017: "Shelumieli", // Shelumiel
  H6701: "Surishadai", // Zurishaddai
  H5177: "Nashoni", // Nahshon
  H5992: "Aminadabu", // Amminadab
  H5417: "Netaneli", // Nethanel
  H6686: "Suari", // Zuar
  H0446: "Eliabu", // Eliab
  H2497: "Heloni", // Helon
  H0476: "Elishama", // Elishama
  H5989: "Amihudi", // Ammihud
  H1583: "Gamalieli", // Gamaliel
  H6301: "Pedahsuri", // Pedahzur
  H0027: "Abidani", // Abidan
  H1441: "Gideoni", // Gideoni
  H0295: "Ahiezeri", // Ahiezer
  H5996: "Amishadai", // Ammishaddai
  H6295: "Pagieli", // Pagiel
  H5918: "Okrani", // Ocran
  H0299: "Ahira", // Ahira
  H5881: "Enani", // Enan

  // Additional terms for Numbers
  H2398: "kutenda–dhambi", // sin
  H2403: "dhambi", // sin offering
  H5930: "sadaka–ya–kuteketezwa", // burnt offering
  H4503: "sadaka–ya–nafaka", // grain offering
  H8002: "sadaka–ya–amani", // peace offering
  H0817: "sadaka–ya–hatia", // guilt offering
  H5262: "sadaka–ya–kinywaji", // drink offering
  H6999: "kufukiza", // burn incense
  H3722: "kufunika", // atone/cover
  H2891: "kutakasa", // purify
  H5139: "Mnaziri", // Nazirite
  H5088: "nadhiri", // vow
  H5145: "kujitenga", // separation (of Nazirite)
  H8081: "mafuta", // oil
  H3196: "divai", // wine
  H7941: "kileo", // strong drink
  H8593: "wembe", // razor
  H7724: "kunyoa", // shave
};

// Word-by-word translation function
function translateWordChirho(
  wordIdChirho: string,
  textChirho: string,
  lemmaIdChirho: string,
  grammarChirho: string
): string | null {
  // Check for direct lemma match
  const baseGlossChirho = swahiliLexiconChirho[lemmaIdChirho];

  // Handle prefixes based on grammar
  const hasConjWChirho = grammarChirho.includes("Conj-w");
  const hasPrepBChirho =
    grammarChirho.includes("Prep-b") || textChirho.startsWith("בְּ");
  const hasPrepLChirho =
    grammarChirho.includes("Prep-l") || textChirho.startsWith("לְ");
  const hasPrepMChirho =
    grammarChirho.includes("Prep-m") || textChirho.startsWith("מ");
  const hasArticleChirho = grammarChirho.includes("Art");
  const hasDirectObjChirho =
    grammarChirho.includes("DirObjM") || lemmaIdChirho === "H0853";

  // Direct object marker - skip or minimal
  if (hasDirectObjChirho) {
    return ""; // Often untranslated in Swahili
  }

  if (!baseGlossChirho) {
    // Return null for untranslatable (proper names not in lexicon)
    return null;
  }

  let glossChirho = baseGlossChirho;

  // Build prefix chain with n-dash
  const prefixesChirho: string[] = [];

  if (hasConjWChirho) {
    prefixesChirho.push("na");
  }

  if (hasPrepBChirho) {
    prefixesChirho.push("katika");
  } else if (hasPrepLChirho) {
    prefixesChirho.push("kwa");
  } else if (hasPrepMChirho) {
    prefixesChirho.push("kutoka");
  }

  if (hasArticleChirho && !glossChirho.includes("–")) {
    // Swahili doesn't have articles like English, but we can add demonstrative if needed
  }

  if (prefixesChirho.length > 0) {
    glossChirho = prefixesChirho.join("–") + "–" + glossChirho;
  }

  return glossChirho;
}

interface WordDataChirho {
  word_id: string;
  text: string;
  lemma_id: string;
  grammar: string;
}

// Generate SQL for a single chapter
function generateChapterSqlChirho(
  chapterNumChirho: number,
  wordsChirho: WordDataChirho[],
  glossesChirho: Record<string, string>
): string {
  const linesChirho: string[] = [
    "-- For God so loved the world, that He gave His only begotten Son,",
    "-- that all who believe in Him should not perish but have everlasting life.",
    "-- — John 3:16",
    "",
    "-- Swahili (Kiswahili) Translation for Numbers",
    "-- Language: swa",
    "-- Source: opus-4.5-chirho",
    `-- Generated: ${new Date().toISOString()}`,
    "",
    `-- Chapter ${chapterNumChirho}`,
    `-- Word count: ${wordsChirho.length}`,
    "",
  ];

  let currentVerseChirho = 0;

  for (const wordChirho of wordsChirho) {
    const verseNumChirho = parseInt(wordChirho.word_id.slice(5, 8));

    if (verseNumChirho !== currentVerseChirho) {
      currentVerseChirho = verseNumChirho;
      linesChirho.push(`-- Verse ${verseNumChirho}`);
    }

    const glossChirho = glossesChirho[wordChirho.word_id];

    if (glossChirho === undefined || glossChirho === null) {
      // Untranslated - add comment
      linesChirho.push(
        `-- UNTRANSLATED: ${wordChirho.word_id} = [${wordChirho.text}]`
      );
    } else if (glossChirho === "") {
      // Empty gloss (like direct object marker) - skip
      continue;
    } else {
      // Escape single quotes in gloss
      const escapedGlossChirho = glossChirho.replace(/'/g, "''");

      linesChirho.push(`INSERT INTO "MachineGloss" ("wordId", "languageId", "gloss", "source")
SELECT '${wordChirho.word_id}', l.id, '${escapedGlossChirho}', 'opus-4.5-chirho'
FROM "Language" l WHERE l.code = 'swa'
ON CONFLICT ("wordId", "languageId", "source") DO UPDATE SET gloss = EXCLUDED.gloss;
`);
    }
  }

  return linesChirho.join("\n");
}

// Main execution
async function mainChirho() {
  const toolResultsDirChirho =
    "/Users/hallelujah/.claude/projects/-Volumes-ENC-4TB-WDB-CHIRHO-dev-aleluya-friends-aleluya-andrewbeth-chirho-platform-chirho/b1ffc023-efc3-433f-9204-d297093b21f9/tool-results";
  const outputDirChirho =
    "/Volumes/ENC_4TB_WDB_CHIRHO/dev-aleluya/friends-aleluya/andrewbeth-chirho/platform-chirho/translations-chirho/numbers-swa-chirho/sql-chirho";

  // Map chapter numbers to their result file timestamps
  const chapterFilesChirho: Record<number, string> = {
    1: "mcp-bible-translation-chirho-get_chapter_chirho-1770161209727.txt",
    2: "mcp-bible-translation-chirho-get_chapter_chirho-1770161210291.txt",
    3: "mcp-bible-translation-chirho-get_chapter_chirho-1770161211346.txt",
    4: "mcp-bible-translation-chirho-get_chapter_chirho-1770161212360.txt",
    5: "mcp-bible-translation-chirho-get_chapter_chirho-1770161212902.txt",
    6: "mcp-bible-translation-chirho-get_chapter_chirho-1770161213457.txt",
  };

  for (const [chapterChirho, filenameChirho] of Object.entries(
    chapterFilesChirho
  )) {
    const chapterNumChirho = parseInt(chapterChirho);
    const filePathChirho = `${toolResultsDirChirho}/${filenameChirho}`;

    if (!existsSync(filePathChirho)) {
      console.log(`Skipping chapter ${chapterNumChirho} - file not found`);
      continue;
    }

    console.log(`Processing chapter ${chapterNumChirho}...`);

    // Read and parse the chapter data
    const rawDataChirho = readFileSync(filePathChirho, "utf-8");
    const jsonWrapperChirho = JSON.parse(rawDataChirho);
    const chapterDataChirho: WordDataChirho[] = JSON.parse(
      jsonWrapperChirho[0].text
    );

    // Deduplicate by word_id
    const uniqueWordsChirho = new Map<string, WordDataChirho>();
    for (const wordChirho of chapterDataChirho) {
      if (!uniqueWordsChirho.has(wordChirho.word_id)) {
        uniqueWordsChirho.set(wordChirho.word_id, wordChirho);
      }
    }

    const wordsChirho = Array.from(uniqueWordsChirho.values());
    console.log(`  Found ${wordsChirho.length} unique words`);

    // Generate glosses
    const glossesChirho: Record<string, string> = {};
    let translatedCountChirho = 0;
    let untranslatedCountChirho = 0;

    for (const wordChirho of wordsChirho) {
      const glossChirho = translateWordChirho(
        wordChirho.word_id,
        wordChirho.text,
        wordChirho.lemma_id,
        wordChirho.grammar
      );

      if (glossChirho !== null) {
        glossesChirho[wordChirho.word_id] = glossChirho;
        translatedCountChirho++;
      } else {
        untranslatedCountChirho++;
      }
    }

    console.log(
      `  Translated: ${translatedCountChirho}, Untranslated: ${untranslatedCountChirho}`
    );

    // Generate SQL
    const sqlChirho = generateChapterSqlChirho(
      chapterNumChirho,
      wordsChirho,
      glossesChirho
    );

    // Write output
    const outputPathChirho = `${outputDirChirho}/num-${String(chapterNumChirho).padStart(2, "0")}-swa-chirho.sql`;
    writeFileSync(outputPathChirho, sqlChirho);
    console.log(`  Wrote ${outputPathChirho}`);
  }

  console.log("\nDone!");
}

mainChirho().catch(console.error);
