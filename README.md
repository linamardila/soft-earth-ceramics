# Soft Earth Ceramics — Dark Mode Feature

This project includes a lightweight dark mode toggle for the site.

- Files changed/added:
  - `styles.css` — added semantic color tokens and a dark-token set (`html.dark-theme`), plus `prefers-color-scheme` fallback.
  - `index.html`, `about.html`, `services.html`, `contact.html` — added an accessible toggle button in the header and a small inline script to apply stored/system theme before CSS loads.
  - `scripts.js` — added initialization and toggle logic, and `localStorage` persistence.

- How it works:
  - The toggle button (`#theme-toggle`) toggles the `dark-theme` class on the `html` element.
  - Colors throughout the site use semantic variables (e.g. `--color-bg`, `--color-text`) so switching themes updates the UI.
  - The user's choice is saved to `localStorage` and reapplied on load. If no preference is saved, the site respects the OS `prefers-color-scheme` setting.

- Notes for developers:
  - To change the dark palette, edit the `html.dark-theme` block in `styles.css` and the `@media (prefers-color-scheme: dark)` fallback.
  - If you add another toggle on a page, use `querySelectorAll` in `scripts.js` and avoid duplicate `id` values.
