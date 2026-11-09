# Polity Prep

Offline-first Indian Polity study app for RRB and SSC preparation. It uses vanilla HTML, CSS, and JavaScript with no build step, backend, or third-party runtime dependency.

## Run the app

Open `index.html` directly in a current browser. All lesson content, the system-font stack, and local study features work without an internet connection. When hosted on `localhost` or HTTPS, the service worker caches the app shell for offline use after the first visit. Service workers are not available from `file://` URLs.

## Current content

- 28 modules: 26 learning modules and 2 revision modules
- 40 original exam-style questions, with answer explanations
- 31 built-in flashcards, plus 158 recall facts scheduled separately
- 26 sourced PYQs and 11 country-to-feature entries
- Search, chapter checks, timed mock mode, a previous-year question page, and a borrowed-features reference

PYQs are a growing, selected collection. Official papers are labeled separately from third-party shift compilations and candidate-response transcriptions. The app does not claim to contain every question ever asked. Original practice questions are not labeled as PYQs.

## Active recall and planning

`srs.js` implements an offline SM-2-inspired scheduler for flashcards, lesson facts, and questions. The dashboard shows the due queue and starts a 10-item mixed recall sprint. Recall and quiz decisions earn XP, confidence ratings update question intervals, and a one-time streak freeze protects a single missed day.

Lessons have Read and Recall modes, auto-generated cloze prompts, personal mnemonic fields, and a selected-text card action. Other tools include a connected knowledge map, timeline ordering, country-feature drag-and-match, an Article explorer, amendment cards, an exam planner, weakness-weighted mock mode, and optional browser read-aloud.

## Progress and accessibility

Progress is stored in local storage under `polityprep-v2`. On first launch, the app migrates the prior `polityprep-v1` record without deleting it. Use **My progress** to export or import a JSON backup. The text-size controls scale the reading interface, and all declared text sizes are at least 12px at the default setting. Light and dark themes use a system-font stack and higher-contrast muted text.

## Files

- `index.html` provides the app shell and navigation.
- `styles.css` contains the responsive light/dark design system.
- `data.js` contains the current modules, questions, flashcards, PYQs, and references.
- `srs.js` contains the local spaced-review scheduler.
- `app.js` renders lessons, games, study tools, and progress flows.
- `manifest.json` and `service-worker.js` support installation metadata and offline caching when hosted.
