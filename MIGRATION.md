# Base44 → Cloudflare Pages Migration Report — Ngenaz Builders

## Summary

The simplest of the four sites migrated so far. A single-page marketing site (Hero, Introduction,
Services, OurWork, Process, WhyUs, RoofingFeature, CapabilityStrip, ProjectEnquiry, Contact) wrapped
in the same dead Base44 auth check as the others, with no custom data entities at all — the only
entity defined in `base44/entities/` was the built-in `User`, used purely for the auth flow that
was never wired to anything. No live-data risk here, unlike Forbes.

## Audit findings

- Single route: `Home` — `App.jsx` had no other page routes defined, only a placeholder comment
  (`// Add page imports here`).
- `AuthContext` wrapped the whole app behind `base44.app.getPublicSettings()`, blocking rendering
  on a spinner. **Removed.**
- The five auth pages (Login, Register, ForgotPassword, ResetPassword, OAuthConsent) plus
  `AuthLayout`, `UserNotRegisteredError`, `ProtectedRoute` were never routed. **Removed.**
- `GoogleIcon.jsx` was only used by `Login.jsx` (for the Google sign-in button) — orphaned once
  `Login.jsx` was removed. **Removed.**
- Contact/enquiry sections (`Contact.jsx`, `ProjectEnquiry.jsx`) use plain WhatsApp links
  (`src/lib/site.js`), no Base44 form/email integration — nothing to replace there.
- Five section components (`Hero`, `Introduction`, `OurWork`, `RoofingFeature`, `Services`)
  reference images on `media.base44.com` by plain URL string — the same CDN-dependency pattern as
  the other three sites.

## Changes made

**Removed:**
- `@base44/sdk`, `@base44/vite-plugin`, `nitro` from `package.json`
- Base44 plugin from `vite.config.js`
- `base44/` platform-config directory
- `src/api/base44Client.js`, `AuthContext.jsx`, `app-params.js`, `authReturnTo.js`
- 5 unused auth pages + `AuthLayout.jsx`, `UserNotRegisteredError.jsx`, `ProtectedRoute.jsx`,
  `GoogleIcon.jsx` (orphaned once `Login.jsx` was gone)
- Stale `package-lock.json`, `.env.local`, `.git`

**Rewrote:**
- `vite.config.js` — dropped the Base44 plugin, added an explicit `@` → `src` alias.
- `App.jsx` — dropped the `AuthProvider`/`AuthenticatedApp` wrapper; the single `Home` route (plus
  the `*` 404 route) renders directly.
- `PageNotFound.jsx` — dropped the `base44.auth.me()` admin-role lookup and its note block.
- `.gitignore` / `.npmrc` — dropped Base44-specific lines.
- `index.html` — removed the Base44-logo favicon link and the `manifest.json` link (pointed at a
  file absent from this export).
- `package.json` — renamed from the placeholder `"base44-app"` to `"ngenaz-builders"`.
- `README.md` / `AGENTS.md` — rewritten for the static-site workflow, no Base44 CLI.

**Left intentionally:**
- `src/components/ui/image.jsx`, `responsive-image.jsx`, `use-responsive-image.jsx`,
  `image-helpers.js` — pure URL/string handling against `media.base44.com`, no SDK call.
- **Section images in `Hero.jsx`, `Introduction.jsx`, `OurWork.jsx`, `RoofingFeature.jsx`,
  `Services.jsx` still point to `media.base44.com`.** Same live external-dependency caveat as
  Buffalo and Real Hardware: if that CDN goes away, these images 404 and need re-hosting.

## Verification

No network access in this sandbox, so `npm install` / `npm run build` were not run. Verified
instead by:
- Tracing the import graph reachable from `src/main.jsx` (31 files) against the real
  `vite.config.js` alias — all resolve, case-sensitive.
- Separately scanning every `@/...` import in the whole `src/` tree — none broken.
- Full-tree grep for remaining `base44` references — only the CDN-URL handling described above.

Please run `npm install && npm run build && npm run dev` once locally (or let Cloudflare Pages do
the build) to get a real confirmed PASS — and make sure the migrated files actually get pushed to
whatever repo Cloudflare Pages is building from before redeploying (this tripped up the Forbes
deploy last time: the original Base44 code had never actually been replaced on GitHub).

## Deploy — Cloudflare Pages

| Setting | Value |
|---|---|
| Framework preset | Vite |
| Build command | `npm run build` |
| Output directory | `dist` |
| Root directory | `/` |

No environment variables required.
