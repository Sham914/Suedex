# Suedex launch site

`npm install && npm run dev`

Edit content only in `data/`: brand.ts (launchDate, contactEmail, privacyUrl, tagline), products.ts (images, price), social.ts (instagramUrl).
Images: `src: null` renders a tonal placeholder. Drop files in `public/products/` and set paths. Remote URLs need `next.config.mjs` remotePatterns.
Email capture: demo mode until `NEXT_PUBLIC_NOTIFY_ENDPOINT` is set (see lib/subscribe.ts).
