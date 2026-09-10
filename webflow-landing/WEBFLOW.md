# Electris landing page → Webflow

This folder is a **Webflow Client-First rebuild** of the Figma [Landing Page](https://www.figma.com/design/4xlVGtTid0obu5rXEzZRD5/Electris--Copy-?node-id=2349-3122) (artboard **1440**, plus 1920 / 1200 / 900 / 390).

It cannot be pushed into a Webflow project from this repo. Open `index.html` locally as the visual spec, then rebuild the same class names in Webflow Designer so the client can edit without code.

## Preview

Open `webflow-landing/index.html` in a browser (images load from `../assets/`).

## Figma → Webflow breakpoints

| Figma artboard | Webflow breakpoint | Notes |
| --- | --- | --- |
| 1920 | Custom: Desktop XL (`min-width: 1920px`) | Extra side gutters, 1600px hero column |
| 1512 / 1440 | Desktop (base) | Primary layout. Content column 1280px |
| 1200 | Custom: Laptop (`max-width: 1199px`) | Same structure, tighter gutters |
| 900 | Tablet (`max-width: 991px`) | Stacked rows, hamburger nav |
| 390 | Mobile (`max-width: 479px`) | Single column, mobile CTA |

Add the two custom breakpoints in Webflow: **1920px** and **1200px**.

## How to put this in Webflow Designer

1. Create a new Webflow site (or a new page named **Home**).
2. Install [Client-First](https://www.finsweet.com/client-first) (optional but recommended).
3. Recreate each section in order, using the same class names as `index.html`:
   - `navbar_component`
   - `hero_section`
   - `metrics_section`
   - `why_section`
   - `brands_section`
   - `tech_section`
   - `solutions_section`
   - `process_section`
   - `cta_section`
   - `sectors_section`
   - `impact_section`
   - `footer_component`
4. Upload images from `assets/` into Webflow Assets.
5. Turn **Navbar**, **Footer**, and **CTA** into Symbols (Components).
6. Custom code embeds are only needed for:
   - Hero subtract mask
   - Why-section photo notches
   - Process-card notches
   - Audit CTA mirrored notches
   - Footer subtract mask

## Faster first pass (Figma plugin)

In Figma, select the **1440** frame (`2349:3123`) and run **Figma to Webflow**. That gives a rough canvas. Then replace generated classes with the ones in this folder so spacing matches the spec.

## What the client can edit in Webflow

- All copy, buttons, and links
- Hero photo, why photos, solution cards, sector cards
- Nav labels and footer links
- CMS later for Actualités / Secteurs (not in this first page)
