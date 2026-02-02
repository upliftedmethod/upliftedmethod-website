# Uplifted Method – Website

Next.js + Tailwind site for Uplifted: **in-studio ARX training, red light therapy, and supplements** at Upper Buena Vista, Miami. Brick-and-mortar first; content engine and headless Shopify for SEO/GEO and LLM visibility.

## Strategy

- **Public:** Studio-first. No van/mobile on the site until moat is established.
- **Content:** Go HAM on written content—educational articles, testimonials, guides. SEO/GEO + rank in LLMs.
- **Shop:** Headless Shopify at `/shop` (coming soon); checkout at checkout.upliftedmethod.com.

## Pages

- **Home** – Hero (Lift Your Energy), in-studio + red light + supplements, testimonials, where we are, Learn & Shop CTAs
- **Services** – In-studio training, red light therapy, ARX (no van)
- **Locations** – Studio at Upper Buena Vista + communities we serve (Key Biscayne, Grove, Gables, Pinecrest, Beach, Surfside, Miami)
- **Blog** – Content engine placeholder (educational, SEO/GEO/LLM)
- **Shop** – Supplements placeholder (headless Shopify coming)
- **About** – Studio story, who we serve, supplements + education
- **Contact** – Phone, email, address, book link
- **ARX** – What ARX is, at Upper Buena Vista only
- **Redirect:** `/van-vs-center` → 301 to `/services`

## Tech

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Schema:** LocalBusiness + FitnessCenter (JSON-LD, studio-first)
- **Booking:** Acuity – https://upliftedmethod.as.me/schedule/550c1c04
- **Shop (planned):** Headless Shopify Storefront API; checkout subdomain

## Run locally (Windows / Cursor)

1. **Install Node.js** (if needed): Run `install-node.ps1` from the LifeOS repo root, or download from [nodejs.org](https://nodejs.org). Restart PowerShell after installing.

2. **From this folder (`uplifted-website`):**
   ```powershell
   cd c:\Users\ericb\Dropbox\LifeOS\uplifted-website
   npm install
   npm run dev
   ```
3. Open **http://localhost:3000**.

## Build

```powershell
npm run build
npm start
```

## Deploy to Vercel (Phase 1 – from Cursor/Windows)

1. **GitHub** – Create a new repo (e.g. `upliftedmethod-website`) at [github.com/new](https://github.com/new). Do **not** add a README.

2. **Push this project** (from `uplifted-website`):
   ```powershell
   cd c:\Users\ericb\Dropbox\LifeOS\uplifted-website
   git init
   git add .
   git commit -m "Initial Uplifted site – studio-first, content + shop"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/upliftedmethod-website.git
   git push -u origin main
   ```

3. **Vercel** – [vercel.com](https://vercel.com) → Continue with GitHub → Add New Project → Import `upliftedmethod-website` → Deploy.

4. **Custom domain** – Settings → Domains → Add upliftedmethod.com (or uplifted.miami). Add CNAME at registrar.

## After Phase 1

- **Content:** Populate `/blog` with educational articles (ARX, red light, recovery, supplements). Target SEO/GEO + LLM citations.
- **Testimonials:** Add more real testimonials to homepage and/or a dedicated page.
- **Shop:** Wire headless Shopify to `/shop`; connect checkout.upliftedmethod.com.
- **Phase 2+:** Competitor analysis, keyword list (in-studio + supplements + content topics). See `tasks/todo.md` in LifeOS.
