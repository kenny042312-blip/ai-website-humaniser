import {films, showIndex, matchingFilms, normaliseSaved, sortedSaved} from './data.js';

const $ = selector => document.querySelector(selector);
const $$ = selector => [...document.querySelectorAll(selector)];
const escapeHTML = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const key = 'side-a-shortlist-v1';
const filmDialog = $('#film-dialog');
const shortlistDialog = $('#shortlist-dialog');
let day = 'all';
let format = 'all';
let saved = [];
let storageWorks = true;
let clearedList = null;
let toastTimer;

try {
  const raw = localStorage.getItem(key);
  if (raw) {
    try { saved = normaliseSaved(JSON.parse(raw)); }
    catch { saved = []; }
  }
  localStorage.setItem('side-a-storage-probe', '1');
  localStorage.removeItem('side-a-storage-probe');
} catch { storageWorks = false; }

function storageMessage() {
  $('#storage-note').textContent = storageWorks
    ? 'Saved in this browser. This is a plan, not a ticket reservation.'
    : 'Browser storage is unavailable. Your list lasts for this page only; download it to keep a copy. This is not a reservation.';
  $('.programme-caption').innerHTML = `<span class="small-cross" aria-hidden="true">+</span>${storageWorks
    ? 'Choose a screening time to read more and save it. Your shortlist stays in this browser.'
    : 'Browser storage is unavailable. Your shortlist lasts for this page only; download it to keep a copy.'}`;
}

function persist() {
  try { localStorage.setItem(key, JSON.stringify(saved)); }
  catch { storageWorks = false; storageMessage(); }
}

function announce(message) {
  clearTimeout(toastTimer);
  const toast = $('#toast');
  toast.textContent = message;
  toast.classList.add('is-visible');
  toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 3200);
}

function screeningMarkup(show, film) {
  const isSaved = saved.includes(show.id);
  return `<button class="screening-button${isSaved ? ' is-saved' : ''}" data-show="${show.id}" aria-label="${escapeHTML(film.title)}, ${show.dayName} ${show.day} November at ${show.time}${isSaved ? ', saved to shortlist' : ''}">
    <span class="day">${show.dateLabel}</span><time datetime="2026-11-0${show.day}T${show.time}">${show.time}</time><span class="screening-icon" aria-hidden="true">${isSaved ? '✓' : '↗'}</span></button>`;
}

function renderProgramme() {
  const results = matchingFilms(day, format);
  const shows = results.reduce((total, film) => total + film.shows.length, 0);
  $('#results-status').textContent = `${results.length} ${results.length === 1 ? 'film' : 'films'} · ${shows} ${shows === 1 ? 'screening' : 'screenings'}`;
  $('#no-results').hidden = results.length !== 0;
  $('#film-grid').hidden = results.length === 0;
  $('#film-grid').innerHTML = results.map(film => `<article class="film-card" aria-labelledby="title-${film.id}">
    <button class="film-art" data-film="${film.id}" aria-label="Read about ${escapeHTML(film.title)}"><img src="./assets/${film.image}" alt="${escapeHTML(film.alt)}" width="1536" height="1024" loading="lazy"><span class="film-number" aria-hidden="true">0${films.findIndex(item => item.id === film.id) + 1}</span><span class="film-art-action" aria-hidden="true">FILM NOTES <span>↗</span></span></button>
    <p class="film-category">${film.category}</p><h3 class="film-title" id="title-${film.id}"><button class="title-button" data-film="${film.id}">${film.displayTitle}</button></h3>
    <p class="film-meta">${escapeHTML(film.director)} · ${film.year} · ${film.minutes} min · ${film.format}</p><p class="film-teaser">${escapeHTML(film.teaser)}</p>
    <div class="film-times">${film.shows.map(show => screeningMarkup(show, film)).join('')}</div><p class="film-subtitles">${film.subtitles}</p></article>`).join('');
}

function updateSavedState() {
  $$('.saved-count').forEach(node => { node.textContent = saved.length; });
  $$('[data-open-shortlist]').forEach(button => button.setAttribute('aria-label', `Open my shortlist, ${saved.length} ${saved.length === 1 ? 'screening' : 'screenings'}`));
  $$('[data-save-show]').forEach(button => {
    const isSaved = saved.includes(button.dataset.saveShow);
    const item = showIndex.get(button.dataset.saveShow);
    button.setAttribute('aria-pressed', String(isSaved));
    button.setAttribute('aria-label', `${isSaved ? 'Remove' : 'Save'} ${item.film.title}, ${item.show.dayName} at ${item.show.time}${isSaved ? ' from' : ' to'} shortlist`);
    button.innerHTML = `${isSaved ? 'Saved to list' : 'Save screening'} <span aria-hidden="true">${isSaved ? '✓' : '+'}</span>`;
  });
  $$('[data-show]').forEach(button => {
    const item = showIndex.get(button.dataset.show);
    const isSaved = saved.includes(button.dataset.show);
    button.classList.toggle('is-saved', isSaved);
    button.querySelector('.screening-icon').textContent = isSaved ? '✓' : '↗';
    button.setAttribute('aria-label', `${item.film.title}, ${item.show.dayName} ${item.show.day} November at ${item.show.time}${isSaved ? ', saved to shortlist' : ''}`);
  });
}

function openDialog(dialog) {
  if (dialog.open) return;
  document.body.classList.add('dialog-open');
  dialog.showModal();
  dialog.scrollTop = 0;
  dialog.querySelector('[data-close-dialog]').focus({preventScroll:true});
}

function openFilm(id, selectedShow = '') {
  const film = films.find(item => item.id === id);
  if (!film) return;
  $('#film-dialog-content').innerHTML = `<img class="dialog-art" src="./assets/${film.image}" alt="${escapeHTML(film.alt)}" width="1536" height="1024"><div class="film-detail-body">
    <p class="eyebrow">${film.category}</p><div class="detail-heading"><h2 id="film-dialog-title">${film.displayTitle}</h2><span class="format-stamp">${film.format}</span></div>
    <div class="detail-facts"><span>Dir. ${escapeHTML(film.director)}</span><span>${film.year} · ${film.minutes} min</span><span>${film.country}</span><span>${film.language}</span><span>${film.subtitles}</span></div>
    <p class="detail-synopsis">${escapeHTML(film.synopsis)}</p><aside class="programmer-note"><h3>WHY IT’S ON OUR SCREEN</h3><p>${escapeHTML(film.note)}</p></aside><p class="content-note"><strong>Content note:</strong> ${film.content}</p>
    <section class="detail-screenings" aria-label="Screenings for ${escapeHTML(film.title)}"><h3>FIND YOUR SHOW.</h3>${film.shows.map(show => `<div class="detail-screening${show.id === selectedShow ? ' highlighted' : ''}"><div class="detail-screening-info"><span>${show.dateLabel}${show.id === selectedShow ? ' · YOUR PICK' : ''}</span><strong>${show.time}</strong></div><button class="save-button" data-save-show="${show.id}" aria-pressed="false">Save screening <span aria-hidden="true">+</span></button></div>`).join('')}</section>
    <p class="detail-demo-note">Fictional film and screening. Saving adds it to your local shortlist; it does not book a ticket.</p></div>`;
  updateSavedState();
  openDialog(filmDialog);
  if (selectedShow) {
    const selection = filmDialog.querySelector(`[data-save-show="${selectedShow}"]`);
    selection.focus({preventScroll:true});
    selection.scrollIntoView({block:'center',behavior:'instant'});
  }
}

function renderShortlist() {
  const entries = sortedSaved(saved);
  $('#shortlist-actions').hidden = entries.length === 0;
  $('#clear-feedback').hidden = !clearedList;
  $('#shortlist-content').innerHTML = entries.length ? entries.map(({film, show}) => `<article class="shortlist-item"><img src="./assets/${film.image}" alt="" width="82" height="100"><div><p class="saved-date">${show.dateLabel} · ${show.time}</p><h3>${film.displayTitle}</h3><p class="saved-meta">${film.minutes} min · ${film.format} · ${film.subtitles}</p></div><button class="icon-button" data-remove-show="${show.id}" aria-label="Remove ${escapeHTML(film.title)}, ${show.dayName} at ${show.time}"><svg aria-hidden="true" viewBox="0 0 24 24"><path d="m6 6 12 12M18 6 6 18"/></svg></button></article>`).join('')
    : `<div class="shortlist-empty"><span aria-hidden="true">00</span><h3>THE NIGHT IS STILL OPEN.</h3><p>Find a film that catches your eye, then choose a screening to save here.</p><button class="button button-ink" id="back-to-programme">Explore the programme <span aria-hidden="true">↗</span></button></div>`;
}

function closeToProgramme() {
  shortlistDialog.close();
  const programme = $('#programme');
  programme.scrollIntoView({block:'start'});
  programme.focus({preventScroll:true});
}

document.addEventListener('click', event => {
  const button = event.target.closest('button');
  if (!button) return;
  if (button.hasAttribute('data-film')) openFilm(button.dataset.film);
  if (button.hasAttribute('data-show')) {
    const item = showIndex.get(button.dataset.show);
    openFilm(item.film.id, item.show.id);
  }
  if (button.hasAttribute('data-save-show')) {
    const id = button.dataset.saveShow;
    saved = saved.includes(id) ? saved.filter(item => item !== id) : [...saved, id];
    clearedList = null;
    persist();
    updateSavedState();
  }
  if (button.hasAttribute('data-open-shortlist')) {
    renderShortlist();
    storageMessage();
    openDialog(shortlistDialog);
  }
  if (button.hasAttribute('data-close-dialog')) button.closest('dialog').close();
  if (button.hasAttribute('data-day')) {
    day = button.dataset.day;
    $$('[data-day]').forEach(item => item.setAttribute('aria-pressed', String(item.dataset.day === day)));
    renderProgramme();
  }
  if (button.hasAttribute('data-remove-show')) {
    const id = button.dataset.removeShow;
    const buttons = $$('[data-remove-show]');
    const index = buttons.indexOf(button);
    saved = saved.filter(item => item !== id);
    clearedList = null;
    persist();
    updateSavedState();
    renderShortlist();
    const nextButtons = $$('[data-remove-show]');
    (nextButtons[Math.min(index,nextButtons.length - 1)] || $('#back-to-programme')).focus();
  }
  if (button.id === 'back-to-programme') closeToProgramme();
});

$('#format-filter').addEventListener('change', event => {
  format = event.target.value;
  renderProgramme();
});
$('#reset-filters').addEventListener('click', () => {
  day = 'all'; format = 'all';
  $('#format-filter').value = 'all';
  $$('[data-day]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.day === 'all')));
  renderProgramme();
  $('[data-day="all"]').focus();
});
$('#clear-list').addEventListener('click', () => {
  clearedList = [...saved]; saved = [];
  persist(); updateSavedState(); renderShortlist();
  $('#undo-clear').focus();
});
$('#undo-clear').addEventListener('click', () => {
  if (!clearedList) return;
  saved = normaliseSaved(clearedList); clearedList = null;
  persist(); updateSavedState(); renderShortlist();
  $('#shortlist-title').focus();
});
$('#download-list').addEventListener('click', () => {
  const text = ['SIDE A — MY WEEKEND SHORTLIST','Fictional programme · 6–8 November 2026','This is a personal plan, not a ticket reservation.','',...sortedSaved(saved).map(({film,show})=>`${show.dateLabel} 2026 at ${show.time}\n${film.title} — ${film.minutes} min — ${film.format}\n${film.subtitles}\n`),'All films, filmmakers and screenings are invented for this design demonstration.'].join('\n');
  const objectURL = URL.createObjectURL(new Blob([text],{type:'text/plain;charset=utf-8'}));
  const link = document.createElement('a');
  link.href = objectURL; link.download = 'side-a-my-shortlist.txt'; link.click();
  setTimeout(()=>URL.revokeObjectURL(objectURL),1000);
});
for (const dialog of [filmDialog, shortlistDialog]) {
  dialog.addEventListener('close', () => document.body.classList.remove('dialog-open'));
  dialog.addEventListener('keydown', event => {
    if (event.key !== 'Tab') return;
    const controls = [...dialog.querySelectorAll('button:not([disabled]), a[href], select:not([disabled]), [tabindex="0"]')]
      .filter(element => element.getClientRects().length && !element.closest('[hidden]'));
    const first = controls[0];
    const last = controls.at(-1);
    if (!first) return;
    if (document.activeElement === dialog || (event.shiftKey && document.activeElement === first) || (!event.shiftKey && document.activeElement === last)) {
      event.preventDefault();
      (event.shiftKey ? last : first).focus();
    }
  });
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
  });
}
window.addEventListener('storage', event => {
  if (event.key !== key && event.key !== null) return;
  try { saved = normaliseSaved(JSON.parse(event.newValue || '[]')); }
  catch { saved = []; }
  clearedList = null;
  updateSavedState();
  if (shortlistDialog.open) { renderShortlist(); $('#shortlist-title').focus(); }
  else announce('Your shortlist updates from another tab.');
});
$('#programme').setAttribute('tabindex', '-1');
renderProgramme();
updateSavedState();
storageMessage();
