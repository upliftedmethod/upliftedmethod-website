# Branding – what to do

You have a PDF (from a .ai file) with colors, logo, etc. Here’s how to use it on the site.

**Can the site convert the PDF to SVG?** No. The site can’t open your PDF or .ai file. You export the logo from Illustrator (or export a PNG); the site then displays it. Until you add `logo.svg` or `logo.png`, the site shows a **styled wordmark fallback** (inline SVG “uplifted” in brand charcoal). See **`public/brand/LOGO-USAGE.md`** for exact usage, sizes, and recommended export colors.

## 1. Put the PDF in the project

- Copy your brand PDF into **`public/brand/brand-assets.pdf`**.
- Use it as the single reference. The site doesn’t read the PDF directly; you’ll use it to pull out logo and colors.

## 2. Add your logo

Export the logo for web from your .ai (or from the PDF):

- **Best:** **`public/brand/logo.svg`** – scales well, small file.
- **Or:** **`public/brand/logo.png`** – e.g. 2× size for retina (e.g. 280×80px for a ~140×40 logo).

The header and footer will use `logo.svg` if it exists, then try `logo.png`, otherwise show the text “Uplifted”.

## 3. Apply your colors

The site palette lives in:

- **`tailwind.config.ts`** – `theme.extend.colors` (primary, accent, neutral)
- **`app/globals.css`** – `:root` CSS variables

**Option A – You send the hex codes**  
From your PDF, note:

- Primary (main brand)
- Primary dark / light (hover, tints)
- Accent (e.g. CTAs)
- Accent dark / light
- Neutral (text/background)

Paste them here (or in a short note) and we’ll plug them into the two files above.

**Option B – You add a color reference image**  
Export the “colors” page from the PDF as **`public/brand/colors.png`**. We can read the image and suggest the Tailwind/CSS updates.

## 4. Favicon (browser tab icon)

- Export a square logo or icon (e.g. 32×32 or 48×48).
- Save as **`public/favicon.ico`** (in the site root, not inside `brand/`).

The site will use it as the tab icon.

## Summary

| What        | Where to put it              | Result |
|------------|------------------------------|--------|
| Brand PDF  | `public/brand/brand-assets.pdf` | Reference only |
| Logo       | `public/brand/logo.svg` or `.png` | Header + footer |
| Color ref  | Hex codes or `public/brand/colors.png` | We update Tailwind + CSS |
| Favicon    | `public/favicon.ico`         | Browser tab icon |

After you add the PDF and logo (and optionally colors/favicon), say what you added and we’ll finish wiring colors and favicon if needed.
