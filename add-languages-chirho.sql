-- For God so loved the world, that He gave His only begotten Son,
-- that all who believe in Him should not perish but have everlasting life.
-- — John 3:16

-- ============================================================================
-- ADD TRANSLATION LANGUAGES (Idempotent)
-- ============================================================================
-- Run this before applying any translation SQL files to ensure the target
-- languages exist in the database.
--
-- Usage:
--   psql -U postgres -d postgres < add-languages-chirho.sql
--   # or via docker:
--   docker exec -i <container> psql -U postgres < add-languages-chirho.sql

BEGIN;

-- ============================================================================
-- SOUTH ASIAN LANGUAGES
-- ============================================================================

-- Hindi (hin) - हिन्दी
INSERT INTO language (id, code, name)
VALUES (gen_random_uuid(), 'hin', 'Hindi')
ON CONFLICT (code) DO NOTHING;

-- Bengali (ben) - বাংলা
INSERT INTO language (id, code, name)
VALUES (gen_random_uuid(), 'ben', 'Bengali')
ON CONFLICT (code) DO NOTHING;

-- Urdu (urd) - اردو
INSERT INTO language (id, code, name)
VALUES (gen_random_uuid(), 'urd', 'Urdu')
ON CONFLICT (code) DO NOTHING;

-- Marathi (mar) - मराठी
INSERT INTO language (id, code, name)
VALUES (gen_random_uuid(), 'mar', 'Marathi')
ON CONFLICT (code) DO NOTHING;

-- Telugu (tel) - తెలుగు
INSERT INTO language (id, code, name)
VALUES (gen_random_uuid(), 'tel', 'Telugu')
ON CONFLICT (code) DO NOTHING;

-- Tamil (tam) - தமிழ்
INSERT INTO language (id, code, name)
VALUES (gen_random_uuid(), 'tam', 'Tamil')
ON CONFLICT (code) DO NOTHING;

-- Gujarati (guj) - ગુજરાતી
INSERT INTO language (id, code, name)
VALUES (gen_random_uuid(), 'guj', 'Gujarati')
ON CONFLICT (code) DO NOTHING;

-- Western Punjabi/Shahmukhi (pnb) - پنجابی
INSERT INTO language (id, code, name)
VALUES (gen_random_uuid(), 'pnb', 'Western Punjabi')
ON CONFLICT (code) DO NOTHING;

-- ============================================================================
-- EAST ASIAN LANGUAGES
-- ============================================================================

-- Chinese Simplified (zho) - 中文简体
INSERT INTO language (id, code, name)
VALUES (gen_random_uuid(), 'zho', 'Chinese (Simplified)')
ON CONFLICT (code) DO NOTHING;

-- Cantonese (yue) - 粵語
INSERT INTO language (id, code, name)
VALUES (gen_random_uuid(), 'yue', 'Cantonese')
ON CONFLICT (code) DO NOTHING;

-- Japanese (jpn) - 日本語
INSERT INTO language (id, code, name)
VALUES (gen_random_uuid(), 'jpn', 'Japanese')
ON CONFLICT (code) DO NOTHING;

-- Korean (kor) - 한국어
INSERT INTO language (id, code, name)
VALUES (gen_random_uuid(), 'kor', 'Korean')
ON CONFLICT (code) DO NOTHING;

-- Vietnamese (vie) - Tiếng Việt
INSERT INTO language (id, code, name)
VALUES (gen_random_uuid(), 'vie', 'Vietnamese')
ON CONFLICT (code) DO NOTHING;

-- Thai (tha) - ไทย
INSERT INTO language (id, code, name)
VALUES (gen_random_uuid(), 'tha', 'Thai')
ON CONFLICT (code) DO NOTHING;

-- Burmese (mya) - မြန်မာ
INSERT INTO language (id, code, name)
VALUES (gen_random_uuid(), 'mya', 'Burmese')
ON CONFLICT (code) DO NOTHING;

-- ============================================================================
-- SOUTHEAST ASIAN LANGUAGES
-- ============================================================================

-- Indonesian (ind) - Bahasa Indonesia
INSERT INTO language (id, code, name)
VALUES (gen_random_uuid(), 'ind', 'Indonesian')
ON CONFLICT (code) DO NOTHING;

-- Javanese (jav) - Basa Jawa
INSERT INTO language (id, code, name)
VALUES (gen_random_uuid(), 'jav', 'Javanese')
ON CONFLICT (code) DO NOTHING;

-- Tagalog (tgl) - Tagalog
INSERT INTO language (id, code, name)
VALUES (gen_random_uuid(), 'tgl', 'Tagalog')
ON CONFLICT (code) DO NOTHING;

-- ============================================================================
-- EUROPEAN LANGUAGES
-- ============================================================================

-- Spanish (spa) - Español
INSERT INTO language (id, code, name)
VALUES (gen_random_uuid(), 'spa', 'Spanish')
ON CONFLICT (code) DO NOTHING;

-- Portuguese (por) - Português
INSERT INTO language (id, code, name)
VALUES (gen_random_uuid(), 'por', 'Portuguese')
ON CONFLICT (code) DO NOTHING;

-- French (fra) - Français
INSERT INTO language (id, code, name)
VALUES (gen_random_uuid(), 'fra', 'French')
ON CONFLICT (code) DO NOTHING;

-- German (deu) - Deutsch
INSERT INTO language (id, code, name)
VALUES (gen_random_uuid(), 'deu', 'German')
ON CONFLICT (code) DO NOTHING;

-- Italian (ita) - Italiano
INSERT INTO language (id, code, name)
VALUES (gen_random_uuid(), 'ita', 'Italian')
ON CONFLICT (code) DO NOTHING;

-- Dutch (nld) - Nederlands
INSERT INTO language (id, code, name)
VALUES (gen_random_uuid(), 'nld', 'Dutch')
ON CONFLICT (code) DO NOTHING;

-- Polish (pol) - Polski
INSERT INTO language (id, code, name)
VALUES (gen_random_uuid(), 'pol', 'Polish')
ON CONFLICT (code) DO NOTHING;

-- Ukrainian (ukr) - Українська
INSERT INTO language (id, code, name)
VALUES (gen_random_uuid(), 'ukr', 'Ukrainian')
ON CONFLICT (code) DO NOTHING;

-- Russian (rus) - Русский
INSERT INTO language (id, code, name)
VALUES (gen_random_uuid(), 'rus', 'Russian')
ON CONFLICT (code) DO NOTHING;

-- Romanian (ron) - Română
INSERT INTO language (id, code, name)
VALUES (gen_random_uuid(), 'ron', 'Romanian')
ON CONFLICT (code) DO NOTHING;

-- Czech (ces) - Čeština
INSERT INTO language (id, code, name)
VALUES (gen_random_uuid(), 'ces', 'Czech')
ON CONFLICT (code) DO NOTHING;

-- Hungarian (hun) - Magyar
INSERT INTO language (id, code, name)
VALUES (gen_random_uuid(), 'hun', 'Hungarian')
ON CONFLICT (code) DO NOTHING;

-- Modern Greek (ell) - Ελληνικά
INSERT INTO language (id, code, name)
VALUES (gen_random_uuid(), 'ell', 'Modern Greek')
ON CONFLICT (code) DO NOTHING;

-- ============================================================================
-- SCANDINAVIAN LANGUAGES
-- ============================================================================

-- Swedish (swe) - Svenska
INSERT INTO language (id, code, name)
VALUES (gen_random_uuid(), 'swe', 'Swedish')
ON CONFLICT (code) DO NOTHING;

-- Norwegian (nor) - Norsk
INSERT INTO language (id, code, name)
VALUES (gen_random_uuid(), 'nor', 'Norwegian')
ON CONFLICT (code) DO NOTHING;

-- Danish (dan) - Dansk
INSERT INTO language (id, code, name)
VALUES (gen_random_uuid(), 'dan', 'Danish')
ON CONFLICT (code) DO NOTHING;

-- ============================================================================
-- MIDDLE EASTERN LANGUAGES
-- ============================================================================

-- Arabic (arb) - العربية
INSERT INTO language (id, code, name)
VALUES (gen_random_uuid(), 'arb', 'Arabic')
ON CONFLICT (code) DO NOTHING;

-- Modern Hebrew (heb) - עברית
INSERT INTO language (id, code, name)
VALUES (gen_random_uuid(), 'heb', 'Modern Hebrew')
ON CONFLICT (code) DO NOTHING;

-- Turkish (tur) - Türkçe
INSERT INTO language (id, code, name)
VALUES (gen_random_uuid(), 'tur', 'Turkish')
ON CONFLICT (code) DO NOTHING;

-- ============================================================================
-- AFRICAN LANGUAGES
-- ============================================================================

-- Swahili (swa) - Kiswahili
INSERT INTO language (id, code, name)
VALUES (gen_random_uuid(), 'swa', 'Swahili')
ON CONFLICT (code) DO NOTHING;

-- Hausa (hau) - Hausa
INSERT INTO language (id, code, name)
VALUES (gen_random_uuid(), 'hau', 'Hausa')
ON CONFLICT (code) DO NOTHING;

-- Yoruba (yor) - Yorùbá
INSERT INTO language (id, code, name)
VALUES (gen_random_uuid(), 'yor', 'Yoruba')
ON CONFLICT (code) DO NOTHING;

-- Amharic (amh) - አማርኛ
INSERT INTO language (id, code, name)
VALUES (gen_random_uuid(), 'amh', 'Amharic')
ON CONFLICT (code) DO NOTHING;

-- ============================================================================
-- CARIBBEAN LANGUAGES
-- ============================================================================

-- Haitian Creole (hat) - Kreyòl Ayisyen
INSERT INTO language (id, code, name)
VALUES (gen_random_uuid(), 'hat', 'Haitian Creole')
ON CONFLICT (code) DO NOTHING;

COMMIT;

-- Verify languages were added
SELECT code, name FROM language ORDER BY name;
