# Haochi Hotpot

A Next.js App Router website for Haochi's late-night home kitchen.

## Run

- `npm install`
- `npm run dev` — local development at http://localhost:3000
- `npm run build` — production build and TypeScript validation
- `npm start` — serve the production build

## Routes

- `/`: cinematic sticky scenes, interactive spice selector, ingredient assembly and horizontal momo showcase
- `/menu`: serving/spice/add-on/momo configurator, browser-local saved selections, itemized WhatsApp checkout
- `/craft`: kitchen storytelling with scroll-driven image reveals
- `/order`: live Asia/Karachi kitchen hours, quick orders and Instagram preview

Prices and contact links are centralized in `src/lib/menu.ts`. Kitchen hours are 18:00 inclusive to 02:00 exclusive in Asia/Karachi. Delivery fees and availability are confirmed over WhatsApp; the site does not collect payments or submit an order automatically.

Animation uses GSAP ScrollTrigger with CSS sticky wrappers; no GSAP pinning. Reduced-motion preferences remove scroll-locked layouts and movement. The homepage loader waits for fonts and eager images to settle; failed images do not block entry.

## Assets

The two font families were supplied in `public/assets/fonts`. Food photos are illustrative Unsplash images, not actual Haochi product photos:

- https://images.unsplash.com/photo-1569718212165-3a8278d5f624
- https://images.unsplash.com/photo-1563245372-f21724e3856d

Replace these with approved product photography before a brand launch. The Instagram section is a static moodboard linking to the real profile, not a live feed. Bowl ingredient artwork and logo are inline SVG.
