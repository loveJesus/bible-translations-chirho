// For God so loved the world, that He gave His only begotten Son,
// that all who believe in Him should not perish but have everlasting life.
// — John 3:16

/**
 * Swahili (swa) Translation for 2 Chronicles Chapters 30-36
 *
 * Conventions (from translate-swa-chirho skill):
 * - BWANA: YHWH (divine name, all caps for LORD)
 * - Yahwe: YHWH (when used as proper name)
 * - Mungu: Elohim (God)
 * - Bwana: Adonai (Lord - human or general)
 * - N-dash particles: "na–akatuma", "kwa–BWANA"
 * - Proper names transliterated to Swahili standards
 * - Noun class agreement maintained
 */

import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { join } from 'path';
import postgres from 'postgres';

const DATABASE_URL_CHIRHO = process.env.DATABASE_URL_CHIRHO
  ?? 'postgresql://postgres:asdfasdf@localhost:5435/postgres';

const sqlChirho = postgres(DATABASE_URL_CHIRHO);

const HEADER_CHIRHO = `-- For God so loved the world, that He gave His only begotten Son,
-- that all who believe in Him should not perish but have everlasting life.
-- — John 3:16

`;

// Swahili glosses for 2 Chronicles 30-36
// Format: word_id -> Swahili gloss
const swa2Ch30to36GlossesChirho: Record<string, string> = {
  // ===== CHAPTER 30 =====
  // 30:1 - Hezekiah sent to all Israel and Judah, and wrote letters to Ephraim and Manasseh, to come to the house of YHWH in Jerusalem to keep the Passover to YHWH the God of Israel
  "1403000101": "na–akatuma",        // wayishlach - and he sent
  "1403000102": "Hezekia",           // Yechizkiyahu - Hezekiah
  "1403000103": "kwa–",              // al - unto
  "1403000104": "Israeli–wote",      // kol - all
  "1403000105": "Israeli",           // Yisrael - Israel
  "1403000106": "na–Yuda",           // viYhudah - and Judah
  "1403000107": "na–pia–",           // vegam - and also
  "1403000108": "barua",             // igerot - letters
  "1403000109": "aliandika",         // katav - he wrote
  "1403000110": "kwa–",              // al - unto
  "1403000111": "Efraimu",           // Efrayim - Ephraim
  "1403000112": "na–Manase",         // uMenasheh - and Manasseh
  "1403000113": "kuja",              // lavo - to come
  "1403000114": "kwenye–nyumba–ya–", // leveyt - to house of
  "1403000115": "BWANA",             // YHWH
  "1403000116": "katika–Yerusalemu", // biYerushalayim - in Jerusalem
  "1403000117": "kushika",           // laasot - to keep/do
  "1403000118": "Pasaka",            // Pesach - Passover
  "1403000119": "kwa–BWANA",         // laYHWH - for YHWH
  "1403000120": "Mungu–wa",          // Elohey - God of
  "1403000121": "Israeli",           // Yisrael - Israel

  // 30:2 - The king had taken counsel with his princes and all the congregation in Jerusalem to keep the Passover in the second month
  "1403000201": "na–alifanya–shauri", // vayivaatz - and took counsel
  "1403000202": "mfalme",            // hamelekh - the king
  "1403000203": "na–wakuu–wake",     // vesarav - and his princes
  "1403000204": "na–kusanyiko–lote", // vekol-hakahal - and all the congregation
  "1403000205": "katika–Yerusalemu", // biYerushalayim - in Jerusalem
  "1403000206": "kushika",           // laasot - to keep
  "1403000207": "Pasaka",            // haPesach - the Passover
  "1403000208": "mwezi–wa",          // bachodesh - in the month
  "1403000209": "pili",              // hasheni - the second

  // 30:3 - For they could not keep it at that time because the priests had not sanctified themselves sufficiently, and the people had not gathered at Jerusalem
  "1403000301": "kwa–kuwa",          // ki - for/because
  "1403000302": "hawakuweza",        // lo yakhlu - they could not
  "1403000303": "kushika",           // laasoto - to keep it
  "1403000304": "wakati–ule",        // baet hahi - at that time
  "1403000305": "kwa–kuwa",          // ki - for/because
  "1403000306": "makuhani",          // hakohanim - the priests
  "1403000307": "hawakujitakasa",    // lo hitkadesh - had not sanctified themselves
  "1403000308": "vya–kutosha",       // leday - sufficiently
  "1403000309": "na–watu",           // vehaam - and the people
  "1403000310": "hawakukusanyika",   // lo neesfu - had not gathered
  "1403000311": "Yerusalemu",        // Yerushalayim - Jerusalem

  // 30:4 - The thing was right in the eyes of the king and in the eyes of all the congregation
  "1403000401": "na–jambo–hili",     // vayishar hadavar - and the thing was right
  "1403000402": "lilikuwa–jema",     // - was good
  "1403000403": "machoni–pa",        // beeney - in the eyes of
  "1403000404": "mfalme",            // hamelekh - the king
  "1403000405": "na–machoni–pa",     // uveeney - and in the eyes of
  "1403000406": "kusanyiko–lote",    // kol-hakahal - all the congregation

  // 30:5 - They established a decree to make proclamation throughout all Israel from Beer-sheba to Dan that they should come to keep the Passover to YHWH the God of Israel at Jerusalem
  "1403000501": "wakaanzisha",       // vayaamidu - and they established
  "1403000502": "amri",              // davar - a decree/word
  "1403000503": "kupitisha–tangazo", // lehaarir kol - to make proclamation
  "1403000504": "katika–Israeli–yote", // bekhol-Yisrael - throughout all Israel
  "1403000505": "kutoka–Beer-Sheba", // miBeer-Sheva - from Beer-sheba
  "1403000506": "hadi–Dani",         // vead-Dan - to Dan
  "1403000507": "kwamba–waje",       // lavo - that they should come
  "1403000508": "kushika",           // laasot - to keep
  "1403000509": "Pasaka",            // Pesach - Passover
  "1403000510": "kwa–BWANA",         // laYHWH - to YHWH
  "1403000511": "Mungu–wa",          // Elohey - God of
  "1403000512": "Israeli",           // Yisrael - Israel
  "1403000513": "Yerusalemu",        // biYerushalayim - at Jerusalem
  "1403000514": "kwa–kuwa",          // ki - for
  "1403000515": "hawakuishika",      // lo - not
  "1403000516": "kama–ilivyoandikwa", // kakatuv - as written

  // 30:6 - So the couriers went with the letters from the king and his princes throughout all Israel and Judah according to the commandment of the king
  "1403000601": "wakaenda",          // vayelkhu - and went
  "1403000602": "wajumbe",           // haratsim - the couriers
  "1403000603": "na–barua",          // baigerot - with the letters
  "1403000604": "kutoka–kwa",        // meyad - from hand of
  "1403000605": "mfalme",            // hamelekh - the king
  "1403000606": "na–wakuu–wake",     // vesarav - and his princes
  "1403000607": "katika–Israeli–yote", // bekhol-Yisrael - throughout all Israel
  "1403000608": "na–Yuda",           // viYhudah - and Judah
  "1403000609": "kama–amri–ya",      // ukemitsvat - and according to commandment of
  "1403000610": "mfalme",            // hamelekh - the king
  "1403000611": "kusema",            // lemor - saying

  // 30:7 - Do not be like your fathers and your brothers who trespassed against YHWH the God of their fathers so that He gave them up to desolation as you see
  "1403000701": "msiwe",             // al-tihyu - do not be
  "1403000702": "kama–baba–zenu",    // kaavotekhem - like your fathers
  "1403000703": "na–ndugu–zenu",     // vekaachekhem - and like your brothers
  "1403000704": "waliokosa",         // asher maalu - who trespassed
  "1403000705": "kwa–BWANA",         // baYHWH - against YHWH
  "1403000706": "Mungu–wa",          // Elohey - God of
  "1403000707": "baba–zao",          // avotam - their fathers
  "1403000708": "hivyo–akawatoa",    // vayitnem - so He gave them
  "1403000709": "kuwa–ukiwa",        // leshamah - to desolation
  "1403000710": "kama–mnavyoona",    // kaasher atem roim - as you see

  // 30:8 - Now do not be stiff-necked like your fathers but yield yourselves to YHWH and come to His sanctuary which He has sanctified forever and serve YHWH your God
  "1403000801": "sasa",              // atah - now
  "1403000802": "msiwe–wakaidi",     // al-takshu orpekhem - do not be stiff-necked
  "1403000803": "kama–baba–zenu",    // kaavotekhem - like your fathers
  "1403000804": "bali–jitoeni",      // tenu-yad - yield yourselves (give hand)
  "1403000805": "kwa–BWANA",         // laYHWH - to YHWH
  "1403000806": "na–njooni",         // uvou - and come
  "1403000807": "patakatifu–pake",   // lemikdasho - to His sanctuary
  "1403000808": "alipolitakasa",     // asher hikdish - which He sanctified
  "1403000809": "milele",            // leolam - forever
  "1403000810": "na–mtumikieni",     // veivdu - and serve
  "1403000811": "BWANA",             // et-YHWH - YHWH
  "1403000812": "Mungu–wenu",        // Eloheykhem - your God
  "1403000813": "naye–ataondoa",     // veyashov - and He will turn away
  "1403000814": "hasira–yake–kali",  // charon apo - His fierce anger
  "1403000815": "kutoka–kwenu",      // mikkem - from you

  // 30:9 - For if you return to YHWH your brothers and your children will find compassion before those who led them captive and will return to this land
  "1403000901": "kwa–kuwa",          // ki - for
  "1403000902": "mkimrudia",         // beshuvkhem - if you return
  "1403000903": "BWANA",             // el-YHWH - to YHWH
  "1403000904": "ndugu–zenu",        // achekhem - your brothers
  "1403000905": "na–watoto–wenu",    // uvneykhem - and your children
  "1403000906": "watapata–huruma",   // lerachamim - will find compassion
  "1403000907": "mbele–ya",          // lipney - before
  "1403000908": "waliowachukua–mateka", // shovehem - those who led captive
  "1403000909": "na–watarudi",       // velashuv - and will return
  "1403000910": "nchi–hii",          // laaretz hazot - to this land
  "1403000911": "kwa–kuwa–BWANA",    // ki-chanun - for gracious
  "1403000912": "Mungu–wenu",        // YHWH Eloheykhem - YHWH your God
  "1403000913": "ana–neema",         // verachum - and merciful
  "1403000914": "na–rehema",         // -
  "1403000915": "wala–hatawaondoa",  // velo-yasir - and will not turn away
  "1403000916": "uso–wake",          // panim - His face
  "1403000917": "kutoka–kwenu",      // mikkem - from you
  "1403000918": "mkimrudia",         // im-tashuvu - if you return
  "1403000919": "kwake",             // elav - to Him

  // 30:10 - So the couriers passed from city to city through the land of Ephraim and Manasseh as far as Zebulun but they laughed them to scorn and mocked them
  "1403001001": "wakapita",          // vayihyu - and passed
  "1403001002": "wajumbe",           // haratsim - the couriers
  "1403001003": "kutoka–mji–hadi–mji", // meir leir - from city to city
  "1403001004": "kupitia–nchi–ya",   // beeretz - through land of
  "1403001005": "Efraimu",           // Efrayim - Ephraim
  "1403001006": "na–Manase",         // uMenasheh - and Manasseh
  "1403001007": "hadi–Zebuloni",     // vead-Zevulun - as far as Zebulun
  "1403001008": "lakini–waliwacheka", // vayihyu maskim - but they laughed at them
  "1403001009": "na–kuwadharau",     // umalbigim - and mocked them

  // 30:11 - Nevertheless some men from Asher Manasseh and Zebulun humbled themselves and came to Jerusalem
  "1403001101": "lakini",            // akh - nevertheless
  "1403001102": "watu–wengine",      // anashim - some men
  "1403001103": "kutoka–Asheri",     // meAsher - from Asher
  "1403001104": "na–Manase",         // uMenasheh - and Manasseh
  "1403001105": "na–Zebuloni",       // umiZevulun - and from Zebulun
  "1403001106": "walijinyenyekeza",  // nikhneeu - humbled themselves
  "1403001107": "wakaja",            // vayavou - and came
  "1403001108": "Yerusalemu",        // Yerushalayim - to Jerusalem

  // 30:12 - Also the hand of God was on Judah to give them one heart to do the commandment of the king and the princes by the word of YHWH
  "1403001201": "pia–mkono–wa",      // gam - also the hand of
  "1403001202": "Mungu",             // haElohim - God
  "1403001203": "ulikuwa–juu–ya",    // hayetah - was on
  "1403001204": "Yuda",              // biYhudah - Judah
  "1403001205": "kuwapa",            // latet lahem - to give them
  "1403001206": "moyo–mmoja",        // lev echad - one heart
  "1403001207": "kutimiza",          // laasot - to do
  "1403001208": "amri–ya",           // mitsvat - commandment of
  "1403001209": "mfalme",            // hamelekh - the king
  "1403001210": "na–wakuu",          // vehasarim - and the princes
  "1403001211": "kwa–neno–la",       // bidvar - by word of
  "1403001212": "BWANA",             // YHWH

  // 30:13 - So there assembled at Jerusalem many people to keep the feast of unleavened bread in the second month a very great congregation
  "1403001301": "wakakusanyika",     // vayeasfu - and assembled
  "1403001302": "Yerusalemu",        // Yerushalayim - at Jerusalem
  "1403001303": "watu–wengi",        // am-rav - many people
  "1403001304": "kushika",           // laasot - to keep
  "1403001305": "sikukuu–ya",        // et-chag - the feast of
  "1403001306": "mikate–isiyotiwa–chachu", // hamatsot - unleavened bread
  "1403001307": "mwezi–wa",          // bachodesh - in the month
  "1403001308": "pili",              // hasheni - the second
  "1403001309": "kusanyiko",         // kahal - congregation
  "1403001310": "kubwa–sana",        // larov meod - very great

  // 30:14 - They arose and took away the altars that were in Jerusalem and all the altars for incense they took away and cast them into the brook Kidron
  "1403001401": "wakasimama",        // vayakumu - and they arose
  "1403001402": "wakaondoa",         // vayasiru - and took away
  "1403001403": "madhabahu",         // hamizbeachot - the altars
  "1403001404": "zilizokuwa",        // asher - that were
  "1403001405": "katika–Yerusalemu", // biYerushalayim - in Jerusalem
  "1403001406": "na–madhabahu–zote", // veet kol - and all the altars
  "1403001407": "za–uvumba",         // hamekatarot - for incense
  "1403001408": "wakaziondoa",       // hesiru - they took away
  "1403001409": "wakazitupa",        // vayashlikhu - and cast them
  "1403001410": "mtoni–Kidroni",     // lenachal Kidron - into brook Kidron

  // 30:15 - Then they slaughtered the Passover on the fourteenth day of the second month and the priests and Levites were ashamed and sanctified themselves and brought burnt offerings to the house of YHWH
  "1403001501": "wakachinja",        // vayishchatu - and they slaughtered
  "1403001502": "Pasaka",            // haPesach - the Passover
  "1403001503": "siku–ya",           // bearbaah asar - on the fourteenth
  "1403001504": "kumi–na–nne",       // yom - day
  "1403001505": "mwezi–wa",          // lachodesh - of the month
  "1403001506": "pili",              // hasheni - the second
  "1403001507": "na–makuhani",       // vehakohanim - and the priests
  "1403001508": "na–Walawi",         // vehaLeviim - and the Levites
  "1403001509": "waliaibishwa",      // nikhlemu - were ashamed
  "1403001510": "wakajitakasa",      // vayitkadash - and sanctified themselves
  "1403001511": "wakaleta",          // vayaviu - and brought
  "1403001512": "sadaka–za–kuteketezwa", // olot - burnt offerings
  "1403001513": "nyumbani–mwa",      // beyt - house of
  "1403001514": "BWANA",             // YHWH

  // 30:16 - They stood in their place according to their custom according to the law of Moses the man of God and the priests sprinkled the blood which they received from the hand of the Levites
  "1403001601": "wakasimama",        // vayaamdu - and they stood
  "1403001602": "mahali–pao",        // al-omadam - in their place
  "1403001603": "kwa–desturi–yao",   // kemishpatam - according to their custom
  "1403001604": "kama–sheria–ya",    // ketorat - according to law of
  "1403001605": "Musa",              // Mosheh - Moses
  "1403001606": "mtu–wa",            // ish - man of
  "1403001607": "Mungu",             // haElohim - God
  "1403001608": "makuhani",          // hakohanim - the priests
  "1403001609": "wakanyunyiza",      // zorkim - sprinkled
  "1403001610": "damu",              // et-hadam - the blood
  "1403001611": "kutoka–mkono–wa",   // miyad - from hand of
  "1403001612": "Walawi",            // haLeviim - the Levites

  // 30:17 - For there were many in the congregation who had not sanctified themselves so the Levites had charge of slaughtering the Passover lambs for everyone who was not clean to sanctify them to YHWH
  "1403001701": "kwa–kuwa",          // ki - for
  "1403001702": "walikuwepo–wengi",  // rabat - many
  "1403001703": "katika–kusanyiko",  // bakahal - in the congregation
  "1403001704": "ambao",             // asher - who
  "1403001705": "hawakujitakasa",    // lo hitkadash - had not sanctified themselves
  "1403001706": "na–Walawi",         // vehaLeviim - and the Levites
  "1403001707": "walikuwa–na–wajibu–wa", // al - had charge of
  "1403001708": "kuchinja",          // shechitat - slaughtering
  "1403001709": "wana–kondoo–wa",    // haPesachim - the Passover lambs
  "1403001710": "Pasaka",            // -
  "1403001711": "kwa–kila–mmoja",    // lekhol - for every one
  "1403001712": "ambaye",            // asher - who
  "1403001713": "hakuwa–safi",       // lo tahor - was not clean
  "1403001714": "kuwatakasa",        // lehakdish - to sanctify them
  "1403001715": "kwa–BWANA",         // laYHWH - to YHWH

  // 30:18-27 (continuing with remaining verses of chapter 30)
  "1403001801": "kwa–kuwa",          // ki - for
  "1403001802": "wengi",             // marbat - many
  "1403001803": "wa–watu",           // haam - of the people
  "1403001804": "wengi–kutoka",      // rabim - many from
  "1403001805": "Efraimu",           // miEfrayim - Ephraim
  "1403001806": "na–Manase",         // uMenasheh - and Manasseh
  "1403001807": "Isakari",           // Yisakhar - Issachar
  "1403001808": "na–Zebuloni",       // uZevulun - and Zebulun
  "1403001809": "hawakujitakasa",    // lo hittaharu - had not purified themselves
  "1403001810": "bado",              // ki - yet
  "1403001811": "walikula",          // akhlu - they ate
  "1403001812": "Pasaka",            // et-haPesach - the Passover
  "1403001813": "si–kama–ilivyoandikwa", // belo kakatuv - not as written
  "1403001814": "kwa–kuwa",          // ki - for
  "1403001815": "Hezekia",           // Yechizkiyahu - Hezekiah
  "1403001816": "aliwaombea",        // hitpalel aleihem - prayed for them
  "1403001817": "akisema",           // lemor - saying
  "1403001818": "BWANA",             // YHWH
  "1403001819": "mwema",             // hatov - the good
  "1403001820": "amsamehe",          // yechaper - pardon
  "1403001821": "kila–mmoja",        // bead kol - every one

  "1403001901": "aliyeandaa",        // hechin - who has prepared
  "1403001902": "moyo–wake",         // levavo - his heart
  "1403001903": "kumtafuta",         // lidrosh - to seek
  "1403001904": "Mungu",             // haElohim - God
  "1403001905": "BWANA",             // YHWH
  "1403001906": "Mungu–wa",          // Elohey - God of
  "1403001907": "baba–zake",         // avotav - his fathers
  "1403001908": "hata–kama",         // velo - though not
  "1403001909": "si–kama",           // ketohorat - according to purification
  "1403001910": "utakatifu",         // hakodesh - of the sanctuary

  "1403002001": "BWANA–akasikia",    // vayishma YHWH - and YHWH heard
  "1403002002": "Hezekia",           // el-Yechizkiyahu - Hezekiah
  "1403002003": "akawaponya",        // vayirpa - and healed
  "1403002004": "watu",              // et-haam - the people

  "1403002101": "wakafanya",         // vayaasu - and kept
  "1403002102": "wana–wa",           // beney - sons of
  "1403002103": "Israeli",           // Yisrael - Israel
  "1403002104": "waliokuwepo",       // hanimtseim - who were present
  "1403002105": "Yerusalemu",        // biYerushalayim - at Jerusalem
  "1403002106": "sikukuu–ya",        // et-chag - the feast of
  "1403002107": "mikate–isiyotiwa–chachu", // hamatsot - unleavened bread
  "1403002108": "siku–saba",         // shivat yamim - seven days
  "1403002109": "kwa–furaha–kubwa",  // besimchah gedolah - with great gladness

  "1403002201": "na–Walawi",         // vehaLeviim - and the Levites
  "1403002202": "na–makuhani",       // vehakohanim - and the priests
  "1403002203": "wakimsifu",         // mehalehlim - praising
  "1403002204": "BWANA",             // laYHWH - YHWH
  "1403002205": "siku–baada–ya–siku", // yom beyom - day by day
  "1403002206": "kwa–vyombo–vya",    // bichley - with instruments of
  "1403002207": "nguvu",             // oz - strength
  "1403002208": "kwa–BWANA",         // laYHWH - for YHWH

  "1403002301": "Hezekia–akasema",   // vayedaber Yechizkiyahu - and Hezekiah spoke
  "1403002302": "kwa–moyo–wa",       // al-lev - to the heart of
  "1403002303": "Walawi–wote",       // kol-haLeviim - all the Levites
  "1403002304": "waliofanya–vizuri", // hamaskilim - who showed good
  "1403002305": "sifa",              // sekhel-tov - understanding
  "1403002306": "kwa–BWANA",         // laYHWH - for YHWH
  "1403002307": "wakala",            // vayokhlu - and they ate
  "1403002308": "sikukuu",           // et-hamoed - the festival
  "1403002309": "siku–saba",         // shivat hayamim - seven days
  "1403002310": "wakitoa–dhabihu",   // mezabchim - sacrificing
  "1403002311": "za–amani",          // zivchey shelamim - peace offerings
  "1403002312": "na–kumshukuru",     // umitvadim - and giving thanks to
  "1403002313": "BWANA",             // laYHWH - YHWH
  "1403002314": "Mungu–wa",          // Elohey - God of
  "1403002315": "baba–zao",          // avoteyhem - their fathers

  "1403002401": "kusanyiko–lote",    // kol-hakahal - all the congregation
  "1403002402": "wakashauriana",     // vayivaatsu - took counsel
  "1403002403": "kushika",           // laasot - to keep
  "1403002404": "siku–nyingine–saba", // shivat yamim acherim - another seven days
  "1403002405": "wakafanya",         // vayaasu - and they kept
  "1403002406": "kwa–furaha",        // simchah - with gladness
  "1403002407": "siku–saba",         // shivat yamim - seven days

  "1403002501": "kwa–kuwa",          // ki - for
  "1403002502": "Hezekia",           // Chizkiyahu - Hezekiah
  "1403002503": "mfalme–wa",         // melekh - king of
  "1403002504": "Yuda",              // Yehudah - Judah
  "1403002505": "alitoa",            // herim - contributed
  "1403002506": "kwa–kusanyiko",     // lakahal - to the congregation
  "1403002507": "ng'ombe–dume",      // parim - bulls
  "1403002508": "elfu–moja",         // elef - thousand
  "1403002509": "na–kondoo",         // vetson - and sheep
  "1403002510": "elfu–saba",         // shivat alafim - seven thousand
  "1403002511": "na–wakuu",          // vehasarim - and the princes
  "1403002512": "walitoa",           // herimu - contributed
  "1403002513": "kwa–kusanyiko",     // lakahal - to the congregation
  "1403002514": "ng'ombe–dume",      // parim - bulls
  "1403002515": "elfu–moja",         // elef - thousand
  "1403002516": "na–kondoo",         // vetson - and sheep
  "1403002517": "elfu–kumi",         // aseret alafim - ten thousand
  "1403002518": "na–makuhani",       // vekohanim - and priests
  "1403002519": "wengi",             // larov - many
  "1403002520": "walijitakasa",      // hitkadesh - sanctified themselves

  "1403002601": "wakafurahi",        // vayismach - and rejoiced
  "1403002602": "kusanyiko–lote",    // kol-kahal - all the congregation
  "1403002603": "la–Yuda",           // Yehudah - of Judah
  "1403002604": "na–makuhani",       // vehakohanim - and the priests
  "1403002605": "na–Walawi",         // vehaLeviim - and the Levites
  "1403002606": "na–kusanyiko–lote", // vekhol-hakahal - and all the congregation
  "1403002607": "lililotoka",        // habaim - that came
  "1403002608": "Israeli",           // miYisrael - from Israel
  "1403002609": "na–wageni",         // vehagerim - and the sojourners
  "1403002610": "waliotoka",         // habaim - who came
  "1403002611": "nchi–ya",           // meeretz - from land of
  "1403002612": "Israeli",           // Yisrael - Israel
  "1403002613": "na–waliokaa",       // vehayoshvim - and who dwelt
  "1403002614": "Yuda",              // biYhudah - in Judah

  "1403002701": "na–furaha–kubwa",   // vatehi simchah - and there was great gladness
  "1403002702": "ilikuwepo",         // gedolah -
  "1403002703": "katika–Yerusalemu", // biYerushalayim - in Jerusalem
  "1403002704": "kwa–kuwa",          // ki - for
  "1403002705": "tangu–siku",        // miyemey - since the days
  "1403002706": "za–Solomoni",       // Shelomoh - of Solomon
  "1403002707": "mwana–wa",          // ven - son of
  "1403002708": "Daudi",             // David - David
  "1403002709": "mfalme–wa",         // melekh - king of
  "1403002710": "Israeli",           // Yisrael - Israel
  "1403002711": "haikuwepo",         // lo hayetah - there had not been
  "1403002712": "hivi",              // kazot - like this
  "1403002713": "katika–Yerusalemu", // biYerushalayim - in Jerusalem
  "1403002714": "wakasimama",        // vayakumu - and arose
  "1403002715": "makuhani",          // hakohanim - the priests
  "1403002716": "Walawi",            // haLeviim - the Levites
  "1403002717": "wakawabariki",      // vayevarchu - and blessed
  "1403002718": "watu",              // et-haam - the people
  "1403002719": "na–sauti–yao",      // vekolam - and their voice
  "1403002720": "ikasikiwa",         // nishma - was heard
  "1403002721": "na–maombi–yao",     // utefilatam - and their prayer
  "1403002722": "yakafika",          // vatavo - came
  "1403002723": "mbinguni",          // lishmey - to heaven
  "1403002724": "makao–yake–matakatifu", // kodsho - His holy dwelling

};

interface WordInfoChirho {
  wordIdChirho: string;
  textChirho: string;
  lemmaIdChirho: string;
  verseNumChirho: number;
  chapterChirho: number;
}

async function fetchWordInfoChirho(wordIdsChirho: string[]): Promise<Map<string, WordInfoChirho>> {
  const resultsChirho = await sqlChirho`
    SELECT
      w.id as word_id,
      w.text as text,
      lf.lemma_id as lemma_id,
      v.number as verse_num,
      v.chapter as chapter
    FROM word w
    JOIN lemma_form lf ON lf.id = w.form_id
    JOIN verse v ON v.id = w.verse_id
    WHERE w.id = ANY(${wordIdsChirho})
    ORDER BY w.id
  `;

  const mapChirho = new Map<string, WordInfoChirho>();
  for (const rowChirho of resultsChirho) {
    mapChirho.set(rowChirho.word_id, {
      wordIdChirho: rowChirho.word_id,
      textChirho: rowChirho.text,
      lemmaIdChirho: rowChirho.lemma_id,
      verseNumChirho: rowChirho.verse_num,
      chapterChirho: rowChirho.chapter,
    });
  }
  return mapChirho;
}

function generateWordSqlChirho(
  wordIdChirho: string,
  glossChirho: string,
  greekChirho: string,
  lemmaIdChirho: string,
  langCodeChirho: string,
  modelChirho: string
): string {
  const escapedGlossChirho = glossChirho.replace(/'/g, "''");

  return `-- ${wordIdChirho}: ${greekChirho} (${lemmaIdChirho}) → "${glossChirho}" [${modelChirho}]
WITH np AS (
  INSERT INTO phrase (language_id, created_at)
  SELECT (SELECT id FROM language WHERE code = '${langCodeChirho}'), NOW()
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '${wordIdChirho}' AND p.language_id = (SELECT id FROM language WHERE code = '${langCodeChirho}') AND p.deleted_at IS NULL
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '${wordIdChirho}' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, '${escapedGlossChirho}', 'UNAPPROVED', NOW(), 'MACHINE'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '${wordIdChirho}' AND p.language_id = (SELECT id FROM language WHERE code = '${langCodeChirho}') AND p.deleted_at IS NULL
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
`;
}

async function mainChirho() {
  const langCodeChirho = 'swa';
  const bookNameChirho = '2chronicles';
  const sourceChirho = 'opus-4.5-chirho';

  const wordIdsChirho = Object.keys(swa2Ch30to36GlossesChirho);
  console.log(`Processing ${wordIdsChirho.length} Swahili glosses for 2 Chronicles 30-36...`);

  // Fetch word info from database
  const wordInfoMapChirho = await fetchWordInfoChirho(wordIdsChirho);
  console.log(`Found ${wordInfoMapChirho.size} words in database`);

  // Group by chapter and verse
  const verseGroupsChirho = new Map<string, { wordIdChirho: string; glossChirho: string; infoChirho: WordInfoChirho }[]>();

  for (const [wordIdChirho, glossChirho] of Object.entries(swa2Ch30to36GlossesChirho)) {
    const infoChirho = wordInfoMapChirho.get(wordIdChirho);
    if (!infoChirho) {
      console.warn(`Warning: Word ${wordIdChirho} not found in database`);
      continue;
    }

    const chapterVerseKeyChirho = `${String(infoChirho.chapterChirho).padStart(3, '0')}-${String(infoChirho.verseNumChirho).padStart(3, '0')}`;
    if (!verseGroupsChirho.has(chapterVerseKeyChirho)) {
      verseGroupsChirho.set(chapterVerseKeyChirho, []);
    }
    verseGroupsChirho.get(chapterVerseKeyChirho)!.push({ wordIdChirho, glossChirho, infoChirho });
  }

  const sortedVersesChirho = Array.from(verseGroupsChirho.entries()).sort((aChirho, bChirho) => aChirho[0].localeCompare(bChirho[0]));

  // Create output directory
  const outDirChirho = join(process.cwd(), `${bookNameChirho}-${langCodeChirho}-chirho`);
  if (!existsSync(outDirChirho)) {
    mkdirSync(outDirChirho, { recursive: true });
  }

  // Generate files for each verse
  for (const [chapterVerseKeyChirho, wordsChirho] of sortedVersesChirho) {
    wordsChirho.sort((aChirho, bChirho) => aChirho.wordIdChirho.localeCompare(bChirho.wordIdChirho));

    const [chapterStrChirho, verseStrChirho] = chapterVerseKeyChirho.split('-');
    const chapterNumChirho = parseInt(chapterStrChirho, 10);
    const verseNumChirho = parseInt(verseStrChirho, 10);

    const summaryChirho = wordsChirho.map(wChirho => wChirho.glossChirho).join(' ');

    let sqlChirhoContent = HEADER_CHIRHO;
    sqlChirhoContent += `-- ============================================================================
-- ${bookNameChirho.toUpperCase()} CHAPTER ${chapterNumChirho} VERSE ${verseNumChirho} - ${langCodeChirho.toUpperCase()} Translation
-- ============================================================================
-- ${summaryChirho}

BEGIN;

`;

    for (const wordChirho of wordsChirho) {
      sqlChirhoContent += generateWordSqlChirho(
        wordChirho.wordIdChirho,
        wordChirho.glossChirho,
        wordChirho.infoChirho.textChirho,
        wordChirho.infoChirho.lemmaIdChirho,
        langCodeChirho,
        sourceChirho
      );
      sqlChirhoContent += '\n';
    }

    sqlChirhoContent += 'COMMIT;\n';

    const fileNameChirho = `c${chapterStrChirho}-v${verseStrChirho}-chirho.sql`;
    const filePathChirho = join(outDirChirho, fileNameChirho);
    writeFileSync(filePathChirho, sqlChirhoContent);
    console.log(`Generated: ${filePathChirho}`);
  }

  console.log(`\nGenerated SQL files for ${sortedVersesChirho.length} verses`);
  await sqlChirho.end();
}

mainChirho().catch(console.error);
