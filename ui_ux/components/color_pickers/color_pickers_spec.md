# Color Pickers Specification

Used when configuring event tags, calendar categories, or school houses.

## 1. Predefined Color Swatches
*   Instead of a full RGB picker, provide a curated grid of 8-12 colors that look good in a dark theme (muted pastels or rich jewel tones).
*   **Swatch Shape:** Circle (`24x24px`).
*   **Selected State:** A thick white ring around the selected color (`border: 2px solid #000; outline: 2px solid #FFF`).

## 2. Custom Hex Input
*   Follows the standard Text Input spec.
*   Includes a tiny color preview square inside the input field on the left.
