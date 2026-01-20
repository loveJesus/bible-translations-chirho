-- For God so loved the world, that He gave His only begotten Son,
-- that all who believe in Him should not perish but have everlasting life.
-- — John 3:16

-- NEHEMIAH c12-v18 - HIN
-- बिल्गाह–का शम्मूआ शमैयाह–का यहोनातान

BEGIN;
-- 1601201801: לְבִלְגָּ֣ה (H1083) → "बिल्गाह–का" [opus-4.5-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at)
  SELECT (SELECT id FROM language WHERE code = 'hin'), NOW()
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '1601201801' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '1601201801' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'बिल्गाह–का', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '1601201801' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 1601201802: שַׁמּ֔וּעַ (H8051) → "शम्मूआ" [opus-4.5-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at)
  SELECT (SELECT id FROM language WHERE code = 'hin'), NOW()
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '1601201802' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '1601201802' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'शम्मूआ', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '1601201802' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 1601201803: לִֽשְׁמַעְיָ֖ה (H8098) → "शमैयाह–का" [opus-4.5-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at)
  SELECT (SELECT id FROM language WHERE code = 'hin'), NOW()
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '1601201803' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '1601201803' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'शमैयाह–का', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '1601201803' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 1601201804: יְהוֹנָתָֽן׃ (H3083) → "यहोनातान" [opus-4.5-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at)
  SELECT (SELECT id FROM language WHERE code = 'hin'), NOW()
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '1601201804' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '1601201804' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'यहोनातान', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '1601201804' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
COMMIT;
