# Databall

Dragon Ball Z-themed monitoring dashboard — a coding test built with **Next.js 16 (App Router)**, **Tailwind CSS v4**, **shadcn/ui**, **Recharts**, and **Zustand**.

All API data is hardcoded in Next.js route handlers to simulate an external monitoring service, rather than relying solely on server components.

## Pages

| Route | Page | Highlights |
|---|---|---|
| `/` | **Overview** | 4 metric widgets (power level radial bar, combat stats radar, dragon balls count, Krillin death-probability line chart). Data fetched client-side from `/api/metrics/*`. |
| `/logs` | **Logs** | Real-time SSE stream (`/api/logs/stream`) pushing random Dragon Ball-themed log events. Zustand store (capped at 200 entries). URL-based filtering by log level (`INFO` / `WARNING` / `CRITICAL`). |
| `/environments` | **Environments** | Server-fetched planet list (`/api/planets`) with detail pages (`/environments/[id]`) that compose data from `/api/planets/[id]` and `/api/versions`. Read-only. |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Stack

- **Next.js 16** (App Router) — pages and API routes
- **React 19**
- **TypeScript** (strict)
- **Tailwind CSS v4** + **tw-animate-css**
- **shadcn/ui** (Radix-Nova primitives)
- **Recharts** — charts
- **Zustand** — client-side state (logs)
- **Lucide** — icons
