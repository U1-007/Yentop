# Yentop — Premium Edible Oils & Refining Technology

<p align="center">
  <img src="public/logo.png" alt="Yentop Logo" width="220" />
</p>

<p align="center">
  <strong>Refining Purity. Enriching Lives.</strong><br />
  Over 100 years of heritage by Manickam Edible Oils Pvt. Ltd. delivering premium refined edible oils processed with world-class Swedish Alfa Laval refining technology.
</p>

<p align="center">
  <a href="#-tech-stack"><img src="https://img.shields.io/badge/React-19.2.6-61DAFB?logo=react&logoColor=white" alt="React 19" /></a>
  <a href="#-tech-stack"><img src="https://img.shields.io/badge/Vite-8.0.12-646CFF?logo=vite&logoColor=white" alt="Vite 8" /></a>
  <a href="#-tech-stack"><img src="https://img.shields.io/badge/GSAP-3.15-88CE02?logo=greensock&logoColor=white" alt="GSAP 3" /></a>
  <a href="#-tech-stack"><img src="https://img.shields.io/badge/Framer_Motion-12.38-0055FF?logo=framer&logoColor=white" alt="Framer Motion" /></a>
  <a href="https://vercel.com"><img src="https://img.shields.io/badge/Deployment-Vercel-000000?logo=vercel&logoColor=white" alt="Vercel Ready" /></a>
  <a href="#-license"><img src="https://img.shields.io/badge/License-Proprietary-gold" alt="License" /></a>
</p>

---

## 📖 Overview

**Yentop** is the digital experience platform for **Manickam Edible Oils Pvt. Ltd.** based in Virudhunagar, Tamil Nadu. With over a century of industry leadership, the company processes high-grade crude palm oil into refined palmolein, vanaspati, and specialized low trans-fat edible oils using state-of-the-art continuous refining plants.

This web application delivers a web experience built with high-end glassmorphism styling, smooth inertia scrolling, staggered GSAP animations, interactive product showcases, and a direct B2B enquiry portal.

---

## ✨ Key Features

- **🎬 Dynamic Animations & Smooth Scroll**: Inertia scrolling powered by `@studio-freight/react-lenis` synchronized with GSAP ScrollTrigger timeline animations.
- **✨ Glassmorphic UI Aesthetics**: Tailored luxury dark theme featuring gold accents (`#d4af37`), spotlight cards (`SpotlightCard`), text reveal effects (`TextReveal`), and magnetic UI controls (`Magnetic`).
- **🚀 Ultra-Fast Performance**: Built on **React 19** and **Vite 8**, utilizing route-level code splitting (`React.lazy` + `Suspense`) for instant page transitions.
- **📦 Comprehensive Product Catalog**: Detailed product specifications, packaging options, and nutritional breakdown for Refined Palmolein, Vanaspati, Low Trans-Fat Oils, and Crude Palmolein.
- **📋 Direct Enquiry Engine**: B2B quotation form with real-time field validation via `react-hook-form` & `zod`, integrated directly with `Web3Forms API` for instant lead routing.
- **📍 Interactive Location & Media Gallery**: Visual gallery displaying plant interior, oil processing machinery, quality testing labs, and integrated Google Maps location for corporate headquarters.
- **🛡️ Code Quality & Pre-Commit Hooks**: ESLint 10 rules, Prettier formatting, and Husky pre-commit hooks ensuring zero regression commits.

---

## 🛠️ Tech Stack

| Domain | Technology / Library |
| :--- | :--- |
| **Core Framework** | React 19, React Router v7 |
| **Build Tooling** | Vite 8, ESLint 10, Prettier, Husky |
| **Animation & Motion** | GSAP 3, `@gsap/react`, Framer Motion 12, `@studio-freight/react-lenis` |
| **Forms & Validation** | React Hook Form, Zod, Web3Forms API |
| **Icons & Head SEO** | Lucide React, React Helmet Async |
| **Styling** | Custom CSS Variables (`global.css`), Modern Glassmorphism |
| **Deployment** | Vercel (with `vercel.json` SPA rewrites) |

---

## 📂 Directory & File Structure

```
yentop-react/
├── .husky/                   # Git pre-commit hook configurations
│   └── pre-commit
├── public/                   # Static assets, branding logos & media
│   ├── favicon.svg
│   ├── logo.png
│   ├── main.jpg
│   ├── plant_interior.jpg
│   ├── crude_palmolein_refinery.png
│   ├── low_trans_fat.png
│   ├── oil_refinery.png
│   ├── refined_palmolein.jpg
│   └── vanaspati.png
├── src/                      # Application source code
│   ├── assets/               # Branding vectors & graphic assets
│   ├── components/           # Reusable UI components
│   │   ├── CustomCursor.jsx  # Interactive mouse cursor follower
│   │   ├── ErrorBoundary.jsx # Global error handling fallback
│   │   ├── Footer.jsx        # Corporate footer with address & links
│   │   ├── Header.jsx        # Navigation bar & CTA button
│   │   ├── Magnetic.jsx      # Physics-based magnetic hover effect
│   │   ├── PageWrapper.jsx   # Route transition wrapper
│   │   ├── ScrollProgress.jsx# Scroll depth progress indicator
│   │   ├── SpotlightCard.jsx # Mouse-tracking glow card container
│   │   └── TextReveal.jsx    # GSAP scroll-triggered text reveal
│   ├── pages/                # Page route components
│   │   ├── AboutUs.jsx       # Company history, vision & leadership
│   │   ├── Contact.jsx       # Contact details, address & map
│   │   ├── Enquiry.jsx       # B2B order & quotation request form
│   │   ├── FAQ.jsx           # Interactive accordion FAQs
│   │   ├── FluidTest.jsx     # WebGL liquid fluid simulation showcase
│   │   ├── Gallery.jsx       # Plant machinery & product image gallery
│   │   ├── Home.jsx          # Main landing page with animated sections
│   │   ├── NotFound.jsx     # 404 Error page
│   │   ├── Operations.jsx   # Refining process & Alfa Laval technology
│   │   └── Products.jsx     # Edible oil catalog & specifications
│   ├── styles/               # CSS Design tokens & global stylesheet
│   │   └── global.css
│   ├── App.jsx               # Main application routing & Lenis provider
│   ├── App.css               # Component-specific styles
│   ├── index.css             # Base CSS reset
│   └── main.jsx              # React application root entrypoint
├── .env.example              # Environment variables template
├── eslint.config.js          # ESLint flat configuration file
├── index.html                # HTML template entrypoint
├── package.json              # Project dependencies and script declarations
├── vercel.json               # SPA route redirects for Vercel deployment
├── vite.config.js            # Vite build & plugin configurations
└── README.md                 # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
- **Node.js**: `v18.0.0` or higher
- **npm**: `v9.0.0` or higher

### 1. Clone the Repository

```bash
git clone https://github.com/U1-007/Yentop.git
cd Yentop/yentop-react
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root of `yentop-react/` by copying `.env.example`:

```bash
cp .env.example .env
```

Add your Web3Forms access key:

```env
VITE_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key_here
```

### 4. Run Development Server

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173`.

---

## 📜 Available Scripts

In the project directory, you can run:

| Command | Action |
| :--- | :--- |
| `npm run dev` | Starts local Vite development server with HMR. |
| `npm run build` | Compiles production build artifacts into `dist/`. |
| `npm run lint` | Executes ESLint to check for code quality and unused variables. |
| `npm run format` | Formats all source files using Prettier. |
| `npm run preview` | Serves the production build locally for verification. |
| `npm run prepare` | Configures Husky git pre-commit hooks. |

---

## 🌐 Deployment (Vercel)

This repository is optimized for deployment on **Vercel**.

1. Connect `https://github.com/U1-007/Yentop.git` to your Vercel account.
2. Set the **Root Directory** to `yentop-react`.
3. Add the Environment Variable `VITE_WEB3FORMS_ACCESS_KEY`.
4. Deploy! The included `vercel.json` ensures all client-side routes route cleanly to `index.html`.

---

## 🏭 About Manickam Edible Oils

**Manickam Edible Oils Pvt. Ltd.**  
📍 **Headquarters:** 123 Katchery Road, Virudhunagar - 626 001, Tamil Nadu, India  
📞 **Phone:** +91 4562 244309  
✉️ **Email:** mail@yentop.com  
🌐 **Website:** [yentop.com](https://yentop.com)

---

## 📄 License

© 2026 Manickam Edible Oils Pvt. Ltd. All Rights Reserved.
