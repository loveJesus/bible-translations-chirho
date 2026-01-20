-- For God so loved the world, that He gave His only begotten Son,
-- that all who believe in Him should not perish but have everlasting life.
-- — John 3:16

-- 2CHRONICLES c35-v15 - HIN
-- aur-gaanewaale bani- Asaf–ke par– apni-jagah aagya–ke-anusar Dawood aur-Asaf aur-Heman aur-Yedutun drashTa raja–ka aur-dwaar-paal dwaar–par aur-dwaar nahi-tha unhe haTna se– apni-seva kyonki– unke-bhai Levi taiyaar-karte-the unke-liye

BEGIN;
-- 1403501501: וְהַמְשֹֽׁרֲרִ֨ים (H7891) → "aur-gaanewaale" [opus-4.5-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at)
  SELECT (SELECT id FROM language WHERE code = 'hin'), NOW()
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '1403501501' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '1403501501' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'aur-gaanewaale', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '1403501501' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 1403501502: בְּנֵי־ (H1121a) → "bani-" [opus-4.5-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at)
  SELECT (SELECT id FROM language WHERE code = 'hin'), NOW()
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '1403501502' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '1403501502' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'bani-', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '1403501502' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 1403501503: אָסָ֜ף (H0623) → "Asaf–ke" [opus-4.5-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at)
  SELECT (SELECT id FROM language WHERE code = 'hin'), NOW()
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '1403501503' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '1403501503' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'Asaf–ke', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '1403501503' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 1403501504: עַל־ (H5921a) → "par–" [opus-4.5-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at)
  SELECT (SELECT id FROM language WHERE code = 'hin'), NOW()
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '1403501504' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '1403501504' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'par–', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '1403501504' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 1403501505: מַעֲמָדָ֗ם (H4612) → "apni-jagah" [opus-4.5-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at)
  SELECT (SELECT id FROM language WHERE code = 'hin'), NOW()
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '1403501505' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '1403501505' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'apni-jagah', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '1403501505' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 1403501506: כְּמִצְוַ֤ת (H4687) → "aagya–ke-anusar" [opus-4.5-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at)
  SELECT (SELECT id FROM language WHERE code = 'hin'), NOW()
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '1403501506' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '1403501506' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'aagya–ke-anusar', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '1403501506' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 1403501507: דָּוִיד֙ (H1732) → "Dawood" [opus-4.5-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at)
  SELECT (SELECT id FROM language WHERE code = 'hin'), NOW()
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '1403501507' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '1403501507' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'Dawood', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '1403501507' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 1403501508: וְאָסָ֞ף (H0623) → "aur-Asaf" [opus-4.5-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at)
  SELECT (SELECT id FROM language WHERE code = 'hin'), NOW()
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '1403501508' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '1403501508' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'aur-Asaf', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '1403501508' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 1403501509: וְהֵימָ֤ן (H1968) → "aur-Heman" [opus-4.5-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at)
  SELECT (SELECT id FROM language WHERE code = 'hin'), NOW()
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '1403501509' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '1403501509' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'aur-Heman', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '1403501509' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 1403501510: וִֽידֻתוּן֙ (H3038) → "aur-Yedutun" [opus-4.5-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at)
  SELECT (SELECT id FROM language WHERE code = 'hin'), NOW()
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '1403501510' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '1403501510' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'aur-Yedutun', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '1403501510' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 1403501511: חוֹזֵ֣ה (H2374) → "drashTa" [opus-4.5-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at)
  SELECT (SELECT id FROM language WHERE code = 'hin'), NOW()
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '1403501511' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '1403501511' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'drashTa', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '1403501511' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 1403501512: הַמֶּ֔לֶךְ (H4428) → "raja–ka" [opus-4.5-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at)
  SELECT (SELECT id FROM language WHERE code = 'hin'), NOW()
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '1403501512' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '1403501512' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'raja–ka', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '1403501512' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 1403501513: וְהַשֹּׁעֲרִ֖ים (H7778) → "aur-dwaar-paal" [opus-4.5-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at)
  SELECT (SELECT id FROM language WHERE code = 'hin'), NOW()
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '1403501513' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '1403501513' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'aur-dwaar-paal', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '1403501513' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 1403501514: לְשַׁ֣עַר (H8179) → "dwaar–par" [opus-4.5-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at)
  SELECT (SELECT id FROM language WHERE code = 'hin'), NOW()
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '1403501514' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '1403501514' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'dwaar–par', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '1403501514' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 1403501515: וָשָׁ֑עַר‪‬ (H8179) → "aur-dwaar" [opus-4.5-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at)
  SELECT (SELECT id FROM language WHERE code = 'hin'), NOW()
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '1403501515' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '1403501515' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'aur-dwaar', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '1403501515' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 1403501516: אֵ֣ין (H0369) → "nahi-tha" [opus-4.5-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at)
  SELECT (SELECT id FROM language WHERE code = 'hin'), NOW()
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '1403501516' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '1403501516' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'nahi-tha', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '1403501516' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 1403501517: לָהֶ֗ם (H????) → "unhe" [opus-4.5-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at)
  SELECT (SELECT id FROM language WHERE code = 'hin'), NOW()
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '1403501517' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '1403501517' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'unhe', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '1403501517' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 1403501518: לָסוּר֙ (H5493) → "haTna" [opus-4.5-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at)
  SELECT (SELECT id FROM language WHERE code = 'hin'), NOW()
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '1403501518' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '1403501518' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'haTna', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '1403501518' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 1403501519: מֵעַ֣ל (H5921a) → "se–" [opus-4.5-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at)
  SELECT (SELECT id FROM language WHERE code = 'hin'), NOW()
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '1403501519' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '1403501519' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'se–', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '1403501519' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 1403501520: עֲבֹֽדָתָ֔ם (H5656) → "apni-seva" [opus-4.5-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at)
  SELECT (SELECT id FROM language WHERE code = 'hin'), NOW()
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '1403501520' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '1403501520' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'apni-seva', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '1403501520' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 1403501521: כִּֽי־ (H3588a) → "kyonki–" [opus-4.5-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at)
  SELECT (SELECT id FROM language WHERE code = 'hin'), NOW()
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '1403501521' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '1403501521' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'kyonki–', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '1403501521' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 1403501522: אֲחֵיהֶ֥ם (H0251) → "unke-bhai" [opus-4.5-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at)
  SELECT (SELECT id FROM language WHERE code = 'hin'), NOW()
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '1403501522' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '1403501522' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'unke-bhai', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '1403501522' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 1403501523: הַלְוִיִּ֖ם (H3881) → "Levi" [opus-4.5-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at)
  SELECT (SELECT id FROM language WHERE code = 'hin'), NOW()
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '1403501523' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '1403501523' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'Levi', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '1403501523' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 1403501524: הֵכִ֥ינוּ (H3559a) → "taiyaar-karte-the" [opus-4.5-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at)
  SELECT (SELECT id FROM language WHERE code = 'hin'), NOW()
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '1403501524' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '1403501524' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'taiyaar-karte-the', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '1403501524' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
-- 1403501525: לָהֶֽם׃ (H????) → "unke-liye" [opus-4.5-chirho]
WITH np AS (
  INSERT INTO phrase (language_id, created_at)
  SELECT (SELECT id FROM language WHERE code = 'hin'), NOW()
  WHERE NOT EXISTS (
    SELECT 1 FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
    WHERE pw.word_id = '1403501525' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
  )
  RETURNING id
)
INSERT INTO phrase_word (phrase_id, word_id) SELECT id, '1403501525' FROM np ON CONFLICT DO NOTHING;
INSERT INTO gloss (phrase_id, gloss, state, updated_at, source)
SELECT p.id, 'unke-liye', 'UNAPPROVED', NOW(), 'IMPORT'
FROM phrase p JOIN phrase_word pw ON pw.phrase_id = p.id
WHERE pw.word_id = '1403501525' AND p.language_id = (SELECT id FROM language WHERE code = 'hin') AND p.deleted_at IS NULL
ON CONFLICT (phrase_id) DO UPDATE SET gloss = EXCLUDED.gloss, updated_at = EXCLUDED.updated_at, source = EXCLUDED.source;
COMMIT;
