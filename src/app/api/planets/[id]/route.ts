import { notFound } from "next/navigation";
import { planets, setPlanetIsUp } from "../planets";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const data = planets.find((p) => p.id === parseInt(id));

  if (!data) {
    return notFound();
  }

  const origin = new URL(req.url).origin;
  const versionsRes = await fetch(`${origin}/api/versions`);
  const versions = await versionsRes.json();

  return new Response(
    JSON.stringify({
      ...data,
      version: versions.find((v: { id: number }) => v.id === data?.version),
      availableVersions: versions,
    }),
    {
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
}

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const planetId = parseInt(id);

  if (!planets.find((p) => p.id === planetId)) {
    return notFound();
  }

  const body = await req.json();

  if (typeof body.isUp !== "boolean") {
    return new Response(JSON.stringify({ error: "isUp must be a boolean" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  setPlanetIsUp(planetId, body.isUp);
  const updated = planets.find((p) => p.id === planetId);

  return new Response(JSON.stringify(updated), {
    headers: { "Content-Type": "application/json" },
  });
}
