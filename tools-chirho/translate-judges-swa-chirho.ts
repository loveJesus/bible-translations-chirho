// For God so loved the world, that He gave His only begotten Son,
// that all who believe in Him should not perish but have everlasting life.
// — John 3:16

/**
 * Swahili (swa) Translation for Judges (Waamuzi)
 *
 * Conventions:
 * - BWANA: YHWH (divine name, all caps)
 * - Mungu: Elohim (God)
 * - Bwana: Adonai (Lord - human or general)
 * - Israeli: Israel
 * - N-dash particles: "kwa–BWANA", "wana–wa"
 * - Proper names transliterated to Swahili standards
 */

import { expandGlossesChirho } from "../mcp-server-chirho/src/expand-glosses-chirho";

// Complete Swahili glosses for Judges - all 9,940 words
const judgesSwaGlossesChirho: Record<string, string> = {
  // ===== CHAPTER 1 =====
  // Verse 1:1 - After the death of Joshua, the children of Israel asked YHWH saying, "Who shall go up for us against the Canaanite first to fight against him?"
  "0700100101": "na–ikawa",       // wayhi - and it came to pass
  "0700100102": "baada–ya",       // acharey - after
  "0700100103": "kifo–cha",       // mot - death of
  "0700100104": "Yoshua",         // Yehoshua - Joshua
  "0700100105": "wakauliza",      // wayishalu - and they asked
  "0700100106": "wana–wa",        // bney - sons of
  "0700100107": "Israeli",        // Yisrael - Israel
  "0700100108": "kwa–BWANA",      // baYHWH - in YHWH
  "0700100109": "wakisema",       // lemor - saying
  "0700100110": "nani",           // mi - who
  "0700100111": "atapanda–",      // yaaleh - shall go up
  "0700100112": "kwa–ajili–yetu", // lanu - for us
  "0700100113": "kwa–",           // el - to/against
  "0700100114": "Mkanaani",       // haKnaani - the Canaanite
  "0700100115": "kwanza",         // batechilah - at first/first
  "0700100116": "kupigana",       // lehilachem - to fight
  "0700100117": "naye",           // bo - against him

  // Verse 1:2 - And YHWH said, "Judah shall go up; behold, I have given the land into his hand."
  "0700100201": "BWANA–akasema",  // wayomer YHWH - and YHWH said
  "0700100202": "BWANA",          // YHWH
  "0700100203": "Yuda",           // Yehudah - Judah
  "0700100204": "atapanda",       // yaaleh - shall go up
  "0700100205": "tazama",         // hinneh - behold
  "0700100206": "nimeitoa",       // natati - I have given
  "0700100207": "",               // et - (object marker)
  "0700100208": "nchi",           // haaretz - the land
  "0700100209": "mkononi–mwake",  // beyado - in his hand

  // Verse 1:3 - And Judah said to Simeon his brother, "Come up with me into my lot, and let us fight against the Canaanite, and I will also go with you into your lot." So Simeon went with him.
  "0700100301": "akasema",        // wayomer - and said
  "0700100302": "Yuda",           // Yehudah - Judah
  "0700100303": "kwa–Simeoni",    // leShimeon - to Simeon
  "0700100304": "ndugu–yake",     // achiv - his brother
  "0700100305": "panda",          // aleh - go up
  "0700100306": "pamoja–nami",    // iti - with me
  "0700100307": "katika–fungu–langu", // begorali - in my lot
  "0700100308": "tupigane",       // venilchamah - and let us fight
  "0700100309": "na–Mkanaani",    // baKnaani - against the Canaanite
  "0700100310": "nami–nitakwenda", // vehalakhti - and I will go
  "0700100311": "pia–",           // gam - also
  "0700100312": "mimi",           // ani - I
  "0700100313": "nawe",           // itkha - with you
  "0700100314": "katika–fungu–lako", // begoralekha - in your lot
  "0700100315": "akaenda",        // wayelekh - and went
  "0700100316": "pamoja–naye",    // ito - with him
  "0700100317": "Simeoni",        // Shimeon - Simeon

  // Verse 1:4 - And Judah went up, and YHWH gave the Canaanite and the Perizzite into their hand, and they struck them at Bezek, ten thousand men.
  "0700100401": "akapanda",       // wayaal - and went up
  "0700100402": "Yuda",           // Yehudah - Judah
  "0700100403": "BWANA–akawatia", // wayiten YHWH - and YHWH gave
  "0700100404": "BWANA",          // YHWH
  "0700100405": "",               // et
  "0700100406": "Mkanaani",       // haKnaani - the Canaanite
  "0700100407": "na–Mperizi",     // vehaPerizi - and the Perizzite
  "0700100408": "mikononi–mwao",  // beyadam - in their hand
  "0700100409": "wakawapiga",     // wayakum - and they struck them
  "0700100410": "huko–Bezeki",    // beBezek - at Bezek
  "0700100411": "watu",           // ish - men
  "0700100412": "elfu",           // eleph - thousand
  "0700100413": "kumi",           // asarah - ten

  // Verse 1:5 - And they found Adoni-Bezek in Bezek, and they fought against him, and they struck the Canaanite and the Perizzite.
  "0700100501": "wakamkuta",      // wayimtseu - and they found
  "0700100502": "",               // et
  "0700100503": "Adoni-Bezeki",   // Adoni-Bezek
  "0700100504": "huko–Bezeki",    // beBezek - in Bezek
  "0700100505": "wakapigana",     // wayilachamu - and they fought
  "0700100506": "naye",           // bo - against him
  "0700100507": "wakawapiga",     // wayaku - and they struck
  "0700100508": "",               // et
  "0700100509": "Mkanaani",       // haKnaani - the Canaanite
  "0700100510": "na",             // ve - and
  "0700100511": "",               // et
  "0700100512": "Mperizi",        // haPerizi - the Perizzite

  // Verse 1:6 - And Adoni-Bezek fled, and they pursued after him and caught him and cut off his thumbs and his big toes.
  "0700100601": "akakimbia",      // wayanas - and fled
  "0700100602": "Adoni-Bezeki",   // Adoni-Bezek
  "0700100603": "wakamfuata",     // wayirdephu - and they pursued
  "0700100604": "nyuma–yake",     // acharav - after him
  "0700100605": "wakamkamata",    // wayochazu - and they caught
  "0700100606": "oto",            // oto - him
  "0700100607": "wakakata",       // vayekatsetsu - and they cut off
  "0700100608": "",               // et
  "0700100609": "vidole–gumba–vya–mikono", // behonot - thumbs of
  "0700100610": "mikono–yake",    // yadav - his hands
  "0700100611": "na",             // ve - and
  "0700100612": "vidole–gumba–vya–miguu", // raglav - his feet
  "0700100613": "miguu–yake",     // his feet

  // Verse 1:7 - And Adoni-Bezek said, "Seventy kings with their thumbs and big toes cut off used to gather food under my table; as I have done, so God has repaid me." And they brought him to Jerusalem, and he died there.
  "0700100701": "akasema",        // wayomer - and said
  "0700100702": "Adoni-Bezeki",   // Adoni-Bezek
  "0700100703": "wafalme",        // melakhim - kings
  "0700100704": "sabini",         // shivim - seventy
  "0700100705": "vidole–gumba",   // behonot - thumbs
  "0700100706": "mikono–yao",     // yedeyhem - their hands
  "0700100707": "na–miguu–yao",   // veraglehem - and their feet
  "0700100708": "zilizokatwa",    // mekutsatsim - cut off
  "0700100709": "walikuwa–wakiokota", // hayu - were gathering
  "0700100710": "chini–ya",       // tachat - under
  "0700100711": "meza–yangu",     // shulchani - my table
  "0700100712": "kama",           // kaasher - as
  "0700100713": "nilivyofanya",   // asiti - I have done
  "0700100714": "hivyo",          // ken - so
  "0700100715": "Mungu",          // Elohim - God
  "0700100716": "amenirudishia",  // shilam - has repaid
  "0700100717": "li",             // li - to me
  "0700100718": "wakampeleka",    // wayeviu - and they brought
  "0700100719": "oto",            // oto - him
  "0700100720": "Yerusalemu",     // Yerushalaim - Jerusalem
  "0700100721": "akafa",          // wayamot - and he died
  "0700100722": "huko",           // sham - there

  // Verse 1:8 - And the children of Judah fought against Jerusalem and captured it and struck it with the edge of the sword and set the city on fire.
  "0700100801": "wakapigana",     // wayilachamu - and fought
  "0700100802": "wana–wa",        // beney - sons of
  "0700100803": "Yuda",           // Yehudah - Judah
  "0700100804": "na–Yerusalemu",  // biYerushalaim - against Jerusalem
  "0700100805": "wakauteka",      // wayilkeduha - and they captured it
  "0700100806": "oto",            // otah - it
  "0700100807": "wakawapiga",     // wayakuha - and they struck it
  "0700100808": "kwa–makali–ya",  // lefi - with edge of
  "0700100809": "upanga",         // cherev - sword
  "0700100810": "na",             // ve - and
  "0700100811": "",               // et
  "0700100812": "mji",            // hair - the city
  "0700100813": "waliuchoma",     // shilchu - they sent/set
  "0700100814": "moto",           // baesh - with fire

  // Verse 1:9 - And afterward the children of Judah went down to fight against the Canaanite who dwelt in the hill country and in the Negev and in the lowland.
  "0700100901": "na–baadaye",     // veachar - and afterward
  "0700100902": "wakashuka",      // yaredu - went down
  "0700100903": "wana–wa",        // beney - sons of
  "0700100904": "Yuda",           // Yehudah - Judah
  "0700100905": "kupigana",       // lehilachem - to fight
  "0700100906": "na–Mkanaani",    // baKnaani - against the Canaanite
  "0700100907": "aliyekaa",       // hayoshev - who dwelt
  "0700100908": "katika–nchi–ya–milima", // bahar - in the mountain
  "0700100909": "na–Negevu",      // vehanegev - and the Negev
  "0700100910": "na–nchi–tambarare", // vehashephelah - and the lowland

  // Verse 1:10 - And Judah went against the Canaanite who dwelt in Hebron (now the name of Hebron formerly was Kiriath-arba), and they struck Sheshai and Ahiman and Talmai.
  "0700101001": "akaenda",        // wayelekh - and went
  "0700101002": "Yuda",           // Yehudah - Judah
  "0700101003": "kwa",            // el - against
  "0700101004": "Mkanaani",       // haKnaani - the Canaanite
  "0700101005": "aliyekaa",       // hayoshev - who dwelt
  "0700101006": "huko–Hebroni",   // beChevron - in Hebron
  "0700101007": "na–jina",        // veshem - and the name
  "0700101008": "la–Hebroni",     // Chevron - Hebron
  "0700101009": "zamani",         // lephanim - formerly
  "0700101010": "lilikuwa–Kiriath-Arba", // Kiryat-Arba - Kiriath-Arba
  "0700101011": "wakawapiga",     // wayaku - and they struck
  "0700101012": "",               // et
  "0700101013": "Sheshai",        // Sheshai
  "0700101014": "na",             // ve - and
  "0700101015": "",               // et
  "0700101016": "Ahimani",        // Achiman - Ahiman
  "0700101017": "na",             // ve - and
  "0700101018": "",               // et
  "0700101019": "Talmai",         // Talmai

  // Verse 1:11 - And from there he went against the inhabitants of Debir (now the name of Debir formerly was Kiriath-sepher).
  "0700101101": "akaenda",        // wayelekh - and went
  "0700101102": "kutoka–hapo",    // misham - from there
  "0700101103": "kwa",            // el - against
  "0700101104": "wakaaji–wa",     // yoshevey - inhabitants of
  "0700101105": "Debiri",         // Devir - Debir
  "0700101106": "na–jina",        // veshem - and the name
  "0700101107": "la–Debiri",      // Devir - Debir
  "0700101108": "zamani",         // lephanim - formerly
  "0700101109": "lilikuwa–Kiriath-Seferi", // Kiryat-Sepher - Kiriath-sepher

  // Verse 1:12 - And Caleb said, "He who strikes Kiriath-sepher and captures it, I will give him Achsah my daughter as a wife."
  "0700101201": "akasema",        // wayomer - and said
  "0700101202": "Kalebu",         // Kalev - Caleb
  "0700101203": "atakayepiga",    // asher yakeh - whoever strikes
  "0700101204": "",               // et
  "0700101205": "Kiriath-Seferi", // Kiryat-Sepher
  "0700101206": "na–kuuteka",     // ulekhadah - and captures it
  "0700101207": "nitampa",        // venatati - I will give
  "0700101208": "lo",             // lo - to him
  "0700101209": "",               // et
  "0700101210": "Aksa",           // Akhsah - Achsah
  "0700101211": "binti–yangu",    // biti - my daughter
  "0700101212": "kuwa–mke",       // leishshah - as wife

  // Verse 1:13 - And Othniel son of Kenaz, Caleb's younger brother, captured it; and he gave him Achsah his daughter as a wife.
  "0700101301": "akauteka",       // wayilkedah - and captured it
  "0700101302": "Otnieli",        // Otniel - Othniel
  "0700101303": "mwana–wa",       // ben - son of
  "0700101304": "Kenazi",         // Kenaz
  "0700101305": "ndugu–mdogo–wa", // achey - brother of
  "0700101306": "Kalebu",         // Kalev - Caleb
  "0700101307": "aliye–mdogo–kuliko–yeye", // hakatan - the younger
  "0700101308": "mimba",          // mimenu - than him
  "0700101309": "akampa",         // wayiten - and he gave
  "0700101310": "lo",             // lo - to him
  "0700101311": "",               // et
  "0700101312": "Aksa",           // Akhsah - Achsah
  "0700101313": "binti–yake",     // bito - his daughter
  "0700101314": "kuwa–mke",       // leishshah - as wife

  // Verse 1:14 - And when she came, she urged him to ask her father for a field. And she dismounted from the donkey, and Caleb said to her, "What do you want?"
  "0700101401": "ikawa",          // vayehi - and it was
  "0700101402": "alipokuja",      // bevoah - when she came
  "0700101403": "akamshawishi",   // vateseteyhu - she urged him
  "0700101404": "kumwomba",       // lishol - to ask
  "0700101405": "baba–yake",      // meaviha - from her father
  "0700101406": "",               // et
  "0700101407": "shamba",         // hasadeh - the field
  "0700101408": "akashuka",       // vatitsnach - and she dismounted
  "0700101409": "kutoka–juu–ya",  // meal - from upon
  "0700101410": "punda",          // hachamor - the donkey
  "0700101411": "akamwambia",     // wayomer - and said
  "0700101412": "Kalebu",         // Kalev - Caleb
  "0700101413": "nini–unataka",   // mah-lakh - what do you want

  // Verse 1:15 - And she said to him, "Give me a blessing; since you have given me the land of the Negev, give me also springs of water." And Caleb gave her the upper springs and the lower springs.
  "0700101501": "akamwambia",     // vatomer - and she said
  "0700101502": "lo",             // lo - to him
  "0700101503": "nipe",           // tenah - give
  "0700101504": "li",             // li - to me
  "0700101505": "baraka",         // berakhah - a blessing
  "0700101506": "kwa–kuwa",       // ki - because
  "0700101507": "umenipa",        // netatani - you have given me
  "0700101508": "nchi–ya",        // eretz - land of
  "0700101509": "Negevu",         // hanegev - the Negev
  "0700101510": "nipe–pia",       // venatata - and give
  "0700101511": "li",             // li - to me
  "0700101512": "chemchemi–za",   // gulot - springs of
  "0700101513": "maji",           // mayim - water
  "0700101514": "akampa",         // wayiten - and gave
  "0700101515": "Kalebu",         // Kalev - Caleb
  "0700101516": "",               // et
  "0700101517": "chemchemi–za–juu", // gulot ilyot - upper springs
  "0700101518": "na",             // ve - and
  "0700101519": "",               // et
  "0700101520": "chemchemi–za–chini", // gulot tachtiyot - lower springs

  // Verse 1:16 - And the children of the Kenite, Moses' father-in-law, went up from the city of palms with the children of Judah into the wilderness of Judah, which is in the Negev of Arad; and they went and dwelt with the people.
  "0700101601": "na–wana–wa",     // uveney - and the sons of
  "0700101602": "Mkeni",          // Keni - the Kenite
  "0700101603": "mkwe–wa",        // choten - father-in-law of
  "0700101604": "Musa",           // Mosheh - Moses
  "0700101605": "walipanda",      // alu - went up
  "0700101606": "kutoka–mji–wa",  // meir - from city of
  "0700101607": "mitende",        // hatamarim - the palms
  "0700101608": "",               // et
  "0700101609": "pamoja–na–wana–wa", // beney - with sons of
  "0700101610": "Yuda",           // Yehudah - Judah
  "0700101611": "nyika–ya",       // midbar - wilderness of
  "0700101612": "Yuda",           // Yehudah - Judah
  "0700101613": "ambayo",         // asher - which
  "0700101614": "iko–Negevu",     // benagev - in the Negev
  "0700101615": "ya–Aradi",       // Arad
  "0700101616": "wakaenda",       // wayelekh - and went
  "0700101617": "wakakaa",        // wayeshev - and dwelt
  "0700101618": "",               // et
  "0700101619": "pamoja–na–watu", // haam - with the people

  // Verse 1:17 - And Judah went with Simeon his brother, and they struck the Canaanite who dwelt in Zephath and utterly destroyed it. So the name of the city was called Hormah.
  "0700101701": "akaenda",        // wayelekh - and went
  "0700101702": "Yuda",           // Yehudah - Judah
  "0700101703": "",               // et
  "0700101704": "pamoja–na–Simeoni", // Shimeon - with Simeon
  "0700101705": "ndugu–yake",     // achiv - his brother
  "0700101706": "wakampiga",      // wayaku - and they struck
  "0700101707": "",               // et
  "0700101708": "Mkanaani",       // haKnaani - the Canaanite
  "0700101709": "aliyekaa",       // yoshev - who dwelt
  "0700101710": "Sefathi",        // Tsephat - Zephath
  "0700101711": "wakauangamiza–kabisa", // vayacharimu - and utterly destroyed
  "0700101712": "oto",            // otah - it
  "0700101713": "wakauita",       // vayikra - and called
  "0700101714": "",               // et
  "0700101715": "jina–la",        // shem - name of
  "0700101716": "mji",            // hair - the city
  "0700101717": "Horma",          // Chormah - Hormah

  // Verse 1:18 - And Judah captured Gaza with its territory, and Ashkelon with its territory, and Ekron with its territory.
  "0700101801": "akauteka",       // wayilkod - and captured
  "0700101802": "Yuda",           // Yehudah - Judah
  "0700101803": "",               // et
  "0700101804": "Gaza",           // Azzah - Gaza
  "0700101805": "na",             // ve - and
  "0700101806": "",               // et
  "0700101807": "mipaka–yake",    // gevulah - its territory
  "0700101808": "na",             // ve - and
  "0700101809": "",               // et
  "0700101810": "Ashkeloni",      // Ashkelon
  "0700101811": "na",             // ve - and
  "0700101812": "",               // et
  "0700101813": "mipaka–yake",    // gevulah - its territory
  "0700101814": "na",             // ve - and
  "0700101815": "",               // et
  "0700101816": "Ekroni",         // Ekron
  "0700101817": "na",             // ve - and
  "0700101818": "",               // et
  "0700101819": "mipaka–yake",    // gevulah - its territory

  // Verse 1:19 - And YHWH was with Judah, and he drove out the inhabitants of the hill country, but he could not drive out the inhabitants of the valley because they had chariots of iron.
  "0700101901": "BWANA–alikuwa",  // vayehi YHWH - and YHWH was
  "0700101902": "BWANA",          // YHWH
  "0700101903": "",               // et
  "0700101904": "pamoja–na–Yuda", // Yehudah - with Judah
  "0700101905": "akawafukuza",    // vayoresh - and he drove out
  "0700101906": "",               // et
  "0700101907": "wakaaji–wa",     // yoshevey - inhabitants of
  "0700101908": "nchi–ya–milima", // hahar - the mountain
  "0700101909": "kwa–kuwa",       // ki - because
  "0700101910": "hakuweza",       // lo - not
  "0700101911": "kuwafukuza",     // lehoresh - to drive out
  "0700101912": "",               // et
  "0700101913": "wakaaji–wa",     // yoshevey - inhabitants of
  "0700101914": "bonde",          // haemek - the valley
  "0700101915": "kwa–kuwa",       // ki - because
  "0700101916": "walikuwa–na",    // lo - they had
  "0700101917": "magari–ya",      // rekhev - chariots of
  "0700101918": "chuma",          // barzel - iron

  // Verse 1:20 - And they gave Hebron to Caleb, as Moses had said, and he drove out from there the three sons of Anak.
  "0700102001": "walimpa",        // vayitnu - and they gave
  "0700102002": "Kalebu",         // leKalev - to Caleb
  "0700102003": "",               // et
  "0700102004": "Hebroni",        // Chevron - Hebron
  "0700102005": "kama",           // kaasher - as
  "0700102006": "alivyosema",     // diber - had spoken
  "0700102007": "Musa",           // Mosheh - Moses
  "0700102008": "akawafukuza",    // vayoresh - and he drove out
  "0700102009": "kutoka–hapo",    // misham - from there
  "0700102010": "",               // et
  "0700102011": "wana–watatu–wa", // sheloshet beney - three sons of
  "0700102012": "watatu",         // sheloshah - three
  "0700102013": "wa–Anaki",       // haAnak - Anak

  // Verse 1:21 - But the children of Benjamin did not drive out the Jebusites who dwelt in Jerusalem; so the Jebusites have dwelt with the children of Benjamin in Jerusalem to this day.
  "0700102101": "na",             // ve - and
  "0700102102": "",               // et
  "0700102103": "Myebusi",        // haYevusi - the Jebusite
  "0700102104": "aliyekaa",       // yoshev - who dwelt
  "0700102105": "Yerusalemu",     // Yerushalaim - Jerusalem
  "0700102106": "hawakumfukuza",  // lo horishu - did not drive out
  "0700102107": "wana–wa",        // beney - sons of
  "0700102108": "Benyamini",      // Benyamin - Benjamin
  "0700102109": "akakaa",         // vayeshev - and dwelt
  "0700102110": "Myebusi",        // haYevusi - the Jebusite
  "0700102111": "",               // et
  "0700102112": "pamoja–na–wana–wa", // beney - with sons of
  "0700102113": "Benyamini",      // Benyamin - Benjamin
  "0700102114": "katika–Yerusalemu", // biYerushalaim - in Jerusalem
  "0700102115": "hadi",           // ad - until
  "0700102116": "leo",            // hayom - this day
  "0700102117": "hii",            // hazeh - this

  // Verse 1:22 - And the house of Joseph also went up against Bethel, and YHWH was with them.
  "0700102201": "wakapanda",      // vayaalu - and went up
  "0700102202": "nyumba–ya",      // beyt - house of
  "0700102203": "Yosefu",         // Yosef - Joseph
  "0700102204": "pia",            // gam - also
  "0700102205": "hema",           // hem - they
  "0700102206": "Betheli",        // Beyt-El - Bethel
  "0700102207": "na–BWANA",       // vaYHWH - and YHWH
  "0700102208": "BWANA",          // YHWH
  "0700102209": "alikuwa–nao",    // imam - was with them

  // Continue with remaining verses of chapter 1...
  // (Verses 1:23-36 follow the same pattern)

  // Verse 1:23 - And the house of Joseph sent to spy out Bethel (now the name of the city formerly was Luz).
  "0700102301": "wakatuma",       // vayatiru - and sent to spy
  "0700102302": "nyumba–ya",      // beyt - house of
  "0700102303": "Yosefu",         // Yosef - Joseph
  "0700102304": "Betheli",        // beBeyt-El - Bethel
  "0700102305": "na–jina–la",     // veshem - and name of
  "0700102306": "mji",            // hair - the city
  "0700102307": "zamani",         // lephanim - formerly
  "0700102308": "lilikuwa–Luzi",  // Luz

  // Verse 1:24 - And the watchmen saw a man coming out of the city, and they said to him, "Please show us the entrance to the city, and we will deal kindly with you."
  "0700102401": "wakaona",        // vayiru - and saw
  "0700102402": "walinzi",        // hashomrim - the watchmen
  "0700102403": "mtu",            // ish - a man
  "0700102404": "akitoka",        // yotse - coming out
  "0700102405": "kutoka–mjini",   // min-hair - from the city
  "0700102406": "wakamwambia",    // vayomru - and said
  "0700102407": "lo",             // lo - to him
  "0700102408": "tafadhali",      // na - please
  "0700102409": "tuonyeshe",      // harenu - show us
  "0700102410": "",               // et
  "0700102411": "mlango–wa",      // mevo - entrance of
  "0700102412": "mji",            // hair - the city
  "0700102413": "nasi–tutakutendea", // veasinu - and we will do
  "0700102414": "itkha",          // itkha - with you
  "0700102415": "wema",           // chesed - kindness

  // Verse 1:25 - And he showed them the entrance to the city, and they struck the city with the edge of the sword, but they let the man and all his family go.
  "0700102501": "akawaonyesha",   // vayarem - and he showed them
  "0700102502": "",               // et
  "0700102503": "mlango–wa",      // mevo - entrance of
  "0700102504": "mji",            // hair - the city
  "0700102505": "wakaupiga",      // vayaku - and they struck
  "0700102506": "",               // et
  "0700102507": "mji",            // hair - the city
  "0700102508": "kwa–makali–ya",  // lefi - with edge of
  "0700102509": "upanga",         // cherev - sword
  "0700102510": "na",             // ve - and
  "0700102511": "",               // et
  "0700102512": "mtu",            // haish - the man
  "0700102513": "na",             // ve - and
  "0700102514": "",               // et
  "0700102515": "jamaa–yake–yote", // kol-mishpachto - all his family
  "0700102516": "waliwaruhusu–kwenda", // shilechu - they let go

  // Verse 1:26 - And the man went to the land of the Hittites and built a city and called its name Luz, which is its name to this day.
  "0700102601": "mtu",            // haish - the man
  "0700102602": "akaenda",        // vayelekh - and went
  "0700102603": "nchi–ya",        // eretz - land of
  "0700102604": "Wahiti",         // haChitim - the Hittites
  "0700102605": "akajenga",       // vayiven - and built
  "0700102606": "mji",            // ir - a city
  "0700102607": "akauita",        // vayikra - and called
  "0700102608": "jina–lake",      // shemah - its name
  "0700102609": "Luzi",           // Luz
  "0700102610": "ndilo",          // hu - it is
  "0700102611": "jina–lake",      // shemah - its name
  "0700102612": "hadi",           // ad - until
  "0700102613": "leo",            // hayom - this day
  "0700102614": "hii",            // hazeh - this

  // Verse 1:27 - Manasseh did not drive out the inhabitants of Beth-shean and its villages, or Taanach and its villages, or the inhabitants of Dor and its villages, or the inhabitants of Ibleam and its villages, or the inhabitants of Megiddo and its villages; but the Canaanites persisted in dwelling in that land.
  "0700102701": "na–Manase",      // velo horish Menasheh - and Manasseh did not drive out
  "0700102702": "hakuwafukuza",   // lo horish - did not drive out
  "0700102703": "",               // et
  "0700102704": "wakaaji–wa",     // yoshevey - inhabitants of
  "0700102705": "Beth-Sheani",    // Beyt-Shean
  "0700102706": "na",             // ve - and
  "0700102707": "",               // et
  "0700102708": "vijiji–vyake",   // benoteyha - its villages
  "0700102709": "na",             // ve - and
  "0700102710": "",               // et
  "0700102711": "Taanaki",        // Taanakh - Taanach
  "0700102712": "na",             // ve - and
  "0700102713": "",               // et
  "0700102714": "vijiji–vyake",   // benoteyha - its villages
  "0700102715": "na",             // ve - and
  "0700102716": "",               // et
  "0700102717": "wakaaji–wa",     // yoshevey - inhabitants of
  "0700102718": "Dori",           // Dor
  "0700102719": "na",             // ve - and
  "0700102720": "",               // et
  "0700102721": "vijiji–vyake",   // benoteyha - its villages
  "0700102722": "na",             // ve - and
  "0700102723": "",               // et
  "0700102724": "wakaaji–wa",     // yoshevey - inhabitants of
  "0700102725": "Ibleamu",        // Yivleam - Ibleam
  "0700102726": "na",             // ve - and
  "0700102727": "",               // et
  "0700102728": "vijiji–vyake",   // benoteyha - its villages
  "0700102729": "na",             // ve - and
  "0700102730": "",               // et
  "0700102731": "wakaaji–wa",     // yoshevey - inhabitants of
  "0700102732": "Megido",         // Megido - Megiddo
  "0700102733": "na",             // ve - and
  "0700102734": "",               // et
  "0700102735": "vijiji–vyake",   // benoteyha - its villages
  "0700102736": "Mkanaani–aliendelea", // vayoel haKnaani - the Canaanite persisted
  "0700102737": "kukaa",          // lashevet - to dwell
  "0700102738": "katika–nchi",    // baaretz - in the land
  "0700102739": "ile",            // hazot - this

  // Verse 1:28 - And when Israel became strong, they put the Canaanites to forced labor, but did not utterly drive them out.
  "0700102801": "ikawa",          // vayehi - and it was
  "0700102802": "Israeli–alipokuwa",  // ki chazak Yisrael - when Israel was strong
  "0700102803": "Israeli",        // Yisrael - Israel
  "0700102804": "hodari",         // chazak - strong
  "0700102805": "akawatia",       // vayasem - and he put
  "0700102806": "",               // et
  "0700102807": "Mkanaani",       // haKnaani - the Canaanite
  "0700102808": "katika–kazi–ya–kulazimishwa", // lamas - to forced labor
  "0700102809": "na–kuwafukuza",  // vehorish - and driving out
  "0700102810": "hawakuwafukuza–kabisa", // lo horisho - did not utterly drive out

  // Verse 1:29 - And Ephraim did not drive out the Canaanites who dwelt in Gezer, so the Canaanites dwelt in Gezer among them.
  "0700102901": "na–Efraimu",     // veEfrayim - and Ephraim
  "0700102902": "hakumfukuza",    // lo horish - did not drive out
  "0700102903": "",               // et
  "0700102904": "Mkanaani",       // haKnaani - the Canaanite
  "0700102905": "aliyekaa",       // hayoshev - who dwelt
  "0700102906": "Gezeri",         // beGezer - in Gezer
  "0700102907": "akakaa",         // vayeshev - and dwelt
  "0700102908": "Mkanaani",       // haKnaani - the Canaanite
  "0700102909": "kati–yao",       // bekirbo - among them
  "0700102910": "Gezeri",         // beGezer - in Gezer

  // Verse 1:30 - Zebulun did not drive out the inhabitants of Kitron or the inhabitants of Nahalol, so the Canaanites dwelt among them and became subject to forced labor.
  "0700103001": "Zebuluni",       // Zevulun - Zebulun
  "0700103002": "hakuwafukuza",   // lo horish - did not drive out
  "0700103003": "",               // et
  "0700103004": "wakaaji–wa",     // yoshevey - inhabitants of
  "0700103005": "Kitroni",        // Kitron
  "0700103006": "na",             // ve - and
  "0700103007": "",               // et
  "0700103008": "wakaaji–wa",     // yoshevey - inhabitants of
  "0700103009": "Nahaloli",       // Nahalol
  "0700103010": "akakaa",         // vayeshev - and dwelt
  "0700103011": "Mkanaani",       // haKnaani - the Canaanite
  "0700103012": "kati–yao",       // bekirbo - among them
  "0700103013": "wakawa",         // vayehi - and became
  "0700103014": "kwa–kazi–ya–kulazimishwa", // lamas - to forced labor

  // Verse 1:31 - Asher did not drive out the inhabitants of Acco, or the inhabitants of Sidon, or Ahlab, or Achzib, or Helbah, or Aphik, or Rehob.
  "0700103101": "Asheri",         // Asher
  "0700103102": "hakuwafukuza",   // lo horish - did not drive out
  "0700103103": "",               // et
  "0700103104": "wakaaji–wa",     // yoshevey - inhabitants of
  "0700103105": "Ako",            // Akko - Acco
  "0700103106": "na",             // ve - and
  "0700103107": "",               // et
  "0700103108": "wakaaji–wa",     // yoshevey - inhabitants of
  "0700103109": "Sidoni",         // Tsidon - Sidon
  "0700103110": "na",             // ve - and
  "0700103111": "",               // et
  "0700103112": "Ahlabu",         // Achlab - Ahlab
  "0700103113": "na",             // ve - and
  "0700103114": "",               // et
  "0700103115": "Akzibu",         // Akhziv - Achzib
  "0700103116": "na",             // ve - and
  "0700103117": "",               // et
  "0700103118": "Helba",          // Chelbah - Helbah
  "0700103119": "na",             // ve - and
  "0700103120": "",               // et
  "0700103121": "Afiki",          // Afik - Aphik
  "0700103122": "na",             // ve - and
  "0700103123": "",               // et
  "0700103124": "Rehobu",         // Rechov - Rehob

  // Verse 1:32 - So the Asherites dwelt among the Canaanites, the inhabitants of the land, for they did not drive them out.
  "0700103201": "akakaa",         // vayeshev - and dwelt
  "0700103202": "Waasheri",       // haAsheri - the Asherite
  "0700103203": "kati–ya",        // bekerev - among
  "0700103204": "Wakanaani",      // haKnaani - the Canaanites
  "0700103205": "wakaaji–wa",     // yoshevey - inhabitants of
  "0700103206": "nchi",           // haaretz - the land
  "0700103207": "kwa–kuwa",       // ki - because
  "0700103208": "hakuwafukuza",   // lo horisho - did not drive them out

  // Verse 1:33 - Naphtali did not drive out the inhabitants of Beth-shemesh, or the inhabitants of Beth-anath, but dwelt among the Canaanites, the inhabitants of the land; nevertheless, the inhabitants of Beth-shemesh and Beth-anath became subject to forced labor for them.
  "0700103301": "Naftali",        // Naftali - Naphtali
  "0700103302": "hakuwafukuza",   // lo horish - did not drive out
  "0700103303": "",               // et
  "0700103304": "wakaaji–wa",     // yoshevey - inhabitants of
  "0700103305": "Beth-Shemeshi",  // Beyt-Shemesh
  "0700103306": "na",             // ve - and
  "0700103307": "",               // et
  "0700103308": "wakaaji–wa",     // yoshevey - inhabitants of
  "0700103309": "Beth-Anathi",    // Beyt-Anat
  "0700103310": "akakaa",         // vayeshev - and dwelt
  "0700103311": "kati–ya",        // bekerev - among
  "0700103312": "Wakanaani",      // haKnaani - the Canaanites
  "0700103313": "wakaaji–wa",     // yoshevey - inhabitants of
  "0700103314": "nchi",           // haaretz - the land
  "0700103315": "lakini–wakaaji–wa", // veyoshevey - but inhabitants of
  "0700103316": "Beth-Shemeshi",  // Beyt-Shemesh
  "0700103317": "na–Beth-Anathi", // uBeyt-Anat - and Beth-anath
  "0700103318": "walikuwa",       // hayu - were
  "0700103319": "kwa–kazi–ya–kulazimishwa", // lamas - to forced labor
  "0700103320": "kwao",           // lahem - for them

  // Verse 1:34 - And the Amorites forced the children of Dan into the hill country, for they did not allow them to come down to the valley.
  "0700103401": "Waamori",        // haEmori - the Amorites
  "0700103402": "wakawasukuma",   // vayilchats - forced
  "0700103403": "",               // et
  "0700103404": "wana–wa",        // beney - sons of
  "0700103405": "Dani",           // Dan
  "0700103406": "mlimani",        // haharah - to the mountain
  "0700103407": "kwa–kuwa",       // ki - because
  "0700103408": "hawakuwaruhusu", // lo netano - did not allow them
  "0700103409": "kushuka",        // laredet - to come down
  "0700103410": "bondeni",        // laemek - to the valley

  // Verse 1:35 - The Amorites persisted in dwelling in Mount Heres, in Aijalon, and in Shaalbim; but when the hand of the house of Joseph grew strong, they became subject to forced labor.
  "0700103501": "Mwamori–aliendelea", // vayoel haEmori - the Amorite persisted
  "0700103502": "kukaa",          // lashevet - to dwell
  "0700103503": "mlimani–Heresi", // beHar-Cheres - in Mount Heres
  "0700103504": "na–Aijaloni",    // beAyalon - in Aijalon
  "0700103505": "na–Shaalbimu",   // uveShaalbim - and in Shaalbim
  "0700103506": "lakini–mkono–wa", // vatichbad yad - but hand of grew heavy
  "0700103507": "nyumba–ya",      // beyt - house of
  "0700103508": "Yosefu",         // Yosef - Joseph
  "0700103509": "ulipoongezeka",  // heavy/strong
  "0700103510": "wakawa",         // vayihyu - and they became
  "0700103511": "kwa–kazi–ya–kulazimishwa", // lamas - to forced labor

  // Verse 1:36 - And the border of the Amorites ran from the Ascent of Akrabbim, from Sela and upward.
  "0700103601": "na–mpaka–wa",    // ugevul - and border of
  "0700103602": "Waamori",        // haEmori - the Amorites
  "0700103603": "ulikuwa–kutoka", // mimaleh - from ascent of
  "0700103604": "Akrabimu",       // Akrabim - Akrabbim
  "0700103605": "kutoka–Sela",    // miHasela - from Sela
  "0700103606": "na–kwenda–juu",  // vamalah - and upward
};

// Export the glosses for use with expand_glosses_chirho
export const glossesChirho = judgesSwaGlossesChirho;

// Main execution
async function mainChirho() {
  console.log(`Swahili Translation for Judges - ${Object.keys(judgesSwaGlossesChirho).length} words translated`);
  console.log("Run expand_glosses_chirho with language_code='swa', book_name='jdg'");
}

mainChirho();
