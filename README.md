# 🚪 Knock Knock — Intra Campus Delivery Platform

> **Delivering Anything Across Campus, Instantly.**

A modern, fully responsive startup landing page for **Knock Knock** — an intra-campus delivery platform that connects students to food, essentials, and more, delivered right to their doorstep.

---

## 📸 Sections Overview

| Section         | Description                                                |
| --------------- | ---------------------------------------------------------- |
| 🦸 Hero         | Animated headline, CTA buttons, 3D SVG campus illustration |
| 🏫 About        | Platform overview with feature highlight cards             |
| ⚡ Features     | 6 animated glassmorphic feature cards                      |
| 🔄 How It Works | 3D step-flow diagram with 4 delivery stages                |
| 📊 Traction     | Animated number counters with live stats                   |
| 👤 Founder      | Professional founder story card                            |
| 💬 Testimonials | 3 student review cards with star ratings                   |
| 📣 CTA          | Full-width call-to-action section                          |
| 🔗 Footer       | Links, contact info, and social icons                      |

---

## 🛠️ Tech Stack

- **React** — Component-based UI
- **Tailwind CSS** — Utility-first styling
- **CSS Animations** — Scroll reveals, floats, counters, hover effects
- **IntersectionObserver API** — Scroll-triggered animations (no external deps)
- **Inline SVG** — Custom icons and 3D campus illustration

> No Framer Motion or third-party animation libraries required — all animations are pure CSS and React hooks for maximum compatibility.

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) v16+
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

```bash
# 1. Create a new React project (if you don't have one)
npx create-react-app knock-knock
cd knock-knock

# 2. Install Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Configure Tailwind

In `tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: { extend: {} },
  plugins: [],
};
```

In `src/index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Add the Component

```bash
# Copy knock-knock.jsx into your src folder
cp knock-knock.jsx src/App.jsx
```

### Run the App

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

---

## 📁 File Structure

```
src/
├── App.jsx               ← Main landing page (knock-knock.jsx)
├── index.css             ← Tailwind directives
└── index.js              ← React entry point
```

The entire landing page lives in a **single file** (`knock-knock.jsx`) with the following internal components:

```
KnockKnock              ← Root component / page shell
├── FloatingBlobs        ← Animated background decoration
├── CampusIllustration   ← Animated SVG 3D campus scene
├── FlowDiagram          ← "How It Works" step diagram
├── FeatureCard          ← Individual feature card (×6)
├── TestimonialCard      ← Student review card (×3)
├── Counter              ← Animated number counter
└── useInView            ← Custom scroll observer hook
```

---

## ✨ Features & Design Details

### Animations

- **Scroll-triggered reveals** — every section fades + slides in on scroll using a custom `useInView` hook
- **Floating elements** — buildings, packages, and blobs animate continuously with CSS keyframes
- **Animated counters** — stats count up from zero when scrolled into view
- **Hover micro-interactions** — cards lift, buttons scale, icons grow on hover

### Design System

- **Color palette** — Blue (`#2563eb`, `#1d4ed8`, `#1e40af`) on white/light blue backgrounds
- **Glassmorphism** — Feature and testimonial cards use `backdrop-filter: blur` with translucent backgrounds
- **Soft shadows** — Cards and illustrations use layered `box-shadow` for depth
- **Typography** — DM Sans with system-ui fallback; bold headings, relaxed body text

### Responsive Behavior

- Mobile-first layout with Tailwind breakpoints (`md:`, `lg:`)
- Collapsible hamburger nav menu on mobile
- Stacked → horizontal flow for How It Works diagram
- Single → multi-column grids for features and testimonials

---

## 📊 Traction Data

| Metric                | Value  |
| --------------------- | ------ |
| Students Served       | 5,000+ |
| Users in 90 Days      | 1,500+ |
| On-Time Delivery Rate | 98%    |

---

## 🎨 Customization Guide

### Change Colors

Update the hex values used in inline styles throughout the file. Primary brand colors are:

```
#2563eb  — Primary Blue
#1d4ed8  — Deep Blue
#1e40af  — Darker Blue
#dbeafe  — Light Blue (backgrounds)
```

### Update Stats

Find the `stats` array in the `KnockKnock` component:

```jsx
const stats = [
  { value: 5000, suffix: "+", label: "Students Served" },
  { value: 1500, suffix: "+", label: "Users in 90 Days" },
  { value: 98, suffix: "%", label: "On-Time Delivery" },
];
```

### Update Testimonials

Find the `testimonials` array and edit `name`, `role`, `text`, and `emoji` fields.

### Replace Founder Placeholder

Search for the `👨‍💼` emoji and replace the avatar `div` with an `<img>` tag pointing to your photo:

```jsx
<img
  src="/founder.jpg"
  alt="Founder"
  className="w-36 h-36 rounded-3xl object-cover shadow-xl"
/>
```

---

## 🌐 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Drag and drop the /build folder to netlify.com/drop
```

### GitHub Pages

```bash
npm install -D gh-pages
# Add to package.json scripts: "deploy": "gh-pages -d build"
npm run build && npm run deploy
```

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙌 Credits

Built with ❤️ for Indian campuses.

**Knock Knock** — _Campus delivery, reimagined._
