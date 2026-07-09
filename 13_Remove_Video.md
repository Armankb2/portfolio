# PHASE 13 — REMOVE VIDEO ANIMATION

If you want to completely remove the talking/avatar video animation from the background of the Hero section, follow these exact steps to ensure you do not break the project.

## Locate the Assets and Code
- **Component:** `src/components/Hero.jsx`
- **Asset:** `src/assets/hero video/yusuf-hero.mp4`

## Step-by-Step Removal Guide

### 1. Remove the Import Statement
Open `src/components/Hero.jsx` and delete this line at the top of the file:
```javascript
import heroVideo from '../assets/hero video/yusuf-hero.mp4';
```

### 2. Remove Video State & Refs
Inside the `Hero` component, delete these three lines of state management:
```javascript
const videoRef = useRef(null);
const [isPlaying, setIsPlaying] = useState(false);
const [isMuted, setIsMuted] = useState(false);
```

### 3. Remove the Video Toggle Function
Delete the `toggleVideo` function entirely:
```javascript
const toggleVideo = (e) => {
  // ... delete this entire block
};
```

### 4. Delete the `<video>` Element
Find the `<video>` tag right after the `<section>` opening tag and delete the entire block:
```jsx
{/* Background Video */}
<video
  ref={videoRef}
  loop
  muted={isMuted}
  playsInline
  className="absolute top-0 left-0 w-full h-full object-cover z-0"
>
  <source src={heroVideo} type="video/mp4" />
  Your browser does not support the video tag.
</video>
```

### 5. Remove the "Play Reel" Button
Find the right-side div containing the play/pause button logic and delete it:
```jsx
{/* Right Side: Play Video Button */}
<div 
  data-aos="zoom-in"
  data-aos-delay="600"
  className="mt-8 md:mt-0 flex flex-row md:flex-col items-center gap-2 md:gap-3 cursor-pointer group self-start md:self-auto"
  onClick={toggleVideo}
>
  {/* ... delete everything inside here ... */}
</div>
```

### 6. Delete the Video Files
Navigate to your file explorer and delete the entire `src/assets/hero video/` directory.

---

## What to do instead? (Fallback Background)
Because you removed the video, the background of the `Hero` section will now default to pure black (because of the `bg-black` class on the `<section>`).

If you want an image background instead of black:
1. Import an image at the top of `Hero.jsx`:
   ```javascript
   import heroBg from '../assets/hero/my-background.jpg';
   ```
2. Add an image tag where the `<video>` used to be:
   ```jsx
   <img 
     src={heroBg} 
     alt="Background" 
     className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-40" 
   />
   ```
*(The `opacity-40` ensures your white text remains readable).*
