// For God so loved the world, that He gave His only begotten Son,
// that all who believe in Him should not perish but have everlasting life.
// — John 3:16

/**
 * Generate Swahili SQL files for Genesis 26-50
 *
 * Usage: bun run tools-chirho/generate-gen26-50-swa-sql-chirho.ts
 */

import { writeFileSync, mkdirSync, existsSync } from "fs";

// Hebrew lemma to Swahili translation map
const lemmaToSwaChirho: Record<string, string> = {
  // Divine names
  "H3068": "Yahwe",           // YHWH
  "H0430": "Mungu",           // Elohim
  "H0136": "Bwana",           // Adonai
  "H0410": "Mungu",           // El
  "H7706": "Mwenyezi",        // Shaddai

  // Additional common lemmas
  "H6547": "Farao",           // Pharaoh
  "H1004b": "nyumba",         // bayit - house
  "H0428": "hawa",            // elleh - these
  "H3837a": "Labani",         // Laban
  "H0441b": "mkubwa",         // aluph - chief
  "H0113": "bwana",           // adon - lord/master
  "H7760a": "akaweka",        // sim - to put/set
  "H3667a": "Kanaani",        // Canaan
  "H0369": "hakuna",          // ayin - there is not
  "H0589": "mimi",            // ani - I
  "H3701": "fedha",           // keseph - silver/money
  "H8478": "chini–ya",        // tachath - under
  "H7927": "Shekemu",         // Shechem
  "H5674a": "akavuka",        // abar - to pass over
  "H5066": "akakaribia",      // nagash - to draw near
  "H7462b": "akachunga",      // ra'ah - to shepherd
  "H7218a": "kichwa",         // rosh - head
  "H3426": "kuna",            // yesh - there is
  "H3201": "akaweza",         // yakol - to be able
  "H2492b": "akaota",         // chalam - to dream
  "H1992": "wao",             // hem - they
  "H0587": "sisi",            // anachnu - we
  "H0572": "mfuko",           // amtachath - sack
  "H0400": "chakula",         // okel - food
  "H7666": "akanunua",        // shabar - to buy grain
  "H6030b": "akajibu",        // anah - to answer
  "H4713": "Mmisri",          // Mitsri - Egyptian
  "H3206": "mtoto",           // yeled - child
  "H0127": "ardhi",           // adamah - ground
  "H2029": "akabeba–mimba",   // harah - to conceive
  "H1481a": "akakaa–kama–mgeni", // gur - to sojourn
  "H2416a": "hai",            // chay - living
  "H6229": "akagombana",      // asaq - to contend
  "H5668": "kwa–ajili–ya",    // baavur - for the sake of
  "H????": "",                // Unknown lemma - empty

  // Common verbs
  "H1961": "ikawa",           // hayah - to be
  "H0559": "akasema",         // amar - to say
  "H7200": "akaona",          // ra'ah - to see
  "H3212": "akaenda",         // halak - to go
  "H1980": "akaenda",         // halak - to walk
  "H5414": "akatoa",          // natan - to give
  "H8085": "akasikia",        // shama - to hear
  "H3427": "akakaa",          // yashab - to dwell
  "H7971": "akatuma",         // shalach - to send
  "H3947": "akachukua",       // laqach - to take
  "H5927": "akapanda",        // alah - to go up
  "H3381": "akashuka",        // yarad - to go down
  "H6213a": "akafanya",       // asah - to do/make
  "H1696": "akasema",         // dabar - to speak
  "H7725": "akarudi",         // shuv - to return
  "H3045": "akajua",          // yada - to know
  "H4191": "akafa",           // mut - to die
  "H2421": "akaishi",         // chayah - to live
  "H0935": "akaja",           // bo - to come
  "H3318": "akatoka",         // yatsa - to go out
  "H7121": "akaita",          // qara - to call
  "H6965b": "akasimama",      // qum - to rise
  "H7931": "akakaa",          // shakan - to dwell
  "H1288": "akabariki",       // barak - to bless
  "H7650": "akaapa",          // shaba - to swear
  "H8104": "akashika",        // shamar - to keep
  "H7235a": "akazidisha",     // rabah - to multiply
  "H3205": "akazaa",          // yalad - to bear/beget
  "H5375": "akainua",         // nasa - to lift
  "H4672": "akapata",         // matsa - to find
  "H5060": "akagusa",         // naga - to touch
  "H6912": "akazika",         // qabar - to bury
  "H2026": "akaua",           // harag - to kill
  "H8354": "akanywa",         // shathah - to drink
  "H0398": "akala",           // akal - to eat
  "H7901": "akalala",         // shakab - to lie down
  "H0157": "akapenda",        // ahab - to love
  "H8130": "akachukia",       // sane - to hate
  "H1058": "akalia",          // bakah - to weep
  "H3372": "akaogopa",        // yare - to fear
  "H5307": "akaanguka",       // naphal - to fall
  "H2505": "akagawa",         // chalaq - to divide
  "H5647": "akatumika",       // abad - to serve/work
  "H5674": "akavuka",         // abar - to cross over
  "H6030": "akajibu",         // anah - to answer
  "H7592": "akauliza",        // shaal - to ask
  "H5186": "akanyosha",       // natah - to stretch
  "H3498": "akabaki",         // yathar - to remain
  "H2142": "akakumbuka",      // zakar - to remember
  "H7812": "akasujudu",       // shachah - to bow down
  "H7665": "akavunja",        // shabar - to break
  "H3384": "akafundisha",     // yarah - to teach
  "H2820": "akanyima",        // chasak - to withhold
  "H6279": "akaomba",         // athar - to pray
  "H1129": "akajenga",        // banah - to build
  "H2734": "akakasirika",     // charah - to burn (anger)
  "H7462a": "akachunga",      // ra'ah - to shepherd
  "H7473": "mchunga",         // roeh - shepherd
  "H6680": "akaamuru",        // tsavah - to command
  "H5046": "akaarifu",        // nagad - to tell
  "H2658": "akachimba",       // chaphar - to dig
  "H5640a": "akaziba",        // satam - to stop up
  "H4390": "akajaza",         // male - to fill
  "H7378": "akagombana",      // riv - to contend
  "H6275": "akaondoka",       // ataq - to move
  "H7337": "akapanua",        // rachab - to enlarge
  "H6509": "akazaa–sana",     // parah - to be fruitful
  "H2583": "akapiga–kambi",   // chanah - to encamp
  "H3738b": "akachimba",      // karah - to dig
  "H7065": "akamwonea–wivu",  // qana - to be jealous
  "H6105a": "akawa–na–nguvu", // atsam - to be strong
  "H8259": "akatazama",       // shaqaph - to look down
  "H6711": "akacheza–na",     // tsachaq - to laugh/sport
  "H7925": "akaamka–mapema",  // shakam - to rise early
  "H3772": "akafanya–agano",  // karat - to cut (covenant)
  "H2232": "akapanda–mbegu", // zara - to sow
  "H1431": "akakua",          // gadal - to grow
  "H5182": "akashuka",        // nechath - to go down
  "H2859": "akawa–mkwe",      // chathan - to become in-law

  // Common nouns
  "H0776": "nchi",            // eretz - land/earth
  "H8064": "mbingu",          // shamayim - heaven
  "H3117": "siku",            // yom - day
  "H0376": "mtu",             // ish - man
  "H0802": "mwanamke",        // ishshah - woman/wife
  "H1121a": "mwana",          // ben - son
  "H1323": "binti",           // bat - daughter
  "H0001": "baba",            // ab - father
  "H0517": "mama",            // em - mother
  "H0251": "ndugu",           // ach - brother
  "H0269": "dada",            // achot - sister
  "H5650": "mtumwa",          // ebed - servant
  "H8198": "mjakazi",         // shiphchah - maidservant
  "H4428": "mfalme",          // melek - king
  "H5971a": "watu",           // am - people
  "H1471a": "mataifa",        // goy - nation
  "H1004": "nyumba",          // bayit - house
  "H5892a": "mji",            // ir - city
  "H5892b": "mji",            // ir - city
  "H4725": "mahali",          // maqom - place
  "H7704": "shamba",          // sadeh - field
  "H7704b": "shamba",         // sadeh - field
  "H2233": "uzao",            // zera - seed/offspring
  "H4325": "maji",            // mayim - water
  "H3899": "mkate",           // lechem - bread
  "H3605": "yote",            // kol - all
  "H6629": "kondoo",          // tson - flock
  "H1241": "ng'ombe",         // baqar - cattle
  "H1581": "ngamia",          // gamal - camel
  "H2543": "punda",           // chamor - donkey
  "H6963a": "sauti",          // qol - voice
  "H3027": "mkono",           // yad - hand
  "H5869a": "jicho",          // ayin - eye
  "H8034": "jina",            // shem - name
  "H1697": "neno",            // dabar - word
  "H3820": "moyo",            // leb - heart
  "H5315": "nafsi",           // nephesh - soul
  "H7307": "roho",            // ruach - spirit
  "H1870": "njia",            // derek - way
  "H4931": "amri",            // mishmereth - charge
  "H4687": "amri",            // mitswah - commandment
  "H2708": "sheria",          // chuqqah - statute
  "H8451": "torati",          // torah - law
  "H7621": "kiapo",           // shebuah - oath
  "H1285": "agano",           // berit - covenant
  "H1293": "baraka",          // berakah - blessing
  "H7458": "njaa",            // raab - famine
  "H0875": "kisima",          // beer - well
  "H3556": "nyota",           // kokab - star
  "H0168": "hema",            // ohel - tent
  "H2077": "dhabihu",         // zebach - sacrifice
  "H4196": "madhabahu",       // mizbeach - altar
  "H4264": "kambi",           // machaneh - camp
  "H6310": "kinywa",          // peh - mouth
  "H7218": "kichwa",          // rosh - head
  "H7272": "mguu",            // regel - foot
  "H1320": "mwili",           // basar - flesh
  "H6106": "mfupa",           // etsem - bone
  "H1818": "damu",            // dam - blood
  "H2472": "ndoto",           // chalom - dream
  "H4758": "sura",            // mareh - appearance
  "H2896a": "mzuri",          // tov - good
  "H2896b": "mzuri",          // tov - good
  "H7451a": "mbaya",          // ra - evil
  "H7451c": "mbaya",          // ra - evil
  "H5797": "nguvu",           // oz - strength
  "H2617": "huruma",          // chesed - kindness
  "H0571": "kweli",           // emet - truth
  "H4735": "mifugo",          // miqneh - livestock
  "H5657": "watumishi",       // avuddah - servants
  "H7227a": "nyingi",         // rab - many
  "H6083": "udongo",          // aphar - dust
  "H2474": "dirisha",         // chalon - window
  "H3915": "usiku",           // laylah - night
  "H4194": "kifo",            // mavet - death
  "H8141": "mwaka",           // shanah - year
  "H3627": "vifaa",           // keli - vessel/weapon
  "H8522": "podo",            // teli - quiver
  "H7198": "upinde",          // qesheth - bow
  "H4960": "karamu",          // mishteh - feast
  "H7965": "amani",           // shalom - peace
  "H0817": "hatia",           // asham - guilt
  "H8180": "vipimo",          // shearim - measures
  "H5158a": "bonde",          // nachal - valley/stream
  "H0182": "habari",          // odot - matter/news
  "H0423": "laana",           // alah - curse/oath
  "H1242": "asubuhi",         // boqer - morning
  "H6153": "jioni",           // ereb - evening
  "H2320": "mwezi",           // chodesh - month
  "H4786": "uchungu",         // morat - bitterness
  "H2850": "Mhiti",           // Chitti - Hittite
  "H8269": "mkuu",            // sar - captain/chief
  "H6635a": "jeshi",          // tsava - army
  "H4828": "rafiki",          // merea - friend

  // Particles and conjunctions
  "H0853": "",                // et - object marker (not translated)
  "H0854": "",                // et - with (object marker)
  "H0834a": "ambaye",         // asher - who/which
  "H0834d": "kama",           // asher - as
  "H3588a": "kwa–sababu",     // ki - because/for
  "H0518": "ikiwa",           // im - if
  "H0518a": "ikiwa",          // im - if
  "H3808": "si",              // lo - not
  "H0408": "usi–",            // al - not (negative command)
  "H6435": "isije",           // pen - lest
  "H2009": "tazama",          // hinneh - behold
  "H5973a": "pamoja–na",      // im - with
  "H5973b": "kutoka–kwetu",   // meimmanu - from with us
  "H0413": "kwa",             // el - to
  "H5921a": "juu–ya",         // al - upon
  "H4480": "kutoka",          // min - from
  "H4480a": "kuliko",         // min - than
  "H0996": "kati–ya",         // beyn - between
  "H8432": "katikati–ya",     // tavek - midst
  "H0310": "baada–ya",        // achar - after
  "H0310a": "baada–ya",       // achar - after
  "H6440": "mbele–ya",        // panim - before (face)
  "H5704": "mpaka",           // ad - until
  "H3651": "hivyo",           // ken - so/thus
  "H3651c": "hivyo",          // ken - so/thus
  "H0227": "ndipo",           // az - then
  "H4100": "nini",            // mah - what
  "H4310": "nani",            // mi - who
  "H0335": "wapi",            // ay - where
  "H5750": "bado",            // od - still/yet
  "H1571": "pia",             // gam - also
  "H7535": "tu",              // raq - only
  "H3966": "sana",            // meod - very
  "H2063": "hii",             // zot - this (f)
  "H2088": "huyu",            // zeh - this (m)
  "H1931": "yeye",            // hu/hi - he/she
  "H0859a": "wewe",           // attah - you (m)
  "H0859d": "ninyi",          // attem - you (pl)
  "H0595": "mimi",            // anoki - I
  "H0389": "hakika",          // ak - surely
  "H0349a": "vipi",           // eyk - how
  "H4069": "kwa–nini",        // maddua - why
  "H6258": "sasa",            // attah - now
  "H8033": "huko",            // sham - there
  "H4994": "tafadhali",       // na - please
  "H0312": "nyingine",        // acher - another
  "H7656": "saba",            // shivah - seven (noun)
  "H0905": "mbali–na",        // bad - besides
  "H0411": "hizi",            // el - these
  "H6118": "kwa–sababu",      // eqeb - because
  "H1157": "kupitia",         // bead - through
  "H4592": "karibu",          // kimat - almost

  // Proper names
  "H0085": "Abrahamu",        // Abraham
  "H3327": "Isaka",           // Isaac
  "H3290": "Yakobo",          // Jacob
  "H6215": "Esau",            // Esau
  "H3130": "Yosefu",          // Joseph
  "H3478": "Israeli",         // Israel
  "H7259": "Rebeka",          // Rebekah
  "H3812": "Lea",             // Leah
  "H7354": "Raheli",          // Rachel
  "H7205": "Rubeni",          // Reuben
  "H8095": "Simeoni",         // Simeon
  "H3878": "Lawi",            // Levi
  "H3063": "Yuda",            // Judah
  "H1835": "Dani",            // Dan
  "H5321": "Naftali",         // Naphtali
  "H1410": "Gadi",            // Gad
  "H0836": "Asheri",          // Asher
  "H3485": "Isakari",         // Issachar
  "H2074": "Zebuloni",        // Zebulun
  "H1144": "Benyamini",       // Benjamin
  "H3837": "Labani",          // Laban
  "H4714": "Misri",           // Egypt
  "H3667": "Kanaani",         // Canaan
  "H6430": "Wafilisti",       // Philistines
  "H0040": "Abimeleki",       // Abimelech
  "H1642": "Gerari",          // Gerar
  "H0884": "Beer-Sheba",      // Beersheba
  "H1008": "Betheli",         // Bethel
  "H2771": "Harani",          // Haran
  "H0276": "Ahuzathi",        // Ahuzzath
  "H6369": "Pikoli",          // Phicol
  "H6230": "Eseki",           // Esek
  "H7856": "Sitna",           // Sitnah
  "H7344": "Rehobothi",       // Rehoboth
  "H3067": "Yudithi",         // Judith
  "H0882": "Beeri",           // Beeri
  "H1315": "Basemathi",       // Basemath
  "H0356": "Eloni",           // Elon
  "H7223": "wa–kwanza",       // rishon - first
  "H1419a": "mkubwa",         // gadol - great
  "H1432": "akikua",          // gadel - growing
  "H0748": "zikawa–ndefu",    // arakhu - were long

  // Numbers
  "H0259": "moja",            // echad - one
  "H8147": "mbili",           // shenayim - two
  "H7969": "tatu",            // shalosh - three
  "H0702": "nne",             // arba - four
  "H2568": "tano",            // chamesh - five
  "H8337": "sita",            // shesh - six
  "H7651": "saba",            // sheba - seven
  "H8083": "nane",            // shemoneh - eight
  "H8672": "tisa",            // tesha - nine
  "H6235": "kumi",            // eser - ten
  "H6240": "kumi–na–",        // asar - teen
  "H6242": "ishirini",        // esrim - twenty
  "H7970": "thelathini",      // sheloshim - thirty
  "H0705": "arobaini",        // arbaim - forty
  "H2572": "hamsini",         // chamishim - fifty
  "H8346": "sitini",          // shishim - sixty
  "H7657": "sabini",          // shivim - seventy
  "H8084": "themanini",       // shemonim - eighty
  "H8673": "tisini",          // tishim - ninety
  "H3967": "mia",             // meah - hundred
  "H0505": "elfu",            // eleph - thousand
};

// Word data type
interface WordDataChirho {
  word_id: string;
  text: string;
  lemma_id: string;
  verse_number: number;
}

// Load the word data from the JSON file
async function loadWordDataChirho(): Promise<WordDataChirho[]> {
  const fileChirho = Bun.file("/tmp/gen-26-50-filtered-chirho.json");
  const dataChirho = await fileChirho.json();
  return dataChirho;
}

// Get Swahili gloss for a word based on lemma
function getSwahiliGlossChirho(wordChirho: WordDataChirho): string {
  const lemmaChirho = wordChirho.lemma_id;

  // Check if we have a direct translation
  if (lemmaToSwaChirho[lemmaChirho] !== undefined) {
    return lemmaToSwaChirho[lemmaChirho];
  }

  // For unknown lemmas, return the Hebrew text as placeholder
  // These will need manual review
  return `[${wordChirho.text}]`;
}

// Generate SQL for a single word
function generateWordSqlChirho(wordIdChirho: string, glossChirho: string, textChirho: string, lemmaChirho: string): string {
  // Skip empty glosses (like object markers)
  if (!glossChirho || glossChirho === "") {
    return `-- ${wordIdChirho}: ${textChirho} (${lemmaChirho}) → "" [object-marker]\n`;
  }

  // Escape single quotes in gloss
  const escapedGlossChirho = glossChirho.replace(/'/g, "''");

  return `-- ${wordIdChirho}: ${textChirho} (${lemmaChirho}) → "${glossChirho}" [opus-4.5-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at)
  SELECT (SELECT id FROM language WHERE code = 'swa'), NOW()
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '${wordIdChirho}' AND p.language_id = (SELECT id FROM language WHERE code = 'swa') AND p.deleted_at IS NULL
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '${wordIdChirho}' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, '${escapedGlossChirho}', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '${wordIdChirho}' AND p.language_id = (SELECT id FROM language WHERE code = 'swa') AND p.deleted_at IS NULL
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
`;
}

// Generate SQL file header
function generateHeaderChirho(chapterChirho: number): string {
  return `-- For God so loved the world, that He gave His only begotten Son,
-- that all who believe in Him should not perish but have everlasting life.
-- — John 3:16

-- GENESIS Chapter ${chapterChirho} - SWA (Swahili)
-- Generated by opus-4.5-chirho

BEGIN;
`;
}

// Generate SQL file footer
function generateFooterChirho(): string {
  return `COMMIT;
`;
}

// Main function
async function mainChirho() {
  console.log("Loading word data...");
  const wordsChirho = await loadWordDataChirho();
  console.log(`Loaded ${wordsChirho.length} words`);

  // Create output directory
  const outputDirChirho = "/Volumes/ENC_4TB_WDB_CHIRHO/dev-aleluya/friends-aleluya/andrewbeth-chirho/platform-chirho/translations-chirho/gen-swa-chirho";
  if (!existsSync(outputDirChirho)) {
    mkdirSync(outputDirChirho, { recursive: true });
  }

  // Group words by chapter
  const chapterWordsChirho: Map<number, WordDataChirho[]> = new Map();
  for (const wordChirho of wordsChirho) {
    // Extract chapter from word_id: 01026xxxxx -> 26
    const chapterChirho = parseInt(wordChirho.word_id.substring(2, 5));
    if (!chapterWordsChirho.has(chapterChirho)) {
      chapterWordsChirho.set(chapterChirho, []);
    }
    chapterWordsChirho.get(chapterChirho)!.push(wordChirho);
  }

  console.log(`Processing ${chapterWordsChirho.size} chapters...`);

  // Generate SQL for each chapter
  for (const [chapterChirho, wordsInChapterChirho] of chapterWordsChirho) {
    const chapterNumChirho = chapterChirho.toString().padStart(3, '0');
    const fileNameChirho = `c${chapterNumChirho}-chirho.sql`;
    const filePathChirho = `${outputDirChirho}/${fileNameChirho}`;

    let sqlChirho = generateHeaderChirho(chapterChirho);

    // Group by verse for better organization
    const verseWordsChirho: Map<number, WordDataChirho[]> = new Map();
    for (const wordChirho of wordsInChapterChirho) {
      if (!verseWordsChirho.has(wordChirho.verse_number)) {
        verseWordsChirho.set(wordChirho.verse_number, []);
      }
      verseWordsChirho.get(wordChirho.verse_number)!.push(wordChirho);
    }

    // Process each verse
    const sortedVersesChirho = Array.from(verseWordsChirho.keys()).sort((a, b) => a - b);
    for (const verseChirho of sortedVersesChirho) {
      const verseWordsListChirho = verseWordsChirho.get(verseChirho)!;
      sqlChirho += `\n-- Verse ${chapterChirho}:${verseChirho}\n`;

      for (const wordChirho of verseWordsListChirho) {
        const glossChirho = getSwahiliGlossChirho(wordChirho);
        sqlChirho += generateWordSqlChirho(wordChirho.word_id, glossChirho, wordChirho.text, wordChirho.lemma_id);
      }
    }

    sqlChirho += generateFooterChirho();

    writeFileSync(filePathChirho, sqlChirho);
    console.log(`Generated: ${fileNameChirho} (${wordsInChapterChirho.length} words)`);
  }

  // Generate combined file
  console.log("\nGenerating combined SQL file...");
  let combinedSqlChirho = `-- For God so loved the world, that He gave His only begotten Son,
-- that all who believe in Him should not perish but have everlasting life.
-- — John 3:16

-- GENESIS Chapters 26-50 - SWA (Swahili) - Combined
-- Generated by opus-4.5-chirho
-- Total words: ${wordsChirho.length}

`;

  const sortedChaptersChirho = Array.from(chapterWordsChirho.keys()).sort((a, b) => a - b);
  for (const chapterChirho of sortedChaptersChirho) {
    const chapterNumChirho = chapterChirho.toString().padStart(3, '0');
    const chapterFileChirho = Bun.file(`${outputDirChirho}/c${chapterNumChirho}-chirho.sql`);
    const chapterContentChirho = await chapterFileChirho.text();
    combinedSqlChirho += chapterContentChirho + "\n";
  }

  writeFileSync(`${outputDirChirho}/all-chapters-chirho.sql`, combinedSqlChirho);
  console.log(`Generated: all-chapters-chirho.sql`);

  // Summary statistics
  console.log("\n=== Summary ===");
  console.log(`Total words: ${wordsChirho.length}`);
  console.log(`Chapters: 26-50 (${chapterWordsChirho.size} chapters)`);
  console.log(`Output directory: ${outputDirChirho}`);

  // Count unknown lemmas
  let unknownCountChirho = 0;
  for (const wordChirho of wordsChirho) {
    if (lemmaToSwaChirho[wordChirho.lemma_id] === undefined) {
      unknownCountChirho++;
    }
  }
  console.log(`Words with known lemmas: ${wordsChirho.length - unknownCountChirho}`);
  console.log(`Words needing review: ${unknownCountChirho}`);
}

mainChirho().catch(console.error);
