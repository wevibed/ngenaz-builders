# AGENTS.md

## Project Context

This is the Ngenaz Builders marketing site — a static Vite + React single-page app deployed on
Cloudflare Pages. It was migrated off the Base44 platform (Base44 SDK, auth, and build plugin
removed); treat it as plain, user-owned application code and preserve existing conventions.

Start with `README.md` for local setup and deploy instructions.

## Key Files

- `src/pages/Home.jsx`: assembles the single page from the section components.
- `src/components/site/*`: the page sections — Hero, Introduction, Services, OurWork, Process,
  WhyUs, RoofingFeature, CapabilityStrip, ProjectEnquiry, Contact, Navbar, Footer, MobileCTA.
- `src/lib/site.js`: WhatsApp link/number constants used across the contact sections.
- `vite.config.js`: plain Vite + React config with an explicit `@` → `src` alias.

## Working Notes

- `npm run dev` / `npm run build` are the only commands needed — no CLI, no local backend, no auth.
- There is no database, API, or contact form backend — all calls-to-action are WhatsApp links.
- Section images are hosted on Base44's CDN (`media.base44.com`), referenced by URL only — no SDK
  call. If that CDN ever goes away, re-host the images and update the URLs in the relevant
  component.
