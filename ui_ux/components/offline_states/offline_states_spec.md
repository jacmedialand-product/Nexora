# Offline & Sync States Specification

Crucial for the Flutter Mobile App (especially Transport and Hostel modules) where network connectivity may drop.

## 1. "No Internet" Indicators
*   **Persistent Banner:** A small banner directly below the Top Nav.
    *   Background: Dark Red (`#7F1D1D`).
    *   Text: White (`#FFFFFF`), "You are currently offline. Viewing cached data."
*   **Disabled Actions:** Any button that strictly requires network access (e.g., "Submit Payment") must enter the disabled state (Background `#333333`, Text `#666666`).

## 2. Data Syncing (Optimistic UI)
*   If a driver completes a trip while offline, show a **Sync Pending** icon next to the record.
    *   Icon: A small cloud with an upward arrow or a dashed circle. Color: Secondary Gray (`#A1A1AA`).
*   Once reconnected, the icon should spin briefly and turn into a solid green checkmark (`#10B981`) before disappearing.
