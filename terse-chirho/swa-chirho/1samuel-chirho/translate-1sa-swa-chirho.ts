// For God so loved the world, that He gave His only begotten Son,
// that all who believe in Him should not perish but have everlasting life.
// — John 3:16

// Complete Swahili Translation for 1 Samuel
// Generates word-by-word interlinear translations

import { writeFileSync, readFileSync, mkdirSync, existsSync } from 'fs';
import { hebrewToSwahiliLexiconChirho } from './swahili-lexicon-chirho';
import { extendedSwahiliLexiconChirho } from './swahili-lexicon-extended-chirho';
import { finalSwahiliLexiconChirho } from './swahili-lexicon-final-chirho';

// Combined lexicon with all words for 1 Samuel
const extendedLexiconChirho: Record<string, string> = {
  ...hebrewToSwahiliLexiconChirho,
  ...extendedSwahiliLexiconChirho,
  ...finalSwahiliLexiconChirho,

  // Additional verbs found in 1 Samuel
  'ויפל': 'na–akaanguka',  // and he fell
  'ויפלו': 'na–wakaanguka',  // and they fell
  'נפל': 'alianguka',  // fell
  'וימת': 'na–akafa',  // and he died
  'וימתו': 'na–wakafa',  // and they died
  'מת': 'alikufa',  // died
  'ויקרב': 'na–akakaribia',  // and he drew near
  'ויקרבו': 'na–wakakaribia',  // and they drew near
  'וישתחו': 'na–akasujudu',  // and he bowed
  'וישתחוו': 'na–wakasujudu',  // and they bowed
  'ויברח': 'na–akakimbia',  // and he fled
  'ויברחו': 'na–wakakimbia',  // and they fled
  'ברח': 'alikimbia',  // fled
  'וירדף': 'na–akafuatia',  // and he pursued
  'וירדפו': 'na–wakafuatia',  // and they pursued
  'רדף': 'alifuatia',  // pursued
  'ויעמד': 'na–akasimama',  // and he stood
  'ויעמדו': 'na–wakasimama',  // and they stood
  'עמד': 'alisimama',  // stood
  'ויאכל': 'na–akakula',  // and he ate
  'ויאכלו': 'na–wakakula',  // and they ate
  'אכל': 'alikula',  // ate
  'וישת': 'na–akanywa',  // and he drank
  'וישתו': 'na–wakanywa',  // and they drank
  'שתה': 'alikunywa',  // drank
  'ויבך': 'na–akalia',  // and he wept
  'ויבכו': 'na–wakalia',  // and they wept
  'בכה': 'alilia',  // wept
  'וישכב': 'na–akalala',  // and he lay down
  'שכב': 'alilala',  // lay down
  'וישאל': 'na–akauliza',  // and he asked
  'וישאלו': 'na–wakauliza',  // and they asked
  'שאל': 'aliuliza',  // asked
  'ויכרת': 'na–akafanya–agano',  // and he made (covenant)
  'כרת': 'alifanya',  // cut/made
  'וישמח': 'na–akafurahi',  // and he rejoiced
  'וישמחו': 'na–wakafurahi',  // and they rejoiced
  'שמח': 'alifurahi',  // rejoiced
  'ויירא': 'na–akaogopa',  // and he feared
  'וייראו': 'na–wakaogopa',  // and they feared
  'ירא': 'aliogopa',  // feared
  'ויחר': 'na–akakasirika',  // and he was angry
  'חרה': 'alikasirika',  // was angry
  'ויחזק': 'na–akashika',  // and he took hold
  'ויחזקו': 'na–wakashika',  // and they took hold
  'חזק': 'alishika',  // took hold
  'ויאמץ': 'na–akatiwa–nguvu',  // and he was strengthened
  'אמץ': 'alitiwa–nguvu',  // was strengthened
  'ויסר': 'na–akaondoa',  // and he removed
  'ויסירו': 'na–wakaondoa',  // and they removed
  'סר': 'aliondoa',  // removed
  'ויהרג': 'na–akaua',  // and he killed
  'ויהרגו': 'na–wakaua',  // and they killed
  'הרג': 'aliua',  // killed
  'וימלט': 'na–akaponyoka',  // and he escaped
  'וימלטו': 'na–wakaponyoka',  // and they escaped
  'מלט': 'aliponyoka',  // escaped
  'נמלט': 'aliponyoka',  // escaped
  'ויצל': 'na–akaokoa',  // and he delivered
  'הציל': 'aliokoa',  // delivered
  'ויושע': 'na–akaokoa',  // and he saved
  'הושיע': 'aliokoa',  // saved
  'ויסף': 'na–akaendelea',  // and he continued
  'ויספו': 'na–wakaendelea',  // and they continued
  'יסף': 'aliendelea',  // continued
  'וישם': 'na–akaweka',  // and he put
  'וישימו': 'na–wakaweka',  // and they put
  'שם': 'aliweka',  // put
  'ויזעק': 'na–akapiga–kelele',  // and he cried out
  'ויזעקו': 'na–wakapiga–kelele',  // and they cried out
  'זעק': 'alipiga–kelele',  // cried out
  'צעק': 'alipiga–kelele',  // cried out
  'ויפגע': 'na–akakutana',  // and he met
  'פגע': 'alikutana',  // met
  'ויצום': 'na–akafunga',  // and he fasted
  'ויצומו': 'na–wakafunga',  // and they fasted
  'צום': 'alifunga',  // fasted
  'וימשח': 'na–akampaka–mafuta',  // and he anointed
  'משח': 'alipaka–mafuta',  // anointed
  'ויבחר': 'na–akachagua',  // and he chose
  'בחר': 'alichagua',  // chose
  'ויטב': 'na–ikapendeza',  // and it pleased
  'ייטב': 'itapendeza',  // will please
  'טוב': 'nzuri',  // good
  'ויחל': 'na–akaanza',  // and he began
  'החל': 'alianza',  // began
  'ויבקש': 'na–akatafuta',  // and he sought
  'בקש': 'alitafuta',  // sought
  'ויסב': 'na–akageuka',  // and he turned
  'ויסבו': 'na–wakageuka',  // and they turned
  'סבב': 'aligeuka',  // turned
  'ויגש': 'na–akakaribia',  // and he drew near
  'נגש': 'alikaribia',  // drew near
  'ויחבא': 'na–akajificha',  // and he hid
  'ויחבאו': 'na–wakajificha',  // and they hid
  'חבא': 'alijificha',  // hid
  'נחבא': 'alijificha',  // hid
  'ויבקע': 'na–akapasua',  // and he split
  'בקע': 'alipasua',  // split
  'וישקף': 'na–akaangalia',  // and he looked down
  'ויפשט': 'na–akavua',  // and he stripped
  'פשט': 'alivua',  // stripped
  'ויגלח': 'na–akanyoa',  // and he shaved
  'גלח': 'alinyoa',  // shaved
  'וינס': 'na–akakimbia',  // and he fled
  'נס': 'alikimbia',  // fled
  'ויסע': 'na–akasafiri',  // and he journeyed
  'ויסעו': 'na–wakasafiri',  // and they journeyed
  'נסע': 'alisafiri',  // journeyed
  'ויעל': 'na–akapanda',  // and he went up
  'ויעלו': 'na–wakapanda',  // and they went up
  'עלה': 'alipanda',  // went up
  'וירד': 'na–akashuka',  // and he went down
  'וירדו': 'na–wakashuka',  // and they went down
  'ירד': 'alishuka',  // went down
  'ויפן': 'na–akageuka',  // and he turned
  'ויפנו': 'na–wakageuka',  // and they turned
  'פנה': 'aligeuka',  // turned

  // Additional nouns
  'חרב': 'upanga',  // sword
  'החרב': 'upanga',  // the sword
  'חנית': 'mkuki',  // spear
  'החנית': 'mkuki',  // the spear
  'קשת': 'upinde',  // bow
  'הקשת': 'upinde',  // the bow
  'מגן': 'ngao',  // shield
  'כובע': 'kofia',  // helmet
  'שריון': 'deraya',  // armor
  'אבן': 'jiwe',  // stone
  'אבנים': 'mawe',  // stones
  'סוס': 'farasi',  // horse
  'סוסים': 'farasi',  // horses
  'חמור': 'punda',  // donkey
  'חמורים': 'punda',  // donkeys
  'אתון': 'punda',  // she-donkey
  'צאן': 'kondoo',  // flock/sheep
  'הצאן': 'kondoo',  // the flock
  'בקר': 'ng\'ombe',  // cattle
  'הבקר': 'ng\'ombe',  // the cattle
  'שור': 'ng\'ombe',  // ox
  'שוורים': 'ng\'ombe',  // oxen
  'כלב': 'mbwa',  // dog
  'מים': 'maji',  // water
  'המים': 'maji',  // the water
  'יין': 'divai',  // wine
  'היין': 'divai',  // the wine
  'שמן': 'mafuta',  // oil
  'דם': 'damu',  // blood
  'הדם': 'damu',  // the blood
  'בשר': 'nyama',  // flesh/meat
  'הבשר': 'nyama',  // the flesh
  'עצם': 'mfupa',  // bone
  'עצמות': 'mifupa',  // bones
  'ראש': 'kichwa',  // head
  'הראש': 'kichwa',  // the head
  'ראשו': 'kichwa–chake',  // his head
  'פנים': 'uso',  // face
  'פניו': 'uso–wake',  // his face
  'עין': 'jicho',  // eye
  'עיניו': 'macho–yake',  // his eyes
  'עינים': 'macho',  // eyes
  'אזן': 'sikio',  // ear
  'אזני': 'masikio–yangu',  // my ears
  'פה': 'kinywa',  // mouth
  'פיו': 'kinywa–chake',  // his mouth
  'לב': 'moyo',  // heart
  'לבו': 'moyo–wake',  // his heart
  'לבי': 'moyo–wangu',  // my heart
  'לבב': 'moyo',  // heart
  'לבבו': 'moyo–wake',  // his heart
  'כף': 'kiganja',  // palm/sole
  'רגל': 'mguu',  // foot
  'רגליו': 'miguu–yake',  // his feet
  'רגלים': 'miguu',  // feet
  'גוף': 'mwili',  // body
  'גויה': 'mwili',  // body
  'כח': 'nguvu',  // strength
  'כחו': 'nguvu–zake',  // his strength
  'נפשי': 'nafsi–yangu',  // my soul
  'נפשו': 'nafsi–yake',  // his soul
  'רוחו': 'roho–yake',  // his spirit
  'רוחי': 'roho–yangu',  // my spirit

  // Family terms
  'אח': 'ndugu',  // brother
  'אחיו': 'ndugu–yake',  // his brother
  'אחי': 'ndugu–yangu',  // my brother
  'אחיך': 'ndugu–yako',  // your brother
  'אחים': 'ndugu',  // brothers
  'אם': 'mama',  // mother
  'אמו': 'mama–yake',  // his mother
  'אמי': 'mama–yangu',  // my mother
  'בת': 'binti',  // daughter
  'בתו': 'binti–yake',  // his daughter
  'בתי': 'binti–yangu',  // my daughter
  'בנות': 'binti',  // daughters
  'אשתו': 'mke–wake',  // his wife
  'אשתי': 'mke–wangu',  // my wife
  'נשים': 'wake',  // wives/women

  // Places and Geography
  'הר': 'mlima',  // mountain
  'ההר': 'mlima',  // the mountain
  'הרים': 'milima',  // mountains
  'גבעה': 'kilima',  // hill
  'הגבעה': 'kilima',  // the hill
  'עמק': 'bonde',  // valley
  'הים': 'bahari',  // the sea
  'ים': 'bahari',  // sea
  'נהר': 'mto',  // river
  'נחל': 'kijito',  // stream/wadi
  'באר': 'kisima',  // well
  'מערה': 'pango',  // cave
  'המערה': 'pango',  // the cave
  'סלע': 'mwamba',  // rock
  'הסלע': 'mwamba',  // the rock
  'עץ': 'mti',  // tree
  'העץ': 'mti',  // the tree
  'עצים': 'miti',  // trees
  'אשל': 'mti',  // tamarisk tree
  'כרם': 'shamba–la–mizabibu',  // vineyard
  'שער': 'lango',  // gate
  'השער': 'lango',  // the gate
  'חומה': 'ukuta',  // wall
  'החומה': 'ukuta',  // the wall
  'דלת': 'mlango',  // door
  'הדלת': 'mlango',  // the door
  'חדר': 'chumba',  // room
  'החדר': 'chumba',  // the room
  'גג': 'paa',  // roof
  'הגג': 'paa',  // the roof

  // Time words
  'עולם': 'milele',  // forever/eternity
  'לעולם': 'milele',  // forever
  'בקר': 'asubuhi',  // morning
  'הבקר': 'asubuhi',  // the morning
  'ערב': 'jioni',  // evening
  'הערב': 'jioni',  // the evening
  'לילה': 'usiku',  // night
  'הלילה': 'usiku',  // the night/tonight
  'שנה': 'mwaka',  // year
  'שנים': 'miaka',  // years
  'חדש': 'mwezi',  // month
  'חדשים': 'miezi',  // months
  'שבוע': 'juma',  // week
  'ימים': 'siku',  // days
  'היום': 'leo',  // today
  'מחר': 'kesho',  // tomorrow
  'אתמול': 'jana',  // yesterday
  'עת': 'wakati',  // time

  // War and Military
  'מלחמה': 'vita',  // war
  'המלחמה': 'vita',  // the war
  'למלחמה': 'vitani',  // to war
  'צבא': 'jeshi',  // army
  'הצבא': 'jeshi',  // the army
  'מחנה': 'kambi',  // camp
  'המחנה': 'kambi',  // the camp
  'אויב': 'adui',  // enemy
  'אויביו': 'maadui–wake',  // his enemies
  'אויבי': 'maadui–zangu',  // my enemies
  'אויביך': 'maadui–zako',  // your enemies
  'שלל': 'nyara',  // spoil/plunder
  'השלל': 'nyara',  // the spoil
  'חיל': 'jeshi',  // army/valor
  'גבור': 'shujaa',  // mighty man
  'גבורים': 'mashujaa',  // mighty men

  // Religious terms
  'זבח': 'dhabihu',  // sacrifice
  'הזבח': 'dhabihu',  // the sacrifice
  'עולה': 'sadaka–ya–kuteketezwa',  // burnt offering
  'מזבח': 'madhabahu',  // altar
  'המזבח': 'madhabahu',  // the altar
  'אפוד': 'efodi',  // ephod
  'האפוד': 'efodi',  // the ephod
  'תרפים': 'sanamu',  // teraphim/idols
  'תרפים': 'sanamu',  // idols
  'ברית': 'agano',  // covenant
  'הברית': 'agano',  // the covenant
  'חטאת': 'dhambi',  // sin
  'חטא': 'dhambi',  // sin
  'עון': 'uovu',  // iniquity
  'תפלה': 'maombi',  // prayer
  'נדר': 'nadhiri',  // vow
  'הנדר': 'nadhiri',  // the vow
  'קדש': 'takatifu',  // holy
  'קדוש': 'mtakatifu',  // holy one
  'ברך': 'alibariki',  // blessed
  'ויברך': 'na–akabariki',  // and he blessed
  'ברכה': 'baraka',  // blessing
  'קלל': 'alilaani',  // cursed
  'קללה': 'laana',  // curse
  'טהור': 'safi',  // clean/pure
  'טמא': 'najisi',  // unclean

  // Proper names - Places
  'רמה': 'Rama',  // Ramah
  'הרמה': 'Rama',  // the Ramah
  'גלגל': 'Gilgali',  // Gilgal
  'הגלגל': 'Gilgali',  // the Gilgal
  'בגלגל': 'katika–Gilgali',  // in Gilgal
  'מצפה': 'Mispa',  // Mizpah
  'המצפה': 'Mispa',  // the Mizpah
  'במצפה': 'katika–Mispa',  // in Mizpah
  'שילה': 'Shilo',  // Shiloh
  'שילו': 'Shilo',  // Shiloh
  'בשילו': 'katika–Shilo',  // in Shiloh
  'בשלה': 'katika–Shilo',  // in Shiloh
  'גבעה': 'Gibea',  // Gibeah
  'הגבעה': 'Gibea',  // the Gibeah
  'בגבעה': 'katika–Gibea',  // in Gibeah
  'גבעון': 'Gibeoni',  // Gibeon
  'בית': 'Bethlehemu',  // Bethlehem (as part of compound)
  'לחם': 'Lehemu',  // Lehem (as part of compound)
  'בית לחם': 'Bethlehemu',  // Bethlehem
  'נב': 'Nobu',  // Nob
  'בנב': 'katika–Nobu',  // in Nob
  'ציקלג': 'Siklagi',  // Ziklag
  'בציקלג': 'katika–Siklagi',  // in Ziklag
  'גת': 'Gathi',  // Gath
  'בגת': 'katika–Gathi',  // in Gath
  'קעילה': 'Keila',  // Keilah
  'בקעילה': 'katika–Keila',  // in Keilah
  'עין גדי': 'En-Gedi',  // En-gedi
  'חברון': 'Hebroni',  // Hebron
  'בחברון': 'katika–Hebroni',  // in Hebron
  'יהודה': 'Yuda',  // Judah
  'ביהודה': 'katika–Yuda',  // in Judah
  'בנימן': 'Benyamini',  // Benjamin
  'בנימין': 'Benyamini',  // Benjamin
  'אפרים': 'Efraimu',  // Ephraim
  'באפרים': 'katika–Efraimu',  // in Ephraim
  'מואב': 'Moabu',  // Moab
  'במואב': 'katika–Moabu',  // in Moab
  'אדום': 'Edomu',  // Edom
  'באדום': 'katika–Edomu',  // in Edom
  'ירושלם': 'Yerusalemu',  // Jerusalem

  // Additional proper names - People
  'אלקנה': 'Elkana',  // Elkanah
  'פנינה': 'Penina',  // Peninnah
  'חפני': 'Hofni',  // Hophni
  'פינחס': 'Finehasi',  // Phinehas
  'פנחס': 'Finehasi',  // Phinehas
  'אגג': 'Agagi',  // Agag
  'עמלקי': 'Mwamaleki',  // Amalekite
  'עמלקים': 'Waamaleki',  // Amalekites
  'קיש': 'Kishi',  // Kish
  'אבינדב': 'Abinadabu',  // Abinadab
  'אלעזר': 'Eleazari',  // Eleazar
  'אחיה': 'Ahiya',  // Ahiah
  'אחימלך': 'Ahimeleki',  // Ahimelech
  'אביתר': 'Abiathari',  // Abiathar
  'דאג': 'Doegi',  // Doeg
  'האדמי': 'Mwedomu',  // the Edomite
  'גלית': 'Goliathi',  // Goliath
  'מיכל': 'Mikali',  // Michal
  'מרב': 'Merabu',  // Merab
  'אבישי': 'Abishai',  // Abishai
  'יואב': 'Yoabu',  // Joab
  'צרויה': 'Seruya',  // Zeruiah
  'אביגיל': 'Abigaili',  // Abigail

  // Adjectives and descriptors
  'גדול': 'kubwa',  // great
  'קטן': 'ndogo',  // small
  'הקטן': 'ndogo',  // the small
  'רב': 'nyingi',  // many/much
  'רבים': 'wengi',  // many
  'מעט': 'kidogo',  // few/little
  'ישר': 'nyofu',  // straight/upright
  'רע': 'mbaya',  // evil/bad
  'הרע': 'mbaya',  // the evil
  'רעה': 'mbaya',  // evil (f)
  'חזק': 'nguvu',  // strong
  'חזקים': 'wenye–nguvu',  // strong ones
  'חלש': 'dhaifu',  // weak
  'חכם': 'mwenye–hekima',  // wise
  'חכמה': 'hekima',  // wisdom
  'צדיק': 'mwenye–haki',  // righteous
  'רשע': 'mwovu',  // wicked
  'נאמן': 'mwaminifu',  // faithful
  'אמת': 'kweli',  // truth
  'שקר': 'uongo',  // lie/falsehood
  'חדש': 'mpya',  // new
  'ישן': 'zamani',  // old
  'חי': 'hai',  // alive
  'מת': 'amekufa',  // dead
  'המתים': 'waliokufa',  // the dead
  'מלא': 'kamili',  // full
  'ריק': 'tupu',  // empty
  'סגור': 'imefungwa',  // closed
  'פתוח': 'wazi',  // open

  // Question words
  'מדוע': 'kwa–nini',  // why?
  'איך': 'vipi',  // how?
  'איפה': 'wapi',  // where?
  'אנה': 'wapi',  // where?
  'מתי': 'lini',  // when?
  'כמה': 'kiasi–gani',  // how much/many?

  // Misc common words
  'שלום': 'amani',  // peace
  'השלום': 'amani',  // the peace
  'לשלום': 'kwa–amani',  // in peace
  'בשלום': 'kwa–amani',  // in peace
  'חסד': 'neema',  // mercy/kindness
  'אהבה': 'upendo',  // love
  'שנאה': 'chuki',  // hatred
  'יראה': 'hofu',  // fear
  'שמחה': 'furaha',  // joy
  'עצב': 'huzuni',  // grief
  'כעס': 'hasira',  // anger
  'קנאה': 'wivu',  // jealousy
  'תקוה': 'tumaini',  // hope
  'אמונה': 'imani',  // faith
  'תשובה': 'toba',  // repentance
  'סליחה': 'msamaha',  // forgiveness
  'משפט': 'hukumu',  // judgment
  'צדק': 'haki',  // righteousness
  'חוק': 'sheria',  // law/statute
  'מצוה': 'amri',  // commandment
  'תורה': 'sheria',  // law/Torah
  'נבואה': 'unabii',  // prophecy
  'חזון': 'maono',  // vision
  'חלום': 'ndoto',  // dream
  'משיח': 'mtiwa–mafuta',  // anointed one
};

// Clean Hebrew text (remove cantillation marks)
function cleanHebrewChirho(textChirho: string): string {
  return textChirho
    .replace(/[\u0591-\u05C7]/g, '')  // Remove cantillation marks
    .replace(/׃/g, '')  // Remove sof pasuq
    .trim();
}

// Get Swahili gloss for a Hebrew word
function getSwahiliGlossChirho(hebrewChirho: string, wordIdChirho: string): string {
  // Try exact match first
  if (extendedLexiconChirho[hebrewChirho]) {
    return extendedLexiconChirho[hebrewChirho];
  }

  // Try without cantillation
  const cleanChirho = cleanHebrewChirho(hebrewChirho);
  if (extendedLexiconChirho[cleanChirho]) {
    return extendedLexiconChirho[cleanChirho];
  }

  // Return bracketed form for untranslated
  return `[${cleanChirho}]`;
}

// Main function
async function main() {
  console.log('Loading 1 Samuel Hebrew words...');

  // Read the words
  const wordsRawChirho = readFileSync('/tmp/1sa-words.json', 'utf8');
  const wordsChirho: Record<string, string> = JSON.parse(wordsRawChirho);

  console.log(`Total words: ${Object.keys(wordsChirho).length}`);

  // Generate glosses
  const glossesChirho: Record<string, string> = {};

  for (const [wordIdChirho, hebrewChirho] of Object.entries(wordsChirho)) {
    glossesChirho[wordIdChirho] = getSwahiliGlossChirho(hebrewChirho, wordIdChirho);
  }

  // Calculate coverage
  const totalChirho = Object.keys(glossesChirho).length;
  const translatedChirho = Object.values(glossesChirho).filter(g => !g.startsWith('[')).length;
  const coverageChirho = ((translatedChirho / totalChirho) * 100).toFixed(1);

  console.log(`Translated: ${translatedChirho}/${totalChirho} (${coverageChirho}%)`);

  // Find untranslated unique words
  const untranslatedSetChirho = new Set<string>();
  const untranslatedCountChirho: Record<string, number> = {};

  for (const glossChirho of Object.values(glossesChirho)) {
    if (glossChirho.startsWith('[')) {
      const wordChirho = glossChirho.slice(1, -1);
      untranslatedSetChirho.add(wordChirho);
      untranslatedCountChirho[wordChirho] = (untranslatedCountChirho[wordChirho] || 0) + 1;
    }
  }

  console.log(`Unique untranslated: ${untranslatedSetChirho.size}`);

  // Show top untranslated by frequency
  const sortedUntranslatedChirho = Object.entries(untranslatedCountChirho)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 50);

  console.log('\nTop 50 untranslated words (by frequency):');
  sortedUntranslatedChirho.forEach(([word, count], i) => {
    console.log(`${i+1}. ${word} (${count})`);
  });

  // Save glosses
  const outputDirChirho = '/Volumes/ENC_4TB_WDB_CHIRHO/dev-aleluya/friends-aleluya/andrewbeth-chirho/platform-chirho/translations-chirho/1samuel-swa-chirho';

  writeFileSync(`${outputDirChirho}/glosses-swa-chirho.json`, JSON.stringify(glossesChirho, null, 2));
  console.log(`\nSaved glosses to ${outputDirChirho}/glosses-swa-chirho.json`);

  // Save untranslated words for manual review
  writeFileSync(`${outputDirChirho}/untranslated-words-chirho.json`, JSON.stringify(sortedUntranslatedChirho, null, 2));
  console.log(`Saved untranslated words to ${outputDirChirho}/untranslated-words-chirho.json`);
}

main().catch(console.error);
