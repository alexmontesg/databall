## ADDED Requirements

### Requirement: Planet server controls
The system SHALL expose buttons on the /environments/[id] page to toggle a planet's server state between up and down.

#### Scenario: Destroy a running planet server
- **WHEN** user clicks "Destroy" on a planet that is `isUp: true`
- **THEN** the planet's `isUp` SHALL be set to `false`
- **THEN** the page SHALL update to reflect the planet is not responding

#### Scenario: Summon a stopped planet server
- **WHEN** user clicks "Summon Shenron" on a planet that is `isUp: false`
- **THEN** the planet's `isUp` SHALL be set to `true`
- **THEN** the page SHALL update to reflect the planet is up and running

#### Scenario: PATCH updates planet state
- **WHEN** user sends `PATCH /api/planets/[id]` with `{ "isUp": true }`
- **THEN** the planet's `isUp` SHALL be set to the requested value
- **THEN** the endpoint SHALL return JSON with the updated planet object

#### Scenario: Action on invalid planet ID returns 404
- **WHEN** user sends a PATCH to a non-existent planet ID
- **THEN** the endpoint SHALL return a 404 response

#### Scenario: PATCH with missing body returns 400
- **WHEN** user sends `PATCH /api/planets/[id]` without a valid `isUp` field
- **THEN** the endpoint SHALL return a 400 response

#### Scenario: Environments list reflects state changes
- **WHEN** an action changes a planet's `isUp` state
- **THEN** navigating to /environments SHALL show the updated state
