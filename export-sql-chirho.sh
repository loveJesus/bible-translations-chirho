#!/bin/bash
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
