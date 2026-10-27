-- For God so loved the world, that He gave His only begotten Son,
-- that all who believe in Him should not perish but have everlasting life.
-- — John 3:16

-- MATTHEW c27-v43 - HIN
-- भरोसा–रखता–है पर उस परमेश्वर–पर छुड़ा–ले अब यदि चाहता–है उस–को कहा–था तो कि परमेश्वर–का हूँ पुत्र

BEGIN;
-- 4002704301: πέποιθεν (G3982) → "भरोसा–रखता–है" [opus-5.5-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at, translation_type_chirho)
  SELECT (SELECT id FROM language WHERE code = 'hin'), NOW(), 'readers'
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '4002704301' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
      AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '4002704301' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'भरोसा–रखता–है', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '4002704301' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
  AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 4002704302: ἐπὶ (G1909) → "पर" [opus-5.5-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at, translation_type_chirho)
  SELECT (SELECT id FROM language WHERE code = 'hin'), NOW(), 'readers'
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '4002704302' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
      AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '4002704302' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'पर', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '4002704302' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
  AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 4002704303: τὸν (G3588) → "उस" [opus-5.5-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at, translation_type_chirho)
  SELECT (SELECT id FROM language WHERE code = 'hin'), NOW(), 'readers'
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '4002704303' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
      AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '4002704303' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'उस', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '4002704303' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
  AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 4002704304: Θεόν. (G2316) → "परमेश्वर–पर" [opus-5.5-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at, translation_type_chirho)
  SELECT (SELECT id FROM language WHERE code = 'hin'), NOW(), 'readers'
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '4002704304' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
      AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '4002704304' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'परमेश्वर–पर', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '4002704304' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
  AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 4002704305: ῥυσάσθω (G4506) → "छुड़ा–ले" [opus-5.5-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at, translation_type_chirho)
  SELECT (SELECT id FROM language WHERE code = 'hin'), NOW(), 'readers'
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '4002704305' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
      AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '4002704305' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'छुड़ा–ले', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '4002704305' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
  AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 4002704306: νῦν (G3568) → "अब" [opus-5.5-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at, translation_type_chirho)
  SELECT (SELECT id FROM language WHERE code = 'hin'), NOW(), 'readers'
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '4002704306' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
      AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '4002704306' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'अब', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '4002704306' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
  AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 4002704307: εἰ (G1487) → "यदि" [opus-5.5-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at, translation_type_chirho)
  SELECT (SELECT id FROM language WHERE code = 'hin'), NOW(), 'readers'
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '4002704307' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
      AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '4002704307' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'यदि', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '4002704307' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
  AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 4002704308: θέλει (G2309) → "चाहता–है" [opus-5.5-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at, translation_type_chirho)
  SELECT (SELECT id FROM language WHERE code = 'hin'), NOW(), 'readers'
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '4002704308' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
      AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '4002704308' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'चाहता–है', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '4002704308' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
  AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 4002704309: αὐτόν. (G0846) → "उस–को" [opus-5.5-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at, translation_type_chirho)
  SELECT (SELECT id FROM language WHERE code = 'hin'), NOW(), 'readers'
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '4002704309' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
      AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '4002704309' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'उस–को', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '4002704309' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
  AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 4002704310: εἶπεν (G3004) → "कहा–था" [opus-5.5-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at, translation_type_chirho)
  SELECT (SELECT id FROM language WHERE code = 'hin'), NOW(), 'readers'
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '4002704310' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
      AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '4002704310' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'कहा–था', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '4002704310' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
  AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 4002704311: γὰρ, (G1063) → "तो" [opus-5.5-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at, translation_type_chirho)
  SELECT (SELECT id FROM language WHERE code = 'hin'), NOW(), 'readers'
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '4002704311' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
      AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '4002704311' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'तो', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '4002704311' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
  AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 4002704312: ὅτι (G3754) → "कि" [opus-5.5-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at, translation_type_chirho)
  SELECT (SELECT id FROM language WHERE code = 'hin'), NOW(), 'readers'
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '4002704312' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
      AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '4002704312' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'कि', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '4002704312' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
  AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 4002704313: Θεοῦ (G2316) → "परमेश्वर–का" [opus-5.5-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at, translation_type_chirho)
  SELECT (SELECT id FROM language WHERE code = 'hin'), NOW(), 'readers'
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '4002704313' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
      AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '4002704313' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'परमेश्वर–का', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '4002704313' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
  AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 4002704314: εἰμι (G1510) → "हूँ" [opus-5.5-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at, translation_type_chirho)
  SELECT (SELECT id FROM language WHERE code = 'hin'), NOW(), 'readers'
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '4002704314' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
      AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '4002704314' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'हूँ', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '4002704314' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
  AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 4002704315: Υἱός. (G5207) → "पुत्र" [opus-5.5-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at, translation_type_chirho)
  SELECT (SELECT id FROM language WHERE code = 'hin'), NOW(), 'readers'
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '4002704315' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
      AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '4002704315' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'पुत्र', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '4002704315' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
  AND p.translation_type_chirho IS NOT DISTINCT FROM 'readers'
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
COMMIT;
