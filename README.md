# Brix Sese — Personal Developer Portfolio

> Modern, recruiter-focused personal developer portfolio for **Brix Sese** (BS Information Technology Graduate). Engineered with Next.js 14 App Router, TypeScript, Tailwind CSS, Framer Motion, and next-themes.

---

## 🚀 Live Demo & Repository
- **Live URL**: [https://brixsese.dev](https://brixsese.dev)
- **Repository**: [https://github.com/brixsese27/brixportfolio](https://github.com/brixsese27/brixportfolio)

---

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Theming**: `next-themes` (Dark / Light Mode)
- **Animations**: Framer Motion
- **Deployment**: Vercel (100% Static & SSG)

---

## 📁 Project Architecture

```
├── app/
│   ├── layout.tsx          # Root layout with fonts, metadata, and theme provider
│   ├── page.tsx            # Main single-page portfolio assembling 8 sections
│   ├── globals.css         # Tailwind base styles and theme tokens
│   ├── icon.svg            # Developer monogram favicon
│   ├── robots.ts           # Search engine robots config
│   └── sitemap.ts          # Sitemap generator
├── components/
│   ├── navbar.tsx          # Sticky navigation with mobile drawer and theme toggle
│   ├── hero.tsx            # Hero section with interactive developer workstation
│   ├── about.tsx           # Narrative & developer specification sheet
│   ├── skills.tsx          # Categorized technical stack with filter tabs
│   ├── projects.tsx        # Featured projects grid with case study triggers
│   ├── project-modal.tsx   # Detailed technical case study modal viewer
│   ├── capstone.tsx        # Flagship academic capstone showcase (IM-PARDS)
│   ├── experience.tsx      # Internship / OJT timeline
│   ├── education.tsx       # BSIT academic background & coursework
│   ├── contact.tsx         # Contact CTA, copy-email toast, & message composer
│   ├── footer.tsx          # Developer footer with status credits
│   └── theme-toggle.tsx    # Accessible dark/light mode switcher
├── data/
│   ├── profile.ts          # Personal info, headline, bio, contact, links
│   ├── projects.ts         # Featured projects case study data
│   ├── capstone.ts         # Capstone project deep specification
│   ├── skills.ts           # Categorized skills and tooling
│   ├── experience.ts       # Internship / OJT timeline entries
│   ├── education.ts        # Degree, university, and coursework
│   └── navigation.ts       # Navigation menu items & anchors
├── public/                 # Static assets, SVG UI mockups, and resume placeholder
```

---

## 💻 Getting Started Locally

```bash
# 1. Install dependencies
npm install

# 2. Run the development server
npm run dev

# 3. Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) with your browser to view the portfolio.

---

## 📄 License
MIT © Brix Sese
