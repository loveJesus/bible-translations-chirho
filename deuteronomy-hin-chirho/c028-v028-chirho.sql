-- For God so loved the world, that He gave His only begotten Son,
-- that all who believe in Him should not perish but have everlasting life.
-- — John 3:16

-- DEUTERONOMY c28-v28 - HIN
-- मारेगा–तुझको यहोवा पागलपन–से और–अंधापन–से और–विक्षेप हृदय–के।

BEGIN;
-- 0502802801: יַכְּכָ֣ה (H5221) → "मारेगा–तुझको" [opus-4.5-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at)
  SELECT (SELECT id FROM language WHERE code = 'hin'), NOW()
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '0502802801' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '0502802801' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'मारेगा–तुझको', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '0502802801' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 0502802802: יְהוָ֔ה (H3068) → "यहोवा" [opus-4.5-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at)
  SELECT (SELECT id FROM language WHERE code = 'hin'), NOW()
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '0502802802' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '0502802802' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'यहोवा', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '0502802802' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 0502802803: בְּשִׁגָּע֖וֹן (H7697) → "पागलपन–से" [opus-4.5-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at)
  SELECT (SELECT id FROM language WHERE code = 'hin'), NOW()
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '0502802803' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '0502802803' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'पागलपन–से', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '0502802803' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 0502802804: וּבְעִוָּר֑וֹן (H5788a) → "और–अंधापन–से" [opus-4.5-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at)
  SELECT (SELECT id FROM language WHERE code = 'hin'), NOW()
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '0502802804' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '0502802804' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'और–अंधापन–से', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '0502802804' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 0502802805: וּבְתִמְה֖וֹן (H8541) → "और–विक्षेप" [opus-4.5-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at)
  SELECT (SELECT id FROM language WHERE code = 'hin'), NOW()
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '0502802805' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '0502802805' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'और–विक्षेप', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '0502802805' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 0502802806: לֵבָֽב׃ (H3824) → "हृदय–के।" [opus-4.5-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at)
  SELECT (SELECT id FROM language WHERE code = 'hin'), NOW()
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '0502802806' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '0502802806' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'हृदय–के।', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '0502802806' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
COMMIT;
