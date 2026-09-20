# Timelines & Activity Feeds Specification

Crucial for displaying audit logs, student disciplinary history, or admission progression.

## 1. Timeline Track
*   **Vertical Line:** A solid line (`2px solid #333333`) running down the left side.

## 2. Timeline Nodes (Events)
*   **Node Marker:** A small circle sitting on the vertical line.
    *   Completed/Positive Event: Filled with Green (`#10B981`).
    *   Current/Action Required: Filled with Gold (`#D4AF37`).
    *   Past/Standard Event: Filled with Dark Gray (`#333333`).
*   **Content Area:** Placed to the right of the node.
    *   **Timestamp:** Small, `#A1A1AA`.
    *   **Event Title:** White (`#FFFFFF`), semi-bold.
    *   **Description:** `#A1A1AA`, regular weight.
