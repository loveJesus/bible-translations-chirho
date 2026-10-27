-- For God so loved the world, that He gave His only begotten Son,
-- that all who believe in Him should not perish but have everlasting life.
-- — John 3:16

-- MATTHEW c27-v33 - HIN
-- और आकर पर स्थान–पर कहलानेवाले गुलगुता जो है खोपड़ी–का स्थान कहलाता

BEGIN;
-- 4002703301: Καὶ (G2532) → "और" [opus-5.5-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at, translation_type_chirho)
  SELECT (SELECT id FROM language WHERE code = 'hin'), NOW(), 'readers'
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '4002703301' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
      AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '4002703301' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'और', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '4002703301' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
  AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 4002703302: ἐλθόντες (G2064) → "आकर" [opus-5.5-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at, translation_type_chirho)
  SELECT (SELECT id FROM language WHERE code = 'hin'), NOW(), 'readers'
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '4002703302' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
      AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '4002703302' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'आकर', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '4002703302' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
  AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 4002703303: εἰς (G1519) → "पर" [opus-5.5-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at, translation_type_chirho)
  SELECT (SELECT id FROM language WHERE code = 'hin'), NOW(), 'readers'
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '4002703303' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
      AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '4002703303' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'पर', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '4002703303' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
  AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 4002703304: τόπον (G5117) → "स्थान–पर" [opus-5.5-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at, translation_type_chirho)
  SELECT (SELECT id FROM language WHERE code = 'hin'), NOW(), 'readers'
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '4002703304' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
      AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '4002703304' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'स्थान–पर', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '4002703304' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
  AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 4002703305: λεγόμενον (G3004) → "कहलानेवाले" [opus-5.5-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at, translation_type_chirho)
  SELECT (SELECT id FROM language WHERE code = 'hin'), NOW(), 'readers'
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '4002703305' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
      AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '4002703305' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'कहलानेवाले', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '4002703305' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
  AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 4002703306: Γολγοθᾶ, (G1115) → "गुलगुता" [opus-5.5-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at, translation_type_chirho)
  SELECT (SELECT id FROM language WHERE code = 'hin'), NOW(), 'readers'
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '4002703306' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
      AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '4002703306' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'गुलगुता', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '4002703306' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
  AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 4002703307: ὅ (G3739) → "जो" [opus-5.5-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at, translation_type_chirho)
  SELECT (SELECT id FROM language WHERE code = 'hin'), NOW(), 'readers'
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '4002703307' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
      AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '4002703307' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'जो', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '4002703307' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
  AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 4002703308: ἐστιν, (G1510) → "है" [opus-5.5-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at, translation_type_chirho)
  SELECT (SELECT id FROM language WHERE code = 'hin'), NOW(), 'readers'
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '4002703308' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
      AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '4002703308' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'है', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '4002703308' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
  AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 4002703309: κρανίου (G2898) → "खोपड़ी–का" [opus-5.5-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at, translation_type_chirho)
  SELECT (SELECT id FROM language WHERE code = 'hin'), NOW(), 'readers'
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '4002703309' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
      AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '4002703309' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'खोपड़ी–का', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '4002703309' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
  AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 4002703310: τόπος, (G5117) → "स्थान" [opus-5.5-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at, translation_type_chirho)
  SELECT (SELECT id FROM language WHERE code = 'hin'), NOW(), 'readers'
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '4002703310' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
      AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '4002703310' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'स्थान', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '4002703310' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
  AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 4002703311: λεγόμενος. (G3004) → "कहलाता" [opus-5.5-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at, translation_type_chirho)
  SELECT (SELECT id FROM language WHERE code = 'hin'), NOW(), 'readers'
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '4002703311' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
      AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '4002703311' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'कहलाता', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '4002703311' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
  AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
COMMIT;
