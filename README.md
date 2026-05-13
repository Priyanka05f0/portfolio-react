# Lakshmi Priyanka Bethampudi - Portfolio Website

A modern, fully responsive personal portfolio website built using React and Vite.  
This portfolio showcases my skills, projects, certifications, and experience in Cloud, DevOps, and Full Stack Development.

## Live Demo

🔗 Live Website: https://blpriyanka.vercel.app/

## GitHub Repository

🔗 GitHub Repo: https://github.com/Priyanka05f0/portfolio-react

---

# Features

- Fully Responsive Design
- Modern UI/UX
- Animated Hero Section
- Smooth Scrolling Navigation
- Parallax Scrolling Effect
- On-Scroll Animations
- Skills Showcase Section
- Projects Section
- Certifications Section
- Contact Section
- Resume Download Button
- Mobile Friendly Navigation
- Accessibility Support using `prefers-reduced-motion`
- SEO Optimized
- Lighthouse Optimized

---

# Tech Stack

## Frontend

- React.js
- Vite
- JavaScript
- HTML5
- CSS3

## Deployment

- Vercel

---

# Folder Structure

```bash
portfolio-react/
│
├── public/
│
├── src/
│   ├── assets/
│   ├── components/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── vite.config.js
└── README.md
```

---

# Lighthouse Scores

| Category | Score |
|----------|-------|
| Performance | 99 |
| Accessibility | 93 |
| Best Practices | 96 |
| SEO | 100 |

---

# Accessibility Features

The project includes accessibility support for users who prefer reduced motion animations.

Example:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

# Installation and Setup

Follow these steps to run the project locally.

## Step 1 — Clone the Repository

```bash
git clone https://github.com/Priyanka05f0/portfolio-react.git
```

## Step 2 — Navigate to Project Folder

```bash
cd portfolio-react
```

## Step 3 — Install Dependencies

```bash
npm install
```

## Step 4 — Start Development Server

```bash
npm run dev
```

The application will run at:

```bash
http://localhost:5173
```

---

# Build for Production

```bash
npm run build
```

---

# Deploy on Vercel

This project is deployed using Vercel.

Steps followed:

1. Push project to GitHub
2. Import repository into Vercel
3. Configure Vite preset
4. Deploy project

---

## Author

- Name : Lakshmi Priyanka Bethampudi

---