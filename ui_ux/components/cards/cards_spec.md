# Cards & Surfaces Specification

Cards are used to group related information, such as dashboard widgets or student profiles.

## 1. Standard Dashboard Card
Used for standard data display (e.g., "Attendance Stats", "Fee Collection").
*   **Background:** Deep Dark Grey (`#1E1E1E` or `Surface` color).
*   **Border:** Subtle lighter gray border (`1px solid #2A2A2A`).
*   **Border Radius:** Large (`16px`).
*   **Padding:** Generous (`24px` internal padding).
*   **Shadow:** Deep, soft shadow (`0 10px 25px rgba(0,0,0,0.5)`) to elevate it above the absolute black background.

## 2. Highlight/Active Card
Used for a selected item or a premium feature banner.
*   **Background:** Very faint gold gradient or dark grey with a gold border.
*   **Border:** `1px solid #D4AF37`.
*   **Shadow:** Subtle gold glow (`0 4px 15px rgba(212, 175, 55, 0.15)`).

## 3. Glassmorphism Card (Overlays/Modals)
Used when a card floats over a complex background (like an image).
*   **Background:** Semi-transparent white/gray (`rgba(30, 30, 30, 0.6)`).
*   **Backdrop Filter:** Blur (`backdrop-blur-md` or `12px`).
*   **Border:** Thin semi-transparent border (`1px solid rgba(255, 255, 255, 0.1)`).
