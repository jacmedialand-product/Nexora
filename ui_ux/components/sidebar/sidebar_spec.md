# Sidebar / Drawer Specification

The Sidebar is the primary navigation method for the Admin and Staff web dashboards.

## 1. Layout & Container
*   **Position:** Fixed on the left side of the screen (Web) or as a slide-out drawer (Mobile).
*   **Background:** Pure Black (`#000000`) or very dark gray to separate it from the main dashboard content area (which might be `#050505`).
*   **Border:** Right border `1px solid #1E1E1E` to define the edge.
*   **Width:** typically `260px` expanded, `80px` collapsed.

## 2. Branding Area (Top)
*   Contains the Gold 'NK' logo and "NEXORA" wordmark.

## 3. Menu Items
*   **Icon + Label Layout:** Left-aligned icon, followed by text.
*   **Resting State:**
    *   Text Color: Secondary Gray (`#A1A1AA`).
    *   Icon Color: Secondary Gray (`#A1A1AA`).
    *   Background: Transparent.
*   **Hover State:**
    *   Text & Icon: White (`#FFFFFF`).
    *   Background: Very dark gray (`#1E1E1E`), rounded corners (`8px`).
*   **Active / Selected State:**
    *   Text & Icon: Primary Gold (`#D4AF37`).
    *   Background: Faint gold wash (`rgba(212, 175, 55, 0.1)`), rounded corners (`8px`).
    *   *Optional:* A solid gold vertical indicator line (width: `4px`) on the far left edge of the active item.
