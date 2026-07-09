# PHASE 3 — PROJECT STRUCTURE

## Directory Tree

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   ├── about/
│   │   ├── certificates/
│   │   ├── hero/
│   │   ├── icons/
│   │   ├── projects/
│   │   └── social/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Certificates.jsx
│   │   ├── Contact.jsx
│   │   ├── ContentCreator.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Internships.jsx
│   │   ├── Leadership.jsx
│   │   ├── Navbar.jsx
│   │   ├── Preloader.jsx
│   │   ├── Projects.jsx
│   │   ├── Services.jsx
│   │   ├── SoftSkills.jsx
│   │   └── TechnicalSkills.jsx
│   ├── data/
│   │   └── portfolioData.js
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── portfolio assets/
├── eslint.config.js
├── index.html
├── package.json
└── vite.config.js
```

---

## Folder Breakdown

### `public/`
- **Purpose:** Stores static assets that don't need to be processed by Vite's bundler. Files here are served directly at the root URL path.

### `src/`
- **Purpose:** The main container for all application logic, components, styles, and bundled assets.

### `src/assets/`
- **Purpose:** Stores images, SVGs, and other media that are imported directly into React components. Vite optimizes these during the build process.

### `src/components/`
- **Purpose:** Contains all the individual UI sections (e.g., Navbar, Hero, About). Keeping these separate from `App.jsx` ensures the code remains modular and maintainable.

### `src/data/`
- **Purpose:** Houses the static data (text, URLs, lists) used across the portfolio. It acts as a lightweight CMS.

### `portfolio assets/`
- **Purpose:** Located outside the source code, this folder likely contains raw, unoptimized design files, original photos, or placeholder assets used during development.

---

## File Breakdown

### Root Configuration Files
- **`index.html`**: 
  - *What it does:* The main HTML template. Contains SEO metadata and the root `<div>` where React mounts.
  - *Imported:* Never imported. Served by the browser.
  - *Customizable:* Yes, meta tags, title, and favicon links should be customized.
- **`package.json`**: 
  - *What it does:* Defines scripts and lists dependencies.
  - *Customizable:* Yes, project name and author can be updated.
- **`vite.config.js`**: 
  - *What it does:* Configuration for the Vite bundler (includes Tailwind plugin in v4).
  - *Customizable:* Usually left alone unless adding new Vite plugins.
- **`eslint.config.js`**: 
  - *What it does:* Linting rules for code quality.

### Source Files (`src/`)
- **`main.jsx`**: 
  - *What it does:* The entry point. Imports global CSS and mounts `App.jsx` to the DOM.
  - *Imported:* Defined in `index.html`.
  - *Customizable:* No need to customize.
  - *Reusable:* Standard boilerplate, not a reusable component.
- **`App.jsx`**: 
  - *What it does:* The root component. It simply renders all section components (Navbar, Hero, About, etc.) in a vertical stack.
  - *Imported in:* `main.jsx`.
  - *Customizable:* Yes, to reorder, add, or remove sections.
  - *Reusable:* Specific to this app layout.
- **`index.css` & `App.css`**: 
  - *What it does:* Global styles. `index.css` imports Tailwind and defines global animations (`@theme`).
  - *Imported in:* `main.jsx` / `App.jsx`.
  - *Customizable:* Yes, to alter global background colors, fonts, or keyframes.

### Data Files (`src/data/`)
- **`portfolioData.js`**: 
  - *What it does:* Exports JavaScript objects containing all the textual content and configuration for the portfolio.
  - *Imported in:* Almost every component in `src/components/`.
  - *Customizable:* **Highly Customizable.** This is the primary file to edit to personalize the portfolio.
  - *Reusable:* Acts as a central data store.

### Component Files (`src/components/`)
*All components follow a similar pattern: they define a section of the page, import their specific data from `portfolioData.js`, and are imported into `App.jsx`.*

- **`Navbar.jsx`**: Renders the sticky top navigation and mobile menu.
- **`Hero.jsx`**: The top landing section with the avatar/video, title, and initial call to action.
- **`About.jsx`**: Renders the bio, a stylized badge/avatar, and tech stack icons.
- **`Preloader.jsx`**: Shows a loading animation before the app fully renders.
- **`Projects.jsx`, `Services.jsx`, `Certificates.jsx`**: Map over arrays in `portfolioData.js` to render grid layouts of cards.
- **`Contact.jsx`**: Contains the EmailJS form and social links.
- **`Footer.jsx`**: The bottom branding and copyright section.

*Customizability:* All components can be customized via Tailwind classes to change colors/layouts.
*Reusability:* While they are modular, they are highly coupled to `portfolioData.js` and this specific design, making them section-specific rather than generic, globally reusable UI primitives (like a generic `<Button />`).
