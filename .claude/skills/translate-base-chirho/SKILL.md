---
name: translate-base-chirho
description: Base translation skill for word-by-word Bible translations. Use this for any language not covered by a specific skill. Provides universal translation conventions and workflow.
---

# For God so loved the world, that He gave His only begotten Son,
# that all who believe in Him should not perish but have everlasting life.
# — John 3:16

# Bible Translation Base Skill

## Core Philosophy

Word-by-word literal translation preserving:
1. **Original word order** where possible
2. **Lemma consistency** - same Hebrew/Greek root → same translation
3. **Semantic precision** over fluency

## Particle Handling

Use n-dash (–) to join particles with their head word:
- Articles: "the–heavens", "the–earth"
- Prepositions: "in–beginning", "upon–face"
- Conjunctions at word level: "and–said"

## Divine Names

| Original | Standard Form | Notes |
|----------|--------------|-------|
| יהוה (YHWH) | Yahweh | Use local form if established |
| אלהים (Elohim) | God | Or "gods" in context |
| Χριστός | Christ/Messiah | Use local equivalent |
| Ἰησοῦς | Jesus | Transliterate appropriately |

## Proper Names

Transliterate from the **Greek NT / Hebrew OT** text with appropriate script:
- Preserve Greek diacritics where script allows: Iēsoûs → appropriate local form
- Use established local forms if widely recognized

## Translation Workflow

1. **Get words**: `get_words_for_translation_chirho(book, chapter)`
2. **Translate**: Output minimal JSON `{"word_id": "gloss", ...}`
3. **Generate SQL**: `expand_glosses_chirho(lang, book, glosses)`

## Consistency Tracking

Record decisions via `set_decision_chirho(lemma_id, gloss, notes)`:
- Check existing decisions: `query_lemma_chirho(lemma_id)`
- Find inconsistencies: `check_consistency_chirho()`

## Quality Checks

Before completing a book:
1. Verify all words have glosses
2. Check lemma consistency across chapters
3. Review particle handling for uniformity

## Modifying This Skill

When you encounter situations requiring new conventions:
1. Document the decision with rationale
2. Add to the appropriate section above
3. Apply retroactively if needed
