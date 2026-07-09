# PHASE 9 — ASSETS

Assets in this project are split into two primary categories: static public assets and bundled source assets.

## 1. Static Assets (`public/`)
Files here are not processed by Vite. They are served exactly as they are at the root path (`/`).
- **`favicon.svg`**: The icon shown in the browser tab.

## 2. Bundled Assets (`src/assets/`)
Files here are imported directly into JavaScript (`import image from '../assets/...'`) and processed by Vite (cache busting, minification).

### About Section Images (`src/assets/about/`)
- `yusuf-avatar.png`: The primary headshot/portrait used in the ID Badge cutout in the About section.
- `image.png`, `mongodb.png`, `node.png`, `react.png`: Additional image assets likely used as fallback or legacy graphics, though the primary About section uses inline SVGs for Java, Spring Boot, and MERN to keep quality infinite.

### Hero Video (`src/assets/hero video/`)
- `yusuf-hero.mp4` (2.5MB): The main optimized looping video used in the Hero background.
- `Developer_introduces_self...mp4` (7.8MB): The unoptimized/original generation of the avatar video.

## 3. Inline SVGs
Instead of relying heavily on external `.svg` files, many critical icons are drawn inline directly inside the React components.
- **Tech Stack Icons:** The Java, Spring Boot, and MERN icons in `About.jsx` are hardcoded `<svg>` paths. This ensures they load instantly, scale infinitely without blurring, and can inherit Tailwind color classes if needed.
- **Social Icons:** GitHub, LinkedIn, and Instagram icons in `Hero.jsx` and `Contact.jsx` are inline SVGs.
- **UI Elements:** The scroll indicator, play/pause buttons, and external link icons are all inline SVGs.

## 4. Fonts
- No local font files (`.woff2`, `.ttf`) are stored in the repo.
- **Inter** is loaded via Google Fonts CDN in the `<head>` of `index.html`.

## 5. Extraneous Assets (`portfolio assets/`)
- Located at the root of the project, this folder is currently empty. It is standard practice to use a folder like this for `.fig` (Figma), `.psd` (Photoshop), or raw media files that you do not want Vite to bundle or deploy.
