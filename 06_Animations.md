# PHASE 7 — ANIMATIONS

Animations in this portfolio are used extensively to create a dynamic, highly polished feel. The project intentionally avoids static layouts in favor of continuous micro-interactions and scroll reveals.

## 1. Libraries Used
- **AOS (Animate On Scroll):** Powers the majority of the scroll-based reveal animations.
- **Framer Motion:** Used specifically for the complex timeline/sequence animations in the `Preloader`.
- **Vanilla CSS:** Used for infinite loops (like pulsing), hover states, and complex custom keyframes (like the bouncing ID badge).

## 2. Scroll Animations (AOS)
Almost every section heading, paragraph, and card uses AOS.
- **Fade Up (`data-aos="fade-up"`):** The most common animation. Used on section headers, project cards, and buttons.
- **Fade Left (`data-aos="fade-left"`):** Used on the About section text to slide it in from the right.
- **Zoom In (`data-aos="zoom-in"`):** Used on the tech stack icons and the video play button.
- **Configuration:** AOS is initialized in `Hero.jsx` with a global duration of `1000ms`, an easing of `ease-out`, and `once: true` (so animations don't replay awkwardly if you scroll up).
- **Staggering:** Heavily relies on `data-aos-delay` (e.g., `100`, `200`, `300`) to create cascading "waterfall" reveals of lists and cards.

## 3. The `Preloader` (Framer Motion)
- **Water Fill Effect:** The logo text starts empty (opacity low). Framer Motion changes `clipPath: 'inset(100% 0 0 0)'` to `0%` over `1.6s` with `easeInOut` easing, making it look like the text is filling up with color from bottom to top.
- **Shutter Wipe:** The entire red background slides up off the screen (`y: "-100%"`) over `1.2s` using a custom cubic-bezier ease `[0.76, 0, 0.24, 1]`.

## 4. Custom Keyframes (Vanilla CSS)
- **`dropBounce`:** Defined in `index.css`. The About section ID Badge drops down `-300px`, overshoots the target, and bounces exactly 3 times before resting.
  - Duration: `1.2s`
  - Easing: `cubic-bezier(0.28, 0.84, 0.42, 1)`
- **`float`:** Defined in `index.css` via `@theme`. An infinite `6s ease-in-out` animation moving elements up and down by `20px`.
- **`animate-pulse`:** Standard Tailwind pulse animation applied to background SVG stars in the About section.
- **`animate-bounce`:** Standard Tailwind bounce applied to the scroll indicator chevron in the Hero.

## 5. Hover & Micro-interactions
- **Buttons:** Scale up `hover:scale-105`, transition colors, and add intense box shadows (`shadow-[0_0_20px_rgba(...)]`).
- **Cards:** Glassmorphic cards use `group-hover:bg-[#111111]/80` to slightly adjust the background blur tint on hover.
- **Social Icons:** `hover:scale-125` combined with `hover:text-[#ff2a2a]` or `hover:text-white`.
- **ID Badge:** Uses `transform -rotate-3 hover:rotate-0 transition-transform duration-500` to straighten out when hovered.

## 6. Video "Animation"
- While not a CSS animation, the Hero section uses an infinitely looping MP4 video as the background, which creates the core kinetic energy for the top of the page.
