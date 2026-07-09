# PHASE 4 — PAGE BREAKDOWN

Since this project is a Single Page Application (SPA) without React Router, there is technically only **one page**. However, this page is composed of distinct, full-width sections that function as virtual pages accessed via scroll or navbar anchor links.

## The Single Page (`App.jsx`)

### Purpose
To act as a continuous, scrolling digital resume that tells a story—starting from a high-impact introduction (Hero) down to actionable contact information, keeping the user engaged without page reloads.

### Layout
The layout is a vertical stack of components. The order of execution/rendering is strictly linear:
1. `Preloader` (Displays briefly on load)
2. `Navbar` (Sticky at the top)
3. `Hero`
4. `About`
5. `TechnicalSkills`
6. `Services`
7. `Projects`
8. `ContentCreator` (Optional niche section)
9. `Internships`
10. `Leadership`
11. `Certificates`
12. `SoftSkills`
13. `Contact`
14. `Footer`

### Components Used
All components from `src/components/` are imported and rendered unconditionally in `App.jsx`.

### Data Source
The layout itself doesn't fetch data; it purely composes the sections. Each individual section component is responsible for importing its required data slice from `src/data/portfolioData.js`.

### Animations
- **Page Transitions:** There are no page transitions since there is no routing.
- **Initial Load:** A `Preloader.jsx` component masks the initial rendering of the DOM, providing a smooth fade-in experience once the site is ready.
- **Scroll Reveal:** As the user scrolls down the page, components use the AOS (Animate on Scroll) library to trigger entrance animations (fade-up, fade-left, zoom-in).

### Responsiveness
- The root layout assumes a full-width (`w-full`) canvas. 
- The `<div id="root">` and `<body>` are set to have no margins, allowing components to bleed to the edges of the viewport.
- Each child component handles its own internal constraints, typically wrapping content in a `max-w-6xl mx-auto` or similar container to ensure it doesn't stretch too wide on ultrawide monitors, while using padding (`px-6 md:px-12`) to maintain safe zones on mobile devices.

### Styling
The global page background is set to pitch black (`#000`), with the default text color set to white (`#fff`) via `index.css`. Some specific sections (like `About.jsx` which uses a red background `#ff2a2a`) break this dark theme temporarily to create visual contrast and rhythm as the user scrolls.
