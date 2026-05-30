## 1. Mutable planet state

- [x] 1.1 Convert `planets` from `const` to `let` in `src/app/api/planets/planets.ts`
- [x] 1.2 Add exported `setPlanetIsUp(id: number, isUp: boolean)` helper

## 2. PATCH endpoint

- [x] 2.1 Add `PATCH` handler to `src/app/api/planets/[id]/route.ts` — reads `{ isUp }` from body, mutates state, returns updated planet

## 3. Extract environment detail into a feature component

- [x] 3.1 Create `src/features/environments/components/environment-detail.tsx` with the display logic from `/environments/[id]/page.tsx`
- [x] 3.2 Update `src/app/environments/[id]/page.tsx` to use the extracted component

## 4. PlanetControls client component

- [x] 4.1 Create `src/features/environments/components/planet-controls.tsx` with Destroy (isUp) and Summon Shenron (!isUp) buttons
- [x] 4.2 Wire buttons to `PATCH /api/planets/[id]` and call `router.refresh()` on success

## 5. Environments list freshness

- [x] 5.1 Add `export const dynamic = "force-dynamic"` to `src/app/environments/page.tsx` to always fetch fresh planet state
