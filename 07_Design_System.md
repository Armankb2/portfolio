# PHASE 6 — DESIGN SYSTEM

This portfolio leverages a "Modern Dark Theme" design system, heavily utilizing Tailwind CSS utility classes to achieve a premium look.

## Colors
- **Backgrounds:**
  - True Black (`#000000`, `bg-black`): Used for the Hero and base canvas.
  - Very Dark Gray (`#0a0a0a` to `#111111`): Used for section backgrounds to create slight contrast against true black.
  - Brand Red (`#ff2a2a`): Used as the primary accent color (About section background, buttons, hover glows).
- **Text:**
  - Primary: Pure White (`#ffffff`, `text-white`).
  - Secondary/Muted: White with opacity (`text-white/60`, `text-white/50`, `text-white/70`).
- **Gradients:**
  - Flagship projects use a gradient: `bg-gradient-to-br from-red-500/50 via-white/10 to-red-500/30`.

## Typography
- **Font Family:** `Inter`, fallback to system UI sans-serif.
- **Headings:** Heavy font weights (`font-black`, `font-bold`), often with tight tracking (`tracking-tight`). Sizes range up to `text-6xl` or `text-7xl` for massive impact.
- **Body:** Typically `text-base` or `text-lg` with `font-medium` or `font-semibold` to remain legible against the dark background.
- **Micro-copy:** `text-xs font-bold tracking-widest uppercase` (used for tags, badges, and button labels).

## UI Elements & Components

### Buttons
- **Primary:** `bg-white text-black font-semibold rounded-full`.
- **Secondary (Glass):** `bg-black/40 border border-white text-white backdrop-blur-md rounded-full`.
- **Accent:** `bg-[#ff2a2a] text-white hover:bg-red-600 rounded-full`.
- **Hover Effects:** Almost all buttons use `transition-all duration-300 transform hover:scale-105` and custom box-shadow glows.

### Cards & Glassmorphism
- The project relies extensively on glassmorphism to create depth.
- **Base Class:** `bg-white/10 backdrop-blur-md rounded-2xl`.
- **Hover:** Darkens slightly (`bg-[#111]/90`) and scales or shifts borders.
- **Borders:** Thin, translucent borders (`border border-white/20` or `border border-white/10`) define the edges of the glass panels.

### Visual Textures
- **Grid Background:** Used in the Projects section.
  ```css
  bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]
  ```

## Spacing & Layout
- **Containers:** Content is constrained horizontally using `max-w-6xl mx-auto` or `max-w-7xl mx-auto`.
- **Padding:** Vertical padding is generous (`pt-24 pb-32`) to give sections breathing room. Horizontal padding is standard `px-6 md:px-12`.
- **Border Radius:** Very rounded (`rounded-2xl`, `rounded-full`). Sharp corners are almost never used.
