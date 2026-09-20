# Accessibility (a11y) & Focus States

Ensuring the Nexora platform is usable by everyone, including those navigating via keyboard or screen readers.

## 1. Keyboard Navigation (Focus Rings)
*   **Rule:** Every interactive element (Buttons, Links, Inputs) MUST have a clearly visible focus state when tabbed into via keyboard.
*   **Style:** 
    *   Instead of the default browser blue ring, use the brand color.
    *   `outline: 2px solid #D4AF37; outline-offset: 2px;`
*   **Mouse Interaction:** Focus rings should generally be hidden when clicking with a mouse (using `:focus-visible` in CSS).

## 2. Contrast Ratios
*   The dark theme must pass WCAG AA standards (minimum contrast ratio of 4.5:1 for normal text).
*   *Warning:* Our Secondary Gray (`#A1A1AA`) on the Dark Surface (`#121212`) has a contrast ratio of ~6.1:1, which safely passes. Do not use darker grays for text.

## 3. Screen Readers (ARIA)
*   Ensure all icon-only buttons (like the Kebab menu or Sidebar toggle) have `aria-label` attributes describing their function (e.g., `aria-label="Open settings menu"`).
