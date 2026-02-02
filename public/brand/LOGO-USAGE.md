# How the logo is used on the site

## Where it appears

| Place   | Background        | Size              | Shape to export        |
|---------|-------------------|-------------------|-------------------------|
| **Header** | White (`bg-white/95`) | **40px tall**, max 180px wide | **Horizontal** lockup (fits in nav bar) |
| **Footer** | Light gray (`bg-neutral-50`) | Same as header   | Same                   |
| **Favicon** (optional) | Browser tab       | 32×32 or 48×48 px | **Square** – circular mark only works well |

So you need **one horizontal logo** that looks good at **40px height** on a white/light background. A tall “stack” (circle above wordmark above tagline) would get squashed; a **horizontal** layout (circle + wordmark side by side, or wordmark only) works best.

---

## Best colors for the export

The logo sits on **white** (header) and **light gray** (footer). Two good options:

1. **Charcoal** `#3D3938`  
   - Reads as your main brand text. Clear, professional. Use this if you want the logo to feel like “primary” text/brand.

2. **Primary orange** `#ED5F2D`  
   - Pops on white. Use this if you want the logo to be the main brand hit; CTAs can stay orange too.

**Recommendation:** Charcoal for the main logo on the site. You can always export a second file (e.g. `logo-orange.svg`) for hero or dark backgrounds later.

---

## Can the site convert PDF to SVG?

**No.** The site (and I) can’t open your PDF or .ai file or export vector paths from it. You need to export the logo yourself:

- **From Illustrator:** Open the .ai, select the art (e.g. from page 6: circle + wordmark + tagline, or just circle + wordmark), **File → Export → Export As → SVG**.
- **From Acrobat:** Open the PDF, use **Export** or **Edit PDF** to export the logo page as an image; then use an online tool (e.g. vectorizer.io) to trace to SVG, or export as PNG and use that (see below).
- **PNG is fine:** If SVG is a hassle, export a **high-res PNG** (e.g. 2× the display size: 360px wide for a 180px logo) and save as `public/brand/logo.png`. The site will use it; it will scale and look good on retina.

Once you have **one file** in `public/brand/` named **`logo.svg`** or **`logo.png`**, the header and footer will use it automatically. Until then, the site shows a styled wordmark fallback (no file needed).

---

## Summary

- **Export:** One **horizontal** logo (circle + wordmark, or wordmark only), **charcoal `#3D3938`** (or orange `#ED5F2D` if you prefer).
- **Format:** SVG preferred; PNG (e.g. 360px wide) is fine.
- **File:** Save as `public/brand/logo.svg` or `public/brand/logo.png`.
- **Favicon (optional):** Export the circular mark as a square 32×32 or 48×48, save as `public/favicon.ico`.
