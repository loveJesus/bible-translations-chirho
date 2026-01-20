# For God so loved the world, that He gave His only begotten Son,
# that all who believe in Him should not perish but have everlasting life.
# — John 3:16

# Bible Translations

Word-by-word Bible translations in SQL format for the [Global Bible Tools](https://github.com/globalbibletools/platform) platform.

## Directory Structure

```
translations-chirho/
├── add-languages-chirho.sql    # Idempotent SQL to add all languages
├── README.md                   # This file
├── jude-hin-chirho/            # Hindi Jude
│   ├── all-verses-chirho.sql   # Combined file (all verses)
│   ├── c001-v001-chirho.sql    # Individual verse files
│   └── ...
├── genesis-tur-chirho/         # Turkish Genesis
└── ...
```

Each translation directory follows the pattern: `{book}-{lang}-chirho/`

## Languages

| Code | Language | Status |
|------|----------|--------|
| hin  | Hindi    | OT + NT in progress |
| ben  | Bengali  | Genesis 1-3 |
| rus  | Russian  | Genesis 1-3, Jude |
| spa  | Spanish  | Genesis 1-3 |
| swa  | Swahili  | Genesis 1-3 |
| tur  | Turkish  | Genesis 1-3 |

## Applying Translations

### 1. Add Languages First

Run the languages SQL to ensure all target languages exist:

```bash
# SvelteKit database (local)
docker exec -i sveltekit2-platform-chirho-db-chirho-1 psql -U postgres < add-languages-chirho.sql

# Next.js database (local)
docker exec -i nextjs-platform-chirho-db-1 psql -U postgres < add-languages-chirho.sql

# Production (via SSH tunnel or direct)
psql -h <host> -U postgres -d postgres < add-languages-chirho.sql
```

### 2. Apply Individual Verses

```bash
cd jude-hin-chirho
docker exec -i sveltekit2-platform-chirho-db-chirho-1 psql -U postgres < c001-v001-chirho.sql
```

### 3. Apply Entire Books

```bash
cd jude-hin-chirho
cat c001-v*.sql | docker exec -i sveltekit2-platform-chirho-db-chirho-1 psql -U postgres
```

### 4. Apply Multiple Books

```bash
# Apply all Hindi translations
for dir in *-hin-chirho; do
  echo "Applying $dir..."
  cat "$dir"/c*-v*.sql | docker exec -i sveltekit2-platform-chirho-db-chirho-1 psql -U postgres
done
```

### 5. Apply to Production

```bash
# Via SSH tunnel to production VPS
ssh -L 5436:localhost:5432 root@46.224.100.134

# Then in another terminal:
cd translations-chirho
psql -h localhost -p 5436 -U postgres < add-languages-chirho.sql
cat jude-hin-chirho/c001-v*.sql | psql -h localhost -p 5436 -U postgres
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

- **Kyrios** (Lord) → Prabhu (Hindi), Señor (Spanish), etc.
- **Theos** (God) → Parameshwar (Hindi), Dios (Spanish), etc.
- **Particles** joined with n-dash: "the–heavens", "in–beginning"
- **Names** transliterated from Greek with accents preserved
- **Word order** preserved from original unless meaning would be lost

## Contributing

Translations are generated using Claude Code with the `bible-translation-chirho` MCP server.
See `/translate-chirho` skill for the translation workflow.
