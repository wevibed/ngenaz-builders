"""Generate responsive WebP variants for every image in public/ngenaz and write src/lib/image-manifest.json.
Run once after adding images:  python3 scripts/optimize-images.py   (needs Pillow)
Hero originals (PNG) live in source-images/ and are NOT deployed."""
import json, os, glob
from PIL import Image
PUB = "public"
manifest = {}

def variants(img, out_base, widths, quality):
    res = []
    for w in widths:
        if w >= img.width: continue
        h = round(img.height * w / img.width)
        p = f"{out_base}-{w}.webp"
        img.resize((w, h), Image.LANCZOS).save(p, "WEBP", quality=quality, method=6)
        res.append((w, "/" + p[len(PUB) + 1:]))
    return res

# Heroes: PNG (2.2 MB) -> WebP at 640 / 1024 / 1600
for name in ["hero-courtyard", "hero-side"]:
    im = Image.open(f"source-images/{name}.png").convert("RGB")
    base = f"{PUB}/ngenaz/{name}"
    full = im.resize((1600, round(im.height * 1600 / im.width)), Image.LANCZOS)
    full.save(base + ".webp", "WEBP", quality=78, method=6)
    vs = variants(im, base, [640, 1024], 76) + [(1600, f"/ngenaz/{name}.webp")]
    manifest[f"/ngenaz/{name}.webp"] = {"w": full.width, "h": full.height, "set": vs}

# Work photos: add 480 / 800 wide versions next to the existing (<=1280) file
for f in sorted(glob.glob(f"{PUB}/ngenaz/work/*.webp")):
    if os.path.basename(f)[:-5].rsplit("-", 1)[-1].isdigit() and "-" in os.path.basename(f)[16:]: continue  # skip generated variants
    im = Image.open(f).convert("RGB")
    base = f[:-5]
    vs = variants(im, base, [480, 800], 74) + [(im.width, "/" + f[len(PUB) + 1:])]
    manifest["/" + f[len(PUB) + 1:]] = {"w": im.width, "h": im.height, "set": vs}

json.dump(manifest, open("src/lib/image-manifest.json", "w"), indent=1)
print(len(manifest), "images in manifest")
