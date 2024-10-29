const toggleButton = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme') || 'light';

// Apply the saved theme on initial load
document.documentElement.setAttribute('data-theme', currentTheme);
updateToggleButton(currentTheme);

toggleButton.addEventListener('click', () => {
    const theme = document.documentElement.getAttribute('data-theme');
    const newTheme = theme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateToggleButton(newTheme);
});

function updateToggleButton(theme) {
    toggleButton.textContent = theme === 'light' ? '🌙' : '☀️';
}