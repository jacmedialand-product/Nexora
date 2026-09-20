# Steppers & Wizards Specification

Used for multi-step workflows like "Student Admissions" or "New Employee Onboarding".

## 1. Horizontal Stepper
*   **Step Indicator (Circle):**
    *   Completed: Background Primary Gold (`#D4AF37`), Text/Checkmark Black (`#000000`).
    *   Current (Active): Background `#1E1E1E`, Border `2px solid #D4AF37`, Text `#D4AF37`.
    *   Upcoming (Inactive): Background `#121212`, Border `2px solid #333333`, Text `#666666`.
*   **Connecting Lines:**
    *   Completed path: Solid Gold (`#D4AF37`).
    *   Upcoming path: Solid Dark Gray (`#333333`).
*   **Step Label:** Placed below the circle. Active/Completed is White (`#FFFFFF`), Inactive is Gray (`#666666`).

## 2. Vertical Stepper (Mobile)
*   Follows the same color logic but arranged in a vertical column, which is better for narrow screens.
