-- For God so loved the world, that He gave His only begotten Son,
-- that all who believe in Him should not perish but have everlasting life.
-- — John 3:16

-- 2CHRONICLES c35-v24 - HIN
-- aur-unhone-nikala uske-sevakoN–ne se– rath aur-unhone-bithaaya par rath doosre–par jo– uska-tha aur-unhone-le-gaye Yerushalam aur-woh-mara aur-gaada-gaya kabroN–mein apne-pitraoN–ki aur-sab– Yehudah aur-Yerushalam shok-kar-rahe-the ke-liye– Yoshiyahu 

BEGIN;
-- 1403502401: וַיַּֽעֲבִירֻ֨הוּ (H5674a) → "aur-unhone-nikala" [opus-4.5-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at)
  SELECT (SELECT id FROM language WHERE code = 'hin'), NOW()
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '1403502401' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '1403502401' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'aur-unhone-nikala', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '1403502401' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 1403502402: עֲבָדָ֜יו (H5650) → "uske-sevakoN–ne" [opus-4.5-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at)
  SELECT (SELECT id FROM language WHERE code = 'hin'), NOW()
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '1403502402' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '1403502402' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'uske-sevakoN–ne', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '1403502402' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 1403502403: מִן־ (H4480a) → "se–" [opus-4.5-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at)
  SELECT (SELECT id FROM language WHERE code = 'hin'), NOW()
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '1403502403' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '1403502403' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'se–', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '1403502403' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 1403502404: הַמֶּרְכָּבָ֗ה (H4818) → "rath" [opus-4.5-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at)
  SELECT (SELECT id FROM language WHERE code = 'hin'), NOW()
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '1403502404' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '1403502404' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'rath', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '1403502404' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 1403502405: וַֽיַּרְכִּיבֻהוּ֮ (H7392) → "aur-unhone-bithaaya" [opus-4.5-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at)
  SELECT (SELECT id FROM language WHERE code = 'hin'), NOW()
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '1403502405' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '1403502405' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'aur-unhone-bithaaya', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '1403502405' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 1403502406: עַ֣ל (H5921a) → "par" [opus-4.5-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at)
  SELECT (SELECT id FROM language WHERE code = 'hin'), NOW()
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '1403502406' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '1403502406' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'par', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '1403502406' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 1403502407: רֶ֣כֶב (H7393) → "rath" [opus-4.5-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at)
  SELECT (SELECT id FROM language WHERE code = 'hin'), NOW()
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '1403502407' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '1403502407' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'rath', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '1403502407' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 1403502408: הַמִּשְׁנֶה֮ (H4932) → "doosre–par" [opus-4.5-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at)
  SELECT (SELECT id FROM language WHERE code = 'hin'), NOW()
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '1403502408' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '1403502408' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'doosre–par', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '1403502408' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 1403502409: אֲשֶׁר־ (H0834a) → "jo–" [opus-4.5-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at)
  SELECT (SELECT id FROM language WHERE code = 'hin'), NOW()
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '1403502409' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '1403502409' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'jo–', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '1403502409' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 1403502410: לוֹ֒ (H????) → "uska-tha" [opus-4.5-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at)
  SELECT (SELECT id FROM language WHERE code = 'hin'), NOW()
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '1403502410' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '1403502410' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'uska-tha', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '1403502410' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 1403502411: וַיּוֹלִיכֻ֙הוּ֙ (H3212) → "aur-unhone-le-gaye" [opus-4.5-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at)
  SELECT (SELECT id FROM language WHERE code = 'hin'), NOW()
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '1403502411' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '1403502411' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'aur-unhone-le-gaye', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '1403502411' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 1403502412: יְר֣וּשָׁלִַ֔ם (H3389) → "Yerushalam" [opus-4.5-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at)
  SELECT (SELECT id FROM language WHERE code = 'hin'), NOW()
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '1403502412' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '1403502412' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'Yerushalam', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '1403502412' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 1403502413: וַיָּ֕מָת (H4191) → "aur-woh-mara" [opus-4.5-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at)
  SELECT (SELECT id FROM language WHERE code = 'hin'), NOW()
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '1403502413' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '1403502413' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'aur-woh-mara', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '1403502413' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 1403502414: וַיִּקָּבֵ֖ר (H6912) → "aur-gaada-gaya" [opus-4.5-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at)
  SELECT (SELECT id FROM language WHERE code = 'hin'), NOW()
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '1403502414' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '1403502414' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'aur-gaada-gaya', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '1403502414' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 1403502415: בְּקִבְר֣וֹת (H6913) → "kabroN–mein" [opus-4.5-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at)
  SELECT (SELECT id FROM language WHERE code = 'hin'), NOW()
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '1403502415' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '1403502415' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'kabroN–mein', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '1403502415' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 1403502416: אֲבֹתָ֑יו (H0001) → "apne-pitraoN–ki" [opus-4.5-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at)
  SELECT (SELECT id FROM language WHERE code = 'hin'), NOW()
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '1403502416' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '1403502416' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'apne-pitraoN–ki', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '1403502416' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 1403502417: וְכָל־ (H3605) → "aur-sab–" [opus-4.5-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at)
  SELECT (SELECT id FROM language WHERE code = 'hin'), NOW()
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '1403502417' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '1403502417' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'aur-sab–', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '1403502417' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 1403502418: יְהוּדָה֙ (H3063) → "Yehudah" [opus-4.5-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at)
  SELECT (SELECT id FROM language WHERE code = 'hin'), NOW()
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '1403502418' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '1403502418' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'Yehudah', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '1403502418' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 1403502419: וִיר֣וּשָׁלִַ֔ם (H3389) → "aur-Yerushalam" [opus-4.5-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at)
  SELECT (SELECT id FROM language WHERE code = 'hin'), NOW()
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '1403502419' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '1403502419' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'aur-Yerushalam', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '1403502419' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 1403502420: מִֽתְאַבְּלִ֖ים (H0056) → "shok-kar-rahe-the" [opus-4.5-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at)
  SELECT (SELECT id FROM language WHERE code = 'hin'), NOW()
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '1403502420' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '1403502420' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'shok-kar-rahe-the', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '1403502420' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 1403502421: עַל־ (H5921a) → "ke-liye–" [opus-4.5-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at)
  SELECT (SELECT id FROM language WHERE code = 'hin'), NOW()
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '1403502421' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '1403502421' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'ke-liye–', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '1403502421' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 1403502422: יֹאשִׁיָּֽהוּ׃ (H2977) → "Yoshiyahu" [opus-4.5-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at)
  SELECT (SELECT id FROM language WHERE code = 'hin'), NOW()
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '1403502422' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '1403502422' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'Yoshiyahu', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '1403502422' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 1403502423: פ (H????) → "" [opus-4.5-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at)
  SELECT (SELECT id FROM language WHERE code = 'hin'), NOW()
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '1403502423' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '1403502423' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, '', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '1403502423' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
COMMIT;
