# Data Tables Specification

As an ERP, data tables are heavily used for student lists, attendance records, and fee ledgers.

## 1. Table Container
*   Tables should typically be placed inside a **Standard Dashboard Card** (Background `#1E1E1E`, Border Radius `16px`).

## 2. Table Headers (th)
*   **Background:** Slightly darker than the card, or transparent with a bottom border.
*   **Text Color:** Secondary Gray (`#A1A1AA`) to establish visual hierarchy.
*   **Font Weight:** Semi-bold (`600`).
*   **Text Transform:** Optional uppercase with wide letter-spacing (`0.05em`) for a clean look.
*   **Border Bottom:** `1px solid #333333`.

## 3. Table Rows (td)
*   **Background:** Transparent (takes the card's `#1E1E1E` background).
*   **Text Color:** White (`#FFFFFF`).
*   **Hover State:** Entire row background shifts slightly lighter (`#2A2A2A`) to indicate interactivity.
*   **Border Bottom:** Subtle divider between rows (`1px solid #2A2A2A`).

## 4. Status Badges (Pills)
Used inside tables for statuses like "Paid", "Absent", "Active".
*   **Success (Paid/Present):** Background `rgba(16, 185, 129, 0.1)`, Text `#10B981`.
*   **Warning (Pending/Late):** Background `rgba(245, 158, 11, 0.1)`, Text `#F59E0B`.
*   **Error (Overdue/Absent):** Background `rgba(239, 68, 68, 0.1)`, Text `#EF4444`.
