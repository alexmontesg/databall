export const planets = [
  { id: 1, name: "Earth", isUp: true, version: 4 },
  { id: 2, name: "Namek", isUp: true, version: 2 },
  { id: 3, name: "Planet Vegeta", isUp: false, version: 1 },
];

export function setPlanetIsUp(id: number, isUp: boolean) {
  const planet = planets.find((p) => p.id === id);
  if (planet) {
    planet.isUp = isUp;
  }
}
