# File Upload & Attachment Specification

Used for submitting assignments, uploading medical certificates, and ID proofs.

## 1. Drag-and-Drop Zone
*   **Background:** Very dark gray (`#121212`) or transparent with dashed border.
*   **Border:** `2px dashed #333333`.
*   **Hover/Drag State:** Border becomes solid Primary Gold (`2px solid #D4AF37`), background gets a faint gold wash (`rgba(212, 175, 55, 0.05)`).
*   **Icon:** Large cloud-upload or document icon (`#A1A1AA`).

## 2. Attached File Item
*   **Container:** Small rounded rectangle (`border-radius: 8px`), background `#1E1E1E`, border `1px solid #333333`.
*   **Icon:** File type icon (PDF, Image, Word).
*   **Text:** File name (truncated if long), file size (`0.75rem`, `#A1A1AA`).
*   **Action:** Trash/Remove icon on the far right (`#EF4444` on hover).
