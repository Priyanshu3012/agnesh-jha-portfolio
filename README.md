# Agnesh Jha — Portfolio

Portfolio site for Agnesh Jha (Senior UI Visual Designer at MyOperator &
Heyo), built with Next.js App Router, TypeScript, and Tailwind CSS v4. The
homepage is a single-page anchor-nav site; `/portfolio` is a full case-study
subpage.

## Structure

```
app/
  layout.tsx        Root layout: fonts (Manrope + Inter via next/font), site-wide SEO defaults
  page.tsx           Homepage — composes all anchor-nav sections in order
  globals.css        Theme tokens (CSS variables) + Tailwind v4 @theme
  favicon.ico
  portfolio/
    page.tsx          /portfolio — MyOperator Website Revamp case study, own metadata

components/
  Header.tsx          Homepage sticky header, anchor nav, mobile hamburger ("use client")
  Hero.tsx             #home — headline, stats, portrait
  About.tsx            #about — bio + brand links
  Portfolio.tsx        #portfolio — featured projects grid (links out to case studies)
  Experience.tsx       #experience — current role
  Skills.tsx           #tools — "Ways of Working" skills grid
  Awards.tsx           #awards — award recognition
  Testimonials.tsx     #testimonials — client/colleague quotes
  Clients.tsx          #freelance-clients — client logo grid
  Contact.tsx          #contact — mailto / tel / WhatsApp / socials
  Footer.tsx           Shared footer (`backHref` prop: "#home" on the homepage, "/" elsewhere)
  ScrollReveal.tsx     Client wrapper adding a subtle fade/slide-in on scroll

  portfolio/           Components used only by the /portfolio case-study page
    PortfolioHeader.tsx   Sticky header with page-route nav + Resume link ("use client")
    PortfolioHero.tsx     Case study banner + intro
    ProjectMeta.tsx       Company/Role/Duration/Team/Tools meta cards
    Objective.tsx         Objective + competitors
    ProblemStatement.tsx  Old-site pain-point table + screenshot gallery
    Goals.tsx             Redesign goals
    UxStrategy.tsx        4-step process + wireframe gallery
    Persona.tsx           User persona card
    AfterRevamp.tsx       Before/after image pairs + revamped-site gallery
    Metrics.tsx           Before/after results table
    StyleGuide.tsx        Style guide gallery
    ThankYou.tsx          Closing section
    Lightbox.tsx          Accessible modal (Escape / arrow keys / focus) ("use client")
    LightboxGallery.tsx   Thumbnail grid that opens Lightbox ("use client")

lib/
  data.ts             Homepage content (single source of truth) — edit here
                       to update copy, projects, testimonials, or clients.
  portfolioData.ts     /portfolio case-study content — edit here to update
                       that page's copy, tables, and image lists.

public/
  images/             Portrait, portfolio thumbnails, award photo, testimonial headshots
  logos/              Site logo mark + freelance client logos
  portfolio/          Images used only by the /portfolio case-study page
  Agnesh-Jha_UI-Visual-Designer_Resume.pdf   Linked from the case-study header
```

Homepage sections are anchor-linked (`#home`, `#about`, …) and use native CSS
`scroll-behavior: smooth` with `scroll-margin-top` on each `<section>` so the
sticky header never covers the target — no JS scroll library needed. The
case-study page at `/portfolio` is a normal routed page with its own header,
nav, and metadata.

## Design notes

The live reference site (agneshjha.in, including `/portfolio`) was
unreachable at build time (connection refused), so its exact CSS/hex values
could not be sampled for either page. The dark theme here is a deliberate,
considered palette (`app/globals.css` `:root`) inferred from the site's
white-logo asset variants, which imply a near-black background. All colors
are CSS variables (`--background`, `--surface`, `--foreground`, `--muted`,
`--accent`, `--accent-2`) mapped into Tailwind via `@theme inline` — retune
them in one place if you want to match the live site more closely later. The
`/portfolio` case-study page reuses these same tokens so it stays visually
consistent with the homepage.

The Resume link on `/portfolio` points to `Agnesh_Jha_Resume.pdf` (copied in
as `Agnesh-Jha_UI-Visual-Designer_Resume.pdf`) since the exact filename from
the content brief wasn't in the provided assets — swap the file in `/public`
if you have the correct one.

## Running locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

## Deploying to Vercel

1. Push this repository to GitHub (or GitLab/Bitbucket).
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Framework preset is auto-detected as Next.js — no extra config needed.
4. Click **Deploy**.

Alternatively, from the CLI:

```bash
npm i -g vercel
vercel
```

## Content not included

Homepage: every asset referenced in the content brief was found in the
provided asset folder and is in use — no missing images.

`/portfolio`: every image referenced was found in `agnesh_assets/Portfolio`
and is in use. The only miss was the resume PDF filename (see above), which
was substituted with the closest available file.
# agnesh-jha-portfolio
