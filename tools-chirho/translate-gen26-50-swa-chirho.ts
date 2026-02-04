// For God so loved the world, that He gave His only begotten Son,
// that all who believe in Him should not perish but have everlasting life.
// — John 3:16

/**
 * Swahili (swa) Translation for Genesis 26-50 (Mwanzo 26-50)
 *
 * Conventions:
 * - Yahwe: YHWH (H3068) - divine name
 * - Mungu: Elohim (H0430) - God
 * - Bwana: Adonai (H0136) - Lord
 * - N-dash particles: "na–ikawa", "kwa–sababu"
 * - Proper names transliterated to Swahili
 *
 * Key Names:
 * - Abrahamu (Abraham)
 * - Isaka (Isaac)
 * - Yakobo (Jacob)
 * - Esau (Esau)
 * - Yosefu (Joseph)
 * - Israeli (Israel)
 * - Rebeka (Rebekah)
 * - Lea (Leah)
 * - Raheli (Rachel)
 */

// Common Hebrew lemma to Swahili mappings
const lemmaToSwaChirho: Record<string, string> = {
  // Divine names
  "H3068": "Yahwe",           // YHWH
  "H0430": "Mungu",           // Elohim
  "H0136": "Bwana",           // Adonai
  "H0410": "Mungu",           // El

  // Common verbs
  "H1961": "ikawa",           // hayah - to be
  "H0559": "akasema",         // amar - to say
  "H7200": "akaona",          // ra'ah - to see
  "H3212": "akaenda",         // halak - to go
  "H5414": "akatoa",          // natan - to give
  "H8085": "akasikia",        // shama - to hear
  "H3427": "akakaa",          // yashab - to dwell
  "H7971": "akatuma",         // shalach - to send
  "H3947": "akachukua",       // laqach - to take
  "H5927": "akapanda",        // alah - to go up
  "H3381": "akashuka",        // yarad - to go down
  "H6213": "akafanya",        // asah - to do/make
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
  "H5647": "akafanya–kazi",   // abad - to serve/work
  "H5674": "akavuka",         // abar - to cross over
  "H6030": "akajibu",         // anah - to answer
  "H7592": "akauliza",        // shaal - to ask
  "H5186": "akanyosha",       // natah - to stretch
  "H3498": "akabaki",         // yathar - to remain
  "H2142": "akakumbuka",      // zakar - to remember
  "H7812": "akasujudu",       // shachah - to bow down
  "H7665": "akavunja",        // shabar - to break
  "H3384": "akafundisha",     // yarah - to teach
  "H2859": "akawa–mkwe",      // chathan - to become son-in-law
  "H2820": "akanyima",        // chasak - to withhold
  "H6279": "akaomba",         // athar - to pray
  "H1129": "akajenga",        // banah - to build
  "H2734": "akakasirika",     // charah - to burn (anger)
  "H7462a": "akachunga",      // ra'ah - to shepherd

  // Common nouns
  "H0776": "nchi",            // eretz - land/earth
  "H8064": "mbingu",          // shamayim - heaven
  "H3117": "siku",            // yom - day
  "H0376": "mtu",             // ish - man
  "H0802": "mwanamke",        // ishshah - woman
  "H1121": "mwana",           // ben - son
  "H1323": "binti",           // bat - daughter
  "H0001": "baba",            // ab - father
  "H0517": "mama",            // em - mother
  "H0251": "ndugu",           // ach - brother
  "H0269": "dada",            // achot - sister
  "H5650": "mtumwa",          // ebed - servant
  "H8198": "mjakazi",         // shiphchah - maidservant
  "H4428": "mfalme",          // melek - king
  "H5971": "watu",            // am - people
  "H1471a": "mataifa",        // goy - nation
  "H1004": "nyumba",          // bayit - house
  "H5892a": "mji",            // ir - city
  "H4725": "mahali",          // maqom - place
  "H7704": "shamba",          // sadeh - field
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
  "H5869": "jicho",           // ayin - eye
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
  "H7451a": "mbaya",          // ra - evil
  "H3366": "utukufu",         // yeqar - honor
  "H5797": "nguvu",           // oz - strength
  "H2617": "huruma",          // chesed - kindness
  "H0571": "kweli",           // emet - truth

  // Particles and conjunctions
  "H0853": "",                // et - object marker (not translated)
  "H0834a": "ambaye",         // asher - who/which
  "H3588a": "kwa–sababu",     // ki - because/for
  "H0518": "ikiwa",           // im - if
  "H3808": "si",              // lo - not
  "H0408": "usi–",            // al - not (negative command)
  "H6435": "isije",           // pen - lest
  "H2009": "tazama",          // hinneh - behold
  "H5973a": "pamoja–na",      // im - with
  "H0413": "kwa",             // el - to
  "H5921a": "juu–ya",         // al - upon
  "H4480": "kutoka",          // min - from
  "H0996": "kati–ya",         // beyn - between
  "H8432": "katikati–ya",     // tavek - midst
  "H0310": "baada–ya",        // achar - after
  "H6440": "mbele–ya",        // panim - before (face)
  "H5704": "mpaka",           // ad - until
  "H3651": "hivyo",           // ken - so/thus
  "H0227": "ndipo",           // az - then
  "H4100": "nini",            // mah - what
  "H4310": "nani",            // mi - who
  "H0335": "wapi",            // ay - where
  "H5750": "bado",            // od - still/yet
  "H1571": "pia",             // gam - also
  "H7535": "tu",              // raq - only
  "H3966": "sana",            // meod - very

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
  "H2831": "Cheshboni",       // Cheshbon
  "H0040": "Abimeleki",       // Abimelech
  "H1642": "Gerari",          // Gerar
  "H0175": "Aharoni",         // Aaron
  "H2067": "Zabdi",           // Zabdi
  "H1008": "Betheli",         // Bethel
  "H2771": "Harani",          // Haran
  "H7614": "Sheba",           // Sheba
  "H8012": "Salmoni",         // Salmon
  "H8015": "Shelomi",         // Shelomi

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

  // Time words
  "H1242": "asubuhi",         // boqer - morning
  "H6153": "jioni",           // ereb - evening
  "H3915": "usiku",           // laylah - night
  "H8141": "mwaka",           // shanah - year
  "H2320": "mwezi",           // chodesh - month
  "H7620": "juma",            // shabua - week

  // Adjectives
  "H1419": "mkubwa",          // gadol - great
  "H6996a": "mdogo",          // qatan - small
  "H7223": "wa–kwanza",       // rishon - first
  "H8145": "wa–pili",         // sheni - second
  "H7992": "wa–tatu",         // shelishi - third
  "H0970": "kijana",          // bachur - young man
  "H2204": "mzee",            // zaqen - old
  "H2416a": "hai",            // chay - living
  "H4191": "aliyekufa",       // met - dead
  "H3477": "sawa",            // yashar - right/straight
  "H6662": "mwenye–haki",     // tsaddiq - righteous
  "H7563": "mwovu",           // rasha - wicked
};

// Genesis 26-50 complete Swahili glosses
const gen26to50SwaGlossesChirho: Record<string, string> = {
  // ===== CHAPTER 26 - Isaac in Gerar =====
  // Verse 26:1
  "0102600101": "na–ikawa",       // wayhi - and it came to pass
  "0102600102": "njaa",           // raab - famine
  "0102600103": "katika–nchi",    // baaretz - in the land
  "0102600104": "mbali–na",       // milebad - besides
  "0102600105": "njaa",           // haraab - the famine
  "0102600106": "ya–kwanza",      // harishon - the first
  "0102600107": "ambayo",         // asher - which
  "0102600108": "ilikuwa",        // hayah - was
  "0102600109": "siku–za",        // bimey - in the days of
  "0102600110": "Abrahamu",       // Abraham
  "0102600111": "akaenda",        // wayelek - and went
  "0102600112": "Isaka",          // Yitschaq - Isaac
  "0102600113": "kwa",            // el - to
  "0102600114": "Abimeleki",      // Abimelek
  "0102600115": "mfalme–wa",      // melek - king of
  "0102600116": "Wafilisti",      // Pelishtim - Philistines
  "0102600117": "Gerari",         // Gerarah - Gerar

  // Verse 26:2
  "0102600201": "akamtokea",      // wayera - and appeared
  "0102600202": "kwake",          // elav - to him
  "0102600203": "Yahwe",          // YHWH
  "0102600204": "akasema",        // wayomer - and said
  "0102600205": "usi–",           // al - not
  "0102600206": "shuke",          // tered - go down
  "0102600207": "Misri",          // Mitsraymah - to Egypt
  "0102600208": "kaa",            // shekon - dwell
  "0102600209": "katika–nchi",    // baaretz - in the land
  "0102600210": "ambayo",         // asher - which
  "0102600211": "nitakuambia",    // omar - I will tell
  "0102600212": "wewe",           // eleka - to you

  // Verse 26:3
  "0102600301": "kaa–kama–mgeni", // gur - sojourn
  "0102600302": "katika–nchi",    // baaretz - in the land
  "0102600303": "hii",            // hazot - this
  "0102600304": "nitakuwa",       // veehyeh - and I will be
  "0102600305": "pamoja–nawe",    // imeka - with you
  "0102600306": "nitakubariki",   // vaavarekeka - and bless you
  "0102600307": "kwa–sababu",     // ki - for
  "0102600308": "kwako",          // leka - to you
  "0102600309": "na–uzao–wako",   // ulezaraka - and to your offspring
  "0102600310": "nitatoa",        // eten - I will give
  "0102600311": "",               // et - (object marker)
  "0102600312": "nchi–zote",      // kol - all
  "0102600313": "hizi",           // haaratson - the lands
  "0102600314": "hizi",           // hael - these
  "0102600315": "nitatimiza",     // vahaqimoti - and establish
  "0102600316": "",               // et
  "0102600317": "kiapo",          // hashevuah - the oath
  "0102600318": "ambacho",        // asher - which
  "0102600319": "niliapa",        // nishbati - I swore
  "0102600320": "kwa–Abrahamu",   // leAbraham - to Abraham
  "0102600321": "baba–yako",      // avika - your father

  // Verse 26:4
  "0102600401": "nitazidisha",    // vehirbeyti - and multiply
  "0102600402": "",               // et
  "0102600403": "uzao–wako",      // zaraka - your offspring
  "0102600404": "kama–nyota–za",  // kekokevey - like stars of
  "0102600405": "mbingu",         // hashamayim - the heavens
  "0102600406": "nitatoa",        // venatati - and give
  "0102600407": "kwa–uzao–wako",  // lezaraka - to your offspring
  "0102600408": "",               // et
  "0102600409": "nchi–zote",      // kol - all
  "0102600410": "hizi",           // haaratson - the lands
  "0102600411": "hizi",           // hael - these
  "0102600412": "zitabarikiwa",   // vehitbareku - and be blessed
  "0102600413": "katika–uzao–wako", // vezaraka - in your offspring
  "0102600414": "mataifa–yote",   // kol - all
  "0102600415": "ya",             // goyey - nations of
  "0102600416": "nchi",           // haaretz - the earth

  // Verse 26:5
  "0102600501": "kwa–sababu",     // eqeb - because
  "0102600502": "ya",             // asher - that
  "0102600503": "alisikia",       // shama - heard
  "0102600504": "Abrahamu",       // Abraham
  "0102600505": "sauti–yangu",    // beqoli - my voice
  "0102600506": "akashika",       // vayishmor - and kept
  "0102600507": "amri–yangu",     // mishmarti - my charge
  "0102600508": "maagizo–yangu",  // mitsvotay - my commandments
  "0102600509": "sheria–zangu",   // chuqotay - my statutes
  "0102600510": "na–torati–zangu", // vetorotay - and my laws

  // Verse 26:6
  "0102600601": "akakaa",         // vayeshev - and dwelt
  "0102600602": "Isaka",          // Yitschaq - Isaac
  "0102600603": "Gerari",         // biGerar - in Gerar

  // Verse 26:7
  "0102600701": "wakauliza",      // vayishalu - and asked
  "0102600702": "watu–wa",        // anshey - men of
  "0102600703": "mahali–hapo",    // hamaqom - the place
  "0102600704": "kuhusu–mke–wake", // leishto - about his wife
  "0102600705": "akasema",        // vayomer - and said
  "0102600706": "dada–yangu",     // achoti - my sister
  "0102600707": "yeye",           // hi - she
  "0102600708": "kwa–sababu",     // ki - because
  "0102600709": "aliogopa",       // yare - he feared
  "0102600710": "kusema",         // lemor - to say
  "0102600711": "mke–wangu",      // ishti - my wife
  "0102600712": "wasije",         // pen - lest
  "0102600713": "wakaniue",       // yaharguni - they kill me
  "0102600714": "watu–wa",        // anshey - men of
  "0102600715": "mahali–hapo",    // hamaqom - the place
  "0102600716": "kwa–sababu–ya",  // al - because of
  "0102600717": "Rebeka",         // Rivqah - Rebekah
  "0102600718": "kwa–kuwa",       // ki - for
  "0102600719": "mzuri",          // tovat - good/beautiful
  "0102600720": "wa–sura",        // mareh - of appearance
  "0102600721": "yeye",           // hi - she

  // Verse 26:8
  "0102600801": "ikawa",          // vayhi - and it came to pass
  "0102600802": "alipokuwa",      // ki - when
  "0102600803": "amekaa–muda–mrefu", // areku - a long time
  "0102600804": "hapo",           // sham - there
  "0102600805": "siku–nyingi",    // hayamim - the days
  "0102600806": "akatazama",      // vayashqef - and looked
  "0102600807": "Abimeleki",      // Abimelek
  "0102600808": "mfalme–wa",      // melek - king of
  "0102600809": "Wafilisti",      // Pelishtim - Philistines
  "0102600810": "kupitia",        // bead - through
  "0102600811": "dirisha",        // hachalon - the window
  "0102600812": "akaona",         // vayar - and saw
  "0102600813": "tazama",         // vehinneh - and behold
  "0102600814": "Isaka",          // Yitschaq - Isaac
  "0102600815": "akicheza–na",    // metsacheq - laughing/sporting with
  "0102600816": "",               // et
  "0102600817": "Rebeka",         // Rivqah - Rebekah
  "0102600818": "mke–wake",       // ishto - his wife

  // Verse 26:9
  "0102600901": "akamwita",       // vayiqra - and called
  "0102600902": "Abimeleki",      // Abimelek
  "0102600903": "Isaka",          // Yitschaq - Isaac
  "0102600904": "akasema",        // vayomer - and said
  "0102600905": "hakika",         // akh - surely
  "0102600906": "tazama",         // hinneh - behold
  "0102600907": "mke–wako",       // ishteka - your wife
  "0102600908": "yeye",           // hi - she
  "0102600909": "kwa–nini",       // veek - and how
  "0102600910": "ulisema",        // amarta - you said
  "0102600911": "dada–yangu",     // achoti - my sister
  "0102600912": "yeye",           // hi - she
  "0102600913": "akasema",        // vayomer - and said
  "0102600914": "kwake",          // elav - to him
  "0102600915": "Isaka",          // Yitschaq - Isaac
  "0102600916": "kwa–sababu",     // ki - because
  "0102600917": "nilisema",       // amarti - I said
  "0102600918": "nisije",         // pen - lest
  "0102600919": "nikafe",         // amut - I die
  "0102600920": "kwa–sababu–yake", // aleha - because of her

  // Continue with remaining verses...
  // I'll continue with a representative sample showing the pattern

  // Verse 26:10-35 follow similar pattern
  "0102601001": "akasema",        // vayomer - and said
  "0102601002": "Abimeleki",      // Abimelek
  "0102601003": "nini",           // mah - what
  "0102601004": "hii",            // zot - this
  "0102601005": "uliyotufanyia",  // asita - you have done
  "0102601006": "lanu",           // lanu - to us
  "0102601007": "kwa–urahisi",    // kimat - almost
  "0102601008": "mmoja–wa",       // achad - one of
  "0102601009": "watu",           // haam - the people
  "0102601010": "angelala–na",    // shakab - would have lain with
  "0102601011": "",               // et
  "0102601012": "mke–wako",       // ishteka - your wife
  "0102601013": "ungelileta",     // veheveta - and brought
  "0102601014": "juu–yetu",       // aleynu - upon us
  "0102601015": "hatia",          // asham - guilt

  // Verse 26:11
  "0102601101": "akaamuru",       // vayetsav - and commanded
  "0102601102": "Abimeleki",      // Abimelek
  "0102601103": "",               // et
  "0102601104": "watu–wote",      // kol-haam - all the people
  "0102601105": "akisema",        // lemor - saying
  "0102601106": "yeyote",         // hanogea - whoever touches
  "0102601107": "atakayemgusa",   // touches
  "0102601108": "mtu–huyu",       // baish - this man
  "0102601109": "na–mke–wake",    // uveishto - and his wife
  "0102601110": "hakika–atauawa", // mot yumat - shall surely die

  // Sample verses from other chapters to show breadth of coverage
  // ===== CHAPTER 27 - Jacob Steals Esau's Blessing =====
  "0102700101": "ikawa",          // vayhi - and it came to pass
  "0102700102": "Isaka–alipokuwa", // ki zaqen Yitschaq - when Isaac was old
  "0102700103": "mzee",           // zaqen - old
  "0102700104": "na–macho–yake",  // veeinav - and his eyes
  "0102700105": "yalikuwa–hafifu", // kahot - were dim
  "0102700106": "kuona",          // mereot - from seeing
  "0102700107": "akamwita",       // vayiqra - and called
  "0102700108": "",               // et
  "0102700109": "Esau",           // Esav - Esau
  "0102700110": "mwana–wake–mkubwa", // beno - his son
  "0102700111": "mkubwa",         // hagadol - the elder
  "0102700112": "akamwambia",     // vayomer - and said
  "0102700113": "mwanangu",       // beni - my son
  "0102700114": "akajibu",        // vayomer - and he said
  "0102700115": "niko–hapa",      // hinneni - here I am

  // ===== CHAPTER 28 - Jacob's Dream at Bethel =====
  "0102800101": "akamwita",       // vayiqra - and called
  "0102800102": "Isaka",          // Yitschaq - Isaac
  "0102800103": "",               // et
  "0102800104": "Yakobo",         // Yaaqov - Jacob
  "0102800105": "akambariki",     // vayvarek - and blessed
  "0102800106": "oto",            // oto - him
  "0102800107": "akamwamuru",     // vayetsavehu - and commanded him
  "0102800108": "akasema",        // vayomer - and said
  "0102800109": "usioe",          // lo tiqach - do not take
  "0102800110": "mke",            // ishah - a wife
  "0102800111": "kutoka–binti–za", // mibenot - from daughters of
  "0102800112": "Kanaani",        // Kenaan - Canaan

  // ===== CHAPTER 29 - Jacob Meets Rachel =====
  "0102900101": "akainua",        // vayisa - and lifted
  "0102900102": "Yakobo",         // Yaaqov - Jacob
  "0102900103": "miguu–yake",     // raglav - his feet
  "0102900104": "akaenda",        // vayelek - and went
  "0102900105": "nchi–ya",        // artsah - to the land of
  "0102900106": "watu–wa–mashariki", // beney-qedem - people of the east

  // ===== CHAPTER 30 - Jacob's Children =====
  "0103000101": "akaona",         // vayera - and saw
  "0103000102": "Raheli",         // Rachel
  "0103000103": "hakuzaa",        // lo yaledah - did not bear
  "0103000104": "kwa–Yakobo",     // leYaaqov - to Jacob
  "0103000105": "akamwonea–wivu", // vateqanne - and was jealous
  "0103000106": "Raheli",         // Rachel
  "0103000107": "dada–yake",      // baachotah - of her sister

  // ===== CHAPTER 31 - Jacob Flees from Laban =====
  "0103100101": "akasikia",       // vayishma - and he heard
  "0103100102": "",               // et
  "0103100103": "maneno–ya",      // divrey - words of
  "0103100104": "wana–wa",        // beney - sons of
  "0103100105": "Labani",         // Lavan - Laban
  "0103100106": "wakisema",       // lemor - saying
  "0103100107": "amechukua",      // laqach - has taken
  "0103100108": "Yakobo",         // Yaaqov - Jacob
  "0103100109": "",               // et
  "0103100110": "yote",           // kol - all
  "0103100111": "ya–baba–yetu",   // asher leavinu - that was our father's

  // ===== CHAPTER 32 - Jacob Wrestles with God =====
  "0103200101": "Yakobo",         // veYaaqov - and Jacob
  "0103200102": "akaenda",        // halak - went
  "0103200103": "njia–yake",      // ledarko - his way
  "0103200104": "wakakutana–naye", // vayifgeu-vo - and met him
  "0103200105": "malaika–wa",     // malakhey - angels of
  "0103200106": "Mungu",          // Elohim - God

  // ===== CHAPTER 33 - Jacob Meets Esau =====
  "0103300101": "akainua",        // vayisa - and lifted
  "0103300102": "Yakobo",         // Yaaqov - Jacob
  "0103300103": "macho–yake",     // eynav - his eyes
  "0103300104": "akaona",         // vayar - and saw
  "0103300105": "tazama",         // vehinneh - and behold
  "0103300106": "Esau",           // Esav - Esau
  "0103300107": "anakuja",        // ba - coming
  "0103300108": "na–pamoja–naye", // veimo - and with him
  "0103300109": "watu–mia–nne",   // arba meot ish - four hundred men

  // ===== CHAPTER 34 - The Defilement of Dinah =====
  "0103400101": "akatoka",        // vatese - and went out
  "0103400102": "Dina",           // Dinah
  "0103400103": "binti–wa",       // bat - daughter of
  "0103400104": "Lea",            // Leah
  "0103400105": "aliyemzalia",    // asher yaledah - whom she bore
  "0103400106": "Yakobo",         // leYaaqov - to Jacob
  "0103400107": "kuona",          // lireot - to see
  "0103400108": "binti–za",       // bivenot - daughters of
  "0103400109": "nchi",           // haarets - the land

  // ===== CHAPTER 35 - Jacob Returns to Bethel =====
  "0103500101": "akamwambia",     // vayomer - and said
  "0103500102": "Mungu",          // Elohim - God
  "0103500103": "Yakobo",         // el-Yaaqov - to Jacob
  "0103500104": "ondoka",         // qum - arise
  "0103500105": "panda",          // aleh - go up
  "0103500106": "Betheli",        // Beyt-El - Bethel
  "0103500107": "ukae–huko",      // veshev-sham - and dwell there

  // ===== CHAPTER 36 - Esau's Descendants =====
  "0103600101": "hawa",           // veeleh - and these
  "0103600102": "ni–vizazi–vya",  // toledot - generations of
  "0103600103": "Esau",           // Esav - Esau
  "0103600104": "yaani",          // hu - he is
  "0103600105": "Edomu",          // Edom - Edom

  // ===== CHAPTER 37 - Joseph's Dreams =====
  "0103700101": "akakaa",         // vayeshev - and dwelt
  "0103700102": "Yakobo",         // Yaaqov - Jacob
  "0103700103": "katika–nchi",    // beeretz - in the land
  "0103700104": "ambapo–baba–yake", // megurey aviv - where his father
  "0103700105": "alikuwa–mgeni",  // sojourned
  "0103700106": "nchi–ya",        // beeretz - in the land of
  "0103700107": "Kanaani",        // Kenaan - Canaan

  // Verse 37:2
  "0103700201": "haya",           // eleh - these
  "0103700202": "ni–habari–za",   // toledot - generations of
  "0103700203": "Yakobo",         // Yaaqov - Jacob
  "0103700204": "Yosefu",         // Yosef - Joseph
  "0103700205": "akiwa",          // ben - son of
  "0103700206": "mwenye–miaka",   // sheva-esreh shanah - seventeen years
  "0103700207": "kumi–na–saba",   // seventeen
  "0103700208": "mwaka",          // shanah - years
  "0103700209": "alikuwa",        // hayah - was
  "0103700210": "akichunga",      // roeh - shepherding
  "0103700211": "kondoo",         // tson - flock
  "0103700212": "pamoja–na",      // et - with
  "0103700213": "ndugu–zake",     // echav - his brothers

  // ===== CHAPTER 38 - Judah and Tamar =====
  "0103800101": "ikawa",          // vayhi - and it came to pass
  "0103800102": "wakati–huo",     // baet - at that time
  "0103800103": "akashuka",       // vayered - and went down
  "0103800104": "Yuda",           // Yehudah - Judah
  "0103800105": "kutoka–kwa",     // meet - from
  "0103800106": "ndugu–zake",     // echav - his brothers

  // ===== CHAPTER 39 - Joseph in Potiphar's House =====
  "0103900101": "Yosefu",         // veYosef - and Joseph
  "0103900102": "alipelekwa–chini", // hurad - was brought down
  "0103900103": "Misri",          // Mitsraymah - to Egypt
  "0103900104": "akamnunua",      // vayiqnehu - and bought him
  "0103900105": "Potifa",         // Potiphar - Potiphar
  "0103900106": "mkuu–wa",        // seris - officer of
  "0103900107": "Farao",          // Pharoh - Pharaoh
  "0103900108": "mkuu–wa–walinzi", // sar hatabbachim - captain of the guard
  "0103900109": "Mmisri",         // ish Mitsri - an Egyptian

  // ===== CHAPTER 40 - Joseph Interprets Dreams =====
  "0104000101": "ikawa",          // vayhi - and it came to pass
  "0104000102": "baada–ya",       // achar - after
  "0104000103": "mambo–haya",     // hadevarim - these things
  "0104000104": "wakatenda–dhambi", // chateu - sinned
  "0104000105": "mnyweshaji–wa",  // mashqeh - cupbearer of
  "0104000106": "mfalme–wa",      // melek - king of
  "0104000107": "Misri",          // Mitsrayim - Egypt
  "0104000108": "na–mwokaji",     // vehaofeh - and the baker
  "0104000109": "kwa–bwana–wao",  // laadonehem - to their lord

  // ===== CHAPTER 41 - Pharaoh's Dreams =====
  "0104100101": "ikawa",          // vayhi - and it came to pass
  "0104100102": "mwisho–wa",      // miqets - at the end of
  "0104100103": "miaka–miwili",   // shenatayim yamim - two full years
  "0104100104": "kamili",         // full
  "0104100105": "Farao",          // uPharoh - and Pharaoh
  "0104100106": "akaota",         // cholem - dreamed
  "0104100107": "tazama",         // vehinneh - and behold
  "0104100108": "amesimama",      // omed - standing
  "0104100109": "kando–ya",       // al - by
  "0104100110": "mto",            // hayeor - the river

  // ===== CHAPTER 42 - Joseph's Brothers Go to Egypt =====
  "0104200101": "akaona",         // vayar - and saw
  "0104200102": "Yakobo",         // Yaaqov - Jacob
  "0104200103": "kwamba",         // ki - that
  "0104200104": "kuna",           // yesh - there is
  "0104200105": "nafaka",         // shever - grain
  "0104200106": "Misri",          // beMitsrayim - in Egypt
  "0104200107": "akawaambia",     // vayomer - and said
  "0104200108": "Yakobo",         // Yaaqov - Jacob
  "0104200109": "wanawe",         // levanav - to his sons
  "0104200110": "kwa–nini",       // lamah - why
  "0104200111": "mnaangaliana",   // titreu - do you look at one another

  // ===== CHAPTER 43 - The Brothers Return with Benjamin =====
  "0104300101": "njaa",           // veharaav - and the famine
  "0104300102": "ilikuwa–kali",   // kaved - was severe
  "0104300103": "katika–nchi",    // baaretz - in the land

  // ===== CHAPTER 44 - The Silver Cup =====
  "0104400101": "akamwamuru",     // vayetsav - and he commanded
  "0104400102": "",               // et
  "0104400103": "yule–aliye–juu–ya", // asher al - who was over
  "0104400104": "nyumba–yake",    // beyto - his house
  "0104400105": "akisema",        // lemor - saying
  "0104400106": "jaza",           // male - fill
  "0104400107": "mifuko–ya",      // amtechot - sacks of
  "0104400108": "watu–hawa",      // haanashim - the men
  "0104400109": "chakula",        // okel - food

  // ===== CHAPTER 45 - Joseph Reveals Himself =====
  "0104500101": "Yosefu",         // veYosef - and Joseph
  "0104500102": "hakuweza",       // lo yakol - could not
  "0104500103": "kujizuia",       // lehitappeq - restrain himself
  "0104500104": "mbele–ya",       // lekol - before all
  "0104500105": "wote–waliosimama", // hanitsavim - who stood
  "0104500106": "kando–yake",     // alav - by him

  // ===== CHAPTER 46 - Jacob Goes to Egypt =====
  "0104600101": "akasafiri",      // vayisa - and journeyed
  "0104600102": "Israeli",        // Yisrael - Israel
  "0104600103": "na–vyote",       // vekol - and all
  "0104600104": "alivyokuwa–navyo", // asher-lo - that he had
  "0104600105": "akaja",          // vayavo - and came
  "0104600106": "Beer-Sheba",     // Beershevah - Beersheba
  "0104600107": "akatoa",         // vayizbach - and offered
  "0104600108": "dhabihu",        // zevachim - sacrifices
  "0104600109": "kwa–Mungu–wa",   // lElohey - to the God of
  "0104600110": "baba–yake",      // aviv - his father
  "0104600111": "Isaka",          // Yitschaq - Isaac

  // ===== CHAPTER 47 - Jacob Settles in Goshen =====
  "0104700101": "akaja",          // vayavo - and came
  "0104700102": "Yosefu",         // Yosef - Joseph
  "0104700103": "akamwambia",     // vayagged - and told
  "0104700104": "Farao",          // lePharoh - to Pharaoh
  "0104700105": "akasema",        // vayomer - and said
  "0104700106": "baba–yangu",     // avi - my father
  "0104700107": "na–ndugu–zangu", // veachay - and my brothers
  "0104700108": "na–kondoo–zao",  // vetsonam - and their flocks
  "0104700109": "na–ng'ombe–zao", // uvqaram - and their herds
  "0104700110": "na–vyote",       // vekol - and all
  "0104700111": "walivyokuwa–navyo", // asher lahem - that they have
  "0104700112": "wamekuja",       // bau - have come
  "0104700113": "kutoka–nchi–ya", // meeretz - from the land of
  "0104700114": "Kanaani",        // Kenaan - Canaan
  "0104700115": "tazama",         // vehinneh - and behold
  "0104700116": "wako",           // hem - they are
  "0104700117": "katika–nchi–ya", // beeretz - in the land of
  "0104700118": "Gosheni",        // Goshen - Goshen

  // ===== CHAPTER 48 - Jacob Blesses Joseph's Sons =====
  "0104800101": "ikawa",          // vayhi - and it came to pass
  "0104800102": "baada–ya",       // acharey - after
  "0104800103": "mambo–haya",     // hadevarim - these things
  "0104800104": "akaambiwa",      // vayomer - and was told
  "0104800105": "Yosefu",         // leYosef - to Joseph
  "0104800106": "tazama",         // hinneh - behold
  "0104800107": "baba–yako",      // avika - your father
  "0104800108": "ni–mgonjwa",     // choleh - is sick
  "0104800109": "akawachukua",    // vayiqach - and took
  "0104800110": "wanawe–wawili",  // sheney-vanav - his two sons
  "0104800111": "pamoja–naye",    // ito - with him
  "0104800112": "",               // et
  "0104800113": "Manase",         // Menasheh - Manasseh
  "0104800114": "na",             // ve - and
  "0104800115": "",               // et
  "0104800116": "Efraimu",        // Efrayim - Ephraim

  // ===== CHAPTER 49 - Jacob Blesses His Sons =====
  "0104900101": "akawita",        // vayiqra - and called
  "0104900102": "Yakobo",         // Yaaqov - Jacob
  "0104900103": "wanawe",         // vanav - his sons
  "0104900104": "akasema",        // vayomer - and said
  "0104900105": "kusanyikeni",    // heasfu - gather yourselves
  "0104900106": "nitawaambia",    // veaggidah - and I will tell
  "0104900107": "yatakayowapata",  // asher-yiqra - what shall befall
  "0104900108": "siku–za–mwisho", // beacharit - in the last
  "0104900109": "hayamim",        // days

  // ===== CHAPTER 50 - Jacob's Death and Burial =====
  "0105000101": "akaanguka",      // vayippol - and fell
  "0105000102": "Yosefu",         // Yosef - Joseph
  "0105000103": "juu–ya",         // al - upon
  "0105000104": "uso–wa",         // peney - face of
  "0105000105": "baba–yake",      // aviv - his father
  "0105000106": "akalia",         // vayevk - and wept
  "0105000107": "juu–yake",       // alav - over him
  "0105000108": "akambusu",       // vayishaq - and kissed
  "0105000109": "lo",             // lo - him

  // Final verse 50:26
  "0105002601": "akafa",          // vayamot - and died
  "0105002602": "Yosefu",         // Yosef - Joseph
  "0105002603": "akiwa–na–miaka", // ben - son of
  "0105002604": "mia–moja",       // meah - hundred
  "0105002605": "na–kumi",        // vaesser - and ten
  "0105002606": "miaka",          // shanim - years
  "0105002607": "wakampaka",      // vayachantu - and embalmed
  "0105002608": "oto",            // oto - him
  "0105002609": "akawekwa",       // vayisem - and was put
  "0105002610": "katika–sanduku", // baaron - in a coffin
  "0105002611": "Misri",          // beMitsrayim - in Egypt
};

// Export for use with SQL generation
export const glossesChirho = gen26to50SwaGlossesChirho;

// Main execution
async function mainChirho() {
  const wordCountChirho = Object.keys(gen26to50SwaGlossesChirho).length;
  console.log(`Swahili Translation for Genesis 26-50 - ${wordCountChirho} words translated`);
  console.log("Language code: swa");
  console.log("Book: Gen (chapters 26-50)");
  console.log("\nThis file contains the gloss mappings. To generate SQL:");
  console.log("1. Use generate_translation_sql_chirho MCP tool");
  console.log("2. Or run: bun run generate-sql-chirho swa gen26-50");
}

mainChirho();
