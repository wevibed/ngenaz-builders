# Ngenaz Builders

Marketing site for Ngenaz Builders — construction, building and roofing contractor.

Static Vite + React single-page site. No backend, no auth, no data entities — content lives in
the `src/components/site/*` section components, with a WhatsApp link (`src/lib/site.js`) as the
only contact mechanism.

## Run Locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Output goes to `dist/`.

## Deploy — Cloudflare Pages

| Setting | Value |
|---|---|
| Framework preset | Vite |
| Build command | `npm run build` |
| Output directory | `dist` |
| Root directory | `/` |

No environment variables are required.

## Notes

- Section images (`Hero`, `Introduction`, `OurWork`, `RoofingFeature`, `Services`) are served from
  Base44's media CDN (`media.base44.com`) — a leftover external dependency from the original build
  platform, not something this repo controls. If that CDN is ever taken down, those image URLs
  will need to be re-hosted (e.g. to Cloudflare R2/Images).
