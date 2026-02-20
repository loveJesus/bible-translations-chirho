-- For God so loved the world, that He gave His only begotten Son,
-- that all who believe in Him should not perish but have everlasting life.
-- — John 3:16

-- EZEKIEL c001-v024 - UKR
-- І–я–почув звук їхніх–крил як–звук вод великих як–голос Всемогутнього коли–вони–йшли звук гуркоту як–звук табору коли–зупинялися опускали свої–крила

BEGIN;
-- 2600102401: וָאֶשְׁמַ֣ע (H8085) → "І–я–почув" [opus-4.6-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at, translation_type_chirho)
  SELECT (SELECT id FROM language WHERE code = 'ukr'), NOW(), 'readers'
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '2600102401' AND p.language_id = (SELECT id FROM language WHERE code = 'ukr') AND p.deleted_at IS NULL
      AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '2600102401' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'І–я–почув', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '2600102401' AND p.language_id = (SELECT id FROM language WHERE code = 'ukr') AND p.deleted_at IS NULL
  AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 2600102402: אֶת־ (H0853) → "" [opus-4.6-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at, translation_type_chirho)
  SELECT (SELECT id FROM language WHERE code = 'ukr'), NOW(), 'readers'
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '2600102402' AND p.language_id = (SELECT id FROM language WHERE code = 'ukr') AND p.deleted_at IS NULL
      AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '2600102402' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, '', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '2600102402' AND p.language_id = (SELECT id FROM language WHERE code = 'ukr') AND p.deleted_at IS NULL
  AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 2600102403: ק֣וֹל (H6963a) → "звук" [opus-4.6-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at, translation_type_chirho)
  SELECT (SELECT id FROM language WHERE code = 'ukr'), NOW(), 'readers'
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '2600102403' AND p.language_id = (SELECT id FROM language WHERE code = 'ukr') AND p.deleted_at IS NULL
      AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '2600102403' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'звук', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '2600102403' AND p.language_id = (SELECT id FROM language WHERE code = 'ukr') AND p.deleted_at IS NULL
  AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 2600102404: כַּנְפֵיהֶ֡ם (H3671) → "їхніх–крил" [opus-4.6-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at, translation_type_chirho)
  SELECT (SELECT id FROM language WHERE code = 'ukr'), NOW(), 'readers'
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '2600102404' AND p.language_id = (SELECT id FROM language WHERE code = 'ukr') AND p.deleted_at IS NULL
      AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '2600102404' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'їхніх–крил', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '2600102404' AND p.language_id = (SELECT id FROM language WHERE code = 'ukr') AND p.deleted_at IS NULL
  AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 2600102405: כְּקוֹל֩ (H6963a) → "як–звук" [opus-4.6-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at, translation_type_chirho)
  SELECT (SELECT id FROM language WHERE code = 'ukr'), NOW(), 'readers'
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '2600102405' AND p.language_id = (SELECT id FROM language WHERE code = 'ukr') AND p.deleted_at IS NULL
      AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '2600102405' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'як–звук', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '2600102405' AND p.language_id = (SELECT id FROM language WHERE code = 'ukr') AND p.deleted_at IS NULL
  AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 2600102406: מַ֨יִם (H4325) → "вод" [opus-4.6-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at, translation_type_chirho)
  SELECT (SELECT id FROM language WHERE code = 'ukr'), NOW(), 'readers'
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '2600102406' AND p.language_id = (SELECT id FROM language WHERE code = 'ukr') AND p.deleted_at IS NULL
      AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '2600102406' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'вод', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '2600102406' AND p.language_id = (SELECT id FROM language WHERE code = 'ukr') AND p.deleted_at IS NULL
  AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 2600102407: רַבִּ֤ים (H7227a) → "великих" [opus-4.6-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at, translation_type_chirho)
  SELECT (SELECT id FROM language WHERE code = 'ukr'), NOW(), 'readers'
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '2600102407' AND p.language_id = (SELECT id FROM language WHERE code = 'ukr') AND p.deleted_at IS NULL
      AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '2600102407' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'великих', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '2600102407' AND p.language_id = (SELECT id FROM language WHERE code = 'ukr') AND p.deleted_at IS NULL
  AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 2600102408: כְּקוֹל־ (H6963a) → "як–голос" [opus-4.6-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at, translation_type_chirho)
  SELECT (SELECT id FROM language WHERE code = 'ukr'), NOW(), 'readers'
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '2600102408' AND p.language_id = (SELECT id FROM language WHERE code = 'ukr') AND p.deleted_at IS NULL
      AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '2600102408' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'як–голос', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '2600102408' AND p.language_id = (SELECT id FROM language WHERE code = 'ukr') AND p.deleted_at IS NULL
  AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 2600102409: שַׁדַּי֙ (H7706) → "Всемогутнього" [opus-4.6-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at, translation_type_chirho)
  SELECT (SELECT id FROM language WHERE code = 'ukr'), NOW(), 'readers'
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '2600102409' AND p.language_id = (SELECT id FROM language WHERE code = 'ukr') AND p.deleted_at IS NULL
      AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '2600102409' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'Всемогутнього', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '2600102409' AND p.language_id = (SELECT id FROM language WHERE code = 'ukr') AND p.deleted_at IS NULL
  AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 2600102410: בְּלֶכְתָּ֔ם (H3212) → "коли–вони–йшли" [opus-4.6-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at, translation_type_chirho)
  SELECT (SELECT id FROM language WHERE code = 'ukr'), NOW(), 'readers'
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '2600102410' AND p.language_id = (SELECT id FROM language WHERE code = 'ukr') AND p.deleted_at IS NULL
      AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '2600102410' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'коли–вони–йшли', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '2600102410' AND p.language_id = (SELECT id FROM language WHERE code = 'ukr') AND p.deleted_at IS NULL
  AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 2600102411: ק֥וֹל (H6963a) → "звук" [opus-4.6-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at, translation_type_chirho)
  SELECT (SELECT id FROM language WHERE code = 'ukr'), NOW(), 'readers'
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '2600102411' AND p.language_id = (SELECT id FROM language WHERE code = 'ukr') AND p.deleted_at IS NULL
      AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '2600102411' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'звук', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '2600102411' AND p.language_id = (SELECT id FROM language WHERE code = 'ukr') AND p.deleted_at IS NULL
  AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 2600102412: הֲמֻלָּ֖ה (H1999) → "гуркоту" [opus-4.6-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at, translation_type_chirho)
  SELECT (SELECT id FROM language WHERE code = 'ukr'), NOW(), 'readers'
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '2600102412' AND p.language_id = (SELECT id FROM language WHERE code = 'ukr') AND p.deleted_at IS NULL
      AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '2600102412' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'гуркоту', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '2600102412' AND p.language_id = (SELECT id FROM language WHERE code = 'ukr') AND p.deleted_at IS NULL
  AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 2600102413: כְּק֣וֹל (H6963a) → "як–звук" [opus-4.6-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at, translation_type_chirho)
  SELECT (SELECT id FROM language WHERE code = 'ukr'), NOW(), 'readers'
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '2600102413' AND p.language_id = (SELECT id FROM language WHERE code = 'ukr') AND p.deleted_at IS NULL
      AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '2600102413' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'як–звук', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '2600102413' AND p.language_id = (SELECT id FROM language WHERE code = 'ukr') AND p.deleted_at IS NULL
  AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 2600102414: מַחֲנֶ֑ה (H4264) → "табору" [opus-4.6-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at, translation_type_chirho)
  SELECT (SELECT id FROM language WHERE code = 'ukr'), NOW(), 'readers'
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '2600102414' AND p.language_id = (SELECT id FROM language WHERE code = 'ukr') AND p.deleted_at IS NULL
      AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '2600102414' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'табору', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '2600102414' AND p.language_id = (SELECT id FROM language WHERE code = 'ukr') AND p.deleted_at IS NULL
  AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 2600102415: בְּעָמְדָ֖ם (H5975) → "коли–зупинялися" [opus-4.6-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at, translation_type_chirho)
  SELECT (SELECT id FROM language WHERE code = 'ukr'), NOW(), 'readers'
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '2600102415' AND p.language_id = (SELECT id FROM language WHERE code = 'ukr') AND p.deleted_at IS NULL
      AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '2600102415' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'коли–зупинялися', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '2600102415' AND p.language_id = (SELECT id FROM language WHERE code = 'ukr') AND p.deleted_at IS NULL
  AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 2600102416: תְּרַפֶּ֥ינָה (H7503) → "опускали" [opus-4.6-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at, translation_type_chirho)
  SELECT (SELECT id FROM language WHERE code = 'ukr'), NOW(), 'readers'
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '2600102416' AND p.language_id = (SELECT id FROM language WHERE code = 'ukr') AND p.deleted_at IS NULL
      AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '2600102416' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'опускали', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '2600102416' AND p.language_id = (SELECT id FROM language WHERE code = 'ukr') AND p.deleted_at IS NULL
  AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 2600102417: כַנְפֵיהֶֽן׃ (H3671) → "свої–крила" [opus-4.6-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at, translation_type_chirho)
  SELECT (SELECT id FROM language WHERE code = 'ukr'), NOW(), 'readers'
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '2600102417' AND p.language_id = (SELECT id FROM language WHERE code = 'ukr') AND p.deleted_at IS NULL
      AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '2600102417' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'свої–крила', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '2600102417' AND p.language_id = (SELECT id FROM language WHERE code = 'ukr') AND p.deleted_at IS NULL
  AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
COMMIT;
