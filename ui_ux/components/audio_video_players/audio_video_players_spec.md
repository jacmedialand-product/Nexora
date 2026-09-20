# Audio & Video Players Specification

Used for e-learning materials, recorded lectures, or school event videos.

## 1. Video Container
*   **Aspect Ratio:** `16:9`.
*   **Background:** Pure Black (`#000000`).
*   **Border Radius:** `8px` or `16px`.

## 2. Custom Controls (Overlays)
*   To maintain the premium brand, default browser controls should be hidden and replaced with custom Nexora controls.
*   **Play/Pause Icon:** Large, centered. Background `rgba(0,0,0,0.6)`, Icon White (`#FFFFFF`).
*   **Progress Bar (Scrubber):** 
    *   Track: `#333333`.
    *   Buffered: `#666666`.
    *   Played: Primary Gold (`#D4AF37`).
    *   Thumb: White circle that appears on hover.
*   **Bottom Control Bar:** Gradient overlay (`rgba(0,0,0,0.8)` to transparent) at the bottom to ensure the white icons (volume, fullscreen) are always visible regardless of video content.
