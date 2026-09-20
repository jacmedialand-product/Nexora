# Modals & Dialogs Specification

Modals are used for critical actions that require the user's focus, such as confirming a deletion or entering quick data.

## 1. Backdrop overlay
*   **Background:** Black with heavy opacity (`rgba(0, 0, 0, 0.7)`).
*   **Backdrop Filter:** Subtle blur (`backdrop-blur-sm`).

## 2. Modal Container
*   **Background:** Deep Dark Grey (`#1E1E1E`).
*   **Border:** Very subtle top highlight (`border-top: 2px solid #D4AF37`) to give it a premium feel.
*   **Border Radius:** Large (`16px`).
*   **Shadow:** Heavy drop shadow (`0 25px 50px -12px rgba(0, 0, 0, 0.75)`).
*   **Close Icon:** Positioned top right, color `#A1A1AA` (Text Secondary), hovers to White (`#FFFFFF`).

## 3. Modal Actions
*   Usually contains a standard **Secondary Button** (Cancel) and a **Primary Button** (Confirm/Submit) aligned to the right bottom of the modal.
