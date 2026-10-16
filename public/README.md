# /public directory

Put your static assets here. The site references:

- `resume.pdf` — optional, if you'd rather self-host the resume (set `resumeUrl: "/resume.pdf"` in `lib/data.ts`)

Favicons and the social share image are generated in code (`app/icon.tsx`, `app/apple-icon.tsx`, `app/opengraph-image.tsx`), so no image files are needed here.

All files in `/public` are served at the root: `/resume.pdf` → `https://yoursite.com/resume.pdf`.
