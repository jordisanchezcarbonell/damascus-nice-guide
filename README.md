# Damascus's Nice Guide · Evo France 2026

Where to eat and what to see in Nice during Evo France (Oct 9–11, 2026), by Damascus.
Next.js 16 site in English, Spanish and French, with a map of every spot and a "near me" finder.

## Run locally

```bash
nvm use        # Node 22
npm install
npm run dev
```

- `/` redirects to `/en`, `/es` or `/fr` based on the browser language (`proxy.ts`).
- Text lives in `content/en.ts`, `content/es.ts`, `content/fr.ts`; map labels in `lib/mapText.ts`.
- Map coordinates are in `content/places.ts`.
