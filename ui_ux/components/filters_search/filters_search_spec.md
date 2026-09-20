# Filters & Search Bars Specification

Crucial for quickly locating students, staff, or specific records in large datasets.

## 1. Global Search Bar (Top Nav)
*   **Background:** Highly transparent white (`rgba(255,255,255,0.05)`) or `#1E1E1E`.
*   **Border:** None or very subtle `#333333`.
*   **Icon:** Search magnifying glass on the left (`#A1A1AA`).
*   **Text & Placeholder:** Text `#FFFFFF`, Placeholder `#A1A1AA`.
*   **Focus State:** Expands slightly in width, border becomes Gold (`1px solid #D4AF37`).

## 2. Data Table Filters (Inline)
*   Placed directly above data tables.
*   **Filter Button:** Usually a Secondary/Outline button with a filter icon.
*   **Filter Dropdown/Popover:** Contains multiple Select inputs (e.g., "Class", "Section", "Status") following the Forms Specification.
*   **Active Filter Chips:** When a filter is applied, a dismissable Badge (see Badges Spec) appears next to the search bar.
