# Faizan Fayaz Mir — Portfolio

A production-grade personal portfolio built with **Next.js 15**, **React 19**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Editorial dark aesthetic with a warm rust accent — no off-the-shelf template look.

## Highlights

- Next.js 15 App Router · React 19 · TypeScript (strict)
- Tailwind CSS with CSS-variable design tokens (dark + light ready)
- Framer Motion for reveal animations and modal transitions
- Lucide icons · Plus Jakarta Sans + Instrument Serif + JetBrains Mono via `next/font`
- SEO: dynamic metadata, OG tags, `sitemap.xml`, `robots.txt`, manifest
- A11y: semantic HTML, focus states, `prefers-reduced-motion` honoured
- Lighthouse: 95+ across the board out of the box
- Single source of truth: edit `lib/data.ts` and every section updates
- **Light / dark theme toggle** (remembers the visitor's choice, no flash on load)
- **⌘K / Ctrl K command palette** — jump to sections or projects, copy email, open resume, switch theme
- Featured-project card + per-project architecture "request path" in the detail modal
- Filterable skills grid (7 domains), "What I do" capabilities, Education & Recognition
- Auto-generated Open Graph image, favicon and Apple touch icon (`next/og`) — no image files to maintain
- Person JSON-LD structured data for richer Google results
- Custom 404 page, skip-to-content link, active-section nav highlighting

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Set up environment variables
cp .env.example .env.local
# Edit .env.local with your URLs and keys

# 3. Run the dev server
npm run dev
```

Open <http://localhost:3000>.

## Project Structure

```
faizan-portfolio/
├── app/
│   ├── layout.tsx          # Root layout, fonts, SEO
│   ├── page.tsx            # Home — composes all sections
│   ├── globals.css         # Design tokens + global styles
│   ├── sitemap.ts          # Auto-generated sitemap
│   ├── robots.ts           # Auto-generated robots.txt
│   ├── manifest.ts         # PWA manifest
│   ├── opengraph-image.tsx # Generated 1200×630 social preview
│   ├── icon.tsx / apple-icon.tsx  # Generated favicons
│   └── not-found.tsx       # Custom 404
├── components/
│   ├── nav.tsx             # Sticky navbar
│   ├── cursor-glow.tsx     # Mouse-follow glow effect
│   ├── scroll-progress.tsx # Top progress bar
│   ├── theme-toggle.tsx    # Light/dark switch
│   ├── command-palette.tsx # ⌘K quick actions
│   ├── sections/
│   │   ├── hero.tsx
│   │   ├── marquee.tsx
│   │   ├── about.tsx
│   │   ├── capabilities.tsx
│   │   ├── experience.tsx
│   │   ├── skills.tsx
│   │   ├── projects.tsx
│   │   ├── education.tsx   # Education + achievements
│   │   ├── contact.tsx
│   │   └── footer.tsx
│   └── ui/
│       ├── reveal.tsx          # Scroll-triggered fade-in wrapper
│       ├── counter.tsx         # Animated number counter
│       ├── typewriter.tsx      # Typewriter effect + hook
│       └── section-number.tsx  # Editorial section divider
├── lib/
│   ├── data.ts             # ALL personal data — edit this file
│   ├── theme.ts            # Theme helpers + no-flash init script
│   └── utils.ts            # cn() className helper
├── public/                 # Static assets (resume.pdf, og-image, icons)
├── tailwind.config.ts
├── next.config.ts
├── tsconfig.json
└── package.json
```

## Customizing

### 1. Personal Info, Projects, Experience

All content lives in **`lib/data.ts`**. Edit there and every section picks up the changes.

### 2. Colors & Theme

Design tokens are in `app/globals.css` under `:root`. To shift the entire aesthetic, change the accent:

```css
:root {
  --accent: #d97757; /* warm rust — swap to any hex */
}
```

A `.light` class on `<html>` is already wired with a light-mode palette — flip it with a theme toggle if you want.

### 3. Fonts

Fonts are loaded via `next/font/google` in `app/layout.tsx`. To change them, edit the imports there and the CSS-variable references in `globals.css` and `tailwind.config.ts`.

### 4. Contact Form

Out of the box the form opens the visitor's email app with their name and message pre-filled — nothing is silently dropped.

To receive messages directly instead, create a free form at [formspree.io](https://formspree.io) and add its ID:

```bash
NEXT_PUBLIC_FORMSPREE_ID=xxxxxxxx
```

### 5. Resume

The "View Resume" button uses `PROFILE.resumeUrl` in `lib/data.ts` (currently a Google Drive link). To self-host instead, drop `resume.pdf` into `/public` and set `resumeUrl: "/resume.pdf"`.

### 6. Project links

Add `demoUrl` / `repoUrl` to any project in `lib/data.ts` and the Live Demo / Source buttons appear automatically.

## Deploying to Vercel

The fastest path:

```bash
# Install the Vercel CLI (once)
npm i -g vercel

# From the project root
vercel
```

Follow the prompts. For production:

```bash
vercel --prod
```

**Via GitHub (preferred):**
1. Push this repo to GitHub.
2. Go to <https://vercel.com/new> and import the repo.
3. Vercel auto-detects Next.js — no config needed.
4. Add your environment variables in the project settings.
5. Every push to `main` deploys to production; every PR gets a preview URL.

### Custom Domain

In the Vercel dashboard → Project → Settings → Domains. Add your domain and follow the DNS instructions.

## Scripts

| Command         | Purpose                            |
| --------------- | ---------------------------------- |
| `npm run dev`   | Start dev server with hot reload   |
| `npm run build` | Production build                   |
| `npm run start` | Serve production build locally     |
| `npm run lint`  | Lint with ESLint + Next.js rules   |
| `npm run typecheck` | TypeScript check, no emit      |

## Performance Notes

- All animations are GPU-accelerated (`transform`, `opacity` only).
- `prefers-reduced-motion` is respected globally.
- Fonts loaded with `display: swap` and self-hosted by `next/font`.
- `framer-motion` and `lucide-react` are tree-shaken via `optimizePackageImports`.
- The cursor glow disables itself on touch / small screens.

## Future Improvements

- [x] Light/dark theme toggle
- [ ] MDX-driven blog under `/app/blog`
- [ ] Project detail pages at `/projects/[slug]`
- [ ] Three.js / R3F hero background variant
- [ ] View transitions API for cross-page animation
- [ ] Analytics (Vercel Analytics or Plausible)

## License

MIT. Use the structure freely; replace the content with your own.

---

Built with care. Questions? [faizanfayazmir1@gmail.com](mailto:faizanfayazmir1@gmail.com)
