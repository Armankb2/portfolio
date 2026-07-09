# PHASE 10 — RESPONSIVENESS

The portfolio is fully responsive, leveraging **Tailwind CSS's mobile-first breakpoint system**.

## Mobile Layout (Default)
By default, all Tailwind classes without prefixes (like `md:` or `lg:`) target mobile screens (iPhone, Android).
- **Hero:** Text is centered or left-aligned with smaller font sizes (`text-3xl`). Social icons are tucked into the content rather than floating on the left.
- **About:** The ID Badge stacks *above* the text descriptions (`flex-col`).
- **Cards (Projects, Services):** Render in a single column layout (`flex-col` or grid with 1 column).
- **Navigation:** The standard Navbar collapses into a hamburger menu (if implemented), or scales down its link sizes.
- **Padding:** Uses tighter horizontal padding (`px-6`) to maximize screen real estate.

## Tablet Layout (`md:` breakpoint >= 768px)
- **Hero:** Font sizes scale up (`text-5xl`). Buttons get larger padding.
- **About:** Shifts to a row-based layout (`md:flex-row`). The ID Badge moves to the left side, and the bio text takes up the remaining space on the right.
- **Grids:** Most lists (Services, Projects) shift to a 2-column grid layout to utilize the extra width.
- **Padding:** Expands to `md:px-12`.

## Desktop & Ultrawide Layout (`lg:` breakpoint >= 1024px)
- **Hero:** The floating social bar becomes visible (`hidden lg:flex fixed left-6`).
- **Containers:** Content never stretches to infinity. It is constrained by `max-w-6xl` or `max-w-7xl` combined with `mx-auto` (margin auto). On ultra-wide monitors (like 49" ultrawides), the content will stay perfectly centered in a readable column rather than stretching across the entire monitor.

## Responsive Utilities Used
- **Flexbox & Grid:** Extensive use of `flex-col md:flex-row` and `grid-cols-1 md:grid-cols-2`.
- **Typography:** `text-sm md:text-base` and `text-4xl md:text-5xl lg:text-6xl`.
- **Hiding Elements:** Using `hidden md:block` (like the bouncing scroll indicator in the Hero, which is hidden on mobile to save vertical space).
