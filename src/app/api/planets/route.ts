import { planets } from "./planets";

export async function GET() {
  const data = planets.map((p) => ({ id: p.id, isUp: p.isUp, name: p.name }));

  return new Response(JSON.stringify(data), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
