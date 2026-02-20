// For God so loved the world, that He gave His only begotten Son,
// that all who believe in Him should not perish but have everlasting life.
// — John 3:16

// Comprehensive Hebrew-to-Swahili Lexicon for 1 Samuel
// Based on frequency analysis of all 13,462 words

export const hebrewToSwahiliLexiconChirho: Record<string, string> = {
  // ============ DIRECT OBJECT MARKER ============
  'את': '–',  // Direct object marker (most common: 408 times)
  'ואת': 'na–',  // And + DOM
  'אתו': 'yeye',  // him (DOM + suffix)
  'אתם': 'nyinyi',  // you (pl) / them
  'אתכם': 'nyinyi',  // you (pl, acc)
  'אתי': 'mimi',  // me (DOM + suffix)
  'אתה': 'wewe',  // you (m.sg)
  'אתך': 'wewe',  // you (acc)

  // ============ PREPOSITIONS ============
  'אל': 'kwa',  // to, toward (291 times)
  'אלי': 'kwangu',  // to me
  'אליו': 'kwake',  // to him
  'אליך': 'kwako',  // to you
  'אלהם': 'kwao',  // to them
  'על': 'juu–ya',  // upon, against
  'עלי': 'juu–yangu',  // upon me
  'עליו': 'juu–yake',  // upon him
  'עליך': 'juu–yako',  // upon you
  'עליהם': 'juu–yao',  // upon them
  'ועל': 'na–juu–ya',  // and upon
  'מן': 'kutoka',  // from
  'מכל': 'kutoka–kila',  // from all
  'מיד': 'kutoka–mkono–wa',  // from the hand of
  'עד': 'hadi',  // until (59 times)
  'ועד': 'na–hadi',  // and until
  'לפני': 'mbele–ya',  // before (44 times)
  'בלפני': 'mbele–ya',  // before
  'אחרי': 'baada–ya',  // after (34 times)
  'ואחרי': 'na–baada–ya',  // and after
  'תחת': 'chini–ya',  // under (10 times)
  'בין': 'kati–ya',  // between
  'בתוך': 'katikati–ya',  // in the midst of
  'עם': 'pamoja–na',  // with (30 times)
  'עמו': 'pamoja–naye',  // with him (21 times)
  'עמך': 'pamoja–nawe',  // with you
  'עמי': 'pamoja–nami',  // with me (11 times)

  // ============ CONJUNCTIONS ============
  'כי': 'kwa–sababu',  // because, that (246 times)
  'אשר': 'ambaye',  // who, which, that (199 times)
  'ולאשר': 'na–ambaye',  // and who/which
  'כאשר': 'kama–vile',  // as, when (20 times)
  'ואשר': 'na–ambaye',  // and who
  'או': 'au',  // or (13 times)
  'ואם': 'na–ikiwa',  // and if (13 times)
  'אם': 'ikiwa',  // if (42 times)
  'גם': 'pia',  // also (45 times)
  'וגם': 'na–pia',  // and also (14 times)
  'אך': 'lakini',  // but, only (10 times)

  // ============ NEGATION ============
  'לא': 'si',  // not (96 times)
  'ולא': 'na–si',  // and not (78 times)
  'אל': 'usi–',  // do not (negative imperative)
  'אין': 'hakuna',  // there is not (20 times)
  'ואין': 'na–hakuna',  // and there is not (12 times)

  // ============ DEMONSTRATIVES ============
  'הזה': 'hii',  // this (m) (56 times)
  'הזאת': 'hii',  // this (f)
  'ההוא': 'ile',  // that (m) (33 times)
  'ההיא': 'ile',  // that (f)
  'זה': 'hii',  // this (21 times)
  'זאת': 'hii',  // this (f)
  'אלה': 'hizi',  // these
  'האלה': 'hizi',  // these (25 times)

  // ============ PRONOUNS ============
  'הוא': 'yeye',  // he (43 times)
  'והוא': 'na–yeye',  // and he (13 times)
  'היא': 'yeye',  // she
  'הם': 'wao',  // they (m)
  'המה': 'wao',  // they (13 times)
  'הנה': 'wao',  // they (f)
  'אנכי': 'mimi',  // I (21 times)
  'אני': 'mimi',  // I (10 times)
  'ואני': 'na–mimi',  // and I (10 times)
  'נחנו': 'sisi',  // we
  'אנחנו': 'sisi',  // we
  'מי': 'nani',  // who? (26 times)
  'מה': 'nini',  // what? (32 times)
  'ומה': 'na–nini',  // and what?

  // ============ ADVERBS / PARTICLES ============
  'כל': 'kila',  // all, every (99 times)
  'וכל': 'na–kila',  // and all (25 times)
  'בכל': 'katika–kila',  // in all (20 times)
  'לכל': 'kwa–kila',  // for all
  'כה': 'hivyo',  // thus (18 times)
  'כן': 'hivyo',  // thus, so (20 times)
  'עתה': 'sasa',  // now (13 times)
  'ועתה': 'na–sasa',  // and now (32 times)
  'עוד': 'bado',  // still, yet (14 times)
  'שם': 'pale',  // there (40 times)
  'ושם': 'na–pale',  // and there (17 times)
  'הנה': 'tazama',  // behold (48 times)
  'והנה': 'na–tazama',  // and behold (29 times)
  'הנני': 'niko–hapa',  // here I am (10 times)
  'נא': 'tafadhali',  // please, I pray (34 times)
  'מאד': 'sana',  // very (31 times)
  'פה': 'hapa',  // here
  'למה': 'kwa–nini',  // why? (17 times)
  'ולמה': 'na–kwa–nini',  // and why? (10 times)
  'הלוא': 'je–si',  // is it not? (20 times)
  'טוב': 'nzuri',  // good (14 times)
  'רעה': 'mbaya',  // evil (12 times)

  // ============ DATIVE / INDIRECT OBJECT ============
  'לו': 'kwake',  // to him (88 times)
  'לי': 'kwangu',  // to me (40 times)
  'לך': 'kwako',  // to you (54 times)
  'להם': 'kwao',  // to them (16 times)
  'לנו': 'kwetu',  // to us (23 times)
  'לכם': 'kwenu',  // to you (pl) (16 times)

  // ============ COMMON VERBS - BASIC ============
  // ויאמר - and he said (249 times)
  'ויאמר': 'na–akasema',
  'ויאמרו': 'na–wakasema',  // and they said (35 times)
  'ותאמר': 'na–akasema',  // and she said (17 times)
  'אמר': 'alisema',  // he said (22 times)
  'לאמר': 'akisema',  // saying (49 times)

  // ויהי - and it was (57 times)
  'ויהי': 'na–ikawa',
  'והיה': 'na–itakuwa',  // and it will be (16 times)
  'ותהי': 'na–ikawa',  // and she was (15 times)
  'היה': 'ilikuwa',  // was (20 times)
  'יהיה': 'itakuwa',  // will be
  'להיות': 'kuwa',  // to be

  // וילך - and he went (33 times)
  'וילך': 'na–akaenda',
  'וילכו': 'na–wakaenda',  // and they went (11 times)
  'הלך': 'alienda',  // went (10 times)
  'ילך': 'ataenda',  // will go
  'ללכת': 'kwenda',  // to go

  // ויבא - and he came (33 times)
  'ויבא': 'na–akaja',
  'ויבאו': 'na–wakaja',  // and they came (22 times)
  'בא': 'alikuja',  // came (24 times)
  'יבא': 'atakuja',  // will come
  'לבא': 'kuja',  // to come

  // ויקח - and he took (18 times)
  'ויקח': 'na–akachukua',
  'ויקחו': 'na–wakachukua',  // and they took
  'לקח': 'alichukua',  // took
  'יקח': 'atachukua',  // will take

  // ויקם - and he arose (21 times)
  'ויקם': 'na–akasimama',
  'ויקמו': 'na–wakasimama',  // and they arose
  'קם': 'alisimama',  // arose
  'קום': 'simama',  // arise!

  // וישב - and he returned/sat (18 times)
  'וישב': 'na–akakaa',
  'וישבו': 'na–wakakaa',  // and they sat
  'ישב': 'alikaa',  // sat
  'שב': 'kaa',  // sit/return

  // וישלח - and he sent (22 times)
  'וישלח': 'na–akatuma',
  'וישלחו': 'na–wakatuma',  // and they sent
  'שלח': 'alituma',  // sent
  'ישלח': 'atatuma',  // will send

  // ויען - and he answered (19 times)
  'ויען': 'na–akajibu',
  'ויענו': 'na–wakajibu',  // and they answered
  'ענה': 'alijibu',  // answered

  // ויקרא - and he called (15 times)
  'ויקרא': 'na–akaita',
  'ויקראו': 'na–wakaita',  // and they called
  'קרא': 'aliita',  // called
  'יקרא': 'ataita',  // will call

  // שמע - hear/heard (16 times)
  'שמע': 'alisikia',
  'וישמע': 'na–akasikia',  // and he heard (13 times)
  'וישמעו': 'na–wakasikia',  // and they heard
  'ישמע': 'atasikia',  // will hear
  'לשמע': 'kusikia',  // to hear

  // ויגד - and he told (11 times)
  'ויגד': 'na–akamwambia',
  'ויגידו': 'na–wakamwambia',  // and they told
  'הגיד': 'alimwambia',  // told
  'הגד': 'ambia',  // tell!

  // ויצא - and he went out (11 times)
  'ויצא': 'na–akatoka',
  'ויצאו': 'na–wakatoka',  // and they went out
  'יצא': 'alitoka',  // went out

  // ויך - and he struck (15 times)
  'ויך': 'na–akapiga',
  'ויכו': 'na–wakapiga',  // and they struck
  'הכה': 'alipiga',  // struck
  'יכה': 'atapiga',  // will strike

  // וירא - and he saw (14 times)
  'וירא': 'na–akaona',
  'ויראו': 'na–wakaona',  // and they saw
  'ראה': 'aliona',  // saw
  'יראה': 'ataona',  // will see

  // ויתן - and he gave (11 times)
  'ויתן': 'na–akatoa',
  'ויתנו': 'na–wakatoa',  // and they gave
  'נתן': 'alitoa',  // gave
  'יתן': 'atatoa',  // will give
  'תן': 'toa',  // give!

  // ויעבר - and he passed (11 times)
  'ויעבר': 'na–akapita',
  'ויעברו': 'na–wakapita',  // and they passed
  'עבר': 'alipita',  // passed

  // עשה - do/make (20 times)
  'עשה': 'alifanya',
  'יעשה': 'atafanya',  // will do (16 times)
  'ויעש': 'na–akafanya',  // and he did
  'ויעשו': 'na–wakafanya',  // and they did
  'עשית': 'ulifanya',  // you did
  'עשיתי': 'nilifanya',  // I did
  'לעשות': 'kufanya',  // to do

  // ידע - know (14 times)
  'ידע': 'alijua',
  'ידעתי': 'nilijua',  // I knew
  'ידעת': 'ulijua',  // you knew
  'יודע': 'anajua',  // knows
  'תדע': 'utajua',  // you will know

  // נשא - lift/carry (14 times)
  'נשא': 'alibeba',
  'וישא': 'na–akabeba',  // and he lifted
  'ישא': 'atabeba',  // will lift

  // דבר - word/speak (35 times as noun)
  'דבר': 'neno',  // word (35 times)
  'הדבר': 'neno',  // the word (14 times)
  'דברי': 'maneno–ya',  // words of (10 times)
  'הדברים': 'maneno',  // the words (12 times)
  'וידבר': 'na–akasema',  // and he spoke
  'דברתי': 'nilisema',  // I spoke
  'לדבר': 'kusema',  // to speak

  // ============ MAJOR PROPER NAMES ============
  // Main characters
  'שאול': 'Sauli',  // Saul (261 times)
  'ושאול': 'na–Sauli',  // and Saul (20 times)
  'לשאול': 'kwa–Sauli',  // to Saul (19 times)
  'דוד': 'Daudi',  // David (247 times)
  'ודוד': 'na–Daudi',  // and David (22 times)
  'לדוד': 'kwa–Daudi',  // to David (16 times)
  'שמואל': 'Samweli',  // Samuel (115 times)
  'ושמואל': 'na–Samweli',  // and Samuel (10 times)
  'יהונתן': 'Yonathani',  // Jonathan (39 times)
  'יונתן': 'Yonathani',  // Jonathan (21 times)
  'ישי': 'Yese',  // Jesse (24 times)
  'נבל': 'Nabali',  // Nabal (19 times)
  'אכיש': 'Akishi',  // Achish (19 times)
  'חנה': 'Hana',  // Hannah (10 times)
  'עלי': 'Eli',  // Eli (when name, not "upon me")
  'אבנר': 'Abneri',  // Abner
  'אביגיל': 'Abigaili',  // Abigail
  'גלית': 'Goliathi',  // Goliath

  // Divine names
  'יהוה': 'Yahwe',  // LORD (253 times)
  'ויהוה': 'na–Yahwe',  // and the LORD (13 times)
  'ליהוה': 'kwa–Yahwe',  // to the LORD (34 times)
  'ביהוה': 'katika–Yahwe',  // in the LORD (11 times)
  'אלהים': 'Mungu',  // God (34 times)
  'האלהים': 'Mungu',  // the God (24 times)
  'אלהי': 'Mungu–wa',  // God of (17 times)
  'אדני': 'Bwana–wangu',  // my lord (20 times)

  // Nations/peoples
  'ישראל': 'Israeli',  // Israel (128 times)
  'בישראל': 'katika–Israeli',  // in Israel (11 times)
  'פלשתים': 'Wafilisti',  // Philistines (91 times)
  'ופלשתים': 'na–Wafilisti',  // and Philistines (11 times)
  'הפלשתי': 'Mfilisti',  // the Philistine (32 times)
  'עמלק': 'Amaleki',  // Amalek (12 times)

  // ============ COMMON NOUNS ============
  // People
  'איש': 'mtu',  // man (88 times)
  'האיש': 'mtu',  // the man (14 times)
  'ואיש': 'na–mtu',  // and a man (11 times)
  'לאיש': 'kwa–mtu',  // to a man (11 times)
  'אנשי': 'watu–wa',  // men of (18 times)
  'ואנשיו': 'na–watu–wake',  // and his men (17 times)
  'אנשים': 'watu',  // men

  'בן': 'mwana',  // son (51 times)
  'בני': 'wana–wa',  // sons of (34 times)
  'בנו': 'mwanawe',  // his son (11 times)
  'בניו': 'wanawe',  // his sons (12 times)

  'העם': 'watu',  // the people (78 times)
  'עם': 'watu',  // people (30 times - context needed)

  'מלך': 'mfalme',  // king (30 times)
  'המלך': 'mfalme',  // the king (39 times)
  'למלך': 'kuwa–mfalme',  // to be king
  'וימלך': 'na–akatawala',  // and he reigned

  'הכהן': 'kuhani',  // the priest (17 times)
  'כהן': 'kuhani',  // priest

  'נער': 'kijana',  // young man (10 times)
  'הנער': 'kijana',  // the young man (15 times)

  'עבדך': 'mtumishi–wako',  // your servant (13 times)
  'עבדי': 'mtumishi–wangu',  // my servant (12 times)
  'עבד': 'mtumishi',  // servant

  'אשה': 'mke',  // woman/wife
  'האשה': 'mke',  // the woman (12 times)

  'אבי': 'baba–yangu',  // my father (20 times)
  'אביך': 'baba–yako',  // your father (14 times)
  'אב': 'baba',  // father

  'נפשך': 'nafsi–yako',  // your soul (12 times)
  'נפש': 'nafsi',  // soul

  // Body parts
  'יד': 'mkono',  // hand (11 times)
  'ביד': 'katika–mkono–wa',  // in the hand of (18 times)
  'בידו': 'mkononi–mwake',  // in his hand (14 times)
  'בידי': 'mkononi–mwangu',  // in my hand (12 times)
  'בעיני': 'machoni–pa',  // in the eyes of (12 times)
  'בעיניך': 'machoni–pako',  // in your eyes (11 times)

  // Objects/things
  'ארון': 'sanduku',  // ark (33 times)
  'בית': 'nyumba',  // house (25 times)
  'לחם': 'mkate',  // bread (22 times)
  'כלי': 'silaha',  // weapon/vessel
  'כליו': 'silaha–zake',  // his weapons (17 times)
  'חרב': 'upanga',  // sword
  'חנית': 'mkuki',  // spear
  'רומח': 'mkuki',  // spear

  // Places
  'ארץ': 'nchi',  // land (10 times)
  'הארץ': 'nchi',  // the land (15 times)
  'ארצה': 'ardhini',  // to the ground (12 times)
  'העיר': 'mji',  // the city (16 times)
  'עיר': 'mji',  // city
  'בשדה': 'shambani',  // in the field (11 times)
  'שדה': 'shamba',  // field
  'במדבר': 'jangwani',  // in the wilderness (12 times)
  'מדבר': 'jangwa',  // wilderness

  // Time
  'היום': 'leo',  // today/the day (54 times)
  'יום': 'siku',  // day
  'ביום': 'siku',  // in the day (33 times)
  'הימים': 'siku',  // the days (18 times)
  'בבקר': 'asubuhi',  // in the morning (12 times)
  'לילה': 'usiku',  // night

  // Other nouns
  'רוח': 'roho',  // spirit (14 times)
  'קול': 'sauti',  // voice
  'בקול': 'sauti–ya',  // in the voice of (11 times)
  'חי': 'hai',  // alive (17 times)

  // Numbers
  'אחד': 'mmoja',  // one (26 times)
  'שני': 'mbili',  // two
  'שלש': 'tatu',  // three
  'שלשת': 'watatu',  // three (10 times)
  'אלפים': 'elfu',  // thousands (11 times)
  'אלף': 'elfu',  // thousand
  'מאות': 'mia',  // hundreds (12 times)
  'מאה': 'mia',  // hundred

  // ============ SECTION MARKERS ============
  'ס': '---',  // setuma (paragraph break) (111 times)
  'פ': '---',  // pe (paragraph break) (60 times)

  // ============ SPECIAL CONSTRUCTS ============
  'דגון': 'Dagoni',  // Dagon (11 times)
  'לקראת': 'kumlaki',  // to meet (12 times)
  'גדולה': 'kubwa',  // great (f) (11 times)
  'גדול': 'kubwa',  // great (m)
};

// Export default for easy importing
export default hebrewToSwahiliLexiconChirho;
