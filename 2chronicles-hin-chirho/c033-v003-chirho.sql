-- For God so loved the world, that He gave His only begotten Son,
-- that all who believe in Him should not perish but have everlasting life.
-- — John 3:16

-- 2CHRONICLES c33-v3 - HIN
-- और–उसने–फिर–से और–उसने–बनाया को ऊँचे–स्थानों जिन्हें ढाया–था हिज़किय्याहूने उसके–पिताने और–उसने–खड़ी–की वेदियाँ बालों–के–लिए और–उसने–बनाया अशेराह और–उसने–दण्डवत–किया सब–के–लिए सेना आकाश–की और–उसने–सेवा–की उनकी

BEGIN;
-- 1403300301: וַיָּ֗שָׁב (H7725) → "और–उसने–फिर–से" [opus-4.5-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at)
  SELECT (SELECT id FROM language WHERE code = 'hin'), NOW()
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '1403300301' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '1403300301' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'और–उसने–फिर–से', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '1403300301' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 1403300302: וַיִּ֙בֶן֙ (H1129) → "और–उसने–बनाया" [opus-4.5-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at)
  SELECT (SELECT id FROM language WHERE code = 'hin'), NOW()
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '1403300302' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '1403300302' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'और–उसने–बनाया', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '1403300302' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 1403300303: אֶת־ (H0853) → "को" [opus-4.5-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at)
  SELECT (SELECT id FROM language WHERE code = 'hin'), NOW()
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '1403300303' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '1403300303' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'को', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '1403300303' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 1403300304: הַבָּמ֔וֹת (H1116) → "ऊँचे–स्थानों" [opus-4.5-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at)
  SELECT (SELECT id FROM language WHERE code = 'hin'), NOW()
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '1403300304' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '1403300304' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'ऊँचे–स्थानों', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '1403300304' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 1403300305: אֲשֶׁ֥ר (H0834a) → "जिन्हें" [opus-4.5-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at)
  SELECT (SELECT id FROM language WHERE code = 'hin'), NOW()
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '1403300305' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '1403300305' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'जिन्हें', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '1403300305' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 1403300306: נִתַּ֖ץ (H5422) → "ढाया–था" [opus-4.5-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at)
  SELECT (SELECT id FROM language WHERE code = 'hin'), NOW()
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '1403300306' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '1403300306' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'ढाया–था', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '1403300306' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 1403300307: יְחִזְקִיָּ֣הוּ (H2396) → "हिज़किय्याहूने" [opus-4.5-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at)
  SELECT (SELECT id FROM language WHERE code = 'hin'), NOW()
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '1403300307' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '1403300307' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'हिज़किय्याहूने', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '1403300307' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 1403300308: אָבִ֑יו (H0001) → "उसके–पिताने" [opus-4.5-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at)
  SELECT (SELECT id FROM language WHERE code = 'hin'), NOW()
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '1403300308' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '1403300308' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'उसके–पिताने', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '1403300308' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 1403300309: וַיָּ֨קֶם (H6965b) → "और–उसने–खड़ी–की" [opus-4.5-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at)
  SELECT (SELECT id FROM language WHERE code = 'hin'), NOW()
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '1403300309' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '1403300309' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'और–उसने–खड़ी–की', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '1403300309' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 1403300310: מִזְבְּח֤וֹת (H4196) → "वेदियाँ" [opus-4.5-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at)
  SELECT (SELECT id FROM language WHERE code = 'hin'), NOW()
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '1403300310' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '1403300310' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'वेदियाँ', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '1403300310' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 1403300311: לַבְּעָלִים֙ (H1168a) → "बालों–के–लिए" [opus-4.5-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at)
  SELECT (SELECT id FROM language WHERE code = 'hin'), NOW()
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '1403300311' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '1403300311' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'बालों–के–लिए', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '1403300311' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 1403300312: וַיַּ֣עַשׂ (H6213a) → "और–उसने–बनाया" [opus-4.5-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at)
  SELECT (SELECT id FROM language WHERE code = 'hin'), NOW()
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '1403300312' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '1403300312' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'और–उसने–बनाया', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '1403300312' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 1403300313: אֲשֵׁר֔וֹת (H0842) → "अशेराह" [opus-4.5-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at)
  SELECT (SELECT id FROM language WHERE code = 'hin'), NOW()
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '1403300313' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '1403300313' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'अशेराह', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '1403300313' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 1403300314: וַיִּשְׁתַּ֙חוּ֙ (H7812) → "और–उसने–दण्डवत–किया" [opus-4.5-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at)
  SELECT (SELECT id FROM language WHERE code = 'hin'), NOW()
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '1403300314' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '1403300314' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'और–उसने–दण्डवत–किया', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '1403300314' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 1403300315: לְכָל־ (H3605) → "सब–के–लिए" [opus-4.5-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at)
  SELECT (SELECT id FROM language WHERE code = 'hin'), NOW()
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '1403300315' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '1403300315' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'सब–के–लिए', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '1403300315' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 1403300316: צְבָ֣א (H6635a) → "सेना" [opus-4.5-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at)
  SELECT (SELECT id FROM language WHERE code = 'hin'), NOW()
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '1403300316' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '1403300316' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'सेना', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '1403300316' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 1403300317: הַשָּׁמַ֔יִם (H8064) → "आकाश–की" [opus-4.5-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at)
  SELECT (SELECT id FROM language WHERE code = 'hin'), NOW()
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '1403300317' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '1403300317' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'आकाश–की', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '1403300317' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 1403300318: וַֽיַּעֲבֹ֖ד (H5647) → "और–उसने–सेवा–की" [opus-4.5-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at)
  SELECT (SELECT id FROM language WHERE code = 'hin'), NOW()
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '1403300318' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '1403300318' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'और–उसने–सेवा–की', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '1403300318' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 1403300319: אֹתָֽם׃ (H0853) → "उनकी" [opus-4.5-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at)
  SELECT (SELECT id FROM language WHERE code = 'hin'), NOW()
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '1403300319' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '1403300319' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'उनकी', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '1403300319' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
COMMIT;
