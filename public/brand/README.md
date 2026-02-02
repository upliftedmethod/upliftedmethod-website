# Brand assets

Drop your brand files here so the site can use them.

## What to put here

1. **Brand PDF** (optional reference)  
   - `brand-assets.pdf` – your full brand guide (colors, logo, etc.).  
   - Kept as reference; the site uses the extracted assets below.

2. **PDF pages as PNGs** (optional reference)  
   - In **`pages/`**: `Logos-01.png` through `Logos-19.png`.  
   - Good for quick reference without opening the PDF. See **`pages/README.md`** for the page map.  
   - The site doesn’t load these; they’re for you (or designers) to browse.  
   - To use one as the site logo, copy the best **horizontal** lockup to **`logo.png`** in this folder (see LOGO-USAGE.md).

3. **Logo for the web**  
   - **Preferred:** `logo.svg` – scales cleanly, small file size.  
   - **Or:** `logo.png` – use a high-res version (e.g. 2x for retina).  
   - Export from your .ai in Illustrator (File → Export → SVG or PNG), or use one of the page PNGs (e.g. crop Logos-01 or Logos-06 to a horizontal lockup) and save as `logo.png` here.

4. **Favicon** (optional)  
   - `favicon.ico` (32×32 or 48×48) in this folder, **or**  
   - Put `favicon.ico` in `public/` (site root) so it appears as the browser tab icon.

## Applying your colors

The site palette is in:

- **Tailwind:** `tailwind.config.ts` → `theme.extend.colors`
- **CSS variables:** `app/globals.css` → `:root`

Send the **hex codes** from your PDF (e.g. primary, accent, dark/light variants) and we’ll plug them in.  
If you prefer, you can paste the color page from the PDF here as `colors.png` and we can read it.

## Generated from your PNGs

- **`logo.svg`** – Approximate horizontal lockup (circle + dot + mountain + “uplifted” wordmark) in brand charcoal `#3D3938`, derived from Logos-01. The header and footer use it automatically. Replace with your official export from Illustrator for a pixel-perfect match.
- **Favicon:** `app/icon.svg` in the project root – circular mark only, for the browser tab. Next.js uses it automatically. For a `.ico` (e.g. older browsers), export the circular mark from one of your PNGs as a 32×32 or 48×48 square and convert at [favicon.io](https://favicon.io) or similar; put the result in `app/icon.ico` if you want to override.

## After you add files

- **Logo:** The header and footer use `logo.svg` or `logo.png` (with an inline wordmark fallback if both are missing).
- **Favicon:** Next.js uses `app/icon.svg` (or `app/icon.ico` / `app/icon.png` if present).
- **Colors:** Applied from `colors.png` in `tailwind.config.ts` and `app/globals.css`.
