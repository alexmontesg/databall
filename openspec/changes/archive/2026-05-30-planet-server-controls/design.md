## Context

The /environments/[id] page displays a planet's status (isUp) and version but is purely read-only. The planet data lives in a static `const` array in `src/app/api/planets/planets.ts`. The page is a server component that fetches data via internal fetch.

We need to make planet state mutable through UI controls, with state persisting only in process memory (resets on server restart).

## Goals / Non-Goals

**Goals:**
- Add Destroy/Summon Shenron controls to each planet's detail page
- State lives in-memory, no database or file persistence
- Single `PATCH /api/planets/[id]` endpoint to toggle planet state
- The /environments list reflects state changes after an action
- Extract detail display into a reusable component

**Non-Goals:**
- No SSE log stream integration
- No multi-user coordination (in-memory = one process)
- No undo/confirmation dialogs (buttons act immediately)
- No undo/confirmation dialogs — buttons act immediately

## Decisions

### 1. Mutable state via module-level `let`

`planets.ts` changes from `const planets = [...]` to `let planets = [...]` with an exported `setPlanetIsUp(id, isUp)` helper that mutates in-place.

**Alternatives considered:**
- Singleton class: overkill for 3 planets
- File system persistence: unnecessary for a demo

### 2. Single PATCH endpoint

```
PATCH /api/planets/[id]
Body: { "isUp": true }
```

The PATCH handler reads `{ isUp }` from the request body, calls `setPlanetIsUp(id, isUp)`, and returns the updated planet.

We're only changing one boolean flag — three separate endpoints would be ceremony with no benefit. PATCH is the correct verb for partial resource update.

### 4. PlanetControls as a client component

PlanetControls is a `"use client"` component rendered as a child of the (still server-rendered) environment detail page. It receives `planetId` and initial `isUp` as props. On button click it:
1. PATCHes `{ isUp: <newState> }` to `/api/planets/[id]`
2. Calls `router.refresh()` to re-render server components (including the list page if navigated via client router)

Two buttons, only one shown at a time:
- **Destroy** (when `isUp: true`) — `PATCH { isUp: false }`
- **Summon Shenron** (when `isUp: false`) — `PATCH { isUp: true }`

**Why not server actions:**
- Route handler already exists at `api/planets/[id]/` — PATCH is a natural extension

### 5. Environments list freshness

The /environments page is a server component that fetches `GET /api/planets`. After an action, `router.refresh()` causes Next.js to re-execute the server component tree, fetching fresh data. No additional cache-busting needed.

## Risks / Trade-offs

- **Memory-only state** → all planets reset on any server restart (dev or prod). Acceptable for a demo.

- **`router.refresh()` is client-side** → if the user navigates directly to /environments via URL bar after an action, they see stale data. Mitigation: add `export const dynamic = "force-dynamic"` to the /environments page to always fetch fresh data.
