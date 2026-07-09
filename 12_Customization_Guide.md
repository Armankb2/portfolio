# PHASE 12 — IMPLEMENTATION GUIDE (Customization)

This guide will walk you through exactly how to strip the original author's identity from the portfolio and inject your own.

## 1. Global Configurations
1. **`index.html`**
   - Replace `<title>Md Yusuf — Full Stack & Java Developer</title>` with your name.
   - Update `<meta name="description">` with your tagline.
   - Update the `og:title` and `og:description` tags.
2. **`package.json`**
   - Change `"name": "video_portfolio"` to `"name": "your-name-portfolio"`.
3. **`public/favicon.svg`**
   - Replace the default Vite SVG with your own logo or an emoji SVG.

## 2. Personal Information & Links (`src/data/portfolioData.js`)
Open `portfolioData.js`. You will spend 90% of your time here.

### A. Global Identity
- **`personalInfo`**: Change `name`, `brandName` (used in Preloader), and `role`.
- **`socialLinks`**: Replace GitHub, LinkedIn, and Instagram URLs.
- **`contactContent`**: Update your `email`, `phone`, and `location`.

### B. Section Content
- **`heroContent`**: Update your `greeting`, `titleHighlight`, `subtitle`, and the `href` for the Resume CTA (point it to a PDF you put in the `public` folder).
- **`aboutContent`**: Rewrite the `bio` (it accepts raw HTML, so you can use `<br>` or `<strong>`).
- **`servicesContent`**: Replace the titles and descriptions of what you offer.
- **`projectsContent`**: For each project, change the `title`, `description`, `techTags`, and `links`.

## 3. Assets Replacement (`src/assets/`)
The original project relies on a few hardcoded image paths.
1. **Resume:** Put your `resume.pdf` in the `public/` folder so it can be downloaded.
2. **Hero Background:** (See Phase 13 guide on removing the video).
3. **About Section Avatar:**
   - Delete `src/assets/about/yusuf-avatar.png`.
   - Add your own portrait image (e.g., `my-portrait.png`).
   - Open `src/components/About.jsx`, find `import stackImage from '../assets/about/yusuf-avatar.png';` and change it to your filename.

## 4. EmailJS Setup (`src/components/Contact.jsx`)
To receive messages from the contact form:
1. Go to [EmailJS.com](https://www.emailjs.com/) and create a free account.
2. Add a new Email Service (e.g., Gmail). Note the **Service ID**.
3. Create an Email Template. Note the **Template ID**.
4. Get your **Public Key** from the EmailJS Account settings.
5. Open `Contact.jsx` and look for the `emailjs.sendForm` function.
6. Replace the placeholder IDs with your actual IDs.

## 5. Deployment
Once everything is personalized locally:
1. Run `npm run build` to ensure there are no errors.
2. Push your code to a GitHub repository.
3. Log into [Vercel](https://vercel.com/) or [Netlify](https://netlify.com/).
4. Import your GitHub repository.
5. The platform will automatically detect Vite, run the build command, and deploy your site to a live URL.
