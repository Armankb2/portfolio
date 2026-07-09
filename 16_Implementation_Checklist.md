# PHASE 16 — IMPLEMENTATION CHECKLIST

Use this checklist to ensure you have replaced all original author content with your own before deploying the portfolio.

## 1. Global Setup
- [ ] Edit `package.json`: Change `name` and `author`.
- [ ] Edit `index.html`: Change `<title>`.
- [ ] Edit `index.html`: Change `<meta name="description">`.
- [ ] Edit `index.html`: Change `<meta name="author">`.
- [ ] Edit `index.html`: Change Open Graph tags (`og:title`, `og:description`).
- [ ] Replace `public/favicon.svg` with your own icon.

## 2. Media & Assets
- [ ] Delete `src/assets/about/yusuf-avatar.png`.
- [ ] Add your own avatar image to `src/assets/about/`.
- [ ] Update import path in `src/components/About.jsx` to match your new avatar filename.
- [ ] Add your Resume PDF to the `public/` directory (e.g., `public/resume.pdf`).
- [ ] Decide on the Hero video: Either replace `yusuf-hero.mp4` with your own video, OR follow Phase 13 to remove it and use an image/solid color.

## 3. Data Overhaul (`src/data/portfolioData.js`)
*Open this file and methodically replace every string.*

- [ ] `personalInfo.name`
- [ ] `personalInfo.role`
- [ ] `personalInfo.brandName`
- [ ] `socialLinks.github`
- [ ] `socialLinks.linkedin`
- [ ] `socialLinks.instagram`
- [ ] `heroContent.greeting`
- [ ] `heroContent.titleHighlight`
- [ ] `heroContent.subtitle`
- [ ] `heroContent.ctaResume.href` (Point this to `/resume.pdf`)
- [ ] `aboutContent.heading`
- [ ] `aboutContent.bio`
- [ ] `servicesContent` array (Replace all 3 service objects)
- [ ] `technicalSkillsContent` array (Replace icons and lists)
- [ ] `projectsContent` array (Replace titles, desc, tags, and links)
- [ ] `internshipsContent` array
- [ ] `leadershipContent` array
- [ ] `certificatesContent` array
- [ ] `softSkillsContent` array
- [ ] `contactContent.email`
- [ ] `contactContent.phone`
- [ ] `contactContent.location`

## 4. EmailJS Configuration
- [ ] Create an EmailJS account.
- [ ] Create an Email Service.
- [ ] Create an Email Template.
- [ ] Open `src/components/Contact.jsx`.
- [ ] Replace `YOUR_SERVICE_ID`.
- [ ] Replace `YOUR_TEMPLATE_ID`.
- [ ] Replace `YOUR_PUBLIC_KEY`.
- [ ] Test the contact form locally to ensure you receive the email.

## 5. Final Verification
- [ ] Run `npm run dev`.
- [ ] Scroll through the entire site top to bottom.
- [ ] Click every link (GitHub, LinkedIn, Live Demos) to ensure no broken links or 404s.
- [ ] Verify the Resume downloads correctly.
- [ ] Verify the site looks correct on a mobile device simulator.
- [ ] Run `npm run build` to ensure the project compiles without errors.
