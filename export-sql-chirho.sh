#!/usr/bin/env bash
# For God so loved the world, that He gave His only begotten Son,
# that all who believe in Him should not perish but have everlasting life.
# — John 3:16

# Export all translation SQL files to stdout (idempotent)
# Usage:
#   ./export-sql-chirho.sh          # All languages
#   ./export-sql-chirho.sh spa      # Spanish only
#   ./export-sql-chirho.sh hin ben  # Hindi and Bengali
#
# Pipe to psql:
#   ./export-sql-chirho.sh spa | docker exec -i db-chirho psql -U postgres
#   ./export-sql-chirho.sh | ssh root@server "docker exec -i app-chirho-db-chirho-1 psql -U postgres"

set -e

SCRIPT_DIR_CHIRHO="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR_CHIRHO"

# Get language filter from args (if any)
LANGUAGES_CHIRHO=("$@")

# Header
echo "-- Global Bible Tools Translation Export"
echo "-- Generated: $(date -u +"%Y-%m-%dT%H:%M:%SZ")"
if [ ${#LANGUAGES_CHIRHO[@]} -gt 0 ]; then
    echo "-- Languages: ${LANGUAGES_CHIRHO[*]}"
else
    echo "-- Languages: ALL"
fi
echo ""

# Get language info (name, font, direction) by code
get_lang_info_chirho() {
    local code_chirho="$1"
    case "$code_chirho" in
        spa) echo "Spanish,Noto Sans,ltr" ;;
        hin) echo "Hindi,Noto Sans Devanagari,ltr" ;;
        ben) echo "Bengali,Noto Sans Bengali,ltr" ;;
        fra) echo "French,Noto Sans,ltr" ;;
        deu) echo "German,Noto Sans,ltr" ;;
        por) echo "Portuguese,Noto Sans,ltr" ;;
        rus) echo "Russian,Noto Sans,ltr" ;;
        zho) echo "Chinese,Noto Sans SC,ltr" ;;
        jpn) echo "Japanese,Noto Sans JP,ltr" ;;
        kor) echo "Korean,Noto Sans KR,ltr" ;;
        arb) echo "Arabic,Noto Sans Arabic,rtl" ;;
        urd) echo "Urdu,Noto Nastaliq Urdu,rtl" ;;
        heb) echo "Hebrew,Noto Sans Hebrew,rtl" ;;
        tha) echo "Thai,Noto Sans Thai,ltr" ;;
        vie) echo "Vietnamese,Noto Sans,ltr" ;;
        ind) echo "Indonesian,Noto Sans,ltr" ;;
        tam) echo "Tamil,Noto Sans Tamil,ltr" ;;
        tel) echo "Telugu,Noto Sans Telugu,ltr" ;;
        mar) echo "Marathi,Noto Sans Devanagari,ltr" ;;
        guj) echo "Gujarati,Noto Sans Gujarati,ltr" ;;
        pol) echo "Polish,Noto Sans,ltr" ;;
        ukr) echo "Ukrainian,Noto Sans,ltr" ;;
        tur) echo "Turkish,Noto Sans,ltr" ;;
        swa) echo "Swahili,Noto Sans,ltr" ;;
        amh) echo "Amharic,Noto Sans Ethiopic,ltr" ;;
        *)   echo "$code_chirho,Noto Sans,ltr" ;;  # Default for unknown
    esac
}

# Emit language creation SQL (idempotent with ON CONFLICT)
emit_language_sql_chirho() {
    local code_chirho="$1"
    local info_chirho
    info_chirho=$(get_lang_info_chirho "$code_chirho")

    local name_chirho font_chirho dir_chirho
    IFS=',' read -r name_chirho font_chirho dir_chirho <<< "$info_chirho"

    cat << EOSQL
-- Create language: $code_chirho ($name_chirho)
INSERT INTO language (id, code, name, font, text_direction)
VALUES (
    gen_random_uuid(),
    '$code_chirho',
    '$name_chirho',
    '$font_chirho',
    '$dir_chirho'
)
ON CONFLICT (code) DO UPDATE SET
    name = EXCLUDED.name,
    font = EXCLUDED.font,
    text_direction = EXCLUDED.text_direction;

EOSQL
}

# Collect unique languages to create
collect_languages_chirho() {
    if [ ${#LANGUAGES_CHIRHO[@]} -gt 0 ]; then
        printf '%s\n' "${LANGUAGES_CHIRHO[@]}"
    else
        # Find all unique language codes from directories
        find . -maxdepth 1 -type d -name '*-*-chirho' | \
            sed 's/.*-\([a-z]*\)-chirho$/\1/' | \
            sort -u
    fi
}

echo "-- =================================================="
echo "-- LANGUAGE SETUP"
echo "-- =================================================="
echo ""

for lang_chirho in $(collect_languages_chirho); do
    emit_language_sql_chirho "$lang_chirho"
done

# Find all book directories
find_books_chirho() {
    local lang_chirho="$1"
    find . -maxdepth 1 -type d -name "*-${lang_chirho}-chirho" | sort
}

# Process a single book directory
process_book_chirho() {
    local book_dir_chirho="$1"
    local book_name_chirho=$(basename "$book_dir_chirho" | sed 's/-[a-z]*-chirho$//')
    local lang_chirho=$(basename "$book_dir_chirho" | sed 's/.*-\([a-z]*\)-chirho$/\1/')

    echo "-- =================================================="
    echo "-- Book: $book_name_chirho | Language: $lang_chirho"
    echo "-- =================================================="
    echo ""

    # Check for all-verses-chirho.sql first (combined file)
    if [ -f "${book_dir_chirho}/all-verses-chirho.sql" ]; then
        cat "${book_dir_chirho}/all-verses-chirho.sql"
        echo ""
    else
        # Fall back to individual verse files
        for verse_file_chirho in "${book_dir_chirho}"/c*-v*-chirho.sql; do
            if [ -f "$verse_file_chirho" ]; then
                cat "$verse_file_chirho"
                echo ""
            fi
        done
    fi
}

# Main export logic
if [ ${#LANGUAGES_CHIRHO[@]} -eq 0 ]; then
    # Export all languages
    for lang_chirho in spa hin ben fra deu por rus zho jpn kor arb; do
        for book_dir_chirho in $(find_books_chirho "$lang_chirho"); do
            if [ -d "$book_dir_chirho" ]; then
                process_book_chirho "$book_dir_chirho"
            fi
        done
    done

    # Also catch any other language directories
    for book_dir_chirho in ./*-*-chirho/; do
        if [ -d "$book_dir_chirho" ]; then
            # Extract language code
            lang_chirho=$(basename "$book_dir_chirho" | sed 's/.*-\([a-z]*\)-chirho$/\1/')
            # Skip already processed common languages
            case "$lang_chirho" in
                spa|hin|ben|fra|deu|por|rus|zho|jpn|kor|arb) continue ;;
            esac
            process_book_chirho "$book_dir_chirho"
        fi
    done
else
    # Export only specified languages
    for lang_chirho in "${LANGUAGES_CHIRHO[@]}"; do
        for book_dir_chirho in $(find_books_chirho "$lang_chirho"); do
            if [ -d "$book_dir_chirho" ]; then
                process_book_chirho "$book_dir_chirho"
            fi
        done
    done
fi

echo "-- Export complete"
