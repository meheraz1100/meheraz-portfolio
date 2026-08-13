# ✦ Mosaiyeb Meheraz — MERN Developer Portfolio

<p align="center">
  <strong>A modern, immersive and highly animated developer portfolio built to showcase my work, skills, experience and journey.</strong>
</p>

<p align="center">
  <a href="https://mosaiyeb-meheraz.vercel.app/">
    <img src="https://img.shields.io/badge/Live%20Portfolio-Visit%20Website-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Portfolio" />
  </a>
  <a href="https://github.com/meheraz1100">
    <img src="https://img.shields.io/badge/GitHub-meheraz1100-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
  </a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4.x-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Framer_Motion-Animation-0055FF?style=flat-square&logo=framer&logoColor=white" alt="Framer Motion" />
</p>

---

## ✦ Overview

**Mosaiyeb Meheraz** is a premium one-page developer portfolio designed with a strong focus on:

- Modern visual aesthetics
- Smooth and meaningful animations
- Responsive design
- Dark / Light mode
- Clean component architecture
- Performance
- Accessibility
- Developer-focused presentation

The portfolio is designed to communicate not only **what I build**, but also **how I think, solve problems and approach modern web development**.

---

## ✦ Live Experience

🌐 **Portfolio:**  
https://mosaiyeb-meheraz.vercel.app/

The website is structured as a seamless single-page experience with smooth navigation between sections.

### Sections

| Section | Purpose |
|--------|---------|
| Hero | Introduction, role and primary call-to-actions |
| About | Personal introduction and development journey |
| Skills | Technical skills and technologies |
| Projects | Selected real-world projects |
| Experience | Professional and leadership experience |
| Contact | Ways to connect and collaborate |

---

## ✦ Design Philosophy

The portfolio follows a **minimal yet expressive** visual direction.

### Visual Principles

- **Dark-first aesthetic**
- Carefully controlled accent colors
- High contrast typography
- Glassmorphism-inspired surfaces
- Ambient background effects
- Subtle grid patterns
- Smooth micro-interactions
- Scroll-based motion
- Responsive layouts
- Strong visual hierarchy

The goal is to keep the interface visually impressive without sacrificing usability.

---

## ✦ Key Features

### ◈ Immersive Hero Section

A high-impact introduction designed to immediately communicate:

- Who I am
- What I do
- My primary technology focus
- My development direction

Includes animated typography, interactive elements and subtle ambient effects.

---

### ◈ Dark & Light Mode

The portfolio supports both:

- 🌑 Dark Mode
- ☀️ Light Mode

The theme system is designed to maintain consistent contrast, spacing and visual hierarchy across both modes.

---

### ◈ Responsive by Default

Designed from the beginning for:

- 📱 Mobile
- 📱 Tablet
- 💻 Laptop
- 🖥️ Desktop
- 🖥️ Large displays

The layout adapts fluidly instead of relying on desktop-first scaling.

---

### ◈ Motion & Micro-Interactions

Animations are used intentionally throughout the interface to improve:

- Visual feedback
- Section transitions
- Content discovery
- User engagement

Rather than adding animation everywhere, motion is used where it adds meaning.

---

### ◈ Project Showcase

Projects are presented with:

- Real project screenshots
- Technology stacks
- Project descriptions
- Live demo links
- GitHub repositories
- Category information

---

### ◈ Premium Navigation

The navigation includes:

- Sticky positioning
- Smooth section navigation
- Responsive mobile menu
- Theme switching
- Scroll-aware behavior

---

### ◈ Developer-Friendly Architecture

The project follows a modular structure where sections, data and reusable UI components are separated.

This makes the portfolio easier to:

- Maintain
- Extend
- Customize
- Scale

---

# ✦ Featured Projects

## 01 — ShortLink

A modern URL shortening platform focused on fast redirects, link management and click tracking.

**Tech Stack**

`Next.js` `TypeScript` `Prisma` `PostgreSQL` `Tailwind CSS`

**Live:**  
https://shortlink-saas-pro.vercel.app/

**Repository:**  
https://github.com/meheraz1100/ShortLink-SaaS-Project

---

## 02 — DevHQ

A collaborative developer management platform designed to organize teams, tasks and project workflows.

**Tech Stack**

`React` `Node.js` `Express.js` `MongoDB` `Tailwind CSS`

**Live:**  
https://dev-hq.vercel.app/

**Repository:**  
https://github.com/meheraz1100/DevHQ-Client

---

## 03 — FeedMe

A modern meal planning and delivery platform connecting food discovery, planning and ordering into one experience.

**Tech Stack**

`React` `Node.js` `Express.js` `MongoDB`

**Live:**  
https://feedme-meal.vercel.app/

**Repository:**  
https://github.com/meheraz1100/feedme-client

---

# ✦ Tech Stack

### Frontend

- HTML5
- CSS3
- JavaScript
- TypeScript
- React
- Next.js
- Tailwind CSS
- Framer Motion

### Backend

- Node.js
- Express.js
- REST APIs

### Database

- MongoDB
- PostgreSQL
- Prisma ORM

### Authentication & Services

- Firebase
- OAuth
- JWT
- REST APIs

### Development Tools

- Git
- GitHub
- VS Code
- npm
- Vercel

---

# ✦ Project Structure

```text
meheraz-portfolio/
│
├── public/
│   ├── devhq.png
│   ├── feedme.png
│   └── shortlink.png
│
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   └── Navbar.tsx
│   │   │
│   │   ├── providers/
│   │   │   └── ThemeProvider.tsx
│   │   │
│   │   └── sections/
│   │       ├── Hero.tsx
│   │       ├── About.tsx
│   │       ├── Skills.tsx
│   │       ├── Projects.tsx
│   │       ├── Experience.tsx
│   │       └── Contact.tsx
│   │
│   └── data/
│       ├── experience.ts
│       ├── projects.ts
│       └── skills.ts
│
├── .gitignore
├── next.config.ts
├── package.json
├── tsconfig.json
└── README.md