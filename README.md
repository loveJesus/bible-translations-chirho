# For God so loved the world, that He gave His only begotten Son,
# that all who believe in Him should not perish but have everlasting life.
# — John 3:16

# Bible Translations

Word-by-word Bible translations in SQL format for the [Global Bible Tools](https://github.com/globalbibletools/platform) platform.

## Directory Structure

```
translations-chirho/
├── add-languages-chirho.sql    # Idempotent SQL to add all 38 languages
├── README.md                   # This file
├── .claude/
│   └── skills/                 # Translation skills for each language
│       ├── translate-chirho/   # Master coordination skill
│       ├── translate-base-chirho/  # Base template
│       ├── translate-hin-chirho/   # Hindi skill
│       ├── translate-arb-chirho/   # Arabic skill
│       └── ...                 # (44 total skills)
├── jude-hin-chirho/            # Hindi Jude
│   ├── all-verses-chirho.sql   # Combined file (all verses)
│   ├── c001-v001-chirho.sql    # Individual verse files
│   └── ...
├── genesis-tur-chirho/         # Turkish Genesis
└── ...
```

Each translation directory follows the pattern: `{book}-{lang}-chirho/`

## Languages (38 Total)

### South Asian Languages
| Code | Language | Script | Status |
|------|----------|--------|--------|
| hin  | Hindi | देवनागरी | OT + NT in progress |
| ben  | Bengali | বাংলা | Genesis 1-3 |
| urd  | Urdu | اردو | Jude, Obadiah |
| mar  | Marathi | देवनागरी | Jude, Obadiah |
| tel  | Telugu | తెలుగు | Jude, Obadiah |
| tam  | Tamil | தமிழ் | Jude, Obadiah |
| guj  | Gujarati | ગુજરાતી | Jude, Obadiah |
| pnb  | Western Punjabi | شاہ مکھی | Jude, Obadiah |

### East Asian Languages
| Code | Language | Script | Status |
|------|----------|--------|--------|
| zho  | Chinese (Simplified) | 简体中文 | Jude, Obadiah |
| yue  | Cantonese | 粵語 | Jude, Obadiah |
| jpn  | Japanese | 日本語 | Jude, Obadiah |
| kor  | Korean | 한국어 | Jude, Obadiah |
| vie  | Vietnamese | Tiếng Việt | Jude, Obadiah |
| tha  | Thai | ไทย | Jude, Obadiah |
| mya  | Burmese | မြန်မာ | Jude, Obadiah |

### Southeast Asian Languages
| Code | Language | Script | Status |
|------|----------|--------|--------|
| ind  | Indonesian | Latin | Jude, Obadiah |
| jav  | Javanese | Latin | Jude, Obadiah |
| tgl  | Tagalog | Latin | Jude, Obadiah |

### European Languages
| Code | Language | Script | Status |
|------|----------|--------|--------|
| spa  | Spanish | Latin | Genesis 1-3 |
| por  | Portuguese | Latin | Jude, Obadiah |
| fra  | French | Latin | Jude, Obadiah |
| deu  | German | Latin | Jude, Obadiah |
| ita  | Italian | Latin | Jude, Obadiah |
| nld  | Dutch | Latin | Jude, Obadiah |
| pol  | Polish | Latin | Jude, Obadiah |
| ukr  | Ukrainian | Кирилиця | Jude, Obadiah |
| rus  | Russian | Кирилица | Genesis 1-3, Jude |
| ron  | Romanian | Latin | Jude, Obadiah |
| ces  | Czech | Latin | Jude, Obadiah |
| hun  | Hungarian | Latin | Jude, Obadiah |
| ell  | Modern Greek | Ελληνικά | Jude, Obadiah |

### Scandinavian Languages
| Code | Language | Script | Status |
|------|----------|--------|--------|
| swe  | Swedish | Latin | Jude, Obadiah |
| nor  | Norwegian | Latin | Jude, Obadiah |
| dan  | Danish | Latin | Jude, Obadiah |

### Middle Eastern Languages
| Code | Language | Script | Status |
|------|----------|--------|--------|
| arb  | Arabic | العربية | Jude, Obadiah |
| heb  | Modern Hebrew | עברית | Jude, Obadiah |
| tur  | Turkish | Latin | Genesis 1-3, Jude, Obadiah |

### African Languages
| Code | Language | Script | Status |
|------|----------|--------|--------|
| swa  | Swahili | Latin | Genesis 1-3, Jude, Obadiah |
| hau  | Hausa | Latin | Jude, Obadiah |
| yor  | Yoruba | Latin | Jude, Obadiah |
| amh  | Amharic | ግዕዝ | Jude, Obadiah |

### Caribbean Languages
| Code | Language | Script | Status |
|------|----------|--------|--------|
| hat  | Haitian Creole | Latin | Jude, Obadiah |

## Applying Translations

### 1. Add Languages First

Run the languages SQL to ensure all target languages exist:

```bash
# SvelteKit database (local)
docker exec -i sveltekit2-platform-chirho-db-chirho-1 psql -U postgres < add-languages-chirho.sql

# Production VPS
ssh root@46.224.100.134 "docker exec -i app-chirho-db-chirho-1 psql -U postgres" < add-languages-chirho.sql
```

### 2. Apply All Translations for a Language

```bash
# Apply all Hindi translations
for f in *-hin-chirho/all-verses-chirho.sql; do
  echo "Applying $f..."
  docker exec -i sveltekit2-platform-chirho-db-chirho-1 psql -U postgres < "$f"
done
```

### 3. Apply All Translations for a Book

```bash
# Apply Jude in all languages
for f in jude-*-chirho/all-verses-chirho.sql; do
  echo "Applying $f..."
  docker exec -i sveltekit2-platform-chirho-db-chirho-1 psql -U postgres < "$f"
done
```

### 4. Apply Everything

```bash
# Apply all translation files
for f in */all-verses-chirho.sql; do
  echo "Applying $f..."
  docker exec -i sveltekit2-platform-chirho-db-chirho-1 psql -U postgres < "$f"
done
```

### 5. Apply to Production

```bash
# Direct to production VPS
for f in */all-verses-chirho.sql; do
  echo "Applying $f..."
  ssh root@46.224.100.134 "docker exec -i app-chirho-db-chirho-1 psql -U postgres" < "$f"
done
```

## SQL File Format

Each verse file contains idempotent SQL that:
1. Creates a `phrase` record if it doesn't exist
2. Links the phrase to the word via `phrase_word`
3. Upserts the `gloss` with the translation

Example structure:
```sql
BEGIN;
-- Word: Ἰούδας (G2455) → "यहूदा"
WITH np AS (
  INSERT INTO phrase (language_id, created_at)
  SELECT (SELECT id FROM language WHERE code = 'hin'), NOW()
  WHERE NOT EXISTS (...)
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '6500100101' FROM np;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT ... ON CONFLICT (phrase_id) DO UPDATE SET ...;
COMMIT;
```

## Verifying Translations

```sql
-- Count glosses per language
SELECT l.code, l.name, COUNT(g.phrase_id) as glosses
FROM language l
LEFT JOIN phrase p ON p.language_id = l.id AND p.deleted_at IS NULL
LEFT JOIN gloss g ON g.phrase_id = p.id
GROUP BY l.code, l.name
ORDER BY glosses DESC;

-- View translations for a specific verse
SELECT w.id, w.text, g.gloss
FROM word w
JOIN phrase_word pw ON pw.word_id = w.id
JOIN phrase p ON p.id = pw.phrase_id AND p.deleted_at IS NULL
JOIN gloss g ON g.phrase_id = p.id
WHERE w.verse_id = '65001001'  -- Jude 1:1
  AND p.language_id = (SELECT id FROM language WHERE code = 'hin');
```

## Translation Conventions

- **Divine Names**: יהוה → language-appropriate form (Yahweh, यहोवा, 耶和華, etc.)
- **Christ/Messiah**: Χριστός → Kristus/मसीह/基督/المسيح etc.
- **Particles** joined with n-dash (–): "the–heavens", "in–beginning"
- **Names** transliterated from Greek/Hebrew with appropriate script
- **Word order** preserved from original unless meaning would be lost

## Translation Skills

Each language has a dedicated Claude Code skill in `.claude/skills/` that provides:
- **Divine name conventions** - How to translate YHWH, Elohim, Christ, etc.
- **Proper name transliterations** - Greek/Hebrew names in target script
- **Grammar notes** - Word order, particles, honorifics
- **Lemma decisions** - Consistent translations for key theological terms

### Using Translation Skills

```bash
# Invoke the master translation skill
/translate-chirho fra Genesis 1

# Or use a language-specific skill directly
# (skills are in .claude/skills/translate-{lang}-chirho/)
```

### Available Skills (44 total)

| Skill | Language |
|-------|----------|
| `translate-base-chirho` | Base template for new languages |
| `translate-chirho` | Master coordination skill |
| `translate-hin-chirho` | Hindi (हिन्दी) |
| `translate-arb-chirho` | Arabic (العربية) |
| `translate-zho-chirho` | Chinese Simplified (简体中文) |
| `translate-jpn-chirho` | Japanese (日本語) |
| ... | (38 more language skills) |

### Updating Skills

When a translation agent encounters situations requiring new conventions:
1. Document the decision in the skill's `SKILL.md`
2. Add to the appropriate section (Divine Names, Grammar Notes, Lemma Decisions)
3. Apply the decision consistently going forward

This keeps translations unified across sessions and agents.

## Contributing

Translations are generated using Claude Code with the `bible-translation-chirho` MCP server.
See `/translate-chirho` skill for the translation workflow.
