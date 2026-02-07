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
