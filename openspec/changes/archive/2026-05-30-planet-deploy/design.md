## Context

The environment detail page already displays the current version and a list of `availableVersions` alongside server controls (Destroy/Summon Shenron). The `PATCH /api/planets/[id]` endpoint currently only accepts `{ isUp }`. Planet state is mutable in-memory.

We need to add version deploy capability — a new card with a version selector dropdown and a deploy button, shown only when the planet is running.

## Goals / Non-Goals

**Goals:**
- Allow users to change a planet's deployed version from the detail page
- Show deploy card only when `isUp: true`
- Dropdown lists all `availableVersions` from the API response
- Button label adapts: "Whis Rollback" for downgrade, "Train with Whis" for upgrade
- Extend existing PATCH endpoint rather than creating new routes

**Non-Goals:**
- No deploy confirmation dialog (button acts immediately)
- No deploy animation or simulated downtime
- No version validation beyond what `availableVersions` provides
- No multi-step deployment pipeline

## Decisions

### 1. Extend PATCH instead of separate deploy endpoint

```
PATCH /api/planets/[id]
Body: { "isUp": true, "version": 3 }
```

The PATCH handler already parses the body. Adding an optional `version` field keeps the API surface small. The handler applies both mutations in a single request.

**Why not a separate `/deploy` endpoint:**
- We're updating a resource field, same as `isUp` — PATCH semantics fit
- Reduces number of route files

### 2. DeployControls as a client component

New `DeployControls` component receives `planetId`, `currentVersionId`, and `availableVersions[]` as props. It manages local state for the dropdown selection. On deploy:
1. PATCH `{ version }` to `/api/planets/[id]`
2. `router.refresh()` to re-render server components

### 3. Button label logic

```
selectedVersionId < currentVersionId → "Whis Rollback"
selectedVersionId > currentVersionId → "Train with Whis"
selectedVersionId == currentVersionId → button disabled
```

This gives clear visual feedback about whether the action is an upgrade or rollback.

### 4. Deploy card placement

A new `Card` titled "Change Version" between the Status card and Version card in `EnvironmentDetail`. It's rendered conditionally — only when `planet.isUp` is true. The Version card continues to show the current version as plain text.

## Risks / Trade-offs

- **Memory-only state** → all deployed versions reset on server restart. Consistent with existing Destroy/Summon behavior.
- **No validation on version IDs** → relies on `availableVersions` being correct. If a version ID is removed from `availableVersions` but still assigned to a planet, it displays but can't be selected in the dropdown. Acceptable for a demo.
