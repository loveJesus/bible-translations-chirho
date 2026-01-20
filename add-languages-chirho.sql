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

-- Hindi (hin) - हिन्दी
INSERT INTO language (id, code, name)
VALUES (gen_random_uuid(), 'hin', 'Hindi')
ON CONFLICT (code) DO NOTHING;

-- Bengali (ben) - বাংলা
INSERT INTO language (id, code, name)
VALUES (gen_random_uuid(), 'ben', 'Bengali')
ON CONFLICT (code) DO NOTHING;

-- Russian (rus) - Русский
INSERT INTO language (id, code, name)
VALUES (gen_random_uuid(), 'rus', 'Russian')
ON CONFLICT (code) DO NOTHING;

-- Spanish (spa) - Español
INSERT INTO language (id, code, name)
VALUES (gen_random_uuid(), 'spa', 'Spanish')
ON CONFLICT (code) DO NOTHING;

-- Swahili (swa) - Kiswahili
INSERT INTO language (id, code, name)
VALUES (gen_random_uuid(), 'swa', 'Swahili')
ON CONFLICT (code) DO NOTHING;

-- Turkish (tur) - Türkçe
INSERT INTO language (id, code, name)
VALUES (gen_random_uuid(), 'tur', 'Turkish')
ON CONFLICT (code) DO NOTHING;

COMMIT;

-- Verify languages were added
SELECT code, name FROM language ORDER BY code;
