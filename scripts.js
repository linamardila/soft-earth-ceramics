/**
 * Soft Earth Ceramics - Interactive Scripts
 *
 * This file contains JavaScript functionality for the website,
 * including the FAQ accordion toggle feature.
 */

// Wait for the DOM to be fully loaded before running scripts
document.addEventListener('DOMContentLoaded', function() {

  // Initialize FAQ accordion functionality
  initFaqAccordion();

  // Apply stored theme preference (if any) before initializing UI
  applyStoredTheme();

  // Initialize theme toggle button (dark mode)
  initThemeToggle();

});

/**
 * FAQ Accordion
 *
 * Makes FAQ items interactive - clicking a question toggles
 * the visibility of its answer.
 */
function initFaqAccordion() {
  // Get all FAQ item elements
  const faqItems = document.querySelectorAll('.faq-item');

  // If no FAQ items found, exit early
  if (faqItems.length === 0) {
    return;
  }

  // Add click event listener to each FAQ item
  faqItems.forEach(function(item) {
    // Get the question button within this item
    const question = item.querySelector('.faq-question');

    // Add click handler to the question
    question.addEventListener('click', function() {
      // Check if this item is currently open
      const isOpen = item.classList.contains('is-open');

      // Close all other FAQ items first (optional: for single-open behavior)
      // Comment out the next 3 lines if you want multiple FAQs open at once
      faqItems.forEach(function(otherItem) {
        otherItem.classList.remove('is-open');
      });

      // Toggle the clicked item
      if (!isOpen) {
        item.classList.add('is-open');
      }
      // If it was already open, it's now closed (from the loop above)
    });
  });

  // Open the first FAQ item by default (optional)
  // Uncomment the next line to have the first item open on page load
  // faqItems[0].classList.add('is-open');
}

/* ---------- Theme persistence helpers ---------- */
function getStoredTheme() {
  try {
    return localStorage.getItem('theme');
  } catch (e) {
    return null;
  }
}

function setStoredTheme(theme) {
  try {
    localStorage.setItem('theme', theme);
  } catch (e) {
    // Ignore write errors (e.g., storage disabled)
  }
}

function applyStoredTheme() {
  const stored = getStoredTheme();
  if (stored === 'dark') {
    document.documentElement.classList.add('dark-theme');
  } else if (stored === 'light') {
    document.documentElement.classList.remove('dark-theme');
  }
}

/**
 * Theme Toggle
 *
 * Toggles the `dark-theme` class on the document root (`html`) when
 * the `#theme-toggle` button is clicked. Updates `aria-pressed`, the
 * visible icon, and the button title for accessibility.
 */
function initThemeToggle() {
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;

  const icon = btn.querySelector('.toggle-icon');
  const sr = btn.querySelector('.sr-only');

  // Set initial state based on whether `html` has the class
  const initialDark = document.documentElement.classList.contains('dark-theme');
  btn.setAttribute('aria-pressed', initialDark ? 'true' : 'false');
  btn.title = initialDark ? 'Switch to light mode' : 'Switch to dark mode';
  if (icon) icon.textContent = initialDark ? '☀️' : '🌙';
  if (sr) sr.textContent = initialDark ? 'Switch to light mode' : 'Switch to dark mode';

  btn.addEventListener('click', function() {
    const isDark = document.documentElement.classList.toggle('dark-theme');
    // Persist the user's preference
    setStoredTheme(isDark ? 'dark' : 'light');
    btn.setAttribute('aria-pressed', isDark ? 'true' : 'false');
    btn.title = isDark ? 'Switch to light mode' : 'Switch to dark mode';
    if (icon) icon.textContent = isDark ? '☀️' : '🌙';
    if (sr) sr.textContent = isDark ? 'Switch to light mode' : 'Switch to dark mode';
  });
}
