# PHASE 5 — COMPONENT ANALYSIS

All components in this project reside in `src/components/`. They are generally designed to be highly specific to this portfolio's layout rather than generic, globally reusable UI primitives.

## 1. `Preloader.jsx`
- **Purpose:** Masks the initial load of the website, providing a premium introductory animation.
- **Props:** None.
- **State:** `isLoading` (boolean) to track when to unmount.
- **Hooks:** `useState`, `useEffect` (sets a timeout of 2.2s before setting `isLoading` to false).
- **Animation:** Uses `framer-motion` for a "water fill" text reveal effect using `clipPath`, and a smooth exit animation where the red background slides up (`y: "-100%"`).
- **Dependencies:** `framer-motion`, `portfolioData.js`.
- **Reusability:** Low. Specific to the brand name defined in the data file.

## 2. `Navbar.jsx`
- **Purpose:** Top navigation bar and mobile hamburger menu.
- **Props:** None.
- **State:** Likely uses `isScrolled` (to toggle blur/transparency on scroll) and `isMobileMenuOpen`.
- **Dependencies:** `portfolioData.js`.

## 3. `Hero.jsx`
- **Purpose:** The first section the user sees. Features a background video reel, social links, and main CTA buttons.
- **Props:** None.
- **State:** `isPlaying` and `isMuted` to control the background video.
- **Hooks:** `useRef` (to reference the `<video>` element), `useState`, `useEffect` (to initialize AOS).
- **Animation:** Uses AOS for fade-ups. The "Play/Pause" button has complex hover states scaling and shifting colors.
- **Dependencies:** `aos`, `hero video` asset.
- **Reusability:** Low. Hardcoded layout for the video background.

## 4. `About.jsx`
- **Purpose:** Displays the user's bio, a custom CSS-animated ID Badge, and inline SVG icons of the tech stack.
- **Props:** None.
- **Animation:** Uses custom CSS keyframe `dropBounce` for the ID Badge. AOS for text fade-ins.
- **Dependencies:** `yusuf-avatar.png`, `portfolioData.js`.

## 5. `Projects.jsx` (and `ProjectCard` sub-component)
- **Purpose:** Renders a list of featured projects in a grid or stack.
- **Props:** The main `Projects` component takes no props. It renders a `ProjectCard` which takes `project` (object) and `aosDelay` (string) as props.
- **Styling:** Uses heavy Glassmorphism (`backdrop-blur-md`, `bg-white/10`). "Flagship" projects get a unique red gradient treatment.
- **Dependencies:** `portfolioData.js`.
- **Reusability:** The `ProjectCard` is highly reusable within the app for rendering any project object that fits the schema.

## 6. `Contact.jsx`
- **Purpose:** Renders the final call-to-action, social links, and an email contact form.
- **Props:** None.
- **State:** Form states (name, email, message, loading, success/error).
- **Dependencies:** `@emailjs/browser` to handle the form submission.

*Note on other components (`Services`, `Certificates`, `Internships`, `Leadership`, `SoftSkills`, `TechnicalSkills`):*
These follow the exact same architectural pattern as `Projects.jsx`. They map over an array from `portfolioData.js` and render cards using Tailwind utilities and AOS scroll animations. They do not maintain internal state.
