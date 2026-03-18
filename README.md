# ProposalAI – Next.js Website

A complete, production-ready website for ProposalAI built with Next.js 14 (App Router), Tailwind CSS, and JavaScript.

## 🚀 Quick Start

### Prerequisites
- Node.js 18.17+ 
- npm or yarn

### Installation

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
src/
├── app/                        # Next.js App Router
│   ├── layout.js               # Root layout (Navbar + Footer)
│   ├── page.js                 # Home page
│   ├── globals.css             # Global styles + Tailwind
│   ├── not-found.js            # 404 page
│   ├── about/page.js           # About Us page
│   ├── contact/page.js         # Book a Demo / Contact page
│   ├── platform/page.js        # Platform page
│   ├── resource/page.js        # Resources / Blog page
│   ├── solution/page.js        # Solutions overview page
│   └── api/
│       └── contact/route.js    # Contact form API endpoint
│
├── components/
│   ├── layout/
│   │   ├── Navbar.js           # Sticky navbar with mega menu
│   │   └── Footer.js           # Full footer with links
│   ├── sections/
│   │   ├── HeroSection.js      # Homepage hero with typewriter
│   │   ├── StatsSection.js     # Animated stats counter section
│   │   ├── FeatureSections.js  # Alternating feature blocks
│   │   ├── ServicesSection.js  # 3-column services cards
│   │   ├── ClientsSection.js   # Scrolling brand logos
│   │   ├── CaseStudiesSection.js # Blog/case study cards
│   │   └── CTASection.js       # Reusable CTA banner
│   └── ui/
│       ├── Logo.js             # SVG logo component
│       ├── AnimateOnScroll.js  # Scroll-triggered fade-up animations
│       └── Counter.js          # Animated number counter
│
└── lib/                        # Utilities (extend as needed)
```

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| Primary color | `#00B4D8` (cyan) |
| Dark | `#0A0A0A` |
| Mint bg | `#E8FDF5` |
| Display font | Syne (bold, geometric) |
| Body font | DM Sans (clean, readable) |

### Tailwind Custom Classes
- `.btn-primary` – Cyan pill button with arrow
- `.btn-dark` – Dark pill button
- `.section-title` – Large display heading
- `.card-hover` – Lift + shadow on hover
- `.reveal` + `.visible` – Scroll animation system

---

## 📄 Pages

| Route | Description |
|-------|-------------|
| `/` | Home page with hero, stats, features, services, clients |
| `/platform` | Platform features deep-dive |
| `/solution` | Use cases: RFP, Evaluation, Security QA |
| `/resource` | Blog/case studies with category filter |
| `/contact` | Book a Demo form |
| `/about` | Company story, values, team |
| `/api/contact` | POST endpoint for demo bookings |

---

## ✨ Features

- ✅ **Next.js 14 App Router** with `src/app` structure
- ✅ **Tailwind CSS** for all styling
- ✅ **Responsive** — mobile-first, works on all screen sizes
- ✅ **Animated** — scroll-reveal, counter, typewriter, marquee
- ✅ **Mega menu** with Solution dropdown
- ✅ **API route** for contact form
- ✅ **SEO** metadata on every page
- ✅ **Performance** optimized with next/image compatible patterns

---

## 🔧 Customization

### Change Brand Colors
Edit `tailwind.config.js`:
```js
colors: {
  primary: {
    DEFAULT: "#00B4D8",  // ← Change this
    dark: "#0096C7",
  },
}
```

### Add New Pages
Create `src/app/your-page/page.js` — it's automatically routed.

### Update Content
All content is in plain arrays/objects at the top of each component file. No CMS required, but easy to wire up to Contentful, Sanity, etc.
