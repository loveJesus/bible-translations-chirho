-- For God so loved the world, that He gave His only begotten Son,
-- that all who believe in Him should not perish but have everlasting life.
-- — John 3:16

-- JEREMIAH c49-v29 - UKR
-- Намети–їхні і–отари–їхні заберуть полотнища–їхні і–всі речі–їхні і–верблюдів–їхніх понесуть собі і–кричатимуть над–ними жах довкола

BEGIN;
-- 2404902901: אָהֳלֵיהֶ֤ם (H0168) → "Намети–їхні" [opus-5.5-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at, translation_type_chirho)
  SELECT (SELECT id FROM language WHERE code = 'ukr'), NOW(), 'readers'
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '2404902901' AND p.language_id = (SELECT id FROM language WHERE code = 'ukr') AND p.deleted_at IS NULL
      AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '2404902901' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'Намети–їхні', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '2404902901' AND p.language_id = (SELECT id FROM language WHERE code = 'ukr') AND p.deleted_at IS NULL
  AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 2404902902: וְצֹאנָם֙ (H6629) → "і–отари–їхні" [opus-5.5-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at, translation_type_chirho)
  SELECT (SELECT id FROM language WHERE code = 'ukr'), NOW(), 'readers'
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '2404902902' AND p.language_id = (SELECT id FROM language WHERE code = 'ukr') AND p.deleted_at IS NULL
      AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '2404902902' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'і–отари–їхні', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '2404902902' AND p.language_id = (SELECT id FROM language WHERE code = 'ukr') AND p.deleted_at IS NULL
  AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 2404902903: יִקָּ֔חוּ (H3947) → "заберуть" [opus-5.5-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at, translation_type_chirho)
  SELECT (SELECT id FROM language WHERE code = 'ukr'), NOW(), 'readers'
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '2404902903' AND p.language_id = (SELECT id FROM language WHERE code = 'ukr') AND p.deleted_at IS NULL
      AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '2404902903' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'заберуть', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '2404902903' AND p.language_id = (SELECT id FROM language WHERE code = 'ukr') AND p.deleted_at IS NULL
  AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 2404902904: יְרִיעוֹתֵיהֶ֧ם (H3407) → "полотнища–їхні" [opus-5.5-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at, translation_type_chirho)
  SELECT (SELECT id FROM language WHERE code = 'ukr'), NOW(), 'readers'
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '2404902904' AND p.language_id = (SELECT id FROM language WHERE code = 'ukr') AND p.deleted_at IS NULL
      AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '2404902904' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'полотнища–їхні', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '2404902904' AND p.language_id = (SELECT id FROM language WHERE code = 'ukr') AND p.deleted_at IS NULL
  AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 2404902905: וְכָל־ (H3605) → "і–всі" [opus-5.5-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at, translation_type_chirho)
  SELECT (SELECT id FROM language WHERE code = 'ukr'), NOW(), 'readers'
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '2404902905' AND p.language_id = (SELECT id FROM language WHERE code = 'ukr') AND p.deleted_at IS NULL
      AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '2404902905' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'і–всі', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '2404902905' AND p.language_id = (SELECT id FROM language WHERE code = 'ukr') AND p.deleted_at IS NULL
  AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 2404902906: כְּלֵיהֶ֛ם (H3627) → "речі–їхні" [opus-5.5-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at, translation_type_chirho)
  SELECT (SELECT id FROM language WHERE code = 'ukr'), NOW(), 'readers'
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '2404902906' AND p.language_id = (SELECT id FROM language WHERE code = 'ukr') AND p.deleted_at IS NULL
      AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '2404902906' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'речі–їхні', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '2404902906' AND p.language_id = (SELECT id FROM language WHERE code = 'ukr') AND p.deleted_at IS NULL
  AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 2404902907: וּגְמַלֵּיהֶ֖ם (H1581) → "і–верблюдів–їхніх" [opus-5.5-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at, translation_type_chirho)
  SELECT (SELECT id FROM language WHERE code = 'ukr'), NOW(), 'readers'
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '2404902907' AND p.language_id = (SELECT id FROM language WHERE code = 'ukr') AND p.deleted_at IS NULL
      AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '2404902907' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'і–верблюдів–їхніх', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '2404902907' AND p.language_id = (SELECT id FROM language WHERE code = 'ukr') AND p.deleted_at IS NULL
  AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 2404902908: יִשְׂא֣וּ (H5375) → "понесуть" [opus-5.5-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at, translation_type_chirho)
  SELECT (SELECT id FROM language WHERE code = 'ukr'), NOW(), 'readers'
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '2404902908' AND p.language_id = (SELECT id FROM language WHERE code = 'ukr') AND p.deleted_at IS NULL
      AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '2404902908' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'понесуть', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '2404902908' AND p.language_id = (SELECT id FROM language WHERE code = 'ukr') AND p.deleted_at IS NULL
  AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 2404902909: לָהֶ֑ם (H1992) → "собі" [opus-5.5-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at, translation_type_chirho)
  SELECT (SELECT id FROM language WHERE code = 'ukr'), NOW(), 'readers'
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '2404902909' AND p.language_id = (SELECT id FROM language WHERE code = 'ukr') AND p.deleted_at IS NULL
      AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '2404902909' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'собі', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '2404902909' AND p.language_id = (SELECT id FROM language WHERE code = 'ukr') AND p.deleted_at IS NULL
  AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 2404902910: וְקָרְא֧וּ (H7121) → "і–кричатимуть" [opus-5.5-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at, translation_type_chirho)
  SELECT (SELECT id FROM language WHERE code = 'ukr'), NOW(), 'readers'
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '2404902910' AND p.language_id = (SELECT id FROM language WHERE code = 'ukr') AND p.deleted_at IS NULL
      AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '2404902910' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'і–кричатимуть', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '2404902910' AND p.language_id = (SELECT id FROM language WHERE code = 'ukr') AND p.deleted_at IS NULL
  AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 2404902911: עֲלֵיהֶ֛ם (H5921a) → "над–ними" [opus-5.5-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at, translation_type_chirho)
  SELECT (SELECT id FROM language WHERE code = 'ukr'), NOW(), 'readers'
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '2404902911' AND p.language_id = (SELECT id FROM language WHERE code = 'ukr') AND p.deleted_at IS NULL
      AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '2404902911' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'над–ними', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '2404902911' AND p.language_id = (SELECT id FROM language WHERE code = 'ukr') AND p.deleted_at IS NULL
  AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 2404902912: מָג֖וֹר (H4032) → "жах" [opus-5.5-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at, translation_type_chirho)
  SELECT (SELECT id FROM language WHERE code = 'ukr'), NOW(), 'readers'
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '2404902912' AND p.language_id = (SELECT id FROM language WHERE code = 'ukr') AND p.deleted_at IS NULL
      AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '2404902912' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'жах', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '2404902912' AND p.language_id = (SELECT id FROM language WHERE code = 'ukr') AND p.deleted_at IS NULL
  AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 2404902913: מִסָּבִֽיב׃ (H5439) → "довкола" [opus-5.5-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at, translation_type_chirho)
  SELECT (SELECT id FROM language WHERE code = 'ukr'), NOW(), 'readers'
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '2404902913' AND p.language_id = (SELECT id FROM language WHERE code = 'ukr') AND p.deleted_at IS NULL
      AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '2404902913' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'довкола', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '2404902913' AND p.language_id = (SELECT id FROM language WHERE code = 'ukr') AND p.deleted_at IS NULL
  AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
COMMIT;
