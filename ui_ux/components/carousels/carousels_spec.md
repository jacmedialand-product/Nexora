# Carousels & Image Sliders Specification

Used on the public Website/CMS module or for the school gallery.

## 1. Main Display Area
*   **Aspect Ratio:** Standardized (e.g., `16:9` or `4:3`) with `object-fit: cover` to prevent image stretching.
*   **Border Radius:** Rounded corners (`16px`).
*   **Overlay:** A subtle bottom gradient (Black to transparent) so white text can be placed on top of images securely.

## 2. Controls
*   **Arrows:** Left/Right circular buttons floating over the image. Background `rgba(0,0,0,0.5)`, Icon `#FFFFFF`. Hover brightens background.
*   **Pagination Dots (Indicators):** Placed at the bottom center.
    *   Active Dot: Primary Gold (`#D4AF37`), slightly wider (pill shape).
    *   Inactive Dot: Dark Gray (`rgba(255,255,255,0.3)`), circle shape.
