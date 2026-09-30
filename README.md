# Movie Explorer

A React app to search and browse movies using the [TMDB API](https://www.themoviedb.org/documentation/api).

## Features
Search (debounced), movie details page, ratings, genre filters, pagination, responsive layout, error handling with retry, loading indicators.

## Tech
React 18, React Router 6, Vite. Hooks: `useState`, `useEffect`, plus custom `useFetch` and `useDebounce`. Search/filter/page state is kept in the URL via `useSearchParams`.

## Setup
1. Get a free API key at https://www.themoviedb.org/settings/api
2. `cp .env.example .env` and paste your key
3. `npm install`
4. `npm run dev`

## Deploy (Vercel / Netlify)
Push to GitHub, import the repo, set the env var `VITE_TMDB_API_KEY`, build command `npm run build`, output `dist`. SPA rewrites are already configured (`vercel.json`, `public/_redirects`).

## AI-Assisted Activity (fill in with your own prompts)
- **Generated components:** e.g. MovieCard, GenreFilter, Pagination from AI prompts.
- **Refactor for reusability:** Repeated fetch logic extracted into `useFetch`; rating UI into `Rating`; shared `Loader`/`ErrorMessage`.
- **State troubleshooting:** Fixed stale responses overwriting new ones with a `cancelled` flag in `useFetch`; moved search/filter state to URL params to keep it in sync.
