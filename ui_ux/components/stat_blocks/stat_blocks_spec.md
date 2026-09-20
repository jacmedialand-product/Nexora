# Stat Blocks & Key-Value Pairs Specification

Used on dashboard widgets (e.g., "Total Revenue: $50,000").

## 1. Large Stat Block (Summary Card)
*   **Layout:** Vertical stacking.
*   **Label (Key):** Top, small text (`0.875rem`), Secondary Gray (`#A1A1AA`), uppercase optional.
*   **Value:** Bottom, very large text (e.g., `2rem`), White (`#FFFFFF`) or Primary Gold (`#D4AF37`).
*   **Trend/Delta:** Small badge next to the value (e.g., `+5%`). Green (`#10B981`) for positive, Red (`#EF4444`) for negative.

## 2. Inline Key-Value Pair (Details page)
*   Used in a student's profile (e.g., "Blood Group: O+").
*   **Layout:** Horizontal flexbox.
*   **Key:** Left aligned, Secondary Gray (`#A1A1AA`), width fixed or `flex-1`.
*   **Value:** Right aligned, White (`#FFFFFF`), heavier font weight.
