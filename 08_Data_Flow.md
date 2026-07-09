# PHASE 8 — DATA FLOW

## Architecture

This portfolio uses a **Centralized Static Data Store** pattern. Instead of fetching data from an external API or hardcoding text directly into the React components, all personal information, project details, and configurations are abstracted into a single JavaScript file: `src/data/portfolioData.js`.

## The Single Source of Truth: `portfolioData.js`

This file exports several JavaScript objects and arrays. When a component needs data (e.g., the `Projects.jsx` component needing a list of projects), it imports the specific data variable directly from this file.

### Where Portfolio Data Comes From:

- **Global/Hero (Name, Tagline, Resume):** Sourced from the `heroContent` object.
- **About (Bio, Headings):** Sourced from the `aboutContent` object.
- **Services (Offerings):** Sourced from the `servicesContent` array.
- **Technical & Soft Skills:** Sourced from `technicalSkillsContent` and `softSkillsContent` arrays.
- **Projects:** Sourced from the `projectsContent` array.
- **Experience (Internships, Leadership):** Sourced from `internshipsContent` and `leadershipContent`.
- **Education/Certificates:** Sourced from `certificatesContent`.
- **Content Creation:** Sourced from `contentCreatorContent`.
- **Contact & Social Links:** Sourced from `contactContent` (which includes email, phone, and links to GitHub/LinkedIn).

*Note: Icons and Images are generally imported directly within the components from the `src/assets/` folder, though sometimes image paths are referenced in the data file.*

## How to Personalize the Portfolio

To make this portfolio your own, you **do not need to rewrite the React components**. You only need to edit two areas:

### 1. Text and Links (`src/data/portfolioData.js`)
You must edit every object in this file to reflect your own information.

**Example Modification (Projects):**
```javascript
// Change this...
export const projectsContent = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A full-stack app...',
    image: 'image1', // (Map this in Projects.jsx)
    link: 'https://github.com/yusuf/ecommerce',
    tags: ['React', 'Node.js', 'MongoDB']
  }
];

// To this...
export const projectsContent = [
  {
    id: 1,
    title: 'My Custom App',
    description: 'My description...',
    image: 'myImage',
    link: 'https://github.com/myusername/myapp',
    tags: ['Vue', 'Firebase']
  }
];
```

### 2. Assets & Images (`src/assets/`)
The data file provides the text, but the components import the actual images. To replace the images:
1. Delete the existing images in `src/assets/about/`, `src/assets/projects/`, etc.
2. Place your own images in those folders.
3. Open the corresponding component (e.g., `src/components/About.jsx`) and update the import statements at the top of the file to point to your new image filenames.

### 3. SEO Metadata (`index.html`)
Open the root `index.html` file and change the `<title>`, `<meta name="description">`, `<meta name="author">`, and `<meta property="og:...">` tags to reflect your name and profession.

### 4. Email Functionality (`src/components/Contact.jsx`)
Because the contact form uses EmailJS, you cannot just change an email address string. You must:
1. Create a free account at EmailJS.
2. Create an Email Service and an Email Template.
3. Open `Contact.jsx` and replace the `YOUR_SERVICE_ID`, `YOUR_TEMPLATE_ID`, and `YOUR_PUBLIC_KEY` placeholders with your actual EmailJS credentials.
