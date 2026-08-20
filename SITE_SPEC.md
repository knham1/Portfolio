# Kenny Nham — Portfolio Site Spec

## 1. Purpose & Identity
- **Name/brand:** Kenny Nham (personal name leads; "Tech with Kenny" can be referenced as a handle/subtitle if desired later).
- **Primary goal:** Get hired as a **Software Engineer**. The site should read like a polished, personality-forward resume that makes recruiters/hiring managers want to reach out.
- **Tone:** Playful & creative, but still professional enough for a hiring audience — think "confident, has personality, clearly competent," not gimmicky.

## 2. Tech Stack
- **Framework:** Next.js (React)
- **Styling:** TBD at build time — likely Tailwind CSS for speed, unless you'd rather pick something else.
- **Hosting:** Not decided yet. Built to be easily deployable to Vercel, Netlify, or GitHub Pages (via static export) — decide later.
- **Domain:** No custom domain yet — free subdomain (e.g. Vercel-provided `*.vercel.app`) is fine for now. Custom domain can be added later without rework.

## 3. Site Structure
**Single-page site** with smooth-scroll anchor navigation. Sections, in order:

1. **Hero / Intro**
   - Name, short tagline/headline (e.g. "Software Engineer who [placeholder value prop]").
   - Illustrated avatar or graphic (no real photo).
   - Primary CTAs: "View Resume" (download) and "Contact Me" / links.
2. **About**
   - Short bio/placeholder paragraph — who you are, what kind of engineer you are, what you're looking for.
3. **Experience**
   - Placeholder work history entries (company, role, dates, 2–3 bullet highlights each). Structure supports 2–4 entries.
4. **Skills / Why Hire Me**
   - Grid or tag list of technical skills (languages, frameworks, tools) — placeholders for now.
   - A few "characteristics" or soft-skill callouts (e.g. short cards: "Fast learner," "Ships fast," etc.) — placeholders.
5. **Featured Project**
   - One GitHub project spotlighted with a placeholder: title, short description, tech stack tags, link to GitHub repo, optional live demo link, optional screenshot/graphic.
6. **Contact / Footer**
   - Email, LinkedIn, GitHub links.
   - Resume download button (PDF).
   - Simple footer with copyright/name.

> Note: All work experience, skills, and project content are **placeholders** for now — Kenny will supply real content in a follow-up pass.

## 4. Visual Design
- **Theme:** Dark mode only (no light/dark toggle needed).
- **Palette:** To be recommended during build — dark neutral background with one or two vibrant accent colors, playful but not garish. Will follow accessible-contrast best practices.
- **Typography:** Clean, modern sans-serif for body; a slightly more expressive/bold display font for headings to support the "playful" feel (exact fonts TBD at build time).
- **Avatar/imagery:** Illustrated avatar or graphic representation of Kenny instead of a real headshot. No photo assumed.
- **Motion:** Tasteful, not overdone —
  - Subtle hover states on buttons/links/cards.
  - Scroll-triggered fade/slide-ins for sections.
  - Smooth-scroll navigation between sections.
  - No large/distracting hero animations.

## 5. Content Inventory (placeholders to fill in later)
- [ ] Real bio copy for About section
- [ ] Real work experience (company, title, dates, bullets) — 2–4 entries
- [ ] Real skills list (languages/frameworks/tools + soft skills)
- [ ] Featured GitHub project (repo link, description, tech tags, optional demo link/screenshot)
- [ ] Resume PDF file
- [ ] Contact links: email, LinkedIn URL, GitHub URL
- [ ] Final color palette / font choices sign-off
- [ ] Domain decision (if/when a custom domain is purchased)
- [ ] Hosting provider decision (Vercel / Netlify / GitHub Pages)

## 6. Out of Scope (for now)
- Blog/writing section (not selected — can revisit later if desired)
- Light mode support
- Multi-page routing (site is single-page)
- CMS or dynamic backend — this is a static/mostly-static site

## 7. Next Steps
1. Confirm this spec looks right (or flag anything to change).
2. Scaffold the Next.js project with the section structure above.
3. Build with placeholder content and a first-pass dark theme/palette.
4. Review together, then swap in real content (experience, skills, project, resume).
5. Decide on hosting + (optionally) a custom domain, then deploy.
