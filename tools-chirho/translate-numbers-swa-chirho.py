# For God so loved the world, that He gave His only begotten Son,
# that all who believe in Him should not perish but have everlasting life.
# — John 3:16

"""
Swahili (swa) translation generator for the book of Numbers (Hesabu).

This script generates word-by-word Swahili glosses for the Hebrew text of Numbers
following standard Swahili Bible translation conventions (Biblia Takatifu).

Key conventions:
- BWANA = YHWH (divine name, all caps)
- Mungu = Elohim/God
- Bwana = Adonai/Lord
- Musa = Moses
- Haruni = Aaron
- Israeli = Israel
- Misri = Egypt
- N-dash (–) for particles attached to words

Usage:
    python translate-numbers-swa-chirho.py
"""

import json
import re
from pathlib import Path

# Comprehensive Hebrew-to-Swahili translation dictionary
SWAHILI_GLOSSES = {
    # ===== DIVINE NAMES =====
    "יְהוָה": "BWANA",
    "יהוה": "BWANA",
    "אֱלֹהִים": "Mungu",
    "אֲדֹנָי": "Bwana",
    "אֵל": "Mungu",
    "שַׁדַּי": "Mwenyezi",
    "צְבָאוֹת": "wa–majeshi",

    # ===== KEY NAMES =====
    "מֹשֶׁה": "Musa",
    "אַהֲרֹן": "Haruni",
    "יִשְׂרָאֵל": "Israeli",
    "מִצְרַיִם": "Misri",
    "סִינַי": "Sinai",
    "כְּנַעַן": "Kanaani",
    "מוֹאָב": "Moabu",
    "אֱדוֹם": "Edomu",
    "מִדְיָן": "Midiani",
    "בִּלְעָם": "Balaamu",
    "בָּלָק": "Balaki",
    "יְהוֹשֻׁעַ": "Yoshua",
    "כָּלֵב": "Kalebu",
    "פִּינְחָס": "Finehasi",
    "אֶלְעָזָר": "Eleazari",
    "אִיתָמָר": "Ithamari",
    "נָדָב": "Nadabu",
    "אֲבִיהוּא": "Abihu",
    "קֹרַח": "Kora",
    "דָּתָן": "Dathani",
    "אֲבִירָם": "Abiramu",

    # ===== TRIBAL NAMES =====
    "רְאוּבֵן": "Reubeni",
    "שִׁמְעוֹן": "Simeoni",
    "לֵוִי": "Lawi",
    "יְהוּדָה": "Yuda",
    "יִשָּׂשכָר": "Isakari",
    "זְבוּלֻן": "Zebuluni",
    "אֶפְרַיִם": "Efraimu",
    "מְנַשֶּׁה": "Manase",
    "בִנְיָמִן": "Benyamini",
    "דָּן": "Dani",
    "אָשֵׁר": "Asheri",
    "גָּד": "Gadi",
    "נַפְתָּלִי": "Naftali",
    "יוֹסֵף": "Yusufu",

    # ===== TRIBAL LEADERS (Numbers 1) =====
    "אֱלִיצוּר": "Elisuri",
    "שְׁדֵיאוּר": "Shedeuri",
    "שְׁלֻמִיאֵל": "Shelumieli",
    "צוּרִישַׁדַּי": "Surishadai",
    "נַחְשׁוֹן": "Nashoni",
    "עַמִּינָדָב": "Aminadabu",
    "נְתַנְאֵל": "Nethaneli",
    "צוּעָר": "Suari",
    "אֱלִיאָב": "Eliabu",
    "חֵלוֹן": "Heloni",
    "אֱלִישָׁמָע": "Elishama",
    "עַמִּיהוּד": "Amihudi",
    "גַּמְלִיאֵל": "Gamalieli",
    "פְּדָהצוּר": "Pedasuri",
    "אֲבִידָן": "Abidani",
    "גִּדְעֹנִי": "Gideoni",
    "אֲחִיעֶזֶר": "Ahiezeri",
    "עַמִּישַׁדַּי": "Amishadai",
    "פַּגְעִיאֵל": "Pagieli",
    "עָכְרָן": "Okrani",
    "אֶלְיָסָף": "Eliasafu",
    "דְּעוּאֵל": "Deueli",
    "רְעוּאֵל": "Reueli",
    "אֲחִירַע": "Ahira",
    "עֵינָן": "Enani",

    # ===== COMMON NOUNS =====
    "בֵּן": "mwana",
    "בְּנֵי": "wana",
    "בַּת": "binti",
    "אִישׁ": "mtu",
    "אֲנָשִׁים": "watu",
    "אִשָּׁה": "mwanamke",
    "נָשִׁים": "wanawake",
    "אָב": "baba",
    "אָבוֹת": "baba",
    "אֵם": "mama",
    "בַּיִת": "nyumba",
    "אֶרֶץ": "nchi",
    "שָׁמַיִם": "mbingu",
    "מַיִם": "maji",
    "יָד": "mkono",
    "עַיִן": "jicho",
    "עֵינַיִם": "macho",
    "פֶּה": "kinywa",
    "לֵב": "moyo",
    "נֶפֶשׁ": "nafsi",
    "רוּחַ": "roho",
    "דָּם": "damu",
    "בָּשָׂר": "nyama",
    "רֹאשׁ": "kichwa",
    "רֶגֶל": "mguu",
    "שֵׁם": "jina",
    "שֵׁמוֹת": "majina",
    "דָּבָר": "neno",
    "דְּבָרִים": "maneno",
    "עֵדָה": "kusanyiko",
    "קָהָל": "mkutano",
    "גֻּלְגֹּלֶת": "kichwa",
    "זָכָר": "mwanaume",
    "נָשִׂיא": "mkuu",
    "מַטֶּה": "kabila",
    "שֵׁבֶט": "kabila",
    "מִשְׁפָּחָה": "familia",
    "צָבָא": "jeshi",

    # ===== NUMBERS =====
    "אֶחָד": "moja",
    "שְׁנַיִם": "mbili",
    "שֵׁנִי": "pili",
    "שֵׁנִית": "pili",
    "שָׁלוֹשׁ": "tatu",
    "שְׁלִישִׁי": "tatu",
    "אַרְבַּע": "nne",
    "חָמֵשׁ": "tano",
    "שֵׁשׁ": "sita",
    "שֶׁבַע": "saba",
    "שְׁמֹנֶה": "nane",
    "תֵּשַׁע": "tisa",
    "עֶשֶׂר": "kumi",
    "עָשָׂר": "kumi",
    "עֶשְׂרִים": "ishirini",
    "שְׁלֹשִׁים": "thelathini",
    "אַרְבָּעִים": "arobaini",
    "חֲמִשִּׁים": "hamsini",
    "שִׁשִּׁים": "sitini",
    "שִׁבְעִים": "sabini",
    "שְׁמוֹנִים": "themanini",
    "תִּשְׁעִים": "tisini",
    "מֵאָה": "mia",
    "מֵאוֹת": "mia",
    "אֶלֶף": "elfu",
    "אֲלָפִים": "maelfu",
    "רִבּוֹא": "elfu–kumi",

    # ===== VERBS (common forms) =====
    "אָמַר": "alisema",
    "דִּבֶּר": "alisema",
    "שָׁמַע": "alisikia",
    "רָאָה": "aliona",
    "יָדַע": "alijua",
    "נָתַן": "alitoa",
    "לָקַח": "alichukua",
    "בּוֹא": "alikuja",
    "הָלַךְ": "alienda",
    "יָצָא": "alitoka",
    "שׁוּב": "alirudi",
    "עָשָׂה": "alifanya",
    "עָמַד": "alisimama",
    "יָשַׁב": "alikaa",
    "קָרָא": "aliita",
    "צִוָּה": "aliamuru",
    "פָּקַד": "alihesabu",
    "חָנָה": "alipiga–kambi",
    "נָסַע": "alisafiri",
    "מוּת": "alikufa",
    "חָיָה": "aliishi",
    "אָכַל": "alikula",
    "שָׁתָה": "alikunywa",
    "שָׁלַח": "alituma",
    "בָּרַךְ": "alibariki",
    "קִדֵּשׁ": "alitakasa",
    "טָהֵר": "alisafisha",
    "חָטָא": "alitenda–dhambi",
    "שָׁרַת": "alitumika",
    "עָבַד": "alifanya–kazi",

    # ===== PREPOSITIONS & PARTICLES =====
    "אֶת": "–",
    "אֵת": "–",
    "אֶל": "kwa",
    "עַל": "juu–ya",
    "מִן": "kutoka",
    "עַד": "hadi",
    "כֹּל": "yote",
    "כָּל": "wote",
    "אֲשֶׁר": "ambao",
    "זֶה": "huyu",
    "זֹאת": "hii",
    "אֵלֶּה": "hawa",
    "הוּא": "yeye",
    "הִיא": "yeye",
    "הֵם": "wao",
    "הֵן": "wao",
    "אֲנִי": "mimi",
    "אָנֹכִי": "mimi",
    "אַתָּה": "wewe",
    "אַתְּ": "wewe",
    "אֲנַחְנוּ": "sisi",
    "אַתֶּם": "ninyi",
    "אַתֶּן": "ninyi",

    # ===== CONJUNCTIONS & ADVERBS =====
    "כִּי": "kwa–sababu",
    "אִם": "ikiwa",
    "לֹא": "si",
    "אַל": "usi",
    "גַּם": "pia",
    "אוֹ": "au",
    "כֵּן": "ndio",
    "לָכֵן": "kwa–hivyo",
    "עַתָּה": "sasa",
    "אָז": "ndipo",
    "כַּאֲשֶׁר": "wakati",
    "עוֹד": "bado",
    "מְאֹד": "sana",

    # ===== RELIGIOUS TERMS =====
    "אֹהֶל": "hema",
    "מוֹעֵד": "mkutano",
    "מִשְׁכָּן": "maskani",
    "מִזְבֵּחַ": "madhabahu",
    "כֹּהֵן": "kuhani",
    "כֹּהֲנִים": "makuhani",
    "לֵוִי": "Mlawi",
    "לְוִיִּם": "Walawi",
    "קֹדֶשׁ": "takatifu",
    "טָהוֹר": "safi",
    "טָמֵא": "najisi",
    "קָרְבָּן": "sadaka",
    "עֹלָה": "sadaka–ya–kuteketezwa",
    "חַטָּאת": "sadaka–ya–dhambi",
    "שְׁלָמִים": "sadaka–ya–amani",
    "מִנְחָה": "sadaka–ya–nafaka",
    "נֶסֶךְ": "sadaka–ya–kinywaji",
    "תְּרוּמָה": "sadaka–ya–kuinuliwa",
    "בְּרִית": "agano",
    "תּוֹרָה": "sheria",
    "מִצְוָה": "amri",
    "חֹק": "hukumu",
    "מִשְׁפָּט": "haki",

    # ===== GEOGRAPHY =====
    "מִדְבָּר": "jangwa",
    "הַר": "mlima",
    "נָהָר": "mto",
    "יָם": "bahari",
    "עִיר": "mji",
    "מַחֲנֶה": "kambi",
    "דֶּרֶךְ": "njia",
    "גְּבוּל": "mpaka",
    "נַחַל": "bonde",
    "בְּאֵר": "kisima",
    "מַעְיָן": "chemchemi",

    # ===== TIME =====
    "יוֹם": "siku",
    "לַיְלָה": "usiku",
    "בֹּקֶר": "asubuhi",
    "עֶרֶב": "jioni",
    "שָׁנָה": "mwaka",
    "חֹדֶשׁ": "mwezi",
    "שָׁבוּעַ": "wiki",
    "עוֹלָם": "milele",
    "תָּמִיד": "daima",

    # ===== ANIMALS =====
    "פַּר": "ng'ombe–dume",
    "שׁוֹר": "ng'ombe",
    "עֵגֶל": "ndama",
    "כֶּבֶשׂ": "kondoo",
    "כֶּשֶׂב": "kondoo",
    "שֶׂה": "mwana–kondoo",
    "עֵז": "mbuzi",
    "צֹאן": "mifugo",
    "בָּקָר": "ng'ombe",
    "חֲמוֹר": "punda",
    "גָּמָל": "ngamia",

    # ===== MATERIALS =====
    "זָהָב": "dhahabu",
    "כֶּסֶף": "fedha",
    "נְחֹשֶׁת": "shaba",
    "בַּרְזֶל": "chuma",
    "עֵץ": "mti",
    "אֶבֶן": "jiwe",
    "שֶׁמֶן": "mafuta",
    "לֶחֶם": "mkate",
    "יַיִן": "divai",

    # ===== PARAGRAPH MARKERS =====
    "פ": "P",
    "ס": "S",
}


def remove_cantillation(word: str) -> str:
    """Remove Hebrew cantillation marks from a word."""
    # Unicode ranges for cantillation marks
    return re.sub(r'[\u0591-\u05AF\u05BD-\u05BF\u05C1-\u05C7]', '', word)


def transliterate_hebrew(word: str) -> str:
    """Transliterate Hebrew to Latin script for proper names."""
    word = remove_cantillation(word)
    word = word.replace('׃', '').replace('־', '')

    trans_map = {
        'א': '', 'ב': 'b', 'ג': 'g', 'ד': 'd', 'ה': 'h',
        'ו': 'u', 'ז': 'z', 'ח': 'h', 'ט': 't', 'י': 'i',
        'כ': 'k', 'ך': 'k', 'ל': 'l', 'מ': 'm', 'ם': 'm',
        'נ': 'n', 'ן': 'n', 'ס': 's', 'ע': '', 'פ': 'f',
        'ף': 'f', 'צ': 'ts', 'ץ': 'ts', 'ק': 'k', 'ר': 'r',
        'ש': 'sh', 'ת': 't',
        # Vowels
        'ָ': 'a', 'ַ': 'a', 'ֶ': 'e', 'ֵ': 'e', 'ִ': 'i',
        'ֹ': 'o', 'ֻ': 'u', 'ְ': 'e', 'ֲ': 'a', 'ֳ': 'o', 'ֱ': 'e',
        'ּ': '',  # dagesh
    }

    result = ''
    for char in word:
        result += trans_map.get(char, char if char.isalpha() else '')

    # Clean up
    result = re.sub(r'([bcdfghjklmnpqrstvwxyz])\1+', r'\1', result.lower())
    return result.title() if result else word


def translate_hebrew_word(hebrew_word: str, word_id: str) -> str:
    """
    Translate a Hebrew word to Swahili.

    Args:
        hebrew_word: The Hebrew word (with or without cantillation)
        word_id: The word ID for context

    Returns:
        Swahili translation
    """
    # Clean the word
    clean_word = remove_cantillation(hebrew_word)
    clean_word = clean_word.replace('׃', '').replace('־', '')

    # Handle paragraph markers
    if clean_word == 'פ' or clean_word == 'ס':
        return clean_word

    # Check for direct match
    if clean_word in SWAHILI_GLOSSES:
        return SWAHILI_GLOSSES[clean_word]

    # Check for match with original word
    for heb, swa in SWAHILI_GLOSSES.items():
        if heb in hebrew_word or heb in clean_word:
            return swa

    # Handle prefixes
    prefix = ""
    root = clean_word

    # וַ/וְ/וָ/וּ (waw consecutive/conjunctive)
    if root.startswith(('וַ', 'וְ', 'וָ', 'וּ', 'וֶ', 'וֹ')):
        prefix = "na–"
        root = root[1:] if len(root) > 1 else root

    # בְּ/בַּ/בָּ/בִּ (in/at)
    if root.startswith(('בְּ', 'בַּ', 'בָּ', 'בִּ', 'בֶּ')):
        prefix += "katika–"
        root = root[2:] if len(root) > 2 else root
    elif root.startswith('ב') and len(root) > 1:
        prefix += "katika–"
        root = root[1:]

    # לְ/לַ/לָ/לִ (to/for)
    if root.startswith(('לְ', 'לַ', 'לָ', 'לִ', 'לֶ')):
        prefix += "kwa–"
        root = root[2:] if len(root) > 2 else root
    elif root.startswith('ל') and len(root) > 1 and not root.startswith('לא'):
        prefix += "kwa–"
        root = root[1:]

    # מִ/מֵ (from)
    if root.startswith(('מִ', 'מֵ')):
        prefix += "kutoka–"
        root = root[2:] if len(root) > 2 else root

    # כְּ/כַּ (like/as)
    if root.startswith(('כְּ', 'כַּ', 'כָּ')):
        prefix += "kama–"
        root = root[2:] if len(root) > 2 else root

    # הַ/הָ (the - definite article, often not translated in Swahili)
    if root.startswith(('הַ', 'הָ', 'הֶ', 'הֵ')):
        root = root[2:] if len(root) > 2 else root

    # Check root in dictionary
    if root in SWAHILI_GLOSSES:
        result = prefix + SWAHILI_GLOSSES[root]
        return result.strip('–')

    # Check for partial matches
    for heb, swa in SWAHILI_GLOSSES.items():
        if heb in root or root.startswith(heb):
            result = prefix + swa
            return result.strip('–')

    # Transliterate unknown words (proper names)
    result = prefix + transliterate_hebrew(root) if prefix else transliterate_hebrew(root)
    return result.strip('–')


def generate_numbers_swahili_glosses(input_file: str) -> dict:
    """
    Generate Swahili glosses for all words in Numbers.

    Args:
        input_file: Path to JSON file with Hebrew words {word_id: hebrew_word}

    Returns:
        Dictionary of {word_id: swahili_gloss}
    """
    with open(input_file, 'r', encoding='utf-8') as f:
        hebrew_words = json.load(f)

    glosses = {}
    for word_id, hebrew in hebrew_words.items():
        glosses[word_id] = translate_hebrew_word(hebrew, word_id)

    return glosses


def main():
    """Main entry point."""
    input_file = '/tmp/numbers_words_chirho.json'
    output_file = '/tmp/numbers_swa_glosses_chirho.json'

    print("Generating Swahili translation for Numbers (Hesabu)...")

    glosses = generate_numbers_swahili_glosses(input_file)

    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(glosses, f, ensure_ascii=False, indent=2)

    print(f"Generated {len(glosses)} Swahili glosses")
    print(f"Output saved to: {output_file}")

    # Show sample
    print("\nSample translations (first 50):")
    for i, (word_id, gloss) in enumerate(list(glosses.items())[:50]):
        print(f"  {word_id}: {gloss}")


if __name__ == '__main__':
    main()
