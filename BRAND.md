# Branding – what to do

You have a PDF (from a .ai file) with colors, logo, etc. Here’s how to use it on the site.

## Voice & positioning (for copy)

- **Tagline:** “Lift your energy”—physical, mental, and spiritual. More energy for life.
- **Audience:** Stressed young professionals, busy executives, busy parents, older folks avoiding decline. Don’t narrow to one segment; energy and capability are the through-line.
- **Voice:** Young, energetic, premium. Longevity and “stay strong for family” where they fit, but brand stays modern and capable, not “senior fitness” or dated.
- **Design inspiration:** [Othership](https://www.othership.us/) — super clean, minimal, warm. Lots of breathing room, scannable sections, no clutter. Aim for "Othership-level clean" without copying. See `data/resources/local-domination-blueprint/othership-inspiration.md` for extracted patterns (pillars, testimonial format, guide language).

**Reference:** `data/resources/local-domination-blueprint/phase6-pt-framing-checklist.md` (tagline & audience); `data/projects/Uplifted/summary.md` (business context).

### Copy standards (site + listings)

Use these for all public copy—website pages, GBP, Bing, Yelp, Apple, Facebook, etc.:

- **Benefit-led:** Lead with outcomes (energy, recovery, capability), not feature lists or neighborhood stuffing.
- **Humanization first:** Read aloud; if it sounds templated or scammy, rewrite. No superlatives (“only in Miami,” “best,” etc.); SEO comes from naming modalities and location clearly.
- **Branded:** “Lift your energy,” transformational wellness, Upper Buena Vista / Miami. Shiftwave = nervous system recovery (say what it does, don’t boast).
- **Ready-to-use copy** for listings (descriptions, “From the business,” Bing long description): `data/resources/local-domination-blueprint/listing-copy-guide.md`. Adapt short/long versions per platform; keep NAP and service area in form fields only, not in public description text.

When adding or editing site pages, run them through these standards and the listing guide for consistency.

---

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
