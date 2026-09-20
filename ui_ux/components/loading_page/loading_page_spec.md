# Loading Page Specification

## Concept
The loading state should reflect the premium nature of the Nexora platform. Instead of standard generic spinners, we should use a branded loading experience.

## Splash Screen (Initial App Load)
*   **Background:** Deep gradient starting from `#000000` to very dark charcoal.
*   **Central Element:** The primary Nexora logo (expected at `c:\Nexora\ui_ux\assets\nexora_logo.jpg`), featuring the 3D Gold 'NK' monogram and the "NEXORA" wordmark.
*   **Animation:** 
    *   A subtle, slow scale-up (breathing effect) of the entire logo assembly.
    *   A glowing golden sweep/sheen effect that passes across the 'NK' monogram.
*   **Text (Tagline):** The tagline "BUILDING A BRIGHTER TOMORROW" (along with the gold decorative lines and central star) fading in smoothly below the main wordmark.

## In-App Loading States (Skeletons & Spinners)
*   **Data Grids/Dashboards:** Use Skeleton loaders instead of spinners whenever possible to reduce perceived wait time.
    *   Skeleton Background: `#1E1E1E` (Card background).
    *   Skeleton Highlight (Shimmer): `#2A2A2A` moving left to right.
*   **Small Actions (Buttons):** For button loading states (e.g., submitting a form), use a simple circular spinner inside the button.
    *   Spinner Color: If the button is Gold, the spinner should be Black. If the button is Dark, the spinner should be Gold (`#D4AF37`).
