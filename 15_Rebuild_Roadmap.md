# PHASE 15 — REBUILD PLAN

If you want to recreate this exact portfolio architecture from scratch (perhaps as a learning exercise), follow this phased roadmap.

## Phase 1: Environment Setup (1 Hour)
1. Initialize the project: `npm create vite@latest portfolio -- --template react`
2. Navigate into the folder: `cd portfolio`
3. Install dependencies: 
   ```bash
   npm install react-router-dom framer-motion aos @emailjs/browser
   npm install -D tailwindcss @tailwindcss/vite
   ```
4. Setup Tailwind CSS in `vite.config.js` and `index.css`.
5. Clean up boilerplate files. Setup standard folder structure (`assets/`, `components/`, `data/`).

## Phase 2: Data & State Foundation (1 Hour)
1. Create `src/data/portfolioData.js`.
2. Define the exact JSON structures for `heroContent`, `projects`, `skills`, etc.
3. This ensures that as you build components, you already have the mock data ready to map over.

## Phase 3: Core Layout & Global Styles (1 Hour)
1. Edit `index.css` to define the global dark theme (`bg-black text-white`).
2. Add the custom `@keyframes` for the `dropBounce` and `float` animations.
3. Build the `App.jsx` vertical stack skeleton (just empty divs with `id` tags for scrolling).
4. Build the `Navbar.jsx` with smooth scrolling links to the section IDs.

## Phase 4: High-Impact Top Sections (2-3 Hours)
1. **Preloader:** Use Framer Motion to create a full-screen absolute `div` that exits upward after a timeout.
2. **Hero:** Implement the background video (or image). Overlay the typography. Style the primary and secondary (glassmorphic) buttons.
3. **About:** Implement the CSS Flexbox/Grid layout. Create the custom ID badge with the `transform` and `animation` classes.

## Phase 5: Reusable Grid Sections (2 Hours)
1. Build a generic `Card` component that accepts a title, description, and tags.
2. Implement `Projects.jsx` by mapping over `portfolioData.projects` and passing the data to the Card.
3. Duplicate this logic for `Services.jsx`, `Certificates.jsx`, and `Internships.jsx`, tweaking the card design slightly for each to add visual variety.

## Phase 6: Contact & Footer (1.5 Hours)
1. Build the UI for the Contact form.
2. Integrate `EmailJS`. Add form state (`useState`) to handle `isSubmitting` and `successMessage`.
3. Build the simple footer with copyright info.

## Phase 7: Polish & Animations (2 Hours)
1. Import `AOS` in `App.jsx` or `main.jsx` and initialize it.
2. Go through every component and add `data-aos="fade-up"` and stagger them using `data-aos-delay`.
3. Audit the site on a mobile device and adjust Tailwind breakpoints (`md:`, `lg:`) to ensure paddings and font sizes scale down correctly.

**Estimated Total Time:** ~10-12 Hours.
