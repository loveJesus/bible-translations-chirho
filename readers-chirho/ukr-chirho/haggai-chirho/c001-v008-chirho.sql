-- For God so loved the world, that He gave His only begotten Son,
-- that all who believe in Him should not perish but have everlasting life.
-- — John 3:16

-- HAGGAI c1-v8 - UKR (readers)
-- зійдіть на–гору і–принесіть дерево і–збудуйте дім і–вподобаю його і–прославлюся і–прославлюся говорить ГОСПОДЬ

BEGIN;
-- 3700100801: עֲל֥וּ (H5927) → "зійдіть" [opus-4.6-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at, translation_type_chirho)
  SELECT (SELECT id FROM language WHERE code = 'ukr'), NOW(), 'readers'
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '3700100801' AND p.language_id = (SELECT id FROM language WHERE code = 'ukr') AND p.deleted_at IS NULL
      AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '3700100801' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'зійдіть', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '3700100801' AND p.language_id = (SELECT id FROM language WHERE code = 'ukr') AND p.deleted_at IS NULL
  AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 3700100802: הָהָ֛ר (H2022) → "на–гору" [opus-4.6-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at, translation_type_chirho)
  SELECT (SELECT id FROM language WHERE code = 'ukr'), NOW(), 'readers'
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '3700100802' AND p.language_id = (SELECT id FROM language WHERE code = 'ukr') AND p.deleted_at IS NULL
      AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '3700100802' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'на–гору', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '3700100802' AND p.language_id = (SELECT id FROM language WHERE code = 'ukr') AND p.deleted_at IS NULL
  AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 3700100803: וַהֲבֵאתֶ֥ם (H0935) → "і–принесіть" [opus-4.6-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at, translation_type_chirho)
  SELECT (SELECT id FROM language WHERE code = 'ukr'), NOW(), 'readers'
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '3700100803' AND p.language_id = (SELECT id FROM language WHERE code = 'ukr') AND p.deleted_at IS NULL
      AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '3700100803' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'і–принесіть', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '3700100803' AND p.language_id = (SELECT id FROM language WHERE code = 'ukr') AND p.deleted_at IS NULL
  AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 3700100804: עֵ֖ץ (H6086) → "дерево" [opus-4.6-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at, translation_type_chirho)
  SELECT (SELECT id FROM language WHERE code = 'ukr'), NOW(), 'readers'
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '3700100804' AND p.language_id = (SELECT id FROM language WHERE code = 'ukr') AND p.deleted_at IS NULL
      AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '3700100804' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'дерево', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '3700100804' AND p.language_id = (SELECT id FROM language WHERE code = 'ukr') AND p.deleted_at IS NULL
  AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 3700100805: וּבְנ֣וּ (H1129) → "і–збудуйте" [opus-4.6-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at, translation_type_chirho)
  SELECT (SELECT id FROM language WHERE code = 'ukr'), NOW(), 'readers'
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '3700100805' AND p.language_id = (SELECT id FROM language WHERE code = 'ukr') AND p.deleted_at IS NULL
      AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '3700100805' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'і–збудуйте', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '3700100805' AND p.language_id = (SELECT id FROM language WHERE code = 'ukr') AND p.deleted_at IS NULL
  AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 3700100806: הַבָּ֑יִת (H1004b) → "дім" [opus-4.6-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at, translation_type_chirho)
  SELECT (SELECT id FROM language WHERE code = 'ukr'), NOW(), 'readers'
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '3700100806' AND p.language_id = (SELECT id FROM language WHERE code = 'ukr') AND p.deleted_at IS NULL
      AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '3700100806' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'дім', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '3700100806' AND p.language_id = (SELECT id FROM language WHERE code = 'ukr') AND p.deleted_at IS NULL
  AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 3700100807: וְאֶרְצֶה־ (H7521) → "і–вподобаю" [opus-4.6-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at, translation_type_chirho)
  SELECT (SELECT id FROM language WHERE code = 'ukr'), NOW(), 'readers'
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '3700100807' AND p.language_id = (SELECT id FROM language WHERE code = 'ukr') AND p.deleted_at IS NULL
      AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '3700100807' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'і–вподобаю', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '3700100807' AND p.language_id = (SELECT id FROM language WHERE code = 'ukr') AND p.deleted_at IS NULL
  AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 3700100808: בּ֥וֹ (H????) → "його" [opus-4.6-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at, translation_type_chirho)
  SELECT (SELECT id FROM language WHERE code = 'ukr'), NOW(), 'readers'
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '3700100808' AND p.language_id = (SELECT id FROM language WHERE code = 'ukr') AND p.deleted_at IS NULL
      AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '3700100808' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'його', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '3700100808' AND p.language_id = (SELECT id FROM language WHERE code = 'ukr') AND p.deleted_at IS NULL
  AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 3700100809: [ואכבד] (H3513) → "і–прославлюся" [opus-4.6-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at, translation_type_chirho)
  SELECT (SELECT id FROM language WHERE code = 'ukr'), NOW(), 'readers'
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '3700100809' AND p.language_id = (SELECT id FROM language WHERE code = 'ukr') AND p.deleted_at IS NULL
      AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '3700100809' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'і–прославлюся', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '3700100809' AND p.language_id = (SELECT id FROM language WHERE code = 'ukr') AND p.deleted_at IS NULL
  AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 3700100810: (וְאֶכָּבְדָ֖ה) (H3513) → "і–прославлюся" [opus-4.6-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at, translation_type_chirho)
  SELECT (SELECT id FROM language WHERE code = 'ukr'), NOW(), 'readers'
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '3700100810' AND p.language_id = (SELECT id FROM language WHERE code = 'ukr') AND p.deleted_at IS NULL
      AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '3700100810' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'і–прославлюся', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '3700100810' AND p.language_id = (SELECT id FROM language WHERE code = 'ukr') AND p.deleted_at IS NULL
  AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 3700100811: אָמַ֥ר (H0559) → "говорить" [opus-4.6-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at, translation_type_chirho)
  SELECT (SELECT id FROM language WHERE code = 'ukr'), NOW(), 'readers'
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '3700100811' AND p.language_id = (SELECT id FROM language WHERE code = 'ukr') AND p.deleted_at IS NULL
      AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '3700100811' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'говорить', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '3700100811' AND p.language_id = (SELECT id FROM language WHERE code = 'ukr') AND p.deleted_at IS NULL
  AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 3700100812: יְהוָֽה׃ (H3068) → "ГОСПОДЬ" [opus-4.6-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at, translation_type_chirho)
  SELECT (SELECT id FROM language WHERE code = 'ukr'), NOW(), 'readers'
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '3700100812' AND p.language_id = (SELECT id FROM language WHERE code = 'ukr') AND p.deleted_at IS NULL
      AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '3700100812' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'ГОСПОДЬ', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '3700100812' AND p.language_id = (SELECT id FROM language WHERE code = 'ukr') AND p.deleted_at IS NULL
  AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
COMMIT;
