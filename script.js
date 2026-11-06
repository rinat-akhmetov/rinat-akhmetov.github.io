const toggle = document.getElementById('theme-toggle');
let theme = 'light';

try {
  if (localStorage.getItem('theme') === 'dark') theme = 'dark';
} catch (_) {
  // The theme still works for this visit when storage is unavailable.
}

function applyTheme() {
  document.documentElement.setAttribute('data-theme', theme);
  const next = theme === 'light' ? 'dark' : 'light';
  toggle.setAttribute('aria-label', `Switch to ${next} theme`);
  toggle.querySelector('span').textContent = theme === 'light' ? '☾' : '☀';
}

applyTheme();
toggle.addEventListener('click', () => {
  theme = theme === 'light' ? 'dark' : 'light';
  applyTheme();
  try { localStorage.setItem('theme', theme); } catch (_) { /* Storage is optional. */ }
});
