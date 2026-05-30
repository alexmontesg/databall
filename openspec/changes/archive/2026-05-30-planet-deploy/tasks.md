## 1. Mutable version state

- [x] 1.1 Add `setPlanetVersion(id: number, versionId: number)` helper to `src/app/api/planets/planets.ts`

## 2. Extend PATCH endpoint

- [x] 2.1 Update `PATCH` handler in `src/app/api/planets/[id]/route.ts` to accept optional `version` field and apply it alongside `isUp`

## 3. DeployControls client component

- [x] 3.1 Create `src/features/environments/components/deploy-controls.tsx` with version dropdown and deploy button
- [x] 3.2 Wire deploy button to `PATCH /api/planets/[id]` with selected version and call `router.refresh()` on success
- [x] 3.3 Implement button label logic: "Whis Rollback" for downgrade, "Train with Whis" for upgrade, disabled when current version selected

## 4. Wire into environment detail page

- [x] 4.1 Add deploy card to `src/features/environments/components/environment-detail.tsx` only when `planet.isUp` is true
- [x] 4.2 Pass deploy controls back to the page component to use the same `isUp` guard from the fetched data

## 5. Documentation

- [x] 5.1 Update README.md to mention the deploy feature in the environments page row
