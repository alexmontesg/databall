## ADDED Requirements

### Requirement: Planet version deploy
The system SHALL allow users to change a planet's deployed version from the /environments/[id] page when the planet is running.

#### Scenario: Deploy card visible on running planet
- **WHEN** user visits a planet detail page where `isUp: true`
- **THEN** a deploy card SHALL be displayed with a version dropdown and deploy button

#### Scenario: Deploy card hidden on stopped planet
- **WHEN** user visits a planet detail page where `isUp: false`
- **THEN** no deploy card SHALL be displayed

#### Scenario: User selects a higher version and deploys
- **WHEN** user selects a version with `id > currentVersion` from the dropdown
- **THEN** the button SHALL read "Train with Whis"
- **WHEN** user clicks the button
- **THEN** a `PATCH /api/planets/[id]` with `{ "version": <selectedId> }` SHALL be sent
- **THEN** the page SHALL update to reflect the new version

#### Scenario: User selects a lower version and deploys
- **WHEN** user selects a version with `id < currentVersion` from the dropdown
- **THEN** the button SHALL read "Whis Rollback"
- **WHEN** user clicks the button
- **THEN** a `PATCH /api/planets/[id]` with `{ "version": <selectedId> }` SHALL be sent
- **THEN** the page SHALL update to reflect the new version

#### Scenario: Deploy button disabled when current version selected
- **WHEN** the dropdown selection matches the planet's current version
- **THEN** the deploy button SHALL be disabled

#### Scenario: PATCH endpoint accepts isUp and version together
- **WHEN** user sends `PATCH /api/planets/[id]` with both `{ "isUp": true, "version": 3 }`
- **THEN** both `isUp` and `version` SHALL be updated on the planet
