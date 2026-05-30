## Why

The environment detail page shows planet status (up/down) but offers no way to change it. Users observing the monitoring dashboard should be able to simulate server state transitions — start a stopped server, stop a running one, or restart. This makes the demo interactive and demonstrates how the monitoring UI responds to state changes.

## What Changes

- Convert `planets` from `const` to module-level `let` for in-memory mutable state
- Add `PATCH /api/planets/[id]` endpoint accepting `{ isUp: boolean }` to toggle planet state
- Extract the current environment detail page into a component under `features/environments/components/`
- Add `PlanetControls` client component with Destroy (stop) and Summon Shenron (start) buttons
- The /environments list page revalidates to reflect state changes

## Capabilities

### New Capabilities
- `planet-server-controls`: Start, stop, and restart simulated planet servers from the environment detail page

### Modified Capabilities

None — no existing capabilities to modify.

## Impact

- `src/app/api/planets/planets.ts` — change from `const` to `let`, expose `setPlanetIsUp(id, boolean)` helper
- `src/app/api/planets/[id]/route.ts` — add PATCH handler alongside existing GET
- `src/app/environments/[id]/page.tsx` — extract display logic into a component
- New file: `src/features/environments/components/environment-detail.tsx` (extracted from page)
- New file: `src/features/environments/components/planet-controls.tsx` (client component with Destroy/Summon Shenron buttons)
- `src/app/environments/page.tsx` — may need revalidation logic to reflect updated planet states
