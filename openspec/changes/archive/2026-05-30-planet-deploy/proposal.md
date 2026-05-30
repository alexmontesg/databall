## Why

The environment detail page shows the current version and available versions, but offers no way to change the deployed version. Users should be able to upgrade or roll back a planet's version — adding interactivity and demonstrating how the monitoring dashboard reflects deployment state changes.

## What Changes

- Add `setPlanetVersion(id, versionId)` helper to mutable planet state
- Extend `PATCH /api/planets/[id]` to accept optional `version` field
- Add a new "Train with Whis" card on the environment detail page (only shown when `isUp: true`)
- Card contains a dropdown of available versions and a deploy button
- Button label: "Whis Rollback" when deploying a lower version, "Train with Whis" when deploying a higher version

## Capabilities

### New Capabilities
- `planet-deploy`: Deploy available versions to running planets from the environment detail page

### Modified Capabilities

None.

## Impact

- `src/app/api/planets/planets.ts` — add `setPlanetVersion(id, versionId)` helper
- `src/app/api/planets/[id]/route.ts` — extend PATCH handler to accept `{ version }`
- `src/features/environments/components/environment-detail.tsx` — add deploy card, hide when `!isUp`
- New file: `src/features/environments/components/deploy-controls.tsx` — client component with version dropdown and deploy button
- `src/features/environments/components/planet-controls.tsx` — no changes needed
