# PHASE 2 — TECHNOLOGY STACK

## Core Technologies

### React (^19.2.6)
- **What it is:** A JavaScript library for building user interfaces.
- **Why it's used:** It serves as the foundational view layer of the portfolio, allowing the developer to break down complex UI into reusable components (like `Navbar.jsx`, `Hero.jsx`). Its virtual DOM ensures fast rendering.

### Vite (^8.0.12)
- **What it is:** A modern, blazing-fast frontend build tool.
- **Why it's used:** It provides the development server with instant Hot Module Replacement (HMR) and bundles the React code into optimized static assets for production deployment.

### JavaScript (JSX)
- **What it is:** The programming language used alongside JSX (JavaScript XML syntax extension).
- **Why it's used:** Provides the logic, state management, and structure for the React application. No TypeScript is used, keeping the development environment simpler.

## Styling & Design

### Tailwind CSS (^4.3.0)
- **What it is:** A utility-first CSS framework.
- **Why it's used:** To rapidly build custom user interfaces without writing external CSS. It is used extensively across all components for layout (Flexbox/Grid), typography, spacing, colors, and responsive breakpoints. The project specifically uses Tailwind v4 integrated via `@tailwindcss/vite`.

## Animations & Motion

### Framer Motion (^12.40.0)
- **What it is:** A production-ready motion library for React.
- **Why it's used:** It powers complex, interactive animations, layout transitions, and micro-interactions (like hover effects and continuous background animations). It is likely responsible for floating elements, sophisticated entry animations, or the interactive avatar.

### AOS (Animate on Scroll) (^2.3.4)
- **What it is:** A lightweight JavaScript library that animates elements as you scroll down the page.
- **Why it's used:** To create simple, declarative scroll-triggered reveal animations. You can see it referenced in the global CSS (`[data-aos="drop-bounce"]`), where custom keyframe animations (`dropBounce`) are tied to AOS triggers to make elements bounce in as they enter the viewport.

## Utilities & Services

### EmailJS (@emailjs/browser ^4.4.1)
- **What it is:** A service that allows sending emails directly from client-side JavaScript.
- **Why it's used:** It powers the `Contact.jsx` form. Instead of requiring a backend server to handle form submissions and forward them via email, EmailJS hooks directly into the frontend form and routes the messages securely to the owner's inbox.

## Linting & Quality Assurance

### ESLint (^10.3.0)
- **What it is:** A pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript.
- **Why it's used:** Integrated with React-specific plugins (`eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`) to enforce code quality, catch common syntax errors, and ensure React hooks are used correctly.

## Summary of Missing "Expected" Technologies
To fully reverse-engineer and map this project against modern trends, note what is *not* here:
- **No Next.js or React Router:** It's a single-page scrolling application, not a multi-page app.
- **No state management libraries (Zustand/Redux):** The app is purely presentational. Any state (like mobile menu toggles or form inputs) is likely handled locally using React's `useState`.
- **No Three.js/WebGL:** Despite the "video_portfolio" name, complex 3D scenes are likely rendered via standard videos/images or Framer Motion rather than WebGL canvases, keeping the bundle size lower.
