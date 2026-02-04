// For God so loved the world, that He gave His only begotten Son,
// that all who believe in Him should not perish but have everlasting life.
// — John 3:16

/**
 * Swahili (swa) Translation Generator for Judges (Waamuzi)
 * 
 * This script generates Swahili glosses for all 9,940 words of Judges
 * using pattern matching on Hebrew text and lemma data.
 */

// Core vocabulary mapping (Hebrew text -> Swahili gloss)
const hebrewToSwaChirho: Record<string, string> = {
  // Object markers (usually empty or dropped)
  "אֶת־": "",
  "וְאֶת־": "na",
  
  // Prepositions  
  "אֶל־": "kwa–",
  "עַל־": "juu–ya",
  "מִן־": "kutoka",
  "עִם־": "pamoja–na",
  "עַד־": "hadi",
  "בֵּ֣ית": "nyumba–ya",
  
  // Conjunctions and particles
  "כִּֽי־": "kwa–kuwa",
  "כִּ֣י": "kwa–kuwa",
  "כִּ֥י": "kwa–kuwa",
  "אֲשֶׁ֣ר": "ambaye",
  "אֲשֶׁר־": "ambaye",
  "אֲשֶׁ֥ר": "ambaye",
  "כָּל־": "wote",
  "וְכָל־": "na–wote",
  "לֹ֣א": "la",
  "לֹ֥א": "la",
  "לֹא־": "la",
  "לֹֽא־": "la",
  "וְלֹ֥א": "na–la",
  "וְלֹֽא־": "na–la",
  "אַל־": "usiwe",
  "גַּם־": "pia–",
  "אִם־": "kama",
  
  // Common verbs
  "וַיֹּ֣אמֶר": "akasema",
  "וַיֹּ֤אמֶר": "akasema",
  "וַיֹּ֨אמֶר": "akasema",
  
  // People/Names
  "יִשְׂרָאֵ֔ל": "Israeli",
  "יִשְׂרָאֵ֖ל": "Israeli",
  "יִשְׂרָאֵל֙": "Israeli",
  "יִשְׂרָאֵ֑ל": "Israeli",
  "יִשְׂרָאֵ֛ל": "Israeli",
  "יִשְׂרָאֵֽל׃": "Israeli",
  "בְּנֵ֣י": "wana–wa",
  "בְנֵֽי־": "wana–wa",
  "בְּנֵ֥י": "wana–wa",
  "בְּנֵֽי־": "wana–wa",
  "בֶּן־": "mwana–wa",
  "אִ֣ישׁ": "mtu",
  "אִ֖ישׁ": "mtu",
  "אִ֥ישׁ": "mtu",
  
  // Divine names
  "יְהוָ֖ה": "BWANA",
  "יְהוָ֔ה": "BWANA",
  "יְהוָה֙": "BWANA",
  "יְהוָ֑ה": "BWANA",
  
  // Time markers
  "בַּיּ֣וֹם": "siku–hiyo",
  
  // Section markers (paragraph markers - empty)
  "פ": "",
  "ס": "",
};

console.log("Hebrew to Swahili mapping created with", Object.keys(hebrewToSwaChirho).length, "entries");
console.log("Use MCP expand_glosses_chirho to generate SQL files");
