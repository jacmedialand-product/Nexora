# Print & Export Layouts Specification

Unlike the web UI which uses a dark theme, printed documents must be optimized for standard A4 paper, primarily in black and white or minimal color to save ink.

## 1. General Print Theme (The "Light" Exception)
*   **Background:** Pure White (`#FFFFFF`).
*   **Text:** Pure Black (`#000000`).
*   **Borders/Tables:** Light Gray (`#E5E7EB`).
*   **Accents:** Primary Gold (`#D4AF37`) can be used sparingly for logos or headers, but ensure it prints well in grayscale.

## 2. Document Types
*   **Fee Receipts:** Must include School Logo (top left), Receipt Number/Date (top right), Student Details, Itemized breakdown, Total, and Authorized Signatory box (bottom right).
*   **Marksheets / Report Cards:** High-density data tables. Avoid background colors in table headers; use thick bottom borders instead.
*   **ID Cards (CR80 format):** Include a designated photo bounding box (`3:4` aspect ratio), barcode/QR code at the bottom, and emergency contact info on the back.

## 3. Watermarks
*   Confidential documents (like transfer certificates) should include a faint diagonal watermark of the school logo (Opacity `10%`).
