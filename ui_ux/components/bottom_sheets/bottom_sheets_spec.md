# Bottom Sheets Specification

Primarily for the Flutter Mobile App. Replaces traditional modals on smaller screens for better reachability.

## 1. Container
*   **Position:** Anchored to the bottom of the screen, sliding up.
*   **Background:** `#1E1E1E` (Surface color).
*   **Border Radius:** Top-left and Top-right rounded (`24px`).
*   **Drag Handle:** A small horizontal pill at the top center (`width 40px`, `height 4px`, color `#333333`) to indicate it can be swiped down.

## 2. Backdrop
*   Black with `50%` opacity (`rgba(0,0,0,0.5)`). Tapping the backdrop dismisses the sheet.
