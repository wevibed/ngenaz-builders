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

## Image optimisation (mobile fix + speed)
- `src/components/ui/image.jsx`: local images are now served as responsive WebP (`srcset`/`sizes`, lazy, async decode) and get `object-cover` on mobile so they are never squashed into a differently-shaped box. Desktop layout is unchanged.
- Hero PNGs (2.2 MB each) became WebP (~30-120 KB per size); originals are kept in `source-images/` (not deployed). The hero is preloaded in `index.html`.
- Adding photos: put them in `public/ngenaz/work/`, run `python3 scripts/optimize-images.py`, then rebuild.
