# Alerts & Notifications Specification

Used for system feedback, such as "Saved successfully" or "Error processing payment".

## 1. Toast Notifications (Temporary)
*   **Position:** Top Right or Bottom Center.
*   **Background:** `#1E1E1E` (Card color) to blend with the dark theme.
*   **Border Left:** Thick accent border (`4px`) corresponding to the status.
    *   Success: `#10B981` (Green)
    *   Error: `#EF4444` (Red)
    *   Warning: `#F59E0B` (Amber)
    *   Info: `#3B82F6` (Blue)
*   **Shadow:** Prominent shadow to ensure visibility over any content.

## 2. In-Page Banners (Persistent)
Used for critical system-wide announcements (e.g., "System maintenance tomorrow").
*   **Background:** Full width. Faint wash of the status color (e.g., `rgba(245, 158, 11, 0.1)` for warning).
*   **Text Color:** The matching solid status color (e.g., `#F59E0B`).
*   **Icon:** Left-aligned relevant icon.
