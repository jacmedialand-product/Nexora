# Nexora Design System (UI/UX)

This directory serves as the **Single Source of Truth** for the visual identity and user experience across both the **Next.js Web Portal** and the **Flutter Mobile App**.

## Structure

*   `/theme`: Contains `design_tokens.json` which explicitly defines our core colors, typography, and spacing. Both web (Tailwind) and mobile (Flutter Theme) should map to these exact hex codes and values.
*   `/components`: Documentation and specifications for shared UI elements (e.g., Nav Bars, Loading States, Buttons, Cards).
*   `/assets`: Common visual assets (e.g., logos, background gradients, default avatars) to be shared across platforms.

## Core Aesthetic (Derived from reference UI)

*   **Premium & Modern:** The design utilizes a stark dark mode (`#000000` to `#121212`) contrasted with rich Gold accents (`#D4AF37`).
*   **Typography:** A high-contrast pairing of a sophisticated Serif font (like 'Playfair Display') for major headings, alongside a clean, readable Sans-serif (like 'Inter' or 'Roboto') for body text and data tables.
*   **Glassmorphism:** Subtle use of semi-transparent surfaces with background blur for floating elements like notifications or modal backdrops.
*   **Depth & Shadow:** Instead of harsh borders, surfaces are separated by depth (lighter grays) and subtle golden glow effects for active states.
