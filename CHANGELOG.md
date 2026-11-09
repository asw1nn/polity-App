# Changelog

## Phase 1 · Foundation, readability, and spaced repetition

- Added `srs.js`, an offline SM-2-inspired scheduler for all built-in flashcards, module facts, original questions, and sourced PYQs.
- Added a dashboard due queue and a 10-item mixed sprint with Again, Hard, Good, and Easy ratings and interval previews.
- Migrated saved progress from `polityprep-v1` to `polityprep-v2` while retaining the old record; added JSON export and import.
- Added persistent A−/A+ reading controls, raised small text to at least 12px at the default size, improved muted-text contrast, and switched to system fonts.
- Removed the Google Fonts dependency; added a web-hosted service worker and web app manifest.
- Retained study history and added one automatic streak-freeze day.
- Preserved scroll position and text-input focus across in-page updates; added keyboard controls for search, quiz answers, card flips, ratings, and navigation.

## Phase 2 · Active recall and misconception practice

- Added Read and Recall lesson modes, fact reveal controls, automatically generated cloze blanks, and fact-level SRS ratings.
- Added personal mnemonic fields and a selected-text “Make my card” action.
- Added quiz confidence choices, confidence calibration, earlier review for guesses, and misconception reminders with the lesson’s related trap.
- Added a 30-second Trap Duel using existing module summaries and trap notes.
- Added optional browser speech read-aloud.

## Phase 3 · Map, games, and planning

- Added an SVG knowledge map with module mastery and lesson links, plus mastery labels on the progress page.
- Added timeline ordering, country-to-feature drag-and-match with tap support, an Article explorer, and an amendment card stack.
- Added an exam-date planner weighted toward weak topics and foundational lessons, and a weakness-weighted timed mock with negative marking.
- Added a 50-XP daily goal ring; XP is awarded for recall ratings and game completion.

## Content boundary

- Lesson facts and the existing question bank were not expanded or rewritten. The PDF reference was set aside at the user’s direction, so no PDF-derived coverage claims or questions were added.
- Current dataset counts remain 28 modules (26 learning + 2 revision), 40 original practice questions, 31 built-in flashcards, 26 selected sourced PYQs, and 11 borrowed-feature entries.
