# VELOCITE — Creative Agency Landing Page

> Direction is everything.

A futuristic, premium one-page landing site built with Next.js 14, Tailwind CSS, and Framer Motion.

## 🚀 Deploy to Vercel in 60 seconds

### Option 1 — Vercel CLI
```bash
npm install
npx vercel
```

### Option 2 — GitHub + Vercel Dashboard
1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import repo
3. Keep all defaults → Deploy

### Option 3 — Just open index.html
The `index.html` file in the root is a **fully self-contained** version of the site. You can open it directly in any browser — no build step needed. Perfect for previewing or sharing instantly.

---

## 🛠 Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 📁 Structure

```
velocite/
├── index.html              ← Standalone preview (open directly in browser)
├── app/
│   ├── layout.tsx          ← Root layout + fonts + metadata
│   ├── page.tsx            ← Main page (assembles all sections)
│   └── globals.css         ← Global styles + CSS variables + animations
├── components/
│   ├── Cursor.tsx          ← Custom cursor with glow trail
│   ├── Blobs.tsx           ← Animated background blobs
│   ├── Navbar.tsx          ← Sticky navbar + mobile menu
│   ├── Hero.tsx            ← Hero section with orb + particles
│   └── sections.tsx        ← Clients, Work, Team, Mission, CTA, Footer
├── tailwind.config.js
├── next.config.js
├── tsconfig.json
└── package.json
```

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| Background | `#05060A` |
| Purple accent | `#9B6FFF` |
| Cyan accent | `#3BE8D4` |
| Heading font | Syne (800) |
| Body font | DM Sans (300–500) |

---

## ✅ Features
- Custom cursor with glow ring trail
- Animated floating blobs background
- Noise texture overlay
- Smooth fade-up scroll animations
- Sticky navbar with blur + scroll detection
- Glassmorphism cards
- Hover glow effects on all interactive elements
- Fully responsive (mobile/tablet/desktop)
- SEO-ready metadata
- Vercel-ready out of the box
