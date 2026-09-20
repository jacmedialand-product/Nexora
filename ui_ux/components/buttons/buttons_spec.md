# Button Specification

Buttons are the primary interactive elements. They must be distinct and follow the premium dark/gold aesthetic.

## 1. Primary Button
Used for the main action on a screen (e.g., "Login", "Save", "Submit").
*   **Background:** Gold Gradient (`linear-gradient(135deg, #D4AF37 0%, #F9DF9F 50%, #A67C00 100%)`) or Solid Primary Gold (`#D4AF37`).
*   **Text Color:** Deep Black (`#000000`) for maximum contrast.
*   **Font Weight:** Semi-bold (`600`).
*   **Border Radius:** Medium (`8px`) or Pill (`9999px`) depending on context.
*   **Hover State:** Slight scale up (1.02x) and an increased gold glow (`box-shadow: 0 0 15px rgba(212, 175, 55, 0.4)`).
*   **Disabled State:** Background `#333333`, Text `#666666`, cursor `not-allowed`.

## 2. Secondary Button / Outline
Used for alternative actions (e.g., "Cancel", "View All").
*   **Background:** Transparent.
*   **Border:** `1px solid #D4AF37`.
*   **Text Color:** Primary Gold (`#D4AF37`).
*   **Hover State:** Background becomes a faint gold wash (e.g., `rgba(212, 175, 55, 0.1)`).

## 3. Text / Ghost Button
Used for low-priority actions.
*   **Background:** Transparent.
*   **Border:** None.
*   **Text Color:** Text Secondary (`#A1A1AA`).
*   **Hover State:** Text Color becomes White (`#FFFFFF`).
