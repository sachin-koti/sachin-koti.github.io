document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('checkbox');
    const currentTheme = localStorage.getItem('theme');

    // Apply saved theme on initial load
    if (currentTheme) {
        document.body.classList.add(currentTheme);
        if (currentTheme === 'dark-mode') {
            themeToggle.checked = true;
        }
    }

    themeToggle.addEventListener('change', function() {
        if (this.checked) {
            document.body.classList.remove('light-mode'); // Ensure light-mode is removed if it exists
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
            document.body.classList.add('light-mode'); // Add light-mode class for clarity, though default styles apply
            localStorage.setItem('theme', 'light-mode');
        }
    });
});
