---
name: translate-chirho
description: Master Bible translation skill. Invoke with /translate-chirho <language-code> <book> [chapter]. Coordinates language-specific skills and MCP tools for word-by-word Bible translation.
---

# For God so loved the world, that He gave His only begotten Son,
# that all who believe in Him should not perish but have everlasting life.
# — John 3:16

# Bible Translation Skill

## Usage

```
/translate-chirho <language-code> <book> [chapter]
```

Examples:
- `/translate-chirho fra Genesis 1` - French Genesis chapter 1
- `/translate-chirho hin Jude` - Hindi entire book of Jude
- `/translate-chirho arb Psalm 23` - Arabic Psalm 23

## Available Language Skills

Each language has its own skill with conventions, divine names, and decisions:

### South Asian
- `translate-hin-chirho` - Hindi (हिन्दी)
- `translate-urd-chirho` - Urdu (اردو)
- `translate-ben-chirho` - Bengali (বাংলা)
- `translate-mar-chirho` - Marathi (मराठी)
- `translate-tel-chirho` - Telugu (తెలుగు)
- `translate-tam-chirho` - Tamil (தமிழ்)
- `translate-guj-chirho` - Gujarati (ગુજરાતી)
- `translate-pnb-chirho` - Western Punjabi (پنجابی)

### East Asian
- `translate-zho-chirho` - Chinese Simplified (简体中文)
- `translate-yue-chirho` - Cantonese (粵語)
- `translate-jpn-chirho` - Japanese (日本語)
- `translate-kor-chirho` - Korean (한국어)

### Southeast Asian
- `translate-vie-chirho` - Vietnamese (Tiếng Việt)
- `translate-tha-chirho` - Thai (ภาษาไทย)
- `translate-ind-chirho` - Indonesian (Bahasa Indonesia)
- `translate-tgl-chirho` - Tagalog (Tagalog)
- `translate-jav-chirho` - Javanese (Basa Jawa)
- `translate-mya-chirho` - Burmese (မြန်မာ)

### European
- `translate-spa-chirho` - Spanish (Español)
- `translate-por-chirho` - Portuguese (Português)
- `translate-fra-chirho` - French (Français)
- `translate-deu-chirho` - German (Deutsch)
- `translate-ita-chirho` - Italian (Italiano)
- `translate-nld-chirho` - Dutch (Nederlands)
- `translate-pol-chirho` - Polish (Polski)
- `translate-ukr-chirho` - Ukrainian (Українська)
- `translate-rus-chirho` - Russian (Русский)
- `translate-ron-chirho` - Romanian (Română)
- `translate-ces-chirho` - Czech (Čeština)
- `translate-hun-chirho` - Hungarian (Magyar)
- `translate-ell-chirho` - Modern Greek (Ελληνικά)

### Scandinavian
- `translate-swe-chirho` - Swedish (Svenska)
- `translate-nor-chirho` - Norwegian (Norsk)
- `translate-dan-chirho` - Danish (Dansk)

### Middle Eastern
- `translate-arb-chirho` - Arabic (العربية)
- `translate-heb-chirho` - Modern Hebrew (עברית)
- `translate-tur-chirho` - Turkish (Türkçe)

### African
- `translate-swa-chirho` - Swahili (Kiswahili)
- `translate-hau-chirho` - Hausa (Hausa)
- `translate-yor-chirho` - Yoruba (Yorùbá)
- `translate-amh-chirho` - Amharic (አማርኛ)

### Caribbean
- `translate-hat-chirho` - Haitian Creole (Kreyòl)

## Translation Workflow

### Step 1: Load Language Skill

Read the language-specific skill for conventions and decisions:
```
Read: .claude/skills/translate-{lang}-chirho/SKILL.md
```

### Step 2: Get Source Text

Use MCP tool to get words:
```
get_words_for_translation_chirho(book: "jude", chapter: 1)
```

Returns: `{"word_id": "Greek/Hebrew text", ...}`

### Step 3: Translate

Produce minimal word_id → gloss mapping:
```json
{
  "6500100101": "Judas",
  "6500100102": "de–Iēsoû",
  ...
}
```

Follow the language skill's:
- Divine name conventions
- Particle handling
- Transliteration rules
- Lemma decisions

### Step 4: Generate SQL

Use MCP tool to create SQL files:
```
expand_glosses_chirho(
  language_code: "fra",
  book_name: "jude",
  glosses: {...}
)
```

### Step 5: Update Skill

If you encounter situations requiring new conventions:
1. Document the decision
2. Update the language skill's SKILL.md
3. Apply decision consistently going forward

## Core Translation Principles

1. **Word-by-word literal** - One gloss per Greek/Hebrew word
2. **Lemma consistency** - Same root → same translation
3. **N-dash particles** - Join bound morphemes: "the–heavens"
4. **Preserve word order** - Unless meaning is lost
5. **Transliterate names** - From original language to target script

## MCP Tools Reference

| Tool | Purpose |
|------|---------|
| `list_books_chirho` | List all Bible books |
| `get_verse_chirho` | Get single verse with words |
| `get_chapter_chirho` | Get chapter as JSON |
| `get_words_for_translation_chirho` | Get word IDs + text |
| `query_lemma_chirho` | Lemma info with lexicon |
| `set_decision_chirho` | Record translation decision |
| `get_decisions_chirho` | List all decisions |
| `check_consistency_chirho` | Find inconsistencies |
| `expand_glosses_chirho` | Generate SQL from glosses |

## Quality Checklist

Before completing a book/chapter:
- [ ] All words have glosses
- [ ] Divine names follow language conventions
- [ ] Particle handling is consistent
- [ ] Names properly transliterated
- [ ] Language skill updated with new decisions
