-- For God so loved the world, that He gave His only begotten Son,
-- that all who believe in Him should not perish but have everlasting life.
-- — John 3:16

-- EPHESIANS Chapter 1 - Urdu (اردو) Translation
-- Generated: 2026-01-28
-- Language Code: urd

-- Verse 1: Παῦλος, ἀπόστολος Χριστοῦ Ἰησοῦ διὰ θελήματος Θεοῦ, τοῖς ἁγίοις τοῖς οὖσιν ἐν Ἐφέσῳ, καὶ πιστοῖς ἐν Χριστῷ Ἰησοῦ.
INSERT INTO "Gloss" (word_id, language_id, gloss, state) VALUES
(4900100101, (SELECT id FROM "Language" WHERE code = 'urd'), 'پولوس،', 'APPROVED'),
(4900100102, (SELECT id FROM "Language" WHERE code = 'urd'), 'رسول', 'APPROVED'),
(4900100103, (SELECT id FROM "Language" WHERE code = 'urd'), 'مسیح–کے', 'APPROVED'),
(4900100104, (SELECT id FROM "Language" WHERE code = 'urd'), 'یسوع–کے', 'APPROVED'),
(4900100105, (SELECT id FROM "Language" WHERE code = 'urd'), 'ذریعے–سے', 'APPROVED'),
(4900100106, (SELECT id FROM "Language" WHERE code = 'urd'), 'مرضی–کی', 'APPROVED'),
(4900100107, (SELECT id FROM "Language" WHERE code = 'urd'), 'خدا–کی،', 'APPROVED'),
(4900100108, (SELECT id FROM "Language" WHERE code = 'urd'), '–کو', 'APPROVED'),
(4900100109, (SELECT id FROM "Language" WHERE code = 'urd'), 'مقدسوں', 'APPROVED'),
(4900100110, (SELECT id FROM "Language" WHERE code = 'urd'), '–کو', 'APPROVED'),
(4900100111, (SELECT id FROM "Language" WHERE code = 'urd'), 'ہونے–والے', 'APPROVED'),
(4900100112, (SELECT id FROM "Language" WHERE code = 'urd'), 'میں', 'APPROVED'),
(4900100113, (SELECT id FROM "Language" WHERE code = 'urd'), 'افسس،', 'APPROVED'),
(4900100114, (SELECT id FROM "Language" WHERE code = 'urd'), 'اور', 'APPROVED'),
(4900100115, (SELECT id FROM "Language" WHERE code = 'urd'), 'وفادار', 'APPROVED'),
(4900100116, (SELECT id FROM "Language" WHERE code = 'urd'), 'میں', 'APPROVED'),
(4900100117, (SELECT id FROM "Language" WHERE code = 'urd'), 'مسیح', 'APPROVED'),
(4900100118, (SELECT id FROM "Language" WHERE code = 'urd'), 'یسوع۔', 'APPROVED')
ON CONFLICT (word_id, language_id) DO UPDATE SET gloss = EXCLUDED.gloss, state = 'APPROVED';

-- Verse 2: χάρις ὑμῖν καὶ εἰρήνη ἀπὸ Θεοῦ Πατρὸς ἡμῶν καὶ Κυρίου Ἰησοῦ Χριστοῦ.
INSERT INTO "Gloss" (word_id, language_id, gloss, state) VALUES
(4900100201, (SELECT id FROM "Language" WHERE code = 'urd'), 'فضل', 'APPROVED'),
(4900100202, (SELECT id FROM "Language" WHERE code = 'urd'), 'تمہیں', 'APPROVED'),
(4900100203, (SELECT id FROM "Language" WHERE code = 'urd'), 'اور', 'APPROVED'),
(4900100204, (SELECT id FROM "Language" WHERE code = 'urd'), 'سلامتی', 'APPROVED'),
(4900100205, (SELECT id FROM "Language" WHERE code = 'urd'), 'سے–', 'APPROVED'),
(4900100206, (SELECT id FROM "Language" WHERE code = 'urd'), 'خدا', 'APPROVED'),
(4900100207, (SELECT id FROM "Language" WHERE code = 'urd'), 'باپ', 'APPROVED'),
(4900100208, (SELECT id FROM "Language" WHERE code = 'urd'), 'ہمارے', 'APPROVED'),
(4900100209, (SELECT id FROM "Language" WHERE code = 'urd'), 'اور', 'APPROVED'),
(4900100210, (SELECT id FROM "Language" WHERE code = 'urd'), 'خداوند', 'APPROVED'),
(4900100211, (SELECT id FROM "Language" WHERE code = 'urd'), 'یسوع', 'APPROVED'),
(4900100212, (SELECT id FROM "Language" WHERE code = 'urd'), 'مسیح۔', 'APPROVED')
ON CONFLICT (word_id, language_id) DO UPDATE SET gloss = EXCLUDED.gloss, state = 'APPROVED';
