/* Offline SM-2 inspired scheduler. State lives inside the app's versioned local record. */
(() => {
  'use strict';
  const DAY = 86400000;
  function record(state, id) {
    state.srs ||= {};
    return state.srs[id] ||= { ease: 2.5, interval: 0, due: 0, reps: 0, lapses: 0 };
  }
  function due(state, id, now = Date.now()) { return record(state, id).due <= now; }
  function schedule(state, id, rating, now = Date.now()) {
    const r = record(state, id);
    if (rating === 'again') {
      r.lapses++;
      r.reps = 0;
      r.interval = 0;
      r.due = now + 10 * 60000;
      r.ease = Math.max(1.3, r.ease - 0.2);
    } else if (rating === 'hard') {
      r.interval = Math.max(1, Math.round((r.interval || 1) * 1.2));
      r.ease = Math.max(1.3, r.ease - 0.15);
      r.reps++;
      r.due = now + r.interval * DAY;
    } else {
      r.reps++;
      r.interval = r.reps === 1 ? (rating === 'easy' ? 4 : 1) : r.reps === 2 ? (rating === 'easy' ? 8 : 3) : Math.max(1, Math.round(r.interval * r.ease * (rating === 'easy' ? 1.3 : 1)));
      if (rating === 'easy') r.ease = Math.min(3.2, r.ease + 0.15);
      r.due = now + r.interval * DAY;
    }
    return { ...r };
  }
  function dueCount(state, ids, now = Date.now()) { return ids.reduce((n, id) => n + (due(state, id, now) ? 1 : 0), 0); }
  window.POLITY_SRS = { record, due, schedule, dueCount };
})();
