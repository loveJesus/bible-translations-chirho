// For God so loved the world, that He gave His only begotten Son,
// that all who believe in Him should not perish but have everlasting life.
// — John 3:16

/**
 * Javanese Krama Vocabulary for Leviticus 1-14
 *
 * Speech level: Krama (formal/respectful)
 * Krama Inggil used for divine references
 *
 * Divine Names:
 * - YHWH (יהוה) → Yéhuwah
 * - Elohim → Gusti Allah
 * - Adonai → Gusti
 */

export const javaneseKramaVocabChirho: Record<string, string> = {
  // Divine Names (Krama Inggil)
  "H3068": "Yéhuwah", // יהוה YHWH
  "H0430": "Gusti Allah", // Elohim
  "H0136": "Gusti", // Adonai

  // Common Particles & Prepositions
  "H0853": "–", // את direct object marker (attached with en-dash)
  "H5921a": "ing", // על on/upon
  "H0834a": "ingkang", // אשר who/which/that
  "H0413": "dhateng", // אל to/toward
  "H3588a": "amargi", // כי because/that/for
  "H4480a": "saking", // מן from
  "H0518a": "menawi", // אם if
  "H0176a": "utawi", // או or
  "H3808": "mboten", // לא not
  "H????": "", // paragraph marker - empty

  // Pronouns
  "H1931": "punika", // הוא he/it/this
  "H0589": "kula", // אני I (humble)
  "H0859": "panjenengan", // אתה you (respectful)
  "H2007": "punika", // הנה these
  "H0428": "punika", // אלה these

  // Common Verbs (Krama forms)
  "H7121": "sarta–nimbali", // קרא call
  "H1696": "sarta–ngendika", // דבר speak
  "H0559": "sarta–matur", // אמר say
  "H7126": "nyaosaken", // קרב bring near/offer
  "H7819a": "nyembelih", // שחט slaughter
  "H2236": "nyiramaken", // זרק sprinkle/throw
  "H6584": "nyuled", // פשט skin/strip
  "H5408": "ngiris", // נתח cut in pieces
  "H5414": "sarta–nyaosaken", // נתן give
  "H6186a": "sarta–nata", // ערך arrange
  "H7364": "ngumbah", // רחץ wash
  "H6999a": "ngobong–dupa", // קטר burn incense/make smoke
  "H4680": "sarta–meres", // מצה drain out
  "H5493": "sarta–mbucal", // סור remove/turn aside
  "H7993": "sarta–mbucal", // שלך throw/cast
  "H8156": "sarta–nyuwék", // שסע tear/rend
  "H0914": "misahaken", // בדל separate
  "H0398": "nedha", // אכל eat
  "H0935": "mlebet", // בוא come/enter
  "H3318": "medal", // יצא go out
  "H7200": "mirsani", // ראה see
  "H6213a": "damel", // עשה do/make
  "H3947": "mendhet", // לקח take
  "H1961": "dados", // היה be/become
  "H5564": "sarta–numpangaken", // סמך lay/lean
  "H7521": "katampi", // רצה accept/be pleased
  "H3722a": "nebus", // כפר atone/cover
  "H4454": "nyethot", // מלק wring off
  "H4886": "ngosoki–lenga", // משח anoint
  "H2287": "ngrayaaken", // חגג celebrate
  "H3045": "mangertos", // ידע know
  "H2930a": "najis", // טמא unclean (state)
  "H2891": "suci", // טהר clean/pure
  "H5060": "ndemèk", // נגע touch
  "H5921b": "mbeta", // עלה bring up
  "H7843": "nyirnakaken", // שחת destroy
  "H5375": "ngangkat", // נשא lift/carry
  "H7971": "ngutus", // שלח send
  "H8085": "mirengaken", // שמע hear
  "H3615": "ngrampungaken", // כלה finish
  "H6942": "nyucèkaken", // קדש sanctify
  "H5641": "ndhelikaken", // סתר hide
  "H5771": "kalepatan", // עון iniquity
  "H5414a": "nyaosaken", // give (variant)

  // People & Roles
  "H4872": "Musa", // משה Moses
  "H0175": "Harun", // אהרן Aaron
  "H1121a": "putra–putra", // בן sons (construct form)
  "H3478": "Israél", // ישראל Israel
  "H3548": "imam", // כהן priest
  "H0120": "tiyang", // אדם man/person
  "H5971": "umat", // עם people
  "H0802": "wanita", // אשה woman/wife
  "H0376": "priya", // איש man/husband
  "H5387": "pangageng", // נשיא leader/prince
  "H4428": "raja", // מלך king

  // Body Parts
  "H3027": "asta", // יד hand
  "H7218a": "sirah", // ראש head
  "H1818": "rah", // דם blood
  "H7130": "jeroan", // קרב entrails/inward parts
  "H3767": "sampéyan", // כרע legs
  "H5785": "kulit", // עור skin/hide
  "H1320": "daging", // בשר flesh
  "H6309": "gajih", // פדר fat (suet)
  "H2459": "gajih", // חלב fat
  "H3629": "ginjel", // כליה kidney
  "H3508": "atèn", // יותרת lobe (of liver)
  "H3516": "ati", // כבד liver
  "H0241": "kuping", // אזן ear
  "H3671": "suwiwi", // כנף wing
  "H0676": "driji", // אצבע finger
  "H5869": "mripat", // עין eye
  "H7272": "suku", // רגל foot
  "H7161": "sungu", // קרן horn
  "H4696": "bathuk", // מצח forehead
  "H2206": "jenggot", // זקן beard
  "H8181": "rambut", // שער hair
  "H8193": "lambe", // שפה lip

  // Animals & Offerings
  "H0929": "kéwan", // בהמה animal/beast
  "H1241": "lembu", // בקר cattle/ox
  "H6629": "wedhus", // צאן flock (sheep/goats)
  "H3775": "wedhus–gembél", // כשב lamb
  "H5795": "wedhus", // עז goat
  "H5775": "manuk", // עוף bird/fowl
  "H8449": "manuk–dara", // תור turtledove
  "H3123": "piyik–dara", // יונה young pigeon
  "H2145": "jaler", // זכר male
  "H5347": "èstri", // נקבה female
  "H8549": "tanpa–cacad", // תמים without blemish
  "H6260": "wedhus–lanang", // עתוד he-goat
  "H7716": "wedhus", // שה sheep/goat (generic)
  "H5315": "nyawa", // נפש soul/life
  "H2416": "gesang", // חי living

  // Offerings & Sacrifices
  "H5930a": "kurban–obongan", // עלה burnt offering
  "H7133a": "kurban", // קרבן offering
  "H4503": "kurban–dhaharan", // מנחה grain offering
  "H2403b": "kurban–dosa", // חטאת sin offering
  "H0817": "kurban–kalepatan", // אשם guilt offering
  "H8002": "kurban–tentrem", // שלמים peace offering
  "H0801": "kurban–geni", // אשה fire offering
  "H5262": "kurban–unjukan", // נסך drink offering
  "H8573": "kurban–ayun", // תנופה wave offering
  "H8641": "kurban–pisungsung", // תרומה heave offering
  "H7381": "ganda", // ריח smell/odor
  "H5207": "seger", // ניחח pleasing/soothing
  "H4196": "mezbah", // מזבח altar
  "H6944": "suci", // קדש holy
  "H6918": "suci", // קדוש holy

  // Materials & Substances
  "H5560": "glepung–alus", // סלת fine flour
  "H8081": "lenga–zaitun", // שמן oil
  "H3828": "menyan", // לבנה frankincense
  "H4417": "uyah", // מלח salt
  "H1706": "madu", // דבש honey
  "H7603": "ragi", // שאר leaven
  "H4325": "toya", // מים water
  "H0784": "geni", // אש fire
  "H1880": "awu", // דשן ashes
  "H6086": "kajeng", // עץ wood/tree
  "H7023": "témbok", // קיר wall
  "H0068": "séla", // אבן stone
  "H0127": "siti", // אדמה ground/earth
  "H3701": "pérak", // כסף silver
  "H2091": "emas", // זהב gold
  "H5178": "tembaga", // נחשת bronze
  "H0899b": "rasukan", // בגד garment/clothing
  "H6785": "wulu–wedhus", // צמר wool
  "H6593": "lena", // פשת linen

  // Places & Structures
  "H0168": "tarub", // אהל tent
  "H4150": "pepanggihan", // מועד meeting/appointed time
  "H6607": "lawang", // פתח entrance/door
  "H1004b": "griya", // בית house
  "H4725": "panggenan", // מקום place
  "H6828": "lor", // צפון north
  "H6924b": "wétan", // קדמה east
  "H2691": "plataran", // חזר court/courtyard
  "H0681": "sisih", // אצל beside
  "H3409": "sisih", // ירך side/thigh
  "H8432": "tengah", // תוך middle/midst
  "H5439": "sakubengé", // סביב around
  "H2351": "njawi", // חוץ outside
  "H4264": "pakemahan", // מחנה camp
  "H5133": "wulu", // נצה feather
  "H4760": "weteng", // מראה crop (of bird)

  // Numbers & Quantities
  "H0259": "setunggal", // אחד one
  "H8147": "kalih", // שנים two
  "H7969": "tiga", // שלש three
  "H0702": "sekawan", // ארבע four
  "H2568": "gangsal", // חמש five
  "H8337": "enem", // שש six
  "H7651": "pitu", // שבע seven
  "H8083": "wolu", // שמנה eight
  "H8672": "sanga", // תשע nine
  "H6235": "sedasa", // עשר ten
  "H6240": "sadasa", // ten (construct)
  "H7657": "pitung–dasa", // שבעים seventy
  "H3117": "dinten", // יום day
  "H8141": "taun", // שנה year
  "H2320": "wulan", // חדש month

  // Abstract Concepts
  "H2930a": "najis", // טמא be/become unclean
  "H2931": "najis", // טמא unclean (adj)
  "H2932": "kenajisan", // טמאה uncleanness
  "H2398a": "damel–dosa", // חטא sin (verb)
  "H2399": "dosa", // חטא sin (noun)
  "H5771": "kalepatan", // עון iniquity
  "H6588": "panerak", // פשע transgression
  "H7563": "duraka", // רשע wicked
  "H1285": "prejanjian", // ברית covenant
  "H2706": "angger–angger", // חק statute
  "H4941": "pangadilan", // משפט judgment
  "H8451": "paugeran", // תורה law/instruction
  "H5769": "ing–salami–laminé", // עולם forever/eternal
  "H7522": "kepareng", // רצון acceptance/favor
  "H3605": "sedaya", // כל all/every
  "H5409": "péranganing", // נתח pieces
  "H8548": "tansah", // תמיד continually

  // Actions & States
  "H5061": "lelara–kulit", // נגע plague/disease
  "H6883": "kusta", // צרעת leprosy
  "H5624": "sehat", // שלם whole/complete
  "H2470": "gerah", // חלה be sick
  "H4191": "séda", // מות die
  "H2421": "gesang", // חיה live
  "H7136": "kedadosan", // קרה happen
  "H4672": "kepanggih", // מצא find
  "H7646": "wareg", // שבע be satisfied
  "H7533": "nyiksak", // רצץ crush
  "H6565": "mbatalaken", // פרר break/frustrate
  "H3615": "rampung", // כלה complete/finish

  // Leviticus-specific Terms
  "H4581": "pangungsen", // מעון refuge/dwelling
  "H4908": "palenggahan", // משכן tabernacle/dwelling
  "H3733": "mangkok", // כפר basin/bowl
  "H4289": "panci", // מחתה censer/firepan
  "H4207": "garpu", // מזלג fork
  "H7522": "kepareng", // רצון will/favor

  // Additional Leviticus 1-14 lemmas (frequently occurring)
  "H6440": "ngarsanipun", // פני before/face/presence
  "H2398": "damel–dosa", // חטא sin (verb form)
  "H2009": "lah", // הנה behold
  "H2077": "kurban–sembelihan", // זבח sacrifice
  "H6581": "nyebar", // פשה spread (of disease)
  "H6499": "lembu–jaler", // פר bull/young bull
  "H3836": "pethak", // לבן white
  "H3233": "tengen", // ימין right (side)
  "H2416a": "gesang", // חי living (variant)
  "H0834d": "ingkang", // אשר which (variant)
  "H5038": "bangké", // נבלה carcass
  "H0352a": "wedhus–gibas", // איל ram (variant)
  "H8313": "ngobong", // שרף burn
  "H5704": "ngantos", // עד until
  "H3526": "ngumbah", // כבס wash (clothes)
  "H2889": "resik", // טהור clean/pure
  "H3627": "piranti", // כלי vessel/utensil
  "H2063": "punika", // זאת this (fem)
  "H0369": "mboten–wonten", // אין there is not
  "H1992": "piyambakipun", // הם they
  "H0854": "kaliyan", // את with
  "H6833": "peksi–alit", // צפור small bird
  "H3709": "epek–epek", // כף palm/sole
  "H5971a": "umat", // עם people (variant)
  "H0934": "bintik–pethak", // בהרת bright spot
  "H0931": "jempol", // בהן thumb/big toe
  "H8318": "kéwan–rumangkang", // שרץ swarming creature
  "H6153": "sonten", // ערב evening
  "H5137a": "nyiprataken", // נזה sprinkle
  "H4758": "wujudipun", // מראה appearance
  "H3498": "tirah", // יתר remainder
  "H0310a": "sasampunipun", // אחר after
  "H4682": "roti–tanpa–ragi", // מצה unleavened bread
  "H8359": "serat", // שתי warp (weaving)
  "H8263": "najis–sanget", // שקץ detestable thing
  "H7760a": "masang", // שים put/place
  "H6541": "kuku", // פרסה hoof
  "H6154b": "pakan", // ערב woof (weaving)
  "H4327": "jinis", // מין kind/species
  "H2893": "kasucian", // טהרה cleansing
  "H2373": "dhadha", // חזה breast
  "H2015": "malik", // הפך turn/overturn
  "H7785": "wentis", // שוק leg/thigh
  "H5712": "pasamuwan", // עדה congregation
  "H3247": "dhasar", // יסוד foundation/base
  "H2088": "punika", // זה this (masc)
  "H1101a": "dicampur", // בלל mix
  "H0996": "antawis", // בין between
  "H7613": "kaluhuran", // שאת dignity/swelling
  "H7161a": "sungu", // קרן horn (variant)
  "H6536": "mbelah", // פרס divide/split
  "H6524b": "mekar", // פרח blossom/break out (variant)
  "H6471": "kaping", // פעם time/occurrence
  "H5130b": "ngayunaken", // נוף wave/brandish
  "H4888a": "lenga–jebad", // משחה anointing oil
  "H3680": "nutupi", // כסה cover
  "H3332": "ngesoraken", // יצק pour out
  "H1625": "mamah", // גרה cud
  "H8571": "cuping", // תנוך tip (of ear)
  "H8210": "ngesoraken", // שפך pour out
  "H7311a": "ngangkat", // רום lift up
  "H5381": "nggayuh", // נשג reach/overtake
  "H4394": "isi", // מלאים ordination/filling
  "H3899": "roti", // לחם bread
  "H3544": "peteng", // כהה dim/faint
  "H2881": "nyelupaken", // טבל dip
  "H2471": "cakram", // חלה cake/loaf
  "H1242": "énjing", // בקר morning
  "H0125": "abrit", // אדם red/reddish
  "H8438b": "cacing", // תולע worm/scarlet
  "H8317": "rumangkang", // שרץ swarm
  "H8163b": "wedhus–jawa", // שעיר male goat
  "H8144": "abrit", // שני scarlet
  "H7684": "kalepatan", // שגגה error/inadvertence
  "H4687": "dhawuh", // מצוה commandment
  "H4348": "latu", // מכוה burn (wound)
  "H3849": "ukuran", // לג log (liquid measure)
  "H3847": "ngagem", // לבש wear/clothe
  "H3689": "boyok", // כסל loins
  "H3225": "tengen", // ימין right (hand/side)
  "H2416c": "gesang", // חי living (variant)
  "H1548": "nyukur", // גלח shave
  "H0730": "kayu–eres", // ארז cedar
  "H0234": "pangéling–éling", // אזכרה memorial portion
  "H0231": "hisop", // אזוב hyssop
  "H8426": "kurban–panuwun", // תודה thanksgiving offering
  "H8217": "andhap", // שפל low
  "H8042": "kiwa", // שמאל left
  "H7822": "borok", // שחין boil/sore
  "H5971b": "umat", // עם people (variant 2)
  "H5956": "ndhelik", // עלם hide
  "H5892b": "kutha", // עיר city
  "H4899": "ingkang–dijebad", // משיח anointed one
  "H4399": "pakaryan", // מלאכה work
  "H3772": "ngiris", // כרת cut off
  "H3651c": "makaten", // כן thus/so
  "H2789": "grabah", "H2789": "grabah", // חרש earthenware
  "H1755": "turun", // דור generation
  "H1323": "putri", // בת daughter
  "H0451": "buntut–gajih", // אליה fat tail
  "H7061": "njupuk–sakedhik", // קמץ take a handful
  "H8033": "ing–ngriku", // שם there
  "H4393": "kebak", // מלא full/fullness
  "H7062": "sakedhik", // קמץ handful
  "H3989": "panganan–mateng", // מאפה baked goods
  "H8574": "pawon", // תנור oven
  "H7550": "roti–tipis", // רקיק wafer
  "H4227": "wajan", // מחבת pan/griddle
  "H6626": "mecah", // פתת break in pieces
  "H6595a": "potongan", // פת piece/morsel
  "H4802": "kuali", // מרחשת stewing pot
  "H5066": "nyaosaken", // נגש bring near
  "H2557a": "ragi", // חמץ leaven
  "H7225": "wiwitan", // ראשית firstfruits
  "H4414b": "nguyahi", // מלח salt (verb)
  "H7673a": "mandheg", // שבת cease/rest
  "H1061": "woh–wiwitan", // בכורים firstfruits
  "H0024": "wiji–enom", // אביב fresh grain
  "H7033": "digorèng", // קלה roasted
  "H1643": "beras–kasar", // גרש crushed grain
  "H3759": "gandum–enom", // כרמל fresh grain
  "H5482": "Sewan", // סון Syene
  "H8317a": "akèh", // swarm
};

export const javaneseKramaContextVocabChirho: Record<string, (context: { grammar?: string; verse_number?: number }) => string> = {
  // Context-sensitive translations
  "H1121a": ({ grammar }) => {
    if (grammar?.includes("mpc")) return "para–putra";
    return "putra";
  },
  "H3548": ({ grammar }) => {
    if (grammar?.includes("mp")) return "para–imam";
    return "imam";
  },
};
