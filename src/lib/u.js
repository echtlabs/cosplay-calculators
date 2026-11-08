export const $ = (s, r = document) => r.querySelector(s);
export const num = (v) => { const n = parseFloat(String(v).trim().replace(',', '.')); return isFinite(n) ? n : NaN; };
export const f = (n, d = 1) => isFinite(n) ? n.toLocaleString('de-DE', { maximumFractionDigits: d }) : '–';
export const eur = (n) => isFinite(n) ? n.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' }) : '–';
export const esc = (s) => String(s).replace(/[&<>"']/g, (c) => '&#' + c.charCodeAt(0) + ';');
export const save = (o) => history.replaceState(null, '', '#' + encodeURIComponent(JSON.stringify(o)));
export const load = () => { try { return JSON.parse(decodeURIComponent(location.hash.slice(1))); } catch { return null; } };
export const copyLink = (b) => navigator.clipboard?.writeText(location.href).then(() => { b.textContent = 'Link kopiert'; });
export const bind = (form, fn) => { form.addEventListener('submit', (e) => e.preventDefault()); form.addEventListener('input', fn); fn(); };
